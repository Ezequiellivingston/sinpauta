import{_ as k,L as q,K as p,s as c,r as w,H as x,O as g,P as N,Q as S,X as b,M as v,N as A,k as i,q as a,l as C,W as B,J as E,F,m as n,x as T,y as V}from"./entry.90ee344e.js";import{u as D,N as I}from"./Noticia.70707ba1.js";import{k as _,l as P,n as u}from"./VRow.3ca5bba2.js";const d=e=>(T("data-v-e02b169a"),e=e(),V(),e),R=d(()=>n("h1",{class:"title",alt:"¿Necesitas ayuda o tienes una historia que merece ser compartida? En SinPauta, estamos aquí para escucharte y crear una nota especial para ti. Contáctanos y cuéntanos tu historia. ¡Tu comunidad te respalda!"}," Comparte Tu Historia: Estamos Aquí para Ayudarte ",-1)),L=d(()=>n("p",null," ¿Necesitas ayuda o tienes una historia que merece ser compartida? En SinPauta, estamos aquí para escucharte y crear una nota especial para ti. Contáctanos y cuéntanos tu historia. ¡Tu comunidad te respalda! ",-1)),$=d(()=>n("a",{href:"#contacto"},"Contactar",-1)),H={__name:"ayuda",setup(e){const m=q(),{data:f}=D(async()=>{const r=w([]);let l=x();const t=g(l,"noticias"),s=await N(S(t,b("tipo","==","Ayuda")));for(const o of s.docs){const y=v(m,`5ETmTP49k/${o.id}.jpeg`),h=await A(y);r.value.push({url:h,id:o.id,...o.data()})}return{noticias:r}},"$UfAJpekAZB");return(r,l)=>(i(),p(_,{class:"container-new pa-2"},{default:c(()=>[a(u,{cols:"12",md:"9"},{default:c(()=>[R,L,$,a(P,{class:"pb-4"}),a(_,null,{default:c(()=>{var t;return[(i(!0),C(F,null,B((t=E(f))==null?void 0:t.noticias,(s,o)=>(i(),p(u,{cols:"12",sm:"12",key:s.id},{default:c(()=>[n("article",null,[a(I,{noticia:s},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(u,{md:"4",class:"anuncios text-center"})]),_:1}))}},K=k(H,[["__scopeId","data-v-e02b169a"]]);export{K as default};