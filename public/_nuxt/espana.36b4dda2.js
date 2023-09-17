import{H as w,M as E,T as v}from"./components.00af9447.js";import{_ as N,L as T,l as p,q as a,s as t,F as m,r as g,H as x,O as S,P as k,Q as D,X as b,M as V,N as B,k as l,W as F,J as H,v as I,K as M,m as f,x as q,y as L}from"./entry.05a3c4cd.js";import{u as R,V as C,N as P}from"./Noticia.2b7dbef1.js";import{k as _,l as d}from"./VRow.dbff2449.js";const $=n=>(q("data-v-00f1468b"),n=n(),L(),n),A=$(()=>f("h1",{class:"title",alt:"España al Día: Noticias de Última Hora"}," España al Día: Noticias de Última Hora ",-1)),K={__name:"espana",setup(n){const h=T(),{data:y}=R(async()=>{const i=g([]);let u=x();const e=S(u,"noticias"),r=await k(D(e,b("pais","==","Espana")));for(const o of r.docs){const s=V(h,`5ETmTP49k/${o.id}.jpeg`),c=await B(s);i.value.push({url:c,id:o.id,...o.data()})}return{noticias:i}},"$DBKBTyOYTf");return(i,u)=>{const e=E,r=v,o=w;return l(),p(m,null,[a(_,{class:"container-new pa-2"},{default:t(()=>[a(d,{cols:"12",md:"9"},{default:t(()=>[A,a(C,{class:"pb-4"}),a(_,null,{default:t(()=>{var s;return[(l(!0),p(m,null,F((s=H(y))==null?void 0:s.noticias,(c,O)=>(l(),M(d,{cols:"12",sm:"12",key:c.id},{default:t(()=>[f("article",null,[a(P,{noticia:c},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(d,{md:"4",class:"anuncios text-center"})]),_:1}),a(o,null,{default:t(()=>[a(e,{charset:"UTF-8"}),a(e,{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a(e,{name:"description",content:"Sinpauta: Explora la actualidad de España y del mundo en nuestro portal de noticias. Mantente informado sobre política, economía, sociedad, cultura, deportes, salud, tecnología y entretenimiento. Los titulares más relevantes y la información de última hora, todo en un solo lugar."}),a(e,{name:"keywords",content:`España\r
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
Entretenimiento`}),a(e,{name:"author",content:"Equipo de Sinpauta"}),a(r,null,{default:t(()=>[I("Sinpauta España (es) - Noticias y Novedades")]),_:1})]),_:1})],64)}}},W=N(K,[["__scopeId","data-v-00f1468b"]]);export{W as default};
