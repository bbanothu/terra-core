(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1805:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return _}));var r=t(0),o=t.n(r),a=t(302),p=t(814),c=t(4),l=t.n(c),i=t(874),u=t(806),m=l.a.bind(u.a),s=function(){return o.a.createElement(i.a,{label:"Default Field Text",options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],selectId:"default-example",className:m("form-select")})};function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function f(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b={};function x(e){var n=e.components,t=f(e,["components"]);return Object(a.mdx)("wrapper",d({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelectField from 'terra-form-select/lib/native-select/NativeSelectField';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst DefaultFieldExample = () => (\n  <NativeSelectField\n    label=\"Default Field Text\"\n    options={[\n      { value: 'volvo', display: 'Volvo' },\n      { value: 'saab', display: 'Saab' },\n      { value: 'mercedes', display: 'Mercedes' },\n      { value: 'audi', display: 'Audi' },\n    ]}\n    selectId=\"default-example\"\n    className={cx('form-select')}\n  />\n);\n\nexport default DefaultFieldExample;\n\n")))}x.isMDXComponent=!0;var y=t(798),O=t.n(y),v=t(807),j=function(e){var n=e.title,t=e.description,r=e.isExpanded;return o.a.createElement(O.a,{title:n||"Default Field",description:t,example:o.a.createElement(s,null),exampleCssSrc:o.a.createElement(v.a,null),exampleSrc:o.a.createElement(x,null),isExpanded:r})},h=l.a.bind(u.a),g=function(){return o.a.createElement(i.a,{label:"Required Field Text",options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],required:!0,selectId:"required-example",className:h("form-select")})};function w(){return(w=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function D(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var M={};function X(e){var n=e.components,t=D(e,["components"]);return Object(a.mdx)("wrapper",w({},M,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelectField from 'terra-form-select/lib/native-select/NativeSelectField';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst RequiredFieldExample = () => (\n  <NativeSelectField\n    label=\"Required Field Text\"\n    options={[\n      { value: 'volvo', display: 'Volvo' },\n      { value: 'saab', display: 'Saab' },\n      { value: 'mercedes', display: 'Mercedes' },\n      { value: 'audi', display: 'Audi' },\n    ]}\n    required\n    selectId=\"required-example\"\n    className={cx('form-select')}\n  />\n);\n\nexport default RequiredFieldExample;\n\n")))}X.isMDXComponent=!0;var T=function(e){var n=e.title,t=e.description,r=e.isExpanded;return o.a.createElement(O.a,{title:n||"Required Field",description:t,example:o.a.createElement(g,null),exampleCssSrc:o.a.createElement(v.a,null),exampleSrc:o.a.createElement(X,null),isExpanded:r})},C=l.a.bind(u.a),N=function(){return o.a.createElement(i.a,{isIncomplete:!0,label:"Incomplete Field Text",options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],required:!0,selectId:"incomplete-example",className:C("form-select")})};function L(){return(L=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function S(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var q={};function I(e){var n=e.components,t=S(e,["components"]);return Object(a.mdx)("wrapper",L({},q,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelectField from 'terra-form-select/lib/native-select/NativeSelectField';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst IncompleteFieldExample = () => (\n  <NativeSelectField\n    isIncomplete\n    label=\"Incomplete Field Text\"\n    options={[\n      { value: 'volvo', display: 'Volvo' },\n      { value: 'saab', display: 'Saab' },\n      { value: 'mercedes', display: 'Mercedes' },\n      { value: 'audi', display: 'Audi' },\n    ]}\n    required\n    selectId=\"incomplete-example\"\n    className={cx('form-select')}\n  />\n);\n\nexport default IncompleteFieldExample;\n\n")))}I.isMDXComponent=!0;var E=function(e){var n=e.title,t=e.description,r=e.isExpanded;return o.a.createElement(O.a,{title:n||"Incomplete Field",description:t,example:o.a.createElement(N,null),exampleCssSrc:o.a.createElement(v.a,null),exampleSrc:o.a.createElement(I,null),isExpanded:r})},F=t(801),P=t.n(F);function V(){return(V=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function R(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var k=function(){return Object(a.mdx)(P.a,{rows:[{name:"defaultValue",type:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"union"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-json"},'[\n {\n  "name": "number"\n },\n {\n  "name": "string"\n }\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The default value of the select. Can be a string, or number."))}return n.isMDXComponent=!0,n({})}},{name:"disabled",type:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the input is disabled."))}return n.isMDXComponent=!0,n({})}},{name:"error",type:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Error message displayed when the select is invalid."))}return n.isMDXComponent=!0,n({})}},{name:"help",type:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Help message to display with the select."))}return n.isMDXComponent=!0,n({})}},{name:"hideRequired",type:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether to hide the required indicator on the label."))}return n.isMDXComponent=!0,n({})}},{name:"isIncomplete",type:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",Object(a.mdx)("em",{parentName:"p"},"(usage note: ",Object(a.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))}return n.isMDXComponent=!0,n({})}},{name:"isInline",type:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field is displayed inline. Displays block by default."))}return n.isMDXComponent=!0,n({})}},{name:"isLabelHidden",type:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines."))}return n.isMDXComponent=!0,n({})}},{name:"isInvalid",type:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))}return n.isMDXComponent=!0,n({})}},{name:"label",type:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The field label."))}return n.isMDXComponent=!0,n({})}},{name:"labelAttrs",type:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Additional attributes to spread onto the label."))}return n.isMDXComponent=!0,n({})}},{name:"maxWidth",type:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Set the max-width of a field using ",Object(a.mdx)("inlineCode",{parentName:"p"},"length")," or ",Object(a.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",Object(a.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))}return n.isMDXComponent=!0,n({})}},{name:"onChange",type:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Callback function triggered when the select value changes. function(event)"))}return n.isMDXComponent=!0,n({})}},{name:"options",type:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"arrayOf"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n "name": "union",\n "value": [\n  {\n   "name": "custom",\n   "raw": "optionPropType"\n  },\n  {\n   "name": "custom",\n   "raw": "optGroupPropType"\n  }\n ]\n}\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The array of select options and opt groups."))}return n.isMDXComponent=!0,n({})}},{name:"required",type:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field is required."))}return n.isMDXComponent=!0,n({})}},{name:"selectAttrs",type:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Additional attributes to spread onto the select."))}return n.isMDXComponent=!0,n({})}},{name:"selectId",type:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The Select identifier. Links the htmlFor of the field to the select identifier."))}return n.isMDXComponent=!0,n({})}},{name:"showOptional",type:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether to append the 'optional' label to a non-required field label."))}return n.isMDXComponent=!0,n({})}},{name:"value",type:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"union"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-json"},'[\n {\n  "name": "number"\n },\n {\n  "name": "string"\n }\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=R(n,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The value of the select. Can be a string or number."))}return n.isMDXComponent=!0,n({})}}]})},A=t(972),W=t(973);function H(){return(H=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function B(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var z={};function _(e){var n=e.components,t=B(e,["components"]);return Object(a.mdx)("wrapper",H({},z,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)(p.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-form-native-select-field"},"Terra Form Native Select Field"),Object(a.mdx)("p",null,"A convenience wrapper assembling a ",Object(a.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-select"},"terra-form-select")," within a ",Object(a.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-field"},"terra-form-field"),"."),Object(a.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Install with ",Object(a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),Object(a.mdx)("h2",{id:"component-features"},"Component Features"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),Object(a.mdx)("p",null,Object(a.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-select"},"View component source code")),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(j,{title:"Select Field Example",mdxType:"DefaultFieldExample"}),Object(a.mdx)(T,{title:"Required Select Field Example",mdxType:"RequiredFieldExample"}),Object(a.mdx)(E,{title:"Incomplete Select Field Example",mdxType:"IncompleteFieldExample"}),Object(a.mdx)("h2",{id:"props"},"Props"),Object(a.mdx)("h3",{id:"native-select-option"},"Native Select Option"),Object(a.mdx)(A.a,{mdxType:"NativeOptionsPropsTable"}),Object(a.mdx)("h3",{id:"native-select-optgroup"},"Native Select OptGroup"),Object(a.mdx)(W.a,{mdxType:"NativeOptGroupsPropsTable"}),Object(a.mdx)("h3",{id:"native-select-field"},"Native Select Field"),Object(a.mdx)(k,{mdxType:"NativeSelectFieldPropsTable"}))}_.isMDXComponent=!0},802:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(12);function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var c=function(e){var n=p({},e);return o.a.createElement(a.a,n,o.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},n.default=c},806:function(e,n,t){"use strict";n.a={"form-select":"FormSelectDocCommon-module__form-select___m9WxS"}},807:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));t(0);var r=t(302);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p={};function c(e){var n=e.components,t=a(e,["components"]);return Object(r.mdx)("wrapper",o({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .form-select {\n    max-width: 300px;\n  }\n}\n\n")))}c.isMDXComponent=!0},814:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(0),o=t.n(r),a=t(799),p=t.n(a),c=function(e){var n=e.url;return o.a.createElement(p.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select",name:"terra-form-select",version:"6.29.0",url:n})}},874:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(1),p=t.n(a),c=t(203),l=t(837),i=t(932);function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function m(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s={defaultValue:p.a.oneOfType([p.a.number,p.a.string]),disabled:p.a.bool,error:p.a.node,help:p.a.node,hideRequired:p.a.bool,isIncomplete:p.a.bool,isInline:p.a.bool,isLabelHidden:p.a.bool,isInvalid:p.a.bool,label:p.a.node.isRequired,labelAttrs:p.a.object,maxWidth:p.a.string,onChange:p.a.func,options:p.a.arrayOf(p.a.oneOfType([i.b,i.a])),required:p.a.bool,selectAttrs:p.a.object,selectId:p.a.string.isRequired,showOptional:p.a.bool,value:p.a.oneOfType([p.a.number,p.a.string])},d=function(e){var n,t=e.defaultValue,r=e.disabled,a=e.error,p=e.help,i=e.hideRequired,s=e.isIncomplete,d=e.isInline,f=e.isLabelHidden,b=e.isInvalid,x=e.label,y=e.labelAttrs,O=e.maxWidth,v=e.onChange,j=e.options,h=e.required,g=e.selectAttrs,w=e.selectId,D=e.showOptional,M=e.value,X=m(e,["defaultValue","disabled","error","help","hideRequired","isIncomplete","isInline","isLabelHidden","isInvalid","label","labelAttrs","maxWidth","onChange","options","required","selectAttrs","selectId","showOptional","value"]),T=p?o.a.createElement("span",null,p):void 0;return p&&a&&b?n="".concat(w,"-error ").concat(w,"-help"):(p&&(n="".concat(w,"-help")),a&&b&&(n="".concat(w,"-error"))),o.a.createElement(c.a,u({},X,{label:x,labelAttrs:y,error:a,help:T,hideRequired:i,required:h,showOptional:D,isInvalid:b,isInline:d,isLabelHidden:f,htmlFor:w,maxWidth:O}),o.a.createElement(l.a,{attrs:g,id:w,ariaDescribedBy:n,ariaLabel:x,disabled:r,isIncomplete:s,isInvalid:b,defaultValue:t,required:h,onChange:v,options:j,value:M}))};d.propTypes=s,d.defaultProps={disabled:!1,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,required:!1,showOptional:!1},n.a=d},972:function(e,n,t){"use strict";t(0);var r=t(302),o=t(801),a=t.n(o);function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.a=function(){return Object(r.mdx)(a.a,{rows:[{name:"display",type:function(){var e={};function n(n){var t=n.components,o=c(n,["components"]);return Object(r.mdx)("wrapper",p({},e,o,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=c(n,["components"]);return Object(r.mdx)("wrapper",p({},e,o,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"The option display."))}return n.isMDXComponent=!0,n({})}},{name:"disabled",type:function(){var e={};function n(n){var t=n.components,o=c(n,["components"]);return Object(r.mdx)("wrapper",p({},e,o,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=c(n,["components"]);return Object(r.mdx)("wrapper",p({},e,o,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Whether the option is disabled."))}return n.isMDXComponent=!0,n({})}},{name:"value",type:function(){var e={};function n(n){var t=n.components,o=c(n,["components"]);return Object(r.mdx)("wrapper",p({},e,o,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"union"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-json"},'[\n {\n  "name": "number"\n },\n {\n  "name": "string"\n }\n]\n')))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=c(n,["components"]);return Object(r.mdx)("wrapper",p({},e,o,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"The option value."))}return n.isMDXComponent=!0,n({})}}]})}},973:function(e,n,t){"use strict";t(0);var r=t(302),o=t(801),a=t.n(o);function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.a=function(){return Object(r.mdx)(a.a,{rows:[{name:"display",type:function(){var e={};function n(n){var t=n.components,o=c(n,["components"]);return Object(r.mdx)("wrapper",p({},e,o,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=c(n,["components"]);return Object(r.mdx)("wrapper",p({},e,o,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"The option display."))}return n.isMDXComponent=!0,n({})}},{name:"disabled",type:function(){var e={};function n(n){var t=n.components,o=c(n,["components"]);return Object(r.mdx)("wrapper",p({},e,o,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=c(n,["components"]);return Object(r.mdx)("wrapper",p({},e,o,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Whether the optgroup is disabled."))}return n.isMDXComponent=!0,n({})}},{name:"options",type:function(){var e={};function n(n){var t=n.components,o=c(n,["components"]);return Object(r.mdx)("wrapper",p({},e,o,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"arrayOf"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n "name": "custom",\n "raw": "optionPropType"\n}\n')))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=c(n,["components"]);return Object(r.mdx)("wrapper",p({},e,o,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"The array of select options."))}return n.isMDXComponent=!0,n({})}}]})}}}]);