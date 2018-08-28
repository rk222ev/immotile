// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28816){
var map__28817 = p__28816;
var map__28817__$1 = ((((!((map__28817 == null)))?(((((map__28817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28817):map__28817);
var m = map__28817__$1;
var n = cljs.core.get.call(null,map__28817__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28817__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28819_28841 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28820_28842 = null;
var count__28821_28843 = (0);
var i__28822_28844 = (0);
while(true){
if((i__28822_28844 < count__28821_28843)){
var f_28845 = cljs.core._nth.call(null,chunk__28820_28842,i__28822_28844);
cljs.core.println.call(null,"  ",f_28845);


var G__28846 = seq__28819_28841;
var G__28847 = chunk__28820_28842;
var G__28848 = count__28821_28843;
var G__28849 = (i__28822_28844 + (1));
seq__28819_28841 = G__28846;
chunk__28820_28842 = G__28847;
count__28821_28843 = G__28848;
i__28822_28844 = G__28849;
continue;
} else {
var temp__5457__auto___28850 = cljs.core.seq.call(null,seq__28819_28841);
if(temp__5457__auto___28850){
var seq__28819_28851__$1 = temp__5457__auto___28850;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28819_28851__$1)){
var c__4319__auto___28852 = cljs.core.chunk_first.call(null,seq__28819_28851__$1);
var G__28853 = cljs.core.chunk_rest.call(null,seq__28819_28851__$1);
var G__28854 = c__4319__auto___28852;
var G__28855 = cljs.core.count.call(null,c__4319__auto___28852);
var G__28856 = (0);
seq__28819_28841 = G__28853;
chunk__28820_28842 = G__28854;
count__28821_28843 = G__28855;
i__28822_28844 = G__28856;
continue;
} else {
var f_28857 = cljs.core.first.call(null,seq__28819_28851__$1);
cljs.core.println.call(null,"  ",f_28857);


var G__28858 = cljs.core.next.call(null,seq__28819_28851__$1);
var G__28859 = null;
var G__28860 = (0);
var G__28861 = (0);
seq__28819_28841 = G__28858;
chunk__28820_28842 = G__28859;
count__28821_28843 = G__28860;
i__28822_28844 = G__28861;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28862 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28862);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28862)))?cljs.core.second.call(null,arglists_28862):arglists_28862));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28823_28863 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28824_28864 = null;
var count__28825_28865 = (0);
var i__28826_28866 = (0);
while(true){
if((i__28826_28866 < count__28825_28865)){
var vec__28827_28867 = cljs.core._nth.call(null,chunk__28824_28864,i__28826_28866);
var name_28868 = cljs.core.nth.call(null,vec__28827_28867,(0),null);
var map__28830_28869 = cljs.core.nth.call(null,vec__28827_28867,(1),null);
var map__28830_28870__$1 = ((((!((map__28830_28869 == null)))?(((((map__28830_28869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28830_28869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28830_28869):map__28830_28869);
var doc_28871 = cljs.core.get.call(null,map__28830_28870__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28872 = cljs.core.get.call(null,map__28830_28870__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28868);

cljs.core.println.call(null," ",arglists_28872);

if(cljs.core.truth_(doc_28871)){
cljs.core.println.call(null," ",doc_28871);
} else {
}


var G__28873 = seq__28823_28863;
var G__28874 = chunk__28824_28864;
var G__28875 = count__28825_28865;
var G__28876 = (i__28826_28866 + (1));
seq__28823_28863 = G__28873;
chunk__28824_28864 = G__28874;
count__28825_28865 = G__28875;
i__28826_28866 = G__28876;
continue;
} else {
var temp__5457__auto___28877 = cljs.core.seq.call(null,seq__28823_28863);
if(temp__5457__auto___28877){
var seq__28823_28878__$1 = temp__5457__auto___28877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28823_28878__$1)){
var c__4319__auto___28879 = cljs.core.chunk_first.call(null,seq__28823_28878__$1);
var G__28880 = cljs.core.chunk_rest.call(null,seq__28823_28878__$1);
var G__28881 = c__4319__auto___28879;
var G__28882 = cljs.core.count.call(null,c__4319__auto___28879);
var G__28883 = (0);
seq__28823_28863 = G__28880;
chunk__28824_28864 = G__28881;
count__28825_28865 = G__28882;
i__28826_28866 = G__28883;
continue;
} else {
var vec__28832_28884 = cljs.core.first.call(null,seq__28823_28878__$1);
var name_28885 = cljs.core.nth.call(null,vec__28832_28884,(0),null);
var map__28835_28886 = cljs.core.nth.call(null,vec__28832_28884,(1),null);
var map__28835_28887__$1 = ((((!((map__28835_28886 == null)))?(((((map__28835_28886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28835_28886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28835_28886):map__28835_28886);
var doc_28888 = cljs.core.get.call(null,map__28835_28887__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28889 = cljs.core.get.call(null,map__28835_28887__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28885);

cljs.core.println.call(null," ",arglists_28889);

if(cljs.core.truth_(doc_28888)){
cljs.core.println.call(null," ",doc_28888);
} else {
}


var G__28890 = cljs.core.next.call(null,seq__28823_28878__$1);
var G__28891 = null;
var G__28892 = (0);
var G__28893 = (0);
seq__28823_28863 = G__28890;
chunk__28824_28864 = G__28891;
count__28825_28865 = G__28892;
i__28826_28866 = G__28893;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__28837 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28838 = null;
var count__28839 = (0);
var i__28840 = (0);
while(true){
if((i__28840 < count__28839)){
var role = cljs.core._nth.call(null,chunk__28838,i__28840);
var temp__5457__auto___28894__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28894__$1)){
var spec_28895 = temp__5457__auto___28894__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28895));
} else {
}


var G__28896 = seq__28837;
var G__28897 = chunk__28838;
var G__28898 = count__28839;
var G__28899 = (i__28840 + (1));
seq__28837 = G__28896;
chunk__28838 = G__28897;
count__28839 = G__28898;
i__28840 = G__28899;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__28837);
if(temp__5457__auto____$1){
var seq__28837__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28837__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28837__$1);
var G__28900 = cljs.core.chunk_rest.call(null,seq__28837__$1);
var G__28901 = c__4319__auto__;
var G__28902 = cljs.core.count.call(null,c__4319__auto__);
var G__28903 = (0);
seq__28837 = G__28900;
chunk__28838 = G__28901;
count__28839 = G__28902;
i__28840 = G__28903;
continue;
} else {
var role = cljs.core.first.call(null,seq__28837__$1);
var temp__5457__auto___28904__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28904__$2)){
var spec_28905 = temp__5457__auto___28904__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28905));
} else {
}


var G__28906 = cljs.core.next.call(null,seq__28837__$1);
var G__28907 = null;
var G__28908 = (0);
var G__28909 = (0);
seq__28837 = G__28906;
chunk__28838 = G__28907;
count__28839 = G__28908;
i__28840 = G__28909;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1535397866758
