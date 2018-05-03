(ns immotile.fig
 (:require
 [figwheel-sidecar.components.figwheel-server :as server]
 [figwheel-sidecar.components.file-system-watcher :as fsw]
 [figwheel-sidecar.system :as sys]
 [figwheel-sidecar.utils :as utils]
 [com.stuartsierra.component :as component]) )


(def figwheel-config
  {:figwheel-options {}
   :build-ids ["dev"]
   :all-builds
   [{:id "dev"
     :figwheel true
     :source-paths ["im-src/cljs" "dev"]
     :compiler {:main "immotile.reload"
                :asset-path "js/out"
                :output-to "resources/public/js/example.js"
                :output-dir "resources/public/js/out"
                :verbose true}}]})

(defn make-file [path]
  {:file (utils/remove-root-path path)
   :type :html})

(defn send-files [figwheel-server files]
  (server/send-message figwheel-server
                       ::server/broadcast
                       {:msg-name :html-files-changed
                        :files files}))

(defn handle-notification [watcher files]
  (prn "change")
  (when-let [changed-files (not-empty (filter #(.endsWith % ".html") (map str files)))]
    (let [figwheel-server (:figwheel-server watcher)
          sendable-files (map #(make-file %) changed-files)]
      (send-files figwheel-server sendable-files)
      (doseq [f sendable-files]
        (println "sending changed HTML file:" (:file f))))))

(def system
  (atom
   (component/system-map
    :figwheel-server (sys/figwheel-system figwheel-config)
    :html-watcher (component/using
                   (fsw/file-system-watcher {:watcher-name "HTML watcher"
                                             :watch-paths ["resources/public"]
                                             :notification-handler handle-notification})
                   [:figwheel-server]))))

(defn start []
  (swap! system component/start))

(defn stop []
  (swap! system component/stop))

(defn reload []
  (stop)
  (start))

(defn repl []
  (sys/cljs-repl (:figwheel-server @system)))
