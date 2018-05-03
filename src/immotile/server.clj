(ns immotile.server
  (:require
   [figwheel-sidecar.repl-api :as ra]
   [org.httpkit.server :as server]))

(defonce ^:private state (atom {}))

(defn- serve-static [config req]
  (let [mime-types {".clj" "text/plain"
                    ".mp4" "video/mp4"
                    ".ogv" "video/ogg"}
        uri (:uri req)
        headers (if-let [mimetype (mime-types (re-find #"\..+$" uri))]
                  {:headers {"Content-Type" mimetype}})
        body (slurp (str (:out config)
                         (if (= "/" uri)
                           "/index.html"
                           uri)))]
    {:body body :headers headers}))


#_(defn start
  [config]
  (let [port (:port config)
        s (server/run-server
            (fn [req] (serve-static config req))
            {:port port})]
    (println (str "Started webserver on port " port))
    (reset! state s)))


(defn stop [] (@state))


#_(ra/stop-figwheel!)
#_(start nil)
#_(ra/cljs-repl "dev")

(defn start
  [config]
  ;; this will start figwheel and will start autocompiling the builds specified in `:builds-ids`
  (ra/start-figwheel!
   {:figwheel-options {} ;; <-- figwheel server config goes here
    :build-ids ["dev"] ;; <-- a vector of build ids to start autobuilding
    :all-builds        ;; <-- supply your build configs here
    [{:id "dev"
      :figwheel true
      :source-paths ["im-src/cljs/"]
      :compiler {:main "example.core"
                 :asset-path "js/out"
                 :output-to "resources/public/js/example.js"
                 :output-dir "resources/public/js/out"
                 :verbose true}}]})
  (ra/cljs-repl "dev"))

;; you can also just call (ra/start-figwheel!)
;; and figwheel will do its best to get your config from the
;; project.clj or a figwheel.edn file

;; start a ClojureScript REPL

;; you can optionally supply a build id

  ;; :cljsbuild {:builds [{:id "example"
  ;;                       :source-paths ["im-src/cljs/"]
  ;;                       :figwheel true
  ;;                       :compiler {:main "example.core"
  ;;                                  :asset-path "js/out"
  ;;                                  :output-to "resources/public/js/example.js"
  ;;                                  :output-dir "resources/public/js/out"
  ;;                                  }}]}
