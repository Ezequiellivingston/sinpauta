import{z as N,ah as ge,ai as sn,aj as qe,ak as me,al as D,am as ua,an as da,c as m,b as pe,r as O,ao as Ie,ap as J,o as he,aq as fa,A as F,C as Ue,q as c,I as U,a9 as Ae,aa as Ee,ae as ht,af as rn,_ as yt,k as ve,l as Oe,ar as va,B,as as ln,at as ga,$ as z,au as ma,ad as Ne,av as pa,D as Ce,aw as ha,ax as ye,ag as ya,ay as ba,ab as Nt,az as wa,F as $e,aA as Sa,aB as ke,aC as Ia,aD as ka,aE as Ca,aF as _a,Y as Ta,aG as Aa,G as Ea,K as $t,s as $,aH as Va,W as Pa,x as cn,y as un,m as P,aI as Re,aJ as He,aK as je,aL as bt,aM as dn,aN as La,aO as fn,aP as Da,aQ as Ma,aR as xa,aS as Ba,d as Oa,j as Na,aT as $a,aU as Ra,aV as Ha,O as ja,T as Fa,aW as Ka,aX as Wa,J as qa,v as Ua,V as za}from"./entry.442363f0.js";import{u as Ga,m as Ya,a as Za,b as Ja,c as Xa,d as Qa,e as eo,L as to,t as no,V as vn,_ as ao}from"./VBtn.e60390db.js";import{m as W,u as K,F as Ve,e as ze,D as Fe,j as X,r as Pe,G as wt,s as Le,f as De,a as gn,b as ne,p as St,R as mn,w as Me,x as pn,h as It,H as kt,y as xe,i as Be,c as hn,I as yn,E as oo,B as bn,g as Ke,J as wn,M as io,V as oe,d as so,l as ro,K as lo,n as Rt,k as co}from"./VRow.493a9848.js";const ct=Symbol.for("vuetify:layout"),Sn=Symbol.for("vuetify:layout-item"),Ht=1e3,uo=N({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),In=N({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function kn(e){const t=ge(ct);if(!t)throw new Error("[Vuetify] Could not find injected layout");const n=e.id??`layout-item-${sn()}`,a=qe("useLayoutItem");me(Sn,{id:n});const i=D(!1);ua(()=>i.value=!0),da(()=>i.value=!1);const{layoutItemStyles:o,layoutItemScrimStyles:s}=t.register(a,{...e,active:m(()=>i.value?!1:e.active.value),id:n});return pe(()=>t.unregister(n)),{layoutItemStyles:o,layoutRect:t.layoutRect,layoutItemScrimStyles:s}}const fo=(e,t,n,a)=>{let i={top:0,left:0,right:0,bottom:0};const o=[{id:"",layer:{...i}}];for(const s of e){const r=t.get(s),d=n.get(s),f=a.get(s);if(!r||!d||!f)continue;const l={...i,[r.value]:parseInt(i[r.value],10)+(f.value?parseInt(d.value,10):0)};o.push({id:s,layer:l}),i=l}return o};function vo(e){const t=ge(ct,null),n=m(()=>t?t.rootZIndex.value-100:Ht),a=O([]),i=Ie(new Map),o=Ie(new Map),s=Ie(new Map),r=Ie(new Map),d=Ie(new Map),{resizeRef:f,contentRect:l}=Ga(),u=m(()=>{const h=new Map,b=e.overlaps??[];for(const y of b.filter(S=>S.includes(":"))){const[S,_]=y.split(":");if(!a.value.includes(S)||!a.value.includes(_))continue;const x=i.get(S),H=i.get(_),j=o.get(S),G=o.get(_);!x||!H||!j||!G||(h.set(_,{position:x.value,amount:parseInt(j.value,10)}),h.set(S,{position:H.value,amount:-parseInt(G.value,10)}))}return h}),v=m(()=>{const h=[...new Set([...s.values()].map(y=>y.value))].sort((y,S)=>y-S),b=[];for(const y of h){const S=a.value.filter(_=>{var x;return((x=s.get(_))==null?void 0:x.value)===y});b.push(...S)}return fo(b,i,o,r)}),g=m(()=>!Array.from(d.values()).some(h=>h.value)),p=m(()=>v.value[v.value.length-1].layer),C=m(()=>({"--v-layout-left":J(p.value.left),"--v-layout-right":J(p.value.right),"--v-layout-top":J(p.value.top),"--v-layout-bottom":J(p.value.bottom),...g.value?void 0:{transition:"none"}})),w=m(()=>v.value.slice(1).map((h,b)=>{let{id:y}=h;const{layer:S}=v.value[b],_=o.get(y),x=i.get(y);return{id:y,...S,size:Number(_.value),position:x.value}})),k=h=>w.value.find(b=>b.id===h),T=qe("createLayout"),A=D(!1);he(()=>{A.value=!0}),me(ct,{register:(h,b)=>{let{id:y,order:S,position:_,layoutSize:x,elementSize:H,active:j,disableTransitions:G,absolute:ee}=b;s.set(y,S),i.set(y,_),o.set(y,x),r.set(y,j),G&&d.set(y,G);const ue=fa(Sn,T==null?void 0:T.vnode).indexOf(h);ue>-1?a.value.splice(ue,0,y):a.value.push(y);const E=m(()=>w.value.findIndex(q=>q.id===y)),L=m(()=>n.value+v.value.length*2-E.value*2),de=m(()=>{const q=_.value==="left"||_.value==="right",Y=_.value==="right",we=_.value==="bottom",Se={[_.value]:0,zIndex:L.value,transform:`translate${q?"X":"Y"}(${(j.value?0:-110)*(Y||we?-1:1)}%)`,position:ee.value||n.value!==Ht?"absolute":"fixed",...g.value?void 0:{transition:"none"}};if(!A.value)return Se;const V=w.value[E.value];if(!V)throw new Error(`[Vuetify] Could not find layout item "${y}"`);const Ze=u.value.get(y);return Ze&&(V[Ze.position]+=Ze.amount),{...Se,height:q?`calc(100% - ${V.top}px - ${V.bottom}px)`:H.value?`${H.value}px`:void 0,left:Y?void 0:`${V.left}px`,right:Y?`${V.right}px`:void 0,top:_.value!=="bottom"?`${V.top}px`:void 0,bottom:_.value!=="top"?`${V.bottom}px`:void 0,width:q?H.value?`${H.value}px`:void 0:`calc(100% - ${V.left}px - ${V.right}px)`}}),ae=m(()=>({zIndex:L.value-1}));return{layoutItemStyles:de,layoutItemScrimStyles:ae,zIndex:L}},unregister:h=>{s.delete(h),i.delete(h),o.delete(h),r.delete(h),d.delete(h),a.value=a.value.filter(b=>b!==h)},mainRect:p,mainStyles:C,getLayoutItem:k,items:w,layoutRect:l,rootZIndex:n});const M=m(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),I=m(()=>({zIndex:n.value,position:t?"relative":void 0,overflow:t?"hidden":void 0}));return{layoutClasses:M,layoutStyles:I,getLayoutItem:k,items:w,layoutRect:l,layoutRef:f}}const go=F()({name:"VCardActions",props:W(),setup(e,t){let{slots:n}=t;return Ue({VBtn:{variant:"text"}}),K(()=>{var a;return c("div",{class:["v-card-actions",e.class],style:e.style},[(a=n.default)==null?void 0:a.call(n)])}),{}}}),mo=Ve("v-card-subtitle"),po=Ve("v-card-title"),ho=N({appendAvatar:String,appendIcon:U,prependAvatar:String,prependIcon:U,subtitle:String,title:String,...W(),...ze()},"VCardItem"),yo=F()({name:"VCardItem",props:ho(),setup(e,t){let{slots:n}=t;return K(()=>{var f;const a=!!(e.prependAvatar||e.prependIcon),i=!!(a||n.prepend),o=!!(e.appendAvatar||e.appendIcon),s=!!(o||n.append),r=!!(e.title||n.title),d=!!(e.subtitle||n.subtitle);return c("div",{class:["v-card-item",e.class],style:e.style},[i&&c("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?c(X,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},n.prepend):a&&c(Fe,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),c("div",{class:"v-card-item__content"},[r&&c(po,{key:"title"},{default:()=>{var l;return[((l=n.title)==null?void 0:l.call(n))??e.title]}}),d&&c(mo,{key:"subtitle"},{default:()=>{var l;return[((l=n.subtitle)==null?void 0:l.call(n))??e.subtitle]}}),(f=n.default)==null?void 0:f.call(n)]),s&&c("div",{key:"append",class:"v-card-item__append"},[n.append?c(X,{key:"append-defaults",disabled:!o,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},n.append):o&&c(Fe,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),bo=N({appendAvatar:String,appendIcon:U,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:U,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...Pe(),...W(),...ze(),...wt(),...Le(),...Ya(),...Za(),...Ja(),...De(),...gn(),...ne(),...Ae(),...St({variant:"elevated"})},"VCard"),wo=F()({name:"VCard",directives:{Ripple:mn},props:bo(),setup(e,t){let{attrs:n,slots:a}=t;const{themeClasses:i}=Ee(e),{borderClasses:o}=Me(e),{colorClasses:s,colorStyles:r,variantClasses:d}=pn(e),{densityClasses:f}=It(e),{dimensionStyles:l}=kt(e),{elevationClasses:u}=xe(e),{loaderClasses:v}=Xa(e),{locationStyles:g}=Qa(e),{positionClasses:p}=eo(e),{roundedClasses:C}=Be(e),w=hn(e,n),k=m(()=>e.link!==!1&&w.isLink.value),T=m(()=>!e.disabled&&e.link!==!1&&(e.link||w.isClickable.value));return K(()=>{const A=k.value?"a":e.tag,M=!!(a.title||e.title),I=!!(a.subtitle||e.subtitle),h=M||I,b=!!(a.append||e.appendAvatar||e.appendIcon),y=!!(a.prepend||e.prependAvatar||e.prependIcon),S=!!(a.image||e.image),_=h||y||b,x=!!(a.text||e.text);return ht(c(A,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":T.value},i.value,o.value,s.value,f.value,u.value,v.value,p.value,C.value,d.value,e.class],style:[r.value,l.value,g.value,e.style],href:w.href.value,onClick:T.value&&w.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var H;return[S&&c("div",{key:"image",class:"v-card__image"},[a.image?c(X,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):c(yn,{key:"image-img",cover:!0,src:e.image},null)]),c(to,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),_&&c(yo,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),x&&c(oo,{key:"text"},{default:()=>{var j;return[((j=a.text)==null?void 0:j.call(a))??e.text]}}),(H=a.default)==null?void 0:H.call(a),a.actions&&c(go,null,{default:a.actions}),bn(T.value,"v-card")]}}),[[rn("ripple"),T.value&&e.ripple]])}),{}}}),So=Ve("v-spacer","div","VSpacer"),Io=""+globalThis.__publicAssetsURL("facebook.svg"),ko=""+globalThis.__publicAssetsURL("twitter.svg"),Co=""+globalThis.__publicAssetsURL("gmail.svg"),_o=""+globalThis.__publicAssetsURL("youtube.svg"),To=""+globalThis.__publicAssetsURL("menu.svg"),Ao={},Eo={width:"42",height:"57",viewBox:"0 0 42 57",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Vo=va('<g clip-path="url(#clip0_701_2)"><rect width="42" height="57" fill="black"></rect><rect x="15" width="27" height="57" fill="#FF5C5C"></rect><path d="M9.86364 39.5455V57H5.125V39.5455H9.86364ZM27.2116 39.5455V57H23.2571L16.9503 47.8295H16.848V57H12.1094V39.5455H16.1321L22.3366 48.6818H22.473V39.5455H27.2116Z" fill="white"></path><path d="M35.358 21H33.2273L35.6278 13.7273H38.3267L40.7273 21H38.5966L37.0057 15.7301H36.9489L35.358 21ZM34.9602 18.1307H38.9659V19.608H34.9602V18.1307ZM37.7727 25.7273H39.7472V30.3864C39.7472 30.9403 39.6146 31.4197 39.3494 31.8246C39.0866 32.227 38.7197 32.5384 38.2486 32.7585C37.7775 32.9763 37.2306 33.0852 36.608 33.0852C35.9806 33.0852 35.4313 32.9763 34.9602 32.7585C34.4891 32.5384 34.1222 32.227 33.8594 31.8246C33.599 31.4197 33.4688 30.9403 33.4688 30.3864V25.7273H35.4432V30.2159C35.4432 30.4408 35.4929 30.642 35.5923 30.8196C35.6918 30.9948 35.8291 31.1321 36.0043 31.2315C36.1818 31.331 36.383 31.3807 36.608 31.3807C36.8352 31.3807 37.0365 31.331 37.2116 31.2315C37.3868 31.1321 37.5241 30.9948 37.6236 30.8196C37.723 30.642 37.7727 30.4408 37.7727 30.2159V25.7273ZM33.2699 39.3182V37.7273H39.5909V39.3182H37.4034V45H35.4574V39.3182H33.2699ZM35.358 57H33.2273L35.6278 49.7273H38.3267L40.7273 57H38.5966L37.0057 51.7301H36.9489L35.358 57ZM34.9602 54.1307H38.9659V55.608H34.9602V54.1307Z" fill="white"></path><path d="M34.4688 10V2.72727H37.608C38.1477 2.72727 38.62 2.83381 39.0249 3.04688C39.4297 3.25994 39.7446 3.55942 39.9695 3.94531C40.1944 4.3312 40.3068 4.7822 40.3068 5.2983C40.3068 5.81913 40.1908 6.27012 39.9588 6.65128C39.7292 7.03243 39.406 7.32599 38.9893 7.53196C38.575 7.73793 38.0909 7.84091 37.5369 7.84091H35.6619V6.30682H37.1392C37.3712 6.30682 37.5689 6.26657 37.7322 6.18608C37.898 6.10322 38.0246 5.98603 38.1122 5.83452C38.2022 5.683 38.2472 5.50426 38.2472 5.2983C38.2472 5.08996 38.2022 4.91241 38.1122 4.76562C38.0246 4.61648 37.898 4.50284 37.7322 4.42472C37.5689 4.34422 37.3712 4.30398 37.1392 4.30398H36.4432V10H34.4688Z" fill="white"></path><path d="M20.5071 11.5C20.4143 10.34 19.9793 9.43513 19.2021 8.78551C18.4364 8.13589 17.2706 7.81108 15.7045 7.81108C14.7069 7.81108 13.8891 7.93288 13.2511 8.17649C12.6246 8.4085 12.1606 8.72751 11.859 9.13352C11.5574 9.53953 11.4008 10.0036 11.3892 10.5256C11.366 10.9548 11.4414 11.3434 11.6154 11.6914C11.801 12.0278 12.091 12.3352 12.4854 12.6136C12.8799 12.8804 13.3845 13.1241 13.9993 13.3445C14.6141 13.5649 15.3449 13.7621 16.1918 13.9361L19.1151 14.5625C21.0871 14.9801 22.775 15.5311 24.1786 16.2156C25.5823 16.9 26.7307 17.7062 27.6239 18.6342C28.5172 19.5507 29.1726 20.5831 29.5902 21.7315C30.0194 22.88 30.2398 24.1328 30.2514 25.4901C30.2398 27.8333 29.654 29.817 28.494 31.4411C27.3339 33.0651 25.6751 34.3005 23.5174 35.1474C21.3713 35.9942 18.7902 36.4176 15.7741 36.4176C12.6768 36.4176 9.97396 35.9594 7.66548 35.043C5.36861 34.1265 3.58215 32.7171 2.30611 30.8146C1.04167 28.9006 0.403646 26.4529 0.392045 23.4716H9.57955C9.63755 24.562 9.91016 25.4785 10.3974 26.2209C10.8846 26.9633 11.569 27.5259 12.4506 27.9087C13.3439 28.2915 14.4053 28.483 15.6349 28.483C16.6674 28.483 17.5316 28.3554 18.2276 28.1001C18.9237 27.8449 19.4515 27.4911 19.8111 27.0387C20.1707 26.5863 20.3563 26.0701 20.3679 25.4901C20.3563 24.9448 20.1765 24.4692 19.8285 24.0632C19.4921 23.6456 18.9353 23.2744 18.158 22.9496C17.3808 22.6132 16.331 22.3 15.0085 22.0099L11.4588 21.2443C8.3035 20.5599 5.81522 19.4173 3.99396 17.8164C2.1843 16.204 1.28527 14.0057 1.29688 11.2216C1.28527 8.95952 1.88849 6.98165 3.10653 5.288C4.33617 3.58274 6.03563 2.2545 8.2049 1.30327C10.3858 0.352035 12.8857 -0.123581 15.7045 -0.123581C18.5814 -0.123581 21.0697 0.357835 23.1694 1.32067C25.2691 2.2835 26.8873 3.64074 28.0241 5.3924C29.1726 7.13246 29.7526 9.16832 29.7642 11.5H20.5071Z" fill="white"></path></g><defs><clipPath id="clip0_701_2"><rect width="42" height="57" fill="white"></rect></clipPath></defs>',2),Po=[Vo];function Lo(e,t){return ve(),Oe("svg",Eo,Po)}const Cn=yt(Ao,[["render",Lo]]);const Do=N({text:String,...W(),...ne()},"VToolbarTitle"),Mo=F()({name:"VToolbarTitle",props:Do(),setup(e,t){let{slots:n}=t;return K(()=>{const a=!!(n.default||n.text||e.text);return c(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var i;return[a&&c("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():e.text,(i=n.default)==null?void 0:i.call(n)])]}})}),{}}}),xo=[null,"prominent","default","comfortable","compact"],_n=N({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>xo.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Pe(),...W(),...Le(),...De(),...ne({tag:"header"}),...Ae()},"VToolbar"),jt=F()({name:"VToolbar",props:_n(),setup(e,t){var g;let{slots:n}=t;const{backgroundColorClasses:a,backgroundColorStyles:i}=Ke(B(e,"color")),{borderClasses:o}=Me(e),{elevationClasses:s}=xe(e),{roundedClasses:r}=Be(e),{themeClasses:d}=Ee(e),{rtlClasses:f}=ln(),l=D(!!(e.extended||(g=n.extension)!=null&&g.call(n))),u=m(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),v=m(()=>l.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ue({VBtn:{variant:"text"}}),K(()=>{var k;const p=!!(e.title||n.title),C=!!(n.image||e.image),w=(k=n.extension)==null?void 0:k.call(n);return l.value=!!(e.extended||w),c(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},a.value,o.value,s.value,r.value,d.value,f.value,e.class],style:[i.value,e.style]},{default:()=>[C&&c("div",{key:"image",class:"v-toolbar__image"},[n.image?c(X,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):c(yn,{key:"image-img",cover:!0,src:e.image},null)]),c(X,{defaults:{VTabs:{height:J(u.value)}}},{default:()=>{var T,A,M;return[c("div",{class:"v-toolbar__content",style:{height:J(u.value)}},[n.prepend&&c("div",{class:"v-toolbar__prepend"},[(T=n.prepend)==null?void 0:T.call(n)]),p&&c(Mo,{key:"title",text:e.title},{text:n.title}),(A=n.default)==null?void 0:A.call(n),n.append&&c("div",{class:"v-toolbar__append"},[(M=n.append)==null?void 0:M.call(n)])])]}}),c(X,{defaults:{VTabs:{height:J(v.value)}}},{default:()=>[c(wn,null,{default:()=>[l.value&&c("div",{class:"v-toolbar__extension",style:{height:J(v.value)}},[w])]})]})]})}),{contentHeight:u,extensionHeight:v}}}),Bo=N({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Oo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:n}=t;let a=0;const i=O(null),o=D(0),s=D(0),r=D(0),d=D(!1),f=D(!1),l=m(()=>Number(e.scrollThreshold)),u=m(()=>ga((l.value-o.value)/l.value||0)),v=()=>{const g=i.value;!g||n&&!n.value||(a=o.value,o.value="window"in g?g.pageYOffset:g.scrollTop,f.value=o.value<a,r.value=Math.abs(o.value-l.value))};return z(f,()=>{s.value=s.value||o.value}),z(d,()=>{s.value=0}),he(()=>{z(()=>e.scrollTarget,g=>{var C;const p=g?document.querySelector(g):window;p&&p!==i.value&&((C=i.value)==null||C.removeEventListener("scroll",v),i.value=p,i.value.addEventListener("scroll",v,{passive:!0}))},{immediate:!0})}),pe(()=>{var g;(g=i.value)==null||g.removeEventListener("scroll",v)}),n&&z(n,v,{immediate:!0}),{scrollThreshold:l,currentScroll:o,currentThreshold:r,isScrollActive:d,scrollRatio:u,isScrollingUp:f,savedScroll:s}}function Ct(){const e=D(!1);return he(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:m(()=>e.value?void 0:{transition:"none !important"}),isBooted:ma(e)}}const No=N({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},..._n(),...In(),...Bo(),height:{type:[Number,String],default:64}},"VAppBar"),$o=F()({name:"VAppBar",props:No(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const a=O(),i=Ne(e,"modelValue"),o=m(()=>{var T;const k=new Set(((T=e.scrollBehavior)==null?void 0:T.split(" "))??[]);return{hide:k.has("hide"),inverted:k.has("inverted"),collapse:k.has("collapse"),elevate:k.has("elevate"),fadeImage:k.has("fade-image")}}),s=m(()=>{const k=o.value;return k.hide||k.inverted||k.collapse||k.elevate||k.fadeImage||!i.value}),{currentScroll:r,scrollThreshold:d,isScrollingUp:f,scrollRatio:l}=Oo(e,{canScroll:s}),u=m(()=>e.collapse||o.value.collapse&&(o.value.inverted?l.value>0:l.value===0)),v=m(()=>e.flat||o.value.elevate&&(o.value.inverted?r.value>0:r.value===0)),g=m(()=>o.value.fadeImage?o.value.inverted?1-l.value:l.value:void 0),p=m(()=>{var A,M;if(o.value.hide&&o.value.inverted)return 0;const k=((A=a.value)==null?void 0:A.contentHeight)??0,T=((M=a.value)==null?void 0:M.extensionHeight)??0;return k+T});pa(m(()=>!!e.scrollBehavior),()=>{ha(()=>{o.value.hide?o.value.inverted?i.value=r.value>d.value:i.value=f.value||r.value<d.value:i.value=!0})});const{ssrBootStyles:C}=Ct(),{layoutItemStyles:w}=kn({id:e.name,order:m(()=>parseInt(e.order,10)),position:B(e,"location"),layoutSize:p,elementSize:D(void 0),active:i,absolute:B(e,"absolute")});return K(()=>{const[k]=jt.filterProps(e);return c(jt,Ce({ref:a,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...w.value,"--v-toolbar-image-opacity":g.value,height:void 0,...C.value},e.style]},k,{collapse:u.value,flat:v.value}),n)}),{}}});const Ro=N({...W(),...uo()},"VLayout"),Ho=F()({name:"VLayout",props:Ro(),setup(e,t){let{slots:n}=t;const{layoutClasses:a,layoutStyles:i,getLayoutItem:o,items:s,layoutRef:r}=vo(e);return K(()=>{var d;return c("div",{ref:r,class:[a.value,e.class],style:[i.value,e.style]},[(d=n.default)==null?void 0:d.call(n)])}),{getLayoutItem:o,items:s}}});const ut=Symbol.for("vuetify:list");function Tn(){const e=ge(ut,{hasPrepend:D(!1),updateHasPrepend:()=>null}),t={hasPrepend:D(!1),updateHasPrepend:n=>{n&&(t.hasPrepend.value=n)}};return me(ut,t),e}function An(){return ge(ut,null)}const jo={open:e=>{let{id:t,value:n,opened:a,parents:i}=e;if(n){const o=new Set;o.add(t);let s=i.get(t);for(;s!=null;)o.add(s),s=i.get(s);return o}else return a.delete(t),a},select:()=>null},En={open:e=>{let{id:t,value:n,opened:a,parents:i}=e;if(n){let o=i.get(t);for(a.add(t);o!=null&&o!==t;)a.add(o),o=i.get(o);return a}else a.delete(t);return a},select:()=>null},Fo={open:En.open,select:e=>{let{id:t,value:n,opened:a,parents:i}=e;if(!n)return a;const o=[];let s=i.get(t);for(;s!=null;)o.push(s),s=i.get(s);return new Set(o)}},_t=e=>{const t={select:n=>{let{id:a,value:i,selected:o}=n;if(a=ye(a),e&&!i){const s=Array.from(o.entries()).reduce((r,d)=>{let[f,l]=d;return l==="on"?[...r,f]:r},[]);if(s.length===1&&s[0]===a)return o}return o.set(a,i?"on":"off"),o},in:(n,a,i)=>{let o=new Map;for(const s of n||[])o=t.select({id:s,value:!0,selected:new Map(o),children:a,parents:i});return o},out:n=>{const a=[];for(const[i,o]of n.entries())o==="on"&&a.push(i);return a}};return t},Vn=e=>{const t=_t(e);return{select:a=>{let{selected:i,id:o,...s}=a;o=ye(o);const r=i.has(o)?new Map([[o,i.get(o)]]):new Map;return t.select({...s,id:o,selected:r})},in:(a,i,o)=>{let s=new Map;return a!=null&&a.length&&(s=t.in(a.slice(0,1),i,o)),s},out:(a,i,o)=>t.out(a,i,o)}},Ko=e=>{const t=_t(e);return{select:a=>{let{id:i,selected:o,children:s,...r}=a;return i=ye(i),s.has(i)?o:t.select({id:i,selected:o,children:s,...r})},in:t.in,out:t.out}},Wo=e=>{const t=Vn(e);return{select:a=>{let{id:i,selected:o,children:s,...r}=a;return i=ye(i),s.has(i)?o:t.select({id:i,selected:o,children:s,...r})},in:t.in,out:t.out}},qo=e=>{const t={select:n=>{let{id:a,value:i,selected:o,children:s,parents:r}=n;a=ye(a);const d=new Map(o),f=[a];for(;f.length;){const u=f.shift();o.set(u,i?"on":"off"),s.has(u)&&f.push(...s.get(u))}let l=r.get(a);for(;l;){const u=s.get(l),v=u.every(p=>o.get(p)==="on"),g=u.every(p=>!o.has(p)||o.get(p)==="off");o.set(l,v?"on":g?"off":"indeterminate"),l=r.get(l)}return e&&!i&&Array.from(o.entries()).reduce((v,g)=>{let[p,C]=g;return C==="on"?[...v,p]:v},[]).length===0?d:o},in:(n,a,i)=>{let o=new Map;for(const s of n||[])o=t.select({id:s,value:!0,selected:new Map(o),children:a,parents:i});return o},out:(n,a)=>{const i=[];for(const[o,s]of n.entries())s==="on"&&!a.has(o)&&i.push(o);return i}};return t},_e=Symbol.for("vuetify:nested"),Pn={id:D(),root:{register:()=>null,unregister:()=>null,parents:O(new Map),children:O(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:O(new Set),selected:O(new Map),selectedValues:O([])}},Uo=N({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),zo=e=>{let t=!1;const n=O(new Map),a=O(new Map),i=Ne(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),o=m(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Wo(e.mandatory);case"leaf":return Ko(e.mandatory);case"independent":return _t(e.mandatory);case"single-independent":return Vn(e.mandatory);case"classic":default:return qo(e.mandatory)}}),s=m(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Fo;case"single":return jo;case"multiple":default:return En}}),r=Ne(e,"selected",e.selected,u=>o.value.in(u,n.value,a.value),u=>o.value.out(u,n.value,a.value));pe(()=>{t=!0});function d(u){const v=[];let g=u;for(;g!=null;)v.unshift(g),g=a.value.get(g);return v}const f=qe("nested"),l={id:D(),root:{opened:i,selected:r,selectedValues:m(()=>{const u=[];for(const[v,g]of r.value.entries())g==="on"&&u.push(v);return u}),register:(u,v,g)=>{v&&u!==v&&a.value.set(u,v),g&&n.value.set(u,[]),v!=null&&n.value.set(v,[...n.value.get(v)||[],u])},unregister:u=>{if(t)return;n.value.delete(u);const v=a.value.get(u);if(v){const g=n.value.get(v)??[];n.value.set(v,g.filter(p=>p!==u))}a.value.delete(u),i.value.delete(u)},open:(u,v,g)=>{f.emit("click:open",{id:u,value:v,path:d(u),event:g});const p=s.value.open({id:u,value:v,opened:new Set(i.value),children:n.value,parents:a.value,event:g});p&&(i.value=p)},openOnSelect:(u,v,g)=>{const p=s.value.select({id:u,value:v,selected:new Map(r.value),opened:new Set(i.value),children:n.value,parents:a.value,event:g});p&&(i.value=p)},select:(u,v,g)=>{f.emit("click:select",{id:u,value:v,path:d(u),event:g});const p=o.value.select({id:u,value:v,selected:new Map(r.value),children:n.value,parents:a.value,event:g});p&&(r.value=p),l.root.openOnSelect(u,v,g)},children:n,parents:a}};return me(_e,l),l.root},Ln=(e,t)=>{const n=ge(_e,Pn),a=Symbol(sn()),i=m(()=>e.value!==void 0?e.value:a),o={...n,id:i,open:(s,r)=>n.root.open(i.value,s,r),openOnSelect:(s,r)=>n.root.openOnSelect(i.value,s,r),isOpen:m(()=>n.root.opened.value.has(i.value)),parent:m(()=>n.root.parents.value.get(i.value)),select:(s,r)=>n.root.select(i.value,s,r),isSelected:m(()=>n.root.selected.value.get(ye(i.value))==="on"),isIndeterminate:m(()=>n.root.selected.value.get(i.value)==="indeterminate"),isLeaf:m(()=>!n.root.children.value.get(i.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(i.value,n.id.value,t),pe(()=>{!n.isGroupActivator&&n.root.unregister(i.value)}),t&&me(_e,o),o},Go=()=>{const e=ge(_e,Pn);me(_e,{...e,isGroupActivator:!0})},Yo=ba({name:"VListGroupActivator",setup(e,t){let{slots:n}=t;return Go(),()=>{var a;return(a=n.default)==null?void 0:a.call(n)}}}),Zo=N({activeColor:String,baseColor:String,color:String,collapseIcon:{type:U,default:"$collapse"},expandIcon:{type:U,default:"$expand"},prependIcon:U,appendIcon:U,fluid:Boolean,subgroup:Boolean,title:String,value:null,...W(),...ne()},"VListGroup"),Ft=F()({name:"VListGroup",props:Zo(),setup(e,t){let{slots:n}=t;const{isOpen:a,open:i,id:o}=Ln(B(e,"value"),!0),s=m(()=>`v-list-group--id-${String(o.value)}`),r=An(),{isBooted:d}=Ct();function f(g){i(!a.value,g)}const l=m(()=>({onClick:f,class:"v-list-group__header",id:s.value})),u=m(()=>a.value?e.collapseIcon:e.expandIcon),v=m(()=>({VListItem:{active:a.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&u.value,appendIcon:e.appendIcon||!e.subgroup&&u.value,title:e.title,value:e.value}}));return K(()=>c(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value},e.class],style:e.style},{default:()=>[n.activator&&c(X,{defaults:v.value},{default:()=>[c(Yo,null,{default:()=>[n.activator({props:l.value,isOpen:a.value})]})]}),c(io,{transition:{component:wn},disabled:!d.value},{default:()=>{var g;return[ht(c("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(g=n.default)==null?void 0:g.call(n)]),[[ya,a.value]])]}})]})),{}}});const Jo=Ve("v-list-item-subtitle"),Xo=Ve("v-list-item-title"),Qo=N({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:U,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:U,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:Nt(),onClickOnce:Nt(),...Pe(),...W(),...ze(),...wt(),...Le(),...De(),...gn(),...ne(),...Ae(),...St({variant:"text"})},"VListItem"),dt=F()({name:"VListItem",directives:{Ripple:mn},props:Qo(),emits:{click:e=>!0},setup(e,t){let{attrs:n,slots:a,emit:i}=t;const o=hn(e,n),s=m(()=>e.value===void 0?o.href.value:e.value),{select:r,isSelected:d,isIndeterminate:f,isGroupActivator:l,root:u,parent:v,openOnSelect:g}=Ln(s,!1),p=An(),C=m(()=>{var E;return e.active!==!1&&(e.active||((E=o.isActive)==null?void 0:E.value)||d.value)}),w=m(()=>e.link!==!1&&o.isLink.value),k=m(()=>!e.disabled&&e.link!==!1&&(e.link||o.isClickable.value||e.value!=null&&!!p)),T=m(()=>e.rounded||e.nav),A=m(()=>e.color??e.activeColor),M=m(()=>({color:C.value?A.value??e.baseColor:e.baseColor,variant:e.variant}));z(()=>{var E;return(E=o.isActive)==null?void 0:E.value},E=>{E&&v.value!=null&&u.open(v.value,!0),E&&g(E)},{immediate:!0});const{themeClasses:I}=Ee(e),{borderClasses:h}=Me(e),{colorClasses:b,colorStyles:y,variantClasses:S}=pn(M),{densityClasses:_}=It(e),{dimensionStyles:x}=kt(e),{elevationClasses:H}=xe(e),{roundedClasses:j}=Be(T),G=m(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),ee=m(()=>({isActive:C.value,select:r,isSelected:d.value,isIndeterminate:f.value}));function be(E){var L;i("click",E),!(l||!k.value)&&((L=o.navigate)==null||L.call(o,E),e.value!=null&&r(!d.value,E))}function ue(E){(E.key==="Enter"||E.key===" ")&&(E.preventDefault(),be(E))}return K(()=>{const E=w.value?"a":e.tag,L=a.title||e.title,de=a.subtitle||e.subtitle,ae=!!(e.appendAvatar||e.appendIcon),q=!!(ae||a.append),Y=!!(e.prependAvatar||e.prependIcon),we=!!(Y||a.prepend);return p==null||p.updateHasPrepend(we),e.activeColor&&wa("active-color",["color","base-color"]),ht(c(E,{class:["v-list-item",{"v-list-item--active":C.value,"v-list-item--disabled":e.disabled,"v-list-item--link":k.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!we&&(p==null?void 0:p.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&C.value},I.value,h.value,b.value,_.value,H.value,G.value,j.value,S.value,e.class],style:[y.value,x.value,e.style],href:o.href.value,tabindex:k.value?p?-2:0:void 0,onClick:be,onKeydown:k.value&&!w.value&&ue},{default:()=>{var Se;return[bn(k.value||C.value,"v-list-item"),we&&c("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?c(X,{key:"prepend-defaults",disabled:!Y,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var V;return[(V=a.prepend)==null?void 0:V.call(a,ee.value)]}}):c($e,null,[e.prependAvatar&&c(Fe,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&c(oe,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),c("div",{class:"v-list-item__spacer"},null)]),c("div",{class:"v-list-item__content","data-no-activator":""},[L&&c(Xo,{key:"title"},{default:()=>{var V;return[((V=a.title)==null?void 0:V.call(a,{title:e.title}))??e.title]}}),de&&c(Jo,{key:"subtitle"},{default:()=>{var V;return[((V=a.subtitle)==null?void 0:V.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),(Se=a.default)==null?void 0:Se.call(a,ee.value)]),q&&c("div",{key:"append",class:"v-list-item__append"},[a.append?c(X,{key:"append-defaults",disabled:!ae,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var V;return[(V=a.append)==null?void 0:V.call(a,ee.value)]}}):c($e,null,[e.appendIcon&&c(oe,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&c(Fe,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),c("div",{class:"v-list-item__spacer"},null)])]}}),[[rn("ripple"),k.value&&e.ripple]])}),{}}}),ei=N({color:String,inset:Boolean,sticky:Boolean,title:String,...W(),...ne()},"VListSubheader"),ti=F()({name:"VListSubheader",props:ei(),setup(e,t){let{slots:n}=t;const{textColorClasses:a,textColorStyles:i}=so(B(e,"color"));return K(()=>{const o=!!(n.default||e.title);return c(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value,e.class],style:[{textColorStyles:i},e.style]},{default:()=>{var s;return[o&&c("div",{class:"v-list-subheader__text"},[((s=n.default)==null?void 0:s.call(n))??e.title])]}})}),{}}}),ni=N({items:Array},"VListChildren"),Dn=F()({name:"VListChildren",props:ni(),setup(e,t){let{slots:n}=t;return Tn(),()=>{var a,i;return((a=n.default)==null?void 0:a.call(n))??((i=e.items)==null?void 0:i.map(o=>{var g,p;let{children:s,props:r,type:d,raw:f}=o;if(d==="divider")return((g=n.divider)==null?void 0:g.call(n,{props:r}))??c(ro,r,null);if(d==="subheader")return((p=n.subheader)==null?void 0:p.call(n,{props:r}))??c(ti,r,null);const l={subtitle:n.subtitle?C=>{var w;return(w=n.subtitle)==null?void 0:w.call(n,{...C,item:f})}:void 0,prepend:n.prepend?C=>{var w;return(w=n.prepend)==null?void 0:w.call(n,{...C,item:f})}:void 0,append:n.append?C=>{var w;return(w=n.append)==null?void 0:w.call(n,{...C,item:f})}:void 0,title:n.title?C=>{var w;return(w=n.title)==null?void 0:w.call(n,{...C,item:f})}:void 0},[u,v]=Ft.filterProps(r);return s?c(Ft,Ce({value:r==null?void 0:r.value},u),{activator:C=>{let{props:w}=C;return n.header?n.header({props:{...r,...w}}):c(dt,Ce(r,w),l)},default:()=>c(Dn,{items:s},n)}):n.item?n.item({props:r}):c(dt,r,l)}))}}}),ai=N({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"list-items");function oi(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function ii(e,t){const n=ke(t,e.itemType,"item"),a=oi(t)?t:ke(t,e.itemTitle),i=ke(t,e.itemValue,void 0),o=ke(t,e.itemChildren),s=e.itemProps===!0?Ia(t,["children"])[1]:ke(t,e.itemProps),r={title:a,value:i,...s};return{type:n,title:r.title,value:r.value,props:r,children:n==="item"&&o?Mn(e,o):void 0,raw:t}}function Mn(e,t){const n=[];for(const a of t)n.push(ii(e,a));return n}function si(e){return{items:m(()=>Mn(e,e.items))}}const ri=N({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...Uo({selectStrategy:"single-leaf",openStrategy:"list"}),...Pe(),...W(),...ze(),...wt(),...Le(),itemType:{type:String,default:"type"},...ai(),...De(),...ne(),...Ae(),...St({variant:"text"})},"VList"),li=F()({name:"VList",props:ri(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,t){let{slots:n}=t;const{items:a}=si(e),{themeClasses:i}=Ee(e),{backgroundColorClasses:o,backgroundColorStyles:s}=Ke(B(e,"bgColor")),{borderClasses:r}=Me(e),{densityClasses:d}=It(e),{dimensionStyles:f}=kt(e),{elevationClasses:l}=xe(e),{roundedClasses:u}=Be(e),{open:v,select:g}=zo(e),p=m(()=>e.lines?`v-list--${e.lines}-line`:void 0),C=B(e,"activeColor"),w=B(e,"baseColor"),k=B(e,"color");Tn(),Ue({VListGroup:{activeColor:C,baseColor:w,color:k},VListItem:{activeClass:B(e,"activeClass"),activeColor:C,baseColor:w,color:k,density:B(e,"density"),disabled:B(e,"disabled"),lines:B(e,"lines"),nav:B(e,"nav"),variant:B(e,"variant")}});const T=D(!1),A=O();function M(S){T.value=!0}function I(S){T.value=!1}function h(S){var _;!T.value&&!(S.relatedTarget&&((_=A.value)!=null&&_.contains(S.relatedTarget)))&&y()}function b(S){if(A.value){if(S.key==="ArrowDown")y("next");else if(S.key==="ArrowUp")y("prev");else if(S.key==="Home")y("first");else if(S.key==="End")y("last");else return;S.preventDefault()}}function y(S){if(A.value)return Sa(A.value,S)}return K(()=>c(e.tag,{ref:A,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},i.value,o.value,r.value,d.value,l.value,p.value,u.value,e.class],style:[s.value,f.value,e.style],tabindex:e.disabled||T.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:M,onFocusout:I,onFocus:h,onKeydown:b},{default:()=>[c(Dn,{items:a.value},n)]})),{open:v,select:g,focus:y}}});function ci(e){let{rootEl:t,isSticky:n,layoutItemStyles:a}=e;const i=D(!1),o=D(0),s=m(()=>{const f=typeof i.value=="boolean"?"top":i.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,i.value?{[f]:J(o.value)}:{top:a.value.top}]});he(()=>{z(n,f=>{f?window.addEventListener("scroll",d,{passive:!0}):window.removeEventListener("scroll",d)},{immediate:!0})}),pe(()=>{window.removeEventListener("scroll",d)});let r=0;function d(){const f=r>window.scrollY?"up":"down",l=t.value.getBoundingClientRect(),u=parseFloat(a.value.top??0),v=window.scrollY-Math.max(0,o.value-u),g=l.height+Math.max(o.value,u)-window.scrollY-window.innerHeight,p=parseFloat(getComputedStyle(t.value).getPropertyValue("--v-body-scroll-y"))||0;l.height<window.innerHeight-u?(i.value="top",o.value=u):f==="up"&&i.value==="bottom"||f==="down"&&i.value==="top"?(o.value=window.scrollY+l.top-p,i.value=!0):f==="down"&&g<=0?(o.value=0,i.value="bottom"):f==="up"&&v<=0&&(p?i.value!=="top"&&(o.value=-v+p+u,i.value="top"):(o.value=l.top+v,i.value="top")),r=window.scrollY}return{isStuck:i,stickyStyles:s}}const ui=100,di=20;function Kt(e){const t=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*t}function Wt(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let t=0;for(let n=e.length-1;n>0;n--){if(e[n].t===e[n-1].t)continue;const a=Kt(t),i=(e[n].d-e[n-1].d)/(e[n].t-e[n-1].t);t+=(i-a)*Math.abs(i),n===e.length-1&&(t*=.5)}return Kt(t)*1e3}function fi(){const e={};function t(i){Array.from(i.changedTouches).forEach(o=>{(e[o.identifier]??(e[o.identifier]=new ka(di))).push([i.timeStamp,o])})}function n(i){Array.from(i.changedTouches).forEach(o=>{delete e[o.identifier]})}function a(i){var f;const o=(f=e[i])==null?void 0:f.values().reverse();if(!o)throw new Error(`No samples for touch id ${i}`);const s=o[0],r=[],d=[];for(const l of o){if(s[0]-l[0]>ui)break;r.push({t:l[0],d:l[1].clientX}),d.push({t:l[0],d:l[1].clientY})}return{x:Wt(r),y:Wt(d),get direction(){const{x:l,y:u}=this,[v,g]=[Math.abs(l),Math.abs(u)];return v>g&&l>=0?"right":v>g&&l<=0?"left":g>v&&u>=0?"down":g>v&&u<=0?"up":vi()}}}return{addMovement:t,endTouch:n,getVelocity:a}}function vi(){throw new Error}function gi(e){let{isActive:t,isTemporary:n,width:a,touchless:i,position:o}=e;he(()=>{window.addEventListener("touchstart",k,{passive:!0}),window.addEventListener("touchmove",T,{passive:!1}),window.addEventListener("touchend",A,{passive:!0})}),pe(()=>{window.removeEventListener("touchstart",k),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",A)});const s=m(()=>["left","right"].includes(o.value)),{addMovement:r,endTouch:d,getVelocity:f}=fi();let l=!1;const u=D(!1),v=D(0),g=D(0);let p;function C(I,h){return(o.value==="left"?I:o.value==="right"?document.documentElement.clientWidth-I:o.value==="top"?I:o.value==="bottom"?document.documentElement.clientHeight-I:fe())-(h?a.value:0)}function w(I){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const b=o.value==="left"?(I-g.value)/a.value:o.value==="right"?(document.documentElement.clientWidth-I-g.value)/a.value:o.value==="top"?(I-g.value)/a.value:o.value==="bottom"?(document.documentElement.clientHeight-I-g.value)/a.value:fe();return h?Math.max(0,Math.min(1,b)):b}function k(I){if(i.value)return;const h=I.changedTouches[0].clientX,b=I.changedTouches[0].clientY,y=25,S=o.value==="left"?h<y:o.value==="right"?h>document.documentElement.clientWidth-y:o.value==="top"?b<y:o.value==="bottom"?b>document.documentElement.clientHeight-y:fe(),_=t.value&&(o.value==="left"?h<a.value:o.value==="right"?h>document.documentElement.clientWidth-a.value:o.value==="top"?b<a.value:o.value==="bottom"?b>document.documentElement.clientHeight-a.value:fe());(S||_||t.value&&n.value)&&(l=!0,p=[h,b],g.value=C(s.value?h:b,t.value),v.value=w(s.value?h:b),d(I),r(I))}function T(I){const h=I.changedTouches[0].clientX,b=I.changedTouches[0].clientY;if(l){if(!I.cancelable){l=!1;return}const S=Math.abs(h-p[0]),_=Math.abs(b-p[1]);(s.value?S>_&&S>3:_>S&&_>3)?(u.value=!0,l=!1):(s.value?_:S)>3&&(l=!1)}if(!u.value)return;I.preventDefault(),r(I);const y=w(s.value?h:b,!1);v.value=Math.max(0,Math.min(1,y)),y>1?g.value=C(s.value?h:b,!0):y<0&&(g.value=C(s.value?h:b,!1))}function A(I){if(l=!1,!u.value)return;r(I),u.value=!1;const h=f(I.changedTouches[0].identifier),b=Math.abs(h.x),y=Math.abs(h.y);(s.value?b>y&&b>400:y>b&&y>3)?t.value=h.direction===({left:"right",right:"left",top:"down",bottom:"up"}[o.value]||fe()):t.value=v.value>.5}const M=m(()=>u.value?{transform:o.value==="left"?`translateX(calc(-100% + ${v.value*a.value}px))`:o.value==="right"?`translateX(calc(100% - ${v.value*a.value}px))`:o.value==="top"?`translateY(calc(-100% + ${v.value*a.value}px))`:o.value==="bottom"?`translateY(calc(100% - ${v.value*a.value}px))`:fe(),transition:"none"}:void 0);return{isDragging:u,dragProgress:v,dragStyles:M}}function fe(){throw new Error}function mi(){const t=qe("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const pi=["start","end","left","right","top","bottom"],hi=N({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>pi.includes(e)},sticky:Boolean,...Pe(),...W(),...Le(),...In(),...De(),...ne({tag:"nav"}),...Ae()},"VNavigationDrawer"),yi=F()({name:"VNavigationDrawer",props:hi(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,t){let{attrs:n,emit:a,slots:i}=t;const{isRtl:o}=ln(),{themeClasses:s}=Ee(e),{borderClasses:r}=Me(e),{backgroundColorClasses:d,backgroundColorStyles:f}=Ke(B(e,"color")),{elevationClasses:l}=xe(e),{mobile:u}=Ca(),{roundedClasses:v}=Be(e),g=lo(),p=Ne(e,"modelValue",null,L=>!!L),{ssrBootStyles:C}=Ct(),{scopeId:w}=mi(),k=O(),T=D(!1),A=m(()=>e.rail&&e.expandOnHover&&T.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),M=m(()=>no(e.location,o.value)),I=m(()=>!e.permanent&&(u.value||e.temporary)),h=m(()=>e.sticky&&!I.value&&M.value!=="bottom");e.expandOnHover&&e.rail!=null&&z(T,L=>a("update:rail",!L)),e.disableResizeWatcher||z(I,L=>!e.permanent&&_a(()=>p.value=!L)),!e.disableRouteWatcher&&g&&z(g.currentRoute,()=>I.value&&(p.value=!1)),z(()=>e.permanent,L=>{L&&(p.value=!0)}),Ta(()=>{e.modelValue!=null||I.value||(p.value=e.permanent||!u.value)});const{isDragging:b,dragProgress:y,dragStyles:S}=gi({isActive:p,isTemporary:I,width:A,touchless:B(e,"touchless"),position:M}),_=m(()=>{const L=I.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):A.value;return b.value?L*y.value:L}),{layoutItemStyles:x,layoutItemScrimStyles:H}=kn({id:e.name,order:m(()=>parseInt(e.order,10)),position:M,layoutSize:_,elementSize:A,active:m(()=>p.value||b.value),disableTransitions:m(()=>b.value),absolute:m(()=>e.absolute||h.value&&typeof j.value!="string")}),{isStuck:j,stickyStyles:G}=ci({rootEl:k,isSticky:h,layoutItemStyles:x}),ee=Ke(m(()=>typeof e.scrim=="string"?e.scrim:null)),be=m(()=>({...b.value?{opacity:y.value*.2,transition:"none"}:void 0,...H.value}));Ue({VList:{bgColor:"transparent"}});function ue(){T.value=!0}function E(){T.value=!1}return K(()=>{const L=i.image||e.image;return c($e,null,[c(e.tag,Ce({ref:k,onMouseenter:ue,onMouseleave:E,class:["v-navigation-drawer",`v-navigation-drawer--${M.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":T.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":I.value,"v-navigation-drawer--active":p.value,"v-navigation-drawer--sticky":h.value},s.value,d.value,r.value,l.value,v.value,e.class],style:[f.value,x.value,S.value,C.value,G.value,e.style]},w,n),{default:()=>{var de,ae,q,Y;return[L&&c("div",{key:"image",class:"v-navigation-drawer__img"},[i.image?(de=i.image)==null?void 0:de.call(i,{image:e.image}):c("img",{src:e.image,alt:""},null)]),i.prepend&&c("div",{class:"v-navigation-drawer__prepend"},[(ae=i.prepend)==null?void 0:ae.call(i)]),c("div",{class:"v-navigation-drawer__content"},[(q=i.default)==null?void 0:q.call(i)]),i.append&&c("div",{class:"v-navigation-drawer__append"},[(Y=i.append)==null?void 0:Y.call(i)])]}}),c(Aa,{name:"fade-transition"},{default:()=>[I.value&&(b.value||p.value)&&!!e.scrim&&c("div",Ce({class:["v-navigation-drawer__scrim",ee.backgroundColorClasses.value],style:[be.value,ee.backgroundColorStyles.value],onClick:()=>p.value=!1},w),null)]})])}),{isStuck:j}}}),bi=e=>(cn("data-v-d62fbf4d"),e=e(),un(),e),wi=bi(()=>P("img",{src:To,alt:"icono menu"},null,-1)),Si={__name:"NavBar",setup(e){Ea();const t=O(!1);O(null);const n=O([{name:"Inicio",to:"/"},{name:"Cotización",to:"/dolar"},{name:"Política",to:"/politica"},{name:"Economía",to:"/economia"},{name:"Deportes",to:"/deportes"},{name:"Sociedad",to:"/sociedad"},{name:"Policiales",to:"/policiales"},{name:"Tendencias",to:"/tendencias"},{name:"Loteria",to:"/loteria"},{name:"Ayuda a la comunidad",to:"/ayuda"},{name:"Contacto",to:"#contacto"}]),a=async i=>{i.includes("#"),location.href=i};return(i,o)=>(ve(),$t(wo,{class:"navbar"},{default:$(()=>[c(Ho,null,{default:$(()=>[c($o,{color:"grey-darken-4",dark:"",prominent:""},{default:$(()=>[c(Cn,{class:"ml-4 pointer",onClick:o[0]||(o[0]=s=>a("/"))}),c(So),c(vn,{"aria-label":"Abre ventana de navegacion",variant:"text",onClick:o[1]||(o[1]=Va(s=>t.value=!t.value,["stop"]))},{default:$(()=>[c(oe,null,{default:$(()=>[wi]),_:1})]),_:1})]),_:1}),c(yi,{modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=s=>t.value=s),temporary:"",location:"right"},{default:$(()=>[c(li,{density:"compact",nav:"",role:"listbox"},{default:$(()=>[(ve(!0),Oe($e,null,Pa(n.value,s=>(ve(),$t(dt,{"aria-label":`Ir a ${s.name}`,role:"option",onClick:r=>a(s.to),title:s.name,value:s.name,tabindex:"0"},null,8,["aria-label","onClick","title","value"]))),256))]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},Ii=yt(Si,[["__scopeId","data-v-d62fbf4d"]]),ki=(e,t)=>t.some(n=>e instanceof n);let qt,Ut;function Ci(){return qt||(qt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _i(){return Ut||(Ut=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xn=new WeakMap,ft=new WeakMap,Bn=new WeakMap,Je=new WeakMap,Tt=new WeakMap;function Ti(e){const t=new Promise((n,a)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(te(e.result)),i()},s=()=>{a(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&xn.set(n,e)}).catch(()=>{}),Tt.set(t,e),t}function Ai(e){if(ft.has(e))return;const t=new Promise((n,a)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{a(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});ft.set(e,t)}let vt={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ft.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Bn.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return te(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ei(e){vt=e(vt)}function Vi(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const a=e.call(Xe(this),t,...n);return Bn.set(a,t.sort?t.sort():[t]),te(a)}:_i().includes(e)?function(...t){return e.apply(Xe(this),t),te(xn.get(this))}:function(...t){return te(e.apply(Xe(this),t))}}function Pi(e){return typeof e=="function"?Vi(e):(e instanceof IDBTransaction&&Ai(e),ki(e,Ci())?new Proxy(e,vt):e)}function te(e){if(e instanceof IDBRequest)return Ti(e);if(Je.has(e))return Je.get(e);const t=Pi(e);return t!==e&&(Je.set(e,t),Tt.set(t,e)),t}const Xe=e=>Tt.get(e);function Li(e,t,{blocked:n,upgrade:a,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),r=te(s);return a&&s.addEventListener("upgradeneeded",d=>{a(te(s.result),d.oldVersion,d.newVersion,te(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),r.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",()=>i())}).catch(()=>{}),r}const Di=["get","getKey","getAll","getAllKeys","count"],Mi=["put","add","delete","clear"],Qe=new Map;function zt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Qe.get(t))return Qe.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,i=Mi.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(i||Di.includes(n)))return;const o=async function(s,...r){const d=this.transaction(s,i?"readwrite":"readonly");let f=d.store;return a&&(f=f.index(r.shift())),(await Promise.all([f[n](...r),i&&d.done]))[0]};return Qe.set(t,o),o}Ei(e=>({...e,get:(t,n,a)=>zt(t,n)||e.get(t,n,a),has:(t,n)=>!!zt(t,n)||e.has(t,n)}));const On="@firebase/installations",At="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=1e4,$n=`w:${At}`,Rn="FIS_v2",xi="https://firebaseinstallations.googleapis.com/v1",Bi=60*60*1e3,Oi="installations",Ni="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},se=new dn(Oi,Ni,$i);function Hn(e){return e instanceof La&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn({projectId:e}){return`${xi}/projects/${e}/installations`}function Fn(e){return{token:e.token,requestStatus:2,expiresIn:Hi(e.expiresIn),creationTime:Date.now()}}async function Kn(e,t){const a=(await t.json()).error;return se.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function Wn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Ri(e,{refreshToken:t}){const n=Wn(e);return n.append("Authorization",ji(t)),n}async function qn(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Hi(e){return Number(e.replace("s","000"))}function ji(e){return`${Rn} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=jn(e),i=Wn(e),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const s={fid:n,authVersion:Rn,appId:e.appId,sdkVersion:$n},r={method:"POST",headers:i,body:JSON.stringify(s)},d=await qn(()=>fetch(a,r));if(d.ok){const f=await d.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:Fn(f.authToken)}}else throw await Kn("Create Installation",d)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=/^[cdef][\w-]{21}$/,gt="";function qi(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Ui(e);return Wi.test(n)?n:gt}catch{return gt}}function Ui(e){return Ki(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new Map;function Gn(e,t){const n=Ge(e);Yn(n,t),zi(n,t)}function Yn(e,t){const n=zn.get(e);if(n)for(const a of n)a(t)}function zi(e,t){const n=Gi();n&&n.postMessage({key:e,fid:t}),Yi()}let ie=null;function Gi(){return!ie&&"BroadcastChannel"in self&&(ie=new BroadcastChannel("[Firebase] FID Change"),ie.onmessage=e=>{Yn(e.data.key,e.data.fid)}),ie}function Yi(){zn.size===0&&ie&&(ie.close(),ie=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="firebase-installations-database",Ji=1,re="firebase-installations-store";let et=null;function Et(){return et||(et=Li(Zi,Ji,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(re)}}})),et}async function We(e,t){const n=Ge(e),i=(await Et()).transaction(re,"readwrite"),o=i.objectStore(re),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&Gn(e,t.fid),t}async function Zn(e){const t=Ge(e),a=(await Et()).transaction(re,"readwrite");await a.objectStore(re).delete(t),await a.done}async function Ye(e,t){const n=Ge(e),i=(await Et()).transaction(re,"readwrite"),o=i.objectStore(re),s=await o.get(n),r=t(s);return r===void 0?await o.delete(n):await o.put(r,n),await i.done,r&&(!s||s.fid!==r.fid)&&Gn(e,r.fid),r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(e){let t;const n=await Ye(e.appConfig,a=>{const i=Xi(a),o=Qi(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===gt?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Xi(e){const t=e||{fid:qi(),registrationStatus:0};return Jn(t)}function Qi(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(se.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=es(e,n);return{installationEntry:n,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ts(e)}:{installationEntry:t}}async function es(e,t){try{const n=await Fi(e,t);return We(e.appConfig,n)}catch(n){throw Hn(n)&&n.customData.serverCode===409?await Zn(e.appConfig):await We(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ts(e){let t=await Gt(e.appConfig);for(;t.registrationStatus===1;)await Un(100),t=await Gt(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await Vt(e);return a||n}return t}function Gt(e){return Ye(e,t=>{if(!t)throw se.create("installation-not-found");return Jn(t)})}function Jn(e){return ns(e)?{fid:e.fid,registrationStatus:0}:e}function ns(e){return e.registrationStatus===1&&e.registrationTime+Nn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as({appConfig:e,heartbeatServiceProvider:t},n){const a=os(e,n),i=Ri(e,n),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const s={installation:{sdkVersion:$n,appId:e.appId}},r={method:"POST",headers:i,body:JSON.stringify(s)},d=await qn(()=>fetch(a,r));if(d.ok){const f=await d.json();return Fn(f)}else throw await Kn("Generate Auth Token",d)}function os(e,{fid:t}){return`${jn(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(e,t=!1){let n;const a=await Ye(e.appConfig,o=>{if(!Xn(o))throw se.create("not-registered");const s=o.authToken;if(!t&&rs(s))return o;if(s.requestStatus===1)return n=is(e,t),o;{if(!navigator.onLine)throw se.create("app-offline");const r=cs(o);return n=ss(e,r),r}});return n?await n:a.authToken}async function is(e,t){let n=await Yt(e.appConfig);for(;n.authToken.requestStatus===1;)await Un(100),n=await Yt(e.appConfig);const a=n.authToken;return a.requestStatus===0?Pt(e,t):a}function Yt(e){return Ye(e,t=>{if(!Xn(t))throw se.create("not-registered");const n=t.authToken;return us(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ss(e,t){try{const n=await as(e,t),a=Object.assign(Object.assign({},t),{authToken:n});return await We(e.appConfig,a),n}catch(n){if(Hn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Zn(e.appConfig);else{const a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await We(e.appConfig,a)}throw n}}function Xn(e){return e!==void 0&&e.registrationStatus===2}function rs(e){return e.requestStatus===2&&!ls(e)}function ls(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Bi}function cs(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function us(e){return e.requestStatus===1&&e.requestTime+Nn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(e){const t=e,{installationEntry:n,registrationPromise:a}=await Vt(t);return a?a.catch(console.error):Pt(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(e,t=!1){const n=e;return await vs(n),(await Pt(n,t)).token}async function vs(e){const{registrationPromise:t}=await Vt(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(e){if(!e||!e.options)throw tt("App Configuration");if(!e.name)throw tt("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw tt(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function tt(e){return se.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="installations",ms="installations-internal",ps=e=>{const t=e.getProvider("app").getImmediate(),n=gs(t),a=bt(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},hs=e=>{const t=e.getProvider("app").getImmediate(),n=bt(t,Qn).getImmediate();return{getId:()=>ds(n),getToken:i=>fs(n,i)}};function ys(){He(new je(Qn,ps,"PUBLIC")),He(new je(ms,hs,"PRIVATE"))}ys();Re(On,At);Re(On,At,"esm2017");const bs=(e,t)=>t.some(n=>e instanceof n);let Zt,Jt;function ws(){return Zt||(Zt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ss(){return Jt||(Jt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ea=new WeakMap,mt=new WeakMap,ta=new WeakMap,nt=new WeakMap,Lt=new WeakMap;function Is(e){const t=new Promise((n,a)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Q(e.result)),i()},s=()=>{a(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&ea.set(n,e)}).catch(()=>{}),Lt.set(t,e),t}function ks(e){if(mt.has(e))return;const t=new Promise((n,a)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{a(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});mt.set(e,t)}let pt={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return mt.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ta.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Q(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Cs(e){pt=e(pt)}function _s(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const a=e.call(at(this),t,...n);return ta.set(a,t.sort?t.sort():[t]),Q(a)}:Ss().includes(e)?function(...t){return e.apply(at(this),t),Q(ea.get(this))}:function(...t){return Q(e.apply(at(this),t))}}function Ts(e){return typeof e=="function"?_s(e):(e instanceof IDBTransaction&&ks(e),bs(e,ws())?new Proxy(e,pt):e)}function Q(e){if(e instanceof IDBRequest)return Is(e);if(nt.has(e))return nt.get(e);const t=Ts(e);return t!==e&&(nt.set(e,t),Lt.set(t,e)),t}const at=e=>Lt.get(e);function na(e,t,{blocked:n,upgrade:a,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),r=Q(s);return a&&s.addEventListener("upgradeneeded",d=>{a(Q(s.result),d.oldVersion,d.newVersion,Q(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),r.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",()=>i())}).catch(()=>{}),r}function ot(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",()=>t()),Q(n).then(()=>{})}const As=["get","getKey","getAll","getAllKeys","count"],Es=["put","add","delete","clear"],it=new Map;function Xt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(it.get(t))return it.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,i=Es.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(i||As.includes(n)))return;const o=async function(s,...r){const d=this.transaction(s,i?"readwrite":"readonly");let f=d.store;return a&&(f=f.index(r.shift())),(await Promise.all([f[n](...r),i&&d.done]))[0]};return it.set(t,o),o}Cs(e=>({...e,get:(t,n,a)=>Xt(t,n)||e.get(t,n,a),has:(t,n)=>!!Xt(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="/firebase-messaging-sw.js",Ps="/firebase-cloud-messaging-push-scope",aa="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ls="https://fcmregistrations.googleapis.com/v1",oa="google.c.a.c_id",Ds="google.c.a.c_l",Ms="google.c.a.ts",xs="google.c.a.e";var Qt;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Qt||(Qt={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Te;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(Te||(Te={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Bs(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),a=atob(n),i=new Uint8Array(a.length);for(let o=0;o<a.length;++o)i[o]=a.charCodeAt(o);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="fcm_token_details_db",Os=5,en="fcm_token_object_Store";async function Ns(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(st))return null;let t=null;return(await na(st,Os,{upgrade:async(a,i,o,s)=>{var r;if(i<2||!a.objectStoreNames.contains(en))return;const d=s.objectStore(en),f=await d.index("fcmSenderId").get(e);if(await d.clear(),!!f){if(i===2){const l=f;if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:(r=l.createTime)!==null&&r!==void 0?r:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:Z(l.vapidKey)}}}else if(i===3){const l=f;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:Z(l.auth),p256dh:Z(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:Z(l.vapidKey)}}}else if(i===4){const l=f;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:Z(l.auth),p256dh:Z(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:Z(l.vapidKey)}}}}}})).close(),await ot(st),await ot("fcm_vapid_details_db"),await ot("undefined"),$s(t)?t:null}function $s(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="firebase-messaging-database",Hs=1,le="firebase-messaging-store";let rt=null;function Dt(){return rt||(rt=na(Rs,Hs,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(le)}}})),rt}async function ia(e){const t=xt(e),a=await(await Dt()).transaction(le).objectStore(le).get(t);if(a)return a;{const i=await Ns(e.appConfig.senderId);if(i)return await Mt(e,i),i}}async function Mt(e,t){const n=xt(e),i=(await Dt()).transaction(le,"readwrite");return await i.objectStore(le).put(t,n),await i.done,t}async function js(e){const t=xt(e),a=(await Dt()).transaction(le,"readwrite");await a.objectStore(le).delete(t),await a.done}function xt({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},R=new dn("messaging","Messaging",Fs);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ks(e,t){const n=await Ot(e),a=ra(t),i={method:"POST",headers:n,body:JSON.stringify(a)};let o;try{o=await(await fetch(Bt(e.appConfig),i)).json()}catch(s){throw R.create("token-subscribe-failed",{errorInfo:s==null?void 0:s.toString()})}if(o.error){const s=o.error.message;throw R.create("token-subscribe-failed",{errorInfo:s})}if(!o.token)throw R.create("token-subscribe-no-token");return o.token}async function Ws(e,t){const n=await Ot(e),a=ra(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(a)};let o;try{o=await(await fetch(`${Bt(e.appConfig)}/${t.token}`,i)).json()}catch(s){throw R.create("token-update-failed",{errorInfo:s==null?void 0:s.toString()})}if(o.error){const s=o.error.message;throw R.create("token-update-failed",{errorInfo:s})}if(!o.token)throw R.create("token-update-no-token");return o.token}async function sa(e,t){const a={method:"DELETE",headers:await Ot(e)};try{const o=await(await fetch(`${Bt(e.appConfig)}/${t}`,a)).json();if(o.error){const s=o.error.message;throw R.create("token-unsubscribe-failed",{errorInfo:s})}}catch(i){throw R.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Bt({projectId:e}){return`${Ls}/projects/${e}/registrations`}async function Ot({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function ra({p256dh:e,auth:t,endpoint:n,vapidKey:a}){const i={web:{endpoint:n,auth:t,p256dh:e}};return a!==aa&&(i.web.applicationPubKey=a),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=7*24*60*60*1e3;async function Us(e){const t=await Ys(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Z(t.getKey("auth")),p256dh:Z(t.getKey("p256dh"))},a=await ia(e.firebaseDependencies);if(a){if(Zs(a.subscriptionOptions,n))return Date.now()>=a.createTime+qs?Gs(e,{token:a.token,createTime:Date.now(),subscriptionOptions:n}):a.token;try{await sa(e.firebaseDependencies,a.token)}catch(i){console.warn(i)}return tn(e.firebaseDependencies,n)}else return tn(e.firebaseDependencies,n)}async function zs(e){const t=await ia(e.firebaseDependencies);t&&(await sa(e.firebaseDependencies,t.token),await js(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Gs(e,t){try{const n=await Ws(e.firebaseDependencies,t),a=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Mt(e.firebaseDependencies,a),n}catch(n){throw await zs(e),n}}async function tn(e,t){const a={token:await Ks(e,t),createTime:Date.now(),subscriptionOptions:t};return await Mt(e,a),a.token}async function Ys(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Bs(t)})}function Zs(e,t){const n=t.vapidKey===e.vapidKey,a=t.endpoint===e.endpoint,i=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&a&&i&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Js(t,e),Xs(t,e),Qs(t,e),t}function Js(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const a=t.notification.body;a&&(e.notification.body=a);const i=t.notification.image;i&&(e.notification.image=i);const o=t.notification.icon;o&&(e.notification.icon=o)}function Xs(e,t){t.data&&(e.data=t.data)}function Qs(e,t){var n,a,i,o,s;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const r=(i=(a=t.fcmOptions)===null||a===void 0?void 0:a.link)!==null&&i!==void 0?i:(o=t.notification)===null||o===void 0?void 0:o.click_action;r&&(e.fcmOptions.link=r);const d=(s=t.fcmOptions)===null||s===void 0?void 0:s.analytics_label;d&&(e.fcmOptions.analyticsLabel=d)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e){return typeof e=="object"&&!!e&&oa in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */la("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");la("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function la(e,t){const n=[];for(let a=0;a<e.length;a++)n.push(e.charAt(a)),a<t.length&&n.push(t.charAt(a));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(e){if(!e||!e.options)throw lt("App Configuration Object");if(!e.name)throw lt("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const a of t)if(!n[a])throw lt(a);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function lt(e){return R.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,n,a){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=tr(t);this.firebaseDependencies={app:t,appConfig:i,installations:n,analyticsProvider:a}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(e){try{e.swRegistration=await navigator.serviceWorker.register(Vs,{scope:Ps}),e.swRegistration.update().catch(()=>{})}catch(t){throw R.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(e,t){if(!t&&!e.swRegistration&&await ar(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw R.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=aa)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(e,t){if(!navigator)throw R.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw R.create("permission-blocked");return await ir(e,t==null?void 0:t.vapidKey),await or(e,t==null?void 0:t.serviceWorkerRegistration),Us(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(e,t,n){const a=rr(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(a,{message_id:n[oa],message_name:n[Ds],message_time:n[Ms],message_device_time:Math.floor(Date.now()/1e3)})}function rr(e){switch(e){case Te.NOTIFICATION_CLICKED:return"notification_open";case Te.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Te.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(nn(n)):e.onMessageHandler.next(nn(n)));const a=n.data;er(a)&&a[xs]==="1"&&await sr(e,n.messageType,a)}const an="@firebase/messaging",on="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=e=>{const t=new nr(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>lr(t,n)),t},ur=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:a=>ca(t,a)}};function dr(){He(new je("messaging",cr,"PUBLIC")),He(new je("messaging-internal",ur,"PRIVATE")),Re(an,on),Re(an,on,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(){try{await Ma()}catch{return!1}return typeof window<"u"&&xa()&&Ba()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(e=Da()){return fr().then(t=>{if(!t)throw R.create("unsupported-browser")},t=>{throw R.create("indexed-db-unsupported")}),bt(fn(e),"messaging").getImmediate()}async function gr(e,t){return e=fn(e),ca(e,t)}dr();const ce=e=>(cn("data-v-047d011f"),e=e(),un(),e),mr={class:"header"},pr={id:"contacto"},hr={class:"bg-black pb-6 d-flex justify-space-between align-center"},yr={class:"pa-6"},br=ce(()=>P("p",{class:"pa-2 text-center"},"Contactanos o seguinos",-1)),wr={class:"cursor-pointer contacto"},Sr={href:"https://www.facebook.com/profile.php?id=61550914527771",target:"_blank",alt:"Ir a pagina de facebook de sin pauta"},Ir=ce(()=>P("img",{src:Io,alt:"icono facebook"},null,-1)),kr={href:"https://twitter.com/SinPautaOk",target:"_blank",alt:"Ir a pagina de Twitter de sin pauta"},Cr=ce(()=>P("img",{src:ko,alt:"icono twitter"},null,-1)),_r={href:"mailto:pabloezelivingston@gmail.com",alt:"Enviar Email a sin pauta"},Tr=ce(()=>P("img",{src:Co,alt:"icono gmail"},null,-1)),Ar={href:"https://www.youtube.com/channel/UC60sjZjf-tR6n_brRNxaCQA",alt:"Enviar Email a sin pauta"},Er=ce(()=>P("img",{src:_o,alt:"icono youtube"},null,-1)),Vr={class:"d-flex flex-column align-center pa-4"},Pr=ce(()=>P("p",null,"Sin Pauta",-1)),Lr={key:0,class:"donacion-m"},Dr=ce(()=>P("a",{href:"https://mpago.la/2rWwLPv","aria-label":"Donacion con mercado pago",style:{color:"#fff"}},[P("p",{class:"text-caption pa-2"}," Somos un periódico sin fines de lucro, pero tienes la opción de colaborar para ayudarnos a cubrir nuestros gastos "),P("img",{src:ao,alt:"donacion",class:"mp-logo-donacion"})],-1)),Mr=Oa({__name:"default",setup(e){const t=O(!0);Na({script:[{type:"text/javascript",async:!0,innerHTML:""}]});const n=O("");return he(async()=>{const i=$a({apiKey:"AIzaSyCihtmlyKeFa6MGXMrJ3DPUAm7s8k-TJyo",authDomain:"autocompromiso-32ca7.firebaseapp.com",databaseURL:"https://autocompromiso-32ca7-default-rtdb.firebaseio.com",projectId:"autocompromiso-32ca7",storageBucket:"autocompromiso-32ca7.appspot.com",messagingSenderId:"171009053819",appId:"1:171009053819:web:8fd75b1bdbde7a08eabede",measurementId:"G-E5P4RN1V8K"});"serviceWorker"in navigator&&navigator.serviceWorker.register("/firebase-messaging-sw.js").then(function(o){console.log("Service Worker registrado con éxito:",o)}).catch(function(o){console.log("Error al registrar el Service Worker:",o)});try{if(await Notification.requestPermission()==="granted"){const s=vr(i),r=await gr(s);n.value=r;const d=Ra(i),f=Ha(i),l=ja(f,"notificaciones");let u=Fa(l,r);await Ka(u,{token:r})}else console.warn("El permiso de notificación no se ha concedido.")}catch(o){console.error("Error al obtener o almacenar el token de registro:",o)}}),(a,i)=>(ve(),Oe("div",null,[P("header",mr,[c(Ii)]),P("main",null,[Wa(a.$slots,"default",{},void 0,!0)]),P("footer",null,[P("section",pr,[P("div",hr,[P("div",yr,[br,P("div",wr,[P("a",Sr,[c(oe,{class:"ma-2"},{default:$(()=>[Ir]),_:1})]),P("a",kr,[c(oe,{class:"ma-2"},{default:$(()=>[Cr]),_:1})]),P("a",_r,[c(oe,{class:"ma-2"},{default:$(()=>[Tr]),_:1})]),P("a",Ar,[c(oe,{class:"ma-2"},{default:$(()=>[Er]),_:1})])])]),P("div",Vr,[Pr,c(Cn)])])])]),qa(t)?(ve(),Oe("div",Lr,[c(co,{class:"align-center ma-2"},{default:$(()=>[c(Rt,null,{default:$(()=>[Dr]),_:1}),c(Rt,null,{default:$(()=>[c(vn,{block:"",onClick:i[0]||(i[0]=o=>t.value=!1),"aria-label":"Cerrar cuadro de donacion"},{default:$(()=>[Ua("Cerrar")]),_:1})]),_:1})]),_:1})])):za("",!0)]))}});const Nr=yt(Mr,[["__scopeId","data-v-047d011f"]]);export{Nr as default};
