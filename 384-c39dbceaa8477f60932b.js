(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{1738:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(894);e.default=function(){return a.a.createElement(o.a,{title:"Default Toggle Section Header"},a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))}},808:function(t,e,n){"use strict";var i=n(0),a=n.n(i),o=n(1),r=n.n(o),s=n(4),l=n.n(s),u=n(809),c=n.n(u);function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function f(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=l.a.bind({toggle:"Toggle-module__toggle___1Qy4y"}),m={children:r.a.node.isRequired,isAnimated:r.a.bool,isOpen:r.a.bool},d=function(t){var e,n=t.isAnimated,i=t.isOpen,o=t.children,r=f(t,["isAnimated","isOpen","children"]),s=i?"auto":0;return e=n?a.a.createElement(c.a,{duration:250,height:s,easing:"ease-out"},o):i&&o,a.a.createElement("div",h({},r,{className:p("toggle",r.className),"aria-hidden":!i}),e)};d.propTypes=m,d.defaultProps={isAnimated:!1,isOpen:!1};e.a=d},809:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=u(n(0)),s=u(n(1)),l=u(n(10));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},f=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function p(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;for(var a={},o=Object.keys(t),r=0;r<o.length;r++){var s=o[r];-1===n.indexOf(s)&&(a[s]=t[s])}return a}function m(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function d(t){return!isNaN(parseFloat(t))&&isFinite(t)}function y(t){return"string"==typeof t&&t.search("%")===t.length-1&&d(t.substr(0,t.length-1))}function g(t,e){t&&"function"==typeof t&&t(e)}var b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.animationFrameIDs=[];var i="auto",o="visible";d(t.height)?(i=t.height<0||"0"===t.height?0:t.height,o="hidden"):y(t.height)&&(i="0%"===t.height?0:t.height,o="hidden"),n.animationStateClasses=a({},h,t.animationStateClasses);var r=n.getStaticStateClasses(i);return n.state={animationStateClasses:r,height:i,overflow:o,shouldUseTransitions:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n,i,a=this,o=this.props,r=o.delay,s=o.duration,u=o.height,h=o.onAnimationEnd,f=o.onAnimationStart;if(this.contentElement&&u!==t.height){var p;this.showContent(e.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var O=s+r,v=null,w={height:null,overflow:"hidden"},S="auto"===e.height;d(u)?(v=u<0||"0"===u?0:u,w.height=v):y(u)?(v="0%"===u?0:u,w.height=v):(v=b,w.height="auto",w.overflow=null),S&&(w.height=v,v=b);var C=(0,l.default)((c(p={},this.animationStateClasses.animating,!0),c(p,this.animationStateClasses.animatingUp,"auto"===t.height||u<t.height),c(p,this.animationStateClasses.animatingDown,"auto"===u||u>t.height),c(p,this.animationStateClasses.animatingToHeightZero,0===w.height),c(p,this.animationStateClasses.animatingToHeightAuto,"auto"===w.height),c(p,this.animationStateClasses.animatingToHeightSpecific,w.height>0),p)),j=this.getStaticStateClasses(w.height);this.setState({animationStateClasses:C,height:v,overflow:"hidden",shouldUseTransitions:!S}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),S?(w.shouldUseTransitions=!0,m(this.animationFrameIDs),this.animationFrameIDs=(n=function(){a.setState(w),g(f,{newHeight:w.height})},(i=[])[0]=requestAnimationFrame((function(){i[1]=requestAnimationFrame((function(){n()}))})),i),this.animationClassesTimeoutID=setTimeout((function(){a.setState({animationStateClasses:j,shouldUseTransitions:!1}),a.hideContent(w.height),g(h,{newHeight:w.height})}),O)):(g(f,{newHeight:v}),this.timeoutID=setTimeout((function(){w.animationStateClasses=j,w.shouldUseTransitions=!1,a.setState(w),"auto"!==u&&a.hideContent(v),g(h,{newHeight:v})}),O))}}},{key:"componentWillUnmount",value:function(){m(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,l.default)((c(e={},this.animationStateClasses.static,!0),c(e,this.animationStateClasses.staticHeightZero,0===t),c(e,this.animationStateClasses.staticHeightSpecific,t>0),c(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,i=n.animateOpacity,o=n.applyInlineTransitions,s=n.children,u=n.className,h=n.contentClassName,m=n.delay,d=n.duration,y=n.easing,g=n.id,b=n.style,O=this.state,v=O.height,w=O.overflow,S=O.animationStateClasses,C=O.shouldUseTransitions,j=a({},b,{height:v,overflow:w||b.overflow});C&&o&&(j.transition="height "+d+"ms "+y+" "+m+"ms",b.transition&&(j.transition=b.transition+", "+j.transition),j.WebkitTransition=j.transition);var T={};i&&(T.transition="opacity "+d+"ms "+y+" "+m+"ms",T.WebkitTransition=T.transition,0===v&&(T.opacity=0));var E=(0,l.default)((c(t={},S,!0),c(t,u,u),t)),P="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===v;return r.default.createElement("div",a({},p.apply(void 0,[this.props].concat(f)),{"aria-hidden":P,className:E,id:g,style:j}),r.default.createElement("div",{className:h,style:T,ref:function(t){return e.contentElement=t}},s))}}]),e}(r.default.Component);b.propTypes={"aria-hidden":s.default.bool,animateOpacity:s.default.bool,animationStateClasses:s.default.object,applyInlineTransitions:s.default.bool,children:s.default.any.isRequired,className:s.default.string,contentClassName:s.default.string,delay:s.default.number,duration:s.default.number,easing:s.default.string,height:function(t,e,n){var a=t[e];return"number"==typeof a&&a>=0||y(a)||"auto"===a?null:new TypeError('value "'+a+'" of type "'+("undefined"==typeof a?"undefined":i(a))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:s.default.string,onAnimationEnd:s.default.func,onAnimationStart:s.default.func,style:s.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:h,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=b},894:function(t,e,n){"use strict";var i=n(0),a=n.n(i),o=n(1),r=n.n(o),s=n(858),l=n(808);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=O(t);if(e){var a=O(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return g(this,n)}}function g(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v={children:r.a.node.isRequired,title:r.a.string.isRequired,level:r.a.oneOf([1,2,3,4,5,6]),onClose:r.a.func,onOpen:r.a.func,sectionHeaderAttrs:r.a.object,isAnimated:r.a.bool,isInitiallyOpen:r.a.bool,isTransparent:r.a.bool,isOpen:r.a.bool},w={level:2,sectionHeaderAttrs:{},isAnimated:!1,isInitiallyOpen:!1,isTransparent:!1,isOpen:void 0},S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(r,t);var e,n,i,o=y(r);function r(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r);var n=(e=o.call(this,t)).props.isInitiallyOpen,i=void 0!==n&&n;return e.state={isOpen:i},e.handleOnClick=e.handleOnClick.bind(b(e)),e.wrapOnClick=e.wrapOnClick.bind(b(e)),e}return e=r,i=[{key:"getDerivedStateFromProps",value:function(t,e){return void 0!==t.isOpen&&e.isOpen!==t.isOpen?{isOpen:t.isOpen}:{isOpen:e.isOpen}}}],(n=[{key:"handleOnClick",value:function(t){t.preventDefault();var e=this.props,n=e.onOpen,i=e.onClose;void 0===e.isOpen&&(n&&!this.state.isOpen?n():i&&this.state.isOpen&&i(),this.setState((function(t){return{isOpen:!t.isOpen}})))}},{key:"wrapOnClick",value:function(t){var e=this;return function(n){e.handleOnClick(n),t&&t(n)}}},{key:"render",value:function(){var t=this.props,e=t.children,n=t.title,i=t.level,o=t.sectionHeaderAttrs,r=t.isAnimated,u=(t.isInitiallyOpen,t.isTransparent),m=(t.isOpen,t.onOpen,t.onClose,p(t,["children","title","level","sectionHeaderAttrs","isAnimated","isInitiallyOpen","isTransparent","isOpen","onOpen","onClose"])),d=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},o);return d.onClick=this.wrapOnClick(o.onClick),a.a.createElement("div",m,a.a.createElement(s.a,c({},d,{"aria-expanded":this.state.isOpen,isOpen:this.state.isOpen,level:i,title:n,isTransparent:u})),a.a.createElement(l.a,{isAnimated:r,isOpen:this.state.isOpen},e))}}])&&m(e.prototype,n),i&&m(e,i),r}(a.a.Component);S.propTypes=v,S.defaultProps=w,e.a=S}}]);