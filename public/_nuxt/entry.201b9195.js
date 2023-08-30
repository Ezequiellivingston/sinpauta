function ev(e,t){const n=Object.create(null),i=e.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const dt={},Eo=[],pi=()=>{},y1=()=>!1,_1=/^on[^a-z]/,sc=e=>_1.test(e),tv=e=>e.startsWith("onUpdate:"),Ct=Object.assign,nv=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},b1=Object.prototype.hasOwnProperty,qe=(e,t)=>b1.call(e,t),Te=Array.isArray,Co=e=>rc(e)==="[object Map]",PE=e=>rc(e)==="[object Set]",w1=e=>rc(e)==="[object RegExp]",Re=e=>typeof e=="function",yt=e=>typeof e=="string",iv=e=>typeof e=="symbol",ct=e=>e!==null&&typeof e=="object",xE=e=>ct(e)&&Re(e.then)&&Re(e.catch),VE=Object.prototype.toString,rc=e=>VE.call(e),E1=e=>rc(e).slice(8,-1),NE=e=>rc(e)==="[object Object]",sv=e=>yt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,nl=ev(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pd=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},C1=/-(\w)/g,ei=Pd(e=>e.replace(C1,(t,n)=>n?n.toUpperCase():"")),T1=/\B([A-Z])/g,oa=Pd(e=>e.replace(T1,"-$1").toLowerCase()),hs=Pd(e=>e.charAt(0).toUpperCase()+e.slice(1)),Kh=Pd(e=>e?`on${hs(e)}`:""),Cl=(e,t)=>!Object.is(e,t),To=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},xu=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Gf=e=>{const t=parseFloat(e);return isNaN(t)?e:t},OE=e=>{const t=yt(e)?Number(e):NaN;return isNaN(t)?e:t};let Zy;const Yf=()=>Zy||(Zy=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xd(e){if(Te(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=yt(i)?k1(i):xd(i);if(s)for(const r in s)t[r]=s[r]}return t}else{if(yt(e))return e;if(ct(e))return e}}const I1=/;(?![^(]*\))/g,S1=/:([^]+)/,A1=/\/\*[^]*?\*\//g;function k1(e){const t={};return e.replace(A1,"").split(I1).forEach(n=>{if(n){const i=n.split(S1);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Vd(e){let t="";if(yt(e))t=e;else if(Te(e))for(let n=0;n<e.length;n++){const i=Vd(e[n]);i&&(t+=i+" ")}else if(ct(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function R1(e){if(!e)return null;let{class:t,style:n}=e;return t&&!yt(t)&&(e.class=Vd(t)),n&&(e.style=xd(n)),e}const P1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",x1=ev(P1);function DE(e){return!!e||e===""}const N7=e=>yt(e)?e:e==null?"":Te(e)||ct(e)&&(e.toString===VE||!Re(e.toString))?JSON.stringify(e,LE,2):String(e),LE=(e,t)=>t&&t.__v_isRef?LE(e,t.value):Co(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:PE(t)?{[`Set(${t.size})`]:[...t.values()]}:ct(t)&&!Te(t)&&!NE(t)?String(t):t;let Dn;class ME{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Dn,!t&&Dn&&(this.index=(Dn.scopes||(Dn.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Dn;try{return Dn=this,t()}finally{Dn=n}}}on(){Dn=this}off(){Dn=this.parent}stop(t){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Nd(e){return new ME(e)}function V1(e,t=Dn){t&&t.active&&t.effects.push(e)}function N1(){return Dn}function xn(e){Dn&&Dn.cleanups.push(e)}const rv=e=>{const t=new Set(e);return t.w=0,t.n=0,t},FE=e=>(e.w&Us)>0,BE=e=>(e.n&Us)>0,O1=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Us},D1=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const s=t[i];FE(s)&&!BE(s)?s.delete(e):t[n++]=s,s.w&=~Us,s.n&=~Us}t.length=n}},Vu=new WeakMap;let qa=0,Us=1;const Qf=30;let di;const _r=Symbol(""),Xf=Symbol("");class ov{constructor(t,n=null,i){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,V1(this,i)}run(){if(!this.active)return this.fn();let t=di,n=Ns;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=di,di=this,Ns=!0,Us=1<<++qa,qa<=Qf?O1(this):e_(this),this.fn()}finally{qa<=Qf&&D1(this),Us=1<<--qa,di=this.parent,Ns=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){di===this?this.deferStop=!0:this.active&&(e_(this),this.onStop&&this.onStop(),this.active=!1)}}function e_(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ns=!0;const $E=[];function aa(){$E.push(Ns),Ns=!1}function la(){const e=$E.pop();Ns=e===void 0?!0:e}function Vn(e,t,n){if(Ns&&di){let i=Vu.get(e);i||Vu.set(e,i=new Map);let s=i.get(n);s||i.set(n,s=rv()),UE(s)}}function UE(e,t){let n=!1;qa<=Qf?BE(e)||(e.n|=Us,n=!FE(e)):n=!e.has(di),n&&(e.add(di),di.deps.push(e))}function is(e,t,n,i,s,r){const o=Vu.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&Te(e)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":Te(e)?sv(n)&&a.push(o.get("length")):(a.push(o.get(_r)),Co(e)&&a.push(o.get(Xf)));break;case"delete":Te(e)||(a.push(o.get(_r)),Co(e)&&a.push(o.get(Xf)));break;case"set":Co(e)&&a.push(o.get(_r));break}if(a.length===1)a[0]&&Jf(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Jf(rv(l))}}function Jf(e,t){const n=Te(e)?e:[...e];for(const i of n)i.computed&&t_(i);for(const i of n)i.computed||t_(i)}function t_(e,t){(e!==di||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function L1(e,t){var n;return(n=Vu.get(e))==null?void 0:n.get(t)}const M1=ev("__proto__,__v_isRef,__isVue"),HE=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(iv)),F1=av(),B1=av(!1,!0),$1=av(!0),n_=U1();function U1(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=Me(this);for(let r=0,o=this.length;r<o;r++)Vn(i,"get",r+"");const s=i[t](...n);return s===-1||s===!1?i[t](...n.map(Me)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){aa();const i=Me(this)[t].apply(this,n);return la(),i}}),e}function H1(e){const t=Me(this);return Vn(t,"has",e),t.hasOwnProperty(e)}function av(e=!1,t=!1){return function(i,s,r){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&r===(e?t?sx:KE:t?qE:WE).get(i))return i;const o=Te(i);if(!e){if(o&&qe(n_,s))return Reflect.get(n_,s,r);if(s==="hasOwnProperty")return H1}const a=Reflect.get(i,s,r);return(iv(s)?HE.has(s):M1(s))||(e||Vn(i,"get",s),t)?a:pt(a)?o&&sv(s)?a:a.value:ct(a)?e?ac(a):kt(a):a}}const j1=jE(),z1=jE(!0);function jE(e=!1){return function(n,i,s,r){let o=n[i];if(Rr(o)&&pt(o)&&!pt(s))return!1;if(!e&&(!Nu(s)&&!Rr(s)&&(o=Me(o),s=Me(s)),!Te(n)&&pt(o)&&!pt(s)))return o.value=s,!0;const a=Te(n)&&sv(i)?Number(i)<n.length:qe(n,i),l=Reflect.set(n,i,s,r);return n===Me(r)&&(a?Cl(s,o)&&is(n,"set",i,s):is(n,"add",i,s)),l}}function W1(e,t){const n=qe(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&n&&is(e,"delete",t,void 0),i}function q1(e,t){const n=Reflect.has(e,t);return(!iv(t)||!HE.has(t))&&Vn(e,"has",t),n}function K1(e){return Vn(e,"iterate",Te(e)?"length":_r),Reflect.ownKeys(e)}const zE={get:F1,set:j1,deleteProperty:W1,has:q1,ownKeys:K1},G1={get:$1,set(e,t){return!0},deleteProperty(e,t){return!0}},Y1=Ct({},zE,{get:B1,set:z1}),lv=e=>e,Od=e=>Reflect.getPrototypeOf(e);function Hc(e,t,n=!1,i=!1){e=e.__v_raw;const s=Me(e),r=Me(t);n||(t!==r&&Vn(s,"get",t),Vn(s,"get",r));const{has:o}=Od(s),a=i?lv:n?dv:Tl;if(o.call(s,t))return a(e.get(t));if(o.call(s,r))return a(e.get(r));e!==s&&e.get(t)}function jc(e,t=!1){const n=this.__v_raw,i=Me(n),s=Me(e);return t||(e!==s&&Vn(i,"has",e),Vn(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function zc(e,t=!1){return e=e.__v_raw,!t&&Vn(Me(e),"iterate",_r),Reflect.get(e,"size",e)}function i_(e){e=Me(e);const t=Me(this);return Od(t).has.call(t,e)||(t.add(e),is(t,"add",e,e)),this}function s_(e,t){t=Me(t);const n=Me(this),{has:i,get:s}=Od(n);let r=i.call(n,e);r||(e=Me(e),r=i.call(n,e));const o=s.call(n,e);return n.set(e,t),r?Cl(t,o)&&is(n,"set",e,t):is(n,"add",e,t),this}function r_(e){const t=Me(this),{has:n,get:i}=Od(t);let s=n.call(t,e);s||(e=Me(e),s=n.call(t,e)),i&&i.call(t,e);const r=t.delete(e);return s&&is(t,"delete",e,void 0),r}function o_(){const e=Me(this),t=e.size!==0,n=e.clear();return t&&is(e,"clear",void 0,void 0),n}function Wc(e,t){return function(i,s){const r=this,o=r.__v_raw,a=Me(o),l=t?lv:e?dv:Tl;return!e&&Vn(a,"iterate",_r),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function qc(e,t,n){return function(...i){const s=this.__v_raw,r=Me(s),o=Co(r),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=s[e](...i),u=n?lv:t?dv:Tl;return!t&&Vn(r,"iterate",l?Xf:_r),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function bs(e){return function(...t){return e==="delete"?!1:this}}function Q1(){const e={get(r){return Hc(this,r)},get size(){return zc(this)},has:jc,add:i_,set:s_,delete:r_,clear:o_,forEach:Wc(!1,!1)},t={get(r){return Hc(this,r,!1,!0)},get size(){return zc(this)},has:jc,add:i_,set:s_,delete:r_,clear:o_,forEach:Wc(!1,!0)},n={get(r){return Hc(this,r,!0)},get size(){return zc(this,!0)},has(r){return jc.call(this,r,!0)},add:bs("add"),set:bs("set"),delete:bs("delete"),clear:bs("clear"),forEach:Wc(!0,!1)},i={get(r){return Hc(this,r,!0,!0)},get size(){return zc(this,!0)},has(r){return jc.call(this,r,!0)},add:bs("add"),set:bs("set"),delete:bs("delete"),clear:bs("clear"),forEach:Wc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=qc(r,!1,!1),n[r]=qc(r,!0,!1),t[r]=qc(r,!1,!0),i[r]=qc(r,!0,!0)}),[e,n,t,i]}const[X1,J1,Z1,ex]=Q1();function cv(e,t){const n=t?e?ex:Z1:e?J1:X1;return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(qe(n,s)&&s in i?n:i,s,r)}const tx={get:cv(!1,!1)},nx={get:cv(!1,!0)},ix={get:cv(!0,!1)},WE=new WeakMap,qE=new WeakMap,KE=new WeakMap,sx=new WeakMap;function rx(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ox(e){return e.__v_skip||!Object.isExtensible(e)?0:rx(E1(e))}function kt(e){return Rr(e)?e:uv(e,!1,zE,tx,WE)}function oc(e){return uv(e,!1,Y1,nx,qE)}function ac(e){return uv(e,!0,G1,ix,KE)}function uv(e,t,n,i,s){if(!ct(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const o=ox(e);if(o===0)return e;const a=new Proxy(e,o===2?i:n);return s.set(e,a),a}function Io(e){return Rr(e)?Io(e.__v_raw):!!(e&&e.__v_isReactive)}function Rr(e){return!!(e&&e.__v_isReadonly)}function Nu(e){return!!(e&&e.__v_isShallow)}function GE(e){return Io(e)||Rr(e)}function Me(e){const t=e&&e.__v_raw;return t?Me(t):e}function Ou(e){return xu(e,"__v_skip",!0),e}const Tl=e=>ct(e)?kt(e):e,dv=e=>ct(e)?ac(e):e;function YE(e){Ns&&di&&(e=Me(e),UE(e.dep||(e.dep=rv())))}function QE(e,t){e=Me(e);const n=e.dep;n&&Jf(n)}function pt(e){return!!(e&&e.__v_isRef===!0)}function Z(e){return XE(e,!1)}function le(e){return XE(e,!0)}function XE(e,t){return pt(e)?e:new ax(e,t)}class ax{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Me(t),this._value=n?t:Tl(t)}get value(){return YE(this),this._value}set value(t){const n=this.__v_isShallow||Nu(t)||Rr(t);t=n?t:Me(t),Cl(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Tl(t),QE(this))}}function $e(e){return pt(e)?e.value:e}const lx={get:(e,t,n)=>$e(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return pt(s)&&!pt(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function JE(e){return Io(e)?e:new Proxy(e,lx)}function hv(e){const t=Te(e)?new Array(e.length):{};for(const n in e)t[n]=ZE(e,n);return t}class cx{constructor(t,n,i){this._object=t,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return L1(Me(this._object),this._key)}}class ux{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Y(e,t,n){return pt(e)?e:Re(e)?new ux(e):ct(e)&&arguments.length>1?ZE(e,t,n):Z(e)}function ZE(e,t,n){const i=e[t];return pt(i)?i:new cx(e,t,n)}class dx{constructor(t,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ov(t,()=>{this._dirty||(this._dirty=!0,QE(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const t=Me(this);return YE(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function hx(e,t,n=!1){let i,s;const r=Re(e);return r?(i=e,s=pi):(i=e.get,s=e.set),new dx(i,s,r||!s,n)}function Os(e,t,n,i){let s;try{s=i?e(...i):e()}catch(r){ca(r,t,n)}return s}function Jn(e,t,n,i){if(Re(e)){const r=Os(e,t,n,i);return r&&xE(r)&&r.catch(o=>{ca(o,t,n)}),r}const s=[];for(let r=0;r<e.length;r++)s.push(Jn(e[r],t,n,i));return s}function ca(e,t,n,i=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,a)===!1)return}r=r.parent}const l=t.appContext.config.errorHandler;if(l){Os(l,null,10,[e,o,a]);return}}fx(e,n,s,i)}function fx(e,t,n,i=!0){console.error(e)}let Il=!1,Zf=!1;const cn=[];let Ri=0;const So=[];let Gi=null,cr=0;const eC=Promise.resolve();let fv=null;function Ye(e){const t=fv||eC;return e?t.then(this?e.bind(this):e):t}function mx(e){let t=Ri+1,n=cn.length;for(;t<n;){const i=t+n>>>1;Sl(cn[i])<e?t=i+1:n=i}return t}function Dd(e){(!cn.length||!cn.includes(e,Il&&e.allowRecurse?Ri+1:Ri))&&(e.id==null?cn.push(e):cn.splice(mx(e.id),0,e),tC())}function tC(){!Il&&!Zf&&(Zf=!0,fv=eC.then(iC))}function gx(e){const t=cn.indexOf(e);t>Ri&&cn.splice(t,1)}function nC(e){Te(e)?So.push(...e):(!Gi||!Gi.includes(e,e.allowRecurse?cr+1:cr))&&So.push(e),tC()}function a_(e,t=Il?Ri+1:0){for(;t<cn.length;t++){const n=cn[t];n&&n.pre&&(cn.splice(t,1),t--,n())}}function Du(e){if(So.length){const t=[...new Set(So)];if(So.length=0,Gi){Gi.push(...t);return}for(Gi=t,Gi.sort((n,i)=>Sl(n)-Sl(i)),cr=0;cr<Gi.length;cr++)Gi[cr]();Gi=null,cr=0}}const Sl=e=>e.id==null?1/0:e.id,vx=(e,t)=>{const n=Sl(e)-Sl(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function iC(e){Zf=!1,Il=!0,cn.sort(vx);const t=pi;try{for(Ri=0;Ri<cn.length;Ri++){const n=cn[Ri];n&&n.active!==!1&&Os(n,null,14)}}finally{Ri=0,cn.length=0,Du(),Il=!1,fv=null,(cn.length||So.length)&&iC()}}function px(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||dt;let s=n;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=i[u]||dt;h&&(s=n.map(f=>yt(f)?f.trim():f)),d&&(s=n.map(Gf))}let a,l=i[a=Kh(t)]||i[a=Kh(ei(t))];!l&&r&&(l=i[a=Kh(oa(t))]),l&&Jn(l,e,6,s);const c=i[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Jn(c,e,6,s)}}function sC(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let o={},a=!1;if(!Re(e)){const l=c=>{const u=sC(c,t,!0);u&&(a=!0,Ct(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(ct(e)&&i.set(e,null),null):(Te(r)?r.forEach(l=>o[l]=null):Ct(o,r),ct(e)&&i.set(e,o),o)}function Ld(e,t){return!e||!sc(t)?!1:(t=t.slice(2).replace(/Once$/,""),qe(e,t[0].toLowerCase()+t.slice(1))||qe(e,oa(t))||qe(e,t))}let Ut=null,Md=null;function Lu(e){const t=Ut;return Ut=e,Md=e&&e.type.__scopeId||null,t}function O7(e){Md=e}function D7(){Md=null}function mv(e,t=Ut,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&E_(-1);const r=Lu(t);let o;try{o=e(...s)}finally{Lu(r),i._d&&E_(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Gh(e){const{type:t,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:f,ctx:g,inheritAttrs:v}=e;let _,p;const y=Lu(e);try{if(n.shapeFlag&4){const b=s||i;_=Kn(u.call(b,b,d,r,f,h,g)),p=l}else{const b=t;_=Kn(b.length>1?b(r,{attrs:l,slots:a,emit:c}):b(r,null)),p=t.props?l:_x(l)}}catch(b){ol.length=0,ca(b,e,1),_=m(Sn)}let E=_;if(p&&v!==!1){const b=Object.keys(p),{shapeFlag:S}=E;b.length&&S&7&&(o&&b.some(tv)&&(p=bx(p,o)),E=Bi(E,p))}return n.dirs&&(E=Bi(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),_=E,Lu(y),_}function yx(e){let t;for(let n=0;n<e.length;n++){const i=e[n];if(Bo(i)){if(i.type!==Sn||i.children==="v-if"){if(t)return;t=i}}else return}return t}const _x=e=>{let t;for(const n in e)(n==="class"||n==="style"||sc(n))&&((t||(t={}))[n]=e[n]);return t},bx=(e,t)=>{const n={};for(const i in e)(!tv(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function wx(e,t,n){const{props:i,children:s,component:r}=e,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?l_(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==i[h]&&!Ld(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?l_(i,o,c):!0:!!o;return!1}function l_(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==e[r]&&!Ld(n,r))return!0}return!1}function gv({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const rC=e=>e.__isSuspense,Ex={name:"Suspense",__isSuspense:!0,process(e,t,n,i,s,r,o,a,l,c){e==null?Cx(t,n,i,s,r,o,a,l,c):Tx(e,t,n,i,s,o,a,l,c)},hydrate:Ix,create:pv,normalize:Sx},vv=Ex;function Al(e,t){const n=e.props&&e.props[t];Re(n)&&n()}function Cx(e,t,n,i,s,r,o,a,l){const{p:c,o:{createElement:u}}=l,d=u("div"),h=e.suspense=pv(e,s,i,t,d,n,r,o,a,l);c(null,h.pendingBranch=e.ssContent,d,null,i,h,r,o),h.deps>0?(Al(e,"onPending"),Al(e,"onFallback"),c(null,e.ssFallback,t,n,i,null,r,o),Ao(h,e.ssFallback)):h.resolve(!1,!0)}function Tx(e,t,n,i,s,r,o,a,{p:l,um:c,o:{createElement:u}}){const d=t.suspense=e.suspense;d.vnode=t,t.el=e.el;const h=t.ssContent,f=t.ssFallback,{activeBranch:g,pendingBranch:v,isInFallback:_,isHydrating:p}=d;if(v)d.pendingBranch=h,hi(h,v)?(l(v,h,d.hiddenContainer,null,s,d,r,o,a),d.deps<=0?d.resolve():_&&(l(g,f,n,i,s,null,r,o,a),Ao(d,f))):(d.pendingId++,p?(d.isHydrating=!1,d.activeBranch=v):c(v,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u("div"),_?(l(null,h,d.hiddenContainer,null,s,d,r,o,a),d.deps<=0?d.resolve():(l(g,f,n,i,s,null,r,o,a),Ao(d,f))):g&&hi(h,g)?(l(g,h,n,i,s,d,r,o,a),d.resolve(!0)):(l(null,h,d.hiddenContainer,null,s,d,r,o,a),d.deps<=0&&d.resolve()));else if(g&&hi(h,g))l(g,h,n,i,s,d,r,o,a),Ao(d,h);else if(Al(t,"onPending"),d.pendingBranch=h,d.pendingId++,l(null,h,d.hiddenContainer,null,s,d,r,o,a),d.deps<=0)d.resolve();else{const{timeout:y,pendingId:E}=d;y>0?setTimeout(()=>{d.pendingId===E&&d.fallback(f)},y):y===0&&d.fallback(f)}}function pv(e,t,n,i,s,r,o,a,l,c,u=!1){const{p:d,m:h,um:f,n:g,o:{parentNode:v,remove:_}}=c;let p;const y=Ax(e);y&&t!=null&&t.pendingBranch&&(p=t.pendingId,t.deps++);const E=e.props?OE(e.props.timeout):void 0,b={vnode:e,parent:t,parentComponent:n,isSVG:o,container:i,hiddenContainer:s,anchor:r,deps:0,pendingId:0,timeout:typeof E=="number"?E:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(S=!1,A=!1){const{vnode:k,activeBranch:C,pendingBranch:T,pendingId:R,effects:N,parentComponent:x,container:O}=b;if(b.isHydrating)b.isHydrating=!1;else if(!S){const X=C&&T.transition&&T.transition.mode==="out-in";X&&(C.transition.afterLeave=()=>{R===b.pendingId&&h(T,O,B,0)});let{anchor:B}=b;C&&(B=g(C),f(C,x,b,!0)),X||h(T,O,B,0)}Ao(b,T),b.pendingBranch=null,b.isInFallback=!1;let D=b.parent,J=!1;for(;D;){if(D.pendingBranch){D.effects.push(...N),J=!0;break}D=D.parent}J||nC(N),b.effects=[],y&&t&&t.pendingBranch&&p===t.pendingId&&(t.deps--,t.deps===0&&!A&&t.resolve()),Al(k,"onResolve")},fallback(S){if(!b.pendingBranch)return;const{vnode:A,activeBranch:k,parentComponent:C,container:T,isSVG:R}=b;Al(A,"onFallback");const N=g(k),x=()=>{b.isInFallback&&(d(null,S,T,N,C,null,R,a,l),Ao(b,S))},O=S.transition&&S.transition.mode==="out-in";O&&(k.transition.afterLeave=x),b.isInFallback=!0,f(k,C,null,!0),O||x()},move(S,A,k){b.activeBranch&&h(b.activeBranch,S,A,k),b.container=S},next(){return b.activeBranch&&g(b.activeBranch)},registerDep(S,A){const k=!!b.pendingBranch;k&&b.deps++;const C=S.vnode.el;S.asyncDep.catch(T=>{ca(T,S,0)}).then(T=>{if(S.isUnmounted||b.isUnmounted||b.pendingId!==S.suspenseId)return;S.asyncResolved=!0;const{vnode:R}=S;rm(S,T,!1),C&&(R.el=C);const N=!C&&S.subTree.el;A(S,R,v(C||S.subTree.el),C?null:g(S.subTree),b,o,l),N&&_(N),gv(S,R.el),k&&--b.deps===0&&b.resolve()})},unmount(S,A){b.isUnmounted=!0,b.activeBranch&&f(b.activeBranch,n,S,A),b.pendingBranch&&f(b.pendingBranch,n,S,A)}};return b}function Ix(e,t,n,i,s,r,o,a,l){const c=t.suspense=pv(t,i,n,e.parentNode,document.createElement("div"),null,s,r,o,a,!0),u=l(e,c.pendingBranch=t.ssContent,n,c,r,o);return c.deps===0&&c.resolve(!1,!0),u}function Sx(e){const{shapeFlag:t,children:n}=e,i=t&32;e.ssContent=c_(i?n.default:n),e.ssFallback=i?c_(n.fallback):m(Sn)}function c_(e){let t;if(Re(e)){const n=Fo&&e._c;n&&(e._d=!1,Pi()),e=e(),n&&(e._d=!0,t=Yn,kC())}return Te(e)&&(e=yx(e)),e=Kn(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function oC(e,t){t&&t.pendingBranch?Te(e)?t.effects.push(...e):t.effects.push(e):nC(e)}function Ao(e,t){e.activeBranch=t;const{vnode:n,parentComponent:i}=e,s=n.el=t.el;i&&i.subTree===n&&(i.vnode.el=s,gv(i,s))}function Ax(e){var t;return((t=e.props)==null?void 0:t.suspensible)!=null&&e.props.suspensible!==!1}function Nn(e,t){return yv(e,null,t)}const Kc={};function ue(e,t,n){return yv(e,t,n)}function yv(e,t,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=dt){var a;const l=N1()===((a=Rt)==null?void 0:a.scope)?Rt:null;let c,u=!1,d=!1;if(pt(e)?(c=()=>e.value,u=Nu(e)):Io(e)?(c=()=>e,i=!0):Te(e)?(d=!0,u=e.some(b=>Io(b)||Nu(b)),c=()=>e.map(b=>{if(pt(b))return b.value;if(Io(b))return dr(b);if(Re(b))return Os(b,l,2)})):Re(e)?t?c=()=>Os(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Jn(e,l,3,[f])}:c=pi,t&&i){const b=c;c=()=>dr(b())}let h,f=b=>{h=y.onStop=()=>{Os(b,l,4)}},g;if(Uo)if(f=pi,t?n&&Jn(t,l,3,[c(),d?[]:void 0,f]):c(),s==="sync"){const b=gV();g=b.__watcherHandles||(b.__watcherHandles=[])}else return pi;let v=d?new Array(e.length).fill(Kc):Kc;const _=()=>{if(y.active)if(t){const b=y.run();(i||u||(d?b.some((S,A)=>Cl(S,v[A])):Cl(b,v)))&&(h&&h(),Jn(t,l,3,[b,v===Kc?void 0:d&&v[0]===Kc?[]:v,f]),v=b)}else y.run()};_.allowRecurse=!!t;let p;s==="sync"?p=_:s==="post"?p=()=>Yt(_,l&&l.suspense):(_.pre=!0,l&&(_.id=l.uid),p=()=>Dd(_));const y=new ov(c,p);t?n?_():v=y.run():s==="post"?Yt(y.run.bind(y),l&&l.suspense):y.run();const E=()=>{y.stop(),l&&l.scope&&nv(l.scope.effects,y)};return g&&g.push(E),E}function kx(e,t,n){const i=this.proxy,s=yt(e)?e.includes(".")?aC(i,e):()=>i[e]:e.bind(i,i);let r;Re(t)?r=t:(r=t.handler,n=t);const o=Rt;$o(this);const a=yv(s,r.bind(i),n);return o?$o(o):wr(),a}function aC(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function dr(e,t){if(!ct(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),pt(e))dr(e.value,t);else if(Te(e))for(let n=0;n<e.length;n++)dr(e[n],t);else if(PE(e)||Co(e))e.forEach(n=>{dr(n,t)});else if(NE(e))for(const n in e)dr(e[n],t);return e}function _t(e,t){const n=Ut;if(n===null)return e;const i=Ud(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,a,l,c=dt]=t[r];o&&(Re(o)&&(o={mounted:o,updated:o}),o.deep&&dr(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function ki(e,t,n,i){const s=e.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(aa(),Jn(l,n,8,[e.el,a,e,t]),la())}}function lC(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return en(()=>{e.isMounted=!0}),tn(()=>{e.isUnmounting=!0}),e}const qn=[Function,Array],cC={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qn,onEnter:qn,onAfterEnter:qn,onEnterCancelled:qn,onBeforeLeave:qn,onLeave:qn,onAfterLeave:qn,onLeaveCancelled:qn,onBeforeAppear:qn,onAppear:qn,onAfterAppear:qn,onAppearCancelled:qn},Rx={name:"BaseTransition",props:cC,setup(e,{slots:t}){const n=Gs(),i=lC();let s;return()=>{const r=t.default&&_v(t.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const v of r)if(v.type!==Sn){o=v;break}}const a=Me(e),{mode:l}=a;if(i.isLeaving)return Yh(o);const c=u_(o);if(!c)return Yh(o);const u=kl(c,a,i,n);Mo(c,u);const d=n.subTree,h=d&&u_(d);let f=!1;const{getTransitionKey:g}=c.type;if(g){const v=g();s===void 0?s=v:v!==s&&(s=v,f=!0)}if(h&&h.type!==Sn&&(!hi(c,h)||f)){const v=kl(h,a,i,n);if(Mo(h,v),l==="out-in")return i.isLeaving=!0,v.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},Yh(o);l==="in-out"&&c.type!==Sn&&(v.delayLeave=(_,p,y)=>{const E=uC(i,h);E[String(h.key)]=h,_._leaveCb=()=>{p(),_._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=y})}return o}}},Px=Rx;function uC(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function kl(e,t,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:v,onAppear:_,onAfterAppear:p,onAppearCancelled:y}=t,E=String(e.key),b=uC(n,e),S=(C,T)=>{C&&Jn(C,i,9,T)},A=(C,T)=>{const R=T[1];S(C,T),Te(C)?C.every(N=>N.length<=1)&&R():C.length<=1&&R()},k={mode:r,persisted:o,beforeEnter(C){let T=a;if(!n.isMounted)if(s)T=v||a;else return;C._leaveCb&&C._leaveCb(!0);const R=b[E];R&&hi(e,R)&&R.el._leaveCb&&R.el._leaveCb(),S(T,[C])},enter(C){let T=l,R=c,N=u;if(!n.isMounted)if(s)T=_||l,R=p||c,N=y||u;else return;let x=!1;const O=C._enterCb=D=>{x||(x=!0,D?S(N,[C]):S(R,[C]),k.delayedLeave&&k.delayedLeave(),C._enterCb=void 0)};T?A(T,[C,O]):O()},leave(C,T){const R=String(e.key);if(C._enterCb&&C._enterCb(!0),n.isUnmounting)return T();S(d,[C]);let N=!1;const x=C._leaveCb=O=>{N||(N=!0,T(),O?S(g,[C]):S(f,[C]),C._leaveCb=void 0,b[R]===e&&delete b[R])};b[R]=e,h?A(h,[C,x]):x()},clone(C){return kl(C,t,n,i)}};return k}function Yh(e){if(lc(e))return e=Bi(e),e.children=null,e}function u_(e){return lc(e)?e.children?e.children[0]:void 0:e}function Mo(e,t){e.shapeFlag&6&&e.component?Mo(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function _v(e,t=!1,n){let i=[],s=0;for(let r=0;r<e.length;r++){let o=e[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ee?(o.patchFlag&128&&s++,i=i.concat(_v(o.children,t,a))):(t||o.type!==Sn)&&i.push(a!=null?Bi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function fs(e,t){return Re(e)?(()=>Ct({name:e.name},t,{setup:e}))():e}const br=e=>!!e.type.__asyncLoader;function d_(e){Re(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:i,delay:s=200,timeout:r,suspensible:o=!0,onError:a}=e;let l=null,c,u=0;const d=()=>(u++,l=null,h()),h=()=>{let f;return l||(f=l=t().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((v,_)=>{a(g,()=>v(d()),()=>_(g),u+1)});throw g}).then(g=>f!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return fs({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const f=Rt;if(c)return()=>Qh(c,f);const g=y=>{l=null,ca(y,f,13,!i)};if(o&&f.suspense||Uo)return h().then(y=>()=>Qh(y,f)).catch(y=>(g(y),()=>i?m(i,{error:y}):null));const v=Z(!1),_=Z(),p=Z(!!s);return s&&setTimeout(()=>{p.value=!1},s),r!=null&&setTimeout(()=>{if(!v.value&&!_.value){const y=new Error(`Async component timed out after ${r}ms.`);g(y),_.value=y}},r),h().then(()=>{v.value=!0,f.parent&&lc(f.parent.vnode)&&Dd(f.parent.update)}).catch(y=>{g(y),_.value=y}),()=>{if(v.value&&c)return Qh(c,f);if(_.value&&i)return m(i,{error:_.value});if(n&&!p.value)return m(n)}}})}function Qh(e,t){const{ref:n,props:i,children:s,ce:r}=t.vnode,o=m(e,i,s);return o.ref=n,o.ce=r,delete t.vnode.ce,o}const lc=e=>e.type.__isKeepAlive,xx={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Gs(),i=n.ctx;if(!i.renderer)return()=>{const y=t.default&&t.default();return y&&y.length===1?y[0]:y};const s=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:d}}}=i,h=d("div");i.activate=(y,E,b,S,A)=>{const k=y.component;c(y,E,b,0,a),l(k.vnode,y,E,b,k,a,S,y.slotScopeIds,A),Yt(()=>{k.isDeactivated=!1,k.a&&To(k.a);const C=y.props&&y.props.onVnodeMounted;C&&Rn(C,k.parent,y)},a)},i.deactivate=y=>{const E=y.component;c(y,h,null,1,a),Yt(()=>{E.da&&To(E.da);const b=y.props&&y.props.onVnodeUnmounted;b&&Rn(b,E.parent,y),E.isDeactivated=!0},a)};function f(y){Xh(y),u(y,n,a,!0)}function g(y){s.forEach((E,b)=>{const S=om(E.type);S&&(!y||!y(S))&&v(b)})}function v(y){const E=s.get(y);!o||!hi(E,o)?f(E):o&&Xh(o),s.delete(y),r.delete(y)}ue(()=>[e.include,e.exclude],([y,E])=>{y&&g(b=>Ka(y,b)),E&&g(b=>!Ka(E,b))},{flush:"post",deep:!0});let _=null;const p=()=>{_!=null&&s.set(_,Jh(n.subTree))};return en(p),Ev(p),tn(()=>{s.forEach(y=>{const{subTree:E,suspense:b}=n,S=Jh(E);if(y.type===S.type&&y.key===S.key){Xh(S);const A=S.component.da;A&&Yt(A,b);return}f(y)})}),()=>{if(_=null,!t.default)return null;const y=t.default(),E=y[0];if(y.length>1)return o=null,y;if(!Bo(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let b=Jh(E);const S=b.type,A=om(br(b)?b.type.__asyncResolved||{}:S),{include:k,exclude:C,max:T}=e;if(k&&(!A||!Ka(k,A))||C&&A&&Ka(C,A))return o=b,E;const R=b.key==null?S:b.key,N=s.get(R);return b.el&&(b=Bi(b),E.shapeFlag&128&&(E.ssContent=b)),_=R,N?(b.el=N.el,b.component=N.component,b.transition&&Mo(b,b.transition),b.shapeFlag|=512,r.delete(R),r.add(R)):(r.add(R),T&&r.size>parseInt(T,10)&&v(r.values().next().value)),b.shapeFlag|=256,o=b,rC(E.type)?E:b}}},Vx=xx;function Ka(e,t){return Te(e)?e.some(n=>Ka(n,t)):yt(e)?e.split(",").includes(t):w1(e)?e.test(t):!1}function bv(e,t){dC(e,"a",t)}function wv(e,t){dC(e,"da",t)}function dC(e,t,n=Rt){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Fd(t,i,n),n){let s=n.parent;for(;s&&s.parent;)lc(s.parent.vnode)&&Nx(i,t,n,s),s=s.parent}}function Nx(e,t,n,i){const s=Fd(t,e,i,!0);fC(()=>{nv(i[t],s)},n)}function Xh(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Jh(e){return e.shapeFlag&128?e.ssContent:e}function Fd(e,t,n=Rt,i=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;aa(),$o(n);const a=Jn(t,n,e,o);return wr(),la(),a});return i?s.unshift(r):s.push(r),r}}const ms=e=>(t,n=Rt)=>(!Uo||e==="sp")&&Fd(e,(...i)=>t(...i),n),Bd=ms("bm"),en=ms("m"),hC=ms("bu"),Ev=ms("u"),tn=ms("bum"),fC=ms("um"),Ox=ms("sp"),Dx=ms("rtg"),Lx=ms("rtc");function mC(e,t=Rt){Fd("ec",e,t)}const Cv="components",Mx="directives";function L7(e,t){return Tv(Cv,e,!0,t)||e}const gC=Symbol.for("v-ndc");function vC(e){return yt(e)?Tv(Cv,e,!1)||e:e||gC}function Hn(e){return Tv(Mx,e)}function Tv(e,t,n=!0,i=!1){const s=Ut||Rt;if(s){const r=s.type;if(e===Cv){const a=om(r,!1);if(a&&(a===t||a===ei(t)||a===hs(ei(t))))return r}const o=h_(s[e]||r[e],t)||h_(s.appContext[e],t);return!o&&i?r:o}}function h_(e,t){return e&&(e[t]||e[ei(t)]||e[hs(ei(t))])}function M7(e,t,n,i){let s;const r=n&&n[i];if(Te(e)||yt(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,r&&r[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,r&&r[o])}else if(ct(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,r&&r[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=t(e[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}function F7(e,t,n={},i,s){if(Ut.isCE||Ut.parent&&br(Ut.parent)&&Ut.parent.isCE)return t!=="default"&&(n.name=t),m("slot",n,i&&i());let r=e[t];r&&r._c&&(r._d=!1),Pi();const o=r&&pC(r(n)),a=Yi(Ee,{key:n.key||o&&o.key||`_${t}`},o||(i?i():[]),o&&e._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function pC(e){return e.some(t=>Bo(t)?!(t.type===Sn||t.type===Ee&&!pC(t.children)):!0)?e:null}const em=e=>e?NC(e)?Ud(e)||e.proxy:em(e.parent):null,il=Ct(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>em(e.parent),$root:e=>em(e.root),$emit:e=>e.emit,$options:e=>Iv(e),$forceUpdate:e=>e.f||(e.f=()=>Dd(e.update)),$nextTick:e=>e.n||(e.n=Ye.bind(e.proxy)),$watch:e=>kx.bind(e)}),Zh=(e,t)=>e!==dt&&!e.__isScriptSetup&&qe(e,t),Fx={get({_:e},t){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(Zh(i,t))return o[t]=1,i[t];if(s!==dt&&qe(s,t))return o[t]=2,s[t];if((c=e.propsOptions[0])&&qe(c,t))return o[t]=3,r[t];if(n!==dt&&qe(n,t))return o[t]=4,n[t];tm&&(o[t]=0)}}const u=il[t];let d,h;if(u)return t==="$attrs"&&Vn(e,"get",t),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==dt&&qe(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,qe(h,t))return h[t]},set({_:e},t,n){const{data:i,setupState:s,ctx:r}=e;return Zh(s,t)?(s[t]=n,!0):i!==dt&&qe(i,t)?(i[t]=n,!0):qe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||e!==dt&&qe(e,o)||Zh(t,o)||(a=r[0])&&qe(a,o)||qe(i,o)||qe(il,o)||qe(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:qe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function f_(e){return Te(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let tm=!0;function Bx(e){const t=Iv(e),n=e.proxy,i=e.ctx;tm=!1,t.beforeCreate&&m_(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:f,updated:g,activated:v,deactivated:_,beforeDestroy:p,beforeUnmount:y,destroyed:E,unmounted:b,render:S,renderTracked:A,renderTriggered:k,errorCaptured:C,serverPrefetch:T,expose:R,inheritAttrs:N,components:x,directives:O,filters:D}=t;if(c&&$x(c,i,null),o)for(const B in o){const M=o[B];Re(M)&&(i[B]=M.bind(n))}if(s){const B=s.call(n,n);ct(B)&&(e.data=kt(B))}if(tm=!0,r)for(const B in r){const M=r[B],q=Re(M)?M.bind(n,n):Re(M.get)?M.get.bind(n,n):pi,Q=!Re(M)&&Re(M.set)?M.set.bind(n):pi,ae=w({get:q,set:Q});Object.defineProperty(i,B,{enumerable:!0,configurable:!0,get:()=>ae.value,set:de=>ae.value=de})}if(a)for(const B in a)yC(a[B],i,n,B);if(l){const B=Re(l)?l.call(n):l;Reflect.ownKeys(B).forEach(M=>{lt(M,B[M])})}u&&m_(u,e,"c");function X(B,M){Te(M)?M.forEach(q=>B(q.bind(n))):M&&B(M.bind(n))}if(X(Bd,d),X(en,h),X(hC,f),X(Ev,g),X(bv,v),X(wv,_),X(mC,C),X(Lx,A),X(Dx,k),X(tn,y),X(fC,b),X(Ox,T),Te(R))if(R.length){const B=e.exposed||(e.exposed={});R.forEach(M=>{Object.defineProperty(B,M,{get:()=>n[M],set:q=>n[M]=q})})}else e.exposed||(e.exposed={});S&&e.render===pi&&(e.render=S),N!=null&&(e.inheritAttrs=N),x&&(e.components=x),O&&(e.directives=O)}function $x(e,t,n=pi){Te(e)&&(e=nm(e));for(const i in e){const s=e[i];let r;ct(s)?"default"in s?r=De(s.from||i,s.default,!0):r=De(s.from||i):r=De(s),pt(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function m_(e,t,n){Jn(Te(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function yC(e,t,n,i){const s=i.includes(".")?aC(n,i):()=>n[i];if(yt(e)){const r=t[e];Re(r)&&ue(s,r)}else if(Re(e))ue(s,e.bind(n));else if(ct(e))if(Te(e))e.forEach(r=>yC(r,t,n,i));else{const r=Re(e.handler)?e.handler.bind(n):t[e.handler];Re(r)&&ue(s,r,e)}}function Iv(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!n&&!i?l=t:(l={},s.length&&s.forEach(c=>Mu(l,c,o,!0)),Mu(l,t,o)),ct(t)&&r.set(t,l),l}function Mu(e,t,n,i=!1){const{mixins:s,extends:r}=t;r&&Mu(e,r,n,!0),s&&s.forEach(o=>Mu(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=Ux[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Ux={data:g_,props:v_,emits:v_,methods:Ga,computed:Ga,beforeCreate:En,created:En,beforeMount:En,mounted:En,beforeUpdate:En,updated:En,beforeDestroy:En,beforeUnmount:En,destroyed:En,unmounted:En,activated:En,deactivated:En,errorCaptured:En,serverPrefetch:En,components:Ga,directives:Ga,watch:jx,provide:g_,inject:Hx};function g_(e,t){return t?e?function(){return Ct(Re(e)?e.call(this,this):e,Re(t)?t.call(this,this):t)}:t:e}function Hx(e,t){return Ga(nm(e),nm(t))}function nm(e){if(Te(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function En(e,t){return e?[...new Set([].concat(e,t))]:t}function Ga(e,t){return e?Ct(Object.create(null),e,t):t}function v_(e,t){return e?Te(e)&&Te(t)?[...new Set([...e,...t])]:Ct(Object.create(null),f_(e),f_(t??{})):t}function jx(e,t){if(!e)return t;if(!t)return e;const n=Ct(Object.create(null),e);for(const i in t)n[i]=En(e[i],t[i]);return n}function _C(){return{app:null,config:{isNativeTag:y1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zx=0;function Wx(e,t){return function(i,s=null){Re(i)||(i=Ct({},i)),s!=null&&!ct(s)&&(s=null);const r=_C(),o=new Set;let a=!1;const l=r.app={_uid:zx++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:DC,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Re(c.install)?(o.add(c),c.install(l,...u)):Re(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const h=m(i,s);return h.appContext=r,u&&t?t(h,c):e(h,c,d),a=!0,l._container=c,c.__vue_app__=l,Ud(h.component)||h.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Rl=l;try{return c()}finally{Rl=null}}};return l}}let Rl=null;function lt(e,t){if(Rt){let n=Rt.provides;const i=Rt.parent&&Rt.parent.provides;i===n&&(n=Rt.provides=Object.create(i)),n[e]=t}}function De(e,t,n=!1){const i=Rt||Ut;if(i||Rl){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Rl._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Re(t)?t.call(i&&i.proxy):t}}function bC(){return!!(Rt||Ut||Rl)}function qx(e,t,n,i=!1){const s={},r={};xu(r,$d,1),e.propsDefaults=Object.create(null),wC(e,t,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=i?s:oc(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Kx(e,t,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,a=Me(s),[l]=e.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Ld(e.emitsOptions,h))continue;const f=t[h];if(l)if(qe(r,h))f!==r[h]&&(r[h]=f,c=!0);else{const g=ei(h);s[g]=im(l,a,g,f,e,!1)}else f!==r[h]&&(r[h]=f,c=!0)}}}else{wC(e,t,s,r)&&(c=!0);let u;for(const d in a)(!t||!qe(t,d)&&((u=oa(d))===d||!qe(t,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=im(l,a,d,void 0,e,!0)):delete s[d]);if(r!==a)for(const d in r)(!t||!qe(t,d))&&(delete r[d],c=!0)}c&&is(e,"set","$attrs")}function wC(e,t,n,i){const[s,r]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(nl(l))continue;const c=t[l];let u;s&&qe(s,u=ei(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ld(e.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Me(n),c=a||dt;for(let u=0;u<r.length;u++){const d=r[u];n[d]=im(s,l,d,c[d],e,!qe(c,d))}}return o}function im(e,t,n,i,s,r){const o=e[n];if(o!=null){const a=qe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Re(l)){const{propsDefaults:c}=s;n in c?i=c[n]:($o(s),i=c[n]=l.call(null,t),wr())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===oa(n))&&(i=!0))}return i}function EC(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const r=e.props,o={},a=[];let l=!1;if(!Re(e)){const u=d=>{l=!0;const[h,f]=EC(d,t,!0);Ct(o,h),f&&a.push(...f)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!l)return ct(e)&&i.set(e,Eo),Eo;if(Te(r))for(let u=0;u<r.length;u++){const d=ei(r[u]);p_(d)&&(o[d]=dt)}else if(r)for(const u in r){const d=ei(u);if(p_(d)){const h=r[u],f=o[d]=Te(h)||Re(h)?{type:h}:Ct({},h);if(f){const g=b_(Boolean,f.type),v=b_(String,f.type);f[0]=g>-1,f[1]=v<0||g<v,(g>-1||qe(f,"default"))&&a.push(d)}}}const c=[o,a];return ct(e)&&i.set(e,c),c}function p_(e){return e[0]!=="$"}function y_(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function __(e,t){return y_(e)===y_(t)}function b_(e,t){return Te(t)?t.findIndex(n=>__(n,e)):Re(t)&&__(t,e)?0:-1}const CC=e=>e[0]==="_"||e==="$stable",Sv=e=>Te(e)?e.map(Kn):[Kn(e)],Gx=(e,t,n)=>{if(t._n)return t;const i=mv((...s)=>Sv(t(...s)),n);return i._c=!1,i},TC=(e,t,n)=>{const i=e._ctx;for(const s in e){if(CC(s))continue;const r=e[s];if(Re(r))t[s]=Gx(s,r,i);else if(r!=null){const o=Sv(r);t[s]=()=>o}}},IC=(e,t)=>{const n=Sv(t);e.slots.default=()=>n},Yx=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Me(t),xu(t,"_",n)):TC(t,e.slots={})}else e.slots={},t&&IC(e,t);xu(e.slots,$d,1)},Qx=(e,t,n)=>{const{vnode:i,slots:s}=e;let r=!0,o=dt;if(i.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:(Ct(s,t),!n&&a===1&&delete s._):(r=!t.$stable,TC(t,s)),o=t}else t&&(IC(e,t),o={default:1});if(r)for(const a in s)!CC(a)&&!(a in o)&&delete s[a]};function Fu(e,t,n,i,s=!1){if(Te(e)){e.forEach((h,f)=>Fu(h,t&&(Te(t)?t[f]:t),n,i,s));return}if(br(i)&&!s)return;const r=i.shapeFlag&4?Ud(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=e,c=t&&t.r,u=a.refs===dt?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(yt(c)?(u[c]=null,qe(d,c)&&(d[c]=null)):pt(c)&&(c.value=null)),Re(l))Os(l,a,12,[o,u]);else{const h=yt(l),f=pt(l);if(h||f){const g=()=>{if(e.f){const v=h?qe(d,l)?d[l]:u[l]:l.value;s?Te(v)&&nv(v,r):Te(v)?v.includes(r)||v.push(r):h?(u[l]=[r],qe(d,l)&&(d[l]=u[l])):(l.value=[r],e.k&&(u[e.k]=l.value))}else h?(u[l]=o,qe(d,l)&&(d[l]=o)):f&&(l.value=o,e.k&&(u[e.k]=o))};o?(g.id=-1,Yt(g,n)):g()}}}let ws=!1;const Gc=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",Yc=e=>e.nodeType===8;function Xx(e){const{mt:t,p:n,o:{patchProp:i,createText:s,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:c}}=e,u=(p,y)=>{if(!y.hasChildNodes()){n(null,p,y),Du(),y._vnode=p;return}ws=!1,d(y.firstChild,p,null,null,null),Du(),y._vnode=p,ws&&console.error("Hydration completed but contains mismatches.")},d=(p,y,E,b,S,A=!1)=>{const k=Yc(p)&&p.data==="[",C=()=>v(p,y,E,b,S,k),{type:T,ref:R,shapeFlag:N,patchFlag:x}=y;let O=p.nodeType;y.el=p,x===-2&&(A=!1,y.dynamicChildren=null);let D=null;switch(T){case Pr:O!==3?y.children===""?(l(y.el=s(""),o(p),p),D=p):D=C():(p.data!==y.children&&(ws=!0,p.data=y.children),D=r(p));break;case Sn:O!==8||k?D=C():D=r(p);break;case rl:if(k&&(p=r(p),O=p.nodeType),O===1||O===3){D=p;const J=!y.children.length;for(let X=0;X<y.staticCount;X++)J&&(y.children+=D.nodeType===1?D.outerHTML:D.data),X===y.staticCount-1&&(y.anchor=D),D=r(D);return k?r(D):D}else C();break;case Ee:k?D=g(p,y,E,b,S,A):D=C();break;default:if(N&1)O!==1||y.type.toLowerCase()!==p.tagName.toLowerCase()?D=C():D=h(p,y,E,b,S,A);else if(N&6){y.slotScopeIds=S;const J=o(p);if(t(y,J,null,E,b,Gc(J),A),D=k?_(p):r(p),D&&Yc(D)&&D.data==="teleport end"&&(D=r(D)),br(y)){let X;k?(X=m(Ee),X.anchor=D?D.previousSibling:J.lastChild):X=p.nodeType===3?ua(""):m("div"),X.el=p,y.component.subTree=X}}else N&64?O!==8?D=C():D=y.type.hydrate(p,y,E,b,S,A,e,f):N&128&&(D=y.type.hydrate(p,y,E,b,Gc(o(p)),S,A,e,d))}return R!=null&&Fu(R,null,b,y),D},h=(p,y,E,b,S,A)=>{A=A||!!y.dynamicChildren;const{type:k,props:C,patchFlag:T,shapeFlag:R,dirs:N}=y,x=k==="input"&&N||k==="option";if(x||T!==-1){if(N&&ki(y,null,E,"created"),C)if(x||!A||T&48)for(const D in C)(x&&D.endsWith("value")||sc(D)&&!nl(D))&&i(p,D,null,C[D],!1,void 0,E);else C.onClick&&i(p,"onClick",null,C.onClick,!1,void 0,E);let O;if((O=C&&C.onVnodeBeforeMount)&&Rn(O,E,y),N&&ki(y,null,E,"beforeMount"),((O=C&&C.onVnodeMounted)||N)&&oC(()=>{O&&Rn(O,E,y),N&&ki(y,null,E,"mounted")},b),R&16&&!(C&&(C.innerHTML||C.textContent))){let D=f(p.firstChild,y,p,E,b,S,A);for(;D;){ws=!0;const J=D;D=D.nextSibling,a(J)}}else R&8&&p.textContent!==y.children&&(ws=!0,p.textContent=y.children)}return p.nextSibling},f=(p,y,E,b,S,A,k)=>{k=k||!!y.dynamicChildren;const C=y.children,T=C.length;for(let R=0;R<T;R++){const N=k?C[R]:C[R]=Kn(C[R]);if(p)p=d(p,N,b,S,A,k);else{if(N.type===Pr&&!N.children)continue;ws=!0,n(null,N,E,null,b,S,Gc(E),A)}}return p},g=(p,y,E,b,S,A)=>{const{slotScopeIds:k}=y;k&&(S=S?S.concat(k):k);const C=o(p),T=f(r(p),y,C,E,b,S,A);return T&&Yc(T)&&T.data==="]"?r(y.anchor=T):(ws=!0,l(y.anchor=c("]"),C,T),T)},v=(p,y,E,b,S,A)=>{if(ws=!0,y.el=null,A){const T=_(p);for(;;){const R=r(p);if(R&&R!==T)a(R);else break}}const k=r(p),C=o(p);return a(p),n(null,y,C,k,E,b,Gc(C),S),k},_=p=>{let y=0;for(;p;)if(p=r(p),p&&Yc(p)&&(p.data==="["&&y++,p.data==="]")){if(y===0)return r(p);y--}return p};return[u,d]}const Yt=oC;function Jx(e){return SC(e)}function Zx(e){return SC(e,Xx)}function SC(e,t){const n=Yf();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:f=pi,insertStaticContent:g}=e,v=(I,P,V,L=null,U=null,W=null,re=!1,K=null,ne=!!P.dynamicChildren)=>{if(I===P)return;I&&!hi(I,P)&&(L=F(I),de(I,U,W,!0),I=null),P.patchFlag===-2&&(ne=!1,P.dynamicChildren=null);const{type:ee,ref:be,shapeFlag:pe}=P;switch(ee){case Pr:_(I,P,V,L);break;case Sn:p(I,P,V,L);break;case rl:I==null&&y(P,V,L,re);break;case Ee:x(I,P,V,L,U,W,re,K,ne);break;default:pe&1?S(I,P,V,L,U,W,re,K,ne):pe&6?O(I,P,V,L,U,W,re,K,ne):(pe&64||pe&128)&&ee.process(I,P,V,L,U,W,re,K,ne,se)}be!=null&&U&&Fu(be,I&&I.ref,W,P||I,!P)},_=(I,P,V,L)=>{if(I==null)i(P.el=a(P.children),V,L);else{const U=P.el=I.el;P.children!==I.children&&c(U,P.children)}},p=(I,P,V,L)=>{I==null?i(P.el=l(P.children||""),V,L):P.el=I.el},y=(I,P,V,L)=>{[I.el,I.anchor]=g(I.children,P,V,L,I.el,I.anchor)},E=({el:I,anchor:P},V,L)=>{let U;for(;I&&I!==P;)U=h(I),i(I,V,L),I=U;i(P,V,L)},b=({el:I,anchor:P})=>{let V;for(;I&&I!==P;)V=h(I),s(I),I=V;s(P)},S=(I,P,V,L,U,W,re,K,ne)=>{re=re||P.type==="svg",I==null?A(P,V,L,U,W,re,K,ne):T(I,P,U,W,re,K,ne)},A=(I,P,V,L,U,W,re,K)=>{let ne,ee;const{type:be,props:pe,shapeFlag:_e,transition:Ie,dirs:Be}=I;if(ne=I.el=o(I.type,W,pe&&pe.is,pe),_e&8?u(ne,I.children):_e&16&&C(I.children,ne,null,L,U,W&&be!=="foreignObject",re,K),Be&&ki(I,null,L,"created"),k(ne,I,I.scopeId,re,L),pe){for(const it in pe)it!=="value"&&!nl(it)&&r(ne,it,null,pe[it],W,I.children,L,U,z);"value"in pe&&r(ne,"value",null,pe.value),(ee=pe.onVnodeBeforeMount)&&Rn(ee,L,I)}Be&&ki(I,null,L,"beforeMount");const ot=(!U||U&&!U.pendingBranch)&&Ie&&!Ie.persisted;ot&&Ie.beforeEnter(ne),i(ne,P,V),((ee=pe&&pe.onVnodeMounted)||ot||Be)&&Yt(()=>{ee&&Rn(ee,L,I),ot&&Ie.enter(ne),Be&&ki(I,null,L,"mounted")},U)},k=(I,P,V,L,U)=>{if(V&&f(I,V),L)for(let W=0;W<L.length;W++)f(I,L[W]);if(U){let W=U.subTree;if(P===W){const re=U.vnode;k(I,re,re.scopeId,re.slotScopeIds,U.parent)}}},C=(I,P,V,L,U,W,re,K,ne=0)=>{for(let ee=ne;ee<I.length;ee++){const be=I[ee]=K?Is(I[ee]):Kn(I[ee]);v(null,be,P,V,L,U,W,re,K)}},T=(I,P,V,L,U,W,re)=>{const K=P.el=I.el;let{patchFlag:ne,dynamicChildren:ee,dirs:be}=P;ne|=I.patchFlag&16;const pe=I.props||dt,_e=P.props||dt;let Ie;V&&nr(V,!1),(Ie=_e.onVnodeBeforeUpdate)&&Rn(Ie,V,P,I),be&&ki(P,I,V,"beforeUpdate"),V&&nr(V,!0);const Be=U&&P.type!=="foreignObject";if(ee?R(I.dynamicChildren,ee,K,V,L,Be,W):re||M(I,P,K,null,V,L,Be,W,!1),ne>0){if(ne&16)N(K,P,pe,_e,V,L,U);else if(ne&2&&pe.class!==_e.class&&r(K,"class",null,_e.class,U),ne&4&&r(K,"style",pe.style,_e.style,U),ne&8){const ot=P.dynamicProps;for(let it=0;it<ot.length;it++){const It=ot[it],ui=pe[It],io=_e[It];(io!==ui||It==="value")&&r(K,It,ui,io,U,I.children,V,L,z)}}ne&1&&I.children!==P.children&&u(K,P.children)}else!re&&ee==null&&N(K,P,pe,_e,V,L,U);((Ie=_e.onVnodeUpdated)||be)&&Yt(()=>{Ie&&Rn(Ie,V,P,I),be&&ki(P,I,V,"updated")},L)},R=(I,P,V,L,U,W,re)=>{for(let K=0;K<P.length;K++){const ne=I[K],ee=P[K],be=ne.el&&(ne.type===Ee||!hi(ne,ee)||ne.shapeFlag&70)?d(ne.el):V;v(ne,ee,be,null,L,U,W,re,!0)}},N=(I,P,V,L,U,W,re)=>{if(V!==L){if(V!==dt)for(const K in V)!nl(K)&&!(K in L)&&r(I,K,V[K],null,re,P.children,U,W,z);for(const K in L){if(nl(K))continue;const ne=L[K],ee=V[K];ne!==ee&&K!=="value"&&r(I,K,ee,ne,re,P.children,U,W,z)}"value"in L&&r(I,"value",V.value,L.value)}},x=(I,P,V,L,U,W,re,K,ne)=>{const ee=P.el=I?I.el:a(""),be=P.anchor=I?I.anchor:a("");let{patchFlag:pe,dynamicChildren:_e,slotScopeIds:Ie}=P;Ie&&(K=K?K.concat(Ie):Ie),I==null?(i(ee,V,L),i(be,V,L),C(P.children,V,be,U,W,re,K,ne)):pe>0&&pe&64&&_e&&I.dynamicChildren?(R(I.dynamicChildren,_e,V,U,W,re,K),(P.key!=null||U&&P===U.subTree)&&Av(I,P,!0)):M(I,P,V,be,U,W,re,K,ne)},O=(I,P,V,L,U,W,re,K,ne)=>{P.slotScopeIds=K,I==null?P.shapeFlag&512?U.ctx.activate(P,V,L,re,ne):D(P,V,L,U,W,re,ne):J(I,P,ne)},D=(I,P,V,L,U,W,re)=>{const K=I.component=lV(I,L,U);if(lc(I)&&(K.ctx.renderer=se),cV(K),K.asyncDep){if(U&&U.registerDep(K,X),!I.el){const ne=K.subTree=m(Sn);p(null,ne,P,V)}return}X(K,I,P,V,U,W,re)},J=(I,P,V)=>{const L=P.component=I.component;if(wx(I,P,V))if(L.asyncDep&&!L.asyncResolved){B(L,P,V);return}else L.next=P,gx(L.update),L.update();else P.el=I.el,L.vnode=P},X=(I,P,V,L,U,W,re)=>{const K=()=>{if(I.isMounted){let{next:be,bu:pe,u:_e,parent:Ie,vnode:Be}=I,ot=be,it;nr(I,!1),be?(be.el=Be.el,B(I,be,re)):be=Be,pe&&To(pe),(it=be.props&&be.props.onVnodeBeforeUpdate)&&Rn(it,Ie,be,Be),nr(I,!0);const It=Gh(I),ui=I.subTree;I.subTree=It,v(ui,It,d(ui.el),F(ui),I,U,W),be.el=It.el,ot===null&&gv(I,It.el),_e&&Yt(_e,U),(it=be.props&&be.props.onVnodeUpdated)&&Yt(()=>Rn(it,Ie,be,Be),U)}else{let be;const{el:pe,props:_e}=P,{bm:Ie,m:Be,parent:ot}=I,it=br(P);if(nr(I,!1),Ie&&To(Ie),!it&&(be=_e&&_e.onVnodeBeforeMount)&&Rn(be,ot,P),nr(I,!0),pe&&H){const It=()=>{I.subTree=Gh(I),H(pe,I.subTree,I,U,null)};it?P.type.__asyncLoader().then(()=>!I.isUnmounted&&It()):It()}else{const It=I.subTree=Gh(I);v(null,It,V,L,I,U,W),P.el=It.el}if(Be&&Yt(Be,U),!it&&(be=_e&&_e.onVnodeMounted)){const It=P;Yt(()=>Rn(be,ot,It),U)}(P.shapeFlag&256||ot&&br(ot.vnode)&&ot.vnode.shapeFlag&256)&&I.a&&Yt(I.a,U),I.isMounted=!0,P=V=L=null}},ne=I.effect=new ov(K,()=>Dd(ee),I.scope),ee=I.update=()=>ne.run();ee.id=I.uid,nr(I,!0),ee()},B=(I,P,V)=>{P.component=I;const L=I.vnode.props;I.vnode=P,I.next=null,Kx(I,P.props,L,V),Qx(I,P.children,V),aa(),a_(),la()},M=(I,P,V,L,U,W,re,K,ne=!1)=>{const ee=I&&I.children,be=I?I.shapeFlag:0,pe=P.children,{patchFlag:_e,shapeFlag:Ie}=P;if(_e>0){if(_e&128){Q(ee,pe,V,L,U,W,re,K,ne);return}else if(_e&256){q(ee,pe,V,L,U,W,re,K,ne);return}}Ie&8?(be&16&&z(ee,U,W),pe!==ee&&u(V,pe)):be&16?Ie&16?Q(ee,pe,V,L,U,W,re,K,ne):z(ee,U,W,!0):(be&8&&u(V,""),Ie&16&&C(pe,V,L,U,W,re,K,ne))},q=(I,P,V,L,U,W,re,K,ne)=>{I=I||Eo,P=P||Eo;const ee=I.length,be=P.length,pe=Math.min(ee,be);let _e;for(_e=0;_e<pe;_e++){const Ie=P[_e]=ne?Is(P[_e]):Kn(P[_e]);v(I[_e],Ie,V,null,U,W,re,K,ne)}ee>be?z(I,U,W,!0,!1,pe):C(P,V,L,U,W,re,K,ne,pe)},Q=(I,P,V,L,U,W,re,K,ne)=>{let ee=0;const be=P.length;let pe=I.length-1,_e=be-1;for(;ee<=pe&&ee<=_e;){const Ie=I[ee],Be=P[ee]=ne?Is(P[ee]):Kn(P[ee]);if(hi(Ie,Be))v(Ie,Be,V,null,U,W,re,K,ne);else break;ee++}for(;ee<=pe&&ee<=_e;){const Ie=I[pe],Be=P[_e]=ne?Is(P[_e]):Kn(P[_e]);if(hi(Ie,Be))v(Ie,Be,V,null,U,W,re,K,ne);else break;pe--,_e--}if(ee>pe){if(ee<=_e){const Ie=_e+1,Be=Ie<be?P[Ie].el:L;for(;ee<=_e;)v(null,P[ee]=ne?Is(P[ee]):Kn(P[ee]),V,Be,U,W,re,K,ne),ee++}}else if(ee>_e)for(;ee<=pe;)de(I[ee],U,W,!0),ee++;else{const Ie=ee,Be=ee,ot=new Map;for(ee=Be;ee<=_e;ee++){const On=P[ee]=ne?Is(P[ee]):Kn(P[ee]);On.key!=null&&ot.set(On.key,ee)}let it,It=0;const ui=_e-Be+1;let io=!1,Qy=0;const Va=new Array(ui);for(ee=0;ee<ui;ee++)Va[ee]=0;for(ee=Ie;ee<=pe;ee++){const On=I[ee];if(It>=ui){de(On,U,W,!0);continue}let Si;if(On.key!=null)Si=ot.get(On.key);else for(it=Be;it<=_e;it++)if(Va[it-Be]===0&&hi(On,P[it])){Si=it;break}Si===void 0?de(On,U,W,!0):(Va[Si-Be]=ee+1,Si>=Qy?Qy=Si:io=!0,v(On,P[Si],V,null,U,W,re,K,ne),It++)}const Xy=io?eV(Va):Eo;for(it=Xy.length-1,ee=ui-1;ee>=0;ee--){const On=Be+ee,Si=P[On],Jy=On+1<be?P[On+1].el:L;Va[ee]===0?v(null,Si,V,Jy,U,W,re,K,ne):io&&(it<0||ee!==Xy[it]?ae(Si,V,Jy,2):it--)}}},ae=(I,P,V,L,U=null)=>{const{el:W,type:re,transition:K,children:ne,shapeFlag:ee}=I;if(ee&6){ae(I.component.subTree,P,V,L);return}if(ee&128){I.suspense.move(P,V,L);return}if(ee&64){re.move(I,P,V,se);return}if(re===Ee){i(W,P,V);for(let pe=0;pe<ne.length;pe++)ae(ne[pe],P,V,L);i(I.anchor,P,V);return}if(re===rl){E(I,P,V);return}if(L!==2&&ee&1&&K)if(L===0)K.beforeEnter(W),i(W,P,V),Yt(()=>K.enter(W),U);else{const{leave:pe,delayLeave:_e,afterLeave:Ie}=K,Be=()=>i(W,P,V),ot=()=>{pe(W,()=>{Be(),Ie&&Ie()})};_e?_e(W,Be,ot):ot()}else i(W,P,V)},de=(I,P,V,L=!1,U=!1)=>{const{type:W,props:re,ref:K,children:ne,dynamicChildren:ee,shapeFlag:be,patchFlag:pe,dirs:_e}=I;if(K!=null&&Fu(K,null,V,I,!0),be&256){P.ctx.deactivate(I);return}const Ie=be&1&&_e,Be=!br(I);let ot;if(Be&&(ot=re&&re.onVnodeBeforeUnmount)&&Rn(ot,P,I),be&6)Fe(I.component,V,L);else{if(be&128){I.suspense.unmount(V,L);return}Ie&&ki(I,null,P,"beforeUnmount"),be&64?I.type.remove(I,P,V,U,se,L):ee&&(W!==Ee||pe>0&&pe&64)?z(ee,P,V,!1,!0):(W===Ee&&pe&384||!U&&be&16)&&z(ne,P,V),L&&Se(I)}(Be&&(ot=re&&re.onVnodeUnmounted)||Ie)&&Yt(()=>{ot&&Rn(ot,P,I),Ie&&ki(I,null,P,"unmounted")},V)},Se=I=>{const{type:P,el:V,anchor:L,transition:U}=I;if(P===Ee){ke(V,L);return}if(P===rl){b(I);return}const W=()=>{s(V),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(I.shapeFlag&1&&U&&!U.persisted){const{leave:re,delayLeave:K}=U,ne=()=>re(V,W);K?K(I.el,W,ne):ne()}else W()},ke=(I,P)=>{let V;for(;I!==P;)V=h(I),s(I),I=V;s(P)},Fe=(I,P,V)=>{const{bum:L,scope:U,update:W,subTree:re,um:K}=I;L&&To(L),U.stop(),W&&(W.active=!1,de(re,I,P,V)),K&&Yt(K,P),Yt(()=>{I.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},z=(I,P,V,L=!1,U=!1,W=0)=>{for(let re=W;re<I.length;re++)de(I[re],P,V,L,U)},F=I=>I.shapeFlag&6?F(I.component.subTree):I.shapeFlag&128?I.suspense.next():h(I.anchor||I.el),fe=(I,P,V)=>{I==null?P._vnode&&de(P._vnode,null,null,!0):v(P._vnode||null,I,P,null,null,null,V),a_(),Du(),P._vnode=I},se={p:v,um:de,m:ae,r:Se,mt:D,mc:C,pc:M,pbc:R,n:F,o:e};let j,H;return t&&([j,H]=t(se)),{render:fe,hydrate:j,createApp:Wx(fe,j)}}function nr({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Av(e,t,n=!1){const i=e.children,s=t.children;if(Te(i)&&Te(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Is(s[r]),a.el=o.el),n||Av(o,a)),a.type===Pr&&(a.el=o.el)}}function eV(e){const t=e.slice(),n=[0];let i,s,r,o,a;const l=e.length;for(i=0;i<l;i++){const c=e[i];if(c!==0){if(s=n[n.length-1],e[s]<c){t[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<c?r=a+1:o=a;c<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}const tV=e=>e.__isTeleport,sl=e=>e&&(e.disabled||e.disabled===""),w_=e=>typeof SVGElement<"u"&&e instanceof SVGElement,sm=(e,t)=>{const n=e&&e.to;return yt(n)?t?t(n):null:n},nV={__isTeleport:!0,process(e,t,n,i,s,r,o,a,l,c){const{mc:u,pc:d,pbc:h,o:{insert:f,querySelector:g,createText:v,createComment:_}}=c,p=sl(t.props);let{shapeFlag:y,children:E,dynamicChildren:b}=t;if(e==null){const S=t.el=v(""),A=t.anchor=v("");f(S,n,i),f(A,n,i);const k=t.target=sm(t.props,g),C=t.targetAnchor=v("");k&&(f(C,k),o=o||w_(k));const T=(R,N)=>{y&16&&u(E,R,N,s,r,o,a,l)};p?T(n,A):k&&T(k,C)}else{t.el=e.el;const S=t.anchor=e.anchor,A=t.target=e.target,k=t.targetAnchor=e.targetAnchor,C=sl(e.props),T=C?n:A,R=C?S:k;if(o=o||w_(A),b?(h(e.dynamicChildren,b,T,s,r,o,a),Av(e,t,!0)):l||d(e,t,T,R,s,r,o,a,!1),p)C||Qc(t,n,S,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const N=t.target=sm(t.props,g);N&&Qc(t,N,null,c,0)}else C&&Qc(t,A,k,c,1)}AC(t)},remove(e,t,n,i,{um:s,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:d,props:h}=e;if(d&&r(u),(o||!sl(h))&&(r(c),a&16))for(let f=0;f<l.length;f++){const g=l[f];s(g,t,n,!0,!!g.dynamicChildren)}},move:Qc,hydrate:iV};function Qc(e,t,n,{o:{insert:i},m:s},r=2){r===0&&i(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=e,d=r===2;if(d&&i(o,t,n),(!d||sl(u))&&l&16)for(let h=0;h<c.length;h++)s(c[h],t,n,2);d&&i(a,t,n)}function iV(e,t,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=t.target=sm(t.props,l);if(u){const d=u._lpa||u.firstChild;if(t.shapeFlag&16)if(sl(t.props))t.anchor=c(o(e),t,a(e),n,i,s,r),t.targetAnchor=d;else{t.anchor=o(e);let h=d;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){t.targetAnchor=h,u._lpa=t.targetAnchor&&o(t.targetAnchor);break}c(d,t,u,n,i,s,r)}AC(t)}return t.anchor&&o(t.anchor)}const sV=nV;function AC(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Ee=Symbol.for("v-fgt"),Pr=Symbol.for("v-txt"),Sn=Symbol.for("v-cmt"),rl=Symbol.for("v-stc"),ol=[];let Yn=null;function Pi(e=!1){ol.push(Yn=e?null:[])}function kC(){ol.pop(),Yn=ol[ol.length-1]||null}let Fo=1;function E_(e){Fo+=e}function RC(e){return e.dynamicChildren=Fo>0?Yn||Eo:null,kC(),Fo>0&&Yn&&Yn.push(e),e}function B7(e,t,n,i,s,r){return RC(xC(e,t,n,i,s,r,!0))}function Yi(e,t,n,i,s){return RC(m(e,t,n,i,s,!0))}function Bo(e){return e?e.__v_isVNode===!0:!1}function hi(e,t){return e.type===t.type&&e.key===t.key}const $d="__vInternal",PC=({key:e})=>e??null,_u=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?yt(e)||pt(e)||Re(e)?{i:Ut,r:e,k:t,f:!!n}:e:null);function xC(e,t=null,n=null,i=0,s=null,r=e===Ee?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&PC(t),ref:t&&_u(t),scopeId:Md,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ut};return a?(kv(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=yt(n)?8:16),Fo>0&&!o&&Yn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Yn.push(l),l}const m=rV;function rV(e,t=null,n=null,i=0,s=null,r=!1){if((!e||e===gC)&&(e=Sn),Bo(e)){const a=Bi(e,t,!0);return n&&kv(a,n),Fo>0&&!r&&Yn&&(a.shapeFlag&6?Yn[Yn.indexOf(e)]=a:Yn.push(a)),a.patchFlag|=-2,a}if(fV(e)&&(e=e.__vccOpts),t){t=VC(t);let{class:a,style:l}=t;a&&!yt(a)&&(t.class=Vd(a)),ct(l)&&(GE(l)&&!Te(l)&&(l=Ct({},l)),t.style=xd(l))}const o=yt(e)?1:rC(e)?128:tV(e)?64:ct(e)?4:Re(e)?2:0;return xC(e,t,n,i,s,o,r,!0)}function VC(e){return e?GE(e)||$d in e?Ct({},e):e:null}function Bi(e,t,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=e,a=t?ce(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&PC(a),ref:t&&t.ref?n&&s?Te(s)?s.concat(_u(t)):[s,_u(t)]:_u(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ee?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Bi(e.ssContent),ssFallback:e.ssFallback&&Bi(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ua(e=" ",t=0){return m(Pr,null,e,t)}function $7(e,t){const n=m(rl,null,e);return n.staticCount=t,n}function U7(e="",t=!1){return t?(Pi(),Yi(Sn,null,e)):m(Sn,null,e)}function Kn(e){return e==null||typeof e=="boolean"?m(Sn):Te(e)?m(Ee,null,e.slice()):typeof e=="object"?Is(e):m(Pr,null,String(e))}function Is(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Bi(e)}function kv(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(Te(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),kv(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!($d in t)?t._ctx=Ut:s===3&&Ut&&(Ut.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Re(t)?(t={default:t,_ctx:Ut},n=32):(t=String(t),i&64?(n=16,t=[ua(t)]):n=8);e.children=t,e.shapeFlag|=n}function ce(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Vd([t.class,i.class]));else if(s==="style")t.style=xd([t.style,i.style]);else if(sc(s)){const r=t[s],o=i[s];o&&r!==o&&!(Te(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function Rn(e,t,n,i=null){Jn(e,t,7,[n,i])}const oV=_C();let aV=0;function lV(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||oV,r={uid:aV++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ME(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:EC(i,s),emitsOptions:sC(i,s),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:i.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=px.bind(null,r),e.ce&&e.ce(r),r}let Rt=null;const Gs=()=>Rt||Ut;let Rv,so,C_="__VUE_INSTANCE_SETTERS__";(so=Yf()[C_])||(so=Yf()[C_]=[]),so.push(e=>Rt=e),Rv=e=>{so.length>1?so.forEach(t=>t(e)):so[0](e)};const $o=e=>{Rv(e),e.scope.on()},wr=()=>{Rt&&Rt.scope.off(),Rv(null)};function NC(e){return e.vnode.shapeFlag&4}let Uo=!1;function cV(e,t=!1){Uo=t;const{props:n,children:i}=e.vnode,s=NC(e);qx(e,n,s,t),Yx(e,i);const r=s?uV(e,t):void 0;return Uo=!1,r}function uV(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ou(new Proxy(e.ctx,Fx));const{setup:i}=n;if(i){const s=e.setupContext=i.length>1?hV(e):null;$o(e),aa();const r=Os(i,e,0,[e.props,s]);if(la(),wr(),xE(r)){if(r.then(wr,wr),t)return r.then(o=>{rm(e,o,t)}).catch(o=>{ca(o,e,0)});e.asyncDep=r}else rm(e,r,t)}else OC(e,t)}function rm(e,t,n){Re(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ct(t)&&(e.setupState=JE(t)),OC(e,n)}let T_;function OC(e,t,n){const i=e.type;if(!e.render){if(!t&&T_&&!i.render){const s=i.template||Iv(e).template;if(s){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ct(Ct({isCustomElement:r,delimiters:a},o),l);i.render=T_(s,c)}}e.render=i.render||pi}$o(e),aa(),Bx(e),la(),wr()}function dV(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Vn(e,"get","$attrs"),t[n]}}))}function hV(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return dV(e)},slots:e.slots,emit:e.emit,expose:t}}function Ud(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(JE(Ou(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in il)return il[n](e)},has(t,n){return n in t||n in il}}))}function om(e,t=!0){return Re(e)?e.displayName||e.name:e.name||t&&e.__name}function fV(e){return Re(e)&&"__vccOpts"in e}const w=(e,t)=>hx(e,t,Uo);function xt(e,t,n){const i=arguments.length;return i===2?ct(t)&&!Te(t)?Bo(t)?m(e,null,[t]):m(e,t):m(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Bo(n)&&(n=[n]),m(e,t,n))}const mV=Symbol.for("v-scx"),gV=()=>De(mV),DC="3.3.4",vV="http://www.w3.org/2000/svg",ur=typeof document<"u"?document:null,I_=ur&&ur.createElement("template"),pV={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t?ur.createElementNS(vV,e):ur.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>ur.createTextNode(e),createComment:e=>ur.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ur.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,r){const o=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{I_.innerHTML=i?`<svg>${e}</svg>`:e;const a=I_.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function yV(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function _V(e,t,n){const i=e.style,s=yt(n);if(n&&!s){if(t&&!yt(t))for(const r in t)n[r]==null&&am(i,r,"");for(const r in n)am(i,r,n[r])}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const S_=/\s*!important$/;function am(e,t,n){if(Te(n))n.forEach(i=>am(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=bV(e,t);S_.test(n)?e.setProperty(oa(i),n.replace(S_,""),"important"):e[i]=n}}const A_=["Webkit","Moz","ms"],ef={};function bV(e,t){const n=ef[t];if(n)return n;let i=ei(t);if(i!=="filter"&&i in e)return ef[t]=i;i=hs(i);for(let s=0;s<A_.length;s++){const r=A_[s]+i;if(r in e)return ef[t]=r}return t}const k_="http://www.w3.org/1999/xlink";function wV(e,t,n,i,s){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(k_,t.slice(6,t.length)):e.setAttributeNS(k_,t,n);else{const r=x1(t);n==null||r&&!DE(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function EV(e,t,n,i,s,r,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,s,r),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const c=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=DE(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function ho(e,t,n,i){e.addEventListener(t,n,i)}function CV(e,t,n,i){e.removeEventListener(t,n,i)}function TV(e,t,n,i,s=null){const r=e._vei||(e._vei={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=IV(t);if(i){const c=r[t]=kV(i,s);ho(e,a,c,l)}else o&&(CV(e,a,o,l),r[t]=void 0)}}const R_=/(?:Once|Passive|Capture)$/;function IV(e){let t;if(R_.test(e)){t={};let i;for(;i=e.match(R_);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):oa(e.slice(2)),t]}let tf=0;const SV=Promise.resolve(),AV=()=>tf||(SV.then(()=>tf=0),tf=Date.now());function kV(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Jn(RV(i,n.value),t,5,[i])};return n.value=e,n.attached=AV(),n}function RV(e,t){if(Te(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const P_=/^on[a-z]/,PV=(e,t,n,i,s=!1,r,o,a,l)=>{t==="class"?yV(e,i,s):t==="style"?_V(e,n,i):sc(t)?tv(t)||TV(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):xV(e,t,i,s))?EV(e,t,i,r,o,a,l):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),wV(e,t,i,s))};function xV(e,t,n,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&P_.test(t)&&Re(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||P_.test(t)&&yt(n)?!1:t in e}const Es="transition",Na="animation",ti=(e,{slots:t})=>xt(Px,MC(e),t);ti.displayName="Transition";const LC={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},VV=ti.props=Ct({},cC,LC),ir=(e,t=[])=>{Te(e)?e.forEach(n=>n(...t)):e&&e(...t)},x_=e=>e?Te(e)?e.some(t=>t.length>1):e.length>1:!1;function MC(e){const t={};for(const x in e)x in LC||(t[x]=e[x]);if(e.css===!1)return t;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,g=NV(s),v=g&&g[0],_=g&&g[1],{onBeforeEnter:p,onEnter:y,onEnterCancelled:E,onLeave:b,onLeaveCancelled:S,onBeforeAppear:A=p,onAppear:k=y,onAppearCancelled:C=E}=t,T=(x,O,D)=>{Ts(x,O?u:a),Ts(x,O?c:o),D&&D()},R=(x,O)=>{x._isLeaving=!1,Ts(x,d),Ts(x,f),Ts(x,h),O&&O()},N=x=>(O,D)=>{const J=x?k:y,X=()=>T(O,x,D);ir(J,[O,X]),V_(()=>{Ts(O,x?l:r),qi(O,x?u:a),x_(J)||N_(O,i,v,X)})};return Ct(t,{onBeforeEnter(x){ir(p,[x]),qi(x,r),qi(x,o)},onBeforeAppear(x){ir(A,[x]),qi(x,l),qi(x,c)},onEnter:N(!1),onAppear:N(!0),onLeave(x,O){x._isLeaving=!0;const D=()=>R(x,O);qi(x,d),BC(),qi(x,h),V_(()=>{x._isLeaving&&(Ts(x,d),qi(x,f),x_(b)||N_(x,i,_,D))}),ir(b,[x,D])},onEnterCancelled(x){T(x,!1),ir(E,[x])},onAppearCancelled(x){T(x,!0),ir(C,[x])},onLeaveCancelled(x){R(x),ir(S,[x])}})}function NV(e){if(e==null)return null;if(ct(e))return[nf(e.enter),nf(e.leave)];{const t=nf(e);return[t,t]}}function nf(e){return OE(e)}function qi(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Ts(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function V_(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let OV=0;function N_(e,t,n,i){const s=e._endId=++OV,r=()=>{s===e._endId&&i()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=FC(e,t);if(!o)return i();const c=o+"end";let u=0;const d=()=>{e.removeEventListener(c,h),r()},h=f=>{f.target===e&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),e.addEventListener(c,h)}function FC(e,t){const n=window.getComputedStyle(e),i=g=>(n[g]||"").split(", "),s=i(`${Es}Delay`),r=i(`${Es}Duration`),o=O_(s,r),a=i(`${Na}Delay`),l=i(`${Na}Duration`),c=O_(a,l);let u=null,d=0,h=0;t===Es?o>0&&(u=Es,d=o,h=r.length):t===Na?c>0&&(u=Na,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?Es:Na:null,h=u?u===Es?r.length:l.length:0);const f=u===Es&&/\b(transform|all)(,|$)/.test(i(`${Es}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:f}}function O_(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>D_(n)+D_(e[i])))}function D_(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function BC(){return document.body.offsetHeight}const $C=new WeakMap,UC=new WeakMap,HC={name:"TransitionGroup",props:Ct({},VV,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Gs(),i=lC();let s,r;return Ev(()=>{if(!s.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!$V(s[0].el,n.vnode.el,o))return;s.forEach(MV),s.forEach(FV);const a=s.filter(BV);BC(),a.forEach(l=>{const c=l.el,u=c.style;qi(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=c._moveCb=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",d),c._moveCb=null,Ts(c,o))};c.addEventListener("transitionend",d)})}),()=>{const o=Me(e),a=MC(o);let l=o.tag||Ee;s=r,r=t.default?_v(t.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Mo(u,kl(u,a,i,n))}if(s)for(let c=0;c<s.length;c++){const u=s[c];Mo(u,kl(u,a,i,n)),$C.set(u,u.el.getBoundingClientRect())}return m(l,null,r)}}},DV=e=>delete e.mode;HC.props;const LV=HC;function MV(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function FV(e){UC.set(e,e.el.getBoundingClientRect())}function BV(e){const t=$C.get(e),n=UC.get(e),i=t.left-n.left,s=t.top-n.top;if(i||s){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${i}px,${s}px)`,r.transitionDuration="0s",e}}function $V(e,t,n){const i=e.cloneNode();e._vtc&&e._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(i);const{hasTransform:r}=FC(i);return s.removeChild(i),r}const L_=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Te(t)?n=>To(t,n):t};function UV(e){e.target.composing=!0}function M_(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const HV={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=L_(s);const r=i||s.props&&s.props.type==="number";ho(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),r&&(a=Gf(a)),e._assign(a)}),n&&ho(e,"change",()=>{e.value=e.value.trim()}),t||(ho(e,"compositionstart",UV),ho(e,"compositionend",M_),ho(e,"change",M_))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},r){if(e._assign=L_(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||i&&e.value.trim()===t||(s||e.type==="number")&&Gf(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},jV=["ctrl","shift","alt","meta"],zV={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>jV.some(n=>e[`${n}Key`]&&!t.includes(n))},H7=(e,t)=>(n,...i)=>{for(let s=0;s<t.length;s++){const r=zV[t[s]];if(r&&r(n,t))return}return e(n,...i)},ji={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Oa(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!=!n&&(i?t?(i.beforeEnter(e),Oa(e,!0),i.enter(e)):i.leave(e,()=>{Oa(e,!1)}):Oa(e,t))},beforeUnmount(e,{value:t}){Oa(e,t)}};function Oa(e,t){e.style.display=t?e._vod:"none"}const jC=Ct({patchProp:PV},pV);let al,F_=!1;function WV(){return al||(al=Jx(jC))}function qV(){return al=F_?al:Zx(jC),F_=!0,al}const KV=(...e)=>{const t=WV().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=zC(i);if(!s)return;const r=t._component;!Re(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t},GV=(...e)=>{const t=qV().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=zC(i);if(s)return n(s,!0,s instanceof SVGElement)},t};function zC(e){return yt(e)?document.querySelector(e):e}const YV=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,QV=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,XV=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function JV(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){ZV(e);return}return t}function ZV(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function eN(e,t={}){if(typeof e!="string")return e;const n=e.trim();if(e[0]==='"'&&e[e.length-1]==='"')return n.slice(1,-1);if(n.length<=9){const i=n.toLowerCase();if(i==="true")return!0;if(i==="false")return!1;if(i==="undefined")return;if(i==="null")return null;if(i==="nan")return Number.NaN;if(i==="infinity")return Number.POSITIVE_INFINITY;if(i==="-infinity")return Number.NEGATIVE_INFINITY}if(!XV.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(YV.test(e)||QV.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,JV)}return JSON.parse(e)}catch(i){if(t.strict)throw i;return e}}const tN=/#/g,nN=/&/g,iN=/=/g,Pv=/\+/g,sN=/%5e/gi,rN=/%60/gi,oN=/%7c/gi,aN=/%20/gi;function lN(e){return encodeURI(""+e).replace(oN,"|")}function lm(e){return lN(typeof e=="string"?e:JSON.stringify(e)).replace(Pv,"%2B").replace(aN,"+").replace(tN,"%23").replace(nN,"%26").replace(rN,"`").replace(sN,"^")}function sf(e){return lm(e).replace(iN,"%3D")}function Bu(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function cN(e){return Bu(e.replace(Pv," "))}function uN(e){return Bu(e.replace(Pv," "))}function dN(e=""){const t={};e[0]==="?"&&(e=e.slice(1));for(const n of e.split("&")){const i=n.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const s=cN(i[1]);if(s==="__proto__"||s==="constructor")continue;const r=uN(i[2]||"");t[s]===void 0?t[s]=r:Array.isArray(t[s])?t[s].push(r):t[s]=[t[s],r]}return t}function hN(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(n=>`${sf(e)}=${lm(n)}`).join("&"):`${sf(e)}=${lm(t)}`:sf(e)}function fN(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>hN(t,e[t])).filter(Boolean).join("&")}const mN=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,gN=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,vN=/^([/\\]\s*){2,}[^/\\]/;function cc(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?mN.test(e):gN.test(e)||(t.acceptRelative?vN.test(e):!1)}const pN=/^[\s\0]*(blob|data|javascript|vbscript):$/;function yN(e){return!!e&&pN.test(e)}const _N=/\/$|\/\?/;function cm(e="",t=!1){return t?_N.test(e):e.endsWith("/")}function WC(e="",t=!1){if(!t)return(cm(e)?e.slice(0,-1):e)||"/";if(!cm(e,!0))return e||"/";const[n,...i]=e.split("?");return(n.slice(0,-1)||"/")+(i.length>0?`?${i.join("?")}`:"")}function um(e="",t=!1){if(!t)return e.endsWith("/")?e:e+"/";if(cm(e,!0))return e||"/";const[n,...i]=e.split("?");return n+"/"+(i.length>0?`?${i.join("?")}`:"")}function bN(e=""){return e.startsWith("/")}function B_(e=""){return bN(e)?e:"/"+e}function wN(e,t){if(KC(t)||cc(e))return e;const n=WC(t);return e.startsWith(n)?e:uc(n,e)}function $_(e,t){if(KC(t))return e;const n=WC(t);if(!e.startsWith(n))return e;const i=e.slice(n.length);return i[0]==="/"?i:"/"+i}function qC(e,t){const n=Hd(e),i={...dN(n.search),...t};return n.search=fN(i),IN(n)}function KC(e){return!e||e==="/"}function EN(e){return e&&e!=="/"}const CN=/^\.?\//;function uc(e,...t){let n=e||"";for(const i of t.filter(s=>EN(s)))if(n){const s=i.replace(CN,"");n=um(n)+s}else n=i;return n}function TN(e,t,n={}){return n.trailingSlash||(e=um(e),t=um(t)),n.leadingSlash||(e=B_(e),t=B_(t)),n.encoding||(e=Bu(e),t=Bu(t)),e===t}function Hd(e="",t){const n=e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/);if(n){const[,d,h=""]=n;return{protocol:d,pathname:h,href:d+h,auth:"",host:"",search:"",hash:""}}if(!cc(e,{acceptRelative:!0}))return t?Hd(t+e):U_(e);const[,i="",s,r=""]=e.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,o="",a=""]=r.match(/([^#/?]*)(.*)?/)||[],{pathname:l,search:c,hash:u}=U_(a.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:i,auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:c,hash:u}}function U_(e=""){const[t="",n="",i=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:n,hash:i}}function IN(e){const t=e.pathname||"",n=e.search?(e.search.startsWith("?")?"":"?")+e.search:"",i=e.hash||"",s=e.auth?e.auth+"@":"",r=e.host||"";return(e.protocol?e.protocol+"//":"")+s+r+t+n+i}class SN extends Error{constructor(t,n){super(t,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function AN(e){var l,c,u,d,h;const t=((l=e.error)==null?void 0:l.message)||((c=e.error)==null?void 0:c.toString())||"",n=((u=e.request)==null?void 0:u.method)||((d=e.options)==null?void 0:d.method)||"GET",i=((h=e.request)==null?void 0:h.url)||String(e.request)||"/",s=`[${n}] ${JSON.stringify(i)}`,r=e.response?`${e.response.status} ${e.response.statusText}`:"<no response>",o=`${s}: ${r}${t?` ${t}`:""}`,a=new SN(o,e.error?{cause:e.error}:void 0);for(const f of["request","options","response"])Object.defineProperty(a,f,{get(){return e[f]}});for(const[f,g]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,f,{get(){return e.response&&e.response[g]}});return a}const kN=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function H_(e="GET"){return kN.has(e.toUpperCase())}function RN(e){if(e===void 0)return!1;const t=typeof e;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(e)?!0:e.buffer?!1:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const PN=new Set(["image/svg","application/xml","application/xhtml","application/html"]),xN=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function VN(e=""){if(!e)return"json";const t=e.split(";").shift()||"";return xN.test(t)?"json":PN.has(t)||t.startsWith("text/")?"text":"blob"}function NN(e,t,n=globalThis.Headers){const i={...t,...e};if(t!=null&&t.params&&(e!=null&&e.params)&&(i.params={...t==null?void 0:t.params,...e==null?void 0:e.params}),t!=null&&t.query&&(e!=null&&e.query)&&(i.query={...t==null?void 0:t.query,...e==null?void 0:e.query}),t!=null&&t.headers&&(e!=null&&e.headers)){i.headers=new n((t==null?void 0:t.headers)||{});for(const[s,r]of new n((e==null?void 0:e.headers)||{}))i.headers.set(s,r)}return i}const ON=new Set([408,409,425,429,500,502,503,504]),DN=new Set([101,204,205,304]);function GC(e={}){const{fetch:t=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:i=globalThis.AbortController}=e;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let u;typeof a.options.retry=="number"?u=a.options.retry:u=H_(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(u>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):ON.has(d))){const h=a.options.retryDelay||0;return h>0&&await new Promise(f=>setTimeout(f,h)),r(a.request,{...a.options,retry:u-1,timeout:a.options.timeout})}}const c=AN(a);throw Error.captureStackTrace&&Error.captureStackTrace(c,r),c}const r=async function(l,c={}){var h;const u={request:l,options:NN(c,e.defaults,n),response:void 0,error:void 0};if(u.options.method=(h=u.options.method)==null?void 0:h.toUpperCase(),u.options.onRequest&&await u.options.onRequest(u),typeof u.request=="string"&&(u.options.baseURL&&(u.request=wN(u.request,u.options.baseURL)),(u.options.query||u.options.params)&&(u.request=qC(u.request,{...u.options.params,...u.options.query}))),u.options.body&&H_(u.options.method)&&(RN(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new n(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half"))),!u.options.signal&&u.options.timeout){const f=new i;setTimeout(()=>f.abort(),u.options.timeout),u.options.signal=f.signal}try{u.response=await t(u.request,u.options)}catch(f){return u.error=f,u.options.onRequestError&&await u.options.onRequestError(u),await s(u)}if(u.response.body&&!DN.has(u.response.status)&&u.options.method!=="HEAD"){const f=(u.options.parseResponse?"json":u.options.responseType)||VN(u.response.headers.get("content-type")||"");switch(f){case"json":{const g=await u.response.text(),v=u.options.parseResponse||eN;u.response._data=v(g);break}case"stream":{u.response._data=u.response.body;break}default:u.response._data=await u.response[f]()}}return u.options.onResponse&&await u.options.onResponse(u),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await u.options.onResponseError(u),await s(u)):u.response},o=async function(l,c){return(await r(l,c))._data};return o.raw=r,o.native=(...a)=>t(...a),o.create=(a={})=>GC({...e,defaults:{...e.defaults,...a}}),o}const xv=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),LN=xv.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),MN=xv.Headers,FN=xv.AbortController,BN=GC({fetch:LN,Headers:MN,AbortController:FN}),$N=BN,UN=()=>{var e;return((e=window==null?void 0:window.__NUXT__)==null?void 0:e.config)||{}},$u=UN().app,HN=()=>$u.baseURL,jN=()=>$u.buildAssetsDir,zN=(...e)=>uc(YC(),jN(),...e),YC=(...e)=>{const t=$u.cdnURL||$u.baseURL;return e.length?uc(t,...e):t};globalThis.__buildAssetsURL=zN,globalThis.__publicAssetsURL=YC;function dm(e,t={},n){for(const i in e){const s=e[i],r=n?`${n}:${i}`:i;typeof s=="object"&&s!==null?dm(s,t,r):typeof s=="function"&&(t[r]=s)}return t}const WN={run:e=>e()},qN=()=>WN,QC=typeof console.createTask<"u"?console.createTask:qN;function KN(e,t){const n=t.shift(),i=QC(n);return e.reduce((s,r)=>s.then(()=>i.run(()=>r(...t))),Promise.resolve())}function GN(e,t){const n=t.shift(),i=QC(n);return Promise.all(e.map(s=>i.run(()=>s(...t))))}function rf(e,t){for(const n of[...e])n(t)}class YN{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,i={}){if(!t||typeof n!="function")return()=>{};const s=t;let r;for(;this._deprecatedHooks[t];)r=this._deprecatedHooks[t],t=r.to;if(r&&!i.allowDeprecated){let o=r.message;o||(o=`${s} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let i,s=(...r)=>(typeof i=="function"&&i(),i=void 0,s=void 0,n(...r));return i=this.hook(t,s),i}removeHook(t,n){if(this._hooks[t]){const i=this._hooks[t].indexOf(n);i!==-1&&this._hooks[t].splice(i,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const i=this._hooks[t]||[];delete this._hooks[t];for(const s of i)this.hook(t,s)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=dm(t),i=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of i.splice(0,i.length))s()}}removeHooks(t){const n=dm(t);for(const i in n)this.removeHook(i,n[i])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(KN,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(GN,t,...n)}callHookWith(t,n,...i){const s=this._before||this._after?{name:n,args:i,context:{}}:void 0;this._before&&rf(this._before,s);const r=t(n in this._hooks?[...this._hooks[n]]:[],i);return r instanceof Promise?r.finally(()=>{this._after&&s&&rf(this._after,s)}):(this._after&&s&&rf(this._after,s),r)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function XC(){return new YN}function QN(e={}){let t,n=!1;const i=o=>{if(t&&t!==o)throw new Error("Context conflict")};let s;if(e.asyncContext){const o=e.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const r=()=>{if(s&&t===void 0){const o=s.getStore();if(o!==void 0)return o}return t};return{use:()=>{const o=r();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>r(),set:(o,a)=>{a||i(o),t=o,n=!0},unset:()=>{t=void 0,n=!1},call:(o,a)=>{i(o),t=o;try{return s?s.run(o,a):a()}finally{n||(t=void 0)}},async callAsync(o,a){t=o;const l=()=>{t=o},c=()=>t===o?l:void 0;hm.add(c);try{const u=s?s.run(o,a):a();return n||(t=void 0),await u}finally{hm.delete(c)}}}}function XN(e={}){const t={};return{get(n,i={}){return t[n]||(t[n]=QN({...e,...i})),t[n],t[n]}}}const Uu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},j_="__unctx__",JN=Uu[j_]||(Uu[j_]=XN()),ZN=(e,t={})=>JN.get(e,t),z_="__unctx_async_handlers__",hm=Uu[z_]||(Uu[z_]=new Set);function Hu(e){const t=[];for(const s of hm){const r=s();r&&t.push(r)}const n=()=>{for(const s of t)s()};let i=e();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(s=>{throw n(),s})),[i,n]}const JC=ZN("nuxt-app",{asyncContext:!1}),eO="__nuxt_plugin";function tO(e){let t=0;const n={provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.7.0"},get vue(){return n.vueApp.version}},payload:kt({data:{},state:{},_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:s=>rO(n,s),isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};t++;let s=!1;return()=>{if(!s&&(s=!0,t--,t===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...e};n.hooks=XC(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,r)=>{const o="$"+s;Xc(n,o,r),Xc(n.vueApp.config.globalProperties,o,r)},Xc(n.vueApp,"$nuxt",n),Xc(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",r=>{n.callHook("app:chunkError",{error:r.payload})}),window.useNuxtApp=window.useNuxtApp||wt;const s=n.hook("app:error",(...r)=>{console.error("[nuxt] error caught during app initialization",...r)});n.hook("app:mounted",s)}const i=kt(n.payload.config);return n.provide("config",i),n}async function nO(e,t){if(t.hooks&&e.hooks.addHooks(t.hooks),typeof t=="function"){const{provide:n}=await e.runWithContext(()=>t(e))||{};if(n&&typeof n=="object")for(const i in n)e.provide(i,n[i])}}async function iO(e,t){const n=[],i=[];for(const s of t){const r=nO(e,s);s.parallel?n.push(r.catch(o=>i.push(o))):await r}if(await Promise.all(n),i.length)throw i[0]}/*! @__NO_SIDE_EFFECTS__ */function jn(e){return typeof e=="function"?e:(delete e.name,Object.assign(e.setup||(()=>{}),e,{[eO]:!0}))}const sO=jn;function rO(e,t,n){const i=()=>n?t(...n):t();return JC.set(e),e.vueApp.runWithContext(i)}/*! @__NO_SIDE_EFFECTS__ */function wt(){var t;let e;if(bC()&&(e=(t=Gs())==null?void 0:t.appContext.app.$nuxt),e=e||JC.tryUse(),!e)throw new Error("[nuxt] instance unavailable");return e}/*! @__NO_SIDE_EFFECTS__ */function Vv(){return wt().$config}function Xc(e,t,n){Object.defineProperty(e,t,{get:()=>n})}/**
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
 */const ZC={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const me=function(e,t){if(!e)throw da(t)},da=function(e){return new Error("Firebase Database ("+ZC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
 */const eT=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},oO=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=e[n++],o=e[n++],a=e[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(l&1023))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},jd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const r=e[s],o=s+1<e.length,a=o?e[s+1]:0,l=s+2<e.length,c=l?e[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),i.push(n[u],n[d],n[h],n[f])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(eT(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):oO(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const r=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const d=s<e.length?n[e.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new aO;const h=r<<2|a>>4;if(i.push(h),c!==64){const f=a<<4&240|c>>2;if(i.push(f),d!==64){const g=c<<6&192|d;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class aO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tT=function(e){const t=eT(e);return jd.encodeByteArray(t,!0)},ju=function(e){return tT(e).replace(/\./g,"")},zu=function(e){try{return jd.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function lO(e){return nT(void 0,e)}function nT(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!cO(n)||(e[n]=nT(e[n],t[n]));return e}function cO(e){return e!=="__proto__"}/**
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
 */function uO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dO=()=>uO().__FIREBASE_DEFAULTS__,hO=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},fO=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&zu(e[1]);return t&&JSON.parse(t)},Nv=()=>{try{return dO()||hO()||fO()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},iT=e=>{var t,n;return(n=(t=Nv())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},sT=e=>{const t=iT(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},rT=()=>{var e;return(e=Nv())===null||e===void 0?void 0:e.config},oT=e=>{var t;return(t=Nv())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Pl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function aT(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[ju(JSON.stringify(n)),ju(JSON.stringify(o)),a].join(".")}/**
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
 */function vn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ov(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vn())}function mO(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function lT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gO(){const e=vn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function cT(){return ZC.NODE_ADMIN===!0}function uT(){try{return typeof indexedDB=="object"}catch{return!1}}function vO(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
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
 */const pO="FirebaseError";class zi extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=pO,Object.setPrototypeOf(this,zi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ha.prototype.create)}}class ha{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?yO(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new zi(s,a,i)}}function yO(e,t){return e.replace(_O,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const _O=/\{\$([^}]+)}/g;/**
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
 */function xl(e){return JSON.parse(e)}function Xt(e){return JSON.stringify(e)}/**
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
 */const dT=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=xl(zu(r[0])||""),n=xl(zu(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:s}},bO=function(e){const t=dT(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},wO=function(e){const t=dT(e).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function gs(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ho(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function fm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Wu(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function qu(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const r=e[s],o=t[s];if(W_(r)&&W_(o)){if(!qu(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function W_(e){return e!==null&&typeof e=="object"}/**
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
 */function fa(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}/**
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
 */class EO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let d=0;d<16;d++)i[d]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(s<<5|s>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<n;)if(r[o]=t.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=t[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)t[i]=this.chain_[s]>>r&255,++i;return t}}function CO(e,t){const n=new TO(e,t);return n.subscribe.bind(n)}class TO{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let s;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");IO(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:i},s.next===void 0&&(s.next=of),s.error===void 0&&(s.error=of),s.complete===void 0&&(s.complete=of);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IO(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function of(){}function SO(e,t){return`${e} failed: ${t} argument `}/**
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
 */const AO=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,me(i<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},zd=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function An(e){return e&&e._delegate?e._delegate:e}class _i{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const or="[DEFAULT]";/**
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
 */class kO{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new Pl;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(PO(t))try{this.getOrInitializeService({instanceIdentifier:or})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=or){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=or){return this.instances.has(t)}getOptions(t=or){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(t,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:RO(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=or){return this.component?this.component.multipleInstances?t:or:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RO(e){return e===or?void 0:e}function PO(e){return e.instantiationMode==="EAGER"}/**
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
 */class xO{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new kO(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ke;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Ke||(Ke={}));const VO={debug:Ke.DEBUG,verbose:Ke.VERBOSE,info:Ke.INFO,warn:Ke.WARN,error:Ke.ERROR,silent:Ke.SILENT},NO=Ke.INFO,OO={[Ke.DEBUG]:"log",[Ke.VERBOSE]:"log",[Ke.INFO]:"info",[Ke.WARN]:"warn",[Ke.ERROR]:"error"},DO=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=OO[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class dc{constructor(t){this.name=t,this._logLevel=NO,this._logHandler=DO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ke))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?VO[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ke.DEBUG,...t),this._logHandler(this,Ke.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ke.VERBOSE,...t),this._logHandler(this,Ke.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ke.INFO,...t),this._logHandler(this,Ke.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ke.WARN,...t),this._logHandler(this,Ke.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ke.ERROR,...t),this._logHandler(this,Ke.ERROR,...t)}}const LO=(e,t)=>t.some(n=>e instanceof n);let q_,K_;function MO(){return q_||(q_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FO(){return K_||(K_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hT=new WeakMap,mm=new WeakMap,fT=new WeakMap,af=new WeakMap,Dv=new WeakMap;function BO(e){const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(Ds(e.result)),s()},o=()=>{i(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&hT.set(n,e)}).catch(()=>{}),Dv.set(t,e),t}function $O(e){if(mm.has(e))return;const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});mm.set(e,t)}let gm={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return mm.get(e);if(t==="objectStoreNames")return e.objectStoreNames||fT.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ds(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function UO(e){gm=e(gm)}function HO(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(lf(this),t,...n);return fT.set(i,t.sort?t.sort():[t]),Ds(i)}:FO().includes(e)?function(...t){return e.apply(lf(this),t),Ds(hT.get(this))}:function(...t){return Ds(e.apply(lf(this),t))}}function jO(e){return typeof e=="function"?HO(e):(e instanceof IDBTransaction&&$O(e),LO(e,MO())?new Proxy(e,gm):e)}function Ds(e){if(e instanceof IDBRequest)return BO(e);if(af.has(e))return af.get(e);const t=jO(e);return t!==e&&(af.set(e,t),Dv.set(t,e)),t}const lf=e=>Dv.get(e);function zO(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=Ds(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Ds(o.result),l.oldVersion,l.newVersion,Ds(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const WO=["get","getKey","getAll","getAllKeys","count"],qO=["put","add","delete","clear"],cf=new Map;function G_(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(cf.get(t))return cf.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=qO.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||WO.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return cf.set(t,r),r}UO(e=>({...e,get:(t,n,i)=>G_(t,n)||e.get(t,n,i),has:(t,n)=>!!G_(t,n)||e.has(t,n)}));/**
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
 */class KO{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GO(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function GO(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const vm="@firebase/app",Y_="0.9.17";/**
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
 */const xr=new dc("@firebase/app"),YO="@firebase/app-compat",QO="@firebase/analytics-compat",XO="@firebase/analytics",JO="@firebase/app-check-compat",ZO="@firebase/app-check",eD="@firebase/auth",tD="@firebase/auth-compat",nD="@firebase/database",iD="@firebase/database-compat",sD="@firebase/functions",rD="@firebase/functions-compat",oD="@firebase/installations",aD="@firebase/installations-compat",lD="@firebase/messaging",cD="@firebase/messaging-compat",uD="@firebase/performance",dD="@firebase/performance-compat",hD="@firebase/remote-config",fD="@firebase/remote-config-compat",mD="@firebase/storage",gD="@firebase/storage-compat",vD="@firebase/firestore",pD="@firebase/firestore-compat",yD="firebase",_D="10.3.0";/**
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
 */const pm="[DEFAULT]",bD={[vm]:"fire-core",[YO]:"fire-core-compat",[XO]:"fire-analytics",[QO]:"fire-analytics-compat",[ZO]:"fire-app-check",[JO]:"fire-app-check-compat",[eD]:"fire-auth",[tD]:"fire-auth-compat",[nD]:"fire-rtdb",[iD]:"fire-rtdb-compat",[sD]:"fire-fn",[rD]:"fire-fn-compat",[oD]:"fire-iid",[aD]:"fire-iid-compat",[lD]:"fire-fcm",[cD]:"fire-fcm-compat",[uD]:"fire-perf",[dD]:"fire-perf-compat",[hD]:"fire-rc",[fD]:"fire-rc-compat",[mD]:"fire-gcs",[gD]:"fire-gcs-compat",[vD]:"fire-fst",[pD]:"fire-fst-compat","fire-js":"fire-js",[yD]:"fire-js-all"};/**
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
 */const Ku=new Map,ym=new Map;function wD(e,t){try{e.container.addComponent(t)}catch(n){xr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $i(e){const t=e.name;if(ym.has(t))return xr.debug(`There were multiple attempts to register component ${t}.`),!1;ym.set(t,e);for(const n of Ku.values())wD(n,e);return!0}function Wd(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const ED={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ls=new ha("app","Firebase",ED);/**
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
 */class CD{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new _i("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ls.create("app-deleted",{appName:this._name})}}/**
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
 */const Ys=_D;function mT(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:pm,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw Ls.create("bad-app-name",{appName:String(s)});if(n||(n=rT()),!n)throw Ls.create("no-options");const r=Ku.get(s);if(r){if(qu(n,r.options)&&qu(i,r.config))return r;throw Ls.create("duplicate-app",{appName:s})}const o=new xO(s);for(const l of ym.values())o.addComponent(l);const a=new CD(n,i,o);return Ku.set(s,a),a}function qd(e=pm){const t=Ku.get(e);if(!t&&e===pm&&rT())return mT();if(!t)throw Ls.create("no-app",{appName:e});return t}function Fn(e,t,n){var i;let s=(i=bD[e])!==null&&i!==void 0?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${t}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xr.warn(a.join(" "));return}$i(new _i(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const TD="firebase-heartbeat-database",ID=1,Vl="firebase-heartbeat-store";let uf=null;function gT(){return uf||(uf=zO(TD,ID,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Vl)}}}).catch(e=>{throw Ls.create("idb-open",{originalErrorMessage:e.message})})),uf}async function SD(e){try{return await(await gT()).transaction(Vl).objectStore(Vl).get(vT(e))}catch(t){if(t instanceof zi)xr.warn(t.message);else{const n=Ls.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xr.warn(n.message)}}}async function Q_(e,t){try{const i=(await gT()).transaction(Vl,"readwrite");await i.objectStore(Vl).put(t,vT(e)),await i.done}catch(n){if(n instanceof zi)xr.warn(n.message);else{const i=Ls.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xr.warn(i.message)}}}function vT(e){return`${e.name}!${e.options.appId}`}/**
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
 */const AD=1024,kD=30*24*60*60*1e3;class RD{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xD(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=X_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=kD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=X_(),{heartbeatsToSend:n,unsentEntries:i}=PD(this._heartbeatsCache.heartbeats),s=ju(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function X_(){return new Date().toISOString().substring(0,10)}function PD(e,t=AD){const n=[];let i=e.slice();for(const s of e){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),J_(n)>t){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),J_(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class xD{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uT()?vO().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await SD(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Q_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Q_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function J_(e){return ju(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function VD(e){$i(new _i("platform-logger",t=>new KO(t),"PRIVATE")),$i(new _i("heartbeat",t=>new RD(t),"PRIVATE")),Fn(vm,Y_,e),Fn(vm,Y_,"esm2017"),Fn("fire-js","")}VD("");var ND=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ge,Lv=Lv||{},Pe=ND||self;function Kd(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function hc(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function OD(e){return Object.prototype.hasOwnProperty.call(e,df)&&e[df]||(e[df]=++DD)}var df="closure_uid_"+(1e9*Math.random()>>>0),DD=0;function LD(e,t,n){return e.call.apply(e.bind,arguments)}function MD(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function fn(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?fn=LD:fn=MD,fn.apply(null,arguments)}function Jc(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function Wt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(i,o)}}function Qs(){this.s=this.s,this.o=this.o}var FD=0;Qs.prototype.s=!1;Qs.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),FD!=0)&&OD(this)};Qs.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const pT=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Mv(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function Z_(e,t){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Kd(i)){const s=e.length||0,r=i.length||0;e.length=s+r;for(let o=0;o<r;o++)e[s+o]=i[o]}else e.push(i)}}function mn(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}mn.prototype.h=function(){this.defaultPrevented=!0};var BD=function(){if(!Pe.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Pe.addEventListener("test",()=>{},t),Pe.removeEventListener("test",()=>{},t)}catch{}return e}();function Nl(e){return/^[\s\xa0]*$/.test(e)}function Gd(){var e=Pe.navigator;return e&&(e=e.userAgent)?e:""}function xi(e){return Gd().indexOf(e)!=-1}function Fv(e){return Fv[" "](e),e}Fv[" "]=function(){};function $D(e,t){var n=VL;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var UD=xi("Opera"),jo=xi("Trident")||xi("MSIE"),yT=xi("Edge"),_m=yT||jo,_T=xi("Gecko")&&!(Gd().toLowerCase().indexOf("webkit")!=-1&&!xi("Edge"))&&!(xi("Trident")||xi("MSIE"))&&!xi("Edge"),HD=Gd().toLowerCase().indexOf("webkit")!=-1&&!xi("Edge");function bT(){var e=Pe.document;return e?e.documentMode:void 0}var bm;e:{var hf="",ff=function(){var e=Gd();if(_T)return/rv:([^\);]+)(\)|;)/.exec(e);if(yT)return/Edge\/([\d\.]+)/.exec(e);if(jo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(HD)return/WebKit\/(\S+)/.exec(e);if(UD)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ff&&(hf=ff?ff[1]:""),jo){var mf=bT();if(mf!=null&&mf>parseFloat(hf)){bm=String(mf);break e}}bm=hf}var wm;if(Pe.document&&jo){var eb=bT();wm=eb||parseInt(bm,10)||void 0}else wm=void 0;var jD=wm;function Ol(e,t){if(mn.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(_T){e:{try{Fv(t.nodeName);var s=!0;break e}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:zD[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ol.$.h.call(this)}}Wt(Ol,mn);var zD={2:"touch",3:"pen",4:"mouse"};Ol.prototype.h=function(){Ol.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var fc="closure_listenable_"+(1e6*Math.random()|0),WD=0;function qD(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=s,this.key=++WD,this.fa=this.ia=!1}function Yd(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Bv(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function KD(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function wT(e){const t={};for(const n in e)t[n]=e[n];return t}const tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ET(e,t){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)e[n]=i[n];for(let r=0;r<tb.length;r++)n=tb[r],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function Qd(e){this.src=e,this.g={},this.h=0}Qd.prototype.add=function(e,t,n,i,s){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Cm(e,t,i,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new qD(t,this.src,r,!!i,s),t.ia=n,e.push(t)),t};function Em(e,t){var n=t.type;if(n in e.g){var i=e.g[n],s=pT(i,t),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Yd(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Cm(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==i)return s}return-1}var $v="closure_lm_"+(1e6*Math.random()|0),gf={};function CT(e,t,n,i,s){if(i&&i.once)return IT(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)CT(e,t[r],n,i,s);return null}return n=jv(n),e&&e[fc]?e.O(t,n,hc(i)?!!i.capture:!!i,s):TT(e,t,n,!1,i,s)}function TT(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=hc(s)?!!s.capture:!!s,a=Hv(e);if(a||(e[$v]=a=new Qd(e)),n=a.add(t,n,i,o,r),n.proxy)return n;if(i=GD(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)BD||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(AT(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function GD(){function e(n){return t.call(e.src,e.listener,n)}const t=YD;return e}function IT(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)IT(e,t[r],n,i,s);return null}return n=jv(n),e&&e[fc]?e.P(t,n,hc(i)?!!i.capture:!!i,s):TT(e,t,n,!0,i,s)}function ST(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)ST(e,t[r],n,i,s);else i=hc(i)?!!i.capture:!!i,n=jv(n),e&&e[fc]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Cm(r,n,i,s),-1<n&&(Yd(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Hv(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Cm(t,n,i,s)),(n=-1<e?t[e]:null)&&Uv(n))}function Uv(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[fc])Em(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(AT(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Hv(t))?(Em(n,e),n.h==0&&(n.src=null,t[$v]=null)):Yd(e)}}}function AT(e){return e in gf?gf[e]:gf[e]="on"+e}function YD(e,t){if(e.fa)e=!0;else{t=new Ol(t,this);var n=e.listener,i=e.la||e.src;e.ia&&Uv(e),e=n.call(i,t)}return e}function Hv(e){return e=e[$v],e instanceof Qd?e:null}var vf="__closure_events_fn_"+(1e9*Math.random()>>>0);function jv(e){return typeof e=="function"?e:(e[vf]||(e[vf]=function(t){return e.handleEvent(t)}),e[vf])}function Ht(){Qs.call(this),this.i=new Qd(this),this.S=this,this.J=null}Wt(Ht,Qs);Ht.prototype[fc]=!0;Ht.prototype.removeEventListener=function(e,t,n,i){ST(this,e,t,n,i)};function Jt(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,typeof t=="string")t=new mn(t,e);else if(t instanceof mn)t.target=t.target||e;else{var s=t;t=new mn(i,e),ET(t,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=Zc(o,i,!0,t)&&s}if(o=t.g=e,s=Zc(o,i,!0,t)&&s,s=Zc(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)o=t.g=n[r],s=Zc(o,i,!1,t)&&s}Ht.prototype.N=function(){if(Ht.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Yd(n[i]);delete e.g[t],e.h--}}this.J=null};Ht.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)};Ht.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};function Zc(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Em(e.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var zv=Pe.JSON.stringify;class QD{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function XD(){var e=Wv;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class JD{constructor(){this.h=this.g=null}add(t,n){const i=kT.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}}var kT=new QD(()=>new ZD,e=>e.reset());class ZD{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function eL(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function tL(e){Pe.setTimeout(()=>{throw e},0)}let Dl,Ll=!1,Wv=new JD,RT=()=>{const e=Pe.Promise.resolve(void 0);Dl=()=>{e.then(nL)}};var nL=()=>{for(var e;e=XD();){try{e.h.call(e.g)}catch(n){tL(n)}var t=kT;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ll=!1};function Xd(e,t){Ht.call(this),this.h=e||1,this.g=t||Pe,this.j=fn(this.qb,this),this.l=Date.now()}Wt(Xd,Ht);ge=Xd.prototype;ge.ga=!1;ge.T=null;ge.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Jt(this,"tick"),this.ga&&(qv(this),this.start()))}};ge.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function qv(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}ge.N=function(){Xd.$.N.call(this),qv(this),delete this.g};function Kv(e,t,n){if(typeof e=="function")n&&(e=fn(e,n));else if(e&&typeof e.handleEvent=="function")e=fn(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:Pe.setTimeout(e,t||0)}function PT(e){e.g=Kv(()=>{e.g=null,e.i&&(e.i=!1,PT(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class iL extends Qs{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:PT(this)}N(){super.N(),this.g&&(Pe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ml(e){Qs.call(this),this.h=e,this.g={}}Wt(Ml,Qs);var nb=[];function xT(e,t,n,i){Array.isArray(n)||(n&&(nb[0]=n.toString()),n=nb);for(var s=0;s<n.length;s++){var r=CT(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function VT(e){Bv(e.g,function(t,n){this.g.hasOwnProperty(n)&&Uv(t)},e),e.g={}}Ml.prototype.N=function(){Ml.$.N.call(this),VT(this)};Ml.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Jd(){this.g=!0}Jd.prototype.Ea=function(){this.g=!1};function sL(e,t,n,i,s,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function rL(e,t,n,i,s,r,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+`
`+n+`
`+r+" "+o})}function vo(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+aL(e,n)+(i?" "+i:"")})}function oL(e,t){e.info(function(){return"TIMEOUT: "+t})}Jd.prototype.info=function(){};function aL(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return zv(n)}catch{return t}}var Wr={},ib=null;function Zd(){return ib=ib||new Ht}Wr.Ta="serverreachability";function NT(e){mn.call(this,Wr.Ta,e)}Wt(NT,mn);function Fl(e){const t=Zd();Jt(t,new NT(t))}Wr.STAT_EVENT="statevent";function OT(e,t){mn.call(this,Wr.STAT_EVENT,e),this.stat=t}Wt(OT,mn);function In(e){const t=Zd();Jt(t,new OT(t,e))}Wr.Ua="timingevent";function DT(e,t){mn.call(this,Wr.Ua,e),this.size=t}Wt(DT,mn);function mc(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return Pe.setTimeout(function(){e()},t)}var eh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},LT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Gv(){}Gv.prototype.h=null;function sb(e){return e.h||(e.h=e.i())}function MT(){}var gc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Yv(){mn.call(this,"d")}Wt(Yv,mn);function Qv(){mn.call(this,"c")}Wt(Qv,mn);var Tm;function th(){}Wt(th,Gv);th.prototype.g=function(){return new XMLHttpRequest};th.prototype.i=function(){return{}};Tm=new th;function vc(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new Ml(this),this.P=lL,e=_m?125:void 0,this.V=new Xd(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new FT}function FT(){this.i=null,this.g="",this.h=!1}var lL=45e3,Im={},Gu={};ge=vc.prototype;ge.setTimeout=function(e){this.P=e};function Sm(e,t,n){e.L=1,e.v=ih(ss(t)),e.s=n,e.S=!0,BT(e,null)}function BT(e,t){e.G=Date.now(),pc(e),e.A=ss(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),KT(n.i,"t",i),e.C=0,n=e.l.J,e.h=new FT,e.g=mI(e.l,n?t:null,!e.s),0<e.O&&(e.M=new iL(fn(e.Pa,e,e.g),e.O)),xT(e.U,e.g,"readystatechange",e.nb),t=e.I?wT(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Fl(),sL(e.j,e.u,e.A,e.m,e.W,e.s)}ge.nb=function(e){e=e.target;const t=this.M;t&&Ni(e)==3?t.l():this.Pa(e)};ge.Pa=function(e){try{if(e==this.g)e:{const u=Ni(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>u)&&(u!=3||_m||this.g&&(this.h.h||this.g.ja()||lb(this.g)))){this.J||u!=4||t==7||(t==8||0>=d?Fl(3):Fl(2)),nh(this);var n=this.g.da();this.ca=n;t:if($T(this)){var i=lb(this.g);e="";var s=i.length,r=Ni(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hr(this),ll(this);var o="";break t}this.h.i=new Pe.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,rL(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Nl(a)){var c=a;break t}}c=null}if(n=c)vo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Am(this,n);else{this.i=!1,this.o=3,In(12),hr(this),ll(this);break e}}this.S?(UT(this,u,o),_m&&this.i&&u==3&&(xT(this.U,this.V,"tick",this.mb),this.V.start())):(vo(this.j,this.m,o,null),Am(this,o)),u==4&&hr(this),this.i&&!this.J&&(u==4?uI(this.l,this):(this.i=!1,pc(this)))}else RL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,In(12)):(this.o=0,In(13)),hr(this),ll(this)}}}catch{}finally{}};function $T(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function UT(e,t,n){let i=!0,s;for(;!e.J&&e.C<n.length;)if(s=cL(e,n),s==Gu){t==4&&(e.o=4,In(14),i=!1),vo(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Im){e.o=4,In(15),vo(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else vo(e.j,e.m,s,null),Am(e,s);$T(e)&&s!=Gu&&s!=Im&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,In(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),np(t),t.M=!0,In(11))):(vo(e.j,e.m,n,"[Invalid Chunked Response]"),hr(e),ll(e))}ge.mb=function(){if(this.g){var e=Ni(this.g),t=this.g.ja();this.C<t.length&&(nh(this),UT(this,e,t),this.i&&e!=4&&pc(this))}};function cL(e,t){var n=e.C,i=t.indexOf(`
`,n);return i==-1?Gu:(n=Number(t.substring(n,i)),isNaN(n)?Im:(i+=1,i+n>t.length?Gu:(t=t.slice(i,i+n),e.C=i+n,t)))}ge.cancel=function(){this.J=!0,hr(this)};function pc(e){e.Y=Date.now()+e.P,HT(e,e.P)}function HT(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=mc(fn(e.lb,e),t)}function nh(e){e.B&&(Pe.clearTimeout(e.B),e.B=null)}ge.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(oL(this.j,this.A),this.L!=2&&(Fl(),In(17)),hr(this),this.o=2,ll(this)):HT(this,this.Y-e)};function ll(e){e.l.H==0||e.J||uI(e.l,e)}function hr(e){nh(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,qv(e.V),VT(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Am(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||km(n.i,e))){if(!e.K&&km(n.i,e)&&n.H==3){try{var i=n.Ja.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Xu(n),ah(n);else break e;tp(n),In(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=mc(fn(n.ib,n),6e3));if(1>=QT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else fr(n,11)}else if((e.K||n.g==e)&&Xu(n),!Nl(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const d=c[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=c[5];h!=null&&typeof h=="number"&&0<h&&(i=1.5*h,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=e.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=i.i;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Xv(r,r.h),r.h=null))}if(i.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(i.Da=v,ft(i.I,i.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=e;if(i.wa=fI(i,i.J?i.pa:null,i.Y),o.K){XT(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(nh(a),pc(a)),i.g=o}else lI(i);0<n.j.length&&lh(n)}else c[0]!="stop"&&c[0]!="close"||fr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?fr(n,7):ep(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Fl(4)}catch{}}function uL(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Kd(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}t=[],n=0;for(i in e)t[n++]=e[i];return t}function dL(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Kd(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function jT(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Kd(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=dL(e),i=uL(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}var zT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hL(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Er(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Er){this.h=e.h,Yu(this,e.j),this.s=e.s,this.g=e.g,Qu(this,e.m),this.l=e.l;var t=e.i,n=new Bl;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),rb(this,n),this.o=e.o}else e&&(t=String(e).match(zT))?(this.h=!1,Yu(this,t[1]||"",!0),this.s=Ya(t[2]||""),this.g=Ya(t[3]||"",!0),Qu(this,t[4]),this.l=Ya(t[5]||"",!0),rb(this,t[6]||"",!0),this.o=Ya(t[7]||"")):(this.h=!1,this.i=new Bl(null,this.h))}Er.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Qa(t,ob,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Qa(t,ob,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Qa(n,n.charAt(0)=="/"?gL:mL,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Qa(n,pL)),e.join("")};function ss(e){return new Er(e)}function Yu(e,t,n){e.j=n?Ya(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Qu(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function rb(e,t,n){t instanceof Bl?(e.i=t,yL(e.i,e.h)):(n||(t=Qa(t,vL)),e.i=new Bl(t,e.h))}function ft(e,t,n){e.i.set(t,n)}function ih(e){return ft(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ya(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Qa(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,fL),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function fL(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ob=/[#\/\?@]/g,mL=/[#\?:]/g,gL=/[#\?]/g,vL=/[#\?@]/g,pL=/#/g;function Bl(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Xs(e){e.g||(e.g=new Map,e.h=0,e.i&&hL(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}ge=Bl.prototype;ge.add=function(e,t){Xs(this),this.i=null,e=ma(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function WT(e,t){Xs(e),t=ma(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function qT(e,t){return Xs(e),t=ma(e,t),e.g.has(t)}ge.forEach=function(e,t){Xs(this),this.g.forEach(function(n,i){n.forEach(function(s){e.call(t,s,i,this)},this)},this)};ge.ta=function(){Xs(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let r=0;r<s.length;r++)n.push(t[i])}return n};ge.Z=function(e){Xs(this);let t=[];if(typeof e=="string")qT(this,e)&&(t=t.concat(this.g.get(ma(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};ge.set=function(e,t){return Xs(this),this.i=null,e=ma(this,e),qT(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};ge.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function KT(e,t,n){WT(e,t),0<n.length&&(e.i=null,e.g.set(ma(e,t),Mv(n)),e.h+=n.length)}ge.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function ma(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function yL(e,t){t&&!e.j&&(Xs(e),e.i=null,e.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(WT(this,i),KT(this,s,n))},e)),e.j=t}var _L=class{constructor(e,t){this.g=e,this.map=t}};function GT(e){this.l=e||bL,Pe.PerformanceNavigationTiming?(e=Pe.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(Pe.g&&Pe.g.Ka&&Pe.g.Ka()&&Pe.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bL=10;function YT(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function QT(e){return e.h?1:e.g?e.g.size:0}function km(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Xv(e,t){e.g?e.g.add(t):e.h=t}function XT(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}GT.prototype.cancel=function(){if(this.i=JT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function JT(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Mv(e.i)}var wL=class{stringify(e){return Pe.JSON.stringify(e,void 0)}parse(e){return Pe.JSON.parse(e,void 0)}};function EL(){this.g=new wL}function CL(e,t,n){const i=n||"";try{jT(e,function(s,r){let o=s;hc(s)&&(o=zv(s)),t.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw t.push(i+"type="+encodeURIComponent("_badmap")),s}}function TL(e,t){const n=new Jd;if(Pe.Image){const i=new Image;i.onload=Jc(eu,n,i,"TestLoadImage: loaded",!0,t),i.onerror=Jc(eu,n,i,"TestLoadImage: error",!1,t),i.onabort=Jc(eu,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=Jc(eu,n,i,"TestLoadImage: timeout",!1,t),Pe.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function eu(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch{}}function sh(e){this.l=e.fc||null,this.j=e.ob||!1}Wt(sh,Gv);sh.prototype.g=function(){return new rh(this.l,this.j)};sh.prototype.i=function(e){return function(){return e}}({});function rh(e,t){Ht.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Jv,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Wt(rh,Ht);var Jv=0;ge=rh.prototype;ge.open=function(e,t){if(this.readyState!=Jv)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,$l(this)};ge.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||Pe).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};ge.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yc(this)),this.readyState=Jv};ge.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,$l(this)),this.g&&(this.readyState=3,$l(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Pe.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ZT(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function ZT(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}ge.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?yc(this):$l(this),this.readyState==3&&ZT(this)}};ge.Za=function(e){this.g&&(this.response=this.responseText=e,yc(this))};ge.Ya=function(e){this.g&&(this.response=e,yc(this))};ge.ka=function(){this.g&&yc(this)};function yc(e){e.readyState=4,e.l=null,e.j=null,e.A=null,$l(e)}ge.setRequestHeader=function(e,t){this.v.append(e,t)};ge.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};ge.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function $l(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(rh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var IL=Pe.JSON.parse;function Et(e){Ht.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=eI,this.L=this.M=!1}Wt(Et,Ht);var eI="",SL=/^https?$/i,AL=["POST","PUT"];ge=Et.prototype;ge.Oa=function(e){this.M=e};ge.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Tm.g(),this.C=this.u?sb(this.u):sb(Tm),this.g.onreadystatechange=fn(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(r){ab(this,r);return}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=Pe.FormData&&e instanceof Pe.FormData,!(0<=pT(AL,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{iI(this),0<this.B&&((this.L=kL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=fn(this.ua,this)):this.A=Kv(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){ab(this,r)}};function kL(e){return jo&&typeof e.timeout=="number"&&e.ontimeout!==void 0}ge.ua=function(){typeof Lv<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Jt(this,"timeout"),this.abort(8))};function ab(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,tI(e),oh(e)}function tI(e){e.F||(e.F=!0,Jt(e,"complete"),Jt(e,"error"))}ge.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Jt(this,"complete"),Jt(this,"abort"),oh(this))};ge.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),oh(this,!0)),Et.$.N.call(this)};ge.La=function(){this.s||(this.G||this.v||this.l?nI(this):this.kb())};ge.kb=function(){nI(this)};function nI(e){if(e.h&&typeof Lv<"u"&&(!e.C[1]||Ni(e)!=4||e.da()!=2)){if(e.v&&Ni(e)==4)Kv(e.La,0,e);else if(Jt(e,"readystatechange"),Ni(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=o===0){var s=String(e.I).match(zT)[1]||null;!s&&Pe.self&&Pe.self.location&&(s=Pe.self.location.protocol.slice(0,-1)),i=!SL.test(s?s.toLowerCase():"")}n=i}if(n)Jt(e,"complete"),Jt(e,"success");else{e.m=6;try{var r=2<Ni(e)?e.g.statusText:""}catch{r=""}e.j=r+" ["+e.da()+"]",tI(e)}}finally{oh(e)}}}}function oh(e,t){if(e.g){iI(e);const n=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Jt(e,"ready");try{n.onreadystatechange=i}catch{}}}function iI(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(Pe.clearTimeout(e.A),e.A=null)}ge.isActive=function(){return!!this.g};function Ni(e){return e.g?e.g.readyState:0}ge.da=function(){try{return 2<Ni(this)?this.g.status:-1}catch{return-1}};ge.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};ge.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),IL(t)}};function lb(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case eI:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function RL(e){const t={};e=(e.g&&2<=Ni(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<e.length;i++){if(Nl(e[i]))continue;var n=eL(e[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=t[s]||[];t[s]=r,r.push(n)}KD(t,function(i){return i.join(", ")})}ge.Ia=function(){return this.m};ge.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function sI(e){let t="";return Bv(e,function(n,i){t+=i,t+=":",t+=n,t+=`\r
`}),t}function Zv(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=sI(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):ft(e,t,n))}function Da(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function rI(e){this.Ga=0,this.j=[],this.l=new Jd,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Da("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Da("baseRetryDelayMs",5e3,e),this.hb=Da("retryDelaySeedMs",1e4,e),this.eb=Da("forwardChannelMaxRetries",2,e),this.xa=Da("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new GT(e&&e.concurrentRequestLimit),this.Ja=new EL,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}ge=rI.prototype;ge.ra=8;ge.H=1;function ep(e){if(oI(e),e.H==3){var t=e.W++,n=ss(e.I);if(ft(n,"SID",e.K),ft(n,"RID",t),ft(n,"TYPE","terminate"),_c(e,n),t=new vc(e,e.l,t),t.L=2,t.v=ih(ss(n)),n=!1,Pe.navigator&&Pe.navigator.sendBeacon)try{n=Pe.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&Pe.Image&&(new Image().src=t.v,n=!0),n||(t.g=mI(t.l,null),t.g.ha(t.v)),t.G=Date.now(),pc(t)}hI(e)}function ah(e){e.g&&(np(e),e.g.cancel(),e.g=null)}function oI(e){ah(e),e.u&&(Pe.clearTimeout(e.u),e.u=null),Xu(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&Pe.clearTimeout(e.m),e.m=null)}function lh(e){if(!YT(e.i)&&!e.m){e.m=!0;var t=e.Na;Dl||RT(),Ll||(Dl(),Ll=!0),Wv.add(t,e),e.C=0}}function PL(e,t){return QT(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=mc(fn(e.Na,e,t),dI(e,e.C)),e.C++,!0)}ge.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new vc(this,this.l,e);let r=this.s;if(this.U&&(r?(r=wT(r),ET(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=aI(this,s,t),n=ss(this.I),ft(n,"RID",e),ft(n,"CVER",22),this.F&&ft(n,"X-HTTP-Session-Id",this.F),_c(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(sI(r)))+"&"+t:this.o&&Zv(n,this.o,r)),Xv(this.i,s),this.bb&&ft(n,"TYPE","init"),this.P?(ft(n,"$req",t),ft(n,"SID","null"),s.aa=!0,Sm(s,n,null)):Sm(s,n,t),this.H=2}}else this.H==3&&(e?cb(this,e):this.j.length==0||YT(this.i)||cb(this))};function cb(e,t){var n;t?n=t.m:n=e.W++;const i=ss(e.I);ft(i,"SID",e.K),ft(i,"RID",n),ft(i,"AID",e.V),_c(e,i),e.o&&e.s&&Zv(i,e.o,e.s),n=new vc(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=aI(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Xv(e.i,n),Sm(n,i,t)}function _c(e,t){e.na&&Bv(e.na,function(n,i){ft(t,i,n)}),e.h&&jT({},function(n,i){ft(t,i,n)})}function aI(e,t,n){n=Math.min(e.j.length,n);var i=e.h?fn(e.h.Va,e.h,e):null;e:{var s=e.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=r,0>c)r=Math.max(0,s[l].g-100),a=!1;else try{CL(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,i}function lI(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Dl||RT(),Ll||(Dl(),Ll=!0),Wv.add(t,e),e.A=0}}function tp(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=mc(fn(e.Ma,e),dI(e,e.A)),e.A++,!0)}ge.Ma=function(){if(this.u=null,cI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=mc(fn(this.jb,this),e)}};ge.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,In(10),ah(this),cI(this))};function np(e){e.B!=null&&(Pe.clearTimeout(e.B),e.B=null)}function cI(e){e.g=new vc(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=ss(e.wa);ft(t,"RID","rpc"),ft(t,"SID",e.K),ft(t,"AID",e.V),ft(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&ft(t,"TO",e.qa),ft(t,"TYPE","xmlhttp"),_c(e,t),e.o&&e.s&&Zv(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=ih(ss(t)),n.s=null,n.S=!0,BT(n,e)}ge.ib=function(){this.v!=null&&(this.v=null,ah(this),tp(this),In(19))};function Xu(e){e.v!=null&&(Pe.clearTimeout(e.v),e.v=null)}function uI(e,t){var n=null;if(e.g==t){Xu(e),np(e),e.g=null;var i=2}else if(km(e.i,t))n=t.F,XT(e.i,t),i=1;else return;if(e.H!=0){if(t.i)if(i==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;i=Zd(),Jt(i,new DT(i,n)),lh(e)}else lI(e);else if(s=t.o,s==3||s==0&&0<t.ca||!(i==1&&PL(e,t)||i==2&&tp(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:fr(e,5);break;case 4:fr(e,10);break;case 3:fr(e,6);break;default:fr(e,2)}}}function dI(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function fr(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var i=fn(e.pb,e);n||(n=new Er("//www.google.com/images/cleardot.gif"),Pe.location&&Pe.location.protocol=="http"||Yu(n,"https"),ih(n)),TL(n.toString(),i)}else In(2);e.H=0,e.h&&e.h.za(t),hI(e),oI(e)}ge.pb=function(e){e?(this.l.info("Successfully pinged google.com"),In(2)):(this.l.info("Failed to ping google.com"),In(1))};function hI(e){if(e.H=0,e.ma=[],e.h){const t=JT(e.i);(t.length!=0||e.j.length!=0)&&(Z_(e.ma,t),Z_(e.ma,e.j),e.i.i.length=0,Mv(e.j),e.j.length=0),e.h.ya()}}function fI(e,t,n){var i=n instanceof Er?ss(n):new Er(n);if(i.g!="")t&&(i.g=t+"."+i.g),Qu(i,i.m);else{var s=Pe.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new Er(null);i&&Yu(r,i),t&&(r.g=t),s&&Qu(r,s),n&&(r.l=n),i=r}return n=e.F,t=e.Da,n&&t&&ft(i,n,t),ft(i,"VER",e.ra),_c(e,i),i}function mI(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Et(new sh({ob:!0})):new Et(e.va),t.Oa(e.J),t}ge.isActive=function(){return!!this.h&&this.h.isActive(this)};function gI(){}ge=gI.prototype;ge.Ba=function(){};ge.Aa=function(){};ge.za=function(){};ge.ya=function(){};ge.isActive=function(){return!0};ge.Va=function(){};function Ju(){if(jo&&!(10<=Number(jD)))throw Error("Environmental error: no available transport.")}Ju.prototype.g=function(e,t){return new Un(e,t)};function Un(e,t){Ht.call(this),this.g=new rI(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Nl(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Nl(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ga(this)}Wt(Un,Ht);Un.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;In(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=fI(e,null,e.Y),lh(e)};Un.prototype.close=function(){ep(this.g)};Un.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=zv(e),e=n);t.j.push(new _L(t.fb++,e)),t.H==3&&lh(t)};Un.prototype.N=function(){this.g.h=null,delete this.j,ep(this.g),delete this.g,Un.$.N.call(this)};function vI(e){Yv.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Wt(vI,Yv);function pI(){Qv.call(this),this.status=1}Wt(pI,Qv);function ga(e){this.g=e}Wt(ga,gI);ga.prototype.Ba=function(){Jt(this.g,"a")};ga.prototype.Aa=function(e){Jt(this.g,new vI(e))};ga.prototype.za=function(e){Jt(this.g,new pI)};ga.prototype.ya=function(){Jt(this.g,"b")};function xL(){this.blockSize=-1}function bi(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Wt(bi,xL);bi.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function pf(e,t,n){n||(n=0);var i=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)i[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var r=e.g[3],o=t+(r^n&(s^r))+i[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[1]+3905402710&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[5]+1200080426&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[9]+2336552879&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[13]+4254626195&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^r&(n^s))+i[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[6]+3225465664&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[10]+38016083&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[14]+3275163606&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[2]+4243563512&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^r)+i[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[8]+2272392833&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[4]+1272893353&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[0]+3936430074&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[12]+3873151461&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~r))+i[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[7]+1126891415&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[3]+2399980690&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[15]+4264355552&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[11]+3174756917&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+r&4294967295}bi.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,i=this.m,s=this.h,r=0;r<t;){if(s==0)for(;r<=n;)pf(this,e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[s++]=e.charCodeAt(r++),s==this.blockSize){pf(this,i),s=0;break}}else for(;r<t;)if(i[s++]=e[r++],s==this.blockSize){pf(this,i),s=0;break}}this.h=s,this.i+=t};bi.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};function nt(e,t){this.h=t;for(var n=[],i=!0,s=e.length-1;0<=s;s--){var r=e[s]|0;i&&r==t||(n[s]=r,i=!1)}this.g=n}var VL={};function ip(e){return-128<=e&&128>e?$D(e,function(t){return new nt([t|0],0>t?-1:0)}):new nt([e|0],0>e?-1:0)}function Oi(e){if(isNaN(e)||!isFinite(e))return ko;if(0>e)return Qt(Oi(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=Rm;return new nt(t,0)}function yI(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Qt(yI(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Oi(Math.pow(t,8)),i=ko,s=0;s<e.length;s+=8){var r=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+r),t);8>r?(r=Oi(Math.pow(t,r)),i=i.R(r).add(Oi(o))):(i=i.R(n),i=i.add(Oi(o)))}return i}var Rm=4294967296,ko=ip(0),Pm=ip(1),ub=ip(16777216);ge=nt.prototype;ge.ea=function(){if(Gn(this))return-Qt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:Rm+i)*t,t*=Rm}return e};ge.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Xi(this))return"0";if(Gn(this))return"-"+Qt(this).toString(e);for(var t=Oi(Math.pow(e,6)),n=this,i="";;){var s=ed(n,t).g;n=Zu(n,s.R(t));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,Xi(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};ge.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Xi(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Gn(e){return e.h==-1}ge.X=function(e){return e=Zu(this,e),Gn(e)?-1:Xi(e)?0:1};function Qt(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new nt(n,~e.h).add(Pm)}ge.abs=function(){return Gn(this)?Qt(this):this};ge.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var r=i+(this.D(s)&65535)+(e.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new nt(n,n[n.length-1]&-2147483648?-1:0)};function Zu(e,t){return e.add(Qt(t))}ge.R=function(e){if(Xi(this)||Xi(e))return ko;if(Gn(this))return Gn(e)?Qt(this).R(Qt(e)):Qt(Qt(this).R(e));if(Gn(e))return Qt(this.R(Qt(e)));if(0>this.X(ub)&&0>e.X(ub))return Oi(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=e.D(s)>>>16,l=e.D(s)&65535;n[2*i+2*s]+=o*l,tu(n,2*i+2*s),n[2*i+2*s+1]+=r*l,tu(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,tu(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,tu(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new nt(n,0)};function tu(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function La(e,t){this.g=e,this.h=t}function ed(e,t){if(Xi(t))throw Error("division by zero");if(Xi(e))return new La(ko,ko);if(Gn(e))return t=ed(Qt(e),t),new La(Qt(t.g),Qt(t.h));if(Gn(t))return t=ed(e,Qt(t)),new La(Qt(t.g),t.h);if(30<e.g.length){if(Gn(e)||Gn(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Pm,i=t;0>=i.X(e);)n=db(n),i=db(i);var s=ro(n,1),r=ro(i,1);for(i=ro(i,2),n=ro(n,2);!Xi(i);){var o=r.add(i);0>=o.X(e)&&(s=s.add(n),r=o),i=ro(i,1),n=ro(n,1)}return t=Zu(e,s.R(t)),new La(s,t)}for(s=ko;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Oi(n),o=r.R(t);Gn(o)||0<o.X(e);)n-=i,r=Oi(n),o=r.R(t);Xi(r)&&(r=Pm),s=s.add(r),e=Zu(e,o)}return new La(s,e)}ge.gb=function(e){return ed(this,e).h};ge.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new nt(n,this.h&e.h)};ge.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new nt(n,this.h|e.h)};ge.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new nt(n,this.h^e.h)};function db(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new nt(n,e.h)}function ro(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],r=0;r<i;r++)s[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new nt(s,e.h)}Ju.prototype.createWebChannel=Ju.prototype.g;Un.prototype.send=Un.prototype.u;Un.prototype.open=Un.prototype.m;Un.prototype.close=Un.prototype.close;eh.NO_ERROR=0;eh.TIMEOUT=8;eh.HTTP_ERROR=6;LT.COMPLETE="complete";MT.EventType=gc;gc.OPEN="a";gc.CLOSE="b";gc.ERROR="c";gc.MESSAGE="d";Ht.prototype.listen=Ht.prototype.O;Et.prototype.listenOnce=Et.prototype.P;Et.prototype.getLastError=Et.prototype.Sa;Et.prototype.getLastErrorCode=Et.prototype.Ia;Et.prototype.getStatus=Et.prototype.da;Et.prototype.getResponseJson=Et.prototype.Wa;Et.prototype.getResponseText=Et.prototype.ja;Et.prototype.send=Et.prototype.ha;Et.prototype.setWithCredentials=Et.prototype.Oa;bi.prototype.digest=bi.prototype.l;bi.prototype.reset=bi.prototype.reset;bi.prototype.update=bi.prototype.j;nt.prototype.add=nt.prototype.add;nt.prototype.multiply=nt.prototype.R;nt.prototype.modulo=nt.prototype.gb;nt.prototype.compare=nt.prototype.X;nt.prototype.toNumber=nt.prototype.ea;nt.prototype.toString=nt.prototype.toString;nt.prototype.getBits=nt.prototype.D;nt.fromNumber=Oi;nt.fromString=yI;var NL=function(){return new Ju},OL=function(){return Zd()},yf=eh,DL=LT,LL=Wr,hb={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},nu=MT,ML=Et,FL=bi,Ro=nt;const fb="@firebase/firestore";/**
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
 */class rn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}rn.UNAUTHENTICATED=new rn(null),rn.GOOGLE_CREDENTIALS=new rn("google-credentials-uid"),rn.FIRST_PARTY=new rn("first-party-uid"),rn.MOCK_USER=new rn("mock-user");/**
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
 */let va="10.3.0";/**
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
 */const Vr=new dc("@firebase/firestore");function mb(){return Vr.logLevel}function we(e,...t){if(Vr.logLevel<=Ke.DEBUG){const n=t.map(sp);Vr.debug(`Firestore (${va}): ${e}`,...n)}}function rs(e,...t){if(Vr.logLevel<=Ke.ERROR){const n=t.map(sp);Vr.error(`Firestore (${va}): ${e}`,...n)}}function zo(e,...t){if(Vr.logLevel<=Ke.WARN){const n=t.map(sp);Vr.warn(`Firestore (${va}): ${e}`,...n)}}function sp(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function Le(e="Unexpected state"){const t=`FIRESTORE (${va}) INTERNAL ASSERTION FAILED: `+e;throw rs(t),new Error(t)}function Nt(e,t){e||Le()}function Qe(e,t){return e}/**
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
 */const ie={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends zi{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ms{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class _I{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class BL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(rn.UNAUTHENTICATED))}shutdown(){}}class $L{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class UL{constructor(t){this.t=t,this.currentUser=rn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new Ms;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ms,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{we("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(we("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ms)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(we("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Nt(typeof i.accessToken=="string"),new _I(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Nt(t===null||typeof t=="string"),new rn(t)}}class HL{constructor(t,n,i){this.l=t,this.h=n,this.P=i,this.type="FirstParty",this.user=rn.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class jL{constructor(t,n,i){this.l=t,this.h=n,this.P=i}getToken(){return Promise.resolve(new HL(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(rn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zL{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WL{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const i=r=>{r.error!=null&&we("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,we("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>i(r))};const s=r=>{we("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):we("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Nt(typeof n.token=="string"),this.R=n.token,new zL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function qL(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class bI{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=qL(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=t.charAt(s[r]%t.length))}return i}}function Je(e,t){return e<t?-1:e>t?1:0}function Wo(e,t,n){return e.length===t.length&&e.every((i,s)=>n(i,t[s]))}/**
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
 */class Ot{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new ye(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ye(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new ye(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ye(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ot.fromMillis(Date.now())}static fromDate(t){return Ot.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*n));return new Ot(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Je(this.nanoseconds,t.nanoseconds):Je(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Oe{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Oe(t)}static min(){return new Oe(new Ot(0,0))}static max(){return new Oe(new Ot(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ul{constructor(t,n,i){n===void 0?n=0:n>t.length&&Le(),i===void 0?i=t.length-n:i>t.length-n&&Le(),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return Ul.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ul?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let s=0;s<i;s++){const r=t.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class mt extends Ul{construct(t,n,i){return new mt(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new ye(ie.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new mt(n)}static emptyPath(){return new mt([])}}const KL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Cn extends Ul{construct(t,n,i){return new Cn(t,n,i)}static isValidIdentifier(t){return KL.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Cn.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Cn(["__name__"])}static fromServerFormat(t){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new ye(ie.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new ye(ie.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ye(ie.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new ye(ie.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Cn(n)}static emptyPath(){return new Cn([])}}/**
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
 */class Ce{constructor(t){this.path=t}static fromPath(t){return new Ce(mt.fromString(t))}static fromName(t){return new Ce(mt.fromString(t).popFirst(5))}static empty(){return new Ce(mt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&mt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return mt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ce(new mt(t.slice()))}}function GL(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=Oe.fromTimestamp(i===1e9?new Ot(n+1,0):new Ot(n,i));return new Hs(s,Ce.empty(),t)}function YL(e){return new Hs(e.readTime,e.key,-1)}class Hs{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new Hs(Oe.min(),Ce.empty(),-1)}static max(){return new Hs(Oe.max(),Ce.empty(),-1)}}function QL(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=Ce.comparator(e.documentKey,t.documentKey),n!==0?n:Je(e.largestBatchId,t.largestBatchId))}/**
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
 */const XL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function rp(e){if(e.code!==ie.FAILED_PRECONDITION||e.message!==XL)throw e;we("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class oe{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new oe((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof oe?n:oe.resolve(n)}catch(n){return oe.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):oe.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):oe.reject(n)}static resolve(t){return new oe((n,i)=>{n(t)})}static reject(t){return new oe((n,i)=>{i(t)})}static waitFor(t){return new oe((n,i)=>{let s=0,r=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(t){let n=oe.resolve(!1);for(const i of t)n=n.next(s=>s?oe.resolve(s):i());return n}static forEach(t,n){const i=[];return t.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(t,n){return new oe((i,s)=>{const r=t.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(t[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(t,n){return new oe((i,s)=>{const r=()=>{t()===!0?n().next(()=>{r()},s):i()};r()})}}function bc(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class op{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.oe(i),this._e=i=>n.writeSequenceNumber(i))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}op.ae=-1;function ch(e){return e==null}function td(e){return e===0&&1/e==-1/0}function ZL(e){return typeof e=="number"&&Number.isInteger(e)&&!td(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function gb(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function wc(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function wI(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */let jt=class xm{constructor(t,n){this.comparator=t,this.root=n||Fs.EMPTY}insert(t,n){return new xm(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Fs.BLACK,null,null))}remove(t){return new xm(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Fs.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new iu(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new iu(this.root,t,this.comparator,!1)}getReverseIterator(){return new iu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new iu(this.root,t,this.comparator,!0)}},iu=class{constructor(t,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?i(t.key,n):1,n&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}},Fs=class Ki{constructor(t,n,i,s,r){this.key=t,this.value=n,this.color=i??Ki.RED,this.left=s??Ki.EMPTY,this.right=r??Ki.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,s,r){return new Ki(t??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let s=this;const r=i(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ki.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Ki.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ki.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ki.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Le();const t=this.left.check();if(t!==this.right.check())throw Le();return t+(this.isRed()?0:1)}};Fs.EMPTY=null,Fs.RED=!0,Fs.BLACK=!1;Fs.EMPTY=new class{constructor(){this.size=0}get key(){throw Le()}get value(){throw Le()}get color(){throw Le()}get left(){throw Le()}get right(){throw Le()}copy(t,n,i,s,r){return this}insert(t,n,i){return new Fs(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class gn{constructor(t){this.comparator=t,this.data=new jt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new vb(this.data.getIterator())}getIteratorFrom(t){return new vb(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof gn)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new gn(this.comparator);return n.data=t,n}}class vb{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xs{constructor(t){this.fields=t,t.sort(Cn.comparator)}static empty(){return new xs([])}unionWith(t){let n=new gn(Cn.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new xs(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Wo(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class EI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pn{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new EI("Invalid base64 string: "+r):r}}(t);return new pn(n)}static fromUint8Array(t){const n=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(t);return new pn(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Je(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}pn.EMPTY_BYTE_STRING=new pn("");const eM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function js(e){if(Nt(!!e),typeof e=="string"){let t=0;const n=eM.exec(e);if(Nt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:At(e.seconds),nanos:At(e.nanos)}}function At(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Nr(e){return typeof e=="string"?pn.fromBase64String(e):pn.fromUint8Array(e)}/**
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
 */function ap(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lp(e){const t=e.mapValue.fields.__previous_value__;return ap(t)?lp(t):t}function Hl(e){const t=js(e.mapValue.fields.__local_write_time__.timestampValue);return new Ot(t.seconds,t.nanos)}/**
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
 */class tM{constructor(t,n,i,s,r,o,a,l,c){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class jl{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new jl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof jl&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const su={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Or(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ap(e)?4:nM(e)?9007199254740991:10:Le()}function Ui(e,t){if(e===t)return!0;const n=Or(e);if(n!==Or(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Hl(e).isEqual(Hl(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=js(s.timestampValue),a=js(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return Nr(s.bytesValue).isEqual(Nr(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return At(s.geoPointValue.latitude)===At(r.geoPointValue.latitude)&&At(s.geoPointValue.longitude)===At(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return At(s.integerValue)===At(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=At(s.doubleValue),a=At(r.doubleValue);return o===a?td(o)===td(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Wo(e.arrayValue.values||[],t.arrayValue.values||[],Ui);case 10:return function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(gb(o)!==gb(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ui(o[l],a[l])))return!1;return!0}(e,t);default:return Le()}}function zl(e,t){return(e.values||[]).find(n=>Ui(n,t))!==void 0}function qo(e,t){if(e===t)return 0;const n=Or(e),i=Or(t);if(n!==i)return Je(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Je(e.booleanValue,t.booleanValue);case 2:return function(r,o){const a=At(r.integerValue||r.doubleValue),l=At(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return pb(e.timestampValue,t.timestampValue);case 4:return pb(Hl(e),Hl(t));case 5:return Je(e.stringValue,t.stringValue);case 6:return function(r,o){const a=Nr(r),l=Nr(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Je(a[c],l[c]);if(u!==0)return u}return Je(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,o){const a=Je(At(r.latitude),At(o.latitude));return a!==0?a:Je(At(r.longitude),At(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=qo(a[c],l[c]);if(u)return u}return Je(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,o){if(r===su.mapValue&&o===su.mapValue)return 0;if(r===su.mapValue)return 1;if(o===su.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let d=0;d<l.length&&d<u.length;++d){const h=Je(l[d],u[d]);if(h!==0)return h;const f=qo(a[l[d]],c[u[d]]);if(f!==0)return f}return Je(l.length,u.length)}(e.mapValue,t.mapValue);default:throw Le()}}function pb(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return Je(e,t);const n=js(e),i=js(t),s=Je(n.seconds,i.seconds);return s!==0?s:Je(n.nanos,i.nanos)}function Ko(e){return Vm(e)}function Vm(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const i=js(n);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Nr(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return Ce.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let i="[",s=!0;for(const r of n.values||[])s?s=!1:i+=",",i+=Vm(r);return i+"]"}(e.arrayValue):"mapValue"in e?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Vm(n.fields[o])}`;return s+"}"}(e.mapValue):Le()}function yb(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Nm(e){return!!e&&"integerValue"in e}function cp(e){return!!e&&"arrayValue"in e}function _b(e){return!!e&&"nullValue"in e}function bb(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function _f(e){return!!e&&"mapValue"in e}function cl(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return wc(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=cl(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=cl(e.arrayValue.values[n]);return t}return Object.assign({},e)}function nM(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Vi{constructor(t){this.value=t}static empty(){return new Vi({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!_f(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=cl(n)}setAll(t){let n=Cn.emptyPath(),i={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=cl(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(t){const n=this.field(t.popLast());_f(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ui(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=n.mapValue.fields[t.get(i)];_f(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,i){wc(n,(s,r)=>t[s]=r);for(const s of i)delete t[s]}clone(){return new Vi(cl(this.value))}}/**
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
 */class on{constructor(t,n,i,s,r,o,a){this.key=t,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new on(t,0,Oe.min(),Oe.min(),Oe.min(),Vi.empty(),0)}static newFoundDocument(t,n,i,s){return new on(t,1,n,Oe.min(),i,s,0)}static newNoDocument(t,n){return new on(t,2,n,Oe.min(),Oe.min(),Vi.empty(),0)}static newUnknownDocument(t,n){return new on(t,3,n,Oe.min(),Oe.min(),Vi.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vi.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Oe.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof on&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new on(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nd{constructor(t,n){this.position=t,this.inclusive=n}}function wb(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],o=e.position[s];if(r.field.isKeyField()?i=Ce.comparator(Ce.fromName(o.referenceValue),n.key):i=qo(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Eb(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ui(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class ul{constructor(t,n="asc"){this.field=t,this.dir=n}}function iM(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class CI{}class Pt extends CI{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new rM(t,n,i):n==="array-contains"?new lM(t,i):n==="in"?new cM(t,i):n==="not-in"?new uM(t,i):n==="array-contains-any"?new dM(t,i):new Pt(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new oM(t,i):new aM(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qo(n,this.value)):n!==null&&Or(this.value)===Or(n)&&this.matchesComparison(qo(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class wi extends CI{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new wi(t,n)}matches(t){return TI(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function TI(e){return e.op==="and"}function II(e){return sM(e)&&TI(e)}function sM(e){for(const t of e.filters)if(t instanceof wi)return!1;return!0}function Om(e){if(e instanceof Pt)return e.field.canonicalString()+e.op.toString()+Ko(e.value);if(II(e))return e.filters.map(t=>Om(t)).join(",");{const t=e.filters.map(n=>Om(n)).join(",");return`${e.op}(${t})`}}function SI(e,t){return e instanceof Pt?function(i,s){return s instanceof Pt&&i.op===s.op&&i.field.isEqual(s.field)&&Ui(i.value,s.value)}(e,t):e instanceof wi?function(i,s){return s instanceof wi&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,a)=>r&&SI(o,s.filters[a]),!0):!1}(e,t):void Le()}function AI(e){return e instanceof Pt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ko(n.value)}`}(e):e instanceof wi?function(n){return n.op.toString()+" {"+n.getFilters().map(AI).join(" ,")+"}"}(e):"Filter"}class rM extends Pt{constructor(t,n,i){super(t,n,i),this.key=Ce.fromName(i.referenceValue)}matches(t){const n=Ce.comparator(t.key,this.key);return this.matchesComparison(n)}}class oM extends Pt{constructor(t,n){super(t,"in",n),this.keys=kI("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class aM extends Pt{constructor(t,n){super(t,"not-in",n),this.keys=kI("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function kI(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>Ce.fromName(i.referenceValue))}class lM extends Pt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return cp(n)&&zl(n.arrayValue,this.value)}}class cM extends Pt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&zl(this.value.arrayValue,n)}}class uM extends Pt{constructor(t,n){super(t,"not-in",n)}matches(t){if(zl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!zl(this.value.arrayValue,n)}}class dM extends Pt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!cp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>zl(this.value.arrayValue,i))}}/**
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
 */class hM{constructor(t,n=null,i=[],s=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.he=null}}function Cb(e,t=null,n=[],i=[],s=null,r=null,o=null){return new hM(e,t,n,i,s,r,o)}function up(e){const t=Qe(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>Om(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),ch(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Ko(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Ko(i)).join(",")),t.he=n}return t.he}function dp(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!iM(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!SI(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Eb(e.startAt,t.startAt)&&Eb(e.endAt,t.endAt)}function Dm(e){return Ce.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Ec{constructor(t,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function fM(e,t,n,i,s,r,o,a){return new Ec(e,t,n,i,s,r,o,a)}function hp(e){return new Ec(e)}function Tb(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function RI(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function fp(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function PI(e){return e.collectionGroup!==null}function dl(e){const t=Qe(e);if(t.Pe===null){t.Pe=[];const n=fp(t),i=RI(t);if(n!==null&&i===null)n.isKeyField()||t.Pe.push(new ul(n)),t.Pe.push(new ul(Cn.keyField(),"asc"));else{let s=!1;for(const r of t.explicitOrderBy)t.Pe.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new ul(Cn.keyField(),r))}}}return t.Pe}function os(e){const t=Qe(e);return t.Ie||(t.Ie=mM(t,dl(e))),t.Ie}function mM(e,t){if(e.limitType==="F")return Cb(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new ul(s.field,r)});const n=e.endAt?new nd(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new nd(e.startAt.position,e.startAt.inclusive):null;return Cb(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function Lm(e,t){t.getFirstInequalityField(),fp(e);const n=e.filters.concat([t]);return new Ec(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function id(e,t,n){return new Ec(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function uh(e,t){return dp(os(e),os(t))&&e.limitType===t.limitType}function xI(e){return`${up(os(e))}|lt:${e.limitType}`}function Mm(e){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>AI(s)).join(", ")}]`),ch(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>Ko(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>Ko(s)).join(",")),`Target(${i})`}(os(e))}; limitType=${e.limitType})`}function dh(e,t){return t.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):Ce.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(e,t)&&function(i,s){for(const r of dl(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(i,s){return!(i.startAt&&!function(o,a,l){const c=wb(o,a,l);return o.inclusive?c<=0:c<0}(i.startAt,dl(i),s)||i.endAt&&!function(o,a,l){const c=wb(o,a,l);return o.inclusive?c>=0:c>0}(i.endAt,dl(i),s))}(e,t)}function gM(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function VI(e){return(t,n)=>{let i=!1;for(const s of dl(e)){const r=vM(s,t,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function vM(e,t,n){const i=e.field.isKeyField()?Ce.comparator(t.key,n.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?qo(l,c):Le()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return Le()}}/**
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
 */class pa{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){wc(this.inner,(n,i)=>{for(const[s,r]of i)t(s,r)})}isEmpty(){return wI(this.inner)}size(){return this.innerSize}}/**
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
 */const pM=new jt(Ce.comparator);function zs(){return pM}const NI=new jt(Ce.comparator);function Xa(...e){let t=NI;for(const n of e)t=t.insert(n.key,n);return t}function yM(e){let t=NI;return e.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function mr(){return hl()}function OI(){return hl()}function hl(){return new pa(e=>e.toString(),(e,t)=>e.isEqual(t))}const _M=new gn(Ce.comparator);function Ge(...e){let t=_M;for(const n of e)t=t.add(n);return t}const bM=new gn(Je);function wM(){return bM}/**
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
 */function DI(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:td(t)?"-0":t}}function LI(e){return{integerValue:""+e}}function EM(e,t){return ZL(t)?LI(t):DI(e,t)}/**
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
 */class hh{constructor(){this._=void 0}}function CM(e,t,n){return e instanceof Fm?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&ap(r)&&(r=lp(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,t):e instanceof sd?MI(e,t):e instanceof rd?FI(e,t):function(s,r){const o=IM(s,r),a=Ib(o)+Ib(s.Ee);return Nm(o)&&Nm(s.Ee)?LI(a):DI(s.serializer,a)}(e,t)}function TM(e,t,n){return e instanceof sd?MI(e,t):e instanceof rd?FI(e,t):n}function IM(e,t){return e instanceof Bm?function(i){return Nm(i)||function(r){return!!r&&"doubleValue"in r}(i)}(t)?t:{integerValue:0}:null}class Fm extends hh{}class sd extends hh{constructor(t){super(),this.elements=t}}function MI(e,t){const n=BI(t);for(const i of e.elements)n.some(s=>Ui(s,i))||n.push(i);return{arrayValue:{values:n}}}class rd extends hh{constructor(t){super(),this.elements=t}}function FI(e,t){let n=BI(t);for(const i of e.elements)n=n.filter(s=>!Ui(s,i));return{arrayValue:{values:n}}}class Bm extends hh{constructor(t,n){super(),this.serializer=t,this.Ee=n}}function Ib(e){return At(e.integerValue||e.doubleValue)}function BI(e){return cp(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function SM(e,t){return e.field.isEqual(t.field)&&function(i,s){return i instanceof sd&&s instanceof sd||i instanceof rd&&s instanceof rd?Wo(i.elements,s.elements,Ui):i instanceof Bm&&s instanceof Bm?Ui(i.Ee,s.Ee):i instanceof Fm&&s instanceof Fm}(e.transform,t.transform)}class Cr{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Cr}static exists(t){return new Cr(void 0,t)}static updateTime(t){return new Cr(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function bu(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class mp{}function $I(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new kM(e.key,Cr.none()):new gp(e.key,e.data,Cr.none());{const n=e.data,i=Vi.empty();let s=new gn(Cn.comparator);for(let r of t.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new fh(e.key,i,new xs(s.toArray()),Cr.none())}}function AM(e,t,n){e instanceof gp?function(s,r,o){const a=s.value.clone(),l=Ab(s.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof fh?function(s,r,o){if(!bu(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Ab(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(UI(s)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function fl(e,t,n,i){return e instanceof gp?function(r,o,a,l){if(!bu(r.precondition,o))return a;const c=r.value.clone(),u=kb(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,i):e instanceof fh?function(r,o,a,l){if(!bu(r.precondition,o))return a;const c=kb(r.fieldTransforms,l,o),u=o.data;return u.setAll(UI(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(d=>d.field))}(e,t,n,i):function(r,o,a){return bu(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Sb(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Wo(i,s,(r,o)=>SM(r,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class gp extends mp{constructor(t,n,i,s=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class fh extends mp{constructor(t,n,i,s,r=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function UI(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function Ab(e,t,n){const i=new Map;Nt(e.length===n.length);for(let s=0;s<n.length;s++){const r=e[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,TM(o,a,n[s]))}return i}function kb(e,t,n){const i=new Map;for(const s of e){const r=s.transform,o=n.data.field(s.field);i.set(s.field,CM(r,o,t))}return i}class kM extends mp{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class RM{constructor(t,n,i,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(t.key)&&AM(r,t,i[s])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=fl(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=fl(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=OI();return this.mutations.forEach(s=>{const r=t.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const l=$I(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Oe.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Ge())}isEqual(t){return this.batchId===t.batchId&&Wo(this.mutations,t.mutations,(n,i)=>Sb(n,i))&&Wo(this.baseMutations,t.baseMutations,(n,i)=>Sb(n,i))}}/**
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
 */class PM{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class xM{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var St,je;function HI(e){if(e===void 0)return rs("GRPC error has no .code"),ie.UNKNOWN;switch(e){case St.OK:return ie.OK;case St.CANCELLED:return ie.CANCELLED;case St.UNKNOWN:return ie.UNKNOWN;case St.DEADLINE_EXCEEDED:return ie.DEADLINE_EXCEEDED;case St.RESOURCE_EXHAUSTED:return ie.RESOURCE_EXHAUSTED;case St.INTERNAL:return ie.INTERNAL;case St.UNAVAILABLE:return ie.UNAVAILABLE;case St.UNAUTHENTICATED:return ie.UNAUTHENTICATED;case St.INVALID_ARGUMENT:return ie.INVALID_ARGUMENT;case St.NOT_FOUND:return ie.NOT_FOUND;case St.ALREADY_EXISTS:return ie.ALREADY_EXISTS;case St.PERMISSION_DENIED:return ie.PERMISSION_DENIED;case St.FAILED_PRECONDITION:return ie.FAILED_PRECONDITION;case St.ABORTED:return ie.ABORTED;case St.OUT_OF_RANGE:return ie.OUT_OF_RANGE;case St.UNIMPLEMENTED:return ie.UNIMPLEMENTED;case St.DATA_LOSS:return ie.DATA_LOSS;default:return Le()}}(je=St||(St={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function VM(){return new TextEncoder}/**
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
 */const NM=new Ro([4294967295,4294967295],0);function Rb(e){const t=VM().encode(e),n=new FL;return n.update(t),new Uint8Array(n.digest())}function Pb(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Ro([n,i],0),new Ro([s,r],0)]}class vp{constructor(t,n,i){if(this.bitmap=t,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Ja(`Invalid padding: ${n}`);if(i<0)throw new Ja(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new Ja(`Invalid hash count: ${i}`);if(t.length===0&&n!==0)throw new Ja(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*t.length-n,this.Re=Ro.fromNumber(this.Ae)}Ve(t,n,i){let s=t.add(n.multiply(Ro.fromNumber(i)));return s.compare(NM)===1&&(s=new Ro([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ae===0)return!1;const n=Rb(t),[i,s]=Pb(n);for(let r=0;r<this.hashCount;r++){const o=this.Ve(i,s,r);if(!this.me(o))return!1}return!0}static create(t,n,i){const s=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new vp(r,s,n);return i.forEach(a=>o.insert(a)),o}insert(t){if(this.Ae===0)return;const n=Rb(t),[i,s]=Pb(n);for(let r=0;r<this.hashCount;r++){const o=this.Ve(i,s,r);this.fe(o)}}fe(t){const n=Math.floor(t/8),i=t%8;this.bitmap[n]|=1<<i}}class Ja extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class mh{constructor(t,n,i,s,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,i){const s=new Map;return s.set(t,Cc.createSynthesizedTargetChangeForCurrentChange(t,n,i)),new mh(Oe.min(),s,new jt(Je),zs(),Ge())}}class Cc{constructor(t,n,i,s,r){this.resumeToken=t,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,i){return new Cc(i,n,Ge(),Ge(),Ge())}}/**
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
 */class wu{constructor(t,n,i,s){this.ge=t,this.removedTargetIds=n,this.key=i,this.pe=s}}class jI{constructor(t,n){this.targetId=t,this.ye=n}}class zI{constructor(t,n,i=pn.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=i,this.cause=s}}class xb{constructor(){this.we=0,this.Se=Nb(),this.be=pn.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(t){t.approximateByteSize()>0&&(this.ve=!0,this.be=t)}xe(){let t=Ge(),n=Ge(),i=Ge();return this.Se.forEach((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:Le()}}),new Cc(this.be,this.De,t,n,i)}Oe(){this.ve=!1,this.Se=Nb()}Ne(t,n){this.ve=!0,this.Se=this.Se.insert(t,n)}Be(t){this.ve=!0,this.Se=this.Se.remove(t)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class OM{constructor(t){this.Qe=t,this.Ke=new Map,this.$e=zs(),this.Ue=Vb(),this.We=new jt(Je)}Ge(t){for(const n of t.ge)t.pe&&t.pe.isFoundDocument()?this.ze(n,t.pe):this.je(n,t.key,t.pe);for(const n of t.removedTargetIds)this.je(n,t.key,t.pe)}He(t){this.forEachTarget(t,n=>{const i=this.Je(n);switch(t.state){case 0:this.Ye(n)&&i.Me(t.resumeToken);break;case 1:i.ke(),i.Ce||i.Oe(),i.Me(t.resumeToken);break;case 2:i.ke(),i.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(i.qe(),i.Me(t.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),i.Me(t.resumeToken));break;default:Le()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ke.forEach((i,s)=>{this.Ye(s)&&n(s)})}Xe(t){const n=t.targetId,i=t.ye.count,s=this.et(n);if(s){const r=s.target;if(Dm(r))if(i===0){const o=new Ce(r.path);this.je(n,o,on.newNoDocument(o,Oe.min()))}else Nt(i===1);else{const o=this.tt(n);if(o!==i){const a=this.nt(t),l=a?this.rt(a,t,o):1;if(l!==0){this.Ze(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,c)}}}}}nt(t){const n=t.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=n;let o,a;try{o=Nr(i).toUint8Array()}catch(l){if(l instanceof EI)return zo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new vp(o,s,r)}catch(l){return zo(l instanceof Ja?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(t,n,i){return n.ye.count===i-this.ot(t,n.targetId)?0:2}ot(t,n){const i=this.Qe.getRemoteKeysForTarget(n);let s=0;return i.forEach(r=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.je(n,r,null),s++)}),s}_t(t){const n=new Map;this.Ke.forEach((r,o)=>{const a=this.et(o);if(a){if(r.current&&Dm(a.target)){const l=new Ce(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,on.newNoDocument(l,t))}r.Fe&&(n.set(o,r.xe()),r.Oe())}});let i=Ge();this.Ue.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.et(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.$e.forEach((r,o)=>o.setReadTime(t));const s=new mh(t,n,this.We,this.$e,i);return this.$e=zs(),this.Ue=Vb(),this.We=new jt(Je),s}ze(t,n){if(!this.Ye(t))return;const i=this.ut(t,n.key)?2:0;this.Je(t).Ne(n.key,i),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(t))}je(t,n,i){if(!this.Ye(t))return;const s=this.Je(t);this.ut(t,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(t)),i&&(this.$e=this.$e.insert(n,i))}removeTarget(t){this.Ke.delete(t)}tt(t){const n=this.Je(t).xe();return this.Qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Le(t){this.Je(t).Le()}Je(t){let n=this.Ke.get(t);return n||(n=new xb,this.Ke.set(t,n)),n}ct(t){let n=this.Ue.get(t);return n||(n=new gn(Je),this.Ue=this.Ue.insert(t,n)),n}Ye(t){const n=this.et(t)!==null;return n||we("WatchChangeAggregator","Detected inactive target",t),n}et(t){const n=this.Ke.get(t);return n&&n.Ce?null:this.Qe.lt(t)}Ze(t){this.Ke.set(t,new xb),this.Qe.getRemoteKeysForTarget(t).forEach(n=>{this.je(t,n,null)})}ut(t,n){return this.Qe.getRemoteKeysForTarget(t).has(n)}}function Vb(){return new jt(Ce.comparator)}function Nb(){return new jt(Ce.comparator)}const DM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),LM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),MM=(()=>({and:"AND",or:"OR"}))();class FM{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function $m(e,t){return e.useProto3Json||ch(t)?t:{value:t}}function Um(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function WI(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Po(e){return Nt(!!e),Oe.fromTimestamp(function(n){const i=js(n);return new Ot(i.seconds,i.nanos)}(e))}function qI(e,t){return function(i){return new mt(["projects",i.projectId,"databases",i.database])}(e).child("documents").child(t).canonicalString()}function KI(e){const t=mt.fromString(e);return Nt(XI(t)),t}function bf(e,t){const n=KI(t);if(n.get(1)!==e.databaseId.projectId)throw new ye(ie.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ye(ie.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ce(GI(n))}function Hm(e,t){return qI(e.databaseId,t)}function BM(e){const t=KI(e);return t.length===4?mt.emptyPath():GI(t)}function Ob(e){return new mt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function GI(e){return Nt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function $M(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Le()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(Nt(u===void 0||typeof u=="string"),pn.fromBase64String(u||"")):(Nt(u===void 0||u instanceof Uint8Array),pn.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?ie.UNKNOWN:HI(c.code);return new ye(u,c.message||"")}(o);n=new zI(i,s,r,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=bf(e,i.document.name),r=Po(i.document.updateTime),o=i.document.createTime?Po(i.document.createTime):Oe.min(),a=new Vi({mapValue:{fields:i.document.fields}}),l=on.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new wu(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=bf(e,i.document),r=i.readTime?Po(i.readTime):Oe.min(),o=on.newNoDocument(s,r),a=i.removedTargetIds||[];n=new wu([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=bf(e,i.document),r=i.removedTargetIds||[];n=new wu([],r,s,null)}else{if(!("filter"in t))return Le();{t.filter;const i=t.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new xM(s,r),a=i.targetId;n=new jI(a,o)}}return n}function UM(e,t){return{documents:[Hm(e,t.path)]}}function HM(e,t){const n={structuredQuery:{}},i=t.path;t.collectionGroup!==null?(n.parent=Hm(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Hm(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length!==0)return QI(wi.create(l,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(d){return{field:fo(d.field),direction:WM(d.dir)}}(c))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=$m(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function jM(e){let t=BM(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Nt(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let r=[];n.where&&(r=function(d){const h=YI(d);return h instanceof wi&&II(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(h=>function(g){return new ul(mo(g.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(d){let h;return h=typeof d=="object"?d.value:d,ch(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(d){const h=!!d.before,f=d.values||[];return new nd(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(d){const h=!d.before,f=d.values||[];return new nd(f,h)}(n.endAt)),fM(t,s,o,r,a,"F",l,c)}function zM(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Le()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function YI(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=mo(n.unaryFilter.field);return Pt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=mo(n.unaryFilter.field);return Pt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=mo(n.unaryFilter.field);return Pt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=mo(n.unaryFilter.field);return Pt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Le()}}(e):e.fieldFilter!==void 0?function(n){return Pt.create(mo(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Le()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return wi.create(n.compositeFilter.filters.map(i=>YI(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Le()}}(n.compositeFilter.op))}(e):Le()}function WM(e){return DM[e]}function qM(e){return LM[e]}function KM(e){return MM[e]}function fo(e){return{fieldPath:e.canonicalString()}}function mo(e){return Cn.fromServerFormat(e.fieldPath)}function QI(e){return e instanceof Pt?function(n){if(n.op==="=="){if(bb(n.value))return{unaryFilter:{field:fo(n.field),op:"IS_NAN"}};if(_b(n.value))return{unaryFilter:{field:fo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bb(n.value))return{unaryFilter:{field:fo(n.field),op:"IS_NOT_NAN"}};if(_b(n.value))return{unaryFilter:{field:fo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fo(n.field),op:qM(n.op),value:n.value}}}(e):e instanceof wi?function(n){const i=n.getFilters().map(s=>QI(s));return i.length===1?i[0]:{compositeFilter:{op:KM(n.op),filters:i}}}(e):Le()}function XI(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Vs{constructor(t,n,i,s,r=Oe.min(),o=Oe.min(),a=pn.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Vs(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Vs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Vs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Vs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class GM{constructor(t){this.ht=t}}function YM(e){const t=jM({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?id(t,t.limit,"L"):t}/**
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
 */class QM{constructor(){this._n=new XM}addToCollectionParentIndex(t,n){return this._n.add(n),oe.resolve()}getCollectionParents(t,n){return oe.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return oe.resolve()}deleteFieldIndex(t,n){return oe.resolve()}getDocumentsMatchingTarget(t,n){return oe.resolve(null)}getIndexType(t,n){return oe.resolve(0)}getFieldIndexes(t,n){return oe.resolve([])}getNextCollectionGroupToUpdate(t){return oe.resolve(null)}getMinOffset(t,n){return oe.resolve(Hs.min())}getMinOffsetFromCollectionGroup(t,n){return oe.resolve(Hs.min())}updateCollectionGroup(t,n,i){return oe.resolve()}updateIndexEntries(t,n){return oe.resolve()}}class XM{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n]||new gn(mt.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(t){return(this.index[t]||new gn(mt.comparator)).toArray()}}/**
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
 */class Go{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Go(0)}static Bn(){return new Go(-1)}}/**
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
 */class JM{constructor(){this.changes=new pa(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,on.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?oe.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class ZM{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class eF{constructor(t,n,i,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(i!==null&&fl(i.mutation,s,xs.empty(),Ot.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,Ge()).next(()=>i))}getLocalViewOfDocuments(t,n,i=Ge()){const s=mr();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,i).next(r=>{let o=Xa();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const i=mr();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,Ge()))}populateOverlays(t,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(t,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,i,s){let r=zs();const o=hl(),a=function(){return hl()}();return n.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof fh)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),fl(u.mutation,c,u.mutation.getFieldMask(),Ot.now())):o.set(c.key,xs.empty())}),this.recalculateAndSaveOverlays(t,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var d;return a.set(c,new ZM(u,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,n){const i=hl();let s=new jt((o,a)=>o-a),r=Ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||xs.empty();u=a.applyToLocalView(c,u),i.set(l,u);const d=(s.get(a.batchId)||Ge()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,d=OI();u.forEach(h=>{if(!r.has(h)){const f=$I(n.get(h),i.get(h));f!==null&&d.set(h,f),r=r.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,d))}return oe.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i){return function(r){return Ce.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):PI(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i):this.getDocumentsMatchingCollectionQuery(t,n,i)}getNextDocuments(t,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,s-r.size):oe.resolve(mr());let a=-1,l=r;return o.next(c=>oe.forEach(c,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(u)?oe.resolve():this.remoteDocumentCache.getEntry(t,u).next(h=>{l=l.insert(u,h)}))).next(()=>this.populateOverlays(t,c,r)).next(()=>this.computeViews(t,l,c,Ge())).next(u=>({batchId:a,changes:yM(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new Ce(n)).next(i=>{let s=Xa();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,i){const s=n.collectionGroup;let r=Xa();return this.indexManager.getCollectionParents(t,s).next(o=>oe.forEach(o,a=>{const l=function(u,d){return new Ec(d,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(t,l,i).next(c=>{c.forEach((u,d)=>{r=r.insert(u,d)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,s))).next(r=>{s.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,on.newInvalidDocument(c)))});let o=Xa();return r.forEach((a,l)=>{const c=s.get(a);c!==void 0&&fl(c.mutation,l,xs.empty(),Ot.now()),dh(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class tF{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return oe.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Po(s.createTime)}}(n)),oe.resolve()}getNamedQuery(t,n){return oe.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:YM(s.bundledQuery),readTime:Po(s.readTime)}}(n)),oe.resolve()}}/**
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
 */class nF{constructor(){this.overlays=new jt(Ce.comparator),this.hr=new Map}getOverlay(t,n){return oe.resolve(this.overlays.get(n))}getOverlays(t,n){const i=mr();return oe.forEach(n,s=>this.getOverlay(t,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((s,r)=>{this.It(t,n,r)}),oe.resolve()}removeOverlaysForBatchId(t,n,i){const s=this.hr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.hr.delete(i)),oe.resolve()}getOverlaysForCollection(t,n,i){const s=mr(),r=n.length+1,o=new Ce(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return oe.resolve(s)}getOverlaysForCollectionGroup(t,n,i,s){let r=new jt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=mr(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=mr(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return oe.resolve(a)}It(t,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(i.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new PM(n,i));let r=this.hr.get(n);r===void 0&&(r=Ge(),this.hr.set(n,r)),this.hr.set(n,r.add(i.key))}}/**
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
 */class pp{constructor(){this.Pr=new gn(Ft.Ir),this.Tr=new gn(Ft.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const i=new Ft(t,n);this.Pr=this.Pr.add(i),this.Tr=this.Tr.add(i)}dr(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.Ar(new Ft(t,n))}Rr(t,n){t.forEach(i=>this.removeReference(i,n))}Vr(t){const n=new Ce(new mt([])),i=new Ft(n,t),s=new Ft(n,t+1),r=[];return this.Tr.forEachInRange([i,s],o=>{this.Ar(o),r.push(o.key)}),r}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new Ce(new mt([])),i=new Ft(n,t),s=new Ft(n,t+1);let r=Ge();return this.Tr.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new Ft(t,0),i=this.Pr.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class Ft{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return Ce.comparator(t.key,n.key)||Je(t.pr,n.pr)}static Er(t,n){return Je(t.pr,n.pr)||Ce.comparator(t.key,n.key)}}/**
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
 */class iF{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new gn(Ft.Ir)}checkEmpty(t){return oe.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,s){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new RM(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Ft(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return oe.resolve(o)}lookupMutationBatch(t,n){return oe.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,s=this.br(i),r=s<0?0:s;return oe.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return oe.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return oe.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new Ft(n,0),s=new Ft(n,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([i,s],o=>{const a=this.Sr(o.pr);r.push(a)}),oe.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new gn(Je);return n.forEach(s=>{const r=new Ft(s,0),o=new Ft(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([r,o],a=>{i=i.add(a.pr)})}),oe.resolve(this.Dr(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,s=i.length+1;let r=i;Ce.isDocumentKey(r)||(r=r.child(""));const o=new Ft(new Ce(r),0);let a=new gn(Je);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.pr)),!0)},o),oe.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(i=>{const s=this.Sr(i);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){Nt(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.wr;return oe.forEach(n.mutations,s=>{const r=new Ft(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=i})}Mn(t){}containsKey(t,n){const i=new Ft(n,0),s=this.wr.firstAfterOrEqual(i);return oe.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,oe.resolve()}vr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class sF{constructor(t){this.Cr=t,this.docs=function(){return new jt(Ce.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return oe.resolve(i?i.document.mutableCopy():on.newInvalidDocument(n))}getEntries(t,n){let i=zs();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():on.newInvalidDocument(s))}),oe.resolve(i)}getDocumentsMatchingQuery(t,n,i,s){let r=zs();const o=n.path,a=new Ce(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||QL(YL(u),i)<=0||(s.has(u.key)||dh(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return oe.resolve(r)}getAllFromCollectionGroup(t,n,i,s){Le()}Fr(t,n){return oe.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new rF(this)}getSize(t){return oe.resolve(this.size)}}class rF extends JM{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(i)}),oe.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
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
 */class oF{constructor(t){this.persistence=t,this.Mr=new pa(n=>up(n),dp),this.lastRemoteSnapshotVersion=Oe.min(),this.highestTargetId=0,this.Or=0,this.Nr=new pp,this.targetCount=0,this.Br=Go.Nn()}forEachTarget(t,n){return this.Mr.forEach((i,s)=>n(s)),oe.resolve()}getLastRemoteSnapshotVersion(t){return oe.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return oe.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),oe.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Or&&(this.Or=n),oe.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new Go(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,oe.resolve()}updateTargetData(t,n){return this.qn(n),oe.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,oe.resolve()}removeTargets(t,n,i){let s=0;const r=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Mr.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),oe.waitFor(r).next(()=>s)}getTargetCount(t){return oe.resolve(this.targetCount)}getTargetData(t,n){const i=this.Mr.get(n)||null;return oe.resolve(i)}addMatchingKeys(t,n,i){return this.Nr.dr(n,i),oe.resolve()}removeMatchingKeys(t,n,i){this.Nr.Rr(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(t,o))}),oe.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),oe.resolve()}getMatchingKeysForTargetId(t,n){const i=this.Nr.gr(n);return oe.resolve(i)}containsKey(t,n){return oe.resolve(this.Nr.containsKey(n))}}/**
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
 */class aF{constructor(t,n){this.Lr={},this.overlays={},this.kr=new op(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new oF(this),this.indexManager=new QM,this.remoteDocumentCache=function(s){return new sF(s)}(i=>this.referenceDelegate.Kr(i)),this.serializer=new GM(n),this.$r=new tF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new nF,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this.Lr[t.toKey()];return i||(i=new iF(n,this.referenceDelegate),this.Lr[t.toKey()]=i),i}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,i){we("MemoryPersistence","Starting transaction:",t);const s=new lF(this.kr.next());return this.referenceDelegate.Ur(),i(s).next(r=>this.referenceDelegate.Wr(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Gr(t,n){return oe.or(Object.values(this.Lr).map(i=>()=>i.containsKey(t,n)))}}class lF extends JL{constructor(t){super(),this.currentSequenceNumber=t}}class yp{constructor(t){this.persistence=t,this.zr=new pp,this.jr=null}static Hr(t){return new yp(t)}get Jr(){if(this.jr)return this.jr;throw Le()}addReference(t,n,i){return this.zr.addReference(i,n),this.Jr.delete(i.toString()),oe.resolve()}removeReference(t,n,i){return this.zr.removeReference(i,n),this.Jr.add(i.toString()),oe.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),oe.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(r=>this.Jr.add(r.toString()))}).next(()=>i.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return oe.forEach(this.Jr,i=>{const s=Ce.fromPath(i);return this.Yr(t,s).next(r=>{r||n.removeEntry(s,Oe.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(i=>{i?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return oe.or([()=>oe.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
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
 */class _p{constructor(t,n,i,s){this.targetId=t,this.fromCache=n,this.qi=i,this.Qi=s}static Ki(t,n){let i=Ge(),s=Ge();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new _p(t,n.fromCache,i,s)}}/**
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
 */class cF{constructor(){this.$i=!1}initialize(t,n){this.Ui=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,i,s){return this.Wi(t,n).next(r=>r||this.Gi(t,n,s,i)).next(r=>r||this.zi(t,n))}Wi(t,n){if(Tb(n))return oe.resolve(null);let i=os(n);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=id(n,null,"F"),i=os(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(r=>{const o=Ge(...r);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,i).next(l=>{const c=this.ji(n,a);return this.Hi(n,c,o,l.readTime)?this.Wi(t,id(n,null,"F")):this.Ji(t,c,n,l)}))})))}Gi(t,n,i,s){return Tb(n)||s.isEqual(Oe.min())?this.zi(t,n):this.Ui.getDocuments(t,i).next(r=>{const o=this.ji(n,r);return this.Hi(n,o,i,s)?this.zi(t,n):(mb()<=Ke.DEBUG&&we("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mm(n)),this.Ji(t,o,n,GL(s,-1)))})}ji(t,n){let i=new gn(VI(t));return n.forEach((s,r)=>{dh(t,r)&&(i=i.add(r))}),i}Hi(t,n,i,s){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}zi(t,n){return mb()<=Ke.DEBUG&&we("QueryEngine","Using full collection scan to execute query:",Mm(n)),this.Ui.getDocumentsMatchingQuery(t,n,Hs.min())}Ji(t,n,i,s){return this.Ui.getDocumentsMatchingQuery(t,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class uF{constructor(t,n,i,s){this.persistence=t,this.Yi=n,this.serializer=s,this.Zi=new jt(Je),this.Xi=new pa(r=>up(r),dp),this.es=new Map,this.ts=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this.ns(i)}ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new eF(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Zi))}}function dF(e,t,n,i){return new uF(e,t,n,i)}async function JI(e,t){const n=Qe(e);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.ns(t),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=Ge();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({rs:c,removedBatchIds:o,addedBatchIds:a}))})})}function ZI(e){const t=Qe(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function hF(e,t){const n=Qe(e),i=t.snapshotVersion;let s=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});s=n.Zi;const a=[];t.targetChanges.forEach((u,d)=>{const h=s.get(d);if(!h)return;a.push(n.Qr.removeMatchingKeys(r,u.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(r,u.addedDocuments,d)));let f=h.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(d)!==null?f=f.withResumeToken(pn.EMPTY_BYTE_STRING,Oe.min()).withLastLimboFreeSnapshotVersion(Oe.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,i)),s=s.insert(d,f),function(v,_,p){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(h,f,u)&&a.push(n.Qr.updateTargetData(r,f))});let l=zs(),c=Ge();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(fF(r,o,t.documentUpdates).next(u=>{l=u.ss,c=u.os})),!i.isEqual(Oe.min())){const u=n.Qr.getLastRemoteSnapshotVersion(r).next(d=>n.Qr.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return oe.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Zi=s,r))}function fF(e,t,n){let i=Ge(),s=Ge();return n.forEach(r=>i=i.add(r)),t.getEntries(e,i).next(r=>{let o=zs();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(Oe.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):we("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ss:o,os:s}})}function mF(e,t){const n=Qe(e);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Qr.getTargetData(i,t).next(r=>r?(s=r,oe.resolve(s)):n.Qr.allocateTargetId(i).next(o=>(s=new Vs(t,o,"TargetPurposeListen",i.currentSequenceNumber),n.Qr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Zi.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(i.targetId,i),n.Xi.set(t,i.targetId)),i})}async function jm(e,t,n){const i=Qe(e),s=i.Zi.get(t),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!bc(o))throw o;we("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}i.Zi=i.Zi.remove(t),i.Xi.delete(s.target)}function Db(e,t,n){const i=Qe(e);let s=Oe.min(),r=Ge();return i.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const d=Qe(l),h=d.Xi.get(u);return h!==void 0?oe.resolve(d.Zi.get(h)):d.Qr.getTargetData(c,u)}(i,o,os(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Yi.getDocumentsMatchingQuery(o,t,n?s:Oe.min(),n?r:Ge())).next(a=>(gF(i,gM(t),a),{documents:a,_s:r})))}function gF(e,t,n){let i=e.es.get(t)||Oe.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),e.es.set(t,i)}class Lb{constructor(){this.activeTargetIds=wM()}Is(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ts(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ps(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class vF{constructor(){this.Ys=new Lb,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t){return this.Ys.Is(t),this.Zs[t]||"not-current"}updateQueryState(t,n,i){this.Zs[t]=n}removeLocalQueryTarget(t){this.Ys.Ts(t)}isLocalQueryTarget(t){return this.Ys.activeTargetIds.has(t)}clearQueryState(t){delete this.Zs[t]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(t){return this.Ys.activeTargetIds.has(t)}start(){return this.Ys=new Lb,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class pF{Xs(t){}shutdown(){}}/**
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
 */class Mb{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){we("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}io(){we("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ru=null;function wf(){return ru===null?ru=function(){return 268435456+Math.round(2147483648*Math.random())}():ru++,"0x"+ru.toString(16)}/**
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
 */const yF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class _F{constructor(t){this._o=t._o,this.ao=t.ao}uo(t){this.co=t}lo(t){this.ho=t}onMessage(t){this.Po=t}close(){this.ao()}send(t){this._o(t)}Io(){this.co()}To(t){this.ho(t)}Eo(t){this.Po(t)}}/**
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
 */const sn="WebChannelConnection";class bF extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ao=i+"://"+n.host,this.Ro=`projects/${s}/databases/${r}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}get mo(){return!1}fo(n,i,s,r,o){const a=wf(),l=this.po(n,i);we("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(c,r,o),this.wo(n,l,c,s).then(u=>(we("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw zo("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}So(n,i,s,r,o,a){return this.fo(n,i,s,r,o)}yo(n,i,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+va}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>n[o]=r),s&&s.headers.forEach((r,o)=>n[o]=r)}po(n,i){const s=yF[n];return`${this.Ao}/v1/${i}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}wo(t,n,i,s){const r=wf();return new Promise((o,a)=>{const l=new ML;l.setWithCredentials(!0),l.listenOnce(DL.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case yf.NO_ERROR:const u=l.getResponseJson();we(sn,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(u)),o(u);break;case yf.TIMEOUT:we(sn,`RPC '${t}' ${r} timed out`),a(new ye(ie.DEADLINE_EXCEEDED,"Request time out"));break;case yf.HTTP_ERROR:const d=l.getStatus();if(we(sn,`RPC '${t}' ${r} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const g=function(_){const p=_.toLowerCase().replace(/_/g,"-");return Object.values(ie).indexOf(p)>=0?p:ie.UNKNOWN}(f.status);a(new ye(g,f.message))}else a(new ye(ie.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ye(ie.UNAVAILABLE,"Connection failed."));break;default:Le()}}finally{we(sn,`RPC '${t}' ${r} completed.`)}});const c=JSON.stringify(s);we(sn,`RPC '${t}' ${r} sending request:`,s),l.send(n,"POST",c,i,15)})}bo(t,n,i){const s=wf(),r=[this.Ao,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=NL(),a=OL(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.yo(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const u=r.join("");we(sn,`Creating RPC '${t}' stream ${s}: ${u}`,l);const d=o.createWebChannel(u,l);let h=!1,f=!1;const g=new _F({_o:_=>{f?we(sn,`Not sending because RPC '${t}' stream ${s} is closed:`,_):(h||(we(sn,`Opening RPC '${t}' stream ${s} transport.`),d.open(),h=!0),we(sn,`RPC '${t}' stream ${s} sending:`,_),d.send(_))},ao:()=>d.close()}),v=(_,p,y)=>{_.listen(p,E=>{try{y(E)}catch(b){setTimeout(()=>{throw b},0)}})};return v(d,nu.EventType.OPEN,()=>{f||we(sn,`RPC '${t}' stream ${s} transport opened.`)}),v(d,nu.EventType.CLOSE,()=>{f||(f=!0,we(sn,`RPC '${t}' stream ${s} transport closed`),g.To())}),v(d,nu.EventType.ERROR,_=>{f||(f=!0,zo(sn,`RPC '${t}' stream ${s} transport errored:`,_),g.To(new ye(ie.UNAVAILABLE,"The operation could not be completed")))}),v(d,nu.EventType.MESSAGE,_=>{var p;if(!f){const y=_.data[0];Nt(!!y);const E=y,b=E.error||((p=E[0])===null||p===void 0?void 0:p.error);if(b){we(sn,`RPC '${t}' stream ${s} received error:`,b);const S=b.status;let A=function(T){const R=St[T];if(R!==void 0)return HI(R)}(S),k=b.message;A===void 0&&(A=ie.INTERNAL,k="Unknown error status: "+S+" with message "+b.message),f=!0,g.To(new ye(A,k)),d.close()}else we(sn,`RPC '${t}' stream ${s} received:`,y),g.Eo(y)}}),v(a,LL.STAT_EVENT,_=>{_.stat===hb.PROXY?we(sn,`RPC '${t}' stream ${s} detected buffering proxy`):_.stat===hb.NOPROXY&&we(sn,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.Io()},0),g}}function Ef(){return typeof document<"u"?document:null}/**
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
 */function gh(e){return new FM(e,!0)}/**
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
 */class eS{constructor(t,n,i=1e3,s=1.5,r=6e4){this.oi=t,this.timerId=n,this.Do=i,this.vo=s,this.Co=r,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(t){this.cancel();const n=Math.floor(this.Fo+this.Bo()),i=Math.max(0,Date.now()-this.xo),s=Math.max(0,n-i);s>0&&we("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.xo=Date.now(),t())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
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
 */class wF{constructor(t,n,i,s,r,o,a,l){this.oi=t,this.ko=i,this.qo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new eS(t,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(t){this.Zo(),this.stream.send(t)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(t,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,t!==4?this.Uo.reset():n&&n.code===ie.RESOURCE_EXHAUSTED?(rs(n.toString()),rs("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===ie.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.lo(n)}e_(){}auth(){this.state=1;const t=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Qo===n&&this.n_(i,s)},i=>{t(()=>{const s=new ye(ie.UNKNOWN,"Fetching auth token failed: "+i.message);return this.r_(s)})})}n_(t,n){const i=this.t_(this.Qo);this.stream=this.i_(t,n),this.stream.uo(()=>{i(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(s=>{i(()=>this.r_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(t){return we("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}t_(t){return n=>{this.oi.enqueueAndForget(()=>this.Qo===t?n():(we("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EF extends wF{constructor(t,n,i,s,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}i_(t,n){return this.connection.bo("Listen",t,n)}onMessage(t){this.Uo.reset();const n=$M(this.serializer,t),i=function(r){if(!("targetChange"in r))return Oe.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Oe.min():o.readTime?Po(o.readTime):Oe.min()}(t);return this.listener.s_(n,i)}o_(t){const n={};n.database=Ob(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=Dm(l)?{documents:UM(r,l)}:{query:HM(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=WI(r,o.resumeToken);const c=$m(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Oe.min())>0){a.readTime=Um(r,o.snapshotVersion.toTimestamp());const c=$m(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const i=zM(this.serializer,t);i&&(n.labels=i),this.Yo(n)}__(t){const n={};n.database=Ob(this.serializer),n.removeTarget=t,this.Yo(n)}}/**
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
 */class CF extends class{}{constructor(t,n,i,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.I_=!1}T_(){if(this.I_)throw new ye(ie.FAILED_PRECONDITION,"The client has already been terminated.")}fo(t,n,i){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.fo(t,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ye(ie.UNKNOWN,s.toString())})}So(t,n,i,s){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.So(t,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ye(ie.UNKNOWN,r.toString())})}terminate(){this.I_=!0}}class TF{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(t){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.m_("Offline")))}set(t){this.p_(),this.d_=0,t==="Online"&&(this.R_=!1),this.m_(t)}m_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}f_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(rs(n),this.R_=!1):we("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
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
 */class IF{constructor(t,n,i,s,r){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=r,this.D_.Xs(o=>{i.enqueueAndForget(async()=>{Ic(this)&&(we("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=Qe(l);c.S_.add(4),await Tc(c),c.v_.set("Unknown"),c.S_.delete(4),await vh(c)}(this))})}),this.v_=new TF(i,s)}}async function vh(e){if(Ic(e))for(const t of e.b_)await t(!0)}async function Tc(e){for(const t of e.b_)await t(!1)}function tS(e,t){const n=Qe(e);n.w_.has(t.targetId)||(n.w_.set(t.targetId,t),Ep(n)?wp(n):ya(n).Go()&&bp(n,t))}function nS(e,t){const n=Qe(e),i=ya(n);n.w_.delete(t),i.Go()&&iS(n,t),n.w_.size===0&&(i.Go()?i.Ho():Ic(n)&&n.v_.set("Unknown"))}function bp(e,t){if(e.C_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Oe.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ya(e).o_(t)}function iS(e,t){e.C_.Le(t),ya(e).__(t)}function wp(e){e.C_=new OM({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.w_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),ya(e).start(),e.v_.V_()}function Ep(e){return Ic(e)&&!ya(e).Wo()&&e.w_.size>0}function Ic(e){return Qe(e).S_.size===0}function sS(e){e.C_=void 0}async function SF(e){e.w_.forEach((t,n)=>{bp(e,t)})}async function AF(e,t){sS(e),Ep(e)?(e.v_.g_(t),wp(e)):e.v_.set("Unknown")}async function kF(e,t,n){if(e.v_.set("Online"),t instanceof zI&&t.state===2&&t.cause)try{await async function(s,r){const o=r.cause;for(const a of r.targetIds)s.w_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.w_.delete(a),s.C_.removeTarget(a))}(e,t)}catch(i){we("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Fb(e,i)}else if(t instanceof wu?e.C_.Ge(t):t instanceof jI?e.C_.Xe(t):e.C_.He(t),!n.isEqual(Oe.min()))try{const i=await ZI(e.localStore);n.compareTo(i)>=0&&await function(r,o){const a=r.C_._t(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.w_.get(c);u&&r.w_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.w_.get(l);if(!u)return;r.w_.set(l,u.withResumeToken(pn.EMPTY_BYTE_STRING,u.snapshotVersion)),iS(r,l);const d=new Vs(u.target,l,c,u.sequenceNumber);bp(r,d)}),r.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(i){we("RemoteStore","Failed to raise snapshot:",i),await Fb(e,i)}}async function Fb(e,t,n){if(!bc(t))throw t;e.S_.add(1),await Tc(e),e.v_.set("Offline"),n||(n=()=>ZI(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{we("RemoteStore","Retrying IndexedDB access"),await n(),e.S_.delete(1),await vh(e)})}async function Bb(e,t){const n=Qe(e);n.asyncQueue.verifyOperationInProgress(),we("RemoteStore","RemoteStore received new credentials");const i=Ic(n);n.S_.add(3),await Tc(n),i&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.S_.delete(3),await vh(n)}async function RF(e,t){const n=Qe(e);t?(n.S_.delete(2),await vh(n)):t||(n.S_.add(2),await Tc(n),n.v_.set("Unknown"))}function ya(e){return e.F_||(e.F_=function(n,i,s){const r=Qe(n);return r.T_(),new EF(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{uo:SF.bind(null,e),lo:AF.bind(null,e),s_:kF.bind(null,e)}),e.b_.push(async t=>{t?(e.F_.jo(),Ep(e)?wp(e):e.v_.set("Unknown")):(await e.F_.stop(),sS(e))})),e.F_}/**
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
 */class Cp{constructor(t,n,i,s,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Ms,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,i,s,r){const o=Date.now()+i,a=new Cp(t,n,o,s,r);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(ie.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rS(e,t){if(rs("AsyncQueue",`${t}: ${e}`),bc(e))return new ye(ie.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class xo{constructor(t){this.comparator=t?(n,i)=>t(n,i)||Ce.comparator(n.key,i.key):(n,i)=>Ce.comparator(n.key,i.key),this.keyedMap=Xa(),this.sortedSet=new jt(this.comparator)}static emptySet(t){return new xo(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,i)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof xo)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const i=new xo;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=n,i}}/**
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
 */class $b{constructor(){this.x_=new jt(Ce.comparator)}track(t){const n=t.doc.key,i=this.x_.get(n);i?t.type!==0&&i.type===3?this.x_=this.x_.insert(n,t):t.type===3&&i.type!==1?this.x_=this.x_.insert(n,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.x_=this.x_.insert(n,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.x_=this.x_.insert(n,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.x_=this.x_.remove(n):t.type===1&&i.type===2?this.x_=this.x_.insert(n,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.x_=this.x_.insert(n,{type:2,doc:t.doc}):Le():this.x_=this.x_.insert(n,t)}O_(){const t=[];return this.x_.inorderTraversal((n,i)=>{t.push(i)}),t}}class Yo{constructor(t,n,i,s,r,o,a,l,c){this.query=t,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(t,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Yo(t,n,xo.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&uh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,i=t.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class PF{constructor(){this.N_=void 0,this.listeners=[]}}class xF{constructor(){this.queries=new pa(t=>xI(t),uh),this.onlineState="Unknown",this.B_=new Set}}async function oS(e,t){const n=Qe(e),i=t.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new PF),s)try{r.N_=await n.onListen(i)}catch(o){const a=rS(o,`Initialization of query '${Mm(t.query)}' failed`);return void t.onError(a)}n.queries.set(i,r),r.listeners.push(t),t.L_(n.onlineState),r.N_&&t.k_(r.N_)&&Tp(n)}async function aS(e,t){const n=Qe(e),i=t.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function VF(e,t){const n=Qe(e);let i=!1;for(const s of t){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.k_(s)&&(i=!0);o.N_=s}}i&&Tp(n)}function NF(e,t,n){const i=Qe(e),s=i.queries.get(t);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(t)}function Tp(e){e.B_.forEach(t=>{t.next()})}class lS{constructor(t,n,i){this.query=t,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=i||{}}k_(t){if(!this.options.includeMetadataChanges){const i=[];for(const s of t.docChanges)s.type!==3&&i.push(s);t=new Yo(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Q_?this.U_(t)&&(this.q_.next(t),n=!0):this.W_(t,this.onlineState)&&(this.G_(t),n=!0),this.K_=t,n}onError(t){this.q_.error(t)}L_(t){this.onlineState=t;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,t)&&(this.G_(this.K_),n=!0),n}W_(t,n){if(!t.fromCache)return!0;const i=n!=="Offline";return(!this.options.z_||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}U_(t){if(t.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(t){t=Yo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Q_=!0,this.q_.next(t)}}/**
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
 */class cS{constructor(t){this.key=t}}class uS{constructor(t){this.key=t}}class OF{constructor(t,n){this.query=t,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=Ge(),this.mutatedKeys=Ge(),this.ia=VI(t),this.sa=new xo(this.ia)}get oa(){return this.ta}_a(t,n){const i=n?n.aa:new $b,s=n?n.sa:this.sa;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,d)=>{const h=s.get(u),f=dh(this.query,d)?d:null,g=!!h&&this.mutatedKeys.has(h.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;h&&f?h.data.isEqual(f.data)?g!==v&&(i.track({type:3,doc:f}),_=!0):this.ua(h,f)||(i.track({type:2,doc:f}),_=!0,(l&&this.ia(f,l)>0||c&&this.ia(f,c)<0)&&(a=!0)):!h&&f?(i.track({type:0,doc:f}),_=!0):h&&!f&&(i.track({type:1,doc:h}),_=!0,(l||c)&&(a=!0)),_&&(f?(o=o.add(f),r=v?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{sa:o,aa:i,Hi:a,mutatedKeys:r}}ua(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,i){const s=this.sa;this.sa=t.sa,this.mutatedKeys=t.mutatedKeys;const r=t.aa.O_();r.sort((c,u)=>function(h,f){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Le()}};return g(h)-g(f)}(c.type,u.type)||this.ia(c.doc,u.doc)),this.ca(i);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,l=a!==this.na;return this.na=a,r.length!==0||l?{snapshot:new Yo(this.query,t.sa,s,r,t.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new $b,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(t){return!this.ta.has(t)&&!!this.sa.has(t)&&!this.sa.get(t).hasLocalMutations}ca(t){t&&(t.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=t.current)}la(){if(!this.current)return[];const t=this.ra;this.ra=Ge(),this.sa.forEach(i=>{this.Pa(i.key)&&(this.ra=this.ra.add(i.key))});const n=[];return t.forEach(i=>{this.ra.has(i)||n.push(new uS(i))}),this.ra.forEach(i=>{t.has(i)||n.push(new cS(i))}),n}Ia(t){this.ta=t._s,this.ra=Ge();const n=this._a(t.documents);return this.applyChanges(n,!0)}Ta(){return Yo.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class DF{constructor(t,n,i){this.query=t,this.targetId=n,this.view=i}}class LF{constructor(t){this.key=t,this.Ea=!1}}class MF{constructor(t,n,i,s,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new pa(a=>xI(a),uh),this.Ra=new Map,this.Va=new Set,this.ma=new jt(Ce.comparator),this.fa=new Map,this.ga=new pp,this.pa={},this.ya=new Map,this.wa=Go.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function FF(e,t){const n=WF(e);let i,s;const r=n.Aa.get(t);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.Ta();else{const o=await mF(n.localStore,os(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await BF(n,t,i,a==="current",o.resumeToken),n.isPrimaryClient&&tS(n.remoteStore,o)}return s}async function BF(e,t,n,i,s){e.ba=(d,h,f)=>async function(v,_,p,y){let E=_.view._a(p);E.Hi&&(E=await Db(v.localStore,_.query,!1).then(({documents:A})=>_.view._a(A,E)));const b=y&&y.targetChanges.get(_.targetId),S=_.view.applyChanges(E,v.isPrimaryClient,b);return Hb(v,_.targetId,S.ha),S.snapshot}(e,d,h,f);const r=await Db(e.localStore,t,!0),o=new OF(t,r._s),a=o._a(r.documents),l=Cc.createSynthesizedTargetChangeForCurrentChange(n,i&&e.onlineState!=="Offline",s),c=o.applyChanges(a,e.isPrimaryClient,l);Hb(e,n,c.ha);const u=new DF(t,n,o);return e.Aa.set(t,u),e.Ra.has(n)?e.Ra.get(n).push(t):e.Ra.set(n,[t]),c.snapshot}async function $F(e,t){const n=Qe(e),i=n.Aa.get(t),s=n.Ra.get(i.targetId);if(s.length>1)return n.Ra.set(i.targetId,s.filter(r=>!uh(r,t))),void n.Aa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await jm(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),nS(n.remoteStore,i.targetId),zm(n,i.targetId)}).catch(rp)):(zm(n,i.targetId),await jm(n.localStore,i.targetId,!0))}async function dS(e,t){const n=Qe(e);try{const i=await hF(n.localStore,t);t.targetChanges.forEach((s,r)=>{const o=n.fa.get(r);o&&(Nt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ea=!0:s.modifiedDocuments.size>0?Nt(o.Ea):s.removedDocuments.size>0&&(Nt(o.Ea),o.Ea=!1))}),await fS(n,i,t)}catch(i){await rp(i)}}function Ub(e,t,n){const i=Qe(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Aa.forEach((r,o)=>{const a=o.view.L_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=Qe(o);l.onlineState=a;let c=!1;l.queries.forEach((u,d)=>{for(const h of d.listeners)h.L_(a)&&(c=!0)}),c&&Tp(l)}(i.eventManager,t),s.length&&i.da.s_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function UF(e,t,n){const i=Qe(e);i.sharedClientState.updateQueryState(t,"rejected",n);const s=i.fa.get(t),r=s&&s.key;if(r){let o=new jt(Ce.comparator);o=o.insert(r,on.newNoDocument(r,Oe.min()));const a=Ge().add(r),l=new mh(Oe.min(),new Map,new jt(Je),o,a);await dS(i,l),i.ma=i.ma.remove(r),i.fa.delete(t),Ip(i)}else await jm(i.localStore,t,!1).then(()=>zm(i,t,n)).catch(rp)}function zm(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.Ra.get(t))e.Aa.delete(i),n&&e.da.Da(i,n);e.Ra.delete(t),e.isPrimaryClient&&e.ga.Vr(t).forEach(i=>{e.ga.containsKey(i)||hS(e,i)})}function hS(e,t){e.Va.delete(t.path.canonicalString());const n=e.ma.get(t);n!==null&&(nS(e.remoteStore,n),e.ma=e.ma.remove(t),e.fa.delete(n),Ip(e))}function Hb(e,t,n){for(const i of n)i instanceof cS?(e.ga.addReference(i.key,t),HF(e,i)):i instanceof uS?(we("SyncEngine","Document no longer in limbo: "+i.key),e.ga.removeReference(i.key,t),e.ga.containsKey(i.key)||hS(e,i.key)):Le()}function HF(e,t){const n=t.key,i=n.path.canonicalString();e.ma.get(n)||e.Va.has(i)||(we("SyncEngine","New document in limbo: "+n),e.Va.add(i),Ip(e))}function Ip(e){for(;e.Va.size>0&&e.ma.size<e.maxConcurrentLimboResolutions;){const t=e.Va.values().next().value;e.Va.delete(t);const n=new Ce(mt.fromString(t)),i=e.wa.next();e.fa.set(i,new LF(n)),e.ma=e.ma.insert(n,i),tS(e.remoteStore,new Vs(os(hp(n.path)),i,"TargetPurposeLimboResolution",op.ae))}}async function fS(e,t,n){const i=Qe(e),s=[],r=[],o=[];i.Aa.isEmpty()||(i.Aa.forEach((a,l)=>{o.push(i.ba(l,t,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=_p.Ki(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.da.s_(s),await async function(l,c){const u=Qe(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>oe.forEach(c,h=>oe.forEach(h.qi,f=>u.persistence.referenceDelegate.addReference(d,h.targetId,f)).next(()=>oe.forEach(h.Qi,f=>u.persistence.referenceDelegate.removeReference(d,h.targetId,f)))))}catch(d){if(!bc(d))throw d;we("LocalStore","Failed to update sequence numbers: "+d)}for(const d of c){const h=d.targetId;if(!d.fromCache){const f=u.Zi.get(h),g=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(g);u.Zi=u.Zi.insert(h,v)}}}(i.localStore,r))}async function jF(e,t){const n=Qe(e);if(!n.currentUser.isEqual(t)){we("SyncEngine","User change. New user:",t.toKey());const i=await JI(n.localStore,t);n.currentUser=t,function(r,o){r.ya.forEach(a=>{a.forEach(l=>{l.reject(new ye(ie.CANCELLED,o))})}),r.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await fS(n,i.rs)}}function zF(e,t){const n=Qe(e),i=n.fa.get(t);if(i&&i.Ea)return Ge().add(i.key);{let s=Ge();const r=n.Ra.get(t);if(!r)return s;for(const o of r){const a=n.Aa.get(o);s=s.unionWith(a.view.oa)}return s}}function WF(e){const t=Qe(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=dS.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=zF.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=UF.bind(null,t),t.da.s_=VF.bind(null,t.eventManager),t.da.Da=NF.bind(null,t.eventManager),t}class jb{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=gh(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return dF(this.persistence,new cF,t.initialUser,this.serializer)}createPersistence(t){return new aF(yp.Hr,this.serializer)}createSharedClientState(t){return new vF}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qF{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ub(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=jF.bind(null,this.syncEngine),await RF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new xF}()}createDatastore(t){const n=gh(t.databaseInfo.databaseId),i=function(r){return new bF(r)}(t.databaseInfo);return function(r,o,a,l){return new CF(r,o,a,l)}(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return function(i,s,r,o,a){return new IF(i,s,r,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Ub(this.syncEngine,n,0),function(){return Mb.v()?new Mb:new pF}())}createSyncEngine(t,n){return function(s,r,o,a,l,c,u){const d=new MF(s,r,o,a,l,c);return u&&(d.Sa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const i=Qe(n);we("RemoteStore","RemoteStore shutting down."),i.S_.add(5),await Tc(i),i.D_.shutdown(),i.v_.set("Unknown")}(this.remoteStore)}}/**
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
 */class mS{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Fa(this.observer.next,t)}error(t){this.observer.error?this.Fa(this.observer.error,t):rs("Uncaught Error in snapshot listener:",t.toString())}Ma(){this.muted=!0}Fa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class KF{constructor(t,n,i,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=rn.UNAUTHENTICATED,this.clientId=bI.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{we("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(we("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ye(ie.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ms;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=rS(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Cf(e,t){e.asyncQueue.verifyOperationInProgress(),we("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async s=>{i.isEqual(s)||(await JI(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function zb(e,t){e.asyncQueue.verifyOperationInProgress();const n=await YF(e);we("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener(s=>Bb(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,r)=>Bb(t.remoteStore,r)),e._onlineComponents=t}function GF(e){return e.name==="FirebaseError"?e.code===ie.FAILED_PRECONDITION||e.code===ie.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function YF(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){we("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!GF(n))throw n;zo("Error using user provided cache. Falling back to memory cache: "+n),await Cf(e,new jb)}}else we("FirestoreClient","Using default OfflineComponentProvider"),await Cf(e,new jb);return e._offlineComponents}async function QF(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(we("FirestoreClient","Using user provided OnlineComponentProvider"),await zb(e,e._uninitializedComponentsProvider._online)):(we("FirestoreClient","Using default OnlineComponentProvider"),await zb(e,new qF))),e._onlineComponents}async function gS(e){const t=await QF(e),n=t.eventManager;return n.onListen=FF.bind(null,t.syncEngine),n.onUnlisten=$F.bind(null,t.syncEngine),n}function XF(e,t,n={}){const i=new Ms;return e.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new mS({next:h=>{o.enqueueAndForget(()=>aS(r,d));const f=h.docs.has(a);!f&&h.fromCache?c.reject(new ye(ie.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&l&&l.source==="server"?c.reject(new ye(ie.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),d=new lS(hp(a.path),u,{includeMetadataChanges:!0,z_:!0});return oS(r,d)}(await gS(e),e.asyncQueue,t,n,i)),i.promise}function JF(e,t,n={}){const i=new Ms;return e.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new mS({next:h=>{o.enqueueAndForget(()=>aS(r,d)),h.fromCache&&l.source==="server"?c.reject(new ye(ie.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),d=new lS(a,u,{includeMetadataChanges:!0,z_:!0});return oS(r,d)}(await gS(e),e.asyncQueue,t,n,i)),i.promise}/**
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
 */function vS(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Wb=new Map;/**
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
 */function pS(e,t,n){if(!n)throw new ye(ie.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ZF(e,t,n,i){if(t===!0&&i===!0)throw new ye(ie.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function qb(e){if(!Ce.isDocumentKey(e))throw new ye(ie.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Kb(e){if(Ce.isDocumentKey(e))throw new ye(ie.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ph(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Le()}function Wl(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ye(ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ph(e);throw new ye(ie.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function e2(e,t){if(t<=0)throw new ye(ie.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
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
 */class Gb{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new ye(ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new ye(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ZF("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vS((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ye(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ye(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ye(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class yh{constructor(t,n,i,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gb({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ye(ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new ye(ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gb(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new BL;switch(i.type){case"firstParty":return new jL(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ye(ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Wb.get(n);i&&(we("ComponentProvider","Removing Datastore"),Wb.delete(n),i.terminate())}(this),Promise.resolve()}}function t2(e,t,n,i={}){var s;const r=(e=Wl(e,yh))._getSettings(),o=`${t}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&zo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=rn.MOCK_USER;else{a=aT(i.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new ye(ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new rn(c)}e._authCredentials=new $L(new _I(a,l))}}/**
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
 */class qr{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new qr(this.firestore,t,this._query)}}class Bn{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Bn(this.firestore,t,this._key)}}class Bs extends qr{constructor(t,n,i){super(t,n,hp(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Bn(this.firestore,null,new Ce(t))}withConverter(t){return new Bs(this.firestore,t,this._path)}}function K7(e,t,...n){if(e=An(e),pS("collection","path",t),e instanceof yh){const i=mt.fromString(t,...n);return Kb(i),new Bs(e,null,i)}{if(!(e instanceof Bn||e instanceof Bs))throw new ye(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(mt.fromString(t,...n));return Kb(i),new Bs(e.firestore,null,i)}}function G7(e,t,...n){if(e=An(e),arguments.length===1&&(t=bI.V()),pS("doc","path",t),e instanceof yh){const i=mt.fromString(t,...n);return qb(i),new Bn(e,null,new Ce(i))}{if(!(e instanceof Bn||e instanceof Bs))throw new ye(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(mt.fromString(t,...n));return qb(i),new Bn(e.firestore,e instanceof Bs?e.converter:null,new Ce(i))}}/**
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
 */class n2{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new eS(this,"async_queue_retry"),this.tu=()=>{const n=Ef();n&&we("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const t=Ef();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.nu(),this.ru(t)}enterRestrictedMode(t){if(!this.Ha){this.Ha=!0,this.Xa=t||!1;const n=Ef();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(t){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new Ms;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ja.push(t),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(t){if(!bc(t))throw t;we("AsyncQueue","Operation failed with retryable error: "+t)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(t){const n=this.za.then(()=>(this.Za=!0,t().catch(i=>{this.Ya=i,this.Za=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw rs("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Za=!1,i))));return this.za=n,n}enqueueAfterDelay(t,n,i){this.nu(),this.eu.indexOf(t)>-1&&(n=0);const s=Cp.createAndSchedule(this,t,n,i,r=>this.su(r));return this.Ja.push(s),s}nu(){this.Ya&&Le()}verifyOperationInProgress(){}async ou(){let t;do t=this.za,await t;while(t!==this.za)}_u(t){for(const n of this.Ja)if(n.timerId===t)return!0;return!1}au(t){return this.ou().then(()=>{this.Ja.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ou()})}uu(t){this.eu.push(t)}su(t){const n=this.Ja.indexOf(t);this.Ja.splice(n,1)}}class Sp extends yh{constructor(t,n,i,s){super(t,n,i,s),this.type="firestore",this._queue=function(){return new n2}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_S(this),this._firestoreClient.terminate()}}function i2(e,t){const n=typeof e=="object"?e:qd(),i=typeof e=="string"?e:t||"(default)",s=Wd(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=sT("firestore");r&&t2(s,...r)}return s}function yS(e){return e._firestoreClient||_S(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function _S(e){var t,n,i;const s=e._freezeSettings(),r=function(a,l,c,u){return new tM(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,vS(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new KF(e._authCredentials,e._appCheckCredentials,e._queue,r),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Qo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Qo(pn.fromBase64String(t))}catch(n){throw new ye(ie.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Qo(pn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class bS{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new ye(ie.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Cn(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class wS{constructor(t){this._methodName=t}}/**
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
 */class _h{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new ye(ie.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new ye(ie.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Je(this._lat,t._lat)||Je(this._long,t._long)}}/**
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
 */const s2=/^__.*__$/;function ES(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Le()}}class Ap{constructor(t,n,i,s,r,o){this.settings=t,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.cu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(t){return new Ap(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.hu({path:i,Iu:!1});return s.Tu(t),s}Eu(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.hu({path:i,Iu:!1});return s.cu(),s}du(t){return this.hu({path:void 0,Iu:!0})}Au(t){return Wm(t,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Tu(this.path.get(t))}Tu(t){if(t.length===0)throw this.Au("Document fields must not be empty");if(ES(this.lu)&&s2.test(t))throw this.Au('Document fields cannot begin and end with "__"')}}class r2{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=i||gh(t)}mu(t,n,i,s=!1){return new Ap({lu:t,methodName:n,Vu:i,path:Cn.emptyPath(),Iu:!1,Ru:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function o2(e){const t=e._freezeSettings(),n=gh(e._databaseId);return new r2(e._databaseId,!!t.ignoreUndefinedProperties,n)}function a2(e,t,n,i=!1){return kp(n,e.mu(i?4:3,t))}function kp(e,t){if(CS(e=An(e)))return c2("Unsupported field value:",t,e),l2(e,t);if(e instanceof wS)return function(i,s){if(!ES(s.lu))throw s.Au(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Au(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Iu&&t.lu!==4)throw t.Au("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const a of i){let l=kp(a,s.du(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(e,t)}return function(i,s){if((i=An(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return EM(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=Ot.fromDate(i);return{timestampValue:Um(s.serializer,r)}}if(i instanceof Ot){const r=new Ot(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Um(s.serializer,r)}}if(i instanceof _h)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Qo)return{bytesValue:WI(s.serializer,i._byteString)};if(i instanceof Bn){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:qI(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.Au(`Unsupported field value: ${ph(i)}`)}(e,t)}function l2(e,t){const n={};return wI(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):wc(e,(i,s)=>{const r=kp(s,t.Pu(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function CS(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Ot||e instanceof _h||e instanceof Qo||e instanceof Bn||e instanceof wS)}function c2(e,t,n){if(!CS(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const i=ph(n);throw i==="an object"?t.Au(e+" a custom object"):t.Au(e+" "+i)}}const u2=new RegExp("[~\\*/\\[\\]]");function d2(e,t,n){if(t.search(u2)>=0)throw Wm(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new bS(...t.split("."))._internalPath}catch{throw Wm(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Wm(e,t,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new ye(ie.INVALID_ARGUMENT,a+e+l)}/**
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
 */class TS{constructor(t,n,i,s,r){this._firestore=t,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Bn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new h2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(IS("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class h2 extends TS{data(){return super.data()}}function IS(e,t){return typeof t=="string"?d2(e,t):t instanceof bS?t._internalPath:t._delegate._internalPath}/**
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
 */function f2(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new ye(ie.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rp{}class SS extends Rp{}function Y7(e,t,...n){let i=[];t instanceof Rp&&i.push(t),i=i.concat(n),function(r){const o=r.filter(l=>l instanceof xp).length,a=r.filter(l=>l instanceof Pp).length;if(o>1||o>0&&a>0)throw new ye(ie.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)e=s._apply(e);return e}class Pp extends SS{constructor(t,n,i){super(),this._field=t,this._op=n,this._value=i,this.type="where"}static _create(t,n,i){return new Pp(t,n,i)}_apply(t){const n=this._parse(t);return AS(t._query,n),new qr(t.firestore,t.converter,Lm(t._query,n))}_parse(t){const n=o2(t.firestore);return function(r,o,a,l,c,u,d){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new ye(ie.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Qb(d,u);const f=[];for(const g of d)f.push(Yb(l,r,g));h={arrayValue:{values:f}}}else h=Yb(l,r,d)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Qb(d,u),h=a2(a,o,d,u==="in"||u==="not-in");return Pt.create(c,u,h)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class xp extends Rp{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new xp(t,n)}_parse(t){const n=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:wi.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,r){let o=s;const a=r.getFlattenedFilters();for(const l of a)AS(o,l),o=Lm(o,l)}(t._query,n),new qr(t.firestore,t.converter,Lm(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Vp extends SS{constructor(t,n,i){super(),this.type=t,this._limit=n,this._limitType=i}static _create(t,n,i){return new Vp(t,n,i)}_apply(t){return new qr(t.firestore,t.converter,id(t._query,this._limit,this._limitType))}}function Q7(e){return e2("limit",e),Vp._create("limit",e,"F")}function Yb(e,t,n){if(typeof(n=An(n))=="string"){if(n==="")throw new ye(ie.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!PI(t)&&n.indexOf("/")!==-1)throw new ye(ie.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(mt.fromString(n));if(!Ce.isDocumentKey(i))throw new ye(ie.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return yb(e,new Ce(i))}if(n instanceof Bn)return yb(e,n._key);throw new ye(ie.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ph(n)}.`)}function Qb(e,t){if(!Array.isArray(e)||e.length===0)throw new ye(ie.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function AS(e,t){if(t.isInequality()){const i=fp(e),s=t.field;if(i!==null&&!i.isEqual(s))throw new ye(ie.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${s.toString()}'`);const r=RI(e);r!==null&&m2(e,s,r)}const n=function(s,r){for(const o of s)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new ye(ie.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ye(ie.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function m2(e,t,n){if(!n.isEqual(t))throw new ye(ie.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class g2{convertValue(t,n="none"){switch(Or(t)){case 0:return null;case 1:return t.booleanValue;case 2:return At(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Nr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Le()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const i={};return wc(t,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(t){return new _h(At(t.latitude),At(t.longitude))}convertArray(t,n){return(t.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(t,n){switch(n){case"previous":const i=lp(t);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Hl(t));default:return null}}convertTimestamp(t){const n=js(t);return new Ot(n.seconds,n.nanos)}convertDocumentKey(t,n){const i=mt.fromString(t);Nt(XI(i));const s=new jl(i.get(1),i.get(3)),r=new Ce(i.popFirst(5));return s.isEqual(n)||rs(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */class Za{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class kS extends TS{constructor(t,n,i,s,r,o){super(t,n,i,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Eu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const i=this._document.data.field(IS("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Eu extends kS{data(t={}){return super.data(t)}}class v2{constructor(t,n,i,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Za(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(i=>{t.call(n,new Eu(this._firestore,this._userDataWriter,i.key,i,new Za(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ye(ie.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Eu(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Za(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new Eu(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Za(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:p2(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function p2(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Le()}}/**
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
 */function X7(e){e=Wl(e,Bn);const t=Wl(e.firestore,Sp);return XF(yS(t),e._key).then(n=>y2(t,e,n))}class RS extends g2{constructor(t){super(),this.firestore=t}convertBytes(t){return new Qo(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Bn(this.firestore,null,n)}}function J7(e){e=Wl(e,qr);const t=Wl(e.firestore,Sp),n=yS(t),i=new RS(t);return f2(e._query),JF(n,e._query).then(s=>new v2(t,i,e,s))}function y2(e,t,n){const i=n.docs.get(t._key),s=new RS(e);return new kS(e,s,t._key,i,new Za(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){va=s})(Ys),$i(new _i("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new Sp(new UL(i.getProvider("auth-internal")),new WL(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new ye(ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jl(c.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Fn(fb,"4.1.2",t),Fn(fb,"4.1.2","esm2017")})();function _2(e){return Array.isArray(e)?e:[e]}const b2=["title","script","style","noscript"],Cu=["base","meta","link","style","script","noscript"],w2=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],E2=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Xb=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"],C2=typeof window<"u";function PS(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Jb(e){return e._h||PS(e._d?e._d:`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function xS(e,t){const{props:n,tag:i}=e;if(E2.includes(i))return i;if(i==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];i==="meta"&&s.push("name","property","http-equiv");for(const r of s)if(typeof n[r]<"u"){const o=String(n[r]);return t&&!t(o)?!1:`${i}:${r}:${o}`}return!1}function Zb(e,t){return e==null?t||null:typeof e=="function"?e(t):e}async function T2(e,t,n){const i={tag:e,props:{}};return t instanceof Promise&&(t=await t),e==="templateParams"?(i.props=t,i):["title","titleTemplate"].includes(e)?(t&&typeof t=="object"?(i.textContent=t.textContent,t.tagPriority&&(i.tagPriority=t.tagPriority)):i.textContent=t,i):typeof t=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?i.props.src=t:i.innerHTML=t,i):!1:(t.body&&(t.tagPosition="bodyClose",delete t.body),t.children&&(t.innerHTML=t.children,delete t.children),i.props=await S2({...t}),Object.keys(i.props).filter(s=>Xb.includes(s)).forEach(s=>{(!["innerHTML","textContent"].includes(s)||b2.includes(i.tag))&&(i[s]=i.props[s]),delete i.props[s]}),Xb.forEach(s=>{!i[s]&&n[s]&&(i[s]=n[s])}),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML)),i.props.class&&(i.props.class=I2(i.props.class)),i.props.content&&Array.isArray(i.props.content)?i.props.content.map(s=>({...i,props:{...i.props,content:s}})):i)}function I2(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function S2(e){for(const t of Object.keys(e)){const n=t.startsWith("data-");e[t]instanceof Promise&&(e[t]=await e[t]),String(e[t])==="true"?e[t]=n?"true":"":String(e[t])==="false"&&(n?e[t]="false":delete e[t])}return e}const A2=10;async function k2(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,i])=>typeof i<"u"&&w2.includes(n)).forEach(([n,i])=>{const s=_2(i);t.push(...s.map(r=>T2(n,r,e)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,i)=>(n._e=e._i,e.mode&&(n._m=e.mode),n._p=(e._i<<A2)+i,n))}const ew={base:-1,title:1},tw={critical:-8,high:-1,low:2};function od(e){let t=10;const n=e.tagPriority;return typeof n=="number"?n:(e.tag==="meta"?(e.props.charset&&(t=-2),e.props["http-equiv"]==="content-security-policy"&&(t=0)):e.tag==="link"&&e.props.rel==="preconnect"?t=2:e.tag in ew&&(t=ew[e.tag]),typeof n=="string"&&n in tw?t+tw[n]:t)}const R2=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Ma(e,t){if(typeof e!="string")return e;function n(o){let a;return["s","pageTitle"].includes(o)?a=t.pageTitle:o.includes(".")?a=o.split(".").reduce((l,c)=>l&&l[c]||void 0,t):a=t[o],typeof a<"u"?(a||"").replace(/"/g,'\\"'):!1}let i=e;try{i=decodeURI(e)}catch{}(i.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const a=n(o.slice(1));typeof a=="string"&&(e=e.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(l,c)=>`${a}${c}`).trim())});const r=t.separator;return e.includes(r)&&(e.endsWith(r)&&(e=e.slice(0,-r.length).trim()),e.startsWith(r)&&(e=e.slice(r.length).trim()),e=e.replace(new RegExp(`\\${r}\\s*\\${r}`,"g"),r)),e}function P2(e){const t={tag:e.tagName.toLowerCase(),props:e.getAttributeNames().reduce((n,i)=>({...n,[i]:e.getAttribute(i)}),{}),innerHTML:e.innerHTML};return t._d=xS(t),t}async function VS(e,t={}){var u;const n=t.document||e.resolvedOptions.document;if(!n)return;const i=(await e.resolveTags()).map(d=>({tag:d,id:Cu.includes(d.tag)?Jb(d):d.tag,shouldRender:!0})),s={shouldRender:!0,tags:i};if(await e.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;let r=e._dom;if(!r){r={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const d of["body","head"]){const h=(u=n==null?void 0:n[d])==null?void 0:u.children;for(const f of[...h].filter(g=>Cu.includes(g.tagName.toLowerCase())))r.elMap[f.getAttribute("data-hid")||Jb(P2(f))]=f}}r.pendingSideEffects={...r.sideEffects||{}},r.sideEffects={};function o(d,h,f){const g=`${d}:${h}`;r.sideEffects[g]=f,delete r.pendingSideEffects[g]}function a({id:d,$el:h,tag:f}){const g=f.tag.endsWith("Attrs");r.elMap[d]=h,g||(["textContent","innerHTML"].forEach(v=>{f[v]&&f[v]!==h[v]&&(h[v]=f[v])}),o(d,"el",()=>{r.elMap[d].remove(),delete r.elMap[d]})),Object.entries(f.props).forEach(([v,_])=>{_=String(_);const p=`attr:${v}`;if(v==="class")for(const y of(_||"").split(" ").filter(Boolean))g&&o(d,`${p}:${y}`,()=>h.classList.remove(y)),!h.classList.contains(y)&&h.classList.add(y);else h.getAttribute(v)!==_&&h.setAttribute(v,_),g&&o(d,p,()=>h.removeAttribute(v))})}const l=[],c={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const d of i){const{tag:h,shouldRender:f,id:g}=d;if(f){if(h.tag==="title"){n.title=h.textContent;continue}d.$el=d.$el||r.elMap[g],d.$el?a(d):Cu.includes(h.tag)&&l.push(d)}}for(const d of l){const h=d.tag.tagPosition||"head";d.$el=n.createElement(d.tag.tag),a(d),c[h]=c[h]||n.createDocumentFragment(),c[h].appendChild(d.$el)}for(const d of i)await e.hooks.callHook("dom:renderTag",d,n,o);c.head&&n.head.appendChild(c.head),c.bodyOpen&&n.body.insertBefore(c.bodyOpen,n.body.firstChild),c.bodyClose&&n.body.appendChild(c.bodyClose),Object.values(r.pendingSideEffects).forEach(d=>d()),e._dom=r,await e.hooks.callHook("dom:rendered",{renders:i})}async function x2(e,t={}){const n=t.delayFn||(i=>setTimeout(i,10));return e._domUpdatePromise=e._domUpdatePromise||new Promise(i=>n(async()=>{await VS(e,t),delete e._domUpdatePromise,i()}))}function V2(e){return t=>{var i,s;const n=((s=(i=t.resolvedOptions.document)==null?void 0:i.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&t.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(r){x2(r,e)}}}}}const N2=["templateParams","htmlAttrs","bodyAttrs"],O2={hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(i=>{e.props[i]&&(e.key=e.props[i],delete e.props[i])});const n=xS(e)||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":function(e){const t={};e.tags.forEach(i=>{const s=(i.key?`${i.tag}:${i.key}`:i._d)||i._p,r=t[s];if(r){let a=i==null?void 0:i.tagDuplicateStrategy;if(!a&&N2.includes(i.tag)&&(a="merge"),a==="merge"){const l=r.props;["class","style"].forEach(c=>{i.props[c]&&l[c]&&(c==="style"&&!l[c].endsWith(";")&&(l[c]+=";"),i.props[c]=`${l[c]} ${i.props[c]}`)}),t[s].props={...l,...i.props};return}else if(i._e===r._e){r._duped=r._duped||[],i._d=`${r._d}:${r._duped.length+1}`,r._duped.push(i);return}else if(od(i)>od(r))return}const o=Object.keys(i.props).length+(i.innerHTML?1:0)+(i.textContent?1:0);if(Cu.includes(i.tag)&&o===0){delete t[s];return}t[s]=i});const n=[];Object.values(t).forEach(i=>{const s=i._duped;delete i._duped,n.push(i),s&&n.push(...s)}),e.tags=n}}},D2={mode:"server",hooks:{"tags:resolve":function(e){const t={};e.tags.filter(n=>["titleTemplate","templateParams"].includes(n.tag)&&n._m==="server").forEach(n=>{t[n.tag]=n.tag==="titleTemplate"?n.textContent:n.props}),Object.keys(t).length&&e.tags.push({tag:"script",innerHTML:JSON.stringify(t),props:{id:"unhead:payload",type:"application/json"}})}}},nw=["script","link","bodyAttrs"];function iw(e){const t={},n={};return Object.entries(e.props).forEach(([i,s])=>{i.startsWith("on")&&typeof s=="function"?n[i]=s:t[i]=s}),{props:t,eventHandlers:n}}const L2={hooks:{"ssr:render":function(e){e.tags=e.tags.map(t=>(!nw.includes(t.tag)||!Object.entries(t.props).find(([n,i])=>n.startsWith("on")&&typeof i=="function")||(t.props=iw(t).props),t))},"tags:resolve":function(e){e.tags=e.tags.map(t=>{if(!nw.includes(t.tag))return t;const{props:n,eventHandlers:i}=iw(t);return Object.keys(i).length&&(t.props=n,t._eventHandlers=i),t})},"dom:renderTag":function(e,t,n){if(!e.tag._eventHandlers)return;const i=e.tag.tag==="bodyAttrs"?t.defaultView:e.$el;Object.entries(e.tag._eventHandlers).forEach(([s,r])=>{const o=`${e.tag._d||e.tag._p}:${s}`,a=s.slice(2).toLowerCase(),l=`data-h-${a}`;if(n(e.id,o,()=>{}),e.$el.hasAttribute(l))return;const c=r;e.$el.setAttribute(l,""),i.addEventListener(a,c),e.entry&&n(e.id,o,()=>{i.removeEventListener(a,c),e.$el.removeAttribute(l)})})}}},M2=["link","style","script","noscript"],F2={hooks:{"tag:normalise":({tag:e})=>{e.key&&M2.includes(e.tag)&&(e.props["data-hid"]=e._h=PS(e.key))}}},B2={hooks:{"tags:resolve":e=>{const t=n=>{var i;return(i=e.tags.find(s=>s._d===n))==null?void 0:i._p};for(const{prefix:n,offset:i}of R2)for(const s of e.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(n))){const r=t(s.tagPriority.replace(n,""));typeof r<"u"&&(s._p=r+i)}e.tags.sort((n,i)=>n._p-i._p).sort((n,i)=>od(n)-od(i))}}},$2={hooks:{"tags:resolve":e=>{var r;const{tags:t}=e,n=(r=t.find(o=>o.tag==="title"))==null?void 0:r.textContent,i=t.findIndex(o=>o.tag==="templateParams"),s=i!==-1?t[i].props:{};s.separator=s.separator||"|",s.pageTitle=Ma(s.pageTitle||n||"",s);for(const o of t)["titleTemplate","title"].includes(o.tag)&&typeof o.textContent=="string"?o.textContent=Ma(o.textContent,s):o.tag==="meta"&&typeof o.props.content=="string"?o.props.content=Ma(o.props.content,s):o.tag==="link"&&typeof o.props.href=="string"?o.props.href=Ma(o.props.href,s):o.tag==="script"&&["application/json","application/ld+json"].includes(o.props.type)&&o.innerHTML&&(o.innerHTML=Ma(o.innerHTML,s));e.tags=t.filter(o=>o.tag!=="templateParams")}}},U2={hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(s=>s.tag==="titleTemplate");const i=t.findIndex(s=>s.tag==="title");if(i!==-1&&n!==-1){const s=Zb(t[n].textContent,t[i].textContent);s!==null?t[i].textContent=s||t[i].textContent:delete t[i]}else if(n!==-1){const s=Zb(t[n].textContent);s!==null&&(t[n].textContent=s,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}};let NS;function H2(e={}){const t=j2(e);return t.use(V2()),NS=t}function sw(e,t){return!e||e==="server"&&t||e==="client"&&!t}function j2(e={}){const t=XC();t.addHooks(e.hooks||{}),e.document=e.document||(C2?document:void 0);const n=!e.document;e.plugins=[O2,D2,L2,F2,B2,$2,U2,...(e==null?void 0:e.plugins)||[]];const i=()=>t.callHook("entries:updated",o);let s=0,r=[];const o={resolvedOptions:e,hooks:t,headEntries(){return r},use(a){const l=typeof a=="function"?a(o):a;sw(l.mode,n)&&t.addHooks(l.hooks||{})},push(a,l){const c={_i:s++,input:a,...l};return sw(c.mode,n)&&(r.push(c),i()),{dispose(){r=r.filter(u=>u._i!==c._i),t.callHook("entries:updated",o),i()},patch(u){r=r.map(d=>(d._i===c._i&&(d.input=c.input=u),d)),i()}}},async resolveTags(){const a={tags:[],entries:[...r]};await t.callHook("entries:resolve",a);for(const l of a.entries){const c=l.resolvedInput||l.input;if(l.resolvedInput=await(l.transform?l.transform(c):c),l.resolvedInput)for(const u of await k2(l)){const d={tag:u,entry:l,resolvedOptions:o.resolvedOptions};await t.callHook("tag:normalise",d),a.tags.push(d.tag)}}return await t.callHook("tags:beforeResolve",a),await t.callHook("tags:resolve",a),a.tags},ssr:n};return e.plugins.forEach(a=>o.use(a)),o.hooks.callHook("init",o),o}function z2(){return NS}const W2=DC.startsWith("3");function q2(e){return typeof e=="function"?e():$e(e)}function ad(e,t=""){if(e instanceof Promise)return e;const n=q2(e);return!e||!n?n:Array.isArray(n)?n.map(i=>ad(i,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,s])=>i==="titleTemplate"||i.startsWith("on")?[i,$e(s)]:[i,ad(s,i)])):n}const K2={hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=ad(t.input)}}},OS="usehead";function G2(e){return{install(n){W2&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(OS,e))}}.install}function Y2(e={}){e.domDelayFn=e.domDelayFn||(n=>Ye(()=>n()));const t=H2(e);return t.use(K2),t.install=G2(t),t}function Q2(){return Gs()&&De(OS)||z2()}function Z7(e,t={}){const n=Q2();if(n)return n.ssr?n.push(e,t):X2(n,e,t)}function X2(e,t,n={}){const i=Z(!1),s=Z({});Nn(()=>{s.value=i.value?{}:ad(t)});const r=e.push(s.value,n);return ue(s,a=>{r.patch(a)}),Gs()&&(tn(()=>{r.dispose()}),wv(()=>{i.value=!0}),bv(()=>{i.value=!1})),r}function Tf(e){return e!==null&&typeof e=="object"}function qm(e,t,n=".",i){if(!Tf(t))return qm(e,{},n,i);const s=Object.assign({},t);for(const r in e){if(r==="__proto__"||r==="constructor")continue;const o=e[r];o!=null&&(i&&i(s,r,o,n)||(Array.isArray(o)&&Array.isArray(s[r])?s[r]=[...o,...s[r]]:Tf(o)&&Tf(s[r])?s[r]=qm(o,s[r],(n?`${n}.`:"")+r.toString(),i):s[r]=o))}return s}function DS(e){return(...t)=>t.reduce((n,i)=>qm(n,i,"",e),{})}const J2=DS(),Z2=DS((e,t,n)=>{if(typeof e[t]<"u"&&typeof n=="function")return e[t]=n(e[t]),!0});function eB(e,t){try{return t in e}catch{return!1}}var tB=Object.defineProperty,nB=(e,t,n)=>t in e?tB(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ar=(e,t,n)=>(nB(e,typeof t!="symbol"?t+"":t,n),n);class Km extends Error{constructor(t,n={}){super(t,n),ar(this,"statusCode",500),ar(this,"fatal",!1),ar(this,"unhandled",!1),ar(this,"statusMessage"),ar(this,"data"),ar(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const t={message:this.message,statusCode:Ym(this.statusCode,500)};return this.statusMessage&&(t.statusMessage=LS(this.statusMessage)),this.data!==void 0&&(t.data=this.data),t}}ar(Km,"__h3_error__",!0);function Gm(e){if(typeof e=="string")return new Km(e);if(iB(e))return e;const t=new Km(e.message??e.statusMessage??"",{cause:e.cause||e});if(eB(e,"stack"))try{Object.defineProperty(t,"stack",{get(){return e.stack}})}catch{try{t.stack=e.stack}catch{}}if(e.data&&(t.data=e.data),e.statusCode?t.statusCode=Ym(e.statusCode,t.statusCode):e.status&&(t.statusCode=Ym(e.status,t.statusCode)),e.statusMessage?t.statusMessage=e.statusMessage:e.statusText&&(t.statusMessage=e.statusText),t.statusMessage){const n=t.statusMessage;LS(t.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return e.fatal!==void 0&&(t.fatal=e.fatal),e.unhandled!==void 0&&(t.unhandled=e.unhandled),t}function iB(e){var t;return((t=e==null?void 0:e.constructor)==null?void 0:t.__h3_error__)===!0}const sB=/[^\u0009\u0020-\u007E]/g;function LS(e=""){return e.replace(sB,"")}function Ym(e,t=200){return!e||(typeof e=="string"&&(e=Number.parseInt(e,10)),e<100||e>999)?t:e}const rB="$s";function oB(...e){const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);const[n,i]=e;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(i!==void 0&&typeof i!="function")throw new Error("[nuxt] [useState] init must be a function: "+i);const s=rB+n,r=wt(),o=Y(r.payload.state,s);if(o.value===void 0&&i){const a=i();if(pt(a))return r.payload.state[s]=a,a;o.value=a}return o}const MS=Symbol("layout-meta"),Sc=Symbol("route"),Kr=()=>{var e;return(e=wt())==null?void 0:e.$router},FS=()=>bC()?De(Sc,wt()._route):wt()._route;/*! @__NO_SIDE_EFFECTS__ */const aB=()=>{try{if(wt()._processingMiddleware)return!0}catch{return!0}return!1},e8=(e,t)=>{e||(e="/");const n=typeof e=="string"?e:qC(e.path||"/",e.query||{})+(e.hash||"");if(t!=null&&t.open){{const{target:a="_blank",windowFeatures:l={}}=t.open,c=Object.entries(l).filter(([u,d])=>d!==void 0).map(([u,d])=>`${u.toLowerCase()}=${d}`).join(", ");open(n,a,c)}return Promise.resolve()}const i=(t==null?void 0:t.external)||cc(n,{acceptRelative:!0});if(i){if(!(t!=null&&t.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const a=Hd(n).protocol;if(a&&yN(a))throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)}const s=aB();if(!i&&s)return e;const r=Kr(),o=wt();return i?(t!=null&&t.replace?location.replace(n):location.href=n,s?o.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):t!=null&&t.replace?r.replace(e):r.push(e)},bh=()=>Y(wt().payload,"error"),po=e=>{const t=Np(e);try{const n=wt(),i=bh();n.hooks.callHook("app:error",t),i.value=i.value||t}catch{throw t}return t},lB=async(e={})=>{const t=wt(),n=bh();t.callHook("app:error:cleared",e),e.redirect&&await Kr().replace(e.redirect),n.value=null},cB=e=>!!(e&&typeof e=="object"&&"__nuxt_error"in e),Np=e=>{const t=Gm(e);return t.__nuxt_error=!0,t},uB="modulepreload",dB=function(e,t){return e[0]==="."?new URL(e,t).href:e},rw={},hB=function(t,n,i){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=dB(r,i),r in rw)return;rw[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=s.length-1;u>=0;u--){const d=s[u];if(d.href===r&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":uB,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},Qi=(...e)=>hB(...e).catch(t=>{const n=new Event("nuxt.preloadError");throw n.payload=t,window.dispatchEvent(n),t}),fB=-1,mB=-2,gB=-3,vB=-4,pB=-5,yB=-6;function _B(e,t){return bB(JSON.parse(e),t)}function bB(e,t){if(typeof e=="number")return s(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,i=Array(n.length);function s(r,o=!1){if(r===fB)return;if(r===gB)return NaN;if(r===vB)return 1/0;if(r===pB)return-1/0;if(r===yB)return-0;if(o)throw new Error("Invalid input");if(r in i)return i[r];const a=n[r];if(!a||typeof a!="object")i[r]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],c=t==null?void 0:t[l];if(c)return i[r]=c(s(a[1]));switch(l){case"Date":i[r]=new Date(a[1]);break;case"Set":const u=new Set;i[r]=u;for(let f=1;f<a.length;f+=1)u.add(s(a[f]));break;case"Map":const d=new Map;i[r]=d;for(let f=1;f<a.length;f+=2)d.set(s(a[f]),s(a[f+1]));break;case"RegExp":i[r]=new RegExp(a[1],a[2]);break;case"Object":i[r]=Object(a[1]);break;case"BigInt":i[r]=BigInt(a[1]);break;case"null":const h=Object.create(null);i[r]=h;for(let f=1;f<a.length;f+=2)h[a[f]]=s(a[f+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);i[r]=l;for(let c=0;c<a.length;c+=1){const u=a[c];u!==mB&&(l[c]=s(u))}}else{const l={};i[r]=l;for(const c in a){const u=a[c];l[c]=s(u)}}return i[r]}return s(0)}const wB=!1,Qm=!1,EB=!1,CB=!0,TB="#__nuxt";function ow(e,t={}){const n=IB(e,t),i=wt(),s=i._payloadCache=i._payloadCache||{};return s[n]||(s[n]=BS(n).then(r=>r||(delete s[n],null))),s[n]}const aw="json";function IB(e,t={}){const n=new URL(e,"http://localhost");if(n.search)throw new Error("Payload URL cannot contain search params: "+e);if(n.host!=="localhost"||cc(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+e);const i=t.hash||(t.fresh?Date.now():"");return uc(Vv().app.baseURL,n.pathname,i?`_payload.${i}.${aw}`:`_payload.${aw}`)}async function BS(e){try{return CB?$S(await fetch(e).then(t=>t.text())):await Qi(()=>import(e),[],import.meta.url).then(t=>t.default||t)}catch(t){console.warn("[nuxt] Cannot load payload ",e,t)}return null}function SB(){return!!wt().payload.prerenderedAt}let ou=null;async function AB(){if(ou)return ou;const e=document.getElementById("__NUXT_DATA__");if(!e)return{};const t=$S(e.textContent||""),n=e.dataset.src?await BS(e.dataset.src):void 0;return ou={...t,...n,...window.__NUXT__},ou}function $S(e){return _B(e,wt()._payloadRevivers)}function Xm(e,t){wt()._payloadRevivers[e]=t}function kB(e={}){const t=e.path||window.location.pathname;let n={};try{n=JSON.parse(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(e.force||(n==null?void 0:n.path)!==t||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:t,expires:Date.now()+(e.ttl??1e4)}))}catch{}if(e.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:wt().payload.state}))}catch{}window.location.pathname!==t?window.location.href=t:window.location.reload()}}const RB={firebaseConfig:{apiKey:"AIzaSyCihtmlyKeFa6MGXMrJ3DPUAm7s8k-TJyo",authDomain:"autocompromiso-32ca7.firebaseapp.com",databaseURL:"https://autocompromiso-32ca7-default-rtdb.firebaseio.com",projectId:"autocompromiso-32ca7",storageBucket:"autocompromiso-32ca7.appspot.com",messagingSenderId:"171009053819",appId:"1:171009053819:web:8fd75b1bdbde7a08eabede",measurementId:"G-E5P4RN1V8K"},vuefireOptions:{optionsApiPlugin:!1,emulators:{enabled:!0},auth:!0,config:{apiKey:"AIzaSyCihtmlyKeFa6MGXMrJ3DPUAm7s8k-TJyo",authDomain:"autocompromiso-32ca7.firebaseapp.com",databaseURL:"https://autocompromiso-32ca7-default-rtdb.firebaseio.com",projectId:"autocompromiso-32ca7",storageBucket:"autocompromiso-32ca7.appspot.com",messagingSenderId:"171009053819",appId:"1:171009053819:web:8fd75b1bdbde7a08eabede",measurementId:"G-E5P4RN1V8K"}}},PB=Z2(RB);function xB(){const e=wt();return e._appConfig||(e._appConfig=kt(PB)),e._appConfig}const VB=sO(()=>{Xm("JSONifiable",e=>{const t=JSON.parse(e);return"seconds"in t&&"nanoseconds"in t?Ou(new Ot(t.seconds,t.nanoseconds)):"latitude"in t&&"longitude"in t?Ou(new _h(t.latitude,t.longitude)):t}),Xm("DocumentData",e=>{const t=typeof e=="string"?JSON.parse(e):e,n=t.id;return delete t.id,Object.defineProperty(t,"id",{value:n})})}),lw={NuxtError:e=>Np(e),EmptyShallowRef:e=>le(e==="_"?void 0:e==="0n"?BigInt(0):JSON.parse(e)),EmptyRef:e=>Z(e==="_"?void 0:e==="0n"?BigInt(0):JSON.parse(e)),ShallowRef:e=>le(e),ShallowReactive:e=>oc(e),Ref:e=>Z(e),Reactive:e=>kt(e)},NB=jn({name:"nuxt:revive-payload:client",order:-30,async setup(e){let t,n;for(const i in lw)Xm(i,lw[i]);Object.assign(e.payload,([t,n]=Hu(()=>e.runWithContext(AB)),t=await t,n(),t)),window.__NUXT__=e.payload}});/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const go=typeof window<"u";function OB(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const et=Object.assign;function If(e,t){const n={};for(const i in t){const s=t[i];n[i]=Ei(s)?s.map(e):e(s)}return n}const ml=()=>{},Ei=Array.isArray,DB=/\/$/,LB=e=>e.replace(DB,"");function Sf(e,t,n="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),r=t.slice(l+1,a>-1?a:t.length),s=e(r)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=$B(i??t,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function MB(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function cw(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function FB(e,t,n){const i=t.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Xo(t.matched[i],n.matched[s])&&US(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Xo(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function US(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!BB(e[n],t[n]))return!1;return!0}function BB(e,t){return Ei(e)?uw(e,t):Ei(t)?uw(t,e):e===t}function uw(e,t){return Ei(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function $B(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var ql;(function(e){e.pop="pop",e.push="push"})(ql||(ql={}));var gl;(function(e){e.back="back",e.forward="forward",e.unknown=""})(gl||(gl={}));function UB(e){if(!e)if(go){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),LB(e)}const HB=/^[^#]+#/;function jB(e,t){return e.replace(HB,"#")+t}function zB(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const wh=()=>({left:window.pageXOffset,top:window.pageYOffset});function WB(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=zB(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function dw(e,t){return(history.state?history.state.position-t:-1)+e}const Jm=new Map;function qB(e,t){Jm.set(e,t)}function KB(e){const t=Jm.get(e);return Jm.delete(e),t}let GB=()=>location.protocol+"//"+location.host;function HS(e,t){const{pathname:n,search:i,hash:s}=t,r=e.indexOf("#");if(r>-1){let a=s.includes(e.slice(r))?e.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),cw(l,"")}return cw(n,e)+i+s}function YB(e,t,n,i){let s=[],r=[],o=null;const a=({state:h})=>{const f=HS(e,location),g=n.value,v=t.value;let _=0;if(h){if(n.value=f,t.value=h,o&&o===g){o=null;return}_=v?h.position-v.position:0}else i(f);s.forEach(p=>{p(n.value,g,{delta:_,type:ql.pop,direction:_?_>0?gl.forward:gl.back:gl.unknown})})};function l(){o=n.value}function c(h){s.push(h);const f=()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)};return r.push(f),f}function u(){const{history:h}=window;h.state&&h.replaceState(et({},h.state,{scroll:wh()}),"")}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function hw(e,t,n,i=!1,s=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:s?wh():null}}function QB(e){const{history:t,location:n}=window,i={value:HS(e,n)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:GB()+e+l;try{t[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(f){console.error(f),n[u?"replace":"assign"](h)}}function o(l,c){const u=et({},t.state,hw(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=et({},s.value,t.state,{forward:l,scroll:wh()});r(u.current,u,!0);const d=et({},hw(i.value,l,null),{position:u.position+1},c);r(l,d,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function jS(e){e=UB(e);const t=QB(e),n=YB(e,t.state,t.location,t.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=et({location:"",base:e,go:i,createHref:jB.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function XB(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),jS(e)}function JB(e){return typeof e=="string"||e&&typeof e=="object"}function zS(e){return typeof e=="string"||typeof e=="symbol"}const Ai={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},WS=Symbol("");var fw;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(fw||(fw={}));function Jo(e,t){return et(new Error,{type:e,[WS]:!0},t)}function Wi(e,t){return e instanceof Error&&WS in e&&(t==null||!!(e.type&t))}const mw="[^/]+?",ZB={sensitive:!1,strict:!1,start:!0,end:!0},e$=/[.+*?^${}()[\]/\\]/g;function t$(e,t){const n=et({},ZB,t),i=[];let s=n.start?"^":"";const r=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const h=c[d];let f=40+(n.sensitive?.25:0);if(h.type===0)d||(s+="/"),s+=h.value.replace(e$,"\\$&"),f+=40;else if(h.type===1){const{value:g,repeatable:v,optional:_,regexp:p}=h;r.push({name:g,repeatable:v,optional:_});const y=p||mw;if(y!==mw){f+=10;try{new RegExp(`(${y})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+b.message)}}let E=v?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;d||(E=_&&c.length<2?`(?:/${E})`:"/"+E),_&&(E+="?"),s+=E,f+=20,_&&(f+=-8),v&&(f+=-20),y===".*"&&(f+=-50)}u.push(f)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const f=u[h]||"",g=r[h-1];d[g.name]=f&&g.repeatable?f.split("/"):f}return d}function l(c){let u="",d=!1;for(const h of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const f of h)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:v,optional:_}=f,p=g in c?c[g]:"";if(Ei(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=Ei(p)?p.join("/"):p;if(!y)if(_)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function n$(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function i$(e,t){let n=0;const i=e.score,s=t.score;for(;n<i.length&&n<s.length;){const r=n$(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(gw(i))return 1;if(gw(s))return-1}return s.length-i.length}function gw(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const s$={type:0,value:""},r$=/[a-zA-Z0-9_]/;function o$(e){if(!e)return[[]];if(e==="/")return[[s$]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:r$.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}function a$(e,t,n){const i=t$(o$(e.path),n),s=et(i,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function l$(e,t){const n=[],i=new Map;t=yw({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function r(u,d,h){const f=!h,g=c$(u);g.aliasOf=h&&h.record;const v=yw(t,u),_=[g];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of E)_.push(et({},g,{components:h?h.record.components:g.components,path:b,aliasOf:h?h.record:g}))}let p,y;for(const E of _){const{path:b}=E;if(d&&b[0]!=="/"){const S=d.record.path,A=S[S.length-1]==="/"?"":"/";E.path=d.record.path+(b&&A+b)}if(p=a$(E,d,v),h?h.alias.push(p):(y=y||p,y!==p&&y.alias.push(p),f&&u.name&&!pw(p)&&o(u.name)),g.children){const S=g.children;for(let A=0;A<S.length;A++)r(S[A],p,h&&h.children[A])}h=h||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return y?()=>{o(y)}:ml}function o(u){if(zS(u)){const d=i.get(u);d&&(i.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&i$(u,n[d])>=0&&(u.record.path!==n[d].record.path||!qS(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!pw(u)&&i.set(u.record.name,u)}function c(u,d){let h,f={},g,v;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw Jo(1,{location:u});v=h.record.name,f=et(vw(d.params,h.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&vw(u.params,h.keys.map(y=>y.name))),g=h.stringify(f)}else if("path"in u)g=u.path,h=n.find(y=>y.re.test(g)),h&&(f=h.parse(g),v=h.record.name);else{if(h=d.name?i.get(d.name):n.find(y=>y.re.test(d.path)),!h)throw Jo(1,{location:u,currentLocation:d});v=h.record.name,f=et({},d.params,u.params),g=h.stringify(f)}const _=[];let p=h;for(;p;)_.unshift(p.record),p=p.parent;return{name:v,path:g,params:f,matched:_,meta:d$(_)}}return e.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function vw(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function c$(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:u$(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function u$(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="object"?n[i]:n;return t}function pw(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function d$(e){return e.reduce((t,n)=>et(t,n.meta),{})}function yw(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function qS(e,t){return t.children.some(n=>n===e||qS(e,n))}const KS=/#/g,h$=/&/g,f$=/\//g,m$=/=/g,g$=/\?/g,GS=/\+/g,v$=/%5B/g,p$=/%5D/g,YS=/%5E/g,y$=/%60/g,QS=/%7B/g,_$=/%7C/g,XS=/%7D/g,b$=/%20/g;function Op(e){return encodeURI(""+e).replace(_$,"|").replace(v$,"[").replace(p$,"]")}function w$(e){return Op(e).replace(QS,"{").replace(XS,"}").replace(YS,"^")}function Zm(e){return Op(e).replace(GS,"%2B").replace(b$,"+").replace(KS,"%23").replace(h$,"%26").replace(y$,"`").replace(QS,"{").replace(XS,"}").replace(YS,"^")}function E$(e){return Zm(e).replace(m$,"%3D")}function C$(e){return Op(e).replace(KS,"%23").replace(g$,"%3F")}function T$(e){return e==null?"":C$(e).replace(f$,"%2F")}function ld(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function I$(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(GS," "),o=r.indexOf("="),a=ld(o<0?r:r.slice(0,o)),l=o<0?null:ld(r.slice(o+1));if(a in t){let c=t[a];Ei(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function _w(e){let t="";for(let n in e){const i=e[n];if(n=E$(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ei(i)?i.map(r=>r&&Zm(r)):[i&&Zm(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function S$(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=Ei(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const A$=Symbol(""),bw=Symbol(""),Eh=Symbol(""),Dp=Symbol(""),eg=Symbol("");function Fa(){let e=[];function t(i){return e.push(i),()=>{const s=e.indexOf(i);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ss(e,t,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Jo(4,{from:n,to:t})):d instanceof Error?a(d):JB(d)?a(Jo(2,{from:t,to:d})):(r&&i.enterCallbacks[s]===r&&typeof d=="function"&&r.push(d),o())},c=e.call(i&&i.instances[s],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Af(e,t,n,i){const s=[];for(const r of e)for(const o in r.components){let a=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(k$(a)){const c=(a.__vccOpts||a)[t];c&&s.push(Ss(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=OB(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[t];return h&&Ss(h,n,i,r,o)()}))}}return s}function k$(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ww(e){const t=De(Eh),n=De(Dp),i=w(()=>t.resolve($e(e.to))),s=w(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Xo.bind(null,u));if(h>-1)return h;const f=Ew(l[c-2]);return c>1&&Ew(u)===f&&d[d.length-1].path!==f?d.findIndex(Xo.bind(null,l[c-2])):h}),r=w(()=>s.value>-1&&V$(n.params,i.value.params)),o=w(()=>s.value>-1&&s.value===n.matched.length-1&&US(n.params,i.value.params));function a(l={}){return x$(l)?t[$e(e.replace)?"replace":"push"]($e(e.to)).catch(ml):Promise.resolve()}return{route:i,href:w(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const R$=fs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ww,setup(e,{slots:t}){const n=kt(ww(e)),{options:i}=De(Eh),s=w(()=>({[Cw(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Cw(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:xt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),P$=R$;function x$(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function V$(e,t){for(const n in t){const i=t[n],s=e[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Ei(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Ew(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Cw=(e,t,n)=>e??t??n,N$=fs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=De(eg),s=w(()=>e.route||i.value),r=De(bw,0),o=w(()=>{let c=$e(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=w(()=>s.value.matched[o.value]);lt(bw,w(()=>o.value+1)),lt(A$,a),lt(eg,s);const l=Z();return ue(()=>[l.value,a.value,e.name],([c,u,d],[h,f,g])=>{u&&(u.instances[d]=c,f&&f!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Xo(u,f)||!h)&&(u.enterCallbacks[d]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=e.name,d=a.value,h=d&&d.components[u];if(!h)return Tw(n.default,{Component:h,route:c});const f=d.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,_=xt(h,et({},g,t,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Tw(n.default,{Component:_,route:c})||_}}});function Tw(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const JS=N$;function O$(e){const t=l$(e.routes,e),n=e.parseQuery||I$,i=e.stringifyQuery||_w,s=e.history,r=Fa(),o=Fa(),a=Fa(),l=le(Ai);let c=Ai;go&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=If.bind(null,F=>""+F),d=If.bind(null,T$),h=If.bind(null,ld);function f(F,fe){let se,j;return zS(F)?(se=t.getRecordMatcher(F),j=fe):j=F,t.addRoute(j,se)}function g(F){const fe=t.getRecordMatcher(F);fe&&t.removeRoute(fe)}function v(){return t.getRoutes().map(F=>F.record)}function _(F){return!!t.getRecordMatcher(F)}function p(F,fe){if(fe=et({},fe||l.value),typeof F=="string"){const V=Sf(n,F,fe.path),L=t.resolve({path:V.path},fe),U=s.createHref(V.fullPath);return et(V,L,{params:h(L.params),hash:ld(V.hash),redirectedFrom:void 0,href:U})}let se;if("path"in F)se=et({},F,{path:Sf(n,F.path,fe.path).path});else{const V=et({},F.params);for(const L in V)V[L]==null&&delete V[L];se=et({},F,{params:d(V)}),fe.params=d(fe.params)}const j=t.resolve(se,fe),H=F.hash||"";j.params=u(h(j.params));const I=MB(i,et({},F,{hash:w$(H),path:j.path})),P=s.createHref(I);return et({fullPath:I,hash:H,query:i===_w?S$(F.query):F.query||{}},j,{redirectedFrom:void 0,href:P})}function y(F){return typeof F=="string"?Sf(n,F,l.value.path):et({},F)}function E(F,fe){if(c!==F)return Jo(8,{from:fe,to:F})}function b(F){return k(F)}function S(F){return b(et(y(F),{replace:!0}))}function A(F){const fe=F.matched[F.matched.length-1];if(fe&&fe.redirect){const{redirect:se}=fe;let j=typeof se=="function"?se(F):se;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=y(j):{path:j},j.params={}),et({query:F.query,hash:F.hash,params:"path"in j?{}:F.params},j)}}function k(F,fe){const se=c=p(F),j=l.value,H=F.state,I=F.force,P=F.replace===!0,V=A(se);if(V)return k(et(y(V),{state:typeof V=="object"?et({},H,V.state):H,force:I,replace:P}),fe||se);const L=se;L.redirectedFrom=fe;let U;return!I&&FB(i,j,se)&&(U=Jo(16,{to:L,from:j}),ae(j,j,!0,!1)),(U?Promise.resolve(U):R(L,j)).catch(W=>Wi(W)?Wi(W,2)?W:Q(W):M(W,L,j)).then(W=>{if(W){if(Wi(W,2))return k(et({replace:P},y(W.to),{state:typeof W.to=="object"?et({},H,W.to.state):H,force:I}),fe||L)}else W=x(L,j,!0,P,H);return N(L,j,W),W})}function C(F,fe){const se=E(F,fe);return se?Promise.reject(se):Promise.resolve()}function T(F){const fe=ke.values().next().value;return fe&&typeof fe.runWithContext=="function"?fe.runWithContext(F):F()}function R(F,fe){let se;const[j,H,I]=D$(F,fe);se=Af(j.reverse(),"beforeRouteLeave",F,fe);for(const V of j)V.leaveGuards.forEach(L=>{se.push(Ss(L,F,fe))});const P=C.bind(null,F,fe);return se.push(P),z(se).then(()=>{se=[];for(const V of r.list())se.push(Ss(V,F,fe));return se.push(P),z(se)}).then(()=>{se=Af(H,"beforeRouteUpdate",F,fe);for(const V of H)V.updateGuards.forEach(L=>{se.push(Ss(L,F,fe))});return se.push(P),z(se)}).then(()=>{se=[];for(const V of I)if(V.beforeEnter)if(Ei(V.beforeEnter))for(const L of V.beforeEnter)se.push(Ss(L,F,fe));else se.push(Ss(V.beforeEnter,F,fe));return se.push(P),z(se)}).then(()=>(F.matched.forEach(V=>V.enterCallbacks={}),se=Af(I,"beforeRouteEnter",F,fe),se.push(P),z(se))).then(()=>{se=[];for(const V of o.list())se.push(Ss(V,F,fe));return se.push(P),z(se)}).catch(V=>Wi(V,8)?V:Promise.reject(V))}function N(F,fe,se){a.list().forEach(j=>T(()=>j(F,fe,se)))}function x(F,fe,se,j,H){const I=E(F,fe);if(I)return I;const P=fe===Ai,V=go?history.state:{};se&&(j||P?s.replace(F.fullPath,et({scroll:P&&V&&V.scroll},H)):s.push(F.fullPath,H)),l.value=F,ae(F,fe,se,P),Q()}let O;function D(){O||(O=s.listen((F,fe,se)=>{if(!Fe.listening)return;const j=p(F),H=A(j);if(H){k(et(H,{replace:!0}),j).catch(ml);return}c=j;const I=l.value;go&&qB(dw(I.fullPath,se.delta),wh()),R(j,I).catch(P=>Wi(P,12)?P:Wi(P,2)?(k(P.to,j).then(V=>{Wi(V,20)&&!se.delta&&se.type===ql.pop&&s.go(-1,!1)}).catch(ml),Promise.reject()):(se.delta&&s.go(-se.delta,!1),M(P,j,I))).then(P=>{P=P||x(j,I,!1),P&&(se.delta&&!Wi(P,8)?s.go(-se.delta,!1):se.type===ql.pop&&Wi(P,20)&&s.go(-1,!1)),N(j,I,P)}).catch(ml)}))}let J=Fa(),X=Fa(),B;function M(F,fe,se){Q(F);const j=X.list();return j.length?j.forEach(H=>H(F,fe,se)):console.error(F),Promise.reject(F)}function q(){return B&&l.value!==Ai?Promise.resolve():new Promise((F,fe)=>{J.add([F,fe])})}function Q(F){return B||(B=!F,D(),J.list().forEach(([fe,se])=>F?se(F):fe()),J.reset()),F}function ae(F,fe,se,j){const{scrollBehavior:H}=e;if(!go||!H)return Promise.resolve();const I=!se&&KB(dw(F.fullPath,0))||(j||!se)&&history.state&&history.state.scroll||null;return Ye().then(()=>H(F,fe,I)).then(P=>P&&WB(P)).catch(P=>M(P,F,fe))}const de=F=>s.go(F);let Se;const ke=new Set,Fe={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,hasRoute:_,getRoutes:v,resolve:p,options:e,push:b,replace:S,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:X.add,isReady:q,install(F){const fe=this;F.component("RouterLink",P$),F.component("RouterView",JS),F.config.globalProperties.$router=fe,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>$e(l)}),go&&!Se&&l.value===Ai&&(Se=!0,b(s.location).catch(H=>{}));const se={};for(const H in Ai)Object.defineProperty(se,H,{get:()=>l.value[H],enumerable:!0});F.provide(Eh,fe),F.provide(Dp,oc(se)),F.provide(eg,l);const j=F.unmount;ke.add(F),F.unmount=function(){ke.delete(F),ke.size<1&&(c=Ai,O&&O(),O=null,l.value=Ai,Se=!1,B=!1),j()}}};function z(F){return F.reduce((fe,se)=>fe.then(()=>T(se)),Promise.resolve())}return Fe}function D$(e,t){const n=[],i=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(e.matched.find(c=>Xo(c,a))?i.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(c=>Xo(c,l))||s.push(l))}return[n,i,s]}function t8(){return De(Eh)}function L$(){return De(Dp)}const Iw=[{name:"noticiasId",path:"/:noticiasId()",meta:{},alias:[],redirect:void 0,component:()=>Qi(()=>import("./index.ad40a106.js"),["./index.ad40a106.js","./Noticia.eaaa5782.js","./Noticia.ad3d5fba.css","./index.b55e8069.css"],import.meta.url).then(e=>e.default||e)},{name:"cotizacion",path:"/cotizacion",meta:{},alias:[],redirect:void 0,component:()=>Qi(()=>import("./cotizacion.2235bd94.js"),[],import.meta.url).then(e=>e.default||e)},{name:"index",path:"/",meta:{},alias:[],redirect:void 0,component:()=>Qi(()=>import("./index.f63869e4.js"),["./index.f63869e4.js","./Noticia.eaaa5782.js","./Noticia.ad3d5fba.css","./index.d8eb6aa9.css"],import.meta.url).then(e=>e.default||e)},{name:"politicaDePrivacidad",path:"/politicaDePrivacidad",meta:{},alias:[],redirect:void 0,component:()=>Qi(()=>import("./politicaDePrivacidad.9675c144.js"),["./politicaDePrivacidad.9675c144.js","./politicaDePrivacidad.c7420d34.css"],import.meta.url).then(e=>e.default||e)},{name:"test",path:"/test",meta:{},alias:[],redirect:void 0,component:()=>Qi(()=>import("./test.243e89e9.js"),[],import.meta.url).then(e=>e.default||e)}],M$={scrollBehavior(e,t,n){var c;const i=wt(),s=((c=Kr().options)==null?void 0:c.scrollBehaviorType)??"auto";let r=n||void 0;const o=typeof e.meta.scrollToTop=="function"?e.meta.scrollToTop(e,t):e.meta.scrollToTop;if(!r&&t&&e&&o!==!1&&F$(t,e)&&(r={left:0,top:0}),e.path===t.path){if(t.hash&&!e.hash)return{left:0,top:0};if(e.hash)return{el:e.hash,top:Sw(e.hash),behavior:s}}const a=u=>!!(u.meta.pageTransition??Qm),l=a(t)&&a(e)?"page:transition:finish":"page:finish";return new Promise(u=>{i.hooks.hookOnce(l,async()=>{await Ye(),e.hash&&(r={el:e.hash,top:Sw(e.hash),behavior:s}),u(r)})})}};function Sw(e){try{const t=document.querySelector(e);if(t)return parseFloat(getComputedStyle(t).scrollMarginTop)}catch{}return 0}function F$(e,t){const n=t.matched.every((i,s)=>{var r,o,a;return((r=i.components)==null?void 0:r.default)===((a=(o=e.matched[s])==null?void 0:o.components)==null?void 0:a.default)});return!!(!n||n&&JSON.stringify(e.params)!==JSON.stringify(t.params))}const B$={},kn={...B$,...M$},$$=async e=>{var l;let t,n;if(!((l=e.meta)!=null&&l.validate))return;const i=wt(),s=Kr();if(([t,n]=Hu(()=>Promise.resolve(e.meta.validate(e))),t=await t,n(),t)===!0)return;const o=Np({statusCode:404,statusMessage:`Page Not Found: ${e.fullPath}`}),a=s.beforeResolve(c=>{if(a(),c===e){const u=s.afterEach(async()=>{u(),await i.runWithContext(()=>po(o)),window.history.pushState({},"",e.fullPath)});return!1}})},U$=[$$],vl={};function H$(e,t,n){const{pathname:i,search:s,hash:r}=t,o=e.indexOf("#");if(o>-1){const c=r.includes(e.slice(o))?e.slice(o).length:1;let u=r.slice(c);return u[0]!=="/"&&(u="/"+u),$_(u,"")}const a=$_(i,e),l=!n||TN(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":s)+r}const j$=jn({name:"nuxt:router",enforce:"pre",async setup(e){var v,_;let t,n,i=Vv().app.baseURL;kn.hashMode&&!i.includes("#")&&(i+="#");const s=((v=kn.history)==null?void 0:v.call(kn,i))??(kn.hashMode?XB(i):jS(i)),r=((_=kn.routes)==null?void 0:_.call(kn,Iw))??Iw;let o;const a=H$(i,window.location,e.payload.path),l=O$({...kn,scrollBehavior:(p,y,E)=>{var b;if(y===Ai){o=E;return}return l.options.scrollBehavior=kn.scrollBehavior,(b=kn.scrollBehavior)==null?void 0:b.call(kn,p,Ai,o||E)},history:s,routes:r});e.vueApp.use(l);const c=le(l.currentRoute.value);l.afterEach((p,y)=>{c.value=y}),Object.defineProperty(e.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=le(l.resolve(a)),d=()=>{u.value=l.currentRoute.value};e.hook("page:finish",d),l.afterEach((p,y)=>{var E,b,S,A;((b=(E=p.matched[0])==null?void 0:E.components)==null?void 0:b.default)===((A=(S=y.matched[0])==null?void 0:S.components)==null?void 0:A.default)&&d()});const h={};for(const p in u.value)Object.defineProperty(h,p,{get:()=>u.value[p]});e._route=oc(h),e._middleware=e._middleware||{global:[],named:{}};const f=bh();try{[t,n]=Hu(()=>l.isReady()),await t,n()}catch(p){[t,n]=Hu(()=>e.runWithContext(()=>po(p))),await t,n()}const g=oB("_layout");return l.beforeEach(async(p,y)=>{var E;p.meta=kt(p.meta),e.isHydrating&&g.value&&!Rr(p.meta.layout)&&(p.meta.layout=g.value),e._processingMiddleware=!0;{const b=new Set([...U$,...e._middleware.global]);for(const S of p.matched){const A=S.meta.middleware;if(A)if(Array.isArray(A))for(const k of A)b.add(k);else b.add(A)}for(const S of b){const A=typeof S=="string"?e._middleware.named[S]||await((E=vl[S])==null?void 0:E.call(vl).then(C=>C.default||C)):S;if(!A)throw new Error(`Unknown route middleware: '${S}'.`);const k=await e.runWithContext(()=>A(p,y));if(!e.payload.serverRendered&&e.isHydrating&&(k===!1||k instanceof Error)){const C=k||Gm({statusCode:404,statusMessage:`Page Not Found: ${a}`});return await e.runWithContext(()=>po(C)),!1}if(k||k===!1)return k}}}),l.onError(()=>{delete e._processingMiddleware}),l.afterEach(async(p,y,E)=>{delete e._processingMiddleware,!e.isHydrating&&f.value&&await e.runWithContext(lB),p.matched.length===0&&await e.runWithContext(()=>po(Gm({statusCode:404,fatal:!1,statusMessage:`Page not found: ${p.fullPath}`})))}),e.hooks.hookOnce("app:created",async()=>{try{await l.replace({...l.resolve(a),name:void 0,force:!0}),l.options.scrollBehavior=kn.scrollBehavior}catch(p){await e.runWithContext(()=>po(p))}}),{provide:{router:l}}}}),z$=jn({name:"nuxt:payload",setup(e){SB()&&(e.hooks.hook("link:prefetch",async t=>{Hd(t).protocol||await ow(t)}),Kr().beforeResolve(async(t,n)=>{if(t.path===n.path)return;const i=await ow(t.path);i&&Object.assign(e.static.data,i.data)}))}}),W$=jn({name:"nuxt:global-components"}),q$=[],K$=jn({name:"nuxt:head",setup(e){const t=Y2({plugins:q$});e.vueApp.use(t);{let n=!0;const i=async()=>{n=!1,await VS(t)};t.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),e.hooks.hook("page:start",()=>{n=!0}),e.hooks.hook("page:finish",i),e.hooks.hook("app:suspense:resolve",i)}}}),gr={default:()=>Qi(()=>import("./default.1499412f.js"),["./default.1499412f.js","./default.fce7aaed.css"],import.meta.url).then(e=>e.default||e)},G$=jn({name:"nuxt:prefetch",setup(e){const t=Kr();e.hooks.hook("app:mounted",()=>{t.beforeEach(async n=>{var s;const i=(s=n==null?void 0:n.meta)==null?void 0:s.layout;i&&typeof gr[i]=="function"&&await gr[i]()})}),e.hooks.hook("link:prefetch",n=>{var o,a,l,c;if(cc(n))return;const i=t.resolve(n);if(!i)return;const s=(o=i==null?void 0:i.meta)==null?void 0:o.layout;let r=Array.isArray((a=i==null?void 0:i.meta)==null?void 0:a.middleware)?(l=i==null?void 0:i.meta)==null?void 0:l.middleware:[(c=i==null?void 0:i.meta)==null?void 0:c.middleware];r=r.filter(u=>typeof u=="string");for(const u of r)typeof vl[u]=="function"&&vl[u]();s&&typeof gr[s]=="function"&&gr[s]()})}});var Y$="firebase",Q$="10.3.0";/**
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
 */Fn(Y$,Q$,"app");const X$=jn(()=>{const e=xB();return{provide:{firebaseApp:mT(e.firebaseConfig)}}});function Lp(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n}function ZS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const J$=ZS,eA=new ha("auth","Firebase",ZS());/**
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
 */const cd=new dc("@firebase/auth");function Z$(e,...t){cd.logLevel<=Ke.WARN&&cd.warn(`Auth (${Ys}): ${e}`,...t)}function Tu(e,...t){cd.logLevel<=Ke.ERROR&&cd.error(`Auth (${Ys}): ${e}`,...t)}/**
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
 */function as(e,...t){throw Mp(e,...t)}function Li(e,...t){return Mp(e,...t)}function eU(e,t,n){const i=Object.assign(Object.assign({},J$()),{[t]:n});return new ha("auth","Firebase",i).create(t,{appName:e.name})}function Mp(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return eA.create(e,...t)}function Ve(e,t,...n){if(!e)throw Mp(t,...n)}function Ji(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Tu(t),new Error(t)}function ls(e,t){e||Ji(t)}/**
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
 */function tg(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function tU(){return Aw()==="http:"||Aw()==="https:"}function Aw(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function nU(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tU()||mO()||"connection"in navigator)?navigator.onLine:!0}function iU(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Ac{constructor(t,n){this.shortDelay=t,this.longDelay=n,ls(n>t,"Short delay should be less than long delay!"),this.isMobile=Ov()||lT()}get(){return nU()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fp(e,t){ls(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class tA{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ji("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ji("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ji("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sU={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const rU=new Ac(3e4,6e4);function nA(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function kc(e,t,n,i,s={}){return iA(e,s,async()=>{let r={},o={};i&&(t==="GET"?o=i:r={body:JSON.stringify(i)});const a=fa(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),tA.fetch()(sA(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},r))})}async function iA(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},sU),t);try{const s=new aU(e),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw au(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw au(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw au(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw au(e,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw eU(e,u,c);as(e,u)}}catch(s){if(s instanceof zi)throw s;as(e,"network-request-failed",{message:String(s)})}}async function oU(e,t,n,i,s={}){const r=await kc(e,t,n,i,s);return"mfaPendingCredential"in r&&as(e,"multi-factor-auth-required",{_serverResponse:r}),r}function sA(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?Fp(e.config,s):`${e.config.apiScheme}://${s}`}class aU{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Li(this.auth,"network-request-failed")),rU.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function au(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Li(e,t,i);return s.customData._tokenResponse=n,s}/**
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
 */async function lU(e,t){return kc(e,"POST","/v1/accounts:delete",t)}async function cU(e,t){return kc(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function pl(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function uU(e,t=!1){const n=An(e),i=await n.getIdToken(t),s=Bp(i);Ve(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:pl(kf(s.auth_time)),issuedAtTime:pl(kf(s.iat)),expirationTime:pl(kf(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function kf(e){return Number(e)*1e3}function Bp(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return Tu("JWT malformed, contained fewer than 3 sections"),null;try{const s=zu(n);return s?JSON.parse(s):(Tu("Failed to decode base64 JWT payload"),null)}catch(s){return Tu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function dU(e){const t=Bp(e);return Ve(t,"internal-error"),Ve(typeof t.exp<"u","internal-error"),Ve(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Kl(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof zi&&hU(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function hU({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class fU{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rA{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pl(this.lastLoginAt),this.creationTime=pl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ud(e){var t;const n=e.auth,i=await e.getIdToken(),s=await Kl(e,cU(n,{idToken:i}));Ve(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?vU(r.providerUserInfo):[],a=gU(e.providerData,o),l=e.isAnonymous,c=!(e.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new rA(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function mU(e){const t=An(e);await ud(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function gU(e,t){return[...e.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function vU(e){return e.map(t=>{var{providerId:n}=t,i=Lp(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function pU(e,t){const n=await iA(e,{},async()=>{const i=fa({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,o=sA(e,s,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tA.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Gl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Ve(t.idToken,"internal-error"),Ve(typeof t.idToken<"u","internal-error"),Ve(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):dU(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return Ve(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await pU(t,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Gl;return i&&(Ve(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),s&&(Ve(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),r&&(Ve(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Gl,this.toJSON())}_performRefresh(){return Ji("not implemented")}}/**
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
 */function Cs(e,t){Ve(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Tr{constructor(t){var{uid:n,auth:i,stsTokenManager:s}=t,r=Lp(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fU(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new rA(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const n=await Kl(this,this.stsTokenManager.getToken(this.auth,t));return Ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return uU(this,t)}reload(){return mU(this)}_assign(t){this!==t&&(Ve(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Tr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){Ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await ud(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Kl(this,lU(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,s,r,o,a,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:b,isAnonymous:S,providerData:A,stsTokenManager:k}=n;Ve(E&&k,t,"internal-error");const C=Gl.fromJSON(this.name,k);Ve(typeof E=="string",t,"internal-error"),Cs(d,t.name),Cs(h,t.name),Ve(typeof b=="boolean",t,"internal-error"),Ve(typeof S=="boolean",t,"internal-error"),Cs(f,t.name),Cs(g,t.name),Cs(v,t.name),Cs(_,t.name),Cs(p,t.name),Cs(y,t.name);const T=new Tr({uid:E,auth:t,email:h,emailVerified:b,displayName:d,isAnonymous:S,photoURL:g,phoneNumber:f,tenantId:v,stsTokenManager:C,createdAt:p,lastLoginAt:y});return A&&Array.isArray(A)&&(T.providerData=A.map(R=>Object.assign({},R))),_&&(T._redirectEventId=_),T}static async _fromIdTokenResponse(t,n,i=!1){const s=new Gl;s.updateFromServerResponse(n);const r=new Tr({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await ud(r),r}}/**
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
 */const kw=new Map;function Zi(e){ls(e instanceof Function,"Expected a class definition");let t=kw.get(e);return t?(ls(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,kw.set(e,t),t)}/**
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
 */class oA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}oA.type="NONE";const Rw=oA;/**
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
 */function Iu(e,t,n){return`firebase:${e}:${t}:${n}`}class Vo{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Iu(this.userKey,s.apiKey,r),this.fullPersistenceKey=Iu("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Tr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Vo(Zi(Rw),t,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Zi(Rw);const o=Iu(i,t.config.apiKey,t.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Tr._fromJSON(t,u);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Vo(r,t,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Vo(r,t,i))}}/**
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
 */function Pw(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(cA(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(aA(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(dA(t))return"Blackberry";if(hA(t))return"Webos";if($p(t))return"Safari";if((t.includes("chrome/")||lA(t))&&!t.includes("edge/"))return"Chrome";if(uA(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function aA(e=vn()){return/firefox\//i.test(e)}function $p(e=vn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function lA(e=vn()){return/crios\//i.test(e)}function cA(e=vn()){return/iemobile/i.test(e)}function uA(e=vn()){return/android/i.test(e)}function dA(e=vn()){return/blackberry/i.test(e)}function hA(e=vn()){return/webos/i.test(e)}function Ch(e=vn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function yU(e=vn()){var t;return Ch(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function _U(){return gO()&&document.documentMode===10}function fA(e=vn()){return Ch(e)||uA(e)||hA(e)||dA(e)||/windows phone/i.test(e)||cA(e)}function bU(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function mA(e,t=[]){let n;switch(e){case"Browser":n=Pw(vn());break;case"Worker":n=`${Pw(vn())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ys}/${i}`}/**
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
 */class wU{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=r=>new Promise((o,a)=>{try{const l=t(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function EU(e,t={}){return kc(e,"GET","/v2/passwordPolicy",nA(e,t))}/**
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
 */const CU=6;class TU{constructor(t){var n,i,s,r;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:CU,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=t.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<t.length;s++)i=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
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
 */class IU{constructor(t,n,i,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xw(this),this.idTokenSubscription=new xw(this),this.beforeStateQueue=new wU(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Zi(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Vo.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ud(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=iU()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?An(t):null;return n&&Ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Ve(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Zi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await EU(this),n=new TU(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ha("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Zi(t)||this._popupRedirectResolver;Ve(n,this,"argument-error"),this.redirectPersistenceManager=await Vo.create(this,[Zi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ve(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,i,s);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=mA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Z$(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Up(e){return An(e)}class xw{constructor(t){this.auth=t,this.observer=null,this.addObserver=CO(n=>this.observer=n)}get next(){return Ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function SU(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function AU(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=s=>{const r=Li("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",SU().appendChild(i)})}function kU(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function RU(e,t){const n=Wd(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(qu(r,t??{}))return s;as(s,"already-initialized")}return n.initialize({options:t})}function PU(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Zi);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function xU(e,t,n){const i=Up(e);Ve(i._canInitEmulator,i,"emulator-config-failed"),Ve(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=gA(t),{host:o,port:a}=VU(t),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||NU()}function gA(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function VU(e){const t=gA(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Vw(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Vw(o)}}}function Vw(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function NU(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class vA{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ji("not implemented")}_getIdTokenResponse(t){return Ji("not implemented")}_linkToIdToken(t,n){return Ji("not implemented")}_getReauthenticationResolver(t){return Ji("not implemented")}}/**
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
 */async function No(e,t){return oU(e,"POST","/v1/accounts:signInWithIdp",nA(e,t))}/**
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
 */const OU="http://localhost";class Dr extends vA{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Dr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):as("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s}=n,r=Lp(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Dr(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return No(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,No(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,No(t,n)}buildRequest(){const t={requestUri:OU,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=fa(n)}return t}}/**
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
 */class pA{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Rc extends pA{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class As extends Rc{constructor(){super("facebook.com")}static credential(t){return Dr._fromParams({providerId:As.PROVIDER_ID,signInMethod:As.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return As.credentialFromTaggedObject(t)}static credentialFromError(t){return As.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return As.credential(t.oauthAccessToken)}catch{return null}}}As.FACEBOOK_SIGN_IN_METHOD="facebook.com";As.PROVIDER_ID="facebook.com";/**
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
 */class ks extends Rc{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Dr._fromParams({providerId:ks.PROVIDER_ID,signInMethod:ks.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ks.credentialFromTaggedObject(t)}static credentialFromError(t){return ks.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return ks.credential(n,i)}catch{return null}}}ks.GOOGLE_SIGN_IN_METHOD="google.com";ks.PROVIDER_ID="google.com";/**
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
 */class Rs extends Rc{constructor(){super("github.com")}static credential(t){return Dr._fromParams({providerId:Rs.PROVIDER_ID,signInMethod:Rs.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rs.credentialFromTaggedObject(t)}static credentialFromError(t){return Rs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rs.credential(t.oauthAccessToken)}catch{return null}}}Rs.GITHUB_SIGN_IN_METHOD="github.com";Rs.PROVIDER_ID="github.com";/**
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
 */class Ps extends Rc{constructor(){super("twitter.com")}static credential(t,n){return Dr._fromParams({providerId:Ps.PROVIDER_ID,signInMethod:Ps.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ps.credentialFromTaggedObject(t)}static credentialFromError(t){return Ps.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return Ps.credential(n,i)}catch{return null}}}Ps.TWITTER_SIGN_IN_METHOD="twitter.com";Ps.PROVIDER_ID="twitter.com";/**
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
 */class Zo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,s=!1){const r=await Tr._fromIdTokenResponse(t,i,s),o=Nw(i);return new Zo({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const s=Nw(i);return new Zo({user:t,providerId:s,_tokenResponse:i,operationType:n})}}function Nw(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class dd extends zi{constructor(t,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,dd.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,s){return new dd(t,n,i,s)}}function yA(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?dd._fromErrorAndOperation(e,r,t,i):r})}async function DU(e,t,n=!1){const i=await Kl(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Zo._forOperation(e,"link",i)}/**
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
 */async function LU(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await Kl(e,yA(i,s,t,e),n);Ve(r.idToken,i,"internal-error");const o=Bp(r.idToken);Ve(o,i,"internal-error");const{sub:a}=o;return Ve(e.uid===a,i,"user-mismatch"),Zo._forOperation(e,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&as(i,"user-mismatch"),r}}/**
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
 */async function MU(e,t,n=!1){const i="signIn",s=await yA(e,i,t),r=await Zo._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}function Hp(e,t,n,i){return An(e).onIdTokenChanged(t,n,i)}function _A(e,t,n){return An(e).beforeAuthStateChanged(t,n)}const hd="__sak";/**
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
 */class bA{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hd,"1"),this.storage.removeItem(hd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function FU(){const e=vn();return $p(e)||Ch(e)}const BU=1e3,$U=10;class wA extends bA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=FU()&&bU(),this.fallbackToPolling=fA(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&t(n,s,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(i,t.newValue):this.storage.removeItem(i);else if(this.localCache[i]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);_U()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,$U):s()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},BU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}wA.type="LOCAL";const UU=wA;/**
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
 */class EA extends bA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}EA.type="SESSION";const CA=EA;/**
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
 */function HU(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Th{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const i=new Th(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await HU(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Th.receivers=[];/**
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
 */function jp(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class jU{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=jp("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Mi(){return window}function zU(e){Mi().location.href=e}/**
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
 */function TA(){return typeof Mi().WorkerGlobalScope<"u"&&typeof Mi().importScripts=="function"}async function WU(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qU(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function KU(){return TA()?self:null}/**
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
 */const IA="firebaseLocalStorageDb",GU=1,fd="firebaseLocalStorage",SA="fbase_key";class Pc{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ih(e,t){return e.transaction([fd],t?"readwrite":"readonly").objectStore(fd)}function YU(){const e=indexedDB.deleteDatabase(IA);return new Pc(e).toPromise()}function ng(){const e=indexedDB.open(IA,GU);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(fd,{keyPath:SA})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(fd)?t(i):(i.close(),await YU(),t(await ng()))})})}async function Ow(e,t,n){const i=Ih(e,!0).put({[SA]:t,value:n});return new Pc(i).toPromise()}async function QU(e,t){const n=Ih(e,!1).get(t),i=await new Pc(n).toPromise();return i===void 0?null:i.value}function Dw(e,t){const n=Ih(e,!0).delete(t);return new Pc(n).toPromise()}const XU=800,JU=3;class AA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ng(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>JU)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return TA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Th._getInstance(KU()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await WU(),!this.activeServiceWorker)return;this.sender=new jU(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||qU()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ng();return await Ow(t,hd,"1"),await Dw(t,hd),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ow(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>QU(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dw(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const r=Ih(s,!1).getAll();return new Pc(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}AA.type="LOCAL";const ZU=AA;new Ac(3e4,6e4);/**
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
 */function e4(e,t){return t?Zi(t):(Ve(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class zp extends vA{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return No(t,this._buildIdpRequest())}_linkToIdToken(t,n){return No(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return No(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function t4(e){return MU(e.auth,new zp(e),e.bypassAuthState)}function n4(e){const{auth:t,user:n}=e;return Ve(n,t,"internal-error"),LU(n,new zp(e),e.bypassAuthState)}async function i4(e){const{auth:t,user:n}=e;return Ve(n,t,"internal-error"),DU(n,new zp(e),e.bypassAuthState)}/**
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
 */class kA{constructor(t,n,i,s,r=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return t4;case"linkViaPopup":case"linkViaRedirect":return i4;case"reauthViaPopup":case"reauthViaRedirect":return n4;default:as(this.auth,"internal-error")}}resolve(t){ls(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ls(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const s4=new Ac(2e3,1e4);class yo extends kA{constructor(t,n,i,s,r){super(t,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,yo.currentPopupAction&&yo.currentPopupAction.cancel(),yo.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Ve(t,this.auth,"internal-error"),t}async onExecution(){ls(this.filter.length===1,"Popup operations only handle one event");const t=jp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Li(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Li(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yo.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Li(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,s4.get())};t()}}yo.currentPopupAction=null;/**
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
 */const r4="pendingRedirect",Su=new Map;class o4 extends kA{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Su.get(this.auth._key());if(!t){try{const i=await a4(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Su.set(this.auth._key(),t)}return this.bypassAuthState||Su.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a4(e,t){const n=u4(t),i=c4(e);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function l4(e,t){Su.set(e._key(),t)}function c4(e){return Zi(e._redirectPersistence)}function u4(e){return Iu(r4,e.config.apiKey,e.name)}async function d4(e,t,n=!1){const i=Up(e),s=e4(i,t),o=await new o4(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}/**
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
 */const h4=10*60*1e3;class f4{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!m4(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!RA(t)){const s=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Li(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=h4&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lw(t))}saveEventToCache(t){this.cachedEventUids.add(Lw(t)),this.lastProcessedEventTime=Date.now()}}function Lw(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function RA({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function m4(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return RA(e);default:return!1}}/**
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
 */async function g4(e,t={}){return kc(e,"GET","/v1/projects",t)}/**
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
 */const v4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,p4=/^https?/;async function y4(e){if(e.config.emulator)return;const{authorizedDomains:t}=await g4(e);for(const n of t)try{if(_4(n))return}catch{}as(e,"unauthorized-domain")}function _4(e){const t=tg(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!p4.test(n))return!1;if(v4.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const b4=new Ac(3e4,6e4);function Mw(){const e=Mi().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function w4(e){return new Promise((t,n)=>{var i,s,r;function o(){Mw(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mw(),n(Li(e,"network-request-failed"))},timeout:b4.get()})}if(!((s=(i=Mi().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((r=Mi().gapi)===null||r===void 0)&&r.load)o();else{const a=kU("iframefcb");return Mi()[a]=()=>{gapi.load?o():n(Li(e,"network-request-failed"))},AU(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Au=null,t})}let Au=null;function E4(e){return Au=Au||w4(e),Au}/**
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
 */const C4=new Ac(5e3,15e3),T4="__/auth/iframe",I4="emulator/auth/iframe",S4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},A4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function k4(e){const t=e.config;Ve(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Fp(t,I4):`https://${e.config.authDomain}/${T4}`,i={apiKey:t.apiKey,appName:e.name,v:Ys},s=A4.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${fa(i).slice(1)}`}async function R4(e){const t=await E4(e),n=Mi().gapi;return Ve(n,e,"internal-error"),t.open({where:document.body,url:k4(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:S4,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Li(e,"network-request-failed"),a=Mi().setTimeout(()=>{r(o)},C4.get());function l(){Mi().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const P4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},x4=500,V4=600,N4="_blank",O4="http://localhost";class Fw{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function D4(e,t,n,i=x4,s=V4){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},P4),{width:i.toString(),height:s.toString(),top:r,left:o}),c=vn().toLowerCase();n&&(a=lA(c)?N4:n),aA(c)&&(t=t||O4,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,g])=>`${h}${f}=${g},`,"");if(yU(c)&&a!=="_self")return L4(t||"",a),new Fw(null);const d=window.open(t||"",a,u);Ve(d,e,"popup-blocked");try{d.focus()}catch{}return new Fw(d)}function L4(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const M4="__/auth/handler",F4="emulator/auth/handler",B4=encodeURIComponent("fac");async function Bw(e,t,n,i,s,r){Ve(e.config.authDomain,e,"auth-domain-config-required"),Ve(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Ys,eventId:s};if(t instanceof pA){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",fm(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,d]of Object.entries(r||{}))o[u]=d}if(t instanceof Rc){const u=t.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await e._getAppCheckToken(),c=l?`#${B4}=${encodeURIComponent(l)}`:"";return`${$4(e)}?${fa(a).slice(1)}${c}`}function $4({config:e}){return e.emulator?Fp(e,F4):`https://${e.authDomain}/${M4}`}/**
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
 */const Rf="webStorageSupport";class U4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=CA,this._completeRedirectFn=d4,this._overrideRedirectResult=l4}async _openPopup(t,n,i,s){var r;ls((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Bw(t,n,i,tg(),s);return D4(t,o,jp())}async _openRedirect(t,n,i,s){await this._originValidation(t);const r=await Bw(t,n,i,tg(),s);return zU(r),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(ls(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await R4(t),i=new f4(t);return n.register("authEvent",s=>(Ve(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Rf,{type:Rf},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Rf];o!==void 0&&n(!!o),as(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=y4(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return fA()||$p()||Ch()}}const H4=U4;var $w="@firebase/auth",Uw="1.3.0";/**
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
 */class j4{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function z4(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function W4(e){$i(new _i("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;Ve(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mA(e)},c=new IU(i,s,r,l);return PU(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),$i(new _i("auth-internal",t=>{const n=Up(t.getProvider("auth").getImmediate());return(i=>new j4(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fn($w,Uw,z4(e)),Fn($w,Uw,"esm2017")}/**
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
 */const q4=5*60,K4=oT("authIdTokenMaxAge")||q4;let Hw=null;const G4=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>K4)return;const s=n==null?void 0:n.token;Hw!==s&&(Hw=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function PA(e=qd()){const t=Wd(e,"auth");if(t.isInitialized())return t.getImmediate();const n=RU(e,{popupRedirectResolver:H4,persistence:[ZU,UU,CA]}),i=oT("authTokenSyncURL");if(i){const r=G4(i);_A(n,r,()=>r(n.currentUser)),Hp(n,o=>r(o))}const s=iT("auth");return s&&xU(n,`http://${s}`),n}W4("Browser");/**
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
 */const Y4=new Map,Q4={activated:!1,tokenObservers:[]};function Ci(e){return Y4.get(e)||Object.assign({},Q4)}const jw={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class X4{constructor(t,n,i,s,r){if(this.operation=t,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new Pl,await J4(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new Pl,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function J4(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */const Z4={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},md=new ha("appCheck","AppCheck",Z4);function xA(e){if(!Ci(e).activated)throw md.create("use-before-activation",{appName:e.name})}/**
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
 */const eH="firebase-app-check-database",tH=1,ig="firebase-app-check-store";let lu=null;function nH(){return lu||(lu=new Promise((e,t)=>{try{const n=indexedDB.open(eH,tH);n.onsuccess=i=>{e(i.target.result)},n.onerror=i=>{var s;t(md.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(ig,{keyPath:"compositeKey"})}}}catch(n){t(md.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),lu)}function iH(e,t){return sH(rH(e),t)}async function sH(e,t){const i=(await nH()).transaction(ig,"readwrite"),r=i.objectStore(ig).put({compositeKey:e,value:t});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(md.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function rH(e){return`${e.options.appId}-${e.name}`}/**
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
 */const sg=new dc("@firebase/app-check");function zw(e,t){return uT()?iH(e,t).catch(n=>{sg.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const oH={error:"UNKNOWN_ERROR"};function aH(e){return jd.encodeString(JSON.stringify(e),!1)}async function rg(e,t=!1){const n=e.app;xA(n);const i=Ci(n);let s=i.token,r;if(s&&!el(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(el(l)?s=l:await zw(n,void 0))}if(!t&&s&&el(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await Ci(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?sg.warn(l.message):sg.error(l),r=l}let a;return s?r?el(s)?a={token:s.token,internalError:r}:a=qw(r):(a={token:s.token},i.token=s,await zw(n,s)):a=qw(r),o&&dH(n,a),a}async function lH(e){const t=e.app;xA(t);const{provider:n}=Ci(t);{const{token:i}=await n.getToken();return{token:i}}}function cH(e,t,n,i){const{app:s}=e,r=Ci(s),o={next:n,error:i,type:t};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&el(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Ww(e)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Ww(e))}function VA(e,t){const n=Ci(e),i=n.tokenObservers.filter(s=>s.next!==t);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Ww(e){const{app:t}=e,n=Ci(t);let i=n.tokenRefresher;i||(i=uH(e),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function uH(e){const{app:t}=e;return new X4(async()=>{const n=Ci(t);let i;if(n.token?i=await rg(e,!0):i=await rg(e),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Ci(t);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},jw.RETRIAL_MIN_WAIT,jw.RETRIAL_MAX_WAIT)}function dH(e,t){const n=Ci(e).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&t.error!=null?i.error(t.error):i.next(t)}catch{}}function el(e){return e.expireTimeMillis-Date.now()>0}function qw(e){return{token:aH(oH),error:e}}/**
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
 */class hH{constructor(t,n){this.app=t,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:t}=Ci(this.app);for(const n of t)VA(this.app,n.next);return Promise.resolve()}}function fH(e,t){return new hH(e,t)}function mH(e){return{getToken:t=>rg(e,t),getLimitedUseToken:()=>lH(e),addTokenListener:t=>cH(e,"INTERNAL",t),removeTokenListener:t=>VA(e.app,t)}}const gH="@firebase/app-check",vH="0.8.0",pH="app-check",Kw="app-check-internal";function yH(){$i(new _i(pH,e=>{const t=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat");return fH(t,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider(Kw).initialize()})),$i(new _i(Kw,e=>{const t=e.getProvider("app-check").getImmediate();return mH(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),Fn(gH,vH)}yH();const NA=Symbol("firebaseApp");function Wp(e){return Gs()&&De(NA,null)||qd(e)}const cu=new WeakMap;function _H(e,t){if(!cu.has(e)){const n=Nd(!0);cu.set(e,n);const{unmount:i}=t;t.unmount=()=>{i.call(t),n.stop(),cu.delete(e)}}return cu.get(e)}const bH=new WeakMap,uu=new WeakMap;function wH(e){const t=Wp(e);if(!uu.has(t)){let n;const s=[new Promise(r=>{n=r}),r=>{uu.set(t,r),n(r.value)}];uu.set(t,s)}return uu.get(t)}function EH(e,t){const n=PA(t);Hp(n,i=>{const s=wH();e.value=i,Array.isArray(s)&&s[1](e)})}const Gw="@firebase/database",Yw="1.0.1";/**
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
 */let OA="";function CH(e){OA=e}/**
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
 */class TH{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Xt(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:xl(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */class IH{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return gs(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
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
 */const DA=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new TH(t)}}catch{}return new IH},vr=DA("localStorage"),og=DA("sessionStorage");/**
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
 */const Oo=new dc("@firebase/database"),SH=function(){let e=1;return function(){return e++}}(),LA=function(e){const t=AO(e),n=new EO;n.update(t);const i=n.digest();return jd.encodeByteArray(i)},xc=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=xc.apply(null,i):typeof i=="object"?t+=Xt(i):t+=i,t+=" "}return t};let Ir=null,Qw=!0;const AH=function(e,t){me(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(Oo.logLevel=Ke.VERBOSE,Ir=Oo.log.bind(Oo),t&&og.set("logging_enabled",!0)):typeof e=="function"?Ir=e:(Ir=null,og.remove("logging_enabled"))},an=function(...e){if(Qw===!0&&(Qw=!1,Ir===null&&og.get("logging_enabled")===!0&&AH(!0)),Ir){const t=xc.apply(null,e);Ir(t)}},Vc=function(e){return function(...t){an(e,...t)}},ag=function(...e){const t="FIREBASE INTERNAL ERROR: "+xc(...e);Oo.error(t)},Lr=function(...e){const t=`FIREBASE FATAL ERROR: ${xc(...e)}`;throw Oo.error(t),new Error(t)},$n=function(...e){const t="FIREBASE WARNING: "+xc(...e);Oo.warn(t)},kH=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&$n("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},MA=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},RH=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ea="[MIN_NAME]",Mr="[MAX_NAME]",_a=function(e,t){if(e===t)return 0;if(e===ea||t===Mr)return-1;if(t===ea||e===Mr)return 1;{const n=Xw(e),i=Xw(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},PH=function(e,t){return e===t?0:e<t?-1:1},Ba=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Xt(t))},qp=function(e){if(typeof e!="object"||e===null)return Xt(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=Xt(t[i]),n+=":",n+=qp(e[t[i]]);return n+="}",n},FA=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function ni(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const BA=function(e){me(!MA(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let s,r,o,a,l;e===0?(r=0,o=0,s=1/e===-1/0?1:0):(s=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),i),r=a+i,o=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(e/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},xH=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},VH=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},NH=new RegExp("^-?(0*)\\d{1,10}$"),OH=-2147483648,DH=2147483647,Xw=function(e){if(NH.test(e)){const t=Number(e);if(t>=OH&&t<=DH)return t}return null},Nc=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw $n("Exception was thrown by user callback.",n),t},Math.floor(0))}},LH=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yl=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class MH{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(t))}notifyForInvalidToken(){$n(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class FH{constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(an("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$n(t)}}class lg{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}lg.OWNER="owner";/**
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
 */const Kp="5",$A="v",UA="s",HA="r",jA="f",zA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,WA="ls",qA="p",cg="ac",KA="websocket",GA="long_polling";/**
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
 */class BH{constructor(t,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=vr.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&vr.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function $H(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function YA(e,t,n){me(typeof t=="string","typeof type must == string"),me(typeof n=="object","typeof params must == object");let i;if(t===KA)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===GA)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);$H(e)&&(n.ns=e.namespace);const s=[];return ni(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class UH{constructor(){this.counters_={}}incrementCounter(t,n=1){gs(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return lO(this.counters_)}}/**
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
 */const Pf={},xf={};function Gp(e){const t=e.toString();return Pf[t]||(Pf[t]=new UH),Pf[t]}function HH(e,t){const n=e.toString();return xf[n]||(xf[n]=t()),xf[n]}/**
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
 */class jH{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Nc(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Jw="start",zH="close",WH="pLPCommand",qH="pRTLPCB",QA="id",XA="pw",JA="ser",KH="cb",GH="seg",YH="ts",QH="d",XH="dframe",ZA=1870,ek=30,JH=ZA-ek,ZH=25e3,ej=3e4;class _o{constructor(t,n,i,s,r,o,a){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vc(t),this.stats_=Gp(n),this.urlFn=l=>(this.appCheckToken&&(l[cg]=this.appCheckToken),YA(n,GA,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new jH(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ej)),RH(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Yp((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Jw)this.id=a,this.password=l;else if(o===zH)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Jw]="t",i[JA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[KH]=this.scriptTagHolder.uniqueCallbackIdentifier),i[$A]=Kp,this.transportSessionId&&(i[UA]=this.transportSessionId),this.lastSessionId&&(i[WA]=this.lastSessionId),this.applicationId&&(i[qA]=this.applicationId),this.appCheckToken&&(i[cg]=this.appCheckToken),typeof location<"u"&&location.hostname&&zA.test(location.hostname)&&(i[HA]=jA);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_o.forceAllow_=!0}static forceDisallow(){_o.forceDisallow_=!0}static isAvailable(){return _o.forceAllow_?!0:!_o.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!xH()&&!VH()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=Xt(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=tT(n),s=FA(i,JH);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[XH]="t",i[QA]=t,i[XA]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=Xt(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Yp{constructor(t,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=SH(),window[WH+this.uniqueCallbackIdentifier]=t,window[qH+this.uniqueCallbackIdentifier]=n,this.myIFrame=Yp.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){an("frame writing exception"),a.stack&&an(a.stack),an(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||an("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[QA]=this.myID,t[XA]=this.myPW,t[JA]=this.currentSerial;let n=this.urlFn(t),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ek+i.length<=ZA;){const o=this.pendingSegs.shift();i=i+"&"+GH+s+"="+o.seg+"&"+YH+s+"="+o.ts+"&"+QH+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(ZH)),r=()=>{clearTimeout(s),i()};this.addTag(t,r)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{an("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const tj=16384,nj=45e3;let gd=null;typeof MozWebSocket<"u"?gd=MozWebSocket:typeof WebSocket<"u"&&(gd=WebSocket);class fi{constructor(t,n,i,s,r,o,a){this.connId=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vc(this.connId),this.stats_=Gp(n),this.connURL=fi.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,s,r){const o={};return o[$A]=Kp,typeof location<"u"&&location.hostname&&zA.test(location.hostname)&&(o[HA]=jA),n&&(o[UA]=n),i&&(o[WA]=i),s&&(o[cg]=s),r&&(o[qA]=r),YA(t,KA,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,vr.set("previous_websocket_failure",!0);try{let i;cT(),this.mySock=new gd(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){fi.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&gd!==null&&!fi.forceDisallow_}static previouslyFailed(){return vr.isInMemoryStorage||vr.get("previous_websocket_failure")===!0}markConnectionHealthy(){vr.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=xl(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(me(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=Xt(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=FA(n,tj);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(nj))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}fi.responsesRequiredToBeHealthy=2;fi.healthyTimeout=3e4;/**
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
 */class Yl{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[_o,fi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=fi&&fi.isAvailable();let i=n&&!fi.previouslyFailed();if(t.webSocketOnly&&(n||$n("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[fi];else{const s=this.transports_=[];for(const r of Yl.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Yl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yl.globalTransportInitialized_=!1;/**
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
 */const ij=6e4,sj=5e3,rj=10*1024,oj=100*1024,Vf="t",Zw="d",aj="s",e0="r",lj="e",t0="o",n0="a",i0="n",s0="p",cj="h";class uj{constructor(t,n,i,s,r,o,a,l,c,u){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vc("c:"+this.id+":"),this.transportManager_=new Yl(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=t.healthyTimeout||0;s>0&&(this.healthyTimeout_=yl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>oj?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rj?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Vf in t){const n=t[Vf];n===n0?this.upgradeIfSecondaryHealthy_():n===e0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===t0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=Ba("t",t),i=Ba("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:s0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:n0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:i0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=Ba("t",t),i=Ba("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=Ba(Vf,t);if(Zw in t){const i=t[Zw];if(n===cj){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===i0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===aj?this.onConnectionShutdown_(i):n===e0?this.onReset_(i):n===lj?ag("Server Error: "+i):n===t0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ag("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,s=t.h;this.sessionId=t.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Kp!==i&&$n("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),yl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ij))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sj))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:s0,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(vr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class tk{put(t,n,i,s){}merge(t,n,i,s){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
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
 */class nk{constructor(t){this.allowedEvents_=t,this.listeners_={},me(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const s=this.getInitialEvent(t);s&&n.apply(i,s)}off(t,n,i){this.validateEventType_(t);const s=this.listeners_[t]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(t){me(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
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
 */class vd extends nk{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ov()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new vd}getInitialEvent(t){return me(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const r0=32,o0=768;class gt{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function st(){return new gt("")}function ze(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Ws(e){return e.pieces_.length-e.pieceNum_}function ht(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new gt(e.pieces_,t)}function ik(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function dj(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function sk(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function rk(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new gt(t,0)}function $t(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof gt)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new gt(n,0)}function Ue(e){return e.pieceNum_>=e.pieces_.length}function Qn(e,t){const n=ze(e),i=ze(t);if(n===null)return t;if(n===i)return Qn(ht(e),ht(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ok(e,t){if(Ws(e)!==Ws(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function mi(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Ws(e)>Ws(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class hj{constructor(t,n){this.errorPrefix_=n,this.parts_=sk(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=zd(this.parts_[i]);ak(this)}}function fj(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=zd(t),ak(e)}function mj(e){const t=e.parts_.pop();e.byteLength_-=zd(t),e.parts_.length>0&&(e.byteLength_-=1)}function ak(e){if(e.byteLength_>o0)throw new Error(e.errorPrefix_+"has a key path longer than "+o0+" bytes ("+e.byteLength_+").");if(e.parts_.length>r0)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+r0+") or object contains a cycle "+lr(e))}function lr(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class Qp extends nk{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Qp}getInitialEvent(t){return me(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const $a=1e3,gj=60*5*1e3,a0=30*1e3,vj=1.3,pj=3e4,yj="server_kill",l0=3;class ns extends tk{constructor(t,n,i,s,r,o,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ns.nextPersistentConnectionId_++,this.log_=Vc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$a,this.maxReconnectDelay_=gj,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!cT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qp.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&vd.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const s=++this.requestNumber_,r={r:s,a:t,b:n};this.log_(Xt(r)),me(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(t){this.initConnection_();const n=new Pl,s={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(t,n,i,s){this.initConnection_();const r=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),me(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),me(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:t,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";t.tag&&(r.q=n._queryObject,r.t=t.tag),r.h=t.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ns.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===t&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),t.onComplete&&t.onComplete(c,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&gs(t,"w")){const i=Ho(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();$n(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||wO(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=a0)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=bO(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===t&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),s=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),me(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,t._queryObject,n)}sendUnlisten_(t,n,i,s){this.log_("Unlisten on "+t+" for "+n);const r={p:t},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+t,r),this.sendRequest(t,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(t,n,i,s){this.putInternal("p",t,n,i,s)}merge(t,n,i,s){this.putInternal("m",t,n,i,s)}putInternal(t,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:t,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,s=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Xt(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):ag("Unrecognized action received from server: "+Xt(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){me(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$a,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=$a,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>pj&&(this.reconnectDelay_=$a),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*vj)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ns.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){me(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?an("getToken() completed but was canceled"):(an("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new uj(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,f=>{$n(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(yj)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&$n(d),l())}}}interrupt(t){an("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){an("Resuming connection for reason: "+t),delete this.interruptReasons_[t],fm(this.interruptReasons_)&&(this.reconnectDelay_=$a,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(r=>qp(r)).join("$"):i="default";const s=this.removeListen_(t,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(t,n){const i=new gt(t).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(t,n){an("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=l0&&(this.reconnectDelay_=a0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){an("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=l0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+OA.replace(/\./g,"-")]=1,Ov()?t["framework.cordova"]=1:lT()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=vd.getInstance().currentlyOnline();return fm(this.interruptReasons_)&&t}}ns.nextPersistentConnectionId_=0;ns.nextConnectionId_=0;/**
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
 */class We{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new We(t,n)}}/**
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
 */class Sh{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const i=new We(ea,t),s=new We(ea,n);return this.compare(i,s)!==0}minPost(){return We.MIN}}/**
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
 */let du;class lk extends Sh{static get __EMPTY_NODE(){return du}static set __EMPTY_NODE(t){du=t}compare(t,n){return _a(t.name,n.name)}isDefinedOn(t){throw da("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return We.MIN}maxPost(){return new We(Mr,du)}makePost(t,n){return me(typeof t=="string","KeyIndex indexValue must always be a string."),new We(t,du)}toString(){return".key"}}const Do=new lk;/**
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
 */class hu{constructor(t,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?i(t.key,n):1,s&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Bt{constructor(t,n,i,s,r){this.key=t,this.value=n,this.color=i??Bt.RED,this.left=s??Pn.EMPTY_NODE,this.right=r??Pn.EMPTY_NODE}copy(t,n,i,s,r){return new Bt(t??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let s=this;const r=i(t,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(t,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(t,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Pn.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,s;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return Pn.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Bt.RED=!0;Bt.BLACK=!1;class _j{copy(t,n,i,s,r){return this}insert(t,n,i){return new Bt(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Pn{constructor(t,n=Pn.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Pn(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Bt.BLACK,null,null))}remove(t){return new Pn(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Bt.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new hu(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new hu(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new hu(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new hu(this.root_,null,this.comparator_,!0,t)}}Pn.EMPTY_NODE=new _j;/**
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
 */function bj(e,t){return _a(e.name,t.name)}function Xp(e,t){return _a(e,t)}/**
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
 */let ug;function wj(e){ug=e}const ck=function(e){return typeof e=="number"?"number:"+BA(e):"string:"+e},uk=function(e){if(e.isLeafNode()){const t=e.val();me(typeof t=="string"||typeof t=="number"||typeof t=="object"&&gs(t,".sv"),"Priority must be a string or number.")}else me(e===ug||e.isEmpty(),"priority of unexpected type.");me(e===ug||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let c0;class Mt{constructor(t,n=Mt.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,me(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),uk(this.priorityNode_)}static set __childrenNodeConstructor(t){c0=t}static get __childrenNodeConstructor(){return c0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Mt(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Mt.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Ue(t)?this:ze(t)===".priority"?this.priorityNode_:Mt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Mt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=ze(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(me(i!==".priority"||Ws(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Mt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ht(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+ck(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=BA(this.value_):t+=this.value_,this.lazyHash_=LA(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Mt.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Mt.__childrenNodeConstructor?-1:(me(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,s=Mt.VALUE_TYPE_ORDER.indexOf(n),r=Mt.VALUE_TYPE_ORDER.indexOf(i);return me(s>=0,"Unknown leaf type: "+n),me(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Mt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let dk,hk;function Ej(e){dk=e}function Cj(e){hk=e}class Tj extends Sh{compare(t,n){const i=t.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?_a(t.name,n.name):r}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return We.MIN}maxPost(){return new We(Mr,new Mt("[PRIORITY-POST]",hk))}makePost(t,n){const i=dk(t);return new We(n,new Mt("[PRIORITY-POST]",i))}toString(){return".priority"}}const dn=new Tj;/**
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
 */const Ij=Math.log(2);class Sj{constructor(t){const n=r=>parseInt(Math.log(r)/Ij,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const s=i(this.count);this.bits_=t+1&s}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const pd=function(e,t,n,i){e.sort(t);const s=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=e[l],h=n?n(d):d,new Bt(h,d.node,Bt.BLACK,null,null);{const f=parseInt(u/2,10)+l,g=s(l,f),v=s(f+1,c);return d=e[f],h=n?n(d):d,new Bt(h,d.node,Bt.BLACK,g,v)}},r=function(l){let c=null,u=null,d=e.length;const h=function(g,v){const _=d-g,p=d;d-=g;const y=s(_+1,p),E=e[_],b=n?n(E):E;f(new Bt(b,E.node,v,null,y))},f=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const v=l.nextBitIsOne(),_=Math.pow(2,l.count-(g+1));v?h(_,Bt.BLACK):(h(_,Bt.BLACK),h(_,Bt.RED))}return u},o=new Sj(e.length),a=r(o);return new Pn(i||t,a)};/**
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
 */let Nf;const oo={};class es{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return me(oo&&dn,"ChildrenNode.ts has not been loaded"),Nf=Nf||new es({".priority":oo},{".priority":dn}),Nf}get(t){const n=Ho(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Pn?n:null}hasIndex(t){return gs(this.indexSet_,t.toString())}addIndex(t,n){me(t!==Do,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(We.Wrap);let o=r.getNext();for(;o;)s=s||t.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=pd(i,t.getCompare()):a=oo;const l=t.toString(),c=Object.assign({},this.indexSet_);c[l]=t;const u=Object.assign({},this.indexes_);return u[l]=a,new es(u,c)}addToIndexes(t,n){const i=Wu(this.indexes_,(s,r)=>{const o=Ho(this.indexSet_,r);if(me(o,"Missing index implementation for "+r),s===oo)if(o.isDefinedOn(t.node)){const a=[],l=n.getIterator(We.Wrap);let c=l.getNext();for(;c;)c.name!==t.name&&a.push(c),c=l.getNext();return a.push(t),pd(a,o.getCompare())}else return oo;else{const a=n.get(t.name);let l=s;return a&&(l=l.remove(new We(t.name,a))),l.insert(t,t.node)}});return new es(i,this.indexSet_)}removeFromIndexes(t,n){const i=Wu(this.indexes_,s=>{if(s===oo)return s;{const r=n.get(t.name);return r?s.remove(new We(t.name,r)):s}});return new es(i,this.indexSet_)}}/**
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
 */let Ua;class Ze{constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&uk(this.priorityNode_),this.children_.isEmpty()&&me(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ua||(Ua=new Ze(new Pn(Xp),null,es.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ua}updatePriority(t){return this.children_.isEmpty()?this:new Ze(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?Ua:n}}getChild(t){const n=ze(t);return n===null?this:this.getImmediateChild(n).getChild(ht(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(me(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new We(t,n);let s,r;n.isEmpty()?(s=this.children_.remove(t),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(t,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Ua:this.priorityNode_;return new Ze(s,o,r)}}updateChild(t,n){const i=ze(t);if(i===null)return n;{me(ze(t)!==".priority"||Ws(t)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(ht(t),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(dn,(o,a)=>{n[o]=a.val(t),i++,r&&Ze.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!t&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+ck(this.getPriority().val())+":"),this.forEachChild(dn,(n,i)=>{const s=i.hash();s!==""&&(t+=":"+n+":"+s)}),this.lazyHash_=t===""?"":LA(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new We(t,n));return r?r.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new We(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new We(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,s=>s);{const s=this.children_.getIteratorFrom(t.name,We.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,t)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,s=>s);{const s=this.children_.getReverseIteratorFrom(t.name,We.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,t)>0;)s.getNext(),r=s.peek();return s}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Oc?-1:0}withIndex(t){if(t===Do||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new Ze(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Do||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(dn),s=n.getIterator(dn);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===Do?null:this.indexMap_.get(t.toString())}}Ze.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Aj extends Ze{constructor(){super(new Pn(Xp),Ze.EMPTY_NODE,es.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Ze.EMPTY_NODE}isEmpty(){return!1}}const Oc=new Aj;Object.defineProperties(We,{MIN:{value:new We(ea,Ze.EMPTY_NODE)},MAX:{value:new We(Mr,Oc)}});lk.__EMPTY_NODE=Ze.EMPTY_NODE;Mt.__childrenNodeConstructor=Ze;wj(Oc);Cj(Oc);/**
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
 */const kj=!0;function ln(e,t=null){if(e===null)return Ze.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),me(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Mt(n,ln(t))}if(!(e instanceof Array)&&kj){const n=[];let i=!1;if(ni(e,(o,a)=>{if(o.substring(0,1)!=="."){const l=ln(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new We(o,l)))}}),n.length===0)return Ze.EMPTY_NODE;const r=pd(n,bj,o=>o.name,Xp);if(i){const o=pd(n,dn.getCompare());return new Ze(r,ln(t),new es({".priority":o},{".priority":dn}))}else return new Ze(r,ln(t),es.Default)}else{let n=Ze.EMPTY_NODE;return ni(e,(i,s)=>{if(gs(e,i)&&i.substring(0,1)!=="."){const r=ln(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(ln(t))}}Ej(ln);/**
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
 */class Rj extends Sh{constructor(t){super(),this.indexPath_=t,me(!Ue(t)&&ze(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?_a(t.name,n.name):r}makePost(t,n){const i=ln(t),s=Ze.EMPTY_NODE.updateChild(this.indexPath_,i);return new We(n,s)}maxPost(){const t=Ze.EMPTY_NODE.updateChild(this.indexPath_,Oc);return new We(Mr,t)}toString(){return sk(this.indexPath_,0).join("/")}}/**
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
 */class Pj extends Sh{compare(t,n){const i=t.node.compareTo(n.node);return i===0?_a(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return We.MIN}maxPost(){return We.MAX}makePost(t,n){const i=ln(t);return new We(n,i)}toString(){return".value"}}const xj=new Pj;/**
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
 */function Vj(e){return{type:"value",snapshotNode:e}}function Nj(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Oj(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function u0(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Dj(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
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
 */class Jp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=dn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return me(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return me(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ea}hasEnd(){return this.endSet_}getIndexEndValue(){return me(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return me(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Mr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return me(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===dn}copy(){const t=new Jp;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function d0(e){const t={};if(e.isDefault())return t;let n;if(e.index_===dn?n="$priority":e.index_===xj?n="$value":e.index_===Do?n="$key":(me(e.index_ instanceof Rj,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Xt(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=Xt(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+Xt(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=Xt(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+Xt(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function h0(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==dn&&(t.i=e.index_.toString()),t}/**
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
 */class yd extends tk{constructor(t,n,i,s){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Vc("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(me(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,i,s){const r=t._path.toString();this.log_("Listen called for "+r+" "+t._queryIdentifier);const o=yd.getListenId_(t,i),a={};this.listens_[o]=a;const l=d0(t._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),Ho(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(t,n){const i=yd.getListenId_(t,n);delete this.listens_[i]}get(t){const n=d0(t._queryParams),i=t._path.toString(),s=new Pl;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+fa(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=xl(a.responseText)}catch{$n("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&$n("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Lj{constructor(){this.rootNode_=Ze.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
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
 */function _d(){return{value:null,children:new Map}}function fk(e,t,n){if(Ue(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=ze(t);e.children.has(i)||e.children.set(i,_d());const s=e.children.get(i);t=ht(t),fk(s,t,n)}}function dg(e,t,n){e.value!==null?n(t,e.value):Mj(e,(i,s)=>{const r=new gt(t.toString()+"/"+i);dg(s,r,n)})}function Mj(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
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
 */class Fj{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&ni(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=t,n}}/**
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
 */const f0=10*1e3,Bj=30*1e3,$j=5*60*1e3;class Uj{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Fj(t);const i=f0+(Bj-f0)*Math.random();yl(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;ni(t,(s,r)=>{r>0&&gs(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),yl(this.reportStats_.bind(this),Math.floor(Math.random()*2*$j))}}/**
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
 */var Di;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Di||(Di={}));function mk(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gk(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vk(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
 */class bd{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=Di.ACK_USER_WRITE,this.source=mk()}operationForChild(t){if(Ue(this.path)){if(this.affectedTree.value!=null)return me(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new gt(t));return new bd(st(),n,this.revert)}}else return me(ze(this.path)===t,"operationForChild called for unrelated child."),new bd(ht(this.path),this.affectedTree,this.revert)}}/**
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
 */class Fr{constructor(t,n,i){this.source=t,this.path=n,this.snap=i,this.type=Di.OVERWRITE}operationForChild(t){return Ue(this.path)?new Fr(this.source,st(),this.snap.getImmediateChild(t)):new Fr(this.source,ht(this.path),this.snap)}}/**
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
 */class Ql{constructor(t,n,i){this.source=t,this.path=n,this.children=i,this.type=Di.MERGE}operationForChild(t){if(Ue(this.path)){const n=this.children.subtree(new gt(t));return n.isEmpty()?null:n.value?new Fr(this.source,st(),n.value):new Ql(this.source,st(),n)}else return me(ze(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Ql(this.source,ht(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Zp{constructor(t,n,i){this.node_=t,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(Ue(t))return this.isFullyInitialized()&&!this.filtered_;const n=ze(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}function Hj(e,t,n,i){const s=[],r=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Dj(o.childName,o.snapshotNode))}),Ha(e,s,"child_removed",t,i,n),Ha(e,s,"child_added",t,i,n),Ha(e,s,"child_moved",r,i,n),Ha(e,s,"child_changed",t,i,n),Ha(e,s,"value",t,i,n),s}function Ha(e,t,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>zj(e,a,l)),o.forEach(a=>{const l=jj(e,a,r);s.forEach(c=>{c.respondsTo(a.type)&&t.push(c.createEvent(l,e.query_))})})}function jj(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function zj(e,t,n){if(t.childName==null||n.childName==null)throw da("Should only compare child_ events.");const i=new We(t.childName,t.snapshotNode),s=new We(n.childName,n.snapshotNode);return e.index_.compare(i,s)}/**
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
 */function pk(e,t){return{eventCache:e,serverCache:t}}function _l(e,t,n,i){return pk(new Zp(t,n,i),e.serverCache)}function yk(e,t,n,i){return pk(e.eventCache,new Zp(t,n,i))}function hg(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Br(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */let Of;const Wj=()=>(Of||(Of=new Pn(PH)),Of);class ut{constructor(t,n=Wj()){this.value=t,this.children=n}static fromObject(t){let n=new ut(null);return ni(t,(i,s)=>{n=n.set(new gt(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:st(),value:this.value};if(Ue(t))return null;{const i=ze(t),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(ht(t),n);return r!=null?{path:$t(new gt(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(Ue(t))return this;{const n=ze(t),i=this.children.get(n);return i!==null?i.subtree(ht(t)):new ut(null)}}set(t,n){if(Ue(t))return new ut(n,this.children);{const i=ze(t),r=(this.children.get(i)||new ut(null)).set(ht(t),n),o=this.children.insert(i,r);return new ut(this.value,o)}}remove(t){if(Ue(t))return this.children.isEmpty()?new ut(null):new ut(null,this.children);{const n=ze(t),i=this.children.get(n);if(i){const s=i.remove(ht(t));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new ut(null):new ut(this.value,r)}else return this}}get(t){if(Ue(t))return this.value;{const n=ze(t),i=this.children.get(n);return i?i.get(ht(t)):null}}setTree(t,n){if(Ue(t))return n;{const i=ze(t),r=(this.children.get(i)||new ut(null)).setTree(ht(t),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new ut(this.value,o)}}fold(t){return this.fold_(st(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_($t(t,s),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,st(),n)}findOnPath_(t,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(Ue(t))return null;{const r=ze(t),o=this.children.get(r);return o?o.findOnPath_(ht(t),$t(n,r),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,st(),n)}foreachOnPath_(t,n,i){if(Ue(t))return this;{this.value&&i(n,this.value);const s=ze(t),r=this.children.get(s);return r?r.foreachOnPath_(ht(t),$t(n,s),i):new ut(null)}}foreach(t){this.foreach_(st(),t)}foreach_(t,n){this.children.inorderTraversal((i,s)=>{s.foreach_($t(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
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
 */class yi{constructor(t){this.writeTree_=t}static empty(){return new yi(new ut(null))}}function bl(e,t,n){if(Ue(t))return new yi(new ut(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const s=i.path;let r=i.value;const o=Qn(s,t);return r=r.updateChild(o,n),new yi(e.writeTree_.set(s,r))}else{const s=new ut(n),r=e.writeTree_.setTree(t,s);return new yi(r)}}}function m0(e,t,n){let i=e;return ni(n,(s,r)=>{i=bl(i,$t(t,s),r)}),i}function g0(e,t){if(Ue(t))return yi.empty();{const n=e.writeTree_.setTree(t,new ut(null));return new yi(n)}}function fg(e,t){return Gr(e,t)!=null}function Gr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(Qn(n.path,t)):null}function v0(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(dn,(i,s)=>{t.push(new We(i,s))}):e.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&t.push(new We(i,s.value))}),t}function $s(e,t){if(Ue(t))return e;{const n=Gr(e,t);return n!=null?new yi(new ut(n)):new yi(e.writeTree_.subtree(t))}}function mg(e){return e.writeTree_.isEmpty()}function ta(e,t){return _k(st(),e.writeTree_,t)}function _k(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((s,r)=>{s===".priority"?(me(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=_k($t(e,s),r,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild($t(e,".priority"),i)),n}}/**
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
 */function bk(e,t){return Ik(t,e)}function qj(e,t,n,i,s){me(i>e.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=bl(e.visibleWrites,t,n)),e.lastWriteId=i}function Kj(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Gj(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);me(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;for(;s&&o>=0;){const a=e.allWrites[o];a.visible&&(o>=n&&Yj(a,i.path)?s=!1:mi(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Qj(e),!0;if(i.snap)e.visibleWrites=g0(e.visibleWrites,i.path);else{const a=i.children;ni(a,l=>{e.visibleWrites=g0(e.visibleWrites,$t(i.path,l))})}return!0}else return!1}function Yj(e,t){if(e.snap)return mi(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&mi($t(e.path,n),t))return!0;return!1}function Qj(e){e.visibleWrites=wk(e.allWrites,Xj,st()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Xj(e){return e.visible}function wk(e,t,n){let i=yi.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const o=r.path;let a;if(r.snap)mi(n,o)?(a=Qn(n,o),i=bl(i,a,r.snap)):mi(o,n)&&(a=Qn(o,n),i=bl(i,st(),r.snap.getChild(a)));else if(r.children){if(mi(n,o))a=Qn(n,o),i=m0(i,a,r.children);else if(mi(o,n))if(a=Qn(o,n),Ue(a))i=m0(i,st(),r.children);else{const l=Ho(r.children,ze(a));if(l){const c=l.getChild(ht(a));i=bl(i,st(),c)}}}else throw da("WriteRecord should have .snap or .children")}}return i}function Ek(e,t,n,i,s){if(!i&&!s){const r=Gr(e.visibleWrites,t);if(r!=null)return r;{const o=$s(e.visibleWrites,t);if(mg(o))return n;if(n==null&&!fg(o,st()))return null;{const a=n||Ze.EMPTY_NODE;return ta(o,a)}}}else{const r=$s(e.visibleWrites,t);if(!s&&mg(r))return n;if(!s&&n==null&&!fg(r,st()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(mi(c.path,t)||mi(t,c.path))},a=wk(e.allWrites,o,t),l=n||Ze.EMPTY_NODE;return ta(a,l)}}}function Jj(e,t,n){let i=Ze.EMPTY_NODE;const s=Gr(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(dn,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=$s(e.visibleWrites,t);return n.forEachChild(dn,(o,a)=>{const l=ta($s(r,new gt(o)),a);i=i.updateImmediateChild(o,l)}),v0(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=$s(e.visibleWrites,t);return v0(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Zj(e,t,n,i,s){me(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=$t(t,n);if(fg(e.visibleWrites,r))return null;{const o=$s(e.visibleWrites,r);return mg(o)?s.getChild(n):ta(o,s.getChild(n))}}function ez(e,t,n,i){const s=$t(t,n),r=Gr(e.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=$s(e.visibleWrites,s);return ta(o,i.getNode().getImmediateChild(n))}else return null}function tz(e,t){return Gr(e.visibleWrites,t)}function nz(e,t,n,i,s,r,o){let a;const l=$s(e.visibleWrites,t),c=Gr(l,st());if(c!=null)a=c;else if(n!=null)a=ta(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=h.getNext();for(;f&&u.length<s;)d(f,i)!==0&&u.push(f),f=h.getNext();return u}else return[]}function iz(){return{visibleWrites:yi.empty(),allWrites:[],lastWriteId:-1}}function gg(e,t,n,i){return Ek(e.writeTree,e.treePath,t,n,i)}function Ck(e,t){return Jj(e.writeTree,e.treePath,t)}function p0(e,t,n,i){return Zj(e.writeTree,e.treePath,t,n,i)}function wd(e,t){return tz(e.writeTree,$t(e.treePath,t))}function sz(e,t,n,i,s,r){return nz(e.writeTree,e.treePath,t,n,i,s,r)}function ey(e,t,n){return ez(e.writeTree,e.treePath,t,n)}function Tk(e,t){return Ik($t(e.treePath,t),e.writeTree)}function Ik(e,t){return{treePath:e,writeTree:t}}/**
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
 */class rz{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;me(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),me(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,u0(i,t.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Oj(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,Nj(i,t.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,u0(i,t.snapshotNode,s.oldSnap));else throw da("Illegal combination of changes: "+t+" occurred after "+s)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class oz{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const Sk=new oz;class ty{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new Zp(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ey(this.writes_,t,i)}}getChildAfterChild(t,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Br(this.viewCache_),r=sz(this.writes_,s,n,1,i,t);return r.length===0?null:r[0]}}function az(e,t){me(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),me(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function lz(e,t,n,i,s){const r=new rz;let o,a;if(n.type===Di.OVERWRITE){const c=n;c.source.fromUser?o=vg(e,t,c.path,c.snap,i,s,r):(me(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!Ue(c.path),o=Ed(e,t,c.path,c.snap,i,s,a,r))}else if(n.type===Di.MERGE){const c=n;c.source.fromUser?o=uz(e,t,c.path,c.children,i,s,r):(me(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=pg(e,t,c.path,c.children,i,s,a,r))}else if(n.type===Di.ACK_USER_WRITE){const c=n;c.revert?o=fz(e,t,c.path,i,s,r):o=dz(e,t,c.path,c.affectedTree,i,s,r)}else if(n.type===Di.LISTEN_COMPLETE)o=hz(e,t,n.path,i,r);else throw da("Unknown operation type: "+n.type);const l=r.getChanges();return cz(t,o,l),{viewCache:o,changes:l}}function cz(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=hg(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Vj(hg(t)))}}function Ak(e,t,n,i,s,r){const o=t.eventCache;if(wd(i,n)!=null)return t;{let a,l;if(Ue(n))if(me(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const c=Br(t),u=c instanceof Ze?c:Ze.EMPTY_NODE,d=Ck(i,u);a=e.filter.updateFullNode(t.eventCache.getNode(),d,r)}else{const c=gg(i,Br(t));a=e.filter.updateFullNode(t.eventCache.getNode(),c,r)}else{const c=ze(n);if(c===".priority"){me(Ws(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=t.serverCache.getNode();const d=p0(i,n,u,l);d!=null?a=e.filter.updatePriority(u,d):a=o.getNode()}else{const u=ht(n);let d;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const h=p0(i,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=ey(i,c,t.serverCache);d!=null?a=e.filter.updateChild(o.getNode(),c,d,u,s,r):a=o.getNode()}}return _l(t,a,o.isFullyInitialized()||Ue(n),e.filter.filtersNodes())}}function Ed(e,t,n,i,s,r,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(Ue(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=ze(n);if(!l.isCompleteForPath(n)&&Ws(n)>1)return t;const g=ht(n),_=l.getNode().getImmediateChild(f).updateChild(g,i);f===".priority"?c=u.updatePriority(l.getNode(),_):c=u.updateChild(l.getNode(),f,_,g,Sk,null)}const d=yk(t,c,l.isFullyInitialized()||Ue(n),u.filtersNodes()),h=new ty(s,d,r);return Ak(e,d,n,s,h,a)}function vg(e,t,n,i,s,r,o){const a=t.eventCache;let l,c;const u=new ty(s,t,r);if(Ue(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=_l(t,c,!0,e.filter.filtersNodes());else{const d=ze(n);if(d===".priority")c=e.filter.updatePriority(t.eventCache.getNode(),i),l=_l(t,c,a.isFullyInitialized(),a.isFiltered());else{const h=ht(n),f=a.getNode().getImmediateChild(d);let g;if(Ue(h))g=i;else{const v=u.getCompleteChild(d);v!=null?ik(h)===".priority"&&v.getChild(rk(h)).isEmpty()?g=v:g=v.updateChild(h,i):g=Ze.EMPTY_NODE}if(f.equals(g))l=t;else{const v=e.filter.updateChild(a.getNode(),d,g,h,u,o);l=_l(t,v,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function y0(e,t){return e.eventCache.isCompleteForChild(t)}function uz(e,t,n,i,s,r,o){let a=t;return i.foreach((l,c)=>{const u=$t(n,l);y0(t,ze(u))&&(a=vg(e,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=$t(n,l);y0(t,ze(u))||(a=vg(e,a,u,c,s,r,o))}),a}function _0(e,t,n){return n.foreach((i,s)=>{t=t.updateChild(i,s)}),t}function pg(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,c;Ue(n)?c=i:c=new ut(null).setTree(n,i);const u=t.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=t.serverCache.getNode().getImmediateChild(d),g=_0(e,f,h);l=Ed(e,l,new gt(d),g,s,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!t.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const g=t.serverCache.getNode().getImmediateChild(d),v=_0(e,g,h);l=Ed(e,l,new gt(d),v,s,r,o,a)}}),l}function dz(e,t,n,i,s,r,o){if(wd(s,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(i.value!=null){if(Ue(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ed(e,t,n,l.getNode().getChild(n),s,r,a,o);if(Ue(n)){let c=new ut(null);return l.getNode().forEachChild(Do,(u,d)=>{c=c.set(new gt(u),d)}),pg(e,t,n,c,s,r,a,o)}else return t}else{let c=new ut(null);return i.foreach((u,d)=>{const h=$t(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),pg(e,t,n,c,s,r,a,o)}}function hz(e,t,n,i,s){const r=t.serverCache,o=yk(t,r.getNode(),r.isFullyInitialized()||Ue(n),r.isFiltered());return Ak(e,o,n,i,Sk,s)}function fz(e,t,n,i,s,r){let o;if(wd(i,n)!=null)return t;{const a=new ty(i,t,s),l=t.eventCache.getNode();let c;if(Ue(n)||ze(n)===".priority"){let u;if(t.serverCache.isFullyInitialized())u=gg(i,Br(t));else{const d=t.serverCache.getNode();me(d instanceof Ze,"serverChildren would be complete if leaf node"),u=Ck(i,d)}u=u,c=e.filter.updateFullNode(l,u,r)}else{const u=ze(n);let d=ey(i,u,t.serverCache);d==null&&t.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=e.filter.updateChild(l,u,d,ht(n),a,r):t.eventCache.getNode().hasChild(u)?c=e.filter.updateChild(l,u,Ze.EMPTY_NODE,ht(n),a,r):c=l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=gg(i,Br(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,r)))}return o=t.serverCache.isFullyInitialized()||wd(i,st())!=null,_l(t,c,o,e.filter.filtersNodes())}}function mz(e,t){const n=Br(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ue(t)&&!n.getImmediateChild(ze(t)).isEmpty())?n.getChild(t):null}function b0(e,t,n,i){t.type===Di.MERGE&&t.source.queryId!==null&&(me(Br(e.viewCache_),"We should always have a full cache before handling merges"),me(hg(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=lz(e.processor_,s,t,n,i);return az(e.processor_,r.viewCache),me(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,gz(e,r.changes,r.viewCache.eventCache.getNode(),null)}function gz(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return Hj(e.eventGenerator_,t,n,s)}/**
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
 */let w0;function vz(e){me(!w0,"__referenceConstructor has already been defined"),w0=e}function ny(e,t,n,i){const s=t.source.queryId;if(s!==null){const r=e.views.get(s);return me(r!=null,"SyncTree gave us an op for an invalid query."),b0(r,t,n,i)}else{let r=[];for(const o of e.views.values())r=r.concat(b0(o,t,n,i));return r}}function iy(e,t){let n=null;for(const i of e.views.values())n=n||mz(i,t);return n}/**
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
 */let E0;function pz(e){me(!E0,"__referenceConstructor has already been defined"),E0=e}class C0{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ut(null),this.pendingWriteTree_=iz(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function yz(e,t,n,i,s){return qj(e.pendingWriteTree_,t,n,i,s),s?kh(e,new Fr(mk(),t,n)):[]}function bo(e,t,n=!1){const i=Kj(e.pendingWriteTree_,t);if(Gj(e.pendingWriteTree_,t)){let r=new ut(null);return i.snap!=null?r=r.set(st(),!0):ni(i.children,o=>{r=r.set(new gt(o),!0)}),kh(e,new bd(i.path,r,n))}else return[]}function Ah(e,t,n){return kh(e,new Fr(gk(),t,n))}function _z(e,t,n){const i=ut.fromObject(n);return kh(e,new Ql(gk(),t,i))}function bz(e,t,n,i){const s=xk(e,i);if(s!=null){const r=Vk(s),o=r.path,a=r.queryId,l=Qn(o,t),c=new Fr(vk(a),l,n);return Nk(e,o,c)}else return[]}function wz(e,t,n,i){const s=xk(e,i);if(s){const r=Vk(s),o=r.path,a=r.queryId,l=Qn(o,t),c=ut.fromObject(n),u=new Ql(vk(a),l,c);return Nk(e,o,u)}else return[]}function kk(e,t,n){const s=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(o,a)=>{const l=Qn(o,t),c=iy(a,l);if(c)return c});return Ek(s,t,r,n,!0)}function kh(e,t){return Rk(t,e.syncPointTree_,null,bk(e.pendingWriteTree_,st()))}function Rk(e,t,n,i){if(Ue(e.path))return Pk(e,t,n,i);{const s=t.get(st());n==null&&s!=null&&(n=iy(s,st()));let r=[];const o=ze(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Tk(i,o);r=r.concat(Rk(a,l,c,u))}return s&&(r=r.concat(ny(s,e,i,n))),r}}function Pk(e,t,n,i){const s=t.get(st());n==null&&s!=null&&(n=iy(s,st()));let r=[];return t.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Tk(i,o),u=e.operationForChild(o);u&&(r=r.concat(Pk(u,a,l,c)))}),s&&(r=r.concat(ny(s,e,i,n))),r}function xk(e,t){return e.tagToQueryMap.get(t)}function Vk(e){const t=e.indexOf("$");return me(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new gt(e.substr(0,t))}}function Nk(e,t,n){const i=e.syncPointTree_.get(t);me(i,"Missing sync point for query tag that we're tracking");const s=bk(e.pendingWriteTree_,t);return ny(i,n,s,null)}/**
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
 */class sy{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new sy(n)}node(){return this.node_}}class ry{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=$t(this.path_,t);return new ry(this.syncTree_,n)}node(){return kk(this.syncTree_,this.path_)}}const Ez=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},T0=function(e,t,n){if(!e||typeof e!="object")return e;if(me(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return Cz(e[".sv"],t,n);if(typeof e[".sv"]=="object")return Tz(e[".sv"],t);me(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},Cz=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:me(!1,"Unexpected server value: "+e)}},Tz=function(e,t,n){e.hasOwnProperty("increment")||me(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&me(!1,"Unexpected increment value: "+i);const s=t.node();if(me(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Iz=function(e,t,n,i){return oy(t,new ry(n,e),i)},Sz=function(e,t,n){return oy(e,new sy(t),n)};function oy(e,t,n){const i=e.getPriority().val(),s=T0(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const o=e,a=T0(o.getValue(),t,n);return a!==o.getValue()||s!==o.getPriority().val()?new Mt(a,ln(s)):e}else{const o=e;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Mt(s))),o.forEachChild(dn,(a,l)=>{const c=oy(l,t.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class ay{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function ly(e,t){let n=t instanceof gt?t:new gt(t),i=e,s=ze(n);for(;s!==null;){const r=Ho(i.node.children,s)||{children:{},childCount:0};i=new ay(s,i,r),n=ht(n),s=ze(n)}return i}function ba(e){return e.node.value}function Ok(e,t){e.node.value=t,yg(e)}function Dk(e){return e.node.childCount>0}function Az(e){return ba(e)===void 0&&!Dk(e)}function Rh(e,t){ni(e.node.children,(n,i)=>{t(new ay(n,e,i))})}function Lk(e,t,n,i){n&&!i&&t(e),Rh(e,s=>{Lk(s,t,!0,i)}),n&&i&&t(e)}function kz(e,t,n){let i=n?e:e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function Dc(e){return new gt(e.parent===null?e.name:Dc(e.parent)+"/"+e.name)}function yg(e){e.parent!==null&&Rz(e.parent,e.name,e)}function Rz(e,t,n){const i=Az(n),s=gs(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,yg(e)):!i&&!s&&(e.node.children[t]=n.node,e.node.childCount++,yg(e))}/**
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
 */const Pz=/[\[\].#$\/\u0000-\u001F\u007F]/,xz=/[\[\].#$\u0000-\u001F\u007F]/,Df=10*1024*1024,Mk=function(e){return typeof e=="string"&&e.length!==0&&!Pz.test(e)},Vz=function(e){return typeof e=="string"&&e.length!==0&&!xz.test(e)},Nz=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Vz(e)},Fk=function(e,t,n){const i=n instanceof gt?new hj(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+lr(i));if(typeof t=="function")throw new Error(e+"contains a function "+lr(i)+" with contents = "+t.toString());if(MA(t))throw new Error(e+"contains "+t.toString()+" "+lr(i));if(typeof t=="string"&&t.length>Df/3&&zd(t)>Df)throw new Error(e+"contains a string greater than "+Df+" utf8 bytes "+lr(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let s=!1,r=!1;if(ni(t,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Mk(o)))throw new Error(e+" contains an invalid key ("+o+") "+lr(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fj(i,o),Fk(e,a,i),mj(i)}),s&&r)throw new Error(e+' contains ".value" child '+lr(i)+" in addition to actual children.")}},Oz=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Mk(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Nz(n))throw new Error(SO(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Dz{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Lz(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();n!==null&&!ok(r,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function Yr(e,t,n){Lz(e,n),Mz(e,i=>mi(i,t)||mi(t,i))}function Mz(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){const r=s.path;t(r)?(Fz(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Fz(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();Ir&&an("event: "+n.toString()),Nc(i)}}}/**
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
 */const Bz="repo_interrupt",$z=25;class Uz{constructor(t,n,i,s){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Dz,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_d(),this.transactionQueueTree_=new ay,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Hz(e,t,n){if(e.stats_=Gp(e.repoInfo_),e.forceRestClient_||LH())e.server_=new yd(e.repoInfo_,(i,s,r,o)=>{I0(e,i,s,r,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>S0(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Xt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new ns(e.repoInfo_,t,(i,s,r,o)=>{I0(e,i,s,r,o)},i=>{S0(e,i)},i=>{zz(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=HH(e.repoInfo_,()=>new Uj(e.stats_,e.server_)),e.infoData_=new Lj,e.infoSyncTree_=new C0({startListening:(i,s,r,o)=>{let a=[];const l=e.infoData_.getNode(i._path);return l.isEmpty()||(a=Ah(e.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),cy(e,"connected",!1),e.serverSyncTree_=new C0({startListening:(i,s,r,o)=>(e.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Yr(e.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{e.server_.unlisten(i,s)}})}function jz(e){const n=e.infoData_.getNode(new gt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Bk(e){return Ez({timestamp:jz(e)})}function I0(e,t,n,i,s){e.dataUpdateCount++;const r=new gt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const l=Wu(n,c=>ln(c));o=wz(e.serverSyncTree_,r,l,s)}else{const l=ln(n);o=bz(e.serverSyncTree_,r,l,s)}else if(i){const l=Wu(n,c=>ln(c));o=_z(e.serverSyncTree_,r,l)}else{const l=ln(n);o=Ah(e.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=dy(e,r)),Yr(e.eventQueue_,a,o)}function S0(e,t){cy(e,"connected",t),t===!1&&qz(e)}function zz(e,t){ni(t,(n,i)=>{cy(e,n,i)})}function cy(e,t,n){const i=new gt("/.info/"+t),s=ln(n);e.infoData_.updateSnapshot(i,s);const r=Ah(e.infoSyncTree_,i,s);Yr(e.eventQueue_,i,r)}function Wz(e){return e.nextWriteId_++}function qz(e){$k(e,"onDisconnectEvents");const t=Bk(e),n=_d();dg(e.onDisconnect_,st(),(s,r)=>{const o=Iz(s,r,e.serverSyncTree_,t);fk(n,s,o)});let i=[];dg(n,st(),(s,r)=>{i=i.concat(Ah(e.serverSyncTree_,s,r));const o=Qz(e,s);dy(e,o)}),e.onDisconnect_=_d(),Yr(e.eventQueue_,st(),i)}function Kz(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Bz)}function $k(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),an(n,...t)}function Uk(e,t,n){return kk(e.serverSyncTree_,t,n)||Ze.EMPTY_NODE}function uy(e,t=e.transactionQueueTree_){if(t||Ph(e,t),ba(t)){const n=jk(e,t);me(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Gz(e,Dc(t),n)}else Dk(t)&&Rh(t,n=>{uy(e,n)})}function Gz(e,t,n){const i=n.map(c=>c.currentWriteId),s=Uk(e,t,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];me(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Qn(t,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=t;e.server_.put(l.toString(),a,c=>{$k(e,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(bo(e.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Ph(e,ly(e.transactionQueueTree_,t)),uy(e,e.transactionQueueTree_),Yr(e.eventQueue_,t,u);for(let h=0;h<d.length;h++)Nc(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{$n("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}dy(e,t)}},o)}function dy(e,t){const n=Hk(e,t),i=Dc(n),s=jk(e,n);return Yz(e,s,i),i}function Yz(e,t,n){if(t.length===0)return;const i=[];let s=[];const o=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],c=Qn(n,l.path);let u=!1,d;if(me(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(bo(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=$z)u=!0,d="maxretry",s=s.concat(bo(e.serverSyncTree_,l.currentWriteId,!0));else{const h=Uk(e,l.path,o);l.currentInputSnapshot=h;const f=t[a].update(h.val());if(f!==void 0){Fk("transaction failed: Data returned ",f,l.path);let g=ln(f);typeof f=="object"&&f!=null&&gs(f,".priority")||(g=g.updatePriority(h.getPriority()));const _=l.currentWriteId,p=Bk(e),y=Sz(g,h,p);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=y,l.currentWriteId=Wz(e),o.splice(o.indexOf(_),1),s=s.concat(yz(e.serverSyncTree_,l.path,y,l.currentWriteId,l.applyLocally)),s=s.concat(bo(e.serverSyncTree_,_,!0))}else u=!0,d="nodata",s=s.concat(bo(e.serverSyncTree_,l.currentWriteId,!0))}Yr(e.eventQueue_,n,s),s=[],u&&(t[a].status=2,function(h){setTimeout(h,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(d==="nodata"?i.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):i.push(()=>t[a].onComplete(new Error(d),!1,null))))}Ph(e,e.transactionQueueTree_);for(let a=0;a<i.length;a++)Nc(i[a]);uy(e,e.transactionQueueTree_)}function Hk(e,t){let n,i=e.transactionQueueTree_;for(n=ze(t);n!==null&&ba(i)===void 0;)i=ly(i,n),t=ht(t),n=ze(t);return i}function jk(e,t){const n=[];return zk(e,t,n),n.sort((i,s)=>i.order-s.order),n}function zk(e,t,n){const i=ba(t);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Rh(t,s=>{zk(e,s,n)})}function Ph(e,t){const n=ba(t);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Ok(t,n.length>0?n:void 0)}Rh(t,i=>{Ph(e,i)})}function Qz(e,t){const n=Dc(Hk(e,t)),i=ly(e.transactionQueueTree_,t);return kz(i,s=>{Lf(e,s)}),Lf(e,i),Lk(i,s=>{Lf(e,s)}),n}function Lf(e,t){const n=ba(t);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(me(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(me(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(bo(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ok(t,void 0):n.length=r+1,Yr(e.eventQueue_,Dc(t),s);for(let o=0;o<i.length;o++)Nc(i[o])}}/**
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
 */function Xz(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}t+="/"+s}return t}function Jz(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):$n(`Invalid query segment '${n}' in query '${e}'`)}return t}const A0=function(e,t){const n=Zz(e),i=n.namespace;n.domain==="firebase.com"&&Lr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Lr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||kH();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new BH(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new gt(n.pathString)}},Zz=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof e=="string"){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");u===-1&&(u=e.length);let d=e.indexOf("?");d===-1&&(d=e.length),t=e.substring(0,Math.min(u,d)),u<d&&(s=Xz(e.substring(u,d)));const h=Jz(e.substring(Math.min(e.length,d)));c=t.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=t.indexOf(".");i=t.substring(0,g).toLowerCase(),n=t.substring(g+1),r=i}"ns"in h&&(r=h.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class hy{constructor(t,n,i,s){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return Ue(this._path)?null:ik(this._path)}get ref(){return new wa(this._repo,this._path)}get _queryIdentifier(){const t=h0(this._queryParams),n=qp(t);return n==="{}"?"default":n}get _queryObject(){return h0(this._queryParams)}isEqual(t){if(t=An(t),!(t instanceof hy))return!1;const n=this._repo===t._repo,i=ok(this._path,t._path),s=this._queryIdentifier===t._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+dj(this._path)}}class wa extends hy{constructor(t,n){super(t,n,new Jp,!1)}get parent(){const t=rk(this._path);return t===null?null:new wa(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}vz(wa);pz(wa);/**
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
 */const e9="FIREBASE_DATABASE_EMULATOR_HOST",_g={};let t9=!1;function n9(e,t,n,i,s){let r=i||e.options.databaseURL;r===void 0&&(e.options.projectId||Lr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),an("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=A0(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[e9]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=A0(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new lg(lg.OWNER):new FH(e.name,e.options,t);Oz("Invalid Firebase Database URL",o),Ue(o.path)||Lr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=s9(a,e,u,new MH(e.name,n));return new r9(d,e)}function i9(e,t){const n=_g[t];(!n||n[e.key]!==e)&&Lr(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Kz(e),delete n[e.key]}function s9(e,t,n,i){let s=_g[t.name];s||(s={},_g[t.name]=s);let r=s[e.toURLString()];return r&&Lr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Uz(e,t9,n,i),s[e.toURLString()]=r,r}class r9{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Hz(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wa(this._repo,st())),this._rootInternal}_delete(){return this._rootInternal!==null&&(i9(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Lr("Cannot call "+t+" on a deleted database.")}}/**
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
 */function o9(e){CH(Ys),$i(new _i("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return n9(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Fn(Gw,Yw,e),Fn(Gw,Yw,"esm2017")}ns.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};ns.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};o9();/**
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
 */const Wk="firebasestorage.googleapis.com",qk="storageBucket",a9=2*60*1e3,l9=10*60*1e3;/**
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
 */class qt extends zi{constructor(t,n,i=0){super(Mf(t),`Firebase Storage: ${n} (${Mf(t)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Mf(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var zt;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(zt||(zt={}));function Mf(e){return"storage/"+e}function Kk(){const e="An unknown error occurred, please check the error payload for server response.";return new qt(zt.UNKNOWN,e)}function c9(e){return new qt(zt.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function u9(e){return new qt(zt.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function d9(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new qt(zt.UNAUTHENTICATED,e)}function h9(){return new qt(zt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function f9(e){return new qt(zt.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function m9(){return new qt(zt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function g9(){return new qt(zt.CANCELED,"User canceled the upload/download.")}function v9(e){return new qt(zt.INVALID_URL,"Invalid URL '"+e+"'.")}function p9(e){return new qt(zt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function y9(){return new qt(zt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+qk+"' property when initializing the app?")}function _9(){return new qt(zt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function bg(e){return new qt(zt.INVALID_ARGUMENT,e)}function Gk(){return new qt(zt.APP_DELETED,"The Firebase app was deleted.")}function b9(e){return new qt(zt.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ja(e){throw new qt(zt.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class Mn{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let i;try{i=Mn.makeFromUrl(t,n)}catch{return new Mn(t,"")}if(i.path==="")return i;throw p9(t)}static makeFromUrl(t,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",f=new RegExp(`^https?://${d}/${u}/b/${s}/o${h}`,"i"),g={bucket:1,path:3},v=n===Wk?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",p=new RegExp(`^https?://${v}/${s}/${_}`,"i"),E=[{regex:a,indices:l,postModify:r},{regex:f,indices:g,postModify:c},{regex:p,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<E.length;b++){const S=E[b],A=S.regex.exec(t);if(A){const k=A[S.indices.bucket];let C=A[S.indices.path];C||(C=""),i=new Mn(k,C),S.postModify(i);break}}if(i==null)throw v9(t);return i}}class w9{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function E9(e,t,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(..._){c||(c=!0,t.apply(null,_))}function d(_){s=setTimeout(()=>{s=null,e(f,l())},_)}function h(){r&&clearTimeout(r)}function f(_,...p){if(c){h();return}if(_){h(),u.call(null,_,...p);return}if(l()||o){h(),u.call(null,_,...p);return}i<64&&(i*=2);let E;a===1?(a=2,E=0):E=(i+Math.random())*1e3,d(E)}let g=!1;function v(_){g||(g=!0,h(),!c&&(s!==null?(_||(a=2),clearTimeout(s),d(0)):_||(a=1)))}return d(0),r=setTimeout(()=>{o=!0,v(!0)},n),v}function C9(e){e(!1)}/**
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
 */function T9(e){return e!==void 0}function I9(e){return typeof e=="object"&&!Array.isArray(e)}function Yk(e){return typeof e=="string"||e instanceof String}function k0(e,t,n,i){if(i<t)throw bg(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw bg(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function Qk(e,t,n){let i=t;return n==null&&(i=`https://${t}`),`${n}://${i}/v0${e}`}function Xk(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){const s=t(i)+"="+t(e[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var Sr;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Sr||(Sr={}));/**
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
 */function S9(e,t){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,r=t.indexOf(e)!==-1;return n||s||r}/**
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
 */class A9{constructor(t,n,i,s,r,o,a,l,c,u,d,h=!0){this.url_=t,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const t=(i,s)=>{if(s){i(!1,new fu(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Sr.NO_ERROR,l=r.getStatus();if(!a||S9(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Sr.ABORT;i(!1,new fu(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new fu(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());T9(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Kk();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Gk():g9();o(l)}else{const l=m9();o(l)}};this.canceled_?n(!1,new fu(!1,null,!0)):this.backoffId_=E9(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&C9(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fu{constructor(t,n,i){this.wasSuccessCode=t,this.connection=n,this.canceled=!!i}}function k9(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function R9(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function P9(e,t){t&&(e["X-Firebase-GMPID"]=t)}function x9(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function V9(e,t,n,i,s,r,o=!0){const a=Xk(e.urlParams),l=e.url+a,c=Object.assign({},e.headers);return P9(c,t),k9(c,n),R9(c,r),x9(c,i),new A9(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,o)}/**
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
 */function Jk(e){let t;try{t=JSON.parse(e)}catch{return null}return I9(t)?t:null}/**
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
 */function N9(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function O9(e,t){const n=t.split("/").filter(i=>i.length>0).join("/");return e.length===0?n:e+"/"+n}function Zk(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function D9(e,t){return t}class wn{constructor(t,n,i,s){this.server=t,this.local=n||t,this.writable=!!i,this.xform=s||D9}}let mu=null;function L9(e){return!Yk(e)||e.length<2?e:Zk(e)}function M9(){if(mu)return mu;const e=[];e.push(new wn("bucket")),e.push(new wn("generation")),e.push(new wn("metageneration")),e.push(new wn("name","fullPath",!0));function t(r,o){return L9(o)}const n=new wn("name");n.xform=t,e.push(n);function i(r,o){return o!==void 0?Number(o):o}const s=new wn("size");return s.xform=i,e.push(s),e.push(new wn("timeCreated")),e.push(new wn("updated")),e.push(new wn("md5Hash",null,!0)),e.push(new wn("cacheControl",null,!0)),e.push(new wn("contentDisposition",null,!0)),e.push(new wn("contentEncoding",null,!0)),e.push(new wn("contentLanguage",null,!0)),e.push(new wn("contentType",null,!0)),e.push(new wn("metadata","customMetadata",!0)),mu=e,mu}function F9(e,t){function n(){const i=e.bucket,s=e.fullPath,r=new Mn(i,s);return t._makeStorageReference(r)}Object.defineProperty(e,"ref",{get:n})}function B9(e,t,n){const i={};i.type="file";const s=n.length;for(let r=0;r<s;r++){const o=n[r];i[o.local]=o.xform(i,t[o.server])}return F9(i,e),i}function $9(e,t,n){const i=Jk(t);return i===null?null:B9(e,i,n)}function U9(e,t,n,i){const s=Jk(t);if(s===null||!Yk(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=e.bucket,d=e.fullPath,h="/b/"+o(u)+"/o/"+o(d),f=Qk(h,n,i),g=Xk({alt:"media",token:c});return f+g})[0]}class H9{constructor(t,n,i,s){this.url=t,this.method=n,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function j9(e){if(!e)throw Kk()}function z9(e,t){function n(i,s){const r=$9(e,s,t);return j9(r!==null),U9(r,s,e.host,e._protocol)}return n}function W9(e){function t(n,i){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=h9():s=d9():n.getStatus()===402?s=u9(e.bucket):n.getStatus()===403?s=f9(e.path):s=i,s.status=n.getStatus(),s.serverResponse=i.serverResponse,s}return t}function q9(e){const t=W9(e);function n(i,s){let r=t(i,s);return i.getStatus()===404&&(r=c9(e.path)),r.serverResponse=s.serverResponse,r}return n}function K9(e,t,n){const i=t.fullServerUrl(),s=Qk(i,e.host,e._protocol),r="GET",o=e.maxOperationRetryTime,a=new H9(s,r,z9(e,n),o);return a.errorHandler=q9(t),a}class G9{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Sr.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Sr.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Sr.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,i,s){if(this.sent_)throw ja("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),s!==void 0)for(const r in s)s.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,s[r].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ja("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ja("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ja("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ja("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Y9 extends G9{initXhr(){this.xhr_.responseType="text"}}function Q9(){return new Y9}/**
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
 */class $r{constructor(t,n){this._service=t,n instanceof Mn?this._location=n:this._location=Mn.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new $r(t,n)}get root(){const t=new Mn(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zk(this._location.path)}get storage(){return this._service}get parent(){const t=N9(this._location.path);if(t===null)return null;const n=new Mn(this._location.bucket,t);return new $r(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw b9(t)}}function X9(e){e._throwIfRoot("getDownloadURL");const t=K9(e.storage,e._location,M9());return e.storage.makeRequestWithTokens(t,Q9).then(n=>{if(n===null)throw _9();return n})}function J9(e,t){const n=O9(e._location.path,t),i=new Mn(e._location.bucket,n);return new $r(e.storage,i)}/**
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
 */function Z9(e){return/^[A-Za-z]+:\/\//.test(e)}function e5(e,t){return new $r(e,t)}function eR(e,t){if(e instanceof fy){const n=e;if(n._bucket==null)throw y9();const i=new $r(n,n._bucket);return t!=null?eR(i,t):i}else return t!==void 0?J9(e,t):e}function t5(e,t){if(t&&Z9(t)){if(e instanceof fy)return e5(e,t);throw bg("To use ref(service, url), the first argument must be a Storage instance.")}else return eR(e,t)}function R0(e,t){const n=t==null?void 0:t[qk];return n==null?null:Mn.makeFromBucketSpec(n,e)}function n5(e,t,n,i={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=i;s&&(e._overrideAuthToken=typeof s=="string"?s:aT(s,e.app.options.projectId))}class fy{constructor(t,n,i,s,r){this.app=t,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=Wk,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=a9,this._maxUploadRetryTime=l9,this._requests=new Set,s!=null?this._bucket=Mn.makeFromBucketSpec(s,this._host):this._bucket=R0(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Mn.makeFromBucketSpec(this._url,t):this._bucket=R0(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){k0("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){k0("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new $r(this,t)}_makeRequest(t,n,i,s,r=!0){if(this._deleted)return new w9(Gk());{const o=V9(t,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,i,s).getPromise()}}const P0="@firebase/storage",x0="0.11.2";/**
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
 */const tR="storage";function n8(e){return e=An(e),X9(e)}function i8(e,t){return e=An(e),t5(e,t)}function i5(e=qd(),t){e=An(e);const i=Wd(e,tR).getImmediate({identifier:t}),s=sT("storage");return s&&s5(i,...s),i}function s5(e,t,n,i={}){n5(e,t,n,i)}function r5(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new fy(n,i,s,t,Ys)}function o5(){$i(new _i(tR,r5,"PUBLIC").setMultipleInstances(!0)),Fn(P0,x0,""),Fn(P0,x0,"esm2017")}o5();const Ff=new WeakMap;function a5(e,t){return Ff.has(t)||Ff.set(t,e||{f:{},r:{},s:{},u:{}}),Ff.get(t)}function s8(e){return i2(Wp(e))}function l5(e){return(t,n)=>{const i=_H(t,n).run(()=>Z(e));bH.set(t,i),EH(i,t)}}function r8(e){return i5(Wp(e))}function c5(e,{firebaseApp:t,modules:n=[]}){e.provide(NA,t);for(const i of n)i(t,e)}const u5=jn(e=>{const t=e.$firebaseApp;l5(e.payload.vuefireUser)(t,e.vueApp)}),d5=jn(e=>{const t=e.$firebaseApp,n=PA(t);_A(n,Bf,()=>{Bf(n.currentUser)}),Hp(n,Bf)});async function Bf(e){const t=await(e==null?void 0:e.getIdToken(!0));await $fetch("/api/__session",{method:"POST",body:{token:t}})}const h5=jn(e=>{var n;const t=e.$firebaseApp;e.vueApp.use(c5,{firebaseApp:t}),(n=e.payload)!=null&&n.vuefire&&a5(e.payload.vuefire,t)}),at=typeof window<"u",my=at&&"IntersectionObserver"in window,f5=at&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function V0(e,t,n){m5(e,t),t.set(e,n)}function m5(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function g5(e,t,n){var i=nR(e,t,"set");return v5(e,i,n),n}function v5(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}function sr(e,t){var n=nR(e,t,"get");return p5(e,n)}function nR(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function p5(e,t){return t.get?t.get.call(e):t.value}function iR(e,t,n){const i=t.length-1;if(i<0)return e===void 0?n:e;for(let s=0;s<i;s++){if(e==null)return n;e=e[t[s]]}return e==null||e[t[i]]===void 0?n:e[t[i]]}function Qr(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime()||e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length!==Object.keys(t).length?!1:n.every(i=>Qr(e[i],t[i]))}function wg(e,t,n){return e==null||!t||typeof t!="string"?n:e[t]!==void 0?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),iR(e,t.split("."),n))}function un(e,t,n){if(t==null)return e===void 0?n:e;if(e!==Object(e)){if(typeof t!="function")return n;const s=t(e,n);return typeof s>"u"?n:s}if(typeof t=="string")return wg(e,t,n);if(Array.isArray(t))return iR(e,t,n);if(typeof t!="function")return n;const i=t(e,n);return typeof i>"u"?n:i}function ts(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(n,i)=>t+i)}function ve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function Eg(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function Cg(e){return e&&"$el"in e?e.$el:e}const N0=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),Tg=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function sR(e){return Object.keys(e)}function pr(e,t){return t.every(n=>e.hasOwnProperty(n))}function Ur(e,t,n){const i=Object.create(null),s=Object.create(null);for(const r in e)t.some(o=>o instanceof RegExp?o.test(r):o===r)&&!(n!=null&&n.some(o=>o===r))?i[r]=e[r]:s[r]=e[r];return[i,s]}function ii(e,t){const n={...e};return t.forEach(i=>delete n[i]),n}const rR=/^on[^a-z]/,gy=e=>rR.test(e),y5=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"];function Xr(e){const[t,n]=Ur(e,[rR]),i=ii(t,y5),[s,r]=Ur(n,["class","style","id",/^data-/]);return Object.assign(s,t),Object.assign(r,i),[s,r]}function Zn(e){return e==null?[]:Array.isArray(e)?e:[e]}function hn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(t,Math.min(n,e))}function O0(e){const t=e.toString().trim();return t.includes(".")?t.length-t.indexOf(".")-1:0}function D0(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function _5(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let i=0;for(;i<e.length;)n.push(e.substr(i,t)),i+=t;return n}function L0(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(e<t)return`${e} B`;const n=t===1024?["Ki","Mi","Gi"]:["k","M","G"];let i=-1;for(;Math.abs(e)>=t&&i<n.length-1;)e/=t,++i;return`${e.toFixed(1)} ${n[i]}B`}function Xn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const i={};for(const s in e)i[s]=e[s];for(const s in t){const r=e[s],o=t[s];if(Eg(r)&&Eg(o)){i[s]=Xn(r,o,n);continue}if(Array.isArray(r)&&Array.isArray(o)&&n){i[s]=n(r,o);continue}i[s]=o}return i}function oR(e){return e.map(t=>t.type===Ee?oR(t.children):t).flat()}function Ar(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(Ar.cache.has(e))return Ar.cache.get(e);const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return Ar.cache.set(e,t),t}Ar.cache=new Map;function wl(e,t){if(!t||typeof t!="object")return[];if(Array.isArray(t))return t.map(n=>wl(e,n)).flat(1);if(Array.isArray(t.children))return t.children.map(n=>wl(e,n)).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return wl(e,t.component.subTree).flat(1)}return[]}var gu=new WeakMap,ao=new WeakMap;class b5{constructor(t){V0(this,gu,{writable:!0,value:[]}),V0(this,ao,{writable:!0,value:0}),this.size=t}push(t){sr(this,gu)[sr(this,ao)]=t,g5(this,ao,(sr(this,ao)+1)%this.size)}values(){return sr(this,gu).slice(sr(this,ao)).concat(sr(this,gu).slice(0,sr(this,ao)))}}function w5(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function vy(e){const t=kt({}),n=w(e);return Nn(()=>{for(const i in n.value)t[i]=n.value[i]},{flush:"sync"}),hv(t)}function Cd(e,t){return e.includes(t)}function aR(e){return e[2].toLowerCase()+e.slice(3)}const Fi=()=>[Function,Array];function M0(e,t){return t="on"+hs(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function py(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(Array.isArray(e))for(const s of e)s(...n);else typeof e=="function"&&e(...n)}function Xl(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(i=>`${i}${t?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...e.querySelectorAll(n)]}function lR(e,t,n){let i,s=e.indexOf(document.activeElement);const r=t==="next"?1:-1;do s+=r,i=e[s];while((!i||i.offsetParent==null||!((n==null?void 0:n(i))??!0))&&s<e.length&&s>=0);return i}function Td(e,t){var i,s,r,o;const n=Xl(e);if(!t)(e===document.activeElement||!e.contains(document.activeElement))&&((i=n[0])==null||i.focus());else if(t==="first")(s=n[0])==null||s.focus();else if(t==="last")(r=n.at(-1))==null||r.focus();else if(typeof t=="number")(o=n[t])==null||o.focus();else{const a=lR(n,t);a?a.focus():Td(e,t==="next"?"first":"last")}}function cR(){}function na(e,t){if(!(at&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${t})`)))return null;try{return!!e&&e.matches(t)}catch{return null}}const uR=["top","bottom"],E5=["start","end","left","right"];function Ig(e,t){let[n,i]=e.split(" ");return i||(i=Cd(uR,n)?"start":Cd(E5,n)?"top":"center"),{side:Sg(n,t),align:Sg(i,t)}}function Sg(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function $f(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Uf(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function F0(e){return{side:e.align,align:e.side}}function B0(e){return Cd(uR,e.side)?"y":"x"}class Lo{constructor(t){let{x:n,y:i,width:s,height:r}=t;this.x=n,this.y=i,this.width=s,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function $0(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function yy(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),i=n.transform;if(i){let s,r,o,a,l;if(i.startsWith("matrix3d("))s=i.slice(9,-1).split(/, /),r=+s[0],o=+s[5],a=+s[12],l=+s[13];else if(i.startsWith("matrix("))s=i.slice(7,-1).split(/, /),r=+s[0],o=+s[3],a=+s[4],l=+s[5];else return new Lo(t);const c=n.transformOrigin,u=t.x-a-(1-r)*parseFloat(c),d=t.y-l-(1-o)*parseFloat(c.slice(c.indexOf(" ")+1)),h=r?t.width/r:e.offsetWidth+1,f=o?t.height/o:e.offsetHeight+1;return new Lo({x:u,y:d,width:h,height:f})}else return new Lo(t)}function yr(e,t,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(t,n)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(s=>{i.onfinish=()=>{s(i)}})),i}const ku=new WeakMap;function C5(e,t){Object.keys(t).forEach(n=>{if(gy(n)){const i=aR(n),s=ku.get(e);if(t[n]==null)s==null||s.forEach(r=>{const[o,a]=r;o===i&&(e.removeEventListener(i,a),s.delete(r))});else if(!s||![...s].some(r=>r[0]===i&&r[1]===t[n])){e.addEventListener(i,t[n]);const r=s||new Set;r.add([i,t[n]]),ku.has(e)||ku.set(e,r)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function T5(e,t){Object.keys(t).forEach(n=>{if(gy(n)){const i=aR(n),s=ku.get(e);s==null||s.forEach(r=>{const[o,a]=r;o===i&&(e.removeEventListener(i,a),s.delete(r))})}else e.removeAttribute(n)})}const lo=2.4,U0=.2126729,H0=.7151522,j0=.072175,I5=.55,S5=.58,A5=.57,k5=.62,vu=.03,z0=1.45,R5=5e-4,P5=1.25,x5=1.25,W0=.078,q0=12.82051282051282,pu=.06,K0=.001;function G0(e,t){const n=(e.r/255)**lo,i=(e.g/255)**lo,s=(e.b/255)**lo,r=(t.r/255)**lo,o=(t.g/255)**lo,a=(t.b/255)**lo;let l=n*U0+i*H0+s*j0,c=r*U0+o*H0+a*j0;if(l<=vu&&(l+=(vu-l)**z0),c<=vu&&(c+=(vu-c)**z0),Math.abs(c-l)<R5)return 0;let u;if(c>l){const d=(c**I5-l**S5)*P5;u=d<K0?0:d<W0?d-d*q0*pu:d-pu}else{const d=(c**k5-l**A5)*x5;u=d>-K0?0:d>-W0?d-d*q0*pu:d+pu}return u*100}function V5(e,t){t=Array.isArray(t)?t.slice(0,-1).map(n=>`'${n}'`).join(", ")+` or '${t.at(-1)}'`:`'${t}'`}const Id=.20689655172413793,N5=e=>e>Id**3?Math.cbrt(e):e/(3*Id**2)+4/29,O5=e=>e>Id?e**3:3*Id**2*(e-4/29);function dR(e){const t=N5,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function hR(e){const t=O5,n=(e[0]+16)/116;return[t(n+e[1]/500)*.95047,t(n),t(n-e[2]/200)*1.08883]}const D5=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],L5=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,M5=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],F5=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function fR(e){const t=Array(3),n=L5,i=D5;for(let s=0;s<3;++s)t[s]=Math.round(hn(n(i[s][0]*e[0]+i[s][1]*e[1]+i[s][2]*e[2]))*255);return{r:t[0],g:t[1],b:t[2]}}function _y(e){let{r:t,g:n,b:i}=e;const s=[0,0,0],r=F5,o=M5;t=r(t/255),n=r(n/255),i=r(i/255);for(let a=0;a<3;++a)s[a]=o[a][0]*t+o[a][1]*n+o[a][2]*i;return s}function Y0(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}const Q0=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,B5={rgb:(e,t,n,i)=>({r:e,g:t,b:n,a:i}),rgba:(e,t,n,i)=>({r:e,g:t,b:n,a:i}),hsl:(e,t,n,i)=>X0({h:e,s:t,l:n,a:i}),hsla:(e,t,n,i)=>X0({h:e,s:t,l:n,a:i}),hsv:(e,t,n,i)=>cs({h:e,s:t,v:n,a:i}),hsva:(e,t,n,i)=>cs({h:e,s:t,v:n,a:i})};function gi(e){if(typeof e=="number")return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"&&Q0.test(e)){const{groups:t}=e.match(Q0),{fn:n,values:i}=t,s=i.split(/,\s*/).map(r=>r.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(r)/100:parseFloat(r));return B5[n](...s)}else if(typeof e=="string"){let t=e.startsWith("#")?e.slice(1):e;return[3,4].includes(t.length)?t=t.split("").map(n=>n+n).join(""):[6,8].includes(t.length),yR(t)}else if(typeof e=="object"){if(pr(e,["r","g","b"]))return e;if(pr(e,["h","s","l"]))return cs(by(e));if(pr(e,["h","s","v"]))return cs(e)}throw new TypeError(`Invalid color: ${e==null?e:String(e)||e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function cs(e){const{h:t,s:n,v:i,a:s}=e,r=a=>{const l=(a+t/60)%6;return i-i*n*Math.max(Math.min(l,4-l,1),0)},o=[r(5),r(3),r(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:s}}function X0(e){return cs(by(e))}function xh(e){if(!e)return{h:0,s:1,v:1,a:1};const t=e.r/255,n=e.g/255,i=e.b/255,s=Math.max(t,n,i),r=Math.min(t,n,i);let o=0;s!==r&&(s===t?o=60*(0+(n-i)/(s-r)):s===n?o=60*(2+(i-t)/(s-r)):s===i&&(o=60*(4+(t-n)/(s-r)))),o<0&&(o=o+360);const a=s===0?0:(s-r)/s,l=[o,a,s];return{h:l[0],s:l[1],v:l[2],a:e.a}}function mR(e){const{h:t,s:n,v:i,a:s}=e,r=i-i*n/2,o=r===1||r===0?0:(i-r)/Math.min(r,1-r);return{h:t,s:o,l:r,a:s}}function by(e){const{h:t,s:n,l:i,a:s}=e,r=i+n*Math.min(i,1-i),o=r===0?0:2-2*i/r;return{h:t,s:o,v:r,a:s}}function gR(e){let{r:t,g:n,b:i,a:s}=e;return s===void 0?`rgb(${t}, ${n}, ${i})`:`rgba(${t}, ${n}, ${i}, ${s})`}function vR(e){return gR(cs(e))}function yu(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function pR(e){let{r:t,g:n,b:i,a:s}=e;return`#${[yu(t),yu(n),yu(i),s!==void 0?yu(Math.round(s*255)):""].join("")}`}function yR(e){e=U5(e);let[t,n,i,s]=_5(e,2).map(r=>parseInt(r,16));return s=s===void 0?s:s/255,{r:t,g:n,b:i,a:s}}function $5(e){const t=yR(e);return xh(t)}function _R(e){return pR(cs(e))}function U5(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(t=>t+t).join("")),e.length!==6&&(e=D0(D0(e,6),8,"F")),e}function H5(e,t){const n=dR(_y(e));return n[0]=n[0]+t*10,fR(hR(n))}function j5(e,t){const n=dR(_y(e));return n[0]=n[0]-t*10,fR(hR(n))}function Ag(e){const t=gi(e);return _y(t)[1]}function z5(e,t){const n=Ag(e),i=Ag(t),s=Math.max(n,i),r=Math.min(n,i);return(s+.05)/(r+.05)}function bR(e){const t=Math.abs(G0(gi(0),gi(e)));return Math.abs(G0(gi(16777215),gi(e)))>Math.min(t,50)?"#fff":"#000"}function $(e,t){return n=>Object.keys(e).reduce((i,s)=>{const o=typeof e[s]=="object"&&e[s]!=null&&!Array.isArray(e[s])?e[s]:{type:e[s]};return n&&s in n?i[s]={...o,default:n[s]}:i[s]=o,t&&!i[s].source&&(i[s].source=t),i},{})}const he=$({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function si(e){if(e._setup=e._setup??e.setup,!e.name)return e;if(e._setup){e.props=$(e.props??{},e.name)();const t=Object.keys(e.props);e.filterProps=function(i){return Ur(i,t,["class","style"])},e.props._as=String,e.setup=function(i,s){const r=Cy();if(!r.value)return e._setup(i,s);const{props:o,provideSubDefaults:a}=J5(i,i._as??e.name,r),l=e._setup(o,s);return a(),l}}return e}function G(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t=>(e?si:fs)(t)}function Ti(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return G()({name:n??hs(ei(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...he()},setup(i,s){let{slots:r}=s;return()=>{var o;return xt(i.tag,{class:[e,i.class],style:i.style},(o=r.default)==null?void 0:o.call(r))}}})}function wR(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const Jl="cubic-bezier(0.4, 0, 0.2, 1)",W5="cubic-bezier(0.0, 0, 0.2, 1)",q5="cubic-bezier(0.4, 0, 1, 1)";function Kt(e,t){const n=Gs();if(!n)throw new Error(`[Vuetify] ${e} ${t||"must be called from inside a setup function"}`);return n}function vs(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const t=Kt(e).type;return Ar((t==null?void 0:t.aliasName)||(t==null?void 0:t.name))}let ER=0,Ru=new WeakMap;function _n(){const e=Kt("getUid");if(Ru.has(e))return Ru.get(e);{const t=ER++;return Ru.set(e,t),t}}_n.reset=()=>{ER=0,Ru=new WeakMap};function wy(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?K5(e):Ey(e))return e;e=e.parentElement}return document.scrollingElement}function Sd(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(Ey(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function Ey(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function K5(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function G5(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Kt("injectSelf");const{provides:n}=t;if(n&&e in n)return n[e]}function Y5(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function te(e){const t=Kt("useRender");t.render=e}const ia=Symbol.for("vuetify:defaults");function Q5(e){return Z(e)}function Cy(){const e=De(ia);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function Vt(e,t){const n=Cy(),i=Z(e),s=w(()=>{if($e(t==null?void 0:t.disabled))return n.value;const o=$e(t==null?void 0:t.scoped),a=$e(t==null?void 0:t.reset),l=$e(t==null?void 0:t.root);if(i.value==null&&!(o||a||l))return n.value;let c=Xn(i.value,{prev:n.value});if(o)return c;if(a||l){const u=Number(a||1/0);for(let d=0;d<=u&&!(!c||!("prev"in c));d++)c=c.prev;return c&&typeof l=="string"&&l in c&&(c=Xn(Xn(c,{prev:c}),c[l])),c}return c.prev?Xn(c.prev,c):c});return lt(ia,s),s}function X5(e,t){var n,i;return typeof((n=e.props)==null?void 0:n[t])<"u"||typeof((i=e.props)==null?void 0:i[Ar(t)])<"u"}function J5(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Cy();const i=Kt("useDefaults");if(t=t??i.type.name??i.type.__name,!t)throw new Error("[Vuetify] Could not determine component name");const s=w(()=>{var l;return(l=n.value)==null?void 0:l[e._as??t]}),r=new Proxy(e,{get(l,c){var d,h,f,g;const u=Reflect.get(l,c);return c==="class"||c==="style"?[(d=s.value)==null?void 0:d[c],u].filter(v=>v!=null):typeof c=="string"&&!X5(i.vnode,c)?((h=s.value)==null?void 0:h[c])??((g=(f=n.value)==null?void 0:f.global)==null?void 0:g[c])??u:u}}),o=le();Nn(()=>{if(s.value){const l=Object.entries(s.value).filter(c=>{let[u]=c;return u.startsWith(u[0].toUpperCase())});o.value=l.length?Object.fromEntries(l):void 0}else o.value=void 0});function a(){const l=G5(ia,i);lt(ia,w(()=>o.value?Xn((l==null?void 0:l.value)??{},o.value):l==null?void 0:l.value))}return{props:r,provideSubDefaults:a}}const Vh=["sm","md","lg","xl","xxl"],kg=Symbol.for("vuetify:display"),J0={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},Z5=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:J0;return Xn(J0,e)};function Z0(e){return at&&!e?window.innerWidth:typeof e=="object"&&e.clientWidth||0}function eE(e){return at&&!e?window.innerHeight:typeof e=="object"&&e.clientHeight||0}function tE(e){const t=at&&!e?window.navigator.userAgent:"ssr";function n(g){return!!t.match(g)}const i=n(/android/i),s=n(/iphone|ipad|ipod/i),r=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),l=n(/edge/i),c=n(/firefox/i),u=n(/opera/i),d=n(/win/i),h=n(/mac/i),f=n(/linux/i);return{android:i,ios:s,cordova:r,electron:o,chrome:a,edge:l,firefox:c,opera:u,win:d,mac:h,linux:f,touch:f5,ssr:t==="ssr"}}function e6(e,t){const{thresholds:n,mobileBreakpoint:i}=Z5(e),s=le(eE(t)),r=le(tE(t)),o=kt({}),a=le(Z0(t));function l(){s.value=eE(),a.value=Z0()}function c(){l(),r.value=tE()}return Nn(()=>{const u=a.value<n.sm,d=a.value<n.md&&!u,h=a.value<n.lg&&!(d||u),f=a.value<n.xl&&!(h||d||u),g=a.value<n.xxl&&!(f||h||d||u),v=a.value>=n.xxl,_=u?"xs":d?"sm":h?"md":f?"lg":g?"xl":"xxl",p=typeof i=="number"?i:n[i],y=a.value<p;o.xs=u,o.sm=d,o.md=h,o.lg=f,o.xl=g,o.xxl=v,o.smAndUp=!u,o.mdAndUp=!(u||d),o.lgAndUp=!(u||d||h),o.xlAndUp=!(u||d||h||f),o.smAndDown=!(h||f||g||v),o.mdAndDown=!(f||g||v),o.lgAndDown=!(g||v),o.xlAndDown=!v,o.name=_,o.height=s.value,o.width=a.value,o.mobile=y,o.mobileBreakpoint=i,o.platform=r.value,o.thresholds=n}),at&&window.addEventListener("resize",l,{passive:!0}),{...hv(o),update:c,ssr:!!t}}function Jr(){const e=De(kg);if(!e)throw new Error("Could not find Vuetify display injection");return e}const t6={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar"},n6={component:e=>xt(Iy,{...e,class:"mdi"})},Ae=[String,Function,Object,Array],Rg=Symbol.for("vuetify:icons"),Nh=$({icon:{type:Ae},tag:{type:String,required:!0}},"icon"),Pg=G()({name:"VComponentIcon",props:Nh(),setup(e,t){let{slots:n}=t;return()=>{const i=e.icon;return m(e.tag,null,{default:()=>{var s;return[e.icon?m(i,null,null):(s=n.default)==null?void 0:s.call(n)]}})}}}),Ty=si({name:"VSvgIcon",inheritAttrs:!1,props:Nh(),setup(e,t){let{attrs:n}=t;return()=>m(e.tag,ce(n,{style:null}),{default:()=>[m("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map(i=>Array.isArray(i)?m("path",{d:i[0],"fill-opacity":i[1]},null):m("path",{d:i},null)):m("path",{d:e.icon},null)])]})}}),i6=si({name:"VLigatureIcon",props:Nh(),setup(e){return()=>m(e.tag,null,{default:()=>[e.icon]})}}),Iy=si({name:"VClassIcon",props:Nh(),setup(e){return()=>m(e.tag,{class:e.icon},null)}}),s6={svg:{component:Ty},class:{component:Iy}};function r6(e){return Xn({defaultSet:"mdi",sets:{...s6,mdi:n6},aliases:{...t6,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"}},e)}const o6=e=>{const t=De(Rg);if(!t)throw new Error("Missing Vuetify Icons provide!");return{iconData:w(()=>{var l;const i=$e(e);if(!i)return{component:Pg};let s=i;if(typeof s=="string"&&(s=s.trim(),s.startsWith("$")&&(s=(l=t.aliases)==null?void 0:l[s.slice(1)])),!s)throw new Error(`Could not find aliased icon "${i}"`);if(Array.isArray(s))return{component:Ty,icon:s};if(typeof s!="string")return{component:Pg,icon:s};const r=Object.keys(t.sets).find(c=>typeof s=="string"&&s.startsWith(`${c}:`)),o=r?s.slice(r.length+1):s;return{component:t.sets[r??t.defaultSet].component,icon:o}})}},a6={badge:"Badge",open:"Open",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{ok:"OK",cancel:"Cancel",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},l6={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1};function qs(e,t){let n;function i(){n=Nd(),n.run(()=>t.length?t(()=>{n==null||n.stop(),i()}):t())}ue(e,s=>{s&&!n?i():s||(n==null||n.stop(),n=void 0)},{immediate:!0}),xn(()=>{n==null||n.stop()})}function xe(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:d=>d,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:d=>d;const r=Kt("useProxiedModel"),o=Z(e[t]!==void 0?e[t]:n),a=Ar(t),c=w(a!==t?()=>{var d,h,f,g;return e[t],!!(((d=r.vnode.props)!=null&&d.hasOwnProperty(t)||(h=r.vnode.props)!=null&&h.hasOwnProperty(a))&&((f=r.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${t}`)||(g=r.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var d,h;return e[t],!!((d=r.vnode.props)!=null&&d.hasOwnProperty(t)&&((h=r.vnode.props)!=null&&h.hasOwnProperty(`onUpdate:${t}`)))});qs(()=>!c.value,()=>{ue(()=>e[t],d=>{o.value=d})});const u=w({get(){const d=e[t];return i(c.value?d:o.value)},set(d){const h=s(d),f=Me(c.value?e[t]:o.value);f===h||i(f)===d||(o.value=h,r==null||r.emit(`update:${t}`,h))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?e[t]:o.value}),u}const nE="$vuetify.",iE=(e,t)=>e.replace(/\{(\d+)\}/g,(n,i)=>String(t[+i])),CR=(e,t,n)=>function(i){for(var s=arguments.length,r=new Array(s>1?s-1:0),o=1;o<s;o++)r[o-1]=arguments[o];if(!i.startsWith(nE))return iE(i,r);const a=i.replace(nE,""),l=e.value&&n.value[e.value],c=t.value&&n.value[t.value];let u=wg(l,a,null);return u||(`${i}${e.value}`,u=wg(c,a,null)),u||(u=i),typeof u!="string"&&(u=i),iE(u,r)};function TR(e,t){return(n,i)=>new Intl.NumberFormat([e.value,t.value],i).format(n)}function Hf(e,t,n){const i=xe(e,t,e[t]??n.value);return i.value=e[t]??n.value,ue(n,s=>{e[t]==null&&(i.value=n.value)}),i}function IR(e){return t=>{const n=Hf(t,"locale",e.current),i=Hf(t,"fallback",e.fallback),s=Hf(t,"messages",e.messages);return{name:"vuetify",current:n,fallback:i,messages:s,t:CR(n,i,s),n:TR(n,i),provide:IR({current:n,fallback:i,messages:s})}}}function c6(e){const t=le((e==null?void 0:e.locale)??"en"),n=le((e==null?void 0:e.fallback)??"en"),i=Z({en:a6,...e==null?void 0:e.messages});return{name:"vuetify",current:t,fallback:n,messages:i,t:CR(t,n,i),n:TR(t,n),provide:IR({current:t,fallback:n,messages:i})}}const sa=Symbol.for("vuetify:locale");function u6(e){return e.name!=null}function d6(e){const t=e!=null&&e.adapter&&u6(e==null?void 0:e.adapter)?e==null?void 0:e.adapter:c6(e),n=f6(t,e);return{...t,...n}}function ri(){const e=De(sa);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}function h6(e){const t=De(sa);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");const n=t.provide(e),i=m6(n,t.rtl,e),s={...n,...i};return lt(sa,s),s}function f6(e,t){const n=Z((t==null?void 0:t.rtl)??l6),i=w(()=>n.value[e.current.value]??!1);return{isRtl:i,rtl:n,rtlClasses:w(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function m6(e,t,n){const i=w(()=>n.rtl??t.value[e.current.value]??!1);return{isRtl:i,rtl:t,rtlClasses:w(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function Gt(){const e=De(sa);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}const Zl=Symbol.for("vuetify:theme"),He=$({theme:String},"theme"),za={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function g6(){var n,i;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:za;if(!e)return{...za,isDisabled:!0};const t={};for(const[s,r]of Object.entries(e.themes??{})){const o=r.dark||s==="dark"?(n=za.themes)==null?void 0:n.dark:(i=za.themes)==null?void 0:i.light;t[s]=Xn(o,r)}return Xn(za,{...e,themes:t})}function v6(e){const t=g6(e),n=Z(t.defaultTheme),i=Z(t.themes),s=w(()=>{const u={};for(const[d,h]of Object.entries(i.value)){const f=u[d]={...h,colors:{...h.colors}};if(t.variations)for(const g of t.variations.colors){const v=f.colors[g];if(v)for(const _ of["lighten","darken"]){const p=_==="lighten"?H5:j5;for(const y of ts(t.variations[_],1))f.colors[`${g}-${_}-${y}`]=pR(p(gi(v),y))}}for(const g of Object.keys(f.colors)){if(/^on-[a-z]/.test(g)||f.colors[`on-${g}`])continue;const v=`on-${g}`,_=gi(f.colors[g]);f.colors[v]=bR(_)}}return u}),r=w(()=>s.value[n.value]),o=w(()=>{const u=[];r.value.dark&&rr(u,":root",["color-scheme: dark"]),rr(u,":root",sE(r.value));for(const[g,v]of Object.entries(s.value))rr(u,`.v-theme--${g}`,[`color-scheme: ${v.dark?"dark":"normal"}`,...sE(v)]);const d=[],h=[],f=new Set(Object.values(s.value).flatMap(g=>Object.keys(g.colors)));for(const g of f)/^on-[a-z]/.test(g)?rr(h,`.${g}`,[`color: rgb(var(--v-theme-${g})) !important`]):(rr(d,`.bg-${g}`,[`--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${g})) !important`,`color: rgb(var(--v-theme-on-${g})) !important`]),rr(h,`.text-${g}`,[`color: rgb(var(--v-theme-${g})) !important`]),rr(h,`.border-${g}`,[`--v-border-color: var(--v-theme-${g})`]));return u.push(...d,...h),u.map((g,v)=>v===0?g:`    ${g}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:t.cspNonce||!1}]}}function l(u){if(t.isDisabled)return;const d=u._context.provides.usehead;if(d)if(d.push){const h=d.push(a);at&&ue(o,()=>{h.patch(a)})}else at?(d.addHeadObjs(w(a)),Nn(()=>d.updateDOM())):d.addHeadObjs(a());else{let f=function(){if(typeof document<"u"&&!h){const g=document.createElement("style");g.type="text/css",g.id="vuetify-theme-stylesheet",t.cspNonce&&g.setAttribute("nonce",t.cspNonce),h=g,document.head.appendChild(h)}h&&(h.innerHTML=o.value)},h=at?document.getElementById("vuetify-theme-stylesheet"):null;at?ue(o,f,{immediate:!0}):f()}}const c=w(()=>t.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:t.isDisabled,name:n,themes:i,current:r,computedThemes:s,themeClasses:c,styles:o,global:{name:n,current:r}}}function Xe(e){Kt("provideTheme");const t=De(Zl,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=w(()=>e.theme??(t==null?void 0:t.name.value)),i=w(()=>t.isDisabled?void 0:`v-theme--${n.value}`),s={...t,name:n,themeClasses:i};return lt(Zl,s),s}function SR(){Kt("useTheme");const e=De(Zl,null);if(!e)throw new Error("Could not find Vuetify theme injection");return e}function rr(e,t,n){e.push(`${t} {
`,...n.map(i=>`  ${i};
`),`}
`).splice(1).map(d=>({text:d.replace("webpack:/","").replace(".vue",".js").trim(),internal:d.includes("node_modules")&&!d.includes(".cache")||d.includes("internal")||d.includes("new Promise")})).map(d=>`<span class="stack${d.internal?" internal":""}">${d.text}</span>`).join(`
`);const i=Number(n.statusCode||500),s=i===404,r=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,u=s?d_(()=>Qi(()=>import("./error-404.b4b8e115.js"),["./error-404.b4b8e115.js","./error-404.7fc72018.css"],import.meta.url).then(d=>d.default||d)):d_(()=>Qi(()=>import("./error-500.89ab767f.js"),["./error-500.89ab767f.js","./error-500.c5df6088.css"],import.meta.url).then(d=>d.default||d));return(d,h)=>(Pi(),Yi($e(u),R1(VC({statusCode:$e(i),statusMessage:$e(r),description:$e(o),stack:$e(a)})),null,16))}},x7=P7,V7={__name:"nuxt-root",setup(e){const t=()=>null,n=wt(),i=n.deferHydration(),s=!1;lt(Sc,FS()),n.hooks.callHookWith(a=>a.map(l=>l()),"vue:setup");const r=bh();mC((a,l,c)=>{if(n.hooks.callHook("vue:error",a,l,c).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u)),cB(a)&&(a.fatal||a.unhandled))return n.runWithContext(()=>po(a)),!1});const o=!1;return(a,l)=>(Pi(),Yi(vv,{onResolve:$e(i)},{default:mv(()=>[$e(r)?(Pi(),Yi($e(x7),{key:0,error:$e(r)},null,8,["error"])):$e(o)?(Pi(),Yi($e(t),{key:1,context:$e(o)},null,8,["context"])):$e(s)?(Pi(),Yi(vC($e(s)),{key:2})):(Pi(),Yi($e(R7),{key:3}))]),_:1},8,["onResolve"]))}},AE=V7;globalThis.$fetch||(globalThis.$fetch=$N.create({baseURL:HN()}));let kE;{let e;kE=async function(){var r,o;if(e)return e;const i=!!((r=window.__NUXT__)!=null&&r.serverRendered||((o=document.getElementById("__NUXT_DATA__"))==null?void 0:o.dataset.ssr)==="true")?GV(AE):KV(AE),s=tO({vueApp:i});try{await iO(s,g7)}catch(a){await s.callHook("app:error",a),s.payload.error=s.payload.error||a}try{await s.hooks.callHook("app:created",i),await s.hooks.callHook("app:beforeMount",i),i.mount(TB),await s.hooks.callHook("app:mounted",i),await Ye()}catch(a){await s.callHook("app:error",a),s.payload.error=s.payload.error||a}return i},e=kE().catch(t=>{console.error("Error while mounting app:",t)})}export{s8 as A,r8 as B,i8 as C,n8 as D,K7 as E,Ee as F,J7 as G,Y7 as H,Q7 as I,G7 as J,X7 as K,$e as L,Yi as M,M7 as N,U7 as O,Y as P,Gs as Q,Bd as R,fC as S,ue as T,Np as U,$7 as V,t8 as W,H7 as X,F7 as Y,S7 as _,Kr as a,tn as b,w as c,fs as d,xt as e,L7 as f,dN as g,cc as h,WC as i,Z7 as j,Pi as k,B7 as l,xC as m,e8 as n,en as o,Hd as p,m as q,Z as r,mv as s,N7 as t,wt as u,ua as v,um as w,O7 as x,D7 as y,L$ as z};