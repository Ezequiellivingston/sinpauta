import{_ as x,J as k,U as d,s as c,r as v,H as w,M as y,N as g,O as b,X as N,K as S,L as D,k as i,q as a,l as F,W as V,T as A,F as B,m as p,x as I,y as L}from"./entry.5d21afd0.js";import{u as R,N as q}from"./Noticia.e86c541c.js";import{k as u,n as C,l}from"./VRow.46f89853.js";const M=s=>(I("data-v-5d1b7f74"),s=s(),L(),s),T=M(()=>p("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades politicas ",-1)),$={__name:"politica",setup(s){const _=k(),{data:f}=R(async()=>{const n=v([]);let r=w();const e=y(r,"noticias"),t=await g(b(e,N("tipo","==","Politica")));for(const o of t.docs){const m=S(_,`5ETmTP49k/${o.id}.jpeg`),h=await D(m);n.value.push({url:h,id:o.id,...o.data()})}return{noticias:n}},"$cLAnxkCSpj");return(n,r)=>(i(),d(u,{class:"container-new pa-2"},{default:c(()=>[a(l,{cols:"12",md:"9"},{default:c(()=>[T,a(C,{class:"pb-4"}),a(u,null,{default:c(()=>{var e;return[(i(!0),F(B,null,V((e=A(f))==null?void 0:e.noticias,(t,o)=>(i(),d(l,{cols:"12",sm:"12",key:t.id},{default:c(()=>[p("article",null,[a(q,{noticia:t},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(l,{md:"4",class:"anuncios text-center"})]),_:1}))}},P=x($,[["__scopeId","data-v-5d1b7f74"]]);export{P as default};
