import{H as y,M as w,T as b}from"./components.110d933d.js";import{u as v,V as M,N}from"./Noticia.74a7c5f7.js";import{_ as g,L as S,l as m,q as a,s as t,F as p,r as T,H as k,O as D,P as E,Q as V,X as F,M as H,N as I,k as l,W as q,J as B,v as L,K as R,m as f,x as C,y as P}from"./entry.bb027668.js";import{k as _,l as d}from"./VRow.3911e2e2.js";const $=n=>(C("data-v-8bccb209"),n=n(),P(),n),A=$(()=>f("h1",{class:"title",alt:"México al Día: Noticias de Última Hora"}," México al Día: Noticias de Última Hora ",-1)),U={__name:"mexico",setup(n){const x=S(),{data:h}=v(async()=>{const i=T([]);let u=k();const e=D(u,"noticias"),r=await E(V(e,F("pais","==","Mexico")));for(const o of r.docs){const s=H(x,`5ETmTP49k/${o.id}.jpeg`),c=await I(s);i.value.push({url:c,id:o.id,...o.data()})}return{noticias:i}},"$EXVDytbWE5");return(i,u)=>{const e=w,r=b,o=y;return l(),m(p,null,[a(_,{class:"container-new pa-2"},{default:t(()=>[a(d,{cols:"12",md:"9"},{default:t(()=>[A,a(M,{class:"pb-4"}),a(_,null,{default:t(()=>{var s;return[(l(!0),m(p,null,q((s=B(h))==null?void 0:s.noticias,(c,W)=>(l(),R(d,{cols:"12",sm:"12",key:c.id},{default:t(()=>[f("article",null,[a(N,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(d,{md:"4",class:"anuncios text-center"})]),_:1}),a(o,null,{default:t(()=>[a(e,{charset:"UTF-8"}),a(e,{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a(e,{name:"description",content:"Sinpauta: Explora la actualidad de México y del mundo en nuestro portal de noticias. Mantente informado sobre política, economía, sociedad, cultura, deportes, salud, tecnología y entretenimiento. Los titulares más relevantes y la información de última hora, todo en un solo lugar."}),a(e,{name:"keywords",content:`México\r
Noticias\r
Actualidad\r
Titulares\r
Información\r
Última hora\r
Política\r
Economía\r
Sociedad\r
Cultura\r
Deportes\r
Internacional\r
Salud\r
Tecnología\r
Entretenimiento`}),a(e,{name:"author",content:"Equipo de Sinpauta"}),a(r,null,{default:t(()=>[L("Sinpauta Mexico (mx) - Noticias y Novedades")]),_:1})]),_:1})],64)}}},O=g(U,[["__scopeId","data-v-8bccb209"]]);export{O as default};
