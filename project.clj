(defproject undead "0.1.0-SNAPSHOT"
  :description "Messing with clojure and clojure-script"
  :url ""
  :license {:name "GNU General Public License"
            :url "http://www.gnu.org/licenses/gpl.html"}
  :main ^:skip-aot undead.system
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.293"]
                 [http-kit "2.2.0"]
                 [com.stuartsierra/component "0.3.2"]
                 [compojure "1.5.1"]
                 ]
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}
             :dev {:plugins [[lein-cljsbuild "1.1.5"]]
                   :dependencies [[reloaded.repl "0.2.3"]]
                   :source-paths ["dev"]
                   :cljsbuild {:builds [{:source-paths ["src" "dev"]
                                         :compiler {:output-to "target/resources/public/app.js"
                                                    :output-dir "target/resources/public"
                                                    :optimizations :none
                                                    :recompile-dependents true
                                                    :source-map true}}]}}})
