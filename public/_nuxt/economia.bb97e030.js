import{_ as v,C as h,f as r,k as d,N as u,s as n,r as w,B as x,G as y,H as g,I as b,Q as k,D as N,E as B,q as s,l as D,P as E,M as F,F as I,m as p,x as S,y as q}from"./entry.fd3b36b1.js";import{u as A,N as C}from"./Noticia.41dc920c.js";const M=o=>(S("data-v-2bc85d61"),o=o(),q(),o),R=M(()=>p("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades economicas ",-1)),$={__name:"economia",setup(o){const m=h(),{data:f}=A(async()=>{const i=w([]);let _=x();const l=y(_,"noticias"),a=await g(b(l,k("tipo","==","Economia")));for(const e of a.docs){const t=N(m,`5ETmTP49k/${e.id}.jpeg`),c=await B(t);i.value.push({url:c,id:e.id,...e.data()})}return{noticias:i}},"$1Ep9ZJr4os");return(i,_)=>{const l=r("v-divider"),a=r("v-col"),e=r("v-row");return d(),u(e,{class:"container-new pa-2"},{default:n(()=>[s(a,{cols:"12",md:"8"},{default:n(()=>[R,s(l,{class:"pb-4"}),s(e,null,{default:n(()=>{var t;return[(d(!0),D(I,null,E((t=F(f))==null?void 0:t.noticias,(c,z)=>(d(),u(a,{cols:"12",sm:"12",key:c.id},{default:n(()=>[p("article",null,[s(C,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),s(a,{md:"4",class:"anuncios text-center"})]),_:1})}}},T=v($,[["__scopeId","data-v-2bc85d61"]]);export{T as default};
