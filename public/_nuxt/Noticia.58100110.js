import{r as b,P as N,Q as O,R as j,S as w,T as E,u as M,L as H,U as R,_ as T,f as _,k,B as P,s as v,q as p,m as h,t as x,v as C,O as B,l as V}from"./entry.5d06e4c6.js";const $=()=>null;function q(...s){const d=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(d);let[t,c,n={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof c!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");n.server=n.server??!0,n.default=n.default??$,n.lazy=n.lazy??!1,n.immediate=n.immediate??!0;const e=M(),f=()=>e.isHydrating?e.payload.data[t]:e.static.data[t],y=()=>f()!==void 0;(!e._asyncData[t]||!n.immediate)&&(e._asyncData[t]={data:b(f()??n.default()),pending:b(!y()),error:N(e.payload._errors,t),status:b("idle")});const a={...e._asyncData[t]};a.refresh=a.execute=(o={})=>{if(e._asyncDataPromises[t]){if(o.dedupe===!1)return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if((o._initial||e.isHydrating&&o._initial!==!1)&&y())return f();a.pending.value=!0,a.status.value="pending";const l=new Promise((i,r)=>{try{i(c(e))}catch(D){r(D)}}).then(i=>{if(l.cancelled)return e._asyncDataPromises[t];let r=i;n.transform&&(r=n.transform(i)),n.pick&&(r=z(r,n.pick)),a.data.value=r,a.error.value=null,a.status.value="success"}).catch(i=>{if(l.cancelled)return e._asyncDataPromises[t];a.error.value=i,a.data.value=H(n.default()),a.status.value="error"}).finally(()=>{l.cancelled||(a.pending.value=!1,e.payload.data[t]=a.data.value,a.error.value&&(e.payload._errors[t]=R(a.error.value)),delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=l,e._asyncDataPromises[t]};const g=()=>a.refresh({_initial:!0}),u=n.server!==!1&&e.payload.serverRendered;{const o=O();if(o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const i=o._nuxtOnBeforeMountCbs;o&&(j(()=>{i.forEach(r=>{r()}),i.splice(0,i.length)}),w(()=>i.splice(0,i.length)))}u&&e.isHydrating&&y()?(a.pending.value=!1,a.status.value=a.error.value?"error":"success"):o&&(e.payload.serverRendered&&e.isHydrating||n.lazy)&&n.immediate?o._nuxtOnBeforeMountCbs.push(g):n.immediate&&g(),n.watch&&E(n.watch,()=>a.refresh());const l=e.hook("app:data:refresh",i=>{if(!i||i.includes(t))return a.refresh()});o&&w(l)}const m=Promise.resolve(e._asyncDataPromises[t]).then(()=>a);return Object.assign(m,a),m}function z(s,d){const t={};for(const c of d)t[c]=s[c];return t}const S={class:"d-flex justify-space-between align-center"},A={key:1},I={__name:"Noticia",props:{noticia:Object},setup(s){function d(t){location.href=t}return(t,c)=>{const n=_("v-chip"),e=_("v-card-text"),f=_("v-col"),y=_("v-img"),a=_("v-divider"),g=_("v-row");return k(),P(g,null,{default:v(()=>[p(f,{cols:"12",md:"6"},{default:v(()=>[p(e,{class:"noticia_desarrollo d-flex flex-column justify-space-between"},{default:v(()=>{var u,m,o,l,i;return[h("div",null,[h("a",{onClick:c[0]||(c[0]=r=>{var D;return d(`/${(D=s.noticia)==null?void 0:D.id}`)})},[h("h2",null,x((u=s.noticia)==null?void 0:u.titulo),1)]),C(" "+x((m=s.noticia)==null?void 0:m.desarrollo.substring(0,100))+"... ",1)]),h("div",S,[(o=s.noticia)!=null&&o.tipo?(k(),P(n,{key:0,class:"ma-2",label:""},{default:v(()=>{var r;return[C(x((r=s.noticia)==null?void 0:r.tipo),1)]}),_:1})):B("",!0),(l=s.noticia)!=null&&l.fecha?(k(),V("span",A,x((i=s.noticia)==null?void 0:i.fecha),1)):B("",!0)])]}),_:1})]),_:1}),p(f,{cols:"12",md:"6"},{default:v(()=>{var u;return[h("a",{onClick:c[1]||(c[1]=m=>{var o;return d(`/${(o=s.noticia)==null?void 0:o.id}`)})},[p(y,{src:(u=s.noticia)==null?void 0:u.url,class:"noticias-container__img mt-2 mb-2"},null,8,["src"])])]}),_:1}),p(a)]),_:1})}}},F=T(I,[["__scopeId","data-v-fe846eb8"]]);export{F as N,q as u};
