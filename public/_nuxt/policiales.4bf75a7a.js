import{_ as v,M as w,L as d,s as c,r as x,J as y,P as g,Q as k,R as F,Y as N,N as D,O as I,k as i,q as a,l as R,X as S,K as V,F as A,m as _,x as B,y as b}from"./entry.8a84f92c.js";import{u as q,N as L}from"./Noticia.680ae3b2.js";import{k as u,l as M,n as l}from"./VRow.8c026b92.js";const P=e=>(B("data-v-464c713c"),e=e(),b(),e),Q=P(()=>_("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades policiales ",-1)),$={__name:"policiales",setup(e){const p=w(),{data:m}=q(async()=>{const n=x([]);let r=y();const s=g(r,"noticias"),t=await k(F(s,N("tipo","==","Policial")));for(const o of t.docs){const f=D(p,`5ETmTP49k/${o.id}.jpeg`),h=await I(f);n.value.push({url:h,id:o.id,...o.data()})}return{noticias:n}},"$4QQAYWIcF8");return(n,r)=>(i(),d(u,{class:"container-new pa-2"},{default:c(()=>[a(l,{cols:"12",md:"9"},{default:c(()=>[Q,a(M,{class:"pb-4"}),a(u,null,{default:c(()=>{var s;return[(i(!0),R(A,null,S((s=V(m))==null?void 0:s.noticias,(t,o)=>(i(),d(l,{cols:"12",sm:"12",key:t.id},{default:c(()=>[_("article",null,[a(L,{noticia:t},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(l,{md:"4",class:"anuncios text-center"})]),_:1}))}},T=v($,[["__scopeId","data-v-464c713c"]]);export{T as default};
