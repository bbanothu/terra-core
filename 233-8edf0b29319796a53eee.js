(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{1227:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l}));a(0);var n=a(302),r=a(866);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i={};function l(e){var t=e.components,a=d(e,["components"]);return Object(n.mdx)("wrapper",c({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)(r.a,{mdxType:"Badge"}),Object(n.mdx)("h1",{id:"about-terra-avatar"},"About terra-avatar"),Object(n.mdx)("p",null,"The ",Object(n.mdx)("inlineCode",{parentName:"p"},"terra-avatar")," package contains three components: ",Object(n.mdx)("inlineCode",{parentName:"p"},"Avatar"),", ",Object(n.mdx)("inlineCode",{parentName:"p"},"Facility"),", and ",Object(n.mdx)("inlineCode",{parentName:"p"},"Generic"),". View their respective documentation tabs for information on accepted props and examples."),Object(n.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Install with ",Object(n.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"npm install terra-avatar"))))),Object(n.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(n.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(n.mdx)("table",null,Object(n.mdx)("thead",{parentName:"table"},Object(n.mdx)("tr",{parentName:"thead"},Object(n.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),Object(n.mdx)("th",{parentName:"tr",align:null},"Version"))),Object(n.mdx)("tbody",{parentName:"table"},Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",{parentName:"tr",align:null},"react"),Object(n.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",{parentName:"tr",align:null},"react-dom"),Object(n.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),Object(n.mdx)("h2",{id:"usage"},"Usage"),Object(n.mdx)("pre",null,Object(n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Avatar, { Facility, Generic } from \'terra-avatar\';\n\n<Avatar\n  alt="User"\n  image="https://path/to/image.jpg"\n/>\n\n<Facility\n  alt="Location"\n  image="https://path/to/image.jpg"\n/>\n\n<Generic\n  alt="Generic"\n/>\n')),Object(n.mdx)("h2",{id:"component-features"},"Component Features"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))))}l.isMDXComponent=!0},799:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),r=i(a(1)),c=i(a(4)),d=i(a(800));function i(e){return e&&e.__esModule?e:{default:e}}var l=c.default.bind(d.default),o={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},m=function(e){var t=e.src,a=e.name,r=e.url,c=e.version,d=n.default.createElement("a",{className:l("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(c)},n.default.createElement("span",{className:l("badge-name")},r?"package":"npm"),n.default.createElement("span",{className:l("badge-version")},"v".concat(c))),i=t?n.default.createElement("a",{className:l("badge"),href:t},n.default.createElement("span",{className:l("badge-name")},"github"),n.default.createElement("span",{className:l("badge-version")},"source")):void 0;return n.default.createElement("div",{className:l("badge-container")},d,i)};m.propTypes=o;var p=m;t.default=p},800:function(e,t,a){"use strict";a.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}},866:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),c=a(799),d=a.n(c),i=function(e){var t=e.url;return r.a.createElement(d.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-avatar",name:"terra-avatar",version:"3.12.0",url:t})}}}]);