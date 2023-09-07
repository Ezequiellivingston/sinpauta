function Yf(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const xe={},Bs=[],hn=()=>{},pC=()=>!1,gC=/^on[^a-z]/,na=t=>gC.test(t),Jf=t=>t.startsWith("onUpdate:"),je=Object.assign,Xf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mC=Object.prototype.hasOwnProperty,ge=(t,e)=>mC.call(t,e),Z=Array.isArray,Hs=t=>ra(t)==="[object Map]",mv=t=>ra(t)==="[object Set]",_C=t=>ra(t)==="[object RegExp]",ne=t=>typeof t=="function",$e=t=>typeof t=="string",Zf=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",_v=t=>Oe(t)&&ne(t.then)&&ne(t.catch),yv=Object.prototype.toString,ra=t=>yv.call(t),yC=t=>ra(t).slice(8,-1),vv=t=>ra(t)==="[object Object]",ed=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,lo=Yf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vC=/-(\w)/g,xn=mc(t=>t.replace(vC,(e,n)=>n?n.toUpperCase():"")),EC=/\B([A-Z])/g,Ti=mc(t=>t.replace(EC,"-$1").toLowerCase()),sa=mc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Iu=mc(t=>t?`on${sa(t)}`:""),bo=(t,e)=>!Object.is(t,e),co=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},wl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},wC=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Ev=t=>{const e=$e(t)?Number(t):NaN;return isNaN(e)?t:e};let dg;const yh=()=>dg||(dg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _c(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=$e(r)?CC(r):_c(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if($e(t))return t;if(Oe(t))return t}}const TC=/;(?![^(]*\))/g,IC=/:([^]+)/,AC=/\/\*[^]*?\*\//g;function CC(t){const e={};return t.replace(AC,"").split(TC).forEach(n=>{if(n){const r=n.split(IC);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function yc(t){let e="";if($e(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const r=yc(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function RC(t){if(!t)return null;let{class:e,style:n}=t;return e&&!$e(e)&&(t.class=yc(e)),n&&(t.style=_c(n)),t}const bC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",SC=Yf(bC);function wv(t){return!!t||t===""}const iH=t=>$e(t)?t:t==null?"":Z(t)||Oe(t)&&(t.toString===yv||!ne(t.toString))?JSON.stringify(t,Tv,2):String(t),Tv=(t,e)=>e&&e.__v_isRef?Tv(t,e.value):Hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:mv(e)?{[`Set(${e.size})`]:[...e.values()]}:Oe(e)&&!Z(e)&&!vv(e)?String(e):e;let jt;class Iv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=jt;try{return jt=this,e()}finally{jt=n}}}on(){jt=this}off(){jt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Av(t){return new Iv(t)}function PC(t,e=jt){e&&e.active&&e.effects.push(t)}function kC(){return jt}function NC(t){jt&&jt.cleanups.push(t)}const td=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Cv=t=>(t.w&Sr)>0,Rv=t=>(t.n&Sr)>0,OC=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Sr},DC=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Cv(s)&&!Rv(s)?s.delete(t):e[n++]=s,s.w&=~Sr,s.n&=~Sr}e.length=n}},Tl=new WeakMap;let Zi=0,Sr=1;const vh=30;let on;const es=Symbol(""),Eh=Symbol("");class nd{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,PC(this,r)}run(){if(!this.active)return this.fn();let e=on,n=Er;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=on,on=this,Er=!0,Sr=1<<++Zi,Zi<=vh?OC(this):pg(this),this.fn()}finally{Zi<=vh&&DC(this),Sr=1<<--Zi,on=this.parent,Er=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){on===this?this.deferStop=!0:this.active&&(pg(this),this.onStop&&this.onStop(),this.active=!1)}}function pg(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Er=!0;const bv=[];function Ii(){bv.push(Er),Er=!1}function Ai(){const t=bv.pop();Er=t===void 0?!0:t}function Bt(t,e,n){if(Er&&on){let r=Tl.get(t);r||Tl.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=td()),Sv(s)}}function Sv(t,e){let n=!1;Zi<=vh?Rv(t)||(t.n|=Sr,n=!Cv(t)):n=!t.has(on),n&&(t.add(on),on.deps.push(t))}function Yn(t,e,n,r,s,i){const o=Tl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Z(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Z(t)?ed(n)&&a.push(o.get("length")):(a.push(o.get(es)),Hs(t)&&a.push(o.get(Eh)));break;case"delete":Z(t)||(a.push(o.get(es)),Hs(t)&&a.push(o.get(Eh)));break;case"set":Hs(t)&&a.push(o.get(es));break}if(a.length===1)a[0]&&wh(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);wh(td(l))}}function wh(t,e){const n=Z(t)?t:[...t];for(const r of n)r.computed&&gg(r);for(const r of n)r.computed||gg(r)}function gg(t,e){(t!==on||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function xC(t,e){var n;return(n=Tl.get(t))==null?void 0:n.get(e)}const MC=Yf("__proto__,__v_isRef,__isVue"),Pv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zf)),LC=rd(),VC=rd(!1,!0),FC=rd(!0),mg=UC();function UC(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ue(this);for(let i=0,o=this.length;i<o;i++)Bt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ue)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ii();const r=ue(this)[e].apply(this,n);return Ai(),r}}),t}function $C(t){const e=ue(this);return Bt(e,"has",t),e.hasOwnProperty(t)}function rd(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?nR:xv:e?Dv:Ov).get(r))return r;const o=Z(r);if(!t){if(o&&ge(mg,s))return Reflect.get(mg,s,i);if(s==="hasOwnProperty")return $C}const a=Reflect.get(r,s,i);return(Zf(s)?Pv.has(s):MC(s))||(t||Bt(r,"get",s),e)?a:Ye(a)?o&&ed(s)?a:a.value:Oe(a)?t?Mv(a):nn(a):a}}const BC=kv(),HC=kv(!0);function kv(t=!1){return function(n,r,s,i){let o=n[r];if(cs(o)&&Ye(o)&&!Ye(s))return!1;if(!t&&(!Il(s)&&!cs(s)&&(o=ue(o),s=ue(s)),!Z(n)&&Ye(o)&&!Ye(s)))return o.value=s,!0;const a=Z(n)&&ed(r)?Number(r)<n.length:ge(n,r),l=Reflect.set(n,r,s,i);return n===ue(i)&&(a?bo(s,o)&&Yn(n,"set",r,s):Yn(n,"add",r,s)),l}}function jC(t,e){const n=ge(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Yn(t,"delete",e,void 0),r}function WC(t,e){const n=Reflect.has(t,e);return(!Zf(e)||!Pv.has(e))&&Bt(t,"has",e),n}function qC(t){return Bt(t,"iterate",Z(t)?"length":es),Reflect.ownKeys(t)}const Nv={get:LC,set:BC,deleteProperty:jC,has:WC,ownKeys:qC},KC={get:FC,set(t,e){return!0},deleteProperty(t,e){return!0}},zC=je({},Nv,{get:VC,set:HC}),sd=t=>t,vc=t=>Reflect.getPrototypeOf(t);function Ma(t,e,n=!1,r=!1){t=t.__v_raw;const s=ue(t),i=ue(e);n||(e!==i&&Bt(s,"get",e),Bt(s,"get",i));const{has:o}=vc(s),a=r?sd:n?ad:So;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function La(t,e=!1){const n=this.__v_raw,r=ue(n),s=ue(t);return e||(t!==s&&Bt(r,"has",t),Bt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Va(t,e=!1){return t=t.__v_raw,!e&&Bt(ue(t),"iterate",es),Reflect.get(t,"size",t)}function _g(t){t=ue(t);const e=ue(this);return vc(e).has.call(e,t)||(e.add(t),Yn(e,"add",t,t)),this}function yg(t,e){e=ue(e);const n=ue(this),{has:r,get:s}=vc(n);let i=r.call(n,t);i||(t=ue(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?bo(e,o)&&Yn(n,"set",t,e):Yn(n,"add",t,e),this}function vg(t){const e=ue(this),{has:n,get:r}=vc(e);let s=n.call(e,t);s||(t=ue(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Yn(e,"delete",t,void 0),i}function Eg(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&Yn(t,"clear",void 0,void 0),n}function Fa(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ue(o),l=e?sd:t?ad:So;return!t&&Bt(a,"iterate",es),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Ua(t,e,n){return function(...r){const s=this.__v_raw,i=ue(s),o=Hs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?sd:e?ad:So;return!e&&Bt(i,"iterate",l?Eh:es),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ar(t){return function(...e){return t==="delete"?!1:this}}function GC(){const t={get(i){return Ma(this,i)},get size(){return Va(this)},has:La,add:_g,set:yg,delete:vg,clear:Eg,forEach:Fa(!1,!1)},e={get(i){return Ma(this,i,!1,!0)},get size(){return Va(this)},has:La,add:_g,set:yg,delete:vg,clear:Eg,forEach:Fa(!1,!0)},n={get(i){return Ma(this,i,!0)},get size(){return Va(this,!0)},has(i){return La.call(this,i,!0)},add:ar("add"),set:ar("set"),delete:ar("delete"),clear:ar("clear"),forEach:Fa(!0,!1)},r={get(i){return Ma(this,i,!0,!0)},get size(){return Va(this,!0)},has(i){return La.call(this,i,!0)},add:ar("add"),set:ar("set"),delete:ar("delete"),clear:ar("clear"),forEach:Fa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ua(i,!1,!1),n[i]=Ua(i,!0,!1),e[i]=Ua(i,!1,!0),r[i]=Ua(i,!0,!0)}),[t,n,e,r]}const[QC,YC,JC,XC]=GC();function id(t,e){const n=e?t?XC:JC:t?YC:QC;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ge(n,s)&&s in r?n:r,s,i)}const ZC={get:id(!1,!1)},eR={get:id(!1,!0)},tR={get:id(!0,!1)},Ov=new WeakMap,Dv=new WeakMap,xv=new WeakMap,nR=new WeakMap;function rR(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sR(t){return t.__v_skip||!Object.isExtensible(t)?0:rR(yC(t))}function nn(t){return cs(t)?t:od(t,!1,Nv,ZC,Ov)}function ia(t){return od(t,!1,zC,eR,Dv)}function Mv(t){return od(t,!0,KC,tR,xv)}function od(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=sR(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function js(t){return cs(t)?js(t.__v_raw):!!(t&&t.__v_isReactive)}function cs(t){return!!(t&&t.__v_isReadonly)}function Il(t){return!!(t&&t.__v_isShallow)}function Lv(t){return js(t)||cs(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function Al(t){return wl(t,"__v_skip",!0),t}const So=t=>Oe(t)?nn(t):t,ad=t=>Oe(t)?Mv(t):t;function Vv(t){Er&&on&&(t=ue(t),Sv(t.dep||(t.dep=td())))}function Fv(t,e){t=ue(t);const n=t.dep;n&&wh(n)}function Ye(t){return!!(t&&t.__v_isRef===!0)}function Je(t){return Uv(t,!1)}function fn(t){return Uv(t,!0)}function Uv(t,e){return Ye(t)?t:new iR(t,e)}class iR{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:So(e)}get value(){return Vv(this),this._value}set value(e){const n=this.__v_isShallow||Il(e)||cs(e);e=n?e:ue(e),bo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:So(e),Fv(this))}}function Re(t){return Ye(t)?t.value:t}const oR={get:(t,e,n)=>Re(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ye(s)&&!Ye(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function $v(t){return js(t)?t:new Proxy(t,oR)}function Bv(t){const e=Z(t)?new Array(t.length):{};for(const n in t)e[n]=jv(t,n);return e}class aR{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return xC(ue(this._object),this._key)}}class lR{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Hv(t,e,n){return Ye(t)?t:ne(t)?new lR(t):Oe(t)&&arguments.length>1?jv(t,e,n):Je(t)}function jv(t,e,n){const r=t[e];return Ye(r)?r:new aR(t,e,n)}class cR{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new nd(e,()=>{this._dirty||(this._dirty=!0,Fv(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ue(this);return Vv(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function uR(t,e,n=!1){let r,s;const i=ne(t);return i?(r=t,s=hn):(r=t.get,s=t.set),new cR(r,s,i||!s,n)}function wr(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ci(i,e,n)}return s}function tn(t,e,n,r){if(ne(t)){const i=wr(t,e,n,r);return i&&_v(i)&&i.catch(o=>{Ci(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(tn(t[i],e,n,r));return s}function Ci(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){wr(l,null,10,[t,o,a]);return}}hR(t,n,s,r)}function hR(t,e,n,r=!0){console.error(t)}let Po=!1,Th=!1;const Tt=[];let An=0;const Ws=[];let Hn=null,Kr=0;const Wv=Promise.resolve();let ld=null;function Dr(t){const e=ld||Wv;return t?e.then(this?t.bind(this):t):e}function fR(t){let e=An+1,n=Tt.length;for(;e<n;){const r=e+n>>>1;ko(Tt[r])<t?e=r+1:n=r}return e}function Ec(t){(!Tt.length||!Tt.includes(t,Po&&t.allowRecurse?An+1:An))&&(t.id==null?Tt.push(t):Tt.splice(fR(t.id),0,t),qv())}function qv(){!Po&&!Th&&(Th=!0,ld=Wv.then(zv))}function dR(t){const e=Tt.indexOf(t);e>An&&Tt.splice(e,1)}function Kv(t){Z(t)?Ws.push(...t):(!Hn||!Hn.includes(t,t.allowRecurse?Kr+1:Kr))&&Ws.push(t),qv()}function wg(t,e=Po?An+1:0){for(;e<Tt.length;e++){const n=Tt[e];n&&n.pre&&(Tt.splice(e,1),e--,n())}}function Cl(t){if(Ws.length){const e=[...new Set(Ws)];if(Ws.length=0,Hn){Hn.push(...e);return}for(Hn=e,Hn.sort((n,r)=>ko(n)-ko(r)),Kr=0;Kr<Hn.length;Kr++)Hn[Kr]();Hn=null,Kr=0}}const ko=t=>t.id==null?1/0:t.id,pR=(t,e)=>{const n=ko(t)-ko(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function zv(t){Th=!1,Po=!0,Tt.sort(pR);const e=hn;try{for(An=0;An<Tt.length;An++){const n=Tt[An];n&&n.active!==!1&&wr(n,null,14)}}finally{An=0,Tt.length=0,Cl(),Po=!1,ld=null,(Tt.length||Ws.length)&&zv()}}function gR(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||xe;f&&(s=n.map(d=>$e(d)?d.trim():d)),h&&(s=n.map(wC))}let a,l=r[a=Iu(e)]||r[a=Iu(xn(e))];!l&&i&&(l=r[a=Iu(Ti(e))]),l&&tn(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,tn(c,t,6,s)}}function Gv(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ne(t)){const l=c=>{const u=Gv(c,e,!0);u&&(a=!0,je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Oe(t)&&r.set(t,null),null):(Z(i)?i.forEach(l=>o[l]=null):je(o,i),Oe(t)&&r.set(t,o),o)}function wc(t,e){return!t||!na(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,Ti(e))||ge(t,e))}let st=null,Tc=null;function Rl(t){const e=st;return st=t,Tc=t&&t.type.__scopeId||null,e}function oH(t){Tc=t}function aH(){Tc=null}function cd(t,e=st,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Mg(-1);const i=Rl(e);let o;try{o=t(...s)}finally{Rl(i),r._d&&Mg(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Au(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:v}=t;let T,y;const m=Rl(t);try{if(n.shapeFlag&4){const E=s||r;T=Yt(u.call(E,E,h,i,d,f,p)),y=l}else{const E=e;T=Yt(E.length>1?E(i,{attrs:l,slots:a,emit:c}):E(i,null)),y=e.props?l:_R(l)}}catch(E){fo.length=0,Ci(E,t,1),T=ye(Dt)}let I=T;if(y&&v!==!1){const E=Object.keys(y),{shapeFlag:R}=I;E.length&&R&7&&(o&&E.some(Jf)&&(y=yR(y,o)),I=Jn(I,y))}return n.dirs&&(I=Jn(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),T=I,Rl(m),T}function mR(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(si(r)){if(r.type!==Dt||r.children==="v-if"){if(e)return;e=r}}else return}return e}const _R=t=>{let e;for(const n in t)(n==="class"||n==="style"||na(n))&&((e||(e={}))[n]=t[n]);return e},yR=(t,e)=>{const n={};for(const r in t)(!Jf(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function vR(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Tg(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!wc(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Tg(r,o,c):!0:!!o;return!1}function Tg(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!wc(n,i))return!0}return!1}function ud({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Qv=t=>t.__isSuspense,ER={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,c){t==null?wR(e,n,r,s,i,o,a,l,c):TR(t,e,n,r,s,o,a,l,c)},hydrate:IR,create:fd,normalize:AR},hd=ER;function No(t,e){const n=t.props&&t.props[e];ne(n)&&n()}function wR(t,e,n,r,s,i,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=t.suspense=fd(t,s,r,e,h,n,i,o,a,l);c(null,f.pendingBranch=t.ssContent,h,null,r,f,i,o),f.deps>0?(No(t,"onPending"),No(t,"onFallback"),c(null,t.ssFallback,e,n,r,null,i,o),qs(f,t.ssFallback)):f.resolve(!1,!0)}function TR(t,e,n,r,s,i,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:p,pendingBranch:v,isInFallback:T,isHydrating:y}=h;if(v)h.pendingBranch=f,an(f,v)?(l(v,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():T&&(l(p,d,n,r,s,null,i,o,a),qs(h,d))):(h.pendingId++,y?(h.isHydrating=!1,h.activeBranch=v):c(v,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),T?(l(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():(l(p,d,n,r,s,null,i,o,a),qs(h,d))):p&&an(f,p)?(l(p,f,n,r,s,h,i,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0&&h.resolve()));else if(p&&an(f,p))l(p,f,n,r,s,h,i,o,a),qs(h,f);else if(No(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:m,pendingId:I}=h;m>0?setTimeout(()=>{h.pendingId===I&&h.fallback(d)},m):m===0&&h.fallback(d)}}function fd(t,e,n,r,s,i,o,a,l,c,u=!1){const{p:h,m:f,um:d,n:p,o:{parentNode:v,remove:T}}=c;let y;const m=CR(t);m&&e!=null&&e.pendingBranch&&(y=e.pendingId,e.deps++);const I=t.props?Ev(t.props.timeout):void 0,E={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof I=="number"?I:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(R=!1,D=!1){const{vnode:M,activeBranch:S,pendingBranch:K,pendingId:W,effects:te,parentComponent:B,container:ee}=E;if(E.isHydrating)E.isHydrating=!1;else if(!R){const he=S&&K.transition&&K.transition.mode==="out-in";he&&(S.transition.afterLeave=()=>{W===E.pendingId&&f(K,ee,Ee,0)});let{anchor:Ee}=E;S&&(Ee=p(S),d(S,B,E,!0)),he||f(K,ee,Ee,0)}qs(E,K),E.pendingBranch=null,E.isInFallback=!1;let q=E.parent,We=!1;for(;q;){if(q.pendingBranch){q.effects.push(...te),We=!0;break}q=q.parent}We||Kv(te),E.effects=[],m&&e&&e.pendingBranch&&y===e.pendingId&&(e.deps--,e.deps===0&&!D&&e.resolve()),No(M,"onResolve")},fallback(R){if(!E.pendingBranch)return;const{vnode:D,activeBranch:M,parentComponent:S,container:K,isSVG:W}=E;No(D,"onFallback");const te=p(M),B=()=>{E.isInFallback&&(h(null,R,K,te,S,null,W,a,l),qs(E,R))},ee=R.transition&&R.transition.mode==="out-in";ee&&(M.transition.afterLeave=B),E.isInFallback=!0,d(M,S,null,!0),ee||B()},move(R,D,M){E.activeBranch&&f(E.activeBranch,R,D,M),E.container=R},next(){return E.activeBranch&&p(E.activeBranch)},registerDep(R,D){const M=!!E.pendingBranch;M&&E.deps++;const S=R.vnode.el;R.asyncDep.catch(K=>{Ci(K,R,0)}).then(K=>{if(R.isUnmounted||E.isUnmounted||E.pendingId!==R.suspenseId)return;R.asyncResolved=!0;const{vnode:W}=R;bh(R,K,!1),S&&(W.el=S);const te=!S&&R.subTree.el;D(R,W,v(S||R.subTree.el),S?null:p(R.subTree),E,o,l),te&&T(te),ud(R,W.el),M&&--E.deps===0&&E.resolve()})},unmount(R,D){E.isUnmounted=!0,E.activeBranch&&d(E.activeBranch,n,R,D),E.pendingBranch&&d(E.pendingBranch,n,R,D)}};return E}function IR(t,e,n,r,s,i,o,a,l){const c=e.suspense=fd(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,i,o);return c.deps===0&&c.resolve(!1,!0),u}function AR(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Ig(r?n.default:n),t.ssFallback=r?Ig(n.fallback):ye(Dt)}function Ig(t){let e;if(ne(t)){const n=ri&&t._c;n&&(t._d=!1,Cn()),t=t(),n&&(t._d=!0,e=Xt,yE())}return Z(t)&&(t=mR(t)),t=Yt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Yv(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):Kv(t)}function qs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,ud(r,s))}function CR(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}function oa(t,e){return dd(t,null,e)}const $a={};function dn(t,e,n){return dd(t,e,n)}function dd(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=xe){var a;const l=kC()===((a=Ge)==null?void 0:a.scope)?Ge:null;let c,u=!1,h=!1;if(Ye(t)?(c=()=>t.value,u=Il(t)):js(t)?(c=()=>t,r=!0):Z(t)?(h=!0,u=t.some(E=>js(E)||Il(E)),c=()=>t.map(E=>{if(Ye(E))return E.value;if(js(E))return Gr(E);if(ne(E))return wr(E,l,2)})):ne(t)?e?c=()=>wr(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),tn(t,l,3,[d])}:c=hn,e&&r){const E=c;c=()=>Gr(E())}let f,d=E=>{f=m.onStop=()=>{wr(E,l,4)}},p;if(oi)if(d=hn,e?n&&tn(e,l,3,[c(),h?[]:void 0,d]):c(),s==="sync"){const E=db();p=E.__watcherHandles||(E.__watcherHandles=[])}else return hn;let v=h?new Array(t.length).fill($a):$a;const T=()=>{if(m.active)if(e){const E=m.run();(r||u||(h?E.some((R,D)=>bo(R,v[D])):bo(E,v)))&&(f&&f(),tn(e,l,3,[E,v===$a?void 0:h&&v[0]===$a?[]:v,d]),v=E)}else m.run()};T.allowRecurse=!!e;let y;s==="sync"?y=T:s==="post"?y=()=>ut(T,l&&l.suspense):(T.pre=!0,l&&(T.id=l.uid),y=()=>Ec(T));const m=new nd(c,y);e?n?T():v=m.run():s==="post"?ut(m.run.bind(m),l&&l.suspense):m.run();const I=()=>{m.stop(),l&&l.scope&&Xf(l.scope.effects,m)};return p&&p.push(I),I}function RR(t,e,n){const r=this.proxy,s=$e(t)?t.includes(".")?Jv(r,t):()=>r[t]:t.bind(r,r);let i;ne(e)?i=e:(i=e.handler,n=e);const o=Ge;ii(this);const a=dd(s,i.bind(r),n);return o?ii(o):ns(),a}function Jv(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Gr(t,e){if(!Oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ye(t))Gr(t.value,e);else if(Z(t))for(let n=0;n<t.length;n++)Gr(t[n],e);else if(mv(t)||Hs(t))t.forEach(n=>{Gr(n,e)});else if(vv(t))for(const n in t)Gr(t[n],e);return t}function lH(t,e){const n=st;if(n===null)return t;const r=Rc(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=xe]=e[i];o&&(ne(o)&&(o={mounted:o,updated:o}),o.deep&&Gr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function In(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Ii(),tn(l,n,8,[t.el,a,t,e]),Ai())}}function Xv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gd(()=>{t.isMounted=!0}),Ac(()=>{t.isUnmounting=!0}),t}const Qt=[Function,Array],Zv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qt,onEnter:Qt,onAfterEnter:Qt,onEnterCancelled:Qt,onBeforeLeave:Qt,onLeave:Qt,onAfterLeave:Qt,onLeaveCancelled:Qt,onBeforeAppear:Qt,onAppear:Qt,onAfterAppear:Qt,onAppearCancelled:Qt},bR={name:"BaseTransition",props:Zv,setup(t,{slots:e}){const n=xr(),r=Xv();let s;return()=>{const i=e.default&&pd(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==Dt){o=v;break}}const a=ue(t),{mode:l}=a;if(r.isLeaving)return Cu(o);const c=Ag(o);if(!c)return Cu(o);const u=Oo(c,a,r,n);ti(c,u);const h=n.subTree,f=h&&Ag(h);let d=!1;const{getTransitionKey:p}=c.type;if(p){const v=p();s===void 0?s=v:v!==s&&(s=v,d=!0)}if(f&&f.type!==Dt&&(!an(c,f)||d)){const v=Oo(f,a,r,n);if(ti(f,v),l==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Cu(o);l==="in-out"&&c.type!==Dt&&(v.delayLeave=(T,y,m)=>{const I=eE(r,f);I[String(f.key)]=f,T._leaveCb=()=>{y(),T._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=m})}return o}}},SR=bR;function eE(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Oo(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:v,onAppear:T,onAfterAppear:y,onAppearCancelled:m}=e,I=String(t.key),E=eE(n,t),R=(S,K)=>{S&&tn(S,r,9,K)},D=(S,K)=>{const W=K[1];R(S,K),Z(S)?S.every(te=>te.length<=1)&&W():S.length<=1&&W()},M={mode:i,persisted:o,beforeEnter(S){let K=a;if(!n.isMounted)if(s)K=v||a;else return;S._leaveCb&&S._leaveCb(!0);const W=E[I];W&&an(t,W)&&W.el._leaveCb&&W.el._leaveCb(),R(K,[S])},enter(S){let K=l,W=c,te=u;if(!n.isMounted)if(s)K=T||l,W=y||c,te=m||u;else return;let B=!1;const ee=S._enterCb=q=>{B||(B=!0,q?R(te,[S]):R(W,[S]),M.delayedLeave&&M.delayedLeave(),S._enterCb=void 0)};K?D(K,[S,ee]):ee()},leave(S,K){const W=String(t.key);if(S._enterCb&&S._enterCb(!0),n.isUnmounting)return K();R(h,[S]);let te=!1;const B=S._leaveCb=ee=>{te||(te=!0,K(),ee?R(p,[S]):R(d,[S]),S._leaveCb=void 0,E[W]===t&&delete E[W])};E[W]=t,f?D(f,[S,B]):B()},clone(S){return Oo(S,e,n,r)}};return M}function Cu(t){if(aa(t))return t=Jn(t),t.children=null,t}function Ag(t){return aa(t)?t.children?t.children[0]:void 0:t}function ti(t,e){t.shapeFlag&6&&t.component?ti(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function pd(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===yt?(o.patchFlag&128&&s++,r=r.concat(pd(o.children,e,a))):(e||o.type!==Dt)&&r.push(a!=null?Jn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function rr(t,e){return ne(t)?(()=>je({name:t.name},e,{setup:t}))():t}const ts=t=>!!t.type.__asyncLoader;function Cg(t){ne(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,f()),f=()=>{let d;return l||(d=l=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((v,T)=>{a(p,()=>v(h()),()=>T(p),u+1)});throw p}).then(p=>d!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return rr({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const d=Ge;if(c)return()=>Ru(c,d);const p=m=>{l=null,Ci(m,d,13,!r)};if(o&&d.suspense||oi)return f().then(m=>()=>Ru(m,d)).catch(m=>(p(m),()=>r?ye(r,{error:m}):null));const v=Je(!1),T=Je(),y=Je(!!s);return s&&setTimeout(()=>{y.value=!1},s),i!=null&&setTimeout(()=>{if(!v.value&&!T.value){const m=new Error(`Async component timed out after ${i}ms.`);p(m),T.value=m}},i),f().then(()=>{v.value=!0,d.parent&&aa(d.parent.vnode)&&Ec(d.parent.update)}).catch(m=>{p(m),T.value=m}),()=>{if(v.value&&c)return Ru(c,d);if(T.value&&r)return ye(r,{error:T.value});if(n&&!y.value)return ye(n)}}})}function Ru(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=ye(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const aa=t=>t.type.__isKeepAlive,PR={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=xr(),r=n.ctx;if(!r.renderer)return()=>{const m=e.default&&e.default();return m&&m.length===1?m[0]:m};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=r,f=h("div");r.activate=(m,I,E,R,D)=>{const M=m.component;c(m,I,E,0,a),l(M.vnode,m,I,E,M,a,R,m.slotScopeIds,D),ut(()=>{M.isDeactivated=!1,M.a&&co(M.a);const S=m.props&&m.props.onVnodeMounted;S&&Ft(S,M.parent,m)},a)},r.deactivate=m=>{const I=m.component;c(m,f,null,1,a),ut(()=>{I.da&&co(I.da);const E=m.props&&m.props.onVnodeUnmounted;E&&Ft(E,I.parent,m),I.isDeactivated=!0},a)};function d(m){bu(m),u(m,n,a,!0)}function p(m){s.forEach((I,E)=>{const R=Sh(I.type);R&&(!m||!m(R))&&v(E)})}function v(m){const I=s.get(m);!o||!an(I,o)?d(I):o&&bu(o),s.delete(m),i.delete(m)}dn(()=>[t.include,t.exclude],([m,I])=>{m&&p(E=>eo(m,E)),I&&p(E=>!eo(I,E))},{flush:"post",deep:!0});let T=null;const y=()=>{T!=null&&s.set(T,Su(n.subTree))};return gd(y),md(y),Ac(()=>{s.forEach(m=>{const{subTree:I,suspense:E}=n,R=Su(I);if(m.type===R.type&&m.key===R.key){bu(R);const D=R.component.da;D&&ut(D,E);return}d(m)})}),()=>{if(T=null,!e.default)return null;const m=e.default(),I=m[0];if(m.length>1)return o=null,m;if(!si(I)||!(I.shapeFlag&4)&&!(I.shapeFlag&128))return o=null,I;let E=Su(I);const R=E.type,D=Sh(ts(E)?E.type.__asyncResolved||{}:R),{include:M,exclude:S,max:K}=t;if(M&&(!D||!eo(M,D))||S&&D&&eo(S,D))return o=E,I;const W=E.key==null?R:E.key,te=s.get(W);return E.el&&(E=Jn(E),I.shapeFlag&128&&(I.ssContent=E)),T=W,te?(E.el=te.el,E.component=te.component,E.transition&&ti(E,E.transition),E.shapeFlag|=512,i.delete(W),i.add(W)):(i.add(W),K&&i.size>parseInt(K,10)&&v(i.values().next().value)),E.shapeFlag|=256,o=E,Qv(I.type)?I:E}}},kR=PR;function eo(t,e){return Z(t)?t.some(n=>eo(n,e)):$e(t)?t.split(",").includes(e):_C(t)?t.test(e):!1}function tE(t,e){rE(t,"a",e)}function nE(t,e){rE(t,"da",e)}function rE(t,e,n=Ge){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ic(e,r,n),n){let s=n.parent;for(;s&&s.parent;)aa(s.parent.vnode)&&NR(r,e,n,s),s=s.parent}}function NR(t,e,n,r){const s=Ic(e,t,r,!0);sE(()=>{Xf(r[e],s)},n)}function bu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Su(t){return t.shapeFlag&128?t.ssContent:t}function Ic(t,e,n=Ge,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ii(),ii(n);const a=tn(e,n,t,o);return ns(),Ai(),a});return r?s.unshift(i):s.push(i),i}}const sr=t=>(e,n=Ge)=>(!oi||t==="sp")&&Ic(t,(...r)=>e(...r),n),OR=sr("bm"),gd=sr("m"),DR=sr("bu"),md=sr("u"),Ac=sr("bum"),sE=sr("um"),xR=sr("sp"),MR=sr("rtg"),LR=sr("rtc");function iE(t,e=Ge){Ic("ec",t,e)}const _d="components",VR="directives";function cH(t,e){return yd(_d,t,!0,e)||t}const oE=Symbol.for("v-ndc");function FR(t){return $e(t)?yd(_d,t,!1)||t:t||oE}function uH(t){return yd(VR,t)}function yd(t,e,n=!0,r=!1){const s=st||Ge;if(s){const i=s.type;if(t===_d){const a=Sh(i,!1);if(a&&(a===e||a===xn(e)||a===sa(xn(e))))return i}const o=Rg(s[t]||i[t],e)||Rg(s.appContext[t],e);return!o&&r?i:o}}function Rg(t,e){return t&&(t[e]||t[xn(e)]||t[sa(xn(e))])}function hH(t,e,n,r){let s;const i=n&&n[r];if(Z(t)||$e(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function fH(t,e,n={},r,s){if(st.isCE||st.parent&&ts(st.parent)&&st.parent.isCE)return e!=="default"&&(n.name=e),ye("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Cn();const o=i&&aE(i(n)),a=jn(yt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function aE(t){return t.some(e=>si(e)?!(e.type===Dt||e.type===yt&&!aE(e.children)):!0)?t:null}const Ih=t=>t?AE(t)?Rc(t)||t.proxy:Ih(t.parent):null,uo=je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ih(t.parent),$root:t=>Ih(t.root),$emit:t=>t.emit,$options:t=>vd(t),$forceUpdate:t=>t.f||(t.f=()=>Ec(t.update)),$nextTick:t=>t.n||(t.n=Dr.bind(t.proxy)),$watch:t=>RR.bind(t)}),Pu=(t,e)=>t!==xe&&!t.__isScriptSetup&&ge(t,e),UR={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Pu(r,e))return o[e]=1,r[e];if(s!==xe&&ge(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ge(c,e))return o[e]=3,i[e];if(n!==xe&&ge(n,e))return o[e]=4,n[e];Ah&&(o[e]=0)}}const u=uo[e];let h,f;if(u)return e==="$attrs"&&Bt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==xe&&ge(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,ge(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Pu(s,e)?(s[e]=n,!0):r!==xe&&ge(r,e)?(r[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==xe&&ge(t,o)||Pu(e,o)||(a=i[0])&&ge(a,o)||ge(r,o)||ge(uo,o)||ge(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bg(t){return Z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ah=!0;function $R(t){const e=vd(t),n=t.proxy,r=t.ctx;Ah=!1,e.beforeCreate&&Sg(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:v,deactivated:T,beforeDestroy:y,beforeUnmount:m,destroyed:I,unmounted:E,render:R,renderTracked:D,renderTriggered:M,errorCaptured:S,serverPrefetch:K,expose:W,inheritAttrs:te,components:B,directives:ee,filters:q}=e;if(c&&BR(c,r,null),o)for(const Ee in o){const we=o[Ee];ne(we)&&(r[Ee]=we.bind(n))}if(s){const Ee=s.call(n,n);Oe(Ee)&&(t.data=nn(Ee))}if(Ah=!0,i)for(const Ee in i){const we=i[Ee],Fn=ne(we)?we.bind(n,n):ne(we.get)?we.get.bind(n,n):hn,or=!ne(we)&&ne(we.set)?we.set.bind(n):hn,En=be({get:Fn,set:or});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>En.value,set:Lt=>En.value=Lt})}if(a)for(const Ee in a)lE(a[Ee],r,n,Ee);if(l){const Ee=ne(l)?l.call(n):l;Reflect.ownKeys(Ee).forEach(we=>{Nn(we,Ee[we])})}u&&Sg(u,t,"c");function he(Ee,we){Z(we)?we.forEach(Fn=>Ee(Fn.bind(n))):we&&Ee(we.bind(n))}if(he(OR,h),he(gd,f),he(DR,d),he(md,p),he(tE,v),he(nE,T),he(iE,S),he(LR,D),he(MR,M),he(Ac,m),he(sE,E),he(xR,K),Z(W))if(W.length){const Ee=t.exposed||(t.exposed={});W.forEach(we=>{Object.defineProperty(Ee,we,{get:()=>n[we],set:Fn=>n[we]=Fn})})}else t.exposed||(t.exposed={});R&&t.render===hn&&(t.render=R),te!=null&&(t.inheritAttrs=te),B&&(t.components=B),ee&&(t.directives=ee)}function BR(t,e,n=hn){Z(t)&&(t=Ch(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=Ue(s.from||r,s.default,!0):i=Ue(s.from||r):i=Ue(s),Ye(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Sg(t,e,n){tn(Z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function lE(t,e,n,r){const s=r.includes(".")?Jv(n,r):()=>n[r];if($e(t)){const i=e[t];ne(i)&&dn(s,i)}else if(ne(t))dn(s,t.bind(n));else if(Oe(t))if(Z(t))t.forEach(i=>lE(i,e,n,r));else{const i=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(i)&&dn(s,i,t)}}function vd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>bl(l,c,o,!0)),bl(l,e,o)),Oe(e)&&i.set(e,l),l}function bl(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&bl(t,i,n,!0),s&&s.forEach(o=>bl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=HR[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const HR={data:Pg,props:kg,emits:kg,methods:to,computed:to,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:to,directives:to,watch:WR,provide:Pg,inject:jR};function Pg(t,e){return e?t?function(){return je(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function jR(t,e){return to(Ch(t),Ch(e))}function Ch(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function to(t,e){return t?je(Object.create(null),t,e):e}function kg(t,e){return t?Z(t)&&Z(e)?[...new Set([...t,...e])]:je(Object.create(null),bg(t),bg(e??{})):e}function WR(t,e){if(!t)return e;if(!e)return t;const n=je(Object.create(null),t);for(const r in e)n[r]=kt(t[r],e[r]);return n}function cE(){return{app:null,config:{isNativeTag:pC,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qR=0;function KR(t,e){return function(r,s=null){ne(r)||(r=je({},r)),s!=null&&!Oe(s)&&(s=null);const i=cE(),o=new Set;let a=!1;const l=i.app={_uid:qR++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:RE,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&ne(c.install)?(o.add(c),c.install(l,...u)):ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const f=ye(r,s);return f.appContext=i,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Rc(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Do=l;try{return c()}finally{Do=null}}};return l}}let Do=null;function Nn(t,e){if(Ge){let n=Ge.provides;const r=Ge.parent&&Ge.parent.provides;r===n&&(n=Ge.provides=Object.create(r)),n[t]=e}}function Ue(t,e,n=!1){const r=Ge||st;if(r||Do){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Do._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ne(e)?e.call(r&&r.proxy):e}}function uE(){return!!(Ge||st||Do)}function zR(t,e,n,r=!1){const s={},i={};wl(i,Cc,1),t.propsDefaults=Object.create(null),hE(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ia(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function GR(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ue(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(wc(t.emitsOptions,f))continue;const d=e[f];if(l)if(ge(i,f))d!==i[f]&&(i[f]=d,c=!0);else{const p=xn(f);s[p]=Rh(l,a,p,d,t,!1)}else d!==i[f]&&(i[f]=d,c=!0)}}}else{hE(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!ge(e,h)&&((u=Ti(h))===h||!ge(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Rh(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ge(e,h))&&(delete i[h],c=!0)}c&&Yn(t,"set","$attrs")}function hE(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(lo(l))continue;const c=e[l];let u;s&&ge(s,u=xn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:wc(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=ue(n),c=a||xe;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Rh(s,l,h,c[h],t,!ge(c,h))}}return o}function Rh(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ge(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ne(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(ii(s),r=c[n]=l.call(null,e),ns())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ti(n))&&(r=!0))}return r}function fE(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!ne(t)){const u=h=>{l=!0;const[f,d]=fE(h,e,!0);je(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Oe(t)&&r.set(t,Bs),Bs;if(Z(i))for(let u=0;u<i.length;u++){const h=xn(i[u]);Ng(h)&&(o[h]=xe)}else if(i)for(const u in i){const h=xn(u);if(Ng(h)){const f=i[u],d=o[h]=Z(f)||ne(f)?{type:f}:je({},f);if(d){const p=xg(Boolean,d.type),v=xg(String,d.type);d[0]=p>-1,d[1]=v<0||p<v,(p>-1||ge(d,"default"))&&a.push(h)}}}const c=[o,a];return Oe(t)&&r.set(t,c),c}function Ng(t){return t[0]!=="$"}function Og(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Dg(t,e){return Og(t)===Og(e)}function xg(t,e){return Z(e)?e.findIndex(n=>Dg(n,t)):ne(e)&&Dg(e,t)?0:-1}const dE=t=>t[0]==="_"||t==="$stable",Ed=t=>Z(t)?t.map(Yt):[Yt(t)],QR=(t,e,n)=>{if(e._n)return e;const r=cd((...s)=>Ed(e(...s)),n);return r._c=!1,r},pE=(t,e,n)=>{const r=t._ctx;for(const s in t){if(dE(s))continue;const i=t[s];if(ne(i))e[s]=QR(s,i,r);else if(i!=null){const o=Ed(i);e[s]=()=>o}}},gE=(t,e)=>{const n=Ed(e);t.slots.default=()=>n},YR=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),wl(e,"_",n)):pE(e,t.slots={})}else t.slots={},e&&gE(t,e);wl(t.slots,Cc,1)},JR=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(je(s,e),!n&&a===1&&delete s._):(i=!e.$stable,pE(e,s)),o=e}else e&&(gE(t,e),o={default:1});if(i)for(const a in s)!dE(a)&&!(a in o)&&delete s[a]};function Sl(t,e,n,r,s=!1){if(Z(t)){t.forEach((f,d)=>Sl(f,e&&(Z(e)?e[d]:e),n,r,s));return}if(ts(r)&&!s)return;const i=r.shapeFlag&4?Rc(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===xe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&($e(c)?(u[c]=null,ge(h,c)&&(h[c]=null)):Ye(c)&&(c.value=null)),ne(l))wr(l,a,12,[o,u]);else{const f=$e(l),d=Ye(l);if(f||d){const p=()=>{if(t.f){const v=f?ge(h,l)?h[l]:u[l]:l.value;s?Z(v)&&Xf(v,i):Z(v)?v.includes(i)||v.push(i):f?(u[l]=[i],ge(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,ge(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,ut(p,n)):p()}}}let lr=!1;const Ba=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Ha=t=>t.nodeType===8;function XR(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(y,m)=>{if(!m.hasChildNodes()){n(null,y,m),Cl(),m._vnode=y;return}lr=!1,h(m.firstChild,y,null,null,null),Cl(),m._vnode=y,lr&&console.error("Hydration completed but contains mismatches.")},h=(y,m,I,E,R,D=!1)=>{const M=Ha(y)&&y.data==="[",S=()=>v(y,m,I,E,R,M),{type:K,ref:W,shapeFlag:te,patchFlag:B}=m;let ee=y.nodeType;m.el=y,B===-2&&(D=!1,m.dynamicChildren=null);let q=null;switch(K){case ni:ee!==3?m.children===""?(l(m.el=s(""),o(y),y),q=y):q=S():(y.data!==m.children&&(lr=!0,y.data=m.children),q=i(y));break;case Dt:ee!==8||M?q=S():q=i(y);break;case ho:if(M&&(y=i(y),ee=y.nodeType),ee===1||ee===3){q=y;const We=!m.children.length;for(let he=0;he<m.staticCount;he++)We&&(m.children+=q.nodeType===1?q.outerHTML:q.data),he===m.staticCount-1&&(m.anchor=q),q=i(q);return M?i(q):q}else S();break;case yt:M?q=p(y,m,I,E,R,D):q=S();break;default:if(te&1)ee!==1||m.type.toLowerCase()!==y.tagName.toLowerCase()?q=S():q=f(y,m,I,E,R,D);else if(te&6){m.slotScopeIds=R;const We=o(y);if(e(m,We,null,I,E,Ba(We),D),q=M?T(y):i(y),q&&Ha(q)&&q.data==="teleport end"&&(q=i(q)),ts(m)){let he;M?(he=ye(yt),he.anchor=q?q.previousSibling:We.lastChild):he=y.nodeType===3?IE(""):ye("div"),he.el=y,m.component.subTree=he}}else te&64?ee!==8?q=S():q=m.type.hydrate(y,m,I,E,R,D,t,d):te&128&&(q=m.type.hydrate(y,m,I,E,Ba(o(y)),R,D,t,h))}return W!=null&&Sl(W,null,E,m),q},f=(y,m,I,E,R,D)=>{D=D||!!m.dynamicChildren;const{type:M,props:S,patchFlag:K,shapeFlag:W,dirs:te}=m,B=M==="input"&&te||M==="option";if(B||K!==-1){if(te&&In(m,null,I,"created"),S)if(B||!D||K&48)for(const q in S)(B&&q.endsWith("value")||na(q)&&!lo(q))&&r(y,q,null,S[q],!1,void 0,I);else S.onClick&&r(y,"onClick",null,S.onClick,!1,void 0,I);let ee;if((ee=S&&S.onVnodeBeforeMount)&&Ft(ee,I,m),te&&In(m,null,I,"beforeMount"),((ee=S&&S.onVnodeMounted)||te)&&Yv(()=>{ee&&Ft(ee,I,m),te&&In(m,null,I,"mounted")},E),W&16&&!(S&&(S.innerHTML||S.textContent))){let q=d(y.firstChild,m,y,I,E,R,D);for(;q;){lr=!0;const We=q;q=q.nextSibling,a(We)}}else W&8&&y.textContent!==m.children&&(lr=!0,y.textContent=m.children)}return y.nextSibling},d=(y,m,I,E,R,D,M)=>{M=M||!!m.dynamicChildren;const S=m.children,K=S.length;for(let W=0;W<K;W++){const te=M?S[W]:S[W]=Yt(S[W]);if(y)y=h(y,te,E,R,D,M);else{if(te.type===ni&&!te.children)continue;lr=!0,n(null,te,I,null,E,R,Ba(I),D)}}return y},p=(y,m,I,E,R,D)=>{const{slotScopeIds:M}=m;M&&(R=R?R.concat(M):M);const S=o(y),K=d(i(y),m,S,I,E,R,D);return K&&Ha(K)&&K.data==="]"?i(m.anchor=K):(lr=!0,l(m.anchor=c("]"),S,K),K)},v=(y,m,I,E,R,D)=>{if(lr=!0,m.el=null,D){const K=T(y);for(;;){const W=i(y);if(W&&W!==K)a(W);else break}}const M=i(y),S=o(y);return a(y),n(null,m,S,M,I,E,Ba(S),R),M},T=y=>{let m=0;for(;y;)if(y=i(y),y&&Ha(y)&&(y.data==="["&&m++,y.data==="]")){if(m===0)return i(y);m--}return y};return[u,h]}const ut=Yv;function ZR(t){return mE(t)}function eb(t){return mE(t,XR)}function mE(t,e){const n=yh();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=hn,insertStaticContent:p}=t,v=(g,_,w,A=null,b=null,P=null,$=!1,x=null,L=!!_.dynamicChildren)=>{if(g===_)return;g&&!an(g,_)&&(A=C(g),Lt(g,b,P,!0),g=null),_.patchFlag===-2&&(L=!1,_.dynamicChildren=null);const{type:k,ref:Y,shapeFlag:z}=_;switch(k){case ni:T(g,_,w,A);break;case Dt:y(g,_,w,A);break;case ho:g==null&&m(_,w,A,$);break;case yt:B(g,_,w,A,b,P,$,x,L);break;default:z&1?R(g,_,w,A,b,P,$,x,L):z&6?ee(g,_,w,A,b,P,$,x,L):(z&64||z&128)&&k.process(g,_,w,A,b,P,$,x,L,V)}Y!=null&&b&&Sl(Y,g&&g.ref,P,_||g,!_)},T=(g,_,w,A)=>{if(g==null)r(_.el=a(_.children),w,A);else{const b=_.el=g.el;_.children!==g.children&&c(b,_.children)}},y=(g,_,w,A)=>{g==null?r(_.el=l(_.children||""),w,A):_.el=g.el},m=(g,_,w,A)=>{[g.el,g.anchor]=p(g.children,_,w,A,g.el,g.anchor)},I=({el:g,anchor:_},w,A)=>{let b;for(;g&&g!==_;)b=f(g),r(g,w,A),g=b;r(_,w,A)},E=({el:g,anchor:_})=>{let w;for(;g&&g!==_;)w=f(g),s(g),g=w;s(_)},R=(g,_,w,A,b,P,$,x,L)=>{$=$||_.type==="svg",g==null?D(_,w,A,b,P,$,x,L):K(g,_,b,P,$,x,L)},D=(g,_,w,A,b,P,$,x)=>{let L,k;const{type:Y,props:z,shapeFlag:J,transition:se,dirs:le}=g;if(L=g.el=o(g.type,P,z&&z.is,z),J&8?u(L,g.children):J&16&&S(g.children,L,null,A,b,P&&Y!=="foreignObject",$,x),le&&In(g,null,A,"created"),M(L,g,g.scopeId,$,A),z){for(const Pe in z)Pe!=="value"&&!lo(Pe)&&i(L,Pe,null,z[Pe],P,g.children,A,b,pt);"value"in z&&i(L,"value",null,z.value),(k=z.onVnodeBeforeMount)&&Ft(k,A,g)}le&&In(g,null,A,"beforeMount");const Ne=(!b||b&&!b.pendingBranch)&&se&&!se.persisted;Ne&&se.beforeEnter(L),r(L,_,w),((k=z&&z.onVnodeMounted)||Ne||le)&&ut(()=>{k&&Ft(k,A,g),Ne&&se.enter(L),le&&In(g,null,A,"mounted")},b)},M=(g,_,w,A,b)=>{if(w&&d(g,w),A)for(let P=0;P<A.length;P++)d(g,A[P]);if(b){let P=b.subTree;if(_===P){const $=b.vnode;M(g,$,$.scopeId,$.slotScopeIds,b.parent)}}},S=(g,_,w,A,b,P,$,x,L=0)=>{for(let k=L;k<g.length;k++){const Y=g[k]=x?fr(g[k]):Yt(g[k]);v(null,Y,_,w,A,b,P,$,x)}},K=(g,_,w,A,b,P,$)=>{const x=_.el=g.el;let{patchFlag:L,dynamicChildren:k,dirs:Y}=_;L|=g.patchFlag&16;const z=g.props||xe,J=_.props||xe;let se;w&&Ur(w,!1),(se=J.onVnodeBeforeUpdate)&&Ft(se,w,_,g),Y&&In(_,g,w,"beforeUpdate"),w&&Ur(w,!0);const le=b&&_.type!=="foreignObject";if(k?W(g.dynamicChildren,k,x,w,A,le,P):$||we(g,_,x,null,w,A,le,P,!1),L>0){if(L&16)te(x,_,z,J,w,A,b);else if(L&2&&z.class!==J.class&&i(x,"class",null,J.class,b),L&4&&i(x,"style",z.style,J.style,b),L&8){const Ne=_.dynamicProps;for(let Pe=0;Pe<Ne.length;Pe++){const qe=Ne[Pe],sn=z[qe],Rs=J[qe];(Rs!==sn||qe==="value")&&i(x,qe,sn,Rs,b,g.children,w,A,pt)}}L&1&&g.children!==_.children&&u(x,_.children)}else!$&&k==null&&te(x,_,z,J,w,A,b);((se=J.onVnodeUpdated)||Y)&&ut(()=>{se&&Ft(se,w,_,g),Y&&In(_,g,w,"updated")},A)},W=(g,_,w,A,b,P,$)=>{for(let x=0;x<_.length;x++){const L=g[x],k=_[x],Y=L.el&&(L.type===yt||!an(L,k)||L.shapeFlag&70)?h(L.el):w;v(L,k,Y,null,A,b,P,$,!0)}},te=(g,_,w,A,b,P,$)=>{if(w!==A){if(w!==xe)for(const x in w)!lo(x)&&!(x in A)&&i(g,x,w[x],null,$,_.children,b,P,pt);for(const x in A){if(lo(x))continue;const L=A[x],k=w[x];L!==k&&x!=="value"&&i(g,x,k,L,$,_.children,b,P,pt)}"value"in A&&i(g,"value",w.value,A.value)}},B=(g,_,w,A,b,P,$,x,L)=>{const k=_.el=g?g.el:a(""),Y=_.anchor=g?g.anchor:a("");let{patchFlag:z,dynamicChildren:J,slotScopeIds:se}=_;se&&(x=x?x.concat(se):se),g==null?(r(k,w,A),r(Y,w,A),S(_.children,w,Y,b,P,$,x,L)):z>0&&z&64&&J&&g.dynamicChildren?(W(g.dynamicChildren,J,w,b,P,$,x),(_.key!=null||b&&_===b.subTree)&&_E(g,_,!0)):we(g,_,w,Y,b,P,$,x,L)},ee=(g,_,w,A,b,P,$,x,L)=>{_.slotScopeIds=x,g==null?_.shapeFlag&512?b.ctx.activate(_,w,A,$,L):q(_,w,A,b,P,$,L):We(g,_,L)},q=(g,_,w,A,b,P,$)=>{const x=g.component=ob(g,A,b);if(aa(g)&&(x.ctx.renderer=V),ab(x),x.asyncDep){if(b&&b.registerDep(x,he),!g.el){const L=x.subTree=ye(Dt);y(null,L,_,w)}return}he(x,g,_,w,b,P,$)},We=(g,_,w)=>{const A=_.component=g.component;if(vR(g,_,w))if(A.asyncDep&&!A.asyncResolved){Ee(A,_,w);return}else A.next=_,dR(A.update),A.update();else _.el=g.el,A.vnode=_},he=(g,_,w,A,b,P,$)=>{const x=()=>{if(g.isMounted){let{next:Y,bu:z,u:J,parent:se,vnode:le}=g,Ne=Y,Pe;Ur(g,!1),Y?(Y.el=le.el,Ee(g,Y,$)):Y=le,z&&co(z),(Pe=Y.props&&Y.props.onVnodeBeforeUpdate)&&Ft(Pe,se,Y,le),Ur(g,!0);const qe=Au(g),sn=g.subTree;g.subTree=qe,v(sn,qe,h(sn.el),C(sn),g,b,P),Y.el=qe.el,Ne===null&&ud(g,qe.el),J&&ut(J,b),(Pe=Y.props&&Y.props.onVnodeUpdated)&&ut(()=>Ft(Pe,se,Y,le),b)}else{let Y;const{el:z,props:J}=_,{bm:se,m:le,parent:Ne}=g,Pe=ts(_);if(Ur(g,!1),se&&co(se),!Pe&&(Y=J&&J.onVnodeBeforeMount)&&Ft(Y,Ne,_),Ur(g,!0),z&&Te){const qe=()=>{g.subTree=Au(g),Te(z,g.subTree,g,b,null)};Pe?_.type.__asyncLoader().then(()=>!g.isUnmounted&&qe()):qe()}else{const qe=g.subTree=Au(g);v(null,qe,w,A,g,b,P),_.el=qe.el}if(le&&ut(le,b),!Pe&&(Y=J&&J.onVnodeMounted)){const qe=_;ut(()=>Ft(Y,Ne,qe),b)}(_.shapeFlag&256||Ne&&ts(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&g.a&&ut(g.a,b),g.isMounted=!0,_=w=A=null}},L=g.effect=new nd(x,()=>Ec(k),g.scope),k=g.update=()=>L.run();k.id=g.uid,Ur(g,!0),k()},Ee=(g,_,w)=>{_.component=g;const A=g.vnode.props;g.vnode=_,g.next=null,GR(g,_.props,A,w),JR(g,_.children,w),Ii(),wg(),Ai()},we=(g,_,w,A,b,P,$,x,L=!1)=>{const k=g&&g.children,Y=g?g.shapeFlag:0,z=_.children,{patchFlag:J,shapeFlag:se}=_;if(J>0){if(J&128){or(k,z,w,A,b,P,$,x,L);return}else if(J&256){Fn(k,z,w,A,b,P,$,x,L);return}}se&8?(Y&16&&pt(k,b,P),z!==k&&u(w,z)):Y&16?se&16?or(k,z,w,A,b,P,$,x,L):pt(k,b,P,!0):(Y&8&&u(w,""),se&16&&S(z,w,A,b,P,$,x,L))},Fn=(g,_,w,A,b,P,$,x,L)=>{g=g||Bs,_=_||Bs;const k=g.length,Y=_.length,z=Math.min(k,Y);let J;for(J=0;J<z;J++){const se=_[J]=L?fr(_[J]):Yt(_[J]);v(g[J],se,w,null,b,P,$,x,L)}k>Y?pt(g,b,P,!0,!1,z):S(_,w,A,b,P,$,x,L,z)},or=(g,_,w,A,b,P,$,x,L)=>{let k=0;const Y=_.length;let z=g.length-1,J=Y-1;for(;k<=z&&k<=J;){const se=g[k],le=_[k]=L?fr(_[k]):Yt(_[k]);if(an(se,le))v(se,le,w,null,b,P,$,x,L);else break;k++}for(;k<=z&&k<=J;){const se=g[z],le=_[J]=L?fr(_[J]):Yt(_[J]);if(an(se,le))v(se,le,w,null,b,P,$,x,L);else break;z--,J--}if(k>z){if(k<=J){const se=J+1,le=se<Y?_[se].el:A;for(;k<=J;)v(null,_[k]=L?fr(_[k]):Yt(_[k]),w,le,b,P,$,x,L),k++}}else if(k>J)for(;k<=z;)Lt(g[k],b,P,!0),k++;else{const se=k,le=k,Ne=new Map;for(k=le;k<=J;k++){const Ht=_[k]=L?fr(_[k]):Yt(_[k]);Ht.key!=null&&Ne.set(Ht.key,k)}let Pe,qe=0;const sn=J-le+1;let Rs=!1,ug=0;const $i=new Array(sn);for(k=0;k<sn;k++)$i[k]=0;for(k=se;k<=z;k++){const Ht=g[k];if(qe>=sn){Lt(Ht,b,P,!0);continue}let wn;if(Ht.key!=null)wn=Ne.get(Ht.key);else for(Pe=le;Pe<=J;Pe++)if($i[Pe-le]===0&&an(Ht,_[Pe])){wn=Pe;break}wn===void 0?Lt(Ht,b,P,!0):($i[wn-le]=k+1,wn>=ug?ug=wn:Rs=!0,v(Ht,_[wn],w,null,b,P,$,x,L),qe++)}const hg=Rs?tb($i):Bs;for(Pe=hg.length-1,k=sn-1;k>=0;k--){const Ht=le+k,wn=_[Ht],fg=Ht+1<Y?_[Ht+1].el:A;$i[k]===0?v(null,wn,w,fg,b,P,$,x,L):Rs&&(Pe<0||k!==hg[Pe]?En(wn,w,fg,2):Pe--)}}},En=(g,_,w,A,b=null)=>{const{el:P,type:$,transition:x,children:L,shapeFlag:k}=g;if(k&6){En(g.component.subTree,_,w,A);return}if(k&128){g.suspense.move(_,w,A);return}if(k&64){$.move(g,_,w,V);return}if($===yt){r(P,_,w);for(let z=0;z<L.length;z++)En(L[z],_,w,A);r(g.anchor,_,w);return}if($===ho){I(g,_,w);return}if(A!==2&&k&1&&x)if(A===0)x.beforeEnter(P),r(P,_,w),ut(()=>x.enter(P),b);else{const{leave:z,delayLeave:J,afterLeave:se}=x,le=()=>r(P,_,w),Ne=()=>{z(P,()=>{le(),se&&se()})};J?J(P,le,Ne):Ne()}else r(P,_,w)},Lt=(g,_,w,A=!1,b=!1)=>{const{type:P,props:$,ref:x,children:L,dynamicChildren:k,shapeFlag:Y,patchFlag:z,dirs:J}=g;if(x!=null&&Sl(x,null,w,g,!0),Y&256){_.ctx.deactivate(g);return}const se=Y&1&&J,le=!ts(g);let Ne;if(le&&(Ne=$&&$.onVnodeBeforeUnmount)&&Ft(Ne,_,g),Y&6)xa(g.component,w,A);else{if(Y&128){g.suspense.unmount(w,A);return}se&&In(g,null,_,"beforeUnmount"),Y&64?g.type.remove(g,_,w,b,V,A):k&&(P!==yt||z>0&&z&64)?pt(k,_,w,!1,!0):(P===yt&&z&384||!b&&Y&16)&&pt(L,_,w),A&&As(g)}(le&&(Ne=$&&$.onVnodeUnmounted)||se)&&ut(()=>{Ne&&Ft(Ne,_,g),se&&In(g,null,_,"unmounted")},w)},As=g=>{const{type:_,el:w,anchor:A,transition:b}=g;if(_===yt){Cs(w,A);return}if(_===ho){E(g);return}const P=()=>{s(w),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(g.shapeFlag&1&&b&&!b.persisted){const{leave:$,delayLeave:x}=b,L=()=>$(w,P);x?x(g.el,P,L):L()}else P()},Cs=(g,_)=>{let w;for(;g!==_;)w=f(g),s(g),g=w;s(_)},xa=(g,_,w)=>{const{bum:A,scope:b,update:P,subTree:$,um:x}=g;A&&co(A),b.stop(),P&&(P.active=!1,Lt($,g,_,w)),x&&ut(x,_),ut(()=>{g.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},pt=(g,_,w,A=!1,b=!1,P=0)=>{for(let $=P;$<g.length;$++)Lt(g[$],_,w,A,b)},C=g=>g.shapeFlag&6?C(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),j=(g,_,w)=>{g==null?_._vnode&&Lt(_._vnode,null,null,!0):v(_._vnode||null,g,_,null,null,null,w),wg(),Cl(),_._vnode=g},V={p:v,um:Lt,m:En,r:As,mt:q,mc:S,pc:we,pbc:W,n:C,o:t};let Q,Te;return e&&([Q,Te]=e(V)),{render:j,hydrate:Q,createApp:KR(j,Q)}}function Ur({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function _E(t,e,n=!1){const r=t.children,s=e.children;if(Z(r)&&Z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=fr(s[i]),a.el=o.el),n||_E(o,a)),a.type===ni&&(a.el=o.el)}}function tb(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const nb=t=>t.__isTeleport,yt=Symbol.for("v-fgt"),ni=Symbol.for("v-txt"),Dt=Symbol.for("v-cmt"),ho=Symbol.for("v-stc"),fo=[];let Xt=null;function Cn(t=!1){fo.push(Xt=t?null:[])}function yE(){fo.pop(),Xt=fo[fo.length-1]||null}let ri=1;function Mg(t){ri+=t}function vE(t){return t.dynamicChildren=ri>0?Xt||Bs:null,yE(),ri>0&&Xt&&Xt.push(t),t}function dH(t,e,n,r,s,i){return vE(wE(t,e,n,r,s,i,!0))}function jn(t,e,n,r,s){return vE(ye(t,e,n,r,s,!0))}function si(t){return t?t.__v_isVNode===!0:!1}function an(t,e){return t.type===e.type&&t.key===e.key}const Cc="__vInternal",EE=({key:t})=>t??null,hl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||Ye(t)||ne(t)?{i:st,r:t,k:e,f:!!n}:t:null);function wE(t,e=null,n=null,r=0,s=null,i=t===yt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&EE(e),ref:e&&hl(e),scopeId:Tc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:st};return a?(wd(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),ri>0&&!o&&Xt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Xt.push(l),l}const ye=rb;function rb(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===oE)&&(t=Dt),si(t)){const a=Jn(t,e,!0);return n&&wd(a,n),ri>0&&!i&&Xt&&(a.shapeFlag&6?Xt[Xt.indexOf(t)]=a:Xt.push(a)),a.patchFlag|=-2,a}if(hb(t)&&(t=t.__vccOpts),e){e=TE(e);let{class:a,style:l}=e;a&&!$e(a)&&(e.class=yc(a)),Oe(l)&&(Lv(l)&&!Z(l)&&(l=je({},l)),e.style=_c(l))}const o=$e(t)?1:Qv(t)?128:nb(t)?64:Oe(t)?4:ne(t)?2:0;return wE(t,e,n,r,s,o,i,!0)}function TE(t){return t?Lv(t)||Cc in t?je({},t):t:null}function Jn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Td(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&EE(a),ref:e&&e.ref?n&&s?Z(s)?s.concat(hl(e)):[s,hl(e)]:hl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==yt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jn(t.ssContent),ssFallback:t.ssFallback&&Jn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function IE(t=" ",e=0){return ye(ni,null,t,e)}function pH(t,e){const n=ye(ho,null,t);return n.staticCount=e,n}function gH(t="",e=!1){return e?(Cn(),jn(Dt,null,t)):ye(Dt,null,t)}function Yt(t){return t==null||typeof t=="boolean"?ye(Dt):Z(t)?ye(yt,null,t.slice()):typeof t=="object"?fr(t):ye(ni,null,String(t))}function fr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Jn(t)}function wd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),wd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Cc in e)?e._ctx=st:s===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:st},n=32):(e=String(e),r&64?(n=16,e=[IE(e)]):n=8);t.children=e,t.shapeFlag|=n}function Td(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=yc([e.class,r.class]));else if(s==="style")e.style=_c([e.style,r.style]);else if(na(s)){const i=e[s],o=r[s];o&&i!==o&&!(Z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ft(t,e,n,r=null){tn(t,e,7,[n,r])}const sb=cE();let ib=0;function ob(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||sb,i={uid:ib++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Iv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fE(r,s),emitsOptions:Gv(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=gR.bind(null,i),t.ce&&t.ce(i),i}let Ge=null;const xr=()=>Ge||st;let Id,bs,Lg="__VUE_INSTANCE_SETTERS__";(bs=yh()[Lg])||(bs=yh()[Lg]=[]),bs.push(t=>Ge=t),Id=t=>{bs.length>1?bs.forEach(e=>e(t)):bs[0](t)};const ii=t=>{Id(t),t.scope.on()},ns=()=>{Ge&&Ge.scope.off(),Id(null)};function AE(t){return t.vnode.shapeFlag&4}let oi=!1;function ab(t,e=!1){oi=e;const{props:n,children:r}=t.vnode,s=AE(t);zR(t,n,s,e),YR(t,r);const i=s?lb(t,e):void 0;return oi=!1,i}function lb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Al(new Proxy(t.ctx,UR));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?ub(t):null;ii(t),Ii();const i=wr(r,t,0,[t.props,s]);if(Ai(),ns(),_v(i)){if(i.then(ns,ns),e)return i.then(o=>{bh(t,o,e)}).catch(o=>{Ci(o,t,0)});t.asyncDep=i}else bh(t,i,e)}else CE(t,e)}function bh(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=$v(e)),CE(t,n)}let Vg;function CE(t,e,n){const r=t.type;if(!t.render){if(!e&&Vg&&!r.render){const s=r.template||vd(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=je(je({isCustomElement:i,delimiters:a},o),l);r.render=Vg(s,c)}}t.render=r.render||hn}ii(t),Ii(),$R(t),Ai(),ns()}function cb(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Bt(t,"get","$attrs"),e[n]}}))}function ub(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return cb(t)},slots:t.slots,emit:t.emit,expose:e}}function Rc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($v(Al(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in uo)return uo[n](t)},has(e,n){return n in e||n in uo}}))}function Sh(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function hb(t){return ne(t)&&"__vccOpts"in t}const be=(t,e)=>uR(t,e,oi);function $t(t,e,n){const r=arguments.length;return r===2?Oe(e)&&!Z(e)?si(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&si(n)&&(n=[n]),ye(t,e,n))}const fb=Symbol.for("v-scx"),db=()=>Ue(fb),RE="3.3.4",pb="http://www.w3.org/2000/svg",zr=typeof document<"u"?document:null,Fg=zr&&zr.createElement("template"),gb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?zr.createElementNS(pb,t):zr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>zr.createTextNode(t),createComment:t=>zr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>zr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Fg.innerHTML=r?`<svg>${t}</svg>`:t;const a=Fg.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function mb(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function _b(t,e,n){const r=t.style,s=$e(n);if(n&&!s){if(e&&!$e(e))for(const i in e)n[i]==null&&Ph(r,i,"");for(const i in n)Ph(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ug=/\s*!important$/;function Ph(t,e,n){if(Z(n))n.forEach(r=>Ph(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=yb(t,e);Ug.test(n)?t.setProperty(Ti(r),n.replace(Ug,""),"important"):t[r]=n}}const $g=["Webkit","Moz","ms"],ku={};function yb(t,e){const n=ku[e];if(n)return n;let r=xn(e);if(r!=="filter"&&r in t)return ku[e]=r;r=sa(r);for(let s=0;s<$g.length;s++){const i=$g[s]+r;if(i in t)return ku[e]=i}return e}const Bg="http://www.w3.org/1999/xlink";function vb(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bg,e.slice(6,e.length)):t.setAttributeNS(Bg,e,n);else{const i=SC(e);n==null||i&&!wv(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Eb(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=wv(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function wb(t,e,n,r){t.addEventListener(e,n,r)}function Tb(t,e,n,r){t.removeEventListener(e,n,r)}function Ib(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=Ab(e);if(r){const c=i[e]=bb(r,s);wb(t,a,c,l)}else o&&(Tb(t,a,o,l),i[e]=void 0)}}const Hg=/(?:Once|Passive|Capture)$/;function Ab(t){let e;if(Hg.test(t)){e={};let r;for(;r=t.match(Hg);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ti(t.slice(2)),e]}let Nu=0;const Cb=Promise.resolve(),Rb=()=>Nu||(Cb.then(()=>Nu=0),Nu=Date.now());function bb(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;tn(Sb(r,n.value),e,5,[r])};return n.value=t,n.attached=Rb(),n}function Sb(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const jg=/^on[a-z]/,Pb=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?mb(t,r,s):e==="style"?_b(t,n,r):na(e)?Jf(e)||Ib(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kb(t,e,r,s))?Eb(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),vb(t,e,r,s))};function kb(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&jg.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||jg.test(e)&&$e(n)?!1:e in t}const cr="transition",Bi="animation",bc=(t,{slots:e})=>$t(SR,SE(t),e);bc.displayName="Transition";const bE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Nb=bc.props=je({},Zv,bE),$r=(t,e=[])=>{Z(t)?t.forEach(n=>n(...e)):t&&t(...e)},Wg=t=>t?Z(t)?t.some(e=>e.length>1):t.length>1:!1;function SE(t){const e={};for(const B in t)B in bE||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,p=Ob(s),v=p&&p[0],T=p&&p[1],{onBeforeEnter:y,onEnter:m,onEnterCancelled:I,onLeave:E,onLeaveCancelled:R,onBeforeAppear:D=y,onAppear:M=m,onAppearCancelled:S=I}=e,K=(B,ee,q)=>{hr(B,ee?u:a),hr(B,ee?c:o),q&&q()},W=(B,ee)=>{B._isLeaving=!1,hr(B,h),hr(B,d),hr(B,f),ee&&ee()},te=B=>(ee,q)=>{const We=B?M:m,he=()=>K(ee,B,q);$r(We,[ee,he]),qg(()=>{hr(ee,B?l:i),$n(ee,B?u:a),Wg(We)||Kg(ee,r,v,he)})};return je(e,{onBeforeEnter(B){$r(y,[B]),$n(B,i),$n(B,o)},onBeforeAppear(B){$r(D,[B]),$n(B,l),$n(B,c)},onEnter:te(!1),onAppear:te(!0),onLeave(B,ee){B._isLeaving=!0;const q=()=>W(B,ee);$n(B,h),kE(),$n(B,f),qg(()=>{B._isLeaving&&(hr(B,h),$n(B,d),Wg(E)||Kg(B,r,T,q))}),$r(E,[B,q])},onEnterCancelled(B){K(B,!1),$r(I,[B])},onAppearCancelled(B){K(B,!0),$r(S,[B])},onLeaveCancelled(B){W(B),$r(R,[B])}})}function Ob(t){if(t==null)return null;if(Oe(t))return[Ou(t.enter),Ou(t.leave)];{const e=Ou(t);return[e,e]}}function Ou(t){return Ev(t)}function $n(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function hr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function qg(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Db=0;function Kg(t,e,n,r){const s=t._endId=++Db,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=PE(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),i()},f=d=>{d.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function PE(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),s=r(`${cr}Delay`),i=r(`${cr}Duration`),o=zg(s,i),a=r(`${Bi}Delay`),l=r(`${Bi}Duration`),c=zg(a,l);let u=null,h=0,f=0;e===cr?o>0&&(u=cr,h=o,f=i.length):e===Bi?c>0&&(u=Bi,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?cr:Bi:null,f=u?u===cr?i.length:l.length:0);const d=u===cr&&/\b(transform|all)(,|$)/.test(r(`${cr}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function zg(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Gg(n)+Gg(t[r])))}function Gg(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function kE(){return document.body.offsetHeight}const NE=new WeakMap,OE=new WeakMap,DE={name:"TransitionGroup",props:je({},Nb,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=xr(),r=Xv();let s,i;return md(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Fb(s[0].el,n.vnode.el,o))return;s.forEach(Mb),s.forEach(Lb);const a=s.filter(Vb);kE(),a.forEach(l=>{const c=l.el,u=c.style;$n(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,hr(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=ue(t),a=SE(o);let l=o.tag||yt;s=i,i=e.default?pd(e.default()):[];for(let c=0;c<i.length;c++){const u=i[c];u.key!=null&&ti(u,Oo(u,a,r,n))}if(s)for(let c=0;c<s.length;c++){const u=s[c];ti(u,Oo(u,a,r,n)),NE.set(u,u.el.getBoundingClientRect())}return ye(l,null,i)}}},xb=t=>delete t.mode;DE.props;const mH=DE;function Mb(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Lb(t){OE.set(t,t.el.getBoundingClientRect())}function Vb(t){const e=NE.get(t),n=OE.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function Fb(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:i}=PE(r);return s.removeChild(r),i}const Ub=["ctrl","shift","alt","meta"],$b={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ub.some(n=>t[`${n}Key`]&&!e.includes(n))},_H=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=$b[e[s]];if(i&&i(n,e))return}return t(n,...r)},yH={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Hi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Hi(t,!0),r.enter(t)):r.leave(t,()=>{Hi(t,!1)}):Hi(t,e))},beforeUnmount(t,{value:e}){Hi(t,e)}};function Hi(t,e){t.style.display=e?t._vod:"none"}const xE=je({patchProp:Pb},gb);let po,Qg=!1;function Bb(){return po||(po=ZR(xE))}function Hb(){return po=Qg?po:eb(xE),Qg=!0,po}const jb=(...t)=>{const e=Bb().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ME(r);if(!s)return;const i=e._component;!ne(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},Wb=(...t)=>{const e=Hb().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ME(r);if(s)return n(s,!0,s instanceof SVGElement)},e};function ME(t){return $e(t)?document.querySelector(t):t}const qb=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Kb=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,zb=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function Gb(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){Qb(t);return}return e}function Qb(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Yb(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t[t.length-1]==='"')return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!zb.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(qb.test(t)||Kb.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,Gb)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const LE=/#/g,VE=/&/g,Jb=/\//g,Xb=/=/g,Zb=/\?/g,Sc=/\+/g,eS=/%5e/gi,tS=/%60/gi,nS=/%7c/gi,rS=/%20/gi,sS=/%252f/gi;function FE(t){return encodeURI(""+t).replace(nS,"|")}function kh(t){return FE(typeof t=="string"?t:JSON.stringify(t)).replace(Sc,"%2B").replace(rS,"+").replace(LE,"%23").replace(VE,"%26").replace(tS,"`").replace(eS,"^")}function Du(t){return kh(t).replace(Xb,"%3D")}function iS(t){return FE(t).replace(LE,"%23").replace(Zb,"%3F").replace(sS,"%2F").replace(VE,"%26").replace(Sc,"%2B")}function vH(t){return iS(t).replace(Jb,"%2F")}function Pl(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function oS(t){return Pl(t.replace(Sc," "))}function aS(t){return Pl(t.replace(Sc," "))}function lS(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=oS(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=aS(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function cS(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Du(t)}=${kh(n)}`).join("&"):`${Du(t)}=${kh(e)}`:Du(t)}function uS(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>cS(e,t[e])).filter(Boolean).join("&")}const hS=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,UE=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,fS=/^([/\\]\s*){2,}[^/\\]/;function Ri(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?hS.test(t):UE.test(t)||(e.acceptRelative?fS.test(t):!1)}const dS=/^[\s\0]*(blob|data|javascript|vbscript):$/;function pS(t){return!!t&&dS.test(t)}const gS=/\/$|\/\?/;function Nh(t="",e=!1){return e?gS.test(t):t.endsWith("/")}function $E(t="",e=!1){if(!e)return(Nh(t)?t.slice(0,-1):t)||"/";if(!Nh(t,!0))return t||"/";const[n,...r]=t.split("?");return(n.slice(0,-1)||"/")+(r.length>0?`?${r.join("?")}`:"")}function Oh(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(Nh(t,!0))return t||"/";const[n,...r]=t.split("?");return n+"/"+(r.length>0?`?${r.join("?")}`:"")}function mS(t=""){return t.startsWith("/")}function Yg(t=""){return mS(t)?t:"/"+t}function _S(t,e){if(HE(e)||Ri(t))return t;const n=$E(e);return t.startsWith(n)?t:la(n,t)}function Jg(t,e){if(HE(e))return t;const n=$E(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function BE(t,e){const n=Pc(t),r={...lS(n.search),...e};return n.search=uS(r),IS(n)}function HE(t){return!t||t==="/"}function yS(t){return t&&t!=="/"}const vS=/^\.?\//;function la(t,...e){let n=t||"";for(const r of e.filter(s=>yS(s)))if(n){const s=r.replace(vS,"");n=Oh(n)+s}else n=r;return n}function ES(t){return wS(t,"https://")}function wS(t,e){const n=t.match(UE);return n?e+t.slice(n[0].length):e+t}function TS(t,e,n={}){return n.trailingSlash||(t=Oh(t),e=Oh(e)),n.leadingSlash||(t=Yg(t),e=Yg(e)),n.encoding||(t=Pl(t),e=Pl(e)),t===e}function Pc(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/);if(n){const[,h,f=""]=n;return{protocol:h,pathname:f,href:h+f,auth:"",host:"",search:"",hash:""}}if(!Ri(t,{acceptRelative:!0}))return e?Pc(e+t):Xg(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[],{pathname:l,search:c,hash:u}=Xg(a.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:r,auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:c,hash:u}}function Xg(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function IS(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol?t.protocol+"//":"")+s+i+e+n+r}class AS extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function CS(t){var l,c,u,h,f;const e=((l=t.error)==null?void 0:l.message)||((c=t.error)==null?void 0:c.toString())||"",n=((u=t.request)==null?void 0:u.method)||((h=t.options)==null?void 0:h.method)||"GET",r=((f=t.request)==null?void 0:f.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new AS(o,t.error?{cause:t.error}:void 0);for(const d of["request","options","response"])Object.defineProperty(a,d,{get(){return t[d]}});for(const[d,p]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,d,{get(){return t.response&&t.response[p]}});return a}const RS=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Zg(t="GET"){return RS.has(t.toUpperCase())}function bS(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const SS=new Set(["image/svg","application/xml","application/xhtml","application/html"]),PS=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function kS(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return PS.test(e)?"json":SS.has(e)||e.startsWith("text/")?"text":"blob"}function NS(t,e,n=globalThis.Headers){const r={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(r.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(r.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){r.headers=new n((e==null?void 0:e.headers)||{});for(const[s,i]of new n((t==null?void 0:t.headers)||{}))r.headers.set(s,i)}return r}const OS=new Set([408,409,425,429,500,502,503,504]),DS=new Set([101,204,205,304]);function jE(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let u;typeof a.options.retry=="number"?u=a.options.retry:u=Zg(a.options.method)?0:1;const h=a.response&&a.response.status||500;if(u>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(h):OS.has(h))){const f=a.options.retryDelay||0;return f>0&&await new Promise(d=>setTimeout(d,f)),i(a.request,{...a.options,retry:u-1,timeout:a.options.timeout})}}const c=CS(a);throw Error.captureStackTrace&&Error.captureStackTrace(c,i),c}const i=async function(l,c={}){var f;const u={request:l,options:NS(c,t.defaults,n),response:void 0,error:void 0};if(u.options.method=(f=u.options.method)==null?void 0:f.toUpperCase(),u.options.onRequest&&await u.options.onRequest(u),typeof u.request=="string"&&(u.options.baseURL&&(u.request=_S(u.request,u.options.baseURL)),(u.options.query||u.options.params)&&(u.request=BE(u.request,{...u.options.params,...u.options.query}))),u.options.body&&Zg(u.options.method)&&(bS(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new n(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half"))),!u.options.signal&&u.options.timeout){const d=new r;setTimeout(()=>d.abort(),u.options.timeout),u.options.signal=d.signal}try{u.response=await e(u.request,u.options)}catch(d){return u.error=d,u.options.onRequestError&&await u.options.onRequestError(u),await s(u)}if(u.response.body&&!DS.has(u.response.status)&&u.options.method!=="HEAD"){const d=(u.options.parseResponse?"json":u.options.responseType)||kS(u.response.headers.get("content-type")||"");switch(d){case"json":{const p=await u.response.text(),v=u.options.parseResponse||Yb;u.response._data=v(p);break}case"stream":{u.response._data=u.response.body;break}default:u.response._data=await u.response[d]()}}return u.options.onResponse&&await u.options.onResponse(u),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await u.options.onResponseError(u),await s(u)):u.response},o=async function(l,c){return(await i(l,c))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={})=>jE({...t,defaults:{...t.defaults,...a}}),o}const Ad=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),xS=Ad.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),MS=Ad.Headers,LS=Ad.AbortController,VS=jE({fetch:xS,Headers:MS,AbortController:LS}),FS=VS,US=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},kl=US().app,$S=()=>kl.baseURL,BS=()=>kl.buildAssetsDir,HS=(...t)=>la(WE(),BS(),...t),WE=(...t)=>{const e=kl.cdnURL||kl.baseURL;return t.length?la(e,...t):e};globalThis.__buildAssetsURL=HS,globalThis.__publicAssetsURL=WE;function Dh(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Dh(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const jS={run:t=>t()},WS=()=>jS,qE=typeof console.createTask<"u"?console.createTask:WS;function qS(t,e){const n=e.shift(),r=qE(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function KS(t,e){const n=e.shift(),r=qE(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function xu(t,e){for(const n of[...t])n(e)}class zS{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Dh(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Dh(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(qS,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(KS,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&xu(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&xu(this._after,s)}):(this._after&&s&&xu(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function KE(){return new zS}function GS(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},c=()=>e===o?l:void 0;xh.add(c);try{const u=s?s.run(o,a):a();return n||(e=void 0),await u}finally{xh.delete(c)}}}}function QS(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=GS({...t,...r})),e[n],e[n]}}}const Nl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},em="__unctx__",YS=Nl[em]||(Nl[em]=QS()),JS=(t,e={})=>YS.get(t,e),tm="__unctx_async_handlers__",xh=Nl[tm]||(Nl[tm]=new Set);function Ol(t){const e=[];for(const s of xh){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const zE=JS("nuxt-app",{asyncContext:!1}),XS="__nuxt_plugin";function ZS(t){let e=0;const n={provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.7.0"},get vue(){return n.vueApp.version}},payload:nn({data:{},state:{},_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:s=>rP(n,s),isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...t};n.hooks=KE(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,i)=>{const o="$"+s;ja(n,o,i),ja(n.vueApp.config.globalProperties,o,i)},ja(n.vueApp,"$nuxt",n),ja(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",i=>{n.callHook("app:chunkError",{error:i.payload})}),window.useNuxtApp=window.useNuxtApp||Be;const s=n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});n.hook("app:mounted",s)}const r=nn(n.payload.config);return n.provide("config",r),n}async function eP(t,e){if(e.hooks&&t.hooks.addHooks(e.hooks),typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function tP(t,e){const n=[],r=[];for(const s of e){const i=eP(t,s);s.parallel?n.push(i.catch(o=>r.push(o))):await i}if(await Promise.all(n),r.length)throw r[0]}/*! @__NO_SIDE_EFFECTS__ */function Mt(t){return typeof t=="function"?t:(delete t.name,Object.assign(t.setup||(()=>{}),t,{[XS]:!0}))}const nP=Mt;function rP(t,e,n){const r=()=>n?e(...n):e();return zE.set(t),t.vueApp.runWithContext(r)}/*! @__NO_SIDE_EFFECTS__ */function Be(){var e;let t;if(uE()&&(t=(e=xr())==null?void 0:e.appContext.app.$nuxt),t=t||zE.tryUse(),!t)throw new Error("[nuxt] instance unavailable");return t}/*! @__NO_SIDE_EFFECTS__ */function kc(){return Be().$config}function ja(t,e,n){Object.defineProperty(t,e,{get:()=>n})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=function(t,e){if(!t)throw bi(e)},bi=function(t){return new Error("Firebase Database ("+GE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},sP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Nc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(QE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new iP;const f=i<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YE=function(t){const e=QE(t);return Nc.encodeByteArray(e,!0)},Dl=function(t){return YE(t).replace(/\./g,"")},xl=function(t){try{return Nc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(t){return JE(void 0,t)}function JE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!aP(n)||(t[n]=JE(t[n],e[n]));return t}function aP(t){return t!=="__proto__"}/**
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
 */function lP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cP=()=>lP().__FIREBASE_DEFAULTS__,uP=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xl(t[1]);return e&&JSON.parse(e)},Cd=()=>{try{return cP()||uP()||hP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},XE=t=>{var e,n;return(n=(e=Cd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ZE=t=>{const e=XE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ew=()=>{var t;return(t=Cd())===null||t===void 0?void 0:t.config},tw=t=>{var e;return(e=Cd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function nw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Dl(JSON.stringify(n)),Dl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function fP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dP(){const t=bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sw(){return GE.NODE_ADMIN===!0}function iw(){try{return typeof indexedDB=="object"}catch{return!1}}function pP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gP,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mP(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Vn(s,a,r)}}function mP(t,e){return t.replace(_P,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _P=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t){return JSON.parse(t)}function ft(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Mo(xl(i[0])||""),n=Mo(xl(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},yP=function(t){const e=ow(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},vP=function(t){const e=ow(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ai(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Mh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ml(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Ll(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(nm(i)&&nm(o)){if(!Ll(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function nm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+r[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function wP(t,e){const n=new TP(t,e);return n.subscribe.bind(n)}class TP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");IP(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Mu),s.error===void 0&&(s.error=Mu),s.complete===void 0&&(s.complete=Mu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mu(){}function AP(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,F(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Oc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function xt(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jr="[DEFAULT]";/**
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
 */class RP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SP(e))try{this.getOrInitializeService({instanceIdentifier:jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jr){return this.instances.has(e)}getOptions(e=jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jr){return this.component?this.component.multipleInstances?e:jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bP(t){return t===jr?void 0:t}function SP(t){return t.instantiationMode==="EAGER"}/**
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
 */class PP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const kP={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},NP=me.INFO,OP={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},DP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=OP[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ca{constructor(e){this.name=e,this._logLevel=NP,this._logHandler=DP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const xP=(t,e)=>e.some(n=>t instanceof n);let rm,sm;function MP(){return rm||(rm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LP(){return sm||(sm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const aw=new WeakMap,Lh=new WeakMap,lw=new WeakMap,Lu=new WeakMap,bd=new WeakMap;function VP(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&aw.set(n,t)}).catch(()=>{}),bd.set(e,t),e}function FP(t){if(Lh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Lh.set(t,e)}let Vh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UP(t){Vh=t(Vh)}function $P(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Vu(this),e,...n);return lw.set(r,e.sort?e.sort():[e]),Tr(r)}:LP().includes(t)?function(...e){return t.apply(Vu(this),e),Tr(aw.get(this))}:function(...e){return Tr(t.apply(Vu(this),e))}}function BP(t){return typeof t=="function"?$P(t):(t instanceof IDBTransaction&&FP(t),xP(t,MP())?new Proxy(t,Vh):t)}function Tr(t){if(t instanceof IDBRequest)return VP(t);if(Lu.has(t))return Lu.get(t);const e=BP(t);return e!==t&&(Lu.set(t,e),bd.set(e,t)),e}const Vu=t=>bd.get(t);function HP(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Tr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Tr(o.result),l.oldVersion,l.newVersion,Tr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const jP=["get","getKey","getAll","getAllKeys","count"],WP=["put","add","delete","clear"],Fu=new Map;function im(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fu.get(e))return Fu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=WP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jP.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Fu.set(e,i),i}UP(t=>({...t,get:(e,n,r)=>im(e,n)||t.get(e,n,r),has:(e,n)=>!!im(e,n)||t.has(e,n)}));/**
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
 */class qP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fh="@firebase/app",om="0.9.17";/**
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
 */const us=new ca("@firebase/app"),zP="@firebase/app-compat",GP="@firebase/analytics-compat",QP="@firebase/analytics",YP="@firebase/app-check-compat",JP="@firebase/app-check",XP="@firebase/auth",ZP="@firebase/auth-compat",ek="@firebase/database",tk="@firebase/database-compat",nk="@firebase/functions",rk="@firebase/functions-compat",sk="@firebase/installations",ik="@firebase/installations-compat",ok="@firebase/messaging",ak="@firebase/messaging-compat",lk="@firebase/performance",ck="@firebase/performance-compat",uk="@firebase/remote-config",hk="@firebase/remote-config-compat",fk="@firebase/storage",dk="@firebase/storage-compat",pk="@firebase/firestore",gk="@firebase/firestore-compat",mk="firebase",_k="10.3.0";/**
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
 */const Uh="[DEFAULT]",yk={[Fh]:"fire-core",[zP]:"fire-core-compat",[QP]:"fire-analytics",[GP]:"fire-analytics-compat",[JP]:"fire-app-check",[YP]:"fire-app-check-compat",[XP]:"fire-auth",[ZP]:"fire-auth-compat",[ek]:"fire-rtdb",[tk]:"fire-rtdb-compat",[nk]:"fire-fn",[rk]:"fire-fn-compat",[sk]:"fire-iid",[ik]:"fire-iid-compat",[ok]:"fire-fcm",[ak]:"fire-fcm-compat",[lk]:"fire-perf",[ck]:"fire-perf-compat",[uk]:"fire-rc",[hk]:"fire-rc-compat",[fk]:"fire-gcs",[dk]:"fire-gcs-compat",[pk]:"fire-fst",[gk]:"fire-fst-compat","fire-js":"fire-js",[mk]:"fire-js-all"};/**
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
 */const Vl=new Map,$h=new Map;function vk(t,e){try{t.container.addComponent(e)}catch(n){us.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mn(t){const e=t.name;if($h.has(e))return us.debug(`There were multiple attempts to register component ${e}.`),!1;$h.set(e,t);for(const n of Vl.values())vk(n,t);return!0}function Dc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ek={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ir=new Si("app","Firebase",Ek);/**
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
 */class wk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
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
 */const Mr=_k;function cw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Uh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ir.create("bad-app-name",{appName:String(s)});if(n||(n=ew()),!n)throw Ir.create("no-options");const i=Vl.get(s);if(i){if(Ll(n,i.options)&&Ll(r,i.config))return i;throw Ir.create("duplicate-app",{appName:s})}const o=new PP(s);for(const l of $h.values())o.addComponent(l);const a=new wk(n,r,o);return Vl.set(s,a),a}function xc(t=Uh){const e=Vl.get(t);if(!e&&t===Uh&&ew())return cw();if(!e)throw Ir.create("no-app",{appName:t});return e}function qt(t,e,n){var r;let s=(r=yk[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),us.warn(a.join(" "));return}Mn(new gn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Tk="firebase-heartbeat-database",Ik=1,Lo="firebase-heartbeat-store";let Uu=null;function uw(){return Uu||(Uu=HP(Tk,Ik,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Lo)}}}).catch(t=>{throw Ir.create("idb-open",{originalErrorMessage:t.message})})),Uu}async function Ak(t){try{return await(await uw()).transaction(Lo).objectStore(Lo).get(hw(t))}catch(e){if(e instanceof Vn)us.warn(e.message);else{const n=Ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});us.warn(n.message)}}}async function am(t,e){try{const r=(await uw()).transaction(Lo,"readwrite");await r.objectStore(Lo).put(e,hw(t)),await r.done}catch(n){if(n instanceof Vn)us.warn(n.message);else{const r=Ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});us.warn(r.message)}}}function hw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ck=1024,Rk=30*24*60*60*1e3;class bk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=lm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Rk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lm(),{heartbeatsToSend:n,unsentEntries:r}=Sk(this._heartbeatsCache.heartbeats),s=Dl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function lm(){return new Date().toISOString().substring(0,10)}function Sk(t,e=Ck){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),cm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),cm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iw()?pP().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ak(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return am(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return am(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cm(t){return Dl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function kk(t){Mn(new gn("platform-logger",e=>new qP(e),"PRIVATE")),Mn(new gn("heartbeat",e=>new bk(e),"PRIVATE")),qt(Fh,om,t),qt(Fh,om,"esm2017"),qt("fire-js","")}kk("");var Nk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,Sd=Sd||{},re=Nk||self;function Mc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ua(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Ok(t){return Object.prototype.hasOwnProperty.call(t,$u)&&t[$u]||(t[$u]=++Dk)}var $u="closure_uid_"+(1e9*Math.random()>>>0),Dk=0;function xk(t,e,n){return t.call.apply(t.bind,arguments)}function Mk(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function At(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?At=xk:At=Mk,At.apply(null,arguments)}function Wa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function lt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Lr(){this.s=this.s,this.o=this.o}var Lk=0;Lr.prototype.s=!1;Lr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Lk!=0)&&Ok(this)};Lr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Pd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function um(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Mc(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Ct(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ct.prototype.h=function(){this.defaultPrevented=!0};var Vk=function(){if(!re.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{re.addEventListener("test",()=>{},e),re.removeEventListener("test",()=>{},e)}catch{}return t}();function Vo(t){return/^[\s\xa0]*$/.test(t)}function Lc(){var t=re.navigator;return t&&(t=t.userAgent)?t:""}function Rn(t){return Lc().indexOf(t)!=-1}function kd(t){return kd[" "](t),t}kd[" "]=function(){};function Fk(t,e){var n=kN;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Uk=Rn("Opera"),li=Rn("Trident")||Rn("MSIE"),dw=Rn("Edge"),Bh=dw||li,pw=Rn("Gecko")&&!(Lc().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge"))&&!(Rn("Trident")||Rn("MSIE"))&&!Rn("Edge"),$k=Lc().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge");function gw(){var t=re.document;return t?t.documentMode:void 0}var Hh;e:{var Bu="",Hu=function(){var t=Lc();if(pw)return/rv:([^\);]+)(\)|;)/.exec(t);if(dw)return/Edge\/([\d\.]+)/.exec(t);if(li)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if($k)return/WebKit\/(\S+)/.exec(t);if(Uk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Hu&&(Bu=Hu?Hu[1]:""),li){var ju=gw();if(ju!=null&&ju>parseFloat(Bu)){Hh=String(ju);break e}}Hh=Bu}var jh;if(re.document&&li){var hm=gw();jh=hm||parseInt(Hh,10)||void 0}else jh=void 0;var Bk=jh;function Fo(t,e){if(Ct.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(pw){e:{try{kd(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Hk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Fo.$.h.call(this)}}lt(Fo,Ct);var Hk={2:"touch",3:"pen",4:"mouse"};Fo.prototype.h=function(){Fo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ha="closure_listenable_"+(1e6*Math.random()|0),jk=0;function Wk(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++jk,this.fa=this.ia=!1}function Vc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Nd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function qk(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function mw(t){const e={};for(const n in t)e[n]=t[n];return e}const fm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _w(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<fm.length;i++)n=fm[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Fc(t){this.src=t,this.g={},this.h=0}Fc.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=qh(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Wk(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Wh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=fw(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Vc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function qh(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Od="closure_lm_"+(1e6*Math.random()|0),Wu={};function yw(t,e,n,r,s){if(r&&r.once)return Ew(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)yw(t,e[i],n,r,s);return null}return n=Md(n),t&&t[ha]?t.O(e,n,ua(r)?!!r.capture:!!r,s):vw(t,e,n,!1,r,s)}function vw(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ua(s)?!!s.capture:!!s,a=xd(t);if(a||(t[Od]=a=new Fc(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Kk(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Vk||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Tw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Kk(){function t(n){return e.call(t.src,t.listener,n)}const e=zk;return t}function Ew(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ew(t,e[i],n,r,s);return null}return n=Md(n),t&&t[ha]?t.P(e,n,ua(r)?!!r.capture:!!r,s):vw(t,e,n,!0,r,s)}function ww(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)ww(t,e[i],n,r,s);else r=ua(r)?!!r.capture:!!r,n=Md(n),t&&t[ha]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=qh(i,n,r,s),-1<n&&(Vc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=xd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qh(e,n,r,s)),(n=-1<t?e[t]:null)&&Dd(n))}function Dd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ha])Wh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Tw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=xd(e))?(Wh(n,t),n.h==0&&(n.src=null,e[Od]=null)):Vc(t)}}}function Tw(t){return t in Wu?Wu[t]:Wu[t]="on"+t}function zk(t,e){if(t.fa)t=!0;else{e=new Fo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Dd(t),t=n.call(r,e)}return t}function xd(t){return t=t[Od],t instanceof Fc?t:null}var qu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Md(t){return typeof t=="function"?t:(t[qu]||(t[qu]=function(e){return t.handleEvent(e)}),t[qu])}function it(){Lr.call(this),this.i=new Fc(this),this.S=this,this.J=null}lt(it,Lr);it.prototype[ha]=!0;it.prototype.removeEventListener=function(t,e,n,r){ww(this,t,e,n,r)};function dt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ct(e,t);else if(e instanceof Ct)e.target=e.target||t;else{var s=e;e=new Ct(r,t),_w(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=qa(o,r,!0,e)&&s}if(o=e.g=t,s=qa(o,r,!0,e)&&s,s=qa(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=qa(o,r,!1,e)&&s}it.prototype.N=function(){if(it.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Vc(n[r]);delete t.g[e],t.h--}}this.J=null};it.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};it.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function qa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Wh(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ld=re.JSON.stringify;class Gk{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Qk(){var t=Vd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Yk{constructor(){this.h=this.g=null}add(e,n){const r=Iw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Iw=new Gk(()=>new Jk,t=>t.reset());class Jk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Xk(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Zk(t){re.setTimeout(()=>{throw t},0)}let Uo,$o=!1,Vd=new Yk,Aw=()=>{const t=re.Promise.resolve(void 0);Uo=()=>{t.then(eN)}};var eN=()=>{for(var t;t=Qk();){try{t.h.call(t.g)}catch(n){Zk(n)}var e=Iw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}$o=!1};function Uc(t,e){it.call(this),this.h=t||1,this.g=e||re,this.j=At(this.qb,this),this.l=Date.now()}lt(Uc,it);U=Uc.prototype;U.ga=!1;U.T=null;U.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),dt(this,"tick"),this.ga&&(Fd(this),this.start()))}};U.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Fd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}U.N=function(){Uc.$.N.call(this),Fd(this),delete this.g};function Ud(t,e,n){if(typeof t=="function")n&&(t=At(t,n));else if(t&&typeof t.handleEvent=="function")t=At(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:re.setTimeout(t,e||0)}function Cw(t){t.g=Ud(()=>{t.g=null,t.i&&(t.i=!1,Cw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class tN extends Lr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Cw(this)}N(){super.N(),this.g&&(re.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bo(t){Lr.call(this),this.h=t,this.g={}}lt(Bo,Lr);var dm=[];function Rw(t,e,n,r){Array.isArray(n)||(n&&(dm[0]=n.toString()),n=dm);for(var s=0;s<n.length;s++){var i=yw(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function bw(t){Nd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Dd(e)},t),t.g={}}Bo.prototype.N=function(){Bo.$.N.call(this),bw(this)};Bo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $c(){this.g=!0}$c.prototype.Ea=function(){this.g=!1};function nN(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function rN(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ls(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+iN(t,n)+(r?" "+r:"")})}function sN(t,e){t.info(function(){return"TIMEOUT: "+e})}$c.prototype.info=function(){};function iN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ld(n)}catch{return e}}var Es={},pm=null;function Bc(){return pm=pm||new it}Es.Ta="serverreachability";function Sw(t){Ct.call(this,Es.Ta,t)}lt(Sw,Ct);function Ho(t){const e=Bc();dt(e,new Sw(e))}Es.STAT_EVENT="statevent";function Pw(t,e){Ct.call(this,Es.STAT_EVENT,t),this.stat=e}lt(Pw,Ct);function Ot(t){const e=Bc();dt(e,new Pw(e,t))}Es.Ua="timingevent";function kw(t,e){Ct.call(this,Es.Ua,t),this.size=e}lt(kw,Ct);function fa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return re.setTimeout(function(){t()},e)}var Hc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Nw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function $d(){}$d.prototype.h=null;function gm(t){return t.h||(t.h=t.i())}function Ow(){}var da={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Bd(){Ct.call(this,"d")}lt(Bd,Ct);function Hd(){Ct.call(this,"c")}lt(Hd,Ct);var Kh;function jc(){}lt(jc,$d);jc.prototype.g=function(){return new XMLHttpRequest};jc.prototype.i=function(){return{}};Kh=new jc;function pa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Bo(this),this.P=oN,t=Bh?125:void 0,this.V=new Uc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Dw}function Dw(){this.i=null,this.g="",this.h=!1}var oN=45e3,zh={},Fl={};U=pa.prototype;U.setTimeout=function(t){this.P=t};function Gh(t,e,n){t.L=1,t.v=qc(Xn(e)),t.s=n,t.S=!0,xw(t,null)}function xw(t,e){t.G=Date.now(),ga(t),t.A=Xn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Hw(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Dw,t.g=cT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new tN(At(t.Pa,t,t.g),t.O)),Rw(t.U,t.g,"readystatechange",t.nb),e=t.I?mw(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ho(),nN(t.j,t.u,t.A,t.m,t.W,t.s)}U.nb=function(t){t=t.target;const e=this.M;e&&Sn(t)==3?e.l():this.Pa(t)};U.Pa=function(t){try{if(t==this.g)e:{const u=Sn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Bh||this.g&&(this.h.h||this.g.ja()||vm(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ho(3):Ho(2)),Wc(this);var n=this.g.da();this.ca=n;t:if(Mw(this)){var r=vm(this.g);t="";var s=r.length,i=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qr(this),go(this);var o="";break t}this.h.i=new re.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,rN(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vo(a)){var c=a;break t}}c=null}if(n=c)Ls(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qh(this,n);else{this.i=!1,this.o=3,Ot(12),Qr(this),go(this);break e}}this.S?(Lw(this,u,o),Bh&&this.i&&u==3&&(Rw(this.U,this.V,"tick",this.mb),this.V.start())):(Ls(this.j,this.m,o,null),Qh(this,o)),u==4&&Qr(this),this.i&&!this.J&&(u==4?iT(this.l,this):(this.i=!1,ga(this)))}else bN(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ot(12)):(this.o=0,Ot(13)),Qr(this),go(this)}}}catch{}finally{}};function Mw(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Lw(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=aN(t,n),s==Fl){e==4&&(t.o=4,Ot(14),r=!1),Ls(t.j,t.m,null,"[Incomplete Response]");break}else if(s==zh){t.o=4,Ot(15),Ls(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ls(t.j,t.m,s,null),Qh(t,s);Mw(t)&&s!=Fl&&s!=zh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ot(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gd(e),e.M=!0,Ot(11))):(Ls(t.j,t.m,n,"[Invalid Chunked Response]"),Qr(t),go(t))}U.mb=function(){if(this.g){var t=Sn(this.g),e=this.g.ja();this.C<e.length&&(Wc(this),Lw(this,t,e),this.i&&t!=4&&ga(this))}};function aN(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Fl:(n=Number(e.substring(n,r)),isNaN(n)?zh:(r+=1,r+n>e.length?Fl:(e=e.slice(r,r+n),t.C=r+n,e)))}U.cancel=function(){this.J=!0,Qr(this)};function ga(t){t.Y=Date.now()+t.P,Vw(t,t.P)}function Vw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=fa(At(t.lb,t),e)}function Wc(t){t.B&&(re.clearTimeout(t.B),t.B=null)}U.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(sN(this.j,this.A),this.L!=2&&(Ho(),Ot(17)),Qr(this),this.o=2,go(this)):Vw(this,this.Y-t)};function go(t){t.l.H==0||t.J||iT(t.l,t)}function Qr(t){Wc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Fd(t.V),bw(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Qh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Yh(n.i,t))){if(!t.K&&Yh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Bl(n),Qc(n);else break e;zd(n),Ot(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=fa(At(n.ib,n),6e3));if(1>=qw(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Yr(n,11)}else if((t.K||n.g==t)&&Bl(n),!Vo(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=r.i;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(jd(i,i.h),i.h=null))}if(r.F){const v=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Le(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=lT(r,r.J?r.pa:null,r.Y),o.K){Kw(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Wc(a),ga(a)),r.g=o}else rT(r);0<n.j.length&&Yc(n)}else c[0]!="stop"&&c[0]!="close"||Yr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Yr(n,7):Kd(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Ho(4)}catch{}}function lN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Mc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function cN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Mc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Fw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Mc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=cN(t),r=lN(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Uw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function rs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof rs){this.h=t.h,Ul(this,t.j),this.s=t.s,this.g=t.g,$l(this,t.m),this.l=t.l;var e=t.i,n=new jo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),mm(this,n),this.o=t.o}else t&&(e=String(t).match(Uw))?(this.h=!1,Ul(this,e[1]||"",!0),this.s=no(e[2]||""),this.g=no(e[3]||"",!0),$l(this,e[4]),this.l=no(e[5]||"",!0),mm(this,e[6]||"",!0),this.o=no(e[7]||"")):(this.h=!1,this.i=new jo(null,this.h))}rs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ro(e,_m,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ro(e,_m,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ro(n,n.charAt(0)=="/"?dN:fN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ro(n,gN)),t.join("")};function Xn(t){return new rs(t)}function Ul(t,e,n){t.j=n?no(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $l(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function mm(t,e,n){e instanceof jo?(t.i=e,mN(t.i,t.h)):(n||(e=ro(e,pN)),t.i=new jo(e,t.h))}function Le(t,e,n){t.i.set(e,n)}function qc(t){return Le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function no(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ro(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,hN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function hN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var _m=/[#\/\?@]/g,fN=/[#\?:]/g,dN=/[#\?]/g,pN=/[#\?@]/g,gN=/#/g;function jo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Vr(t){t.g||(t.g=new Map,t.h=0,t.i&&uN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=jo.prototype;U.add=function(t,e){Vr(this),this.i=null,t=ki(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $w(t,e){Vr(t),e=ki(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Bw(t,e){return Vr(t),e=ki(t,e),t.g.has(e)}U.forEach=function(t,e){Vr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};U.ta=function(){Vr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};U.Z=function(t){Vr(this);let e=[];if(typeof t=="string")Bw(this,t)&&(e=e.concat(this.g.get(ki(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Vr(this),this.i=null,t=ki(this,t),Bw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Hw(t,e,n){$w(t,e),0<n.length&&(t.i=null,t.g.set(ki(t,e),Pd(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ki(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mN(t,e){e&&!t.j&&(Vr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&($w(this,r),Hw(this,s,n))},t)),t.j=e}var _N=class{constructor(t,e){this.g=t,this.map=e}};function jw(t){this.l=t||yN,re.PerformanceNavigationTiming?(t=re.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(re.g&&re.g.Ka&&re.g.Ka()&&re.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yN=10;function Ww(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function qw(t){return t.h?1:t.g?t.g.size:0}function Yh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function jd(t,e){t.g?t.g.add(e):t.h=e}function Kw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}jw.prototype.cancel=function(){if(this.i=zw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function zw(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Pd(t.i)}var vN=class{stringify(t){return re.JSON.stringify(t,void 0)}parse(t){return re.JSON.parse(t,void 0)}};function EN(){this.g=new vN}function wN(t,e,n){const r=n||"";try{Fw(t,function(s,i){let o=s;ua(s)&&(o=Ld(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function TN(t,e){const n=new $c;if(re.Image){const r=new Image;r.onload=Wa(Ka,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Wa(Ka,n,r,"TestLoadImage: error",!1,e),r.onabort=Wa(Ka,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Wa(Ka,n,r,"TestLoadImage: timeout",!1,e),re.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ka(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Kc(t){this.l=t.fc||null,this.j=t.ob||!1}lt(Kc,$d);Kc.prototype.g=function(){return new zc(this.l,this.j)};Kc.prototype.i=function(t){return function(){return t}}({});function zc(t,e){it.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Wd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}lt(zc,it);var Wd=0;U=zc.prototype;U.open=function(t,e){if(this.readyState!=Wd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Wo(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||re).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ma(this)),this.readyState=Wd};U.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Wo(this)),this.g&&(this.readyState=3,Wo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof re.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Gw(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Gw(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}U.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ma(this):Wo(this),this.readyState==3&&Gw(this)}};U.Za=function(t){this.g&&(this.response=this.responseText=t,ma(this))};U.Ya=function(t){this.g&&(this.response=t,ma(this))};U.ka=function(){this.g&&ma(this)};function ma(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Wo(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Wo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(zc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var IN=re.JSON.parse;function He(t){it.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Qw,this.L=this.M=!1}lt(He,it);var Qw="",AN=/^https?$/i,CN=["POST","PUT"];U=He.prototype;U.Oa=function(t){this.M=t};U.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Kh.g(),this.C=this.u?gm(this.u):gm(Kh),this.g.onreadystatechange=At(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){ym(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=re.FormData&&t instanceof re.FormData,!(0<=fw(CN,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Xw(this),0<this.B&&((this.L=RN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=At(this.ua,this)):this.A=Ud(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ym(this,i)}};function RN(t){return li&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.ua=function(){typeof Sd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,dt(this,"timeout"),this.abort(8))};function ym(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Yw(t),Gc(t)}function Yw(t){t.F||(t.F=!0,dt(t,"complete"),dt(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,dt(this,"complete"),dt(this,"abort"),Gc(this))};U.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gc(this,!0)),He.$.N.call(this)};U.La=function(){this.s||(this.G||this.v||this.l?Jw(this):this.kb())};U.kb=function(){Jw(this)};function Jw(t){if(t.h&&typeof Sd<"u"&&(!t.C[1]||Sn(t)!=4||t.da()!=2)){if(t.v&&Sn(t)==4)Ud(t.La,0,t);else if(dt(t,"readystatechange"),Sn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Uw)[1]||null;!s&&re.self&&re.self.location&&(s=re.self.location.protocol.slice(0,-1)),r=!AN.test(s?s.toLowerCase():"")}n=r}if(n)dt(t,"complete"),dt(t,"success");else{t.m=6;try{var i=2<Sn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Yw(t)}}finally{Gc(t)}}}}function Gc(t,e){if(t.g){Xw(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||dt(t,"ready");try{n.onreadystatechange=r}catch{}}}function Xw(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(re.clearTimeout(t.A),t.A=null)}U.isActive=function(){return!!this.g};function Sn(t){return t.g?t.g.readyState:0}U.da=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}};U.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),IN(e)}};function vm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Qw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function bN(t){const e={};t=(t.g&&2<=Sn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Vo(t[r]))continue;var n=Xk(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}qk(e,function(r){return r.join(", ")})}U.Ia=function(){return this.m};U.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Zw(t){let e="";return Nd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function qd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Zw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Le(t,e,n))}function ji(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function eT(t){this.Ga=0,this.j=[],this.l=new $c,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ji("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ji("baseRetryDelayMs",5e3,t),this.hb=ji("retryDelaySeedMs",1e4,t),this.eb=ji("forwardChannelMaxRetries",2,t),this.xa=ji("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new jw(t&&t.concurrentRequestLimit),this.Ja=new EN,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}U=eT.prototype;U.ra=8;U.H=1;function Kd(t){if(tT(t),t.H==3){var e=t.W++,n=Xn(t.I);if(Le(n,"SID",t.K),Le(n,"RID",e),Le(n,"TYPE","terminate"),_a(t,n),e=new pa(t,t.l,e),e.L=2,e.v=qc(Xn(n)),n=!1,re.navigator&&re.navigator.sendBeacon)try{n=re.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&re.Image&&(new Image().src=e.v,n=!0),n||(e.g=cT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ga(e)}aT(t)}function Qc(t){t.g&&(Gd(t),t.g.cancel(),t.g=null)}function tT(t){Qc(t),t.u&&(re.clearTimeout(t.u),t.u=null),Bl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&re.clearTimeout(t.m),t.m=null)}function Yc(t){if(!Ww(t.i)&&!t.m){t.m=!0;var e=t.Na;Uo||Aw(),$o||(Uo(),$o=!0),Vd.add(e,t),t.C=0}}function SN(t,e){return qw(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=fa(At(t.Na,t,e),oT(t,t.C)),t.C++,!0)}U.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new pa(this,this.l,t);let i=this.s;if(this.U&&(i?(i=mw(i),_w(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=nT(this,s,e),n=Xn(this.I),Le(n,"RID",t),Le(n,"CVER",22),this.F&&Le(n,"X-HTTP-Session-Id",this.F),_a(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Zw(i)))+"&"+e:this.o&&qd(n,this.o,i)),jd(this.i,s),this.bb&&Le(n,"TYPE","init"),this.P?(Le(n,"$req",e),Le(n,"SID","null"),s.aa=!0,Gh(s,n,null)):Gh(s,n,e),this.H=2}}else this.H==3&&(t?Em(this,t):this.j.length==0||Ww(this.i)||Em(this))};function Em(t,e){var n;e?n=e.m:n=t.W++;const r=Xn(t.I);Le(r,"SID",t.K),Le(r,"RID",n),Le(r,"AID",t.V),_a(t,r),t.o&&t.s&&qd(r,t.o,t.s),n=new pa(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=nT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),jd(t.i,n),Gh(n,r,e)}function _a(t,e){t.na&&Nd(t.na,function(n,r){Le(e,r,n)}),t.h&&Fw({},function(n,r){Le(e,r,n)})}function nT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?At(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{wN(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function rT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Uo||Aw(),$o||(Uo(),$o=!0),Vd.add(e,t),t.A=0}}function zd(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=fa(At(t.Ma,t),oT(t,t.A)),t.A++,!0)}U.Ma=function(){if(this.u=null,sT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=fa(At(this.jb,this),t)}};U.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ot(10),Qc(this),sT(this))};function Gd(t){t.B!=null&&(re.clearTimeout(t.B),t.B=null)}function sT(t){t.g=new pa(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Xn(t.wa);Le(e,"RID","rpc"),Le(e,"SID",t.K),Le(e,"AID",t.V),Le(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Le(e,"TO",t.qa),Le(e,"TYPE","xmlhttp"),_a(t,e),t.o&&t.s&&qd(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=qc(Xn(e)),n.s=null,n.S=!0,xw(n,t)}U.ib=function(){this.v!=null&&(this.v=null,Qc(this),zd(this),Ot(19))};function Bl(t){t.v!=null&&(re.clearTimeout(t.v),t.v=null)}function iT(t,e){var n=null;if(t.g==e){Bl(t),Gd(t),t.g=null;var r=2}else if(Yh(t.i,e))n=e.F,Kw(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Bc(),dt(r,new kw(r,n)),Yc(t)}else rT(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&SN(t,e)||r==2&&zd(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Yr(t,5);break;case 4:Yr(t,10);break;case 3:Yr(t,6);break;default:Yr(t,2)}}}function oT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Yr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=At(t.pb,t);n||(n=new rs("//www.google.com/images/cleardot.gif"),re.location&&re.location.protocol=="http"||Ul(n,"https"),qc(n)),TN(n.toString(),r)}else Ot(2);t.H=0,t.h&&t.h.za(e),aT(t),tT(t)}U.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ot(2)):(this.l.info("Failed to ping google.com"),Ot(1))};function aT(t){if(t.H=0,t.ma=[],t.h){const e=zw(t.i);(e.length!=0||t.j.length!=0)&&(um(t.ma,e),um(t.ma,t.j),t.i.i.length=0,Pd(t.j),t.j.length=0),t.h.ya()}}function lT(t,e,n){var r=n instanceof rs?Xn(n):new rs(n);if(r.g!="")e&&(r.g=e+"."+r.g),$l(r,r.m);else{var s=re.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new rs(null);r&&Ul(i,r),e&&(i.g=e),s&&$l(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Le(r,n,e),Le(r,"VER",t.ra),_a(t,r),r}function cT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new He(new Kc({ob:!0})):new He(t.va),e.Oa(t.J),e}U.isActive=function(){return!!this.h&&this.h.isActive(this)};function uT(){}U=uT.prototype;U.Ba=function(){};U.Aa=function(){};U.za=function(){};U.ya=function(){};U.isActive=function(){return!0};U.Va=function(){};function Hl(){if(li&&!(10<=Number(Bk)))throw Error("Environmental error: no available transport.")}Hl.prototype.g=function(t,e){return new Gt(t,e)};function Gt(t,e){it.call(this),this.g=new eT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Vo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Vo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ni(this)}lt(Gt,it);Gt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ot(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=lT(t,null,t.Y),Yc(t)};Gt.prototype.close=function(){Kd(this.g)};Gt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ld(t),t=n);e.j.push(new _N(e.fb++,t)),e.H==3&&Yc(e)};Gt.prototype.N=function(){this.g.h=null,delete this.j,Kd(this.g),delete this.g,Gt.$.N.call(this)};function hT(t){Bd.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}lt(hT,Bd);function fT(){Hd.call(this),this.status=1}lt(fT,Hd);function Ni(t){this.g=t}lt(Ni,uT);Ni.prototype.Ba=function(){dt(this.g,"a")};Ni.prototype.Aa=function(t){dt(this.g,new hT(t))};Ni.prototype.za=function(t){dt(this.g,new fT)};Ni.prototype.ya=function(){dt(this.g,"b")};function PN(){this.blockSize=-1}function mn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}lt(mn,PN);mn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ku(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}mn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Ku(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Ku(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Ku(this,r),s=0;break}}this.h=s,this.i+=e};mn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Se(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var kN={};function Qd(t){return-128<=t&&128>t?Fk(t,function(e){return new Se([e|0],0>e?-1:0)}):new Se([t|0],0>t?-1:0)}function Pn(t){if(isNaN(t)||!isFinite(t))return Ks;if(0>t)return ht(Pn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Jh;return new Se(e,0)}function dT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ht(dT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Pn(Math.pow(e,8)),r=Ks,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Pn(Math.pow(e,i)),r=r.R(i).add(Pn(o))):(r=r.R(n),r=r.add(Pn(o)))}return r}var Jh=4294967296,Ks=Qd(0),Xh=Qd(1),wm=Qd(16777216);U=Se.prototype;U.ea=function(){if(Jt(this))return-ht(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Jh+r)*e,e*=Jh}return t};U.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Wn(this))return"0";if(Jt(this))return"-"+ht(this).toString(t);for(var e=Pn(Math.pow(t,6)),n=this,r="";;){var s=Wl(n,e).g;n=jl(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Wn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};U.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Wn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Jt(t){return t.h==-1}U.X=function(t){return t=jl(this,t),Jt(t)?-1:Wn(t)?0:1};function ht(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Se(n,~t.h).add(Xh)}U.abs=function(){return Jt(this)?ht(this):this};U.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Se(n,n[n.length-1]&-2147483648?-1:0)};function jl(t,e){return t.add(ht(e))}U.R=function(t){if(Wn(this)||Wn(t))return Ks;if(Jt(this))return Jt(t)?ht(this).R(ht(t)):ht(ht(this).R(t));if(Jt(t))return ht(this.R(ht(t)));if(0>this.X(wm)&&0>t.X(wm))return Pn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,za(n,2*r+2*s),n[2*r+2*s+1]+=i*l,za(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,za(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,za(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Se(n,0)};function za(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Wi(t,e){this.g=t,this.h=e}function Wl(t,e){if(Wn(e))throw Error("division by zero");if(Wn(t))return new Wi(Ks,Ks);if(Jt(t))return e=Wl(ht(t),e),new Wi(ht(e.g),ht(e.h));if(Jt(e))return e=Wl(t,ht(e)),new Wi(ht(e.g),e.h);if(30<t.g.length){if(Jt(t)||Jt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Xh,r=e;0>=r.X(t);)n=Tm(n),r=Tm(r);var s=Ss(n,1),i=Ss(r,1);for(r=Ss(r,2),n=Ss(n,2);!Wn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Ss(r,1),n=Ss(n,1)}return e=jl(t,s.R(e)),new Wi(s,e)}for(s=Ks;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Pn(n),o=i.R(e);Jt(o)||0<o.X(t);)n-=r,i=Pn(n),o=i.R(e);Wn(i)&&(i=Xh),s=s.add(i),t=jl(t,o)}return new Wi(s,t)}U.gb=function(t){return Wl(this,t).h};U.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Se(n,this.h&t.h)};U.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Se(n,this.h|t.h)};U.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Se(n,this.h^t.h)};function Tm(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Se(n,t.h)}function Ss(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Se(s,t.h)}Hl.prototype.createWebChannel=Hl.prototype.g;Gt.prototype.send=Gt.prototype.u;Gt.prototype.open=Gt.prototype.m;Gt.prototype.close=Gt.prototype.close;Hc.NO_ERROR=0;Hc.TIMEOUT=8;Hc.HTTP_ERROR=6;Nw.COMPLETE="complete";Ow.EventType=da;da.OPEN="a";da.CLOSE="b";da.ERROR="c";da.MESSAGE="d";it.prototype.listen=it.prototype.O;He.prototype.listenOnce=He.prototype.P;He.prototype.getLastError=He.prototype.Sa;He.prototype.getLastErrorCode=He.prototype.Ia;He.prototype.getStatus=He.prototype.da;He.prototype.getResponseJson=He.prototype.Wa;He.prototype.getResponseText=He.prototype.ja;He.prototype.send=He.prototype.ha;He.prototype.setWithCredentials=He.prototype.Oa;mn.prototype.digest=mn.prototype.l;mn.prototype.reset=mn.prototype.reset;mn.prototype.update=mn.prototype.j;Se.prototype.add=Se.prototype.add;Se.prototype.multiply=Se.prototype.R;Se.prototype.modulo=Se.prototype.gb;Se.prototype.compare=Se.prototype.X;Se.prototype.toNumber=Se.prototype.ea;Se.prototype.toString=Se.prototype.toString;Se.prototype.getBits=Se.prototype.D;Se.fromNumber=Pn;Se.fromString=dT;var NN=function(){return new Hl},ON=function(){return Bc()},zu=Hc,DN=Nw,xN=Es,Im={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ga=Ow,MN=He,LN=mn,zs=Se;const Am="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Oi="10.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new ca("@firebase/firestore");function Cm(){return hs.logLevel}function G(t,...e){if(hs.logLevel<=me.DEBUG){const n=e.map(Yd);hs.debug(`Firestore (${Oi}): ${t}`,...n)}}function Zn(t,...e){if(hs.logLevel<=me.ERROR){const n=e.map(Yd);hs.error(`Firestore (${Oi}): ${t}`,...n)}}function ci(t,...e){if(hs.logLevel<=me.WARN){const n=e.map(Yd);hs.warn(`Firestore (${Oi}): ${t}`,...n)}}function Yd(t){if(typeof t=="string")return t;try{/**
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
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${Oi}) INTERNAL ASSERTION FAILED: `+t;throw Zn(e),new Error(e)}function Xe(t,e){t||ae()}function ve(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class VN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class FN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class UN{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Ar;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ar,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ar)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Xe(typeof r.accessToken=="string"),new pT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string"),new _t(e)}}class $N{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class BN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new $N(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class HN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Xe(typeof n.token=="string"),this.R=n.token,new HN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function WN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=WN(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function ui(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Ze(0,0))}static max(){return new oe(new Ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ve extends qo{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const qN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends qo{construct(e,n,r){return new Nt(e,n,r)}static isValidIdentifier(e){return qN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new H(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new H(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(n)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ve.fromString(e))}static fromName(e){return new X(Ve.fromString(e).popFirst(5))}static empty(){return new X(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ve(e.slice()))}}function KN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new Ze(n+1,0):new Ze(n,r));return new Pr(s,X.empty(),e)}function zN(t){return new Pr(t.readTime,t.key,-1)}class Pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pr(oe.min(),X.empty(),-1)}static max(){return new Pr(oe.max(),X.empty(),-1)}}function GN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const QN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jd(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==QN)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new O((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new O((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ya(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Xd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Xd.ae=-1;function Jc(t){return t==null}function ql(t){return t===0&&1/t==-1/0}function JN(t){return typeof t=="number"&&Number.isInteger(t)&&!ql(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function va(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ot=class Zh{constructor(e,n){this.comparator=e,this.root=n||Cr.EMPTY}insert(e,n){return new Zh(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Cr.BLACK,null,null))}remove(e){return new Zh(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Cr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qa(this.root,e,this.comparator,!0)}},Qa=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Cr=class Bn{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Bn.RED,this.left=s??Bn.EMPTY,this.right=i??Bn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Bn(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Bn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Bn.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}};Cr.EMPTY=null,Cr.RED=!0,Cr.BLACK=!1;Cr.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Cr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bm(this.data.getIterator())}getIteratorFrom(e){return new bm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Rt(this.comparator);return n.data=e,n}}class bm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class yr{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new yr([])}unionWith(e){let n=new Rt(Nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ui(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class _T extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class St{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new _T("Invalid base64 string: "+i):i}}(e);return new St(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new St(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}St.EMPTY_BYTE_STRING=new St("");const XN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(Xe(!!t),typeof t=="string"){let e=0;const n=XN.exec(t);if(Xe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fs(t){return typeof t=="string"?St.fromBase64String(t):St.fromUint8Array(t)}/**
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
 */function Zd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ep(t){const e=t.mapValue.fields.__previous_value__;return Zd(e)?ep(e):e}function Ko(t){const e=kr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class zo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new zo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ya={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ds(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zd(t)?4:e1(t)?9007199254740991:10:ae()}function Ln(t,e){if(t===e)return!0;const n=ds(t);if(n!==ds(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ko(t).isEqual(Ko(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=kr(s.timestampValue),a=kr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return fs(s.bytesValue).isEqual(fs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ze(s.doubleValue),a=ze(i.doubleValue);return o===a?ql(o)===ql(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ui(t.arrayValue.values||[],e.arrayValue.values||[],Ln);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Rm(o)!==Rm(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ln(o[l],a[l])))return!1;return!0}(t,e);default:return ae()}}function Go(t,e){return(t.values||[]).find(n=>Ln(n,e))!==void 0}function hi(t,e){if(t===e)return 0;const n=ds(t),r=ds(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ze(i.integerValue||i.doubleValue),l=ze(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Sm(t.timestampValue,e.timestampValue);case 4:return Sm(Ko(t),Ko(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(i,o){const a=fs(i),l=fs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Ie(a[c],l[c]);if(u!==0)return u}return Ie(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Ie(ze(i.latitude),ze(o.latitude));return a!==0?a:Ie(ze(i.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=hi(a[c],l[c]);if(u)return u}return Ie(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Ya.mapValue&&o===Ya.mapValue)return 0;if(i===Ya.mapValue)return 1;if(o===Ya.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=Ie(l[h],u[h]);if(f!==0)return f;const d=hi(a[l[h]],c[u[h]]);if(d!==0)return d}return Ie(l.length,u.length)}(t.mapValue,e.mapValue);default:throw ae()}}function Sm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=kr(t),r=kr(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function fi(t){return ef(t)}function ef(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return fs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ef(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ef(n.fields[o])}`;return s+"}"}(t.mapValue):ae()}function Pm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function tf(t){return!!t&&"integerValue"in t}function tp(t){return!!t&&"arrayValue"in t}function km(t){return!!t&&"nullValue"in t}function Nm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Gu(t){return!!t&&"mapValue"in t}function mo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return va(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=mo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function e1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.value=e}static empty(){return new bn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Gu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mo(n)}setAll(e){let n=Nt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=mo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Gu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Gu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){va(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new bn(mo(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new vt(e,0,oe.min(),oe.min(),oe.min(),bn.empty(),0)}static newFoundDocument(e,n,r,s){return new vt(e,1,n,oe.min(),r,s,0)}static newNoDocument(e,n){return new vt(e,2,n,oe.min(),oe.min(),bn.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,oe.min(),oe.min(),bn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Kl{constructor(e,n){this.position=e,this.inclusive=n}}function Om(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=hi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ln(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Gs{constructor(e,n="asc"){this.field=e,this.dir=n}}function t1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class yT{}class Qe extends yT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new r1(e,n,r):n==="array-contains"?new o1(e,r):n==="in"?new a1(e,r):n==="not-in"?new l1(e,r):n==="array-contains-any"?new c1(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new s1(e,r):new i1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(hi(n,this.value)):n!==null&&ds(this.value)===ds(n)&&this.matchesComparison(hi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class _n extends yT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new _n(e,n)}matches(e){return vT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function vT(t){return t.op==="and"}function ET(t){return n1(t)&&vT(t)}function n1(t){for(const e of t.filters)if(e instanceof _n)return!1;return!0}function nf(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+fi(t.value);if(ET(t))return t.filters.map(e=>nf(e)).join(",");{const e=t.filters.map(n=>nf(n)).join(",");return`${t.op}(${e})`}}function wT(t,e){return t instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&Ln(r.value,s.value)}(t,e):t instanceof _n?function(r,s){return s instanceof _n&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&wT(o,s.filters[a]),!0):!1}(t,e):void ae()}function TT(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${fi(n.value)}`}(t):t instanceof _n?function(n){return n.op.toString()+" {"+n.getFilters().map(TT).join(" ,")+"}"}(t):"Filter"}class r1 extends Qe{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class s1 extends Qe{constructor(e,n){super(e,"in",n),this.keys=IT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class i1 extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=IT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function IT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class o1 extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tp(n)&&Go(n.arrayValue,this.value)}}class a1 extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Go(this.value.arrayValue,n)}}class l1 extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Go(this.value.arrayValue,n)}}class c1 extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Go(this.value.arrayValue,r))}}/**
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
 */class u1{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function xm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new u1(t,e,n,r,s,i,o)}function np(t){const e=ve(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>nf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Jc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fi(r)).join(",")),e.he=n}return e.he}function rp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!t1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dm(t.startAt,e.startAt)&&Dm(t.endAt,e.endAt)}function rf(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function h1(t,e,n,r,s,i,o,a){return new Di(t,e,n,r,s,i,o,a)}function sp(t){return new Di(t)}function Mm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ip(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Xc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function AT(t){return t.collectionGroup!==null}function _o(t){const e=ve(t);if(e.Pe===null){e.Pe=[];const n=Xc(e),r=ip(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Gs(n)),e.Pe.push(new Gs(Nt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Gs(Nt.keyField(),i))}}}return e.Pe}function er(t){const e=ve(t);return e.Ie||(e.Ie=f1(e,_o(t))),e.Ie}function f1(t,e){if(t.limitType==="F")return xm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Gs(s.field,i)});const n=t.endAt?new Kl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Kl(t.startAt.position,t.startAt.inclusive):null;return xm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function sf(t,e){e.getFirstInequalityField(),Xc(t);const n=t.filters.concat([e]);return new Di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function zl(t,e,n){return new Di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zc(t,e){return rp(er(t),er(e))&&t.limitType===e.limitType}function CT(t){return`${np(er(t))}|lt:${t.limitType}`}function of(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>TT(s)).join(", ")}]`),Jc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>fi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>fi(s)).join(",")),`Target(${r})`}(er(t))}; limitType=${t.limitType})`}function eu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of _o(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=Om(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,_o(r),s)||r.endAt&&!function(o,a,l){const c=Om(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,_o(r),s))}(t,e)}function d1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function RT(t){return(e,n)=>{let r=!1;for(const s of _o(t)){const i=p1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function p1(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?hi(l,c):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){va(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return mT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=new ot(X.comparator);function Nr(){return g1}const bT=new ot(X.comparator);function so(...t){let e=bT;for(const n of t)e=e.insert(n.key,n);return e}function m1(t){let e=bT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Jr(){return yo()}function ST(){return yo()}function yo(){return new xi(t=>t.toString(),(t,e)=>t.isEqual(e))}const _1=new Rt(X.comparator);function _e(...t){let e=_1;for(const n of t)e=e.add(n);return e}const y1=new Rt(Ie);function v1(){return y1}/**
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
 */function PT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ql(e)?"-0":e}}function kT(t){return{integerValue:""+t}}function E1(t,e){return JN(e)?kT(e):PT(t,e)}/**
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
 */class tu{constructor(){this._=void 0}}function w1(t,e,n){return t instanceof af?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Zd(i)&&(i=ep(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Gl?NT(t,e):t instanceof Ql?OT(t,e):function(s,i){const o=I1(s,i),a=Lm(o)+Lm(s.Ee);return tf(o)&&tf(s.Ee)?kT(a):PT(s.serializer,a)}(t,e)}function T1(t,e,n){return t instanceof Gl?NT(t,e):t instanceof Ql?OT(t,e):n}function I1(t,e){return t instanceof lf?function(r){return tf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class af extends tu{}class Gl extends tu{constructor(e){super(),this.elements=e}}function NT(t,e){const n=DT(e);for(const r of t.elements)n.some(s=>Ln(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ql extends tu{constructor(e){super(),this.elements=e}}function OT(t,e){let n=DT(e);for(const r of t.elements)n=n.filter(s=>!Ln(s,r));return{arrayValue:{values:n}}}class lf extends tu{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Lm(t){return ze(t.integerValue||t.doubleValue)}function DT(t){return tp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function A1(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Gl&&s instanceof Gl||r instanceof Ql&&s instanceof Ql?ui(r.elements,s.elements,Ln):r instanceof lf&&s instanceof lf?Ln(r.Ee,s.Ee):r instanceof af&&s instanceof af}(t.transform,e.transform)}class ss{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ss}static exists(e){return new ss(void 0,e)}static updateTime(e){return new ss(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class op{}function xT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new R1(t.key,ss.none()):new ap(t.key,t.data,ss.none());{const n=t.data,r=bn.empty();let s=new Rt(Nt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new nu(t.key,r,new yr(s.toArray()),ss.none())}}function C1(t,e,n){t instanceof ap?function(s,i,o){const a=s.value.clone(),l=Fm(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof nu?function(s,i,o){if(!fl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Fm(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(MT(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function vo(t,e,n,r){return t instanceof ap?function(i,o,a,l){if(!fl(i.precondition,o))return a;const c=i.value.clone(),u=Um(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof nu?function(i,o,a,l){if(!fl(i.precondition,o))return a;const c=Um(i.fieldTransforms,l,o),u=o.data;return u.setAll(MT(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return fl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Vm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ui(r,s,(i,o)=>A1(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ap extends op{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class nu extends op{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function MT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Fm(t,e,n){const r=new Map;Xe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,T1(o,a,n[s]))}return r}function Um(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,w1(i,o,e))}return r}class R1 extends op{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&C1(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ST();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=xT(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&ui(this.mutations,e.mutations,(n,r)=>Vm(n,r))&&ui(this.baseMutations,e.baseMutations,(n,r)=>Vm(n,r))}}/**
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
 */class S1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class P1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,fe;function LT(t){if(t===void 0)return Zn("GRPC error has no .code"),N.UNKNOWN;switch(t){case Ke.OK:return N.OK;case Ke.CANCELLED:return N.CANCELLED;case Ke.UNKNOWN:return N.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return N.INTERNAL;case Ke.UNAVAILABLE:return N.UNAVAILABLE;case Ke.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Ke.NOT_FOUND:return N.NOT_FOUND;case Ke.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Ke.ABORTED:return N.ABORTED;case Ke.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Ke.DATA_LOSS:return N.DATA_LOSS;default:return ae()}}(fe=Ke||(Ke={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function k1(){return new TextEncoder}/**
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
 */const N1=new zs([4294967295,4294967295],0);function $m(t){const e=k1().encode(t),n=new LN;return n.update(e),new Uint8Array(n.digest())}function Bm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new zs([n,r],0),new zs([s,i],0)]}class lp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new io(`Invalid padding: ${n}`);if(r<0)throw new io(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new io(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new io(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=zs.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(zs.fromNumber(r)));return s.compare(N1)===1&&(s=new zs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=$m(e),[r,s]=Bm(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new lp(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=$m(e),[r,s]=Bm(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class io extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ea.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ru(oe.min(),s,new ot(Ie),Nr(),_e())}}class Ea{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ea(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class VT{constructor(e,n){this.targetId=e,this.ye=n}}class FT{constructor(e,n,r=St.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Hm{constructor(){this.we=0,this.Se=Wm(),this.be=St.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=_e(),n=_e(),r=_e();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae()}}),new Ea(this.be,this.De,e,n,r)}Oe(){this.ve=!1,this.Se=Wm()}Ne(e,n){this.ve=!0,this.Se=this.Se.insert(e,n)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class O1{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Nr(),this.Ue=jm(),this.We=new ot(Ie)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(rf(i))if(r===0){const o=new X(i.path);this.je(n,o,vt.newNoDocument(o,oe.min()))}else Xe(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,c)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=fs(r).toUint8Array()}catch(l){if(l instanceof _T)return ci("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new lp(o,s,i)}catch(l){return ci(l instanceof io?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&rf(a.target)){const l=new X(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,vt.newNoDocument(l,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=_e();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.et(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new ru(e,n,this.We,this.$e,r);return this.$e=Nr(),this.Ue=jm(),this.We=new ot(Ie),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new Hm,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Rt(Ie),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.Ce?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Hm),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function jm(){return new ot(X.comparator)}function Wm(){return new ot(X.comparator)}const D1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),x1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),M1=(()=>({and:"AND",or:"OR"}))();class L1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function cf(t,e){return t.useProto3Json||Jc(e)?e:{value:e}}function uf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function UT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Qs(t){return Xe(!!t),oe.fromTimestamp(function(n){const r=kr(n);return new Ze(r.seconds,r.nanos)}(t))}function $T(t,e){return function(r){return new Ve(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function BT(t){const e=Ve.fromString(t);return Xe(qT(e)),e}function Qu(t,e){const n=BT(e);if(n.get(1)!==t.databaseId.projectId)throw new H(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(HT(n))}function hf(t,e){return $T(t.databaseId,e)}function V1(t){const e=BT(t);return e.length===4?Ve.emptyPath():HT(e)}function qm(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function HT(t){return Xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function F1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(Xe(u===void 0||typeof u=="string"),St.fromBase64String(u||"")):(Xe(u===void 0||u instanceof Uint8Array),St.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?N.UNKNOWN:LT(c.code);return new H(u,c.message||"")}(o);n=new FT(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Qu(t,r.document.name),i=Qs(r.document.updateTime),o=r.document.createTime?Qs(r.document.createTime):oe.min(),a=new bn({mapValue:{fields:r.document.fields}}),l=vt.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new dl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Qu(t,r.document),i=r.readTime?Qs(r.readTime):oe.min(),o=vt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new dl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Qu(t,r.document),i=r.removedTargetIds||[];n=new dl([],i,s,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new P1(s,i),a=r.targetId;n=new VT(a,o)}}return n}function U1(t,e){return{documents:[hf(t,e.path)]}}function $1(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=hf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=hf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return WT(_n.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Ds(h.field),direction:j1(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=cf(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function B1(t){let e=V1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Xe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=jT(h);return f instanceof _n&&ET(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(p){return new Gs(xs(p.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Jc(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new Kl(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new Kl(d,f)}(n.endAt)),h1(e,s,o,i,a,"F",l,c)}function H1(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function jT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=xs(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xs(n.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xs(n.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=xs(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(xs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return _n.create(n.compositeFilter.filters.map(r=>jT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function j1(t){return D1[t]}function W1(t){return x1[t]}function q1(t){return M1[t]}function Ds(t){return{fieldPath:t.canonicalString()}}function xs(t){return Nt.fromServerFormat(t.fieldPath)}function WT(t){return t instanceof Qe?function(n){if(n.op==="=="){if(Nm(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NAN"}};if(km(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Nm(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NOT_NAN"}};if(km(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ds(n.field),op:W1(n.op),value:n.value}}}(t):t instanceof _n?function(n){const r=n.getFilters().map(s=>WT(s));return r.length===1?r[0]:{compositeFilter:{op:q1(n.op),filters:r}}}(t):ae()}function qT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,r,s,i=oe.min(),o=oe.min(),a=St.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e){this.ht=e}}function z1(t){const e=B1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zl(e,e.limit,"L"):e}/**
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
 */class G1{constructor(){this._n=new Q1}addToCollectionParentIndex(e,n){return this._n.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Pr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class Q1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Rt(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Rt(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new di(0)}static Bn(){return new di(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(){this.changes=new xi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class J1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&vo(r.mutation,s,yr.empty(),Ze.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=Jr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=so();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Nr();const o=yo(),a=function(){return yo()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof nu)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),vo(u.mutation,c,u.mutation.getFieldMask(),Ze.now())):o.set(c.key,yr.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new J1(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=yo();let s=new ot((o,a)=>o-a),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||yr.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||_e()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=ST();u.forEach(f=>{if(!i.has(f)){const d=xT(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return X.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):AT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):O.resolve(Jr());let a=-1,l=i;return o.next(c=>O.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?O.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,_e())).next(u=>({batchId:a,changes:m1(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let s=so();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=so();return this.indexManager.getCollectionParents(e,s).next(o=>O.forEach(o,a=>{const l=function(u,h){return new Di(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,vt.newInvalidDocument(c)))});let o=so();return i.forEach((a,l)=>{const c=s.get(a);c!==void 0&&vo(c.mutation,l,yr.empty(),Ze.now()),eu(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class Z1{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return O.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Qs(s.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:z1(s.bundledQuery),readTime:Qs(s.readTime)}}(n)),O.resolve()}}/**
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
 */class eO{constructor(){this.overlays=new ot(X.comparator),this.hr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Jr();return O.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const s=Jr(),i=n.length+1,o=new X(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return O.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ot((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Jr(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Jr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return O.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new S1(n,r));let i=this.hr.get(n);i===void 0&&(i=_e(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(){this.Pr=new Rt(tt.Ir),this.Tr=new Rt(tt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new tt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new X(new Ve([])),r=new tt(n,e),s=new tt(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new X(new Ve([])),r=new tt(n,e),s=new tt(n,e+1);let i=_e();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new tt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return X.comparator(e.key,n.key)||Ie(e.pr,n.pr)}static Er(e,n){return Ie(e.pr,n.pr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Rt(tt.Ir)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new b1(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new tt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),s=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Rt(Ie);return n.forEach(s=>{const i=new tt(s,0),o=new tt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),O.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const o=new tt(new X(i),0);let a=new Rt(Ie);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.pr)),!0)},o),O.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Xe(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return O.forEach(n.mutations,s=>{const i=new tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new tt(n,0),s=this.wr.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}vr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.Cr=e,this.docs=function(){return new ot(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=Nr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Nr();const o=n.path,a=new X(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||GN(zN(u),r)<=0||(s.has(u.key)||eu(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae()}Fr(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new rO(this)}getSize(e){return O.resolve(this.size)}}class rO extends Y1{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.persistence=e,this.Mr=new xi(n=>np(n),rp),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Or=0,this.Nr=new cp,this.targetCount=0,this.Br=di.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),O.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new di(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.qn(n),O.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Xd(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new sO(this),this.indexManager=new G1,this.remoteDocumentCache=function(s){return new nO(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new K1(n),this.$r=new Z1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new tO(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const s=new oO(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return O.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class oO extends YN{constructor(e){super(),this.currentSequenceNumber=e}}class up{constructor(e){this.persistence=e,this.zr=new cp,this.jr=null}static Hr(e){return new up(e)}get Jr(){if(this.jr)return this.jr;throw ae()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),O.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Jr,r=>{const s=X.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,oe.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return O.or([()=>O.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new hp(e,n.fromCache,r,s)}}/**
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
 */class aO{constructor(){this.$i=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Wi(e,n).next(i=>i||this.Gi(e,n,s,r)).next(i=>i||this.zi(e,n))}Wi(e,n){if(Mm(n))return O.resolve(null);let r=er(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=zl(n,null,"F"),r=er(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ji(n,a);return this.Hi(n,c,o,l.readTime)?this.Wi(e,zl(n,null,"F")):this.Ji(e,c,n,l)}))})))}Gi(e,n,r,s){return Mm(n)||s.isEqual(oe.min())?this.zi(e,n):this.Ui.getDocuments(e,r).next(i=>{const o=this.ji(n,i);return this.Hi(n,o,r,s)?this.zi(e,n):(Cm()<=me.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),of(n)),this.Ji(e,o,n,KN(s,-1)))})}ji(e,n){let r=new Rt(RT(e));return n.forEach((s,i)=>{eu(e,i)&&(r=r.add(i))}),r}Hi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}zi(e,n){return Cm()<=me.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",of(n)),this.Ui.getDocumentsMatchingQuery(e,n,Pr.min())}Ji(e,n,r,s){return this.Ui.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class lO{constructor(e,n,r,s){this.persistence=e,this.Yi=n,this.serializer=s,this.Zi=new ot(Ie),this.Xi=new xi(i=>np(i),rp),this.es=new Map,this.ts=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this.ns(r)}ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new X1(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Zi))}}function cO(t,e,n,r){return new lO(t,e,n,r)}async function KT(t,e){const n=ve(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ns(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=_e();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({rs:c,removedBatchIds:o,addedBatchIds:a}))})})}function zT(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function uO(t,e){const n=ve(t),r=e.snapshotVersion;let s=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});s=n.Zi;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(St.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(h,d),function(v,T,y){return v.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,d,u)&&a.push(n.Qr.updateTargetData(i,d))});let l=Nr(),c=_e();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(hO(i,o,e.documentUpdates).next(u=>{l=u.ss,c=u.os})),!r.isEqual(oe.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return O.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.Zi=s,i))}function hO(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Nr();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(oe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ss:o,os:s}})}function fO(t,e){const n=ve(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Zi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(r.targetId,r),n.Xi.set(e,r.targetId)),r})}async function ff(t,e,n){const r=ve(t),s=r.Zi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ya(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Zi=r.Zi.remove(e),r.Xi.delete(s.target)}function Km(t,e,n){const r=ve(t);let s=oe.min(),i=_e();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=ve(l),f=h.Xi.get(u);return f!==void 0?O.resolve(h.Zi.get(f)):h.Qr.getTargetData(c,u)}(r,o,er(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,e,n?s:oe.min(),n?i:_e())).next(a=>(dO(r,d1(e),a),{documents:a,_s:i})))}function dO(t,e,n){let r=t.es.get(e)||oe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.es.set(e,r)}class zm{constructor(){this.activeTargetIds=v1()}Is(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ts(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ps(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pO{constructor(){this.Ys=new zm,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ys.Is(e),this.Zs[e]||"not-current"}updateQueryState(e,n,r){this.Zs[e]=n}removeLocalQueryTarget(e){this.Ys.Ts(e)}isLocalQueryTarget(e){return this.Ys.activeTargetIds.has(e)}clearQueryState(e){delete this.Zs[e]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(e){return this.Ys.activeTargetIds.has(e)}start(){return this.Ys=new zm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gO{Xs(e){}shutdown(){}}/**
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
 */class Gm{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}io(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ja=null;function Yu(){return Ja===null?Ja=function(){return 268435456+Math.round(2147483648*Math.random())}():Ja++,"0x"+Ja.toString(16)}/**
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
 */const mO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e){this._o=e._o,this.ao=e.ao}uo(e){this.co=e}lo(e){this.ho=e}onMessage(e){this.Po=e}close(){this.ao()}send(e){this._o(e)}Io(){this.co()}To(e){this.ho(e)}Eo(e){this.Po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class yO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+n.host,this.Ro=`projects/${s}/databases/${i}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get mo(){return!1}fo(n,r,s,i,o){const a=Yu(),l=this.po(n,r);G("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(c,i,o),this.wo(n,l,c,s).then(u=>(G("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ci("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}So(n,r,s,i,o,a){return this.fo(n,r,s,i,o)}yo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Oi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}po(n,r){const s=mO[n];return`${this.Ao}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}wo(e,n,r,s){const i=Yu();return new Promise((o,a)=>{const l=new MN;l.setWithCredentials(!0),l.listenOnce(DN.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case zu.NO_ERROR:const u=l.getResponseJson();G(gt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case zu.TIMEOUT:G(gt,`RPC '${e}' ${i} timed out`),a(new H(N.DEADLINE_EXCEEDED,"Request time out"));break;case zu.HTTP_ERROR:const h=l.getStatus();if(G(gt,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(T){const y=T.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(y)>=0?y:N.UNKNOWN}(d.status);a(new H(p,d.message))}else a(new H(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new H(N.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{G(gt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);G(gt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}bo(e,n,r){const s=Yu(),i=[this.Ao,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=NN(),a=ON(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.yo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");G(gt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,d=!1;const p=new _O({_o:T=>{d?G(gt,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(f||(G(gt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),G(gt,`RPC '${e}' stream ${s} sending:`,T),h.send(T))},ao:()=>h.close()}),v=(T,y,m)=>{T.listen(y,I=>{try{m(I)}catch(E){setTimeout(()=>{throw E},0)}})};return v(h,Ga.EventType.OPEN,()=>{d||G(gt,`RPC '${e}' stream ${s} transport opened.`)}),v(h,Ga.EventType.CLOSE,()=>{d||(d=!0,G(gt,`RPC '${e}' stream ${s} transport closed`),p.To())}),v(h,Ga.EventType.ERROR,T=>{d||(d=!0,ci(gt,`RPC '${e}' stream ${s} transport errored:`,T),p.To(new H(N.UNAVAILABLE,"The operation could not be completed")))}),v(h,Ga.EventType.MESSAGE,T=>{var y;if(!d){const m=T.data[0];Xe(!!m);const I=m,E=I.error||((y=I[0])===null||y===void 0?void 0:y.error);if(E){G(gt,`RPC '${e}' stream ${s} received error:`,E);const R=E.status;let D=function(K){const W=Ke[K];if(W!==void 0)return LT(W)}(R),M=E.message;D===void 0&&(D=N.INTERNAL,M="Unknown error status: "+R+" with message "+E.message),d=!0,p.To(new H(D,M)),h.close()}else G(gt,`RPC '${e}' stream ${s} received:`,m),p.Eo(m)}}),v(a,xN.STAT_EVENT,T=>{T.stat===Im.PROXY?G(gt,`RPC '${e}' stream ${s} detected buffering proxy`):T.stat===Im.NOPROXY&&G(gt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{p.Io()},0),p}}function Ju(){return typeof document<"u"?document:null}/**
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
 */function su(t){return new L1(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Do=r,this.vo=s,this.Co=i,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(e){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),s=Math.max(0,n-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.xo=Date.now(),e())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,n,r,s,i,o,a,l){this.oi=e,this.ko=r,this.qo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new GT(e,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(e){this.Zo(),this.stream.send(e)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(e,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,e!==4?this.Uo.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(Zn(n.toString()),Zn("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.lo(n)}e_(){}auth(){this.state=1;const e=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Qo===n&&this.n_(r,s)},r=>{e(()=>{const s=new H(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(s)})})}n_(e,n){const r=this.t_(this.Qo);this.stream=this.i_(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(s=>{r(()=>this.r_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}t_(e){return n=>{this.oi.enqueueAndForget(()=>this.Qo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EO extends vO{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}i_(e,n){return this.connection.bo("Listen",e,n)}onMessage(e){this.Uo.reset();const n=F1(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?Qs(o.readTime):oe.min()}(e);return this.listener.s_(n,r)}o_(e){const n={};n.database=qm(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=rf(l)?{documents:U1(i,l)}:{query:$1(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=UT(i,o.resumeToken);const c=cf(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(oe.min())>0){a.readTime=uf(i,o.snapshotVersion.toTimestamp());const c=cf(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=H1(this.serializer,e);r&&(n.labels=r),this.Yo(n)}__(e){const n={};n.database=qm(this.serializer),n.removeTarget=e,this.Yo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.I_=!1}T_(){if(this.I_)throw new H(N.FAILED_PRECONDITION,"The client has already been terminated.")}fo(e,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.fo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(N.UNKNOWN,s.toString())})}So(e,n,r,s){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(N.UNKNOWN,i.toString())})}terminate(){this.I_=!0}}class TO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(e){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.m_("Offline")))}set(e){this.p_(),this.d_=0,e==="Online"&&(this.R_=!1),this.m_(e)}m_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}f_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(Zn(n),this.R_=!1):G("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=i,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{Ta(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ve(l);c.S_.add(4),await wa(c),c.v_.set("Unknown"),c.S_.delete(4),await iu(c)}(this))})}),this.v_=new TO(r,s)}}async function iu(t){if(Ta(t))for(const e of t.b_)await e(!0)}async function wa(t){for(const e of t.b_)await e(!1)}function QT(t,e){const n=ve(t);n.w_.has(e.targetId)||(n.w_.set(e.targetId,e),pp(n)?dp(n):Mi(n).Go()&&fp(n,e))}function YT(t,e){const n=ve(t),r=Mi(n);n.w_.delete(e),r.Go()&&JT(n,e),n.w_.size===0&&(r.Go()?r.Ho():Ta(n)&&n.v_.set("Unknown"))}function fp(t,e){if(t.C_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Mi(t).o_(e)}function JT(t,e){t.C_.Le(e),Mi(t).__(e)}function dp(t){t.C_=new O1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.w_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Mi(t).start(),t.v_.V_()}function pp(t){return Ta(t)&&!Mi(t).Wo()&&t.w_.size>0}function Ta(t){return ve(t).S_.size===0}function XT(t){t.C_=void 0}async function AO(t){t.w_.forEach((e,n)=>{fp(t,e)})}async function CO(t,e){XT(t),pp(t)?(t.v_.g_(e),dp(t)):t.v_.set("Unknown")}async function RO(t,e,n){if(t.v_.set("Online"),e instanceof FT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.w_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.w_.delete(a),s.C_.removeTarget(a))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Qm(t,r)}else if(e instanceof dl?t.C_.Ge(e):e instanceof VT?t.C_.Xe(e):t.C_.He(e),!n.isEqual(oe.min()))try{const r=await zT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.C_._t(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.w_.get(c);u&&i.w_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.w_.get(l);if(!u)return;i.w_.set(l,u.withResumeToken(St.EMPTY_BYTE_STRING,u.snapshotVersion)),JT(i,l);const h=new vr(u.target,l,c,u.sequenceNumber);fp(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await Qm(t,r)}}async function Qm(t,e,n){if(!ya(e))throw e;t.S_.add(1),await wa(t),t.v_.set("Offline"),n||(n=()=>zT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.S_.delete(1),await iu(t)})}async function Ym(t,e){const n=ve(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=Ta(n);n.S_.add(3),await wa(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.S_.delete(3),await iu(n)}async function bO(t,e){const n=ve(t);e?(n.S_.delete(2),await iu(n)):e||(n.S_.add(2),await wa(n),n.v_.set("Unknown"))}function Mi(t){return t.F_||(t.F_=function(n,r,s){const i=ve(n);return i.T_(),new EO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{uo:AO.bind(null,t),lo:CO.bind(null,t),s_:RO.bind(null,t)}),t.b_.push(async e=>{e?(t.F_.jo(),pp(t)?dp(t):t.v_.set("Unknown")):(await t.F_.stop(),XT(t))})),t.F_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new gp(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ZT(t,e){if(Zn("AsyncQueue",`${e}: ${t}`),ya(t))return new H(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=so(),this.sortedSet=new ot(this.comparator)}static emptySet(e){return new Ys(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ys;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.x_=new ot(X.comparator)}track(e){const n=e.doc.key,r=this.x_.get(n);r?e.type!==0&&r.type===3?this.x_=this.x_.insert(n,e):e.type===3&&r.type!==1?this.x_=this.x_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.x_=this.x_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.x_=this.x_.remove(n):e.type===1&&r.type===2?this.x_=this.x_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):ae():this.x_=this.x_.insert(n,e)}O_(){const e=[];return this.x_.inorderTraversal((n,r)=>{e.push(r)}),e}}class pi{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new pi(e,n,Ys.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(){this.N_=void 0,this.listeners=[]}}class PO{constructor(){this.queries=new xi(e=>CT(e),Zc),this.onlineState="Unknown",this.B_=new Set}}async function e0(t,e){const n=ve(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new SO),s)try{i.N_=await n.onListen(r)}catch(o){const a=ZT(o,`Initialization of query '${of(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.L_(n.onlineState),i.N_&&e.k_(i.N_)&&mp(n)}async function t0(t,e){const n=ve(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function kO(t,e){const n=ve(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.k_(s)&&(r=!0);o.N_=s}}r&&mp(n)}function NO(t,e,n){const r=ve(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function mp(t){t.B_.forEach(e=>{e.next()})}class n0{constructor(e,n,r){this.query=e,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new pi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Q_?this.U_(e)&&(this.q_.next(e),n=!0):this.W_(e,this.onlineState)&&(this.G_(e),n=!0),this.K_=e,n}onError(e){this.q_.error(e)}L_(e){this.onlineState=e;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,e)&&(this.G_(this.K_),n=!0),n}W_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}U_(e){if(e.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(e){e=pi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Q_=!0,this.q_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.key=e}}class s0{constructor(e){this.key=e}}class OO{constructor(e,n){this.query=e,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=_e(),this.mutatedKeys=_e(),this.ia=RT(e),this.sa=new Ys(this.ia)}get oa(){return this.ta}_a(e,n){const r=n?n.aa:new Jm,s=n?n.sa:this.sa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=eu(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),v=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let T=!1;f&&d?f.data.isEqual(d.data)?p!==v&&(r.track({type:3,doc:d}),T=!0):this.ua(f,d)||(r.track({type:2,doc:d}),T=!0,(l&&this.ia(d,l)>0||c&&this.ia(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),T=!0):f&&!d&&(r.track({type:1,doc:f}),T=!0,(l||c)&&(a=!0)),T&&(d?(o=o.add(d),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{sa:o,aa:r,Hi:a,mutatedKeys:i}}ua(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.sa;this.sa=e.sa,this.mutatedKeys=e.mutatedKeys;const i=e.aa.O_();i.sort((c,u)=>function(f,d){const p=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return p(f)-p(d)}(c.type,u.type)||this.ia(c.doc,u.doc)),this.ca(r);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,l=a!==this.na;return this.na=a,i.length!==0||l?{snapshot:new pi(this.query,e.sa,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new Jm,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(e){return!this.ta.has(e)&&!!this.sa.has(e)&&!this.sa.get(e).hasLocalMutations}ca(e){e&&(e.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=e.current)}la(){if(!this.current)return[];const e=this.ra;this.ra=_e(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const n=[];return e.forEach(r=>{this.ra.has(r)||n.push(new s0(r))}),this.ra.forEach(r=>{e.has(r)||n.push(new r0(r))}),n}Ia(e){this.ta=e._s,this.ra=_e();const n=this._a(e.documents);return this.applyChanges(n,!0)}Ta(){return pi.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class DO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xO{constructor(e){this.key=e,this.Ea=!1}}class MO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new xi(a=>CT(a),Zc),this.Ra=new Map,this.Va=new Set,this.ma=new ot(X.comparator),this.fa=new Map,this.ga=new cp,this.pa={},this.ya=new Map,this.wa=di.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function LO(t,e){const n=jO(t);let r,s;const i=n.Aa.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Ta();else{const o=await fO(n.localStore,er(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await VO(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&QT(n.remoteStore,o)}return s}async function VO(t,e,n,r,s){t.ba=(h,f,d)=>async function(v,T,y,m){let I=T.view._a(y);I.Hi&&(I=await Km(v.localStore,T.query,!1).then(({documents:D})=>T.view._a(D,I)));const E=m&&m.targetChanges.get(T.targetId),R=T.view.applyChanges(I,v.isPrimaryClient,E);return Zm(v,T.targetId,R.ha),R.snapshot}(t,h,f,d);const i=await Km(t.localStore,e,!0),o=new OO(e,i._s),a=o._a(i.documents),l=Ea.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Zm(t,n,c.ha);const u=new DO(e,n,o);return t.Aa.set(e,u),t.Ra.has(n)?t.Ra.get(n).push(e):t.Ra.set(n,[e]),c.snapshot}async function FO(t,e){const n=ve(t),r=n.Aa.get(e),s=n.Ra.get(r.targetId);if(s.length>1)return n.Ra.set(r.targetId,s.filter(i=>!Zc(i,e))),void n.Aa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ff(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),YT(n.remoteStore,r.targetId),df(n,r.targetId)}).catch(Jd)):(df(n,r.targetId),await ff(n.localStore,r.targetId,!0))}async function i0(t,e){const n=ve(t);try{const r=await uO(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.fa.get(i);o&&(Xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ea=!0:s.modifiedDocuments.size>0?Xe(o.Ea):s.removedDocuments.size>0&&(Xe(o.Ea),o.Ea=!1))}),await a0(n,r,e)}catch(r){await Jd(r)}}function Xm(t,e,n){const r=ve(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Aa.forEach((i,o)=>{const a=o.view.L_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ve(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.listeners)f.L_(a)&&(c=!0)}),c&&mp(l)}(r.eventManager,e),s.length&&r.da.s_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function UO(t,e,n){const r=ve(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.fa.get(e),i=s&&s.key;if(i){let o=new ot(X.comparator);o=o.insert(i,vt.newNoDocument(i,oe.min()));const a=_e().add(i),l=new ru(oe.min(),new Map,new ot(Ie),o,a);await i0(r,l),r.ma=r.ma.remove(i),r.fa.delete(e),_p(r)}else await ff(r.localStore,e,!1).then(()=>df(r,e,n)).catch(Jd)}function df(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ra.get(e))t.Aa.delete(r),n&&t.da.Da(r,n);t.Ra.delete(e),t.isPrimaryClient&&t.ga.Vr(e).forEach(r=>{t.ga.containsKey(r)||o0(t,r)})}function o0(t,e){t.Va.delete(e.path.canonicalString());const n=t.ma.get(e);n!==null&&(YT(t.remoteStore,n),t.ma=t.ma.remove(e),t.fa.delete(n),_p(t))}function Zm(t,e,n){for(const r of n)r instanceof r0?(t.ga.addReference(r.key,e),$O(t,r)):r instanceof s0?(G("SyncEngine","Document no longer in limbo: "+r.key),t.ga.removeReference(r.key,e),t.ga.containsKey(r.key)||o0(t,r.key)):ae()}function $O(t,e){const n=e.key,r=n.path.canonicalString();t.ma.get(n)||t.Va.has(r)||(G("SyncEngine","New document in limbo: "+n),t.Va.add(r),_p(t))}function _p(t){for(;t.Va.size>0&&t.ma.size<t.maxConcurrentLimboResolutions;){const e=t.Va.values().next().value;t.Va.delete(e);const n=new X(Ve.fromString(e)),r=t.wa.next();t.fa.set(r,new xO(n)),t.ma=t.ma.insert(n,r),QT(t.remoteStore,new vr(er(sp(n.path)),r,"TargetPurposeLimboResolution",Xd.ae))}}async function a0(t,e,n){const r=ve(t),s=[],i=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,l)=>{o.push(r.ba(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=hp.Ki(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.da.s_(s),await async function(l,c){const u=ve(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>O.forEach(c,f=>O.forEach(f.qi,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>O.forEach(f.Qi,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!ya(h))throw h;G("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const d=u.Zi.get(f),p=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(p);u.Zi=u.Zi.insert(f,v)}}}(r.localStore,i))}async function BO(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await KT(n.localStore,e);n.currentUser=e,function(i,o){i.ya.forEach(a=>{a.forEach(l=>{l.reject(new H(N.CANCELLED,o))})}),i.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await a0(n,r.rs)}}function HO(t,e){const n=ve(t),r=n.fa.get(e);if(r&&r.Ea)return _e().add(r.key);{let s=_e();const i=n.Ra.get(e);if(!i)return s;for(const o of i){const a=n.Aa.get(o);s=s.unionWith(a.view.oa)}return s}}function jO(t){const e=ve(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=i0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UO.bind(null,e),e.da.s_=kO.bind(null,e.eventManager),e.da.Da=NO.bind(null,e.eventManager),e}class e_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=su(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return cO(this.persistence,new aO,e.initialUser,this.serializer)}createPersistence(e){return new iO(up.Hr,this.serializer)}createSharedClientState(e){return new pO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class WO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BO.bind(null,this.syncEngine),await bO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PO}()}createDatastore(e){const n=su(e.databaseInfo.databaseId),r=function(i){return new yO(i)}(e.databaseInfo);return function(i,o,a,l){return new wO(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new IO(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Xm(this.syncEngine,n,0),function(){return Gm.v()?new Gm:new gO}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new MO(s,i,o,a,l,c);return u&&(h.Sa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ve(n);G("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await wa(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
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
 */class l0{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Fa(this.observer.next,e)}error(e){this.observer.error?this.Fa(this.observer.error,e):Zn("Uncaught Error in snapshot listener:",e.toString())}Ma(){this.muted=!0}Fa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=gT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{G("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(G("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ZT(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xu(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await KT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function t_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zO(t);G("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Ym(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Ym(e.remoteStore,i)),t._onlineComponents=e}function KO(t){return t.name==="FirebaseError"?t.code===N.FAILED_PRECONDITION||t.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function zO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!KO(n))throw n;ci("Error using user provided cache. Falling back to memory cache: "+n),await Xu(t,new e_)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Xu(t,new e_);return t._offlineComponents}async function GO(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await t_(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await t_(t,new WO))),t._onlineComponents}async function c0(t){const e=await GO(t),n=e.eventManager;return n.onListen=LO.bind(null,e.syncEngine),n.onUnlisten=FO.bind(null,e.syncEngine),n}function QO(t,e,n={}){const r=new Ar;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new l0({next:f=>{o.enqueueAndForget(()=>t0(i,h));const d=f.docs.has(a);!d&&f.fromCache?c.reject(new H(N.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&l&&l.source==="server"?c.reject(new H(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new n0(sp(a.path),u,{includeMetadataChanges:!0,z_:!0});return e0(i,h)}(await c0(t),t.asyncQueue,e,n,r)),r.promise}function YO(t,e,n={}){const r=new Ar;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new l0({next:f=>{o.enqueueAndForget(()=>t0(i,h)),f.fromCache&&l.source==="server"?c.reject(new H(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new n0(a,u,{includeMetadataChanges:!0,z_:!0});return e0(i,h)}(await c0(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function u0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const n_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(t,e,n){if(!n)throw new H(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JO(t,e,n,r){if(e===!0&&r===!0)throw new H(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function r_(t){if(!X.isDocumentKey(t))throw new H(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function s_(t){if(X.isDocumentKey(t))throw new H(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ou(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function Qo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ou(t);throw new H(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function XO(t,e){if(e<=0)throw new H(N.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class i_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=u0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class au{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new i_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new i_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new VN;switch(r.type){case"firstParty":return new BN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=n_.get(n);r&&(G("ComponentProvider","Removing Datastore"),n_.delete(n),r.terminate())}(this),Promise.resolve()}}function ZO(t,e,n,r={}){var s;const i=(t=Qo(t,au))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ci("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=_t.MOCK_USER;else{a=nw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new H(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new _t(c)}t._authCredentials=new FN(new pT(a,l))}}/**
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
 */class Fr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fr(this.firestore,e,this._query)}}class Kt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Kt(this.firestore,e,this._key)}}class Rr extends Fr{constructor(e,n,r){super(e,n,sp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Kt(this.firestore,null,new X(e))}withConverter(e){return new Rr(this.firestore,e,this._path)}}function AH(t,e,...n){if(t=xt(t),h0("collection","path",e),t instanceof au){const r=Ve.fromString(e,...n);return s_(r),new Rr(t,null,r)}{if(!(t instanceof Kt||t instanceof Rr))throw new H(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return s_(r),new Rr(t.firestore,null,r)}}function CH(t,e,...n){if(t=xt(t),arguments.length===1&&(e=gT.V()),h0("doc","path",e),t instanceof au){const r=Ve.fromString(e,...n);return r_(r),new Kt(t,null,new X(r))}{if(!(t instanceof Kt||t instanceof Rr))throw new H(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return r_(r),new Kt(t.firestore,t instanceof Rr?t.converter:null,new X(r))}}/**
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
 */class eD{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new GT(this,"async_queue_retry"),this.tu=()=>{const n=Ju();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const e=Ju();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nu(),this.ru(e)}enterRestrictedMode(e){if(!this.Ha){this.Ha=!0,this.Xa=e||!1;const n=Ju();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(e){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new Ar;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ja.push(e),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(e){if(!ya(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(e){const n=this.za.then(()=>(this.Za=!0,e().catch(r=>{this.Ya=r,this.Za=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Zn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(e,n,r){this.nu(),this.eu.indexOf(e)>-1&&(n=0);const s=gp.createAndSchedule(this,e,n,r,i=>this.su(i));return this.Ja.push(s),s}nu(){this.Ya&&ae()}verifyOperationInProgress(){}async ou(){let e;do e=this.za,await e;while(e!==this.za)}_u(e){for(const n of this.Ja)if(n.timerId===e)return!0;return!1}au(e){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ou()})}uu(e){this.eu.push(e)}su(e){const n=this.Ja.indexOf(e);this.Ja.splice(n,1)}}class yp extends au{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new eD}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||d0(this),this._firestoreClient.terminate()}}function tD(t,e){const n=typeof t=="object"?t:xc(),r=typeof t=="string"?t:e||"(default)",s=Dc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ZE("firestore");i&&ZO(s,...i)}return s}function f0(t){return t._firestoreClient||d0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function d0(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new ZN(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u0(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new qO(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class gi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gi(St.fromBase64String(e))}catch(n){throw new H(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new gi(St.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class p0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class g0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=/^__.*__$/;function m0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class vp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.cu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(e){return new vp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.hu({path:r,Iu:!1});return s.Tu(e),s}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.hu({path:r,Iu:!1});return s.cu(),s}du(e){return this.hu({path:void 0,Iu:!0})}Au(e){return pf(e,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Tu(this.path.get(e))}Tu(e){if(e.length===0)throw this.Au("Document fields must not be empty");if(m0(this.lu)&&nD.test(e))throw this.Au('Document fields cannot begin and end with "__"')}}class rD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||su(e)}mu(e,n,r,s=!1){return new vp({lu:e,methodName:n,Vu:r,path:Nt.emptyPath(),Iu:!1,Ru:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sD(t){const e=t._freezeSettings(),n=su(t._databaseId);return new rD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function iD(t,e,n,r=!1){return Ep(n,t.mu(r?4:3,e))}function Ep(t,e){if(_0(t=xt(t)))return aD("Unsupported field value:",e,t),oD(t,e);if(t instanceof g0)return function(r,s){if(!m0(s.lu))throw s.Au(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Au(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Iu&&e.lu!==4)throw e.Au("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Ep(a,s.du(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=xt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return E1(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ze.fromDate(r);return{timestampValue:uf(s.serializer,i)}}if(r instanceof Ze){const i=new Ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:uf(s.serializer,i)}}if(r instanceof lu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof gi)return{bytesValue:UT(s.serializer,r._byteString)};if(r instanceof Kt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$T(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Au(`Unsupported field value: ${ou(r)}`)}(t,e)}function oD(t,e){const n={};return mT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):va(t,(r,s)=>{const i=Ep(s,e.Pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function _0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof lu||t instanceof gi||t instanceof Kt||t instanceof g0)}function aD(t,e,n){if(!_0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ou(n);throw r==="an object"?e.Au(t+" a custom object"):e.Au(t+" "+r)}}const lD=new RegExp("[~\\*/\\[\\]]");function cD(t,e,n){if(e.search(lD)>=0)throw pf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new p0(...e.split("."))._internalPath}catch{throw pf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pf(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new H(N.INVALID_ARGUMENT,a+t+l)}/**
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
 */class y0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uD extends y0{data(){return super.data()}}function cu(t,e){return typeof e=="string"?cD(t,e):e instanceof p0?e._internalPath:e._delegate._internalPath}/**
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
 */function hD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wp{}class Tp extends wp{}function RH(t,e,...n){let r=[];e instanceof wp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Ip).length,a=i.filter(l=>l instanceof uu).length;if(o>1||o>0&&a>0)throw new H(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class uu extends Tp{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new uu(e,n,r)}_apply(e){const n=this._parse(e);return v0(e._query,n),new Fr(e.firestore,e.converter,sf(e._query,n))}_parse(e){const n=sD(e.firestore);return function(i,o,a,l,c,u,h){let f;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new H(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){a_(h,u);const d=[];for(const p of h)d.push(o_(l,i,p));f={arrayValue:{values:d}}}else f=o_(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||a_(h,u),f=iD(a,o,h,u==="in"||u==="not-in");return Qe.create(c,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function bH(t,e,n){const r=e,s=cu("where",t);return uu._create(s,r,n)}class Ip extends wp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ip(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:_n.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)v0(o,l),o=sf(o,l)}(e._query,n),new Fr(e.firestore,e.converter,sf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ap extends Tp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ap(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new H(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new H(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Gs(i,o);return function(c,u){if(ip(c)===null){const h=Xc(c);h!==null&&E0(c,h,u.field)}}(s,a),a}(e._query,this._field,this._direction);return new Fr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Di(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function SH(t,e="asc"){const n=e,r=cu("orderBy",t);return Ap._create(r,n)}class Cp extends Tp{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Cp(e,n,r)}_apply(e){return new Fr(e.firestore,e.converter,zl(e._query,this._limit,this._limitType))}}function PH(t){return XO("limit",t),Cp._create("limit",t,"F")}function o_(t,e,n){if(typeof(n=xt(n))=="string"){if(n==="")throw new H(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!AT(e)&&n.indexOf("/")!==-1)throw new H(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!X.isDocumentKey(r))throw new H(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pm(t,new X(r))}if(n instanceof Kt)return Pm(t,n._key);throw new H(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ou(n)}.`)}function a_(t,e){if(!Array.isArray(t)||t.length===0)throw new H(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function v0(t,e){if(e.isInequality()){const r=Xc(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new H(N.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=ip(t);i!==null&&E0(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function E0(t,e,n){if(!n.isEqual(e))throw new H(N.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class fD{convertValue(e,n="none"){switch(ds(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return va(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new lu(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ep(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ko(e));default:return null}}convertTimestamp(e){const n=kr(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Xe(qT(r));const s=new zo(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||Zn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class oo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class w0 extends y0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(cu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class pl extends w0{data(e={}){return super.data(e)}}class dD{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new oo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new pl(this._firestore,this._userDataWriter,r.key,r,new oo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new pl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new oo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new pl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new oo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:pD(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
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
 */function kH(t){t=Qo(t,Kt);const e=Qo(t.firestore,yp);return QO(f0(e),t._key).then(n=>gD(e,t,n))}class T0 extends fD{constructor(e){super(),this.firestore=e}convertBytes(e){return new gi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Kt(this.firestore,null,n)}}function NH(t){t=Qo(t,Fr);const e=Qo(t.firestore,yp),n=f0(e),r=new T0(e);return hD(t._query),YO(n,t._query).then(s=>new dD(e,r,t,s))}function gD(t,e,n){const r=n.docs.get(e._key),s=new T0(t);return new w0(t,s,e._key,r,new oo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Oi=s})(Mr),Mn(new gn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new yp(new UN(r.getProvider("auth-internal")),new jN(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zo(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),qt(Am,"4.1.2",e),qt(Am,"4.1.2","esm2017")})();function mD(t){return Array.isArray(t)?t:[t]}const _D=["title","script","style","noscript"],gl=["base","meta","link","style","script","noscript"],yD=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],vD=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],l_=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"],ED=typeof window<"u";function I0(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function c_(t){return t._h||I0(t._d?t._d:`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function A0(t,e){const{props:n,tag:r}=t;if(vD.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof n[i]<"u"){const o=String(n[i]);return e&&!e(o)?!1:`${r}:${i}:${o}`}return!1}function u_(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function wD(t,e,n){const r={tag:t,props:{}};return e instanceof Promise&&(e=await e),t==="templateParams"?(r.props=e,r):["title","titleTemplate"].includes(t)?(e&&typeof e=="object"?(r.textContent=e.textContent,e.tagPriority&&(r.tagPriority=e.tagPriority)):r.textContent=e,r):typeof e=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(e)||e.startsWith("/"))?r.props.src=e:r.innerHTML=e,r):!1:(e.body&&(e.tagPosition="bodyClose",delete e.body),e.children&&(e.innerHTML=e.children,delete e.children),r.props=await ID({...e}),Object.keys(r.props).filter(s=>l_.includes(s)).forEach(s=>{(!["innerHTML","textContent"].includes(s)||_D.includes(r.tag))&&(r[s]=r.props[s]),delete r.props[s]}),l_.forEach(s=>{!r[s]&&n[s]&&(r[s]=n[s])}),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML)),r.props.class&&(r.props.class=TD(r.props.class)),r.props.content&&Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r)}function TD(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function ID(t){for(const e of Object.keys(t)){const n=e.startsWith("data-");t[e]instanceof Promise&&(t[e]=await t[e]),String(t[e])==="true"?t[e]=n?"true":"":String(t[e])==="false"&&(n?t[e]="false":delete t[e])}return t}const AD=10;async function CD(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,r])=>typeof r<"u"&&yD.includes(n)).forEach(([n,r])=>{const s=mD(r);e.push(...s.map(i=>wD(n,i,t)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,r)=>(n._e=t._i,t.mode&&(n._m=t.mode),n._p=(t._i<<AD)+r,n))}const h_={base:-1,title:1},f_={critical:-8,high:-1,low:2};function Yl(t){let e=10;const n=t.tagPriority;return typeof n=="number"?n:(t.tag==="meta"?(t.props.charset&&(e=-2),t.props["http-equiv"]==="content-security-policy"&&(e=0)):t.tag==="link"&&t.props.rel==="preconnect"?e=2:t.tag in h_&&(e=h_[t.tag]),typeof n=="string"&&n in f_?e+f_[n]:e)}const RD=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function qi(t,e){if(typeof t!="string")return t;function n(o){let a;return["s","pageTitle"].includes(o)?a=e.pageTitle:o.includes(".")?a=o.split(".").reduce((l,c)=>l&&l[c]||void 0,e):a=e[o],typeof a<"u"?(a||"").replace(/"/g,'\\"'):!1}let r=t;try{r=decodeURI(t)}catch{}(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const a=n(o.slice(1));typeof a=="string"&&(t=t.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(l,c)=>`${a}${c}`).trim())});const i=e.separator;return t.includes(i)&&(t.endsWith(i)&&(t=t.slice(0,-i.length).trim()),t.startsWith(i)&&(t=t.slice(i.length).trim()),t=t.replace(new RegExp(`\\${i}\\s*\\${i}`,"g"),i)),t}function bD(t){const e={tag:t.tagName.toLowerCase(),props:t.getAttributeNames().reduce((n,r)=>({...n,[r]:t.getAttribute(r)}),{}),innerHTML:t.innerHTML};return e._d=A0(e),e}async function C0(t,e={}){var u;const n=e.document||t.resolvedOptions.document;if(!n)return;const r=(await t.resolveTags()).map(h=>({tag:h,id:gl.includes(h.tag)?c_(h):h.tag,shouldRender:!0})),s={shouldRender:!0,tags:r};if(await t.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;let i=t._dom;if(!i){i={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const h of["body","head"]){const f=(u=n==null?void 0:n[h])==null?void 0:u.children;for(const d of[...f].filter(p=>gl.includes(p.tagName.toLowerCase())))i.elMap[d.getAttribute("data-hid")||c_(bD(d))]=d}}i.pendingSideEffects={...i.sideEffects||{}},i.sideEffects={};function o(h,f,d){const p=`${h}:${f}`;i.sideEffects[p]=d,delete i.pendingSideEffects[p]}function a({id:h,$el:f,tag:d}){const p=d.tag.endsWith("Attrs");i.elMap[h]=f,p||(["textContent","innerHTML"].forEach(v=>{d[v]&&d[v]!==f[v]&&(f[v]=d[v])}),o(h,"el",()=>{i.elMap[h].remove(),delete i.elMap[h]})),Object.entries(d.props).forEach(([v,T])=>{T=String(T);const y=`attr:${v}`;if(v==="class")for(const m of(T||"").split(" ").filter(Boolean))p&&o(h,`${y}:${m}`,()=>f.classList.remove(m)),!f.classList.contains(m)&&f.classList.add(m);else f.getAttribute(v)!==T&&f.setAttribute(v,T),p&&o(h,y,()=>f.removeAttribute(v))})}const l=[],c={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const h of r){const{tag:f,shouldRender:d,id:p}=h;if(d){if(f.tag==="title"){n.title=f.textContent;continue}h.$el=h.$el||i.elMap[p],h.$el?a(h):gl.includes(f.tag)&&l.push(h)}}for(const h of l){const f=h.tag.tagPosition||"head";h.$el=n.createElement(h.tag.tag),a(h),c[f]=c[f]||n.createDocumentFragment(),c[f].appendChild(h.$el)}for(const h of r)await t.hooks.callHook("dom:renderTag",h,n,o);c.head&&n.head.appendChild(c.head),c.bodyOpen&&n.body.insertBefore(c.bodyOpen,n.body.firstChild),c.bodyClose&&n.body.appendChild(c.bodyClose),Object.values(i.pendingSideEffects).forEach(h=>h()),t._dom=i,await t.hooks.callHook("dom:rendered",{renders:r})}async function SD(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domUpdatePromise=t._domUpdatePromise||new Promise(r=>n(async()=>{await C0(t,e),delete t._domUpdatePromise,r()}))}function PD(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(i){SD(i,t)}}}}}const kD=["templateParams","htmlAttrs","bodyAttrs"],ND={hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(r=>{t.props[r]&&(t.key=t.props[r],delete t.props[r])});const n=A0(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(r=>{const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&kD.includes(r.tag)&&(a="merge"),a==="merge"){const l=i.props;["class","style"].forEach(c=>{r.props[c]&&l[c]&&(c==="style"&&!l[c].endsWith(";")&&(l[c]+=";"),r.props[c]=`${l[c]} ${r.props[c]}`)}),e[s].props={...l,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}else if(Yl(r)>Yl(i))return}const o=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(gl.includes(r.tag)&&o===0){delete e[s];return}e[s]=r});const n=[];Object.values(e).forEach(r=>{const s=r._duped;delete r._duped,n.push(r),s&&n.push(...s)}),t.tags=n}}},OD={mode:"server",hooks:{"tags:resolve":function(t){const e={};t.tags.filter(n=>["titleTemplate","templateParams"].includes(n.tag)&&n._m==="server").forEach(n=>{e[n.tag]=n.tag==="titleTemplate"?n.textContent:n.props}),Object.keys(e).length&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},d_=["script","link","bodyAttrs"];function p_(t){const e={},n={};return Object.entries(t.props).forEach(([r,s])=>{r.startsWith("on")&&typeof s=="function"?n[r]=s:e[r]=s}),{props:e,eventHandlers:n}}const DD={hooks:{"ssr:render":function(t){t.tags=t.tags.map(e=>(!d_.includes(e.tag)||!Object.entries(e.props).find(([n,r])=>n.startsWith("on")&&typeof r=="function")||(e.props=p_(e).props),e))},"tags:resolve":function(t){t.tags=t.tags.map(e=>{if(!d_.includes(e.tag))return e;const{props:n,eventHandlers:r}=p_(e);return Object.keys(r).length&&(e.props=n,e._eventHandlers=r),e})},"dom:renderTag":function(t,e,n){if(!t.tag._eventHandlers)return;const r=t.tag.tag==="bodyAttrs"?e.defaultView:t.$el;Object.entries(t.tag._eventHandlers).forEach(([s,i])=>{const o=`${t.tag._d||t.tag._p}:${s}`,a=s.slice(2).toLowerCase(),l=`data-h-${a}`;if(n(t.id,o,()=>{}),t.$el.hasAttribute(l))return;const c=i;t.$el.setAttribute(l,""),r.addEventListener(a,c),t.entry&&n(t.id,o,()=>{r.removeEventListener(a,c),t.$el.removeAttribute(l)})})}}},xD=["link","style","script","noscript"],MD={hooks:{"tag:normalise":({tag:t})=>{t.key&&xD.includes(t.tag)&&(t.props["data-hid"]=t._h=I0(t.key))}}},LD={hooks:{"tags:resolve":t=>{const e=n=>{var r;return(r=t.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of RD)for(const s of t.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=e(s.tagPriority.replace(n,""));typeof i<"u"&&(s._p=i+r)}t.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>Yl(n)-Yl(r))}}},VD={hooks:{"tags:resolve":t=>{var i;const{tags:e}=t,n=(i=e.find(o=>o.tag==="title"))==null?void 0:i.textContent,r=e.findIndex(o=>o.tag==="templateParams"),s=r!==-1?e[r].props:{};s.separator=s.separator||"|",s.pageTitle=qi(s.pageTitle||n||"",s);for(const o of e)["titleTemplate","title"].includes(o.tag)&&typeof o.textContent=="string"?o.textContent=qi(o.textContent,s):o.tag==="meta"&&typeof o.props.content=="string"?o.props.content=qi(o.props.content,s):o.tag==="link"&&typeof o.props.href=="string"?o.props.href=qi(o.props.href,s):o.tag==="script"&&["application/json","application/ld+json"].includes(o.props.type)&&o.innerHTML&&(o.innerHTML=qi(o.innerHTML,s));t.tags=e.filter(o=>o.tag!=="templateParams")}}},FD={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(s=>s.tag==="titleTemplate");const r=e.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=u_(e[n].textContent,e[r].textContent);s!==null?e[r].textContent=s||e[r].textContent:delete e[r]}else if(n!==-1){const s=u_(e[n].textContent);s!==null&&(e[n].textContent=s,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}};let R0;function UD(t={}){const e=$D(t);return e.use(PD()),R0=e}function g_(t,e){return!t||t==="server"&&e||t==="client"&&!e}function $D(t={}){const e=KE();e.addHooks(t.hooks||{}),t.document=t.document||(ED?document:void 0);const n=!t.document;t.plugins=[ND,OD,DD,MD,LD,VD,FD,...(t==null?void 0:t.plugins)||[]];const r=()=>e.callHook("entries:updated",o);let s=0,i=[];const o={resolvedOptions:t,hooks:e,headEntries(){return i},use(a){const l=typeof a=="function"?a(o):a;g_(l.mode,n)&&e.addHooks(l.hooks||{})},push(a,l){const c={_i:s++,input:a,...l};return g_(c.mode,n)&&(i.push(c),r()),{dispose(){i=i.filter(u=>u._i!==c._i),e.callHook("entries:updated",o),r()},patch(u){i=i.map(h=>(h._i===c._i&&(h.input=c.input=u),h)),r()}}},async resolveTags(){const a={tags:[],entries:[...i]};await e.callHook("entries:resolve",a);for(const l of a.entries){const c=l.resolvedInput||l.input;if(l.resolvedInput=await(l.transform?l.transform(c):c),l.resolvedInput)for(const u of await CD(l)){const h={tag:u,entry:l,resolvedOptions:o.resolvedOptions};await e.callHook("tag:normalise",h),a.tags.push(h.tag)}}return await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),a.tags},ssr:n};return t.plugins.forEach(a=>o.use(a)),o.hooks.callHook("init",o),o}function BD(){return R0}const HD=RE.startsWith("3");function jD(t){return typeof t=="function"?t():Re(t)}function Jl(t,e=""){if(t instanceof Promise)return t;const n=jD(t);return!t||!n?n:Array.isArray(n)?n.map(r=>Jl(r,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,Re(s)]:[r,Jl(s,r)])):n}const WD={hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=Jl(e.input)}}},b0="usehead";function qD(t){return{install(n){HD&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(b0,t))}}.install}function KD(t={}){t.domDelayFn=t.domDelayFn||(n=>Dr(()=>n()));const e=UD(t);return e.use(WD),e.install=qD(e),e}function zD(){return xr()&&Ue(b0)||BD()}function GD(t,e={}){const n=zD();if(n)return n.ssr?n.push(t,e):QD(n,t,e)}function QD(t,e,n={}){const r=Je(!1),s=Je({});oa(()=>{s.value=r.value?{}:Jl(e)});const i=t.push(s.value,n);return dn(s,a=>{i.patch(a)}),xr()&&(Ac(()=>{i.dispose()}),nE(()=>{r.value=!0}),tE(()=>{r.value=!1})),i}function Zu(t){return t!==null&&typeof t=="object"}function gf(t,e,n=".",r){if(!Zu(e))return gf(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Zu(o)&&Zu(s[i])?s[i]=gf(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function S0(t){return(...e)=>e.reduce((n,r)=>gf(n,r,"",t),{})}const YD=S0(),JD=S0((t,e,n)=>{if(typeof t[e]<"u"&&typeof n=="function")return t[e]=n(t[e]),!0});function XD(t,e){try{return e in t}catch{return!1}}var ZD=Object.defineProperty,ex=(t,e,n)=>e in t?ZD(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Wr=(t,e,n)=>(ex(t,typeof e!="symbol"?e+"":e,n),n);class mf extends Error{constructor(e,n={}){super(e,n),Wr(this,"statusCode",500),Wr(this,"fatal",!1),Wr(this,"unhandled",!1),Wr(this,"statusMessage"),Wr(this,"data"),Wr(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:yf(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=P0(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}Wr(mf,"__h3_error__",!0);function _f(t){if(typeof t=="string")return new mf(t);if(tx(t))return t;const e=new mf(t.message??t.statusMessage??"",{cause:t.cause||t});if(XD(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=yf(t.statusCode,e.statusCode):t.status&&(e.statusCode=yf(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;P0(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function tx(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const nx=/[^\u0009\u0020-\u007E]/g;function P0(t=""){return t.replace(nx,"")}function yf(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const rx="$s";function k0(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,r]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const s=rx+n,i=Be(),o=Hv(i.payload.state,s);if(o.value===void 0&&r){const a=r();if(Ye(a))return i.payload.state[s]=a,a;o.value=a}return o}const N0=Symbol("layout-meta"),Ia=Symbol("route"),ws=()=>{var t;return(t=Be())==null?void 0:t.$router},O0=()=>uE()?Ue(Ia,Be()._route):Be()._route;/*! @__NO_SIDE_EFFECTS__ */const sx=()=>{try{if(Be()._processingMiddleware)return!0}catch{return!0}return!1},OH=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:BE(t.path||"/",t.query||{})+(t.hash||"");if(e!=null&&e.open){{const{target:a="_blank",windowFeatures:l={}}=e.open,c=Object.entries(l).filter(([u,h])=>h!==void 0).map(([u,h])=>`${u.toLowerCase()}=${h}`).join(", ");open(n,a,c)}return Promise.resolve()}const r=(e==null?void 0:e.external)||Ri(n,{acceptRelative:!0});if(r){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const a=Pc(n).protocol;if(a&&pS(a))throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)}const s=sx();if(!r&&s)return t;const i=ws(),o=Be();return r?(e!=null&&e.replace?location.replace(n):location.href=n,s?o.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?i.replace(t):i.push(t)},hu=()=>Hv(Be().payload,"error"),Vs=t=>{const e=Rp(t);try{const n=Be(),r=hu();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},ix=async(t={})=>{const e=Be(),n=hu();e.callHook("app:error:cleared",t),t.redirect&&await ws().replace(t.redirect),n.value=null},ox=t=>!!(t&&typeof t=="object"&&"__nuxt_error"in t),Rp=t=>{const e=_f(t);return e.__nuxt_error=!0,e},ax="modulepreload",lx=function(t,e){return t[0]==="."?new URL(t,e).href:t},m_={},cx=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=lx(i,r),i in m_)return;m_[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":ax,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},mt=(...t)=>cx(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),ux=-1,hx=-2,fx=-3,dx=-4,px=-5,gx=-6;function mx(t,e){return _x(JSON.parse(t),e)}function _x(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===ux)return;if(i===fx)return NaN;if(i===dx)return 1/0;if(i===px)return-1/0;if(i===gx)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],c=e==null?void 0:e[l];if(c)return r[i]=c(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const u=new Set;r[i]=u;for(let d=1;d<a.length;d+=1)u.add(s(a[d]));break;case"Map":const h=new Map;r[i]=h;for(let d=1;d<a.length;d+=2)h.set(s(a[d]),s(a[d+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const f=Object.create(null);r[i]=f;for(let d=1;d<a.length;d+=2)f[a[d]]=s(a[d+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let c=0;c<a.length;c+=1){const u=a[c];u!==hx&&(l[c]=s(u))}}else{const l={};r[i]=l;for(const c in a){const u=a[c];l[c]=s(u)}}return r[i]}return s(0)}const yx=!1,vf=!1,vx=!1,Ex=!0,wx="#__nuxt";function __(t,e={}){const n=Tx(t,e),r=Be(),s=r._payloadCache=r._payloadCache||{};return s[n]||(s[n]=D0(n).then(i=>i||(delete s[n],null))),s[n]}const y_="json";function Tx(t,e={}){const n=new URL(t,"http://localhost");if(n.search)throw new Error("Payload URL cannot contain search params: "+t);if(n.host!=="localhost"||Ri(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=e.hash||(e.fresh?Date.now():"");return la(kc().app.baseURL,n.pathname,r?`_payload.${r}.${y_}`:`_payload.${y_}`)}async function D0(t){try{return Ex?x0(await fetch(t).then(e=>e.text())):await mt(()=>import(t),[],import.meta.url).then(e=>e.default||e)}catch(e){console.warn("[nuxt] Cannot load payload ",t,e)}return null}function Ix(){return!!Be().payload.prerenderedAt}let Xa=null;async function Ax(){if(Xa)return Xa;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=x0(t.textContent||""),n=t.dataset.src?await D0(t.dataset.src):void 0;return Xa={...e,...n,...window.__NUXT__},Xa}function x0(t){return mx(t,Be()._payloadRevivers)}function Ef(t,e){Be()._payloadRevivers[t]=e}function Cx(t={}){const e=t.path||window.location.pathname;let n={};try{n=JSON.parse(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Be().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const Rx={firebaseConfig:{apiKey:"AIzaSyCihtmlyKeFa6MGXMrJ3DPUAm7s8k-TJyo",authDomain:"autocompromiso-32ca7.firebaseapp.com",databaseURL:"https://autocompromiso-32ca7-default-rtdb.firebaseio.com",projectId:"autocompromiso-32ca7",storageBucket:"autocompromiso-32ca7.appspot.com",messagingSenderId:"171009053819",appId:"1:171009053819:web:8fd75b1bdbde7a08eabede",measurementId:"G-E5P4RN1V8K"},vuefireOptions:{optionsApiPlugin:!1,emulators:{enabled:!0},auth:!0,config:{apiKey:"AIzaSyCihtmlyKeFa6MGXMrJ3DPUAm7s8k-TJyo",authDomain:"autocompromiso-32ca7.firebaseapp.com",databaseURL:"https://autocompromiso-32ca7-default-rtdb.firebaseio.com",projectId:"autocompromiso-32ca7",storageBucket:"autocompromiso-32ca7.appspot.com",messagingSenderId:"171009053819",appId:"1:171009053819:web:8fd75b1bdbde7a08eabede",measurementId:"G-E5P4RN1V8K"}}},bx=JD(Rx);function Sx(){const t=Be();return t._appConfig||(t._appConfig=nn(bx)),t._appConfig}const Px=nP(()=>{Ef("JSONifiable",t=>{const e=JSON.parse(t);return"seconds"in e&&"nanoseconds"in e?Al(new Ze(e.seconds,e.nanoseconds)):"latitude"in e&&"longitude"in e?Al(new lu(e.latitude,e.longitude)):e}),Ef("DocumentData",t=>{const e=typeof t=="string"?JSON.parse(t):t,n=e.id;return delete e.id,Object.defineProperty(e,"id",{value:n})})}),v_={NuxtError:t=>Rp(t),EmptyShallowRef:t=>fn(t==="_"?void 0:t==="0n"?BigInt(0):JSON.parse(t)),EmptyRef:t=>Je(t==="_"?void 0:t==="0n"?BigInt(0):JSON.parse(t)),ShallowRef:t=>fn(t),ShallowReactive:t=>ia(t),Ref:t=>Je(t),Reactive:t=>nn(t)},kx=Mt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const r in v_)Ef(r,v_[r]);Object.assign(t.payload,([e,n]=Ol(()=>t.runWithContext(Ax)),e=await e,n(),e)),window.__NUXT__=t.payload}});/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ms=typeof window<"u";function Nx(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ce=Object.assign;function eh(t,e){const n={};for(const r in e){const s=e[r];n[r]=yn(s)?s.map(t):t(s)}return n}const Eo=()=>{},yn=Array.isArray,Ox=/\/$/,Dx=t=>t.replace(Ox,"");function th(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Vx(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function xx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function E_(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Mx(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&mi(e.matched[r],n.matched[s])&&M0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function mi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function M0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Lx(t[n],e[n]))return!1;return!0}function Lx(t,e){return yn(t)?w_(t,e):yn(e)?w_(e,t):t===e}function w_(t,e){return yn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Vx(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Yo;(function(t){t.pop="pop",t.push="push"})(Yo||(Yo={}));var wo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(wo||(wo={}));function Fx(t){if(!t)if(Ms){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Dx(t)}const Ux=/^[^#]+#/;function $x(t,e){return t.replace(Ux,"#")+e}function Bx(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const fu=()=>({left:window.pageXOffset,top:window.pageYOffset});function Hx(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Bx(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function T_(t,e){return(history.state?history.state.position-e:-1)+t}const wf=new Map;function jx(t,e){wf.set(t,e)}function Wx(t){const e=wf.get(t);return wf.delete(t),e}let qx=()=>location.protocol+"//"+location.host;function L0(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),E_(l,"")}return E_(n,t)+r+s}function Kx(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const d=L0(t,location),p=n.value,v=e.value;let T=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}T=v?f.position-v.position:0}else r(d);s.forEach(y=>{y(n.value,p,{delta:T,type:Yo.pop,direction:T?T>0?wo.forward:wo.back:wo.unknown})})};function l(){o=n.value}function c(f){s.push(f);const d=()=>{const p=s.indexOf(f);p>-1&&s.splice(p,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Ce({},f.state,{scroll:fu()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function I_(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?fu():null}}function zx(t){const{history:e,location:n}=window,r={value:L0(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:qx()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=Ce({},e.state,I_(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=Ce({},s.value,e.state,{forward:l,scroll:fu()});i(u.current,u,!0);const h=Ce({},I_(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function V0(t){t=Fx(t);const e=zx(t),n=Kx(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ce({location:"",base:t,go:r,createHref:$x.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Gx(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),V0(t)}function Qx(t){return typeof t=="string"||t&&typeof t=="object"}function F0(t){return typeof t=="string"||typeof t=="symbol"}const Tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},U0=Symbol("");var A_;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(A_||(A_={}));function _i(t,e){return Ce(new Error,{type:t,[U0]:!0},e)}function Un(t,e){return t instanceof Error&&U0 in t&&(e==null||!!(t.type&e))}const C_="[^/]+?",Yx={sensitive:!1,strict:!1,start:!0,end:!0},Jx=/[.+*?^${}()[\]/\\]/g;function Xx(t,e){const n=Ce({},Yx,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(Jx,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:v,optional:T,regexp:y}=f;i.push({name:p,repeatable:v,optional:T});const m=y||C_;if(m!==C_){d+=10;try{new RegExp(`(${m})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${p}" (${m}): `+E.message)}}let I=v?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;h||(I=T&&c.length<2?`(?:/${I})`:"/"+I),T&&(I+="?"),s+=I,d+=20,T&&(d+=-8),v&&(d+=-20),m===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=i[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:v,optional:T}=d,y=p in c?c[p]:"";if(yn(y)&&!v)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const m=yn(y)?y.join("/"):y;if(!m)if(T)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=m}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function Zx(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function eM(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Zx(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(R_(r))return 1;if(R_(s))return-1}return s.length-r.length}function R_(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tM={type:0,value:""},nM=/[a-zA-Z0-9_]/;function rM(t){if(!t)return[[]];if(t==="/")return[[tM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:nM.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function sM(t,e,n){const r=Xx(rM(t.path),n),s=Ce(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function iM(t,e){const n=[],r=new Map;e=P_({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const d=!f,p=oM(u);p.aliasOf=f&&f.record;const v=P_(e,u),T=[p];if("alias"in u){const I=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of I)T.push(Ce({},p,{components:f?f.record.components:p.components,path:E,aliasOf:f?f.record:p}))}let y,m;for(const I of T){const{path:E}=I;if(h&&E[0]!=="/"){const R=h.record.path,D=R[R.length-1]==="/"?"":"/";I.path=h.record.path+(E&&D+E)}if(y=sM(I,h,v),f?f.alias.push(y):(m=m||y,m!==y&&m.alias.push(y),d&&u.name&&!S_(y)&&o(u.name)),p.children){const R=p.children;for(let D=0;D<R.length;D++)i(R[D],y,f&&f.children[D])}f=f||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return m?()=>{o(m)}:Eo}function o(u){if(F0(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&eM(u,n[h])>=0&&(u.record.path!==n[h].record.path||!$0(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!S_(u)&&r.set(u.record.name,u)}function c(u,h){let f,d={},p,v;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw _i(1,{location:u});v=f.record.name,d=Ce(b_(h.params,f.keys.filter(m=>!m.optional).map(m=>m.name)),u.params&&b_(u.params,f.keys.map(m=>m.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(m=>m.re.test(p)),f&&(d=f.parse(p),v=f.record.name);else{if(f=h.name?r.get(h.name):n.find(m=>m.re.test(h.path)),!f)throw _i(1,{location:u,currentLocation:h});v=f.record.name,d=Ce({},h.params,u.params),p=f.stringify(d)}const T=[];let y=f;for(;y;)T.unshift(y.record),y=y.parent;return{name:v,path:p,params:d,matched:T,meta:lM(T)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function b_(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function oM(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:aM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function aM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function S_(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lM(t){return t.reduce((e,n)=>Ce(e,n.meta),{})}function P_(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function $0(t,e){return e.children.some(n=>n===t||$0(t,n))}const B0=/#/g,cM=/&/g,uM=/\//g,hM=/=/g,fM=/\?/g,H0=/\+/g,dM=/%5B/g,pM=/%5D/g,j0=/%5E/g,gM=/%60/g,W0=/%7B/g,mM=/%7C/g,q0=/%7D/g,_M=/%20/g;function bp(t){return encodeURI(""+t).replace(mM,"|").replace(dM,"[").replace(pM,"]")}function yM(t){return bp(t).replace(W0,"{").replace(q0,"}").replace(j0,"^")}function Tf(t){return bp(t).replace(H0,"%2B").replace(_M,"+").replace(B0,"%23").replace(cM,"%26").replace(gM,"`").replace(W0,"{").replace(q0,"}").replace(j0,"^")}function vM(t){return Tf(t).replace(hM,"%3D")}function EM(t){return bp(t).replace(B0,"%23").replace(fM,"%3F")}function wM(t){return t==null?"":EM(t).replace(uM,"%2F")}function Xl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function TM(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(H0," "),o=i.indexOf("="),a=Xl(o<0?i:i.slice(0,o)),l=o<0?null:Xl(i.slice(o+1));if(a in e){let c=e[a];yn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function k_(t){let e="";for(let n in t){const r=t[n];if(n=vM(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(yn(r)?r.map(i=>i&&Tf(i)):[r&&Tf(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function IM(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=yn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const AM=Symbol(""),N_=Symbol(""),du=Symbol(""),Sp=Symbol(""),If=Symbol("");function Ki(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function dr(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(_i(4,{from:n,to:e})):h instanceof Error?a(h):Qx(h)?a(_i(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function nh(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(CM(a)){const c=(a.__vccOpts||a)[e];c&&s.push(dr(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Nx(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&dr(f,n,r,i,o)()}))}}return s}function CM(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function O_(t){const e=Ue(du),n=Ue(Sp),r=be(()=>e.resolve(Re(t.to))),s=be(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(mi.bind(null,u));if(f>-1)return f;const d=D_(l[c-2]);return c>1&&D_(u)===d&&h[h.length-1].path!==d?h.findIndex(mi.bind(null,l[c-2])):f}),i=be(()=>s.value>-1&&PM(n.params,r.value.params)),o=be(()=>s.value>-1&&s.value===n.matched.length-1&&M0(n.params,r.value.params));function a(l={}){return SM(l)?e[Re(t.replace)?"replace":"push"](Re(t.to)).catch(Eo):Promise.resolve()}return{route:r,href:be(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const RM=rr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:O_,setup(t,{slots:e}){const n=nn(O_(t)),{options:r}=Ue(du),s=be(()=>({[x_(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[x_(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:$t("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),bM=RM;function SM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function PM(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!yn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function D_(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const x_=(t,e,n)=>t??e??n,kM=rr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ue(If),s=be(()=>t.route||r.value),i=Ue(N_,0),o=be(()=>{let c=Re(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=be(()=>s.value.matched[o.value]);Nn(N_,be(()=>o.value+1)),Nn(AM,a),Nn(If,s);const l=Je();return dn(()=>[l.value,a.value,t.name],([c,u,h],[f,d,p])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!mi(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return M_(n.default,{Component:f,route:c});const d=h.props[u],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,T=$t(f,Ce({},p,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return M_(n.default,{Component:T,route:c})||T}}});function M_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const K0=kM;function NM(t){const e=iM(t.routes,t),n=t.parseQuery||TM,r=t.stringifyQuery||k_,s=t.history,i=Ki(),o=Ki(),a=Ki(),l=fn(Tn);let c=Tn;Ms&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=eh.bind(null,C=>""+C),h=eh.bind(null,wM),f=eh.bind(null,Xl);function d(C,j){let V,Q;return F0(C)?(V=e.getRecordMatcher(C),Q=j):Q=C,e.addRoute(Q,V)}function p(C){const j=e.getRecordMatcher(C);j&&e.removeRoute(j)}function v(){return e.getRoutes().map(C=>C.record)}function T(C){return!!e.getRecordMatcher(C)}function y(C,j){if(j=Ce({},j||l.value),typeof C=="string"){const w=th(n,C,j.path),A=e.resolve({path:w.path},j),b=s.createHref(w.fullPath);return Ce(w,A,{params:f(A.params),hash:Xl(w.hash),redirectedFrom:void 0,href:b})}let V;if("path"in C)V=Ce({},C,{path:th(n,C.path,j.path).path});else{const w=Ce({},C.params);for(const A in w)w[A]==null&&delete w[A];V=Ce({},C,{params:h(w)}),j.params=h(j.params)}const Q=e.resolve(V,j),Te=C.hash||"";Q.params=u(f(Q.params));const g=xx(r,Ce({},C,{hash:yM(Te),path:Q.path})),_=s.createHref(g);return Ce({fullPath:g,hash:Te,query:r===k_?IM(C.query):C.query||{}},Q,{redirectedFrom:void 0,href:_})}function m(C){return typeof C=="string"?th(n,C,l.value.path):Ce({},C)}function I(C,j){if(c!==C)return _i(8,{from:j,to:C})}function E(C){return M(C)}function R(C){return E(Ce(m(C),{replace:!0}))}function D(C){const j=C.matched[C.matched.length-1];if(j&&j.redirect){const{redirect:V}=j;let Q=typeof V=="function"?V(C):V;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=m(Q):{path:Q},Q.params={}),Ce({query:C.query,hash:C.hash,params:"path"in Q?{}:C.params},Q)}}function M(C,j){const V=c=y(C),Q=l.value,Te=C.state,g=C.force,_=C.replace===!0,w=D(V);if(w)return M(Ce(m(w),{state:typeof w=="object"?Ce({},Te,w.state):Te,force:g,replace:_}),j||V);const A=V;A.redirectedFrom=j;let b;return!g&&Mx(r,Q,V)&&(b=_i(16,{to:A,from:Q}),En(Q,Q,!0,!1)),(b?Promise.resolve(b):W(A,Q)).catch(P=>Un(P)?Un(P,2)?P:or(P):we(P,A,Q)).then(P=>{if(P){if(Un(P,2))return M(Ce({replace:_},m(P.to),{state:typeof P.to=="object"?Ce({},Te,P.to.state):Te,force:g}),j||A)}else P=B(A,Q,!0,_,Te);return te(A,Q,P),P})}function S(C,j){const V=I(C,j);return V?Promise.reject(V):Promise.resolve()}function K(C){const j=Cs.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(C):C()}function W(C,j){let V;const[Q,Te,g]=OM(C,j);V=nh(Q.reverse(),"beforeRouteLeave",C,j);for(const w of Q)w.leaveGuards.forEach(A=>{V.push(dr(A,C,j))});const _=S.bind(null,C,j);return V.push(_),pt(V).then(()=>{V=[];for(const w of i.list())V.push(dr(w,C,j));return V.push(_),pt(V)}).then(()=>{V=nh(Te,"beforeRouteUpdate",C,j);for(const w of Te)w.updateGuards.forEach(A=>{V.push(dr(A,C,j))});return V.push(_),pt(V)}).then(()=>{V=[];for(const w of g)if(w.beforeEnter)if(yn(w.beforeEnter))for(const A of w.beforeEnter)V.push(dr(A,C,j));else V.push(dr(w.beforeEnter,C,j));return V.push(_),pt(V)}).then(()=>(C.matched.forEach(w=>w.enterCallbacks={}),V=nh(g,"beforeRouteEnter",C,j),V.push(_),pt(V))).then(()=>{V=[];for(const w of o.list())V.push(dr(w,C,j));return V.push(_),pt(V)}).catch(w=>Un(w,8)?w:Promise.reject(w))}function te(C,j,V){a.list().forEach(Q=>K(()=>Q(C,j,V)))}function B(C,j,V,Q,Te){const g=I(C,j);if(g)return g;const _=j===Tn,w=Ms?history.state:{};V&&(Q||_?s.replace(C.fullPath,Ce({scroll:_&&w&&w.scroll},Te)):s.push(C.fullPath,Te)),l.value=C,En(C,j,V,_),or()}let ee;function q(){ee||(ee=s.listen((C,j,V)=>{if(!xa.listening)return;const Q=y(C),Te=D(Q);if(Te){M(Ce(Te,{replace:!0}),Q).catch(Eo);return}c=Q;const g=l.value;Ms&&jx(T_(g.fullPath,V.delta),fu()),W(Q,g).catch(_=>Un(_,12)?_:Un(_,2)?(M(_.to,Q).then(w=>{Un(w,20)&&!V.delta&&V.type===Yo.pop&&s.go(-1,!1)}).catch(Eo),Promise.reject()):(V.delta&&s.go(-V.delta,!1),we(_,Q,g))).then(_=>{_=_||B(Q,g,!1),_&&(V.delta&&!Un(_,8)?s.go(-V.delta,!1):V.type===Yo.pop&&Un(_,20)&&s.go(-1,!1)),te(Q,g,_)}).catch(Eo)}))}let We=Ki(),he=Ki(),Ee;function we(C,j,V){or(C);const Q=he.list();return Q.length?Q.forEach(Te=>Te(C,j,V)):console.error(C),Promise.reject(C)}function Fn(){return Ee&&l.value!==Tn?Promise.resolve():new Promise((C,j)=>{We.add([C,j])})}function or(C){return Ee||(Ee=!C,q(),We.list().forEach(([j,V])=>C?V(C):j()),We.reset()),C}function En(C,j,V,Q){const{scrollBehavior:Te}=t;if(!Ms||!Te)return Promise.resolve();const g=!V&&Wx(T_(C.fullPath,0))||(Q||!V)&&history.state&&history.state.scroll||null;return Dr().then(()=>Te(C,j,g)).then(_=>_&&Hx(_)).catch(_=>we(_,C,j))}const Lt=C=>s.go(C);let As;const Cs=new Set,xa={currentRoute:l,listening:!0,addRoute:d,removeRoute:p,hasRoute:T,getRoutes:v,resolve:y,options:t,push:E,replace:R,go:Lt,back:()=>Lt(-1),forward:()=>Lt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:he.add,isReady:Fn,install(C){const j=this;C.component("RouterLink",bM),C.component("RouterView",K0),C.config.globalProperties.$router=j,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>Re(l)}),Ms&&!As&&l.value===Tn&&(As=!0,E(s.location).catch(Te=>{}));const V={};for(const Te in Tn)Object.defineProperty(V,Te,{get:()=>l.value[Te],enumerable:!0});C.provide(du,j),C.provide(Sp,ia(V)),C.provide(If,l);const Q=C.unmount;Cs.add(C),C.unmount=function(){Cs.delete(C),Cs.size<1&&(c=Tn,ee&&ee(),ee=null,l.value=Tn,As=!1,Ee=!1),Q()}}};function pt(C){return C.reduce((j,V)=>j.then(()=>K(V)),Promise.resolve())}return xa}function OM(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>mi(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>mi(c,l))||s.push(l))}return[n,r,s]}function DH(){return Ue(du)}function DM(){return Ue(Sp)}const L_=[{name:"noticiasId",path:"/:noticiasId()",meta:{},alias:[],redirect:void 0,component:()=>mt(()=>import("./index.6f989f2e.js"),["./index.6f989f2e.js","./Noticia.fe775c2c.js","./VRow.7d849aad.js","./VRow.02b1c4e8.css","./Noticia.f2e6b6d9.css","./components.a08a3249.js","./mp-logo.443f2129.js","./index.d30455b8.css"],import.meta.url).then(t=>t.default||t)},{name:"ayuda",path:"/ayuda",meta:{},alias:[],redirect:void 0,component:()=>mt(()=>import("./ayuda.c5222b81.js"),["./ayuda.c5222b81.js","./Noticia.fe775c2c.js","./VRow.7d849aad.js","./VRow.02b1c4e8.css","./Noticia.f2e6b6d9.css","./ayuda.535a1be6.css"],import.meta.url).then(t=>t.default||t)},{name:"cotizacion",path:"/cotizacion",meta:{},alias:[],redirect:void 0,component:()=>mt(()=>import("./cotizacion.ecbe8cdf.js"),[],import.meta.url).then(t=>t.default||t)},{name:"deportes",path:"/deportes",meta:{},alias:[],redirect:void 0,component:()=>mt(()=>import("./deportes.fd3f4d44.js"),["./deportes.fd3f4d44.js","./Noticia.fe775c2c.js","./VRow.7d849aad.js","./VRow.02b1c4e8.css","./Noticia.f2e6b6d9.css","./deportes.9253a319.css"],import.meta.url).then(t=>t.default||t)},{name:"economia",path:"/economia",meta:{},alias:[],redirect:void 0,component:()=>mt(()=>import("./economia.430fe386.js"),["./economia.430fe386.js","./Noticia.fe775c2c.js","./VRow.7d849aad.js","./VRow.02b1c4e8.css","./Noticia.f2e6b6d9.css","./economia.9eeab9f0.css"],import.meta.url).then(t=>t.default||t)},{name:"index",path:"/",meta:{},alias:[],redirect:void 0,component:()=>mt(()=>import("./index.a87b7aa2.js"),["./index.a87b7aa2.js","./components.a08a3249.js","./Noticia.fe775c2c.js","./VRow.7d849aad.js","./VRow.02b1c4e8.css","./Noticia.f2e6b6d9.css","./index.000ac296.css"],import.meta.url).then(t=>t.default||t)},{name:"policiales",path:"/policiales",meta:{},alias:[],redirect:void 0,component:()=>mt(()=>import("./policiales.61a72916.js"),["./policiales.61a72916.js","./Noticia.fe775c2c.js","./VRow.7d849aad.js","./VRow.02b1c4e8.css","./Noticia.f2e6b6d9.css","./policiales.18e71842.css"],import.meta.url).then(t=>t.default||t)},{name:"politica",path:"/politica",meta:{},alias:[],redirect:void 0,component:()=>mt(()=>import("./politica.7a0a9b2a.js"),["./politica.7a0a9b2a.js","./Noticia.fe775c2c.js","./VRow.7d849aad.js","./VRow.02b1c4e8.css","./Noticia.f2e6b6d9.css","./politica.1eedb7d5.css"],import.meta.url).then(t=>t.default||t)},{name:"politicaDePrivacidad",path:"/politicaDePrivacidad",meta:{},alias:[],redirect:void 0,component:()=>mt(()=>import("./politicaDePrivacidad.57a06f18.js"),["./politicaDePrivacidad.57a06f18.js","./politicaDePrivacidad.c7420d34.css"],import.meta.url).then(t=>t.default||t)},{name:"sociedad",path:"/sociedad",meta:{},alias:[],redirect:void 0,component:()=>mt(()=>import("./sociedad.a635ea06.js"),["./sociedad.a635ea06.js","./Noticia.fe775c2c.js","./VRow.7d849aad.js","./VRow.02b1c4e8.css","./Noticia.f2e6b6d9.css","./sociedad.1e5b9394.css"],import.meta.url).then(t=>t.default||t)},{name:"tendencias",path:"/tendencias",meta:{},alias:[],redirect:void 0,component:()=>mt(()=>import("./tendencias.3578b133.js"),["./tendencias.3578b133.js","./Noticia.fe775c2c.js","./VRow.7d849aad.js","./VRow.02b1c4e8.css","./Noticia.f2e6b6d9.css","./tendencias.693dbf3c.css"],import.meta.url).then(t=>t.default||t)},{name:"test",path:"/test",meta:{},alias:[],redirect:void 0,component:()=>mt(()=>import("./test.493c4efe.js"),[],import.meta.url).then(t=>t.default||t)}],xM={scrollBehavior(t,e,n){var c;const r=Be(),s=((c=ws().options)==null?void 0:c.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&MM(e,t)&&(i={left:0,top:0}),t.path===e.path){if(e.hash&&!t.hash)return{left:0,top:0};if(t.hash)return{el:t.hash,top:V_(t.hash),behavior:s}}const a=u=>!!(u.meta.pageTransition??vf),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(u=>{r.hooks.hookOnce(l,async()=>{await Dr(),t.hash&&(i={el:t.hash,top:V_(t.hash),behavior:s}),u(i)})})}};function V_(t){try{const e=document.querySelector(t);if(e)return parseFloat(getComputedStyle(e).scrollMarginTop)}catch{}return 0}function MM(t,e){const n=e.matched.every((r,s)=>{var i,o,a;return((i=r.components)==null?void 0:i.default)===((a=(o=t.matched[s])==null?void 0:o.components)==null?void 0:a.default)});return!!(!n||n&&JSON.stringify(t.params)!==JSON.stringify(e.params))}const LM={},Vt={...LM,...xM},VM=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=Be(),s=ws();if(([e,n]=Ol(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=Rp({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`}),a=s.beforeResolve(c=>{if(a(),c===t){const u=s.afterEach(async()=>{u(),await r.runWithContext(()=>Vs(o)),window.history.pushState({},"",t.fullPath)});return!1}})},FM=[VM],To={};function UM(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const c=i.includes(t.slice(o))?t.slice(o).length:1;let u=i.slice(c);return u[0]!=="/"&&(u="/"+u),Jg(u,"")}const a=Jg(r,t),l=!n||TS(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":s)+i}const $M=Mt({name:"nuxt:router",enforce:"pre",async setup(t){var v,T;let e,n,r=kc().app.baseURL;Vt.hashMode&&!r.includes("#")&&(r+="#");const s=((v=Vt.history)==null?void 0:v.call(Vt,r))??(Vt.hashMode?Gx(r):V0(r)),i=((T=Vt.routes)==null?void 0:T.call(Vt,L_))??L_;let o;const a=UM(r,window.location,t.payload.path),l=NM({...Vt,scrollBehavior:(y,m,I)=>{var E;if(m===Tn){o=I;return}return l.options.scrollBehavior=Vt.scrollBehavior,(E=Vt.scrollBehavior)==null?void 0:E.call(Vt,y,Tn,o||I)},history:s,routes:i});t.vueApp.use(l);const c=fn(l.currentRoute.value);l.afterEach((y,m)=>{c.value=m}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=fn(l.resolve(a)),h=()=>{u.value=l.currentRoute.value};t.hook("page:finish",h),l.afterEach((y,m)=>{var I,E,R,D;((E=(I=y.matched[0])==null?void 0:I.components)==null?void 0:E.default)===((D=(R=m.matched[0])==null?void 0:R.components)==null?void 0:D.default)&&h()});const f={};for(const y in u.value)Object.defineProperty(f,y,{get:()=>u.value[y]});t._route=ia(f),t._middleware=t._middleware||{global:[],named:{}};const d=hu();try{[e,n]=Ol(()=>l.isReady()),await e,n()}catch(y){[e,n]=Ol(()=>t.runWithContext(()=>Vs(y))),await e,n()}const p=k0("_layout");return l.beforeEach(async(y,m)=>{var I;y.meta=nn(y.meta),t.isHydrating&&p.value&&!cs(y.meta.layout)&&(y.meta.layout=p.value),t._processingMiddleware=!0;{const E=new Set([...FM,...t._middleware.global]);for(const R of y.matched){const D=R.meta.middleware;if(D)if(Array.isArray(D))for(const M of D)E.add(M);else E.add(D)}for(const R of E){const D=typeof R=="string"?t._middleware.named[R]||await((I=To[R])==null?void 0:I.call(To).then(S=>S.default||S)):R;if(!D)throw new Error(`Unknown route middleware: '${R}'.`);const M=await t.runWithContext(()=>D(y,m));if(!t.payload.serverRendered&&t.isHydrating&&(M===!1||M instanceof Error)){const S=M||_f({statusCode:404,statusMessage:`Page Not Found: ${a}`});return await t.runWithContext(()=>Vs(S)),!1}if(M||M===!1)return M}}}),l.onError(()=>{delete t._processingMiddleware}),l.afterEach(async(y,m,I)=>{delete t._processingMiddleware,!t.isHydrating&&d.value&&await t.runWithContext(ix),y.matched.length===0&&await t.runWithContext(()=>Vs(_f({statusCode:404,fatal:!1,statusMessage:`Page not found: ${y.fullPath}`})))}),t.hooks.hookOnce("app:created",async()=>{try{await l.replace({...l.resolve(a),name:void 0,force:!0}),l.options.scrollBehavior=Vt.scrollBehavior}catch(y){await t.runWithContext(()=>Vs(y))}}),{provide:{router:l}}}});function BM(){const t=[];function e(r){var s;if(!(!r||typeof r!="object"||Object.keys(r).length===0)){if(!r._context){let i=(s=new Error("tmp").stack)==null?void 0:s.split(`
`)[2].split(" ")[5];i!=null&&i.includes("/")&&(i="anonymous"),r._context=i}t.push(r)}}function n(){var s;const r={_context:{}};for(const i in t)for(const o in t[i]){const a=o,l=t[i][o];!o.endsWith("context")&&typeof l<"u"&&(r[o]=l,r._context[a]=((s=t[i]._context)==null?void 0:s[a])||t[i]._context||"anonymous")}return HM(r)}return{stack:t,push:e,get:n}}function HM(t){return typeof t.indexable<"u"&&(t.indexable=String(t.indexable)!=="false"),typeof t.trailingSlash<"u"&&(t.trailingSlash=String(t.trailingSlash)!=="false"),t.url&&!Ri(t.url,{acceptRelative:!0,strict:!1})&&(t.url=ES(t.url)),t}const jM=Mt({name:"nuxt-site-config",enforce:"pre",async setup(t){let e;e||(e=BM());{e.push({_context:"window",url:window.location.origin});const n=k0("site-config");n.value&&e.push(n.value)}return{provide:{siteConfig:e}}}}),WM=Mt({name:"nuxt:payload",setup(t){Ix()&&(t.hooks.hook("link:prefetch",async e=>{Pc(e).protocol||await __(e)}),ws().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await __(e.path);r&&Object.assign(t.static.data,r.data)}))}}),qM=Mt({name:"nuxt:global-components"}),KM=[],zM=Mt({name:"nuxt:head",setup(t){const e=KD({plugins:KM});t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await C0(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",r),t.hooks.hook("app:suspense:resolve",r)}}}),Xr={default:()=>mt(()=>import("./default.ce4e750d.js"),["./default.ce4e750d.js","./mp-logo.443f2129.js","./VRow.7d849aad.js","./VRow.02b1c4e8.css","./default.5e40f135.css"],import.meta.url).then(t=>t.default||t)},GM=Mt({name:"nuxt:prefetch",setup(t){const e=ws();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Xr[r]=="function"&&await Xr[r]()})}),t.hooks.hook("link:prefetch",n=>{var o,a,l,c;if(Ri(n))return;const r=e.resolve(n);if(!r)return;const s=(o=r==null?void 0:r.meta)==null?void 0:o.layout;let i=Array.isArray((a=r==null?void 0:r.meta)==null?void 0:a.middleware)?(l=r==null?void 0:r.meta)==null?void 0:l.middleware:[(c=r==null?void 0:r.meta)==null?void 0:c.middleware];i=i.filter(u=>typeof u=="string");for(const u of i)typeof To[u]=="function"&&To[u]();s&&typeof Xr[s]=="function"&&Xr[s]()})}});function F_(...t){var e;(e=window.dataLayer)==null||e.push(arguments)}const QM=Mt(()=>{const{gtag:{id:t,config:e,initialConsent:n,loadingStrategy:r}}=kc().public;if(!t||(window.dataLayer=window.dataLayer||[],F_("js",new Date),F_("config",t,e),!n))return;const s=r==="async"?"async":"defer";GD({script:[{src:`https://www.googletagmanager.com/gtag/js?id=${t}`,[s]:!0}]})});var YM="firebase",JM="10.3.0";/**
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
 */qt(YM,JM,"app");const XM=Mt(()=>{const t=Sx();return{provide:{firebaseApp:cw(t.firebaseConfig)}}});function Pp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function z0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZM=z0,G0=new Si("auth","Firebase",z0());/**
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
 */const Zl=new ca("@firebase/auth");function eL(t,...e){Zl.logLevel<=me.WARN&&Zl.warn(`Auth (${Mr}): ${t}`,...e)}function ml(t,...e){Zl.logLevel<=me.ERROR&&Zl.error(`Auth (${Mr}): ${t}`,...e)}/**
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
 */function tr(t,...e){throw kp(t,...e)}function On(t,...e){return kp(t,...e)}function tL(t,e,n){const r=Object.assign(Object.assign({},ZM()),{[e]:n});return new Si("auth","Firebase",r).create(e,{appName:t.name})}function kp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return G0.create(t,...e)}function ie(t,e,...n){if(!t)throw kp(e,...n)}function qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ml(e),new Error(e)}function nr(t,e){t||qn(e)}/**
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
 */function Af(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nL(){return U_()==="http:"||U_()==="https:"}function U_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function rL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nL()||fP()||"connection"in navigator)?navigator.onLine:!0}function sL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Aa{constructor(e,n){this.shortDelay=e,this.longDelay=n,nr(n>e,"Short delay should be less than long delay!"),this.isMobile=Rd()||rw()}get(){return rL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Np(t,e){nr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Q0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const oL=new Aa(3e4,6e4);function Y0(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ca(t,e,n,r,s={}){return J0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Pi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Q0.fetch()(X0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function J0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iL),e);try{const s=new lL(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Za(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Za(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Za(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Za(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw tL(t,u,c);tr(t,u)}}catch(s){if(s instanceof Vn)throw s;tr(t,"network-request-failed",{message:String(s)})}}async function aL(t,e,n,r,s={}){const i=await Ca(t,e,n,r,s);return"mfaPendingCredential"in i&&tr(t,"multi-factor-auth-required",{_serverResponse:i}),i}function X0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Np(t.config,s):`${t.config.apiScheme}://${s}`}class lL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(On(this.auth,"network-request-failed")),oL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Za(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=On(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function cL(t,e){return Ca(t,"POST","/v1/accounts:delete",e)}async function uL(t,e){return Ca(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hL(t,e=!1){const n=xt(t),r=await n.getIdToken(e),s=Op(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Io(rh(s.auth_time)),issuedAtTime:Io(rh(s.iat)),expirationTime:Io(rh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function rh(t){return Number(t)*1e3}function Op(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ml("JWT malformed, contained fewer than 3 sections"),null;try{const s=xl(n);return s?JSON.parse(s):(ml("Failed to decode base64 JWT payload"),null)}catch(s){return ml("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function fL(t){const e=Op(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Jo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&dL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class pL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Z0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Io(this.lastLoginAt),this.creationTime=Io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ec(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Jo(t,uL(n,{idToken:r}));ie(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?_L(i.providerUserInfo):[],a=mL(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Z0(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function gL(t){const e=xt(t);await ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mL(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function _L(t){return t.map(e=>{var{providerId:n}=e,r=Pp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function yL(t,e){const n=await J0(t,{},async()=>{const r=Pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=X0(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Q0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Xo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fL(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ie(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await yL(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Xo;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xo,this.toJSON())}_performRefresh(){return qn("not implemented")}}/**
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
 */function ur(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class is{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Pp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Z0(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Jo(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hL(this,e)}reload(){return gL(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new is(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ec(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Jo(this,cL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=n.createdAt)!==null&&c!==void 0?c:void 0,m=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:E,isAnonymous:R,providerData:D,stsTokenManager:M}=n;ie(I&&M,e,"internal-error");const S=Xo.fromJSON(this.name,M);ie(typeof I=="string",e,"internal-error"),ur(h,e.name),ur(f,e.name),ie(typeof E=="boolean",e,"internal-error"),ie(typeof R=="boolean",e,"internal-error"),ur(d,e.name),ur(p,e.name),ur(v,e.name),ur(T,e.name),ur(y,e.name),ur(m,e.name);const K=new is({uid:I,auth:e,email:f,emailVerified:E,displayName:h,isAnonymous:R,photoURL:p,phoneNumber:d,tenantId:v,stsTokenManager:S,createdAt:y,lastLoginAt:m});return D&&Array.isArray(D)&&(K.providerData=D.map(W=>Object.assign({},W))),T&&(K._redirectEventId=T),K}static async _fromIdTokenResponse(e,n,r=!1){const s=new Xo;s.updateFromServerResponse(n);const i=new is({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ec(i),i}}/**
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
 */const $_=new Map;function Kn(t){nr(t instanceof Function,"Expected a class definition");let e=$_.get(t);return e?(nr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$_.set(t,e),e)}/**
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
 */class eI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}eI.type="NONE";const B_=eI;/**
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
 */function _l(t,e,n){return`firebase:${t}:${e}:${n}`}class Js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=_l(this.userKey,s.apiKey,i),this.fullPersistenceKey=_l("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?is._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Js(Kn(B_),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Kn(B_);const o=_l(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=is._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Js(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Js(i,e,r))}}/**
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
 */function H_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iI(e))return"Blackberry";if(oI(e))return"Webos";if(Dp(e))return"Safari";if((e.includes("chrome/")||nI(e))&&!e.includes("edge/"))return"Chrome";if(sI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tI(t=bt()){return/firefox\//i.test(t)}function Dp(t=bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nI(t=bt()){return/crios\//i.test(t)}function rI(t=bt()){return/iemobile/i.test(t)}function sI(t=bt()){return/android/i.test(t)}function iI(t=bt()){return/blackberry/i.test(t)}function oI(t=bt()){return/webos/i.test(t)}function pu(t=bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vL(t=bt()){var e;return pu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function EL(){return dP()&&document.documentMode===10}function aI(t=bt()){return pu(t)||sI(t)||oI(t)||iI(t)||/windows phone/i.test(t)||rI(t)}function wL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function lI(t,e=[]){let n;switch(t){case"Browser":n=H_(bt());break;case"Worker":n=`${H_(bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mr}/${r}`}/**
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
 */class TL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function IL(t,e={}){return Ca(t,"GET","/v2/passwordPolicy",Y0(t,e))}/**
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
 */const AL=6;class CL{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:AL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class RL{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new j_(this),this.idTokenSubscription=new j_(this),this.beforeStateQueue=new TL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=G0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ec(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xt(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await IL(this),n=new CL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await Js.create(this,[Kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xp(t){return xt(t)}class j_{constructor(e){this.auth=e,this.observer=null,this.addObserver=wP(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function bL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function SL(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=On("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",bL().appendChild(r)})}function PL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function kL(t,e){const n=Dc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ll(i,e??{}))return s;tr(s,"already-initialized")}return n.initialize({options:e})}function NL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function OL(t,e,n){const r=xp(t);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=cI(e),{host:o,port:a}=DL(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||xL()}function cI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DL(t){const e=cI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:W_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:W_(o)}}}function W_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class uI{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qn("not implemented")}_getIdTokenResponse(e){return qn("not implemented")}_linkToIdToken(e,n){return qn("not implemented")}_getReauthenticationResolver(e){return qn("not implemented")}}/**
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
 */async function Xs(t,e){return aL(t,"POST","/v1/accounts:signInWithIdp",Y0(t,e))}/**
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
 */const ML="http://localhost";class ps extends uI{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Pp(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ps(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xs(e,n)}buildRequest(){const e={requestUri:ML,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pi(n)}return e}}/**
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
 */class hI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ra extends hI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pr extends Ra{constructor(){super("facebook.com")}static credential(e){return ps._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";pr.PROVIDER_ID="facebook.com";/**
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
 */class gr extends Ra{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ps._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.GOOGLE_SIGN_IN_METHOD="google.com";gr.PROVIDER_ID="google.com";/**
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
 */class mr extends Ra{constructor(){super("github.com")}static credential(e){return ps._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.GITHUB_SIGN_IN_METHOD="github.com";mr.PROVIDER_ID="github.com";/**
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
 */class _r extends Ra{constructor(){super("twitter.com")}static credential(e,n){return ps._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.TWITTER_SIGN_IN_METHOD="twitter.com";_r.PROVIDER_ID="twitter.com";/**
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
 */class yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await is._fromIdTokenResponse(e,r,s),o=q_(r);return new yi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=q_(r);return new yi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function q_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class tc extends Vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,tc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new tc(e,n,r,s)}}function fI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?tc._fromErrorAndOperation(t,i,e,r):i})}async function LL(t,e,n=!1){const r=await Jo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yi._forOperation(t,"link",r)}/**
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
 */async function VL(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Jo(t,fI(r,s,e,t),n);ie(i.idToken,r,"internal-error");const o=Op(i.idToken);ie(o,r,"internal-error");const{sub:a}=o;return ie(t.uid===a,r,"user-mismatch"),yi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tr(r,"user-mismatch"),i}}/**
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
 */async function FL(t,e,n=!1){const r="signIn",s=await fI(t,r,e),i=await yi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Mp(t,e,n,r){return xt(t).onIdTokenChanged(e,n,r)}function dI(t,e,n){return xt(t).beforeAuthStateChanged(e,n)}const nc="__sak";/**
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
 */class pI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nc,"1"),this.storage.removeItem(nc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function UL(){const t=bt();return Dp(t)||pu(t)}const $L=1e3,BL=10;class gI extends pI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=UL()&&wL(),this.fallbackToPolling=aI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);EL()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,BL):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$L)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gI.type="LOCAL";const HL=gI;/**
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
 */class mI extends pI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mI.type="SESSION";const _I=mI;/**
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
 */function jL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class gu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new gu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await jL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gu.receivers=[];/**
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
 */function Lp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class WL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Lp("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Dn(){return window}function qL(t){Dn().location.href=t}/**
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
 */function yI(){return typeof Dn().WorkerGlobalScope<"u"&&typeof Dn().importScripts=="function"}async function KL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GL(){return yI()?self:null}/**
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
 */const vI="firebaseLocalStorageDb",QL=1,rc="firebaseLocalStorage",EI="fbase_key";class ba{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mu(t,e){return t.transaction([rc],e?"readwrite":"readonly").objectStore(rc)}function YL(){const t=indexedDB.deleteDatabase(vI);return new ba(t).toPromise()}function Cf(){const t=indexedDB.open(vI,QL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(rc,{keyPath:EI})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(rc)?e(r):(r.close(),await YL(),e(await Cf()))})})}async function K_(t,e,n){const r=mu(t,!0).put({[EI]:e,value:n});return new ba(r).toPromise()}async function JL(t,e){const n=mu(t,!1).get(e),r=await new ba(n).toPromise();return r===void 0?null:r.value}function z_(t,e){const n=mu(t,!0).delete(e);return new ba(n).toPromise()}const XL=800,ZL=3;class wI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ZL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gu._getInstance(GL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KL(),!this.activeServiceWorker)return;this.sender=new WL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cf();return await K_(e,nc,"1"),await z_(e,nc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>K_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>JL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>z_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=mu(s,!1).getAll();return new ba(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wI.type="LOCAL";const eV=wI;new Aa(3e4,6e4);/**
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
 */function tV(t,e){return e?Kn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Vp extends uI{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nV(t){return FL(t.auth,new Vp(t),t.bypassAuthState)}function rV(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),VL(n,new Vp(t),t.bypassAuthState)}async function sV(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),LL(n,new Vp(t),t.bypassAuthState)}/**
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
 */class TI{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nV;case"linkViaPopup":case"linkViaRedirect":return sV;case"reauthViaPopup":case"reauthViaRedirect":return rV;default:tr(this.auth,"internal-error")}}resolve(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const iV=new Aa(2e3,1e4);class Fs extends TI{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Fs.currentPopupAction&&Fs.currentPopupAction.cancel(),Fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const e=Lp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iV.get())};e()}}Fs.currentPopupAction=null;/**
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
 */const oV="pendingRedirect",yl=new Map;class aV extends TI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yl.get(this.auth._key());if(!e){try{const r=await lV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yl.set(this.auth._key(),e)}return this.bypassAuthState||yl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lV(t,e){const n=hV(e),r=uV(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function cV(t,e){yl.set(t._key(),e)}function uV(t){return Kn(t._redirectPersistence)}function hV(t){return _l(oV,t.config.apiKey,t.name)}async function fV(t,e,n=!1){const r=xp(t),s=tV(r,e),o=await new aV(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const dV=10*60*1e3;class pV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gV(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!II(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(On(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dV&&this.cachedEventUids.clear(),this.cachedEventUids.has(G_(e))}saveEventToCache(e){this.cachedEventUids.add(G_(e)),this.lastProcessedEventTime=Date.now()}}function G_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function II({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gV(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return II(t);default:return!1}}/**
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
 */async function mV(t,e={}){return Ca(t,"GET","/v1/projects",e)}/**
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
 */const _V=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yV=/^https?/;async function vV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mV(t);for(const n of e)try{if(EV(n))return}catch{}tr(t,"unauthorized-domain")}function EV(t){const e=Af(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yV.test(n))return!1;if(_V.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const wV=new Aa(3e4,6e4);function Q_(){const t=Dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TV(t){return new Promise((e,n)=>{var r,s,i;function o(){Q_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Q_(),n(On(t,"network-request-failed"))},timeout:wV.get()})}if(!((s=(r=Dn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Dn().gapi)===null||i===void 0)&&i.load)o();else{const a=PL("iframefcb");return Dn()[a]=()=>{gapi.load?o():n(On(t,"network-request-failed"))},SL(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw vl=null,e})}let vl=null;function IV(t){return vl=vl||TV(t),vl}/**
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
 */const AV=new Aa(5e3,15e3),CV="__/auth/iframe",RV="emulator/auth/iframe",bV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PV(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Np(e,RV):`https://${t.config.authDomain}/${CV}`,r={apiKey:e.apiKey,appName:t.name,v:Mr},s=SV.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Pi(r).slice(1)}`}async function kV(t){const e=await IV(t),n=Dn().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:PV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bV,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=On(t,"network-request-failed"),a=Dn().setTimeout(()=>{i(o)},AV.get());function l(){Dn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const NV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OV=500,DV=600,xV="_blank",MV="http://localhost";class Y_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LV(t,e,n,r=OV,s=DV){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},NV),{width:r.toString(),height:s.toString(),top:i,left:o}),c=bt().toLowerCase();n&&(a=nI(c)?xV:n),tI(c)&&(e=e||MV,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(vL(c)&&a!=="_self")return VV(e||"",a),new Y_(null);const h=window.open(e||"",a,u);ie(h,t,"popup-blocked");try{h.focus()}catch{}return new Y_(h)}function VV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const FV="__/auth/handler",UV="emulator/auth/handler",$V=encodeURIComponent("fac");async function J_(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mr,eventId:s};if(e instanceof hI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Mh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Ra){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${$V}=${encodeURIComponent(l)}`:"";return`${BV(t)}?${Pi(a).slice(1)}${c}`}function BV({config:t}){return t.emulator?Np(t,UV):`https://${t.authDomain}/${FV}`}/**
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
 */const sh="webStorageSupport";class HV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_I,this._completeRedirectFn=fV,this._overrideRedirectResult=cV}async _openPopup(e,n,r,s){var i;nr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await J_(e,n,r,Af(),s);return LV(e,o,Lp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await J_(e,n,r,Af(),s);return qL(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(nr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kV(e),r=new pV(e);return n.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sh,{type:sh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[sh];o!==void 0&&n(!!o),tr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return aI()||Dp()||pu()}}const jV=HV;var X_="@firebase/auth",Z_="1.3.0";/**
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
 */class WV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function KV(t){Mn(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lI(t)},c=new RL(r,s,i,l);return NL(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mn(new gn("auth-internal",e=>{const n=xp(e.getProvider("auth").getImmediate());return(r=>new WV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(X_,Z_,qV(t)),qt(X_,Z_,"esm2017")}/**
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
 */const zV=5*60,GV=tw("authIdTokenMaxAge")||zV;let ey=null;const QV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>GV)return;const s=n==null?void 0:n.token;ey!==s&&(ey=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function AI(t=xc()){const e=Dc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kL(t,{popupRedirectResolver:jV,persistence:[eV,HL,_I]}),r=tw("authTokenSyncURL");if(r){const i=QV(r);dI(n,i,()=>i(n.currentUser)),Mp(n,o=>i(o))}const s=XE("auth");return s&&OL(n,`http://${s}`),n}KV("Browser");/**
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
 */const YV=new Map,JV={activated:!1,tokenObservers:[]};function vn(t){return YV.get(t)||Object.assign({},JV)}const ty={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class XV{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new xo,await ZV(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new xo,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function ZV(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const eF={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},sc=new Si("appCheck","AppCheck",eF);function CI(t){if(!vn(t).activated)throw sc.create("use-before-activation",{appName:t.name})}/**
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
 */const tF="firebase-app-check-database",nF=1,Rf="firebase-app-check-store";let el=null;function rF(){return el||(el=new Promise((t,e)=>{try{const n=indexedDB.open(tF,nF);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(sc.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(Rf,{keyPath:"compositeKey"})}}}catch(n){e(sc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),el)}function sF(t,e){return iF(oF(t),e)}async function iF(t,e){const r=(await rF()).transaction(Rf,"readwrite"),i=r.objectStore(Rf).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var c;a(sc.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function oF(t){return`${t.options.appId}-${t.name}`}/**
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
 */const bf=new ca("@firebase/app-check");function ny(t,e){return iw()?sF(t,e).catch(n=>{bf.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const aF={error:"UNKNOWN_ERROR"};function lF(t){return Nc.encodeString(JSON.stringify(t),!1)}async function Sf(t,e=!1){const n=t.app;CI(n);const r=vn(n);let s=r.token,i;if(s&&!ao(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(ao(l)?s=l:await ny(n,void 0))}if(!e&&s&&ao(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await vn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?bf.warn(l.message):bf.error(l),i=l}let a;return s?i?ao(s)?a={token:s.token,internalError:i}:a=sy(i):(a={token:s.token},r.token=s,await ny(n,s)):a=sy(i),o&&fF(n,a),a}async function cF(t){const e=t.app;CI(e);const{provider:n}=vn(e);{const{token:r}=await n.getToken();return{token:r}}}function uF(t,e,n,r){const{app:s}=t,i=vn(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&ao(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),ry(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>ry(t))}function RI(t,e){const n=vn(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function ry(t){const{app:e}=t,n=vn(e);let r=n.tokenRefresher;r||(r=hF(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function hF(t){const{app:e}=t;return new XV(async()=>{const n=vn(e);let r;if(n.token?r=await Sf(t,!0):r=await Sf(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=vn(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},ty.RETRIAL_MIN_WAIT,ty.RETRIAL_MAX_WAIT)}function fF(t,e){const n=vn(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function ao(t){return t.expireTimeMillis-Date.now()>0}function sy(t){return{token:lF(aF),error:t}}/**
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
 */class dF{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=vn(this.app);for(const n of e)RI(this.app,n.next);return Promise.resolve()}}function pF(t,e){return new dF(t,e)}function gF(t){return{getToken:e=>Sf(t,e),getLimitedUseToken:()=>cF(t),addTokenListener:e=>uF(t,"INTERNAL",e),removeTokenListener:e=>RI(t.app,e)}}const mF="@firebase/app-check",_F="0.8.0",yF="app-check",iy="app-check-internal";function vF(){Mn(new gn(yF,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return pF(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(iy).initialize()})),Mn(new gn(iy,t=>{const e=t.getProvider("app-check").getImmediate();return gF(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),qt(mF,_F)}vF();const bI=Symbol("firebaseApp");function Fp(t){return xr()&&Ue(bI,null)||xc(t)}const tl=new WeakMap;function EF(t,e){if(!tl.has(t)){const n=Av(!0);tl.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),tl.delete(t)}}return tl.get(t)}const wF=new WeakMap,nl=new WeakMap;function TF(t){const e=Fp(t);if(!nl.has(e)){let n;const s=[new Promise(i=>{n=i}),i=>{nl.set(e,i),n(i.value)}];nl.set(e,s)}return nl.get(e)}function IF(t,e){const n=AI(e);Mp(n,r=>{const s=TF();t.value=r,Array.isArray(s)&&s[1](t)})}const oy="@firebase/database",ay="1.0.1";/**
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
 */let SI="";function AF(t){SI=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CF{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ft(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Mo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RF{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ir(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new CF(e)}}catch{}return new RF},Zr=PI("localStorage"),Pf=PI("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new ca("@firebase/database"),bF=function(){let t=1;return function(){return t++}}(),kI=function(t){const e=CP(t),n=new EP;n.update(e);const r=n.digest();return Nc.encodeByteArray(r)},Sa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Sa.apply(null,r):typeof r=="object"?e+=ft(r):e+=r,e+=" "}return e};let os=null,ly=!0;const SF=function(t,e){F(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Zs.logLevel=me.VERBOSE,os=Zs.log.bind(Zs),e&&Pf.set("logging_enabled",!0)):typeof t=="function"?os=t:(os=null,Pf.remove("logging_enabled"))},Et=function(...t){if(ly===!0&&(ly=!1,os===null&&Pf.get("logging_enabled")===!0&&SF(!0)),os){const e=Sa.apply(null,t);os(e)}},Pa=function(t){return function(...e){Et(t,...e)}},kf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Sa(...t);Zs.error(e)},gs=function(...t){const e=`FIREBASE FATAL ERROR: ${Sa(...t)}`;throw Zs.error(e),new Error(e)},zt=function(...t){const e="FIREBASE WARNING: "+Sa(...t);Zs.warn(e)},PF=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&zt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},NI=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},kF=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},vi="[MIN_NAME]",ms="[MAX_NAME]",Li=function(t,e){if(t===e)return 0;if(t===vi||e===ms)return-1;if(e===vi||t===ms)return 1;{const n=cy(t),r=cy(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},NF=function(t,e){return t===e?0:t<e?-1:1},zi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ft(e))},Up=function(t){if(typeof t!="object"||t===null)return ft(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ft(e[r]),n+=":",n+=Up(t[e[r]]);return n+="}",n},OI=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function rn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const DI=function(t){F(!NI(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},OF=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},DF=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},xF=new RegExp("^-?(0*)\\d{1,10}$"),MF=-2147483648,LF=2147483647,cy=function(t){if(xF.test(t)){const e=Number(t);if(e>=MF&&e<=LF)return e}return null},ka=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw zt("Exception was thrown by user callback.",n),e},Math.floor(0))}},VF=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ao=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class FF{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){zt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UF{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',zt(e)}}class Nf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Nf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="5",xI="v",MI="s",LI="r",VI="f",FI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,UI="ls",$I="p",Of="ac",BI="websocket",HI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $F{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Zr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function BF(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function jI(t,e,n){F(typeof e=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let r;if(e===BI)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===HI)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);BF(t)&&(n.ns=t.namespace);const s=[];return rn(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HF{constructor(){this.counters_={}}incrementCounter(e,n=1){ir(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return oP(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih={},oh={};function Bp(t){const e=t.toString();return ih[e]||(ih[e]=new HF),ih[e]}function jF(t,e){const n=t.toString();return oh[n]||(oh[n]=e()),oh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WF{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&ka(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="start",qF="close",KF="pLPCommand",zF="pRTLPCB",WI="id",qI="pw",KI="ser",GF="cb",QF="seg",YF="ts",JF="d",XF="dframe",zI=1870,GI=30,ZF=zI-GI,e2=25e3,t2=3e4;class Us{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Pa(e),this.stats_=Bp(n),this.urlFn=l=>(this.appCheckToken&&(l[Of]=this.appCheckToken),jI(n,HI,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new WF(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(t2)),kF(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Hp((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===uy)this.id=a,this.password=l;else if(o===qF)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[uy]="t",r[KI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[GF]=this.scriptTagHolder.uniqueCallbackIdentifier),r[xI]=$p,this.transportSessionId&&(r[MI]=this.transportSessionId),this.lastSessionId&&(r[UI]=this.lastSessionId),this.applicationId&&(r[$I]=this.applicationId),this.appCheckToken&&(r[Of]=this.appCheckToken),typeof location<"u"&&location.hostname&&FI.test(location.hostname)&&(r[LI]=VI);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Us.forceAllow_=!0}static forceDisallow(){Us.forceDisallow_=!0}static isAvailable(){return Us.forceAllow_?!0:!Us.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!OF()&&!DF()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ft(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=YE(n),s=OI(r,ZF);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[XF]="t",r[WI]=e,r[qI]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ft(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Hp{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bF(),window[KF+this.uniqueCallbackIdentifier]=e,window[zF+this.uniqueCallbackIdentifier]=n,this.myIFrame=Hp.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Et("frame writing exception"),a.stack&&Et(a.stack),Et(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Et("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[WI]=this.myID,e[qI]=this.myPW,e[KI]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+GI+r.length<=zI;){const o=this.pendingSegs.shift();r=r+"&"+QF+s+"="+o.seg+"&"+YF+s+"="+o.ts+"&"+JF+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(e2)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Et("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=16384,r2=45e3;let ic=null;typeof MozWebSocket<"u"?ic=MozWebSocket:typeof WebSocket<"u"&&(ic=WebSocket);class ln{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Pa(this.connId),this.stats_=Bp(n),this.connURL=ln.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[xI]=$p,typeof location<"u"&&location.hostname&&FI.test(location.hostname)&&(o[LI]=VI),n&&(o[MI]=n),r&&(o[UI]=r),s&&(o[Of]=s),i&&(o[$I]=i),jI(e,BI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zr.set("previous_websocket_failure",!0);try{let r;sw(),this.mySock=new ic(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ln.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ic!==null&&!ln.forceDisallow_}static previouslyFailed(){return Zr.isInMemoryStorage||Zr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Zr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Mo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ft(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=OI(n,n2);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(r2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ln.responsesRequiredToBeHealthy=2;ln.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Us,ln]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ln&&ln.isAvailable();let r=n&&!ln.previouslyFailed();if(e.webSocketOnly&&(n||zt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ln];else{const s=this.transports_=[];for(const i of Zo.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Zo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Zo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2=6e4,i2=5e3,o2=10*1024,a2=100*1024,ah="t",hy="d",l2="s",fy="r",c2="e",dy="o",py="a",gy="n",my="p",u2="h";class h2{constructor(e,n,r,s,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Pa("c:"+this.id+":"),this.transportManager_=new Zo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ao(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>a2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>o2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ah in e){const n=e[ah];n===py?this.upgradeIfSecondaryHealthy_():n===fy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===dy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=zi("t",e),r=zi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:my,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:py,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=zi("t",e),r=zi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=zi(ah,e);if(hy in e){const r=e[hy];if(n===u2){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===gy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===l2?this.onConnectionShutdown_(r):n===fy?this.onReset_(r):n===c2?kf("Server Error: "+r):n===dy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):kf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),$p!==r&&zt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ao(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(s2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ao(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(i2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:my,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){F(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends YI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Rd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new oc}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=32,yy=768;class Fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ke(){return new Fe("")}function de(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Or(t){return t.pieces_.length-t.pieceNum_}function Me(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Fe(t.pieces_,e)}function JI(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function f2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function XI(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ZI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Fe(e,0)}function rt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Fe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Fe(n,0)}function ce(t){return t.pieceNum_>=t.pieces_.length}function Zt(t,e){const n=de(t),r=de(e);if(n===null)return e;if(n===r)return Zt(Me(t),Me(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function eA(t,e){if(Or(t)!==Or(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function cn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Or(t)>Or(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class d2{constructor(e,n){this.errorPrefix_=n,this.parts_=XI(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Oc(this.parts_[r]);tA(this)}}function p2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Oc(e),tA(t)}function g2(t){const e=t.parts_.pop();t.byteLength_-=Oc(e),t.parts_.length>0&&(t.byteLength_-=1)}function tA(t){if(t.byteLength_>yy)throw new Error(t.errorPrefix_+"has a key path longer than "+yy+" bytes ("+t.byteLength_+").");if(t.parts_.length>_y)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_y+") or object contains a cycle "+qr(t))}function qr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp extends YI{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new jp}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=1e3,m2=60*5*1e3,vy=30*1e3,_2=1.3,y2=3e4,v2="server_kill",Ey=3;class Qn extends QI{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Qn.nextPersistentConnectionId_++,this.log_=Pa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gi,this.maxReconnectDelay_=m2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!sw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&oc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(ft(i)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new xo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;Qn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ir(e,"w")){const r=ai(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();zt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=yP(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ft(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):kf("Unrecognized action received from server: "+ft(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>y2&&(this.reconnectDelay_=Gi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Qn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){F(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Et("getToken() completed but was canceled"):(Et("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new h2(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,d=>{zt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(v2)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&zt(h),l())}}}interrupt(e){Et("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Et("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Mh(this.interruptReasons_)&&(this.reconnectDelay_=Gi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Up(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Fe(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Et("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ey&&(this.reconnectDelay_=vy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Et("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ey&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+SI.replace(/\./g,"-")]=1,Rd()?e["framework.cordova"]=1:rw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=oc.getInstance().currentlyOnline();return Mh(this.interruptReasons_)&&e}}Qn.nextPersistentConnectionId_=0;Qn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new pe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new pe(vi,e),s=new pe(vi,n);return this.compare(r,s)!==0}minPost(){return pe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rl;class nA extends _u{static get __EMPTY_NODE(){return rl}static set __EMPTY_NODE(e){rl=e}compare(e,n){return Li(e.name,n.name)}isDefinedOn(e){throw bi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return pe.MIN}maxPost(){return new pe(ms,rl)}makePost(e,n){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new pe(e,rl)}toString(){return".key"}}const ei=new nA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class nt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??nt.RED,this.left=s??Ut.EMPTY_NODE,this.right=i??Ut.EMPTY_NODE}copy(e,n,r,s,i){return new nt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ut.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ut.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}nt.RED=!0;nt.BLACK=!1;class E2{copy(e,n,r,s,i){return this}insert(e,n,r){return new nt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ut{constructor(e,n=Ut.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ut(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,nt.BLACK,null,null))}remove(e){return new Ut(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,nt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new sl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new sl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new sl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new sl(this.root_,null,this.comparator_,!0,e)}}Ut.EMPTY_NODE=new E2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w2(t,e){return Li(t.name,e.name)}function Wp(t,e){return Li(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Df;function T2(t){Df=t}const rA=function(t){return typeof t=="number"?"number:"+DI(t):"string:"+t},sA=function(t){if(t.isLeafNode()){const e=t.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ir(e,".sv"),"Priority must be a string or number.")}else F(t===Df||t.isEmpty(),"priority of unexpected type.");F(t===Df||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wy;class et{constructor(e,n=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sA(this.priorityNode_)}static set __childrenNodeConstructor(e){wy=e}static get __childrenNodeConstructor(){return wy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:de(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=de(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(F(r!==".priority"||Or(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(Me(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+rA(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=DI(this.value_):e+=this.value_,this.lazyHash_=kI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=et.VALUE_TYPE_ORDER.indexOf(n),i=et.VALUE_TYPE_ORDER.indexOf(r);return F(s>=0,"Unknown leaf type: "+n),F(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iA,oA;function I2(t){iA=t}function A2(t){oA=t}class C2 extends _u{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Li(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return pe.MIN}maxPost(){return new pe(ms,new et("[PRIORITY-POST]",oA))}makePost(e,n){const r=iA(e);return new pe(n,new et("[PRIORITY-POST]",r))}toString(){return".priority"}}const It=new C2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2=Math.log(2);class b2{constructor(e){const n=i=>parseInt(Math.log(i)/R2,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ac=function(t,e,n,r){t.sort(e);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new nt(f,h.node,nt.BLACK,null,null);{const d=parseInt(u/2,10)+l,p=s(l,d),v=s(d+1,c);return h=t[d],f=n?n(h):h,new nt(f,h.node,nt.BLACK,p,v)}},i=function(l){let c=null,u=null,h=t.length;const f=function(p,v){const T=h-p,y=h;h-=p;const m=s(T+1,y),I=t[T],E=n?n(I):I;d(new nt(E,I.node,v,null,m))},d=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const v=l.nextBitIsOne(),T=Math.pow(2,l.count-(p+1));v?f(T,nt.BLACK):(f(T,nt.BLACK),f(T,nt.RED))}return u},o=new b2(t.length),a=i(o);return new Ut(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lh;const Ps={};class zn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return F(Ps&&It,"ChildrenNode.ts has not been loaded"),lh=lh||new zn({".priority":Ps},{".priority":It}),lh}get(e){const n=ai(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ut?n:null}hasIndex(e){return ir(this.indexSet_,e.toString())}addIndex(e,n){F(e!==ei,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(pe.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=ac(r,e.getCompare()):a=Ps;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new zn(u,c)}addToIndexes(e,n){const r=Ml(this.indexes_,(s,i)=>{const o=ai(this.indexSet_,i);if(F(o,"Missing index implementation for "+i),s===Ps)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(pe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ac(a,o.getCompare())}else return Ps;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new pe(e.name,a))),l.insert(e,e.node)}});return new zn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ml(this.indexes_,s=>{if(s===Ps)return s;{const i=n.get(e.name);return i?s.remove(new pe(e.name,i)):s}});return new zn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi;class Ae{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&sA(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Qi||(Qi=new Ae(new Ut(Wp),null,zn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Qi}updatePriority(e){return this.children_.isEmpty()?this:new Ae(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Qi:n}}getChild(e){const n=de(e);return n===null?this:this.getImmediateChild(n).getChild(Me(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(F(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new pe(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Qi:this.priorityNode_;return new Ae(s,o,i)}}updateChild(e,n){const r=de(e);if(r===null)return n;{F(de(e)!==".priority"||Or(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Me(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(It,(o,a)=>{n[o]=a.val(e),r++,i&&Ae.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+rA(this.getPriority().val())+":"),this.forEachChild(It,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":kI(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new pe(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new pe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,pe.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,pe.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Na?-1:0}withIndex(e){if(e===ei||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ae(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ei||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(It),s=n.getIterator(It);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ei?null:this.indexMap_.get(e.toString())}}Ae.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class S2 extends Ae{constructor(){super(new Ut(Wp),Ae.EMPTY_NODE,zn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ae.EMPTY_NODE}isEmpty(){return!1}}const Na=new S2;Object.defineProperties(pe,{MIN:{value:new pe(vi,Ae.EMPTY_NODE)},MAX:{value:new pe(ms,Na)}});nA.__EMPTY_NODE=Ae.EMPTY_NODE;et.__childrenNodeConstructor=Ae;T2(Na);A2(Na);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=!0;function wt(t,e=null){if(t===null)return Ae.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new et(n,wt(e))}if(!(t instanceof Array)&&P2){const n=[];let r=!1;if(rn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=wt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new pe(o,l)))}}),n.length===0)return Ae.EMPTY_NODE;const i=ac(n,w2,o=>o.name,Wp);if(r){const o=ac(n,It.getCompare());return new Ae(i,wt(e),new zn({".priority":o},{".priority":It}))}else return new Ae(i,wt(e),zn.Default)}else{let n=Ae.EMPTY_NODE;return rn(t,(r,s)=>{if(ir(t,r)&&r.substring(0,1)!=="."){const i=wt(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(wt(e))}}I2(wt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2 extends _u{constructor(e){super(),this.indexPath_=e,F(!ce(e)&&de(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Li(e.name,n.name):i}makePost(e,n){const r=wt(e),s=Ae.EMPTY_NODE.updateChild(this.indexPath_,r);return new pe(n,s)}maxPost(){const e=Ae.EMPTY_NODE.updateChild(this.indexPath_,Na);return new pe(ms,e)}toString(){return XI(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2 extends _u{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Li(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return pe.MIN}maxPost(){return pe.MAX}makePost(e,n){const r=wt(e);return new pe(n,r)}toString(){return".value"}}const O2=new N2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D2(t){return{type:"value",snapshotNode:t}}function x2(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function M2(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ty(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function L2(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=It}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vi}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ms}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===It}copy(){const e=new qp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Iy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===It?n="$priority":t.index_===O2?n="$value":t.index_===ei?n="$key":(F(t.index_ instanceof k2,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ft(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ft(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ft(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ft(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ft(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ay(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==It&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends QI{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Pa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=lc.getListenId_(e,r),a={};this.listens_[o]=a;const l=Iy(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,r),ai(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const r=lc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Iy(e._queryParams),r=e._path.toString(),s=new xo;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Pi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Mo(a.responseText)}catch{zt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&zt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(){this.rootNode_=Ae.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(){return{value:null,children:new Map}}function aA(t,e,n){if(ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=de(e);t.children.has(r)||t.children.set(r,cc());const s=t.children.get(r);e=Me(e),aA(s,e,n)}}function xf(t,e,n){t.value!==null?n(e,t.value):F2(t,(r,s)=>{const i=new Fe(e.toString()+"/"+r);xf(s,i,n)})}function F2(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&rn(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=10*1e3,$2=30*1e3,B2=5*60*1e3;class H2{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new U2(e);const r=Cy+($2-Cy)*Math.random();Ao(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;rn(e,(s,i)=>{i>0&&ir(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Ao(this.reportStats_.bind(this),Math.floor(Math.random()*2*B2))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(kn||(kn={}));function lA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function cA(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function uA(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=kn.ACK_USER_WRITE,this.source=lA()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Fe(e));return new uc(ke(),n,this.revert)}}else return F(de(this.path)===e,"operationForChild called for unrelated child."),new uc(Me(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=kn.OVERWRITE}operationForChild(e){return ce(this.path)?new _s(this.source,ke(),this.snap.getImmediateChild(e)):new _s(this.source,Me(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=kn.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new Fe(e));return n.isEmpty()?null:n.value?new _s(this.source,ke(),n.value):new ea(this.source,ke(),n)}else return F(de(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ea(this.source,Me(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=de(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function j2(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(L2(o.childName,o.snapshotNode))}),Yi(t,s,"child_removed",e,r,n),Yi(t,s,"child_added",e,r,n),Yi(t,s,"child_moved",i,r,n),Yi(t,s,"child_changed",e,r,n),Yi(t,s,"value",e,r,n),s}function Yi(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>q2(t,a,l)),o.forEach(a=>{const l=W2(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function W2(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function q2(t,e,n){if(e.childName==null||n.childName==null)throw bi("Should only compare child_ events.");const r=new pe(e.childName,e.snapshotNode),s=new pe(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(t,e){return{eventCache:t,serverCache:e}}function Co(t,e,n,r){return hA(new Kp(e,n,r),t.serverCache)}function fA(t,e,n,r){return hA(t.eventCache,new Kp(e,n,r))}function Mf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ys(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ch;const K2=()=>(ch||(ch=new Ut(NF)),ch);class De{constructor(e,n=K2()){this.value=e,this.children=n}static fromObject(e){let n=new De(null);return rn(e,(r,s)=>{n=n.set(new Fe(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ke(),value:this.value};if(ce(e))return null;{const r=de(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Me(e),n);return i!=null?{path:rt(new Fe(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=de(e),r=this.children.get(n);return r!==null?r.subtree(Me(e)):new De(null)}}set(e,n){if(ce(e))return new De(n,this.children);{const r=de(e),i=(this.children.get(r)||new De(null)).set(Me(e),n),o=this.children.insert(r,i);return new De(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new De(null):new De(null,this.children);{const n=de(e),r=this.children.get(n);if(r){const s=r.remove(Me(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new De(null):new De(this.value,i)}else return this}}get(e){if(ce(e))return this.value;{const n=de(e),r=this.children.get(n);return r?r.get(Me(e)):null}}setTree(e,n){if(ce(e))return n;{const r=de(e),i=(this.children.get(r)||new De(null)).setTree(Me(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new De(this.value,o)}}fold(e){return this.fold_(ke(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(rt(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ke(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(ce(e))return null;{const i=de(e),o=this.children.get(i);return o?o.findOnPath_(Me(e),rt(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ke(),n)}foreachOnPath_(e,n,r){if(ce(e))return this;{this.value&&r(n,this.value);const s=de(e),i=this.children.get(s);return i?i.foreachOnPath_(Me(e),rt(n,s),r):new De(null)}}foreach(e){this.foreach_(ke(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(rt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.writeTree_=e}static empty(){return new pn(new De(null))}}function Ro(t,e,n){if(ce(e))return new pn(new De(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Zt(s,e);return i=i.updateChild(o,n),new pn(t.writeTree_.set(s,i))}else{const s=new De(n),i=t.writeTree_.setTree(e,s);return new pn(i)}}}function Ry(t,e,n){let r=t;return rn(n,(s,i)=>{r=Ro(r,rt(e,s),i)}),r}function by(t,e){if(ce(e))return pn.empty();{const n=t.writeTree_.setTree(e,new De(null));return new pn(n)}}function Lf(t,e){return Ts(t,e)!=null}function Ts(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Zt(n.path,e)):null}function Sy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(It,(r,s)=>{e.push(new pe(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new pe(r,s.value))}),e}function br(t,e){if(ce(e))return t;{const n=Ts(t,e);return n!=null?new pn(new De(n)):new pn(t.writeTree_.subtree(e))}}function Vf(t){return t.writeTree_.isEmpty()}function Ei(t,e){return dA(ke(),t.writeTree_,e)}function dA(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(F(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=dA(rt(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(rt(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t,e){return vA(e,t)}function z2(t,e,n,r,s){F(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Ro(t.visibleWrites,e,n)),t.lastWriteId=r}function G2(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Q2(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);F(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Y2(a,r.path)?s=!1:cn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return J2(t),!0;if(r.snap)t.visibleWrites=by(t.visibleWrites,r.path);else{const a=r.children;rn(a,l=>{t.visibleWrites=by(t.visibleWrites,rt(r.path,l))})}return!0}else return!1}function Y2(t,e){if(t.snap)return cn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&cn(rt(t.path,n),e))return!0;return!1}function J2(t){t.visibleWrites=gA(t.allWrites,X2,ke()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function X2(t){return t.visible}function gA(t,e,n){let r=pn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)cn(n,o)?(a=Zt(n,o),r=Ro(r,a,i.snap)):cn(o,n)&&(a=Zt(o,n),r=Ro(r,ke(),i.snap.getChild(a)));else if(i.children){if(cn(n,o))a=Zt(n,o),r=Ry(r,a,i.children);else if(cn(o,n))if(a=Zt(o,n),ce(a))r=Ry(r,ke(),i.children);else{const l=ai(i.children,de(a));if(l){const c=l.getChild(Me(a));r=Ro(r,ke(),c)}}}else throw bi("WriteRecord should have .snap or .children")}}return r}function mA(t,e,n,r,s){if(!r&&!s){const i=Ts(t.visibleWrites,e);if(i!=null)return i;{const o=br(t.visibleWrites,e);if(Vf(o))return n;if(n==null&&!Lf(o,ke()))return null;{const a=n||Ae.EMPTY_NODE;return Ei(o,a)}}}else{const i=br(t.visibleWrites,e);if(!s&&Vf(i))return n;if(!s&&n==null&&!Lf(i,ke()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(cn(c.path,e)||cn(e,c.path))},a=gA(t.allWrites,o,e),l=n||Ae.EMPTY_NODE;return Ei(a,l)}}}function Z2(t,e,n){let r=Ae.EMPTY_NODE;const s=Ts(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(It,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=br(t.visibleWrites,e);return n.forEachChild(It,(o,a)=>{const l=Ei(br(i,new Fe(o)),a);r=r.updateImmediateChild(o,l)}),Sy(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=br(t.visibleWrites,e);return Sy(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function eU(t,e,n,r,s){F(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=rt(e,n);if(Lf(t.visibleWrites,i))return null;{const o=br(t.visibleWrites,i);return Vf(o)?s.getChild(n):Ei(o,s.getChild(n))}}function tU(t,e,n,r){const s=rt(e,n),i=Ts(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=br(t.visibleWrites,s);return Ei(o,r.getNode().getImmediateChild(n))}else return null}function nU(t,e){return Ts(t.visibleWrites,e)}function rU(t,e,n,r,s,i,o){let a;const l=br(t.visibleWrites,e),c=Ts(l,ke());if(c!=null)a=c;else if(n!=null)a=Ei(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let d=f.getNext();for(;d&&u.length<s;)h(d,r)!==0&&u.push(d),d=f.getNext();return u}else return[]}function sU(){return{visibleWrites:pn.empty(),allWrites:[],lastWriteId:-1}}function Ff(t,e,n,r){return mA(t.writeTree,t.treePath,e,n,r)}function _A(t,e){return Z2(t.writeTree,t.treePath,e)}function Py(t,e,n,r){return eU(t.writeTree,t.treePath,e,n,r)}function hc(t,e){return nU(t.writeTree,rt(t.treePath,e))}function iU(t,e,n,r,s,i){return rU(t.writeTree,t.treePath,e,n,r,s,i)}function zp(t,e,n){return tU(t.writeTree,t.treePath,e,n)}function yA(t,e){return vA(rt(t.treePath,e),t.writeTree)}function vA(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oU{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Ty(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,M2(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,x2(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Ty(r,e.snapshotNode,s.oldSnap));else throw bi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aU{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const EA=new aU;class Gp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Kp(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ys(this.viewCache_),i=iU(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function lU(t,e){F(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function cU(t,e,n,r,s){const i=new oU;let o,a;if(n.type===kn.OVERWRITE){const c=n;c.source.fromUser?o=Uf(t,e,c.path,c.snap,r,s,i):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ce(c.path),o=fc(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===kn.MERGE){const c=n;c.source.fromUser?o=hU(t,e,c.path,c.children,r,s,i):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=$f(t,e,c.path,c.children,r,s,a,i))}else if(n.type===kn.ACK_USER_WRITE){const c=n;c.revert?o=pU(t,e,c.path,r,s,i):o=fU(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===kn.LISTEN_COMPLETE)o=dU(t,e,n.path,r,i);else throw bi("Unknown operation type: "+n.type);const l=i.getChanges();return uU(e,o,l),{viewCache:o,changes:l}}function uU(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Mf(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(D2(Mf(e)))}}function wA(t,e,n,r,s,i){const o=e.eventCache;if(hc(r,n)!=null)return e;{let a,l;if(ce(n))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ys(e),u=c instanceof Ae?c:Ae.EMPTY_NODE,h=_A(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=Ff(r,ys(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=de(n);if(c===".priority"){F(Or(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Py(r,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Me(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Py(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=zp(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,i):a=o.getNode()}}return Co(e,a,o.isFullyInitialized()||ce(n),t.filter.filtersNodes())}}function fc(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ce(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),d,null)}else{const d=de(n);if(!l.isCompleteForPath(n)&&Or(n)>1)return e;const p=Me(n),T=l.getNode().getImmediateChild(d).updateChild(p,r);d===".priority"?c=u.updatePriority(l.getNode(),T):c=u.updateChild(l.getNode(),d,T,p,EA,null)}const h=fA(e,c,l.isFullyInitialized()||ce(n),u.filtersNodes()),f=new Gp(s,h,i);return wA(t,h,n,s,f,a)}function Uf(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const u=new Gp(s,e,i);if(ce(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Co(e,c,!0,t.filter.filtersNodes());else{const h=de(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Co(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Me(n),d=a.getNode().getImmediateChild(h);let p;if(ce(f))p=r;else{const v=u.getCompleteChild(h);v!=null?JI(f)===".priority"&&v.getChild(ZI(f)).isEmpty()?p=v:p=v.updateChild(f,r):p=Ae.EMPTY_NODE}if(d.equals(p))l=e;else{const v=t.filter.updateChild(a.getNode(),h,p,f,u,o);l=Co(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ky(t,e){return t.eventCache.isCompleteForChild(e)}function hU(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const u=rt(n,l);ky(e,de(u))&&(a=Uf(t,a,u,c,s,i,o))}),r.foreach((l,c)=>{const u=rt(n,l);ky(e,de(u))||(a=Uf(t,a,u,c,s,i,o))}),a}function Ny(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function $f(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ce(n)?c=r:c=new De(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),p=Ny(t,d,f);l=fc(t,l,new Fe(h),p,s,i,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const p=e.serverCache.getNode().getImmediateChild(h),v=Ny(t,p,f);l=fc(t,l,new Fe(h),v,s,i,o,a)}}),l}function fU(t,e,n,r,s,i,o){if(hc(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ce(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return fc(t,e,n,l.getNode().getChild(n),s,i,a,o);if(ce(n)){let c=new De(null);return l.getNode().forEachChild(ei,(u,h)=>{c=c.set(new Fe(u),h)}),$f(t,e,n,c,s,i,a,o)}else return e}else{let c=new De(null);return r.foreach((u,h)=>{const f=rt(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),$f(t,e,n,c,s,i,a,o)}}function dU(t,e,n,r,s){const i=e.serverCache,o=fA(e,i.getNode(),i.isFullyInitialized()||ce(n),i.isFiltered());return wA(t,o,n,r,EA,s)}function pU(t,e,n,r,s,i){let o;if(hc(r,n)!=null)return e;{const a=new Gp(r,e,s),l=e.eventCache.getNode();let c;if(ce(n)||de(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ff(r,ys(e));else{const h=e.serverCache.getNode();F(h instanceof Ae,"serverChildren would be complete if leaf node"),u=_A(r,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=de(n);let h=zp(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Me(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Ae.EMPTY_NODE,Me(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ff(r,ys(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||hc(r,ke())!=null,Co(e,c,o,t.filter.filtersNodes())}}function gU(t,e){const n=ys(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(de(e)).isEmpty())?n.getChild(e):null}function Oy(t,e,n,r){e.type===kn.MERGE&&e.source.queryId!==null&&(F(ys(t.viewCache_),"We should always have a full cache before handling merges"),F(Mf(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=cU(t.processor_,s,e,n,r);return lU(t.processor_,i.viewCache),F(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,mU(t,i.changes,i.viewCache.eventCache.getNode(),null)}function mU(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return j2(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dy;function _U(t){F(!Dy,"__referenceConstructor has already been defined"),Dy=t}function Qp(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return F(i!=null,"SyncTree gave us an op for an invalid query."),Oy(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Oy(o,e,n,r));return i}}function Yp(t,e){let n=null;for(const r of t.views.values())n=n||gU(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xy;function yU(t){F(!xy,"__referenceConstructor has already been defined"),xy=t}class My{constructor(e){this.listenProvider_=e,this.syncPointTree_=new De(null),this.pendingWriteTree_=sU(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vU(t,e,n,r,s){return z2(t.pendingWriteTree_,e,n,r,s),s?vu(t,new _s(lA(),e,n)):[]}function $s(t,e,n=!1){const r=G2(t.pendingWriteTree_,e);if(Q2(t.pendingWriteTree_,e)){let i=new De(null);return r.snap!=null?i=i.set(ke(),!0):rn(r.children,o=>{i=i.set(new Fe(o),!0)}),vu(t,new uc(r.path,i,n))}else return[]}function yu(t,e,n){return vu(t,new _s(cA(),e,n))}function EU(t,e,n){const r=De.fromObject(n);return vu(t,new ea(cA(),e,r))}function wU(t,e,n,r){const s=CA(t,r);if(s!=null){const i=RA(s),o=i.path,a=i.queryId,l=Zt(o,e),c=new _s(uA(a),l,n);return bA(t,o,c)}else return[]}function TU(t,e,n,r){const s=CA(t,r);if(s){const i=RA(s),o=i.path,a=i.queryId,l=Zt(o,e),c=De.fromObject(n),u=new ea(uA(a),l,c);return bA(t,o,u)}else return[]}function TA(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Zt(o,e),c=Yp(a,l);if(c)return c});return mA(s,e,i,n,!0)}function vu(t,e){return IA(e,t.syncPointTree_,null,pA(t.pendingWriteTree_,ke()))}function IA(t,e,n,r){if(ce(t.path))return AA(t,e,n,r);{const s=e.get(ke());n==null&&s!=null&&(n=Yp(s,ke()));let i=[];const o=de(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=yA(r,o);i=i.concat(IA(a,l,c,u))}return s&&(i=i.concat(Qp(s,t,r,n))),i}}function AA(t,e,n,r){const s=e.get(ke());n==null&&s!=null&&(n=Yp(s,ke()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=yA(r,o),u=t.operationForChild(o);u&&(i=i.concat(AA(u,a,l,c)))}),s&&(i=i.concat(Qp(s,t,r,n))),i}function CA(t,e){return t.tagToQueryMap.get(e)}function RA(t){const e=t.indexOf("$");return F(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Fe(t.substr(0,e))}}function bA(t,e,n){const r=t.syncPointTree_.get(e);F(r,"Missing sync point for query tag that we're tracking");const s=pA(t.pendingWriteTree_,e);return Qp(r,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Jp(n)}node(){return this.node_}}class Xp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=rt(this.path_,e);return new Xp(this.syncTree_,n)}node(){return TA(this.syncTree_,this.path_)}}const IU=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ly=function(t,e,n){if(!t||typeof t!="object")return t;if(F(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return AU(t[".sv"],e,n);if(typeof t[".sv"]=="object")return CU(t[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},AU=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+t)}},CU=function(t,e,n){t.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&F(!1,"Unexpected increment value: "+r);const s=e.node();if(F(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},RU=function(t,e,n,r){return Zp(e,new Xp(n,t),r)},bU=function(t,e,n){return Zp(t,new Jp(e),n)};function Zp(t,e,n){const r=t.getPriority().val(),s=Ly(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Ly(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new et(a,wt(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new et(s))),o.forEachChild(It,(a,l)=>{const c=Zp(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function tg(t,e){let n=e instanceof Fe?e:new Fe(e),r=t,s=de(n);for(;s!==null;){const i=ai(r.node.children,s)||{children:{},childCount:0};r=new eg(s,r,i),n=Me(n),s=de(n)}return r}function Vi(t){return t.node.value}function SA(t,e){t.node.value=e,Bf(t)}function PA(t){return t.node.childCount>0}function SU(t){return Vi(t)===void 0&&!PA(t)}function Eu(t,e){rn(t.node.children,(n,r)=>{e(new eg(n,t,r))})}function kA(t,e,n,r){n&&!r&&e(t),Eu(t,s=>{kA(s,e,!0,r)}),n&&r&&e(t)}function PU(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Oa(t){return new Fe(t.parent===null?t.name:Oa(t.parent)+"/"+t.name)}function Bf(t){t.parent!==null&&kU(t.parent,t.name,t)}function kU(t,e,n){const r=SU(n),s=ir(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Bf(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Bf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NU=/[\[\].#$\/\u0000-\u001F\u007F]/,OU=/[\[\].#$\u0000-\u001F\u007F]/,uh=10*1024*1024,NA=function(t){return typeof t=="string"&&t.length!==0&&!NU.test(t)},DU=function(t){return typeof t=="string"&&t.length!==0&&!OU.test(t)},xU=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),DU(t)},OA=function(t,e,n){const r=n instanceof Fe?new d2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+qr(r));if(typeof e=="function")throw new Error(t+"contains a function "+qr(r)+" with contents = "+e.toString());if(NI(e))throw new Error(t+"contains "+e.toString()+" "+qr(r));if(typeof e=="string"&&e.length>uh/3&&Oc(e)>uh)throw new Error(t+"contains a string greater than "+uh+" utf8 bytes "+qr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(rn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!NA(o)))throw new Error(t+" contains an invalid key ("+o+") "+qr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);p2(r,o),OA(t,a,r),g2(r)}),s&&i)throw new Error(t+' contains ".value" child '+qr(r)+" in addition to actual children.")}},MU=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!NA(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!xU(n))throw new Error(AP(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function VU(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!eA(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Is(t,e,n){VU(t,n),FU(t,r=>cn(r,e)||cn(e,r))}function FU(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(UU(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function UU(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();os&&Et("event: "+n.toString()),ka(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $U="repo_interrupt",BU=25;class HU{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new LU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=cc(),this.transactionQueueTree_=new eg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function jU(t,e,n){if(t.stats_=Bp(t.repoInfo_),t.forceRestClient_||VF())t.server_=new lc(t.repoInfo_,(r,s,i,o)=>{Vy(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Fy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ft(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Qn(t.repoInfo_,e,(r,s,i,o)=>{Vy(t,r,s,i,o)},r=>{Fy(t,r)},r=>{qU(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=jF(t.repoInfo_,()=>new H2(t.stats_,t.server_)),t.infoData_=new V2,t.infoSyncTree_=new My({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=yu(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ng(t,"connected",!1),t.serverSyncTree_=new My({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);Is(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function WU(t){const n=t.infoData_.getNode(new Fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function DA(t){return IU({timestamp:WU(t)})}function Vy(t,e,n,r,s){t.dataUpdateCount++;const i=new Fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Ml(n,c=>wt(c));o=TU(t.serverSyncTree_,i,l,s)}else{const l=wt(n);o=wU(t.serverSyncTree_,i,l,s)}else if(r){const l=Ml(n,c=>wt(c));o=EU(t.serverSyncTree_,i,l)}else{const l=wt(n);o=yu(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=sg(t,i)),Is(t.eventQueue_,a,o)}function Fy(t,e){ng(t,"connected",e),e===!1&&zU(t)}function qU(t,e){rn(e,(n,r)=>{ng(t,n,r)})}function ng(t,e,n){const r=new Fe("/.info/"+e),s=wt(n);t.infoData_.updateSnapshot(r,s);const i=yu(t.infoSyncTree_,r,s);Is(t.eventQueue_,r,i)}function KU(t){return t.nextWriteId_++}function zU(t){xA(t,"onDisconnectEvents");const e=DA(t),n=cc();xf(t.onDisconnect_,ke(),(s,i)=>{const o=RU(s,i,t.serverSyncTree_,e);aA(n,s,o)});let r=[];xf(n,ke(),(s,i)=>{r=r.concat(yu(t.serverSyncTree_,s,i));const o=JU(t,s);sg(t,o)}),t.onDisconnect_=cc(),Is(t.eventQueue_,ke(),r)}function GU(t){t.persistentConnection_&&t.persistentConnection_.interrupt($U)}function xA(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Et(n,...e)}function MA(t,e,n){return TA(t.serverSyncTree_,e,n)||Ae.EMPTY_NODE}function rg(t,e=t.transactionQueueTree_){if(e||wu(t,e),Vi(e)){const n=VA(t,e);F(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&QU(t,Oa(e),n)}else PA(e)&&Eu(e,n=>{rg(t,n)})}function QU(t,e,n){const r=n.map(c=>c.currentWriteId),s=MA(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];F(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Zt(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{xA(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat($s(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();wu(t,tg(t.transactionQueueTree_,e)),rg(t,t.transactionQueueTree_),Is(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)ka(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{zt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}sg(t,e)}},o)}function sg(t,e){const n=LA(t,e),r=Oa(n),s=VA(t,n);return YU(t,s,r),r}function YU(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Zt(n,l.path);let u=!1,h;if(F(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat($s(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=BU)u=!0,h="maxretry",s=s.concat($s(t.serverSyncTree_,l.currentWriteId,!0));else{const f=MA(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){OA("transaction failed: Data returned ",d,l.path);let p=wt(d);typeof d=="object"&&d!=null&&ir(d,".priority")||(p=p.updatePriority(f.getPriority()));const T=l.currentWriteId,y=DA(t),m=bU(p,f,y);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=m,l.currentWriteId=KU(t),o.splice(o.indexOf(T),1),s=s.concat(vU(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),s=s.concat($s(t.serverSyncTree_,T,!0))}else u=!0,h="nodata",s=s.concat($s(t.serverSyncTree_,l.currentWriteId,!0))}Is(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}wu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ka(r[a]);rg(t,t.transactionQueueTree_)}function LA(t,e){let n,r=t.transactionQueueTree_;for(n=de(e);n!==null&&Vi(r)===void 0;)r=tg(r,n),e=Me(e),n=de(e);return r}function VA(t,e){const n=[];return FA(t,e,n),n.sort((r,s)=>r.order-s.order),n}function FA(t,e,n){const r=Vi(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Eu(e,s=>{FA(t,s,n)})}function wu(t,e){const n=Vi(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,SA(e,n.length>0?n:void 0)}Eu(e,r=>{wu(t,r)})}function JU(t,e){const n=Oa(LA(t,e)),r=tg(t.transactionQueueTree_,e);return PU(r,s=>{hh(t,s)}),hh(t,r),kA(r,s=>{hh(t,s)}),n}function hh(t,e){const n=Vi(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(F(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(F(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat($s(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?SA(e,void 0):n.length=i+1,Is(t.eventQueue_,Oa(e),s);for(let o=0;o<r.length;o++)ka(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XU(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function ZU(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):zt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Uy=function(t,e){const n=e$(t),r=n.namespace;n.domain==="firebase.com"&&gs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&gs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||PF();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new $F(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Fe(n.pathString)}},e$=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=XU(t.substring(u,h)));const f=ZU(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */class ig{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return ce(this._path)?null:JI(this._path)}get ref(){return new Fi(this._repo,this._path)}get _queryIdentifier(){const e=Ay(this._queryParams),n=Up(e);return n==="{}"?"default":n}get _queryObject(){return Ay(this._queryParams)}isEqual(e){if(e=xt(e),!(e instanceof ig))return!1;const n=this._repo===e._repo,r=eA(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+f2(this._path)}}class Fi extends ig{constructor(e,n){super(e,n,new qp,!1)}get parent(){const e=ZI(this._path);return e===null?null:new Fi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}_U(Fi);yU(Fi);/**
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
 */const t$="FIREBASE_DATABASE_EMULATOR_HOST",Hf={};let n$=!1;function r$(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||gs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Et("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Uy(i,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[t$]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=Uy(i,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Nf(Nf.OWNER):new UF(t.name,t.options,e);MU("Invalid Firebase Database URL",o),ce(o.path)||gs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=i$(a,t,u,new FF(t.name,n));return new o$(h,t)}function s$(t,e){const n=Hf[e];(!n||n[t.key]!==t)&&gs(`Database ${e}(${t.repoInfo_}) has already been deleted.`),GU(t),delete n[t.key]}function i$(t,e,n,r){let s=Hf[e.name];s||(s={},Hf[e.name]=s);let i=s[t.toURLString()];return i&&gs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new HU(t,n$,n,r),s[t.toURLString()]=i,i}class o${constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(jU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fi(this._repo,ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(s$(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gs("Cannot call "+e+" on a deleted database.")}}/**
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
 */function a$(t){AF(Mr),Mn(new gn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return r$(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),qt(oy,ay,t),qt(oy,ay,"esm2017")}Qn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Qn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};a$();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA="firebasestorage.googleapis.com",$A="storageBucket",l$=2*60*1e3,c$=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Vn{constructor(e,n,r=0){super(fh(e),`Firebase Storage: ${n} (${fh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ct.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var at;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(at||(at={}));function fh(t){return"storage/"+t}function BA(){const t="An unknown error occurred, please check the error payload for server response.";return new ct(at.UNKNOWN,t)}function u$(t){return new ct(at.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function h$(t){return new ct(at.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function f$(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ct(at.UNAUTHENTICATED,t)}function d$(){return new ct(at.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function p$(t){return new ct(at.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function g$(){return new ct(at.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function m$(){return new ct(at.CANCELED,"User canceled the upload/download.")}function _$(t){return new ct(at.INVALID_URL,"Invalid URL '"+t+"'.")}function y$(t){return new ct(at.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function v$(){return new ct(at.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+$A+"' property when initializing the app?")}function E$(){return new ct(at.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function jf(t){return new ct(at.INVALID_ARGUMENT,t)}function HA(){return new ct(at.APP_DELETED,"The Firebase app was deleted.")}function w$(t){return new ct(at.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ji(t){throw new ct(at.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Wt.makeFromUrl(e,n)}catch{return new Wt(e,"")}if(r.path==="")return r;throw y$(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),p={bucket:1,path:3},v=n===UA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",y=new RegExp(`^https?://${v}/${s}/${T}`,"i"),I=[{regex:a,indices:l,postModify:i},{regex:d,indices:p,postModify:c},{regex:y,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<I.length;E++){const R=I[E],D=R.regex.exec(e);if(D){const M=D[R.indices.bucket];let S=D[R.indices.path];S||(S=""),r=new Wt(M,S),R.postModify(r);break}}if(r==null)throw _$(e);return r}}class T${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I$(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...T){c||(c=!0,e.apply(null,T))}function h(T){s=setTimeout(()=>{s=null,t(d,l())},T)}function f(){i&&clearTimeout(i)}function d(T,...y){if(c){f();return}if(T){f(),u.call(null,T,...y);return}if(l()||o){f(),u.call(null,T,...y);return}r<64&&(r*=2);let I;a===1?(a=2,I=0):I=(r+Math.random())*1e3,h(I)}let p=!1;function v(T){p||(p=!0,f(),!c&&(s!==null?(T||(a=2),clearTimeout(s),h(0)):T||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function A$(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C$(t){return t!==void 0}function R$(t){return typeof t=="object"&&!Array.isArray(t)}function jA(t){return typeof t=="string"||t instanceof String}function $y(t,e,n,r){if(r<e)throw jf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw jf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function qA(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var as;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(as||(as={}));/**
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
 */function b$(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S${constructor(e,n,r,s,i,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new il(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===as.NO_ERROR,l=i.getStatus();if(!a||b$(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===as.ABORT;r(!1,new il(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new il(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());C$(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=BA();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?HA():m$();o(l)}else{const l=g$();o(l)}};this.canceled_?n(!1,new il(!1,null,!0)):this.backoffId_=I$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&A$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class il{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function P$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function k$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function N$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function O$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function D$(t,e,n,r,s,i,o=!0){const a=qA(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return N$(c,e),P$(c,n),k$(c,i),O$(c,r),new S$(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(t){let e;try{e=JSON.parse(t)}catch{return null}return R$(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function M$(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function zA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L$(t,e){return e}class Pt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||L$}}let ol=null;function V$(t){return!jA(t)||t.length<2?t:zA(t)}function F$(){if(ol)return ol;const t=[];t.push(new Pt("bucket")),t.push(new Pt("generation")),t.push(new Pt("metageneration")),t.push(new Pt("name","fullPath",!0));function e(i,o){return V$(o)}const n=new Pt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Pt("size");return s.xform=r,t.push(s),t.push(new Pt("timeCreated")),t.push(new Pt("updated")),t.push(new Pt("md5Hash",null,!0)),t.push(new Pt("cacheControl",null,!0)),t.push(new Pt("contentDisposition",null,!0)),t.push(new Pt("contentEncoding",null,!0)),t.push(new Pt("contentLanguage",null,!0)),t.push(new Pt("contentType",null,!0)),t.push(new Pt("metadata","customMetadata",!0)),ol=t,ol}function U$(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Wt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function $$(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return U$(r,t),r}function B$(t,e,n){const r=KA(e);return r===null?null:$$(t,r,n)}function H$(t,e,n,r){const s=KA(e);if(s===null||!jA(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),d=WA(f,n,r),p=qA({alt:"media",token:c});return d+p})[0]}class j${constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W$(t){if(!t)throw BA()}function q$(t,e){function n(r,s){const i=B$(t,s,e);return W$(i!==null),H$(i,s,t.host,t._protocol)}return n}function K$(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=d$():s=f$():n.getStatus()===402?s=h$(t.bucket):n.getStatus()===403?s=p$(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function z$(t){const e=K$(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=u$(t.path)),i.serverResponse=s.serverResponse,i}return n}function G$(t,e,n){const r=e.fullServerUrl(),s=WA(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new j$(s,i,q$(t,n),o);return a.errorHandler=z$(e),a}class Q${constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=as.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=as.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=as.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Ji("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ji("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ji("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ji("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ji("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Y$ extends Q${initXhr(){this.xhr_.responseType="text"}}function J$(){return new Y$}/**
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
 */class vs{constructor(e,n){this._service=e,n instanceof Wt?this._location=n:this._location=Wt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new vs(e,n)}get root(){const e=new Wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return zA(this._location.path)}get storage(){return this._service}get parent(){const e=x$(this._location.path);if(e===null)return null;const n=new Wt(this._location.bucket,e);return new vs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw w$(e)}}function X$(t){t._throwIfRoot("getDownloadURL");const e=G$(t.storage,t._location,F$());return t.storage.makeRequestWithTokens(e,J$).then(n=>{if(n===null)throw E$();return n})}function Z$(t,e){const n=M$(t._location.path,e),r=new Wt(t._location.bucket,n);return new vs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eB(t){return/^[A-Za-z]+:\/\//.test(t)}function tB(t,e){return new vs(t,e)}function GA(t,e){if(t instanceof og){const n=t;if(n._bucket==null)throw v$();const r=new vs(n,n._bucket);return e!=null?GA(r,e):r}else return e!==void 0?Z$(t,e):t}function nB(t,e){if(e&&eB(e)){if(t instanceof og)return tB(t,e);throw jf("To use ref(service, url), the first argument must be a Storage instance.")}else return GA(t,e)}function By(t,e){const n=e==null?void 0:e[$A];return n==null?null:Wt.makeFromBucketSpec(n,t)}function rB(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:nw(s,t.app.options.projectId))}class og{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=UA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l$,this._maxUploadRetryTime=c$,this._requests=new Set,s!=null?this._bucket=Wt.makeFromBucketSpec(s,this._host):this._bucket=By(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Wt.makeFromBucketSpec(this._url,e):this._bucket=By(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$y("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$y("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new T$(HA());{const o=D$(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Hy="@firebase/storage",jy="0.11.2";/**
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
 */const QA="storage";function xH(t){return t=xt(t),X$(t)}function MH(t,e){return t=xt(t),nB(t,e)}function sB(t=xc(),e){t=xt(t);const r=Dc(t,QA).getImmediate({identifier:e}),s=ZE("storage");return s&&iB(r,...s),r}function iB(t,e,n,r={}){rB(t,e,n,r)}function oB(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new og(n,r,s,e,Mr)}function aB(){Mn(new gn(QA,oB,"PUBLIC").setMultipleInstances(!0)),qt(Hy,jy,""),qt(Hy,jy,"esm2017")}aB();const dh=new WeakMap;function lB(t,e){return dh.has(e)||dh.set(e,t||{f:{},r:{},s:{},u:{}}),dh.get(e)}function LH(t){return tD(Fp(t))}function cB(t){return(e,n)=>{const r=EF(e,n).run(()=>Je(t));wF.set(e,r),IF(r,e)}}function VH(t){return sB(Fp(t))}function uB(t,{firebaseApp:e,modules:n=[]}){t.provide(bI,e);for(const r of n)r(e,t)}const hB=Mt(t=>{const e=t.$firebaseApp;cB(t.payload.vuefireUser)(e,t.vueApp)}),fB=Mt(t=>{const e=t.$firebaseApp,n=AI(e);dI(n,ph,()=>{ph(n.currentUser)}),Mp(n,ph)});async function ph(t){const e=await(t==null?void 0:t.getIdToken(!0));await $fetch("/api/__session",{method:"POST",body:{token:e}})}const dB=Mt(t=>{var n;const e=t.$firebaseApp;t.vueApp.use(uB,{firebaseApp:e}),(n=t.payload)!=null&&n.vuefire&&lB(t.payload.vuefire,e)}),un=typeof window<"u",FH=un&&"IntersectionObserver"in window,pB=un&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function Wy(t,e,n){gB(t,e),e.set(t,n)}function gB(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function mB(t,e,n){var r=YA(t,e,"set");return _B(t,r,n),n}function _B(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}function Br(t,e){var n=YA(t,e,"get");return yB(t,n)}function YA(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function yB(t,e){return e.get?e.get.call(t):e.value}function JA(t,e,n){const r=e.length-1;if(r<0)return t===void 0?n:t;for(let s=0;s<r;s++){if(t==null)return n;t=t[e[s]]}return t==null||t[e[r]]===void 0?n:t[e[r]]}function vB(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(r=>vB(t[r],e[r]))}function Wf(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),JA(t,e.split("."),n))}function UH(t,e,n){if(e==null)return t===void 0?n:t;if(t!==Object(t)){if(typeof e!="function")return n;const s=e(t,n);return typeof s>"u"?n:s}if(typeof e=="string")return Wf(t,e,n);if(Array.isArray(e))return JA(t,e,n);if(typeof e!="function")return n;const r=e(t,n);return typeof r>"u"?n:r}function XA(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,r)=>e+r)}function $H(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function qy(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function BH(t){return t&&"$el"in t?t.$el:t}const HH=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function gh(t,e){return e.every(n=>t.hasOwnProperty(n))}function EB(t,e,n){const r=Object.create(null),s=Object.create(null);for(const i in t)e.some(o=>o instanceof RegExp?o.test(i):o===i)&&!(n!=null&&n.some(o=>o===i))?r[i]=t[i]:s[i]=t[i];return[r,s]}function jH(t){return t==null?[]:Array.isArray(t)?t:[t]}function wB(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function Ky(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function TB(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let r=0;for(;r<t.length;)n.push(t.substr(r,e)),r+=e;return n}function en(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const s in t)r[s]=t[s];for(const s in e){const i=t[s],o=e[s];if(qy(i)&&qy(o)){r[s]=en(i,o,n);continue}if(Array.isArray(i)&&Array.isArray(o)&&n){r[s]=n(i,o);continue}r[s]=o}return r}function IB(t){return t.map(e=>e.type===yt?IB(e.children):e).flat()}function ls(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(ls.cache.has(t))return ls.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return ls.cache.set(t,e),e}ls.cache=new Map;function mh(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>mh(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>mh(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return mh(t,e.component.subTree).flat(1)}return[]}var al=new WeakMap,ks=new WeakMap;class WH{constructor(e){Wy(this,al,{writable:!0,value:[]}),Wy(this,ks,{writable:!0,value:0}),this.size=e}push(e){Br(this,al)[Br(this,ks)]=e,mB(this,ks,(Br(this,ks)+1)%this.size)}values(){return Br(this,al).slice(Br(this,ks)).concat(Br(this,al).slice(0,Br(this,ks)))}}function qH(t){const e=nn({}),n=be(t);return oa(()=>{for(const r in n.value)e[r]=n.value[r]},{flush:"sync"}),Bv(e)}function KH(t,e){return t.includes(e)}const zH=()=>[Function,Array];function GH(t,e){return e="on"+sa(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function AB(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(r=>`${r}${e?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...t.querySelectorAll(n)]}function CB(t,e,n){let r,s=t.indexOf(document.activeElement);const i=e==="next"?1:-1;do s+=i,r=t[s];while((!r||r.offsetParent==null||!((n==null?void 0:n(r))??!0))&&s<t.length&&s>=0);return r}function RB(t,e){var r,s,i,o;const n=AB(t);if(!e)(t===document.activeElement||!t.contains(document.activeElement))&&((r=n[0])==null||r.focus());else if(e==="first")(s=n[0])==null||s.focus();else if(e==="last")(i=n.at(-1))==null||i.focus();else if(typeof e=="number")(o=n[e])==null||o.focus();else{const a=CB(n,e);a?a.focus():RB(t,e==="next"?"first":"last")}}const Ns=2.4,zy=.2126729,Gy=.7151522,Qy=.072175,bB=.55,SB=.58,PB=.57,kB=.62,ll=.03,Yy=1.45,NB=5e-4,OB=1.25,DB=1.25,Jy=.078,Xy=12.82051282051282,cl=.06,Zy=.001;function ev(t,e){const n=(t.r/255)**Ns,r=(t.g/255)**Ns,s=(t.b/255)**Ns,i=(e.r/255)**Ns,o=(e.g/255)**Ns,a=(e.b/255)**Ns;let l=n*zy+r*Gy+s*Qy,c=i*zy+o*Gy+a*Qy;if(l<=ll&&(l+=(ll-l)**Yy),c<=ll&&(c+=(ll-c)**Yy),Math.abs(c-l)<NB)return 0;let u;if(c>l){const h=(c**bB-l**SB)*OB;u=h<Zy?0:h<Jy?h-h*Xy*cl:h-cl}else{const h=(c**kB-l**PB)*DB;u=h>-Zy?0:h>-Jy?h-h*Xy*cl:h+cl}return u*100}function QH(t,e){e=Array.isArray(e)?e.slice(0,-1).map(n=>`'${n}'`).join(", ")+` or '${e.at(-1)}'`:`'${e}'`}const dc=.20689655172413793,xB=t=>t>dc**3?Math.cbrt(t):t/(3*dc**2)+4/29,MB=t=>t>dc?t**3:3*dc**2*(t-4/29);function ZA(t){const e=xB,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function eC(t){const e=MB,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const LB=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],VB=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,FB=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],UB=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function tC(t){const e=Array(3),n=VB,r=LB;for(let s=0;s<3;++s)e[s]=Math.round(wB(n(r[s][0]*t[0]+r[s][1]*t[1]+r[s][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function ag(t){let{r:e,g:n,b:r}=t;const s=[0,0,0],i=UB,o=FB;e=i(e/255),n=i(n/255),r=i(r/255);for(let a=0;a<3;++a)s[a]=o[a][0]*e+o[a][1]*n+o[a][2]*r;return s}function YH(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}const tv=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,$B={rgb:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),rgba:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),hsl:(t,e,n,r)=>nv({h:t,s:e,l:n,a:r}),hsla:(t,e,n,r)=>nv({h:t,s:e,l:n,a:r}),hsv:(t,e,n,r)=>ta({h:t,s:e,v:n,a:r}),hsva:(t,e,n,r)=>ta({h:t,s:e,v:n,a:r})};function Gn(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&tv.test(t)){const{groups:e}=t.match(tv),{fn:n,values:r}=e,s=r.split(/,\s*/).map(i=>i.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(i)/100:parseFloat(i));return $B[n](...s)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),HB(e)}else if(typeof t=="object"){if(gh(t,["r","g","b"]))return t;if(gh(t,["h","s","l"]))return ta(nC(t));if(gh(t,["h","s","v"]))return ta(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function ta(t){const{h:e,s:n,v:r,a:s}=t,i=a=>{const l=(a+e/60)%6;return r-r*n*Math.max(Math.min(l,4-l,1),0)},o=[i(5),i(3),i(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:s}}function nv(t){return ta(nC(t))}function nC(t){const{h:e,s:n,l:r,a:s}=t,i=r+n*Math.min(r,1-r),o=i===0?0:2-2*r/i;return{h:e,s:o,v:i,a:s}}function ul(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function BB(t){let{r:e,g:n,b:r,a:s}=t;return`#${[ul(e),ul(n),ul(r),s!==void 0?ul(Math.round(s*255)):""].join("")}`}function HB(t){t=jB(t);let[e,n,r,s]=TB(t,2).map(i=>parseInt(i,16));return s=s===void 0?s:s/255,{r:e,g:n,b:r,a:s}}function jB(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=Ky(Ky(t,6),8,"F")),t}function WB(t,e){const n=ZA(ag(t));return n[0]=n[0]+e*10,tC(eC(n))}function qB(t,e){const n=ZA(ag(t));return n[0]=n[0]-e*10,tC(eC(n))}function KB(t){const e=Gn(t);return ag(e)[1]}function zB(t){const e=Math.abs(ev(Gn(0),Gn(t)));return Math.abs(ev(Gn(16777215),Gn(t)))>Math.min(e,50)?"#fff":"#000"}function lg(t,e){return n=>Object.keys(t).reduce((r,s)=>{const o=typeof t[s]=="object"&&t[s]!=null&&!Array.isArray(t[s])?t[s]:{type:t[s]};return n&&s in n?r[s]={...o,default:n[s]}:r[s]=o,e&&!r[s].source&&(r[s].source=e),r},{})}function Da(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=lg(t.props??{},t.name)();const e=Object.keys(t.props);t.filterProps=function(r){return EB(r,e,["class","style"])},t.props._as=String,t.setup=function(r,s){const i=cg();if(!i.value)return t._setup(r,s);const{props:o,provideSubDefaults:a}=XB(r,r._as??t.name,i),l=t._setup(o,s);return a(),l}}return t}function GB(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?Da:rr)(e)}function Ui(t,e){const n=xr();if(!n)throw new Error(`[Vuetify] ${t} ${e||"must be called from inside a setup function"}`);return n}function JH(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=Ui(t).type;return ls((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let rC=0,El=new WeakMap;function sC(){const t=Ui("getUid");if(El.has(t))return El.get(t);{const e=rC++;return El.set(t,e),e}}sC.reset=()=>{rC=0,El=new WeakMap};function QB(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ui("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}const wi=Symbol.for("vuetify:defaults");function YB(t){return Je(t)}function cg(){const t=Ue(wi);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function XH(t,e){const n=cg(),r=Je(t),s=be(()=>{if(Re(e==null?void 0:e.disabled))return n.value;const o=Re(e==null?void 0:e.scoped),a=Re(e==null?void 0:e.reset),l=Re(e==null?void 0:e.root);if(r.value==null&&!(o||a||l))return n.value;let c=en(r.value,{prev:n.value});if(o)return c;if(a||l){const u=Number(a||1/0);for(let h=0;h<=u&&!(!c||!("prev"in c));h++)c=c.prev;return c&&typeof l=="string"&&l in c&&(c=en(en(c,{prev:c}),c[l])),c}return c.prev?en(c.prev,c):c});return Nn(wi,s),s}function JB(t,e){var n,r;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((r=t.props)==null?void 0:r[ls(e)])<"u"}function XB(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:cg();const r=Ui("useDefaults");if(e=e??r.type.name??r.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const s=be(()=>{var l;return(l=n.value)==null?void 0:l[t._as??e]}),i=new Proxy(t,{get(l,c){var h,f,d,p;const u=Reflect.get(l,c);return c==="class"||c==="style"?[(h=s.value)==null?void 0:h[c],u].filter(v=>v!=null):typeof c=="string"&&!JB(r.vnode,c)?((f=s.value)==null?void 0:f[c])??((p=(d=n.value)==null?void 0:d.global)==null?void 0:p[c])??u:u}}),o=fn();oa(()=>{if(s.value){const l=Object.entries(s.value).filter(c=>{let[u]=c;return u.startsWith(u[0].toUpperCase())});o.value=l.length?Object.fromEntries(l):void 0}else o.value=void 0});function a(){const l=QB(wi,r);Nn(wi,be(()=>o.value?en((l==null?void 0:l.value)??{},o.value):l==null?void 0:l.value))}return{props:i,provideSubDefaults:a}}const ZH=["sm","md","lg","xl","xxl"],qf=Symbol.for("vuetify:display"),rv={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},ZB=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:rv;return en(rv,t)};function sv(t){return un&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function iv(t){return un&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function ov(t){const e=un&&!t?window.navigator.userAgent:"ssr";function n(p){return!!e.match(p)}const r=n(/android/i),s=n(/iphone|ipad|ipod/i),i=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),l=n(/edge/i),c=n(/firefox/i),u=n(/opera/i),h=n(/win/i),f=n(/mac/i),d=n(/linux/i);return{android:r,ios:s,cordova:i,electron:o,chrome:a,edge:l,firefox:c,opera:u,win:h,mac:f,linux:d,touch:pB,ssr:e==="ssr"}}function e4(t,e){const{thresholds:n,mobileBreakpoint:r}=ZB(t),s=fn(iv(e)),i=fn(ov(e)),o=nn({}),a=fn(sv(e));function l(){s.value=iv(),a.value=sv()}function c(){l(),i.value=ov()}return oa(()=>{const u=a.value<n.sm,h=a.value<n.md&&!u,f=a.value<n.lg&&!(h||u),d=a.value<n.xl&&!(f||h||u),p=a.value<n.xxl&&!(d||f||h||u),v=a.value>=n.xxl,T=u?"xs":h?"sm":f?"md":d?"lg":p?"xl":"xxl",y=typeof r=="number"?r:n[r],m=a.value<y;o.xs=u,o.sm=h,o.md=f,o.lg=d,o.xl=p,o.xxl=v,o.smAndUp=!u,o.mdAndUp=!(u||h),o.lgAndUp=!(u||h||f),o.xlAndUp=!(u||h||f||d),o.smAndDown=!(f||d||p||v),o.mdAndDown=!(d||p||v),o.lgAndDown=!(p||v),o.xlAndDown=!v,o.name=T,o.height=s.value,o.width=a.value,o.mobile=m,o.mobileBreakpoint=r,o.platform=i.value,o.thresholds=n}),un&&window.addEventListener("resize",l,{passive:!0}),{...Bv(o),update:c,ssr:!!e}}function ej(){const t=Ue(qf);if(!t)throw new Error("Could not find Vuetify display injection");return t}const t4={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar"},n4={component:t=>$t(oC,{...t,class:"mdi"})},r4=[String,Function,Object,Array],Kf=Symbol.for("vuetify:icons"),Tu=lg({icon:{type:r4},tag:{type:String,required:!0}},"icon"),av=GB()({name:"VComponentIcon",props:Tu(),setup(t,e){let{slots:n}=e;return()=>{const r=t.icon;return ye(t.tag,null,{default:()=>{var s;return[t.icon?ye(r,null,null):(s=n.default)==null?void 0:s.call(n)]}})}}}),iC=Da({name:"VSvgIcon",inheritAttrs:!1,props:Tu(),setup(t,e){let{attrs:n}=e;return()=>ye(t.tag,Td(n,{style:null}),{default:()=>[ye("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(r=>Array.isArray(r)?ye("path",{d:r[0],"fill-opacity":r[1]},null):ye("path",{d:r},null)):ye("path",{d:t.icon},null)])]})}});Tu();const oC=Da({name:"VClassIcon",props:Tu(),setup(t){return()=>ye(t.tag,{class:t.icon},null)}}),s4={svg:{component:iC},class:{component:oC}};function i4(t){return en({defaultSet:"mdi",sets:{...s4,mdi:n4},aliases:{...t4,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"}},t)}const tj=t=>{const e=Ue(Kf);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:be(()=>{var l;const r=Re(t);if(!r)return{component:av};let s=r;if(typeof s=="string"&&(s=s.trim(),s.startsWith("$")&&(s=(l=e.aliases)==null?void 0:l[s.slice(1)])),!s)throw new Error(`Could not find aliased icon "${r}"`);if(Array.isArray(s))return{component:iC,icon:s};if(typeof s!="string")return{component:av,icon:s};const i=Object.keys(e.sets).find(c=>typeof s=="string"&&s.startsWith(`${c}:`)),o=i?s.slice(i.length+1):s;return{component:e.sets[i??e.defaultSet].component,icon:o}})}},o4={badge:"Badge",open:"Open",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{ok:"OK",cancel:"Cancel",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},a4={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1};function l4(t,e){let n;function r(){n=Av(),n.run(()=>e.length?e(()=>{n==null||n.stop(),r()}):e())}dn(t,s=>{s&&!n?r():s||(n==null||n.stop(),n=void 0)},{immediate:!0}),NC(()=>{n==null||n.stop()})}function c4(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:h=>h,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:h=>h;const i=Ui("useProxiedModel"),o=Je(t[e]!==void 0?t[e]:n),a=ls(e),c=be(a!==e?()=>{var h,f,d,p;return t[e],!!(((h=i.vnode.props)!=null&&h.hasOwnProperty(e)||(f=i.vnode.props)!=null&&f.hasOwnProperty(a))&&((d=i.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`)||(p=i.vnode.props)!=null&&p.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var h,f;return t[e],!!((h=i.vnode.props)!=null&&h.hasOwnProperty(e)&&((f=i.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${e}`)))});l4(()=>!c.value,()=>{dn(()=>t[e],h=>{o.value=h})});const u=be({get(){const h=t[e];return r(c.value?h:o.value)},set(h){const f=s(h),d=ue(c.value?t[e]:o.value);d===f||r(d)===h||(o.value=f,i==null||i.emit(`update:${e}`,f))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?t[e]:o.value}),u}const lv="$vuetify.",cv=(t,e)=>t.replace(/\{(\d+)\}/g,(n,r)=>String(e[+r])),aC=(t,e,n)=>function(r){for(var s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];if(!r.startsWith(lv))return cv(r,i);const a=r.replace(lv,""),l=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let u=Wf(l,a,null);return u||(`${r}${t.value}`,u=Wf(c,a,null)),u||(u=r),typeof u!="string"&&(u=r),cv(u,i)};function lC(t,e){return(n,r)=>new Intl.NumberFormat([t.value,e.value],r).format(n)}function _h(t,e,n){const r=c4(t,e,t[e]??n.value);return r.value=t[e]??n.value,dn(n,s=>{t[e]==null&&(r.value=n.value)}),r}function cC(t){return e=>{const n=_h(e,"locale",t.current),r=_h(e,"fallback",t.fallback),s=_h(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:r,messages:s,t:aC(n,r,s),n:lC(n,r),provide:cC({current:n,fallback:r,messages:s})}}}function u4(t){const e=fn((t==null?void 0:t.locale)??"en"),n=fn((t==null?void 0:t.fallback)??"en"),r=Je({en:o4,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:r,t:aC(e,n,r),n:lC(e,n),provide:cC({current:e,fallback:n,messages:r})}}const pc=Symbol.for("vuetify:locale");function h4(t){return t.name!=null}function f4(t){const e=t!=null&&t.adapter&&h4(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:u4(t),n=d4(e,t);return{...e,...n}}function nj(){const t=Ue(pc);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");return t}function d4(t,e){const n=Je((e==null?void 0:e.rtl)??a4),r=be(()=>n.value[t.current.value]??!1);return{isRtl:r,rtl:n,rtlClasses:be(()=>`v-locale--is-${r.value?"rtl":"ltr"}`)}}function rj(){const t=Ue(pc);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const gc=Symbol.for("vuetify:theme"),sj=lg({theme:String},"theme"),Xi={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function p4(){var n,r;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Xi;if(!t)return{...Xi,isDisabled:!0};const e={};for(const[s,i]of Object.entries(t.themes??{})){const o=i.dark||s==="dark"?(n=Xi.themes)==null?void 0:n.dark:(r=Xi.themes)==null?void 0:r.light;e[s]=en(o,i)}return en(Xi,{...t,themes:e})}function g4(t){const e=p4(t),n=Je(e.defaultTheme),r=Je(e.themes),s=be(()=>{const u={};for(const[h,f]of Object.entries(r.value)){const d=u[h]={...f,colors:{...f.colors}};if(e.variations)for(const p of e.variations.colors){const v=d.colors[p];if(v)for(const T of["lighten","darken"]){const y=T==="lighten"?WB:qB;for(const m of XA(e.variations[T],1))d.colors[`${p}-${T}-${m}`]=BB(y(Gn(v),m))}}for(const p of Object.keys(d.colors)){if(/^on-[a-z]/.test(p)||d.colors[`on-${p}`])continue;const v=`on-${p}`,T=Gn(d.colors[p]);d.colors[v]=zB(T)}}return u}),i=be(()=>s.value[n.value]),o=be(()=>{const u=[];i.value.dark&&Hr(u,":root",["color-scheme: dark"]),Hr(u,":root",uv(i.value));for(const[p,v]of Object.entries(s.value))Hr(u,`.v-theme--${p}`,[`color-scheme: ${v.dark?"dark":"normal"}`,...uv(v)]);const h=[],f=[],d=new Set(Object.values(s.value).flatMap(p=>Object.keys(p.colors)));for(const p of d)/^on-[a-z]/.test(p)?Hr(f,`.${p}`,[`color: rgb(var(--v-theme-${p})) !important`]):(Hr(h,`.bg-${p}`,[`--v-theme-overlay-multiplier: var(--v-theme-${p}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${p})) !important`,`color: rgb(var(--v-theme-on-${p})) !important`]),Hr(f,`.text-${p}`,[`color: rgb(var(--v-theme-${p})) !important`]),Hr(f,`.border-${p}`,[`--v-border-color: var(--v-theme-${p})`]));return u.push(...h,...f),u.map((p,v)=>v===0?p:`    ${p}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(u){if(e.isDisabled)return;const h=u._context.provides.usehead;if(h)if(h.push){const f=h.push(a);un&&dn(o,()=>{f.patch(a)})}else un?(h.addHeadObjs(be(a)),oa(()=>h.updateDOM())):h.addHeadObjs(a());else{let d=function(){if(typeof document<"u"&&!f){const p=document.createElement("style");p.type="text/css",p.id="vuetify-theme-stylesheet",e.cspNonce&&p.setAttribute("nonce",e.cspNonce),f=p,document.head.appendChild(f)}f&&(f.innerHTML=o.value)},f=un?document.getElementById("vuetify-theme-stylesheet"):null;un?dn(o,d,{immediate:!0}):d()}}const c=be(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:e.isDisabled,name:n,themes:r,current:i,computedThemes:s,themeClasses:c,styles:o,global:{name:n,current:i}}}function ij(t){Ui("provideTheme");const e=Ue(gc,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=be(()=>t.theme??(e==null?void 0:e.name.value)),r=be(()=>e.isDisabled?void 0:`v-theme--${n.value}`),s={...e,name:n,themeClasses:r};return Nn(gc,s),s}function Hr(t,e,n){t.push(`${e} {
`,...n.map(r=>`  ${r};
`),`}
`)}function uv(t){const e=t.dark?2:1,n=t.dark?1:2,r=[];for(const[s,i]of Object.entries(t.colors)){const o=Gn(i);r.push(`--v-theme-${s}: ${o.r},${o.g},${o.b}`),s.startsWith("on-")||r.push(`--v-theme-${s}-overlay-multiplier: ${KB(i)>.18?e:n}`)}for(const[s,i]of Object.entries(t.variables)){const o=typeof i=="string"&&i.startsWith("#")?Gn(i):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;r.push(`--v-${s}: ${a??i}`)}return r}const zf={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function m4(t,e){const n=[];let r=[];const s=uC(t),i=hC(t),o=s.getDay()-zf[e.slice(-2).toUpperCase()],a=i.getDay()-zf[e.slice(-2).toUpperCase()];for(let l=0;l<o;l++){const c=new Date(s);c.setDate(c.getDate()-(o-l)),r.push(c)}for(let l=1;l<=i.getDate();l++){const c=new Date(t.getFullYear(),t.getMonth(),l);r.push(c),r.length===7&&(n.push(r),r=[])}for(let l=1;l<7-a;l++){const c=new Date(i);c.setDate(c.getDate()+l),r.push(c)}return n.push(r),n}function uC(t){return new Date(t.getFullYear(),t.getMonth(),1)}function hC(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function _4(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const y4=/([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))/;function v4(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(y4.test(t))return _4(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const hv=new Date(2e3,0,2);function E4(t){const e=zf[t.slice(-2).toUpperCase()];return XA(7).map(n=>{const r=new Date(hv);return r.setDate(hv.getDate()+e+n),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(r)})}function w4(t,e,n){const r=new Date(t);let s={};switch(e){case"fullDateWithWeekday":s={weekday:"long",day:"numeric",month:"long",year:"numeric"};break;case"normalDateWithWeekday":s={weekday:"short",day:"numeric",month:"short"};break;case"keyboardDate":s={};break;case"monthAndDate":s={month:"long",day:"numeric"};break;case"monthAndYear":s={month:"long",year:"numeric"};break;case"dayOfMonth":s={day:"numeric"};break;default:s={timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,s).format(r)}function T4(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function I4(t,e){const n=new Date(t);return n.setMonth(n.getMonth()+e),n}function A4(t){return t.getFullYear()}function C4(t){return t.getMonth()}function R4(t){return new Date(t.getFullYear(),0,1)}function b4(t){return new Date(t.getFullYear(),11,31)}function S4(t,e){return Gf(t,e[0])&&k4(t,e[1])}function P4(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function Gf(t,e){return t.getTime()>e.getTime()}function k4(t,e){return t.getTime()<e.getTime()}function fv(t,e){return t.getTime()===e.getTime()}function N4(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function O4(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function D4(t,e,n){const r=new Date(t),s=new Date(e);return n==="month"?r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12:Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24))}function x4(t,e){const n=new Date(t);return n.setFullYear(e),n}class M4{constructor(e){this.locale=e.locale}date(e){return v4(e)}toJsDate(e){return e}addDays(e,n){return T4(e,n)}addMonths(e,n){return I4(e,n)}getWeekArray(e){return m4(e,this.locale)}startOfMonth(e){return uC(e)}endOfMonth(e){return hC(e)}format(e,n){return w4(e,n,this.locale)}isEqual(e,n){return fv(e,n)}isValid(e){return P4(e)}isWithinRange(e,n){return S4(e,n)}isAfter(e,n){return Gf(e,n)}isBefore(e,n){return!Gf(e,n)&&!fv(e,n)}isSameDay(e,n){return N4(e,n)}isSameMonth(e,n){return O4(e,n)}setYear(e,n){return x4(e,n)}getDiff(e,n,r){return D4(e,n,r)}getWeekdays(){return E4(this.locale)}getYear(e){return A4(e)}getMonth(e){return C4(e)}startOfYear(e){return R4(e)}endOfYear(e){return b4(e)}}const dv=Symbol.for("vuetify:date-adapter");function L4(t){return en({adapter:M4,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"nn-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t)}function fC(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,r=en(e,n),{aliases:s={},components:i={},directives:o={}}=r,a=YB(r.defaults),l=e4(r.display,r.ssr),c=g4(r.theme),u=i4(r.icons),h=f4(r.locale),f=L4(r.date);return{install:p=>{for(const v in o)p.directive(v,o[v]);for(const v in i)p.component(v,i[v]);for(const v in s)p.component(v,Da({...s[v],name:v,aliasName:s[v].name}));if(c.install(p),p.provide(wi,a),p.provide(qf,l),p.provide(gc,c),p.provide(Kf,u),p.provide(pc,h),p.provide(dv,f),un&&r.ssr)if(p.$nuxt)p.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:v}=p;p.mount=function(){const T=v(...arguments);return Dr(()=>l.update()),p.mount=v,T}}sC.reset(),p.mixin({computed:{$vuetify(){return nn({defaults:Os.call(this,wi),display:Os.call(this,qf),theme:Os.call(this,gc),icons:Os.call(this,Kf),locale:Os.call(this,pc),date:Os.call(this,dv)})}}})},defaults:a,display:l,theme:c,icons:u,locale:h,date:f}}const V4="3.3.14";fC.version=V4;function Os(t){var r,s;const e=this.$,n=((r=e.parent)==null?void 0:r.provides)??((s=e.vnode.appContext)==null?void 0:s.provides);if(n&&t in n)return n[t]}const F4=JSON.parse('{"ssr":true,"treeshaking":true,"useVuetifyLabs":true}'),U4=Mt(t=>{const e=fC(F4);return t.vueApp.use(e),{provide:{vuetify:e}}}),$4=Mt({name:"nuxt:chunk-reload",setup(t){const e=ws(),n=kc(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:s})=>{r.add(s)}),e.onError((s,i)=>{if(r.has(s)){const a="href"in i&&i.href.startsWith("#")?n.app.baseURL+i.href:la(n.app.baseURL,i.fullPath);Cx({path:a,persistState:!0})}})}}),B4=[Px,kx,$M,jM,WM,qM,zM,GM,QM,XM,hB,fB,dB,U4,$4],H4=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Qf=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&H4(t.route,n));return typeof r=="function"?r(t.route):r},j4=(t,e)=>({default:()=>t?$t(kR,t===!0?{}:t,e):e}),W4=rr({name:"RouteProvider",props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s]});return Nn(Ia,ia(r)),()=>$t(t.vnode,{ref:t.vnodeRef})}}),dC=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?$t(t,e,n):(r=n.default)==null?void 0:r.call(n)}}),q4=rr({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,expose:n}){const r=Be(),s=Je(),i=Ue(Ia,null);n({pageRef:s});const o=Ue(N0,null);let a;const l=r.deferHydration();return()=>$t(K0,{name:t.name,route:t.route,...e},{default:c=>{const u=G4(i,c.route,c.Component),h=i&&i.matched.length===c.route.matched.length;if(!c.Component)return a&&!h?a:void 0;if(a&&o&&!o.isCurrent(c.route))return a;if(u&&i&&(!o||o!=null&&o.isCurrent(i)))return h?a:null;const f=Qf(c,t.pageKey),d=!!(t.transition??c.route.meta.pageTransition??vf),p=d&&z4([t.transition,c.route.meta.pageTransition,vf,{onAfterLeave:()=>{r.callHook("page:transition:finish",c.Component)}}].filter(Boolean));return a=dC(bc,d&&p,j4(t.keepalive??c.route.meta.keepalive??vx,$t(hd,{suspensible:!0,onPending:()=>r.callHook("page:start",c.Component),onResolve:()=>{Dr(()=>r.callHook("page:finish",c.Component).finally(l))}},{default:()=>$t(W4,{key:f,vnode:c.Component,route:c.route,renderKey:f,trackRootNodes:d,vnodeRef:s})}))).default(),a}})}});function K4(t){return Array.isArray(t)?t:t?[t]:[]}function z4(t){const e=t.map(n=>({...n,onAfterLeave:K4(n.onAfterLeave)}));return YD(...e)}function G4(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&Qf({route:e,Component:n})!==Qf({route:t,Component:n})}const Q4=rr({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const n=await Xr[t.name]().then(r=>r.default||r);return()=>$t(n,t.layoutProps,e.slots)}}),Y4=rr({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const n=Be(),r=Ue(Ia),s=r===O0()?DM():r,i=be(()=>Re(t.name)??s.meta.layout??"default"),o=Je();e.expose({layoutRef:o});const a=n.deferHydration();return()=>{const l=i.value&&i.value in Xr,c=s.meta.layoutTransition??yx;return dC(bc,l&&c,{default:()=>$t(hd,{suspensible:!0,onResolve:()=>{Dr(a)}},{default:()=>$t(J4,{layoutProps:Td(e.attrs,{ref:o}),key:i.value,name:i.value,shouldProvide:!t.name,hasTransition:!!c},e.slots)})}).default()}}}),J4=rr({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&Nn(N0,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in Xr)?(s=(r=e.slots).default)==null?void 0:s.call(r):$t(Q4,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),X4=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Z4={};function eH(t,e){const n=q4,r=Y4;return Cn(),jn(r,null,{default:cd(()=>[ye(n)]),_:1})}const tH=X4(Z4,[["render",eH]]),nH={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;(n.stack||"").split(`
`).splice(1).map(h=>({text:h.replace("webpack:/","").replace(".vue",".js").trim(),internal:h.includes("node_modules")&&!h.includes(".cache")||h.includes("internal")||h.includes("new Promise")})).map(h=>`<span class="stack${h.internal?" internal":""}">${h.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,u=s?Cg(()=>mt(()=>import("./error-404.f32cac99.js"),["./error-404.f32cac99.js","./error-404.7fc72018.css"],import.meta.url).then(h=>h.default||h)):Cg(()=>mt(()=>import("./error-500.c6246c43.js"),["./error-500.c6246c43.js","./error-500.c5df6088.css"],import.meta.url).then(h=>h.default||h));return(h,f)=>(Cn(),jn(Re(u),RC(TE({statusCode:Re(r),statusMessage:Re(i),description:Re(o),stack:Re(a)})),null,16))}},rH=nH,sH={__name:"nuxt-root",setup(t){const e=()=>null,n=Be(),r=n.deferHydration(),s=!1;Nn(Ia,O0()),n.hooks.callHookWith(a=>a.map(l=>l()),"vue:setup");const i=hu();iE((a,l,c)=>{if(n.hooks.callHook("vue:error",a,l,c).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u)),ox(a)&&(a.fatal||a.unhandled))return n.runWithContext(()=>Vs(a)),!1});const o=!1;return(a,l)=>(Cn(),jn(hd,{onResolve:Re(r)},{default:cd(()=>[Re(i)?(Cn(),jn(Re(rH),{key:0,error:Re(i)},null,8,["error"])):Re(o)?(Cn(),jn(Re(e),{key:1,context:Re(o)},null,8,["context"])):Re(s)?(Cn(),jn(FR(Re(s)),{key:2})):(Cn(),jn(Re(tH),{key:3}))]),_:1},8,["onResolve"]))}},pv=sH;globalThis.$fetch||(globalThis.$fetch=FS.create({baseURL:$S()}));let gv;{let t;gv=async function(){var i,o;if(t)return t;const r=!!((i=window.__NUXT__)!=null&&i.serverRendered||((o=document.getElementById("__NUXT_DATA__"))==null?void 0:o.dataset.ssr)==="true")?Wb(pv):jb(pv),s=ZS({vueApp:r});try{await tP(s,B4)}catch(a){await s.callHook("app:error",a),s.payload.error=s.payload.error||a}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(wx),await s.hooks.callHook("app:mounted",r),await Dr()}catch(a){await s.callHook("app:error",a),s.payload.error=s.payload.error||a}return r},t=gv().catch(e=>{console.error("Error while mounting app:",e)})}export{sE as $,lg as A,GB as B,Hv as C,XH as D,Td as E,yt as F,DM as G,DH as H,r4 as I,LH as J,Re as K,jn as L,VH as M,MH as N,xH as O,AH as P,NH as Q,RH as R,PH as S,SH as T,CH as U,kH as V,gH as W,hH as X,bH as Y,OR as Z,X4 as _,ws as a,HH as a$,dn as a0,Rp as a1,xr as a2,Yg as a3,la as a4,YD as a5,vH as a6,iS as a7,vB as a8,sj as a9,wB as aA,l4 as aB,oa as aC,Dr as aD,ue as aE,Da as aF,QH as aG,RB as aH,UH as aI,EB as aJ,WH as aK,ej as aL,_H as aM,fH as aN,sa as aO,xn as aP,Ye as aQ,qH as aR,YH as aS,zB as aT,tj as aU,IB as aV,ni as aW,Bv as aX,FR as aY,GH as aZ,qy as a_,ij as aa,zH as ab,nj as ac,c4 as ad,lH as ae,uH as af,yH as ag,KH as ah,un as ai,BH as aj,Mv as ak,Ue as al,sC as am,Ui as an,Nn as ao,fn as ap,nE as aq,tE as ar,nn as as,$H as at,mh as au,FH as av,rj as aw,bc as ax,JH as ay,pH as az,Ac as b,mH as b0,jH as b1,ZH as b2,be as c,rr as d,$t as e,cH as f,lS as g,Ri as h,$E as i,GD as j,Cn as k,dH as l,wE as m,OH as n,gd as o,Pc as p,ye as q,Je as r,cd as s,iH as t,Be as u,IE as v,Oh as w,oH as x,aH as y,kc as z};
