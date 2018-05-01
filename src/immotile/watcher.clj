(ns immotile.watcher
  (:require [clojure.java.io :as io]
            [hawk.core :as hawk]
            [immotile.file-processing :as process]))

(defonce ^:private watcher
  (atom {}))

(defn- is-of-path [regexp file] (boolean (re-find regexp (.getPath file))))
(defn- template? [file] (is-of-path #"/templates/" file))

(defn handler
  [config {file :file}]
  (if (template? file)
    (process/all-files config)
    (process/single-file config file)))

(defn- start-watcher
  "Start the file watcher and regenerate on change."
  [config]
  (swap! watcher (fn [x]
                   (hawk/watch!
                    [{:paths ["im-src/"]
                      :context config
                      :handler handler}]))))

(defn stop
  "Stop the watcher."
  []
  (hawk/stop! @watcher) (reset! watcher nil))

(defn start
  "Runs an initial file generation then launches a wather that regenerates
  when a file is changed."
  [config]
  (.mkdirs (io/file (:out config)))
  (process/all-files config)
  (start-watcher config))
