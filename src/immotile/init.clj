(ns immotile.init
  (:require [clojure.java.io :as io]
            [clojure.string :as str]))

(def ^:private ns-placeholder "=PROJECT-NS=")

(defn- make-folder [path] (.mkdir (io/file path)))

(defn- make-src-subfolders
  [project-name]
  (doseq [folder ["cljs" (str "cljs/" project-name) "pages" "posts" "public" "templates"]]
    (.mkdir (io/file project-name "src" folder))))

(defn- process-seed-files
  [project-name files]
  (doseq [file files]
    (let [src-project-path (-> (.getCanonicalPath file)
                       (str/split #"resources/seed/")
                       (second)
                       (str/replace ns-placeholder project-name))
          processed-seed (-> (slurp file) (str/replace ns-placeholder project-name))]
      (spit (io/file project-name src-project-path) processed-seed))))

(defn- make-files
  [project-name]
  (process-seed-files project-name
                      (filter #(.isFile %)
                              (-> (io/resource "seed/src")
                                  (io/file)
                                  (file-seq)))))

(defn- make-config-files
  [project-name]
  (process-seed-files project-name
                      (map (comp io/file io/resource #(str "seed/" %))
                           ["config.edn" "deps.edn"])))

(defn make-project
  [project-name]
  (make-folder project-name)
  (make-folder (str project-name "/src"))
  (make-src-subfolders project-name)
  (make-files project-name)
  (make-config-files project-name))
