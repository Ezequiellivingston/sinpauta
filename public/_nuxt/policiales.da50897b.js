import{_ as v,K as w,V as d,s as c,r as x,J as y,N as g,O as k,P as F,Y as N,L as V,M as D,k as i,q as a,l as I,X as S,U as A,F as B,m as _,x as R,y as b}from"./entry.621c8512.js";import{u as q,N as L}from"./Noticia.9c7e084f.js";import{k as u,n as M,l}from"./VRow.d4b93cce.js";const P=e=>(R("data-v-464c713c"),e=e(),b(),e),$=P(()=>_("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades policiales ",-1)),z={__name:"policiales",setup(e){const p=w(),{data:m}=q(async()=>{const n=x([]);let r=y();const s=g(r,"noticias"),t=await k(F(s,N("tipo","==","Policial")));for(const o of t.docs){const f=V(p,`5ETmTP49k/${o.id}.jpeg`),h=await D(f);n.value.push({url:h,id:o.id,...o.data()})}return{noticias:n}},"$4QQAYWIcF8");return(n,r)=>(i(),d(u,{class:"container-new pa-2"},{default:c(()=>[a(l,{cols:"12",md:"9"},{default:c(()=>[$,a(M,{class:"pb-4"}),a(u,null,{default:c(()=>{var s;return[(i(!0),I(B,null,S((s=A(m))==null?void 0:s.noticias,(t,o)=>(i(),d(l,{cols:"12",sm:"12",key:t.id},{default:c(()=>[_("article",null,[a(L,{noticia:t},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(l,{md:"4",class:"anuncios text-center"})]),_:1}))}},T=v(z,[["__scopeId","data-v-464c713c"]]);export{T as default};
