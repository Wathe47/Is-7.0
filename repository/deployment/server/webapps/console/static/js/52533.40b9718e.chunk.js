"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[52533],{52533:(e,t,l)=>{l.r(t),l.d(t,{default:()=>y});var n=l(24184),i=l(54833),a=l(93129),c=l(3356),r=l(86727),o=l(44194),d=l(10479),u=l(47245),s=l(41193),m=l(62508),g=l(12638),E=l(73432),p=l(89141),v=l(26154),f=l(93682),A=l(35542),h=l(24393),b=l(84870),Z=l(16645),I=l(45481);function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,i,a,c,r=[],o=!0,d=!1;try{if(a=(l=l.call(e)).next,0===t){if(Object(l)!==l)return;o=!1}else for(;!(o=(n=a.call(l)).done)&&(r.push(n.value),r.length!==t);o=!0);}catch(e){d=!0,i=e}finally{try{if(!o&&null!=l.return&&(c=l.return(),Object(c)!==c))return}finally{if(d)throw i}}return r}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}var T=function(e){var t,l,C,T,y,S,w,M,_,R,U,P,L,N,X,k,x=e["data-testid"],Q=(0,d.$)().t,O=(0,u.v9)((function(e){return e.config.ui.features})),G=D((0,o.useState)(!1),2),B=G[0],H=G[1],z=D((0,o.useState)(!0),2),$=z[0],j=z[1],J=D((0,o.useState)([]),2),F=J[0],V=J[1],K=D((0,o.useState)([]),2),q=K[0],W=K[1],Y=D((0,o.useState)([]),2),ee=Y[0],te=Y[1],le=D((0,o.useState)([]),2),ne=le[0],ie=le[1],ae=D((0,o.useState)([]),2),ce=ae[0],re=ae[1],oe=(0,u.v9)((function(e){var t;return null==e||null===(t=e.auth)||void 0===t?void 0:t.allowedScopes})),de=(0,u.I0)(),ue=(0,u.v9)((function(e){return e.config.ui.listAllAttributeDialects})),se=(0,u.v9)((function(e){var t;return null==e||null===(t=e.config)||void 0===t||null===(t=t.ui)||void 0===t?void 0:t.isSAASDeployment})),me=function(e,t,l,n){j(!0),(0,A.jp)({filter:n,limit:e,offset:t,sort:l}).then((function(e){var t=e.filter((function(e){return ue?"local"!==e.id&&e.id!==I.Q.ATTRIBUTE_DIALECT_IDS.get("XML_SOAP")&&e.id!=I.Q.ATTRIBUTE_DIALECT_IDS.get("OPENID_NET"):e.id!=I.Q.ATTRIBUTE_DIALECT_IDS.get("LOCAL")&&e.id!=I.Q.ATTRIBUTE_DIALECT_IDS.get("AXSCHEMA")&&e.id!=I.Q.ATTRIBUTE_DIALECT_IDS.get("EIDAS_LEGAL")&&e.id!=I.Q.ATTRIBUTE_DIALECT_IDS.get("EIDAS_NATURAL")&&e.id!=I.Q.ATTRIBUTE_DIALECT_IDS.get("OPENID_NET")&&e.id!=I.Q.ATTRIBUTE_DIALECT_IDS.get("XML_SOAP")})),l=[],n=[],i=[],a=[],c=[];t.forEach((function(e){I.Q.OIDC_MAPPING.includes(e.dialectURI)?l.push(e):Object.values(I.Q.SCIM_TABS).map((function(e){return e.uri})).includes(e.dialectURI)?n.push(e):I.Q.AXSCHEMA_MAPPING===e.dialectURI?i.push(e):Object.values(I.Q.EIDAS_TABS).map((function(e){return e.uri})).includes(e.dialectURI)?a.push(e):b.attributeConfig.showCustomDialectInSCIM?e.dialectURI!==b.attributeConfig.localAttributes.customDialectURI&&c.push(e):c.push(e)})),V(l),W(n),te(i),ie(null),re(c)})).catch((function(e){var t,l;de((0,c.V_)({description:(null==e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.description)||Q("claims:dialects.notifications.fetchDialects.genericError.description"),level:a.QU.ERROR,message:(null==e||null===(l=e.response)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.message)||Q("claims:dialects.notifications.fetchDialects.genericError.message")}))})).finally((function(){j(!1)}))};(0,o.useEffect)((function(){me()}),[]);var ge=function(){return o.createElement(s.Z,null,o.createElement(s.Z.Header,null,o.createElement(s.Z.Line,null)))},Ee=function(){return o.createElement(r.pJ,null,o.createElement(s.Z,{fluid:!0},o.createElement(s.Z.Header,{image:!0},o.createElement(s.Z.Line,{length:"very short"}),o.createElement(s.Z.Line,null))))};return o.createElement(o.Fragment,null,b.attributeConfig.addAttributeMapping&&B&&o.createElement(Z.$E,{open:B,onClose:function(){H(!1)},update:me,"data-testid":"".concat(x,"-add-dialect-wizard")}),o.createElement(r.Xg,{pageTitle:"Attributes",title:Q("claims:dialects.pageLayout.list.title"),description:Q("claims:dialects.pageLayout.list.description"),"data-testid":"".concat(x,"-page-layout")},o.createElement(r.Me,{showTopActionPanel:!1},(0,i.Xr)(null==O?void 0:O.attributeDialects,null==O||null===(t=O.attributeDialects)||void 0===t||null===(t=t.scopes)||void 0===t?void 0:t.read,oe)&&($?o.createElement(o.Fragment,null,ge(),o.createElement(m.Z,{hidden:!0}),Ee()):o.createElement(o.Fragment,null,o.createElement(g.Z,{as:"h4"},Q("claims:dialects.sections.manageAttributes.heading")),o.createElement(m.Z,{hidden:!0}),o.createElement(r.pJ,{onClick:function(){h.m8.push(h.$x.getPaths().get("LOCAL_CLAIMS"))},className:"clickable","data-testid":"".concat(x,"-local-dialect-container")},o.createElement(E.Z,null,o.createElement(E.Z.Item,null,o.createElement(p.Z,null,o.createElement(p.Z.Row,{columns:2},o.createElement(p.Z.Column,{width:12},o.createElement(r.dn,{verticalAlign:"middle",fill:"primary",transparent:!0,icon:(0,h.Uz)().claims,spaced:"right",size:"mini",floated:"left"}),o.createElement(E.Z.Header,null,Q("claims:dialects.sections.manageAttributes.attributes.heading")),o.createElement(E.Z.Description,{"data-testid":"".concat(x,"-local-dialect")},Q("claims:dialects.sections.manageAttributes.attributes.description"))),o.createElement(p.Z.Column,{width:4,verticalAlign:"middle",textAlign:"right","data-testid":"".concat(x,"-local-dialect-")+"attributes-edit-icon"},o.createElement(r.GI,{content:(0,i.Xr)(null==O?void 0:O.attributeDialects,null==O||null===(l=O.attributeDialects)||void 0===l||null===(l=l.scopes)||void 0===l?void 0:l.create,oe)?Q("common:edit"):Q("common:view"),trigger:(0,i.Xr)(null==O?void 0:O.attributeDialects,null==O||null===(C=O.attributeDialects)||void 0===C||null===(C=C.scopes)||void 0===C?void 0:C.create,oe)?o.createElement(v.Z,{color:"grey",name:"pencil"}):o.createElement(v.Z,{color:"grey",name:"eye"}),inverted:!0}))))))),!se&&(null==O||null===(T=O.server)||void 0===T?void 0:T.enabled)&&(0,i.Xr)(null==O?void 0:O.server,null==O||null===(y=O.server)||void 0===y||null===(y=y.scopes)||void 0===y?void 0:y.read,oe)&&o.createElement(r.pJ,{onClick:function(){h.m8.push(h.$x.getPaths().get("CLAIM_VERIFICATION_SETTINGS"))},className:"clickable","data-testid":"".concat(x,"-attribute-verification-settings-container")},o.createElement(E.Z,null,o.createElement(E.Z.Item,null,o.createElement(p.Z,null,o.createElement(p.Z.Row,{columns:2},o.createElement(p.Z.Column,{width:12},o.createElement(r.dn,{verticalAlign:"middle",fill:"primary",transparent:!0,icon:(0,h.Uz)().gears,spaced:"right",size:"mini",floated:"left"}),o.createElement(E.Z.Header,null,Q("console:manage.features.governanceConnectors.connectorCategories.otherSettings.connectors.userClaimUpdate.friendlyName")),o.createElement(E.Z.Description,{"data-testid":"".concat(x,"-attribute-verification")+"-settings"},Q("console:manage.features.governanceConnectors.connectorSubHeading",{name:Q("console:manage.features.governanceConnectors.connectorCategories.otherSettings.connectors.userClaimUpdate.friendlyName")}))),o.createElement(p.Z.Column,{width:4,verticalAlign:"middle",textAlign:"right","data-testid":"".concat(x,"-attribute-verification-")+"settings-edit-icon"},o.createElement(r.GI,{content:(0,i.Xr)(null==O?void 0:O.attributeDialects,null==O||null===(S=O.attributeDialects)||void 0===S||null===(S=S.scopes)||void 0===S?void 0:S.create,oe)?Q("common:configure"):Q("common:view"),trigger:(0,i.Xr)(null==O?void 0:O.attributeDialects,null==O||null===(w=O.attributeDialects)||void 0===w||null===(w=w.scopes)||void 0===w?void 0:w.create,oe)?o.createElement(v.Z,{color:"grey",name:"pencil"}):o.createElement(v.Z,{color:"grey",name:"eye"}),inverted:!0}))))))))),o.createElement(m.Z,{hidden:!0}),o.createElement(m.Z,{hidden:!0}),o.createElement(m.Z,null),o.createElement(m.Z,{hidden:!0}),o.createElement(p.Z,null,o.createElement(p.Z.Row,{columns:2},o.createElement(p.Z.Column,{width:12,verticalAlign:"middle"},$?ge():o.createElement(g.Z,{as:"h4"},Q("claims:dialects.sections.manageAttributeMappings.heading"))),o.createElement(p.Z.Column,{width:4,verticalAlign:"middle",textAlign:"right"},b.attributeConfig.addAttributeMapping&&o.createElement(n.di,{when:null==O||null===(M=O.attributeDialects)||void 0===M||null===(M=M.scopes)||void 0===M?void 0:M.create},o.createElement(r.KM,{disabled:$,loading:$,onClick:function(){H(!0)},"data-testid":"".concat(x,"-list-layout-add-button")},o.createElement(v.Z,{name:"add"}),Q("claims:dialects.pageLayout.list.primaryAction")))))),o.createElement(m.Z,{hidden:!0}),$?Ee():(null==F?void 0:F.length)>0&&o.createElement(r.pJ,{className:"clickable","data-testid":"".concat(x,"-oidc-dialect-container")},o.createElement(E.Z,null,o.createElement(E.Z.Item,{onClick:function(){h.m8.push(h.$x.getPaths().get("ATTRIBUTE_MAPPINGS").replace(":type",I.Q.OIDC).replace(":customAttributeMappingID",""))}},o.createElement(p.Z,null,o.createElement(p.Z.Row,{columns:2},o.createElement(p.Z.Column,{width:12},o.createElement(r.dn,{transparent:!0,verticalAlign:"middle",rounded:!0,icon:(0,h.r2)().oidc,spaced:"right",size:"mini",floated:"left"}),o.createElement(E.Z.Header,null,Q("claims:dialects.sections.manageAttributeMappings.oidc.heading")),o.createElement(E.Z.Description,{"data-testid":"".concat(x,"-local-dialect")},Q("claims:attributeMappings.oidc.description"))),o.createElement(p.Z.Column,{width:4,verticalAlign:"middle",textAlign:"right"},o.createElement(r.GI,{content:(0,i.Xr)(null==O?void 0:O.attributeDialects,null==O||null===(_=O.attributeDialects)||void 0===_||null===(_=_.scopes)||void 0===_?void 0:_.create,oe)?Q("common:edit"):Q("common:view"),trigger:(0,i.Xr)(null==O?void 0:O.attributeDialects,null==O||null===(R=O.attributeDialects)||void 0===R||null===(R=R.scopes)||void 0===R?void 0:R.create,oe)?o.createElement(v.Z,{color:"grey",name:"pencil"}):o.createElement(v.Z,{color:"grey",name:"eye"}),inverted:!0}))))))),$?Ee():(null==q?void 0:q.length)>0&&o.createElement(r.pJ,{onClick:function(){h.m8.push(h.$x.getPaths().get("ATTRIBUTE_MAPPINGS").replace(":type",I.Q.SCIM).replace(":customAttributeMappingID",""))},className:"clickable","data-testid":"".concat(x,"-scim-dialect-container")},o.createElement(E.Z,null,o.createElement(E.Z.Item,null,o.createElement(p.Z,null,o.createElement(p.Z.Row,{columns:2},o.createElement(p.Z.Column,{width:12},o.createElement(r.dn,{verticalAlign:"middle",rounded:!0,icon:(0,h.r2)().scim,spaced:"right",size:"mini",floated:"left"}),o.createElement(E.Z.Header,null,Q("claims:dialects.sections.manageAttributeMappings.scim.heading")),o.createElement(E.Z.Description,{"data-testid":"".concat(x,"-local-dialect")},Q("claims:attributeMappings.scim.description"))),o.createElement(p.Z.Column,{width:4,verticalAlign:"middle",textAlign:"right"},o.createElement(r.GI,{content:(0,i.Xr)(null==O?void 0:O.attributeDialects,null==O||null===(U=O.attributeDialects)||void 0===U||null===(U=U.scopes)||void 0===U?void 0:U.create,oe)&&b.attributeConfig.isSCIMEditable?Q("common:edit"):Q("common:view"),trigger:(0,i.Xr)(null==O?void 0:O.attributeDialects,null==O||null===(P=O.attributeDialects)||void 0===P||null===(P=P.scopes)||void 0===P?void 0:P.create,oe)&&b.attributeConfig.isSCIMEditable?o.createElement(v.Z,{color:"grey",name:"pencil"}):o.createElement(v.Z,{color:"grey",name:"eye"}),inverted:!0}))))))),$?Ee():(null==ee?void 0:ee.length)>0&&o.createElement(r.pJ,{className:"clickable","data-testid":"".concat(x,"-axschema-dialect-container")},o.createElement(E.Z,null,o.createElement(E.Z.Item,{onClick:function(){h.m8.push(h.$x.getPaths().get("ATTRIBUTE_MAPPINGS").replace(":type",I.Q.AXSCHEMA).replace(":customAttributeMappingID",""))}},o.createElement(p.Z,null,o.createElement(p.Z.Row,{columns:2},o.createElement(p.Z.Column,{width:12},o.createElement(r.dn,{verticalAlign:"middle",rounded:!0,icon:(0,h.r2)().axschema,spaced:"right",size:"mini",floated:"left"}),o.createElement(E.Z.Header,null,Q("claims:attributeMappings.axschema.heading")),o.createElement(E.Z.Description,{"data-testid":"".concat(x,"-local-dialect")},Q("claims:attributeMappings.axschema.description"))),o.createElement(p.Z.Column,{width:4,verticalAlign:"middle",textAlign:"right"},o.createElement(r.GI,{content:(0,i.Xr)(null==O?void 0:O.attributeDialects,null==O||null===(L=O.attributeDialects)||void 0===L||null===(L=L.scopes)||void 0===L?void 0:L.create,oe)?Q("common:edit"):Q("common:view"),trigger:(0,i.Xr)(null==O?void 0:O.attributeDialects,null==O||null===(N=O.attributeDialects)||void 0===N||null===(N=N.scopes)||void 0===N?void 0:N.create,oe)?o.createElement(v.Z,{color:"grey",name:"pencil"}):o.createElement(v.Z,{color:"grey",name:"eye"}),inverted:!0}))))))),$?Ee():(null==ne?void 0:ne.length)>0&&o.createElement(r.pJ,{className:"clickable","data-testid":"".concat(x,"-eidas-dialect-container")},o.createElement(E.Z,null,o.createElement(E.Z.Item,{onClick:function(){h.m8.push(h.$x.getPaths().get("ATTRIBUTE_MAPPINGS").replace(":type",I.Q.EIDAS).replace(":customAttributeMappingID",""))}},o.createElement(p.Z,null,o.createElement(p.Z.Row,{columns:2},o.createElement(p.Z.Column,{width:12},o.createElement(r.dn,{transparent:!0,verticalAlign:"middle",rounded:!0,icon:(0,h.r2)().eidas,spaced:"right",size:"mini",floated:"left"}),o.createElement(E.Z.Header,null,Q("claims:attributeMappings.eidas.heading")),o.createElement(E.Z.Description,{"data-testid":"".concat(x,"-local-dialect")},Q("claims:attributeMappings.eidas.description"))),o.createElement(p.Z.Column,{width:4,verticalAlign:"middle",textAlign:"right"},o.createElement(r.GI,{content:(0,i.Xr)(null==O?void 0:O.attributeDialects,null==O||null===(X=O.attributeDialects)||void 0===X||null===(X=X.scopes)||void 0===X?void 0:X.create,oe)?Q("common:edit"):Q("common:view"),trigger:(0,i.Xr)(null==O?void 0:O.attributeDialects,null==O||null===(k=O.attributeDialects)||void 0===k||null===(k=k.scopes)||void 0===k?void 0:k.create,oe)?o.createElement(v.Z,{color:"grey",name:"pencil"}):o.createElement(v.Z,{color:"grey",name:"eye"}),inverted:!0}))))))),b.attributeConfig.showCustomAttributeMapping&&($?Ee():(null==ce?void 0:ce.length)>0&&ce.map((function(e){var t,l;return o.createElement(r.pJ,{key:e.dialectURI,onClick:function(){h.m8.push(h.$x.getPaths().get("ATTRIBUTE_MAPPINGS").replace(":type",I.Q.OTHERS).replace(":customAttributeMappingID",e.id))},className:"clickable","data-testid":"".concat(x,"-other-dialect-container")},o.createElement(E.Z,null,o.createElement(E.Z.Item,null,o.createElement(p.Z,null,o.createElement(p.Z.Row,{columns:2},o.createElement(p.Z.Column,{width:12},o.createElement(f.Z,{floated:"left",verticalAlign:"middle",rounded:!0,centered:!0,size:"mini"},o.createElement(r.Xo,null),o.createElement("span",{className:"claims-letter"},e.dialectURI.charAt(0).toUpperCase())),o.createElement(E.Z.Header,null,e.dialectURI),o.createElement(E.Z.Description,{"data-testid":"".concat(x,"-local-dialect")},Q("claims:attributeMappings.custom.description"))),o.createElement(p.Z.Column,{width:4,verticalAlign:"middle",textAlign:"right"},o.createElement(r.GI,{content:(0,i.Xr)(null==O?void 0:O.attributeDialects,null==O||null===(t=O.attributeDialects)||void 0===t||null===(t=t.scopes)||void 0===t?void 0:t.create,oe)?Q("common:edit"):Q("common:view"),trigger:o.createElement(v.Z,{color:"grey",name:(0,i.Xr)(null==O?void 0:O.attributeDialects,null==O||null===(l=O.attributeDialects)||void 0===l||null===(l=l.scopes)||void 0===l?void 0:l.create,oe)?"pencil":"eye"}),inverted:!0})))))))}))))))};T.defaultProps={"data-testid":"attribute-dialects"};const y=T}}]);