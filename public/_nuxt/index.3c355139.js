import{H as y,M as v,T as x}from"./components.a667c238.js";import{u as b}from"./asyncData.be4d8b3a.js";import{N as D}from"./Noticia.15a92cb0.js";import{_ as S,x as k,c as _,b as e,w as s,F as f,s as A,r as $,A as F,B as N,C as B,D as M,E as T,y as V,z as E,o as p,M as H,J as I,d as L,K as P,a as w,p as R,e as C}from"./entry.eefbc3c3.js";import{k as h,l as m,n as U}from"./VRow.fd2aff4f.js";const g={};function j(i,d){const u={weekday:"short",day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:"short"},c=new Date().toLocaleDateString("en-US",u);let t="";for(const a of d)t=t+` 
        <item>
          <title>${a.titulo}</title>
          <link>https://www.sinpauta.com/${a.id}</link>
          <description>${a.cabecera}.</description>
          <pubDate>${a.fecha}</pubDate>
          <guid isPermaLink="false">67890</guid>
          <enclosure url="${encodeURIComponent(a.url)}" type="image/jpeg" />

        </item>`;let r=`<rss version="2.0">
    <channel>
      <title>SinPauta - Noticias de Actualidad</title>
      <link>https://www.sinpauta.com</link>
      <description>Las últimas noticias de actualidad de SinPauta.</description>
      <language>es</language>
      <pubDate>${c}</pubDate>
      <lastBuildDate>${c}</lastBuildDate>
      <docs>http://www.rssboard.org/rss-specification</docs>
      <generator>Mi Generador de Feeds</generator> ${t}  </channel>
      </rss>`;const o=g.join(__dirname,"../../public","rss.xml");try{g.writeFileSync(o,r,"utf-8"),console.log("Archivo escrito con éxito.")}catch(a){console.error("Error al escribir en el archivo:",a)}}const q=i=>(R("data-v-2802ca5e"),i=i(),C(),i),z=q(()=>w("h1",{class:"title",alt:"Últimas Actualizaciones: Mantente al Día con las Novedades"}," Últimas Actualizaciones: Mantente al Día con las Novedades ",-1)),G={__name:"index",setup(i){const d=k(),{data:u}=b(async()=>{const n=A([]);let c=$();const t=F(c,"noticias"),r=await N(B(t,T("fecha","desc"),M(10)));for(const o of r.docs){const a=V(d,`5ETmTP49k/${o.id}.jpeg`),l=await E(a);n.value.push({url:l,id:o.id,...o.data()})}return j("",n.value),{noticias:n}},"$PslAyef5YX");return(n,c)=>{const t=v,r=x,o=y;return p(),_(f,null,[e(h,{class:"container-new pa-2"},{default:s(()=>[e(m,{cols:"12",md:"10",class:""},{default:s(()=>[z,e(U,{class:"pb-4"}),e(h,null,{default:s(()=>{var a;return[(p(!0),_(f,null,H((a=I(u))==null?void 0:a.noticias,(l,J)=>(p(),P(m,{cols:"12",sm:"12",key:l.id},{default:s(()=>[w("article",null,[e(D,{noticia:l},null,8,["noticia"])])]),_:2},1024))),128))]}),_:1})]),_:1}),e(m,{md:"4",class:"anuncios text-center"})]),_:1}),e(o,null,{default:s(()=>[e(t,{charset:"UTF-8"}),e(t,{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e(t,{name:"description",content:"Sinpauta: Tu fuente confiable de noticias y actualidad. Mantente informado sobre los últimos eventos, noticias y temas de actualidad en todo el mundo."}),e(t,{name:"keywords",content:"noticias, actualidad, eventos, información, periódico, Sinpauta"}),e(t,{name:"author",content:"Equipo de Sinpauta"}),e(r,null,{default:s(()=>[L("Sinpauta - Noticias y Actualidad")]),_:1})]),_:1})],64)}}},Q=S(G,[["__scopeId","data-v-2802ca5e"]]);export{Q as default};
