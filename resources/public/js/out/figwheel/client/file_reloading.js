// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
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
var or__24875__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24875__auto__){
return or__24875__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24875__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30063_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30063_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
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
var seq__30068 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30069 = null;
var count__30070 = (0);
var i__30071 = (0);
while(true){
if((i__30071 < count__30070)){
var n = cljs.core._nth.call(null,chunk__30069,i__30071);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30072 = seq__30068;
var G__30073 = chunk__30069;
var G__30074 = count__30070;
var G__30075 = (i__30071 + (1));
seq__30068 = G__30072;
chunk__30069 = G__30073;
count__30070 = G__30074;
i__30071 = G__30075;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30068);
if(temp__4657__auto__){
var seq__30068__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30068__$1)){
var c__25689__auto__ = cljs.core.chunk_first.call(null,seq__30068__$1);
var G__30076 = cljs.core.chunk_rest.call(null,seq__30068__$1);
var G__30077 = c__25689__auto__;
var G__30078 = cljs.core.count.call(null,c__25689__auto__);
var G__30079 = (0);
seq__30068 = G__30076;
chunk__30069 = G__30077;
count__30070 = G__30078;
i__30071 = G__30079;
continue;
} else {
var n = cljs.core.first.call(null,seq__30068__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30080 = cljs.core.next.call(null,seq__30068__$1);
var G__30081 = null;
var G__30082 = (0);
var G__30083 = (0);
seq__30068 = G__30080;
chunk__30069 = G__30081;
count__30070 = G__30082;
i__30071 = G__30083;
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

var seq__30134_30145 = cljs.core.seq.call(null,deps);
var chunk__30135_30146 = null;
var count__30136_30147 = (0);
var i__30137_30148 = (0);
while(true){
if((i__30137_30148 < count__30136_30147)){
var dep_30149 = cljs.core._nth.call(null,chunk__30135_30146,i__30137_30148);
topo_sort_helper_STAR_.call(null,dep_30149,(depth + (1)),state);

var G__30150 = seq__30134_30145;
var G__30151 = chunk__30135_30146;
var G__30152 = count__30136_30147;
var G__30153 = (i__30137_30148 + (1));
seq__30134_30145 = G__30150;
chunk__30135_30146 = G__30151;
count__30136_30147 = G__30152;
i__30137_30148 = G__30153;
continue;
} else {
var temp__4657__auto___30154 = cljs.core.seq.call(null,seq__30134_30145);
if(temp__4657__auto___30154){
var seq__30134_30155__$1 = temp__4657__auto___30154;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30134_30155__$1)){
var c__25689__auto___30156 = cljs.core.chunk_first.call(null,seq__30134_30155__$1);
var G__30157 = cljs.core.chunk_rest.call(null,seq__30134_30155__$1);
var G__30158 = c__25689__auto___30156;
var G__30159 = cljs.core.count.call(null,c__25689__auto___30156);
var G__30160 = (0);
seq__30134_30145 = G__30157;
chunk__30135_30146 = G__30158;
count__30136_30147 = G__30159;
i__30137_30148 = G__30160;
continue;
} else {
var dep_30161 = cljs.core.first.call(null,seq__30134_30155__$1);
topo_sort_helper_STAR_.call(null,dep_30161,(depth + (1)),state);

var G__30162 = cljs.core.next.call(null,seq__30134_30155__$1);
var G__30163 = null;
var G__30164 = (0);
var G__30165 = (0);
seq__30134_30145 = G__30162;
chunk__30135_30146 = G__30163;
count__30136_30147 = G__30164;
i__30137_30148 = G__30165;
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
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30138){
var vec__30142 = p__30138;
var seq__30143 = cljs.core.seq.call(null,vec__30142);
var first__30144 = cljs.core.first.call(null,seq__30143);
var seq__30143__$1 = cljs.core.next.call(null,seq__30143);
var x = first__30144;
var xs = seq__30143__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30142,seq__30143,first__30144,seq__30143__$1,x,xs,get_deps__$1){
return (function (p1__30084_SHARP_){
return clojure.set.difference.call(null,p1__30084_SHARP_,x);
});})(vec__30142,seq__30143,first__30144,seq__30143__$1,x,xs,get_deps__$1))
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
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30178 = cljs.core.seq.call(null,provides);
var chunk__30179 = null;
var count__30180 = (0);
var i__30181 = (0);
while(true){
if((i__30181 < count__30180)){
var prov = cljs.core._nth.call(null,chunk__30179,i__30181);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30182_30190 = cljs.core.seq.call(null,requires);
var chunk__30183_30191 = null;
var count__30184_30192 = (0);
var i__30185_30193 = (0);
while(true){
if((i__30185_30193 < count__30184_30192)){
var req_30194 = cljs.core._nth.call(null,chunk__30183_30191,i__30185_30193);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30194,prov);

var G__30195 = seq__30182_30190;
var G__30196 = chunk__30183_30191;
var G__30197 = count__30184_30192;
var G__30198 = (i__30185_30193 + (1));
seq__30182_30190 = G__30195;
chunk__30183_30191 = G__30196;
count__30184_30192 = G__30197;
i__30185_30193 = G__30198;
continue;
} else {
var temp__4657__auto___30199 = cljs.core.seq.call(null,seq__30182_30190);
if(temp__4657__auto___30199){
var seq__30182_30200__$1 = temp__4657__auto___30199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30182_30200__$1)){
var c__25689__auto___30201 = cljs.core.chunk_first.call(null,seq__30182_30200__$1);
var G__30202 = cljs.core.chunk_rest.call(null,seq__30182_30200__$1);
var G__30203 = c__25689__auto___30201;
var G__30204 = cljs.core.count.call(null,c__25689__auto___30201);
var G__30205 = (0);
seq__30182_30190 = G__30202;
chunk__30183_30191 = G__30203;
count__30184_30192 = G__30204;
i__30185_30193 = G__30205;
continue;
} else {
var req_30206 = cljs.core.first.call(null,seq__30182_30200__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30206,prov);

var G__30207 = cljs.core.next.call(null,seq__30182_30200__$1);
var G__30208 = null;
var G__30209 = (0);
var G__30210 = (0);
seq__30182_30190 = G__30207;
chunk__30183_30191 = G__30208;
count__30184_30192 = G__30209;
i__30185_30193 = G__30210;
continue;
}
} else {
}
}
break;
}

var G__30211 = seq__30178;
var G__30212 = chunk__30179;
var G__30213 = count__30180;
var G__30214 = (i__30181 + (1));
seq__30178 = G__30211;
chunk__30179 = G__30212;
count__30180 = G__30213;
i__30181 = G__30214;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30178);
if(temp__4657__auto__){
var seq__30178__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30178__$1)){
var c__25689__auto__ = cljs.core.chunk_first.call(null,seq__30178__$1);
var G__30215 = cljs.core.chunk_rest.call(null,seq__30178__$1);
var G__30216 = c__25689__auto__;
var G__30217 = cljs.core.count.call(null,c__25689__auto__);
var G__30218 = (0);
seq__30178 = G__30215;
chunk__30179 = G__30216;
count__30180 = G__30217;
i__30181 = G__30218;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30178__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30186_30219 = cljs.core.seq.call(null,requires);
var chunk__30187_30220 = null;
var count__30188_30221 = (0);
var i__30189_30222 = (0);
while(true){
if((i__30189_30222 < count__30188_30221)){
var req_30223 = cljs.core._nth.call(null,chunk__30187_30220,i__30189_30222);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30223,prov);

var G__30224 = seq__30186_30219;
var G__30225 = chunk__30187_30220;
var G__30226 = count__30188_30221;
var G__30227 = (i__30189_30222 + (1));
seq__30186_30219 = G__30224;
chunk__30187_30220 = G__30225;
count__30188_30221 = G__30226;
i__30189_30222 = G__30227;
continue;
} else {
var temp__4657__auto___30228__$1 = cljs.core.seq.call(null,seq__30186_30219);
if(temp__4657__auto___30228__$1){
var seq__30186_30229__$1 = temp__4657__auto___30228__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30186_30229__$1)){
var c__25689__auto___30230 = cljs.core.chunk_first.call(null,seq__30186_30229__$1);
var G__30231 = cljs.core.chunk_rest.call(null,seq__30186_30229__$1);
var G__30232 = c__25689__auto___30230;
var G__30233 = cljs.core.count.call(null,c__25689__auto___30230);
var G__30234 = (0);
seq__30186_30219 = G__30231;
chunk__30187_30220 = G__30232;
count__30188_30221 = G__30233;
i__30189_30222 = G__30234;
continue;
} else {
var req_30235 = cljs.core.first.call(null,seq__30186_30229__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30235,prov);

var G__30236 = cljs.core.next.call(null,seq__30186_30229__$1);
var G__30237 = null;
var G__30238 = (0);
var G__30239 = (0);
seq__30186_30219 = G__30236;
chunk__30187_30220 = G__30237;
count__30188_30221 = G__30238;
i__30189_30222 = G__30239;
continue;
}
} else {
}
}
break;
}

var G__30240 = cljs.core.next.call(null,seq__30178__$1);
var G__30241 = null;
var G__30242 = (0);
var G__30243 = (0);
seq__30178 = G__30240;
chunk__30179 = G__30241;
count__30180 = G__30242;
i__30181 = G__30243;
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
var seq__30248_30252 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30249_30253 = null;
var count__30250_30254 = (0);
var i__30251_30255 = (0);
while(true){
if((i__30251_30255 < count__30250_30254)){
var ns_30256 = cljs.core._nth.call(null,chunk__30249_30253,i__30251_30255);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30256);

var G__30257 = seq__30248_30252;
var G__30258 = chunk__30249_30253;
var G__30259 = count__30250_30254;
var G__30260 = (i__30251_30255 + (1));
seq__30248_30252 = G__30257;
chunk__30249_30253 = G__30258;
count__30250_30254 = G__30259;
i__30251_30255 = G__30260;
continue;
} else {
var temp__4657__auto___30261 = cljs.core.seq.call(null,seq__30248_30252);
if(temp__4657__auto___30261){
var seq__30248_30262__$1 = temp__4657__auto___30261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30248_30262__$1)){
var c__25689__auto___30263 = cljs.core.chunk_first.call(null,seq__30248_30262__$1);
var G__30264 = cljs.core.chunk_rest.call(null,seq__30248_30262__$1);
var G__30265 = c__25689__auto___30263;
var G__30266 = cljs.core.count.call(null,c__25689__auto___30263);
var G__30267 = (0);
seq__30248_30252 = G__30264;
chunk__30249_30253 = G__30265;
count__30250_30254 = G__30266;
i__30251_30255 = G__30267;
continue;
} else {
var ns_30268 = cljs.core.first.call(null,seq__30248_30262__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30268);

var G__30269 = cljs.core.next.call(null,seq__30248_30262__$1);
var G__30270 = null;
var G__30271 = (0);
var G__30272 = (0);
seq__30248_30252 = G__30269;
chunk__30249_30253 = G__30270;
count__30250_30254 = G__30271;
i__30251_30255 = G__30272;
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
goog.require_figwheel_backup_ = (function (){var or__24875__auto__ = goog.require__;
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
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
var G__30273__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30273 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30274__i = 0, G__30274__a = new Array(arguments.length -  0);
while (G__30274__i < G__30274__a.length) {G__30274__a[G__30274__i] = arguments[G__30274__i + 0]; ++G__30274__i;}
  args = new cljs.core.IndexedSeq(G__30274__a,0);
} 
return G__30273__delegate.call(this,args);};
G__30273.cljs$lang$maxFixedArity = 0;
G__30273.cljs$lang$applyTo = (function (arglist__30275){
var args = cljs.core.seq(arglist__30275);
return G__30273__delegate(args);
});
G__30273.cljs$core$IFn$_invoke$arity$variadic = G__30273__delegate;
return G__30273;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30277 = cljs.core._EQ_;
var expr__30278 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30277.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30278))){
var path_parts = ((function (pred__30277,expr__30278){
return (function (p1__30276_SHARP_){
return clojure.string.split.call(null,p1__30276_SHARP_,/[\/\\]/);
});})(pred__30277,expr__30278))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30277,expr__30278){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30280){if((e30280 instanceof Error)){
var e = e30280;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30280;

}
}})());
});
;})(path_parts,sep,root,pred__30277,expr__30278))
} else {
if(cljs.core.truth_(pred__30277.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30278))){
return ((function (pred__30277,expr__30278){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30277,expr__30278){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30277,expr__30278))
);

return deferred.addErrback(((function (deferred,pred__30277,expr__30278){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30277,expr__30278))
);
});
;})(pred__30277,expr__30278))
} else {
return ((function (pred__30277,expr__30278){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30277,expr__30278))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30281,callback){
var map__30284 = p__30281;
var map__30284__$1 = ((((!((map__30284 == null)))?((((map__30284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30284):map__30284);
var file_msg = map__30284__$1;
var request_url = cljs.core.get.call(null,map__30284__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30284,map__30284__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30284,map__30284__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto__){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto__){
return (function (state_30308){
var state_val_30309 = (state_30308[(1)]);
if((state_val_30309 === (7))){
var inst_30304 = (state_30308[(2)]);
var state_30308__$1 = state_30308;
var statearr_30310_30330 = state_30308__$1;
(statearr_30310_30330[(2)] = inst_30304);

(statearr_30310_30330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (1))){
var state_30308__$1 = state_30308;
var statearr_30311_30331 = state_30308__$1;
(statearr_30311_30331[(2)] = null);

(statearr_30311_30331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (4))){
var inst_30288 = (state_30308[(7)]);
var inst_30288__$1 = (state_30308[(2)]);
var state_30308__$1 = (function (){var statearr_30312 = state_30308;
(statearr_30312[(7)] = inst_30288__$1);

return statearr_30312;
})();
if(cljs.core.truth_(inst_30288__$1)){
var statearr_30313_30332 = state_30308__$1;
(statearr_30313_30332[(1)] = (5));

} else {
var statearr_30314_30333 = state_30308__$1;
(statearr_30314_30333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (6))){
var state_30308__$1 = state_30308;
var statearr_30315_30334 = state_30308__$1;
(statearr_30315_30334[(2)] = null);

(statearr_30315_30334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (3))){
var inst_30306 = (state_30308[(2)]);
var state_30308__$1 = state_30308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30308__$1,inst_30306);
} else {
if((state_val_30309 === (2))){
var state_30308__$1 = state_30308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30308__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30309 === (11))){
var inst_30300 = (state_30308[(2)]);
var state_30308__$1 = (function (){var statearr_30316 = state_30308;
(statearr_30316[(8)] = inst_30300);

return statearr_30316;
})();
var statearr_30317_30335 = state_30308__$1;
(statearr_30317_30335[(2)] = null);

(statearr_30317_30335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (9))){
var inst_30294 = (state_30308[(9)]);
var inst_30292 = (state_30308[(10)]);
var inst_30296 = inst_30294.call(null,inst_30292);
var state_30308__$1 = state_30308;
var statearr_30318_30336 = state_30308__$1;
(statearr_30318_30336[(2)] = inst_30296);

(statearr_30318_30336[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (5))){
var inst_30288 = (state_30308[(7)]);
var inst_30290 = figwheel.client.file_reloading.blocking_load.call(null,inst_30288);
var state_30308__$1 = state_30308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30308__$1,(8),inst_30290);
} else {
if((state_val_30309 === (10))){
var inst_30292 = (state_30308[(10)]);
var inst_30298 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30292);
var state_30308__$1 = state_30308;
var statearr_30319_30337 = state_30308__$1;
(statearr_30319_30337[(2)] = inst_30298);

(statearr_30319_30337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (8))){
var inst_30288 = (state_30308[(7)]);
var inst_30294 = (state_30308[(9)]);
var inst_30292 = (state_30308[(2)]);
var inst_30293 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30294__$1 = cljs.core.get.call(null,inst_30293,inst_30288);
var state_30308__$1 = (function (){var statearr_30320 = state_30308;
(statearr_30320[(9)] = inst_30294__$1);

(statearr_30320[(10)] = inst_30292);

return statearr_30320;
})();
if(cljs.core.truth_(inst_30294__$1)){
var statearr_30321_30338 = state_30308__$1;
(statearr_30321_30338[(1)] = (9));

} else {
var statearr_30322_30339 = state_30308__$1;
(statearr_30322_30339[(1)] = (10));

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
});})(c__27082__auto__))
;
return ((function (switch__26970__auto__,c__27082__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26971__auto__ = null;
var figwheel$client$file_reloading$state_machine__26971__auto____0 = (function (){
var statearr_30326 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30326[(0)] = figwheel$client$file_reloading$state_machine__26971__auto__);

(statearr_30326[(1)] = (1));

return statearr_30326;
});
var figwheel$client$file_reloading$state_machine__26971__auto____1 = (function (state_30308){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_30308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e30327){if((e30327 instanceof Object)){
var ex__26974__auto__ = e30327;
var statearr_30328_30340 = state_30308;
(statearr_30328_30340[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30341 = state_30308;
state_30308 = G__30341;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26971__auto__ = function(state_30308){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26971__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26971__auto____1.call(this,state_30308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26971__auto____0;
figwheel$client$file_reloading$state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26971__auto____1;
return figwheel$client$file_reloading$state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto__))
})();
var state__27084__auto__ = (function (){var statearr_30329 = f__27083__auto__.call(null);
(statearr_30329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto__);

return statearr_30329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto__))
);

return c__27082__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30342,callback){
var map__30345 = p__30342;
var map__30345__$1 = ((((!((map__30345 == null)))?((((map__30345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30345.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30345):map__30345);
var file_msg = map__30345__$1;
var namespace = cljs.core.get.call(null,map__30345__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30345,map__30345__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30345,map__30345__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30347){
var map__30350 = p__30347;
var map__30350__$1 = ((((!((map__30350 == null)))?((((map__30350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30350):map__30350);
var file_msg = map__30350__$1;
var namespace = cljs.core.get.call(null,map__30350__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24863__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24863__auto__){
var or__24875__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
var or__24875__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24875__auto____$1)){
return or__24875__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24863__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30352,callback){
var map__30355 = p__30352;
var map__30355__$1 = ((((!((map__30355 == null)))?((((map__30355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30355):map__30355);
var file_msg = map__30355__$1;
var request_url = cljs.core.get.call(null,map__30355__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30355__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

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
var c__27082__auto___30459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto___30459,out){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto___30459,out){
return (function (state_30441){
var state_val_30442 = (state_30441[(1)]);
if((state_val_30442 === (1))){
var inst_30415 = cljs.core.seq.call(null,files);
var inst_30416 = cljs.core.first.call(null,inst_30415);
var inst_30417 = cljs.core.next.call(null,inst_30415);
var inst_30418 = files;
var state_30441__$1 = (function (){var statearr_30443 = state_30441;
(statearr_30443[(7)] = inst_30416);

(statearr_30443[(8)] = inst_30418);

(statearr_30443[(9)] = inst_30417);

return statearr_30443;
})();
var statearr_30444_30460 = state_30441__$1;
(statearr_30444_30460[(2)] = null);

(statearr_30444_30460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (2))){
var inst_30418 = (state_30441[(8)]);
var inst_30424 = (state_30441[(10)]);
var inst_30423 = cljs.core.seq.call(null,inst_30418);
var inst_30424__$1 = cljs.core.first.call(null,inst_30423);
var inst_30425 = cljs.core.next.call(null,inst_30423);
var inst_30426 = (inst_30424__$1 == null);
var inst_30427 = cljs.core.not.call(null,inst_30426);
var state_30441__$1 = (function (){var statearr_30445 = state_30441;
(statearr_30445[(10)] = inst_30424__$1);

(statearr_30445[(11)] = inst_30425);

return statearr_30445;
})();
if(inst_30427){
var statearr_30446_30461 = state_30441__$1;
(statearr_30446_30461[(1)] = (4));

} else {
var statearr_30447_30462 = state_30441__$1;
(statearr_30447_30462[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (3))){
var inst_30439 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30441__$1,inst_30439);
} else {
if((state_val_30442 === (4))){
var inst_30424 = (state_30441[(10)]);
var inst_30429 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30424);
var state_30441__$1 = state_30441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30441__$1,(7),inst_30429);
} else {
if((state_val_30442 === (5))){
var inst_30435 = cljs.core.async.close_BANG_.call(null,out);
var state_30441__$1 = state_30441;
var statearr_30448_30463 = state_30441__$1;
(statearr_30448_30463[(2)] = inst_30435);

(statearr_30448_30463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (6))){
var inst_30437 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
var statearr_30449_30464 = state_30441__$1;
(statearr_30449_30464[(2)] = inst_30437);

(statearr_30449_30464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (7))){
var inst_30425 = (state_30441[(11)]);
var inst_30431 = (state_30441[(2)]);
var inst_30432 = cljs.core.async.put_BANG_.call(null,out,inst_30431);
var inst_30418 = inst_30425;
var state_30441__$1 = (function (){var statearr_30450 = state_30441;
(statearr_30450[(8)] = inst_30418);

(statearr_30450[(12)] = inst_30432);

return statearr_30450;
})();
var statearr_30451_30465 = state_30441__$1;
(statearr_30451_30465[(2)] = null);

(statearr_30451_30465[(1)] = (2));


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
});})(c__27082__auto___30459,out))
;
return ((function (switch__26970__auto__,c__27082__auto___30459,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26971__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26971__auto____0 = (function (){
var statearr_30455 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30455[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26971__auto__);

(statearr_30455[(1)] = (1));

return statearr_30455;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26971__auto____1 = (function (state_30441){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_30441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e30456){if((e30456 instanceof Object)){
var ex__26974__auto__ = e30456;
var statearr_30457_30466 = state_30441;
(statearr_30457_30466[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30467 = state_30441;
state_30441 = G__30467;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26971__auto__ = function(state_30441){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26971__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26971__auto____1.call(this,state_30441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26971__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26971__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto___30459,out))
})();
var state__27084__auto__ = (function (){var statearr_30458 = f__27083__auto__.call(null);
(statearr_30458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto___30459);

return statearr_30458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto___30459,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30468,opts){
var map__30472 = p__30468;
var map__30472__$1 = ((((!((map__30472 == null)))?((((map__30472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30472):map__30472);
var eval_body = cljs.core.get.call(null,map__30472__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30472__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24863__auto__ = eval_body;
if(cljs.core.truth_(and__24863__auto__)){
return typeof eval_body === 'string';
} else {
return and__24863__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30474){var e = e30474;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30475_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30475_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
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
return cljs.core.map.call(null,(function (p__30484){
var vec__30485 = p__30484;
var k = cljs.core.nth.call(null,vec__30485,(0),null);
var v = cljs.core.nth.call(null,vec__30485,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30488){
var vec__30489 = p__30488;
var k = cljs.core.nth.call(null,vec__30489,(0),null);
var v = cljs.core.nth.call(null,vec__30489,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30495,p__30496){
var map__30744 = p__30495;
var map__30744__$1 = ((((!((map__30744 == null)))?((((map__30744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30744):map__30744);
var opts = map__30744__$1;
var before_jsload = cljs.core.get.call(null,map__30744__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30744__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30744__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30745 = p__30496;
var map__30745__$1 = ((((!((map__30745 == null)))?((((map__30745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30745.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30745):map__30745);
var msg = map__30745__$1;
var files = cljs.core.get.call(null,map__30745__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30745__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30745__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto__,map__30744,map__30744__$1,opts,before_jsload,on_jsload,reload_dependents,map__30745,map__30745__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto__,map__30744,map__30744__$1,opts,before_jsload,on_jsload,reload_dependents,map__30745,map__30745__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30899){
var state_val_30900 = (state_30899[(1)]);
if((state_val_30900 === (7))){
var inst_30762 = (state_30899[(7)]);
var inst_30761 = (state_30899[(8)]);
var inst_30760 = (state_30899[(9)]);
var inst_30759 = (state_30899[(10)]);
var inst_30767 = cljs.core._nth.call(null,inst_30760,inst_30762);
var inst_30768 = figwheel.client.file_reloading.eval_body.call(null,inst_30767,opts);
var inst_30769 = (inst_30762 + (1));
var tmp30901 = inst_30761;
var tmp30902 = inst_30760;
var tmp30903 = inst_30759;
var inst_30759__$1 = tmp30903;
var inst_30760__$1 = tmp30902;
var inst_30761__$1 = tmp30901;
var inst_30762__$1 = inst_30769;
var state_30899__$1 = (function (){var statearr_30904 = state_30899;
(statearr_30904[(7)] = inst_30762__$1);

(statearr_30904[(8)] = inst_30761__$1);

(statearr_30904[(9)] = inst_30760__$1);

(statearr_30904[(10)] = inst_30759__$1);

(statearr_30904[(11)] = inst_30768);

return statearr_30904;
})();
var statearr_30905_30991 = state_30899__$1;
(statearr_30905_30991[(2)] = null);

(statearr_30905_30991[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (20))){
var inst_30802 = (state_30899[(12)]);
var inst_30810 = figwheel.client.file_reloading.sort_files.call(null,inst_30802);
var state_30899__$1 = state_30899;
var statearr_30906_30992 = state_30899__$1;
(statearr_30906_30992[(2)] = inst_30810);

(statearr_30906_30992[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (27))){
var state_30899__$1 = state_30899;
var statearr_30907_30993 = state_30899__$1;
(statearr_30907_30993[(2)] = null);

(statearr_30907_30993[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (1))){
var inst_30751 = (state_30899[(13)]);
var inst_30748 = before_jsload.call(null,files);
var inst_30749 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30750 = (function (){return ((function (inst_30751,inst_30748,inst_30749,state_val_30900,c__27082__auto__,map__30744,map__30744__$1,opts,before_jsload,on_jsload,reload_dependents,map__30745,map__30745__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30492_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30492_SHARP_);
});
;})(inst_30751,inst_30748,inst_30749,state_val_30900,c__27082__auto__,map__30744,map__30744__$1,opts,before_jsload,on_jsload,reload_dependents,map__30745,map__30745__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30751__$1 = cljs.core.filter.call(null,inst_30750,files);
var inst_30752 = cljs.core.not_empty.call(null,inst_30751__$1);
var state_30899__$1 = (function (){var statearr_30908 = state_30899;
(statearr_30908[(14)] = inst_30748);

(statearr_30908[(13)] = inst_30751__$1);

(statearr_30908[(15)] = inst_30749);

return statearr_30908;
})();
if(cljs.core.truth_(inst_30752)){
var statearr_30909_30994 = state_30899__$1;
(statearr_30909_30994[(1)] = (2));

} else {
var statearr_30910_30995 = state_30899__$1;
(statearr_30910_30995[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (24))){
var state_30899__$1 = state_30899;
var statearr_30911_30996 = state_30899__$1;
(statearr_30911_30996[(2)] = null);

(statearr_30911_30996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (39))){
var inst_30852 = (state_30899[(16)]);
var state_30899__$1 = state_30899;
var statearr_30912_30997 = state_30899__$1;
(statearr_30912_30997[(2)] = inst_30852);

(statearr_30912_30997[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (46))){
var inst_30894 = (state_30899[(2)]);
var state_30899__$1 = state_30899;
var statearr_30913_30998 = state_30899__$1;
(statearr_30913_30998[(2)] = inst_30894);

(statearr_30913_30998[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (4))){
var inst_30796 = (state_30899[(2)]);
var inst_30797 = cljs.core.List.EMPTY;
var inst_30798 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30797);
var inst_30799 = (function (){return ((function (inst_30796,inst_30797,inst_30798,state_val_30900,c__27082__auto__,map__30744,map__30744__$1,opts,before_jsload,on_jsload,reload_dependents,map__30745,map__30745__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30493_SHARP_){
var and__24863__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30493_SHARP_);
if(cljs.core.truth_(and__24863__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30493_SHARP_));
} else {
return and__24863__auto__;
}
});
;})(inst_30796,inst_30797,inst_30798,state_val_30900,c__27082__auto__,map__30744,map__30744__$1,opts,before_jsload,on_jsload,reload_dependents,map__30745,map__30745__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30800 = cljs.core.filter.call(null,inst_30799,files);
var inst_30801 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30802 = cljs.core.concat.call(null,inst_30800,inst_30801);
var state_30899__$1 = (function (){var statearr_30914 = state_30899;
(statearr_30914[(12)] = inst_30802);

(statearr_30914[(17)] = inst_30796);

(statearr_30914[(18)] = inst_30798);

return statearr_30914;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30915_30999 = state_30899__$1;
(statearr_30915_30999[(1)] = (16));

} else {
var statearr_30916_31000 = state_30899__$1;
(statearr_30916_31000[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (15))){
var inst_30786 = (state_30899[(2)]);
var state_30899__$1 = state_30899;
var statearr_30917_31001 = state_30899__$1;
(statearr_30917_31001[(2)] = inst_30786);

(statearr_30917_31001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (21))){
var inst_30812 = (state_30899[(19)]);
var inst_30812__$1 = (state_30899[(2)]);
var inst_30813 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30812__$1);
var state_30899__$1 = (function (){var statearr_30918 = state_30899;
(statearr_30918[(19)] = inst_30812__$1);

return statearr_30918;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30899__$1,(22),inst_30813);
} else {
if((state_val_30900 === (31))){
var inst_30897 = (state_30899[(2)]);
var state_30899__$1 = state_30899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30899__$1,inst_30897);
} else {
if((state_val_30900 === (32))){
var inst_30852 = (state_30899[(16)]);
var inst_30857 = inst_30852.cljs$lang$protocol_mask$partition0$;
var inst_30858 = (inst_30857 & (64));
var inst_30859 = inst_30852.cljs$core$ISeq$;
var inst_30860 = (cljs.core.PROTOCOL_SENTINEL === inst_30859);
var inst_30861 = (inst_30858) || (inst_30860);
var state_30899__$1 = state_30899;
if(cljs.core.truth_(inst_30861)){
var statearr_30919_31002 = state_30899__$1;
(statearr_30919_31002[(1)] = (35));

} else {
var statearr_30920_31003 = state_30899__$1;
(statearr_30920_31003[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (40))){
var inst_30874 = (state_30899[(20)]);
var inst_30873 = (state_30899[(2)]);
var inst_30874__$1 = cljs.core.get.call(null,inst_30873,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30875 = cljs.core.get.call(null,inst_30873,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30876 = cljs.core.not_empty.call(null,inst_30874__$1);
var state_30899__$1 = (function (){var statearr_30921 = state_30899;
(statearr_30921[(20)] = inst_30874__$1);

(statearr_30921[(21)] = inst_30875);

return statearr_30921;
})();
if(cljs.core.truth_(inst_30876)){
var statearr_30922_31004 = state_30899__$1;
(statearr_30922_31004[(1)] = (41));

} else {
var statearr_30923_31005 = state_30899__$1;
(statearr_30923_31005[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (33))){
var state_30899__$1 = state_30899;
var statearr_30924_31006 = state_30899__$1;
(statearr_30924_31006[(2)] = false);

(statearr_30924_31006[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (13))){
var inst_30772 = (state_30899[(22)]);
var inst_30776 = cljs.core.chunk_first.call(null,inst_30772);
var inst_30777 = cljs.core.chunk_rest.call(null,inst_30772);
var inst_30778 = cljs.core.count.call(null,inst_30776);
var inst_30759 = inst_30777;
var inst_30760 = inst_30776;
var inst_30761 = inst_30778;
var inst_30762 = (0);
var state_30899__$1 = (function (){var statearr_30925 = state_30899;
(statearr_30925[(7)] = inst_30762);

(statearr_30925[(8)] = inst_30761);

(statearr_30925[(9)] = inst_30760);

(statearr_30925[(10)] = inst_30759);

return statearr_30925;
})();
var statearr_30926_31007 = state_30899__$1;
(statearr_30926_31007[(2)] = null);

(statearr_30926_31007[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (22))){
var inst_30812 = (state_30899[(19)]);
var inst_30816 = (state_30899[(23)]);
var inst_30820 = (state_30899[(24)]);
var inst_30815 = (state_30899[(25)]);
var inst_30815__$1 = (state_30899[(2)]);
var inst_30816__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30815__$1);
var inst_30817 = (function (){var all_files = inst_30812;
var res_SINGLEQUOTE_ = inst_30815__$1;
var res = inst_30816__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30812,inst_30816,inst_30820,inst_30815,inst_30815__$1,inst_30816__$1,state_val_30900,c__27082__auto__,map__30744,map__30744__$1,opts,before_jsload,on_jsload,reload_dependents,map__30745,map__30745__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30494_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30494_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30812,inst_30816,inst_30820,inst_30815,inst_30815__$1,inst_30816__$1,state_val_30900,c__27082__auto__,map__30744,map__30744__$1,opts,before_jsload,on_jsload,reload_dependents,map__30745,map__30745__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30818 = cljs.core.filter.call(null,inst_30817,inst_30815__$1);
var inst_30819 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30820__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30819);
var inst_30821 = cljs.core.not_empty.call(null,inst_30820__$1);
var state_30899__$1 = (function (){var statearr_30927 = state_30899;
(statearr_30927[(23)] = inst_30816__$1);

(statearr_30927[(24)] = inst_30820__$1);

(statearr_30927[(25)] = inst_30815__$1);

(statearr_30927[(26)] = inst_30818);

return statearr_30927;
})();
if(cljs.core.truth_(inst_30821)){
var statearr_30928_31008 = state_30899__$1;
(statearr_30928_31008[(1)] = (23));

} else {
var statearr_30929_31009 = state_30899__$1;
(statearr_30929_31009[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (36))){
var state_30899__$1 = state_30899;
var statearr_30930_31010 = state_30899__$1;
(statearr_30930_31010[(2)] = false);

(statearr_30930_31010[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (41))){
var inst_30874 = (state_30899[(20)]);
var inst_30878 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30879 = cljs.core.map.call(null,inst_30878,inst_30874);
var inst_30880 = cljs.core.pr_str.call(null,inst_30879);
var inst_30881 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30880)].join('');
var inst_30882 = figwheel.client.utils.log.call(null,inst_30881);
var state_30899__$1 = state_30899;
var statearr_30931_31011 = state_30899__$1;
(statearr_30931_31011[(2)] = inst_30882);

(statearr_30931_31011[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (43))){
var inst_30875 = (state_30899[(21)]);
var inst_30885 = (state_30899[(2)]);
var inst_30886 = cljs.core.not_empty.call(null,inst_30875);
var state_30899__$1 = (function (){var statearr_30932 = state_30899;
(statearr_30932[(27)] = inst_30885);

return statearr_30932;
})();
if(cljs.core.truth_(inst_30886)){
var statearr_30933_31012 = state_30899__$1;
(statearr_30933_31012[(1)] = (44));

} else {
var statearr_30934_31013 = state_30899__$1;
(statearr_30934_31013[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (29))){
var inst_30812 = (state_30899[(19)]);
var inst_30816 = (state_30899[(23)]);
var inst_30820 = (state_30899[(24)]);
var inst_30815 = (state_30899[(25)]);
var inst_30852 = (state_30899[(16)]);
var inst_30818 = (state_30899[(26)]);
var inst_30848 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30851 = (function (){var all_files = inst_30812;
var res_SINGLEQUOTE_ = inst_30815;
var res = inst_30816;
var files_not_loaded = inst_30818;
var dependencies_that_loaded = inst_30820;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30812,inst_30816,inst_30820,inst_30815,inst_30852,inst_30818,inst_30848,state_val_30900,c__27082__auto__,map__30744,map__30744__$1,opts,before_jsload,on_jsload,reload_dependents,map__30745,map__30745__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30850){
var map__30935 = p__30850;
var map__30935__$1 = ((((!((map__30935 == null)))?((((map__30935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30935):map__30935);
var namespace = cljs.core.get.call(null,map__30935__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30812,inst_30816,inst_30820,inst_30815,inst_30852,inst_30818,inst_30848,state_val_30900,c__27082__auto__,map__30744,map__30744__$1,opts,before_jsload,on_jsload,reload_dependents,map__30745,map__30745__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30852__$1 = cljs.core.group_by.call(null,inst_30851,inst_30818);
var inst_30854 = (inst_30852__$1 == null);
var inst_30855 = cljs.core.not.call(null,inst_30854);
var state_30899__$1 = (function (){var statearr_30937 = state_30899;
(statearr_30937[(28)] = inst_30848);

(statearr_30937[(16)] = inst_30852__$1);

return statearr_30937;
})();
if(inst_30855){
var statearr_30938_31014 = state_30899__$1;
(statearr_30938_31014[(1)] = (32));

} else {
var statearr_30939_31015 = state_30899__$1;
(statearr_30939_31015[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (44))){
var inst_30875 = (state_30899[(21)]);
var inst_30888 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30875);
var inst_30889 = cljs.core.pr_str.call(null,inst_30888);
var inst_30890 = [cljs.core.str("not required: "),cljs.core.str(inst_30889)].join('');
var inst_30891 = figwheel.client.utils.log.call(null,inst_30890);
var state_30899__$1 = state_30899;
var statearr_30940_31016 = state_30899__$1;
(statearr_30940_31016[(2)] = inst_30891);

(statearr_30940_31016[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (6))){
var inst_30793 = (state_30899[(2)]);
var state_30899__$1 = state_30899;
var statearr_30941_31017 = state_30899__$1;
(statearr_30941_31017[(2)] = inst_30793);

(statearr_30941_31017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (28))){
var inst_30818 = (state_30899[(26)]);
var inst_30845 = (state_30899[(2)]);
var inst_30846 = cljs.core.not_empty.call(null,inst_30818);
var state_30899__$1 = (function (){var statearr_30942 = state_30899;
(statearr_30942[(29)] = inst_30845);

return statearr_30942;
})();
if(cljs.core.truth_(inst_30846)){
var statearr_30943_31018 = state_30899__$1;
(statearr_30943_31018[(1)] = (29));

} else {
var statearr_30944_31019 = state_30899__$1;
(statearr_30944_31019[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (25))){
var inst_30816 = (state_30899[(23)]);
var inst_30832 = (state_30899[(2)]);
var inst_30833 = cljs.core.not_empty.call(null,inst_30816);
var state_30899__$1 = (function (){var statearr_30945 = state_30899;
(statearr_30945[(30)] = inst_30832);

return statearr_30945;
})();
if(cljs.core.truth_(inst_30833)){
var statearr_30946_31020 = state_30899__$1;
(statearr_30946_31020[(1)] = (26));

} else {
var statearr_30947_31021 = state_30899__$1;
(statearr_30947_31021[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (34))){
var inst_30868 = (state_30899[(2)]);
var state_30899__$1 = state_30899;
if(cljs.core.truth_(inst_30868)){
var statearr_30948_31022 = state_30899__$1;
(statearr_30948_31022[(1)] = (38));

} else {
var statearr_30949_31023 = state_30899__$1;
(statearr_30949_31023[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (17))){
var state_30899__$1 = state_30899;
var statearr_30950_31024 = state_30899__$1;
(statearr_30950_31024[(2)] = recompile_dependents);

(statearr_30950_31024[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (3))){
var state_30899__$1 = state_30899;
var statearr_30951_31025 = state_30899__$1;
(statearr_30951_31025[(2)] = null);

(statearr_30951_31025[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (12))){
var inst_30789 = (state_30899[(2)]);
var state_30899__$1 = state_30899;
var statearr_30952_31026 = state_30899__$1;
(statearr_30952_31026[(2)] = inst_30789);

(statearr_30952_31026[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (2))){
var inst_30751 = (state_30899[(13)]);
var inst_30758 = cljs.core.seq.call(null,inst_30751);
var inst_30759 = inst_30758;
var inst_30760 = null;
var inst_30761 = (0);
var inst_30762 = (0);
var state_30899__$1 = (function (){var statearr_30953 = state_30899;
(statearr_30953[(7)] = inst_30762);

(statearr_30953[(8)] = inst_30761);

(statearr_30953[(9)] = inst_30760);

(statearr_30953[(10)] = inst_30759);

return statearr_30953;
})();
var statearr_30954_31027 = state_30899__$1;
(statearr_30954_31027[(2)] = null);

(statearr_30954_31027[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (23))){
var inst_30812 = (state_30899[(19)]);
var inst_30816 = (state_30899[(23)]);
var inst_30820 = (state_30899[(24)]);
var inst_30815 = (state_30899[(25)]);
var inst_30818 = (state_30899[(26)]);
var inst_30823 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30825 = (function (){var all_files = inst_30812;
var res_SINGLEQUOTE_ = inst_30815;
var res = inst_30816;
var files_not_loaded = inst_30818;
var dependencies_that_loaded = inst_30820;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30812,inst_30816,inst_30820,inst_30815,inst_30818,inst_30823,state_val_30900,c__27082__auto__,map__30744,map__30744__$1,opts,before_jsload,on_jsload,reload_dependents,map__30745,map__30745__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30824){
var map__30955 = p__30824;
var map__30955__$1 = ((((!((map__30955 == null)))?((((map__30955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30955):map__30955);
var request_url = cljs.core.get.call(null,map__30955__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30812,inst_30816,inst_30820,inst_30815,inst_30818,inst_30823,state_val_30900,c__27082__auto__,map__30744,map__30744__$1,opts,before_jsload,on_jsload,reload_dependents,map__30745,map__30745__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30826 = cljs.core.reverse.call(null,inst_30820);
var inst_30827 = cljs.core.map.call(null,inst_30825,inst_30826);
var inst_30828 = cljs.core.pr_str.call(null,inst_30827);
var inst_30829 = figwheel.client.utils.log.call(null,inst_30828);
var state_30899__$1 = (function (){var statearr_30957 = state_30899;
(statearr_30957[(31)] = inst_30823);

return statearr_30957;
})();
var statearr_30958_31028 = state_30899__$1;
(statearr_30958_31028[(2)] = inst_30829);

(statearr_30958_31028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (35))){
var state_30899__$1 = state_30899;
var statearr_30959_31029 = state_30899__$1;
(statearr_30959_31029[(2)] = true);

(statearr_30959_31029[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (19))){
var inst_30802 = (state_30899[(12)]);
var inst_30808 = figwheel.client.file_reloading.expand_files.call(null,inst_30802);
var state_30899__$1 = state_30899;
var statearr_30960_31030 = state_30899__$1;
(statearr_30960_31030[(2)] = inst_30808);

(statearr_30960_31030[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (11))){
var state_30899__$1 = state_30899;
var statearr_30961_31031 = state_30899__$1;
(statearr_30961_31031[(2)] = null);

(statearr_30961_31031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (9))){
var inst_30791 = (state_30899[(2)]);
var state_30899__$1 = state_30899;
var statearr_30962_31032 = state_30899__$1;
(statearr_30962_31032[(2)] = inst_30791);

(statearr_30962_31032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (5))){
var inst_30762 = (state_30899[(7)]);
var inst_30761 = (state_30899[(8)]);
var inst_30764 = (inst_30762 < inst_30761);
var inst_30765 = inst_30764;
var state_30899__$1 = state_30899;
if(cljs.core.truth_(inst_30765)){
var statearr_30963_31033 = state_30899__$1;
(statearr_30963_31033[(1)] = (7));

} else {
var statearr_30964_31034 = state_30899__$1;
(statearr_30964_31034[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (14))){
var inst_30772 = (state_30899[(22)]);
var inst_30781 = cljs.core.first.call(null,inst_30772);
var inst_30782 = figwheel.client.file_reloading.eval_body.call(null,inst_30781,opts);
var inst_30783 = cljs.core.next.call(null,inst_30772);
var inst_30759 = inst_30783;
var inst_30760 = null;
var inst_30761 = (0);
var inst_30762 = (0);
var state_30899__$1 = (function (){var statearr_30965 = state_30899;
(statearr_30965[(7)] = inst_30762);

(statearr_30965[(32)] = inst_30782);

(statearr_30965[(8)] = inst_30761);

(statearr_30965[(9)] = inst_30760);

(statearr_30965[(10)] = inst_30759);

return statearr_30965;
})();
var statearr_30966_31035 = state_30899__$1;
(statearr_30966_31035[(2)] = null);

(statearr_30966_31035[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (45))){
var state_30899__$1 = state_30899;
var statearr_30967_31036 = state_30899__$1;
(statearr_30967_31036[(2)] = null);

(statearr_30967_31036[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (26))){
var inst_30812 = (state_30899[(19)]);
var inst_30816 = (state_30899[(23)]);
var inst_30820 = (state_30899[(24)]);
var inst_30815 = (state_30899[(25)]);
var inst_30818 = (state_30899[(26)]);
var inst_30835 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30837 = (function (){var all_files = inst_30812;
var res_SINGLEQUOTE_ = inst_30815;
var res = inst_30816;
var files_not_loaded = inst_30818;
var dependencies_that_loaded = inst_30820;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30812,inst_30816,inst_30820,inst_30815,inst_30818,inst_30835,state_val_30900,c__27082__auto__,map__30744,map__30744__$1,opts,before_jsload,on_jsload,reload_dependents,map__30745,map__30745__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30836){
var map__30968 = p__30836;
var map__30968__$1 = ((((!((map__30968 == null)))?((((map__30968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30968):map__30968);
var namespace = cljs.core.get.call(null,map__30968__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30968__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30812,inst_30816,inst_30820,inst_30815,inst_30818,inst_30835,state_val_30900,c__27082__auto__,map__30744,map__30744__$1,opts,before_jsload,on_jsload,reload_dependents,map__30745,map__30745__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30838 = cljs.core.map.call(null,inst_30837,inst_30816);
var inst_30839 = cljs.core.pr_str.call(null,inst_30838);
var inst_30840 = figwheel.client.utils.log.call(null,inst_30839);
var inst_30841 = (function (){var all_files = inst_30812;
var res_SINGLEQUOTE_ = inst_30815;
var res = inst_30816;
var files_not_loaded = inst_30818;
var dependencies_that_loaded = inst_30820;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30812,inst_30816,inst_30820,inst_30815,inst_30818,inst_30835,inst_30837,inst_30838,inst_30839,inst_30840,state_val_30900,c__27082__auto__,map__30744,map__30744__$1,opts,before_jsload,on_jsload,reload_dependents,map__30745,map__30745__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30812,inst_30816,inst_30820,inst_30815,inst_30818,inst_30835,inst_30837,inst_30838,inst_30839,inst_30840,state_val_30900,c__27082__auto__,map__30744,map__30744__$1,opts,before_jsload,on_jsload,reload_dependents,map__30745,map__30745__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30842 = setTimeout(inst_30841,(10));
var state_30899__$1 = (function (){var statearr_30970 = state_30899;
(statearr_30970[(33)] = inst_30835);

(statearr_30970[(34)] = inst_30840);

return statearr_30970;
})();
var statearr_30971_31037 = state_30899__$1;
(statearr_30971_31037[(2)] = inst_30842);

(statearr_30971_31037[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (16))){
var state_30899__$1 = state_30899;
var statearr_30972_31038 = state_30899__$1;
(statearr_30972_31038[(2)] = reload_dependents);

(statearr_30972_31038[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (38))){
var inst_30852 = (state_30899[(16)]);
var inst_30870 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30852);
var state_30899__$1 = state_30899;
var statearr_30973_31039 = state_30899__$1;
(statearr_30973_31039[(2)] = inst_30870);

(statearr_30973_31039[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (30))){
var state_30899__$1 = state_30899;
var statearr_30974_31040 = state_30899__$1;
(statearr_30974_31040[(2)] = null);

(statearr_30974_31040[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (10))){
var inst_30772 = (state_30899[(22)]);
var inst_30774 = cljs.core.chunked_seq_QMARK_.call(null,inst_30772);
var state_30899__$1 = state_30899;
if(inst_30774){
var statearr_30975_31041 = state_30899__$1;
(statearr_30975_31041[(1)] = (13));

} else {
var statearr_30976_31042 = state_30899__$1;
(statearr_30976_31042[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (18))){
var inst_30806 = (state_30899[(2)]);
var state_30899__$1 = state_30899;
if(cljs.core.truth_(inst_30806)){
var statearr_30977_31043 = state_30899__$1;
(statearr_30977_31043[(1)] = (19));

} else {
var statearr_30978_31044 = state_30899__$1;
(statearr_30978_31044[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (42))){
var state_30899__$1 = state_30899;
var statearr_30979_31045 = state_30899__$1;
(statearr_30979_31045[(2)] = null);

(statearr_30979_31045[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (37))){
var inst_30865 = (state_30899[(2)]);
var state_30899__$1 = state_30899;
var statearr_30980_31046 = state_30899__$1;
(statearr_30980_31046[(2)] = inst_30865);

(statearr_30980_31046[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30900 === (8))){
var inst_30772 = (state_30899[(22)]);
var inst_30759 = (state_30899[(10)]);
var inst_30772__$1 = cljs.core.seq.call(null,inst_30759);
var state_30899__$1 = (function (){var statearr_30981 = state_30899;
(statearr_30981[(22)] = inst_30772__$1);

return statearr_30981;
})();
if(inst_30772__$1){
var statearr_30982_31047 = state_30899__$1;
(statearr_30982_31047[(1)] = (10));

} else {
var statearr_30983_31048 = state_30899__$1;
(statearr_30983_31048[(1)] = (11));

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
});})(c__27082__auto__,map__30744,map__30744__$1,opts,before_jsload,on_jsload,reload_dependents,map__30745,map__30745__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26970__auto__,c__27082__auto__,map__30744,map__30744__$1,opts,before_jsload,on_jsload,reload_dependents,map__30745,map__30745__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26971__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26971__auto____0 = (function (){
var statearr_30987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30987[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26971__auto__);

(statearr_30987[(1)] = (1));

return statearr_30987;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26971__auto____1 = (function (state_30899){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_30899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e30988){if((e30988 instanceof Object)){
var ex__26974__auto__ = e30988;
var statearr_30989_31049 = state_30899;
(statearr_30989_31049[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31050 = state_30899;
state_30899 = G__31050;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26971__auto__ = function(state_30899){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26971__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26971__auto____1.call(this,state_30899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26971__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26971__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto__,map__30744,map__30744__$1,opts,before_jsload,on_jsload,reload_dependents,map__30745,map__30745__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27084__auto__ = (function (){var statearr_30990 = f__27083__auto__.call(null);
(statearr_30990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto__);

return statearr_30990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto__,map__30744,map__30744__$1,opts,before_jsload,on_jsload,reload_dependents,map__30745,map__30745__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27082__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31053,link){
var map__31056 = p__31053;
var map__31056__$1 = ((((!((map__31056 == null)))?((((map__31056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31056):map__31056);
var file = cljs.core.get.call(null,map__31056__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31056,map__31056__$1,file){
return (function (p1__31051_SHARP_,p2__31052_SHARP_){
if(cljs.core._EQ_.call(null,p1__31051_SHARP_,p2__31052_SHARP_)){
return p1__31051_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31056,map__31056__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31062){
var map__31063 = p__31062;
var map__31063__$1 = ((((!((map__31063 == null)))?((((map__31063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31063):map__31063);
var match_length = cljs.core.get.call(null,map__31063__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31063__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31058_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31058_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31065 = [];
var len__25983__auto___31068 = arguments.length;
var i__25984__auto___31069 = (0);
while(true){
if((i__25984__auto___31069 < len__25983__auto___31068)){
args31065.push((arguments[i__25984__auto___31069]));

var G__31070 = (i__25984__auto___31069 + (1));
i__25984__auto___31069 = G__31070;
continue;
} else {
}
break;
}

var G__31067 = args31065.length;
switch (G__31067) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31065.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31072_SHARP_,p2__31073_SHARP_){
return cljs.core.assoc.call(null,p1__31072_SHARP_,cljs.core.get.call(null,p2__31073_SHARP_,key),p2__31073_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31074){
var map__31077 = p__31074;
var map__31077__$1 = ((((!((map__31077 == null)))?((((map__31077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31077):map__31077);
var f_data = map__31077__$1;
var file = cljs.core.get.call(null,map__31077__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31079,p__31080){
var map__31089 = p__31079;
var map__31089__$1 = ((((!((map__31089 == null)))?((((map__31089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31089):map__31089);
var opts = map__31089__$1;
var on_cssload = cljs.core.get.call(null,map__31089__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31090 = p__31080;
var map__31090__$1 = ((((!((map__31090 == null)))?((((map__31090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31090.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31090):map__31090);
var files_msg = map__31090__$1;
var files = cljs.core.get.call(null,map__31090__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31093_31097 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__31094_31098 = null;
var count__31095_31099 = (0);
var i__31096_31100 = (0);
while(true){
if((i__31096_31100 < count__31095_31099)){
var f_31101 = cljs.core._nth.call(null,chunk__31094_31098,i__31096_31100);
figwheel.client.file_reloading.reload_css_file.call(null,f_31101);

var G__31102 = seq__31093_31097;
var G__31103 = chunk__31094_31098;
var G__31104 = count__31095_31099;
var G__31105 = (i__31096_31100 + (1));
seq__31093_31097 = G__31102;
chunk__31094_31098 = G__31103;
count__31095_31099 = G__31104;
i__31096_31100 = G__31105;
continue;
} else {
var temp__4657__auto___31106 = cljs.core.seq.call(null,seq__31093_31097);
if(temp__4657__auto___31106){
var seq__31093_31107__$1 = temp__4657__auto___31106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31093_31107__$1)){
var c__25689__auto___31108 = cljs.core.chunk_first.call(null,seq__31093_31107__$1);
var G__31109 = cljs.core.chunk_rest.call(null,seq__31093_31107__$1);
var G__31110 = c__25689__auto___31108;
var G__31111 = cljs.core.count.call(null,c__25689__auto___31108);
var G__31112 = (0);
seq__31093_31097 = G__31109;
chunk__31094_31098 = G__31110;
count__31095_31099 = G__31111;
i__31096_31100 = G__31112;
continue;
} else {
var f_31113 = cljs.core.first.call(null,seq__31093_31107__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31113);

var G__31114 = cljs.core.next.call(null,seq__31093_31107__$1);
var G__31115 = null;
var G__31116 = (0);
var G__31117 = (0);
seq__31093_31097 = G__31114;
chunk__31094_31098 = G__31115;
count__31095_31099 = G__31116;
i__31096_31100 = G__31117;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31089,map__31089__$1,opts,on_cssload,map__31090,map__31090__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__31089,map__31089__$1,opts,on_cssload,map__31090,map__31090__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1483983826316