import{H as x,M as h,T as b}from"./components.63f4b28a.js";import{u as w,V as S,N}from"./Noticia.c4bbde66.js";import{_ as g,L as k,l as _,q as a,s as t,F as p,r as T,H as M,O as V,P as D,Q as F,R as A,S as B,M as R,N as q,k as d,W as H,J as I,v as E,K as L,m as f,x as P,y as $}from"./entry.936841c7.js";import{k as m,l as r}from"./VRow.54067808.js";const z=o=>(P("data-v-fcbbd848"),o=o(),$(),o),C=z(()=>f("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al Día con las Novedades ",-1)),U={__name:"index",setup(o){const y=k(),{data:v}=w(async()=>{const i=T([]);let u=M();const e=V(u,"noticias"),l=await D(F(e,B("fecha","desc"),A(10)));for(const s of l.docs){const n=R(y,`5ETmTP49k/${s.id}.jpeg`),c=await q(n);i.value.push({url:c,id:s.id,...s.data()})}return{noticias:i}},"$PslAyef5YX");return(i,u)=>{const e=h,l=b,s=x;return d(),_(p,null,[a(m,{class:"container-new pa-2"},{default:t(()=>[a(r,{cols:"12",md:"8",class:""},{default:t(()=>[C,a(S,{class:"pb-4"}),a(m,null,{default:t(()=>{var n;return[(d(!0),_(p,null,H((n=I(v))==null?void 0:n.noticias,(c,j)=>(d(),L(r,{cols:"12",sm:"12",key:c.id},{default:t(()=>[f("article",null,[a(N,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(r,{md:"4",class:"anuncios text-center"})]),_:1}),a(s,null,{default:t(()=>[a(e,{charset:"UTF-8"}),a(e,{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a(e,{name:"description",content:"Sinpauta: Tu fuente confiable de noticias y actualidad. Mantente informado sobre los últimos eventos, noticias y temas de actualidad en todo el mundo."}),a(e,{name:"keywords",content:"noticias, actualidad, eventos, información, periódico, Sinpauta"}),a(e,{name:"author",content:"Equipo de Sinpauta"}),a(l,null,{default:t(()=>[E("Sinpauta - Noticias y Actualidad")]),_:1})]),_:1})],64)}}},W=g(U,[["__scopeId","data-v-fcbbd848"]]);export{W as default};
