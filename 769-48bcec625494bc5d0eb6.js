(window.webpackJsonp=window.webpackJsonp||[]).push([[769],{1546:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),u=n(4),o=n.n(u),l=n(812),c=n(830);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var r,a,u=[],o=!0,l=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(u.push(r.value),!e||u.length!==e);o=!0);}catch(t){l=!0,a=t}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return u}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s=o.a.bind(c.a);e.default=function(){var t=i(Object(r.useState)(0),2),e=t[0],n=t[1],u=i(Object(r.useState)(""),2),o=u[0],c=u[1],f=Object(r.useRef)(null);return a.a.createElement("div",{className:s("content-wrapper")},a.a.createElement("p",null,"onInput Trigger Count:"," ",a.a.createElement("span",null,e)),a.a.createElement(l.a,{onChange:function(t,e){c(e)},onInput:function(t){c(t.target.value),n(e+1)},value:o,ariaLabel:"label",refCallback:function(t){f.current=t}}),a.a.createElement("button",{type:"button",onClick:function(){if(f.current){f.current.value="IpsumLorem";var t=new Event("input",{bubbles:!0,cancelable:!1});f.current.dispatchEvent(t)}},id:"textarea-set-text-button"},"Set textarea text"))}}}]);