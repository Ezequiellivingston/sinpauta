import{u as f,N as v}from"./Noticia.030e17ca.js";import{_ as x,B as y,f as _,k as l,M as u,s as c,r as h,A as w,E as g,G as N,H as k,I as D,C as b,D as A,q as n,l as B,N as F,L as I,F as S,x as q,y as C,m as E}from"./entry.fb2c0e53.js";const L=s=>(q("data-v-2dc7a72b"),s=s(),C(),s),M=L(()=>E("h1",{alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al Día con las Novedades ",-1)),R={__name:"index",setup(s){const p=y(),{data:m}=f(async()=>{const i=h([]);let r=w();const e=g(r,"noticias"),t=await N(k(e,D(10)));for(const a of t.docs){const o=b(p,`5ETmTP49k/${a.id}.jpeg`),d=await A(o);i.value.push({url:d,id:a.id,...a.data()})}return{noticias:i}},"$PslAyef5YX");return(i,r)=>{const e=_("v-col"),t=_("v-row");return l(),u(t,{class:"container-new"},{default:c(()=>[n(e,{cols:"12",md:"8",class:"pa-5"},{default:c(()=>[M,n(t,null,{default:c(()=>{var a;return[(l(!0),B(S,null,F((a=I(m))==null?void 0:a.noticias,(o,d)=>(l(),u(e,{cols:"12",sm:"12",key:o.id},{default:c(()=>[n(v,{noticia:o},null,8,["noticia"])]),_:2},1024))),128))]}),_:1})]),_:1}),n(e,{md:"4",class:"anuncios text-center"})]),_:1})}}},P=x(R,[["__scopeId","data-v-2dc7a72b"]]);export{P as default};
