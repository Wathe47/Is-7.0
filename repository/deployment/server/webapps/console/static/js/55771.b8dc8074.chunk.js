"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[55771,87028,63647,51960,64102],{87028:(e,t,n)=>{n.r(t),n.d(t,{CategoryItem:()=>c});var a=n(86727),i=n(44194),r=n(10479),o=n(64102),c=function(e){var t=e.categoryName,n=e.iconSize,c=e.techStackIcons,l=e.onClick,s=e.comingSoon,p=e.className,d=e.style,u=e["data-componentid"],m=(0,r.$)().t;return i.createElement(o.DynamicTile,{"data-componentid":u,style:d,className:p,disabled:s,grayedOut:s,whiteBackground:!0,clipped:!0,onClick:function(e){null==e||e.preventDefault(),l(e)},body:i.createElement("div",{style:{display:"flex",flexDirection:"column",rowGap:"5px"}},s?i.createElement("div",{className:"coming-soon-ribbon"},m("common:comingSoon")):null,i.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",paddingTop:"5px"}},c.map((function(e,r){var o="".concat(t,"-tech-stack-icon-").concat(r);return i.createElement(a.dn,{disabled:s,key:o,fill:"primary","data-componentid":o,"data-testid":o,className:"card-image",size:n,icon:e,square:!0,transparent:!0})}))),i.createElement(a.xv,{muted:s,className:"text-center px-2"},t))})};c.defaultProps={comingSoon:!1,"data-componentid":"category-item",iconSize:"default",loading:!1,techStackIcons:void 0}},63647:(e,t,n)=>{n.r(t),n.d(t,{ApplicationAddTile:()=>c});var a=n(44194),i=n(26154),r=n(64102);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var c=function(e){return a.createElement(r.DynamicTile,o({},e,{outlined:!0,body:a.createElement("div",{className:"stacked-content"},a.createElement(i.Z,{name:"plus circle",size:"huge",fitted:!0,className:"primary"}),a.createElement("p",null,"Add Application"))}))}},55771:(e,t,n)=>{n.r(t),n.d(t,{ApplicationTemplateCard:()=>A});var a=n(86727),i=n(51865),r=n.n(i),o=n(46440),c=n(44194),l=n(47245),s=n(95165),p=n(62508),d=n(89141),u=n(87028),m=n(63647),f=n(51960),y=n(65735),g=n(89608),E=n(74636),b=n(24393);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,i,r,o,c=[],l=!0,s=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(a=r.call(n)).done)&&(c.push(a.value),c.length!==t);l=!0);}catch(e){s=!0,i=e}finally{try{if(!l&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(s)throw i}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var A=function(e){var t=e.applications,n=e.isApplicationsAvailable,i=e.isApplicationsFetchRequestLoading,h=e.onTemplateSelected,A=e["data-componentid"],S=b.lD.getInstance(),P=(0,l.v9)((function(e){var t;return null==e||null===(t=e.application)||void 0===t?void 0:t.groupedTemplates})),T=v((0,c.useState)(void 0),2),O=T[0],N=T[1];(0,c.useEffect)((function(){n&&t.length>0?N("RECENT_APPS"):N("TEMPLATES")}),[n,t]),(0,c.useEffect)((function(){void 0===P&&E.e.getApplicationTemplates().finally()}),[P]);var w=function(e){if(P){var t=P.find((function(t){return t.templateId===e}));t&&(e===g.id&&(t=(0,o.Z)(g)),S.publish("application-click-create-new",{source:"getting-started-page",type:t.templateId}),h(t))}},C="RECENT_APPS"===O?c.createElement(m.ApplicationAddTile,{"data-componentid":"".concat(A,"-app-add-action-tile"),onClick:function(e){null==e||e.preventDefault(),S.publish("console-getting-started-add-application-path"),N("RECENT_APPS"===O?"TEMPLATES":"RECENT_APPS")}}):c.createElement(u.CategoryItem,{"data-componentid":"".concat(A,"-single-page-application-creation-tile"),className:r()("ui scale transition",{"animating in visible":"TEMPLATES"===O,"hidden animating out":"TEMPLATES"!==O}),onClick:function(){w("single-page-application")},iconSize:"tiny",techStackIcons:[(0,y.ZP)().spa],categoryName:"Single-Page Application"}),j="RECENT_APPS"===O?c.createElement("div",{className:r()("ui scale transition visible",{"animating in visible flex-layout":"RECENT_APPS"===O,"hidden animating out":"RECENT_APPS"!==O})},c.createElement(f.ApplicationTile,{"data-componentid":"".concat(A,"-app-list-item-1"),application:t[0]})):c.createElement(u.CategoryItem,{"data-componentid":"".concat(A,"-traditional-web-application-creation-tile"),className:r()("ui scale transition",{"animating in visible":"TEMPLATES"===O,"hidden animating out":"TEMPLATES"!==O}),onClick:function(){w("traditional-web-application")},iconSize:"tiny",techStackIcons:[(0,y.ZP)().oidcWebApp],categoryName:"Traditional Web Application"}),I="RECENT_APPS"===O?c.createElement("div",{className:r()("ui scale transition",{"animating in visible flex-layout":"RECENT_APPS"===O,"hidden animating out":"RECENT_APPS"!==O})},c.createElement(f.ApplicationTile,{"data-componentid":"".concat(A,"-app-list-item-2"),application:t[1]})):c.createElement(u.CategoryItem,{"data-componentid":"".concat(A,"-mobile-application-creation-tile"),onClick:function(){w("mobile-application")},iconSize:"tiny",className:r()("ui scale transition",{"animating in visible":"TEMPLATES"===O,"hidden animating out":"TEMPLATES"!==O}),techStackIcons:[(0,y.ZP)().oidcMobile],categoryName:"Mobile Application"}),k="RECENT_APPS"===O?c.createElement("div",{style:{animationDuration:"350ms"},className:r()("ui scale transition",{"animating in visible flex-layout":"RECENT_APPS"===O,"hidden animating out":"RECENT_APPS"!==O})},c.createElement(f.ApplicationTile,{"data-componentid":"".concat(A,"-app-list-item-3"),application:t[2]})):c.createElement(u.CategoryItem,{"data-componentid":"".concat(A,"-custom-application-creation-tile"),onClick:function(){w("custom-application")},iconSize:"tiny",className:r()("ui scale transition",{"animating in visible":"TEMPLATES"===O,"hidden animating out":"TEMPLATES"!==O}),techStackIcons:[(0,y.ZP)().customApp],categoryName:"Standard-Based Application"});return c.createElement(s.Z,{fluid:!0,"data-componentid":"application-integration-card","data-testid":"application-integration-card",className:"basic-card no-hover context-card application-template-card"},c.createElement(s.Z.Content,{extra:!0,className:"no-borders mb-0 pb-0 pt-4",textAlign:"center"},c.createElement("div",{className:"card-heading"},c.createElement(a.X6,{bold:"500",as:"h2"},"Onboard your application"))),c.createElement(p.Z,{className:"0.5x",hidden:!0}),c.createElement(s.Z.Content,{className:"pt-0 px-2 no-borders"},c.createElement(d.Z,null,c.createElement(d.Z.Row,{columns:2,style:{rowGap:"20px"}},[C,j,I,k].map((function(e,t){return c.createElement(d.Z.Column,{width:8,key:"tile-".concat(t)},c.createElement(a.xv,null,e))}))))),i&&c.createElement(a.pO,null))};A.defaultProps={"data-componentid":"dynamic-application-context-card"}},51960:(e,t,n)=>{n.r(t),n.d(t,{ApplicationTile:()=>m});var a=n(86727),i=n(44194),r=n(26154),o=n(64102),c=n(24393),l=["application","data-componentid"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,i,r,o,c=[],l=!0,s=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(a=r.call(n)).done)&&(c.push(a.value),c.length!==t);l=!0);}catch(e){s=!0,i=e}finally{try{if(!l&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(s)throw i}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function u(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=function(e){var t=e.application,n=e["data-componentid"],d=u(e,l),m=(0,i.useRef)(null),f=c.lD.getInstance(),y=p((0,i.useState)(!1),2),g=y[0],E=y[1],b=p((0,i.useState)(!1),2),v=b[0],h=b[1];(0,i.useEffect)((function(){if(m){var e=m.current;e&&e.offsetWidth<e.scrollWidth&&h(!0)}}),[]),(0,i.useEffect)((function(){E(!t)}),[t]);return i.createElement(o.DynamicTile,s({},d,{"data-componentid":n,onClick:g?function(){}:function(){f.publish("console-getting-started-view-application-quick-access",{accessType:t.access,id:t.id,templateId:t.templateId}),c.m8.push({pathname:c.$x.getPaths().get("APPLICATION_EDIT").replace(":id",null==t?void 0:t.id)})},outlined:g,reduceOpacity:g,header:g?null:null!=t&&t.description?i.createElement(a.GI,{disabled:!v,content:null==t?void 0:t.name,trigger:i.createElement("h1",{ref:m},null==t?void 0:t.name)}):null,bodyAlignment:g?"center":"start",body:g?i.createElement(a.dn,{transparent:!0,size:"mini",icon:(0,c.Uz)().applications,fill:"secondary"}):null!=t&&t.description?i.createElement("p",{className:"content"},null==t?void 0:t.description):i.createElement(a.GI,{content:null==t?void 0:t.name,trigger:i.createElement("h1",null,null==t?void 0:t.name)}),justifyFooter:"end",footer:g?null:i.createElement(r.Z,{name:"angle right",size:"large",className:"p-0 m-0"})}))};m.defaultProps={application:null,"data-componentid":"application-tile"}},64102:(e,t,n)=>{n.r(t),n.d(t,{DynamicTile:()=>s});var a=n(51865),i=n.n(a),r=n(44194),o=["className","clipped","outlined","disabled","reduceOpacity","grayedOut","header","body","footer","whiteBackground","justifyFooter","bodyAlignment","data-componentid"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=function(e){var t=e.className,n=e.clipped,a=e.outlined,s=e.disabled,p=e.reduceOpacity,d=e.grayedOut,u=e.header,m=e.body,f=e.footer,y=e.whiteBackground,g=e.justifyFooter,E=e.bodyAlignment,b=e["data-componentid"],v=l(e,o),h=i()("application-tile",{"auto-vh-center":!u&&!f,clipped:n,"cursor-not-allowed":s,grayscale:d,"opacity-50":p,outlined:a,"white-bg":y},t);return r.createElement("div",c({},v,{className:h,"data-componentid":b}),u&&r.createElement("div",{className:"header"},u),m&&r.createElement("div",{className:i()("body",{center:"center"===E,start:"start"===E})},m),f&&r.createElement("div",{className:i()("footer",{"justify-end":"end"===g,"justify-start":"start"===g})},f))};s.defaultProps={bodyAlignment:"center",className:null,clipped:!0,"data-componentid":"dynamic-tile",grayedOut:!1,justifyFooter:void 0,outlined:!1,reduceOpacity:!1,whiteBackground:!0}}}]);