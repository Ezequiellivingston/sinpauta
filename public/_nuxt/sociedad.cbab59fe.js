import{u as v,N as h}from"./Noticia.00d3988f.js";import{_ as w,C as x,f as d,k as r,N as u,s as n,r as y,B as g,G as F,H as b,I as k,Q as N,D as S,E as B,q as s,l as D,P as I,M as C,F as q,m as p,x as A,y as E}from"./entry.d0b5b26f.js";const M=t=>(A("data-v-b319cfe0"),t=t(),E(),t),P=M(()=>p("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades sociales ",-1)),R={__name:"sociedad",setup(t){const f=x(),{data:m}=v(async()=>{const i=y([]);let _=g();const l=F(_,"noticias"),a=await b(k(l,N("tipo","==","Sociedad")));for(const e of a.docs){const o=S(f,`5ETmTP49k/${e.id}.jpeg`),c=await B(o);i.value.push({url:c,id:e.id,...e.data()})}return{noticias:i}},"$e0fP7uCuFF");return(i,_)=>{const l=d("v-divider"),a=d("v-col"),e=d("v-row");return r(),u(e,{class:"container-new"},{default:n(()=>[s(a,{cols:"12",md:"9"},{default:n(()=>[P,s(l,{class:"pb-4"}),s(e,null,{default:n(()=>{var o;return[(r(!0),D(q,null,I((o=C(m))==null?void 0:o.noticias,(c,$)=>(r(),u(a,{cols:"12",sm:"12",key:c.id},{default:n(()=>[p("article",null,[s(h,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),s(a,{md:"4",class:"anuncios text-center"})]),_:1})}}},T=w(R,[["__scopeId","data-v-b319cfe0"]]);export{T as default};