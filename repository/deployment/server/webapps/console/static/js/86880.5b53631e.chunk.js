"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[86880],{86880:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(24393),a=n(61763),o=n(14045),l=n(86727),i=n(44194),c=n(10479),u=n(89141),s=n(85605),d=n(63334);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,i=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=function(e){var t,n,f=e.quickStartContent,p=e["data-componentid"],g=(0,c.$)().t,h=(0,a.Z)().UIConfig,y=null==h?void 0:h.connectionResourcesUrl,b=m((0,i.useState)(!1),2),v=b[0],E=b[1];return i.createElement(i.Fragment,null,i.createElement(u.Z,{"data-componentid":p,className:"authenticator-quickstart-content"},i.createElement(u.Z.Row,{textAlign:"left"},i.createElement(u.Z.Column,{width:16},i.createElement(l.mr,{className:"mb-2",title:null==f?void 0:f.heading,imageSpaced:!1,bottomMargin:!1}),i.createElement(l.X6,{subHeading:!0,as:"h6"},null==f?void 0:f.subHeading))),i.createElement(u.Z.Row,{textAlign:"left"},i.createElement(u.Z.Column,{width:16},i.createElement(r.tb,{alwaysOpen:!0,isSidePanelOpen:!0,stepContent:(n=[],null==f||null===(t=f.steps)||void 0===t||t.map((function(e,t){n.push({stepContent:i.createElement(i.Fragment,null,i.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:o.Encode.forHtml(null==e?void 0:e.content)}}),e.image&&i.createElement(l.dn,{inline:!0,transparent:!0,icon:d.Zs.resolveConnectionResourcePath(y,e.image),size:"huge"})),stepTitle:e.title})})),n),isNextEnabled:!0})))),v&&i.createElement(s.default,{"data-testid":"".concat(p,"-application-selection-modal"),open:v,onClose:function(){return E(!1)},heading:g("extensions:develop.identityProviders.apple.quickStart.addLoginModal.heading"),subHeading:g("extensions:develop.identityProviders.apple.quickStart.addLoginModal.subHeading")}))};p.defaultProps={"data-componentid":"connector-quick-start"};const g=p}}]);