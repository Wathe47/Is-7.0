"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[43690],{43690:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var r=n(93129),o=n(3356),a=n(86727),i=n(87692),l=n(56024),c=n(67127),s=n(44194),u=n(10479),d=n(47245),f=n(26154),m=n(9261),h=n(24393),g=n(28897),p=n(13992),v=n(37313),E=n(47195),S=n(61793),b=n(46556),w=n(8889);function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const A=function(e){var t=e.match,n=e["data-testid"],y=(0,d.I0)(),A=(0,u.$)().t,U=t.params.id,_=I((0,s.useState)(null),2),O=_[0],T=_[1],x=I((0,s.useState)(null),2),Z=x[0],M=x[1],R=I((0,s.useState)(null),2),$=R[0],k=R[1],C=I((0,s.useState)(void 0),2),j=C[0],D=C[1],G=I((0,s.useState)(void 0),1)[0],N=I((0,s.useState)(void 0),2),P=N[0],z=N[1],B=I((0,s.useState)(""),2),L=B[0],Y=B[1],V=I((0,s.useState)(!1),2),X=V[0],F=V[1],Q=I((0,s.useState)(!1),2),W=Q[0],q=Q[1],H=I((0,s.useState)([]),2)[1];(0,s.useEffect)((function(){window.location.hash||ee()}),[]),(0,s.useEffect)((function(){q(!0),(0,S.getAgentConnections)(U).then((function(e){H(e.filter((function(e){return null==e?void 0:e.agent})))})).finally((function(){q(!1)}))}),[U]),(0,s.useEffect)((function(){window.location.hash&&(O||(F(!0),(0,i.Z)((function(){ee(),F(!1)}),12e3)))}),[O]),(0,s.useEffect)((function(){(0,g.E4)(w.RemoteUserStoreConstants.OUTBOUND_USER_STORE_TYPE_ID,null).then((function(e){M(e)}))}),[]),(0,s.useEffect)((function(){Z&&k((0,E.Y)(null==Z?void 0:Z.properties,null==O?void 0:O.properties))}),[Z]),(0,s.useEffect)((function(){var e;O&&Y(null==O||null===(e=O.properties)||void 0===e||null===(e=e.find((function(e){return e.name===v.rr})))||void 0===e?void 0:e.value)}),[O]),(0,s.useEffect)((function(){if(void 0===P||window.location.hash.includes(m.El.VIEW)||(0,c.Z)(window.location.hash)){if((0,c.Z)(window.location.hash))return void J(1);if(void 0===P||(0,c.Z)(window.location.hash))return;var e=window.location.hash.split("#"+m.El.TAB_INDEX);if(2===e.length&&(0,c.Z)(e[0])&&/^\d+$/.test(e[1])){var t=parseInt(e[1],10);if((0,l.Z)(t,0,P)){if(t===j)return;J(t)}else K(G)}else K(G)}}),[window.location.hash,P]);var J=function(e){h.m8.push({hash:"#".concat(m.El.TAB_INDEX).concat(e),pathname:window.location.pathname}),D(e)},K=function(e){J(e)},ee=function(){(0,g.YZ)(U).then((function(e){T(e)})).catch((function(e){y((0,o.V_)({description:(null==e?void 0:e.description)||A("userstores:notifications.fetchUserstores.genericError.description"),level:r.QU.ERROR,message:(null==e?void 0:e.message)||A("userstores:notifications.fetchUserstores.genericError.message")}))}))},te=[{menuItem:"Setup Guide",render:function(){return s.createElement(a.M$.Pane,{controlledSegmentation:!0,attached:!1},s.createElement(b.SetupGuideTab,{isUserStoreLoading:X,userStoreId:U}))}},{menuItem:"General",render:function(){return s.createElement(a.M$.Pane,{controlledSegmentation:!0,attached:!1},s.createElement(b.UserStoreGeneralSettings,{userStoreProperties:$,isDisabled:L,userStore:O,userStoreId:U,handleUserStoreDisabled:function(e){return Y(e)}}))}},{menuItem:"Attribute Mappings",render:function(){return s.createElement(a.M$.Pane,{controlledSegmentation:!0,attached:!1},s.createElement(b.AttributeMappings,{userStore:O,userStoreId:U}))}}];return s.createElement(a.O9,{image:s.createElement(a.dn,{bordered:!0,defaultIcon:!0,size:"x60",relaxed:"very",shape:"rounded",hoverable:!1,icon:(0,p.jw)()}),title:s.createElement(s.Fragment,null,"false"===L?s.createElement(a.GI,{trigger:s.createElement(f.Z,{className:"mr-2 ml-0 vertical-aligned-baseline",size:"small",name:"circle",color:"green"}),content:A("common:enabled"),inverted:!0}):s.createElement(a.GI,{trigger:s.createElement(f.Z,{className:"mr-2 ml-0 vertical-aligned-baseline",size:"small",name:"circle",color:"orange"}),content:A("common:disabled"),inverted:!0}),null==O?void 0:O.name),backButton:{onClick:function(){h.m8.push(h.$x.getPaths().get("USERSTORES"))},text:A("userstores:pageLayout.edit.back")},titleTextAlign:"left",bottomMargin:!1,isLoading:X||W,"data-testid":"".concat(n,"-page-layout")},s.createElement(a.M$,{className:"remote-user-store-edit-section",panes:te,onTabChange:function(e,t){J(t.activeIndex),ee()},"data-testid":"".concat(n,"-tabs"),onInitialize:function(e){var t=e.panesLength;z(t)},activeIndex:j,defaultActiveIndex:G}))}}}]);