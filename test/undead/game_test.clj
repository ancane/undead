(ns undead.game-test
  (:require [undead.game :refer :all]
            [clojure.test :refer :all]))


(defn find-face-index [game face]
  (first (keep-indexed (fn [index tile]
                         (when (and (= face (:face tile))
                                    (not (:revealed? tile)))
                           index))
                       (:tiles game))))

(defn reveal-one [face game]
  (reveal-tile game (find-face-index game face)))

(deftest game
  (is (=
       {:h1 2 :h2 2 :h3 2 :h4 2 :h5 2 :fg 2 :zo 3 :gy 1}
       (->> (create-game) :tiles (map :face) frequencies)))
  (is (< 10 (count (set (repeatedly 100 create-game)))))
  (is (= {:remaining 30} (->> (create-game) :sand frequencies)))
  (is (= {nil 16} (->> (create-game) prep :tiles (map :face) frequencies)))
  ;; keap revealed tiles
  (is (= {nil 15 :h1 1} (->> (create-game) (reveal-one :h1) prep :tiles (map :face) frequencies)))
  ;; keap matched tiles
  (is (= {nil 14 :h1 2} (->> (create-game) (reveal-one :h1) (reveal-one :h1) prep :tiles (map :face) frequencies)))
  ;; tile ids
  (is (= (range 0 16) (->> (create-game) prep :tiles (map :id))))
  )

(deftest tiles
  (is (= 1 (->> (reveal-tile (create-game) 0)
                :tiles (filter :revealed?) count)))
  ;; not allowed to reveal more then 2 tiles
  (is (= [:h1 :h2]
         (->> (create-game)
            (reveal-one :h1)
            (reveal-one :h2)
            (reveal-one :h3)
            :tiles
            (filter :revealed?)
            (map :face)
            (sort))))  

  ;; match tiles if same face revealed
  (is (=
       [:h1 :h1]
       (->> (create-game)
            (reveal-one :h1)
            (reveal-one :h1)
            :tiles
            (filter :matched?)
            (map :face))))

  ;; match new tile after 2 revealed
  (is (=
       [:h3]
       (->> (create-game)
            (reveal-one :h1)
            (reveal-one :h1)
            (reveal-one :h3)
            :tiles
            (filter :revealed?)
            (map :face))))

  ;; foggy board
  (is (->> (create-game)
           (reveal-one :fg)
           (reveal-one :fg)
           :foggy?))

  ;; zombies
  (is (= [:zombie :zombie :zombie :remaining]
         (->> (create-game)
              (reveal-one :zo)
              (reveal-one :zo)
              :sand
              (take 4))))

  ;; revealing 2 zombies turns graveyard into zombies
  (is (= {:h1 2 :h2 2 :h3 2 :h4 2 :h5 2 :fg 2 :zo 4}
         (->> (create-game)
              (reveal-one :zo)
              (reveal-one :zo)
              :tiles (map :face) frequencies
              )))  
  )


;; test 
(deftest ticks-test

  (is (= 2 (->> (create-game)
                (reveal-one :h1)
                (reveal-one :h2)
                tick tick
                :tiles (filter :revealed?) count)))

  (is (= 0 (->> (create-game)
                (reveal-one :h1)
                (reveal-one :h2)
                tick tick tick
                :tiles
                (filter :revealed?) count)))

  (is (=
       {nil 14 :h1 1 :h2 1}
       (->> (create-game)
            (reveal-one :h1)
            (reveal-one :h2)
            tick tick tick tick
            prep :tiles (map :face) frequencies)))
  )

(defn- tick-n [n game]
  (first (drop n (iterate tick game))))

(deftest die-from-zombies-test

  (is (= [:gone :remaining]
         (->> (create-game)
              (tick-n 5)
              :sand (take 2))))

  ;; all sand is gone after 150 ticks
  (is (= {:gone 30}
         (->> (create-game)
              (tick-n 150)
              :sand frequencies)))

  ;; no more sand gone after 150 ticks
  (is (= {:gone 30}
         (->> (create-game)
              (tick-n 155)
              :sand frequencies)))

  ;; dead?
  (is (= true
         (->> (create-game)
              (tick-n 151)
              :dead?)))

  )
