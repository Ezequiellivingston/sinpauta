import{u as v,N as h}from"./Noticia.352bb7f4.js";import{_ as w,B as x,f as _,k as l,M as u,s as c,r as y,A as g,E as k,G as N,H as b,P as B,C as D,D as E,q as n,l as F,N as S,L as A,F as I,m as p,x as q,y as C}from"./entry.96cccfb3.js";const L=o=>(q("data-v-cdd2abc8"),o=o(),C(),o),M=L(()=>p("h1",{alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades economicas ",-1)),R={__name:"economia",setup(o){const m=x(),{data:f}=v(async()=>{const i=y([]);let r=g();const e=k(r,"noticias"),s=await N(b(e,B("tipo","==","Economia")));for(const a of s.docs){const t=D(m,`5ETmTP49k/${a.id}.jpeg`),d=await E(t);i.value.push({url:d,id:a.id,...a.data()})}return{noticias:i}},"$1Ep9ZJr4os");return(i,r)=>{const e=_("v-col"),s=_("v-row");return l(),u(s,{class:"container-new"},{default:c(()=>[n(e,{cols:"12",md:"8"},{default:c(()=>[M,n(s,null,{default:c(()=>{var a;return[(l(!0),F(I,null,S((a=A(f))==null?void 0:a.noticias,(t,d)=>(l(),u(e,{cols:"12",sm:"12",key:t.id},{default:c(()=>[p("article",null,[n(h,{noticia:t},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),n(e,{md:"4",class:"anuncios text-center"})]),_:1})}}},P=w(R,[["__scopeId","data-v-cdd2abc8"]]);export{P as default};
