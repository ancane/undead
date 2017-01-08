(ns undead.system
  (:gen-class)
  (:require [org.httpkit.server :refer [run-server]]
            [com.stuartsierra.component :as component]
            [undead.web]))

(defn- start-server [handler port]
  (let [server (run-server handler {:port port})]
    (println (str "Server is up on localhost:" port))
    server))

(defn- stop-server [server]
  (when server)
  (server))

(defrecord ParensOfTheDead []
  component/Lifecycle
  (start [this]
    (assoc this :server (start-server #'undead.web/app 9009)))
  (stop [this]
    (stop-server (:server this))
    (dissoc this :server)))

(defn create-system []
  (ParensOfTheDead.))

(defn -main "Start server" [& args]
  (.start (create-system)))
