(ns immotile.converters.org
  (:require
   [clojure.java.io :as io]
   [clojure.java.shell :as shell]
   [clojure.string :as str]))


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
  [options]
  (let [option #"#\+DATE"
        date #"(\d+-\d\d-\d\d)"]
    (some->> options
         (some #(if (re-find option %) % nil))
         (re-find date))))

(defn- find-title-option
  [options]
  (let [option #"#\+TITLE"]
    (some-> options
            (->> (some #(when (re-find option %) %)))
            (str/split #":")
            (second)
            (str/trim))))

(defn- read-org-settings
  [path]
  (with-open [rdr (clojure.java.io/reader path)]
    (vec (take-while (fn [l] (or (str/blank? l) (str/includes? l "#+"))) (line-seq rdr)))))

(defn convert
  [config file]
  (let [path (absolute-file-path file)
        options (read-org-settings path)]
    {:body (:out (apply shell/sh (emacs-shell-command path)))
     :title (find-title-option options)
     :date (first (find-date-option options))}))
