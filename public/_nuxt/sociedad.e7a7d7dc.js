import{u as v,N as w}from"./Noticia.151cccbc.js";import{_ as x,L as y,K as r,s as c,r as g,H as k,O as F,P as b,Q as N,X as S,M as D,N as V,k as i,q as a,l as B,W as I,J as R,F as q,m as _,x as A,y as C}from"./entry.e99d1da4.js";import{k as u,l as L,n as d}from"./VRow.d76f78c0.js";const M=e=>(A("data-v-0d54709b"),e=e(),C(),e),P=M(()=>_("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades sociales ",-1)),$={__name:"sociedad",setup(e){const p=y(),{data:f}=v(async()=>{const n=g([]);let l=k();const s=F(l,"noticias"),t=await b(N(s,S("tipo","==","Sociedad")));for(const o of t.docs){const m=D(p,`5ETmTP49k/${o.id}.jpeg`),h=await V(m);n.value.push({url:h,id:o.id,...o.data()})}return{noticias:n}},"$e0fP7uCuFF");return(n,l)=>(i(),r(u,{class:"container-new pa-2"},{default:c(()=>[a(d,{cols:"12",md:"9"},{default:c(()=>[P,a(L,{class:"pb-4"}),a(u,null,{default:c(()=>{var s;return[(i(!0),B(q,null,I((s=R(f))==null?void 0:s.noticias,(t,o)=>(i(),r(d,{cols:"12",sm:"12",key:t.id},{default:c(()=>[_("article",null,[a(w,{noticia:t},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(d,{md:"4",class:"anuncios text-center"})]),_:1}))}},j=x($,[["__scopeId","data-v-0d54709b"]]);export{j as default};
