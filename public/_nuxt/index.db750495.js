import{H as x,M as h,T as w}from"./components.53759396.js";import{u as N,N as S}from"./Noticia.569b739a.js";import{_ as g,K as k,l as _,q as a,s as t,F as p,r as T,J as M,N as V,O as D,P as F,Q as b,R as A,L as B,M as R,k as d,X as q,U as I,v as E,V as H,m as f,x as L,y as P}from"./entry.5f0ea2a9.js";import{k as m,l as r,n as U}from"./VRow.2c2f2a75.js";const $=n=>(L("data-v-d062a905"),n=n(),P(),n),z=$(()=>f("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al Día con las Novedades ",-1)),C={__name:"index",setup(n){const y=k(),{data:v}=N(async()=>{const i=T([]);let u=M();const e=V(u,"noticias"),l=await D(F(e,A("fecha","desc"),b(10)));for(const s of l.docs){const o=B(y,`5ETmTP49k/${s.id}.jpeg`),c=await R(o);i.value.push({url:c,id:s.id,...s.data()})}return{noticias:i}},"$PslAyef5YX");return(i,u)=>{const e=h,l=w,s=x;return d(),_(p,null,[a(m,{class:"container-new pa-2"},{default:t(()=>[a(r,{cols:"12",md:"10",class:""},{default:t(()=>[z,a(U,{class:"pb-4"}),a(m,null,{default:t(()=>{var o;return[(d(!0),_(p,null,q((o=I(v))==null?void 0:o.noticias,(c,X)=>(d(),H(r,{cols:"12",sm:"12",key:c.id},{default:t(()=>[f("article",null,[a(S,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(r,{md:"4",class:"anuncios text-center"})]),_:1}),a(s,null,{default:t(()=>[a(e,{charset:"UTF-8"}),a(e,{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a(e,{name:"description",content:"Sinpauta: Tu fuente confiable de noticias y actualidad. Mantente informado sobre los últimos eventos, noticias y temas de actualidad en todo el mundo."}),a(e,{name:"keywords",content:"noticias, actualidad, eventos, información, periódico, Sinpauta"}),a(e,{name:"author",content:"Equipo de Sinpauta"}),a(l,null,{default:t(()=>[E("Sinpauta - Noticias y Actualidad")]),_:1})]),_:1})],64)}}},Q=g(C,[["__scopeId","data-v-d062a905"]]);export{Q as default};
