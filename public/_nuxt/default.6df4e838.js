import{_ as V,V as w,r as _,f as e,k as l,B as p,s,q as t,W as $,v as T,l as d,N as I,M as S,n as h,d as z,m as r,X as E}from"./entry.0851ec92.js";const M={__name:"NavBar",setup(m){w();const n=_(!1);_(null);const c=_([{name:"Cotización",to:"/cotizacion"},{name:"Política",to:"/politica"},{name:"Economía",to:"/economia"},{name:"Deportes",to:"/deportes"},{name:"Sociedad",to:"/sociedad"},{name:"Policiales",to:"/policiales"},{name:"Tendencias",to:"/tendencias"}]),i=async v=>{await h(v)};return(v,o)=>{const u=e("v-app-bar-nav-icon"),f=e("v-toolbar-title"),k=e("v-spacer"),b=e("v-app-bar"),y=e("v-list-item"),C=e("v-list"),x=e("v-navigation-drawer"),B=e("v-main"),N=e("v-layout"),g=e("v-card");return l(),p(g,{class:"navbar"},{default:s(()=>[t(N,null,{default:s(()=>[t(b,{color:"grey-darken-4",dark:"",prominent:""},{default:s(()=>[t(u,{variant:"text",onClick:o[0]||(o[0]=$(a=>n.value=!n.value,["stop"]))}),t(f,{onClick:o[1]||(o[1]=a=>i("/")),class:"pointer"},{default:s(()=>[T("NOTICIAS")]),_:1}),t(k)]),_:1}),t(x,{modelValue:n.value,"onUpdate:modelValue":o[2]||(o[2]=a=>n.value=a),temporary:""},{default:s(()=>[t(C,{density:"compact",nav:""},{default:s(()=>[(l(!0),d(I,null,S(c.value,a=>(l(),p(y,{onClick:q=>i(a.to),title:a.name,value:a.name},null,8,["onClick","title","value"]))),256))]),_:1})]),_:1},8,["modelValue"]),t(B,{style:{height:"64px"}})]),_:1})]),_:1})}}},O=V(M,[["__scopeId","data-v-68d5831b"]]),P=r("footer",null,null,-1),D=z({__name:"default",setup(m){return(n,c)=>(l(),d("div",null,[r("header",null,[t(O)]),r("main",null,[E(n.$slots,"default")]),P]))}});export{D as default};
