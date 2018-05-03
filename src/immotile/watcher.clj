(ns immotile.watcher
  (:require [clojure.java.io :as io]
            [hawk.core :as hawk]
            [immotile.file-processing :as process]))

(defonce ^:private watcher
  (atom {}))

(defn- start-watcher
  "Takes a `config` and starts a file watcher that regenerates files on change."
  [config]
  (swap! watcher (fn [_]
                   (hawk/watch!
                    [{:paths ["im-src/"]
                      :handler (fn [_ {file :file}] (process/file config file))}]))))

(defn stop
  "Stops the watcher."
  []
  (hawk/stop! @watcher)
  (reset! watcher nil))

(defn start
  "Takes a `config`, runs an initial file generation and then launches a file watcher."
  [config]
  (println "Building initial files...")
  (.mkdirs (io/file (:out config)))
  (time (process/all-files config))
  (println "Starting watcher...")
  (start-watcher config))
