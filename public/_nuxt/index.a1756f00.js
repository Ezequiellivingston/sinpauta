import{H as x,M as h,T as w}from"./components.f17910a9.js";import{u as S,N}from"./Noticia.8a39c110.js";import{_ as g,L as k,l as _,q as e,s as t,F as p,r as T,H as M,O as D,P as F,Q as V,R as b,S as A,M as B,N as R,k as d,W as q,J as H,v as I,K as E,m as f,x as L,y as P}from"./entry.4382872a.js";import{k as m,n as r,l as $}from"./VRow.1206f99d.js";const z=n=>(L("data-v-1cc8dfe2"),n=n(),P(),n),C=z(()=>f("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al Día con las Novedades ",-1)),U={__name:"index",setup(n){const y=k(),{data:v}=S(async()=>{const i=T([]);let u=M();const a=D(u,"noticias"),l=await F(V(a,A("fecha","desc"),b(10)));for(const s of l.docs){const o=B(y,`5ETmTP49k/${s.id}.jpeg`),c=await R(o);i.value.push({url:c,id:s.id,...s.data()})}return{noticias:i}},"$PslAyef5YX");return(i,u)=>{const a=h,l=w,s=x;return d(),_(p,null,[e(m,{class:"container-new pa-2"},{default:t(()=>[e(r,{cols:"12",md:"8",class:""},{default:t(()=>[C,e($,{class:"pb-4"}),e(m,null,{default:t(()=>{var o;return[(d(!0),_(p,null,q((o=H(v))==null?void 0:o.noticias,(c,j)=>(d(),E(r,{cols:"12",sm:"12",key:c.id},{default:t(()=>[f("article",null,[e(N,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),e(r,{md:"4",class:"anuncios text-center"})]),_:1}),e(s,null,{default:t(()=>[e(a,{charset:"UTF-8"}),e(a,{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e(a,{name:"description",content:"Sinpauta: Tu fuente confiable de noticias y actualidad. Mantente informado sobre los últimos eventos, noticias y temas de actualidad en todo el mundo."}),e(a,{name:"keywords",content:"noticias, actualidad, eventos, información, periódico, Sinpauta"}),e(a,{name:"author",content:"Equipo de Sinpauta"}),e(l,null,{default:t(()=>[I("Sinpauta - Noticias y Actualidad")]),_:1})]),_:1})],64)}}},W=g(U,[["__scopeId","data-v-1cc8dfe2"]]);export{W as default};
