(ns immotile.converters.org-test
  (:require
   [clojure.test :refer :all]
   [clojure.java.io :as io]
   [hiccup.core :refer [html]]
   [immotile.converters.core :as c]
   [immotile.converters.org :as org]
   [clojure.string :as str]))

(defn strip-org-artifacts
  "Removes generated org anchors."
  [s]
  (-> s
   (str/replace #"\#org[^\"]*" "")
   (str/replace #"outline-container-org[^\"]*" "")
   (str/replace #"org[^\"]*" "")))

(def expected-path "test/resources/expected/org.html")
(def expected-html (strip-org-artifacts (slurp expected-path)))
(def generated (c/convert {} (io/file "test/resources/test.org")))

(comment
  ;; generate expected html
  (spit expected-path (strip-org-artifacts (:body generated))))


(deftest generates-html-from-org-files
  (testing "builds expected html")
  (is (= expected-html (strip-org-artifacts (:body generated))))

  (testing "reads date")
  (is (= "2018-02-28" (:date generated))))
