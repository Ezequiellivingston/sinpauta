import{H as b,M as g,T as S}from"./components.aae76218.js";import{u as k,V as M,N as T}from"./Noticia.54eab004.js";import{_ as q,L as H,r as m,o as N,l as f,q as a,s,F as h,H as V,O as D,P as F,Q as L,R,S as B,M as I,N as j,k as d,m as l,J as v,W as z,v as C,K as E,x as P,y as $}from"./entry.04cb230b.js";import{k as y,l as u}from"./VRow.f94eef09.js";const A=n=>(P("data-v-a48a00b4"),n=n(),$(),n),O={class:"container-cotizacion",id:"iframe-loteria"},U=["innerHTML"],J=A(()=>l("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Mas noticias ",-1)),K={__name:"loteria",setup(n){const w=H(),_=m();N(async()=>{_.value=await fetch("https://hello-world-jolly-bread-90e7.pabloezelivingston.workers.dev/").then(e=>e.text()).then(e=>e)});const{data:x}=k(async()=>{const e=m([]);let p=V();const t=D(p,"noticias"),r=await F(L(t,B("fecha","desc"),R(3)));for(const o of r.docs){const i=I(w,`5ETmTP49k/${o.id}.jpeg`),c=await j(i);e.value.push({url:c,id:o.id,...o.data()})}return{noticias:e}},"$IPYClhvH4e");return(e,p)=>{const t=g,r=S,o=b;return d(),f(h,null,[a(y,{class:"container-new pa-2"},{default:s(()=>[a(u,{cols:"12",md:"8",class:""},{default:s(()=>[l("div",O,[l("div",{innerHTML:v(_)},null,8,U)]),J,a(M,{class:"pb-4"}),a(y,null,{default:s(()=>{var i;return[(d(!0),f(h,null,z((i=v(x))==null?void 0:i.noticias,(c,Q)=>(d(),E(u,{cols:"12",sm:"12",key:c.id},{default:s(()=>[l("article",null,[a(T,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(u,{md:"4",class:"anuncios text-center"})]),_:1}),a(o,null,{default:s(()=>[a(t,{charset:"UTF-8"}),a(t,{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a(t,{name:"description",content:"Sinpauta: Obtén pronósticos, resultados y consejos para mejorar tus apuestas en la quiniela. Descubre cómo aumentar tus posibilidades de ganar y disfruta de una experiencia emocionante en nuestra plataforma de quiniela en línea."}),a(t,{name:"keywords",content:"quiniela, apuestas, resultados, pronósticos,noticias, actualidad, eventos, información, periódico, Sinpauta"}),a(t,{name:"author",content:"Equipo de Sinpauta"}),a(r,null,{default:s(()=>[C("Sinpauta - Lotería y Resultados")]),_:1})]),_:1})],64)}}},Z=q(K,[["__scopeId","data-v-a48a00b4"]]);export{Z as default};
