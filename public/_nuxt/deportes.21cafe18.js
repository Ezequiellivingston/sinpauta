import{_ as v,K as k,V as d,s as c,r as w,J as x,N as y,O as g,P as D,Y as N,L as V,M as B,k as r,q as e,l as F,X as S,U as A,F as I,m as p,x as L,y as R}from"./entry.eb6d21b1.js";import{u as b,N as q}from"./Noticia.d0b52450.js";import{k as u,n as M,l as i}from"./VRow.d165e837.js";const $=a=>(L("data-v-0e1655c4"),a=a(),R(),a),z=$(()=>p("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades deportivas ",-1)),C={__name:"deportes",setup(a){const _=k(),{data:m}=b(async()=>{const n=w([]);let l=x();const s=y(l,"noticias"),t=await g(D(s,N("tipo","==","Deportes")));for(const o of t.docs){const f=V(_,`5ETmTP49k/${o.id}.jpeg`),h=await B(f);n.value.push({url:h,id:o.id,...o.data()})}return{noticias:n}},"$5XBtAOtkLh");return(n,l)=>(r(),d(u,{class:"container-new pa-2"},{default:c(()=>[e(i,{cols:"12",md:"9"},{default:c(()=>[z,e(M,{class:"pb-4"}),e(u,null,{default:c(()=>{var s;return[(r(!0),F(I,null,S((s=A(m))==null?void 0:s.noticias,(t,o)=>(r(),d(i,{cols:"12",sm:"12",key:t.id},{default:c(()=>[p("article",null,[e(q,{noticia:t},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),e(i,{md:"4",class:"anuncios text-center"})]),_:1}))}},T=v(C,[["__scopeId","data-v-0e1655c4"]]);export{T as default};
