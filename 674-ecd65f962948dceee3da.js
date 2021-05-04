(window.webpackJsonp=window.webpackJsonp||[]).push([[674],{1636:function(e,n,t){"use strict";t.r(n);var i=t(0),r=t.n(i),o=t(819);n.default=function(){return r.a.createElement(o.a,{tiny:r.a.createElement("div",null,"Tiny"),small:r.a.createElement("div",null,"Small"),medium:r.a.createElement("div",null,"Medium"),large:r.a.createElement("div",null,"Large"),huge:r.a.createElement("div",null,"Huge"),enormous:r.a.createElement("div",null,"Enormous")})}},819:function(e,n,t){"use strict";var i=t(0),r=t.n(i),o=t(1),a=t.n(o),l=t(123),u=t.n(l),s=t(161);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function h(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,i=y(e);if(n){var r=y(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return d(this,t)}}function d(e,n){return!n||"object"!==c(n)&&"function"!=typeof n?p(e):n}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v={children:a.a.node,onChange:a.a.func,onResize:a.a.func,tiny:a.a.element,small:a.a.element,medium:a.a.element,large:a.a.element,huge:a.a.element,enormous:a.a.element,responsiveTo:a.a.oneOf(["window","parent"])},w=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(a,e);var n,t,i,o=h(a);function a(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a),(e=o.call(this)).state={element:null},e.setContainer=e.setContainer.bind(p(e)),e.handleResize=e.handleResize.bind(p(e)),e.handleWindowResize=e.handleWindowResize.bind(p(e)),e.animationFrameID=null,e}return n=a,(t=[{key:"componentDidMount",value:function(){var e=this,n=this.props;n.tiny,n.small,n.medium,n.large,n.huge,n.enormous,this.container?(this.handleResize(this.container.getBoundingClientRect().width),this.resizeObserver=new u.a((function(n){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(n[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleResize",value:function(e){var n=this.props,t=n.onChange,i=n.onResize,r=n.tiny,o=n.small,a=n.medium,l=n.large,u=n.huge,c=n.enormous;i&&i(e);var f,m=Object(s.activeBreakpointForSize)(e);t&&m!==this.breakpoint&&t(m),this.breakpoint=m,(r||o||a||l||u||c)&&(f=e>=s.default.enormous&&c?"enormous":e>=s.default.huge&&u?"huge":e>=s.default.large&&l?"large":e>=s.default.medium&&a?"medium":e>=s.default.small&&o?"small":"tiny",this.state.element!==f&&this.setState({element:f}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"render",value:function(){var e=this.props,n=e.children,t=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:r.a.createElement(r.a.Fragment,null,"parent"===t&&!this.container&&r.a.createElement("div",{ref:this.setContainer}),n)}}])&&f(n.prototype,t),i&&f(n,i),a}(r.a.Component);w.propTypes=v,w.defaultProps={responsiveTo:"parent"},n.a=w}}]);