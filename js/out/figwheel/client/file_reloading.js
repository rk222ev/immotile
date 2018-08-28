// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27343_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27343_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27344 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27345 = null;
var count__27346 = (0);
var i__27347 = (0);
while(true){
if((i__27347 < count__27346)){
var n = cljs.core._nth.call(null,chunk__27345,i__27347);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27348 = seq__27344;
var G__27349 = chunk__27345;
var G__27350 = count__27346;
var G__27351 = (i__27347 + (1));
seq__27344 = G__27348;
chunk__27345 = G__27349;
count__27346 = G__27350;
i__27347 = G__27351;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27344);
if(temp__5457__auto__){
var seq__27344__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27344__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__27344__$1);
var G__27352 = cljs.core.chunk_rest.call(null,seq__27344__$1);
var G__27353 = c__4319__auto__;
var G__27354 = cljs.core.count.call(null,c__4319__auto__);
var G__27355 = (0);
seq__27344 = G__27352;
chunk__27345 = G__27353;
count__27346 = G__27354;
i__27347 = G__27355;
continue;
} else {
var n = cljs.core.first.call(null,seq__27344__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27356 = cljs.core.next.call(null,seq__27344__$1);
var G__27357 = null;
var G__27358 = (0);
var G__27359 = (0);
seq__27344 = G__27356;
chunk__27345 = G__27357;
count__27346 = G__27358;
i__27347 = G__27359;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__27360){
var vec__27361 = p__27360;
var _ = cljs.core.nth.call(null,vec__27361,(0),null);
var v = cljs.core.nth.call(null,vec__27361,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__27364){
var vec__27365 = p__27364;
var k = cljs.core.nth.call(null,vec__27365,(0),null);
var v = cljs.core.nth.call(null,vec__27365,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27377_27385 = cljs.core.seq.call(null,deps);
var chunk__27378_27386 = null;
var count__27379_27387 = (0);
var i__27380_27388 = (0);
while(true){
if((i__27380_27388 < count__27379_27387)){
var dep_27389 = cljs.core._nth.call(null,chunk__27378_27386,i__27380_27388);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_27389;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27389));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27389,(depth + (1)),state);
} else {
}


var G__27390 = seq__27377_27385;
var G__27391 = chunk__27378_27386;
var G__27392 = count__27379_27387;
var G__27393 = (i__27380_27388 + (1));
seq__27377_27385 = G__27390;
chunk__27378_27386 = G__27391;
count__27379_27387 = G__27392;
i__27380_27388 = G__27393;
continue;
} else {
var temp__5457__auto___27394 = cljs.core.seq.call(null,seq__27377_27385);
if(temp__5457__auto___27394){
var seq__27377_27395__$1 = temp__5457__auto___27394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27377_27395__$1)){
var c__4319__auto___27396 = cljs.core.chunk_first.call(null,seq__27377_27395__$1);
var G__27397 = cljs.core.chunk_rest.call(null,seq__27377_27395__$1);
var G__27398 = c__4319__auto___27396;
var G__27399 = cljs.core.count.call(null,c__4319__auto___27396);
var G__27400 = (0);
seq__27377_27385 = G__27397;
chunk__27378_27386 = G__27398;
count__27379_27387 = G__27399;
i__27380_27388 = G__27400;
continue;
} else {
var dep_27401 = cljs.core.first.call(null,seq__27377_27395__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_27401;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27401));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27401,(depth + (1)),state);
} else {
}


var G__27402 = cljs.core.next.call(null,seq__27377_27395__$1);
var G__27403 = null;
var G__27404 = (0);
var G__27405 = (0);
seq__27377_27385 = G__27402;
chunk__27378_27386 = G__27403;
count__27379_27387 = G__27404;
i__27380_27388 = G__27405;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27381){
var vec__27382 = p__27381;
var seq__27383 = cljs.core.seq.call(null,vec__27382);
var first__27384 = cljs.core.first.call(null,seq__27383);
var seq__27383__$1 = cljs.core.next.call(null,seq__27383);
var x = first__27384;
var xs = seq__27383__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27382,seq__27383,first__27384,seq__27383__$1,x,xs,get_deps__$1){
return (function (p1__27368_SHARP_){
return clojure.set.difference.call(null,p1__27368_SHARP_,x);
});})(vec__27382,seq__27383,first__27384,seq__27383__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27406 = cljs.core.seq.call(null,provides);
var chunk__27407 = null;
var count__27408 = (0);
var i__27409 = (0);
while(true){
if((i__27409 < count__27408)){
var prov = cljs.core._nth.call(null,chunk__27407,i__27409);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27410_27418 = cljs.core.seq.call(null,requires);
var chunk__27411_27419 = null;
var count__27412_27420 = (0);
var i__27413_27421 = (0);
while(true){
if((i__27413_27421 < count__27412_27420)){
var req_27422 = cljs.core._nth.call(null,chunk__27411_27419,i__27413_27421);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27422,prov);


var G__27423 = seq__27410_27418;
var G__27424 = chunk__27411_27419;
var G__27425 = count__27412_27420;
var G__27426 = (i__27413_27421 + (1));
seq__27410_27418 = G__27423;
chunk__27411_27419 = G__27424;
count__27412_27420 = G__27425;
i__27413_27421 = G__27426;
continue;
} else {
var temp__5457__auto___27427 = cljs.core.seq.call(null,seq__27410_27418);
if(temp__5457__auto___27427){
var seq__27410_27428__$1 = temp__5457__auto___27427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27410_27428__$1)){
var c__4319__auto___27429 = cljs.core.chunk_first.call(null,seq__27410_27428__$1);
var G__27430 = cljs.core.chunk_rest.call(null,seq__27410_27428__$1);
var G__27431 = c__4319__auto___27429;
var G__27432 = cljs.core.count.call(null,c__4319__auto___27429);
var G__27433 = (0);
seq__27410_27418 = G__27430;
chunk__27411_27419 = G__27431;
count__27412_27420 = G__27432;
i__27413_27421 = G__27433;
continue;
} else {
var req_27434 = cljs.core.first.call(null,seq__27410_27428__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27434,prov);


var G__27435 = cljs.core.next.call(null,seq__27410_27428__$1);
var G__27436 = null;
var G__27437 = (0);
var G__27438 = (0);
seq__27410_27418 = G__27435;
chunk__27411_27419 = G__27436;
count__27412_27420 = G__27437;
i__27413_27421 = G__27438;
continue;
}
} else {
}
}
break;
}


var G__27439 = seq__27406;
var G__27440 = chunk__27407;
var G__27441 = count__27408;
var G__27442 = (i__27409 + (1));
seq__27406 = G__27439;
chunk__27407 = G__27440;
count__27408 = G__27441;
i__27409 = G__27442;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27406);
if(temp__5457__auto__){
var seq__27406__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27406__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__27406__$1);
var G__27443 = cljs.core.chunk_rest.call(null,seq__27406__$1);
var G__27444 = c__4319__auto__;
var G__27445 = cljs.core.count.call(null,c__4319__auto__);
var G__27446 = (0);
seq__27406 = G__27443;
chunk__27407 = G__27444;
count__27408 = G__27445;
i__27409 = G__27446;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27406__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27414_27447 = cljs.core.seq.call(null,requires);
var chunk__27415_27448 = null;
var count__27416_27449 = (0);
var i__27417_27450 = (0);
while(true){
if((i__27417_27450 < count__27416_27449)){
var req_27451 = cljs.core._nth.call(null,chunk__27415_27448,i__27417_27450);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27451,prov);


var G__27452 = seq__27414_27447;
var G__27453 = chunk__27415_27448;
var G__27454 = count__27416_27449;
var G__27455 = (i__27417_27450 + (1));
seq__27414_27447 = G__27452;
chunk__27415_27448 = G__27453;
count__27416_27449 = G__27454;
i__27417_27450 = G__27455;
continue;
} else {
var temp__5457__auto___27456__$1 = cljs.core.seq.call(null,seq__27414_27447);
if(temp__5457__auto___27456__$1){
var seq__27414_27457__$1 = temp__5457__auto___27456__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27414_27457__$1)){
var c__4319__auto___27458 = cljs.core.chunk_first.call(null,seq__27414_27457__$1);
var G__27459 = cljs.core.chunk_rest.call(null,seq__27414_27457__$1);
var G__27460 = c__4319__auto___27458;
var G__27461 = cljs.core.count.call(null,c__4319__auto___27458);
var G__27462 = (0);
seq__27414_27447 = G__27459;
chunk__27415_27448 = G__27460;
count__27416_27449 = G__27461;
i__27417_27450 = G__27462;
continue;
} else {
var req_27463 = cljs.core.first.call(null,seq__27414_27457__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27463,prov);


var G__27464 = cljs.core.next.call(null,seq__27414_27457__$1);
var G__27465 = null;
var G__27466 = (0);
var G__27467 = (0);
seq__27414_27447 = G__27464;
chunk__27415_27448 = G__27465;
count__27416_27449 = G__27466;
i__27417_27450 = G__27467;
continue;
}
} else {
}
}
break;
}


var G__27468 = cljs.core.next.call(null,seq__27406__$1);
var G__27469 = null;
var G__27470 = (0);
var G__27471 = (0);
seq__27406 = G__27468;
chunk__27407 = G__27469;
count__27408 = G__27470;
i__27409 = G__27471;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27472_27476 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27473_27477 = null;
var count__27474_27478 = (0);
var i__27475_27479 = (0);
while(true){
if((i__27475_27479 < count__27474_27478)){
var ns_27480 = cljs.core._nth.call(null,chunk__27473_27477,i__27475_27479);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27480);


var G__27481 = seq__27472_27476;
var G__27482 = chunk__27473_27477;
var G__27483 = count__27474_27478;
var G__27484 = (i__27475_27479 + (1));
seq__27472_27476 = G__27481;
chunk__27473_27477 = G__27482;
count__27474_27478 = G__27483;
i__27475_27479 = G__27484;
continue;
} else {
var temp__5457__auto___27485 = cljs.core.seq.call(null,seq__27472_27476);
if(temp__5457__auto___27485){
var seq__27472_27486__$1 = temp__5457__auto___27485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27472_27486__$1)){
var c__4319__auto___27487 = cljs.core.chunk_first.call(null,seq__27472_27486__$1);
var G__27488 = cljs.core.chunk_rest.call(null,seq__27472_27486__$1);
var G__27489 = c__4319__auto___27487;
var G__27490 = cljs.core.count.call(null,c__4319__auto___27487);
var G__27491 = (0);
seq__27472_27476 = G__27488;
chunk__27473_27477 = G__27489;
count__27474_27478 = G__27490;
i__27475_27479 = G__27491;
continue;
} else {
var ns_27492 = cljs.core.first.call(null,seq__27472_27486__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27492);


var G__27493 = cljs.core.next.call(null,seq__27472_27486__$1);
var G__27494 = null;
var G__27495 = (0);
var G__27496 = (0);
seq__27472_27476 = G__27493;
chunk__27473_27477 = G__27494;
count__27474_27478 = G__27495;
i__27475_27479 = G__27496;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27497__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27497 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27498__i = 0, G__27498__a = new Array(arguments.length -  0);
while (G__27498__i < G__27498__a.length) {G__27498__a[G__27498__i] = arguments[G__27498__i + 0]; ++G__27498__i;}
  args = new cljs.core.IndexedSeq(G__27498__a,0,null);
} 
return G__27497__delegate.call(this,args);};
G__27497.cljs$lang$maxFixedArity = 0;
G__27497.cljs$lang$applyTo = (function (arglist__27499){
var args = cljs.core.seq(arglist__27499);
return G__27497__delegate(args);
});
G__27497.cljs$core$IFn$_invoke$arity$variadic = G__27497__delegate;
return G__27497;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__27500_SHARP_,p2__27501_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27500_SHARP_)].join('')),p2__27501_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__27502_SHARP_,p2__27503_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27502_SHARP_)].join(''),p2__27503_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27504 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27504.addCallback(((function (G__27504){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27504))
);

G__27504.addErrback(((function (G__27504){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27504))
);

return G__27504;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27505){if((e27505 instanceof Error)){
var e = e27505;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27505;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27506){if((e27506 instanceof Error)){
var e = e27506;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27506;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27507 = cljs.core._EQ_;
var expr__27508 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27507.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27508))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27507.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27508))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27507.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27508))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27507,expr__27508){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27507,expr__27508))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27510,callback){
var map__27511 = p__27510;
var map__27511__$1 = ((((!((map__27511 == null)))?(((((map__27511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27511):map__27511);
var file_msg = map__27511__$1;
var request_url = cljs.core.get.call(null,map__27511__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27511,map__27511__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27511,map__27511__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__25309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto__){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto__){
return (function (state_27549){
var state_val_27550 = (state_27549[(1)]);
if((state_val_27550 === (7))){
var inst_27545 = (state_27549[(2)]);
var state_27549__$1 = state_27549;
var statearr_27551_27577 = state_27549__$1;
(statearr_27551_27577[(2)] = inst_27545);

(statearr_27551_27577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27550 === (1))){
var state_27549__$1 = state_27549;
var statearr_27552_27578 = state_27549__$1;
(statearr_27552_27578[(2)] = null);

(statearr_27552_27578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27550 === (4))){
var inst_27515 = (state_27549[(7)]);
var inst_27515__$1 = (state_27549[(2)]);
var state_27549__$1 = (function (){var statearr_27553 = state_27549;
(statearr_27553[(7)] = inst_27515__$1);

return statearr_27553;
})();
if(cljs.core.truth_(inst_27515__$1)){
var statearr_27554_27579 = state_27549__$1;
(statearr_27554_27579[(1)] = (5));

} else {
var statearr_27555_27580 = state_27549__$1;
(statearr_27555_27580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27550 === (15))){
var inst_27530 = (state_27549[(8)]);
var inst_27528 = (state_27549[(9)]);
var inst_27532 = inst_27530.call(null,inst_27528);
var state_27549__$1 = state_27549;
var statearr_27556_27581 = state_27549__$1;
(statearr_27556_27581[(2)] = inst_27532);

(statearr_27556_27581[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27550 === (13))){
var inst_27539 = (state_27549[(2)]);
var state_27549__$1 = state_27549;
var statearr_27557_27582 = state_27549__$1;
(statearr_27557_27582[(2)] = inst_27539);

(statearr_27557_27582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27550 === (6))){
var state_27549__$1 = state_27549;
var statearr_27558_27583 = state_27549__$1;
(statearr_27558_27583[(2)] = null);

(statearr_27558_27583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27550 === (17))){
var inst_27536 = (state_27549[(2)]);
var state_27549__$1 = state_27549;
var statearr_27559_27584 = state_27549__$1;
(statearr_27559_27584[(2)] = inst_27536);

(statearr_27559_27584[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27550 === (3))){
var inst_27547 = (state_27549[(2)]);
var state_27549__$1 = state_27549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27549__$1,inst_27547);
} else {
if((state_val_27550 === (12))){
var state_27549__$1 = state_27549;
var statearr_27560_27585 = state_27549__$1;
(statearr_27560_27585[(2)] = null);

(statearr_27560_27585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27550 === (2))){
var state_27549__$1 = state_27549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27549__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27550 === (11))){
var inst_27520 = (state_27549[(10)]);
var inst_27526 = figwheel.client.file_reloading.blocking_load.call(null,inst_27520);
var state_27549__$1 = state_27549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27549__$1,(14),inst_27526);
} else {
if((state_val_27550 === (9))){
var inst_27520 = (state_27549[(10)]);
var state_27549__$1 = state_27549;
if(cljs.core.truth_(inst_27520)){
var statearr_27561_27586 = state_27549__$1;
(statearr_27561_27586[(1)] = (11));

} else {
var statearr_27562_27587 = state_27549__$1;
(statearr_27562_27587[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27550 === (5))){
var inst_27515 = (state_27549[(7)]);
var inst_27521 = (state_27549[(11)]);
var inst_27520 = cljs.core.nth.call(null,inst_27515,(0),null);
var inst_27521__$1 = cljs.core.nth.call(null,inst_27515,(1),null);
var state_27549__$1 = (function (){var statearr_27563 = state_27549;
(statearr_27563[(11)] = inst_27521__$1);

(statearr_27563[(10)] = inst_27520);

return statearr_27563;
})();
if(cljs.core.truth_(inst_27521__$1)){
var statearr_27564_27588 = state_27549__$1;
(statearr_27564_27588[(1)] = (8));

} else {
var statearr_27565_27589 = state_27549__$1;
(statearr_27565_27589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27550 === (14))){
var inst_27520 = (state_27549[(10)]);
var inst_27530 = (state_27549[(8)]);
var inst_27528 = (state_27549[(2)]);
var inst_27529 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27530__$1 = cljs.core.get.call(null,inst_27529,inst_27520);
var state_27549__$1 = (function (){var statearr_27566 = state_27549;
(statearr_27566[(8)] = inst_27530__$1);

(statearr_27566[(9)] = inst_27528);

return statearr_27566;
})();
if(cljs.core.truth_(inst_27530__$1)){
var statearr_27567_27590 = state_27549__$1;
(statearr_27567_27590[(1)] = (15));

} else {
var statearr_27568_27591 = state_27549__$1;
(statearr_27568_27591[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27550 === (16))){
var inst_27528 = (state_27549[(9)]);
var inst_27534 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27528);
var state_27549__$1 = state_27549;
var statearr_27569_27592 = state_27549__$1;
(statearr_27569_27592[(2)] = inst_27534);

(statearr_27569_27592[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27550 === (10))){
var inst_27541 = (state_27549[(2)]);
var state_27549__$1 = (function (){var statearr_27570 = state_27549;
(statearr_27570[(12)] = inst_27541);

return statearr_27570;
})();
var statearr_27571_27593 = state_27549__$1;
(statearr_27571_27593[(2)] = null);

(statearr_27571_27593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27550 === (8))){
var inst_27521 = (state_27549[(11)]);
var inst_27523 = eval(inst_27521);
var state_27549__$1 = state_27549;
var statearr_27572_27594 = state_27549__$1;
(statearr_27572_27594[(2)] = inst_27523);

(statearr_27572_27594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25309__auto__))
;
return ((function (switch__25219__auto__,c__25309__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25220__auto__ = null;
var figwheel$client$file_reloading$state_machine__25220__auto____0 = (function (){
var statearr_27573 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27573[(0)] = figwheel$client$file_reloading$state_machine__25220__auto__);

(statearr_27573[(1)] = (1));

return statearr_27573;
});
var figwheel$client$file_reloading$state_machine__25220__auto____1 = (function (state_27549){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_27549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e27574){if((e27574 instanceof Object)){
var ex__25223__auto__ = e27574;
var statearr_27575_27595 = state_27549;
(statearr_27575_27595[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27596 = state_27549;
state_27549 = G__27596;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25220__auto__ = function(state_27549){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25220__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25220__auto____1.call(this,state_27549);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25220__auto____0;
figwheel$client$file_reloading$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25220__auto____1;
return figwheel$client$file_reloading$state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto__))
})();
var state__25311__auto__ = (function (){var statearr_27576 = f__25310__auto__.call(null);
(statearr_27576[(6)] = c__25309__auto__);

return statearr_27576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto__))
);

return c__25309__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27598 = arguments.length;
switch (G__27598) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27600,callback){
var map__27601 = p__27600;
var map__27601__$1 = ((((!((map__27601 == null)))?(((((map__27601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27601):map__27601);
var file_msg = map__27601__$1;
var namespace = cljs.core.get.call(null,map__27601__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27601,map__27601__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27601,map__27601__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27603){
var map__27604 = p__27603;
var map__27604__$1 = ((((!((map__27604 == null)))?(((((map__27604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27604):map__27604);
var file_msg = map__27604__$1;
var namespace = cljs.core.get.call(null,map__27604__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27606){
var map__27607 = p__27606;
var map__27607__$1 = ((((!((map__27607 == null)))?(((((map__27607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27607):map__27607);
var file_msg = map__27607__$1;
var namespace = cljs.core.get.call(null,map__27607__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27609,callback){
var map__27610 = p__27609;
var map__27610__$1 = ((((!((map__27610 == null)))?(((((map__27610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27610):map__27610);
var file_msg = map__27610__$1;
var request_url = cljs.core.get.call(null,map__27610__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27610__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25309__auto___27660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto___27660,out){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto___27660,out){
return (function (state_27645){
var state_val_27646 = (state_27645[(1)]);
if((state_val_27646 === (1))){
var inst_27619 = cljs.core.seq.call(null,files);
var inst_27620 = cljs.core.first.call(null,inst_27619);
var inst_27621 = cljs.core.next.call(null,inst_27619);
var inst_27622 = files;
var state_27645__$1 = (function (){var statearr_27647 = state_27645;
(statearr_27647[(7)] = inst_27622);

(statearr_27647[(8)] = inst_27620);

(statearr_27647[(9)] = inst_27621);

return statearr_27647;
})();
var statearr_27648_27661 = state_27645__$1;
(statearr_27648_27661[(2)] = null);

(statearr_27648_27661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (2))){
var inst_27622 = (state_27645[(7)]);
var inst_27628 = (state_27645[(10)]);
var inst_27627 = cljs.core.seq.call(null,inst_27622);
var inst_27628__$1 = cljs.core.first.call(null,inst_27627);
var inst_27629 = cljs.core.next.call(null,inst_27627);
var inst_27630 = (inst_27628__$1 == null);
var inst_27631 = cljs.core.not.call(null,inst_27630);
var state_27645__$1 = (function (){var statearr_27649 = state_27645;
(statearr_27649[(10)] = inst_27628__$1);

(statearr_27649[(11)] = inst_27629);

return statearr_27649;
})();
if(inst_27631){
var statearr_27650_27662 = state_27645__$1;
(statearr_27650_27662[(1)] = (4));

} else {
var statearr_27651_27663 = state_27645__$1;
(statearr_27651_27663[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (3))){
var inst_27643 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27645__$1,inst_27643);
} else {
if((state_val_27646 === (4))){
var inst_27628 = (state_27645[(10)]);
var inst_27633 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27628);
var state_27645__$1 = state_27645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27645__$1,(7),inst_27633);
} else {
if((state_val_27646 === (5))){
var inst_27639 = cljs.core.async.close_BANG_.call(null,out);
var state_27645__$1 = state_27645;
var statearr_27652_27664 = state_27645__$1;
(statearr_27652_27664[(2)] = inst_27639);

(statearr_27652_27664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (6))){
var inst_27641 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
var statearr_27653_27665 = state_27645__$1;
(statearr_27653_27665[(2)] = inst_27641);

(statearr_27653_27665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (7))){
var inst_27629 = (state_27645[(11)]);
var inst_27635 = (state_27645[(2)]);
var inst_27636 = cljs.core.async.put_BANG_.call(null,out,inst_27635);
var inst_27622 = inst_27629;
var state_27645__$1 = (function (){var statearr_27654 = state_27645;
(statearr_27654[(7)] = inst_27622);

(statearr_27654[(12)] = inst_27636);

return statearr_27654;
})();
var statearr_27655_27666 = state_27645__$1;
(statearr_27655_27666[(2)] = null);

(statearr_27655_27666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__25309__auto___27660,out))
;
return ((function (switch__25219__auto__,c__25309__auto___27660,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25220__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25220__auto____0 = (function (){
var statearr_27656 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27656[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25220__auto__);

(statearr_27656[(1)] = (1));

return statearr_27656;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25220__auto____1 = (function (state_27645){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_27645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e27657){if((e27657 instanceof Object)){
var ex__25223__auto__ = e27657;
var statearr_27658_27667 = state_27645;
(statearr_27658_27667[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27668 = state_27645;
state_27645 = G__27668;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25220__auto__ = function(state_27645){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25220__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25220__auto____1.call(this,state_27645);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25220__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25220__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto___27660,out))
})();
var state__25311__auto__ = (function (){var statearr_27659 = f__25310__auto__.call(null);
(statearr_27659[(6)] = c__25309__auto___27660);

return statearr_27659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto___27660,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27669,opts){
var map__27670 = p__27669;
var map__27670__$1 = ((((!((map__27670 == null)))?(((((map__27670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27670):map__27670);
var eval_body = cljs.core.get.call(null,map__27670__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27670__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27672){var e = e27672;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27673_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27673_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27674){
var vec__27675 = p__27674;
var k = cljs.core.nth.call(null,vec__27675,(0),null);
var v = cljs.core.nth.call(null,vec__27675,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27678){
var vec__27679 = p__27678;
var k = cljs.core.nth.call(null,vec__27679,(0),null);
var v = cljs.core.nth.call(null,vec__27679,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27685,p__27686){
var map__27687 = p__27685;
var map__27687__$1 = ((((!((map__27687 == null)))?(((((map__27687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27687):map__27687);
var opts = map__27687__$1;
var before_jsload = cljs.core.get.call(null,map__27687__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27687__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27687__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27688 = p__27686;
var map__27688__$1 = ((((!((map__27688 == null)))?(((((map__27688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27688):map__27688);
var msg = map__27688__$1;
var files = cljs.core.get.call(null,map__27688__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27688__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27688__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto__,map__27687,map__27687__$1,opts,before_jsload,on_jsload,reload_dependents,map__27688,map__27688__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto__,map__27687,map__27687__$1,opts,before_jsload,on_jsload,reload_dependents,map__27688,map__27688__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27842){
var state_val_27843 = (state_27842[(1)]);
if((state_val_27843 === (7))){
var inst_27702 = (state_27842[(7)]);
var inst_27703 = (state_27842[(8)]);
var inst_27704 = (state_27842[(9)]);
var inst_27705 = (state_27842[(10)]);
var inst_27710 = cljs.core._nth.call(null,inst_27703,inst_27705);
var inst_27711 = figwheel.client.file_reloading.eval_body.call(null,inst_27710,opts);
var inst_27712 = (inst_27705 + (1));
var tmp27844 = inst_27702;
var tmp27845 = inst_27703;
var tmp27846 = inst_27704;
var inst_27702__$1 = tmp27844;
var inst_27703__$1 = tmp27845;
var inst_27704__$1 = tmp27846;
var inst_27705__$1 = inst_27712;
var state_27842__$1 = (function (){var statearr_27847 = state_27842;
(statearr_27847[(7)] = inst_27702__$1);

(statearr_27847[(8)] = inst_27703__$1);

(statearr_27847[(11)] = inst_27711);

(statearr_27847[(9)] = inst_27704__$1);

(statearr_27847[(10)] = inst_27705__$1);

return statearr_27847;
})();
var statearr_27848_27931 = state_27842__$1;
(statearr_27848_27931[(2)] = null);

(statearr_27848_27931[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (20))){
var inst_27745 = (state_27842[(12)]);
var inst_27753 = figwheel.client.file_reloading.sort_files.call(null,inst_27745);
var state_27842__$1 = state_27842;
var statearr_27849_27932 = state_27842__$1;
(statearr_27849_27932[(2)] = inst_27753);

(statearr_27849_27932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (27))){
var state_27842__$1 = state_27842;
var statearr_27850_27933 = state_27842__$1;
(statearr_27850_27933[(2)] = null);

(statearr_27850_27933[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (1))){
var inst_27694 = (state_27842[(13)]);
var inst_27691 = before_jsload.call(null,files);
var inst_27692 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27693 = (function (){return ((function (inst_27694,inst_27691,inst_27692,state_val_27843,c__25309__auto__,map__27687,map__27687__$1,opts,before_jsload,on_jsload,reload_dependents,map__27688,map__27688__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27682_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27682_SHARP_);
});
;})(inst_27694,inst_27691,inst_27692,state_val_27843,c__25309__auto__,map__27687,map__27687__$1,opts,before_jsload,on_jsload,reload_dependents,map__27688,map__27688__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27694__$1 = cljs.core.filter.call(null,inst_27693,files);
var inst_27695 = cljs.core.not_empty.call(null,inst_27694__$1);
var state_27842__$1 = (function (){var statearr_27851 = state_27842;
(statearr_27851[(14)] = inst_27691);

(statearr_27851[(13)] = inst_27694__$1);

(statearr_27851[(15)] = inst_27692);

return statearr_27851;
})();
if(cljs.core.truth_(inst_27695)){
var statearr_27852_27934 = state_27842__$1;
(statearr_27852_27934[(1)] = (2));

} else {
var statearr_27853_27935 = state_27842__$1;
(statearr_27853_27935[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (24))){
var state_27842__$1 = state_27842;
var statearr_27854_27936 = state_27842__$1;
(statearr_27854_27936[(2)] = null);

(statearr_27854_27936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (39))){
var inst_27795 = (state_27842[(16)]);
var state_27842__$1 = state_27842;
var statearr_27855_27937 = state_27842__$1;
(statearr_27855_27937[(2)] = inst_27795);

(statearr_27855_27937[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (46))){
var inst_27837 = (state_27842[(2)]);
var state_27842__$1 = state_27842;
var statearr_27856_27938 = state_27842__$1;
(statearr_27856_27938[(2)] = inst_27837);

(statearr_27856_27938[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (4))){
var inst_27739 = (state_27842[(2)]);
var inst_27740 = cljs.core.List.EMPTY;
var inst_27741 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27740);
var inst_27742 = (function (){return ((function (inst_27739,inst_27740,inst_27741,state_val_27843,c__25309__auto__,map__27687,map__27687__$1,opts,before_jsload,on_jsload,reload_dependents,map__27688,map__27688__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27683_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27683_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27683_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27683_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_27739,inst_27740,inst_27741,state_val_27843,c__25309__auto__,map__27687,map__27687__$1,opts,before_jsload,on_jsload,reload_dependents,map__27688,map__27688__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27743 = cljs.core.filter.call(null,inst_27742,files);
var inst_27744 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27745 = cljs.core.concat.call(null,inst_27743,inst_27744);
var state_27842__$1 = (function (){var statearr_27857 = state_27842;
(statearr_27857[(17)] = inst_27739);

(statearr_27857[(18)] = inst_27741);

(statearr_27857[(12)] = inst_27745);

return statearr_27857;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27858_27939 = state_27842__$1;
(statearr_27858_27939[(1)] = (16));

} else {
var statearr_27859_27940 = state_27842__$1;
(statearr_27859_27940[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (15))){
var inst_27729 = (state_27842[(2)]);
var state_27842__$1 = state_27842;
var statearr_27860_27941 = state_27842__$1;
(statearr_27860_27941[(2)] = inst_27729);

(statearr_27860_27941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (21))){
var inst_27755 = (state_27842[(19)]);
var inst_27755__$1 = (state_27842[(2)]);
var inst_27756 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27755__$1);
var state_27842__$1 = (function (){var statearr_27861 = state_27842;
(statearr_27861[(19)] = inst_27755__$1);

return statearr_27861;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27842__$1,(22),inst_27756);
} else {
if((state_val_27843 === (31))){
var inst_27840 = (state_27842[(2)]);
var state_27842__$1 = state_27842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27842__$1,inst_27840);
} else {
if((state_val_27843 === (32))){
var inst_27795 = (state_27842[(16)]);
var inst_27800 = inst_27795.cljs$lang$protocol_mask$partition0$;
var inst_27801 = (inst_27800 & (64));
var inst_27802 = inst_27795.cljs$core$ISeq$;
var inst_27803 = (cljs.core.PROTOCOL_SENTINEL === inst_27802);
var inst_27804 = ((inst_27801) || (inst_27803));
var state_27842__$1 = state_27842;
if(cljs.core.truth_(inst_27804)){
var statearr_27862_27942 = state_27842__$1;
(statearr_27862_27942[(1)] = (35));

} else {
var statearr_27863_27943 = state_27842__$1;
(statearr_27863_27943[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (40))){
var inst_27817 = (state_27842[(20)]);
var inst_27816 = (state_27842[(2)]);
var inst_27817__$1 = cljs.core.get.call(null,inst_27816,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27818 = cljs.core.get.call(null,inst_27816,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27819 = cljs.core.not_empty.call(null,inst_27817__$1);
var state_27842__$1 = (function (){var statearr_27864 = state_27842;
(statearr_27864[(20)] = inst_27817__$1);

(statearr_27864[(21)] = inst_27818);

return statearr_27864;
})();
if(cljs.core.truth_(inst_27819)){
var statearr_27865_27944 = state_27842__$1;
(statearr_27865_27944[(1)] = (41));

} else {
var statearr_27866_27945 = state_27842__$1;
(statearr_27866_27945[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (33))){
var state_27842__$1 = state_27842;
var statearr_27867_27946 = state_27842__$1;
(statearr_27867_27946[(2)] = false);

(statearr_27867_27946[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (13))){
var inst_27715 = (state_27842[(22)]);
var inst_27719 = cljs.core.chunk_first.call(null,inst_27715);
var inst_27720 = cljs.core.chunk_rest.call(null,inst_27715);
var inst_27721 = cljs.core.count.call(null,inst_27719);
var inst_27702 = inst_27720;
var inst_27703 = inst_27719;
var inst_27704 = inst_27721;
var inst_27705 = (0);
var state_27842__$1 = (function (){var statearr_27868 = state_27842;
(statearr_27868[(7)] = inst_27702);

(statearr_27868[(8)] = inst_27703);

(statearr_27868[(9)] = inst_27704);

(statearr_27868[(10)] = inst_27705);

return statearr_27868;
})();
var statearr_27869_27947 = state_27842__$1;
(statearr_27869_27947[(2)] = null);

(statearr_27869_27947[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (22))){
var inst_27755 = (state_27842[(19)]);
var inst_27759 = (state_27842[(23)]);
var inst_27763 = (state_27842[(24)]);
var inst_27758 = (state_27842[(25)]);
var inst_27758__$1 = (state_27842[(2)]);
var inst_27759__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27758__$1);
var inst_27760 = (function (){var all_files = inst_27755;
var res_SINGLEQUOTE_ = inst_27758__$1;
var res = inst_27759__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27755,inst_27759,inst_27763,inst_27758,inst_27758__$1,inst_27759__$1,state_val_27843,c__25309__auto__,map__27687,map__27687__$1,opts,before_jsload,on_jsload,reload_dependents,map__27688,map__27688__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27684_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27684_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27755,inst_27759,inst_27763,inst_27758,inst_27758__$1,inst_27759__$1,state_val_27843,c__25309__auto__,map__27687,map__27687__$1,opts,before_jsload,on_jsload,reload_dependents,map__27688,map__27688__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27761 = cljs.core.filter.call(null,inst_27760,inst_27758__$1);
var inst_27762 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27763__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27762);
var inst_27764 = cljs.core.not_empty.call(null,inst_27763__$1);
var state_27842__$1 = (function (){var statearr_27870 = state_27842;
(statearr_27870[(26)] = inst_27761);

(statearr_27870[(23)] = inst_27759__$1);

(statearr_27870[(24)] = inst_27763__$1);

(statearr_27870[(25)] = inst_27758__$1);

return statearr_27870;
})();
if(cljs.core.truth_(inst_27764)){
var statearr_27871_27948 = state_27842__$1;
(statearr_27871_27948[(1)] = (23));

} else {
var statearr_27872_27949 = state_27842__$1;
(statearr_27872_27949[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (36))){
var state_27842__$1 = state_27842;
var statearr_27873_27950 = state_27842__$1;
(statearr_27873_27950[(2)] = false);

(statearr_27873_27950[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (41))){
var inst_27817 = (state_27842[(20)]);
var inst_27821 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27822 = cljs.core.map.call(null,inst_27821,inst_27817);
var inst_27823 = cljs.core.pr_str.call(null,inst_27822);
var inst_27824 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27823)].join('');
var inst_27825 = figwheel.client.utils.log.call(null,inst_27824);
var state_27842__$1 = state_27842;
var statearr_27874_27951 = state_27842__$1;
(statearr_27874_27951[(2)] = inst_27825);

(statearr_27874_27951[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (43))){
var inst_27818 = (state_27842[(21)]);
var inst_27828 = (state_27842[(2)]);
var inst_27829 = cljs.core.not_empty.call(null,inst_27818);
var state_27842__$1 = (function (){var statearr_27875 = state_27842;
(statearr_27875[(27)] = inst_27828);

return statearr_27875;
})();
if(cljs.core.truth_(inst_27829)){
var statearr_27876_27952 = state_27842__$1;
(statearr_27876_27952[(1)] = (44));

} else {
var statearr_27877_27953 = state_27842__$1;
(statearr_27877_27953[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (29))){
var inst_27761 = (state_27842[(26)]);
var inst_27755 = (state_27842[(19)]);
var inst_27759 = (state_27842[(23)]);
var inst_27795 = (state_27842[(16)]);
var inst_27763 = (state_27842[(24)]);
var inst_27758 = (state_27842[(25)]);
var inst_27791 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27794 = (function (){var all_files = inst_27755;
var res_SINGLEQUOTE_ = inst_27758;
var res = inst_27759;
var files_not_loaded = inst_27761;
var dependencies_that_loaded = inst_27763;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27761,inst_27755,inst_27759,inst_27795,inst_27763,inst_27758,inst_27791,state_val_27843,c__25309__auto__,map__27687,map__27687__$1,opts,before_jsload,on_jsload,reload_dependents,map__27688,map__27688__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27793){
var map__27878 = p__27793;
var map__27878__$1 = ((((!((map__27878 == null)))?(((((map__27878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27878):map__27878);
var namespace = cljs.core.get.call(null,map__27878__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27761,inst_27755,inst_27759,inst_27795,inst_27763,inst_27758,inst_27791,state_val_27843,c__25309__auto__,map__27687,map__27687__$1,opts,before_jsload,on_jsload,reload_dependents,map__27688,map__27688__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27795__$1 = cljs.core.group_by.call(null,inst_27794,inst_27761);
var inst_27797 = (inst_27795__$1 == null);
var inst_27798 = cljs.core.not.call(null,inst_27797);
var state_27842__$1 = (function (){var statearr_27880 = state_27842;
(statearr_27880[(16)] = inst_27795__$1);

(statearr_27880[(28)] = inst_27791);

return statearr_27880;
})();
if(inst_27798){
var statearr_27881_27954 = state_27842__$1;
(statearr_27881_27954[(1)] = (32));

} else {
var statearr_27882_27955 = state_27842__$1;
(statearr_27882_27955[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (44))){
var inst_27818 = (state_27842[(21)]);
var inst_27831 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27818);
var inst_27832 = cljs.core.pr_str.call(null,inst_27831);
var inst_27833 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27832)].join('');
var inst_27834 = figwheel.client.utils.log.call(null,inst_27833);
var state_27842__$1 = state_27842;
var statearr_27883_27956 = state_27842__$1;
(statearr_27883_27956[(2)] = inst_27834);

(statearr_27883_27956[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (6))){
var inst_27736 = (state_27842[(2)]);
var state_27842__$1 = state_27842;
var statearr_27884_27957 = state_27842__$1;
(statearr_27884_27957[(2)] = inst_27736);

(statearr_27884_27957[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (28))){
var inst_27761 = (state_27842[(26)]);
var inst_27788 = (state_27842[(2)]);
var inst_27789 = cljs.core.not_empty.call(null,inst_27761);
var state_27842__$1 = (function (){var statearr_27885 = state_27842;
(statearr_27885[(29)] = inst_27788);

return statearr_27885;
})();
if(cljs.core.truth_(inst_27789)){
var statearr_27886_27958 = state_27842__$1;
(statearr_27886_27958[(1)] = (29));

} else {
var statearr_27887_27959 = state_27842__$1;
(statearr_27887_27959[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (25))){
var inst_27759 = (state_27842[(23)]);
var inst_27775 = (state_27842[(2)]);
var inst_27776 = cljs.core.not_empty.call(null,inst_27759);
var state_27842__$1 = (function (){var statearr_27888 = state_27842;
(statearr_27888[(30)] = inst_27775);

return statearr_27888;
})();
if(cljs.core.truth_(inst_27776)){
var statearr_27889_27960 = state_27842__$1;
(statearr_27889_27960[(1)] = (26));

} else {
var statearr_27890_27961 = state_27842__$1;
(statearr_27890_27961[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (34))){
var inst_27811 = (state_27842[(2)]);
var state_27842__$1 = state_27842;
if(cljs.core.truth_(inst_27811)){
var statearr_27891_27962 = state_27842__$1;
(statearr_27891_27962[(1)] = (38));

} else {
var statearr_27892_27963 = state_27842__$1;
(statearr_27892_27963[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (17))){
var state_27842__$1 = state_27842;
var statearr_27893_27964 = state_27842__$1;
(statearr_27893_27964[(2)] = recompile_dependents);

(statearr_27893_27964[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (3))){
var state_27842__$1 = state_27842;
var statearr_27894_27965 = state_27842__$1;
(statearr_27894_27965[(2)] = null);

(statearr_27894_27965[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (12))){
var inst_27732 = (state_27842[(2)]);
var state_27842__$1 = state_27842;
var statearr_27895_27966 = state_27842__$1;
(statearr_27895_27966[(2)] = inst_27732);

(statearr_27895_27966[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (2))){
var inst_27694 = (state_27842[(13)]);
var inst_27701 = cljs.core.seq.call(null,inst_27694);
var inst_27702 = inst_27701;
var inst_27703 = null;
var inst_27704 = (0);
var inst_27705 = (0);
var state_27842__$1 = (function (){var statearr_27896 = state_27842;
(statearr_27896[(7)] = inst_27702);

(statearr_27896[(8)] = inst_27703);

(statearr_27896[(9)] = inst_27704);

(statearr_27896[(10)] = inst_27705);

return statearr_27896;
})();
var statearr_27897_27967 = state_27842__$1;
(statearr_27897_27967[(2)] = null);

(statearr_27897_27967[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (23))){
var inst_27761 = (state_27842[(26)]);
var inst_27755 = (state_27842[(19)]);
var inst_27759 = (state_27842[(23)]);
var inst_27763 = (state_27842[(24)]);
var inst_27758 = (state_27842[(25)]);
var inst_27766 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27768 = (function (){var all_files = inst_27755;
var res_SINGLEQUOTE_ = inst_27758;
var res = inst_27759;
var files_not_loaded = inst_27761;
var dependencies_that_loaded = inst_27763;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27761,inst_27755,inst_27759,inst_27763,inst_27758,inst_27766,state_val_27843,c__25309__auto__,map__27687,map__27687__$1,opts,before_jsload,on_jsload,reload_dependents,map__27688,map__27688__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27767){
var map__27898 = p__27767;
var map__27898__$1 = ((((!((map__27898 == null)))?(((((map__27898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27898):map__27898);
var request_url = cljs.core.get.call(null,map__27898__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27761,inst_27755,inst_27759,inst_27763,inst_27758,inst_27766,state_val_27843,c__25309__auto__,map__27687,map__27687__$1,opts,before_jsload,on_jsload,reload_dependents,map__27688,map__27688__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27769 = cljs.core.reverse.call(null,inst_27763);
var inst_27770 = cljs.core.map.call(null,inst_27768,inst_27769);
var inst_27771 = cljs.core.pr_str.call(null,inst_27770);
var inst_27772 = figwheel.client.utils.log.call(null,inst_27771);
var state_27842__$1 = (function (){var statearr_27900 = state_27842;
(statearr_27900[(31)] = inst_27766);

return statearr_27900;
})();
var statearr_27901_27968 = state_27842__$1;
(statearr_27901_27968[(2)] = inst_27772);

(statearr_27901_27968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (35))){
var state_27842__$1 = state_27842;
var statearr_27902_27969 = state_27842__$1;
(statearr_27902_27969[(2)] = true);

(statearr_27902_27969[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (19))){
var inst_27745 = (state_27842[(12)]);
var inst_27751 = figwheel.client.file_reloading.expand_files.call(null,inst_27745);
var state_27842__$1 = state_27842;
var statearr_27903_27970 = state_27842__$1;
(statearr_27903_27970[(2)] = inst_27751);

(statearr_27903_27970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (11))){
var state_27842__$1 = state_27842;
var statearr_27904_27971 = state_27842__$1;
(statearr_27904_27971[(2)] = null);

(statearr_27904_27971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (9))){
var inst_27734 = (state_27842[(2)]);
var state_27842__$1 = state_27842;
var statearr_27905_27972 = state_27842__$1;
(statearr_27905_27972[(2)] = inst_27734);

(statearr_27905_27972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (5))){
var inst_27704 = (state_27842[(9)]);
var inst_27705 = (state_27842[(10)]);
var inst_27707 = (inst_27705 < inst_27704);
var inst_27708 = inst_27707;
var state_27842__$1 = state_27842;
if(cljs.core.truth_(inst_27708)){
var statearr_27906_27973 = state_27842__$1;
(statearr_27906_27973[(1)] = (7));

} else {
var statearr_27907_27974 = state_27842__$1;
(statearr_27907_27974[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (14))){
var inst_27715 = (state_27842[(22)]);
var inst_27724 = cljs.core.first.call(null,inst_27715);
var inst_27725 = figwheel.client.file_reloading.eval_body.call(null,inst_27724,opts);
var inst_27726 = cljs.core.next.call(null,inst_27715);
var inst_27702 = inst_27726;
var inst_27703 = null;
var inst_27704 = (0);
var inst_27705 = (0);
var state_27842__$1 = (function (){var statearr_27908 = state_27842;
(statearr_27908[(7)] = inst_27702);

(statearr_27908[(8)] = inst_27703);

(statearr_27908[(9)] = inst_27704);

(statearr_27908[(32)] = inst_27725);

(statearr_27908[(10)] = inst_27705);

return statearr_27908;
})();
var statearr_27909_27975 = state_27842__$1;
(statearr_27909_27975[(2)] = null);

(statearr_27909_27975[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (45))){
var state_27842__$1 = state_27842;
var statearr_27910_27976 = state_27842__$1;
(statearr_27910_27976[(2)] = null);

(statearr_27910_27976[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (26))){
var inst_27761 = (state_27842[(26)]);
var inst_27755 = (state_27842[(19)]);
var inst_27759 = (state_27842[(23)]);
var inst_27763 = (state_27842[(24)]);
var inst_27758 = (state_27842[(25)]);
var inst_27778 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27780 = (function (){var all_files = inst_27755;
var res_SINGLEQUOTE_ = inst_27758;
var res = inst_27759;
var files_not_loaded = inst_27761;
var dependencies_that_loaded = inst_27763;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27761,inst_27755,inst_27759,inst_27763,inst_27758,inst_27778,state_val_27843,c__25309__auto__,map__27687,map__27687__$1,opts,before_jsload,on_jsload,reload_dependents,map__27688,map__27688__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27779){
var map__27911 = p__27779;
var map__27911__$1 = ((((!((map__27911 == null)))?(((((map__27911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27911):map__27911);
var namespace = cljs.core.get.call(null,map__27911__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27911__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27761,inst_27755,inst_27759,inst_27763,inst_27758,inst_27778,state_val_27843,c__25309__auto__,map__27687,map__27687__$1,opts,before_jsload,on_jsload,reload_dependents,map__27688,map__27688__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27781 = cljs.core.map.call(null,inst_27780,inst_27759);
var inst_27782 = cljs.core.pr_str.call(null,inst_27781);
var inst_27783 = figwheel.client.utils.log.call(null,inst_27782);
var inst_27784 = (function (){var all_files = inst_27755;
var res_SINGLEQUOTE_ = inst_27758;
var res = inst_27759;
var files_not_loaded = inst_27761;
var dependencies_that_loaded = inst_27763;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27761,inst_27755,inst_27759,inst_27763,inst_27758,inst_27778,inst_27780,inst_27781,inst_27782,inst_27783,state_val_27843,c__25309__auto__,map__27687,map__27687__$1,opts,before_jsload,on_jsload,reload_dependents,map__27688,map__27688__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27761,inst_27755,inst_27759,inst_27763,inst_27758,inst_27778,inst_27780,inst_27781,inst_27782,inst_27783,state_val_27843,c__25309__auto__,map__27687,map__27687__$1,opts,before_jsload,on_jsload,reload_dependents,map__27688,map__27688__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27785 = setTimeout(inst_27784,(10));
var state_27842__$1 = (function (){var statearr_27913 = state_27842;
(statearr_27913[(33)] = inst_27778);

(statearr_27913[(34)] = inst_27783);

return statearr_27913;
})();
var statearr_27914_27977 = state_27842__$1;
(statearr_27914_27977[(2)] = inst_27785);

(statearr_27914_27977[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (16))){
var state_27842__$1 = state_27842;
var statearr_27915_27978 = state_27842__$1;
(statearr_27915_27978[(2)] = reload_dependents);

(statearr_27915_27978[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (38))){
var inst_27795 = (state_27842[(16)]);
var inst_27813 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27795);
var state_27842__$1 = state_27842;
var statearr_27916_27979 = state_27842__$1;
(statearr_27916_27979[(2)] = inst_27813);

(statearr_27916_27979[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (30))){
var state_27842__$1 = state_27842;
var statearr_27917_27980 = state_27842__$1;
(statearr_27917_27980[(2)] = null);

(statearr_27917_27980[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (10))){
var inst_27715 = (state_27842[(22)]);
var inst_27717 = cljs.core.chunked_seq_QMARK_.call(null,inst_27715);
var state_27842__$1 = state_27842;
if(inst_27717){
var statearr_27918_27981 = state_27842__$1;
(statearr_27918_27981[(1)] = (13));

} else {
var statearr_27919_27982 = state_27842__$1;
(statearr_27919_27982[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (18))){
var inst_27749 = (state_27842[(2)]);
var state_27842__$1 = state_27842;
if(cljs.core.truth_(inst_27749)){
var statearr_27920_27983 = state_27842__$1;
(statearr_27920_27983[(1)] = (19));

} else {
var statearr_27921_27984 = state_27842__$1;
(statearr_27921_27984[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (42))){
var state_27842__$1 = state_27842;
var statearr_27922_27985 = state_27842__$1;
(statearr_27922_27985[(2)] = null);

(statearr_27922_27985[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (37))){
var inst_27808 = (state_27842[(2)]);
var state_27842__$1 = state_27842;
var statearr_27923_27986 = state_27842__$1;
(statearr_27923_27986[(2)] = inst_27808);

(statearr_27923_27986[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27843 === (8))){
var inst_27702 = (state_27842[(7)]);
var inst_27715 = (state_27842[(22)]);
var inst_27715__$1 = cljs.core.seq.call(null,inst_27702);
var state_27842__$1 = (function (){var statearr_27924 = state_27842;
(statearr_27924[(22)] = inst_27715__$1);

return statearr_27924;
})();
if(inst_27715__$1){
var statearr_27925_27987 = state_27842__$1;
(statearr_27925_27987[(1)] = (10));

} else {
var statearr_27926_27988 = state_27842__$1;
(statearr_27926_27988[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25309__auto__,map__27687,map__27687__$1,opts,before_jsload,on_jsload,reload_dependents,map__27688,map__27688__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25219__auto__,c__25309__auto__,map__27687,map__27687__$1,opts,before_jsload,on_jsload,reload_dependents,map__27688,map__27688__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25220__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25220__auto____0 = (function (){
var statearr_27927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27927[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25220__auto__);

(statearr_27927[(1)] = (1));

return statearr_27927;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25220__auto____1 = (function (state_27842){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_27842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e27928){if((e27928 instanceof Object)){
var ex__25223__auto__ = e27928;
var statearr_27929_27989 = state_27842;
(statearr_27929_27989[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27990 = state_27842;
state_27842 = G__27990;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25220__auto__ = function(state_27842){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25220__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25220__auto____1.call(this,state_27842);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25220__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25220__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto__,map__27687,map__27687__$1,opts,before_jsload,on_jsload,reload_dependents,map__27688,map__27688__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25311__auto__ = (function (){var statearr_27930 = f__25310__auto__.call(null);
(statearr_27930[(6)] = c__25309__auto__);

return statearr_27930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto__,map__27687,map__27687__$1,opts,before_jsload,on_jsload,reload_dependents,map__27688,map__27688__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25309__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27993,link){
var map__27994 = p__27993;
var map__27994__$1 = ((((!((map__27994 == null)))?(((((map__27994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27994):map__27994);
var file = cljs.core.get.call(null,map__27994__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__27994,map__27994__$1,file){
return (function (p1__27991_SHARP_,p2__27992_SHARP_){
if(cljs.core._EQ_.call(null,p1__27991_SHARP_,p2__27992_SHARP_)){
return p1__27991_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__27994,map__27994__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27997){
var map__27998 = p__27997;
var map__27998__$1 = ((((!((map__27998 == null)))?(((((map__27998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27998):map__27998);
var match_length = cljs.core.get.call(null,map__27998__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27998__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27996_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27996_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28000_SHARP_,p2__28001_SHARP_){
return cljs.core.assoc.call(null,p1__28000_SHARP_,cljs.core.get.call(null,p2__28001_SHARP_,key),p2__28001_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_28002 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28002);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28002);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28003,p__28004){
var map__28005 = p__28003;
var map__28005__$1 = ((((!((map__28005 == null)))?(((((map__28005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28005):map__28005);
var on_cssload = cljs.core.get.call(null,map__28005__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28006 = p__28004;
var map__28006__$1 = ((((!((map__28006 == null)))?(((((map__28006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28006):map__28006);
var files_msg = map__28006__$1;
var files = cljs.core.get.call(null,map__28006__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1535397864855
