(ns immotile.core-test
  (:require [clojure.test :refer :all]
            [immotile.core :refer :all]))

(def expected-elisp-exp
  "(progn (find-file \"some/file/path\") (progn (org-html-export-as-html nil nil nil t nil) (with-current-buffer \"*Org HTML Export*\" (princ (org-no-properties (buffer-string))))))")

(deftest elisp-exp
  (testing "")
  (is (= expected-elisp-exp (elisp-sexp "some/file/path"))))
