"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[45255],{59213:(e,t,n)=>{n.d(t,{u:()=>m});var l=n(2659),o=n(21440),i=n(83487),r=n(16631),a=n(56197),c=n(55437),s=n(86727),u=n(44194),d=n(10479),m=function(e){var t,n=e.isOpen,m=e.onClose,p=e.selectedRole,f=e["data-componentid"],y=(0,d.$)().t;return u.createElement(s.cV,{onClose:function(){return m()},type:"negative",open:n,secondaryAction:y("common:close"),onSecondaryActionClick:function(){return m()},"data-testid":f,closeOnDimmerClick:!1},u.createElement(s.cV.Header,{"data-testid":"".concat(f,"-header")},y("roles:list.confirmations.deleteItemError.header")),u.createElement(s.cV.Message,{attached:!0,negative:!0,"data-testid":"".concat(f,"-message")},y("roles:list.confirmations.deleteItemError.message")),u.createElement(s.cV.Content,{"data-testid":"".concat(f,"-content")},u.createElement("span",null,y("roles:list.confirmations.deleteItemError.content")),u.createElement(o.Z,{hidden:!0}),u.createElement(i.Z,null,u.createElement(r.Z,null,u.createElement(a.Z,null,u.createElement(l.sB,null)),u.createElement(c.Z,{primary:null==p||null===(t=p.audience)||void 0===t?void 0:t.display})))))};m.defaultProps={"data-componentid":"role-delete-error-confirmation-modal"}},45255:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var l=n(24184),o=n(93129),i=n(3356),r=n(86727),a=n(44194),c=n(10479),s=n(47245),u=n(26154),d=n(33040),m=n(78537),p=n(24393),f=n(12647),y=n(84902),v=n(12742),h=n(71015),g=n(54833),E=n(12638),R=n(37077),A=n(59213),b=n(69772),I=n(8272),C=n(66116),O=n(88996);function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,o,i,r,a=[],c=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(l=i.call(n)).done)&&(a.push(l.value),a.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var P=function(e){var t,n=e.handleRoleDelete,o=e.isSubOrg,i=e.onEmptyListPlaceholderActionClick,d=e.onSearchQueryClear,m=e.roleList,p=e.searchQuery,f=e["data-componentid"],y=(0,c.$)().t,v=(0,s.v9)((function(e){var t;return null==e||null===(t=e.auth)||void 0===t?void 0:t.allowedScopes})),S=(0,s.v9)((function(e){var t;return null==e||null===(t=e.config)||void 0===t||null===(t=t.ui)||void 0===t||null===(t=t.features)||void 0===t?void 0:t.userRoles})),P=(0,s.v9)((function(e){var t;return null==e||null===(t=e.config)||void 0===t||null===(t=t.ui)||void 0===t?void 0:t.administratorRoleDisplayName})),T=(0,s.v9)((function(e){return e.config.ui.features})),w=(0,a.useMemo)((function(){var e;return!(0,g.cr)(S,O.nL.FEATURE_DICTIONARY.get("ROLE_UPDATE"))||!(0,g.Xr)(S,null==S||null===(e=S.scopes)||void 0===e?void 0:e.update,v)}),[S,v]),N=L((0,a.useState)(!1),2),_=N[0],k=N[1],U=L((0,a.useState)(),2),D=U[0],x=U[1],V=L((0,a.useState)(!1),2),Z=V[0],j=V[1],M=function(e){C.m.push(I.$.getPaths().get("ROLE_EDIT").replace(":id",e))};return a.createElement(a.Fragment,null,a.createElement(r.wQ,{loadingStateOptions:{imageType:"square"},actions:[{hidden:function(e){var t;return null==e||null===(t=e.meta)||void 0===t?void 0:t.systemRole},icon:function(){return w?"eye":"pencil alternate"},onClick:function(e,t){return!w&&M(null==t?void 0:t.id)},popupText:function(){return y(w?"common:view":"common:edit")},renderer:"semantic-icon"},{hidden:function(e){var t,n;return o||(null==e||null===(t=e.meta)||void 0===t?void 0:t.systemRole)||(null==e?void 0:e.displayName)===h.nL.ADMIN_ROLE||(null==e?void 0:e.displayName)===h.nL.ADMIN_GROUP||(null==e?void 0:e.displayName)===P||!(0,g.cr)(S,O.nL.FEATURE_DICTIONARY.get("ROLE_DELETE"))||!(0,g.Xr)(S,null==S||null===(n=S.scopes)||void 0===n?void 0:n.delete,v)},icon:function(){return"trash alternate"},onClick:function(e,t){!function(e){var t;x(e),(null==e||null===(t=e.audience)||void 0===t||null===(t=t.type)||void 0===t?void 0:t.toUpperCase())===O.cv.APPLICATION?j(!0):k(!0)}(t)},popupText:function(){return y("roles:list.popups.delete",{type:"Role"})},renderer:"semantic-icon"}],columns:[{allowToggleVisibility:!1,dataIndex:"name",id:"name",key:"name",render:function(e){return a.createElement(E.Z,{image:!0,as:"h6",className:"header-with-icon","data-componentid":"".concat(f,"-item-heading")},a.createElement(r.JT,{image:a.createElement(r.Xo,{name:null==e?void 0:e.displayName[0],size:"mini","data-componentid":"".concat(f,"-item-image-inner")}),size:"mini",spaced:"right","data-componentid":"".concat(f,"-item-image")}),a.createElement(E.Z.Content,null,null==e?void 0:e.displayName))},title:y("roles:list.columns.name")},{allowToggleVisibility:!1,dataIndex:"audience",id:"audience",key:"audience",render:function(e){return(null==e?void 0:e.audience)&&a.createElement(R.Z,{size:"mini"},e.audience.type,e.audience.type.toUpperCase()===O.cv.APPLICATION?" | ".concat(e.audience.display," "):"")},title:a.createElement("div",{className:"pl-3"},y("roles:list.columns.audience"))},{allowToggleVisibility:!1,dataIndex:"action",id:"actions",key:"actions",textAlign:"right",title:null}],data:null==m?void 0:m.Resources,onRowClick:function(e,t){M(null==t?void 0:t.id)},placeholders:p&&0===(null==m?void 0:m.totalResults)?a.createElement(r.$J,{"data-componentid":"".concat(f,"-search-empty-placeholder"),action:a.createElement(r.Qj,{"data-componentid":"".concat(f,"-search-empty-placeholder-clear-button"),onClick:d},y("roles:list.emptyPlaceholders.search.action")),image:(0,b.jF)().emptySearch,imageSize:"tiny",title:y("roles:list.emptyPlaceholders.search.title"),subtitle:[y("roles:list.emptyPlaceholders.search.subtitles.0",{searchQuery:p}),y("roles:list.emptyPlaceholders.search.subtitles.1")]}):0===(null==m?void 0:m.totalResults)?a.createElement(r.$J,{"data-componentid":"".concat(f,"-empty-list-empty-placeholder"),action:!o&&a.createElement(l.di,{when:null==T||null===(t=T.userRoles)||void 0===t||null===(t=t.scopes)||void 0===t?void 0:t.create},a.createElement(r.KM,{"data-componentid":"".concat(f,"-empty-list-empty-placeholder-add-button"),onClick:i},a.createElement(u.Z,{name:"add"}),y("roles:list.emptyPlaceholders.emptyRoleList.action",{type:"Role"}))),image:(0,b.jF)().newList,imageSize:"tiny",title:!o&&y("roles:list.emptyPlaceholders.emptyRoleList.title",{type:"role"}),subtitle:o?[y("roles:list.emptyPlaceholders.emptyRoleList.subtitles.0",{type:"roles"})]:[y("roles:list.emptyPlaceholders.emptyRoleList.subtitles.0",{type:"roles"}),y("roles:list.emptyPlaceholders.emptyRoleList.subtitles.1",{type:"role"}),y("roles:list.emptyPlaceholders.emptyRoleList.subtitles.2",{type:"role"})]}):null,"data-componentid":f}),_&&a.createElement(r.cV,{"data-componentid":"".concat(f,"-delete-item-confirmation-modal"),onClose:function(){return k(!1)},type:"negative",open:_,assertionHint:y("roles:list.confirmations.deleteItem.assertionHint"),assertionType:"checkbox",primaryAction:y("common:confirm"),secondaryAction:y("common:cancel"),onSecondaryActionClick:function(){return k(!1)},onPrimaryActionClick:function(){n(D),k(!1)},closeOnDimmerClick:!1},a.createElement(r.cV.Header,null,y("roles:list.confirmations.deleteItem.header")),a.createElement(r.cV.Message,{attached:!0,negative:!0},y("roles:list.confirmations.deleteItem.message",{type:"role"})),a.createElement(r.cV.Content,null,y("roles:list.confirmations.deleteItem.content",{type:"role"}))),Z&&a.createElement(A.u,{isOpen:Z,onClose:function(){j(!1),x(void 0)},selectedRole:D,"data-componentid":"".concat(f,"-role-delete-error-confirmation-modal")}))};P.defaultProps={"data-componentid":"role-mgt-roles-list"};var T=n(45770);function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,o,i,r,a=[],c=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(l=i.call(n)).done)&&(a.push(l.value),a.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var _=function(e){var t,n=e["data-componentid"],h=(0,s.I0)(),g=(0,c.$)().t,E=(0,y.z)().organizationType,R=(0,s.v9)((function(e){return e.config.ui.features})),A=w((0,a.useState)(p.ru.DEFAULT_RESOURCE_LIST_ITEM_LIMIT),2),b=A[0],I=A[1],C=w((0,a.useState)(0),2),O=C[0],L=C[1],S=w((0,a.useState)(void 0),2),N=S[0],_=S[1],k=w((0,a.useState)(!1),2),U=k[0],D=k[1],x=E===p.$B.SUBORGANIZATION,V=(0,m.Ok)(null,null,null,"name eq Console").data,Z=(0,a.useMemo)((function(){var e;return null==V||null===(e=V.applications[0])||void 0===e?void 0:e.id}),[V]),j=(0,v.bF)(b,O,function(e){return"audience.value ne ".concat(Z).concat(e?" and ".concat(e):"")}(N),"users,groups,permissions,associatedApplications"),M=j.data,F=j.isLoading,Q=j.error,z=j.mutate,$=[{key:void 0,text:g("roles:list.filterOptions.all"),value:void 0},{key:T.nL.ROLE_AUDIENCE_APPLICATION_FILTER,text:g("roles:list.filterOptions.applicationRoles"),value:T.nL.ROLE_AUDIENCE_APPLICATION_FILTER},{key:T.nL.ROLE_AUDIENCE_ORGANIZATION_FILTER,text:g("roles:list.filterOptions.organizationRoles"),value:T.nL.ROLE_AUDIENCE_ORGANIZATION_FILTER}];(0,a.useEffect)((function(){Q&&B({description:g("roles:notifications.fetchRoles.genericError.description"),level:o.QU.ERROR,message:g("roles:notifications.fetchRoles.genericError.message")})}),[Q]);var B=function(e){h((0,i.V_)(e))},G=function(){f.m.push(p.$x.getPaths().get("ROLE_CREATE"))};return a.createElement(r.Xg,{action:!x&&!F&&(null==M?void 0:M.totalResults)>0?a.createElement(l.di,{when:null==R||null===(t=R.userRoles)||void 0===t||null===(t=t.scopes)||void 0===t?void 0:t.create},a.createElement(r.KM,{"data-componentid":"".concat(n,"-add-button"),onClick:function(){return G()}},a.createElement(u.Z,{"data-componentid":"".concat(n,"-add-button-icon"),name:"add"}),g("roles:list.buttons.addButton",{type:"Role"}))):null,title:g("pages:roles.title"),pageTitle:g("pages:roles.title"),description:g(x?"pages:roles.alternateSubTitle":"pages:roles.subTitle")},a.createElement(r.PS,{advancedSearch:a.createElement(p.nC,{"data-componentid":"".concat(n,"-list-advanced-search"),onFilter:function(e){"displayName sw "!==e?_(e):z()},filterAttributeOptions:[{key:0,text:g("roles:list.filterAttirbutes.name"),value:"displayName"},{key:1,text:g("roles:list.filterAttirbutes.audience"),value:"audience.type"}],filterAttributePlaceholder:g("roles:advancedSearch.form.inputs.filterAttribute.placeholder"),filterConditionsPlaceholder:g("roles:advancedSearch.form.inputs.filterCondition.placeholder"),filterValuePlaceholder:g("roles:advancedSearch.form.inputs.filterValue.placeholder"),placeholder:g("roles:advancedSearch.placeholder"),defaultSearchAttribute:"displayName",defaultSearchOperator:"co",triggerClearQuery:U}),currentListSize:null==M?void 0:M.itemsPerPage,listItemLimit:b,onItemsPerPageDropdownChange:function(e,t){I(t.value)},onPageChange:function(e,t){var n=(t.activePage-1)*b;L(n)},showTopActionPanel:(null==M?void 0:M.totalResults)>0||0!==(null==N?void 0:N.length),rightActionPanel:a.createElement(d.Z,{"data-componentid":"".concat(n,"-list-filters-dropdown"),selection:!0,options:$,placeholder:g("roles:list.buttons.filterDropdown"),onChange:function(e,t){_(t.value)}}),showPagination:(null==M?void 0:M.totalResults)>0,totalPages:Math.ceil((null==M?void 0:M.totalResults)/b),totalListSize:null==M?void 0:M.totalResults,isLoading:F},a.createElement(P,{handleRoleDelete:function(e){(0,v.iy)(e.id).then((function(){B({description:g("roles:notifications.deleteRole.success.description"),level:o.QU.SUCCESS,message:g("roles:notifications.deleteRole.success.message")}),z()})).catch((function(e){e.response&&e.response.data&&e.response.data.detail?B({description:e.response.data.detail,level:o.QU.ERROR,message:g("roles:notifications.deleteRole.error.message")}):B({description:g("roles:notifications.deleteRole.genericError.description"),level:o.QU.ERROR,message:g("roles:notifications.deleteRole.genericError.message")})}))},onEmptyListPlaceholderActionClick:function(){return G()},onSearchQueryClear:function(){D(!U),_(null)},roleList:M,searchQuery:N,isSubOrg:x})))};_.defaultProps={"data-componentid":"roles-mgt"};const k=_}}]);