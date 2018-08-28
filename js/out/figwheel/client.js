// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.15";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e29104){if((e29104 instanceof Error)){
var e = e29104;
return "Error: Unable to stringify";
} else {
throw e29104;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29107 = arguments.length;
switch (G__29107) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29105_SHARP_){
if(typeof p1__29105_SHARP_ === 'string'){
return p1__29105_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29105_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29110 = arguments.length;
var i__4500__auto___29111 = (0);
while(true){
if((i__4500__auto___29111 < len__4499__auto___29110)){
args__4502__auto__.push((arguments[i__4500__auto___29111]));

var G__29112 = (i__4500__auto___29111 + (1));
i__4500__auto___29111 = G__29112;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29109){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29109));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29114 = arguments.length;
var i__4500__auto___29115 = (0);
while(true){
if((i__4500__auto___29115 < len__4499__auto___29114)){
args__4502__auto__.push((arguments[i__4500__auto___29115]));

var G__29116 = (i__4500__auto___29115 + (1));
i__4500__auto___29115 = G__29116;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29113){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29113));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29117){
var map__29118 = p__29117;
var map__29118__$1 = ((((!((map__29118 == null)))?(((((map__29118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29118):map__29118);
var message = cljs.core.get.call(null,map__29118__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29118__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__25309__auto___29197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto___29197,ch){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto___29197,ch){
return (function (state_29169){
var state_val_29170 = (state_29169[(1)]);
if((state_val_29170 === (7))){
var inst_29165 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29171_29198 = state_29169__$1;
(statearr_29171_29198[(2)] = inst_29165);

(statearr_29171_29198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (1))){
var state_29169__$1 = state_29169;
var statearr_29172_29199 = state_29169__$1;
(statearr_29172_29199[(2)] = null);

(statearr_29172_29199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (4))){
var inst_29122 = (state_29169[(7)]);
var inst_29122__$1 = (state_29169[(2)]);
var state_29169__$1 = (function (){var statearr_29173 = state_29169;
(statearr_29173[(7)] = inst_29122__$1);

return statearr_29173;
})();
if(cljs.core.truth_(inst_29122__$1)){
var statearr_29174_29200 = state_29169__$1;
(statearr_29174_29200[(1)] = (5));

} else {
var statearr_29175_29201 = state_29169__$1;
(statearr_29175_29201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (15))){
var inst_29129 = (state_29169[(8)]);
var inst_29144 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29129);
var inst_29145 = cljs.core.first.call(null,inst_29144);
var inst_29146 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29145);
var inst_29147 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29146)].join('');
var inst_29148 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29147);
var state_29169__$1 = state_29169;
var statearr_29176_29202 = state_29169__$1;
(statearr_29176_29202[(2)] = inst_29148);

(statearr_29176_29202[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (13))){
var inst_29153 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29177_29203 = state_29169__$1;
(statearr_29177_29203[(2)] = inst_29153);

(statearr_29177_29203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (6))){
var state_29169__$1 = state_29169;
var statearr_29178_29204 = state_29169__$1;
(statearr_29178_29204[(2)] = null);

(statearr_29178_29204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (17))){
var inst_29151 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29179_29205 = state_29169__$1;
(statearr_29179_29205[(2)] = inst_29151);

(statearr_29179_29205[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (3))){
var inst_29167 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29169__$1,inst_29167);
} else {
if((state_val_29170 === (12))){
var inst_29128 = (state_29169[(9)]);
var inst_29142 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29128,opts);
var state_29169__$1 = state_29169;
if(cljs.core.truth_(inst_29142)){
var statearr_29180_29206 = state_29169__$1;
(statearr_29180_29206[(1)] = (15));

} else {
var statearr_29181_29207 = state_29169__$1;
(statearr_29181_29207[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (2))){
var state_29169__$1 = state_29169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29169__$1,(4),ch);
} else {
if((state_val_29170 === (11))){
var inst_29129 = (state_29169[(8)]);
var inst_29134 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29135 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29129);
var inst_29136 = cljs.core.async.timeout.call(null,(1000));
var inst_29137 = [inst_29135,inst_29136];
var inst_29138 = (new cljs.core.PersistentVector(null,2,(5),inst_29134,inst_29137,null));
var state_29169__$1 = state_29169;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29169__$1,(14),inst_29138);
} else {
if((state_val_29170 === (9))){
var inst_29129 = (state_29169[(8)]);
var inst_29155 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29156 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29129);
var inst_29157 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29156);
var inst_29158 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29157)].join('');
var inst_29159 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29158);
var state_29169__$1 = (function (){var statearr_29182 = state_29169;
(statearr_29182[(10)] = inst_29155);

return statearr_29182;
})();
var statearr_29183_29208 = state_29169__$1;
(statearr_29183_29208[(2)] = inst_29159);

(statearr_29183_29208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (5))){
var inst_29122 = (state_29169[(7)]);
var inst_29124 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29125 = (new cljs.core.PersistentArrayMap(null,2,inst_29124,null));
var inst_29126 = (new cljs.core.PersistentHashSet(null,inst_29125,null));
var inst_29127 = figwheel.client.focus_msgs.call(null,inst_29126,inst_29122);
var inst_29128 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29127);
var inst_29129 = cljs.core.first.call(null,inst_29127);
var inst_29130 = figwheel.client.autoload_QMARK_.call(null);
var state_29169__$1 = (function (){var statearr_29184 = state_29169;
(statearr_29184[(9)] = inst_29128);

(statearr_29184[(8)] = inst_29129);

return statearr_29184;
})();
if(cljs.core.truth_(inst_29130)){
var statearr_29185_29209 = state_29169__$1;
(statearr_29185_29209[(1)] = (8));

} else {
var statearr_29186_29210 = state_29169__$1;
(statearr_29186_29210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (14))){
var inst_29140 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29187_29211 = state_29169__$1;
(statearr_29187_29211[(2)] = inst_29140);

(statearr_29187_29211[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (16))){
var state_29169__$1 = state_29169;
var statearr_29188_29212 = state_29169__$1;
(statearr_29188_29212[(2)] = null);

(statearr_29188_29212[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (10))){
var inst_29161 = (state_29169[(2)]);
var state_29169__$1 = (function (){var statearr_29189 = state_29169;
(statearr_29189[(11)] = inst_29161);

return statearr_29189;
})();
var statearr_29190_29213 = state_29169__$1;
(statearr_29190_29213[(2)] = null);

(statearr_29190_29213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (8))){
var inst_29128 = (state_29169[(9)]);
var inst_29132 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29128,opts);
var state_29169__$1 = state_29169;
if(cljs.core.truth_(inst_29132)){
var statearr_29191_29214 = state_29169__$1;
(statearr_29191_29214[(1)] = (11));

} else {
var statearr_29192_29215 = state_29169__$1;
(statearr_29192_29215[(1)] = (12));

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
});})(c__25309__auto___29197,ch))
;
return ((function (switch__25219__auto__,c__25309__auto___29197,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25220__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25220__auto____0 = (function (){
var statearr_29193 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29193[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25220__auto__);

(statearr_29193[(1)] = (1));

return statearr_29193;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25220__auto____1 = (function (state_29169){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_29169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e29194){if((e29194 instanceof Object)){
var ex__25223__auto__ = e29194;
var statearr_29195_29216 = state_29169;
(statearr_29195_29216[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29217 = state_29169;
state_29169 = G__29217;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25220__auto__ = function(state_29169){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25220__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25220__auto____1.call(this,state_29169);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25220__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25220__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto___29197,ch))
})();
var state__25311__auto__ = (function (){var statearr_29196 = f__25310__auto__.call(null);
(statearr_29196[(6)] = c__25309__auto___29197);

return statearr_29196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto___29197,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29218_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29218_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29222 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29222){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29220 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29221 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29220,_STAR_print_fn_STAR_29221,sb,base_path_29222){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_29220,_STAR_print_fn_STAR_29221,sb,base_path_29222))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29221;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29220;
}}catch (e29219){if((e29219 instanceof Error)){
var e = e29219;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29222], null));
} else {
var e = e29219;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29222))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29223){
var map__29224 = p__29223;
var map__29224__$1 = ((((!((map__29224 == null)))?(((((map__29224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29224):map__29224);
var opts = map__29224__$1;
var build_id = cljs.core.get.call(null,map__29224__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29224,map__29224__$1,opts,build_id){
return (function (p__29226){
var vec__29227 = p__29226;
var seq__29228 = cljs.core.seq.call(null,vec__29227);
var first__29229 = cljs.core.first.call(null,seq__29228);
var seq__29228__$1 = cljs.core.next.call(null,seq__29228);
var map__29230 = first__29229;
var map__29230__$1 = ((((!((map__29230 == null)))?(((((map__29230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29230):map__29230);
var msg = map__29230__$1;
var msg_name = cljs.core.get.call(null,map__29230__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29228__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29227,seq__29228,first__29229,seq__29228__$1,map__29230,map__29230__$1,msg,msg_name,_,map__29224,map__29224__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29227,seq__29228,first__29229,seq__29228__$1,map__29230,map__29230__$1,msg,msg_name,_,map__29224,map__29224__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29224,map__29224__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29232){
var vec__29233 = p__29232;
var seq__29234 = cljs.core.seq.call(null,vec__29233);
var first__29235 = cljs.core.first.call(null,seq__29234);
var seq__29234__$1 = cljs.core.next.call(null,seq__29234);
var map__29236 = first__29235;
var map__29236__$1 = ((((!((map__29236 == null)))?(((((map__29236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29236):map__29236);
var msg = map__29236__$1;
var msg_name = cljs.core.get.call(null,map__29236__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29234__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29238){
var map__29239 = p__29238;
var map__29239__$1 = ((((!((map__29239 == null)))?(((((map__29239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29239):map__29239);
var on_compile_warning = cljs.core.get.call(null,map__29239__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29239__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29239,map__29239__$1,on_compile_warning,on_compile_fail){
return (function (p__29241){
var vec__29242 = p__29241;
var seq__29243 = cljs.core.seq.call(null,vec__29242);
var first__29244 = cljs.core.first.call(null,seq__29243);
var seq__29243__$1 = cljs.core.next.call(null,seq__29243);
var map__29245 = first__29244;
var map__29245__$1 = ((((!((map__29245 == null)))?(((((map__29245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29245):map__29245);
var msg = map__29245__$1;
var msg_name = cljs.core.get.call(null,map__29245__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29243__$1;
var pred__29247 = cljs.core._EQ_;
var expr__29248 = msg_name;
if(cljs.core.truth_(pred__29247.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29248))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29247.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29248))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29239,map__29239__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto__,msg_hist,msg_names,msg){
return (function (state_29337){
var state_val_29338 = (state_29337[(1)]);
if((state_val_29338 === (7))){
var inst_29257 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
if(cljs.core.truth_(inst_29257)){
var statearr_29339_29386 = state_29337__$1;
(statearr_29339_29386[(1)] = (8));

} else {
var statearr_29340_29387 = state_29337__$1;
(statearr_29340_29387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (20))){
var inst_29331 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
var statearr_29341_29388 = state_29337__$1;
(statearr_29341_29388[(2)] = inst_29331);

(statearr_29341_29388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (27))){
var inst_29327 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
var statearr_29342_29389 = state_29337__$1;
(statearr_29342_29389[(2)] = inst_29327);

(statearr_29342_29389[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (1))){
var inst_29250 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29337__$1 = state_29337;
if(cljs.core.truth_(inst_29250)){
var statearr_29343_29390 = state_29337__$1;
(statearr_29343_29390[(1)] = (2));

} else {
var statearr_29344_29391 = state_29337__$1;
(statearr_29344_29391[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (24))){
var inst_29329 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
var statearr_29345_29392 = state_29337__$1;
(statearr_29345_29392[(2)] = inst_29329);

(statearr_29345_29392[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (4))){
var inst_29335 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29337__$1,inst_29335);
} else {
if((state_val_29338 === (15))){
var inst_29333 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
var statearr_29346_29393 = state_29337__$1;
(statearr_29346_29393[(2)] = inst_29333);

(statearr_29346_29393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (21))){
var inst_29286 = (state_29337[(2)]);
var inst_29287 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29288 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29287);
var state_29337__$1 = (function (){var statearr_29347 = state_29337;
(statearr_29347[(7)] = inst_29286);

return statearr_29347;
})();
var statearr_29348_29394 = state_29337__$1;
(statearr_29348_29394[(2)] = inst_29288);

(statearr_29348_29394[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (31))){
var inst_29316 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29337__$1 = state_29337;
if(cljs.core.truth_(inst_29316)){
var statearr_29349_29395 = state_29337__$1;
(statearr_29349_29395[(1)] = (34));

} else {
var statearr_29350_29396 = state_29337__$1;
(statearr_29350_29396[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (32))){
var inst_29325 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
var statearr_29351_29397 = state_29337__$1;
(statearr_29351_29397[(2)] = inst_29325);

(statearr_29351_29397[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (33))){
var inst_29312 = (state_29337[(2)]);
var inst_29313 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29314 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29313);
var state_29337__$1 = (function (){var statearr_29352 = state_29337;
(statearr_29352[(8)] = inst_29312);

return statearr_29352;
})();
var statearr_29353_29398 = state_29337__$1;
(statearr_29353_29398[(2)] = inst_29314);

(statearr_29353_29398[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (13))){
var inst_29271 = figwheel.client.heads_up.clear.call(null);
var state_29337__$1 = state_29337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29337__$1,(16),inst_29271);
} else {
if((state_val_29338 === (22))){
var inst_29292 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29293 = figwheel.client.heads_up.append_warning_message.call(null,inst_29292);
var state_29337__$1 = state_29337;
var statearr_29354_29399 = state_29337__$1;
(statearr_29354_29399[(2)] = inst_29293);

(statearr_29354_29399[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (36))){
var inst_29323 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
var statearr_29355_29400 = state_29337__$1;
(statearr_29355_29400[(2)] = inst_29323);

(statearr_29355_29400[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (29))){
var inst_29303 = (state_29337[(2)]);
var inst_29304 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29305 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29304);
var state_29337__$1 = (function (){var statearr_29356 = state_29337;
(statearr_29356[(9)] = inst_29303);

return statearr_29356;
})();
var statearr_29357_29401 = state_29337__$1;
(statearr_29357_29401[(2)] = inst_29305);

(statearr_29357_29401[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (6))){
var inst_29252 = (state_29337[(10)]);
var state_29337__$1 = state_29337;
var statearr_29358_29402 = state_29337__$1;
(statearr_29358_29402[(2)] = inst_29252);

(statearr_29358_29402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (28))){
var inst_29299 = (state_29337[(2)]);
var inst_29300 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29301 = figwheel.client.heads_up.display_warning.call(null,inst_29300);
var state_29337__$1 = (function (){var statearr_29359 = state_29337;
(statearr_29359[(11)] = inst_29299);

return statearr_29359;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29337__$1,(29),inst_29301);
} else {
if((state_val_29338 === (25))){
var inst_29297 = figwheel.client.heads_up.clear.call(null);
var state_29337__$1 = state_29337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29337__$1,(28),inst_29297);
} else {
if((state_val_29338 === (34))){
var inst_29318 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29337__$1 = state_29337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29337__$1,(37),inst_29318);
} else {
if((state_val_29338 === (17))){
var inst_29277 = (state_29337[(2)]);
var inst_29278 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29279 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29278);
var state_29337__$1 = (function (){var statearr_29360 = state_29337;
(statearr_29360[(12)] = inst_29277);

return statearr_29360;
})();
var statearr_29361_29403 = state_29337__$1;
(statearr_29361_29403[(2)] = inst_29279);

(statearr_29361_29403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (3))){
var inst_29269 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29337__$1 = state_29337;
if(cljs.core.truth_(inst_29269)){
var statearr_29362_29404 = state_29337__$1;
(statearr_29362_29404[(1)] = (13));

} else {
var statearr_29363_29405 = state_29337__$1;
(statearr_29363_29405[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (12))){
var inst_29265 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
var statearr_29364_29406 = state_29337__$1;
(statearr_29364_29406[(2)] = inst_29265);

(statearr_29364_29406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (2))){
var inst_29252 = (state_29337[(10)]);
var inst_29252__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29337__$1 = (function (){var statearr_29365 = state_29337;
(statearr_29365[(10)] = inst_29252__$1);

return statearr_29365;
})();
if(cljs.core.truth_(inst_29252__$1)){
var statearr_29366_29407 = state_29337__$1;
(statearr_29366_29407[(1)] = (5));

} else {
var statearr_29367_29408 = state_29337__$1;
(statearr_29367_29408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (23))){
var inst_29295 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29337__$1 = state_29337;
if(cljs.core.truth_(inst_29295)){
var statearr_29368_29409 = state_29337__$1;
(statearr_29368_29409[(1)] = (25));

} else {
var statearr_29369_29410 = state_29337__$1;
(statearr_29369_29410[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (35))){
var state_29337__$1 = state_29337;
var statearr_29370_29411 = state_29337__$1;
(statearr_29370_29411[(2)] = null);

(statearr_29370_29411[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (19))){
var inst_29290 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29337__$1 = state_29337;
if(cljs.core.truth_(inst_29290)){
var statearr_29371_29412 = state_29337__$1;
(statearr_29371_29412[(1)] = (22));

} else {
var statearr_29372_29413 = state_29337__$1;
(statearr_29372_29413[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (11))){
var inst_29261 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
var statearr_29373_29414 = state_29337__$1;
(statearr_29373_29414[(2)] = inst_29261);

(statearr_29373_29414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (9))){
var inst_29263 = figwheel.client.heads_up.clear.call(null);
var state_29337__$1 = state_29337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29337__$1,(12),inst_29263);
} else {
if((state_val_29338 === (5))){
var inst_29254 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29337__$1 = state_29337;
var statearr_29374_29415 = state_29337__$1;
(statearr_29374_29415[(2)] = inst_29254);

(statearr_29374_29415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (14))){
var inst_29281 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29337__$1 = state_29337;
if(cljs.core.truth_(inst_29281)){
var statearr_29375_29416 = state_29337__$1;
(statearr_29375_29416[(1)] = (18));

} else {
var statearr_29376_29417 = state_29337__$1;
(statearr_29376_29417[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (26))){
var inst_29307 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29337__$1 = state_29337;
if(cljs.core.truth_(inst_29307)){
var statearr_29377_29418 = state_29337__$1;
(statearr_29377_29418[(1)] = (30));

} else {
var statearr_29378_29419 = state_29337__$1;
(statearr_29378_29419[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (16))){
var inst_29273 = (state_29337[(2)]);
var inst_29274 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29275 = figwheel.client.heads_up.display_exception.call(null,inst_29274);
var state_29337__$1 = (function (){var statearr_29379 = state_29337;
(statearr_29379[(13)] = inst_29273);

return statearr_29379;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29337__$1,(17),inst_29275);
} else {
if((state_val_29338 === (30))){
var inst_29309 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29310 = figwheel.client.heads_up.display_warning.call(null,inst_29309);
var state_29337__$1 = state_29337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29337__$1,(33),inst_29310);
} else {
if((state_val_29338 === (10))){
var inst_29267 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
var statearr_29380_29420 = state_29337__$1;
(statearr_29380_29420[(2)] = inst_29267);

(statearr_29380_29420[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (18))){
var inst_29283 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29284 = figwheel.client.heads_up.display_exception.call(null,inst_29283);
var state_29337__$1 = state_29337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29337__$1,(21),inst_29284);
} else {
if((state_val_29338 === (37))){
var inst_29320 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
var statearr_29381_29421 = state_29337__$1;
(statearr_29381_29421[(2)] = inst_29320);

(statearr_29381_29421[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (8))){
var inst_29259 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29337__$1 = state_29337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29337__$1,(11),inst_29259);
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
});})(c__25309__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25219__auto__,c__25309__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25220__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25220__auto____0 = (function (){
var statearr_29382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29382[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25220__auto__);

(statearr_29382[(1)] = (1));

return statearr_29382;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25220__auto____1 = (function (state_29337){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_29337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e29383){if((e29383 instanceof Object)){
var ex__25223__auto__ = e29383;
var statearr_29384_29422 = state_29337;
(statearr_29384_29422[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29423 = state_29337;
state_29337 = G__29423;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25220__auto__ = function(state_29337){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25220__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25220__auto____1.call(this,state_29337);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25220__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25220__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto__,msg_hist,msg_names,msg))
})();
var state__25311__auto__ = (function (){var statearr_29385 = f__25310__auto__.call(null);
(statearr_29385[(6)] = c__25309__auto__);

return statearr_29385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto__,msg_hist,msg_names,msg))
);

return c__25309__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25309__auto___29452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto___29452,ch){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto___29452,ch){
return (function (state_29438){
var state_val_29439 = (state_29438[(1)]);
if((state_val_29439 === (1))){
var state_29438__$1 = state_29438;
var statearr_29440_29453 = state_29438__$1;
(statearr_29440_29453[(2)] = null);

(statearr_29440_29453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (2))){
var state_29438__$1 = state_29438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29438__$1,(4),ch);
} else {
if((state_val_29439 === (3))){
var inst_29436 = (state_29438[(2)]);
var state_29438__$1 = state_29438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29438__$1,inst_29436);
} else {
if((state_val_29439 === (4))){
var inst_29426 = (state_29438[(7)]);
var inst_29426__$1 = (state_29438[(2)]);
var state_29438__$1 = (function (){var statearr_29441 = state_29438;
(statearr_29441[(7)] = inst_29426__$1);

return statearr_29441;
})();
if(cljs.core.truth_(inst_29426__$1)){
var statearr_29442_29454 = state_29438__$1;
(statearr_29442_29454[(1)] = (5));

} else {
var statearr_29443_29455 = state_29438__$1;
(statearr_29443_29455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (5))){
var inst_29426 = (state_29438[(7)]);
var inst_29428 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29426);
var state_29438__$1 = state_29438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29438__$1,(8),inst_29428);
} else {
if((state_val_29439 === (6))){
var state_29438__$1 = state_29438;
var statearr_29444_29456 = state_29438__$1;
(statearr_29444_29456[(2)] = null);

(statearr_29444_29456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (7))){
var inst_29434 = (state_29438[(2)]);
var state_29438__$1 = state_29438;
var statearr_29445_29457 = state_29438__$1;
(statearr_29445_29457[(2)] = inst_29434);

(statearr_29445_29457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (8))){
var inst_29430 = (state_29438[(2)]);
var state_29438__$1 = (function (){var statearr_29446 = state_29438;
(statearr_29446[(8)] = inst_29430);

return statearr_29446;
})();
var statearr_29447_29458 = state_29438__$1;
(statearr_29447_29458[(2)] = null);

(statearr_29447_29458[(1)] = (2));


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
});})(c__25309__auto___29452,ch))
;
return ((function (switch__25219__auto__,c__25309__auto___29452,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25220__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25220__auto____0 = (function (){
var statearr_29448 = [null,null,null,null,null,null,null,null,null];
(statearr_29448[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25220__auto__);

(statearr_29448[(1)] = (1));

return statearr_29448;
});
var figwheel$client$heads_up_plugin_$_state_machine__25220__auto____1 = (function (state_29438){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_29438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e29449){if((e29449 instanceof Object)){
var ex__25223__auto__ = e29449;
var statearr_29450_29459 = state_29438;
(statearr_29450_29459[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29460 = state_29438;
state_29438 = G__29460;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25220__auto__ = function(state_29438){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25220__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25220__auto____1.call(this,state_29438);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25220__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25220__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto___29452,ch))
})();
var state__25311__auto__ = (function (){var statearr_29451 = f__25310__auto__.call(null);
(statearr_29451[(6)] = c__25309__auto___29452);

return statearr_29451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto___29452,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto__){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto__){
return (function (state_29466){
var state_val_29467 = (state_29466[(1)]);
if((state_val_29467 === (1))){
var inst_29461 = cljs.core.async.timeout.call(null,(3000));
var state_29466__$1 = state_29466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29466__$1,(2),inst_29461);
} else {
if((state_val_29467 === (2))){
var inst_29463 = (state_29466[(2)]);
var inst_29464 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29466__$1 = (function (){var statearr_29468 = state_29466;
(statearr_29468[(7)] = inst_29463);

return statearr_29468;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29466__$1,inst_29464);
} else {
return null;
}
}
});})(c__25309__auto__))
;
return ((function (switch__25219__auto__,c__25309__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25220__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25220__auto____0 = (function (){
var statearr_29469 = [null,null,null,null,null,null,null,null];
(statearr_29469[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25220__auto__);

(statearr_29469[(1)] = (1));

return statearr_29469;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25220__auto____1 = (function (state_29466){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_29466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e29470){if((e29470 instanceof Object)){
var ex__25223__auto__ = e29470;
var statearr_29471_29473 = state_29466;
(statearr_29471_29473[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29474 = state_29466;
state_29466 = G__29474;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25220__auto__ = function(state_29466){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25220__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25220__auto____1.call(this,state_29466);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25220__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25220__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto__))
})();
var state__25311__auto__ = (function (){var statearr_29472 = f__25310__auto__.call(null);
(statearr_29472[(6)] = c__25309__auto__);

return statearr_29472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto__))
);

return c__25309__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto__,figwheel_version,temp__5457__auto__){
return (function (state_29481){
var state_val_29482 = (state_29481[(1)]);
if((state_val_29482 === (1))){
var inst_29475 = cljs.core.async.timeout.call(null,(2000));
var state_29481__$1 = state_29481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29481__$1,(2),inst_29475);
} else {
if((state_val_29482 === (2))){
var inst_29477 = (state_29481[(2)]);
var inst_29478 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29479 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29478);
var state_29481__$1 = (function (){var statearr_29483 = state_29481;
(statearr_29483[(7)] = inst_29477);

return statearr_29483;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29481__$1,inst_29479);
} else {
return null;
}
}
});})(c__25309__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__25219__auto__,c__25309__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25220__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25220__auto____0 = (function (){
var statearr_29484 = [null,null,null,null,null,null,null,null];
(statearr_29484[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25220__auto__);

(statearr_29484[(1)] = (1));

return statearr_29484;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25220__auto____1 = (function (state_29481){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_29481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e29485){if((e29485 instanceof Object)){
var ex__25223__auto__ = e29485;
var statearr_29486_29488 = state_29481;
(statearr_29486_29488[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29489 = state_29481;
state_29481 = G__29489;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25220__auto__ = function(state_29481){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25220__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25220__auto____1.call(this,state_29481);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25220__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25220__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto__,figwheel_version,temp__5457__auto__))
})();
var state__25311__auto__ = (function (){var statearr_29487 = f__25310__auto__.call(null);
(statearr_29487[(6)] = c__25309__auto__);

return statearr_29487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto__,figwheel_version,temp__5457__auto__))
);

return c__25309__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29490){
var map__29491 = p__29490;
var map__29491__$1 = ((((!((map__29491 == null)))?(((((map__29491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29491):map__29491);
var file = cljs.core.get.call(null,map__29491__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29491__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29491__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29493 = "";
var G__29493__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29493),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29493);
var G__29493__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29493__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29493__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29493__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29493__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29494){
var map__29495 = p__29494;
var map__29495__$1 = ((((!((map__29495 == null)))?(((((map__29495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29495):map__29495);
var ed = map__29495__$1;
var formatted_exception = cljs.core.get.call(null,map__29495__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29495__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29495__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29497_29501 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29498_29502 = null;
var count__29499_29503 = (0);
var i__29500_29504 = (0);
while(true){
if((i__29500_29504 < count__29499_29503)){
var msg_29505 = cljs.core._nth.call(null,chunk__29498_29502,i__29500_29504);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29505);


var G__29506 = seq__29497_29501;
var G__29507 = chunk__29498_29502;
var G__29508 = count__29499_29503;
var G__29509 = (i__29500_29504 + (1));
seq__29497_29501 = G__29506;
chunk__29498_29502 = G__29507;
count__29499_29503 = G__29508;
i__29500_29504 = G__29509;
continue;
} else {
var temp__5457__auto___29510 = cljs.core.seq.call(null,seq__29497_29501);
if(temp__5457__auto___29510){
var seq__29497_29511__$1 = temp__5457__auto___29510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29497_29511__$1)){
var c__4319__auto___29512 = cljs.core.chunk_first.call(null,seq__29497_29511__$1);
var G__29513 = cljs.core.chunk_rest.call(null,seq__29497_29511__$1);
var G__29514 = c__4319__auto___29512;
var G__29515 = cljs.core.count.call(null,c__4319__auto___29512);
var G__29516 = (0);
seq__29497_29501 = G__29513;
chunk__29498_29502 = G__29514;
count__29499_29503 = G__29515;
i__29500_29504 = G__29516;
continue;
} else {
var msg_29517 = cljs.core.first.call(null,seq__29497_29511__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29517);


var G__29518 = cljs.core.next.call(null,seq__29497_29511__$1);
var G__29519 = null;
var G__29520 = (0);
var G__29521 = (0);
seq__29497_29501 = G__29518;
chunk__29498_29502 = G__29519;
count__29499_29503 = G__29520;
i__29500_29504 = G__29521;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29522){
var map__29523 = p__29522;
var map__29523__$1 = ((((!((map__29523 == null)))?(((((map__29523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29523):map__29523);
var w = map__29523__$1;
var message = cljs.core.get.call(null,map__29523__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"out/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"out/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29525 = cljs.core.seq.call(null,plugins);
var chunk__29526 = null;
var count__29527 = (0);
var i__29528 = (0);
while(true){
if((i__29528 < count__29527)){
var vec__29529 = cljs.core._nth.call(null,chunk__29526,i__29528);
var k = cljs.core.nth.call(null,vec__29529,(0),null);
var plugin = cljs.core.nth.call(null,vec__29529,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29535 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29525,chunk__29526,count__29527,i__29528,pl_29535,vec__29529,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29535.call(null,msg_hist);
});})(seq__29525,chunk__29526,count__29527,i__29528,pl_29535,vec__29529,k,plugin))
);
} else {
}


var G__29536 = seq__29525;
var G__29537 = chunk__29526;
var G__29538 = count__29527;
var G__29539 = (i__29528 + (1));
seq__29525 = G__29536;
chunk__29526 = G__29537;
count__29527 = G__29538;
i__29528 = G__29539;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29525);
if(temp__5457__auto__){
var seq__29525__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29525__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29525__$1);
var G__29540 = cljs.core.chunk_rest.call(null,seq__29525__$1);
var G__29541 = c__4319__auto__;
var G__29542 = cljs.core.count.call(null,c__4319__auto__);
var G__29543 = (0);
seq__29525 = G__29540;
chunk__29526 = G__29541;
count__29527 = G__29542;
i__29528 = G__29543;
continue;
} else {
var vec__29532 = cljs.core.first.call(null,seq__29525__$1);
var k = cljs.core.nth.call(null,vec__29532,(0),null);
var plugin = cljs.core.nth.call(null,vec__29532,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29544 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29525,chunk__29526,count__29527,i__29528,pl_29544,vec__29532,k,plugin,seq__29525__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29544.call(null,msg_hist);
});})(seq__29525,chunk__29526,count__29527,i__29528,pl_29544,vec__29532,k,plugin,seq__29525__$1,temp__5457__auto__))
);
} else {
}


var G__29545 = cljs.core.next.call(null,seq__29525__$1);
var G__29546 = null;
var G__29547 = (0);
var G__29548 = (0);
seq__29525 = G__29545;
chunk__29526 = G__29546;
count__29527 = G__29547;
i__29528 = G__29548;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__29550 = arguments.length;
switch (G__29550) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__29551_29556 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29552_29557 = null;
var count__29553_29558 = (0);
var i__29554_29559 = (0);
while(true){
if((i__29554_29559 < count__29553_29558)){
var msg_29560 = cljs.core._nth.call(null,chunk__29552_29557,i__29554_29559);
figwheel.client.socket.handle_incoming_message.call(null,msg_29560);


var G__29561 = seq__29551_29556;
var G__29562 = chunk__29552_29557;
var G__29563 = count__29553_29558;
var G__29564 = (i__29554_29559 + (1));
seq__29551_29556 = G__29561;
chunk__29552_29557 = G__29562;
count__29553_29558 = G__29563;
i__29554_29559 = G__29564;
continue;
} else {
var temp__5457__auto___29565 = cljs.core.seq.call(null,seq__29551_29556);
if(temp__5457__auto___29565){
var seq__29551_29566__$1 = temp__5457__auto___29565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29551_29566__$1)){
var c__4319__auto___29567 = cljs.core.chunk_first.call(null,seq__29551_29566__$1);
var G__29568 = cljs.core.chunk_rest.call(null,seq__29551_29566__$1);
var G__29569 = c__4319__auto___29567;
var G__29570 = cljs.core.count.call(null,c__4319__auto___29567);
var G__29571 = (0);
seq__29551_29556 = G__29568;
chunk__29552_29557 = G__29569;
count__29553_29558 = G__29570;
i__29554_29559 = G__29571;
continue;
} else {
var msg_29572 = cljs.core.first.call(null,seq__29551_29566__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29572);


var G__29573 = cljs.core.next.call(null,seq__29551_29566__$1);
var G__29574 = null;
var G__29575 = (0);
var G__29576 = (0);
seq__29551_29556 = G__29573;
chunk__29552_29557 = G__29574;
count__29553_29558 = G__29575;
i__29554_29559 = G__29576;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29581 = arguments.length;
var i__4500__auto___29582 = (0);
while(true){
if((i__4500__auto___29582 < len__4499__auto___29581)){
args__4502__auto__.push((arguments[i__4500__auto___29582]));

var G__29583 = (i__4500__auto___29582 + (1));
i__4500__auto___29582 = G__29583;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29578){
var map__29579 = p__29578;
var map__29579__$1 = ((((!((map__29579 == null)))?(((((map__29579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29579):map__29579);
var opts = map__29579__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29577){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29577));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29584){if((e29584 instanceof Error)){
var e = e29584;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29584;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__29585){
var map__29586 = p__29585;
var map__29586__$1 = ((((!((map__29586 == null)))?(((((map__29586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29586):map__29586);
var msg_name = cljs.core.get.call(null,map__29586__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1535397867430
