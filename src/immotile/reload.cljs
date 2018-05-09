(ns immotile.reload
  (:require [figwheel.client :as fig]
            [example.core]))

(fig/add-message-watch
 :html-watcher
 (fn [{:keys [msg-name] :as msg}]
   (when (= msg-name :html-files-changed)
     (.reload js/window.location true)
     (println "Figwheel: HTML file(s) changed. Reloaded page."))))
