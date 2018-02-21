(ns immotile.converters.org
  (:require
   [clojure.java.io :as io]
   [clojure.java.shell :as shell]
   [clojure.string :as str]
   [hiccup.core :refer [html]]
   [immotile.converters.core :as converters]))

(defn- remove-newlines [s] (str/replace s #"\n" ""))

(defn- read-template-fn [path] (load-file path))

(def ^:private org-export-command
  `(~'progn
    (~'org-html-export-as-html nil nil nil ~'t nil)
    (~'with-current-buffer "*Org HTML Export*"
     (~'princ (~'org-no-properties (~'buffer-string))))))


(defn- elisp-sexp
  [absolute-path]
  (str
   `(~'progn
     (~'find-file ~absolute-path)
     ~org-export-command)))


(defn- emacs-shell-command [absolute-path] ["emacs" "-batch" "-eval" (elisp-sexp absolute-path)])

(defn- absolute-file-path [path] (.getAbsolutePath (io/file path)))

(defn- create-page-data
  [org-file]
  {:body (:out (apply shell/sh (emacs-shell-command (absolute-file-path org-file))))
   :title "Site title!"})


(defn- filename-without-extension
  [^java.io.File file]
  (str/join "." (drop-last (str/split (.getName file) #"\."))))


(defn- generate-page
  [template-fn data]
  (->> (template-fn data)
       (html)
       (remove-newlines)
       (str "<!doctype html>")))


(defn- generate-org
  [config file]
  (let [
        filename (filename-without-extension file)
        destination (str (:out config) "/" filename ".html")]
    (io/make-parents (io/file destination))
    (spit destination
          (generate-page
           (read-template-fn "resources/templates/default.clj")
           (create-page-data (.getAbsolutePath file))))))


(defmethod converters/->convert :org [config file] (generate-org config file))
