"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[53574],{53574:(e,t,o)=>{o.r(t),o.d(t,{default:()=>h});var n=o(67442),i=o(93129),r=o(3356),a=o(86727),s=o(44194),c=o(10479),u=o(47245),l=o(26154),d=o(24393),p=o(7553),f=o(30446),v=o(29691),g=o(14200);function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,i,r,a,s=[],c=!0,u=!1;try{if(r=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;c=!1}else for(;!(c=(n=r.call(o)).done)&&(s.push(n.value),s.length!==t);c=!0);}catch(e){u=!0,i=e}finally{try{if(!c&&null!=o.return&&(a=o.return(),Object(a)!==a))return}finally{if(u)throw i}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var E=function(e){var t=e["data-componentid"],o=(0,c.$)().t,m=(0,u.I0)(),E=(0,a.fQ)().getLink,h=R((0,s.useState)(0),2),A=h[0],y=h[1],S=R((0,s.useState)(!1),2),b=S[0],P=S[1],x=R((0,s.useState)([]),2),I=x[0],w=x[1],L=R((0,s.useState)(!1),2),_=L[0],O=L[1],k=R((0,s.useState)(void 0),2),C=k[0],T=k[1],z=R((0,s.useState)(void 0),2),F=z[0],K=z[1],U=R((0,s.useState)(void 0),2),j=U[0],B=U[1],Q=R((0,s.useState)(void 0),2),H=Q[0],M=Q[1],W=R((0,s.useState)(void 0),2),D=W[0],V=W[1],$=R((0,s.useState)(void 0),2),N=$[0],Z=$[1],G=(0,u.v9)((function(e){return e.config.ui.features})),J=(0,p.cQ)(C,F),X=J.data,q=J.isLoading,Y=J.error,ee=J.mutate;(0,s.useEffect)((function(){if(X instanceof n.u)m((0,r.V_)({description:o("extensions:develop.apiResource.notifications.getAPIResources.genericError.description"),level:i.QU.ERROR,message:o("extensions:develop.apiResource.notifications.getAPIResources.genericError.message")}));else if(X){var e,t=X.apiResources.map((function(e){return e}));if(X.links&&0===X.links.length)V(void 0),Z(void 0);else null===(e=X.links)||void 0===e||e.forEach((function(e){switch(e.rel){case g.K.AFTER_REL:V(e.href.split("".concat(g.K.AFTER_REL,"="))[1]);break;case g.K.BEFORE_REL:Z(e.href.split("".concat(g.K.BEFORE_REL,"="))[1])}}));w(t)}}),[X]),(0,s.useEffect)((function(){var e;if(Y)if((null===(e=Y.response)||void 0===e||null===(e=e.data)||void 0===e?void 0:e.code)===g.K.UNAUTHORIZED_ACCESS)m((0,r.V_)({description:o("extensions:develop.apiResource.notifications.getAPIResources.unauthorizedError.description"),level:i.QU.ERROR,message:o("extensions:develop.apiResource.notifications.getAPIResources.unauthorizedError.message")}));else m((0,r.V_)({description:o("extensions:develop.apiResource.notifications.getAPIResources.genericError.description"),level:i.QU.ERROR,message:o("extensions:develop.apiResource.notifications.getAPIResources.genericError.message")}))}),[Y]),(0,s.useEffect)((function(){_&&(ee(),O(!1))}),[_]);var te=function(e,t){T(e),K(t),B(D),M(N),O(!0)};return s.createElement(a.Xg,{action:!Y&&(null==I?void 0:I.length)>0&&s.createElement(a.KM,{"data-testid":"".concat(t,"-add-api-resources-button"),onClick:function(){return P(!0)}},s.createElement(l.Z,{name:"add"}),o("extensions:develop.apiResource.addApiResourceButton")),pageTitle:o("extensions:develop.apiResource.pageHeader.title"),title:o("extensions:develop.apiResource.pageHeader.title"),description:s.createElement(s.Fragment,null,o("extensions:develop.apiResource.pageHeader.description"),s.createElement(a.eb,{link:E("develop.apiResources.learnMore")},o("extensions:common.learnMore"))),"data-componentid":"".concat(t,"-page-layout"),"data-testid":"".concat(t,"-page-layout"),headingColumnWidth:"11",actionColumnWidth:"5"},s.createElement(a.PS,{showTopActionPanel:!1,"data-componentid":"".concat(t,"-api-resources-list-layout"),"data-testid":"".concat(t,"-api-resources-list-layout"),onPageChange:function(e,t){var o=parseInt(null==t?void 0:t.activePage);o>A?te(D,void 0):o<A&&te(void 0,N),y(o)},showPagination:!0,totalPages:g.K.DEFAULT_TOTAL_PAGES,totalListSize:null==I?void 0:I.length,showPaginationPageLimit:!1,isLoading:q,activePage:A,paginationOptions:{disableNextButton:!D,disablePreviousButton:!N}},Y?s.createElement(a.$J,{subtitle:[o("extensions:develop.apiResource.apiResourceError.subtitles.0"),o("extensions:develop.apiResource.apiResourceError.subtitles.1")],title:o("extensions:develop.apiResource.apiResourceError.title"),image:(0,d.jF)().genericError,imageSize:"tiny"}):s.createElement(f.v,{apiResourcesList:I,isAPIResourcesListLoading:q,featureConfig:G,onAPIResourceDelete:function(){1===(null==I?void 0:I.length)?te():te(j,H)},setShowAddAPIWizard:P}),b&&s.createElement(v.d,{"data-testid":"".concat(t,"-add-api-resource-wizard-modal"),closeWizard:function(){return P(!1)}})))};E.defaultProps={"data-componentid":"api-resources"};const h=E}}]);