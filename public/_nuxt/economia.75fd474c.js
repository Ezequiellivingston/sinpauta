import{_ as v,B as h,f as _,k as l,M as u,s as c,r as w,A as x,E as y,G as g,H as k,P as N,C as b,D as B,q as n,l as D,N as E,L as F,F as S,m as p,x as A,y as I}from"./entry.adb5c67c.js";import{u as q,N as C}from"./Noticia.cd9e0504.js";const L=o=>(A("data-v-cdd2abc8"),o=o(),I(),o),M=L(()=>p("h1",{alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades economicas ",-1)),R={__name:"economia",setup(o){const m=h(),{data:f}=q(async()=>{const i=w([]);let r=x();const e=y(r,"noticias"),s=await g(k(e,N("tipo","==","Economia")));for(const a of s.docs){const t=b(m,`5ETmTP49k/${a.id}.jpeg`),d=await B(t);i.value.push({url:d,id:a.id,...a.data()})}return{noticias:i}},"$1Ep9ZJr4os");return(i,r)=>{const e=_("v-col"),s=_("v-row");return l(),u(s,{class:"container-new"},{default:c(()=>[n(e,{cols:"12",md:"8"},{default:c(()=>[M,n(s,null,{default:c(()=>{var a;return[(l(!0),D(S,null,E((a=F(f))==null?void 0:a.noticias,(t,d)=>(l(),u(e,{cols:"12",sm:"12",key:t.id},{default:c(()=>[p("article",null,[n(C,{noticia:t},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),n(e,{md:"4",class:"anuncios text-center"})]),_:1})}}},P=v(R,[["__scopeId","data-v-cdd2abc8"]]);export{P as default};
