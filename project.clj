(defproject parens_d "0.1.0-SNAPSHOT"
  :description "Messing with clojure and clojure-script"
  :url ""
  :license {:name "GNU General Public License"
            :url "http://www.gnu.org/licenses/gpl.html"}
  :jvm-opts ["-XX:MaxPermSize=256m"]
  :dependencies [[org.clojure/clojure "1.8.0"]]
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}
             :dev {:plugins []
                   :dependencies []
                   :source-paths ["dev"]}})
