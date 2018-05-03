(ns immotile.watcher
  (:require [clojure.java.io :as io]
            [hawk.core :as hawk]
            [immotile.file-processing :as process]))

(defonce ^:private watcher
  (atom {}))

(defn- start-watcher
  "Start the file watcher and regenerate on change."
  [config]
  (swap! watcher (fn [_]
                   (hawk/watch!
                    [{:paths ["im-src/"]
                      :handler (fn [_ {file :file}] (process/file config file))}]))))

(defn stop
  "Stop the watcher."
  []
  (hawk/stop! @watcher)
  (reset! watcher nil))

(defn start
  "Runs an initial file generation then launches a wather that regenerates
  when a file is changed."
  [config]
  (println "Building initial files...")
  (.mkdirs (io/file (:out config)))
  (time (process/all-files config))
  (println "Starting watcher...")
  (start-watcher config))
