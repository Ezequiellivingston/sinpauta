import{_ as v,C as h,f as r,k as d,N as u,s as n,r as w,B as x,G as y,H as g,I as k,Q as b,D as N,E as S,q as t,l as B,P as D,M as F,F as I,m as p,x as A,y as C}from"./entry.f927eb8c.js";import{u as q,N as E}from"./Noticia.0c5b574e.js";const L=s=>(A("data-v-69e25b87"),s=s(),C(),s),M=L(()=>p("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades politicas ",-1)),P={__name:"politica",setup(s){const m=h(),{data:f}=q(async()=>{const i=w([]);let _=x();const l=y(_,"noticias"),a=await g(k(l,b("tipo","==","Politica")));for(const e of a.docs){const o=N(m,`5ETmTP49k/${e.id}.jpeg`),c=await S(o);i.value.push({url:c,id:e.id,...e.data()})}return{noticias:i}},"$cLAnxkCSpj");return(i,_)=>{const l=r("v-divider"),a=r("v-col"),e=r("v-row");return d(),u(e,{class:"container-new"},{default:n(()=>[t(a,{cols:"12",md:"9"},{default:n(()=>[M,t(l,{class:"pb-4"}),t(e,null,{default:n(()=>{var o;return[(d(!0),B(I,null,D((o=F(f))==null?void 0:o.noticias,(c,R)=>(d(),u(a,{cols:"12",sm:"12",key:c.id},{default:n(()=>[p("article",null,[t(E,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),t(a,{md:"4",class:"anuncios text-center"})]),_:1})}}},z=v(P,[["__scopeId","data-v-69e25b87"]]);export{z as default};
