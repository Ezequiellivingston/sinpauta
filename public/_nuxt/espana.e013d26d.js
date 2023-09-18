import{H as w,M as E,T as v}from"./components.065f6598.js";import{u as N,V as T,N as g}from"./Noticia.0ab6cee4.js";import{_ as x,L as S,l as p,q as a,s as t,F as m,r as k,H as D,O as b,P as V,Q as B,X as F,M as H,N as I,k as l,W as M,J as q,v as L,K as R,m as f,x as C,y as P}from"./entry.c094ad50.js";import{k as _,l as d}from"./VRow.22408910.js";const $=n=>(C("data-v-00f1468b"),n=n(),P(),n),A=$(()=>f("h1",{class:"title",alt:"España al Día: Noticias de Última Hora"}," España al Día: Noticias de Última Hora ",-1)),K={__name:"espana",setup(n){const h=S(),{data:y}=N(async()=>{const i=k([]);let u=D();const e=b(u,"noticias"),r=await V(B(e,F("pais","==","Espana")));for(const o of r.docs){const s=H(h,`5ETmTP49k/${o.id}.jpeg`),c=await I(s);i.value.push({url:c,id:o.id,...o.data()})}return{noticias:i}},"$DBKBTyOYTf");return(i,u)=>{const e=E,r=v,o=w;return l(),p(m,null,[a(_,{class:"container-new pa-2"},{default:t(()=>[a(d,{cols:"12",md:"9"},{default:t(()=>[A,a(T,{class:"pb-4"}),a(_,null,{default:t(()=>{var s;return[(l(!0),p(m,null,M((s=q(y))==null?void 0:s.noticias,(c,O)=>(l(),R(d,{cols:"12",sm:"12",key:c.id},{default:t(()=>[f("article",null,[a(g,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(d,{md:"4",class:"anuncios text-center"})]),_:1}),a(o,null,{default:t(()=>[a(e,{charset:"UTF-8"}),a(e,{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a(e,{name:"description",content:"Sinpauta: Explora la actualidad de España y del mundo en nuestro portal de noticias. Mantente informado sobre política, economía, sociedad, cultura, deportes, salud, tecnología y entretenimiento. Los titulares más relevantes y la información de última hora, todo en un solo lugar."}),a(e,{name:"keywords",content:`España\r
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
Entretenimiento`}),a(e,{name:"author",content:"Equipo de Sinpauta"}),a(r,null,{default:t(()=>[L("Sinpauta España (es) - Noticias y Novedades")]),_:1})]),_:1})],64)}}},W=x(K,[["__scopeId","data-v-00f1468b"]]);export{W as default};
