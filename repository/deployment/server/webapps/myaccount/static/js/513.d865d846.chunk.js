"use strict";(self.webpackChunk_wso2is_myaccount=self.webpackChunk_wso2is_myaccount||[]).push([[513],{84513:(e,n,t)=>{t.r(n),t.d(n,{default:()=>R});var l=t(71015),r=t(54833),o=t(43215),i=t(44194),u=t(10479),c=t(31126),a=t(60824),s=t(75026),d=t(50433),f=t(24524),v=t(76707),E=t(70516),m=t(40117),C=t(57435);function y(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var l,r,o,i,u=[],c=!0,a=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(l=o.call(t)).done)&&(u.push(l.value),u.length!==n);c=!0);}catch(e){a=!0,r=e}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(a)throw r}}return u}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return I(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,l=new Array(n);t<n;t++)l[t]=e[t];return l}var A=function(e){var n,t,I,A,R,T,p=e.enableNonLocalCredentialUserView,S=(0,u.$)().t,h=(0,c.I0)(),b=(0,c.v9)((function(e){return e.authenticationInformation})),w=(0,c.v9)((function(e){var n;return null==e||null===(n=e.config)||void 0===n||null===(n=n.ui)||void 0===n?void 0:n.features})),_=(0,c.v9)((function(e){var n;return null==e||null===(n=e.config)||void 0===n||null===(n=n.ui)||void 0===n?void 0:n.disableMFAforSuperTenantUser})),g=(0,c.v9)((function(e){var n;return null==e||null===(n=e.config)||void 0===n||null===(n=n.ui)||void 0===n?void 0:n.disableMFAForFederatedUsers})),N=(0,c.v9)((function(e){var n;return null==e||null===(n=e.authenticationInformation)||void 0===n?void 0:n.scope})),O=(0,c.v9)((function(e){return e.authenticationInformation.profileInfo.isReadOnly})),U=(0,c.v9)((function(e){return e.authenticationInformation.hasLocalAccount})),F=y((0,i.useState)(!1),2),Y=F[0],$=F[1],D=y((0,i.useState)(null),2),Z=D[0],x=D[1],V=(0,i.useRef)(null),k=(0,i.useRef)(null),L=(0,i.useRef)(null);(0,i.useEffect)((function(){setTimeout((function(){switch(e.location.hash){case"#".concat(d.F$.CONSENTS_CONTROL):V.current.scrollIntoView({behavior:"smooth",block:"center"});break;case"#".concat(d.F$.ACCOUNT_ACTIVITY):L.current.scrollIntoView({behavior:"smooth",block:"center"});break;case"#".concat(d.F$.ACCOUNT_SECURITY):k.current.scrollIntoView({behavior:"smooth",block:"center"})}}),100)}),[e.location]),(0,i.useEffect)((function(){var e;if(p){var n=null==b||null===(e=b.profileInfo)||void 0===e||null===(e=e[v.k.scim.customEnterpriseSchema])||void 0===e?void 0:e[null===l.Cb||void 0===l.Cb?void 0:l.Cb.SCIM2_SCHEMA_DICTIONARY.get("LOCAL_CREDENTIAL_EXISTS")];n&&"false"==n&&$(!0)}}),[null==b?void 0:b.profileInfo]),(0,i.useEffect)((function(){var e;if(null!=b&&null!==(e=b.profileInfo)&&void 0!==e&&e.userName){var n=(0,E.tF)(b.profileInfo.userName);x(n)}}),[null==b?void 0:b.profileInfo]);var X=function(e){h((0,m.V_)(e))},M=function(){return d.$x.getTenant()===d.$x.getSuperTenant()};return i.createElement(o.Xg,{pageTitle:"Security",title:S("myAccount:pages.security.title"),description:Y?"Secure your account by managing your sessions":S("myAccount:pages.security.subTitle")},i.createElement(a.Z,null,!C.DN.isProfileReadOnly(O)&&!Y&&(0,r.Xr)(null==w?void 0:w.security,null==w||null===(n=w.security)||void 0===n||null===(n=n.scopes)||void 0===n?void 0:n.read,N)&&(0,r.cr)(null==w?void 0:w.security,d.$x.FEATURE_DICTIONARY.get("SECURITY_CHANGE_PASSWORD"))?i.createElement(a.Z.Row,null,i.createElement(a.Z.Column,{width:16},i.createElement(s.GR,{onAlertFired:X}))):null,!C.DN.isProfileReadOnly(O)&&!Y&&(0,r.Xr)(null==w?void 0:w.security,null==w||null===(t=w.security)||void 0===t||null===(t=t.scopes)||void 0===t?void 0:t.read,N)&&(0,r.cr)(null==w?void 0:w.security,d.$x.FEATURE_DICTIONARY.get("SECURITY_ACCOUNT_RECOVERY"))?i.createElement(a.Z.Row,null,i.createElement(a.Z.Column,{width:16},i.createElement("div",{ref:k},i.createElement(s.Rx,{featureConfig:w,onAlertFired:X})))):null,!U||!(0,r.Xr)(null==w?void 0:w.security,null==w||null===(I=w.security)||void 0===I||null===(I=I.scopes)||void 0===I?void 0:I.read,N)||(!Y||g&&M())&&Y||!(0,r.cr)(null==w?void 0:w.security,d.$x.FEATURE_DICTIONARY.get("SECURITY_MFA"))||_&&M()?null:i.createElement(a.Z.Row,null,i.createElement(a.Z.Column,{width:16},i.createElement(s.P$,{featureConfig:w,onAlertFired:X,userStore:Z}))),(0,r.Xr)(null==w?void 0:w.security,null==w||null===(A=w.security)||void 0===A||null===(A=A.scopes)||void 0===A?void 0:A.read,N)&&(0,r.cr)(null==w?void 0:w.security,d.$x.FEATURE_DICTIONARY.get("SECURITY_LOGIN_VERIFY_DATA"))?i.createElement(a.Z.Row,null,i.createElement(a.Z.Column,{width:16},i.createElement(s.wD,{featureConfig:w,onAlertFired:X}))):null,(0,r.Xr)(null==w?void 0:w.security,null==w||null===(R=w.security)||void 0===R||null===(R=R.scopes)||void 0===R?void 0:R.read,N)&&(0,r.cr)(null==w?void 0:w.security,d.$x.FEATURE_DICTIONARY.get("SECURITY_ACTIVE_SESSIONS"))?i.createElement(a.Z.Row,null,i.createElement(a.Z.Column,{width:16},i.createElement("div",{ref:L},i.createElement(s.E4,{onAlertFired:X})))):null,U&&(0,r.Xr)(null==w?void 0:w.security,null==w||null===(T=w.security)||void 0===T||null===(T=T.scopes)||void 0===T?void 0:T.read,N)&&(0,r.cr)(null==w?void 0:w.security,d.$x.FEATURE_DICTIONARY.get("SECURITY_CONSENTS"))&&f.x.utils.isManageConsentAllowedForUser(Z)?i.createElement(a.Z.Row,null,i.createElement(a.Z.Column,{width:16},i.createElement("div",null,i.createElement(s.pj,{onAlertFired:X})),i.createElement("div",{ref:V}))):null))};A.defaultProps={enableNonLocalCredentialUserView:f.x.nonLocalCredentialUser.enableNonLocalCredentialUserView};const R=A}}]);