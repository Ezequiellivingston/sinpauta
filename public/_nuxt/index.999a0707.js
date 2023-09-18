import{u as nt,_ as st,N as it}from"./Noticia.ebc2d1ea.js";import{H as at,T as ct,M as lt}from"./components.7d957653.js";import{_ as rt,z as dt,A as ut,B as _t,r as u,o as pt,c as mt,f as _,l as H,C as o,D as h,s as i,q as e,F as Q,E as ht,G as K,H as W,I as gt,J as ft,K as yt,L as wt,M as vt,N as bt,O as xt,k as c,P as g,m as s,t as f,Q as St,v as kt,x as Tt,y as Rt}from"./entry.19367979.js";import{_ as Dt}from"./mp-logo.d3988738.js";const It=""+globalThis.__publicAssetsURL("pause.svg"),Lt=""+globalThis.__publicAssetsURL("play.svg"),Et=""+globalThis.__publicAssetsURL("mercadopago.png");const y=N=>(Tt("data-v-2ee17df9"),N=N(),Rt(),N),$t={class:"title mt-4 ma-2"},Ct={class:"subtitle mt-4 ma-2"},Ht={class:"pa-2 d-flex justify-space-between"},Nt={key:0,class:""},Bt={key:1,class:""},Mt={key:1},Pt={class:"d-flex justify-end pa-2"},zt={class:"flex-column"},At=y(()=>s("p",null,"Podes Escuchar..",-1)),Ft=y(()=>s("img",{src:It,alt:"Pausar"},null,-1)),Vt=y(()=>s("img",{src:Lt,alt:"Reproducir"},null,-1)),qt={class:"ma-6"},Ut={class:"mb-6"},jt=["innerHTML"],Ot=y(()=>s("div",{class:"donacion"},[s("img",{src:Dt,alt:"donacion",class:"mp-logo-donacion"}),s("img",{src:Et,alt:"donacion",class:"donacion_qr"}),s("p",null," Somos un periódico sin fines de lucro, pero tienes la opción de colaborar para ayudarnos a cubrir nuestros gastos ")],-1)),Gt=y(()=>s("div",null,null,-1)),Jt=y(()=>s("div",{style:{height:"90vh"}},null,-1)),Qt=["content"],Kt={__name:"index",setup(N){const X=dt();ut();const{params:Y}=X,V=Y.noticiasId,q=_t(),U=u([]),P=u();u(!0),u(!1);const j=u(null),{data:t}=nt(async()=>{const l=ht(),a=K(l,`5ETmTP49k/${V}.jpeg`),p=await W(a),r=gt(q,"noticias"),A=await ft(yt(r,vt("fecha","desc"),wt(4)));for(const v of A.docs){const d=K(l,`5ETmTP49k/${v.id}.jpeg`),m=await W(d);U.value.push({url:m,id:v.id,...v.data()})}const B=bt(q,"noticias",V),w=await xt(B);if(w.exists())return P.value=w.data(),j.value=`${P.value.fecha}`,{dateSearch:j,noticia:P,noticias:U,url:p}},"$ROG1QwGyJa");pt(()=>{});const O=mt(()=>{var r;const l={year:"numeric",month:"short",day:"numeric"},a=new Date((r=t.value)==null?void 0:r.noticia.fecha);a.setHours(a.getHours()+a.getTimezoneOffset()/60);const p=a.toLocaleDateString("es-ES",l);return typeof p!="Invalid Date"?p:""}),z=u(!1);u(!0);const Z=()=>{window.speechSynthesis.cancel(),z.value=!1},tt=()=>{let l=document.getElementById("notice-desarrollo");if("speechSynthesis"in window){var a=new SpeechSynthesisUtterance((t==null?void 0:t.value.noticia.titulo)+" "+(t==null?void 0:t.value.noticia.cabecera)+" "+l.textContent);console.log(window.speechSynthesis),!window.speechSynthesis.pending&&!window.speechSynthesis.speaking?(window.speechSynthesis.speak(a),z.value=!0):window.speechSynthesis.speaking&&!window.speechSynthesis.paused?window.speechSynthesis.pause():window.speechSynthesis.resume()}else console.error("La API de síntesis de voz no es compatible con este navegador.")};return(l,a)=>{const p=_("v-breadcrumbs"),r=_("v-divider"),A=st,B=_("v-icon"),w=_("v-btn"),v=_("adsbygoogle"),d=_("v-col"),m=_("v-row"),et=ct,n=lt,ot=at;return c(),H(Q,null,[o(t)?(c(),h(m,{key:0,"no-gutters":"",class:"noticias-container"},{default:i(()=>[e(d,{cols:"12",md:"9"},{default:i(()=>{var b,x,S,k,T,R,D,I,L,E,$,C,G;return[(b=o(t))!=null&&b.noticia.tipo?(c(),h(p,{key:0,class:"pb-0 pl-0",items:[(x=o(t))==null?void 0:x.noticia.tipo]},null,8,["items"])):g("",!0),s("h1",$t,f((S=o(t))==null?void 0:S.noticia.titulo),1),s("p",Ct,f((k=o(t))==null?void 0:k.noticia.subtitulo),1),e(r),s("div",Ht,[o(O)?(c(),H("p",Nt,f(o(O)),1)):g("",!0),(T=o(t))!=null&&T.noticia.autor?(c(),H("p",Bt,f((R=o(t))==null?void 0:R.noticia.autor),1)):g("",!0)]),(D=o(t))!=null&&D.url?(c(),H("figure",Mt,[e(A,{src:(I=o(t))==null?void 0:I.url,"max-height":"300px",class:"datas-container__img mt-2 mb-2",alt:(E=(L=o(t))==null?void 0:L.noticia)==null?void 0:E.imgDescription,quality:60,format:"webp",loading:"lazy"},null,8,["src","alt"])])):g("",!0),s("div",Pt,[s("div",zt,[At,e(w,{onClick:a[0]||(a[0]=M=>Z()),"aria-label":"Pausar"},{default:i(()=>[e(B,null,{default:i(()=>[Ft]),_:1})]),_:1}),e(w,{onClick:a[1]||(a[1]=M=>tt()),color:z.value?"red":"","aria-label":"Reproducir"},{default:i(()=>[e(B,null,{default:i(()=>[Vt]),_:1})]),_:1},8,["color"])])]),s("div",qt,[s("p",Ut,f(($=o(t))==null?void 0:$.noticia.cabecera),1),s("div",{innerHTML:(C=o(t))==null?void 0:C.noticia.desarrollo,id:"notice-desarrollo"},null,8,jt)]),e(r),(G=o(t))!=null&&G.noticias?(c(),h(m,{key:2,class:"ma-2"},{default:i(()=>{var M;return[(c(!0),H(Q,null,St((M=o(t))==null?void 0:M.noticias,(F,Wt)=>(c(),h(d,{cols:"12",sm:"12",key:`${F.id}-mas`},{default:i(()=>{var J;return[F.id!==((J=o(t))==null?void 0:J.noticia.id)?(c(),h(it,{key:0,noticia:F},null,8,["noticia"])):g("",!0),e(v,{adClient:"ca-pub-8444736822191189",adSlot:"9395134204"})]}),_:2},1024))),128))]}),_:1})):g("",!0)]}),_:1}),e(d,{class:"text-center"},{default:i(()=>[e(m,{style:{position:"fixed"}},{default:i(()=>[e(d,{cols:"12"},{default:i(()=>[Ot]),_:1}),e(d,{cols:"12"},{default:i(()=>[Gt]),_:1})]),_:1})]),_:1})]),_:1})):(c(),h(m,{key:1},{default:i(()=>[Jt]),_:1})),e(ot,null,{default:i(()=>{var b,x,S,k,T,R,D,I,L,E,$;return[e(et,null,{default:i(()=>{var C;return[kt(f((C=o(t))==null?void 0:C.noticia.titulo),1)]}),_:1}),e(n,{name:"description",hid:"description",content:(b=o(t))==null?void 0:b.noticia.cabecera},null,8,["content"]),e(n,{property:"og:title",hid:"og:titl",content:(x=o(t))==null?void 0:x.noticia.titulo},null,8,["content"]),e(n,{property:"og:description",hid:"og:description",content:(S=o(t))==null?void 0:S.noticia.cabecera},null,8,["content"]),e(n,{property:"og:image",hid:"og:image",content:(k=o(t))==null?void 0:k.url},null,8,["content"]),e(n,{name:"twitter:card",hid:"twitter:card",content:"summary_large_image"}),e(n,{name:"twitter:site",hid:"twitter:site",content:"@sinpautaok"}),e(n,{name:"twitter:title",hid:"twitter:title",content:(T=o(t))==null?void 0:T.noticia.titulo},null,8,["content"]),e(n,{name:"twitter:description",hid:"twitter:description",content:(R=o(t))==null?void 0:R.noticia.cabecera},null,8,["content"]),e(n,{name:"twitter:image",hid:"twitter:image",content:(D=o(t))==null?void 0:D.url},null,8,["content"]),e(n,{name:"twitter:domain",hid:"twitter:domain",content:"sinpauta.com"}),s("meta",{property:"og:url",hid:"og:url",content:`https://www.sinpauta.com/${(I=o(t))==null?void 0:I.noticia.id}`},null,8,Qt),e(n,{property:"og:type",hid:"og:type",content:"website"}),e(n,{name:"googlebot",hid:"googlebot",content:"index, follow"}),e(n,{name:"robots",hid:"robots",content:"index, follow"}),e(n,{name:"distribution",hid:"distribution",content:"global"}),e(n,{name:"rating",hid:"rating",content:"general"}),e(n,{name:"language",hid:"language",content:"es_ES"}),e(n,{name:"news_keywords",hid:"news_keywords",content:(L=o(t))==null?void 0:L.noticia.titulo},null,8,["content"]),e(n,{property:"article:section",hid:"article:section",content:(E=o(t))==null?void 0:E.noticia.tipo},null,8,["content"]),e(n,{property:"article:tag",hid:"article:tag",content:($=o(t))==null?void 0:$.noticia.tipo},null,8,["content"])]}),_:1})],64)}}},ee=rt(Kt,[["__scopeId","data-v-2ee17df9"]]);export{ee as default};
