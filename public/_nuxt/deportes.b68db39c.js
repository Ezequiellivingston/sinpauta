import{_ as v,L as k,K as d,s as c,r as w,H as x,O as y,P as g,Q as D,X as N,M as B,N as F,k as r,q as e,l as S,W as V,J as A,F as I,m as p,x as L,y as R}from"./entry.49d8968d.js";import{u as b,N as q}from"./Noticia.bd2702e8.js";import{k as u,l as M,n as i}from"./VRow.8fe2388b.js";const $=a=>(L("data-v-0e1655c4"),a=a(),R(),a),z=$(()=>p("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades deportivas ",-1)),C={__name:"deportes",setup(a){const _=k(),{data:m}=b(async()=>{const n=w([]);let l=x();const s=y(l,"noticias"),t=await g(D(s,N("tipo","==","Deportes")));for(const o of t.docs){const f=B(_,`5ETmTP49k/${o.id}.jpeg`),h=await F(f);n.value.push({url:h,id:o.id,...o.data()})}return{noticias:n}},"$5XBtAOtkLh");return(n,l)=>(r(),d(u,{class:"container-new pa-2"},{default:c(()=>[e(i,{cols:"12",md:"9"},{default:c(()=>[z,e(M,{class:"pb-4"}),e(u,null,{default:c(()=>{var s;return[(r(!0),S(I,null,V((s=A(m))==null?void 0:s.noticias,(t,o)=>(r(),d(i,{cols:"12",sm:"12",key:t.id},{default:c(()=>[p("article",null,[e(q,{noticia:t},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),e(i,{md:"4",class:"anuncios text-center"})]),_:1}))}},T=v(C,[["__scopeId","data-v-0e1655c4"]]);export{T as default};
