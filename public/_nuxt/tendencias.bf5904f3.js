import{u as v,V as w,N as x}from"./Noticia.673c16a7.js";import{_ as y,L as g,K as r,s as n,r as k,H as V,O as N,P as D,Q as F,X as I,M as S,N as B,k as i,q as a,l as R,W as b,J as q,F as z,m as _,x as A,y as L}from"./entry.a4fc8cdd.js";import{k as u,l}from"./VRow.81fdc227.js";const M=e=>(A("data-v-d81efd10"),e=e(),L(),e),T=M(()=>_("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las tendencias ",-1)),$={__name:"tendencias",setup(e){const p=g(),{data:f}=v(async()=>{const c=k([]);let d=V();const s=N(d,"noticias"),t=await D(F(s,I("tipo","==","Tendencias")));for(const o of t.docs){const m=S(p,`5ETmTP49k/${o.id}.jpeg`),h=await B(m);c.value.push({url:h,id:o.id,...o.data()})}return{noticias:c}},"$8357I0vVYz");return(c,d)=>(i(),r(u,{class:"container-new pa-2"},{default:n(()=>[a(l,{cols:"12",md:"9"},{default:n(()=>[T,a(w,{class:"pb-4"}),a(u,null,{default:n(()=>{var s;return[(i(!0),R(z,null,b((s=q(f))==null?void 0:s.noticias,(t,o)=>(i(),r(l,{cols:"12",sm:"12",key:t.id},{default:n(()=>[_("article",null,[a(x,{noticia:t},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(l,{md:"4",class:"anuncios text-center"})]),_:1}))}},j=y($,[["__scopeId","data-v-d81efd10"]]);export{j as default};
