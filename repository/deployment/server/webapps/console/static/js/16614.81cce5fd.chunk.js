"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[16614],{16614:(e,n,t)=>{t.r(n),t.d(n,{AdminSessionAdvisoryBannerEditPage:()=>b,default:()=>y});var a=t(20849),o=t(93129),r=t(3356),i=t(20812),s=t(86727),c=t(44194),l=t(10479),d=t(47245),u=t(39114),f=t(24393),g=t(62987);function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,o,r,i,s=[],c=!0,l=!1;try{if(r=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(a=r.call(t)).done)&&(s.push(a.value),s.length!==n);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(l)throw o}}return s}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return v(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var p="governance-connectors-self-registration-form",b=function(e){var n=(0,l.$)().t,t=(0,d.I0)(),v=e["data-componentid"],b=m((0,c.useState)(void 0),2),y=b[0],C=b[1],A=(0,g.RF)(),h=A.data,E=A.isLoading,S=A.error;(0,c.useEffect)((function(){h&&C(h)}),[h]),(0,c.useEffect)((function(){S&&t((0,r.V_)({description:n("extensions:develop.branding.notifications.fetch.genericError.description"),level:o.QU.ERROR,message:n("extensions:develop.branding.notifications.fetch.genericError.message")}))}),[S]);var B=function(e,a){(0,g.Bi)(e).then((function(){C(e),a?e.enableBanner?t((0,r.V_)({description:n("console:manage.features.serverConfigs.adminAdvisory.notifications.enableAdminAdvisoryBanner.success.description"),level:o.QU.SUCCESS,message:n("console:manage.features.serverConfigs.adminAdvisory.notifications.enableAdminAdvisoryBanner.success.message")})):t((0,r.V_)({description:n("console:manage.features.serverConfigs.adminAdvisory.notifications.disbleAdminAdvisoryBanner.success.description"),level:o.QU.SUCCESS,message:n("console:manage.features.serverConfigs.adminAdvisory.notifications.disbleAdminAdvisoryBanner.success.message")})):t((0,r.V_)({description:n("console:manage.features.serverConfigs.adminAdvisory.notifications.updateConfigurations.success.description"),level:o.QU.SUCCESS,message:n("console:manage.features.serverConfigs.adminAdvisory.notifications.updateConfigurations.success.message")}))})).catch((function(e){e.response&&e.response.data&&e.response.data.description&&t((0,r.V_)({description:e.response.data.description,level:o.QU.ERROR,message:n("console:manage.features.serverConfigs.adminAdvisory.notifications.updateConfigurations.error.message")})),t((0,r.V_)({description:n("console:manage.features.serverConfigs.adminAdvisory.notifications.updateConfigurations.genericError.description"),level:o.QU.ERROR,message:n("console:manage.features.serverConfigs.adminAdvisory.notifications.updateConfigurations.genericError.message")}))}))};return c.createElement(s.Xg,{title:n("console:manage.features.serverConfigs.adminAdvisory.configurationEditSection.pageHeading"),pageTitle:n("console:manage.features.serverConfigs.adminAdvisory.configurationEditSection.pageHeading"),description:n("console:manage.features.serverConfigs.adminAdvisory.configurationEditSection.pageSubheading"),"data-componentid":"".concat(v,"-page-layout"),backButton:{"data-testid":"".concat(v,"-page-back-button"),onClick:function(){f.m8.push(f.$x.getPaths().get("SERVER"))},text:n("pages:rolesEdit.backButton",{type:"Server"})},bottomMargin:!1,contentTopMargin:!0,pageHeaderMaxWidth:!0,isLoading:E},c.createElement(u.Z,{label:(null!=y&&y.enableBanner,n("console:manage.features.serverConfigs.adminAdvisory.configurationSection.enabled")),toggle:!0,onChange:function(e,n){e.preventDefault();var t={bannerContent:null==y?void 0:y.bannerContent,enableBanner:n.checked};B(t,!0)},checked:null==y?void 0:y.enableBanner,readOnly:null,"data-componentid":"".concat(v,"-enable-toggle")}),c.createElement(a.Z,{className:"mt-5"},c.createElement(a.Z,null,c.createElement(s.pJ,{className:"form-wrapper",padded:"very"},c.createElement(i.l0,{id:p,initialValues:y,uncontrolledForm:!1,validate:null,onSubmit:function(e){return function(e){var n,t={bannerContent:null==e||null===(n=e.bannerContent)||void 0===n?void 0:n.toString(),enableBanner:y.enableBanner};B(t,!1)}(e)}},c.createElement(i.gN.Textarea,{ariaLabel:"Admin Advisory Banner Content",name:"bannerContent",label:n("console:manage.features.serverConfigs.adminAdvisory.configurationEditSection.form.bannerContent.label"),required:!1,placeholder:n("console:manage.features.serverConfigs.adminAdvisory.configurationEditSection.form.bannerContent.placeholder"),initialValue:null==y?void 0:y.bannerContent,readOnly:!(null!=y&&y.enableBanner),maxLength:300,minLength:3,"data-componentid":"".concat(v,"-content"),width:16,hint:n("console:manage.features.serverConfigs.adminAdvisory.configurationEditSection.form.bannerContent.hint")}),c.createElement(i.gN.Button,{form:p,size:"small",buttonType:"primary_btn",ariaLabel:"Update button",name:"update-button","data-componentid":"".concat(v,"-update-button"),label:n("common:update"),hidden:!(null!=y&&y.enableBanner)}))))))};b.defaultProps={"data-componentid":"admin-advisory-edit"};const y=b}}]);