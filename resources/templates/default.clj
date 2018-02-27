(fn
  [{title :title body :body}]
  [:html
   [:head
    [:meta {:charset "UTF-8"}]
    [:meta {:http-equiv "x-ua-compatible" :content "ie=edge"}]
    [:meta {:name "description" :content ""}]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1, shrink-to-fit=no"}]
    [:title title]

     ;;         <link rel="manifest" href="site.webmanifest">
     ;;         <link rel="apple-touch-icon" href="icon.png">

     ;;         <link rel="manifest" href="site.webmanifest">
     ;;         <link rel="apple-touch-icon" href="icon.png">
     ;;         <!-- Place favicon.ico in the root directory -->

     ;;         <link rel="stylesheet" href="css/normalize.css">
    ;;         <link rel="stylesheet" href="css/main.css">
    [:link {:rel :stylesheet :href "default.css"}]]
   [:body
    [:div {:id :wrap}
     [:h1 title]
     [:div {:id :navigation}
      [:ul
       [:li [:a {:href "/index.html"} "home"]]
       [:li [:a {:href "/hello.html"} "hello"]]]]
     [:div {:class "content"}]
     body]]])
