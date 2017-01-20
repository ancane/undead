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
  (is (=
       #{{:face :h1 :revealed? true}
         {:face :h2 :revealed? true}}
       (->> (create-game)
            (reveal-one :h1)
            (reveal-one :h2)
            (reveal-one :h3)
            :tiles
            (filter :revealed?)
            (set))))  

  ;; match tiles if same face revealed
  (is (=
       [{:face :h1 :matched? true}
        {:face :h1 :matched? true}]
       (->> (create-game)
            (reveal-one :h1)
            (reveal-one :h1)
            :tiles
            (filter :matched?))))

  ;; match new tile after 2 revealed
  (is (=
       #{{:face :h3 :revealed? true}}
       (->> (create-game)
            (reveal-one :h1)
            (reveal-one :h1)
            (reveal-one :h3)
            :tiles
            (filter :revealed?)
            (set))))

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
