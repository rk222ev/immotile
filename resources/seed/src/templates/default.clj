(ns =PROJECT-NS=.templates.default
  (:require
   [clojure.string :as str]
   [immotile.page-utils :as utils]))

(def links [[(utils/link-to "about.html") "About"]
            ["https://www.clojure.org" "Clojure"]])

(fn
  [{title :title body :body}]
  [:html
   [:head
    [:meta {:charset "UTF-8"}]
    [:meta {:http-equiv "x-ua-compatible" :content "ie=edge"}]
    [:meta {:name "description" :content ""}]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1, shrink-to-fit=no"}]
    [:title (str/join " - " ["Immotile" title])]
    ;; (utils/stylesheet "https://cdn.rawgit.com/dreampulse/computer-modern-web-font/master/fonts.css")
    (utils/stylesheet (utils/link-to "default.css"))]
   [:body
    [:div {:id :wrap}
     [:div {:id :header}
      [:h1 [:a {:href (utils/link-to "index.html")} "=PROJECT-NS="]]
      [:div {:id :navigation}
       [:ul
        (for [[link title] links]
          [:li [:a {:href link} title]])]]]
     [:div {:class "content"}]
     [:h1 title]
     body
     [:script {:src (utils/link-to "js/main.js")}]]]])
