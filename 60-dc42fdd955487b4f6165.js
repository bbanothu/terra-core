(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1845:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var a=n(0),r=n.n(a),l=n(302),o=n(824),i=n(94),c=n(813),s=n(4),u=n.n(s),m=n(975),d=n(839);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v(e);if(t){var r=v(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=u.a.bind(d.a),_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(o,e);var t,n,a,l=b(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=l.call(this,e)).createListItem=t.createListItem.bind(g(t)),t.handleItemSelection=t.handleItemSelection.bind(g(t)),t.state={selectedKey:null},t}return t=o,(n=[{key:"handleItemSelection",value:function(e,t){e.preventDefault(),this.state.selectedKey!==t.key&&this.setState({selectedKey:t.key})}},{key:"createListItem",value:function(e){return r.a.createElement(i.Item,{key:e.key,isSelectable:!0,isSelected:this.state.selectedKey===e.key,metaData:{key:e.key},onSelect:this.handleItemSelection},r.a.createElement(c.c,{title:e.title,className:x("placeholder")}))}},{key:"createListItems",value:function(e){var t=this;return e.map((function(e){return t.createListItem(e)}))}},{key:"render",value:function(){return r.a.createElement(i.default,{dividerStyle:"standard",role:"listbox","aria-label":"SingleSelectList-label"},this.createListItems(m.a))}}])&&f(t.prototype,n),a&&f(t,a),o}(r.a.Component);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var S={};function w(e){var t=e.components,n=j(e,["components"]);return Object(l.mdx)("wrapper",O({},S,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport List, { Item } from 'terra-list/lib/index';\nimport { Placeholder } from '@cerner/terra-docs';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-select';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass SingleSelectList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createListItem = this.createListItem.bind(this);\n    this.handleItemSelection = this.handleItemSelection.bind(this);\n    this.state = { selectedKey: null };\n  }\n\n  handleItemSelection(event, metaData) {\n    event.preventDefault();\n    if (this.state.selectedKey !== metaData.key) {\n      this.setState({ selectedKey: metaData.key });\n    }\n  }\n\n  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n        isSelectable\n        isSelected={this.state.selectedKey === itemData.key}\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n      >\n        <Placeholder title={itemData.title} className={cx('placeholder')} />\n      </Item>\n    );\n  }\n\n  createListItems(data) {\n    return data.map(childItem => this.createListItem(childItem));\n  }\n\n  render() {\n    return (\n      <List dividerStyle=\"standard\" role=\"listbox\" aria-label=\"SingleSelectList-label\">\n        {this.createListItems(mockData)}\n      </List>\n    );\n  }\n}\n\nexport default SingleSelectList;\n\n")))}w.isMDXComponent=!0;var k=n(798),E=n.n(k),I=n(840),N=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(E.a,{title:t||"Single Select List",description:n,example:r.a.createElement(_,null),exampleCssSrc:r.a.createElement(I.a,null),exampleSrc:r.a.createElement(w,null),isExpanded:a})};function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var C={};function T(e){var t=e.components,n=L(e,["components"]);return Object(l.mdx)("wrapper",D({},C,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(o.a,{mdxType:"Badge"}),Object(l.mdx)("h1",{id:"terra-list---implementing-a-single-select-list"},"Terra List - Implementing a Single Select List"),Object(l.mdx)("p",null,"The terra-list implementation requires controlled state if selections are required. As a result, selections are applied at child item generation from HOC state. The following guide will show you how to implement that state within a single row selection variant of list."),Object(l.mdx)("h2",{id:"state-management"},"State Management"),Object(l.mdx)("p",null,"The state of selection needs to be managed for the list in a HOC. In this example we are going to be a unique key, but the type of state used is open to the implementor of the HOC."),Object(l.mdx)("p",null," First defaulting our state to a null value in the constructor. "),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n+    this.state = { selectedKey: null };\n  }\n  \n  render() {\n    return (\n    );\n  }\n}\n")),Object(l.mdx)("p",null,"Next creating an event handler callback method to pass to the list item's ",Object(l.mdx)("inlineCode",{parentName:"p"},"onSelect")," prop. The ",Object(l.mdx)("inlineCode",{parentName:"p"},"onSelect")," will return the metaData prop passed it each listItem."),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { selectedKey: null };\n+   this.handleItemSelection = this.handleItemSelection.bind(this)\n  }\n  \n+ handleItemSelection(event, metaData) {\n+\n+ }\n  ...\n")),Object(l.mdx)("p",null,"As a precaution we can ",Object(l.mdx)("inlineCode",{parentName:"p"},"preventDefault")," on the event, in case the list has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-diff"},"  handleItemSelection(event, metaData) {\n+    event.preventDefault();\n  }\n")),Object(l.mdx)("p",null,"A single select list normally doesn't allow deselection, so we'll be using it in our example, but if deselection is desired we could adjust this method. So we compare the key to the current one in state, and if they aren't the same we set this as our state."),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-diff"},"  handleItemSelection(event, metaData) {\n    event.preventDefault();\n+    if (this.state.selectedKey !== metaData.key) {\n+      this.setState({ selectedKey: metaData.key });\n+    }\n  }\n")),Object(l.mdx)("p",null,"Setting state will trigger another render. So in the render method we need generate our list items with the updated ",Object(l.mdx)("inlineCode",{parentName:"p"},"isSelected")," and ",Object(l.mdx)("inlineCode",{parentName:"p"},"isSelectable")," props. Each item needs a unique key, not necessarily associated to our own key, but it works as well. The list renders flat, so keys need to be unique even if they are placed within sections.\n",Object(l.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/lists-and-keys.html"},"React List & Key Documentation")),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { selectedKey: null };\n    this.handleItemSelection = this.handleItemSelection.bind(this)\n+   this.createListItem = this.createListItem.bind(this)\n  }\n  ...\n+  createListItem(itemData) {\n+    return (\n+      <Item\n+        key={itemData.key}\n+      >\n+        <Placeholder />\n+      </Item>\n+    );\n+  }\n")),Object(l.mdx)("p",null,"Next we need to set up our ",Object(l.mdx)("inlineCode",{parentName:"p"},"metaData")," object with our key value, and attach the ",Object(l.mdx)("inlineCode",{parentName:"p"},"onSelect")," to our handler."),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-diff"},"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n+       metaData={{ key: itemData.key }}\n+       onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),Object(l.mdx)("p",null,"For the single select list we set ",Object(l.mdx)("inlineCode",{parentName:"p"},"isSelectable")," for all items."),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-diff"},"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n+       isSelectable\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),Object(l.mdx)("p",null,"Finally we need to check if the item matches the selectedKey in state to set ",Object(l.mdx)("inlineCode",{parentName:"p"},"isSelected"),"."),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-diff"},"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n        isSelectable\n+       isSelected={this.state.selectedKey === itemData.key}\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),Object(l.mdx)("p",null,"Then we can implement a method to loop through our data and create the list item with our methods and call it from our render method. Making special note to assign the aria role of ",Object(l.mdx)("inlineCode",{parentName:"p"},'"listbox"')," and a string to ",Object(l.mdx)("inlineCode",{parentName:"p"},"aria-label")," for the list, as it is required for accessibility with selectable list options."),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-diff"},'  render() {\n    return (\n+      <List role="listbox" aria-label="SingleSelectList-label">\n+        {data.map(childItem => this.createListItem(mockData))}\n+      </List>\n    );\n  }\n')),Object(l.mdx)("p",null,"  Using these steps we get the following example."),Object(l.mdx)("h2",{id:"examples"},"Examples"),Object(l.mdx)(N,{mdxType:"SingleSelectList"}))}T.isMDXComponent=!0},798:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var o=r?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e,t&&t.set(e,n);return n}(n(0)),l=d(n(1)),o=d(n(4)),i=n(93),c=d(n(802)),s=d(n(155)),u=n(9),m=d(n(803));function d(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var b=o.default.bind(m.default),y={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,o=e.description,m=e.isExpanded,d=f((0,r.useState)(m),2),p=d[0],h=d[1],y=f((0,r.useState)(!1),2),x=y[0],_=y[1],O=r.default.useContext(i.ThemeContext),j=void 0!==a,S=function(){_(!x),p&&h(!p)},w=function(){h(!p),x&&_(!x)},k=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:b("template",O.className)},r.default.createElement("div",{className:b("header")},l&&r.default.createElement("h2",{className:b("title")},l)),r.default.createElement("div",{className:b("content")},o&&r.default.createElement("div",{className:b("description")},o),t),r.default.createElement("div",{className:b("footer")},n?r.default.createElement("div",{className:b("button-container")},j&&r.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":x}),onClick:S,onKeyDown:function(e){return k(e,S)},onBlur:g,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(c.default,{className:b("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(s.default,{className:b("chevron")})),r.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":p}),onClick:w,onKeyDown:function(e){return k(e,w)},onBlur:g,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(c.default,{className:b("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(s.default,{className:b("chevron")}))):null,r.default.createElement("div",null,x&&r.default.createElement("div",{className:b("css")},a),p&&r.default.createElement("div",{className:b("code")},n))))};x.propTypes=y,x.defaultProps={isExpanded:!1};var _=x;t.default=_},799:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),r=i(n(1)),l=i(n(4)),o=i(n(800));function i(e){return e&&e.__esModule?e:{default:e}}var c=l.default.bind(o.default),s={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},u=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:c("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:c("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:c("badge-version")},"v".concat(l))),i=t?a.default.createElement("a",{className:c("badge"),href:t},a.default.createElement("span",{className:c("badge-name")},"github"),a.default.createElement("span",{className:c("badge-version")},"source")):void 0;return a.default.createElement("div",{className:c("badge-container")},o,i)};u.propTypes=s;var m=u;t.default=m},800:function(e,t,n){"use strict";n.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}},802:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(12);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=function(e){var t=o({},e);return r.a.createElement(l.a,t,r.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=i},803:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___1O6_b","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1ZoHH",template:"ExampleTemplate-module__template___1B5g9",header:"ExampleTemplate-module__header___2bR5C",content:"ExampleTemplate-module__content___2SASu",description:"ExampleTemplate-module__description___3lxCI",footer:"ExampleTemplate-module__footer___2Ksgb","button-container":"ExampleTemplate-module__button-container___14QQP",css:"ExampleTemplate-module__css___jQeii",code:"ExampleTemplate-module__code___cXBxV","css-toggle":"ExampleTemplate-module__css-toggle___SAHk3","code-toggle":"ExampleTemplate-module__code-toggle___2m6hb","is-selected":"ExampleTemplate-module__is-selected___1x5R9",item:"ExampleTemplate-module__item___3iCxl",chevron:"ExampleTemplate-module__chevron___3omkp",title:"ExampleTemplate-module__title___1WjQj","dynamic-content":"ExampleTemplate-module__dynamic-content___2bRVU"}},824:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),l=n(799),o=n.n(l),i=function(e){var t=e.url;return r.a.createElement(o.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-list",name:"terra-list",version:"4.46.0",url:t})}},839:function(e,t,n){"use strict";t.a={placeholder:"ListDocCommon-module__placeholder___3a1of"}},840:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(0);var a=n(302);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o={};function i(e){var t=e.components,n=l(e,["components"]);return Object(a.mdx)("wrapper",r({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .placeholder {\n    height: 50px;\n  }\n}\n\n")))}i.isMDXComponent=!0},975:function(e,t,n){"use strict";t.a=[{title:"Item 0",key:"unique-0"},{title:"Item 1",key:"unique-1"},{title:"Item 2",key:"unique-2"},{title:"Item 3",key:"unique-3"},{title:"Item 4",key:"unique-4"}]}}]);