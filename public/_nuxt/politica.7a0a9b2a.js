import{u as b,N as g}from"./Noticia.fe775c2c.js";import{_ as k,M as v,L as u,s as a,r as w,J as x,P as N,Q as S,R as D,Y as F,N as R,O as V,k as n,q as s,l as A,X as B,K as I,F as L,m as d,x as q,y as C}from"./entry.26c2b690.js";import{k as p,l as M,n as i}from"./VRow.7d849aad.js";const _=t=>(q("data-v-193b0d43"),t=t(),C(),t),P=_(()=>d("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades politicas ",-1)),$=_(()=>d("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-8444736822191189","data-ad-slot":"9395134204","data-ad-format":"auto","data-full-width-responsive":"true"},null,-1)),j={__name:"politica",setup(t){const f=v(),{data:m}=b(async()=>{const l=w([]);let r=x();const e=N(r,"noticias"),o=await S(D(e,F("tipo","==","Politica")));for(const c of o.docs){const h=R(f,`5ETmTP49k/${c.id}.jpeg`),y=await V(h);l.value.push({url:y,id:c.id,...c.data()})}return{noticias:l}},"$cLAnxkCSpj");return(l,r)=>(n(),u(p,{class:"container-new pa-2"},{default:a(()=>[s(i,{cols:"12",md:"8"},{default:a(()=>[P,s(M,{class:"pb-4"}),s(p,null,{default:a(()=>{var e;return[(n(!0),A(L,null,B((e=I(m))==null?void 0:e.noticias,(o,c)=>(n(),u(i,{cols:"12",sm:"12",key:o.id},{default:a(()=>[d("article",null,[s(g,{noticia:o},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),s(i,{cols:"4",md:"4",class:"anuncios text-center"},{default:a(()=>[$]),_:1})]),_:1}))}},J=k(j,[["__scopeId","data-v-193b0d43"]]);export{J as default};