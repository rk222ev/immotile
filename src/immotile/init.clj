(ns immotile.init
  (:require [clojure.java.io :as io]
            [clojure.string :as str]))

(def ^:private ns-placeholder "=PROJECT-NS=")

(defn- make-folder [path] (.mkdir (io/file path)))

(defn- make-src-subfolders
  [project-name]
  (doseq [folder ["cljs" (str "cljs/" project-name) "pages" "posts" "public" "templates"]]
    (.mkdir (io/file project-name "src" folder))))

(defn- seed-file-destination
  [file]
  (-> (.getCanonicalPath file)
                       (str/split #"resources/seed/")
                       (second)))

(defn- process-seed-files
  [project-name files]
  (doseq [file files]
    (let [processed-seed (-> (slurp file)
                             (str/replace ns-placeholder project-name))
          destination (-> (seed-file-destination file)
                          (str/replace ns-placeholder project-name))
          target (io/file project-name destination)]
      (spit target processed-seed))))

(defn- make-files
  [project-name]
  (process-seed-files project-name
                      (filter #(.isFile %)
                              (-> (io/resource "seed/src")
                                  (io/file)
                                  (file-seq)))))

(defn- make-config-files
  [project-name]
  (let [files ["config.edn" "deps.edn"]]
    (process-seed-files project-name
                        (map (comp io/file io/resource #(str "seed/" %)) files))))

(defn copy-public-files
  [project-name]
  (doseq [file (drop 1 (file-seq (io/file (io/resource "seed/public"))))]
    (io/copy file (io/file project-name "src" (seed-file-destination file)))))

(defn make-project
  [project-name]
  (make-folder project-name)
  (make-folder (str project-name "/src"))
  (make-src-subfolders project-name)
  (make-files project-name)
  (make-config-files project-name)
  (copy-public-files project-name))
