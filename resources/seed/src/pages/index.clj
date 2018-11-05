(require '[clojure.string :as str])

(defn body
  [posts]
 [:div
   [:h1 "=PROJECT-NS="]
   [:p (str "Welcome to your project!"
            "Enjoy...")]
   [:h2 "Weblog"]
   [:div
    [:ul
     (for [p posts]
       [:li [:a {:href (:link p)} (str (:date p) " - " (:title p))]])]]] )

(fn
  [{posts :posts}]
  {:body (body posts)})
