import{_ as v,J as k,U as d,s as c,r as w,H as x,M as y,N as g,O as D,X as N,K as B,L as F,k as r,q as e,l as S,W as V,T as A,F as I,m as p,x as L,y as R}from"./entry.5d21afd0.js";import{u as b,N as q}from"./Noticia.e86c541c.js";import{k as u,n as M,l as i}from"./VRow.46f89853.js";const T=a=>(L("data-v-236d9992"),a=a(),R(),a),$=T(()=>p("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades deportivas ",-1)),z={__name:"deportes",setup(a){const _=k(),{data:m}=b(async()=>{const n=w([]);let l=x();const s=y(l,"noticias"),t=await g(D(s,N("tipo","==","Deportes")));for(const o of t.docs){const f=B(_,`5ETmTP49k/${o.id}.jpeg`),h=await F(f);n.value.push({url:h,id:o.id,...o.data()})}return{noticias:n}},"$5XBtAOtkLh");return(n,l)=>(r(),d(u,{class:"container-new pa-2"},{default:c(()=>[e(i,{cols:"12",md:"9"},{default:c(()=>[$,e(M,{class:"pb-4"}),e(u,null,{default:c(()=>{var s;return[(r(!0),S(I,null,V((s=A(m))==null?void 0:s.noticias,(t,o)=>(r(),d(i,{cols:"12",sm:"12",key:t.id},{default:c(()=>[p("article",null,[e(q,{noticia:t},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),e(i,{md:"4",class:"anuncios text-center"})]),_:1}))}},U=v(z,[["__scopeId","data-v-236d9992"]]);export{U as default};
