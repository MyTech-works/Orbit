(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7030,5463],{50676:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:function(){return r}})},96156:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})},34699:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(82961);function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}}(e,n)||(0,r.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},82961:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(50676);function o(e,n){if(e){if("string"===typeof e)return(0,r.Z)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,r.Z)(e,n):void 0}}},1674:function(e,n,t){e.exports=function(e,n){const r=function(){if("undefined"!==typeof globalThis)return globalThis;if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t.g)return t.g;throw new Error("unable to locate global object")}();return new Promise(((t,o)=>{let i;const a=()=>{r[e]&&(t(r[e]),clearInterval(i))};i=setInterval(a,n||300),a()}))}},36808:function(e,n,t){var r,o;!function(i){if(void 0===(o="function"===typeof(r=i)?r.call(n,t,n,e):r)||(e.exports=o),!0,e.exports=i(),!!0){var a=window.Cookies,c=window.Cookies=i();c.noConflict=function(){return window.Cookies=a,c}}}((function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var r in t)n[r]=t[r]}return n}function n(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(r){function o(){}function i(n,t,i){if("undefined"!==typeof document){"number"===typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(t);/^[\{\[]/.test(a)&&(t=a)}catch(f){}t=r.write?r.write(t,n):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=n+"="+t+c}}function a(e,t){if("undefined"!==typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var c=i[a].split("="),u=c.slice(1).join("=");t||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var f=n(c[0]);if(u=(r.read||r)(u,f)||n(u),t)try{u=JSON.parse(u)}catch(l){}if(o[f]=u,e===f)break}catch(l){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return a(e,!1)},o.getJSON=function(e){return a(e,!0)},o.remove=function(n,t){i(n,"",e(t,{expires:-1}))},o.defaults={},o.withConverter=t,o}((function(){}))}))},71168:function(e){function n(e){this.message=e}n.prototype=new Error,n.prototype.name="InvalidCharacterError",e.exports="undefined"!==typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new n("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,o,i=0,a=0,c="";o=t.charAt(a++);~o&&(r=i%4?64*r+o:o,i++%4)?c+=String.fromCharCode(255&r>>(-2*i&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return c}},84491:function(e,n,t){var r=t(71168);e.exports=function(e){var n=e.replace(/-/g,"+").replace(/_/g,"/");switch(n.length%4){case 0:break;case 2:n+="==";break;case 3:n+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,n){var t=n.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(n)}catch(t){return r(n)}}},46489:function(e,n,t){"use strict";var r=t(84491);function o(e){this.message=e}o.prototype=new Error,o.prototype.name="InvalidTokenError",e.exports=function(e,n){if("string"!==typeof e)throw new o("Invalid token specified");var t=!0===(n=n||{}).header?0:1;try{return JSON.parse(r(e.split(".")[t]))}catch(i){throw new o("Invalid token specified: "+i.message)}},e.exports.InvalidTokenError=o},16071:function(e,n,t){"use strict";var r=t(63038),o=t(20862);n.default=void 0;var i=o(t(67294)),a=t(11689),c=t(72441),u=t(75749),f={};function l(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n=!1!==e.prefetch,t=(0,c.useRouter)(),o=t&&t.pathname||"/",s=i.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),i=t[0],c=t[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):c||i}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,y=e.shallow,g=e.scroll,w=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var b=i.Children.only(v),m=b&&"object"===typeof b&&b.ref,C=(0,u.useIntersection)({rootMargin:"200px"}),k=r(C,2),I=k[0],E=k[1],x=i.default.useCallback((function(e){I(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,I]);(0,i.useEffect)((function(){var e=E&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof w?w:t&&t.locale,o=f[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(t,d,p,{locale:r})}),[p,d,E,w,n,t]);var S={ref:x,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,c,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:i,locale:u,scroll:c}))}(e,t,d,p,h,y,g,w)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var L="undefined"!==typeof w?w:t&&t.locale,R=t&&t.isLocaleDomain&&(0,a.getDomainLocale)(p,L,t&&t.locales,t&&t.domainLocales);S.href=R||(0,a.addBasePath)((0,a.addLocale)(p,L,t&&t.defaultLocale))}return i.default.cloneElement(b,S)};n.default=s},75749:function(e,n,t){"use strict";var r=t(63038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,u=(0,o.useRef)(),f=(0,o.useState)(!1),l=r(f,2),s=l[0],d=l[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),t||s||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,a=r.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return(0,o.useEffect)((function(){if(!a&&!s){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[s]),[p,s]};var o=t(67294),i=t(98391),a="undefined"!==typeof IntersectionObserver;var c=new Map},41664:function(e,n,t){e.exports=t(16071)}}]);