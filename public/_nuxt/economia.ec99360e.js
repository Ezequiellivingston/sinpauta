import{_ as v,L as w,K as d,s as c,r as x,H as y,O as g,P as k,Q as N,X as V,M as D,N as F,k as i,q as a,l as S,W as B,J as E,F as I,m as _,x as R,y as b}from"./entry.ef212b8c.js";import{u as q,V as A,N as L}from"./Noticia.35107755.js";import{k as u,l}from"./VRow.3fd1f833.js";const M=e=>(R("data-v-316fadc1"),e=e(),b(),e),$=M(()=>_("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades economicas ",-1)),z={__name:"economia",setup(e){const p=w(),{data:m}=q(async()=>{const n=x([]);let r=y();const s=g(r,"noticias"),t=await k(N(s,V("tipo","==","Economia")));for(const o of t.docs){const f=D(p,`5ETmTP49k/${o.id}.jpeg`),h=await F(f);n.value.push({url:h,id:o.id,...o.data()})}return{noticias:n}},"$1Ep9ZJr4os");return(n,r)=>(i(),d(u,{class:"container-new pa-2"},{default:c(()=>[a(l,{cols:"12",md:"9"},{default:c(()=>[$,a(A,{class:"pb-4"}),a(u,null,{default:c(()=>{var s;return[(i(!0),S(I,null,B((s=E(m))==null?void 0:s.noticias,(t,o)=>(i(),d(l,{cols:"12",sm:"12",key:t.id},{default:c(()=>[_("article",null,[a(L,{noticia:t},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(l,{md:"4",class:"anuncios text-center"})]),_:1}))}},T=v(z,[["__scopeId","data-v-316fadc1"]]);export{T as default};
