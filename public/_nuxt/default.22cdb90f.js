import{_ as S,V as I,r as i,f as e,k as o,M as d,s as r,q as t,W as F,v as N,l as _,F as k,N as A,n as E,d as O,j as x,m as c,X as L}from"./entry.9bd1dcea.js";const V={__name:"NavBar",setup(m){I();const n=i(!1);i(null);const p=i([{name:"Cotización",to:"/cotizacion"},{name:"Política",to:"/politica"},{name:"Economía",to:"/economia"},{name:"Deportes",to:"/deportes"},{name:"Sociedad",to:"/sociedad"},{name:"Policiales",to:"/policiales"},{name:"Tendencias",to:"/tendencias"}]),l=async u=>{await E(u)};return(u,s)=>{const v=e("v-app-bar-nav-icon"),f=e("v-toolbar-title"),g=e("v-spacer"),w=e("v-app-bar"),y=e("v-list-item"),b=e("v-list"),C=e("v-navigation-drawer"),T=e("v-main"),h=e("v-layout"),M=e("v-card");return o(),d(M,{class:"navbar"},{default:r(()=>[t(h,null,{default:r(()=>[t(w,{color:"grey-darken-4",dark:"",prominent:""},{default:r(()=>[t(v,{variant:"text",onClick:s[0]||(s[0]=F(a=>n.value=!n.value,["stop"]))}),t(f,{onClick:s[1]||(s[1]=a=>l("/")),class:"pointer"},{default:r(()=>[N("NOTICIAS")]),_:1}),t(g)]),_:1}),t(C,{modelValue:n.value,"onUpdate:modelValue":s[2]||(s[2]=a=>n.value=a),temporary:""},{default:r(()=>[t(b,{density:"compact",nav:""},{default:r(()=>[(o(!0),_(k,null,A(p.value,a=>(o(),d(y,{onClick:P=>l(a.to),title:a.name,value:a.name},null,8,["onClick","title","value"]))),256))]),_:1})]),_:1},8,["modelValue"]),t(T,{style:{height:"64px"}})]),_:1})]),_:1})}}},j=S(V,[["__scopeId","data-v-68d5831b"]]),B=c("footer",null,null,-1),H=O({__name:"default",setup(m){return x({title:"title",meta:[{name:"description",content:"My amazing site."}],script:[{type:"text/javascript",async:!0,innerHTML:`
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
        `}]}),(n,p)=>(o(),_("div",null,[c("header",null,[t(j)]),c("main",null,[L(n.$slots,"default")]),B]))}});export{H as default};
