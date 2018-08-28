// Compiled by ClojureScript 1.10.238 {}
goog.provide('immotile.reload');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('example.core');
figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"html-watcher","html-watcher",2041933138),(function (p__29590){
var map__29591 = p__29590;
var map__29591__$1 = ((((!((map__29591 == null)))?(((((map__29591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29591):map__29591);
var msg = map__29591__$1;
var msg_name = cljs.core.get.call(null,map__29591__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"html-files-changed","html-files-changed",-958306710))){
window.location.reload(true);

return cljs.core.println.call(null,"Figwheel: HTML file(s) changed. Reloaded page.");
} else {
return null;
}
}));

//# sourceMappingURL=reload.js.map?rel=1535397867508
