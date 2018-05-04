(ns immotile.system
  (:require
   [figwheel-sidecar.components.figwheel-server :as server]
   [figwheel-sidecar.components.file-system-watcher :as fsw]
   [figwheel-sidecar.system :as sys]
   [figwheel-sidecar.utils :as utils]
   [com.stuartsierra.component :as component]
   [immotile.file-processing :as process]))

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
  (when-let [changed-files (not-empty (filter #(.endsWith % ".html") (map str files)))]
    (let [figwheel-server (:figwheel-server watcher)
          sendable-files (map #(make-file %) changed-files)]
      (send-files figwheel-server sendable-files))))

(defn handle-regeneration
  [config watcher files]
  (->> files
      (filter #(re-find #"/cljs/" (.getPath %)))
      (first)
      (partial process/file config)))

(defonce system (atom nil))

(defn new-system
  [config]
  (reset! system
          (component/system-map
           :figwheel-server (sys/figwheel-system figwheel-config)
           :regeneration-watcher (component/using
                                  (fsw/file-system-watcher
                                   {:watcher-name "Regeneration watcher"
                                    :watch-paths ["im-src"]
                                    :log-writer *out*
                                    :notification-handler (partial handle-regeneration config)})
                                  [:figwheel-server])
           :html-watcher (component/using
                          (fsw/file-system-watcher
                           {:watcher-name "HTML watcher"
                            :watch-paths ["resources/public"]
                            :log-writer *out*
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
