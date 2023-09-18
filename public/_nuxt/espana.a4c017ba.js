import{H as E,M as T,T as g}from"./components.7d957653.js";import{u as x,N}from"./Noticia.ebc2d1ea.js";import{_ as S,E as D,f as l,l as m,q as a,s as o,F as f,r as b,B as k,I as B,J as I,K as F,R as H,G as q,H as C,k as d,Q as M,C as R,v as L,D as V,m as v,x as $,y as A}from"./entry.19367979.js";const K=s=>($("data-v-00f1468b"),s=s(),A(),s),P=K(()=>v("h1",{class:"title",alt:"España al Día: Noticias de Última Hora"}," España al Día: Noticias de Última Hora ",-1)),U={__name:"espana",setup(s){const h=D(),{data:y}=x(async()=>{const c=b([]);let u=k();const r=B(u,"noticias"),n=await I(F(r,H("pais","==","Espana")));for(const t of n.docs){const e=q(h,`5ETmTP49k/${t.id}.jpeg`),i=await C(e);c.value.push({url:i,id:t.id,...t.data()})}return{noticias:c}},"$DBKBTyOYTf");return(c,u)=>{const r=l("v-divider"),n=l("v-col"),t=l("v-row"),e=T,i=g,w=E;return d(),m(f,null,[a(t,{class:"container-new pa-2"},{default:o(()=>[a(n,{cols:"12",md:"9"},{default:o(()=>[P,a(r,{class:"pb-4"}),a(t,null,{default:o(()=>{var p;return[(d(!0),m(f,null,M((p=R(y))==null?void 0:p.noticias,(_,j)=>(d(),V(n,{cols:"12",sm:"12",key:_.id},{default:o(()=>[v("article",null,[a(N,{noticia:_},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(n,{md:"4",class:"anuncios text-center"})]),_:1}),a(w,null,{default:o(()=>[a(e,{charset:"UTF-8"}),a(e,{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a(e,{name:"description",content:"Sinpauta: Explora la actualidad de España y del mundo en nuestro portal de noticias. Mantente informado sobre política, economía, sociedad, cultura, deportes, salud, tecnología y entretenimiento. Los titulares más relevantes y la información de última hora, todo en un solo lugar."}),a(e,{name:"keywords",content:`España\r
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
Entretenimiento`}),a(e,{name:"author",content:"Equipo de Sinpauta"}),a(i,null,{default:o(()=>[L("Sinpauta España (es) - Noticias y Novedades")]),_:1})]),_:1})],64)}}},Q=S(U,[["__scopeId","data-v-00f1468b"]]);export{Q as default};
