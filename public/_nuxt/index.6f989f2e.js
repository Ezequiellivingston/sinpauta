import{u as at,_ as nt,N as it}from"./Noticia.fe775c2c.js";import{z as ot,e as st,A as q,B as O,q as e,c as U,I as lt,C,D as rt,F as j,E as ct,_ as dt,G as ut,H as mt,J as gt,r as Q,o as ht,l as A,K as i,L as V,s as p,M as pt,N as Y,O as Z,P as yt,Q as _t,R as ft,S as bt,T as vt,U as wt,V as kt,k as y,W as B,m as c,t as x,X as St,v as Ct,x as Vt,y as Bt}from"./entry.26c2b690.js";import{H as xt,T as Dt,M as Rt}from"./components.a08a3249.js";import{_ as Tt}from"./mp-logo.443f2129.js";import{m as z,u as G,a as It,b as et,c as Pt,d as Lt,e as $t,f as Mt,g as Nt,h as At,i as Ft,V as Qt,j as Ht,k as H,l as tt,n as F}from"./VRow.7d849aad.js";const Ut={props:{adClient:{type:String,default:void 0},adSlot:{type:String,default:null},adFormat:{type:String,default:"auto"},adLayout:{type:String,default:null},adLayoutKey:{type:String,default:null},adStyle:{type:Object,default(){return{display:"block"}}},adFullWidthResponsive:{type:Boolean,default:!1},pageUrl:{type:String,default:null},analyticsUacct:{type:String,default:void 0},analyticsDomainName:{type:String,default:void 0},includeQuery:{type:Boolean,default:void 0}},data(){return{show:!0,renderQueue:[],key:Math.random()}},computed:{options(){const t={...ot()["google-adsense"]||{}};return t.test&&(t.id="ca-google"),t},_includeQuery(){return this.includeQuery||typeof this.includeQuery>"u"&&this.options.includeQuery}},watch:{$route(t,g){if(this.$el&&!this.$el.isConnected||t.fullPath===g.fullPath)return;const a=Object.keys,r=t.query,d=g.query;let s=!1;t.path!==g.path?s=!0:this._includeQuery&&(s=a(r).length!==a(d).length||!a(r).every(f=>r[f]===d[f])),s&&this.updateAd()}},mounted(){this.showAd()},methods:{adRegion(){return"page-"+Math.random()},updateAd(){this.isServer||(this.show=!1,this.$nextTick(this.showAd))},showAd(){this.show=!0,setTimeout(()=>{if(!this.$el.innerHTML)try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(t){console.error(t)}},50)}},render(){return st("ins",{class:["adsbygoogle"],style:this.adStyle,"data-ad-client":this.adClient||this.options.id,"data-ad-slot":this.adSlot||null,"data-ad-format":this.adFormat,"data-ad-region":this.show?this.adRegion():null,"data-ad-layout":this.adLayout||null,"data-ad-layout-key":this.adLayoutKey||null,"data-page-url":this.pageUrl?this.pageUrl:null,"data-analytics-uacct":this.analyticsUacct||this.options.analyticsUacct||null,"data-analytics-domain-name":this.analyticsDomainName||this.options.analyticsDomainName||null,"data-adtest":this.options.test?"on":null,"data-adsbygoogle-status":this.show?null:"","data-full-width-responsive":this.adFullWidthResponsive||null,innerHTML:this.show?"":" ",key:Math.random()})}},Et=Ut,jt=""+globalThis.__publicAssetsURL("mercadopago.png");const qt=q({divider:[Number,String],...z()},"VBreadcrumbsDivider"),Ot=O()({name:"VBreadcrumbsDivider",props:qt(),setup(t,g){let{slots:a}=g;return G(()=>{var r;return e("li",{class:["v-breadcrumbs-divider",t.class],style:t.style},[((r=a==null?void 0:a.default)==null?void 0:r.call(a))??t.divider])}),{}}}),zt=q({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...z(),...It(),...et({tag:"li"})},"VBreadcrumbsItem"),Gt=O()({name:"VBreadcrumbsItem",props:zt(),setup(t,g){let{slots:a,attrs:r}=g;const d=Pt(t,r),s=U(()=>{var l;return t.active||((l=d.isActive)==null?void 0:l.value)}),f=U(()=>s.value?t.activeColor:t.color),{textColorClasses:n,textColorStyles:u}=Lt(f);return G(()=>e(t.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":s.value,"v-breadcrumbs-item--disabled":t.disabled,[`${t.activeClass}`]:s.value&&t.activeClass},n.value,t.class],style:[u.value,t.style],"aria-current":s.value?"page":void 0},{default:()=>{var l,m;return[d.isLink.value?e("a",{class:"v-breadcrumbs-item--link",href:d.href.value,"aria-current":s.value?"page":void 0,onClick:d.navigate},[((m=a.default)==null?void 0:m.call(a))??t.title]):((l=a.default)==null?void 0:l.call(a))??t.title]}})),{}}}),Kt=q({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:lt,items:{type:Array,default:()=>[]},...z(),...$t(),...Mt(),...et({tag:"ul"})},"VBreadcrumbs"),Wt=O()({name:"VBreadcrumbs",props:Kt(),setup(t,g){let{slots:a}=g;const{backgroundColorClasses:r,backgroundColorStyles:d}=Nt(C(t,"bgColor")),{densityClasses:s}=At(t),{roundedClasses:f}=Ft(t);rt({VBreadcrumbsDivider:{divider:C(t,"divider")},VBreadcrumbsItem:{activeClass:C(t,"activeClass"),activeColor:C(t,"activeColor"),color:C(t,"color"),disabled:C(t,"disabled")}});const n=U(()=>t.items.map(u=>typeof u=="string"?{item:{title:u},raw:u}:{item:u,raw:u}));return G(()=>{const u=!!(a.prepend||t.icon);return e(t.tag,{class:["v-breadcrumbs",r.value,s.value,f.value,t.class],style:[d.value,t.style]},{default:()=>{var l;return[u&&e("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[a.prepend?e(Ht,{key:"prepend-defaults",disabled:!t.icon,defaults:{VIcon:{icon:t.icon,start:!0}}},a.prepend):e(Qt,{key:"prepend-icon",start:!0,icon:t.icon},null)]),n.value.map((m,h,b)=>{let{item:S,raw:o}=m;return e(j,null,[e(Gt,ct({key:S.title,disabled:h>=b.length-1},S),{default:a.title?()=>{var _;return(_=a.title)==null?void 0:_.call(a,{item:o,index:h})}:void 0}),h<b.length-1&&e(Ot,null,{default:a.divider?()=>{var _;return(_=a.divider)==null?void 0:_.call(a,{item:o,index:h})}:void 0})])}),(l=a.default)==null?void 0:l.call(a)]}})}),{}}}),K=t=>(Vt("data-v-db2b3c6d"),t=t(),Bt(),t),Jt={class:"title mt-4 ma-2"},Xt={class:"subtitle mt-4 ma-2"},Yt={class:"pa-2 d-flex justify-space-between"},Zt={key:0,class:""},te={key:1,class:""},ee={key:1},ae={class:"ma-6"},ne={class:"mb-6"},ie=["innerHTML"],oe=K(()=>c("div",{class:"donacion"},[c("img",{src:Tt,alt:"donacion",class:"mp-logo-donacion"}),c("img",{src:jt,alt:"donacion",class:"donacion_qr"}),c("p",null," Somos un periódico sin fines de lucro, pero tienes la opción de colaborar para ayudarnos a cubrir nuestros gastos ")],-1)),se=K(()=>c("div",null,null,-1)),le=K(()=>c("div",{style:{height:"90vh"}},null,-1)),re=["content"],ce={__name:"index",setup(t){const g=ut();mt();const{params:a}=g,r=a.noticiasId,d=gt(),s=Q([]),f=Q();Q(!0),Q(!1);const{data:n}=at(async()=>{const l=pt(),m=Y(l,`5ETmTP49k/${r}.jpeg`),h=await Z(m),b=yt(d,"noticias"),S=await _t(ft(b,vt("fecha","desc"),bt(10)));for(const v of S.docs){const w=Y(l,`5ETmTP49k/${v.id}.jpeg`),k=await Z(w);s.value.push({url:k,id:v.id,...v.data()})}const o=wt(d,"noticias",r),_=await kt(o);if(_.exists())return f.value=_.data(),{noticia:f,noticias:s,url:h}},"$ROG1QwGyJa");ht(()=>{});const u=U(()=>{var b;const l={year:"numeric",month:"short",day:"numeric"},m=new Date((b=n.value)==null?void 0:b.noticia.fecha);m.setHours(m.getHours()+m.getTimezoneOffset()/60);const h=m.toLocaleDateString("es-ES",l);return typeof h!="Invalid Date"?h:""});return(l,m)=>{const h=nt,b=Et,S=Dt,o=Rt,_=xt;return y(),A(j,null,[i(n)?(y(),V(H,{key:0,"no-gutters":"",class:"noticias-container"},{default:p(()=>[e(F,{cols:"12",md:"9"},{default:p(()=>{var v,w,k,D,R,T,I,P,L,$,M,N,W;return[(v=i(n))!=null&&v.noticia.tipo?(y(),V(Wt,{key:0,class:"pb-0 pl-0",items:[(w=i(n))==null?void 0:w.noticia.tipo]},null,8,["items"])):B("",!0),c("h1",Jt,x((k=i(n))==null?void 0:k.noticia.titulo),1),c("p",Xt,x((D=i(n))==null?void 0:D.noticia.subtitulo),1),e(tt),c("div",Yt,[i(u)?(y(),A("p",Zt,x(i(u)),1)):B("",!0),(R=i(n))!=null&&R.noticia.autor?(y(),A("p",te,x((T=i(n))==null?void 0:T.noticia.autor),1)):B("",!0)]),(I=i(n))!=null&&I.url?(y(),A("figure",ee,[e(h,{src:(P=i(n))==null?void 0:P.url,"max-height":"300px",class:"datas-container__img mt-2 mb-2",alt:($=(L=i(n))==null?void 0:L.noticia)==null?void 0:$.imgDescription,lazy:!0,sizes:"sm:100vw md:50vw lg:400px",format:"webp"},null,8,["src","alt"])])):B("",!0),c("div",ae,[c("p",ne,x((M=i(n))==null?void 0:M.noticia.cabecera),1),c("div",{innerHTML:(N=i(n))==null?void 0:N.noticia.desarrollo},null,8,ie)]),e(tt),(W=i(n))!=null&&W.noticias?(y(),V(H,{key:2,class:"ma-2"},{default:p(()=>{var J;return[(y(!0),A(j,null,St((J=i(n))==null?void 0:J.noticias,(E,de)=>(y(),V(F,{cols:"12",sm:"12",key:`${E.id}-mas`},{default:p(()=>{var X;return[E.id!==((X=i(n))==null?void 0:X.noticia.id)?(y(),V(it,{key:0,noticia:E},null,8,["noticia"])):B("",!0),e(b,{adClient:"ca-pub-8444736822191189",adSlot:"9395134204"})]}),_:2},1024))),128))]}),_:1})):B("",!0)]}),_:1}),e(F,{class:"text-center"},{default:p(()=>[e(H,{style:{position:"fixed"}},{default:p(()=>[e(F,{cols:"12"},{default:p(()=>[oe]),_:1}),e(F,{cols:"12"},{default:p(()=>[se]),_:1})]),_:1})]),_:1})]),_:1})):(y(),V(H,{key:1},{default:p(()=>[le]),_:1})),e(_,null,{default:p(()=>{var v,w,k,D,R,T,I,P,L,$,M;return[e(S,null,{default:p(()=>{var N;return[Ct(x((N=i(n))==null?void 0:N.noticia.titulo),1)]}),_:1}),e(o,{name:"description",hid:"description",content:(v=i(n))==null?void 0:v.noticia.cabecera},null,8,["content"]),e(o,{property:"og:title",hid:"og:titl",content:(w=i(n))==null?void 0:w.noticia.titulo},null,8,["content"]),e(o,{property:"og:description",hid:"og:description",content:(k=i(n))==null?void 0:k.noticia.cabecera},null,8,["content"]),e(o,{property:"og:image",hid:"og:image",content:(D=i(n))==null?void 0:D.url},null,8,["content"]),e(o,{name:"twitter:card",hid:"twitter:card",content:"summary_large_image"}),e(o,{name:"twitter:site",hid:"twitter:site",content:"@sinpautaok"}),e(o,{name:"twitter:title",hid:"twitter:title",content:(R=i(n))==null?void 0:R.noticia.titulo},null,8,["content"]),e(o,{name:"twitter:description",hid:"twitter:description",content:(T=i(n))==null?void 0:T.noticia.cabecera},null,8,["content"]),e(o,{name:"twitter:image",hid:"twitter:image",content:(I=i(n))==null?void 0:I.url},null,8,["content"]),e(o,{name:"twitter:domain",hid:"twitter:domain",content:"sinpauta.com"}),c("meta",{property:"og:url",hid:"og:url",content:`https://www.sinpauta.com/${(P=i(n))==null?void 0:P.noticia.id}`},null,8,re),e(o,{property:"og:type",hid:"og:type",content:"website"}),e(o,{name:"googlebot",hid:"googlebot",content:"index, follow"}),e(o,{name:"robots",hid:"robots",content:"index, follow"}),e(o,{name:"distribution",hid:"distribution",content:"global"}),e(o,{name:"rating",hid:"rating",content:"general"}),e(o,{name:"language",hid:"language",content:"es_ES"}),e(o,{name:"news_keywords",hid:"news_keywords",content:(L=i(n))==null?void 0:L.noticia.titulo},null,8,["content"]),e(o,{property:"article:section",hid:"article:section",content:($=i(n))==null?void 0:$.noticia.tipo},null,8,["content"]),e(o,{property:"article:tag",hid:"article:tag",content:(M=i(n))==null?void 0:M.noticia.tipo},null,8,["content"])]}),_:1})],64)}}},ye=dt(ce,[["__scopeId","data-v-db2b3c6d"]]);export{ye as default};