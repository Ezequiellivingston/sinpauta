import{H as g,M as S,T as k}from"./components.f17910a9.js";import{u as M,N as T}from"./Noticia.8a39c110.js";import{_ as b,L as N,r as m,o as q,l as f,q as e,s,F as h,H,O as D,P as F,Q as V,R as B,S as I,M as L,N as R,k as d,m as l,J as v,W as j,v as z,K as A,x as C,y as E}from"./entry.4382872a.js";import{k as y,n as u,l as P}from"./VRow.1206f99d.js";const $=n=>(C("data-v-599dd3dd"),n=n(),E(),n),O={class:"container-cotizacion",id:"iframe-loteria"},U=["innerHTML"],J=$(()=>l("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Mas noticias ",-1)),K={__name:"loteria",setup(n){const w=N(),_=m();q(async()=>{_.value=await fetch("https://hello-world-jolly-bread-90e7.pabloezelivingston.workers.dev/").then(a=>a.text()).then(a=>a)});const{data:x}=M(async()=>{const a=m([]);let p=H();const t=D(p,"noticias"),r=await F(V(t,I("fecha","desc"),B(3)));for(const o of r.docs){const i=L(w,`5ETmTP49k/${o.id}.jpeg`),c=await R(i);a.value.push({url:c,id:o.id,...o.data()})}return{noticias:a}},"$IPYClhvH4e");return(a,p)=>{const t=S,r=k,o=g;return d(),f(h,null,[e(y,{class:"container-new pa-2"},{default:s(()=>[e(u,{cols:"12",md:"8",class:""},{default:s(()=>[l("div",O,[l("div",{innerHTML:v(_)},null,8,U)]),J,e(P,{class:"pb-4"}),e(y,null,{default:s(()=>{var i;return[(d(!0),f(h,null,j((i=v(x))==null?void 0:i.noticias,(c,Q)=>(d(),A(u,{cols:"12",sm:"12",key:c.id},{default:s(()=>[l("article",null,[e(T,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),e(u,{md:"4",class:"anuncios text-center"})]),_:1}),e(o,null,{default:s(()=>[e(t,{charset:"UTF-8"}),e(t,{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e(t,{name:"description",content:"Sinpauta: Obtén pronósticos, resultados y consejos para mejorar tus apuestas en la quiniela. Descubre cómo aumentar tus posibilidades de ganar y disfruta de una experiencia emocionante en nuestra plataforma de quiniela en línea."}),e(t,{name:"keywords",content:"quiniela, apuestas, resultados, pronósticos,noticias, actualidad, eventos, información, periódico, Sinpauta"}),e(t,{name:"author",content:"Equipo de Sinpauta"}),e(r,null,{default:s(()=>[z("Sinpauta - Noticias y Actualidad")]),_:1})]),_:1})],64)}}},Z=b(K,[["__scopeId","data-v-599dd3dd"]]);export{Z as default};