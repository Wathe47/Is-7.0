"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[93180],{93180:(e,t,n)=>{n.r(t),n.d(t,{InviteeRoleSelection:()=>y});var l=n(86727),r=n(44194),o=n(10479),a=n(47018),i=n(77757),u=n(62508),s=n(89141),c=n(12742);function d(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||f(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,r,o,a,i=[],u=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(l=o.call(n)).done)&&(i.push(l.value),i.length!==t);u=!0);}catch(e){s=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return i}}(e,t)||f(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var y=function(e){var t=e.invitee,n=e.showSelectionModal,f=e.handleSelectionModalClose,p=e.handleInviteeRolesUpdate,y=e.readOnly,v=e.isSubmitting,b=(0,o.$)().t,h=(0,l.fQ)().getLink,g=m((0,r.useState)(void 0),2),E=g[0],S=g[1],w=m((0,r.useState)(void 0),2)[1],Z=m((0,r.useState)(void 0),2),A=Z[0],k=Z[1],C=m((0,r.useState)(!1),2)[1],M=m((0,r.useState)(!1),1)[0];(0,r.useEffect)((function(){var e=[];C(!0),(0,c.Sd)(null).then((function(t){t.data.Resources.map((function(t){"system"!==t.displayName&&"everyone"!==t.displayName&&"selfsignup"!==t.displayName&&e.push(t)})),S(e),w(e)})).finally((function(){C(!1)}))}),[]),(0,r.useEffect)((function(){null!=t&&t.roles&&k(t.roles)}),[null==t?void 0:t.roles]),(0,r.useEffect)((function(){if(M){var e=d(null==t?void 0:t.roles);E.map((function(t){e.push(t.displayName)})),k(e)}else k([])}),[M]);return r.createElement(a.Z,{open:n,size:"small",className:"user-roles attribute-modal",dimmer:"blurring"},r.createElement(a.Z.Header,null,b("invite:rolesUpdateModal.header"),r.createElement(l.X6,{subHeading:!0,ellipsis:!0,as:"h6"},b("invite:rolesUpdateModal.subHeader"),r.createElement(l.eb,{link:h("manage.users.collaboratorAccounts.roles.learnMore")},b("extensions:common.learnMore")))),r.createElement(a.Z.Content,null,r.createElement(l.pJ,null,r.createElement(i.Z.Group,null,r.createElement(u.Z,{hidden:!0}),null==E?void 0:E.map((function(e,t){var n,l=null==e||null===(n=e.displayName)||void 0===n?void 0:n.split("/");if((null==l?void 0:l.length)>=1&&!l.includes("everyone")&&!l.includes("system")&&!l.includes("selfsignup"))return r.createElement(r.Fragment,null,r.createElement(i.Z.Radio,{onChange:function(){return function(e){var t=[];t.push(e),k(t)}(null==e?void 0:e.displayName)},key:t,label:(null==l?void 0:l.length)>1?l[1]:l[0],checked:A.includes(null==e?void 0:e.displayName),"data-testid":"user-mgt-update-roles-modal-unselected-roles",readOnly:y}),r.createElement(u.Z,{hidden:!0}))}))))),r.createElement(a.Z.Actions,null,r.createElement(s.Z,null,r.createElement(s.Z.Row,{column:2},r.createElement(s.Z.Column,{mobile:8,tablet:8,computer:8},r.createElement(l.Qj,{"data-testid":"group-mgt-update-roles-modal-cancel-button",floated:"left",onClick:f},b("common:cancel"))),r.createElement(s.Z.Column,{mobile:8,tablet:8,computer:8},!y&&r.createElement(l.KM,{"data-testid":"group-mgt-update-roles-modal-save-button",floated:"right",onClick:function(){return p(null==t?void 0:t.id,A)},loading:v,disabled:v},b("common:save")))))))}}}]);