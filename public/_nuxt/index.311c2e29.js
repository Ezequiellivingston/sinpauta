import{_ as v,C as x,f as _,k as r,N as u,s as c,r as y,B as g,G as h,H as w,I as N,J as k,D,E as B,q as s,l as F,O as I,M as S,F as A,m as p,x as b,y as q}from"./entry.e6e96460.js";import{u as C,N as E}from"./Noticia.32fe0124.js";const M=t=>(b("data-v-8c7e9728"),t=t(),q(),t),R=M(()=>p("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al Día con las Novedades ",-1)),$={__name:"index",setup(t){const m=x(),{data:f}=C(async()=>{const i=y([]);let d=g();const l=h(d,"noticias"),a=await w(N(l,k(10)));for(const e of a.docs){const o=D(m,`5ETmTP49k/${e.id}.jpeg`),n=await B(o);i.value.push({url:n,id:e.id,...e.data()})}return{noticias:i}},"$PslAyef5YX");return(i,d)=>{const l=_("v-divider"),a=_("v-col"),e=_("v-row");return r(),u(e,{class:"container-new pa-2"},{default:c(()=>[s(a,{cols:"12",md:"8",class:""},{default:c(()=>[R,s(l,{class:"pb-4"}),s(e,null,{default:c(()=>{var o;return[(r(!0),F(A,null,I((o=S(f))==null?void 0:o.noticias,(n,z)=>(r(),u(a,{cols:"12",sm:"12",key:n.id},{default:c(()=>[p("article",null,[s(E,{noticia:n},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),s(a,{md:"4",class:"anuncios text-center"})]),_:1})}}},T=v($,[["__scopeId","data-v-8c7e9728"]]);export{T as default};
