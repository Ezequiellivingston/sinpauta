import{H as x,M as h,T as b}from"./components.76bf496b.js";import{_ as w,L as S,l as _,q as a,s as t,F as p,r as N,H as g,O as k,P as T,Q as M,R as V,S as D,M as F,N as A,k as d,W as B,J as R,v as q,K as H,m as f,x as I,y as E}from"./entry.ae00a719.js";import{u as L,V as P,N as $}from"./Noticia.2426f24b.js";import{k as m,l as r}from"./VRow.da6bf721.js";const z=o=>(I("data-v-fcbbd848"),o=o(),E(),o),C=z(()=>f("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al Día con las Novedades ",-1)),U={__name:"index",setup(o){const y=S(),{data:v}=L(async()=>{const i=N([]);let u=g();const e=k(u,"noticias"),l=await T(M(e,D("fecha","desc"),V(10)));for(const s of l.docs){const n=F(y,`5ETmTP49k/${s.id}.jpeg`),c=await A(n);i.value.push({url:c,id:s.id,...s.data()})}return{noticias:i}},"$PslAyef5YX");return(i,u)=>{const e=h,l=b,s=x;return d(),_(p,null,[a(m,{class:"container-new pa-2"},{default:t(()=>[a(r,{cols:"12",md:"8",class:""},{default:t(()=>[C,a(P,{class:"pb-4"}),a(m,null,{default:t(()=>{var n;return[(d(!0),_(p,null,B((n=R(v))==null?void 0:n.noticias,(c,j)=>(d(),H(r,{cols:"12",sm:"12",key:c.id},{default:t(()=>[f("article",null,[a($,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(r,{md:"4",class:"anuncios text-center"})]),_:1}),a(s,null,{default:t(()=>[a(e,{charset:"UTF-8"}),a(e,{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a(e,{name:"description",content:"Sinpauta: Tu fuente confiable de noticias y actualidad. Mantente informado sobre los últimos eventos, noticias y temas de actualidad en todo el mundo."}),a(e,{name:"keywords",content:"noticias, actualidad, eventos, información, periódico, Sinpauta"}),a(e,{name:"author",content:"Equipo de Sinpauta"}),a(l,null,{default:t(()=>[q("Sinpauta - Noticias y Actualidad")]),_:1})]),_:1})],64)}}},W=w(U,[["__scopeId","data-v-fcbbd848"]]);export{W as default};
