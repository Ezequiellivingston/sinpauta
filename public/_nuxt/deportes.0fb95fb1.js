import{u as v,V as k,N as w}from"./Noticia.c4bbde66.js";import{_ as x,L as y,K as d,s as c,r as g,H as D,O as N,P as V,Q as B,X as F,M as S,N as A,k as r,q as e,l as I,W as L,J as R,F as b,m as p,x as q,y as M}from"./entry.936841c7.js";import{k as u,l as i}from"./VRow.54067808.js";const $=a=>(q("data-v-116a86e0"),a=a(),M(),a),z=$(()=>p("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades deportivas ",-1)),C={__name:"deportes",setup(a){const _=y(),{data:m}=v(async()=>{const n=g([]);let l=D();const s=N(l,"noticias"),t=await V(B(s,F("tipo","==","Deportes")));for(const o of t.docs){const f=S(_,`5ETmTP49k/${o.id}.jpeg`),h=await A(f);n.value.push({url:h,id:o.id,...o.data()})}return{noticias:n}},"$5XBtAOtkLh");return(n,l)=>(r(),d(u,{class:"container-new pa-2"},{default:c(()=>[e(i,{cols:"12",md:"9"},{default:c(()=>[z,e(k,{class:"pb-4"}),e(u,null,{default:c(()=>{var s;return[(r(!0),I(b,null,L((s=R(m))==null?void 0:s.noticias,(t,o)=>(r(),d(i,{cols:"12",sm:"12",key:t.id},{default:c(()=>[p("article",null,[e(w,{noticia:t},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),e(i,{md:"4",class:"anuncios text-center"})]),_:1}))}},T=x(C,[["__scopeId","data-v-116a86e0"]]);export{T as default};
