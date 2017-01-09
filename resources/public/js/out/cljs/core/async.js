// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27127 = [];
var len__25983__auto___27133 = arguments.length;
var i__25984__auto___27134 = (0);
while(true){
if((i__25984__auto___27134 < len__25983__auto___27133)){
args27127.push((arguments[i__25984__auto___27134]));

var G__27135 = (i__25984__auto___27134 + (1));
i__25984__auto___27134 = G__27135;
continue;
} else {
}
break;
}

var G__27129 = args27127.length;
switch (G__27129) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27127.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27130 = (function (f,blockable,meta27131){
this.f = f;
this.blockable = blockable;
this.meta27131 = meta27131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27132,meta27131__$1){
var self__ = this;
var _27132__$1 = this;
return (new cljs.core.async.t_cljs$core$async27130(self__.f,self__.blockable,meta27131__$1));
});

cljs.core.async.t_cljs$core$async27130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27132){
var self__ = this;
var _27132__$1 = this;
return self__.meta27131;
});

cljs.core.async.t_cljs$core$async27130.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27130.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27131","meta27131",1660109521,null)], null);
});

cljs.core.async.t_cljs$core$async27130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27130";

cljs.core.async.t_cljs$core$async27130.cljs$lang$ctorPrWriter = (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async27130");
});

cljs.core.async.__GT_t_cljs$core$async27130 = (function cljs$core$async$__GT_t_cljs$core$async27130(f__$1,blockable__$1,meta27131){
return (new cljs.core.async.t_cljs$core$async27130(f__$1,blockable__$1,meta27131));
});

}

return (new cljs.core.async.t_cljs$core$async27130(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var args27139 = [];
var len__25983__auto___27142 = arguments.length;
var i__25984__auto___27143 = (0);
while(true){
if((i__25984__auto___27143 < len__25983__auto___27142)){
args27139.push((arguments[i__25984__auto___27143]));

var G__27144 = (i__25984__auto___27143 + (1));
i__25984__auto___27143 = G__27144;
continue;
} else {
}
break;
}

var G__27141 = args27139.length;
switch (G__27141) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27139.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args27146 = [];
var len__25983__auto___27149 = arguments.length;
var i__25984__auto___27150 = (0);
while(true){
if((i__25984__auto___27150 < len__25983__auto___27149)){
args27146.push((arguments[i__25984__auto___27150]));

var G__27151 = (i__25984__auto___27150 + (1));
i__25984__auto___27150 = G__27151;
continue;
} else {
}
break;
}

var G__27148 = args27146.length;
switch (G__27148) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27146.length)].join('')));

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
var args27153 = [];
var len__25983__auto___27156 = arguments.length;
var i__25984__auto___27157 = (0);
while(true){
if((i__25984__auto___27157 < len__25983__auto___27156)){
args27153.push((arguments[i__25984__auto___27157]));

var G__27158 = (i__25984__auto___27157 + (1));
i__25984__auto___27157 = G__27158;
continue;
} else {
}
break;
}

var G__27155 = args27153.length;
switch (G__27155) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27153.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27160 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27160);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27160,ret){
return (function (){
return fn1.call(null,val_27160);
});})(val_27160,ret))
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
var args27161 = [];
var len__25983__auto___27164 = arguments.length;
var i__25984__auto___27165 = (0);
while(true){
if((i__25984__auto___27165 < len__25983__auto___27164)){
args27161.push((arguments[i__25984__auto___27165]));

var G__27166 = (i__25984__auto___27165 + (1));
i__25984__auto___27165 = G__27166;
continue;
} else {
}
break;
}

var G__27163 = args27161.length;
switch (G__27163) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27161.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__25793__auto___27168 = n;
var x_27169 = (0);
while(true){
if((x_27169 < n__25793__auto___27168)){
(a[x_27169] = (0));

var G__27170 = (x_27169 + (1));
x_27169 = G__27170;
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

var G__27171 = (i + (1));
i = G__27171;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27175 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27175 = (function (flag,meta27176){
this.flag = flag;
this.meta27176 = meta27176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27177,meta27176__$1){
var self__ = this;
var _27177__$1 = this;
return (new cljs.core.async.t_cljs$core$async27175(self__.flag,meta27176__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27175.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27177){
var self__ = this;
var _27177__$1 = this;
return self__.meta27176;
});})(flag))
;

cljs.core.async.t_cljs$core$async27175.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27175.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27175.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27175.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27175.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27176","meta27176",-1725826133,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27175.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27175";

cljs.core.async.t_cljs$core$async27175.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async27175");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27175 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27175(flag__$1,meta27176){
return (new cljs.core.async.t_cljs$core$async27175(flag__$1,meta27176));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27175(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27181 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27181 = (function (flag,cb,meta27182){
this.flag = flag;
this.cb = cb;
this.meta27182 = meta27182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27183,meta27182__$1){
var self__ = this;
var _27183__$1 = this;
return (new cljs.core.async.t_cljs$core$async27181(self__.flag,self__.cb,meta27182__$1));
});

cljs.core.async.t_cljs$core$async27181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27183){
var self__ = this;
var _27183__$1 = this;
return self__.meta27182;
});

cljs.core.async.t_cljs$core$async27181.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27181.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27182","meta27182",941456655,null)], null);
});

cljs.core.async.t_cljs$core$async27181.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27181";

cljs.core.async.t_cljs$core$async27181.cljs$lang$ctorPrWriter = (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async27181");
});

cljs.core.async.__GT_t_cljs$core$async27181 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27181(flag__$1,cb__$1,meta27182){
return (new cljs.core.async.t_cljs$core$async27181(flag__$1,cb__$1,meta27182));
});

}

return (new cljs.core.async.t_cljs$core$async27181(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27184_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27184_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27185_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27185_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24875__auto__ = wport;
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27186 = (i + (1));
i = G__27186;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24875__auto__ = ret;
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24863__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24863__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24863__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__25990__auto__ = [];
var len__25983__auto___27192 = arguments.length;
var i__25984__auto___27193 = (0);
while(true){
if((i__25984__auto___27193 < len__25983__auto___27192)){
args__25990__auto__.push((arguments[i__25984__auto___27193]));

var G__27194 = (i__25984__auto___27193 + (1));
i__25984__auto___27193 = G__27194;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((1) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25991__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27189){
var map__27190 = p__27189;
var map__27190__$1 = ((((!((map__27190 == null)))?((((map__27190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27190.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27190):map__27190);
var opts = map__27190__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27187){
var G__27188 = cljs.core.first.call(null,seq27187);
var seq27187__$1 = cljs.core.next.call(null,seq27187);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27188,seq27187__$1);
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
var args27195 = [];
var len__25983__auto___27245 = arguments.length;
var i__25984__auto___27246 = (0);
while(true){
if((i__25984__auto___27246 < len__25983__auto___27245)){
args27195.push((arguments[i__25984__auto___27246]));

var G__27247 = (i__25984__auto___27246 + (1));
i__25984__auto___27246 = G__27247;
continue;
} else {
}
break;
}

var G__27197 = args27195.length;
switch (G__27197) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27195.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27082__auto___27249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto___27249){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto___27249){
return (function (state_27221){
var state_val_27222 = (state_27221[(1)]);
if((state_val_27222 === (7))){
var inst_27217 = (state_27221[(2)]);
var state_27221__$1 = state_27221;
var statearr_27223_27250 = state_27221__$1;
(statearr_27223_27250[(2)] = inst_27217);

(statearr_27223_27250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27222 === (1))){
var state_27221__$1 = state_27221;
var statearr_27224_27251 = state_27221__$1;
(statearr_27224_27251[(2)] = null);

(statearr_27224_27251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27222 === (4))){
var inst_27200 = (state_27221[(7)]);
var inst_27200__$1 = (state_27221[(2)]);
var inst_27201 = (inst_27200__$1 == null);
var state_27221__$1 = (function (){var statearr_27225 = state_27221;
(statearr_27225[(7)] = inst_27200__$1);

return statearr_27225;
})();
if(cljs.core.truth_(inst_27201)){
var statearr_27226_27252 = state_27221__$1;
(statearr_27226_27252[(1)] = (5));

} else {
var statearr_27227_27253 = state_27221__$1;
(statearr_27227_27253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27222 === (13))){
var state_27221__$1 = state_27221;
var statearr_27228_27254 = state_27221__$1;
(statearr_27228_27254[(2)] = null);

(statearr_27228_27254[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27222 === (6))){
var inst_27200 = (state_27221[(7)]);
var state_27221__$1 = state_27221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27221__$1,(11),to,inst_27200);
} else {
if((state_val_27222 === (3))){
var inst_27219 = (state_27221[(2)]);
var state_27221__$1 = state_27221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27221__$1,inst_27219);
} else {
if((state_val_27222 === (12))){
var state_27221__$1 = state_27221;
var statearr_27229_27255 = state_27221__$1;
(statearr_27229_27255[(2)] = null);

(statearr_27229_27255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27222 === (2))){
var state_27221__$1 = state_27221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27221__$1,(4),from);
} else {
if((state_val_27222 === (11))){
var inst_27210 = (state_27221[(2)]);
var state_27221__$1 = state_27221;
if(cljs.core.truth_(inst_27210)){
var statearr_27230_27256 = state_27221__$1;
(statearr_27230_27256[(1)] = (12));

} else {
var statearr_27231_27257 = state_27221__$1;
(statearr_27231_27257[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27222 === (9))){
var state_27221__$1 = state_27221;
var statearr_27232_27258 = state_27221__$1;
(statearr_27232_27258[(2)] = null);

(statearr_27232_27258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27222 === (5))){
var state_27221__$1 = state_27221;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27233_27259 = state_27221__$1;
(statearr_27233_27259[(1)] = (8));

} else {
var statearr_27234_27260 = state_27221__$1;
(statearr_27234_27260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27222 === (14))){
var inst_27215 = (state_27221[(2)]);
var state_27221__$1 = state_27221;
var statearr_27235_27261 = state_27221__$1;
(statearr_27235_27261[(2)] = inst_27215);

(statearr_27235_27261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27222 === (10))){
var inst_27207 = (state_27221[(2)]);
var state_27221__$1 = state_27221;
var statearr_27236_27262 = state_27221__$1;
(statearr_27236_27262[(2)] = inst_27207);

(statearr_27236_27262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27222 === (8))){
var inst_27204 = cljs.core.async.close_BANG_.call(null,to);
var state_27221__$1 = state_27221;
var statearr_27237_27263 = state_27221__$1;
(statearr_27237_27263[(2)] = inst_27204);

(statearr_27237_27263[(1)] = (10));


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
});})(c__27082__auto___27249))
;
return ((function (switch__26970__auto__,c__27082__auto___27249){
return (function() {
var cljs$core$async$state_machine__26971__auto__ = null;
var cljs$core$async$state_machine__26971__auto____0 = (function (){
var statearr_27241 = [null,null,null,null,null,null,null,null];
(statearr_27241[(0)] = cljs$core$async$state_machine__26971__auto__);

(statearr_27241[(1)] = (1));

return statearr_27241;
});
var cljs$core$async$state_machine__26971__auto____1 = (function (state_27221){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_27221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e27242){if((e27242 instanceof Object)){
var ex__26974__auto__ = e27242;
var statearr_27243_27264 = state_27221;
(statearr_27243_27264[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27265 = state_27221;
state_27221 = G__27265;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
cljs$core$async$state_machine__26971__auto__ = function(state_27221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26971__auto____1.call(this,state_27221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26971__auto____0;
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26971__auto____1;
return cljs$core$async$state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto___27249))
})();
var state__27084__auto__ = (function (){var statearr_27244 = f__27083__auto__.call(null);
(statearr_27244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto___27249);

return statearr_27244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto___27249))
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
return (function (p__27453){
var vec__27454 = p__27453;
var v = cljs.core.nth.call(null,vec__27454,(0),null);
var p = cljs.core.nth.call(null,vec__27454,(1),null);
var job = vec__27454;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27082__auto___27640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto___27640,res,vec__27454,v,p,job,jobs,results){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto___27640,res,vec__27454,v,p,job,jobs,results){
return (function (state_27461){
var state_val_27462 = (state_27461[(1)]);
if((state_val_27462 === (1))){
var state_27461__$1 = state_27461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27461__$1,(2),res,v);
} else {
if((state_val_27462 === (2))){
var inst_27458 = (state_27461[(2)]);
var inst_27459 = cljs.core.async.close_BANG_.call(null,res);
var state_27461__$1 = (function (){var statearr_27463 = state_27461;
(statearr_27463[(7)] = inst_27458);

return statearr_27463;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27461__$1,inst_27459);
} else {
return null;
}
}
});})(c__27082__auto___27640,res,vec__27454,v,p,job,jobs,results))
;
return ((function (switch__26970__auto__,c__27082__auto___27640,res,vec__27454,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____0 = (function (){
var statearr_27467 = [null,null,null,null,null,null,null,null];
(statearr_27467[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__);

(statearr_27467[(1)] = (1));

return statearr_27467;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____1 = (function (state_27461){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_27461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e27468){if((e27468 instanceof Object)){
var ex__26974__auto__ = e27468;
var statearr_27469_27641 = state_27461;
(statearr_27469_27641[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27642 = state_27461;
state_27461 = G__27642;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__ = function(state_27461){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____1.call(this,state_27461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto___27640,res,vec__27454,v,p,job,jobs,results))
})();
var state__27084__auto__ = (function (){var statearr_27470 = f__27083__auto__.call(null);
(statearr_27470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto___27640);

return statearr_27470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto___27640,res,vec__27454,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27471){
var vec__27472 = p__27471;
var v = cljs.core.nth.call(null,vec__27472,(0),null);
var p = cljs.core.nth.call(null,vec__27472,(1),null);
var job = vec__27472;
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
var n__25793__auto___27643 = n;
var __27644 = (0);
while(true){
if((__27644 < n__25793__auto___27643)){
var G__27475_27645 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27475_27645) {
case "compute":
var c__27082__auto___27647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27644,c__27082__auto___27647,G__27475_27645,n__25793__auto___27643,jobs,results,process,async){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (__27644,c__27082__auto___27647,G__27475_27645,n__25793__auto___27643,jobs,results,process,async){
return (function (state_27488){
var state_val_27489 = (state_27488[(1)]);
if((state_val_27489 === (1))){
var state_27488__$1 = state_27488;
var statearr_27490_27648 = state_27488__$1;
(statearr_27490_27648[(2)] = null);

(statearr_27490_27648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (2))){
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27488__$1,(4),jobs);
} else {
if((state_val_27489 === (3))){
var inst_27486 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27488__$1,inst_27486);
} else {
if((state_val_27489 === (4))){
var inst_27478 = (state_27488[(2)]);
var inst_27479 = process.call(null,inst_27478);
var state_27488__$1 = state_27488;
if(cljs.core.truth_(inst_27479)){
var statearr_27491_27649 = state_27488__$1;
(statearr_27491_27649[(1)] = (5));

} else {
var statearr_27492_27650 = state_27488__$1;
(statearr_27492_27650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (5))){
var state_27488__$1 = state_27488;
var statearr_27493_27651 = state_27488__$1;
(statearr_27493_27651[(2)] = null);

(statearr_27493_27651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (6))){
var state_27488__$1 = state_27488;
var statearr_27494_27652 = state_27488__$1;
(statearr_27494_27652[(2)] = null);

(statearr_27494_27652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (7))){
var inst_27484 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27495_27653 = state_27488__$1;
(statearr_27495_27653[(2)] = inst_27484);

(statearr_27495_27653[(1)] = (3));


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
});})(__27644,c__27082__auto___27647,G__27475_27645,n__25793__auto___27643,jobs,results,process,async))
;
return ((function (__27644,switch__26970__auto__,c__27082__auto___27647,G__27475_27645,n__25793__auto___27643,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____0 = (function (){
var statearr_27499 = [null,null,null,null,null,null,null];
(statearr_27499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__);

(statearr_27499[(1)] = (1));

return statearr_27499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____1 = (function (state_27488){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_27488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e27500){if((e27500 instanceof Object)){
var ex__26974__auto__ = e27500;
var statearr_27501_27654 = state_27488;
(statearr_27501_27654[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27655 = state_27488;
state_27488 = G__27655;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__ = function(state_27488){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____1.call(this,state_27488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__;
})()
;})(__27644,switch__26970__auto__,c__27082__auto___27647,G__27475_27645,n__25793__auto___27643,jobs,results,process,async))
})();
var state__27084__auto__ = (function (){var statearr_27502 = f__27083__auto__.call(null);
(statearr_27502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto___27647);

return statearr_27502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(__27644,c__27082__auto___27647,G__27475_27645,n__25793__auto___27643,jobs,results,process,async))
);


break;
case "async":
var c__27082__auto___27656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27644,c__27082__auto___27656,G__27475_27645,n__25793__auto___27643,jobs,results,process,async){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (__27644,c__27082__auto___27656,G__27475_27645,n__25793__auto___27643,jobs,results,process,async){
return (function (state_27515){
var state_val_27516 = (state_27515[(1)]);
if((state_val_27516 === (1))){
var state_27515__$1 = state_27515;
var statearr_27517_27657 = state_27515__$1;
(statearr_27517_27657[(2)] = null);

(statearr_27517_27657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (2))){
var state_27515__$1 = state_27515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27515__$1,(4),jobs);
} else {
if((state_val_27516 === (3))){
var inst_27513 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27515__$1,inst_27513);
} else {
if((state_val_27516 === (4))){
var inst_27505 = (state_27515[(2)]);
var inst_27506 = async.call(null,inst_27505);
var state_27515__$1 = state_27515;
if(cljs.core.truth_(inst_27506)){
var statearr_27518_27658 = state_27515__$1;
(statearr_27518_27658[(1)] = (5));

} else {
var statearr_27519_27659 = state_27515__$1;
(statearr_27519_27659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (5))){
var state_27515__$1 = state_27515;
var statearr_27520_27660 = state_27515__$1;
(statearr_27520_27660[(2)] = null);

(statearr_27520_27660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (6))){
var state_27515__$1 = state_27515;
var statearr_27521_27661 = state_27515__$1;
(statearr_27521_27661[(2)] = null);

(statearr_27521_27661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (7))){
var inst_27511 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
var statearr_27522_27662 = state_27515__$1;
(statearr_27522_27662[(2)] = inst_27511);

(statearr_27522_27662[(1)] = (3));


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
});})(__27644,c__27082__auto___27656,G__27475_27645,n__25793__auto___27643,jobs,results,process,async))
;
return ((function (__27644,switch__26970__auto__,c__27082__auto___27656,G__27475_27645,n__25793__auto___27643,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____0 = (function (){
var statearr_27526 = [null,null,null,null,null,null,null];
(statearr_27526[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__);

(statearr_27526[(1)] = (1));

return statearr_27526;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____1 = (function (state_27515){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_27515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e27527){if((e27527 instanceof Object)){
var ex__26974__auto__ = e27527;
var statearr_27528_27663 = state_27515;
(statearr_27528_27663[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27664 = state_27515;
state_27515 = G__27664;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__ = function(state_27515){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____1.call(this,state_27515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__;
})()
;})(__27644,switch__26970__auto__,c__27082__auto___27656,G__27475_27645,n__25793__auto___27643,jobs,results,process,async))
})();
var state__27084__auto__ = (function (){var statearr_27529 = f__27083__auto__.call(null);
(statearr_27529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto___27656);

return statearr_27529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(__27644,c__27082__auto___27656,G__27475_27645,n__25793__auto___27643,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27665 = (__27644 + (1));
__27644 = G__27665;
continue;
} else {
}
break;
}

var c__27082__auto___27666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto___27666,jobs,results,process,async){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto___27666,jobs,results,process,async){
return (function (state_27551){
var state_val_27552 = (state_27551[(1)]);
if((state_val_27552 === (1))){
var state_27551__$1 = state_27551;
var statearr_27553_27667 = state_27551__$1;
(statearr_27553_27667[(2)] = null);

(statearr_27553_27667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (2))){
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27551__$1,(4),from);
} else {
if((state_val_27552 === (3))){
var inst_27549 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27551__$1,inst_27549);
} else {
if((state_val_27552 === (4))){
var inst_27532 = (state_27551[(7)]);
var inst_27532__$1 = (state_27551[(2)]);
var inst_27533 = (inst_27532__$1 == null);
var state_27551__$1 = (function (){var statearr_27554 = state_27551;
(statearr_27554[(7)] = inst_27532__$1);

return statearr_27554;
})();
if(cljs.core.truth_(inst_27533)){
var statearr_27555_27668 = state_27551__$1;
(statearr_27555_27668[(1)] = (5));

} else {
var statearr_27556_27669 = state_27551__$1;
(statearr_27556_27669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (5))){
var inst_27535 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27551__$1 = state_27551;
var statearr_27557_27670 = state_27551__$1;
(statearr_27557_27670[(2)] = inst_27535);

(statearr_27557_27670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (6))){
var inst_27537 = (state_27551[(8)]);
var inst_27532 = (state_27551[(7)]);
var inst_27537__$1 = cljs.core.async.chan.call(null,(1));
var inst_27538 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27539 = [inst_27532,inst_27537__$1];
var inst_27540 = (new cljs.core.PersistentVector(null,2,(5),inst_27538,inst_27539,null));
var state_27551__$1 = (function (){var statearr_27558 = state_27551;
(statearr_27558[(8)] = inst_27537__$1);

return statearr_27558;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27551__$1,(8),jobs,inst_27540);
} else {
if((state_val_27552 === (7))){
var inst_27547 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27559_27671 = state_27551__$1;
(statearr_27559_27671[(2)] = inst_27547);

(statearr_27559_27671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (8))){
var inst_27537 = (state_27551[(8)]);
var inst_27542 = (state_27551[(2)]);
var state_27551__$1 = (function (){var statearr_27560 = state_27551;
(statearr_27560[(9)] = inst_27542);

return statearr_27560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27551__$1,(9),results,inst_27537);
} else {
if((state_val_27552 === (9))){
var inst_27544 = (state_27551[(2)]);
var state_27551__$1 = (function (){var statearr_27561 = state_27551;
(statearr_27561[(10)] = inst_27544);

return statearr_27561;
})();
var statearr_27562_27672 = state_27551__$1;
(statearr_27562_27672[(2)] = null);

(statearr_27562_27672[(1)] = (2));


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
});})(c__27082__auto___27666,jobs,results,process,async))
;
return ((function (switch__26970__auto__,c__27082__auto___27666,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____0 = (function (){
var statearr_27566 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27566[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__);

(statearr_27566[(1)] = (1));

return statearr_27566;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____1 = (function (state_27551){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_27551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e27567){if((e27567 instanceof Object)){
var ex__26974__auto__ = e27567;
var statearr_27568_27673 = state_27551;
(statearr_27568_27673[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27674 = state_27551;
state_27551 = G__27674;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__ = function(state_27551){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____1.call(this,state_27551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto___27666,jobs,results,process,async))
})();
var state__27084__auto__ = (function (){var statearr_27569 = f__27083__auto__.call(null);
(statearr_27569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto___27666);

return statearr_27569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto___27666,jobs,results,process,async))
);


var c__27082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto__,jobs,results,process,async){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto__,jobs,results,process,async){
return (function (state_27607){
var state_val_27608 = (state_27607[(1)]);
if((state_val_27608 === (7))){
var inst_27603 = (state_27607[(2)]);
var state_27607__$1 = state_27607;
var statearr_27609_27675 = state_27607__$1;
(statearr_27609_27675[(2)] = inst_27603);

(statearr_27609_27675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27608 === (20))){
var state_27607__$1 = state_27607;
var statearr_27610_27676 = state_27607__$1;
(statearr_27610_27676[(2)] = null);

(statearr_27610_27676[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27608 === (1))){
var state_27607__$1 = state_27607;
var statearr_27611_27677 = state_27607__$1;
(statearr_27611_27677[(2)] = null);

(statearr_27611_27677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27608 === (4))){
var inst_27572 = (state_27607[(7)]);
var inst_27572__$1 = (state_27607[(2)]);
var inst_27573 = (inst_27572__$1 == null);
var state_27607__$1 = (function (){var statearr_27612 = state_27607;
(statearr_27612[(7)] = inst_27572__$1);

return statearr_27612;
})();
if(cljs.core.truth_(inst_27573)){
var statearr_27613_27678 = state_27607__$1;
(statearr_27613_27678[(1)] = (5));

} else {
var statearr_27614_27679 = state_27607__$1;
(statearr_27614_27679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27608 === (15))){
var inst_27585 = (state_27607[(8)]);
var state_27607__$1 = state_27607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27607__$1,(18),to,inst_27585);
} else {
if((state_val_27608 === (21))){
var inst_27598 = (state_27607[(2)]);
var state_27607__$1 = state_27607;
var statearr_27615_27680 = state_27607__$1;
(statearr_27615_27680[(2)] = inst_27598);

(statearr_27615_27680[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27608 === (13))){
var inst_27600 = (state_27607[(2)]);
var state_27607__$1 = (function (){var statearr_27616 = state_27607;
(statearr_27616[(9)] = inst_27600);

return statearr_27616;
})();
var statearr_27617_27681 = state_27607__$1;
(statearr_27617_27681[(2)] = null);

(statearr_27617_27681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27608 === (6))){
var inst_27572 = (state_27607[(7)]);
var state_27607__$1 = state_27607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27607__$1,(11),inst_27572);
} else {
if((state_val_27608 === (17))){
var inst_27593 = (state_27607[(2)]);
var state_27607__$1 = state_27607;
if(cljs.core.truth_(inst_27593)){
var statearr_27618_27682 = state_27607__$1;
(statearr_27618_27682[(1)] = (19));

} else {
var statearr_27619_27683 = state_27607__$1;
(statearr_27619_27683[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27608 === (3))){
var inst_27605 = (state_27607[(2)]);
var state_27607__$1 = state_27607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27607__$1,inst_27605);
} else {
if((state_val_27608 === (12))){
var inst_27582 = (state_27607[(10)]);
var state_27607__$1 = state_27607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27607__$1,(14),inst_27582);
} else {
if((state_val_27608 === (2))){
var state_27607__$1 = state_27607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27607__$1,(4),results);
} else {
if((state_val_27608 === (19))){
var state_27607__$1 = state_27607;
var statearr_27620_27684 = state_27607__$1;
(statearr_27620_27684[(2)] = null);

(statearr_27620_27684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27608 === (11))){
var inst_27582 = (state_27607[(2)]);
var state_27607__$1 = (function (){var statearr_27621 = state_27607;
(statearr_27621[(10)] = inst_27582);

return statearr_27621;
})();
var statearr_27622_27685 = state_27607__$1;
(statearr_27622_27685[(2)] = null);

(statearr_27622_27685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27608 === (9))){
var state_27607__$1 = state_27607;
var statearr_27623_27686 = state_27607__$1;
(statearr_27623_27686[(2)] = null);

(statearr_27623_27686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27608 === (5))){
var state_27607__$1 = state_27607;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27624_27687 = state_27607__$1;
(statearr_27624_27687[(1)] = (8));

} else {
var statearr_27625_27688 = state_27607__$1;
(statearr_27625_27688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27608 === (14))){
var inst_27587 = (state_27607[(11)]);
var inst_27585 = (state_27607[(8)]);
var inst_27585__$1 = (state_27607[(2)]);
var inst_27586 = (inst_27585__$1 == null);
var inst_27587__$1 = cljs.core.not.call(null,inst_27586);
var state_27607__$1 = (function (){var statearr_27626 = state_27607;
(statearr_27626[(11)] = inst_27587__$1);

(statearr_27626[(8)] = inst_27585__$1);

return statearr_27626;
})();
if(inst_27587__$1){
var statearr_27627_27689 = state_27607__$1;
(statearr_27627_27689[(1)] = (15));

} else {
var statearr_27628_27690 = state_27607__$1;
(statearr_27628_27690[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27608 === (16))){
var inst_27587 = (state_27607[(11)]);
var state_27607__$1 = state_27607;
var statearr_27629_27691 = state_27607__$1;
(statearr_27629_27691[(2)] = inst_27587);

(statearr_27629_27691[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27608 === (10))){
var inst_27579 = (state_27607[(2)]);
var state_27607__$1 = state_27607;
var statearr_27630_27692 = state_27607__$1;
(statearr_27630_27692[(2)] = inst_27579);

(statearr_27630_27692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27608 === (18))){
var inst_27590 = (state_27607[(2)]);
var state_27607__$1 = state_27607;
var statearr_27631_27693 = state_27607__$1;
(statearr_27631_27693[(2)] = inst_27590);

(statearr_27631_27693[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27608 === (8))){
var inst_27576 = cljs.core.async.close_BANG_.call(null,to);
var state_27607__$1 = state_27607;
var statearr_27632_27694 = state_27607__$1;
(statearr_27632_27694[(2)] = inst_27576);

(statearr_27632_27694[(1)] = (10));


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
});})(c__27082__auto__,jobs,results,process,async))
;
return ((function (switch__26970__auto__,c__27082__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____0 = (function (){
var statearr_27636 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__);

(statearr_27636[(1)] = (1));

return statearr_27636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____1 = (function (state_27607){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_27607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e27637){if((e27637 instanceof Object)){
var ex__26974__auto__ = e27637;
var statearr_27638_27695 = state_27607;
(statearr_27638_27695[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27696 = state_27607;
state_27607 = G__27696;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__ = function(state_27607){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____1.call(this,state_27607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto__,jobs,results,process,async))
})();
var state__27084__auto__ = (function (){var statearr_27639 = f__27083__auto__.call(null);
(statearr_27639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto__);

return statearr_27639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto__,jobs,results,process,async))
);

return c__27082__auto__;
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
var args27697 = [];
var len__25983__auto___27700 = arguments.length;
var i__25984__auto___27701 = (0);
while(true){
if((i__25984__auto___27701 < len__25983__auto___27700)){
args27697.push((arguments[i__25984__auto___27701]));

var G__27702 = (i__25984__auto___27701 + (1));
i__25984__auto___27701 = G__27702;
continue;
} else {
}
break;
}

var G__27699 = args27697.length;
switch (G__27699) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27697.length)].join('')));

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
var args27704 = [];
var len__25983__auto___27707 = arguments.length;
var i__25984__auto___27708 = (0);
while(true){
if((i__25984__auto___27708 < len__25983__auto___27707)){
args27704.push((arguments[i__25984__auto___27708]));

var G__27709 = (i__25984__auto___27708 + (1));
i__25984__auto___27708 = G__27709;
continue;
} else {
}
break;
}

var G__27706 = args27704.length;
switch (G__27706) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27704.length)].join('')));

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
var args27711 = [];
var len__25983__auto___27764 = arguments.length;
var i__25984__auto___27765 = (0);
while(true){
if((i__25984__auto___27765 < len__25983__auto___27764)){
args27711.push((arguments[i__25984__auto___27765]));

var G__27766 = (i__25984__auto___27765 + (1));
i__25984__auto___27765 = G__27766;
continue;
} else {
}
break;
}

var G__27713 = args27711.length;
switch (G__27713) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27711.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27082__auto___27768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto___27768,tc,fc){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto___27768,tc,fc){
return (function (state_27739){
var state_val_27740 = (state_27739[(1)]);
if((state_val_27740 === (7))){
var inst_27735 = (state_27739[(2)]);
var state_27739__$1 = state_27739;
var statearr_27741_27769 = state_27739__$1;
(statearr_27741_27769[(2)] = inst_27735);

(statearr_27741_27769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (1))){
var state_27739__$1 = state_27739;
var statearr_27742_27770 = state_27739__$1;
(statearr_27742_27770[(2)] = null);

(statearr_27742_27770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (4))){
var inst_27716 = (state_27739[(7)]);
var inst_27716__$1 = (state_27739[(2)]);
var inst_27717 = (inst_27716__$1 == null);
var state_27739__$1 = (function (){var statearr_27743 = state_27739;
(statearr_27743[(7)] = inst_27716__$1);

return statearr_27743;
})();
if(cljs.core.truth_(inst_27717)){
var statearr_27744_27771 = state_27739__$1;
(statearr_27744_27771[(1)] = (5));

} else {
var statearr_27745_27772 = state_27739__$1;
(statearr_27745_27772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (13))){
var state_27739__$1 = state_27739;
var statearr_27746_27773 = state_27739__$1;
(statearr_27746_27773[(2)] = null);

(statearr_27746_27773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (6))){
var inst_27716 = (state_27739[(7)]);
var inst_27722 = p.call(null,inst_27716);
var state_27739__$1 = state_27739;
if(cljs.core.truth_(inst_27722)){
var statearr_27747_27774 = state_27739__$1;
(statearr_27747_27774[(1)] = (9));

} else {
var statearr_27748_27775 = state_27739__$1;
(statearr_27748_27775[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (3))){
var inst_27737 = (state_27739[(2)]);
var state_27739__$1 = state_27739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27739__$1,inst_27737);
} else {
if((state_val_27740 === (12))){
var state_27739__$1 = state_27739;
var statearr_27749_27776 = state_27739__$1;
(statearr_27749_27776[(2)] = null);

(statearr_27749_27776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (2))){
var state_27739__$1 = state_27739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27739__$1,(4),ch);
} else {
if((state_val_27740 === (11))){
var inst_27716 = (state_27739[(7)]);
var inst_27726 = (state_27739[(2)]);
var state_27739__$1 = state_27739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27739__$1,(8),inst_27726,inst_27716);
} else {
if((state_val_27740 === (9))){
var state_27739__$1 = state_27739;
var statearr_27750_27777 = state_27739__$1;
(statearr_27750_27777[(2)] = tc);

(statearr_27750_27777[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (5))){
var inst_27719 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27720 = cljs.core.async.close_BANG_.call(null,fc);
var state_27739__$1 = (function (){var statearr_27751 = state_27739;
(statearr_27751[(8)] = inst_27719);

return statearr_27751;
})();
var statearr_27752_27778 = state_27739__$1;
(statearr_27752_27778[(2)] = inst_27720);

(statearr_27752_27778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (14))){
var inst_27733 = (state_27739[(2)]);
var state_27739__$1 = state_27739;
var statearr_27753_27779 = state_27739__$1;
(statearr_27753_27779[(2)] = inst_27733);

(statearr_27753_27779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (10))){
var state_27739__$1 = state_27739;
var statearr_27754_27780 = state_27739__$1;
(statearr_27754_27780[(2)] = fc);

(statearr_27754_27780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (8))){
var inst_27728 = (state_27739[(2)]);
var state_27739__$1 = state_27739;
if(cljs.core.truth_(inst_27728)){
var statearr_27755_27781 = state_27739__$1;
(statearr_27755_27781[(1)] = (12));

} else {
var statearr_27756_27782 = state_27739__$1;
(statearr_27756_27782[(1)] = (13));

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
});})(c__27082__auto___27768,tc,fc))
;
return ((function (switch__26970__auto__,c__27082__auto___27768,tc,fc){
return (function() {
var cljs$core$async$state_machine__26971__auto__ = null;
var cljs$core$async$state_machine__26971__auto____0 = (function (){
var statearr_27760 = [null,null,null,null,null,null,null,null,null];
(statearr_27760[(0)] = cljs$core$async$state_machine__26971__auto__);

(statearr_27760[(1)] = (1));

return statearr_27760;
});
var cljs$core$async$state_machine__26971__auto____1 = (function (state_27739){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_27739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e27761){if((e27761 instanceof Object)){
var ex__26974__auto__ = e27761;
var statearr_27762_27783 = state_27739;
(statearr_27762_27783[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27784 = state_27739;
state_27739 = G__27784;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
cljs$core$async$state_machine__26971__auto__ = function(state_27739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26971__auto____1.call(this,state_27739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26971__auto____0;
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26971__auto____1;
return cljs$core$async$state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto___27768,tc,fc))
})();
var state__27084__auto__ = (function (){var statearr_27763 = f__27083__auto__.call(null);
(statearr_27763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto___27768);

return statearr_27763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto___27768,tc,fc))
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
var c__27082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto__){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto__){
return (function (state_27848){
var state_val_27849 = (state_27848[(1)]);
if((state_val_27849 === (7))){
var inst_27844 = (state_27848[(2)]);
var state_27848__$1 = state_27848;
var statearr_27850_27871 = state_27848__$1;
(statearr_27850_27871[(2)] = inst_27844);

(statearr_27850_27871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27849 === (1))){
var inst_27828 = init;
var state_27848__$1 = (function (){var statearr_27851 = state_27848;
(statearr_27851[(7)] = inst_27828);

return statearr_27851;
})();
var statearr_27852_27872 = state_27848__$1;
(statearr_27852_27872[(2)] = null);

(statearr_27852_27872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27849 === (4))){
var inst_27831 = (state_27848[(8)]);
var inst_27831__$1 = (state_27848[(2)]);
var inst_27832 = (inst_27831__$1 == null);
var state_27848__$1 = (function (){var statearr_27853 = state_27848;
(statearr_27853[(8)] = inst_27831__$1);

return statearr_27853;
})();
if(cljs.core.truth_(inst_27832)){
var statearr_27854_27873 = state_27848__$1;
(statearr_27854_27873[(1)] = (5));

} else {
var statearr_27855_27874 = state_27848__$1;
(statearr_27855_27874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27849 === (6))){
var inst_27828 = (state_27848[(7)]);
var inst_27831 = (state_27848[(8)]);
var inst_27835 = (state_27848[(9)]);
var inst_27835__$1 = f.call(null,inst_27828,inst_27831);
var inst_27836 = cljs.core.reduced_QMARK_.call(null,inst_27835__$1);
var state_27848__$1 = (function (){var statearr_27856 = state_27848;
(statearr_27856[(9)] = inst_27835__$1);

return statearr_27856;
})();
if(inst_27836){
var statearr_27857_27875 = state_27848__$1;
(statearr_27857_27875[(1)] = (8));

} else {
var statearr_27858_27876 = state_27848__$1;
(statearr_27858_27876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27849 === (3))){
var inst_27846 = (state_27848[(2)]);
var state_27848__$1 = state_27848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27848__$1,inst_27846);
} else {
if((state_val_27849 === (2))){
var state_27848__$1 = state_27848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27848__$1,(4),ch);
} else {
if((state_val_27849 === (9))){
var inst_27835 = (state_27848[(9)]);
var inst_27828 = inst_27835;
var state_27848__$1 = (function (){var statearr_27859 = state_27848;
(statearr_27859[(7)] = inst_27828);

return statearr_27859;
})();
var statearr_27860_27877 = state_27848__$1;
(statearr_27860_27877[(2)] = null);

(statearr_27860_27877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27849 === (5))){
var inst_27828 = (state_27848[(7)]);
var state_27848__$1 = state_27848;
var statearr_27861_27878 = state_27848__$1;
(statearr_27861_27878[(2)] = inst_27828);

(statearr_27861_27878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27849 === (10))){
var inst_27842 = (state_27848[(2)]);
var state_27848__$1 = state_27848;
var statearr_27862_27879 = state_27848__$1;
(statearr_27862_27879[(2)] = inst_27842);

(statearr_27862_27879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27849 === (8))){
var inst_27835 = (state_27848[(9)]);
var inst_27838 = cljs.core.deref.call(null,inst_27835);
var state_27848__$1 = state_27848;
var statearr_27863_27880 = state_27848__$1;
(statearr_27863_27880[(2)] = inst_27838);

(statearr_27863_27880[(1)] = (10));


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
});})(c__27082__auto__))
;
return ((function (switch__26970__auto__,c__27082__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26971__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26971__auto____0 = (function (){
var statearr_27867 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27867[(0)] = cljs$core$async$reduce_$_state_machine__26971__auto__);

(statearr_27867[(1)] = (1));

return statearr_27867;
});
var cljs$core$async$reduce_$_state_machine__26971__auto____1 = (function (state_27848){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_27848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e27868){if((e27868 instanceof Object)){
var ex__26974__auto__ = e27868;
var statearr_27869_27881 = state_27848;
(statearr_27869_27881[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27882 = state_27848;
state_27848 = G__27882;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26971__auto__ = function(state_27848){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26971__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26971__auto____1.call(this,state_27848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26971__auto____0;
cljs$core$async$reduce_$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26971__auto____1;
return cljs$core$async$reduce_$_state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto__))
})();
var state__27084__auto__ = (function (){var statearr_27870 = f__27083__auto__.call(null);
(statearr_27870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto__);

return statearr_27870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto__))
);

return c__27082__auto__;
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
var args27883 = [];
var len__25983__auto___27935 = arguments.length;
var i__25984__auto___27936 = (0);
while(true){
if((i__25984__auto___27936 < len__25983__auto___27935)){
args27883.push((arguments[i__25984__auto___27936]));

var G__27937 = (i__25984__auto___27936 + (1));
i__25984__auto___27936 = G__27937;
continue;
} else {
}
break;
}

var G__27885 = args27883.length;
switch (G__27885) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27883.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto__){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto__){
return (function (state_27910){
var state_val_27911 = (state_27910[(1)]);
if((state_val_27911 === (7))){
var inst_27892 = (state_27910[(2)]);
var state_27910__$1 = state_27910;
var statearr_27912_27939 = state_27910__$1;
(statearr_27912_27939[(2)] = inst_27892);

(statearr_27912_27939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (1))){
var inst_27886 = cljs.core.seq.call(null,coll);
var inst_27887 = inst_27886;
var state_27910__$1 = (function (){var statearr_27913 = state_27910;
(statearr_27913[(7)] = inst_27887);

return statearr_27913;
})();
var statearr_27914_27940 = state_27910__$1;
(statearr_27914_27940[(2)] = null);

(statearr_27914_27940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (4))){
var inst_27887 = (state_27910[(7)]);
var inst_27890 = cljs.core.first.call(null,inst_27887);
var state_27910__$1 = state_27910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27910__$1,(7),ch,inst_27890);
} else {
if((state_val_27911 === (13))){
var inst_27904 = (state_27910[(2)]);
var state_27910__$1 = state_27910;
var statearr_27915_27941 = state_27910__$1;
(statearr_27915_27941[(2)] = inst_27904);

(statearr_27915_27941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (6))){
var inst_27895 = (state_27910[(2)]);
var state_27910__$1 = state_27910;
if(cljs.core.truth_(inst_27895)){
var statearr_27916_27942 = state_27910__$1;
(statearr_27916_27942[(1)] = (8));

} else {
var statearr_27917_27943 = state_27910__$1;
(statearr_27917_27943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (3))){
var inst_27908 = (state_27910[(2)]);
var state_27910__$1 = state_27910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27910__$1,inst_27908);
} else {
if((state_val_27911 === (12))){
var state_27910__$1 = state_27910;
var statearr_27918_27944 = state_27910__$1;
(statearr_27918_27944[(2)] = null);

(statearr_27918_27944[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (2))){
var inst_27887 = (state_27910[(7)]);
var state_27910__$1 = state_27910;
if(cljs.core.truth_(inst_27887)){
var statearr_27919_27945 = state_27910__$1;
(statearr_27919_27945[(1)] = (4));

} else {
var statearr_27920_27946 = state_27910__$1;
(statearr_27920_27946[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (11))){
var inst_27901 = cljs.core.async.close_BANG_.call(null,ch);
var state_27910__$1 = state_27910;
var statearr_27921_27947 = state_27910__$1;
(statearr_27921_27947[(2)] = inst_27901);

(statearr_27921_27947[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (9))){
var state_27910__$1 = state_27910;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27922_27948 = state_27910__$1;
(statearr_27922_27948[(1)] = (11));

} else {
var statearr_27923_27949 = state_27910__$1;
(statearr_27923_27949[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (5))){
var inst_27887 = (state_27910[(7)]);
var state_27910__$1 = state_27910;
var statearr_27924_27950 = state_27910__$1;
(statearr_27924_27950[(2)] = inst_27887);

(statearr_27924_27950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (10))){
var inst_27906 = (state_27910[(2)]);
var state_27910__$1 = state_27910;
var statearr_27925_27951 = state_27910__$1;
(statearr_27925_27951[(2)] = inst_27906);

(statearr_27925_27951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (8))){
var inst_27887 = (state_27910[(7)]);
var inst_27897 = cljs.core.next.call(null,inst_27887);
var inst_27887__$1 = inst_27897;
var state_27910__$1 = (function (){var statearr_27926 = state_27910;
(statearr_27926[(7)] = inst_27887__$1);

return statearr_27926;
})();
var statearr_27927_27952 = state_27910__$1;
(statearr_27927_27952[(2)] = null);

(statearr_27927_27952[(1)] = (2));


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
});})(c__27082__auto__))
;
return ((function (switch__26970__auto__,c__27082__auto__){
return (function() {
var cljs$core$async$state_machine__26971__auto__ = null;
var cljs$core$async$state_machine__26971__auto____0 = (function (){
var statearr_27931 = [null,null,null,null,null,null,null,null];
(statearr_27931[(0)] = cljs$core$async$state_machine__26971__auto__);

(statearr_27931[(1)] = (1));

return statearr_27931;
});
var cljs$core$async$state_machine__26971__auto____1 = (function (state_27910){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_27910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e27932){if((e27932 instanceof Object)){
var ex__26974__auto__ = e27932;
var statearr_27933_27953 = state_27910;
(statearr_27933_27953[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27954 = state_27910;
state_27910 = G__27954;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
cljs$core$async$state_machine__26971__auto__ = function(state_27910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26971__auto____1.call(this,state_27910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26971__auto____0;
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26971__auto____1;
return cljs$core$async$state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto__))
})();
var state__27084__auto__ = (function (){var statearr_27934 = f__27083__auto__.call(null);
(statearr_27934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto__);

return statearr_27934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto__))
);

return c__27082__auto__;
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
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25538__auto__ = (((_ == null))?null:_);
var m__25539__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,_);
} else {
var m__25539__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,_);
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25539__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m,ch);
} else {
var m__25539__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m);
} else {
var m__25539__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async28180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28180 = (function (ch,cs,meta28181){
this.ch = ch;
this.cs = cs;
this.meta28181 = meta28181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28182,meta28181__$1){
var self__ = this;
var _28182__$1 = this;
return (new cljs.core.async.t_cljs$core$async28180(self__.ch,self__.cs,meta28181__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28180.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28182){
var self__ = this;
var _28182__$1 = this;
return self__.meta28181;
});})(cs))
;

cljs.core.async.t_cljs$core$async28180.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28180.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28180.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28180.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28180.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28180.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28180.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28181","meta28181",-1483403295,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28180";

cljs.core.async.t_cljs$core$async28180.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async28180");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28180 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28180(ch__$1,cs__$1,meta28181){
return (new cljs.core.async.t_cljs$core$async28180(ch__$1,cs__$1,meta28181));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28180(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27082__auto___28405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto___28405,cs,m,dchan,dctr,done){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto___28405,cs,m,dchan,dctr,done){
return (function (state_28317){
var state_val_28318 = (state_28317[(1)]);
if((state_val_28318 === (7))){
var inst_28313 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28319_28406 = state_28317__$1;
(statearr_28319_28406[(2)] = inst_28313);

(statearr_28319_28406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (20))){
var inst_28216 = (state_28317[(7)]);
var inst_28228 = cljs.core.first.call(null,inst_28216);
var inst_28229 = cljs.core.nth.call(null,inst_28228,(0),null);
var inst_28230 = cljs.core.nth.call(null,inst_28228,(1),null);
var state_28317__$1 = (function (){var statearr_28320 = state_28317;
(statearr_28320[(8)] = inst_28229);

return statearr_28320;
})();
if(cljs.core.truth_(inst_28230)){
var statearr_28321_28407 = state_28317__$1;
(statearr_28321_28407[(1)] = (22));

} else {
var statearr_28322_28408 = state_28317__$1;
(statearr_28322_28408[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (27))){
var inst_28185 = (state_28317[(9)]);
var inst_28258 = (state_28317[(10)]);
var inst_28260 = (state_28317[(11)]);
var inst_28265 = (state_28317[(12)]);
var inst_28265__$1 = cljs.core._nth.call(null,inst_28258,inst_28260);
var inst_28266 = cljs.core.async.put_BANG_.call(null,inst_28265__$1,inst_28185,done);
var state_28317__$1 = (function (){var statearr_28323 = state_28317;
(statearr_28323[(12)] = inst_28265__$1);

return statearr_28323;
})();
if(cljs.core.truth_(inst_28266)){
var statearr_28324_28409 = state_28317__$1;
(statearr_28324_28409[(1)] = (30));

} else {
var statearr_28325_28410 = state_28317__$1;
(statearr_28325_28410[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (1))){
var state_28317__$1 = state_28317;
var statearr_28326_28411 = state_28317__$1;
(statearr_28326_28411[(2)] = null);

(statearr_28326_28411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (24))){
var inst_28216 = (state_28317[(7)]);
var inst_28235 = (state_28317[(2)]);
var inst_28236 = cljs.core.next.call(null,inst_28216);
var inst_28194 = inst_28236;
var inst_28195 = null;
var inst_28196 = (0);
var inst_28197 = (0);
var state_28317__$1 = (function (){var statearr_28327 = state_28317;
(statearr_28327[(13)] = inst_28196);

(statearr_28327[(14)] = inst_28197);

(statearr_28327[(15)] = inst_28195);

(statearr_28327[(16)] = inst_28235);

(statearr_28327[(17)] = inst_28194);

return statearr_28327;
})();
var statearr_28328_28412 = state_28317__$1;
(statearr_28328_28412[(2)] = null);

(statearr_28328_28412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (39))){
var state_28317__$1 = state_28317;
var statearr_28332_28413 = state_28317__$1;
(statearr_28332_28413[(2)] = null);

(statearr_28332_28413[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (4))){
var inst_28185 = (state_28317[(9)]);
var inst_28185__$1 = (state_28317[(2)]);
var inst_28186 = (inst_28185__$1 == null);
var state_28317__$1 = (function (){var statearr_28333 = state_28317;
(statearr_28333[(9)] = inst_28185__$1);

return statearr_28333;
})();
if(cljs.core.truth_(inst_28186)){
var statearr_28334_28414 = state_28317__$1;
(statearr_28334_28414[(1)] = (5));

} else {
var statearr_28335_28415 = state_28317__$1;
(statearr_28335_28415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (15))){
var inst_28196 = (state_28317[(13)]);
var inst_28197 = (state_28317[(14)]);
var inst_28195 = (state_28317[(15)]);
var inst_28194 = (state_28317[(17)]);
var inst_28212 = (state_28317[(2)]);
var inst_28213 = (inst_28197 + (1));
var tmp28329 = inst_28196;
var tmp28330 = inst_28195;
var tmp28331 = inst_28194;
var inst_28194__$1 = tmp28331;
var inst_28195__$1 = tmp28330;
var inst_28196__$1 = tmp28329;
var inst_28197__$1 = inst_28213;
var state_28317__$1 = (function (){var statearr_28336 = state_28317;
(statearr_28336[(18)] = inst_28212);

(statearr_28336[(13)] = inst_28196__$1);

(statearr_28336[(14)] = inst_28197__$1);

(statearr_28336[(15)] = inst_28195__$1);

(statearr_28336[(17)] = inst_28194__$1);

return statearr_28336;
})();
var statearr_28337_28416 = state_28317__$1;
(statearr_28337_28416[(2)] = null);

(statearr_28337_28416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (21))){
var inst_28239 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28341_28417 = state_28317__$1;
(statearr_28341_28417[(2)] = inst_28239);

(statearr_28341_28417[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (31))){
var inst_28265 = (state_28317[(12)]);
var inst_28269 = done.call(null,null);
var inst_28270 = cljs.core.async.untap_STAR_.call(null,m,inst_28265);
var state_28317__$1 = (function (){var statearr_28342 = state_28317;
(statearr_28342[(19)] = inst_28269);

return statearr_28342;
})();
var statearr_28343_28418 = state_28317__$1;
(statearr_28343_28418[(2)] = inst_28270);

(statearr_28343_28418[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (32))){
var inst_28258 = (state_28317[(10)]);
var inst_28259 = (state_28317[(20)]);
var inst_28257 = (state_28317[(21)]);
var inst_28260 = (state_28317[(11)]);
var inst_28272 = (state_28317[(2)]);
var inst_28273 = (inst_28260 + (1));
var tmp28338 = inst_28258;
var tmp28339 = inst_28259;
var tmp28340 = inst_28257;
var inst_28257__$1 = tmp28340;
var inst_28258__$1 = tmp28338;
var inst_28259__$1 = tmp28339;
var inst_28260__$1 = inst_28273;
var state_28317__$1 = (function (){var statearr_28344 = state_28317;
(statearr_28344[(10)] = inst_28258__$1);

(statearr_28344[(20)] = inst_28259__$1);

(statearr_28344[(21)] = inst_28257__$1);

(statearr_28344[(11)] = inst_28260__$1);

(statearr_28344[(22)] = inst_28272);

return statearr_28344;
})();
var statearr_28345_28419 = state_28317__$1;
(statearr_28345_28419[(2)] = null);

(statearr_28345_28419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (40))){
var inst_28285 = (state_28317[(23)]);
var inst_28289 = done.call(null,null);
var inst_28290 = cljs.core.async.untap_STAR_.call(null,m,inst_28285);
var state_28317__$1 = (function (){var statearr_28346 = state_28317;
(statearr_28346[(24)] = inst_28289);

return statearr_28346;
})();
var statearr_28347_28420 = state_28317__$1;
(statearr_28347_28420[(2)] = inst_28290);

(statearr_28347_28420[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (33))){
var inst_28276 = (state_28317[(25)]);
var inst_28278 = cljs.core.chunked_seq_QMARK_.call(null,inst_28276);
var state_28317__$1 = state_28317;
if(inst_28278){
var statearr_28348_28421 = state_28317__$1;
(statearr_28348_28421[(1)] = (36));

} else {
var statearr_28349_28422 = state_28317__$1;
(statearr_28349_28422[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (13))){
var inst_28206 = (state_28317[(26)]);
var inst_28209 = cljs.core.async.close_BANG_.call(null,inst_28206);
var state_28317__$1 = state_28317;
var statearr_28350_28423 = state_28317__$1;
(statearr_28350_28423[(2)] = inst_28209);

(statearr_28350_28423[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (22))){
var inst_28229 = (state_28317[(8)]);
var inst_28232 = cljs.core.async.close_BANG_.call(null,inst_28229);
var state_28317__$1 = state_28317;
var statearr_28351_28424 = state_28317__$1;
(statearr_28351_28424[(2)] = inst_28232);

(statearr_28351_28424[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (36))){
var inst_28276 = (state_28317[(25)]);
var inst_28280 = cljs.core.chunk_first.call(null,inst_28276);
var inst_28281 = cljs.core.chunk_rest.call(null,inst_28276);
var inst_28282 = cljs.core.count.call(null,inst_28280);
var inst_28257 = inst_28281;
var inst_28258 = inst_28280;
var inst_28259 = inst_28282;
var inst_28260 = (0);
var state_28317__$1 = (function (){var statearr_28352 = state_28317;
(statearr_28352[(10)] = inst_28258);

(statearr_28352[(20)] = inst_28259);

(statearr_28352[(21)] = inst_28257);

(statearr_28352[(11)] = inst_28260);

return statearr_28352;
})();
var statearr_28353_28425 = state_28317__$1;
(statearr_28353_28425[(2)] = null);

(statearr_28353_28425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (41))){
var inst_28276 = (state_28317[(25)]);
var inst_28292 = (state_28317[(2)]);
var inst_28293 = cljs.core.next.call(null,inst_28276);
var inst_28257 = inst_28293;
var inst_28258 = null;
var inst_28259 = (0);
var inst_28260 = (0);
var state_28317__$1 = (function (){var statearr_28354 = state_28317;
(statearr_28354[(10)] = inst_28258);

(statearr_28354[(20)] = inst_28259);

(statearr_28354[(21)] = inst_28257);

(statearr_28354[(11)] = inst_28260);

(statearr_28354[(27)] = inst_28292);

return statearr_28354;
})();
var statearr_28355_28426 = state_28317__$1;
(statearr_28355_28426[(2)] = null);

(statearr_28355_28426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (43))){
var state_28317__$1 = state_28317;
var statearr_28356_28427 = state_28317__$1;
(statearr_28356_28427[(2)] = null);

(statearr_28356_28427[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (29))){
var inst_28301 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28357_28428 = state_28317__$1;
(statearr_28357_28428[(2)] = inst_28301);

(statearr_28357_28428[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (44))){
var inst_28310 = (state_28317[(2)]);
var state_28317__$1 = (function (){var statearr_28358 = state_28317;
(statearr_28358[(28)] = inst_28310);

return statearr_28358;
})();
var statearr_28359_28429 = state_28317__$1;
(statearr_28359_28429[(2)] = null);

(statearr_28359_28429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (6))){
var inst_28249 = (state_28317[(29)]);
var inst_28248 = cljs.core.deref.call(null,cs);
var inst_28249__$1 = cljs.core.keys.call(null,inst_28248);
var inst_28250 = cljs.core.count.call(null,inst_28249__$1);
var inst_28251 = cljs.core.reset_BANG_.call(null,dctr,inst_28250);
var inst_28256 = cljs.core.seq.call(null,inst_28249__$1);
var inst_28257 = inst_28256;
var inst_28258 = null;
var inst_28259 = (0);
var inst_28260 = (0);
var state_28317__$1 = (function (){var statearr_28360 = state_28317;
(statearr_28360[(10)] = inst_28258);

(statearr_28360[(20)] = inst_28259);

(statearr_28360[(21)] = inst_28257);

(statearr_28360[(11)] = inst_28260);

(statearr_28360[(29)] = inst_28249__$1);

(statearr_28360[(30)] = inst_28251);

return statearr_28360;
})();
var statearr_28361_28430 = state_28317__$1;
(statearr_28361_28430[(2)] = null);

(statearr_28361_28430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (28))){
var inst_28276 = (state_28317[(25)]);
var inst_28257 = (state_28317[(21)]);
var inst_28276__$1 = cljs.core.seq.call(null,inst_28257);
var state_28317__$1 = (function (){var statearr_28362 = state_28317;
(statearr_28362[(25)] = inst_28276__$1);

return statearr_28362;
})();
if(inst_28276__$1){
var statearr_28363_28431 = state_28317__$1;
(statearr_28363_28431[(1)] = (33));

} else {
var statearr_28364_28432 = state_28317__$1;
(statearr_28364_28432[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (25))){
var inst_28259 = (state_28317[(20)]);
var inst_28260 = (state_28317[(11)]);
var inst_28262 = (inst_28260 < inst_28259);
var inst_28263 = inst_28262;
var state_28317__$1 = state_28317;
if(cljs.core.truth_(inst_28263)){
var statearr_28365_28433 = state_28317__$1;
(statearr_28365_28433[(1)] = (27));

} else {
var statearr_28366_28434 = state_28317__$1;
(statearr_28366_28434[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (34))){
var state_28317__$1 = state_28317;
var statearr_28367_28435 = state_28317__$1;
(statearr_28367_28435[(2)] = null);

(statearr_28367_28435[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (17))){
var state_28317__$1 = state_28317;
var statearr_28368_28436 = state_28317__$1;
(statearr_28368_28436[(2)] = null);

(statearr_28368_28436[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (3))){
var inst_28315 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28317__$1,inst_28315);
} else {
if((state_val_28318 === (12))){
var inst_28244 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28369_28437 = state_28317__$1;
(statearr_28369_28437[(2)] = inst_28244);

(statearr_28369_28437[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (2))){
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28317__$1,(4),ch);
} else {
if((state_val_28318 === (23))){
var state_28317__$1 = state_28317;
var statearr_28370_28438 = state_28317__$1;
(statearr_28370_28438[(2)] = null);

(statearr_28370_28438[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (35))){
var inst_28299 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28371_28439 = state_28317__$1;
(statearr_28371_28439[(2)] = inst_28299);

(statearr_28371_28439[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (19))){
var inst_28216 = (state_28317[(7)]);
var inst_28220 = cljs.core.chunk_first.call(null,inst_28216);
var inst_28221 = cljs.core.chunk_rest.call(null,inst_28216);
var inst_28222 = cljs.core.count.call(null,inst_28220);
var inst_28194 = inst_28221;
var inst_28195 = inst_28220;
var inst_28196 = inst_28222;
var inst_28197 = (0);
var state_28317__$1 = (function (){var statearr_28372 = state_28317;
(statearr_28372[(13)] = inst_28196);

(statearr_28372[(14)] = inst_28197);

(statearr_28372[(15)] = inst_28195);

(statearr_28372[(17)] = inst_28194);

return statearr_28372;
})();
var statearr_28373_28440 = state_28317__$1;
(statearr_28373_28440[(2)] = null);

(statearr_28373_28440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (11))){
var inst_28216 = (state_28317[(7)]);
var inst_28194 = (state_28317[(17)]);
var inst_28216__$1 = cljs.core.seq.call(null,inst_28194);
var state_28317__$1 = (function (){var statearr_28374 = state_28317;
(statearr_28374[(7)] = inst_28216__$1);

return statearr_28374;
})();
if(inst_28216__$1){
var statearr_28375_28441 = state_28317__$1;
(statearr_28375_28441[(1)] = (16));

} else {
var statearr_28376_28442 = state_28317__$1;
(statearr_28376_28442[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (9))){
var inst_28246 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28377_28443 = state_28317__$1;
(statearr_28377_28443[(2)] = inst_28246);

(statearr_28377_28443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (5))){
var inst_28192 = cljs.core.deref.call(null,cs);
var inst_28193 = cljs.core.seq.call(null,inst_28192);
var inst_28194 = inst_28193;
var inst_28195 = null;
var inst_28196 = (0);
var inst_28197 = (0);
var state_28317__$1 = (function (){var statearr_28378 = state_28317;
(statearr_28378[(13)] = inst_28196);

(statearr_28378[(14)] = inst_28197);

(statearr_28378[(15)] = inst_28195);

(statearr_28378[(17)] = inst_28194);

return statearr_28378;
})();
var statearr_28379_28444 = state_28317__$1;
(statearr_28379_28444[(2)] = null);

(statearr_28379_28444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (14))){
var state_28317__$1 = state_28317;
var statearr_28380_28445 = state_28317__$1;
(statearr_28380_28445[(2)] = null);

(statearr_28380_28445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (45))){
var inst_28307 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28381_28446 = state_28317__$1;
(statearr_28381_28446[(2)] = inst_28307);

(statearr_28381_28446[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (26))){
var inst_28249 = (state_28317[(29)]);
var inst_28303 = (state_28317[(2)]);
var inst_28304 = cljs.core.seq.call(null,inst_28249);
var state_28317__$1 = (function (){var statearr_28382 = state_28317;
(statearr_28382[(31)] = inst_28303);

return statearr_28382;
})();
if(inst_28304){
var statearr_28383_28447 = state_28317__$1;
(statearr_28383_28447[(1)] = (42));

} else {
var statearr_28384_28448 = state_28317__$1;
(statearr_28384_28448[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (16))){
var inst_28216 = (state_28317[(7)]);
var inst_28218 = cljs.core.chunked_seq_QMARK_.call(null,inst_28216);
var state_28317__$1 = state_28317;
if(inst_28218){
var statearr_28385_28449 = state_28317__$1;
(statearr_28385_28449[(1)] = (19));

} else {
var statearr_28386_28450 = state_28317__$1;
(statearr_28386_28450[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (38))){
var inst_28296 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28387_28451 = state_28317__$1;
(statearr_28387_28451[(2)] = inst_28296);

(statearr_28387_28451[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (30))){
var state_28317__$1 = state_28317;
var statearr_28388_28452 = state_28317__$1;
(statearr_28388_28452[(2)] = null);

(statearr_28388_28452[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (10))){
var inst_28197 = (state_28317[(14)]);
var inst_28195 = (state_28317[(15)]);
var inst_28205 = cljs.core._nth.call(null,inst_28195,inst_28197);
var inst_28206 = cljs.core.nth.call(null,inst_28205,(0),null);
var inst_28207 = cljs.core.nth.call(null,inst_28205,(1),null);
var state_28317__$1 = (function (){var statearr_28389 = state_28317;
(statearr_28389[(26)] = inst_28206);

return statearr_28389;
})();
if(cljs.core.truth_(inst_28207)){
var statearr_28390_28453 = state_28317__$1;
(statearr_28390_28453[(1)] = (13));

} else {
var statearr_28391_28454 = state_28317__$1;
(statearr_28391_28454[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (18))){
var inst_28242 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28392_28455 = state_28317__$1;
(statearr_28392_28455[(2)] = inst_28242);

(statearr_28392_28455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (42))){
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28317__$1,(45),dchan);
} else {
if((state_val_28318 === (37))){
var inst_28276 = (state_28317[(25)]);
var inst_28185 = (state_28317[(9)]);
var inst_28285 = (state_28317[(23)]);
var inst_28285__$1 = cljs.core.first.call(null,inst_28276);
var inst_28286 = cljs.core.async.put_BANG_.call(null,inst_28285__$1,inst_28185,done);
var state_28317__$1 = (function (){var statearr_28393 = state_28317;
(statearr_28393[(23)] = inst_28285__$1);

return statearr_28393;
})();
if(cljs.core.truth_(inst_28286)){
var statearr_28394_28456 = state_28317__$1;
(statearr_28394_28456[(1)] = (39));

} else {
var statearr_28395_28457 = state_28317__$1;
(statearr_28395_28457[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (8))){
var inst_28196 = (state_28317[(13)]);
var inst_28197 = (state_28317[(14)]);
var inst_28199 = (inst_28197 < inst_28196);
var inst_28200 = inst_28199;
var state_28317__$1 = state_28317;
if(cljs.core.truth_(inst_28200)){
var statearr_28396_28458 = state_28317__$1;
(statearr_28396_28458[(1)] = (10));

} else {
var statearr_28397_28459 = state_28317__$1;
(statearr_28397_28459[(1)] = (11));

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
});})(c__27082__auto___28405,cs,m,dchan,dctr,done))
;
return ((function (switch__26970__auto__,c__27082__auto___28405,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26971__auto__ = null;
var cljs$core$async$mult_$_state_machine__26971__auto____0 = (function (){
var statearr_28401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28401[(0)] = cljs$core$async$mult_$_state_machine__26971__auto__);

(statearr_28401[(1)] = (1));

return statearr_28401;
});
var cljs$core$async$mult_$_state_machine__26971__auto____1 = (function (state_28317){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_28317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e28402){if((e28402 instanceof Object)){
var ex__26974__auto__ = e28402;
var statearr_28403_28460 = state_28317;
(statearr_28403_28460[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28461 = state_28317;
state_28317 = G__28461;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26971__auto__ = function(state_28317){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26971__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26971__auto____1.call(this,state_28317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26971__auto____0;
cljs$core$async$mult_$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26971__auto____1;
return cljs$core$async$mult_$_state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto___28405,cs,m,dchan,dctr,done))
})();
var state__27084__auto__ = (function (){var statearr_28404 = f__27083__auto__.call(null);
(statearr_28404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto___28405);

return statearr_28404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto___28405,cs,m,dchan,dctr,done))
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
var args28462 = [];
var len__25983__auto___28465 = arguments.length;
var i__25984__auto___28466 = (0);
while(true){
if((i__25984__auto___28466 < len__25983__auto___28465)){
args28462.push((arguments[i__25984__auto___28466]));

var G__28467 = (i__25984__auto___28466 + (1));
i__25984__auto___28466 = G__28467;
continue;
} else {
}
break;
}

var G__28464 = args28462.length;
switch (G__28464) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28462.length)].join('')));

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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m,ch);
} else {
var m__25539__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m,ch);
} else {
var m__25539__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m);
} else {
var m__25539__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m,state_map);
} else {
var m__25539__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m,mode);
} else {
var m__25539__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25990__auto__ = [];
var len__25983__auto___28479 = arguments.length;
var i__25984__auto___28480 = (0);
while(true){
if((i__25984__auto___28480 < len__25983__auto___28479)){
args__25990__auto__.push((arguments[i__25984__auto___28480]));

var G__28481 = (i__25984__auto___28480 + (1));
i__25984__auto___28480 = G__28481;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((3) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25991__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28473){
var map__28474 = p__28473;
var map__28474__$1 = ((((!((map__28474 == null)))?((((map__28474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28474):map__28474);
var opts = map__28474__$1;
var statearr_28476_28482 = state;
(statearr_28476_28482[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28474,map__28474__$1,opts){
return (function (val){
var statearr_28477_28483 = state;
(statearr_28477_28483[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28474,map__28474__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28478_28484 = state;
(statearr_28478_28484[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28469){
var G__28470 = cljs.core.first.call(null,seq28469);
var seq28469__$1 = cljs.core.next.call(null,seq28469);
var G__28471 = cljs.core.first.call(null,seq28469__$1);
var seq28469__$2 = cljs.core.next.call(null,seq28469__$1);
var G__28472 = cljs.core.first.call(null,seq28469__$2);
var seq28469__$3 = cljs.core.next.call(null,seq28469__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28470,G__28471,G__28472,seq28469__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28652 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28652 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28653){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28653 = meta28653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28654,meta28653__$1){
var self__ = this;
var _28654__$1 = this;
return (new cljs.core.async.t_cljs$core$async28652(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28653__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28652.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28654){
var self__ = this;
var _28654__$1 = this;
return self__.meta28653;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28652.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28652.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28652.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28652.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28652.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28652.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28652.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28652.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28652.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28653","meta28653",703352099,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28652.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28652";

cljs.core.async.t_cljs$core$async28652.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async28652");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28652 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28652(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28653){
return (new cljs.core.async.t_cljs$core$async28652(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28653));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28652(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27082__auto___28819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto___28819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto___28819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28756){
var state_val_28757 = (state_28756[(1)]);
if((state_val_28757 === (7))){
var inst_28671 = (state_28756[(2)]);
var state_28756__$1 = state_28756;
var statearr_28758_28820 = state_28756__$1;
(statearr_28758_28820[(2)] = inst_28671);

(statearr_28758_28820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (20))){
var inst_28683 = (state_28756[(7)]);
var state_28756__$1 = state_28756;
var statearr_28759_28821 = state_28756__$1;
(statearr_28759_28821[(2)] = inst_28683);

(statearr_28759_28821[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (27))){
var state_28756__$1 = state_28756;
var statearr_28760_28822 = state_28756__$1;
(statearr_28760_28822[(2)] = null);

(statearr_28760_28822[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (1))){
var inst_28658 = (state_28756[(8)]);
var inst_28658__$1 = calc_state.call(null);
var inst_28660 = (inst_28658__$1 == null);
var inst_28661 = cljs.core.not.call(null,inst_28660);
var state_28756__$1 = (function (){var statearr_28761 = state_28756;
(statearr_28761[(8)] = inst_28658__$1);

return statearr_28761;
})();
if(inst_28661){
var statearr_28762_28823 = state_28756__$1;
(statearr_28762_28823[(1)] = (2));

} else {
var statearr_28763_28824 = state_28756__$1;
(statearr_28763_28824[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (24))){
var inst_28707 = (state_28756[(9)]);
var inst_28730 = (state_28756[(10)]);
var inst_28716 = (state_28756[(11)]);
var inst_28730__$1 = inst_28707.call(null,inst_28716);
var state_28756__$1 = (function (){var statearr_28764 = state_28756;
(statearr_28764[(10)] = inst_28730__$1);

return statearr_28764;
})();
if(cljs.core.truth_(inst_28730__$1)){
var statearr_28765_28825 = state_28756__$1;
(statearr_28765_28825[(1)] = (29));

} else {
var statearr_28766_28826 = state_28756__$1;
(statearr_28766_28826[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (4))){
var inst_28674 = (state_28756[(2)]);
var state_28756__$1 = state_28756;
if(cljs.core.truth_(inst_28674)){
var statearr_28767_28827 = state_28756__$1;
(statearr_28767_28827[(1)] = (8));

} else {
var statearr_28768_28828 = state_28756__$1;
(statearr_28768_28828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (15))){
var inst_28701 = (state_28756[(2)]);
var state_28756__$1 = state_28756;
if(cljs.core.truth_(inst_28701)){
var statearr_28769_28829 = state_28756__$1;
(statearr_28769_28829[(1)] = (19));

} else {
var statearr_28770_28830 = state_28756__$1;
(statearr_28770_28830[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (21))){
var inst_28706 = (state_28756[(12)]);
var inst_28706__$1 = (state_28756[(2)]);
var inst_28707 = cljs.core.get.call(null,inst_28706__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28708 = cljs.core.get.call(null,inst_28706__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28709 = cljs.core.get.call(null,inst_28706__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28756__$1 = (function (){var statearr_28771 = state_28756;
(statearr_28771[(9)] = inst_28707);

(statearr_28771[(12)] = inst_28706__$1);

(statearr_28771[(13)] = inst_28708);

return statearr_28771;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28756__$1,(22),inst_28709);
} else {
if((state_val_28757 === (31))){
var inst_28738 = (state_28756[(2)]);
var state_28756__$1 = state_28756;
if(cljs.core.truth_(inst_28738)){
var statearr_28772_28831 = state_28756__$1;
(statearr_28772_28831[(1)] = (32));

} else {
var statearr_28773_28832 = state_28756__$1;
(statearr_28773_28832[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (32))){
var inst_28715 = (state_28756[(14)]);
var state_28756__$1 = state_28756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28756__$1,(35),out,inst_28715);
} else {
if((state_val_28757 === (33))){
var inst_28706 = (state_28756[(12)]);
var inst_28683 = inst_28706;
var state_28756__$1 = (function (){var statearr_28774 = state_28756;
(statearr_28774[(7)] = inst_28683);

return statearr_28774;
})();
var statearr_28775_28833 = state_28756__$1;
(statearr_28775_28833[(2)] = null);

(statearr_28775_28833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (13))){
var inst_28683 = (state_28756[(7)]);
var inst_28690 = inst_28683.cljs$lang$protocol_mask$partition0$;
var inst_28691 = (inst_28690 & (64));
var inst_28692 = inst_28683.cljs$core$ISeq$;
var inst_28693 = (cljs.core.PROTOCOL_SENTINEL === inst_28692);
var inst_28694 = (inst_28691) || (inst_28693);
var state_28756__$1 = state_28756;
if(cljs.core.truth_(inst_28694)){
var statearr_28776_28834 = state_28756__$1;
(statearr_28776_28834[(1)] = (16));

} else {
var statearr_28777_28835 = state_28756__$1;
(statearr_28777_28835[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (22))){
var inst_28715 = (state_28756[(14)]);
var inst_28716 = (state_28756[(11)]);
var inst_28714 = (state_28756[(2)]);
var inst_28715__$1 = cljs.core.nth.call(null,inst_28714,(0),null);
var inst_28716__$1 = cljs.core.nth.call(null,inst_28714,(1),null);
var inst_28717 = (inst_28715__$1 == null);
var inst_28718 = cljs.core._EQ_.call(null,inst_28716__$1,change);
var inst_28719 = (inst_28717) || (inst_28718);
var state_28756__$1 = (function (){var statearr_28778 = state_28756;
(statearr_28778[(14)] = inst_28715__$1);

(statearr_28778[(11)] = inst_28716__$1);

return statearr_28778;
})();
if(cljs.core.truth_(inst_28719)){
var statearr_28779_28836 = state_28756__$1;
(statearr_28779_28836[(1)] = (23));

} else {
var statearr_28780_28837 = state_28756__$1;
(statearr_28780_28837[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (36))){
var inst_28706 = (state_28756[(12)]);
var inst_28683 = inst_28706;
var state_28756__$1 = (function (){var statearr_28781 = state_28756;
(statearr_28781[(7)] = inst_28683);

return statearr_28781;
})();
var statearr_28782_28838 = state_28756__$1;
(statearr_28782_28838[(2)] = null);

(statearr_28782_28838[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (29))){
var inst_28730 = (state_28756[(10)]);
var state_28756__$1 = state_28756;
var statearr_28783_28839 = state_28756__$1;
(statearr_28783_28839[(2)] = inst_28730);

(statearr_28783_28839[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (6))){
var state_28756__$1 = state_28756;
var statearr_28784_28840 = state_28756__$1;
(statearr_28784_28840[(2)] = false);

(statearr_28784_28840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (28))){
var inst_28726 = (state_28756[(2)]);
var inst_28727 = calc_state.call(null);
var inst_28683 = inst_28727;
var state_28756__$1 = (function (){var statearr_28785 = state_28756;
(statearr_28785[(15)] = inst_28726);

(statearr_28785[(7)] = inst_28683);

return statearr_28785;
})();
var statearr_28786_28841 = state_28756__$1;
(statearr_28786_28841[(2)] = null);

(statearr_28786_28841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (25))){
var inst_28752 = (state_28756[(2)]);
var state_28756__$1 = state_28756;
var statearr_28787_28842 = state_28756__$1;
(statearr_28787_28842[(2)] = inst_28752);

(statearr_28787_28842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (34))){
var inst_28750 = (state_28756[(2)]);
var state_28756__$1 = state_28756;
var statearr_28788_28843 = state_28756__$1;
(statearr_28788_28843[(2)] = inst_28750);

(statearr_28788_28843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (17))){
var state_28756__$1 = state_28756;
var statearr_28789_28844 = state_28756__$1;
(statearr_28789_28844[(2)] = false);

(statearr_28789_28844[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (3))){
var state_28756__$1 = state_28756;
var statearr_28790_28845 = state_28756__$1;
(statearr_28790_28845[(2)] = false);

(statearr_28790_28845[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (12))){
var inst_28754 = (state_28756[(2)]);
var state_28756__$1 = state_28756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28756__$1,inst_28754);
} else {
if((state_val_28757 === (2))){
var inst_28658 = (state_28756[(8)]);
var inst_28663 = inst_28658.cljs$lang$protocol_mask$partition0$;
var inst_28664 = (inst_28663 & (64));
var inst_28665 = inst_28658.cljs$core$ISeq$;
var inst_28666 = (cljs.core.PROTOCOL_SENTINEL === inst_28665);
var inst_28667 = (inst_28664) || (inst_28666);
var state_28756__$1 = state_28756;
if(cljs.core.truth_(inst_28667)){
var statearr_28791_28846 = state_28756__$1;
(statearr_28791_28846[(1)] = (5));

} else {
var statearr_28792_28847 = state_28756__$1;
(statearr_28792_28847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (23))){
var inst_28715 = (state_28756[(14)]);
var inst_28721 = (inst_28715 == null);
var state_28756__$1 = state_28756;
if(cljs.core.truth_(inst_28721)){
var statearr_28793_28848 = state_28756__$1;
(statearr_28793_28848[(1)] = (26));

} else {
var statearr_28794_28849 = state_28756__$1;
(statearr_28794_28849[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (35))){
var inst_28741 = (state_28756[(2)]);
var state_28756__$1 = state_28756;
if(cljs.core.truth_(inst_28741)){
var statearr_28795_28850 = state_28756__$1;
(statearr_28795_28850[(1)] = (36));

} else {
var statearr_28796_28851 = state_28756__$1;
(statearr_28796_28851[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (19))){
var inst_28683 = (state_28756[(7)]);
var inst_28703 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28683);
var state_28756__$1 = state_28756;
var statearr_28797_28852 = state_28756__$1;
(statearr_28797_28852[(2)] = inst_28703);

(statearr_28797_28852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (11))){
var inst_28683 = (state_28756[(7)]);
var inst_28687 = (inst_28683 == null);
var inst_28688 = cljs.core.not.call(null,inst_28687);
var state_28756__$1 = state_28756;
if(inst_28688){
var statearr_28798_28853 = state_28756__$1;
(statearr_28798_28853[(1)] = (13));

} else {
var statearr_28799_28854 = state_28756__$1;
(statearr_28799_28854[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (9))){
var inst_28658 = (state_28756[(8)]);
var state_28756__$1 = state_28756;
var statearr_28800_28855 = state_28756__$1;
(statearr_28800_28855[(2)] = inst_28658);

(statearr_28800_28855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (5))){
var state_28756__$1 = state_28756;
var statearr_28801_28856 = state_28756__$1;
(statearr_28801_28856[(2)] = true);

(statearr_28801_28856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (14))){
var state_28756__$1 = state_28756;
var statearr_28802_28857 = state_28756__$1;
(statearr_28802_28857[(2)] = false);

(statearr_28802_28857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (26))){
var inst_28716 = (state_28756[(11)]);
var inst_28723 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28716);
var state_28756__$1 = state_28756;
var statearr_28803_28858 = state_28756__$1;
(statearr_28803_28858[(2)] = inst_28723);

(statearr_28803_28858[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (16))){
var state_28756__$1 = state_28756;
var statearr_28804_28859 = state_28756__$1;
(statearr_28804_28859[(2)] = true);

(statearr_28804_28859[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (38))){
var inst_28746 = (state_28756[(2)]);
var state_28756__$1 = state_28756;
var statearr_28805_28860 = state_28756__$1;
(statearr_28805_28860[(2)] = inst_28746);

(statearr_28805_28860[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (30))){
var inst_28707 = (state_28756[(9)]);
var inst_28708 = (state_28756[(13)]);
var inst_28716 = (state_28756[(11)]);
var inst_28733 = cljs.core.empty_QMARK_.call(null,inst_28707);
var inst_28734 = inst_28708.call(null,inst_28716);
var inst_28735 = cljs.core.not.call(null,inst_28734);
var inst_28736 = (inst_28733) && (inst_28735);
var state_28756__$1 = state_28756;
var statearr_28806_28861 = state_28756__$1;
(statearr_28806_28861[(2)] = inst_28736);

(statearr_28806_28861[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (10))){
var inst_28658 = (state_28756[(8)]);
var inst_28679 = (state_28756[(2)]);
var inst_28680 = cljs.core.get.call(null,inst_28679,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28681 = cljs.core.get.call(null,inst_28679,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28682 = cljs.core.get.call(null,inst_28679,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28683 = inst_28658;
var state_28756__$1 = (function (){var statearr_28807 = state_28756;
(statearr_28807[(16)] = inst_28680);

(statearr_28807[(17)] = inst_28681);

(statearr_28807[(18)] = inst_28682);

(statearr_28807[(7)] = inst_28683);

return statearr_28807;
})();
var statearr_28808_28862 = state_28756__$1;
(statearr_28808_28862[(2)] = null);

(statearr_28808_28862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (18))){
var inst_28698 = (state_28756[(2)]);
var state_28756__$1 = state_28756;
var statearr_28809_28863 = state_28756__$1;
(statearr_28809_28863[(2)] = inst_28698);

(statearr_28809_28863[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (37))){
var state_28756__$1 = state_28756;
var statearr_28810_28864 = state_28756__$1;
(statearr_28810_28864[(2)] = null);

(statearr_28810_28864[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28757 === (8))){
var inst_28658 = (state_28756[(8)]);
var inst_28676 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28658);
var state_28756__$1 = state_28756;
var statearr_28811_28865 = state_28756__$1;
(statearr_28811_28865[(2)] = inst_28676);

(statearr_28811_28865[(1)] = (10));


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
});})(c__27082__auto___28819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26970__auto__,c__27082__auto___28819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26971__auto__ = null;
var cljs$core$async$mix_$_state_machine__26971__auto____0 = (function (){
var statearr_28815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28815[(0)] = cljs$core$async$mix_$_state_machine__26971__auto__);

(statearr_28815[(1)] = (1));

return statearr_28815;
});
var cljs$core$async$mix_$_state_machine__26971__auto____1 = (function (state_28756){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_28756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e28816){if((e28816 instanceof Object)){
var ex__26974__auto__ = e28816;
var statearr_28817_28866 = state_28756;
(statearr_28817_28866[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28867 = state_28756;
state_28756 = G__28867;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26971__auto__ = function(state_28756){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26971__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26971__auto____1.call(this,state_28756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26971__auto____0;
cljs$core$async$mix_$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26971__auto____1;
return cljs$core$async$mix_$_state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto___28819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27084__auto__ = (function (){var statearr_28818 = f__27083__auto__.call(null);
(statearr_28818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto___28819);

return statearr_28818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto___28819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25538__auto__ = (((p == null))?null:p);
var m__25539__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25539__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25538__auto__ = (((p == null))?null:p);
var m__25539__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,p,v,ch);
} else {
var m__25539__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28868 = [];
var len__25983__auto___28871 = arguments.length;
var i__25984__auto___28872 = (0);
while(true){
if((i__25984__auto___28872 < len__25983__auto___28871)){
args28868.push((arguments[i__25984__auto___28872]));

var G__28873 = (i__25984__auto___28872 + (1));
i__25984__auto___28872 = G__28873;
continue;
} else {
}
break;
}

var G__28870 = args28868.length;
switch (G__28870) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28868.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25538__auto__ = (((p == null))?null:p);
var m__25539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,p);
} else {
var m__25539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25538__auto__ = (((p == null))?null:p);
var m__25539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,p,v);
} else {
var m__25539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,p,v);
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
var args28876 = [];
var len__25983__auto___29001 = arguments.length;
var i__25984__auto___29002 = (0);
while(true){
if((i__25984__auto___29002 < len__25983__auto___29001)){
args28876.push((arguments[i__25984__auto___29002]));

var G__29003 = (i__25984__auto___29002 + (1));
i__25984__auto___29002 = G__29003;
continue;
} else {
}
break;
}

var G__28878 = args28876.length;
switch (G__28878) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28876.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24875__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24875__auto__,mults){
return (function (p1__28875_SHARP_){
if(cljs.core.truth_(p1__28875_SHARP_.call(null,topic))){
return p1__28875_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28875_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24875__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28879 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28879 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28880){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28880 = meta28880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28881,meta28880__$1){
var self__ = this;
var _28881__$1 = this;
return (new cljs.core.async.t_cljs$core$async28879(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28880__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28879.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28881){
var self__ = this;
var _28881__$1 = this;
return self__.meta28880;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28879.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28879.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28879.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28879.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28879.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28879.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28879.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28879.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28880","meta28880",692528787,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28879.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28879";

cljs.core.async.t_cljs$core$async28879.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async28879");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28879 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28879(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28880){
return (new cljs.core.async.t_cljs$core$async28879(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28880));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28879(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27082__auto___29005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto___29005,mults,ensure_mult,p){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto___29005,mults,ensure_mult,p){
return (function (state_28953){
var state_val_28954 = (state_28953[(1)]);
if((state_val_28954 === (7))){
var inst_28949 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
var statearr_28955_29006 = state_28953__$1;
(statearr_28955_29006[(2)] = inst_28949);

(statearr_28955_29006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (20))){
var state_28953__$1 = state_28953;
var statearr_28956_29007 = state_28953__$1;
(statearr_28956_29007[(2)] = null);

(statearr_28956_29007[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (1))){
var state_28953__$1 = state_28953;
var statearr_28957_29008 = state_28953__$1;
(statearr_28957_29008[(2)] = null);

(statearr_28957_29008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (24))){
var inst_28932 = (state_28953[(7)]);
var inst_28941 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28932);
var state_28953__$1 = state_28953;
var statearr_28958_29009 = state_28953__$1;
(statearr_28958_29009[(2)] = inst_28941);

(statearr_28958_29009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (4))){
var inst_28884 = (state_28953[(8)]);
var inst_28884__$1 = (state_28953[(2)]);
var inst_28885 = (inst_28884__$1 == null);
var state_28953__$1 = (function (){var statearr_28959 = state_28953;
(statearr_28959[(8)] = inst_28884__$1);

return statearr_28959;
})();
if(cljs.core.truth_(inst_28885)){
var statearr_28960_29010 = state_28953__$1;
(statearr_28960_29010[(1)] = (5));

} else {
var statearr_28961_29011 = state_28953__$1;
(statearr_28961_29011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (15))){
var inst_28926 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
var statearr_28962_29012 = state_28953__$1;
(statearr_28962_29012[(2)] = inst_28926);

(statearr_28962_29012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (21))){
var inst_28946 = (state_28953[(2)]);
var state_28953__$1 = (function (){var statearr_28963 = state_28953;
(statearr_28963[(9)] = inst_28946);

return statearr_28963;
})();
var statearr_28964_29013 = state_28953__$1;
(statearr_28964_29013[(2)] = null);

(statearr_28964_29013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (13))){
var inst_28908 = (state_28953[(10)]);
var inst_28910 = cljs.core.chunked_seq_QMARK_.call(null,inst_28908);
var state_28953__$1 = state_28953;
if(inst_28910){
var statearr_28965_29014 = state_28953__$1;
(statearr_28965_29014[(1)] = (16));

} else {
var statearr_28966_29015 = state_28953__$1;
(statearr_28966_29015[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (22))){
var inst_28938 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
if(cljs.core.truth_(inst_28938)){
var statearr_28967_29016 = state_28953__$1;
(statearr_28967_29016[(1)] = (23));

} else {
var statearr_28968_29017 = state_28953__$1;
(statearr_28968_29017[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (6))){
var inst_28884 = (state_28953[(8)]);
var inst_28934 = (state_28953[(11)]);
var inst_28932 = (state_28953[(7)]);
var inst_28932__$1 = topic_fn.call(null,inst_28884);
var inst_28933 = cljs.core.deref.call(null,mults);
var inst_28934__$1 = cljs.core.get.call(null,inst_28933,inst_28932__$1);
var state_28953__$1 = (function (){var statearr_28969 = state_28953;
(statearr_28969[(11)] = inst_28934__$1);

(statearr_28969[(7)] = inst_28932__$1);

return statearr_28969;
})();
if(cljs.core.truth_(inst_28934__$1)){
var statearr_28970_29018 = state_28953__$1;
(statearr_28970_29018[(1)] = (19));

} else {
var statearr_28971_29019 = state_28953__$1;
(statearr_28971_29019[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (25))){
var inst_28943 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
var statearr_28972_29020 = state_28953__$1;
(statearr_28972_29020[(2)] = inst_28943);

(statearr_28972_29020[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (17))){
var inst_28908 = (state_28953[(10)]);
var inst_28917 = cljs.core.first.call(null,inst_28908);
var inst_28918 = cljs.core.async.muxch_STAR_.call(null,inst_28917);
var inst_28919 = cljs.core.async.close_BANG_.call(null,inst_28918);
var inst_28920 = cljs.core.next.call(null,inst_28908);
var inst_28894 = inst_28920;
var inst_28895 = null;
var inst_28896 = (0);
var inst_28897 = (0);
var state_28953__$1 = (function (){var statearr_28973 = state_28953;
(statearr_28973[(12)] = inst_28897);

(statearr_28973[(13)] = inst_28895);

(statearr_28973[(14)] = inst_28896);

(statearr_28973[(15)] = inst_28894);

(statearr_28973[(16)] = inst_28919);

return statearr_28973;
})();
var statearr_28974_29021 = state_28953__$1;
(statearr_28974_29021[(2)] = null);

(statearr_28974_29021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (3))){
var inst_28951 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28953__$1,inst_28951);
} else {
if((state_val_28954 === (12))){
var inst_28928 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
var statearr_28975_29022 = state_28953__$1;
(statearr_28975_29022[(2)] = inst_28928);

(statearr_28975_29022[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (2))){
var state_28953__$1 = state_28953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28953__$1,(4),ch);
} else {
if((state_val_28954 === (23))){
var state_28953__$1 = state_28953;
var statearr_28976_29023 = state_28953__$1;
(statearr_28976_29023[(2)] = null);

(statearr_28976_29023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (19))){
var inst_28884 = (state_28953[(8)]);
var inst_28934 = (state_28953[(11)]);
var inst_28936 = cljs.core.async.muxch_STAR_.call(null,inst_28934);
var state_28953__$1 = state_28953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28953__$1,(22),inst_28936,inst_28884);
} else {
if((state_val_28954 === (11))){
var inst_28908 = (state_28953[(10)]);
var inst_28894 = (state_28953[(15)]);
var inst_28908__$1 = cljs.core.seq.call(null,inst_28894);
var state_28953__$1 = (function (){var statearr_28977 = state_28953;
(statearr_28977[(10)] = inst_28908__$1);

return statearr_28977;
})();
if(inst_28908__$1){
var statearr_28978_29024 = state_28953__$1;
(statearr_28978_29024[(1)] = (13));

} else {
var statearr_28979_29025 = state_28953__$1;
(statearr_28979_29025[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (9))){
var inst_28930 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
var statearr_28980_29026 = state_28953__$1;
(statearr_28980_29026[(2)] = inst_28930);

(statearr_28980_29026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (5))){
var inst_28891 = cljs.core.deref.call(null,mults);
var inst_28892 = cljs.core.vals.call(null,inst_28891);
var inst_28893 = cljs.core.seq.call(null,inst_28892);
var inst_28894 = inst_28893;
var inst_28895 = null;
var inst_28896 = (0);
var inst_28897 = (0);
var state_28953__$1 = (function (){var statearr_28981 = state_28953;
(statearr_28981[(12)] = inst_28897);

(statearr_28981[(13)] = inst_28895);

(statearr_28981[(14)] = inst_28896);

(statearr_28981[(15)] = inst_28894);

return statearr_28981;
})();
var statearr_28982_29027 = state_28953__$1;
(statearr_28982_29027[(2)] = null);

(statearr_28982_29027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (14))){
var state_28953__$1 = state_28953;
var statearr_28986_29028 = state_28953__$1;
(statearr_28986_29028[(2)] = null);

(statearr_28986_29028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (16))){
var inst_28908 = (state_28953[(10)]);
var inst_28912 = cljs.core.chunk_first.call(null,inst_28908);
var inst_28913 = cljs.core.chunk_rest.call(null,inst_28908);
var inst_28914 = cljs.core.count.call(null,inst_28912);
var inst_28894 = inst_28913;
var inst_28895 = inst_28912;
var inst_28896 = inst_28914;
var inst_28897 = (0);
var state_28953__$1 = (function (){var statearr_28987 = state_28953;
(statearr_28987[(12)] = inst_28897);

(statearr_28987[(13)] = inst_28895);

(statearr_28987[(14)] = inst_28896);

(statearr_28987[(15)] = inst_28894);

return statearr_28987;
})();
var statearr_28988_29029 = state_28953__$1;
(statearr_28988_29029[(2)] = null);

(statearr_28988_29029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (10))){
var inst_28897 = (state_28953[(12)]);
var inst_28895 = (state_28953[(13)]);
var inst_28896 = (state_28953[(14)]);
var inst_28894 = (state_28953[(15)]);
var inst_28902 = cljs.core._nth.call(null,inst_28895,inst_28897);
var inst_28903 = cljs.core.async.muxch_STAR_.call(null,inst_28902);
var inst_28904 = cljs.core.async.close_BANG_.call(null,inst_28903);
var inst_28905 = (inst_28897 + (1));
var tmp28983 = inst_28895;
var tmp28984 = inst_28896;
var tmp28985 = inst_28894;
var inst_28894__$1 = tmp28985;
var inst_28895__$1 = tmp28983;
var inst_28896__$1 = tmp28984;
var inst_28897__$1 = inst_28905;
var state_28953__$1 = (function (){var statearr_28989 = state_28953;
(statearr_28989[(12)] = inst_28897__$1);

(statearr_28989[(13)] = inst_28895__$1);

(statearr_28989[(14)] = inst_28896__$1);

(statearr_28989[(17)] = inst_28904);

(statearr_28989[(15)] = inst_28894__$1);

return statearr_28989;
})();
var statearr_28990_29030 = state_28953__$1;
(statearr_28990_29030[(2)] = null);

(statearr_28990_29030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (18))){
var inst_28923 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
var statearr_28991_29031 = state_28953__$1;
(statearr_28991_29031[(2)] = inst_28923);

(statearr_28991_29031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (8))){
var inst_28897 = (state_28953[(12)]);
var inst_28896 = (state_28953[(14)]);
var inst_28899 = (inst_28897 < inst_28896);
var inst_28900 = inst_28899;
var state_28953__$1 = state_28953;
if(cljs.core.truth_(inst_28900)){
var statearr_28992_29032 = state_28953__$1;
(statearr_28992_29032[(1)] = (10));

} else {
var statearr_28993_29033 = state_28953__$1;
(statearr_28993_29033[(1)] = (11));

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
});})(c__27082__auto___29005,mults,ensure_mult,p))
;
return ((function (switch__26970__auto__,c__27082__auto___29005,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26971__auto__ = null;
var cljs$core$async$state_machine__26971__auto____0 = (function (){
var statearr_28997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28997[(0)] = cljs$core$async$state_machine__26971__auto__);

(statearr_28997[(1)] = (1));

return statearr_28997;
});
var cljs$core$async$state_machine__26971__auto____1 = (function (state_28953){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_28953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e28998){if((e28998 instanceof Object)){
var ex__26974__auto__ = e28998;
var statearr_28999_29034 = state_28953;
(statearr_28999_29034[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29035 = state_28953;
state_28953 = G__29035;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
cljs$core$async$state_machine__26971__auto__ = function(state_28953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26971__auto____1.call(this,state_28953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26971__auto____0;
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26971__auto____1;
return cljs$core$async$state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto___29005,mults,ensure_mult,p))
})();
var state__27084__auto__ = (function (){var statearr_29000 = f__27083__auto__.call(null);
(statearr_29000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto___29005);

return statearr_29000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto___29005,mults,ensure_mult,p))
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
var args29036 = [];
var len__25983__auto___29039 = arguments.length;
var i__25984__auto___29040 = (0);
while(true){
if((i__25984__auto___29040 < len__25983__auto___29039)){
args29036.push((arguments[i__25984__auto___29040]));

var G__29041 = (i__25984__auto___29040 + (1));
i__25984__auto___29040 = G__29041;
continue;
} else {
}
break;
}

var G__29038 = args29036.length;
switch (G__29038) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29036.length)].join('')));

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
var args29043 = [];
var len__25983__auto___29046 = arguments.length;
var i__25984__auto___29047 = (0);
while(true){
if((i__25984__auto___29047 < len__25983__auto___29046)){
args29043.push((arguments[i__25984__auto___29047]));

var G__29048 = (i__25984__auto___29047 + (1));
i__25984__auto___29047 = G__29048;
continue;
} else {
}
break;
}

var G__29045 = args29043.length;
switch (G__29045) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29043.length)].join('')));

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
var args29050 = [];
var len__25983__auto___29121 = arguments.length;
var i__25984__auto___29122 = (0);
while(true){
if((i__25984__auto___29122 < len__25983__auto___29121)){
args29050.push((arguments[i__25984__auto___29122]));

var G__29123 = (i__25984__auto___29122 + (1));
i__25984__auto___29122 = G__29123;
continue;
} else {
}
break;
}

var G__29052 = args29050.length;
switch (G__29052) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29050.length)].join('')));

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
var c__27082__auto___29125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto___29125,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto___29125,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29091){
var state_val_29092 = (state_29091[(1)]);
if((state_val_29092 === (7))){
var state_29091__$1 = state_29091;
var statearr_29093_29126 = state_29091__$1;
(statearr_29093_29126[(2)] = null);

(statearr_29093_29126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29092 === (1))){
var state_29091__$1 = state_29091;
var statearr_29094_29127 = state_29091__$1;
(statearr_29094_29127[(2)] = null);

(statearr_29094_29127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29092 === (4))){
var inst_29055 = (state_29091[(7)]);
var inst_29057 = (inst_29055 < cnt);
var state_29091__$1 = state_29091;
if(cljs.core.truth_(inst_29057)){
var statearr_29095_29128 = state_29091__$1;
(statearr_29095_29128[(1)] = (6));

} else {
var statearr_29096_29129 = state_29091__$1;
(statearr_29096_29129[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29092 === (15))){
var inst_29087 = (state_29091[(2)]);
var state_29091__$1 = state_29091;
var statearr_29097_29130 = state_29091__$1;
(statearr_29097_29130[(2)] = inst_29087);

(statearr_29097_29130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29092 === (13))){
var inst_29080 = cljs.core.async.close_BANG_.call(null,out);
var state_29091__$1 = state_29091;
var statearr_29098_29131 = state_29091__$1;
(statearr_29098_29131[(2)] = inst_29080);

(statearr_29098_29131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29092 === (6))){
var state_29091__$1 = state_29091;
var statearr_29099_29132 = state_29091__$1;
(statearr_29099_29132[(2)] = null);

(statearr_29099_29132[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29092 === (3))){
var inst_29089 = (state_29091[(2)]);
var state_29091__$1 = state_29091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29091__$1,inst_29089);
} else {
if((state_val_29092 === (12))){
var inst_29077 = (state_29091[(8)]);
var inst_29077__$1 = (state_29091[(2)]);
var inst_29078 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29077__$1);
var state_29091__$1 = (function (){var statearr_29100 = state_29091;
(statearr_29100[(8)] = inst_29077__$1);

return statearr_29100;
})();
if(cljs.core.truth_(inst_29078)){
var statearr_29101_29133 = state_29091__$1;
(statearr_29101_29133[(1)] = (13));

} else {
var statearr_29102_29134 = state_29091__$1;
(statearr_29102_29134[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29092 === (2))){
var inst_29054 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29055 = (0);
var state_29091__$1 = (function (){var statearr_29103 = state_29091;
(statearr_29103[(7)] = inst_29055);

(statearr_29103[(9)] = inst_29054);

return statearr_29103;
})();
var statearr_29104_29135 = state_29091__$1;
(statearr_29104_29135[(2)] = null);

(statearr_29104_29135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29092 === (11))){
var inst_29055 = (state_29091[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29091,(10),Object,null,(9));
var inst_29064 = chs__$1.call(null,inst_29055);
var inst_29065 = done.call(null,inst_29055);
var inst_29066 = cljs.core.async.take_BANG_.call(null,inst_29064,inst_29065);
var state_29091__$1 = state_29091;
var statearr_29105_29136 = state_29091__$1;
(statearr_29105_29136[(2)] = inst_29066);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29091__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29092 === (9))){
var inst_29055 = (state_29091[(7)]);
var inst_29068 = (state_29091[(2)]);
var inst_29069 = (inst_29055 + (1));
var inst_29055__$1 = inst_29069;
var state_29091__$1 = (function (){var statearr_29106 = state_29091;
(statearr_29106[(10)] = inst_29068);

(statearr_29106[(7)] = inst_29055__$1);

return statearr_29106;
})();
var statearr_29107_29137 = state_29091__$1;
(statearr_29107_29137[(2)] = null);

(statearr_29107_29137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29092 === (5))){
var inst_29075 = (state_29091[(2)]);
var state_29091__$1 = (function (){var statearr_29108 = state_29091;
(statearr_29108[(11)] = inst_29075);

return statearr_29108;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29091__$1,(12),dchan);
} else {
if((state_val_29092 === (14))){
var inst_29077 = (state_29091[(8)]);
var inst_29082 = cljs.core.apply.call(null,f,inst_29077);
var state_29091__$1 = state_29091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29091__$1,(16),out,inst_29082);
} else {
if((state_val_29092 === (16))){
var inst_29084 = (state_29091[(2)]);
var state_29091__$1 = (function (){var statearr_29109 = state_29091;
(statearr_29109[(12)] = inst_29084);

return statearr_29109;
})();
var statearr_29110_29138 = state_29091__$1;
(statearr_29110_29138[(2)] = null);

(statearr_29110_29138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29092 === (10))){
var inst_29059 = (state_29091[(2)]);
var inst_29060 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29091__$1 = (function (){var statearr_29111 = state_29091;
(statearr_29111[(13)] = inst_29059);

return statearr_29111;
})();
var statearr_29112_29139 = state_29091__$1;
(statearr_29112_29139[(2)] = inst_29060);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29091__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29092 === (8))){
var inst_29073 = (state_29091[(2)]);
var state_29091__$1 = state_29091;
var statearr_29113_29140 = state_29091__$1;
(statearr_29113_29140[(2)] = inst_29073);

(statearr_29113_29140[(1)] = (5));


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
});})(c__27082__auto___29125,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26970__auto__,c__27082__auto___29125,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26971__auto__ = null;
var cljs$core$async$state_machine__26971__auto____0 = (function (){
var statearr_29117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29117[(0)] = cljs$core$async$state_machine__26971__auto__);

(statearr_29117[(1)] = (1));

return statearr_29117;
});
var cljs$core$async$state_machine__26971__auto____1 = (function (state_29091){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_29091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e29118){if((e29118 instanceof Object)){
var ex__26974__auto__ = e29118;
var statearr_29119_29141 = state_29091;
(statearr_29119_29141[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29142 = state_29091;
state_29091 = G__29142;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
cljs$core$async$state_machine__26971__auto__ = function(state_29091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26971__auto____1.call(this,state_29091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26971__auto____0;
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26971__auto____1;
return cljs$core$async$state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto___29125,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27084__auto__ = (function (){var statearr_29120 = f__27083__auto__.call(null);
(statearr_29120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto___29125);

return statearr_29120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto___29125,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29144 = [];
var len__25983__auto___29202 = arguments.length;
var i__25984__auto___29203 = (0);
while(true){
if((i__25984__auto___29203 < len__25983__auto___29202)){
args29144.push((arguments[i__25984__auto___29203]));

var G__29204 = (i__25984__auto___29203 + (1));
i__25984__auto___29203 = G__29204;
continue;
} else {
}
break;
}

var G__29146 = args29144.length;
switch (G__29146) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29144.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27082__auto___29206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto___29206,out){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto___29206,out){
return (function (state_29178){
var state_val_29179 = (state_29178[(1)]);
if((state_val_29179 === (7))){
var inst_29158 = (state_29178[(7)]);
var inst_29157 = (state_29178[(8)]);
var inst_29157__$1 = (state_29178[(2)]);
var inst_29158__$1 = cljs.core.nth.call(null,inst_29157__$1,(0),null);
var inst_29159 = cljs.core.nth.call(null,inst_29157__$1,(1),null);
var inst_29160 = (inst_29158__$1 == null);
var state_29178__$1 = (function (){var statearr_29180 = state_29178;
(statearr_29180[(7)] = inst_29158__$1);

(statearr_29180[(9)] = inst_29159);

(statearr_29180[(8)] = inst_29157__$1);

return statearr_29180;
})();
if(cljs.core.truth_(inst_29160)){
var statearr_29181_29207 = state_29178__$1;
(statearr_29181_29207[(1)] = (8));

} else {
var statearr_29182_29208 = state_29178__$1;
(statearr_29182_29208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29179 === (1))){
var inst_29147 = cljs.core.vec.call(null,chs);
var inst_29148 = inst_29147;
var state_29178__$1 = (function (){var statearr_29183 = state_29178;
(statearr_29183[(10)] = inst_29148);

return statearr_29183;
})();
var statearr_29184_29209 = state_29178__$1;
(statearr_29184_29209[(2)] = null);

(statearr_29184_29209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29179 === (4))){
var inst_29148 = (state_29178[(10)]);
var state_29178__$1 = state_29178;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29178__$1,(7),inst_29148);
} else {
if((state_val_29179 === (6))){
var inst_29174 = (state_29178[(2)]);
var state_29178__$1 = state_29178;
var statearr_29185_29210 = state_29178__$1;
(statearr_29185_29210[(2)] = inst_29174);

(statearr_29185_29210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29179 === (3))){
var inst_29176 = (state_29178[(2)]);
var state_29178__$1 = state_29178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29178__$1,inst_29176);
} else {
if((state_val_29179 === (2))){
var inst_29148 = (state_29178[(10)]);
var inst_29150 = cljs.core.count.call(null,inst_29148);
var inst_29151 = (inst_29150 > (0));
var state_29178__$1 = state_29178;
if(cljs.core.truth_(inst_29151)){
var statearr_29187_29211 = state_29178__$1;
(statearr_29187_29211[(1)] = (4));

} else {
var statearr_29188_29212 = state_29178__$1;
(statearr_29188_29212[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29179 === (11))){
var inst_29148 = (state_29178[(10)]);
var inst_29167 = (state_29178[(2)]);
var tmp29186 = inst_29148;
var inst_29148__$1 = tmp29186;
var state_29178__$1 = (function (){var statearr_29189 = state_29178;
(statearr_29189[(10)] = inst_29148__$1);

(statearr_29189[(11)] = inst_29167);

return statearr_29189;
})();
var statearr_29190_29213 = state_29178__$1;
(statearr_29190_29213[(2)] = null);

(statearr_29190_29213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29179 === (9))){
var inst_29158 = (state_29178[(7)]);
var state_29178__$1 = state_29178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29178__$1,(11),out,inst_29158);
} else {
if((state_val_29179 === (5))){
var inst_29172 = cljs.core.async.close_BANG_.call(null,out);
var state_29178__$1 = state_29178;
var statearr_29191_29214 = state_29178__$1;
(statearr_29191_29214[(2)] = inst_29172);

(statearr_29191_29214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29179 === (10))){
var inst_29170 = (state_29178[(2)]);
var state_29178__$1 = state_29178;
var statearr_29192_29215 = state_29178__$1;
(statearr_29192_29215[(2)] = inst_29170);

(statearr_29192_29215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29179 === (8))){
var inst_29158 = (state_29178[(7)]);
var inst_29148 = (state_29178[(10)]);
var inst_29159 = (state_29178[(9)]);
var inst_29157 = (state_29178[(8)]);
var inst_29162 = (function (){var cs = inst_29148;
var vec__29153 = inst_29157;
var v = inst_29158;
var c = inst_29159;
return ((function (cs,vec__29153,v,c,inst_29158,inst_29148,inst_29159,inst_29157,state_val_29179,c__27082__auto___29206,out){
return (function (p1__29143_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29143_SHARP_);
});
;})(cs,vec__29153,v,c,inst_29158,inst_29148,inst_29159,inst_29157,state_val_29179,c__27082__auto___29206,out))
})();
var inst_29163 = cljs.core.filterv.call(null,inst_29162,inst_29148);
var inst_29148__$1 = inst_29163;
var state_29178__$1 = (function (){var statearr_29193 = state_29178;
(statearr_29193[(10)] = inst_29148__$1);

return statearr_29193;
})();
var statearr_29194_29216 = state_29178__$1;
(statearr_29194_29216[(2)] = null);

(statearr_29194_29216[(1)] = (2));


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
});})(c__27082__auto___29206,out))
;
return ((function (switch__26970__auto__,c__27082__auto___29206,out){
return (function() {
var cljs$core$async$state_machine__26971__auto__ = null;
var cljs$core$async$state_machine__26971__auto____0 = (function (){
var statearr_29198 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29198[(0)] = cljs$core$async$state_machine__26971__auto__);

(statearr_29198[(1)] = (1));

return statearr_29198;
});
var cljs$core$async$state_machine__26971__auto____1 = (function (state_29178){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_29178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e29199){if((e29199 instanceof Object)){
var ex__26974__auto__ = e29199;
var statearr_29200_29217 = state_29178;
(statearr_29200_29217[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29218 = state_29178;
state_29178 = G__29218;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
cljs$core$async$state_machine__26971__auto__ = function(state_29178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26971__auto____1.call(this,state_29178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26971__auto____0;
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26971__auto____1;
return cljs$core$async$state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto___29206,out))
})();
var state__27084__auto__ = (function (){var statearr_29201 = f__27083__auto__.call(null);
(statearr_29201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto___29206);

return statearr_29201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto___29206,out))
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
var args29219 = [];
var len__25983__auto___29268 = arguments.length;
var i__25984__auto___29269 = (0);
while(true){
if((i__25984__auto___29269 < len__25983__auto___29268)){
args29219.push((arguments[i__25984__auto___29269]));

var G__29270 = (i__25984__auto___29269 + (1));
i__25984__auto___29269 = G__29270;
continue;
} else {
}
break;
}

var G__29221 = args29219.length;
switch (G__29221) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29219.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27082__auto___29272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto___29272,out){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto___29272,out){
return (function (state_29245){
var state_val_29246 = (state_29245[(1)]);
if((state_val_29246 === (7))){
var inst_29227 = (state_29245[(7)]);
var inst_29227__$1 = (state_29245[(2)]);
var inst_29228 = (inst_29227__$1 == null);
var inst_29229 = cljs.core.not.call(null,inst_29228);
var state_29245__$1 = (function (){var statearr_29247 = state_29245;
(statearr_29247[(7)] = inst_29227__$1);

return statearr_29247;
})();
if(inst_29229){
var statearr_29248_29273 = state_29245__$1;
(statearr_29248_29273[(1)] = (8));

} else {
var statearr_29249_29274 = state_29245__$1;
(statearr_29249_29274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29246 === (1))){
var inst_29222 = (0);
var state_29245__$1 = (function (){var statearr_29250 = state_29245;
(statearr_29250[(8)] = inst_29222);

return statearr_29250;
})();
var statearr_29251_29275 = state_29245__$1;
(statearr_29251_29275[(2)] = null);

(statearr_29251_29275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29246 === (4))){
var state_29245__$1 = state_29245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29245__$1,(7),ch);
} else {
if((state_val_29246 === (6))){
var inst_29240 = (state_29245[(2)]);
var state_29245__$1 = state_29245;
var statearr_29252_29276 = state_29245__$1;
(statearr_29252_29276[(2)] = inst_29240);

(statearr_29252_29276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29246 === (3))){
var inst_29242 = (state_29245[(2)]);
var inst_29243 = cljs.core.async.close_BANG_.call(null,out);
var state_29245__$1 = (function (){var statearr_29253 = state_29245;
(statearr_29253[(9)] = inst_29242);

return statearr_29253;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29245__$1,inst_29243);
} else {
if((state_val_29246 === (2))){
var inst_29222 = (state_29245[(8)]);
var inst_29224 = (inst_29222 < n);
var state_29245__$1 = state_29245;
if(cljs.core.truth_(inst_29224)){
var statearr_29254_29277 = state_29245__$1;
(statearr_29254_29277[(1)] = (4));

} else {
var statearr_29255_29278 = state_29245__$1;
(statearr_29255_29278[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29246 === (11))){
var inst_29222 = (state_29245[(8)]);
var inst_29232 = (state_29245[(2)]);
var inst_29233 = (inst_29222 + (1));
var inst_29222__$1 = inst_29233;
var state_29245__$1 = (function (){var statearr_29256 = state_29245;
(statearr_29256[(8)] = inst_29222__$1);

(statearr_29256[(10)] = inst_29232);

return statearr_29256;
})();
var statearr_29257_29279 = state_29245__$1;
(statearr_29257_29279[(2)] = null);

(statearr_29257_29279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29246 === (9))){
var state_29245__$1 = state_29245;
var statearr_29258_29280 = state_29245__$1;
(statearr_29258_29280[(2)] = null);

(statearr_29258_29280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29246 === (5))){
var state_29245__$1 = state_29245;
var statearr_29259_29281 = state_29245__$1;
(statearr_29259_29281[(2)] = null);

(statearr_29259_29281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29246 === (10))){
var inst_29237 = (state_29245[(2)]);
var state_29245__$1 = state_29245;
var statearr_29260_29282 = state_29245__$1;
(statearr_29260_29282[(2)] = inst_29237);

(statearr_29260_29282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29246 === (8))){
var inst_29227 = (state_29245[(7)]);
var state_29245__$1 = state_29245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29245__$1,(11),out,inst_29227);
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
});})(c__27082__auto___29272,out))
;
return ((function (switch__26970__auto__,c__27082__auto___29272,out){
return (function() {
var cljs$core$async$state_machine__26971__auto__ = null;
var cljs$core$async$state_machine__26971__auto____0 = (function (){
var statearr_29264 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29264[(0)] = cljs$core$async$state_machine__26971__auto__);

(statearr_29264[(1)] = (1));

return statearr_29264;
});
var cljs$core$async$state_machine__26971__auto____1 = (function (state_29245){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_29245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e29265){if((e29265 instanceof Object)){
var ex__26974__auto__ = e29265;
var statearr_29266_29283 = state_29245;
(statearr_29266_29283[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29284 = state_29245;
state_29245 = G__29284;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
cljs$core$async$state_machine__26971__auto__ = function(state_29245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26971__auto____1.call(this,state_29245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26971__auto____0;
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26971__auto____1;
return cljs$core$async$state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto___29272,out))
})();
var state__27084__auto__ = (function (){var statearr_29267 = f__27083__auto__.call(null);
(statearr_29267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto___29272);

return statearr_29267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto___29272,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29292 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29292 = (function (f,ch,meta29293){
this.f = f;
this.ch = ch;
this.meta29293 = meta29293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29294,meta29293__$1){
var self__ = this;
var _29294__$1 = this;
return (new cljs.core.async.t_cljs$core$async29292(self__.f,self__.ch,meta29293__$1));
});

cljs.core.async.t_cljs$core$async29292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29294){
var self__ = this;
var _29294__$1 = this;
return self__.meta29293;
});

cljs.core.async.t_cljs$core$async29292.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29292.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29292.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29292.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29292.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29295 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29295 = (function (f,ch,meta29293,_,fn1,meta29296){
this.f = f;
this.ch = ch;
this.meta29293 = meta29293;
this._ = _;
this.fn1 = fn1;
this.meta29296 = meta29296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29297,meta29296__$1){
var self__ = this;
var _29297__$1 = this;
return (new cljs.core.async.t_cljs$core$async29295(self__.f,self__.ch,self__.meta29293,self__._,self__.fn1,meta29296__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29295.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29297){
var self__ = this;
var _29297__$1 = this;
return self__.meta29296;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29295.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29295.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29295.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29295.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29285_SHARP_){
return f1.call(null,(((p1__29285_SHARP_ == null))?null:self__.f.call(null,p1__29285_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29295.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29293","meta29293",1929695669,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29292","cljs.core.async/t_cljs$core$async29292",445738724,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29296","meta29296",119793301,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29295.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29295";

cljs.core.async.t_cljs$core$async29295.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async29295");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29295 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29295(f__$1,ch__$1,meta29293__$1,___$2,fn1__$1,meta29296){
return (new cljs.core.async.t_cljs$core$async29295(f__$1,ch__$1,meta29293__$1,___$2,fn1__$1,meta29296));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29295(self__.f,self__.ch,self__.meta29293,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24863__auto__ = ret;
if(cljs.core.truth_(and__24863__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24863__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29292.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29292.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29293","meta29293",1929695669,null)], null);
});

cljs.core.async.t_cljs$core$async29292.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29292";

cljs.core.async.t_cljs$core$async29292.cljs$lang$ctorPrWriter = (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async29292");
});

cljs.core.async.__GT_t_cljs$core$async29292 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29292(f__$1,ch__$1,meta29293){
return (new cljs.core.async.t_cljs$core$async29292(f__$1,ch__$1,meta29293));
});

}

return (new cljs.core.async.t_cljs$core$async29292(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29301 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29301 = (function (f,ch,meta29302){
this.f = f;
this.ch = ch;
this.meta29302 = meta29302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29303,meta29302__$1){
var self__ = this;
var _29303__$1 = this;
return (new cljs.core.async.t_cljs$core$async29301(self__.f,self__.ch,meta29302__$1));
});

cljs.core.async.t_cljs$core$async29301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29303){
var self__ = this;
var _29303__$1 = this;
return self__.meta29302;
});

cljs.core.async.t_cljs$core$async29301.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29301.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29301.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29301.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29301.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29301.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29302","meta29302",435148252,null)], null);
});

cljs.core.async.t_cljs$core$async29301.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29301";

cljs.core.async.t_cljs$core$async29301.cljs$lang$ctorPrWriter = (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async29301");
});

cljs.core.async.__GT_t_cljs$core$async29301 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29301(f__$1,ch__$1,meta29302){
return (new cljs.core.async.t_cljs$core$async29301(f__$1,ch__$1,meta29302));
});

}

return (new cljs.core.async.t_cljs$core$async29301(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29307 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29307 = (function (p,ch,meta29308){
this.p = p;
this.ch = ch;
this.meta29308 = meta29308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29309,meta29308__$1){
var self__ = this;
var _29309__$1 = this;
return (new cljs.core.async.t_cljs$core$async29307(self__.p,self__.ch,meta29308__$1));
});

cljs.core.async.t_cljs$core$async29307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29309){
var self__ = this;
var _29309__$1 = this;
return self__.meta29308;
});

cljs.core.async.t_cljs$core$async29307.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29307.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29307.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29307.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29307.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29307.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29307.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29308","meta29308",634010224,null)], null);
});

cljs.core.async.t_cljs$core$async29307.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29307";

cljs.core.async.t_cljs$core$async29307.cljs$lang$ctorPrWriter = (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async29307");
});

cljs.core.async.__GT_t_cljs$core$async29307 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29307(p__$1,ch__$1,meta29308){
return (new cljs.core.async.t_cljs$core$async29307(p__$1,ch__$1,meta29308));
});

}

return (new cljs.core.async.t_cljs$core$async29307(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29310 = [];
var len__25983__auto___29354 = arguments.length;
var i__25984__auto___29355 = (0);
while(true){
if((i__25984__auto___29355 < len__25983__auto___29354)){
args29310.push((arguments[i__25984__auto___29355]));

var G__29356 = (i__25984__auto___29355 + (1));
i__25984__auto___29355 = G__29356;
continue;
} else {
}
break;
}

var G__29312 = args29310.length;
switch (G__29312) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29310.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27082__auto___29358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto___29358,out){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto___29358,out){
return (function (state_29333){
var state_val_29334 = (state_29333[(1)]);
if((state_val_29334 === (7))){
var inst_29329 = (state_29333[(2)]);
var state_29333__$1 = state_29333;
var statearr_29335_29359 = state_29333__$1;
(statearr_29335_29359[(2)] = inst_29329);

(statearr_29335_29359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (1))){
var state_29333__$1 = state_29333;
var statearr_29336_29360 = state_29333__$1;
(statearr_29336_29360[(2)] = null);

(statearr_29336_29360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (4))){
var inst_29315 = (state_29333[(7)]);
var inst_29315__$1 = (state_29333[(2)]);
var inst_29316 = (inst_29315__$1 == null);
var state_29333__$1 = (function (){var statearr_29337 = state_29333;
(statearr_29337[(7)] = inst_29315__$1);

return statearr_29337;
})();
if(cljs.core.truth_(inst_29316)){
var statearr_29338_29361 = state_29333__$1;
(statearr_29338_29361[(1)] = (5));

} else {
var statearr_29339_29362 = state_29333__$1;
(statearr_29339_29362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (6))){
var inst_29315 = (state_29333[(7)]);
var inst_29320 = p.call(null,inst_29315);
var state_29333__$1 = state_29333;
if(cljs.core.truth_(inst_29320)){
var statearr_29340_29363 = state_29333__$1;
(statearr_29340_29363[(1)] = (8));

} else {
var statearr_29341_29364 = state_29333__$1;
(statearr_29341_29364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (3))){
var inst_29331 = (state_29333[(2)]);
var state_29333__$1 = state_29333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29333__$1,inst_29331);
} else {
if((state_val_29334 === (2))){
var state_29333__$1 = state_29333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29333__$1,(4),ch);
} else {
if((state_val_29334 === (11))){
var inst_29323 = (state_29333[(2)]);
var state_29333__$1 = state_29333;
var statearr_29342_29365 = state_29333__$1;
(statearr_29342_29365[(2)] = inst_29323);

(statearr_29342_29365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (9))){
var state_29333__$1 = state_29333;
var statearr_29343_29366 = state_29333__$1;
(statearr_29343_29366[(2)] = null);

(statearr_29343_29366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (5))){
var inst_29318 = cljs.core.async.close_BANG_.call(null,out);
var state_29333__$1 = state_29333;
var statearr_29344_29367 = state_29333__$1;
(statearr_29344_29367[(2)] = inst_29318);

(statearr_29344_29367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (10))){
var inst_29326 = (state_29333[(2)]);
var state_29333__$1 = (function (){var statearr_29345 = state_29333;
(statearr_29345[(8)] = inst_29326);

return statearr_29345;
})();
var statearr_29346_29368 = state_29333__$1;
(statearr_29346_29368[(2)] = null);

(statearr_29346_29368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (8))){
var inst_29315 = (state_29333[(7)]);
var state_29333__$1 = state_29333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29333__$1,(11),out,inst_29315);
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
});})(c__27082__auto___29358,out))
;
return ((function (switch__26970__auto__,c__27082__auto___29358,out){
return (function() {
var cljs$core$async$state_machine__26971__auto__ = null;
var cljs$core$async$state_machine__26971__auto____0 = (function (){
var statearr_29350 = [null,null,null,null,null,null,null,null,null];
(statearr_29350[(0)] = cljs$core$async$state_machine__26971__auto__);

(statearr_29350[(1)] = (1));

return statearr_29350;
});
var cljs$core$async$state_machine__26971__auto____1 = (function (state_29333){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_29333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e29351){if((e29351 instanceof Object)){
var ex__26974__auto__ = e29351;
var statearr_29352_29369 = state_29333;
(statearr_29352_29369[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29370 = state_29333;
state_29333 = G__29370;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
cljs$core$async$state_machine__26971__auto__ = function(state_29333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26971__auto____1.call(this,state_29333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26971__auto____0;
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26971__auto____1;
return cljs$core$async$state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto___29358,out))
})();
var state__27084__auto__ = (function (){var statearr_29353 = f__27083__auto__.call(null);
(statearr_29353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto___29358);

return statearr_29353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto___29358,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29371 = [];
var len__25983__auto___29374 = arguments.length;
var i__25984__auto___29375 = (0);
while(true){
if((i__25984__auto___29375 < len__25983__auto___29374)){
args29371.push((arguments[i__25984__auto___29375]));

var G__29376 = (i__25984__auto___29375 + (1));
i__25984__auto___29375 = G__29376;
continue;
} else {
}
break;
}

var G__29373 = args29371.length;
switch (G__29373) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29371.length)].join('')));

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
var c__27082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto__){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto__){
return (function (state_29543){
var state_val_29544 = (state_29543[(1)]);
if((state_val_29544 === (7))){
var inst_29539 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
var statearr_29545_29586 = state_29543__$1;
(statearr_29545_29586[(2)] = inst_29539);

(statearr_29545_29586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (20))){
var inst_29509 = (state_29543[(7)]);
var inst_29520 = (state_29543[(2)]);
var inst_29521 = cljs.core.next.call(null,inst_29509);
var inst_29495 = inst_29521;
var inst_29496 = null;
var inst_29497 = (0);
var inst_29498 = (0);
var state_29543__$1 = (function (){var statearr_29546 = state_29543;
(statearr_29546[(8)] = inst_29497);

(statearr_29546[(9)] = inst_29495);

(statearr_29546[(10)] = inst_29498);

(statearr_29546[(11)] = inst_29496);

(statearr_29546[(12)] = inst_29520);

return statearr_29546;
})();
var statearr_29547_29587 = state_29543__$1;
(statearr_29547_29587[(2)] = null);

(statearr_29547_29587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (1))){
var state_29543__$1 = state_29543;
var statearr_29548_29588 = state_29543__$1;
(statearr_29548_29588[(2)] = null);

(statearr_29548_29588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (4))){
var inst_29484 = (state_29543[(13)]);
var inst_29484__$1 = (state_29543[(2)]);
var inst_29485 = (inst_29484__$1 == null);
var state_29543__$1 = (function (){var statearr_29549 = state_29543;
(statearr_29549[(13)] = inst_29484__$1);

return statearr_29549;
})();
if(cljs.core.truth_(inst_29485)){
var statearr_29550_29589 = state_29543__$1;
(statearr_29550_29589[(1)] = (5));

} else {
var statearr_29551_29590 = state_29543__$1;
(statearr_29551_29590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (15))){
var state_29543__$1 = state_29543;
var statearr_29555_29591 = state_29543__$1;
(statearr_29555_29591[(2)] = null);

(statearr_29555_29591[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (21))){
var state_29543__$1 = state_29543;
var statearr_29556_29592 = state_29543__$1;
(statearr_29556_29592[(2)] = null);

(statearr_29556_29592[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (13))){
var inst_29497 = (state_29543[(8)]);
var inst_29495 = (state_29543[(9)]);
var inst_29498 = (state_29543[(10)]);
var inst_29496 = (state_29543[(11)]);
var inst_29505 = (state_29543[(2)]);
var inst_29506 = (inst_29498 + (1));
var tmp29552 = inst_29497;
var tmp29553 = inst_29495;
var tmp29554 = inst_29496;
var inst_29495__$1 = tmp29553;
var inst_29496__$1 = tmp29554;
var inst_29497__$1 = tmp29552;
var inst_29498__$1 = inst_29506;
var state_29543__$1 = (function (){var statearr_29557 = state_29543;
(statearr_29557[(14)] = inst_29505);

(statearr_29557[(8)] = inst_29497__$1);

(statearr_29557[(9)] = inst_29495__$1);

(statearr_29557[(10)] = inst_29498__$1);

(statearr_29557[(11)] = inst_29496__$1);

return statearr_29557;
})();
var statearr_29558_29593 = state_29543__$1;
(statearr_29558_29593[(2)] = null);

(statearr_29558_29593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (22))){
var state_29543__$1 = state_29543;
var statearr_29559_29594 = state_29543__$1;
(statearr_29559_29594[(2)] = null);

(statearr_29559_29594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (6))){
var inst_29484 = (state_29543[(13)]);
var inst_29493 = f.call(null,inst_29484);
var inst_29494 = cljs.core.seq.call(null,inst_29493);
var inst_29495 = inst_29494;
var inst_29496 = null;
var inst_29497 = (0);
var inst_29498 = (0);
var state_29543__$1 = (function (){var statearr_29560 = state_29543;
(statearr_29560[(8)] = inst_29497);

(statearr_29560[(9)] = inst_29495);

(statearr_29560[(10)] = inst_29498);

(statearr_29560[(11)] = inst_29496);

return statearr_29560;
})();
var statearr_29561_29595 = state_29543__$1;
(statearr_29561_29595[(2)] = null);

(statearr_29561_29595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (17))){
var inst_29509 = (state_29543[(7)]);
var inst_29513 = cljs.core.chunk_first.call(null,inst_29509);
var inst_29514 = cljs.core.chunk_rest.call(null,inst_29509);
var inst_29515 = cljs.core.count.call(null,inst_29513);
var inst_29495 = inst_29514;
var inst_29496 = inst_29513;
var inst_29497 = inst_29515;
var inst_29498 = (0);
var state_29543__$1 = (function (){var statearr_29562 = state_29543;
(statearr_29562[(8)] = inst_29497);

(statearr_29562[(9)] = inst_29495);

(statearr_29562[(10)] = inst_29498);

(statearr_29562[(11)] = inst_29496);

return statearr_29562;
})();
var statearr_29563_29596 = state_29543__$1;
(statearr_29563_29596[(2)] = null);

(statearr_29563_29596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (3))){
var inst_29541 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29543__$1,inst_29541);
} else {
if((state_val_29544 === (12))){
var inst_29529 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
var statearr_29564_29597 = state_29543__$1;
(statearr_29564_29597[(2)] = inst_29529);

(statearr_29564_29597[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (2))){
var state_29543__$1 = state_29543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29543__$1,(4),in$);
} else {
if((state_val_29544 === (23))){
var inst_29537 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
var statearr_29565_29598 = state_29543__$1;
(statearr_29565_29598[(2)] = inst_29537);

(statearr_29565_29598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (19))){
var inst_29524 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
var statearr_29566_29599 = state_29543__$1;
(statearr_29566_29599[(2)] = inst_29524);

(statearr_29566_29599[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (11))){
var inst_29495 = (state_29543[(9)]);
var inst_29509 = (state_29543[(7)]);
var inst_29509__$1 = cljs.core.seq.call(null,inst_29495);
var state_29543__$1 = (function (){var statearr_29567 = state_29543;
(statearr_29567[(7)] = inst_29509__$1);

return statearr_29567;
})();
if(inst_29509__$1){
var statearr_29568_29600 = state_29543__$1;
(statearr_29568_29600[(1)] = (14));

} else {
var statearr_29569_29601 = state_29543__$1;
(statearr_29569_29601[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (9))){
var inst_29531 = (state_29543[(2)]);
var inst_29532 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29543__$1 = (function (){var statearr_29570 = state_29543;
(statearr_29570[(15)] = inst_29531);

return statearr_29570;
})();
if(cljs.core.truth_(inst_29532)){
var statearr_29571_29602 = state_29543__$1;
(statearr_29571_29602[(1)] = (21));

} else {
var statearr_29572_29603 = state_29543__$1;
(statearr_29572_29603[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (5))){
var inst_29487 = cljs.core.async.close_BANG_.call(null,out);
var state_29543__$1 = state_29543;
var statearr_29573_29604 = state_29543__$1;
(statearr_29573_29604[(2)] = inst_29487);

(statearr_29573_29604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (14))){
var inst_29509 = (state_29543[(7)]);
var inst_29511 = cljs.core.chunked_seq_QMARK_.call(null,inst_29509);
var state_29543__$1 = state_29543;
if(inst_29511){
var statearr_29574_29605 = state_29543__$1;
(statearr_29574_29605[(1)] = (17));

} else {
var statearr_29575_29606 = state_29543__$1;
(statearr_29575_29606[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (16))){
var inst_29527 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
var statearr_29576_29607 = state_29543__$1;
(statearr_29576_29607[(2)] = inst_29527);

(statearr_29576_29607[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (10))){
var inst_29498 = (state_29543[(10)]);
var inst_29496 = (state_29543[(11)]);
var inst_29503 = cljs.core._nth.call(null,inst_29496,inst_29498);
var state_29543__$1 = state_29543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29543__$1,(13),out,inst_29503);
} else {
if((state_val_29544 === (18))){
var inst_29509 = (state_29543[(7)]);
var inst_29518 = cljs.core.first.call(null,inst_29509);
var state_29543__$1 = state_29543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29543__$1,(20),out,inst_29518);
} else {
if((state_val_29544 === (8))){
var inst_29497 = (state_29543[(8)]);
var inst_29498 = (state_29543[(10)]);
var inst_29500 = (inst_29498 < inst_29497);
var inst_29501 = inst_29500;
var state_29543__$1 = state_29543;
if(cljs.core.truth_(inst_29501)){
var statearr_29577_29608 = state_29543__$1;
(statearr_29577_29608[(1)] = (10));

} else {
var statearr_29578_29609 = state_29543__$1;
(statearr_29578_29609[(1)] = (11));

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
});})(c__27082__auto__))
;
return ((function (switch__26970__auto__,c__27082__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26971__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26971__auto____0 = (function (){
var statearr_29582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29582[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26971__auto__);

(statearr_29582[(1)] = (1));

return statearr_29582;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26971__auto____1 = (function (state_29543){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_29543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e29583){if((e29583 instanceof Object)){
var ex__26974__auto__ = e29583;
var statearr_29584_29610 = state_29543;
(statearr_29584_29610[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29611 = state_29543;
state_29543 = G__29611;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26971__auto__ = function(state_29543){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26971__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26971__auto____1.call(this,state_29543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26971__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26971__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto__))
})();
var state__27084__auto__ = (function (){var statearr_29585 = f__27083__auto__.call(null);
(statearr_29585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto__);

return statearr_29585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto__))
);

return c__27082__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29612 = [];
var len__25983__auto___29615 = arguments.length;
var i__25984__auto___29616 = (0);
while(true){
if((i__25984__auto___29616 < len__25983__auto___29615)){
args29612.push((arguments[i__25984__auto___29616]));

var G__29617 = (i__25984__auto___29616 + (1));
i__25984__auto___29616 = G__29617;
continue;
} else {
}
break;
}

var G__29614 = args29612.length;
switch (G__29614) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29612.length)].join('')));

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
var args29619 = [];
var len__25983__auto___29622 = arguments.length;
var i__25984__auto___29623 = (0);
while(true){
if((i__25984__auto___29623 < len__25983__auto___29622)){
args29619.push((arguments[i__25984__auto___29623]));

var G__29624 = (i__25984__auto___29623 + (1));
i__25984__auto___29623 = G__29624;
continue;
} else {
}
break;
}

var G__29621 = args29619.length;
switch (G__29621) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29619.length)].join('')));

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
var args29626 = [];
var len__25983__auto___29677 = arguments.length;
var i__25984__auto___29678 = (0);
while(true){
if((i__25984__auto___29678 < len__25983__auto___29677)){
args29626.push((arguments[i__25984__auto___29678]));

var G__29679 = (i__25984__auto___29678 + (1));
i__25984__auto___29678 = G__29679;
continue;
} else {
}
break;
}

var G__29628 = args29626.length;
switch (G__29628) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29626.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27082__auto___29681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto___29681,out){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto___29681,out){
return (function (state_29652){
var state_val_29653 = (state_29652[(1)]);
if((state_val_29653 === (7))){
var inst_29647 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
var statearr_29654_29682 = state_29652__$1;
(statearr_29654_29682[(2)] = inst_29647);

(statearr_29654_29682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (1))){
var inst_29629 = null;
var state_29652__$1 = (function (){var statearr_29655 = state_29652;
(statearr_29655[(7)] = inst_29629);

return statearr_29655;
})();
var statearr_29656_29683 = state_29652__$1;
(statearr_29656_29683[(2)] = null);

(statearr_29656_29683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (4))){
var inst_29632 = (state_29652[(8)]);
var inst_29632__$1 = (state_29652[(2)]);
var inst_29633 = (inst_29632__$1 == null);
var inst_29634 = cljs.core.not.call(null,inst_29633);
var state_29652__$1 = (function (){var statearr_29657 = state_29652;
(statearr_29657[(8)] = inst_29632__$1);

return statearr_29657;
})();
if(inst_29634){
var statearr_29658_29684 = state_29652__$1;
(statearr_29658_29684[(1)] = (5));

} else {
var statearr_29659_29685 = state_29652__$1;
(statearr_29659_29685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (6))){
var state_29652__$1 = state_29652;
var statearr_29660_29686 = state_29652__$1;
(statearr_29660_29686[(2)] = null);

(statearr_29660_29686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (3))){
var inst_29649 = (state_29652[(2)]);
var inst_29650 = cljs.core.async.close_BANG_.call(null,out);
var state_29652__$1 = (function (){var statearr_29661 = state_29652;
(statearr_29661[(9)] = inst_29649);

return statearr_29661;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29652__$1,inst_29650);
} else {
if((state_val_29653 === (2))){
var state_29652__$1 = state_29652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29652__$1,(4),ch);
} else {
if((state_val_29653 === (11))){
var inst_29632 = (state_29652[(8)]);
var inst_29641 = (state_29652[(2)]);
var inst_29629 = inst_29632;
var state_29652__$1 = (function (){var statearr_29662 = state_29652;
(statearr_29662[(10)] = inst_29641);

(statearr_29662[(7)] = inst_29629);

return statearr_29662;
})();
var statearr_29663_29687 = state_29652__$1;
(statearr_29663_29687[(2)] = null);

(statearr_29663_29687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (9))){
var inst_29632 = (state_29652[(8)]);
var state_29652__$1 = state_29652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29652__$1,(11),out,inst_29632);
} else {
if((state_val_29653 === (5))){
var inst_29632 = (state_29652[(8)]);
var inst_29629 = (state_29652[(7)]);
var inst_29636 = cljs.core._EQ_.call(null,inst_29632,inst_29629);
var state_29652__$1 = state_29652;
if(inst_29636){
var statearr_29665_29688 = state_29652__$1;
(statearr_29665_29688[(1)] = (8));

} else {
var statearr_29666_29689 = state_29652__$1;
(statearr_29666_29689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (10))){
var inst_29644 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
var statearr_29667_29690 = state_29652__$1;
(statearr_29667_29690[(2)] = inst_29644);

(statearr_29667_29690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (8))){
var inst_29629 = (state_29652[(7)]);
var tmp29664 = inst_29629;
var inst_29629__$1 = tmp29664;
var state_29652__$1 = (function (){var statearr_29668 = state_29652;
(statearr_29668[(7)] = inst_29629__$1);

return statearr_29668;
})();
var statearr_29669_29691 = state_29652__$1;
(statearr_29669_29691[(2)] = null);

(statearr_29669_29691[(1)] = (2));


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
});})(c__27082__auto___29681,out))
;
return ((function (switch__26970__auto__,c__27082__auto___29681,out){
return (function() {
var cljs$core$async$state_machine__26971__auto__ = null;
var cljs$core$async$state_machine__26971__auto____0 = (function (){
var statearr_29673 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29673[(0)] = cljs$core$async$state_machine__26971__auto__);

(statearr_29673[(1)] = (1));

return statearr_29673;
});
var cljs$core$async$state_machine__26971__auto____1 = (function (state_29652){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_29652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e29674){if((e29674 instanceof Object)){
var ex__26974__auto__ = e29674;
var statearr_29675_29692 = state_29652;
(statearr_29675_29692[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29693 = state_29652;
state_29652 = G__29693;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
cljs$core$async$state_machine__26971__auto__ = function(state_29652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26971__auto____1.call(this,state_29652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26971__auto____0;
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26971__auto____1;
return cljs$core$async$state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto___29681,out))
})();
var state__27084__auto__ = (function (){var statearr_29676 = f__27083__auto__.call(null);
(statearr_29676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto___29681);

return statearr_29676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto___29681,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29694 = [];
var len__25983__auto___29764 = arguments.length;
var i__25984__auto___29765 = (0);
while(true){
if((i__25984__auto___29765 < len__25983__auto___29764)){
args29694.push((arguments[i__25984__auto___29765]));

var G__29766 = (i__25984__auto___29765 + (1));
i__25984__auto___29765 = G__29766;
continue;
} else {
}
break;
}

var G__29696 = args29694.length;
switch (G__29696) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29694.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27082__auto___29768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto___29768,out){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto___29768,out){
return (function (state_29734){
var state_val_29735 = (state_29734[(1)]);
if((state_val_29735 === (7))){
var inst_29730 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
var statearr_29736_29769 = state_29734__$1;
(statearr_29736_29769[(2)] = inst_29730);

(statearr_29736_29769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (1))){
var inst_29697 = (new Array(n));
var inst_29698 = inst_29697;
var inst_29699 = (0);
var state_29734__$1 = (function (){var statearr_29737 = state_29734;
(statearr_29737[(7)] = inst_29698);

(statearr_29737[(8)] = inst_29699);

return statearr_29737;
})();
var statearr_29738_29770 = state_29734__$1;
(statearr_29738_29770[(2)] = null);

(statearr_29738_29770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (4))){
var inst_29702 = (state_29734[(9)]);
var inst_29702__$1 = (state_29734[(2)]);
var inst_29703 = (inst_29702__$1 == null);
var inst_29704 = cljs.core.not.call(null,inst_29703);
var state_29734__$1 = (function (){var statearr_29739 = state_29734;
(statearr_29739[(9)] = inst_29702__$1);

return statearr_29739;
})();
if(inst_29704){
var statearr_29740_29771 = state_29734__$1;
(statearr_29740_29771[(1)] = (5));

} else {
var statearr_29741_29772 = state_29734__$1;
(statearr_29741_29772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (15))){
var inst_29724 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
var statearr_29742_29773 = state_29734__$1;
(statearr_29742_29773[(2)] = inst_29724);

(statearr_29742_29773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (13))){
var state_29734__$1 = state_29734;
var statearr_29743_29774 = state_29734__$1;
(statearr_29743_29774[(2)] = null);

(statearr_29743_29774[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (6))){
var inst_29699 = (state_29734[(8)]);
var inst_29720 = (inst_29699 > (0));
var state_29734__$1 = state_29734;
if(cljs.core.truth_(inst_29720)){
var statearr_29744_29775 = state_29734__$1;
(statearr_29744_29775[(1)] = (12));

} else {
var statearr_29745_29776 = state_29734__$1;
(statearr_29745_29776[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (3))){
var inst_29732 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29734__$1,inst_29732);
} else {
if((state_val_29735 === (12))){
var inst_29698 = (state_29734[(7)]);
var inst_29722 = cljs.core.vec.call(null,inst_29698);
var state_29734__$1 = state_29734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29734__$1,(15),out,inst_29722);
} else {
if((state_val_29735 === (2))){
var state_29734__$1 = state_29734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29734__$1,(4),ch);
} else {
if((state_val_29735 === (11))){
var inst_29714 = (state_29734[(2)]);
var inst_29715 = (new Array(n));
var inst_29698 = inst_29715;
var inst_29699 = (0);
var state_29734__$1 = (function (){var statearr_29746 = state_29734;
(statearr_29746[(10)] = inst_29714);

(statearr_29746[(7)] = inst_29698);

(statearr_29746[(8)] = inst_29699);

return statearr_29746;
})();
var statearr_29747_29777 = state_29734__$1;
(statearr_29747_29777[(2)] = null);

(statearr_29747_29777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (9))){
var inst_29698 = (state_29734[(7)]);
var inst_29712 = cljs.core.vec.call(null,inst_29698);
var state_29734__$1 = state_29734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29734__$1,(11),out,inst_29712);
} else {
if((state_val_29735 === (5))){
var inst_29698 = (state_29734[(7)]);
var inst_29702 = (state_29734[(9)]);
var inst_29699 = (state_29734[(8)]);
var inst_29707 = (state_29734[(11)]);
var inst_29706 = (inst_29698[inst_29699] = inst_29702);
var inst_29707__$1 = (inst_29699 + (1));
var inst_29708 = (inst_29707__$1 < n);
var state_29734__$1 = (function (){var statearr_29748 = state_29734;
(statearr_29748[(12)] = inst_29706);

(statearr_29748[(11)] = inst_29707__$1);

return statearr_29748;
})();
if(cljs.core.truth_(inst_29708)){
var statearr_29749_29778 = state_29734__$1;
(statearr_29749_29778[(1)] = (8));

} else {
var statearr_29750_29779 = state_29734__$1;
(statearr_29750_29779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (14))){
var inst_29727 = (state_29734[(2)]);
var inst_29728 = cljs.core.async.close_BANG_.call(null,out);
var state_29734__$1 = (function (){var statearr_29752 = state_29734;
(statearr_29752[(13)] = inst_29727);

return statearr_29752;
})();
var statearr_29753_29780 = state_29734__$1;
(statearr_29753_29780[(2)] = inst_29728);

(statearr_29753_29780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (10))){
var inst_29718 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
var statearr_29754_29781 = state_29734__$1;
(statearr_29754_29781[(2)] = inst_29718);

(statearr_29754_29781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (8))){
var inst_29698 = (state_29734[(7)]);
var inst_29707 = (state_29734[(11)]);
var tmp29751 = inst_29698;
var inst_29698__$1 = tmp29751;
var inst_29699 = inst_29707;
var state_29734__$1 = (function (){var statearr_29755 = state_29734;
(statearr_29755[(7)] = inst_29698__$1);

(statearr_29755[(8)] = inst_29699);

return statearr_29755;
})();
var statearr_29756_29782 = state_29734__$1;
(statearr_29756_29782[(2)] = null);

(statearr_29756_29782[(1)] = (2));


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
});})(c__27082__auto___29768,out))
;
return ((function (switch__26970__auto__,c__27082__auto___29768,out){
return (function() {
var cljs$core$async$state_machine__26971__auto__ = null;
var cljs$core$async$state_machine__26971__auto____0 = (function (){
var statearr_29760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29760[(0)] = cljs$core$async$state_machine__26971__auto__);

(statearr_29760[(1)] = (1));

return statearr_29760;
});
var cljs$core$async$state_machine__26971__auto____1 = (function (state_29734){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_29734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e29761){if((e29761 instanceof Object)){
var ex__26974__auto__ = e29761;
var statearr_29762_29783 = state_29734;
(statearr_29762_29783[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29784 = state_29734;
state_29734 = G__29784;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
cljs$core$async$state_machine__26971__auto__ = function(state_29734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26971__auto____1.call(this,state_29734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26971__auto____0;
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26971__auto____1;
return cljs$core$async$state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto___29768,out))
})();
var state__27084__auto__ = (function (){var statearr_29763 = f__27083__auto__.call(null);
(statearr_29763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto___29768);

return statearr_29763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto___29768,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29785 = [];
var len__25983__auto___29859 = arguments.length;
var i__25984__auto___29860 = (0);
while(true){
if((i__25984__auto___29860 < len__25983__auto___29859)){
args29785.push((arguments[i__25984__auto___29860]));

var G__29861 = (i__25984__auto___29860 + (1));
i__25984__auto___29860 = G__29861;
continue;
} else {
}
break;
}

var G__29787 = args29785.length;
switch (G__29787) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29785.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27082__auto___29863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto___29863,out){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto___29863,out){
return (function (state_29829){
var state_val_29830 = (state_29829[(1)]);
if((state_val_29830 === (7))){
var inst_29825 = (state_29829[(2)]);
var state_29829__$1 = state_29829;
var statearr_29831_29864 = state_29829__$1;
(statearr_29831_29864[(2)] = inst_29825);

(statearr_29831_29864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (1))){
var inst_29788 = [];
var inst_29789 = inst_29788;
var inst_29790 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29829__$1 = (function (){var statearr_29832 = state_29829;
(statearr_29832[(7)] = inst_29790);

(statearr_29832[(8)] = inst_29789);

return statearr_29832;
})();
var statearr_29833_29865 = state_29829__$1;
(statearr_29833_29865[(2)] = null);

(statearr_29833_29865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (4))){
var inst_29793 = (state_29829[(9)]);
var inst_29793__$1 = (state_29829[(2)]);
var inst_29794 = (inst_29793__$1 == null);
var inst_29795 = cljs.core.not.call(null,inst_29794);
var state_29829__$1 = (function (){var statearr_29834 = state_29829;
(statearr_29834[(9)] = inst_29793__$1);

return statearr_29834;
})();
if(inst_29795){
var statearr_29835_29866 = state_29829__$1;
(statearr_29835_29866[(1)] = (5));

} else {
var statearr_29836_29867 = state_29829__$1;
(statearr_29836_29867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (15))){
var inst_29819 = (state_29829[(2)]);
var state_29829__$1 = state_29829;
var statearr_29837_29868 = state_29829__$1;
(statearr_29837_29868[(2)] = inst_29819);

(statearr_29837_29868[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (13))){
var state_29829__$1 = state_29829;
var statearr_29838_29869 = state_29829__$1;
(statearr_29838_29869[(2)] = null);

(statearr_29838_29869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (6))){
var inst_29789 = (state_29829[(8)]);
var inst_29814 = inst_29789.length;
var inst_29815 = (inst_29814 > (0));
var state_29829__$1 = state_29829;
if(cljs.core.truth_(inst_29815)){
var statearr_29839_29870 = state_29829__$1;
(statearr_29839_29870[(1)] = (12));

} else {
var statearr_29840_29871 = state_29829__$1;
(statearr_29840_29871[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (3))){
var inst_29827 = (state_29829[(2)]);
var state_29829__$1 = state_29829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29829__$1,inst_29827);
} else {
if((state_val_29830 === (12))){
var inst_29789 = (state_29829[(8)]);
var inst_29817 = cljs.core.vec.call(null,inst_29789);
var state_29829__$1 = state_29829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29829__$1,(15),out,inst_29817);
} else {
if((state_val_29830 === (2))){
var state_29829__$1 = state_29829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29829__$1,(4),ch);
} else {
if((state_val_29830 === (11))){
var inst_29797 = (state_29829[(10)]);
var inst_29793 = (state_29829[(9)]);
var inst_29807 = (state_29829[(2)]);
var inst_29808 = [];
var inst_29809 = inst_29808.push(inst_29793);
var inst_29789 = inst_29808;
var inst_29790 = inst_29797;
var state_29829__$1 = (function (){var statearr_29841 = state_29829;
(statearr_29841[(11)] = inst_29809);

(statearr_29841[(12)] = inst_29807);

(statearr_29841[(7)] = inst_29790);

(statearr_29841[(8)] = inst_29789);

return statearr_29841;
})();
var statearr_29842_29872 = state_29829__$1;
(statearr_29842_29872[(2)] = null);

(statearr_29842_29872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (9))){
var inst_29789 = (state_29829[(8)]);
var inst_29805 = cljs.core.vec.call(null,inst_29789);
var state_29829__$1 = state_29829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29829__$1,(11),out,inst_29805);
} else {
if((state_val_29830 === (5))){
var inst_29797 = (state_29829[(10)]);
var inst_29790 = (state_29829[(7)]);
var inst_29793 = (state_29829[(9)]);
var inst_29797__$1 = f.call(null,inst_29793);
var inst_29798 = cljs.core._EQ_.call(null,inst_29797__$1,inst_29790);
var inst_29799 = cljs.core.keyword_identical_QMARK_.call(null,inst_29790,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29800 = (inst_29798) || (inst_29799);
var state_29829__$1 = (function (){var statearr_29843 = state_29829;
(statearr_29843[(10)] = inst_29797__$1);

return statearr_29843;
})();
if(cljs.core.truth_(inst_29800)){
var statearr_29844_29873 = state_29829__$1;
(statearr_29844_29873[(1)] = (8));

} else {
var statearr_29845_29874 = state_29829__$1;
(statearr_29845_29874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (14))){
var inst_29822 = (state_29829[(2)]);
var inst_29823 = cljs.core.async.close_BANG_.call(null,out);
var state_29829__$1 = (function (){var statearr_29847 = state_29829;
(statearr_29847[(13)] = inst_29822);

return statearr_29847;
})();
var statearr_29848_29875 = state_29829__$1;
(statearr_29848_29875[(2)] = inst_29823);

(statearr_29848_29875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (10))){
var inst_29812 = (state_29829[(2)]);
var state_29829__$1 = state_29829;
var statearr_29849_29876 = state_29829__$1;
(statearr_29849_29876[(2)] = inst_29812);

(statearr_29849_29876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (8))){
var inst_29797 = (state_29829[(10)]);
var inst_29789 = (state_29829[(8)]);
var inst_29793 = (state_29829[(9)]);
var inst_29802 = inst_29789.push(inst_29793);
var tmp29846 = inst_29789;
var inst_29789__$1 = tmp29846;
var inst_29790 = inst_29797;
var state_29829__$1 = (function (){var statearr_29850 = state_29829;
(statearr_29850[(7)] = inst_29790);

(statearr_29850[(8)] = inst_29789__$1);

(statearr_29850[(14)] = inst_29802);

return statearr_29850;
})();
var statearr_29851_29877 = state_29829__$1;
(statearr_29851_29877[(2)] = null);

(statearr_29851_29877[(1)] = (2));


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
});})(c__27082__auto___29863,out))
;
return ((function (switch__26970__auto__,c__27082__auto___29863,out){
return (function() {
var cljs$core$async$state_machine__26971__auto__ = null;
var cljs$core$async$state_machine__26971__auto____0 = (function (){
var statearr_29855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29855[(0)] = cljs$core$async$state_machine__26971__auto__);

(statearr_29855[(1)] = (1));

return statearr_29855;
});
var cljs$core$async$state_machine__26971__auto____1 = (function (state_29829){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_29829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e29856){if((e29856 instanceof Object)){
var ex__26974__auto__ = e29856;
var statearr_29857_29878 = state_29829;
(statearr_29857_29878[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29879 = state_29829;
state_29829 = G__29879;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
cljs$core$async$state_machine__26971__auto__ = function(state_29829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26971__auto____1.call(this,state_29829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26971__auto____0;
cljs$core$async$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26971__auto____1;
return cljs$core$async$state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto___29863,out))
})();
var state__27084__auto__ = (function (){var statearr_29858 = f__27083__auto__.call(null);
(statearr_29858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto___29863);

return statearr_29858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto___29863,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1483983824967