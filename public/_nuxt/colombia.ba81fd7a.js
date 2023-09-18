import{H as w,M as C,T as g}from"./components.7d957653.js";import{u as x,N}from"./Noticia.ebc2d1ea.js";import{_ as S,E as T,f as l,l as p,q as a,s as t,F as f,r as E,B as k,I as D,J as I,K as F,R as H,G as B,H as q,k as d,Q as M,C as R,v as A,D as L,m as v,x as V,y as $}from"./entry.19367979.js";const P=s=>(V("data-v-7800576d"),s=s(),$(),s),U=P(()=>v("h1",{class:"title",alt:"Colombia al Día: Noticias de Última Hora"}," Colombia al Día: Noticias de Última Hora ",-1)),j={__name:"colombia",setup(s){const h=T(),{data:y}=x(async()=>{const c=E([]);let u=k();const i=D(u,"noticias"),n=await I(F(i,H("pais","==","Colombia")));for(const e of n.docs){const o=B(h,`5ETmTP49k/${e.id}.jpeg`),r=await q(o);c.value.push({url:r,id:e.id,...e.data()})}return{noticias:c}},"$5E1A9hiC3y");return(c,u)=>{const i=l("v-divider"),n=l("v-col"),e=l("v-row"),o=C,r=g,b=w;return d(),p(f,null,[a(e,{class:"container-new pa-2"},{default:t(()=>[a(n,{cols:"12",md:"9"},{default:t(()=>[U,a(i,{class:"pb-4"}),a(e,null,{default:t(()=>{var m;return[(d(!0),p(f,null,M((m=R(y))==null?void 0:m.noticias,(_,G)=>(d(),L(n,{cols:"12",sm:"12",key:_.id},{default:t(()=>[v("article",null,[a(N,{noticia:_},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(n,{md:"4",class:"anuncios text-center"})]),_:1}),a(b,null,{default:t(()=>[a(o,{charset:"UTF-8"}),a(o,{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a(o,{name:"description",content:"Sinpauta: Explora la actualidad de Colombia y del mundo en nuestro portal de noticias. Mantente informado sobre política, economía, sociedad, cultura, deportes, salud, tecnología y entretenimiento. Los titulares más relevantes y la información de última hora, todo en un solo lugar."}),a(o,{name:"keywords",content:`Colombia\r
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
Entretenimiento`}),a(o,{name:"author",content:"Equipo de Sinpauta"}),a(r,null,{default:t(()=>[A("Sinpauta Colombia (co) - Noticias y Novedades")]),_:1})]),_:1})],64)}}},z=S(j,[["__scopeId","data-v-7800576d"]]);export{z as default};
