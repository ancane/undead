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
                 [quiescent "0.3.2"]]
  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-figwheel "0.5.8"]]
  :target-path "target/%s"
  :source-paths ["src"]
  :clean-targets ^{:protect false} ["resources/public/js" :target]
  :profiles {:dev {:dependencies [[reloaded.repl "0.2.3"]]
                   :source-paths ["dev"]}}
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src_cljs"]
                        :figwheel true
                        :compiler {:main undead.client
                                   :asset-path "js/out"
                                   :output-to "resources/public/js/app.js"
                                   :output-dir "resources/public/js/out"
                                   :recompile-dependents true
                                   :source-map true}}]}
  )
