import{r as D,P as E,Q as j,R as M,S as w,T as A,u as H,L as I,U as T,_ as P,o as $,k as x,l as O,f as _,B,s as v,q as h,m as b,t as g,v as k,O as C}from"./entry.00dc2971.js";const R=()=>null;function Q(...s){const u=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(u);let[t,o,n={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof o!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");n.server=n.server??!0,n.default=n.default??R,n.lazy=n.lazy??!1,n.immediate=n.immediate??!0;const e=H(),m=()=>e.isHydrating?e.payload.data[t]:e.static.data[t],p=()=>m()!==void 0;(!e._asyncData[t]||!n.immediate)&&(e._asyncData[t]={data:D(m()??n.default()),pending:D(!p()),error:E(e.payload._errors,t),status:D("idle")});const a={...e._asyncData[t]};a.refresh=a.execute=(c={})=>{if(e._asyncDataPromises[t]){if(c.dedupe===!1)return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if((c._initial||e.isHydrating&&c._initial!==!1)&&p())return m();a.pending.value=!0,a.status.value="pending";const d=new Promise((r,i)=>{try{r(o(e))}catch(N){i(N)}}).then(r=>{if(d.cancelled)return e._asyncDataPromises[t];let i=r;n.transform&&(i=n.transform(r)),n.pick&&(i=S(i,n.pick)),a.data.value=i,a.error.value=null,a.status.value="success"}).catch(r=>{if(d.cancelled)return e._asyncDataPromises[t];a.error.value=r,a.data.value=I(n.default()),a.status.value="error"}).finally(()=>{d.cancelled||(a.pending.value=!1,e.payload.data[t]=a.data.value,a.error.value&&(e.payload._errors[t]=T(a.error.value)),delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=d,e._asyncDataPromises[t]};const l=()=>a.refresh({_initial:!0}),f=n.server!==!1&&e.payload.serverRendered;{const c=j();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const r=c._nuxtOnBeforeMountCbs;c&&(M(()=>{r.forEach(i=>{i()}),r.splice(0,r.length)}),w(()=>r.splice(0,r.length)))}f&&e.isHydrating&&p()?(a.pending.value=!1,a.status.value=a.error.value?"error":"success"):c&&(e.payload.serverRendered&&e.isHydrating||n.lazy)&&n.immediate?c._nuxtOnBeforeMountCbs.push(l):n.immediate&&l(),n.watch&&A(n.watch,()=>a.refresh());const d=e.hook("app:data:refresh",r=>{if(!r||r.includes(t))return a.refresh()});c&&w(d)}const y=Promise.resolve(e._asyncDataPromises[t]).then(()=>a);return Object.assign(y,a),y}function S(s,u){const t={};for(const o of u)t[o]=s[o];return t}const V={id:"adsterra-banner-cube"},z={__name:"AddBannerCube",setup(s){return $(async()=>{let u={key:"6fbbfccf35d6f51c2014de29951d09ad",format:"iframe",height:250,width:300,params:{}};const t=document.createElement("script"),o=document.createElement("script");o.type="text/javascript",o.src="https://www.profitablecreativeformat.com/6fbbfccf35d6f51c2014de29951d09ad/invoke.js",t.innerHTML=`atOptions = ${JSON.stringify(u)}`,document.getElementById("adsterra-banner-cube").append(t),document.getElementById("adsterra-banner-cube").append(o)}),(u,t)=>(x(),O("div",V))}},G=P(z,[["__scopeId","data-v-267a442a"]]);const L=["href"],U={class:"d-flex justify-space-between align-center"},q={key:1},F=["href"],J={__name:"Noticia",props:{noticia:Object},setup(s){return(u,t)=>{const o=_("v-chip"),n=_("v-card-text"),e=_("v-col"),m=_("v-img"),p=_("v-divider"),a=_("v-row");return x(),B(a,null,{default:v(()=>[h(e,{cols:"12",md:"6"},{default:v(()=>[h(n,{class:"noticia_desarrollo d-flex flex-column justify-space-between"},{default:v(()=>{var l,f,y,c,d,r;return[b("div",null,[b("a",{href:`/${(l=s.noticia)==null?void 0:l.id}`},[b("h2",null,g((f=s.noticia)==null?void 0:f.titulo),1)],8,L),k(" "+g((y=s.noticia)==null?void 0:y.desarrollo.substring(0,100))+"... ",1)]),b("div",U,[(c=s.noticia)!=null&&c.tipo?(x(),B(o,{key:0,class:"ma-2",label:""},{default:v(()=>{var i;return[k(g((i=s.noticia)==null?void 0:i.tipo),1)]}),_:1})):C("",!0),(d=s.noticia)!=null&&d.fecha?(x(),O("span",q,g((r=s.noticia)==null?void 0:r.fecha),1)):C("",!0)])]}),_:1})]),_:1}),h(e,{cols:"12",md:"6"},{default:v(()=>{var l,f;return[b("a",{href:`/${(l=s.noticia)==null?void 0:l.id}`},[h(m,{src:(f=s.noticia)==null?void 0:f.url,class:"noticias-container__img mt-2 mb-2"},null,8,["src"])],8,F)]}),_:1}),h(p)]),_:1})}}},W=P(J,[["__scopeId","data-v-7a9aa0c9"]]);export{G as A,W as N,Q as u};
