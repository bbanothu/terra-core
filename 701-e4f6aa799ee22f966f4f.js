(window.webpackJsonp=window.webpackJsonp||[]).push([[701],{1336:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(11),a=n(311);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=y(e);if(t){var r=y(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h={en:{"App.locale":"en"},"en-US":{"App.locale":"en-US"}},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(s,e);var t,n,o,i=f(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e)).state={locale:"en"},t.handleSwitchLocale=t.handleSwitchLocale.bind(p(t)),t}return t=s,(n=[{key:"handleSwitchLocale",value:function(){"en"!==this.state.locale?this.setState({locale:"en"}):this.setState({locale:"en-US"})}},{key:"render",value:function(){return r.a.createElement(a.default,{locale:this.state.locale,customMessages:h[this.state.locale]},r.a.createElement("div",{id:"message"},r.a.createElement(c.FormattedMessage,{id:"App.locale"})),r.a.createElement("button",{type:"button",id:"switch",onClick:this.handleSwitchLocale},"Switch"))}}])&&l(t.prototype,n),o&&l(t,o),s}(r.a.Component);t.default=b}}]);