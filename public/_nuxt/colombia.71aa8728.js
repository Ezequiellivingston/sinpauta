import{H as b,M as w,T as v}from"./components.00af9447.js";import{_ as N,L as g,l as m,q as a,s as o,F as p,r as x,H as C,O as S,P as T,Q as k,X as D,M as E,N as V,k as l,W as F,J as H,v as I,K as M,m as f,x as q,y as B}from"./entry.05a3c4cd.js";import{u as L,V as R,N as A}from"./Noticia.2b7dbef1.js";import{k as _,l as d}from"./VRow.dbff2449.js";const P=n=>(q("data-v-7800576d"),n=n(),B(),n),$=P(()=>f("h1",{class:"title",alt:"Colombia al Día: Noticias de Última Hora"}," Colombia al Día: Noticias de Última Hora ",-1)),U={__name:"colombia",setup(n){const h=g(),{data:y}=L(async()=>{const c=x([]);let u=C();const e=S(u,"noticias"),r=await T(k(e,D("pais","==","Colombia")));for(const t of r.docs){const s=E(h,`5ETmTP49k/${t.id}.jpeg`),i=await V(s);c.value.push({url:i,id:t.id,...t.data()})}return{noticias:c}},"$5E1A9hiC3y");return(c,u)=>{const e=w,r=v,t=b;return l(),m(p,null,[a(_,{class:"container-new pa-2"},{default:o(()=>[a(d,{cols:"12",md:"9"},{default:o(()=>[$,a(R,{class:"pb-4"}),a(_,null,{default:o(()=>{var s;return[(l(!0),m(p,null,F((s=H(y))==null?void 0:s.noticias,(i,j)=>(l(),M(d,{cols:"12",sm:"12",key:i.id},{default:o(()=>[f("article",null,[a(A,{noticia:i},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(d,{md:"4",class:"anuncios text-center"})]),_:1}),a(t,null,{default:o(()=>[a(e,{charset:"UTF-8"}),a(e,{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a(e,{name:"description",content:"Sinpauta: Explora la actualidad de Colombia y del mundo en nuestro portal de noticias. Mantente informado sobre política, economía, sociedad, cultura, deportes, salud, tecnología y entretenimiento. Los titulares más relevantes y la información de última hora, todo en un solo lugar."}),a(e,{name:"keywords",content:`Colombia\r
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
Entretenimiento`}),a(e,{name:"author",content:"Equipo de Sinpauta"}),a(r,null,{default:o(()=>[I("Sinpauta Colombia (co) - Noticias y Novedades")]),_:1})]),_:1})],64)}}},W=N(U,[["__scopeId","data-v-7800576d"]]);export{W as default};
