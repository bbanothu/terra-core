(window.webpackJsonp=window.webpackJsonp||[]).push([[431],{1925:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(309),u=n(4),a=n.n(u),c=n(847),l=a.a.bind({"long-text-tag-wrapper":"LongTextTagTest-module__long-text-tag-wrapper___6ED3y"}),s=r.a.createElement(i.default,null);t.default=function(){return r.a.createElement("div",{className:l("long-text-tag-wrapper")}," ",r.a.createElement(c.a,{icon:s,text:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores ",id:"longTextIcon",onClick:function(){return window.alert("Tag has been clicked!")}})," ")}},847:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(1),u=n.n(i),a=n(10),c=n.n(a),l=n(4),s=n.n(l),f=n(6),p=n.n(f),y=n(9);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=w(e);if(t){var r=w(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var T=s.a.bind({"clinical-lowlight-theme":"Tag-module__clinical-lowlight-theme___4QhDW","orion-fusion-theme":"Tag-module__orion-fusion-theme___BneaB",tag:"Tag-module__tag___2lysh","is-interactive":"Tag-module__is-interactive___1N9Dq","is-focused":"Tag-module__is-focused___F5hvj",icon:"Tag-module__icon___3iAGl"}),x={href:u.a.string,icon:u.a.element,onClick:u.a.func,onBlur:u.a.func,onFocus:u.a.func,onKeyUp:u.a.func,text:u.a.string.isRequired},B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(u,e);var t,n,o,i=g(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e)).state={focused:!1},t.handleKeyUp=t.handleKeyUp.bind(O(t)),t.handleOnBlur=t.handleOnBlur.bind(O(t)),t}return t=u,(n=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===y.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.text,o=e.href,i=e.onClick,u=(e.onBlur,e.onFocus),a=(e.onKeyUp,_(e,["icon","text","href","onClick","onBlur","onFocus","onKeyUp"])),l=this.context,s=c()(T("tag",{"is-focused":this.state.focused},{"is-interactive":o||i},l.className),a.className),f=T("icon"),p=t?r.a.createElement("span",{className:f},t):null,y=o||i?o?"a":"button":"span";return r.a.createElement(y,d({},a,{className:s,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:i,onFocus:u,href:o}),p,n)}}])&&m(t.prototype,n),o&&m(t,o),u}(r.a.Component);B.propTypes=x,B.contextType=p.a;t.a=B}}]);