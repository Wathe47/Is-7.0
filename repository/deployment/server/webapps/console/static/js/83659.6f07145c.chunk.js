"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[83659],{83659:(t,e,n)=>{n.r(e),n.d(e,{createAuthorizedAPIResource:()=>l,patchPolicies:()=>g,patchScopesOfAPIResource:()=>h,searchAPIResources:()=>v,unsubscribeAPIResources:()=>p,usePolicies:()=>f,useScopesOfAPIResources:()=>d,useSubscribedAPIResources:()=>u});var o=n(34148),a=n(67442),i=n(93129),s=n(73508),c=n(61263),r=o.AsgardeoSPAClient.getInstance().httpRequest.bind(o.AsgardeoSPAClient.getInstance()),u=function(t){var e={headers:{Accept:"application/json","Content-Type":"application/json"},method:i.f2.GET,url:"".concat(c.h.getState().config.endpoints.authzEndpoint,"/applications/").concat(t,"/authorized-apis")},n=(0,s.Z)(e),o=n.data,a=n.error;return{data:o,error:a,isLoading:!a&&!o,isValidating:n.isValidating,mutate:n.mutate}},p=function(t,e){var n={headers:{Accept:"application/json","Content-Type":"application/json"},method:i.f2.DELETE,url:"".concat(c.h.getState().config.endpoints.authzEndpoint,"/applications/").concat(t)+"/authorized-apis/".concat(e)};return r(n).then((function(t){if(204!==t.status)throw new a.u(t.data.description,null,t.status,t.request,t,t.config);return Promise.resolve(t.data)})).catch((function(t){var e;throw new a.u(t.message,t.stack,null===(e=t.response)||void 0===e||null===(e=e.data)||void 0===e?void 0:e.code,t.request,t.response,t.config)}))},d=function(t){var e={headers:{Accept:"application/json","Content-Type":"application/json"},method:i.f2.GET,url:"".concat(c.h.getState().config.endpoints.authzEndpoint,"/api-resources/").concat(t,"/permissions")},n=(0,s.Z)(e),o=n.data,a=n.error;return{data:o,error:a,isLoading:!a&&!o,isValidating:n.isValidating,mutate:n.mutate}},l=function(t,e,n,o){var s={data:{apiId:e,permissions:n,policyIdentifier:o},headers:{Accept:"application/json","Content-Type":"application/json"},method:i.f2.POST,url:"".concat(c.h.getState().config.endpoints.authzEndpoint,"/applications/").concat(t,"/authorized-apis")};return r(s).then((function(t){if(201!==t.status)throw new a.u(t.data.description,null,t.status,t.request,t,t.config);return Promise.resolve(t.data)})).catch((function(t){var e;throw new a.u(t.message,t.stack,null===(e=t.response)||void 0===e||null===(e=e.data)||void 0===e?void 0:e.code,t.request,t.response,t.config)}))},h=function(t,e,n,o){var s={data:{addedPermissions:n,removedPermissions:o},headers:{Accept:"application/json","Content-Type":"application/json"},method:i.f2.PATCH,url:"".concat(c.h.getState().config.endpoints.authzEndpoint,"/applications/").concat(t)+"/authorized-apis/".concat(e)};return r(s).then((function(t){if(200!==t.status)throw new a.u(t.data.description,null,t.status,t.request,t,t.config);return Promise.resolve(t.data)})).catch((function(t){var e;throw new a.u(t.message,t.stack,null===(e=t.response)||void 0===e||null===(e=e.data)||void 0===e?void 0:e.code,t.request,t.response,t.config)}))},f=function(t){var e={headers:{Accept:"application/json","Content-Type":"application/json"},method:i.f2.GET,url:"".concat(c.h.getState().config.endpoints.authzEndpoint,"/applications/").concat(t,"/policy")},n=(0,s.Z)(e),o=n.data,a=n.error;return{data:o,error:a,isLoading:!a&&!o,isValidating:n.isValidating,mutate:n.mutate}},g=function(t,e,n){var o={data:{added_policies:e,removed_policies:n},headers:{Accept:"application/json","Content-Type":"application/json"},method:i.f2.PATCH,url:"".concat(c.h.getState().config.endpoints.authzEndpoint,"/applications/").concat(t,"/policy")};return r(o).then((function(t){if(204!==t.status)throw new a.u(t.data.description,null,t.status,t.request,t,t.config);return Promise.resolve(t.data)})).catch((function(t){var e;throw new a.u(t.message,t.stack,null===(e=t.response)||void 0===e||null===(e=e.data)||void 0===e?void 0:e.code,t.request,t.response,t.config)}))},v=function(t,e){var n={data:{apiResourceIds:t,attributes:e},headers:{Accept:"application/json","Content-Type":"application/json"},method:i.f2.POST,url:"".concat(c.h.getState().config.endpoints.authzEndpoint,"/api-resources/.search")};return r(n).then((function(t){if(200!==t.status)throw new a.u(t.data.description,null,t.status,t.request,t,t.config);return Promise.resolve(t.data)})).catch((function(t){var e;throw new a.u(t.message,t.stack,null===(e=t.response)||void 0===e||null===(e=e.data)||void 0===e?void 0:e.code,t.request,t.response,t.config)}))}}}]);