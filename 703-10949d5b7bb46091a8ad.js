(window.webpackJsonp=window.webpackJsonp||[]).push([[703],{1339:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return c}));var r=n(0),o=n.n(r),u=n(25);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var r,o,u=[],a=!0,i=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(u.push(r.value),!e||u.length!==e);a=!0);}catch(t){i=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return u}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(){var t=a(Object(r.useState)(!1),2),e=t[0],n=t[1],i=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=document.activeElement;return i&&i.current.focus(),function(){setTimeout((function(){t&&(t.focus(),n(!1))}),200)}})),o.a.createElement("div",null,o.a.createElement(u.default,{id:"modal-open-button",text:"Open Modal",onClick:function(){return n(!0)}}),o.a.createElement("dialog",{open:e},"This is an open dialog window",o.a.createElement("button",{ref:i,type:"button"},"Test Button")))}}}]);