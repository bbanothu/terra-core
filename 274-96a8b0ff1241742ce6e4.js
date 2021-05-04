(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{1241:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));a(0);var n=a(302),r=a(925);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i={};function s(e){var t=e.components,a=d(e,["components"]);return Object(n.mdx)("wrapper",o({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)(r.a,{mdxType:"Badge"}),Object(n.mdx)("h1",{id:"terra-form-field-upgrade-guide"},"Terra Form Field Upgrade Guide"),Object(n.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),Object(n.mdx)("h3",{id:"props"},"Props"),Object(n.mdx)("h4",{id:"updated"},"Updated"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Form Fields allowed the ",Object(n.mdx)("inlineCode",{parentName:"li"},"label")," to be a node, which potentially breaks the display when injecting other non-inline-only text elements (terra-text) or has the potential to completely break accessibility if something non-text based would be passed in."),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"label")," prop's type changed from node to string.")),Object(n.mdx)("h5",{id:"steps-to-upgrade"},"Steps to Upgrade"),Object(n.mdx)("p",null,"To upgrade from 3.0 to 4.0 each existing Field must be reviewed and updated to ensure only a string is being passed to the ",Object(n.mdx)("inlineCode",{parentName:"p"},"label")," prop. Solutions passing node data types need to be reworked to provide only a string."),Object(n.mdx)("h2",{id:"changes-from-20-to-30"},"Changes from 2.0 to 3.0"),Object(n.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(n.mdx)("p",null,"The following transitive dependency had breaking changes. See its upgrade guide for more information."),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"terra-doc-template")))}s.isMDXComponent=!0},799:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),r=i(a(1)),o=i(a(4)),d=i(a(800));function i(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(d.default),l={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},c=function(e){var t=e.src,a=e.name,r=e.url,o=e.version,d=n.default.createElement("a",{className:s("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},n.default.createElement("span",{className:s("badge-name")},r?"package":"npm"),n.default.createElement("span",{className:s("badge-version")},"v".concat(o))),i=t?n.default.createElement("a",{className:s("badge"),href:t},n.default.createElement("span",{className:s("badge-name")},"github"),n.default.createElement("span",{className:s("badge-version")},"source")):void 0;return n.default.createElement("div",{className:s("badge-container")},d,i)};c.propTypes=l;var u=c;t.default=u},800:function(e,t,a){"use strict";a.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}},925:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),o=a(799),d=a.n(o),i=function(e){var t=e.url;return r.a.createElement(d.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field",name:"terra-form-field",version:"4.17.0",url:t})}}}]);