import{u as v,N as w}from"./Noticia.95a5b716.js";import{_ as x,L as y,K as d,s as c,r as g,H as k,O as N,P as D,Q as F,X as S,M as V,N as B,k as i,q as a,l as E,W as I,J as R,F as b,m as _,x as q,y as A}from"./entry.cb26a950.js";import{k as u,l as L,n as l}from"./VRow.4dafc012.js";const M=e=>(q("data-v-49462f2c"),e=e(),A(),e),$=M(()=>_("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades economicas ",-1)),z={__name:"economia",setup(e){const p=y(),{data:m}=v(async()=>{const n=g([]);let r=k();const s=N(r,"noticias"),t=await D(F(s,S("tipo","==","Economia")));for(const o of t.docs){const f=V(p,`5ETmTP49k/${o.id}.jpeg`),h=await B(f);n.value.push({url:h,id:o.id,...o.data()})}return{noticias:n}},"$1Ep9ZJr4os");return(n,r)=>(i(),d(u,{class:"container-new pa-2"},{default:c(()=>[a(l,{cols:"12",md:"9"},{default:c(()=>[$,a(L,{class:"pb-4"}),a(u,null,{default:c(()=>{var s;return[(i(!0),E(b,null,I((s=R(m))==null?void 0:s.noticias,(t,o)=>(i(),d(l,{cols:"12",sm:"12",key:t.id},{default:c(()=>[_("article",null,[a(w,{noticia:t},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(l,{md:"4",class:"anuncios text-center"})]),_:1}))}},T=x(z,[["__scopeId","data-v-49462f2c"]]);export{T as default};
