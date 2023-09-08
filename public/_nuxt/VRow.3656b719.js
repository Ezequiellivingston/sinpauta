import{z as S,A as $,aO as D,aP as fe,e as L,aj as W,c as g,aQ as N,aR as ve,aS as ne,aT as Ke,aN as B,aJ as Qe,ap as C,I as me,a9 as U,r as ge,aa as Y,aU as Ze,B as z,aV as et,aW as tt,q as v,D as he,aG as X,aM as ye,al as T,$ as j,Y as nt,aF as st,ae as se,af as at,F as Se,ag as it,J as ae,aX as rt,C as ot,aY as lt,aZ as ie,a_ as ut,a$ as re,b0 as ct,ai as dt,ak as be,ah as ft,b as pe,ao as vt,ad as mt,o as gt,a8 as ht,b1 as yt,aq as St,b2 as H}from"./entry.e3cc5b6e.js";const V=S({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function bt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return $()({name:t??D(fe(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...V()},setup(s,a){let{slots:i}=a;return()=>{var r;return L(s.tag,{class:[e,s.class],style:s.style},(r=i.default)==null?void 0:r.call(i))}}})}function R(e){const n=W("useRender");n.render=e}function J(e){return ve(()=>{const n=[],t={};if(e.value.background)if(ne(e.value.background)){if(t.backgroundColor=e.value.background,!e.value.text){const s=Ke(t.backgroundColor);t.color=s,t.caretColor=s}}else n.push(`bg-${e.value.background}`);return e.value.text&&(ne(e.value.text)?(t.color=e.value.text,t.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:t}})}function _e(e,n){const t=g(()=>({text:N(e)?e.value:n?e[n]:null})),{colorClasses:s,colorStyles:a}=J(t);return{textColorClasses:s,textColorStyles:a}}function un(e,n){const t=g(()=>({background:N(e)?e.value:n?e[n]:null})),{colorClasses:s,colorStyles:a}=J(t);return{backgroundColorClasses:s,backgroundColorStyles:a}}const pt=["x-small","small","default","large","x-large"],Ce=S({size:{type:[String,Number],default:"default"}},"size");function we(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return ve(()=>{let t,s;return Qe(pt,e.size)?t=`${n}--size-${e.size}`:e.size&&(s={width:C(e.size),height:C(e.size)}),{sizeClasses:t,sizeStyles:s}})}const G=S({tag:{type:String,default:"div"}},"tag"),_t=S({color:String,start:Boolean,end:Boolean,icon:me,...V(),...Ce(),...G({tag:"i"}),...U()},"VIcon"),Ct=$()({name:"VIcon",props:_t(),setup(e,n){let{attrs:t,slots:s}=n;const a=ge(),{themeClasses:i}=Y(e),{iconData:r}=Ze(g(()=>a.value||e.icon)),{sizeClasses:o}=we(e),{textColorClasses:u,textColorStyles:c}=_e(z(e,"color"));return R(()=>{var h,l;const f=(h=s.default)==null?void 0:h.call(s);return f&&(a.value=(l=et(f).filter(d=>d.type===tt&&d.children&&typeof d.children=="string")[0])==null?void 0:l.children),v(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",i.value,o.value,u.value,{"v-icon--clickable":!!t.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:C(e.size),height:C(e.size),width:C(e.size)},c.value,e.style],role:t.onClick?"button":void 0,"aria-hidden":!t.onClick},{default:()=>[f]})}),{}}});const wt=S({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function xt(e){return{dimensionStyles:g(()=>({height:C(e.height),maxHeight:C(e.maxHeight),maxWidth:C(e.maxWidth),minHeight:C(e.minHeight),minWidth:C(e.minWidth),width:C(e.width)}))}}function kt(e){return{aspectStyles:g(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const xe=S({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...V(),...wt()},"VResponsive"),oe=$()({name:"VResponsive",props:xe(),setup(e,n){let{slots:t}=n;const{aspectStyles:s}=kt(e),{dimensionStyles:a}=xt(e);return R(()=>{var i;return v("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[a.value,e.style]},[v("div",{class:"v-responsive__sizer",style:s.value},null),(i=t.additional)==null?void 0:i.call(t),t.default&&v("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}}),$t=S({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),A=(e,n)=>{let{slots:t}=n;const{transition:s,disabled:a,...i}=e,{component:r=X,...o}=typeof s=="object"?s:{};return L(r,he(typeof s=="string"?{name:a?"":s}:o,i,{disabled:a}),t)};function Et(e,n){if(!ye)return;const t=n.modifiers||{},s=n.value,{handler:a,options:i}=typeof s=="object"?s:{handler:s,options:{}},r=new IntersectionObserver(function(){var h;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const c=(h=e._observe)==null?void 0:h[n.instance.$.uid];if(!c)return;const f=o.some(l=>l.isIntersecting);a&&(!t.quiet||c.init)&&(!t.once||f||c.init)&&a(f,o,u),f&&t.once?ke(e,n):c.init=!0},i);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:r},r.observe(e)}function ke(e,n){var s;const t=(s=e._observe)==null?void 0:s[n.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const Vt={mounted:Et,unmounted:ke},Lt=Vt,Tt=S({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...xe(),...V(),...$t()},"VImg"),It=$()({name:"VImg",directives:{intersect:Lt},props:Tt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:t,slots:s}=n;const a=T(""),i=ge(),r=T(e.eager?"loading":"idle"),o=T(),u=T(),c=g(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),f=g(()=>c.value.aspect||o.value/u.value||0);j(()=>e.src,()=>{h(r.value!=="idle")}),j(f,(m,p)=>{!m&&p&&i.value&&_(i.value)}),nt(()=>h());function h(m){if(!(e.eager&&m)&&!(ye&&!m&&!e.eager)){if(r.value="loading",c.value.lazySrc){const p=new Image;p.src=c.value.lazySrc,_(p,null)}c.value.src&&st(()=>{var p,E;if(t("loadstart",((p=i.value)==null?void 0:p.currentSrc)||c.value.src),(E=i.value)!=null&&E.complete){if(i.value.naturalWidth||d(),r.value==="error")return;f.value||_(i.value,null),l()}else f.value||_(i.value),b()})}}function l(){var m;b(),r.value="loaded",t("load",((m=i.value)==null?void 0:m.currentSrc)||c.value.src)}function d(){var m;r.value="error",t("error",((m=i.value)==null?void 0:m.currentSrc)||c.value.src)}function b(){const m=i.value;m&&(a.value=m.currentSrc||m.src)}let y=-1;function _(m){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const E=()=>{clearTimeout(y);const{naturalHeight:ee,naturalWidth:te}=m;ee||te?(o.value=te,u.value=ee):!m.complete&&r.value==="loading"&&p!=null?y=window.setTimeout(E,p):(m.currentSrc.endsWith(".svg")||m.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,u.value=1)};E()}const k=g(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),F=()=>{var E;if(!c.value.src||r.value==="idle")return null;const m=v("img",{class:["v-img__img",k.value],src:c.value.src,srcset:c.value.srcset,alt:e.alt,sizes:e.sizes,ref:i,onLoad:l,onError:d},null),p=(E=s.sources)==null?void 0:E.call(s);return v(A,{transition:e.transition,appear:!0},{default:()=>[se(p?v("picture",{class:"v-img__picture"},[p,m]):m,[[it,r.value==="loaded"]])]})},Ue=()=>v(A,{transition:e.transition},{default:()=>[c.value.lazySrc&&r.value!=="loaded"&&v("img",{class:["v-img__img","v-img__img--preload",k.value],src:c.value.lazySrc,alt:e.alt},null)]}),Ye=()=>s.placeholder?v(A,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!s.error)&&v("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,Xe=()=>s.error?v(A,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&v("div",{class:"v-img__error"},[s.error()])]}):null,Je=()=>e.gradient?v("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,Z=T(!1);{const m=j(f,p=>{p&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{Z.value=!0})}),m())})}return R(()=>{const[m]=oe.filterProps(e);return se(v(oe,he({class:["v-img",{"v-img--booting":!Z.value},e.class],style:[{width:C(e.width==="auto"?o.value:e.width)},e.style]},m,{aspectRatio:f.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>v(Se,null,[v(F,null,null),v(Ue,null,null),v(Je,null,null),v(Ye,null,null),v(Xe,null,null)]),default:s.default}),[[at("intersect"),{handler:h,options:e.options},null,{once:!0}]])}),{currentSrc:a,image:i,state:r,naturalWidth:o,naturalHeight:u}}}),Pt=[null,"default","comfortable","compact"],Nt=S({density:{type:String,default:"default",validator:e=>Pt.includes(e)}},"density");function Bt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{densityClasses:g(()=>`${n}--density-${e.density}`)}}const zt=S({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Rt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{roundedClasses:g(()=>{const s=N(e)?e.value:e.rounded,a=[];if(s===!0||s==="")a.push(`${n}--rounded`);else if(typeof s=="string"||s===0)for(const i of String(s).split(" "))a.push(`rounded-${i}`);return a})}}const At=["elevated","flat","tonal","outlined","text","plain"];function jt(e,n){return v(Se,null,[e&&v("span",{key:"overlay",class:`${n}__overlay`},null),v("span",{key:"underlay",class:`${n}__underlay`},null)])}const Ot=S({color:String,variant:{type:String,default:"elevated",validator:e=>At.includes(e)}},"variant");function Dt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();const t=g(()=>{const{variant:i}=ae(e);return`${n}--variant-${i}`}),{colorClasses:s,colorStyles:a}=J(g(()=>{const{variant:i,color:r}=ae(e);return{[["elevated","flat"].includes(i)?"background":"text"]:r}}));return{colorClasses:s,colorStyles:a,variantClasses:t}}const Wt=S({start:Boolean,end:Boolean,icon:me,image:String,...V(),...Nt(),...zt(),...Ce(),...G(),...U(),...Ot({variant:"flat"})},"VAvatar"),cn=$()({name:"VAvatar",props:Wt(),setup(e,n){let{slots:t}=n;const{themeClasses:s}=Y(e),{colorClasses:a,colorStyles:i,variantClasses:r}=Dt(e),{densityClasses:o}=Bt(e),{roundedClasses:u}=Rt(e),{sizeClasses:c,sizeStyles:f}=we(e);return R(()=>v(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},s.value,a.value,o.value,u.value,c.value,r.value,e.class],style:[i.value,f.value,e.style]},{default:()=>{var h;return[e.image?v(It,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?v(Ct,{key:"icon",icon:e.icon},null):(h=t.default)==null?void 0:h.call(t),jt(!1,"v-avatar")]}})),{}}}),Ht=S({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),dn=$(!1)({name:"VDefaultsProvider",props:Ht(),setup(e,n){let{slots:t}=n;const{defaults:s,disabled:a,reset:i,root:r,scoped:o}=rt(e);return ot(s,{reset:i,root:r,scoped:o,disabled:a}),()=>{var u;return(u=t.default)==null?void 0:u.call(t)}}}),fn=bt("v-card-text"),vn=S({border:[Boolean,Number,String]},"border");function mn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{borderClasses:g(()=>{const s=N(e)?e.value:e.border,a=[];if(s===!0||s==="")a.push(`${n}--border`);else if(typeof s=="string"||s===0)for(const i of String(s).split(" "))a.push(`border-${i}`);return a})}}const gn=S({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function hn(e){return{elevationClasses:g(()=>{const t=N(e)?e.value:e.elevation,s=[];return t==null||s.push(`elevation-${t}`),s})}}function yn(){var e,n;return(n=(e=W("useRouter"))==null?void 0:e.proxy)==null?void 0:n.$router}function Sn(e,n){const t=lt("RouterLink"),s=g(()=>!!(e.href||e.to)),a=g(()=>(s==null?void 0:s.value)||ie(n,"click")||ie(e,"click"));if(typeof t=="string")return{isLink:s,isClickable:a,href:z(e,"href")};const i=e.to?t.useLink(e):void 0;return{isLink:s,isClickable:a,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&g(()=>{var r,o;return e.exact?(r=i.isExactActive)==null?void 0:r.value:(o=i.isActive)==null?void 0:o.value}),href:g(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const bn=S({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");const M=Symbol("rippleStop"),Gt=80;function le(e,n){e.style.transform=n,e.style.webkitTransform=n}function q(e){return e.constructor.name==="TouchEvent"}function $e(e){return e.constructor.name==="KeyboardEvent"}const Ft=function(e,n){var h;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,a=0;if(!$e(e)){const l=n.getBoundingClientRect(),d=q(e)?e.touches[e.touches.length-1]:e;s=d.clientX-l.left,a=d.clientY-l.top}let i=0,r=.3;(h=n._ripple)!=null&&h.circle?(r=.15,i=n.clientWidth/2,i=t.center?i:i+Math.sqrt((s-i)**2+(a-i)**2)/4):i=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const o=`${(n.clientWidth-i*2)/2}px`,u=`${(n.clientHeight-i*2)/2}px`,c=t.center?o:`${s-i}px`,f=t.center?u:`${a-i}px`;return{radius:i,scale:r,x:c,y:f,centerX:o,centerY:u}},O={show(e,n){var d;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=n==null?void 0:n._ripple)!=null&&d.enabled))return;const s=document.createElement("span"),a=document.createElement("span");s.appendChild(a),s.className="v-ripple__container",t.class&&(s.className+=` ${t.class}`);const{radius:i,scale:r,x:o,y:u,centerX:c,centerY:f}=Ft(e,n,t),h=`${i*2}px`;a.className="v-ripple__animation",a.style.width=h,a.style.height=h,n.appendChild(s);const l=window.getComputedStyle(n);l&&l.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),a.classList.add("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--visible"),le(a,`translate(${o}, ${u}) scale3d(${r},${r},${r})`),a.dataset.activated=String(performance.now()),setTimeout(()=>{a.classList.remove("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--in"),le(a,`translate(${c}, ${f}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const t=n[n.length-1];if(t.dataset.isHiding)return;t.dataset.isHiding="true";const s=performance.now()-Number(t.dataset.activated),a=Math.max(250-s,0);setTimeout(()=>{t.classList.remove("v-ripple__animation--in"),t.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=t.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(t.parentNode)},300)},a)}};function Ee(e){return typeof e>"u"||!!e}function I(e){const n={},t=e.currentTarget;if(!(!(t!=null&&t._ripple)||t._ripple.touched||e[M])){if(e[M]=!0,q(e))t._ripple.touched=!0,t._ripple.isTouch=!0;else if(t._ripple.isTouch)return;if(n.center=t._ripple.centered||$e(e),t._ripple.class&&(n.class=t._ripple.class),q(e)){if(t._ripple.showTimerCommit)return;t._ripple.showTimerCommit=()=>{O.show(e,t,n)},t._ripple.showTimer=window.setTimeout(()=>{var s;(s=t==null?void 0:t._ripple)!=null&&s.showTimerCommit&&(t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null)},Gt)}else O.show(e,t,n)}}function ue(e){e[M]=!0}function w(e){const n=e.currentTarget;if(n!=null&&n._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{w(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),O.hide(n)}}function Ve(e){const n=e.currentTarget;n!=null&&n._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let P=!1;function Le(e){!P&&(e.keyCode===re.enter||e.keyCode===re.space)&&(P=!0,I(e))}function Te(e){P=!1,w(e)}function Ie(e){P&&(P=!1,w(e))}function Pe(e,n,t){const{value:s,modifiers:a}=n,i=Ee(s);if(i||O.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=a.center,e._ripple.circle=a.circle,ut(s)&&s.class&&(e._ripple.class=s.class),i&&!t){if(a.stop){e.addEventListener("touchstart",ue,{passive:!0}),e.addEventListener("mousedown",ue);return}e.addEventListener("touchstart",I,{passive:!0}),e.addEventListener("touchend",w,{passive:!0}),e.addEventListener("touchmove",Ve,{passive:!0}),e.addEventListener("touchcancel",w),e.addEventListener("mousedown",I),e.addEventListener("mouseup",w),e.addEventListener("mouseleave",w),e.addEventListener("keydown",Le),e.addEventListener("keyup",Te),e.addEventListener("blur",Ie),e.addEventListener("dragstart",w,{passive:!0})}else!i&&t&&Ne(e)}function Ne(e){e.removeEventListener("mousedown",I),e.removeEventListener("touchstart",I),e.removeEventListener("touchend",w),e.removeEventListener("touchmove",Ve),e.removeEventListener("touchcancel",w),e.removeEventListener("mouseup",w),e.removeEventListener("mouseleave",w),e.removeEventListener("keydown",Le),e.removeEventListener("keyup",Te),e.removeEventListener("dragstart",w),e.removeEventListener("blur",Ie)}function Mt(e,n){Pe(e,n,!1)}function qt(e){delete e._ripple,Ne(e)}function Ut(e,n){if(n.value===n.oldValue)return;const t=Ee(n.oldValue);Pe(e,n,t)}const pn={mounted:Mt,unmounted:qt,updated:Ut},Yt=S({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function x(e,n,t){return $()({name:e,props:Yt({mode:t,origin:n}),setup(s,a){let{slots:i}=a;const r={onBeforeEnter(o){s.origin&&(o.style.transformOrigin=s.origin)},onLeave(o){if(s.leaveAbsolute){const{offsetTop:u,offsetLeft:c,offsetWidth:f,offsetHeight:h}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${u}px`,o.style.left=`${c}px`,o.style.width=`${f}px`,o.style.height=`${h}px`}s.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(s.leaveAbsolute&&(o!=null&&o._transitionInitialStyles)){const{position:u,top:c,left:f,width:h,height:l}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=u||"",o.style.top=c||"",o.style.left=f||"",o.style.width=h||"",o.style.height=l||""}}};return()=>{const o=s.group?ct:X;return L(o,{name:s.disabled?"":e,css:!s.disabled,...s.group?void 0:{mode:s.mode},...s.disabled?{}:r},i.default)}}})}function Be(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return $()({name:e,props:{mode:{type:String,default:t},disabled:Boolean},setup(s,a){let{slots:i}=a;return()=>L(X,{name:s.disabled?"":e,css:!s.disabled,...s.disabled?{}:n},i.default)}})}function ze(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",s=fe(`offset-${t}`);return{onBeforeEnter(r){r._parent=r.parentNode,r._initialStyle={transition:r.style.transition,overflow:r.style.overflow,[t]:r.style[t]}},onEnter(r){const o=r._initialStyle;r.style.setProperty("transition","none","important"),r.style.overflow="hidden";const u=`${r[s]}px`;r.style[t]="0",r.offsetHeight,r.style.transition=o.transition,e&&r._parent&&r._parent.classList.add(e),requestAnimationFrame(()=>{r.style[t]=u})},onAfterEnter:i,onEnterCancelled:i,onLeave(r){r._initialStyle={transition:"",overflow:r.style.overflow,[t]:r.style[t]},r.style.overflow="hidden",r.style[t]=`${r[s]}px`,r.offsetHeight,requestAnimationFrame(()=>r.style[t]="0")},onAfterLeave:a,onLeaveCancelled:a};function a(r){e&&r._parent&&r._parent.classList.remove(e),i(r)}function i(r){const o=r._initialStyle[t];r.style.overflow=r._initialStyle.overflow,o!=null&&(r.style[t]=o),delete r._initialStyle}}x("fab-transition","center center","out-in");x("dialog-bottom-transition");x("dialog-top-transition");x("fade-transition");x("scale-transition");x("scroll-x-transition");x("scroll-x-reverse-transition");x("scroll-y-transition");x("scroll-y-reverse-transition");x("slide-x-transition");x("slide-x-reverse-transition");x("slide-y-transition");x("slide-y-reverse-transition");const _n=Be("expand-transition",ze()),Cn=Be("expand-x-transition",ze("",!0)),wn=S({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),xn=S({value:null,disabled:Boolean,selectedClass:String},"group-item");function kn(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const s=W("useGroupItem");if(!s)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const a=dt();be(Symbol.for(`${n.description}:id`),a);const i=ft(n,null);if(!i){if(!t)return i;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`)}const r=z(e,"value"),o=g(()=>!!(i.disabled.value||e.disabled));i.register({id:a,value:r,disabled:o},s),pe(()=>{i.unregister(a)});const u=g(()=>i.isSelected(a)),c=g(()=>u.value&&[i.selectedClass.value,e.selectedClass]);return j(u,f=>{s.emit("group:selected",{value:f})}),{id:a,isSelected:u,toggle:()=>i.select(a,!u.value),select:f=>i.select(a,f),selectedClass:c,value:r,disabled:o,group:i}}function $n(e,n){let t=!1;const s=vt([]),a=mt(e,"modelValue",[],l=>l==null?[]:Re(s,yt(l)),l=>{const d=Jt(s,l);return e.multiple?d:d[0]}),i=W("useGroup");function r(l,d){const b=l,y=Symbol.for(`${n.description}:id`),k=St(y,i==null?void 0:i.vnode).indexOf(d);k>-1?s.splice(k,0,b):s.push(b)}function o(l){if(t)return;u();const d=s.findIndex(b=>b.id===l);s.splice(d,1)}function u(){const l=s.find(d=>!d.disabled);l&&e.mandatory==="force"&&!a.value.length&&(a.value=[l.id])}gt(()=>{u()}),pe(()=>{t=!0});function c(l,d){const b=s.find(y=>y.id===l);if(!(d&&(b!=null&&b.disabled)))if(e.multiple){const y=a.value.slice(),_=y.findIndex(F=>F===l),k=~_;if(d=d??!k,k&&e.mandatory&&y.length<=1||!k&&e.max!=null&&y.length+1>e.max)return;_<0&&d?y.push(l):_>=0&&!d&&y.splice(_,1),a.value=y}else{const y=a.value.includes(l);if(e.mandatory&&y)return;a.value=d??!y?[l]:[]}}function f(l){if(e.multiple,a.value.length){const d=a.value[0],b=s.findIndex(k=>k.id===d);let y=(b+l)%s.length,_=s[y];for(;_.disabled&&y!==b;)y=(y+l)%s.length,_=s[y];if(_.disabled)return;a.value=[s[y].id]}else{const d=s.find(b=>!b.disabled);d&&(a.value=[d.id])}}const h={register:r,unregister:o,selected:a,select:c,disabled:z(e,"disabled"),prev:()=>f(s.length-1),next:()=>f(1),isSelected:l=>a.value.includes(l),selectedClass:g(()=>e.selectedClass),items:g(()=>s),getItemIndex:l=>Xt(s,l)};return be(n,h),h}function Xt(e,n){const t=Re(e,[n]);return t.length?e.findIndex(s=>s.id===t[0]):-1}function Re(e,n){const t=[];return n.forEach(s=>{const a=e.find(r=>ht(s,r.value)),i=e[s];(a==null?void 0:a.value)!=null?t.push(a.id):i!=null&&t.push(i.id)}),t}function Jt(e,n){const t=[];return n.forEach(s=>{const a=e.findIndex(i=>i.id===s);if(~a){const i=e[a];t.push(i.value!=null?i.value:a)}}),t}const Kt=S({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...V(),...U()},"VDivider"),En=$()({name:"VDivider",props:Kt(),setup(e,n){let{attrs:t}=n;const{themeClasses:s}=Y(e),{textColorClasses:a,textColorStyles:i}=_e(z(e,"color")),r=g(()=>{const o={};return e.length&&(o[e.vertical?"maxHeight":"maxWidth"]=C(e.length)),e.thickness&&(o[e.vertical?"borderRightWidth":"borderTopWidth"]=C(e.thickness)),o});return R(()=>v("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,a.value,e.class],style:[r.value,i.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});const Ae=(()=>H.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}))(),je=(()=>H.reduce((e,n)=>{const t="offset"+D(n);return e[t]={type:[String,Number],default:null},e},{}))(),Oe=(()=>H.reduce((e,n)=>{const t="order"+D(n);return e[t]={type:[String,Number],default:null},e},{}))(),ce={col:Object.keys(Ae),offset:Object.keys(je),order:Object.keys(Oe)};function Qt(e,n,t){let s=e;if(!(t==null||t===!1)){if(n){const a=n.replace(e,"");s+=`-${a}`}return e==="col"&&(s="v-"+s),e==="col"&&(t===""||t===!0)||(s+=`-${t}`),s.toLowerCase()}}const Zt=["auto","start","end","center","baseline","stretch"],en=S({cols:{type:[Boolean,String,Number],default:!1},...Ae,offset:{type:[String,Number],default:null},...je,order:{type:[String,Number],default:null},...Oe,alignSelf:{type:String,default:null,validator:e=>Zt.includes(e)},...V(),...G()},"VCol"),Vn=$()({name:"VCol",props:en(),setup(e,n){let{slots:t}=n;const s=g(()=>{const a=[];let i;for(i in ce)ce[i].forEach(o=>{const u=e[o],c=Qt(i,o,u);c&&a.push(c)});const r=a.some(o=>o.startsWith("v-col-"));return a.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return L(e.tag,{class:[s.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}}),K=["start","end","center"],De=["space-between","space-around","space-evenly"];function Q(e,n){return H.reduce((t,s)=>{const a=e+D(s);return t[a]=n(),t},{})}const tn=[...K,"baseline","stretch"],We=e=>tn.includes(e),He=Q("align",()=>({type:String,default:null,validator:We})),nn=[...K,...De],Ge=e=>nn.includes(e),Fe=Q("justify",()=>({type:String,default:null,validator:Ge})),sn=[...K,...De,"stretch"],Me=e=>sn.includes(e),qe=Q("alignContent",()=>({type:String,default:null,validator:Me})),de={align:Object.keys(He),justify:Object.keys(Fe),alignContent:Object.keys(qe)},an={align:"align",justify:"justify",alignContent:"align-content"};function rn(e,n,t){let s=an[e];if(t!=null){if(n){const a=n.replace(e,"");s+=`-${a}`}return s+=`-${t}`,s.toLowerCase()}}const on=S({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:We},...He,justify:{type:String,default:null,validator:Ge},...Fe,alignContent:{type:String,default:null,validator:Me},...qe,...V(),...G()},"VRow"),Ln=$()({name:"VRow",props:on(),setup(e,n){let{slots:t}=n;const s=g(()=>{const a=[];let i;for(i in de)de[i].forEach(r=>{const o=e[r],u=rn(i,r,o);u&&a.push(u)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return L(e.tag,{class:["v-row",s.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}});export{kn as A,jt as B,Cn as C,cn as D,fn as E,bt as F,wt as G,xt as H,It as I,_n as J,yn as K,A as M,pn as R,Ct as V,bn as a,G as b,Sn as c,_e as d,Nt as e,zt as f,un as g,Bt as h,Rt as i,dn as j,Ln as k,En as l,V as m,Vn as n,wn as o,Ot as p,$n as q,vn as r,gn as s,xn as t,R as u,Ce as v,mn as w,Dt as x,hn as y,we as z};
