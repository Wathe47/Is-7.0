"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[99705,94938],{99705:(t,n,e)=>{e.r(n),e.d(n,{createRole:()=>u,createRoleInSharedApplications:()=>g,deleteRole:()=>l,getApplicationRolesList:()=>s,getAuthorizedAPIList:()=>p,updateApplicationRoleMappedGroups:()=>P,updateIdentityProviderAssignedGroups:()=>A,updateRolePermissions:()=>d,useApplicationRoleInvitedUserGroups:()=>m,useApplicationRoleMappedGroups:()=>f,useDescendantsOfSubOrg:()=>j,useIdentityProviderAssignedGroups:()=>v,useSharedApplicationData:()=>h});var a=e(34148),o=e(93129),i=e(24393),r=e(73508),c=a.AsgardeoSPAClient.getInstance().httpRequest.bind(a.AsgardeoSPAClient.getInstance()).bind(a.AsgardeoSPAClient.getInstance()),s=function(t,n,e,a,r){var s={method:o.f2.GET,params:{after:e,before:n,filter:a,limit:r},url:"".concat(i.h.getState().config.endpoints.authzEndpoint,"/applications/").concat(t,"/roles")};return c(s).then((function(t){return Promise.resolve(t.data)})).catch((function(t){return Promise.reject(t)}))},p=function(t){var n={method:o.f2.GET,url:"".concat(i.h.getState().config.endpoints.authzEndpoint,"/applications/").concat(t,"/authorized-apis")};return c(n).then((function(t){return Promise.resolve(t.data)})).catch((function(t){return Promise.reject(t)}))},u=function(t,n){var e={data:n,method:o.f2.POST,url:"".concat(i.h.getState().config.endpoints.authzEndpoint,"/applications/").concat(t,"/roles")};return c(e).then((function(t){return Promise.resolve(t)})).catch((function(t){return Promise.reject(t)}))},d=function(t,n,e){var a={data:e,method:o.f2.PATCH,url:"".concat(i.h.getState().config.endpoints.authzEndpoint,"/applications/").concat(t,"/roles/").concat(n)};return c(a).then((function(t){return Promise.resolve(t)})).catch((function(t){return Promise.reject(t)}))},l=function(t,n){var e={method:o.f2.DELETE,url:"".concat(i.h.getState().config.endpoints.authzEndpoint,"/applications/").concat(t,"/roles/").concat(n)};return c(e).then((function(t){return Promise.resolve(t)})).catch((function(t){return Promise.reject(t)}))},h=function(t,n){var e={headers:{Accept:"application/json","Content-Type":"application/json"},method:o.f2.GET,url:"".concat(i.h.getState().config.endpoints.organizations,"/organizations/").concat(n,"/applications/").concat(t,"/shared-apps")},a=(0,r.Z)(e),c=a.data,s=a.error;return{data:c,error:s,isLoading:!s&&!c,isValidating:a.isValidating,mutate:a.mutate}},g=function(t,n,e){var a={data:{shareTo:e},headers:{Accept:"application/json","Content-Type":"application/json"},method:o.f2.POST,url:"".concat(i.h.getState().config.endpoints.authzEndpoint,"/applications/").concat(t,"/roles/").concat(n,"/share")};return c(a).then((function(t){return Promise.resolve(t.data)})).catch((function(t){return Promise.reject(t)}))},f=function(t,n){var e={headers:{Accept:"application/json","Content-Type":"application/json"},method:o.f2.GET,url:"".concat(i.h.getState().config.endpoints.authzEndpoint,"/applications/").concat(t,"/roles/").concat(n,"/group-mapping")},a=(0,r.Z)(e),c=a.data,s=a.error;return{data:c,error:s,isLoading:!s&&!c,isValidating:a.isValidating,mutate:a.mutate}},m=function(t,n){var e={headers:{Accept:"application/json","Content-Type":"application/json"},method:o.f2.GET,url:"".concat(i.h.getState().config.endpoints.authzEndpoint,"/applications/").concat(t,"/roles/").concat(n,"/cross-org-group-mapping")},a=(0,r.Z)(e),c=a.data,s=a.error;return{data:c,error:s,isLoading:!s&&!c,isValidating:a.isValidating,mutate:a.mutate}},P=function(t,n,e){var a={data:e,headers:{Accept:"application/json","Content-Type":"application/json"},method:o.f2.PATCH,url:"".concat(i.h.getState().config.endpoints.authzEndpoint,"/applications/").concat(t,"/roles/").concat(n,"/group-mapping")};return c(a).then((function(t){return Promise.resolve(t.data)})).catch((function(t){return Promise.reject(t)}))},v=function(t,n,e){var a={headers:{Accept:"application/json","Content-Type":"application/json"},method:o.f2.GET,url:"".concat(i.h.getState().config.endpoints.authzEndpoint,"/applications/").concat(t,"/roles/").concat(n,"/identity-providers/").concat(e,"/assigned-groups")},c=(0,r.Z)(a),s=c.data,p=c.error;return{data:s,error:p,isLoading:!p&&!s,isValidating:c.isValidating,mutate:c.mutate}},A=function(t,n,e,a){var r={data:a,headers:{Accept:"application/json","Content-Type":"application/json"},method:o.f2.PATCH,url:"".concat(i.h.getState().config.endpoints.authzEndpoint,"/applications/").concat(t,"/roles/").concat(n,"/identity-providers/").concat(e,"/assigned-groups")};return c(r).then((function(t){return Promise.resolve(t.data)})).catch((function(t){return Promise.reject(t)}))},j=function(){var t={headers:{Accept:"application/json","Content-Type":"application/json"},method:o.f2.GET,url:i.h.getState().config.endpoints.breadcrumb},n=(0,r.Z)(t),e=n.data,a=n.error;return{data:e,error:a,isLoading:!a&&!e,isValidating:n.isValidating,mutate:n.mutate}}}}]);