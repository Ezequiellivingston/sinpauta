import{r as x,P as N,Q as O,R as j,S as w,T as E,u as M,L as H,U as R,_ as T,f,k as b,B as P,s as v,q as h,m as p,t as D,v as k,O as B,l as V}from"./entry.4438ef55.js";const z=()=>null;function K(...s){const g=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(g);let[t,u,n={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof u!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");n.server=n.server??!0,n.default=n.default??z,n.lazy=n.lazy??!1,n.immediate=n.immediate??!0;const e=M(),_=()=>e.isHydrating?e.payload.data[t]:e.static.data[t],m=()=>_()!==void 0;(!e._asyncData[t]||!n.immediate)&&(e._asyncData[t]={data:x(_()??n.default()),pending:x(!m()),error:N(e.payload._errors,t),status:x("idle")});const a={...e._asyncData[t]};a.refresh=a.execute=(o={})=>{if(e._asyncDataPromises[t]){if(o.dedupe===!1)return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if((o._initial||e.isHydrating&&o._initial!==!1)&&m())return _();a.pending.value=!0,a.status.value="pending";const c=new Promise((r,i)=>{try{r(u(e))}catch(C){i(C)}}).then(r=>{if(c.cancelled)return e._asyncDataPromises[t];let i=r;n.transform&&(i=n.transform(r)),n.pick&&(i=S(i,n.pick)),a.data.value=i,a.error.value=null,a.status.value="success"}).catch(r=>{if(c.cancelled)return e._asyncDataPromises[t];a.error.value=r,a.data.value=H(n.default()),a.status.value="error"}).finally(()=>{c.cancelled||(a.pending.value=!1,e.payload.data[t]=a.data.value,a.error.value&&(e.payload._errors[t]=R(a.error.value)),delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=c,e._asyncDataPromises[t]};const l=()=>a.refresh({_initial:!0}),d=n.server!==!1&&e.payload.serverRendered;{const o=O();if(o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const r=o._nuxtOnBeforeMountCbs;o&&(j(()=>{r.forEach(i=>{i()}),r.splice(0,r.length)}),w(()=>r.splice(0,r.length)))}d&&e.isHydrating&&m()?(a.pending.value=!1,a.status.value=a.error.value?"error":"success"):o&&(e.payload.serverRendered&&e.isHydrating||n.lazy)&&n.immediate?o._nuxtOnBeforeMountCbs.push(l):n.immediate&&l(),n.watch&&E(n.watch,()=>a.refresh());const c=e.hook("app:data:refresh",r=>{if(!r||r.includes(t))return a.refresh()});o&&w(c)}const y=Promise.resolve(e._asyncDataPromises[t]).then(()=>a);return Object.assign(y,a),y}function S(s,g){const t={};for(const u of g)t[u]=s[u];return t}const A=["href"],I={class:"d-flex justify-space-between align-center"},U={key:1},$=["href"],q={__name:"Noticia",props:{noticia:Object},setup(s){return(g,t)=>{const u=f("v-chip"),n=f("v-card-text"),e=f("v-col"),_=f("v-img"),m=f("v-divider"),a=f("v-row");return b(),P(a,null,{default:v(()=>[h(e,{cols:"12",md:"6"},{default:v(()=>[h(n,{class:"noticia_desarrollo d-flex flex-column justify-space-between"},{default:v(()=>{var l,d,y,o,c,r;return[p("div",null,[p("a",{href:`/${(l=s.noticia)==null?void 0:l.id}`},[p("h2",null,D((d=s.noticia)==null?void 0:d.titulo),1)],8,A),k(" "+D((y=s.noticia)==null?void 0:y.desarrollo.substring(0,100))+"... ",1)]),p("div",I,[(o=s.noticia)!=null&&o.tipo?(b(),P(u,{key:0,class:"ma-2",label:""},{default:v(()=>{var i;return[k(D((i=s.noticia)==null?void 0:i.tipo),1)]}),_:1})):B("",!0),(c=s.noticia)!=null&&c.fecha?(b(),V("span",U,D((r=s.noticia)==null?void 0:r.fecha),1)):B("",!0)])]}),_:1})]),_:1}),h(e,{cols:"12",md:"6"},{default:v(()=>{var l,d;return[p("a",{href:`/${(l=s.noticia)==null?void 0:l.id}`},[h(_,{src:(d=s.noticia)==null?void 0:d.url,class:"noticias-container__img mt-2 mb-2"},null,8,["src"])],8,$)]}),_:1}),h(m)]),_:1})}}},L=T(q,[["__scopeId","data-v-7a9aa0c9"]]);export{L as N,K as u};
