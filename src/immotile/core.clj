(ns immotile.core
  (:require [cljs.build.api :as cljs]
            [clojure.core.async :as a :refer [<!! thread]]
            [immotile.config :refer [config]]
            [immotile.file-processing :as process]
            [immotile.system :as system]
            [clojure.java.io :as io]))

(def opts {:optimizations :advanced
           :output-dir "im-out"
           :output-to (str (:out (config)) "/js/example.js")})

(defn delete-folder
  [path]
  (doseq [f (reverse (file-seq (clojure.java.io/file path)))]
     (io/delete-file f)))

(defn -main
  [& args]
  (let [c (config)]
    (case (keyword (first args))
      :build-prod (do (mapv <!! [(thread (process/all-files c))
                                 (thread (cljs/build (str (:src c) "/cljs/") opts))])
                      (delete-folder (:output-dir opts)))
      :dev (do
             (thread (process/all-files c))
             (system/new-system c)
             (system/start))
      (println "Valid args are build-prod or dev"))))
