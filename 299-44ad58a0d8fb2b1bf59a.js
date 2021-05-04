(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{1795:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ee}));var r=n(0),a=n.n(r),o=n(302),c=n(937),l=n(159),i=n(876),p=n.p+"ab2308634047d9bcfd50b938d3321418.png",m=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Default"),a.a.createElement(l.default,{src:i.a,alt:"default image"}),a.a.createElement("br",null),a.a.createElement("h2",null,"Circle"),a.a.createElement(l.default,{src:i.a,alt:"circle image",variant:"circle"}),a.a.createElement("br",null),a.a.createElement("h2",null,"Rounded"),a.a.createElement(l.default,{src:i.a,alt:"rounded image",variant:"rounded"}),a.a.createElement("br",null),a.a.createElement("h2",null,"Thumbnail"),a.a.createElement(l.default,{src:i.a,alt:"thumbnail image",variant:"thumbnail"}),a.a.createElement("br",null),a.a.createElement("h2",null,"Fluid"),a.a.createElement(l.default,{src:p,alt:"fluid image",isFluid:!0}),a.a.createElement("br",null),a.a.createElement("h2",null,"Placeholder"),a.a.createElement("h3",null,"Invalid src prop (placeholder will show)"),a.a.createElement(l.default,{src:"/mock/failure/route",alt:"invalid src attribute image",placeholder:a.a.createElement(l.default,{src:p,alt:"placeholder image"})}),a.a.createElement("h3",null,"Valid src prop (src will show)"),a.a.createElement(l.default,{src:i.a,alt:"src image",placeholder:a.a.createElement(l.default,{src:p,alt:"placeholder image"})}))};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function f(e){var t=e.components,n=s(e,["components"]);return Object(o.mdx)("wrapper",u({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Image from \'terra-image\';\nimport placeholderPic150x150 from \'../../assets/150x150.jpg\';\nimport placeholderPic1000x200 from \'../../assets/1000x200.png\';\n\nconst ImageDefault = () => (\n  <div>\n    <h2>Default</h2>\n    <Image src={placeholderPic150x150} alt="default image" />\n    <br />\n    <h2>Circle</h2>\n    <Image src={placeholderPic150x150} alt="circle image" variant="circle" />\n    <br />\n    <h2>Rounded</h2>\n    <Image src={placeholderPic150x150} alt="rounded image" variant="rounded" />\n    <br />\n    <h2>Thumbnail</h2>\n    <Image src={placeholderPic150x150} alt="thumbnail image" variant="thumbnail" />\n    <br />\n    <h2>Fluid</h2>\n    <Image src={placeholderPic1000x200} alt="fluid image" isFluid />\n    <br />\n    <h2>Placeholder</h2>\n    <h3>Invalid src prop (placeholder will show)</h3>\n    {/* eslint-disable-next-line react/jsx-no-duplicate-props */}\n    <Image src="/mock/failure/route" alt="invalid src attribute image" placeholder={<Image src={placeholderPic1000x200} alt="placeholder image" />} />\n    <h3>Valid src prop (src will show)</h3>\n    <Image src={placeholderPic150x150} alt="src image" placeholder={<Image src={placeholderPic1000x200} alt="placeholder image" />} />\n  </div>\n);\n\nexport default ImageDefault;\n\n')))}f.isMDXComponent=!0;var b=n(798),y=n.n(b),h=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(y.a,{title:t||"Image Default",description:n,example:a.a.createElement(m,null),exampleSrc:a.a.createElement(f,null),isExpanded:r})},x=n(1),g=n.n(x),O=n(4),v=n.n(O);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=X(e);if(t){var a=X(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return N(this,n)}}function N(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?M(e):t}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){return function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(l,t);var n,r,o,c=D(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=c.call(this,e)).handleOnSelect=t.handleOnSelect.bind(M(t)),t.state={fitType:"fill",variantType:"default"},t}return n=l,(r=[{key:"handleOnSelect",value:function(e){var t,n,r;this.setState((t={},n=e.target.name,r=e.target.value,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(e,w({fit:this.state.fitType,variant:this.state.variantType},this.props)),a.a.createElement("p",null,a.a.createElement("label",{htmlFor:"fitType"},"Select a Fit Type:")),a.a.createElement("select",{id:"fitType",name:"fitType",value:this.state.fitType,onChange:this.handleOnSelect},a.a.createElement("option",{value:"fill"},"fill"),a.a.createElement("option",{value:"cover"},"cover"),a.a.createElement("option",{value:"contain"},"contain"),a.a.createElement("option",{value:"scale-down"},"scale-down"),a.a.createElement("option",{value:"none"},"none")),a.a.createElement("p",null,a.a.createElement("label",{htmlFor:"variantType"},"Select a Variant Type:")),a.a.createElement("select",{id:"variantType",name:"variantType",value:this.state.variantType,onChange:this.handleOnSelect},a.a.createElement("option",{value:"default"},"default"),a.a.createElement("option",{value:"circle"},"circle"),a.a.createElement("option",{value:"rounded"},"rounded"),a.a.createElement("option",{value:"thumbnail"},"thumbnail")))}}])&&T(n.prototype,r),o&&T(n,o),l}(a.a.Component)},P=n.p+"e2f185bcea2cc1dac4fefdd29f998ede.jpg";function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var S=v.a.bind({"image-container":"ImageFitTypes__image-container___2Qn1S",image:"ImageFitTypes__image___1MyXO"}),L={fit:g.a.string,variant:g.a.string},F=function(e){var t=I({},e);return a.a.createElement("div",{className:S("image-container")},a.a.createElement(l.default,{alt:"Toggle fit image",className:S("image"),src:P,fit:t.fit,variant:t.variant}))};F.propTypes=L;var _=C(F);function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var R={};function q(e){var t=e.components,n=k(e,["components"]);return Object(o.mdx)("wrapper",V({},R,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport Image from 'terra-image';\nimport FitTypesWrapper from 'terra-image/lib/terra-dev-site/doc/example/common/FitTypesWrapper';\nimport styles from './ImageFitTypes.scss';\nimport exampleImage from '../../assets/170x251.jpg';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = { fit: PropTypes.string, variant: PropTypes.string };\n\nconst ImageFitTypes = ({\n  ...props\n}) => (\n  <div className={cx('image-container')}>\n    <Image alt=\"Toggle fit image\" className={cx('image')} src={exampleImage} fit={props.fit} variant={props.variant} />\n  </div>\n);\n\nImageFitTypes.propTypes = propTypes;\nexport default FitTypesWrapper(ImageFitTypes);\n\n")))}function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}q.isMDXComponent=!0;var J={};function z(e){var t=e.components,n=W(e,["components"]);return Object(o.mdx)("wrapper",B({},J,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .image-container {\n    height: 150px;\n    width: 150px;\n  }\n  \n  .image {\n    height: 100%;\n    width: 100%;\n  }\n}\n\n")))}z.isMDXComponent=!0;var A=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(y.a,{title:t||"Image Fit Types",description:n,example:a.a.createElement(_,null),exampleCssSrc:a.a.createElement(z,null),exampleSrc:a.a.createElement(q,null),isExpanded:r})},G=n(801),Q=n.n(G);function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var K=function(){return Object(o.mdx)(Q.a,{rows:[{name:"src",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",U({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",U({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The source string for the image which will be loaded and displayed."))}return t.isMDXComponent=!0,t({})}},{name:"variant",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",U({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-json"},'[\n "default",\n "rounded",\n "circle",\n "thumbnail"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'default'",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",U({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the style of the image from the following values; ",Object(o.mdx)("inlineCode",{parentName:"p"},"default"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"rounded"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"circle"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"thumbnail"),"."))}return t.isMDXComponent=!0,t({})}},{name:"isFluid",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",U({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",U({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the fluid behavior of the image, which is ",Object(o.mdx)("inlineCode",{parentName:"p"},"nonfluid")," by default."))}return t.isMDXComponent=!0,t({})}},{name:"alt",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",U({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"' '",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",U({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The text content that specifies an alternative text for an image."))}return t.isMDXComponent=!0,t({})}},{name:"placeholder",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",U({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",U({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"A React element which will be displayed during loading and in case of src load failure."))}return t.isMDXComponent=!0,t({})}},{name:"height",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",U({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",U({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the height of the image."))}return t.isMDXComponent=!0,t({})}},{name:"width",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",U({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",U({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the width of the image."))}return t.isMDXComponent=!0,t({})}},{name:"onLoad",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",U({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",U({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function to be executed when the image load is successful."))}return t.isMDXComponent=!0,t({})}},{name:"onError",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",U({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",U({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function to be executed when the image load errors."))}return t.isMDXComponent=!0,t({})}},{name:"fit",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",U({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-json"},'[\n "cover",\n "scale-down",\n "fill",\n "contain",\n "none"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'fill'",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",U({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the ",Object(o.mdx)("inlineCode",{parentName:"p"},"object-fit")," style of the image from the following values; ",Object(o.mdx)("inlineCode",{parentName:"p"},"cover"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"contain"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"fill"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"scale-down"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"none"),"."))}return t.isMDXComponent=!0,t({})}}]})};function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var $={};function ee(e){var t=e.components,n=Z(e,["components"]);return Object(o.mdx)("wrapper",Y({},$,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(c.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-image"},"Terra Image"),Object(o.mdx)("p",null,"The terra-image component provides styling for visual imagery."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-image"))))),Object(o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),Object(o.mdx)("th",{parentName:"tr",align:null},"Version"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"react"),Object(o.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"react-dom"),Object(o.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Image from 'terra-image';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(h,{mdxType:"ImageDefault"}),Object(o.mdx)(A,{mdxType:"ImageFit"}),Object(o.mdx)("h2",{id:"image-props"},"Image Props"),Object(o.mdx)(K,{mdxType:"ImagePropsTable"}))}ee.isMDXComponent=!0},802:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){var t=c({},e);return a.a.createElement(o.a,t,a.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=l},876:function(e,t,n){"use strict";t.a=n.p+"51d085f765a7361bab659ffffdb9bb46.jpg"},937:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),o=n(799),c=n.n(o),l=function(e){var t=e.url;return a.a.createElement(c.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-image",name:"terra-image",version:"3.34.0",url:t})}}}]);