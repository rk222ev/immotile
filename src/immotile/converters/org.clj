(ns immotile.converters.org
  (:require
   [clojure.java.io :as io]
   [clojure.java.shell :as shell]
   [clojure.string :as str]))


(def ^:private org-export-command
  `(~'progn
    ~'(require 'package)
    ~'(package-initialize)
    ~'(set-face-foreground 'font-lock-string-face "#afafff")
    ~'(set-face-foreground 'font-lock-keyword-face "#a71d5d")
    ~'(set-face-foreground 'font-lock-function-name-face "#795da3")
    ~'(set-face-foreground 'font-lock-builtin-face "#a71d5d")
    ~'(set-face-foreground 'font-lock-comment-face "#969896")
    ~'(set-face-underline 'font-lock-type-face nil)
    ~'(set-face-underline 'font-lock-constant-face nil)
    (~'org-html-export-as-html nil nil nil ~'t nil)
    (~'with-current-buffer "*Org HTML Export*"
     (~'princ (~'org-no-properties (~'buffer-string))))))

(defn- elisp-sexp
  [absolute-path]
  (str
   `(~'progn
     (~'find-file ~absolute-path)
     ~org-export-command)))

(defn- emacs-shell-command
  [absolute-path]
  ["emacs" "-batch" "-eval" (elisp-sexp absolute-path)])

(defn- absolute-file-path [path] (.getAbsolutePath (io/file path)))

(defn- find-date-option
  [options]
  (let [option #"(?i)#\+DATE"
        date #"(\d+-\d\d-\d\d)"]
    (some->> options
         (some #(if (re-find option %) % nil))
         (re-find date))))

(defn- find-title-option
  [options]
  (let [option #"(?i)#\+TITLE"]
    (some-> options
            (->> (some #(when (re-find option %) %)))
            (str/split #":")
            (second)
            (str/trim))))

(defn- filename-without-extension
  "Returns the name of a `file`."
  [^java.io.File file]
  (-> file
      .getName
      (str/split #"\.")
      drop-last
      (->> (str/join "."))))

(defn- read-org-settings
  [path]
  (with-open [rdr (clojure.java.io/reader path)]
    (vec (take-while (fn [l] (or (str/blank? l) (str/includes? l "#+"))) (line-seq rdr)))))

(defn convert
  [config file]
  (let [path (absolute-file-path file)
        options (read-org-settings path)
        date (first (find-date-option options))]
    (let [result (apply shell/sh (emacs-shell-command path))]
      (when (= 255 (:exit result))
        (println "Emacs failed to export org file." (:err result)))
      {:body (:out result)
       :title (find-title-option options)
       :filename (str (when date (str date "-")) (filename-without-extension file))
       :date date})))
