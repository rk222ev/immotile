(defproject immotile "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [hiccup "1.0.5"]
                 [http-kit "2.2.0"]
                 [hawk "0.2.11"]]
  :main ^:skip-aot immotile.core
  :jvm-opts ["--add-modules" "java.xml.bind"]
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
