"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[53828],{53828:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(66112),a=n(86727),o=n(44194),l=n(10479),c=n(62508),i=n(89141),d=n(77757);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,c=[],i=!0,d=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){d=!0,a=e}finally{try{if(!i&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(d)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m="filterAttribute",f="filterValues";const p=function(e){var t=e["data-componentid"],n=e.setSearchQuery,u=e.isFormSubmitted,p=e.resetSubmitState,v=s((0,o.useState)(!1),2),b=v[0],h=v[1],y=(0,l.$)().t;(0,o.useEffect)((function(){u&&h(!1),p()}),[u]);var E=[{text:y("common:contains"),value:"co"}];return o.createElement(a.GI,{content:o.createElement("div",{className:"search-filters-dropdown"},o.createElement(a.X6,{as:"h6",bold:"500",compact:!0,"data-componentid":"".concat(t,"-header"),"data-testid":"".concat(t,"-header")},y("extensions:develop.monitor.filter.advancedSearch.title")),o.createElement(c.Z,{className:"compact"}),o.createElement("div",{className:"form-wrapper","data-componentid":"".concat(t,"-form-wrapper"),"data-testid":"".concat(t,"-form-wrapper")},o.createElement(i.Z,null,o.createElement(i.Z.Row,{columns:1},o.createElement(i.Z.Column,{width:16},o.createElement(r.Es,{onSubmit:function(e){return function(e){h(!1),n({property:e.get(m),value:e.get(f)})}(e)}},o.createElement(r.gN,{children:[{key:0,text:"traceId",value:"requestId"},{key:1,text:"actionId",value:"actionId"},{key:2,text:"resultMessage",value:"resultMessage"}].map((function(e,t){return{key:t,text:e.text,value:e.value}})),label:y("console:common.advancedSearch.form.inputs.filterAttribute.label"),name:m,placeholder:y("extensions:develop.monitor.filter.advancedSearch.attributes.placeholder"),required:!0,requiredErrorMessage:y("console:common.advancedSearch.form.inputs.filterAttribute.validations.empty"),type:"dropdown",value:"requestId","data-testid":"".concat(t,"-filter-attribute-dropdown")}),o.createElement(d.Z.Group,{widths:"equal"},o.createElement(r.gN,{children:E.map((function(e,t){return{key:t,text:e.text,value:e.value}})),label:y("console:common.advancedSearch.form.inputs.filterCondition.label"),name:"filterCondition",placeholder:y("console:common.advancedSearch.form.inputs.filterCondition.placeholder"),required:!0,requiredErrorMessage:y("console:common.advancedSearch.form.inputs.filterCondition.validations.empty"),type:"dropdown",value:"co","data-testid":"".concat(t,"-filter-condition-dropdown")}),o.createElement(r.gN,{label:y("console:common.advancedSearch.form.inputs.filterValue.label"),name:f,placeholder:y("extensions:develop.monitor.filter.advancedSearch.fields.value.placeholder"),required:!0,requiredErrorMessage:y("console:common.advancedSearch.form.inputs.filterValue.validations.empty"),type:"text","data-testid":"".concat(t,"-filter-value-input")})),o.createElement(c.Z,{hidden:!0}),o.createElement(d.Z.Group,{inline:!0},o.createElement(a.KM,{size:"small",type:"submit","data-testid":"".concat(t,"-search-button")},y("extensions:develop.monitor.filter.advancedSearch.buttons.submit.label"))))))))),on:"click",position:"bottom left",trigger:o.createElement(a.zx,{basic:!0,compact:!0,content:y("extensions:develop.monitor.filter.topToolbar.buttons.addFilter.label"),icon:"filter","data-componentid":"".concat(t,"-add-filters-button"),"data-testid":"".concat(t,"-add-filters-button"),className:"add-filters-btn"}),open:b,onOpen:function(){return h(!0)},onClose:function(){return h(!1)},"data-componentid":"".concat(t,"-dropdown"),"data-testid":"".concat(t,"-dropdown"),className:"advanced-search"})}}}]);