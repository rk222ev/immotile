(ns immotile.system
  (:require [com.stuartsierra.component :as component]
            [figwheel-sidecar.components.figwheel-server :as server]
            [figwheel-sidecar.components.file-system-watcher :as fsw]
            [figwheel-sidecar.system :as sys]
            [figwheel-sidecar.utils :as utils]
            [immotile.config :as c]
            [immotile.file-processing :as process]))

(defn serve-static [req]
  (let [mime-types {".clj" "text/plain"
                    ".mp4" "video/mp4"
                    ".ogv" "video/ogg"}
        uri (:uri req)
        headers (if-let [mimetype (mime-types (re-find #"\..+$" uri))]
                  {:headers {"Content-Type" mimetype}})
        body (slurp (str (:out (c/config))
                         (if (= "/" uri)
                           "/index.html"
                           uri)))]
    {:body body :headers headers}))


(defn figwheel-config
  [config]
  {:figwheel-options {:ring-handler serve-static}
   :build-ids ["dev"]
   :all-builds [{:id "dev"
                 :figwheel true
                 :source-paths [(str (:src config) "/cljs") "src"]
                 :compiler {:main "immotile.reload"
                            :asset-path "/js/out"
                            :output-to (str (:out config) "/js/example.js")
                            :output-dir (str (:out config) "/js/out")
                            :verbose true}}]})

(defn make-file [path]
  {:file (utils/remove-root-path path)
   :type :html})

(defn send-files [figwheel-server files]
  (server/send-message figwheel-server
                       ::server/broadcast
                       {:msg-name :html-files-changed
                        :files files}))

(defn handle-regeneration
  [config watcher files]
(let [figwheel-server (:figwheel-server watcher)
      sendable-files (map #(make-file %) files)]
  (doseq [f (remove #(boolean (re-find #"/cljs/" (.getPath %))) files)]
    (do (process/file config f)
        (send-files figwheel-server sendable-files)))))

(defonce system (atom nil))

(defn new-system
  [config]
  (reset! system
          (component/system-map
           :figwheel-server (sys/figwheel-system (figwheel-config config))
           :regeneration-watcher (component/using
                                  (fsw/file-system-watcher
                                   {:watcher-name "Regeneration watcher"
                                    :watch-paths [(:src config)]
                                    :log-writer *out*
                                    :notification-handler (partial handle-regeneration config)})
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
