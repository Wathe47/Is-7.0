(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[9569,15742,20400,97892,84419,77333],{15742:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var a=n(86727),r=n(44194),l=n(10479),o=n(10909),c=n(26154);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l,o,c=[],i=!0,s=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(a=l.call(n)).done)&&(c.push(a.value),c.length!==t);i=!0);}catch(e){s=!0,r=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(s)throw r}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}const d=function(e){var t=e.value,n=i((0,r.useState)("copy"),2),s=n[0],d=n[1],m=(0,r.useRef)(null),u=(0,l.$)().t;return(0,r.useEffect)((function(){return function(){return clearTimeout(m.current)}}),[]),r.createElement(a.GI,{trigger:r.createElement(o.Z,{size:"mini",basic:!0,icon:!0,compact:!0,onClick:function(){d("check"),navigator.clipboard.writeText(t),m.current=setTimeout((function(){return d("copy")}),3e3)}},"copy"===s?r.createElement(c.Z,{name:"copy outline"}):r.createElement(c.Z,{name:"check"})),inverted:!0,content:r.createElement("small",null,u("extensions:develop.monitor.tooltips.copy"))})}},9569:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>L});var a=n(59501),r=n(2659),l=n(90988),o=n(95817),c=n(90349),i=n(20997),s=n(73302),d=n(16488),m=n(8534),u=n(86727),p=n(12887),g=n(44194),y=n(10479),b=n(26154),f=n(58934),E=n(15742),v=n(97892),h=n(84419),Z=n(77333);n(20400);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function I(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Q(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l,o,c=[],i=!0,s=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(a=l.call(n)).done)&&(c.push(a.value),c.length!==t);i=!0);}catch(e){s=!0,r=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(s)throw r}}return c}}(e,t)||Q(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var S=(0,g.lazy)((function(){return n.e(5907).then(n.bind(n,13563))})),F=function(e){var t=e["data-componentid"],n=e.handleScroll,Q=e.scrollRef,N=e.logs,F=e.loading,L=e.rowHeight,G=e.logCount,U=e.logType,B=e.setSearchQuery,W=(0,y.$)().t,C=x((0,g.useState)([-1]),2),D=C[0],R=C[1],X=x((0,g.useState)(!1),2),T=X[0],j=X[1],V=x((0,g.useState)(),2),Y=V[0],A=V[1];(0,g.useEffect)((function(){N.length>0&&N.length<=G&&(Q.current.scrollTop=L*(G-(G-1))),R([-1])}),[N]);var O=function(e,t){var n,a=t.index;n=D.indexOf(a)>-1?D.filter((function(e){return e!==a})):[].concat(I(D),[a]),R(n)},k=function(){j(!1),A(null)},M=function(e){var n=[],a=function(a){if("id"===a||"componentId"===a)return 1;if(e[a])if("string"==typeof e[a])"recordedAt"===a?n.push(g.createElement("tr",null,g.createElement("td",{className:"log-property"},a,":"),g.createElement("td",null,(0,Z.formatTimestampToDateTime)(e[a])))):"resultStatus"===a?n.push(g.createElement("tr",null,g.createElement("td",{className:"log-property"},a,":"),g.createElement("td",null,e[a]))):"requestId"===a?n.push(g.createElement("tr",null,g.createElement("td",{className:"log-property"},"traceId:"),g.createElement("td",null,g.createElement(u.GI,{trigger:g.createElement("span",null,e[a].slice(0,32)),content:g.createElement("small",null,e[a])}),"...\xa0\xa0",g.createElement(b.Z.Group,{className:"icon-button",onClick:function(){B({property:"traceId",value:e[a]})}},g.createElement(b.Z,{name:"filter",color:"green"}),g.createElement(b.Z,{corner:!0,name:"add",color:"green"})),g.createElement(E.default,{value:e[a]})))):n.push(g.createElement("tr",null,g.createElement("td",{className:"log-property"},a,":"),g.createElement("td",null,e[a],"\xa0\xa0",g.createElement(b.Z.Group,{className:"icon-button",onClick:function(){B({property:a,value:e[a]})}},g.createElement(b.Z,{name:"filter",color:"green"}),g.createElement(b.Z,{corner:!0,name:"add",color:"green"})))));else if("object"===w(e[a]))if("data"===a)n.push(g.createElement("tr",null,g.createElement("td",{className:"log-property"},a,":"),g.createElement("td",{className:"view-data-button"},g.createElement(s.Z,{"data-testid":"".concat(t,"-").concat(e.id,"-view-data-button"),"data-componentid":"".concat(t,"-view-data-button"),underline:"hover",onClick:function(){return function(e){A(e),j(!0)}(e)}},g.createElement(r.tE,{className:"topic"}),W("extensions:develop.monitor.filter.viewButton.label")))));else{var l=function(t){"string"==typeof e[a][t]?n.push(g.createElement("tr",null,g.createElement("td",{className:"log-property"},t,":"),g.createElement("td",null,e[a][t],"\xa0\xa0",g.createElement(b.Z.Group,{className:"icon-button",onClick:function(){B({property:t,value:e[a][t]})}},g.createElement(b.Z,{name:"filter",color:"green"}),g.createElement(b.Z,{corner:!0,name:"add",color:"green"}))))):n.push(g.createElement("tr",null,g.createElement("td",{className:"log-property"},t,":"),g.createElement("td",null,JSON.stringify(e[a][t],null,10))))};for(var o in e[a])l(o)}};for(var l in e)a(l);return n},J=g.createElement(S,{loading:g.createElement(c.Z,null),className:"log-data-viewer",width:"100%",height:"100%",language:"javascript",theme:"vc",value:Y?JSON.stringify(Y.data,null,2):"{}",options:{automaticLayout:!0,readOnly:!0},"data-componentid":"".concat(t,"-data-viewer")}),z=g.createElement(l.Z,{className:"log-data-viewer-toolbar-container","data-componentid":"".concat(t,"-toolbar-container")},g.createElement(d.Z,{variant:"dense"},g.createElement(l.Z,null,g.createElement(m.Z,null,W("extensions:develop.monitor.logView.logDataviewer.panelName"))),g.createElement(l.Z,{className:"actions"},g.createElement(o.Z,{className:"data-viewer-buttons","data-componentid":"".concat(t,"-log-data-viewer-panel-download-button"),onClick:function(){var e=new Blob([JSON.stringify(Y.data,null,2)],{type:"application/json"});(0,p.saveAs)(e,"log_data_"+Y.id+".json")},startIcon:g.createElement(r._8,null)},W("extensions:develop.monitor.logView.logDataviewer.download")),g.createElement(o.Z,{"data-componentid":"".concat(t,"-log-data-viewer-panel-copy-button"),className:"data-viewer-buttons",onClick:function(){navigator.clipboard.writeText(JSON.stringify(Y.data,null,2))},startIcon:g.createElement(r.TI,null)},W("extensions:develop.monitor.logView.logDataviewer.copy")),g.createElement(i.Z,{"data-componentid":"".concat(t,"-log-data-viewer-panel-close-button"),size:"small",onClick:k},g.createElement(r.DX,null)))));return g.createElement("div",{className:"main-container","data-componentid":"".concat(t,"-main-container")},g.createElement("div",{className:"ui fluid container scroll-container",onScroll:n,ref:Q},g.createElement("div",{className:"edge-container"}),F&&g.createElement(v.default,null),!F&&U===h.TabIndex.AUDIT_LOGS&&g.createElement("div",{className:"log-header"},g.createElement("div",{className:"log-Recordedtime"},g.createElement(m.Z,{variant:"body1"},W("extensions:develop.monitor.logView.headers.recordedAt"))),g.createElement("div",{className:"log-description-header"},g.createElement("div",{className:"log-actionId"},g.createElement(m.Z,{variant:"body1"},W("extensions:develop.monitor.logView.headers.actionId"))),g.createElement("div",{className:"log-targetId"},g.createElement(m.Z,{variant:"body1"},W("extensions:develop.monitor.logView.headers.targetId"))))),g.createElement(f.Z,{"data-componentid":"".concat(t,"-log-entries-wrapper"),exclusive:!1,fluid:!0},N.map((function(e,n){return g.createElement("div",{key:n},g.createElement(f.Z.Title,{active:D.includes(n),index:n,onClick:O,style:{padding:"0px"}},g.createElement("div",{className:"log-row"},g.createElement(b.Z,{name:"dropdown","data-componentid":"".concat(t,"-dropdown-button")}),g.createElement("div",{className:"log-time-container"},(0,Z.getDateFromTimestamp)(e.recordedAt),g.createElement("span",{className:"log-time"},"\xa0|\xa0",(0,Z.getTimeFromTimestamp)(e.recordedAt))),g.createElement("div",{className:"log-description-container"},U===h.TabIndex.DIAGNOSTIC_LOGS&&g.createElement("div",{className:"log-message-container"},function(e){switch(e){case h.ResultStatus.SUCCESS:return g.createElement(b.Z,{name:"check circle",color:"green"});case h.ResultStatus.FAILED:return g.createElement(b.Z,{name:"close",color:"red"});default:return g.createElement(g.Fragment,null)}}(function(e){switch(e){case"SUCCESS":default:return h.ResultStatus.SUCCESS;case"FAILED":return h.ResultStatus.FAILED}}(e.resultStatus)),"auth-script-logging"===e.actionId&&g.createElement(b.Z,{name:"code"}),e.resultMessage.length>60?g.createElement(u.GI,{inverted:!0,trigger:g.createElement("span",null,"".concat(e.resultMessage.slice(0,60),"...")),content:g.createElement("small",null,W("extensions:develop.monitor.logView.toolTips.seeMore")),position:"bottom right",size:"mini"}):e.resultMessage),U===h.TabIndex.AUDIT_LOGS&&g.createElement("div",null,e.actionId&&g.createElement("div",{className:"log-actionid-container"},e.actionId),e.action&&g.createElement("div",{className:"log-actionid-container"},e.action)),U===h.TabIndex.DIAGNOSTIC_LOGS&&g.createElement("div",null,e.actionId&&g.createElement("div",{className:"log-actionid-container"},e.actionId),e.action&&g.createElement("div",{className:"log-actionid-container"},e.action)),U===h.TabIndex.AUDIT_LOGS&&g.createElement("div",null,g.createElement("div",null,e.targetId&&g.createElement("div",{className:"log-targetId-container"},e.targetId)))))),g.createElement(f.Z.Content,{active:D.includes(n)},M(e).map((function(e,t){return g.createElement("table",{className:"log-expanded-view",key:t},g.createElement("thead",null,g.createElement("tr",null,g.createElement("th",null),g.createElement("th",null))),g.createElement("tbody",null,e))}))))}))),T&&g.createElement(g.Suspense,{fallback:g.createElement(c.Z,null)},g.createElement("div",{className:"log-data-viewer-panel"},g.createElement(a.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:T,onClose:k},g.createElement(l.Z,{className:"full-screen-log-data-viewer-container"},z,J)))),F&&g.createElement(v.default,null),g.createElement("div",{className:"edge-container"})))};F.defaultProps={"data-componentid":"logs-container"};const L=F},97892:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var a=n(44194),r=n(41193),l=function(){return a.createElement("div",{className:"log-row"},a.createElement("div",{className:"log-time-container"},a.createElement(r.Z,{fluid:!0},a.createElement(r.Z.Line,null))),a.createElement("div",{className:"log-description-container"},a.createElement("div",{className:"log-desc-loader"},a.createElement(r.Z,{fluid:!0},a.createElement(r.Z.Line,null)))))};const o=function(){return a.createElement(a.Fragment,null,a.createElement(l,null),a.createElement(l,null))}},84419:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ResultStatus:()=>r,TabIndex:()=>a});var a=function(e){return e[e.DIAGNOSTIC_LOGS=0]="DIAGNOSTIC_LOGS",e[e.AUDIT_LOGS=1]="AUDIT_LOGS",e}({}),r=function(e){return e.SUCCESS="SUCCESS",e.FAILED="FAILED",e}({})},77333:(e,t,n)=>{"use strict";n.r(t),n.d(t,{formatTimestampToDateTime:()=>l,getDateFromTimestamp:()=>o,getDateTimeWithOffset:()=>i,getTimeFromTimestamp:()=>c});var a=n(84025),r=n.n(a),l=function(e){return e?r()(e).format("DD MMM, YYYY | kk:mm:ss"):"N/A"},o=function(e){return e?r()(e).format("DD MMM, YYYY"):"N/A"},c=function(e){return e?r()(e).format("kk:mm:ss"):"N/A"},i=function(e){var t=new Date,n="".concat(t.toLocaleString("en-US",{timeZone:e.split(" ")[1]}))+" ".concat(e.split(" ")[0]);return Date.parse(n)}},34487:e=>{e.exports=[[e.id,".log-data-viewer-panel{height:100%;width:calc(100% - 16px)}.log-data-viewer-panel .log-data-viewer{border:1px solid var(--oxygen-palette-divider);height:500px}.log-data-viewer-toolbar-container .oxygen-toolbar{display:flex;justify-content:space-between;align-items:center;align-content:center;flex-wrap:nowrap;flex-direction:row;padding-left:0;padding-right:0}.log-data-viewer-toolbar-container .oxygen-toolbar .actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-content:center;align-items:center;gap:10px}.full-screen-log-data-viewer-container{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:95%;height:90%;padding:32px}.full-screen-log-data-viewer-container .log-data-viewer-toolbar-container{background-color:var(--oxygen-palette-common-white);padding-left:15px;padding-right:15px;border-top-right-radius:var(--oxygen-shape-borderRadius);border-top-left-radius:var(--oxygen-shape-borderRadius)}.full-screen-log-data-viewer-container .log-data-viewer{border:1px solid var(--oxygen-palette-divider);height:500px}.data-viewer-buttons{padding:5px 12px;border-radius:var(--oxygen-shape-borderRadius);font-size:12px;color:var(--oxygen-palette-text-secondary)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZmluaXRlLXNjcm9sbC1jb250YWluZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFBdUIsV0FBVyxDQUFDLHVCQUF1QixDQUFDLHdDQUF3Qyw4Q0FBOEMsQ0FBQyxZQUFZLENBQUMsbURBQW1ELFlBQVksQ0FBQyw2QkFBNkIsQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLDREQUE0RCxZQUFZLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLHVDQUF1QyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLCtCQUErQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLDBFQUEwRSxtREFBbUQsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyx3REFBd0QsQ0FBQyx1REFBdUQsQ0FBQyx3REFBd0QsOENBQThDLENBQUMsWUFBWSxDQUFDLHFCQUFxQixnQkFBZ0IsQ0FBQyw4Q0FBOEMsQ0FBQyxjQUFjLENBQUMsMENBQTBDIiwiZmlsZSI6ImluZmluaXRlLXNjcm9sbC1jb250YWluZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2ctZGF0YS12aWV3ZXItcGFuZWx7aGVpZ2h0OjEwMCU7d2lkdGg6Y2FsYygxMDAlIC0gMTZweCl9LmxvZy1kYXRhLXZpZXdlci1wYW5lbCAubG9nLWRhdGEtdmlld2Vye2JvcmRlcjoxcHggc29saWQgdmFyKC0tb3h5Z2VuLXBhbGV0dGUtZGl2aWRlcik7aGVpZ2h0OjUwMHB4fS5sb2ctZGF0YS12aWV3ZXItdG9vbGJhci1jb250YWluZXIgLm94eWdlbi10b29sYmFye2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tY29udGVudDpjZW50ZXI7ZmxleC13cmFwOm5vd3JhcDtmbGV4LWRpcmVjdGlvbjpyb3c7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowfS5sb2ctZGF0YS12aWV3ZXItdG9vbGJhci1jb250YWluZXIgLm94eWdlbi10b29sYmFyIC5hY3Rpb25ze2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC13cmFwOm5vd3JhcDthbGlnbi1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjEwcHh9LmZ1bGwtc2NyZWVuLWxvZy1kYXRhLXZpZXdlci1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsIC01MCUpO3dpZHRoOjk1JTtoZWlnaHQ6OTAlO3BhZGRpbmc6MzJweH0uZnVsbC1zY3JlZW4tbG9nLWRhdGEtdmlld2VyLWNvbnRhaW5lciAubG9nLWRhdGEtdmlld2VyLXRvb2xiYXItY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tb3h5Z2VuLXBhbGV0dGUtY29tbW9uLXdoaXRlKTtwYWRkaW5nLWxlZnQ6MTVweDtwYWRkaW5nLXJpZ2h0OjE1cHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tb3h5Z2VuLXNoYXBlLWJvcmRlclJhZGl1cyk7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1veHlnZW4tc2hhcGUtYm9yZGVyUmFkaXVzKX0uZnVsbC1zY3JlZW4tbG9nLWRhdGEtdmlld2VyLWNvbnRhaW5lciAubG9nLWRhdGEtdmlld2Vye2JvcmRlcjoxcHggc29saWQgdmFyKC0tb3h5Z2VuLXBhbGV0dGUtZGl2aWRlcik7aGVpZ2h0OjUwMHB4fS5kYXRhLXZpZXdlci1idXR0b25ze3BhZGRpbmc6NXB4IDEycHg7Ym9yZGVyLXJhZGl1czp2YXIoLS1veHlnZW4tc2hhcGUtYm9yZGVyUmFkaXVzKTtmb250LXNpemU6MTJweDtjb2xvcjp2YXIoLS1veHlnZW4tcGFsZXR0ZS10ZXh0LXNlY29uZGFyeSl9Il19 */","",""]]},90349:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(43112),r=n(31549),l=n(77945),o=n(14517),c=n(17273);const i="CircularProgress",s=e=>{const{className:t}=e,n=(0,a.__rest)(e,["className"]),c=(0,o.Z)("oxygen-circular-progress",t);return(0,r.jsx)(l.Z,Object.assign({"aria-label":"progress",className:c},n))};s.displayName=(0,c.I)(i),s.muiName=i,s.defaultProps={};const d=s;var m,u,p;m='/**\n * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.\n *\n * WSO2 LLC. licenses this file to you under the Apache License,\n * Version 2.0 (the "License"); you may not use this file except\n * in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied. See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.oxygen-circular-progress {\n  /* Add Styles */ }\n',u=document.getElementsByTagName("head")[0],(p=document.createElement("style")).setAttribute("type","text/css"),p.appendChild(document.createTextNode(m)),u.appendChild(p)},20400:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var a=n(51835),r=n.n(a),l=n(27975),o=n.n(l),c=n(55900),i=n.n(c),s=n(21555),d=n.n(s),m=n(3621),u=n.n(m),p=n(5062),g=n.n(p),y=n(34487),b=n.n(y),f={};for(const h in y)"default"!==h&&(f[h]=()=>y[h]);n.d(t,f);var E={};E.styleTagTransform=g(),E.setAttributes=d(),E.insert=i().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=u();r()(b(),E);const v=b()&&b().locals?b().locals:void 0}}]);