import{u as v,N as h}from"./Noticia.41bdd3a5.js";import{_ as w,z as x,f as _,k as l,A as u,s as n,r as y,B as g,C as k,D as B,E as D,F as b,G as A,H as F,q as c,l as I,I as N,J as S,K as q,m as p,x as z,y as C}from"./entry.611c419e.js";const E=t=>(z("data-v-67f75ebd"),t=t(),C(),t),L=E(()=>p("h1",{alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades deportivas ",-1)),R={__name:"deportes",setup(t){const f=x(),{data:m}=v(async()=>{const r=y([]);let i=g();const a=k(i,"noticias"),s=await B(D(a,b("tipo","==","Deportes")));for(const e of s.docs){const o=A(f,`5ETmTP49k/${e.id}.jpeg`),d=await F(o);r.value.push({url:d,id:e.id,...e.data()})}return{noticias:r}},"$5XBtAOtkLh");return(r,i)=>{const a=_("v-col"),s=_("v-row");return l(),u(s,{class:"container-new"},{default:n(()=>[c(a,{cols:"12",md:"8"},{default:n(()=>[L,c(s,null,{default:n(()=>{var e;return[(l(!0),I(q,null,N((e=S(m))==null?void 0:e.noticias,(o,d)=>(l(),u(a,{cols:"12",sm:"12",key:o.id},{default:n(()=>[p("article",null,[c(h,{noticia:o},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),c(a,{md:"4",class:"anuncios text-center"})]),_:1})}}},T=w(R,[["__scopeId","data-v-67f75ebd"]]);export{T as default};
