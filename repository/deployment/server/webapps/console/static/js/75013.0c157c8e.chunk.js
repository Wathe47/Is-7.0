"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[75013,87028,63647,55771,51960,64102,4758],{87028:(e,t,n)=>{n.r(t),n.d(t,{CategoryItem:()=>l});var a=n(86727),i=n(44194),r=n(10479),o=n(64102),l=function(e){var t=e.categoryName,n=e.iconSize,l=e.techStackIcons,c=e.onClick,u=e.comingSoon,s=e.className,d=e.style,p=e["data-componentid"],m=(0,r.$)().t;return i.createElement(o.DynamicTile,{"data-componentid":p,style:d,className:s,disabled:u,grayedOut:u,whiteBackground:!0,clipped:!0,onClick:function(e){null==e||e.preventDefault(),c(e)},body:i.createElement("div",{style:{display:"flex",flexDirection:"column",rowGap:"5px"}},u?i.createElement("div",{className:"coming-soon-ribbon"},m("common:comingSoon")):null,i.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",paddingTop:"5px"}},l.map((function(e,r){var o="".concat(t,"-tech-stack-icon-").concat(r);return i.createElement(a.dn,{disabled:u,key:o,fill:"primary","data-componentid":o,"data-testid":o,className:"card-image",size:n,icon:e,square:!0,transparent:!0})}))),i.createElement(a.xv,{muted:u,className:"text-center px-2"},t))})};l.defaultProps={comingSoon:!1,"data-componentid":"category-item",iconSize:"default",loading:!1,techStackIcons:void 0}},63647:(e,t,n)=>{n.r(t),n.d(t,{ApplicationAddTile:()=>l});var a=n(44194),i=n(26154),r=n(64102);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var l=function(e){return a.createElement(r.DynamicTile,o({},e,{outlined:!0,body:a.createElement("div",{className:"stacked-content"},a.createElement(i.Z,{name:"plus circle",size:"huge",fitted:!0,className:"primary"}),a.createElement("p",null,"Add Application"))}))}},55771:(e,t,n)=>{n.r(t),n.d(t,{ApplicationTemplateCard:()=>A});var a=n(86727),i=n(51865),r=n.n(i),o=n(46440),l=n(44194),c=n(47245),u=n(95165),s=n(62508),d=n(89141),p=n(87028),m=n(63647),f=n(51960),y=n(65735),g=n(89608),v=n(74636),b=n(24393);function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,i,r,o,l=[],c=!0,u=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(a=r.call(n)).done)&&(l.push(a.value),l.length!==t);c=!0);}catch(e){u=!0,i=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var A=function(e){var t=e.applications,n=e.isApplicationsAvailable,i=e.isApplicationsFetchRequestLoading,h=e.onTemplateSelected,A=e["data-componentid"],S=b.lD.getInstance(),T=(0,c.v9)((function(e){var t;return null==e||null===(t=e.application)||void 0===t?void 0:t.groupedTemplates})),w=E((0,l.useState)(void 0),2),P=w[0],N=w[1];(0,l.useEffect)((function(){n&&t.length>0?N("RECENT_APPS"):N("TEMPLATES")}),[n,t]),(0,l.useEffect)((function(){void 0===T&&v.e.getApplicationTemplates().finally()}),[T]);var O=function(e){if(T){var t=T.find((function(t){return t.templateId===e}));t&&(e===g.id&&(t=(0,o.Z)(g)),S.publish("application-click-create-new",{source:"getting-started-page",type:t.templateId}),h(t))}},C="RECENT_APPS"===P?l.createElement(m.ApplicationAddTile,{"data-componentid":"".concat(A,"-app-add-action-tile"),onClick:function(e){null==e||e.preventDefault(),S.publish("console-getting-started-add-application-path"),N("RECENT_APPS"===P?"TEMPLATES":"RECENT_APPS")}}):l.createElement(p.CategoryItem,{"data-componentid":"".concat(A,"-single-page-application-creation-tile"),className:r()("ui scale transition",{"animating in visible":"TEMPLATES"===P,"hidden animating out":"TEMPLATES"!==P}),onClick:function(){O("single-page-application")},iconSize:"tiny",techStackIcons:[(0,y.ZP)().spa],categoryName:"Single-Page Application"}),I="RECENT_APPS"===P?l.createElement("div",{className:r()("ui scale transition visible",{"animating in visible flex-layout":"RECENT_APPS"===P,"hidden animating out":"RECENT_APPS"!==P})},l.createElement(f.ApplicationTile,{"data-componentid":"".concat(A,"-app-list-item-1"),application:t[0]})):l.createElement(p.CategoryItem,{"data-componentid":"".concat(A,"-traditional-web-application-creation-tile"),className:r()("ui scale transition",{"animating in visible":"TEMPLATES"===P,"hidden animating out":"TEMPLATES"!==P}),onClick:function(){O("traditional-web-application")},iconSize:"tiny",techStackIcons:[(0,y.ZP)().oidcWebApp],categoryName:"Traditional Web Application"}),j="RECENT_APPS"===P?l.createElement("div",{className:r()("ui scale transition",{"animating in visible flex-layout":"RECENT_APPS"===P,"hidden animating out":"RECENT_APPS"!==P})},l.createElement(f.ApplicationTile,{"data-componentid":"".concat(A,"-app-list-item-2"),application:t[1]})):l.createElement(p.CategoryItem,{"data-componentid":"".concat(A,"-mobile-application-creation-tile"),onClick:function(){O("mobile-application")},iconSize:"tiny",className:r()("ui scale transition",{"animating in visible":"TEMPLATES"===P,"hidden animating out":"TEMPLATES"!==P}),techStackIcons:[(0,y.ZP)().oidcMobile],categoryName:"Mobile Application"}),x="RECENT_APPS"===P?l.createElement("div",{style:{animationDuration:"350ms"},className:r()("ui scale transition",{"animating in visible flex-layout":"RECENT_APPS"===P,"hidden animating out":"RECENT_APPS"!==P})},l.createElement(f.ApplicationTile,{"data-componentid":"".concat(A,"-app-list-item-3"),application:t[2]})):l.createElement(p.CategoryItem,{"data-componentid":"".concat(A,"-custom-application-creation-tile"),onClick:function(){O("custom-application")},iconSize:"tiny",className:r()("ui scale transition",{"animating in visible":"TEMPLATES"===P,"hidden animating out":"TEMPLATES"!==P}),techStackIcons:[(0,y.ZP)().customApp],categoryName:"Standard-Based Application"});return l.createElement(u.Z,{fluid:!0,"data-componentid":"application-integration-card","data-testid":"application-integration-card",className:"basic-card no-hover context-card application-template-card"},l.createElement(u.Z.Content,{extra:!0,className:"no-borders mb-0 pb-0 pt-4",textAlign:"center"},l.createElement("div",{className:"card-heading"},l.createElement(a.X6,{bold:"500",as:"h2"},"Onboard your application"))),l.createElement(s.Z,{className:"0.5x",hidden:!0}),l.createElement(u.Z.Content,{className:"pt-0 px-2 no-borders"},l.createElement(d.Z,null,l.createElement(d.Z.Row,{columns:2,style:{rowGap:"20px"}},[C,I,j,x].map((function(e,t){return l.createElement(d.Z.Column,{width:8,key:"tile-".concat(t)},l.createElement(a.xv,null,e))}))))),i&&l.createElement(a.pO,null))};A.defaultProps={"data-componentid":"dynamic-application-context-card"}},51960:(e,t,n)=>{n.r(t),n.d(t,{ApplicationTile:()=>m});var a=n(86727),i=n(44194),r=n(26154),o=n(64102),l=n(24393),c=["application","data-componentid"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,i,r,o,l=[],c=!0,u=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(a=r.call(n)).done)&&(l.push(a.value),l.length!==t);c=!0);}catch(e){u=!0,i=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=function(e){var t=e.application,n=e["data-componentid"],d=p(e,c),m=(0,i.useRef)(null),f=l.lD.getInstance(),y=s((0,i.useState)(!1),2),g=y[0],v=y[1],b=s((0,i.useState)(!1),2),E=b[0],h=b[1];(0,i.useEffect)((function(){if(m){var e=m.current;e&&e.offsetWidth<e.scrollWidth&&h(!0)}}),[]),(0,i.useEffect)((function(){v(!t)}),[t]);return i.createElement(o.DynamicTile,u({},d,{"data-componentid":n,onClick:g?function(){}:function(){f.publish("console-getting-started-view-application-quick-access",{accessType:t.access,id:t.id,templateId:t.templateId}),l.m8.push({pathname:l.$x.getPaths().get("APPLICATION_EDIT").replace(":id",null==t?void 0:t.id)})},outlined:g,reduceOpacity:g,header:g?null:null!=t&&t.description?i.createElement(a.GI,{disabled:!E,content:null==t?void 0:t.name,trigger:i.createElement("h1",{ref:m},null==t?void 0:t.name)}):null,bodyAlignment:g?"center":"start",body:g?i.createElement(a.dn,{transparent:!0,size:"mini",icon:(0,l.Uz)().applications,fill:"secondary"}):null!=t&&t.description?i.createElement("p",{className:"content"},null==t?void 0:t.description):i.createElement(a.GI,{content:null==t?void 0:t.name,trigger:i.createElement("h1",null,null==t?void 0:t.name)}),justifyFooter:"end",footer:g?null:i.createElement(r.Z,{name:"angle right",size:"large",className:"p-0 m-0"})}))};m.defaultProps={application:null,"data-componentid":"application-tile"}},64102:(e,t,n)=>{n.r(t),n.d(t,{DynamicTile:()=>u});var a=n(51865),i=n.n(a),r=n(44194),o=["className","clipped","outlined","disabled","reduceOpacity","grayedOut","header","body","footer","whiteBackground","justifyFooter","bodyAlignment","data-componentid"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=function(e){var t=e.className,n=e.clipped,a=e.outlined,u=e.disabled,s=e.reduceOpacity,d=e.grayedOut,p=e.header,m=e.body,f=e.footer,y=e.whiteBackground,g=e.justifyFooter,v=e.bodyAlignment,b=e["data-componentid"],E=c(e,o),h=i()("application-tile",{"auto-vh-center":!p&&!f,clipped:n,"cursor-not-allowed":u,grayscale:d,"opacity-50":s,outlined:a,"white-bg":y},t);return r.createElement("div",l({},E,{className:h,"data-componentid":b}),p&&r.createElement("div",{className:"header"},p),m&&r.createElement("div",{className:i()("body",{center:"center"===v,start:"start"===v})},m),f&&r.createElement("div",{className:i()("footer",{"justify-end":"end"===g,"justify-start":"start"===g})},f))};u.defaultProps={bodyAlignment:"center",className:null,clipped:!0,"data-componentid":"dynamic-tile",grayedOut:!1,justifyFooter:void 0,outlined:!1,reduceOpacity:!1,whiteBackground:!0}},75586:(e,t,n)=>{n.r(t),n.d(t,{NewUserView:()=>h});var a=n(24184),i=n(54833),r=n(86727),o=n(44194),l=n(10479),c=n(47245),u=n(41193),s=n(89141),d=n(62508),p=n(55771),m=n(4758),f=n(85889),y=n(6776);function g(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||b(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,i,r,o,l=[],c=!0,u=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(a=r.call(n)).done)&&(l.push(a.value),l.length!==t);c=!0);}catch(e){u=!0,i=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return l}}(e,t)||b(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var h=function(e){var t,n,b,E,h,A=e.applications,S=e.isApplicationsAvailable,T=e.isApplicationsFetchRequestLoading,w=e.onApplicationCreate,P=(0,l.$)().t,N=(0,c.v9)((function(e){return e.profile.profileInfo})),O=(0,c.v9)((function(e){return e.loaders.isProfileInfoRequestLoading})),C=(0,c.v9)((function(e){return e.config})),I=(0,c.v9)((function(e){return e.config.ui.features})),j=(0,c.v9)((function(e){return e.auth.fullName})),x=(0,c.v9)((function(e){return e.auth.isPrivilegedUser})),Z=v((0,o.useState)(!1),2),k=Z[0],L=Z[1],R=v((0,o.useState)(null),2),_=R[0],M=R[1];return o.createElement(o.Fragment,null,o.createElement("div",{className:"new-user-greeting-container"},o.createElement(r.X6,{ellipsis:!0,compact:!0,as:"h1",bold:"500","data-testid":"welcome-greeting-header","data-componentid":"welcome-greeting-header","data-hj-suppress":""},O?o.createElement(u.Z,{"data-testid":"welcome-greeting-placeholder","data-componentid":"welcome-greeting-placeholder"},o.createElement(u.Z.Header,null,o.createElement(u.Z.Line,{length:"very long"}))):P("extensions:common.quickStart.greeting.heading",{username:x?j:(0,i.nk)(N)})),o.createElement(r.X6,{subHeading:!0,ellipsis:!0,as:"h5","data-testid":"welcome-greeting-sub-header","data-componentid":"welcome-greeting-sub-header"},"Let's onboard your apps or try out how your login looks like using the Try It app")),o.createElement("div",{className:"new-user-view-cards-wrapper"},o.createElement(s.Z,{stackable:!0},o.createElement(s.Z.Row,{relaxed:"very"},o.createElement(a.di,{when:[].concat(g(null==I||null===(t=I.applications)||void 0===t||null===(t=t.scopes)||void 0===t?void 0:t.create),g(null==I||null===(n=I.applications)||void 0===n||null===(n=n.scopes)||void 0===n?void 0:n.read))},o.createElement(s.Z.Column,{width:null!==(b=I.tryIt)&&void 0!==b&&b.enabled?7:16},o.createElement(p.ApplicationTemplateCard,{applications:A,isApplicationsAvailable:S,isApplicationsFetchRequestLoading:T,onTemplateSelected:function(e){M(e),L(!0)}})),(null===(E=I.tryIt)||void 0===E?void 0:E.enabled)&&o.createElement(o.Fragment,null,o.createElement(s.Z.Column,{width:2},o.createElement(d.Z,{className:"vertical-divider-with-no-border",vertical:!0},"Or")),o.createElement(s.Z.Column,{width:7},o.createElement(m.PlaygroundApplicationCard,{onApplicationCreate:w}))))))),k&&o.createElement(f.y,{title:null==_?void 0:_.name,subTitle:null==_?void 0:_.description,closeWizard:function(){L(!1),M(void 0)},template:_,showHelpPanel:!0,subTemplates:null==_?void 0:_.subTemplates,subTemplatesSectionTitle:null==_?void 0:_.subTemplatesSectionTitle,addProtocol:!1,templateLoadingStrategy:null!==(h=C.ui.applicationTemplateLoadingStrategy)&&void 0!==h?h:y.jo.DEFAULT_APP_TEMPLATE_LOADING_STRATEGY}))};h.defaultProps={"data-componentid":"dynamic-application-context-card"}},4758:(e,t,n)=>{n.r(t),n.d(t,{PlaygroundApplicationCard:()=>p});var a=n(86727),i=n(44194),r=n(95165),o=n(62508),l=n(89141),c=n(60085),u=n(93879);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,i,r,o,l=[],c=!0,u=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(a=r.call(n)).done)&&(l.push(a.value),l.length!==t);c=!0);}catch(e){u=!0,i=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var p=function(e){var t=e.onApplicationCreate,n=s((0,i.useState)(!1),2),d=n[0],p=n[1];return i.createElement(r.Z,{"data-componentid":"application-integration-card","data-testid":"application-integration-card",className:"basic-card no-hover context-card try-it-app-card"},i.createElement(r.Z.Content,{extra:!0,className:"no-borders mb-0 pb-0 pt-4",textAlign:"center"},i.createElement("div",{className:"card-heading"},i.createElement(a.X6,{bold:"500",as:"h2"},"Try Login with the Try It app"))),i.createElement(o.Z,{className:"0.5x",hidden:!0}),i.createElement(r.Z.Content,{className:"no-borders"},i.createElement(l.Z,{centered:!0,padded:!0},i.createElement(l.Z.Row,{columns:2,style:{rowGap:"20px"}},i.createElement(a.dn,{transparent:!0,size:"small",icon:(0,u.getGettingStartedCardIllustrations)().tryItApplication,fill:"secondary"})),i.createElement(l.Z.Row,null,i.createElement(a.xv,{className:"pl-5 pr-5",styles:{color:"#7d7272",textAlign:"center"}},"Let's use the Try It application to try out the login flows of Asgardeo.")),i.createElement(l.Z.Row,null,i.createElement(a.KM,{onClick:function(){return p(!0)}},"Try Login with Asgardeo")))),d&&i.createElement(c.LoginPlaygroundWizard,{"data-componentId":"login-playground-wizard-modal",closeWizard:function(){return p(!1)},applicationName:"Asgardeo Login Playground",onApplicationCreate:t}))};p.defaultProps={"data-componentid":"dynamic-application-context-card"}},12735:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(20803),i=n(3148),r=n(2748),o=n(93092),l=n(45408),c=n(7683);const u=(0,o.Z)((function(e,t){var n=(0,c.Z)(t);return(0,l.Z)(n)&&(n=void 0),(0,l.Z)(e)?(0,a.Z)(e,(0,i.Z)(t,1,l.Z,!0),(0,r.Z)(n,2)):[]}))}}]);