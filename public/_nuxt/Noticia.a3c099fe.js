import{r as $,B,Y as Se,Z as de,$ as G,u as ie,J as qe,a0 as Fe,a1 as He,A as I,a2 as Ge,a3 as we,e as L,h as fe,a4 as Ue,a5 as te,p as Je,a6 as ke,a7 as ve,a8 as Ke,a9 as Xe,c as p,d as Ye,j as Ze,o as Qe,z,q as c,D as se,aa as re,ab as Ce,ac as T,ad as et,ae as J,af as xe,F as ae,ag as ne,ah as Ie,I as U,ai as K,aj as X,ak as tt,al as at,C as nt,am as me,an as it,ao as st,_ as rt,k as j,K as ge,s as E,m as A,t as O,l as ee,V as q,v as ot}from"./entry.6c37b65d.js";import{m as V,n as lt,o as ct,u as M,e as Pe,f as ze,p as Ve,b as oe,q as le,r as Ae,h as Be,i as $e,s as De,V as N,t as Re,v as ut,w as dt,x as ft,y as vt,z as mt,a as gt,R as ht,A as yt,B as bt,C as _t,c as pt,j as F,d as St,l as he,k as wt}from"./VRow.1358a92d.js";const kt=()=>null;function ma(...e){const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);let[a,n,r={}]=e;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof n!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");r.server=r.server??!0,r.default=r.default??kt,r.lazy=r.lazy??!1,r.immediate=r.immediate??!0;const s=ie(),i=()=>s.isHydrating?s.payload.data[a]:s.static.data[a],o=()=>i()!==void 0;(!s._asyncData[a]||!r.immediate)&&(s._asyncData[a]={data:$(i()??r.default()),pending:$(!o()),error:B(s.payload._errors,a),status:$("idle")});const l={...s._asyncData[a]};l.refresh=l.execute=(v={})=>{if(s._asyncDataPromises[a]){if(v.dedupe===!1)return s._asyncDataPromises[a];s._asyncDataPromises[a].cancelled=!0}if((v._initial||s.isHydrating&&v._initial!==!1)&&o())return i();l.pending.value=!0,l.status.value="pending";const d=new Promise((h,b)=>{try{h(n(s))}catch(g){b(g)}}).then(h=>{if(d.cancelled)return s._asyncDataPromises[a];let b=h;r.transform&&(b=r.transform(h)),r.pick&&(b=Ct(b,r.pick)),l.data.value=b,l.error.value=null,l.status.value="success"}).catch(h=>{if(d.cancelled)return s._asyncDataPromises[a];l.error.value=h,l.data.value=qe(r.default()),l.status.value="error"}).finally(()=>{d.cancelled||(l.pending.value=!1,s.payload.data[a]=l.data.value,l.error.value&&(s.payload._errors[a]=Fe(l.error.value)),delete s._asyncDataPromises[a])});return s._asyncDataPromises[a]=d,s._asyncDataPromises[a]};const u=()=>l.refresh({_initial:!0}),m=r.server!==!1&&s.payload.serverRendered;{const v=He();if(v&&!v._nuxtOnBeforeMountCbs){v._nuxtOnBeforeMountCbs=[];const h=v._nuxtOnBeforeMountCbs;v&&(Se(()=>{h.forEach(b=>{b()}),h.splice(0,h.length)}),de(()=>h.splice(0,h.length)))}m&&s.isHydrating&&o()?(l.pending.value=!1,l.status.value=l.error.value?"error":"success"):v&&(s.payload.serverRendered&&s.isHydrating||r.lazy)&&r.immediate?v._nuxtOnBeforeMountCbs.push(u):r.immediate&&u(),r.watch&&G(r.watch,()=>l.refresh());const d=s.hook("app:data:refresh",h=>{if(!h||h.includes(a))return l.refresh()});v&&de(d)}const f=Promise.resolve(s._asyncDataPromises[a]).then(()=>l);return Object.assign(f,l),f}function Ct(e,t){const a={};for(const n of t)a[n]=e[n];return a}function xt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return I()({name:a??Ge(we(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...V()},setup(n,r){let{slots:s}=r;return()=>{var i;return L(n.tag,{class:[e,n.class],style:n.style},(i=s.default)==null?void 0:i.call(s))}}})}async function It(e,t){return await Pt(t).catch(n=>(console.error("Failed to get image meta for "+t,n+""),{width:0,height:0,ratio:0}))}async function Pt(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,a)=>{const n=new Image;n.onload=()=>{const r={width:n.width,height:n.height,ratio:n.width/n.height};t(r)},n.onerror=r=>a(r),n.src=e})}function ye(e){return t=>t?e[t]||t:e.missingValue}function zt({formatter:e,keyMap:t,joinWith:a="/",valueMap:n}={}){e||(e=(s,i)=>`${s}=${i}`),t&&typeof t!="function"&&(t=ye(t));const r=n||{};return Object.keys(r).forEach(s=>{typeof r[s]!="function"&&(r[s]=ye(r[s]))}),(s={})=>Object.entries(s).filter(([o,l])=>typeof l<"u").map(([o,l])=>{const u=r[o];return typeof u=="function"&&(l=u(s[o])),o=typeof t=="function"?t(o):o,e(o,l)}).join(a)}function x(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function Vt(e){const t={options:e},a=(r,s={})=>Te(t,r,s),n=(r,s={},i={})=>a(r,{...i,modifiers:ke(s,i.modifiers||{})}).url;for(const r in e.presets)n[r]=(s,i,o)=>n(s,i,{...e.presets[r],...o});return n.options=e,n.getImage=a,n.getMeta=(r,s)=>At(t,r,s),n.getSizes=(r,s)=>Dt(t,r,s),t.$img=n,n}async function At(e,t,a){const n=Te(e,t,{...a});return typeof n.getMeta=="function"?await n.getMeta():await It(e,n.url)}function Te(e,t,a){var u,m;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:n,defaults:r}=Bt(e,a.provider||e.options.provider),s=$t(e,a.preset);if(t=fe(t)?t:Ue(t),!n.supportsAlias)for(const f in e.options.alias)t.startsWith(f)&&(t=te(e.options.alias[f],t.substr(f.length)));if(n.validateDomains&&fe(t)){const f=Je(t).host;if(!e.options.domains.find(v=>v===f))return{url:t}}const i=ke(a,s,r);i.modifiers={...i.modifiers};const o=i.modifiers.format;(u=i.modifiers)!=null&&u.width&&(i.modifiers.width=x(i.modifiers.width)),(m=i.modifiers)!=null&&m.height&&(i.modifiers.height=x(i.modifiers.height));const l=n.getImage(t,i,e);return l.format=l.format||o||"",l}function Bt(e,t){const a=e.options.providers[t];if(!a)throw new Error("Unknown provider: "+t);return a}function $t(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function Dt(e,t,a){var u,m;const n=x((u=a.modifiers)==null?void 0:u.width),r=x((m=a.modifiers)==null?void 0:m.height),s=n&&r?r/n:0,i=[],o={};if(typeof a.sizes=="string")for(const f of a.sizes.split(/[\s,]+/).filter(v=>v)){const v=f.split(":");v.length===2&&(o[v[0].trim()]=v[1].trim())}else Object.assign(o,a.sizes);for(const f in o){const v=e.options.screens&&e.options.screens[f]||parseInt(f);let d=String(o[f]);const h=d.endsWith("vw");if(!h&&/^\d+$/.test(d)&&(d=d+"px"),!h&&!d.endsWith("px"))continue;let b=parseInt(d);if(!v||!b)continue;h&&(b=Math.round(b/100*v));const g=s?Math.round(b*s):r;i.push({width:b,size:d,screenMaxWidth:v,media:`(max-width: ${v}px)`,src:e.$img(t,{...a.modifiers,width:b,height:g},a)})}i.sort((f,v)=>f.screenMaxWidth-v.screenMaxWidth);const l=i[i.length-1];return l&&(l.media=""),{sizes:i.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "),srcset:i.map(f=>`${f.src} ${f.width}w`).join(", "),src:l==null?void 0:l.src}}const Rt=zt({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>ve(e)+"_"+ve(t)}),Tt=(e,{modifiers:t={},baseURL:a}={},n)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const r=Rt(t)||"_";return a||(a=te(n.options.nuxt.baseURL,"/_ipx")),{url:te(a,r,Ke(e))}},jt=!0,Et=!0,Ot=Object.freeze(Object.defineProperty({__proto__:null,getImage:Tt,supportsAlias:Et,validateDomains:jt},Symbol.toStringTag,{value:"Module"})),je={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{thumbnail:{width:100,height:100},medium:{width:300,height:300},large:{width:800,height:600},webp:{format:"webp"}},provider:"ipx",domains:[],alias:{}};je.providers={ipx:{provider:Ot,defaults:void 0}};const Nt=()=>{const e=Xe(),t=ie();return t.$img||t._img||(t._img=Vt({...je,nuxt:{baseURL:e.app.baseURL}}))},Lt={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},Mt=e=>{const t=p(()=>({provider:e.provider,preset:e.preset})),a=p(()=>({width:x(e.width),height:x(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),n=p(()=>({...e.modifiers,width:x(e.width),height:x(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:t,attrs:a,modifiers:n}},Wt={...Lt,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},qt=Ye({name:"NuxtImg",props:Wt,emits:["load","error"],setup:(e,t)=>{const a=Nt(),n=Mt(e),r=$(!1),s=p(()=>a.getSizes(e.src,{...n.options.value,sizes:e.sizes,modifiers:{...n.modifiers.value,width:x(e.width),height:x(e.height)}})),i=p(()=>{const d={...n.attrs.value,"data-nuxt-img":""};return e.sizes&&(d.sizes=s.value.sizes,d.srcset=s.value.srcset),d}),o=p(()=>{let d=e.placeholder;if(d===""&&(d=!0),!d||r.value)return!1;if(typeof d=="string")return d;const h=Array.isArray(d)?d:typeof d=="number"?[d,d]:[10,10];return a(e.src,{...n.modifiers.value,width:h[0],height:h[1],quality:h[2]||50},n.options.value)}),l=p(()=>e.sizes?s.value.src:a(e.src,n.modifiers.value,n.options.value)),u=p(()=>o.value?o.value:l.value);if(e.preload){const d=Object.values(s.value).every(h=>h);Ze({link:[{rel:"preload",as:"image",...d?{href:s.value.src,imagesizes:s.value.sizes,imagesrcset:s.value.srcset}:{href:u.value}}]})}const m=$(),v=ie().isHydrating;return Qe(()=>{if(o.value){const d=new Image;d.src=l.value,d.onload=h=>{m.value&&(m.value.src=l.value),r.value=!0,t.emit("load",h)};return}m.value&&(m.value.complete&&v&&(m.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),m.value.onload=d=>{t.emit("load",d)},m.value.onerror=d=>{t.emit("error",d)})}),()=>L("img",{ref:m,key:u.value,src:u.value,...i.value,...t.attrs})}});function Ft(e){return{aspectStyles:p(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const Ee=z({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...V(),...lt()},"VResponsive"),be=I()({name:"VResponsive",props:Ee(),setup(e,t){let{slots:a}=t;const{aspectStyles:n}=Ft(e),{dimensionStyles:r}=ct(e);return M(()=>{var s;return c("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[r.value,e.style]},[c("div",{class:"v-responsive__sizer",style:n.value},null),(s=a.additional)==null?void 0:s.call(a),a.default&&c("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}}),Ht=z({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),H=(e,t)=>{let{slots:a}=t;const{transition:n,disabled:r,...s}=e,{component:i=re,...o}=typeof n=="object"?n:{};return L(i,se(typeof n=="string"?{name:r?"":n}:o,s,{disabled:r}),a)};function Gt(e,t){if(!Ce)return;const a=t.modifiers||{},n=t.value,{handler:r,options:s}=typeof n=="object"?n:{handler:n,options:{}},i=new IntersectionObserver(function(){var f;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const u=(f=e._observe)==null?void 0:f[t.instance.$.uid];if(!u)return;const m=o.some(v=>v.isIntersecting);r&&(!a.quiet||u.init)&&(!a.once||m||u.init)&&r(m,o,l),m&&a.once?Oe(e,t):u.init=!0},s);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function Oe(e,t){var n;const a=(n=e._observe)==null?void 0:n[t.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const Ut={mounted:Gt,unmounted:Oe},Jt=Ut,Kt=z({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...Ee(),...V(),...Ht()},"VImg"),Xt=I()({name:"VImg",directives:{intersect:Jt},props:Kt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:a,slots:n}=t;const r=T(""),s=$(),i=T(e.eager?"loading":"idle"),o=T(),l=T(),u=p(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=p(()=>u.value.aspect||o.value/l.value||0);G(()=>e.src,()=>{f(i.value!=="idle")}),G(m,(y,_)=>{!y&&_&&s.value&&g(s.value)}),Se(()=>f());function f(y){if(!(e.eager&&y)&&!(Ce&&!y&&!e.eager)){if(i.value="loading",u.value.lazySrc){const _=new Image;_.src=u.value.lazySrc,g(_,null)}u.value.src&&et(()=>{var _,C;if(a("loadstart",((_=s.value)==null?void 0:_.currentSrc)||u.value.src),(C=s.value)!=null&&C.complete){if(s.value.naturalWidth||d(),i.value==="error")return;m.value||g(s.value,null),v()}else m.value||g(s.value),h()})}}function v(){var y;h(),i.value="loaded",a("load",((y=s.value)==null?void 0:y.currentSrc)||u.value.src)}function d(){var y;i.value="error",a("error",((y=s.value)==null?void 0:y.currentSrc)||u.value.src)}function h(){const y=s.value;y&&(r.value=y.currentSrc||y.src)}let b=-1;function g(y){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const C=()=>{clearTimeout(b);const{naturalHeight:D,naturalWidth:R}=y;D||R?(o.value=R,l.value=D):!y.complete&&i.value==="loading"&&_!=null?b=window.setTimeout(C,_):(y.currentSrc.endsWith(".svg")||y.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,l.value=1)};C()}const k=p(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),Y=()=>{var C;if(!u.value.src||i.value==="idle")return null;const y=c("img",{class:["v-img__img",k.value],src:u.value.src,srcset:u.value.srcset,alt:e.alt,sizes:e.sizes,ref:s,onLoad:v,onError:d},null),_=(C=n.sources)==null?void 0:C.call(n);return c(H,{transition:e.transition,appear:!0},{default:()=>[J(_?c("picture",{class:"v-img__picture"},[_,y]):y,[[Ie,i.value==="loaded"]])]})},P=()=>c(H,{transition:e.transition},{default:()=>[u.value.lazySrc&&i.value!=="loaded"&&c("img",{class:["v-img__img","v-img__img--preload",k.value],src:u.value.lazySrc,alt:e.alt},null)]}),Z=()=>n.placeholder?c(H,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!n.error)&&c("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,W=()=>n.error?c(H,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&c("div",{class:"v-img__error"},[n.error()])]}):null,Q=()=>e.gradient?c("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,S=T(!1);{const y=G(m,_=>{_&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{S.value=!0})}),y())})}return M(()=>{const[y]=be.filterProps(e);return J(c(be,se({class:["v-img",{"v-img--booting":!S.value},e.class],style:[{width:ne(e.width==="auto"?o.value:e.width)},e.style]},y,{aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>c(ae,null,[c(Y,null,null),c(P,null,null),c(Q,null,null),c(Z,null,null),c(W,null,null)]),default:n.default}),[[xe("intersect"),{handler:f,options:e.options},null,{once:!0}]])}),{currentSrc:r,image:s,state:i,naturalWidth:o,naturalHeight:l}}}),Yt=z({start:Boolean,end:Boolean,icon:U,image:String,...V(),...Pe(),...ze(),...Ve(),...oe(),...K(),...le({variant:"flat"})},"VAvatar"),_e=I()({name:"VAvatar",props:Yt(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=X(e),{colorClasses:r,colorStyles:s,variantClasses:i}=Ae(e),{densityClasses:o}=Be(e),{roundedClasses:l}=$e(e),{sizeClasses:u,sizeStyles:m}=De(e);return M(()=>c(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,r.value,o.value,l.value,u.value,i.value,e.class],style:[s.value,m.value,e.style]},{default:()=>{var f;return[e.image?c(Xt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?c(N,{key:"icon",icon:e.icon},null):(f=a.default)==null?void 0:f.call(a),Re(!1,"v-avatar")]}})),{}}}),Zt=xt("v-card-text");const Qt=z({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function w(e,t,a){return I()({name:e,props:Qt({mode:a,origin:t}),setup(n,r){let{slots:s}=r;const i={onBeforeEnter(o){n.origin&&(o.style.transformOrigin=n.origin)},onLeave(o){if(n.leaveAbsolute){const{offsetTop:l,offsetLeft:u,offsetWidth:m,offsetHeight:f}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${l}px`,o.style.left=`${u}px`,o.style.width=`${m}px`,o.style.height=`${f}px`}n.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(n.leaveAbsolute&&(o!=null&&o._transitionInitialStyles)){const{position:l,top:u,left:m,width:f,height:v}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=l||"",o.style.top=u||"",o.style.left=m||"",o.style.width=f||"",o.style.height=v||""}}};return()=>{const o=n.group?tt:re;return L(o,{name:n.disabled?"":e,css:!n.disabled,...n.group?void 0:{mode:n.mode},...n.disabled?{}:i},s.default)}}})}function Ne(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return I()({name:e,props:{mode:{type:String,default:a},disabled:Boolean},setup(n,r){let{slots:s}=r;return()=>L(re,{name:n.disabled?"":e,css:!n.disabled,...n.disabled?{}:t},s.default)}})}function Le(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const a=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",n=we(`offset-${a}`);return{onBeforeEnter(i){i._parent=i.parentNode,i._initialStyle={transition:i.style.transition,overflow:i.style.overflow,[a]:i.style[a]}},onEnter(i){const o=i._initialStyle;i.style.setProperty("transition","none","important"),i.style.overflow="hidden";const l=`${i[n]}px`;i.style[a]="0",i.offsetHeight,i.style.transition=o.transition,e&&i._parent&&i._parent.classList.add(e),requestAnimationFrame(()=>{i.style[a]=l})},onAfterEnter:s,onEnterCancelled:s,onLeave(i){i._initialStyle={transition:"",overflow:i.style.overflow,[a]:i.style[a]},i.style.overflow="hidden",i.style[a]=`${i[n]}px`,i.offsetHeight,requestAnimationFrame(()=>i.style[a]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(i){e&&i._parent&&i._parent.classList.remove(e),s(i)}function s(i){const o=i._initialStyle[a];i.style.overflow=i._initialStyle.overflow,o!=null&&(i.style[a]=o),delete i._initialStyle}}w("fab-transition","center center","out-in");w("dialog-bottom-transition");w("dialog-top-transition");w("fade-transition");w("scale-transition");w("scroll-x-transition");w("scroll-x-reverse-transition");w("scroll-y-transition");w("scroll-y-reverse-transition");w("slide-x-transition");w("slide-x-reverse-transition");w("slide-y-transition");w("slide-y-reverse-transition");Ne("expand-transition",Le());const ea=Ne("expand-x-transition",Le("",!0));const Me=Symbol.for("vuetify:v-chip-group"),ta=z({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:at},...V(),...ut({selectedClass:"v-chip--selected"}),...oe(),...K(),...le({variant:"tonal"})},"VChipGroup");I()({name:"VChipGroup",props:ta(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{themeClasses:n}=X(e),{isSelected:r,select:s,next:i,prev:o,selected:l}=dt(e,Me);return nt({VChip:{color:B(e,"color"),disabled:B(e,"disabled"),filter:B(e,"filter"),variant:B(e,"variant")}}),M(()=>c(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},n.value,e.class],style:e.style},{default:()=>{var u;return[(u=a.default)==null?void 0:u.call(a,{isSelected:r,select:s,next:i,prev:o,selected:l.value})]}})),{}}});const aa=z({activeClass:String,appendAvatar:String,appendIcon:U,closable:Boolean,closeIcon:{type:U,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:U,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:me(),onClickOnce:me(),...ft(),...V(),...Pe(),...vt(),...mt(),...ze(),...gt(),...Ve(),...oe({tag:"span"}),...K(),...le({variant:"tonal"})},"VChip"),na=I()({name:"VChip",directives:{Ripple:ht},props:aa(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,t){let{attrs:a,emit:n,slots:r}=t;const{t:s}=it(),{borderClasses:i}=yt(e),{colorClasses:o,colorStyles:l,variantClasses:u}=Ae(e),{densityClasses:m}=Be(e),{elevationClasses:f}=bt(e),{roundedClasses:v}=$e(e),{sizeClasses:d}=De(e),{themeClasses:h}=X(e),b=st(e,"modelValue"),g=_t(e,Me,!1),k=pt(e,a),Y=p(()=>e.link!==!1&&k.isLink.value),P=p(()=>!e.disabled&&e.link!==!1&&(!!g||e.link||k.isClickable.value)),Z=p(()=>({"aria-label":s(e.closeLabel),onClick(S){S.stopPropagation(),b.value=!1,n("click:close",S)}}));function W(S){var y;n("click",S),P.value&&((y=k.navigate)==null||y.call(k,S),g==null||g.toggle())}function Q(S){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),W(S))}return()=>{const S=k.isLink.value?"a":e.tag,y=!!(e.appendIcon||e.appendAvatar),_=!!(y||r.append),C=!!(r.close||e.closable),D=!!(r.filter||e.filter)&&g,R=!!(e.prependIcon||e.prependAvatar),We=!!(R||r.prepend),ce=!g||g.isSelected.value;return b.value&&J(c(S,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":P.value,"v-chip--filter":D,"v-chip--pill":e.pill},h.value,i.value,ce?o.value:void 0,m.value,f.value,v.value,d.value,u.value,g==null?void 0:g.selectedClass.value,e.class],style:[ce?l.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:k.href.value,tabindex:P.value?0:void 0,onClick:W,onKeydown:P.value&&!Y.value&&Q},{default:()=>{var ue;return[Re(P.value,"v-chip"),D&&c(ea,{key:"filter"},{default:()=>[J(c("div",{class:"v-chip__filter"},[r.filter?c(F,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},r.filter):c(N,{key:"filter-icon",icon:e.filterIcon},null)]),[[Ie,g.isSelected.value]])]}),We&&c("div",{key:"prepend",class:"v-chip__prepend"},[r.prepend?c(F,{key:"prepend-defaults",disabled:!R,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},r.prepend):c(ae,null,[e.prependIcon&&c(N,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&c(_e,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),c("div",{class:"v-chip__content"},[((ue=r.default)==null?void 0:ue.call(r,{isSelected:g==null?void 0:g.isSelected.value,selectedClass:g==null?void 0:g.selectedClass.value,select:g==null?void 0:g.select,toggle:g==null?void 0:g.toggle,value:g==null?void 0:g.value.value,disabled:e.disabled}))??e.text]),_&&c("div",{key:"append",class:"v-chip__append"},[r.append?c(F,{key:"append-defaults",disabled:!y,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},r.append):c(ae,null,[e.appendIcon&&c(N,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&c(_e,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),C&&c("div",se({key:"close",class:"v-chip__close"},Z.value),[r.close?c(F,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},r.close):c(N,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[xe("ripple"),P.value&&e.ripple,null]])}}});const ia=z({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...V(),...K()},"VDivider"),pe=I()({name:"VDivider",props:ia(),setup(e,t){let{attrs:a}=t;const{themeClasses:n}=X(e),{textColorClasses:r,textColorStyles:s}=St(B(e,"color")),i=p(()=>{const o={};return e.length&&(o[e.vertical?"maxHeight":"maxWidth"]=ne(e.length)),e.thickness&&(o[e.vertical?"borderRightWidth":"borderTopWidth"]=ne(e.thickness)),o});return M(()=>c("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,r.value,e.class],style:[i.value,s.value,e.style],"aria-orientation":!a.role||a.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${a.role||"separator"}`},null)),{}}}),sa=["href"],ra={key:0},oa={key:1,class:"text-end"},la={class:"d-flex justify-space-between align-center"},ca={key:1},ua=["href"],da={__name:"Noticia",props:{noticia:Object},setup(e){return(t,a)=>{const n=qt;return j(),ge(wt,null,{default:E(()=>[c(he,{cols:"12",md:"6",class:"pb-0 pt-0"},{default:E(()=>[c(Zt,{class:"noticia_desarrollo d-flex flex-column justify-space-between"},{default:E(()=>{var r,s,i,o,l,u,m,f,v;return[A("div",null,[A("a",{href:`/${(r=e.noticia)==null?void 0:r.id}`},[A("h2",null,O((s=e.noticia)==null?void 0:s.titulo),1)],8,sa),(i=e.noticia)!=null&&i.cabecera?(j(),ee("p",ra,O((o=e.noticia)==null?void 0:o.cabecera.substring(0,100))+"... ",1)):q("",!0),c(pe,{class:"mt-2 mb-2"}),(l=e.noticia)!=null&&l.autor?(j(),ee("p",oa,O((u=e.noticia)==null?void 0:u.autor),1)):q("",!0)]),A("div",la,[(m=e.noticia)!=null&&m.tipo?(j(),ge(na,{key:0,class:"ma-2",label:""},{default:E(()=>{var d;return[ot(O((d=e.noticia)==null?void 0:d.tipo),1)]}),_:1})):q("",!0),(f=e.noticia)!=null&&f.fecha?(j(),ee("span",ca,O((v=e.noticia)==null?void 0:v.fecha),1)):q("",!0)])]}),_:1})]),_:1}),c(he,{cols:"12",md:"6"},{default:E(()=>{var r,s,i;return[A("a",{href:`/${(r=e.noticia)==null?void 0:r.id}`},[A("figure",null,[c(n,{src:(s=e.noticia)==null?void 0:s.url,alt:(i=e.noticia)==null?void 0:i.imgDescription,class:"noticias-container__img mt-2 mb-2",format:"webp",quality:80,loading:"lazy"},null,8,["src","alt"])])],8,ua)]}),_:1}),c(pe,{thickness:9})]),_:1})}}},ga=rt(da,[["__scopeId","data-v-db58b53e"]]);export{ga as N,pe as V,qt as _,ma as u};