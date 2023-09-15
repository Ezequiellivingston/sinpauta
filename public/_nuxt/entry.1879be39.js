function td(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const xe={},Ws=[],dn=()=>{},SR=()=>!1,PR=/^on[^a-z]/,oa=t=>PR.test(t),nd=t=>t.startsWith("onUpdate:"),We=Object.assign,rd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},kR=Object.prototype.hasOwnProperty,_e=(t,e)=>kR.call(t,e),Z=Array.isArray,qs=t=>aa(t)==="[object Map]",wv=t=>aa(t)==="[object Set]",NR=t=>aa(t)==="[object RegExp]",re=t=>typeof t=="function",$e=t=>typeof t=="string",sd=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",Iv=t=>Oe(t)&&re(t.then)&&re(t.catch),Av=Object.prototype.toString,aa=t=>Av.call(t),OR=t=>aa(t).slice(8,-1),Rv=t=>aa(t)==="[object Object]",id=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ho=td(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ac=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},DR=/-(\w)/g,Ln=Ac(t=>t.replace(DR,(e,n)=>n?n.toUpperCase():"")),xR=/\B([A-Z])/g,Ai=Ac(t=>t.replace(xR,"-$1").toLowerCase()),la=Ac(t=>t.charAt(0).toUpperCase()+t.slice(1)),Du=Ac(t=>t?`on${la(t)}`:""),ko=(t,e)=>!Object.is(t,e),fo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Cl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},MR=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Cv=t=>{const e=$e(t)?Number(t):NaN;return isNaN(e)?t:e};let vg;const bh=()=>vg||(vg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rc(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=$e(r)?UR(r):Rc(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if($e(t))return t;if(Oe(t))return t}}const LR=/;(?![^(]*\))/g,VR=/:([^]+)/,FR=/\/\*[^]*?\*\//g;function UR(t){const e={};return t.replace(FR,"").split(LR).forEach(n=>{if(n){const r=n.split(VR);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Cc(t){let e="";if($e(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const r=Cc(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function $R(t){if(!t)return null;let{class:e,style:n}=t;return e&&!$e(e)&&(t.class=Cc(e)),n&&(t.style=Rc(n)),t}const BR="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",HR=td(BR);function bv(t){return!!t||t===""}const NH=t=>$e(t)?t:t==null?"":Z(t)||Oe(t)&&(t.toString===Av||!re(t.toString))?JSON.stringify(t,Sv,2):String(t),Sv=(t,e)=>e&&e.__v_isRef?Sv(t,e.value):qs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:wv(e)?{[`Set(${e.size})`]:[...e.values()]}:Oe(e)&&!Z(e)&&!Rv(e)?String(e):e;let Wt;class Pv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){Wt=this}off(){Wt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function kv(t){return new Pv(t)}function jR(t,e=Wt){e&&e.active&&e.effects.push(t)}function WR(){return Wt}function qR(t){Wt&&Wt.cleanups.push(t)}const od=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Nv=t=>(t.w&Nr)>0,Ov=t=>(t.n&Nr)>0,KR=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Nr},zR=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Nv(s)&&!Ov(s)?s.delete(t):e[n++]=s,s.w&=~Nr,s.n&=~Nr}e.length=n}},bl=new WeakMap;let no=0,Nr=1;const Sh=30;let an;const ns=Symbol(""),Ph=Symbol("");class ad{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,jR(this,r)}run(){if(!this.active)return this.fn();let e=an,n=Ar;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=an,an=this,Ar=!0,Nr=1<<++no,no<=Sh?KR(this):Eg(this),this.fn()}finally{no<=Sh&&zR(this),Nr=1<<--no,an=this.parent,Ar=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){an===this?this.deferStop=!0:this.active&&(Eg(this),this.onStop&&this.onStop(),this.active=!1)}}function Eg(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ar=!0;const Dv=[];function Ri(){Dv.push(Ar),Ar=!1}function Ci(){const t=Dv.pop();Ar=t===void 0?!0:t}function Ht(t,e,n){if(Ar&&an){let r=bl.get(t);r||bl.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=od()),xv(s)}}function xv(t,e){let n=!1;no<=Sh?Ov(t)||(t.n|=Nr,n=!Nv(t)):n=!t.has(an),n&&(t.add(an),an.deps.push(t))}function er(t,e,n,r,s,i){const o=bl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Z(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Z(t)?id(n)&&a.push(o.get("length")):(a.push(o.get(ns)),qs(t)&&a.push(o.get(Ph)));break;case"delete":Z(t)||(a.push(o.get(ns)),qs(t)&&a.push(o.get(Ph)));break;case"set":qs(t)&&a.push(o.get(ns));break}if(a.length===1)a[0]&&kh(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);kh(od(l))}}function kh(t,e){const n=Z(t)?t:[...t];for(const r of n)r.computed&&Tg(r);for(const r of n)r.computed||Tg(r)}function Tg(t,e){(t!==an||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function GR(t,e){var n;return(n=bl.get(t))==null?void 0:n.get(e)}const QR=td("__proto__,__v_isRef,__isVue"),Mv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(sd)),YR=ld(),XR=ld(!1,!0),JR=ld(!0),wg=ZR();function ZR(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=fe(this);for(let i=0,o=this.length;i<o;i++)Ht(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(fe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ri();const r=fe(this)[e].apply(this,n);return Ci(),r}}),t}function eC(t){const e=fe(this);return Ht(e,"has",t),e.hasOwnProperty(t)}function ld(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?mC:$v:e?Uv:Fv).get(r))return r;const o=Z(r);if(!t){if(o&&_e(wg,s))return Reflect.get(wg,s,i);if(s==="hasOwnProperty")return eC}const a=Reflect.get(r,s,i);return(sd(s)?Mv.has(s):QR(s))||(t||Ht(r,"get",s),e)?a:Ze(a)?o&&id(s)?a:a.value:Oe(a)?t?Bv(a):rn(a):a}}const tC=Lv(),nC=Lv(!0);function Lv(t=!1){return function(n,r,s,i){let o=n[r];if(us(o)&&Ze(o)&&!Ze(s))return!1;if(!t&&(!Sl(s)&&!us(s)&&(o=fe(o),s=fe(s)),!Z(n)&&Ze(o)&&!Ze(s)))return o.value=s,!0;const a=Z(n)&&id(r)?Number(r)<n.length:_e(n,r),l=Reflect.set(n,r,s,i);return n===fe(i)&&(a?ko(s,o)&&er(n,"set",r,s):er(n,"add",r,s)),l}}function rC(t,e){const n=_e(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&er(t,"delete",e,void 0),r}function sC(t,e){const n=Reflect.has(t,e);return(!sd(e)||!Mv.has(e))&&Ht(t,"has",e),n}function iC(t){return Ht(t,"iterate",Z(t)?"length":ns),Reflect.ownKeys(t)}const Vv={get:YR,set:tC,deleteProperty:rC,has:sC,ownKeys:iC},oC={get:JR,set(t,e){return!0},deleteProperty(t,e){return!0}},aC=We({},Vv,{get:XR,set:nC}),cd=t=>t,bc=t=>Reflect.getPrototypeOf(t);function $a(t,e,n=!1,r=!1){t=t.__v_raw;const s=fe(t),i=fe(e);n||(e!==i&&Ht(s,"get",e),Ht(s,"get",i));const{has:o}=bc(s),a=r?cd:n?fd:No;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Ba(t,e=!1){const n=this.__v_raw,r=fe(n),s=fe(t);return e||(t!==s&&Ht(r,"has",t),Ht(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ha(t,e=!1){return t=t.__v_raw,!e&&Ht(fe(t),"iterate",ns),Reflect.get(t,"size",t)}function Ig(t){t=fe(t);const e=fe(this);return bc(e).has.call(e,t)||(e.add(t),er(e,"add",t,t)),this}function Ag(t,e){e=fe(e);const n=fe(this),{has:r,get:s}=bc(n);let i=r.call(n,t);i||(t=fe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ko(e,o)&&er(n,"set",t,e):er(n,"add",t,e),this}function Rg(t){const e=fe(this),{has:n,get:r}=bc(e);let s=n.call(e,t);s||(t=fe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&er(e,"delete",t,void 0),i}function Cg(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&er(t,"clear",void 0,void 0),n}function ja(t,e){return function(r,s){const i=this,o=i.__v_raw,a=fe(o),l=e?cd:t?fd:No;return!t&&Ht(a,"iterate",ns),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Wa(t,e,n){return function(...r){const s=this.__v_raw,i=fe(s),o=qs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?cd:e?fd:No;return!e&&Ht(i,"iterate",l?Ph:ns),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function fr(t){return function(...e){return t==="delete"?!1:this}}function lC(){const t={get(i){return $a(this,i)},get size(){return Ha(this)},has:Ba,add:Ig,set:Ag,delete:Rg,clear:Cg,forEach:ja(!1,!1)},e={get(i){return $a(this,i,!1,!0)},get size(){return Ha(this)},has:Ba,add:Ig,set:Ag,delete:Rg,clear:Cg,forEach:ja(!1,!0)},n={get(i){return $a(this,i,!0)},get size(){return Ha(this,!0)},has(i){return Ba.call(this,i,!0)},add:fr("add"),set:fr("set"),delete:fr("delete"),clear:fr("clear"),forEach:ja(!0,!1)},r={get(i){return $a(this,i,!0,!0)},get size(){return Ha(this,!0)},has(i){return Ba.call(this,i,!0)},add:fr("add"),set:fr("set"),delete:fr("delete"),clear:fr("clear"),forEach:ja(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Wa(i,!1,!1),n[i]=Wa(i,!0,!1),e[i]=Wa(i,!1,!0),r[i]=Wa(i,!0,!0)}),[t,n,e,r]}const[cC,uC,hC,fC]=lC();function ud(t,e){const n=e?t?fC:hC:t?uC:cC;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(_e(n,s)&&s in r?n:r,s,i)}const dC={get:ud(!1,!1)},pC={get:ud(!1,!0)},gC={get:ud(!0,!1)},Fv=new WeakMap,Uv=new WeakMap,$v=new WeakMap,mC=new WeakMap;function _C(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yC(t){return t.__v_skip||!Object.isExtensible(t)?0:_C(OR(t))}function rn(t){return us(t)?t:hd(t,!1,Vv,dC,Fv)}function ca(t){return hd(t,!1,aC,pC,Uv)}function Bv(t){return hd(t,!0,oC,gC,$v)}function hd(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=yC(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Ks(t){return us(t)?Ks(t.__v_raw):!!(t&&t.__v_isReactive)}function us(t){return!!(t&&t.__v_isReadonly)}function Sl(t){return!!(t&&t.__v_isShallow)}function Hv(t){return Ks(t)||us(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function Pl(t){return Cl(t,"__v_skip",!0),t}const No=t=>Oe(t)?rn(t):t,fd=t=>Oe(t)?Bv(t):t;function jv(t){Ar&&an&&(t=fe(t),xv(t.dep||(t.dep=od())))}function Wv(t,e){t=fe(t);const n=t.dep;n&&kh(n)}function Ze(t){return!!(t&&t.__v_isRef===!0)}function et(t){return qv(t,!1)}function pn(t){return qv(t,!0)}function qv(t,e){return Ze(t)?t:new vC(t,e)}class vC{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:No(e)}get value(){return jv(this),this._value}set value(e){const n=this.__v_isShallow||Sl(e)||us(e);e=n?e:fe(e),ko(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:No(e),Wv(this))}}function Ce(t){return Ze(t)?t.value:t}const EC={get:(t,e,n)=>Ce(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ze(s)&&!Ze(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Kv(t){return Ks(t)?t:new Proxy(t,EC)}function zv(t){const e=Z(t)?new Array(t.length):{};for(const n in t)e[n]=Qv(t,n);return e}class TC{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return GR(fe(this._object),this._key)}}class wC{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Gv(t,e,n){return Ze(t)?t:re(t)?new wC(t):Oe(t)&&arguments.length>1?Qv(t,e,n):et(t)}function Qv(t,e,n){const r=t[e];return Ze(r)?r:new TC(t,e,n)}class IC{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ad(e,()=>{this._dirty||(this._dirty=!0,Wv(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=fe(this);return jv(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function AC(t,e,n=!1){let r,s;const i=re(t);return i?(r=t,s=dn):(r=t.get,s=t.set),new IC(r,s,i||!s,n)}function Rr(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){bi(i,e,n)}return s}function nn(t,e,n,r){if(re(t)){const i=Rr(t,e,n,r);return i&&Iv(i)&&i.catch(o=>{bi(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(nn(t[i],e,n,r));return s}function bi(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Rr(l,null,10,[t,o,a]);return}}RC(t,n,s,r)}function RC(t,e,n,r=!0){console.error(t)}let Oo=!1,Nh=!1;const wt=[];let Cn=0;const zs=[];let Wn=null,Gr=0;const Yv=Promise.resolve();let dd=null;function Lr(t){const e=dd||Yv;return t?e.then(this?t.bind(this):t):e}function CC(t){let e=Cn+1,n=wt.length;for(;e<n;){const r=e+n>>>1;Do(wt[r])<t?e=r+1:n=r}return e}function Sc(t){(!wt.length||!wt.includes(t,Oo&&t.allowRecurse?Cn+1:Cn))&&(t.id==null?wt.push(t):wt.splice(CC(t.id),0,t),Xv())}function Xv(){!Oo&&!Nh&&(Nh=!0,dd=Yv.then(Zv))}function bC(t){const e=wt.indexOf(t);e>Cn&&wt.splice(e,1)}function Jv(t){Z(t)?zs.push(...t):(!Wn||!Wn.includes(t,t.allowRecurse?Gr+1:Gr))&&zs.push(t),Xv()}function bg(t,e=Oo?Cn+1:0){for(;e<wt.length;e++){const n=wt[e];n&&n.pre&&(wt.splice(e,1),e--,n())}}function kl(t){if(zs.length){const e=[...new Set(zs)];if(zs.length=0,Wn){Wn.push(...e);return}for(Wn=e,Wn.sort((n,r)=>Do(n)-Do(r)),Gr=0;Gr<Wn.length;Gr++)Wn[Gr]();Wn=null,Gr=0}}const Do=t=>t.id==null?1/0:t.id,SC=(t,e)=>{const n=Do(t)-Do(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Zv(t){Nh=!1,Oo=!0,wt.sort(SC);const e=dn;try{for(Cn=0;Cn<wt.length;Cn++){const n=wt[Cn];n&&n.active!==!1&&Rr(n,null,14)}}finally{Cn=0,wt.length=0,kl(),Oo=!1,dd=null,(wt.length||zs.length)&&Zv()}}function PC(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||xe;f&&(s=n.map(d=>$e(d)?d.trim():d)),h&&(s=n.map(MR))}let a,l=r[a=Du(e)]||r[a=Du(Ln(e))];!l&&i&&(l=r[a=Du(Ai(e))]),l&&nn(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,nn(c,t,6,s)}}function eE(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!re(t)){const l=c=>{const u=eE(c,e,!0);u&&(a=!0,We(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Oe(t)&&r.set(t,null),null):(Z(i)?i.forEach(l=>o[l]=null):We(o,i),Oe(t)&&r.set(t,o),o)}function Pc(t,e){return!t||!oa(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(t,e[0].toLowerCase()+e.slice(1))||_e(t,Ai(e))||_e(t,e))}let it=null,kc=null;function Nl(t){const e=it;return it=t,kc=t&&t.type.__scopeId||null,e}function OH(t){kc=t}function DH(){kc=null}function pd(t,e=it,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Bg(-1);const i=Nl(e);let o;try{o=t(...s)}finally{Nl(i),r._d&&Bg(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function xu(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:y}=t;let T,v;const m=Nl(t);try{if(n.shapeFlag&4){const E=s||r;T=Yt(u.call(E,E,h,i,d,f,p)),v=l}else{const E=e;T=Yt(E.length>1?E(i,{attrs:l,slots:a,emit:c}):E(i,null)),v=e.props?l:NC(l)}}catch(E){mo.length=0,bi(E,t,1),T=ve(xt)}let I=T;if(v&&y!==!1){const E=Object.keys(v),{shapeFlag:b}=I;E.length&&b&7&&(o&&E.some(nd)&&(v=OC(v,o)),I=tr(I,v))}return n.dirs&&(I=tr(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),T=I,Nl(m),T}function kC(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(oi(r)){if(r.type!==xt||r.children==="v-if"){if(e)return;e=r}}else return}return e}const NC=t=>{let e;for(const n in t)(n==="class"||n==="style"||oa(n))&&((e||(e={}))[n]=t[n]);return e},OC=(t,e)=>{const n={};for(const r in t)(!nd(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function DC(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Sg(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Pc(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Sg(r,o,c):!0:!!o;return!1}function Sg(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Pc(n,i))return!0}return!1}function gd({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const tE=t=>t.__isSuspense,xC={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,c){t==null?MC(e,n,r,s,i,o,a,l,c):LC(t,e,n,r,s,o,a,l,c)},hydrate:VC,create:_d,normalize:FC},md=xC;function xo(t,e){const n=t.props&&t.props[e];re(n)&&n()}function MC(t,e,n,r,s,i,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=t.suspense=_d(t,s,r,e,h,n,i,o,a,l);c(null,f.pendingBranch=t.ssContent,h,null,r,f,i,o),f.deps>0?(xo(t,"onPending"),xo(t,"onFallback"),c(null,t.ssFallback,e,n,r,null,i,o),Gs(f,t.ssFallback)):f.resolve(!1,!0)}function LC(t,e,n,r,s,i,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:p,pendingBranch:y,isInFallback:T,isHydrating:v}=h;if(y)h.pendingBranch=f,ln(f,y)?(l(y,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():T&&(l(p,d,n,r,s,null,i,o,a),Gs(h,d))):(h.pendingId++,v?(h.isHydrating=!1,h.activeBranch=y):c(y,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),T?(l(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():(l(p,d,n,r,s,null,i,o,a),Gs(h,d))):p&&ln(f,p)?(l(p,f,n,r,s,h,i,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0&&h.resolve()));else if(p&&ln(f,p))l(p,f,n,r,s,h,i,o,a),Gs(h,f);else if(xo(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:m,pendingId:I}=h;m>0?setTimeout(()=>{h.pendingId===I&&h.fallback(d)},m):m===0&&h.fallback(d)}}function _d(t,e,n,r,s,i,o,a,l,c,u=!1){const{p:h,m:f,um:d,n:p,o:{parentNode:y,remove:T}}=c;let v;const m=UC(t);m&&e!=null&&e.pendingBranch&&(v=e.pendingId,e.deps++);const I=t.props?Cv(t.props.timeout):void 0,E={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof I=="number"?I:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(b=!1,D=!1){const{vnode:M,activeBranch:P,pendingBranch:K,pendingId:W,effects:te,parentComponent:H,container:ee}=E;if(E.isHydrating)E.isHydrating=!1;else if(!b){const de=P&&K.transition&&K.transition.mode==="out-in";de&&(P.transition.afterLeave=()=>{W===E.pendingId&&f(K,ee,Ee,0)});let{anchor:Ee}=E;P&&(Ee=p(P),d(P,H,E,!0)),de||f(K,ee,Ee,0)}Gs(E,K),E.pendingBranch=null,E.isInFallback=!1;let q=E.parent,qe=!1;for(;q;){if(q.pendingBranch){q.effects.push(...te),qe=!0;break}q=q.parent}qe||Jv(te),E.effects=[],m&&e&&e.pendingBranch&&v===e.pendingId&&(e.deps--,e.deps===0&&!D&&e.resolve()),xo(M,"onResolve")},fallback(b){if(!E.pendingBranch)return;const{vnode:D,activeBranch:M,parentComponent:P,container:K,isSVG:W}=E;xo(D,"onFallback");const te=p(M),H=()=>{E.isInFallback&&(h(null,b,K,te,P,null,W,a,l),Gs(E,b))},ee=b.transition&&b.transition.mode==="out-in";ee&&(M.transition.afterLeave=H),E.isInFallback=!0,d(M,P,null,!0),ee||H()},move(b,D,M){E.activeBranch&&f(E.activeBranch,b,D,M),E.container=b},next(){return E.activeBranch&&p(E.activeBranch)},registerDep(b,D){const M=!!E.pendingBranch;M&&E.deps++;const P=b.vnode.el;b.asyncDep.catch(K=>{bi(K,b,0)}).then(K=>{if(b.isUnmounted||E.isUnmounted||E.pendingId!==b.suspenseId)return;b.asyncResolved=!0;const{vnode:W}=b;Lh(b,K,!1),P&&(W.el=P);const te=!P&&b.subTree.el;D(b,W,y(P||b.subTree.el),P?null:p(b.subTree),E,o,l),te&&T(te),gd(b,W.el),M&&--E.deps===0&&E.resolve()})},unmount(b,D){E.isUnmounted=!0,E.activeBranch&&d(E.activeBranch,n,b,D),E.pendingBranch&&d(E.pendingBranch,n,b,D)}};return E}function VC(t,e,n,r,s,i,o,a,l){const c=e.suspense=_d(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,i,o);return c.deps===0&&c.resolve(!1,!0),u}function FC(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Pg(r?n.default:n),t.ssFallback=r?Pg(n.fallback):ve(xt)}function Pg(t){let e;if(re(t)){const n=ii&&t._c;n&&(t._d=!1,bn()),t=t(),n&&(t._d=!0,e=Zt,AE())}return Z(t)&&(t=kC(t)),t=Yt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function nE(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):Jv(t)}function Gs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,gd(r,s))}function UC(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}function ua(t,e){return yd(t,null,e)}const qa={};function gn(t,e,n){return yd(t,e,n)}function yd(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=xe){var a;const l=WR()===((a=Qe)==null?void 0:a.scope)?Qe:null;let c,u=!1,h=!1;if(Ze(t)?(c=()=>t.value,u=Sl(t)):Ks(t)?(c=()=>t,r=!0):Z(t)?(h=!0,u=t.some(E=>Ks(E)||Sl(E)),c=()=>t.map(E=>{if(Ze(E))return E.value;if(Ks(E))return Yr(E);if(re(E))return Rr(E,l,2)})):re(t)?e?c=()=>Rr(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),nn(t,l,3,[d])}:c=dn,e&&r){const E=c;c=()=>Yr(E())}let f,d=E=>{f=m.onStop=()=>{Rr(E,l,4)}},p;if(li)if(d=dn,e?n&&nn(e,l,3,[c(),h?[]:void 0,d]):c(),s==="sync"){const E=bb();p=E.__watcherHandles||(E.__watcherHandles=[])}else return dn;let y=h?new Array(t.length).fill(qa):qa;const T=()=>{if(m.active)if(e){const E=m.run();(r||u||(h?E.some((b,D)=>ko(b,y[D])):ko(E,y)))&&(f&&f(),nn(e,l,3,[E,y===qa?void 0:h&&y[0]===qa?[]:y,d]),y=E)}else m.run()};T.allowRecurse=!!e;let v;s==="sync"?v=T:s==="post"?v=()=>ht(T,l&&l.suspense):(T.pre=!0,l&&(T.id=l.uid),v=()=>Sc(T));const m=new ad(c,v);e?n?T():y=m.run():s==="post"?ht(m.run.bind(m),l&&l.suspense):m.run();const I=()=>{m.stop(),l&&l.scope&&rd(l.scope.effects,m)};return p&&p.push(I),I}function $C(t,e,n){const r=this.proxy,s=$e(t)?t.includes(".")?rE(r,t):()=>r[t]:t.bind(r,r);let i;re(e)?i=e:(i=e.handler,n=e);const o=Qe;ai(this);const a=yd(s,i.bind(r),n);return o?ai(o):ss(),a}function rE(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Yr(t,e){if(!Oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ze(t))Yr(t.value,e);else if(Z(t))for(let n=0;n<t.length;n++)Yr(t[n],e);else if(wv(t)||qs(t))t.forEach(n=>{Yr(n,e)});else if(Rv(t))for(const n in t)Yr(t[n],e);return t}function xH(t,e){const n=it;if(n===null)return t;const r=xc(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=xe]=e[i];o&&(re(o)&&(o={mounted:o,updated:o}),o.deep&&Yr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Rn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Ri(),nn(l,n,8,[t.el,a,t,e]),Ci())}}function sE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ed(()=>{t.isMounted=!0}),Oc(()=>{t.isUnmounting=!0}),t}const Qt=[Function,Array],iE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qt,onEnter:Qt,onAfterEnter:Qt,onEnterCancelled:Qt,onBeforeLeave:Qt,onLeave:Qt,onAfterLeave:Qt,onLeaveCancelled:Qt,onBeforeAppear:Qt,onAppear:Qt,onAfterAppear:Qt,onAppearCancelled:Qt},BC={name:"BaseTransition",props:iE,setup(t,{slots:e}){const n=Vr(),r=sE();let s;return()=>{const i=e.default&&vd(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==xt){o=y;break}}const a=fe(t),{mode:l}=a;if(r.isLeaving)return Mu(o);const c=kg(o);if(!c)return Mu(o);const u=Mo(c,a,r,n);ri(c,u);const h=n.subTree,f=h&&kg(h);let d=!1;const{getTransitionKey:p}=c.type;if(p){const y=p();s===void 0?s=y:y!==s&&(s=y,d=!0)}if(f&&f.type!==xt&&(!ln(c,f)||d)){const y=Mo(f,a,r,n);if(ri(f,y),l==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Mu(o);l==="in-out"&&c.type!==xt&&(y.delayLeave=(T,v,m)=>{const I=oE(r,f);I[String(f.key)]=f,T._leaveCb=()=>{v(),T._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=m})}return o}}},HC=BC;function oE(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Mo(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:y,onAppear:T,onAfterAppear:v,onAppearCancelled:m}=e,I=String(t.key),E=oE(n,t),b=(P,K)=>{P&&nn(P,r,9,K)},D=(P,K)=>{const W=K[1];b(P,K),Z(P)?P.every(te=>te.length<=1)&&W():P.length<=1&&W()},M={mode:i,persisted:o,beforeEnter(P){let K=a;if(!n.isMounted)if(s)K=y||a;else return;P._leaveCb&&P._leaveCb(!0);const W=E[I];W&&ln(t,W)&&W.el._leaveCb&&W.el._leaveCb(),b(K,[P])},enter(P){let K=l,W=c,te=u;if(!n.isMounted)if(s)K=T||l,W=v||c,te=m||u;else return;let H=!1;const ee=P._enterCb=q=>{H||(H=!0,q?b(te,[P]):b(W,[P]),M.delayedLeave&&M.delayedLeave(),P._enterCb=void 0)};K?D(K,[P,ee]):ee()},leave(P,K){const W=String(t.key);if(P._enterCb&&P._enterCb(!0),n.isUnmounting)return K();b(h,[P]);let te=!1;const H=P._leaveCb=ee=>{te||(te=!0,K(),ee?b(p,[P]):b(d,[P]),P._leaveCb=void 0,E[W]===t&&delete E[W])};E[W]=t,f?D(f,[P,H]):H()},clone(P){return Mo(P,e,n,r)}};return M}function Mu(t){if(ha(t))return t=tr(t),t.children=null,t}function kg(t){return ha(t)?t.children?t.children[0]:void 0:t}function ri(t,e){t.shapeFlag&6&&t.component?ri(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function vd(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===yt?(o.patchFlag&128&&s++,r=r.concat(vd(o.children,e,a))):(e||o.type!==xt)&&r.push(a!=null?tr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function lr(t,e){return re(t)?(()=>We({name:t.name},e,{setup:t}))():t}const rs=t=>!!t.type.__asyncLoader;function Ng(t){re(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,f()),f=()=>{let d;return l||(d=l=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((y,T)=>{a(p,()=>y(h()),()=>T(p),u+1)});throw p}).then(p=>d!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return lr({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const d=Qe;if(c)return()=>Lu(c,d);const p=m=>{l=null,bi(m,d,13,!r)};if(o&&d.suspense||li)return f().then(m=>()=>Lu(m,d)).catch(m=>(p(m),()=>r?ve(r,{error:m}):null));const y=et(!1),T=et(),v=et(!!s);return s&&setTimeout(()=>{v.value=!1},s),i!=null&&setTimeout(()=>{if(!y.value&&!T.value){const m=new Error(`Async component timed out after ${i}ms.`);p(m),T.value=m}},i),f().then(()=>{y.value=!0,d.parent&&ha(d.parent.vnode)&&Sc(d.parent.update)}).catch(m=>{p(m),T.value=m}),()=>{if(y.value&&c)return Lu(c,d);if(T.value&&r)return ve(r,{error:T.value});if(n&&!v.value)return ve(n)}}})}function Lu(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=ve(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const ha=t=>t.type.__isKeepAlive,jC={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Vr(),r=n.ctx;if(!r.renderer)return()=>{const m=e.default&&e.default();return m&&m.length===1?m[0]:m};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=r,f=h("div");r.activate=(m,I,E,b,D)=>{const M=m.component;c(m,I,E,0,a),l(M.vnode,m,I,E,M,a,b,m.slotScopeIds,D),ht(()=>{M.isDeactivated=!1,M.a&&fo(M.a);const P=m.props&&m.props.onVnodeMounted;P&&Ft(P,M.parent,m)},a)},r.deactivate=m=>{const I=m.component;c(m,f,null,1,a),ht(()=>{I.da&&fo(I.da);const E=m.props&&m.props.onVnodeUnmounted;E&&Ft(E,I.parent,m),I.isDeactivated=!0},a)};function d(m){Vu(m),u(m,n,a,!0)}function p(m){s.forEach((I,E)=>{const b=Vh(I.type);b&&(!m||!m(b))&&y(E)})}function y(m){const I=s.get(m);!o||!ln(I,o)?d(I):o&&Vu(o),s.delete(m),i.delete(m)}gn(()=>[t.include,t.exclude],([m,I])=>{m&&p(E=>ro(m,E)),I&&p(E=>!ro(I,E))},{flush:"post",deep:!0});let T=null;const v=()=>{T!=null&&s.set(T,Fu(n.subTree))};return Ed(v),Td(v),Oc(()=>{s.forEach(m=>{const{subTree:I,suspense:E}=n,b=Fu(I);if(m.type===b.type&&m.key===b.key){Vu(b);const D=b.component.da;D&&ht(D,E);return}d(m)})}),()=>{if(T=null,!e.default)return null;const m=e.default(),I=m[0];if(m.length>1)return o=null,m;if(!oi(I)||!(I.shapeFlag&4)&&!(I.shapeFlag&128))return o=null,I;let E=Fu(I);const b=E.type,D=Vh(rs(E)?E.type.__asyncResolved||{}:b),{include:M,exclude:P,max:K}=t;if(M&&(!D||!ro(M,D))||P&&D&&ro(P,D))return o=E,I;const W=E.key==null?b:E.key,te=s.get(W);return E.el&&(E=tr(E),I.shapeFlag&128&&(I.ssContent=E)),T=W,te?(E.el=te.el,E.component=te.component,E.transition&&ri(E,E.transition),E.shapeFlag|=512,i.delete(W),i.add(W)):(i.add(W),K&&i.size>parseInt(K,10)&&y(i.values().next().value)),E.shapeFlag|=256,o=E,tE(I.type)?I:E}}},WC=jC;function ro(t,e){return Z(t)?t.some(n=>ro(n,e)):$e(t)?t.split(",").includes(e):NR(t)?t.test(e):!1}function aE(t,e){cE(t,"a",e)}function lE(t,e){cE(t,"da",e)}function cE(t,e,n=Qe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Nc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ha(s.parent.vnode)&&qC(r,e,n,s),s=s.parent}}function qC(t,e,n,r){const s=Nc(e,t,r,!0);uE(()=>{rd(r[e],s)},n)}function Vu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Fu(t){return t.shapeFlag&128?t.ssContent:t}function Nc(t,e,n=Qe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ri(),ai(n);const a=nn(e,n,t,o);return ss(),Ci(),a});return r?s.unshift(i):s.push(i),i}}const cr=t=>(e,n=Qe)=>(!li||t==="sp")&&Nc(t,(...r)=>e(...r),n),KC=cr("bm"),Ed=cr("m"),zC=cr("bu"),Td=cr("u"),Oc=cr("bum"),uE=cr("um"),GC=cr("sp"),QC=cr("rtg"),YC=cr("rtc");function hE(t,e=Qe){Nc("ec",t,e)}const wd="components",XC="directives";function MH(t,e){return Id(wd,t,!0,e)||t}const fE=Symbol.for("v-ndc");function JC(t){return $e(t)?Id(wd,t,!1)||t:t||fE}function LH(t){return Id(XC,t)}function Id(t,e,n=!0,r=!1){const s=it||Qe;if(s){const i=s.type;if(t===wd){const a=Vh(i,!1);if(a&&(a===e||a===Ln(e)||a===la(Ln(e))))return i}const o=Og(s[t]||i[t],e)||Og(s.appContext[t],e);return!o&&r?i:o}}function Og(t,e){return t&&(t[e]||t[Ln(e)]||t[la(Ln(e))])}function VH(t,e,n,r){let s;const i=n&&n[r];if(Z(t)||$e(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function FH(t,e,n={},r,s){if(it.isCE||it.parent&&rs(it.parent)&&it.parent.isCE)return e!=="default"&&(n.name=e),ve("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),bn();const o=i&&dE(i(n)),a=qn(yt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function dE(t){return t.some(e=>oi(e)?!(e.type===xt||e.type===yt&&!dE(e.children)):!0)?t:null}const Oh=t=>t?kE(t)?xc(t)||t.proxy:Oh(t.parent):null,po=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Oh(t.parent),$root:t=>Oh(t.root),$emit:t=>t.emit,$options:t=>Ad(t),$forceUpdate:t=>t.f||(t.f=()=>Sc(t.update)),$nextTick:t=>t.n||(t.n=Lr.bind(t.proxy)),$watch:t=>$C.bind(t)}),Uu=(t,e)=>t!==xe&&!t.__isScriptSetup&&_e(t,e),ZC={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Uu(r,e))return o[e]=1,r[e];if(s!==xe&&_e(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&_e(c,e))return o[e]=3,i[e];if(n!==xe&&_e(n,e))return o[e]=4,n[e];Dh&&(o[e]=0)}}const u=po[e];let h,f;if(u)return e==="$attrs"&&Ht(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==xe&&_e(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,_e(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Uu(s,e)?(s[e]=n,!0):r!==xe&&_e(r,e)?(r[e]=n,!0):_e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==xe&&_e(t,o)||Uu(e,o)||(a=i[0])&&_e(a,o)||_e(r,o)||_e(po,o)||_e(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Dg(t){return Z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Dh=!0;function eb(t){const e=Ad(t),n=t.proxy,r=t.ctx;Dh=!1,e.beforeCreate&&xg(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:y,deactivated:T,beforeDestroy:v,beforeUnmount:m,destroyed:I,unmounted:E,render:b,renderTracked:D,renderTriggered:M,errorCaptured:P,serverPrefetch:K,expose:W,inheritAttrs:te,components:H,directives:ee,filters:q}=e;if(c&&tb(c,r,null),o)for(const Ee in o){const we=o[Ee];re(we)&&(r[Ee]=we.bind(n))}if(s){const Ee=s.call(n,n);Oe(Ee)&&(t.data=rn(Ee))}if(Dh=!0,i)for(const Ee in i){const we=i[Ee],$n=re(we)?we.bind(n,n):re(we.get)?we.get.bind(n,n):dn,hr=!re(we)&&re(we.set)?we.set.bind(n):dn,wn=be({get:$n,set:hr});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>wn.value,set:Lt=>wn.value=Lt})}if(a)for(const Ee in a)pE(a[Ee],r,n,Ee);if(l){const Ee=re(l)?l.call(n):l;Reflect.ownKeys(Ee).forEach(we=>{On(we,Ee[we])})}u&&xg(u,t,"c");function de(Ee,we){Z(we)?we.forEach($n=>Ee($n.bind(n))):we&&Ee(we.bind(n))}if(de(KC,h),de(Ed,f),de(zC,d),de(Td,p),de(aE,y),de(lE,T),de(hE,P),de(YC,D),de(QC,M),de(Oc,m),de(uE,E),de(GC,K),Z(W))if(W.length){const Ee=t.exposed||(t.exposed={});W.forEach(we=>{Object.defineProperty(Ee,we,{get:()=>n[we],set:$n=>n[we]=$n})})}else t.exposed||(t.exposed={});b&&t.render===dn&&(t.render=b),te!=null&&(t.inheritAttrs=te),H&&(t.components=H),ee&&(t.directives=ee)}function tb(t,e,n=dn){Z(t)&&(t=xh(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=Be(s.from||r,s.default,!0):i=Be(s.from||r):i=Be(s),Ze(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function xg(t,e,n){nn(Z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function pE(t,e,n,r){const s=r.includes(".")?rE(n,r):()=>n[r];if($e(t)){const i=e[t];re(i)&&gn(s,i)}else if(re(t))gn(s,t.bind(n));else if(Oe(t))if(Z(t))t.forEach(i=>pE(i,e,n,r));else{const i=re(t.handler)?t.handler.bind(n):e[t.handler];re(i)&&gn(s,i,t)}}function Ad(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Ol(l,c,o,!0)),Ol(l,e,o)),Oe(e)&&i.set(e,l),l}function Ol(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ol(t,i,n,!0),s&&s.forEach(o=>Ol(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=nb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const nb={data:Mg,props:Lg,emits:Lg,methods:so,computed:so,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:so,directives:so,watch:sb,provide:Mg,inject:rb};function Mg(t,e){return e?t?function(){return We(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function rb(t,e){return so(xh(t),xh(e))}function xh(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ot(t,e){return t?[...new Set([].concat(t,e))]:e}function so(t,e){return t?We(Object.create(null),t,e):e}function Lg(t,e){return t?Z(t)&&Z(e)?[...new Set([...t,...e])]:We(Object.create(null),Dg(t),Dg(e??{})):e}function sb(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const r in e)n[r]=Ot(t[r],e[r]);return n}function gE(){return{app:null,config:{isNativeTag:SR,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ib=0;function ob(t,e){return function(r,s=null){re(r)||(r=We({},r)),s!=null&&!Oe(s)&&(s=null);const i=gE(),o=new Set;let a=!1;const l=i.app={_uid:ib++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:OE,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&re(c.install)?(o.add(c),c.install(l,...u)):re(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const f=ve(r,s);return f.appContext=i,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,xc(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Lo=l;try{return c()}finally{Lo=null}}};return l}}let Lo=null;function On(t,e){if(Qe){let n=Qe.provides;const r=Qe.parent&&Qe.parent.provides;r===n&&(n=Qe.provides=Object.create(r)),n[t]=e}}function Be(t,e,n=!1){const r=Qe||it;if(r||Lo){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Lo._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&re(e)?e.call(r&&r.proxy):e}}function mE(){return!!(Qe||it||Lo)}function ab(t,e,n,r=!1){const s={},i={};Cl(i,Dc,1),t.propsDefaults=Object.create(null),_E(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ca(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function lb(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=fe(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Pc(t.emitsOptions,f))continue;const d=e[f];if(l)if(_e(i,f))d!==i[f]&&(i[f]=d,c=!0);else{const p=Ln(f);s[p]=Mh(l,a,p,d,t,!1)}else d!==i[f]&&(i[f]=d,c=!0)}}}else{_E(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!_e(e,h)&&((u=Ai(h))===h||!_e(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Mh(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!_e(e,h))&&(delete i[h],c=!0)}c&&er(t,"set","$attrs")}function _E(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ho(l))continue;const c=e[l];let u;s&&_e(s,u=Ln(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Pc(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=fe(n),c=a||xe;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Mh(s,l,h,c[h],t,!_e(c,h))}}return o}function Mh(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=_e(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&re(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(ai(s),r=c[n]=l.call(null,e),ss())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ai(n))&&(r=!0))}return r}function yE(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!re(t)){const u=h=>{l=!0;const[f,d]=yE(h,e,!0);We(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Oe(t)&&r.set(t,Ws),Ws;if(Z(i))for(let u=0;u<i.length;u++){const h=Ln(i[u]);Vg(h)&&(o[h]=xe)}else if(i)for(const u in i){const h=Ln(u);if(Vg(h)){const f=i[u],d=o[h]=Z(f)||re(f)?{type:f}:We({},f);if(d){const p=$g(Boolean,d.type),y=$g(String,d.type);d[0]=p>-1,d[1]=y<0||p<y,(p>-1||_e(d,"default"))&&a.push(h)}}}const c=[o,a];return Oe(t)&&r.set(t,c),c}function Vg(t){return t[0]!=="$"}function Fg(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ug(t,e){return Fg(t)===Fg(e)}function $g(t,e){return Z(e)?e.findIndex(n=>Ug(n,t)):re(e)&&Ug(e,t)?0:-1}const vE=t=>t[0]==="_"||t==="$stable",Rd=t=>Z(t)?t.map(Yt):[Yt(t)],cb=(t,e,n)=>{if(e._n)return e;const r=pd((...s)=>Rd(e(...s)),n);return r._c=!1,r},EE=(t,e,n)=>{const r=t._ctx;for(const s in t){if(vE(s))continue;const i=t[s];if(re(i))e[s]=cb(s,i,r);else if(i!=null){const o=Rd(i);e[s]=()=>o}}},TE=(t,e)=>{const n=Rd(e);t.slots.default=()=>n},ub=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),Cl(e,"_",n)):EE(e,t.slots={})}else t.slots={},e&&TE(t,e);Cl(t.slots,Dc,1)},hb=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(We(s,e),!n&&a===1&&delete s._):(i=!e.$stable,EE(e,s)),o=e}else e&&(TE(t,e),o={default:1});if(i)for(const a in s)!vE(a)&&!(a in o)&&delete s[a]};function Dl(t,e,n,r,s=!1){if(Z(t)){t.forEach((f,d)=>Dl(f,e&&(Z(e)?e[d]:e),n,r,s));return}if(rs(r)&&!s)return;const i=r.shapeFlag&4?xc(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===xe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&($e(c)?(u[c]=null,_e(h,c)&&(h[c]=null)):Ze(c)&&(c.value=null)),re(l))Rr(l,a,12,[o,u]);else{const f=$e(l),d=Ze(l);if(f||d){const p=()=>{if(t.f){const y=f?_e(h,l)?h[l]:u[l]:l.value;s?Z(y)&&rd(y,i):Z(y)?y.includes(i)||y.push(i):f?(u[l]=[i],_e(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,_e(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,ht(p,n)):p()}}}let dr=!1;const Ka=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",za=t=>t.nodeType===8;function fb(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(v,m)=>{if(!m.hasChildNodes()){n(null,v,m),kl(),m._vnode=v;return}dr=!1,h(m.firstChild,v,null,null,null),kl(),m._vnode=v,dr&&console.error("Hydration completed but contains mismatches.")},h=(v,m,I,E,b,D=!1)=>{const M=za(v)&&v.data==="[",P=()=>y(v,m,I,E,b,M),{type:K,ref:W,shapeFlag:te,patchFlag:H}=m;let ee=v.nodeType;m.el=v,H===-2&&(D=!1,m.dynamicChildren=null);let q=null;switch(K){case si:ee!==3?m.children===""?(l(m.el=s(""),o(v),v),q=v):q=P():(v.data!==m.children&&(dr=!0,v.data=m.children),q=i(v));break;case xt:ee!==8||M?q=P():q=i(v);break;case go:if(M&&(v=i(v),ee=v.nodeType),ee===1||ee===3){q=v;const qe=!m.children.length;for(let de=0;de<m.staticCount;de++)qe&&(m.children+=q.nodeType===1?q.outerHTML:q.data),de===m.staticCount-1&&(m.anchor=q),q=i(q);return M?i(q):q}else P();break;case yt:M?q=p(v,m,I,E,b,D):q=P();break;default:if(te&1)ee!==1||m.type.toLowerCase()!==v.tagName.toLowerCase()?q=P():q=f(v,m,I,E,b,D);else if(te&6){m.slotScopeIds=b;const qe=o(v);if(e(m,qe,null,I,E,Ka(qe),D),q=M?T(v):i(v),q&&za(q)&&q.data==="teleport end"&&(q=i(q)),rs(m)){let de;M?(de=ve(yt),de.anchor=q?q.previousSibling:qe.lastChild):de=v.nodeType===3?PE(""):ve("div"),de.el=v,m.component.subTree=de}}else te&64?ee!==8?q=P():q=m.type.hydrate(v,m,I,E,b,D,t,d):te&128&&(q=m.type.hydrate(v,m,I,E,Ka(o(v)),b,D,t,h))}return W!=null&&Dl(W,null,E,m),q},f=(v,m,I,E,b,D)=>{D=D||!!m.dynamicChildren;const{type:M,props:P,patchFlag:K,shapeFlag:W,dirs:te}=m,H=M==="input"&&te||M==="option";if(H||K!==-1){if(te&&Rn(m,null,I,"created"),P)if(H||!D||K&48)for(const q in P)(H&&q.endsWith("value")||oa(q)&&!ho(q))&&r(v,q,null,P[q],!1,void 0,I);else P.onClick&&r(v,"onClick",null,P.onClick,!1,void 0,I);let ee;if((ee=P&&P.onVnodeBeforeMount)&&Ft(ee,I,m),te&&Rn(m,null,I,"beforeMount"),((ee=P&&P.onVnodeMounted)||te)&&nE(()=>{ee&&Ft(ee,I,m),te&&Rn(m,null,I,"mounted")},E),W&16&&!(P&&(P.innerHTML||P.textContent))){let q=d(v.firstChild,m,v,I,E,b,D);for(;q;){dr=!0;const qe=q;q=q.nextSibling,a(qe)}}else W&8&&v.textContent!==m.children&&(dr=!0,v.textContent=m.children)}return v.nextSibling},d=(v,m,I,E,b,D,M)=>{M=M||!!m.dynamicChildren;const P=m.children,K=P.length;for(let W=0;W<K;W++){const te=M?P[W]:P[W]=Yt(P[W]);if(v)v=h(v,te,E,b,D,M);else{if(te.type===si&&!te.children)continue;dr=!0,n(null,te,I,null,E,b,Ka(I),D)}}return v},p=(v,m,I,E,b,D)=>{const{slotScopeIds:M}=m;M&&(b=b?b.concat(M):M);const P=o(v),K=d(i(v),m,P,I,E,b,D);return K&&za(K)&&K.data==="]"?i(m.anchor=K):(dr=!0,l(m.anchor=c("]"),P,K),K)},y=(v,m,I,E,b,D)=>{if(dr=!0,m.el=null,D){const K=T(v);for(;;){const W=i(v);if(W&&W!==K)a(W);else break}}const M=i(v),P=o(v);return a(v),n(null,m,P,M,I,E,Ka(P),b),M},T=v=>{let m=0;for(;v;)if(v=i(v),v&&za(v)&&(v.data==="["&&m++,v.data==="]")){if(m===0)return i(v);m--}return v};return[u,h]}const ht=nE;function db(t){return wE(t)}function pb(t){return wE(t,fb)}function wE(t,e){const n=bh();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=dn,insertStaticContent:p}=t,y=(g,_,w,A=null,S=null,k=null,$=!1,x=null,L=!!_.dynamicChildren)=>{if(g===_)return;g&&!ln(g,_)&&(A=C(g),Lt(g,S,k,!0),g=null),_.patchFlag===-2&&(L=!1,_.dynamicChildren=null);const{type:N,ref:X,shapeFlag:z}=_;switch(N){case si:T(g,_,w,A);break;case xt:v(g,_,w,A);break;case go:g==null&&m(_,w,A,$);break;case yt:H(g,_,w,A,S,k,$,x,L);break;default:z&1?b(g,_,w,A,S,k,$,x,L):z&6?ee(g,_,w,A,S,k,$,x,L):(z&64||z&128)&&N.process(g,_,w,A,S,k,$,x,L,V)}X!=null&&S&&Dl(X,g&&g.ref,k,_||g,!_)},T=(g,_,w,A)=>{if(g==null)r(_.el=a(_.children),w,A);else{const S=_.el=g.el;_.children!==g.children&&c(S,_.children)}},v=(g,_,w,A)=>{g==null?r(_.el=l(_.children||""),w,A):_.el=g.el},m=(g,_,w,A)=>{[g.el,g.anchor]=p(g.children,_,w,A,g.el,g.anchor)},I=({el:g,anchor:_},w,A)=>{let S;for(;g&&g!==_;)S=f(g),r(g,w,A),g=S;r(_,w,A)},E=({el:g,anchor:_})=>{let w;for(;g&&g!==_;)w=f(g),s(g),g=w;s(_)},b=(g,_,w,A,S,k,$,x,L)=>{$=$||_.type==="svg",g==null?D(_,w,A,S,k,$,x,L):K(g,_,S,k,$,x,L)},D=(g,_,w,A,S,k,$,x)=>{let L,N;const{type:X,props:z,shapeFlag:J,transition:ie,dirs:ce}=g;if(L=g.el=o(g.type,k,z&&z.is,z),J&8?u(L,g.children):J&16&&P(g.children,L,null,A,S,k&&X!=="foreignObject",$,x),ce&&Rn(g,null,A,"created"),M(L,g,g.scopeId,$,A),z){for(const Pe in z)Pe!=="value"&&!ho(Pe)&&i(L,Pe,null,z[Pe],k,g.children,A,S,gt);"value"in z&&i(L,"value",null,z.value),(N=z.onVnodeBeforeMount)&&Ft(N,A,g)}ce&&Rn(g,null,A,"beforeMount");const Ne=(!S||S&&!S.pendingBranch)&&ie&&!ie.persisted;Ne&&ie.beforeEnter(L),r(L,_,w),((N=z&&z.onVnodeMounted)||Ne||ce)&&ht(()=>{N&&Ft(N,A,g),Ne&&ie.enter(L),ce&&Rn(g,null,A,"mounted")},S)},M=(g,_,w,A,S)=>{if(w&&d(g,w),A)for(let k=0;k<A.length;k++)d(g,A[k]);if(S){let k=S.subTree;if(_===k){const $=S.vnode;M(g,$,$.scopeId,$.slotScopeIds,S.parent)}}},P=(g,_,w,A,S,k,$,x,L=0)=>{for(let N=L;N<g.length;N++){const X=g[N]=x?_r(g[N]):Yt(g[N]);y(null,X,_,w,A,S,k,$,x)}},K=(g,_,w,A,S,k,$)=>{const x=_.el=g.el;let{patchFlag:L,dynamicChildren:N,dirs:X}=_;L|=g.patchFlag&16;const z=g.props||xe,J=_.props||xe;let ie;w&&Hr(w,!1),(ie=J.onVnodeBeforeUpdate)&&Ft(ie,w,_,g),X&&Rn(_,g,w,"beforeUpdate"),w&&Hr(w,!0);const ce=S&&_.type!=="foreignObject";if(N?W(g.dynamicChildren,N,x,w,A,ce,k):$||we(g,_,x,null,w,A,ce,k,!1),L>0){if(L&16)te(x,_,z,J,w,A,S);else if(L&2&&z.class!==J.class&&i(x,"class",null,J.class,S),L&4&&i(x,"style",z.style,J.style,S),L&8){const Ne=_.dynamicProps;for(let Pe=0;Pe<Ne.length;Pe++){const Ke=Ne[Pe],on=z[Ke],ks=J[Ke];(ks!==on||Ke==="value")&&i(x,Ke,on,ks,S,g.children,w,A,gt)}}L&1&&g.children!==_.children&&u(x,_.children)}else!$&&N==null&&te(x,_,z,J,w,A,S);((ie=J.onVnodeUpdated)||X)&&ht(()=>{ie&&Ft(ie,w,_,g),X&&Rn(_,g,w,"updated")},A)},W=(g,_,w,A,S,k,$)=>{for(let x=0;x<_.length;x++){const L=g[x],N=_[x],X=L.el&&(L.type===yt||!ln(L,N)||L.shapeFlag&70)?h(L.el):w;y(L,N,X,null,A,S,k,$,!0)}},te=(g,_,w,A,S,k,$)=>{if(w!==A){if(w!==xe)for(const x in w)!ho(x)&&!(x in A)&&i(g,x,w[x],null,$,_.children,S,k,gt);for(const x in A){if(ho(x))continue;const L=A[x],N=w[x];L!==N&&x!=="value"&&i(g,x,N,L,$,_.children,S,k,gt)}"value"in A&&i(g,"value",w.value,A.value)}},H=(g,_,w,A,S,k,$,x,L)=>{const N=_.el=g?g.el:a(""),X=_.anchor=g?g.anchor:a("");let{patchFlag:z,dynamicChildren:J,slotScopeIds:ie}=_;ie&&(x=x?x.concat(ie):ie),g==null?(r(N,w,A),r(X,w,A),P(_.children,w,X,S,k,$,x,L)):z>0&&z&64&&J&&g.dynamicChildren?(W(g.dynamicChildren,J,w,S,k,$,x),(_.key!=null||S&&_===S.subTree)&&IE(g,_,!0)):we(g,_,w,X,S,k,$,x,L)},ee=(g,_,w,A,S,k,$,x,L)=>{_.slotScopeIds=x,g==null?_.shapeFlag&512?S.ctx.activate(_,w,A,$,L):q(_,w,A,S,k,$,L):qe(g,_,L)},q=(g,_,w,A,S,k,$)=>{const x=g.component=Eb(g,A,S);if(ha(g)&&(x.ctx.renderer=V),Tb(x),x.asyncDep){if(S&&S.registerDep(x,de),!g.el){const L=x.subTree=ve(xt);v(null,L,_,w)}return}de(x,g,_,w,S,k,$)},qe=(g,_,w)=>{const A=_.component=g.component;if(DC(g,_,w))if(A.asyncDep&&!A.asyncResolved){Ee(A,_,w);return}else A.next=_,bC(A.update),A.update();else _.el=g.el,A.vnode=_},de=(g,_,w,A,S,k,$)=>{const x=()=>{if(g.isMounted){let{next:X,bu:z,u:J,parent:ie,vnode:ce}=g,Ne=X,Pe;Hr(g,!1),X?(X.el=ce.el,Ee(g,X,$)):X=ce,z&&fo(z),(Pe=X.props&&X.props.onVnodeBeforeUpdate)&&Ft(Pe,ie,X,ce),Hr(g,!0);const Ke=xu(g),on=g.subTree;g.subTree=Ke,y(on,Ke,h(on.el),C(on),g,S,k),X.el=Ke.el,Ne===null&&gd(g,Ke.el),J&&ht(J,S),(Pe=X.props&&X.props.onVnodeUpdated)&&ht(()=>Ft(Pe,ie,X,ce),S)}else{let X;const{el:z,props:J}=_,{bm:ie,m:ce,parent:Ne}=g,Pe=rs(_);if(Hr(g,!1),ie&&fo(ie),!Pe&&(X=J&&J.onVnodeBeforeMount)&&Ft(X,Ne,_),Hr(g,!0),z&&Ie){const Ke=()=>{g.subTree=xu(g),Ie(z,g.subTree,g,S,null)};Pe?_.type.__asyncLoader().then(()=>!g.isUnmounted&&Ke()):Ke()}else{const Ke=g.subTree=xu(g);y(null,Ke,w,A,g,S,k),_.el=Ke.el}if(ce&&ht(ce,S),!Pe&&(X=J&&J.onVnodeMounted)){const Ke=_;ht(()=>Ft(X,Ne,Ke),S)}(_.shapeFlag&256||Ne&&rs(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&g.a&&ht(g.a,S),g.isMounted=!0,_=w=A=null}},L=g.effect=new ad(x,()=>Sc(N),g.scope),N=g.update=()=>L.run();N.id=g.uid,Hr(g,!0),N()},Ee=(g,_,w)=>{_.component=g;const A=g.vnode.props;g.vnode=_,g.next=null,lb(g,_.props,A,w),hb(g,_.children,w),Ri(),bg(),Ci()},we=(g,_,w,A,S,k,$,x,L=!1)=>{const N=g&&g.children,X=g?g.shapeFlag:0,z=_.children,{patchFlag:J,shapeFlag:ie}=_;if(J>0){if(J&128){hr(N,z,w,A,S,k,$,x,L);return}else if(J&256){$n(N,z,w,A,S,k,$,x,L);return}}ie&8?(X&16&&gt(N,S,k),z!==N&&u(w,z)):X&16?ie&16?hr(N,z,w,A,S,k,$,x,L):gt(N,S,k,!0):(X&8&&u(w,""),ie&16&&P(z,w,A,S,k,$,x,L))},$n=(g,_,w,A,S,k,$,x,L)=>{g=g||Ws,_=_||Ws;const N=g.length,X=_.length,z=Math.min(N,X);let J;for(J=0;J<z;J++){const ie=_[J]=L?_r(_[J]):Yt(_[J]);y(g[J],ie,w,null,S,k,$,x,L)}N>X?gt(g,S,k,!0,!1,z):P(_,w,A,S,k,$,x,L,z)},hr=(g,_,w,A,S,k,$,x,L)=>{let N=0;const X=_.length;let z=g.length-1,J=X-1;for(;N<=z&&N<=J;){const ie=g[N],ce=_[N]=L?_r(_[N]):Yt(_[N]);if(ln(ie,ce))y(ie,ce,w,null,S,k,$,x,L);else break;N++}for(;N<=z&&N<=J;){const ie=g[z],ce=_[J]=L?_r(_[J]):Yt(_[J]);if(ln(ie,ce))y(ie,ce,w,null,S,k,$,x,L);else break;z--,J--}if(N>z){if(N<=J){const ie=J+1,ce=ie<X?_[ie].el:A;for(;N<=J;)y(null,_[N]=L?_r(_[N]):Yt(_[N]),w,ce,S,k,$,x,L),N++}}else if(N>J)for(;N<=z;)Lt(g[N],S,k,!0),N++;else{const ie=N,ce=N,Ne=new Map;for(N=ce;N<=J;N++){const jt=_[N]=L?_r(_[N]):Yt(_[N]);jt.key!=null&&Ne.set(jt.key,N)}let Pe,Ke=0;const on=J-ce+1;let ks=!1,mg=0;const ji=new Array(on);for(N=0;N<on;N++)ji[N]=0;for(N=ie;N<=z;N++){const jt=g[N];if(Ke>=on){Lt(jt,S,k,!0);continue}let In;if(jt.key!=null)In=Ne.get(jt.key);else for(Pe=ce;Pe<=J;Pe++)if(ji[Pe-ce]===0&&ln(jt,_[Pe])){In=Pe;break}In===void 0?Lt(jt,S,k,!0):(ji[In-ce]=N+1,In>=mg?mg=In:ks=!0,y(jt,_[In],w,null,S,k,$,x,L),Ke++)}const _g=ks?gb(ji):Ws;for(Pe=_g.length-1,N=on-1;N>=0;N--){const jt=ce+N,In=_[jt],yg=jt+1<X?_[jt+1].el:A;ji[N]===0?y(null,In,w,yg,S,k,$,x,L):ks&&(Pe<0||N!==_g[Pe]?wn(In,w,yg,2):Pe--)}}},wn=(g,_,w,A,S=null)=>{const{el:k,type:$,transition:x,children:L,shapeFlag:N}=g;if(N&6){wn(g.component.subTree,_,w,A);return}if(N&128){g.suspense.move(_,w,A);return}if(N&64){$.move(g,_,w,V);return}if($===yt){r(k,_,w);for(let z=0;z<L.length;z++)wn(L[z],_,w,A);r(g.anchor,_,w);return}if($===go){I(g,_,w);return}if(A!==2&&N&1&&x)if(A===0)x.beforeEnter(k),r(k,_,w),ht(()=>x.enter(k),S);else{const{leave:z,delayLeave:J,afterLeave:ie}=x,ce=()=>r(k,_,w),Ne=()=>{z(k,()=>{ce(),ie&&ie()})};J?J(k,ce,Ne):Ne()}else r(k,_,w)},Lt=(g,_,w,A=!1,S=!1)=>{const{type:k,props:$,ref:x,children:L,dynamicChildren:N,shapeFlag:X,patchFlag:z,dirs:J}=g;if(x!=null&&Dl(x,null,w,g,!0),X&256){_.ctx.deactivate(g);return}const ie=X&1&&J,ce=!rs(g);let Ne;if(ce&&(Ne=$&&$.onVnodeBeforeUnmount)&&Ft(Ne,_,g),X&6)Ua(g.component,w,A);else{if(X&128){g.suspense.unmount(w,A);return}ie&&Rn(g,null,_,"beforeUnmount"),X&64?g.type.remove(g,_,w,S,V,A):N&&(k!==yt||z>0&&z&64)?gt(N,_,w,!1,!0):(k===yt&&z&384||!S&&X&16)&&gt(L,_,w),A&&Ss(g)}(ce&&(Ne=$&&$.onVnodeUnmounted)||ie)&&ht(()=>{Ne&&Ft(Ne,_,g),ie&&Rn(g,null,_,"unmounted")},w)},Ss=g=>{const{type:_,el:w,anchor:A,transition:S}=g;if(_===yt){Ps(w,A);return}if(_===go){E(g);return}const k=()=>{s(w),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(g.shapeFlag&1&&S&&!S.persisted){const{leave:$,delayLeave:x}=S,L=()=>$(w,k);x?x(g.el,k,L):L()}else k()},Ps=(g,_)=>{let w;for(;g!==_;)w=f(g),s(g),g=w;s(_)},Ua=(g,_,w)=>{const{bum:A,scope:S,update:k,subTree:$,um:x}=g;A&&fo(A),S.stop(),k&&(k.active=!1,Lt($,g,_,w)),x&&ht(x,_),ht(()=>{g.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},gt=(g,_,w,A=!1,S=!1,k=0)=>{for(let $=k;$<g.length;$++)Lt(g[$],_,w,A,S)},C=g=>g.shapeFlag&6?C(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),j=(g,_,w)=>{g==null?_._vnode&&Lt(_._vnode,null,null,!0):y(_._vnode||null,g,_,null,null,null,w),bg(),kl(),_._vnode=g},V={p:y,um:Lt,m:wn,r:Ss,mt:q,mc:P,pc:we,pbc:W,n:C,o:t};let Q,Ie;return e&&([Q,Ie]=e(V)),{render:j,hydrate:Q,createApp:ob(j,Q)}}function Hr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function IE(t,e,n=!1){const r=t.children,s=e.children;if(Z(r)&&Z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=_r(s[i]),a.el=o.el),n||IE(o,a)),a.type===si&&(a.el=o.el)}}function gb(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const mb=t=>t.__isTeleport,yt=Symbol.for("v-fgt"),si=Symbol.for("v-txt"),xt=Symbol.for("v-cmt"),go=Symbol.for("v-stc"),mo=[];let Zt=null;function bn(t=!1){mo.push(Zt=t?null:[])}function AE(){mo.pop(),Zt=mo[mo.length-1]||null}let ii=1;function Bg(t){ii+=t}function RE(t){return t.dynamicChildren=ii>0?Zt||Ws:null,AE(),ii>0&&Zt&&Zt.push(t),t}function UH(t,e,n,r,s,i){return RE(bE(t,e,n,r,s,i,!0))}function qn(t,e,n,r,s){return RE(ve(t,e,n,r,s,!0))}function oi(t){return t?t.__v_isVNode===!0:!1}function ln(t,e){return t.type===e.type&&t.key===e.key}const Dc="__vInternal",CE=({key:t})=>t??null,gl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||Ze(t)||re(t)?{i:it,r:t,k:e,f:!!n}:t:null);function bE(t,e=null,n=null,r=0,s=null,i=t===yt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&CE(e),ref:e&&gl(e),scopeId:kc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:it};return a?(Cd(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),ii>0&&!o&&Zt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Zt.push(l),l}const ve=_b;function _b(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===fE)&&(t=xt),oi(t)){const a=tr(t,e,!0);return n&&Cd(a,n),ii>0&&!i&&Zt&&(a.shapeFlag&6?Zt[Zt.indexOf(t)]=a:Zt.push(a)),a.patchFlag|=-2,a}if(Rb(t)&&(t=t.__vccOpts),e){e=SE(e);let{class:a,style:l}=e;a&&!$e(a)&&(e.class=Cc(a)),Oe(l)&&(Hv(l)&&!Z(l)&&(l=We({},l)),e.style=Rc(l))}const o=$e(t)?1:tE(t)?128:mb(t)?64:Oe(t)?4:re(t)?2:0;return bE(t,e,n,r,s,o,i,!0)}function SE(t){return t?Hv(t)||Dc in t?We({},t):t:null}function tr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?bd(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&CE(a),ref:e&&e.ref?n&&s?Z(s)?s.concat(gl(e)):[s,gl(e)]:gl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==yt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&tr(t.ssContent),ssFallback:t.ssFallback&&tr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function PE(t=" ",e=0){return ve(si,null,t,e)}function $H(t,e){const n=ve(go,null,t);return n.staticCount=e,n}function BH(t="",e=!1){return e?(bn(),qn(xt,null,t)):ve(xt,null,t)}function Yt(t){return t==null||typeof t=="boolean"?ve(xt):Z(t)?ve(yt,null,t.slice()):typeof t=="object"?_r(t):ve(si,null,String(t))}function _r(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:tr(t)}function Cd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Cd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Dc in e)?e._ctx=it:s===3&&it&&(it.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:it},n=32):(e=String(e),r&64?(n=16,e=[PE(e)]):n=8);t.children=e,t.shapeFlag|=n}function bd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Cc([e.class,r.class]));else if(s==="style")e.style=Rc([e.style,r.style]);else if(oa(s)){const i=e[s],o=r[s];o&&i!==o&&!(Z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ft(t,e,n,r=null){nn(t,e,7,[n,r])}const yb=gE();let vb=0;function Eb(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||yb,i={uid:vb++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yE(r,s),emitsOptions:eE(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=PC.bind(null,i),t.ce&&t.ce(i),i}let Qe=null;const Vr=()=>Qe||it;let Sd,Ns,Hg="__VUE_INSTANCE_SETTERS__";(Ns=bh()[Hg])||(Ns=bh()[Hg]=[]),Ns.push(t=>Qe=t),Sd=t=>{Ns.length>1?Ns.forEach(e=>e(t)):Ns[0](t)};const ai=t=>{Sd(t),t.scope.on()},ss=()=>{Qe&&Qe.scope.off(),Sd(null)};function kE(t){return t.vnode.shapeFlag&4}let li=!1;function Tb(t,e=!1){li=e;const{props:n,children:r}=t.vnode,s=kE(t);ab(t,n,s,e),ub(t,r);const i=s?wb(t,e):void 0;return li=!1,i}function wb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Pl(new Proxy(t.ctx,ZC));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Ab(t):null;ai(t),Ri();const i=Rr(r,t,0,[t.props,s]);if(Ci(),ss(),Iv(i)){if(i.then(ss,ss),e)return i.then(o=>{Lh(t,o,e)}).catch(o=>{bi(o,t,0)});t.asyncDep=i}else Lh(t,i,e)}else NE(t,e)}function Lh(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=Kv(e)),NE(t,n)}let jg;function NE(t,e,n){const r=t.type;if(!t.render){if(!e&&jg&&!r.render){const s=r.template||Ad(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=We(We({isCustomElement:i,delimiters:a},o),l);r.render=jg(s,c)}}t.render=r.render||dn}ai(t),Ri(),eb(t),Ci(),ss()}function Ib(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ht(t,"get","$attrs"),e[n]}}))}function Ab(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Ib(t)},slots:t.slots,emit:t.emit,expose:e}}function xc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Kv(Pl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in po)return po[n](t)},has(e,n){return n in e||n in po}}))}function Vh(t,e=!0){return re(t)?t.displayName||t.name:t.name||e&&t.__name}function Rb(t){return re(t)&&"__vccOpts"in t}const be=(t,e)=>AC(t,e,li);function $t(t,e,n){const r=arguments.length;return r===2?Oe(e)&&!Z(e)?oi(e)?ve(t,null,[e]):ve(t,e):ve(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&oi(n)&&(n=[n]),ve(t,e,n))}const Cb=Symbol.for("v-scx"),bb=()=>Be(Cb),OE="3.3.4",Sb="http://www.w3.org/2000/svg",Qr=typeof document<"u"?document:null,Wg=Qr&&Qr.createElement("template"),Pb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Qr.createElementNS(Sb,t):Qr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Qr.createTextNode(t),createComment:t=>Qr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Wg.innerHTML=r?`<svg>${t}</svg>`:t;const a=Wg.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function kb(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Nb(t,e,n){const r=t.style,s=$e(n);if(n&&!s){if(e&&!$e(e))for(const i in e)n[i]==null&&Fh(r,i,"");for(const i in n)Fh(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const qg=/\s*!important$/;function Fh(t,e,n){if(Z(n))n.forEach(r=>Fh(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ob(t,e);qg.test(n)?t.setProperty(Ai(r),n.replace(qg,""),"important"):t[r]=n}}const Kg=["Webkit","Moz","ms"],$u={};function Ob(t,e){const n=$u[e];if(n)return n;let r=Ln(e);if(r!=="filter"&&r in t)return $u[e]=r;r=la(r);for(let s=0;s<Kg.length;s++){const i=Kg[s]+r;if(i in t)return $u[e]=i}return e}const zg="http://www.w3.org/1999/xlink";function Db(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(zg,e.slice(6,e.length)):t.setAttributeNS(zg,e,n);else{const i=HR(e);n==null||i&&!bv(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function xb(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=bv(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Mb(t,e,n,r){t.addEventListener(e,n,r)}function Lb(t,e,n,r){t.removeEventListener(e,n,r)}function Vb(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=Fb(e);if(r){const c=i[e]=Bb(r,s);Mb(t,a,c,l)}else o&&(Lb(t,a,o,l),i[e]=void 0)}}const Gg=/(?:Once|Passive|Capture)$/;function Fb(t){let e;if(Gg.test(t)){e={};let r;for(;r=t.match(Gg);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ai(t.slice(2)),e]}let Bu=0;const Ub=Promise.resolve(),$b=()=>Bu||(Ub.then(()=>Bu=0),Bu=Date.now());function Bb(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;nn(Hb(r,n.value),e,5,[r])};return n.value=t,n.attached=$b(),n}function Hb(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Qg=/^on[a-z]/,jb=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?kb(t,r,s):e==="style"?Nb(t,n,r):oa(e)?nd(e)||Vb(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wb(t,e,r,s))?xb(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Db(t,e,r,s))};function Wb(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Qg.test(e)&&re(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Qg.test(e)&&$e(n)?!1:e in t}const pr="transition",Wi="animation",Mc=(t,{slots:e})=>$t(HC,xE(t),e);Mc.displayName="Transition";const DE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},qb=Mc.props=We({},iE,DE),jr=(t,e=[])=>{Z(t)?t.forEach(n=>n(...e)):t&&t(...e)},Yg=t=>t?Z(t)?t.some(e=>e.length>1):t.length>1:!1;function xE(t){const e={};for(const H in t)H in DE||(e[H]=t[H]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,p=Kb(s),y=p&&p[0],T=p&&p[1],{onBeforeEnter:v,onEnter:m,onEnterCancelled:I,onLeave:E,onLeaveCancelled:b,onBeforeAppear:D=v,onAppear:M=m,onAppearCancelled:P=I}=e,K=(H,ee,q)=>{mr(H,ee?u:a),mr(H,ee?c:o),q&&q()},W=(H,ee)=>{H._isLeaving=!1,mr(H,h),mr(H,d),mr(H,f),ee&&ee()},te=H=>(ee,q)=>{const qe=H?M:m,de=()=>K(ee,H,q);jr(qe,[ee,de]),Xg(()=>{mr(ee,H?l:i),Hn(ee,H?u:a),Yg(qe)||Jg(ee,r,y,de)})};return We(e,{onBeforeEnter(H){jr(v,[H]),Hn(H,i),Hn(H,o)},onBeforeAppear(H){jr(D,[H]),Hn(H,l),Hn(H,c)},onEnter:te(!1),onAppear:te(!0),onLeave(H,ee){H._isLeaving=!0;const q=()=>W(H,ee);Hn(H,h),LE(),Hn(H,f),Xg(()=>{H._isLeaving&&(mr(H,h),Hn(H,d),Yg(E)||Jg(H,r,T,q))}),jr(E,[H,q])},onEnterCancelled(H){K(H,!1),jr(I,[H])},onAppearCancelled(H){K(H,!0),jr(P,[H])},onLeaveCancelled(H){W(H),jr(b,[H])}})}function Kb(t){if(t==null)return null;if(Oe(t))return[Hu(t.enter),Hu(t.leave)];{const e=Hu(t);return[e,e]}}function Hu(t){return Cv(t)}function Hn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function mr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Xg(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let zb=0;function Jg(t,e,n,r){const s=t._endId=++zb,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=ME(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),i()},f=d=>{d.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function ME(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),s=r(`${pr}Delay`),i=r(`${pr}Duration`),o=Zg(s,i),a=r(`${Wi}Delay`),l=r(`${Wi}Duration`),c=Zg(a,l);let u=null,h=0,f=0;e===pr?o>0&&(u=pr,h=o,f=i.length):e===Wi?c>0&&(u=Wi,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?pr:Wi:null,f=u?u===pr?i.length:l.length:0);const d=u===pr&&/\b(transform|all)(,|$)/.test(r(`${pr}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function Zg(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>em(n)+em(t[r])))}function em(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function LE(){return document.body.offsetHeight}const VE=new WeakMap,FE=new WeakMap,UE={name:"TransitionGroup",props:We({},qb,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Vr(),r=sE();let s,i;return Td(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Jb(s[0].el,n.vnode.el,o))return;s.forEach(Qb),s.forEach(Yb);const a=s.filter(Xb);LE(),a.forEach(l=>{const c=l.el,u=c.style;Hn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,mr(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=fe(t),a=xE(o);let l=o.tag||yt;s=i,i=e.default?vd(e.default()):[];for(let c=0;c<i.length;c++){const u=i[c];u.key!=null&&ri(u,Mo(u,a,r,n))}if(s)for(let c=0;c<s.length;c++){const u=s[c];ri(u,Mo(u,a,r,n)),VE.set(u,u.el.getBoundingClientRect())}return ve(l,null,i)}}},Gb=t=>delete t.mode;UE.props;const HH=UE;function Qb(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Yb(t){FE.set(t,t.el.getBoundingClientRect())}function Xb(t){const e=VE.get(t),n=FE.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function Jb(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:i}=ME(r);return s.removeChild(r),i}const jH={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):qi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),qi(t,!0),r.enter(t)):r.leave(t,()=>{qi(t,!1)}):qi(t,e))},beforeUnmount(t,{value:e}){qi(t,e)}};function qi(t,e){t.style.display=e?t._vod:"none"}const $E=We({patchProp:jb},Pb);let _o,tm=!1;function Zb(){return _o||(_o=db($E))}function eS(){return _o=tm?_o:pb($E),tm=!0,_o}const tS=(...t)=>{const e=Zb().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=BE(r);if(!s)return;const i=e._component;!re(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},nS=(...t)=>{const e=eS().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=BE(r);if(s)return n(s,!0,s instanceof SVGElement)},e};function BE(t){return $e(t)?document.querySelector(t):t}const rS=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,sS=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,iS=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function oS(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){aS(t);return}return e}function aS(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function lS(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t[t.length-1]==='"')return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!iS.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(rS.test(t)||sS.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,oS)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const HE=/#/g,jE=/&/g,cS=/\//g,uS=/=/g,hS=/\?/g,Lc=/\+/g,fS=/%5e/gi,dS=/%60/gi,pS=/%7c/gi,gS=/%20/gi,mS=/%252f/gi;function WE(t){return encodeURI(""+t).replace(pS,"|")}function Uh(t){return WE(typeof t=="string"?t:JSON.stringify(t)).replace(Lc,"%2B").replace(gS,"+").replace(HE,"%23").replace(jE,"%26").replace(dS,"`").replace(fS,"^")}function ju(t){return Uh(t).replace(uS,"%3D")}function _S(t){return WE(t).replace(HE,"%23").replace(hS,"%3F").replace(mS,"%2F").replace(jE,"%26").replace(Lc,"%2B")}function WH(t){return _S(t).replace(cS,"%2F")}function xl(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function yS(t){return xl(t.replace(Lc," "))}function vS(t){return xl(t.replace(Lc," "))}function ES(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=yS(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=vS(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function TS(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${ju(t)}=${Uh(n)}`).join("&"):`${ju(t)}=${Uh(e)}`:ju(t)}function wS(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>TS(e,t[e])).filter(Boolean).join("&")}const IS=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,qE=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,AS=/^([/\\]\s*){2,}[^/\\]/;function Si(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?IS.test(t):qE.test(t)||(e.acceptRelative?AS.test(t):!1)}const RS=/^[\s\0]*(blob|data|javascript|vbscript):$/;function CS(t){return!!t&&RS.test(t)}const bS=/\/$|\/\?/;function $h(t="",e=!1){return e?bS.test(t):t.endsWith("/")}function KE(t="",e=!1){if(!e)return($h(t)?t.slice(0,-1):t)||"/";if(!$h(t,!0))return t||"/";const[n,...r]=t.split("?");return(n.slice(0,-1)||"/")+(r.length>0?`?${r.join("?")}`:"")}function Bh(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if($h(t,!0))return t||"/";const[n,...r]=t.split("?");return n+"/"+(r.length>0?`?${r.join("?")}`:"")}function SS(t=""){return t.startsWith("/")}function nm(t=""){return SS(t)?t:"/"+t}function PS(t,e){if(GE(e)||Si(t))return t;const n=KE(e);return t.startsWith(n)?t:fa(n,t)}function rm(t,e){if(GE(e))return t;const n=KE(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function zE(t,e){const n=Vc(t),r={...ES(n.search),...e};return n.search=wS(r),MS(n)}function GE(t){return!t||t==="/"}function kS(t){return t&&t!=="/"}const NS=/^\.?\//;function fa(t,...e){let n=t||"";for(const r of e.filter(s=>kS(s)))if(n){const s=r.replace(NS,"");n=Bh(n)+s}else n=r;return n}function OS(t){return DS(t,"https://")}function DS(t,e){const n=t.match(qE);return n?e+t.slice(n[0].length):e+t}function xS(t,e,n={}){return n.trailingSlash||(t=Bh(t),e=Bh(e)),n.leadingSlash||(t=nm(t),e=nm(e)),n.encoding||(t=xl(t),e=xl(e)),t===e}function Vc(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/);if(n){const[,h,f=""]=n;return{protocol:h,pathname:f,href:h+f,auth:"",host:"",search:"",hash:""}}if(!Si(t,{acceptRelative:!0}))return e?Vc(e+t):sm(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[],{pathname:l,search:c,hash:u}=sm(a.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:r,auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:c,hash:u}}function sm(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function MS(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol?t.protocol+"//":"")+s+i+e+n+r}class LS extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function VS(t){var l,c,u,h,f;const e=((l=t.error)==null?void 0:l.message)||((c=t.error)==null?void 0:c.toString())||"",n=((u=t.request)==null?void 0:u.method)||((h=t.options)==null?void 0:h.method)||"GET",r=((f=t.request)==null?void 0:f.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new LS(o,t.error?{cause:t.error}:void 0);for(const d of["request","options","response"])Object.defineProperty(a,d,{get(){return t[d]}});for(const[d,p]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,d,{get(){return t.response&&t.response[p]}});return a}const FS=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function im(t="GET"){return FS.has(t.toUpperCase())}function US(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const $S=new Set(["image/svg","application/xml","application/xhtml","application/html"]),BS=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function HS(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return BS.test(e)?"json":$S.has(e)||e.startsWith("text/")?"text":"blob"}function jS(t,e,n=globalThis.Headers){const r={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(r.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(r.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){r.headers=new n((e==null?void 0:e.headers)||{});for(const[s,i]of new n((t==null?void 0:t.headers)||{}))r.headers.set(s,i)}return r}const WS=new Set([408,409,425,429,500,502,503,504]),qS=new Set([101,204,205,304]);function QE(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let u;typeof a.options.retry=="number"?u=a.options.retry:u=im(a.options.method)?0:1;const h=a.response&&a.response.status||500;if(u>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(h):WS.has(h))){const f=a.options.retryDelay||0;return f>0&&await new Promise(d=>setTimeout(d,f)),i(a.request,{...a.options,retry:u-1,timeout:a.options.timeout})}}const c=VS(a);throw Error.captureStackTrace&&Error.captureStackTrace(c,i),c}const i=async function(l,c={}){var f;const u={request:l,options:jS(c,t.defaults,n),response:void 0,error:void 0};if(u.options.method=(f=u.options.method)==null?void 0:f.toUpperCase(),u.options.onRequest&&await u.options.onRequest(u),typeof u.request=="string"&&(u.options.baseURL&&(u.request=PS(u.request,u.options.baseURL)),(u.options.query||u.options.params)&&(u.request=zE(u.request,{...u.options.params,...u.options.query}))),u.options.body&&im(u.options.method)&&(US(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new n(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half"))),!u.options.signal&&u.options.timeout){const d=new r;setTimeout(()=>d.abort(),u.options.timeout),u.options.signal=d.signal}try{u.response=await e(u.request,u.options)}catch(d){return u.error=d,u.options.onRequestError&&await u.options.onRequestError(u),await s(u)}if(u.response.body&&!qS.has(u.response.status)&&u.options.method!=="HEAD"){const d=(u.options.parseResponse?"json":u.options.responseType)||HS(u.response.headers.get("content-type")||"");switch(d){case"json":{const p=await u.response.text(),y=u.options.parseResponse||lS;u.response._data=y(p);break}case"stream":{u.response._data=u.response.body;break}default:u.response._data=await u.response[d]()}}return u.options.onResponse&&await u.options.onResponse(u),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await u.options.onResponseError(u),await s(u)):u.response},o=async function(l,c){return(await i(l,c))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={})=>QE({...t,defaults:{...t.defaults,...a}}),o}const Pd=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),KS=Pd.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),zS=Pd.Headers,GS=Pd.AbortController,QS=QE({fetch:KS,Headers:zS,AbortController:GS}),YS=QS,XS=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Ml=XS().app,JS=()=>Ml.baseURL,ZS=()=>Ml.buildAssetsDir,eP=(...t)=>fa(YE(),ZS(),...t),YE=(...t)=>{const e=Ml.cdnURL||Ml.baseURL;return t.length?fa(e,...t):e};globalThis.__buildAssetsURL=eP,globalThis.__publicAssetsURL=YE;function Hh(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Hh(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const tP={run:t=>t()},nP=()=>tP,XE=typeof console.createTask<"u"?console.createTask:nP;function rP(t,e){const n=e.shift(),r=XE(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function sP(t,e){const n=e.shift(),r=XE(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Wu(t,e){for(const n of[...t])n(e)}class iP{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Hh(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Hh(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(rP,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(sP,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Wu(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Wu(this._after,s)}):(this._after&&s&&Wu(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function JE(){return new iP}function oP(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},c=()=>e===o?l:void 0;jh.add(c);try{const u=s?s.run(o,a):a();return n||(e=void 0),await u}finally{jh.delete(c)}}}}function aP(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=oP({...t,...r})),e[n],e[n]}}}const Ll=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},om="__unctx__",lP=Ll[om]||(Ll[om]=aP()),cP=(t,e={})=>lP.get(t,e),am="__unctx_async_handlers__",jh=Ll[am]||(Ll[am]=new Set);function Vl(t){const e=[];for(const s of jh){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const ZE=cP("nuxt-app",{asyncContext:!1}),uP="__nuxt_plugin";function hP(t){let e=0;const n={provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.7.0"},get vue(){return n.vueApp.version}},payload:rn({data:{},state:{},_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:s=>gP(n,s),isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...t};n.hooks=JE(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,i)=>{const o="$"+s;Ga(n,o,i),Ga(n.vueApp.config.globalProperties,o,i)},Ga(n.vueApp,"$nuxt",n),Ga(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",i=>{n.callHook("app:chunkError",{error:i.payload})}),window.useNuxtApp=window.useNuxtApp||He;const s=n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});n.hook("app:mounted",s)}const r=rn(n.payload.config);return n.provide("config",r),n}async function fP(t,e){if(e.hooks&&t.hooks.addHooks(e.hooks),typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function dP(t,e){const n=[],r=[];for(const s of e){const i=fP(t,s);s.parallel?n.push(i.catch(o=>r.push(o))):await i}if(await Promise.all(n),r.length)throw r[0]}/*! @__NO_SIDE_EFFECTS__ */function Mt(t){return typeof t=="function"?t:(delete t.name,Object.assign(t.setup||(()=>{}),t,{[uP]:!0}))}const pP=Mt;function gP(t,e,n){const r=()=>n?e(...n):e();return ZE.set(t),t.vueApp.runWithContext(r)}/*! @__NO_SIDE_EFFECTS__ */function He(){var e;let t;if(mE()&&(t=(e=Vr())==null?void 0:e.appContext.app.$nuxt),t=t||ZE.tryUse(),!t)throw new Error("[nuxt] instance unavailable");return t}/*! @__NO_SIDE_EFFECTS__ */function Fc(){return He().$config}function Ga(t,e,n){Object.defineProperty(t,e,{get:()=>n})}/**
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
 */const eT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const F=function(t,e){if(!t)throw Pi(e)},Pi=function(t){return new Error("Firebase Database ("+eT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const tT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},mP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Uc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new _P;const f=i<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _P extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nT=function(t){const e=tT(t);return Uc.encodeByteArray(e,!0)},Fl=function(t){return nT(t).replace(/\./g,"")},Ul=function(t){try{return Uc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function yP(t){return rT(void 0,t)}function rT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!vP(n)||(t[n]=rT(t[n],e[n]));return t}function vP(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function EP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const TP=()=>EP().__FIREBASE_DEFAULTS__,wP=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},IP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ul(t[1]);return e&&JSON.parse(e)},kd=()=>{try{return TP()||wP()||IP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sT=t=>{var e,n;return(n=(e=kd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},iT=t=>{const e=sT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},oT=()=>{var t;return(t=kd())===null||t===void 0?void 0:t.config},aT=t=>{var e;return(e=kd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Vo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function lT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Fl(JSON.stringify(n)),Fl(JSON.stringify(o)),a].join(".")}/**
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
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function AP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RP(){const t=St();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uT(){return eT.NODE_ADMIN===!0}function hT(){try{return typeof indexedDB=="object"}catch{return!1}}function CP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function qH(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const bP="FirebaseError";class Un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bP,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ki.prototype.create)}}class ki{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?SP(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Un(s,a,r)}}function SP(t,e){return t.replace(PP,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const PP=/\{\$([^}]+)}/g;/**
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
 */function Fo(t){return JSON.parse(t)}function dt(t){return JSON.stringify(t)}/**
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
 */const fT=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Fo(Ul(i[0])||""),n=Fo(Ul(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},kP=function(t){const e=fT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},NP=function(t){const e=fT(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ur(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ci(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Wh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $l(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Bl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(lm(i)&&lm(o)){if(!Bl(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function lm(t){return t!==null&&typeof t=="object"}/**
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
 */function Ni(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class OP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+r[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function DP(t,e){const n=new xP(t,e);return n.subscribe.bind(n)}class xP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");MP(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=qu),s.error===void 0&&(s.error=qu),s.complete===void 0&&(s.complete=qu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qu(){}function LP(t,e){return`${t} failed: ${e} argument `}/**
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
 */const VP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,F(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},$c=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Pt(t){return t&&t._delegate?t._delegate:t}class _n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qr="[DEFAULT]";/**
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
 */class FP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Vo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($P(e))try{this.getOrInitializeService({instanceIdentifier:qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qr){return this.instances.has(e)}getOptions(e=qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qr){return this.component?this.component.multipleInstances?e:qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UP(t){return t===qr?void 0:t}function $P(t){return t.instantiationMode==="EAGER"}/**
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
 */class BP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const HP={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},jP=ye.INFO,WP={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},qP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=WP[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class da{constructor(e){this.name=e,this._logLevel=jP,this._logHandler=qP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const KP=(t,e)=>e.some(n=>t instanceof n);let cm,um;function zP(){return cm||(cm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GP(){return um||(um=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dT=new WeakMap,qh=new WeakMap,pT=new WeakMap,Ku=new WeakMap,Od=new WeakMap;function QP(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Cr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dT.set(n,t)}).catch(()=>{}),Od.set(e,t),e}function YP(t){if(qh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});qh.set(t,e)}let Kh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XP(t){Kh=t(Kh)}function JP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zu(this),e,...n);return pT.set(r,e.sort?e.sort():[e]),Cr(r)}:GP().includes(t)?function(...e){return t.apply(zu(this),e),Cr(dT.get(this))}:function(...e){return Cr(t.apply(zu(this),e))}}function ZP(t){return typeof t=="function"?JP(t):(t instanceof IDBTransaction&&YP(t),KP(t,zP())?new Proxy(t,Kh):t)}function Cr(t){if(t instanceof IDBRequest)return QP(t);if(Ku.has(t))return Ku.get(t);const e=ZP(t);return e!==t&&(Ku.set(t,e),Od.set(e,t)),e}const zu=t=>Od.get(t);function ek(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Cr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Cr(o.result),l.oldVersion,l.newVersion,Cr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const tk=["get","getKey","getAll","getAllKeys","count"],nk=["put","add","delete","clear"],Gu=new Map;function hm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gu.get(e))return Gu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=nk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||tk.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Gu.set(e,i),i}XP(t=>({...t,get:(e,n,r)=>hm(e,n)||t.get(e,n,r),has:(e,n)=>!!hm(e,n)||t.has(e,n)}));/**
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
 */class rk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zh="@firebase/app",fm="0.9.17";/**
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
 */const hs=new da("@firebase/app"),ik="@firebase/app-compat",ok="@firebase/analytics-compat",ak="@firebase/analytics",lk="@firebase/app-check-compat",ck="@firebase/app-check",uk="@firebase/auth",hk="@firebase/auth-compat",fk="@firebase/database",dk="@firebase/database-compat",pk="@firebase/functions",gk="@firebase/functions-compat",mk="@firebase/installations",_k="@firebase/installations-compat",yk="@firebase/messaging",vk="@firebase/messaging-compat",Ek="@firebase/performance",Tk="@firebase/performance-compat",wk="@firebase/remote-config",Ik="@firebase/remote-config-compat",Ak="@firebase/storage",Rk="@firebase/storage-compat",Ck="@firebase/firestore",bk="@firebase/firestore-compat",Sk="firebase",Pk="10.3.0";/**
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
 */const Gh="[DEFAULT]",kk={[zh]:"fire-core",[ik]:"fire-core-compat",[ak]:"fire-analytics",[ok]:"fire-analytics-compat",[ck]:"fire-app-check",[lk]:"fire-app-check-compat",[uk]:"fire-auth",[hk]:"fire-auth-compat",[fk]:"fire-rtdb",[dk]:"fire-rtdb-compat",[pk]:"fire-fn",[gk]:"fire-fn-compat",[mk]:"fire-iid",[_k]:"fire-iid-compat",[yk]:"fire-fcm",[vk]:"fire-fcm-compat",[Ek]:"fire-perf",[Tk]:"fire-perf-compat",[wk]:"fire-rc",[Ik]:"fire-rc-compat",[Ak]:"fire-gcs",[Rk]:"fire-gcs-compat",[Ck]:"fire-fst",[bk]:"fire-fst-compat","fire-js":"fire-js",[Sk]:"fire-js-all"};/**
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
 */const Hl=new Map,Qh=new Map;function Nk(t,e){try{t.container.addComponent(e)}catch(n){hs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vn(t){const e=t.name;if(Qh.has(e))return hs.debug(`There were multiple attempts to register component ${e}.`),!1;Qh.set(e,t);for(const n of Hl.values())Nk(n,t);return!0}function Bc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ok={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},br=new ki("app","Firebase",Ok);/**
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
 */class Dk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}}/**
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
 */const Fr=Pk;function gT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw br.create("bad-app-name",{appName:String(s)});if(n||(n=oT()),!n)throw br.create("no-options");const i=Hl.get(s);if(i){if(Bl(n,i.options)&&Bl(r,i.config))return i;throw br.create("duplicate-app",{appName:s})}const o=new BP(s);for(const l of Qh.values())o.addComponent(l);const a=new Dk(n,r,o);return Hl.set(s,a),a}function Hc(t=Gh){const e=Hl.get(t);if(!e&&t===Gh&&oT())return gT();if(!e)throw br.create("no-app",{appName:t});return e}function Kt(t,e,n){var r;let s=(r=kk[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hs.warn(a.join(" "));return}Vn(new _n(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const xk="firebase-heartbeat-database",Mk=1,Uo="firebase-heartbeat-store";let Qu=null;function mT(){return Qu||(Qu=ek(xk,Mk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Uo)}}}).catch(t=>{throw br.create("idb-open",{originalErrorMessage:t.message})})),Qu}async function Lk(t){try{return await(await mT()).transaction(Uo).objectStore(Uo).get(_T(t))}catch(e){if(e instanceof Un)hs.warn(e.message);else{const n=br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hs.warn(n.message)}}}async function dm(t,e){try{const r=(await mT()).transaction(Uo,"readwrite");await r.objectStore(Uo).put(e,_T(t)),await r.done}catch(n){if(n instanceof Un)hs.warn(n.message);else{const r=br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hs.warn(r.message)}}}function _T(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Vk=1024,Fk=30*24*60*60*1e3;class Uk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=pm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Fk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pm(),{heartbeatsToSend:n,unsentEntries:r}=$k(this._heartbeatsCache.heartbeats),s=Fl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function pm(){return new Date().toISOString().substring(0,10)}function $k(t,e=Vk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),gm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),gm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Bk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hT()?CP().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Lk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return dm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return dm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function gm(t){return Fl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Hk(t){Vn(new _n("platform-logger",e=>new rk(e),"PRIVATE")),Vn(new _n("heartbeat",e=>new Uk(e),"PRIVATE")),Kt(zh,fm,t),Kt(zh,fm,"esm2017"),Kt("fire-js","")}Hk("");var jk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,Dd=Dd||{},se=jk||self;function jc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function pa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Wk(t){return Object.prototype.hasOwnProperty.call(t,Yu)&&t[Yu]||(t[Yu]=++qk)}var Yu="closure_uid_"+(1e9*Math.random()>>>0),qk=0;function Kk(t,e,n){return t.call.apply(t.bind,arguments)}function zk(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Rt=Kk:Rt=zk,Rt.apply(null,arguments)}function Qa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function lt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Ur(){this.s=this.s,this.o=this.o}var Gk=0;Ur.prototype.s=!1;Ur.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Gk!=0)&&Wk(this)};Ur.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function xd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function mm(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(jc(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Ct(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ct.prototype.h=function(){this.defaultPrevented=!0};var Qk=function(){if(!se.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{se.addEventListener("test",()=>{},e),se.removeEventListener("test",()=>{},e)}catch{}return t}();function $o(t){return/^[\s\xa0]*$/.test(t)}function Wc(){var t=se.navigator;return t&&(t=t.userAgent)?t:""}function Sn(t){return Wc().indexOf(t)!=-1}function Md(t){return Md[" "](t),t}Md[" "]=function(){};function Yk(t,e){var n=HN;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Xk=Sn("Opera"),ui=Sn("Trident")||Sn("MSIE"),vT=Sn("Edge"),Yh=vT||ui,ET=Sn("Gecko")&&!(Wc().toLowerCase().indexOf("webkit")!=-1&&!Sn("Edge"))&&!(Sn("Trident")||Sn("MSIE"))&&!Sn("Edge"),Jk=Wc().toLowerCase().indexOf("webkit")!=-1&&!Sn("Edge");function TT(){var t=se.document;return t?t.documentMode:void 0}var Xh;e:{var Xu="",Ju=function(){var t=Wc();if(ET)return/rv:([^\);]+)(\)|;)/.exec(t);if(vT)return/Edge\/([\d\.]+)/.exec(t);if(ui)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Jk)return/WebKit\/(\S+)/.exec(t);if(Xk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ju&&(Xu=Ju?Ju[1]:""),ui){var Zu=TT();if(Zu!=null&&Zu>parseFloat(Xu)){Xh=String(Zu);break e}}Xh=Xu}var Jh;if(se.document&&ui){var _m=TT();Jh=_m||parseInt(Xh,10)||void 0}else Jh=void 0;var Zk=Jh;function Bo(t,e){if(Ct.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ET){e:{try{Md(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:eN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Bo.$.h.call(this)}}lt(Bo,Ct);var eN={2:"touch",3:"pen",4:"mouse"};Bo.prototype.h=function(){Bo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ga="closure_listenable_"+(1e6*Math.random()|0),tN=0;function nN(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++tN,this.fa=this.ia=!1}function qc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ld(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function rN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function wT(t){const e={};for(const n in t)e[n]=t[n];return e}const ym="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function IT(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<ym.length;i++)n=ym[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Kc(t){this.src=t,this.g={},this.h=0}Kc.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ef(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new nN(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Zh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=yT(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(qc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ef(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Vd="closure_lm_"+(1e6*Math.random()|0),eh={};function AT(t,e,n,r,s){if(r&&r.once)return CT(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)AT(t,e[i],n,r,s);return null}return n=$d(n),t&&t[ga]?t.O(e,n,pa(r)?!!r.capture:!!r,s):RT(t,e,n,!1,r,s)}function RT(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=pa(s)?!!s.capture:!!s,a=Ud(t);if(a||(t[Vd]=a=new Kc(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=sN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Qk||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(ST(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sN(){function t(n){return e.call(t.src,t.listener,n)}const e=iN;return t}function CT(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)CT(t,e[i],n,r,s);return null}return n=$d(n),t&&t[ga]?t.P(e,n,pa(r)?!!r.capture:!!r,s):RT(t,e,n,!0,r,s)}function bT(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)bT(t,e[i],n,r,s);else r=pa(r)?!!r.capture:!!r,n=$d(n),t&&t[ga]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ef(i,n,r,s),-1<n&&(qc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ud(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ef(e,n,r,s)),(n=-1<t?e[t]:null)&&Fd(n))}function Fd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ga])Zh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ST(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ud(e))?(Zh(n,t),n.h==0&&(n.src=null,e[Vd]=null)):qc(t)}}}function ST(t){return t in eh?eh[t]:eh[t]="on"+t}function iN(t,e){if(t.fa)t=!0;else{e=new Bo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Fd(t),t=n.call(r,e)}return t}function Ud(t){return t=t[Vd],t instanceof Kc?t:null}var th="__closure_events_fn_"+(1e9*Math.random()>>>0);function $d(t){return typeof t=="function"?t:(t[th]||(t[th]=function(e){return t.handleEvent(e)}),t[th])}function ot(){Ur.call(this),this.i=new Kc(this),this.S=this,this.J=null}lt(ot,Ur);ot.prototype[ga]=!0;ot.prototype.removeEventListener=function(t,e,n,r){bT(this,t,e,n,r)};function pt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ct(e,t);else if(e instanceof Ct)e.target=e.target||t;else{var s=e;e=new Ct(r,t),IT(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ya(o,r,!0,e)&&s}if(o=e.g=t,s=Ya(o,r,!0,e)&&s,s=Ya(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ya(o,r,!1,e)&&s}ot.prototype.N=function(){if(ot.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)qc(n[r]);delete t.g[e],t.h--}}this.J=null};ot.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ot.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ya(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Zh(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Bd=se.JSON.stringify;class oN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function aN(){var t=Hd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class lN{constructor(){this.h=this.g=null}add(e,n){const r=PT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var PT=new oN(()=>new cN,t=>t.reset());class cN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function uN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function hN(t){se.setTimeout(()=>{throw t},0)}let Ho,jo=!1,Hd=new lN,kT=()=>{const t=se.Promise.resolve(void 0);Ho=()=>{t.then(fN)}};var fN=()=>{for(var t;t=aN();){try{t.h.call(t.g)}catch(n){hN(n)}var e=PT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}jo=!1};function zc(t,e){ot.call(this),this.h=t||1,this.g=e||se,this.j=Rt(this.qb,this),this.l=Date.now()}lt(zc,ot);U=zc.prototype;U.ga=!1;U.T=null;U.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),pt(this,"tick"),this.ga&&(jd(this),this.start()))}};U.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function jd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}U.N=function(){zc.$.N.call(this),jd(this),delete this.g};function Wd(t,e,n){if(typeof t=="function")n&&(t=Rt(t,n));else if(t&&typeof t.handleEvent=="function")t=Rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:se.setTimeout(t,e||0)}function NT(t){t.g=Wd(()=>{t.g=null,t.i&&(t.i=!1,NT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class dN extends Ur{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:NT(this)}N(){super.N(),this.g&&(se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wo(t){Ur.call(this),this.h=t,this.g={}}lt(Wo,Ur);var vm=[];function OT(t,e,n,r){Array.isArray(n)||(n&&(vm[0]=n.toString()),n=vm);for(var s=0;s<n.length;s++){var i=AT(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function DT(t){Ld(t.g,function(e,n){this.g.hasOwnProperty(n)&&Fd(e)},t),t.g={}}Wo.prototype.N=function(){Wo.$.N.call(this),DT(this)};Wo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Gc(){this.g=!0}Gc.prototype.Ea=function(){this.g=!1};function pN(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function gN(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Us(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+_N(t,n)+(r?" "+r:"")})}function mN(t,e){t.info(function(){return"TIMEOUT: "+e})}Gc.prototype.info=function(){};function _N(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Bd(n)}catch{return e}}var ws={},Em=null;function Qc(){return Em=Em||new ot}ws.Ta="serverreachability";function xT(t){Ct.call(this,ws.Ta,t)}lt(xT,Ct);function qo(t){const e=Qc();pt(e,new xT(e))}ws.STAT_EVENT="statevent";function MT(t,e){Ct.call(this,ws.STAT_EVENT,t),this.stat=e}lt(MT,Ct);function Dt(t){const e=Qc();pt(e,new MT(e,t))}ws.Ua="timingevent";function LT(t,e){Ct.call(this,ws.Ua,t),this.size=e}lt(LT,Ct);function ma(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return se.setTimeout(function(){t()},e)}var Yc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},VT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function qd(){}qd.prototype.h=null;function Tm(t){return t.h||(t.h=t.i())}function FT(){}var _a={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Kd(){Ct.call(this,"d")}lt(Kd,Ct);function zd(){Ct.call(this,"c")}lt(zd,Ct);var tf;function Xc(){}lt(Xc,qd);Xc.prototype.g=function(){return new XMLHttpRequest};Xc.prototype.i=function(){return{}};tf=new Xc;function ya(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Wo(this),this.P=yN,t=Yh?125:void 0,this.V=new zc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new UT}function UT(){this.i=null,this.g="",this.h=!1}var yN=45e3,nf={},jl={};U=ya.prototype;U.setTimeout=function(t){this.P=t};function rf(t,e,n){t.L=1,t.v=Zc(nr(e)),t.s=n,t.S=!0,$T(t,null)}function $T(t,e){t.G=Date.now(),va(t),t.A=nr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),GT(n.i,"t",r),t.C=0,n=t.l.J,t.h=new UT,t.g=gw(t.l,n?e:null,!t.s),0<t.O&&(t.M=new dN(Rt(t.Pa,t,t.g),t.O)),OT(t.U,t.g,"readystatechange",t.nb),e=t.I?wT(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),qo(),pN(t.j,t.u,t.A,t.m,t.W,t.s)}U.nb=function(t){t=t.target;const e=this.M;e&&Pn(t)==3?e.l():this.Pa(t)};U.Pa=function(t){try{if(t==this.g)e:{const u=Pn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Yh||this.g&&(this.h.h||this.g.ja()||Rm(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?qo(3):qo(2)),Jc(this);var n=this.g.da();this.ca=n;t:if(BT(this)){var r=Rm(this.g);t="";var s=r.length,i=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xr(this),yo(this);var o="";break t}this.h.i=new se.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,gN(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$o(a)){var c=a;break t}}c=null}if(n=c)Us(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sf(this,n);else{this.i=!1,this.o=3,Dt(12),Xr(this),yo(this);break e}}this.S?(HT(this,u,o),Yh&&this.i&&u==3&&(OT(this.U,this.V,"tick",this.mb),this.V.start())):(Us(this.j,this.m,o,null),sf(this,o)),u==4&&Xr(this),this.i&&!this.J&&(u==4?hw(this.l,this):(this.i=!1,va(this)))}else UN(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Dt(12)):(this.o=0,Dt(13)),Xr(this),yo(this)}}}catch{}finally{}};function BT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function HT(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=vN(t,n),s==jl){e==4&&(t.o=4,Dt(14),r=!1),Us(t.j,t.m,null,"[Incomplete Response]");break}else if(s==nf){t.o=4,Dt(15),Us(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Us(t.j,t.m,s,null),sf(t,s);BT(t)&&s!=jl&&s!=nf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Dt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zd(e),e.M=!0,Dt(11))):(Us(t.j,t.m,n,"[Invalid Chunked Response]"),Xr(t),yo(t))}U.mb=function(){if(this.g){var t=Pn(this.g),e=this.g.ja();this.C<e.length&&(Jc(this),HT(this,t,e),this.i&&t!=4&&va(this))}};function vN(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?jl:(n=Number(e.substring(n,r)),isNaN(n)?nf:(r+=1,r+n>e.length?jl:(e=e.slice(r,r+n),t.C=r+n,e)))}U.cancel=function(){this.J=!0,Xr(this)};function va(t){t.Y=Date.now()+t.P,jT(t,t.P)}function jT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ma(Rt(t.lb,t),e)}function Jc(t){t.B&&(se.clearTimeout(t.B),t.B=null)}U.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(mN(this.j,this.A),this.L!=2&&(qo(),Dt(17)),Xr(this),this.o=2,yo(this)):jT(this,this.Y-t)};function yo(t){t.l.H==0||t.J||hw(t.l,t)}function Xr(t){Jc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,jd(t.V),DT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function sf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||of(n.i,t))){if(!t.K&&of(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Kl(n),ru(n);else break e;Jd(n),Dt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=ma(Rt(n.ib,n),6e3));if(1>=XT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Jr(n,11)}else if((t.K||n.g==t)&&Kl(n),!$o(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=r.i;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Gd(i,i.h),i.h=null))}if(r.F){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Le(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=pw(r,r.J?r.pa:null,r.Y),o.K){JT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Jc(a),va(a)),r.g=o}else cw(r);0<n.j.length&&su(n)}else c[0]!="stop"&&c[0]!="close"||Jr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Jr(n,7):Xd(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}qo(4)}catch{}}function EN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(jc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function TN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(jc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function WT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(jc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=TN(t),r=EN(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var qT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function is(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof is){this.h=t.h,Wl(this,t.j),this.s=t.s,this.g=t.g,ql(this,t.m),this.l=t.l;var e=t.i,n=new Ko;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),wm(this,n),this.o=t.o}else t&&(e=String(t).match(qT))?(this.h=!1,Wl(this,e[1]||"",!0),this.s=io(e[2]||""),this.g=io(e[3]||"",!0),ql(this,e[4]),this.l=io(e[5]||"",!0),wm(this,e[6]||"",!0),this.o=io(e[7]||"")):(this.h=!1,this.i=new Ko(null,this.h))}is.prototype.toString=function(){var t=[],e=this.j;e&&t.push(oo(e,Im,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(oo(e,Im,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(oo(n,n.charAt(0)=="/"?RN:AN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",oo(n,bN)),t.join("")};function nr(t){return new is(t)}function Wl(t,e,n){t.j=n?io(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ql(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function wm(t,e,n){e instanceof Ko?(t.i=e,SN(t.i,t.h)):(n||(e=oo(e,CN)),t.i=new Ko(e,t.h))}function Le(t,e,n){t.i.set(e,n)}function Zc(t){return Le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function io(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function oo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,IN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function IN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Im=/[#\/\?@]/g,AN=/[#\?:]/g,RN=/[#\?]/g,CN=/[#\?@]/g,bN=/#/g;function Ko(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $r(t){t.g||(t.g=new Map,t.h=0,t.i&&wN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Ko.prototype;U.add=function(t,e){$r(this),this.i=null,t=Oi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function KT(t,e){$r(t),e=Oi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function zT(t,e){return $r(t),e=Oi(t,e),t.g.has(e)}U.forEach=function(t,e){$r(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};U.ta=function(){$r(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};U.Z=function(t){$r(this);let e=[];if(typeof t=="string")zT(this,t)&&(e=e.concat(this.g.get(Oi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return $r(this),this.i=null,t=Oi(this,t),zT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function GT(t,e,n){KT(t,e),0<n.length&&(t.i=null,t.g.set(Oi(t,e),xd(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Oi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function SN(t,e){e&&!t.j&&($r(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(KT(this,r),GT(this,s,n))},t)),t.j=e}var PN=class{constructor(t,e){this.g=t,this.map=e}};function QT(t){this.l=t||kN,se.PerformanceNavigationTiming?(t=se.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(se.g&&se.g.Ka&&se.g.Ka()&&se.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kN=10;function YT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function XT(t){return t.h?1:t.g?t.g.size:0}function of(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Gd(t,e){t.g?t.g.add(e):t.h=e}function JT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}QT.prototype.cancel=function(){if(this.i=ZT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ZT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return xd(t.i)}var NN=class{stringify(t){return se.JSON.stringify(t,void 0)}parse(t){return se.JSON.parse(t,void 0)}};function ON(){this.g=new NN}function DN(t,e,n){const r=n||"";try{WT(t,function(s,i){let o=s;pa(s)&&(o=Bd(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function xN(t,e){const n=new Gc;if(se.Image){const r=new Image;r.onload=Qa(Xa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Qa(Xa,n,r,"TestLoadImage: error",!1,e),r.onabort=Qa(Xa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Qa(Xa,n,r,"TestLoadImage: timeout",!1,e),se.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Xa(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function eu(t){this.l=t.fc||null,this.j=t.ob||!1}lt(eu,qd);eu.prototype.g=function(){return new tu(this.l,this.j)};eu.prototype.i=function(t){return function(){return t}}({});function tu(t,e){ot.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Qd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}lt(tu,ot);var Qd=0;U=tu.prototype;U.open=function(t,e){if(this.readyState!=Qd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,zo(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||se).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ea(this)),this.readyState=Qd};U.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,zo(this)),this.g&&(this.readyState=3,zo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof se.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ew(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function ew(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}U.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ea(this):zo(this),this.readyState==3&&ew(this)}};U.Za=function(t){this.g&&(this.response=this.responseText=t,Ea(this))};U.Ya=function(t){this.g&&(this.response=t,Ea(this))};U.ka=function(){this.g&&Ea(this)};function Ea(t){t.readyState=4,t.l=null,t.j=null,t.A=null,zo(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function zo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(tu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var MN=se.JSON.parse;function je(t){ot.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tw,this.L=this.M=!1}lt(je,ot);var tw="",LN=/^https?$/i,VN=["POST","PUT"];U=je.prototype;U.Oa=function(t){this.M=t};U.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():tf.g(),this.C=this.u?Tm(this.u):Tm(tf),this.g.onreadystatechange=Rt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Am(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=se.FormData&&t instanceof se.FormData,!(0<=yT(VN,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{sw(this),0<this.B&&((this.L=FN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Rt(this.ua,this)):this.A=Wd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Am(this,i)}};function FN(t){return ui&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.ua=function(){typeof Dd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,pt(this,"timeout"),this.abort(8))};function Am(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,nw(t),nu(t)}function nw(t){t.F||(t.F=!0,pt(t,"complete"),pt(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,pt(this,"complete"),pt(this,"abort"),nu(this))};U.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),nu(this,!0)),je.$.N.call(this)};U.La=function(){this.s||(this.G||this.v||this.l?rw(this):this.kb())};U.kb=function(){rw(this)};function rw(t){if(t.h&&typeof Dd<"u"&&(!t.C[1]||Pn(t)!=4||t.da()!=2)){if(t.v&&Pn(t)==4)Wd(t.La,0,t);else if(pt(t,"readystatechange"),Pn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(qT)[1]||null;!s&&se.self&&se.self.location&&(s=se.self.location.protocol.slice(0,-1)),r=!LN.test(s?s.toLowerCase():"")}n=r}if(n)pt(t,"complete"),pt(t,"success");else{t.m=6;try{var i=2<Pn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",nw(t)}}finally{nu(t)}}}}function nu(t,e){if(t.g){sw(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||pt(t,"ready");try{n.onreadystatechange=r}catch{}}}function sw(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(se.clearTimeout(t.A),t.A=null)}U.isActive=function(){return!!this.g};function Pn(t){return t.g?t.g.readyState:0}U.da=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}};U.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),MN(e)}};function Rm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case tw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function UN(t){const e={};t=(t.g&&2<=Pn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if($o(t[r]))continue;var n=uN(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}rN(e,function(r){return r.join(", ")})}U.Ia=function(){return this.m};U.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function iw(t){let e="";return Ld(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Yd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=iw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Le(t,e,n))}function Ki(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ow(t){this.Ga=0,this.j=[],this.l=new Gc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ki("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ki("baseRetryDelayMs",5e3,t),this.hb=Ki("retryDelaySeedMs",1e4,t),this.eb=Ki("forwardChannelMaxRetries",2,t),this.xa=Ki("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new QT(t&&t.concurrentRequestLimit),this.Ja=new ON,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}U=ow.prototype;U.ra=8;U.H=1;function Xd(t){if(aw(t),t.H==3){var e=t.W++,n=nr(t.I);if(Le(n,"SID",t.K),Le(n,"RID",e),Le(n,"TYPE","terminate"),Ta(t,n),e=new ya(t,t.l,e),e.L=2,e.v=Zc(nr(n)),n=!1,se.navigator&&se.navigator.sendBeacon)try{n=se.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&se.Image&&(new Image().src=e.v,n=!0),n||(e.g=gw(e.l,null),e.g.ha(e.v)),e.G=Date.now(),va(e)}dw(t)}function ru(t){t.g&&(Zd(t),t.g.cancel(),t.g=null)}function aw(t){ru(t),t.u&&(se.clearTimeout(t.u),t.u=null),Kl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&se.clearTimeout(t.m),t.m=null)}function su(t){if(!YT(t.i)&&!t.m){t.m=!0;var e=t.Na;Ho||kT(),jo||(Ho(),jo=!0),Hd.add(e,t),t.C=0}}function $N(t,e){return XT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ma(Rt(t.Na,t,e),fw(t,t.C)),t.C++,!0)}U.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new ya(this,this.l,t);let i=this.s;if(this.U&&(i?(i=wT(i),IT(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=lw(this,s,e),n=nr(this.I),Le(n,"RID",t),Le(n,"CVER",22),this.F&&Le(n,"X-HTTP-Session-Id",this.F),Ta(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(iw(i)))+"&"+e:this.o&&Yd(n,this.o,i)),Gd(this.i,s),this.bb&&Le(n,"TYPE","init"),this.P?(Le(n,"$req",e),Le(n,"SID","null"),s.aa=!0,rf(s,n,null)):rf(s,n,e),this.H=2}}else this.H==3&&(t?Cm(this,t):this.j.length==0||YT(this.i)||Cm(this))};function Cm(t,e){var n;e?n=e.m:n=t.W++;const r=nr(t.I);Le(r,"SID",t.K),Le(r,"RID",n),Le(r,"AID",t.V),Ta(t,r),t.o&&t.s&&Yd(r,t.o,t.s),n=new ya(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=lw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Gd(t.i,n),rf(n,r,e)}function Ta(t,e){t.na&&Ld(t.na,function(n,r){Le(e,r,n)}),t.h&&WT({},function(n,r){Le(e,r,n)})}function lw(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Rt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{DN(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function cw(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ho||kT(),jo||(Ho(),jo=!0),Hd.add(e,t),t.A=0}}function Jd(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ma(Rt(t.Ma,t),fw(t,t.A)),t.A++,!0)}U.Ma=function(){if(this.u=null,uw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ma(Rt(this.jb,this),t)}};U.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Dt(10),ru(this),uw(this))};function Zd(t){t.B!=null&&(se.clearTimeout(t.B),t.B=null)}function uw(t){t.g=new ya(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=nr(t.wa);Le(e,"RID","rpc"),Le(e,"SID",t.K),Le(e,"AID",t.V),Le(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Le(e,"TO",t.qa),Le(e,"TYPE","xmlhttp"),Ta(t,e),t.o&&t.s&&Yd(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Zc(nr(e)),n.s=null,n.S=!0,$T(n,t)}U.ib=function(){this.v!=null&&(this.v=null,ru(this),Jd(this),Dt(19))};function Kl(t){t.v!=null&&(se.clearTimeout(t.v),t.v=null)}function hw(t,e){var n=null;if(t.g==e){Kl(t),Zd(t),t.g=null;var r=2}else if(of(t.i,e))n=e.F,JT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Qc(),pt(r,new LT(r,n)),su(t)}else cw(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&$N(t,e)||r==2&&Jd(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Jr(t,5);break;case 4:Jr(t,10);break;case 3:Jr(t,6);break;default:Jr(t,2)}}}function fw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Jr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Rt(t.pb,t);n||(n=new is("//www.google.com/images/cleardot.gif"),se.location&&se.location.protocol=="http"||Wl(n,"https"),Zc(n)),xN(n.toString(),r)}else Dt(2);t.H=0,t.h&&t.h.za(e),dw(t),aw(t)}U.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Dt(2)):(this.l.info("Failed to ping google.com"),Dt(1))};function dw(t){if(t.H=0,t.ma=[],t.h){const e=ZT(t.i);(e.length!=0||t.j.length!=0)&&(mm(t.ma,e),mm(t.ma,t.j),t.i.i.length=0,xd(t.j),t.j.length=0),t.h.ya()}}function pw(t,e,n){var r=n instanceof is?nr(n):new is(n);if(r.g!="")e&&(r.g=e+"."+r.g),ql(r,r.m);else{var s=se.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new is(null);r&&Wl(i,r),e&&(i.g=e),s&&ql(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Le(r,n,e),Le(r,"VER",t.ra),Ta(t,r),r}function gw(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new je(new eu({ob:!0})):new je(t.va),e.Oa(t.J),e}U.isActive=function(){return!!this.h&&this.h.isActive(this)};function mw(){}U=mw.prototype;U.Ba=function(){};U.Aa=function(){};U.za=function(){};U.ya=function(){};U.isActive=function(){return!0};U.Va=function(){};function zl(){if(ui&&!(10<=Number(Zk)))throw Error("Environmental error: no available transport.")}zl.prototype.g=function(t,e){return new Gt(t,e)};function Gt(t,e){ot.call(this),this.g=new ow(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!$o(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$o(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Di(this)}lt(Gt,ot);Gt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Dt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=pw(t,null,t.Y),su(t)};Gt.prototype.close=function(){Xd(this.g)};Gt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Bd(t),t=n);e.j.push(new PN(e.fb++,t)),e.H==3&&su(e)};Gt.prototype.N=function(){this.g.h=null,delete this.j,Xd(this.g),delete this.g,Gt.$.N.call(this)};function _w(t){Kd.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}lt(_w,Kd);function yw(){zd.call(this),this.status=1}lt(yw,zd);function Di(t){this.g=t}lt(Di,mw);Di.prototype.Ba=function(){pt(this.g,"a")};Di.prototype.Aa=function(t){pt(this.g,new _w(t))};Di.prototype.za=function(t){pt(this.g,new yw)};Di.prototype.ya=function(){pt(this.g,"b")};function BN(){this.blockSize=-1}function yn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}lt(yn,BN);yn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function nh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}yn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)nh(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){nh(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){nh(this,r),s=0;break}}this.h=s,this.i+=e};yn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Se(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var HN={};function ep(t){return-128<=t&&128>t?Yk(t,function(e){return new Se([e|0],0>e?-1:0)}):new Se([t|0],0>t?-1:0)}function kn(t){if(isNaN(t)||!isFinite(t))return Qs;if(0>t)return ft(kn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=af;return new Se(e,0)}function vw(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ft(vw(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=kn(Math.pow(e,8)),r=Qs,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=kn(Math.pow(e,i)),r=r.R(i).add(kn(o))):(r=r.R(n),r=r.add(kn(o)))}return r}var af=4294967296,Qs=ep(0),lf=ep(1),bm=ep(16777216);U=Se.prototype;U.ea=function(){if(Xt(this))return-ft(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:af+r)*e,e*=af}return t};U.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Kn(this))return"0";if(Xt(this))return"-"+ft(this).toString(t);for(var e=kn(Math.pow(t,6)),n=this,r="";;){var s=Ql(n,e).g;n=Gl(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Kn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};U.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Kn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Xt(t){return t.h==-1}U.X=function(t){return t=Gl(this,t),Xt(t)?-1:Kn(t)?0:1};function ft(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Se(n,~t.h).add(lf)}U.abs=function(){return Xt(this)?ft(this):this};U.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Se(n,n[n.length-1]&-2147483648?-1:0)};function Gl(t,e){return t.add(ft(e))}U.R=function(t){if(Kn(this)||Kn(t))return Qs;if(Xt(this))return Xt(t)?ft(this).R(ft(t)):ft(ft(this).R(t));if(Xt(t))return ft(this.R(ft(t)));if(0>this.X(bm)&&0>t.X(bm))return kn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,Ja(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Ja(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Ja(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Ja(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Se(n,0)};function Ja(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function zi(t,e){this.g=t,this.h=e}function Ql(t,e){if(Kn(e))throw Error("division by zero");if(Kn(t))return new zi(Qs,Qs);if(Xt(t))return e=Ql(ft(t),e),new zi(ft(e.g),ft(e.h));if(Xt(e))return e=Ql(t,ft(e)),new zi(ft(e.g),e.h);if(30<t.g.length){if(Xt(t)||Xt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=lf,r=e;0>=r.X(t);)n=Sm(n),r=Sm(r);var s=Os(n,1),i=Os(r,1);for(r=Os(r,2),n=Os(n,2);!Kn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Os(r,1),n=Os(n,1)}return e=Gl(t,s.R(e)),new zi(s,e)}for(s=Qs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=kn(n),o=i.R(e);Xt(o)||0<o.X(t);)n-=r,i=kn(n),o=i.R(e);Kn(i)&&(i=lf),s=s.add(i),t=Gl(t,o)}return new zi(s,t)}U.gb=function(t){return Ql(this,t).h};U.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Se(n,this.h&t.h)};U.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Se(n,this.h|t.h)};U.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Se(n,this.h^t.h)};function Sm(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Se(n,t.h)}function Os(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Se(s,t.h)}zl.prototype.createWebChannel=zl.prototype.g;Gt.prototype.send=Gt.prototype.u;Gt.prototype.open=Gt.prototype.m;Gt.prototype.close=Gt.prototype.close;Yc.NO_ERROR=0;Yc.TIMEOUT=8;Yc.HTTP_ERROR=6;VT.COMPLETE="complete";FT.EventType=_a;_a.OPEN="a";_a.CLOSE="b";_a.ERROR="c";_a.MESSAGE="d";ot.prototype.listen=ot.prototype.O;je.prototype.listenOnce=je.prototype.P;je.prototype.getLastError=je.prototype.Sa;je.prototype.getLastErrorCode=je.prototype.Ia;je.prototype.getStatus=je.prototype.da;je.prototype.getResponseJson=je.prototype.Wa;je.prototype.getResponseText=je.prototype.ja;je.prototype.send=je.prototype.ha;je.prototype.setWithCredentials=je.prototype.Oa;yn.prototype.digest=yn.prototype.l;yn.prototype.reset=yn.prototype.reset;yn.prototype.update=yn.prototype.j;Se.prototype.add=Se.prototype.add;Se.prototype.multiply=Se.prototype.R;Se.prototype.modulo=Se.prototype.gb;Se.prototype.compare=Se.prototype.X;Se.prototype.toNumber=Se.prototype.ea;Se.prototype.toString=Se.prototype.toString;Se.prototype.getBits=Se.prototype.D;Se.fromNumber=kn;Se.fromString=vw;var jN=function(){return new zl},WN=function(){return Qc()},rh=Yc,qN=VT,KN=ws,Pm={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Za=FT,zN=je,GN=yn,Ys=Se;const km="@firebase/firestore";/**
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
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */let xi="10.3.0";/**
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
 */const fs=new da("@firebase/firestore");function Nm(){return fs.logLevel}function G(t,...e){if(fs.logLevel<=ye.DEBUG){const n=e.map(tp);fs.debug(`Firestore (${xi}): ${t}`,...n)}}function rr(t,...e){if(fs.logLevel<=ye.ERROR){const n=e.map(tp);fs.error(`Firestore (${xi}): ${t}`,...n)}}function hi(t,...e){if(fs.logLevel<=ye.WARN){const n=e.map(tp);fs.warn(`Firestore (${xi}): ${t}`,...n)}}function tp(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${xi}) INTERNAL ASSERTION FAILED: `+t;throw rr(e),new Error(e)}function Fe(t,e){t||ne()}function le(t,e){return t}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ew{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class YN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XN{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Xn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Xn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string"),new Ew(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new _t(e)}}class JN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ZN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new JN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class e1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class t1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Fe(typeof n.token=="string"),this.R=n.token,new e1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function n1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Tw{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=n1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function fi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Xe(0,0))}static max(){return new oe(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Go{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Go.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Go?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ve extends Go{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const r1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends Go{construct(e,n,r){return new It(e,n,r)}static isValidIdentifier(e){return r1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new It(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new B(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new B(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(n)}static emptyPath(){return new It([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ve.fromString(e))}static fromName(e){return new Y(Ve.fromString(e).popFirst(5))}static empty(){return new Y(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ve(e.slice()))}}function s1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new Or(s,Y.empty(),e)}function i1(t){return new Or(t.readTime,t.key,-1)}class Or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Or(oe.min(),Y.empty(),-1)}static max(){return new Or(oe.max(),Y.empty(),-1)}}function o1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
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
 */const a1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class l1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function wa(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==a1)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new O((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new O((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ia(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class np{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}np.ae=-1;function iu(t){return t==null}function Yl(t){return t===0&&1/t==-1/0}function c1(t){return typeof t=="number"&&Number.isInteger(t)&&!Yl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Om(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ww(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let Je=class cf{constructor(e,n){this.comparator=e,this.root=n||Sr.EMPTY}insert(e,n){return new cf(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Sr.BLACK,null,null))}remove(e){return new cf(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Sr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new el(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new el(this.root,e,this.comparator,!1)}getReverseIterator(){return new el(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new el(this.root,e,this.comparator,!0)}},el=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Sr=class jn{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??jn.RED,this.left=s??jn.EMPTY,this.right=i??jn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new jn(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return jn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return jn.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,jn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,jn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}};Sr.EMPTY=null,Sr.RED=!0,Sr.BLACK=!1;Sr.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Sr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class bt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dm(this.data.getIterator())}getIteratorFrom(e){return new Dm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof bt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new bt(this.comparator);return n.data=e,n}}class Dm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class un{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new un([])}unionWith(e){let n=new bt(It.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Iw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Iw("Invalid base64 string: "+i):i}}(e);return new kt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const u1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dr(t){if(Fe(!!t),typeof t=="string"){let e=0;const n=u1.exec(t);if(Fe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ds(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
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
 */function rp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function sp(t){const e=t.mapValue.fields.__previous_value__;return rp(e)?sp(e):e}function Qo(t){const e=Dr(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */class h1{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Yo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Yo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const tl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rp(t)?4:f1(t)?9007199254740991:10:ne()}function Fn(t,e){if(t===e)return!0;const n=ps(t);if(n!==ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qo(t).isEqual(Qo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Dr(s.timestampValue),a=Dr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ds(s.bytesValue).isEqual(ds(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),a=Ge(i.doubleValue);return o===a?Yl(o)===Yl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return fi(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Om(o)!==Om(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Fn(o[l],a[l])))return!1;return!0}(t,e);default:return ne()}}function Xo(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function di(t,e){if(t===e)return 0;const n=ps(t),r=ps(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ge(i.integerValue||i.doubleValue),l=Ge(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return xm(t.timestampValue,e.timestampValue);case 4:return xm(Qo(t),Qo(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ds(i),l=ds(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Te(a[c],l[c]);if(u!==0)return u}return Te(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Te(Ge(i.latitude),Ge(o.latitude));return a!==0?a:Te(Ge(i.longitude),Ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=di(a[c],l[c]);if(u)return u}return Te(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===tl.mapValue&&o===tl.mapValue)return 0;if(i===tl.mapValue)return 1;if(o===tl.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=Te(l[h],u[h]);if(f!==0)return f;const d=di(a[l[h]],c[u[h]]);if(d!==0)return d}return Te(l.length,u.length)}(t.mapValue,e.mapValue);default:throw ne()}}function xm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Dr(t),r=Dr(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function pi(t){return uf(t)}function uf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Dr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ds(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=uf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${uf(n.fields[o])}`;return s+"}"}(t.mapValue):ne()}function Mm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function hf(t){return!!t&&"integerValue"in t}function ip(t){return!!t&&"arrayValue"in t}function Lm(t){return!!t&&"nullValue"in t}function Vm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ml(t){return!!t&&"mapValue"in t}function vo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Mi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function f1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ml(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vo(n)}setAll(e){let n=It.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=vo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ml(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ml(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Mi(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Jt(vo(this.value))}}function Aw(t){const e=[];return Mi(t.fields,(n,r)=>{const s=new It([n]);if(ml(r)){const i=Aw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new un(e)}/**
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
 */class vt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new vt(e,0,oe.min(),oe.min(),oe.min(),Jt.empty(),0)}static newFoundDocument(e,n,r,s){return new vt(e,1,n,oe.min(),r,s,0)}static newNoDocument(e,n){return new vt(e,2,n,oe.min(),oe.min(),Jt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,oe.min(),oe.min(),Jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Xl{constructor(e,n){this.position=e,this.inclusive=n}}function Fm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=di(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Um(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Xs{constructor(e,n="asc"){this.field=e,this.dir=n}}function d1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Rw{}class Ye extends Rw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new g1(e,n,r):n==="array-contains"?new y1(e,r):n==="in"?new v1(e,r):n==="not-in"?new E1(e,r):n==="array-contains-any"?new T1(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new m1(e,r):new _1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(di(n,this.value)):n!==null&&ps(this.value)===ps(n)&&this.matchesComparison(di(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class vn extends Rw{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new vn(e,n)}matches(e){return Cw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Cw(t){return t.op==="and"}function bw(t){return p1(t)&&Cw(t)}function p1(t){for(const e of t.filters)if(e instanceof vn)return!1;return!0}function ff(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+pi(t.value);if(bw(t))return t.filters.map(e=>ff(e)).join(",");{const e=t.filters.map(n=>ff(n)).join(",");return`${t.op}(${e})`}}function Sw(t,e){return t instanceof Ye?function(r,s){return s instanceof Ye&&r.op===s.op&&r.field.isEqual(s.field)&&Fn(r.value,s.value)}(t,e):t instanceof vn?function(r,s){return s instanceof vn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Sw(o,s.filters[a]),!0):!1}(t,e):void ne()}function Pw(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${pi(n.value)}`}(t):t instanceof vn?function(n){return n.op.toString()+" {"+n.getFilters().map(Pw).join(" ,")+"}"}(t):"Filter"}class g1 extends Ye{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class m1 extends Ye{constructor(e,n){super(e,"in",n),this.keys=kw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _1 extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=kw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class y1 extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ip(n)&&Xo(n.arrayValue,this.value)}}class v1 extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xo(this.value.arrayValue,n)}}class E1 extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Xo(this.value.arrayValue,n)}}class T1 extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ip(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Xo(this.value.arrayValue,r))}}/**
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
 */class w1{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function $m(t,e=null,n=[],r=[],s=null,i=null,o=null){return new w1(t,e,n,r,s,i,o)}function op(t){const e=le(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ff(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),iu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>pi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>pi(r)).join(",")),e.he=n}return e.he}function ap(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!d1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Sw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Um(t.startAt,e.startAt)&&Um(t.endAt,e.endAt)}function df(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Li{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function I1(t,e,n,r,s,i,o,a){return new Li(t,e,n,r,s,i,o,a)}function lp(t){return new Li(t)}function Bm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function cp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ou(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Nw(t){return t.collectionGroup!==null}function Eo(t){const e=le(t);if(e.Pe===null){e.Pe=[];const n=ou(e),r=cp(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Xs(n)),e.Pe.push(new Xs(It.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Xs(It.keyField(),i))}}}return e.Pe}function sr(t){const e=le(t);return e.Ie||(e.Ie=A1(e,Eo(t))),e.Ie}function A1(t,e){if(t.limitType==="F")return $m(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Xs(s.field,i)});const n=t.endAt?new Xl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xl(t.startAt.position,t.startAt.inclusive):null;return $m(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function pf(t,e){e.getFirstInequalityField(),ou(t);const n=t.filters.concat([e]);return new Li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Jl(t,e,n){return new Li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function au(t,e){return ap(sr(t),sr(e))&&t.limitType===e.limitType}function Ow(t){return`${op(sr(t))}|lt:${t.limitType}`}function gf(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Pw(s)).join(", ")}]`),iu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>pi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>pi(s)).join(",")),`Target(${r})`}(sr(t))}; limitType=${t.limitType})`}function lu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Eo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=Fm(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Eo(r),s)||r.endAt&&!function(o,a,l){const c=Fm(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Eo(r),s))}(t,e)}function R1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Dw(t){return(e,n)=>{let r=!1;for(const s of Eo(t)){const i=C1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function C1(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?di(l,c):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
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
 */class Vi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Mi(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ww(this.inner)}size(){return this.innerSize}}/**
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
 */const b1=new Je(Y.comparator);function ir(){return b1}const xw=new Je(Y.comparator);function ao(...t){let e=xw;for(const n of t)e=e.insert(n.key,n);return e}function Mw(t){let e=xw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zr(){return To()}function Lw(){return To()}function To(){return new Vi(t=>t.toString(),(t,e)=>t.isEqual(e))}const S1=new Je(Y.comparator),P1=new bt(Y.comparator);function ue(...t){let e=P1;for(const n of t)e=e.add(n);return e}const k1=new bt(Te);function N1(){return k1}/**
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
 */function Vw(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yl(e)?"-0":e}}function Fw(t){return{integerValue:""+t}}function O1(t,e){return c1(e)?Fw(e):Vw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class cu{constructor(){this._=void 0}}function D1(t,e,n){return t instanceof Zl?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&rp(i)&&(i=sp(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Jo?$w(t,e):t instanceof Zo?Bw(t,e):function(s,i){const o=Uw(s,i),a=Hm(o)+Hm(s.Ee);return hf(o)&&hf(s.Ee)?Fw(a):Vw(s.serializer,a)}(t,e)}function x1(t,e,n){return t instanceof Jo?$w(t,e):t instanceof Zo?Bw(t,e):n}function Uw(t,e){return t instanceof ec?function(r){return hf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Zl extends cu{}class Jo extends cu{constructor(e){super(),this.elements=e}}function $w(t,e){const n=Hw(e);for(const r of t.elements)n.some(s=>Fn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Zo extends cu{constructor(e){super(),this.elements=e}}function Bw(t,e){let n=Hw(e);for(const r of t.elements)n=n.filter(s=>!Fn(s,r));return{arrayValue:{values:n}}}class ec extends cu{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Hm(t){return Ge(t.integerValue||t.doubleValue)}function Hw(t){return ip(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function M1(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Jo&&s instanceof Jo||r instanceof Zo&&s instanceof Zo?fi(r.elements,s.elements,Fn):r instanceof ec&&s instanceof ec?Fn(r.Ee,s.Ee):r instanceof Zl&&s instanceof Zl}(t.transform,e.transform)}class L1{constructor(e,n){this.version=e,this.transformResults=n}}class Jn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jn}static exists(e){return new Jn(void 0,e)}static updateTime(e){return new Jn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _l(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uu{}function jw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qw(t.key,Jn.none()):new Aa(t.key,t.data,Jn.none());{const n=t.data,r=Jt.empty();let s=new bt(It.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Is(t.key,r,new un(s.toArray()),Jn.none())}}function V1(t,e,n){t instanceof Aa?function(s,i,o){const a=s.value.clone(),l=Wm(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Is?function(s,i,o){if(!_l(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Wm(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Ww(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function wo(t,e,n,r){return t instanceof Aa?function(i,o,a,l){if(!_l(i.precondition,o))return a;const c=i.value.clone(),u=qm(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Is?function(i,o,a,l){if(!_l(i.precondition,o))return a;const c=qm(i.fieldTransforms,l,o),u=o.data;return u.setAll(Ww(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return _l(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function F1(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Uw(r.transform,s||null);i!=null&&(n===null&&(n=Jt.empty()),n.set(r.field,i))}return n||null}function jm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fi(r,s,(i,o)=>M1(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Aa extends uu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Is extends uu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ww(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Wm(t,e,n){const r=new Map;Fe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,x1(o,a,n[s]))}return r}function qm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,D1(i,o,e))}return r}class qw extends uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class U1 extends uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&V1(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=wo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=wo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Lw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=jw(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&fi(this.mutations,e.mutations,(n,r)=>jm(n,r))&&fi(this.baseMutations,e.baseMutations,(n,r)=>jm(n,r))}}class up{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Fe(e.mutations.length===r.length);let s=function(){return S1}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new up(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class B1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class H1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,pe;function j1(t){switch(t){default:return ne();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function Kw(t){if(t===void 0)return rr("GRPC error has no .code"),R.UNKNOWN;switch(t){case ze.OK:return R.OK;case ze.CANCELLED:return R.CANCELLED;case ze.UNKNOWN:return R.UNKNOWN;case ze.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ze.INTERNAL:return R.INTERNAL;case ze.UNAVAILABLE:return R.UNAVAILABLE;case ze.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ze.NOT_FOUND:return R.NOT_FOUND;case ze.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ze.ABORTED:return R.ABORTED;case ze.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ze.DATA_LOSS:return R.DATA_LOSS;default:return ne()}}(pe=ze||(ze={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function W1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const q1=new Ys([4294967295,4294967295],0);function Km(t){const e=W1().encode(t),n=new GN;return n.update(e),new Uint8Array(n.digest())}function zm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ys([n,r],0),new Ys([s,i],0)]}class hp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new lo(`Invalid padding: ${n}`);if(r<0)throw new lo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new lo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new lo(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Ys.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(Ys.fromNumber(r)));return s.compare(q1)===1&&(s=new Ys([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Km(e),[r,s]=zm(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new hp(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Km(e),[r,s]=zm(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class lo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ra.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hu(oe.min(),s,new Je(Te),ir(),ue())}}class Ra{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ra(r,n,ue(),ue(),ue())}}/**
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
 */class yl{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class zw{constructor(e,n){this.targetId=e,this.ye=n}}class Gw{constructor(e,n,r=kt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Gm{constructor(){this.we=0,this.Se=Ym(),this.be=kt.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=ue(),n=ue(),r=ue();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ne()}}),new Ra(this.be,this.De,e,n,r)}Oe(){this.ve=!1,this.Se=Ym()}Ne(e,n){this.ve=!0,this.Se=this.Se.insert(e,n)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class K1{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=ir(),this.Ue=Qm(),this.We=new Je(Te)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(df(i))if(r===0){const o=new Y(i.path);this.je(n,o,vt.newNoDocument(o,oe.min()))}else Fe(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,c)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ds(r).toUint8Array()}catch(l){if(l instanceof Iw)return hi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new hp(o,s,i)}catch(l){return hi(l instanceof lo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&df(a.target)){const l=new Y(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,vt.newNoDocument(l,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=ue();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.et(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new hu(e,n,this.We,this.$e,r);return this.$e=ir(),this.Ue=Qm(),this.We=new Je(Te),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new Gm,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new bt(Te),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.Ce?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Gm),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Qm(){return new Je(Y.comparator)}function Ym(){return new Je(Y.comparator)}const z1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),G1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Q1=(()=>({and:"AND",or:"OR"}))();class Y1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function mf(t,e){return t.useProto3Json||iu(e)?e:{value:e}}function tc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function X1(t,e){return tc(t,e.toTimestamp())}function Dn(t){return Fe(!!t),oe.fromTimestamp(function(n){const r=Dr(n);return new Xe(r.seconds,r.nanos)}(t))}function fp(t,e){return function(r){return new Ve(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Yw(t){const e=Ve.fromString(t);return Fe(eI(e)),e}function _f(t,e){return fp(t.databaseId,e.path)}function sh(t,e){const n=Yw(e);if(n.get(1)!==t.databaseId.projectId)throw new B(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(Xw(n))}function yf(t,e){return fp(t.databaseId,e)}function J1(t){const e=Yw(t);return e.length===4?Ve.emptyPath():Xw(e)}function vf(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xw(t){return Fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Xm(t,e,n){return{name:_f(t,e),fields:n.value.mapValue.fields}}function Z1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(Fe(u===void 0||typeof u=="string"),kt.fromBase64String(u||"")):(Fe(u===void 0||u instanceof Uint8Array),kt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?R.UNKNOWN:Kw(c.code);return new B(u,c.message||"")}(o);n=new Gw(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=sh(t,r.document.name),i=Dn(r.document.updateTime),o=r.document.createTime?Dn(r.document.createTime):oe.min(),a=new Jt({mapValue:{fields:r.document.fields}}),l=vt.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new yl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=sh(t,r.document),i=r.readTime?Dn(r.readTime):oe.min(),o=vt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new yl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=sh(t,r.document),i=r.removedTargetIds||[];n=new yl([],i,s,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new H1(s,i),a=r.targetId;n=new zw(a,o)}}return n}function eO(t,e){let n;if(e instanceof Aa)n={update:Xm(t,e.key,e.value)};else if(e instanceof qw)n={delete:_f(t,e.key)};else if(e instanceof Is)n={update:Xm(t,e.key,e.data),updateMask:cO(e.fieldMask)};else{if(!(e instanceof U1))return ne();n={verify:_f(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Zl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Jo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Zo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ec)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:X1(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne()}(t,e.precondition)),n}function tO(t,e){return t&&t.length>0?(Fe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Dn(s.updateTime):Dn(i);return o.isEqual(oe.min())&&(o=Dn(i)),new L1(o,s.transformResults||[])}(n,e))):[]}function nO(t,e){return{documents:[yf(t,e.path)]}}function rO(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=yf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=yf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return Zw(vn.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Ls(h.field),direction:oO(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=mf(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function sO(t){let e=J1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Fe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=Jw(h);return f instanceof vn&&bw(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(p){return new Xs(Vs(p.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,iu(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new Xl(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new Xl(d,f)}(n.endAt)),I1(e,s,o,i,a,"F",l,c)}function iO(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Jw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Vs(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Vs(n.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vs(n.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Vs(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(Vs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return vn.create(n.compositeFilter.filters.map(r=>Jw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function oO(t){return z1[t]}function aO(t){return G1[t]}function lO(t){return Q1[t]}function Ls(t){return{fieldPath:t.canonicalString()}}function Vs(t){return It.fromServerFormat(t.fieldPath)}function Zw(t){return t instanceof Ye?function(n){if(n.op==="=="){if(Vm(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NAN"}};if(Lm(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Vm(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NOT_NAN"}};if(Lm(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ls(n.field),op:aO(n.op),value:n.value}}}(t):t instanceof vn?function(n){const r=n.getFilters().map(s=>Zw(s));return r.length===1?r[0]:{compositeFilter:{op:lO(n.op),filters:r}}}(t):ne()}function cO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function eI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ir{constructor(e,n,r,s,i=oe.min(),o=oe.min(),a=kt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class uO{constructor(e){this.ht=e}}function hO(t){const e=sO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jl(e,e.limit,"L"):e}/**
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
 */class fO{constructor(){this._n=new dO}addToCollectionParentIndex(e,n){return this._n.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Or.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Or.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class dO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new bt(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new bt(Ve.comparator)).toArray()}}/**
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
 */class gi{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new gi(0)}static Bn(){return new gi(-1)}}/**
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
 */class pO{constructor(){this.changes=new Vi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class gO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class mO{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&wo(r.mutation,s,un.empty(),Xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const s=Zr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ao();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=ir();const o=To(),a=function(){return To()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Is)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),wo(u.mutation,c,u.mutation.getFieldMask(),Xe.now())):o.set(c.key,un.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new gO(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=To();let s=new Je((o,a)=>o-a),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||un.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||ue()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Lw();u.forEach(f=>{if(!i.has(f)){const d=jw(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return Y.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Nw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):O.resolve(Zr());let a=-1,l=i;return o.next(c=>O.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?O.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,ue())).next(u=>({batchId:a,changes:Mw(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let s=ao();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=ao();return this.indexManager.getCollectionParents(e,s).next(o=>O.forEach(o,a=>{const l=function(u,h){return new Li(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,vt.newInvalidDocument(c)))});let o=ao();return i.forEach((a,l)=>{const c=s.get(a);c!==void 0&&wo(c.mutation,l,un.empty(),Xe.now()),lu(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class _O{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return O.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Dn(s.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:hO(s.bundledQuery),readTime:Dn(s.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class yO{constructor(){this.overlays=new Je(Y.comparator),this.hr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zr();return O.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const s=Zr(),i=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return O.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Je((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Zr(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Zr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return O.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new B1(n,r));let i=this.hr.get(n);i===void 0&&(i=ue(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class dp{constructor(){this.Pr=new bt(nt.Ir),this.Tr=new bt(nt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new nt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new Y(new Ve([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new Y(new Ve([])),r=new nt(n,e),s=new nt(n,e+1);let i=ue();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new nt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return Y.comparator(e.key,n.key)||Te(e.pr,n.pr)}static Er(e,n){return Te(e.pr,n.pr)||Y.comparator(e.key,n.key)}}/**
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
 */class vO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new bt(nt.Ir)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $1(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new nt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new bt(Te);return n.forEach(s=>{const i=new nt(s,0),o=new nt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),O.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const o=new nt(new Y(i),0);let a=new bt(Te);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.pr)),!0)},o),O.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Fe(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return O.forEach(n.mutations,s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new nt(n,0),s=this.wr.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}vr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class EO{constructor(e){this.Cr=e,this.docs=function(){return new Je(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=ir();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ir();const o=n.path,a=new Y(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||o1(i1(u),r)<=0||(s.has(u.key)||lu(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ne()}Fr(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new TO(this)}getSize(e){return O.resolve(this.size)}}class TO extends pO{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class wO{constructor(e){this.persistence=e,this.Mr=new Vi(n=>op(n),ap),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Or=0,this.Nr=new dp,this.targetCount=0,this.Br=gi.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),O.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new gi(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.qn(n),O.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Nr.containsKey(n))}}/**
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
 */class IO{constructor(e,n){this.Lr={},this.overlays={},this.kr=new np(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new wO(this),this.indexManager=new fO,this.remoteDocumentCache=function(s){return new EO(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new uO(n),this.$r=new _O(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new yO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new vO(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const s=new AO(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return O.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class AO extends l1{constructor(e){super(),this.currentSequenceNumber=e}}class pp{constructor(e){this.persistence=e,this.zr=new dp,this.jr=null}static Hr(e){return new pp(e)}get Jr(){if(this.jr)return this.jr;throw ne()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),O.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Jr,r=>{const s=Y.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,oe.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return O.or([()=>O.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class gp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=ue(),s=ue();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new gp(e,n.fromCache,r,s)}}/**
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
 */class RO{constructor(){this.$i=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Wi(e,n).next(i=>i||this.Gi(e,n,s,r)).next(i=>i||this.zi(e,n))}Wi(e,n){if(Bm(n))return O.resolve(null);let r=sr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Jl(n,null,"F"),r=sr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ue(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ji(n,a);return this.Hi(n,c,o,l.readTime)?this.Wi(e,Jl(n,null,"F")):this.Ji(e,c,n,l)}))})))}Gi(e,n,r,s){return Bm(n)||s.isEqual(oe.min())?this.zi(e,n):this.Ui.getDocuments(e,r).next(i=>{const o=this.ji(n,i);return this.Hi(n,o,r,s)?this.zi(e,n):(Nm()<=ye.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gf(n)),this.Ji(e,o,n,s1(s,-1)))})}ji(e,n){let r=new bt(Dw(e));return n.forEach((s,i)=>{lu(e,i)&&(r=r.add(i))}),r}Hi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}zi(e,n){return Nm()<=ye.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",gf(n)),this.Ui.getDocumentsMatchingQuery(e,n,Or.min())}Ji(e,n,r,s){return this.Ui.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class CO{constructor(e,n,r,s){this.persistence=e,this.Yi=n,this.serializer=s,this.Zi=new Je(Te),this.Xi=new Vi(i=>op(i),ap),this.es=new Map,this.ts=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this.ns(r)}ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mO(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Zi))}}function bO(t,e,n,r){return new CO(t,e,n,r)}async function tI(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ns(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=ue();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({rs:c,removedBatchIds:o,addedBatchIds:a}))})})}function SO(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ts.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,f=h.keys();let d=O.resolve();return f.forEach(p=>{d=d.next(()=>u.getEntry(l,p)).next(y=>{const T=c.docVersions.get(p);Fe(T!==null),y.version.compareTo(T)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ue();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function nI(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function PO(t,e){const n=le(t),r=e.snapshotVersion;let s=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});s=n.Zi;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(kt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(h,d),function(y,T,v){return y.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,d,u)&&a.push(n.Qr.updateTargetData(i,d))});let l=ir(),c=ue();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(kO(i,o,e.documentUpdates).next(u=>{l=u.ss,c=u.os})),!r.isEqual(oe.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return O.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.Zi=s,i))}function kO(t,e,n){let r=ue(),s=ue();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=ir();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(oe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ss:o,os:s}})}function NO(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function OO(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Zi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(r.targetId,r),n.Xi.set(e,r.targetId)),r})}async function Ef(t,e,n){const r=le(t),s=r.Zi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ia(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Zi=r.Zi.remove(e),r.Xi.delete(s.target)}function Jm(t,e,n){const r=le(t);let s=oe.min(),i=ue();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=le(l),f=h.Xi.get(u);return f!==void 0?O.resolve(h.Zi.get(f)):h.Qr.getTargetData(c,u)}(r,o,sr(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,e,n?s:oe.min(),n?i:ue())).next(a=>(DO(r,R1(e),a),{documents:a,_s:i})))}function DO(t,e,n){let r=t.es.get(e)||oe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.es.set(e,r)}class Zm{constructor(){this.activeTargetIds=N1()}Is(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ts(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ps(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xO{constructor(){this.Ys=new Zm,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ys.Is(e),this.Zs[e]||"not-current"}updateQueryState(e,n,r){this.Zs[e]=n}removeLocalQueryTarget(e){this.Ys.Ts(e)}isLocalQueryTarget(e){return this.Ys.activeTargetIds.has(e)}clearQueryState(e){delete this.Zs[e]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(e){return this.Ys.activeTargetIds.has(e)}start(){return this.Ys=new Zm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class MO{Xs(e){}shutdown(){}}/**
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
 */class e_{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}io(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let nl=null;function ih(){return nl===null?nl=function(){return 268435456+Math.round(2147483648*Math.random())}():nl++,"0x"+nl.toString(16)}/**
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
 */const LO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class VO{constructor(e){this._o=e._o,this.ao=e.ao}uo(e){this.co=e}lo(e){this.ho=e}onMessage(e){this.Po=e}close(){this.ao()}send(e){this._o(e)}Io(){this.co()}To(e){this.ho(e)}Eo(e){this.Po(e)}}/**
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
 */const mt="WebChannelConnection";class FO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+n.host,this.Ro=`projects/${s}/databases/${i}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get mo(){return!1}fo(n,r,s,i,o){const a=ih(),l=this.po(n,r);G("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(c,i,o),this.wo(n,l,c,s).then(u=>(G("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw hi("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}So(n,r,s,i,o,a){return this.fo(n,r,s,i,o)}yo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}po(n,r){const s=LO[n];return`${this.Ao}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}wo(e,n,r,s){const i=ih();return new Promise((o,a)=>{const l=new zN;l.setWithCredentials(!0),l.listenOnce(qN.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case rh.NO_ERROR:const u=l.getResponseJson();G(mt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case rh.TIMEOUT:G(mt,`RPC '${e}' ${i} timed out`),a(new B(R.DEADLINE_EXCEEDED,"Request time out"));break;case rh.HTTP_ERROR:const h=l.getStatus();if(G(mt,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(T){const v=T.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(v)>=0?v:R.UNKNOWN}(d.status);a(new B(p,d.message))}else a(new B(R.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new B(R.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{G(mt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);G(mt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}bo(e,n,r){const s=ih(),i=[this.Ao,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=jN(),a=WN(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.yo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");G(mt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,d=!1;const p=new VO({_o:T=>{d?G(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(f||(G(mt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),G(mt,`RPC '${e}' stream ${s} sending:`,T),h.send(T))},ao:()=>h.close()}),y=(T,v,m)=>{T.listen(v,I=>{try{m(I)}catch(E){setTimeout(()=>{throw E},0)}})};return y(h,Za.EventType.OPEN,()=>{d||G(mt,`RPC '${e}' stream ${s} transport opened.`)}),y(h,Za.EventType.CLOSE,()=>{d||(d=!0,G(mt,`RPC '${e}' stream ${s} transport closed`),p.To())}),y(h,Za.EventType.ERROR,T=>{d||(d=!0,hi(mt,`RPC '${e}' stream ${s} transport errored:`,T),p.To(new B(R.UNAVAILABLE,"The operation could not be completed")))}),y(h,Za.EventType.MESSAGE,T=>{var v;if(!d){const m=T.data[0];Fe(!!m);const I=m,E=I.error||((v=I[0])===null||v===void 0?void 0:v.error);if(E){G(mt,`RPC '${e}' stream ${s} received error:`,E);const b=E.status;let D=function(K){const W=ze[K];if(W!==void 0)return Kw(W)}(b),M=E.message;D===void 0&&(D=R.INTERNAL,M="Unknown error status: "+b+" with message "+E.message),d=!0,p.To(new B(D,M)),h.close()}else G(mt,`RPC '${e}' stream ${s} received:`,m),p.Eo(m)}}),y(a,KN.STAT_EVENT,T=>{T.stat===Pm.PROXY?G(mt,`RPC '${e}' stream ${s} detected buffering proxy`):T.stat===Pm.NOPROXY&&G(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{p.Io()},0),p}}function oh(){return typeof document<"u"?document:null}/**
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
 */function fu(t){return new Y1(t,!0)}/**
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
 */class rI{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Do=r,this.vo=s,this.Co=i,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(e){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),s=Math.max(0,n-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.xo=Date.now(),e())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
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
 */class sI{constructor(e,n,r,s,i,o,a,l){this.oi=e,this.ko=r,this.qo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new rI(e,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(e){this.Zo(),this.stream.send(e)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(e,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,e!==4?this.Uo.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(rr(n.toString()),rr("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.lo(n)}e_(){}auth(){this.state=1;const e=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Qo===n&&this.n_(r,s)},r=>{e(()=>{const s=new B(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(s)})})}n_(e,n){const r=this.t_(this.Qo);this.stream=this.i_(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(s=>{r(()=>this.r_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}t_(e){return n=>{this.oi.enqueueAndForget(()=>this.Qo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UO extends sI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}i_(e,n){return this.connection.bo("Listen",e,n)}onMessage(e){this.Uo.reset();const n=Z1(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?Dn(o.readTime):oe.min()}(e);return this.listener.s_(n,r)}o_(e){const n={};n.database=vf(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=df(l)?{documents:nO(i,l)}:{query:rO(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Qw(i,o.resumeToken);const c=mf(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(oe.min())>0){a.readTime=tc(i,o.snapshotVersion.toTimestamp());const c=mf(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=iO(this.serializer,e);r&&(n.labels=r),this.Yo(n)}__(e){const n={};n.database=vf(this.serializer),n.removeTarget=e,this.Yo(n)}}class $O extends sI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(e,n){return this.connection.bo("Write",e,n)}onMessage(e){if(Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_){this.Uo.reset();const n=tO(e.writeResults,e.commitTime),r=Dn(e.commitTime);return this.listener.l_(r,n)}return Fe(!e.writeResults||e.writeResults.length===0),this.a_=!0,this.listener.h_()}P_(){const e={};e.database=vf(this.serializer),this.Yo(e)}c_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>eO(this.serializer,r))};this.Yo(n)}}/**
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
 */class BO extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.I_=!1}T_(){if(this.I_)throw new B(R.FAILED_PRECONDITION,"The client has already been terminated.")}fo(e,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.fo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(R.UNKNOWN,s.toString())})}So(e,n,r,s){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(R.UNKNOWN,i.toString())})}terminate(){this.I_=!0}}class HO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(e){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.m_("Offline")))}set(e){this.p_(),this.d_=0,e==="Online"&&(this.R_=!1),this.m_(e)}m_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}f_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(rr(n),this.R_=!1):G("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
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
 */class jO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=i,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{As(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=le(l);c.S_.add(4),await Ca(c),c.v_.set("Unknown"),c.S_.delete(4),await du(c)}(this))})}),this.v_=new HO(r,s)}}async function du(t){if(As(t))for(const e of t.b_)await e(!0)}async function Ca(t){for(const e of t.b_)await e(!1)}function iI(t,e){const n=le(t);n.w_.has(e.targetId)||(n.w_.set(e.targetId,e),yp(n)?_p(n):Fi(n).Go()&&mp(n,e))}function oI(t,e){const n=le(t),r=Fi(n);n.w_.delete(e),r.Go()&&aI(n,e),n.w_.size===0&&(r.Go()?r.Ho():As(n)&&n.v_.set("Unknown"))}function mp(t,e){if(t.C_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fi(t).o_(e)}function aI(t,e){t.C_.Le(e),Fi(t).__(e)}function _p(t){t.C_=new K1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.w_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Fi(t).start(),t.v_.V_()}function yp(t){return As(t)&&!Fi(t).Wo()&&t.w_.size>0}function As(t){return le(t).S_.size===0}function lI(t){t.C_=void 0}async function WO(t){t.w_.forEach((e,n)=>{mp(t,e)})}async function qO(t,e){lI(t),yp(t)?(t.v_.g_(e),_p(t)):t.v_.set("Unknown")}async function KO(t,e,n){if(t.v_.set("Online"),e instanceof Gw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.w_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.w_.delete(a),s.C_.removeTarget(a))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nc(t,r)}else if(e instanceof yl?t.C_.Ge(e):e instanceof zw?t.C_.Xe(e):t.C_.He(e),!n.isEqual(oe.min()))try{const r=await nI(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.C_._t(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.w_.get(c);u&&i.w_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.w_.get(l);if(!u)return;i.w_.set(l,u.withResumeToken(kt.EMPTY_BYTE_STRING,u.snapshotVersion)),aI(i,l);const h=new Ir(u.target,l,c,u.sequenceNumber);mp(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await nc(t,r)}}async function nc(t,e,n){if(!Ia(e))throw e;t.S_.add(1),await Ca(t),t.v_.set("Offline"),n||(n=()=>nI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.S_.delete(1),await du(t)})}function cI(t,e){return e().catch(n=>nc(t,n,e))}async function pu(t){const e=le(t),n=xr(e);let r=e.y_.length>0?e.y_[e.y_.length-1].batchId:-1;for(;zO(e);)try{const s=await NO(e.localStore,r);if(s===null){e.y_.length===0&&n.Ho();break}r=s.batchId,GO(e,s)}catch(s){await nc(e,s)}uI(e)&&hI(e)}function zO(t){return As(t)&&t.y_.length<10}function GO(t,e){t.y_.push(e);const n=xr(t);n.Go()&&n.u_&&n.c_(e.mutations)}function uI(t){return As(t)&&!xr(t).Wo()&&t.y_.length>0}function hI(t){xr(t).start()}async function QO(t){xr(t).P_()}async function YO(t){const e=xr(t);for(const n of t.y_)e.c_(n.mutations)}async function XO(t,e,n){const r=t.y_.shift(),s=up.from(r,e,n);await cI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await pu(t)}async function JO(t,e){e&&xr(t).u_&&await async function(r,s){if(function(o){return j1(o)&&o!==R.ABORTED}(s.code)){const i=r.y_.shift();xr(r).jo(),await cI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await pu(r)}}(t,e),uI(t)&&hI(t)}async function t_(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=As(n);n.S_.add(3),await Ca(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.S_.delete(3),await du(n)}async function ZO(t,e){const n=le(t);e?(n.S_.delete(2),await du(n)):e||(n.S_.add(2),await Ca(n),n.v_.set("Unknown"))}function Fi(t){return t.F_||(t.F_=function(n,r,s){const i=le(n);return i.T_(),new UO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{uo:WO.bind(null,t),lo:qO.bind(null,t),s_:KO.bind(null,t)}),t.b_.push(async e=>{e?(t.F_.jo(),yp(t)?_p(t):t.v_.set("Unknown")):(await t.F_.stop(),lI(t))})),t.F_}function xr(t){return t.M_||(t.M_=function(n,r,s){const i=le(n);return i.T_(),new $O(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{uo:QO.bind(null,t),lo:JO.bind(null,t),h_:YO.bind(null,t),l_:XO.bind(null,t)}),t.b_.push(async e=>{e?(t.M_.jo(),await pu(t)):(await t.M_.stop(),t.y_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.y_.length} pending writes`),t.y_=[]))})),t.M_}/**
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
 */class vp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new vp(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ep(t,e){if(rr("AsyncQueue",`${e}: ${t}`),Ia(t))return new B(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Js{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=ao(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new Js(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class n_{constructor(){this.x_=new Je(Y.comparator)}track(e){const n=e.doc.key,r=this.x_.get(n);r?e.type!==0&&r.type===3?this.x_=this.x_.insert(n,e):e.type===3&&r.type!==1?this.x_=this.x_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.x_=this.x_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.x_=this.x_.remove(n):e.type===1&&r.type===2?this.x_=this.x_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):ne():this.x_=this.x_.insert(n,e)}O_(){const e=[];return this.x_.inorderTraversal((n,r)=>{e.push(r)}),e}}class mi{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new mi(e,n,Js.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&au(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class eD{constructor(){this.N_=void 0,this.listeners=[]}}class tD{constructor(){this.queries=new Vi(e=>Ow(e),au),this.onlineState="Unknown",this.B_=new Set}}async function fI(t,e){const n=le(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new eD),s)try{i.N_=await n.onListen(r)}catch(o){const a=Ep(o,`Initialization of query '${gf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.L_(n.onlineState),i.N_&&e.k_(i.N_)&&Tp(n)}async function dI(t,e){const n=le(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function nD(t,e){const n=le(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.k_(s)&&(r=!0);o.N_=s}}r&&Tp(n)}function rD(t,e,n){const r=le(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Tp(t){t.B_.forEach(e=>{e.next()})}class pI{constructor(e,n,r){this.query=e,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new mi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Q_?this.U_(e)&&(this.q_.next(e),n=!0):this.W_(e,this.onlineState)&&(this.G_(e),n=!0),this.K_=e,n}onError(e){this.q_.error(e)}L_(e){this.onlineState=e;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,e)&&(this.G_(this.K_),n=!0),n}W_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}U_(e){if(e.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(e){e=mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Q_=!0,this.q_.next(e)}}/**
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
 */class gI{constructor(e){this.key=e}}class mI{constructor(e){this.key=e}}class sD{constructor(e,n){this.query=e,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=ue(),this.mutatedKeys=ue(),this.ia=Dw(e),this.sa=new Js(this.ia)}get oa(){return this.ta}_a(e,n){const r=n?n.aa:new n_,s=n?n.sa:this.sa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=lu(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let T=!1;f&&d?f.data.isEqual(d.data)?p!==y&&(r.track({type:3,doc:d}),T=!0):this.ua(f,d)||(r.track({type:2,doc:d}),T=!0,(l&&this.ia(d,l)>0||c&&this.ia(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),T=!0):f&&!d&&(r.track({type:1,doc:f}),T=!0,(l||c)&&(a=!0)),T&&(d?(o=o.add(d),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{sa:o,aa:r,Hi:a,mutatedKeys:i}}ua(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.sa;this.sa=e.sa,this.mutatedKeys=e.mutatedKeys;const i=e.aa.O_();i.sort((c,u)=>function(f,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return p(f)-p(d)}(c.type,u.type)||this.ia(c.doc,u.doc)),this.ca(r);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,l=a!==this.na;return this.na=a,i.length!==0||l?{snapshot:new mi(this.query,e.sa,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new n_,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(e){return!this.ta.has(e)&&!!this.sa.has(e)&&!this.sa.get(e).hasLocalMutations}ca(e){e&&(e.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=e.current)}la(){if(!this.current)return[];const e=this.ra;this.ra=ue(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const n=[];return e.forEach(r=>{this.ra.has(r)||n.push(new mI(r))}),this.ra.forEach(r=>{e.has(r)||n.push(new gI(r))}),n}Ia(e){this.ta=e._s,this.ra=ue();const n=this._a(e.documents);return this.applyChanges(n,!0)}Ta(){return mi.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class iD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class oD{constructor(e){this.key=e,this.Ea=!1}}class aD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new Vi(a=>Ow(a),au),this.Ra=new Map,this.Va=new Set,this.ma=new Je(Y.comparator),this.fa=new Map,this.ga=new dp,this.pa={},this.ya=new Map,this.wa=gi.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function lD(t,e){const n=yD(t);let r,s;const i=n.Aa.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Ta();else{const o=await OO(n.localStore,sr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await cD(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&iI(n.remoteStore,o)}return s}async function cD(t,e,n,r,s){t.ba=(h,f,d)=>async function(y,T,v,m){let I=T.view._a(v);I.Hi&&(I=await Jm(y.localStore,T.query,!1).then(({documents:D})=>T.view._a(D,I)));const E=m&&m.targetChanges.get(T.targetId),b=T.view.applyChanges(I,y.isPrimaryClient,E);return s_(y,T.targetId,b.ha),b.snapshot}(t,h,f,d);const i=await Jm(t.localStore,e,!0),o=new sD(e,i._s),a=o._a(i.documents),l=Ra.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);s_(t,n,c.ha);const u=new iD(e,n,o);return t.Aa.set(e,u),t.Ra.has(n)?t.Ra.get(n).push(e):t.Ra.set(n,[e]),c.snapshot}async function uD(t,e){const n=le(t),r=n.Aa.get(e),s=n.Ra.get(r.targetId);if(s.length>1)return n.Ra.set(r.targetId,s.filter(i=>!au(i,e))),void n.Aa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ef(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),oI(n.remoteStore,r.targetId),Tf(n,r.targetId)}).catch(wa)):(Tf(n,r.targetId),await Ef(n.localStore,r.targetId,!0))}async function hD(t,e,n){const r=vD(t);try{const s=await function(o,a){const l=le(o),c=Xe.now(),u=a.reduce((d,p)=>d.add(p.key),ue());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=ir(),y=ue();return l.ts.getEntries(d,u).next(T=>{p=T,p.forEach((v,m)=>{m.isValidDocument()||(y=y.add(v))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,p)).next(T=>{h=T;const v=[];for(const m of a){const I=F1(m,h.get(m.key).overlayedDocument);I!=null&&v.push(new Is(m.key,I,Aw(I.value.mapValue),Jn.exists(!0)))}return l.mutationQueue.addMutationBatch(d,c,v,a)}).next(T=>{f=T;const v=T.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(d,T.batchId,v)})}).then(()=>({batchId:f.batchId,changes:Mw(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.pa[o.currentUser.toKey()];c||(c=new Je(Te)),c=c.insert(a,l),o.pa[o.currentUser.toKey()]=c}(r,s.batchId,n),await ba(r,s.changes),await pu(r.remoteStore)}catch(s){const i=Ep(s,"Failed to persist write");n.reject(i)}}async function _I(t,e){const n=le(t);try{const r=await PO(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.fa.get(i);o&&(Fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ea=!0:s.modifiedDocuments.size>0?Fe(o.Ea):s.removedDocuments.size>0&&(Fe(o.Ea),o.Ea=!1))}),await ba(n,r,e)}catch(r){await wa(r)}}function r_(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Aa.forEach((i,o)=>{const a=o.view.L_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=le(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.listeners)f.L_(a)&&(c=!0)}),c&&Tp(l)}(r.eventManager,e),s.length&&r.da.s_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fD(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.fa.get(e),i=s&&s.key;if(i){let o=new Je(Y.comparator);o=o.insert(i,vt.newNoDocument(i,oe.min()));const a=ue().add(i),l=new hu(oe.min(),new Map,new Je(Te),o,a);await _I(r,l),r.ma=r.ma.remove(i),r.fa.delete(e),wp(r)}else await Ef(r.localStore,e,!1).then(()=>Tf(r,e,n)).catch(wa)}async function dD(t,e){const n=le(t),r=e.batch.batchId;try{const s=await SO(n.localStore,e);vI(n,r,null),yI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ba(n,s)}catch(s){await wa(s)}}async function pD(t,e,n){const r=le(t);try{const s=await function(o,a){const l=le(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Fe(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);vI(r,e,n),yI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ba(r,s)}catch(s){await wa(s)}}function yI(t,e){(t.ya.get(e)||[]).forEach(n=>{n.resolve()}),t.ya.delete(e)}function vI(t,e,n){const r=le(t);let s=r.pa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.pa[r.currentUser.toKey()]=s}}function Tf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ra.get(e))t.Aa.delete(r),n&&t.da.Da(r,n);t.Ra.delete(e),t.isPrimaryClient&&t.ga.Vr(e).forEach(r=>{t.ga.containsKey(r)||EI(t,r)})}function EI(t,e){t.Va.delete(e.path.canonicalString());const n=t.ma.get(e);n!==null&&(oI(t.remoteStore,n),t.ma=t.ma.remove(e),t.fa.delete(n),wp(t))}function s_(t,e,n){for(const r of n)r instanceof gI?(t.ga.addReference(r.key,e),gD(t,r)):r instanceof mI?(G("SyncEngine","Document no longer in limbo: "+r.key),t.ga.removeReference(r.key,e),t.ga.containsKey(r.key)||EI(t,r.key)):ne()}function gD(t,e){const n=e.key,r=n.path.canonicalString();t.ma.get(n)||t.Va.has(r)||(G("SyncEngine","New document in limbo: "+n),t.Va.add(r),wp(t))}function wp(t){for(;t.Va.size>0&&t.ma.size<t.maxConcurrentLimboResolutions;){const e=t.Va.values().next().value;t.Va.delete(e);const n=new Y(Ve.fromString(e)),r=t.wa.next();t.fa.set(r,new oD(n)),t.ma=t.ma.insert(n,r),iI(t.remoteStore,new Ir(sr(lp(n.path)),r,"TargetPurposeLimboResolution",np.ae))}}async function ba(t,e,n){const r=le(t),s=[],i=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,l)=>{o.push(r.ba(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=gp.Ki(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.da.s_(s),await async function(l,c){const u=le(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>O.forEach(c,f=>O.forEach(f.qi,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>O.forEach(f.Qi,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Ia(h))throw h;G("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const d=u.Zi.get(f),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);u.Zi=u.Zi.insert(f,y)}}}(r.localStore,i))}async function mD(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await tI(n.localStore,e);n.currentUser=e,function(i,o){i.ya.forEach(a=>{a.forEach(l=>{l.reject(new B(R.CANCELLED,o))})}),i.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ba(n,r.rs)}}function _D(t,e){const n=le(t),r=n.fa.get(e);if(r&&r.Ea)return ue().add(r.key);{let s=ue();const i=n.Ra.get(e);if(!i)return s;for(const o of i){const a=n.Aa.get(o);s=s.unionWith(a.view.oa)}return s}}function yD(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_I.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_D.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fD.bind(null,e),e.da.s_=nD.bind(null,e.eventManager),e.da.Da=rD.bind(null,e.eventManager),e}function vD(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pD.bind(null,e),e}class i_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=fu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return bO(this.persistence,new RO,e.initialUser,this.serializer)}createPersistence(e){return new IO(pp.Hr,this.serializer)}createSharedClientState(e){return new xO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ED{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>r_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mD.bind(null,this.syncEngine),await ZO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tD}()}createDatastore(e){const n=fu(e.databaseInfo.databaseId),r=function(i){return new FO(i)}(e.databaseInfo);return function(i,o,a,l){return new BO(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new jO(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>r_(this.syncEngine,n,0),function(){return e_.v()?new e_:new MO}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new aD(s,i,o,a,l,c);return u&&(h.Sa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=le(n);G("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await Ca(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class TI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Fa(this.observer.next,e)}error(e){this.observer.error?this.Fa(this.observer.error,e):rr("Uncaught Error in snapshot listener:",e.toString())}Ma(){this.muted=!0}Fa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class TD{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=Tw.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{G("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(G("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ep(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ah(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await tI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function o_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ID(t);G("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>t_(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>t_(e.remoteStore,i)),t._onlineComponents=e}function wD(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ID(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await ah(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!wD(n))throw n;hi("Error using user provided cache. Falling back to memory cache: "+n),await ah(t,new i_)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await ah(t,new i_);return t._offlineComponents}async function wI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await o_(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await o_(t,new ED))),t._onlineComponents}function AD(t){return wI(t).then(e=>e.syncEngine)}async function II(t){const e=await wI(t),n=e.eventManager;return n.onListen=lD.bind(null,e.syncEngine),n.onUnlisten=uD.bind(null,e.syncEngine),n}function RD(t,e,n={}){const r=new Xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new TI({next:f=>{o.enqueueAndForget(()=>dI(i,h));const d=f.docs.has(a);!d&&f.fromCache?c.reject(new B(R.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&l&&l.source==="server"?c.reject(new B(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new pI(lp(a.path),u,{includeMetadataChanges:!0,z_:!0});return fI(i,h)}(await II(t),t.asyncQueue,e,n,r)),r.promise}function CD(t,e,n={}){const r=new Xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new TI({next:f=>{o.enqueueAndForget(()=>dI(i,h)),f.fromCache&&l.source==="server"?c.reject(new B(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new pI(a,u,{includeMetadataChanges:!0,z_:!0});return fI(i,h)}(await II(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function AI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const a_=new Map;/**
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
 */function RI(t,e,n){if(!n)throw new B(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bD(t,e,n,r){if(e===!0&&r===!0)throw new B(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function l_(t){if(!Y.isDocumentKey(t))throw new B(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function c_(t){if(Y.isDocumentKey(t))throw new B(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function gs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gu(t);throw new B(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function SD(t,e){if(e<=0)throw new B(R.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class u_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=AI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new u_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new u_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new QN;switch(r.type){case"firstParty":return new ZN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=a_.get(n);r&&(G("ComponentProvider","Removing Datastore"),a_.delete(n),r.terminate())}(this),Promise.resolve()}}function PD(t,e,n,r={}){var s;const i=(t=gs(t,mu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=_t.MOCK_USER;else{a=lT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new B(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new _t(c)}t._authCredentials=new YN(new Ew(a,l))}}/**
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
 */class Br{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Br(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class Pr extends Br{constructor(e,n,r){super(e,n,lp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new Y(e))}withConverter(e){return new Pr(this.firestore,e,this._path)}}function YH(t,e,...n){if(t=Pt(t),RI("collection","path",e),t instanceof mu){const r=Ve.fromString(e,...n);return c_(r),new Pr(t,null,r)}{if(!(t instanceof Bt||t instanceof Pr))throw new B(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return c_(r),new Pr(t.firestore,null,r)}}function XH(t,e,...n){if(t=Pt(t),arguments.length===1&&(e=Tw.V()),RI("doc","path",e),t instanceof mu){const r=Ve.fromString(e,...n);return l_(r),new Bt(t,null,new Y(r))}{if(!(t instanceof Bt||t instanceof Pr))throw new B(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return l_(r),new Bt(t.firestore,t instanceof Pr?t.converter:null,new Y(r))}}/**
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
 */class kD{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new rI(this,"async_queue_retry"),this.tu=()=>{const n=oh();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const e=oh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nu(),this.ru(e)}enterRestrictedMode(e){if(!this.Ha){this.Ha=!0,this.Xa=e||!1;const n=oh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(e){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new Xn;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ja.push(e),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(e){if(!Ia(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(e){const n=this.za.then(()=>(this.Za=!0,e().catch(r=>{this.Ya=r,this.Za=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw rr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(e,n,r){this.nu(),this.eu.indexOf(e)>-1&&(n=0);const s=vp.createAndSchedule(this,e,n,r,i=>this.su(i));return this.Ja.push(s),s}nu(){this.Ya&&ne()}verifyOperationInProgress(){}async ou(){let e;do e=this.za,await e;while(e!==this.za)}_u(e){for(const n of this.Ja)if(n.timerId===e)return!0;return!1}au(e){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ou()})}uu(e){this.eu.push(e)}su(e){const n=this.Ja.indexOf(e);this.Ja.splice(n,1)}}class _u extends mu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new kD}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||CI(this),this._firestoreClient.terminate()}}function ND(t,e){const n=typeof t=="object"?t:Hc(),r=typeof t=="string"?t:e||"(default)",s=Bc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=iT("firestore");i&&PD(s,...i)}return s}function Ip(t){return t._firestoreClient||CI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function CI(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new h1(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,AI(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new TD(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class _i{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _i(kt.fromBase64String(e))}catch(n){throw new B(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _i(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ap{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class bI{constructor(e){this._methodName=e}}/**
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
 */class yu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
 */const OD=/^__.*__$/;class DD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Is(e,this.data,this.fieldMask,n,this.fieldTransforms):new Aa(e,this.data,n,this.fieldTransforms)}}function SI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class Rp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.cu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(e){return new Rp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.hu({path:r,Iu:!1});return s.Tu(e),s}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.hu({path:r,Iu:!1});return s.cu(),s}du(e){return this.hu({path:void 0,Iu:!0})}Au(e){return rc(e,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Tu(this.path.get(e))}Tu(e){if(e.length===0)throw this.Au("Document fields must not be empty");if(SI(this.lu)&&OD.test(e))throw this.Au('Document fields cannot begin and end with "__"')}}class xD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fu(e)}mu(e,n,r,s=!1){return new Rp({lu:e,methodName:n,Vu:r,path:It.emptyPath(),Iu:!1,Ru:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function PI(t){const e=t._freezeSettings(),n=fu(t._databaseId);return new xD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function MD(t,e,n,r,s,i={}){const o=t.mu(i.merge||i.mergeFields?2:0,e,n,s);OI("Data must be an object, but it was:",o,r);const a=kI(r,o);let l,c;if(i.merge)l=new un(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=VD(e,h,n);if(!o.contains(f))throw new B(R.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);UD(u,f)||u.push(f)}l=new un(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new DD(new Jt(a),l,c)}function LD(t,e,n,r=!1){return Cp(n,t.mu(r?4:3,e))}function Cp(t,e){if(NI(t=Pt(t)))return OI("Unsupported field value:",e,t),kI(t,e);if(t instanceof bI)return function(r,s){if(!SI(s.lu))throw s.Au(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Au(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Iu&&e.lu!==4)throw e.Au("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Cp(a,s.du(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return O1(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Xe.fromDate(r);return{timestampValue:tc(s.serializer,i)}}if(r instanceof Xe){const i=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:tc(s.serializer,i)}}if(r instanceof yu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof _i)return{bytesValue:Qw(s.serializer,r._byteString)};if(r instanceof Bt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:fp(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Au(`Unsupported field value: ${gu(r)}`)}(t,e)}function kI(t,e){const n={};return ww(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mi(t,(r,s)=>{const i=Cp(s,e.Pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function NI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof yu||t instanceof _i||t instanceof Bt||t instanceof bI)}function OI(t,e,n){if(!NI(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=gu(n);throw r==="an object"?e.Au(t+" a custom object"):e.Au(t+" "+r)}}function VD(t,e,n){if((e=Pt(e))instanceof Ap)return e._internalPath;if(typeof e=="string")return DI(t,e);throw rc("Field path arguments must be of type string or ",t,!1,void 0,n)}const FD=new RegExp("[~\\*/\\[\\]]");function DI(t,e,n){if(e.search(FD)>=0)throw rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ap(...e.split("."))._internalPath}catch{throw rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new B(R.INVALID_ARGUMENT,a+t+l)}function UD(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class xI{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $D(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $D extends xI{data(){return super.data()}}function vu(t,e){return typeof e=="string"?DI(t,e):e instanceof Ap?e._internalPath:e._delegate._internalPath}/**
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
 */function BD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bp{}class Sp extends bp{}function JH(t,e,...n){let r=[];e instanceof bp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Pp).length,a=i.filter(l=>l instanceof Eu).length;if(o>1||o>0&&a>0)throw new B(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Eu extends Sp{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Eu(e,n,r)}_apply(e){const n=this._parse(e);return MI(e._query,n),new Br(e.firestore,e.converter,pf(e._query,n))}_parse(e){const n=PI(e.firestore);return function(i,o,a,l,c,u,h){let f;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new B(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){f_(h,u);const d=[];for(const p of h)d.push(h_(l,i,p));f={arrayValue:{values:d}}}else f=h_(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||f_(h,u),f=LD(a,o,h,u==="in"||u==="not-in");return Ye.create(c,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ZH(t,e,n){const r=e,s=vu("where",t);return Eu._create(s,r,n)}class Pp extends bp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Pp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:vn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)MI(o,l),o=pf(o,l)}(e._query,n),new Br(e.firestore,e.converter,pf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class kp extends Sp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new kp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new B(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new B(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Xs(i,o);return function(c,u){if(cp(c)===null){const h=ou(c);h!==null&&LI(c,h,u.field)}}(s,a),a}(e._query,this._field,this._direction);return new Br(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Li(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function ej(t,e="asc"){const n=e,r=vu("orderBy",t);return kp._create(r,n)}class Np extends Sp{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Np(e,n,r)}_apply(e){return new Br(e.firestore,e.converter,Jl(e._query,this._limit,this._limitType))}}function tj(t){return SD("limit",t),Np._create("limit",t,"F")}function h_(t,e,n){if(typeof(n=Pt(n))=="string"){if(n==="")throw new B(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Nw(e)&&n.indexOf("/")!==-1)throw new B(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!Y.isDocumentKey(r))throw new B(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Mm(t,new Y(r))}if(n instanceof Bt)return Mm(t,n._key);throw new B(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gu(n)}.`)}function f_(t,e){if(!Array.isArray(t)||t.length===0)throw new B(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function MI(t,e){if(e.isInequality()){const r=ou(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new B(R.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=cp(t);i!==null&&LI(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function LI(t,e,n){if(!n.isEqual(e))throw new B(R.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class HD{convertValue(e,n="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Mi(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new yu(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=sp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qo(e));default:return null}}convertTimestamp(e){const n=Dr(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Fe(eI(r));const s=new Yo(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||rr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function jD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class co{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class VI extends xI{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class vl extends VI{data(e={}){return super.data(e)}}class WD{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new co(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new vl(this._firestore,this._userDataWriter,r.key,r,new co(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new vl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new co(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new vl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new co(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:qD(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
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
 */function nj(t){t=gs(t,Bt);const e=gs(t.firestore,_u);return RD(Ip(e),t._key).then(n=>zD(e,t,n))}class FI extends HD{constructor(e){super(),this.firestore=e}convertBytes(e){return new _i(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function rj(t){t=gs(t,Br);const e=gs(t.firestore,_u),n=Ip(e),r=new FI(e);return BD(t._query),CD(n,t._query).then(s=>new WD(e,r,t,s))}function sj(t,e,n){t=gs(t,Bt);const r=gs(t.firestore,_u),s=jD(t.converter,e,n);return KD(r,[MD(PI(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Jn.none())])}function KD(t,e){return function(r,s){const i=new Xn;return r.asyncQueue.enqueueAndForget(async()=>hD(await AD(r),s,i)),i.promise}(Ip(t),e)}function zD(t,e,n){const r=n.docs.get(e._key),s=new FI(t);return new VI(t,s,e._key,r,new co(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){xi=s})(Fr),Vn(new _n("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new _u(new XN(r.getProvider("auth-internal")),new t1(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yo(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Kt(km,"4.1.2",e),Kt(km,"4.1.2","esm2017")})();function GD(t){return Array.isArray(t)?t:[t]}const QD=["title","script","style","noscript"],El=["base","meta","link","style","script","noscript"],YD=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],XD=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],d_=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"],JD=typeof window<"u";function UI(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function p_(t){return t._h||UI(t._d?t._d:`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function $I(t,e){const{props:n,tag:r}=t;if(XD.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof n[i]<"u"){const o=String(n[i]);return e&&!e(o)?!1:`${r}:${i}:${o}`}return!1}function g_(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function ZD(t,e,n){const r={tag:t,props:{}};return e instanceof Promise&&(e=await e),t==="templateParams"?(r.props=e,r):["title","titleTemplate"].includes(t)?(e&&typeof e=="object"?(r.textContent=e.textContent,e.tagPriority&&(r.tagPriority=e.tagPriority)):r.textContent=e,r):typeof e=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(e)||e.startsWith("/"))?r.props.src=e:r.innerHTML=e,r):!1:(e.body&&(e.tagPosition="bodyClose",delete e.body),e.children&&(e.innerHTML=e.children,delete e.children),r.props=await tx({...e}),Object.keys(r.props).filter(s=>d_.includes(s)).forEach(s=>{(!["innerHTML","textContent"].includes(s)||QD.includes(r.tag))&&(r[s]=r.props[s]),delete r.props[s]}),d_.forEach(s=>{!r[s]&&n[s]&&(r[s]=n[s])}),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML)),r.props.class&&(r.props.class=ex(r.props.class)),r.props.content&&Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r)}function ex(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function tx(t){for(const e of Object.keys(t)){const n=e.startsWith("data-");t[e]instanceof Promise&&(t[e]=await t[e]),String(t[e])==="true"?t[e]=n?"true":"":String(t[e])==="false"&&(n?t[e]="false":delete t[e])}return t}const nx=10;async function rx(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,r])=>typeof r<"u"&&YD.includes(n)).forEach(([n,r])=>{const s=GD(r);e.push(...s.map(i=>ZD(n,i,t)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,r)=>(n._e=t._i,t.mode&&(n._m=t.mode),n._p=(t._i<<nx)+r,n))}const m_={base:-1,title:1},__={critical:-8,high:-1,low:2};function sc(t){let e=10;const n=t.tagPriority;return typeof n=="number"?n:(t.tag==="meta"?(t.props.charset&&(e=-2),t.props["http-equiv"]==="content-security-policy"&&(e=0)):t.tag==="link"&&t.props.rel==="preconnect"?e=2:t.tag in m_&&(e=m_[t.tag]),typeof n=="string"&&n in __?e+__[n]:e)}const sx=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Gi(t,e){if(typeof t!="string")return t;function n(o){let a;return["s","pageTitle"].includes(o)?a=e.pageTitle:o.includes(".")?a=o.split(".").reduce((l,c)=>l&&l[c]||void 0,e):a=e[o],typeof a<"u"?(a||"").replace(/"/g,'\\"'):!1}let r=t;try{r=decodeURI(t)}catch{}(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const a=n(o.slice(1));typeof a=="string"&&(t=t.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(l,c)=>`${a}${c}`).trim())});const i=e.separator;return t.includes(i)&&(t.endsWith(i)&&(t=t.slice(0,-i.length).trim()),t.startsWith(i)&&(t=t.slice(i.length).trim()),t=t.replace(new RegExp(`\\${i}\\s*\\${i}`,"g"),i)),t}function ix(t){const e={tag:t.tagName.toLowerCase(),props:t.getAttributeNames().reduce((n,r)=>({...n,[r]:t.getAttribute(r)}),{}),innerHTML:t.innerHTML};return e._d=$I(e),e}async function BI(t,e={}){var u;const n=e.document||t.resolvedOptions.document;if(!n)return;const r=(await t.resolveTags()).map(h=>({tag:h,id:El.includes(h.tag)?p_(h):h.tag,shouldRender:!0})),s={shouldRender:!0,tags:r};if(await t.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;let i=t._dom;if(!i){i={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const h of["body","head"]){const f=(u=n==null?void 0:n[h])==null?void 0:u.children;for(const d of[...f].filter(p=>El.includes(p.tagName.toLowerCase())))i.elMap[d.getAttribute("data-hid")||p_(ix(d))]=d}}i.pendingSideEffects={...i.sideEffects||{}},i.sideEffects={};function o(h,f,d){const p=`${h}:${f}`;i.sideEffects[p]=d,delete i.pendingSideEffects[p]}function a({id:h,$el:f,tag:d}){const p=d.tag.endsWith("Attrs");i.elMap[h]=f,p||(["textContent","innerHTML"].forEach(y=>{d[y]&&d[y]!==f[y]&&(f[y]=d[y])}),o(h,"el",()=>{i.elMap[h].remove(),delete i.elMap[h]})),Object.entries(d.props).forEach(([y,T])=>{T=String(T);const v=`attr:${y}`;if(y==="class")for(const m of(T||"").split(" ").filter(Boolean))p&&o(h,`${v}:${m}`,()=>f.classList.remove(m)),!f.classList.contains(m)&&f.classList.add(m);else f.getAttribute(y)!==T&&f.setAttribute(y,T),p&&o(h,v,()=>f.removeAttribute(y))})}const l=[],c={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const h of r){const{tag:f,shouldRender:d,id:p}=h;if(d){if(f.tag==="title"){n.title=f.textContent;continue}h.$el=h.$el||i.elMap[p],h.$el?a(h):El.includes(f.tag)&&l.push(h)}}for(const h of l){const f=h.tag.tagPosition||"head";h.$el=n.createElement(h.tag.tag),a(h),c[f]=c[f]||n.createDocumentFragment(),c[f].appendChild(h.$el)}for(const h of r)await t.hooks.callHook("dom:renderTag",h,n,o);c.head&&n.head.appendChild(c.head),c.bodyOpen&&n.body.insertBefore(c.bodyOpen,n.body.firstChild),c.bodyClose&&n.body.appendChild(c.bodyClose),Object.values(i.pendingSideEffects).forEach(h=>h()),t._dom=i,await t.hooks.callHook("dom:rendered",{renders:r})}async function ox(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domUpdatePromise=t._domUpdatePromise||new Promise(r=>n(async()=>{await BI(t,e),delete t._domUpdatePromise,r()}))}function ax(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(i){ox(i,t)}}}}}const lx=["templateParams","htmlAttrs","bodyAttrs"],cx={hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(r=>{t.props[r]&&(t.key=t.props[r],delete t.props[r])});const n=$I(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(r=>{const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&lx.includes(r.tag)&&(a="merge"),a==="merge"){const l=i.props;["class","style"].forEach(c=>{r.props[c]&&l[c]&&(c==="style"&&!l[c].endsWith(";")&&(l[c]+=";"),r.props[c]=`${l[c]} ${r.props[c]}`)}),e[s].props={...l,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}else if(sc(r)>sc(i))return}const o=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(El.includes(r.tag)&&o===0){delete e[s];return}e[s]=r});const n=[];Object.values(e).forEach(r=>{const s=r._duped;delete r._duped,n.push(r),s&&n.push(...s)}),t.tags=n}}},ux={mode:"server",hooks:{"tags:resolve":function(t){const e={};t.tags.filter(n=>["titleTemplate","templateParams"].includes(n.tag)&&n._m==="server").forEach(n=>{e[n.tag]=n.tag==="titleTemplate"?n.textContent:n.props}),Object.keys(e).length&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},y_=["script","link","bodyAttrs"];function v_(t){const e={},n={};return Object.entries(t.props).forEach(([r,s])=>{r.startsWith("on")&&typeof s=="function"?n[r]=s:e[r]=s}),{props:e,eventHandlers:n}}const hx={hooks:{"ssr:render":function(t){t.tags=t.tags.map(e=>(!y_.includes(e.tag)||!Object.entries(e.props).find(([n,r])=>n.startsWith("on")&&typeof r=="function")||(e.props=v_(e).props),e))},"tags:resolve":function(t){t.tags=t.tags.map(e=>{if(!y_.includes(e.tag))return e;const{props:n,eventHandlers:r}=v_(e);return Object.keys(r).length&&(e.props=n,e._eventHandlers=r),e})},"dom:renderTag":function(t,e,n){if(!t.tag._eventHandlers)return;const r=t.tag.tag==="bodyAttrs"?e.defaultView:t.$el;Object.entries(t.tag._eventHandlers).forEach(([s,i])=>{const o=`${t.tag._d||t.tag._p}:${s}`,a=s.slice(2).toLowerCase(),l=`data-h-${a}`;if(n(t.id,o,()=>{}),t.$el.hasAttribute(l))return;const c=i;t.$el.setAttribute(l,""),r.addEventListener(a,c),t.entry&&n(t.id,o,()=>{r.removeEventListener(a,c),t.$el.removeAttribute(l)})})}}},fx=["link","style","script","noscript"],dx={hooks:{"tag:normalise":({tag:t})=>{t.key&&fx.includes(t.tag)&&(t.props["data-hid"]=t._h=UI(t.key))}}},px={hooks:{"tags:resolve":t=>{const e=n=>{var r;return(r=t.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of sx)for(const s of t.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=e(s.tagPriority.replace(n,""));typeof i<"u"&&(s._p=i+r)}t.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>sc(n)-sc(r))}}},gx={hooks:{"tags:resolve":t=>{var i;const{tags:e}=t,n=(i=e.find(o=>o.tag==="title"))==null?void 0:i.textContent,r=e.findIndex(o=>o.tag==="templateParams"),s=r!==-1?e[r].props:{};s.separator=s.separator||"|",s.pageTitle=Gi(s.pageTitle||n||"",s);for(const o of e)["titleTemplate","title"].includes(o.tag)&&typeof o.textContent=="string"?o.textContent=Gi(o.textContent,s):o.tag==="meta"&&typeof o.props.content=="string"?o.props.content=Gi(o.props.content,s):o.tag==="link"&&typeof o.props.href=="string"?o.props.href=Gi(o.props.href,s):o.tag==="script"&&["application/json","application/ld+json"].includes(o.props.type)&&o.innerHTML&&(o.innerHTML=Gi(o.innerHTML,s));t.tags=e.filter(o=>o.tag!=="templateParams")}}},mx={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(s=>s.tag==="titleTemplate");const r=e.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=g_(e[n].textContent,e[r].textContent);s!==null?e[r].textContent=s||e[r].textContent:delete e[r]}else if(n!==-1){const s=g_(e[n].textContent);s!==null&&(e[n].textContent=s,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}};let HI;function _x(t={}){const e=yx(t);return e.use(ax()),HI=e}function E_(t,e){return!t||t==="server"&&e||t==="client"&&!e}function yx(t={}){const e=JE();e.addHooks(t.hooks||{}),t.document=t.document||(JD?document:void 0);const n=!t.document;t.plugins=[cx,ux,hx,dx,px,gx,mx,...(t==null?void 0:t.plugins)||[]];const r=()=>e.callHook("entries:updated",o);let s=0,i=[];const o={resolvedOptions:t,hooks:e,headEntries(){return i},use(a){const l=typeof a=="function"?a(o):a;E_(l.mode,n)&&e.addHooks(l.hooks||{})},push(a,l){const c={_i:s++,input:a,...l};return E_(c.mode,n)&&(i.push(c),r()),{dispose(){i=i.filter(u=>u._i!==c._i),e.callHook("entries:updated",o),r()},patch(u){i=i.map(h=>(h._i===c._i&&(h.input=c.input=u),h)),r()}}},async resolveTags(){const a={tags:[],entries:[...i]};await e.callHook("entries:resolve",a);for(const l of a.entries){const c=l.resolvedInput||l.input;if(l.resolvedInput=await(l.transform?l.transform(c):c),l.resolvedInput)for(const u of await rx(l)){const h={tag:u,entry:l,resolvedOptions:o.resolvedOptions};await e.callHook("tag:normalise",h),a.tags.push(h.tag)}}return await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),a.tags},ssr:n};return t.plugins.forEach(a=>o.use(a)),o.hooks.callHook("init",o),o}function vx(){return HI}const Ex=OE.startsWith("3");function Tx(t){return typeof t=="function"?t():Ce(t)}function ic(t,e=""){if(t instanceof Promise)return t;const n=Tx(t);return!t||!n?n:Array.isArray(n)?n.map(r=>ic(r,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,Ce(s)]:[r,ic(s,r)])):n}const wx={hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=ic(e.input)}}},jI="usehead";function Ix(t){return{install(n){Ex&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(jI,t))}}.install}function Ax(t={}){t.domDelayFn=t.domDelayFn||(n=>Lr(()=>n()));const e=_x(t);return e.use(wx),e.install=Ix(e),e}function Rx(){return Vr()&&Be(jI)||vx()}function Cx(t,e={}){const n=Rx();if(n)return n.ssr?n.push(t,e):bx(n,t,e)}function bx(t,e,n={}){const r=et(!1),s=et({});ua(()=>{s.value=r.value?{}:ic(e)});const i=t.push(s.value,n);return gn(s,a=>{i.patch(a)}),Vr()&&(Oc(()=>{i.dispose()}),lE(()=>{r.value=!0}),aE(()=>{r.value=!1})),i}function lh(t){return t!==null&&typeof t=="object"}function wf(t,e,n=".",r){if(!lh(e))return wf(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:lh(o)&&lh(s[i])?s[i]=wf(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function WI(t){return(...e)=>e.reduce((n,r)=>wf(n,r,"",t),{})}const Sx=WI(),Px=WI((t,e,n)=>{if(typeof t[e]<"u"&&typeof n=="function")return t[e]=n(t[e]),!0});function kx(t,e){try{return e in t}catch{return!1}}var Nx=Object.defineProperty,Ox=(t,e,n)=>e in t?Nx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Kr=(t,e,n)=>(Ox(t,typeof e!="symbol"?e+"":e,n),n);class If extends Error{constructor(e,n={}){super(e,n),Kr(this,"statusCode",500),Kr(this,"fatal",!1),Kr(this,"unhandled",!1),Kr(this,"statusMessage"),Kr(this,"data"),Kr(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Rf(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=qI(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}Kr(If,"__h3_error__",!0);function Af(t){if(typeof t=="string")return new If(t);if(Dx(t))return t;const e=new If(t.message??t.statusMessage??"",{cause:t.cause||t});if(kx(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Rf(t.statusCode,e.statusCode):t.status&&(e.statusCode=Rf(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;qI(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function Dx(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const xx=/[^\u0009\u0020-\u007E]/g;function qI(t=""){return t.replace(xx,"")}function Rf(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const Mx="$s";function KI(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,r]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const s=Mx+n,i=He(),o=Gv(i.payload.state,s);if(o.value===void 0&&r){const a=r();if(Ze(a))return i.payload.state[s]=a,a;o.value=a}return o}const zI=Symbol("layout-meta"),Sa=Symbol("route"),Rs=()=>{var t;return(t=He())==null?void 0:t.$router},GI=()=>mE()?Be(Sa,He()._route):He()._route;/*! @__NO_SIDE_EFFECTS__ */const Lx=()=>{try{if(He()._processingMiddleware)return!0}catch{return!0}return!1},ij=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:zE(t.path||"/",t.query||{})+(t.hash||"");if(e!=null&&e.open){{const{target:a="_blank",windowFeatures:l={}}=e.open,c=Object.entries(l).filter(([u,h])=>h!==void 0).map(([u,h])=>`${u.toLowerCase()}=${h}`).join(", ");open(n,a,c)}return Promise.resolve()}const r=(e==null?void 0:e.external)||Si(n,{acceptRelative:!0});if(r){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const a=Vc(n).protocol;if(a&&CS(a))throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)}const s=Lx();if(!r&&s)return t;const i=Rs(),o=He();return r?(e!=null&&e.replace?location.replace(n):location.href=n,s?o.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?i.replace(t):i.push(t)},Tu=()=>Gv(He().payload,"error"),$s=t=>{const e=Op(t);try{const n=He(),r=Tu();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},Vx=async(t={})=>{const e=He(),n=Tu();e.callHook("app:error:cleared",t),t.redirect&&await Rs().replace(t.redirect),n.value=null},Fx=t=>!!(t&&typeof t=="object"&&"__nuxt_error"in t),Op=t=>{const e=Af(t);return e.__nuxt_error=!0,e},Ux="modulepreload",$x=function(t,e){return t[0]==="."?new URL(t,e).href:t},T_={},Bx=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=$x(i,r),i in T_)return;T_[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Ux,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},ut=(...t)=>Bx(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),Hx=-1,jx=-2,Wx=-3,qx=-4,Kx=-5,zx=-6;function Gx(t,e){return Qx(JSON.parse(t),e)}function Qx(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===Hx)return;if(i===Wx)return NaN;if(i===qx)return 1/0;if(i===Kx)return-1/0;if(i===zx)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],c=e==null?void 0:e[l];if(c)return r[i]=c(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const u=new Set;r[i]=u;for(let d=1;d<a.length;d+=1)u.add(s(a[d]));break;case"Map":const h=new Map;r[i]=h;for(let d=1;d<a.length;d+=2)h.set(s(a[d]),s(a[d+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const f=Object.create(null);r[i]=f;for(let d=1;d<a.length;d+=2)f[a[d]]=s(a[d+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let c=0;c<a.length;c+=1){const u=a[c];u!==jx&&(l[c]=s(u))}}else{const l={};r[i]=l;for(const c in a){const u=a[c];l[c]=s(u)}}return r[i]}return s(0)}const Yx=!1,Cf=!1,Xx=!1,Jx=!0,Zx="#__nuxt";function w_(t,e={}){const n=eM(t,e),r=He(),s=r._payloadCache=r._payloadCache||{};return s[n]||(s[n]=QI(n).then(i=>i||(delete s[n],null))),s[n]}const I_="json";function eM(t,e={}){const n=new URL(t,"http://localhost");if(n.search)throw new Error("Payload URL cannot contain search params: "+t);if(n.host!=="localhost"||Si(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=e.hash||(e.fresh?Date.now():"");return fa(Fc().app.baseURL,n.pathname,r?`_payload.${r}.${I_}`:`_payload.${I_}`)}async function QI(t){try{return Jx?YI(await fetch(t).then(e=>e.text())):await ut(()=>import(t),[],import.meta.url).then(e=>e.default||e)}catch(e){console.warn("[nuxt] Cannot load payload ",t,e)}return null}function tM(){return!!He().payload.prerenderedAt}let rl=null;async function nM(){if(rl)return rl;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=YI(t.textContent||""),n=t.dataset.src?await QI(t.dataset.src):void 0;return rl={...e,...n,...window.__NUXT__},rl}function YI(t){return Gx(t,He()._payloadRevivers)}function bf(t,e){He()._payloadRevivers[t]=e}function rM(t={}){const e=t.path||window.location.pathname;let n={};try{n=JSON.parse(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:He().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const sM={firebaseConfig:{apiKey:"AIzaSyCihtmlyKeFa6MGXMrJ3DPUAm7s8k-TJyo",authDomain:"autocompromiso-32ca7.firebaseapp.com",databaseURL:"https://autocompromiso-32ca7-default-rtdb.firebaseio.com",projectId:"autocompromiso-32ca7",storageBucket:"autocompromiso-32ca7.appspot.com",messagingSenderId:"171009053819",appId:"1:171009053819:web:8fd75b1bdbde7a08eabede",measurementId:"G-E5P4RN1V8K"},vuefireOptions:{optionsApiPlugin:!1,emulators:{enabled:!0},auth:!0,config:{apiKey:"AIzaSyCihtmlyKeFa6MGXMrJ3DPUAm7s8k-TJyo",authDomain:"autocompromiso-32ca7.firebaseapp.com",databaseURL:"https://autocompromiso-32ca7-default-rtdb.firebaseio.com",projectId:"autocompromiso-32ca7",storageBucket:"autocompromiso-32ca7.appspot.com",messagingSenderId:"171009053819",appId:"1:171009053819:web:8fd75b1bdbde7a08eabede",measurementId:"G-E5P4RN1V8K"}}},iM=Px(sM);function oM(){const t=He();return t._appConfig||(t._appConfig=rn(iM)),t._appConfig}const aM=pP(()=>{bf("JSONifiable",t=>{const e=JSON.parse(t);return"seconds"in e&&"nanoseconds"in e?Pl(new Xe(e.seconds,e.nanoseconds)):"latitude"in e&&"longitude"in e?Pl(new yu(e.latitude,e.longitude)):e}),bf("DocumentData",t=>{const e=typeof t=="string"?JSON.parse(t):t,n=e.id;return delete e.id,Object.defineProperty(e,"id",{value:n})})}),A_={NuxtError:t=>Op(t),EmptyShallowRef:t=>pn(t==="_"?void 0:t==="0n"?BigInt(0):JSON.parse(t)),EmptyRef:t=>et(t==="_"?void 0:t==="0n"?BigInt(0):JSON.parse(t)),ShallowRef:t=>pn(t),ShallowReactive:t=>ca(t),Ref:t=>et(t),Reactive:t=>rn(t)},lM=Mt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const r in A_)bf(r,A_[r]);Object.assign(t.payload,([e,n]=Vl(()=>t.runWithContext(nM)),e=await e,n(),e)),window.__NUXT__=t.payload}});/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Fs=typeof window<"u";function cM(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Re=Object.assign;function ch(t,e){const n={};for(const r in e){const s=e[r];n[r]=En(s)?s.map(t):t(s)}return n}const Io=()=>{},En=Array.isArray,uM=/\/$/,hM=t=>t.replace(uM,"");function uh(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=gM(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function fM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function R_(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function dM(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&yi(e.matched[r],n.matched[s])&&XI(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function yi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function XI(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!pM(t[n],e[n]))return!1;return!0}function pM(t,e){return En(t)?C_(t,e):En(e)?C_(e,t):t===e}function C_(t,e){return En(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function gM(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ea;(function(t){t.pop="pop",t.push="push"})(ea||(ea={}));var Ao;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ao||(Ao={}));function mM(t){if(!t)if(Fs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hM(t)}const _M=/^[^#]+#/;function yM(t,e){return t.replace(_M,"#")+e}function vM(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const wu=()=>({left:window.pageXOffset,top:window.pageYOffset});function EM(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=vM(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function b_(t,e){return(history.state?history.state.position-e:-1)+t}const Sf=new Map;function TM(t,e){Sf.set(t,e)}function wM(t){const e=Sf.get(t);return Sf.delete(t),e}let IM=()=>location.protocol+"//"+location.host;function JI(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),R_(l,"")}return R_(n,t)+r+s}function AM(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const d=JI(t,location),p=n.value,y=e.value;let T=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}T=y?f.position-y.position:0}else r(d);s.forEach(v=>{v(n.value,p,{delta:T,type:ea.pop,direction:T?T>0?Ao.forward:Ao.back:Ao.unknown})})};function l(){o=n.value}function c(f){s.push(f);const d=()=>{const p=s.indexOf(f);p>-1&&s.splice(p,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Re({},f.state,{scroll:wu()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function S_(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?wu():null}}function RM(t){const{history:e,location:n}=window,r={value:JI(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:IM()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=Re({},e.state,S_(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=Re({},s.value,e.state,{forward:l,scroll:wu()});i(u.current,u,!0);const h=Re({},S_(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function ZI(t){t=mM(t);const e=RM(t),n=AM(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:yM.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function CM(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),ZI(t)}function bM(t){return typeof t=="string"||t&&typeof t=="object"}function e0(t){return typeof t=="string"||typeof t=="symbol"}const An={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},t0=Symbol("");var P_;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(P_||(P_={}));function vi(t,e){return Re(new Error,{type:t,[t0]:!0},e)}function Bn(t,e){return t instanceof Error&&t0 in t&&(e==null||!!(t.type&e))}const k_="[^/]+?",SM={sensitive:!1,strict:!1,start:!0,end:!0},PM=/[.+*?^${}()[\]/\\]/g;function kM(t,e){const n=Re({},SM,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(PM,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:y,optional:T,regexp:v}=f;i.push({name:p,repeatable:y,optional:T});const m=v||k_;if(m!==k_){d+=10;try{new RegExp(`(${m})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${p}" (${m}): `+E.message)}}let I=y?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;h||(I=T&&c.length<2?`(?:/${I})`:"/"+I),T&&(I+="?"),s+=I,d+=20,T&&(d+=-8),y&&(d+=-20),m===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=i[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:y,optional:T}=d,v=p in c?c[p]:"";if(En(v)&&!y)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const m=En(v)?v.join("/"):v;if(!m)if(T)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=m}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function NM(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function OM(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=NM(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(N_(r))return 1;if(N_(s))return-1}return s.length-r.length}function N_(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const DM={type:0,value:""},xM=/[a-zA-Z0-9_]/;function MM(t){if(!t)return[[]];if(t==="/")return[[DM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:xM.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function LM(t,e,n){const r=kM(MM(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function VM(t,e){const n=[],r=new Map;e=x_({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const d=!f,p=FM(u);p.aliasOf=f&&f.record;const y=x_(e,u),T=[p];if("alias"in u){const I=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of I)T.push(Re({},p,{components:f?f.record.components:p.components,path:E,aliasOf:f?f.record:p}))}let v,m;for(const I of T){const{path:E}=I;if(h&&E[0]!=="/"){const b=h.record.path,D=b[b.length-1]==="/"?"":"/";I.path=h.record.path+(E&&D+E)}if(v=LM(I,h,y),f?f.alias.push(v):(m=m||v,m!==v&&m.alias.push(v),d&&u.name&&!D_(v)&&o(u.name)),p.children){const b=p.children;for(let D=0;D<b.length;D++)i(b[D],v,f&&f.children[D])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return m?()=>{o(m)}:Io}function o(u){if(e0(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&OM(u,n[h])>=0&&(u.record.path!==n[h].record.path||!n0(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!D_(u)&&r.set(u.record.name,u)}function c(u,h){let f,d={},p,y;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw vi(1,{location:u});y=f.record.name,d=Re(O_(h.params,f.keys.filter(m=>!m.optional).map(m=>m.name)),u.params&&O_(u.params,f.keys.map(m=>m.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(m=>m.re.test(p)),f&&(d=f.parse(p),y=f.record.name);else{if(f=h.name?r.get(h.name):n.find(m=>m.re.test(h.path)),!f)throw vi(1,{location:u,currentLocation:h});y=f.record.name,d=Re({},h.params,u.params),p=f.stringify(d)}const T=[];let v=f;for(;v;)T.unshift(v.record),v=v.parent;return{name:y,path:p,params:d,matched:T,meta:$M(T)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function O_(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function FM(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:UM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function UM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function D_(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $M(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function x_(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function n0(t,e){return e.children.some(n=>n===t||n0(t,n))}const r0=/#/g,BM=/&/g,HM=/\//g,jM=/=/g,WM=/\?/g,s0=/\+/g,qM=/%5B/g,KM=/%5D/g,i0=/%5E/g,zM=/%60/g,o0=/%7B/g,GM=/%7C/g,a0=/%7D/g,QM=/%20/g;function Dp(t){return encodeURI(""+t).replace(GM,"|").replace(qM,"[").replace(KM,"]")}function YM(t){return Dp(t).replace(o0,"{").replace(a0,"}").replace(i0,"^")}function Pf(t){return Dp(t).replace(s0,"%2B").replace(QM,"+").replace(r0,"%23").replace(BM,"%26").replace(zM,"`").replace(o0,"{").replace(a0,"}").replace(i0,"^")}function XM(t){return Pf(t).replace(jM,"%3D")}function JM(t){return Dp(t).replace(r0,"%23").replace(WM,"%3F")}function ZM(t){return t==null?"":JM(t).replace(HM,"%2F")}function oc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function eL(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(s0," "),o=i.indexOf("="),a=oc(o<0?i:i.slice(0,o)),l=o<0?null:oc(i.slice(o+1));if(a in e){let c=e[a];En(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function M_(t){let e="";for(let n in t){const r=t[n];if(n=XM(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(En(r)?r.map(i=>i&&Pf(i)):[r&&Pf(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function tL(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=En(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const nL=Symbol(""),L_=Symbol(""),Iu=Symbol(""),xp=Symbol(""),kf=Symbol("");function Qi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function yr(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(vi(4,{from:n,to:e})):h instanceof Error?a(h):bM(h)?a(vi(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function hh(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(rL(a)){const c=(a.__vccOpts||a)[e];c&&s.push(yr(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=cM(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&yr(f,n,r,i,o)()}))}}return s}function rL(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function V_(t){const e=Be(Iu),n=Be(xp),r=be(()=>e.resolve(Ce(t.to))),s=be(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(yi.bind(null,u));if(f>-1)return f;const d=F_(l[c-2]);return c>1&&F_(u)===d&&h[h.length-1].path!==d?h.findIndex(yi.bind(null,l[c-2])):f}),i=be(()=>s.value>-1&&aL(n.params,r.value.params)),o=be(()=>s.value>-1&&s.value===n.matched.length-1&&XI(n.params,r.value.params));function a(l={}){return oL(l)?e[Ce(t.replace)?"replace":"push"](Ce(t.to)).catch(Io):Promise.resolve()}return{route:r,href:be(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const sL=lr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:V_,setup(t,{slots:e}){const n=rn(V_(t)),{options:r}=Be(Iu),s=be(()=>({[U_(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[U_(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:$t("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),iL=sL;function oL(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function aL(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!En(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function F_(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const U_=(t,e,n)=>t??e??n,lL=lr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Be(kf),s=be(()=>t.route||r.value),i=Be(L_,0),o=be(()=>{let c=Ce(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=be(()=>s.value.matched[o.value]);On(L_,be(()=>o.value+1)),On(nL,a),On(kf,s);const l=et();return gn(()=>[l.value,a.value,t.name],([c,u,h],[f,d,p])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!yi(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return $_(n.default,{Component:f,route:c});const d=h.props[u],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,T=$t(f,Re({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return $_(n.default,{Component:T,route:c})||T}}});function $_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const l0=lL;function cL(t){const e=VM(t.routes,t),n=t.parseQuery||eL,r=t.stringifyQuery||M_,s=t.history,i=Qi(),o=Qi(),a=Qi(),l=pn(An);let c=An;Fs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ch.bind(null,C=>""+C),h=ch.bind(null,ZM),f=ch.bind(null,oc);function d(C,j){let V,Q;return e0(C)?(V=e.getRecordMatcher(C),Q=j):Q=C,e.addRoute(Q,V)}function p(C){const j=e.getRecordMatcher(C);j&&e.removeRoute(j)}function y(){return e.getRoutes().map(C=>C.record)}function T(C){return!!e.getRecordMatcher(C)}function v(C,j){if(j=Re({},j||l.value),typeof C=="string"){const w=uh(n,C,j.path),A=e.resolve({path:w.path},j),S=s.createHref(w.fullPath);return Re(w,A,{params:f(A.params),hash:oc(w.hash),redirectedFrom:void 0,href:S})}let V;if("path"in C)V=Re({},C,{path:uh(n,C.path,j.path).path});else{const w=Re({},C.params);for(const A in w)w[A]==null&&delete w[A];V=Re({},C,{params:h(w)}),j.params=h(j.params)}const Q=e.resolve(V,j),Ie=C.hash||"";Q.params=u(f(Q.params));const g=fM(r,Re({},C,{hash:YM(Ie),path:Q.path})),_=s.createHref(g);return Re({fullPath:g,hash:Ie,query:r===M_?tL(C.query):C.query||{}},Q,{redirectedFrom:void 0,href:_})}function m(C){return typeof C=="string"?uh(n,C,l.value.path):Re({},C)}function I(C,j){if(c!==C)return vi(8,{from:j,to:C})}function E(C){return M(C)}function b(C){return E(Re(m(C),{replace:!0}))}function D(C){const j=C.matched[C.matched.length-1];if(j&&j.redirect){const{redirect:V}=j;let Q=typeof V=="function"?V(C):V;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=m(Q):{path:Q},Q.params={}),Re({query:C.query,hash:C.hash,params:"path"in Q?{}:C.params},Q)}}function M(C,j){const V=c=v(C),Q=l.value,Ie=C.state,g=C.force,_=C.replace===!0,w=D(V);if(w)return M(Re(m(w),{state:typeof w=="object"?Re({},Ie,w.state):Ie,force:g,replace:_}),j||V);const A=V;A.redirectedFrom=j;let S;return!g&&dM(r,Q,V)&&(S=vi(16,{to:A,from:Q}),wn(Q,Q,!0,!1)),(S?Promise.resolve(S):W(A,Q)).catch(k=>Bn(k)?Bn(k,2)?k:hr(k):we(k,A,Q)).then(k=>{if(k){if(Bn(k,2))return M(Re({replace:_},m(k.to),{state:typeof k.to=="object"?Re({},Ie,k.to.state):Ie,force:g}),j||A)}else k=H(A,Q,!0,_,Ie);return te(A,Q,k),k})}function P(C,j){const V=I(C,j);return V?Promise.reject(V):Promise.resolve()}function K(C){const j=Ps.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(C):C()}function W(C,j){let V;const[Q,Ie,g]=uL(C,j);V=hh(Q.reverse(),"beforeRouteLeave",C,j);for(const w of Q)w.leaveGuards.forEach(A=>{V.push(yr(A,C,j))});const _=P.bind(null,C,j);return V.push(_),gt(V).then(()=>{V=[];for(const w of i.list())V.push(yr(w,C,j));return V.push(_),gt(V)}).then(()=>{V=hh(Ie,"beforeRouteUpdate",C,j);for(const w of Ie)w.updateGuards.forEach(A=>{V.push(yr(A,C,j))});return V.push(_),gt(V)}).then(()=>{V=[];for(const w of g)if(w.beforeEnter)if(En(w.beforeEnter))for(const A of w.beforeEnter)V.push(yr(A,C,j));else V.push(yr(w.beforeEnter,C,j));return V.push(_),gt(V)}).then(()=>(C.matched.forEach(w=>w.enterCallbacks={}),V=hh(g,"beforeRouteEnter",C,j),V.push(_),gt(V))).then(()=>{V=[];for(const w of o.list())V.push(yr(w,C,j));return V.push(_),gt(V)}).catch(w=>Bn(w,8)?w:Promise.reject(w))}function te(C,j,V){a.list().forEach(Q=>K(()=>Q(C,j,V)))}function H(C,j,V,Q,Ie){const g=I(C,j);if(g)return g;const _=j===An,w=Fs?history.state:{};V&&(Q||_?s.replace(C.fullPath,Re({scroll:_&&w&&w.scroll},Ie)):s.push(C.fullPath,Ie)),l.value=C,wn(C,j,V,_),hr()}let ee;function q(){ee||(ee=s.listen((C,j,V)=>{if(!Ua.listening)return;const Q=v(C),Ie=D(Q);if(Ie){M(Re(Ie,{replace:!0}),Q).catch(Io);return}c=Q;const g=l.value;Fs&&TM(b_(g.fullPath,V.delta),wu()),W(Q,g).catch(_=>Bn(_,12)?_:Bn(_,2)?(M(_.to,Q).then(w=>{Bn(w,20)&&!V.delta&&V.type===ea.pop&&s.go(-1,!1)}).catch(Io),Promise.reject()):(V.delta&&s.go(-V.delta,!1),we(_,Q,g))).then(_=>{_=_||H(Q,g,!1),_&&(V.delta&&!Bn(_,8)?s.go(-V.delta,!1):V.type===ea.pop&&Bn(_,20)&&s.go(-1,!1)),te(Q,g,_)}).catch(Io)}))}let qe=Qi(),de=Qi(),Ee;function we(C,j,V){hr(C);const Q=de.list();return Q.length?Q.forEach(Ie=>Ie(C,j,V)):console.error(C),Promise.reject(C)}function $n(){return Ee&&l.value!==An?Promise.resolve():new Promise((C,j)=>{qe.add([C,j])})}function hr(C){return Ee||(Ee=!C,q(),qe.list().forEach(([j,V])=>C?V(C):j()),qe.reset()),C}function wn(C,j,V,Q){const{scrollBehavior:Ie}=t;if(!Fs||!Ie)return Promise.resolve();const g=!V&&wM(b_(C.fullPath,0))||(Q||!V)&&history.state&&history.state.scroll||null;return Lr().then(()=>Ie(C,j,g)).then(_=>_&&EM(_)).catch(_=>we(_,C,j))}const Lt=C=>s.go(C);let Ss;const Ps=new Set,Ua={currentRoute:l,listening:!0,addRoute:d,removeRoute:p,hasRoute:T,getRoutes:y,resolve:v,options:t,push:E,replace:b,go:Lt,back:()=>Lt(-1),forward:()=>Lt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:de.add,isReady:$n,install(C){const j=this;C.component("RouterLink",iL),C.component("RouterView",l0),C.config.globalProperties.$router=j,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>Ce(l)}),Fs&&!Ss&&l.value===An&&(Ss=!0,E(s.location).catch(Ie=>{}));const V={};for(const Ie in An)Object.defineProperty(V,Ie,{get:()=>l.value[Ie],enumerable:!0});C.provide(Iu,j),C.provide(xp,ca(V)),C.provide(kf,l);const Q=C.unmount;Ps.add(C),C.unmount=function(){Ps.delete(C),Ps.size<1&&(c=An,ee&&ee(),ee=null,l.value=An,Ss=!1,Ee=!1),Q()}}};function gt(C){return C.reduce((j,V)=>j.then(()=>K(V)),Promise.resolve())}return Ua}function uL(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>yi(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>yi(c,l))||s.push(l))}return[n,r,s]}function oj(){return Be(Iu)}function hL(){return Be(xp)}const B_=[{name:"noticiasId",path:"/:noticiasId()",meta:{},alias:[],redirect:void 0,component:()=>ut(()=>import("./index.6399b119.js"),["./index.6399b119.js","./Noticia.3c1c3c8b.js","./VRow.7b740508.js","./VRow.093bfb58.css","./Noticia.26326a87.css","./components.8a9e17bd.js","./VBtn.e12dd6bf.js","./VBtn.9b1e85b6.css","./index.536adc74.css"],import.meta.url).then(t=>t.default||t)},{name:"ayuda",path:"/ayuda",meta:{},alias:[],redirect:void 0,component:()=>ut(()=>import("./ayuda.bee55a0d.js"),["./ayuda.bee55a0d.js","./Noticia.3c1c3c8b.js","./VRow.7b740508.js","./VRow.093bfb58.css","./Noticia.26326a87.css","./ayuda.81ef5316.css"],import.meta.url).then(t=>t.default||t)},{name:"deportes",path:"/deportes",meta:{},alias:[],redirect:void 0,component:()=>ut(()=>import("./deportes.dd2cd9cb.js"),["./deportes.dd2cd9cb.js","./Noticia.3c1c3c8b.js","./VRow.7b740508.js","./VRow.093bfb58.css","./Noticia.26326a87.css","./deportes.8e7d793b.css"],import.meta.url).then(t=>t.default||t)},{name:"dolar",path:"/dolar",meta:{},alias:[],redirect:void 0,component:()=>ut(()=>import("./dolar.550b4dcc.js"),["./dolar.550b4dcc.js","./components.8a9e17bd.js","./Noticia.3c1c3c8b.js","./VRow.7b740508.js","./VRow.093bfb58.css","./Noticia.26326a87.css","./dolar.81a02243.css"],import.meta.url).then(t=>t.default||t)},{name:"economia",path:"/economia",meta:{},alias:[],redirect:void 0,component:()=>ut(()=>import("./economia.3d3b0c8d.js"),["./economia.3d3b0c8d.js","./Noticia.3c1c3c8b.js","./VRow.7b740508.js","./VRow.093bfb58.css","./Noticia.26326a87.css","./economia.5ecbf286.css"],import.meta.url).then(t=>t.default||t)},{name:"index",path:"/",meta:{},alias:[],redirect:void 0,component:()=>ut(()=>import("./index.77e08c55.js"),["./index.77e08c55.js","./components.8a9e17bd.js","./Noticia.3c1c3c8b.js","./VRow.7b740508.js","./VRow.093bfb58.css","./Noticia.26326a87.css","./index.8ebe3b02.css"],import.meta.url).then(t=>t.default||t)},{name:"loteria",path:"/loteria",meta:{},alias:[],redirect:void 0,component:()=>ut(()=>import("./loteria.6dc8d864.js"),["./loteria.6dc8d864.js","./components.8a9e17bd.js","./Noticia.3c1c3c8b.js","./VRow.7b740508.js","./VRow.093bfb58.css","./Noticia.26326a87.css","./loteria.98ab6226.css"],import.meta.url).then(t=>t.default||t)},{name:"policiales",path:"/policiales",meta:{},alias:[],redirect:void 0,component:()=>ut(()=>import("./policiales.c5930475.js"),["./policiales.c5930475.js","./Noticia.3c1c3c8b.js","./VRow.7b740508.js","./VRow.093bfb58.css","./Noticia.26326a87.css","./policiales.39eeb07b.css"],import.meta.url).then(t=>t.default||t)},{name:"politica",path:"/politica",meta:{},alias:[],redirect:void 0,component:()=>ut(()=>import("./politica.a81aa3a1.js"),["./politica.a81aa3a1.js","./Noticia.3c1c3c8b.js","./VRow.7b740508.js","./VRow.093bfb58.css","./Noticia.26326a87.css","./politica.c021289d.css"],import.meta.url).then(t=>t.default||t)},{name:"politicaDePrivacidad",path:"/politicaDePrivacidad",meta:{},alias:[],redirect:void 0,component:()=>ut(()=>import("./politicaDePrivacidad.d03b9b34.js"),["./politicaDePrivacidad.d03b9b34.js","./politicaDePrivacidad.d5831cab.css"],import.meta.url).then(t=>t.default||t)},{name:"sociedad",path:"/sociedad",meta:{},alias:[],redirect:void 0,component:()=>ut(()=>import("./sociedad.80460daf.js"),["./sociedad.80460daf.js","./Noticia.3c1c3c8b.js","./VRow.7b740508.js","./VRow.093bfb58.css","./Noticia.26326a87.css","./sociedad.702f5a53.css"],import.meta.url).then(t=>t.default||t)},{name:"tendencias",path:"/tendencias",meta:{},alias:[],redirect:void 0,component:()=>ut(()=>import("./tendencias.5a98a03a.js"),["./tendencias.5a98a03a.js","./Noticia.3c1c3c8b.js","./VRow.7b740508.js","./VRow.093bfb58.css","./Noticia.26326a87.css","./tendencias.d47361d7.css"],import.meta.url).then(t=>t.default||t)},{name:"test",path:"/test",meta:{},alias:[],redirect:void 0,component:()=>ut(()=>import("./test.93144492.js"),[],import.meta.url).then(t=>t.default||t)}],fL={scrollBehavior(t,e,n){var c;const r=He(),s=((c=Rs().options)==null?void 0:c.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&dL(e,t)&&(i={left:0,top:0}),t.path===e.path){if(e.hash&&!t.hash)return{left:0,top:0};if(t.hash)return{el:t.hash,top:H_(t.hash),behavior:s}}const a=u=>!!(u.meta.pageTransition??Cf),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(u=>{r.hooks.hookOnce(l,async()=>{await Lr(),t.hash&&(i={el:t.hash,top:H_(t.hash),behavior:s}),u(i)})})}};function H_(t){try{const e=document.querySelector(t);if(e)return parseFloat(getComputedStyle(e).scrollMarginTop)}catch{}return 0}function dL(t,e){const n=e.matched.every((r,s)=>{var i,o,a;return((i=r.components)==null?void 0:i.default)===((a=(o=t.matched[s])==null?void 0:o.components)==null?void 0:a.default)});return!!(!n||n&&JSON.stringify(t.params)!==JSON.stringify(e.params))}const pL={},Vt={...pL,...fL},gL=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=He(),s=Rs();if(([e,n]=Vl(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=Op({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`}),a=s.beforeResolve(c=>{if(a(),c===t){const u=s.afterEach(async()=>{u(),await r.runWithContext(()=>$s(o)),window.history.pushState({},"",t.fullPath)});return!1}})},mL=[gL],Ro={};function _L(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const c=i.includes(t.slice(o))?t.slice(o).length:1;let u=i.slice(c);return u[0]!=="/"&&(u="/"+u),rm(u,"")}const a=rm(r,t),l=!n||xS(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":s)+i}const yL=Mt({name:"nuxt:router",enforce:"pre",async setup(t){var y,T;let e,n,r=Fc().app.baseURL;Vt.hashMode&&!r.includes("#")&&(r+="#");const s=((y=Vt.history)==null?void 0:y.call(Vt,r))??(Vt.hashMode?CM(r):ZI(r)),i=((T=Vt.routes)==null?void 0:T.call(Vt,B_))??B_;let o;const a=_L(r,window.location,t.payload.path),l=cL({...Vt,scrollBehavior:(v,m,I)=>{var E;if(m===An){o=I;return}return l.options.scrollBehavior=Vt.scrollBehavior,(E=Vt.scrollBehavior)==null?void 0:E.call(Vt,v,An,o||I)},history:s,routes:i});t.vueApp.use(l);const c=pn(l.currentRoute.value);l.afterEach((v,m)=>{c.value=m}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=pn(l.resolve(a)),h=()=>{u.value=l.currentRoute.value};t.hook("page:finish",h),l.afterEach((v,m)=>{var I,E,b,D;((E=(I=v.matched[0])==null?void 0:I.components)==null?void 0:E.default)===((D=(b=m.matched[0])==null?void 0:b.components)==null?void 0:D.default)&&h()});const f={};for(const v in u.value)Object.defineProperty(f,v,{get:()=>u.value[v]});t._route=ca(f),t._middleware=t._middleware||{global:[],named:{}};const d=Tu();try{[e,n]=Vl(()=>l.isReady()),await e,n()}catch(v){[e,n]=Vl(()=>t.runWithContext(()=>$s(v))),await e,n()}const p=KI("_layout");return l.beforeEach(async(v,m)=>{var I;v.meta=rn(v.meta),t.isHydrating&&p.value&&!us(v.meta.layout)&&(v.meta.layout=p.value),t._processingMiddleware=!0;{const E=new Set([...mL,...t._middleware.global]);for(const b of v.matched){const D=b.meta.middleware;if(D)if(Array.isArray(D))for(const M of D)E.add(M);else E.add(D)}for(const b of E){const D=typeof b=="string"?t._middleware.named[b]||await((I=Ro[b])==null?void 0:I.call(Ro).then(P=>P.default||P)):b;if(!D)throw new Error(`Unknown route middleware: '${b}'.`);const M=await t.runWithContext(()=>D(v,m));if(!t.payload.serverRendered&&t.isHydrating&&(M===!1||M instanceof Error)){const P=M||Af({statusCode:404,statusMessage:`Page Not Found: ${a}`});return await t.runWithContext(()=>$s(P)),!1}if(M||M===!1)return M}}}),l.onError(()=>{delete t._processingMiddleware}),l.afterEach(async(v,m,I)=>{delete t._processingMiddleware,!t.isHydrating&&d.value&&await t.runWithContext(Vx),v.matched.length===0&&await t.runWithContext(()=>$s(Af({statusCode:404,fatal:!1,statusMessage:`Page not found: ${v.fullPath}`})))}),t.hooks.hookOnce("app:created",async()=>{try{await l.replace({...l.resolve(a),name:void 0,force:!0}),l.options.scrollBehavior=Vt.scrollBehavior}catch(v){await t.runWithContext(()=>$s(v))}}),{provide:{router:l}}}});function vL(){const t=[];function e(r){var s;if(!(!r||typeof r!="object"||Object.keys(r).length===0)){if(!r._context){let i=(s=new Error("tmp").stack)==null?void 0:s.split(`
`)[2].split(" ")[5];i!=null&&i.includes("/")&&(i="anonymous"),r._context=i}t.push(r)}}function n(){var s;const r={_context:{}};for(const i in t)for(const o in t[i]){const a=o,l=t[i][o];!o.endsWith("context")&&typeof l<"u"&&(r[o]=l,r._context[a]=((s=t[i]._context)==null?void 0:s[a])||t[i]._context||"anonymous")}return EL(r)}return{stack:t,push:e,get:n}}function EL(t){return typeof t.indexable<"u"&&(t.indexable=String(t.indexable)!=="false"),typeof t.trailingSlash<"u"&&(t.trailingSlash=String(t.trailingSlash)!=="false"),t.url&&!Si(t.url,{acceptRelative:!0,strict:!1})&&(t.url=OS(t.url)),t}const TL=Mt({name:"nuxt-site-config",enforce:"pre",async setup(t){let e;e||(e=vL());{e.push({_context:"window",url:window.location.origin});const n=KI("site-config");n.value&&e.push(n.value)}return{provide:{siteConfig:e}}}}),wL=Mt({name:"nuxt:payload",setup(t){tM()&&(t.hooks.hook("link:prefetch",async e=>{Vc(e).protocol||await w_(e)}),Rs().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await w_(e.path);r&&Object.assign(t.static.data,r.data)}))}}),IL=Mt({name:"nuxt:global-components"}),AL=[],RL=Mt({name:"nuxt:head",setup(t){const e=Ax({plugins:AL});t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await BI(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",r),t.hooks.hook("app:suspense:resolve",r)}}}),es={default:()=>ut(()=>import("./default.0bc73f67.js"),["./default.0bc73f67.js","./VBtn.e12dd6bf.js","./VRow.7b740508.js","./VRow.093bfb58.css","./VBtn.9b1e85b6.css","./default.8537fe83.css"],import.meta.url).then(t=>t.default||t)},CL=Mt({name:"nuxt:prefetch",setup(t){const e=Rs();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof es[r]=="function"&&await es[r]()})}),t.hooks.hook("link:prefetch",n=>{var o,a,l,c;if(Si(n))return;const r=e.resolve(n);if(!r)return;const s=(o=r==null?void 0:r.meta)==null?void 0:o.layout;let i=Array.isArray((a=r==null?void 0:r.meta)==null?void 0:a.middleware)?(l=r==null?void 0:r.meta)==null?void 0:l.middleware:[(c=r==null?void 0:r.meta)==null?void 0:c.middleware];i=i.filter(u=>typeof u=="string");for(const u of i)typeof Ro[u]=="function"&&Ro[u]();s&&typeof es[s]=="function"&&es[s]()})}});function j_(...t){var e;(e=window.dataLayer)==null||e.push(arguments)}const bL=Mt(()=>{const{gtag:{id:t,config:e,initialConsent:n,loadingStrategy:r}}=Fc().public;if(!t||(window.dataLayer=window.dataLayer||[],j_("js",new Date),j_("config",t,e),!n))return;const s=r==="async"?"async":"defer";Cx({script:[{src:`https://www.googletagmanager.com/gtag/js?id=${t}`,[s]:!0}]})});var SL="firebase",PL="10.3.0";/**
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
 */Kt(SL,PL,"app");const kL=Mt(()=>{const t=oM();return{provide:{firebaseApp:gT(t.firebaseConfig)}}});function Mp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function c0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NL=c0,u0=new ki("auth","Firebase",c0());/**
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
 */const ac=new da("@firebase/auth");function OL(t,...e){ac.logLevel<=ye.WARN&&ac.warn(`Auth (${Fr}): ${t}`,...e)}function Tl(t,...e){ac.logLevel<=ye.ERROR&&ac.error(`Auth (${Fr}): ${t}`,...e)}/**
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
 */function or(t,...e){throw Lp(t,...e)}function xn(t,...e){return Lp(t,...e)}function DL(t,e,n){const r=Object.assign(Object.assign({},NL()),{[e]:n});return new ki("auth","Firebase",r).create(e,{appName:t.name})}function Lp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return u0.create(t,...e)}function ae(t,e,...n){if(!t)throw Lp(e,...n)}function zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Tl(e),new Error(e)}function ar(t,e){t||zn(e)}/**
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
 */function Nf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xL(){return W_()==="http:"||W_()==="https:"}function W_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ML(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xL()||AP()||"connection"in navigator)?navigator.onLine:!0}function LL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Pa{constructor(e,n){this.shortDelay=e,this.longDelay=n,ar(n>e,"Short delay should be less than long delay!"),this.isMobile=Nd()||cT()}get(){return ML()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vp(t,e){ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class h0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const VL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const FL=new Pa(3e4,6e4);function f0(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ka(t,e,n,r,s={}){return d0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ni(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),h0.fetch()(p0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function d0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VL),e);try{const s=new $L(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw sl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw sl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw sl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw sl(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw DL(t,u,c);or(t,u)}}catch(s){if(s instanceof Un)throw s;or(t,"network-request-failed",{message:String(s)})}}async function UL(t,e,n,r,s={}){const i=await ka(t,e,n,r,s);return"mfaPendingCredential"in i&&or(t,"multi-factor-auth-required",{_serverResponse:i}),i}function p0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Vp(t.config,s):`${t.config.apiScheme}://${s}`}class $L{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xn(this.auth,"network-request-failed")),FL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=xn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function BL(t,e){return ka(t,"POST","/v1/accounts:delete",e)}async function HL(t,e){return ka(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Co(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jL(t,e=!1){const n=Pt(t),r=await n.getIdToken(e),s=Fp(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Co(fh(s.auth_time)),issuedAtTime:Co(fh(s.iat)),expirationTime:Co(fh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function fh(t){return Number(t)*1e3}function Fp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Tl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ul(n);return s?JSON.parse(s):(Tl("Failed to decode base64 JWT payload"),null)}catch(s){return Tl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function WL(t){const e=Fp(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ta(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Un&&qL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class KL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class g0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Co(this.lastLoginAt),this.creationTime=Co(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ta(t,HL(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?QL(i.providerUserInfo):[],a=GL(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new g0(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function zL(t){const e=Pt(t);await lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GL(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function QL(t){return t.map(e=>{var{providerId:n}=e,r=Mp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function YL(t,e){const n=await d0(t,{},async()=>{const r=Ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=p0(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",h0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class na{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):WL(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ae(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await YL(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new na;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new na,this.toJSON())}_performRefresh(){return zn("not implemented")}}/**
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
 */function gr(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class os{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Mp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new g0(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ta(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jL(this,e)}reload(){return zL(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new os(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ta(this,BL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,m=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:E,isAnonymous:b,providerData:D,stsTokenManager:M}=n;ae(I&&M,e,"internal-error");const P=na.fromJSON(this.name,M);ae(typeof I=="string",e,"internal-error"),gr(h,e.name),gr(f,e.name),ae(typeof E=="boolean",e,"internal-error"),ae(typeof b=="boolean",e,"internal-error"),gr(d,e.name),gr(p,e.name),gr(y,e.name),gr(T,e.name),gr(v,e.name),gr(m,e.name);const K=new os({uid:I,auth:e,email:f,emailVerified:E,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:y,stsTokenManager:P,createdAt:v,lastLoginAt:m});return D&&Array.isArray(D)&&(K.providerData=D.map(W=>Object.assign({},W))),T&&(K._redirectEventId=T),K}static async _fromIdTokenResponse(e,n,r=!1){const s=new na;s.updateFromServerResponse(n);const i=new os({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await lc(i),i}}/**
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
 */const q_=new Map;function Gn(t){ar(t instanceof Function,"Expected a class definition");let e=q_.get(t);return e?(ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,q_.set(t,e),e)}/**
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
 */class m0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}m0.type="NONE";const K_=m0;/**
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
 */function wl(t,e,n){return`firebase:${t}:${e}:${n}`}class Zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=wl(this.userKey,s.apiKey,i),this.fullPersistenceKey=wl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?os._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zs(Gn(K_),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Gn(K_);const o=wl(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=os._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Zs(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Zs(i,e,r))}}/**
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
 */function z_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(T0(e))return"Blackberry";if(w0(e))return"Webos";if(Up(e))return"Safari";if((e.includes("chrome/")||y0(e))&&!e.includes("edge/"))return"Chrome";if(E0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _0(t=St()){return/firefox\//i.test(t)}function Up(t=St()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function y0(t=St()){return/crios\//i.test(t)}function v0(t=St()){return/iemobile/i.test(t)}function E0(t=St()){return/android/i.test(t)}function T0(t=St()){return/blackberry/i.test(t)}function w0(t=St()){return/webos/i.test(t)}function Au(t=St()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XL(t=St()){var e;return Au(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JL(){return RP()&&document.documentMode===10}function I0(t=St()){return Au(t)||E0(t)||w0(t)||T0(t)||/windows phone/i.test(t)||v0(t)}function ZL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function A0(t,e=[]){let n;switch(t){case"Browser":n=z_(St());break;case"Worker":n=`${z_(St())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class eV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function tV(t,e={}){return ka(t,"GET","/v2/passwordPolicy",f0(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const nV=6;class rV{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:nV,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class sV{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new G_(this),this.idTokenSubscription=new G_(this),this.beforeStateQueue=new eV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Zs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pt(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tV(this),n=new rV(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ki("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Zs.create(this,[Gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=A0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&OL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $p(t){return Pt(t)}class G_{constructor(e){this.auth=e,this.observer=null,this.addObserver=DP(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function iV(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function oV(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=xn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",iV().appendChild(r)})}function aV(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function lV(t,e){const n=Bc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Bl(i,e??{}))return s;or(s,"already-initialized")}return n.initialize({options:e})}function cV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function uV(t,e,n){const r=$p(t);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=R0(e),{host:o,port:a}=hV(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||fV()}function R0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hV(t){const e=R0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Q_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Q_(o)}}}function Q_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fV(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class C0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zn("not implemented")}_getIdTokenResponse(e){return zn("not implemented")}_linkToIdToken(e,n){return zn("not implemented")}_getReauthenticationResolver(e){return zn("not implemented")}}/**
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
 */async function ei(t,e){return UL(t,"POST","/v1/accounts:signInWithIdp",f0(t,e))}/**
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
 */const dV="http://localhost";class ms extends C0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ms(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):or("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Mp(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ms(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ei(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ei(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ei(e,n)}buildRequest(){const e={requestUri:dV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ni(n)}return e}}/**
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
 */class b0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Na extends b0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vr extends Na{constructor(){super("facebook.com")}static credential(e){return ms._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";vr.PROVIDER_ID="facebook.com";/**
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
 */class Er extends Na{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ms._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.GOOGLE_SIGN_IN_METHOD="google.com";Er.PROVIDER_ID="google.com";/**
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
 */class Tr extends Na{constructor(){super("github.com")}static credential(e){return ms._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.GITHUB_SIGN_IN_METHOD="github.com";Tr.PROVIDER_ID="github.com";/**
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
 */class wr extends Na{constructor(){super("twitter.com")}static credential(e,n){return ms._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.TWITTER_SIGN_IN_METHOD="twitter.com";wr.PROVIDER_ID="twitter.com";/**
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
 */class Ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await os._fromIdTokenResponse(e,r,s),o=Y_(r);return new Ei({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Y_(r);return new Ei({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Y_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class cc extends Un{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new cc(e,n,r,s)}}function S0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(t,i,e,r):i})}async function pV(t,e,n=!1){const r=await ta(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ei._forOperation(t,"link",r)}/**
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
 */async function gV(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await ta(t,S0(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=Fp(i.idToken);ae(o,r,"internal-error");const{sub:a}=o;return ae(t.uid===a,r,"user-mismatch"),Ei._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&or(r,"user-mismatch"),i}}/**
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
 */async function mV(t,e,n=!1){const r="signIn",s=await S0(t,r,e),i=await Ei._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Bp(t,e,n,r){return Pt(t).onIdTokenChanged(e,n,r)}function P0(t,e,n){return Pt(t).beforeAuthStateChanged(e,n)}const uc="__sak";/**
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
 */class k0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uc,"1"),this.storage.removeItem(uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function _V(){const t=St();return Up(t)||Au(t)}const yV=1e3,vV=10;class N0 extends k0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_V()&&ZL(),this.fallbackToPolling=I0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);JL()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vV):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}N0.type="LOCAL";const EV=N0;/**
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
 */class O0 extends k0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}O0.type="SESSION";const D0=O0;/**
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
 */function TV(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ru{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ru(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await TV(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ru.receivers=[];/**
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
 */function Hp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class wV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Hp("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Mn(){return window}function IV(t){Mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function x0(){return typeof Mn().WorkerGlobalScope<"u"&&typeof Mn().importScripts=="function"}async function AV(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RV(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CV(){return x0()?self:null}/**
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
 */const M0="firebaseLocalStorageDb",bV=1,hc="firebaseLocalStorage",L0="fbase_key";class Oa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cu(t,e){return t.transaction([hc],e?"readwrite":"readonly").objectStore(hc)}function SV(){const t=indexedDB.deleteDatabase(M0);return new Oa(t).toPromise()}function Of(){const t=indexedDB.open(M0,bV);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hc,{keyPath:L0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hc)?e(r):(r.close(),await SV(),e(await Of()))})})}async function X_(t,e,n){const r=Cu(t,!0).put({[L0]:e,value:n});return new Oa(r).toPromise()}async function PV(t,e){const n=Cu(t,!1).get(e),r=await new Oa(n).toPromise();return r===void 0?null:r.value}function J_(t,e){const n=Cu(t,!0).delete(e);return new Oa(n).toPromise()}const kV=800,NV=3;class V0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Of(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NV)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return x0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ru._getInstance(CV()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await AV(),!this.activeServiceWorker)return;this.sender=new wV(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Of();return await X_(e,uc,"1"),await J_(e,uc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>X_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>PV(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>J_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Cu(s,!1).getAll();return new Oa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}V0.type="LOCAL";const OV=V0;new Pa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function DV(t,e){return e?Gn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class jp extends C0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ei(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ei(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xV(t){return mV(t.auth,new jp(t),t.bypassAuthState)}function MV(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),gV(n,new jp(t),t.bypassAuthState)}async function LV(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),pV(n,new jp(t),t.bypassAuthState)}/**
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
 */class F0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xV;case"linkViaPopup":case"linkViaRedirect":return LV;case"reauthViaPopup":case"reauthViaRedirect":return MV;default:or(this.auth,"internal-error")}}resolve(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const VV=new Pa(2e3,1e4);class Bs extends F0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Bs.currentPopupAction&&Bs.currentPopupAction.cancel(),Bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){ar(this.filter.length===1,"Popup operations only handle one event");const e=Hp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VV.get())};e()}}Bs.currentPopupAction=null;/**
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
 */const FV="pendingRedirect",Il=new Map;class UV extends F0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Il.get(this.auth._key());if(!e){try{const r=await $V(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Il.set(this.auth._key(),e)}return this.bypassAuthState||Il.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $V(t,e){const n=jV(e),r=HV(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function BV(t,e){Il.set(t._key(),e)}function HV(t){return Gn(t._redirectPersistence)}function jV(t){return wl(FV,t.config.apiKey,t.name)}async function WV(t,e,n=!1){const r=$p(t),s=DV(r,e),o=await new UV(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const qV=10*60*1e3;class KV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zV(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!U0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qV&&this.cachedEventUids.clear(),this.cachedEventUids.has(Z_(e))}saveEventToCache(e){this.cachedEventUids.add(Z_(e)),this.lastProcessedEventTime=Date.now()}}function Z_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function U0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zV(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return U0(t);default:return!1}}/**
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
 */async function GV(t,e={}){return ka(t,"GET","/v1/projects",e)}/**
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
 */const QV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YV=/^https?/;async function XV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GV(t);for(const n of e)try{if(JV(n))return}catch{}or(t,"unauthorized-domain")}function JV(t){const e=Nf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!YV.test(n))return!1;if(QV.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ZV=new Pa(3e4,6e4);function ey(){const t=Mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eF(t){return new Promise((e,n)=>{var r,s,i;function o(){ey(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ey(),n(xn(t,"network-request-failed"))},timeout:ZV.get()})}if(!((s=(r=Mn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Mn().gapi)===null||i===void 0)&&i.load)o();else{const a=aV("iframefcb");return Mn()[a]=()=>{gapi.load?o():n(xn(t,"network-request-failed"))},oV(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Al=null,e})}let Al=null;function tF(t){return Al=Al||eF(t),Al}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const nF=new Pa(5e3,15e3),rF="__/auth/iframe",sF="emulator/auth/iframe",iF={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oF=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aF(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vp(e,sF):`https://${t.config.authDomain}/${rF}`,r={apiKey:e.apiKey,appName:t.name,v:Fr},s=oF.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ni(r).slice(1)}`}async function lF(t){const e=await tF(t),n=Mn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:aF(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iF,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=xn(t,"network-request-failed"),a=Mn().setTimeout(()=>{i(o)},nF.get());function l(){Mn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const cF={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uF=500,hF=600,fF="_blank",dF="http://localhost";class ty{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pF(t,e,n,r=uF,s=hF){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},cF),{width:r.toString(),height:s.toString(),top:i,left:o}),c=St().toLowerCase();n&&(a=y0(c)?fF:n),_0(c)&&(e=e||dF,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(XL(c)&&a!=="_self")return gF(e||"",a),new ty(null);const h=window.open(e||"",a,u);ae(h,t,"popup-blocked");try{h.focus()}catch{}return new ty(h)}function gF(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const mF="__/auth/handler",_F="emulator/auth/handler",yF=encodeURIComponent("fac");async function ny(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fr,eventId:s};if(e instanceof b0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Na){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${yF}=${encodeURIComponent(l)}`:"";return`${vF(t)}?${Ni(a).slice(1)}${c}`}function vF({config:t}){return t.emulator?Vp(t,_F):`https://${t.authDomain}/${mF}`}/**
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
 */const dh="webStorageSupport";class EF{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=D0,this._completeRedirectFn=WV,this._overrideRedirectResult=BV}async _openPopup(e,n,r,s){var i;ar((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ny(e,n,r,Nf(),s);return pF(e,o,Hp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ny(e,n,r,Nf(),s);return IV(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ar(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lF(e),r=new KV(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dh,{type:dh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[dh];o!==void 0&&n(!!o),or(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return I0()||Up()||Au()}}const TF=EF;var ry="@firebase/auth",sy="1.3.0";/**
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
 */class wF{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function IF(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function AF(t){Vn(new _n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:A0(t)},c=new sV(r,s,i,l);return cV(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vn(new _n("auth-internal",e=>{const n=$p(e.getProvider("auth").getImmediate());return(r=>new wF(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(ry,sy,IF(t)),Kt(ry,sy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const RF=5*60,CF=aT("authIdTokenMaxAge")||RF;let iy=null;const bF=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>CF)return;const s=n==null?void 0:n.token;iy!==s&&(iy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $0(t=Hc()){const e=Bc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lV(t,{popupRedirectResolver:TF,persistence:[OV,EV,D0]}),r=aT("authTokenSyncURL");if(r){const i=bF(r);P0(n,i,()=>i(n.currentUser)),Bp(n,o=>i(o))}const s=sT("auth");return s&&uV(n,`http://${s}`),n}AF("Browser");/**
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
 */const SF=new Map,PF={activated:!1,tokenObservers:[]};function Tn(t){return SF.get(t)||Object.assign({},PF)}const oy={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class kF{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Vo,await NF(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Vo,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function NF(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const OF={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},fc=new ki("appCheck","AppCheck",OF);function B0(t){if(!Tn(t).activated)throw fc.create("use-before-activation",{appName:t.name})}/**
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
 */const DF="firebase-app-check-database",xF=1,Df="firebase-app-check-store";let il=null;function MF(){return il||(il=new Promise((t,e)=>{try{const n=indexedDB.open(DF,xF);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(fc.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(Df,{keyPath:"compositeKey"})}}}catch(n){e(fc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),il)}function LF(t,e){return VF(FF(t),e)}async function VF(t,e){const r=(await MF()).transaction(Df,"readwrite"),i=r.objectStore(Df).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var c;a(fc.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function FF(t){return`${t.options.appId}-${t.name}`}/**
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
 */const xf=new da("@firebase/app-check");function ay(t,e){return hT()?LF(t,e).catch(n=>{xf.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const UF={error:"UNKNOWN_ERROR"};function $F(t){return Uc.encodeString(JSON.stringify(t),!1)}async function Mf(t,e=!1){const n=t.app;B0(n);const r=Tn(n);let s=r.token,i;if(s&&!uo(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(uo(l)?s=l:await ay(n,void 0))}if(!e&&s&&uo(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await Tn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?xf.warn(l.message):xf.error(l),i=l}let a;return s?i?uo(s)?a={token:s.token,internalError:i}:a=cy(i):(a={token:s.token},r.token=s,await ay(n,s)):a=cy(i),o&&WF(n,a),a}async function BF(t){const e=t.app;B0(e);const{provider:n}=Tn(e);{const{token:r}=await n.getToken();return{token:r}}}function HF(t,e,n,r){const{app:s}=t,i=Tn(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&uo(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),ly(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>ly(t))}function H0(t,e){const n=Tn(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function ly(t){const{app:e}=t,n=Tn(e);let r=n.tokenRefresher;r||(r=jF(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function jF(t){const{app:e}=t;return new kF(async()=>{const n=Tn(e);let r;if(n.token?r=await Mf(t,!0):r=await Mf(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=Tn(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},oy.RETRIAL_MIN_WAIT,oy.RETRIAL_MAX_WAIT)}function WF(t,e){const n=Tn(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function uo(t){return t.expireTimeMillis-Date.now()>0}function cy(t){return{token:$F(UF),error:t}}/**
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
 */class qF{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Tn(this.app);for(const n of e)H0(this.app,n.next);return Promise.resolve()}}function KF(t,e){return new qF(t,e)}function zF(t){return{getToken:e=>Mf(t,e),getLimitedUseToken:()=>BF(t),addTokenListener:e=>HF(t,"INTERNAL",e),removeTokenListener:e=>H0(t.app,e)}}const GF="@firebase/app-check",QF="0.8.0",YF="app-check",uy="app-check-internal";function XF(){Vn(new _n(YF,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return KF(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(uy).initialize()})),Vn(new _n(uy,t=>{const e=t.getProvider("app-check").getImmediate();return zF(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Kt(GF,QF)}XF();const j0=Symbol("firebaseApp");function Wp(t){return Vr()&&Be(j0,null)||Hc(t)}const ol=new WeakMap;function JF(t,e){if(!ol.has(t)){const n=kv(!0);ol.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),ol.delete(t)}}return ol.get(t)}const ZF=new WeakMap,al=new WeakMap;function e2(t){const e=Wp(t);if(!al.has(e)){let n;const s=[new Promise(i=>{n=i}),i=>{al.set(e,i),n(i.value)}];al.set(e,s)}return al.get(e)}function t2(t,e){const n=$0(e);Bp(n,r=>{const s=e2();t.value=r,Array.isArray(s)&&s[1](t)})}const hy="@firebase/database",fy="1.0.1";/**
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
 */let W0="";function n2(t){W0=t}/**
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
 */class r2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),dt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Fo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class s2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ur(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const q0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new r2(e)}}catch{}return new s2},ts=q0("localStorage"),Lf=q0("sessionStorage");/**
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
 */const ti=new da("@firebase/database"),i2=function(){let t=1;return function(){return t++}}(),K0=function(t){const e=VP(t),n=new OP;n.update(e);const r=n.digest();return Uc.encodeByteArray(r)},Da=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Da.apply(null,r):typeof r=="object"?e+=dt(r):e+=r,e+=" "}return e};let as=null,dy=!0;const o2=function(t,e){F(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ti.logLevel=ye.VERBOSE,as=ti.log.bind(ti),e&&Lf.set("logging_enabled",!0)):typeof t=="function"?as=t:(as=null,Lf.remove("logging_enabled"))},Et=function(...t){if(dy===!0&&(dy=!1,as===null&&Lf.get("logging_enabled")===!0&&o2(!0)),as){const e=Da.apply(null,t);as(e)}},xa=function(t){return function(...e){Et(t,...e)}},Vf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Da(...t);ti.error(e)},_s=function(...t){const e=`FIREBASE FATAL ERROR: ${Da(...t)}`;throw ti.error(e),new Error(e)},zt=function(...t){const e="FIREBASE WARNING: "+Da(...t);ti.warn(e)},a2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&zt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},z0=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},l2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ti="[MIN_NAME]",ys="[MAX_NAME]",Ui=function(t,e){if(t===e)return 0;if(t===Ti||e===ys)return-1;if(e===Ti||t===ys)return 1;{const n=py(t),r=py(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},c2=function(t,e){return t===e?0:t<e?-1:1},Yi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+dt(e))},qp=function(t){if(typeof t!="object"||t===null)return dt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=dt(e[r]),n+=":",n+=qp(t[e[r]]);return n+="}",n},G0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function sn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Q0=function(t){F(!z0(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},u2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},h2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},f2=new RegExp("^-?(0*)\\d{1,10}$"),d2=-2147483648,p2=2147483647,py=function(t){if(f2.test(t)){const e=Number(t);if(e>=d2&&e<=p2)return e}return null},Ma=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw zt("Exception was thrown by user callback.",n),e},Math.floor(0))}},g2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},bo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
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
 */class m2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){zt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class _2{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',zt(e)}}class Ff{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ff.OWNER="owner";/**
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
 */const Kp="5",Y0="v",X0="s",J0="r",Z0="f",eA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,tA="ls",nA="p",Uf="ac",rA="websocket",sA="long_polling";/**
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
 */class y2{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ts.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ts.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function v2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function iA(t,e,n){F(typeof e=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let r;if(e===rA)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===sA)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);v2(t)&&(n.ns=t.namespace);const s=[];return sn(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class E2{constructor(){this.counters_={}}incrementCounter(e,n=1){ur(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return yP(this.counters_)}}/**
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
 */const ph={},gh={};function zp(t){const e=t.toString();return ph[e]||(ph[e]=new E2),ph[e]}function T2(t,e){const n=t.toString();return gh[n]||(gh[n]=e()),gh[n]}/**
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
 */class w2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Ma(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const gy="start",I2="close",A2="pLPCommand",R2="pRTLPCB",oA="id",aA="pw",lA="ser",C2="cb",b2="seg",S2="ts",P2="d",k2="dframe",cA=1870,uA=30,N2=cA-uA,O2=25e3,D2=3e4;class Hs{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xa(e),this.stats_=zp(n),this.urlFn=l=>(this.appCheckToken&&(l[Uf]=this.appCheckToken),iA(n,sA,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new w2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(D2)),l2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Gp((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===gy)this.id=a,this.password=l;else if(o===I2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[gy]="t",r[lA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[C2]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Y0]=Kp,this.transportSessionId&&(r[X0]=this.transportSessionId),this.lastSessionId&&(r[tA]=this.lastSessionId),this.applicationId&&(r[nA]=this.applicationId),this.appCheckToken&&(r[Uf]=this.appCheckToken),typeof location<"u"&&location.hostname&&eA.test(location.hostname)&&(r[J0]=Z0);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Hs.forceAllow_=!0}static forceDisallow(){Hs.forceDisallow_=!0}static isAvailable(){return Hs.forceAllow_?!0:!Hs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!u2()&&!h2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=nT(n),s=G0(r,N2);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[k2]="t",r[oA]=e,r[aA]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=dt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Gp{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=i2(),window[A2+this.uniqueCallbackIdentifier]=e,window[R2+this.uniqueCallbackIdentifier]=n,this.myIFrame=Gp.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Et("frame writing exception"),a.stack&&Et(a.stack),Et(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Et("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[oA]=this.myID,e[aA]=this.myPW,e[lA]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+uA+r.length<=cA;){const o=this.pendingSegs.shift();r=r+"&"+b2+s+"="+o.seg+"&"+S2+s+"="+o.ts+"&"+P2+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(O2)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Et("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const x2=16384,M2=45e3;let dc=null;typeof MozWebSocket<"u"?dc=MozWebSocket:typeof WebSocket<"u"&&(dc=WebSocket);class cn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xa(this.connId),this.stats_=zp(n),this.connURL=cn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[Y0]=Kp,typeof location<"u"&&location.hostname&&eA.test(location.hostname)&&(o[J0]=Z0),n&&(o[X0]=n),r&&(o[tA]=r),s&&(o[Uf]=s),i&&(o[nA]=i),iA(e,rA,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ts.set("previous_websocket_failure",!0);try{let r;uT(),this.mySock=new dc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){cn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&dc!==null&&!cn.forceDisallow_}static previouslyFailed(){return ts.isInMemoryStorage||ts.get("previous_websocket_failure")===!0}markConnectionHealthy(){ts.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Fo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=G0(n,x2);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(M2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}cn.responsesRequiredToBeHealthy=2;cn.healthyTimeout=3e4;/**
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
 */class ra{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Hs,cn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=cn&&cn.isAvailable();let r=n&&!cn.previouslyFailed();if(e.webSocketOnly&&(n||zt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[cn];else{const s=this.transports_=[];for(const i of ra.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);ra.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ra.globalTransportInitialized_=!1;/**
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
 */const L2=6e4,V2=5e3,F2=10*1024,U2=100*1024,mh="t",my="d",$2="s",_y="r",B2="e",yy="o",vy="a",Ey="n",Ty="p",H2="h";class j2{constructor(e,n,r,s,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xa("c:"+this.id+":"),this.transportManager_=new ra(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=bo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>U2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>F2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mh in e){const n=e[mh];n===vy?this.upgradeIfSecondaryHealthy_():n===_y?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===yy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Yi("t",e),r=Yi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ty,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:vy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ey,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Yi("t",e),r=Yi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Yi(mh,e);if(my in e){const r=e[my];if(n===H2){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Ey){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===$2?this.onConnectionShutdown_(r):n===_y?this.onReset_(r):n===B2?Vf("Server Error: "+r):n===yy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Kp!==r&&zt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),bo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(L2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):bo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(V2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ty,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ts.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class hA{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class fA{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){F(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class pc extends fA{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Nd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new pc}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const wy=32,Iy=768;class Ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ke(){return new Ue("")}function ge(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Mr(t){return t.pieces_.length-t.pieceNum_}function Me(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ue(t.pieces_,e)}function dA(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function W2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function pA(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function gA(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ue(e,0)}function st(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ue)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Ue(n,0)}function he(t){return t.pieceNum_>=t.pieces_.length}function en(t,e){const n=ge(t),r=ge(e);if(n===null)return e;if(n===r)return en(Me(t),Me(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function mA(t,e){if(Mr(t)!==Mr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function hn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Mr(t)>Mr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class q2{constructor(e,n){this.errorPrefix_=n,this.parts_=pA(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=$c(this.parts_[r]);_A(this)}}function K2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=$c(e),_A(t)}function z2(t){const e=t.parts_.pop();t.byteLength_-=$c(e),t.parts_.length>0&&(t.byteLength_-=1)}function _A(t){if(t.byteLength_>Iy)throw new Error(t.errorPrefix_+"has a key path longer than "+Iy+" bytes ("+t.byteLength_+").");if(t.parts_.length>wy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+wy+") or object contains a cycle "+zr(t))}function zr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Qp extends fA{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Qp}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Xi=1e3,G2=60*5*1e3,Ay=30*1e3,Q2=1.3,Y2=3e4,X2="server_kill",Ry=3;class Zn extends hA{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Zn.nextPersistentConnectionId_++,this.log_=xa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xi,this.maxReconnectDelay_=G2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!uT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(dt(i)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Vo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;Zn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ur(e,"w")){const r=ci(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();zt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||NP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ay)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=kP(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+dt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Vf("Unrecognized action received from server: "+dt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Y2&&(this.reconnectDelay_=Xi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Q2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Zn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){F(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Et("getToken() completed but was canceled"):(Et("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new j2(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,d=>{zt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(X2)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&zt(h),l())}}}interrupt(e){Et("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Et("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Wh(this.interruptReasons_)&&(this.reconnectDelay_=Xi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>qp(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Ue(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Et("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ry&&(this.reconnectDelay_=Ay,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Et("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ry&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+W0.replace(/\./g,"-")]=1,Nd()?e["framework.cordova"]=1:cT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pc.getInstance().currentlyOnline();return Wh(this.interruptReasons_)&&e}}Zn.nextPersistentConnectionId_=0;Zn.nextConnectionId_=0;/**
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
 */class me{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new me(e,n)}}/**
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
 */class bu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new me(Ti,e),s=new me(Ti,n);return this.compare(r,s)!==0}minPost(){return me.MIN}}/**
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
 */let ll;class yA extends bu{static get __EMPTY_NODE(){return ll}static set __EMPTY_NODE(e){ll=e}compare(e,n){return Ui(e.name,n.name)}isDefinedOn(e){throw Pi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return me.MIN}maxPost(){return new me(ys,ll)}makePost(e,n){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new me(e,ll)}toString(){return".key"}}const ni=new yA;/**
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
 */class cl{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??Ut.EMPTY_NODE,this.right=i??Ut.EMPTY_NODE}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ut.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ut.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}rt.RED=!0;rt.BLACK=!1;class J2{copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ut{constructor(e,n=Ut.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ut(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,rt.BLACK,null,null))}remove(e){return new Ut(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,rt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new cl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new cl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new cl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new cl(this.root_,null,this.comparator_,!0,e)}}Ut.EMPTY_NODE=new J2;/**
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
 */function Z2(t,e){return Ui(t.name,e.name)}function Yp(t,e){return Ui(t,e)}/**
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
 */let $f;function eU(t){$f=t}const vA=function(t){return typeof t=="number"?"number:"+Q0(t):"string:"+t},EA=function(t){if(t.isLeafNode()){const e=t.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ur(e,".sv"),"Priority must be a string or number.")}else F(t===$f||t.isEmpty(),"priority of unexpected type.");F(t===$f||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Cy;class tt{constructor(e,n=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),EA(this.priorityNode_)}static set __childrenNodeConstructor(e){Cy=e}static get __childrenNodeConstructor(){return Cy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return he(e)?this:ge(e)===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ge(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(F(r!==".priority"||Mr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Me(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+vA(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Q0(this.value_):e+=this.value_,this.lazyHash_=K0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tt.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=tt.VALUE_TYPE_ORDER.indexOf(n),i=tt.VALUE_TYPE_ORDER.indexOf(r);return F(s>=0,"Unknown leaf type: "+n),F(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let TA,wA;function tU(t){TA=t}function nU(t){wA=t}class rU extends bu{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Ui(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return me.MIN}maxPost(){return new me(ys,new tt("[PRIORITY-POST]",wA))}makePost(e,n){const r=TA(e);return new me(n,new tt("[PRIORITY-POST]",r))}toString(){return".priority"}}const At=new rU;/**
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
 */const sU=Math.log(2);class iU{constructor(e){const n=i=>parseInt(Math.log(i)/sU,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gc=function(t,e,n,r){t.sort(e);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new rt(f,h.node,rt.BLACK,null,null);{const d=parseInt(u/2,10)+l,p=s(l,d),y=s(d+1,c);return h=t[d],f=n?n(h):h,new rt(f,h.node,rt.BLACK,p,y)}},i=function(l){let c=null,u=null,h=t.length;const f=function(p,y){const T=h-p,v=h;h-=p;const m=s(T+1,v),I=t[T],E=n?n(I):I;d(new rt(E,I.node,y,null,m))},d=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const y=l.nextBitIsOne(),T=Math.pow(2,l.count-(p+1));y?f(T,rt.BLACK):(f(T,rt.BLACK),f(T,rt.RED))}return u},o=new iU(t.length),a=i(o);return new Ut(r||e,a)};/**
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
 */let _h;const Ds={};class Qn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return F(Ds&&At,"ChildrenNode.ts has not been loaded"),_h=_h||new Qn({".priority":Ds},{".priority":At}),_h}get(e){const n=ci(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ut?n:null}hasIndex(e){return ur(this.indexSet_,e.toString())}addIndex(e,n){F(e!==ni,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(me.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=gc(r,e.getCompare()):a=Ds;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Qn(u,c)}addToIndexes(e,n){const r=$l(this.indexes_,(s,i)=>{const o=ci(this.indexSet_,i);if(F(o,"Missing index implementation for "+i),s===Ds)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(me.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),gc(a,o.getCompare())}else return Ds;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new me(e.name,a))),l.insert(e,e.node)}});return new Qn(r,this.indexSet_)}removeFromIndexes(e,n){const r=$l(this.indexes_,s=>{if(s===Ds)return s;{const i=n.get(e.name);return i?s.remove(new me(e.name,i)):s}});return new Qn(r,this.indexSet_)}}/**
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
 */let Ji;class Ae{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&EA(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ji||(Ji=new Ae(new Ut(Yp),null,Qn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ji}updatePriority(e){return this.children_.isEmpty()?this:new Ae(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ji:n}}getChild(e){const n=ge(e);return n===null?this:this.getImmediateChild(n).getChild(Me(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(F(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new me(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Ji:this.priorityNode_;return new Ae(s,o,i)}}updateChild(e,n){const r=ge(e);if(r===null)return n;{F(ge(e)!==".priority"||Mr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Me(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(At,(o,a)=>{n[o]=a.val(e),r++,i&&Ae.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+vA(this.getPriority().val())+":"),this.forEachChild(At,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":K0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new me(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new me(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new me(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,me.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,me.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===La?-1:0}withIndex(e){if(e===ni||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ae(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ni||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(At),s=n.getIterator(At);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ni?null:this.indexMap_.get(e.toString())}}Ae.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class oU extends Ae{constructor(){super(new Ut(Yp),Ae.EMPTY_NODE,Qn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ae.EMPTY_NODE}isEmpty(){return!1}}const La=new oU;Object.defineProperties(me,{MIN:{value:new me(Ti,Ae.EMPTY_NODE)},MAX:{value:new me(ys,La)}});yA.__EMPTY_NODE=Ae.EMPTY_NODE;tt.__childrenNodeConstructor=Ae;eU(La);nU(La);/**
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
 */const aU=!0;function Tt(t,e=null){if(t===null)return Ae.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new tt(n,Tt(e))}if(!(t instanceof Array)&&aU){const n=[];let r=!1;if(sn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Tt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new me(o,l)))}}),n.length===0)return Ae.EMPTY_NODE;const i=gc(n,Z2,o=>o.name,Yp);if(r){const o=gc(n,At.getCompare());return new Ae(i,Tt(e),new Qn({".priority":o},{".priority":At}))}else return new Ae(i,Tt(e),Qn.Default)}else{let n=Ae.EMPTY_NODE;return sn(t,(r,s)=>{if(ur(t,r)&&r.substring(0,1)!=="."){const i=Tt(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(Tt(e))}}tU(Tt);/**
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
 */class lU extends bu{constructor(e){super(),this.indexPath_=e,F(!he(e)&&ge(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Ui(e.name,n.name):i}makePost(e,n){const r=Tt(e),s=Ae.EMPTY_NODE.updateChild(this.indexPath_,r);return new me(n,s)}maxPost(){const e=Ae.EMPTY_NODE.updateChild(this.indexPath_,La);return new me(ys,e)}toString(){return pA(this.indexPath_,0).join("/")}}/**
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
 */class cU extends bu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ui(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return me.MIN}maxPost(){return me.MAX}makePost(e,n){const r=Tt(e);return new me(n,r)}toString(){return".value"}}const uU=new cU;/**
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
 */function hU(t){return{type:"value",snapshotNode:t}}function fU(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function dU(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function by(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function pU(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Xp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=At}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ti}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ys}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===At}copy(){const e=new Xp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Sy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===At?n="$priority":t.index_===uU?n="$value":t.index_===ni?n="$key":(F(t.index_ instanceof lU,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=dt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=dt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+dt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=dt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+dt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Py(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==At&&(e.i=t.index_.toString()),e}/**
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
 */class mc extends hA{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=xa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=mc.getListenId_(e,r),a={};this.listens_[o]=a;const l=Sy(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,r),ci(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const r=mc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Sy(e._queryParams),r=e._path.toString(),s=new Vo;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ni(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Fo(a.responseText)}catch{zt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&zt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class gU{constructor(){this.rootNode_=Ae.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function _c(){return{value:null,children:new Map}}function IA(t,e,n){if(he(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ge(e);t.children.has(r)||t.children.set(r,_c());const s=t.children.get(r);e=Me(e),IA(s,e,n)}}function Bf(t,e,n){t.value!==null?n(e,t.value):mU(t,(r,s)=>{const i=new Ue(e.toString()+"/"+r);Bf(s,i,n)})}function mU(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class _U{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&sn(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const ky=10*1e3,yU=30*1e3,vU=5*60*1e3;class EU{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new _U(e);const r=ky+(yU-ky)*Math.random();bo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;sn(e,(s,i)=>{i>0&&ur(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),bo(this.reportStats_.bind(this),Math.floor(Math.random()*2*vU))}}/**
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
 */var Nn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Nn||(Nn={}));function AA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function RA(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function CA(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class yc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Nn.ACK_USER_WRITE,this.source=AA()}operationForChild(e){if(he(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ue(e));return new yc(ke(),n,this.revert)}}else return F(ge(this.path)===e,"operationForChild called for unrelated child."),new yc(Me(this.path),this.affectedTree,this.revert)}}/**
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
 */class vs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Nn.OVERWRITE}operationForChild(e){return he(this.path)?new vs(this.source,ke(),this.snap.getImmediateChild(e)):new vs(this.source,Me(this.path),this.snap)}}/**
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
 */class sa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Nn.MERGE}operationForChild(e){if(he(this.path)){const n=this.children.subtree(new Ue(e));return n.isEmpty()?null:n.value?new vs(this.source,ke(),n.value):new sa(this.source,ke(),n)}else return F(ge(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new sa(this.source,Me(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Jp{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(he(e))return this.isFullyInitialized()&&!this.filtered_;const n=ge(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function TU(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(pU(o.childName,o.snapshotNode))}),Zi(t,s,"child_removed",e,r,n),Zi(t,s,"child_added",e,r,n),Zi(t,s,"child_moved",i,r,n),Zi(t,s,"child_changed",e,r,n),Zi(t,s,"value",e,r,n),s}function Zi(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>IU(t,a,l)),o.forEach(a=>{const l=wU(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function wU(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function IU(t,e,n){if(e.childName==null||n.childName==null)throw Pi("Should only compare child_ events.");const r=new me(e.childName,e.snapshotNode),s=new me(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function bA(t,e){return{eventCache:t,serverCache:e}}function So(t,e,n,r){return bA(new Jp(e,n,r),t.serverCache)}function SA(t,e,n,r){return bA(t.eventCache,new Jp(e,n,r))}function Hf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Es(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let yh;const AU=()=>(yh||(yh=new Ut(c2)),yh);class De{constructor(e,n=AU()){this.value=e,this.children=n}static fromObject(e){let n=new De(null);return sn(e,(r,s)=>{n=n.set(new Ue(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ke(),value:this.value};if(he(e))return null;{const r=ge(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Me(e),n);return i!=null?{path:st(new Ue(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(he(e))return this;{const n=ge(e),r=this.children.get(n);return r!==null?r.subtree(Me(e)):new De(null)}}set(e,n){if(he(e))return new De(n,this.children);{const r=ge(e),i=(this.children.get(r)||new De(null)).set(Me(e),n),o=this.children.insert(r,i);return new De(this.value,o)}}remove(e){if(he(e))return this.children.isEmpty()?new De(null):new De(null,this.children);{const n=ge(e),r=this.children.get(n);if(r){const s=r.remove(Me(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new De(null):new De(this.value,i)}else return this}}get(e){if(he(e))return this.value;{const n=ge(e),r=this.children.get(n);return r?r.get(Me(e)):null}}setTree(e,n){if(he(e))return n;{const r=ge(e),i=(this.children.get(r)||new De(null)).setTree(Me(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new De(this.value,o)}}fold(e){return this.fold_(ke(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(st(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ke(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(he(e))return null;{const i=ge(e),o=this.children.get(i);return o?o.findOnPath_(Me(e),st(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ke(),n)}foreachOnPath_(e,n,r){if(he(e))return this;{this.value&&r(n,this.value);const s=ge(e),i=this.children.get(s);return i?i.foreachOnPath_(Me(e),st(n,s),r):new De(null)}}foreach(e){this.foreach_(ke(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(st(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class mn{constructor(e){this.writeTree_=e}static empty(){return new mn(new De(null))}}function Po(t,e,n){if(he(e))return new mn(new De(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=en(s,e);return i=i.updateChild(o,n),new mn(t.writeTree_.set(s,i))}else{const s=new De(n),i=t.writeTree_.setTree(e,s);return new mn(i)}}}function Ny(t,e,n){let r=t;return sn(n,(s,i)=>{r=Po(r,st(e,s),i)}),r}function Oy(t,e){if(he(e))return mn.empty();{const n=t.writeTree_.setTree(e,new De(null));return new mn(n)}}function jf(t,e){return Cs(t,e)!=null}function Cs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(en(n.path,e)):null}function Dy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(At,(r,s)=>{e.push(new me(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new me(r,s.value))}),e}function kr(t,e){if(he(e))return t;{const n=Cs(t,e);return n!=null?new mn(new De(n)):new mn(t.writeTree_.subtree(e))}}function Wf(t){return t.writeTree_.isEmpty()}function wi(t,e){return PA(ke(),t.writeTree_,e)}function PA(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(F(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=PA(st(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(st(t,".priority"),r)),n}}/**
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
 */function kA(t,e){return MA(e,t)}function RU(t,e,n,r,s){F(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Po(t.visibleWrites,e,n)),t.lastWriteId=r}function CU(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function bU(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);F(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&SU(a,r.path)?s=!1:hn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return PU(t),!0;if(r.snap)t.visibleWrites=Oy(t.visibleWrites,r.path);else{const a=r.children;sn(a,l=>{t.visibleWrites=Oy(t.visibleWrites,st(r.path,l))})}return!0}else return!1}function SU(t,e){if(t.snap)return hn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&hn(st(t.path,n),e))return!0;return!1}function PU(t){t.visibleWrites=NA(t.allWrites,kU,ke()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function kU(t){return t.visible}function NA(t,e,n){let r=mn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)hn(n,o)?(a=en(n,o),r=Po(r,a,i.snap)):hn(o,n)&&(a=en(o,n),r=Po(r,ke(),i.snap.getChild(a)));else if(i.children){if(hn(n,o))a=en(n,o),r=Ny(r,a,i.children);else if(hn(o,n))if(a=en(o,n),he(a))r=Ny(r,ke(),i.children);else{const l=ci(i.children,ge(a));if(l){const c=l.getChild(Me(a));r=Po(r,ke(),c)}}}else throw Pi("WriteRecord should have .snap or .children")}}return r}function OA(t,e,n,r,s){if(!r&&!s){const i=Cs(t.visibleWrites,e);if(i!=null)return i;{const o=kr(t.visibleWrites,e);if(Wf(o))return n;if(n==null&&!jf(o,ke()))return null;{const a=n||Ae.EMPTY_NODE;return wi(o,a)}}}else{const i=kr(t.visibleWrites,e);if(!s&&Wf(i))return n;if(!s&&n==null&&!jf(i,ke()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(hn(c.path,e)||hn(e,c.path))},a=NA(t.allWrites,o,e),l=n||Ae.EMPTY_NODE;return wi(a,l)}}}function NU(t,e,n){let r=Ae.EMPTY_NODE;const s=Cs(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(At,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=kr(t.visibleWrites,e);return n.forEachChild(At,(o,a)=>{const l=wi(kr(i,new Ue(o)),a);r=r.updateImmediateChild(o,l)}),Dy(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=kr(t.visibleWrites,e);return Dy(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function OU(t,e,n,r,s){F(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=st(e,n);if(jf(t.visibleWrites,i))return null;{const o=kr(t.visibleWrites,i);return Wf(o)?s.getChild(n):wi(o,s.getChild(n))}}function DU(t,e,n,r){const s=st(e,n),i=Cs(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=kr(t.visibleWrites,s);return wi(o,r.getNode().getImmediateChild(n))}else return null}function xU(t,e){return Cs(t.visibleWrites,e)}function MU(t,e,n,r,s,i,o){let a;const l=kr(t.visibleWrites,e),c=Cs(l,ke());if(c!=null)a=c;else if(n!=null)a=wi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let d=f.getNext();for(;d&&u.length<s;)h(d,r)!==0&&u.push(d),d=f.getNext();return u}else return[]}function LU(){return{visibleWrites:mn.empty(),allWrites:[],lastWriteId:-1}}function qf(t,e,n,r){return OA(t.writeTree,t.treePath,e,n,r)}function DA(t,e){return NU(t.writeTree,t.treePath,e)}function xy(t,e,n,r){return OU(t.writeTree,t.treePath,e,n,r)}function vc(t,e){return xU(t.writeTree,st(t.treePath,e))}function VU(t,e,n,r,s,i){return MU(t.writeTree,t.treePath,e,n,r,s,i)}function Zp(t,e,n){return DU(t.writeTree,t.treePath,e,n)}function xA(t,e){return MA(st(t.treePath,e),t.writeTree)}function MA(t,e){return{treePath:t,writeTree:e}}/**
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
 */class FU{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,by(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,dU(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,fU(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,by(r,e.snapshotNode,s.oldSnap));else throw Pi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class UU{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const LA=new UU;class eg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Jp(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Zp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Es(this.viewCache_),i=VU(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function $U(t,e){F(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function BU(t,e,n,r,s){const i=new FU;let o,a;if(n.type===Nn.OVERWRITE){const c=n;c.source.fromUser?o=Kf(t,e,c.path,c.snap,r,s,i):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!he(c.path),o=Ec(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===Nn.MERGE){const c=n;c.source.fromUser?o=jU(t,e,c.path,c.children,r,s,i):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=zf(t,e,c.path,c.children,r,s,a,i))}else if(n.type===Nn.ACK_USER_WRITE){const c=n;c.revert?o=KU(t,e,c.path,r,s,i):o=WU(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===Nn.LISTEN_COMPLETE)o=qU(t,e,n.path,r,i);else throw Pi("Unknown operation type: "+n.type);const l=i.getChanges();return HU(e,o,l),{viewCache:o,changes:l}}function HU(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Hf(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(hU(Hf(e)))}}function VA(t,e,n,r,s,i){const o=e.eventCache;if(vc(r,n)!=null)return e;{let a,l;if(he(n))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Es(e),u=c instanceof Ae?c:Ae.EMPTY_NODE,h=DA(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=qf(r,Es(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=ge(n);if(c===".priority"){F(Mr(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=xy(r,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Me(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=xy(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Zp(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,i):a=o.getNode()}}return So(e,a,o.isFullyInitialized()||he(n),t.filter.filtersNodes())}}function Ec(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(he(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),d,null)}else{const d=ge(n);if(!l.isCompleteForPath(n)&&Mr(n)>1)return e;const p=Me(n),T=l.getNode().getImmediateChild(d).updateChild(p,r);d===".priority"?c=u.updatePriority(l.getNode(),T):c=u.updateChild(l.getNode(),d,T,p,LA,null)}const h=SA(e,c,l.isFullyInitialized()||he(n),u.filtersNodes()),f=new eg(s,h,i);return VA(t,h,n,s,f,a)}function Kf(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const u=new eg(s,e,i);if(he(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=So(e,c,!0,t.filter.filtersNodes());else{const h=ge(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=So(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Me(n),d=a.getNode().getImmediateChild(h);let p;if(he(f))p=r;else{const y=u.getCompleteChild(h);y!=null?dA(f)===".priority"&&y.getChild(gA(f)).isEmpty()?p=y:p=y.updateChild(f,r):p=Ae.EMPTY_NODE}if(d.equals(p))l=e;else{const y=t.filter.updateChild(a.getNode(),h,p,f,u,o);l=So(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function My(t,e){return t.eventCache.isCompleteForChild(e)}function jU(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const u=st(n,l);My(e,ge(u))&&(a=Kf(t,a,u,c,s,i,o))}),r.foreach((l,c)=>{const u=st(n,l);My(e,ge(u))||(a=Kf(t,a,u,c,s,i,o))}),a}function Ly(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function zf(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;he(n)?c=r:c=new De(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),p=Ly(t,d,f);l=Ec(t,l,new Ue(h),p,s,i,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const p=e.serverCache.getNode().getImmediateChild(h),y=Ly(t,p,f);l=Ec(t,l,new Ue(h),y,s,i,o,a)}}),l}function WU(t,e,n,r,s,i,o){if(vc(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(he(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ec(t,e,n,l.getNode().getChild(n),s,i,a,o);if(he(n)){let c=new De(null);return l.getNode().forEachChild(ni,(u,h)=>{c=c.set(new Ue(u),h)}),zf(t,e,n,c,s,i,a,o)}else return e}else{let c=new De(null);return r.foreach((u,h)=>{const f=st(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),zf(t,e,n,c,s,i,a,o)}}function qU(t,e,n,r,s){const i=e.serverCache,o=SA(e,i.getNode(),i.isFullyInitialized()||he(n),i.isFiltered());return VA(t,o,n,r,LA,s)}function KU(t,e,n,r,s,i){let o;if(vc(r,n)!=null)return e;{const a=new eg(r,e,s),l=e.eventCache.getNode();let c;if(he(n)||ge(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=qf(r,Es(e));else{const h=e.serverCache.getNode();F(h instanceof Ae,"serverChildren would be complete if leaf node"),u=DA(r,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=ge(n);let h=Zp(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Me(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Ae.EMPTY_NODE,Me(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=qf(r,Es(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||vc(r,ke())!=null,So(e,c,o,t.filter.filtersNodes())}}function zU(t,e){const n=Es(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!he(e)&&!n.getImmediateChild(ge(e)).isEmpty())?n.getChild(e):null}function Vy(t,e,n,r){e.type===Nn.MERGE&&e.source.queryId!==null&&(F(Es(t.viewCache_),"We should always have a full cache before handling merges"),F(Hf(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=BU(t.processor_,s,e,n,r);return $U(t.processor_,i.viewCache),F(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,GU(t,i.changes,i.viewCache.eventCache.getNode(),null)}function GU(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return TU(t.eventGenerator_,e,n,s)}/**
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
 */let Fy;function QU(t){F(!Fy,"__referenceConstructor has already been defined"),Fy=t}function tg(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return F(i!=null,"SyncTree gave us an op for an invalid query."),Vy(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Vy(o,e,n,r));return i}}function ng(t,e){let n=null;for(const r of t.views.values())n=n||zU(r,e);return n}/**
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
 */let Uy;function YU(t){F(!Uy,"__referenceConstructor has already been defined"),Uy=t}class $y{constructor(e){this.listenProvider_=e,this.syncPointTree_=new De(null),this.pendingWriteTree_=LU(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function XU(t,e,n,r,s){return RU(t.pendingWriteTree_,e,n,r,s),s?Pu(t,new vs(AA(),e,n)):[]}function js(t,e,n=!1){const r=CU(t.pendingWriteTree_,e);if(bU(t.pendingWriteTree_,e)){let i=new De(null);return r.snap!=null?i=i.set(ke(),!0):sn(r.children,o=>{i=i.set(new Ue(o),!0)}),Pu(t,new yc(r.path,i,n))}else return[]}function Su(t,e,n){return Pu(t,new vs(RA(),e,n))}function JU(t,e,n){const r=De.fromObject(n);return Pu(t,new sa(RA(),e,r))}function ZU(t,e,n,r){const s=BA(t,r);if(s!=null){const i=HA(s),o=i.path,a=i.queryId,l=en(o,e),c=new vs(CA(a),l,n);return jA(t,o,c)}else return[]}function e$(t,e,n,r){const s=BA(t,r);if(s){const i=HA(s),o=i.path,a=i.queryId,l=en(o,e),c=De.fromObject(n),u=new sa(CA(a),l,c);return jA(t,o,u)}else return[]}function FA(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=en(o,e),c=ng(a,l);if(c)return c});return OA(s,e,i,n,!0)}function Pu(t,e){return UA(e,t.syncPointTree_,null,kA(t.pendingWriteTree_,ke()))}function UA(t,e,n,r){if(he(t.path))return $A(t,e,n,r);{const s=e.get(ke());n==null&&s!=null&&(n=ng(s,ke()));let i=[];const o=ge(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=xA(r,o);i=i.concat(UA(a,l,c,u))}return s&&(i=i.concat(tg(s,t,r,n))),i}}function $A(t,e,n,r){const s=e.get(ke());n==null&&s!=null&&(n=ng(s,ke()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=xA(r,o),u=t.operationForChild(o);u&&(i=i.concat($A(u,a,l,c)))}),s&&(i=i.concat(tg(s,t,r,n))),i}function BA(t,e){return t.tagToQueryMap.get(e)}function HA(t){const e=t.indexOf("$");return F(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ue(t.substr(0,e))}}function jA(t,e,n){const r=t.syncPointTree_.get(e);F(r,"Missing sync point for query tag that we're tracking");const s=kA(t.pendingWriteTree_,e);return tg(r,n,s,null)}/**
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
 */class rg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new rg(n)}node(){return this.node_}}class sg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=st(this.path_,e);return new sg(this.syncTree_,n)}node(){return FA(this.syncTree_,this.path_)}}const t$=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},By=function(t,e,n){if(!t||typeof t!="object")return t;if(F(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return n$(t[".sv"],e,n);if(typeof t[".sv"]=="object")return r$(t[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},n$=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+t)}},r$=function(t,e,n){t.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&F(!1,"Unexpected increment value: "+r);const s=e.node();if(F(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},s$=function(t,e,n,r){return ig(e,new sg(n,t),r)},i$=function(t,e,n){return ig(t,new rg(e),n)};function ig(t,e,n){const r=t.getPriority().val(),s=By(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=By(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new tt(a,Tt(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new tt(s))),o.forEachChild(At,(a,l)=>{const c=ig(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
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
 */class og{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ag(t,e){let n=e instanceof Ue?e:new Ue(e),r=t,s=ge(n);for(;s!==null;){const i=ci(r.node.children,s)||{children:{},childCount:0};r=new og(s,r,i),n=Me(n),s=ge(n)}return r}function $i(t){return t.node.value}function WA(t,e){t.node.value=e,Gf(t)}function qA(t){return t.node.childCount>0}function o$(t){return $i(t)===void 0&&!qA(t)}function ku(t,e){sn(t.node.children,(n,r)=>{e(new og(n,t,r))})}function KA(t,e,n,r){n&&!r&&e(t),ku(t,s=>{KA(s,e,!0,r)}),n&&r&&e(t)}function a$(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Va(t){return new Ue(t.parent===null?t.name:Va(t.parent)+"/"+t.name)}function Gf(t){t.parent!==null&&l$(t.parent,t.name,t)}function l$(t,e,n){const r=o$(n),s=ur(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Gf(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Gf(t))}/**
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
 */const c$=/[\[\].#$\/\u0000-\u001F\u007F]/,u$=/[\[\].#$\u0000-\u001F\u007F]/,vh=10*1024*1024,zA=function(t){return typeof t=="string"&&t.length!==0&&!c$.test(t)},h$=function(t){return typeof t=="string"&&t.length!==0&&!u$.test(t)},f$=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),h$(t)},GA=function(t,e,n){const r=n instanceof Ue?new q2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+zr(r));if(typeof e=="function")throw new Error(t+"contains a function "+zr(r)+" with contents = "+e.toString());if(z0(e))throw new Error(t+"contains "+e.toString()+" "+zr(r));if(typeof e=="string"&&e.length>vh/3&&$c(e)>vh)throw new Error(t+"contains a string greater than "+vh+" utf8 bytes "+zr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(sn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!zA(o)))throw new Error(t+" contains an invalid key ("+o+") "+zr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);K2(r,o),GA(t,a,r),z2(r)}),s&&i)throw new Error(t+' contains ".value" child '+zr(r)+" in addition to actual children.")}},d$=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zA(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!f$(n))throw new Error(LP(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class p${constructor(){this.eventLists_=[],this.recursionDepth_=0}}function g$(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!mA(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function bs(t,e,n){g$(t,n),m$(t,r=>hn(r,e)||hn(e,r))}function m$(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(_$(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function _$(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();as&&Et("event: "+n.toString()),Ma(r)}}}/**
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
 */const y$="repo_interrupt",v$=25;class E${constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new p$,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_c(),this.transactionQueueTree_=new og,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function T$(t,e,n){if(t.stats_=zp(t.repoInfo_),t.forceRestClient_||g2())t.server_=new mc(t.repoInfo_,(r,s,i,o)=>{Hy(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>jy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{dt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Zn(t.repoInfo_,e,(r,s,i,o)=>{Hy(t,r,s,i,o)},r=>{jy(t,r)},r=>{I$(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=T2(t.repoInfo_,()=>new EU(t.stats_,t.server_)),t.infoData_=new gU,t.infoSyncTree_=new $y({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Su(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),lg(t,"connected",!1),t.serverSyncTree_=new $y({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);bs(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function w$(t){const n=t.infoData_.getNode(new Ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function QA(t){return t$({timestamp:w$(t)})}function Hy(t,e,n,r,s){t.dataUpdateCount++;const i=new Ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=$l(n,c=>Tt(c));o=e$(t.serverSyncTree_,i,l,s)}else{const l=Tt(n);o=ZU(t.serverSyncTree_,i,l,s)}else if(r){const l=$l(n,c=>Tt(c));o=JU(t.serverSyncTree_,i,l)}else{const l=Tt(n);o=Su(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=ug(t,i)),bs(t.eventQueue_,a,o)}function jy(t,e){lg(t,"connected",e),e===!1&&R$(t)}function I$(t,e){sn(e,(n,r)=>{lg(t,n,r)})}function lg(t,e,n){const r=new Ue("/.info/"+e),s=Tt(n);t.infoData_.updateSnapshot(r,s);const i=Su(t.infoSyncTree_,r,s);bs(t.eventQueue_,r,i)}function A$(t){return t.nextWriteId_++}function R$(t){YA(t,"onDisconnectEvents");const e=QA(t),n=_c();Bf(t.onDisconnect_,ke(),(s,i)=>{const o=s$(s,i,t.serverSyncTree_,e);IA(n,s,o)});let r=[];Bf(n,ke(),(s,i)=>{r=r.concat(Su(t.serverSyncTree_,s,i));const o=P$(t,s);ug(t,o)}),t.onDisconnect_=_c(),bs(t.eventQueue_,ke(),r)}function C$(t){t.persistentConnection_&&t.persistentConnection_.interrupt(y$)}function YA(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Et(n,...e)}function XA(t,e,n){return FA(t.serverSyncTree_,e,n)||Ae.EMPTY_NODE}function cg(t,e=t.transactionQueueTree_){if(e||Nu(t,e),$i(e)){const n=ZA(t,e);F(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&b$(t,Va(e),n)}else qA(e)&&ku(e,n=>{cg(t,n)})}function b$(t,e,n){const r=n.map(c=>c.currentWriteId),s=XA(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];F(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=en(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{YA(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(js(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Nu(t,ag(t.transactionQueueTree_,e)),cg(t,t.transactionQueueTree_),bs(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Ma(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{zt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}ug(t,e)}},o)}function ug(t,e){const n=JA(t,e),r=Va(n),s=ZA(t,n);return S$(t,s,r),r}function S$(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=en(n,l.path);let u=!1,h;if(F(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(js(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=v$)u=!0,h="maxretry",s=s.concat(js(t.serverSyncTree_,l.currentWriteId,!0));else{const f=XA(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){GA("transaction failed: Data returned ",d,l.path);let p=Tt(d);typeof d=="object"&&d!=null&&ur(d,".priority")||(p=p.updatePriority(f.getPriority()));const T=l.currentWriteId,v=QA(t),m=i$(p,f,v);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=m,l.currentWriteId=A$(t),o.splice(o.indexOf(T),1),s=s.concat(XU(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),s=s.concat(js(t.serverSyncTree_,T,!0))}else u=!0,h="nodata",s=s.concat(js(t.serverSyncTree_,l.currentWriteId,!0))}bs(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Nu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ma(r[a]);cg(t,t.transactionQueueTree_)}function JA(t,e){let n,r=t.transactionQueueTree_;for(n=ge(e);n!==null&&$i(r)===void 0;)r=ag(r,n),e=Me(e),n=ge(e);return r}function ZA(t,e){const n=[];return eR(t,e,n),n.sort((r,s)=>r.order-s.order),n}function eR(t,e,n){const r=$i(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);ku(e,s=>{eR(t,s,n)})}function Nu(t,e){const n=$i(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,WA(e,n.length>0?n:void 0)}ku(e,r=>{Nu(t,r)})}function P$(t,e){const n=Va(JA(t,e)),r=ag(t.transactionQueueTree_,e);return a$(r,s=>{Eh(t,s)}),Eh(t,r),KA(r,s=>{Eh(t,s)}),n}function Eh(t,e){const n=$i(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(F(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(F(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(js(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?WA(e,void 0):n.length=i+1,bs(t.eventQueue_,Va(e),s);for(let o=0;o<r.length;o++)Ma(r[o])}}/**
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
 */function k$(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function N$(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):zt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Wy=function(t,e){const n=O$(t),r=n.namespace;n.domain==="firebase.com"&&_s(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&_s("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||a2();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new y2(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Ue(n.pathString)}},O$=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=k$(t.substring(u,h)));const f=N$(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */class hg{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return he(this._path)?null:dA(this._path)}get ref(){return new Bi(this._repo,this._path)}get _queryIdentifier(){const e=Py(this._queryParams),n=qp(e);return n==="{}"?"default":n}get _queryObject(){return Py(this._queryParams)}isEqual(e){if(e=Pt(e),!(e instanceof hg))return!1;const n=this._repo===e._repo,r=mA(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+W2(this._path)}}class Bi extends hg{constructor(e,n){super(e,n,new Xp,!1)}get parent(){const e=gA(this._path);return e===null?null:new Bi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}QU(Bi);YU(Bi);/**
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
 */const D$="FIREBASE_DATABASE_EMULATOR_HOST",Qf={};let x$=!1;function M$(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||_s("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Et("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Wy(i,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[D$]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=Wy(i,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Ff(Ff.OWNER):new _2(t.name,t.options,e);d$("Invalid Firebase Database URL",o),he(o.path)||_s("Database URL must point to the root of a Firebase Database (not including a child path).");const h=V$(a,t,u,new m2(t.name,n));return new F$(h,t)}function L$(t,e){const n=Qf[e];(!n||n[t.key]!==t)&&_s(`Database ${e}(${t.repoInfo_}) has already been deleted.`),C$(t),delete n[t.key]}function V$(t,e,n,r){let s=Qf[e.name];s||(s={},Qf[e.name]=s);let i=s[t.toURLString()];return i&&_s("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new E$(t,x$,n,r),s[t.toURLString()]=i,i}class F${constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(T$(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Bi(this._repo,ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(L$(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_s("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function U$(t){n2(Fr),Vn(new _n("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return M$(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Kt(hy,fy,t),Kt(hy,fy,"esm2017")}Zn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Zn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};U$();/**
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
 */const tR="firebasestorage.googleapis.com",nR="storageBucket",$$=2*60*1e3,B$=10*60*1e3;/**
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
 */class ct extends Un{constructor(e,n,r=0){super(Th(e),`Firebase Storage: ${n} (${Th(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ct.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Th(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var at;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(at||(at={}));function Th(t){return"storage/"+t}function rR(){const t="An unknown error occurred, please check the error payload for server response.";return new ct(at.UNKNOWN,t)}function H$(t){return new ct(at.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function j$(t){return new ct(at.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function W$(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ct(at.UNAUTHENTICATED,t)}function q$(){return new ct(at.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function K$(t){return new ct(at.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function z$(){return new ct(at.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function G$(){return new ct(at.CANCELED,"User canceled the upload/download.")}function Q$(t){return new ct(at.INVALID_URL,"Invalid URL '"+t+"'.")}function Y$(t){return new ct(at.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function X$(){return new ct(at.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+nR+"' property when initializing the app?")}function J$(){return new ct(at.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Yf(t){return new ct(at.INVALID_ARGUMENT,t)}function sR(){return new ct(at.APP_DELETED,"The Firebase app was deleted.")}function Z$(t){return new ct(at.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function eo(t){throw new ct(at.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=qt.makeFromUrl(e,n)}catch{return new qt(e,"")}if(r.path==="")return r;throw Y$(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),p={bucket:1,path:3},y=n===tR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",v=new RegExp(`^https?://${y}/${s}/${T}`,"i"),I=[{regex:a,indices:l,postModify:i},{regex:d,indices:p,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<I.length;E++){const b=I[E],D=b.regex.exec(e);if(D){const M=D[b.indices.bucket];let P=D[b.indices.path];P||(P=""),r=new qt(M,P),b.postModify(r);break}}if(r==null)throw Q$(e);return r}}class eB{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function tB(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...T){c||(c=!0,e.apply(null,T))}function h(T){s=setTimeout(()=>{s=null,t(d,l())},T)}function f(){i&&clearTimeout(i)}function d(T,...v){if(c){f();return}if(T){f(),u.call(null,T,...v);return}if(l()||o){f(),u.call(null,T,...v);return}r<64&&(r*=2);let I;a===1?(a=2,I=0):I=(r+Math.random())*1e3,h(I)}let p=!1;function y(T){p||(p=!0,f(),!c&&(s!==null?(T||(a=2),clearTimeout(s),h(0)):T||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function nB(t){t(!1)}/**
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
 */function rB(t){return t!==void 0}function sB(t){return typeof t=="object"&&!Array.isArray(t)}function iR(t){return typeof t=="string"||t instanceof String}function qy(t,e,n,r){if(r<e)throw Yf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Yf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function oR(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function aR(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var ls;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ls||(ls={}));/**
 * @license
 * Copyright 2022 Google LLC
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
 */function iB(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class oB{constructor(e,n,r,s,i,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ul(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ls.NO_ERROR,l=i.getStatus();if(!a||iB(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===ls.ABORT;r(!1,new ul(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new ul(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());rB(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=rR();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?sR():G$();o(l)}else{const l=z$();o(l)}};this.canceled_?n(!1,new ul(!1,null,!0)):this.backoffId_=tB(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&nB(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ul{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function aB(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function lB(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function cB(t,e){e&&(t["X-Firebase-GMPID"]=e)}function uB(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function hB(t,e,n,r,s,i,o=!0){const a=aR(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return cB(c,e),aB(c,n),lB(c,i),uB(c,r),new oB(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function lR(t){let e;try{e=JSON.parse(t)}catch{return null}return sB(e)?e:null}/**
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
 */function fB(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function dB(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function cR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function pB(t,e){return e}class Nt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||pB}}let hl=null;function gB(t){return!iR(t)||t.length<2?t:cR(t)}function mB(){if(hl)return hl;const t=[];t.push(new Nt("bucket")),t.push(new Nt("generation")),t.push(new Nt("metageneration")),t.push(new Nt("name","fullPath",!0));function e(i,o){return gB(o)}const n=new Nt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Nt("size");return s.xform=r,t.push(s),t.push(new Nt("timeCreated")),t.push(new Nt("updated")),t.push(new Nt("md5Hash",null,!0)),t.push(new Nt("cacheControl",null,!0)),t.push(new Nt("contentDisposition",null,!0)),t.push(new Nt("contentEncoding",null,!0)),t.push(new Nt("contentLanguage",null,!0)),t.push(new Nt("contentType",null,!0)),t.push(new Nt("metadata","customMetadata",!0)),hl=t,hl}function _B(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new qt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function yB(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return _B(r,t),r}function vB(t,e,n){const r=lR(e);return r===null?null:yB(t,r,n)}function EB(t,e,n,r){const s=lR(e);if(s===null||!iR(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),d=oR(f,n,r),p=aR({alt:"media",token:c});return d+p})[0]}class TB{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function wB(t){if(!t)throw rR()}function IB(t,e){function n(r,s){const i=vB(t,s,e);return wB(i!==null),EB(i,s,t.host,t._protocol)}return n}function AB(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=q$():s=W$():n.getStatus()===402?s=j$(t.bucket):n.getStatus()===403?s=K$(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function RB(t){const e=AB(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=H$(t.path)),i.serverResponse=s.serverResponse,i}return n}function CB(t,e,n){const r=e.fullServerUrl(),s=oR(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new TB(s,i,IB(t,n),o);return a.errorHandler=RB(e),a}class bB{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ls.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ls.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ls.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw eo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw eo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw eo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw eo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw eo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class SB extends bB{initXhr(){this.xhr_.responseType="text"}}function PB(){return new SB}/**
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
 */class Ts{constructor(e,n){this._service=e,n instanceof qt?this._location=n:this._location=qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ts(e,n)}get root(){const e=new qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cR(this._location.path)}get storage(){return this._service}get parent(){const e=fB(this._location.path);if(e===null)return null;const n=new qt(this._location.bucket,e);return new Ts(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Z$(e)}}function kB(t){t._throwIfRoot("getDownloadURL");const e=CB(t.storage,t._location,mB());return t.storage.makeRequestWithTokens(e,PB).then(n=>{if(n===null)throw J$();return n})}function NB(t,e){const n=dB(t._location.path,e),r=new qt(t._location.bucket,n);return new Ts(t.storage,r)}/**
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
 */function OB(t){return/^[A-Za-z]+:\/\//.test(t)}function DB(t,e){return new Ts(t,e)}function uR(t,e){if(t instanceof fg){const n=t;if(n._bucket==null)throw X$();const r=new Ts(n,n._bucket);return e!=null?uR(r,e):r}else return e!==void 0?NB(t,e):t}function xB(t,e){if(e&&OB(e)){if(t instanceof fg)return DB(t,e);throw Yf("To use ref(service, url), the first argument must be a Storage instance.")}else return uR(t,e)}function Ky(t,e){const n=e==null?void 0:e[nR];return n==null?null:qt.makeFromBucketSpec(n,t)}function MB(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:lT(s,t.app.options.projectId))}class fg{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=tR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$$,this._maxUploadRetryTime=B$,this._requests=new Set,s!=null?this._bucket=qt.makeFromBucketSpec(s,this._host):this._bucket=Ky(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qt.makeFromBucketSpec(this._url,e):this._bucket=Ky(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){qy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){qy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ts(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new eB(sR());{const o=hB(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const zy="@firebase/storage",Gy="0.11.2";/**
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
 */const hR="storage";function aj(t){return t=Pt(t),kB(t)}function lj(t,e){return t=Pt(t),xB(t,e)}function LB(t=Hc(),e){t=Pt(t);const r=Bc(t,hR).getImmediate({identifier:e}),s=iT("storage");return s&&VB(r,...s),r}function VB(t,e,n,r={}){MB(t,e,n,r)}function FB(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new fg(n,r,s,e,Fr)}function UB(){Vn(new _n(hR,FB,"PUBLIC").setMultipleInstances(!0)),Kt(zy,Gy,""),Kt(zy,Gy,"esm2017")}UB();const wh=new WeakMap;function $B(t,e){return wh.has(e)||wh.set(e,t||{f:{},r:{},s:{},u:{}}),wh.get(e)}function cj(t){return ND(Wp(t))}function BB(t){return(e,n)=>{const r=JF(e,n).run(()=>et(t));ZF.set(e,r),t2(r,e)}}function uj(t){return LB(Wp(t))}function HB(t,{firebaseApp:e,modules:n=[]}){t.provide(j0,e);for(const r of n)r(e,t)}const jB=Mt(t=>{const e=t.$firebaseApp;BB(t.payload.vuefireUser)(e,t.vueApp)}),WB=Mt(t=>{const e=t.$firebaseApp,n=$0(e);P0(n,Ih,()=>{Ih(n.currentUser)}),Bp(n,Ih)});async function Ih(t){const e=await(t==null?void 0:t.getIdToken(!0));await $fetch("/api/__session",{method:"POST",body:{token:e}})}const qB=Mt(t=>{var n;const e=t.$firebaseApp;t.vueApp.use(HB,{firebaseApp:e}),(n=t.payload)!=null&&n.vuefire&&$B(t.payload.vuefire,e)}),fn=typeof window<"u",hj=fn&&"IntersectionObserver"in window,KB=fn&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function zB(t,e,n){const r=e.length-1;if(r<0)return t===void 0?n:t;for(let s=0;s<r;s++){if(t==null)return n;t=t[e[s]]}return t==null||t[e[r]]===void 0?n:t[e[r]]}function GB(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(r=>GB(t[r],e[r]))}function Qy(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),zB(t,e.split("."),n))}function fR(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,r)=>e+r)}function fj(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function Yy(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function dj(t){return t&&"$el"in t?t.$el:t}const pj=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function Ah(t,e){return e.every(n=>t.hasOwnProperty(n))}function QB(t,e,n){const r=Object.create(null),s=Object.create(null);for(const i in t)e.some(o=>o instanceof RegExp?o.test(i):o===i)&&!(n!=null&&n.some(o=>o===i))?r[i]=t[i]:s[i]=t[i];return[r,s]}function gj(t){return t==null?[]:Array.isArray(t)?t:[t]}function YB(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function Xy(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function XB(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let r=0;for(;r<t.length;)n.push(t.substr(r,e)),r+=e;return n}function tn(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const s in t)r[s]=t[s];for(const s in e){const i=t[s],o=e[s];if(Yy(i)&&Yy(o)){r[s]=tn(i,o,n);continue}if(Array.isArray(i)&&Array.isArray(o)&&n){r[s]=n(i,o);continue}r[s]=o}return r}function JB(t){return t.map(e=>e.type===yt?JB(e.children):e).flat()}function cs(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(cs.cache.has(t))return cs.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return cs.cache.set(t,e),e}cs.cache=new Map;function Rh(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>Rh(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>Rh(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return Rh(t,e.component.subTree).flat(1)}return[]}function mj(t){const e=rn({}),n=be(t);return ua(()=>{for(const r in n.value)e[r]=n.value[r]},{flush:"sync"}),zv(e)}function _j(t,e){return t.includes(e)}const yj=()=>[Function,Array];function vj(t,e){return e="on"+la(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}const xs=2.4,Jy=.2126729,Zy=.7151522,ev=.072175,ZB=.55,e4=.58,t4=.57,n4=.62,fl=.03,tv=1.45,r4=5e-4,s4=1.25,i4=1.25,nv=.078,rv=12.82051282051282,dl=.06,sv=.001;function iv(t,e){const n=(t.r/255)**xs,r=(t.g/255)**xs,s=(t.b/255)**xs,i=(e.r/255)**xs,o=(e.g/255)**xs,a=(e.b/255)**xs;let l=n*Jy+r*Zy+s*ev,c=i*Jy+o*Zy+a*ev;if(l<=fl&&(l+=(fl-l)**tv),c<=fl&&(c+=(fl-c)**tv),Math.abs(c-l)<r4)return 0;let u;if(c>l){const h=(c**ZB-l**e4)*s4;u=h<sv?0:h<nv?h-h*rv*dl:h-dl}else{const h=(c**n4-l**t4)*i4;u=h>-sv?0:h>-nv?h-h*rv*dl:h+dl}return u*100}const Tc=.20689655172413793,o4=t=>t>Tc**3?Math.cbrt(t):t/(3*Tc**2)+4/29,a4=t=>t>Tc?t**3:3*Tc**2*(t-4/29);function dR(t){const e=o4,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function pR(t){const e=a4,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const l4=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],c4=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,u4=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],h4=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function gR(t){const e=Array(3),n=c4,r=l4;for(let s=0;s<3;++s)e[s]=Math.round(YB(n(r[s][0]*t[0]+r[s][1]*t[1]+r[s][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function dg(t){let{r:e,g:n,b:r}=t;const s=[0,0,0],i=h4,o=u4;e=i(e/255),n=i(n/255),r=i(r/255);for(let a=0;a<3;++a)s[a]=o[a][0]*e+o[a][1]*n+o[a][2]*r;return s}function Ej(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}const ov=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,f4={rgb:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),rgba:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),hsl:(t,e,n,r)=>av({h:t,s:e,l:n,a:r}),hsla:(t,e,n,r)=>av({h:t,s:e,l:n,a:r}),hsv:(t,e,n,r)=>ia({h:t,s:e,v:n,a:r}),hsva:(t,e,n,r)=>ia({h:t,s:e,v:n,a:r})};function Yn(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&ov.test(t)){const{groups:e}=t.match(ov),{fn:n,values:r}=e,s=r.split(/,\s*/).map(i=>i.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(i)/100:parseFloat(i));return f4[n](...s)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),p4(e)}else if(typeof t=="object"){if(Ah(t,["r","g","b"]))return t;if(Ah(t,["h","s","l"]))return ia(mR(t));if(Ah(t,["h","s","v"]))return ia(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function ia(t){const{h:e,s:n,v:r,a:s}=t,i=a=>{const l=(a+e/60)%6;return r-r*n*Math.max(Math.min(l,4-l,1),0)},o=[i(5),i(3),i(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:s}}function av(t){return ia(mR(t))}function mR(t){const{h:e,s:n,l:r,a:s}=t,i=r+n*Math.min(r,1-r),o=i===0?0:2-2*r/i;return{h:e,s:o,v:i,a:s}}function pl(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function d4(t){let{r:e,g:n,b:r,a:s}=t;return`#${[pl(e),pl(n),pl(r),s!==void 0?pl(Math.round(s*255)):""].join("")}`}function p4(t){t=g4(t);let[e,n,r,s]=XB(t,2).map(i=>parseInt(i,16));return s=s===void 0?s:s/255,{r:e,g:n,b:r,a:s}}function g4(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=Xy(Xy(t,6),8,"F")),t}function m4(t,e){const n=dR(dg(t));return n[0]=n[0]+e*10,gR(pR(n))}function _4(t,e){const n=dR(dg(t));return n[0]=n[0]-e*10,gR(pR(n))}function y4(t){const e=Yn(t);return dg(e)[1]}function v4(t){const e=Math.abs(iv(Yn(0),Yn(t)));return Math.abs(iv(Yn(16777215),Yn(t)))>Math.min(e,50)?"#fff":"#000"}function pg(t,e){return n=>Object.keys(t).reduce((r,s)=>{const o=typeof t[s]=="object"&&t[s]!=null&&!Array.isArray(t[s])?t[s]:{type:t[s]};return n&&s in n?r[s]={...o,default:n[s]}:r[s]=o,e&&!r[s].source&&(r[s].source=e),r},{})}function Fa(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=pg(t.props??{},t.name)();const e=Object.keys(t.props);t.filterProps=function(r){return QB(r,e,["class","style"])},t.props._as=String,t.setup=function(r,s){const i=gg();if(!i.value)return t._setup(r,s);const{props:o,provideSubDefaults:a}=A4(r,r._as??t.name,i),l=t._setup(o,s);return a(),l}}return t}function E4(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?Fa:lr)(e)}function Hi(t,e){const n=Vr();if(!n)throw new Error(`[Vuetify] ${t} ${e||"must be called from inside a setup function"}`);return n}function Tj(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=Hi(t).type;return cs((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let _R=0,Rl=new WeakMap;function yR(){const t=Hi("getUid");if(Rl.has(t))return Rl.get(t);{const e=_R++;return Rl.set(t,e),e}}yR.reset=()=>{_R=0,Rl=new WeakMap};function T4(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Hi("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}const Ii=Symbol.for("vuetify:defaults");function w4(t){return et(t)}function gg(){const t=Be(Ii);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function wj(t,e){const n=gg(),r=et(t),s=be(()=>{if(Ce(e==null?void 0:e.disabled))return n.value;const o=Ce(e==null?void 0:e.scoped),a=Ce(e==null?void 0:e.reset),l=Ce(e==null?void 0:e.root);if(r.value==null&&!(o||a||l))return n.value;let c=tn(r.value,{prev:n.value});if(o)return c;if(a||l){const u=Number(a||1/0);for(let h=0;h<=u&&!(!c||!("prev"in c));h++)c=c.prev;return c&&typeof l=="string"&&l in c&&(c=tn(tn(c,{prev:c}),c[l])),c}return c.prev?tn(c.prev,c):c});return On(Ii,s),s}function I4(t,e){var n,r;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((r=t.props)==null?void 0:r[cs(e)])<"u"}function A4(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:gg();const r=Hi("useDefaults");if(e=e??r.type.name??r.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const s=be(()=>{var l;return(l=n.value)==null?void 0:l[t._as??e]}),i=new Proxy(t,{get(l,c){var h,f,d,p;const u=Reflect.get(l,c);return c==="class"||c==="style"?[(h=s.value)==null?void 0:h[c],u].filter(y=>y!=null):typeof c=="string"&&!I4(r.vnode,c)?((f=s.value)==null?void 0:f[c])??((p=(d=n.value)==null?void 0:d.global)==null?void 0:p[c])??u:u}}),o=pn();ua(()=>{if(s.value){const l=Object.entries(s.value).filter(c=>{let[u]=c;return u.startsWith(u[0].toUpperCase())});o.value=l.length?Object.fromEntries(l):void 0}else o.value=void 0});function a(){const l=T4(Ii,r);On(Ii,be(()=>o.value?tn((l==null?void 0:l.value)??{},o.value):l==null?void 0:l.value))}return{props:i,provideSubDefaults:a}}const Ij=["sm","md","lg","xl","xxl"],lv=Symbol.for("vuetify:display"),cv={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},R4=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:cv;return tn(cv,t)};function uv(t){return fn&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function hv(t){return fn&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function fv(t){const e=fn&&!t?window.navigator.userAgent:"ssr";function n(p){return!!e.match(p)}const r=n(/android/i),s=n(/iphone|ipad|ipod/i),i=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),l=n(/edge/i),c=n(/firefox/i),u=n(/opera/i),h=n(/win/i),f=n(/mac/i),d=n(/linux/i);return{android:r,ios:s,cordova:i,electron:o,chrome:a,edge:l,firefox:c,opera:u,win:h,mac:f,linux:d,touch:KB,ssr:e==="ssr"}}function C4(t,e){const{thresholds:n,mobileBreakpoint:r}=R4(t),s=pn(hv(e)),i=pn(fv(e)),o=rn({}),a=pn(uv(e));function l(){s.value=hv(),a.value=uv()}function c(){l(),i.value=fv()}return ua(()=>{const u=a.value<n.sm,h=a.value<n.md&&!u,f=a.value<n.lg&&!(h||u),d=a.value<n.xl&&!(f||h||u),p=a.value<n.xxl&&!(d||f||h||u),y=a.value>=n.xxl,T=u?"xs":h?"sm":f?"md":d?"lg":p?"xl":"xxl",v=typeof r=="number"?r:n[r],m=a.value<v;o.xs=u,o.sm=h,o.md=f,o.lg=d,o.xl=p,o.xxl=y,o.smAndUp=!u,o.mdAndUp=!(u||h),o.lgAndUp=!(u||h||f),o.xlAndUp=!(u||h||f||d),o.smAndDown=!(f||d||p||y),o.mdAndDown=!(d||p||y),o.lgAndDown=!(p||y),o.xlAndDown=!y,o.name=T,o.height=s.value,o.width=a.value,o.mobile=m,o.mobileBreakpoint=r,o.platform=i.value,o.thresholds=n}),fn&&window.addEventListener("resize",l,{passive:!0}),{...zv(o),update:c,ssr:!!e}}const b4={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar"},S4={component:t=>$t(ER,{...t,class:"mdi"})},P4=[String,Function,Object,Array],Xf=Symbol.for("vuetify:icons"),Ou=pg({icon:{type:P4},tag:{type:String,required:!0}},"icon"),dv=E4()({name:"VComponentIcon",props:Ou(),setup(t,e){let{slots:n}=e;return()=>{const r=t.icon;return ve(t.tag,null,{default:()=>{var s;return[t.icon?ve(r,null,null):(s=n.default)==null?void 0:s.call(n)]}})}}}),vR=Fa({name:"VSvgIcon",inheritAttrs:!1,props:Ou(),setup(t,e){let{attrs:n}=e;return()=>ve(t.tag,bd(n,{style:null}),{default:()=>[ve("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(r=>Array.isArray(r)?ve("path",{d:r[0],"fill-opacity":r[1]},null):ve("path",{d:r},null)):ve("path",{d:t.icon},null)])]})}});Ou();const ER=Fa({name:"VClassIcon",props:Ou(),setup(t){return()=>ve(t.tag,{class:t.icon},null)}}),k4={svg:{component:vR},class:{component:ER}};function N4(t){return tn({defaultSet:"mdi",sets:{...k4,mdi:S4},aliases:{...b4,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"}},t)}const Aj=t=>{const e=Be(Xf);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:be(()=>{var l;const r=Ce(t);if(!r)return{component:dv};let s=r;if(typeof s=="string"&&(s=s.trim(),s.startsWith("$")&&(s=(l=e.aliases)==null?void 0:l[s.slice(1)])),!s)throw new Error(`Could not find aliased icon "${r}"`);if(Array.isArray(s))return{component:vR,icon:s};if(typeof s!="string")return{component:dv,icon:s};const i=Object.keys(e.sets).find(c=>typeof s=="string"&&s.startsWith(`${c}:`)),o=i?s.slice(i.length+1):s;return{component:e.sets[i??e.defaultSet].component,icon:o}})}},O4={badge:"Badge",open:"Open",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{ok:"OK",cancel:"Cancel",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},D4={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1};function x4(t,e){let n;function r(){n=kv(),n.run(()=>e.length?e(()=>{n==null||n.stop(),r()}):e())}gn(t,s=>{s&&!n?r():s||(n==null||n.stop(),n=void 0)},{immediate:!0}),qR(()=>{n==null||n.stop()})}function M4(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:h=>h,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:h=>h;const i=Hi("useProxiedModel"),o=et(t[e]!==void 0?t[e]:n),a=cs(e),c=be(a!==e?()=>{var h,f,d,p;return t[e],!!(((h=i.vnode.props)!=null&&h.hasOwnProperty(e)||(f=i.vnode.props)!=null&&f.hasOwnProperty(a))&&((d=i.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`)||(p=i.vnode.props)!=null&&p.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var h,f;return t[e],!!((h=i.vnode.props)!=null&&h.hasOwnProperty(e)&&((f=i.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${e}`)))});x4(()=>!c.value,()=>{gn(()=>t[e],h=>{o.value=h})});const u=be({get(){const h=t[e];return r(c.value?h:o.value)},set(h){const f=s(h),d=fe(c.value?t[e]:o.value);d===f||r(d)===h||(o.value=f,i==null||i.emit(`update:${e}`,f))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?t[e]:o.value}),u}const pv="$vuetify.",gv=(t,e)=>t.replace(/\{(\d+)\}/g,(n,r)=>String(e[+r])),TR=(t,e,n)=>function(r){for(var s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];if(!r.startsWith(pv))return gv(r,i);const a=r.replace(pv,""),l=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let u=Qy(l,a,null);return u||(`${r}${t.value}`,u=Qy(c,a,null)),u||(u=r),typeof u!="string"&&(u=r),gv(u,i)};function wR(t,e){return(n,r)=>new Intl.NumberFormat([t.value,e.value],r).format(n)}function Ch(t,e,n){const r=M4(t,e,t[e]??n.value);return r.value=t[e]??n.value,gn(n,s=>{t[e]==null&&(r.value=n.value)}),r}function IR(t){return e=>{const n=Ch(e,"locale",t.current),r=Ch(e,"fallback",t.fallback),s=Ch(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:r,messages:s,t:TR(n,r,s),n:wR(n,r),provide:IR({current:n,fallback:r,messages:s})}}}function L4(t){const e=pn((t==null?void 0:t.locale)??"en"),n=pn((t==null?void 0:t.fallback)??"en"),r=et({en:O4,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:r,t:TR(e,n,r),n:wR(e,n),provide:IR({current:e,fallback:n,messages:r})}}const wc=Symbol.for("vuetify:locale");function V4(t){return t.name!=null}function F4(t){const e=t!=null&&t.adapter&&V4(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:L4(t),n=U4(e,t);return{...e,...n}}function Rj(){const t=Be(wc);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");return t}function U4(t,e){const n=et((e==null?void 0:e.rtl)??D4),r=be(()=>n.value[t.current.value]??!1);return{isRtl:r,rtl:n,rtlClasses:be(()=>`v-locale--is-${r.value?"rtl":"ltr"}`)}}function Cj(){const t=Be(wc);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const Ic=Symbol.for("vuetify:theme"),bj=pg({theme:String},"theme"),to={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function $4(){var n,r;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:to;if(!t)return{...to,isDisabled:!0};const e={};for(const[s,i]of Object.entries(t.themes??{})){const o=i.dark||s==="dark"?(n=to.themes)==null?void 0:n.dark:(r=to.themes)==null?void 0:r.light;e[s]=tn(o,i)}return tn(to,{...t,themes:e})}function B4(t){const e=$4(t),n=et(e.defaultTheme),r=et(e.themes),s=be(()=>{const u={};for(const[h,f]of Object.entries(r.value)){const d=u[h]={...f,colors:{...f.colors}};if(e.variations)for(const p of e.variations.colors){const y=d.colors[p];if(y)for(const T of["lighten","darken"]){const v=T==="lighten"?m4:_4;for(const m of fR(e.variations[T],1))d.colors[`${p}-${T}-${m}`]=d4(v(Yn(y),m))}}for(const p of Object.keys(d.colors)){if(/^on-[a-z]/.test(p)||d.colors[`on-${p}`])continue;const y=`on-${p}`,T=Yn(d.colors[p]);d.colors[y]=v4(T)}}return u}),i=be(()=>s.value[n.value]),o=be(()=>{const u=[];i.value.dark&&Wr(u,":root",["color-scheme: dark"]),Wr(u,":root",mv(i.value));for(const[p,y]of Object.entries(s.value))Wr(u,`.v-theme--${p}`,[`color-scheme: ${y.dark?"dark":"normal"}`,...mv(y)]);const h=[],f=[],d=new Set(Object.values(s.value).flatMap(p=>Object.keys(p.colors)));for(const p of d)/^on-[a-z]/.test(p)?Wr(f,`.${p}`,[`color: rgb(var(--v-theme-${p})) !important`]):(Wr(h,`.bg-${p}`,[`--v-theme-overlay-multiplier: var(--v-theme-${p}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${p})) !important`,`color: rgb(var(--v-theme-on-${p})) !important`]),Wr(f,`.text-${p}`,[`color: rgb(var(--v-theme-${p})) !important`]),Wr(f,`.border-${p}`,[`--v-border-color: var(--v-theme-${p})`]));return u.push(...h,...f),u.map((p,y)=>y===0?p:`    ${p}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(u){if(e.isDisabled)return;const h=u._context.provides.usehead;if(h)if(h.push){const f=h.push(a);fn&&gn(o,()=>{f.patch(a)})}else fn?(h.addHeadObjs(be(a)),ua(()=>h.updateDOM())):h.addHeadObjs(a());else{let d=function(){if(typeof document<"u"&&!f){const p=document.createElement("style");p.type="text/css",p.id="vuetify-theme-stylesheet",e.cspNonce&&p.setAttribute("nonce",e.cspNonce),f=p,document.head.appendChild(f)}f&&(f.innerHTML=o.value)},f=fn?document.getElementById("vuetify-theme-stylesheet"):null;fn?gn(o,d,{immediate:!0}):d()}}const c=be(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:e.isDisabled,name:n,themes:r,current:i,computedThemes:s,themeClasses:c,styles:o,global:{name:n,current:i}}}function Sj(t){Hi("provideTheme");const e=Be(Ic,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=be(()=>t.theme??(e==null?void 0:e.name.value)),r=be(()=>e.isDisabled?void 0:`v-theme--${n.value}`),s={...e,name:n,themeClasses:r};return On(Ic,s),s}function Wr(t,e,n){t.push(`${e} {
`,...n.map(r=>`  ${r};
`),`}
`)}function mv(t){const e=t.dark?2:1,n=t.dark?1:2,r=[];for(const[s,i]of Object.entries(t.colors)){const o=Yn(i);r.push(`--v-theme-${s}: ${o.r},${o.g},${o.b}`),s.startsWith("on-")||r.push(`--v-theme-${s}-overlay-multiplier: ${y4(i)>.18?e:n}`)}for(const[s,i]of Object.entries(t.variables)){const o=typeof i=="string"&&i.startsWith("#")?Yn(i):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;r.push(`--v-${s}: ${a??i}`)}return r}const Jf={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function H4(t,e){const n=[];let r=[];const s=AR(t),i=RR(t),o=s.getDay()-Jf[e.slice(-2).toUpperCase()],a=i.getDay()-Jf[e.slice(-2).toUpperCase()];for(let l=0;l<o;l++){const c=new Date(s);c.setDate(c.getDate()-(o-l)),r.push(c)}for(let l=1;l<=i.getDate();l++){const c=new Date(t.getFullYear(),t.getMonth(),l);r.push(c),r.length===7&&(n.push(r),r=[])}for(let l=1;l<7-a;l++){const c=new Date(i);c.setDate(c.getDate()+l),r.push(c)}return n.push(r),n}function AR(t){return new Date(t.getFullYear(),t.getMonth(),1)}function RR(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function j4(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const W4=/([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))/;function q4(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(W4.test(t))return j4(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const _v=new Date(2e3,0,2);function K4(t){const e=Jf[t.slice(-2).toUpperCase()];return fR(7).map(n=>{const r=new Date(_v);return r.setDate(_v.getDate()+e+n),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(r)})}function z4(t,e,n){const r=new Date(t);let s={};switch(e){case"fullDateWithWeekday":s={weekday:"long",day:"numeric",month:"long",year:"numeric"};break;case"normalDateWithWeekday":s={weekday:"short",day:"numeric",month:"short"};break;case"keyboardDate":s={};break;case"monthAndDate":s={month:"long",day:"numeric"};break;case"monthAndYear":s={month:"long",year:"numeric"};break;case"dayOfMonth":s={day:"numeric"};break;default:s={timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,s).format(r)}function G4(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function Q4(t,e){const n=new Date(t);return n.setMonth(n.getMonth()+e),n}function Y4(t){return t.getFullYear()}function X4(t){return t.getMonth()}function J4(t){return new Date(t.getFullYear(),0,1)}function Z4(t){return new Date(t.getFullYear(),11,31)}function eH(t,e){return Zf(t,e[0])&&nH(t,e[1])}function tH(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function Zf(t,e){return t.getTime()>e.getTime()}function nH(t,e){return t.getTime()<e.getTime()}function yv(t,e){return t.getTime()===e.getTime()}function rH(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function sH(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function iH(t,e,n){const r=new Date(t),s=new Date(e);return n==="month"?r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12:Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24))}function oH(t,e){const n=new Date(t);return n.setFullYear(e),n}class aH{constructor(e){this.locale=e.locale}date(e){return q4(e)}toJsDate(e){return e}addDays(e,n){return G4(e,n)}addMonths(e,n){return Q4(e,n)}getWeekArray(e){return H4(e,this.locale)}startOfMonth(e){return AR(e)}endOfMonth(e){return RR(e)}format(e,n){return z4(e,n,this.locale)}isEqual(e,n){return yv(e,n)}isValid(e){return tH(e)}isWithinRange(e,n){return eH(e,n)}isAfter(e,n){return Zf(e,n)}isBefore(e,n){return!Zf(e,n)&&!yv(e,n)}isSameDay(e,n){return rH(e,n)}isSameMonth(e,n){return sH(e,n)}setYear(e,n){return oH(e,n)}getDiff(e,n,r){return iH(e,n,r)}getWeekdays(){return K4(this.locale)}getYear(e){return Y4(e)}getMonth(e){return X4(e)}startOfYear(e){return J4(e)}endOfYear(e){return Z4(e)}}const vv=Symbol.for("vuetify:date-adapter");function lH(t){return tn({adapter:aH,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"nn-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t)}function CR(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,r=tn(e,n),{aliases:s={},components:i={},directives:o={}}=r,a=w4(r.defaults),l=C4(r.display,r.ssr),c=B4(r.theme),u=N4(r.icons),h=F4(r.locale),f=lH(r.date);return{install:p=>{for(const y in o)p.directive(y,o[y]);for(const y in i)p.component(y,i[y]);for(const y in s)p.component(y,Fa({...s[y],name:y,aliasName:s[y].name}));if(c.install(p),p.provide(Ii,a),p.provide(lv,l),p.provide(Ic,c),p.provide(Xf,u),p.provide(wc,h),p.provide(vv,f),fn&&r.ssr)if(p.$nuxt)p.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:y}=p;p.mount=function(){const T=y(...arguments);return Lr(()=>l.update()),p.mount=y,T}}yR.reset(),p.mixin({computed:{$vuetify(){return rn({defaults:Ms.call(this,Ii),display:Ms.call(this,lv),theme:Ms.call(this,Ic),icons:Ms.call(this,Xf),locale:Ms.call(this,wc),date:Ms.call(this,vv)})}}})},defaults:a,display:l,theme:c,icons:u,locale:h,date:f}}const cH="3.3.14";CR.version=cH;function Ms(t){var r,s;const e=this.$,n=((r=e.parent)==null?void 0:r.provides)??((s=e.vnode.appContext)==null?void 0:s.provides);if(n&&t in n)return n[t]}const uH=JSON.parse('{"ssr":true,"treeshaking":true,"useVuetifyLabs":false}'),hH=Mt(t=>{const e=CR(uH);return t.vueApp.use(e),{provide:{vuetify:e}}}),fH=Mt({name:"nuxt:chunk-reload",setup(t){const e=Rs(),n=Fc(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:s})=>{r.add(s)}),e.onError((s,i)=>{if(r.has(s)){const a="href"in i&&i.href.startsWith("#")?n.app.baseURL+i.href:fa(n.app.baseURL,i.fullPath);rM({path:a,persistState:!0})}})}}),dH=[aM,lM,yL,TL,wL,IL,RL,CL,bL,kL,jB,WB,qB,hH,fH],pH=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),ed=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&pH(t.route,n));return typeof r=="function"?r(t.route):r},gH=(t,e)=>({default:()=>t?$t(WC,t===!0?{}:t,e):e}),mH=lr({name:"RouteProvider",props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s]});return On(Sa,ca(r)),()=>$t(t.vnode,{ref:t.vnodeRef})}}),bR=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?$t(t,e,n):(r=n.default)==null?void 0:r.call(n)}}),_H=lr({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,expose:n}){const r=He(),s=et(),i=Be(Sa,null);n({pageRef:s});const o=Be(zI,null);let a;const l=r.deferHydration();return()=>$t(l0,{name:t.name,route:t.route,...e},{default:c=>{const u=EH(i,c.route,c.Component),h=i&&i.matched.length===c.route.matched.length;if(!c.Component)return a&&!h?a:void 0;if(a&&o&&!o.isCurrent(c.route))return a;if(u&&i&&(!o||o!=null&&o.isCurrent(i)))return h?a:null;const f=ed(c,t.pageKey),d=!!(t.transition??c.route.meta.pageTransition??Cf),p=d&&vH([t.transition,c.route.meta.pageTransition,Cf,{onAfterLeave:()=>{r.callHook("page:transition:finish",c.Component)}}].filter(Boolean));return a=bR(Mc,d&&p,gH(t.keepalive??c.route.meta.keepalive??Xx,$t(md,{suspensible:!0,onPending:()=>r.callHook("page:start",c.Component),onResolve:()=>{Lr(()=>r.callHook("page:finish",c.Component).finally(l))}},{default:()=>$t(mH,{key:f,vnode:c.Component,route:c.route,renderKey:f,trackRootNodes:d,vnodeRef:s})}))).default(),a}})}});function yH(t){return Array.isArray(t)?t:t?[t]:[]}function vH(t){const e=t.map(n=>({...n,onAfterLeave:yH(n.onAfterLeave)}));return Sx(...e)}function EH(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&ed({route:e,Component:n})!==ed({route:t,Component:n})}const TH=lr({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const n=await es[t.name]().then(r=>r.default||r);return()=>$t(n,t.layoutProps,e.slots)}}),wH=lr({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const n=He(),r=Be(Sa),s=r===GI()?hL():r,i=be(()=>Ce(t.name)??s.meta.layout??"default"),o=et();e.expose({layoutRef:o});const a=n.deferHydration();return()=>{const l=i.value&&i.value in es,c=s.meta.layoutTransition??Yx;return bR(Mc,l&&c,{default:()=>$t(md,{suspensible:!0,onResolve:()=>{Lr(a)}},{default:()=>$t(IH,{layoutProps:bd(e.attrs,{ref:o}),key:i.value,name:i.value,shouldProvide:!t.name,hasTransition:!!c},e.slots)})}).default()}}}),IH=lr({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&On(zI,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in es)?(s=(r=e.slots).default)==null?void 0:s.call(r):$t(TH,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),AH=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},RH={};function CH(t,e){const n=_H,r=wH;return bn(),qn(r,null,{default:pd(()=>[ve(n)]),_:1})}const bH=AH(RH,[["render",CH]]),SH={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;(n.stack||"").split(`
`).splice(1).map(h=>({text:h.replace("webpack:/","").replace(".vue",".js").trim(),internal:h.includes("node_modules")&&!h.includes(".cache")||h.includes("internal")||h.includes("new Promise")})).map(h=>`<span class="stack${h.internal?" internal":""}">${h.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,u=s?Ng(()=>ut(()=>import("./error-404.50c23890.js"),["./error-404.50c23890.js","./error-404.7fc72018.css"],import.meta.url).then(h=>h.default||h)):Ng(()=>ut(()=>import("./error-500.06a39f80.js"),["./error-500.06a39f80.js","./error-500.c5df6088.css"],import.meta.url).then(h=>h.default||h));return(h,f)=>(bn(),qn(Ce(u),$R(SE({statusCode:Ce(r),statusMessage:Ce(i),description:Ce(o),stack:Ce(a)})),null,16))}},PH=SH,kH={__name:"nuxt-root",setup(t){const e=()=>null,n=He(),r=n.deferHydration(),s=!1;On(Sa,GI()),n.hooks.callHookWith(a=>a.map(l=>l()),"vue:setup");const i=Tu();hE((a,l,c)=>{if(n.hooks.callHook("vue:error",a,l,c).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u)),Fx(a)&&(a.fatal||a.unhandled))return n.runWithContext(()=>$s(a)),!1});const o=!1;return(a,l)=>(bn(),qn(md,{onResolve:Ce(r)},{default:pd(()=>[Ce(i)?(bn(),qn(Ce(PH),{key:0,error:Ce(i)},null,8,["error"])):Ce(o)?(bn(),qn(Ce(e),{key:1,context:Ce(o)},null,8,["context"])):Ce(s)?(bn(),qn(JC(Ce(s)),{key:2})):(bn(),qn(Ce(bH),{key:3}))]),_:1},8,["onResolve"]))}},Ev=kH;globalThis.$fetch||(globalThis.$fetch=YS.create({baseURL:JS()}));let Tv;{let t;Tv=async function(){var i,o;if(t)return t;const r=!!((i=window.__NUXT__)!=null&&i.serverRendered||((o=document.getElementById("__NUXT_DATA__"))==null?void 0:o.dataset.ssr)==="true")?nS(Ev):tS(Ev),s=hP({vueApp:r});try{await dP(s,dH)}catch(a){await s.callHook("app:error",a),s.payload.error=s.payload.error||a}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(Zx),await s.hooks.callHook("app:mounted",r),await Lr()}catch(a){await s.callHook("app:error",a),s.payload.error=s.payload.error||a}return r},t=Tv().catch(e=>{console.error("Error while mounting app:",e)})}export{gn as $,E4 as A,Gv as B,wj as C,bd as D,hL as E,yt as F,oj as G,cj as H,P4 as I,Ce as J,qn as K,uj as L,lj as M,aj as N,YH as O,rj as P,JH as Q,tj as R,ej as S,XH as T,nj as U,BH as V,VH as W,ZH as X,KC as Y,uE as Z,AH as _,Rs as a,On as a$,Op as a0,Vr as a1,la as a2,Ln as a3,nm as a4,fa as a5,Sx as a6,WH as a7,_S as a8,Fc as a9,hT as aA,qH as aB,FH as aC,Wp as aD,ND as aE,sj as aF,_j as aG,fn as aH,dj as aI,Bv as aJ,Cj as aK,Tj as aL,ua as aM,Hi as aN,Ze as aO,mj as aP,Ej as aQ,v4 as aR,Aj as aS,JB as aT,si as aU,zv as aV,JC as aW,vj as aX,Yy as aY,pj as aZ,yR as a_,Mc as aa,hj as ab,pn as ac,Lr as ad,xH as ae,LH as af,fj as ag,jH as ah,bj as ai,Sj as aj,HH as ak,GB as al,yj as am,Rj as an,M4 as ao,$H as ap,Cc as aq,Kt as ar,Vn as as,_n as at,Bc as au,ki as av,Un as aw,Pt as ax,Hc as ay,CP as az,Oc as b,Be as b0,rn as b1,Rh as b2,gj as b3,Ij as b4,be as c,lr as d,$t as e,MH as f,ES as g,Si as h,KE as i,Cx as j,bn as k,UH as l,bE as m,ij as n,Ed as o,Vc as p,ve as q,et as r,pd as s,NH as t,He as u,PE as v,Bh as w,OH as x,DH as y,pg as z};
