import{H as x,M as h,T as w}from"./components.4da6d2c7.js";import{u as S,V as N,N as g}from"./Noticia.673c16a7.js";import{_ as k,L as T,l as _,q as e,s as t,F as p,r as M,H as V,O as D,P as F,Q as b,R as A,S as B,M as R,N as q,k as d,W as H,J as I,v as E,K as L,m as f,x as P,y as $}from"./entry.a4fc8cdd.js";import{k as m,l as r}from"./VRow.81fdc227.js";const z=o=>(P("data-v-1cc8dfe2"),o=o(),$(),o),C=z(()=>f("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al Día con las Novedades ",-1)),U={__name:"index",setup(o){const y=T(),{data:v}=S(async()=>{const i=M([]);let u=V();const a=D(u,"noticias"),l=await F(b(a,B("fecha","desc"),A(10)));for(const s of l.docs){const n=R(y,`5ETmTP49k/${s.id}.jpeg`),c=await q(n);i.value.push({url:c,id:s.id,...s.data()})}return{noticias:i}},"$PslAyef5YX");return(i,u)=>{const a=h,l=w,s=x;return d(),_(p,null,[e(m,{class:"container-new pa-2"},{default:t(()=>[e(r,{cols:"12",md:"8",class:""},{default:t(()=>[C,e(N,{class:"pb-4"}),e(m,null,{default:t(()=>{var n;return[(d(!0),_(p,null,H((n=I(v))==null?void 0:n.noticias,(c,j)=>(d(),L(r,{cols:"12",sm:"12",key:c.id},{default:t(()=>[f("article",null,[e(g,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),e(r,{md:"4",class:"anuncios text-center"})]),_:1}),e(s,null,{default:t(()=>[e(a,{charset:"UTF-8"}),e(a,{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e(a,{name:"description",content:"Sinpauta: Tu fuente confiable de noticias y actualidad. Mantente informado sobre los últimos eventos, noticias y temas de actualidad en todo el mundo."}),e(a,{name:"keywords",content:"noticias, actualidad, eventos, información, periódico, Sinpauta"}),e(a,{name:"author",content:"Equipo de Sinpauta"}),e(l,null,{default:t(()=>[E("Sinpauta - Noticias y Actualidad")]),_:1})]),_:1})],64)}}},W=k(U,[["__scopeId","data-v-1cc8dfe2"]]);export{W as default};
