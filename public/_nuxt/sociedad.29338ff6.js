import{_ as v,C as h,f as d,k as r,N as u,s as n,r as w,B as x,G as y,H as g,I as F,Q as b,D as k,E as N,q as s,l as S,P as B,M as D,F as I,m as p,x as C,y as q}from"./entry.a9a7bb49.js";import{u as A,N as E}from"./Noticia.900569bd.js";const M=t=>(C("data-v-b319cfe0"),t=t(),q(),t),P=M(()=>p("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades sociales ",-1)),R={__name:"sociedad",setup(t){const f=h(),{data:m}=A(async()=>{const i=w([]);let _=x();const l=y(_,"noticias"),a=await g(F(l,b("tipo","==","Sociedad")));for(const e of a.docs){const o=k(f,`5ETmTP49k/${e.id}.jpeg`),c=await N(o);i.value.push({url:c,id:e.id,...e.data()})}return{noticias:i}},"$e0fP7uCuFF");return(i,_)=>{const l=d("v-divider"),a=d("v-col"),e=d("v-row");return r(),u(e,{class:"container-new"},{default:n(()=>[s(a,{cols:"12",md:"9"},{default:n(()=>[P,s(l,{class:"pb-4"}),s(e,null,{default:n(()=>{var o;return[(r(!0),S(I,null,B((o=D(m))==null?void 0:o.noticias,(c,$)=>(r(),u(a,{cols:"12",sm:"12",key:c.id},{default:n(()=>[p("article",null,[s(E,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),s(a,{md:"4",class:"anuncios text-center"})]),_:1})}}},T=v(R,[["__scopeId","data-v-b319cfe0"]]);export{T as default};
