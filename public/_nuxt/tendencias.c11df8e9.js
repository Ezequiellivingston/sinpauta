import{_ as v,C as h,f as r,k as d,O as u,s as c,r as w,B as x,G as y,H as g,I as b,R as k,D as I,E as N,q as s,l as B,Q as D,N as F,F as S,m as p,x as R,y as q}from"./entry.aff0109e.js";import{u as z,N as A}from"./Noticia.7f1b1dca.js";const C=t=>(R("data-v-56f168b3"),t=t(),q(),t),E=C(()=>p("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las tendencias ",-1)),T={__name:"tendencias",setup(t){const f=h(),{data:m}=z(async()=>{const i=w([]);let _=x();const l=y(_,"noticias"),a=await g(b(l,k("tipo","==","Tendencias")));for(const e of a.docs){const o=I(f,`5ETmTP49k/${e.id}.jpeg`),n=await N(o);i.value.push({url:n,id:e.id,...e.data()})}return{noticias:i}},"$8357I0vVYz");return(i,_)=>{const l=r("v-divider"),a=r("v-col"),e=r("v-row");return d(),u(e,{class:"container-new"},{default:c(()=>[s(a,{cols:"12",md:"9"},{default:c(()=>[E,s(l,{class:"pb-4"}),s(e,null,{default:c(()=>{var o;return[(d(!0),B(S,null,D((o=F(m))==null?void 0:o.noticias,(n,V)=>(d(),u(a,{cols:"12",sm:"12",key:n.id},{default:c(()=>[p("article",null,[s(A,{noticia:n},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),s(a,{md:"4",class:"anuncios text-center"})]),_:1})}}},M=v(T,[["__scopeId","data-v-56f168b3"]]);export{M as default};
