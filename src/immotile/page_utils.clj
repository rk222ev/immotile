(ns immotile.page-utils
  (:require
   [immotile.config :as config]))

(defn link-to [path]
  (str (config/base-path) "/" path))

(defn stylesheet [path]
  [:link {:rel "stylesheet" :type "text/css" :href path}])
