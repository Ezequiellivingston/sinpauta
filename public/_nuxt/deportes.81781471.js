import{u as v,N as k}from"./Noticia.a0d78ce0.js";import{_ as w,M as x,L as d,s as c,r as y,J as g,P as D,Q as N,R as B,Y as F,N as R,O as S,k as r,q as e,l as V,X as A,K as I,F as L,m as p,x as b,y as q}from"./entry.83866629.js";import{k as u,l as M,n as i}from"./VRow.e7dbf378.js";const $=a=>(b("data-v-0e1655c4"),a=a(),q(),a),z=$(()=>p("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades deportivas ",-1)),C={__name:"deportes",setup(a){const _=x(),{data:m}=v(async()=>{const n=y([]);let l=g();const s=D(l,"noticias"),t=await N(B(s,F("tipo","==","Deportes")));for(const o of t.docs){const f=R(_,`5ETmTP49k/${o.id}.jpeg`),h=await S(f);n.value.push({url:h,id:o.id,...o.data()})}return{noticias:n}},"$5XBtAOtkLh");return(n,l)=>(r(),d(u,{class:"container-new pa-2"},{default:c(()=>[e(i,{cols:"12",md:"9"},{default:c(()=>[z,e(M,{class:"pb-4"}),e(u,null,{default:c(()=>{var s;return[(r(!0),V(L,null,A((s=I(m))==null?void 0:s.noticias,(t,o)=>(r(),d(i,{cols:"12",sm:"12",key:t.id},{default:c(()=>[p("article",null,[e(k,{noticia:t},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),e(i,{md:"4",class:"anuncios text-center"})]),_:1}))}},T=w(C,[["__scopeId","data-v-0e1655c4"]]);export{T as default};
