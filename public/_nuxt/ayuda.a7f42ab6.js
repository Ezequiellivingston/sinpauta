import{_ as k,K as q,V as p,s as c,r as w,J as x,N as g,O as N,P as S,Y as b,L as v,M as A,k as i,q as a,l as C,X as V,U as B,F as E,m as n,x as F,y as T}from"./entry.00fee262.js";import{u as D,N as I}from"./Noticia.a94e75b1.js";import{k as _,n as P,l as u}from"./VRow.6a2d05bc.js";const d=e=>(F("data-v-e02b169a"),e=e(),T(),e),R=d(()=>n("h1",{class:"title",alt:"¿Necesitas ayuda o tienes una historia que merece ser compartida? En SinPauta, estamos aquí para escucharte y crear una nota especial para ti. Contáctanos y cuéntanos tu historia. ¡Tu comunidad te respalda!"}," Comparte Tu Historia: Estamos Aquí para Ayudarte ",-1)),L=d(()=>n("p",null," ¿Necesitas ayuda o tienes una historia que merece ser compartida? En SinPauta, estamos aquí para escucharte y crear una nota especial para ti. Contáctanos y cuéntanos tu historia. ¡Tu comunidad te respalda! ",-1)),U=d(()=>n("a",{href:"#contacto"},"Contactar",-1)),$={__name:"ayuda",setup(e){const m=q(),{data:f}=D(async()=>{const r=w([]);let l=x();const t=g(l,"noticias"),s=await N(S(t,b("tipo","==","Ayuda")));for(const o of s.docs){const y=v(m,`5ETmTP49k/${o.id}.jpeg`),h=await A(y);r.value.push({url:h,id:o.id,...o.data()})}return{noticias:r}},"$UfAJpekAZB");return(r,l)=>(i(),p(_,{class:"container-new pa-2"},{default:c(()=>[a(u,{cols:"12",md:"9"},{default:c(()=>[R,L,U,a(P,{class:"pb-4"}),a(_,null,{default:c(()=>{var t;return[(i(!0),C(E,null,V((t=B(f))==null?void 0:t.noticias,(s,o)=>(i(),p(u,{cols:"12",sm:"12",key:s.id},{default:c(()=>[n("article",null,[a(I,{noticia:s},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(u,{md:"4",class:"anuncios text-center"})]),_:1}))}},K=k($,[["__scopeId","data-v-e02b169a"]]);export{K as default};