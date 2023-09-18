import{H as y,M as w,T as b}from"./components.597bdc78.js";import{_ as v,L as M,l as m,q as a,s as t,F as p,r as N,H as g,O as S,P as T,Q as k,X as D,M as E,N as V,k as l,W as F,J as H,v as I,K as q,m as f,x as B,y as L}from"./entry.63464e41.js";import{u as R,V as C,N as P}from"./Noticia.51a15a0e.js";import{k as _,l as d}from"./VRow.9afdfaf0.js";const $=n=>(B("data-v-8bccb209"),n=n(),L(),n),A=$(()=>f("h1",{class:"title",alt:"México al Día: Noticias de Última Hora"}," México al Día: Noticias de Última Hora ",-1)),U={__name:"mexico",setup(n){const x=M(),{data:h}=R(async()=>{const i=N([]);let u=g();const e=S(u,"noticias"),r=await T(k(e,D("pais","==","Mexico")));for(const o of r.docs){const s=E(x,`5ETmTP49k/${o.id}.jpeg`),c=await V(s);i.value.push({url:c,id:o.id,...o.data()})}return{noticias:i}},"$EXVDytbWE5");return(i,u)=>{const e=w,r=b,o=y;return l(),m(p,null,[a(_,{class:"container-new pa-2"},{default:t(()=>[a(d,{cols:"12",md:"9"},{default:t(()=>[A,a(C,{class:"pb-4"}),a(_,null,{default:t(()=>{var s;return[(l(!0),m(p,null,F((s=H(h))==null?void 0:s.noticias,(c,W)=>(l(),q(d,{cols:"12",sm:"12",key:c.id},{default:t(()=>[f("article",null,[a(P,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(d,{md:"4",class:"anuncios text-center"})]),_:1}),a(o,null,{default:t(()=>[a(e,{charset:"UTF-8"}),a(e,{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a(e,{name:"description",content:"Sinpauta: Explora la actualidad de México y del mundo en nuestro portal de noticias. Mantente informado sobre política, economía, sociedad, cultura, deportes, salud, tecnología y entretenimiento. Los titulares más relevantes y la información de última hora, todo en un solo lugar."}),a(e,{name:"keywords",content:`México\r
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
Entretenimiento`}),a(e,{name:"author",content:"Equipo de Sinpauta"}),a(r,null,{default:t(()=>[I("Sinpauta Mexico (mx) - Noticias y Novedades")]),_:1})]),_:1})],64)}}},O=v(U,[["__scopeId","data-v-8bccb209"]]);export{O as default};
