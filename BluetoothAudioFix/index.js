(function(f,h,_,g){"use strict";function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){return a=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},a(t,e)}function p(t,e){return a(t,e)}function b(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function m(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function c(t,e,o){return m()?c=Reflect.construct:c=function(r,u,i){var d=[null];d.push.apply(d,u);var E=Function.bind.apply(r,d),v=new E;return i&&p(v,i.prototype),v},c.apply(null,arguments)}function w(t,e,o){return c.apply(null,arguments)}function P(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},l(t)}function s(t){return l(t)}function y(t){var e=typeof Map=="function"?new Map:void 0;return y=function(n){if(n===null||!P(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,r)}function r(){return w(n,arguments,s(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),p(r,n)},y(t)}function R(t){return y(t)}function N(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function S(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function M(t){return t&&t.constructor===Symbol?"symbol":typeof t}function j(t,e){return e&&(M(e)==="object"||typeof e=="function")?e:S(t)}function x(t){var e=N();return function(){var n=s(t),r;if(e){var u=s(this).constructor;r=Reflect.construct(n,arguments,u)}else r=n.apply(this,arguments);return j(this,r)}}let B=function(t){b(o,t);var e=x(o);function o(){return O(this,o),e.apply(this,arguments)}var n=o.prototype;return n.getByName=function(r,u){return g.getModule(function(i){return i?.default?.name===r},u)},n.start=async function(){const r=g.ReactNative.NativeModules.AudioManager;this.patcher.insteadDoNothing(r,"setCommunicationModeOn")},o}(R(_.Plugin));var F={onLoad:function(){h.logger.log("Bluetooth Audio Fix has started.")},onUnload:function(){h.logger.log("Bluetooth Audio Fix has stopped.")},settings:B};return f.default=F,Object.defineProperty(f,"__esModule",{value:!0}),f})({},vendetta,vendetta.entities,vendetta.metro);
