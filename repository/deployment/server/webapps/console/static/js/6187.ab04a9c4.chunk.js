"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[6187,18259],{6187:(e,t,r)=>{r.r(t),r.d(t,{CreateRoleWizard:()=>U});var n=r(93129),a=r(3356),l=r(66112),o=r(86727),i=r(99285),s=r(44194),c=r(10479),u=r(47245),m=r(26154),d=r(47018),f=r(89141),p=r(45965),b=r(18259),y=r(39553),v=r(74343),S=r(12647),E=r(12742),g=r(40828),h=r(40231);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){L(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e,t,r){var n;return n=function(e,t){if("object"!=A(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==A(n)?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,o,i=[],s=!0,c=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=l.call(r)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var C=function(e){return e.BASIC_DETAILS="BasicDetails",e.PERM_LIST="PermissionList",e.USER_LIST="UserList",e.GROUP_LIST="GroupList",e.SUMMARY="summary",e}(C||{}),U=function(e){var t=e.closeWizard,r=e.initStep,A=e.isAddGroup,R=e.requiredSteps,O=e.showStepper,U=e.submitStep,Z=e["data-testid"],j=(0,c.$)().t,N=(0,u.I0)(),T=I((0,s.useState)(r),2),_=T[0],P=T[1],D=I((0,s.useState)(void 0),2),k=D[0],x=D[1],B=I((0,s.useState)(void 0),2),M=B[0],z=B[1],G=I((0,s.useState)(void 0),2),W=G[0],V=G[1],Y=I((0,s.useState)(h.XS),2),Q=Y[0],H=Y[1],$=I((0,s.useState)(!1),2),K=$[0],q=$[1],X=I((0,l.cC)(),2),F=X[0],J=X[1],ee=I((0,l.cC)(),2),te=ee[0],re=ee[1],ne=I((0,s.useState)([]),2),ae=ne[0],le=ne[1],oe=I((0,s.useState)(!1),1)[0];(0,s.useEffect)((function(){V(me([C.BASIC_DETAILS,C.USER_LIST]))}),[]),(0,s.useEffect)((function(){void 0!==k&&(P(_-1),x(void 0))}),[k]),(0,s.useEffect)((function(){oe&&M&&M[C.BASIC_DETAILS]&&ie(M[C.BASIC_DETAILS])}),[M&&M[C.BASIC_DETAILS]]);var ie=function(e){var r,l,o,i,s,c,u=[],m=[],d=[];(null==e||null===(r=e.UserList)||void 0===r?void 0:r.length)>0&&(null==e||null===(s=e.UserList)||void 0===s||s.forEach((function(e){null==u||u.push({display:null==e?void 0:e.userName,value:null==e?void 0:e.id})})));(null==e||null===(l=e.GroupList)||void 0===l?void 0:l.length)>0&&(null==e||null===(c=e.GroupList)||void 0===c||c.forEach((function(e){null==m||m.push({display:e.displayName,value:e.id})})));(null==e||null===(o=e.BasicDetails)||void 0===o||null===(o=o.permissions)||void 0===o?void 0:o.length)>0&&e.BasicDetails.permissions.forEach((function(e){null==d||d.push(null==e?void 0:e.key.toString())}));var f={displayName:null!=e&&null!==(i=e.BasicDetails)&&void 0!==i&&null!==(i=i.basic)&&void 0!==i&&i.roleName?e.BasicDetails.basic.roleName:null==e?void 0:e.roleName,groups:m,permissions:d,schemas:["urn:ietf:params:scim:schemas:extension:2.0:Role"],users:u};q(!0),(0,E.fA)(f).then((function(e){201===e.status&&(N((0,a.V_)({description:j("roles:notifications.createRole.success.description"),level:n.QU.SUCCESS,message:j("roles:notifications.createRole.success.message")})),S.m.push(v.$x.getPaths().get("ROLE_EDIT").replace(":id",e.data.id)))})).catch((function(e){e.response&&401!==e.response.status?e.response&&e.response.data.detail?N((0,a.V_)({description:j("roles:notifications.createRole.error.description",{description:e.response.data.detail}),level:n.QU.ERROR,message:j("roles:notifications.createRole.error.message")})):N((0,a.V_)({description:j("roles:notifications.createRole.genericError.description"),level:n.QU.ERROR,message:j("roles:notifications.createRole.genericError.message")})):N((0,a.V_)({description:j("roles:notifications.createRole.error.description"),level:n.QU.ERROR,message:j("roles:notifications.createRole.error.message")}))})).finally((function(){q(!1),t()}))},se=function(e){ie(e)},ce=function(){if(M)return M},ue=function(){switch(_){case 0:J();break;case 1:e=L({},C.USER_LIST,ae),U===C.USER_LIST||oe||P(_+1),U===C.SUMMARY||U!==C.USER_LIST?z(w(w({},M),e)):se(w(w({},M),e));break;case 3:re()}var e},me=function(e){var t=function(e){var t=[];return e.forEach((function(e){e===C.BASIC_DETAILS?t.push(de()):e===C.USER_LIST?t.push(fe()):e===C.SUMMARY&&t.push(pe())})),t};return t(R?(0,i.Z)(e,R):e)},de=function(){return{content:s.createElement(p.RoleBasics,{"data-testid":"add-role-form",isAddGroup:A,triggerSubmit:F,initialValues:M&&M[C.BASIC_DETAILS],onSubmit:function(e){return function(e,t){C.BASIC_DETAILS===t&&H(e.domain),U===t||oe||P(_+1),z(w(w({},M),{},L({},t,e))),U===C.SUMMARY||U!==t||se(w(w({},M),{},L({},t,e)))}(e,C.BASIC_DETAILS)}}),icon:s.createElement(m.Z,{name:"key",inverted:!0,size:"large"}),name:C.BASIC_DETAILS,title:"Permissions"}},fe=function(){return{content:s.createElement(y.AddRoleUsers,{"data-testid":"new-role",isEdit:!1,isGroup:!1,userStore:Q,initialValues:ae,handleTempUsersListChange:function(e){le(e)}}),icon:(0,g.T)().assignUser,name:C.USER_LIST,title:"Users"}},pe=function(){return{content:s.createElement(b.CreateRoleSummary,{"data-testid":"add-role-summary",isAddGroup:A,triggerSubmit:te,onSubmit:se,summary:ce()}),icon:(0,g.T)().summary,name:C.SUMMARY,title:j("roles:addRoleWizard.wizardSteps.3")}};return s.createElement(d.Z,{open:!0,className:"wizard create-role-wizard",dimmer:"blurring",size:"small",onClose:t,closeOnDimmerClick:!1,closeOnEscape:!1,"data-testid":Z},s.createElement(d.Z.Header,{className:"wizard-header"},j("roles:addRoleWizard.heading",{type:"Role"}),s.createElement(o.X6,{as:"h6"},"Assign permissions to a new role and add collaborator users to the role.")),O&&s.createElement(d.Z.Content,{className:"steps-container"},s.createElement(o.Rg.Group,{current:_},null==W?void 0:W.map((function(e,t){return s.createElement(o.Rg.Step,{key:t,icon:e.icon,title:e.title})})))),s.createElement(d.Z.Content,{className:"content-container",scrolling:!0},function(){var e,t,r,n;if(!W)return null;switch(null===(e=W[_])||void 0===e?void 0:e.name){case C.BASIC_DETAILS:return null===(t=de())||void 0===t?void 0:t.content;case C.USER_LIST:return null===(r=fe())||void 0===r?void 0:r.content;case C.SUMMARY:return null===(n=pe())||void 0===n?void 0:n.content}}()),s.createElement(d.Z.Actions,null,s.createElement(f.Z,null,s.createElement(f.Z.Row,{column:1},s.createElement(f.Z.Column,{mobile:8,tablet:8,computer:8},s.createElement(o.Qj,{floated:"left",onClick:function(){return t()},"data-testid":"".concat(Z,"-cancel-button")},j("common:cancel"))),s.createElement(f.Z.Column,{mobile:8,tablet:8,computer:8},_<(null==W?void 0:W.length)-1&&s.createElement(o.KM,{floated:"right",onClick:ue,"data-testid":"".concat(Z,"-next-button")},j("roles:addRoleWizard.buttons.next"),s.createElement(m.Z,{name:"arrow right","data-testid":"".concat(Z,"-next-button-icon")})),_===(null==W?void 0:W.length)-1&&s.createElement(o.KM,{floated:"right",onClick:ue,loading:K,disabled:K,"data-testid":"".concat(Z,"-finish-button")},j("roles:addRoleWizard.buttons.finish")),_>0&&s.createElement(o.Qj,{floated:"right",onClick:function(){x(_)},"data-testid":"".concat(Z,"-previous-button")},s.createElement(m.Z,{name:"arrow left","data-testid":"".concat(Z,"-previous-button-icon")}),j("roles:addRoleWizard.buttons.previous")))))))};U.defaultProps={initStep:0,requiredSteps:[C.BASIC_DETAILS,C.USER_LIST],showStepper:!0,submitStep:C.SUMMARY}},18259:(e,t,r)=>{r.r(t),r.d(t,{CreateRoleSummary:()=>p});var n=r(86727),a=r(83540),l=r(44194),o=r(10479),i=r(89141),s=r(37077),c=r(20435);function u(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,o,i=[],s=!0,c=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=l.call(r)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw a}}return i}}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p=function(e){var t,r,d=e.summary,f=e.triggerSubmit,p=e.onSubmit,b=e.isAddGroup,y=e["data-testid"],v=(0,o.$)().t,S=m((0,l.useState)([]),2),E=S[0],g=S[1],h=m((0,l.useState)([]),2),A=h[0],R=h[1],w=m((0,l.useState)([]),2),L=w[0],I=w[1];(0,l.useEffect)((function(){c.J.getAllPermissions().then((function(e){if(g(e),R([e[0].key.toString()]),d&&d.PermissionList){var t=d.PermissionList;I([].concat(u(L),u(t.map((function(e){return e.key})))))}}))}),[E.length>0]),(0,l.useEffect)((function(){f&&p(d)}),[f]);return l.createElement(i.Z,{className:"wizard-summary"},(null==d?void 0:d.BasicDetails)&&l.createElement(l.Fragment,null,l.createElement(i.Z.Row,{className:"summary-field",columns:2},l.createElement(i.Z.Column,{mobile:16,tablet:8,computer:7,textAlign:"right"},l.createElement("div",{"data-testid":"".concat(y,"-role-name-label"),className:"label"},v("roles:addRoleWizard.summary.labels.roleName",b?{type:"Group"}:{type:"Role"}))),l.createElement(i.Z.Column,{mobile:16,tablet:8,computer:8,textAlign:"left"},l.createElement("div",{"data-testid":"".concat(y,"-role-name-value"),className:"value url"},d.BasicDetails.roleName)))),(null==d?void 0:d.PermissionList)&&d.PermissionList instanceof Array&&d.PermissionList.length>0&&l.createElement(i.Z.Row,{className:"summary-field",columns:2},l.createElement(i.Z.Column,{mobile:16,tablet:8,computer:7,textAlign:"right"},l.createElement("div",{"data-testid":"".concat(y,"-permissions-label"),className:"label"},v("roles:addRoleWizard.summary.labels.permissions"))),l.createElement(i.Z.Column,{mobile:16,tablet:8,computer:8,textAlign:"left"},l.createElement(s.Z.Group,null,l.createElement(a.Z,{className:"customIcon","data-testid":"".concat(y,"-tree"),disabled:!0,checkedKeys:L,defaultExpandedKeys:A,showLine:!0,showIcon:!1,checkable:!0,selectable:!1,treeData:E,switcherIcon:function(e){return e.isLeaf?null:l.createElement("div",{className:"tree-arrow-wrap"},l.createElement("span",{className:"tree-arrow ".concat(e.expanded?"":"active")},l.createElement("span",null),l.createElement("span",null)))}})))),null!=d&&d.UserList&&(null==d?void 0:d.UserList)instanceof Array&&(null==d||null===(t=d.UserList)||void 0===t?void 0:t.length)>0?l.createElement(i.Z.Row,{className:"summary-field",columns:2},l.createElement(i.Z.Column,{mobile:16,tablet:8,computer:7,textAlign:"right"},l.createElement("div",{"data-testid":"".concat(y,"-users-label"),className:"label"},v("roles:addRoleWizard.summary.labels.users"))),l.createElement(i.Z.Column,{mobile:16,tablet:8,computer:8,textAlign:"left"},l.createElement(s.Z.Group,null,null==d?void 0:d.UserList.map((function(e,t){return l.createElement("div",{key:t,className:"role-summary-user"},l.createElement(n.Yt,{name:e.userName,size:"mini",floated:"left",image:e.profileUrl}),e.userName)}))))):null,null!=d&&d.GroupList&&(null==d?void 0:d.GroupList)instanceof Array&&(null==d||null===(r=d.GroupList)||void 0===r?void 0:r.length)>0?l.createElement(i.Z.Row,{className:"summary-field",columns:2},l.createElement(i.Z.Column,{mobile:16,tablet:8,computer:7,textAlign:"right"},l.createElement("div",{"data-testid":"".concat(y,"-users-label"),className:"label"},v("roles:addRoleWizard.summary.labels.groups"))),l.createElement(i.Z.Column,{mobile:16,tablet:8,computer:8,textAlign:"left"},l.createElement(s.Z.Group,null,null==d?void 0:d.GroupList.map((function(e,t){return l.createElement(s.Z,{"data-testid":"".concat(y,"-permissions-").concat(t,"-label"),key:t,basic:!0,circular:!0},null==e?void 0:e.displayName)}))))):null)}},40828:(e,t,r)=>{r.d(t,{T:()=>i});var n=r(86769),a=r(28446),l=r(52932),o=r(68145),i=function(){return{assignUser:o.r,general:n.r,permissions:a.r,summary:l.r}}},28446:(e,t,r)=>{r.d(t,{r:()=>c});var n,a=r(44194),l=["title","titleId"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=function(e,t){var r=e.title,s=e.titleId,c=i(e,l);return a.createElement("svg",o({id:"key-icon",className:"icon",xmlns:"http://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 14 14",style:{enableBackground:"new 0 0 14 14"},xmlSpace:"preserve",ref:t,"aria-labelledby":s},c),r?a.createElement("title",{id:s},r):null,n||(n=a.createElement("path",{className:"path fill primary",d:"M.292,14A.292.292,0,0,1,0,13.708V11.375a.291.291,0,0,1,.086-.206l1.081-1.082V9.625a.292.292,0,0,1,.292-.292h.463l.413-.412V8.458a.292.292,0,0,1,.292-.292h.463L3.5,7.754V7.292A.292.292,0,0,1,3.792,7h.463l.292-.292-.377-.377a.291.291,0,0,1,.076-.467L4.766,5.6a4.606,4.606,0,0,1-.1-.937A4.667,4.667,0,1,1,8.4,9.234l-.26.521a.292.292,0,0,1-.467.076l-.377-.377-4.46,4.46A.3.3,0,0,1,2.625,14ZM1.75,10.209a.294.294,0,0,1-.085.206L.583,11.5v1.921H2.5L7.086,8.835a.292.292,0,0,1,.412,0l.3.3.183-.365a.292.292,0,0,1,.334-.152A4.081,4.081,0,1,0,5.25,4.667a4.116,4.116,0,0,0,.135,1.022.293.293,0,0,1-.152.334L4.867,6.2l.3.3a.291.291,0,0,1,0,.412L4.581,7.5a.291.291,0,0,1-.206.086H4.083v.292A.291.291,0,0,1,4,8.081l-.583.583a.291.291,0,0,1-.206.086H2.917v.292a.289.289,0,0,1-.086.206l-.583.584a.294.294,0,0,1-.206.085H1.75Zm.086,1.956a.292.292,0,0,1,0-.412L5.918,7.669a.291.291,0,0,1,.412.412L2.247,12.164a.291.291,0,0,1-.412,0Zm7.5-8.956a1.458,1.458,0,1,1,1.458,1.458A1.46,1.46,0,0,1,9.333,3.209Zm.583,0a.875.875,0,1,0,.875-.875A.876.876,0,0,0,9.916,3.209Z"})))},c=(0,a.forwardRef)(s)}}]);