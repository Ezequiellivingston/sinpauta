import{u as Q,_ as W,N as X}from"./Noticia.d81ba6d9.js";import{d as M,j as Y,_ as Z,z as tt,A as et,B as nt,r as I,c as ot,f as H,k as T,l as C,q as t,s as u,F as O,C as it,D as U,E as V,G as at,H as st,I as ct,J as rt,K as lt,L as dt,m as a,t as p,M as n,N as L,O as ut,P as G,v as pt,x as mt,y as _t}from"./entry.fda3a60c.js";import{_ as gt}from"./mp-logo.7b095e73.js";const ft=s=>Object.fromEntries(Object.entries(s).filter(([,i])=>i!==void 0)),z=(s,i)=>(r,c)=>(Y(()=>s({...ft(r),...c.attrs},c)),()=>{var l,_;return i?(_=(l=c.slots).default)==null?void 0:_.call(l):null}),ht={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},yt=M({name:"Title",inheritAttrs:!1,setup:z((s,{slots:i})=>{var r,c,l;return{title:((l=(c=(r=i.default)==null?void 0:r.call(i))==null?void 0:c[0])==null?void 0:l.children)||null}})}),St=M({name:"Meta",inheritAttrs:!1,props:{...ht,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:z(s=>{const i={...s};return i.httpEquiv&&(i["http-equiv"]=i.httpEquiv,delete i.httpEquiv),{meta:[i]}})}),vt=M({name:"Head",inheritAttrs:!1,setup:(s,i)=>()=>{var r,c;return(c=(r=i.slots).default)==null?void 0:c.call(r)}}),wt=""+globalThis.__publicAssetsURL("mercadopago.png");const bt=s=>(mt("data-v-16af178f"),s=s(),_t(),s),xt={class:"title mt-4 ma-2"},kt={class:"subtitle mt-4 ma-2"},Bt={class:"pa-2 d-flex justify-space-between"},Dt={class:""},Et={class:""},Tt={class:"ma-6"},Nt={class:"mb-6"},qt=["innerHTML"],Rt=bt(()=>a("div",{class:"donacion"},[a("img",{src:gt,alt:"donacion",class:"mp-logo-donacion"}),a("img",{src:wt,alt:"donacion",class:"donacion_qr"}),a("p",null," Somos un periódico sin fines de lucro, pero tienes la opción de colaborar para ayudarnos a cubrir nuestros gastos ")],-1)),It=["content"],jt={__name:"index",setup(s){const i=tt();et();const{params:r}=i,c=r.noticiasId,l=nt(),_=I([]),P=I();I(!0);const J=I(!1),{data:e}=Q(async()=>{try{const m=it(),g=U(m,`5ETmTP49k/${c}.jpeg`),N=await V(g),j=at(l,"noticias"),f=await st(ct(j,rt(10)));for(const o of f.docs){const A=U(m,`5ETmTP49k/${o.id}.jpeg`),d=await V(A);_.value.push({url:d,id:o.id,...o.data()})}const q=lt(l,"noticias",c),R=await dt(q);if(R.exists())return P.value=R.data(),{noticia:P,noticias:_,url:N}}catch{J.value=!0}},"$ROG1QwGyJa"),K=ot(()=>{var g;const m={year:"numeric",month:"short",day:"numeric"};return new Date((g=e.value)==null?void 0:g.noticia.fecha).toLocaleDateString("es-ES",m)});return(m,g)=>{const N=H("v-divider"),j=W,f=H("v-col"),q=H("v-row"),R=yt,o=St,A=vt;return T(),C(O,null,[t(q,{"no-gutters":"",class:"noticias-container"},{default:u(()=>[t(f,{cols:"12",md:"8"},{default:u(()=>{var d,h,y,S,v,w,b,x,k,B,D;return[a("h1",xt,p((d=n(e))==null?void 0:d.noticia.titulo),1),a("p",kt,p((h=n(e))==null?void 0:h.noticia.subtitulo),1),t(N),a("div",Bt,[a("p",Dt,p(n(K)),1),a("p",Et,p((y=n(e))==null?void 0:y.noticia.autor),1)]),a("figure",null,[t(j,{src:(S=n(e))==null?void 0:S.url,"max-height":"300px",class:"datas-container__img mt-2 mb-2",alt:(w=(v=n(e))==null?void 0:v.noticia)==null?void 0:w.imgDescription},null,8,["src","alt"]),a("figcaption",null,p((x=(b=n(e))==null?void 0:b.noticia)==null?void 0:x.imgDescription),1)]),a("div",Tt,[a("p",Nt,p((k=n(e))==null?void 0:k.noticia.cabecera),1),a("div",{innerHTML:(B=n(e))==null?void 0:B.noticia.desarrollo},null,8,qt)]),t(N),(D=n(e))!=null&&D.noticias?(T(),L(q,{key:0,class:"ma-2"},{default:u(()=>{var E;return[(T(!0),C(O,null,ut((E=n(e))==null?void 0:E.noticias,(F,At)=>(T(),L(f,{cols:"12",sm:"12",key:`${F.id}-mas`},{default:u(()=>{var $;return[F.id!==(($=n(e))==null?void 0:$.noticia.id)?(T(),L(X,{key:0,noticia:F},null,8,["noticia"])):G("",!0)]}),_:2},1024))),128))]}),_:1})):G("",!0)]}),_:1}),t(f,{class:"text-center"},{default:u(()=>[Rt]),_:1})]),_:1}),t(A,null,{default:u(()=>{var d,h,y,S,v,w,b,x,k,B,D;return[t(R,null,{default:u(()=>{var E;return[pt(p((E=n(e))==null?void 0:E.noticia.titulo),1)]}),_:1}),t(o,{name:"description",hid:"description",content:(d=n(e))==null?void 0:d.noticia.cabecera},null,8,["content"]),t(o,{property:"og:title",hid:"og:titl",content:(h=n(e))==null?void 0:h.noticia.titulo},null,8,["content"]),t(o,{property:"og:description",hid:"og:description",content:(y=n(e))==null?void 0:y.noticia.cabecera},null,8,["content"]),t(o,{property:"og:image",hid:"og:image",content:(S=n(e))==null?void 0:S.url},null,8,["content"]),t(o,{name:"twitter:card",hid:"twitter:card",content:"summary_large_image"}),t(o,{name:"twitter:site",hid:"twitter:site",content:"@sinpautaok"}),t(o,{name:"twitter:title",hid:"twitter:title",content:(v=n(e))==null?void 0:v.noticia.titulo},null,8,["content"]),t(o,{name:"twitter:description",hid:"twitter:description",content:(w=n(e))==null?void 0:w.noticia.cabecera},null,8,["content"]),t(o,{name:"twitter:image",hid:"twitter:image",content:(b=n(e))==null?void 0:b.url},null,8,["content"]),t(o,{name:"twitter:domain",hid:"twitter:domain",content:"sinpauta.com"}),a("meta",{property:"og:url",hid:"og:url",content:`https://www.sinpauta.com/${(x=n(e))==null?void 0:x.noticia.id}`},null,8,It),t(o,{property:"og:type",hid:"og:type",content:"website"}),t(o,{name:"googlebot",hid:"googlebot",content:"index, follow"}),t(o,{name:"robots",hid:"robots",content:"index, follow"}),t(o,{name:"distribution",hid:"distribution",content:"global"}),t(o,{name:"rating",hid:"rating",content:"general"}),t(o,{name:"language",hid:"language",content:"es_ES"}),t(o,{name:"news_keywords",hid:"news_keywords",content:(k=n(e))==null?void 0:k.noticia.titulo},null,8,["content"]),t(o,{property:"article:section",hid:"article:section",content:(B=n(e))==null?void 0:B.noticia.tipo},null,8,["content"]),t(o,{property:"article:tag",hid:"article:tag",content:(D=n(e))==null?void 0:D.noticia.tipo},null,8,["content"])]}),_:1})],64)}}},Mt=Z(jt,[["__scopeId","data-v-16af178f"]]);export{Mt as default};
