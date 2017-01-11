(ns undead.game)

(def faces [:h1 :h1 :h2 :h2 :h3 :h3 :h4 :h4 :h5 :h5
            :fg :fg :zo :zo :zo :gy])

(defn ->tile [face]
  {:face face})

(defn create-game []
  {:tiles (shuffle (map ->tile faces))
   :sand (repeat 30 :remaining)})

(defn- revealed-tiles [game]
  (->> game :tiles (filter :revealed?) count))

(defn- can-reveal? [game]
  (> 2 (count (revealed-tiles game))))

(defn reveal-tile [game index]
  (if (can-reveal? game)
    (assoc-in game [:tiles index :revealed?] true)
    game))
