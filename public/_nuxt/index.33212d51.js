import{u as X,_ as Y,N as Z}from"./Noticia.3d9b3a89.js";import{H as tt,T as et,M as ot}from"./components.f952118f.js";import{_ as nt}from"./mp-logo.eff4ceab.js";import{_ as it,z as at,A as st,B as ct,r as N,o as rt,c as lt,f as E,k as a,l as L,q as o,s,F as O,C as dt,D as U,E as z,G as ut,H as _t,I as pt,J as mt,K as gt,L as ht,M as e,N as M,O as T,m as i,t as c,P as ft,v as wt,x as yt,y as bt}from"./entry.de643510.js";const vt=""+globalThis.__publicAssetsURL("mercadopago.png");const xt=I=>(yt("data-v-e0b387fd"),I=I(),bt(),I),kt={class:"title mt-4 ma-2"},Dt={class:"subtitle mt-4 ma-2"},St={class:"pa-2 d-flex justify-space-between"},Tt={class:""},It={key:0,class:""},Rt={key:1},Nt={class:"ma-6"},Et={class:"mb-6"},Lt=["innerHTML"],Mt=xt(()=>i("div",{class:"donacion"},[i("img",{src:nt,alt:"donacion",class:"mp-logo-donacion"}),i("img",{src:vt,alt:"donacion",class:"donacion_qr"}),i("p",null," Somos un periódico sin fines de lucro, pero tienes la opción de colaborar para ayudarnos a cubrir nuestros gastos ")],-1)),Ft=["content"],Ht={__name:"index",setup(I){const K=at();st();const{params:Q}=K,B=Q.noticiasId,q=ct(),C=N([]),V=N();N(!0),N(!1);const{data:t}=X(async()=>{const d=dt(),r=U(d,`5ETmTP49k/${B}.jpeg`),l=await z(r),R=ut(q,"noticias"),F=await _t(pt(R,mt(10)));for(const p of F.docs){const n=U(d,`5ETmTP49k/${p.id}.jpeg`),H=await z(n);C.value.push({url:H,id:p.id,...p.data()})}const u=gt(q,"noticias",B),_=await ht(u);if(_.exists())return V.value=_.data(),{noticia:V,noticias:C,url:l}},"$ROG1QwGyJa");rt(()=>{t.value||(location.href="/")});const W=lt(()=>{var l;const d={year:"numeric",month:"short",day:"numeric"};let r=new Date((l=t.value)==null?void 0:l.noticia.fecha).toLocaleDateString("es-ES",d);return console.log(r),typeof r!="Invalid Date"?r:""});return(d,r)=>{const l=E("v-breadcrumbs"),R=E("v-divider"),F=Y,u=E("v-col"),_=E("v-row"),p=et,n=ot,H=tt;return a(),L(O,null,[o(_,{"no-gutters":"",class:"noticias-container"},{default:s(()=>[o(u,{cols:"12",md:"9"},{default:s(()=>{var m,g,h,f,w,y,b,v,x,k,D,S,j,A,G;return[(m=e(t))!=null&&m.noticia.tipo?(a(),M(l,{key:0,class:"pb-0 pl-0",items:[(g=e(t))==null?void 0:g.noticia.tipo]},null,8,["items"])):T("",!0),i("h1",kt,c((h=e(t))==null?void 0:h.noticia.titulo),1),i("p",Dt,c((f=e(t))==null?void 0:f.noticia.subtitulo),1),o(R),i("div",St,[i("p",Tt,c(e(W)),1),(w=e(t))!=null&&w.noticia.autor?(a(),L("p",It,c((y=e(t))==null?void 0:y.noticia.autor),1)):T("",!0)]),(b=e(t))!=null&&b.url?(a(),L("figure",Rt,[o(F,{src:(v=e(t))==null?void 0:v.url,"max-height":"300px",class:"datas-container__img mt-2 mb-2",alt:(k=(x=e(t))==null?void 0:x.noticia)==null?void 0:k.imgDescription},null,8,["src","alt"]),i("figcaption",null,c((S=(D=e(t))==null?void 0:D.noticia)==null?void 0:S.imgDescription),1)])):T("",!0),i("div",Nt,[i("p",Et,c((j=e(t))==null?void 0:j.noticia.cabecera),1),i("div",{innerHTML:(A=e(t))==null?void 0:A.noticia.desarrollo},null,8,Lt)]),o(R),(G=e(t))!=null&&G.noticias?(a(),M(_,{key:2,class:"ma-2"},{default:s(()=>{var P;return[(a(!0),L(O,null,ft((P=e(t))==null?void 0:P.noticias,($,$t)=>(a(),M(u,{cols:"12",sm:"12",key:`${$.id}-mas`},{default:s(()=>{var J;return[$.id!==((J=e(t))==null?void 0:J.noticia.id)?(a(),M(Z,{key:0,noticia:$},null,8,["noticia"])):T("",!0)]}),_:2},1024))),128))]}),_:1})):T("",!0)]}),_:1}),o(u,{class:"text-center"},{default:s(()=>[Mt]),_:1})]),_:1}),o(H,null,{default:s(()=>{var m,g,h,f,w,y,b,v,x,k,D;return[o(p,null,{default:s(()=>{var S;return[wt(c((S=e(t))==null?void 0:S.noticia.titulo),1)]}),_:1}),o(n,{name:"description",hid:"description",content:(m=e(t))==null?void 0:m.noticia.cabecera},null,8,["content"]),o(n,{property:"og:title",hid:"og:titl",content:(g=e(t))==null?void 0:g.noticia.titulo},null,8,["content"]),o(n,{property:"og:description",hid:"og:description",content:(h=e(t))==null?void 0:h.noticia.cabecera},null,8,["content"]),o(n,{property:"og:image",hid:"og:image",content:(f=e(t))==null?void 0:f.url},null,8,["content"]),o(n,{name:"twitter:card",hid:"twitter:card",content:"summary_large_image"}),o(n,{name:"twitter:site",hid:"twitter:site",content:"@sinpautaok"}),o(n,{name:"twitter:title",hid:"twitter:title",content:(w=e(t))==null?void 0:w.noticia.titulo},null,8,["content"]),o(n,{name:"twitter:description",hid:"twitter:description",content:(y=e(t))==null?void 0:y.noticia.cabecera},null,8,["content"]),o(n,{name:"twitter:image",hid:"twitter:image",content:(b=e(t))==null?void 0:b.url},null,8,["content"]),o(n,{name:"twitter:domain",hid:"twitter:domain",content:"sinpauta.com"}),i("meta",{property:"og:url",hid:"og:url",content:`https://www.sinpauta.com/${(v=e(t))==null?void 0:v.noticia.id}`},null,8,Ft),o(n,{property:"og:type",hid:"og:type",content:"website"}),o(n,{name:"googlebot",hid:"googlebot",content:"index, follow"}),o(n,{name:"robots",hid:"robots",content:"index, follow"}),o(n,{name:"distribution",hid:"distribution",content:"global"}),o(n,{name:"rating",hid:"rating",content:"general"}),o(n,{name:"language",hid:"language",content:"es_ES"}),o(n,{name:"news_keywords",hid:"news_keywords",content:(x=e(t))==null?void 0:x.noticia.titulo},null,8,["content"]),o(n,{property:"article:section",hid:"article:section",content:(k=e(t))==null?void 0:k.noticia.tipo},null,8,["content"]),o(n,{property:"article:tag",hid:"article:tag",content:(D=e(t))==null?void 0:D.noticia.tipo},null,8,["content"])]}),_:1})],64)}}},jt=it(Ht,[["__scopeId","data-v-e0b387fd"]]);export{jt as default};
