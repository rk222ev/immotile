// Compiled by ClojureScript 1.10.238 {}
goog.provide('example.core');
goog.require('cljs.core');
goog.require('example.other');
example.core.init_listeners = (function example$core$init_listeners(){
var temp__5457__auto___23975 = document.getElementById("kalle");
if(cljs.core.truth_(temp__5457__auto___23975)){
var el_23976 = temp__5457__auto___23975;
el_23976.addEventListener("click",((function (el_23976,temp__5457__auto___23975){
return (function (p1__23974_SHARP_){
return example.other.speak.call(null,p1__23974_SHARP_);
});})(el_23976,temp__5457__auto___23975))
);
} else {
}

document.getElementById("wrap").insertAdjacentHTML("beforeend","<div id=\"return-to-top\"></div>");

return document.getElementById("return-to-top").addEventListener("click",(function (){
return example.other.scroll_to_top.call(null);
}));
});
document.addEventListener("DOMContentLoaded",example.core.init_listeners);

//# sourceMappingURL=core.js.map?rel=1535397860855
