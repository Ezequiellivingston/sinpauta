import{_ as v,C as h,f as l,k as r,O as u,s as n,r as w,B as x,G as y,H as g,I as F,R as b,D as k,E as N,q as s,l as S,Q as B,N as D,F as I,m as p,x as C,y as R}from"./entry.1780c189.js";import{u as q,N as A}from"./Noticia.932d1080.js";const E=t=>(C("data-v-dbfd7128"),t=t(),R(),t),$=E(()=>p("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades sociales ",-1)),z={__name:"sociedad",setup(t){const f=h(),{data:m}=q(async()=>{const d=w([]);let _=x();const i=y(_,"noticias"),a=await g(F(i,b("tipo","==","Sociedad")));for(const e of a.docs){const o=k(f,`5ETmTP49k/${e.id}.jpeg`),c=await N(o);d.value.push({url:c,id:e.id,...e.data()})}return{noticias:d}},"$e0fP7uCuFF");return(d,_)=>{const i=l("v-divider"),a=l("v-col"),e=l("v-row");return r(),u(e,{class:"container-new"},{default:n(()=>[s(a,{cols:"12",md:"9"},{default:n(()=>[$,s(i,{class:"pb-4"}),s(e,null,{default:n(()=>{var o;return[(r(!0),S(I,null,B((o=D(m))==null?void 0:o.noticias,(c,L)=>(r(),u(a,{cols:"12",sm:"12",key:c.id},{default:n(()=>[p("article",null,[s(A,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),s(a,{md:"4",class:"anuncios text-center"})]),_:1})}}},T=v(z,[["__scopeId","data-v-dbfd7128"]]);export{T as default};
