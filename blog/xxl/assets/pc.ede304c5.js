import{_ as y,d as g,r as k,a as C,t as E,b,o as n,c as l,w as x,v as F,e as t,f as _,g as i,h as D,u as p,F as S,i as w,n as B,j as $,p as I,k as A,l as d,E as L}from"./index.b2d04bf9.js";import{S as N}from"./stage.74c76424.js";const T=s=>(I("data-v-72deb14b"),s=s(),A(),s),V={class:"container"},z={class:"welcome"},j=T(()=>t("h1",null,"\u6D88\u6D88\u4E50",-1)),q=d("\u5F00\u59CB\u6E38\u620F"),M={class:"score"},O={class:"stage"},R=["onClick"],G=d("\u7ED3\u675F\u6E38\u620F"),H=g({name:"pc",setup(s){const a=k(!0);let o=C(new N(8,8,50));const{data:v,score:u}=E(o),h=()=>{a.value=!1,o.gameLoop(!0)},f=c=>{o.click(c)},m=()=>{L.alert(`\u5F53\u524D\u6210\u7EE9\uFF1A${u.value}\u5206`,"\u96EA\u7CD5\u6D88\u6D88\u5927\u4F5C\u6218",{confirmButtonText:"\u786E\u5B9A",callback:c=>{a.value=!0}})};return(c,J)=>{const r=b("el-button");return n(),l("div",V,[x(t("div",z,[j,_(r,{class:"change-btn",type:"primary",onClick:h},{default:i(()=>[q]),_:1})],512),[[F,a.value]]),t("div",M,D(p(u))+"\u5206",1),t("div",O,[(n(!0),l(S,null,w(p(v),e=>(n(),l("div",{style:B({left:`${e.positionLeft}px`,top:`${e.positionTop}px`}),key:e.key,class:$(["square",`type${e.type}`,`scale${e.scale}`,{active:e.active}]),onClick:K=>f(e)},null,14,R))),128))]),_(r,{class:"change-btn",type:"primary",onClick:m},{default:i(()=>[G]),_:1})])}}});var U=y(H,[["__scopeId","data-v-72deb14b"]]);export{U as default};