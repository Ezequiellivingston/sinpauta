import{u as v,N as h}from"./Noticia.a6eae464.js";import{_ as w,C as x,f as l,k as d,N as u,s as n,r as y,B as g,G as k,H as B,I as D,Q as N,D as F,E as I,q as t,l as S,P as A,M as b,F as q,m as p,x as C,y as E}from"./entry.baa1e540.js";const L=a=>(C("data-v-42c4de8f"),a=a(),E(),a),M=L(()=>p("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades deportivas ",-1)),R={__name:"deportes",setup(a){const f=x(),{data:m}=v(async()=>{const r=y([]);let _=g();const i=k(_,"noticias"),s=await B(D(i,N("tipo","==","Deportes")));for(const e of s.docs){const o=F(f,`5ETmTP49k/${e.id}.jpeg`),c=await I(o);r.value.push({url:c,id:e.id,...e.data()})}return{noticias:r}},"$5XBtAOtkLh");return(r,_)=>{const i=l("v-divider"),s=l("v-col"),e=l("v-row");return d(),u(e,{class:"container-new"},{default:n(()=>[t(s,{cols:"12",md:"9"},{default:n(()=>[M,t(i,{class:"pb-4"}),t(e,null,{default:n(()=>{var o;return[(d(!0),S(q,null,A((o=b(m))==null?void 0:o.noticias,(c,$)=>(d(),u(s,{cols:"12",sm:"12",key:c.id},{default:n(()=>[p("article",null,[t(h,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),t(s,{md:"4",class:"anuncios text-center"})]),_:1})}}},T=w(R,[["__scopeId","data-v-42c4de8f"]]);export{T as default};
