import{u as v,N as h}from"./Noticia.6c5d05f9.js";import{_ as w,B as x,f as _,k as i,M as u,s as c,r as y,A as g,E as k,G as F,H as N,P as A,C as B,D,q as n,l as I,N as S,L as q,F as C,m as p,x as E,y as L}from"./entry.420024df.js";const M=s=>(E("data-v-f9ae2e88"),s=s(),L(),s),P=M(()=>p("h1",{alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades policiales ",-1)),R={__name:"policiales",setup(s){const f=x(),{data:m}=v(async()=>{const l=y([]);let r=g();const a=k(r,"noticias"),t=await F(N(a,A("tipo","==","Policiales")));for(const e of t.docs){const o=B(f,`5ETmTP49k/${e.id}.jpeg`),d=await D(o);l.value.push({url:d,id:e.id,...e.data()})}return{noticias:l}},"$4QQAYWIcF8");return(l,r)=>{const a=_("v-col"),t=_("v-row");return i(),u(t,{class:"container-new"},{default:c(()=>[n(a,{cols:"12",md:"8"},{default:c(()=>[P,n(t,null,{default:c(()=>{var e;return[(i(!0),I(C,null,S((e=q(m))==null?void 0:e.noticias,(o,d)=>(i(),u(a,{cols:"12",sm:"12",key:o.id},{default:c(()=>[p("article",null,[n(h,{noticia:o},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),n(a,{md:"4",class:"anuncios text-center"})]),_:1})}}},z=w(R,[["__scopeId","data-v-f9ae2e88"]]);export{z as default};
