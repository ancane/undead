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
  (is (= {:remaining 30} (frequencies (:sand (create-game))))))

(deftest tiles

  (is (= 1 (->> (reveal-tile (create-game) 0)
                :tiles (filter :revealed?) count)))

  (is (=
       #{{:face :h1 :revealed? true}
         {:face :h2 :revealed? true}}
       (->> (create-game)
            (reveal-one :h1)
            (reveal-one :h2)
            :tiles
            (filter :revealed?)
            (set))))  
  )
