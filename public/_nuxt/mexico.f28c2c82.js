import{H as w,M as b,T as g}from"./components.7d957653.js";import{u as M,N}from"./Noticia.ebc2d1ea.js";import{_ as S,E,f as l,l as p,q as e,s as o,F as f,r as T,B as D,I as k,J as I,K as F,R as H,G as B,H as q,k as d,Q as C,C as R,v as V,D as L,m as x,x as $,y as A}from"./entry.19367979.js";const P=s=>($("data-v-8bccb209"),s=s(),A(),s),U=P(()=>x("h1",{class:"title",alt:"México al Día: Noticias de Última Hora"}," México al Día: Noticias de Última Hora ",-1)),j={__name:"mexico",setup(s){const v=E(),{data:h}=M(async()=>{const c=T([]);let u=D();const i=k(u,"noticias"),n=await I(F(i,H("pais","==","Mexico")));for(const t of n.docs){const a=B(v,`5ETmTP49k/${t.id}.jpeg`),r=await q(a);c.value.push({url:r,id:t.id,...t.data()})}return{noticias:c}},"$EXVDytbWE5");return(c,u)=>{const i=l("v-divider"),n=l("v-col"),t=l("v-row"),a=b,r=g,y=w;return d(),p(f,null,[e(t,{class:"container-new pa-2"},{default:o(()=>[e(n,{cols:"12",md:"9"},{default:o(()=>[U,e(i,{class:"pb-4"}),e(t,null,{default:o(()=>{var _;return[(d(!0),p(f,null,C((_=R(h))==null?void 0:_.noticias,(m,G)=>(d(),L(n,{cols:"12",sm:"12",key:m.id},{default:o(()=>[x("article",null,[e(N,{noticia:m},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),e(n,{md:"4",class:"anuncios text-center"})]),_:1}),e(y,null,{default:o(()=>[e(a,{charset:"UTF-8"}),e(a,{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e(a,{name:"description",content:"Sinpauta: Explora la actualidad de México y del mundo en nuestro portal de noticias. Mantente informado sobre política, economía, sociedad, cultura, deportes, salud, tecnología y entretenimiento. Los titulares más relevantes y la información de última hora, todo en un solo lugar."}),e(a,{name:"keywords",content:`México\r
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
Entretenimiento`}),e(a,{name:"author",content:"Equipo de Sinpauta"}),e(r,null,{default:o(()=>[V("Sinpauta Mexico (mx) - Noticias y Novedades")]),_:1})]),_:1})],64)}}},W=S(j,[["__scopeId","data-v-8bccb209"]]);export{W as default};
