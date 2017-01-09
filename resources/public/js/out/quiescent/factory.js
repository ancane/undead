// Compiled by ClojureScript 1.9.293 {}
goog.provide('quiescent.factory');
goog.require('cljs.core');
goog.require('cljsjs.react');
/**
 * Return a Component factory function. The argument may be any
 * value accepted by React.createElement (that is, the string name of a
 * HTML tag, or an instance of ReactClass).
 * 
 * Returns a function that takes props and children (the same as the
 * built-in ReactJS element constructors).
 */
quiescent.factory.factory = (function quiescent$factory$factory(type){
return (function() { 
var G__35595__delegate = function (props,children){
return cljs.core.apply.call(null,React.createElement,type,cljs.core.clj__GT_js.call(null,props),children);
};
var G__35595 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__35596__i = 0, G__35596__a = new Array(arguments.length -  1);
while (G__35596__i < G__35596__a.length) {G__35596__a[G__35596__i] = arguments[G__35596__i + 1]; ++G__35596__i;}
  children = new cljs.core.IndexedSeq(G__35596__a,0);
} 
return G__35595__delegate.call(this,props,children);};
G__35595.cljs$lang$maxFixedArity = 1;
G__35595.cljs$lang$applyTo = (function (arglist__35597){
var props = cljs.core.first(arglist__35597);
var children = cljs.core.rest(arglist__35597);
return G__35595__delegate(props,children);
});
G__35595.cljs$core$IFn$_invoke$arity$variadic = G__35595__delegate;
return G__35595;
})()
;
});

//# sourceMappingURL=factory.js.map?rel=1483983945779