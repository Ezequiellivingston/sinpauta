import{_ as v,C as h,f as r,k as d,O as u,s as n,r as w,B as x,G as y,H as g,I as k,R as F,D as I,E as N,q as s,l as B,Q as D,N as S,F as A,m as p,x as R,y as b}from"./entry.1780c189.js";import{u as q,N as C}from"./Noticia.932d1080.js";const E=t=>(R("data-v-91455123"),t=t(),b(),t),Q=E(()=>p("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades policiales ",-1)),$={__name:"policiales",setup(t){const m=h(),{data:f}=q(async()=>{const i=w([]);let _=x();const l=y(_,"noticias"),a=await g(k(l,F("tipo","==","Policial")));for(const e of a.docs){const o=I(m,`5ETmTP49k/${e.id}.jpeg`),c=await N(o);i.value.push({url:c,id:e.id,...e.data()})}return{noticias:i}},"$4QQAYWIcF8");return(i,_)=>{const l=r("v-divider"),a=r("v-col"),e=r("v-row");return d(),u(e,{class:"container-new"},{default:n(()=>[s(a,{cols:"12",md:"9"},{default:n(()=>[Q,s(l,{class:"pb-4"}),s(e,null,{default:n(()=>{var o;return[(d(!0),B(A,null,D((o=S(f))==null?void 0:o.noticias,(c,z)=>(d(),u(a,{cols:"12",sm:"12",key:c.id},{default:n(()=>[p("article",null,[s(C,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),s(a,{md:"4",class:"anuncios text-center"})]),_:1})}}},P=v($,[["__scopeId","data-v-91455123"]]);export{P as default};
