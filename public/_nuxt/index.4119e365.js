import{u as X,_ as Y,N as Z}from"./Noticia.494a3a75.js";import{H as tt,T as et,M as ot}from"./components.88a20da0.js";import{_ as nt,z as it,A as at,B as ct,r as I,c as st,f as L,k as a,l as E,q as o,s as c,F as O,C as rt,D as U,E as z,G as lt,H as dt,I as ut,J as _t,K as pt,L as mt,M as t,N as F,O as S,m as i,t as s,P as gt,v as ht,x as ft,y as wt}from"./entry.31d373e0.js";import{_ as yt}from"./mp-logo.c91055af.js";const bt=""+globalThis.__publicAssetsURL("mercadopago.png");const vt=T=>(ft("data-v-c1ee8c6f"),T=T(),wt(),T),xt={class:"title mt-4 ma-2"},kt={class:"subtitle mt-4 ma-2"},Dt={class:"pa-2 d-flex justify-space-between"},St={key:0,class:""},Tt={key:1,class:""},Nt={class:"ma-6"},Rt={class:"mb-6"},It=["innerHTML"],Lt=vt(()=>i("div",{class:"donacion"},[i("img",{src:yt,alt:"donacion",class:"mp-logo-donacion"}),i("img",{src:bt,alt:"donacion",class:"donacion_qr"}),i("p",null," Somos un periódico sin fines de lucro, pero tienes la opción de colaborar para ayudarnos a cubrir nuestros gastos ")],-1)),Et=["content"],Ft={__name:"index",setup(T){const K=it();at();const{params:Q}=K,B=Q.noticiasId,q=ct(),C=I([]),V=I();I(!0);const W=I(!1),{data:e}=X(async()=>{try{const r=rt(),l=U(r,`5ETmTP49k/${B}.jpeg`),N=await z(l);N||(location.href="/");const R=lt(q,"noticias"),H=await dt(ut(R,_t(10)));for(const _ of H.docs){const n=U(r,`5ETmTP49k/${_.id}.jpeg`),M=await z(n);C.value.push({url:M,id:_.id,..._.data()})}const d=pt(q,"noticias",B),u=await mt(d);if(u.exists())return V.value=u.data(),{noticia:V,noticias:C,url:N}}catch{W.value=!0}},"$ROG1QwGyJa"),j=st(()=>{var l;const r={year:"numeric",month:"short",day:"numeric"};new Date((l=e.value)==null?void 0:l.noticia.fecha).toLocaleDateString("es-ES",r)});return(r,l)=>{const N=L("v-breadcrumbs"),R=L("v-divider"),H=Y,d=L("v-col"),u=L("v-row"),_=et,n=ot,M=tt;return a(),E(O,null,[o(u,{"no-gutters":"",class:"noticias-container"},{default:c(()=>[o(d,{cols:"12",md:"9"},{default:c(()=>{var p,m,g,h,f,w,y,b,v,x,k,D,A,G;return[(p=t(e))!=null&&p.noticia.tipo?(a(),F(N,{key:0,class:"pb-0 pl-0",items:[(m=t(e))==null?void 0:m.noticia.tipo]},null,8,["items"])):S("",!0),i("h1",xt,s((g=t(e))==null?void 0:g.noticia.titulo),1),i("p",kt,s((h=t(e))==null?void 0:h.noticia.subtitulo),1),o(R),i("div",Dt,[t(j)?(a(),E("p",St,s(t(j)),1)):S("",!0),(f=t(e))!=null&&f.noticia.autor?(a(),E("p",Tt,s((w=t(e))==null?void 0:w.noticia.autor),1)):S("",!0)]),i("figure",null,[o(H,{src:(y=t(e))==null?void 0:y.url,"max-height":"300px",class:"datas-container__img mt-2 mb-2",alt:(v=(b=t(e))==null?void 0:b.noticia)==null?void 0:v.imgDescription},null,8,["src","alt"]),i("figcaption",null,s((k=(x=t(e))==null?void 0:x.noticia)==null?void 0:k.imgDescription),1)]),i("div",Nt,[i("p",Rt,s((D=t(e))==null?void 0:D.noticia.cabecera),1),i("div",{innerHTML:(A=t(e))==null?void 0:A.noticia.desarrollo},null,8,It)]),o(R),(G=t(e))!=null&&G.noticias?(a(),F(u,{key:1,class:"ma-2"},{default:c(()=>{var P;return[(a(!0),E(O,null,gt((P=t(e))==null?void 0:P.noticias,($,Ht)=>(a(),F(d,{cols:"12",sm:"12",key:`${$.id}-mas`},{default:c(()=>{var J;return[$.id!==((J=t(e))==null?void 0:J.noticia.id)?(a(),F(Z,{key:0,noticia:$},null,8,["noticia"])):S("",!0)]}),_:2},1024))),128))]}),_:1})):S("",!0)]}),_:1}),o(d,{class:"text-center"},{default:c(()=>[Lt]),_:1})]),_:1}),o(M,null,{default:c(()=>{var p,m,g,h,f,w,y,b,v,x,k;return[o(_,null,{default:c(()=>{var D;return[ht(s((D=t(e))==null?void 0:D.noticia.titulo),1)]}),_:1}),o(n,{name:"description",hid:"description",content:(p=t(e))==null?void 0:p.noticia.cabecera},null,8,["content"]),o(n,{property:"og:title",hid:"og:titl",content:(m=t(e))==null?void 0:m.noticia.titulo},null,8,["content"]),o(n,{property:"og:description",hid:"og:description",content:(g=t(e))==null?void 0:g.noticia.cabecera},null,8,["content"]),o(n,{property:"og:image",hid:"og:image",content:(h=t(e))==null?void 0:h.url},null,8,["content"]),o(n,{name:"twitter:card",hid:"twitter:card",content:"summary_large_image"}),o(n,{name:"twitter:site",hid:"twitter:site",content:"@sinpautaok"}),o(n,{name:"twitter:title",hid:"twitter:title",content:(f=t(e))==null?void 0:f.noticia.titulo},null,8,["content"]),o(n,{name:"twitter:description",hid:"twitter:description",content:(w=t(e))==null?void 0:w.noticia.cabecera},null,8,["content"]),o(n,{name:"twitter:image",hid:"twitter:image",content:(y=t(e))==null?void 0:y.url},null,8,["content"]),o(n,{name:"twitter:domain",hid:"twitter:domain",content:"sinpauta.com"}),i("meta",{property:"og:url",hid:"og:url",content:`https://www.sinpauta.com/${(b=t(e))==null?void 0:b.noticia.id}`},null,8,Et),o(n,{property:"og:type",hid:"og:type",content:"website"}),o(n,{name:"googlebot",hid:"googlebot",content:"index, follow"}),o(n,{name:"robots",hid:"robots",content:"index, follow"}),o(n,{name:"distribution",hid:"distribution",content:"global"}),o(n,{name:"rating",hid:"rating",content:"general"}),o(n,{name:"language",hid:"language",content:"es_ES"}),o(n,{name:"news_keywords",hid:"news_keywords",content:(v=t(e))==null?void 0:v.noticia.titulo},null,8,["content"]),o(n,{property:"article:section",hid:"article:section",content:(x=t(e))==null?void 0:x.noticia.tipo},null,8,["content"]),o(n,{property:"article:tag",hid:"article:tag",content:(k=t(e))==null?void 0:k.noticia.tipo},null,8,["content"])]}),_:1})],64)}}},Ct=nt(Ft,[["__scopeId","data-v-c1ee8c6f"]]);export{Ct as default};
