import{u as v,N as w}from"./Noticia.19a8ab33.js";import{_ as x,L as y,K as d,s as c,r as g,H as k,O as F,P as N,Q as D,X as I,M as S,N as V,k as i,q as a,l as A,W as B,J as R,F as b,m as _,x as q,y as L}from"./entry.5db3cbf2.js";import{k as u,l as M,n as l}from"./VRow.cacef611.js";const P=e=>(q("data-v-464c713c"),e=e(),L(),e),Q=P(()=>_("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades policiales ",-1)),$={__name:"policiales",setup(e){const p=y(),{data:m}=v(async()=>{const n=g([]);let r=k();const s=F(r,"noticias"),t=await N(D(s,I("tipo","==","Policial")));for(const o of t.docs){const f=S(p,`5ETmTP49k/${o.id}.jpeg`),h=await V(f);n.value.push({url:h,id:o.id,...o.data()})}return{noticias:n}},"$4QQAYWIcF8");return(n,r)=>(i(),d(u,{class:"container-new pa-2"},{default:c(()=>[a(l,{cols:"12",md:"9"},{default:c(()=>[Q,a(M,{class:"pb-4"}),a(u,null,{default:c(()=>{var s;return[(i(!0),A(b,null,B((s=R(m))==null?void 0:s.noticias,(t,o)=>(i(),d(l,{cols:"12",sm:"12",key:t.id},{default:c(()=>[_("article",null,[a(w,{noticia:t},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(l,{md:"4",class:"anuncios text-center"})]),_:1}))}},T=x($,[["__scopeId","data-v-464c713c"]]);export{T as default};
