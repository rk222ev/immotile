(defproject immotile "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[com.bhauman/rebel-readline "0.1.1"]
                 [com.stuartsierra/component "0.3.2"]
                 [figwheel-sidecar "0.5.15"]
                 [hawk "0.2.11"]
                 [hiccup "1.0.5"]
                 [http-kit "2.3.0-alpha5"]
                 [org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.946"]]
  :plugins [[lein-figwheel "0.5.15"]
            [lein-ancient "0.6.15"]]
  :main ^:skip-aot immotile.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}}
  :jvm-opts ["--add-modules" "java.xml.bind"]
  ;; :cljsbuild {:builds [{:id "example"
  ;;                       :source-paths ["im-src/cljs/"]
  ;;                       :figwheel true
  ;;                       :compiler {:main "example.core"
  ;;                                  :asset-path "js/out"
  ;;                                  :output-to "resources/public/js/example.js"
  ;;                                  :output-dir "resources/public/js/out"
  ;;                                  }}]}
  )
