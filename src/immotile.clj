(ns immotile
  (:require
   [cljs.build.api :as cljs]
   [clojure.core.async :as async]
   [clojure.java.io :as io]
   [immotile.config :refer [config]]
   [immotile.file-processing :as process]
   [immotile.init :as init]
   [immotile.post :as post]
   [immotile.system :as system]))

(defn init
  "Generates a new site template."
  [project-name]
  (if project-name
    (init/make-project project-name)
    (println "A project name must be entered...")))

(defn start
  []
  (system/new-system (config))
  (system/start)
  (async/thread (process/all-files (config))))

(defn stop
  []
  (system/stop))

(defn- delete-folder
  [path]
  (doseq [f (reverse (file-seq (io/file path)))]
     (io/delete-file f)))

(defn build
  "Creates a production build."
  []
  (let [{src :src out :out :as conf} (config)]
    (mapv async/<!!
          [(async/thread
             (process/all-files (assoc conf :out "build")))
           (async/thread
             (cljs/build (str src "/cljs/")
                         {:optimizations :advanced
                          :output-dir out
                          :output-to (str "build/" "js/main.js")}))])))

(defn create-post
  [title]
  (let [file-path (post/create (config) title)
        new-post (process/create-post (config) (io/file file-path))]
    (swap! process/posts conj new-post))
  (process/file (config) (io/file "src/pages/index.clj")))

(defn rebuild
  []
 (process/all-files (config)))

(defn restart
  []
  (system/reload))

(def commands
  [["start" "Starts the dev environment."]
   ["stop" "Stops the dev environment."]
   ["restart" "Restarts the dev environment."]
   ["create-post" "Given a title creates a new post."]
   ["rebuild" "Rebuilds entire webpage"]])


(defn help
  []
  (println "Immotile")
  (println "  Commands:")
  (doseq [[cmd text] commands]
    (println (format "  %-11s - %s" cmd text))))
