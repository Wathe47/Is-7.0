"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[12387,55392,47424,970,50583,33862,72387],{47424:(e,t,n)=>{n.r(t),n.d(t,{addSMSPublisher:()=>d,deleteSMSPublisher:()=>p,useSMSNotificationSenders:()=>u});var o=n(34148),a=n(67442),i=n(93129),c=n(24393),r=n(73508),s=n(83296),l=o.AsgardeoSPAClient.getInstance().httpRequest.bind(o.AsgardeoSPAClient.getInstance()),u=function(){var e={headers:{Accept:"application/json","Access-Control-Allow-Origin":c.h.getState().config.deployment.clientHost,"Content-Type":"application/json"},method:i.f2.GET,url:c.h.getState().config.endpoints.notificationSendersEndPoint+"/sms"},t=(0,r.Z)(e),n=t.data,o=t.error;return{data:n,error:o,isLoading:!o&&!n,isValidating:t.isValidating,mutate:t.mutate}},d=function(){var e={data:{contentType:"FORM",name:"SMSPublisher",properties:[{key:"channel.type",value:"choreo"}],provider:"choreo",providerURL:"https://console.choreo.dev/"},headers:{Accept:"application/json","Access-Control-Allow-Origin":c.h.getState().config.deployment.clientHost,"Content-Type":"application/json"},method:i.f2.POST,url:c.h.getState().config.endpoints.notificationSendersEndPoint+"/sms"};return l(e).then((function(e){if(201!==e.status)throw new a.u(s.SMSOTPConstants.ERROR_IN_CREATING_SMS_NOTIFICATION_SENDER,null,e.status,e.request,e,e.config);return Promise.resolve(e.data)})).catch((function(e){throw new a.u(s.SMSOTPConstants.ERROR_IN_CREATING_SMS_NOTIFICATION_SENDER,e.stack,e.code,e.request,e.response,e.config)}))},p=function(){var e={headers:{Accept:"application/json","Access-Control-Allow-Origin":c.h.getState().config.deployment.clientHost,"Content-Type":"application/json"},method:i.f2.DELETE,url:c.h.getState().config.endpoints.notificationSendersEndPoint+"/sms/SMSPublisher"};return l(e).then((function(e){if(204!==e.status)throw new a.u(s.SMSOTPConstants.ERROR_IN_DELETING_SMS_NOTIFICATION_SENDER,null,e.status,e.request,e,e.config);return Promise.resolve(e.data)})).catch((function(e){var t,n,o=s.SMSOTPConstants.ERROR_IN_DELETING_SMS_NOTIFICATION_SENDER;throw(null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.code)===s.SMSOTPConstants.ErrorMessages.SMS_NOTIFICATION_SENDER_DELETION_ERROR_ACTIVE_SUBS.getErrorCode()&&(o=s.SMSOTPConstants.ErrorMessages.SMS_NOTIFICATION_SENDER_DELETION_ERROR_ACTIVE_SUBS.getErrorMessage()),new a.u(o,e.stack,null===(n=e.response)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.code,e.request,e.response,e.config)}))}},55392:(e,t,n)=>{n.r(t),n.d(t,{addSMSPublisher:()=>o.addSMSPublisher,deleteSMSPublisher:()=>o.deleteSMSPublisher,useSMSNotificationSenders:()=>o.useSMSNotificationSenders});var o=n(47424)},970:(e,t,n)=>{n.r(t),n.d(t,{updateMyAccountMFAOptions:()=>o.updateMyAccountMFAOptions,updateMyAccountStatus:()=>o.updateMyAccountStatus,updateTotpConfigOptions:()=>o.updateTotpConfigOptions,useMyAccountData:()=>o.useMyAccountData,useMyAccountStatus:()=>o.useMyAccountStatus,useTotpConfigData:()=>o.useTotpConfigData});var o=n(50583)},50583:(e,t,n)=>{n.r(t),n.d(t,{updateMyAccountMFAOptions:()=>d,updateMyAccountStatus:()=>u,updateTotpConfigOptions:()=>p,useMyAccountData:()=>f,useMyAccountStatus:()=>m,useTotpConfigData:()=>g});var o=n(34148),a=n(67442),i=n(93129),c=n(73508),r=n(61263),s=n(33862),l=o.AsgardeoSPAClient.getInstance().httpRequest.bind(o.AsgardeoSPAClient.getInstance()).bind(o.AsgardeoSPAClient.getInstance()),u=function(e){var t={data:{attributes:[{key:"enable",value:e}],name:"status"},headers:{Accept:"application/json","Content-Type":"application/json"},method:i.f2.PUT,url:r.h.getState().config.endpoints.myAccountConfigMgt};return l(t).then((function(e){if(200!==e.status)throw new a.u(s.MyAccountManagementConstants.MYACCOUNT_STATUS_UPDATE_INVALID_STATUS_CODE_ERROR,null,e.status,e.request,e,e.config);return Promise.resolve(e.data)})).catch((function(e){throw new a.u(s.MyAccountManagementConstants.MYACCOUNT_STATUS_UPDATE_ERROR,e.stack,e.code,e.request,e.response,e.config)}))},d=function(e){var t={data:{attributes:[{key:"email_otp_enabled",value:e.emailOtpEnabled},{key:"sms_otp_enabled",value:e.smsOtpEnabled},{key:"totp_enabled",value:e.totpEnabled},{key:"backup_code_enabled",value:e.backupCodeEnabled}],name:"myaccount-2FA-config"},headers:{Accept:"application/json","Content-Type":"application/json"},method:i.f2.PUT,url:r.h.getState().config.endpoints.myAccountConfigMgt};return l(t).then((function(e){if(200!==e.status)throw new a.u(s.MyAccountManagementConstants.MYACCOUNT_STATUS_UPDATE_INVALID_STATUS_CODE_ERROR,null,e.status,e.request,e,e.config);return Promise.resolve(e.data)})).catch((function(e){throw new a.u(s.MyAccountManagementConstants.MYACCOUNT_STATUS_UPDATE_ERROR,e.stack,e.code,e.request,e.response,e.config)}))},p=function(e){var t={data:{attributes:[{key:"enrolUserInAuthenticationFlow",value:e.totpEnrollmentEnabled}],name:"myaccount-TOTP-config"},headers:{Accept:"application/json","Content-Type":"application/json"},method:i.f2.PUT,url:r.h.getState().config.endpoints.myAccountConfigMgt};return l(t).then((function(e){if(200!==e.status)throw new a.u(s.MyAccountManagementConstants.MYACCOUNT_STATUS_UPDATE_INVALID_STATUS_CODE_ERROR,null,e.status,e.request,e,e.config);return Promise.resolve(e.data)})).catch((function(e){throw new a.u(s.MyAccountManagementConstants.MYACCOUNT_STATUS_UPDATE_ERROR,e.stack,e.code,e.request,e.response,e.config)}))},m=function(){var e={headers:{Accept:"application/json","Content-Type":"application/json"},method:i.f2.GET,params:{},url:r.h.getState().config.endpoints.myAccountConfigMgt+"/status/enable"},t=(0,c.Z)(e,{shouldRetryOnError:!1}),n=t.data,o=t.error;return{data:n,error:o,isLoading:!n&&!o,isValidating:t.isValidating,mutate:t.mutate}},f=function(){var e={headers:{Accept:"application/json","Content-Type":"application/json"},method:i.f2.GET,params:{},url:r.h.getState().config.endpoints.myAccountConfigMgt+"/myaccount-2FA-config"},t=(0,c.Z)(e,{shouldRetryOnError:!1}),n=t.data,o=t.error;return{data:n,error:o,isLoading:!n&&!o,isValidating:t.isValidating,mutate:t.mutate}},g=function(){var e={headers:{Accept:"application/json","Content-Type":"application/json"},method:i.f2.GET,params:{},url:r.h.getState().config.endpoints.myAccountConfigMgt+"/myaccount-TOTP-config"},t=(0,c.Z)(e,{shouldRetryOnError:!1}),n=t.data,o=t.error;return{data:n,error:o,isLoading:!n&&!o,isValidating:t.isValidating,mutate:t.mutate}}},33862:(e,t,n)=>{n.r(t),n.d(t,{CHANNEL_TYPE:()=>o.CHANNEL_TYPE,MyAccountAttributeTypes:()=>o.MyAccountAttributeTypes,MyAccountManagementConstants:()=>o.MyAccountManagementConstants,TotpConfigAttributeTypes:()=>o.TotpConfigAttributeTypes,VALID_SMS_OTP_PROVIDERS:()=>o.VALID_SMS_OTP_PROVIDERS});var o=n(72387)},72387:(e,t,n)=>{function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,r(o.key),o)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=o(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:t+""}n.r(t),n.d(t,{CHANNEL_TYPE:()=>d,MyAccountAttributeTypes:()=>l,MyAccountManagementConstants:()=>s,TotpConfigAttributeTypes:()=>u,VALID_SMS_OTP_PROVIDERS:()=>p});var s=i((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}));c(s,"MYACCOUNT_STATUS_UPDATE_ERROR","An error occurred while updating status of the My Account Portal."),c(s,"MYACCOUNT_STATUS_UPDATE_INVALID_STATUS_CODE_ERROR","Received an invalid status code while updating status of the My Account Portal.");var l=function(e){return e.ENABLE="enable",e.EMAIL_OTP_ENABLED="email_otp_enabled",e.SMS_OTP_ENABLED="sms_otp_enabled",e.TOTP_ENABLED="totp_enabled",e.BACKUP_CODE_ENABLED="backup_code_enabled",e}({}),u=function(e){return e.ENROLL_USER_IN_AUTHENTICATION_FLOW="enrolUserInAuthenticationFlow",e}({}),d="SMSPublisher",p=["choreo","Twilio","Custom","Vonage"]},12387:(e,t,n)=>{n.r(t),n.d(t,{MyAccountSettingsEditPage:()=>_,default:()=>O});var o=n(93129),a=n(3356),i=n(20812),c=n(86727),r=n(44194),s=n(10479),l=n(59673),u=n(47245),d=n(73432),p=n(89141),m=n(39114),f=n(41206),g=n(26154),y=n(6776),E=n(24393),A=n(55392),S=n(970),v=n(33862);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,a,i,c,r=[],s=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(o=i.call(n)).done)&&(r.push(o.value),r.length!==t);s=!0);}catch(e){l=!0,a=e}finally{try{if(!s&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw a}}return r}}(e,t)||T(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var h="my-account-settings-form",_=function(e){var t=e["data-componentid"],n=(0,u.I0)(),C=(0,r.useRef)(null),_=(0,s.$)().t,O=(0,c.fQ)().getLink,M=(0,u.v9)((function(e){var t;return null==e||null===(t=e.config)||void 0===t||null===(t=t.deployment)||void 0===t||null===(t=t.accountApp)||void 0===t?void 0:t.tenantQualifiedPath})),R=b((0,r.useState)(E.$x.DEFAULT_MY_ACCOUNT_STATUS),2),P=R[0],N=R[1],I=b((0,r.useState)(!0),2),D=I[0],U=I[1],w=b((0,r.useState)(!1),2),L=w[0],k=w[1],V=b((0,r.useState)(!1),2),x=V[0],j=V[1],F=b((0,r.useState)(!1),2),B=F[0],q=F[1],Q=b((0,r.useState)(void 0),2),Y=Q[0],Z=Q[1],H=b((0,r.useState)(!1),2),G=H[0],$=H[1],z=b((0,r.useState)(!1),2),K=z[0],W=z[1],J=b((0,r.useState)(!1),2),X=J[0],ee=J[1],te=b((0,r.useState)(!1),2),ne=te[0],oe=te[1],ae=b((0,r.useState)(!1),2),ie=ae[0],ce=ae[1],re=b((0,r.useState)(!1),2),se=re[0],le=re[1],ue=b((0,r.useState)(!1),2),de=ue[0],pe=ue[1],me=b((0,r.useState)(!1),2),fe=me[0],ge=me[1],ye=(0,S.useMyAccountStatus)(),Ee=ye.data,Ae=ye.isLoading,Se=ye.error,ve=ye.mutate,be=(0,S.useMyAccountData)(),Te=be.data,Ce=be.isLoading,he=be.error,_e=be.isValidating,Oe=be.mutate,Me=(0,S.useTotpConfigData)(),Re=Me.data,Pe=Me.isLoading,Ne=Me.error,Ie=Me.isValidating,De=Me.mutate,Ue=(0,A.useSMSNotificationSenders)(),we=Ue.data,Le=Ue.error;(0,r.useEffect)((function(){E.m8.location.state===y.jo.APPLICATION_STATE&&$(!0)}),[]),(0,r.useEffect)((function(){if(Se)if(Se.response&&Se.response.data&&Se.response.data.description){var e;if(404===Se.response.status)return;n((0,a.V_)({description:null!==(e=Se.response.data.description)&&void 0!==e?e:_("applications:myaccount.fetchMyAccountStatus.error.description"),level:o.QU.ERROR,message:_("applications:myaccount.fetchMyAccountStatus.error.message")}))}else n((0,a.V_)({description:_("applications:myaccount.fetchMyAccountStatus.genericError.description"),level:o.QU.ERROR,message:_("applications:myaccount.fetchMyAccountStatus.genericError.message")}))}),[Se]),(0,r.useEffect)((function(){if(he)if(he.response&&he.response.data&&he.response.data.description){var e;if(404===he.response.status)return;n((0,a.V_)({description:null!==(e=he.response.data.description)&&void 0!==e?e:_("applications:myaccount.fetchMyAccountData.error.description"),level:o.QU.ERROR,message:_("applications:myaccount.fetchMyAccountData.error.message")}))}else n((0,a.V_)({description:_("applications:myaccount.fetchMyAccountData.genericError.description"),level:o.QU.ERROR,message:_("applications:myaccount.fetchMyAccountData.genericError.message")}))}),[he]),(0,r.useEffect)((function(){var e;if(Ne)if(null!==(e=Ne.response)&&void 0!==e&&null!==(e=e.data)&&void 0!==e&&e.description){var t;if(404===Ne.response.status)return;n((0,a.V_)({description:null!==(t=Ne.response.data.description)&&void 0!==t?t:_("applications:myaccount.fetchMyAccountData.error.description"),level:o.QU.ERROR,message:_("applications:myaccount.fetchMyAccountData.error.message")}))}else n((0,a.V_)({description:_("applications:myaccount.fetchMyAccountData.genericError.description"),level:o.QU.ERROR,message:_("applications:myaccount.fetchMyAccountData.genericError.message")}))}),[Ne]),(0,r.useEffect)((function(){if(!1===Ae&&!0===D){var e=E.$x.DEFAULT_MY_ACCOUNT_STATUS;if(Ee){var t=Ee.value;t&&"false"===t&&(e=!1)}N(e),U(!1)}Ve()}),[Ce,Ae,D,Ie,_e]),(0,r.useEffect)((function(){if(Le)n((0,a.V_)({description:_("extensions:develop.identityProviders.smsOTP.settings.errorNotifications.notificationSendersRetrievalError.description"),level:o.QU.ERROR,message:_("extensions:develop.identityProviders.smsOTP.settings.errorNotifications.notificationSendersRetrievalError.message")}));else if(we){var e,t=!1,i=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=T(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,r=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){r=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(r)throw i}}}}(we);try{for(i.s();!(e=i.n()).done;){var c=e.value;if(c.name===v.CHANNEL_TYPE&&v.VALID_SMS_OTP_PROVIDERS.includes(c.provider)){t=!0;break}}}catch(r){i.e(r)}finally{i.f()}W(t)}}),[we,Le]),(0,r.useEffect)((function(){ne||ie||se?ee(!0):(ee(!1),pe(!1))}),[ne,ie,se]),(0,r.useEffect)((function(){ne||ge(!1)}),[ne]);var ke=function(e){var t,n,o=null==Te||null===(t=Te.attributes)||void 0===t?void 0:t.filter((function(t){return t.key===e}));return(null==o?void 0:o.length)>0&&"true"===(null===(n=o[0])||void 0===n||null===(n=n.value)||void 0===n?void 0:n.toLowerCase())},Ve=function(){var e,t,n,o,a=ke(v.MyAccountAttributeTypes.EMAIL_OTP_ENABLED),i=ke(v.MyAccountAttributeTypes.SMS_OTP_ENABLED),c=ke(v.MyAccountAttributeTypes.TOTP_ENABLED),r=ke(v.MyAccountAttributeTypes.BACKUP_CODE_ENABLED),s=(e=v.TotpConfigAttributeTypes.ENROLL_USER_IN_AUTHENTICATION_FLOW,(null==(o=null==Re||null===(t=Re.attributes)||void 0===t?void 0:t.filter((function(t){return t.key===e})))?void 0:o.length)>0&&"true"===(null===(n=o[0])||void 0===n||null===(n=n.value)||void 0===n?void 0:n.toLowerCase()));oe(c),ce(a),le(i),c||(s=!1),a||i||c?ee(!0):(ee(!1),r=!1),pe(r),ge(s),Z({backupCodeEnabled:r,emailOtpEnabled:a,smsOtpEnabled:i,totpEnabled:c,totpEnrollmentEnabled:s})},xe=function(e){q(!0),(0,S.updateMyAccountStatus)(e).then((function(){N(e),ve(),n((0,a.V_)({description:_("applications:myaccount.notifications.success.description"),level:o.QU.SUCCESS,message:_("applications:myaccount.notifications.success.message")}))})).catch((function(e){var t,i,c,r,s,l,u;null!=e&&null!==(t=e.response)&&void 0!==t&&null!==(t=t.data)&&void 0!==t&&t.description?n((0,a.V_)({description:null!==(i=null!==(c=null==e||null===(r=e.response)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.description)&&void 0!==c?c:null==e||null===(s=e.response)||void 0===s||null===(s=s.data)||void 0===s?void 0:s.detail)&&void 0!==i?i:_("applications:myaccount.notifications.error.description"),level:o.QU.ERROR,message:null!==(l=null==e||null===(u=e.response)||void 0===u||null===(u=u.data)||void 0===u?void 0:u.message)&&void 0!==l?l:_("applications:myaccount.notifications.error.message")})):n((0,a.V_)({description:_("applications:myaccount.notifications.genericError.description"),level:o.QU.ERROR,message:_("applications:myaccount.notifications.genericError.message")}))})).finally((function(){q(!1)}))};return _e?r.createElement(c.Me,{isLoading:_e,className:"pt-5"}):r.createElement(c.Xg,{pageTitle:_("extensions:manage.myAccount.editPage.pageTitle"),title:_("extensions:manage.myAccount.editPage.pageTitle"),description:r.createElement(r.Fragment,null,_("extensions:manage.myAccount.editPage.description"),r.createElement(c.eb,{link:O("develop.applications.myaccount.learnMore")},_("common:learnMore"))),"data-componentid":"".concat(t,"-page-layout"),backButton:{"data-testid":"".concat(t,"-page-back-button"),onClick:function(){G?E.m8.push(E.$x.getPaths().get("APPLICATIONS")):E.m8.push(E.$x.getPaths().get("MY_ACCOUNT"))},text:_(G?"extensions:manage.myAccount.goBackToApplication":"extensions:manage.myAccount.goBackToMyAccount")},bottomMargin:!1,contentTopMargin:!0,pageHeaderMaxWidth:!0},r.createElement(m.Z,{label:_(P?"extensions:manage.serverConfigurations.generalEnabledLabel":"extensions:manage.serverConfigurations.generalDisabledLabel"),toggle:!0,onChange:function(e,t){t.checked?k(!0):j(!0)},checked:P,"data-testId":"".concat(t,"-enable-toggle")}),r.createElement(f.R,{innerRef:C},r.createElement(p.Z,{className:"mt-3"},r.createElement(p.Z.Row,{columns:1},r.createElement(p.Z.Column,{width:16},P?r.createElement(c.pJ,{className:"m-0 pb-4 pt-4","data-componentid":"my-account-link",padded:"very"},r.createElement(d.Z,null,r.createElement(d.Z.Item,null,r.createElement(p.Z,{verticalAlign:"middle"},r.createElement(p.Z.Column,{floated:"left",mobile:16,computer:10},r.createElement(d.Z.Description,{"data-componentid":"my-account-link-description"},_("extensions:manage.myAccount.editPage.myAccountUrlDescription"))),r.createElement(c.GI,{trigger:r.createElement(p.Z.Column,{mobile:16,computer:6},r.createElement(c.OR,{value:M,"data-componentid":"my-account-link-copy-field"})),content:_("extensions:manage.myAccount.editPage.myAccountUrlDescription"),position:"top center",size:"mini",hideOnScroll:!0,inverted:!0}))))):null,r.createElement(c.pJ,{className:"form-wrapper",padded:"very"},Ce||Pe?r.createElement(c.pO,null):r.createElement(i.l0,{id:h,initialValues:Y,uncontrolledForm:!0,validate:null,onSubmit:function(e){return function(e){q(!0),e.backupCodeEnabled=de,e.totpEnrollmentEnabled=fe,Promise.all([(0,S.updateMyAccountMFAOptions)(e),(0,S.updateTotpConfigOptions)(e)]).then((function(){Oe(),De(),n((0,a.V_)({description:_("applications:myaccount.notifications.success.description"),level:o.QU.SUCCESS,message:_("applications:myaccount.notifications.success.message")}))})).catch((function(e){var t,i,c,r,s,l,u;null!=e&&null!==(t=e.response)&&void 0!==t&&null!==(t=t.data)&&void 0!==t&&t.description?n((0,a.V_)({description:null!==(i=null!==(c=null==e||null===(r=e.response)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.description)&&void 0!==c?c:null==e||null===(s=e.response)||void 0===s||null===(s=s.data)||void 0===s?void 0:s.detail)&&void 0!==i?i:_("applications:myaccount.notifications.error.description"),level:o.QU.ERROR,message:null!==(l=null==e||null===(u=e.response)||void 0===u||null===(u=u.data)||void 0===u?void 0:u.message)&&void 0!==l?l:_("applications:myaccount.notifications.error.message")})):n((0,a.V_)({description:_("applications:myaccount.notifications.genericError.description"),level:o.QU.ERROR,message:_("applications:myaccount.notifications.genericError.message")}))})).finally((function(){q(!1)}))}(e)}},r.createElement(c.xv,null,_("extensions:manage.myAccount.editPage.mfaDescription")),r.createElement(i.gN.Checkbox,{ariaLabel:"totpEnabled",name:"totpEnabled",label:_("extensions:manage.myAccount.editPage.enableTotp"),required:!1,disabled:!P,width:16,listen:function(e){return oe(e)},"data-testid":"".concat(t,"-totp-toggle")}),r.createElement("div",{className:"ml-6"},r.createElement(i.gN.Checkbox,{ariaLabel:"totpEnrollmentEnabled",name:"totpEnrollmentEnabled",label:_("extensions:manage.myAccount.editPage.EnableTotpEnrollment"),required:!1,disabled:!P||!ne,width:16,listen:function(e){return ge(e)},"data-testid":"".concat(t,"-totp-enrollment-toggle"),checked:fe})),r.createElement(c.v0,{info:!0,className:"connector-info ml-6"},r.createElement(g.Z,{name:"info circle"}),_("extensions:manage.myAccount.editPage.totpEnrollmentInfo")),r.createElement(i.gN.Checkbox,{ariaLabel:"emailOtpEnabled",name:"emailOtpEnabled",label:_("extensions:manage.myAccount.editPage.enableEmailOtp"),required:!1,disabled:!P,width:16,listen:function(e){return ce(e)},"data-testid":"".concat(t,"-email-otp-toggle")}),r.createElement(i.gN.Checkbox,{ariaLabel:"smsOtpEnabled",name:"smsOtpEnabled",label:_("extensions:manage.myAccount.editPage.enableSmsOtp"),required:!1,disabled:!P||!K,width:16,listen:function(e){return le(e)},"data-testid":"".concat(t,"-sms-otp-toggle")}),!K&&r.createElement(c.xv,{compact:!0,weight:"300",className:"field-compact-description pb-3 pt-0",size:"13px"},r.createElement(l.c,{i18nKey:"extensions:manage.myAccount.editPage.smsOtpEnableDescription"},"To enable the SMS OTP authentication option, you need to set up the SMS OTP authenticator for your organization.",r.createElement(c.eb,{link:O("develop.applications.myaccount.smsOtp")},"Learn more"))),r.createElement("div",{className:"mt-3"},r.createElement(c.xv,null,_("extensions:manage.myAccount.editPage.backupCodeDescription"))),r.createElement("div",{className:"mt-0 mb-0"},r.createElement(i.gN.Checkbox,{ariaLabel:"backupCodeEnabled",name:"backupCodeEnabled",label:_("extensions:manage.myAccount.editPage.enableBackupCodes"),required:!1,disabled:!P||!X,width:16,"data-testid":"".concat(t,"-backup-code-toggle"),listen:function(e){return pe(e)},checked:de})),!X&&r.createElement("div",{className:"mt-0 mb-0"},r.createElement(c.v0,{content:_("extensions:manage.myAccount.editPage.backupCodeInfo"),type:"warning"})),r.createElement(i.gN.Button,{form:h,size:"small",buttonType:"primary_btn",ariaLabel:"Self registration update button",name:"update-button","data-testid":"".concat(t,"-submit-button"),disabled:!P,loading:B,label:_("common:update"),hidden:!P}))))))),L&&r.createElement(c.cV,{onClose:function(){return k(!1)},type:"warning",open:L,primaryAction:_("common:confirm"),secondaryAction:_("common:cancel"),onSecondaryActionClick:function(){k(!1)},onPrimaryActionClick:function(){k(!1),xe(!0)},closeOnDimmerClick:!1},r.createElement(c.cV.Header,null,_("applications:myaccount.Confirmation.enableConfirmation.heading")),r.createElement(c.cV.Message,{attached:!0,warning:!0},_("applications:myaccount.Confirmation.enableConfirmation.message")),r.createElement(c.cV.Content,null,_("applications:myaccount.Confirmation.enableConfirmation.content"))),x&&r.createElement(c.cV,{onClose:function(){return j(!1)},type:"warning",open:x,primaryAction:_("common:confirm"),secondaryAction:_("common:cancel"),onSecondaryActionClick:function(){j(!1)},onPrimaryActionClick:function(){j(!1),xe(!1)},closeOnDimmerClick:!1},r.createElement(c.cV.Header,null,_("applications:myaccount.Confirmation.disableConfirmation.heading")),r.createElement(c.cV.Message,{attached:!0,warning:!0},_("applications:myaccount.Confirmation.disableConfirmation.message")),r.createElement(c.cV.Content,null,_("applications:myaccount.Confirmation.disableConfirmation.content"))))};_.defaultProps={"data-componentid":"my-account-settings-edit-page"};const O=_}}]);