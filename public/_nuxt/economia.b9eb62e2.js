import{u as v,N as h}from"./Noticia.576cf75c.js";import{_ as w,C as x,f as r,k as d,N as u,s as n,r as y,B as g,G as k,H as N,I as B,Q as D,D as E,E as F,q as s,l as I,P as S,M as b,F as q,m as p,x as A,y as C}from"./entry.41720386.js";const M=o=>(A("data-v-3a31e194"),o=o(),C(),o),R=M(()=>p("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades economicas ",-1)),$={__name:"economia",setup(o){const m=x(),{data:f}=v(async()=>{const i=y([]);let _=g();const l=k(_,"noticias"),a=await N(B(l,D("tipo","==","Economia")));for(const e of a.docs){const t=E(m,`5ETmTP49k/${e.id}.jpeg`),c=await F(t);i.value.push({url:c,id:e.id,...e.data()})}return{noticias:i}},"$1Ep9ZJr4os");return(i,_)=>{const l=r("v-divider"),a=r("v-col"),e=r("v-row");return d(),u(e,{class:"container-new pa-2"},{default:n(()=>[s(a,{cols:"12",md:"9"},{default:n(()=>[R,s(l,{class:"pb-4"}),s(e,null,{default:n(()=>{var t;return[(d(!0),I(q,null,S((t=b(f))==null?void 0:t.noticias,(c,z)=>(d(),u(a,{cols:"12",sm:"12",key:c.id},{default:n(()=>[p("article",null,[s(h,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),s(a,{md:"4",class:"anuncios text-center"})]),_:1})}}},T=w($,[["__scopeId","data-v-3a31e194"]]);export{T as default};
