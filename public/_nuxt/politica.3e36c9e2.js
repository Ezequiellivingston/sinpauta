import{_ as v,z as h,f as _,k as l,A as u,s as c,r as w,B as x,C as y,D as g,E as k,F as S,G as b,H as A,q as n,l as B,I as D,J as F,K as I,m as p,x as N,y as C}from"./entry.d5310f4b.js";import{u as q,N as z}from"./Noticia.4a1f7b9a.js";const E=t=>(N("data-v-6e97b234"),t=t(),C(),t),L=E(()=>p("h1",{alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades politicas ",-1)),R={__name:"politica",setup(t){const m=h(),{data:f}=q(async()=>{const i=w([]);let r=x();const e=y(r,"noticias"),s=await g(k(e,S("tipo","==","Politica")));for(const a of s.docs){const o=b(m,`5ETmTP49k/${a.id}.jpeg`),d=await A(o);i.value.push({url:d,id:a.id,...a.data()})}return{noticias:i}},"$cLAnxkCSpj");return(i,r)=>{const e=_("v-col"),s=_("v-row");return l(),u(s,{class:"container-new"},{default:c(()=>[n(e,{cols:"12",md:"8"},{default:c(()=>[L,n(s,null,{default:c(()=>{var a;return[(l(!0),B(I,null,D((a=F(f))==null?void 0:a.noticias,(o,d)=>(l(),u(e,{cols:"12",sm:"12",key:o.id},{default:c(()=>[p("article",null,[n(z,{noticia:o},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),n(e,{md:"4",class:"anuncios text-center"})]),_:1})}}},M=v(R,[["__scopeId","data-v-6e97b234"]]);export{M as default};
