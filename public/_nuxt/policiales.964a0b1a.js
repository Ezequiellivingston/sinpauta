import{_ as v,L as w,K as d,s as c,r as x,H as y,O as g,P as k,Q as b,X as F,M as N,N as V,k as l,q as a,l as D,W as I,J as S,F as A,m as _,x as B,y as R}from"./entry.ef19d414.js";import{u as q,V as L,N as M}from"./Noticia.6afc6ed8.js";import{k as u,l as n}from"./VRow.8fdb61f6.js";const P=e=>(B("data-v-753caeb8"),e=e(),R(),e),Q=P(()=>_("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades policiales ",-1)),$={__name:"policiales",setup(e){const p=w(),{data:m}=q(async()=>{const i=x([]);let r=y();const s=g(r,"noticias"),t=await k(b(s,F("tipo","==","Policial")));for(const o of t.docs){const f=N(p,`5ETmTP49k/${o.id}.jpeg`),h=await V(f);i.value.push({url:h,id:o.id,...o.data()})}return{noticias:i}},"$4QQAYWIcF8");return(i,r)=>(l(),d(u,{class:"container-new pa-2"},{default:c(()=>[a(n,{cols:"12",md:"9"},{default:c(()=>[Q,a(L,{class:"pb-4"}),a(u,null,{default:c(()=>{var s;return[(l(!0),D(A,null,I((s=S(m))==null?void 0:s.noticias,(t,o)=>(l(),d(n,{cols:"12",sm:"12",key:t.id},{default:c(()=>[_("article",null,[a(M,{noticia:t},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(n,{md:"4",class:"anuncios text-center"})]),_:1}))}},T=v($,[["__scopeId","data-v-753caeb8"]]);export{T as default};
