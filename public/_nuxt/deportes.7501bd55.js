import{_ as v,C as h,f as _,k as l,N as u,s as n,r as w,B as x,G as y,H as g,I as k,Q as B,D,E as N,q as c,l as b,O as F,M as I,F as S,m as p,x as A,y as q}from"./entry.e6e96460.js";import{u as C,N as E}from"./Noticia.32fe0124.js";const L=t=>(A("data-v-67f75ebd"),t=t(),q(),t),M=L(()=>p("h1",{alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades deportivas ",-1)),R={__name:"deportes",setup(t){const f=h(),{data:m}=C(async()=>{const r=w([]);let i=x();const a=y(i,"noticias"),s=await g(k(a,B("tipo","==","Deportes")));for(const e of s.docs){const o=D(f,`5ETmTP49k/${e.id}.jpeg`),d=await N(o);r.value.push({url:d,id:e.id,...e.data()})}return{noticias:r}},"$5XBtAOtkLh");return(r,i)=>{const a=_("v-col"),s=_("v-row");return l(),u(s,{class:"container-new"},{default:n(()=>[c(a,{cols:"12",md:"8"},{default:n(()=>[M,c(s,null,{default:n(()=>{var e;return[(l(!0),b(S,null,F((e=I(m))==null?void 0:e.noticias,(o,d)=>(l(),u(a,{cols:"12",sm:"12",key:o.id},{default:n(()=>[p("article",null,[c(E,{noticia:o},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),c(a,{md:"4",class:"anuncios text-center"})]),_:1})}}},O=v(R,[["__scopeId","data-v-67f75ebd"]]);export{O as default};
