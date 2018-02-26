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

(defn- find-date-option
  [settings]
  (when settings
    (let [option #"#\+DATE"
          date #"(\d+-\d\d-\d\d)"]
      (->> settings
           (some #(if (re-find option %) % nil))
           (re-find date)))))

(defn- read-org-settings
  [path]
  (with-open [rdr (clojure.java.io/reader path)]
    (vec (take-while (fn [l] (or (str/blank? l) (str/includes? l "#+"))) (line-seq rdr)))))

(defn- convert
  [config file]
  (merge
   config
   (let [path (absolute-file-path file)]
     {:body (:out (apply shell/sh (emacs-shell-command path)))
      :date (first (find-date-option (read-org-settings path)))})))

(defmethod converters/convert :org [config file] (convert config file))


(comment
  (:date (convert {} (io/file "im-src/pages/index.org")))

  )
