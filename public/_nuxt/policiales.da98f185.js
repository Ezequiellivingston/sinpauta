import{u as v,N as w}from"./Noticia.57c5aae5.js";import{_ as x,K as y,V as d,s as c,r as g,J as k,N as F,O as N,P as V,Y as D,L as I,M as S,k as i,q as a,l as A,X as B,U as R,F as b,m as _,x as q,y as L}from"./entry.e1df1b51.js";import{k as u,n as M,l}from"./VRow.91da9ef3.js";const P=e=>(q("data-v-464c713c"),e=e(),L(),e),$=P(()=>_("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al día con las novedades policiales ",-1)),z={__name:"policiales",setup(e){const p=y(),{data:m}=v(async()=>{const n=g([]);let r=k();const s=F(r,"noticias"),t=await N(V(s,D("tipo","==","Policial")));for(const o of t.docs){const f=I(p,`5ETmTP49k/${o.id}.jpeg`),h=await S(f);n.value.push({url:h,id:o.id,...o.data()})}return{noticias:n}},"$4QQAYWIcF8");return(n,r)=>(i(),d(u,{class:"container-new pa-2"},{default:c(()=>[a(l,{cols:"12",md:"9"},{default:c(()=>[$,a(M,{class:"pb-4"}),a(u,null,{default:c(()=>{var s;return[(i(!0),A(b,null,B((s=R(m))==null?void 0:s.noticias,(t,o)=>(i(),d(l,{cols:"12",sm:"12",key:t.id},{default:c(()=>[_("article",null,[a(w,{noticia:t},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),a(l,{md:"4",class:"anuncios text-center"})]),_:1}))}},T=x(z,[["__scopeId","data-v-464c713c"]]);export{T as default};
