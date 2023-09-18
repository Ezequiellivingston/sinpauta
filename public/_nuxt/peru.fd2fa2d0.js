import{H as g,M as x,T as N}from"./components.7d957653.js";import{u as P,N as S}from"./Noticia.ebc2d1ea.js";import{_ as T,E as b,f as l,l as m,q as e,s as o,F as f,r as k,B as D,I as E,J as I,K as F,R as H,G as B,H as L,k as d,Q as q,C,v as M,D as R,m as v,x as V,y as $}from"./entry.19367979.js";const A=s=>(V("data-v-32432b53"),s=s(),$(),s),U=A(()=>v("h1",{class:"title",alt:"Perú al Día: Noticias de Última Hora"}," Perú al Día: Noticias de Última Hora ",-1)),j={__name:"peru",setup(s){const h=b(),{data:w}=P(async()=>{const r=k([]);let u=D();const c=E(u,"noticias"),n=await I(F(c,H("pais","==","Peru")));for(const t of n.docs){const a=B(h,`5ETmTP49k/${t.id}.jpeg`),i=await L(a);r.value.push({url:i,id:t.id,...t.data()})}return{noticias:r}},"$Lzw6sPcLY8");return(r,u)=>{const c=l("v-divider"),n=l("v-col"),t=l("v-row"),a=x,i=N,y=g;return d(),m(f,null,[e(t,{class:"container-new pa-2"},{default:o(()=>[e(n,{cols:"12",md:"9"},{default:o(()=>[U,e(c,{class:"pb-4"}),e(t,null,{default:o(()=>{var p;return[(d(!0),m(f,null,q((p=C(w))==null?void 0:p.noticias,(_,z)=>(d(),R(n,{cols:"12",sm:"12",key:_.id},{default:o(()=>[v("article",null,[e(S,{noticia:_},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),e(n,{md:"4",class:"anuncios text-center"})]),_:1}),e(y,null,{default:o(()=>[e(a,{charset:"UTF-8"}),e(a,{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e(a,{name:"description",content:"Sinpauta: Explora la actualidad de Perú y del mundo en nuestro portal de noticias. Mantente informado sobre política, economía, sociedad, cultura, deportes, salud, tecnología y entretenimiento. Los titulares más relevantes y la información de última hora, todo en un solo lugar."}),e(a,{name:"keywords",content:`Peru\r
        Perú\r
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
Entretenimiento`}),e(a,{name:"author",content:"Equipo de Sinpauta"}),e(i,null,{default:o(()=>[M("Sinpauta Perú (pe) - Noticias y Novedades")]),_:1})]),_:1})],64)}}},Q=T(j,[["__scopeId","data-v-32432b53"]]);export{Q as default};
