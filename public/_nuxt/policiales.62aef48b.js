import{u as v,N as h}from"./Noticia.7b54f3f8.js";import{_ as w,C as x,f as r,k as d,N as u,s as n,r as y,B as g,G as k,H as F,I,Q as N,D as B,E as D,q as s,l as S,P as A,M as b,F as q,m as p,x as C,y as E}from"./entry.4b34e775.js";const M=t=>(C("data-v-3a90a3e8"),t=t(),E(),t),P=M(()=>p("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades policiales ",-1)),Q={__name:"policiales",setup(t){const m=x(),{data:f}=v(async()=>{const i=y([]);let _=g();const l=k(_,"noticias"),e=await F(I(l,N("tipo","==","Policial")));for(const a of e.docs){const o=B(m,`5ETmTP49k/${a.id}.jpeg`),c=await D(o);i.value.push({url:c,id:a.id,...a.data()})}return{noticias:i}},"$4QQAYWIcF8");return(i,_)=>{const l=r("v-divider"),e=r("v-col"),a=r("v-row");return d(),u(a,{class:"container-new"},{default:n(()=>[s(e,{cols:"12",md:"8"},{default:n(()=>[P,s(l,{class:"pb-4"}),s(a,null,{default:n(()=>{var o;return[(d(!0),S(q,null,A((o=b(f))==null?void 0:o.noticias,(c,R)=>(d(),u(e,{cols:"12",sm:"12",key:c.id},{default:n(()=>[p("article",null,[s(h,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),s(e,{md:"4",class:"anuncios text-center"})]),_:1})}}},L=w(Q,[["__scopeId","data-v-3a90a3e8"]]);export{L as default};
