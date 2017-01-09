// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args34601 = [];
var len__25983__auto___34604 = arguments.length;
var i__25984__auto___34605 = (0);
while(true){
if((i__25984__auto___34605 < len__25983__auto___34604)){
args34601.push((arguments[i__25984__auto___34605]));

var G__34606 = (i__25984__auto___34605 + (1));
i__25984__auto___34605 = G__34606;
continue;
} else {
}
break;
}

var G__34603 = args34601.length;
switch (G__34603) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34601.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

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
var args__25990__auto__ = [];
var len__25983__auto___34609 = arguments.length;
var i__25984__auto___34610 = (0);
while(true){
if((i__25984__auto___34610 < len__25983__auto___34609)){
args__25990__auto__.push((arguments[i__25984__auto___34610]));

var G__34611 = (i__25984__auto___34610 + (1));
i__25984__auto___34610 = G__34611;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34608){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34608));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25990__auto__ = [];
var len__25983__auto___34613 = arguments.length;
var i__25984__auto___34614 = (0);
while(true){
if((i__25984__auto___34614 < len__25983__auto___34613)){
args__25990__auto__.push((arguments[i__25984__auto___34614]));

var G__34615 = (i__25984__auto___34614 + (1));
i__25984__auto___34614 = G__34615;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34612){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34612));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__34616 = cljs.core._EQ_;
var expr__34617 = (function (){var or__24875__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e34620){if((e34620 instanceof Error)){
var e = e34620;
return false;
} else {
throw e34620;

}
}})();
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__34616.call(null,"true",expr__34617))){
return true;
} else {
if(cljs.core.truth_(pred__34616.call(null,"false",expr__34617))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34617)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e34622){if((e34622 instanceof Error)){
var e = e34622;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e34622;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34623){
var map__34626 = p__34623;
var map__34626__$1 = ((((!((map__34626 == null)))?((((map__34626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34626):map__34626);
var message = cljs.core.get.call(null,map__34626__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34626__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24875__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24863__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24863__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24863__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
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
var c__27082__auto___34788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto___34788,ch){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto___34788,ch){
return (function (state_34757){
var state_val_34758 = (state_34757[(1)]);
if((state_val_34758 === (7))){
var inst_34753 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
var statearr_34759_34789 = state_34757__$1;
(statearr_34759_34789[(2)] = inst_34753);

(statearr_34759_34789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (1))){
var state_34757__$1 = state_34757;
var statearr_34760_34790 = state_34757__$1;
(statearr_34760_34790[(2)] = null);

(statearr_34760_34790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (4))){
var inst_34710 = (state_34757[(7)]);
var inst_34710__$1 = (state_34757[(2)]);
var state_34757__$1 = (function (){var statearr_34761 = state_34757;
(statearr_34761[(7)] = inst_34710__$1);

return statearr_34761;
})();
if(cljs.core.truth_(inst_34710__$1)){
var statearr_34762_34791 = state_34757__$1;
(statearr_34762_34791[(1)] = (5));

} else {
var statearr_34763_34792 = state_34757__$1;
(statearr_34763_34792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (15))){
var inst_34717 = (state_34757[(8)]);
var inst_34732 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34717);
var inst_34733 = cljs.core.first.call(null,inst_34732);
var inst_34734 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34733);
var inst_34735 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_34734)].join('');
var inst_34736 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34735);
var state_34757__$1 = state_34757;
var statearr_34764_34793 = state_34757__$1;
(statearr_34764_34793[(2)] = inst_34736);

(statearr_34764_34793[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (13))){
var inst_34741 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
var statearr_34765_34794 = state_34757__$1;
(statearr_34765_34794[(2)] = inst_34741);

(statearr_34765_34794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (6))){
var state_34757__$1 = state_34757;
var statearr_34766_34795 = state_34757__$1;
(statearr_34766_34795[(2)] = null);

(statearr_34766_34795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (17))){
var inst_34739 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
var statearr_34767_34796 = state_34757__$1;
(statearr_34767_34796[(2)] = inst_34739);

(statearr_34767_34796[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (3))){
var inst_34755 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34757__$1,inst_34755);
} else {
if((state_val_34758 === (12))){
var inst_34716 = (state_34757[(9)]);
var inst_34730 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34716,opts);
var state_34757__$1 = state_34757;
if(cljs.core.truth_(inst_34730)){
var statearr_34768_34797 = state_34757__$1;
(statearr_34768_34797[(1)] = (15));

} else {
var statearr_34769_34798 = state_34757__$1;
(statearr_34769_34798[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (2))){
var state_34757__$1 = state_34757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34757__$1,(4),ch);
} else {
if((state_val_34758 === (11))){
var inst_34717 = (state_34757[(8)]);
var inst_34722 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34723 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34717);
var inst_34724 = cljs.core.async.timeout.call(null,(1000));
var inst_34725 = [inst_34723,inst_34724];
var inst_34726 = (new cljs.core.PersistentVector(null,2,(5),inst_34722,inst_34725,null));
var state_34757__$1 = state_34757;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34757__$1,(14),inst_34726);
} else {
if((state_val_34758 === (9))){
var inst_34717 = (state_34757[(8)]);
var inst_34743 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34744 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34717);
var inst_34745 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34744);
var inst_34746 = [cljs.core.str("Not loading: "),cljs.core.str(inst_34745)].join('');
var inst_34747 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34746);
var state_34757__$1 = (function (){var statearr_34770 = state_34757;
(statearr_34770[(10)] = inst_34743);

return statearr_34770;
})();
var statearr_34771_34799 = state_34757__$1;
(statearr_34771_34799[(2)] = inst_34747);

(statearr_34771_34799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (5))){
var inst_34710 = (state_34757[(7)]);
var inst_34712 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34713 = (new cljs.core.PersistentArrayMap(null,2,inst_34712,null));
var inst_34714 = (new cljs.core.PersistentHashSet(null,inst_34713,null));
var inst_34715 = figwheel.client.focus_msgs.call(null,inst_34714,inst_34710);
var inst_34716 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34715);
var inst_34717 = cljs.core.first.call(null,inst_34715);
var inst_34718 = figwheel.client.autoload_QMARK_.call(null);
var state_34757__$1 = (function (){var statearr_34772 = state_34757;
(statearr_34772[(9)] = inst_34716);

(statearr_34772[(8)] = inst_34717);

return statearr_34772;
})();
if(cljs.core.truth_(inst_34718)){
var statearr_34773_34800 = state_34757__$1;
(statearr_34773_34800[(1)] = (8));

} else {
var statearr_34774_34801 = state_34757__$1;
(statearr_34774_34801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (14))){
var inst_34728 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
var statearr_34775_34802 = state_34757__$1;
(statearr_34775_34802[(2)] = inst_34728);

(statearr_34775_34802[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (16))){
var state_34757__$1 = state_34757;
var statearr_34776_34803 = state_34757__$1;
(statearr_34776_34803[(2)] = null);

(statearr_34776_34803[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (10))){
var inst_34749 = (state_34757[(2)]);
var state_34757__$1 = (function (){var statearr_34777 = state_34757;
(statearr_34777[(11)] = inst_34749);

return statearr_34777;
})();
var statearr_34778_34804 = state_34757__$1;
(statearr_34778_34804[(2)] = null);

(statearr_34778_34804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (8))){
var inst_34716 = (state_34757[(9)]);
var inst_34720 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34716,opts);
var state_34757__$1 = state_34757;
if(cljs.core.truth_(inst_34720)){
var statearr_34779_34805 = state_34757__$1;
(statearr_34779_34805[(1)] = (11));

} else {
var statearr_34780_34806 = state_34757__$1;
(statearr_34780_34806[(1)] = (12));

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
});})(c__27082__auto___34788,ch))
;
return ((function (switch__26970__auto__,c__27082__auto___34788,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26971__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26971__auto____0 = (function (){
var statearr_34784 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34784[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26971__auto__);

(statearr_34784[(1)] = (1));

return statearr_34784;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26971__auto____1 = (function (state_34757){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_34757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e34785){if((e34785 instanceof Object)){
var ex__26974__auto__ = e34785;
var statearr_34786_34807 = state_34757;
(statearr_34786_34807[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34808 = state_34757;
state_34757 = G__34808;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26971__auto__ = function(state_34757){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26971__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26971__auto____1.call(this,state_34757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26971__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26971__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto___34788,ch))
})();
var state__27084__auto__ = (function (){var statearr_34787 = f__27083__auto__.call(null);
(statearr_34787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto___34788);

return statearr_34787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto___34788,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34809_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34809_SHARP_));
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
var base_path_34812 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34812){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e34811){if((e34811 instanceof Error)){
var e = e34811;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34812], null));
} else {
var e = e34811;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_34812))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34813){
var map__34822 = p__34813;
var map__34822__$1 = ((((!((map__34822 == null)))?((((map__34822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34822):map__34822);
var opts = map__34822__$1;
var build_id = cljs.core.get.call(null,map__34822__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34822,map__34822__$1,opts,build_id){
return (function (p__34824){
var vec__34825 = p__34824;
var seq__34826 = cljs.core.seq.call(null,vec__34825);
var first__34827 = cljs.core.first.call(null,seq__34826);
var seq__34826__$1 = cljs.core.next.call(null,seq__34826);
var map__34828 = first__34827;
var map__34828__$1 = ((((!((map__34828 == null)))?((((map__34828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34828):map__34828);
var msg = map__34828__$1;
var msg_name = cljs.core.get.call(null,map__34828__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34826__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34825,seq__34826,first__34827,seq__34826__$1,map__34828,map__34828__$1,msg,msg_name,_,map__34822,map__34822__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34825,seq__34826,first__34827,seq__34826__$1,map__34828,map__34828__$1,msg,msg_name,_,map__34822,map__34822__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34822,map__34822__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34836){
var vec__34837 = p__34836;
var seq__34838 = cljs.core.seq.call(null,vec__34837);
var first__34839 = cljs.core.first.call(null,seq__34838);
var seq__34838__$1 = cljs.core.next.call(null,seq__34838);
var map__34840 = first__34839;
var map__34840__$1 = ((((!((map__34840 == null)))?((((map__34840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34840):map__34840);
var msg = map__34840__$1;
var msg_name = cljs.core.get.call(null,map__34840__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34838__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34842){
var map__34854 = p__34842;
var map__34854__$1 = ((((!((map__34854 == null)))?((((map__34854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34854):map__34854);
var on_compile_warning = cljs.core.get.call(null,map__34854__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34854__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34854,map__34854__$1,on_compile_warning,on_compile_fail){
return (function (p__34856){
var vec__34857 = p__34856;
var seq__34858 = cljs.core.seq.call(null,vec__34857);
var first__34859 = cljs.core.first.call(null,seq__34858);
var seq__34858__$1 = cljs.core.next.call(null,seq__34858);
var map__34860 = first__34859;
var map__34860__$1 = ((((!((map__34860 == null)))?((((map__34860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34860):map__34860);
var msg = map__34860__$1;
var msg_name = cljs.core.get.call(null,map__34860__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34858__$1;
var pred__34862 = cljs.core._EQ_;
var expr__34863 = msg_name;
if(cljs.core.truth_(pred__34862.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34863))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34862.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34863))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34854,map__34854__$1,on_compile_warning,on_compile_fail))
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
var c__27082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto__,msg_hist,msg_names,msg){
return (function (state_35091){
var state_val_35092 = (state_35091[(1)]);
if((state_val_35092 === (7))){
var inst_35011 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
if(cljs.core.truth_(inst_35011)){
var statearr_35093_35143 = state_35091__$1;
(statearr_35093_35143[(1)] = (8));

} else {
var statearr_35094_35144 = state_35091__$1;
(statearr_35094_35144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (20))){
var inst_35085 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35095_35145 = state_35091__$1;
(statearr_35095_35145[(2)] = inst_35085);

(statearr_35095_35145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (27))){
var inst_35081 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35096_35146 = state_35091__$1;
(statearr_35096_35146[(2)] = inst_35081);

(statearr_35096_35146[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (1))){
var inst_35004 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35091__$1 = state_35091;
if(cljs.core.truth_(inst_35004)){
var statearr_35097_35147 = state_35091__$1;
(statearr_35097_35147[(1)] = (2));

} else {
var statearr_35098_35148 = state_35091__$1;
(statearr_35098_35148[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (24))){
var inst_35083 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35099_35149 = state_35091__$1;
(statearr_35099_35149[(2)] = inst_35083);

(statearr_35099_35149[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (4))){
var inst_35089 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35091__$1,inst_35089);
} else {
if((state_val_35092 === (15))){
var inst_35087 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35100_35150 = state_35091__$1;
(statearr_35100_35150[(2)] = inst_35087);

(statearr_35100_35150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (21))){
var inst_35040 = (state_35091[(2)]);
var inst_35041 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35042 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35041);
var state_35091__$1 = (function (){var statearr_35101 = state_35091;
(statearr_35101[(7)] = inst_35040);

return statearr_35101;
})();
var statearr_35102_35151 = state_35091__$1;
(statearr_35102_35151[(2)] = inst_35042);

(statearr_35102_35151[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (31))){
var inst_35070 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35091__$1 = state_35091;
if(cljs.core.truth_(inst_35070)){
var statearr_35103_35152 = state_35091__$1;
(statearr_35103_35152[(1)] = (34));

} else {
var statearr_35104_35153 = state_35091__$1;
(statearr_35104_35153[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (32))){
var inst_35079 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35105_35154 = state_35091__$1;
(statearr_35105_35154[(2)] = inst_35079);

(statearr_35105_35154[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (33))){
var inst_35066 = (state_35091[(2)]);
var inst_35067 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35068 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35067);
var state_35091__$1 = (function (){var statearr_35106 = state_35091;
(statearr_35106[(8)] = inst_35066);

return statearr_35106;
})();
var statearr_35107_35155 = state_35091__$1;
(statearr_35107_35155[(2)] = inst_35068);

(statearr_35107_35155[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (13))){
var inst_35025 = figwheel.client.heads_up.clear.call(null);
var state_35091__$1 = state_35091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35091__$1,(16),inst_35025);
} else {
if((state_val_35092 === (22))){
var inst_35046 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35047 = figwheel.client.heads_up.append_warning_message.call(null,inst_35046);
var state_35091__$1 = state_35091;
var statearr_35108_35156 = state_35091__$1;
(statearr_35108_35156[(2)] = inst_35047);

(statearr_35108_35156[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (36))){
var inst_35077 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35109_35157 = state_35091__$1;
(statearr_35109_35157[(2)] = inst_35077);

(statearr_35109_35157[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (29))){
var inst_35057 = (state_35091[(2)]);
var inst_35058 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35059 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35058);
var state_35091__$1 = (function (){var statearr_35110 = state_35091;
(statearr_35110[(9)] = inst_35057);

return statearr_35110;
})();
var statearr_35111_35158 = state_35091__$1;
(statearr_35111_35158[(2)] = inst_35059);

(statearr_35111_35158[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (6))){
var inst_35006 = (state_35091[(10)]);
var state_35091__$1 = state_35091;
var statearr_35112_35159 = state_35091__$1;
(statearr_35112_35159[(2)] = inst_35006);

(statearr_35112_35159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (28))){
var inst_35053 = (state_35091[(2)]);
var inst_35054 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35055 = figwheel.client.heads_up.display_warning.call(null,inst_35054);
var state_35091__$1 = (function (){var statearr_35113 = state_35091;
(statearr_35113[(11)] = inst_35053);

return statearr_35113;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35091__$1,(29),inst_35055);
} else {
if((state_val_35092 === (25))){
var inst_35051 = figwheel.client.heads_up.clear.call(null);
var state_35091__$1 = state_35091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35091__$1,(28),inst_35051);
} else {
if((state_val_35092 === (34))){
var inst_35072 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35091__$1 = state_35091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35091__$1,(37),inst_35072);
} else {
if((state_val_35092 === (17))){
var inst_35031 = (state_35091[(2)]);
var inst_35032 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35033 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35032);
var state_35091__$1 = (function (){var statearr_35114 = state_35091;
(statearr_35114[(12)] = inst_35031);

return statearr_35114;
})();
var statearr_35115_35160 = state_35091__$1;
(statearr_35115_35160[(2)] = inst_35033);

(statearr_35115_35160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (3))){
var inst_35023 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35091__$1 = state_35091;
if(cljs.core.truth_(inst_35023)){
var statearr_35116_35161 = state_35091__$1;
(statearr_35116_35161[(1)] = (13));

} else {
var statearr_35117_35162 = state_35091__$1;
(statearr_35117_35162[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (12))){
var inst_35019 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35118_35163 = state_35091__$1;
(statearr_35118_35163[(2)] = inst_35019);

(statearr_35118_35163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (2))){
var inst_35006 = (state_35091[(10)]);
var inst_35006__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35091__$1 = (function (){var statearr_35119 = state_35091;
(statearr_35119[(10)] = inst_35006__$1);

return statearr_35119;
})();
if(cljs.core.truth_(inst_35006__$1)){
var statearr_35120_35164 = state_35091__$1;
(statearr_35120_35164[(1)] = (5));

} else {
var statearr_35121_35165 = state_35091__$1;
(statearr_35121_35165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (23))){
var inst_35049 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35091__$1 = state_35091;
if(cljs.core.truth_(inst_35049)){
var statearr_35122_35166 = state_35091__$1;
(statearr_35122_35166[(1)] = (25));

} else {
var statearr_35123_35167 = state_35091__$1;
(statearr_35123_35167[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (35))){
var state_35091__$1 = state_35091;
var statearr_35124_35168 = state_35091__$1;
(statearr_35124_35168[(2)] = null);

(statearr_35124_35168[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (19))){
var inst_35044 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35091__$1 = state_35091;
if(cljs.core.truth_(inst_35044)){
var statearr_35125_35169 = state_35091__$1;
(statearr_35125_35169[(1)] = (22));

} else {
var statearr_35126_35170 = state_35091__$1;
(statearr_35126_35170[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (11))){
var inst_35015 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35127_35171 = state_35091__$1;
(statearr_35127_35171[(2)] = inst_35015);

(statearr_35127_35171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (9))){
var inst_35017 = figwheel.client.heads_up.clear.call(null);
var state_35091__$1 = state_35091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35091__$1,(12),inst_35017);
} else {
if((state_val_35092 === (5))){
var inst_35008 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35091__$1 = state_35091;
var statearr_35128_35172 = state_35091__$1;
(statearr_35128_35172[(2)] = inst_35008);

(statearr_35128_35172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (14))){
var inst_35035 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35091__$1 = state_35091;
if(cljs.core.truth_(inst_35035)){
var statearr_35129_35173 = state_35091__$1;
(statearr_35129_35173[(1)] = (18));

} else {
var statearr_35130_35174 = state_35091__$1;
(statearr_35130_35174[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (26))){
var inst_35061 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35091__$1 = state_35091;
if(cljs.core.truth_(inst_35061)){
var statearr_35131_35175 = state_35091__$1;
(statearr_35131_35175[(1)] = (30));

} else {
var statearr_35132_35176 = state_35091__$1;
(statearr_35132_35176[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (16))){
var inst_35027 = (state_35091[(2)]);
var inst_35028 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35029 = figwheel.client.heads_up.display_exception.call(null,inst_35028);
var state_35091__$1 = (function (){var statearr_35133 = state_35091;
(statearr_35133[(13)] = inst_35027);

return statearr_35133;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35091__$1,(17),inst_35029);
} else {
if((state_val_35092 === (30))){
var inst_35063 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35064 = figwheel.client.heads_up.display_warning.call(null,inst_35063);
var state_35091__$1 = state_35091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35091__$1,(33),inst_35064);
} else {
if((state_val_35092 === (10))){
var inst_35021 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35134_35177 = state_35091__$1;
(statearr_35134_35177[(2)] = inst_35021);

(statearr_35134_35177[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (18))){
var inst_35037 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35038 = figwheel.client.heads_up.display_exception.call(null,inst_35037);
var state_35091__$1 = state_35091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35091__$1,(21),inst_35038);
} else {
if((state_val_35092 === (37))){
var inst_35074 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35135_35178 = state_35091__$1;
(statearr_35135_35178[(2)] = inst_35074);

(statearr_35135_35178[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (8))){
var inst_35013 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35091__$1 = state_35091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35091__$1,(11),inst_35013);
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
});})(c__27082__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26970__auto__,c__27082__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26971__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26971__auto____0 = (function (){
var statearr_35139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35139[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26971__auto__);

(statearr_35139[(1)] = (1));

return statearr_35139;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26971__auto____1 = (function (state_35091){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_35091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e35140){if((e35140 instanceof Object)){
var ex__26974__auto__ = e35140;
var statearr_35141_35179 = state_35091;
(statearr_35141_35179[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35180 = state_35091;
state_35091 = G__35180;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26971__auto__ = function(state_35091){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26971__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26971__auto____1.call(this,state_35091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26971__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26971__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto__,msg_hist,msg_names,msg))
})();
var state__27084__auto__ = (function (){var statearr_35142 = f__27083__auto__.call(null);
(statearr_35142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto__);

return statearr_35142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto__,msg_hist,msg_names,msg))
);

return c__27082__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27082__auto___35243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto___35243,ch){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto___35243,ch){
return (function (state_35226){
var state_val_35227 = (state_35226[(1)]);
if((state_val_35227 === (1))){
var state_35226__$1 = state_35226;
var statearr_35228_35244 = state_35226__$1;
(statearr_35228_35244[(2)] = null);

(statearr_35228_35244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35227 === (2))){
var state_35226__$1 = state_35226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35226__$1,(4),ch);
} else {
if((state_val_35227 === (3))){
var inst_35224 = (state_35226[(2)]);
var state_35226__$1 = state_35226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35226__$1,inst_35224);
} else {
if((state_val_35227 === (4))){
var inst_35214 = (state_35226[(7)]);
var inst_35214__$1 = (state_35226[(2)]);
var state_35226__$1 = (function (){var statearr_35229 = state_35226;
(statearr_35229[(7)] = inst_35214__$1);

return statearr_35229;
})();
if(cljs.core.truth_(inst_35214__$1)){
var statearr_35230_35245 = state_35226__$1;
(statearr_35230_35245[(1)] = (5));

} else {
var statearr_35231_35246 = state_35226__$1;
(statearr_35231_35246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35227 === (5))){
var inst_35214 = (state_35226[(7)]);
var inst_35216 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35214);
var state_35226__$1 = state_35226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35226__$1,(8),inst_35216);
} else {
if((state_val_35227 === (6))){
var state_35226__$1 = state_35226;
var statearr_35232_35247 = state_35226__$1;
(statearr_35232_35247[(2)] = null);

(statearr_35232_35247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35227 === (7))){
var inst_35222 = (state_35226[(2)]);
var state_35226__$1 = state_35226;
var statearr_35233_35248 = state_35226__$1;
(statearr_35233_35248[(2)] = inst_35222);

(statearr_35233_35248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35227 === (8))){
var inst_35218 = (state_35226[(2)]);
var state_35226__$1 = (function (){var statearr_35234 = state_35226;
(statearr_35234[(8)] = inst_35218);

return statearr_35234;
})();
var statearr_35235_35249 = state_35226__$1;
(statearr_35235_35249[(2)] = null);

(statearr_35235_35249[(1)] = (2));


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
});})(c__27082__auto___35243,ch))
;
return ((function (switch__26970__auto__,c__27082__auto___35243,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26971__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26971__auto____0 = (function (){
var statearr_35239 = [null,null,null,null,null,null,null,null,null];
(statearr_35239[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26971__auto__);

(statearr_35239[(1)] = (1));

return statearr_35239;
});
var figwheel$client$heads_up_plugin_$_state_machine__26971__auto____1 = (function (state_35226){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_35226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e35240){if((e35240 instanceof Object)){
var ex__26974__auto__ = e35240;
var statearr_35241_35250 = state_35226;
(statearr_35241_35250[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35251 = state_35226;
state_35226 = G__35251;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26971__auto__ = function(state_35226){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26971__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26971__auto____1.call(this,state_35226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26971__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26971__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto___35243,ch))
})();
var state__27084__auto__ = (function (){var statearr_35242 = f__27083__auto__.call(null);
(statearr_35242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto___35243);

return statearr_35242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto___35243,ch))
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
var c__27082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto__){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto__){
return (function (state_35272){
var state_val_35273 = (state_35272[(1)]);
if((state_val_35273 === (1))){
var inst_35267 = cljs.core.async.timeout.call(null,(3000));
var state_35272__$1 = state_35272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35272__$1,(2),inst_35267);
} else {
if((state_val_35273 === (2))){
var inst_35269 = (state_35272[(2)]);
var inst_35270 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35272__$1 = (function (){var statearr_35274 = state_35272;
(statearr_35274[(7)] = inst_35269);

return statearr_35274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35272__$1,inst_35270);
} else {
return null;
}
}
});})(c__27082__auto__))
;
return ((function (switch__26970__auto__,c__27082__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26971__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26971__auto____0 = (function (){
var statearr_35278 = [null,null,null,null,null,null,null,null];
(statearr_35278[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26971__auto__);

(statearr_35278[(1)] = (1));

return statearr_35278;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26971__auto____1 = (function (state_35272){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_35272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e35279){if((e35279 instanceof Object)){
var ex__26974__auto__ = e35279;
var statearr_35280_35282 = state_35272;
(statearr_35280_35282[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35283 = state_35272;
state_35272 = G__35283;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26971__auto__ = function(state_35272){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26971__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26971__auto____1.call(this,state_35272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26971__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26971__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto__))
})();
var state__27084__auto__ = (function (){var statearr_35281 = f__27083__auto__.call(null);
(statearr_35281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto__);

return statearr_35281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto__))
);

return c__27082__auto__;
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
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27082__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27083__auto__ = (function (){var switch__26970__auto__ = ((function (c__27082__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35306){
var state_val_35307 = (state_35306[(1)]);
if((state_val_35307 === (1))){
var inst_35300 = cljs.core.async.timeout.call(null,(2000));
var state_35306__$1 = state_35306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35306__$1,(2),inst_35300);
} else {
if((state_val_35307 === (2))){
var inst_35302 = (state_35306[(2)]);
var inst_35303 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35304 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35303);
var state_35306__$1 = (function (){var statearr_35308 = state_35306;
(statearr_35308[(7)] = inst_35302);

return statearr_35308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35306__$1,inst_35304);
} else {
return null;
}
}
});})(c__27082__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26970__auto__,c__27082__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26971__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26971__auto____0 = (function (){
var statearr_35312 = [null,null,null,null,null,null,null,null];
(statearr_35312[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26971__auto__);

(statearr_35312[(1)] = (1));

return statearr_35312;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26971__auto____1 = (function (state_35306){
while(true){
var ret_value__26972__auto__ = (function (){try{while(true){
var result__26973__auto__ = switch__26970__auto__.call(null,state_35306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26973__auto__;
}
break;
}
}catch (e35313){if((e35313 instanceof Object)){
var ex__26974__auto__ = e35313;
var statearr_35314_35316 = state_35306;
(statearr_35314_35316[(5)] = ex__26974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35317 = state_35306;
state_35306 = G__35317;
continue;
} else {
return ret_value__26972__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26971__auto__ = function(state_35306){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26971__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26971__auto____1.call(this,state_35306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26971__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26971__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26971__auto__;
})()
;})(switch__26970__auto__,c__27082__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27084__auto__ = (function (){var statearr_35315 = f__27083__auto__.call(null);
(statearr_35315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27082__auto__);

return statearr_35315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27084__auto__);
});})(c__27082__auto__,figwheel_version,temp__4657__auto__))
);

return c__27082__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35318){
var map__35322 = p__35318;
var map__35322__$1 = ((((!((map__35322 == null)))?((((map__35322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35322.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35322):map__35322);
var file = cljs.core.get.call(null,map__35322__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35322__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35322__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35324 = "";
var G__35324__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35324),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35324);
var G__35324__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35324__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35324__$1);
if(cljs.core.truth_((function (){var and__24863__auto__ = line;
if(cljs.core.truth_(and__24863__auto__)){
return column;
} else {
return and__24863__auto__;
}
})())){
return [cljs.core.str(G__35324__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35324__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35325){
var map__35332 = p__35325;
var map__35332__$1 = ((((!((map__35332 == null)))?((((map__35332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35332.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35332):map__35332);
var ed = map__35332__$1;
var formatted_exception = cljs.core.get.call(null,map__35332__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35332__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35332__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35334_35338 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35335_35339 = null;
var count__35336_35340 = (0);
var i__35337_35341 = (0);
while(true){
if((i__35337_35341 < count__35336_35340)){
var msg_35342 = cljs.core._nth.call(null,chunk__35335_35339,i__35337_35341);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35342);

var G__35343 = seq__35334_35338;
var G__35344 = chunk__35335_35339;
var G__35345 = count__35336_35340;
var G__35346 = (i__35337_35341 + (1));
seq__35334_35338 = G__35343;
chunk__35335_35339 = G__35344;
count__35336_35340 = G__35345;
i__35337_35341 = G__35346;
continue;
} else {
var temp__4657__auto___35347 = cljs.core.seq.call(null,seq__35334_35338);
if(temp__4657__auto___35347){
var seq__35334_35348__$1 = temp__4657__auto___35347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35334_35348__$1)){
var c__25689__auto___35349 = cljs.core.chunk_first.call(null,seq__35334_35348__$1);
var G__35350 = cljs.core.chunk_rest.call(null,seq__35334_35348__$1);
var G__35351 = c__25689__auto___35349;
var G__35352 = cljs.core.count.call(null,c__25689__auto___35349);
var G__35353 = (0);
seq__35334_35338 = G__35350;
chunk__35335_35339 = G__35351;
count__35336_35340 = G__35352;
i__35337_35341 = G__35353;
continue;
} else {
var msg_35354 = cljs.core.first.call(null,seq__35334_35348__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35354);

var G__35355 = cljs.core.next.call(null,seq__35334_35348__$1);
var G__35356 = null;
var G__35357 = (0);
var G__35358 = (0);
seq__35334_35338 = G__35355;
chunk__35335_35339 = G__35356;
count__35336_35340 = G__35357;
i__35337_35341 = G__35358;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35359){
var map__35362 = p__35359;
var map__35362__$1 = ((((!((map__35362 == null)))?((((map__35362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35362):map__35362);
var w = map__35362__$1;
var message = cljs.core.get.call(null,map__35362__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__24863__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24863__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24863__auto__;
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
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35374 = cljs.core.seq.call(null,plugins);
var chunk__35375 = null;
var count__35376 = (0);
var i__35377 = (0);
while(true){
if((i__35377 < count__35376)){
var vec__35378 = cljs.core._nth.call(null,chunk__35375,i__35377);
var k = cljs.core.nth.call(null,vec__35378,(0),null);
var plugin = cljs.core.nth.call(null,vec__35378,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35384 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35374,chunk__35375,count__35376,i__35377,pl_35384,vec__35378,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35384.call(null,msg_hist);
});})(seq__35374,chunk__35375,count__35376,i__35377,pl_35384,vec__35378,k,plugin))
);
} else {
}

var G__35385 = seq__35374;
var G__35386 = chunk__35375;
var G__35387 = count__35376;
var G__35388 = (i__35377 + (1));
seq__35374 = G__35385;
chunk__35375 = G__35386;
count__35376 = G__35387;
i__35377 = G__35388;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35374);
if(temp__4657__auto__){
var seq__35374__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35374__$1)){
var c__25689__auto__ = cljs.core.chunk_first.call(null,seq__35374__$1);
var G__35389 = cljs.core.chunk_rest.call(null,seq__35374__$1);
var G__35390 = c__25689__auto__;
var G__35391 = cljs.core.count.call(null,c__25689__auto__);
var G__35392 = (0);
seq__35374 = G__35389;
chunk__35375 = G__35390;
count__35376 = G__35391;
i__35377 = G__35392;
continue;
} else {
var vec__35381 = cljs.core.first.call(null,seq__35374__$1);
var k = cljs.core.nth.call(null,vec__35381,(0),null);
var plugin = cljs.core.nth.call(null,vec__35381,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35393 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35374,chunk__35375,count__35376,i__35377,pl_35393,vec__35381,k,plugin,seq__35374__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35393.call(null,msg_hist);
});})(seq__35374,chunk__35375,count__35376,i__35377,pl_35393,vec__35381,k,plugin,seq__35374__$1,temp__4657__auto__))
);
} else {
}

var G__35394 = cljs.core.next.call(null,seq__35374__$1);
var G__35395 = null;
var G__35396 = (0);
var G__35397 = (0);
seq__35374 = G__35394;
chunk__35375 = G__35395;
count__35376 = G__35396;
i__35377 = G__35397;
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
var args35398 = [];
var len__25983__auto___35405 = arguments.length;
var i__25984__auto___35406 = (0);
while(true){
if((i__25984__auto___35406 < len__25983__auto___35405)){
args35398.push((arguments[i__25984__auto___35406]));

var G__35407 = (i__25984__auto___35406 + (1));
i__25984__auto___35406 = G__35407;
continue;
} else {
}
break;
}

var G__35400 = args35398.length;
switch (G__35400) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35398.length)].join('')));

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

var seq__35401_35409 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35402_35410 = null;
var count__35403_35411 = (0);
var i__35404_35412 = (0);
while(true){
if((i__35404_35412 < count__35403_35411)){
var msg_35413 = cljs.core._nth.call(null,chunk__35402_35410,i__35404_35412);
figwheel.client.socket.handle_incoming_message.call(null,msg_35413);

var G__35414 = seq__35401_35409;
var G__35415 = chunk__35402_35410;
var G__35416 = count__35403_35411;
var G__35417 = (i__35404_35412 + (1));
seq__35401_35409 = G__35414;
chunk__35402_35410 = G__35415;
count__35403_35411 = G__35416;
i__35404_35412 = G__35417;
continue;
} else {
var temp__4657__auto___35418 = cljs.core.seq.call(null,seq__35401_35409);
if(temp__4657__auto___35418){
var seq__35401_35419__$1 = temp__4657__auto___35418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35401_35419__$1)){
var c__25689__auto___35420 = cljs.core.chunk_first.call(null,seq__35401_35419__$1);
var G__35421 = cljs.core.chunk_rest.call(null,seq__35401_35419__$1);
var G__35422 = c__25689__auto___35420;
var G__35423 = cljs.core.count.call(null,c__25689__auto___35420);
var G__35424 = (0);
seq__35401_35409 = G__35421;
chunk__35402_35410 = G__35422;
count__35403_35411 = G__35423;
i__35404_35412 = G__35424;
continue;
} else {
var msg_35425 = cljs.core.first.call(null,seq__35401_35419__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35425);

var G__35426 = cljs.core.next.call(null,seq__35401_35419__$1);
var G__35427 = null;
var G__35428 = (0);
var G__35429 = (0);
seq__35401_35409 = G__35426;
chunk__35402_35410 = G__35427;
count__35403_35411 = G__35428;
i__35404_35412 = G__35429;
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
var args__25990__auto__ = [];
var len__25983__auto___35434 = arguments.length;
var i__25984__auto___35435 = (0);
while(true){
if((i__25984__auto___35435 < len__25983__auto___35434)){
args__25990__auto__.push((arguments[i__25984__auto___35435]));

var G__35436 = (i__25984__auto___35435 + (1));
i__25984__auto___35435 = G__35436;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35431){
var map__35432 = p__35431;
var map__35432__$1 = ((((!((map__35432 == null)))?((((map__35432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35432):map__35432);
var opts = map__35432__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35430){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35430));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35438){if((e35438 instanceof Error)){
var e = e35438;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35438;

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
return (function (p__35442){
var map__35443 = p__35442;
var map__35443__$1 = ((((!((map__35443 == null)))?((((map__35443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35443.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35443):map__35443);
var msg_name = cljs.core.get.call(null,map__35443__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1483983834393