import{u as v,N as w}from"./Noticia.fe775c2c.js";import{_ as x,M as y,L as r,s as n,r as g,J as k,P as N,Q as V,R as D,Y as F,N as I,O as R,k as i,q as a,l as S,X as B,K as b,F as q,m as _,x as z,y as A}from"./entry.26c2b690.js";import{k as u,l as L,n as l}from"./VRow.7d849aad.js";const M=e=>(z("data-v-d81efd10"),e=e(),A(),e),T=M(()=>_("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las tendencias ",-1)),$={__name:"tendencias",setup(e){const p=y(),{data:f}=v(async()=>{const c=g([]);let d=k();const s=N(d,"noticias"),t=await V(D(s,F("tipo","==","Tendencias")));for(const o of t.docs){const m=I(p,`5ETmTP49k/${o.id}.jpeg`),h=await R(m);c.value.push({url:h,id:o.id,...o.data()})}return{noticias:c}},"$8357I0vVYz");return(c,d)=>(i(),r(u,{class:"container-new pa-2"},{default:n(()=>[a(l,{cols:"12",md:"9"},{default:n(()=>[T,a(L,{class:"pb-4"}),a(u,null,{default:n(()=>{var s;return[(i(!0),S(q,null,B((s=b(f))==null?void 0:s.noticias,(t,o)=>(i(),r(l,{cols:"12",sm:"12",key:t.id},{default:n(()=>[_("article",null,[a(w,{noticia:t},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(l,{md:"4",class:"anuncios text-center"})]),_:1}))}},Y=x($,[["__scopeId","data-v-d81efd10"]]);export{Y as default};
