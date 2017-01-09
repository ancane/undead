// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32448){
var map__32473 = p__32448;
var map__32473__$1 = ((((!((map__32473 == null)))?((((map__32473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32473):map__32473);
var m = map__32473__$1;
var n = cljs.core.get.call(null,map__32473__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32473__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32475_32497 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32476_32498 = null;
var count__32477_32499 = (0);
var i__32478_32500 = (0);
while(true){
if((i__32478_32500 < count__32477_32499)){
var f_32501 = cljs.core._nth.call(null,chunk__32476_32498,i__32478_32500);
cljs.core.println.call(null,"  ",f_32501);

var G__32502 = seq__32475_32497;
var G__32503 = chunk__32476_32498;
var G__32504 = count__32477_32499;
var G__32505 = (i__32478_32500 + (1));
seq__32475_32497 = G__32502;
chunk__32476_32498 = G__32503;
count__32477_32499 = G__32504;
i__32478_32500 = G__32505;
continue;
} else {
var temp__4657__auto___32506 = cljs.core.seq.call(null,seq__32475_32497);
if(temp__4657__auto___32506){
var seq__32475_32507__$1 = temp__4657__auto___32506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32475_32507__$1)){
var c__25689__auto___32508 = cljs.core.chunk_first.call(null,seq__32475_32507__$1);
var G__32509 = cljs.core.chunk_rest.call(null,seq__32475_32507__$1);
var G__32510 = c__25689__auto___32508;
var G__32511 = cljs.core.count.call(null,c__25689__auto___32508);
var G__32512 = (0);
seq__32475_32497 = G__32509;
chunk__32476_32498 = G__32510;
count__32477_32499 = G__32511;
i__32478_32500 = G__32512;
continue;
} else {
var f_32513 = cljs.core.first.call(null,seq__32475_32507__$1);
cljs.core.println.call(null,"  ",f_32513);

var G__32514 = cljs.core.next.call(null,seq__32475_32507__$1);
var G__32515 = null;
var G__32516 = (0);
var G__32517 = (0);
seq__32475_32497 = G__32514;
chunk__32476_32498 = G__32515;
count__32477_32499 = G__32516;
i__32478_32500 = G__32517;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32518 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24875__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32518);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32518)))?cljs.core.second.call(null,arglists_32518):arglists_32518));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__32479_32519 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32480_32520 = null;
var count__32481_32521 = (0);
var i__32482_32522 = (0);
while(true){
if((i__32482_32522 < count__32481_32521)){
var vec__32483_32523 = cljs.core._nth.call(null,chunk__32480_32520,i__32482_32522);
var name_32524 = cljs.core.nth.call(null,vec__32483_32523,(0),null);
var map__32486_32525 = cljs.core.nth.call(null,vec__32483_32523,(1),null);
var map__32486_32526__$1 = ((((!((map__32486_32525 == null)))?((((map__32486_32525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32486_32525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32486_32525):map__32486_32525);
var doc_32527 = cljs.core.get.call(null,map__32486_32526__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32528 = cljs.core.get.call(null,map__32486_32526__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32524);

cljs.core.println.call(null," ",arglists_32528);

if(cljs.core.truth_(doc_32527)){
cljs.core.println.call(null," ",doc_32527);
} else {
}

var G__32529 = seq__32479_32519;
var G__32530 = chunk__32480_32520;
var G__32531 = count__32481_32521;
var G__32532 = (i__32482_32522 + (1));
seq__32479_32519 = G__32529;
chunk__32480_32520 = G__32530;
count__32481_32521 = G__32531;
i__32482_32522 = G__32532;
continue;
} else {
var temp__4657__auto___32533 = cljs.core.seq.call(null,seq__32479_32519);
if(temp__4657__auto___32533){
var seq__32479_32534__$1 = temp__4657__auto___32533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32479_32534__$1)){
var c__25689__auto___32535 = cljs.core.chunk_first.call(null,seq__32479_32534__$1);
var G__32536 = cljs.core.chunk_rest.call(null,seq__32479_32534__$1);
var G__32537 = c__25689__auto___32535;
var G__32538 = cljs.core.count.call(null,c__25689__auto___32535);
var G__32539 = (0);
seq__32479_32519 = G__32536;
chunk__32480_32520 = G__32537;
count__32481_32521 = G__32538;
i__32482_32522 = G__32539;
continue;
} else {
var vec__32488_32540 = cljs.core.first.call(null,seq__32479_32534__$1);
var name_32541 = cljs.core.nth.call(null,vec__32488_32540,(0),null);
var map__32491_32542 = cljs.core.nth.call(null,vec__32488_32540,(1),null);
var map__32491_32543__$1 = ((((!((map__32491_32542 == null)))?((((map__32491_32542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32491_32542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32491_32542):map__32491_32542);
var doc_32544 = cljs.core.get.call(null,map__32491_32543__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32545 = cljs.core.get.call(null,map__32491_32543__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32541);

cljs.core.println.call(null," ",arglists_32545);

if(cljs.core.truth_(doc_32544)){
cljs.core.println.call(null," ",doc_32544);
} else {
}

var G__32546 = cljs.core.next.call(null,seq__32479_32534__$1);
var G__32547 = null;
var G__32548 = (0);
var G__32549 = (0);
seq__32479_32519 = G__32546;
chunk__32480_32520 = G__32547;
count__32481_32521 = G__32548;
i__32482_32522 = G__32549;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__32493 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32494 = null;
var count__32495 = (0);
var i__32496 = (0);
while(true){
if((i__32496 < count__32495)){
var role = cljs.core._nth.call(null,chunk__32494,i__32496);
var temp__4657__auto___32550__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32550__$1)){
var spec_32551 = temp__4657__auto___32550__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32551));
} else {
}

var G__32552 = seq__32493;
var G__32553 = chunk__32494;
var G__32554 = count__32495;
var G__32555 = (i__32496 + (1));
seq__32493 = G__32552;
chunk__32494 = G__32553;
count__32495 = G__32554;
i__32496 = G__32555;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32493);
if(temp__4657__auto____$1){
var seq__32493__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32493__$1)){
var c__25689__auto__ = cljs.core.chunk_first.call(null,seq__32493__$1);
var G__32556 = cljs.core.chunk_rest.call(null,seq__32493__$1);
var G__32557 = c__25689__auto__;
var G__32558 = cljs.core.count.call(null,c__25689__auto__);
var G__32559 = (0);
seq__32493 = G__32556;
chunk__32494 = G__32557;
count__32495 = G__32558;
i__32496 = G__32559;
continue;
} else {
var role = cljs.core.first.call(null,seq__32493__$1);
var temp__4657__auto___32560__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32560__$2)){
var spec_32561 = temp__4657__auto___32560__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32561));
} else {
}

var G__32562 = cljs.core.next.call(null,seq__32493__$1);
var G__32563 = null;
var G__32564 = (0);
var G__32565 = (0);
seq__32493 = G__32562;
chunk__32494 = G__32563;
count__32495 = G__32564;
i__32496 = G__32565;
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

//# sourceMappingURL=repl.js.map?rel=1483983829143