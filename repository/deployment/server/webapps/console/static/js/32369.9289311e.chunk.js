"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[32369],{32369:(e,n,t)=>{t.r(n),t.d(n,{default:()=>E});var i=t(93129),o=t(3356),r=t(20812),a=t(86727),l=t(44194),c=t(10479),u=t(47245),s=t(89141),p=t(62508),d=t(78537),f=t(76892),m=t(30741),g=t(157);function v(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var i,o,r,a,l=[],c=!0,u=!1;try{if(r=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=r.call(t)).done)&&(l.push(i.value),l.length!==n);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}const E=function(e){var n=e.application,t=e.isReadOnly,h=e.onUpdate,E=e["data-componentid"],b=(0,c.$)().t,R=(0,u.I0)(),y=(0,l.useRef)(null),S=v((0,l.useState)(!0),2),w=S[0],C=S[1],I=v((0,l.useState)(!1),2),O=I[0],x=I[1],A=v((0,l.useState)([]),2),M=A[0],Z=A[1],k=v((0,l.useState)({}),2),P=k[0],_=k[1],L=v((0,l.useState)([]),2),N=L[0],U=L[1],j=v((0,l.useState)([]),2),D=j[0],Q=j[1];(0,l.useEffect)((function(){F()}),[]),(0,l.useEffect)((function(){V()}),[n]),(0,l.useEffect)((function(){N.length<=0||M.length<=0||T()}),[N,M]);var V=function(){var e,t,i=null==n||null===(e=n.authenticationSequence)||void 0===e?void 0:e.attributeStepId;i&&Z(null==n||null===(t=n.authenticationSequence)||void 0===t||null===(t=t.steps[i-1])||void 0===t?void 0:t.options)},F=function(){C(!0),(0,f.ag)(null,m.S_.FEDERATED).then((function(e){var n=e.filter((function(e){return e.name!==g.ApplicationRolesConstants.ORGANIZATION_LOGIN}));U(n)})).catch((function(e){var n;null!=e&&null!==(n=e.response)&&void 0!==n&&null!==(n=n.data)&&void 0!==n&&n.description?R((0,o.V_)({description:b("authenticationProvider:notifications.getIDPList.error.message",{description:e.response.data.description}),level:i.QU.ERROR,message:b("authenticationProvider:notifications.getIDPList.error.message")})):R((0,o.V_)({description:b("authenticationProvider:notifications.getIDPList.genericError.description"),level:i.QU.ERROR,message:b("authenticationProvider:notifications.getIDPList.genericError.message")}))})).finally((function(){C(!1)}))},T=function(){var e=M.filter((function(e){return N.find((function(n){return n.name===e.idp}))}));G(e),Q(e)},q=function(e){R((0,o.V_)(e))},G=function(e){var t={};null==e||e.forEach((function(e){t[e.idp]=function(e){var t=n.appRoleConfigurations;if(t.length>0){var i,o=t.find((function(n){return n.idp===e}));return null!==(i=null==o?void 0:o.useAppRoleMappings)&&void 0!==i&&i}return!1}(e.idp)})),_(t)};return w?l.createElement(a.pJ,{padded:"very"},l.createElement(a.pO,null)):(null==D?void 0:D.length)>0?l.createElement(l.Fragment,null,l.createElement(s.Z,null,l.createElement(s.Z.Row,null,l.createElement(s.Z.Column,{className:"heading-wrapper",computer:10},l.createElement(a.X6,{as:"h4"},b("extensions:console.applicationRoles.roleMapping.heading")),l.createElement(a.X6,{subHeading:!0,ellipsis:!0,as:"h6"},b("extensions:console.applicationRoles.roleMapping.subHeading"))))),l.createElement(s.Z,null,l.createElement(s.Z.Row,null,l.createElement(s.Z.Column,{computer:10},l.createElement(r.l0,{id:"application-role-mapping-form",onSubmit:function(e){return function(e){for(var t=[],o=0,r=Object.entries(e);o<r.length;o++){var a=v(r[o],2),l={idp:a[0],useAppRoleMappings:a[1]};t.push(l)}var c={appRoleConfigurations:t,id:n.id,name:n.name};x(!0),(0,d.hN)(c).then((function(){q({description:b("extensions:console.applicationRoles.roleMapping.notifications.updateRole.success.description"),level:i.QU.SUCCESS,message:b("extensions:console.applicationRoles.roleMapping.notifications.updateRole.success.message")}),h()})).catch((function(){q({description:b("extensions:console.applicationRoles.roleMapping.notifications.updateRole.genericError.description"),level:i.QU.ERROR,message:b("extensions:console.applicationRoles.roleMapping.notifications.updateRole.genericError.message")})})).finally((function(){x(!1)}))}(e)},ref:y,uncontrolledForm:!1,initialValues:P},null==D?void 0:D.map((function(e,n){return l.createElement(r.gN.Checkbox,{key:n,ariaLabel:"".concat(e.idp,"-checkbox"),name:e.idp,label:e.idp,tabIndex:3,width:16,"data-componentid":"".concat(E,"-").concat(e.idp,"-checkbox")})}))),l.createElement(p.Z,{hidden:!0}),l.createElement(s.Z.Row,{columns:1,className:"mt-6"},l.createElement(s.Z.Column,{mobile:16,tablet:16,computer:16},l.createElement(a.KM,{size:"small",loading:O,disabled:t,onClick:function(){var e;null==y||null===(e=y.current)||void 0===e||e.triggerSubmit()},ariaLabel:"Email provider form update button","data-componentid":"".concat(E,"-update-button")},b("extensions:develop.emailProviders.updateButton")))))))):null}}}]);