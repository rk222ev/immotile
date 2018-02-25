(ns immotile.converters.org
  (:require
   [clojure.java.io :as io]
   [clojure.java.shell :as shell]
   [clojure.string :as str]
   [immotile.converters.core :as converters]))


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


(defmethod converters/convert :org
  [_ file]
  {:body (:out (apply shell/sh (emacs-shell-command (absolute-file-path file))))
   :posts ["intro"]
   :title "Site title!"})


(defn- read-org-settings
  []
  (with-open [rdr (clojure.java.io/reader "im-src/posts/intro.org")]
    (vec (take-while (fn [l] (or (str/blank? l) (str/includes? l "#+"))) (line-seq rdr)))))
