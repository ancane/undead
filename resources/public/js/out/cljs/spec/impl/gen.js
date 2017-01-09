// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31171 = arguments.length;
var i__25984__auto___31172 = (0);
while(true){
if((i__25984__auto___31172 < len__25983__auto___31171)){
args__25990__auto__.push((arguments[i__25984__auto___31172]));

var G__31173 = (i__25984__auto___31172 + (1));
i__25984__auto___31172 = G__31173;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq31170){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31170));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31175 = arguments.length;
var i__25984__auto___31176 = (0);
while(true){
if((i__25984__auto___31176 < len__25983__auto___31175)){
args__25990__auto__.push((arguments[i__25984__auto___31176]));

var G__31177 = (i__25984__auto___31176 + (1));
i__25984__auto___31176 = G__31177;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq31174){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31174));
});

var g_QMARK__31178 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_31179 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__31178){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__31178))
,null));
var mkg_31180 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__31178,g_31179){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__31178,g_31179))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__31178,g_31179,mkg_31180){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__31178).call(null,x);
});})(g_QMARK__31178,g_31179,mkg_31180))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__31178,g_31179,mkg_31180){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_31180).call(null,gfn);
});})(g_QMARK__31178,g_31179,mkg_31180))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__31178,g_31179,mkg_31180){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_31179).call(null,generator);
});})(g_QMARK__31178,g_31179,mkg_31180))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__31142__auto___31199 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__31142__auto___31199){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31200 = arguments.length;
var i__25984__auto___31201 = (0);
while(true){
if((i__25984__auto___31201 < len__25983__auto___31200)){
args__25990__auto__.push((arguments[i__25984__auto___31201]));

var G__31202 = (i__25984__auto___31201 + (1));
i__25984__auto___31201 = G__31202;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31142__auto___31199))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31142__auto___31199){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31142__auto___31199),args);
});})(g__31142__auto___31199))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__31142__auto___31199){
return (function (seq31181){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31181));
});})(g__31142__auto___31199))
;


var g__31142__auto___31203 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__31142__auto___31203){
return (function cljs$spec$impl$gen$list(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31204 = arguments.length;
var i__25984__auto___31205 = (0);
while(true){
if((i__25984__auto___31205 < len__25983__auto___31204)){
args__25990__auto__.push((arguments[i__25984__auto___31205]));

var G__31206 = (i__25984__auto___31205 + (1));
i__25984__auto___31205 = G__31206;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31142__auto___31203))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31142__auto___31203){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31142__auto___31203),args);
});})(g__31142__auto___31203))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__31142__auto___31203){
return (function (seq31182){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31182));
});})(g__31142__auto___31203))
;


var g__31142__auto___31207 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__31142__auto___31207){
return (function cljs$spec$impl$gen$map(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31208 = arguments.length;
var i__25984__auto___31209 = (0);
while(true){
if((i__25984__auto___31209 < len__25983__auto___31208)){
args__25990__auto__.push((arguments[i__25984__auto___31209]));

var G__31210 = (i__25984__auto___31209 + (1));
i__25984__auto___31209 = G__31210;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31142__auto___31207))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31142__auto___31207){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31142__auto___31207),args);
});})(g__31142__auto___31207))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__31142__auto___31207){
return (function (seq31183){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31183));
});})(g__31142__auto___31207))
;


var g__31142__auto___31211 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__31142__auto___31211){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31212 = arguments.length;
var i__25984__auto___31213 = (0);
while(true){
if((i__25984__auto___31213 < len__25983__auto___31212)){
args__25990__auto__.push((arguments[i__25984__auto___31213]));

var G__31214 = (i__25984__auto___31213 + (1));
i__25984__auto___31213 = G__31214;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31142__auto___31211))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31142__auto___31211){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31142__auto___31211),args);
});})(g__31142__auto___31211))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__31142__auto___31211){
return (function (seq31184){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31184));
});})(g__31142__auto___31211))
;


var g__31142__auto___31215 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__31142__auto___31215){
return (function cljs$spec$impl$gen$set(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31216 = arguments.length;
var i__25984__auto___31217 = (0);
while(true){
if((i__25984__auto___31217 < len__25983__auto___31216)){
args__25990__auto__.push((arguments[i__25984__auto___31217]));

var G__31218 = (i__25984__auto___31217 + (1));
i__25984__auto___31217 = G__31218;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31142__auto___31215))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31142__auto___31215){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31142__auto___31215),args);
});})(g__31142__auto___31215))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__31142__auto___31215){
return (function (seq31185){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31185));
});})(g__31142__auto___31215))
;


var g__31142__auto___31219 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__31142__auto___31219){
return (function cljs$spec$impl$gen$vector(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31220 = arguments.length;
var i__25984__auto___31221 = (0);
while(true){
if((i__25984__auto___31221 < len__25983__auto___31220)){
args__25990__auto__.push((arguments[i__25984__auto___31221]));

var G__31222 = (i__25984__auto___31221 + (1));
i__25984__auto___31221 = G__31222;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31142__auto___31219))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31142__auto___31219){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31142__auto___31219),args);
});})(g__31142__auto___31219))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__31142__auto___31219){
return (function (seq31186){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31186));
});})(g__31142__auto___31219))
;


var g__31142__auto___31223 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__31142__auto___31223){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31224 = arguments.length;
var i__25984__auto___31225 = (0);
while(true){
if((i__25984__auto___31225 < len__25983__auto___31224)){
args__25990__auto__.push((arguments[i__25984__auto___31225]));

var G__31226 = (i__25984__auto___31225 + (1));
i__25984__auto___31225 = G__31226;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31142__auto___31223))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31142__auto___31223){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31142__auto___31223),args);
});})(g__31142__auto___31223))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__31142__auto___31223){
return (function (seq31187){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31187));
});})(g__31142__auto___31223))
;


var g__31142__auto___31227 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__31142__auto___31227){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31228 = arguments.length;
var i__25984__auto___31229 = (0);
while(true){
if((i__25984__auto___31229 < len__25983__auto___31228)){
args__25990__auto__.push((arguments[i__25984__auto___31229]));

var G__31230 = (i__25984__auto___31229 + (1));
i__25984__auto___31229 = G__31230;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31142__auto___31227))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31142__auto___31227){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31142__auto___31227),args);
});})(g__31142__auto___31227))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__31142__auto___31227){
return (function (seq31188){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31188));
});})(g__31142__auto___31227))
;


var g__31142__auto___31231 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__31142__auto___31231){
return (function cljs$spec$impl$gen$elements(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31232 = arguments.length;
var i__25984__auto___31233 = (0);
while(true){
if((i__25984__auto___31233 < len__25983__auto___31232)){
args__25990__auto__.push((arguments[i__25984__auto___31233]));

var G__31234 = (i__25984__auto___31233 + (1));
i__25984__auto___31233 = G__31234;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31142__auto___31231))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31142__auto___31231){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31142__auto___31231),args);
});})(g__31142__auto___31231))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__31142__auto___31231){
return (function (seq31189){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31189));
});})(g__31142__auto___31231))
;


var g__31142__auto___31235 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__31142__auto___31235){
return (function cljs$spec$impl$gen$bind(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31236 = arguments.length;
var i__25984__auto___31237 = (0);
while(true){
if((i__25984__auto___31237 < len__25983__auto___31236)){
args__25990__auto__.push((arguments[i__25984__auto___31237]));

var G__31238 = (i__25984__auto___31237 + (1));
i__25984__auto___31237 = G__31238;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31142__auto___31235))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31142__auto___31235){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31142__auto___31235),args);
});})(g__31142__auto___31235))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__31142__auto___31235){
return (function (seq31190){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31190));
});})(g__31142__auto___31235))
;


var g__31142__auto___31239 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__31142__auto___31239){
return (function cljs$spec$impl$gen$choose(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31240 = arguments.length;
var i__25984__auto___31241 = (0);
while(true){
if((i__25984__auto___31241 < len__25983__auto___31240)){
args__25990__auto__.push((arguments[i__25984__auto___31241]));

var G__31242 = (i__25984__auto___31241 + (1));
i__25984__auto___31241 = G__31242;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31142__auto___31239))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31142__auto___31239){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31142__auto___31239),args);
});})(g__31142__auto___31239))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__31142__auto___31239){
return (function (seq31191){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31191));
});})(g__31142__auto___31239))
;


var g__31142__auto___31243 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__31142__auto___31243){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31244 = arguments.length;
var i__25984__auto___31245 = (0);
while(true){
if((i__25984__auto___31245 < len__25983__auto___31244)){
args__25990__auto__.push((arguments[i__25984__auto___31245]));

var G__31246 = (i__25984__auto___31245 + (1));
i__25984__auto___31245 = G__31246;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31142__auto___31243))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31142__auto___31243){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31142__auto___31243),args);
});})(g__31142__auto___31243))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__31142__auto___31243){
return (function (seq31192){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31192));
});})(g__31142__auto___31243))
;


var g__31142__auto___31247 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__31142__auto___31247){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31248 = arguments.length;
var i__25984__auto___31249 = (0);
while(true){
if((i__25984__auto___31249 < len__25983__auto___31248)){
args__25990__auto__.push((arguments[i__25984__auto___31249]));

var G__31250 = (i__25984__auto___31249 + (1));
i__25984__auto___31249 = G__31250;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31142__auto___31247))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31142__auto___31247){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31142__auto___31247),args);
});})(g__31142__auto___31247))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__31142__auto___31247){
return (function (seq31193){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31193));
});})(g__31142__auto___31247))
;


var g__31142__auto___31251 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__31142__auto___31251){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31252 = arguments.length;
var i__25984__auto___31253 = (0);
while(true){
if((i__25984__auto___31253 < len__25983__auto___31252)){
args__25990__auto__.push((arguments[i__25984__auto___31253]));

var G__31254 = (i__25984__auto___31253 + (1));
i__25984__auto___31253 = G__31254;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31142__auto___31251))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31142__auto___31251){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31142__auto___31251),args);
});})(g__31142__auto___31251))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__31142__auto___31251){
return (function (seq31194){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31194));
});})(g__31142__auto___31251))
;


var g__31142__auto___31255 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__31142__auto___31255){
return (function cljs$spec$impl$gen$sample(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31256 = arguments.length;
var i__25984__auto___31257 = (0);
while(true){
if((i__25984__auto___31257 < len__25983__auto___31256)){
args__25990__auto__.push((arguments[i__25984__auto___31257]));

var G__31258 = (i__25984__auto___31257 + (1));
i__25984__auto___31257 = G__31258;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31142__auto___31255))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31142__auto___31255){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31142__auto___31255),args);
});})(g__31142__auto___31255))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__31142__auto___31255){
return (function (seq31195){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31195));
});})(g__31142__auto___31255))
;


var g__31142__auto___31259 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__31142__auto___31259){
return (function cljs$spec$impl$gen$return(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31260 = arguments.length;
var i__25984__auto___31261 = (0);
while(true){
if((i__25984__auto___31261 < len__25983__auto___31260)){
args__25990__auto__.push((arguments[i__25984__auto___31261]));

var G__31262 = (i__25984__auto___31261 + (1));
i__25984__auto___31261 = G__31262;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31142__auto___31259))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31142__auto___31259){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31142__auto___31259),args);
});})(g__31142__auto___31259))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__31142__auto___31259){
return (function (seq31196){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31196));
});})(g__31142__auto___31259))
;


var g__31142__auto___31263 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__31142__auto___31263){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31264 = arguments.length;
var i__25984__auto___31265 = (0);
while(true){
if((i__25984__auto___31265 < len__25983__auto___31264)){
args__25990__auto__.push((arguments[i__25984__auto___31265]));

var G__31266 = (i__25984__auto___31265 + (1));
i__25984__auto___31265 = G__31266;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31142__auto___31263))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31142__auto___31263){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31142__auto___31263),args);
});})(g__31142__auto___31263))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31142__auto___31263){
return (function (seq31197){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31197));
});})(g__31142__auto___31263))
;


var g__31142__auto___31267 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__31142__auto___31267){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31268 = arguments.length;
var i__25984__auto___31269 = (0);
while(true){
if((i__25984__auto___31269 < len__25983__auto___31268)){
args__25990__auto__.push((arguments[i__25984__auto___31269]));

var G__31270 = (i__25984__auto___31269 + (1));
i__25984__auto___31269 = G__31270;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31142__auto___31267))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31142__auto___31267){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31142__auto___31267),args);
});})(g__31142__auto___31267))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__31142__auto___31267){
return (function (seq31198){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31198));
});})(g__31142__auto___31267))
;

var g__31155__auto___31292 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__31155__auto___31292){
return (function cljs$spec$impl$gen$any(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31293 = arguments.length;
var i__25984__auto___31294 = (0);
while(true){
if((i__25984__auto___31294 < len__25983__auto___31293)){
args__25990__auto__.push((arguments[i__25984__auto___31294]));

var G__31295 = (i__25984__auto___31294 + (1));
i__25984__auto___31294 = G__31295;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31292))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31292){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31292);
});})(g__31155__auto___31292))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__31155__auto___31292){
return (function (seq31271){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31271));
});})(g__31155__auto___31292))
;


var g__31155__auto___31296 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__31155__auto___31296){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31297 = arguments.length;
var i__25984__auto___31298 = (0);
while(true){
if((i__25984__auto___31298 < len__25983__auto___31297)){
args__25990__auto__.push((arguments[i__25984__auto___31298]));

var G__31299 = (i__25984__auto___31298 + (1));
i__25984__auto___31298 = G__31299;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31296))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31296){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31296);
});})(g__31155__auto___31296))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__31155__auto___31296){
return (function (seq31272){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31272));
});})(g__31155__auto___31296))
;


var g__31155__auto___31300 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__31155__auto___31300){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31301 = arguments.length;
var i__25984__auto___31302 = (0);
while(true){
if((i__25984__auto___31302 < len__25983__auto___31301)){
args__25990__auto__.push((arguments[i__25984__auto___31302]));

var G__31303 = (i__25984__auto___31302 + (1));
i__25984__auto___31302 = G__31303;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31300))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31300){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31300);
});})(g__31155__auto___31300))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__31155__auto___31300){
return (function (seq31273){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31273));
});})(g__31155__auto___31300))
;


var g__31155__auto___31304 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__31155__auto___31304){
return (function cljs$spec$impl$gen$char(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31305 = arguments.length;
var i__25984__auto___31306 = (0);
while(true){
if((i__25984__auto___31306 < len__25983__auto___31305)){
args__25990__auto__.push((arguments[i__25984__auto___31306]));

var G__31307 = (i__25984__auto___31306 + (1));
i__25984__auto___31306 = G__31307;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31304))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31304){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31304);
});})(g__31155__auto___31304))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__31155__auto___31304){
return (function (seq31274){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31274));
});})(g__31155__auto___31304))
;


var g__31155__auto___31308 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__31155__auto___31308){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31309 = arguments.length;
var i__25984__auto___31310 = (0);
while(true){
if((i__25984__auto___31310 < len__25983__auto___31309)){
args__25990__auto__.push((arguments[i__25984__auto___31310]));

var G__31311 = (i__25984__auto___31310 + (1));
i__25984__auto___31310 = G__31311;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31308))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31308){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31308);
});})(g__31155__auto___31308))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__31155__auto___31308){
return (function (seq31275){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31275));
});})(g__31155__auto___31308))
;


var g__31155__auto___31312 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__31155__auto___31312){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31313 = arguments.length;
var i__25984__auto___31314 = (0);
while(true){
if((i__25984__auto___31314 < len__25983__auto___31313)){
args__25990__auto__.push((arguments[i__25984__auto___31314]));

var G__31315 = (i__25984__auto___31314 + (1));
i__25984__auto___31314 = G__31315;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31312))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31312){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31312);
});})(g__31155__auto___31312))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__31155__auto___31312){
return (function (seq31276){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31276));
});})(g__31155__auto___31312))
;


var g__31155__auto___31316 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__31155__auto___31316){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31317 = arguments.length;
var i__25984__auto___31318 = (0);
while(true){
if((i__25984__auto___31318 < len__25983__auto___31317)){
args__25990__auto__.push((arguments[i__25984__auto___31318]));

var G__31319 = (i__25984__auto___31318 + (1));
i__25984__auto___31318 = G__31319;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31316))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31316){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31316);
});})(g__31155__auto___31316))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__31155__auto___31316){
return (function (seq31277){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31277));
});})(g__31155__auto___31316))
;


var g__31155__auto___31320 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__31155__auto___31320){
return (function cljs$spec$impl$gen$double(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31321 = arguments.length;
var i__25984__auto___31322 = (0);
while(true){
if((i__25984__auto___31322 < len__25983__auto___31321)){
args__25990__auto__.push((arguments[i__25984__auto___31322]));

var G__31323 = (i__25984__auto___31322 + (1));
i__25984__auto___31322 = G__31323;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31320))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31320){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31320);
});})(g__31155__auto___31320))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__31155__auto___31320){
return (function (seq31278){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31278));
});})(g__31155__auto___31320))
;


var g__31155__auto___31324 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__31155__auto___31324){
return (function cljs$spec$impl$gen$int(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31325 = arguments.length;
var i__25984__auto___31326 = (0);
while(true){
if((i__25984__auto___31326 < len__25983__auto___31325)){
args__25990__auto__.push((arguments[i__25984__auto___31326]));

var G__31327 = (i__25984__auto___31326 + (1));
i__25984__auto___31326 = G__31327;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31324))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31324){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31324);
});})(g__31155__auto___31324))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__31155__auto___31324){
return (function (seq31279){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31279));
});})(g__31155__auto___31324))
;


var g__31155__auto___31328 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__31155__auto___31328){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31329 = arguments.length;
var i__25984__auto___31330 = (0);
while(true){
if((i__25984__auto___31330 < len__25983__auto___31329)){
args__25990__auto__.push((arguments[i__25984__auto___31330]));

var G__31331 = (i__25984__auto___31330 + (1));
i__25984__auto___31330 = G__31331;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31328))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31328){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31328);
});})(g__31155__auto___31328))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__31155__auto___31328){
return (function (seq31280){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31280));
});})(g__31155__auto___31328))
;


var g__31155__auto___31332 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__31155__auto___31332){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31333 = arguments.length;
var i__25984__auto___31334 = (0);
while(true){
if((i__25984__auto___31334 < len__25983__auto___31333)){
args__25990__auto__.push((arguments[i__25984__auto___31334]));

var G__31335 = (i__25984__auto___31334 + (1));
i__25984__auto___31334 = G__31335;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31332))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31332){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31332);
});})(g__31155__auto___31332))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__31155__auto___31332){
return (function (seq31281){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31281));
});})(g__31155__auto___31332))
;


var g__31155__auto___31336 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__31155__auto___31336){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31337 = arguments.length;
var i__25984__auto___31338 = (0);
while(true){
if((i__25984__auto___31338 < len__25983__auto___31337)){
args__25990__auto__.push((arguments[i__25984__auto___31338]));

var G__31339 = (i__25984__auto___31338 + (1));
i__25984__auto___31338 = G__31339;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31336))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31336){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31336);
});})(g__31155__auto___31336))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__31155__auto___31336){
return (function (seq31282){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31282));
});})(g__31155__auto___31336))
;


var g__31155__auto___31340 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__31155__auto___31340){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31341 = arguments.length;
var i__25984__auto___31342 = (0);
while(true){
if((i__25984__auto___31342 < len__25983__auto___31341)){
args__25990__auto__.push((arguments[i__25984__auto___31342]));

var G__31343 = (i__25984__auto___31342 + (1));
i__25984__auto___31342 = G__31343;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31340))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31340){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31340);
});})(g__31155__auto___31340))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__31155__auto___31340){
return (function (seq31283){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31283));
});})(g__31155__auto___31340))
;


var g__31155__auto___31344 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__31155__auto___31344){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31345 = arguments.length;
var i__25984__auto___31346 = (0);
while(true){
if((i__25984__auto___31346 < len__25983__auto___31345)){
args__25990__auto__.push((arguments[i__25984__auto___31346]));

var G__31347 = (i__25984__auto___31346 + (1));
i__25984__auto___31346 = G__31347;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31344))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31344){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31344);
});})(g__31155__auto___31344))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__31155__auto___31344){
return (function (seq31284){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31284));
});})(g__31155__auto___31344))
;


var g__31155__auto___31348 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__31155__auto___31348){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31349 = arguments.length;
var i__25984__auto___31350 = (0);
while(true){
if((i__25984__auto___31350 < len__25983__auto___31349)){
args__25990__auto__.push((arguments[i__25984__auto___31350]));

var G__31351 = (i__25984__auto___31350 + (1));
i__25984__auto___31350 = G__31351;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31348))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31348){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31348);
});})(g__31155__auto___31348))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__31155__auto___31348){
return (function (seq31285){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31285));
});})(g__31155__auto___31348))
;


var g__31155__auto___31352 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__31155__auto___31352){
return (function cljs$spec$impl$gen$string(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31353 = arguments.length;
var i__25984__auto___31354 = (0);
while(true){
if((i__25984__auto___31354 < len__25983__auto___31353)){
args__25990__auto__.push((arguments[i__25984__auto___31354]));

var G__31355 = (i__25984__auto___31354 + (1));
i__25984__auto___31354 = G__31355;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31352))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31352){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31352);
});})(g__31155__auto___31352))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__31155__auto___31352){
return (function (seq31286){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31286));
});})(g__31155__auto___31352))
;


var g__31155__auto___31356 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__31155__auto___31356){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31357 = arguments.length;
var i__25984__auto___31358 = (0);
while(true){
if((i__25984__auto___31358 < len__25983__auto___31357)){
args__25990__auto__.push((arguments[i__25984__auto___31358]));

var G__31359 = (i__25984__auto___31358 + (1));
i__25984__auto___31358 = G__31359;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31356))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31356){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31356);
});})(g__31155__auto___31356))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__31155__auto___31356){
return (function (seq31287){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31287));
});})(g__31155__auto___31356))
;


var g__31155__auto___31360 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__31155__auto___31360){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31361 = arguments.length;
var i__25984__auto___31362 = (0);
while(true){
if((i__25984__auto___31362 < len__25983__auto___31361)){
args__25990__auto__.push((arguments[i__25984__auto___31362]));

var G__31363 = (i__25984__auto___31362 + (1));
i__25984__auto___31362 = G__31363;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31360))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31360){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31360);
});})(g__31155__auto___31360))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__31155__auto___31360){
return (function (seq31288){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31288));
});})(g__31155__auto___31360))
;


var g__31155__auto___31364 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__31155__auto___31364){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31365 = arguments.length;
var i__25984__auto___31366 = (0);
while(true){
if((i__25984__auto___31366 < len__25983__auto___31365)){
args__25990__auto__.push((arguments[i__25984__auto___31366]));

var G__31367 = (i__25984__auto___31366 + (1));
i__25984__auto___31366 = G__31367;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31364))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31364){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31364);
});})(g__31155__auto___31364))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__31155__auto___31364){
return (function (seq31289){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31289));
});})(g__31155__auto___31364))
;


var g__31155__auto___31368 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__31155__auto___31368){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31369 = arguments.length;
var i__25984__auto___31370 = (0);
while(true){
if((i__25984__auto___31370 < len__25983__auto___31369)){
args__25990__auto__.push((arguments[i__25984__auto___31370]));

var G__31371 = (i__25984__auto___31370 + (1));
i__25984__auto___31370 = G__31371;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31368))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31368){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31368);
});})(g__31155__auto___31368))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__31155__auto___31368){
return (function (seq31290){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31290));
});})(g__31155__auto___31368))
;


var g__31155__auto___31372 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__31155__auto___31372){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31373 = arguments.length;
var i__25984__auto___31374 = (0);
while(true){
if((i__25984__auto___31374 < len__25983__auto___31373)){
args__25990__auto__.push((arguments[i__25984__auto___31374]));

var G__31375 = (i__25984__auto___31374 + (1));
i__25984__auto___31374 = G__31375;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});})(g__31155__auto___31372))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31155__auto___31372){
return (function (args){
return cljs.core.deref.call(null,g__31155__auto___31372);
});})(g__31155__auto___31372))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__31155__auto___31372){
return (function (seq31291){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31291));
});})(g__31155__auto___31372))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__25990__auto__ = [];
var len__25983__auto___31378 = arguments.length;
var i__25984__auto___31379 = (0);
while(true){
if((i__25984__auto___31379 < len__25983__auto___31378)){
args__25990__auto__.push((arguments[i__25984__auto___31379]));

var G__31380 = (i__25984__auto___31379 + (1));
i__25984__auto___31379 = G__31380;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__31376_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__31376_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq31377){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31377));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__31381_SHARP_){
return (new Date(p1__31381_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1483983826922