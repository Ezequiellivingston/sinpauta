import{H as x,M as h,T as w}from"./components.4e331955.js";import{_ as S,L as N,l as _,q as a,s as t,F as p,r as g,H as k,O as T,P as M,Q as D,R as F,S as V,M as b,N as A,k as d,W as B,J as R,v as q,K as H,m as f,x as I,y as E}from"./entry.49d8968d.js";import{u as L,N as P}from"./Noticia.bd2702e8.js";import{k as m,n as r,l as $}from"./VRow.8fe2388b.js";const z=n=>(I("data-v-721c6396"),n=n(),E(),n),C=z(()=>f("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al Día con las Novedades ",-1)),U={__name:"index",setup(n){const y=N(),{data:v}=L(async()=>{const i=g([]);let u=k();const e=T(u,"noticias"),l=await M(D(e,V("fecha","desc"),F(10)));for(const s of l.docs){const o=b(y,`5ETmTP49k/${s.id}.jpeg`),c=await A(o);i.value.push({url:c,id:s.id,...s.data()})}return{noticias:i}},"$PslAyef5YX");return(i,u)=>{const e=h,l=w,s=x;return d(),_(p,null,[a(m,{class:"container-new pa-2"},{default:t(()=>[a(r,{cols:"12",md:"10",class:""},{default:t(()=>[C,a($,{class:"pb-4"}),a(m,null,{default:t(()=>{var o;return[(d(!0),_(p,null,B((o=R(v))==null?void 0:o.noticias,(c,j)=>(d(),H(r,{cols:"12",sm:"12",key:c.id},{default:t(()=>[f("article",null,[a(P,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(r,{md:"4",class:"anuncios text-center"})]),_:1}),a(s,null,{default:t(()=>[a(e,{charset:"UTF-8"}),a(e,{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a(e,{name:"description",content:"Sinpauta: Tu fuente confiable de noticias y actualidad. Mantente informado sobre los últimos eventos, noticias y temas de actualidad en todo el mundo."}),a(e,{name:"keywords",content:"noticias, actualidad, eventos, información, periódico, Sinpauta"}),a(e,{name:"author",content:"Equipo de Sinpauta"}),a(l,null,{default:t(()=>[q("Sinpauta - Noticias y Actualidad")]),_:1})]),_:1})],64)}}},W=S(U,[["__scopeId","data-v-721c6396"]]);export{W as default};
