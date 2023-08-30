import{_ as f,r as l,o as A,f as e,V as k,W as F,L as m,k as c,l as _,q as t,x as N,y as x,m as d,X as B,M as v,s as r,Y as E,v as L,F as O,N as V,n as j,d as P,j as R,Z as $}from"./entry.52f96eab.js";const H=o=>(N("data-v-e970cdd5"),o=o(),x(),o),q={class:"ad-container"},z=H(()=>d("iframe",{src:"//www.profitablecreativeformat.com/watchnew?key=beb2b3927a569a653daff0c0d00b4ec9",width:"500",height:"120",frameborder:"0",scrolling:"no"},`\r
    `,-1)),U={__name:"AdBanner",setup(o){const a=l(!0);return A(async()=>{}),(u,i)=>{const p=e("v-btn");return k((c(),_("div",q,[t(p,{onClick:i[0]||(i[0]=n=>a.value=!m(a)),size:"x-small",class:"ad-container__btn",icon:"mdi-close-circle-outline "}),z],512)),[[F,m(a)]])}}},D=f(U,[["__scopeId","data-v-e970cdd5"]]);const G={__name:"NavBar",setup(o){B();const a=l(!1);l(null);const u=l([{name:"Cotización",to:"/cotizacion"},{name:"Política",to:"/politica"},{name:"Economía",to:"/economia"},{name:"Deportes",to:"/deportes"},{name:"Sociedad",to:"/sociedad"},{name:"Policiales",to:"/policiales"},{name:"Tendencias",to:"/tendencias"}]),i=async p=>{await j(p)};return(p,n)=>{const g=e("v-app-bar-nav-icon"),w=e("v-toolbar-title"),y=e("v-spacer"),b=e("v-app-bar"),h=e("v-list-item"),C=e("v-list"),S=e("v-navigation-drawer"),I=e("v-main"),T=e("v-layout"),M=e("v-card");return c(),v(M,{class:"navbar"},{default:r(()=>[t(T,null,{default:r(()=>[t(b,{color:"grey-darken-4",dark:"",prominent:""},{default:r(()=>[t(g,{variant:"text",onClick:n[0]||(n[0]=E(s=>a.value=!a.value,["stop"]))}),t(w,{onClick:n[1]||(n[1]=s=>i("/")),class:"pointer"},{default:r(()=>[L("NOTICIAS")]),_:1}),t(y)]),_:1}),t(S,{modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=s=>a.value=s),temporary:""},{default:r(()=>[t(C,{density:"compact",nav:""},{default:r(()=>[(c(!0),_(O,null,V(u.value,s=>(c(),v(h,{onClick:X=>i(s.to),title:s.name,value:s.name},null,8,["onClick","title","value"]))),256))]),_:1})]),_:1},8,["modelValue"]),t(I,{style:{height:"64px"}})]),_:1})]),_:1})}}},J=f(G,[["__scopeId","data-v-68d5831b"]]),W=d("footer",null,null,-1),Z=P({__name:"default",setup(o){return R({title:"title",meta:[{name:"description",content:"My amazing site."}],script:[{type:"text/javascript",async:!0,innerHTML:`
        (function() {
  var host = 'www.themoneytizer.com';
  var element = document.createElement('script');
  var firstScript = document.getElementsByTagName('script')[0];
  var url = 'https://cmp.quantcast.com'
    .concat('/choice/', '6Fv0cGNfc_bw8', '/', host, '/choice.js');
  var uspTries = 0;
  var uspTriesLimit = 3;
  element.async = true;
  element.type = 'text/javascript';
  element.src = url;

  firstScript.parentNode.insertBefore(element, firstScript);

  function makeStub() {
    var TCF_LOCATOR_NAME = '__tcfapiLocator';
    var queue = [];
    var win = window;
    var cmpFrame;

    function addFrame() {
      var doc = win.document;
      var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

      if (!otherCMP) {
        if (doc.body) {
          var iframe = doc.createElement('iframe');

          iframe.style.cssText = 'display:none';
          iframe.name = TCF_LOCATOR_NAME;
          doc.body.appendChild(iframe);
        } else {
          setTimeout(addFrame, 5);
        }
      }
      return !otherCMP;
    }

    function tcfAPIHandler() {
      var gdprApplies;
      var args = arguments;

      if (!args.length) {
        return queue;
      } else if (args[0] === 'setGdprApplies') {
        if (
          args.length > 3 &&
          args[2] === 2 &&
          typeof args[3] === 'boolean'
        ) {
          gdprApplies = args[3];
          if (typeof args[2] === 'function') {
            args[2]('set', true);
          }
        }
      } else if (args[0] === 'ping') {
        var retr = {
          gdprApplies: gdprApplies,
          cmpLoaded: false,
          cmpStatus: 'stub'
        };

        if (typeof args[2] === 'function') {
          args[2](retr);
        }
      } else {
        if(args[0] === 'init' && typeof args[3] === 'object') {
          args[3] = { ...args[3], tag_version: 'V2' };
        }
        queue.push(args);
      }
    }

    function postMessageEventHandler(event) {
      var msgIsString = typeof event.data === 'string';
      var json = {};

      try {
        if (msgIsString) {
          json = JSON.parse(event.data);
        } else {
          json = event.data;
        }
      } catch (ignore) {}

      var payload = json.__tcfapiCall;

      if (payload) {
        window.__tcfapi(
          payload.command,
          payload.version,
          function(retValue, success) {
            var returnMsg = {
              __tcfapiReturn: {
                returnValue: retValue,
                success: success,
                callId: payload.callId
              }
            };
            if (msgIsString) {
              returnMsg = JSON.stringify(returnMsg);
            }
            if (event && event.source && event.source.postMessage) {
              event.source.postMessage(returnMsg, '*');
            }
          },
          payload.parameter
        );
      }
    }

    while (win) {
      try {
        if (win.frames[TCF_LOCATOR_NAME]) {
          cmpFrame = win;
          break;
        }
      } catch (ignore) {}

      if (win === window.top) {
        break;
      }
      win = win.parent;
    }
    if (!cmpFrame) {
      addFrame();
      win.__tcfapi = tcfAPIHandler;
      win.addEventListener('message', postMessageEventHandler, false);
    }
  };

  makeStub();

  var uspStubFunction = function() {
    var arg = arguments;
    if (typeof window.__uspapi !== uspStubFunction) {
      setTimeout(function() {
        if (typeof window.__uspapi !== 'undefined') {
          window.__uspapi.apply(window.__uspapi, arg);
        }
      }, 500);
    }
  };

  var checkIfUspIsReady = function() {
    uspTries++;
    if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
      console.warn('USP is not accessible');
    } else {
      clearInterval(uspInterval);
    }
  };

  if (typeof window.__uspapi === 'undefined') {
    window.__uspapi = uspStubFunction;
    var uspInterval = setInterval(checkIfUspIsReady, 6000);
  }
})();
        `}]}),(a,u)=>(c(),_("div",null,[d("header",null,[t(J),t(D)]),d("main",null,[$(a.$slots,"default")]),W]))}});export{Z as default};
