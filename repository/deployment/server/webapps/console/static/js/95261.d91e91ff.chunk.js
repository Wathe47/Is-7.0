"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[95261],{95261:(e,t,n)=>{n.r(t),n.d(t,{AddUserStepContent:()=>y});var a=n(24184),r=n(86727),i=n(44194),l=n(10479),s=n(59673),o=n(47245),c=n(26154),u=n(73432),d=n(74343),p=n(79589),m=n(32514),f=n(80724);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i,l,s=[],o=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(a=i.call(n)).done)&&(s.push(a.value),s.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{if(!o&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw r}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var y=function(e){var t,n,v=e["data-testid"],y=(0,l.$)().t,g=(0,o.v9)((function(e){return e.config.ui.features})),b=h((0,i.useState)(!1),2),E=b[0],w=b[1],k=h((0,i.useState)([]),2),S=k[0],x=k[1],A=h((0,i.useState)(!1),2),N=A[0],U=A[1],O=p.lD.getInstance();return i.createElement("div",{"data-testid":v,className:"add-user-step"},i.createElement(r.xv,null,i.createElement(s.c,{i18nKey:"extensions:console.application.quickStart.addUserOption.description"},"You need a ",i.createElement("strong",null,"user account")," to log in to the application.")),i.createElement(a.di,{when:null==g||null===(t=g.users)||void 0===t||null===(t=t.scopes)||void 0===t?void 0:t.create},i.createElement(r.xv,null,i.createElement(s.c,{i18nKey:"extensions:console.application.quickStart.addUserOption.hint"},"If you don\u2019t already have a user account, click the below button to create one. Alternatively, go to",i.createElement("a",{onClick:function(){O.publish("application-quick-start-click-navigate-to-user-management"),window.open(d.$x.getClientOrigin()+d.$x.getPaths().get("USERS"),"","noopener")},className:"external-link link pointing primary"}," Manage > Users ",i.createElement(c.Z,{name:"external"}))," and create users.")),i.createElement(r.zx,{basic:!0,primary:!0,className:"info add-user-step-button",onClick:function(){O.publish("application-quick-start-click-add-user"),w(!0)}},y("extensions:manage.users.buttons.addUserBtn")),i.createElement(u.Z,{className:"add-user-step-list"},N?i.createElement(r.pO,null):null==S?void 0:S.map((function(e,t){return i.createElement(u.Z.Item,{key:t,className:"list-item"},i.createElement("div",null,i.createElement(c.Z,{className:"list-icon",name:"check",color:"green"}),"User ",i.createElement("strong",null,e)," added successfully."))})))),i.createElement(a.di,{when:[],notWhen:null==g||null===(n=g.users)||void 0===n||null===(n=n.scopes)||void 0===n?void 0:n.create},i.createElement(r.xv,{compact:!0},y("extensions:console.application.quickStart.addUserOption.message"))),E&&i.createElement(f.t,{"data-testid":"user-mgt-add-user-wizard-modal",closeWizard:function(){return w(!1)},onSuccessfulUserAddition:function(e){O.publish("application-finish-adding-user"),function(e){U(!0),(0,m.M_)(e,null).then((function(e){if(e.emails&&Array.isArray(e.emails)&&e.emails.length>0){var t,n=S;n.push((null==e||null===(t=e.userName.split("/"))||void 0===t?void 0:t.length)>1?null==e?void 0:e.userName.split("/")[1]:null==e?void 0:e.userName.split("/")[0]),x(n)}})).catch((function(){})).finally((function(){U(!1)}))}(e)},emailVerificationEnabled:!1,requiredSteps:["BasicDetails"],submitStep:"BasicDetails",hiddenFields:["firstName","lastName"],showStepper:!1,requestedPasswordOption:"create-password",title:"Add User",description:"Follow the steps to add a new user"}))};y.defaultProps={"data-testid":"add-user-step-content"}}}]);