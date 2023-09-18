import{H as b,M as w,T as v}from"./components.065f6598.js";import{u as N,V as g,N as x}from"./Noticia.0ab6cee4.js";import{_ as C,L as S,l as m,q as a,s as o,F as p,r as T,H as k,O as D,P as E,Q as V,X as F,M as H,N as I,k as l,W as M,J as q,v as B,K as L,m as f,x as R,y as A}from"./entry.c094ad50.js";import{k as _,l as d}from"./VRow.22408910.js";const P=n=>(R("data-v-7800576d"),n=n(),A(),n),$=P(()=>f("h1",{class:"title",alt:"Colombia al Día: Noticias de Última Hora"}," Colombia al Día: Noticias de Última Hora ",-1)),U={__name:"colombia",setup(n){const h=S(),{data:y}=N(async()=>{const c=T([]);let u=k();const e=D(u,"noticias"),r=await E(V(e,F("pais","==","Colombia")));for(const t of r.docs){const s=H(h,`5ETmTP49k/${t.id}.jpeg`),i=await I(s);c.value.push({url:i,id:t.id,...t.data()})}return{noticias:c}},"$5E1A9hiC3y");return(c,u)=>{const e=w,r=v,t=b;return l(),m(p,null,[a(_,{class:"container-new pa-2"},{default:o(()=>[a(d,{cols:"12",md:"9"},{default:o(()=>[$,a(g,{class:"pb-4"}),a(_,null,{default:o(()=>{var s;return[(l(!0),m(p,null,M((s=q(y))==null?void 0:s.noticias,(i,j)=>(l(),L(d,{cols:"12",sm:"12",key:i.id},{default:o(()=>[f("article",null,[a(x,{noticia:i},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(d,{md:"4",class:"anuncios text-center"})]),_:1}),a(t,null,{default:o(()=>[a(e,{charset:"UTF-8"}),a(e,{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a(e,{name:"description",content:"Sinpauta: Explora la actualidad de Colombia y del mundo en nuestro portal de noticias. Mantente informado sobre política, economía, sociedad, cultura, deportes, salud, tecnología y entretenimiento. Los titulares más relevantes y la información de última hora, todo en un solo lugar."}),a(e,{name:"keywords",content:`Colombia\r
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
Entretenimiento`}),a(e,{name:"author",content:"Equipo de Sinpauta"}),a(r,null,{default:o(()=>[B("Sinpauta Colombia (co) - Noticias y Novedades")]),_:1})]),_:1})],64)}}},W=C(U,[["__scopeId","data-v-7800576d"]]);export{W as default};
