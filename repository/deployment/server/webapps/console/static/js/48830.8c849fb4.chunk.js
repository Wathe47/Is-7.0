"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[48830],{48830:(e,n,t)=>{t.r(n),t.d(n,{ApplicationRoles:()=>S});var o=t(24184),i=t(67442),l=t(93129),a=t(3356),s=t(66112),c=t(86727),r=t(44194),d=t(10479),p=t(47245),u=t(12638),m=t(26154),f=t(89141),v=t(62508),g=t(29537),h=t(51670),E=t(24393),R=t(99705);function y(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o,i,l,a,s=[],c=!0,r=!1;try{if(l=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(o=l.call(t)).done)&&(s.push(o.value),s.length!==n);c=!0);}catch(e){r=!0,i=e}finally{try{if(!c&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(r)throw i}}return s}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var S=function(e){var n,t,b,S,x,w,A=e.application,C=e["data-componentid"],k=(0,d.$)().t,L=(0,p.I0)(),M=(0,c.fQ)().getLink,I=y((0,c.ZK)(),3),P=I[0],Z=I[1],H=I[2],O=(0,p.v9)((function(e){return e.organization.organization})),T=(0,p.v9)((function(e){return e.config.ui.features})),V=(0,o.EV)(null==T||null===(n=T.applicationRoles)||void 0===n||null===(n=n.scopes)||void 0===n?void 0:n.read),z=(0,o.EV)(null==T||null===(t=T.applicationRoles)||void 0===t||null===(t=t.scopes)||void 0===t?void 0:t.update),_=(0,o.EV)(null==T||null===(b=T.applicationRoles)||void 0===b||null===(b=b.scopes)||void 0===b?void 0:b.delete),U=y((0,r.useState)(!0),2),Q=U[0],j=U[1],N=y((0,r.useState)(!1),2),D=N[0],J=N[1],$=y((0,r.useState)(!1),2),F=$[0],K=$[1],X=y((0,r.useState)(!1),2),B=X[0],W=X[1],q=y((0,r.useState)(!1),2),G=q[0],Y=q[1],ee=y((0,r.useState)([]),2),ne=ee[0],te=ee[1],oe=y((0,r.useState)(),2),ie=oe[0],le=oe[1],ae=y((0,r.useState)(null),2),se=ae[0],ce=ae[1],re=y((0,r.useState)(void 0),2),de=re[0],pe=re[1],ue=y((0,r.useState)(""),2),me=ue[0],fe=ue[1],ve=y((0,r.useState)(E.ru.DEFAULT_RESOURCE_LIST_ITEM_LIMIT),2),ge=ve[0],he=ve[1],Ee=y((0,r.useState)(""),2),Re=Ee[0],ye=Ee[1],be=y((0,r.useState)(""),2),Se=be[0],xe=be[1],we=y((0,r.useState)(void 0),2),Ae=we[0],Ce=we[1],ke=y((0,r.useState)(void 0),2),Le=ke[0],Me=ke[1],Ie=y((0,r.useState)(1),2),Pe=Ie[0],Ze=Ie[1],He=y((0,r.useState)([]),2),Oe=He[0],Te=He[1],Ve=y((0,s.cC)(),2),ze=Ve[0],_e=Ve[1],Ue=E.m8.location.pathname.split("/"),Qe=Ue[Ue.length-1].split("#")[0],je=null==A||null===(S=A.advancedConfigurations)||void 0===S?void 0:S.fragment,Ne=(0,R.useSharedApplicationData)(Qe,null==O?void 0:O.id),De=Ne.data,Je=Ne.isLoading,$e=Ne.error;(0,r.useEffect)((function(){De instanceof i.u||$e?Ye():De&&null!=De&&De.sharedApplications&&Te(null==De?void 0:De.sharedApplications)}),[De]),(0,r.useEffect)((function(){var e,n=!1,t=!1;null==se||null===(e=se.links)||void 0===e||e.forEach((function(e){if("after"===e.rel){var o=e.href.split("after=")[1];ye(o),Ce(!0),n=!0}if("before"===e.rel){var i=e.href.split("before=")[1];xe(i),Me(!0),t=!0}})),n||(ye(""),Ce(!1)),t||(xe(""),Me(!1))}),[se]),(0,r.useEffect)((function(){Fe(Qe,null,null,me||null,ge)}),[ge,me]);var Fe=(0,r.useCallback)((function(e,n,t,o,i){(0,R.getApplicationRolesList)(e,n,t,o,i).then((function(e){ce(e),te(e.roles)})).catch((function(e){var n,t,o,i,s,c,r;null!=e&&null!==(n=e.response)&&void 0!==n&&null!==(n=n.data)&&void 0!==n&&n.description?L((0,a.V_)({description:null!==(t=null!==(o=null==e||null===(i=e.response)||void 0===i||null===(i=i.data)||void 0===i?void 0:i.description)&&void 0!==o?o:null==e||null===(s=e.response)||void 0===s||null===(s=s.data)||void 0===s?void 0:s.detail)&&void 0!==t?t:k("extensions:develop.applications.edit.sections.roles.notifications.fetchApplicationRoles.error.description"),level:l.QU.ERROR,message:null!==(c=null==e||null===(r=e.response)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.message)&&void 0!==c?c:k("extensions:develop.applications.edit.sections.roles.notifications.fetchApplicationRoles.error.message")})):(L((0,a.V_)({description:k("extensions:develop.applications.edit.sections.roles.notifications.fetchApplicationRoles.genericError.description"),level:l.QU.ERROR,message:k("extensions:develop.applications.edit.sections.roles.notifications.fetchApplicationRoles.genericError.message")})),ce({links:[],roles:[]}),te([]))})).finally((function(){j(!1)}))}),[R.getApplicationRolesList,j]),Ke=(0,r.useCallback)((function(){Ze(1),_e()}),[Ze,_e]),Xe=(0,r.useCallback)((function(){fe(""),Ke()}),[fe,Ke]),Be=(0,r.useCallback)((function(e,n){var t=parseInt(null==n?void 0:n.activePage);t>Pe?Fe(Qe,null,Re,me,ge):t<Pe&&Fe(Qe,Se,null,me,ge),Ze(t)}),[Pe,me,ge,Re,Se]),We=(0,r.useCallback)((function(e,n){he(n.value),Ke()}),[he,Ke]),qe=function(e){le(e),K(!0)},Ge=function(){Fe(Qe,null,null,null,null)},Ye=function(){L((0,a.V_)({description:k("extensions:console.applicationRoles.roleMapping.notifications.sharedApplication.error.description"),level:l.QU.ERROR,message:k("extensions:console.applicationRoles.roleMapping.notifications.sharedApplication.error.message")}))},en=function(){return me&&0===ne.length?r.createElement(c.$J,{action:r.createElement(c.Qj,{onClick:function(){return fe("")}},k("extensions:develop.applications.edit.sections.roles.placeHolders.emptySearchResults.action")),image:(0,E.jF)().emptySearch,imageSize:"tiny",title:k("extensions:develop.applications.edit.sections.roles.placeHolders.emptySearchResults.title"),subtitle:[k("extensions:develop.applications.edit.sections.roles.placeHolders.emptySearchResults.subtitles.0",{query:me})],"data-componentid":"".concat(C,"-empty-search-placeholder-icon")}):0===ne.length?r.createElement(c.$J,{className:"list-placeholder",action:!je&&r.createElement(o.di,{when:(null==T||null===(e=T.applications)||void 0===e||null===(e=e.scopes)||void 0===e?void 0:e.create)&&(null==T||null===(n=T.applicationRoles)||void 0===n||null===(n=n.scopes)||void 0===n?void 0:n.create)},r.createElement(c.KM,{onClick:function(){J(!0)}},r.createElement(m.Z,{name:"add"}),k("extensions:develop.applications.edit.sections.roles.placeHolders.emptyList.action"))),image:(0,E.jF)().newList,imageSize:"tiny",title:k("extensions:develop.applications.edit.sections.roles.placeHolders.emptyList.title"),subtitle:[k("extensions:develop.applications.edit.sections.roles.placeHolders.emptyList.subtitles.0")],"data-componentid":"".concat(C,"-empty-placeholder")}):null;var e,n};return r.createElement(c.pJ,{loading:Q||Je,padded:"very","data-componentid":C},r.createElement(f.Z,null,r.createElement(f.Z.Row,null,r.createElement(f.Z.Column,{className:"heading-wrapper",computer:10},r.createElement(c.X6,{as:"h4"},k("extensions:develop.applications.edit.sections.roles.heading")),r.createElement(c.X6,{subHeading:!0,ellipsis:!0,as:"h6"},k(je?"extensions:develop.applications.edit.sections.roles.subHeadingAlt":"extensions:develop.applications.edit.sections.roles.subHeading"),r.createElement(c.eb,{link:M("develop.applications.roles.learnMore")},k("extensions:common.learnMore")))),r.createElement(o.di,{when:(null==T||null===(x=T.applications)||void 0===x||null===(x=x.scopes)||void 0===x?void 0:x.create)&&(null==T||null===(w=T.applicationRoles)||void 0===w||null===(w=w.scopes)||void 0===w?void 0:w.create)},r.createElement(f.Z.Column,{className:"action-wrapper",computer:6},r.createElement("div",{className:"floated right action"},ne.length>0&&!je&&r.createElement(c.KM,{"data-componentid":"".concat(C,"-add-new-role-button"),onClick:function(){return J(!0)}},r.createElement(m.Z,{name:"add"}),k("extensions:develop.applications.edit.sections.roles.buttons.newRole"))))))),r.createElement(v.Z,{hidden:!0}),r.createElement(f.Z,null,r.createElement(f.Z.Row,null,r.createElement(f.Z.Column,null,r.createElement(c.PS,{currentListSize:ne.length,listItemLimit:ge,onItemsPerPageDropdownChange:We,onPageChange:Be,showPagination:!0,showTopActionPanel:!1,showPaginationPageLimit:!1,totalPages:10,totalListSize:ne.length,paginationOptions:{disableNextButton:!Ae,disablePreviousButton:!Le},resetPagination:ze,activePage:Pe,"data-componentid":"".concat(C,"-list-layout")},r.createElement(c.wQ,{readOnly:!0,className:"application-roles-table",isLoading:!1,onSearchQueryClear:Xe,actions:[{"data-componentid":"".concat(C,"-item-edit-button"),hidden:function(){return!z||je},icon:function(){return"pencil alternate"},onClick:function(e,n){return qe(n)},popupText:function(){return k("common:edit")},renderer:"semantic-icon"},{"data-componentid":"".concat(C,"-item-delete-button"),hidden:function(){return!_||je},icon:function(){return"trash alternate"},onClick:function(e,n){return function(e){pe(e),W(!0)}(n)},popupText:function(){return k("common:delete")},renderer:"semantic-icon"},{"data-componentid":"".concat(C,"-item-view-button"),hidden:function(){return!V||!je},icon:function(){return"eye"},onClick:function(e,n){return qe(n)},popupText:function(){return k("common:view")},renderer:"semantic-icon"}],columns:[{allowToggleVisibility:!1,dataIndex:"name",id:"name",key:"name",render:function(e){return r.createElement(u.Z,{image:!0,as:"h6",className:"header-with-icon","data-componentid":"".concat(C,"-item-heading")},r.createElement(c.JT,{image:r.createElement(c.Xo,{name:e.name,size:"mini","data-componentid":"".concat(C,"-item-image-inner")}),size:"mini",spaced:"right","data-componentid":"".concat(C,"-item-image")}),r.createElement(u.Z.Content,null,e.name))},title:k("extensions:develop.applications.edit.sections.roles.list.columns.name")},{allowToggleVisibility:!1,dataIndex:"action",id:"actions",key:"actions",textAlign:"right",title:k("extensions:develop.applications.edit.sections.roles.list.columns.actions")}],data:ne,onRowClick:function(e,n){qe(n)},placeholders:en(),showHeader:!1,transparent:!Q&&null!==en(),"data-componentid":"".concat(C,"-data-table")}))))),r.createElement(v.Z,{hidden:!0}),D&&r.createElement(g.CreateApplicationRoleWizard,{"data-componentid":"create-app-role-wizard",onRoleUpdate:Ge,closeWizard:function(){return J(!1)},appId:Qe,sharedApplications:Oe}),r.createElement(h.EditApplicationRole,{"data-componentid":"edit-app-role-wizard",onShowEditRoleModal:K,onRoleUpdate:Ge,selectedRole:ie,appId:Qe,showEditRoleModal:F,isReadOnly:!z||je}),de&&r.createElement(c.cV,{primaryActionLoading:G,onClose:function(){return W(!1)},type:"negative",open:B,assertionHint:k("extensions:develop.applications.edit.sections.roles.deleteRole.confirmationModal.assertionHint"),assertionType:"checkbox",primaryAction:k("common:confirm"),secondaryAction:k("common:cancel"),onSecondaryActionClick:function(){W(!1),Z(null)},onPrimaryActionClick:function(){return Y(!0),void(0,R.deleteRole)(Qe,de.name).then((function(){L((0,a.V_)({description:k("extensions:develop.applications.edit.sections.roles.notifications.deleteApplicationRole.success.description"),level:l.QU.SUCCESS,message:k("extensions:develop.applications.edit.sections.roles.notifications.deleteApplicationRole.success.message")})),Ge()})).catch((function(){Z({description:k("extensions:develop.applications.edit.sections.roles.notifications.deleteApplicationRole.genericError.description"),level:l.QU.ERROR,message:k("extensions:develop.applications.edit.sections.roles.notifications.deleteApplicationRole.genericError.message")})})).finally((function(){Y(!1),W(!1)}))},"data-componentid":"".concat(C,"-delete-confirmation-modal"),closeOnDimmerClick:!1},r.createElement(c.cV.Header,{"data-componentid":"".concat(C,"-delete-confirmation-modal-header")},k("extensions:develop.applications.edit.sections.roles.deleteRole.confirmationModal.header")),r.createElement(c.cV.Message,{attached:!0,negative:!0,"data-componentid":"".concat(C,"-delete-confirmation-modal-message")},k("extensions:develop.applications.edit.sections.roles.deleteRole.confirmationModal.message")),r.createElement(c.cV.Content,{"data-componentid":"".concat(C,"-delete-confirmation-modal-content")},r.createElement("div",{className:"modal-alert-wrapper"}," ",P&&H),k("extensions:develop.applications.edit.sections.roles.deleteRole.confirmationModal.content"))))};S.defaultProps={"data-componentid":"application-roles-tab"}}}]);