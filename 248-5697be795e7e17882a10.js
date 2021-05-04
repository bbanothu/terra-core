(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{1232:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));n(0);var a=n(302),r=n(916);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l={};function d(e){var t=e.components,n=i(e,["components"]);return Object(a.mdx)("wrapper",o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(r.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-button-upgrade-guide"},"Terra Button Upgrade Guide"),Object(a.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),Object(a.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(a.mdx)("h4",{id:"removed"},"Removed"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"--terra-button-vertical-padding"),Object(a.mdx)("li",{parentName:"ul"},"--terra-button-text-only-horizontal-margin"),Object(a.mdx)("li",{parentName:"ul"},"--terra-button-icon-only-horizontal-margin"),Object(a.mdx)("li",{parentName:"ul"},"--terra-button-text-and-icon-horizontal-margin"),Object(a.mdx)("li",{parentName:"ul"},"--terra-button-text-and-icon-margin-between")),Object(a.mdx)("h4",{id:"added"},"Added"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"--terra-button-padding-bottom"),Object(a.mdx)("li",{parentName:"ul"},"--terra-button-padding-top"),Object(a.mdx)("li",{parentName:"ul"},"--terra-button-text-only-margin-left"),Object(a.mdx)("li",{parentName:"ul"},"--terra-button-text-only-margin-right"),Object(a.mdx)("li",{parentName:"ul"},"--terra-button-icon-only-margin-left"),Object(a.mdx)("li",{parentName:"ul"},"--terra-button-icon-only-margin-right"),Object(a.mdx)("li",{parentName:"ul"},"--terra-button-text-and-icon-margin-left"),Object(a.mdx)("li",{parentName:"ul"},"--terra-button-text-and-icon-margin-right"),Object(a.mdx)("li",{parentName:"ul"},"--terra-button-text-first-margin-right"),Object(a.mdx)("li",{parentName:"ul"},"--terra-button-icon-first-margin-right")),Object(a.mdx)("h2",{id:"changes-from-version-1-to-version-2"},"Changes from version 1 to version 2"),Object(a.mdx)("p",null,"With the release of terra-button v2.0.0, the button and\nbutton group components have been updated to align to the One Cerner\nStandard Design. With that alignment, there are some noted changes to these\ncomponents and components that depend on terra-button and\nterra-button-group."),Object(a.mdx)("p",null,"Check out the ",Object(a.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/blob/main/packages/terra-button/CHANGELOG.md#200---february-12-2018"},"CHANGELOG for terra-button")," to view all the changes in the v2.0.0 release."),Object(a.mdx)("h2",{id:"noted-terra-button-changes"},"Noted Terra Button Changes"),Object(a.mdx)("h3",{id:"variantstypes"},"Variants/Types:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},'"Default" got remapped to "Neutral" (gray)'),Object(a.mdx)("li",{parentName:"ul"},'"Primary" got remapped to "Emphasis" (blue)'),Object(a.mdx)("li",{parentName:"ul"},'"Link"-style button is now gone, "De-Emphasis" will be your replacement\nfor the most part in most cases.',Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},'The de-emphasis button does not include an underline on hover - that\nis a hyperlink and you will need to use hyperlink to achieve that\nstyling. But Blue text (a de-decorated button with only a\n"key-color" as the interaction indication) still remains, and while\napps are in a "hybrid" replacement mode (Orion TRVM, BlueSteel, etc)\nfor a period of time where parts are old and parts are new, we won\'t\ndo a hover background treatment but only a dark blue color change so\nthere isn\'t a super noticeable difference. Pressing on the\nde-emphasis button will show what the hover may look like in the\nfuture. Check with UX for guidance to appropriate usage.'),Object(a.mdx)("li",{parentName:"ul"},"The OCS Clinical theme does not include this visual style of button,\nso a future theme switch will need to be evaluated by UX before a\nteam does so."))),Object(a.mdx)("li",{parentName:"ul"},"The secondary variant has been removed.")),Object(a.mdx)("h3",{id:"new-action-variant"},'New: "Action" variant'),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},'Mainly added for OCS Consumer (Wellness, Patient Portal, etc), or\nnew designs needing "floating" action buttons'),Object(a.mdx)("li",{parentName:"ul"},"Check with UX before using them in any existing projects")),Object(a.mdx)("h3",{id:"new-utility-variant"},'New: "Utility" variant'),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},'Not used except for construction of re-usable components, think of\nthe close "X" in a dialog'),Object(a.mdx)("li",{parentName:"ul"},"Check with UX before using them")),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},'Others not included on initial 2.0 release: "Secondary"(green),\n"Outline", "Positive"(green), "Negative"(red)')),Object(a.mdx)("p",null,"These can be added as requested, and made available in Terra even though\nthey are not OCS standard, mainly to assist in teams doing architecture\nreplacement (TRVM for React, BlueSteel for React, etc.) or teams in\nHybrid mode (some new React, some original app)"),Object(a.mdx)("p",null,"They will be documented as non-OCS, so that is clear teams using them\nwill require a UX eval before switching to an OCS theme (Clinical or\nConsumer) in the future."),Object(a.mdx)("h3",{id:"sizes-variant-changes"},"Sizes variant changes:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},'"Tiny/Small/Medium/Large/Huge" : all the size varianets have been removed.')),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},'"Compact" : Still available with no change.'),Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},"May be needed for use in Tables, MPages Fusion compatibility, or a\nterra-mpagestyle-theme, reach out to UX if you want to use this.")))))}d.isMDXComponent=!0},799:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),r=l(n(1)),o=l(n(4)),i=l(n(800));function l(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(i.default),u={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},m=function(e){var t=e.src,n=e.name,r=e.url,o=e.version,i=a.default.createElement("a",{className:d("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},a.default.createElement("span",{className:d("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:d("badge-version")},"v".concat(o))),l=t?a.default.createElement("a",{className:d("badge"),href:t},a.default.createElement("span",{className:d("badge-name")},"github"),a.default.createElement("span",{className:d("badge-version")},"source")):void 0;return a.default.createElement("div",{className:d("badge-container")},i,l)};m.propTypes=u;var c=m;t.default=c},800:function(e,t,n){"use strict";n.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}},916:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),o=n(799),i=n.n(o),l=function(e){var t=e.url;return r.a.createElement(i.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-button",name:"terra-button",version:"3.55.0",url:t})}}}]);