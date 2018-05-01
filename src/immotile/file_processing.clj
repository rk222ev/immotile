(ns immotile.file-processing
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [hiccup.core :refer [html]]
            [immotile.converters.core :as c]))

(defn- process-files
  [config type fn]
  (let [files (->> (file-seq (io/file (str "im-src/" (name type) "/")))
                   (filter #(.isFile %)))]
    (doall (pmap (partial fn config) files))))

(defn- filename-without-extension
  "Returns the name of a `file`."
  [^java.io.File file]
  (-> file
      .getName
      (str/split #"\.")
      drop-last
      (->> (str/join "."))))

(defn- remove-newlines [s] (str/replace s #"\n" ""))

(defn- generate-page
  "Generate a page using a `template-fn` and some `data`"
  ;; TODO: spec data and use a better name
  [template-fn data]
  (->> (template-fn data)
       (html)
       #_(remove-newlines) ;; TODO: Just removing will messup code blocks
       (str "<!doctype html>")))

#_(defn- read-template-fn [path] (load-file path))

(defn- write-post
  [config file]
  (let [page-data (c/convert config file)
        filename (filename-without-extension file)
        date (:date page-data)
        dest (str (:out config) "/posts/" date "-" filename ".html")]
    (io/make-parents (io/file dest))
    (spit dest
          (generate-page
           (load-file "im-src/templates/default.clj")
           page-data))
    (dissoc (merge page-data {:link (str "posts/" date "-" filename ".html")}) :body)))

(defonce ^:private all-posts
  (atom {:posts []}))

(defn- is-of-path [regexp file] (boolean (re-find regexp (.getPath file))))

(defn- write-file
  ([config file]
   (write-file config file ""))
  ([config file sub-path]
   (let [page-data (c/convert config file)
         filename (filename-without-extension file)
         dest (str (:out config) "/" sub-path filename ".html")]
     (io/make-parents (io/file dest))
     (spit dest
           (generate-page
            (load-file "im-src/templates/default.clj")
            page-data))
     (dissoc page-data :body))))


(defn- copy-public-to-out
  "Copies `file` to public folder in `out-path`."
  [out-path file]
  (let [destination (str
                     out-path
                     "/"
                     (-> (.getPath file)
                         (str/split #"/")
                         (rest)
                         (->> (str/join "/"))
                         (str/replace "public/" "")))]
    (io/make-parents destination)
    (io/copy
     file
     (io/file destination))))

(defn- directory? [file] (.isDirectory file))
(defn- public? [file] (is-of-path #"/public" file))
(defn- post? [file] (is-of-path #"/posts/" file))
(defn- page? [file] (is-of-path #"/pages/" file))

(defn single-file
  [config file]
  (condp #(%1 %2) file
    directory? nil
    post? (write-post config file)
    page? (write-file (assoc config :posts @all-posts) file)
    public? (copy-public-to-out (:out config) file)
    nil))

(defn all-files
  [config]
  (let [posts (process-files config :posts write-post)
        filter-files ["/templates/" "config.edn" "/posts/"]
        files (->> (file-seq (io/file "im-src"))
                   (filter #(not (re-find (re-pattern (str/join "|" filter-files)) (.getPath %))))
                   (filter #(.isFile %)))]
    (reset! all-posts posts)
    (doall (pmap #(single-file config %) files))))
