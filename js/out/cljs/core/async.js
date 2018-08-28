// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25369 = arguments.length;
switch (G__25369) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async25370 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25370 = (function (f,blockable,meta25371){
this.f = f;
this.blockable = blockable;
this.meta25371 = meta25371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25372,meta25371__$1){
var self__ = this;
var _25372__$1 = this;
return (new cljs.core.async.t_cljs$core$async25370(self__.f,self__.blockable,meta25371__$1));
});

cljs.core.async.t_cljs$core$async25370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25372){
var self__ = this;
var _25372__$1 = this;
return self__.meta25371;
});

cljs.core.async.t_cljs$core$async25370.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25370.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25370.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25370.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25371","meta25371",1127910191,null)], null);
});

cljs.core.async.t_cljs$core$async25370.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25370";

cljs.core.async.t_cljs$core$async25370.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25370");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25370.
 */
cljs.core.async.__GT_t_cljs$core$async25370 = (function cljs$core$async$__GT_t_cljs$core$async25370(f__$1,blockable__$1,meta25371){
return (new cljs.core.async.t_cljs$core$async25370(f__$1,blockable__$1,meta25371));
});

}

return (new cljs.core.async.t_cljs$core$async25370(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__25376 = arguments.length;
switch (G__25376) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__25379 = arguments.length;
switch (G__25379) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__25382 = arguments.length;
switch (G__25382) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25384 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25384);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25384,ret){
return (function (){
return fn1.call(null,val_25384);
});})(val_25384,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__25386 = arguments.length;
switch (G__25386) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___25388 = n;
var x_25389 = (0);
while(true){
if((x_25389 < n__4376__auto___25388)){
(a[x_25389] = (0));

var G__25390 = (x_25389 + (1));
x_25389 = G__25390;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25391 = (i + (1));
i = G__25391;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25392 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25392 = (function (flag,meta25393){
this.flag = flag;
this.meta25393 = meta25393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25394,meta25393__$1){
var self__ = this;
var _25394__$1 = this;
return (new cljs.core.async.t_cljs$core$async25392(self__.flag,meta25393__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25392.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25394){
var self__ = this;
var _25394__$1 = this;
return self__.meta25393;
});})(flag))
;

cljs.core.async.t_cljs$core$async25392.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25392.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25392.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25392.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25392.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25393","meta25393",358532322,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25392.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25392";

cljs.core.async.t_cljs$core$async25392.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25392");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25392.
 */
cljs.core.async.__GT_t_cljs$core$async25392 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25392(flag__$1,meta25393){
return (new cljs.core.async.t_cljs$core$async25392(flag__$1,meta25393));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25392(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25395 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25395 = (function (flag,cb,meta25396){
this.flag = flag;
this.cb = cb;
this.meta25396 = meta25396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25397,meta25396__$1){
var self__ = this;
var _25397__$1 = this;
return (new cljs.core.async.t_cljs$core$async25395(self__.flag,self__.cb,meta25396__$1));
});

cljs.core.async.t_cljs$core$async25395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25397){
var self__ = this;
var _25397__$1 = this;
return self__.meta25396;
});

cljs.core.async.t_cljs$core$async25395.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25395.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25395.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25395.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25396","meta25396",-927522341,null)], null);
});

cljs.core.async.t_cljs$core$async25395.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25395";

cljs.core.async.t_cljs$core$async25395.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25395");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25395.
 */
cljs.core.async.__GT_t_cljs$core$async25395 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25395(flag__$1,cb__$1,meta25396){
return (new cljs.core.async.t_cljs$core$async25395(flag__$1,cb__$1,meta25396));
});

}

return (new cljs.core.async.t_cljs$core$async25395(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25398_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25398_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25399_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25399_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25400 = (i + (1));
i = G__25400;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25406 = arguments.length;
var i__4500__auto___25407 = (0);
while(true){
if((i__4500__auto___25407 < len__4499__auto___25406)){
args__4502__auto__.push((arguments[i__4500__auto___25407]));

var G__25408 = (i__4500__auto___25407 + (1));
i__4500__auto___25407 = G__25408;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25403){
var map__25404 = p__25403;
var map__25404__$1 = ((((!((map__25404 == null)))?(((((map__25404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25404):map__25404);
var opts = map__25404__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25401){
var G__25402 = cljs.core.first.call(null,seq25401);
var seq25401__$1 = cljs.core.next.call(null,seq25401);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25402,seq25401__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__25410 = arguments.length;
switch (G__25410) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25309__auto___25456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto___25456){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto___25456){
return (function (state_25434){
var state_val_25435 = (state_25434[(1)]);
if((state_val_25435 === (7))){
var inst_25430 = (state_25434[(2)]);
var state_25434__$1 = state_25434;
var statearr_25436_25457 = state_25434__$1;
(statearr_25436_25457[(2)] = inst_25430);

(statearr_25436_25457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (1))){
var state_25434__$1 = state_25434;
var statearr_25437_25458 = state_25434__$1;
(statearr_25437_25458[(2)] = null);

(statearr_25437_25458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (4))){
var inst_25413 = (state_25434[(7)]);
var inst_25413__$1 = (state_25434[(2)]);
var inst_25414 = (inst_25413__$1 == null);
var state_25434__$1 = (function (){var statearr_25438 = state_25434;
(statearr_25438[(7)] = inst_25413__$1);

return statearr_25438;
})();
if(cljs.core.truth_(inst_25414)){
var statearr_25439_25459 = state_25434__$1;
(statearr_25439_25459[(1)] = (5));

} else {
var statearr_25440_25460 = state_25434__$1;
(statearr_25440_25460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (13))){
var state_25434__$1 = state_25434;
var statearr_25441_25461 = state_25434__$1;
(statearr_25441_25461[(2)] = null);

(statearr_25441_25461[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (6))){
var inst_25413 = (state_25434[(7)]);
var state_25434__$1 = state_25434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25434__$1,(11),to,inst_25413);
} else {
if((state_val_25435 === (3))){
var inst_25432 = (state_25434[(2)]);
var state_25434__$1 = state_25434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25434__$1,inst_25432);
} else {
if((state_val_25435 === (12))){
var state_25434__$1 = state_25434;
var statearr_25442_25462 = state_25434__$1;
(statearr_25442_25462[(2)] = null);

(statearr_25442_25462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (2))){
var state_25434__$1 = state_25434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25434__$1,(4),from);
} else {
if((state_val_25435 === (11))){
var inst_25423 = (state_25434[(2)]);
var state_25434__$1 = state_25434;
if(cljs.core.truth_(inst_25423)){
var statearr_25443_25463 = state_25434__$1;
(statearr_25443_25463[(1)] = (12));

} else {
var statearr_25444_25464 = state_25434__$1;
(statearr_25444_25464[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (9))){
var state_25434__$1 = state_25434;
var statearr_25445_25465 = state_25434__$1;
(statearr_25445_25465[(2)] = null);

(statearr_25445_25465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (5))){
var state_25434__$1 = state_25434;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25446_25466 = state_25434__$1;
(statearr_25446_25466[(1)] = (8));

} else {
var statearr_25447_25467 = state_25434__$1;
(statearr_25447_25467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (14))){
var inst_25428 = (state_25434[(2)]);
var state_25434__$1 = state_25434;
var statearr_25448_25468 = state_25434__$1;
(statearr_25448_25468[(2)] = inst_25428);

(statearr_25448_25468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (10))){
var inst_25420 = (state_25434[(2)]);
var state_25434__$1 = state_25434;
var statearr_25449_25469 = state_25434__$1;
(statearr_25449_25469[(2)] = inst_25420);

(statearr_25449_25469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (8))){
var inst_25417 = cljs.core.async.close_BANG_.call(null,to);
var state_25434__$1 = state_25434;
var statearr_25450_25470 = state_25434__$1;
(statearr_25450_25470[(2)] = inst_25417);

(statearr_25450_25470[(1)] = (10));


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
});})(c__25309__auto___25456))
;
return ((function (switch__25219__auto__,c__25309__auto___25456){
return (function() {
var cljs$core$async$state_machine__25220__auto__ = null;
var cljs$core$async$state_machine__25220__auto____0 = (function (){
var statearr_25451 = [null,null,null,null,null,null,null,null];
(statearr_25451[(0)] = cljs$core$async$state_machine__25220__auto__);

(statearr_25451[(1)] = (1));

return statearr_25451;
});
var cljs$core$async$state_machine__25220__auto____1 = (function (state_25434){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_25434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e25452){if((e25452 instanceof Object)){
var ex__25223__auto__ = e25452;
var statearr_25453_25471 = state_25434;
(statearr_25453_25471[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25472 = state_25434;
state_25434 = G__25472;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$state_machine__25220__auto__ = function(state_25434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25220__auto____1.call(this,state_25434);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25220__auto____0;
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25220__auto____1;
return cljs$core$async$state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto___25456))
})();
var state__25311__auto__ = (function (){var statearr_25454 = f__25310__auto__.call(null);
(statearr_25454[(6)] = c__25309__auto___25456);

return statearr_25454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto___25456))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25473){
var vec__25474 = p__25473;
var v = cljs.core.nth.call(null,vec__25474,(0),null);
var p = cljs.core.nth.call(null,vec__25474,(1),null);
var job = vec__25474;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25309__auto___25645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto___25645,res,vec__25474,v,p,job,jobs,results){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto___25645,res,vec__25474,v,p,job,jobs,results){
return (function (state_25481){
var state_val_25482 = (state_25481[(1)]);
if((state_val_25482 === (1))){
var state_25481__$1 = state_25481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25481__$1,(2),res,v);
} else {
if((state_val_25482 === (2))){
var inst_25478 = (state_25481[(2)]);
var inst_25479 = cljs.core.async.close_BANG_.call(null,res);
var state_25481__$1 = (function (){var statearr_25483 = state_25481;
(statearr_25483[(7)] = inst_25478);

return statearr_25483;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25481__$1,inst_25479);
} else {
return null;
}
}
});})(c__25309__auto___25645,res,vec__25474,v,p,job,jobs,results))
;
return ((function (switch__25219__auto__,c__25309__auto___25645,res,vec__25474,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____0 = (function (){
var statearr_25484 = [null,null,null,null,null,null,null,null];
(statearr_25484[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__);

(statearr_25484[(1)] = (1));

return statearr_25484;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____1 = (function (state_25481){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_25481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e25485){if((e25485 instanceof Object)){
var ex__25223__auto__ = e25485;
var statearr_25486_25646 = state_25481;
(statearr_25486_25646[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25647 = state_25481;
state_25481 = G__25647;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__ = function(state_25481){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____1.call(this,state_25481);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto___25645,res,vec__25474,v,p,job,jobs,results))
})();
var state__25311__auto__ = (function (){var statearr_25487 = f__25310__auto__.call(null);
(statearr_25487[(6)] = c__25309__auto___25645);

return statearr_25487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto___25645,res,vec__25474,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25488){
var vec__25489 = p__25488;
var v = cljs.core.nth.call(null,vec__25489,(0),null);
var p = cljs.core.nth.call(null,vec__25489,(1),null);
var job = vec__25489;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___25648 = n;
var __25649 = (0);
while(true){
if((__25649 < n__4376__auto___25648)){
var G__25492_25650 = type;
var G__25492_25651__$1 = (((G__25492_25650 instanceof cljs.core.Keyword))?G__25492_25650.fqn:null);
switch (G__25492_25651__$1) {
case "compute":
var c__25309__auto___25653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25649,c__25309__auto___25653,G__25492_25650,G__25492_25651__$1,n__4376__auto___25648,jobs,results,process,async){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (__25649,c__25309__auto___25653,G__25492_25650,G__25492_25651__$1,n__4376__auto___25648,jobs,results,process,async){
return (function (state_25505){
var state_val_25506 = (state_25505[(1)]);
if((state_val_25506 === (1))){
var state_25505__$1 = state_25505;
var statearr_25507_25654 = state_25505__$1;
(statearr_25507_25654[(2)] = null);

(statearr_25507_25654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (2))){
var state_25505__$1 = state_25505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25505__$1,(4),jobs);
} else {
if((state_val_25506 === (3))){
var inst_25503 = (state_25505[(2)]);
var state_25505__$1 = state_25505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25505__$1,inst_25503);
} else {
if((state_val_25506 === (4))){
var inst_25495 = (state_25505[(2)]);
var inst_25496 = process.call(null,inst_25495);
var state_25505__$1 = state_25505;
if(cljs.core.truth_(inst_25496)){
var statearr_25508_25655 = state_25505__$1;
(statearr_25508_25655[(1)] = (5));

} else {
var statearr_25509_25656 = state_25505__$1;
(statearr_25509_25656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (5))){
var state_25505__$1 = state_25505;
var statearr_25510_25657 = state_25505__$1;
(statearr_25510_25657[(2)] = null);

(statearr_25510_25657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (6))){
var state_25505__$1 = state_25505;
var statearr_25511_25658 = state_25505__$1;
(statearr_25511_25658[(2)] = null);

(statearr_25511_25658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (7))){
var inst_25501 = (state_25505[(2)]);
var state_25505__$1 = state_25505;
var statearr_25512_25659 = state_25505__$1;
(statearr_25512_25659[(2)] = inst_25501);

(statearr_25512_25659[(1)] = (3));


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
});})(__25649,c__25309__auto___25653,G__25492_25650,G__25492_25651__$1,n__4376__auto___25648,jobs,results,process,async))
;
return ((function (__25649,switch__25219__auto__,c__25309__auto___25653,G__25492_25650,G__25492_25651__$1,n__4376__auto___25648,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____0 = (function (){
var statearr_25513 = [null,null,null,null,null,null,null];
(statearr_25513[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__);

(statearr_25513[(1)] = (1));

return statearr_25513;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____1 = (function (state_25505){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_25505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e25514){if((e25514 instanceof Object)){
var ex__25223__auto__ = e25514;
var statearr_25515_25660 = state_25505;
(statearr_25515_25660[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25661 = state_25505;
state_25505 = G__25661;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__ = function(state_25505){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____1.call(this,state_25505);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__;
})()
;})(__25649,switch__25219__auto__,c__25309__auto___25653,G__25492_25650,G__25492_25651__$1,n__4376__auto___25648,jobs,results,process,async))
})();
var state__25311__auto__ = (function (){var statearr_25516 = f__25310__auto__.call(null);
(statearr_25516[(6)] = c__25309__auto___25653);

return statearr_25516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(__25649,c__25309__auto___25653,G__25492_25650,G__25492_25651__$1,n__4376__auto___25648,jobs,results,process,async))
);


break;
case "async":
var c__25309__auto___25662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25649,c__25309__auto___25662,G__25492_25650,G__25492_25651__$1,n__4376__auto___25648,jobs,results,process,async){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (__25649,c__25309__auto___25662,G__25492_25650,G__25492_25651__$1,n__4376__auto___25648,jobs,results,process,async){
return (function (state_25529){
var state_val_25530 = (state_25529[(1)]);
if((state_val_25530 === (1))){
var state_25529__$1 = state_25529;
var statearr_25531_25663 = state_25529__$1;
(statearr_25531_25663[(2)] = null);

(statearr_25531_25663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (2))){
var state_25529__$1 = state_25529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25529__$1,(4),jobs);
} else {
if((state_val_25530 === (3))){
var inst_25527 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25529__$1,inst_25527);
} else {
if((state_val_25530 === (4))){
var inst_25519 = (state_25529[(2)]);
var inst_25520 = async.call(null,inst_25519);
var state_25529__$1 = state_25529;
if(cljs.core.truth_(inst_25520)){
var statearr_25532_25664 = state_25529__$1;
(statearr_25532_25664[(1)] = (5));

} else {
var statearr_25533_25665 = state_25529__$1;
(statearr_25533_25665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (5))){
var state_25529__$1 = state_25529;
var statearr_25534_25666 = state_25529__$1;
(statearr_25534_25666[(2)] = null);

(statearr_25534_25666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (6))){
var state_25529__$1 = state_25529;
var statearr_25535_25667 = state_25529__$1;
(statearr_25535_25667[(2)] = null);

(statearr_25535_25667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (7))){
var inst_25525 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
var statearr_25536_25668 = state_25529__$1;
(statearr_25536_25668[(2)] = inst_25525);

(statearr_25536_25668[(1)] = (3));


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
});})(__25649,c__25309__auto___25662,G__25492_25650,G__25492_25651__$1,n__4376__auto___25648,jobs,results,process,async))
;
return ((function (__25649,switch__25219__auto__,c__25309__auto___25662,G__25492_25650,G__25492_25651__$1,n__4376__auto___25648,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____0 = (function (){
var statearr_25537 = [null,null,null,null,null,null,null];
(statearr_25537[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__);

(statearr_25537[(1)] = (1));

return statearr_25537;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____1 = (function (state_25529){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_25529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e25538){if((e25538 instanceof Object)){
var ex__25223__auto__ = e25538;
var statearr_25539_25669 = state_25529;
(statearr_25539_25669[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25670 = state_25529;
state_25529 = G__25670;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__ = function(state_25529){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____1.call(this,state_25529);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__;
})()
;})(__25649,switch__25219__auto__,c__25309__auto___25662,G__25492_25650,G__25492_25651__$1,n__4376__auto___25648,jobs,results,process,async))
})();
var state__25311__auto__ = (function (){var statearr_25540 = f__25310__auto__.call(null);
(statearr_25540[(6)] = c__25309__auto___25662);

return statearr_25540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(__25649,c__25309__auto___25662,G__25492_25650,G__25492_25651__$1,n__4376__auto___25648,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25492_25651__$1)].join('')));

}

var G__25671 = (__25649 + (1));
__25649 = G__25671;
continue;
} else {
}
break;
}

var c__25309__auto___25672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto___25672,jobs,results,process,async){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto___25672,jobs,results,process,async){
return (function (state_25562){
var state_val_25563 = (state_25562[(1)]);
if((state_val_25563 === (1))){
var state_25562__$1 = state_25562;
var statearr_25564_25673 = state_25562__$1;
(statearr_25564_25673[(2)] = null);

(statearr_25564_25673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (2))){
var state_25562__$1 = state_25562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25562__$1,(4),from);
} else {
if((state_val_25563 === (3))){
var inst_25560 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25562__$1,inst_25560);
} else {
if((state_val_25563 === (4))){
var inst_25543 = (state_25562[(7)]);
var inst_25543__$1 = (state_25562[(2)]);
var inst_25544 = (inst_25543__$1 == null);
var state_25562__$1 = (function (){var statearr_25565 = state_25562;
(statearr_25565[(7)] = inst_25543__$1);

return statearr_25565;
})();
if(cljs.core.truth_(inst_25544)){
var statearr_25566_25674 = state_25562__$1;
(statearr_25566_25674[(1)] = (5));

} else {
var statearr_25567_25675 = state_25562__$1;
(statearr_25567_25675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (5))){
var inst_25546 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25562__$1 = state_25562;
var statearr_25568_25676 = state_25562__$1;
(statearr_25568_25676[(2)] = inst_25546);

(statearr_25568_25676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (6))){
var inst_25543 = (state_25562[(7)]);
var inst_25548 = (state_25562[(8)]);
var inst_25548__$1 = cljs.core.async.chan.call(null,(1));
var inst_25549 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25550 = [inst_25543,inst_25548__$1];
var inst_25551 = (new cljs.core.PersistentVector(null,2,(5),inst_25549,inst_25550,null));
var state_25562__$1 = (function (){var statearr_25569 = state_25562;
(statearr_25569[(8)] = inst_25548__$1);

return statearr_25569;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25562__$1,(8),jobs,inst_25551);
} else {
if((state_val_25563 === (7))){
var inst_25558 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
var statearr_25570_25677 = state_25562__$1;
(statearr_25570_25677[(2)] = inst_25558);

(statearr_25570_25677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (8))){
var inst_25548 = (state_25562[(8)]);
var inst_25553 = (state_25562[(2)]);
var state_25562__$1 = (function (){var statearr_25571 = state_25562;
(statearr_25571[(9)] = inst_25553);

return statearr_25571;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25562__$1,(9),results,inst_25548);
} else {
if((state_val_25563 === (9))){
var inst_25555 = (state_25562[(2)]);
var state_25562__$1 = (function (){var statearr_25572 = state_25562;
(statearr_25572[(10)] = inst_25555);

return statearr_25572;
})();
var statearr_25573_25678 = state_25562__$1;
(statearr_25573_25678[(2)] = null);

(statearr_25573_25678[(1)] = (2));


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
});})(c__25309__auto___25672,jobs,results,process,async))
;
return ((function (switch__25219__auto__,c__25309__auto___25672,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____0 = (function (){
var statearr_25574 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25574[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__);

(statearr_25574[(1)] = (1));

return statearr_25574;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____1 = (function (state_25562){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_25562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e25575){if((e25575 instanceof Object)){
var ex__25223__auto__ = e25575;
var statearr_25576_25679 = state_25562;
(statearr_25576_25679[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25680 = state_25562;
state_25562 = G__25680;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__ = function(state_25562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____1.call(this,state_25562);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto___25672,jobs,results,process,async))
})();
var state__25311__auto__ = (function (){var statearr_25577 = f__25310__auto__.call(null);
(statearr_25577[(6)] = c__25309__auto___25672);

return statearr_25577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto___25672,jobs,results,process,async))
);


var c__25309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto__,jobs,results,process,async){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto__,jobs,results,process,async){
return (function (state_25615){
var state_val_25616 = (state_25615[(1)]);
if((state_val_25616 === (7))){
var inst_25611 = (state_25615[(2)]);
var state_25615__$1 = state_25615;
var statearr_25617_25681 = state_25615__$1;
(statearr_25617_25681[(2)] = inst_25611);

(statearr_25617_25681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25616 === (20))){
var state_25615__$1 = state_25615;
var statearr_25618_25682 = state_25615__$1;
(statearr_25618_25682[(2)] = null);

(statearr_25618_25682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25616 === (1))){
var state_25615__$1 = state_25615;
var statearr_25619_25683 = state_25615__$1;
(statearr_25619_25683[(2)] = null);

(statearr_25619_25683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25616 === (4))){
var inst_25580 = (state_25615[(7)]);
var inst_25580__$1 = (state_25615[(2)]);
var inst_25581 = (inst_25580__$1 == null);
var state_25615__$1 = (function (){var statearr_25620 = state_25615;
(statearr_25620[(7)] = inst_25580__$1);

return statearr_25620;
})();
if(cljs.core.truth_(inst_25581)){
var statearr_25621_25684 = state_25615__$1;
(statearr_25621_25684[(1)] = (5));

} else {
var statearr_25622_25685 = state_25615__$1;
(statearr_25622_25685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25616 === (15))){
var inst_25593 = (state_25615[(8)]);
var state_25615__$1 = state_25615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25615__$1,(18),to,inst_25593);
} else {
if((state_val_25616 === (21))){
var inst_25606 = (state_25615[(2)]);
var state_25615__$1 = state_25615;
var statearr_25623_25686 = state_25615__$1;
(statearr_25623_25686[(2)] = inst_25606);

(statearr_25623_25686[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25616 === (13))){
var inst_25608 = (state_25615[(2)]);
var state_25615__$1 = (function (){var statearr_25624 = state_25615;
(statearr_25624[(9)] = inst_25608);

return statearr_25624;
})();
var statearr_25625_25687 = state_25615__$1;
(statearr_25625_25687[(2)] = null);

(statearr_25625_25687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25616 === (6))){
var inst_25580 = (state_25615[(7)]);
var state_25615__$1 = state_25615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25615__$1,(11),inst_25580);
} else {
if((state_val_25616 === (17))){
var inst_25601 = (state_25615[(2)]);
var state_25615__$1 = state_25615;
if(cljs.core.truth_(inst_25601)){
var statearr_25626_25688 = state_25615__$1;
(statearr_25626_25688[(1)] = (19));

} else {
var statearr_25627_25689 = state_25615__$1;
(statearr_25627_25689[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25616 === (3))){
var inst_25613 = (state_25615[(2)]);
var state_25615__$1 = state_25615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25615__$1,inst_25613);
} else {
if((state_val_25616 === (12))){
var inst_25590 = (state_25615[(10)]);
var state_25615__$1 = state_25615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25615__$1,(14),inst_25590);
} else {
if((state_val_25616 === (2))){
var state_25615__$1 = state_25615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25615__$1,(4),results);
} else {
if((state_val_25616 === (19))){
var state_25615__$1 = state_25615;
var statearr_25628_25690 = state_25615__$1;
(statearr_25628_25690[(2)] = null);

(statearr_25628_25690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25616 === (11))){
var inst_25590 = (state_25615[(2)]);
var state_25615__$1 = (function (){var statearr_25629 = state_25615;
(statearr_25629[(10)] = inst_25590);

return statearr_25629;
})();
var statearr_25630_25691 = state_25615__$1;
(statearr_25630_25691[(2)] = null);

(statearr_25630_25691[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25616 === (9))){
var state_25615__$1 = state_25615;
var statearr_25631_25692 = state_25615__$1;
(statearr_25631_25692[(2)] = null);

(statearr_25631_25692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25616 === (5))){
var state_25615__$1 = state_25615;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25632_25693 = state_25615__$1;
(statearr_25632_25693[(1)] = (8));

} else {
var statearr_25633_25694 = state_25615__$1;
(statearr_25633_25694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25616 === (14))){
var inst_25595 = (state_25615[(11)]);
var inst_25593 = (state_25615[(8)]);
var inst_25593__$1 = (state_25615[(2)]);
var inst_25594 = (inst_25593__$1 == null);
var inst_25595__$1 = cljs.core.not.call(null,inst_25594);
var state_25615__$1 = (function (){var statearr_25634 = state_25615;
(statearr_25634[(11)] = inst_25595__$1);

(statearr_25634[(8)] = inst_25593__$1);

return statearr_25634;
})();
if(inst_25595__$1){
var statearr_25635_25695 = state_25615__$1;
(statearr_25635_25695[(1)] = (15));

} else {
var statearr_25636_25696 = state_25615__$1;
(statearr_25636_25696[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25616 === (16))){
var inst_25595 = (state_25615[(11)]);
var state_25615__$1 = state_25615;
var statearr_25637_25697 = state_25615__$1;
(statearr_25637_25697[(2)] = inst_25595);

(statearr_25637_25697[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25616 === (10))){
var inst_25587 = (state_25615[(2)]);
var state_25615__$1 = state_25615;
var statearr_25638_25698 = state_25615__$1;
(statearr_25638_25698[(2)] = inst_25587);

(statearr_25638_25698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25616 === (18))){
var inst_25598 = (state_25615[(2)]);
var state_25615__$1 = state_25615;
var statearr_25639_25699 = state_25615__$1;
(statearr_25639_25699[(2)] = inst_25598);

(statearr_25639_25699[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25616 === (8))){
var inst_25584 = cljs.core.async.close_BANG_.call(null,to);
var state_25615__$1 = state_25615;
var statearr_25640_25700 = state_25615__$1;
(statearr_25640_25700[(2)] = inst_25584);

(statearr_25640_25700[(1)] = (10));


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
});})(c__25309__auto__,jobs,results,process,async))
;
return ((function (switch__25219__auto__,c__25309__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____0 = (function (){
var statearr_25641 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__);

(statearr_25641[(1)] = (1));

return statearr_25641;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____1 = (function (state_25615){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_25615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e25642){if((e25642 instanceof Object)){
var ex__25223__auto__ = e25642;
var statearr_25643_25701 = state_25615;
(statearr_25643_25701[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25702 = state_25615;
state_25615 = G__25702;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__ = function(state_25615){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____1.call(this,state_25615);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto__,jobs,results,process,async))
})();
var state__25311__auto__ = (function (){var statearr_25644 = f__25310__auto__.call(null);
(statearr_25644[(6)] = c__25309__auto__);

return statearr_25644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto__,jobs,results,process,async))
);

return c__25309__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__25704 = arguments.length;
switch (G__25704) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__25707 = arguments.length;
switch (G__25707) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__25710 = arguments.length;
switch (G__25710) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25309__auto___25759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto___25759,tc,fc){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto___25759,tc,fc){
return (function (state_25736){
var state_val_25737 = (state_25736[(1)]);
if((state_val_25737 === (7))){
var inst_25732 = (state_25736[(2)]);
var state_25736__$1 = state_25736;
var statearr_25738_25760 = state_25736__$1;
(statearr_25738_25760[(2)] = inst_25732);

(statearr_25738_25760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (1))){
var state_25736__$1 = state_25736;
var statearr_25739_25761 = state_25736__$1;
(statearr_25739_25761[(2)] = null);

(statearr_25739_25761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (4))){
var inst_25713 = (state_25736[(7)]);
var inst_25713__$1 = (state_25736[(2)]);
var inst_25714 = (inst_25713__$1 == null);
var state_25736__$1 = (function (){var statearr_25740 = state_25736;
(statearr_25740[(7)] = inst_25713__$1);

return statearr_25740;
})();
if(cljs.core.truth_(inst_25714)){
var statearr_25741_25762 = state_25736__$1;
(statearr_25741_25762[(1)] = (5));

} else {
var statearr_25742_25763 = state_25736__$1;
(statearr_25742_25763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (13))){
var state_25736__$1 = state_25736;
var statearr_25743_25764 = state_25736__$1;
(statearr_25743_25764[(2)] = null);

(statearr_25743_25764[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (6))){
var inst_25713 = (state_25736[(7)]);
var inst_25719 = p.call(null,inst_25713);
var state_25736__$1 = state_25736;
if(cljs.core.truth_(inst_25719)){
var statearr_25744_25765 = state_25736__$1;
(statearr_25744_25765[(1)] = (9));

} else {
var statearr_25745_25766 = state_25736__$1;
(statearr_25745_25766[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (3))){
var inst_25734 = (state_25736[(2)]);
var state_25736__$1 = state_25736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25736__$1,inst_25734);
} else {
if((state_val_25737 === (12))){
var state_25736__$1 = state_25736;
var statearr_25746_25767 = state_25736__$1;
(statearr_25746_25767[(2)] = null);

(statearr_25746_25767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (2))){
var state_25736__$1 = state_25736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25736__$1,(4),ch);
} else {
if((state_val_25737 === (11))){
var inst_25713 = (state_25736[(7)]);
var inst_25723 = (state_25736[(2)]);
var state_25736__$1 = state_25736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25736__$1,(8),inst_25723,inst_25713);
} else {
if((state_val_25737 === (9))){
var state_25736__$1 = state_25736;
var statearr_25747_25768 = state_25736__$1;
(statearr_25747_25768[(2)] = tc);

(statearr_25747_25768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (5))){
var inst_25716 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25717 = cljs.core.async.close_BANG_.call(null,fc);
var state_25736__$1 = (function (){var statearr_25748 = state_25736;
(statearr_25748[(8)] = inst_25716);

return statearr_25748;
})();
var statearr_25749_25769 = state_25736__$1;
(statearr_25749_25769[(2)] = inst_25717);

(statearr_25749_25769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (14))){
var inst_25730 = (state_25736[(2)]);
var state_25736__$1 = state_25736;
var statearr_25750_25770 = state_25736__$1;
(statearr_25750_25770[(2)] = inst_25730);

(statearr_25750_25770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (10))){
var state_25736__$1 = state_25736;
var statearr_25751_25771 = state_25736__$1;
(statearr_25751_25771[(2)] = fc);

(statearr_25751_25771[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (8))){
var inst_25725 = (state_25736[(2)]);
var state_25736__$1 = state_25736;
if(cljs.core.truth_(inst_25725)){
var statearr_25752_25772 = state_25736__$1;
(statearr_25752_25772[(1)] = (12));

} else {
var statearr_25753_25773 = state_25736__$1;
(statearr_25753_25773[(1)] = (13));

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
});})(c__25309__auto___25759,tc,fc))
;
return ((function (switch__25219__auto__,c__25309__auto___25759,tc,fc){
return (function() {
var cljs$core$async$state_machine__25220__auto__ = null;
var cljs$core$async$state_machine__25220__auto____0 = (function (){
var statearr_25754 = [null,null,null,null,null,null,null,null,null];
(statearr_25754[(0)] = cljs$core$async$state_machine__25220__auto__);

(statearr_25754[(1)] = (1));

return statearr_25754;
});
var cljs$core$async$state_machine__25220__auto____1 = (function (state_25736){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_25736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e25755){if((e25755 instanceof Object)){
var ex__25223__auto__ = e25755;
var statearr_25756_25774 = state_25736;
(statearr_25756_25774[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25775 = state_25736;
state_25736 = G__25775;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$state_machine__25220__auto__ = function(state_25736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25220__auto____1.call(this,state_25736);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25220__auto____0;
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25220__auto____1;
return cljs$core$async$state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto___25759,tc,fc))
})();
var state__25311__auto__ = (function (){var statearr_25757 = f__25310__auto__.call(null);
(statearr_25757[(6)] = c__25309__auto___25759);

return statearr_25757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto___25759,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto__){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto__){
return (function (state_25796){
var state_val_25797 = (state_25796[(1)]);
if((state_val_25797 === (7))){
var inst_25792 = (state_25796[(2)]);
var state_25796__$1 = state_25796;
var statearr_25798_25816 = state_25796__$1;
(statearr_25798_25816[(2)] = inst_25792);

(statearr_25798_25816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (1))){
var inst_25776 = init;
var state_25796__$1 = (function (){var statearr_25799 = state_25796;
(statearr_25799[(7)] = inst_25776);

return statearr_25799;
})();
var statearr_25800_25817 = state_25796__$1;
(statearr_25800_25817[(2)] = null);

(statearr_25800_25817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (4))){
var inst_25779 = (state_25796[(8)]);
var inst_25779__$1 = (state_25796[(2)]);
var inst_25780 = (inst_25779__$1 == null);
var state_25796__$1 = (function (){var statearr_25801 = state_25796;
(statearr_25801[(8)] = inst_25779__$1);

return statearr_25801;
})();
if(cljs.core.truth_(inst_25780)){
var statearr_25802_25818 = state_25796__$1;
(statearr_25802_25818[(1)] = (5));

} else {
var statearr_25803_25819 = state_25796__$1;
(statearr_25803_25819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (6))){
var inst_25783 = (state_25796[(9)]);
var inst_25776 = (state_25796[(7)]);
var inst_25779 = (state_25796[(8)]);
var inst_25783__$1 = f.call(null,inst_25776,inst_25779);
var inst_25784 = cljs.core.reduced_QMARK_.call(null,inst_25783__$1);
var state_25796__$1 = (function (){var statearr_25804 = state_25796;
(statearr_25804[(9)] = inst_25783__$1);

return statearr_25804;
})();
if(inst_25784){
var statearr_25805_25820 = state_25796__$1;
(statearr_25805_25820[(1)] = (8));

} else {
var statearr_25806_25821 = state_25796__$1;
(statearr_25806_25821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (3))){
var inst_25794 = (state_25796[(2)]);
var state_25796__$1 = state_25796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25796__$1,inst_25794);
} else {
if((state_val_25797 === (2))){
var state_25796__$1 = state_25796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25796__$1,(4),ch);
} else {
if((state_val_25797 === (9))){
var inst_25783 = (state_25796[(9)]);
var inst_25776 = inst_25783;
var state_25796__$1 = (function (){var statearr_25807 = state_25796;
(statearr_25807[(7)] = inst_25776);

return statearr_25807;
})();
var statearr_25808_25822 = state_25796__$1;
(statearr_25808_25822[(2)] = null);

(statearr_25808_25822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (5))){
var inst_25776 = (state_25796[(7)]);
var state_25796__$1 = state_25796;
var statearr_25809_25823 = state_25796__$1;
(statearr_25809_25823[(2)] = inst_25776);

(statearr_25809_25823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (10))){
var inst_25790 = (state_25796[(2)]);
var state_25796__$1 = state_25796;
var statearr_25810_25824 = state_25796__$1;
(statearr_25810_25824[(2)] = inst_25790);

(statearr_25810_25824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (8))){
var inst_25783 = (state_25796[(9)]);
var inst_25786 = cljs.core.deref.call(null,inst_25783);
var state_25796__$1 = state_25796;
var statearr_25811_25825 = state_25796__$1;
(statearr_25811_25825[(2)] = inst_25786);

(statearr_25811_25825[(1)] = (10));


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
});})(c__25309__auto__))
;
return ((function (switch__25219__auto__,c__25309__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25220__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25220__auto____0 = (function (){
var statearr_25812 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25812[(0)] = cljs$core$async$reduce_$_state_machine__25220__auto__);

(statearr_25812[(1)] = (1));

return statearr_25812;
});
var cljs$core$async$reduce_$_state_machine__25220__auto____1 = (function (state_25796){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_25796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e25813){if((e25813 instanceof Object)){
var ex__25223__auto__ = e25813;
var statearr_25814_25826 = state_25796;
(statearr_25814_25826[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25827 = state_25796;
state_25796 = G__25827;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25220__auto__ = function(state_25796){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25220__auto____1.call(this,state_25796);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25220__auto____0;
cljs$core$async$reduce_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25220__auto____1;
return cljs$core$async$reduce_$_state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto__))
})();
var state__25311__auto__ = (function (){var statearr_25815 = f__25310__auto__.call(null);
(statearr_25815[(6)] = c__25309__auto__);

return statearr_25815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto__))
);

return c__25309__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto__,f__$1){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto__,f__$1){
return (function (state_25833){
var state_val_25834 = (state_25833[(1)]);
if((state_val_25834 === (1))){
var inst_25828 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25833__$1 = state_25833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25833__$1,(2),inst_25828);
} else {
if((state_val_25834 === (2))){
var inst_25830 = (state_25833[(2)]);
var inst_25831 = f__$1.call(null,inst_25830);
var state_25833__$1 = state_25833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25833__$1,inst_25831);
} else {
return null;
}
}
});})(c__25309__auto__,f__$1))
;
return ((function (switch__25219__auto__,c__25309__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25220__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25220__auto____0 = (function (){
var statearr_25835 = [null,null,null,null,null,null,null];
(statearr_25835[(0)] = cljs$core$async$transduce_$_state_machine__25220__auto__);

(statearr_25835[(1)] = (1));

return statearr_25835;
});
var cljs$core$async$transduce_$_state_machine__25220__auto____1 = (function (state_25833){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_25833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e25836){if((e25836 instanceof Object)){
var ex__25223__auto__ = e25836;
var statearr_25837_25839 = state_25833;
(statearr_25837_25839[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25840 = state_25833;
state_25833 = G__25840;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25220__auto__ = function(state_25833){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25220__auto____1.call(this,state_25833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25220__auto____0;
cljs$core$async$transduce_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25220__auto____1;
return cljs$core$async$transduce_$_state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto__,f__$1))
})();
var state__25311__auto__ = (function (){var statearr_25838 = f__25310__auto__.call(null);
(statearr_25838[(6)] = c__25309__auto__);

return statearr_25838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto__,f__$1))
);

return c__25309__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25842 = arguments.length;
switch (G__25842) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto__){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto__){
return (function (state_25867){
var state_val_25868 = (state_25867[(1)]);
if((state_val_25868 === (7))){
var inst_25849 = (state_25867[(2)]);
var state_25867__$1 = state_25867;
var statearr_25869_25890 = state_25867__$1;
(statearr_25869_25890[(2)] = inst_25849);

(statearr_25869_25890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (1))){
var inst_25843 = cljs.core.seq.call(null,coll);
var inst_25844 = inst_25843;
var state_25867__$1 = (function (){var statearr_25870 = state_25867;
(statearr_25870[(7)] = inst_25844);

return statearr_25870;
})();
var statearr_25871_25891 = state_25867__$1;
(statearr_25871_25891[(2)] = null);

(statearr_25871_25891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (4))){
var inst_25844 = (state_25867[(7)]);
var inst_25847 = cljs.core.first.call(null,inst_25844);
var state_25867__$1 = state_25867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25867__$1,(7),ch,inst_25847);
} else {
if((state_val_25868 === (13))){
var inst_25861 = (state_25867[(2)]);
var state_25867__$1 = state_25867;
var statearr_25872_25892 = state_25867__$1;
(statearr_25872_25892[(2)] = inst_25861);

(statearr_25872_25892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (6))){
var inst_25852 = (state_25867[(2)]);
var state_25867__$1 = state_25867;
if(cljs.core.truth_(inst_25852)){
var statearr_25873_25893 = state_25867__$1;
(statearr_25873_25893[(1)] = (8));

} else {
var statearr_25874_25894 = state_25867__$1;
(statearr_25874_25894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (3))){
var inst_25865 = (state_25867[(2)]);
var state_25867__$1 = state_25867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25867__$1,inst_25865);
} else {
if((state_val_25868 === (12))){
var state_25867__$1 = state_25867;
var statearr_25875_25895 = state_25867__$1;
(statearr_25875_25895[(2)] = null);

(statearr_25875_25895[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (2))){
var inst_25844 = (state_25867[(7)]);
var state_25867__$1 = state_25867;
if(cljs.core.truth_(inst_25844)){
var statearr_25876_25896 = state_25867__$1;
(statearr_25876_25896[(1)] = (4));

} else {
var statearr_25877_25897 = state_25867__$1;
(statearr_25877_25897[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (11))){
var inst_25858 = cljs.core.async.close_BANG_.call(null,ch);
var state_25867__$1 = state_25867;
var statearr_25878_25898 = state_25867__$1;
(statearr_25878_25898[(2)] = inst_25858);

(statearr_25878_25898[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (9))){
var state_25867__$1 = state_25867;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25879_25899 = state_25867__$1;
(statearr_25879_25899[(1)] = (11));

} else {
var statearr_25880_25900 = state_25867__$1;
(statearr_25880_25900[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (5))){
var inst_25844 = (state_25867[(7)]);
var state_25867__$1 = state_25867;
var statearr_25881_25901 = state_25867__$1;
(statearr_25881_25901[(2)] = inst_25844);

(statearr_25881_25901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (10))){
var inst_25863 = (state_25867[(2)]);
var state_25867__$1 = state_25867;
var statearr_25882_25902 = state_25867__$1;
(statearr_25882_25902[(2)] = inst_25863);

(statearr_25882_25902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (8))){
var inst_25844 = (state_25867[(7)]);
var inst_25854 = cljs.core.next.call(null,inst_25844);
var inst_25844__$1 = inst_25854;
var state_25867__$1 = (function (){var statearr_25883 = state_25867;
(statearr_25883[(7)] = inst_25844__$1);

return statearr_25883;
})();
var statearr_25884_25903 = state_25867__$1;
(statearr_25884_25903[(2)] = null);

(statearr_25884_25903[(1)] = (2));


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
});})(c__25309__auto__))
;
return ((function (switch__25219__auto__,c__25309__auto__){
return (function() {
var cljs$core$async$state_machine__25220__auto__ = null;
var cljs$core$async$state_machine__25220__auto____0 = (function (){
var statearr_25885 = [null,null,null,null,null,null,null,null];
(statearr_25885[(0)] = cljs$core$async$state_machine__25220__auto__);

(statearr_25885[(1)] = (1));

return statearr_25885;
});
var cljs$core$async$state_machine__25220__auto____1 = (function (state_25867){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_25867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e25886){if((e25886 instanceof Object)){
var ex__25223__auto__ = e25886;
var statearr_25887_25904 = state_25867;
(statearr_25887_25904[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25905 = state_25867;
state_25867 = G__25905;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$state_machine__25220__auto__ = function(state_25867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25220__auto____1.call(this,state_25867);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25220__auto____0;
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25220__auto____1;
return cljs$core$async$state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto__))
})();
var state__25311__auto__ = (function (){var statearr_25888 = f__25310__auto__.call(null);
(statearr_25888[(6)] = c__25309__auto__);

return statearr_25888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto__))
);

return c__25309__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25906 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25906 = (function (ch,cs,meta25907){
this.ch = ch;
this.cs = cs;
this.meta25907 = meta25907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25908,meta25907__$1){
var self__ = this;
var _25908__$1 = this;
return (new cljs.core.async.t_cljs$core$async25906(self__.ch,self__.cs,meta25907__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25906.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25908){
var self__ = this;
var _25908__$1 = this;
return self__.meta25907;
});})(cs))
;

cljs.core.async.t_cljs$core$async25906.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25906.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25906.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25906.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25906.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25906.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25906.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25907","meta25907",1725403297,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25906.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25906";

cljs.core.async.t_cljs$core$async25906.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25906");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25906.
 */
cljs.core.async.__GT_t_cljs$core$async25906 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25906(ch__$1,cs__$1,meta25907){
return (new cljs.core.async.t_cljs$core$async25906(ch__$1,cs__$1,meta25907));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25906(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25309__auto___26128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto___26128,cs,m,dchan,dctr,done){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto___26128,cs,m,dchan,dctr,done){
return (function (state_26043){
var state_val_26044 = (state_26043[(1)]);
if((state_val_26044 === (7))){
var inst_26039 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26045_26129 = state_26043__$1;
(statearr_26045_26129[(2)] = inst_26039);

(statearr_26045_26129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (20))){
var inst_25942 = (state_26043[(7)]);
var inst_25954 = cljs.core.first.call(null,inst_25942);
var inst_25955 = cljs.core.nth.call(null,inst_25954,(0),null);
var inst_25956 = cljs.core.nth.call(null,inst_25954,(1),null);
var state_26043__$1 = (function (){var statearr_26046 = state_26043;
(statearr_26046[(8)] = inst_25955);

return statearr_26046;
})();
if(cljs.core.truth_(inst_25956)){
var statearr_26047_26130 = state_26043__$1;
(statearr_26047_26130[(1)] = (22));

} else {
var statearr_26048_26131 = state_26043__$1;
(statearr_26048_26131[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (27))){
var inst_25991 = (state_26043[(9)]);
var inst_25984 = (state_26043[(10)]);
var inst_25986 = (state_26043[(11)]);
var inst_25911 = (state_26043[(12)]);
var inst_25991__$1 = cljs.core._nth.call(null,inst_25984,inst_25986);
var inst_25992 = cljs.core.async.put_BANG_.call(null,inst_25991__$1,inst_25911,done);
var state_26043__$1 = (function (){var statearr_26049 = state_26043;
(statearr_26049[(9)] = inst_25991__$1);

return statearr_26049;
})();
if(cljs.core.truth_(inst_25992)){
var statearr_26050_26132 = state_26043__$1;
(statearr_26050_26132[(1)] = (30));

} else {
var statearr_26051_26133 = state_26043__$1;
(statearr_26051_26133[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (1))){
var state_26043__$1 = state_26043;
var statearr_26052_26134 = state_26043__$1;
(statearr_26052_26134[(2)] = null);

(statearr_26052_26134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (24))){
var inst_25942 = (state_26043[(7)]);
var inst_25961 = (state_26043[(2)]);
var inst_25962 = cljs.core.next.call(null,inst_25942);
var inst_25920 = inst_25962;
var inst_25921 = null;
var inst_25922 = (0);
var inst_25923 = (0);
var state_26043__$1 = (function (){var statearr_26053 = state_26043;
(statearr_26053[(13)] = inst_25920);

(statearr_26053[(14)] = inst_25961);

(statearr_26053[(15)] = inst_25922);

(statearr_26053[(16)] = inst_25921);

(statearr_26053[(17)] = inst_25923);

return statearr_26053;
})();
var statearr_26054_26135 = state_26043__$1;
(statearr_26054_26135[(2)] = null);

(statearr_26054_26135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (39))){
var state_26043__$1 = state_26043;
var statearr_26058_26136 = state_26043__$1;
(statearr_26058_26136[(2)] = null);

(statearr_26058_26136[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (4))){
var inst_25911 = (state_26043[(12)]);
var inst_25911__$1 = (state_26043[(2)]);
var inst_25912 = (inst_25911__$1 == null);
var state_26043__$1 = (function (){var statearr_26059 = state_26043;
(statearr_26059[(12)] = inst_25911__$1);

return statearr_26059;
})();
if(cljs.core.truth_(inst_25912)){
var statearr_26060_26137 = state_26043__$1;
(statearr_26060_26137[(1)] = (5));

} else {
var statearr_26061_26138 = state_26043__$1;
(statearr_26061_26138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (15))){
var inst_25920 = (state_26043[(13)]);
var inst_25922 = (state_26043[(15)]);
var inst_25921 = (state_26043[(16)]);
var inst_25923 = (state_26043[(17)]);
var inst_25938 = (state_26043[(2)]);
var inst_25939 = (inst_25923 + (1));
var tmp26055 = inst_25920;
var tmp26056 = inst_25922;
var tmp26057 = inst_25921;
var inst_25920__$1 = tmp26055;
var inst_25921__$1 = tmp26057;
var inst_25922__$1 = tmp26056;
var inst_25923__$1 = inst_25939;
var state_26043__$1 = (function (){var statearr_26062 = state_26043;
(statearr_26062[(13)] = inst_25920__$1);

(statearr_26062[(15)] = inst_25922__$1);

(statearr_26062[(18)] = inst_25938);

(statearr_26062[(16)] = inst_25921__$1);

(statearr_26062[(17)] = inst_25923__$1);

return statearr_26062;
})();
var statearr_26063_26139 = state_26043__$1;
(statearr_26063_26139[(2)] = null);

(statearr_26063_26139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (21))){
var inst_25965 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26067_26140 = state_26043__$1;
(statearr_26067_26140[(2)] = inst_25965);

(statearr_26067_26140[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (31))){
var inst_25991 = (state_26043[(9)]);
var inst_25995 = done.call(null,null);
var inst_25996 = cljs.core.async.untap_STAR_.call(null,m,inst_25991);
var state_26043__$1 = (function (){var statearr_26068 = state_26043;
(statearr_26068[(19)] = inst_25995);

return statearr_26068;
})();
var statearr_26069_26141 = state_26043__$1;
(statearr_26069_26141[(2)] = inst_25996);

(statearr_26069_26141[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (32))){
var inst_25983 = (state_26043[(20)]);
var inst_25984 = (state_26043[(10)]);
var inst_25985 = (state_26043[(21)]);
var inst_25986 = (state_26043[(11)]);
var inst_25998 = (state_26043[(2)]);
var inst_25999 = (inst_25986 + (1));
var tmp26064 = inst_25983;
var tmp26065 = inst_25984;
var tmp26066 = inst_25985;
var inst_25983__$1 = tmp26064;
var inst_25984__$1 = tmp26065;
var inst_25985__$1 = tmp26066;
var inst_25986__$1 = inst_25999;
var state_26043__$1 = (function (){var statearr_26070 = state_26043;
(statearr_26070[(20)] = inst_25983__$1);

(statearr_26070[(10)] = inst_25984__$1);

(statearr_26070[(21)] = inst_25985__$1);

(statearr_26070[(11)] = inst_25986__$1);

(statearr_26070[(22)] = inst_25998);

return statearr_26070;
})();
var statearr_26071_26142 = state_26043__$1;
(statearr_26071_26142[(2)] = null);

(statearr_26071_26142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (40))){
var inst_26011 = (state_26043[(23)]);
var inst_26015 = done.call(null,null);
var inst_26016 = cljs.core.async.untap_STAR_.call(null,m,inst_26011);
var state_26043__$1 = (function (){var statearr_26072 = state_26043;
(statearr_26072[(24)] = inst_26015);

return statearr_26072;
})();
var statearr_26073_26143 = state_26043__$1;
(statearr_26073_26143[(2)] = inst_26016);

(statearr_26073_26143[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (33))){
var inst_26002 = (state_26043[(25)]);
var inst_26004 = cljs.core.chunked_seq_QMARK_.call(null,inst_26002);
var state_26043__$1 = state_26043;
if(inst_26004){
var statearr_26074_26144 = state_26043__$1;
(statearr_26074_26144[(1)] = (36));

} else {
var statearr_26075_26145 = state_26043__$1;
(statearr_26075_26145[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (13))){
var inst_25932 = (state_26043[(26)]);
var inst_25935 = cljs.core.async.close_BANG_.call(null,inst_25932);
var state_26043__$1 = state_26043;
var statearr_26076_26146 = state_26043__$1;
(statearr_26076_26146[(2)] = inst_25935);

(statearr_26076_26146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (22))){
var inst_25955 = (state_26043[(8)]);
var inst_25958 = cljs.core.async.close_BANG_.call(null,inst_25955);
var state_26043__$1 = state_26043;
var statearr_26077_26147 = state_26043__$1;
(statearr_26077_26147[(2)] = inst_25958);

(statearr_26077_26147[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (36))){
var inst_26002 = (state_26043[(25)]);
var inst_26006 = cljs.core.chunk_first.call(null,inst_26002);
var inst_26007 = cljs.core.chunk_rest.call(null,inst_26002);
var inst_26008 = cljs.core.count.call(null,inst_26006);
var inst_25983 = inst_26007;
var inst_25984 = inst_26006;
var inst_25985 = inst_26008;
var inst_25986 = (0);
var state_26043__$1 = (function (){var statearr_26078 = state_26043;
(statearr_26078[(20)] = inst_25983);

(statearr_26078[(10)] = inst_25984);

(statearr_26078[(21)] = inst_25985);

(statearr_26078[(11)] = inst_25986);

return statearr_26078;
})();
var statearr_26079_26148 = state_26043__$1;
(statearr_26079_26148[(2)] = null);

(statearr_26079_26148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (41))){
var inst_26002 = (state_26043[(25)]);
var inst_26018 = (state_26043[(2)]);
var inst_26019 = cljs.core.next.call(null,inst_26002);
var inst_25983 = inst_26019;
var inst_25984 = null;
var inst_25985 = (0);
var inst_25986 = (0);
var state_26043__$1 = (function (){var statearr_26080 = state_26043;
(statearr_26080[(20)] = inst_25983);

(statearr_26080[(27)] = inst_26018);

(statearr_26080[(10)] = inst_25984);

(statearr_26080[(21)] = inst_25985);

(statearr_26080[(11)] = inst_25986);

return statearr_26080;
})();
var statearr_26081_26149 = state_26043__$1;
(statearr_26081_26149[(2)] = null);

(statearr_26081_26149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (43))){
var state_26043__$1 = state_26043;
var statearr_26082_26150 = state_26043__$1;
(statearr_26082_26150[(2)] = null);

(statearr_26082_26150[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (29))){
var inst_26027 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26083_26151 = state_26043__$1;
(statearr_26083_26151[(2)] = inst_26027);

(statearr_26083_26151[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (44))){
var inst_26036 = (state_26043[(2)]);
var state_26043__$1 = (function (){var statearr_26084 = state_26043;
(statearr_26084[(28)] = inst_26036);

return statearr_26084;
})();
var statearr_26085_26152 = state_26043__$1;
(statearr_26085_26152[(2)] = null);

(statearr_26085_26152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (6))){
var inst_25975 = (state_26043[(29)]);
var inst_25974 = cljs.core.deref.call(null,cs);
var inst_25975__$1 = cljs.core.keys.call(null,inst_25974);
var inst_25976 = cljs.core.count.call(null,inst_25975__$1);
var inst_25977 = cljs.core.reset_BANG_.call(null,dctr,inst_25976);
var inst_25982 = cljs.core.seq.call(null,inst_25975__$1);
var inst_25983 = inst_25982;
var inst_25984 = null;
var inst_25985 = (0);
var inst_25986 = (0);
var state_26043__$1 = (function (){var statearr_26086 = state_26043;
(statearr_26086[(20)] = inst_25983);

(statearr_26086[(10)] = inst_25984);

(statearr_26086[(21)] = inst_25985);

(statearr_26086[(11)] = inst_25986);

(statearr_26086[(30)] = inst_25977);

(statearr_26086[(29)] = inst_25975__$1);

return statearr_26086;
})();
var statearr_26087_26153 = state_26043__$1;
(statearr_26087_26153[(2)] = null);

(statearr_26087_26153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (28))){
var inst_25983 = (state_26043[(20)]);
var inst_26002 = (state_26043[(25)]);
var inst_26002__$1 = cljs.core.seq.call(null,inst_25983);
var state_26043__$1 = (function (){var statearr_26088 = state_26043;
(statearr_26088[(25)] = inst_26002__$1);

return statearr_26088;
})();
if(inst_26002__$1){
var statearr_26089_26154 = state_26043__$1;
(statearr_26089_26154[(1)] = (33));

} else {
var statearr_26090_26155 = state_26043__$1;
(statearr_26090_26155[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (25))){
var inst_25985 = (state_26043[(21)]);
var inst_25986 = (state_26043[(11)]);
var inst_25988 = (inst_25986 < inst_25985);
var inst_25989 = inst_25988;
var state_26043__$1 = state_26043;
if(cljs.core.truth_(inst_25989)){
var statearr_26091_26156 = state_26043__$1;
(statearr_26091_26156[(1)] = (27));

} else {
var statearr_26092_26157 = state_26043__$1;
(statearr_26092_26157[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (34))){
var state_26043__$1 = state_26043;
var statearr_26093_26158 = state_26043__$1;
(statearr_26093_26158[(2)] = null);

(statearr_26093_26158[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (17))){
var state_26043__$1 = state_26043;
var statearr_26094_26159 = state_26043__$1;
(statearr_26094_26159[(2)] = null);

(statearr_26094_26159[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (3))){
var inst_26041 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26043__$1,inst_26041);
} else {
if((state_val_26044 === (12))){
var inst_25970 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26095_26160 = state_26043__$1;
(statearr_26095_26160[(2)] = inst_25970);

(statearr_26095_26160[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (2))){
var state_26043__$1 = state_26043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26043__$1,(4),ch);
} else {
if((state_val_26044 === (23))){
var state_26043__$1 = state_26043;
var statearr_26096_26161 = state_26043__$1;
(statearr_26096_26161[(2)] = null);

(statearr_26096_26161[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (35))){
var inst_26025 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26097_26162 = state_26043__$1;
(statearr_26097_26162[(2)] = inst_26025);

(statearr_26097_26162[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (19))){
var inst_25942 = (state_26043[(7)]);
var inst_25946 = cljs.core.chunk_first.call(null,inst_25942);
var inst_25947 = cljs.core.chunk_rest.call(null,inst_25942);
var inst_25948 = cljs.core.count.call(null,inst_25946);
var inst_25920 = inst_25947;
var inst_25921 = inst_25946;
var inst_25922 = inst_25948;
var inst_25923 = (0);
var state_26043__$1 = (function (){var statearr_26098 = state_26043;
(statearr_26098[(13)] = inst_25920);

(statearr_26098[(15)] = inst_25922);

(statearr_26098[(16)] = inst_25921);

(statearr_26098[(17)] = inst_25923);

return statearr_26098;
})();
var statearr_26099_26163 = state_26043__$1;
(statearr_26099_26163[(2)] = null);

(statearr_26099_26163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (11))){
var inst_25920 = (state_26043[(13)]);
var inst_25942 = (state_26043[(7)]);
var inst_25942__$1 = cljs.core.seq.call(null,inst_25920);
var state_26043__$1 = (function (){var statearr_26100 = state_26043;
(statearr_26100[(7)] = inst_25942__$1);

return statearr_26100;
})();
if(inst_25942__$1){
var statearr_26101_26164 = state_26043__$1;
(statearr_26101_26164[(1)] = (16));

} else {
var statearr_26102_26165 = state_26043__$1;
(statearr_26102_26165[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (9))){
var inst_25972 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26103_26166 = state_26043__$1;
(statearr_26103_26166[(2)] = inst_25972);

(statearr_26103_26166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (5))){
var inst_25918 = cljs.core.deref.call(null,cs);
var inst_25919 = cljs.core.seq.call(null,inst_25918);
var inst_25920 = inst_25919;
var inst_25921 = null;
var inst_25922 = (0);
var inst_25923 = (0);
var state_26043__$1 = (function (){var statearr_26104 = state_26043;
(statearr_26104[(13)] = inst_25920);

(statearr_26104[(15)] = inst_25922);

(statearr_26104[(16)] = inst_25921);

(statearr_26104[(17)] = inst_25923);

return statearr_26104;
})();
var statearr_26105_26167 = state_26043__$1;
(statearr_26105_26167[(2)] = null);

(statearr_26105_26167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (14))){
var state_26043__$1 = state_26043;
var statearr_26106_26168 = state_26043__$1;
(statearr_26106_26168[(2)] = null);

(statearr_26106_26168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (45))){
var inst_26033 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26107_26169 = state_26043__$1;
(statearr_26107_26169[(2)] = inst_26033);

(statearr_26107_26169[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (26))){
var inst_25975 = (state_26043[(29)]);
var inst_26029 = (state_26043[(2)]);
var inst_26030 = cljs.core.seq.call(null,inst_25975);
var state_26043__$1 = (function (){var statearr_26108 = state_26043;
(statearr_26108[(31)] = inst_26029);

return statearr_26108;
})();
if(inst_26030){
var statearr_26109_26170 = state_26043__$1;
(statearr_26109_26170[(1)] = (42));

} else {
var statearr_26110_26171 = state_26043__$1;
(statearr_26110_26171[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (16))){
var inst_25942 = (state_26043[(7)]);
var inst_25944 = cljs.core.chunked_seq_QMARK_.call(null,inst_25942);
var state_26043__$1 = state_26043;
if(inst_25944){
var statearr_26111_26172 = state_26043__$1;
(statearr_26111_26172[(1)] = (19));

} else {
var statearr_26112_26173 = state_26043__$1;
(statearr_26112_26173[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (38))){
var inst_26022 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26113_26174 = state_26043__$1;
(statearr_26113_26174[(2)] = inst_26022);

(statearr_26113_26174[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (30))){
var state_26043__$1 = state_26043;
var statearr_26114_26175 = state_26043__$1;
(statearr_26114_26175[(2)] = null);

(statearr_26114_26175[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (10))){
var inst_25921 = (state_26043[(16)]);
var inst_25923 = (state_26043[(17)]);
var inst_25931 = cljs.core._nth.call(null,inst_25921,inst_25923);
var inst_25932 = cljs.core.nth.call(null,inst_25931,(0),null);
var inst_25933 = cljs.core.nth.call(null,inst_25931,(1),null);
var state_26043__$1 = (function (){var statearr_26115 = state_26043;
(statearr_26115[(26)] = inst_25932);

return statearr_26115;
})();
if(cljs.core.truth_(inst_25933)){
var statearr_26116_26176 = state_26043__$1;
(statearr_26116_26176[(1)] = (13));

} else {
var statearr_26117_26177 = state_26043__$1;
(statearr_26117_26177[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (18))){
var inst_25968 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26118_26178 = state_26043__$1;
(statearr_26118_26178[(2)] = inst_25968);

(statearr_26118_26178[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (42))){
var state_26043__$1 = state_26043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26043__$1,(45),dchan);
} else {
if((state_val_26044 === (37))){
var inst_26002 = (state_26043[(25)]);
var inst_25911 = (state_26043[(12)]);
var inst_26011 = (state_26043[(23)]);
var inst_26011__$1 = cljs.core.first.call(null,inst_26002);
var inst_26012 = cljs.core.async.put_BANG_.call(null,inst_26011__$1,inst_25911,done);
var state_26043__$1 = (function (){var statearr_26119 = state_26043;
(statearr_26119[(23)] = inst_26011__$1);

return statearr_26119;
})();
if(cljs.core.truth_(inst_26012)){
var statearr_26120_26179 = state_26043__$1;
(statearr_26120_26179[(1)] = (39));

} else {
var statearr_26121_26180 = state_26043__$1;
(statearr_26121_26180[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (8))){
var inst_25922 = (state_26043[(15)]);
var inst_25923 = (state_26043[(17)]);
var inst_25925 = (inst_25923 < inst_25922);
var inst_25926 = inst_25925;
var state_26043__$1 = state_26043;
if(cljs.core.truth_(inst_25926)){
var statearr_26122_26181 = state_26043__$1;
(statearr_26122_26181[(1)] = (10));

} else {
var statearr_26123_26182 = state_26043__$1;
(statearr_26123_26182[(1)] = (11));

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
});})(c__25309__auto___26128,cs,m,dchan,dctr,done))
;
return ((function (switch__25219__auto__,c__25309__auto___26128,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25220__auto__ = null;
var cljs$core$async$mult_$_state_machine__25220__auto____0 = (function (){
var statearr_26124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26124[(0)] = cljs$core$async$mult_$_state_machine__25220__auto__);

(statearr_26124[(1)] = (1));

return statearr_26124;
});
var cljs$core$async$mult_$_state_machine__25220__auto____1 = (function (state_26043){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_26043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e26125){if((e26125 instanceof Object)){
var ex__25223__auto__ = e26125;
var statearr_26126_26183 = state_26043;
(statearr_26126_26183[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26184 = state_26043;
state_26043 = G__26184;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25220__auto__ = function(state_26043){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25220__auto____1.call(this,state_26043);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25220__auto____0;
cljs$core$async$mult_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25220__auto____1;
return cljs$core$async$mult_$_state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto___26128,cs,m,dchan,dctr,done))
})();
var state__25311__auto__ = (function (){var statearr_26127 = f__25310__auto__.call(null);
(statearr_26127[(6)] = c__25309__auto___26128);

return statearr_26127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto___26128,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__26186 = arguments.length;
switch (G__26186) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26198 = arguments.length;
var i__4500__auto___26199 = (0);
while(true){
if((i__4500__auto___26199 < len__4499__auto___26198)){
args__4502__auto__.push((arguments[i__4500__auto___26199]));

var G__26200 = (i__4500__auto___26199 + (1));
i__4500__auto___26199 = G__26200;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26192){
var map__26193 = p__26192;
var map__26193__$1 = ((((!((map__26193 == null)))?(((((map__26193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26193):map__26193);
var opts = map__26193__$1;
var statearr_26195_26201 = state;
(statearr_26195_26201[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__26193,map__26193__$1,opts){
return (function (val){
var statearr_26196_26202 = state;
(statearr_26196_26202[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26193,map__26193__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_26197_26203 = state;
(statearr_26197_26203[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26188){
var G__26189 = cljs.core.first.call(null,seq26188);
var seq26188__$1 = cljs.core.next.call(null,seq26188);
var G__26190 = cljs.core.first.call(null,seq26188__$1);
var seq26188__$2 = cljs.core.next.call(null,seq26188__$1);
var G__26191 = cljs.core.first.call(null,seq26188__$2);
var seq26188__$3 = cljs.core.next.call(null,seq26188__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26189,G__26190,G__26191,seq26188__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26204 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26204 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta26205){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta26205 = meta26205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26206,meta26205__$1){
var self__ = this;
var _26206__$1 = this;
return (new cljs.core.async.t_cljs$core$async26204(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta26205__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26204.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26206){
var self__ = this;
var _26206__$1 = this;
return self__.meta26205;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26204.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26204.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26204.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26204.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26204.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26204.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26204.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26204.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26204.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta26205","meta26205",-532222136,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26204.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26204.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26204";

cljs.core.async.t_cljs$core$async26204.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26204");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26204.
 */
cljs.core.async.__GT_t_cljs$core$async26204 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26204(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26205){
return (new cljs.core.async.t_cljs$core$async26204(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26205));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26204(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25309__auto___26368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto___26368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto___26368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26308){
var state_val_26309 = (state_26308[(1)]);
if((state_val_26309 === (7))){
var inst_26223 = (state_26308[(2)]);
var state_26308__$1 = state_26308;
var statearr_26310_26369 = state_26308__$1;
(statearr_26310_26369[(2)] = inst_26223);

(statearr_26310_26369[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (20))){
var inst_26235 = (state_26308[(7)]);
var state_26308__$1 = state_26308;
var statearr_26311_26370 = state_26308__$1;
(statearr_26311_26370[(2)] = inst_26235);

(statearr_26311_26370[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (27))){
var state_26308__$1 = state_26308;
var statearr_26312_26371 = state_26308__$1;
(statearr_26312_26371[(2)] = null);

(statearr_26312_26371[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (1))){
var inst_26210 = (state_26308[(8)]);
var inst_26210__$1 = calc_state.call(null);
var inst_26212 = (inst_26210__$1 == null);
var inst_26213 = cljs.core.not.call(null,inst_26212);
var state_26308__$1 = (function (){var statearr_26313 = state_26308;
(statearr_26313[(8)] = inst_26210__$1);

return statearr_26313;
})();
if(inst_26213){
var statearr_26314_26372 = state_26308__$1;
(statearr_26314_26372[(1)] = (2));

} else {
var statearr_26315_26373 = state_26308__$1;
(statearr_26315_26373[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (24))){
var inst_26282 = (state_26308[(9)]);
var inst_26268 = (state_26308[(10)]);
var inst_26259 = (state_26308[(11)]);
var inst_26282__$1 = inst_26259.call(null,inst_26268);
var state_26308__$1 = (function (){var statearr_26316 = state_26308;
(statearr_26316[(9)] = inst_26282__$1);

return statearr_26316;
})();
if(cljs.core.truth_(inst_26282__$1)){
var statearr_26317_26374 = state_26308__$1;
(statearr_26317_26374[(1)] = (29));

} else {
var statearr_26318_26375 = state_26308__$1;
(statearr_26318_26375[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (4))){
var inst_26226 = (state_26308[(2)]);
var state_26308__$1 = state_26308;
if(cljs.core.truth_(inst_26226)){
var statearr_26319_26376 = state_26308__$1;
(statearr_26319_26376[(1)] = (8));

} else {
var statearr_26320_26377 = state_26308__$1;
(statearr_26320_26377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (15))){
var inst_26253 = (state_26308[(2)]);
var state_26308__$1 = state_26308;
if(cljs.core.truth_(inst_26253)){
var statearr_26321_26378 = state_26308__$1;
(statearr_26321_26378[(1)] = (19));

} else {
var statearr_26322_26379 = state_26308__$1;
(statearr_26322_26379[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (21))){
var inst_26258 = (state_26308[(12)]);
var inst_26258__$1 = (state_26308[(2)]);
var inst_26259 = cljs.core.get.call(null,inst_26258__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26260 = cljs.core.get.call(null,inst_26258__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26261 = cljs.core.get.call(null,inst_26258__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26308__$1 = (function (){var statearr_26323 = state_26308;
(statearr_26323[(12)] = inst_26258__$1);

(statearr_26323[(13)] = inst_26260);

(statearr_26323[(11)] = inst_26259);

return statearr_26323;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26308__$1,(22),inst_26261);
} else {
if((state_val_26309 === (31))){
var inst_26290 = (state_26308[(2)]);
var state_26308__$1 = state_26308;
if(cljs.core.truth_(inst_26290)){
var statearr_26324_26380 = state_26308__$1;
(statearr_26324_26380[(1)] = (32));

} else {
var statearr_26325_26381 = state_26308__$1;
(statearr_26325_26381[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (32))){
var inst_26267 = (state_26308[(14)]);
var state_26308__$1 = state_26308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26308__$1,(35),out,inst_26267);
} else {
if((state_val_26309 === (33))){
var inst_26258 = (state_26308[(12)]);
var inst_26235 = inst_26258;
var state_26308__$1 = (function (){var statearr_26326 = state_26308;
(statearr_26326[(7)] = inst_26235);

return statearr_26326;
})();
var statearr_26327_26382 = state_26308__$1;
(statearr_26327_26382[(2)] = null);

(statearr_26327_26382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (13))){
var inst_26235 = (state_26308[(7)]);
var inst_26242 = inst_26235.cljs$lang$protocol_mask$partition0$;
var inst_26243 = (inst_26242 & (64));
var inst_26244 = inst_26235.cljs$core$ISeq$;
var inst_26245 = (cljs.core.PROTOCOL_SENTINEL === inst_26244);
var inst_26246 = ((inst_26243) || (inst_26245));
var state_26308__$1 = state_26308;
if(cljs.core.truth_(inst_26246)){
var statearr_26328_26383 = state_26308__$1;
(statearr_26328_26383[(1)] = (16));

} else {
var statearr_26329_26384 = state_26308__$1;
(statearr_26329_26384[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (22))){
var inst_26268 = (state_26308[(10)]);
var inst_26267 = (state_26308[(14)]);
var inst_26266 = (state_26308[(2)]);
var inst_26267__$1 = cljs.core.nth.call(null,inst_26266,(0),null);
var inst_26268__$1 = cljs.core.nth.call(null,inst_26266,(1),null);
var inst_26269 = (inst_26267__$1 == null);
var inst_26270 = cljs.core._EQ_.call(null,inst_26268__$1,change);
var inst_26271 = ((inst_26269) || (inst_26270));
var state_26308__$1 = (function (){var statearr_26330 = state_26308;
(statearr_26330[(10)] = inst_26268__$1);

(statearr_26330[(14)] = inst_26267__$1);

return statearr_26330;
})();
if(cljs.core.truth_(inst_26271)){
var statearr_26331_26385 = state_26308__$1;
(statearr_26331_26385[(1)] = (23));

} else {
var statearr_26332_26386 = state_26308__$1;
(statearr_26332_26386[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (36))){
var inst_26258 = (state_26308[(12)]);
var inst_26235 = inst_26258;
var state_26308__$1 = (function (){var statearr_26333 = state_26308;
(statearr_26333[(7)] = inst_26235);

return statearr_26333;
})();
var statearr_26334_26387 = state_26308__$1;
(statearr_26334_26387[(2)] = null);

(statearr_26334_26387[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (29))){
var inst_26282 = (state_26308[(9)]);
var state_26308__$1 = state_26308;
var statearr_26335_26388 = state_26308__$1;
(statearr_26335_26388[(2)] = inst_26282);

(statearr_26335_26388[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (6))){
var state_26308__$1 = state_26308;
var statearr_26336_26389 = state_26308__$1;
(statearr_26336_26389[(2)] = false);

(statearr_26336_26389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (28))){
var inst_26278 = (state_26308[(2)]);
var inst_26279 = calc_state.call(null);
var inst_26235 = inst_26279;
var state_26308__$1 = (function (){var statearr_26337 = state_26308;
(statearr_26337[(7)] = inst_26235);

(statearr_26337[(15)] = inst_26278);

return statearr_26337;
})();
var statearr_26338_26390 = state_26308__$1;
(statearr_26338_26390[(2)] = null);

(statearr_26338_26390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (25))){
var inst_26304 = (state_26308[(2)]);
var state_26308__$1 = state_26308;
var statearr_26339_26391 = state_26308__$1;
(statearr_26339_26391[(2)] = inst_26304);

(statearr_26339_26391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (34))){
var inst_26302 = (state_26308[(2)]);
var state_26308__$1 = state_26308;
var statearr_26340_26392 = state_26308__$1;
(statearr_26340_26392[(2)] = inst_26302);

(statearr_26340_26392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (17))){
var state_26308__$1 = state_26308;
var statearr_26341_26393 = state_26308__$1;
(statearr_26341_26393[(2)] = false);

(statearr_26341_26393[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (3))){
var state_26308__$1 = state_26308;
var statearr_26342_26394 = state_26308__$1;
(statearr_26342_26394[(2)] = false);

(statearr_26342_26394[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (12))){
var inst_26306 = (state_26308[(2)]);
var state_26308__$1 = state_26308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26308__$1,inst_26306);
} else {
if((state_val_26309 === (2))){
var inst_26210 = (state_26308[(8)]);
var inst_26215 = inst_26210.cljs$lang$protocol_mask$partition0$;
var inst_26216 = (inst_26215 & (64));
var inst_26217 = inst_26210.cljs$core$ISeq$;
var inst_26218 = (cljs.core.PROTOCOL_SENTINEL === inst_26217);
var inst_26219 = ((inst_26216) || (inst_26218));
var state_26308__$1 = state_26308;
if(cljs.core.truth_(inst_26219)){
var statearr_26343_26395 = state_26308__$1;
(statearr_26343_26395[(1)] = (5));

} else {
var statearr_26344_26396 = state_26308__$1;
(statearr_26344_26396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (23))){
var inst_26267 = (state_26308[(14)]);
var inst_26273 = (inst_26267 == null);
var state_26308__$1 = state_26308;
if(cljs.core.truth_(inst_26273)){
var statearr_26345_26397 = state_26308__$1;
(statearr_26345_26397[(1)] = (26));

} else {
var statearr_26346_26398 = state_26308__$1;
(statearr_26346_26398[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (35))){
var inst_26293 = (state_26308[(2)]);
var state_26308__$1 = state_26308;
if(cljs.core.truth_(inst_26293)){
var statearr_26347_26399 = state_26308__$1;
(statearr_26347_26399[(1)] = (36));

} else {
var statearr_26348_26400 = state_26308__$1;
(statearr_26348_26400[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (19))){
var inst_26235 = (state_26308[(7)]);
var inst_26255 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26235);
var state_26308__$1 = state_26308;
var statearr_26349_26401 = state_26308__$1;
(statearr_26349_26401[(2)] = inst_26255);

(statearr_26349_26401[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (11))){
var inst_26235 = (state_26308[(7)]);
var inst_26239 = (inst_26235 == null);
var inst_26240 = cljs.core.not.call(null,inst_26239);
var state_26308__$1 = state_26308;
if(inst_26240){
var statearr_26350_26402 = state_26308__$1;
(statearr_26350_26402[(1)] = (13));

} else {
var statearr_26351_26403 = state_26308__$1;
(statearr_26351_26403[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (9))){
var inst_26210 = (state_26308[(8)]);
var state_26308__$1 = state_26308;
var statearr_26352_26404 = state_26308__$1;
(statearr_26352_26404[(2)] = inst_26210);

(statearr_26352_26404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (5))){
var state_26308__$1 = state_26308;
var statearr_26353_26405 = state_26308__$1;
(statearr_26353_26405[(2)] = true);

(statearr_26353_26405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (14))){
var state_26308__$1 = state_26308;
var statearr_26354_26406 = state_26308__$1;
(statearr_26354_26406[(2)] = false);

(statearr_26354_26406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (26))){
var inst_26268 = (state_26308[(10)]);
var inst_26275 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26268);
var state_26308__$1 = state_26308;
var statearr_26355_26407 = state_26308__$1;
(statearr_26355_26407[(2)] = inst_26275);

(statearr_26355_26407[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (16))){
var state_26308__$1 = state_26308;
var statearr_26356_26408 = state_26308__$1;
(statearr_26356_26408[(2)] = true);

(statearr_26356_26408[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (38))){
var inst_26298 = (state_26308[(2)]);
var state_26308__$1 = state_26308;
var statearr_26357_26409 = state_26308__$1;
(statearr_26357_26409[(2)] = inst_26298);

(statearr_26357_26409[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (30))){
var inst_26268 = (state_26308[(10)]);
var inst_26260 = (state_26308[(13)]);
var inst_26259 = (state_26308[(11)]);
var inst_26285 = cljs.core.empty_QMARK_.call(null,inst_26259);
var inst_26286 = inst_26260.call(null,inst_26268);
var inst_26287 = cljs.core.not.call(null,inst_26286);
var inst_26288 = ((inst_26285) && (inst_26287));
var state_26308__$1 = state_26308;
var statearr_26358_26410 = state_26308__$1;
(statearr_26358_26410[(2)] = inst_26288);

(statearr_26358_26410[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (10))){
var inst_26210 = (state_26308[(8)]);
var inst_26231 = (state_26308[(2)]);
var inst_26232 = cljs.core.get.call(null,inst_26231,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26233 = cljs.core.get.call(null,inst_26231,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26234 = cljs.core.get.call(null,inst_26231,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26235 = inst_26210;
var state_26308__$1 = (function (){var statearr_26359 = state_26308;
(statearr_26359[(16)] = inst_26234);

(statearr_26359[(17)] = inst_26232);

(statearr_26359[(7)] = inst_26235);

(statearr_26359[(18)] = inst_26233);

return statearr_26359;
})();
var statearr_26360_26411 = state_26308__$1;
(statearr_26360_26411[(2)] = null);

(statearr_26360_26411[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (18))){
var inst_26250 = (state_26308[(2)]);
var state_26308__$1 = state_26308;
var statearr_26361_26412 = state_26308__$1;
(statearr_26361_26412[(2)] = inst_26250);

(statearr_26361_26412[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (37))){
var state_26308__$1 = state_26308;
var statearr_26362_26413 = state_26308__$1;
(statearr_26362_26413[(2)] = null);

(statearr_26362_26413[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (8))){
var inst_26210 = (state_26308[(8)]);
var inst_26228 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26210);
var state_26308__$1 = state_26308;
var statearr_26363_26414 = state_26308__$1;
(statearr_26363_26414[(2)] = inst_26228);

(statearr_26363_26414[(1)] = (10));


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
});})(c__25309__auto___26368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25219__auto__,c__25309__auto___26368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25220__auto__ = null;
var cljs$core$async$mix_$_state_machine__25220__auto____0 = (function (){
var statearr_26364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26364[(0)] = cljs$core$async$mix_$_state_machine__25220__auto__);

(statearr_26364[(1)] = (1));

return statearr_26364;
});
var cljs$core$async$mix_$_state_machine__25220__auto____1 = (function (state_26308){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_26308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e26365){if((e26365 instanceof Object)){
var ex__25223__auto__ = e26365;
var statearr_26366_26415 = state_26308;
(statearr_26366_26415[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26416 = state_26308;
state_26308 = G__26416;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25220__auto__ = function(state_26308){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25220__auto____1.call(this,state_26308);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25220__auto____0;
cljs$core$async$mix_$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25220__auto____1;
return cljs$core$async$mix_$_state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto___26368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25311__auto__ = (function (){var statearr_26367 = f__25310__auto__.call(null);
(statearr_26367[(6)] = c__25309__auto___26368);

return statearr_26367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto___26368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26418 = arguments.length;
switch (G__26418) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__26422 = arguments.length;
switch (G__26422) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__26420_SHARP_){
if(cljs.core.truth_(p1__26420_SHARP_.call(null,topic))){
return p1__26420_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26420_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26423 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26423 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26424){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26424 = meta26424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26425,meta26424__$1){
var self__ = this;
var _26425__$1 = this;
return (new cljs.core.async.t_cljs$core$async26423(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26424__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26423.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26425){
var self__ = this;
var _26425__$1 = this;
return self__.meta26424;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26423.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26423.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26423.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26423.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26423.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26423.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26423.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26423.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26424","meta26424",1956386191,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26423.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26423";

cljs.core.async.t_cljs$core$async26423.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26423");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26423.
 */
cljs.core.async.__GT_t_cljs$core$async26423 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26423(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26424){
return (new cljs.core.async.t_cljs$core$async26423(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26424));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26423(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25309__auto___26543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto___26543,mults,ensure_mult,p){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto___26543,mults,ensure_mult,p){
return (function (state_26497){
var state_val_26498 = (state_26497[(1)]);
if((state_val_26498 === (7))){
var inst_26493 = (state_26497[(2)]);
var state_26497__$1 = state_26497;
var statearr_26499_26544 = state_26497__$1;
(statearr_26499_26544[(2)] = inst_26493);

(statearr_26499_26544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (20))){
var state_26497__$1 = state_26497;
var statearr_26500_26545 = state_26497__$1;
(statearr_26500_26545[(2)] = null);

(statearr_26500_26545[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (1))){
var state_26497__$1 = state_26497;
var statearr_26501_26546 = state_26497__$1;
(statearr_26501_26546[(2)] = null);

(statearr_26501_26546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (24))){
var inst_26476 = (state_26497[(7)]);
var inst_26485 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26476);
var state_26497__$1 = state_26497;
var statearr_26502_26547 = state_26497__$1;
(statearr_26502_26547[(2)] = inst_26485);

(statearr_26502_26547[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (4))){
var inst_26428 = (state_26497[(8)]);
var inst_26428__$1 = (state_26497[(2)]);
var inst_26429 = (inst_26428__$1 == null);
var state_26497__$1 = (function (){var statearr_26503 = state_26497;
(statearr_26503[(8)] = inst_26428__$1);

return statearr_26503;
})();
if(cljs.core.truth_(inst_26429)){
var statearr_26504_26548 = state_26497__$1;
(statearr_26504_26548[(1)] = (5));

} else {
var statearr_26505_26549 = state_26497__$1;
(statearr_26505_26549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (15))){
var inst_26470 = (state_26497[(2)]);
var state_26497__$1 = state_26497;
var statearr_26506_26550 = state_26497__$1;
(statearr_26506_26550[(2)] = inst_26470);

(statearr_26506_26550[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (21))){
var inst_26490 = (state_26497[(2)]);
var state_26497__$1 = (function (){var statearr_26507 = state_26497;
(statearr_26507[(9)] = inst_26490);

return statearr_26507;
})();
var statearr_26508_26551 = state_26497__$1;
(statearr_26508_26551[(2)] = null);

(statearr_26508_26551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (13))){
var inst_26452 = (state_26497[(10)]);
var inst_26454 = cljs.core.chunked_seq_QMARK_.call(null,inst_26452);
var state_26497__$1 = state_26497;
if(inst_26454){
var statearr_26509_26552 = state_26497__$1;
(statearr_26509_26552[(1)] = (16));

} else {
var statearr_26510_26553 = state_26497__$1;
(statearr_26510_26553[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (22))){
var inst_26482 = (state_26497[(2)]);
var state_26497__$1 = state_26497;
if(cljs.core.truth_(inst_26482)){
var statearr_26511_26554 = state_26497__$1;
(statearr_26511_26554[(1)] = (23));

} else {
var statearr_26512_26555 = state_26497__$1;
(statearr_26512_26555[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (6))){
var inst_26428 = (state_26497[(8)]);
var inst_26478 = (state_26497[(11)]);
var inst_26476 = (state_26497[(7)]);
var inst_26476__$1 = topic_fn.call(null,inst_26428);
var inst_26477 = cljs.core.deref.call(null,mults);
var inst_26478__$1 = cljs.core.get.call(null,inst_26477,inst_26476__$1);
var state_26497__$1 = (function (){var statearr_26513 = state_26497;
(statearr_26513[(11)] = inst_26478__$1);

(statearr_26513[(7)] = inst_26476__$1);

return statearr_26513;
})();
if(cljs.core.truth_(inst_26478__$1)){
var statearr_26514_26556 = state_26497__$1;
(statearr_26514_26556[(1)] = (19));

} else {
var statearr_26515_26557 = state_26497__$1;
(statearr_26515_26557[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (25))){
var inst_26487 = (state_26497[(2)]);
var state_26497__$1 = state_26497;
var statearr_26516_26558 = state_26497__$1;
(statearr_26516_26558[(2)] = inst_26487);

(statearr_26516_26558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (17))){
var inst_26452 = (state_26497[(10)]);
var inst_26461 = cljs.core.first.call(null,inst_26452);
var inst_26462 = cljs.core.async.muxch_STAR_.call(null,inst_26461);
var inst_26463 = cljs.core.async.close_BANG_.call(null,inst_26462);
var inst_26464 = cljs.core.next.call(null,inst_26452);
var inst_26438 = inst_26464;
var inst_26439 = null;
var inst_26440 = (0);
var inst_26441 = (0);
var state_26497__$1 = (function (){var statearr_26517 = state_26497;
(statearr_26517[(12)] = inst_26440);

(statearr_26517[(13)] = inst_26441);

(statearr_26517[(14)] = inst_26438);

(statearr_26517[(15)] = inst_26463);

(statearr_26517[(16)] = inst_26439);

return statearr_26517;
})();
var statearr_26518_26559 = state_26497__$1;
(statearr_26518_26559[(2)] = null);

(statearr_26518_26559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (3))){
var inst_26495 = (state_26497[(2)]);
var state_26497__$1 = state_26497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26497__$1,inst_26495);
} else {
if((state_val_26498 === (12))){
var inst_26472 = (state_26497[(2)]);
var state_26497__$1 = state_26497;
var statearr_26519_26560 = state_26497__$1;
(statearr_26519_26560[(2)] = inst_26472);

(statearr_26519_26560[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (2))){
var state_26497__$1 = state_26497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26497__$1,(4),ch);
} else {
if((state_val_26498 === (23))){
var state_26497__$1 = state_26497;
var statearr_26520_26561 = state_26497__$1;
(statearr_26520_26561[(2)] = null);

(statearr_26520_26561[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (19))){
var inst_26428 = (state_26497[(8)]);
var inst_26478 = (state_26497[(11)]);
var inst_26480 = cljs.core.async.muxch_STAR_.call(null,inst_26478);
var state_26497__$1 = state_26497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26497__$1,(22),inst_26480,inst_26428);
} else {
if((state_val_26498 === (11))){
var inst_26438 = (state_26497[(14)]);
var inst_26452 = (state_26497[(10)]);
var inst_26452__$1 = cljs.core.seq.call(null,inst_26438);
var state_26497__$1 = (function (){var statearr_26521 = state_26497;
(statearr_26521[(10)] = inst_26452__$1);

return statearr_26521;
})();
if(inst_26452__$1){
var statearr_26522_26562 = state_26497__$1;
(statearr_26522_26562[(1)] = (13));

} else {
var statearr_26523_26563 = state_26497__$1;
(statearr_26523_26563[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (9))){
var inst_26474 = (state_26497[(2)]);
var state_26497__$1 = state_26497;
var statearr_26524_26564 = state_26497__$1;
(statearr_26524_26564[(2)] = inst_26474);

(statearr_26524_26564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (5))){
var inst_26435 = cljs.core.deref.call(null,mults);
var inst_26436 = cljs.core.vals.call(null,inst_26435);
var inst_26437 = cljs.core.seq.call(null,inst_26436);
var inst_26438 = inst_26437;
var inst_26439 = null;
var inst_26440 = (0);
var inst_26441 = (0);
var state_26497__$1 = (function (){var statearr_26525 = state_26497;
(statearr_26525[(12)] = inst_26440);

(statearr_26525[(13)] = inst_26441);

(statearr_26525[(14)] = inst_26438);

(statearr_26525[(16)] = inst_26439);

return statearr_26525;
})();
var statearr_26526_26565 = state_26497__$1;
(statearr_26526_26565[(2)] = null);

(statearr_26526_26565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (14))){
var state_26497__$1 = state_26497;
var statearr_26530_26566 = state_26497__$1;
(statearr_26530_26566[(2)] = null);

(statearr_26530_26566[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (16))){
var inst_26452 = (state_26497[(10)]);
var inst_26456 = cljs.core.chunk_first.call(null,inst_26452);
var inst_26457 = cljs.core.chunk_rest.call(null,inst_26452);
var inst_26458 = cljs.core.count.call(null,inst_26456);
var inst_26438 = inst_26457;
var inst_26439 = inst_26456;
var inst_26440 = inst_26458;
var inst_26441 = (0);
var state_26497__$1 = (function (){var statearr_26531 = state_26497;
(statearr_26531[(12)] = inst_26440);

(statearr_26531[(13)] = inst_26441);

(statearr_26531[(14)] = inst_26438);

(statearr_26531[(16)] = inst_26439);

return statearr_26531;
})();
var statearr_26532_26567 = state_26497__$1;
(statearr_26532_26567[(2)] = null);

(statearr_26532_26567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (10))){
var inst_26440 = (state_26497[(12)]);
var inst_26441 = (state_26497[(13)]);
var inst_26438 = (state_26497[(14)]);
var inst_26439 = (state_26497[(16)]);
var inst_26446 = cljs.core._nth.call(null,inst_26439,inst_26441);
var inst_26447 = cljs.core.async.muxch_STAR_.call(null,inst_26446);
var inst_26448 = cljs.core.async.close_BANG_.call(null,inst_26447);
var inst_26449 = (inst_26441 + (1));
var tmp26527 = inst_26440;
var tmp26528 = inst_26438;
var tmp26529 = inst_26439;
var inst_26438__$1 = tmp26528;
var inst_26439__$1 = tmp26529;
var inst_26440__$1 = tmp26527;
var inst_26441__$1 = inst_26449;
var state_26497__$1 = (function (){var statearr_26533 = state_26497;
(statearr_26533[(12)] = inst_26440__$1);

(statearr_26533[(13)] = inst_26441__$1);

(statearr_26533[(14)] = inst_26438__$1);

(statearr_26533[(16)] = inst_26439__$1);

(statearr_26533[(17)] = inst_26448);

return statearr_26533;
})();
var statearr_26534_26568 = state_26497__$1;
(statearr_26534_26568[(2)] = null);

(statearr_26534_26568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (18))){
var inst_26467 = (state_26497[(2)]);
var state_26497__$1 = state_26497;
var statearr_26535_26569 = state_26497__$1;
(statearr_26535_26569[(2)] = inst_26467);

(statearr_26535_26569[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (8))){
var inst_26440 = (state_26497[(12)]);
var inst_26441 = (state_26497[(13)]);
var inst_26443 = (inst_26441 < inst_26440);
var inst_26444 = inst_26443;
var state_26497__$1 = state_26497;
if(cljs.core.truth_(inst_26444)){
var statearr_26536_26570 = state_26497__$1;
(statearr_26536_26570[(1)] = (10));

} else {
var statearr_26537_26571 = state_26497__$1;
(statearr_26537_26571[(1)] = (11));

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
});})(c__25309__auto___26543,mults,ensure_mult,p))
;
return ((function (switch__25219__auto__,c__25309__auto___26543,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25220__auto__ = null;
var cljs$core$async$state_machine__25220__auto____0 = (function (){
var statearr_26538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26538[(0)] = cljs$core$async$state_machine__25220__auto__);

(statearr_26538[(1)] = (1));

return statearr_26538;
});
var cljs$core$async$state_machine__25220__auto____1 = (function (state_26497){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_26497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e26539){if((e26539 instanceof Object)){
var ex__25223__auto__ = e26539;
var statearr_26540_26572 = state_26497;
(statearr_26540_26572[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26573 = state_26497;
state_26497 = G__26573;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$state_machine__25220__auto__ = function(state_26497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25220__auto____1.call(this,state_26497);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25220__auto____0;
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25220__auto____1;
return cljs$core$async$state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto___26543,mults,ensure_mult,p))
})();
var state__25311__auto__ = (function (){var statearr_26541 = f__25310__auto__.call(null);
(statearr_26541[(6)] = c__25309__auto___26543);

return statearr_26541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto___26543,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__26575 = arguments.length;
switch (G__26575) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__26578 = arguments.length;
switch (G__26578) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__26581 = arguments.length;
switch (G__26581) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__25309__auto___26648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto___26648,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto___26648,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26620){
var state_val_26621 = (state_26620[(1)]);
if((state_val_26621 === (7))){
var state_26620__$1 = state_26620;
var statearr_26622_26649 = state_26620__$1;
(statearr_26622_26649[(2)] = null);

(statearr_26622_26649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (1))){
var state_26620__$1 = state_26620;
var statearr_26623_26650 = state_26620__$1;
(statearr_26623_26650[(2)] = null);

(statearr_26623_26650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (4))){
var inst_26584 = (state_26620[(7)]);
var inst_26586 = (inst_26584 < cnt);
var state_26620__$1 = state_26620;
if(cljs.core.truth_(inst_26586)){
var statearr_26624_26651 = state_26620__$1;
(statearr_26624_26651[(1)] = (6));

} else {
var statearr_26625_26652 = state_26620__$1;
(statearr_26625_26652[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (15))){
var inst_26616 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
var statearr_26626_26653 = state_26620__$1;
(statearr_26626_26653[(2)] = inst_26616);

(statearr_26626_26653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (13))){
var inst_26609 = cljs.core.async.close_BANG_.call(null,out);
var state_26620__$1 = state_26620;
var statearr_26627_26654 = state_26620__$1;
(statearr_26627_26654[(2)] = inst_26609);

(statearr_26627_26654[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (6))){
var state_26620__$1 = state_26620;
var statearr_26628_26655 = state_26620__$1;
(statearr_26628_26655[(2)] = null);

(statearr_26628_26655[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (3))){
var inst_26618 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26620__$1,inst_26618);
} else {
if((state_val_26621 === (12))){
var inst_26606 = (state_26620[(8)]);
var inst_26606__$1 = (state_26620[(2)]);
var inst_26607 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26606__$1);
var state_26620__$1 = (function (){var statearr_26629 = state_26620;
(statearr_26629[(8)] = inst_26606__$1);

return statearr_26629;
})();
if(cljs.core.truth_(inst_26607)){
var statearr_26630_26656 = state_26620__$1;
(statearr_26630_26656[(1)] = (13));

} else {
var statearr_26631_26657 = state_26620__$1;
(statearr_26631_26657[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (2))){
var inst_26583 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26584 = (0);
var state_26620__$1 = (function (){var statearr_26632 = state_26620;
(statearr_26632[(9)] = inst_26583);

(statearr_26632[(7)] = inst_26584);

return statearr_26632;
})();
var statearr_26633_26658 = state_26620__$1;
(statearr_26633_26658[(2)] = null);

(statearr_26633_26658[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (11))){
var inst_26584 = (state_26620[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26620,(10),Object,null,(9));
var inst_26593 = chs__$1.call(null,inst_26584);
var inst_26594 = done.call(null,inst_26584);
var inst_26595 = cljs.core.async.take_BANG_.call(null,inst_26593,inst_26594);
var state_26620__$1 = state_26620;
var statearr_26634_26659 = state_26620__$1;
(statearr_26634_26659[(2)] = inst_26595);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26620__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (9))){
var inst_26584 = (state_26620[(7)]);
var inst_26597 = (state_26620[(2)]);
var inst_26598 = (inst_26584 + (1));
var inst_26584__$1 = inst_26598;
var state_26620__$1 = (function (){var statearr_26635 = state_26620;
(statearr_26635[(7)] = inst_26584__$1);

(statearr_26635[(10)] = inst_26597);

return statearr_26635;
})();
var statearr_26636_26660 = state_26620__$1;
(statearr_26636_26660[(2)] = null);

(statearr_26636_26660[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (5))){
var inst_26604 = (state_26620[(2)]);
var state_26620__$1 = (function (){var statearr_26637 = state_26620;
(statearr_26637[(11)] = inst_26604);

return statearr_26637;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26620__$1,(12),dchan);
} else {
if((state_val_26621 === (14))){
var inst_26606 = (state_26620[(8)]);
var inst_26611 = cljs.core.apply.call(null,f,inst_26606);
var state_26620__$1 = state_26620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26620__$1,(16),out,inst_26611);
} else {
if((state_val_26621 === (16))){
var inst_26613 = (state_26620[(2)]);
var state_26620__$1 = (function (){var statearr_26638 = state_26620;
(statearr_26638[(12)] = inst_26613);

return statearr_26638;
})();
var statearr_26639_26661 = state_26620__$1;
(statearr_26639_26661[(2)] = null);

(statearr_26639_26661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (10))){
var inst_26588 = (state_26620[(2)]);
var inst_26589 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26620__$1 = (function (){var statearr_26640 = state_26620;
(statearr_26640[(13)] = inst_26588);

return statearr_26640;
})();
var statearr_26641_26662 = state_26620__$1;
(statearr_26641_26662[(2)] = inst_26589);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26620__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (8))){
var inst_26602 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
var statearr_26642_26663 = state_26620__$1;
(statearr_26642_26663[(2)] = inst_26602);

(statearr_26642_26663[(1)] = (5));


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
});})(c__25309__auto___26648,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25219__auto__,c__25309__auto___26648,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25220__auto__ = null;
var cljs$core$async$state_machine__25220__auto____0 = (function (){
var statearr_26643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26643[(0)] = cljs$core$async$state_machine__25220__auto__);

(statearr_26643[(1)] = (1));

return statearr_26643;
});
var cljs$core$async$state_machine__25220__auto____1 = (function (state_26620){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_26620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e26644){if((e26644 instanceof Object)){
var ex__25223__auto__ = e26644;
var statearr_26645_26664 = state_26620;
(statearr_26645_26664[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26665 = state_26620;
state_26620 = G__26665;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$state_machine__25220__auto__ = function(state_26620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25220__auto____1.call(this,state_26620);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25220__auto____0;
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25220__auto____1;
return cljs$core$async$state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto___26648,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25311__auto__ = (function (){var statearr_26646 = f__25310__auto__.call(null);
(statearr_26646[(6)] = c__25309__auto___26648);

return statearr_26646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto___26648,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__26668 = arguments.length;
switch (G__26668) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25309__auto___26722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto___26722,out){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto___26722,out){
return (function (state_26700){
var state_val_26701 = (state_26700[(1)]);
if((state_val_26701 === (7))){
var inst_26680 = (state_26700[(7)]);
var inst_26679 = (state_26700[(8)]);
var inst_26679__$1 = (state_26700[(2)]);
var inst_26680__$1 = cljs.core.nth.call(null,inst_26679__$1,(0),null);
var inst_26681 = cljs.core.nth.call(null,inst_26679__$1,(1),null);
var inst_26682 = (inst_26680__$1 == null);
var state_26700__$1 = (function (){var statearr_26702 = state_26700;
(statearr_26702[(9)] = inst_26681);

(statearr_26702[(7)] = inst_26680__$1);

(statearr_26702[(8)] = inst_26679__$1);

return statearr_26702;
})();
if(cljs.core.truth_(inst_26682)){
var statearr_26703_26723 = state_26700__$1;
(statearr_26703_26723[(1)] = (8));

} else {
var statearr_26704_26724 = state_26700__$1;
(statearr_26704_26724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (1))){
var inst_26669 = cljs.core.vec.call(null,chs);
var inst_26670 = inst_26669;
var state_26700__$1 = (function (){var statearr_26705 = state_26700;
(statearr_26705[(10)] = inst_26670);

return statearr_26705;
})();
var statearr_26706_26725 = state_26700__$1;
(statearr_26706_26725[(2)] = null);

(statearr_26706_26725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (4))){
var inst_26670 = (state_26700[(10)]);
var state_26700__$1 = state_26700;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26700__$1,(7),inst_26670);
} else {
if((state_val_26701 === (6))){
var inst_26696 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
var statearr_26707_26726 = state_26700__$1;
(statearr_26707_26726[(2)] = inst_26696);

(statearr_26707_26726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (3))){
var inst_26698 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26700__$1,inst_26698);
} else {
if((state_val_26701 === (2))){
var inst_26670 = (state_26700[(10)]);
var inst_26672 = cljs.core.count.call(null,inst_26670);
var inst_26673 = (inst_26672 > (0));
var state_26700__$1 = state_26700;
if(cljs.core.truth_(inst_26673)){
var statearr_26709_26727 = state_26700__$1;
(statearr_26709_26727[(1)] = (4));

} else {
var statearr_26710_26728 = state_26700__$1;
(statearr_26710_26728[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (11))){
var inst_26670 = (state_26700[(10)]);
var inst_26689 = (state_26700[(2)]);
var tmp26708 = inst_26670;
var inst_26670__$1 = tmp26708;
var state_26700__$1 = (function (){var statearr_26711 = state_26700;
(statearr_26711[(10)] = inst_26670__$1);

(statearr_26711[(11)] = inst_26689);

return statearr_26711;
})();
var statearr_26712_26729 = state_26700__$1;
(statearr_26712_26729[(2)] = null);

(statearr_26712_26729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (9))){
var inst_26680 = (state_26700[(7)]);
var state_26700__$1 = state_26700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26700__$1,(11),out,inst_26680);
} else {
if((state_val_26701 === (5))){
var inst_26694 = cljs.core.async.close_BANG_.call(null,out);
var state_26700__$1 = state_26700;
var statearr_26713_26730 = state_26700__$1;
(statearr_26713_26730[(2)] = inst_26694);

(statearr_26713_26730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (10))){
var inst_26692 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
var statearr_26714_26731 = state_26700__$1;
(statearr_26714_26731[(2)] = inst_26692);

(statearr_26714_26731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (8))){
var inst_26681 = (state_26700[(9)]);
var inst_26670 = (state_26700[(10)]);
var inst_26680 = (state_26700[(7)]);
var inst_26679 = (state_26700[(8)]);
var inst_26684 = (function (){var cs = inst_26670;
var vec__26675 = inst_26679;
var v = inst_26680;
var c = inst_26681;
return ((function (cs,vec__26675,v,c,inst_26681,inst_26670,inst_26680,inst_26679,state_val_26701,c__25309__auto___26722,out){
return (function (p1__26666_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26666_SHARP_);
});
;})(cs,vec__26675,v,c,inst_26681,inst_26670,inst_26680,inst_26679,state_val_26701,c__25309__auto___26722,out))
})();
var inst_26685 = cljs.core.filterv.call(null,inst_26684,inst_26670);
var inst_26670__$1 = inst_26685;
var state_26700__$1 = (function (){var statearr_26715 = state_26700;
(statearr_26715[(10)] = inst_26670__$1);

return statearr_26715;
})();
var statearr_26716_26732 = state_26700__$1;
(statearr_26716_26732[(2)] = null);

(statearr_26716_26732[(1)] = (2));


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
});})(c__25309__auto___26722,out))
;
return ((function (switch__25219__auto__,c__25309__auto___26722,out){
return (function() {
var cljs$core$async$state_machine__25220__auto__ = null;
var cljs$core$async$state_machine__25220__auto____0 = (function (){
var statearr_26717 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26717[(0)] = cljs$core$async$state_machine__25220__auto__);

(statearr_26717[(1)] = (1));

return statearr_26717;
});
var cljs$core$async$state_machine__25220__auto____1 = (function (state_26700){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_26700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e26718){if((e26718 instanceof Object)){
var ex__25223__auto__ = e26718;
var statearr_26719_26733 = state_26700;
(statearr_26719_26733[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26734 = state_26700;
state_26700 = G__26734;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$state_machine__25220__auto__ = function(state_26700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25220__auto____1.call(this,state_26700);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25220__auto____0;
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25220__auto____1;
return cljs$core$async$state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto___26722,out))
})();
var state__25311__auto__ = (function (){var statearr_26720 = f__25310__auto__.call(null);
(statearr_26720[(6)] = c__25309__auto___26722);

return statearr_26720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto___26722,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26736 = arguments.length;
switch (G__26736) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25309__auto___26781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto___26781,out){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto___26781,out){
return (function (state_26760){
var state_val_26761 = (state_26760[(1)]);
if((state_val_26761 === (7))){
var inst_26742 = (state_26760[(7)]);
var inst_26742__$1 = (state_26760[(2)]);
var inst_26743 = (inst_26742__$1 == null);
var inst_26744 = cljs.core.not.call(null,inst_26743);
var state_26760__$1 = (function (){var statearr_26762 = state_26760;
(statearr_26762[(7)] = inst_26742__$1);

return statearr_26762;
})();
if(inst_26744){
var statearr_26763_26782 = state_26760__$1;
(statearr_26763_26782[(1)] = (8));

} else {
var statearr_26764_26783 = state_26760__$1;
(statearr_26764_26783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (1))){
var inst_26737 = (0);
var state_26760__$1 = (function (){var statearr_26765 = state_26760;
(statearr_26765[(8)] = inst_26737);

return statearr_26765;
})();
var statearr_26766_26784 = state_26760__$1;
(statearr_26766_26784[(2)] = null);

(statearr_26766_26784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (4))){
var state_26760__$1 = state_26760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26760__$1,(7),ch);
} else {
if((state_val_26761 === (6))){
var inst_26755 = (state_26760[(2)]);
var state_26760__$1 = state_26760;
var statearr_26767_26785 = state_26760__$1;
(statearr_26767_26785[(2)] = inst_26755);

(statearr_26767_26785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (3))){
var inst_26757 = (state_26760[(2)]);
var inst_26758 = cljs.core.async.close_BANG_.call(null,out);
var state_26760__$1 = (function (){var statearr_26768 = state_26760;
(statearr_26768[(9)] = inst_26757);

return statearr_26768;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26760__$1,inst_26758);
} else {
if((state_val_26761 === (2))){
var inst_26737 = (state_26760[(8)]);
var inst_26739 = (inst_26737 < n);
var state_26760__$1 = state_26760;
if(cljs.core.truth_(inst_26739)){
var statearr_26769_26786 = state_26760__$1;
(statearr_26769_26786[(1)] = (4));

} else {
var statearr_26770_26787 = state_26760__$1;
(statearr_26770_26787[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (11))){
var inst_26737 = (state_26760[(8)]);
var inst_26747 = (state_26760[(2)]);
var inst_26748 = (inst_26737 + (1));
var inst_26737__$1 = inst_26748;
var state_26760__$1 = (function (){var statearr_26771 = state_26760;
(statearr_26771[(8)] = inst_26737__$1);

(statearr_26771[(10)] = inst_26747);

return statearr_26771;
})();
var statearr_26772_26788 = state_26760__$1;
(statearr_26772_26788[(2)] = null);

(statearr_26772_26788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (9))){
var state_26760__$1 = state_26760;
var statearr_26773_26789 = state_26760__$1;
(statearr_26773_26789[(2)] = null);

(statearr_26773_26789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (5))){
var state_26760__$1 = state_26760;
var statearr_26774_26790 = state_26760__$1;
(statearr_26774_26790[(2)] = null);

(statearr_26774_26790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (10))){
var inst_26752 = (state_26760[(2)]);
var state_26760__$1 = state_26760;
var statearr_26775_26791 = state_26760__$1;
(statearr_26775_26791[(2)] = inst_26752);

(statearr_26775_26791[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (8))){
var inst_26742 = (state_26760[(7)]);
var state_26760__$1 = state_26760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26760__$1,(11),out,inst_26742);
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
});})(c__25309__auto___26781,out))
;
return ((function (switch__25219__auto__,c__25309__auto___26781,out){
return (function() {
var cljs$core$async$state_machine__25220__auto__ = null;
var cljs$core$async$state_machine__25220__auto____0 = (function (){
var statearr_26776 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26776[(0)] = cljs$core$async$state_machine__25220__auto__);

(statearr_26776[(1)] = (1));

return statearr_26776;
});
var cljs$core$async$state_machine__25220__auto____1 = (function (state_26760){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_26760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e26777){if((e26777 instanceof Object)){
var ex__25223__auto__ = e26777;
var statearr_26778_26792 = state_26760;
(statearr_26778_26792[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26793 = state_26760;
state_26760 = G__26793;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$state_machine__25220__auto__ = function(state_26760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25220__auto____1.call(this,state_26760);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25220__auto____0;
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25220__auto____1;
return cljs$core$async$state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto___26781,out))
})();
var state__25311__auto__ = (function (){var statearr_26779 = f__25310__auto__.call(null);
(statearr_26779[(6)] = c__25309__auto___26781);

return statearr_26779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto___26781,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26795 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26795 = (function (f,ch,meta26796){
this.f = f;
this.ch = ch;
this.meta26796 = meta26796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26797,meta26796__$1){
var self__ = this;
var _26797__$1 = this;
return (new cljs.core.async.t_cljs$core$async26795(self__.f,self__.ch,meta26796__$1));
});

cljs.core.async.t_cljs$core$async26795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26797){
var self__ = this;
var _26797__$1 = this;
return self__.meta26796;
});

cljs.core.async.t_cljs$core$async26795.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26795.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26795.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26795.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26795.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26798 = (function (f,ch,meta26796,_,fn1,meta26799){
this.f = f;
this.ch = ch;
this.meta26796 = meta26796;
this._ = _;
this.fn1 = fn1;
this.meta26799 = meta26799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26800,meta26799__$1){
var self__ = this;
var _26800__$1 = this;
return (new cljs.core.async.t_cljs$core$async26798(self__.f,self__.ch,self__.meta26796,self__._,self__.fn1,meta26799__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26798.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26800){
var self__ = this;
var _26800__$1 = this;
return self__.meta26799;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26798.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26798.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26798.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26798.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26794_SHARP_){
return f1.call(null,(((p1__26794_SHARP_ == null))?null:self__.f.call(null,p1__26794_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26798.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26796","meta26796",-1621293479,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26795","cljs.core.async/t_cljs$core$async26795",848385151,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26799","meta26799",1453450607,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26798.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26798";

cljs.core.async.t_cljs$core$async26798.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26798");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26798.
 */
cljs.core.async.__GT_t_cljs$core$async26798 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26798(f__$1,ch__$1,meta26796__$1,___$2,fn1__$1,meta26799){
return (new cljs.core.async.t_cljs$core$async26798(f__$1,ch__$1,meta26796__$1,___$2,fn1__$1,meta26799));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26798(self__.f,self__.ch,self__.meta26796,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26795.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26795.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26795.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26796","meta26796",-1621293479,null)], null);
});

cljs.core.async.t_cljs$core$async26795.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26795";

cljs.core.async.t_cljs$core$async26795.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26795");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26795.
 */
cljs.core.async.__GT_t_cljs$core$async26795 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26795(f__$1,ch__$1,meta26796){
return (new cljs.core.async.t_cljs$core$async26795(f__$1,ch__$1,meta26796));
});

}

return (new cljs.core.async.t_cljs$core$async26795(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26801 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26801 = (function (f,ch,meta26802){
this.f = f;
this.ch = ch;
this.meta26802 = meta26802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26803,meta26802__$1){
var self__ = this;
var _26803__$1 = this;
return (new cljs.core.async.t_cljs$core$async26801(self__.f,self__.ch,meta26802__$1));
});

cljs.core.async.t_cljs$core$async26801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26803){
var self__ = this;
var _26803__$1 = this;
return self__.meta26802;
});

cljs.core.async.t_cljs$core$async26801.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26801.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26801.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26801.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26801.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26801.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26802","meta26802",-1270539937,null)], null);
});

cljs.core.async.t_cljs$core$async26801.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26801";

cljs.core.async.t_cljs$core$async26801.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26801");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26801.
 */
cljs.core.async.__GT_t_cljs$core$async26801 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26801(f__$1,ch__$1,meta26802){
return (new cljs.core.async.t_cljs$core$async26801(f__$1,ch__$1,meta26802));
});

}

return (new cljs.core.async.t_cljs$core$async26801(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26804 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26804 = (function (p,ch,meta26805){
this.p = p;
this.ch = ch;
this.meta26805 = meta26805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26806,meta26805__$1){
var self__ = this;
var _26806__$1 = this;
return (new cljs.core.async.t_cljs$core$async26804(self__.p,self__.ch,meta26805__$1));
});

cljs.core.async.t_cljs$core$async26804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26806){
var self__ = this;
var _26806__$1 = this;
return self__.meta26805;
});

cljs.core.async.t_cljs$core$async26804.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26804.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26804.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26804.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26804.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26804.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26804.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26805","meta26805",654573152,null)], null);
});

cljs.core.async.t_cljs$core$async26804.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26804";

cljs.core.async.t_cljs$core$async26804.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26804");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26804.
 */
cljs.core.async.__GT_t_cljs$core$async26804 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26804(p__$1,ch__$1,meta26805){
return (new cljs.core.async.t_cljs$core$async26804(p__$1,ch__$1,meta26805));
});

}

return (new cljs.core.async.t_cljs$core$async26804(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26808 = arguments.length;
switch (G__26808) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25309__auto___26848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto___26848,out){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto___26848,out){
return (function (state_26829){
var state_val_26830 = (state_26829[(1)]);
if((state_val_26830 === (7))){
var inst_26825 = (state_26829[(2)]);
var state_26829__$1 = state_26829;
var statearr_26831_26849 = state_26829__$1;
(statearr_26831_26849[(2)] = inst_26825);

(statearr_26831_26849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26830 === (1))){
var state_26829__$1 = state_26829;
var statearr_26832_26850 = state_26829__$1;
(statearr_26832_26850[(2)] = null);

(statearr_26832_26850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26830 === (4))){
var inst_26811 = (state_26829[(7)]);
var inst_26811__$1 = (state_26829[(2)]);
var inst_26812 = (inst_26811__$1 == null);
var state_26829__$1 = (function (){var statearr_26833 = state_26829;
(statearr_26833[(7)] = inst_26811__$1);

return statearr_26833;
})();
if(cljs.core.truth_(inst_26812)){
var statearr_26834_26851 = state_26829__$1;
(statearr_26834_26851[(1)] = (5));

} else {
var statearr_26835_26852 = state_26829__$1;
(statearr_26835_26852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26830 === (6))){
var inst_26811 = (state_26829[(7)]);
var inst_26816 = p.call(null,inst_26811);
var state_26829__$1 = state_26829;
if(cljs.core.truth_(inst_26816)){
var statearr_26836_26853 = state_26829__$1;
(statearr_26836_26853[(1)] = (8));

} else {
var statearr_26837_26854 = state_26829__$1;
(statearr_26837_26854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26830 === (3))){
var inst_26827 = (state_26829[(2)]);
var state_26829__$1 = state_26829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26829__$1,inst_26827);
} else {
if((state_val_26830 === (2))){
var state_26829__$1 = state_26829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26829__$1,(4),ch);
} else {
if((state_val_26830 === (11))){
var inst_26819 = (state_26829[(2)]);
var state_26829__$1 = state_26829;
var statearr_26838_26855 = state_26829__$1;
(statearr_26838_26855[(2)] = inst_26819);

(statearr_26838_26855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26830 === (9))){
var state_26829__$1 = state_26829;
var statearr_26839_26856 = state_26829__$1;
(statearr_26839_26856[(2)] = null);

(statearr_26839_26856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26830 === (5))){
var inst_26814 = cljs.core.async.close_BANG_.call(null,out);
var state_26829__$1 = state_26829;
var statearr_26840_26857 = state_26829__$1;
(statearr_26840_26857[(2)] = inst_26814);

(statearr_26840_26857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26830 === (10))){
var inst_26822 = (state_26829[(2)]);
var state_26829__$1 = (function (){var statearr_26841 = state_26829;
(statearr_26841[(8)] = inst_26822);

return statearr_26841;
})();
var statearr_26842_26858 = state_26829__$1;
(statearr_26842_26858[(2)] = null);

(statearr_26842_26858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26830 === (8))){
var inst_26811 = (state_26829[(7)]);
var state_26829__$1 = state_26829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26829__$1,(11),out,inst_26811);
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
});})(c__25309__auto___26848,out))
;
return ((function (switch__25219__auto__,c__25309__auto___26848,out){
return (function() {
var cljs$core$async$state_machine__25220__auto__ = null;
var cljs$core$async$state_machine__25220__auto____0 = (function (){
var statearr_26843 = [null,null,null,null,null,null,null,null,null];
(statearr_26843[(0)] = cljs$core$async$state_machine__25220__auto__);

(statearr_26843[(1)] = (1));

return statearr_26843;
});
var cljs$core$async$state_machine__25220__auto____1 = (function (state_26829){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_26829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e26844){if((e26844 instanceof Object)){
var ex__25223__auto__ = e26844;
var statearr_26845_26859 = state_26829;
(statearr_26845_26859[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26860 = state_26829;
state_26829 = G__26860;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$state_machine__25220__auto__ = function(state_26829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25220__auto____1.call(this,state_26829);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25220__auto____0;
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25220__auto____1;
return cljs$core$async$state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto___26848,out))
})();
var state__25311__auto__ = (function (){var statearr_26846 = f__25310__auto__.call(null);
(statearr_26846[(6)] = c__25309__auto___26848);

return statearr_26846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto___26848,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26862 = arguments.length;
switch (G__26862) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto__){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto__){
return (function (state_26925){
var state_val_26926 = (state_26925[(1)]);
if((state_val_26926 === (7))){
var inst_26921 = (state_26925[(2)]);
var state_26925__$1 = state_26925;
var statearr_26927_26965 = state_26925__$1;
(statearr_26927_26965[(2)] = inst_26921);

(statearr_26927_26965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (20))){
var inst_26891 = (state_26925[(7)]);
var inst_26902 = (state_26925[(2)]);
var inst_26903 = cljs.core.next.call(null,inst_26891);
var inst_26877 = inst_26903;
var inst_26878 = null;
var inst_26879 = (0);
var inst_26880 = (0);
var state_26925__$1 = (function (){var statearr_26928 = state_26925;
(statearr_26928[(8)] = inst_26879);

(statearr_26928[(9)] = inst_26877);

(statearr_26928[(10)] = inst_26902);

(statearr_26928[(11)] = inst_26878);

(statearr_26928[(12)] = inst_26880);

return statearr_26928;
})();
var statearr_26929_26966 = state_26925__$1;
(statearr_26929_26966[(2)] = null);

(statearr_26929_26966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (1))){
var state_26925__$1 = state_26925;
var statearr_26930_26967 = state_26925__$1;
(statearr_26930_26967[(2)] = null);

(statearr_26930_26967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (4))){
var inst_26866 = (state_26925[(13)]);
var inst_26866__$1 = (state_26925[(2)]);
var inst_26867 = (inst_26866__$1 == null);
var state_26925__$1 = (function (){var statearr_26931 = state_26925;
(statearr_26931[(13)] = inst_26866__$1);

return statearr_26931;
})();
if(cljs.core.truth_(inst_26867)){
var statearr_26932_26968 = state_26925__$1;
(statearr_26932_26968[(1)] = (5));

} else {
var statearr_26933_26969 = state_26925__$1;
(statearr_26933_26969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (15))){
var state_26925__$1 = state_26925;
var statearr_26937_26970 = state_26925__$1;
(statearr_26937_26970[(2)] = null);

(statearr_26937_26970[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (21))){
var state_26925__$1 = state_26925;
var statearr_26938_26971 = state_26925__$1;
(statearr_26938_26971[(2)] = null);

(statearr_26938_26971[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (13))){
var inst_26879 = (state_26925[(8)]);
var inst_26877 = (state_26925[(9)]);
var inst_26878 = (state_26925[(11)]);
var inst_26880 = (state_26925[(12)]);
var inst_26887 = (state_26925[(2)]);
var inst_26888 = (inst_26880 + (1));
var tmp26934 = inst_26879;
var tmp26935 = inst_26877;
var tmp26936 = inst_26878;
var inst_26877__$1 = tmp26935;
var inst_26878__$1 = tmp26936;
var inst_26879__$1 = tmp26934;
var inst_26880__$1 = inst_26888;
var state_26925__$1 = (function (){var statearr_26939 = state_26925;
(statearr_26939[(14)] = inst_26887);

(statearr_26939[(8)] = inst_26879__$1);

(statearr_26939[(9)] = inst_26877__$1);

(statearr_26939[(11)] = inst_26878__$1);

(statearr_26939[(12)] = inst_26880__$1);

return statearr_26939;
})();
var statearr_26940_26972 = state_26925__$1;
(statearr_26940_26972[(2)] = null);

(statearr_26940_26972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (22))){
var state_26925__$1 = state_26925;
var statearr_26941_26973 = state_26925__$1;
(statearr_26941_26973[(2)] = null);

(statearr_26941_26973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (6))){
var inst_26866 = (state_26925[(13)]);
var inst_26875 = f.call(null,inst_26866);
var inst_26876 = cljs.core.seq.call(null,inst_26875);
var inst_26877 = inst_26876;
var inst_26878 = null;
var inst_26879 = (0);
var inst_26880 = (0);
var state_26925__$1 = (function (){var statearr_26942 = state_26925;
(statearr_26942[(8)] = inst_26879);

(statearr_26942[(9)] = inst_26877);

(statearr_26942[(11)] = inst_26878);

(statearr_26942[(12)] = inst_26880);

return statearr_26942;
})();
var statearr_26943_26974 = state_26925__$1;
(statearr_26943_26974[(2)] = null);

(statearr_26943_26974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (17))){
var inst_26891 = (state_26925[(7)]);
var inst_26895 = cljs.core.chunk_first.call(null,inst_26891);
var inst_26896 = cljs.core.chunk_rest.call(null,inst_26891);
var inst_26897 = cljs.core.count.call(null,inst_26895);
var inst_26877 = inst_26896;
var inst_26878 = inst_26895;
var inst_26879 = inst_26897;
var inst_26880 = (0);
var state_26925__$1 = (function (){var statearr_26944 = state_26925;
(statearr_26944[(8)] = inst_26879);

(statearr_26944[(9)] = inst_26877);

(statearr_26944[(11)] = inst_26878);

(statearr_26944[(12)] = inst_26880);

return statearr_26944;
})();
var statearr_26945_26975 = state_26925__$1;
(statearr_26945_26975[(2)] = null);

(statearr_26945_26975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (3))){
var inst_26923 = (state_26925[(2)]);
var state_26925__$1 = state_26925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26925__$1,inst_26923);
} else {
if((state_val_26926 === (12))){
var inst_26911 = (state_26925[(2)]);
var state_26925__$1 = state_26925;
var statearr_26946_26976 = state_26925__$1;
(statearr_26946_26976[(2)] = inst_26911);

(statearr_26946_26976[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (2))){
var state_26925__$1 = state_26925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26925__$1,(4),in$);
} else {
if((state_val_26926 === (23))){
var inst_26919 = (state_26925[(2)]);
var state_26925__$1 = state_26925;
var statearr_26947_26977 = state_26925__$1;
(statearr_26947_26977[(2)] = inst_26919);

(statearr_26947_26977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (19))){
var inst_26906 = (state_26925[(2)]);
var state_26925__$1 = state_26925;
var statearr_26948_26978 = state_26925__$1;
(statearr_26948_26978[(2)] = inst_26906);

(statearr_26948_26978[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (11))){
var inst_26891 = (state_26925[(7)]);
var inst_26877 = (state_26925[(9)]);
var inst_26891__$1 = cljs.core.seq.call(null,inst_26877);
var state_26925__$1 = (function (){var statearr_26949 = state_26925;
(statearr_26949[(7)] = inst_26891__$1);

return statearr_26949;
})();
if(inst_26891__$1){
var statearr_26950_26979 = state_26925__$1;
(statearr_26950_26979[(1)] = (14));

} else {
var statearr_26951_26980 = state_26925__$1;
(statearr_26951_26980[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (9))){
var inst_26913 = (state_26925[(2)]);
var inst_26914 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26925__$1 = (function (){var statearr_26952 = state_26925;
(statearr_26952[(15)] = inst_26913);

return statearr_26952;
})();
if(cljs.core.truth_(inst_26914)){
var statearr_26953_26981 = state_26925__$1;
(statearr_26953_26981[(1)] = (21));

} else {
var statearr_26954_26982 = state_26925__$1;
(statearr_26954_26982[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (5))){
var inst_26869 = cljs.core.async.close_BANG_.call(null,out);
var state_26925__$1 = state_26925;
var statearr_26955_26983 = state_26925__$1;
(statearr_26955_26983[(2)] = inst_26869);

(statearr_26955_26983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (14))){
var inst_26891 = (state_26925[(7)]);
var inst_26893 = cljs.core.chunked_seq_QMARK_.call(null,inst_26891);
var state_26925__$1 = state_26925;
if(inst_26893){
var statearr_26956_26984 = state_26925__$1;
(statearr_26956_26984[(1)] = (17));

} else {
var statearr_26957_26985 = state_26925__$1;
(statearr_26957_26985[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (16))){
var inst_26909 = (state_26925[(2)]);
var state_26925__$1 = state_26925;
var statearr_26958_26986 = state_26925__$1;
(statearr_26958_26986[(2)] = inst_26909);

(statearr_26958_26986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (10))){
var inst_26878 = (state_26925[(11)]);
var inst_26880 = (state_26925[(12)]);
var inst_26885 = cljs.core._nth.call(null,inst_26878,inst_26880);
var state_26925__$1 = state_26925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26925__$1,(13),out,inst_26885);
} else {
if((state_val_26926 === (18))){
var inst_26891 = (state_26925[(7)]);
var inst_26900 = cljs.core.first.call(null,inst_26891);
var state_26925__$1 = state_26925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26925__$1,(20),out,inst_26900);
} else {
if((state_val_26926 === (8))){
var inst_26879 = (state_26925[(8)]);
var inst_26880 = (state_26925[(12)]);
var inst_26882 = (inst_26880 < inst_26879);
var inst_26883 = inst_26882;
var state_26925__$1 = state_26925;
if(cljs.core.truth_(inst_26883)){
var statearr_26959_26987 = state_26925__$1;
(statearr_26959_26987[(1)] = (10));

} else {
var statearr_26960_26988 = state_26925__$1;
(statearr_26960_26988[(1)] = (11));

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
});})(c__25309__auto__))
;
return ((function (switch__25219__auto__,c__25309__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25220__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25220__auto____0 = (function (){
var statearr_26961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26961[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25220__auto__);

(statearr_26961[(1)] = (1));

return statearr_26961;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25220__auto____1 = (function (state_26925){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_26925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e26962){if((e26962 instanceof Object)){
var ex__25223__auto__ = e26962;
var statearr_26963_26989 = state_26925;
(statearr_26963_26989[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26990 = state_26925;
state_26925 = G__26990;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25220__auto__ = function(state_26925){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25220__auto____1.call(this,state_26925);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25220__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25220__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto__))
})();
var state__25311__auto__ = (function (){var statearr_26964 = f__25310__auto__.call(null);
(statearr_26964[(6)] = c__25309__auto__);

return statearr_26964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto__))
);

return c__25309__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26992 = arguments.length;
switch (G__26992) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26995 = arguments.length;
switch (G__26995) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26998 = arguments.length;
switch (G__26998) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25309__auto___27045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto___27045,out){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto___27045,out){
return (function (state_27022){
var state_val_27023 = (state_27022[(1)]);
if((state_val_27023 === (7))){
var inst_27017 = (state_27022[(2)]);
var state_27022__$1 = state_27022;
var statearr_27024_27046 = state_27022__$1;
(statearr_27024_27046[(2)] = inst_27017);

(statearr_27024_27046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27023 === (1))){
var inst_26999 = null;
var state_27022__$1 = (function (){var statearr_27025 = state_27022;
(statearr_27025[(7)] = inst_26999);

return statearr_27025;
})();
var statearr_27026_27047 = state_27022__$1;
(statearr_27026_27047[(2)] = null);

(statearr_27026_27047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27023 === (4))){
var inst_27002 = (state_27022[(8)]);
var inst_27002__$1 = (state_27022[(2)]);
var inst_27003 = (inst_27002__$1 == null);
var inst_27004 = cljs.core.not.call(null,inst_27003);
var state_27022__$1 = (function (){var statearr_27027 = state_27022;
(statearr_27027[(8)] = inst_27002__$1);

return statearr_27027;
})();
if(inst_27004){
var statearr_27028_27048 = state_27022__$1;
(statearr_27028_27048[(1)] = (5));

} else {
var statearr_27029_27049 = state_27022__$1;
(statearr_27029_27049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27023 === (6))){
var state_27022__$1 = state_27022;
var statearr_27030_27050 = state_27022__$1;
(statearr_27030_27050[(2)] = null);

(statearr_27030_27050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27023 === (3))){
var inst_27019 = (state_27022[(2)]);
var inst_27020 = cljs.core.async.close_BANG_.call(null,out);
var state_27022__$1 = (function (){var statearr_27031 = state_27022;
(statearr_27031[(9)] = inst_27019);

return statearr_27031;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27022__$1,inst_27020);
} else {
if((state_val_27023 === (2))){
var state_27022__$1 = state_27022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27022__$1,(4),ch);
} else {
if((state_val_27023 === (11))){
var inst_27002 = (state_27022[(8)]);
var inst_27011 = (state_27022[(2)]);
var inst_26999 = inst_27002;
var state_27022__$1 = (function (){var statearr_27032 = state_27022;
(statearr_27032[(10)] = inst_27011);

(statearr_27032[(7)] = inst_26999);

return statearr_27032;
})();
var statearr_27033_27051 = state_27022__$1;
(statearr_27033_27051[(2)] = null);

(statearr_27033_27051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27023 === (9))){
var inst_27002 = (state_27022[(8)]);
var state_27022__$1 = state_27022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27022__$1,(11),out,inst_27002);
} else {
if((state_val_27023 === (5))){
var inst_27002 = (state_27022[(8)]);
var inst_26999 = (state_27022[(7)]);
var inst_27006 = cljs.core._EQ_.call(null,inst_27002,inst_26999);
var state_27022__$1 = state_27022;
if(inst_27006){
var statearr_27035_27052 = state_27022__$1;
(statearr_27035_27052[(1)] = (8));

} else {
var statearr_27036_27053 = state_27022__$1;
(statearr_27036_27053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27023 === (10))){
var inst_27014 = (state_27022[(2)]);
var state_27022__$1 = state_27022;
var statearr_27037_27054 = state_27022__$1;
(statearr_27037_27054[(2)] = inst_27014);

(statearr_27037_27054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27023 === (8))){
var inst_26999 = (state_27022[(7)]);
var tmp27034 = inst_26999;
var inst_26999__$1 = tmp27034;
var state_27022__$1 = (function (){var statearr_27038 = state_27022;
(statearr_27038[(7)] = inst_26999__$1);

return statearr_27038;
})();
var statearr_27039_27055 = state_27022__$1;
(statearr_27039_27055[(2)] = null);

(statearr_27039_27055[(1)] = (2));


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
});})(c__25309__auto___27045,out))
;
return ((function (switch__25219__auto__,c__25309__auto___27045,out){
return (function() {
var cljs$core$async$state_machine__25220__auto__ = null;
var cljs$core$async$state_machine__25220__auto____0 = (function (){
var statearr_27040 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27040[(0)] = cljs$core$async$state_machine__25220__auto__);

(statearr_27040[(1)] = (1));

return statearr_27040;
});
var cljs$core$async$state_machine__25220__auto____1 = (function (state_27022){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_27022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e27041){if((e27041 instanceof Object)){
var ex__25223__auto__ = e27041;
var statearr_27042_27056 = state_27022;
(statearr_27042_27056[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27057 = state_27022;
state_27022 = G__27057;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$state_machine__25220__auto__ = function(state_27022){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25220__auto____1.call(this,state_27022);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25220__auto____0;
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25220__auto____1;
return cljs$core$async$state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto___27045,out))
})();
var state__25311__auto__ = (function (){var statearr_27043 = f__25310__auto__.call(null);
(statearr_27043[(6)] = c__25309__auto___27045);

return statearr_27043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto___27045,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27059 = arguments.length;
switch (G__27059) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25309__auto___27125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto___27125,out){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto___27125,out){
return (function (state_27097){
var state_val_27098 = (state_27097[(1)]);
if((state_val_27098 === (7))){
var inst_27093 = (state_27097[(2)]);
var state_27097__$1 = state_27097;
var statearr_27099_27126 = state_27097__$1;
(statearr_27099_27126[(2)] = inst_27093);

(statearr_27099_27126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (1))){
var inst_27060 = (new Array(n));
var inst_27061 = inst_27060;
var inst_27062 = (0);
var state_27097__$1 = (function (){var statearr_27100 = state_27097;
(statearr_27100[(7)] = inst_27062);

(statearr_27100[(8)] = inst_27061);

return statearr_27100;
})();
var statearr_27101_27127 = state_27097__$1;
(statearr_27101_27127[(2)] = null);

(statearr_27101_27127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (4))){
var inst_27065 = (state_27097[(9)]);
var inst_27065__$1 = (state_27097[(2)]);
var inst_27066 = (inst_27065__$1 == null);
var inst_27067 = cljs.core.not.call(null,inst_27066);
var state_27097__$1 = (function (){var statearr_27102 = state_27097;
(statearr_27102[(9)] = inst_27065__$1);

return statearr_27102;
})();
if(inst_27067){
var statearr_27103_27128 = state_27097__$1;
(statearr_27103_27128[(1)] = (5));

} else {
var statearr_27104_27129 = state_27097__$1;
(statearr_27104_27129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (15))){
var inst_27087 = (state_27097[(2)]);
var state_27097__$1 = state_27097;
var statearr_27105_27130 = state_27097__$1;
(statearr_27105_27130[(2)] = inst_27087);

(statearr_27105_27130[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (13))){
var state_27097__$1 = state_27097;
var statearr_27106_27131 = state_27097__$1;
(statearr_27106_27131[(2)] = null);

(statearr_27106_27131[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (6))){
var inst_27062 = (state_27097[(7)]);
var inst_27083 = (inst_27062 > (0));
var state_27097__$1 = state_27097;
if(cljs.core.truth_(inst_27083)){
var statearr_27107_27132 = state_27097__$1;
(statearr_27107_27132[(1)] = (12));

} else {
var statearr_27108_27133 = state_27097__$1;
(statearr_27108_27133[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (3))){
var inst_27095 = (state_27097[(2)]);
var state_27097__$1 = state_27097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27097__$1,inst_27095);
} else {
if((state_val_27098 === (12))){
var inst_27061 = (state_27097[(8)]);
var inst_27085 = cljs.core.vec.call(null,inst_27061);
var state_27097__$1 = state_27097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27097__$1,(15),out,inst_27085);
} else {
if((state_val_27098 === (2))){
var state_27097__$1 = state_27097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27097__$1,(4),ch);
} else {
if((state_val_27098 === (11))){
var inst_27077 = (state_27097[(2)]);
var inst_27078 = (new Array(n));
var inst_27061 = inst_27078;
var inst_27062 = (0);
var state_27097__$1 = (function (){var statearr_27109 = state_27097;
(statearr_27109[(7)] = inst_27062);

(statearr_27109[(8)] = inst_27061);

(statearr_27109[(10)] = inst_27077);

return statearr_27109;
})();
var statearr_27110_27134 = state_27097__$1;
(statearr_27110_27134[(2)] = null);

(statearr_27110_27134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (9))){
var inst_27061 = (state_27097[(8)]);
var inst_27075 = cljs.core.vec.call(null,inst_27061);
var state_27097__$1 = state_27097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27097__$1,(11),out,inst_27075);
} else {
if((state_val_27098 === (5))){
var inst_27062 = (state_27097[(7)]);
var inst_27061 = (state_27097[(8)]);
var inst_27065 = (state_27097[(9)]);
var inst_27070 = (state_27097[(11)]);
var inst_27069 = (inst_27061[inst_27062] = inst_27065);
var inst_27070__$1 = (inst_27062 + (1));
var inst_27071 = (inst_27070__$1 < n);
var state_27097__$1 = (function (){var statearr_27111 = state_27097;
(statearr_27111[(11)] = inst_27070__$1);

(statearr_27111[(12)] = inst_27069);

return statearr_27111;
})();
if(cljs.core.truth_(inst_27071)){
var statearr_27112_27135 = state_27097__$1;
(statearr_27112_27135[(1)] = (8));

} else {
var statearr_27113_27136 = state_27097__$1;
(statearr_27113_27136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (14))){
var inst_27090 = (state_27097[(2)]);
var inst_27091 = cljs.core.async.close_BANG_.call(null,out);
var state_27097__$1 = (function (){var statearr_27115 = state_27097;
(statearr_27115[(13)] = inst_27090);

return statearr_27115;
})();
var statearr_27116_27137 = state_27097__$1;
(statearr_27116_27137[(2)] = inst_27091);

(statearr_27116_27137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (10))){
var inst_27081 = (state_27097[(2)]);
var state_27097__$1 = state_27097;
var statearr_27117_27138 = state_27097__$1;
(statearr_27117_27138[(2)] = inst_27081);

(statearr_27117_27138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (8))){
var inst_27061 = (state_27097[(8)]);
var inst_27070 = (state_27097[(11)]);
var tmp27114 = inst_27061;
var inst_27061__$1 = tmp27114;
var inst_27062 = inst_27070;
var state_27097__$1 = (function (){var statearr_27118 = state_27097;
(statearr_27118[(7)] = inst_27062);

(statearr_27118[(8)] = inst_27061__$1);

return statearr_27118;
})();
var statearr_27119_27139 = state_27097__$1;
(statearr_27119_27139[(2)] = null);

(statearr_27119_27139[(1)] = (2));


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
});})(c__25309__auto___27125,out))
;
return ((function (switch__25219__auto__,c__25309__auto___27125,out){
return (function() {
var cljs$core$async$state_machine__25220__auto__ = null;
var cljs$core$async$state_machine__25220__auto____0 = (function (){
var statearr_27120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27120[(0)] = cljs$core$async$state_machine__25220__auto__);

(statearr_27120[(1)] = (1));

return statearr_27120;
});
var cljs$core$async$state_machine__25220__auto____1 = (function (state_27097){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_27097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e27121){if((e27121 instanceof Object)){
var ex__25223__auto__ = e27121;
var statearr_27122_27140 = state_27097;
(statearr_27122_27140[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27141 = state_27097;
state_27097 = G__27141;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$state_machine__25220__auto__ = function(state_27097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25220__auto____1.call(this,state_27097);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25220__auto____0;
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25220__auto____1;
return cljs$core$async$state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto___27125,out))
})();
var state__25311__auto__ = (function (){var statearr_27123 = f__25310__auto__.call(null);
(statearr_27123[(6)] = c__25309__auto___27125);

return statearr_27123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto___27125,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27143 = arguments.length;
switch (G__27143) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25309__auto___27213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25309__auto___27213,out){
return (function (){
var f__25310__auto__ = (function (){var switch__25219__auto__ = ((function (c__25309__auto___27213,out){
return (function (state_27185){
var state_val_27186 = (state_27185[(1)]);
if((state_val_27186 === (7))){
var inst_27181 = (state_27185[(2)]);
var state_27185__$1 = state_27185;
var statearr_27187_27214 = state_27185__$1;
(statearr_27187_27214[(2)] = inst_27181);

(statearr_27187_27214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27186 === (1))){
var inst_27144 = [];
var inst_27145 = inst_27144;
var inst_27146 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27185__$1 = (function (){var statearr_27188 = state_27185;
(statearr_27188[(7)] = inst_27146);

(statearr_27188[(8)] = inst_27145);

return statearr_27188;
})();
var statearr_27189_27215 = state_27185__$1;
(statearr_27189_27215[(2)] = null);

(statearr_27189_27215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27186 === (4))){
var inst_27149 = (state_27185[(9)]);
var inst_27149__$1 = (state_27185[(2)]);
var inst_27150 = (inst_27149__$1 == null);
var inst_27151 = cljs.core.not.call(null,inst_27150);
var state_27185__$1 = (function (){var statearr_27190 = state_27185;
(statearr_27190[(9)] = inst_27149__$1);

return statearr_27190;
})();
if(inst_27151){
var statearr_27191_27216 = state_27185__$1;
(statearr_27191_27216[(1)] = (5));

} else {
var statearr_27192_27217 = state_27185__$1;
(statearr_27192_27217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27186 === (15))){
var inst_27175 = (state_27185[(2)]);
var state_27185__$1 = state_27185;
var statearr_27193_27218 = state_27185__$1;
(statearr_27193_27218[(2)] = inst_27175);

(statearr_27193_27218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27186 === (13))){
var state_27185__$1 = state_27185;
var statearr_27194_27219 = state_27185__$1;
(statearr_27194_27219[(2)] = null);

(statearr_27194_27219[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27186 === (6))){
var inst_27145 = (state_27185[(8)]);
var inst_27170 = inst_27145.length;
var inst_27171 = (inst_27170 > (0));
var state_27185__$1 = state_27185;
if(cljs.core.truth_(inst_27171)){
var statearr_27195_27220 = state_27185__$1;
(statearr_27195_27220[(1)] = (12));

} else {
var statearr_27196_27221 = state_27185__$1;
(statearr_27196_27221[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27186 === (3))){
var inst_27183 = (state_27185[(2)]);
var state_27185__$1 = state_27185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27185__$1,inst_27183);
} else {
if((state_val_27186 === (12))){
var inst_27145 = (state_27185[(8)]);
var inst_27173 = cljs.core.vec.call(null,inst_27145);
var state_27185__$1 = state_27185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27185__$1,(15),out,inst_27173);
} else {
if((state_val_27186 === (2))){
var state_27185__$1 = state_27185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27185__$1,(4),ch);
} else {
if((state_val_27186 === (11))){
var inst_27149 = (state_27185[(9)]);
var inst_27153 = (state_27185[(10)]);
var inst_27163 = (state_27185[(2)]);
var inst_27164 = [];
var inst_27165 = inst_27164.push(inst_27149);
var inst_27145 = inst_27164;
var inst_27146 = inst_27153;
var state_27185__$1 = (function (){var statearr_27197 = state_27185;
(statearr_27197[(7)] = inst_27146);

(statearr_27197[(11)] = inst_27163);

(statearr_27197[(8)] = inst_27145);

(statearr_27197[(12)] = inst_27165);

return statearr_27197;
})();
var statearr_27198_27222 = state_27185__$1;
(statearr_27198_27222[(2)] = null);

(statearr_27198_27222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27186 === (9))){
var inst_27145 = (state_27185[(8)]);
var inst_27161 = cljs.core.vec.call(null,inst_27145);
var state_27185__$1 = state_27185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27185__$1,(11),out,inst_27161);
} else {
if((state_val_27186 === (5))){
var inst_27146 = (state_27185[(7)]);
var inst_27149 = (state_27185[(9)]);
var inst_27153 = (state_27185[(10)]);
var inst_27153__$1 = f.call(null,inst_27149);
var inst_27154 = cljs.core._EQ_.call(null,inst_27153__$1,inst_27146);
var inst_27155 = cljs.core.keyword_identical_QMARK_.call(null,inst_27146,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27156 = ((inst_27154) || (inst_27155));
var state_27185__$1 = (function (){var statearr_27199 = state_27185;
(statearr_27199[(10)] = inst_27153__$1);

return statearr_27199;
})();
if(cljs.core.truth_(inst_27156)){
var statearr_27200_27223 = state_27185__$1;
(statearr_27200_27223[(1)] = (8));

} else {
var statearr_27201_27224 = state_27185__$1;
(statearr_27201_27224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27186 === (14))){
var inst_27178 = (state_27185[(2)]);
var inst_27179 = cljs.core.async.close_BANG_.call(null,out);
var state_27185__$1 = (function (){var statearr_27203 = state_27185;
(statearr_27203[(13)] = inst_27178);

return statearr_27203;
})();
var statearr_27204_27225 = state_27185__$1;
(statearr_27204_27225[(2)] = inst_27179);

(statearr_27204_27225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27186 === (10))){
var inst_27168 = (state_27185[(2)]);
var state_27185__$1 = state_27185;
var statearr_27205_27226 = state_27185__$1;
(statearr_27205_27226[(2)] = inst_27168);

(statearr_27205_27226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27186 === (8))){
var inst_27149 = (state_27185[(9)]);
var inst_27145 = (state_27185[(8)]);
var inst_27153 = (state_27185[(10)]);
var inst_27158 = inst_27145.push(inst_27149);
var tmp27202 = inst_27145;
var inst_27145__$1 = tmp27202;
var inst_27146 = inst_27153;
var state_27185__$1 = (function (){var statearr_27206 = state_27185;
(statearr_27206[(7)] = inst_27146);

(statearr_27206[(8)] = inst_27145__$1);

(statearr_27206[(14)] = inst_27158);

return statearr_27206;
})();
var statearr_27207_27227 = state_27185__$1;
(statearr_27207_27227[(2)] = null);

(statearr_27207_27227[(1)] = (2));


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
});})(c__25309__auto___27213,out))
;
return ((function (switch__25219__auto__,c__25309__auto___27213,out){
return (function() {
var cljs$core$async$state_machine__25220__auto__ = null;
var cljs$core$async$state_machine__25220__auto____0 = (function (){
var statearr_27208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27208[(0)] = cljs$core$async$state_machine__25220__auto__);

(statearr_27208[(1)] = (1));

return statearr_27208;
});
var cljs$core$async$state_machine__25220__auto____1 = (function (state_27185){
while(true){
var ret_value__25221__auto__ = (function (){try{while(true){
var result__25222__auto__ = switch__25219__auto__.call(null,state_27185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25222__auto__;
}
break;
}
}catch (e27209){if((e27209 instanceof Object)){
var ex__25223__auto__ = e27209;
var statearr_27210_27228 = state_27185;
(statearr_27210_27228[(5)] = ex__25223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27229 = state_27185;
state_27185 = G__27229;
continue;
} else {
return ret_value__25221__auto__;
}
break;
}
});
cljs$core$async$state_machine__25220__auto__ = function(state_27185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25220__auto____1.call(this,state_27185);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25220__auto____0;
cljs$core$async$state_machine__25220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25220__auto____1;
return cljs$core$async$state_machine__25220__auto__;
})()
;})(switch__25219__auto__,c__25309__auto___27213,out))
})();
var state__25311__auto__ = (function (){var statearr_27211 = f__25310__auto__.call(null);
(statearr_27211[(6)] = c__25309__auto___27213);

return statearr_27211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25311__auto__);
});})(c__25309__auto___27213,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1535397864039
