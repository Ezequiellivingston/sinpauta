import{u as v,N as w}from"./Noticia.8a39c110.js";import{_ as x,L as y,K as r,s as n,r as g,H as k,O as N,P as V,Q as D,X as F,M as I,N as S,k as i,q as a,l as B,W as R,J as b,F as q,m as _,x as z,y as A}from"./entry.4382872a.js";import{k as u,l as L,n as l}from"./VRow.1206f99d.js";const M=e=>(z("data-v-d81efd10"),e=e(),A(),e),T=M(()=>_("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las tendencias ",-1)),$={__name:"tendencias",setup(e){const p=y(),{data:f}=v(async()=>{const c=g([]);let d=k();const s=N(d,"noticias"),t=await V(D(s,F("tipo","==","Tendencias")));for(const o of t.docs){const m=I(p,`5ETmTP49k/${o.id}.jpeg`),h=await S(m);c.value.push({url:h,id:o.id,...o.data()})}return{noticias:c}},"$8357I0vVYz");return(c,d)=>(i(),r(u,{class:"container-new pa-2"},{default:n(()=>[a(l,{cols:"12",md:"9"},{default:n(()=>[T,a(L,{class:"pb-4"}),a(u,null,{default:n(()=>{var s;return[(i(!0),B(q,null,R((s=b(f))==null?void 0:s.noticias,(t,o)=>(i(),r(l,{cols:"12",sm:"12",key:t.id},{default:n(()=>[_("article",null,[a(w,{noticia:t},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(l,{md:"4",class:"anuncios text-center"})]),_:1}))}},j=x($,[["__scopeId","data-v-d81efd10"]]);export{j as default};
