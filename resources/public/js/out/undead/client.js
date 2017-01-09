// Compiled by ClojureScript 1.9.293 {}
goog.provide('undead.client');
goog.require('cljs.core');
goog.require('quiescent.core');
goog.require('quiescent.dom');
undead.client.game = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"h1","h1",-1896887462)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"h1","h1",-1896887462)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"h2","h2",-372662728)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"revealed?","revealed?",726959164),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"h3","h3",2067611163)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"h3","h3",2067611163)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"matched?","matched?",-297965314),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"matched?","matched?",-297965314),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"h5","h5",-1829156625)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"h5","h5",-1829156625)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"fg","fg",-101797208)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"fg","fg",-101797208)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"zo","zo",-687055131)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"zo","zo",-687055131)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"zo","zo",-687055131)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"gy","gy",483233100)], null)], null),new cljs.core.Keyword(null,"sand","sand",1204438373),cljs.core.concat.call(null,cljs.core.repeat.call(null,(10),new cljs.core.Keyword(null,"gone","gone",-1158371124)),cljs.core.repeat.call(null,(50),new cljs.core.Keyword(null,"remaining","remaining",-138926777))),new cljs.core.Keyword(null,"foggy?","foggy?",177895659),false], null);
/**
 * 
 */
undead.client.Cell = quiescent.core.component.call(null,(function (cell){
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"cell"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("tile"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(cell))?" revealed":null)),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"matched?","matched?",-297965314).cljs$core$IFn$_invoke$arity$1(cell))?" matched":null))].join('')], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"front"], null)),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("back "),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"face","face",-1356480717).cljs$core$IFn$_invoke$arity$1(cell))),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"matched?","matched?",-297965314).cljs$core$IFn$_invoke$arity$1(cell))?" matched":null))].join('')], null))));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Cell"], null));
/**
 * 
 */
undead.client.Line = quiescent.core.component.call(null,(function (cells){
return cljs.core.apply.call(null,quiescent.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"line"], null),cljs.core.map.call(null,undead.client.Cell,cells));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Line"], null));
/**
 * 
 */
undead.client.Board = quiescent.core.component.call(null,(function (cells){
return cljs.core.apply.call(null,quiescent.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"board clearfix"], null),cljs.core.map.call(null,undead.client.Line,cljs.core.partition.call(null,(4),cells)));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Board"], null));
/**
 * 
 */
undead.client.Timer = quiescent.core.component.call(null,(function (p__36722){
var map__36723 = p__36722;
var map__36723__$1 = ((((!((map__36723 == null)))?((((map__36723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36723):map__36723);
var sand = cljs.core.get.call(null,map__36723__$1,new cljs.core.Keyword(null,"sand","sand",1204438373));
var index = cljs.core.get.call(null,map__36723__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
return cljs.core.apply.call(null,quiescent.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("timer timer-"),cljs.core.str(index)].join('')], null),cljs.core.map.call(null,((function (map__36723,map__36723__$1,sand,index){
return (function (p1__36721_SHARP_){
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("sand "),cljs.core.str(cljs.core.name.call(null,p1__36721_SHARP_))].join('')], null));
});})(map__36723,map__36723__$1,sand,index))
,sand));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Timer"], null));
/**
 * 
 */
undead.client.Timers = quiescent.core.component.call(null,(function (sand){
return cljs.core.apply.call(null,quiescent.dom.div,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (p1__36725_SHARP_,p2__36726_SHARP_){
return undead.client.Timer.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),p1__36725_SHARP_,new cljs.core.Keyword(null,"sand","sand",1204438373),p2__36726_SHARP_], null));
}),cljs.core.partition.call(null,(30),sand)));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Timers"], null));
/**
 * 
 */
undead.client.Game = quiescent.core.component.call(null,(function (game){
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),(cljs.core.truth_(new cljs.core.Keyword(null,"foggy?","foggy?",177895659).cljs$core$IFn$_invoke$arity$1(game))?"foggy":null)], null),undead.client.Board.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game)),undead.client.Timers.call(null,new cljs.core.Keyword(null,"sand","sand",1204438373).cljs$core$IFn$_invoke$arity$1(game)));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Game"], null));
quiescent.core.render.call(null,undead.client.Game.call(null,undead.client.game),document.getElementById("main"));

//# sourceMappingURL=client.js.map?rel=1483988074274