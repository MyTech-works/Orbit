(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3247],{34575:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},93913:function(e){function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},67823:function(e,t,n){e=n.nmd(e);var r=n(17673),a=n(33335),i=n(10861);function o(e,t,n){var r=[],a=!1;return Array.isArray(e)&&n&&(a=!0),Object.keys(e).forEach((function(i){var l,u,s=e[i];if(l=n?n+"["+(a?"":i)+"]":i,null===s){if(t.removeNull)return;u=t.encodeComponents?encodeURIComponent(l):l}else u="object"===typeof s?o(s,t,l):t.encodeComponents?encodeURIComponent(l)+"="+encodeURIComponent(s):l+"="+s;r.push(u)})),r.join("&")}e.defaults={encodeComponents:!0,removeNull:!1},e.exports=function(t,n,l){var u=i.parse(t,!0),s=(u.query,"string"===typeof n?r.parse(n):n),c=a(!0,{},u.query,s);l=a({},e.defaults,l||{});u.query=null;var d=o(c,l);return u.search=d?"?"+d:null,i.format(u)}},33335:function(e){"use strict";var t=Object.prototype.hasOwnProperty,n=Object.prototype.toString,r=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=function(e){return"function"===typeof Array.isArray?Array.isArray(e):"[object Array]"===n.call(e)},o=function(e){if(!e||"[object Object]"!==n.call(e))return!1;var r,a=t.call(e,"constructor"),i=e.constructor&&e.constructor.prototype&&t.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!a&&!i)return!1;for(r in e);return"undefined"===typeof r||t.call(e,r)},l=function(e,t){r&&"__proto__"===t.name?r(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},u=function(e,n){if("__proto__"===n){if(!t.call(e,n))return;if(a)return a(e,n).value}return e[n]};e.exports=function e(){var t,n,r,a,s,c,d=arguments[0],m=1,p=arguments.length,f=!1;for("boolean"===typeof d&&(f=d,d=arguments[1]||{},m=2),(null==d||"object"!==typeof d&&"function"!==typeof d)&&(d={});m<p;++m)if(null!=(t=arguments[m]))for(n in t)r=u(d,n),d!==(a=u(t,n))&&(f&&a&&(o(a)||(s=i(a)))?(s?(s=!1,c=r&&i(r)?r:[]):c=r&&o(r)?r:{},l(d,{name:n,newValue:e(f,c,a)})):"undefined"!==typeof a&&l(d,{name:n,newValue:a}));return d}},38366:function(e,t,n){var r=n(34155);const a=n(31483),i=n(67823),o=n(82795);e.exports=function(e,t){const n="https://up.refrens.com";try{const{host:o,origin:l,pathname:u}=new URL(e),s="s3.ap-south-1.amazonaws.com"===o,c="/blob"===u.slice(-5);if("production"===r.env.REFRENS_ENV&&s){if(c){const e=u.match(/(.*)\/(.*)\/(.*)\/(.*)/);if(e){const[,,...r]=e,o=`${n}/${r.join("/")}`;return i(o,{fq:a(JSON.stringify(t))})}}const e=`${l}${u}`.match(/(.*)\/(.*)\/(.*)\/(.*)\.(.*)/);if(e){const[,,...r]=e,o=r.pop(),l=`${n}/${r.join("/")}.${o}`;return i(l,{fq:a(JSON.stringify(t))})}}}catch(l){o()}return e}},55385:function(e,t,n){const r=n(38366);e.exports=function(e,t){if(e){return t.map((t=>`${r(e,t)} ${t.w}w`)).join(", ")}}},34578:function(e,t,n){"use strict";n.d(t,{K5e:function(){return Tt},j_R:function(){return wt},a2Z:function(){return Lt},PgN:function(){return At},R1m:function(){return Rt},qEK:function(){return Nt},LlL:function(){return Dt},cIM:function(){return It},jen:function(){return Mt},fU8:function(){return qt},_ME:function(){return Ot},s$$:function(){return _t},_Qn:function(){return zt},x8P:function(){return Ht},nYX:function(){return Wt},CKM:function(){return Vt},tv5:function(){return jt},yR2:function(){return Gt},GTk:function(){return Kt},jjA:function(){return Zt},dLw:function(){return Ut},s1S:function(){return Yt},TvZ:function(){return Jt},Riw:function(){return Qt},Xdw:function(){return Xt},Eep:function(){return en},U8:function(){return rn},KiX:function(){return an},kIV:function(){return tn},xn5:function(){return nn},FF9:function(){return on},rUS:function(){return ln},yhk:function(){return un},KNT:function(){return sn},xqE:function(){return cn},YuO:function(){return dn},oA:function(){return mn},jbu:function(){return pn},$RE:function(){return Bt},QzM:function(){return fn},Sr5:function(){return hn},K_N:function(){return gn},P9Q:function(){return yn},eEV:function(){return vn},wIr:function(){return bn},M_2:function(){return Sn},yr7:function(){return En},$Bi:function(){return Cn},jSk:function(){return $n},Ct0:function(){return Fn},kz$:function(){return Pn},qdz:function(){return xn},IUk:function(){return kn},JxH:function(){return wn},$Tc:function(){return Tn},G2Y:function(){return Ln},zID:function(){return An},N4p:function(){return Rn},V5g:function(){return Nn},HHJ:function(){return Dn},Jl0:function(){return In},v37:function(){return Mn},TX1:function(){return Bn},my0:function(){return qn},TJ7:function(){return On},twM:function(){return _n},Hrv:function(){return zn},cF8:function(){return Hn},agD:function(){return Wn},olm:function(){return Vn},mBz:function(){return jn},PcR:function(){return Gn},wEW:function(){return Kn},eJJ:function(){return Zn},Bt3:function(){return Un},tLe:function(){return Yn},nw0:function(){return Jn},r76:function(){return Qn},kQ8:function(){return Xn},v3j:function(){return er},CDv:function(){return tr}});var r=n(70655),a=n(67294),i=n(5434),o=n(89583),l=n(8193),u=n(63750),s=n(81872),c=n(51649),d=n(47516),m=n(86893),p=n(53854),f=n(52220),h=n(6767),g=n.n(h);const y=f.default.div`
  ${({theme:{spacings:e},shape:t,backgroundColor:n,size:r,color:a})=>f.css`
    height: ${r}px;
    width: ${r}px;
    border-radius: ${e.s1};
    background: ${n||g()(a).alpha(.1).rgb().string()};
    display: flex;
    justify-content: center;
    align-items: center;
    > svg {
      height: 50%;
      width: 50%;
    }
    ${"circle"===t&&f.css`
      border-radius: 50%;
    `}
  `}
`;var v=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 20 21"},a.createElement("g",{id:"amount-due",transform:"translate(-707.865 -666.5)"},a.createElement("rect",{id:"Rectangle_920","data-name":"Rectangle 920",width:e,height:"20",transform:"translate(707.865 667)",fill:"#fff",opacity:"0"}),a.createElement("g",{id:"Group_1803","data-name":"Group 1803",transform:"translate(369.72 376.666)"},a.createElement("path",{id:"Subtraction_9","data-name":"Subtraction 9",d:"M15,20H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0H15a3,3,0,0,1,3,3V17A3,3,0,0,1,15,20ZM4.39,12.848l-1.475.346a2.612,2.612,0,0,0,2.269,2.32V16.7H6.41V15.494A2.267,2.267,0,0,0,8.356,13.28a2.237,2.237,0,0,0-2-2.2l-.931-.211c-.4-.092-.627-.323-.627-.634,0-.346.28-.718.895-.718a1,1,0,0,1,1.089.921l1.484-.412a2.387,2.387,0,0,0-1.854-1.9V6.895H5.184v1.2a2.328,2.328,0,0,0-2.02,2.3A2.2,2.2,0,0,0,5.091,12.5l.959.239c.435.1.655.311.655.633,0,.419-.367.7-.914.7A1.3,1.3,0,0,1,4.39,12.848Zm9-4.173a.647.647,0,0,0-.456.183.719.719,0,0,0-.186.475.609.609,0,0,0,.05.251.732.732,0,0,0,.136.222.637.637,0,0,0,.913,0,.732.732,0,0,0,.136-.222.623.623,0,0,0,.049-.251.715.715,0,0,0-.185-.475A.644.644,0,0,0,13.387,8.675Zm0-6.242c-.019,0-.039,0-.059,0a.9.9,0,0,0-.818.969l.233,3.705a.658.658,0,0,0,.6.624l.043,0a.656.656,0,0,0,.64-.626L14.262,3.4a.872.872,0,0,0,0-.119A.893.893,0,0,0,13.389,2.433Z",transform:"translate(339.146 290.334)",fill:t,stroke:"rgba(0,0,0,0)",strokeMiterlimit:"10",strokeWidth:"1"}))));var b=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 20 20.782"},a.createElement("g",{id:"invoiced-amount",transform:"translate(-316 -602.497)"},a.createElement("rect",{id:"Rectangle_921","data-name":"Rectangle 921",width:"20",height:"20",transform:"translate(316 603)",fill:"#fff",opacity:"0"}),a.createElement("g",{id:"Group_1794","data-name":"Group 1794",transform:"translate(-0.217 312.655)"},a.createElement("path",{id:"Subtraction_5","data-name":"Subtraction 5",d:"M-13289.555-6708.874a.988.988,0,0,1-.487-.127l-.842-.458a.957.957,0,0,0-.481-.13,1.006,1.006,0,0,0-.488.13l-.83.458a.988.988,0,0,1-.484.127.985.985,0,0,1-.484-.127l-.832-.458a.975.975,0,0,0-.483-.13,1.007,1.007,0,0,0-.485.13l-.831.458a.982.982,0,0,1-.483.127,1,1,0,0,1-.484-.127l-.832-.458a.979.979,0,0,0-.484-.13,1,1,0,0,0-.484.13l-.821.458a1.011,1.011,0,0,1-.487.127,1.033,1.033,0,0,1-.49-.127l-.821-.458a.983.983,0,0,0-.488-.13,1,1,0,0,0-.491.13l-.817.458a1.011,1.011,0,0,1-.488.127,1,1,0,0,1-.484-.127l-1.312-.728-.029-18.065,1.322-.731a.985.985,0,0,1,.484-.13.985.985,0,0,1,.484.13l.841.461a1,1,0,0,0,.484.127.98.98,0,0,0,.484-.127l.832-.461a1,1,0,0,1,.483-.13.979.979,0,0,1,.484.13l.832.461a.993.993,0,0,0,.483.127.98.98,0,0,0,.484-.127l.832-.461a1,1,0,0,1,.484-.13.976.976,0,0,1,.483.13l.832.461a1,1,0,0,0,.484.127.979.979,0,0,0,.483-.127l.826-.461a.976.976,0,0,1,.486-.13.989.989,0,0,1,.488.13l.821.461a1.033,1.033,0,0,0,.49.127,1.017,1.017,0,0,0,.488-.127l.824-.461a.985.985,0,0,1,.484-.13.971.971,0,0,1,.48.13l1.313.731.03,18.065-1.322.728A.96.96,0,0,1-13289.555-6708.874Zm-11.635-7.387-1.643.371a2.843,2.843,0,0,0,2.527,2.488v1.275h1.366v-1.3a2.464,2.464,0,0,0,2.171-2.374c0-1.2-.793-2.031-2.231-2.354l-1.038-.227c-.443-.1-.7-.347-.7-.678,0-.372.312-.771,1-.771a1.1,1.1,0,0,1,1.216.985l1.653-.441a2.593,2.593,0,0,0-2.067-2.037v-1.326h-1.366v1.286a2.532,2.532,0,0,0-2.25,2.468c0,1.111.782,1.935,2.146,2.261l1.069.257c.484.106.73.334.73.678,0,.457-.4.751-1.019.751a1.425,1.425,0,0,1-1.562-1.316Zm7.994-6.852v3.5h1.887v-3.5h1.122l-2.063-2.561h0l-2.063,2.561Z",transform:"translate(13622.999 7018.998)",fill:t,stroke:"rgba(0,0,0,0)",strokeMiterlimit:"10",strokeWidth:"1"}))));var E=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:e,width:e,viewBox:"0 0 20 20",color:t,fill:"currentColor",stroke:"currentColor",strokeWidth:"0.5"},a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("path",{d:"M17,2.2a.89.89,0,0,0,0-.15h0v-.8A.51.51,0,0,0,16.72.8L15.55.17a1.41,1.41,0,0,0-1.34,0l-.72.39a.44.44,0,0,1-.4,0l-.73-.4A1.39,1.39,0,0,0,11,.17l-.73.4a.42.42,0,0,1-.38,0L9.17.17a1.41,1.41,0,0,0-1.35,0L7.1.57a.47.47,0,0,1-.4,0L6,.17a1.37,1.37,0,0,0-1.33,0l-.75.4a.39.39,0,0,1-.38,0L2.76.17a1.37,1.37,0,0,0-1.33,0L.26.8A.51.51,0,0,0,0,1.24V2.61a.5.5,0,0,0,0,.12v14a.51.51,0,0,0,.26.44l1.16.62a1.39,1.39,0,0,0,1.34,0l.73-.39a.41.41,0,0,1,.4,0l.73.39a1.39,1.39,0,0,0,1.34,0l.73-.39a.37.37,0,0,1,.38,0l.74.39a1.37,1.37,0,0,0,1.33,0l.74-.39a.41.41,0,0,1,.4,0l.72.39a1.39,1.39,0,0,0,1.34,0l.75-.39a.37.37,0,0,1,.38,0l.75.39a1.37,1.37,0,0,0,1.32,0l1.17-.61.11-.09a.52.52,0,0,0,.16-.36ZM16,16.47l-.91.48a.37.37,0,0,1-.38,0L14,16.56a1.35,1.35,0,0,0-1.32,0l-.75.39a.39.39,0,0,1-.39,0l-.73-.39a1.39,1.39,0,0,0-1.34,0L8.69,17a.39.39,0,0,1-.39,0l-.73-.39a1.39,1.39,0,0,0-1.34,0L5.5,17a.37.37,0,0,1-.38,0l-.73-.39a1.45,1.45,0,0,0-1.36,0L2.3,17a.37.37,0,0,1-.38,0L1,16.47V2.61a.51.51,0,0,0,0-.13V1.54l.91-.49a.42.42,0,0,1,.38,0L3,1.44a1.37,1.37,0,0,0,1.33,0l.75-.4a.41.41,0,0,1,.39,0l.73.4a1.44,1.44,0,0,0,1.34,0l.73-.4a.41.41,0,0,1,.4,0l.73.4a1.41,1.41,0,0,0,1.34,0l.73-.4a.42.42,0,0,1,.38,0l.73.4a1.45,1.45,0,0,0,1.36,0l.71-.39a.43.43,0,0,1,.4,0l.9.49V2s0,.1,0,.12a.31.31,0,0,0,0,.1Z"}),a.createElement("path",{d:"M10.79,5.81a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5H6.2a.5.5,0,0,0-.5.5.51.51,0,0,0,.5.5H8.08A1.25,1.25,0,0,1,9,6.17a1.19,1.19,0,0,1,.29.48h-3a.5.5,0,0,0-.5.5.51.51,0,0,0,.5.5h3a1.25,1.25,0,0,1-1.16.81H6.33a.51.51,0,0,0-.46.3A.49.49,0,0,0,6,9.3L9.46,13a.49.49,0,0,0,.37.16.47.47,0,0,0,.34-.14.49.49,0,0,0,0-.7L7.49,9.46h.59a2.24,2.24,0,0,0,2.2-1.81h.51a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5h-.5A2.29,2.29,0,0,0,10,5.81Z"}))));var S=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,color:t,height:e,viewBox:"0 0 20 20"},a.createElement("g",{id:"Layer_2_1_"},a.createElement("g",{id:"Loader"},a.createElement("path",{fill:"none",stroke:"#000000","stroke-miterlimit":"10",d:"M4.5,15.3l0.1,0.4c0.3,1,1.3,1.6,2.3,1.4l0,0c1.1-0.2,1.8-1.2,1.6-2.3c0-0.1,0-0.2-0.1-0.2l-0.1-0.4"}),a.createElement("polygon",{fill:"none",stroke:"#000000","stroke-miterlimit":"10",points:"0.7,13.8 9.2,6.4 12.9,13.1 1.9,16         "}),a.createElement("line",{fill:"none",stroke:"#000000","stroke-miterlimit":"10",x1:"11.4",y1:"4.3",x2:"13.4",y2:"0.6"}),a.createElement("line",{fill:"none",stroke:"#000000","stroke-miterlimit":"10",x1:"13.4",y1:"8.6",x2:"19.4",y2:"4.6"}),a.createElement("line",{fill:"none",stroke:"#000000","stroke-miterlimit":"10",x1:"15.4",y1:"12.6",x2:"19.9",y2:"12.6"}))));var C=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 20 20"},a.createElement("g",{id:"product-tour",transform:"translate(.256)"},a.createElement("g",{id:"play-button",opacity:"0.123",transform:"translate(-.256)"},a.createElement("circle",{id:"Ellipse_389",cx:"10",cy:"10",r:"10",fill:t})),a.createElement("g",{id:"mouse-pointer",transform:"translate(5.875 5.941)"},a.createElement("path",{id:"Path_1811",d:"M3 3l3.218 7.725 1.143-3.364 3.364-1.143z",className:"cls-3",fill:t,stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",transform:"translate(-3 -3)"}),a.createElement("path",{id:"Path_1812",d:"M13 13l3.171 3.171",fill:t,stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",transform:"translate(-7.714 -7.714)"}))));var $=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 20 20"},a.createElement("g",{id:"transaction-charges",transform:"translate(-707.865 -667)"},a.createElement("rect",{id:"Rectangle_924","data-name":"Rectangle 924",width:"20",height:"20",transform:"translate(707.865 667)",fill:"#fff",opacity:"0"}),a.createElement("g",{id:"Group_1780","data-name":"Group 1780",transform:"translate(494.471 226.632)"},a.createElement("path",{id:"Path_1696","data-name":"Path 1696",d:"M7.29,8.069V0H2.715V8.069H0l5,5.9,5-5.9Z",transform:"translate(223.399 457.339) rotate(180)",fill:t}),a.createElement("path",{id:"Path_1697","data-name":"Path 1697",d:"M10,5.9,5,0,0,5.9H2.715v8.069H7.29V5.9Z",transform:"translate(233.394 457.368) rotate(180)",fill:t}))));var F=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24"},a.createElement("path",{id:"paperclip",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5px",d:"M14.7 7.7l-6 6a3.923 3.923 0 0 1-5.549-5.542l6-6a2.615 2.615 0 1 1 3.7 3.7l-6.011 6a1.308 1.308 0 0 1-1.849-1.849l5.549-5.542",transform:"translate(3 4)"}));var P=({size:e,color:t})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 56 56"},a.createElement("g",{id:"avatar",transform:"translate(0 0)"},a.createElement("path",{id:"Path_2127","data-name":"Path 2127",d:"M544.159,359.575a9.545,9.545,0,1,1-9.577-9.545A9.558,9.558,0,0,1,544.159,359.575Z",transform:"translate(-506.615 -337.776)",fill:t}),a.createElement("path",{id:"Path_2128","data-name":"Path 2128",d:"M547,346a28,28,0,1,0,28,28A28,28,0,0,0,547,346Zm16.551,42.125a19.309,19.309,0,0,0-33.1,0,21.778,21.778,0,1,1,33.1,0Z",transform:"translate(-519 -346)",fill:t}),a.createElement("g",{id:"Group_1817","data-name":"Group 1817",transform:"translate(18.455 12.254)"},a.createElement("path",{id:"Path_2129","data-name":"Path 2129",d:"M534.582,350.03a9.529,9.529,0,1,0,9.577,9.545A9.551,9.551,0,0,0,534.582,350.03Z",transform:"translate(-525.07 -350.03)",fill:t}),a.createElement("path",{id:"Path_2130","data-name":"Path 2130",d:"M544.159,359.575a9.545,9.545,0,1,1-9.577-9.545A9.558,9.558,0,0,1,544.159,359.575Z",transform:"translate(-525.07 -350.03)",fill:t}))));var x=({size:e})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",width:e,height:e},a.createElement("path",{fill:"#FFAC33",d:"M31 5.718h-6v4h4s2 0 2 2v12c0 2-2 2-2 2h-4v4h6c2.206 0 4-1.794 4-4v-16c0-2.206-1.794-4-4-4z"}),a.createElement("path",{fill:"#FFCC4D",d:"M27 6H3v26c0 2.209 1.791 4 4 4h16c2.209 0 4-1.791 4-4V6z"}),a.createElement("path",{fill:"#F4900C",d:"M8.5 32c-.552 0-1-.447-1-1V15c0-.552.448-1 1-1s1 .448 1 1v16c0 .553-.448 1-1 1zm6.5 0c-.552 0-1-.447-1-1V15c0-.552.448-1 1-1s1 .448 1 1v16c0 .553-.448 1-1 1zm6.5 0c-.553 0-1-.447-1-1V15c0-.552.447-1 1-1s1 .448 1 1v16c0 .553-.447 1-1 1z"}),a.createElement("path",{fill:"#FFAC33",d:"M3 5v7.445c.59.344 1.268.555 2 .555 1.674 0 3.104-1.031 3.701-2.491.35.302.801.491 1.299.491.677 0 1.273-.338 1.635-.853C12.345 11.258 13.583 12 15 12c1.301 0 2.445-.631 3.176-1.593C18.54 11.338 19.44 12 20.5 12c.949 0 1.765-.535 2.188-1.314l.147-.361c.497.271 1.059.439 1.665.439.981 0 1.865-.406 2.5-1.056V5H3z"}),a.createElement("path",{fill:"#EEE",d:"M24 0H4C2.343 0 1 1.343 1 3v4c0 2.209 1.791 4 4 4 1.674 0 3.104-1.031 3.701-2.491.35.302.801.491 1.299.491.677 0 1.273-.338 1.635-.853C12.345 9.258 13.583 10 15 10c1.301 0 2.445-.631 3.176-1.593C18.54 9.338 19.44 10 20.5 10c.949 0 1.765-.535 2.188-1.314.398.195.839.314 1.312.314 1.657 0 3-1.343 3-3V3c0-1.657-1.343-3-3-3z"}));var k=({size:e,color:t="#000"})=>a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",width:e,height:e,x:"0px",y:"0px",viewBox:"0 0 20 20"},a.createElement("g",{id:"Layer_2_1_"},a.createElement("g",{id:"Layer_1-2"},a.createElement("path",{id:"NEFT_IMPS",fill:t,d:"M18.2,9.4V6.6L10,1L1.8,6.6v2.8h1.4v7H1.8V19h16.3v-2.5h-1.4v-7L18.2,9.4z M8.7,16.4H6v-7h2.8\n\t\t\tV16.4z M14,16.4h-2.7v-7H14L14,16.4z"}))));var T=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17 12",width:e,height:e},a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("path",{fill:t,d:"M17,2v.5H0V2A2,2,0,0,1,2,0H15A2,2,0,0,1,17,2Z"}),a.createElement("path",{fill:t,d:"M0,4.5H17V10a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2Z"}))));var w=({size:e=48,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`},a.createElement("g",{id:"leads",transform:"translate(-49 -132)"},a.createElement("circle",{id:"Ellipse_290",cx:e/2,cy:e/2,r:e/2,fill:t,transform:"translate(53 135)"}),a.createElement("g",{id:"leads-2",transform:"translate(62.194 141.596)"},a.createElement("path",{id:"Path_1664",d:"M318.813 344h-.766a4.075 4.075 0 0 1-4.091 4.05h-4.318a4.075 4.075 0 0 1-4.092-4.05h-.766a3.764 3.764 0 0 0-3.78 3.74v16.03a3.764 3.764 0 0 0 3.778 3.74h14.034a3.764 3.764 0 0 0 3.778-3.74v-16.03a3.764 3.764 0 0 0-3.777-3.74zm-1.619 16.03H306.4a1.069 1.069 0 1 1 0-2.137h10.8a1.069 1.069 0 1 1 0 2.137zm0-5.343H306.4a1.069 1.069 0 1 1 0-2.137h10.8a1.069 1.069 0 1 1 0 2.137z",fill:"#fff",transform:"translate(-301 -341.601)"}),a.createElement("g",{id:"Group_1663",transform:"translate(5.997)"},a.createElement("path",{id:"Path_1665",d:"M316.6 344.4a2.406 2.406 0 0 1-2.4 2.4h-4.8a2.4 2.4 0 1 1 0-4.8h4.8a2.406 2.406 0 0 1 2.4 2.4z",fill:"#fff",transform:"translate(-307 -342)"})))));var L=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24"},a.createElement("g",{id:"x",transform:"translate(8 8)"},a.createElement("path",{id:"Line_109",d:"M0 0L0.001 11.313",className:"cls-1","data-name":"Line 109",transform:"rotate(135 2.343 5.656)",fill:"none",stroke:t,strokeLinecap:"round",strokeWidth:"1"}),a.createElement("path",{id:"Line_110",d:"M0.001 0L0 11.313",className:"cls-1","data-name":"Line 110",transform:"rotate(-135 1.658 4)",fill:"none",stroke:t,strokeLinecap:"round",strokeWidth:"1"})));var A=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24"},a.createElement("circle",{id:"Ellipse_47","data-name":"Ellipse 47",cx:"8",cy:"8",r:"8",transform:"translate(16) rotate(90)",fill:t}),a.createElement("line",{id:"Line_109","data-name":"Line 109",y2:"7.206",transform:"translate(10.547 10.548) rotate(135)",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeWidth:"1"}),a.createElement("line",{id:"Line_110","data-name":"Line 110",y2:"7.206",transform:"translate(5.453 10.548) rotate(-135)",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeWidth:"1"}));var R=({size:e})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",width:e,height:e},a.createElement("ellipse",{fill:"#99AAB5",cx:"18",cy:"26",rx:"18",ry:"10"}),a.createElement("ellipse",{fill:"#CCD6DD",cx:"18",cy:"24",rx:"18",ry:"10"}),a.createElement("path",{fill:"#F5F8FA",d:"M18 31C3.042 31 1 16 1 12h34c0 2-1.958 19-17 19z"}),a.createElement("path",{fill:"#CCD6DD",d:"M34.385 9.644c2.442-10.123-9.781-7.706-12.204-5.799-1.34-.148-2.736-.234-4.181-.234-9.389 0-17 3.229-17 8.444C1 17.271 8.611 21.5 18 21.5s17-4.229 17-9.444c0-.863-.226-1.664-.615-2.412zm-2.503-2.692c-1.357-.938-3.102-1.694-5.121-2.25 1.875-.576 4.551-.309 5.121 2.25z"}),a.createElement("ellipse",{fill:"#8A4B38",cx:"18",cy:"13",rx:"15",ry:"7"}),a.createElement("path",{fill:"#D99E82",d:"M20 17c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.739-1.109.9-2.246.478-3.377-.461-1.236-1.438-1.996-1.731-2.077-.553 0-.958-.443-.958-.996 0-.552.491-.995 1.043-.995.997 0 2.395 1.153 3.183 2.625 1.034 1.933.91 4.039-.351 5.929-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.196-.451.294-.707.294zm-6-2c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.727-1.091.893-2.083.494-2.947-.444-.961-1.431-1.469-1.684-1.499-.552 0-.989-.447-.989-1 0-.552.458-1 1.011-1 .997 0 2.585.974 3.36 2.423.481.899 1.052 2.761-.528 5.131-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.197-.451.295-.707.295z"}));var N=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 23.172 14"},a.createElement("g",{id:"menu-collapse-expand",transform:"translate(1 0.111)"},a.createElement("g",{id:"Rectangle_317","data-name":"Rectangle 317",transform:"translate(8.172 -0.111)",fill:t,stroke:t,strokeWidth:"1"},a.createElement("rect",{width:"14",height:"2",rx:"1",stroke:"none"}),a.createElement("rect",{x:"0.5",y:"0.5",width:"13",height:"1",rx:"0.5",fill:"none"})),a.createElement("g",{id:"Rectangle_318","data-name":"Rectangle 318",transform:"translate(8.172 5.889)",fill:t,stroke:t,strokeWidth:"1"},a.createElement("rect",{width:"14",height:"2",rx:"1",stroke:"none"}),a.createElement("rect",{x:"0.5",y:"0.5",width:"13",height:"1",rx:"0.5",fill:"none"})),a.createElement("g",{id:"Rectangle_319","data-name":"Rectangle 319",transform:"translate(8.172 11.889)",fill:t,stroke:t,strokeWidth:"1"},a.createElement("rect",{width:"14",height:"2",rx:"1",stroke:"none"}),a.createElement("rect",{x:"0.5",y:"0.5",width:"13",height:"1",rx:"0.5",fill:"none"})),a.createElement("path",{id:"Path_1651","data-name":"Path 1651",d:"M5898.487,3794.867l-3.8,3.8,3.8,3.8",transform:"translate(-5894.688 -3792.185)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})));var D=({size:e,color:t})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:t,width:e,height:e,viewBox:"0 0 24 24"},a.createElement("path",{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}));var I=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"columns",width:e,height:e,viewBox:"0 0 16 16"},a.createElement("path",{id:"Rectangle_886",fill:"#fff",d:"M0 0H16V16H0z","data-name":"Rectangle 886",opacity:"0.001"}),a.createElement("g",{id:"Group_1837","data-name":"Group 1837",transform:"translate(0 1)"},a.createElement("g",{id:"Group_1836","data-name":"Group 1836"},a.createElement("g",{id:"Rectangle_883",className:"cls-2","data-name":"Rectangle 883",fill:"none",stroke:t},a.createElement("rect",{width:"16",height:"14",className:"cls-4",rx:"2",stroke:"none"}),a.createElement("rect",{width:"15",height:"13",x:".5",y:".5",className:"cls-5",rx:"1.5",fill:"none"})),a.createElement("path",{id:"Line_326",d:"M0 0L0 12.948",className:"cls-2","data-name":"Line 326",transform:"translate(5.646 .463)",fill:"none",stroke:t}),a.createElement("path",{id:"Line_328",d:"M0 0L0 12.948",className:"cls-2","data-name":"Line 328",transform:"translate(10.616 .463)",fill:"none",stroke:t}),a.createElement("g",{id:"Rectangle_884",fill:t,stroke:t,"data-name":"Rectangle 884"},a.createElement("path",{d:"M2 0h12a2 2 0 0 1 2 2v3H0V2a2 2 0 0 1 2-2z",className:"cls-4"}),a.createElement("path",{d:"M2 .5h12A1.5 1.5 0 0 1 15.5 2v2a.5.5 0 0 1-.5.5H1A.5.5 0 0 1 .5 4V2A1.5 1.5 0 0 1 2 .5z",className:"cls-5",fill:"none"})))));var M=({size:e=24,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"budget",width:e,height:e,viewBox:"0 0 16 16"},a.createElement("g",{id:"refer",transform:"translate(-4623.762 -6748.762)"},a.createElement("g",{id:"corner-up-right",transform:"translate(4625.675 6750.279)"},a.createElement("path",{id:"Path_160",d:"M15 9.357l2.678-2.678L15 4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5px",transform:"translate(-9.108 -4)"}),a.createElement("path",{id:"Path_161",d:"M4 14.892v-3.75A2.143 2.143 0 0 1 6.143 9h6.428",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5px",transform:"translate(-4 -6.322)"}))));var B=({size:e=24,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24"},a.createElement("g",{id:"refer",transform:"translate(-370 -136)"},a.createElement("circle",{id:"Ellipse_303",cx:"12",cy:"12",r:"12",fill:t,transform:"translate(370 136)"}),a.createElement("g",{id:"corner-up-right",transform:"translate(378 143)"},a.createElement("path",{id:"Path_160",d:"M15 10.25l3.125-3.125L15 4",fill:t,stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(-8.125 -4)"}),a.createElement("path",{id:"Path_161",d:"M4 15.875V11.5A2.5 2.5 0 0 1 6.5 9H14",fill:t,stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5px",transform:"translate(-4 -5.875)"}))));var q=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 17.748 17.748"},a.createElement("g",{id:"dashboard",transform:"translate(-406 -346.252)"},a.createElement("path",{id:"Path_1668",d:"M415 356h7.739a1 1 0 0 1 .979 1.225 8.994 8.994 0 1 1-10.943-10.943 1 1 0 0 1 1.225.979V355a1 1 0 0 0 1 1z",className:"cls-1","data-name":"Path 1668",fill:t}),a.createElement("path",{id:"Path_1669",d:"M422.739 354H417a1 1 0 0 1-1-1v-5.739a1 1 0 0 1 1.225-.979 9.016 9.016 0 0 1 6.493 6.493 1 1 0 0 1-.979 1.225z",className:"cls-1",fill:t,"data-name":"Path 1669"})));var O=({size:e})=>a.createElement("svg",{width:e,height:e,viewBox:"0 0 72 72",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.8412 10.6522L9.79715 15.1054L20.663 19.5586H51.4795L62.1672 15.1054L51.6576 10.6522H20.8412ZM0 25.615L7.12518 16.8867L19.238 21.8743L16.566 32.9183L0 25.615ZM1.06874 28.8214L16.566 36.1247L32.0633 67.8317L1.06874 28.8214ZM55.7546 36.1247L71.2518 28.8214L40.0792 67.8317L55.7546 36.1247ZM22.088 22.5868L19.3804 32.9183H52.851L50.2325 22.5868H22.088ZM52.8511 22.0168L65.3736 17.2429L71.9644 25.4369L55.9149 32.9183L52.8511 22.0168ZM52.851 36.57H19.3804L36.1246 70.0762L52.851 36.57Z",fill:"url(#paint0_linear)"}),a.createElement("path",{d:"M66.6561 1.92383L67.2229 6.70091L72 7.26771L67.2229 7.83452L66.6561 12.6116L66.0893 7.83452L61.3123 7.26771L66.0893 6.70091L66.6561 1.92383Z",fill:"#FFAD3C"}),a.createElement("path",{d:"M12.5047 57.144L12.807 59.6918L15.3548 59.9941L12.807 60.2963L12.5047 62.8441L12.2024 60.2963L9.65466 59.9941L12.2024 59.6918L12.5047 57.144Z",fill:"#FFAD3C"}),a.createElement("path",{d:"M6.98273 9.93964L7.26614 12.3282L9.65468 12.6116L7.26614 12.895L6.98273 15.2835L6.69933 12.895L4.31079 12.6116L6.69933 12.3282L6.98273 9.93964Z",fill:"#FFAD3C"}),a.createElement("defs",null,a.createElement("linearGradient",{id:"paint0_linear",x1:"-1.74601",y1:"-10.6341",x2:"41.6604",y2:"73.5588",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{"stop-color":"#FF25A8"}),a.createElement("stop",{offset:"1","stop-color":"#FFDA17"}))));var _=({size:e=24,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"budget",width:e,height:e,viewBox:"0 0 16 16"},a.createElement("circle",{id:"Ellipse_298",cx:8,cy:8,r:8,fill:t}),a.createElement("g",{id:"dollar-sign",transform:"translate(5.336 3)"},a.createElement("path",{id:"Line_299",d:"M0 0L0 10",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(2.664)"}),a.createElement("path",{id:"Path_1680",d:"M10.884 5h-3.33a1.554 1.554 0 0 0 0 3.108h2.22a1.554 1.554 0 1 1 0 3.108H6",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(-6 -3.108)"})));var z=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24"},a.createElement("g",{id:"download",transform:"translate(7 6)"},a.createElement("path",{id:"Path_1672",d:"M6.7 9.584l4.109 4.116 3.841-4.116",transform:"translate(-6.142 -4.07)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{id:"Line_171",d:"M0 9L0 0",transform:"translate(4.697 .5)",fill:"none",stroke:t,strokeLinejoin:"round",strokeLinecap:"round"}),a.createElement("path",{id:"Line_172",fill:"none",stroke:t,strokeLinecap:"round",d:"M0 0L7 0",transform:"translate(1.197 11.5)"})));var H=({size:e,color:t="#000"})=>a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 20 20",width:e,height:e},a.createElement("g",{id:"Layer_2_1_"},a.createElement("g",{id:"Layer_1-2"},a.createElement("path",{fill:t,d:"M18,8.1l-0.6-0.6c-0.2-0.3-0.4-0.6-0.3-0.9V5.7c0-1.5-1.2-2.6-2.6-2.6h-0.9c-0.4,0-0.7-0.1-0.9-0.4l-0.7-0.7\n\t\t\tc-1-1-2.7-1-3.7,0c0,0,0,0,0,0L7.5,2.6C7.2,2.8,6.9,2.9,6.5,2.9H5.7C4.2,2.9,3,4.1,3,5.6v0.9c0,0.4-0.1,0.8-0.4,1L1.9,8.1\n\t\t\tc-1,1-1,2.7,0,3.7c0,0,0,0,0,0l0.6,0.6c0.2,0.3,0.4,0.6,0.4,0.9v0.9c0,1.5,1.2,2.6,2.6,2.6h0.9c0.4,0,0.7,0.1,0.9,0.4L8.1,18\n\t\t\tc0.5,0.5,1.2,0.8,1.9,0.8c0.7,0,1.4-0.3,1.9-0.8l0.6-0.6c0.3-0.2,0.6-0.4,0.9-0.3h0.9c1.5,0,2.6-1.2,2.6-2.6v-0.9\n\t\t\tc0-0.4,0.1-0.7,0.4-0.9L18,12l0,0C19.1,11,19.1,9.3,18,8.1C18.1,8.2,18.1,8.2,18,8.1z M7.2,7.2C7.3,7.1,7.4,7.1,7.5,7\n\t\t\tC7.7,6.9,8.1,7,8.3,7.2c0.1,0.1,0.1,0.2,0.2,0.2c0.1,0.3,0.1,0.7-0.2,0.9C8.1,8.5,7.9,8.5,7.7,8.5C7.3,8.5,7,8.2,7,7.8\n\t\t\tc0,0,0,0,0,0C7,7.6,7,7.3,7.2,7.2z M12.8,12.8C12.7,13,12.5,13,12.3,13c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.1-0.1-0.2-0.2-0.2\n\t\t\tc-0.1-0.2-0.1-0.4,0-0.6c0-0.1,0.1-0.2,0.2-0.2c0.2-0.2,0.6-0.3,0.9-0.2c0.1,0,0.2,0.1,0.3,0.2C13.1,12,13.1,12.5,12.8,12.8z\n\t\t\t M12.8,8.3l-4.5,4.5c-0.3,0.3-0.8,0.3-1.1,0l0,0c-0.3-0.3-0.3-0.8,0-1.1l4.6-4.5c0.3-0.3,0.8-0.4,1.1-0.1c0.3,0.3,0.4,0.8,0.1,1.1\n\t\t\tC12.9,8.2,12.9,8.3,12.8,8.3L12.8,8.3z"}))));var W=({size:e,color:t="#000"})=>a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 20 20",width:e,height:e},a.createElement("g",{id:"Layer_2_1_"},a.createElement("g",{id:"Layer_1-2"},a.createElement("path",{fill:t,d:"M10,10.2l-8.5-6c0.3-0.5,0.9-0.7,1.5-0.7H17c0.6,0,1.1,0.3,1.5,0.7L10,10.2z"}),a.createElement("path",{fill:t,d:"M18.8,6.2v8.6c0,0.9-0.8,1.7-1.8,1.6H2.9c-0.9,0-1.7-0.7-1.8-1.6V6.2l8.5,6c0.1,0.1,0.2,0.1,0.3,0.1\n\t\t\tc0.1,0,0.2,0,0.3-0.1L18.8,6.2z"}))));var V=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 20 20.5"},a.createElement("g",{id:"expenditures",transform:"translate(-343.865 -665)"},a.createElement("rect",{id:"Rectangle_917","data-name":"Rectangle 917",width:e,height:"20",transform:"translate(343.865 665)",fill:"#fff",opacity:"0"}),a.createElement("g",{id:"expenditure",transform:"translate(204.588 244.83)"},a.createElement("g",{id:"Group_1798","data-name":"Group 1798",transform:"translate(140.277 420.17)"},a.createElement("path",{id:"Path_1706","data-name":"Path 1706",d:"M146.986,461.925a7.272,7.272,0,0,1,.113-1.254H144.21a.892.892,0,0,1,0-1.782h2.915a.793.793,0,0,1,.46.164,6.856,6.856,0,0,1,2.144-2.743H144.21a.892.892,0,0,1,0-1.782h6.621a.852.852,0,0,1,.822.785,6.107,6.107,0,0,1,4.18.179V450.87c-1.493-1.578-2.326-2.467-3.819-4.045h-8.975a2.843,2.843,0,0,0-2.761,2.918V462a2.843,2.843,0,0,0,2.761,2.918h4.6A7.13,7.13,0,0,1,146.986,461.925Zm-2.776-11.664h7.267a.892.892,0,0,1,0,1.782H144.21a.892.892,0,0,1,0-1.782Z",transform:"translate(-140.277 -446.825)",fill:t}),a.createElement("path",{id:"Subtraction_3","data-name":"Subtraction 3",d:"M4.9,9.813A4.907,4.907,0,0,1,4.9,0,4.834,4.834,0,0,1,7.965,1.072,4.906,4.906,0,0,1,4.9,9.813ZM3.914,5.706,2.745,5.97a2.026,2.026,0,0,0,1.8,1.77v.906h.972V7.725A1.753,1.753,0,0,0,7.058,6.036c0-.849-.564-1.443-1.587-1.674L4.733,4.2c-.316-.071-.5-.247-.5-.483,0-.264.222-.548.709-.548a.777.777,0,0,1,.863.7l1.177-.315A1.846,1.846,0,0,0,5.515,2.11V1.167H4.543v.914a1.8,1.8,0,0,0-1.6,1.755c0,.789.557,1.375,1.527,1.608l.761.183c.345.075.52.237.52.483,0,.319-.291.534-.724.534A1.013,1.013,0,0,1,3.914,5.706Z",transform:"translate(8.187 10.186)",fill:t,stroke:"rgba(0,0,0,0)",strokeMiterlimit:"10",strokeWidth:"1"})))));var j=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24"},a.createElement("g",{id:"prefix__eye",transform:"translate(4 3)"},a.createElement("path",{id:"prefix__Path_1650",d:"M1 8.758S3.379 4 7.542 4s6.542 4.758 6.542 4.758-2.384 4.757-6.542 4.757S1 8.758 1 8.758z",className:"prefix__cls-1","data-name":"Path 1650",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("circle",{id:"prefix__Ellipse_48",cx:"1.552",cy:"1.552",r:"1.552",className:"prefix__cls-1","data-name":"Ellipse 48",transform:"translate(5.989 7.205)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round"})));var G=({size:e=24,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 16 16"},a.createElement("g",{id:"files",transform:"translate(0 -1110)"},a.createElement("g",{id:"Group_2419",transform:"translate(-113.27 753.184)"},a.createElement("path",{id:"Path_1779",d:"M127.994 365.612v-4.562l-3.715-3.715h-7.422a2.4 2.4 0 0 0-2.405 2.4v10.086a2.4 2.4 0 0 0 2.405 2.405h8.733a2.4 2.4 0 0 0 2.4-2.4z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{id:"Line_318",d:"M0 0L7.038 0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(117.647 361.87)"}),a.createElement("path",{id:"Line_319",d:"M0 0L7.038 0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(117.647 364.556)"}),a.createElement("path",{id:"Line_320",d:"M0 0L7.038 0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(117.647 367.242)"}))));var K=({size:e=24,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24"},a.createElement("circle",{cx:"12",cy:"12",r:"12",fill:t}),a.createElement("path",{fill:"#fff",d:"M550.6 348.426h-1.282a1.9 1.9 0 0 0-1.718-2.726 2.616 2.616 0 0 1-4.909 0 1.911 1.911 0 0 0-1.909 1.909 1.888 1.888 0 0 0 .191.819h-1.283a.545.545 0 0 0-.545.546v2.726a.546.546 0 0 0 .545.546h.545v4.909a.545.545 0 0 0 .546.546h8.728a.545.545 0 0 0 .545-.546v-4.909h.546a.546.546 0 0 0 .545-.546v-2.727a.545.545 0 0 0-.545-.547zm-3-1.637a.818.818 0 1 1 0 1.637h-1.72c.256-.677.785-1.637 1.72-1.637zm-5.728.818a.819.819 0 0 1 .819-.818c.935 0 1.464.96 1.721 1.637h-1.721a.82.82 0 0 1-.819-.819z",transform:"translate(-533.233 -339.917)"}));var Z=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 20 20"},a.createElement("rect",{y:"3.4",opacity:"1",fill:"#6a5acd","enable-background":"new",width:"20",height:"13.2"}),a.createElement("g",null,a.createElement("path",{fill:"#fff",d:"M14.8,11.7c0.2-0.5,0.3-1.1,0.3-1.7c0-0.6-0.1-1.1-0.3-1.7c0,0,0,0,0,0C14,6.4,12.2,5,10,5\n\t\tC7.8,5,6,6.4,5.3,8.3c0,0,0,0,0,0C5.1,8.9,5,9.4,5,10c0,0.6,0.1,1.1,0.3,1.7c0,0,0,0,0,0C6,13.6,7.8,15,10,15\n\t\tC12.2,15,14,13.6,14.8,11.7C14.7,11.7,14.7,11.7,14.8,11.7L14.8,11.7z M10,14.3c-0.2,0-0.5-0.3-0.8-1.1c-0.1-0.4-0.2-0.8-0.3-1.3\n\t\th2.1c-0.1,0.5-0.2,0.9-0.3,1.3C10.5,14,10.2,14.3,10,14.3L10,14.3z M8.9,11.2c0-0.4-0.1-0.8-0.1-1.2c0-0.4,0-0.8,0.1-1.2h2.3\n\t\tc0,0.4,0.1,0.8,0.1,1.2c0,0.4,0,0.8-0.1,1.2H8.9z M5.7,10c0-0.4,0.1-0.8,0.2-1.2h2.3c0,0.4-0.1,0.8-0.1,1.2c0,0.4,0,0.8,0.1,1.2\n\t\tH5.9C5.7,10.8,5.7,10.4,5.7,10L5.7,10z M10,5.7c0.2,0,0.5,0.3,0.8,1.1c0.1,0.4,0.2,0.8,0.3,1.3H8.9C9,7.6,9.1,7.2,9.2,6.8\n\t\tC9.5,6,9.8,5.7,10,5.7L10,5.7z M11.9,8.8h2.3c0.1,0.4,0.2,0.8,0.2,1.2c0,0.4-0.1,0.8-0.2,1.2h-2.3c0-0.4,0.1-0.8,0.1-1.2\n\t\tC11.9,9.6,11.9,9.2,11.9,8.8L11.9,8.8z M13.9,8.1h-2.1c-0.1-0.9-0.3-1.7-0.7-2.2C12.3,6.2,13.3,7,13.9,8.1L13.9,8.1z M8.9,5.8\n\t\tC8.6,6.4,8.3,7.2,8.2,8.1H6.1C6.7,7,7.7,6.2,8.9,5.8L8.9,5.8z M6.1,11.9h2.1c0.1,0.9,0.3,1.7,0.7,2.2C7.7,13.8,6.7,13,6.1,11.9\n\t\tL6.1,11.9z M11.1,14.2c0.3-0.6,0.5-1.4,0.7-2.2h2.1C13.3,13,12.3,13.8,11.1,14.2L11.1,14.2z M11.1,14.2"})));var U=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 20 20"},a.createElement("g",{id:"gst",transform:"translate(-707.865 -667)"},a.createElement("rect",{id:"Rectangle_925","data-name":"Rectangle 925",width:"20",height:"20",transform:"translate(707.865 667)",fill:"#fff",opacity:"0"}),a.createElement("g",{id:"Group_1792","data-name":"Group 1792",transform:"translate(213.77 427.544)"},a.createElement("path",{id:"Path_1698","data-name":"Path 1698",d:"M499.854,253.592a6.788,6.788,0,0,1-1.614.181,4.677,4.677,0,0,1-1.668-.288,3.847,3.847,0,0,1-1.311-.811,3.676,3.676,0,0,1-.857-1.252,4.429,4.429,0,0,1,0-3.265,3.677,3.677,0,0,1,.868-1.252,3.83,3.83,0,0,1,1.3-.794,4.594,4.594,0,0,1,1.608-.277,4.939,4.939,0,0,1,1.662.272,3.407,3.407,0,0,1,1.247.729l-1.151,1.311a1.984,1.984,0,0,0-.7-.506,2.382,2.382,0,0,0-.99-.2,2.215,2.215,0,0,0-.885.176,2.138,2.138,0,0,0-.7.49,2.2,2.2,0,0,0-.464.746,2.622,2.622,0,0,0-.164.942,2.915,2.915,0,0,0,.149.959,2.042,2.042,0,0,0,.441.75,2,2,0,0,0,.726.491,2.587,2.587,0,0,0,.986.176,3.79,3.79,0,0,0,.607-.048,2.262,2.262,0,0,0,.532-.155V250.6h-1.437v-1.471h3.11v4A5.837,5.837,0,0,1,499.854,253.592Z",transform:"translate(0 0)",fill:t}),a.createElement("path",{id:"Path_1699","data-name":"Path 1699",d:"M503.688,248a1.65,1.65,0,0,0-.611-.475,1.755,1.755,0,0,0-.73-.175,2.323,2.323,0,0,0-.368.031.96.96,0,0,0-.336.124.816.816,0,0,0-.249.234.62.62,0,0,0-.1.368.6.6,0,0,0,.079.319.73.73,0,0,0,.235.224,2.215,2.215,0,0,0,.368.176c.141.053.3.107.48.164q.383.128.8.283a2.927,2.927,0,0,1,.757.41,2.155,2.155,0,0,1,.565.633,1.84,1.84,0,0,1,.223.944,2.465,2.465,0,0,1-.238,1.123,2.264,2.264,0,0,1-.645.783,2.735,2.735,0,0,1-.927.458,3.86,3.86,0,0,1-1.077.15,4.436,4.436,0,0,1-1.566-.283,3.292,3.292,0,0,1-1.256-.8l1.193-1.213a2.21,2.21,0,0,0,.73.569,1.968,1.968,0,0,0,.9.229,1.74,1.74,0,0,0,.395-.043.976.976,0,0,0,.336-.138.707.707,0,0,0,.229-.257.793.793,0,0,0,.085-.382.612.612,0,0,0-.107-.364,1.072,1.072,0,0,0-.3-.271,2.479,2.479,0,0,0-.491-.224c-.195-.067-.418-.139-.665-.218a6.176,6.176,0,0,1-.709-.277,2.373,2.373,0,0,1-.617-.41,1.887,1.887,0,0,1-.436-.607,2.041,2.041,0,0,1-.165-.868,2.14,2.14,0,0,1,.255-1.077,2.218,2.218,0,0,1,.671-.735,2.868,2.868,0,0,1,.938-.421,4.267,4.267,0,0,1,1.054-.133,3.955,3.955,0,0,1,1.306.234,3.374,3.374,0,0,1,1.167.693Z",transform:"translate(2.731 0.004)",fill:t}),a.createElement("path",{id:"Path_1700","data-name":"Path 1700",d:"M507.042,247.522v5.988h-1.821v-5.988H503.09v-1.555h6.082v1.555Z",transform:"translate(4.923 0.072)",fill:t}))));var Y=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 20 20"},a.createElement("g",{id:"payment-received",transform:"translate(-705.865 -664)"},a.createElement("g",{id:"payment-received-2","data-name":"payment-received",transform:"translate(705.865 664)"},a.createElement("rect",{id:"Rectangle_919","data-name":"Rectangle 919",width:"19.612",height:"19.612",transform:"translate(0.097 0.097)",fill:"#fff",opacity:"0"}),a.createElement("path",{id:"Path_1688","data-name":"Path 1688",d:"M530.993,256.3h0a5.039,5.039,0,0,0-5.039,5.039h0a5.039,5.039,0,0,0,5.039,5.038h0a5.039,5.039,0,0,0,5.038-5.038h0A5.039,5.039,0,0,0,530.993,256.3Zm.487,7.271v.732h-.773v-.718a1.61,1.61,0,0,1-1.423-1.4l.927-.207a.794.794,0,0,0,.879.738c.336,0,.578-.161.578-.423,0-.2-.149-.323-.416-.384l-.6-.141c-.752-.18-1.215-.637-1.215-1.276a1.425,1.425,0,0,1,1.268-1.389v-.726h.773v.746a1.458,1.458,0,0,1,1.167,1.148l-.932.249a.624.624,0,0,0-.685-.558c-.376,0-.564.222-.564.437,0,.182.134.322.4.382l.584.127c.9.2,1.255.725,1.255,1.33A1.382,1.382,0,0,1,531.48,263.567Z",transform:"translate(-520.466 -256.296)",fill:t}),a.createElement("path",{id:"Path_1689","data-name":"Path 1689",d:"M540.809,266.717a1.036,1.036,0,0,0-1.416-.385l-4.279,2.5c-.013.025-.029.047-.044.071.015-.024.031-.046.044-.071a.98.98,0,0,0,.1-.252,1.052,1.052,0,0,0-.733-1.286l-3.269-.586a5.426,5.426,0,0,1-1.42-.545,5.785,5.785,0,0,0-5.218-.021,2.59,2.59,0,0,1-.446.177,5.964,5.964,0,0,1-1.787.26h-1.4v4.892h2.1a4.046,4.046,0,0,1,.626.048l8.424,1.3a.693.693,0,0,0,.469-.084l7.859-4.588A1.057,1.057,0,0,0,540.809,266.717Zm-6.508,2.635.019,0-.038,0h.019Zm.1-.013-.024,0h.009Zm.036-.008.019,0-.053.011Zm-.064.013-.03,0,.019,0Zm-.154.011h0Zm.237-.028.007,0a.609.609,0,0,0,.064-.018l.048-.017.018-.007a.461.461,0,0,0,.054-.024h0a1.018,1.018,0,0,0,.364-.28A1.025,1.025,0,0,1,534.456,269.327Zm.607-.415a.7.7,0,0,1-.043.058A.7.7,0,0,0,535.063,268.912Z",transform:"translate(-520.948 -252.832)",fill:t}))));var J=({size:e})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",width:e,height:e},a.createElement("path",{fill:"#BE1931",d:"M2.067 11.319C2.067 2.521 14.251-.74 18 9.445 21.749-.741 33.933 2.52 33.933 11.319 33.933 20.879 18 33 18 33S2.067 20.879 2.067 11.319z"}));var Q=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:e,width:e,viewBox:"0 0 20 20",color:t,fill:"currentColor",stroke:"currentColor",strokeWidth:"0"},a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("path",{d:"M18.28,15.82a6,6,0,0,0-2.36-8.18A8,8,0,1,0,1,11.83L.05,15.27a.48.48,0,0,0,.13.48.48.48,0,0,0,.48.13l3.44-1a8,8,0,0,0,3.55,1,6.07,6.07,0,0,0,8.19,2.35l2.52.7a.5.5,0,0,0,.49-.13.54.54,0,0,0,.13-.49ZM4.17,13.89l-.13,0-2.79.77L2,11.89A.54.54,0,0,0,2,11.5,7,7,0,1,1,4.42,14,.52.52,0,0,0,4.17,13.89Zm13.09,2,.52,1.87-1.88-.52a.5.5,0,0,0-.38.06,5.11,5.11,0,0,1-2.59.7,5.06,5.06,0,0,1-4.12-2.12,8,8,0,0,0,7.08-7.09,5.06,5.06,0,0,1,1.42,6.71A.49.49,0,0,0,17.26,15.89Z"}),a.createElement("path",{d:"M7.42,9.38a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5c0-.3.24-.55.63-.93a2.53,2.53,0,0,0,1-2.77A2.05,2.05,0,0,0,7.93,4.22a2.12,2.12,0,0,0-2,1.48.5.5,0,0,0,.36.61A.51.51,0,0,0,6.85,6,1.13,1.13,0,0,1,8,5.22,1,1,0,0,1,9.05,6c.25.79-.11,1.18-.7,1.77A2.33,2.33,0,0,0,7.42,9.38Z"}),a.createElement("path",{d:"M8.45,11.59v-.11a.5.5,0,1,0-1,0v.11a.5.5,0,0,0,1,0Z"}))));var X=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 16.072 16"},a.createElement("g",{id:"image",transform:"translate(0.495 0.495)"},a.createElement("rect",{id:"Rectangle_1144","data-name":"Rectangle 1144",width:"16",height:"16",transform:"translate(-0.495 -0.495)",fill:"none",opacity:"0"}),a.createElement("g",{id:"Rectangle_771","data-name":"Rectangle 771",transform:"translate(-0.495 -0.495)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1"},a.createElement("rect",{width:"16",height:"16",rx:"2",stroke:"none"}),a.createElement("rect",{x:"0.5",y:"0.5",width:"15",height:"15",rx:"1.5",fill:"none"})),a.createElement("circle",{id:"Ellipse_275","data-name":"Ellipse 275",cx:"1.5",cy:"1.5",r:"1.5",transform:"translate(3.505 3.505)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1"}),a.createElement("path",{id:"Path_1674","data-name":"Path 1674",d:"M19.587,14.614,14.973,10,5.426,19.6",transform:"translate(-4.718 -4.902)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1"})));var ee=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 18 19.857"},a.createElement("path",{id:"invoices",fill:t,d:"M399 381h-14a2.018 2.018 0 0 0-2 2.036V400l1.311.729a1 1 0 0 0 .973 0l.821-.458a1 1 0 0 1 .973 0l.827.46a1 1 0 0 0 .972 0l.825-.459a1 1 0 0 1 .972 0l.827.46a1 1 0 0 0 .971 0l.83-.46a1 1 0 0 1 .971 0l.828.46a1 1 0 0 0 .971 0l.832-.462a1 1 0 0 1 .97 0l.836.463a1 1 0 0 0 .969 0L401 400v-16.964a2.018 2.018 0 0 0-2-2.036zm-6.189 15.989v1.262h-1.332v-1.239a2.775 2.775 0 0 1-2.456-2.421l1.6-.359a1.37 1.37 0 0 0 1.517 1.274c.579 0 1-.277 1-.73 0-.335-.255-.555-.718-.66l-1.031-.243c-1.3-.312-2.1-1.1-2.1-2.2a2.459 2.459 0 0 1 2.189-2.4v-1.251h1.332v1.286a2.517 2.517 0 0 1 2.015 1.981l-1.61.428a1.074 1.074 0 0 0-1.181-.961c-.649 0-.973.382-.973.753 0 .312.231.555.683.66l1.008.22c1.552.347 2.165 1.251 2.165 2.293a2.384 2.384 0 0 1-2.108 2.307zM397 386h-10a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z",transform:"translate(-383 -381)"}));var te=({size:e})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512.001 512.001",width:e,height:e},a.createElement("path",{fill:"#FAB446",d:"M512,200.093H0V97.104c0-4.875,3.953-8.828,8.828-8.828h494.345c4.875,0,8.828,3.953,8.828,8.828\n\tL512,200.093L512,200.093z"}),a.createElement("path",{fill:"#73AF00",d:"M503.172,423.725H8.828c-4.875,0-8.828-3.953-8.828-8.828V311.909h512v102.988\n\tC512,419.773,508.047,423.725,503.172,423.725z"}),a.createElement("rect",{y:"200.091",fill:"#F5F5F5",width:"512",height:"111.81"}),a.createElement("g",null,a.createElement("path",{fill:"#41479B",d:"M256,303.449c-26.164,0-47.448-21.284-47.448-47.448s21.284-47.448,47.448-47.448\n\t\ts47.448,21.284,47.448,47.448S282.164,303.449,256,303.449z M256,217.38c-21.298,0-38.621,17.323-38.621,38.621\n\t\tc0,21.298,17.323,38.621,38.621,38.621s38.621-17.323,38.621-38.621C294.621,234.703,277.298,217.38,256,217.38z"}),a.createElement("circle",{fill:"#41479B",cx:"256",cy:"256.001",r:"5.379"}),a.createElement("polygon",{fill:"#41479B",points:"256,256.808 242.33,258.188 212.966,256.808 212.966,255.194 242.33,253.814 256,255.194 \t\n\t\t"}),a.createElement("polygon",{fill:"#41479B",points:"256,256.808 269.67,258.188 299.034,256.808 299.034,255.194 269.67,253.814 256,255.194 \t\n\t\t"}),a.createElement("polygon",{fill:"#41479B",points:"255.193,256.001 253.813,242.331 255.193,212.967 256.807,212.967 258.187,242.331 \n\t\t256.807,256.001 \t"}),a.createElement("polygon",{fill:"#41479B",points:"255.193,256.001 253.813,269.671 255.193,299.035 256.807,299.035 258.187,269.671 \n\t\t256.807,256.001 \t"}),a.createElement("polygon",{fill:"#41479B",points:"255.43,256.571 244.788,247.882 225,226.142 226.141,225.001 247.881,244.789 \n\t\t256.57,255.431 \t"}),a.createElement("polygon",{fill:"#41479B",points:"255.43,256.571 264.119,267.213 285.859,287.001 287,285.86 267.212,264.12 256.57,255.431 \n\t\t\t"}),a.createElement("polygon",{fill:"#41479B",points:"255.43,255.431 264.119,244.789 285.859,225.001 287,226.142 267.212,247.882 \n\t\t256.57,256.571 \t"}),a.createElement("polygon",{fill:"#41479B",points:"255.43,255.431 244.788,264.12 225,285.86 226.141,287.001 247.881,267.213 256.57,256.571 \n\t\t\t"}),a.createElement("polygon",{fill:"#41479B",points:"256.309,256.747 244.207,263.253 216.551,273.215 215.933,271.724 242.534,259.212 \n\t\t255.691,255.255 \t"}),a.createElement("polygon",{fill:"#41479B",points:"256.309,256.747 269.466,252.79 296.067,240.278 295.449,238.787 267.793,248.749 \n\t\t255.691,255.255 \t"}),a.createElement("polygon",{fill:"#41479B",points:"255.254,256.31 248.748,244.208 238.786,216.552 240.277,215.934 252.789,242.535 \n\t\t256.746,255.692 \t"}),a.createElement("polygon",{fill:"#41479B",points:"255.254,256.31 259.211,269.467 271.723,296.068 273.214,295.45 263.252,267.794 \n\t\t256.746,255.692 \t"}),a.createElement("polygon",{fill:"#41479B",points:"255.691,256.747 242.534,252.79 215.933,240.278 216.551,238.787 244.207,248.749 \n\t\t256.309,255.255 \t"}),a.createElement("polygon",{fill:"#41479B",points:"255.691,256.747 267.793,263.253 295.449,273.215 296.067,271.724 269.466,259.212 \n\t\t256.309,255.255 \t"}),a.createElement("polygon",{fill:"#41479B",points:"255.254,255.692 259.211,242.535 271.723,215.934 273.214,216.552 263.252,244.208 \n\t\t256.746,256.31 \t"}),a.createElement("polygon",{fill:"#41479B",points:"255.254,255.692 248.748,267.794 238.786,295.45 240.277,296.068 252.789,269.467 \n\t\t256.746,256.31 \t"})),a.createElement("circle",{fill:"#F5F5F5",cx:"256",cy:"256.001",r:"7.256"}),a.createElement("circle",{fill:"#41479B",cx:"256",cy:"256.001",r:"4.351"}));var ne=({size:e})=>a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 20 20",width:e,height:e},a.createElement("path",{fill:"#E6E7E8",d:"M0.4,3.2h19.3c0.2,0,0.4,0.2,0.4,0.4v13c0,0.2-0.2,0.4-0.4,0.4H0.4c-0.2,0-0.4-0.2-0.4-0.4v-13\n\tC0,3.3,0.2,3.2,0.4,3.2z"}),a.createElement("path",{fill:"#4C8056",d:"M3.3,3.2h16.3c0.2,0,0.4,0.2,0.4,0.4c0,0,0,0,0,0v13c0,0.2-0.2,0.4-0.4,0.4l0,0H3.3l0,0V3.2L3.3,3.2z"}),a.createElement("path",{fill:"#E6E7E8",d:"M15.7,10.4c0,2.4-2,4.4-4.4,4.4s-4.4-2-4.4-4.4c0-2.4,2-4.4,4.4-4.4c0,0,0,0,0,0c0.4,0,0.8,0.1,1.1,0.2\n\tc-1.7,0.1-3,1.5-2.9,3.1c0.1,1.7,1.5,3,3.1,2.9c1.6,0,2.9-1.3,2.9-2.9C15.7,9.6,15.7,10,15.7,10.4z"}),a.createElement("polygon",{fill:"#E6E7E8",points:"15.1,4.7 15.4,5.8 16.7,5.8 15.7,6.5 16,7.7 15.1,7 14.1,7.7 14.5,6.5 13.5,5.8 14.7,5.8 "}));var re=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"svg1",viewBox:"0 0 1000 500",version:"1",y:"0",x:"0",height:e,width:e},a.createElement("g",{id:"g602",transform:"scale(8.3333)"},a.createElement("rect",{id:"rect124",fill:"#000066",height:"60",width:"120",y:"0",x:"0"}),a.createElement("g",{id:"g584"},a.createElement("path",{id:"path146",fill:"#ffffff",d:"m0 0v3.3541l53.292 26.646h6.708v-3.354l-53.292-26.646h-6.708zm60 0v3.354l-53.292 26.646h-6.708v-3.354l53.292-26.646h6.708z"}),a.createElement("path",{id:"path136",fill:"#ffffff",d:"m25 0v30h10v-30h-10zm-25 10v10h60v-10h-60z"}),a.createElement("path",{id:"path141",fill:"#cc0000",d:"m0 12v6h60v-6h-60zm27-12v30h6v-30h-6z"}),a.createElement("path",{id:"path150",fill:"#cc0000",d:"m0 30l20-10h4.472l-20 10h-4.472zm0-30l20 10h-4.472l-15.528-7.7639v-2.2361zm35.528 10l20-10h4.472l-20 10h-4.472zm24.472 20l-20-10h4.472l15.528 7.764v2.236z"})),a.createElement("polygon",{id:"polygon589",fill:"#ffffff",points:"30 36 31.736 41.396 37.036 39.389 33.9 44.11 38.774 47.003 33.127 47.494 33.905 53.109 30 49 26.095 53.109 26.873 47.494 21.226 47.003 26.1 44.11 22.964 39.389 28.264 41.396"}),a.createElement("g",{id:"g596"},a.createElement("polygon",{id:"polygon590",fill:"#ffffff",points:"90 45.714 90.826 48.284 93.351 47.328 91.857 49.576 94.178 50.954 91.489 51.188 91.86 53.861 90 51.905 88.14 53.861 88.511 51.188 85.822 50.954 88.143 49.576 86.649 47.328 89.174 48.284"}),a.createElement("polygon",{id:"polygon592",fill:"#ffffff",points:"90 5.7143 90.826 8.2839 93.351 7.3279 91.857 9.5762 94.178 10.954 91.489 11.188 91.86 13.861 90 11.905 88.14 13.861 88.511 11.188 85.822 10.954 88.143 9.5762 86.649 7.3279 89.174 8.2839"}),a.createElement("polygon",{id:"polygon593",fill:"#ffffff",points:"75 21.964 75.826 24.534 78.351 23.578 76.857 25.826 79.178 27.204 76.489 27.438 76.86 30.111 75 28.155 73.14 30.111 73.511 27.438 70.822 27.204 73.143 25.826 71.649 23.578 74.174 24.534"}),a.createElement("polygon",{id:"polygon594",fill:"#ffffff",points:"103.33 17.964 104.16 20.534 106.68 19.578 105.19 21.826 107.51 23.204 104.82 23.438 105.19 26.111 103.33 24.155 101.47 26.111 101.84 23.438 99.155 23.204 101.48 21.826 99.983 19.578 102.51 20.534"}),a.createElement("polygon",{id:"polygon595",fill:"#ffffff",points:"96 30 96.653 31.601 98.378 31.728 97.057 32.843 97.47 34.522 96 33.611 94.53 34.522 94.943 32.843 93.622 31.728 95.347 31.601"}))));var ae=({size:e,color:t="#000"})=>a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",height:e,width:e,x:"0px",y:"0px",viewBox:"0 0 55.2 38.4"},a.createElement("g",null,a.createElement("path",{fill:"#ff0000",d:"M3.03,0h49.13c1.67,0,3.03,1.36,3.03,3.03v32.33c0,1.67-1.36,3.03-3.03,3.03H3.03C1.36,38.4,0,37.04,0,35.37 V3.03C0,1.36,1.36,0,3.03,0L3.03,0z"}),a.createElement("polygon",{fill:"#fff",points:"8.4,0 46.8,0 46.8,38.4 8.4,38.4 8.4,0"}),a.createElement("path",{fill:"#ff0000",d:"M27.6,3.6l-2.62,4.89c-0.3,0.53-0.83,0.48-1.37,0.18l-1.9-0.98l1.41,7.5c0.3,1.37-0.66,1.37-1.13,0.78 l-3.31-3.7l-0.53,1.88c-0.06,0.25-0.33,0.51-0.74,0.45l-4.18-0.88l1.1,4c0.24,0.89,0.42,1.26-0.24,1.49l-1.49,0.7l7.21,5.85 c0.29,0.22,0.43,0.62,0.32,0.98l-0.63,2.07c2.48-0.29,4.71-0.72,7.19-0.98c0.22-0.02,0.58,0.33,0.58,0.59L26.95,36h1.2l-0.19-7.56 c0-0.26,0.33-0.63,0.55-0.61c2.48,0.27,4.71,0.7,7.19,0.98l-0.64-2.08c-0.11-0.36,0.04-0.75,0.32-0.98l7.21-5.85l-1.49-0.7 c-0.66-0.24-0.48-0.6-0.24-1.49l1.1-4l-4.18,0.88c-0.41,0.06-0.68-0.2-0.74-0.45l-0.53-1.88l-3.31,3.7 c-0.47,0.59-1.42,0.59-1.13-0.78l1.41-7.5l-1.9,0.98c-0.53,0.3-1.07,0.34-1.37-0.18L27.6,3.6L27.6,3.6L27.6,3.6z M27.6,3.6 L27.6,3.6L27.6,3.6L27.6,3.6L27.6,3.6z"})));var ie=({size:e})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:e,height:e},a.createElement("path",{fill:"#E6E7E8",d:"M20,9.6v6.2c0,0.4-0.3,0.7-0.7,0.7H0.7c-0.4,0-0.7-0.3-0.7-0.7V9.6H20z"}),a.createElement("path",{fill:"#C03A2B",d:"M20,3.3v6.2H0V3.3C0,3,0.3,2.7,0.7,2.7h18.6C19.7,2.7,20,3,20,3.3z"}));var oe=({size:e,color:t="#000"})=>a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",width:e,height:e,x:"0px",y:"0px",viewBox:"0 0 20 20"},a.createElement("g",{id:"Layer_2_1_"},a.createElement("g",{id:"Layer_1-2"},a.createElement("path",{fill:t,d:"M10.6,10.5v1.8c0.4-0.1,0.7-0.4,0.8-0.8C11.5,10.9,11.2,10.7,10.6,10.5z"}),a.createElement("path",{fill:t,d:"M8.6,8.4C8.6,8.8,9,9,9.6,9.2V7.4c-0.3,0-0.5,0.2-0.7,0.4C8.7,7.9,8.6,8.2,8.6,8.4z"}),a.createElement("path",{fill:t,d:"M18.1,1.8l-0.6-0.3l-0.6-0.3C16.7,1,16.3,1,16,1.2l-0.7,0.4c-0.3,0.1-0.6,0.1-0.9,0l-0.7-0.4\n\t\t\tc-0.3-0.2-0.6-0.2-0.9,0l-0.7,0.4c-0.3,0.1-0.6,0.1-0.9,0l-0.8-0.4C10.2,1,9.8,1,9.6,1.2L8.9,1.6C8.6,1.7,8.2,1.7,8,1.6L7.2,1.2\n\t\t\tC6.9,1,6.6,1,6.3,1.2L5.6,1.6C5.3,1.7,5,1.7,4.7,1.6L3.9,1.2C3.7,1,3.3,1,3.1,1.2L2.5,1.5L1.9,1.8v1.4l0,0v14.9L3,18.8\n\t\t\tc0.3,0.2,0.6,0.2,0.9,0l0.7-0.4c0.3-0.2,0.6-0.2,0.9,0l0.8,0.4c0.3,0.2,0.6,0.2,0.9,0l0.7-0.4c0.3-0.2,0.6-0.2,0.9,0l0.8,0.4\n\t\t\tc0.3,0.2,0.6,0.2,0.9,0l0.8-0.4c0.3-0.2,0.6-0.2,0.9,0l0.7,0.4c0.3,0.2,0.6,0.2,0.9,0l0.8-0.4c0.3-0.2,0.6-0.2,0.9,0l0.8,0.4\n\t\t\tc0.3,0.2,0.6,0.2,0.9,0l1.2-0.6l0,0L18.1,1.8z M12.4,11.6c-0.1,0.9-0.9,1.6-1.8,1.7v1.2c0,0.3-0.2,0.5-0.5,0.5s-0.5-0.2-0.5-0.5\n\t\t\tv-1.2c-1.1-0.2-2-1-2.3-2.1c-0.1-0.3,0.1-0.5,0.4-0.6c0.3-0.1,0.5,0.1,0.6,0.4c0.1,0.7,0.7,1.2,1.3,1.4v-2.1\n\t\t\tC8.7,10,7.7,9.6,7.7,8.5c-0.1-0.5,0.1-1,0.4-1.4C8.5,6.7,9,6.4,9.6,6.4V5.3c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v1.1\n\t\t\tc1,0.1,1.7,0.9,1.8,1.8c0,0.3-0.2,0.5-0.4,0.6c-0.3,0-0.5-0.2-0.6-0.4c0,0,0,0,0,0c-0.1-0.4-0.4-0.8-0.8-0.9v2\n\t\t\tC11.5,9.7,12.6,10.2,12.4,11.6z"}))));var le=({size:e,color:t="#000"})=>a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 20 20",width:e,height:e},a.createElement("g",{id:"Layer_2_1_"},a.createElement("g",{id:"Layer_1-2"},a.createElement("path",{fill:t,d:"M18.1,1.8l-0.6-0.3l-0.6-0.3C16.7,1,16.3,1,16,1.2l-0.7,0.4c-0.3,0.1-0.6,0.1-0.9,0l-0.7-0.4\n\t\t\tc-0.3-0.2-0.6-0.2-0.9,0l-0.7,0.4c-0.3,0.1-0.6,0.1-0.9,0l-0.8-0.4C10.2,1,9.8,1,9.6,1.2L8.9,1.6C8.6,1.7,8.2,1.7,8,1.6L7.2,1.2\n\t\t\tC6.9,1,6.6,1,6.3,1.2L5.6,1.6C5.3,1.7,5,1.7,4.7,1.6L3.9,1.2C3.7,1,3.3,1,3.1,1.2L2.5,1.5L1.9,1.8v1.4l0,0v14.9L3,18.8\n\t\t\tc0.3,0.2,0.6,0.2,0.9,0l0.7-0.4c0.3-0.2,0.6-0.2,0.9,0l0.8,0.4c0.3,0.2,0.6,0.2,0.9,0l0.7-0.4c0.3-0.2,0.6-0.2,0.9,0l0.8,0.4\n\t\t\tc0.3,0.2,0.6,0.2,0.9,0l0.8-0.4c0.3-0.2,0.6-0.2,0.9,0l0.7,0.4c0.3,0.2,0.6,0.2,0.9,0l0.8-0.4c0.3-0.2,0.6-0.2,0.9,0l0.8,0.4\n\t\t\tc0.3,0.2,0.6,0.2,0.9,0l1.2-0.6l0,0L18.1,1.8z M14.8,14.5H5.2c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h9.6c0.3,0,0.5,0.2,0.5,0.5\n\t\t\tS15.1,14.5,14.8,14.5z M14.8,10.2H5.2c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h9.6c0.3,0,0.5,0.2,0.5,0.5S15.1,10.2,14.8,10.2z\n\t\t\t M10.8,6.1H5.2c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h5.6c0.3,0,0.5,0.2,0.5,0.5S11.1,6.1,10.8,6.1z"}))));var ue=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"-120 -80 240 160"},a.createElement("defs",null,a.createElement("path",{id:"spearshape",d:"M -1,55.4256258422040733928782829281879157421699 h 2 V -38 C 3,-40 3,-43 3,-46 C 3,-48 3,-56 0,-64.6632301492380856250246634162192350325315 C -3,-56 -3,-48 -3,-46 C -3,-43 -3,-40 -1,-38 z","stroke-miterlimit":"10",transform:"rotate(30)"})),a.createElement("rect",{x:"-120",y:"-80",width:"240",height:"160",fill:"#fff"}),a.createElement("rect",{x:"-120",y:"-80",width:"240",height:"48"}),a.createElement("rect",{x:"-120",y:"32",width:"240",height:"48",fill:"#060"}),a.createElement("g",{id:"spear"},a.createElement("use",{href:"#spearshape",stroke:"#000"}),a.createElement("use",{href:"#spearshape",fill:"#fff"})),a.createElement("use",{href:"#spear",transform:"scale(-1,1)"}),a.createElement("path",{fill:"#b00",d:"M -120,-24 V 24 H -19 c 3,8 13,24 19,24 s 16,-16 19,-24 H 120 V -24 H 19 c -3,-8 -13,-24 -19,-24 s -16,16 -19,24 z"}),a.createElement("path",{id:"deco_r",d:"M 19,24 c 3,-8 5,-16 5,-24 s -2,-16 -5,-24 c -3,8 -5,16 -5,24 s 2,16 5,24"}),a.createElement("use",{href:"#deco_r",transform:"scale(-1,1)"}),a.createElement("g",{fill:"#fff"},a.createElement("ellipse",{rx:"4",ry:"6"}),a.createElement("path",{id:"deco_br",d:"M 1,5.85 c 0,0 4,8 4,21 s -4,21 -4,21 z"}),a.createElement("use",{href:"#deco_br",transform:"scale(-1)"}),a.createElement("use",{href:"#deco_br",transform:"scale(-1,1)"}),a.createElement("use",{href:"#deco_br",transform:"scale(1,-1)"})));var se=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 18 21.6"},a.createElement("g",{id:"leads",transform:"translate(-301 -342)"},a.createElement("path",{id:"Path_1664",d:"M315.85 344h-.639a3.4 3.4 0 0 1-3.411 3.377h-3.6a3.4 3.4 0 0 1-3.411-3.377h-.639a3.138 3.138 0 0 0-3.15 3.118v13.364a3.138 3.138 0 0 0 3.15 3.118h11.7a3.138 3.138 0 0 0 3.15-3.118v-13.364a3.138 3.138 0 0 0-3.15-3.118zm-1.35 13.364h-9a.891.891 0 1 1 0-1.782h9a.891.891 0 1 1 0 1.782zm0-4.455h-9a.891.891 0 1 1 0-1.782h9a.891.891 0 1 1 0 1.782z",className:"cls-1",fill:t,"data-name":"Path 1664"}),a.createElement("g",{id:"Group_1663","data-name":"Group 1663",transform:"translate(306 342)"},a.createElement("path",{id:"Path_1665",d:"M315 344a2.006 2.006 0 0 1-2 2h-4a2 2 0 0 1 0-4h4a2.006 2.006 0 0 1 2 2z",className:"cls-1","data-name":"Path 1665",fill:t,transform:"translate(-307 -342)"}))));var ce=({size:e,color:t})=>a.createElement("svg",{version:"1.1",x:"0px",y:"0px",width:e,height:e,fill:t,viewBox:"0 0 50 50"},a.createElement("path",{d:"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"},a.createElement("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})));var de=({size:e})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:e,height:e},a.createElement("rect",{y:"3.3",fill:"#F0F0F0",width:"20",height:"13.3"}),a.createElement("g",null,a.createElement("rect",{y:"5",fill:"#D80027",width:"20",height:"1.7"}),a.createElement("rect",{y:"8.3",fill:"#D80027",width:"20",height:"1.7"}),a.createElement("rect",{y:"11.7",fill:"#D80027",width:"20",height:"1.7"}),a.createElement("rect",{y:"15",fill:"#D80027",width:"20",height:"1.7"})),a.createElement("rect",{y:"3.3",fill:"#0052B4",width:"10",height:"7.2"}),a.createElement("g",null,a.createElement("path",{fill:"#FFDA44",d:"M5.5,8.6c-0.9,0-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6c0.3,0,0.6,0.1,0.8,0.2C5.9,5.1,5.4,4.9,4.9,4.9\n\t\tc-1.1,0-2,0.9-2,2s0.9,2,2,2c0.6,0,1.1-0.2,1.4-0.6C6.1,8.5,5.8,8.6,5.5,8.6z"}),a.createElement("polygon",{fill:"#FFDA44",points:"6,5.8 6.3,6.4 6.9,6.2 6.6,6.8 7.2,7.3 6.5,7.4 6.5,8.1 6,7.7 5.4,8.1 5.4,7.4 4.8,7.3 5.3,6.8 5,6.2 \n\t\t5.7,6.4 \t"})));var me=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 18 16.079"},a.createElement("g",{id:"manage-clients",transform:"translate(-429 -346.552)"},a.createElement("g",{id:"Group_1666","data-name":"Group 1666"},a.createElement("path",{id:"Path_1670",fill:t,d:"M443.593 354.388a4.492 4.492 0 0 0-5.59-7.013 4.494 4.494 0 0 0-5.6 7.013 6.383 6.383 0 0 0-3.403 5.673v1.928a.643.643 0 0 0 .643.643h16.714a.643.643 0 0 0 .643-.643v-1.928a6.385 6.385 0 0 0-3.407-5.673zm-4.445-.454c-.064-.031-.128-.058-.186-.093l.014-.02a4.5 4.5 0 0 0 .688-1.254l.02-.054a4.457 4.457 0 0 0 .171-.661c0-.033.01-.065.015-.1a4.071 4.071 0 0 0 0-1.381l-.015-.1a4.457 4.457 0 0 0-.171-.661l-.02-.054a4.484 4.484 0 0 0-.688-1.254l-.014-.02a3.209 3.209 0 1 1 2.93 5.7c-.049.023-.1.043-.149.064a3.192 3.192 0 0 1-.489.153c-.032.007-.064.011-.1.017a3.158 3.158 0 0 1-.566.057c-.085 0-.171-.006-.257-.014a.515.515 0 0 1-.1-.006 3.243 3.243 0 0 1-1.051-.31c-.006-.005-.02-.004-.032-.009zm6.566 7.412h-3.857v-1.285c0-.2-.011-.4-.029-.6-.006-.058-.015-.115-.021-.173-.017-.142-.037-.283-.064-.422l-.037-.18c-.031-.143-.067-.285-.107-.425-.014-.047-.026-.094-.04-.139a6.355 6.355 0 0 0-.775-1.625l-.025-.036c-.11-.164-.229-.323-.354-.477l-.005-.005a5.633 5.633 0 0 0-.414-.461h.026a4.556 4.556 0 0 0 .547.038h.036a4.287 4.287 0 0 0 .506-.033c.053-.006.1-.016.158-.024.136-.021.271-.048.4-.082.038-.009.076-.018.115-.029a4.444 4.444 0 0 0 .514-.175 5.109 5.109 0 0 1 3.421 4.846v1.285z","data-name":"Path 1670"}))));var pe=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:e,width:e,viewBox:"0 0 20 18",color:t,fill:"currentColor",stroke:"currentColor",strokeWidth:"0.5"},a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("path",{d:"M17.75,3.79,15.12.19A.46.46,0,0,0,14.74,0H3.05a.47.47,0,0,0-.39.2L.11,3.72A.46.46,0,0,0,0,4.06a.51.51,0,0,0,0,.17V6A2,2,0,0,0,.71,7.5v7a3.4,3.4,0,0,0,3.41,3.38h9.74a3.4,3.4,0,0,0,3.41-3.38V7.28h0A2,2,0,0,0,17.75,6V4.36A.48.48,0,0,0,17.75,3.79ZM3.29,1H14.5l1.88,2.57H1.43ZM1,4.47H16.8V6a1.06,1.06,0,0,1-1.06,1H15.5a1.06,1.06,0,0,1-1-.82l-.15-.7a.48.48,0,0,0-.47-.37.47.47,0,0,0-.46.37l-.16.7A1.08,1.08,0,0,1,12.12,7a1,1,0,0,1-1-.87L11,5.54a.45.45,0,0,0-.45-.39.44.44,0,0,0-.47.36l-.17.72A1.07,1.07,0,0,1,8.81,7a1,1,0,0,1-1-.81l-.17-.72a.47.47,0,0,0-.92,0l-.16.72a1.06,1.06,0,0,1-2.06,0L4.3,5.51a.5.5,0,0,0-.46-.36.47.47,0,0,0-.46.37l-.15.7A1.07,1.07,0,0,1,2.2,7H2A1,1,0,0,1,1,6ZM7.1,16.89V11.27h3.78v5.62Zm6.76,0h-2V10.8a.48.48,0,0,0-.47-.48H6.63a.48.48,0,0,0-.48.48v6.09h-2a2.45,2.45,0,0,1-2.46-2.43V8A1.86,1.86,0,0,0,2,8h.2a2,2,0,0,0,1.65-.87,2,2,0,0,0,3.31,0A2,2,0,0,0,8.85,8a2,2,0,0,0,1.64-.85A2.07,2.07,0,0,0,12.2,8a2,2,0,0,0,1.65-.86A2,2,0,0,0,15.5,8h.24a1.81,1.81,0,0,0,.58-.1v6.57A2.45,2.45,0,0,1,13.86,16.89Z"}))));var fe=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:e,width:e,viewBox:"0 0 20 20",color:t,fill:"currentColor",stroke:"currentColor",strokeWidth:"0.5"},a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("path",{d:"M9.92,4.09a.51.51,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5h0a.49.49,0,0,0-.5.49v1a.51.51,0,0,0,.5.51Z"}),a.createElement("path",{d:"M16.92,9.09h-2a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5A.5.5,0,0,0,16.92,9.09Z"}),a.createElement("path",{d:"M9.92,0h0A9.92,9.92,0,0,0,0,9.93c0,.34,0,.67.05,1a.5.5,0,0,0,.5.45h0a.51.51,0,0,0,.45-.55A6.94,6.94,0,0,1,1,9.93,8.93,8.93,0,0,1,9.92,1h0a8.91,8.91,0,0,1,8.92,8.92c0,.3,0,.61,0,.92a.5.5,0,0,0,.44.55.5.5,0,0,0,.55-.45,8.71,8.71,0,0,0,.05-1A9.93,9.93,0,0,0,9.92,0Z"}),a.createElement("path",{d:"M5.52,4.23a.51.51,0,0,0-.7-.1.5.5,0,0,0-.1.7l.8,1.06a.5.5,0,0,0,.8-.61Z"}),a.createElement("path",{d:"M4.92,9.09h-2a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5A.5.5,0,0,0,4.92,9.09Z"}),a.createElement("path",{d:"M15.32,5.28a.51.51,0,0,0-.58-.16L8.87,7.37l-.07,0a2.24,2.24,0,1,0,2.82,3.39l3.7-4.91A.53.53,0,0,0,15.32,5.28Zm-4.47,4.89a1.28,1.28,0,0,1-.93.42A1.25,1.25,0,0,1,8.68,9.35a1.27,1.27,0,0,1,.59-1.06l4.2-1.61Z"}))));var he=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 18.001 18"},a.createElement("g",{id:"my-network",fill:t,transform:"translate(-302.873 -397.159)"},a.createElement("path",{id:"Path_1744",d:"M316.427 454.7c-.1 0-.19.022-.287.029a15.718 15.718 0 0 0-.721-1.414c-.253-.437-.53-.856-.821-1.264a3.934 3.934 0 1 0-6.591-.182 13.279 13.279 0 0 0-.938 1.392 13.12 13.12 0 0 0-.7 1.448c-.028 0-.055-.008-.083-.008a3.927 3.927 0 1 0 3.39 5.873 12.322 12.322 0 0 0 1.612.126h.069a12.358 12.358 0 0 0 1.683-.129 3.92 3.92 0 1 0 3.392-5.871zm-5.074 4.206h-.06a10.539 10.539 0 0 1-1.106-.069c0-.071.021-.139.021-.21a3.912 3.912 0 0 0-2.1-3.454 11.215 11.215 0 0 1 .513-1.02 11.571 11.571 0 0 1 .65-.994 3.824 3.824 0 0 0 3.979.1c.216.312.423.63.613.959s.381.7.549 1.056a3.91 3.91 0 0 0-1.916 3.356c0 .073.017.141.021.212a10.434 10.434 0 0 1-1.163.068z","data-name":"Path 1744",transform:"translate(.52 -47.758)"})));var ge=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24"},a.createElement("path",{id:"Path_2116",fill:t,d:"M338.553 367.725h-9.106a2.447 2.447 0 0 0-2.447 2.447v10.505a2.448 2.448 0 0 0 2.447 2.448h9.106a2.448 2.448 0 0 0 2.447-2.448v-10.505a2.447 2.447 0 0 0-2.447-2.447zm-1.053 12.056h-7a.7.7 0 0 1 0-1.4h7a.7.7 0 1 1 0 1.4zm0-3.5h-7a.7.7 0 0 1 0-1.4h7a.7.7 0 1 1 0 1.4zm0-3.5h-7a.7.7 0 0 1 0-1.4h7a.7.7 0 1 1 0 1.4z","data-name":"Path 2116",transform:"translate(-322 -364)"}));var ye=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24"},a.createElement("g",{id:"number-fornamt-icon",transform:"translate(4 4)"},a.createElement("g",{id:"Rectangle_885",fill:t,stroke:t,"data-name":"Rectangle 885",transform:"translate(-.344)"},a.createElement("rect",{width:"16",height:"16",stroke:"none",rx:"2"}),a.createElement("rect",{width:"15",height:"15",x:".5",y:".5",fill:"none",rx:"1.5"})),a.createElement("text",{id:"_123",fill:"#fff","data-name":"123",fontFamily:"CircularStd-Medium, Circular Std",fontSize:"9px",fontWeight:"500",transform:"translate(7.656 11)"},a.createElement("tspan",{x:"-6.642",y:"0"},"123"))));var ve=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 18 18"},a.createElement("g",{id:"online-payments",transform:"translate(-23.999 -584)"},a.createElement("g",{id:"Group_1785","data-name":"Group 1785",transform:"translate(-329.257 201.862)"},a.createElement("g",{id:"Group_1787","data-name":"Group 1787",transform:"translate(-2.388 -20.196)"},a.createElement("path",{id:"Path_1740",d:"M371.886 404.038h-9.91a2.653 2.653 0 0 0-2.528 1.864h10.177a3.059 3.059 0 0 1 3.059 3.06v8.567A2.653 2.653 0 0 0 374.55 415v-8.3a2.663 2.663 0 0 0-2.664-2.662z",className:"cls-2","data-name":"Path 1740",fill:t,transform:"translate(-.906)"}),a.createElement("g",{id:"Group_1786","data-name":"Group 1786",transform:"translate(355.644 406.818)"},a.createElement("path",{id:"Path_1741",d:"M368.217 407.687h-9.91a2.664 2.664 0 0 0-2.663 2.663v6.938a2.664 2.664 0 0 0 2.663 2.663h9.91a2.663 2.663 0 0 0 2.663-2.663v-6.938a2.663 2.663 0 0 0-2.663-2.663zm-6.918 6.395a1.643 1.643 0 0 1-1.021.283h-.571v1.081a.124.124 0 0 1-.035.088.12.12 0 0 1-.09.037h-.721a.122.122 0 0 1-.088-.037.12.12 0 0 1-.037-.088V412.2a.13.13 0 0 1 .034-.092.118.118 0 0 1 .091-.038h1.416a1.6 1.6 0 0 1 1.021.3 1.04 1.04 0 0 1 .37.865 1 1 0 0 1-.368.847zm3.781 1.457a.1.1 0 0 1-.072.032h-.651a.174.174 0 0 1-.171-.11l-.18-.485H362.7l-.18.485a.174.174 0 0 1-.171.11h-.651a.111.111 0 0 1-.105-.105.135.135 0 0 1 .005-.045l1.166-3.208a.2.2 0 0 1 .2-.146h.781a.2.2 0 0 1 .2.146l1.166 3.208a.135.135 0 0 1 .005.045.1.1 0 0 1-.036.073zm3.005-3.312l-1.156 2.153v1.066a.117.117 0 0 1-.037.09.129.129 0 0 1-.092.035h-.686a.122.122 0 0 1-.088-.037.12.12 0 0 1-.037-.088v-1.066l-1.156-2.153a.1.1 0 0 1-.015-.055.1.1 0 0 1 .033-.072.1.1 0 0 1 .072-.033h.66a.185.185 0 0 1 .115.035.229.229 0 0 1 .065.075l.7 1.256.7-1.256a.226.226 0 0 1 .065-.075.187.187 0 0 1 .116-.035H368a.1.1 0 0 1 .072.033.1.1 0 0 1 .033.072.1.1 0 0 1-.02.055z",fill:t,className:"cls-2","data-name":"Path 1741",transform:"translate(-355.644 -407.687)"}),a.createElement("path",{id:"Path_1742",d:"M365.176 415.87h.891l-.445-1.276z",fill:t,className:"cls-2","data-name":"Path 1742",transform:"translate(-357.914 -409.332)"}),a.createElement("path",{id:"Path_1743",d:"M361.519 414.383h-.561v.862h.561a.462.462 0 0 0 .323-.108.408.408 0 0 0 .117-.318.455.455 0 0 0-.107-.315.425.425 0 0 0-.333-.121z",fill:t,className:"cls-2","data-name":"Path 1743",transform:"translate(-356.91 -409.282)"}))))));var be=({size:e=48,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`},a.createElement("g",{id:"client-mgmt",transform:"translate(-74 -2679)"},a.createElement("rect",{id:"Rectangle_1228","data-name":"Rectangle 1228",width:"48",height:"48",transform:"translate(74 2679)",fill:"#fff",opacity:"0"}),a.createElement("g",{id:"Group_2412","data-name":"Group 2412",transform:"translate(-246.746 2633.413)"},a.createElement("g",{id:"Group_2410","data-name":"Group 2410"},a.createElement("path",{id:"Path_1872","data-name":"Path 1872",d:"M338.605,52.587a7.943,7.943,0,1,0,7.984,7.957A7.961,7.961,0,0,0,338.605,52.587Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),a.createElement("path",{id:"Path_1873","data-name":"Path 1873",d:"M346.589,60.544a7.956,7.956,0,1,1-7.984-7.957A7.968,7.968,0,0,1,346.589,60.544Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})),a.createElement("path",{id:"Path_1874","data-name":"Path 1874",d:"M355.519,87.125H321.746a16.887,16.887,0,1,1,33.773,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),a.createElement("g",{id:"Group_2411","data-name":"Group 2411"},a.createElement("path",{id:"Path_1875","data-name":"Path 1875",d:"M344.392,55.063a7.941,7.941,0,1,1,.144,11.085",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})),a.createElement("path",{id:"Path_1876","data-name":"Path 1876",d:"M344.394,71.247a16.9,16.9,0,0,1,22.649,15.878H355.519",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}))));var Ee=({size:e=48,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`},a.createElement("g",{id:"cloud",transform:"translate(-74 -2679)"},a.createElement("g",{id:"Group_2426",transform:"translate(-246.575 2632.873)"},a.createElement("path",{id:"Path_1883",d:"M357.683 65.457a14.36 14.36 0 0 0-28.418 2.85c0 .324.013.655.042 1.006a8.615 8.615 0 0 0 .916 17.183h26.8a10.53 10.53 0 0 0 .657-21.039z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"}),a.createElement("path",{id:"Path_1884",d:"M338.019 72.25l3.706 3.706a.543.543 0 0 0 .77 0l7.8-7.8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(.416 .358)"}))));var Se=({size:e=48,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`},a.createElement("g",{id:"easy-customization",transform:"translate(-74 -2679)"},a.createElement("g",{id:"Group_2435",transform:"translate(-246.492 2633.134)"},a.createElement("g",{id:"settings"},a.createElement("path",{id:"Subtraction_1",d:"M337.515 78.682a2.9 2.9 0 0 1-2.892-2.893v-.132a2.5 2.5 0 0 0-4.194-1.7l-.088.088a2.876 2.876 0 0 1-2.046.848 2.894 2.894 0 0 1-2.051-4.935l.085-.088a2.4 2.4 0 0 0-1.707-4.077h-.242a2.892 2.892 0 0 1 0-5.785h.13a2.5 2.5 0 0 0 1.708-4.194l-.085-.088a2.892 2.892 0 1 1 4.09-4.09l.088.087a2.384 2.384 0 0 0 2.633.477h.116a2.385 2.385 0 0 0 1.445-2.184v-.256a2.893 2.893 0 1 1 5.785 0v.132a2.407 2.407 0 0 0 4.08 1.705l.085-.088a2.895 2.895 0 0 1 4.942 2.047 2.92 2.92 0 0 1-.849 2.047l-.087.087a2.384 2.384 0 0 0-.477 2.633v.116a2.382 2.382 0 0 0 2.181 1.445h.247a2.892 2.892 0 0 1 0 5.785h-.133a2.405 2.405 0 0 0-1.707 4.078l.088.087a2.894 2.894 0 0 1 0 4.091 2.893 2.893 0 0 1-4.091 0l-.085-.088a2.407 2.407 0 0 0-4.077 1.708v.246a2.9 2.9 0 0 1-2.892 2.891zm-.115-20.247a4.337 4.337 0 1 0 4.34 4.34 4.337 4.337 0 0 0-4.34-4.34z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"})),a.createElement("g",{id:"settings-2"},a.createElement("path",{id:"Subtraction_1-2",d:"M353.589 91.522a1.737 1.737 0 0 1-.946-2.266l.03-.074a1.5 1.5 0 0 0-1.94-1.9l-.069.029a1.727 1.727 0 0 1-1.33 0 1.738 1.738 0 0 1-.013-3.209l.067-.029a1.444 1.444 0 0 0-.017-2.654l-.134-.055a1.737 1.737 0 0 1 1.32-3.213l.072.03a1.5 1.5 0 0 0 1.906-1.94l-.027-.068a1.737 1.737 0 1 1 3.205-1.338l.029.068a1.433 1.433 0 0 0 1.353.866l.065.027a1.433 1.433 0 0 0 1.3-.884l.056-.137a1.737 1.737 0 0 1 3.214 1.319l-.03.072a1.445 1.445 0 0 0 1.877 1.878l.068-.029a1.738 1.738 0 0 1 2.277 2.264 1.75 1.75 0 0 1-.938.943l-.069.029a1.433 1.433 0 0 0-.866 1.353l-.026.065a1.43 1.43 0 0 0 .882 1.3l.137.057a1.737 1.737 0 0 1-1.321 3.213l-.073-.031a1.444 1.444 0 0 0-1.879 1.875l.028.069a1.737 1.737 0 0 1-.933 2.272 1.737 1.737 0 0 1-2.273-.932l-.027-.067a1.445 1.445 0 0 0-2.654.017l-.057.137a1.737 1.737 0 0 1-2.264.943zm4.556-11.271a2.6 2.6 0 1 0 1.42 3.4 2.6 2.6 0 0 0-1.42-3.4z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"})))));var Ce=({size:e=48,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`},a.createElement("g",{id:"expense-management",transform:"translate(-74 -2679)"},a.createElement("g",{id:"Group_2432",transform:"translate(-245.597 2632.435)"},a.createElement("path",{id:"Rectangle_1237",d:"M5.65 0h9.261v11.3H5.65A5.65 5.65 0 0 1 0 5.65 5.65 5.65 0 0 1 5.65 0z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(351.502 64.636)"}),a.createElement("rect",{id:"Rectangle_1238",width:"44.816",height:"37.347",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",rx:"6.908",transform:"translate(321.597 51.565)"}),a.createElement("rect",{id:"Rectangle_1239",width:"3.948",height:"3.948",rx:"1.974",transform:"translate(355.343 68.265)"}))));var $e=({size:e=48,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`},a.createElement("g",{id:"growth",transform:"translate(-74 -2679)"},a.createElement("g",{id:"Group_2414",transform:"translate(-247.76 2632.852)"},a.createElement("path",{id:"Path_1877",d:"M323.76 81.626l18.895-18.9 5.163 4.448 19.2-19.8v9.181",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"}),a.createElement("path",{id:"Line_306",fill:"none",stroke:t,strokeLinecap:"round",strokeWidth:"2px",d:"M9.727 0L0 0",transform:"translate(357.271 47.148)"}),a.createElement("path",{id:"Line_307",d:"M0 0L0 5.895",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(326.501 86.95)"}),a.createElement("path",{id:"Line_308",d:"M0 0L0 13.954",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(335.729 78.891)"}),a.createElement("path",{id:"Line_309",d:"M0 0L0 20.513",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(344.957 72.333)"}),a.createElement("path",{id:"Line_310",d:"M0 0L0 24.218",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(354.185 68.628)"}),a.createElement("path",{id:"Line_311",d:"M0 0L0 33.01",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(363.413 59.835)"}))));var Fe=({size:e=48,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`},a.createElement("g",{id:"gst-invoice",transform:"translate(-74 -2678.965)"},a.createElement("g",{id:"Group_2402",transform:"translate(53.194 2385.63)"},a.createElement("g",{id:"Group_2401"},a.createElement("path",{id:"Path_1868",d:"M48.049 322.7a2.785 2.785 0 0 0-3.008-2.344c-1.437 0-3.226.714-3.094 2.526.233 3.18 6.539 1.246 6.1 5.109-.208 1.844-2.327 2.156-2.923 2.156a3.846 3.846 0 0 1-3.784-2.936",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"}),a.createElement("path",{id:"Line_305",d:"M0 0L0 15.029",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(45.089 317.837)"})),a.createElement("path",{id:"Path_1869",d:"M65.56 296.358l-1.485-.835-1.554-.858a2.333 2.333 0 0 0-2.273 0l-1.879 1.067a2.378 2.378 0 0 1-2.3 0l-1.9-1.067a2.291 2.291 0 0 0-2.251 0l-1.9 1.067a2.289 2.289 0 0 1-2.25 0l-1.925-1.067a2.333 2.333 0 0 0-2.273 0l-1.9 1.067a2.335 2.335 0 0 1-2.274 0l-1.9-1.067a2.289 2.289 0 0 0-2.25 0l-1.948 1.067a2.246 2.246 0 0 1-2.227 0l-1.972-1.067a2.246 2.246 0 0 0-2.227 0l-1.484.812-1.578.881.047 41.913 3.038 1.694a2.289 2.289 0 0 0 2.25 0l1.9-1.067a2.372 2.372 0 0 1 2.3 0l1.9 1.067a2.289 2.289 0 0 0 2.25 0l1.9-1.067a2.284 2.284 0 0 1 2.25 0l1.926 1.067a2.289 2.289 0 0 0 2.25 0l1.925-1.067a2.328 2.328 0 0 1 2.273 0l1.9 1.067a2.291 2.291 0 0 0 2.251 0l1.948-1.067a2.241 2.241 0 0 1 2.227 0l1.971 1.067a2.246 2.246 0 0 0 2.227 0l3.039-1.67-.023-.024z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"}),a.createElement("text",{id:"GST",fontSize:"14.452px",fontWeight:"500",transform:"translate(29.791 310.98)",fill:t},a.createElement("tspan",{x:"0",y:"0"},"GST")))));var Pe=({size:e=48,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`},a.createElement("g",{id:"support",transform:"translate(-74 -2679)"},a.createElement("g",{id:"Group_2425",transform:"translate(-189.301 2583.382)"},a.createElement("path",{id:"Path_1879",d:"M299.956 115.928a17.337 17.337 0 0 1-26.14 14.927l-8.445 2.331 2.33-8.445a17.327 17.327 0 1 1 32.255-8.813z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"}),a.createElement("path",{id:"Path_1880",d:"M282.585 133.277a12.965 12.965 0 0 0 18.147 5.309l6.315 1.742-1.742-6.315a12.954 12.954 0 0 0-5.32-18.142",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"}),a.createElement("g",{id:"Group_2424"},a.createElement("g",{id:"Group_2422"},a.createElement("path",{id:"Path_1881",d:"M282.513 120.314a1.116 1.116 0 0 1-1.113-1.114v-.342a3.37 3.37 0 0 1 1.093-2.481l1.965-1.8a2.9 2.9 0 0 0 .866-2.786 2.835 2.835 0 0 0-1.964-2.1 3.033 3.033 0 0 0-.845-.121 2.883 2.883 0 0 0-2.726 1.947 1.106 1.106 0 0 1-1.941.244 1.155 1.155 0 0 1-.136-1.059 5.131 5.131 0 0 1 4.8-3.362 5.406 5.406 0 0 1 1.155.127 5.013 5.013 0 0 1 3.092 2.139 5.125 5.125 0 0 1-.8 6.615l-1.713 1.568a1.914 1.914 0 0 0-.621 1.409 1.116 1.116 0 0 1-1.112 1.116z"})),a.createElement("g",{id:"Group_2423"},a.createElement("path",{id:"Path_1882",d:"M282.513 125.641a1.114 1.114 0 1 1 1.114-1.114 1.116 1.116 0 0 1-1.114 1.114z"}))))));var xe=({size:e=48,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`},a.createElement("g",{id:"multiple-users",transform:"translate(-73 -2679)"},a.createElement("g",{id:"Group_2438",transform:"translate(-246.537 2632.977)"},a.createElement("circle",{id:"Ellipse_370",cx:"16.567",cy:"16.567",r:"16.567",fill:"none",stroke:t,strokeWidth:"2px",transform:"translate(321.537 59.534)"}),a.createElement("path",{id:"Path_1889",d:"M342.455 60.1c-.02-.289-.031-.581-.031-.875a12.2 12.2 0 1 1 12.2 12.2q-.318 0-.632-.017",stroke:t,fill:"none",strokeWidth:"2px",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("g",{id:"Group_2437"},a.createElement("path",{id:"Path_1890",d:"M354.656 52.587a4.33 4.33 0 1 0 4.351 4.337 4.339 4.339 0 0 0-4.351-4.337z",strokeWidth:"2px",fill:"none",stroke:t}),a.createElement("path",{id:"Path_1891",d:"M359.007 56.924a4.336 4.336 0 1 1-4.351-4.337 4.343 4.343 0 0 1 4.351 4.337z",strokeLinecap:"round",fill:"none",stroke:t,strokeWidth:"2px"})),a.createElement("path",{id:"Path_1892",d:"M349.327 63.916a9.209 9.209 0 0 1 13.824 3.913",fill:"none",stroke:t,strokeWidth:"2px"}),a.createElement("rect",{id:"Rectangle_1244",width:"18.202",height:"13.652",fill:"none",stroke:t,strokeWidth:"2px",strokeMiterlimit:10,rx:"2.735",transform:"translate(328.993 70.204)"}),a.createElement("path",{id:"Path_1893",d:"M334.441 69.676v-1.17a1.389 1.389 0 0 1 1.389-1.389h4.57a1.389 1.389 0 0 1 1.389 1.389v1.17",fill:"none",stroke:t,strokeWidth:"2px",strokeMiterlimit:10}),a.createElement("path",{id:"Path_1894",d:"M329.012 76.073c6.537 3.7 14.471 2.285 18.2.465",fill:"none",stroke:t,strokeWidth:"2px",strokeMiterlimit:10}),a.createElement("circle",{id:"Ellipse_371",cx:"1.17",cy:"1.17",r:"1.17",transform:"translate(337.196 73.396)"}))));var ke=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:e,width:e,viewBox:"0 0 20 20",color:t,fill:"currentColor",stroke:"currentColor",strokeWidth:"0"},a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("path",{d:"M15.38,8a2.25,2.25,0,1,0-2.26-2.25A2.24,2.24,0,0,0,15.38,8Zm0-3.5a1.25,1.25,0,1,1-1.26,1.25A1.25,1.25,0,0,1,15.38,4.5Z"}),a.createElement("path",{d:"M15.38,9.62a3.12,3.12,0,0,0-1.92.66,4.89,4.89,0,0,0-8.42,0,3.12,3.12,0,0,0-5,2.47V14.5a.5.5,0,0,0,.5.5H18a.5.5,0,0,0,.5-.5V12.75A3.13,3.13,0,0,0,15.38,9.62Zm-11,3.13V14H1V12.75a2.13,2.13,0,0,1,3.62-1.52A4.88,4.88,0,0,0,4.38,12.75ZM13.12,14H5.38V12.75a3.86,3.86,0,0,1,.27-1.43v0a3.89,3.89,0,0,1,7.2,0v0a3.86,3.86,0,0,1,.27,1.43Zm4.38,0H14.12V12.75a4.88,4.88,0,0,0-.24-1.52,2.13,2.13,0,0,1,3.62,1.52Z"}),a.createElement("path",{d:"M3.12,8A2.25,2.25,0,1,0,.88,5.75,2.26,2.26,0,0,0,3.12,8Zm0-3.5A1.25,1.25,0,1,1,1.88,5.75,1.26,1.26,0,0,1,3.12,4.5Z"}),a.createElement("path",{d:"M9.25,6.25A3.13,3.13,0,1,0,6.12,3.12,3.13,3.13,0,0,0,9.25,6.25ZM9.25,1A2.13,2.13,0,1,1,7.12,3.12,2.13,2.13,0,0,1,9.25,1Z"}))));var Te=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 16 16"},a.createElement("g",{id:"plus-square-outline",transform:"translate(-.266 .217)"},a.createElement("g",{id:"Rectangle_1143",fill:"rgba(255,255,255,0)",stroke:t,transform:"translate(.266 -.217)"},a.createElement("rect",{width:"16",height:"16",stroke:"none",rx:"3"}),a.createElement("rect",{width:"15",height:"15",x:".5",y:".5",fill:"none",rx:"2.5"})),a.createElement("g",{id:"Group_588",transform:"translate(5.264 4.783)"},a.createElement("path",{id:"Line_109",d:"M0 0L0 6",stroke:t,fill:"none",strokeLinecap:"round",transform:"translate(3)"}),a.createElement("path",{id:"Line_110",d:"M0 0L0 6",stroke:t,fill:"none",strokeLinecap:"round",transform:"rotate(90 1.5 4.5)"}))));var we=({size:e=48,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`},a.createElement("g",{id:"proforma",transform:"translate(-74 -2678.965)"},a.createElement("g",{id:"Group_2399",transform:"translate(28.178 2357.498)"},a.createElement("g",{id:"Group_2398",transform:"translate(64.643 333.003)"},a.createElement("path",{id:"Path_1866",d:"M67.674 333.447c-.281-2.354-2.313-3.82-4.9-3.82-2.34 0-5.255 1.165-5.04 4.115.379 5.181 10.654 2.03 9.943 8.323-.34 3.006-3.791 3.514-4.763 3.514a6.271 6.271 0 0 1-6.166-4.784",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(-56.745 -325.519)"}),a.createElement("path",{id:"Line_304",d:"M0 0L0 24.486",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(6.106)"})),a.createElement("path",{id:"Path_1867",d:"M91 326.949c0-.092-.023-.209-.023-.3v-2.157l-1.484-.837-1.553-.855a2.337 2.337 0 0 0-2.274 0l-1.878 1.066a2.369 2.369 0 0 1-2.3 0l-1.9-1.066a2.29 2.29 0 0 0-2.249 0l-1.9 1.066a2.279 2.279 0 0 1-2.249 0l-1.928-1.066a2.337 2.337 0 0 0-2.274 0l-1.9 1.066a2.326 2.326 0 0 1-2.274 0l-1.9-1.066a2.289 2.289 0 0 0-2.249 0l-1.948 1.066a2.236 2.236 0 0 1-2.227 0l-1.976-1.066a2.247 2.247 0 0 0-2.227 0l-1.485.812-1.577.882v3.687h.045v38.228l3.04 1.691a2.293 2.293 0 0 0 2.251 0l1.9-1.068a2.38 2.38 0 0 1 2.3 0l1.9 1.068a2.29 2.29 0 0 0 2.249 0l1.9-1.068a2.29 2.29 0 0 1 2.249 0l1.925 1.068a2.294 2.294 0 0 0 2.251 0l1.925-1.068a2.333 2.333 0 0 1 2.272 0l1.9 1.068a2.289 2.289 0 0 0 2.249 0l1.95-1.068a2.247 2.247 0 0 1 2.227 0l1.97 1.068a2.247 2.247 0 0 0 2.227 0L91 366.428l.025-.023v-39.363a.132.132 0 0 0-.025-.093z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"}))));var Le=({size:e=48,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`},a.createElement("g",{id:"Purchase-order",transform:"translate(-74 -2679)"},a.createElement("g",{id:"Group_2407"},a.createElement("g",{id:"Group_2405",transform:"translate(-113.598 2633.134)"},a.createElement("path",{id:"Path_1864",d:"M231.4 72.419V53.136a6.27 6.27 0 0 0-6.268-6.27h-29.26a6.269 6.269 0 0 0-6.27 6.268v33.441a6.268 6.268 0 0 0 6.268 6.27h29.261a6.269 6.269 0 0 0 6.27-6.268V72.419z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"}),a.createElement("g",{id:"Group_2404"},a.createElement("path",{id:"Path_1870",d:"M198.263 57.259h3.149l3.149 12.6-1.676 1.677a2.707 2.707 0 0 0 1.914 4.621h13.933",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"}),a.createElement("path",{id:"Path_1871",d:"M201.843 58.834h19.312a1.575 1.575 0 0 1 1.4 2.286l-4.78 9.447a1.576 1.576 0 0 1-1.4.864H203l1.594-1.594z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"}),a.createElement("circle",{id:"Ellipse_366",cx:"1.575",cy:"1.575",r:"1.575",transform:"translate(204.561 79.303)"}),a.createElement("circle",{id:"Ellipse_367",cx:"1.575",cy:"1.575",r:"1.575",transform:"translate(215.104 79.303)"}))))));var Ae=({size:e=48,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`},a.createElement("g",{id:"quotation",transform:"translate(-74 -2678.936)"},a.createElement("g",{id:"Group_2395",transform:"translate(-2.689 2322.602)"},a.createElement("path",{id:"Path_1864",d:"M119.52 382.883V363.6a6.269 6.269 0 0 0-6.27-6.27H83.992a6.269 6.269 0 0 0-6.27 6.27v33.439a6.269 6.269 0 0 0 6.27 6.27h29.259a6.269 6.269 0 0 0 6.27-6.27z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"}),a.createElement("path",{id:"Line_301",d:"M0 0L26.079 0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(85.436 368.917)"}),a.createElement("path",{id:"Line_302",d:"M0 0L13.185 0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(85.436 377.208)"}),a.createElement("path",{id:"Path_1865",d:"M98.763 371.412a3.585 3.585 0 0 0-3.871-3.016c-1.85 0-4.153.92-3.981 3.25.3 4.092 8.412 1.6 7.852 6.573-.27 2.374-2.995 2.775-3.762 2.775a4.952 4.952 0 0 1-4.87-3.779",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(13.526 12.057)"}),a.createElement("path",{id:"Line_303",d:"M0 0L0 19.337",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(108.48 377.208)"}))));var Re=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:e,width:e,viewBox:"0 0 20 20",color:t,fill:"currentColor",stroke:"currentColor",strokeWidth:"0"},a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("path",{d:"M13.7,1.53H12.5A2.24,2.24,0,0,0,10.38,0H6.75A2.25,2.25,0,0,0,4.63,1.53H3.29A3.36,3.36,0,0,0,0,4.94V16.45a3.37,3.37,0,0,0,3.29,3.41H13.71A3.37,3.37,0,0,0,17,16.44V4.94A3.36,3.36,0,0,0,13.7,1.53ZM6.75,1h3.63a1.25,1.25,0,0,1,0,2.5H6.75a1.25,1.25,0,0,1,0-2.5ZM16,16.44a2.37,2.37,0,0,1-2.29,2.42H3.29A2.37,2.37,0,0,1,1,16.44V5A2.37,2.37,0,0,1,3.29,2.53H4.53a2.25,2.25,0,0,0,2.22,2h3.63a2.23,2.23,0,0,0,2.22-2h1.11A2.36,2.36,0,0,1,16,4.94Z"}),a.createElement("path",{d:"M12.14,8.06,7.2,13.26,4.94,10.87a.49.49,0,0,0-.7,0,.48.48,0,0,0,0,.7l2.62,2.78a.52.52,0,0,0,.36.16h0a.52.52,0,0,0,.36-.16l5.31-5.59a.5.5,0,0,0-.73-.68Z"}))));var Ne=({size:e=48,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`},a.createElement("g",null,a.createElement("g",null,a.createElement("path",{fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",d:"M332.11 50.137a22.871 22.871 0 0 1 31.384 7.824 22.871 22.871 0 0 1-7.825 31.384 22.87 22.87 0 0 1-31.383-7.825 22.87 22.87 0 0 1 7.824-31.383z",transform:"translate(-73.948 -2678.948) translate(-246.015 2633.134)"}),a.createElement("path",{d:"M347.963 84.631a1.148 1.148 0 0 1-.8-.321l-11.6-11.6a1.153 1.153 0 0 1 .816-1.967h5.8a4.65 4.65 0 0 0 4.369-3.1l.141-.4h-10.313a1.151 1.151 0 0 1 0-2.3h10.312l-.14-.4a4.65 4.65 0 0 0-4.368-3.1h-5.8a1.152 1.152 0 0 1 0-2.3h14.509a1.155 1.155 0 0 1 1.148 1.149 1.152 1.152 0 0 1-1.148 1.155h-3.55l.373.483a6.918 6.918 0 0 1 1.284 2.781l.05.238h1.843a1.153 1.153 0 0 1 1.145 1.146 1.152 1.152 0 0 1-1.146 1.156h-1.843l-.05.24a6.992 6.992 0 0 1-6.813 5.564h-3.025l9.645 9.644a1.152 1.152 0 0 1-.836 1.945z",transform:"translate(-73.948 -2678.948) translate(-246.015 2633.134)",fill:t}))));var De=({size:e=48,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`},a.createElement("g",{id:"bulid-brand",transform:"translate(-73 -2679)"},a.createElement("g",{id:"Group_2421",transform:"translate(-190.301 2633.134)"},a.createElement("g",{id:"Layer_1"},a.createElement("path",{id:"Path_1864",d:"M307.1 72.419V53.136a6.27 6.27 0 0 0-6.268-6.27h-29.26a6.269 6.269 0 0 0-6.27 6.268v33.441a6.268 6.268 0 0 0 6.268 6.27h29.26a6.269 6.269 0 0 0 6.27-6.268V72.419z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"})),a.createElement("g",{id:"Layer_2"},a.createElement("path",{id:"Path_1888",d:"M319.781 17.63l2.424 7.457a.567.567 0 0 0 .541.394h7.84a.568.568 0 0 1 .335 1.028l-6.343 4.609a.569.569 0 0 0-.207.635l2.424 7.458a.569.569 0 0 1-.875.636l-6.345-4.609a.567.567 0 0 0-.669 0l-6.343 4.609a.569.569 0 0 1-.875-.636l2.423-7.458a.567.567 0 0 0-.206-.635l-6.343-4.609a.568.568 0 0 1 .334-1.028h7.841a.569.569 0 0 0 .541-.394l2.422-7.457a.568.568 0 0 1 1.081 0z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(-33.194 40.515)"})))));var Ie=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 16 16"},a.createElement("g",null,a.createElement("g",{fill:"none",stroke:t},a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.882 10.52l-5.354 5.354a1.493 1.493 0 0 1-2.113 0L2 9.467V2h7.467l6.414 6.414a1.493 1.493 0 0 1 .001 2.106z",transform:"translate(-1.996 -1) translate(.852 -.146)"}),a.createElement("g",{transform:"translate(-1.996 -1) translate(.852 -.146) translate(4.145 4.146)"},a.createElement("circle",{cx:"2",cy:"2",r:"2",stroke:"none"}),a.createElement("circle",{cx:"2",cy:"2",r:"1.5"})))));var Me=({size:e=48,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`},a.createElement("g",{id:"track-invoices",transform:"translate(-74 -2678.968)"},a.createElement("g",{id:"Group_2428",transform:"translate(-247.107 2633.089)"},a.createElement("g",{id:"Group_2399"},a.createElement("g",{id:"Group_2398"},a.createElement("path",{id:"Path_1866",d:"M339.1 70.585c-.244-2.04-2.005-3.31-4.246-3.31-2.028 0-4.554 1.01-4.368 3.566.329 4.49 9.232 1.759 8.616 7.212-.294 2.6-3.285 3.045-4.127 3.045a5.432 5.432 0 0 1-5.343-4.145",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"}),a.createElement("path",{id:"Line_304",d:"M0 0L0 21.218",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(334.924 63.715)"})),a.createElement("path",{id:"Path_1867",d:"M348.986 48.428a2.282 2.282 0 0 1-1.914-.156l-1.928-1.066a2.335 2.335 0 0 0-2.274 0l-1.9 1.066a2.325 2.325 0 0 1-2.274 0l-1.9-1.066a2.287 2.287 0 0 0-2.249 0l-1.947 1.066a2.236 2.236 0 0 1-2.227 0l-1.973-1.066a2.246 2.246 0 0 0-2.227 0l-1.485.812-1.577.882v3.687h.045v38.228l3.04 1.691a2.291 2.291 0 0 0 2.251 0l1.9-1.068a2.38 2.38 0 0 1 2.3 0l1.9 1.068a2.292 2.292 0 0 0 2.249 0l1.9-1.068a2.292 2.292 0 0 1 2.249 0l1.925 1.068a2.3 2.3 0 0 0 2.251 0l1.925-1.068a2.331 2.331 0 0 1 2.272 0l1.9 1.068a2.287 2.287 0 0 0 2.249 0l1.95-1.068a2.246 2.246 0 0 1 2.227 0l1.97 1.068a2.246 2.246 0 0 0 2.227 0l3.045-1.672.025-.023V65.453",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"})),a.createElement("g",{id:"Group_2427"},a.createElement("circle",{id:"Ellipse_368",cx:"11.991",cy:"11.991",r:"11.991",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(342.873 46.911)"}),a.createElement("path",{id:"Path_1885",d:"M354.864 52.285v7.178l5.252 5.252",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"})))));var Be=({size:e=48,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`},a.createElement("g",{id:"bulk-upload",transform:"translate(-74 -2679)"},a.createElement("g",{id:"Group_2431",transform:"translate(-245.461 2632.626)"},a.createElement("path",{id:"Path_1886",d:"M362.4 70.1V58.6l-11.23-11.226h-22.438a7.271 7.271 0 0 0-7.271 7.271v30.494a7.271 7.271 0 0 0 7.271 7.272h25.031",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"}),a.createElement("path",{id:"Line_312",d:"M0 0L22.934 0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(329.334 58.308)"}),a.createElement("path",{id:"Line_313",d:"M0 0L10.431 0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(329.334 67.819)"}),a.createElement("path",{id:"Line_314",d:"M0 0L5.893 0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(329.334 77.331)"}),a.createElement("g",{id:"Group_2430"},a.createElement("path",{id:"Path_1887",d:"M358.19 78.38l-4.449-4.449-4.406 4.406",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"}),a.createElement("path",{id:"Line_315",d:"M0 0L0 11.766",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(353.741 73.931)"})),a.createElement("circle",{id:"Ellipse_369",cx:"12.829",cy:"12.829",r:"12.829",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px",transform:"translate(340.934 66.753)"}))));var qe=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:e,width:e,viewBox:"0 0 18 16",color:t,fill:"currentColor",stroke:"currentColor",strokeWidth:"0.5"},a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("path",{d:"M10.44,3.54A3.54,3.54,0,0,0,8.24.27l-.07,0A3,3,0,0,0,7.59.07c-.11,0-.22,0-.33,0A2.2,2.2,0,0,0,6.9,0h0a3.53,3.53,0,0,0-2,6.4A7,7,0,0,0,0,12.08a1,1,0,0,0,0,.17,1.27,1.27,0,0,0,1.27,1.28H5.49A.5.5,0,0,0,6,13a.5.5,0,0,0-.5-.5H1.27A.28.28,0,0,1,1,12.22,6,6,0,0,1,6.9,7.07h0A3.54,3.54,0,0,0,10.44,3.54ZM7.24,1h.15a2.53,2.53,0,0,1-.5,5h0A2.73,2.73,0,0,1,6.39,6a2.54,2.54,0,0,1,.5-5A2,2,0,0,1,7.24,1Z"}),a.createElement("path",{d:"M13.49,9.84H11.31V7.65a.5.5,0,0,0-.5-.5.5.5,0,0,0-.5.5V9.84H8.12a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h2.19V13a.5.5,0,0,0,.5.5.51.51,0,0,0,.5-.5V10.84h2.18a.5.5,0,0,0,.5-.5A.5.5,0,0,0,13.49,9.84Z"})));var Oe=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24"},a.createElement("g",{id:"prefix__play-button",transform:"translate(-594 -336)"},a.createElement("g",{id:"prefix__Ellipse_287",fill:"none",stroke:t,"data-name":"Ellipse 287",transform:"translate(577 320)"},a.createElement("circle",{cx:"29.5",cy:"29.5",r:"29.5",stroke:"none"}),a.createElement("circle",{cx:"29.5",cy:"29.5",r:"29"})),a.createElement("path",{id:"prefix__Polygon_1",fill:t,d:"M9.335 3.01a2 2 0 0 1 3.466 0l7.609 13.216a2 2 0 0 1-1.733 3H3.459a2 2 0 0 1-1.733-3z","data-name":"Polygon 1",transform:"rotate(-30 936.76 -929.296)"})));var _e=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 18 18"},a.createElement("g",{id:"portfolio",transform:"rotate(180 9 9)"},a.createElement("rect",{id:"Rectangle_582",width:"8.2",height:"10",className:"cls-1","data-name":"Rectangle 582",fill:t,rx:"2"}),a.createElement("rect",{id:"Rectangle_584",width:"8",height:"9.8",className:"cls-1","data-name":"Rectangle 584",rx:"2",fill:t,transform:"translate(10 8.2)"}),a.createElement("rect",{id:"Rectangle_585",width:"8.2",height:"6",className:"cls-1","data-name":"Rectangle 585",rx:"2",fill:t,transform:"translate(0 12)"}),a.createElement("rect",{id:"Rectangle_583",width:"8",height:"6.2",className:"cls-1","data-name":"Rectangle 583",rx:"2",fill:t,transform:"translate(10)"})));var ze=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 18.03 19.78"},a.createElement("path",{id:"proforma-invoice",d:"M413.022,324.441V323.4l-1.31-.73a.986.986,0,0,0-.97,0l-.82.46a1,1,0,0,1-.98,0l-.82-.46a1,1,0,0,0-.98,0l-.82.46a.986.986,0,0,1-.97,0l-.83-.46a.986.986,0,0,0-.97,0l-.83.46a.986.986,0,0,1-.97,0l-.83-.46a.986.986,0,0,0-.97,0l-.83.46a.986.986,0,0,1-.97,0l-.84-.46a.986.986,0,0,0-.97,0l-1.32.73v1.585h.03v16.48l1.31.73a.986.986,0,0,0,.97,0l.82-.46a1,1,0,0,1,.98,0l.82.46a1,1,0,0,0,.98,0l.82-.46a.986.986,0,0,1,.97,0l.83.46a.986.986,0,0,0,.97,0l.83-.46a.986.986,0,0,1,.97,0l.83.46a.986.986,0,0,0,.97,0l.83-.46a.986.986,0,0,1,.97,0l.84.46a.986.986,0,0,0,.97,0l1.32-.73V324.5C413.052,324.48,413.034,324.461,413.022,324.441Zm-8.12,11.981v1.31h-1.37v-1.29a2.869,2.869,0,0,1-2.55-2.5l1.66-.37a1.416,1.416,0,0,0,1.57,1.31c.6,0,1.03-.28,1.03-.75,0-.35-.26-.58-.74-.68l-1.07-.26c-1.34-.32-2.17-1.14-2.17-2.28a2.551,2.551,0,0,1,2.27-2.48v-1.29h1.37v1.33a2.609,2.609,0,0,1,2.09,2.05l-1.67.44a1.1,1.1,0,0,0-1.22-.99c-.67,0-1.01.39-1.01.78,0,.32.24.57.71.68l1.04.23c1.61.36,2.25,1.29,2.25,2.37A2.465,2.465,0,0,1,404.9,336.422Z",transform:"translate(-395.022 -322.547)",fill:t}));var He=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 28 28"},a.createElement("g",{id:"quotations",transform:"translate(-18 -17)"},a.createElement("rect",{id:"Rectangle_916","data-name":"Rectangle 916",width:"28",height:"28",transform:"translate(18 17)",fill:"#fff",opacity:"0"}),a.createElement("path",{id:"quotations-2","data-name":"quotations",d:"M373.45,345.1h-16.9a4.5,4.5,0,0,0-4.55,4.455v19.091a4.5,4.5,0,0,0,4.55,4.454h16.9a4.5,4.5,0,0,0,4.55-4.454V349.555A4.5,4.5,0,0,0,373.45,345.1Zm-15.672,5.515h14.444a1.414,1.414,0,1,1,0,2.828H357.778a1.414,1.414,0,1,1,0-2.828Zm13.3,16.475V368.6h-1.632v-1.485a3.373,3.373,0,0,1-3-2.9l1.964-.438a1.653,1.653,0,0,0,1.849,1.527c.708,0,1.228-.325,1.228-.877,0-.4-.318-.665-.881-.792l-1.271-.283c-1.589-.382-2.557-1.329-2.557-2.644a2.966,2.966,0,0,1,2.672-2.871v-1.5h1.632v1.541a3.044,3.044,0,0,1,2.47,2.376l-1.965.509a1.315,1.315,0,0,0-1.459-1.145c-.794,0-1.184.453-1.184.891,0,.382.289.679.838.792l1.228.269c1.907.424,2.658,1.5,2.658,2.758A2.886,2.886,0,0,1,371.081,367.09Zm-8.97-6.576h-4.333a1.414,1.414,0,1,1,0-2.828h4.333a1.414,1.414,0,1,1,0,2.828Z",transform:"translate(-333 -328.1)",fill:t})));var We=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 15.208 15"},a.createElement("g",{id:"refer",transform:"translate(0.502 0.5)"},a.createElement("g",{id:"Group_3464","data-name":"Group 3464",transform:"translate(3.66)"},a.createElement("path",{id:"Path_2137","data-name":"Path 2137",d:"M607.677,54.352a3.394,3.394,0,1,0,3.323,3.4A3.359,3.359,0,0,0,607.677,54.352Z",transform:"translate(-604.377 -54.352)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1"}),a.createElement("path",{id:"Path_2138","data-name":"Path 2138",d:"M611,57.751a3.313,3.313,0,1,1-3.323-3.4A3.36,3.36,0,0,1,611,57.751Z",transform:"translate(-604.377 -54.352)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1"})),a.createElement("path",{id:"Path_2139","data-name":"Path 2139",d:"M601.021,77.452h-4.6a.852.852,0,0,1-.826-.978,7.093,7.093,0,0,1,6.964-6.236",transform:"translate(-595.583 -63.452)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1"}),a.createElement("path",{id:"Path_2140","data-name":"Path 2140",d:"M619.283,70.531l2.154,1.9h-2.952a2.632,2.632,0,0,0-2.6,2.666V77.62",transform:"translate(-607.437 -63.62)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1"}),a.createElement("line",{id:"Line_361","data-name":"Line 361",y1:"2.051",x2:"2.154",transform:"translate(11.846 8.811)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1"})));var Ve=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 18.235 20.319"},a.createElement("g",null,a.createElement("g",null,a.createElement("path",{fill:t,fillRule:"evenodd",d:"M154.313 227.844l.52-.458-3.728-4.537v7.769zm1.622 3.561l-8.382 7.247v-20.3l3.982 4.553-.43-.059 3.728 4.537.344-.314 10.143 11.6-1.544-1.2-7.84-6.07zm3.373-3.037l5.031 8.622.98 1.681-10.143-11.6.428-.391 2.3-2.068c.409-.373.069-.839-.393-.877l-5.973-.828-3.982-4.553 16.728 2.317c1.206.1 2.094 1.319 1.026 2.292z",transform:"translate(0 .004) translate(-147.553 -218.356)"}))));var je=({size:e})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:4*e,height:e,viewBox:"0 0 79.118 20.319"},a.createElement("g",{id:"refrens_purple",transform:"translate(0 0.004)"},a.createElement("g",{id:"Group_1419","data-name":"Group 1419"},a.createElement("path",{id:"Path_423","data-name":"Path 423",d:"M154.313,227.844l.52-.458-3.728-4.537v7.769Zm1.622,3.561-8.382,7.247v-20.3l3.982,4.553-.43-.059,3.728,4.537.344-.314,10.143,11.6-1.544-1.2-7.84-6.07Zm3.373-3.037,5.031,8.622.98,1.681-10.143-11.6.428-.391,2.3-2.068c.409-.373.069-.839-.393-.877l-5.973-.828-3.982-4.553,16.728,2.317c1.206.1,2.094,1.319,1.026,2.292Z",transform:"translate(-147.553 -218.356)",fill:"#733dd9",fillRule:"evenodd"}),a.createElement("path",{id:"Path_426","data-name":"Path 426",d:"M205.162,230.794h2.383a14.236,14.236,0,0,1,2.7.166,3.011,3.011,0,0,1,2.4,3.05,3.227,3.227,0,0,1-.46,1.733,2.859,2.859,0,0,1-1.313,1.132,5.963,5.963,0,0,1-2.358.39l4.3,5.629h-1.466l-4.3-5.629h-.687v5.629h-1.2v-12.1Zm1.2,1.18v4.112l2.061.017a5.048,5.048,0,0,0,1.773-.23,1.869,1.869,0,0,0,.9-.736,2.074,2.074,0,0,0,.321-1.132,1.969,1.969,0,0,0-.327-1.106,1.816,1.816,0,0,0-.856-.711,5.131,5.131,0,0,0-1.759-.213Zm16.1,7.953.959.511a5.294,5.294,0,0,1-1.092,1.5,4.37,4.37,0,0,1-1.391.871,4.835,4.835,0,0,1-1.751.3,4.213,4.213,0,0,1-3.388-1.432,4.853,4.853,0,0,1-1.222-3.236,4.8,4.8,0,0,1,1.036-3.027,4.217,4.217,0,0,1,3.511-1.691,4.357,4.357,0,0,1,3.618,1.733,4.862,4.862,0,0,1,.978,3.053h-7.979a3.641,3.641,0,0,0,.986,2.545,3.142,3.142,0,0,0,2.358.994,3.79,3.79,0,0,0,1.319-.236,3.447,3.447,0,0,0,1.089-.626,5.275,5.275,0,0,0,.969-1.261Zm.011-2.41a3.837,3.837,0,0,0-.665-1.471,3.176,3.176,0,0,0-1.158-.888,3.525,3.525,0,0,0-1.51-.337,3.237,3.237,0,0,0-2.247.845,3.834,3.834,0,0,0-1.039,1.851Zm7-7.016v1.121a2.783,2.783,0,0,0-1.078-.272,1.053,1.053,0,0,0-.557.135.586.586,0,0,0-.277.312,4.287,4.287,0,0,0-.058.941v1.207h1.853v.994H227.49l-.005,7.954h-1.131v-7.954H225.19v-.994h1.164v-1.393a3.812,3.812,0,0,1,.175-1.37,1.4,1.4,0,0,1,.6-.66,1.939,1.939,0,0,1,1.011-.25,4.745,4.745,0,0,1,1.327.23Zm1.13,3.443h1.164v1.309a4.034,4.034,0,0,1,1.1-1.151,2.181,2.181,0,0,1,1.2-.376,2.06,2.06,0,0,1,1.009.3l-.593.966a1.572,1.572,0,0,0-.6-.157,1.635,1.635,0,0,0-1.1.472,3.015,3.015,0,0,0-.806,1.469,14.2,14.2,0,0,0-.211,3.089v3.025H230.6v-8.948Zm12.886,5.982.959.511a5.294,5.294,0,0,1-1.092,1.505,4.37,4.37,0,0,1-1.391.871,4.834,4.834,0,0,1-1.751.3,4.212,4.212,0,0,1-3.388-1.432,4.853,4.853,0,0,1-1.222-3.236,4.8,4.8,0,0,1,1.036-3.027,4.217,4.217,0,0,1,3.51-1.691,4.358,4.358,0,0,1,3.618,1.733,4.862,4.862,0,0,1,.978,3.053h-7.979a3.641,3.641,0,0,0,.986,2.545,3.142,3.142,0,0,0,2.358.994,3.788,3.788,0,0,0,1.319-.236,3.448,3.448,0,0,0,1.089-.626,5.271,5.271,0,0,0,.969-1.261Zm.012-2.41a3.838,3.838,0,0,0-.665-1.471,3.174,3.174,0,0,0-1.158-.888,3.525,3.525,0,0,0-1.51-.337,3.237,3.237,0,0,0-2.247.845,3.834,3.834,0,0,0-1.039,1.851Zm3.338-3.572h1.13v1.6a4.763,4.763,0,0,1,1.513-1.37,3.726,3.726,0,0,1,1.806-.452,3.115,3.115,0,0,1,1.762.508,3.029,3.029,0,0,1,1.136,1.373,7.3,7.3,0,0,1,.366,2.685v4.6h-1.13v-4.263a10.431,10.431,0,0,0-.13-2.062,2.325,2.325,0,0,0-.768-1.334,2.278,2.278,0,0,0-1.463-.447,2.783,2.783,0,0,0-1.85.691,3.207,3.207,0,0,0-1.078,1.707,12,12,0,0,0-.163,2.429v3.277h-1.13v-8.948Zm14.593.972-.731.764a2.617,2.617,0,0,0-1.782-.893,1.337,1.337,0,0,0-.947.371,1.146,1.146,0,0,0-.4.862,1.286,1.286,0,0,0,.324.829,4.564,4.564,0,0,0,1.366.946,5.114,5.114,0,0,1,1.721,1.28,2.365,2.365,0,0,1,.446,1.4,2.54,2.54,0,0,1-.765,1.867,2.6,2.6,0,0,1-1.912.764,3.311,3.311,0,0,1-1.46-.337,3.174,3.174,0,0,1-1.15-.929l.715-.823a2.474,2.474,0,0,0,1.848.994,1.66,1.66,0,0,0,1.163-.444,1.378,1.378,0,0,0,.48-1.042,1.355,1.355,0,0,0-.316-.879,5.107,5.107,0,0,0-1.433-.952,4.564,4.564,0,0,1-1.626-1.23,2.322,2.322,0,0,1-.432-1.384,2.27,2.27,0,0,1,.687-1.688,2.4,2.4,0,0,1,1.74-.671,3.606,3.606,0,0,1,2.453,1.2Z",transform:"translate(-182.314 -225.481)",fill:"#733dd9",fillRule:"evenodd"}))));var Ge=({size:e})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:4*e,height:e,viewBox:"0 0 79.118 20.319"},a.createElement("g",{id:"refrens_white",transform:"translate(0 0.004)"},a.createElement("g",{id:"Group_1419","data-name":"Group 1419"},a.createElement("path",{id:"Path_423","data-name":"Path 423",d:"M154.313,227.844l.52-.458-3.728-4.537v7.769Zm1.622,3.561-8.382,7.247v-20.3l3.982,4.553-.43-.059,3.728,4.537.344-.314,10.143,11.6-1.544-1.2-7.84-6.07Zm3.373-3.037,5.031,8.622.98,1.681-10.143-11.6.428-.391,2.3-2.068c.409-.373.069-.839-.393-.877l-5.973-.828-3.982-4.553,16.728,2.317c1.206.1,2.094,1.319,1.026,2.292Z",transform:"translate(-147.553 -218.356)",fill:"#fff",fillRule:"evenodd"}),a.createElement("path",{id:"Path_426","data-name":"Path 426",d:"M205.162,230.794h2.383a14.236,14.236,0,0,1,2.7.166,3.011,3.011,0,0,1,2.4,3.05,3.227,3.227,0,0,1-.46,1.733,2.859,2.859,0,0,1-1.313,1.132,5.963,5.963,0,0,1-2.358.39l4.3,5.629h-1.466l-4.3-5.629h-.687v5.629h-1.2v-12.1Zm1.2,1.18v4.112l2.061.017a5.048,5.048,0,0,0,1.773-.23,1.869,1.869,0,0,0,.9-.736,2.074,2.074,0,0,0,.321-1.132,1.969,1.969,0,0,0-.327-1.106,1.816,1.816,0,0,0-.856-.711,5.131,5.131,0,0,0-1.759-.213Zm16.1,7.953.959.511a5.294,5.294,0,0,1-1.092,1.5,4.37,4.37,0,0,1-1.391.871,4.835,4.835,0,0,1-1.751.3,4.213,4.213,0,0,1-3.388-1.432,4.853,4.853,0,0,1-1.222-3.236,4.8,4.8,0,0,1,1.036-3.027,4.217,4.217,0,0,1,3.511-1.691,4.357,4.357,0,0,1,3.618,1.733,4.862,4.862,0,0,1,.978,3.053h-7.979a3.641,3.641,0,0,0,.986,2.545,3.142,3.142,0,0,0,2.358.994,3.79,3.79,0,0,0,1.319-.236,3.447,3.447,0,0,0,1.089-.626,5.275,5.275,0,0,0,.969-1.261Zm.011-2.41a3.837,3.837,0,0,0-.665-1.471,3.176,3.176,0,0,0-1.158-.888,3.525,3.525,0,0,0-1.51-.337,3.237,3.237,0,0,0-2.247.845,3.834,3.834,0,0,0-1.039,1.851Zm7-7.016v1.121a2.783,2.783,0,0,0-1.078-.272,1.053,1.053,0,0,0-.557.135.586.586,0,0,0-.277.312,4.287,4.287,0,0,0-.058.941v1.207h1.853v.994H227.49l-.005,7.954h-1.131v-7.954H225.19v-.994h1.164v-1.393a3.812,3.812,0,0,1,.175-1.37,1.4,1.4,0,0,1,.6-.66,1.939,1.939,0,0,1,1.011-.25,4.745,4.745,0,0,1,1.327.23Zm1.13,3.443h1.164v1.309a4.034,4.034,0,0,1,1.1-1.151,2.181,2.181,0,0,1,1.2-.376,2.06,2.06,0,0,1,1.009.3l-.593.966a1.572,1.572,0,0,0-.6-.157,1.635,1.635,0,0,0-1.1.472,3.015,3.015,0,0,0-.806,1.469,14.2,14.2,0,0,0-.211,3.089v3.025H230.6v-8.948Zm12.886,5.982.959.511a5.294,5.294,0,0,1-1.092,1.505,4.37,4.37,0,0,1-1.391.871,4.834,4.834,0,0,1-1.751.3,4.212,4.212,0,0,1-3.388-1.432,4.853,4.853,0,0,1-1.222-3.236,4.8,4.8,0,0,1,1.036-3.027,4.217,4.217,0,0,1,3.51-1.691,4.358,4.358,0,0,1,3.618,1.733,4.862,4.862,0,0,1,.978,3.053h-7.979a3.641,3.641,0,0,0,.986,2.545,3.142,3.142,0,0,0,2.358.994,3.788,3.788,0,0,0,1.319-.236,3.448,3.448,0,0,0,1.089-.626,5.271,5.271,0,0,0,.969-1.261Zm.012-2.41a3.838,3.838,0,0,0-.665-1.471,3.174,3.174,0,0,0-1.158-.888,3.525,3.525,0,0,0-1.51-.337,3.237,3.237,0,0,0-2.247.845,3.834,3.834,0,0,0-1.039,1.851Zm3.338-3.572h1.13v1.6a4.763,4.763,0,0,1,1.513-1.37,3.726,3.726,0,0,1,1.806-.452,3.115,3.115,0,0,1,1.762.508,3.029,3.029,0,0,1,1.136,1.373,7.3,7.3,0,0,1,.366,2.685v4.6h-1.13v-4.263a10.431,10.431,0,0,0-.13-2.062,2.325,2.325,0,0,0-.768-1.334,2.278,2.278,0,0,0-1.463-.447,2.783,2.783,0,0,0-1.85.691,3.207,3.207,0,0,0-1.078,1.707,12,12,0,0,0-.163,2.429v3.277h-1.13v-8.948Zm14.593.972-.731.764a2.617,2.617,0,0,0-1.782-.893,1.337,1.337,0,0,0-.947.371,1.146,1.146,0,0,0-.4.862,1.286,1.286,0,0,0,.324.829,4.564,4.564,0,0,0,1.366.946,5.114,5.114,0,0,1,1.721,1.28,2.365,2.365,0,0,1,.446,1.4,2.54,2.54,0,0,1-.765,1.867,2.6,2.6,0,0,1-1.912.764,3.311,3.311,0,0,1-1.46-.337,3.174,3.174,0,0,1-1.15-.929l.715-.823a2.474,2.474,0,0,0,1.848.994,1.66,1.66,0,0,0,1.163-.444,1.378,1.378,0,0,0,.48-1.042,1.355,1.355,0,0,0-.316-.879,5.107,5.107,0,0,0-1.433-.952,4.564,4.564,0,0,1-1.626-1.23,2.322,2.322,0,0,1-.432-1.384,2.27,2.27,0,0,1,.687-1.688,2.4,2.4,0,0,1,1.74-.671,3.606,3.606,0,0,1,2.453,1.2Z",transform:"translate(-182.314 -225.481)",fill:"#fff",fillRule:"evenodd"}))));var Ke=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 18 19.8"},a.createElement("g",{id:"reports",transform:"translate(-243 -289)"},a.createElement("rect",{id:"Rectangle_857",width:"18",height:"19.8",fill:t,"data-name":"Rectangle 857",rx:"3.496",transform:"translate(243 289)"}),a.createElement("rect",{id:"Rectangle_858",width:"3",height:"12.244",className:"cls-2","data-name":"Rectangle 858",rx:".949",fill:"#fff",transform:"translate(255.025 293.776)"}),a.createElement("rect",{id:"Rectangle_859",width:"3",height:"7.5",className:"cls-2","data-name":"Rectangle 859",fill:"#fff",rx:".949",transform:"translate(250.5 298.22)"}),a.createElement("rect",{id:"Rectangle_860",width:"3",height:"3.333",fill:"#fff",className:"cls-2","data-name":"Rectangle 860",rx:".949",transform:"translate(246.088 302.526)"})));var Ze=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 18 21.6"},a.createElement("g",{id:"requirements",transform:"translate(-275 -342)"},a.createElement("path",{id:"Path_1662",d:"M283 346h4a2 2 0 0 0 0-4h-4a2 2 0 0 0 0 4z",className:"cls-1","data-name":"Path 1662",transform:"translate(-1)",fill:t}),a.createElement("path",{id:"Path_1663",d:"M289.85 344h-.639a3.4 3.4 0 0 1-3.411 3.377h-3.6a3.4 3.4 0 0 1-3.411-3.377h-.639a3.138 3.138 0 0 0-3.15 3.118v13.364a3.138 3.138 0 0 0 3.15 3.118h11.7a3.138 3.138 0 0 0 3.15-3.118v-13.364a3.138 3.138 0 0 0-3.15-3.118zm-.714 8.648l-5.146 5.094a1.269 1.269 0 0 1-1.78 0l-2.446-2.421a.884.884 0 0 1 0-1.26.905.905 0 0 1 1.273 0l2.063 2.039 4.764-4.716a.905.905 0 0 1 1.273 0 .884.884 0 0 1-.001 1.264z",className:"cls-1",fill:t,"data-name":"Path 1663"})));var Ue=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:e,width:e,viewBox:"0 0 12 12",color:t,fill:"currentColor",stroke:"currentColor",strokeWidth:"0.5"},a.createElement("g",null,a.createElement("path",{d:"M11.8,5c-0.3-1.4-1.2-2.5-2.4-3.2C8.2,1,6.8,0.8,5.4,1.2S2.9,2.4,2.2,3.6C1.9,4,1.7,4.5,1.6,5L1,3.9\n        C0.8,3.7,0.5,3.6,0.3,3.7C0.1,3.8,0,4.2,0.1,4.4l1.2,2.1c0.1,0.1,0.2,0.2,0.3,0.2c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.2-0.1L4,5.5\n        c0.2-0.1,0.3-0.4,0.2-0.7C4.1,4.6,3.7,4.5,3.5,4.7L2.6,5.2C2.7,4.8,2.8,4.4,3,4.1c0.6-1,1.5-1.7,2.6-1.9C6.8,1.9,7.9,2,8.9,2.6\n        c1,0.6,1.7,1.5,1.9,2.6s0.1,2.2-0.5,3.2s-1.5,1.7-2.6,1.9c-1.1,0.3-2.2,0.1-3.2-0.5c-0.7-0.4-1.2-1-1.6-1.7C2.8,8,2.5,7.9,2.2,8\n        C2,8.1,1.9,8.4,2,8.7c0.4,0.9,1.1,1.6,2,2.1c0.8,0.5,1.8,0.8,2.7,0.8c0.4,0,0.9-0.1,1.3-0.2c1.4-0.3,2.5-1.2,3.2-2.4\n        C11.9,7.8,12.1,6.4,11.8,5z"}),a.createElement("path",{d:"M6.7,3.7c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.1,0.1,0.3,0.1,0.4l1.1,1.1c0.1,0.1,0.2,0.1,0.4,0.1s0.3,0,0.4-0.1\n        c0.2-0.2,0.2-0.5,0-0.7l-1-1V4.2C7.2,3.9,7,3.7,6.7,3.7z"})));var Ye=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:e,width:e,viewBox:"0 0 20 20",color:t,fill:"currentColor",stroke:"currentColor",strokeWidth:"0.5"},a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("path",{d:"M14.5,19H4.5A2.5,2.5,0,0,1,2,16.5V10A2.5,2.5,0,0,1,2.5,5H4.77A3,3,0,0,1,4,3,3,3,0,0,1,9.72,1.74,2.5,2.5,0,0,1,13.5,5h3A2.5,2.5,0,0,1,17,10V16.5A2.5,2.5,0,0,1,14.5,19ZM10,18h4.5A1.5,1.5,0,0,0,16,16.5V10H10ZM3,10v6.5A1.5,1.5,0,0,0,4.5,18H9V10Zm-.5-.5V9H9V6H2.5a1.5,1.5,0,0,0,0,3ZM10,9h6.5a1.5,1.5,0,0,0,0-3H10Zm0-4h1.5A1.5,1.5,0,1,0,10,3.5ZM7,5H9V3A2,2,0,1,0,7,5Z"}))));var Je=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24"},a.createElement("g",{id:"search",transform:"translate(3 3)"},a.createElement("circle",{id:"Ellipse_291",cx:"5.333",cy:"5.333",r:"5.333",className:"cls-1","data-name":"Ellipse 291",transform:"translate(3 3)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),a.createElement("path",{id:"Line_307",d:"M2.9 2.9L0 0",className:"cls-1","data-name":"Line 307",transform:"translate(12.1 12.1)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})));var Qe=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 18 17.1"},a.createElement("g",{id:"profile-services",transform:"translate(-316 -289)"},a.createElement("path",{id:"Path_1660","data-name":"Path 1660",d:"M325.45,303.5a19.963,19.963,0,0,1-4.392-.48A20.416,20.416,0,0,1,316,301.18v3.93a2.752,2.752,0,0,0,2.6,2.89h12.8a2.752,2.752,0,0,0,2.6-2.89v-3.49a20.049,20.049,0,0,1-5.229,1.6A19.209,19.209,0,0,1,325.45,303.5Z",transform:"translate(0 -1.9)",fill:t}),a.createElement("path",{id:"Path_1661","data-name":"Path 1661",d:"M331.4,292.7h-1.9v-1.2A2.464,2.464,0,0,0,327.07,289h-4.14a2.464,2.464,0,0,0-2.43,2.495v1.2h-1.9a2.632,2.632,0,0,0-2.6,2.67v2.827a19.732,19.732,0,0,0,4.5,1.737,16.82,16.82,0,0,0,1.8.37,19.686,19.686,0,0,0,3.15.249,20.149,20.149,0,0,0,2.25-.129,16.965,16.965,0,0,0,1.8-.286,19.849,19.849,0,0,0,4.5-1.488v-3.28A2.632,2.632,0,0,0,331.4,292.7ZM325,298.24a.924.924,0,1,1,.9-.924A.913.913,0,0,1,325,298.24Zm2.7-5.544h-5.4v-1.2a.635.635,0,0,1,.63-.647h4.14a.635.635,0,0,1,.63.647Z",fill:t})));var Xe=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 18.001 18"},a.createElement("g",{id:"share-win",transform:"translate(-23.999 -736)"},a.createElement("g",{id:"Group_1784","data-name":"Group 1784",transform:"translate(1 3.892)"},a.createElement("path",{id:"Path_1736",fill:t,d:"M550.929 348.5h-1.319a1.952 1.952 0 0 0-1.768-2.806 2.691 2.691 0 0 1-5.05 0 1.966 1.966 0 0 0-1.964 1.964 1.942 1.942 0 0 0 .2.842h-1.319a.561.561 0 0 0-.561.561v2.805a.561.561 0 0 0 .561.561h.561v5.05a.561.561 0 0 0 .561.561h8.978a.561.561 0 0 0 .56-.561v-5.05h.562a.561.561 0 0 0 .561-.561v-2.805a.561.561 0 0 0-.563-.561zm-3.087-1.684a.842.842 0 1 1 0 1.684h-1.77c.265-.692.809-1.68 1.77-1.68zm-5.892.841a.843.843 0 0 1 .842-.841c.962 0 1.506.987 1.77 1.684h-1.77a.843.843 0 0 1-.842-.838z","data-name":"Path 1736",transform:"translate(-514.235 390.191)"}),a.createElement("g",{id:"Group_1780","data-name":"Group 1780",transform:"translate(23.499 736.283)"},a.createElement("path",{id:"Line_175",d:"M0 0L0 1.763",className:"cls-3",fill:"none",strokeLinecap:"round",stroke:t,"data-name":"Line 175",transform:"translate(.882)"}),a.createElement("path",{id:"Line_176",d:"M0 0L0 1.763",className:"cls-3",fill:"none",strokeLinecap:"round",stroke:t,"data-name":"Line 176",transform:"rotate(90 .44 1.323)"})),a.createElement("g",{id:"Group_1781","data-name":"Group 1781",transform:"translate(38.665 738.441)"},a.createElement("path",{id:"Line_175-2",d:"M0 0L0 1.763",className:"cls-3",fill:"none",strokeLinecap:"round",stroke:t,"data-name":"Line 175",transform:"translate(.882)"}),a.createElement("path",{id:"Line_176-2",d:"M0 0L0 1.763",className:"cls-3",fill:"none",strokeLinecap:"round",stroke:t,"data-name":"Line 176",transform:"rotate(90 .44 1.323)"})),a.createElement("g",{id:"Group_1783","data-name":"Group 1783",transform:"translate(29.721 733.125)"},a.createElement("path",{id:"Line_175-3",d:"M0 0L0 1.763",className:"cls-3",fill:"none",strokeLinecap:"round",stroke:t,"data-name":"Line 175",transform:"translate(.882)"}),a.createElement("path",{id:"Line_176-3",d:"M0 0L0 1.763",className:"cls-3",fill:"none",strokeLinecap:"round",stroke:t,"data-name":"Line 176",transform:"rotate(90 .44 1.323)"})))));var et=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24"},a.createElement("g",{id:"signature",transform:"translate(2 4)"},a.createElement("g",{id:"Group_1768","data-name":"Group 1768",transform:"translate(0 3.375)"},a.createElement("g",{id:"Group_1764","data-name":"Group 1764",transform:"translate(7.5)"},a.createElement("path",{id:"Path_2116",d:"M361.311 374.972l2.047 2.059-5.66 5.383a1.37 1.37 0 0 1-.831.385l-1.554.157a.3.3 0 0 1-.313-.337l.289-1.578a1.325 1.325 0 0 1 .422-.783l5.588-5.3z",className:"cls-2","data-name":"Path 2116",fill:t,transform:"translate(-354.998 -373.382)"}),a.createElement("path",{id:"Path_2117",d:"M363.308 376.179l-.3.289-2.048-2.068.373-.361a1.457 1.457 0 0 1 1.975 2.144z",className:"cls-2","data-name":"Path 2117",transform:"translate(-353.78 -373.65)",fill:t})),a.createElement("path",{id:"Line_311",fill:"none",stroke:t,strokeLinecap:"round",d:"M4 0L0 0","data-name":"Line 311",transform:"translate(2 9.124)"}))));var tt=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24"},a.createElement("g",{id:"sign-now",transform:"translate(-51 -7)"},a.createElement("g",{id:"Group_1879","data-name":"Group 1879"},a.createElement("g",{id:"Group_1792","data-name":"Group 1792",transform:"translate(54.348 14.375)"},a.createElement("g",{id:"Group_1764","data-name":"Group 1764",transform:"translate(5.652)"},a.createElement("path",{id:"Path_2116",d:"M361.311 374.972l2.047 2.059-5.66 5.383a1.37 1.37 0 0 1-.831.385l-1.554.157a.3.3 0 0 1-.313-.337l.289-1.578a1.325 1.325 0 0 1 .422-.783l5.588-5.3z",className:"cls-2","data-name":"Path 2116",transform:"translate(-354.998 -373.382)",fill:t}),a.createElement("path",{id:"Path_2117",d:"M363.308 376.179l-.3.289-2.048-2.068.373-.361a1.457 1.457 0 0 1 1.975 2.144z",className:"cls-2","data-name":"Path 2117",fill:t,transform:"translate(-353.78 -373.65)"})),a.createElement("path",{id:"Path_2121",fill:"none",stroke:t,strokeLinecap:"round",d:"M3.442 1.855c-1.754 2.894-.722 2.974 1.42 5.036s-3.387 5.068.649 5.465","data-name":"Path 2121",transform:"translate(-1.355 -3)"})))));var nt=({size:e})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:e,height:e},a.createElement("polygon",{fill:"#464655",points:"0,5.9 0,14.1 5.5,10 "}),a.createElement("path",{fill:"#FF4B55",d:"M2.8,3.4L9,8.3h11V3.8c0-0.2-0.2-0.3-0.3-0.3L2.8,3.4L2.8,3.4z"}),a.createElement("path",{fill:"#41479B",d:"M2.8,16.6L9,11.7h11v4.5c0,0.2-0.2,0.3-0.3,0.3L2.8,16.6L2.8,16.6z"}),a.createElement("path",{fill:"#73AF00",d:"M2.2,3.4H0.3C0.2,3.4,0,3.6,0,3.8v1.4L6.1,10L0,14.8v1.4c0,0.2,0.2,0.3,0.3,0.3h1.9l6.5-5.2H20V8.6H8.8L2.2,3.4\n\tz"}),a.createElement("polygon",{fill:"#F5F5F5",points:"3.3,3.4 2.2,3.4 8.8,8.6 20,8.6 20,7.9 9,7.9 "}),a.createElement("polygon",{fill:"#FFE15A",points:"0,5.2 0,6.1 4.9,10 0,13.9 0,14.8 6.1,10 "}),a.createElement("polygon",{fill:"#F5F5F5",points:"8.8,11.4 2.2,16.6 3.3,16.6 9,12.1 20,12.1 20,11.4 "}));var rt=({size:e})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:e,height:e},a.createElement("path",{fill:"#FFD250",d:"M20,3.4H0v13.1h20V3.4z M6.2,15.2c0,0.2-0.1,0.3-0.3,0.3H3.6H1.3c-0.2,0-0.3-0.1-0.3-0.3V4.8\n\tc0-0.2,0.1-0.3,0.3-0.3h2.3h2.3c0.2,0,0.3,0.1,0.3,0.3V15.2z M19,15.2L19,15.2"}),a.createElement("path",{fill:"#963C3C",d:"M18.6,4.5h-11c-0.2,0-0.3,0.2-0.3,0.3v10.3c0,0.2,0.2,0.3,0.3,0.3h11c0.2,0,0.3-0.2,0.3-0.3V4.8\n\tC19,4.6,18.8,4.5,18.6,4.5z"}),a.createElement("path",{fill:"#5AA587",d:"M1.4,4.5C1.2,4.5,1,4.6,1,4.8v10.3c0,0.2,0.2,0.3,0.3,0.3h2.2v-11H1.4z"}),a.createElement("path",{fill:"#FF7350",d:"M5.9,4.5H3.6v11h2.2c0.2,0,0.3-0.2,0.3-0.3V4.8C6.2,4.6,6.1,4.5,5.9,4.5z"}),a.createElement("g",null,a.createElement("path",{fill:"#FFD250",d:"M15.4,12.8c0-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.1,0.1-0.2c0,0,0,0,0,0c-0.1,0-0.1,0-0.2-0.1c0,0,0-0.1,0-0.1\n\t\tc0-0.1,0.1-0.2,0.1-0.2c-0.1-0.1-0.2-0.2-0.3-0.3c-0.2-0.2-0.4-0.3-0.7-0.3c0,0.3,0.1,0.4,0.2,0.6c0,0.1,0.1,0.1,0.1,0.2\n\t\tc0.2,0.3,0.1,0.8,0.1,0.8c0,0.1-0.2,0.2-0.4,0.2c-0.1,0-0.2,0-0.3,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0c0,0,0.1,0,0.2-0.1\n\t\tc0,0,0,0,0.1,0c0.1,0.1,0.3,0,0.3,0c0,0,0,0,0.1,0c0.1,0.1,0.3,0,0.3,0c0,0,0,0,0.1,0c0.1,0,0.1,0.1,0.2,0c0,0,0.1,0,0.1-0.1\n\t\tc0,0,0-0.1,0-0.2C15.4,12.9,15.4,12.8,15.4,12.8z"}),a.createElement("path",{fill:"#FFD250",d:"M16.9,7.9C16.9,7.9,16.9,7.9,16.9,7.9C16.8,7.9,16.8,8,16.8,8c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.2-0.1-0.4-0.3\n\t\tC16,7.6,15.5,7.2,15,7.1c-0.6-0.1-1.1,0.1-1.2,0.4c-0.1,0.4,0.2,0.7,0.2,0.7c0,0,0,0,0,0.1c-0.1,0.2,0,0.3,0,0.3\n\t\tc0-0.1,0-0.1,0.1-0.1c0.1-0.1,0.2,0,0.4,0c0.1,0,0.2,0.1,0.3,0.1c0.3,0.1,0.7,0,1-0.1c0.1,0,0.2,0,0.3-0.1c0.3,0,0.5,0.1,0.6,0.3\n\t\tc0,0.1,0.1,0.3-0.2,0.5c-0.5,0.4-2.7,0.2-2.9,0.2c0,0,0,0,0,0c0,0.1,0.1,0.1,0.1,0.1c0,0,0,0,0,0.1c0,0,0,0-0.1,0l-0.2,0l0,0.2\n\t\tc0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.2,0-0.3-0.1l-0.3,0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l-0.1-0.3L12.6,10c0,0,0,0,0,0\n\t\tc0,0,0,0,0,0l-0.1-0.2c0,0.1-0.1,0.1-0.2,0.2c0,0,0,0,0,0c0,0,0,0,0,0L12,9.8c0,0.1-0.1,0.1-0.2,0.2c0,0,0,0-0.1,0c0,0,0,0,0,0\n\t\tl0-0.3c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0-0.1,0c0,0,0,0,0-0.1c0.1-0.1,0.2-0.3,0.2-0.4c-0.1,0.1-0.1,0.1-0.2,0.2\n\t\tc-0.2,0.1-0.4,0.3-0.6,0.6c-0.1,0.2-0.2,0.6-0.1,1c0.1,0.3,0.4,0.5,0.8,0.7c0-0.1,0-0.1,0-0.2c0-0.3,0.1-0.5,0.1-0.5c0,0,0,0,0.1,0\n\t\tc0,0,0,0,0,0.1c0,0-0.1,0.2-0.1,0.5c0,0.1,0.1,0.3,0.1,0.4c0.1,0.2,0.1,0.4,0.1,0.6c0,0.2-0.3,0.3-0.6,0.3c-0.1,0-0.2,0-0.2,0.1\n\t\tc-0.1,0-0.1,0.1-0.1,0.2c0,0,0,0,0,0c0,0,0.1,0,0.2,0c0,0,0,0,0.1,0c0.1,0.1,0.3,0,0.3,0c0,0,0.1,0,0.1,0c0,0,0.1,0.1,0.1,0.1\n\t\tc0.1,0,0.2-0.1,0.2-0.1c0,0,0,0,0.1,0c0.2,0.1,0.3,0,0.3,0c0.2-0.1,0.1-0.4,0.1-0.4c0,0,0,0,0,0c0,0,0,0,0,0c0.2,0,0.3-0.2,0.4-0.3\n\t\tc-0.1,0-0.2,0-0.2-0.1c-0.1-0.1,0-0.3,0.1-0.5c0.2-0.3,0.4-0.9,0.4-1.1c0,0,0-0.1,0-0.1c0,0,0.1,0,0.1,0c0,0.2-0.1,0.6-0.2,0.9\n\t\tc0.2-0.1,0.4-0.1,0.6-0.2c0.2-0.1,0.4-0.2,0.7-0.3c0.4-0.1,0.8,0,1.1,0.3c0.2,0.2,0.3,0.3,0.5,0.4c0.1,0.1,0.2,0.1,0.3,0.2\n\t\tc0.2,0.2,0.2,0.3,0.2,0.5c0,0,0,0.1,0,0.2c0,0.3-0.2,0.3-0.3,0.3c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.2,0.1-0.3,0.2c0,0,0,0,0,0\n\t\tc0,0,0.1,0,0.2,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0.1,0,0.1,0.1,0.1c0.1,0,0.2,0,0.2-0.1c0,0,0,0,0.1,0c0.1,0,0.1,0.1,0.2,0.1\n\t\tc0.1,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0.1c0.1,0,0.1,0,0.1,0c0,0,0-0.1,0-0.2c-0.1-0.1-0.1-0.2-0.1-0.3\n\t\tc0-0.1,0.1-0.2,0.2-0.2c0.2-0.1,0.2-0.2,0.2-0.2c0,0,0,0,0,0c-0.1,0-0.2,0-0.3-0.3c-0.1-0.2,0-0.5,0.1-0.9c0.1-0.2,0.1-0.4,0.2-0.6\n\t\tc0.1-0.5-0.2-1-0.2-1c0,0,0-0.1,0-0.1c0.2-0.2,0.3-0.4,0.3-0.6c0-0.2-0.2-0.3-0.4-0.4c-0.2-0.1-0.5,0-0.9,0c-0.3,0-0.5,0.1-0.7,0\n\t\tc-0.1,0-0.2-0.1-0.2-0.1c0-0.1,0-0.1,0-0.2c-0.1,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0-0.1-0.1-0.1-0.1-0.2\n\t\tc0-0.1,0.1-0.2,0.1-0.2c-0.2-0.1-0.3,0.1-0.4,0.1c0,0,0,0-0.1,0C14,8,14,7.9,14,7.8c0-0.1,0.1-0.2,0.2-0.3c0.1,0,0.1,0,0.2,0\n\t\tc0.1,0,0.1,0.1,0.1,0.1c0.1-0.1,0.1-0.2,0.1-0.2c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0,0.2,0.1,0.3,0.1C15,7.6,15,7.7,15,7.8\n\t\tc0.2-0.1,0.2-0.3,0.2-0.3c0,0,0,0,0,0c0,0,0,0,0.1,0c0.2,0.1,0.3,0.3,0.3,0.4c0.1-0.1,0.1-0.1,0.1-0.1c0,0,0,0,0-0.1c0,0,0,0,0.1,0\n\t\tC15.8,7.8,15.9,7.9,16,8l-0.1-0.2c0,0,0,0,0-0.1c0,0,0,0,0.1,0c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.2,0.2,0.4,0.2\n\t\tc0.2,0.1,0.3,0.1,0.3,0c0.1,0,0.1-0.1,0.1-0.1c0-0.1,0-0.1,0-0.2C17,7.9,17,7.9,16.9,7.9z"}),a.createElement("path",{fill:"#FFD250",d:"M10.7,8.6C10.7,8.6,10.7,8.6,10.7,8.6C10.7,8.6,10.7,8.6,10.7,8.6c0,0,0.4,0.1,0.8,0.1c0,0,0,0,0,0\n\t\tc0,0,0,0,0,0.1l0,0c0.1,0,0.2,0,0.2,0c0,0-0.1-0.1-0.1-0.2c-0.1,0-0.4,0-0.7-0.2c-0.1,0-0.2-0.1-0.2-0.1\n\t\tC10.6,8.5,10.6,8.5,10.7,8.6C10.6,8.6,10.6,8.6,10.7,8.6z"}),a.createElement("path",{fill:"#FFD250",d:"M11.9,7.9C11.9,7.9,11.9,7.9,11.9,7.9C11.9,7.9,11.8,7.9,11.9,7.9c-0.1,0.1,0,0.1,0,0.1c0,0,0.1,0,0.1,0\n\t\tc0,0,0,0,0-0.1l0,0C12,7.9,11.9,7.9,11.9,7.9z"}),a.createElement("path",{fill:"#FFD250",d:"M11.4,9.1c0,0.1,0.1,0.1,0.1,0.1c0,0,0-0.1,0.1-0.1c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0\n\t\tc0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0.1c0,0.1,0,0.3-0.1,0.4c0,0,0.1,0,0.1-0.1c0,0,0,0,0.1,0c0,0,0,0,0,0l0,0.2\n\t\tC12,9.8,12,9.7,12,9.7c0,0,0,0,0.1,0c0,0,0,0,0,0l0.1,0.2c0.1-0.1,0.2-0.2,0.2-0.2c0,0,0,0,0,0c0,0,0,0,0,0l0.1,0.1l0.1-0.3\n\t\tc0,0,0,0,0.1,0c0,0,0,0,0,0l0.1,0.3l0.2-0.1c0,0,0,0,0.1,0c0.1,0,0.2,0.1,0.3,0.1l0-0.2c0,0,0,0,0,0c0,0,0,0,0,0l0.1,0\n\t\tc0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c-0.1,0-0.2,0-0.4-0.1L13,9.5c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l-0.3-0.2l-0.1,0.2c0,0,0,0,0,0\n\t\tc0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.2-0.2c0,0-0.1,0.1-0.2,0.2c0,0,0,0,0,0c0,0,0,0,0,0L12,9.2c0,0,0-0.1,0-0.1c0,0,0.1,0,0.1,0\n\t\tl0.1,0.2c0.1-0.1,0.2-0.1,0.2-0.1c0,0,0.1,0,0.1,0c0,0,0.1,0.1,0.2,0.2l0-0.1c0,0,0,0,0,0c0,0,0,0,0,0L13,9.4l0.1-0.1\n\t\tc0,0,0,0,0.1,0c0.1,0.1,0.3,0.1,0.4,0.1c-0.1-0.1-0.1-0.3-0.1-0.3c-0.1,0-0.2-0.1-0.3-0.2l0,0.1c0,0,0,0,0,0c0,0,0,0,0,0L12.9,9\n\t\tl0,0.1c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0-0.1-0.1-0.2-0.2c0,0,0-0.1,0-0.1c0,0,0.1,0,0.1,0c0,0,0.1,0.1,0.1,0.1l0-0.1c0,0,0,0,0,0\n\t\tc0,0,0,0,0.1,0l0.2,0.1l0-0.1c0,0,0,0,0,0c0,0,0,0,0,0C13.3,8.9,13.5,9,13.6,9c0-0.1,0-0.3,0-0.3c0,0,0,0,0,0\n\t\tc-0.1,0-0.2-0.1-0.3-0.2c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1-0.1-0.2-0.2c0,0.1,0,0.1,0,0.1c0,0,0,0-0.1,0\n\t\tc0,0-0.1,0-0.2-0.1c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1-0.1-0.2-0.1l0,0.1c0,0,0,0,0,0c0,0,0,0,0,0\n\t\tc0,0-0.2-0.1-0.2-0.2c0,0,0-0.1,0-0.1c0,0,0.1,0,0.1,0c0,0.1,0.1,0.1,0.1,0.1l0-0.1c0,0,0,0,0,0c0,0,0,0,0.1,0\n\t\tc0.1,0,0.1,0.1,0.2,0.1c0-0.1,0-0.2,0-0.2c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0.1,0.1,0.1,0.2,0.1c0,0,0-0.1,0-0.2c0,0,0,0,0,0\n\t\tc0,0,0,0,0.1,0c0,0.1,0.1,0.1,0.2,0.2c0-0.1,0-0.2,0-0.3c0,0,0,0,0-0.1c0,0,0.1,0,0.1,0c0.1,0.2,0.3,0.3,0.4,0.4\n\t\tc0.1-0.6-0.1-0.8-0.1-0.8c0,0,0,0,0,0c0,0,0,0,0,0c0.1-0.1,0.2-0.2,0.2-0.3c-0.2,0.2-0.6,0.3-0.7,0.3L13,7.9c0,0,0,0,0,0.1\n\t\tc0,0,0,0,0,0c-0.2,0-0.4,0-0.5,0l0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0c-0.2,0-0.3-0.1-0.4-0.1c0,0,0,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1\n\t\tc0,0-0.1,0-0.1,0c-0.1,0-0.1-0.1-0.1-0.2c0-0.1,0.1-0.1,0.1-0.1c0.1,0,0.2,0,0.3,0.1c0.1,0,0.2,0.1,0.3,0.1l-0.1-0.1\n\t\tc0,0,0-0.1,0-0.1c0,0,0,0,0.1,0c0,0,0.1,0.1,0.4,0.1l-0.1-0.1c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0.4,0,0.7-0.3c-0.1,0-0.2,0-0.2,0\n\t\tc0,0,0,0,0,0c-0.1-0.2-0.2-0.2-0.3-0.2c0,0.1-0.1,0.2-0.1,0.2c0,0,0,0,0,0c0,0,0,0,0,0c-0.1-0.2-0.2-0.2-0.3-0.2\n\t\tc0,0.1-0.1,0.2-0.1,0.2c0,0,0,0-0.1,0c-0.2-0.2-0.4-0.1-0.5-0.1c0,0.1,0,0.1,0,0.1c-0.1,0.2-0.8,0.3-0.9,0.3c0,0,0,0,0,0\n\t\tc0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0.1,0,0.3c0.1,0.2,0.3,0.4,0.4,0.6c0,0,0,0,0-0.1\n\t\tc0,0,0,0,0,0c0,0,0,0,0.1,0c0,0.1,0.1,0.1,0.1,0.1l0-0.2c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0.1,0.4,0.5,0.5,0.6c0,0,0,0,0,0.1\n\t\tc0,0,0,0-0.1,0c-0.2,0-0.5,0-0.5,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1l0,0c-0.3,0-0.5-0.1-0.6-0.1L10.6,9l0.2,0c0,0,0,0,0,0\n\t\tc0,0,0,0,0,0.1l0,0.1l0.2-0.1c0,0,0.1,0,0.1,0c0,0.1,0.1,0.1,0.1,0.1L11.4,9.1C11.3,9.1,11.3,9.1,11.4,9.1\n\t\tC11.3,9.1,11.4,9.1,11.4,9.1z"}),a.createElement("path",{fill:"#FFD250",d:"M10.7,11.9c0.2,0.1,0.4,0,0.5-0.1c-0.2-0.1-0.3-0.3-0.4-0.5c0-0.1,0-0.1-0.1-0.2c0,0-0.3-0.2-0.6-0.5\n\t\tc0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.3c0,0.1,0,0.2,0.1,0.2\n\t\tc0,0,0,0,0.1,0c0.1,0,0.1,0,0.2,0.1C10.5,11.7,10.6,11.8,10.7,11.9z"}),a.createElement("path",{fill:"#FFD250",d:"M9.7,10.4C9.6,10.4,9.6,10.4,9.7,10.4c-0.1,0-0.2,0-0.2,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0\n\t\tc0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0\n\t\tc0,0,0,0,0.1,0.1c0,0,0.1,0,0.2,0c0,0,0,0,0,0c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1\n\t\tc0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0C9.9,10.4,9.8,10.4,9.7,10.4z"}),a.createElement("path",{fill:"#FFD250",d:"M10.1,6.7C9.9,6.8,9.5,7.2,9.5,8.2l0,1.7c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c0.1,0,0.3,0,0.4,0c0,0,0-0.1,0-0.2\n\t\tC9.9,7.9,10,7,10.1,6.7z"}),a.createElement("path",{fill:"#FFD250",d:"M10.2,10.1c0-0.1-0.1-0.2-0.1-0.2c0,0-0.1,0-0.1,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0\n\t\tc-0.1,0-0.3,0.1-0.5,0c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0.1c0,0,0,0.1,0,0.1\n\t\tc0,0.2,0.2,0.2,0.5,0.2c0.2,0,0.4,0,0.5-0.1C10.1,10.1,10.2,10.1,10.2,10.1z"}),a.createElement("path",{fill:"#FFD250",d:"M9.7,11.3C9.7,11.3,9.7,11.3,9.7,11.3c0.1,0,0.2,0,0.2,0c0,0,0-0.1,0-0.1c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.2,0\n\t\tc0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.1,0c0,0,0,0.1,0,0.1c0.1,0,0.1,0,0.2,0c0,0,0,0,0.1,0\n\t\tC9.6,11.3,9.6,11.4,9.7,11.3c-0.1,0.1-0.2,0.2-0.2,0.2c0.1,0.1,0.1,0.3,0,0.4c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0,0,0,0,0\n\t\tc0,0,0,0,0,0.1c0,0.1,0.1,0.1,0.2,0.1c0,0,0,0,0.1,0c0,0,0,0,0,0.1l-0.1,0.1l0.1,0c0,0,0,0,0,0c0,0,0,0.1,0.1,0.1\n\t\tc0-0.1,0.1-0.1,0.1-0.1c0,0,0,0,0,0l0.1,0l-0.1-0.1c0,0,0,0,0-0.1c0,0,0,0,0.1,0c0.1,0,0.2,0,0.2-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0\n\t\tc0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.1-0.2-0.1-0.3,0-0.4C9.8,11.5,9.7,11.4,9.7,11.3C9.7,11.4,9.7,11.3,9.7,11.3z"})),a.createElement("path",{fill:"#464655",d:"M17.1,7.9c0,0-0.1-0.1-0.2-0.1c-0.1,0-0.1,0-0.2,0.1c0,0-0.1,0.1-0.1,0.1c-0.1,0-0.2-0.1-0.3-0.2\n\tC16.1,7.5,15.5,7.1,15,7c-0.4-0.1-0.9,0-1.2,0.3c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0h0\n\tc0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0.1-0.3,0.2-0.3,0.2C13.2,7.1,13,7.1,13,7.1c0,0,0,0-0.1,0\n\tc0,0.1,0,0.1-0.1,0.1c-0.2-0.2-0.4-0.2-0.4-0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c-0.3-0.3-0.6-0.1-0.6,0c0,0,0,0,0,0.1\n\tc0,0,0,0.1,0,0.1c-0.1,0.1-0.5,0.2-0.8,0.2c0,0,0-0.1,0-0.1c0-0.1-0.1-0.1-0.2-0.1c-0.1,0-0.2,0-0.2,0.1c-0.1,0.1-0.1,0.2,0,0.4\n\tc0.1,0.3,0.3,0.5,0.5,0.6c0,0-0.1,0-0.1,0c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.1,0.1-0.1,0.2c0,0,0,0.1,0.1,0.2L10.5,9c0,0,0,0,0,0.1\n\tc0,0,0,0,0,0l0.2,0l-0.1,0.1c0,0,0,0,0,0.1c0,0,0,0,0.1,0l0.3-0.1c0.1,0.1,0.2,0.2,0.2,0.2c0,0,0,0,0,0c0,0,0,0,0,0l0-0.1\n\tc0,0.1,0.1,0.1,0.1,0.1c0,0,0,0-0.1,0c-0.2,0.1-0.4,0.3-0.6,0.7c-0.1,0.2-0.2,0.4-0.1,0.7c-0.1-0.1-0.4-0.3-0.5-0.5c0,0,0,0,0.1,0\n\tc0.1-0.1,0.1-0.1,0.1-0.2c0-0.1-0.1-0.2-0.2-0.3c0,0-0.1,0-0.1,0c0-2.3,0.3-3,0.3-3.1c0,0,0,0,0-0.1c0,0,0,0-0.1,0\n\tc0,0-0.8,0.3-0.9,1.6l0,1.6c-0.1,0-0.2,0-0.3,0.1C9,9.9,9,10,9,10.1c0,0.1,0.1,0.2,0.3,0.3c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1\n\tc0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0.1,0.1c-0.1,0-0.1,0-0.2,0.1\n\tc0,0.1,0,0.2,0,0.2c0,0,0.1,0,0.2,0c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.3c0,0,0,0-0.1,0\n\tc0,0-0.1,0-0.1,0c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0.1,0.1,0.2,0.1l-0.1,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0l0.2,0.1c0,0,0.1,0.1,0.1,0.2\n\tc0,0,0,0,0,0c0,0,0,0,0,0c0.1-0.1,0.1-0.2,0.1-0.2l0.2-0.1c0,0,0,0,0,0c0,0,0,0,0-0.1L10,12.2c0.1,0,0.1-0.1,0.2-0.1\n\tc0-0.1,0-0.2-0.1-0.2c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c-0.1-0.1,0-0.3,0.1-0.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0-0.1-0.1-0.1\n\tc0.1,0,0.1,0,0.2,0c0,0,0,0,0,0c0,0.2,0.2,0.3,0.2,0.3c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.1,0.1,0.2,0.2\n\tc0.1,0.1,0.2,0.1,0.2,0.1c0.2,0,0.3-0.2,0.4-0.2c0.1,0.1,0.3,0.1,0.4,0.2c0,0,0,0,0,0c0,0.1,0,0.1,0.1,0.2c0.1,0.2,0.1,0.4,0.1,0.5\n\tc0,0.2-0.3,0.2-0.5,0.2c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.1,0.1,0.1c0.1,0,0.2,0,0.2,0\n\tc0.1,0.1,0.3,0.1,0.3,0c0.1,0,0.1,0.1,0.2,0.1c0,0,0,0,0,0c0.1,0,0.2-0.1,0.2-0.1c0.2,0.1,0.3,0,0.3,0c0.2-0.1,0.1-0.4,0.1-0.5\n\tc0.3-0.1,0.5-0.4,0.5-0.4c0,0,0,0,0-0.1c0,0,0,0-0.1,0c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1,0-0.2,0.1-0.3c0,0,0-0.1,0.1-0.1\n\tc0.3-0.1,0.5-0.2,0.7-0.3c0.2-0.1,0.4-0.2,0.6-0.3c0.1,0,0.1,0,0.2,0c0,0.3,0.1,0.5,0.3,0.7c0,0.1,0.1,0.1,0.1,0.2\n\tc0.2,0.2,0.1,0.7,0.1,0.7c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.3,0-0.3,0.1c-0.1,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.1,0.1,0.1\n\tc0.1,0,0.2,0,0.3,0c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0,0.2-0.1c0.1,0.1,0.3,0,0.4,0c0.1,0.1,0.2,0,0.2,0c0,0,0,0,0,0c0,0,0,0,0,0\n\tc0.1,0,0.2,0,0.2,0c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.2,0,0.3-0.1c0.1,0.1,0.1,0.1,0.2,0.1c0.1,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1,0.1\n\tc0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.1-0.1c0.1-0.1,0-0.2,0-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.1,0.1-0.2c0.1-0.1,0.2-0.2,0.2-0.3\n\tc0,0,0-0.1,0-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2-0.2c-0.1-0.2,0-0.5,0.1-0.8c0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.5-0.1-0.9-0.2-1\n\tC17,9.3,17.1,9.1,17,8.9c0-0.2-0.3-0.4-0.4-0.5c-0.2-0.1-0.6,0-0.9,0c-0.3,0-0.5,0.1-0.7,0c-0.1,0-0.1,0-0.1-0.1c0-0.1,0-0.2,0-0.2\n\tc0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.2,0.1-0.2,0.1c0,0,0,0,0,0c0-0.1,0.1-0.2,0.1-0.2c0,0,0,0,0,0c0,0,0,0,0,0\n\tc-0.2-0.1-0.4,0-0.5,0.1c0,0-0.1-0.1-0.1-0.2c0,0,0-0.1,0.1-0.2c0,0,0.1,0,0.1,0c0.1,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0\n\tc0.1-0.1,0.2-0.2,0.2-0.3c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.4,0.1,0.4c0,0,0,0,0,0c0,0,0,0,0,0c0.2-0.1,0.3-0.3,0.3-0.4\n\tc0.2,0.1,0.2,0.3,0.2,0.4c0,0,0,0,0,0c0,0,0,0,0.1,0c0.1,0,0.1-0.1,0.2-0.1c0.2,0.2,0.4,0.3,0.4,0.3c0,0,0,0,0.1,0c0,0,0,0,0-0.1\n\tl-0.1-0.1c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.4,0.3c0.2,0.1,0.3,0.1,0.4,0c0.1,0,0.1-0.1,0.2-0.2C17.2,8.1,17.2,8,17.1,7.9z\n\t M17.1,8.1c0,0,0,0.1-0.1,0.1c-0.1,0-0.2,0-0.3,0c-0.2-0.1-0.3-0.2-0.4-0.2c-0.1-0.1-0.2-0.1-0.3-0.2c0,0,0,0-0.1,0c0,0,0,0,0,0.1\n\tL16,8c-0.1-0.1-0.2-0.1-0.3-0.3c0,0,0,0-0.1,0c0,0,0,0,0,0.1c0,0,0,0.1-0.1,0.1c0-0.1-0.1-0.3-0.3-0.4c0,0,0,0-0.1,0c0,0,0,0,0,0\n\tc0,0,0,0.2-0.2,0.3c0-0.1,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.1-0.3-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0.1-0.1,0.2c0,0-0.1-0.1-0.1-0.1\n\tc-0.1,0-0.1,0-0.2,0C14.1,7.6,14,7.7,14,7.8C14,7.9,14,8,14.1,8.1c0,0,0.1,0,0.1,0c0,0,0.2-0.2,0.4-0.1c0,0-0.1,0.1-0.1,0.2\n\tc0,0.1,0,0.1,0.1,0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0.1,0,0.2c0,0.1,0.1,0.1,0.2,0.1c0.2,0,0.4,0,0.7,0\n\tc0.3,0,0.7-0.1,0.9,0c0.2,0.1,0.3,0.2,0.4,0.4c0,0.2-0.1,0.4-0.3,0.6c0,0,0,0.1,0,0.1c0,0,0.4,0.4,0.2,1c0,0.2-0.1,0.4-0.2,0.6\n\tc-0.1,0.4-0.2,0.7-0.1,0.9c0.1,0.2,0.2,0.2,0.3,0.3c0,0,0,0,0,0c0,0,0,0.1-0.2,0.2c-0.1,0.1-0.1,0.1-0.2,0.2c0,0.1,0,0.2,0.1,0.3\n\tc0.1,0.1,0.1,0.2,0,0.2c0,0,0,0-0.1,0c-0.1,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0.1-0.1,0.1c0,0-0.1,0-0.2-0.1\n\tc0,0,0,0-0.1,0c0,0-0.1,0.1-0.2,0.1c0,0,0,0-0.1-0.1c0,0,0,0,0,0s0,0,0,0c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0c0-0.1,0.2-0.2,0.3-0.2\n\tc0,0,0,0,0,0c0,0,0,0,0,0c0.1,0,0.3-0.1,0.3-0.3c0-0.1,0-0.1,0-0.2c0-0.2,0-0.3-0.2-0.5c-0.1-0.1-0.2-0.1-0.3-0.2\n\tc-0.2-0.1-0.4-0.2-0.5-0.4c-0.3-0.3-0.7-0.4-1.1-0.3c-0.2,0.1-0.5,0.2-0.7,0.3c-0.2,0.1-0.4,0.2-0.6,0.2c0.2-0.3,0.3-0.7,0.2-0.9\n\tc0,0,0-0.1-0.1,0c0,0-0.1,0,0,0.1c0,0.2-0.1,0.8-0.4,1.1c-0.1,0.2-0.2,0.4-0.1,0.5c0,0.1,0.1,0.1,0.2,0.1c-0.1,0.1-0.2,0.2-0.4,0.3\n\tc0,0,0,0,0,0c0,0,0,0,0,0c0,0,0.1,0.3-0.1,0.4c0,0-0.1,0-0.3,0c0,0,0,0-0.1,0c0,0-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1-0.1\n\tc0,0-0.1,0-0.1,0c0,0-0.2,0.1-0.3,0c0,0,0,0-0.1,0c0,0-0.1,0-0.2,0c0,0,0,0,0,0c0-0.1,0-0.2,0.1-0.2c0.1,0,0.1-0.1,0.2-0.1\n\tc0.3,0,0.6,0,0.6-0.3c0-0.2,0-0.4-0.1-0.6c-0.1-0.2-0.1-0.3-0.1-0.4c0-0.3,0.1-0.5,0.1-0.5c0,0,0-0.1,0-0.1c0,0-0.1,0-0.1,0\n\tc0,0-0.1,0.3-0.1,0.5c0,0.1,0,0.1,0,0.2c-0.4-0.1-0.7-0.4-0.8-0.7c-0.1-0.4-0.1-0.8,0.1-1c0.2-0.3,0.4-0.5,0.6-0.6\n\tc0.1-0.1,0.2-0.1,0.2-0.2c0,0.1-0.1,0.3-0.2,0.4c0,0,0,0,0,0.1c0,0,0,0,0.1,0c0,0,0.1-0.1,0.2-0.1l0,0.3c0,0,0,0,0,0c0,0,0,0,0.1,0\n\tC11.9,10,12,9.9,12,9.8l0.1,0.2c0,0,0,0,0,0c0,0,0,0,0,0c0.1-0.1,0.1-0.1,0.2-0.2l0.1,0.2c0,0,0,0,0,0c0,0,0,0,0,0l0.1-0.2l0.1,0.3\n\tc0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l0.3-0.2c0.1,0.1,0.3,0.1,0.3,0.1c0,0,0,0,0,0c0,0,0,0,0,0l0-0.2l0.2,0c0,0,0,0,0.1,0\n\tc0,0,0-0.1,0-0.1c0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c0.1,0,2.4,0.2,2.9-0.2c0.3-0.2,0.3-0.4,0.2-0.5c-0.1-0.2-0.3-0.3-0.6-0.3\n\tc-0.1,0-0.2,0-0.3,0.1c-0.3,0.1-0.7,0.1-1,0.1c-0.1,0-0.2-0.1-0.3-0.1c-0.2-0.1-0.3-0.1-0.4,0c0,0-0.1,0.1-0.1,0.1\n\tc-0.1-0.1-0.1-0.2,0-0.3c0,0,0,0,0-0.1c0,0-0.3-0.3-0.2-0.7c0.1-0.3,0.6-0.5,1.2-0.4c0.5,0.1,1,0.4,1.4,0.7c0.2,0.2,0.3,0.2,0.4,0.3\n\tc0,0,0,0,0,0c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.1,0.1C17.1,8,17.1,8.1,17.1,8.1z M15.4,13.2\n\tc-0.1,0-0.1,0-0.2,0c0,0,0,0-0.1,0c0,0-0.2,0.1-0.3,0c0,0,0,0-0.1,0c0,0-0.2,0.1-0.3,0c0,0,0,0-0.1,0c-0.1,0-0.2,0.1-0.2,0.1\n\tc0,0,0,0,0,0c0-0.1,0-0.1,0.1-0.1c0.1-0.1,0.2-0.1,0.3-0.1c0.2,0,0.3-0.1,0.4-0.2c0-0.1,0.1-0.6-0.1-0.8c0-0.1-0.1-0.1-0.1-0.2\n\tc-0.1-0.2-0.3-0.3-0.2-0.6c0.3,0,0.5,0.1,0.7,0.3c0.1,0.1,0.2,0.2,0.3,0.3c0,0-0.1,0.1-0.1,0.2c0,0,0,0.1,0,0.1\n\tc0.1,0.1,0.2,0.1,0.2,0.1c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.2c-0.1,0.1-0.2,0.2-0.2,0.3c0,0.1,0,0.1,0,0.2C15.4,13,15.5,13.2,15.4,13.2\n\tC15.5,13.2,15.4,13.2,15.4,13.2z M15.6,12.5c0.1-0.1,0.2-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0,0,0\n\tc0-0.1,0.1-0.1,0.1-0.2c0,0,0.1,0,0.1,0.1c0.1,0.1,0.2,0.1,0.3,0.2c0.2,0.1,0.2,0.2,0.2,0.4c0,0,0,0.1,0,0.2c0,0.1-0.1,0.2-0.2,0.2\n\tc0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.2,0-0.3,0.1c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0-0.2C15.5,12.7,15.6,12.6,15.6,12.5z M10.3,11.5\n\tC10.2,11.5,10.2,11.5,10.3,11.5c-0.1,0-0.1-0.1-0.1-0.2c0-0.2,0-0.3-0.1-0.3c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1\n\tc0,0,0-0.1,0-0.2c0,0,0,0,0-0.1c0.2,0.3,0.5,0.5,0.6,0.5c0,0.1,0,0.1,0.1,0.2c0.1,0.2,0.2,0.4,0.4,0.5c-0.1,0.1-0.3,0.3-0.5,0.1\n\tc-0.1-0.1-0.2-0.1-0.2-0.2C10.4,11.6,10.3,11.5,10.3,11.5z M9.8,12C9.8,12,9.8,12,9.8,12C9.9,12,9.9,12,9.8,12c0.1,0,0.1,0,0.1-0.1\n\tc0,0,0,0,0,0c0,0,0,0,0,0.1c0,0.1-0.1,0.1-0.2,0.1c0,0,0,0-0.1,0c0,0,0,0,0,0.1l0.1,0.1l-0.1,0c0,0,0,0,0,0c0,0,0,0.1-0.1,0.1\n\tc0-0.1-0.1-0.1-0.1-0.1c0,0,0,0,0,0l-0.1,0l0.1-0.1c0,0,0,0,0-0.1c0,0,0,0-0.1,0c-0.1,0-0.2,0-0.2-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0\n\tc0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c0.1-0.2,0.1-0.3,0-0.4c0.1-0.1,0.1-0.2,0.1-0.2c0,0,0,0,0-0.1c0,0,0,0-0.1,0\n\tc0,0-0.1,0-0.2,0c0,0,0-0.1,0-0.1c0,0,0,0,0.1,0c0.1,0,0.1,0,0.2,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0.1,0,0.2,0\n\tc0.1,0,0.1,0,0.1,0c0,0,0,0.1,0,0.1c-0.1,0-0.1,0-0.2,0c0,0,0,0-0.1,0c0,0,0,0,0,0.1c0,0,0.1,0.1,0.1,0.2C9.7,11.7,9.7,11.8,9.8,12z\n\t M10,10.5C10,10.5,10,10.5,10,10.5c0,0.1,0,0.2,0,0.2c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1\n\tc0,0,0,0.1-0.1,0.1c0,0-0.1,0-0.2,0c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0\n\tc0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0-0.1,0-0.1\n\tc0.1,0,0.1,0,0.2,0c0,0,0,0,0,0c0.1,0,0.3,0,0.4-0.1c0,0,0,0,0,0C10,10.4,10,10.5,10,10.5z M9.6,10.3c-0.3,0-0.5-0.1-0.5-0.2\n\tc0,0,0-0.1,0-0.1c0,0,0.1-0.1,0.2-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0.2,0.1,0.5,0.1,0.5,0c0,0,0,0,0,0\n\tc0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0.1,0,0.1,0c0.1,0,0.1,0.1,0.1,0.2c0,0,0,0.1-0.1,0.1C10,10.3,9.8,10.3,9.6,10.3z M9.8,10\n\tc-0.1,0-0.2,0-0.4,0c0,0,0-0.1,0-0.2c0,0,0,0,0,0l0-1.7c0-1,0.5-1.3,0.7-1.5C10,7,9.9,7.9,9.9,9.9C9.8,9.9,9.8,10,9.8,10z M11.3,9.1\n\tl-0.1,0.1c0,0-0.1-0.1-0.1-0.1c0,0,0,0-0.1,0l-0.2,0.1l0-0.1c0,0,0,0,0-0.1c0,0,0,0,0,0l-0.2,0l0.1-0.2c0.1,0,0.4,0.1,0.6,0.1l0,0\n\tc0,0,0,0,0,0.1c0,0,0,0,0.1,0c0,0,0.3-0.1,0.5,0c0,0,0,0,0.1,0c0,0,0,0,0-0.1c-0.1-0.1-0.4-0.5-0.5-0.6c0,0,0,0-0.1,0c0,0,0,0,0,0\n\tl0,0.2c0,0-0.1-0.1-0.1-0.1c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0,0,0,0,0.1c-0.1-0.1-0.4-0.3-0.4-0.6c0-0.1,0-0.2,0-0.3c0,0,0.1,0,0.1,0\n\tc0,0,0.1,0,0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0,0.8-0.1,0.9-0.3c0,0,0-0.1,0-0.1c0.1,0,0.2-0.1,0.5,0.1\n\tc0,0,0,0,0.1,0c0.1,0,0.1-0.1,0.1-0.2c0.1,0,0.2,0,0.3,0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.2c0.1,0,0.2,0.1,0.3,0.2\n\tc0,0,0,0,0,0c0,0,0.1,0,0.2,0c-0.3,0.2-0.7,0.3-0.7,0.3c0,0,0,0,0,0c0,0,0,0,0,0.1l0.1,0.1c-0.3,0-0.4-0.1-0.4-0.1c0,0,0,0-0.1,0\n\tc0,0,0,0,0,0.1L12.4,8c-0.1,0-0.2-0.1-0.3-0.1c-0.1-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.1,0.1-0.1,0.1c0,0.1,0,0.1,0.1,0.2\n\tc0,0,0.1,0,0.1,0c0,0,0.1,0,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0.1,0.1,0.3,0.1,0.4,0.1c0,0,0,0,0,0c0,0,0,0,0-0.1l0-0.1\n\tC12.7,8,12.8,8,13,8c0,0,0,0,0,0c0,0,0,0,0-0.1L13,7.8c0.2,0,0.5-0.1,0.7-0.3c0,0.1-0.1,0.2-0.2,0.3c0,0,0,0,0,0c0,0,0,0,0,0\n\tc0,0,0.2,0.2,0.1,0.8c-0.1-0.1-0.3-0.2-0.4-0.4c0,0,0,0-0.1,0c0,0,0,0,0,0.1c0,0.1,0,0.2,0,0.3c-0.1,0-0.1-0.1-0.2-0.2\n\tc0,0,0,0-0.1,0c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c-0.1,0-0.1-0.1-0.2-0.1c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0.1,0,0.2,0,0.2\n\tc0,0-0.1-0.1-0.2-0.1c0,0,0,0-0.1,0c0,0,0,0,0,0l0,0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0.1,0,0.1\n\tc0.1,0.1,0.2,0.2,0.2,0.2c0,0,0,0,0,0c0,0,0,0,0,0l0-0.1c0.1,0.1,0.2,0.1,0.2,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0-0.1,0-0.2\n\tc0.1,0.1,0.2,0.1,0.2,0.1c0,0,0.1,0,0.1,0c0,0,0-0.1,0-0.1c0.1,0.1,0.2,0.2,0.2,0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0-0.1,0-0.2\n\tc0.1,0.1,0.2,0.2,0.3,0.2c0,0,0,0,0,0c0,0,0,0.2,0,0.3c-0.1,0-0.2-0.1-0.4-0.2c0,0,0,0,0,0c0,0,0,0,0,0l0,0.1l-0.2-0.1\n\tc0,0,0,0-0.1,0c0,0,0,0,0,0l0,0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0.1,0,0.1c0.1,0.1,0.2,0.2,0.2,0.2c0,0,0,0,0.1,0\n\tc0,0,0,0,0,0l0-0.1l0.2,0.1c0,0,0,0,0,0c0,0,0,0,0,0l0-0.1c0.1,0.1,0.2,0.1,0.3,0.2c0,0,0,0.2,0.1,0.3c-0.1,0-0.2,0-0.4-0.1\n\tc0,0-0.1,0-0.1,0L13,9.4l-0.3-0.2c0,0,0,0,0,0c0,0,0,0,0,0l0,0.1c-0.1-0.1-0.1-0.2-0.2-0.2c0,0-0.1,0-0.1,0c0,0-0.1,0.1-0.2,0.1\n\tl-0.1-0.2c0,0,0,0-0.1,0c0,0,0,0,0,0.1l0.1,0.2c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0,0.2-0.1,0.2-0.2c0,0.1,0.1,0.1,0.2,0.2c0,0,0,0,0,0\n\tc0,0,0,0,0,0l0.1-0.2L13,9.6c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l0.1-0.1c0.1,0.1,0.3,0.1,0.4,0.1c0,0,0,0,0,0c0,0,0,0,0.1,0.1\n\tl-0.1,0c0,0,0,0,0,0c0,0,0,0,0,0l0,0.2c-0.1,0-0.2,0-0.3-0.1c0,0,0,0-0.1,0l-0.2,0.1l-0.1-0.3c0,0,0,0,0,0c0,0,0,0-0.1,0l-0.1,0.3\n\tl-0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1,0.1-0.2,0.2l-0.1-0.2c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0-0.1,0.1-0.1,0.2l0-0.2c0,0,0,0,0,0\n\tc0,0,0,0-0.1,0c0,0-0.1,0-0.1,0.1c0.1-0.1,0.1-0.3,0.1-0.4c0,0,0,0-0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0\n\tc0,0,0,0,0,0c-0.1,0-0.1,0-0.1,0c0,0,0,0-0.1,0.1C11.4,9.3,11.4,9.2,11.3,9.1C11.4,9.1,11.3,9.1,11.3,9.1\n\tC11.3,9.1,11.3,9.1,11.3,9.1z M10.9,8.6c0.3,0.1,0.6,0.2,0.7,0.2c0,0.1,0.1,0.1,0.1,0.2c-0.1,0-0.2,0-0.2,0l0,0c0,0,0,0,0-0.1\n\tc0,0,0,0,0,0c-0.4,0-0.8-0.1-0.8-0.1c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0-0.1-0.1c0,0,0-0.1,0-0.1C10.7,8.5,10.8,8.5,10.9,8.6z\n\t M11.4,8.6C11.4,8.6,11.4,8.6,11.4,8.6l0-0.1c0,0,0.1,0.1,0.1,0.1C11.5,8.6,11.4,8.6,11.4,8.6z M11.3,8.6\n\tC11.3,8.6,11.2,8.6,11.3,8.6C11.2,8.5,11.2,8.5,11.3,8.6C11.2,8.5,11.2,8.5,11.3,8.6C11.2,8.5,11.3,8.6,11.3,8.6z M12,8\n\tc0,0-0.1,0-0.1,0c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0,0C11.9,7.9,12,7.9,12,8L12,8C12,7.9,12,8,12,8z M14,8.8\n\tC14,8.8,14,8.8,14,8.8C14.1,8.8,14.1,8.8,14,8.8c0.1-0.1,0.1-0.1,0.1-0.2c0,0,0.1,0,0.3,0.1c0.1,0,0.2,0.1,0.3,0.1\n\tc0.3,0.1,0.7,0,1.1-0.1c0.1,0,0.2,0,0.3-0.1c0.2,0,0.4,0.1,0.5,0.2c0,0.1,0,0.2-0.2,0.3c-0.4,0.3-2.6,0.2-2.8,0.2\n\tc-0.1-0.1-0.1-0.2-0.1-0.2c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0-0.1c0-0.1-0.1-0.3-0.1-0.3c0,0,0,0,0,0c0,0,0,0,0,0\n\tc0.1-0.5,0-0.8-0.1-0.9c0,0,0,0,0,0c0,0.3,0.1,0.5,0.2,0.5C13.7,8.5,13.9,8.7,14,8.8z"}),a.createElement("path",{fill:"#FFD250",d:"M8.7,6.1c0-0.4-0.1-1.1-0.4-1.1C8.1,4.9,8,5,8,5c0,0,0,0,0,0l-0.1,0l0,0.1c0,0,0,0,0,0.1c0,0-0.2,0.2-0.1,0.4\n\tc0.1,0.1,0.3,0.2,0.5,0.3c0.1,0,0.2,0,0.2,0.1C8.6,5.9,8.6,6,8.7,6.1z"}),a.createElement("path",{fill:"#464655",d:"M8.2,4.8C8.1,4.8,7.9,4.9,7.9,5l-0.2,0c0,0,0,0,0,0c0,0,0,0,0,0l0,0.1C7.6,5.2,7.5,5.4,7.6,5.6\n\tC7.7,5.8,8,5.9,8.2,5.9c0.1,0,0.1,0,0.2,0.1C8.5,6,8.6,6.2,8.7,6.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0-0.1C8.8,6.2,8.8,4.9,8.2,4.8z\n\t M8.3,5.8C8.1,5.8,7.8,5.7,7.7,5.5C7.6,5.3,7.8,5.2,7.8,5.2c0,0,0,0,0-0.1l0-0.1l0.1,0c0,0,0,0,0,0c0,0,0.1-0.1,0.3-0.1\n\tc0.3,0,0.4,0.7,0.4,1.1C8.6,6,8.6,5.9,8.5,5.9C8.4,5.9,8.3,5.8,8.3,5.8z"}),a.createElement("path",{fill:"#FFD250",d:"M17.5,6.1c0-0.4,0.1-1.1,0.4-1.1c0.2,0,0.3,0.1,0.3,0.1c0,0,0,0,0,0l0.1,0l0,0.1c0,0,0,0,0,0.1\n\tc0,0,0.2,0.2,0.1,0.4c-0.1,0.1-0.3,0.2-0.5,0.3c-0.1,0-0.2,0-0.2,0.1C17.7,5.9,17.6,6,17.5,6.1z"}),a.createElement("path",{fill:"#464655",d:"M17.4,6.3C17.4,6.3,17.4,6.3,17.4,6.3C17.5,6.3,17.5,6.3,17.4,6.3c0.1,0.1,0.1,0,0.1,0C17.6,6.2,17.7,6,17.8,6\n\tc0,0,0.1,0,0.2-0.1c0.2-0.1,0.5-0.1,0.6-0.3c0.1-0.2,0-0.4-0.1-0.5l0-0.1c0,0,0,0,0,0c0,0,0,0,0,0l-0.2,0c0,0-0.2-0.1-0.3-0.1\n\tC17.4,4.9,17.4,6.2,17.4,6.3z M17.7,5.9c-0.1,0-0.2,0.1-0.2,0.2c0-0.4,0.1-1.1,0.4-1.1c0.2,0,0.3,0.1,0.3,0.1c0,0,0,0,0,0l0.1,0\n\tl0,0.1c0,0,0,0,0,0.1c0,0,0.2,0.2,0.1,0.4c-0.1,0.1-0.3,0.2-0.5,0.3C17.9,5.8,17.8,5.9,17.7,5.9z"}),a.createElement("path",{fill:"#FFD250",d:"M17.5,13.9c0,0.4,0.1,1.1,0.4,1.1c0.2,0,0.3-0.1,0.3-0.1c0,0,0,0,0,0l0.1,0l0-0.1c0,0,0,0,0-0.1\n\tc0,0,0.2-0.2,0.1-0.4c-0.1-0.1-0.3-0.2-0.5-0.3c-0.1,0-0.2,0-0.2-0.1C17.7,14.1,17.6,14,17.5,13.9z"}),a.createElement("path",{fill:"#464655",d:"M18,15.2c0.2,0,0.3-0.1,0.3-0.1l0.2,0c0,0,0,0,0,0c0,0,0,0,0,0l0-0.1c0.1-0.1,0.2-0.3,0.1-0.5\n\tc-0.1-0.2-0.4-0.3-0.6-0.3c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.2-0.2-0.3-0.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0.1\n\tC17.4,13.8,17.4,15.1,18,15.2z M17.9,14.2c0.2,0.1,0.5,0.1,0.5,0.3c0.1,0.2-0.1,0.3-0.1,0.4c0,0,0,0,0,0.1l0,0.1l-0.1,0c0,0,0,0,0,0\n\tc0,0-0.1,0.1-0.3,0.1c-0.3,0-0.4-0.7-0.4-1.1c0.1,0.1,0.1,0.1,0.2,0.2C17.8,14.1,17.9,14.2,17.9,14.2z"}),a.createElement("path",{fill:"#FFD250",d:"M8.7,13.9c0,0.4-0.1,1.1-0.4,1.1C8.1,15.1,8,15,8,15c0,0,0,0,0,0l-0.1,0l0-0.1c0,0,0,0,0-0.1\n\tc0,0-0.2-0.2-0.1-0.4c0.1-0.1,0.3-0.2,0.5-0.3c0.1,0,0.2,0,0.2-0.1C8.6,14.1,8.6,14,8.7,13.9z"}),a.createElement("path",{fill:"#464655",d:"M8.8,13.7C8.8,13.7,8.8,13.7,8.8,13.7C8.8,13.7,8.7,13.7,8.8,13.7c-0.1-0.1-0.1,0-0.1,0C8.6,13.8,8.5,14,8.4,14\n\tc0,0-0.1,0-0.2,0.1c-0.2,0.1-0.5,0.1-0.6,0.3c-0.1,0.2,0,0.4,0.1,0.5l0,0.1c0,0,0,0,0,0c0,0,0,0,0,0l0.2,0c0,0,0.2,0.1,0.3,0.1\n\tC8.8,15.1,8.8,13.8,8.8,13.7z M8.5,14.1c0.1,0,0.2-0.1,0.2-0.2c0,0.4-0.1,1.1-0.4,1.1C8.1,15.1,8,15,8,15c0,0,0,0,0,0l-0.1,0l0-0.1\n\tc0,0,0,0,0-0.1c0,0-0.2-0.2-0.1-0.4c0.1-0.1,0.3-0.2,0.5-0.3C8.3,14.2,8.4,14.1,8.5,14.1z"}));var at=({size:e})=>a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 20 20",width:e,height:e},a.createElement("g",{id:"Layer_2_1_"},a.createElement("g",{id:"Flag"},a.createElement("rect",{y:"4.7",fill:"#FFFFFF",width:"20",height:"10.5"}),a.createElement("polygon",{fill:"#CE1124",points:"20,8.9 11.2,8.9 11.2,4.7 8.8,4.7 8.8,8.9 0,8.9 0,11 8.8,11 8.8,15.3 11.2,15.3 11.2,11 20,11 \t\t"}),a.createElement("polygon",{fill:"#00247D",points:"0,6 0,8.2 4.4,8.2 \t\t"}),a.createElement("polygon",{fill:"#00247D",points:"2.4,4.7 2.3,4.7 8,7.7 8,4.7 \t\t"}),a.createElement("polygon",{fill:"#CE1124",points:"6.7,8.2 0,4.7 0,5.6 5.1,8.2 \t\t"}),a.createElement("polygon",{fill:"#CE1124",points:"13.3,11.8 20,15.3 20,14.4 14.9,11.8 \t\t"}),a.createElement("polygon",{fill:"#00247D",points:"0,14.1 0,11.8 4.4,11.8 \t\t"}),a.createElement("polygon",{fill:"#00247D",points:"2.4,15.3 2.3,15.3 8,12.3 8,15.3 \t\t"}),a.createElement("polygon",{fill:"#CE1124",points:"6.7,11.8 0,15.3 1.6,15.3 8,11.9 8,11.8 \t\t"}),a.createElement("polygon",{fill:"#00247D",points:"20,6 20,8.2 15.6,8.2 \t\t"}),a.createElement("polygon",{fill:"#00247D",points:"17.6,4.7 17.7,4.7 12,7.7 12,4.7 \t\t"}),a.createElement("polygon",{fill:"#CE1124",points:"20,4.7 18.5,4.7 12,8.1 12,8.2 13.4,8.2 \t\t"}),a.createElement("polygon",{fill:"#00247D",points:"20,14 20,11.8 15.6,11.8 \t\t"}),a.createElement("polygon",{fill:"#00247D",points:"17.6,15.3 17.7,15.3 12,12.3 12,15.3 \t\t"}))));var it=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:e,width:e,viewBox:"0 0 20 20",color:t,fill:"currentColor",stroke:"currentColor",strokeWidth:"0"},a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("g",{id:"Line_323","data-name":"Line 323"},a.createElement("path",{d:"M.56,18a.5.5,0,0,1-.5-.5v-2a.5.5,0,0,1,.5-.5.5.5,0,0,1,.5.5v2A.5.5,0,0,1,.56,18Z"})),a.createElement("path",{d:"M17.56,7a.5.5,0,0,0-.5.5v10a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5V7.5A.5.5,0,0,0,17.56,7Z"}),a.createElement("path",{d:"M5.56,13a.5.5,0,0,0-.5.5v4a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,5.56,13Z"}),a.createElement("path",{d:"M11.56,10a.5.5,0,0,0-.5.5v7a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5v-7A.5.5,0,0,0,11.56,10Z"}),a.createElement("path",{d:"M18.06.5a.5.5,0,0,0-.5-.5h-4a.5.5,0,0,0,0,1h2.92L9.67,7H5.83a.55.55,0,0,0-.34.13l-5.33,5a.5.5,0,0,0,0,.7.5.5,0,0,0,.37.16.5.5,0,0,0,.34-.13L6,8H9.86a.5.5,0,0,0,.33-.12l6.87-6.06V4.5a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5V.71a.29.29,0,0,0,0-.09A.5.5,0,0,0,18.06.5Z"}))));var ot=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24"},a.createElement("g",{id:"support",transform:"translate(-470 -379)"},a.createElement("path",{id:"Path_1803",d:"M478.434 384.491a1.7 1.7 0 0 0-1.7 1.7h.851a.851.851 0 1 1 1.7 0 .84.84 0 0 1-.277.627l-1 .916v1.038h.851v-.664l.723-.661a1.7 1.7 0 0 0-1.148-2.958z",className:"cls-1",transform:"translate(2.167 1.748)",fill:t}),a.createElement("path",{id:"Rectangle_1588",d:"M0 0H0.851V0.851H0z",fill:t,transform:"translate(480.166 391.164)"}),a.createElement("path",{id:"Path_1804",d:"M482 379a12 12 0 1 0 12 12 12 12 0 0 0-12-12zm-4.083 14.685l-2.565.709.711-2.565a5.247 5.247 0 1 1 1.855 1.856zm11.161 3.961l-2.167-.6a4.45 4.45 0 0 1-6.237-1.829 6.069 6.069 0 0 0 5.976-5.976 4.454 4.454 0 0 1 1.829 6.239z",fill:t,className:"cls-1"})));var lt=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24"},a.createElement("g",{id:"tag",transform:"translate(3 3)"},a.createElement("g",{id:"tag-2",strokeLinecap:"round",strokeLinejoin:"round","data-name":"tag",transform:"translate(.852 -.146)"},a.createElement("path",{id:"Path_2115",fill:t,stroke:t,d:"M15.882 10.52l-5.354 5.354a1.493 1.493 0 0 1-2.113 0L2 9.467V2h7.467l6.414 6.414a1.493 1.493 0 0 1 .001 2.106z","data-name":"Path 2115"}),a.createElement("path",{id:"Line_302",fill:"none",stroke:"#fff",strokeWidth:"3px",d:"M0 0L0 0","data-name":"Line 302",transform:"translate(6.145 6.146)"}))));var ut=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:"20",viewBox:"0 0 20.725 20"},a.createElement("g",{id:"tax",transform:"translate(-707.615 -667)"},a.createElement("g",{id:"Group_1779","data-name":"Group 1779",transform:"translate(213.72 411.716)"},a.createElement("path",{id:"Path_1693","data-name":"Path 1693",d:"M496.187,263.395h-2.042V262h5.662v1.395h-2.044v5.763h-1.576Z",transform:"translate(0)",fill:t,stroke:t,strokeWidth:"0.5"}),a.createElement("path",{id:"Path_1694","data-name":"Path 1694",d:"M500.518,262h1.305l3.114,7.158h-1.78l-.617-1.517H499.76l-.6,1.517h-1.739Zm.606,2.082-.868,2.225H502Z",transform:"translate(1.715)",fill:t,stroke:t,strokeWidth:"0.5"}),a.createElement("path",{id:"Path_1695","data-name":"Path 1695",d:"M504.991,265.417,502.626,262h1.981l1.527,2.507L507.6,262h1.911l-2.316,3.387,2.589,3.771H507.8l-1.75-2.881-1.7,2.881h-1.87Z",transform:"translate(4.36)",fill:t,stroke:t,strokeWidth:"0.5"})),a.createElement("rect",{id:"Rectangle_923","data-name":"Rectangle 923",width:"20",height:"20",transform:"translate(707.865 667)",fill:"#fff",opacity:"0"})));var st=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 20 20"},a.createElement("g",{id:"prefix__trash-2",transform:"translate(6 6)"},a.createElement("path",{id:"prefix__Path_1666",d:"M3 6h11",className:"prefix__cls-1","data-name":"Path 1666",transform:"translate(-3 -3.556)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{id:"prefix__Path_1667",d:"M12.944 4.444V13a1.181 1.181 0 0 1-1.135 1.222H6.135A1.181 1.181 0 0 1 5 13V4.444m1.7 0V3.222A1.181 1.181 0 0 1 7.837 2h2.27a1.181 1.181 0 0 1 1.135 1.222v1.222",className:"prefix__cls-1","data-name":"Path 1667",transform:"translate(-3.472 -2)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{id:"prefix__Line_212",d:"M0 0L0 4.583",className:"prefix__cls-1","data-name":"Line 212",transform:"translate(4.278 4.987)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{id:"prefix__Line_213",d:"M0 0L0 4.583",className:"prefix__cls-1","data-name":"Line 213",transform:"translate(6.722 4.987)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round"})));var ct=({size:e})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:e,height:e},a.createElement("path",{fill:"#73AF00",d:"M20,7.8H6.2V3.4h13.4c0.2,0,0.3,0.2,0.3,0.3L20,7.8L20,7.8z"}),a.createElement("path",{fill:"#464655",d:"M19.7,16.6H6.2v-4.4H20v4C20,16.4,19.8,16.6,19.7,16.6z"}),a.createElement("rect",{x:"6.2",y:"7.8",fill:"#F5F5F5",width:"13.8",height:"4.4"}),a.createElement("path",{fill:"#FF4B55",d:"M6.2,16.6H0.3c-0.2,0-0.3-0.2-0.3-0.3V3.8c0-0.2,0.2-0.3,0.3-0.3h5.9V16.6z"}));var dt=({size:e})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:e,height:e},a.createElement("path",{fill:"#F5F5F5",d:"M19.7,16.6H0.3c-0.2,0-0.3-0.2-0.3-0.3V3.8c0-0.2,0.2-0.3,0.3-0.3h19.3c0.2,0,0.3,0.2,0.3,0.3v12.4\n\tC20,16.4,19.8,16.6,19.7,16.6z"}),a.createElement("g",null,a.createElement("path",{fill:"#FF4B55",d:"M20,4.5H0V3.8c0-0.2,0.2-0.3,0.3-0.3h19.3c0.2,0,0.3,0.2,0.3,0.3L20,4.5L20,4.5z"}),a.createElement("rect",{y:"7.5",fill:"#FF4B55",width:"20",height:"1"}),a.createElement("rect",{y:"5.5",fill:"#FF4B55",width:"20",height:"1"}),a.createElement("path",{fill:"#FF4B55",d:"M20,10.5H0.3c-0.2,0-0.3-0.2-0.3-0.3V9.5h20V10.5z"}),a.createElement("rect",{y:"13.5",fill:"#FF4B55",width:"20",height:"1"}),a.createElement("path",{fill:"#FF4B55",d:"M19.7,16.6H0.3c-0.2,0-0.3-0.2-0.3-0.3v-0.7h20v0.7C20,16.4,19.8,16.6,19.7,16.6z"}),a.createElement("rect",{y:"11.5",fill:"#FF4B55",width:"20",height:"1"})),a.createElement("path",{fill:"#41479B",d:"M9,3.4H0.3C0.2,3.4,0,3.6,0,3.8v6.4c0,0.2,0.2,0.3,0.3,0.3H9c0.2,0,0.3-0.2,0.3-0.3V3.8C9.3,3.6,9.2,3.4,9,3.4z\n\t"}),a.createElement("g",null,a.createElement("path",{fill:"#F5F5F5",d:"M1,4.2L1,4.5l0.2,0c0,0,0,0,0,0.1L1.1,4.7l0.1,0.2c0,0,0,0.1,0,0L0.9,4.8L0.7,4.9c0,0-0.1,0,0,0l0.1-0.2\n\t\tL0.6,4.5c0,0,0-0.1,0-0.1l0.2,0L1,4.2C0.9,4.2,1,4.2,1,4.2z"}),a.createElement("path",{fill:"#F5F5F5",d:"M1,5.4L1,5.7l0.2,0c0,0,0,0,0,0.1L1.1,5.9l0.1,0.2c0,0,0,0.1,0,0L0.9,6L0.7,6.1c0,0-0.1,0,0,0l0.1-0.2L0.6,5.7\n\t\tc0,0,0-0.1,0-0.1l0.2,0L1,5.4C0.9,5.4,1,5.4,1,5.4z"}),a.createElement("path",{fill:"#F5F5F5",d:"M1,6.6L1,6.9l0.2,0c0,0,0,0,0,0.1L1.1,7.1l0.1,0.2c0,0,0,0.1,0,0L0.9,7.2L0.7,7.3c0,0-0.1,0,0,0l0.1-0.2\n\t\tL0.6,6.9c0,0,0-0.1,0-0.1l0.2,0L1,6.6C0.9,6.6,1,6.6,1,6.6z"}),a.createElement("path",{fill:"#F5F5F5",d:"M1,7.8L1,8.1l0.2,0c0,0,0,0,0,0.1L1.1,8.3l0.1,0.2c0,0,0,0.1,0,0L0.9,8.4L0.7,8.5c0,0-0.1,0,0,0l0.1-0.2\n\t\tL0.6,8.1c0,0,0-0.1,0-0.1l0.2,0L1,7.8C0.9,7.8,1,7.8,1,7.8z"}),a.createElement("path",{fill:"#F5F5F5",d:"M1,9L1,9.3l0.2,0c0,0,0,0,0,0.1L1.1,9.5l0.1,0.2c0,0,0,0.1,0,0L0.9,9.6L0.7,9.7c0,0-0.1,0,0,0l0.1-0.2L0.6,9.3\n\t\tc0,0,0-0.1,0-0.1l0.2,0L1,9C0.9,9,1,9,1,9z"}),a.createElement("path",{fill:"#F5F5F5",d:"M1.9,4.8L2,5.1l0.2,0c0,0,0,0,0,0.1L2,5.3l0.1,0.2c0,0,0,0.1,0,0L1.9,5.4L1.7,5.5c0,0-0.1,0,0,0l0.1-0.2\n\t\tL1.5,5.1c0,0,0-0.1,0-0.1l0.2,0L1.9,4.8C1.8,4.8,1.9,4.8,1.9,4.8z"}),a.createElement("path",{fill:"#F5F5F5",d:"M1.9,6L2,6.3l0.2,0c0,0,0,0,0,0.1L2,6.5l0.1,0.2c0,0,0,0.1,0,0L1.9,6.6L1.7,6.7c0,0-0.1,0,0,0l0.1-0.2L1.5,6.3\n\t\tc0,0,0-0.1,0-0.1l0.2,0L1.9,6C1.8,6,1.9,6,1.9,6z"}),a.createElement("path",{fill:"#F5F5F5",d:"M1.9,7.2L2,7.5l0.2,0c0,0,0,0,0,0.1L2,7.7l0.1,0.2c0,0,0,0.1,0,0L1.9,7.8L1.7,7.9c0,0-0.1,0,0,0l0.1-0.2\n\t\tL1.5,7.5c0,0,0-0.1,0-0.1l0.2,0L1.9,7.2C1.8,7.2,1.9,7.2,1.9,7.2z"}),a.createElement("path",{fill:"#F5F5F5",d:"M1.9,8.4L2,8.6l0.2,0c0,0,0,0,0,0.1L2,8.9l0.1,0.2c0,0,0,0.1,0,0L1.9,9L1.7,9.1c0,0-0.1,0,0,0l0.1-0.2L1.5,8.7\n\t\tc0,0,0-0.1,0-0.1l0.2,0L1.9,8.4C1.8,8.4,1.9,8.4,1.9,8.4z"}),a.createElement("path",{fill:"#F5F5F5",d:"M2.8,4.2l0.1,0.2l0.2,0c0,0,0,0,0,0.1L3,4.7L3,4.9c0,0,0,0.1,0,0L2.8,4.8L2.6,4.9c0,0-0.1,0,0,0l0.1-0.2\n\t\tL2.4,4.5c0,0,0-0.1,0-0.1l0.2,0L2.8,4.2C2.8,4.2,2.8,4.2,2.8,4.2z"}),a.createElement("path",{fill:"#F5F5F5",d:"M2.8,5.4l0.1,0.2l0.2,0c0,0,0,0,0,0.1L3,5.9L3,6.1c0,0,0,0.1,0,0L2.8,6L2.6,6.1c0,0-0.1,0,0,0l0.1-0.2L2.4,5.7\n\t\tc0,0,0-0.1,0-0.1l0.2,0L2.8,5.4C2.8,5.4,2.8,5.4,2.8,5.4z"}),a.createElement("path",{fill:"#F5F5F5",d:"M2.8,6.6l0.1,0.2l0.2,0c0,0,0,0,0,0.1L3,7.1L3,7.3c0,0,0,0.1,0,0L2.8,7.2L2.6,7.3c0,0-0.1,0,0,0l0.1-0.2\n\t\tL2.4,6.9c0,0,0-0.1,0-0.1l0.2,0L2.8,6.6C2.8,6.6,2.8,6.6,2.8,6.6z"}),a.createElement("path",{fill:"#F5F5F5",d:"M2.8,7.8l0.1,0.2l0.2,0c0,0,0,0,0,0.1L3,8.3L3,8.5c0,0,0,0.1,0,0L2.8,8.4L2.6,8.5c0,0-0.1,0,0,0l0.1-0.2\n\t\tL2.4,8.1c0,0,0-0.1,0-0.1l0.2,0L2.8,7.8C2.8,7.8,2.8,7.8,2.8,7.8z"}),a.createElement("path",{fill:"#F5F5F5",d:"M2.8,9l0.1,0.2l0.2,0c0,0,0,0,0,0.1L3,9.5L3,9.7c0,0,0,0.1,0,0L2.8,9.6L2.6,9.7c0,0-0.1,0,0,0l0.1-0.2L2.4,9.3\n\t\tc0,0,0-0.1,0-0.1l0.2,0L2.8,9C2.8,9,2.8,9,2.8,9z"}),a.createElement("path",{fill:"#F5F5F5",d:"M3.8,4.8l0.1,0.2l0.2,0c0,0,0,0,0,0.1L3.9,5.3L4,5.5c0,0,0,0.1,0,0L3.7,5.4L3.5,5.5c0,0-0.1,0,0,0l0.1-0.2\n\t\tL3.4,5.1c0,0,0-0.1,0-0.1l0.2,0L3.8,4.8C3.7,4.8,3.7,4.8,3.8,4.8z"}),a.createElement("path",{fill:"#F5F5F5",d:"M3.8,6l0.1,0.2l0.2,0c0,0,0,0,0,0.1L3.9,6.5L4,6.7c0,0,0,0.1,0,0L3.7,6.6L3.5,6.7c0,0-0.1,0,0,0l0.1-0.2\n\t\tL3.4,6.3c0,0,0-0.1,0-0.1l0.2,0L3.8,6C3.7,6,3.7,6,3.8,6z"}),a.createElement("path",{fill:"#F5F5F5",d:"M3.8,7.2l0.1,0.2l0.2,0c0,0,0,0,0,0.1L3.9,7.7L4,7.9c0,0,0,0.1,0,0L3.7,7.8L3.5,7.9c0,0-0.1,0,0,0l0.1-0.2\n\t\tL3.4,7.5c0,0,0-0.1,0-0.1l0.2,0L3.8,7.2C3.7,7.2,3.7,7.2,3.8,7.2z"}),a.createElement("path",{fill:"#F5F5F5",d:"M3.8,8.4l0.1,0.2l0.2,0c0,0,0,0,0,0.1L3.9,8.9L4,9.1c0,0,0,0.1,0,0L3.7,9L3.5,9.1c0,0-0.1,0,0,0l0.1-0.2\n\t\tL3.4,8.7c0,0,0-0.1,0-0.1l0.2,0L3.8,8.4C3.7,8.4,3.7,8.4,3.8,8.4z"}),a.createElement("path",{fill:"#F5F5F5",d:"M4.7,4.2l0.1,0.2l0.2,0c0,0,0,0,0,0.1L4.8,4.7l0.1,0.2c0,0,0,0.1,0,0L4.7,4.8L4.5,4.9c0,0-0.1,0,0,0l0.1-0.2\n\t\tL4.3,4.5c0,0,0-0.1,0-0.1l0.2,0L4.7,4.2C4.6,4.2,4.7,4.2,4.7,4.2z"}),a.createElement("path",{fill:"#F5F5F5",d:"M4.7,5.4l0.1,0.2l0.2,0c0,0,0,0,0,0.1L4.8,5.9l0.1,0.2c0,0,0,0.1,0,0L4.7,6L4.5,6.1c0,0-0.1,0,0,0l0.1-0.2\n\t\tL4.3,5.7c0,0,0-0.1,0-0.1l0.2,0L4.7,5.4C4.6,5.4,4.7,5.4,4.7,5.4z"}),a.createElement("path",{fill:"#F5F5F5",d:"M4.7,6.6l0.1,0.2l0.2,0c0,0,0,0,0,0.1L4.8,7.1l0.1,0.2c0,0,0,0.1,0,0L4.7,7.2L4.5,7.3c0,0-0.1,0,0,0l0.1-0.2\n\t\tL4.3,6.9c0,0,0-0.1,0-0.1l0.2,0L4.7,6.6C4.6,6.6,4.7,6.6,4.7,6.6z"}),a.createElement("path",{fill:"#F5F5F5",d:"M4.7,7.8l0.1,0.2l0.2,0c0,0,0,0,0,0.1L4.8,8.3l0.1,0.2c0,0,0,0.1,0,0L4.7,8.4L4.5,8.5c0,0-0.1,0,0,0l0.1-0.2\n\t\tL4.3,8.1c0,0,0-0.1,0-0.1l0.2,0L4.7,7.8C4.6,7.8,4.7,7.8,4.7,7.8z"}),a.createElement("path",{fill:"#F5F5F5",d:"M4.7,9l0.1,0.2l0.2,0c0,0,0,0,0,0.1L4.8,9.5l0.1,0.2c0,0,0,0.1,0,0L4.7,9.6L4.5,9.7c0,0-0.1,0,0,0l0.1-0.2\n\t\tL4.3,9.3c0,0,0-0.1,0-0.1l0.2,0L4.7,9C4.6,9,4.7,9,4.7,9z"}),a.createElement("path",{fill:"#F5F5F5",d:"M5.6,4.8l0.1,0.2l0.2,0c0,0,0,0,0,0.1L5.8,5.3l0.1,0.2c0,0,0,0.1,0,0L5.6,5.4L5.4,5.5c0,0-0.1,0,0,0l0.1-0.2\n\t\tL5.2,5.1c0,0,0-0.1,0-0.1l0.2,0L5.6,4.8C5.6,4.8,5.6,4.8,5.6,4.8z"}),a.createElement("path",{fill:"#F5F5F5",d:"M5.6,6l0.1,0.2l0.2,0c0,0,0,0,0,0.1L5.8,6.5l0.1,0.2c0,0,0,0.1,0,0L5.6,6.6L5.4,6.7c0,0-0.1,0,0,0l0.1-0.2\n\t\tL5.2,6.3c0,0,0-0.1,0-0.1l0.2,0L5.6,6C5.6,6,5.6,6,5.6,6z"}),a.createElement("path",{fill:"#F5F5F5",d:"M5.6,7.2l0.1,0.2l0.2,0c0,0,0,0,0,0.1L5.8,7.7l0.1,0.2c0,0,0,0.1,0,0L5.6,7.8L5.4,7.9c0,0-0.1,0,0,0l0.1-0.2\n\t\tL5.2,7.5c0,0,0-0.1,0-0.1l0.2,0L5.6,7.2C5.6,7.2,5.6,7.2,5.6,7.2z"}),a.createElement("path",{fill:"#F5F5F5",d:"M5.6,8.4l0.1,0.2l0.2,0c0,0,0,0,0,0.1L5.8,8.9l0.1,0.2c0,0,0,0.1,0,0L5.6,9L5.4,9.1c0,0-0.1,0,0,0l0.1-0.2\n\t\tL5.2,8.7c0,0,0-0.1,0-0.1l0.2,0L5.6,8.4C5.6,8.4,5.6,8.4,5.6,8.4z"}),a.createElement("path",{fill:"#F5F5F5",d:"M6.5,4.2l0.1,0.2l0.2,0c0,0,0,0,0,0.1L6.7,4.7l0.1,0.2c0,0,0,0.1,0,0L6.5,4.8L6.3,4.9c0,0-0.1,0,0,0l0.1-0.2\n\t\tL6.1,4.5c0,0,0-0.1,0-0.1l0.2,0L6.5,4.2C6.5,4.2,6.5,4.2,6.5,4.2z"}),a.createElement("path",{fill:"#F5F5F5",d:"M6.5,5.4l0.1,0.2l0.2,0c0,0,0,0,0,0.1L6.7,5.9l0.1,0.2c0,0,0,0.1,0,0L6.5,6L6.3,6.1c0,0-0.1,0,0,0l0.1-0.2\n\t\tL6.1,5.7c0,0,0-0.1,0-0.1l0.2,0L6.5,5.4C6.5,5.4,6.5,5.4,6.5,5.4z"}),a.createElement("path",{fill:"#F5F5F5",d:"M6.5,6.6l0.1,0.2l0.2,0c0,0,0,0,0,0.1L6.7,7.1l0.1,0.2c0,0,0,0.1,0,0L6.5,7.2L6.3,7.3c0,0-0.1,0,0,0l0.1-0.2\n\t\tL6.1,6.9c0,0,0-0.1,0-0.1l0.2,0L6.5,6.6C6.5,6.6,6.5,6.6,6.5,6.6z"}),a.createElement("path",{fill:"#F5F5F5",d:"M6.5,7.8l0.1,0.2l0.2,0c0,0,0,0,0,0.1L6.7,8.3l0.1,0.2c0,0,0,0.1,0,0L6.5,8.4L6.3,8.5c0,0-0.1,0,0,0l0.1-0.2\n\t\tL6.1,8.1c0,0,0-0.1,0-0.1l0.2,0L6.5,7.8C6.5,7.8,6.5,7.8,6.5,7.8z"}),a.createElement("path",{fill:"#F5F5F5",d:"M6.5,9l0.1,0.2l0.2,0c0,0,0,0,0,0.1L6.7,9.5l0.1,0.2c0,0,0,0.1,0,0L6.5,9.6L6.3,9.7c0,0-0.1,0,0,0l0.1-0.2\n\t\tL6.1,9.3c0,0,0-0.1,0-0.1l0.2,0L6.5,9C6.5,9,6.5,9,6.5,9z"}),a.createElement("path",{fill:"#F5F5F5",d:"M7.5,4.8l0.1,0.2l0.2,0c0,0,0,0,0,0.1L7.6,5.3l0.1,0.2c0,0,0,0.1,0,0L7.4,5.4L7.2,5.5c0,0-0.1,0,0,0l0.1-0.2\n\t\tL7.1,5.1c0,0,0-0.1,0-0.1l0.2,0L7.5,4.8C7.4,4.8,7.5,4.8,7.5,4.8z"}),a.createElement("path",{fill:"#F5F5F5",d:"M7.5,6l0.1,0.2l0.2,0c0,0,0,0,0,0.1L7.6,6.5l0.1,0.2c0,0,0,0.1,0,0L7.4,6.6L7.2,6.7c0,0-0.1,0,0,0l0.1-0.2\n\t\tL7.1,6.3c0,0,0-0.1,0-0.1l0.2,0L7.5,6C7.4,6,7.5,6,7.5,6z"}),a.createElement("path",{fill:"#F5F5F5",d:"M7.5,7.2l0.1,0.2l0.2,0c0,0,0,0,0,0.1L7.6,7.7l0.1,0.2c0,0,0,0.1,0,0L7.4,7.8L7.2,7.9c0,0-0.1,0,0,0l0.1-0.2\n\t\tL7.1,7.5c0,0,0-0.1,0-0.1l0.2,0L7.5,7.2C7.4,7.2,7.5,7.2,7.5,7.2z"}),a.createElement("path",{fill:"#F5F5F5",d:"M7.5,8.4l0.1,0.2l0.2,0c0,0,0,0,0,0.1L7.6,8.9l0.1,0.2c0,0,0,0.1,0,0L7.4,9L7.2,9.1c0,0-0.1,0,0,0l0.1-0.2\n\t\tL7.1,8.7c0,0,0-0.1,0-0.1l0.2,0L7.5,8.4C7.4,8.4,7.5,8.4,7.5,8.4z"}),a.createElement("path",{fill:"#F5F5F5",d:"M8.4,4.2l0.1,0.2l0.2,0c0,0,0,0,0,0.1L8.5,4.7l0.1,0.2c0,0,0,0.1,0,0L8.4,4.8L8.2,4.9c0,0-0.1,0,0,0l0.1-0.2\n\t\tL8,4.5c0,0,0-0.1,0-0.1l0.2,0L8.4,4.2C8.4,4.2,8.4,4.2,8.4,4.2z"}),a.createElement("path",{fill:"#F5F5F5",d:"M8.4,5.4l0.1,0.2l0.2,0c0,0,0,0,0,0.1L8.5,5.9l0.1,0.2c0,0,0,0.1,0,0L8.4,6L8.2,6.1c0,0-0.1,0,0,0l0.1-0.2\n\t\tL8,5.7c0,0,0-0.1,0-0.1l0.2,0L8.4,5.4C8.4,5.4,8.4,5.4,8.4,5.4z"}),a.createElement("path",{fill:"#F5F5F5",d:"M8.4,6.6l0.1,0.2l0.2,0c0,0,0,0,0,0.1L8.5,7.1l0.1,0.2c0,0,0,0.1,0,0L8.4,7.2L8.2,7.3c0,0-0.1,0,0,0l0.1-0.2\n\t\tL8,6.9c0,0,0-0.1,0-0.1l0.2,0L8.4,6.6C8.4,6.6,8.4,6.6,8.4,6.6z"}),a.createElement("path",{fill:"#F5F5F5",d:"M8.4,7.8l0.1,0.2l0.2,0c0,0,0,0,0,0.1L8.5,8.3l0.1,0.2c0,0,0,0.1,0,0L8.4,8.4L8.2,8.5c0,0-0.1,0,0,0l0.1-0.2\n\t\tL8,8.1c0,0,0-0.1,0-0.1l0.2,0L8.4,7.8C8.4,7.8,8.4,7.8,8.4,7.8z"}),a.createElement("path",{fill:"#F5F5F5",d:"M8.4,9l0.1,0.2l0.2,0c0,0,0,0,0,0.1L8.5,9.5l0.1,0.2c0,0,0,0.1,0,0L8.4,9.6L8.2,9.7c0,0-0.1,0,0,0l0.1-0.2\n\t\tL8,9.3c0,0,0-0.1,0-0.1l0.2,0L8.4,9C8.4,9,8.4,9,8.4,9z"})));var mt=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:e,width:e,viewBox:"0 0 18 16",color:t,fill:"currentColor",stroke:"currentColor",strokeWidth:"0.5"},a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("path",{fill:t,d:"M13.7,10.85A7.2,7.2,0,0,0,9,6.54a3.64,3.64,0,0,0,1.52-2.92h0A3.63,3.63,0,0,0,6.92,0h0A3.61,3.61,0,0,0,4.82,6.54,7.21,7.21,0,0,0,.16,10.85a2.2,2.2,0,0,0-.16.84,2.28,2.28,0,0,0,.68,1.63A2.25,2.25,0,0,0,2.31,14h9.24a2.4,2.4,0,0,0,.84-.15,2.31,2.31,0,0,0,1.31-3ZM9.54,3.62A2.62,2.62,0,0,1,6.92,6.23h0A2.62,2.62,0,1,1,9.54,3.62Zm3.21,8.59a1.33,1.33,0,0,1-.72.7,1.27,1.27,0,0,1-.48.08H2.31A1.3,1.3,0,0,1,1,11.69a1.36,1.36,0,0,1,.09-.48,6.27,6.27,0,0,1,11.68,0A1.29,1.29,0,0,1,12.75,12.21Z"}),a.createElement("path",{fill:t,d:"M18.06,10.85A7.22,7.22,0,0,0,13.5,6.57a3.59,3.59,0,0,0,1.56-2.95A3.63,3.63,0,0,0,11.44,0a3.88,3.88,0,0,0-.82.09.5.5,0,0,0,.23,1c.19-.05.4,0,.59-.07a2.62,2.62,0,1,1,0,5.23h-.15a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5,6.23,6.23,0,0,1,5.84,4,1.32,1.32,0,0,1-.74,1.7,1.34,1.34,0,0,1-.48.08H14.29a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h1.62a2.4,2.4,0,0,0,.84-.15,2.31,2.31,0,0,0,1.31-3Z"})));var pt=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 20 20"},a.createElement("g",{fill:t,transform:"translate(-.057)"},a.createElement("circle",{cx:"10",cy:"10",r:"10",opacity:"0.12",transform:"translate(.057)"}),a.createElement("path",{d:"M4.651 1.435a1 1 0 0 1 1.717 0L10.114 7.7a1 1 0 0 1-.858 1.513H1.763A1 1 0 0 1 .9 7.7z",transform:"rotate(-30 14.734 .322)"})));var ft=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 17.668 16.268"},a.createElement("g",{transform:"translate(-496.163 -398.415)"},a.createElement("path",{d:"M-16048.079,459.183h-9.84a3.341,3.341,0,0,1-2.922-1.688,3.342,3.342,0,0,1,0-3.375l4.918-8.518a3.346,3.346,0,0,1,2.924-1.687,3.337,3.337,0,0,1,2.921,1.687l4.918,8.518a3.344,3.344,0,0,1,0,3.377A3.336,3.336,0,0,1-16048.079,459.183Zm-4.922-4.352a.747.747,0,0,0-.517.2.763.763,0,0,0-.209.516.62.62,0,0,0,.057.274.76.76,0,0,0,.152.242.765.765,0,0,0,.517.21.762.762,0,0,0,.516-.21.751.751,0,0,0,.153-.242.646.646,0,0,0,.061-.274.768.768,0,0,0-.214-.516A.743.743,0,0,0-16053,454.831Zm0-6.8-.066,0a.984.984,0,0,0-.681.338.979.979,0,0,0-.242.714l.262,4.035a.731.731,0,0,0,.677.681h.049a.727.727,0,0,0,.729-.681l.262-4.035v-.129A.993.993,0,0,0-16053,448.035Z",transform:"translate(16558 -45)",fill:t,stroke:"rgba(0,0,0,0)",strokeMiterlimit:"10",strokeWidth:"1"})));var ht=({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 28 29"},a.createElement("g",{id:"invoice-due",transform:"translate(-579 -311.5)"},a.createElement("rect",{id:"Rectangle_914","data-name":"Rectangle 914",width:"28",height:"28",transform:"translate(579 312)",fill:"#fff",opacity:"0"}),a.createElement("g",{id:"invoice-due-2","data-name":"invoice-due",transform:"translate(0 -1)"},a.createElement("path",{id:"Subtraction_2","data-name":"Subtraction 2",d:"M23.4,28a1.44,1.44,0,0,1-.7-.181l-1.211-.651a1.442,1.442,0,0,0-1.4,0l-1.2.651a1.442,1.442,0,0,1-1.4,0l-1.2-.651a1.442,1.442,0,0,0-1.4,0l-1.2.651a1.442,1.442,0,0,1-1.4,0l-1.2-.651a1.444,1.444,0,0,0-1.4,0l-1.183.651a1.47,1.47,0,0,1-1.413,0l-1.183-.651a1.47,1.47,0,0,0-1.413,0l-1.183.651a1.442,1.442,0,0,1-1.4,0L.043,26.786,0,1.214,1.9.18a1.447,1.447,0,0,1,1.4,0L4.514.832a1.445,1.445,0,0,0,.7.18,1.441,1.441,0,0,0,.7-.18L7.109.18a1.447,1.447,0,0,1,1.4,0L9.7.832a1.445,1.445,0,0,0,.7.18,1.445,1.445,0,0,0,.7-.18L12.3.18a1.447,1.447,0,0,1,1.4,0l1.2.652a1.441,1.441,0,0,0,.7.18,1.445,1.445,0,0,0,.7-.18L17.478.18a1.475,1.475,0,0,1,1.413,0l1.183.652a1.5,1.5,0,0,0,.707.18,1.5,1.5,0,0,0,.706-.18L22.669.18a1.447,1.447,0,0,1,1.4,0L26,1.3V26.786l-1.9,1.033A1.437,1.437,0,0,1,23.4,28ZM13,7.9a6,6,0,1,0,6,6A6.007,6.007,0,0,0,13,7.9Z",transform:"translate(580 313)",fill:t,stroke:"rgba(0,0,0,0)",strokeMiterlimit:"10",strokeWidth:"1"}),a.createElement("g",{id:"Path_1747","data-name":"Path 1747",transform:"translate(592 323)"},a.createElement("path",{id:"Path_1684","data-name":"Path 1684",d:"M398.769,267.785a.783.783,0,0,1-.343-.081l-2.451-1.226a.76.76,0,0,1-.424-.684v-3.678a.765.765,0,0,1,1.53,0v3.2l2.029,1.014a.766.766,0,0,1-.341,1.45Z",transform:"translate(-395.551 -261.351)",fill:t})))));var gt=({size:e=24,color:t="#000"})=>{const n=26*e/21;return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:e,viewBox:`0 0 ${n} ${e}`},a.createElement("path",{d:"M16.368,19.034a13.763,13.763,0,0,0-3.744-.538,11.937,11.937,0,0,0-4.695.946c1.18-4.249,4.015-11.58,9.663-12.406a1.335,1.335,0,0,0,1.094-.949L19.92,1.746A1.3,1.3,0,0,0,19.75.667a1.344,1.344,0,0,0-.939-.583A9.531,9.531,0,0,0,17.548,0C10.769,0,4.055,6.958,1.222,16.921-.441,22.766-.928,31.554,3.168,37.085A12.3,12.3,0,0,0,13.108,42h.053a11.906,11.906,0,0,0,11.45-8.551,11.453,11.453,0,0,0-1.09-8.89A11.9,11.9,0,0,0,16.368,19.034Z",fill:t}),a.createElement("path",{d:"M23.52,24.56a11.9,11.9,0,0,0-7.153-5.525,13.762,13.762,0,0,0-3.744-.538,11.939,11.939,0,0,0-4.7.946c1.18-4.249,4.015-11.58,9.664-12.406a1.335,1.335,0,0,0,1.094-.949L19.92,1.746A1.3,1.3,0,0,0,19.75.667a1.342,1.342,0,0,0-.939-.583A9.519,9.519,0,0,0,17.548,0C10.769,0,4.055,6.958,1.222,16.921-.441,22.766-.928,31.554,3.169,37.087A12.3,12.3,0,0,0,13.108,42h.053a11.906,11.906,0,0,0,11.45-8.551A11.46,11.46,0,0,0,23.52,24.56Z",transform:"translate(26.945)",fill:t}))};var yt=({size:e,color:t="#000"})=>a.createElement("svg",{width:e,height:e,viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{"clip-path":"url(#clip0)"},a.createElement("path",{d:"M21.1957 24H3.80435C3.07971 24 2.5 23.4399 2.5 22.7398V1.26021C2.5 0.560093 3.07971 0 3.80435 0H14.1667C16.1667 1.96033 20.471 6.06763 22.5 7.99995V22.7398C22.5 23.4399 21.9203 24 21.1957 24Z",fill:t,"fill-opacity":"0.12"}),a.createElement("path",{d:"M22.5003 7.99994H14.167L14.2135 -6.10352e-05L22.5003 7.99994Z",fill:t,"fill-opacity":"0.12"})),a.createElement("defs",null,a.createElement("clipPath",{id:"clip0"},a.createElement("rect",{width:"24",height:"24",fill:"white",transform:"translate(0.5)"}))));var vt=({size:e,color:t="#000"})=>a.createElement("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M2.55556 2H13.4444C14.3 2 15 2.65 15 3.44444V13.5556C15 14.35 14.3 15 13.4444 15H2.55556C1.7 15 1 14.35 1 13.5556V3.44444C1 2.65 1.7 2 2.55556 2Z",stroke:t,"stroke-linecap":"round","stroke-linejoin":"round"}),a.createElement("path",{d:"M11.2002 0.727051V3.63614",stroke:t,"stroke-linecap":"round","stroke-linejoin":"round"}),a.createElement("path",{d:"M4.7998 0.727051V3.63614",stroke:t,"stroke-linecap":"round","stroke-linejoin":"round"}),a.createElement("path",{d:"M0.666992 6L14.667 6",stroke:t,"stroke-linejoin":"round"}));var bt=({size:e,color:t="#000"})=>a.createElement("svg",{width:e,height:e,viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M15 11.3555V5.47868C15 4.90996 14.7 4.43602 14.2 4.24645L8.8 1.21327C8.3 0.92891 7.7 0.92891 7.2 1.21327L1.8 4.15166C1.3 4.43602 1 4.90996 1 5.47868V11.3555C1 11.9242 1.3 12.3981 1.8 12.5877L7.2 15.5261C7.7 15.8104 8.3 15.8104 8.8 15.5261L14.2 12.5877C14.7 12.3981 15 11.8294 15 11.3555Z",stroke:t,"stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),a.createElement("path",{d:"M1.2998 4.53107L7.99981 8.41733L14.9998 4.62585",stroke:t,"stroke-miterlimit":"10"}),a.createElement("path",{d:"M8 16V8.41705",stroke:t,"stroke-miterlimit":"10"}));var Et=({size:e,color:t="#000"})=>a.createElement("svg",{width:e,height:e,viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M0.637695 3.31829L2.1679 4.86374C2.1679 4.86374 2.29541 4.86374 2.42293 4.86374L5.61085 1.64404",stroke:t,"stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),a.createElement("path",{d:"M7.90625 3.31836H18.3626",stroke:t,"stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),a.createElement("path",{d:"M7.90625 10.5303H18.3626",stroke:t,"stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),a.createElement("path",{d:"M1.14746 10.5303H4.33538",stroke:t,"stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),a.createElement("path",{d:"M1.14746 17.356H4.33538",stroke:t,"stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),a.createElement("path",{d:"M7.90625 17.356H18.3626",stroke:t,"stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}));var St=({size:e,color:t="#000"})=>a.createElement("svg",{width:e,height:e,viewBox:"0 0 21 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M17.168 7.80536L19.7547 14.1157H1V1.11572H19.7547L17.168 7.42608L17.0902 7.61572L17.168 7.80536Z",fill:t,"fill-opacity":"0.08",stroke:t}),a.createElement("path",{d:"M6.53906 7.43539L8.65445 9.56653L12.9698 5.21899",stroke:t,"stroke-miterlimit":"10"}),a.createElement("path",{d:"M0.944336 0.0710449V25.929",stroke:t,"stroke-miterlimit":"10"}));var Ct=({size:e,color:t="#000"})=>a.createElement("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M11.832 4.73469L13.2586 8.26675H2.62109V0.828125H13.2586L11.832 4.36018L11.7563 4.54743L11.832 4.73469Z",stroke:t}),a.createElement("path",{d:"M2.38477 0V15.5861",stroke:t,"stroke-miterlimit":"10"}));var $t=({size:e,color:t="#000"})=>a.createElement("svg",{width:e,height:e,viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M6.66634 3.87982H9.33301C10.0663 3.87982 10.6663 3.30382 10.6663 2.59982C10.6663 1.89582 10.0663 1.31982 9.33301 1.31982H6.66634C5.93301 1.31982 5.33301 1.89582 5.33301 2.59982C5.33301 3.30382 5.93301 3.87982 6.66634 3.87982Z",stroke:t,"stroke-miterlimit":"10"}),a.createElement("path",{d:"M5.66634 2.6001H3.66634C2.39967 2.6001 1.33301 3.6241 1.33301 4.8401V14.4401C1.33301 15.6561 2.39967 16.6801 3.66634 16.6801H12.333C13.5997 16.6801 14.6663 15.6561 14.6663 14.4401V4.8401C14.6663 3.6241 13.5997 2.6001 12.333 2.6001H10.333",stroke:t,"stroke-miterlimit":"10"}),a.createElement("path",{d:"M5 9.84615L7.1 12L11 8",stroke:t,"stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}));var Ft=({size:e,color:t="#000"})=>a.createElement("svg",{width:e,height:e,color:t,viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{"clip-path":"url(#clip0)"},a.createElement("path",{d:"M9.92488 19.5978C14.991 19.5978 19.0978 15.491 19.0978 10.4249C19.0978 5.35881 14.991 1.25195 9.92488 1.25195C4.85881 1.25195 0.751953 5.35881 0.751953 10.4249C0.751953 15.491 4.85881 19.5978 9.92488 19.5978Z",stroke:"#516173","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),a.createElement("path",{d:"M9.9248 5.4624V10.8759L13.985 14.9361",stroke:"#516173","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"})),a.createElement("defs",null,a.createElement("clipPath",{id:"clip0"},a.createElement("rect",{width:"20",height:"20",fill:"white",transform:"translate(0 0.5)"}))));var Pt=({size:e,color:t="#000"})=>a.createElement("svg",{width:e,height:e,color:t,viewBox:"0 0 62 77",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M57.9565 77H4.04348C1.7971 77 0 75.203 0 72.9568V4.04317C0 1.79697 1.7971 0 4.04348 0H46.0058C52.2058 6.28938 55.7101 9.79346 62 15.993V72.9568C62 75.203 60.2029 77 57.9565 77Z",fill:t,"fill-opacity":"0.12"}),a.createElement("path",{d:"M62.0001 15.993H45.916L46.0059 0L62.0001 15.993Z",fill:t,"fill-opacity":"0.12"}),a.createElement("path",{d:"M30.5511 60.3778C40.4762 60.3778 48.5221 52.3325 48.5221 42.4081C48.5221 32.4838 40.4762 24.4385 30.5511 24.4385C20.626 24.4385 12.5801 32.4838 12.5801 42.4081C12.5801 52.3325 20.626 60.3778 30.5511 60.3778Z",fill:t,"fill-opacity":"0.18"}),a.createElement("path",{d:"M24.2607 39.7132L30.3709 33.6035L36.481 39.6234",stroke:t,"stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),a.createElement("path",{d:"M30.3711 33.6035V51.3935",stroke:t,"stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}));var xt=({size:e,color:t="#000"})=>a.createElement("svg",{width:e,height:e,viewBox:"0 0 122 61",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M10 59.2008C26.5 58.2008 43 56.1008 59.5 47.7008C75.9 39.3008 90.9 35.1008 101.2 33.3008",stroke:t,"stroke-miterlimit":"10","stroke-dasharray":"3.03 3.03"}),a.createElement("path",{d:"M5.5 59.5004C6 59.5004 6.5 59.4004 7 59.4004",stroke:"black","stroke-miterlimit":"10"}),a.createElement("path",{d:"M102.7 33.1004C103.2 33.0004 103.7 32.9004 104.2 32.9004",stroke:"black","stroke-miterlimit":"10"}),a.createElement("path",{d:"M104.5 12V34",stroke:t,"stroke-miterlimit":"10"}),a.createElement("path",{d:"M118.269 17.9475L120.441 23H104.5V12.5H120.441L118.269 17.5525L118.184 17.75L118.269 17.9475Z",stroke:t}),a.createElement("path",{d:"M59.4004 5.09961V48.9996",stroke:t,"stroke-miterlimit":"10"}),a.createElement("path",{d:"M44.7962 16.1942L51.2467 31.5H5.5V0.5H51.2467L44.7962 15.8058L44.7144 16L44.7962 16.1942Z",fill:t,"fill-opacity":"0.08",stroke:t}),a.createElement("path",{d:"M5.5 0.5V59",stroke:t,"stroke-miterlimit":"10"}),a.createElement("path",{d:"M88.4989 16.7008L93.2348 27.5H59.5V5.5H93.2348L88.4989 16.2992L88.4108 16.5L88.4989 16.7008Z",stroke:t}),a.createElement("path",{d:"M5.5 61C8.53757 61 11 60.3284 11 59.5C11 58.6716 8.53757 58 5.5 58C2.46243 58 0 58.6716 0 59.5C0 60.3284 2.46243 61 5.5 61Z",fill:t}),a.createElement("path",{d:"M59.5 48.9996C61.9853 48.9996 64 48.4624 64 47.7996C64 47.1369 61.9853 46.5996 59.5 46.5996C57.0147 46.5996 55 47.1369 55 47.7996C55 48.4624 57.0147 48.9996 59.5 48.9996Z",fill:t}),a.createElement("path",{d:"M104.5 33.9996C106.985 33.9996 109 33.4624 109 32.7996C109 32.1369 106.985 31.5996 104.5 31.5996C102.015 31.5996 100 32.1369 100 32.7996C100 33.4624 102.015 33.9996 104.5 33.9996Z",fill:t}),a.createElement("path",{d:"M19 15.9998L24 20.9998L34.2 10.7998",stroke:t,"stroke-miterlimit":"10"}));function kt(e){return t=>{const{varient:n,size:i=24,shape:o,backgroundColor:l,color:u}=t,s=(0,r._T)(t,["varient","size","shape","backgroundColor","color"]);return o?a.createElement(y,{size:i,backgroundColor:l,shape:o,color:u},a.createElement(e,Object.assign({color:u},s))):a.createElement(e,Object.assign({size:i,color:u},s))}}kt((({size:e,color:t="#000"})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:e,width:e,viewBox:"0 0 28 28",color:t,fill:"currentColor",stroke:"currentColor",strokeWidth:"0.5"},a.createElement("g",{id:"Layer_2_1_"},a.createElement("g",{id:"Layer_1-2"},a.createElement("path",{d:"M1.3,19.8c0.5,1.2,1.3,2.4,2.2,3.4l0.7-0.6c-0.8-0.9-1.5-2-2-3.1L1.3,19.8z"}),a.createElement("path",{d:"M0.2,12c-0.2,1.3-0.2,2.7,0,4l1-0.1c-0.2-1.2-0.2-2.5,0-3.7L0.2,12z"}),a.createElement("path",{d:"M10.4,1.5l-0.3-1c-1.3,0.4-2.5,1-3.6,1.7L7,3C8.1,2.4,9.2,1.8,10.4,1.5z"}),a.createElement("path",{d:"M27.9,12c-0.2-1.3-0.6-2.6-1.1-3.9l-0.9,0.4c0.5,1.1,0.9,2.3,1,3.6L27.9,12z"}),a.createElement("path",{d:"M1.3,8.2l0.9,0.4c0.5-1.1,1.2-2.2,2-3.1L3.5,4.8C2.6,5.8,1.9,7,1.3,8.2z"}),a.createElement("path",{d:"M18,0.6C16.7,0.2,15.4,0,14.1,0v1c1.2,0,2.5,0.2,3.7,0.5L18,0.6z"}),a.createElement("path",{d:"M27,15.9c-0.2,1.2-0.5,2.4-1,3.6l0.9,0.4c0.6-1.2,0.9-2.5,1.1-3.9L27,15.9z"}),a.createElement("path",{d:"M6.5,25.8c1.1,0.7,2.3,1.3,3.6,1.7l0.3-1c-1.2-0.4-2.3-0.9-3.4-1.5L6.5,25.8z"}),a.createElement("path",{d:"M21.1,25l0.5,0.8c1.1-0.7,2.1-1.6,3-2.6l-0.7-0.6C23.1,23.5,22.2,24.3,21.1,25z"}),a.createElement("path",{d:"M21.6,2.2L21.1,3c1,0.7,2,1.5,2.8,2.4l0.7-0.6C23.8,3.8,22.8,2.9,21.6,2.2z"}),a.createElement("path",{d:"M14.1,27L14.1,27v1l0,0c1.3,0,2.7-0.2,3.9-0.6l-0.3-1C16.6,26.8,15.3,27,14.1,27z"}),a.createElement("path",{d:"M17.4,10.4c0-1.4-0.8-2.6-2.1-3.2h-0.1c-0.2-0.1-0.4-0.1-0.6-0.2h-0.3H14l0,0c-1.9,0-3.4,1.5-3.4,3.4\n\t\t\tc0,0,0,0,0,0c0,1.1,0.5,2.1,1.4,2.8c-2.5,0.8-4.3,2.9-4.7,5.5c0,0.1,0,0.1,0,0.2c0,0.7,0.5,1.2,1.2,1.2c0,0,0,0,0,0h4.1\n\t\t\tc0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5H8.5c-0.1,0-0.3-0.1-0.3-0.3l0,0c0.4-2.8,2.8-5,5.7-5l0,0c1.9,0,3.4-1.5,3.4-3.4\n\t\t\tC17.4,10.5,17.4,10.5,17.4,10.4z M14,12.9L14,12.9c-1.4-0.1-2.4-1.2-2.3-2.6C11.7,9,12.7,8,14,8l0,0h0.3l0,0h0.1\n\t\t\tc1.3,0.3,2.1,1.6,1.9,2.9C16.1,12,15.1,12.8,14,12.9L14,12.9z"}),a.createElement("path",{d:"M20.3,16.5h-2.1v-2.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5v2.1h-2.1c-0.3,0-0.5,0.2-0.5,0.5\n\t\t\tc0,0.3,0.2,0.5,0.5,0.5h2.1v2.1c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5v-2.1h2.1c0.3,0,0.5-0.2,0.5-0.5\n\t\t\tC20.8,16.7,20.6,16.5,20.3,16.5z"})))))),kt(p.siY),kt(p.WFu),kt(i.NsK),kt(v),kt(b),kt(S);const Tt=kt(c.yh4),wt=(kt(i.gwH),kt(C)),Lt=kt(c.l7h),At=(kt($),kt(F)),Rt=kt(re),Nt=kt(P),Dt=(kt(T),kt(k),kt(o.Fm7)),It=kt(x),Mt=(kt(p.sJz),kt(o.OS),kt(ae)),Bt=(kt(o.qL$),kt(o._HF),kt(o.PS5),kt(o.IkZ),kt(i.kcE),kt(l.bzc)),qt=(kt(l.N0Z),kt(o.FJM)),Ot=kt(o.RiI),_t=kt(o.bUI),zt=kt(o.Dli),Ht=(kt(o.s$2),kt(w),kt(L)),Wt=(kt(A),kt(R)),Vt=(kt(N),kt(D),kt(I),kt(i.Fqs)),jt=(kt(M),kt(B),kt(q),kt(O)),Gt=(kt(_),kt(i.vB0)),Kt=(kt(z),kt(H),kt(i.zmo),kt(W)),Zt=kt(i.vVM),Ut=(kt(V),kt(m.AlO)),Yt=(kt(j),kt(o.tBk)),Jt=(kt(o.mGS),kt(o.l7t),kt(o.GzT),kt(o.yRW),kt(G),kt(o.baU),kt(l.pHD),kt(p.Qvt),kt(K),kt(Z)),Qt=(kt(s.JM8),kt(U),kt(Y),kt(o.Omw)),Xt=kt(J),en=(kt(Q),kt(i.bH4),kt(u.evw),kt(X)),tn=kt(i.I5p),nn=(kt(m.JID),kt(ee)),rn=kt(te),an=kt(ie),on=(kt(oe),kt(le),kt(ue)),ln=(kt(se),kt(gt),kt(m.XKb)),un=kt(o.BUd),sn=(kt(ce),kt(i.$0r),kt(p.Zp7),kt(de)),cn=(kt(me),kt(pe)),dn=kt(fe),mn=(kt(he),kt(i.nAE),kt(ge)),pn=(kt(ye),kt(p.QaE)),fn=(kt(l.dEn),kt(l.SV5),kt(l.KP3)),hn=kt(be),gn=(kt(p.XoX),kt(Ee)),yn=kt(Se),vn=kt(l.LkX),bn=(kt(p.Dxw),kt(m.vPQ),kt(p.Vvo),kt(p.E6r),kt(Ce)),En=(kt(l.RcH),kt($e)),Sn=kt(Fe),Cn=kt(Pe),$n=(kt(p.cKt),kt(xe)),Fn=(kt(ke),kt(ve),kt(Te)),Pn=kt(we),xn=kt(Le),kn=kt(Ae),Tn=(kt(Re),kt(E)),wn=kt(Ne),Ln=kt(l.zPD),An=kt(De),Rn=(kt(l.Xv_),kt(d.iFB),kt(Ie)),Nn=kt(Me),Dn=kt(Be),In=(kt(qe),kt(p.TSD),kt(ne)),Mn=(kt(i.Vyx),kt(Oe),kt(m.OvN)),Bn=(kt(o.EIY),kt(_e),kt(ze)),qn=kt(He),On=(kt(We),kt(Ve)),_n=kt(je),zn=kt(Ge),Hn=kt(o.CdF),Wn=(kt(Ke),kt(Ze),kt(Ye)),Vn=(kt(Ue),kt(Je)),jn=(kt(m.LbG),kt(Qe),kt(i.b9P),kt(m.PMT)),Gn=(kt(Xe),kt(o.Xfy),kt(et)),Kn=(kt(tt),kt(nt)),Zn=kt(rt),Un=(kt(l.y5j),kt(it),kt(ot)),Yn=(kt(lt),kt(ut),kt(st),kt(o.fWC)),Jn=(kt(pt),kt(ct)),Qn=kt(at),Xn=kt(dt),er=(kt(p.VcF),kt(mt),kt(i.tn1),kt(ft)),tr=(kt(ht),kt(o.xpo));kt(o.ulB),kt(o.wNu),kt(yt),kt(vt),kt(bt),kt(Et),kt(St),kt(Ct),kt($t),kt(Ft),kt(Pt),kt(xt)},58430:function(e){"use strict";e.exports=JSON.parse('{"AD":["en","ca-AD"],"AE":["en","ar-AE"],"AF":["en","ps-AF","uz-AF","tk-AF"],"AG":["en-AG"],"AI":["en-AI"],"AL":["en","sq-AL"],"AM":["en","hy-AM","ru-AM"],"AO":["en","pt-AO"],"AQ":["en-AQ"],"AR":["en","es-AR","gn-AR"],"AS":["en-AS","sm-AS"],"AT":["en","de-AT"],"AU":["en-AU"],"AW":["en","nl-AW","pa-AW"],"AX":["en","sv-AX"],"AZ":["en","az-AZ"],"BA":["en","bs-BA","hr-BA","sr-BA"],"BB":["en-BB"],"BD":["en","bn-BD"],"BE":["en","nl-BE","fr-BE","de-BE"],"BF":["en","fr-BF","ff-BF"],"BG":["en","bg-BG"],"BH":["en","ar-BH"],"BI":["en","fr-BI","rn-BI"],"BJ":["en","fr-BJ"],"BL":["en","fr-BL"],"BM":["en-BM"],"BN":["en","ms-BN"],"BO":["en","es-BO","ay-BO","qu-BO"],"BQ":["en","nl-BQ"],"BR":["en","pt-BR"],"BS":["en-BS"],"BT":["en","dz-BT"],"BV":["en","no-BV","nb-BV","nn-BV"],"BW":["en-BW","tn-BW"],"BY":["en","be-BY","ru-BY"],"BZ":["en-BZ","es-BZ"],"CA":["en-CA","fr-CA"],"CC":["en-CC"],"CD":["en","fr-CD","ln-CD","kg-CD","sw-CD","lu-CD"],"CF":["en","fr-CF","sg-CF"],"CG":["en","fr-CG","ln-CG"],"CH":["en","de-CH","fr-CH","it-CH"],"CI":["en","fr-CI"],"CK":["en-CK"],"CL":["en","es-CL"],"CM":["en-CM","fr-CM"],"CN":["en","zh-CN"],"CO":["en","es-CO"],"CR":["en","es-CR"],"CU":["en","es-CU"],"CV":["en","pt-CV"],"CW":["en-CW","nl-CW","pa-CW"],"CX":["en-CX"],"CY":["en","el-CY","tr-CY","hy-CY"],"CZ":["en","cs-CZ","sk-CZ"],"DE":["en","de-DE"],"DJ":["en","fr-DJ","ar-DJ"],"DK":["en","da-DK"],"DM":["en-DM"],"DO":["en","es-DO"],"DZ":["en","ar-DZ"],"EC":["en","es-EC"],"EE":["en","et-EE"],"EG":["en","ar-EG"],"EH":["en","es-EH"],"ER":["en-ER","ti-ER","ar-ER"],"ES":["en","es-ES","eu-ES","ca-ES","gl-ES","oc-ES"],"ET":["en","am-ET"],"FI":["en","fi-FI","sv-FI"],"FJ":["en-FJ","fj-FJ","hi-FJ","ur-FJ"],"FK":["en-FK"],"FM":["en-FM"],"FO":["en","fo-FO"],"FR":["en","fr-FR"],"GA":["en","fr-GA"],"GB":["en-GB"],"GD":["en-GD"],"GE":["en","ka-GE"],"GF":["en","fr-GF"],"GG":["en-GG","fr-GG"],"GH":["en-GH"],"GI":["en-GI"],"GL":["en","kl-GL"],"GM":["en-GM"],"GN":["en","fr-GN","ff-GN"],"GP":["en","fr-GP"],"GQ":["en","es-GQ","fr-GQ"],"GR":["en","el-GR"],"GS":["en-GS"],"GT":["en","es-GT"],"GU":["en-GU","ch-GU","es-GU"],"GW":["en","pt-GW"],"GY":["en-GY"],"HK":["en-HK","zh-HK"],"HM":["en-HM"],"HN":["en","es-HN"],"HR":["en","hr-HR"],"HT":["en","fr-HT","ht-HT"],"HU":["en","hu-HU"],"ID":["en","id-ID"],"IE":["en-IE","ga-IE"],"IL":["en","he-IL","ar-IL"],"IM":["en-IM","gv-IM"],"IN":["en-IN","hi-IN"],"IO":["en-IO"],"IQ":["en","ar-IQ","ku-IQ"],"IR":["en","fa-IR"],"IS":["en","is-IS"],"IT":["en","it-IT"],"JE":["en-JE","fr-JE"],"JM":["en-JM"],"JO":["en","ar-JO"],"JP":["en","ja-JP"],"KE":["en-KE","sw-KE"],"KG":["en","ky-KG","ru-KG"],"KH":["en","km-KH"],"KI":["en-KI"],"KM":["en","ar-KM","fr-KM"],"KN":["en-KN"],"KP":["en","ko-KP"],"KR":["en","ko-KR"],"KW":["en","ar-KW"],"KY":["en-KY"],"KZ":["en","kk-KZ","ru-KZ"],"LA":["en","lo-LA"],"LB":["en","ar-LB","fr-LB"],"LC":["en-LC"],"LI":["en","de-LI"],"LK":["en","si-LK","ta-LK"],"LR":["en-LR"],"LS":["en-LS","st-LS"],"LT":["en","lt-LT"],"LU":["en","fr-LU","de-LU","lb-LU"],"LV":["en","lv-LV"],"LY":["en","ar-LY"],"MA":["en","ar-MA"],"MC":["en","fr-MC"],"MD":["en","ro-MD"],"ME":["en","sr-ME","bs-ME","sq-ME","hr-ME"],"MF":["en-MF","fr-MF","nl-MF"],"MG":["en","fr-MG","mg-MG"],"MH":["en-MH","mh-MH"],"MK":["en","mk-MK"],"ML":["en","fr-ML"],"MM":["en","my-MM"],"MN":["en","mn-MN"],"MO":["en","zh-MO","pt-MO"],"MP":["en-MP","ch-MP"],"MQ":["en","fr-MQ"],"MR":["en","ar-MR"],"MS":["en-MS"],"MT":["en-MT","mt-MT"],"MU":["en-MU"],"MV":["en","dv-MV"],"MW":["en-MW","ny-MW"],"MX":["en","es-MX"],"MY":["en","ms-MY"],"MZ":["en","pt-MZ"],"NA":["en-NA","af-NA"],"NC":["en","fr-NC"],"NE":["en","fr-NE"],"NF":["en-NF"],"NG":["en-NG"],"NI":["en","es-NI"],"NL":["en","nl-NL"],"AN":["en","nl-NL"],"NO":["en","no-NO","nb-NO","nn-NO"],"NP":["en","ne-NP"],"NR":["en-NR","na-NR"],"NU":["en-NU"],"NZ":["en-NZ","mi-NZ"],"OM":["en","ar-OM"],"PA":["en","es-PA"],"PE":["en","es-PE"],"PF":["en","fr-PF"],"PG":["en-PG"],"PH":["en-PH"],"PK":["en-PK","ur-PK"],"PL":["en","pl-PL"],"PM":["en","fr-PM"],"PN":["en-PN"],"PR":["en-PR","es-PR"],"PS":["en","ar-PS"],"PT":["en","pt-PT"],"PW":["en-PW"],"PY":["en","es-PY","gn-PY"],"QA":["en","ar-QA"],"RE":["en","fr-RE"],"RO":["en","ro-RO"],"RS":["en","sr-RS"],"RU":["en","ru-RU"],"RW":["en-RW","rw-RW","fr-RW"],"SA":["en","ar-SA"],"SB":["en-SB"],"SC":["en-SC","fr-SC"],"SD":["en-SD","ar-SD"],"SE":["en","sv-SE"],"SG":["en-SG","ms-SG","ta-SG","zh-SG"],"SH":["en-SH"],"SI":["en","sl-SI"],"SJ":["en","no-SJ"],"SK":["en","sk-SK"],"SL":["en-SL"],"SM":["en","it-SM"],"SN":["en","fr-SN"],"SO":["en","so-SO","ar-SO"],"SR":["en","nl-SR"],"SS":["en-SS"],"ST":["en","pt-ST"],"SV":["en","es-SV"],"SX":["en-SX","nl-SX"],"SY":["en","ar-SY"],"SZ":["en-SZ","ss-SZ"],"TC":["en-TC"],"TD":["en","fr-TD","ar-TD"],"TF":["en","fr-TF"],"TG":["en","fr-TG"],"TH":["en","th-TH"],"TJ":["en","tg-TJ","ru-TJ"],"TK":["en-TK"],"TL":["en","pt-TL"],"TM":["en","tk-TM","ru-TM"],"TN":["en","ar-TN"],"TO":["en-TO","to-TO"],"TR":["en","tr-TR"],"TT":["en-TT"],"TV":["en-TV"],"TW":["en","zh-TW"],"TZ":["en-TZ","sw-TZ"],"UA":["en","uk-UA"],"UG":["en-UG","sw-UG"],"UM":["en-UM"],"US":["en-US"],"UY":["en","es-UY"],"UZ":["en","uz-UZ","ru-UZ"],"VA":["en","it-VA","la-VA"],"VC":["en-VC"],"VE":["en","es-VE"],"VG":["en-VG"],"VI":["en-VI"],"VN":["en","vi-VN"],"VU":["en-VU","bi-VU","fr-VU"],"WF":["en","fr-WF"],"WS":["en-WS","sm-WS"],"XK":["en","sq-XK","sr-XK"],"YE":["en","ar-YE"],"YT":["en","fr-YT"],"ZA":["en-ZA","af-ZA","nr-ZA","st-ZA","ss-ZA","tn-ZA","ts-ZA","ve-ZA","xh-ZA","zu-ZA"],"ZM":["en-ZM"],"ZW":["en-ZW","sn-ZW","nd-ZW"],"Other":["en-IN","en-US"]}')},37211:function(e){"use strict";e.exports=JSON.parse('{"BD":"BDT","BE":"EUR","BF":"XOF","BG":"BGN","BA":"BAM","BB":"BBD","WF":"XPF","BL":"EUR","BM":"BMD","BN":"BND","BO":"BOB","BH":"BHD","BI":"BIF","BJ":"XOF","BT":"BTN","JM":"JMD","BV":"NOK","BW":"BWP","WS":"WST","BQ":"USD","BR":"BRL","BS":"BSD","JE":"GBP","BY":"BYR","BZ":"BZD","RU":"RUB","RW":"RWF","RS":"RSD","TL":"USD","RE":"EUR","TM":"TMT","TJ":"TJS","RO":"RON","TK":"NZD","GW":"XOF","GU":"USD","GT":"GTQ","GS":"GBP","GR":"EUR","GQ":"XAF","GP":"EUR","JP":"JPY","GY":"GYD","GG":"GBP","GF":"EUR","GE":"GEL","GD":"XCD","GB":"GBP","GA":"XAF","SV":"USD","GN":"GNF","GM":"GMD","GL":"DKK","GI":"GIP","GH":"GHS","OM":"OMR","TN":"TND","JO":"JOD","HR":"HRK","HT":"HTG","HU":"HUF","HK":"HKD","HN":"HNL","HM":"AUD","VE":"VEF","PR":"USD","PS":"ILS","PW":"USD","PT":"EUR","SJ":"NOK","PY":"PYG","IQ":"IQD","PA":"PAB","PF":"XPF","PG":"PGK","PE":"PEN","PK":"PKR","PH":"PHP","PN":"NZD","PL":"PLN","PM":"EUR","ZM":"ZMK","EH":"MAD","EE":"EUR","EG":"EGP","ZA":"ZAR","EC":"USD","IT":"EUR","VN":"VND","SB":"SBD","ET":"ETB","SO":"SOS","ZW":"ZWL","SA":"SAR","ES":"EUR","ER":"ERN","ME":"EUR","MD":"MDL","MG":"MGA","MF":"EUR","MA":"MAD","MC":"EUR","UZ":"UZS","MM":"MMK","ML":"XOF","MO":"MOP","MN":"MNT","MH":"USD","MK":"MKD","MU":"MUR","MT":"EUR","MW":"MWK","MV":"MVR","MQ":"EUR","MP":"USD","MS":"XCD","MR":"MRO","IM":"GBP","UG":"UGX","TZ":"TZS","MY":"MYR","MX":"MXN","IL":"ILS","FR":"EUR","IO":"USD","SH":"SHP","FI":"EUR","FJ":"FJD","FK":"FKP","FM":"USD","FO":"DKK","NI":"NIO","NL":"EUR","NO":"NOK","NA":"NAD","VU":"VUV","NC":"XPF","NE":"XOF","NF":"AUD","NG":"NGN","NZ":"NZD","NP":"NPR","NR":"AUD","NU":"NZD","CK":"NZD","XK":"EUR","CI":"XOF","CH":"CHF","CO":"COP","CN":"CNY","CM":"XAF","CL":"CLP","CC":"AUD","CA":"CAD","CG":"XAF","CF":"XAF","CD":"CDF","CZ":"CZK","CY":"EUR","CX":"AUD","CR":"CRC","CW":"ANG","CV":"CVE","CU":"CUP","SZ":"SZL","SY":"SYP","SX":"ANG","KG":"KGS","KE":"KES","SS":"SSP","SR":"SRD","KI":"AUD","KH":"KHR","KN":"XCD","KM":"KMF","ST":"STD","SK":"EUR","KR":"KRW","SI":"EUR","KP":"KPW","KW":"KWD","SN":"XOF","SM":"EUR","SL":"SLL","SC":"SCR","KZ":"KZT","KY":"KYD","SG":"SGD","SE":"SEK","SD":"SDG","DO":"DOP","DM":"XCD","DJ":"DJF","DK":"DKK","VG":"USD","DE":"EUR","YE":"YER","DZ":"DZD","US":"USD","UY":"UYU","YT":"EUR","UM":"USD","LB":"LBP","LC":"XCD","LA":"LAK","TV":"AUD","TW":"TWD","TT":"TTD","TR":"TRY","LK":"LKR","LI":"CHF","LV":"EUR","TO":"TOP","LT":"LTL","LU":"EUR","LR":"LRD","LS":"LSL","TH":"THB","TF":"EUR","TG":"XOF","TD":"XAF","TC":"USD","LY":"LYD","VA":"EUR","VC":"XCD","AE":"AED","AD":"EUR","AG":"XCD","AF":"AFN","AI":"XCD","VI":"USD","IS":"ISK","IR":"IRR","AM":"AMD","AL":"ALL","AO":"AOA","AQ":"","AS":"USD","AR":"ARS","AU":"AUD","AT":"EUR","AW":"AWG","IN":"INR","AX":"EUR","AZ":"AZN","IE":"EUR","ID":"IDR","UA":"UAH","QA":"QAR","MZ":"MZN"}')},86818:function(e){"use strict";e.exports=JSON.parse('{"AF":"Afghanistan","AX":"Aland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua And Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BQ":"Bonaire","BA":"Bosnia And Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cape Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Congo, Democratic Republic","CK":"Cook Islands","CR":"Costa Rica","CI":"Cote D\\"Ivoire","HR":"Croatia","CU":"Cuba","CW":"Cura\xe7ao","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands (Malvinas)","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard and McDonald Islands","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran, Islamic Republic Of","IQ":"Iraq","IE":"Ireland","IM":"Isle Of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KR":"Korea","XK":"Kosovo","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People\\"s Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libyan Arab Jamahiriya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macao","MK":"Macedonia","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia, Federated States Of","MD":"Moldova","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","AN":"Netherlands Antilles","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","KP":"North Korea","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territory, Occupied","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Reunion","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","BL":"Saint Barthelemy","SH":"Saint Helena","KN":"Saint Kitts And Nevis","LC":"Saint Lucia","MF":"Saint Martin","PM":"Saint Pierre And Miquelon","VC":"Saint Vincent And Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome And Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SX":"Sint Maarten","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia And Sandwich Isl.","SS":"South Sudan","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard And Jan Mayen","SZ":"Swaziland","SE":"Sweden","CH":"Switzerland","SY":"Syrian Arab Republic","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad And Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks And Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates (UAE)","GB":"United Kingdom (UK)","US":"United States of America (USA)","UM":"United States Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VA":"Vatican City","VE":"Venezuela","VN":"Viet Nam","VG":"Virgin Islands, British","VI":"Virgin Islands, U.S.","WF":"Wallis And Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe","Other":"Other"}')},17042:function(e){"use strict";e.exports=JSON.parse('{"USD":"$","CAD":"CA$","EUR":"\u20ac","AED":"AED","AFN":"Af","ALL":"ALL","AMD":"AMD","ARS":"AR$","AUD":"AU$","AZN":"man.","BAM":"KM","BDT":"Tk","BGN":"BGN","BHD":"BD","BIF":"FBu","BND":"BN$","BOB":"Bs","BRL":"R$","BWP":"BWP","BYR":"BYR","BZD":"BZ$","CDF":"CDF","CHF":"CHF","CLP":"CL$","CNY":"CN\xa5","COP":"CO$","CRC":"\u20a1","CVE":"CV$","CZK":"K\u010d","DJF":"Fdj","DKK":"Dkr","DOP":"RD$","DZD":"DA","EEK":"Ekr","EGP":"EGP","ERN":"Nfk","ETB":"Br","GBP":"\xa3","GEL":"GEL","GHS":"GH\u20b5","GNF":"FG","GTQ":"GTQ","HKD":"HK$","HNL":"HNL","HRK":"kn","HUF":"Ft","IDR":"Rp","ILS":"\u20aa","INR":"\u20b9","IQD":"IQD","IRR":"IRR","ISK":"Ikr","JMD":"J$","JOD":"JD","JPY":"\xa5","KES":"Ksh","KHR":"KHR","KMF":"CF","KRW":"\u20a9","KWD":"KD","KZT":"KZT","LBP":"LB\xa3","LKR":"SLRs","LTL":"Lt","LVL":"Ls","LYD":"LD","MAD":"MAD","MDL":"MDL","MGA":"MGA","MKD":"MKD","MMK":"MMK","MOP":"MOP$","MUR":"MURs","MXN":"MX$","MYR":"RM","MZN":"MTn","NAD":"N$","NGN":"\u20a6","NIO":"C$","NOK":"Nkr","NPR":"NPRs","NZD":"NZ$","OMR":"OMR","PAB":"B/.","PEN":"S/.","PHP":"\u20b1","PKR":"PKRs","PLN":"z\u0142","PYG":"\u20b2","QAR":"QR","RON":"RON","RSD":"din.","RUB":"\u20bd","RWF":"RWF","SAR":"SR","SDG":"SDG","SEK":"Skr","SGD":"S$","SOS":"Ssh","SYP":"SY\xa3","THB":"\u0e3f","TND":"DT","TOP":"T$","TRY":"TL","TTD":"TT$","TWD":"NT$","TZS":"TSh","UAH":"\u20b4","UGX":"USh","UYU":"$U","UZS":"UZS","VEF":"Bs.F.","VND":"\u20ab","XAF":"FCFA","XOF":"CFA","YER":"YR","ZAR":"R","ZMK":"ZK","ZWL":"ZWL$","RC":"\ud83c\udd72"}')},49345:function(e){"use strict";e.exports=JSON.parse('{"AAD":"Antarctica(AAD, $)","AED":"United Arab Emirates Dirham(AED, AED)","AFN":"Afghan Afghani(AFN, Af)","ALL":"Albanian Lek(ALL, L)","AMD":"Armenian Dram(AMD, AMD)","ANG":"Sint Maarten(ANG, NA\u0192)","AOA":"Angola(AOA, Kz)","ARS":"Argentine Peso(ARS,AR$)","AUD":"Australian Dollar(AUD, A$)","AWG":"Aruba(AWG, Afl)","AZN":"Azerbaijani Manat(AZN, manat)","BAM":"Bosnia-Herzegovina Convertible Mark(BAM, KM)","BBD":"Barbados(BBD, Bds$)","BDT":"Bangladeshi Taka(BDT, Tk)","BGN":"Bulgarian Lev(BGN, BGN)","BHD":"Bahraini Dinar(BHD, BD)","BIF":"Burundian Franc(BIF, FBu)","BMD":"Bermuda Dollar(BMD, $)","BND":"Brunei Dollar(BND, B$)","BOB":"Bolivian Boliviano(BOB, Bs)","BRL":"Brazilian Real(BRL, R$)","BSD":"Bahamas(BSD, B$)","BTN":"Bhutan(BTN, Nu.)","BWP":"Botswanan Pula(BWP, P)","BYR":"Belarusian Ruble(BYR, Br)","BZD":"Belize Dollar(BZD, BZ$)","CAD":"Canadian Dollar(CAD, CA$)","CDF":"Congolese Franc(CDF, FC)","CHF":"Swiss Franc(CHF, CHF)","CLP":"Chilean Peso(CLP, CL$)","CNY":"Chinese Yuan(CNY, CN\xa5)","COP":"Colombian Peso(COP, CO$)","CRC":"Costa Rican Col\xf3n(CRC, \u20a1)","CUP":"Cuba(CUP, $)","CVE":"Cape Verdean Escudo(CVE, CV$)","CZK":"Czech Republic Koruna(CZK, K\u010d)","DJF":"Djiboutian Franc(DJF, Fdj)","DKK":"Danish Krone(DKK, kr.)","DOP":"Dominican Peso(DOP, RD$)","DZD":"Algerian Dinar(DZD, DA)","EEK":"Estonian Kroon(EEK, Ekr)","EGP":"Egyptian Pound(EGP, E\xa3)","ERN":"Eritrean Nakfa(ERN, Nfk)","ETB":"Ethiopian Birr(ETB, Br)","EUR":"Euro(EUR, \u20ac)","FJD":"Fiji(FJD, FJ$)","FKP":"Falkland Islands(FKP, \xa3)","GBP":"British Pound Sterling(GBP, \xa3)","GEL":"Georgian Lari(GEL, GEL)","GHS":"Ghanaian Cedi(GHS, GH\u20b5)","GIP":"Gibraltar(GIP, \xa3)","GMD":"Gambia(GMD, D)","GNF":"Guinean Franc(GNF, FG)","GTQ":"Guatemalan Quetzal(GTQ, Q)","GYD":"Egypt(GYD, G$)","HKD":"Hong Kong Dollar(HKD, HK$)","HNL":"Honduran Lempira(HNL, HNL)","HRK":"Croatian Kuna(HRK, kn)","HTG":"Haiti(HTG, G)","HUF":"Hungarian Forint(HUF, Ft)","IDR":"Indonesian Rupiah(IDR, Rp)","ILS":"Israeli New Sheqel(ILS, \u20aa)","INR":"Indian Rupee(INR, \u20b9)","IQD":"Iraqi Dinar(IQD, IQD)","IRR":"Iranian Rial(IRR, IRR)","ISK":"Icelandic Kr\xf3na(ISK, kr)","JMD":"Jamaican Dollar(JMD, J$)","JOD":"Jordanian Dinar(JOD, JD)","JPY":"Japanese Yen(JPY, \xa5)","KES":"Kenyan Shilling(KES, Ksh)","KGS":"Kyrgyzstan(KGS, )","KHR":"Cambodian Riel(KHR, KHR)","KMF":"Comorian Franc(KMF, CF)","KPW":"North Korea(KPW, \u20a9)","KRW":"South Korean Won(KRW, \u20a9)","KWD":"Kuwaiti Dinar(KWD, KD)","KYD":"Cayman Islands(KYD, $)","KZT":"Kazakhstani Tenge(KZT, KZT)","LAK":"Lao People\\"s Democratic Republic(LAK, \u20ad)","LBP":"Lebanese Pound(LBP, L\xa3)","LKR":"Sri Lankan Rupee(LKR, Rs)","LRD":"Liberia(LRD, LD$)","LSL":"Lesotho(LSL, L)","LTL":"Lithuanian Litas(LTL, Lt)","LVL":"Latvian Lats(LVL, Ls)","LYD":"Libyan Dinar(LYD, LD)","MAD":"Moroccan Dirham(MAD, MAD)","MDL":"Moldovan Leu(MDL, MDL)","MGA":"Malagasy Ariary(MGA, MGA)","MKD":"Macedonian Denar(MKD, den)","MMK":"Myanma Kyat(MMK, K)","MNT":"Mongolia(MNT, \u20ae)","MOP":"Macanese Pataca(MOP, MOP$)","MRO":"Mauritania(MRO, UM)","MUR":"Mauritian Rupee(MUR, MURs)","MVR":"Maldives(MVR, MR)","MWK":"Malawi(MWK, K)","MXN":"Mexican Peso(MXN, MX$)","MYR":"Malaysian Ringgit(MYR, RM)","MZN":"Mozambican Metical(MZN, MTn)","NAD":"Namibian Dollar(NAD, N$)","NGN":"Nigerian Naira(NGN, \u20a6)","NIO":"Nicaraguan C\xf3rdoba(NIO, C$)","NOK":"Norwegian Krone(NOK, Nkr)","NPR":"Nepalese Rupee(NPR, Rs)","NZD":"New Zealand Dollar(NZD, NZ$)","OMR":"Omani Rial(OMR, R.O.)","PAB":"Panamanian Balboa(PAB, B/.)","PEN":"Peruvian Nuevo Sol(PEN, S/.)","PGK":"Papua New Guinea(PGK, K)","PHP":"Philippine Peso(PHP, \u20b1)","PKR":"Pakistani Rupee(PKR, PKRs)","PLN":"Polish Zloty(PLN, z\u0142)","PYG":"Paraguayan Guarani(PYG, \u20b2)","QAR":"Qatari Rial(QAR, QR)","RON":"Romanian Leu(RON, RON)","RSD":"Serbian Dinar(RSD, din.)","RUB":"Russian Ruble(RUB, RUB)","RWF":"Rwandan Franc(RWF, RF)","SAR":"Saudi Riyal(SAR, SAR)","SBD":"Solomon Islands(SBD, SI$)","SCR":"Seychelles(SCR, SR)","SDG":"Sudanese Pound(SDG, SDG)","SEK":"Swedish Krona(SEK, Skr)","SGD":"Singapore Dollar(SGD, S$)","SHP":"Saint Helena(SHP, \xa3)","SLL":"Sierra Leone(SLL, Le)","SOS":"Somali Shilling(SOS, Sh.So)","SRD":"Suriname(SRD, SS\xa3)","SSP":"South Sudan(SSP, SS\xa3)","STD":"Sao Tome And Principe(STD, Db)","SYP":"Syrian Pound(SYP, \xa3S)","SZL":"Swaziland(SZL, L)","THB":"Thai Baht(THB, \u0e3f)","TJS":"Tajikistan(TJS, SM)","TMT":"Turkmenistan(TMT, T)","TND":"Tunisian Dinar(TND, DT)","TOP":"Tongan Pa\u02bbanga(TOP, T$)","TRY":"Turkish Lira(TRY, TL)","TTD":"Trinidad and Tobago Dollar(TTD, TT$)","TWD":"New Taiwan Dollar(TWD, NT$)","TZS":"Tanzanian Shilling(TZS, TSh)","UAH":"Ukrainian Hryvnia(UAH, \u20b4)","UGX":"Ugandan Shilling(UGX, USh)","USD":"US Dollar(USD, $)","UYU":"Uruguayan Peso(UYU, $U)","UZS":"Uzbekistan Som(UZS, UZS)","VEF":"Venezuelan Bol\xedvar(VEF, Bs.F.)","VND":"Vietnamese Dong(VND, \u20ab)","VUV":"Vanuatu(VUV, \xa3)","WST":"Samoa(WST, WS)","XAF":"CFA Franc BEAC (XAF, FCFA)","XCD":"Grenada(XCD, $)","XOF":"CFA Franc BCEAO(XOF, CFA)","XPF":"French Polynesia(XPF, F)","YER":"Yemeni Rial (YER,YR)(YER, YR)","ZAR":"South African Rand (ZAR, R)","ZMK":"Zambian Kwacha (ZMK, ZK)","ZWL":"Zimbabwean dollar (ZWL, ZWL$)","RC":"Refrens Credits(RC, \ud83c\udd72)"}')},45727:function(e,t,n){"use strict";var r=n(67294),a=n(2544),i=n(34578),o=n(52019);const l=({icon:e})=>{switch(e){case"ArrowDown":return r.createElement(i.K5e,{size:18});case"ArrowUp":return r.createElement(i.a2Z,{size:18});case"ChevronRight":return r.createElement(i._Qn,{size:18});case"ChevronDown":return r.createElement(i._ME,{size:18});default:return r.createElement(r.Fragment,null)}},u=({cta:e,buttonProps:t={}})=>{var n;const{buttonProps:i={}}=e.params||{},u=(null===(n=e.params)||void 0===n?void 0:n.scrollTo)||"refrens-page-form";return e.href?r.createElement(o.Z,{hrefProps:{href:e.href,target:e.isExternal?"_blank":"_self"},elisif:{href:e.href,as:e.as}},r.createElement(a.Button,Object.assign({as:"a",target:e.isExternal?"_blank":"_self"},t,i),r.createElement(l,{icon:e.leftIcon}),r.createElement("b",null,e.label),r.createElement(l,{icon:e.rightIcon}))):r.createElement(a.Button,Object.assign({},t,{as:"a",href:`#${u}`},i),r.createElement(l,{icon:e.leftIcon}),r.createElement("b",null,e.label),r.createElement(l,{icon:e.rightIcon}))};u.defaultProps={buttonProps:{size:"large",variant:"primary"}},t.Z=u},52019:function(e,t,n){"use strict";var r=n(67294),a=n(38905),i=n(26316);t.Z=e=>{const{elisif:t,lydia:n,children:o,hrefProps:l}=e,{Link:u,app:s}=(0,i.qK)();return s===a.p.ELISIF&&(null===t||void 0===t?void 0:t.as)?r.createElement(u,Object.assign({},t,{passHref:!0}),o):s===a.p.LYDIA&&n?r.createElement(u,Object.assign({},n,{passHref:!0}),o):(null===l||void 0===l?void 0:l.href)?r.cloneElement(o,Object.assign({},l)):r.createElement(r.Fragment,null,o)}},79874:function(e,t,n){"use strict";var r=n(70655),a=n(67294),i=n(2544),o=n(38905),l=n(26316);t.Z=e=>{const{href:t,elisif:n,lydia:u}=e,s=(0,r._T)(e,["href","elisif","lydia"]),{Link:c,app:d}=(0,l.qK)(),m=Object.assign({},s);if(c)if(d===o.p.ELISIF&&(null===n||void 0===n?void 0:n.href)){const e=e=>a.createElement(c,Object.assign({},n,{passHref:!0}),e);m.renderWrapper=e,m.as="a"}else if(d===o.p.LYDIA&&u){const e=e=>a.createElement(c,Object.assign({},u,{passHref:!0}),e);m.renderWrapper=e,m.as="a"}else t&&(m.href=t);else t&&(m.href=t);return a.createElement(i.Menu.Item,Object.assign({},m))}},72872:function(e,t,n){"use strict";var r=n(79805);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"BILL_TYPE")&&n.d(t,{BILL_TYPE:function(){return r.BILL_TYPE}}),n.o(r,"Categories")&&n.d(t,{Categories:function(){return r.Categories}}),n.o(r,"ChoiceBlock")&&n.d(t,{ChoiceBlock:function(){return r.ChoiceBlock}}),n.o(r,"Container")&&n.d(t,{Container:function(){return r.Container}}),n.o(r,"Faq")&&n.d(t,{Faq:function(){return r.Faq}}),n.o(r,"Features")&&n.d(t,{Features:function(){return r.Features}}),n.o(r,"FooterCopy")&&n.d(t,{FooterCopy:function(){return r.FooterCopy}}),n.o(r,"ForgotPassword")&&n.d(t,{ForgotPassword:function(){return r.ForgotPassword}}),n.o(r,"HeaderBanner")&&n.d(t,{HeaderBanner:function(){return r.HeaderBanner}}),n.o(r,"HeroBanner")&&n.d(t,{HeroBanner:function(){return r.HeroBanner}}),n.o(r,"HeroCopy")&&n.d(t,{HeroCopy:function(){return r.HeroCopy}}),n.o(r,"HowItWorks")&&n.d(t,{HowItWorks:function(){return r.HowItWorks}}),n.o(r,"InvoiceForm")&&n.d(t,{InvoiceForm:function(){return r.InvoiceForm}}),n.o(r,"InvoiceHelpers")&&n.d(t,{InvoiceHelpers:function(){return r.InvoiceHelpers}}),n.o(r,"JupiterProvider")&&n.d(t,{JupiterProvider:function(){return r.JupiterProvider}}),n.o(r,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return r.MediaLinkPlaceholder}}),n.o(r,"PageFeature")&&n.d(t,{PageFeature:function(){return r.PageFeature}}),n.o(r,"PageWrapper")&&n.d(t,{PageWrapper:function(){return r.PageWrapper}}),n.o(r,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return r.PremiumPlans}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},79805:function(){},15771:function(e,t,n){"use strict";var r=n(14671);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"BILL_TYPE")&&n.d(t,{BILL_TYPE:function(){return r.BILL_TYPE}}),n.o(r,"Categories")&&n.d(t,{Categories:function(){return r.Categories}}),n.o(r,"ChoiceBlock")&&n.d(t,{ChoiceBlock:function(){return r.ChoiceBlock}}),n.o(r,"Container")&&n.d(t,{Container:function(){return r.Container}}),n.o(r,"Faq")&&n.d(t,{Faq:function(){return r.Faq}}),n.o(r,"Features")&&n.d(t,{Features:function(){return r.Features}}),n.o(r,"FooterCopy")&&n.d(t,{FooterCopy:function(){return r.FooterCopy}}),n.o(r,"ForgotPassword")&&n.d(t,{ForgotPassword:function(){return r.ForgotPassword}}),n.o(r,"HeaderBanner")&&n.d(t,{HeaderBanner:function(){return r.HeaderBanner}}),n.o(r,"HeroBanner")&&n.d(t,{HeroBanner:function(){return r.HeroBanner}}),n.o(r,"HeroCopy")&&n.d(t,{HeroCopy:function(){return r.HeroCopy}}),n.o(r,"HowItWorks")&&n.d(t,{HowItWorks:function(){return r.HowItWorks}}),n.o(r,"InvoiceForm")&&n.d(t,{InvoiceForm:function(){return r.InvoiceForm}}),n.o(r,"InvoiceHelpers")&&n.d(t,{InvoiceHelpers:function(){return r.InvoiceHelpers}}),n.o(r,"JupiterProvider")&&n.d(t,{JupiterProvider:function(){return r.JupiterProvider}}),n.o(r,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return r.MediaLinkPlaceholder}}),n.o(r,"PageFeature")&&n.d(t,{PageFeature:function(){return r.PageFeature}}),n.o(r,"PageWrapper")&&n.d(t,{PageWrapper:function(){return r.PageWrapper}}),n.o(r,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return r.PremiumPlans}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},14671:function(){},84388:function(e,t,n){"use strict";var r=n(70655),a=n(67294),i=n(89211),o=n(6411),l=n(2544),u=n(63533),s=n(34015);t.Z=e=>{const{open:t,onSubmit:n,onCancel:c,defaultValue:d}=e,m=(0,r._T)(e,["open","onSubmit","onCancel","defaultValue"]),[p,f]=(0,i.Z)(!1);return a.createElement(l.Modal,{open:t,footer:null,maskClosable:!1,width:450,onCancel:c},p?a.createElement(a.Fragment,null,a.createElement(o.xu,{mx:"20px",mt:"20px"},a.createElement(o.kC,{justifyContent:"center"},a.createElement(o.xu,{mb:"30px"},"Signin and Continue")),a.createElement(s.Z,{onSubmit:n,defaultValue:{email:null===d||void 0===d?void 0:d.email}}),a.createElement(o.kC,{mt:"20px",justifyContent:"center"},a.createElement(o.xu,{alignSelf:"center",mr:"8px"},a.createElement(l.Typography,{variant:"none"},"New User?")),a.createElement(l.Button,{anchor:!0,onClick:()=>f(!1)},"Register here")))):a.createElement(a.Fragment,null,a.createElement(o.xu,{mx:"20px",mt:"20px"},a.createElement(o.kC,{justifyContent:"center"},a.createElement(o.xu,{mb:"30px"},"Signup to continue. It's Free!")),a.createElement(u.Z,Object.assign({onSubmit:n,defaultValue:d,onLoginClick:()=>f(!0)},m))),a.createElement(o.kC,{mt:"20px",justifyContent:"center"},a.createElement(o.xu,{alignSelf:"center",mr:"8px"},a.createElement(l.Typography,{variant:"none"},"Already a User?")),a.createElement(l.Button,{anchor:!0,onClick:()=>f(!0)},"Login here"))))}},45302:function(e,t,n){"use strict";var r=n(96600);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"BILL_TYPE")&&n.d(t,{BILL_TYPE:function(){return r.BILL_TYPE}}),n.o(r,"Categories")&&n.d(t,{Categories:function(){return r.Categories}}),n.o(r,"ChoiceBlock")&&n.d(t,{ChoiceBlock:function(){return r.ChoiceBlock}}),n.o(r,"Container")&&n.d(t,{Container:function(){return r.Container}}),n.o(r,"Faq")&&n.d(t,{Faq:function(){return r.Faq}}),n.o(r,"Features")&&n.d(t,{Features:function(){return r.Features}}),n.o(r,"FooterCopy")&&n.d(t,{FooterCopy:function(){return r.FooterCopy}}),n.o(r,"ForgotPassword")&&n.d(t,{ForgotPassword:function(){return r.ForgotPassword}}),n.o(r,"HeaderBanner")&&n.d(t,{HeaderBanner:function(){return r.HeaderBanner}}),n.o(r,"HeroBanner")&&n.d(t,{HeroBanner:function(){return r.HeroBanner}}),n.o(r,"HeroCopy")&&n.d(t,{HeroCopy:function(){return r.HeroCopy}}),n.o(r,"HowItWorks")&&n.d(t,{HowItWorks:function(){return r.HowItWorks}}),n.o(r,"InvoiceForm")&&n.d(t,{InvoiceForm:function(){return r.InvoiceForm}}),n.o(r,"InvoiceHelpers")&&n.d(t,{InvoiceHelpers:function(){return r.InvoiceHelpers}}),n.o(r,"JupiterProvider")&&n.d(t,{JupiterProvider:function(){return r.JupiterProvider}}),n.o(r,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return r.MediaLinkPlaceholder}}),n.o(r,"PageFeature")&&n.d(t,{PageFeature:function(){return r.PageFeature}}),n.o(r,"PageWrapper")&&n.d(t,{PageWrapper:function(){return r.PageWrapper}}),n.o(r,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return r.PremiumPlans}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},96600:function(){},33403:function(e,t,n){"use strict";var r=n(85921);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"BILL_TYPE")&&n.d(t,{BILL_TYPE:function(){return r.BILL_TYPE}}),n.o(r,"Categories")&&n.d(t,{Categories:function(){return r.Categories}}),n.o(r,"ChoiceBlock")&&n.d(t,{ChoiceBlock:function(){return r.ChoiceBlock}}),n.o(r,"Container")&&n.d(t,{Container:function(){return r.Container}}),n.o(r,"Faq")&&n.d(t,{Faq:function(){return r.Faq}}),n.o(r,"Features")&&n.d(t,{Features:function(){return r.Features}}),n.o(r,"FooterCopy")&&n.d(t,{FooterCopy:function(){return r.FooterCopy}}),n.o(r,"ForgotPassword")&&n.d(t,{ForgotPassword:function(){return r.ForgotPassword}}),n.o(r,"HeaderBanner")&&n.d(t,{HeaderBanner:function(){return r.HeaderBanner}}),n.o(r,"HeroBanner")&&n.d(t,{HeroBanner:function(){return r.HeroBanner}}),n.o(r,"HeroCopy")&&n.d(t,{HeroCopy:function(){return r.HeroCopy}}),n.o(r,"HowItWorks")&&n.d(t,{HowItWorks:function(){return r.HowItWorks}}),n.o(r,"InvoiceForm")&&n.d(t,{InvoiceForm:function(){return r.InvoiceForm}}),n.o(r,"InvoiceHelpers")&&n.d(t,{InvoiceHelpers:function(){return r.InvoiceHelpers}}),n.o(r,"JupiterProvider")&&n.d(t,{JupiterProvider:function(){return r.JupiterProvider}}),n.o(r,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return r.MediaLinkPlaceholder}}),n.o(r,"PageFeature")&&n.d(t,{PageFeature:function(){return r.PageFeature}}),n.o(r,"PageWrapper")&&n.d(t,{PageWrapper:function(){return r.PageWrapper}}),n.o(r,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return r.PremiumPlans}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},85921:function(){},86565:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67294),a=n(2544),i=n(52019),o=n(52220),l=n(32929);const u=(0,o.default)(l.W)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${({theme:{spacings:e}})=>o.css`
      &&& {
        padding-top: ${e.s4};
      }
    `}
  }
`,s=o.default.div`
  max-width: 700px;
  text-align: center;
  ${({theme:{spacings:e}})=>o.css`
    margin: ${e.s9} 0;
  `}
`,c=o.default.a`
  text-decoration: none;
  color: #161c26;

  ${({theme:{colors:e}})=>o.css`
    &:hover {
      color: ${e.secondary[2]};
      > * {
        border-color: ${e.secondary[2]};
      }
    }
  `}
`;var d=e=>{const{title:t,categories:n}=e;return r.createElement(u,null,r.createElement(a.Typography,{as:"h2"},t),r.createElement(s,null,n.map((e=>r.createElement(r.Fragment,{key:e.id},!!e.href&&r.createElement(i.Z,{hrefProps:{href:e.href},elisif:{href:e.href,as:e.as}},r.createElement(c,null,r.createElement(a.Tag,{key:e.id,borderRadius:20,style:{cursor:"pointer"}},e.label))),!e.href&&r.createElement(a.Tag,{key:e.id,borderRadius:20},e.label))))))}},74855:function(e,t,n){"use strict";n.d(t,{Rj:function(){return r.Z}});var r=n(86565),a=n(33871);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"BILL_TYPE")&&n.d(t,{BILL_TYPE:function(){return a.BILL_TYPE}}),n.o(a,"ChoiceBlock")&&n.d(t,{ChoiceBlock:function(){return a.ChoiceBlock}}),n.o(a,"Container")&&n.d(t,{Container:function(){return a.Container}}),n.o(a,"Faq")&&n.d(t,{Faq:function(){return a.Faq}}),n.o(a,"Features")&&n.d(t,{Features:function(){return a.Features}}),n.o(a,"FooterCopy")&&n.d(t,{FooterCopy:function(){return a.FooterCopy}}),n.o(a,"ForgotPassword")&&n.d(t,{ForgotPassword:function(){return a.ForgotPassword}}),n.o(a,"HeaderBanner")&&n.d(t,{HeaderBanner:function(){return a.HeaderBanner}}),n.o(a,"HeroBanner")&&n.d(t,{HeroBanner:function(){return a.HeroBanner}}),n.o(a,"HeroCopy")&&n.d(t,{HeroCopy:function(){return a.HeroCopy}}),n.o(a,"HowItWorks")&&n.d(t,{HowItWorks:function(){return a.HowItWorks}}),n.o(a,"InvoiceForm")&&n.d(t,{InvoiceForm:function(){return a.InvoiceForm}}),n.o(a,"InvoiceHelpers")&&n.d(t,{InvoiceHelpers:function(){return a.InvoiceHelpers}}),n.o(a,"JupiterProvider")&&n.d(t,{JupiterProvider:function(){return a.JupiterProvider}}),n.o(a,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return a.MediaLinkPlaceholder}}),n.o(a,"PageFeature")&&n.d(t,{PageFeature:function(){return a.PageFeature}}),n.o(a,"PageWrapper")&&n.d(t,{PageWrapper:function(){return a.PageWrapper}}),n.o(a,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return a.PremiumPlans}}),n.o(a,"Pricing")&&n.d(t,{Pricing:function(){return a.Pricing}}),n.o(a,"Products")&&n.d(t,{Products:function(){return a.Products}}),n.o(a,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return a.RequirementCategories}}),n.o(a,"RequirementForm")&&n.d(t,{RequirementForm:function(){return a.RequirementForm}}),n.o(a,"Services")&&n.d(t,{Services:function(){return a.Services}}),n.o(a,"Sidebar")&&n.d(t,{Sidebar:function(){return a.Sidebar}}),n.o(a,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return a.SidebarAppWrapper}}),n.o(a,"SigninForm")&&n.d(t,{SigninForm:function(){return a.SigninForm}}),n.o(a,"SignupForm")&&n.d(t,{SignupForm:function(){return a.SignupForm}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},33871:function(){},60945:function(e,t,n){"use strict";var r=n(40978);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"BILL_TYPE")&&n.d(t,{BILL_TYPE:function(){return r.BILL_TYPE}}),n.o(r,"Container")&&n.d(t,{Container:function(){return r.Container}}),n.o(r,"Faq")&&n.d(t,{Faq:function(){return r.Faq}}),n.o(r,"Features")&&n.d(t,{Features:function(){return r.Features}}),n.o(r,"FooterCopy")&&n.d(t,{FooterCopy:function(){return r.FooterCopy}}),n.o(r,"ForgotPassword")&&n.d(t,{ForgotPassword:function(){return r.ForgotPassword}}),n.o(r,"HeaderBanner")&&n.d(t,{HeaderBanner:function(){return r.HeaderBanner}}),n.o(r,"HeroBanner")&&n.d(t,{HeroBanner:function(){return r.HeroBanner}}),n.o(r,"HeroCopy")&&n.d(t,{HeroCopy:function(){return r.HeroCopy}}),n.o(r,"HowItWorks")&&n.d(t,{HowItWorks:function(){return r.HowItWorks}}),n.o(r,"InvoiceForm")&&n.d(t,{InvoiceForm:function(){return r.InvoiceForm}}),n.o(r,"InvoiceHelpers")&&n.d(t,{InvoiceHelpers:function(){return r.InvoiceHelpers}}),n.o(r,"JupiterProvider")&&n.d(t,{JupiterProvider:function(){return r.JupiterProvider}}),n.o(r,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return r.MediaLinkPlaceholder}}),n.o(r,"PageFeature")&&n.d(t,{PageFeature:function(){return r.PageFeature}}),n.o(r,"PageWrapper")&&n.d(t,{PageWrapper:function(){return r.PageWrapper}}),n.o(r,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return r.PremiumPlans}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},40978:function(){},14020:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(67294),a=n(6411),i=n(2544),o=n(34578),l=n(52019),u=n(52220),s=n(32929);const c=u.default.div`
  .slick-slider,
  .slick-dots {
    position: static;
    margin-top: 2.5rem;
  }

  .slick-dots {
    bottom: 0;
  }
`,d=(0,u.default)(i.Typography)`
  && {
    text-align: center;
    margin: 0 auto;
    max-width: 60%;
    ${({theme:{breakpoints:e}})=>u.css`
      @media screen and (max-width: ${e[1]}) {
        max-width: 80%;
      }
    `}
  }
`,m=(0,u.default)(s.W)`
  && {
    padding: 3.75rem 0.625rem 2.5rem 0.625rem;
  }
`,p=(0,u.default)(i.Typography)`
  && {
    text-align: center;
    ${({theme:{spacings:e,breakpoints:t}})=>u.css`
      padding-top: ${e.s3};
      padding-bottom: ${e.s8};

      @media screen and (max-width: ${t[0]}) {
        max-width: 90%;
        margin: 0 auto;
      }
    `}
  }
`,f=u.default.div`
  &&& {
    box-sizing: border-box;
    overflow: hidden;
    margin: auto;
    display: flex !important;
    flex-direction: column;
  }
`,h=(0,u.default)(i.Typography)`
  && {
    text-align: center;
    ${({theme:{spacings:e}})=>u.css`
      padding-bottom: ${e.s3};
    `}
  }
`,g=u.default.div`
  display: inline-block;
  margin: 0 auto;
  height: 300px;
  width: 230px;
  cursor: pointer;
`,y=(0,u.default)(i.Image)`
  height: 300px;
  width: 230px;
  ${({theme:{colors:e}})=>u.css`
    border: 1px solid ${e.neutral[4]};
  `}
`,v=(0,u.default)(i.Typography)`
  && {
    text-align: center;
    ${({theme:{spacings:e}})=>u.css`
      margin-top: ${e.s4};
    `}
  }
`,b=(0,u.default)(i.Typography)`
  && {
    text-align: center;
    background: rgb(27, 185, 52, 0.2);
    ${({theme:{spacings:e,radii:t}})=>u.css`
      margin-top: ${e.s4};
      padding: ${e.s4};
      border-radius: ${t.lg};
    `}
  }
`,E=u.default.div`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`,S=e=>{var t;const{title:n,subTitle:u,items:s=[],footer:S,onItemSelect:C,autoplay:$}=e,F={dots:!0,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:3,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:s.length>4}},{breakpoint:810,settings:{slidesToShow:2,slidesToScroll:2,infinite:s.length>2}},{breakpoint:530,settings:{slidesToShow:1,slidesToScroll:1,infinite:s.length>1}}],arrowButtonPosition:"bottom",lazyLoad:"progressive",autoplay:$},[P,x]=(0,r.useState)(null),[k,T]=(0,r.useState)(null);return r.createElement(m,null,r.createElement(d,{size:"h2"},n),u&&r.createElement(p,{variant:"subtle",size:"h4"},u),r.createElement(c,null,r.createElement(i.Slider,Object.assign({},F),s.map((e=>{var t,n,o;return r.createElement(f,{key:e.title},r.createElement(h,{ellipsis:!0},e.title),r.createElement(g,{role:"button",onClick:()=>T(e),"aria-label":"Select"},r.createElement(y,Object.assign({},e.image))),(null===(t=e.link)||void 0===t?void 0:t.href)&&r.createElement(a.kC,{justifyContent:"center",py:"24px"},r.createElement(l.Z,{hrefProps:{href:e.link.href},elisif:{href:e.link.href,as:e.link.as}},r.createElement(i.Button,{variant:"neutral",size:"medium",nature:"outlined",target:e.link.isExternal?"_blank":"_self",as:"a"},e.link.label||"Use this template"))),!(null===(n=e.link)||void 0===n?void 0:n.href)&&C&&r.createElement(a.kC,{justifyContent:"center",py:"24px"},r.createElement(i.Button,{variant:"neutral",size:"medium",nature:"outlined",onClick:()=>{C(e.defaultValue),x(e.selectMessage||null)}},(null===(o=e.link)||void 0===o?void 0:o.label)||"Use this template")))})))),S&&r.createElement(v,{bold:!0,size:"h4",id:"refrens-choice-footer"},S),!!P&&r.createElement(b,{size:"h4",id:"refrens-choice-message"},r.createElement(o.kIV,{size:20,color:"#1bb934"}),` ${P}`),k&&r.createElement(i.Modal,{open:!!k,onCancel:()=>T(null),header:k.title,okText:(null===(t=k.link)||void 0===t?void 0:t.label)||"Use this template",onOk:C?()=>{C(k.defaultValue),x(k.selectMessage||null),T(null)}:void 0,bodyStyle:{textAlign:"center"}},r.createElement(E,null,r.createElement(i.Image,Object.assign({},k.previewImage,{loading:"eager"})))))};S.defaultProps={autoplay:!1};var C=S},89799:function(e,t,n){"use strict";n.d(t,{p8:function(){return r.Z}});var r=n(14020),a=n(35335);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"BILL_TYPE")&&n.d(t,{BILL_TYPE:function(){return a.BILL_TYPE}}),n.o(a,"Container")&&n.d(t,{Container:function(){return a.Container}}),n.o(a,"Faq")&&n.d(t,{Faq:function(){return a.Faq}}),n.o(a,"Features")&&n.d(t,{Features:function(){return a.Features}}),n.o(a,"FooterCopy")&&n.d(t,{FooterCopy:function(){return a.FooterCopy}}),n.o(a,"ForgotPassword")&&n.d(t,{ForgotPassword:function(){return a.ForgotPassword}}),n.o(a,"HeaderBanner")&&n.d(t,{HeaderBanner:function(){return a.HeaderBanner}}),n.o(a,"HeroBanner")&&n.d(t,{HeroBanner:function(){return a.HeroBanner}}),n.o(a,"HeroCopy")&&n.d(t,{HeroCopy:function(){return a.HeroCopy}}),n.o(a,"HowItWorks")&&n.d(t,{HowItWorks:function(){return a.HowItWorks}}),n.o(a,"InvoiceForm")&&n.d(t,{InvoiceForm:function(){return a.InvoiceForm}}),n.o(a,"InvoiceHelpers")&&n.d(t,{InvoiceHelpers:function(){return a.InvoiceHelpers}}),n.o(a,"JupiterProvider")&&n.d(t,{JupiterProvider:function(){return a.JupiterProvider}}),n.o(a,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return a.MediaLinkPlaceholder}}),n.o(a,"PageFeature")&&n.d(t,{PageFeature:function(){return a.PageFeature}}),n.o(a,"PageWrapper")&&n.d(t,{PageWrapper:function(){return a.PageWrapper}}),n.o(a,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return a.PremiumPlans}}),n.o(a,"Pricing")&&n.d(t,{Pricing:function(){return a.Pricing}}),n.o(a,"Products")&&n.d(t,{Products:function(){return a.Products}}),n.o(a,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return a.RequirementCategories}}),n.o(a,"RequirementForm")&&n.d(t,{RequirementForm:function(){return a.RequirementForm}}),n.o(a,"Services")&&n.d(t,{Services:function(){return a.Services}}),n.o(a,"Sidebar")&&n.d(t,{Sidebar:function(){return a.Sidebar}}),n.o(a,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return a.SidebarAppWrapper}}),n.o(a,"SigninForm")&&n.d(t,{SigninForm:function(){return a.SigninForm}}),n.o(a,"SignupForm")&&n.d(t,{SignupForm:function(){return a.SignupForm}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},35335:function(){},60906:function(e,t,n){"use strict";var r=n(61001);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"BILL_TYPE")&&n.d(t,{BILL_TYPE:function(){return r.BILL_TYPE}}),n.o(r,"Container")&&n.d(t,{Container:function(){return r.Container}}),n.o(r,"Faq")&&n.d(t,{Faq:function(){return r.Faq}}),n.o(r,"Features")&&n.d(t,{Features:function(){return r.Features}}),n.o(r,"FooterCopy")&&n.d(t,{FooterCopy:function(){return r.FooterCopy}}),n.o(r,"ForgotPassword")&&n.d(t,{ForgotPassword:function(){return r.ForgotPassword}}),n.o(r,"HeaderBanner")&&n.d(t,{HeaderBanner:function(){return r.HeaderBanner}}),n.o(r,"HeroBanner")&&n.d(t,{HeroBanner:function(){return r.HeroBanner}}),n.o(r,"HeroCopy")&&n.d(t,{HeroCopy:function(){return r.HeroCopy}}),n.o(r,"HowItWorks")&&n.d(t,{HowItWorks:function(){return r.HowItWorks}}),n.o(r,"InvoiceForm")&&n.d(t,{InvoiceForm:function(){return r.InvoiceForm}}),n.o(r,"InvoiceHelpers")&&n.d(t,{InvoiceHelpers:function(){return r.InvoiceHelpers}}),n.o(r,"JupiterProvider")&&n.d(t,{JupiterProvider:function(){return r.JupiterProvider}}),n.o(r,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return r.MediaLinkPlaceholder}}),n.o(r,"PageFeature")&&n.d(t,{PageFeature:function(){return r.PageFeature}}),n.o(r,"PageWrapper")&&n.d(t,{PageWrapper:function(){return r.PageWrapper}}),n.o(r,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return r.PremiumPlans}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},61001:function(){},32929:function(e,t,n){"use strict";n.d(t,{W:function(){return a}});var r=n(52220);const a=r.default.div`
  width: 100%;
  margin: 0 auto;
  padding: 0px 16px 0px 16px;
  ${({theme:{breakpoints:e,containerWidth:t="1024px"},centered:n})=>r.css`
    @media screen and (min-width: ${e[0]}) {
      max-width: ${t};
      padding: 0 10px 0 10px;
    }

    ${n&&r.css`
      text-align: center;
      padding: 0;
    `}
  `}
`},57784:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(67294),a=n(14516),i=n(2544),o=n(86893),l=n(6411),u=n(94829),s=n(45727),c=n(52220),d=n(32929);const m=(0,c.default)(d.W)`
  && {
    ${({theme:{spacings:e}})=>c.css`
      &&& {
        padding-top: ${e.s5};
        padding-bottom: ${e.s5};
      }
    `};
  }
`,{Panel:p}=i.Collapser,f={minHeight:"72px",backgroundColor:"transparent"};var h=e=>{const{title:t,faqs:n,cta:c}=e,d=(0,u.Z)("(min-width: 768px)"),h=(0,a.useInteraction)();return r.createElement(m,null,r.createElement(l.xu,{mb:40,textAlign:"center"},r.createElement(i.Typography,{as:"h2"},t)),r.createElement(l.xu,{maxWidth:900,margin:"0 auto"},r.createElement(i.Collapser,{expandIcon:r.createElement(o.OvN,{size:20}),collapseIcon:r.createElement(o.ego,{size:20})},n.map((e=>r.createElement(p,{header:r.createElement(i.Typography,{size:"h4"},e.question),headerStyle:f,collapsePanelBorderRadius:10,collapsePanelGap:16,open:d||!h,key:e._id,bodyStyle:{borderRadius:"10px"}},r.createElement(i.Typography,{size:"h6",dangerouslySetInnerHTML:{__html:e.answer}}))))),c&&r.createElement(l.kC,{justifyContent:"center",mt:20},r.createElement(s.Z,{cta:c}))))}},2221:function(e,t,n){"use strict";n.d(t,{B:function(){return r.Z}});var r=n(57784),a=n(67292);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"BILL_TYPE")&&n.d(t,{BILL_TYPE:function(){return a.BILL_TYPE}}),n.o(a,"Features")&&n.d(t,{Features:function(){return a.Features}}),n.o(a,"FooterCopy")&&n.d(t,{FooterCopy:function(){return a.FooterCopy}}),n.o(a,"ForgotPassword")&&n.d(t,{ForgotPassword:function(){return a.ForgotPassword}}),n.o(a,"HeaderBanner")&&n.d(t,{HeaderBanner:function(){return a.HeaderBanner}}),n.o(a,"HeroBanner")&&n.d(t,{HeroBanner:function(){return a.HeroBanner}}),n.o(a,"HeroCopy")&&n.d(t,{HeroCopy:function(){return a.HeroCopy}}),n.o(a,"HowItWorks")&&n.d(t,{HowItWorks:function(){return a.HowItWorks}}),n.o(a,"InvoiceForm")&&n.d(t,{InvoiceForm:function(){return a.InvoiceForm}}),n.o(a,"InvoiceHelpers")&&n.d(t,{InvoiceHelpers:function(){return a.InvoiceHelpers}}),n.o(a,"JupiterProvider")&&n.d(t,{JupiterProvider:function(){return a.JupiterProvider}}),n.o(a,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return a.MediaLinkPlaceholder}}),n.o(a,"PageFeature")&&n.d(t,{PageFeature:function(){return a.PageFeature}}),n.o(a,"PageWrapper")&&n.d(t,{PageWrapper:function(){return a.PageWrapper}}),n.o(a,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return a.PremiumPlans}}),n.o(a,"Pricing")&&n.d(t,{Pricing:function(){return a.Pricing}}),n.o(a,"Products")&&n.d(t,{Products:function(){return a.Products}}),n.o(a,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return a.RequirementCategories}}),n.o(a,"RequirementForm")&&n.d(t,{RequirementForm:function(){return a.RequirementForm}}),n.o(a,"Services")&&n.d(t,{Services:function(){return a.Services}}),n.o(a,"Sidebar")&&n.d(t,{Sidebar:function(){return a.Sidebar}}),n.o(a,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return a.SidebarAppWrapper}}),n.o(a,"SigninForm")&&n.d(t,{SigninForm:function(){return a.SigninForm}}),n.o(a,"SignupForm")&&n.d(t,{SignupForm:function(){return a.SignupForm}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},67292:function(){},94265:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(67294),a=n(6411),i=n(2544),o=n(45727),l=n(52220),u=n(32929);const s=(0,l.default)(u.W)`
  && {
    ${({theme:{spacings:e}})=>l.css`
      padding-top: ${e.s5};
      padding-bottom: ${e.s5};
    `};
  }
`,c=l.default.ul`
  list-style: none;
  margin: auto;
  padding: 0;
  max-width: 1000px;
  &:after {
    display: table;
    clear: both;
    content: '';
  }
  ${({theme:{screens:e}})=>l.css`
    @media screen and (${e.gte.xs}) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `}
`,d=l.default.li`
  ${({theme:{spacings:e,radii:t,screens:n}})=>l.css`
    padding: ${e.s4};
    position: relative;
    box-sizing: border-box;
    margin: ${e.s3};
    border-radius: ${t.lg};
    display: flex;
    flex-direction: column;
    width: 100%;

    @media screen and (${n.gte.xs}) {
      max-width: 46%;
    }

    @media screen and (${n.gte.s2}) {
      max-width: 30%;
    }
  `};
`,m=l.default.div`
  ${({theme:{colors:e,spacings:t}})=>l.css`
    margin: 0 auto ${t.s6};
    border-radius: 50%;
    background: ${e.neutral[2]};
    height: 90px;
    width: 90px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    > svg {
      margin: auto;
      color: ${e.secondary[2]};
    }
  `};
`,p=l.default.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`,f=(0,l.default)(i.Typography)`
  && {
    ${({theme:{colors:e,spacings:t}})=>l.css`
      margin-top: ${t.s4};
      color: ${e.neutral[5]};
      margin-bottom: 0;
      line-height: 1.5;
    `};
  }
`,h=e=>{const{features:t,cta:n,title:l}=e;return r.createElement(s,null,r.createElement(a.xu,{mb:"16px",textAlign:"center"},r.createElement(i.Typography,{as:"h2"},l)),r.createElement(c,null,t.map((e=>r.createElement(d,{key:e.title},r.createElement(m,null,r.createElement(i.Image,Object.assign({},e.image,{height:42,width:42,style:{overflow:"hidden"}}))),r.createElement(p,null,r.createElement(i.Typography,{size:"h4"},e.title),r.createElement(f,{size:"h5"},e.copy)))))),n&&r.createElement(a.kC,{justifyContent:"center",mt:20},r.createElement(o.Z,{cta:n})))};h.defaultProps={title:"Features"};var g=h},88498:function(e,t,n){"use strict";n.d(t,{A:function(){return r.Z}});var r=n(94265),a=n(29145);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"BILL_TYPE")&&n.d(t,{BILL_TYPE:function(){return a.BILL_TYPE}}),n.o(a,"FooterCopy")&&n.d(t,{FooterCopy:function(){return a.FooterCopy}}),n.o(a,"HeaderBanner")&&n.d(t,{HeaderBanner:function(){return a.HeaderBanner}}),n.o(a,"HeroBanner")&&n.d(t,{HeroBanner:function(){return a.HeroBanner}}),n.o(a,"HeroCopy")&&n.d(t,{HeroCopy:function(){return a.HeroCopy}}),n.o(a,"HowItWorks")&&n.d(t,{HowItWorks:function(){return a.HowItWorks}}),n.o(a,"InvoiceForm")&&n.d(t,{InvoiceForm:function(){return a.InvoiceForm}}),n.o(a,"InvoiceHelpers")&&n.d(t,{InvoiceHelpers:function(){return a.InvoiceHelpers}}),n.o(a,"JupiterProvider")&&n.d(t,{JupiterProvider:function(){return a.JupiterProvider}}),n.o(a,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return a.MediaLinkPlaceholder}}),n.o(a,"PageFeature")&&n.d(t,{PageFeature:function(){return a.PageFeature}}),n.o(a,"PageWrapper")&&n.d(t,{PageWrapper:function(){return a.PageWrapper}}),n.o(a,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return a.PremiumPlans}}),n.o(a,"Pricing")&&n.d(t,{Pricing:function(){return a.Pricing}}),n.o(a,"Products")&&n.d(t,{Products:function(){return a.Products}}),n.o(a,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return a.RequirementCategories}}),n.o(a,"RequirementForm")&&n.d(t,{RequirementForm:function(){return a.RequirementForm}}),n.o(a,"Services")&&n.d(t,{Services:function(){return a.Services}}),n.o(a,"Sidebar")&&n.d(t,{Sidebar:function(){return a.Sidebar}}),n.o(a,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return a.SidebarAppWrapper}}),n.o(a,"SigninForm")&&n.d(t,{SigninForm:function(){return a.SigninForm}}),n.o(a,"SignupForm")&&n.d(t,{SignupForm:function(){return a.SignupForm}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},29145:function(){},11398:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(67294),a=n(6411),i=n(14516),o=n(2544),l=n(45727),u=n(32929),s=n(52220);const c=s.default.div`
  ${({theme:{spacings:e}})=>s.css`
    padding: ${e.s1} 0 ${e.s5};
    && {
      p {
        font-size: 1rem;
        color: #516173;
      }
      ol {
        font-size: 1rem;
        color: #516173;
      }
      ul {
        font-size: 1rem;
        color: #516173;
      }
    }
  `}
`,d=e=>{const{cta:t,copy:n,title:s,withCollapser:d}=e,m=(0,i.useInteraction)(),p=(0,r.useMemo)((()=>r.createElement(r.Fragment,null,!d&&s&&r.createElement(o.Typography,{size:"h2",as:"h2"},s),r.createElement(c,{dangerouslySetInnerHTML:{__html:n},withCollapser:d}),t&&r.createElement(a.kC,{justifyContent:"center"},r.createElement(l.Z,{cta:t})))),[s,n,t,d]);return d?r.createElement(o.Collapser,null,r.createElement(o.Collapser.Panel,{header:r.createElement(o.Typography,{size:"h4",as:"h2"},s),open:!m},p)):r.createElement(u.W,null,p)};d.defaultProps={withCollapser:!1};var m=d},96423:function(e,t,n){"use strict";n.d(t,{G:function(){return r.Z}});var r=n(11398),a=n(79744);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"BILL_TYPE")&&n.d(t,{BILL_TYPE:function(){return a.BILL_TYPE}}),n.o(a,"HeaderBanner")&&n.d(t,{HeaderBanner:function(){return a.HeaderBanner}}),n.o(a,"HeroBanner")&&n.d(t,{HeroBanner:function(){return a.HeroBanner}}),n.o(a,"HeroCopy")&&n.d(t,{HeroCopy:function(){return a.HeroCopy}}),n.o(a,"HowItWorks")&&n.d(t,{HowItWorks:function(){return a.HowItWorks}}),n.o(a,"InvoiceForm")&&n.d(t,{InvoiceForm:function(){return a.InvoiceForm}}),n.o(a,"InvoiceHelpers")&&n.d(t,{InvoiceHelpers:function(){return a.InvoiceHelpers}}),n.o(a,"JupiterProvider")&&n.d(t,{JupiterProvider:function(){return a.JupiterProvider}}),n.o(a,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return a.MediaLinkPlaceholder}}),n.o(a,"PageFeature")&&n.d(t,{PageFeature:function(){return a.PageFeature}}),n.o(a,"PageWrapper")&&n.d(t,{PageWrapper:function(){return a.PageWrapper}}),n.o(a,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return a.PremiumPlans}}),n.o(a,"Pricing")&&n.d(t,{Pricing:function(){return a.Pricing}}),n.o(a,"Products")&&n.d(t,{Products:function(){return a.Products}}),n.o(a,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return a.RequirementCategories}}),n.o(a,"RequirementForm")&&n.d(t,{RequirementForm:function(){return a.RequirementForm}}),n.o(a,"Services")&&n.d(t,{Services:function(){return a.Services}}),n.o(a,"Sidebar")&&n.d(t,{Sidebar:function(){return a.Sidebar}}),n.o(a,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return a.SidebarAppWrapper}}),n.o(a,"SigninForm")&&n.d(t,{SigninForm:function(){return a.SigninForm}}),n.o(a,"SignupForm")&&n.d(t,{SignupForm:function(){return a.SignupForm}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},79744:function(){},55296:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(70655),a=n(67294),i=n(2544),o=n(93002),l=n(52019),u=n(68041),s=n(48398),c=(0,u.object)().shape({email:(0,s.Do)().required("Email is required")}),d=n(58929),m=n(52220);const p=m.default.div`
  ${({theme:{spacings:e}})=>m.css`
    margin: ${e.s7} auto;
    display: flex;
    justify-content: center;
  `}
`,f={email:""};var h=e=>{const{defaultValue:t,validateEmail:n,onSubmit:u}=e,[s,m]=(0,a.useState)(null),[h,g]=(0,a.useState)(null),y=(0,a.useRef)(),v=(0,a.useRef)(null),[b,E]=(0,o.Z)(),S=(0,a.useCallback)(((e,{setSubmitting:t})=>(0,r.mG)(void 0,void 0,void 0,(function*(){try{yield u(Object.assign(Object.assign({},e),{type:"forgotpassword"}),h)}catch(n){y.current.onError(n).catch((()=>{m((null===n||void 0===n?void 0:n.message)||n)}))}return t(!1),Promise.resolve()}))),[u,y.current]),C=(0,a.useMemo)((()=>a.createElement(i.Typography,{size:"small",variant:"warn",inline:!0},"Email Doesn't Exists.\xa0",a.createElement(l.Z,{hrefProps:{href:"/register"},elisif:{href:"/register"}},a.createElement(i.Typography.A,{size:"small",variant:"warn",inline:!0},"Click here to Signup.")))),[]),$=(0,a.useCallback)((()=>(0,r.mG)(void 0,void 0,void 0,(function*(){var e;if(n){const{value:r,error:a}=(null===(e=v.current)||void 0===e?void 0:e.getFieldMeta("email"))||{};if(r&&!a)try{const e=yield n(r,h);E({status:e?"none":"warn",message:e?"":C})}catch(t){y.current.onError(t).catch((()=>{m((null===t||void 0===t?void 0:t.message)||t)})),E({status:"none",message:""})}}}))),[n,v.current,y.current]),F={initialValues:f,validationSchema:c,onSubmit:S,validateOnMount:!0,innerRef:v};return a.createElement(i.Form,{formik:F},a.createElement(i.Form.Reset,{resetValue:t}),a.createElement(i.Form.Input,Object.assign({name:"email",outlined:!0,required:!0,placeholder:"Your email id"},b,{onBlur:$})),a.createElement(d.Z,{ref:y,onChange:g,wrapperProps:{mt:"30px",alignSelf:"center"}}),s&&a.createElement(p,null,a.createElement(i.Form.Error,{error:s})),a.createElement(p,null,a.createElement(i.Form.Button,{size:"large"},"Get Reset Link")))}},12433:function(e,t,n){"use strict";n.d(t,{o:function(){return r.Z}});var r=n(55296),a=n(10470);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"BILL_TYPE")&&n.d(t,{BILL_TYPE:function(){return a.BILL_TYPE}}),n.o(a,"Features")&&n.d(t,{Features:function(){return a.Features}}),n.o(a,"FooterCopy")&&n.d(t,{FooterCopy:function(){return a.FooterCopy}}),n.o(a,"HeaderBanner")&&n.d(t,{HeaderBanner:function(){return a.HeaderBanner}}),n.o(a,"HeroBanner")&&n.d(t,{HeroBanner:function(){return a.HeroBanner}}),n.o(a,"HeroCopy")&&n.d(t,{HeroCopy:function(){return a.HeroCopy}}),n.o(a,"HowItWorks")&&n.d(t,{HowItWorks:function(){return a.HowItWorks}}),n.o(a,"InvoiceForm")&&n.d(t,{InvoiceForm:function(){return a.InvoiceForm}}),n.o(a,"InvoiceHelpers")&&n.d(t,{InvoiceHelpers:function(){return a.InvoiceHelpers}}),n.o(a,"JupiterProvider")&&n.d(t,{JupiterProvider:function(){return a.JupiterProvider}}),n.o(a,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return a.MediaLinkPlaceholder}}),n.o(a,"PageFeature")&&n.d(t,{PageFeature:function(){return a.PageFeature}}),n.o(a,"PageWrapper")&&n.d(t,{PageWrapper:function(){return a.PageWrapper}}),n.o(a,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return a.PremiumPlans}}),n.o(a,"Pricing")&&n.d(t,{Pricing:function(){return a.Pricing}}),n.o(a,"Products")&&n.d(t,{Products:function(){return a.Products}}),n.o(a,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return a.RequirementCategories}}),n.o(a,"RequirementForm")&&n.d(t,{RequirementForm:function(){return a.RequirementForm}}),n.o(a,"Services")&&n.d(t,{Services:function(){return a.Services}}),n.o(a,"Sidebar")&&n.d(t,{Sidebar:function(){return a.Sidebar}}),n.o(a,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return a.SidebarAppWrapper}}),n.o(a,"SigninForm")&&n.d(t,{SigninForm:function(){return a.SigninForm}}),n.o(a,"SignupForm")&&n.d(t,{SignupForm:function(){return a.SignupForm}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},10470:function(){},99701:function(e,t,n){"use strict";var r=n(70655),a=n(67294),i=n(93645),o=n.n(i),l=n(2544),u=n(26316);t.Z=e=>{const{onSuccess:t}=e,n=(0,r._T)(e,["onSuccess"]),i=(0,a.useRef)(null),{config:{googleClientId:s}}=(0,u.qK)();return a.createElement(o(),{clientId:s,render:e=>a.createElement(l.Button.Google,Object.assign({},n,{ref:i,onClick:e.onClick})),onSuccess:e=>{t({type:"google",strategy:"google",tokenId:e.tokenId?e.tokenId:e.code})}})}},37403:function(e,t,n){"use strict";var r=n(91706);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"BILL_TYPE")&&n.d(t,{BILL_TYPE:function(){return r.BILL_TYPE}}),n.o(r,"HeaderBanner")&&n.d(t,{HeaderBanner:function(){return r.HeaderBanner}}),n.o(r,"HeroBanner")&&n.d(t,{HeroBanner:function(){return r.HeroBanner}}),n.o(r,"HeroCopy")&&n.d(t,{HeroCopy:function(){return r.HeroCopy}}),n.o(r,"HowItWorks")&&n.d(t,{HowItWorks:function(){return r.HowItWorks}}),n.o(r,"InvoiceForm")&&n.d(t,{InvoiceForm:function(){return r.InvoiceForm}}),n.o(r,"InvoiceHelpers")&&n.d(t,{InvoiceHelpers:function(){return r.InvoiceHelpers}}),n.o(r,"JupiterProvider")&&n.d(t,{JupiterProvider:function(){return r.JupiterProvider}}),n.o(r,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return r.MediaLinkPlaceholder}}),n.o(r,"PageFeature")&&n.d(t,{PageFeature:function(){return r.PageFeature}}),n.o(r,"PageWrapper")&&n.d(t,{PageWrapper:function(){return r.PageWrapper}}),n.o(r,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return r.PremiumPlans}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},91706:function(){},65570:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(67294),a=n(89211),i=n(2544),o=n(34578),l=n(89583),u=n(45727),s=n(52220),c=n(32929);const d=s.default.div`
  width: 100%;
  height: auto;
  min-height: 20vh;
  padding: 0 0 40px 0;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  position: relative;
  margin-top: -76px;
  padding-top: 76px;
  > div {
    width: 100%;
  }
  ${({theme:{colors:e},bg:t,bgColor:n,textColor:r})=>s.css`
    background: ${n};
    color: ${r};
    ${t&&s.css`
      position: relative;
      :before {
        content: '';
        background: ${e.neutral[7]} url(${t});
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-size: cover;
      }
    `};
  `}
`,m=(0,s.default)(c.W)`
  && {
    z-index: 1;
    ${({theme:{breakpoints:e,screens:t},centered:n})=>s.css`
      ${n&&s.css`
        text-align: center;
        @media screen and (${t.gte.sm}) {
          max-width: 80%;
        }
        @media screen and (${t.gte.md}) {
          max-width: 60%;
        }
      `}
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: ${e[1]}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    `}
  }
`,p=s.default.div`
  && {
    font-size: 1rem;
  }
`,f=s.default.div`
  display: flex;
  ${({theme:{spacings:e,screens:t}})=>s.css`
    margin-top: ${e.s6};
    > button:not(:last-child) {
      margin-right: ${e.s5};
    }
    @media screen and (${t.lte.xs}) {
      justify-content: center;
    }
  `}
`,h=s.default.div`
  object-fit: contain;
  position: relative;
  align-self: center;
  height: 234px;
  width: 356px;
`,g=s.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 40%;
  right: 36%;
  cursor: pointer;

  ${({theme:{colors:e,spacings:t}})=>s.css`
    svg {
      fill: ${e.neutral[0]};
    }
    :hover svg {
      fill: ${e.primary[2]};
    }
    :hover {
      > * {
        &&& {
          color: ${e.primary[2]};
        }
      }
    }

    > span {
      margin-top: ${t.s2};
    }
  `}
`,y=s.default.div`
  display: flex;
  margin-bottom: 8px;
  ${({theme:{colors:e,spacings:t}})=>s.css`
    > svg {
      color: ${e.other.green};
      margin-right: ${t.s1};
      height: 20px;
      width: 20px;
    }
  `}
`,v=s.default.div`
  display: flex;
  flex-direction: row;
  ${({theme:{breakpoints:e}})=>s.css`
    @media screen and (max-width: ${e[2]}) {
      justify-content: space-between;
    }

    @media screen and (max-width: ${e[1]}) {
      display: block;
      text-align: center;
    }
  `}
`,b=s.default.div`
  display: flex;
  flex-direction: column;
  ${({theme:{breakpoints:e,colors:t,radii:n,spacings:r}})=>s.css`
    border-radius: ${n.hg};
    /* background-color: ${t.neutral[0]};
    background-color: ${t.secondary[4]}; */
    background-color: rgba(0,0,0,0.3);
    // background color undecided
    max-width: 320px;
    padding: ${r.s4} ${r.s5};
    padding-top: ${r.s7};
    margin-right: ${r.s3};
    @media screen and (max-width: ${e[1]}) {
      margin: 0 auto;
      margin-bottom: ${r.s3};
    `}
`,E=(0,s.default)(i.Typography)`
  && {
    flex-grow: 1;
    ${({theme:{spacings:e}})=>s.css`
      padding-top: ${e.s4};
      padding-bottom: ${e.s6};
    `}
  }
`,S=s.default.div`
  box-sizing: border-box;
  min-width: 0;
  flex-direction: column;
  display: flex;
  padding-top: 16px;
  ${({theme:{screens:e,spacings:t}})=>s.css`
    margin-bottom: ${t.s7};
    @media screen and (${e.lte.xs}) {
      margin-top: 1.5rem;
    }
  `}
  &[data-centered] {
    align-items: center;
  }
`,C=(0,s.default)(i.Typography).attrs({as:"h1",variant:"white"})`
  && {
    ${({theme:{screens:e,sizes:t}})=>s.css`
      @media screen and (${e.lte.xs}) {
        font-size: ${t.h2};
      }
      &[data-large] {
        font-size: ${t.large};
        text-transform: capitalize;
        font-weight: 600;
        @media screen and (${e.gte.xs}) {
          font-size: ${t.h1};
        }
        @media screen and (${e.gte.md}) {
          font-size: 64px;
        }
      }
    `}
  }
`,$=s.default.div`
  && {
    ${({theme:{sizes:e,screens:t}})=>s.css`
      font-size: ${e.h5};
      text-transform: capitalize;
      font-weight: 500;
      background: -webkit-linear-gradient(#ff6773, #ffc926);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-top: 60px;
      display: inline-flex;
      @media screen and (${t.lte.sm}) {
        margin-top: 120px;
      }
      @media screen and (${t.lte.xs}) {
        margin-top: 0;
      }
      img {
        margin-right: 8px;
        width: 24px;
      }
    `}
  }
`,F=s.default.div`
  font-size: 20px;
  margin-bottom: 40px;
  p {
    font-size: 20px;
  }
  h2 {
    font-size: 20px;
  }
`,P=s.default.div`
  padding-left: 10px;
  flex-shrink: 0;
  display: none;
  align-items: center;
  justify-content: center;
  &[data-with-video] {
    display: flex;
  }
  ${({theme:{breakpoints:e}})=>s.css`
    @media screen and (min-width: ${e[2]}) {
      display: flex;
    }
  `}
`,x=s.default.div`
  position: relative;
  width: 540px;
  ${({theme:{breakpoints:e}})=>s.css`
    @media screen and (max-width: ${e[1]}) {
      display: none;
    }
  `}
`,k=s.default.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  ${({theme:{breakpoints:e}})=>s.css`
    @media screen and (max-width: ${e[1]}) {
      display: none;
    }
  `}
  img {
    object-fit: cover;
  }
`,T=(0,r.lazy)((()=>n.e(6310).then(n.bind(n,56310))));var w=e=>{const{title:t,features:n,copy:s,bannerVideo:c,bannerImage:w,services:L,backgroundImage:A,cta:R,centered:N,bgColor:D="var(--color-secondary-regular, '#733dd9')",textColor:I="#fff",params:M={}}=e,{largeHeading:B=N,withPremiumHeader:q}=M,[O,_]=(0,a.Z)(!1);return r.createElement(d,{bgColor:D,textColor:I,className:"headerbannerwrapper"},r.createElement(m,{centered:N,className:"widthc-ntainer"},r.createElement(S,{"data-centered":N||void 0},q&&r.createElement($,null,r.createElement("img",{src:"https://s3.ap-south-1.amazonaws.com/refrens.elisif.media/premium_icon_gradient_db378626cb.svg",alt:" "}),"Refrens Premium"),r.createElement(C,{"data-large":B||void 0},t),!!s&&r.createElement(F,null,s),null===n||void 0===n?void 0:n.map((e=>r.createElement(y,null,r.createElement(l.FJM,null),r.createElement(p,{dangerouslySetInnerHTML:{__html:e}})))),R&&r.createElement(f,null,r.createElement(u.Z,{cta:R})),L&&r.createElement(v,null,L.map((({title:e,subTitle:t,cta:n})=>r.createElement(b,{key:e},r.createElement(i.Typography,{size:"h4",variant:"white",bold:!0},e),r.createElement(E,{size:"label",variant:"white"},t),n&&r.createElement(u.Z,{cta:n})))))),!N&&w&&r.createElement(P,{"data-with-video":!!c||void 0},c?r.createElement(h,null,r.createElement(i.Image,Object.assign({},w,{height:234,width:356,loading:"eager"})),r.createElement(g,{onClick:()=>_(!0)},r.createElement(o.cF8,{size:60}),r.createElement(i.Typography,{variant:"white"},"See Demo Video")),r.createElement(i.Modal,{open:O,onCancel:()=>_(!1),footer:null,width:740,bodyStyle:{padding:0}},O&&r.createElement(r.Suspense,{fallback:r.createElement("div",null,"Loading...")},r.createElement(T,{playing:O,controls:!0,url:c,width:"100%",height:417})))):r.createElement(x,null,r.createElement(i.Image,Object.assign({},w,{loading:"eager"}))))),A&&r.createElement(k,null,r.createElement(i.Image,Object.assign({},A,{loading:"eager"}))))}},33628:function(e,t,n){"use strict";n.d(t,{b:function(){return r.Z}});var r=n(65570),a=n(38595);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"BILL_TYPE")&&n.d(t,{BILL_TYPE:function(){return a.BILL_TYPE}}),n.o(a,"HeroBanner")&&n.d(t,{HeroBanner:function(){return a.HeroBanner}}),n.o(a,"HeroCopy")&&n.d(t,{HeroCopy:function(){return a.HeroCopy}}),n.o(a,"HowItWorks")&&n.d(t,{HowItWorks:function(){return a.HowItWorks}}),n.o(a,"InvoiceForm")&&n.d(t,{InvoiceForm:function(){return a.InvoiceForm}}),n.o(a,"InvoiceHelpers")&&n.d(t,{InvoiceHelpers:function(){return a.InvoiceHelpers}}),n.o(a,"JupiterProvider")&&n.d(t,{JupiterProvider:function(){return a.JupiterProvider}}),n.o(a,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return a.MediaLinkPlaceholder}}),n.o(a,"PageFeature")&&n.d(t,{PageFeature:function(){return a.PageFeature}}),n.o(a,"PageWrapper")&&n.d(t,{PageWrapper:function(){return a.PageWrapper}}),n.o(a,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return a.PremiumPlans}}),n.o(a,"Pricing")&&n.d(t,{Pricing:function(){return a.Pricing}}),n.o(a,"Products")&&n.d(t,{Products:function(){return a.Products}}),n.o(a,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return a.RequirementCategories}}),n.o(a,"RequirementForm")&&n.d(t,{RequirementForm:function(){return a.RequirementForm}}),n.o(a,"Services")&&n.d(t,{Services:function(){return a.Services}}),n.o(a,"Sidebar")&&n.d(t,{Sidebar:function(){return a.Sidebar}}),n.o(a,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return a.SidebarAppWrapper}}),n.o(a,"SigninForm")&&n.d(t,{SigninForm:function(){return a.SigninForm}}),n.o(a,"SignupForm")&&n.d(t,{SignupForm:function(){return a.SignupForm}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},38595:function(){},51642:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(67294),a=n(2544),i=n(45727),o=n(52220),l=n(32929);const u=(0,o.default)(l.W)`
  && {
    min-height: 400px;
    max-width: 1160px;
    border-radius: 12px;
    position: relative;
    margin-bottom: 60px;
    margin-top: 60px;
    ${({theme:{colors:e,breakpoints:t,spacings:n}})=>o.css`
      background-color: ${e.secondary[2]};
      -webkit-box-shadow: 0px 10px 20px 0px #c681ee;
      -moz-box-shadow: 0px 10px 20x 0px #c681ee;
      box-shadow: 0px 10px 20px 0px #c681ee;

      @media screen and (max-width: ${t[1]}) {
        padding: 0 ${n.s4};
      }
    `};
  }
`,s=(0,o.default)(a.Image)`
  && {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    img {
      ${({theme:{breakpoints:e}})=>o.css`
        @media screen and (max-width: ${e[1]}) {
          display: none;
        }
      `}
    }
  }
`,c=o.default.div`
  max-width: 35%;
  padding: 0;
  position: absolute;
  top: 80px;
  left: 80px;
  margin: auto 0;
  z-index: 99;
  ${({theme:{breakpoints:e}})=>o.css`
    @media screen and (max-width: ${e[1]}) {
      max-width: 100%;
      top: 20px;
      left: 20px;
    }
  `}
`,d=o.default.div`
  ${({theme:{spacings:e}})=>o.css`
    padding: ${e.s7} 0;
  `}
`;var m=e=>{const{heading:t,subHeading:n,image:o,cta:l}=e;return r.createElement(u,null,r.createElement(s,Object.assign({},o)),r.createElement(c,null,r.createElement(a.Typography,{size:"h1",variant:"white"},t),r.createElement(d,null,r.createElement(a.Typography,{size:"h4",variant:"white"},n)),l&&r.createElement(i.Z,{cta:l})))}},72217:function(e,t,n){"use strict";n.d(t,{y:function(){return r.Z}});var r=n(51642),a=n(39925);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"BILL_TYPE")&&n.d(t,{BILL_TYPE:function(){return a.BILL_TYPE}}),n.o(a,"HeroCopy")&&n.d(t,{HeroCopy:function(){return a.HeroCopy}}),n.o(a,"HowItWorks")&&n.d(t,{HowItWorks:function(){return a.HowItWorks}}),n.o(a,"InvoiceForm")&&n.d(t,{InvoiceForm:function(){return a.InvoiceForm}}),n.o(a,"InvoiceHelpers")&&n.d(t,{InvoiceHelpers:function(){return a.InvoiceHelpers}}),n.o(a,"JupiterProvider")&&n.d(t,{JupiterProvider:function(){return a.JupiterProvider}}),n.o(a,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return a.MediaLinkPlaceholder}}),n.o(a,"PageFeature")&&n.d(t,{PageFeature:function(){return a.PageFeature}}),n.o(a,"PageWrapper")&&n.d(t,{PageWrapper:function(){return a.PageWrapper}}),n.o(a,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return a.PremiumPlans}}),n.o(a,"Pricing")&&n.d(t,{Pricing:function(){return a.Pricing}}),n.o(a,"Products")&&n.d(t,{Products:function(){return a.Products}}),n.o(a,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return a.RequirementCategories}}),n.o(a,"RequirementForm")&&n.d(t,{RequirementForm:function(){return a.RequirementForm}}),n.o(a,"Services")&&n.d(t,{Services:function(){return a.Services}}),n.o(a,"Sidebar")&&n.d(t,{Sidebar:function(){return a.Sidebar}}),n.o(a,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return a.SidebarAppWrapper}}),n.o(a,"SigninForm")&&n.d(t,{SigninForm:function(){return a.SigninForm}}),n.o(a,"SignupForm")&&n.d(t,{SignupForm:function(){return a.SignupForm}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},39925:function(){},35558:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(67294),a=n(45727),i=n(52220),o=n(2544),l=n(32929);const u=i.default.div`
  width: 100%;
  padding: 48px 80px;
  ${({theme:{colors:e,breakpoints:t}})=>i.css`
    background-color: ${e.secondary[2]};
    box-shadow: 0 3px 6px 0 ${e.neutral[4]};

    @media screen and (max-width: ${t[0]}) {
      padding: 24px 40px;
    }
  `}
`,s=(0,i.default)(l.W)`
  && {
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    ${({theme:{breakpoints:e}})=>i.css`
      @media screen and (max-width: ${e[1]}) {
        flex-direction: column;
      }
    `}
  }
`,c=i.default.span`
  ${({theme:{breakpoints:e,spacings:t}})=>i.css`
    @media screen and (max-width: ${e[1]}) {
      margin-top: ${t.s5};
    }
  `}
`,d=(0,i.default)(o.Typography)`
  && {
    font-size: 28px;
    line-height: 1.3;
  }
`,m=e=>{const{copy:t,cta:n}=e;return r.createElement(u,null,r.createElement(s,null,r.createElement(d,{variant:"white"},t),n&&r.createElement(c,null,r.createElement(a.Z,{cta:n}))))};m.defaultProps={copy:"Fast & unlimited Invoicing. Free Forever"};var p=m},1902:function(e,t,n){"use strict";n.d(t,{E:function(){return r.Z}});var r=n(35558),a=n(81578);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"BILL_TYPE")&&n.d(t,{BILL_TYPE:function(){return a.BILL_TYPE}}),n.o(a,"HowItWorks")&&n.d(t,{HowItWorks:function(){return a.HowItWorks}}),n.o(a,"InvoiceForm")&&n.d(t,{InvoiceForm:function(){return a.InvoiceForm}}),n.o(a,"InvoiceHelpers")&&n.d(t,{InvoiceHelpers:function(){return a.InvoiceHelpers}}),n.o(a,"JupiterProvider")&&n.d(t,{JupiterProvider:function(){return a.JupiterProvider}}),n.o(a,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return a.MediaLinkPlaceholder}}),n.o(a,"PageFeature")&&n.d(t,{PageFeature:function(){return a.PageFeature}}),n.o(a,"PageWrapper")&&n.d(t,{PageWrapper:function(){return a.PageWrapper}}),n.o(a,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return a.PremiumPlans}}),n.o(a,"Pricing")&&n.d(t,{Pricing:function(){return a.Pricing}}),n.o(a,"Products")&&n.d(t,{Products:function(){return a.Products}}),n.o(a,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return a.RequirementCategories}}),n.o(a,"RequirementForm")&&n.d(t,{RequirementForm:function(){return a.RequirementForm}}),n.o(a,"Services")&&n.d(t,{Services:function(){return a.Services}}),n.o(a,"Sidebar")&&n.d(t,{Sidebar:function(){return a.Sidebar}}),n.o(a,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return a.SidebarAppWrapper}}),n.o(a,"SigninForm")&&n.d(t,{SigninForm:function(){return a.SigninForm}}),n.o(a,"SignupForm")&&n.d(t,{SignupForm:function(){return a.SignupForm}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},81578:function(){},63921:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(67294),a=n(6411),i=n(2544),o=n(45727),l=n(52220),u=n(32929);const s=(0,l.default)(u.W)`
  && {
    display: flex;
    flex-direction: column;
    ${({theme:{spacings:e}})=>l.css`
      padding-top: ${e.s5};
      padding-bottom: ${e.s5};
    `};
  }
`,c=l.default.div`
  text-align: center;
  margin: 0 auto;
`,d=l.default.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  ${({theme:{breakpoints:e,spacings:t}})=>l.css`
    margin-top: ${t.s7};
    @media screen and (max-width: ${e[0]}) {
      display: block;
    }
  `}
`,m=l.default.div`
  display: flex;
  flex-direction: column;
  ${({theme:{spacings:e,screens:t}})=>l.css`
    padding: ${e.s4};
    margin: ${e.s3};

    @media screen and (${t.gte.xs}) {
      max-width: 46%;
    }

    @media screen and (${t.gte.s2}) {
      flex: 1;
    }
  `};
`,p=l.default.div`
  ${({theme:{spacings:e,colors:t}})=>l.css`
    display: flex;
    justify-content: center;
    margin: 0 auto ${e.s6};
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: ${t.neutral[2]};
    overflow: hidden;
  `};
`,f=l.default.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`,h=(0,l.default)(i.Typography)`
  && {
    ${({theme:{spacings:e}})=>l.css`
      margin-top: ${e.s2};
    `};
  }
`,g=e=>{const{title:t,items:n,cta:l,showStepNumber:u}=e;return r.createElement(s,null,r.createElement(c,null,r.createElement(i.Typography,{as:"h2"},t)),r.createElement(d,null,n.map(((e,t)=>r.createElement(m,{key:e._id},r.createElement(p,null,r.createElement(i.Image,Object.assign({},e.image,{height:150,width:150}))),r.createElement(f,null,r.createElement(i.Typography,{size:"h4",bold:!0},`${u?`${t+1}.`:""} ${e.title}`),r.createElement(h,{variant:"subtle",size:"h5"},e.subTitle)))))),l&&r.createElement(a.kC,{justifyContent:"center",mt:"20px"},r.createElement(o.Z,{cta:l})))};g.defaultProps={title:"How it works?",showStepNumber:!0};var y=g},17484:function(e,t,n){"use strict";n.d(t,{n:function(){return r.Z}});var r=n(63921),a=n(68272);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"BILL_TYPE")&&n.d(t,{BILL_TYPE:function(){return a.BILL_TYPE}}),n.o(a,"InvoiceForm")&&n.d(t,{InvoiceForm:function(){return a.InvoiceForm}}),n.o(a,"InvoiceHelpers")&&n.d(t,{InvoiceHelpers:function(){return a.InvoiceHelpers}}),n.o(a,"JupiterProvider")&&n.d(t,{JupiterProvider:function(){return a.JupiterProvider}}),n.o(a,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return a.MediaLinkPlaceholder}}),n.o(a,"PageFeature")&&n.d(t,{PageFeature:function(){return a.PageFeature}}),n.o(a,"PageWrapper")&&n.d(t,{PageWrapper:function(){return a.PageWrapper}}),n.o(a,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return a.PremiumPlans}}),n.o(a,"Pricing")&&n.d(t,{Pricing:function(){return a.Pricing}}),n.o(a,"Products")&&n.d(t,{Products:function(){return a.Products}}),n.o(a,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return a.RequirementCategories}}),n.o(a,"RequirementForm")&&n.d(t,{RequirementForm:function(){return a.RequirementForm}}),n.o(a,"Services")&&n.d(t,{Services:function(){return a.Services}}),n.o(a,"Sidebar")&&n.d(t,{Sidebar:function(){return a.Sidebar}}),n.o(a,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return a.SidebarAppWrapper}}),n.o(a,"SigninForm")&&n.d(t,{SigninForm:function(){return a.SigninForm}}),n.o(a,"SignupForm")&&n.d(t,{SignupForm:function(){return a.SignupForm}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},68272:function(){},27975:function(e,t,n){"use strict";var r=n(24165);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"BILL_TYPE")&&n.d(t,{BILL_TYPE:function(){return r.BILL_TYPE}}),n.o(r,"InvoiceForm")&&n.d(t,{InvoiceForm:function(){return r.InvoiceForm}}),n.o(r,"InvoiceHelpers")&&n.d(t,{InvoiceHelpers:function(){return r.InvoiceHelpers}}),n.o(r,"JupiterProvider")&&n.d(t,{JupiterProvider:function(){return r.JupiterProvider}}),n.o(r,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return r.MediaLinkPlaceholder}}),n.o(r,"PageFeature")&&n.d(t,{PageFeature:function(){return r.PageFeature}}),n.o(r,"PageWrapper")&&n.d(t,{PageWrapper:function(){return r.PageWrapper}}),n.o(r,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return r.PremiumPlans}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},24165:function(){},33409:function(e,t,n){"use strict";n.d(t,{$M:function(){return i},qg:function(){return Er},GT:function(){return Sr}});var r,a,i,o,l,u,s,c,d,m=(e,t)=>"IN"===e.country&&"IN"===t.country&&(!e.gstState||!t.gstState||Number(e.gstState)===Number(t.gstState)),p=n(70655),f=JSON.parse('[{"key":"name","label":"Item","system":true,"isHidden":false,"dataType":"text"},{"key":"hsn","label":"HSN/SAC","system":true,"isHidden":false,"dataType":"number"},{"key":"gstRate","label":"GST","system":true,"isHidden":false,"dataType":"number","global":{"label":"Tax Rate"}},{"key":"quantity","label":"Quantity","system":true,"isHidden":false,"dataType":"number"},{"key":"rate","label":"Rate","system":true,"isHidden":false,"dataType":"number"},{"key":"discount","label":"Discount","system":true,"isHidden":false,"dataType":"number"},{"key":"amount","label":"Amount","system":true,"isHidden":false,"dataType":"number","formula":"(Quantity * Rate)"},{"key":"igst","label":"IGST","system":true,"isHidden":false,"dataType":"number","formula":"(Taxable Amount * GST) / 100)","global":{"label":"Tax","formula":"(Taxable Amount * Tax Rate) / 100)"}},{"key":"cgst","label":"CGST","system":true,"isHidden":false,"dataType":"number","formula":"(Taxable Amount * (GST/2) / 100)"},{"key":"sgst","label":"SGST","system":true,"isHidden":false,"dataType":"number","formula":"(Taxable Amount * (GST/2) / 100)"},{"key":"total","label":"Total","system":true,"isHidden":false,"dataType":"number","formula":"(Taxable Amount + Tax)"}]');function h(e,t){return e===a.GLOBAL?f.map((e=>{const{global:n}=e,r=(0,p._T)(e,["global"]);let{label:a}=e;return"gstRate"===e.key&&t&&(a=`${t} Rate`),"igst"===e.key&&t&&(a=`${t}`),Object.assign(Object.assign(Object.assign({},r),n),{label:a})})):f.map((e=>{const{global:t}=e;return(0,p._T)(e,["global"])}))}!function(e){e.VENDOR="Vendor",e.CLIENT="Client"}(r||(r={})),function(e){e.INDIA="INDIA",e.GLOBAL="GLOBAL"}(a||(a={})),function(e){e.INVOICE="INVOICE",e.PROFORMAINV="PROFORMAINV",e.QUOTATION="QUOTATION",e.PURCHASEORDER="PURCHASEORDER",e.CREDITNOTE="CREDITNOTE",e.DELIVERYCHALLAN="DELIVERYCHALLAN",e.DEBITNOTE="DEBITNOTE",e.PAYMENTRECEIPT="PAYMENTRECEIPT"}(i||(i={})),function(e){e.PERCENTAGE="PERCENTAGE",e.FIXEDAMOUNT="FIXED_AMOUNT"}(o||(o={})),function(e){e.TEXT="text",e.NUMBER="number",e.DATE="date",e.CURRENCY="currency"}(l||(l={})),function(e){e.INVOICE="INVOICE",e.BOS="BOS"}(u||(u={})),function(e){e.TEXT="TEXT",e.DATE="DATE",e.NUMBER="NUMBER",e.CURRENCY="CURRENCY",e.BOOLEAN="BOOLEAN"}(s||(s={})),function(e){e.NONE="None",e.WEEKLY="Weekly",e.MONTHLY="Monthly",e.QUATERLY="Quaterly",e.HALFYEARLY="Halfyearly",e.YEARLY="Yearly",e.YEARLY2="2Yearly",e.YEARLY3="3Yearly",e.YEARLY5="5Yearly"}(c||(c={})),function(e){e.DRAFT="DRAFT",e.UNPAID="UNPAID",e.EMAIL="EMAIL"}(d||(d={}));var g=JSON.parse('{"10":"Bihar","11":"Sikkim","12":"Arunachal Pradesh","13":"Nagaland","14":"Manipur","15":"Mizoram","16":"Tripura","17":"Meghlaya","18":"Assam","19":"West bengal","20":"Jharkhand","21":"Odisha","22":"Chattisgarh","23":"Madhya Pradesh","24":"Gujarat","25":"Daman And Diu","26":"Dadra And Nagar Haveli","27":"Maharashtra","28":"Andhra Pradesh (Old)","29":"Karnataka","30":"Goa","31":"Lakshwadeep","32":"Kerala","33":"Tamil Nadu","34":"Puducherry","35":"Andaman And Nicobar islands","36":"Telangana","37":"Andhra Pradesh","01":"Jammu And Kashmir","02":"Himachal Pradesh","03":"Punjab","04":"Chandigarh","05":"Uttarakhand","06":"Haryana","07":"Delhi","08":"Rajasthan","09":"Uttar Pradesh"}');var y=(e,t=!1)=>{let n;return"28"===e?n="Andhra Pradesh (28)":e&&t?n=`${g[e]} (${e})`:e&&(n=g[e]),n};var v=JSON.parse('{"invoiceNumber":"Invoice No","invoiceDate":"Invoice Date","dueDate":"Due Date","purchaseOrderNumber":"PO Number","quotationNumber":"Quotation No.","terms":"Terms and Conditions","notes":"Additional Notes","billedBy":"Billed By","billedTo":"Billed To","expenseNumber":"Expense No","shippedTo":"Shipped To","shippedFrom":"Shipped From","transport":"Transport Details","attachment":"Attachments","signature":"Authorised Signatory","taxName":"GST"}'),b=JSON.parse('{"invoiceNumber":"Quotation No","invoiceDate":"Quotation Date","dueDate":"Due Date","purchaseOrderNumber":"PO Number","quotationNumber":"Quotation No.","terms":"Terms and Conditions","notes":"Additional Notes","billedBy":"Quotation From","billedTo":"Quotation For","expenseNumber":"Expense No","shippedTo":"Shipped To","shippedFrom":"Shipped From","transport":"Transport Details","attachment":"Attachments","signature":"Authorised Signatory","taxName":"GST"}'),E=JSON.parse('{"invoiceNumber":"Challan No","invoiceDate":"Delivery Challan Date","challanType":"Delivery Challan Type","dueDate":"Due Date","purchaseOrderNumber":"PO Number","quotationNumber":"Quotation No.","terms":"Terms and Conditions","notes":"Additional Notes","billedBy":"Delivered By","billedTo":"Delivered To","expenseNumber":"Expense No","shippedTo":"Shipped To","transport":"Transport Details","attachment":"Attachments","signature":"Authorised Signatory","taxName":"GST"}'),S=JSON.parse('{"invoiceNumber":"Credit Note No","invoiceDate":"Credit Note Date","dueDate":"Due Date","purchaseOrderNumber":"PO Number","quotationNumber":"Quotation No.","terms":"Terms and Conditions","notes":"Additional Notes","billedBy":"Issued By","billedTo":"Issued To","expenseNumber":"Expense No","shippedTo":"Shipped To","shippedFrom":"Shipped From","transport":"Transport Details","attachment":"Attachments","signature":"Authorised Signatory","taxName":"GST"}'),C=JSON.parse('{"invoiceNumber":"Payment Receipt No","invoiceDate":"Payment Receipt Date","dueDate":"Due Date","purchaseOrderNumber":"PO Number","quotationNumber":"Quotation No.","terms":"Terms and Conditions","notes":"Additional Notes","billedBy":"Issued By","billedTo":"Issued To","expenseNumber":"Expense No","shippedTo":"Shipped To","transport":"Transport Details","attachment":"Attachments","signature":"Authorised Signatory","taxName":"GST"}'),$=JSON.parse('{"invoiceNumber":"Debit Note No","invoiceDate":"Debit Note Date","dueDate":"Due Date","purchaseOrderNumber":"PO Number","quotationNumber":"Quotation No.","terms":"Terms and Conditions","notes":"Additional Notes","billedBy":"Issued By","billedTo":"Issued To","expenseNumber":"Expense No","shippedTo":"Shipped To","transport":"Transport Details","attachment":"Attachments","signature":"Authorised Signatory","taxName":"GST"}'),F=JSON.parse('{"invoiceNumber":"Purchase Order No","invoiceDate":"Purchase Order Date","terms":"Terms and Conditions","notes":"Additional Notes","billedBy":"Order To","billedTo":"Order By","shippedTo":"Shipped To","shippedFrom":"Shipped From","transport":"Transport Details","attachment":"Attachments","signature":"Authorised Signatory","taxName":"GST","quotationNumber":"Quotation Number"}');var P=n(77349);var x=n(42699),k=n(69119),T=n(19013),w=n(92300),L=n(13882);function A(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}var R=e=>{const t=(e||"").match(/^(.*\D)?(\d+)$/);if(t){const[,e,n]=t,r=(parseInt(n,10)+1).toString().padStart(n.length,"0");if(!e)return r;if(n.length===r.length)return e+r}else if(e){const t=String.fromCharCode(e.toString().slice(-1).charCodeAt(0)+1);return e.replace(/.$/,t)}return null};var N=n(67294),D=n(6411),I=n(14516),M=n(2544),B=n(52220);const q=(0,B.default)(M.Card)`
  min-height: 30vh;
`,O=B.default.div`
  max-width: 1024px;
  margin: 0 auto;
  padding-bottom: 96px;
`,_=B.default.div`
  width: 100%;
  height: 100%;
  ${({theme:{colors:e,radii:t,spacings:n,breakpoints:r}})=>B.css`
    padding: ${n.s6} ${n.s4};
    border-radius: ${t.lg};
    background: ${e.neutral[1]};
    @media screen and (min-width: ${r[0]}) {
      padding: ${n.s6};
    }
  `}
`,z=B.default.div`
  width: 100%;
  height: 100%;
  ${({theme:{colors:e,radii:t,spacings:n,breakpoints:r}})=>B.css`
    padding: ${n.s6} ${n.s4};
    border-radius: ${t.lg};
    background: ${e.neutral[1]};
    @media screen and (min-width: ${r[0]}) {
      padding: ${n.s6};
    }
  `}
`,H=B.default.div`
  display: grid;
  ${({theme:{colors:e,radii:t,spacings:n},cols:r})=>B.css`
    grid-column-gap: ${n.s2};
    grid-template-columns: repeat(${r+1}, 1fr);
    padding: ${n.s4};
    border-top-left-radius: ${t.lg};
    border-top-right-radius: ${t.lg};
    background: ${e.secondary[2]};
  `}
`,W=(0,B.default)(M.Typography)`
  && {
    ${({theme:{breakpoints:e},gridKey:t,isTaxInvoice:n})=>B.css`
      grid-column: span 2;
      ${"name"===t&&B.css`
        grid-column: span 6;
      `}
      ${"discount"===t&&B.css`
        grid-column: span ${n?3:2};
      `}
      ${"action"===t&&B.css`
        grid-column: span 1;
      `}

      @media screen and (max-width: ${e[1]}) {
        ${"name"!==t&&B.css`
          display: none;
        `}
      }
    `}
  }
`,V=(0,B.default)(H)`
  && {
    width: 100%;
    border-radius: 0;
    ${({theme:{colors:e,spacings:t,breakpoints:n},isGroup:r})=>B.css`
      background: ${r?"var(--color-blue-lightest)":e.neutral[2]};
      margin-bottom: ${t.s3};
      @media screen and (max-width: ${n[1]}) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: ${t.s4} ${t.s4};
      }
    `}
  }
`,j=((0,B.default)(D.kC)`
  && {
    width: 100%;
    ${({theme:{colors:e,radii:t,spacings:n}})=>B.css`
      padding: ${n.s2};
      background: ${e.neutral[2]};
      border-bottom-left-radius: ${t.lg};
      border-bottom-right-radius: ${t.lg};
    `}
  }
`,(0,B.default)(W)`
  && {
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type='number'] {
      -moz-appearance: textfield;
    }

    &&& {
      display: flex;
      min-height: 38px;
    }
    ${({theme:{breakpoints:e,spacings:t},gridKey:n,computed:r,isGroup:a,cols:i=0})=>B.css`
      ${a&&B.css`
        grid-column: span ${i};
      `}
      @media screen and (max-width: ${e[1]}) {
        grid-column: span 1;
        ${"name"===n&&B.css`
          grid-column: span 2;
        `}
        ${"discount"===n&&B.css`
          grid-column-start: 2;
        `}
        ${r&&B.css`
          grid-column-start: 2;
          height: ${t.h16};
        `}
      }

      @media screen and (max-width: ${e[0]}) {
        grid-column: span 2;
      }
    `}
  }
`),G=(0,B.default)(j)`
  && {
    margin-right: 0;
    flex: none;
    justify-content: flex-end;
    > button {
      align-items: baseline;
      align-self: baseline;
      margin-top: 6px;
    }
    ${({theme:{breakpoints:e}})=>B.css`
      @media screen and (max-width: ${e[1]}) {
        &&& {
          display: none;
        }
      }
    `};
  }
`,K=B.default.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  grid-column: span 2;
  ${({theme:{breakpoints:e}})=>B.css`
    @media screen and (min-width: ${e[1]}) {
      &&& {
        display: none;
      }
    }
  `}
`,Z=(0,B.default)(M.Typography)`
  && {
    width: 100%;
    flex: 1;
    font-stretch: semi-expanded;
    line-height: 37px;
    ${({theme:{colors:e},isEditable:t})=>B.css`
      ${t&&B.css`
        border-bottom: 1px dashed ${e.neutral[6]};
      `}
    `}
  }
`,U=(0,B.default)(M.Button).attrs({anchor:!0,variant:"neutral"})`
  && {
    ${({theme:{breakpoints:e,spacings:t}})=>B.css`
      font-weight: 400;
      svg {
        margin-right: ${t.s2};
      }
      @media screen and (max-width: ${e[1]}) {
        display: none;
      }
    `}
  }
`,Y=(0,B.default)(j)`
  && {
    ${({theme:{breakpoints:e,spacings:t},cols:n,show:r})=>B.css`
      grid-column: span ${n+1};
      margin: ${t.s3} 0;
      > div {
        width: 100%;
        ${!r&&B.css`
          display: none;
        `}
      }
      @media screen and (max-width: ${e[1]}) {
        grid-row-start: 3;
        grid-column: span 2;
        margin: 0;
        > div {
          display: flex;
        }
      }
    `}
  }
`,J=(0,B.default)(j)`
  && {
    ${({theme:{breakpoints:e},cols:t,show:n})=>B.css`
      grid-column: span ${t+1};
      ${!n&&B.css`
        > div {
          display: none;
          width: 100%;
        }
      `}
      @media screen and (max-width: ${e[1]}) {
        grid-column: span 2;
        margin-bottom: 0;
        > div {
          display: flex;
        }
      }
    `}
  }
`,Q=(0,B.default)(j)`
  && {
    ${({theme:{breakpoints:e},cols:t})=>B.css`
      justify-content: flex-end;
      grid-column: ${t+1} / ${t+1};
      @media screen and (max-width: ${e[1]}) {
        grid-column: span 2;
      }
      > button {
        width: auto;
      }
    `}
  }
`,X=(0,B.default)(M.Typography)`
  && {
    ${({theme:{breakpoints:e},gridKey:t,isGroup:n})=>B.css`
      display: none;
      min-width: 30%;
      align-self: center;
      @media screen and (max-width: ${e[1]}) {
        ${!n&&B.css`
          display: flex;
        `}
        ${("name"===t||"description"===t)&&B.css`
          min-width: 20%;
        `}
      }
      @media screen and (max-width: ${e[0]}) {
        ${("name"===t||"description"===t)&&B.css`
          min-width: 30%;
        `}
      }
    `}
  }
`,ee=B.default.hr`
  ${({theme:{colors:e}})=>B.css`
    border: 1px solid ${e.neutral[3]};
    border-bottom: 0;
  `}
`,te=B.default.div`
  ${({theme:{colors:e,spacings:t}})=>B.css`
    padding: ${t.s4};
    background: ${e.neutral[1]};
  `}
`,ne=(0,B.default)(M.Button)`
  && {
    svg {
      margin-right: 0;
    }
  }
`,re=(0,B.default)(M.Button)`
  && {
    ${({theme:{colors:e}})=>B.css`
      svg {
        color: #7f8fa4;
      }
      &:hover {
        svg {
          color: ${e.neutral[6]};
        }
      }
    `}
  }
`;var ae=n(89211),ie=n(93002),oe=n(82795),le=n.n(oe),ue=n(68041),se=n(86818),ce=JSON.parse('{"PERCENTAGE":"Percentage","FIXED_AMOUNT":"Fixed Amount"}'),de=JSON.parse('{"text":"TEXT","number":"NUMBER","date":"DATE","currency":"CURRENCY","formula":"FORMULA"}'),me=JSON.parse('{"INVOICE":"Tax Invoice","BOS":"Bill of Supply"}'),pe=n(49345),fe=JSON.parse('{"INDIA":"GST (INDIA)","GLOBAL":"TAX (GLOBAL)"}'),he=JSON.parse('{"None":"Don\'t repeat","Daily":"Every Day","Weekly":"After every 7 days","Monthly":"Every month","Quaterly":"Every 3 months","Halfyearly":"Every 6 Months","Yearly":"Every year","2Yearly":"Every 2 Year","3Yearly":"Every 3 Year","5Yearly":"Every 5 Year"}'),ge=JSON.parse('{"DRAFT":"Create as Draft (Create a draft of the new invoice. I will approve and send it to the client.)","UNPAID":"Create and Save (Create a normal invoice but don\'t send it, I will send it to the client myself.)","EMAIL":"Create and Send Email (Directly email the new invoice to the client.)"}'),ye=n(48398);const ve=pe,{RC:be}=ve,Ee=(0,p._T)(ve,["RC"]),Se=h(),Ce=()=>(0,ue.object)().shape({name:(0,ue.string)().nullable().trim().required("Business name is required"),street:(0,ue.string)().trim().nullable(),city:(0,ue.string)().trim().nullable(),pincode:(0,ue.string)().trim().nullable(),state:(0,ue.string)().trim().nullable(),gstState:(0,ye.Ys)(g,"Please select a valid GST state").nullable().when(["country","name"],((e,t,n)=>"IN"===e&&t?n.required("Please select a GST state"):n)),country:(0,ye.Ys)(se).required("Country is required").default("IN"),gstin:(0,ye.BX)().nullable(),panNumber:(0,ye.Cv)().nullable(),email:(0,ye.Do)().nullable(),phone:(0,ye.Hd)().nullable(),customFields:(0,ye.hJ)((0,ue.object)().shape({label:(0,ue.string)().trim().nullable().when("value",((e,t)=>e?t.required("Custom label is required"):t)),value:(0,ue.string)().trim().nullable(),showInInvoice:(0,ue.bool)().default(!0)}),0).default([])});var $e=(e,t)=>{const n=t?"Expenditure":(e=>e===i.INVOICE?"Invoice":e===i.QUOTATION?"Quotation":e===i.DELIVERYCHALLAN?"Delivery Challan":e===i.PROFORMAINV?"Proforma Invoice":e===i.PURCHASEORDER?"Purchase Order":e===i.PAYMENTRECEIPT?"Payment Receipt":e===i.DEBITNOTE?"Credit Note":e===i.CREDITNOTE?"Debit Note":"Invoice")(e);return(0,ue.object)().shape({logo:(0,ue.string)().nullable(),invoiceSubTitle:(0,ue.string)().trim().nullable(),invoiceTitle:(0,ue.string)().trim().nullable().default(`${n}`).required(`${n} Title is Required`),invoiceNumber:(0,ue.string)().trim().nullable().trim().when("isExpenditure",((e,t)=>e?t:t.required(`${n} Number is Required`))),invoiceDate:(0,ue.date)().nullable().typeError("Invalid Date").required(`${n} Date is Required`),dueDate:(0,ue.date)().nullable().typeError("Invalid Date"),billType:(0,ue.string)().nullable().trim().default(i.INVOICE),expenseNumber:(0,ue.string)().trim().nullable().when("isExpenditure",((e,t)=>e?t.required("Expense Number is Required"):t)),isExpenditure:(0,ue.bool)().default(t),documentReason:(0,ue.string)().trim().nullable().when("billType",((e,t)=>[i.CREDITNOTE,i.DEBITNOTE].includes(e)?t.required("Please select valid reason"):t)),linkedInvoices:(0,ye.hJ)((0,ue.string)().trim().nullable(),0).default([]).when("billType",((e,t)=>e===i.CREDITNOTE?t.min(1,"Please select an invoice"):t)),customHeaders:(0,ye.hJ)((0,ue.object)().shape({label:(0,ue.string)().trim().nullable().when("value",((e,t)=>e?t.required("Field Name is required"):t)),value:(0,ue.string)().nullable()}),0).default([]),customFooters:(0,ye.hJ)((0,ue.object)().shape({label:(0,ue.string)().trim().nullable().when("value",((e,t)=>e?t.required("Field Name is required"):t)),value:(0,ue.string)().nullable()}),0).default([]),customLabels:(0,ue.object)().shape({invoiceNumber:(0,ue.string)().trim().nullable().required(`${n} number label is required`),invoiceDate:(0,ue.string)().trim().nullable().required(`${n} date label is required`),dueDate:(0,ue.string)().trim().nullable().required("Due date label is required"),purchaseOrderNumber:(0,ue.string)().trim().nullable().required("Purchase order number label is required"),quotationNumber:(0,ue.string)().trim().nullable().required("Quotation number label is required"),expenseNumber:(0,ue.string)().trim().nullable().required("Expense number label is required"),signature:(0,ue.string)().trim().nullable()}).default(v),billedBy:Ce(),billedTo:Ce(),items:(0,ye.hJ)((0,ue.object)().shape({name:(0,ue.string)().trim().when("group",((e,t)=>{const n=e?"Group name is required":"Item name is required";return t.required(n).typeError(n)})),description:(0,ue.string)().trim().nullable(),images:(0,ye.hJ)((0,ue.string)(),0),hsn:(0,ye.zs)(),gstRate:(0,ue.number)().nullable(),quantity:(0,ue.number)().default(1).required("Item quantity is required").when("group",((e,t)=>e?t:t.positive("Item quantity must be greater than 0"))),rate:(0,ue.number)().default(1).required("Item rate is required").when("group",((e,t)=>e?t:t.positive("Item rate must be greater than 0"))),subTotal:(0,ue.number)(),discount:(0,ue.object)().shape({discountType:(0,ye.Ys)(ce).default("PERCENTAGE").required(),amount:(0,ue.number)()}),amount:(0,ue.number)(),igst:(0,ue.number)(),cgst:(0,ue.number)(),sgst:(0,ue.number)(),total:(0,ue.number)(),custom:(0,ue.object)().default({}),group:(0,ue.bool)().nullable(),isStockManaged:(0,ue.bool)().nullable()}),1).test("validateArray","Items field must have at least 1 non-group items",(e=>e.some((e=>!e.group)))),columns:(0,ye.hJ)((0,ue.object)().shape({key:(0,ue.string)().nullable().required(),label:(0,ue.string)().trim().nullable(),isHidden:(0,ue.bool)().default(!1),dataTypes:(0,ye.Ys)(de).default("text"),private:(0,ue.bool)().nullable()})).default(Se),invoiceType:(0,ue.string)().nullable().oneOf(Object.keys(me)).default("BOS"),currency:(0,ye.Ys)(Ee).default("INR").required("Currency is required"),discount:(0,ue.object)().shape({discountType:(0,ye.Ys)(ce).default("PERCENTAGE").required(),amount:(0,ue.number)()}),additionalCharges:(0,ye.hJ)((0,ue.object)().shape({label:(0,ue.string)().trim().nullable().when("amount",((e,t)=>e?t.required("Field Name is required"):t)),amount:(0,ue.number)().nullable(),multiplier:(0,ue.number)().nullable(),amountType:(0,ye.Ys)(ce).default("FIXED_AMOUNT").required()}),0).default([]),extraTotalFields:(0,ye.hJ)((0,ue.object)().shape({label:(0,ue.string)().trim().nullable().when("amount",((e,t)=>e?t.required("Field Name is required"):t)),amount:(0,ue.number)().nullable()}),0).default([]),discountEnabled:(0,ue.bool)().default(!1),terms:(0,ye.hJ)((0,ue.object)().shape({label:(0,ue.string)().trim().nullable().default("Terms And Condition"),terms:(0,ye.hJ)((0,ue.string)().trim().nullable(),0)}),0).default([]),attachments:(0,ye.hJ)((0,ue.string)(),0),signature:(0,ue.string)().nullable(),notes:(0,ue.string)().nullable().trim(),contact:(0,ue.object)().shape({email:(0,ye.Do)(),phone:(0,ye.Hd)()}).nullable(),locale:(0,ue.string)().default("en-IN"),subUnitLength:(0,ue.number)().nullable(),shippedTo:(0,ue.object)().when("showShippedTo",((e,t)=>t.shape({name:(0,ue.string)().trim().nullable(),street:(0,ue.string)().trim().nullable(),city:(0,ue.string)().trim().nullable(),pincode:(0,ue.string)().trim().nullable(),state:(0,ue.string)().trim().nullable(),gstState:(0,ye.Ys)(g,"Please select a valid state").nullable().when(["country","name"],((t,n,r)=>"IN"===t&&e&&n?r.required("Please select a GST state"):r)),country:(0,ye.Ys)(se).when("name",((t,n)=>t&&e?n.required("Shipped To Country is required"):n)),gstin:(0,ye.BX)().nullable()}))).nullable(),shippedFrom:(0,ue.object)().when("showShippedTo",((e,t)=>t.shape({name:(0,ue.string)().trim().nullable(),street:(0,ue.string)().trim().nullable(),city:(0,ue.string)().trim().nullable(),pincode:(0,ue.string)().trim().nullable(),state:(0,ue.string)().trim().nullable(),gstState:(0,ye.Ys)(g,"Please select a valid state").nullable().when(["country","name"],((t,n,r)=>"IN"===t&&e&&n?r.required("Please select a GST state"):r)),country:(0,ye.Ys)(se).when("name",((t,n)=>t&&e?n.required("Shipped From Country is required"):n)),gstin:(0,ye.BX)().nullable()}))).nullable(),transportDetails:(0,ue.object)().shape({transport:(0,ue.string)().trim().nullable(),challanNumber:(0,ue.string)().trim().nullable(),challanDate:(0,ue.date)().nullable(),extraInformation:(0,ue.string)().trim().nullable()}).nullable(),showShippedTo:(0,ue.bool)().default(!1),taxName:(0,ue.string)().trim().default("GST"),taxType:(0,ye.Ys)(fe).default("INDIA"),hideTotals:(0,ue.bool)().default(!1),recurringInvoice:(0,ue.object)().shape({frequency:(0,ye.Ys)(he).default("None"),nextDate:(0,ue.date)().typeError("Please provide a valid invoice date"),status:(0,ye.Ys)(ge).default("DRAFT")}),client:(0,ue.string)().nullable(),vendor:(0,ue.string)().nullable(),igst:(0,ue.bool)().default(!1),advanceOptions:(0,ue.object)().shape({hideCountryOfSupply:(0,ue.bool)().default(!1).nullable()}).nullable()})};var Fe=(e,t,n,r)=>{const a=Object.assign({},e),l=a.invoiceType===u.INVOICE,s=a.items.map((e=>{var t;const n=Object.assign({},e),{quantity:i,rate:u,gstRate:s=0,discount:c,isStockManaged:d}=n;let m=0,p=0,f=0,h=0,g=0,y=0;const v="boolean"===typeof d?d:r,{discountType:b,amount:E=0}=c||{};return n.group||(m=i*u,p=b===o.FIXEDAMOUNT?E:m*E/100,f=a.discountEnabled?m-p:m,h=l?f*s/100:0,g=l?f*s/200:0,y=h-g),delete n.showDescription,delete n.showImage,delete n.editamount,delete n.edittotal,Object.assign(Object.assign({},n),{discount:{discountType:(null===c||void 0===c?void 0:c.discountType)||(null===(t=a.discount)||void 0===t?void 0:t.discountType)||o.PERCENTAGE,amount:a.discountEnabled&&(null===c||void 0===c?void 0:c.amount)||0},igst:h,cgst:g,sgst:y,subTotal:m,amount:f,total:f+h,isStockManaged:v})})),c=a.terms.filter(Boolean),d=a.customHeaders.filter((e=>!!e.label)),m=(a.customFooters||[]).filter((e=>!!e.label)),p=a.additionalCharges.filter((e=>!!e.label)),f=a.extraTotalFields.filter((e=>!!e.label)),h=a.columns.map((({key:e,label:t,isHidden:n,system:r,dataType:a,formula:i,private:o})=>({key:e,label:t,isHidden:n,system:r,dataType:a,formula:i,private:o})));return delete a.discountEnabled,delete a.showShippedTo,n?delete a.isExpenditure:delete a.expenseNumber,t&&(delete a.client,delete a.vendor),(e.billType===i.PURCHASEORDER||n)&&(delete a.hideTotals,delete a.contact,delete a.recurringInvoice),Object.assign(Object.assign({},a),{items:s,terms:c,customFooters:m,customHeaders:d,additionalCharges:p,extraTotalFields:f,columns:h})};const Pe=[{target:".invoice-billing-details-wrapper",content:"Add your business details and your client\u2019s details here.",placement:"auto",disableBeacon:!0,spotlightPadding:2},{target:".invoice-GSTCheck-wrapper",content:"Tick this if you want to create GST %DOCUMENT%.",placement:"auto"},{target:".invoice-lineitems-wrapper",content:"Put your Line items or Service Details here",placement:"auto",spotlightPadding:2},{target:".invoice-columns-wrapper",content:"Rename or Add any extra columns in line item",placement:"left"},{target:".invoice-termsandconditions-wrapper",content:"Add Terms and Conditions for the payments, service, refunds etc.",placement:"auto"}];var xe=(e,t)=>{const n=e===i.QUOTATION?"quotation":"invoice";return t===a.GLOBAL&&(Pe[1].content="Click here to enable/disable Taxes"),Pe.map((e=>{var{content:t}=e,r=(0,p._T)(e,["content"]);return Object.assign(Object.assign({},r),{content:t.replace("%DOCUMENT%.",n)})}))},ke=n(34578),Te=n(38519),we=JSON.parse('{"Correction In Invoice":"Correction In Invoice","Change in POS":"Change in POS","Finalization in provisional assessment":"Finalization in provisional assessment","Other":"Other"}'),Le=JSON.parse('{"Product Return":"Product Return","Discount Offered":"Discount Offered","Fault/Defect in service / product":"Fault/Defect in service / product","Advance Paid":"Advance Paid","Other":"Other"}'),Ae=n(7069);const Re=(0,B.default)(M.Button)`
  && {
    font-weight: 400;
    white-space: nowrap;
    ${({theme:{colors:e,spacings:t},fill:n,padding:r})=>B.css`
        padding: ${r};
        ${n&&B.css`
            svg {
              margin-right: ${t.s2};
              path {
                fill: ${e.secondary[2]};
              }
            }
            &: hover {
              path {
                fill: ${e.secondary[3]};
              }
            }
          `}
        ${!n&&B.css`
            svg {
              margin-right: ${t.s2};
              g,
              path {
                stroke: ${e.secondary[2]};
              }
            }
            &: hover {
              g,
              path {
                stroke: ${e.secondary[3]};
              }
            }
          `}
      }
    `}
  }
`,Ne=(0,B.default)(D.kC)`
  && {
    align-items: center;
    ${({theme:{spacings:e}})=>B.css`
      > button {
        margin-right: ${e.s4};
      }

      > button:last-of-type {
        margin-right: 0;
      }
    `}
  }
`,De=(0,B.default)(M.Typography)`
  && {
    padding-left: 40%;
    ${({theme:{spacings:e}})=>B.css`
      margin-top: ${e.s1};
    `}
  }
`,Ie=B.default.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Me=B.default.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: flex-start;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  ${({theme:{spacings:e,colors:t}})=>B.css`
    padding: ${e.s3} 0 ${e.s7};
    background: ${t.neutral[0]};
    gap: ${e.s5};
  `}
`,Be=B.default.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  ${({theme:{spacings:e,colors:t}})=>B.css`
    background: ${t.neutral[0]};
    gap: ${e.s5};
  `}
`;var qe=(0,N.forwardRef)(((e,t)=>{const{requestPremium:n,onCancel:r}=e,[a,i]=(0,ae.Z)(!1),[o,l]=(0,ae.Z)(!1),u=(0,N.useCallback)((()=>{n(),i(!0)}),[n]);return(0,N.useImperativeHandle)(t,(()=>({open:()=>l(!0)}))),N.createElement(M.Modal,{open:o,header:null,footer:null,maskClosable:!1,centered:!0,onCancel:()=>{l(!1),r&&r()},width:350,bodyStyle:{paddingBottom:24}},N.createElement(Me,null,N.createElement(ke.tv5,{size:72}),N.createElement(M.Typography,{size:"h4",bold:!0},"These are premium features."),N.createElement(M.Typography,{size:"h6",variant:"none"},"Upgrade to Refrens premium to unlock more such features")),N.createElement(Be,null,!a&&N.createElement(N.Fragment,null,N.createElement(M.Button,{as:"a",target:"_blank",type:"button",variant:"secondary",size:"large",onClick:u},"Upgrade to Premium"))),a&&N.createElement(Me,null,N.createElement(M.Typography,{size:"h6",variant:"subtle"},"Thanks we will reach out to you soon")))}));var Oe=e=>{const{publicS3Props:t,lastInvoice:n,checkInvoiceNumber:r,invoices:a,isExpenditure:o,business:l,premium:u,requestPremium:s}=e,{values:c,handleChange:d,getFieldMeta:m}=(0,Te.u6)(),{invoiceTitle:f,invoiceSubTitle:h,customLabels:g,customHeaders:y,billType:v,invoiceDate:b,signature:E}=c,[S,C]=(0,ae.Z)(!!h),$=(0,N.useRef)();(0,N.useEffect)((()=>{const{touched:e}=m("invoiceSubTitle");e||C(!!h)}),[!!h]);const F=o?"expenseNumber":"invoiceNumber",P=(0,N.useCallback)((({value:e})=>(0,p.mG)(void 0,void 0,void 0,(function*(){if(r&&e){if(yield r(e))return{status:"error",message:`${g[F]} already exists`}}return{status:"none"}}))),[r,g[F]]),x=[i.INVOICE,i.PROFORMAINV,i.DEBITNOTE].includes(v),k=(0,N.useMemo)((()=>{let e=Le;return v===i.DEBITNOTE&&(e=we),Object.entries(e).map((([e,t])=>({label:t,value:e})))}),[v]),T=null===a||void 0===a?void 0:a.map((({_id:e,invoiceNumber:t})=>({label:t,value:e})));return N.createElement(N.Fragment,null,N.createElement(D.kC,{flexDirection:"column",alignItems:"center",my:"16px"},N.createElement(D.xu,{textAlign:"center",mb:"12px",width:[1,.5,.3]},N.createElement(M.Typography,{inline:!0,size:"h2",variant:"neutral",name:"invoiceTitle",editable:!0,onValueChange:d},o?"Expenditure":f)),l&&N.createElement(D.xu,{textAlign:"center",width:[1,.4]},S&&N.createElement(M.Typography,{inline:!0,size:"h5",variant:"none",name:"invoiceSubTitle",editable:!0,onValueChange:d,placeholder:"Enter subtitle here...."},h),!S&&N.createElement(Ie,null,N.createElement(Re,{anchor:!0,variant:"neutral",onClick:()=>{u?C(!0):$.current&&$.current.open()}},N.createElement(ke.Ct0,{size:16}),"Add Sub Title"),"\xa0",N.createElement(ke.tv5,{size:16})))),N.createElement(D.kC,{flexDirection:["column-reverse","row"],justifyContent:"space-between"},N.createElement(D.xu,{width:[1,.4]},o&&N.createElement(N.Fragment,null,N.createElement(D.xu,{my:"8px",pr:"32px"},N.createElement(M.Form.Input,{labelWidth:.4,name:"expenseNumber",labelProps:{size:"h5",variant:"subtle",hoverable:!0},label:g.expenseNumber,direction:"row",labelName:"customLabels.expenseNumber",editableLabel:!0,onLabelChange:d,required:o,validateStatus:P})),N.createElement(N.Fragment,null,!!(null===n||void 0===n?void 0:n.expenseNumber)&&N.createElement(De,{variant:"subtle",size:"small"},"Last ",g.expenseNumber,": ",n.expenseNumber))),N.createElement(D.kC,{mt:"16px",mb:"8px",flexDirection:"column",pr:"32px"},N.createElement(M.Form.Input,{name:"invoiceNumber",labelWidth:.4,labelProps:{size:"h5",variant:"subtle",hoverable:!0},label:g.invoiceNumber,direction:"row",labelName:"customLabels.invoiceNumber",editableLabel:!0,onLabelChange:d,autoComplete:"off",required:!o,placeholder:`Enter ${g.invoiceNumber}`,validateStatus:o?void 0:P}),!!(null===n||void 0===n?void 0:n.invoiceNumber)&&!o&&N.createElement(De,{variant:"subtle",size:"small"},"Last ",g.invoiceNumber,": ",n.invoiceNumber)),N.createElement(D.xu,{my:"8px",pr:"32px"},N.createElement(M.Form.DatePicker,{labelWidth:.4,name:"invoiceDate",labelProps:{size:"h5",variant:"subtle",hoverable:!0},label:g.invoiceDate,direction:"row",labelName:"customLabels.invoiceDate",editableLabel:!0,onLabelChange:d,dateFormat:"MMMM dd, yyyy",required:!0})),x&&N.createElement(D.xu,{my:"8px",pr:"32px"},N.createElement(M.Form.DatePicker,{labelWidth:.4,name:"dueDate",label:g.dueDate,labelProps:{size:"h5",variant:"subtle",hoverable:!0},direction:"row",labelName:"customLabels.dueDate",editableLabel:!0,onLabelChange:d,dateFormat:"MMMM dd, yyyy",minDate:(0,Ae.default)(b,0)})),v===i.CREDITNOTE&&N.createElement(D.xu,{my:"8px",pr:"32px"},N.createElement(M.Form.Select,{labelWidth:.4,labelProps:{size:"h5",variant:"subtle",hoverable:!0},name:"linkedInvoices[0]",label:"Link Invoice",placeholder:"Select Invoice",options:T,direction:"row"})),(v===i.CREDITNOTE||v===i.DEBITNOTE)&&N.createElement(D.xu,{my:"8px",pr:"32px"},N.createElement(M.Form.Select,{name:"documentReason",placeholder:"Select reason (REQUIRED)",options:k,required:!0})),N.createElement(Te.F2,{name:"customHeaders",render:({push:e,remove:t})=>N.createElement("div",null,y.map(((e,n)=>N.createElement(D.kC,{my:"8px",key:n},N.createElement(M.Form.Input,{name:`customHeaders[${n}].value`,labelWidth:.4,label:e.label,direction:"row",labelName:`customHeaders[${n}].label`,editableLabel:!0,labelPlaceHolder:"Field Name "+(e.value?"(Required)":""),onLabelChange:d,labelProps:{size:"h5",variant:"subtle"},placeholder:"Value"}),N.createElement(ne,{onClick:()=>t(n),anchor:!0,variant:"secondary"},N.createElement(ke.x8P,{color:"#733dd9"}))))),N.createElement(D.xu,{mt:"8px",mb:"16px"},N.createElement(Re,{anchor:!0,variant:"neutral",onClick:()=>e({label:"",value:""})},N.createElement(ke.Ct0,{size:16}),"Add More Fields")))})),!o&&N.createElement(D.xu,{width:[1,.3],height:"120px"},N.createElement(M.Form.Storage,{name:"logo",size:"auto",uploadParams:t,accept:"image/*",uploadText:"Add business logo",copySize:20,value:E,icon:N.createElement(ke.Eep,{color:"#7f8fa4"})}))),N.createElement(qe,{ref:$,requestPremium:()=>s("Invoice Subtitle")}))},_e=n(75472),ze=n.n(_e);var He=e=>e&&e.length>=12?{panNumber:e.substr(2,10),gstState:e.substr(0,2)}:{},We=n(83868),Ve=n.n(We),je=n(94692);const Ge=e=>!!e&&Ve()(e),Ke=e=>{if(!e)return!1;const t=(0,je.__)(e);return!!(null===t||void 0===t?void 0:t.isValid())},{Input:Ze,Select:Ue,PhoneInput:Ye}=M.Form,Je=Object.entries(se).map((([e,t])=>({label:t,value:e}))),Qe=ze()(Object.entries(g).map((([e,t])=>({label:t,value:e}))),["label"],["asc"]),Xe=e=>{const{type:t,self:n}=e,{values:a,setFieldValue:i,handleChange:o}=(0,Te.u6)(),l=t===r.VENDOR?"billedBy":"billedTo",{[l]:{customFields:u=[],country:s,gstin:c,email:d,phone:m,emailShowInInvoice:p,phoneShowInInvoice:f},billedBy:h,customLabels:g}=a,y="IN"===s,v=y&&"IN"===h.country,[b,E]=(0,N.useState)();return(0,N.useEffect)((()=>{!m&&s&&E(s.toLowerCase())}),[!!m,s]),(0,N.useEffect)((()=>{const{panNumber:e,gstState:t}=He(c);e&&t&&(i(`${l}.panNumber`,e,!1),i(`${l}.gstState`,t,!1))}),[c]),(0,N.useEffect)((()=>{p!==Ge(d)&&i(`${l}.emailShowInInvoice`,Ge(d),!1)}),[d]),(0,N.useEffect)((()=>{f!==Ke(m)&&i(`${l}.phoneShowInInvoice`,Ke(m),!1)}),[m]),N.createElement(D.kC,{flexDirection:"column"},N.createElement(D.kC,{flexDirection:"row",alignItems:"baseline"},N.createElement(M.Typography,{variant:"neutral",size:"h4",name:t===r.VENDOR?"customLabels.billedBy":"customLabels.billedTo",editable:!0,onValueChange:o},t===r.VENDOR?g.billedBy:g.billedTo),N.createElement(D.xu,{ml:"12px"},N.createElement(M.Typography,{variant:"subtle"},n?"(Your Details)":"(Client Details)"))),N.createElement(M.Card,{mt:"16px",p:"16px",style:{boxShadow:"none"}},N.createElement(D.xu,{my:"4px"},N.createElement(Ue,{name:`${l}.country`,placeholder:`${t}'s Business Country`,required:!0,options:Je,"aria-label":`${l} Country`})),N.createElement(D.xu,{my:"16px"},N.createElement(Ze,{name:`${l}.name`,placeholder:t===r.VENDOR?"Your Business / Freelancer Name (Rrequired)":"Client's business name (Rrequired)",required:!0})),N.createElement(D.kC,{my:"16px"},N.createElement(D.xu,{width:[1,.5],mr:"4px"},N.createElement(Ze,{name:`${l}.email`,placeholder:t===r.VENDOR?"Your email":"Client's email"})),N.createElement(D.xu,{width:[1,.5],ml:"4px"},N.createElement(Ye,{name:`${l}.phone`,placeholder:t===r.VENDOR?"Your phone":"Client's phone",country:b}))),v&&N.createElement(D.kC,{my:"16px"},N.createElement(D.xu,{width:[1,.5],mr:"4px"},N.createElement(Ze,{name:`${l}.gstin`,placeholder:t===r.VENDOR?"Your GSTIN (Optional)":"Client's GSTIN (Optional)",transform:"uppercase"})),N.createElement(D.xu,{width:[1,.5],ml:"4px"},N.createElement(Ze,{name:`${l}.panNumber`,placeholder:t===r.VENDOR?"Your PAN (Optional)":"Client's PAN (Optional)",transform:"uppercase"}))),N.createElement(D.xu,{my:"16px"},N.createElement(Ze,{name:`${l}.street`,placeholder:"Address"})),N.createElement(D.kC,{my:"16px"},N.createElement(D.xu,{width:.5,mr:"4px"},N.createElement(Ze,{name:`${l}.city`,placeholder:"City"})),N.createElement(D.xu,{width:.5,ml:"4px"},N.createElement(Ze,{name:`${l}.pincode`,placeholder:"Postal Code / Zip Code"}))),N.createElement(D.xu,{my:"16px"},y&&N.createElement(Ue,{name:`${l}.gstState`,placeholder:"State (Required)",options:Qe,"aria-label":`${l}.gstState`}),!y&&N.createElement(Ze,{name:`${l}.state`,placeholder:"State"})),N.createElement(Te.F2,{name:`${l}.customFields`,render:({push:e,remove:t})=>N.createElement("div",null,u.map(((e,n)=>N.createElement(D.kC,{my:"16px",key:n},N.createElement(D.xu,{width:1/3,mr:"4px"},N.createElement(Ze,{name:`${l}.customFields[${n}].label`,placeholder:"Label "+(e.value?"(Required)":""),required:!!e.value})),N.createElement(D.kC,{width:2/3,ml:"4px"},N.createElement(Ze,{name:`${l}.customFields[${n}].value`,placeholder:"Value"}),N.createElement(ne,{onClick:()=>t(n),anchor:!0,variant:"secondary"},N.createElement(ke.x8P,{color:"#733dd9"})))))),N.createElement(D.xu,{mt:"8px"},N.createElement(Re,{anchor:!0,variant:"neutral",onClick:()=>{e({label:"",value:"",showInInvoice:!0})}},N.createElement(ke.Ct0,{size:16}),"Add More Fields")))})))};var et=()=>N.createElement(D.kC,{my:"16px",mx:["-16px",0],flexDirection:["column","row"],className:"invoice-billing-details-wrapper"},N.createElement(D.xu,{width:[1,.5],pr:["0","8px"],mb:["8px","0"]},N.createElement(_,null,N.createElement(Xe,{type:r.VENDOR,self:!0}))),N.createElement(D.xu,{width:[1,.5],pl:["0","8px"],mt:["8px","0"]},N.createElement(_,null,N.createElement(Xe,{type:r.CLIENT,self:!1}))));const tt=Object.entries(se).map((([e,t])=>({label:t,value:e}))),nt=ze()(Object.entries(g).map((([e,t])=>({label:t,value:e}))),["label"],["asc"]),rt=()=>N.createElement(D.kC,{flexDirection:"column"},N.createElement(D.xu,null,N.createElement(M.Typography,{variant:"neutral",size:"h4"},"Transport Details"),N.createElement(M.Card,{mt:"16px",p:"16px"},N.createElement(D.xu,{my:"8px"},N.createElement(M.Form.Input,{name:"transportDetails.challanNumber",placeholder:"Challan Number",autoComplete:"off"})),N.createElement(D.xu,{my:"8px"},N.createElement(M.Form.DatePicker,{name:"transportDetails.challanDate",placeholderText:"Challan Date",dateFormat:"dd/MM/yyyy"})),N.createElement(D.xu,{my:"8px"},N.createElement(M.Form.Input,{name:"transportDetails.transport",placeholder:"Transport Name"})),N.createElement(D.xu,{mt:"8px"},N.createElement(M.Form.Textarea,{name:"transportDetails.extraInformation",placeholder:"Shipping Note",rows:4}))))),at=e=>{const{showInFields:t,customHeaders:n,handleChange:r}=e;return N.createElement(D.kC,{flexDirection:"column"},N.createElement(D.xu,null,N.createElement(M.Typography,{variant:"neutral",size:"h4"},"Ship To")),N.createElement(M.Card,{mt:"16px",p:"16px"},N.createElement(D.xu,{my:"8px"},N.createElement(M.Form.Input,{name:"shippedTo.name",placeholder:"Client's business name"})),N.createElement(D.xu,{my:"8px"},N.createElement(M.Form.Input,{name:"shippedTo.street",placeholder:"Address"})),N.createElement(D.kC,{my:"8px"},N.createElement(D.xu,{width:.5,mr:"4px"},N.createElement(M.Form.Input,{name:"shippedTo.city",placeholder:"City"})),N.createElement(D.xu,{width:.5,ml:"4px"},N.createElement(M.Form.Input,{name:"shippedTo.pincode",placeholder:"Postal Code / Zip Code"}))),N.createElement(D.xu,{my:"8px"},t&&N.createElement(M.Form.Select,{name:"shippedTo.gstState",placeholder:"State",options:nt}),!t&&N.createElement(M.Form.Input,{name:"shippedTo.state",placeholder:"State"})),N.createElement(D.xu,{my:"4px"},N.createElement(M.Form.Select,{name:"shippedTo.country",required:!0,options:tt,placeholder:"Select Country"})),t&&N.createElement(D.kC,{my:"8px"},N.createElement(M.Form.Input,{name:"shippedTo.gstin",placeholder:"Your GSTIN (Optional)",required:!0})),N.createElement(D.xu,{my:"8px"},N.createElement(Te.F2,{name:"shippedTo.customHeaders",render:({push:e,remove:t})=>N.createElement("div",null,null===n||void 0===n?void 0:n.map(((e,n)=>N.createElement(D.kC,{my:"8px",key:n},N.createElement(M.Form.Input,{name:`shippedTo.customHeaders[${n}].value`,labelWidth:.4,label:e.label,direction:"row",labelName:`shippedTo.customHeaders[${n}].label`,editableLabel:!0,labelPlaceHolder:"Field Name "+(e.value?"(Required)":""),onLabelChange:r,labelProps:{size:"h5",variant:"subtle"},placeholder:"Value"}),N.createElement(ne,{onClick:()=>t(n),anchor:!0,variant:"secondary"},N.createElement(ke.x8P,{color:"#733dd9"}))))),N.createElement(D.xu,{mt:"8px",mb:"16px"},N.createElement(Re,{anchor:!0,variant:"neutral",onClick:()=>e({label:"",value:""})},N.createElement(ke.Ct0,{size:16}),"Add More Fields")))}))))},it=e=>{const{showInFields:t}=e;return N.createElement(D.kC,{flexDirection:"column"},N.createElement(D.xu,null,N.createElement(M.Typography,{variant:"neutral",size:"h4"},"Shipped From")),N.createElement(M.Card,{mt:"16px",p:"16px"},N.createElement(D.xu,{my:"8px"},N.createElement(M.Form.Input,{name:"shippedFrom.name",placeholder:"Business / Freelancer Name"})),N.createElement(D.xu,{my:"8px"},N.createElement(M.Form.Input,{name:"shippedFrom.street",placeholder:"Address"})),N.createElement(D.kC,{my:"8px"},N.createElement(D.xu,{width:.5,mr:"4px"},N.createElement(M.Form.Input,{name:"shippedFrom.city",placeholder:"City"})),N.createElement(D.xu,{width:.5,ml:"4px"},N.createElement(M.Form.Input,{name:"shippedFrom.pincode",placeholder:"Postal Code / Zip Code"}))),N.createElement(D.xu,{my:"8px"},t&&N.createElement(M.Form.Select,{name:"shippedFrom.gstState",placeholder:"State",options:nt}),!t&&N.createElement(M.Form.Input,{name:"shippedFrom.state",placeholder:"State"})),N.createElement(D.xu,{my:"4px"},N.createElement(M.Form.Select,{name:"shippedFrom.country",required:!0,options:tt,placeholder:"Select Country"})),t&&N.createElement(D.kC,{my:"8px"},N.createElement(M.Form.Input,{name:"shippedFrom.gstin",placeholder:"Enter your GSTIN here (Optional)",required:!0}))))};var ot=e=>{const{values:t,setFieldValue:n,handleChange:r}=(0,Te.u6)(),{defaultShippedTo:a,defaultShippedFrom:o}=e,{billType:l,shippedTo:u,shippedFrom:s,showShippedTo:c}=t,d="IN"===(null===u||void 0===u?void 0:u.country);return(0,N.useEffect)((()=>{if(c){if(!a||!u){const e={name:t.billedTo.name,street:t.billedTo.street,city:t.billedTo.city,pincode:t.billedTo.pincode,state:t.billedTo.state,gstState:t.billedTo.gstState,country:t.billedTo.country,gstin:t.billedTo.gstin};n("shippedTo",e)}}else n("shippedTo",null)}),[c]),(0,N.useEffect)((()=>{if(c){if(!o||!s){const e={name:t.billedBy.name,street:t.billedBy.street,city:t.billedBy.city,pincode:t.billedBy.pincode,state:t.billedBy.state,gstState:t.billedBy.gstState,country:t.billedBy.country,gstin:t.billedBy.gstin};n("shippedFrom",e)}}else n("shippedFrom",null)}),[c]),N.createElement(N.Fragment,null,(l===i.INVOICE||l===i.PROFORMAINV||l===i.PURCHASEORDER||l===i.DELIVERYCHALLAN)&&N.createElement(D.kC,{justifyContent:"flex-start",mb:"16px"},N.createElement(M.Form.Checkbox,{size:"medium",name:"showShippedTo",label:"Add Shipping Details",checked:c})),c&&N.createElement(N.Fragment,null,N.createElement(D.kC,{mb:["0","16px"],mx:["-16px",0],flexDirection:["column","row"]},N.createElement(D.xu,{width:[1,.5],pr:["0","8px"],mb:["8px","0"]},N.createElement(z,null,N.createElement(it,{showInFields:d,handleChange:r}))),N.createElement(D.xu,{width:[1,.5],pl:["0","8px"],mb:["8px","0"]},N.createElement(z,null,N.createElement(at,{showInFields:d,customHeaders:null===u||void 0===u?void 0:u.customHeaders,handleChange:r})))),N.createElement(D.kC,{mb:"16px",mx:["-16px",0]},N.createElement(D.xu,{width:[1,.5],pr:["0","8px"],mt:["8px","0"]},N.createElement(z,null,N.createElement(rt,null))))))},lt=n(37211);const ut=B.default.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  ${({theme:{colors:e,radii:t,spacings:n}})=>B.css`
    padding: ${n.s6} ${n.s6} ${n.s6} ${n.s6};
    border-radius: ${t.lg};
    background: ${e.neutral[1]};
  `}
`,st=(0,B.default)(D.kC)`
  && {
    align-items: center;
    > div:first-child {
      margin-right: 12px;
    }
  }
`,ct=(0,B.default)(M.Card)`
  && {
    box-shadow: none;
    ${({theme:{colors:e},error:t})=>B.css`
      height: 100%;
      ${t&&B.css`
        border: 1px solid ${e.other.red};
      `}
    `}
  }
`;var dt=n(5434);var mt=e=>{const{type:t,onNewClientClick:n,error:a}=e;return N.createElement(N.Fragment,null,N.createElement(ct,{mt:"16px",py:"24px",error:a},N.createElement(D.kC,{flexDirection:"column",justifyContent:"center",alignItems:"center"},N.createElement(D.xu,{my:"16px"},N.createElement(ke.qEK,{color:"#d3dceb",size:56})),N.createElement(M.Typography,{variant:"none"},`Select a ${t===r.VENDOR?"Vendor/Business":"Client/Business"} from list`),N.createElement(D.xu,{my:"12px"},N.createElement(M.Typography,{variant:"none"},"Or")),N.createElement(D.xu,{mb:"16px"},N.createElement(M.Button,{type:"button",variant:"secondary",onClick:n},N.createElement(dt.NcC,null),"Add New "+(t===r.VENDOR?"Business":"Client"))))))},pt=n(71759),ft=n(49546);var ht=(e=0,t="en")=>e.toLocaleString(t,{});var gt=e=>{const{billingData:t,onBillingDetailEdit:n,error:r,locale:a}=e,{name:i,street:o,city:l,pincode:u,state:s,gstState:c,country:d,gstin:m,panNumber:p,email:f,emailShowInInvoice:h,phone:g,phoneShowInInvoice:v,customFields:b}=t;return N.createElement(N.Fragment,null,N.createElement(ct,{mt:"16px",p:"24px",error:r},N.createElement(D.kC,{justifyContent:"space-between"},N.createElement(M.Typography,{as:"label"},"Business details"),N.createElement(M.Button,{anchor:!0,variant:"secondary",onClick:n},N.createElement(dt.zmo,null),"Edit")),N.createElement(D.kC,{mt:"20px",mb:"16px"},N.createElement(D.xu,{width:[1/3]},N.createElement(M.Typography,{variant:"none"},"Business Name")),N.createElement(D.xu,{width:[2/3]},N.createElement(M.Typography,null,i))),N.createElement(D.kC,{mb:"12px"},N.createElement(D.xu,{width:[1/3]},N.createElement(M.Typography,{variant:"none"},"Address")),N.createElement(D.xu,{width:[2/3]},N.createElement(M.Typography,null,o&&`${o}, `,l&&`${l}, `,"IN"===d&&c&&`${y(c)}, `,"IN"!==d&&s&&`${s}, `,d&&`${se[d]} `,u&&u))),m&&N.createElement(D.kC,{mb:"12px"},N.createElement(D.xu,{width:[1/3]},N.createElement(M.Typography,{variant:"none"},"GSTIN")),N.createElement(D.xu,{width:[2/3]},N.createElement(M.Typography,null,m))),p&&N.createElement(D.kC,{mb:"12px"},N.createElement(D.xu,{width:[1/3]},N.createElement(M.Typography,{variant:"none"},"PAN")),N.createElement(D.xu,{width:[2/3]},N.createElement(M.Typography,null,p))),h&&N.createElement(D.kC,{mb:"12px"},N.createElement(D.xu,{width:[1/3]},N.createElement(M.Typography,{variant:"none"},"Email")),N.createElement(D.xu,{width:[2/3]},N.createElement(M.Typography,null,f))),v&&N.createElement(D.kC,{mb:"12px"},N.createElement(D.xu,{width:[1/3]},N.createElement(M.Typography,{variant:"none"},"Phone")),N.createElement(D.xu,{width:[2/3]},N.createElement(M.Typography,null,g))),null===b||void 0===b?void 0:b.filter((e=>{var t;return(null===(t=e.params)||void 0===t?void 0:t.showInInvoice)&&e.value})).map((({label:e,value:t,dataType:n},r)=>N.createElement(D.kC,{key:r,mb:"12px"},N.createElement(D.xu,{width:[1/3]},N.createElement(M.Typography,{variant:"none"},e)),N.createElement(D.xu,{width:[2/3]},"DATE"===n&&N.createElement(M.Typography,null,(0,ft.default)(new Date(t),"MMM dd, yyyy")),"CURRENCY"===n&&"object"===typeof t&&N.createElement(M.Typography,null,(0,pt.formateCurrency)(null===t||void 0===t?void 0:t.amount,null===t||void 0===t?void 0:t.currency)),"BOOLEAN"===n&&N.createElement(M.Typography,null,t?"Yes":"No"),"NUMBER"===n&&"number"===typeof t&&N.createElement(M.Typography,null,ht(t,a)),"TEXT"===n&&N.createElement(M.Typography,null,t)))))))};const{object:yt,string:vt,bool:bt}=ue;var Et=yt().shape({name:vt().trim().nullable().required("Business name is required"),alias:vt().trim().nullable(),street:vt().trim().nullable(),city:vt().trim().nullable(),pincode:vt().trim().nullable(),state:vt().trim().nullable(),gstState:(0,ye.Ys)(g,"Please select a valid GST state").nullable().when("country",((e,t)=>"IN"===e?t.required("Please select a GST state"):t)),country:(0,ye.Ys)(se).required("Client's country is required").default("IN"),gstin:(0,ye.BX)().nullable().when("country",((e,t)=>"IN"===e?t:vt().nullable())),panNumber:(0,ye.Cv)().nullable(),email:(0,ye.Do)().nullable(),emailShowInInvoice:bt().default(!1),phone:(0,ye.Hd)().nullable(),phoneShowInInvoice:bt().default(!1),customFields:(0,ye.hJ)(yt().shape({label:vt().trim().nullable().when("value",((e,t)=>e?t.required("Custom label is required"):t)),value:vt().nullable(),showInInvoice:bt().default(!0),params:yt().shape({showInInvoice:bt().default(!0)}),key:vt().trim()}),0).default([]),attachments:(0,ye.hJ)(vt(),0).default([]),updatePreviousInvoices:bt().default(!1)});const St={TEXT:"TEXT",DATE:"DATE",NUMBER:"NUMBER",BOOLEAN:"BOOLEAN",CURRENCY:"CURRENCY"};var Ct,$t=(0,ue.object)().shape({key:(0,ue.string)().trim().nullable(),label:(0,ue.string)().trim().required("Label is a required field"),dataType:(0,ye.Ys)(St).default("TEXT").nullable()});!function(e){e.TEXT="TEXT",e.NUMBER="NUMBER",e.DATE="DATE",e.CURRENCY="CURRENCY",e.BOOLEAN="BOOLEAN"}(Ct||(Ct={}));const Ft=(0,B.default)(M.Button)`
  && {
    svg {
      margin-right: 0;
    }
  }
`,Pt=B.default.div`
  dispaly: flex;
  flex-direction: column;
  ${({theme:{spacings:e}})=>B.css`
    padding: ${e.s4} ${e.s7};
  `}
`,xt=B.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({theme:{colors:e,spacings:t}})=>B.css`
    padding: ${t.s4} ${t.s7};
    border-bottom: 1px solid ${e.neutral[3]};
  `}
`,kt=B.default.div`
  && {
    display: flex;
    width: 100%;
    ${({primaryInput:e})=>B.css`
      > div:first-child {
        ${"second"===e&&B.css`
          width: 33%;
          min-width: 100px;
        `}
        div {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
      }
      > div:last-child {
        ${"first"===e&&B.css`
          width: 33%;
        `}
        div {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
    `}
  }
`,Tt=B.default.div`
  display: grid;
  ${({theme:{spacings:e,screens:t},fieldWidth:n})=>B.css`
    grid-template-columns: repeat(auto-fill, minmax(auto, ${n}));
    gap: ${e.s6} ${e.s7};
    @media screen and (${t.lte.xs}) {
      grid-template-columns: repeat(auto-fill, minmax(auto, 100%));
    }
  `}
`,wt=B.default.div`
  min-width: 0;
  display: flex;
  > label {
    width: 100%;
  }
`,Lt=e=>{const{onSubmit:t}=e,[n,r]=(0,N.useState)(null),a=Object.entries(St).map((([e,t])=>({label:t,value:e}))),i={initialValues:$t.default(),validationSchema:$t,onSubmit:(e,{setSubmitting:n})=>(0,p.mG)(void 0,void 0,void 0,(function*(){try{const n=Object.assign({},e);n.key=Math.random().toString(36).slice(2),t(n)}catch(a){r((null===a||void 0===a?void 0:a.message)||a)}return n(!1),Promise.resolve()})),validateOnMount:!0};return N.createElement(M.Form,{formik:i},N.createElement(D.xu,{marginBottom:"24px"},N.createElement(M.Form.Input,{name:"label",label:"Label Name",labelProps:{variant:"neutral",size:"span"},outlined:!0,required:!0})),N.createElement(D.xu,{marginBottom:"24px"},N.createElement(M.Form.Select,{name:"dataType",options:a,label:"Data Type",labelProps:{variant:"neutral",size:"span"},required:!0,outlined:!0})),N.createElement(D.xu,{mt:"30px",mb:"30px"},N.createElement(M.Form.Error,{error:n,hideFormError:!0})),N.createElement(D.xu,{width:1,textAlign:"center"},N.createElement(M.Form.Button,{variant:"primary"},"Save")))},At=e=>{const{name:t,editable:n,options:r,showInInvoice:a,fieldWidth:i}=e,{handleChange:o}=(0,Te.u6)(),[l,u]=(0,ae.Z)(!1),[s,c]=(0,ae.Z)(!1),[d,m]=(0,N.useState)(),[f]=(0,Te.U$)({name:t}),{value:h}=f,{RC:g}=pe,y=(0,p._T)(pe,["RC"]);(0,N.useEffect)((()=>{const e=null===r||void 0===r?void 0:r.filter((e=>!h.some((t=>t.key===e.key)))).map((e=>({value:e.key,label:e.label})));m(e)}),[r,h]);const v=(0,N.useMemo)((()=>Object.keys(y).map((e=>({label:e,value:e})))),[]);return N.createElement(N.Fragment,null,N.createElement(Te.F2,{name:t,render:({push:e,remove:m})=>N.createElement("div",null,N.createElement(Tt,{fieldWidth:i},h.map(((e,r)=>{const{dataType:i}=e;return N.createElement(D.kC,{alignItems:"flex-start",flexDirection:"column"},N.createElement(D.kC,{flexDirection:"column",width:1},N.createElement(D.kC,{mb:"8px",justifyContent:"space-between"},!n&&N.createElement(M.Form.Input,{name:`${t}[${r}].label`,placeholder:"Label "+(e.value?"(Required)":""),required:!!e.value}),n&&N.createElement(M.Typography,{inline:!0,variant:"neutral",name:`${t}[${r}].label`,editable:!0,onValueChange:o},e.label),N.createElement(Ft,{onClick:()=>m(r),anchor:!0,variant:"secondary"},N.createElement(ke.x8P,{color:"#733dd9"}))),N.createElement(wt,null,i===Ct.DATE&&N.createElement(M.Form.DatePicker,{name:`${t}[${r}].value`,placeholder:"Value",outlined:!0,dateFormat:"MMMM dd, yyyy"}),i===Ct.BOOLEAN&&N.createElement(M.Form.Checkbox,{name:`${t}[${r}].value`,outlined:!0,label:e.value?"Yes":"No"}),i===Ct.NUMBER&&N.createElement(M.Form.InputNumber,{name:`${t}[${r}].value`,outlined:!0}),i===Ct.CURRENCY&&N.createElement(kt,{outlined:!0,primaryInput:"second"},N.createElement(M.Form.Select,{name:`${t}[${r}].value.currency`,options:v,outlined:!0,size:"medium"}),N.createElement(M.Form.InputNumber,{name:`${t}[${r}].value.amount`,labelProps:{variant:"neutral",size:"span"},outlined:!0})),i===Ct.TEXT&&N.createElement(M.Form.Input,{name:`${t}[${r}].value`,placeholder:"Value",outlined:!0}))),a&&N.createElement(D.xu,{mt:"8px"},N.createElement(M.Form.Checkbox,{name:`${t}[${r}].params.showInInvoice`,label:"Show In Invoice Billed To"})))}))),N.createElement(D.xu,{mt:"12px",maxWidth:"304px"},!l&&N.createElement(M.Button,{anchor:!0,variant:"neutral",onClick:()=>{u(!0)}},N.createElement(ke.Ct0,{size:16}),"Add Custom Fields"),l&&N.createElement(M.Select,{name:"customFieldOptions",options:d,placeholder:"Select any Custom field",onChange:t=>((e,t)=>{u(!1);const{label:n,value:a}=e;let i={};r&&(i=r.find((e=>e.key===a))),t(Object.assign(Object.assign({},i),{label:n,value:"",params:{showInInvoice:!0}}))})(t,e),defaultMenuIsOpen:!0,onBlur:()=>u(!1),optionButton:N.createElement(M.Button,{variant:"secondary",onClick:()=>c(!0)},"Add New Custom Fields")}),N.createElement(M.Modal,{open:s,maskClosable:!1,centered:!0,footer:null,width:450,bodyStyle:{padding:"0"},borderRadius:8},N.createElement(xt,null,N.createElement(M.Typography,{bold:!0,size:"h5"},"Add New Custom Field"),N.createElement(M.Button,{variant:"neutral",anchor:!0,onClick:()=>c(!1)},N.createElement(ke.x8P,{size:32,color:"#7f8fa4"}))),N.createElement(Pt,null," ",N.createElement(Lt,{onSubmit:t=>((e,t)=>{t(Object.assign(Object.assign({},e),{value:"",params:{showInInvoice:!0}})),c(!1)})(t,e)})))))}))};At.defaultProps={fieldWidth:"47%"};var Rt=At;const Nt=Object.entries(se).map((([e,t])=>({label:t,value:e}))),Dt=ze()(Object.entries(g).map((([e,t])=>({label:t,value:e}))),["label"],["asc"]),It=({showUpdateExistingCheck:e,updateCurrencyOnCountryChange:t,customFieldOptions:n,privateS3Props:r,showInInvoice:a})=>{const{values:i,setFieldValue:o}=(0,Te.u6)(),{country:l,gstin:u,phone:s}=i,c="IN"===l,[d,m]=(0,N.useState)();return(0,N.useEffect)((()=>{!s&&l&&m(l.toLowerCase())}),[!!s,l]),(0,N.useEffect)((()=>{const{panNumber:e,gstState:t}=He(u);e&&t&&(o("panNumber",e,!1),o("gstState",t,!1))}),[u]),N.createElement(N.Fragment,null,N.createElement(D.xu,{mb:"16px"},N.createElement(M.Typography,{as:"h5"},"Basic Information")),N.createElement(D.xu,{mb:"12px"},N.createElement(M.Form.Select,{name:"country",label:"Select Country",placeholder:"Select Business Country",required:!0,options:Nt,outlined:!0,onChange:t})),N.createElement(D.kC,{flexDirection:["column","row"]},N.createElement(D.xu,{width:[1,.5],pr:[0,"12px"],my:"12px"},N.createElement(M.Form.Input,{name:"name",label:"Business Name",placeholder:"Business Name (Required)",required:!0,outlined:!0})),N.createElement(D.xu,{width:[1,.5],pl:[0,"12px"],my:"12px"},N.createElement(M.Form.Input,{name:"alias",label:"Business Alias (Nick Name)",placeholder:"Business Alias",outlined:!0}))),N.createElement(D.kC,{flexDirection:["column","row"]},N.createElement(D.xu,{width:[1,.5],pr:[0,"12px"],my:"12px"},N.createElement(M.Form.Input,{name:"email",label:"Email",placeholder:"Email",outlined:!0}),N.createElement(D.xu,{mt:"8px"},N.createElement(M.Form.Checkbox,{name:"emailShowInInvoice",label:"Show Email in Invoice"}))),N.createElement(D.xu,{width:[1,.5],pl:[0,"12px"],my:"12px"},N.createElement(M.Form.PhoneInput,{name:"phone",label:"Phone Number",placeholder:"Phone Number",outlined:!0,country:d}),N.createElement(D.xu,{mt:"8px"},N.createElement(M.Form.Checkbox,{name:"phoneShowInInvoice",label:"Show Phone in Invoice"})))),c&&N.createElement(D.kC,{flexDirection:["column","row"]},N.createElement(D.xu,{width:[1,.5],pr:[0,"12px"],my:"12px"},N.createElement(M.Form.Input,{name:"gstin",label:"Business GSTIN",placeholder:"Business GSTIN (Optional)",outlined:!0,transform:"uppercase"})),N.createElement(D.xu,{width:[1,.5],pl:[0,"12px"],my:"12px"},N.createElement(M.Form.Input,{name:"panNumber",label:"Business PAN Number",placeholder:"Business PAN Number (Optional)",outlined:!0,transform:"uppercase"}))),N.createElement(D.xu,{mt:"24px",mb:"16px"},N.createElement(M.Typography,{as:"h5"},"Additional Details")),N.createElement(Rt,{editable:!0,showInInvoice:a,name:"customFields",options:n}),r&&N.createElement(N.Fragment,null,N.createElement(D.xu,{mt:"24px",mb:"16px"},N.createElement(M.Typography,{as:"h5"},"Attachments")),N.createElement(M.Form.Storage,{name:"attachments",multiple:!0,size:"large",uploadParams:r,style:{border:"none",backgroundColor:"#fff"}})),N.createElement(D.xu,{mt:"24px",mb:"16px"},N.createElement(M.Typography,{as:"h5"},"Communication Address")),N.createElement(D.kC,{flexDirection:["column","row"]},N.createElement(D.xu,{width:[1,.5],pr:[0,"12px"],my:"12px"},N.createElement(M.Form.Input,{name:"street",label:"Street Address",placeholder:"Street Address",outlined:!0})),N.createElement(D.xu,{width:[1,.5],pl:[0,"12px"],my:"12px"},N.createElement(M.Form.Input,{name:"city",label:"City",placeholder:"City Name",outlined:!0}))),N.createElement(D.kC,{flexDirection:["column","row"]},N.createElement(D.xu,{width:[1,.5],pr:[0,"12px"],my:"12px"},c?N.createElement(M.Form.Select,{name:"gstState",label:"GST State",placeholder:"Select GST State",options:Dt,required:!0,outlined:!0}):N.createElement(M.Form.Input,{name:"state",label:"State",placeholder:"State",outlined:!0})),N.createElement(D.xu,{width:[1,.5],pl:[0,"12px"],my:"12px"},N.createElement(M.Form.Input,{name:"pincode",label:"Postal Code / Zip Code",placeholder:"Postal Code / Zip Code.",outlined:!0}))),e&&N.createElement(D.xu,{mt:"24px"},N.createElement(M.Form.Checkbox,{name:"updatePreviousInvoices",label:"Update current changes for all existing invoices of this business."})))},Mt=e=>{const{defaultValue:t,onSubmit:n,showUpdateExistingCheck:r,onFormError:a,updateCurrencyOnCountryChange:i,customFieldOptions:o,privateS3Props:l,showInInvoice:u}=e,[s,c]=(0,N.useState)(null),d={initialValues:Et.default(),validationSchema:Et,onSubmit:(e,{setSubmitting:t})=>(0,p.mG)(void 0,void 0,void 0,(function*(){try{const{updatePreviousInvoices:t}=e,r=(0,p._T)(e,["updatePreviousInvoices"]);yield n(r,t)}catch(r){c((null===r||void 0===r?void 0:r.message)||r)}return t(!1),Promise.resolve()})),validateOnMount:!0};return N.createElement(D.xu,null,N.createElement(M.Form,{formik:d},N.createElement(M.Form.Reset,{resetValue:t}),N.createElement(It,{showUpdateExistingCheck:!!r,customFieldOptions:o,privateS3Props:l,showInInvoice:u,updateCurrencyOnCountryChange:i}),N.createElement(D.kC,{my:"12px"},N.createElement(M.Form.Error,{error:s})),N.createElement(D.xu,{width:[1,.2]},N.createElement(M.Form.Button,{onFormError:a},"Save"))))};Mt.defaultProps={showUpdateExistingCheck:!1};var Bt=Mt;const qt=e=>{const{open:t,defaultValue:n,title:r,onCancel:a,onSubmit:i,showUpdateExistingCheck:o,onFormError:l,updateCurrencyOnCountryChange:u,customFieldOptions:s}=e;return N.createElement(M.Modal,{open:t,header:N.createElement(M.Typography,{as:"h4"},r||"Business Details"),onCancel:a,footer:null,maskClosable:!1,width:700},N.createElement(Bt,{defaultValue:n,onFormError:l,onSubmit:i,updateCurrencyOnCountryChange:u,showUpdateExistingCheck:o,customFieldOptions:s}))};qt.defaultProps={showUpdateExistingCheck:!1};var Ot=qt;var _t=e=>({billedTo:{name:e.name,country:e.country,street:e.street,city:e.city,state:e.state,pincode:e.pincode,gstState:e.gstState,email:e.email,emailShowInInvoice:e.emailShowInInvoice,phone:e.phone,phoneShowInInvoice:e.phoneShowInInvoice,customFields:e.customFields},alias:e.alias,gstin:e.gstin,panNumber:e.panNumber,updatePreviousInvoices:e.updatePreviousInvoices}),zt=n(44908),Ht=n.n(zt);function Wt(e,t){return t?Array.isArray(t)?t.reduce(Wt,e):"object"===typeof t?e.concat(Vt(t)):e.concat(t):e}function Vt(e){const t=Object.values(e).reduce(Wt,[]);return Ht()(t)}var jt=e=>({name:e.name,alias:e.alias,country:e.country,street:e.street,city:e.city,state:e.state,pincode:e.pincode,gstState:e.gstState,email:e.email,emailShowInInvoice:e.emailShowInInvoice,phone:e.phone,phoneShowInInvoice:e.phoneShowInInvoice,customFields:e.customFields,gstin:e.gstin,panNumber:e.panNumber,updatePreviousInvoices:e.updatePreviousInvoices});var Gt=e=>N.createElement(D.kC,{justifyContent:"space-between",color:"red",fontSize:"12px",flexDirection:"column"},e.map((e=>N.createElement(D.xu,{key:e,mt:"4px"},N.createElement(M.Typography,{key:e,variant:"error",size:"small"},N.createElement(ke.jjA,{size:14})," ",e)))));const Kt=e=>{var t;const{activeBusiness:n,businesses:r,onBusinessEdit:a,onBusinessChange:o,addNewBusiness:l,documentId:u,billType:s,isExpenditure:c,onFormError:d}=e,m=s===i.PURCHASEORDER||c?"billedTo":"billedBy",{values:f,setFieldValue:h,submitCount:g,errors:y,handleChange:v}=(0,Te.u6)(),{customLabels:b}=f,{[m]:E}=y,[S,C]=(0,ie.Z)({open:!1,data:null}),$=(0,N.useMemo)((()=>(r||[]).map((({urlKey:e,alias:t,name:n,logo:r})=>({label:N.createElement(st,null,N.createElement(M.Avatar,{size:24,src:r,name:t||n,fallback:!1}),N.createElement(M.Typography,null,t||n)),value:e})))),[r]),F=(0,N.useCallback)((()=>{var e,t,r,a,i,o,l,u,s,c,d,m,p,f,h,g,y,v,b;const E={name:n.name,alias:n.alias,street:null===(t=null===(e=null===n||void 0===n?void 0:n.locations[0])||void 0===e?void 0:e.address)||void 0===t?void 0:t.street,city:null===(a=null===(r=null===n||void 0===n?void 0:n.locations[0])||void 0===r?void 0:r.address)||void 0===a?void 0:a.city,pincode:null===(o=null===(i=null===n||void 0===n?void 0:n.locations[0])||void 0===i?void 0:i.address)||void 0===o?void 0:o.pincode,state:null===(u=null===(l=null===n||void 0===n?void 0:n.locations[0])||void 0===l?void 0:l.address)||void 0===u?void 0:u.state,gstState:null===(c=null===(s=null===n||void 0===n?void 0:n.locations[0])||void 0===s?void 0:s.address)||void 0===c?void 0:c.gstState,country:null===(m=null===(d=null===n||void 0===n?void 0:n.locations[0])||void 0===d?void 0:d.address)||void 0===m?void 0:m.country,gstin:n.gstin,panNumber:n.panNumber,email:null===(p=n.billedTo)||void 0===p?void 0:p.email,emailShowInInvoice:null===(f=n.billedTo)||void 0===f?void 0:f.emailShowInInvoice,phone:null===(h=n.billedTo)||void 0===h?void 0:h.phone,phoneShowInInvoice:null===(g=n.billedTo)||void 0===g?void 0:g.phoneShowInInvoice,customFields:null===(y=n.billedTo)||void 0===y?void 0:y.customFields};(null===(v=n.billedTo)||void 0===v?void 0:v.country)&&(null===(b=n.billedTo)||void 0===b?void 0:b.name)&&(E.name=n.billedTo.name,E.street=n.billedTo.street,E.city=n.billedTo.city,E.pincode=n.billedTo.pincode,E.state=n.billedTo.state,E.gstState=n.billedTo.gstState,E.country=n.billedTo.country),C({open:!0,data:E})}),[n]),P=(0,N.useCallback)((e=>{const t=Object.assign({},e),n=(e.customFields||[]).filter((e=>{var t;return null===(t=e.params)||void 0===t?void 0:t.showInInvoice}));t.customFields=n,e.emailShowInInvoice||delete t.email,e.phoneShowInInvoice||delete t.phone,h(m,t)}),[]),x=null===$||void 0===$?void 0:$.find((e=>e.value===(null===n||void 0===n?void 0:n.urlKey))),[k,T]=(0,N.useState)([]);(0,N.useEffect)((()=>{g>0&&T(E?Vt(E):[])}),[!!g,!!E]);const w=null===(t=null===n||void 0===n?void 0:n.configuration.clientCustomFields)||void 0===t?void 0:t.filter((e=>!e.isArchived));return N.createElement(N.Fragment,null,N.createElement(D.kC,{flexDirection:"column"},N.createElement(D.xu,{width:1,marginBottom:[1]},N.createElement(D.kC,{flexDirection:"row",alignItems:"baseline"},N.createElement(M.Typography,{size:"h4",name:`customLabels.${m}`,editable:!0,onValueChange:v},b[m]),N.createElement(D.xu,{ml:"12px"},N.createElement(M.Typography,{variant:"subtle"},"(Your Details)")))),N.createElement(D.xu,{width:1},N.createElement(M.Select,{name:"business-select",placeholder:`Select Billed ${c?"To":"By"} Business`,outlined:!0,required:!0,defaultValue:x,options:$,isDisabled:!!u,optionButton:N.createElement(M.Button,{variant:"secondary",onClick:l},"Add New Business"),onChange:e=>{o(e.value)},noOptionsMessage:({inputValue:e})=>e?"No Business Found":"No Business Added"}))),N.createElement(gt,{billingData:f[m],onBillingDetailEdit:F,error:!!k.length}),S.open&&N.createElement(Ot,{open:S.open,defaultValue:S.data,onCancel:()=>C({open:!1,data:null}),onSubmit:(e,t)=>(0,p.mG)(void 0,void 0,void 0,(function*(){const r=_t(e);yield a(n.urlKey,r,t),P(e),C({open:!1,data:null})})),showUpdateExistingCheck:!0,onFormError:d,customFieldOptions:w}),!!k.length&&Gt(k))},Zt=e=>{var t;const{activeBusiness:n,onClientChange:a,onClientEdit:o,addNewClient:l,documentId:u,billType:s,isExpenditure:c,onFormError:d}=e,m=s===i.PURCHASEORDER||c?"billedBy":"billedTo",f=s===i.PURCHASEORDER||c?"vendor":"client",{values:h,setFieldValue:g,submitCount:y,errors:v,setFieldTouched:b,handleChange:E}=(0,Te.u6)(),{customLabels:S,client:C,vendor:$,currency:F,locale:P}=h,{[m]:x}=v,k=s===i.PURCHASEORDER||c?$:C,[T,w]=(0,ie.Z)({open:!1,data:null,title:""}),[L,A]=(0,N.useState)([]),R=(0,N.useMemo)((()=>{const{clients:e}=n;return(e||[]).map((e=>({label:e.alias||e.name,value:e._id})))}),[n.clients]);(0,N.useEffect)((()=>{if(k){const{clients:e}=n,t=e.find((e=>e._id===k));if(t){const e=(t.customFields||[]).filter((e=>{var t;return null===(t=e.params)||void 0===t?void 0:t.showInInvoice})),r={_id:k,name:t.name||"",street:t.street,city:t.city,pincode:t.pincode,state:t.state,gstState:t.gstState,country:t.country||n.country||"IN",gstin:t.gstin,panNumber:t.panNumber,customFields:e};t.emailShowInInvoice&&(r.email=t.email,r.emailShowInInvoice=t.emailShowInInvoice),t.phoneShowInInvoice&&(r.phone=t.phone,r.phoneShowInInvoice=t.phoneShowInInvoice),g(m,r),w({open:!1,data:null,title:""})}}}),[C,$,n.clients]),(0,N.useEffect)((()=>{y>0&&A(x?Vt(x):[])}),[!!y,!!x]);const I=(0,N.useCallback)((e=>{a(e.value,n.urlKey)}),[a,n.urlKey]),B=null===(t=null===n||void 0===n?void 0:n.configuration.clientCustomFields)||void 0===t?void 0:t.filter((e=>!e.isArchived)),q=(0,N.useCallback)((e=>{if(e.value&&F&&!u){const t=lt[e.value];t&&g("currency",t,!1)}}),[]);return N.createElement(N.Fragment,null,N.createElement(D.kC,{flexDirection:"column"},N.createElement(D.xu,{width:[1,"unset"],marginBottom:[1]},N.createElement(D.kC,{flexDirection:"row",alignItems:"baseline"},N.createElement(M.Typography,{size:"h4",name:`customLabels.${m}`,editable:!0,onValueChange:E},S[m]),N.createElement(D.xu,{ml:"12px"},N.createElement(M.Typography,{variant:"subtle"},""+(c?"(Vendor Details)":"(Client Details)"))))),N.createElement(D.xu,{width:1},N.createElement(M.Form.Select,{name:f,placeholder:c?"Select Vendor By Bill":"Select Billed To Business",outlined:!0,required:!0,options:R,isDisabled:!!u,optionButton:N.createElement(M.Button,{variant:"secondary",onClick:()=>{const e=c?"Add New Vendor":"Add New Client";b("billedTo",!0,!1),w({open:!0,data:null,title:e})}},""+(c?"Add New Vendor":"Add New Client")),noOptionsMessage:({inputValue:e})=>e?"No Client Found":"No Client Added",onChange:I}))),k?N.createElement(gt,{billingData:h[m],onBillingDetailEdit:()=>{const{clients:e}=n,t=c?"Edit Vendor Details":"Edit Client Details",r=e.find((e=>e._id===k));w({open:!0,data:r,title:t})},locale:P,error:!!L.length}):N.createElement(mt,{type:c?r.VENDOR:r.CLIENT,onNewClientClick:()=>{const e=c?"Add New Vendor":"Add New Client";b(m,!0,!1),w({open:!0,data:{country:n.country||"IN"},title:e})},error:!!L.length}),!!L.length&&Gt(L),T.open&&N.createElement(Ot,{open:T.open,defaultValue:T.data,title:T.title,onCancel:()=>{w({open:!1,data:null,title:""})},onSubmit:(e,t)=>(0,p.mG)(void 0,void 0,void 0,(function*(){var r;const a=jt(e);if(null===(r=T.data)||void 0===r?void 0:r._id){const e=yield o(T.data._id,a,{urlKey:n.urlKey,updatePrevious:t});g(f,e._id,!1)}else{const e=yield l(a,n.urlKey);g(f,e._id,!1)}})),showUpdateExistingCheck:!!k,onFormError:d,updateCurrencyOnCountryChange:q,customFieldOptions:B}))};var Ut=e=>{const{businesses:t,activeBusiness:n,onBusinessEdit:r,onClientEdit:a,onBusinessChange:i,addNewBusiness:o,addNewClient:l,onClientChange:u,documentId:s,billType:c,isExpenditure:d,onFormError:m}=e;return N.createElement(N.Fragment,null,N.createElement(D.kC,{my:"16px",mx:["-16px",0],flexDirection:["column","row"],className:"invoice-billing-details-wrapper"},N.createElement(D.xu,{width:[1,.5],pr:["0","8px"],mb:["8px","0"]},N.createElement(ut,null,N.createElement(Kt,{businesses:t,activeBusiness:n,onBusinessEdit:r,onBusinessChange:i,addNewBusiness:o,documentId:s,billType:c,isExpenditure:d,onFormError:m}))),N.createElement(D.xu,{width:[1,.5],pr:["0","8px"],mb:["8px","0"]},N.createElement(ut,null,N.createElement(Zt,{activeBusiness:n,onClientChange:u,onClientEdit:a,addNewClient:l,documentId:s,billType:c,isExpenditure:d,onFormError:m})))))},Yt=JSON.parse('{"AAD":{"symbol":"$","name":"Antarctic Dollar","symbolNative":"$, \xa2, \u20a5","decimalDigits":2,"rounding":0,"code":"AAD","colloquial":"Dollar","subunit":"cent","countryCode":"AQ","plurals":{"name":"Antarctic Dollar","colloquial":"Dollar","subunit":"cent"}},"AED":{"symbol":"AED","name":"United Arab Emirates Dirham","symbolNative":"AED","decimalDigits":2,"rounding":0,"code":"AED","colloquial":"Dirham","subunit":"Fils","countryCode":"AE","plurals":{"name":"UAE dirhams","colloquial":"Dirhams","subunit":"Fils"}},"AFN":{"symbol":"Af","name":"Afghan Afghani","symbolNative":"\u060b","decimalDigits":2,"rounding":0,"code":"AFN","colloquial":"Afghani","subunit":"Pul","countryCode":"AF","plurals":{"name":"Afghan Afghanis","colloquial":"Afghanis","subunit":"Puls"}},"ALL":{"symbol":"L","name":"Albanian Lek","symbolNative":"Lek","decimalDigits":0,"rounding":0,"code":"ALL","colloquial":"Lek","subunit":"Qindark\xeb","countryCode":"AL","plurals":{"name":"Albanian lek\xeb","colloquial":"Lek\xeb","subunit":"Qindarka"}},"AMD":{"symbol":"AMD","name":"Armenian Dram","symbolNative":"\u0564\u0580.","decimalDigits":0,"rounding":0,"code":"AMD","colloquial":"Dram","subunit":"Luma","countryCode":"AM","plurals":{"name":"Armenian dram","colloquial":"Dram","subunit":"Luma"}},"ANG":{"symbol":"NA\u0192","name":"Netherlands Antillean guilder","symbolNative":"\u0192","decimalDigits":2,"rounding":0,"code":"ANG","colloquial":"guilder","subunit":"cent","countryCode":"CW","plurals":{"name":"Netherlands Antillean guilder","colloquial":"guilder","subunit":"cents"}},"AOA":{"symbol":"Kz","name":"Angolan kwanza","symbolNative":"Kz","decimalDigits":2,"rounding":0,"code":"AOA","colloquial":"kwanza","subunit":"c\xeantimo","countryCode":"AO","plurals":{"name":"Angolan kwanza","colloquial":"kwanza","subunit":"c\xeantimo"}},"ARS":{"symbol":"$","name":"Argentine Peso","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"ARS","colloquial":"Peso","subunit":"Centavo","countryCode":"AR","plurals":{"name":"Argentine pesos","colloquial":"Pesos","subunit":"Centavos"}},"AUD":{"symbol":"A$","name":"Australian Dollar","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"AUD","colloquial":"Dollar","subunit":"Cent","countryCode":"AU","plurals":{"name":"Australian dollars","colloquial":"Dollars","subunit":"Cents"}},"AWG":{"symbol":"Afl","name":"Aruban florin","symbolNative":"Afl","decimalDigits":2,"rounding":0,"code":"AWG","colloquial":"florin","subunit":"cent","countryCode":"AW","plurals":{"name":"Aruban florin","colloquial":"florin","subunit":"florin"}},"AZN":{"symbol":"manat","name":"Azerbaijani Manat","symbolNative":"\u043c\u0430\u043d.","decimalDigits":2,"rounding":0,"code":"AZN","colloquial":"Manat","subunit":"Q\u0259pik","countryCode":"AZ","plurals":{"name":"Azerbaijani Manat","colloquial":"Manat","subunit":"Q\u0259pik"}},"BAM":{"symbol":"KM","name":"Bosnia-Herzegovina Convertible Mark","symbolNative":"KM","decimalDigits":2,"rounding":0,"code":"BAM","colloquial":"Mark","subunit":"Fening","countryCode":"BA","plurals":{"name":"Bosnia-Herzegovina Convertible Marks","colloquial":"Marks","subunit":"Fenings"}},"BBD":{"symbol":"Bds$","name":"Barbadian dollar","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"BBD","colloquial":"Dolar","subunit":"Cent","countryCode":"BB","plurals":{"name":"Barbadian dollar","colloquial":"Dolar","subunit":"cent"}},"BDT":{"symbol":"Tk","name":"Bangladeshi Taka","symbolNative":"\u09f3","decimalDigits":2,"rounding":0,"code":"BDT","colloquial":"Taka","subunit":"Paisa","countryCode":"BD","plurals":{"name":"Bangladeshi Takas","colloquial":"Takas","subunit":"Paisa"}},"BGN":{"symbol":"BGN","name":"Bulgarian Levove","symbolNative":"\u043b\u0432.","decimalDigits":2,"rounding":0,"code":"BGN","colloquial":"Levove","subunit":"Stotinka","countryCode":"BG","plurals":{"name":"Bulgarian leva","colloquial":"Leva","subunit":"Stotinki"}},"BHD":{"symbol":"BD","name":"Bahraini Dinar","symbolNative":"BD","decimalDigits":3,"rounding":0,"code":"BHD","colloquial":"Dinar","subunit":"Fils","countryCode":"BH","plurals":{"name":"Bahraini Dinars","colloquial":"Dinars","subunit":"Fils"}},"BIF":{"symbol":"FBu","name":"Burundian Franc","symbolNative":"FBu","decimalDigits":0,"rounding":0,"code":"BIF","colloquial":"Franc","subunit":"Centime","countryCode":"BI","plurals":{"name":"Burundian Francs","colloquial":"Francs","subunit":"Centimes"}},"BMD":{"symbol":"$","name":"Bermudian Dollar","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"BMD","colloquial":"","subunit":"Cent","countryCode":"BM","plurals":{"name":"Bermudian Dollar","colloquial":"","subunit":"Cent"}},"BND":{"symbol":"B$","name":"Brunei Dollar","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"BND","colloquial":"Dollar","subunit":"Sen","countryCode":"BN","plurals":{"name":"Brunei Dollars","colloquial":"Dollars","subunit":"Sen"}},"BOB":{"symbol":"Bs","name":"Bolivian Boliviano","symbolNative":"Bs","decimalDigits":2,"rounding":0,"code":"BOB","colloquial":"Boliviano","subunit":"Centavo","countryCode":"BO","plurals":{"name":"Bolivian Bolivianos","colloquial":"Bolivianos","subunit":"Centavos"}},"BRL":{"symbol":"R$","name":"Brazilian Real","symbolNative":"R$","decimalDigits":2,"rounding":0,"code":"BRL","colloquial":"Real","subunit":"Centavo","countryCode":"BR","plurals":{"name":"Brazilian Reals","colloquial":"Reals","subunit":"Centavos"}},"BTN":{"symbol":"Nu.","name":"Bhutanese ngultrum","symbolNative":"Nu.","decimalDigits":2,"rounding":0,"code":"BTN","colloquial":"Ch.","subunit":"chhertum","countryCode":"BT","plurals":{"name":"Bermudian dollar","colloquial":"Ch.","subunit":"chhertum"}},"BSD":{"symbol":"B$","name":"Bahamian dollar","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"BS","colloquial":"cents","subunit":"cent","countryCode":"BB","plurals":{"name":"Bermudian dollar","colloquial":"cents","subunit":"cent"}},"BWP":{"symbol":"P","name":"Botswanan Pula","symbolNative":"P","decimalDigits":2,"rounding":0,"code":"BWP","colloquial":"Pula","subunit":"Thebe","countryCode":"BW","plurals":{"name":"Botswanan Pula","colloquial":"Pula","subunit":"Thebe"}},"BYN":{"symbol":"Br","name":"Belarusian Ruble","symbolNative":"\u0440\u0443\u0431.","decimalDigits":2,"rounding":0,"code":"BYN","colloquial":"Rubel","subunit":"Kapiejka","countryCode":"BY","plurals":{"name":"Belarusian Rubles","colloquial":"Rubels","subunit":"Kapiejkas"}},"BYR":{"symbol":"Br","name":"Belarusian Ruble","symbolNative":"\u0440\u0443\u0431.","decimalDigits":2,"rounding":0,"code":"BYN","colloquial":"Ruble","subunit":"Kapiejka","countryCode":"BY","plurals":{"name":"Belarusian Rubles","colloquial":"Rubles","subunit":"Kapiejkas"}},"BZD":{"symbol":"BZ$","name":"Belize Dollar","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"BZD","colloquial":"Dollar","subunit":"Cent","countryCode":"BZ","plurals":{"name":"Belize dollars","colloquial":"Dollars","subunit":"Cents"}},"CAD":{"symbol":"CA$","name":"Canadian Dollar","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"CAD","colloquial":"Dollar","subunit":"Cent","countryCode":"CA","plurals":{"name":"Canadian dollars","colloquial":"Dollars","subunit":"Cents"}},"CDF":{"symbol":"FC","name":"Congolese Franc","symbolNative":"FrCD","decimalDigits":2,"rounding":0,"code":"CDF","colloquial":"Franc","subunit":"Centime","countryCode":"BB","plurals":{"name":"Congolese Francs","colloquial":"Francs","subunit":"Centimes"}},"CHF":{"symbol":"CHF","name":"Swiss Franc","symbolNative":"CHF","decimalDigits":2,"rounding":0.05,"code":"CHF","colloquial":"Franc","subunit":"Centime","countryCode":"CH","plurals":{"name":"Swiss Francs","colloquial":"Francs","subunit":"Centimes"}},"CLP":{"symbol":"CL$","name":"Chilean Peso","symbolNative":"$","decimalDigits":0,"rounding":0,"code":"CLP","colloquial":"Peso","subunit":"Pesos","countryCode":"CL","plurals":{"name":"Chilean Pesos","colloquial":"Pesos","subunit":"Pesos"}},"CNY":{"symbol":"CN\xa5","name":"Chinese Yuan","symbolNative":"\u5143","decimalDigits":2,"rounding":0,"code":"CNY","name_plural":"Chinese Yuan","colloquial":"Yuan","subunit":"Jiao","countryCode":"CN","plurals":{"name":"Chinese Yuan","colloquial":"Yuan","subunit":"Jiao"}},"COP":{"symbol":"CO$","name":"Colombian Peso","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"COP","colloquial":"Peso","subunit":"Centavo","countryCode":"CO","plurals":{"name":"Colombian Pesos","colloquial":"Pesos","subunit":"Centavos"}},"CRC":{"symbol":"\u20a1","name":"Costa Rican Col\xf3n","symbolNative":"\u20a1","decimalDigits":2,"rounding":0,"code":"CRC","colloquial":"Col\xf3n","subunit":"C\xe9ntimo","countryCode":"CR","plurals":{"name":"Costa Rican col\xf3nes","colloquial":"Col\xf3nes","subunit":"C\xe9ntimos"}},"CUP":{"symbol":"$","name":"Cuban peso","symbolNative":"\xa2","decimalDigits":2,"rounding":0,"code":"CUP","colloquial":"peso","subunit":"centavo","countryCode":"CU","plurals":{"name":"Cuban peso","colloquial":"peso","subunit":"cents"}},"CVE":{"symbol":"CV$","name":"Cape Verdean Escudo","symbolNative":"CV$","decimalDigits":0,"rounding":0,"code":"CVE","colloquial":"Escudo","subunit":"Centavo","countryCode":"CV","plurals":{"name":"Cape Verdean Escudos","colloquial":"Escudos","subunit":"Centavo"}},"CZK":{"symbol":"K\u010d","name":"Czech Republic Koruna","symbolNative":"K\u010d","decimalDigits":2,"rounding":0,"code":"CZK","colloquial":"Koruna","subunit":"hal\xe9\u0159","countryCode":"CZ","plurals":{"name":"Czech Republic korunas","colloquial":"Korunas","subunit":"hal\xe9\u0159"}},"DJF":{"symbol":"Fdj","name":"Djiboutian Franc","symbolNative":"Fdj","decimalDigits":0,"rounding":0,"code":"DJF","colloquial":"Franc","subunit":"Centime","countryCode":"DJ","plurals":{"name":"Djiboutian francs","colloquial":"Franc","subunit":"Centimes"}},"DKK":{"symbol":"kr.","name":"Danish Krone","symbolNative":"kr.","decimalDigits":2,"rounding":0,"code":"DKK","name_plural":"Danish kroner","colloquial":"Krone","subunit":"\xf8re","countryCode":"DK","plurals":{"name":"Danish Kroner","colloquial":"Kroner","subunit":"\xf8re"}},"DOP":{"symbol":"RD$","name":"Dominican Peso","symbolNative":"RD$","decimalDigits":2,"rounding":0,"code":"DOP","colloquial":"Peso","subunit":"Centavo","countryCode":"DO","plurals":{"name":"Dominican pesos","colloquial":"Pesos","subunit":"Centavos"}},"DZD":{"symbol":"DA","name":"Algerian Dinar","symbolNative":"DA","decimalDigits":2,"rounding":0,"code":"DZD","colloquial":"Dinar","subunit":"Centime","countryCode":"DZ","plurals":{"name":"US dollars","colloquial":"Dinars","subunit":"Centimes"}},"EEK":{"symbol":"Ekr","name":"Estonian Kroon","symbolNative":"kr","decimalDigits":2,"rounding":0,"code":"EEK","colloquial":"Kroon","subunit":"Sent","countryCode":"EE","plurals":{"name":"Estonian Krooni","colloquial":"Krooni","subunit":"Senti"}},"EGP":{"symbol":"E\xa3","name":"Egyptian Pound","symbolNative":"E\xa3","decimalDigits":2,"rounding":0,"code":"EGP","colloquial":"Pound","subunit":"Piastre","countryCode":"EG","plurals":{"name":"Egyptian pounds","colloquial":"Pounds","subunit":"Piastres"}},"ERN":{"symbol":"Nfk","name":"Eritrean Nakfa","symbolNative":"Nfk","decimalDigits":2,"rounding":0,"code":"ERN","colloquial":"Nakfa","subunit":"Cent","countryCode":"ER","plurals":{"name":"Eritrean Nakfas","colloquial":"Nakfas","subunit":"Cents"}},"ETB":{"symbol":"Br","name":"Ethiopian Birr","symbolNative":"Br","decimalDigits":2,"rounding":0,"code":"ETB","colloquial":"Birr","subunit":"Santim","countryCode":"ET","plurals":{"name":"Ethiopian Birrs","colloquial":"Birrs","subunit":"Santims"}},"EUR":{"symbol":"\u20ac","name":"Euro","symbolNative":"\u20ac","decimalDigits":2,"rounding":0,"code":"EUR","colloquial":"Euro","subunit":"Cent","countryCode":"BE","plurals":{"name":"Euros","colloquial":"Euros","subunit":"Cents"}},"FJD":{"symbol":"FJ$","name":"Fijian dollar","symbolNative":"FJ$","decimalDigits":2,"rounding":0,"code":"FJD","colloquial":"dollar","subunit":"cent","countryCode":"FJ","plurals":{"name":"Fijian dollar","colloquial":"dollar","subunit":"cent"}},"FKP":{"symbol":"\xa3","name":"Falkland Islands pound","symbolNative":"\xa3","decimalDigits":2,"rounding":0,"code":"FKP","colloquial":"pound","subunit":"penny","countryCode":"FK","plurals":{"name":"Falkland Islands pound","colloquial":"pound","subunit":"pence"}},"GBP":{"symbol":"\xa3","name":"British Pound Sterling","symbolNative":"\xa3","decimalDigits":2,"rounding":0,"code":"GBP","colloquial":"Pound","subunit":"Penny","countryCode":"GB","plurals":{"name":"British pounds Sterlings","colloquial":"Pounds","subunit":"Pence"}},"GEL":{"symbol":"GEL","name":"Georgian Lari","symbolNative":"GEL","decimalDigits":2,"rounding":0,"code":"GEL","colloquial":"Lari","subunit":"Tetri","countryCode":"GE","plurals":{"name":"Georgian Lari","colloquial":"Lari","subunit":"Tetri"}},"GHS":{"symbol":"GH\u20b5","name":"Ghanaian Cedi","symbolNative":"GH\u20b5","decimalDigits":2,"rounding":0,"code":"GHS","colloquial":"Cedi","subunit":"Pesewa","countryCode":"GH","plurals":{"name":"Ghanaian Cedis","colloquial":"Cedis","subunit":"Pesewas"}},"GIP":{"symbol":"\xa3","name":"Gambian dalasi","symbolNative":"\xa3","decimalDigits":2,"rounding":0,"code":"GIP","colloquial":"Pound","subunit":"Penny","countryCode":"GI","plurals":{"name":"Gambian dalasi","colloquial":"Pounds","subunit":"Pence"}},"GMD":{"symbol":"D","name":"Gambian dalasi","symbolNative":"D","decimalDigits":2,"rounding":0,"code":"GMD","colloquial":"dalasi","subunit":"butut","countryCode":"GM","plurals":{"name":"Gambian dalasi","colloquial":"dalasis","subunit":"butut"}},"GNF":{"symbol":"FG","name":"Guinean Franc","symbolNative":"FG","decimalDigits":0,"rounding":0,"code":"GNF","colloquial":"Franc","subunit":"Centime","countryCode":"GN","plurals":{"name":"Guinean Francs","colloquial":"Francs","subunit":"Centimes"}},"GTQ":{"symbol":"Q","name":"Guatemalan Quetzal","symbolNative":"Q","decimalDigits":2,"rounding":0,"code":"GTQ","colloquial":"Quetzal","subunit":"Centavo","countryCode":"GT","plurals":{"name":"Guatemalan Quetzales","colloquial":"Quetzales","subunit":"Centavos"}},"GYD":{"symbol":"G$","name":"Guyanese dollar","symbolNative":"GY$, $","decimalDigits":2,"rounding":0,"code":"GY","colloquial":"$","subunit":"cent","countryCode":"BB","plurals":{"name":"Guyanese dollar","colloquial":"$","subunit":"cent"}},"HKD":{"symbol":"HK$","name":"Hong Kong Dollar","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"HKD","colloquial":"Dollar","subunit":"Cent","countryCode":"HK","plurals":{"name":"Hong Kong Dollars","colloquial":"Dollars","subunit":"Cents"}},"HNL":{"symbol":"HNL","name":"Honduran Lempira","symbolNative":"L","decimalDigits":2,"rounding":0,"code":"HNL","colloquial":"Lempira","subunit":"Centavo","countryCode":"HN","plurals":{"name":"Honduran Lempiras","colloquial":"Lempiras","subunit":"Centavos"}},"HRK":{"symbol":"kn","name":"Croatian Kuna","symbolNative":"kn","decimalDigits":2,"rounding":0,"code":"HRK","colloquial":"Kuna","subunit":"Lipa","countryCode":"HR","plurals":{"name":"Croatian Kunas","colloquial":"Kunas","subunit":"Lipa"}},"HUF":{"symbol":"Ft","name":"Hungarian Forint","symbolNative":"Ft","decimalDigits":2,"rounding":0,"code":"HUF","colloquial":"Forint","subunit":"fill\xe9r","countryCode":"HU","plurals":{"name":"Hungarian forints","colloquial":"Forints","subunit":"fill\xe9rs"}},"HTG":{"symbol":"G","name":"Haitian gourde","symbolNative":"G","decimalDigits":2,"rounding":0,"code":"GIP","colloquial":"gourdes","subunit":"Centime","countryCode":"HT","plurals":{"name":"Haitian gourde","colloquial":"gourdes","subunit":"Centime"}},"IDR":{"symbol":"Rp","name":"Indonesian Rupiah","symbolNative":"Rp","decimalDigits":0,"rounding":0,"code":"IDR","colloquial":"Rupiah","subunit":"Sen","countryCode":"ID","plurals":{"name":"Indonesian Rupiah","colloquial":"Rupiah","subunit":"Sen"}},"ILS":{"symbol":"\u20aa","name":"Israeli New Shekel","symbolNative":"\u20aa","decimalDigits":2,"rounding":0,"code":"ILS","colloquial":"Israeli Shekel","subunit":"Agora","countryCode":"PS","plurals":{"name":"Israeli New Shekels","colloquial":"Israeli Shekels","subunit":"Agoras"}},"INR":{"symbol":"Rs","name":"Indian Rupee","symbolNative":"\u20b9","decimalDigits":2,"rounding":0,"code":"INR","colloquial":"Rupee","subunit":"Paisa","countryCode":"IN","plurals":{"name":"Indian Rupees","colloquial":"Rupees","subunit":"Paise"}},"IQD":{"symbol":"IQD","name":"Iraqi Dinar","symbolNative":"IQD","decimalDigits":3,"rounding":0,"code":"IQD","colloquial":"Dinar","subunit":"Fils","countryCode":"IQ","plurals":{"name":"Iraqi Dinars","colloquial":"Dinars","subunit":"Fils"}},"IRR":{"symbol":"IRR","name":"Iranian Rial","symbolNative":"IRR","decimalDigits":0,"rounding":0,"code":"IRR","colloquial":"Rial","subunit":"Dinar","countryCode":"IR","plurals":{"name":"Iranian Rials","colloquial":"Rials","subunit":"Dinars"}},"ISK":{"symbol":"kr","name":"Icelandic Kr\xf3na","symbolNative":"kr","decimalDigits":0,"rounding":0,"code":"ISK","colloquial":"Kr\xf3na","subunit":"Aurar","countryCode":"IS","plurals":{"name":"Icelandic kr\xf3nur","colloquial":"Kr\xf3nur","subunit":"Aurar"}},"JMD":{"symbol":"J$","name":"Jamaican Dollar","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"JMD","colloquial":"Dollar","subunit":"Cent","countryCode":"JM","plurals":{"name":"Jamaican dollars","colloquial":"Dollars","subunit":"Cents"}},"JOD":{"symbol":"JD","name":"Jordanian Dinar","symbolNative":"JD","decimalDigits":3,"rounding":0,"code":"JOD","colloquial":"Dinar","subunit":"Fils","countryCode":"JO","plurals":{"name":"Jordanian Dinars","colloquial":"Dinars","subunit":"Fils"}},"JPY":{"symbol":"\xa5","name":"Japanese Yen","symbolNative":"\uffe5","decimalDigits":0,"rounding":0,"code":"JPY","colloquial":"Yen","subunit":"Sen","countryCode":"JP","plurals":{"name":"Japanese yen","colloquial":"Yen","subunit":"Sen"}},"KES":{"symbol":"Ksh","name":"Kenyan Shilling","symbolNative":"Ksh","decimalDigits":2,"rounding":0,"code":"KES","colloquial":"Shilling","subunit":"Cent","countryCode":"KE","plurals":{"name":"Kenyan Shillings","colloquial":"Shillings","subunit":"Cents"}},"KGS":{"symbol":"\u041b\u0432","name":"Kyrgyzstani som","symbolNative":"\u041b\u0432","decimalDigits":2,"rounding":0,"code":"KGS","colloquial":"som","subunit":"tyiyn","countryCode":"KG","plurals":{"name":"Kyrgyzstani som","colloquial":"som","subunit":"tyiyn"}},"KHR":{"symbol":"KHR","name":"Cambodian Riel","symbolNative":"\u17db","decimalDigits":2,"rounding":0,"code":"KHR","colloquial":"Riel","subunit":"Sen","countryCode":"KH","plurals":{"name":"Cambodian riels","colloquial":"Reils","subunit":"Sen"}},"KMF":{"symbol":"CF","name":"Comorian Franc","symbolNative":"CF","decimalDigits":0,"rounding":0,"code":"KMF","colloquial":"Franc","subunit":"Centime","countryCode":"KM","plurals":{"name":"Comorian Francs","colloquial":"Francs","subunit":"Centimes"}},"KPW":{"symbol":"\u20a9","name":"North Korean won","symbolNative":"\u20a9","decimalDigits":2,"rounding":0,"code":"KPW","colloquial":"won","subunit":"chon","countryCode":"KP","plurals":{"name":"North Korean won","colloquial":"won","subunit":"chon"}},"KRW":{"symbol":"\u20a9","name":"South Korean Won","symbolNative":"\u20a9","decimalDigits":0,"rounding":0,"code":"KRW","colloquial":"Won","subunit":"Jeon","countryCode":"KR","plurals":{"name":"South Korean Won","colloquial":"Won","subunit":"Jeon"}},"KWD":{"symbol":"KD","name":"Kuwaiti Dinar","symbolNative":"KD","decimalDigits":3,"rounding":0,"code":"KWD","colloquial":"Dinar","subunit":"Fils","countryCode":"KW","plurals":{"name":"Kuwaiti Dinars","colloquial":"Dinars","subunit":"Fils"}},"KYD":{"symbol":"$","name":"Cayman Islands dollar","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"KYD","colloquial":"dollar","subunit":"cent","countryCode":"KY","plurals":{"name":"Cayman Islands dollar","colloquial":"dollar","subunit":"cent"}},"KZT":{"symbol":"KZT","name":"Kazakhstani Tenge","symbolNative":"\u0442\u04a3\u0433.","decimalDigits":2,"rounding":0,"code":"KZT","colloquial":"Tenge","subunit":"t\u0131yn","countryCode":"KZ","plurals":{"name":"Kazakhstani Tenge","colloquial":"Tenge","subunit":"t\u0131yn"}},"LAK":{"symbol":"\u20ad","name":"Lao kip","symbolNative":"\u20adN","decimalDigits":2,"rounding":0,"code":"LAK","colloquial":"kip","subunit":"att","countryCode":"LA","plurals":{"name":"Lao kip","colloquial":"kip","subunit":"att"}},"LRD":{"symbol":"LD$","name":"Liberian dollar","symbolNative":"$, L$","decimalDigits":2,"rounding":0,"code":"LRD","colloquial":"dollar","subunit":"cent","countryCode":"LR","plurals":{"name":"Liberian dollar","colloquial":"dollar","subunit":"att"}},"LBP":{"symbol":"L\xa3","name":"Lebanese Pound","symbolNative":"L\xa3","decimalDigits":0,"rounding":0,"code":"LBP","colloquial":"Pound","subunit":"Piastre","countryCode":"LB","plurals":{"name":"Lebanese pounds","colloquial":"Pounds","subunit":"Piastres"}},"LKR":{"symbol":"Rs","name":"Sri Lankan Rupee","symbolNative":"\u0dbb\u0dd4","decimalDigits":2,"rounding":0,"code":"LKR","colloquial":"Rupee","subunit":"Cents","countryCode":"LK","plurals":{"name":"Sri Lankan rupees","colloquial":"Rupees","subunit":"Cents"}},"LSL":{"symbol":"L","name":"Lesotho loti","symbolNative":"pl.","decimalDigits":2,"rounding":0,"code":"LSL","colloquial":"dollar","subunit":"sente","countryCode":"LS","plurals":{"name":"Lesotho loti","colloquial":"loti","subunit":"lisente"}},"LTL":{"symbol":"Lt","name":"Lithuanian Litas","symbolNative":"Lt","decimalDigits":2,"rounding":0,"code":"LTL","colloquial":"Litas","subunit":"Centas","countryCode":"LT","plurals":{"name":"Lithuanian litai","colloquial":"Litai","subunit":"Centai"}},"LVL":{"symbol":"Ls","name":"Latvian Lats","symbolNative":"Ls","decimalDigits":2,"rounding":0,"code":"LVL","colloquial":"Lats","subunit":"sant\u012bms","countryCode":"LV","plurals":{"name":"Latvian Lati","colloquial":"Lati","subunit":"sant\u012bmi"}},"LYD":{"symbol":"LD","name":"Libyan Dinar","symbolNative":"LD","decimalDigits":3,"rounding":0,"code":"LYD","colloquial":"Dinar","subunit":"Dirham","countryCode":"LY","plurals":{"name":"Libyan dinars","colloquial":"Dinars","subunit":"Dirhams"}},"MAD":{"symbol":"MAD","name":"Moroccan Dirham","symbolNative":"MAD","decimalDigits":2,"rounding":0,"code":"MAD","colloquial":"Dirham","subunit":"Centime","countryCode":"MA","plurals":{"name":"Moroccan Dirhams","colloquial":"Dirhams","subunit":"Centimes"}},"MDL":{"symbol":"MDL","name":"Moldovan Leu","symbolNative":"MDL","decimalDigits":2,"rounding":0,"code":"MDL","colloquial":"Leu","subunit":"Ban","countryCode":"MD","plurals":{"name":"Moldovan lei","colloquial":"Lei","subunit":"Bani"}},"MGA":{"symbol":"MGA","name":"Malagasy Ariary","symbolNative":"MGA","decimalDigits":0.69897,"rounding":0,"code":"MGA","colloquial":"Ariary","subunit":"Franc","countryCode":"MG","plurals":{"name":"Malagasy Ariaries","colloquial":"Ariaries","subunit":"Francs"}},"MKD":{"symbol":"den","name":"Macedonian Denar","symbolNative":"\u0434\u0435\u043d","decimalDigits":2,"rounding":0,"code":"MKD","colloquial":"Denar","subunit":"Deni","countryCode":"MK","plurals":{"name":"Macedonian denari","colloquial":"Denari","subunit":"Deni"}},"MMK":{"symbol":"K","name":"Myanma Kyat","symbolNative":"K","decimalDigits":2,"rounding":0,"code":"MMK","colloquial":"Kyat","subunit":"Pya","countryCode":"MM","plurals":{"name":"Myanma kyats","colloquial":"Kyat","subunit":"Pyas  "}},"MNT":{"symbol":"\u20ae","name":"Mongolian t\xf6gr\xf6gr","symbolNative":"\u20ae","decimalDigits":2,"rounding":0,"code":"MNT","colloquial":"t\xf6gr\xf6g","subunit":"m\xf6ng\xf6","countryCode":"MN","plurals":{"name":"Mongolian t\xf6gr\xf6g","colloquial":"t\xf6gr\xf6g","subunit":"m\xf6ng\xf6"}},"MOP":{"symbol":"MOP$","name":"Macanese Pataca","symbolNative":"MOP$","decimalDigits":1,"rounding":0,"code":"MOP","name_plural":"Macanese patacas","colloquial":"Pataca","subunit":"Avos","countryCode":"MO","plurals":{"name":"Macanese patacas","colloquial":"Patacas","subunit":"Avos"}},"MRO":{"symbol":"UM","name":"Maldivian rufiyaa","symbolNative":"UM","decimalDigits":2,"rounding":0,"code":" MVR","colloquial":"ouguiya","subunit":"khoums","countryCode":"MR","plurals":{"name":"Maldivian rufiyaa","colloquial":"ouguiya","subunit":"ouguiya"}},"MUR":{"symbol":"MURs","name":"Mauritian Rupee","symbolNative":"Rs","decimalDigits":2,"rounding":0,"code":"MUR","colloquial":"Rupee","subunit":"Cent","countryCode":"MU","plurals":{"name":"Mauritian rupees","colloquial":"Rupees","subunit":"Cents"}},"MVR":{"symbol":"MR","name":"Maldivian rufiyaa","symbolNative":"Rf","decimalDigits":2,"rounding":0,"code":"MVR","colloquial":"Rf","subunit":"laari","countryCode":"MV","plurals":{"name":"Maldivian rufiyaa","colloquial":"Rf","subunit":"laari"}},"MWK":{"symbol":"K","name":"Malawian kwacha","symbolNative":"K","decimalDigits":2,"rounding":0,"code":"MWK","colloquial":"kwacha","subunit":"tambala","countryCode":"MW","plurals":{"name":"Malawian kwacha","colloquial":"kwacha","subunit":"tambala"}},"MXN":{"symbol":"MX$","name":"Mexican Peso","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"MXN","colloquial":"Peso","subunit":"Centavo","countryCode":"MX","plurals":{"name":"Mexican Pesos","colloquial":"Pesos","subunit":"Centavos"}},"MYR":{"symbol":"RM","name":"Malaysian Ringgit","symbolNative":"RM","decimalDigits":2,"rounding":0,"code":"MYR","colloquial":"Ringgit","subunit":"Sen","countryCode":"MY","plurals":{"name":"Malaysian Ringgit","colloquial":"Ringgit","subunit":"Sen"}},"MZN":{"symbol":"MTn","name":"Mozambican Metical","symbolNative":"MTn","decimalDigits":2,"rounding":0,"code":"MZN","colloquial":"Metical","subunit":"Centavo","countryCode":"MZ","plurals":{"name":"Mozambican Meticais","colloquial":"Meticais","subunit":"Centavos"}},"NAD":{"symbol":"N$","name":"Namibian Dollar","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"NAD","colloquial":"Dollar","subunit":"Cent","countryCode":"NA","plurals":{"name":"Namibian Dollars","colloquial":"Dollars","subunit":"Cents"}},"NGN":{"symbol":"\u20a6","name":"Nigerian Naira","symbolNative":"\u20a6","decimalDigits":2,"rounding":0,"code":"NGN","colloquial":"Naira","subunit":"Kobo","countryCode":"NG","plurals":{"name":"Nigerian Naira","colloquial":"Naira","subunit":"Kobo"}},"NIO":{"symbol":"C$","name":"Nicaraguan C\xf3rdoba","symbolNative":"C$","decimalDigits":2,"rounding":0,"code":"NIO","colloquial":"C\xf3rdoba","subunit":"Centavo","countryCode":"NI","plurals":{"name":"Nicaraguan C\xf3rdobas","colloquial":"Corodobas","subunit":"Centavos"}},"NOK":{"symbol":"Nkr","name":"Norwegian Krone","symbolNative":"kr","decimalDigits":2,"rounding":0,"code":"NOK","colloquial":"Krone","subunit":"\xf8re","countryCode":"NO","plurals":{"name":"Norwegian Kroner","colloquial":"Kroner","subunit":"\xf8re"}},"NPR":{"symbol":"Rs","name":"Nepalese Rupee","symbolNative":"\u0930\u0942","decimalDigits":2,"rounding":0,"code":"NPR","colloquial":"Rupee","subunit":"Paisa","countryCode":"NP","plurals":{"name":"Nepalese Rupees","colloquial":"Rupees","subunit":"Paisa"}},"NZD":{"symbol":"NZ$","name":"New Zealand Dollar","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"NZD","colloquial":"Dollar","subunit":"Cent","countryCode":"NZ","plurals":{"name":"New Zealand Dollars","colloquial":"Dollars","subunit":"Cents"}},"OMR":{"symbol":"R.O.","name":"Omani Rial","symbolNative":"R.O.","decimalDigits":3,"rounding":0,"code":"OMR","colloquial":"Rial","subunit":"Baisa","countryCode":"OM","plurals":{"name":"Omani rials","colloquial":"Rials","subunit":"Baisa"}},"PAB":{"symbol":"B/.","name":"Panamanian Balboa","symbolNative":"B/.","decimalDigits":2,"rounding":0,"code":"PAB","colloquial":"Balboa","subunit":"Cent\xe9simo","countryCode":"PA","plurals":{"name":"Panamanian Balboas","colloquial":"Dollars","subunit":"Cent\xe9simos"}},"PEN":{"symbol":"S/.","name":"Peruvian Nuevo Sol","symbolNative":"S/.","decimalDigits":2,"rounding":0,"code":"PEN","colloquial":"Sol","subunit":"C\xe9ntimo","countryCode":"PE","plurals":{"name":"Peruvian nuevos soles","colloquial":"Soles","subunit":"C\xe9ntimos"}},"PGK":{"symbol":"K","name":"Papua New Guinean kina","symbolNative":"K","decimalDigits":2,"rounding":0,"code":"PGK","colloquial":"kina","subunit":"toea","countryCode":"PG","plurals":{"name":"Papua New Guinean kina","colloquial":"kina","subunit":"toea"}},"PHP":{"symbol":"\u20b1","name":"Philippine Peso","symbolNative":"\u20b1","decimalDigits":2,"rounding":0,"code":"PHP","colloquial":"Peso","subunit":"Centavo","countryCode":"PH","plurals":{"name":"Philippine pesos","colloquial":"Pesos","subunit":"Centavos"}},"PKR":{"symbol":"PKRs","name":"Pakistani Rupee","symbolNative":"\u20a8","decimalDigits":2,"rounding":0,"code":"PKR","colloquial":"Rupee","subunit":"Paisa","countryCode":"PK","plurals":{"name":"Pakistani rupees","colloquial":"Rupee","subunit":"Paisa"}},"PLN":{"symbol":"z\u0142","name":"Polish Zloty","symbolNative":"z\u0142","decimalDigits":2,"rounding":0,"code":"PLN","colloquial":"Zloty","subunit":"Grosz","countryCode":"PL","plurals":{"name":"Polish Zlotys","colloquial":"Zlotys","subunit":"Grosz"}},"PYG":{"symbol":"\u20b2","name":"Paraguayan Guarani","symbolNative":"\u20b2","decimalDigits":0,"rounding":0,"code":"PYG","colloquial":"Guarani","subunit":"C\xe9ntimo","countryCode":"PY","plurals":{"name":"Paraguayan Guaranis","colloquial":"Guaranis","subunit":"C\xe9ntimos"}},"QAR":{"symbol":"QR","name":"Qatari Riyal","symbolNative":"QR","decimalDigits":2,"rounding":0,"code":"QAR","colloquial":"Riyal","subunit":"Dirham","countryCode":"QA","plurals":{"name":"Qatari riyals","colloquial":"Riyals","subunit":"Dirhams"}},"RON":{"symbol":"RON","name":"Romanian Leu","symbolNative":"RON","decimalDigits":2,"rounding":0,"code":"RON","colloquial":"Leu","subunit":"Ban","countryCode":"RO","plurals":{"name":"Romanian Lei","colloquial":"Lei","subunit":"Bani"}},"RSD":{"symbol":"din.","name":"Serbian Dinar","symbolNative":"\u0434\u0438\u043d.","decimalDigits":2,"rounding":0,"code":"RSD","colloquial":"Dinar","subunit":"Para","countryCode":"RS","plurals":{"name":"Serbian Dinars","colloquial":"Dinars","subunit":"Paras"}},"RUB":{"symbol":"RUB","name":"Russian Ruble","symbolNative":"\u20bd.","decimalDigits":2,"rounding":0,"code":"RUB","colloquial":"Ruble","subunit":"Kopeyka","countryCode":"RU","plurals":{"name":"Russian Rubles","colloquial":"Rubles","subunit":"Kopeykas"}},"RWF":{"symbol":"RF","name":"Rwandan Franc","symbolNative":"FR","decimalDigits":0,"rounding":0,"code":"RWF","colloquial":"Franc","subunit":"Centime","countryCode":"RW","plurals":{"name":"Rwandan Francs","colloquial":"Francs","subunit":"Centimes"}},"SHP":{"symbol":"\xa3","name":"Saint Helena pound","symbolNative":"\xa3","decimalDigits":2,"rounding":0,"code":"SHP","colloquial":"pound","subunit":"penny","countryCode":"SH","plurals":{"name":"Saint Helena pound","colloquial":"pound","subunit":"pence"}},"SSP":{"symbol":"SS\xa3","name":"South Sudanese pound","symbolNative":"SS\xa3","decimalDigits":2,"rounding":0,"code":"SSP","colloquial":"pound","subunit":"piaster","countryCode":"SS","plurals":{"name":"South Sudanese pound","colloquial":"pound","subunit":"piaster"}},"SRD":{"symbol":"SS\xa3","name":"Surinamese dollar","symbolNative":"SS\xa3","decimalDigits":2,"rounding":0,"code":"SRD","colloquial":"dollar","subunit":"cent","countryCode":"SR","plurals":{"name":"Surinamese dollar","colloquial":"dollar","subunit":"dollars"}},"STD":{"symbol":"Db","name":"S\xe3o Tom\xe9 and Pr\xedncipe dobra","symbolNative":"Db","decimalDigits":2,"rounding":0,"code":"STN","colloquial":"dobra","subunit":"c\xeantimo","countryCode":"ST","plurals":{"name":"S\xe3o Tom\xe9 and Pr\xedncipe dobra","colloquial":"dobra","subunit":"c\xeantimo"}},"SAR":{"symbol":"SAR","name":"Saudi Riyal","symbolNative":"SAR","decimalDigits":2,"rounding":0,"code":"SAR","colloquial":"Riyal","subunit":"Halalah","countryCode":"SA","plurals":{"name":"Saudi Riyals","colloquial":"Riyals","subunit":"Halalahs"}},"SBD":{"symbol":"SI$","name":"Solomon Islands dollar","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"SBD","colloquial":"dollar","subunit":"cent","countryCode":"SB","plurals":{"name":"Solomon Islands dollar","colloquial":"kina","subunit":"cent"}},"SCR":{"symbol":"SR","name":"Seychellois rupee","symbolNative":"SRe","decimalDigits":2,"rounding":0,"code":"SCR","colloquial":"rupees","subunit":"cent","countryCode":"SC","plurals":{"name":"Seychellois rupee","colloquial":"rupees","subunit":"cent"}},"SDG":{"symbol":"SDG","name":"Sudanese Pound","symbolNative":"SDG","decimalDigits":2,"rounding":0,"code":"SDG","colloquial":"Pound","subunit":"Piastre","countryCode":"SD","plurals":{"name":"Sudanese Pounds","colloquial":"Pounds","subunit":"Piastres"}},"SEK":{"symbol":"Skr","name":"Swedish Krona","symbolNative":"kr","decimalDigits":2,"rounding":0,"code":"SEK","colloquial":"Krona","subunit":"\xf6re","countryCode":"SE","plurals":{"name":"Swedish kronor","colloquial":"Kronor","subunit":"\xf6re"}},"SGD":{"symbol":"S$","name":"Singapore Dollar","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"SGD","colloquial":"Dollar","subunit":"Cent","countryCode":"SG","plurals":{"name":"Singapore dollars","colloquial":"Dollars","subunit":"Cents"}},"SLL":{"symbol":"Le","name":"Sierra Leonean leone","symbolNative":"Le","decimalDigits":2,"rounding":0,"code":"SLL","colloquial":"leones","subunit":"cent","countryCode":"SL","plurals":{"name":"Sierra Leonean leone","colloquial":"leones","subunit":"cent"}},"SOS":{"symbol":"Sh.So","name":"Somali Shilling","symbolNative":"Sh.So","decimalDigits":2,"rounding":0,"code":"SOS","colloquial":"Shilling","subunit":"Senti","countryCode":"SO","plurals":{"name":"Somali Shillings","colloquial":"Shillings","subunit":"Senti"}},"SYP":{"symbol":"\xa3S","name":"Syrian Pound","symbolNative":"\xa3S","decimalDigits":2,"rounding":0,"code":"SYP","colloquial":"Pound","subunit":"Piastre","countryCode":"SY","plurals":{"name":"Syrian Pounds","colloquial":"Pounds","subunit":"Piastres"}},"SZL":{"symbol":"L","name":"Swazi lilangeni","symbolNative":"pl.","decimalDigits":2,"rounding":0,"code":"SZL","colloquial":"lilangeni","subunit":"cent","countryCode":"SZ","plurals":{"name":"Swazi lilangeni","colloquial":"lilangeni","subunit":"emalangeni"}},"THB":{"symbol":"\u0e3f","name":"Thai Baht","symbolNative":"\u0e3f","decimalDigits":2,"rounding":0,"code":"THB","colloquial":"Baht","subunit":"Satang","countryCode":"TH","plurals":{"name":"Thai baht","colloquial":"Baht","subunit":"Satang"}},"TJS":{"symbol":"SM","name":"Tajikistani somoni","symbolNative":"SM","decimalDigits":2,"rounding":0,"code":"TJ","colloquial":"somoni","subunit":"diram","countryCode":"BB","plurals":{"name":"Tajikistani somoni","colloquial":"somoni","subunit":"diram"}},"TMT":{"symbol":"T","name":"Turkmenistan manat","symbolNative":"T","decimalDigits":2,"rounding":0,"code":"TM","colloquial":"manat","subunit":"tenge","countryCode":"BB","plurals":{"name":"Turkmenistan manat","colloquial":"manat","subunit":"tenge"}},"TND":{"symbol":"DT","name":"Tunisian Dinar","symbolNative":"DT","decimalDigits":3,"rounding":0,"code":"TND","colloquial":"Dinar","subunit":"Millime","countryCode":"TN","plurals":{"name":"Tunisian Dinars","colloquial":"Dinars","subunit":"Millimes"}},"TOP":{"symbol":"T$","name":"Tongan Pa\u02bbanga","symbolNative":"T$","decimalDigits":2,"rounding":0,"code":"TOP","colloquial":"Pa\u02bbanga","subunit":"Seniti","countryCode":"TO","plurals":{"name":"Tongan pa\u02bbanga","colloquial":"Pa\u02bbanga","subunit":"Senitis"}},"TRY":{"symbol":"TL","name":"Turkish Lira","symbolNative":"TL","decimalDigits":2,"rounding":0,"code":"TRY","colloquial":"Lira","subunit":"Kuru\u015f","countryCode":"TR","plurals":{"name":"Turkish Lira","colloquial":"Lira","subunit":"Kuru\u015f"}},"TTD":{"symbol":"TT$","name":"Trinidad and Tobago Dollar","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"TTD","colloquial":"Dollar","subunit":"Cent","countryCode":"TT","plurals":{"name":"Trinidad and Tobago dollars","colloquial":"Dollars","subunit":"Cents"}},"TWD":{"symbol":"NT$","name":"New Taiwan Dollar","symbolNative":"NT$","decimalDigits":2,"rounding":0,"code":"TWD","colloquial":"Dollar","subunit":"Cent","countryCode":"TW","plurals":{"name":"New Taiwan Dollars","colloquial":"Dollars","subunit":"Cents"}},"TZS":{"symbol":"TSh","name":"Tanzanian Shilling","symbolNative":"TSh","decimalDigits":2,"rounding":0,"code":"TZS","colloquial":"Shilling","subunit":"Senti","countryCode":"TZ","plurals":{"name":"Tanzanian shillings","colloquial":"Shillings","subunit":"Senti"}},"UAH":{"symbol":"\u20b4","name":"Ukrainian Hryvnia","symbolNative":"\u20b4","decimalDigits":2,"rounding":0,"code":"UAH","colloquial":"Hryvnia","subunit":"Kopiyka","countryCode":"UA","plurals":{"name":"Ukrainian hryvni","colloquial":"hryvni","subunit":"Kopiyky"}},"UGX":{"symbol":"USh","name":"Ugandan Shilling","symbolNative":"USh","decimalDigits":0,"rounding":0,"code":"UGX","colloquial":"Shilling","subunit":"Cent","countryCode":"UG","plurals":{"name":"Ugandan Shillings","colloquial":"Shillings","subunit":"Cents"}},"USD":{"symbol":"$","name":"US Dollar","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"USD","colloquial":"Dollar","subunit":"Cent","countryCode":"US","plurals":{"name":"US dollars","colloquial":"Dollars","subunit":"Cents"}},"UYU":{"symbol":"$U","name":"Uruguayan Peso","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"UYU","colloquial":"Peso","subunit":"Centesimo","countryCode":"UY","plurals":{"name":"Uruguayan Pesos","colloquial":"Pesos","subunit":"Centesimos"}},"UZS":{"symbol":"UZS","name":"Uzbekistan Som","symbolNative":"UZS","decimalDigits":2,"rounding":0,"code":"UZS","colloquial":"So\u02bbm","subunit":"Tiyin","countryCode":"UZ","plurals":{"name":"Uzbekistan So\u02bbm","colloquial":"So\u02bbm","subunit":"Tiyin"}},"VEF":{"symbol":"Bs.F.","name":"Venezuelan bol\xedvar Soberano","symbolNative":"Bs.F.","decimalDigits":2,"rounding":0,"code":"VEF","colloquial":"Bol\xedvares Soberano","subunit":"C\xe9ntimo","countryCode":"VE","plurals":{"name":"Venezuelan bol\xedvar Soberanos","colloquial":"Bol\xedvares Soberanos","subunit":"C\xe9ntimos"}},"VND":{"symbol":"\u20ab","name":"Vietnamese \u0111\u1ed3ng","symbolNative":"\u20ab","decimalDigits":0,"rounding":0,"code":"VND","colloquial":"\u0111\u1ed3ng","subunit":"XU","countryCode":"VN","plurals":{"name":"Vietnamese \u0111\u1ed3ng","colloquial":"\u0111\u1ed3ng","subunit":"XU"}},"VUV":{"symbol":"\xa3","name":"Vanuatu vatu","symbolNative":"\xa3","decimalDigits":0,"rounding":0,"code":"VUV","colloquial":"vatu","subunit":"vatu","countryCode":"VU","plurals":{"name":"Vanuatu vatu","colloquial":"vatu","subunit":"vatu"}},"WST":{"symbol":"WS","name":"Samoan t\u0101l\u0101","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"WS","colloquial":"t\u0101l\u0101","subunit":"sene","countryCode":"BB","plurals":{"name":"Bermudian dollar","colloquial":"t\u0101l\u0101","subunit":"sene"}},"XAF":{"symbol":"FCFA","name":"CFA Franc BEAC","symbolNative":"FCFA","decimalDigits":0,"rounding":0,"code":"XAF","colloquial":"Franc","subunit":"Centime","countryCode":"XA","plurals":{"name":"CFA francs BEAC","colloquial":"Fancs","subunit":"Centimes"}},"XCD":{"symbol":"$","name":"Eastern Caribbean dollar","symbolNative":"$","decimalDigits":2,"rounding":0,"code":"XCD","colloquial":"dollar","subunit":"cent","countryCode":"GD","plurals":{"name":"Eastern Caribbean dollar","colloquial":"dollar","subunit":"cent"}},"XOF":{"symbol":"CFA","name":"CFA Franc BCEAO","symbolNative":"CFA","decimalDigits":0,"rounding":0,"code":"XOF","colloquial":"Franc","subunit":"Centime","countryCode":"BF","plurals":{"name":"CFA francs BCEAO","colloquial":"Francs","subunit":"Centimes"}},"XPF":{"symbol":"F","name":"CFP franc","symbolNative":"F","decimalDigits":0,"rounding":0,"code":"XPF","colloquial":"Fancs","subunit":"","countryCode":"WF","plurals":{"name":"CFP franc","colloquial":"Fancs","subunit":""}},"YER":{"symbol":"YR","name":"Yemeni Rial","symbolNative":"YR","decimalDigits":0,"rounding":0,"code":"YER","colloquial":"Rial","subunit":"Fils","countryCode":"YE","plurals":{"name":"Yemeni Rials","colloquial":"Rials","subunit":"Fils"}},"ZAR":{"symbol":"R","name":"South African Rand","symbolNative":"R","decimalDigits":2,"rounding":0,"code":"ZAR","colloquial":"Rand","subunit":"Cent","countryCode":"ZA","plurals":{"name":"South African rand","colloquial":"Rand","subunit":"Cents"}},"ZMK":{"symbol":"ZK","name":"Zambian Kwacha","symbolNative":"ZK","decimalDigits":2,"rounding":0,"code":"ZMK","colloquial":"Kwacha","subunit":"Ngwee","countryCode":"ZM","plurals":{"name":"Zambian Kwacha","colloquial":"Kwacha","subunit":"Ngwee"}},"ZWL":{"symbol":"ZWL$","name":"Zimbabwean Dollar","symbolNative":"ZWL$","decimalDigits":2,"rounding":0,"code":"ZWL","colloquial":"Dollar","subunit":"Cent","countryCode":"ZW","plurals":{"name":"Zimbabwean Dollars","colloquial":"Dollars","subunit":"Cents"}},"RC":{"symbol":"\ud83c\udd72","name":"Refrens Credit","symbolNative":"\ud83c\udd72","decimalDigits":0,"rounding":0,"code":"RC","colloquial":"Credits","subunit":"","countryCode":"","plurals":{"name":"Refrens Credits","colloquial":"Credits","subunit":""}}}'),Jt=n(89583),Qt=n(59854),Xt=n.n(Qt),en=n(23279),tn=n.n(en),nn=n(92228),rn=n.n(nn);const an=(0,B.default)(Re)`
  && {
    padding: 0;
  }
`,on=B.default.div`
  display: flex;
  alignitems: baseline;
  min-width: 0;
  ${({theme:{spacings:e}})=>B.css`
    padding: ${e.s1} 0;
  `}
`,ln=B.default.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 75%;
  ${({theme:{spacings:e}})=>B.css`
    padding-right: ${e.s2};
  `}
`,un=B.default.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 25%;
`,sn=B.default.div`
  display: flex;
`;var cn=n(63341),dn=[{key:1,hsnCode:998311,rate:"18%",description:"Management consulting and management services including financial, strategic, human resources, marketing, operations and supply chain management."},{key:2,hsnCode:998312,rate:"18%",description:"Business consulting services including pubic relations services."},{key:3,hsnCode:998313,rate:"18%",description:"Information technology (IT) consulting and support services."},{key:4,hsnCode:998314,rate:"18%",description:"Information technology (IT) design and development services."},{key:5,hsnCode:998315,rate:"18%",description:"Hosting and information technology (IT) infrastructure provisioning services."},{key:6,hsnCode:998316,rate:"18%",description:"IT infrastructure and network management services."},{key:7,hsnCode:998319,rate:"18%",description:"Other information technology services n.e.c ."},{key:8,hsnCode:9983,rate:"18%",description:"Professional, technical and business services."}];const mn=B.default.div`
  background-color: #fff;
  margin-bottom: 12px;
  padding: 24px;
  display: grid;
  grid-gap: 10px;
  grid-auto-flow: column;
  grid-template-columns: 16% 8% auto 25%;
  ${({theme:{colors:e,radii:t,breakpoints:n,spacings:r},selected:a})=>B.css`
    border-radius: ${t.lg};
    border: solid 1px ${e.neutral[3]};
    ${a&&B.css`
      border: solid 1px ${e.secondary[2]};
    `}
    @media ( max-width: ${n[0]}) {
      display: block;
      padding: ${r.s2};
    }
  `}
`,pn=B.default.div`
  display: grid;
  grid-gap: 10px;
  grid-auto-flow: column;
  grid-template-columns: 16% 8% auto 25%;
  padding: 26px 52px 16px 48px;
  ${({theme:{breakpoints:e}})=>B.css`
    @media (max-width: ${e[0]}) {
      display: none;
    }
    @media (max-width: ${e[1]}) {
      padding: 26px 24px 16px 24px;
    }
  `}
`,fn=(0,B.default)(M.Typography)`
  && {
    display: none;
    ${({theme:{breakpoints:e}})=>B.css`
      @media (max-width: ${e[0]}) {
        display: block;
      }
    `}
  }
`;var hn=e=>{const{selectedHSN:t,onOk:n,onCancel:r,open:a}=e,[i,{set:o,reset:l}]=(0,cn.Z)(dn);return N.createElement(M.Modal,{open:a,width:796,onCancel:r,bodyStyle:{padding:30,maxHeight:594},footer:null,maskClosable:!1},N.createElement(M.Typography,{size:"h4"},"HSN/SAC List"),N.createElement(D.kC,{mt:16,justifyContent:"space-between",alignItems:"center"},N.createElement(D.xu,null,N.createElement(M.Typography,{variant:"none"},"Select HSN/SAC to apply")),N.createElement(D.xu,{width:226},N.createElement(M.Input,{placeholder:"Search HSN",outlined:!0,onChange:e=>{e.target.value?o(dn.filter((({hsnCode:t,description:n})=>t.toString().includes(e.target.value)||n.includes(e.target.value)))):l()}}))),N.createElement(pn,null,N.createElement(D.xu,null,N.createElement(M.Typography,{bold:!0,variant:"none"},"HSN/SAC")),N.createElement(D.xu,null,N.createElement(M.Typography,{bold:!0,variant:"none"},"Rate")),N.createElement(D.xu,{width:1},N.createElement(M.Typography,{bold:!0,variant:"none"},"Description")),N.createElement(D.xu,{textAlign:"right",pr:"24px"},N.createElement(M.Typography,{bold:!0,variant:"none"},"Select"))),N.createElement(D.kC,{backgroundColor:"#f7faff",py:["8px","26px"],pr:["8px","28px"],pl:["8px","24px"],overflow:"auto",maxHeight:[240,380],flexDirection:"column"},i.map((({key:e,hsnCode:r,rate:a,description:i})=>{const o=r===t?"secondary":"neutral";return N.createElement(mn,{key:e,selected:r===t},N.createElement(D.xu,null,N.createElement(fn,{bold:!0,variant:"none"},"HSN/SAC:"),N.createElement(M.Typography,null,r)),N.createElement(D.xu,null,N.createElement(fn,{bold:!0,variant:"none"},"Rate:"),N.createElement(M.Typography,null,a)),N.createElement(D.xu,null,N.createElement(M.Typography,{variant:"neutral"},i)),N.createElement(D.xu,{textAlign:"right"},N.createElement(M.Button,{variant:o,onClick:()=>n(r)},r===t?"Selected":"Select")))}))))};const gn=(e,t,n)=>{const r=h(t,n).find((t=>t.key===e));return{formula:null===r||void 0===r?void 0:r.formula,systemLabel:null===r||void 0===r?void 0:r.label}},yn=({quantity:e,rate:t,discount:n},r)=>{const{discountType:a,amount:i=0}=n||{},l=e*t,u=a===o.FIXEDAMOUNT?i:l*i/100;return r?l-u:l},vn=(e,t,n)=>((e,t)=>e/(t||1))(((e,{discount:t,gstRate:n=0},r)=>{const{discountType:a,amount:i=0}=t||{};let l=100*e/(n+100);return r&&(a===o.FIXEDAMOUNT?l+=i:l=100*l/(100-i)),l})(e,t,n),t.quantity);function bn(e){const{invoice:t,discountEnabled:n=!1,locale:r,datasource:i=[]}=e,{invoiceType:o,currency:s,taxType:c,igst:d,subUnitLength:m,taxName:p}=t,f=o===u.INVOICE,h=c===a.GLOBAL,g={name:{type:l.TEXT,visible:!0,placeholder:"Item name (Required)",required:!0,datasource:i,labelKey:"name",valueKey:"name"},hsn:{type:l.TEXT,visible:f&&!h,placeholder:"#"},gstRate:{type:l.NUMBER,visible:f,rightIcon:"%"},quantity:{type:l.NUMBER,visible:!0,required:!0},rate:{type:l.NUMBER,visible:!0,required:!0,leftIcon:Yt[s].symbolNative,locale:r},discount:{visible:n},amount:{computed:!0,editable:!0,visible:!0,bold:!f,getValue:e=>(0,pt.formateCurrency)(yn(e,n),s,r,m),getNumberValue:e=>yn(e,n),size:f?"small":"span",leftIcon:Yt[s].symbolNative,locale:r,onInputChange:(e,t)=>{const{target:n}=e,{value:r}=n;return r?+r/((null===t||void 0===t?void 0:t.quantity)||1):0}},sgst:{computed:!0,visible:f&&!d&&!h,getValue:e=>{const{gstRate:t=0}=e;return(0,pt.formateCurrency)(yn(e,n)*t/200,s,r,m)},size:"small"},cgst:{computed:!0,visible:f&&!d&&!h,getValue:e=>{const{gstRate:t=0}=e;return(0,pt.formateCurrency)(yn(e,n)*t/200,s,r,m)},size:"small"},igst:{computed:!0,visible:f&&(d||h),getValue:e=>{const{gstRate:t=0}=e;return(0,pt.formateCurrency)(yn(e,n)*t/100,s,r,m)},size:"small"},total:{computed:!0,editable:!0,visible:f,bold:!0,getValue:e=>{const{gstRate:t=0}=e,a=yn(e,n),i=f?a*t/100:0;return(0,pt.formateCurrency)(a+i,s,r,m)},getNumberValue:e=>{const{gstRate:t=0}=e,r=yn(e,n);return r+(f?r*t/100:0)},size:"span",locale:r,leftIcon:Yt[s].symbolNative,onInputChange:(e,t)=>{const{target:r}=e,{value:a}=r;return a?vn(+a,t,n):0}}};return Object.keys(g).reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:Object.assign(Object.assign({},e[t]),gn(t,c,p))})),g)}var En=e=>{var t;const{defaultTaxRate:n,privateS3Props:r,business:a,premium:i,requestPremium:s,manageInventory:c,findInventories:d}=e,{values:m,setFieldValue:f}=(0,Te.u6)(),h=(0,N.useRef)(),[g,y]=(0,ie.Z)({open:!1,index:-1}),{columns:v,items:b,discountEnabled:E,currency:S,locale:C,invoiceType:$}=m,[F,P]=(0,N.useState)([]),x=bn({invoice:m,discountEnabled:E,locale:C,datasource:F}),k=$===u.INVOICE,T=(0,N.useCallback)((e=>{var t;return{name:"",quantity:e?0:1,rate:e?0:1,discount:{discountType:o.PERCENTAGE,amount:0},amount:0,subTotal:0,total:0,custom:{},gstRate:e?0:(null===(t=b[0])||void 0===t?void 0:t.gstRate)||n,igst:0,cgst:0,sgst:0,group:e,isStockManaged:c}}),[null===(t=b[0])||void 0===t?void 0:t.gstRate,n,c]),w=(0,N.useCallback)(tn()(((e,t)=>(0,p.mG)(void 0,void 0,void 0,(function*(){if(d){const e=yield d(t);P(e)}return Promise.resolve()}))),600),[d]),L=(0,N.useCallback)((e=>(t,n)=>{const{sellingPrice:r,gstRate:a,hsn:i,currencyRates:o={},group:l=!1,description:u,isStockManaged:s=!1,inventory:c,costPrice:d}=n,{[S]:m=r||d}=o;f(`items[${e}].name`,t,!1),l?(f(`items[${e}].rate`,0,!1),f(`items[${e}].quantity`,0,!1),f(`items[${e}].gstRate`,0,!1),f(`items[${e}].hsn`,null,!1)):(f(`items[${e}].rate`,m,!1),b[e].quantity||f(`items[${e}].quantity`,1,!1),a&&f(`items[${e}].gstRate`,a,!1),i&&f(`items[${e}].hsn`,i,!1),f(`items[${e}].isStockManaged`,s,!1),f(`items[${e}].inventory`,c,!1),u&&(f(`items[${e}].description`,u,!1),f(`items[${e}].showDescription`,!0,!1)))}),[b,S]),A=2*v.filter((e=>{const{key:t,isHidden:n}=e,r=x[t]||{},{visible:a=!0}=r;return!(n||!a)})).length+(!E&&k?4:5);return N.createElement(D.kC,{my:"16px",flexDirection:"column",className:"invoice-lineitems-wrapper"},N.createElement(H,{cols:A},v.map((e=>{const{key:t,isHidden:n,label:r,private:a}=e,i=x[t]||{},{visible:o=!0}=i;return n||!o?N.createElement(N.Fragment,null):N.createElement(W,{variant:"white",key:t,gridKey:t,isTaxInvoice:k},r,a&&N.createElement(M.Typography,{as:"small",inline:!0,variant:"error"},"*"))})),N.createElement(W,{gridKey:"action"})),N.createElement(Te.F2,{name:"items",render:({push:e,remove:t,swap:n})=>N.createElement("div",null,b.map(((e,a)=>N.createElement(V,{key:`line_item_${a}`,cols:A,isGroup:e.group},N.createElement(K,null,N.createElement(M.Typography,{variant:"neutral"},a+1,"."),N.createElement(M.Button,{anchor:!0,variant:"secondary",onClick:()=>t(a),"aria-label":"Remove Item"},N.createElement(ke.x8P,{color:"#733dd9"}))),v.map((t=>{const{key:n,system:r=!1,dataType:i,isHidden:u,label:s,private:c}=t,d=x[n]||{},{computed:h=!1,editable:g=!1,visible:v=!0,getValue:b=le(),getNumberValue:E=le(),bold:$=!1,size:P,onInputChange:T}=d,R=(0,p._T)(d,["computed","editable","visible","getValue","getNumberValue","bold","size","onInputChange"]),D={};if(e.group&&(D.placeholder="Group name (Required)"),i===l.CURRENCY&&(D.leftIcon=Yt[m.currency].symbolNative,D.locale=C),"hsn"===n&&(D.rightIcon=N.createElement(M.Button,{anchor:!0,variant:"neutral",onClick:()=>y({open:!0,index:a,selected:e.hsn})},N.createElement(Jt.U41,{size:10}))),e.group&&"name"!==n)return N.createElement(N.Fragment,null);if(u)return N.createElement(N.Fragment,null);if(!v)return N.createElement(N.Fragment,null);let I=null;return"amount"===n?I="editamount":"total"===n&&(I="edittotal"),N.createElement(j,{key:`line_item_${a}_${n}`,gridKey:n,computed:h,isTaxInvoice:k,isGroup:e.group,cols:A},N.createElement(X,{variant:"none",gridKey:n,isGroup:e.group},s,c&&N.createElement(M.Typography,{as:"small",inline:!0,variant:"error"},"*")),r&&N.createElement(N.Fragment,null,"name"===n&&N.createElement(M.Form.Autocomplete,Object.assign({name:`items[${a}].name`,datasource:F.filter((t=>!!e.group===!!t.group))},R,D,{onSelect:L(a),onChange:(t,n)=>{e.group||w(t,n)},optionsStyle:{whiteSpace:"break-spaces"},render:e=>{const{currencyRates:t={}}=e,{[S]:n=e.sellingPrice||e.costPrice}=t;return N.createElement(on,null,N.createElement(ln,null,N.createElement(M.Typography,null,e.name," "),N.createElement(sn,null,e.sku&&N.createElement(N.Fragment,null,N.createElement(M.Typography,{variant:"none",size:"smaller"},`sku: ${e.sku}`),N.createElement(rn(),null),N.createElement(rn(),null),N.createElement(rn(),null)),N.createElement(M.Typography,{variant:"none",size:"smaller"},`Rate: ${n}`))),e.isStockManaged&&N.createElement(un,null,e.stockInHand&&e.stockInHand>0?N.createElement(N.Fragment,null,N.createElement(M.Typography,{size:"small"},"Stock On Hand"),N.createElement(M.Typography,{variant:"success",size:"small"},e.stockInHand)):N.createElement(M.Typography,{variant:"error"},"Out of stock")))}})),"discount"===n&&N.createElement(N.Fragment,null,N.createElement(M.Form.InputNumber,{name:`items[${a}].discount.amount`}),N.createElement(M.Form.Select,{name:`items[${a}].discount.discountType`,options:[{label:Yt[S].symbolNative,value:o.FIXEDAMOUNT},{label:"%",value:o.PERCENTAGE}],isSearchable:!1})),"hsn"===n&&N.createElement(M.Form.Input,Object.assign({name:`items[${a}].${n}`},D,R)),h&&(!I||!e[I])&&N.createElement(Z,{variant:"neutral",bold:$,size:P,ellipsis:!0,isEditable:g,onClick:()=>{g&&f(`items[${a}].edit${n}`,!0,!1)}},b(e)),h&&I&&e[I]&&N.createElement(M.InputNumber,Object.assign({value:E(e),onChange:tn()((t=>{if(T){const n=T(t,e);f(`items[${a}].rate`,n,!1)}}),600)},D,R)),!["name","hsn","discount"].includes(n)&&!h&&N.createElement(N.Fragment,null,i===l.NUMBER&&N.createElement(M.Form.InputNumber,Object.assign({name:`items[${a}].${n}`,"aria-label":n},D,R)),i!==l.NUMBER&&N.createElement(M.Form.Input,Object.assign({name:`items[${a}].${n}`},R)))),!r&&N.createElement(N.Fragment,null,i===l.DATE&&N.createElement(M.Form.DatePicker,{name:`items[${a}].custom.${n}`,dateFormat:"MMMM dd, yyyy"}),[l.CURRENCY,l.NUMBER].includes(i)&&N.createElement(M.Form.InputNumber,Object.assign({name:`items[${a}].custom.${n}`},D)),i===l.TEXT&&N.createElement(M.Form.Input,{name:`items[${a}].custom.${n}`})))})),N.createElement(G,{gridKey:"action"},N.createElement(M.Button,{anchor:!0,variant:"secondary",onClick:()=>t(a),"aria-label":"Remove Item"},N.createElement(ke.x8P,{color:"#733dd9"}))),!e.group&&N.createElement(N.Fragment,null,N.createElement(Y,{gridKey:"description",cols:Xt()(.7*A,0),show:e.showDescription},!e.showDescription&&N.createElement(U,{onClick:()=>{f(`items[${a}].showDescription`,!0,!1)},"aria-label":"Add Description"},N.createElement(ke.Ct0,{size:16})," Add Description"),N.createElement("div",null,N.createElement(X,{variant:"none",gridKey:"description"},"Description"),N.createElement(M.Form.Textarea,{name:`items[${a}].description`,placeholder:"Description",rows:1}))),N.createElement(J,{gridKey:"images",cols:b.length>1?A-3:A-2,show:e.showImage},!e.showImage&&N.createElement(U,{onClick:()=>{f(`items[${a}].showImage`,!0,!1)},"aria-label":"Add Image"},N.createElement(ke.Eep,{size:16})," Add Image"),N.createElement("div",null,N.createElement(M.Form.Storage,{name:`items[${a}].images`,multiple:!0,uploadText:"Upload Image",uploadParams:r,accept:"image/*"})))),b.length>1&&N.createElement(Q,{cols:A,gridKey:"Swap"},a!==b.length-1&&N.createElement(re,{onClick:()=>n(a,a+1),shape:"circle","aria-label":"Move Down",anchor:!0,title:"Move Down",variant:"neutral"},N.createElement(ke.K5e,{size:20})),0!==a&&N.createElement(re,{onClick:()=>n(a,a-1),shape:"circle","aria-label":"Move Up",anchor:!0,title:"Move Up",variant:"neutral"},N.createElement(ke.a2Z,{size:20})))))),N.createElement(D.kC,null,N.createElement(an,{variant:"neutral",onClick:()=>e(T(!1)),fullWidth:!0,nature:"dashed",dark:!0,size:"large"},N.createElement(ke.Ct0,{size:16,color:"#733dd9"}),N.createElement(M.Typography,{variant:"none"},"Add New Line")),a&&N.createElement(an,{variant:"neutral",onClick:()=>{i?e(T(!0)):h.current&&h.current.open()},fullWidth:!0,nature:"dashed",dark:!0,size:"large"},N.createElement(ke.Ct0,{size:16,color:"#733dd9"}),N.createElement(M.Typography,{variant:"none"},"Add New Group"))))}),N.createElement(hn,{open:g.open,selectedHSN:g.selected,onOk:e=>{f(`items[${g.index}].hsn`,e,!1),y({open:!1,index:-1})},onCancel:()=>y({open:!1,index:-1})}),N.createElement(qe,{ref:h,requestPremium:()=>s("Line Item Grouping")}))},Sn=n(63750);var Cn=e=>{const{items:t=[],additionalCharges:n=[],invoiceType:r,discountEnabled:a}=e,i=r===u.INVOICE,l=t.reduce((({subTotal:e,amount:t,igst:n,sgst:r,cgst:l,total:u,discount:s},{quantity:c,rate:d,gstRate:m=0,discount:{discountType:p,amount:f=0}={}})=>{const h=c*d,g=p===o.FIXEDAMOUNT?f:h*f/100,y=a?h-g:h,v=i?y*m/100:0,b=i?y*m/200:0;return{subTotal:e+h,amount:t+y,igst:n+v,sgst:r+(v-b),cgst:l+b,total:u+(y+v),discount:s+g}}),{subTotal:0,amount:0,igst:0,sgst:0,cgst:0,total:0,discount:0}),s=n.reduce(((e,t)=>{const{amount:n=0,amountType:r=o.FIXEDAMOUNT,multiplier:a=1}=t;return e+(r===o.PERCENTAGE?l.total*n*a/100:n*a)}),0);return Object.assign(Object.assign({},l),{total:l.total+s})},$n=n(17042);const Fn=(0,B.default)(D.kC)`
  && {
    width: max-content;
    white-space: pre;
  }
`,Pn=(B.default.div`
  padding-right: 32px;
  display: flex;
  justify-content: flex-end;
  ${({theme:{spacings:e}})=>B.css`
    margin-top: ${e.s1};
  `}
`,(0,B.default)(D.kC)`
  && {
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type='number'] {
      -moz-appearance: textfield;
    }
  }
`),xn=B.default.div`
  width: 68px;
  min-width: 0;
`;var kn=e=>{const{businessCurrency:t,total:n}=e,{values:r,setFieldValue:a}=(0,Te.u6)(),[i,o]=(0,ae.Z)(!1),{currency:l,conversionRates:u}=r,[s,c]=(0,N.useState)();if(!t||t===l)return N.createElement(N.Fragment,null);const{[t]:d=0}=u||{};return N.createElement(N.Fragment,null,N.createElement(D.kC,{width:1,p:"16px",flexDirection:"column",backgroundColor:"#f7faff"},N.createElement(M.Typography,{variant:"none"},"For internal accounting purpose"),N.createElement(D.kC,{justifyContent:"space-between",my:"16px",flexDirection:["column","row"]},N.createElement(M.Typography,{variant:"none",size:"h5"},"Amount total in your business's currency"),N.createElement(D.xu,{width:[1,.5]},N.createElement(M.InputNumber,{required:!0,leftIcon:$n[t],value:n*d,onChange:({target:{value:e}})=>{"number"===typeof e&&c(e),a(`conversionRates.${t}`,+e/n)}}),0===s&&N.createElement(M.Typography,{variant:"error"},"Value must be greater than zero"))),N.createElement(D.kC,{mt:"20px",justifyContent:"space-between"},N.createElement(M.Typography,{variant:"none",bold:!0},"Applied Exchange Rate"),i&&N.createElement(D.xu,{width:[1,.5]},N.createElement(M.InputNumber,{leftIcon:N.createElement(Fn,null,"1 ",l," ="),rightIcon:t,value:d,onChange:({target:{value:e}})=>{"number"===typeof e&&c(e),a(`conversionRates.${t}`,+e)}}),0===s&&N.createElement(M.Typography,{variant:"error"},"Value must be greater than zero")),!i&&N.createElement(M.Typography,{variant:"none",bold:!0},d>1?`1 ${l} = ${Xt()(d,4)} ${t}`:`1 ${t} = ${d?Xt()(1/d,4):0} ${l}`)),N.createElement(D.kC,{mt:"8px",justifyContent:"flex-end"},N.createElement(M.Button,{size:"small",variant:i?"primary":"neutral",onClick:o},i?"Update":"Update Exchange Rate"))))};const Tn=({onClick:e})=>N.createElement(ne,{anchor:!0,variant:"secondary",onClick:e},N.createElement(ke.x8P,{color:"#733dd9"})),wn=(e,t)=>N.createElement(D.kC,{justifyContent:"space-between",my:"8px",pr:"32px"},N.createElement(M.Typography,{variant:"neutral",size:"h5"},e),N.createElement(M.Typography,{variant:"neutral",size:"h5",bold:!0},t));var Ln=e=>{const{businessCurrency:t}=e,{values:n,setFieldValue:r,handleChange:l}=(0,Te.u6)(),{currency:s,discountEnabled:c,invoiceType:d,additionalCharges:m=[],extraTotalFields:p=[],locale:f,discount:h,items:g,taxType:y,columns:v,hideTotals:b,billType:E,igst:S,subUnitLength:C}=n,[{subTotal:$,total:F,igst:P,cgst:x,sgst:k,amount:T},w]=(0,ie.Z)({subTotal:0,total:0,igst:0,cgst:0,sgst:0,amount:0,discount:0}),L=d===u.INVOICE,A=c&&$>T||L,R=["en-IN","hi-IN"].includes(f)?"enIndian":"en";(0,N.useEffect)((()=>w(Cn(n))),[g,m,c,d]);const I=(0,N.useCallback)(((e=o.PERCENTAGE,t=0)=>{e===o.PERCENTAGE&&t>100?r("discount.discountType",o.FIXEDAMOUNT,!1):g.forEach(((n,a)=>{if(e===o.PERCENTAGE)r(`items[${a}].discount`,{discountType:e,amount:t},!1);else{const n={discountType:e,amount:0};n.amount=Xt()(t/g.length,2),r(`items[${a}].discount`,n,!1)}}))}),[g]),B=(0,N.useCallback)((()=>{r("discountEnabled",!1,!1)}),[]),q=y===a.GLOBAL,O=(0,N.useMemo)((()=>v.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t.key]:t.label})),{discount:"Discount",amount:"Amount",sgst:"SGST",cgst:"CGST",igst:"IGST",total:"Total"})),[v]);return N.createElement(Pn,{width:[1,.36],flexDirection:"column"},c&&N.createElement(N.Fragment,null,N.createElement(D.kC,{justifyContent:"space-between",my:"8px",width:1},N.createElement(M.Form.InputNumber,{name:"discount.amount",label:O.discount,labelWidth:2/3,labelProps:{size:"h5",variant:"neutral"},direction:"row",locale:(null===h||void 0===h?void 0:h.discountType)===o.FIXEDAMOUNT?f:void 0,onChange:({target:e})=>I(null===h||void 0===h?void 0:h.discountType,+e.value)}),N.createElement(xn,null,N.createElement(M.Form.Select,{name:"discount.discountType",options:[{label:Yt[s].symbolNative,value:o.FIXEDAMOUNT},{label:"%",value:o.PERCENTAGE}],isSearchable:!1,onChange:e=>I(e.value,null===h||void 0===h?void 0:h.amount)})),N.createElement(Tn,{onClick:B})),$>T&&wn("Sub Total",(0,pt.formateCurrency)($,s,f,C))),!b&&N.createElement(N.Fragment,null,A&&wn(O.amount,(0,pt.formateCurrency)(T,s,f,C)),!q&&!S&&L&&N.createElement(N.Fragment,null,wn(O.sgst,(0,pt.formateCurrency)(k,s,f,C)),wn(O.cgst,(0,pt.formateCurrency)(x,s,f,C))),L&&(S||q)&&wn(O.igst,(0,pt.formateCurrency)(P,s,f,C))),N.createElement(Te.F2,{name:"additionalCharges",render:({push:e,remove:t,unshift:n})=>N.createElement("div",null,!b&&m.map(((e,n)=>N.createElement(D.kC,{key:n,my:"8px",width:1},N.createElement(M.Form.InputNumber,{name:`additionalCharges[${n}].amount`,label:e.label,labelName:`additionalCharges[${n}].label`,editableLabel:!0,onLabelChange:l,direction:"row",labelProps:{size:"h5",variant:"neutral"},labelWidth:2/3,locale:(null===e||void 0===e?void 0:e.amountType)===o.FIXEDAMOUNT?f:void 0}),N.createElement(xn,null,N.createElement(M.Form.Select,{name:`additionalCharges[${n}].amountType`,options:[{label:Yt[s].symbolNative,value:o.FIXEDAMOUNT},{label:"%",value:o.PERCENTAGE}],isSearchable:!1})),N.createElement(Tn,{onClick:()=>t(n)})))),!c&&N.createElement(D.xu,{my:"16px"},N.createElement(Re,{variant:"neutral",nature:"dashed",onClick:()=>r("discountEnabled",!0,!1),anchor:!0},N.createElement(ke.N4p,{size:16}),"Add Item Discount")),!b&&N.createElement(D.xu,{my:"16px"},N.createElement(Re,{variant:"neutral",onClick:()=>{n({label:"Reductions",amount:0,multiplier:-1,amountType:o.FIXEDAMOUNT})},anchor:!0},N.createElement(ke.Ct0,{size:16}),"Add Discount / Reductions")),(E===i.QUOTATION||E===i.DELIVERYCHALLAN)&&N.createElement(D.xu,{my:b?0:"16px"},N.createElement(Re,{variant:"neutral",nature:"dashed",onClick:()=>r("hideTotals",!b,!1),anchor:!0},N.createElement(ke.eEV,{color:"#5723ba",size:16}),b?"Show":"Hide"," Totals")),!b&&N.createElement(D.xu,{my:"16px"},N.createElement(Re,{variant:"neutral",onClick:()=>{e({label:"Extra Charges",amount:0,amountType:o.FIXEDAMOUNT,multiplier:1})},anchor:!0},N.createElement(ke.Ct0,{size:16}),"Add Additional Charges")),!b&&!Number.isInteger(F)&&N.createElement(D.xu,{my:"16px"},N.createElement(Re,{variant:"neutral",onClick:()=>{e({label:"Round on",amount:Math.ceil(F)-F,amountType:o.FIXEDAMOUNT})},anchor:!0},N.createElement(Sn.xr6,{size:16,color:"#733dd9"}),"Round Up",N.createElement(rn(),{count:6})),N.createElement(Re,{variant:"neutral",onClick:()=>{e({label:"Round off",amount:F-Math.floor(F),multiplier:-1,amountType:o.FIXEDAMOUNT})},anchor:!0},N.createElement(Sn.zjw,{size:16,color:"#733dd9"}),"Round Down")))}),!b&&N.createElement(N.Fragment,null,N.createElement(ee,null),((e,t,n)=>N.createElement(D.kC,{justifyContent:"space-between",my:"16px",pr:"32px"},N.createElement(M.Typography,{variant:"neutral",size:"h3"},`${e} (${n})`),N.createElement(M.Typography,{variant:"neutral",size:"h3",bold:!0},t)))(O.total,(0,pt.formateCurrency)(F,s,f,C),s),N.createElement(ee,null),(!C||Yt[s].decimalDigits>=C)&&N.createElement(N.Fragment,null,(_=(0,pt.amountInWords)(F,s,R),N.createElement(D.kC,{flexDirection:"column",my:"16px"},N.createElement(D.xu,{mb:"8px"},N.createElement(M.Typography,{variant:"none",size:"h5"},"Total (in words)")),N.createElement(M.Typography,{variant:"none",size:"h5",style:{textTransform:"capitalize"},bold:!0},_))),N.createElement(ee,null)),N.createElement(Te.F2,{name:"extraTotalFields",render:({push:e,remove:t})=>N.createElement("div",null,p.map(((e,n)=>N.createElement(D.kC,{key:n,mt:"8px"},N.createElement(M.Form.Input,{name:`extraTotalFields[${n}].value`,placeholder:"Value",label:e.label,labelName:`extraTotalFields[${n}].label`,editableLabel:!0,labelPlaceHolder:"Field Name "+(e.value?"(Required)":""),onLabelChange:l,direction:"row",labelProps:{size:"h5",variant:"neutral"},labelWidth:2/3,align:"right"}),N.createElement(Tn,{onClick:()=>t(n)})))),N.createElement(D.xu,{my:"16px"},N.createElement(Re,{variant:"neutral",onClick:()=>{e({label:"",value:null})},anchor:!0},N.createElement(ke.Ct0,{size:16}),"Add More Fields")))}),N.createElement(kn,{businessCurrency:t,total:F})));var _},An=JSON.parse('{"NONE":"NONE","GST":"GST (India)","VAT":"VAT","PPN":"PPN","SST":"SST","HST":"HST","TAX":"TAX"}');const Rn=B.default.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`,Nn=B.default.div`
  ${({theme:{spacings:e}})=>B.css`
    margin: ${e.s2} 0;
  `}
`,Dn=B.default.div`
  ${({theme:{spacings:e}})=>B.css`
    margin: ${e.s2} ${e.s2} ${e.s2} 0;
    min-width: 300px;
  `}
`,In=(0,B.default)(D.kC)`
  && {
    ${({theme:{spacings:e,screens:t}})=>B.css`
      margin: ${e.s2} 0;
      @media screen and (${t.lte.xxs}) {
        width: 100%;
        margin-bottom: 0;
      }
      > div {
        margin-left: ${e.s4};
      }
      >div: first-child {
        margin-left: 0;
      }
      @media screen and (${t.lte.s2}) {
        > div {
          margin-left: 0;
          margin-bottom: ${e.s4};
        }
        >div: last-child {
          margin-bottom: 0;
        }
      }
    `}
  }
`,Mn=(0,B.default)(M.Button)`
  && {
    ${({theme:{spacings:e}})=>B.css`
      svg {
        margin-right: ${e.s2};
      }
    `}
  }
`;var Bn=e=>{const{open:t,onCancel:n,onOk:r}=e,{values:i}=(0,Te.u6)(),{invoiceType:o,taxName:l,taxType:s}=i,[c,d]=(0,N.useState)(l),[m,p]=(0,ae.Z)(!1),[f,h]=(0,N.useState)(s);(0,N.useEffect)((()=>{o===u.INVOICE&&h(s)}),[o]),(0,N.useEffect)((()=>{d(l),"GST"===l&&h(a.INDIA),"NONE"===l&&h("NONE"),["GST","NONE"].includes(l)||h(a.GLOBAL)}),[l]);const g=(0,N.useMemo)((()=>{const e=Object.assign({},An);return e[l]||(e[l]=l),Object.entries(e).map((([e,t])=>({label:t,value:e})))}),[l]);return N.createElement(M.Modal,{header:N.createElement(M.Typography,{size:"h5"},"Choose Taxation"),onOk:()=>{r(f,c),p(!1)},onCancel:()=>{n(),p(!1)},okText:"Save",open:t,maskClosable:!1,centered:!0,width:400},N.createElement(M.Radio.Group,{value:c,onChange:({target:{value:e}})=>(d(e),p(!1),h("GST"===e?a.INDIA:"NONE"===e?"NONE":a.GLOBAL)),options:g}),!m&&N.createElement(Mn,{variant:"neutral",anchor:!0,onClick:()=>{p(!0),d("Tax"),h(a.GLOBAL)}},N.createElement(ke.Ct0,{size:16,color:"#733dd9"})," Add Custom Tax"),m&&N.createElement(D.xu,{p:"12px 20px"},N.createElement(M.Input,{label:"Tax Name",value:c,onChange:({target:{value:e}})=>{d(e)},placeholder:"Enter Tax name",outlined:!0,description:"This will reflect as Tax Name in relevant places",status:c?"none":"warn",message:!c&&"By default, Tax will be used as the tax name."})))};const qn=B.default.div`
  > div {
    display: block;
  }
`,{Confirm:On}=((0,B.default)(ke.kIV)`
  && {
    ${({theme:{colors:e}})=>B.css`
        vertical-align: middle;
        color: #B4C2D5;
        &: hover {
          color: ${e.neutral[7]};
        }
      }
    `}
  }
`,M.Modal),_n=(0,B.default)(H)`
  && {
    ${({theme:{screens:e}})=>B.css`
      @media screen and (${e.lte.sm}) {
        display: none;
      }
    `}
  }
`,zn=Object.entries(de).map((([e,t])=>({label:t,value:e}))),Hn=({provided:e,item:t,index:n,itemProps:r,isDragDisabled:a})=>{const{invoiceColumnProps:i,updateAt:o,removeAt:l,business:u,premium:s,onPrivateColumn:c}=r||{},d=i[t.key];if(!(!t.system||(null===d||void 0===d?void 0:d.visible)))return N.createElement("div",Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps));const m=t.label?t.system&&(null===d||void 0===d?void 0:d.systemLabel)!==t.label&&`Label: ${null===d||void 0===d?void 0:d.systemLabel}`:"No column heading will be visible in the invoice";return N.createElement(D.kC,Object.assign({ref:e.innerRef},e.draggableProps,{mb:"30px",width:1}),N.createElement(D.kC,{width:[.1,.05],pt:"10px",alignSelf:"flex-start"},!a&&N.createElement(M.Button,Object.assign({anchor:!0,variant:"neutral"},e.dragHandleProps),N.createElement(Jt.wNu,null))),N.createElement(D.xu,{width:[.9,.95]},N.createElement(D.kC,{width:1,flexDirection:["column","row"]},N.createElement(D.xu,{width:[1,.5],mr:[0,"10px"],mb:["10px",0]},N.createElement(M.Input,{value:t.label,outlined:!0,onChange:e=>{o(n,Object.assign(Object.assign({},t),{label:e.target.value}))},status:t.label?"none":"warn",message:m,placeholder:(null===d||void 0===d?void 0:d.systemLabel)||"Column Name"})),N.createElement(D.xu,{width:[1,.3],mr:[0,"20px"],mb:["10px",0],pt:(null===d||void 0===d?void 0:d.formula)?"12px":0},(null===d||void 0===d?void 0:d.formula)&&N.createElement(M.Typography,null,d.formula),!(null===d||void 0===d?void 0:d.formula)&&N.createElement(M.Select,{outlined:!0,value:{label:de[t.dataType],value:t.dataType},onChange:e=>{o(n,Object.assign(Object.assign({},t),{dataType:null===e||void 0===e?void 0:e.value}))},options:zn,isDisabled:t.system})),N.createElement(Ne,{width:[1,.15],justifyContent:["flex-start","space-between"]},"name"!==t.key&&N.createElement(M.Button,{anchor:!0,variant:"neutral",onClick:()=>{o(n,Object.assign(Object.assign({},t),{isHidden:!t.isHidden}))},label:t.isHidden?"Unhide":"Hide"},t.isHidden?N.createElement(Jt.tgn,null):N.createElement(Jt.dSq,null)),!t.system&&N.createElement(M.Button,{anchor:!0,variant:"neutral",onClick:()=>l(n),label:"Remove"},N.createElement(Jt.AMf,null)))),!t.system&&u&&N.createElement(M.Checkbox,{label:"Make private?",checked:t.private,onChange:e=>{s?o(n,Object.assign(Object.assign({},t),{private:e.target.checked})):(o(n,Object.assign(Object.assign({},t),{private:!1})),c())}})))};var Wn=e=>{const{business:t,premium:n,requestPremium:r}=e,{values:a,setFieldValue:i}=(0,Te.u6)(),o=(0,N.useRef)(),{columns:s,discountEnabled:c,locale:d,invoiceType:m}=a,[p,f]=(0,N.useState)(s),[h,g]=(0,ae.Z)(!1),[y,v]=(0,ie.Z)({open:!1,title:"",okText:"",cancelText:"",onOk:()=>{},onCancel:()=>{}}),b=m===u.INVOICE;(0,N.useEffect)((()=>{h&&f(s)}),[h]);const E=bn({invoice:a,discountEnabled:c,locale:d}),S=(0,N.useMemo)((()=>2*p.filter((e=>{const{key:t,isHidden:n}=e,r=E[t]||{},{visible:a=!0}=r;return!(n||!a)})).length+(!c&&b?4:5)),[p,E,c,b]),C=(0,N.useCallback)((({children:e,provided:t})=>N.createElement(D.xu,Object.assign({ref:t.innerRef},t.droppableProps,{width:1}),N.createElement(D.kC,{width:1,mb:"20px"},N.createElement(D.xu,{width:.05}),N.createElement(D.kC,{width:.95},N.createElement(D.xu,{width:.5},N.createElement(M.Typography,{variant:"none"},"Column Name")),N.createElement(D.xu,{width:.3,display:["none","block"]},N.createElement(M.Typography,{variant:"none"},"Column Type")))),e)),[]);return N.createElement(N.Fragment,null,N.createElement(qn,null,N.createElement(M.Tooltip,{content:"Add new fields or Edit name of fields in the invoice. Use this to add fields like units, hours, service/product specification etc.",placement:"top",fontSize:"14px"},N.createElement(Re,{variant:"neutral",className:"invoice-columns-wrapper",onClick:()=>g(!0),fullWidth:!0,dark:!0,size:"large",padding:"8px"},N.createElement(Jt.Szk,{color:"#733dd9"}),N.createElement(M.Typography,null,"Add/Rename Column")))),N.createElement(M.Modal,{open:h,onCancel:()=>v({open:!0,title:"Are you sure you want to discard the changes?",okText:"Yes. Discard.",cancelText:"No. Continue.",onOk:()=>{v({open:!1}),g(!1)},onCancel:()=>{v({open:!1})}}),onOk:()=>v({open:!0,title:"Do you want to save the changes made?",okText:"Yes. Save & Close.",cancelText:"No. Close.",onOk:()=>{i("columns",p,!1),v({open:!1}),g(!1)},onCancel:()=>{v({open:!1}),g(!1)}}),okText:"Save",width:680,header:N.createElement(D.kC,{flexDirection:"column"},N.createElement(M.Typography,{size:"h5"},"Edit Columns"),N.createElement(M.Typography,{size:"h6",variant:"subtle"},"Add new fields or Edit name of fields in the invoice. Use this to add fields like units, hours, service/product specification etc. Also, private columns are not visible to clients and are not part of pdf.")),maskClosable:!1},N.createElement(D.xu,{width:1},N.createElement(D.kC,{mb:"16px",justifyContent:"flex-end"},N.createElement(M.Button,{nature:"outlined",variant:"secondary",onClick:()=>{((e,t)=>{const n=[...p];n.splice(e,0,t),f(n)})(1,{key:Math.random().toString(36).slice(2),dataType:l.TEXT,label:"Column 1",isHidden:!1,system:!1,private:!1})}},N.createElement(Jt.EIY,null),"Add New Column")),N.createElement(M.DragAndDrop,{items:p,Item:Hn,Wrapper:C,itemProps:{invoiceColumnProps:E,updateAt:(e,t)=>{const n=[...p];n.splice(e,1,t),f(n)},removeAt:e=>{const t=[...p];t.splice(e,1),f(t)},onPrivateColumn:()=>{!n&&o.current&&o.current.open()},business:t,premium:n},onDragEnd:e=>{if(e.destination&&0!==e.destination.index){const t=[...p],[n]=t.splice(e.source.index,1);t.splice(e.destination.index,0,n),f(t)}},isDisabled:e=>"name"===e.key})),N.createElement(_n,{cols:S},p.map((e=>{const{key:t,isHidden:n,label:r,private:a}=e,i=E[t]||{},{visible:o=!0}=i;return n||!o?N.createElement(N.Fragment,null):N.createElement(W,{variant:"white",key:t,gridKey:t,isTaxInvoice:b},r,a&&N.createElement(M.Typography,{as:"small",inline:!0,variant:"error"},"*"))})),N.createElement(W,{gridKey:"action"}))),N.createElement(On,Object.assign({},y)),N.createElement(qe,{ref:o,requestPremium:()=>r("Private Columns")}))},Vn=n(39327),jn=n(58430),Gn=JSON.parse('{"af-NA":"Namibia - Afrikaans (Afrikaans)","af-ZA":"South Africa - Afrikaans (Afrikaans)","am-ET":"Ethiopia - Amharic (\u12a0\u121b\u122d\u129b)","ar-AE":"United Arab Emirates - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-BH":"Bahrain - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-DJ":"Djibouti - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-DZ":"Algeria - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-EG":"Egypt - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-ER":"Eritrea - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-IL":"Israel - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-IQ":"Iraq - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-JO":"Jordan - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-KM":"Comoros - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-KW":"Kuwait - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-LB":"Lebanon - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-LY":"Libya - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-MA":"Morocco - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-MR":"Mauritania - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-OM":"Oman - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-PS":"Palestine, State of - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-QA":"Qatar - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-SA":"Saudi Arabia - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-SD":"Sudan - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-SO":"Somalia - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-SY":"Syrian Arab Republic - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-TD":"Chad - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-TN":"Tunisia - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ar-YE":"Yemen - Arabic (\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629)","ay-BO":"Bolivia, Plurinational State of - Aymara (aymar aru)","az-AZ":"Azerbaijan - Azerbaijani (az\u0259rbaycan dili)","be-BY":"Belarus - Belarusian (\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f \u043c\u043e\u0432\u0430)","bg-BG":"Bulgaria - Bulgarian (\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a)","bi-VU":"Vanuatu - Bislama (Bislama)","bn-BD":"Bangladesh - Bengali (\u09ac\u09be\u0982\u09b2\u09be)","bs-BA":"Bosnia and Herzegovina - Bosnian (bosanski jezik)","bs-ME":"Montenegro - Bosnian (bosanski jezik)","ca-AD":"Andorra - Catalan (catal\xe0)","ca-ES":"Spain - Catalan (catal\xe0)","ch-GU":"Guam - Chamorro (Chamoru)","ch-MP":"Northern Mariana Islands - Chamorro (Chamoru)","cs-CZ":"Czech Republic - Czech (\u010de\u0161tina)","da-DK":"Denmark - Danish (dansk)","de-AT":"Austria - German (Deutsch)","de-BE":"Belgium - German (Deutsch)","de-CH":"Switzerland - German (Deutsch)","de-DE":"Germany - German (Deutsch)","de-LI":"Liechtenstein - German (Deutsch)","de-LU":"Luxembourg - German (Deutsch)","dv-MV":"Maldives - Divehi (Dhivehi)","dz-BT":"Bhutan - Dzongkha (\u0f62\u0fab\u0f7c\u0f44\u0f0b\u0f41)","en":"Other - English (English)","el-CY":"Cyprus - Greek (\u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac)","el-GR":"Greece - Greek (\u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac)","en-AG":"Antigua and Barbuda - English (English)","en-AI":"Anguilla - English (English)","en-AQ":"Antarctica - English (English)","en-AS":"American Samoa - English (English)","en-AU":"Australia - English (English)","en-BB":"Barbados - English (English)","en-BM":"Bermuda - English (English)","en-BS":"Bahamas - English (English)","en-BW":"Botswana - English (English)","en-BZ":"Belize - English (English)","en-CA":"Canada - English (English)","en-CC":"Cocos (Keeling) Islands - English (English)","en-CK":"Cook Islands - English (English)","en-CM":"Cameroon - English (English)","en-CW":"Cura\xe7ao - English (English)","en-CX":"Christmas Island - English (English)","en-DM":"Dominica - English (English)","en-ER":"Eritrea - English (English)","en-FJ":"Fiji - English (English)","en-FK":"Falkland Islands (Malvinas) - English (English)","en-FM":"Micronesia, Federated States of - English (English)","en-GB":"United Kingdom - English (English)","en-GD":"Grenada - English (English)","en-GG":"Guernsey - English (English)","en-GH":"Ghana - English (English)","en-GI":"Gibraltar - English (English)","en-GM":"Gambia - English (English)","en-GS":"South Georgia and the South Sandwich Islands - English (English)","en-GU":"Guam - English (English)","en-GY":"Guyana - English (English)","en-HK":"Hong Kong - English (English)","en-HM":"Heard Island and McDonald Mcdonald Islands - English (English)","en-IE":"Ireland - English (English)","en-IM":"Isle of Man - English (English)","en-IN":"India - English (Lakhs)","en-IO":"British Indian Ocean Territory - English (English)","en-JE":"Jersey - English (English)","en-JM":"Jamaica - English (English)","en-KE":"Kenya - English (English)","en-KI":"Kiribati - English (English)","en-KN":"Saint Kitts and Nevis - English (English)","en-KY":"Cayman Islands - English (English)","en-LC":"Saint Lucia - English (English)","en-LR":"Liberia - English (English)","en-LS":"Lesotho - English (English)","en-MF":"Saint Martin (French part) - English (English)","en-MH":"Marshall Islands - English (English)","en-MP":"Northern Mariana Islands - English (English)","en-MS":"Montserrat - English (English)","en-MT":"Malta - English (English)","en-MU":"Mauritius - English (English)","en-MW":"Malawi - English (English)","en-NA":"Namibia - English (English)","en-NF":"Norfolk Island - English (English)","en-NG":"Nigeria - English (English)","en-NR":"Nauru - English (English)","en-NU":"Niue - English (English)","en-NZ":"New Zealand - English (English)","en-PG":"Papua New Guinea - English (English)","en-PH":"Philippines - English (English)","en-PK":"Pakistan - English (English)","en-PN":"Pitcairn - English (English)","en-PR":"Puerto Rico - English (English)","en-PW":"Palau - English (English)","en-RW":"Rwanda - English (English)","en-SB":"Solomon Islands - English (English)","en-SC":"Seychelles - English (English)","en-SD":"Sudan - English (English)","en-SG":"Singapore - English (English)","en-SH":"Saint Helena, Ascension and Tristan da Cunha - English (English)","en-SL":"Sierra Leone - English (English)","en-SS":"South Sudan - English (English)","en-SX":"Sint Maarten (Dutch part) - English (English)","en-SZ":"Swaziland - English (English)","en-TC":"Turks and Caicos Islands - English (English)","en-TK":"Tokelau - English (English)","en-TO":"Tonga - English (English)","en-TT":"Trinidad and Tobago - English (English)","en-TV":"Tuvalu - English (English)","en-TZ":"Tanzania, United Republic of - English (English)","en-UG":"Uganda - English (English)","en-UM":"United States Minor Outlying Islands - English (English)","en-US":"United States - English (Millions)","en-VC":"Saint Vincent and the Grenadines - English (English)","en-VG":"Virgin Islands, British - English (English)","en-VI":"Virgin Islands, U.S. - English (English)","en-VU":"Vanuatu - English (English)","en-WS":"Samoa - English (English)","en-ZA":"South Africa - English (English)","en-ZM":"Zambia - English (English)","en-ZW":"Zimbabwe - English (English)","es-AR":"Argentina - Spanish (Espa\xf1ol)","es-BO":"Bolivia, Plurinational State of - Spanish (Espa\xf1ol)","es-BZ":"Belize - Spanish (Espa\xf1ol)","es-CL":"Chile - Spanish (Espa\xf1ol)","es-CO":"Colombia - Spanish (Espa\xf1ol)","es-CR":"Costa Rica - Spanish (Espa\xf1ol)","es-CU":"Cuba - Spanish (Espa\xf1ol)","es-DO":"Dominican Republic - Spanish (Espa\xf1ol)","es-EC":"Ecuador - Spanish (Espa\xf1ol)","es-EH":"Western Sahara - Spanish (Espa\xf1ol)","es-ES":"Spain - Spanish (Espa\xf1ol)","es-GQ":"Equatorial Guinea - Spanish (Espa\xf1ol)","es-GT":"Guatemala - Spanish (Espa\xf1ol)","es-GU":"Guam - Spanish (Espa\xf1ol)","es-HN":"Honduras - Spanish (Espa\xf1ol)","es-MX":"Mexico - Spanish (Espa\xf1ol)","es-NI":"Nicaragua - Spanish (Espa\xf1ol)","es-PA":"Panama - Spanish (Espa\xf1ol)","es-PE":"Peru - Spanish (Espa\xf1ol)","es-PR":"Puerto Rico - Spanish (Espa\xf1ol)","es-PY":"Paraguay - Spanish (Espa\xf1ol)","es-SV":"El Salvador - Spanish (Espa\xf1ol)","es-UY":"Uruguay - Spanish (Espa\xf1ol)","es-VE":"Venezuela, Bolivarian Republic of - Spanish (Espa\xf1ol)","et-EE":"Estonia - Estonian (eesti)","eu-ES":"Spain - Basque (euskara)","fa-IR":"Iran, Islamic Republic of - Persian (\u0641\u0627\u0631\u0633\u06cc)","ff-BF":"Burkina Faso - Fula (Fulfulde)","ff-GN":"Guinea - Fula (Fulfulde)","fi-FI":"Finland - Finnish (suomi)","fj-FJ":"Fiji - Fijian (Vakaviti)","fo-FO":"Faroe Islands - Faroese (f\xf8royskt)","fr-BE":"Belgium - French (Fran\xe7ais)","fr-BF":"Burkina Faso - French (Fran\xe7ais)","fr-BI":"Burundi - French (Fran\xe7ais)","fr-BJ":"Benin - French (Fran\xe7ais)","fr-BL":"Saint Barth\xe9lemy - French (Fran\xe7ais)","fr-CA":"Canada - French (Fran\xe7ais)","fr-CD":"Congo, the Democratic Republic of the - French (Fran\xe7ais)","fr-CF":"Central African Republic - French (Fran\xe7ais)","fr-CG":"Congo - French (Fran\xe7ais)","fr-CH":"Switzerland - French (Fran\xe7ais)","fr-CI":"C\xf4te d\'Ivoire - French (Fran\xe7ais)","fr-CM":"Cameroon - French (Fran\xe7ais)","fr-DJ":"Djibouti - French (Fran\xe7ais)","fr-FR":"France - French (Fran\xe7ais)","fr-GA":"Gabon - French (Fran\xe7ais)","fr-GF":"French Guiana - French (Fran\xe7ais)","fr-GG":"Guernsey - French (Fran\xe7ais)","fr-GN":"Guinea - French (Fran\xe7ais)","fr-GP":"Guadeloupe - French (Fran\xe7ais)","fr-GQ":"Equatorial Guinea - French (Fran\xe7ais)","fr-HT":"Haiti - French (Fran\xe7ais)","fr-JE":"Jersey - French (Fran\xe7ais)","fr-KM":"Comoros - French (Fran\xe7ais)","fr-LB":"Lebanon - French (Fran\xe7ais)","fr-LU":"Luxembourg - French (Fran\xe7ais)","fr-MC":"Monaco - French (Fran\xe7ais)","fr-MF":"Saint Martin (French part) - French (Fran\xe7ais)","fr-MG":"Madagascar - French (Fran\xe7ais)","fr-ML":"Mali - French (Fran\xe7ais)","fr-MQ":"Martinique - French (Fran\xe7ais)","fr-NC":"New Caledonia - French (Fran\xe7ais)","fr-NE":"Niger - French (Fran\xe7ais)","fr-PF":"French Polynesia - French (Fran\xe7ais)","fr-PM":"Saint Pierre and Miquelon - French (Fran\xe7ais)","fr-RE":"R\xe9union - French (Fran\xe7ais)","fr-RW":"Rwanda - French (Fran\xe7ais)","fr-SC":"Seychelles - French (Fran\xe7ais)","fr-SN":"Senegal - French (Fran\xe7ais)","fr-TD":"Chad - French (Fran\xe7ais)","fr-TF":"French Southern Territories - French (Fran\xe7ais)","fr-TG":"Togo - French (Fran\xe7ais)","fr-VU":"Vanuatu - French (Fran\xe7ais)","fr-WF":"Wallis and Futuna - French (Fran\xe7ais)","fr-YT":"Mayotte - French (Fran\xe7ais)","ga-IE":"Ireland - Irish (Gaeilge)","gl-ES":"Spain - Galician (galego)","gn-AR":"Argentina - Guaran\xed (Ava\xf1e\'\u1ebd)","gn-PY":"Paraguay - Guaran\xed (Ava\xf1e\'\u1ebd)","gv-IM":"Isle of Man - Manx (Gaelg)","he-IL":"Israel - Hebrew (\u05e2\u05d1\u05e8\u05d9\u05ea)","hi-FJ":"Fiji - Hindi (\u0939\u093f\u0928\u094d\u0926\u0940)","hi-IN":"India - Hindi (\u0939\u093f\u0928\u094d\u0926\u0940)","hr-BA":"Bosnia and Herzegovina - Croatian (hrvatski jezik)","hr-HR":"Croatia - Croatian (hrvatski jezik)","hr-ME":"Montenegro - Croatian (hrvatski jezik)","ht-HT":"Haiti - Haitian (Krey\xf2l ayisyen)","hu-HU":"Hungary - Hungarian (magyar)","hy-AM":"Armenia - Armenian (\u0540\u0561\u0575\u0565\u0580\u0565\u0576)","hy-CY":"Cyprus - Armenian (\u0540\u0561\u0575\u0565\u0580\u0565\u0576)","id-ID":"Indonesia - Indonesian (Indonesian)","is-IS":"Iceland - Icelandic (\xcdslenska)","it-CH":"Switzerland - Italian (Italiano)","it-IT":"Italy - Italian (Italiano)","it-SM":"San Marino - Italian (Italiano)","it-VA":"Holy See (Vatican City State) - Italian (Italiano)","ja-JP":"Japan - Japanese (\u65e5\u672c\u8a9e)","ka-GE":"Georgia - Georgian (\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8)","kg-CD":"Congo, the Democratic Republic of the - Kongo (Kikongo)","kk-KZ":"Kazakhstan - Kazakh (\u049b\u0430\u0437\u0430\u049b \u0442\u0456\u043b\u0456)","kl-GL":"Greenland - Kalaallisut (kalaallisut)","km-KH":"Cambodia - Khmer (\u1781\u17c1\u1798\u179a\u1797\u17b6\u179f\u17b6)","ko-KP":"Korea, Democratic People\'s Republic of - Korean (\ud55c\uad6d\uc5b4)","ko-KR":"Korea, Republic of - Korean (\ud55c\uad6d\uc5b4)","ku-IQ":"Iraq - Kurdish (Kurd\xee)","ky-KG":"Kyrgyzstan - Kyrgyz (\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430)","la-VA":"Holy See (Vatican City State) - Latin (latine)","lb-LU":"Luxembourg - Luxembourgish (L\xebtzebuergesch)","ln-CD":"Congo, the Democratic Republic of the - Lingala (Ling\xe1la)","ln-CG":"Congo - Lingala (Ling\xe1la)","lo-LA":"Lao People\'s Democratic Republic - Lao (\u0e9e\u0eb2\u0eaa\u0eb2)","lt-LT":"Lithuania - Lithuanian (lietuvi\u0173 kalba)","lu-CD":"Congo, the Democratic Republic of the - Luba-Katanga (Tshiluba)","lv-LV":"Latvia - Latvian (latvie\u0161u valoda)","mg-MG":"Madagascar - Malagasy (fiteny malagasy)","mh-MH":"Marshall Islands - Marshallese (Kajin M\u0327aje\u013c)","mi-NZ":"New Zealand - M\u0101ori (te reo M\u0101ori)","mk-MK":"Macedonia, the Former Yugoslav Republic of - Macedonian (\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438 \u0458\u0430\u0437\u0438\u043a)","mn-MN":"Mongolia - Mongolian (\u041c\u043e\u043d\u0433\u043e\u043b \u0445\u044d\u043b)","ms-BN":"Brunei Darussalam - Malay (\u0647\u0627\u0633 \u0645\u0644\u0627\u064a\u0648\u200e)","ms-MY":"Malaysia - Malay (\u0647\u0627\u0633 \u0645\u0644\u0627\u064a\u0648\u200e)","ms-SG":"Singapore - Malay (\u0647\u0627\u0633 \u0645\u0644\u0627\u064a\u0648\u200e)","mt-MT":"Malta - Maltese (Malti)","my-MM":"Myanmar - Burmese (\u1017\u1019\u102c\u1005\u102c)","na-NR":"Nauru - Nauru (Ekakair\u0169 Naoero)","nb-BV":"Bouvet Island - Norwegian Bokm\xe5l (Norsk bokm\xe5l)","nb-NO":"Norway - Norwegian Bokm\xe5l (Norsk bokm\xe5l)","nd-ZW":"Zimbabwe - Northern Ndebele (isiNdebele)","ne-NP":"Nepal - Nepali (\u0928\u0947\u092a\u093e\u0932\u0940)","nl-AW":"Aruba - Dutch (Nederlands)","nl-BE":"Belgium - Dutch (Nederlands)","nl-BQ":"Bonaire, Sint Eustatius and Saba - Dutch (Nederlands)","nl-CW":"Cura\xe7ao - Dutch (Nederlands)","nl-MF":"Saint Martin (French part) - Dutch (Nederlands)","nl-NL":"Netherlands - Dutch (Nederlands)","nl-SR":"Suriname - Dutch (Nederlands)","nl-SX":"Sint Maarten (Dutch part) - Dutch (Nederlands)","nn-BV":"Bouvet Island - Norwegian Nynorsk (Norsk nynorsk)","nn-NO":"Norway - Norwegian Nynorsk (Norsk nynorsk)","no-BV":"Bouvet Island - Norwegian (Norsk)","no-NO":"Norway - Norwegian (Norsk)","no-SJ":"Svalbard and Jan Mayen - Norwegian (Norsk)","nr-ZA":"South Africa - Southern Ndebele (isiNdebele)","ny-MW":"Malawi - Chichewa (chiChe\u0175a)","oc-ES":"Spain - Occitan (occitan)","pa-AW":"Aruba - Panjabi (\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40)","pa-CW":"Cura\xe7ao - Panjabi (\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40)","pl-PL":"Poland - Polish (j\u0119zyk polski)","ps-AF":"Afghanistan - Pashto (\u067e\u069a\u062a\u0648)","pt-AO":"Angola - Portuguese (Portugu\xeas)","pt-BR":"Brazil - Portuguese (Portugu\xeas)","pt-CV":"Cape Verde - Portuguese (Portugu\xeas)","pt-GW":"Guinea-Bissau - Portuguese (Portugu\xeas)","pt-MO":"Macao - Portuguese (Portugu\xeas)","pt-MZ":"Mozambique - Portuguese (Portugu\xeas)","pt-PT":"Portugal - Portuguese (Portugu\xeas)","pt-ST":"Sao Tome and Principe - Portuguese (Portugu\xeas)","pt-TL":"Timor-Leste - Portuguese (Portugu\xeas)","qu-BO":"Bolivia, Plurinational State of - Quechua (Runa Simi)","rn-BI":"Burundi - Kirundi (Ikirundi)","ro-MD":"Moldova, Republic of - Romanian (limba rom\xe2n\u0103)","ro-RO":"Romania - Romanian (limba rom\xe2n\u0103)","ru-AM":"Armenia - Russian (\u0420\u0443\u0441\u0441\u043a\u0438\u0439)","ru-BY":"Belarus - Russian (\u0420\u0443\u0441\u0441\u043a\u0438\u0439)","ru-KG":"Kyrgyzstan - Russian (\u0420\u0443\u0441\u0441\u043a\u0438\u0439)","ru-KZ":"Kazakhstan - Russian (\u0420\u0443\u0441\u0441\u043a\u0438\u0439)","ru-RU":"Russian Federation - Russian (\u0420\u0443\u0441\u0441\u043a\u0438\u0439)","ru-TJ":"Tajikistan - Russian (\u0420\u0443\u0441\u0441\u043a\u0438\u0439)","ru-TM":"Turkmenistan - Russian (\u0420\u0443\u0441\u0441\u043a\u0438\u0439)","ru-UZ":"Uzbekistan - Russian (\u0420\u0443\u0441\u0441\u043a\u0438\u0439)","rw-RW":"Rwanda - Kinyarwanda (Ikinyarwanda)","sg-CF":"Central African Republic - Sango (y\xe2ng\xe2 t\xee s\xe4ng\xf6)","si-LK":"Sri Lanka - Sinhala (\u0dc3\u0dd2\u0d82\u0dc4\u0dbd)","sk-CZ":"Czech Republic - Slovak (sloven\u010dina)","sk-SK":"Slovakia - Slovak (sloven\u010dina)","sl-SI":"Slovenia - Slovene (slovenski jezik)","sm-AS":"American Samoa - Samoan (gagana fa\'a Samoa)","sm-WS":"Samoa - Samoan (gagana fa\'a Samoa)","sn-ZW":"Zimbabwe - Shona (chiShona)","so-SO":"Somalia - Somali (Soomaaliga)","sq-AL":"Albania - Albanian (Shqip)","sq-ME":"Montenegro - Albanian (Shqip)","sq-XK":"undefined - Albanian (Shqip)","sr-BA":"Bosnia and Herzegovina - Serbian (\u0441\u0440\u043f\u0441\u043a\u0438 \u0458\u0435\u0437\u0438\u043a)","sr-ME":"Montenegro - Serbian (\u0441\u0440\u043f\u0441\u043a\u0438 \u0458\u0435\u0437\u0438\u043a)","sr-RS":"Serbia - Serbian (\u0441\u0440\u043f\u0441\u043a\u0438 \u0458\u0435\u0437\u0438\u043a)","sr-XK":"undefined - Serbian (\u0441\u0440\u043f\u0441\u043a\u0438 \u0458\u0435\u0437\u0438\u043a)","ss-SZ":"Swaziland - Swati (SiSwati)","ss-ZA":"South Africa - Swati (SiSwati)","st-LS":"Lesotho - Southern Sotho (Sesotho)","st-ZA":"South Africa - Southern Sotho (Sesotho)","sv-AX":"\xc5land Islands - Swedish (svenska)","sv-FI":"Finland - Swedish (svenska)","sv-SE":"Sweden - Swedish (svenska)","sw-CD":"Congo, the Democratic Republic of the - Swahili (Kiswahili)","sw-KE":"Kenya - Swahili (Kiswahili)","sw-TZ":"Tanzania, United Republic of - Swahili (Kiswahili)","sw-UG":"Uganda - Swahili (Kiswahili)","ta-LK":"Sri Lanka - Tamil (\u0ba4\u0bae\u0bbf\u0bb4\u0bcd)","ta-SG":"Singapore - Tamil (\u0ba4\u0bae\u0bbf\u0bb4\u0bcd)","tg-TJ":"Tajikistan - Tajik (\u0442\u043e\u04b7\u0438\u043a\u04e3)","th-TH":"Thailand - Thai (\u0e44\u0e17\u0e22)","ti-ER":"Eritrea - Tigrinya (\u1275\u130d\u122d\u129b)","tk-AF":"Afghanistan - Turkmen (T\xfcrkmen)","tk-TM":"Turkmenistan - Turkmen (T\xfcrkmen)","tn-BW":"Botswana - Tswana (Setswana)","tn-ZA":"South Africa - Tswana (Setswana)","to-TO":"Tonga - Tonga (faka Tonga)","tr-CY":"Cyprus - Turkish (T\xfcrk\xe7e)","tr-TR":"Turkey - Turkish (T\xfcrk\xe7e)","ts-ZA":"South Africa - Tsonga (Xitsonga)","uk-UA":"Ukraine - Ukrainian (\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430)","ur-FJ":"Fiji - Urdu (\u0627\u0631\u062f\u0648)","ur-PK":"Pakistan - Urdu (\u0627\u0631\u062f\u0648)","uz-AF":"Afghanistan - Uzbek (\u040e\u0437\u0431\u0435\u043a)","uz-UZ":"Uzbekistan - Uzbek (\u040e\u0437\u0431\u0435\u043a)","ve-ZA":"South Africa - Venda (Tshiven\u1e13a)","vi-VN":"Viet Nam - Vietnamese (Ti\u1ebfng Vi\u1ec7t)","xh-ZA":"South Africa - Xhosa (isiXhosa)","zh-CN":"China - Chinese (\u4e2d\u6587)","zh-HK":"Hong Kong - Chinese (\u4e2d\u6587)","zh-MO":"Macao - Chinese (\u4e2d\u6587)","zh-SG":"Singapore - Chinese (\u4e2d\u6587)","zh-TW":"Taiwan, Province of China - Chinese (\u4e2d\u6587)","zu-ZA":"South Africa - Zulu (isiZulu)"}');const Kn=(0,B.default)(M.Typography)`
  && {
    ${({theme:{spacings:e}})=>B.css`
      padding-top: ${e.s7};
      padding-bottom: ${e.s2};
    `}
  }
`,Zn=(B.default.div`
  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`,(0,B.default)(M.Select)`
  && {
    > div {
      display: flex;
      border-bottom: none !important;
      ${({theme:{screens:e}})=>B.css`
        @media (${e.gte.sm}) {
          width: 55%;
        }
      `}
    }
  }
`),Un=B.default.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  ${({theme:{colors:e,spacings:t,radii:n}})=>B.css`
    background-color: ${e.neutral[2]};
    padding: ${t.s4} ${t.s3} ${t.s6};
    margin: ${t.s7} 0;
    border-radius: ${n.hg};
  `}
`,Yn=B.default.div`
  background-color: rgba(115, 61, 217, 0.04);
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 73px;
  ${({theme:{colors:e,radii:t,spacings:n},smallButton:r,selected:a})=>B.css`
    margin-bottom: ${n.s4};
    border-radius: ${t.lg};
    padding: ${n.s3} ${n.s2};
    > label > span {
      padding-right: ${n.s1};
    }
    ${a&&B.css`
      border: solid 1px ${e.secondary[2]};
    `}
    ${r&&B.css`
      width: 30%;
      height: 52px;
      justify-content: center;
    `}
  `}
`,Jn=B.default.div`
  display: flex;
  justify-content: space-between;
`,Qn=(B.default.div`
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  ${({theme:e})=>B.css`
    margin: ${e.s4} 0;
  `}
`,B.default.div`
  ${({theme:e})=>B.css`
    padding: 0 ${e.s1};
  `}
`),Xn=(0,B.default)(M.Typography)`
  && {
    ${({theme:{spacings:e}})=>B.css`
      padding-top: ${e.s2};
      padding-bottom: ${e.s1};
    `}
  }
`,er=(0,B.default)(M.Typography)`
  && {
    ${({theme:{spacings:e}})=>B.css`
      padding-bottom: ${e.s1};
    `}
  }
`;var tr=()=>{const{values:e,setFieldValue:t}=(0,Te.u6)(),{billedBy:n,billedTo:r,locale:a="en-IN",subUnitLength:i=0}=e,{country:o}=n,{country:l}=r,[u,s]=(0,N.useState)(a),[c,d]=(0,N.useState)(i),[m,p]=(0,ae.Z)(!1);(0,N.useEffect)((()=>{m&&(s(a),d(i))}),[m]),(0,N.useEffect)((()=>{jn[l]&&jn[l][0]&&t("locale",jn[l][0])}),[l]);const f=jn[o]&&jn[o][0],h=jn[l]&&jn[l][0],[g,y]=(0,N.useState)("en-IN"),v=(0,N.useCallback)((({target:{value:e}})=>{y(e),s(e)}),[]),b=(0,N.useCallback)((({target:{value:e}})=>{d(Number(e))}),[]),E=(0,N.useCallback)((e=>{y(e.value),s(e.value)}),[]),S=(0,N.useMemo)((()=>Object.entries(Gn).map((([e,t])=>({label:t,value:e})))),[]);return N.createElement(N.Fragment,null,N.createElement(qn,null,N.createElement(M.Tooltip,{content:"Change between Roman and Arabic number systems. Million vs. Lakhs.",placement:"top",fontSize:"14px"},N.createElement(Re,{variant:"neutral",onClick:()=>{p(!0)},fullWidth:!0,dark:!0,size:"large",padding:"8px"},N.createElement(Vn.RAZ,{size:20,color:"#733dd9"}),N.createElement(M.Typography,null,"Change Number Format")))),N.createElement(M.Modal,{header:N.createElement(D.kC,{flexDirection:"column"},N.createElement(M.Typography,{size:"h4",bold:!0},"Change Number Format")),onOk:()=>{p(!1),t("locale",u,!1),t("subUnitLength",c,!1)},onCancel:()=>p(!1),okText:"Save Changes",okButtonVariant:"secondary",open:m,maskClosable:!1,width:479},N.createElement(Qn,null,N.createElement(M.Typography,{size:"h6",variant:"subtle"},"Change between Roman and Arabic number systems. Million vs. Lakhs."),N.createElement(Un,null,N.createElement(M.Typography,{variant:"subtle",size:"small"},"PREVIEW"),N.createElement(Xn,{size:"h3"},((e,t)=>12345678.9.toLocaleString(e,{minimumFractionDigits:t}))(u,c))),N.createElement(Kn,{size:"h6"},"Select Number Format"),N.createElement(M.Radio.Group,{onChange:v,value:u,vertical:!0},["en-IN","en-US",f,h,g].filter(Boolean).filter(((e,t,n)=>n.indexOf(e)===t)).map((e=>N.createElement(N.Fragment,null,N.createElement(Yn,{selected:u===e,key:e},N.createElement(M.Radio,{value:e,key:Gn[e]},N.createElement(er,{variant:"none"},Gn[e]),N.createElement(M.Typography,{bold:!0,size:"h5"},(e=>12345678..toLocaleString(e))(e)))))))),N.createElement(Zn,{placeholder:"Choose from other countries",options:S,onChange:E}),N.createElement(N.Fragment,null,N.createElement(Kn,{size:"h6"},"Select Decimal Digits"),N.createElement(M.Radio.Group,{onChange:b,value:c,vertical:!0},N.createElement(Jn,null,N.createElement(Yn,{smallButton:!0,selected:1===c},N.createElement(M.Radio,{value:1},N.createElement(M.Typography,null,"99",N.createElement("b",null,".0")))),N.createElement(Yn,{smallButton:!0,selected:2===c},N.createElement(M.Radio,{value:2},"99",N.createElement("b",null,".00"))),N.createElement(Yn,{smallButton:!0,selected:3===c},N.createElement(M.Tooltip,{content:"By selecting 3 decimals, Total in words will not appear on the final invoice.",placement:"top",fontSize:"14px"},N.createElement(M.Radio,{value:3},"99",N.createElement("b",null,".000"))))))))))};const{RC:nr}=pe,rr=(0,p._T)(pe,["RC"]);var ar=e=>{const{onCurrencyChange:t,businessCurrency:n,defaultTaxRate:r,documentId:i,hasDefaultLineItems:o,business:l,premium:s,requestPremium:c}=e,{values:d,setValues:f,setFieldValue:h,getFieldMeta:g}=(0,Te.u6)(),{invoiceType:y,currency:v,billedTo:b,billedBy:E,taxType:S,taxName:C,items:$,igst:F,columns:P}=d,[x,k]=(0,ae.Z)(!1),[T,w]=(0,ae.Z)(!1),L=Object.entries(rr).map((([e,t])=>({label:t,value:e})));(0,N.useEffect)((()=>{(0,p.mG)(void 0,void 0,void 0,(function*(){if(n&&n!==v){const e=yield t(v,n);h(`conversionRates.${n}`,e)}}))}),[v,n]),(0,N.useEffect)((()=>{if(!i&&!T&&b.gstState&&E.gstState){const e=!m(E,b);h("igst",e)}}),[b,E,i,T]);const A=(0,N.useCallback)(((e,t)=>{const n={},r=t&&"NONE"!==t?t:"Tax";n.invoiceType="NONE"===e?u.BOS:u.INVOICE,n.taxName=r,n.taxType=e===a.INDIA?a.INDIA:a.GLOBAL;const i=((e,t,n)=>e.map((e=>{const{global:r}=e,i=(0,p._T)(e,["global"]);let{label:o}=e,{isHidden:l}=e;return t===a.GLOBAL&&("gstRate"===e.key&&n&&(o=`${n} Rate`),"igst"===e.key&&n&&(o=`${n}`),"hsn"===e.key&&(l=!0)),t===a.INDIA&&("gstRate"===e.key&&(o="GST Rate"),"igst"===e.key&&(o="IGST"),"hsn"===e.key&&(l=!1)),Object.assign(Object.assign(Object.assign({},i),r),{label:o,isHidden:l})})))(P,e,r);n.columns=i,f(Object.assign(Object.assign({},d),n),!1),k(!1)}),[d]);(0,N.useEffect)((()=>{if(!i&&!o&&y===u.INVOICE){const{touched:e}=g("items[0].gstRate");e||h("items",$.map((e=>Object.assign(Object.assign({},e),{gstRate:e.gstRate||(S===a.GLOBAL?r||10:18)}))),!1)}}),[y,S]);const R=(0,N.useMemo)((()=>y===u.BOS?`Add ${C}`:`Change ${C}`),[y,C]);return N.createElement(N.Fragment,null,N.createElement(Rn,null,N.createElement(Nn,{className:"invoice-GSTCheck-wrapper"},N.createElement(Re,{variant:"neutral",dark:!0,size:"large",onClick:()=>k(!0),padding:"8px"},N.createElement(ke.eEV,{color:"#5723ba"}),N.createElement(M.Typography,{as:"span"},R))),N.createElement(Dn,null,N.createElement(M.Form.Select,{label:"Currency",direction:"row",name:"currency",options:L,required:!0,labelWidth:1/4,outlined:!0,"aria-label":"Currency"})),N.createElement(In,{justifyContent:["center","flex-end"],flexDirection:["column","row"]},N.createElement(tr,null),N.createElement(Wn,{business:l,premium:s,requestPremium:c})),N.createElement(Bn,{open:x,onCancel:()=>k(!1),onOk:A})),y===u.INVOICE&&S===a.INDIA&&N.createElement(D.xu,{width:1/4},N.createElement(M.Radio.Group,{onChange:e=>{const t="igst"===e.target.value;w(!0),h("igst",t)},value:F?"igst":"cgst"},N.createElement(M.Radio,{value:"igst"},"IGST"),N.createElement(M.Radio,{value:"cgst"},"CGST & SGST"))))};var ir=e=>{const{defaultTerms:t}=e,{values:n,handleChange:r,setFieldValue:a}=(0,Te.u6)(),{terms:i=[]}=n,[o,l]=(0,ae.Z)(!0);return(0,N.useEffect)((()=>{l(!!(null===t||void 0===t?void 0:t.length))}),[null===t||void 0===t?void 0:t.length]),N.createElement(D.kC,{width:1,my:"16px",flexDirection:"column"},!o&&N.createElement(D.xu,null,N.createElement(Re,{variant:"neutral",nature:"dashed",dark:!0,onClick:()=>{l(!0),i.length||a("terms",[{label:"Terms and Conditions",terms:[""]}],!1)}},N.createElement(ke.Ct0,{color:"#733DD9",size:16}),N.createElement(M.Typography,null,"Add Terms"))),o&&N.createElement(Te.F2,{name:"terms",render:({push:e,remove:t})=>N.createElement(N.Fragment,null,i.map((({label:n="Terms and Conditions",terms:a=[]},o)=>N.createElement(te,{className:"invoice-termsandconditions-wrapper",key:o},N.createElement(Te.F2,{name:`terms[${o}].terms`,render:({push:l,remove:u})=>N.createElement(N.Fragment,null,N.createElement(D.kC,{justifyContent:"space-between"},N.createElement(M.Typography,{variant:"none",size:"h5",name:`terms[${o}].label`,editable:!0,onValueChange:r},n),N.createElement(ne,{onClick:()=>t(o),anchor:!0,variant:"secondary","aria-label":"Remove Group"},N.createElement(ke.x8P,{color:"#733DD9"}))),a.map(((e,t)=>N.createElement(D.kC,{my:"8px",width:1,key:`term-${o}-${t}`},N.createElement(M.Form.Input,{name:`terms[${o}].terms[${t}]`,leftIcon:`${t+1}.`,"aria-label":`terms ${o} ${t}`}),N.createElement(ne,{onClick:()=>u(t),anchor:!0,variant:"secondary","aria-label":"Remove Term"},N.createElement(ke.x8P,{color:"#733DD9"}))))),N.createElement(D.xu,{width:1,my:"8px"},N.createElement(Re,{variant:"neutral",anchor:!0,onClick:()=>l("")},N.createElement(ke.Ct0,{size:16}),"Add New Term",N.createElement(rn(),{count:2})),i.length===o+1&&N.createElement(Re,{variant:"neutral",anchor:!0,onClick:()=>e({label:"Terms and Conditions",terms:[""]})},N.createElement(ke.Ct0,{size:16}),"Add New Group")))})))))}))};var or=e=>{const{privateS3Props:t}=e,{values:n}=(0,Te.u6)(),{attachments:r=[]}=n,[a,i]=(0,ae.Z)(!!r.length);return(0,N.useEffect)((()=>i(!!r.length)),[!!r.length]),N.createElement(D.kC,{width:1,mb:"16px",flexDirection:"column"},!a&&N.createElement(D.xu,null,N.createElement(M.Button,{variant:"neutral",nature:"dashed",dark:!0,onClick:()=>{i(!0)}},N.createElement(ke.PgN,{color:"#733dd9"}),N.createElement(M.Typography,null,"Add Attachments"))),a&&N.createElement(te,null,N.createElement(D.kC,{justifyContent:"space-between"},N.createElement(M.Typography,{variant:"none",size:"h5"},"Attachments"),N.createElement(M.Button,{anchor:!0,variant:"secondary",onClick:()=>i(!1),"aria-label":"Remove Attachments"},N.createElement(ke.x8P,{color:"#733dd9"}))),N.createElement(D.xu,{mb:"16px"},N.createElement(M.Typography,{variant:"none",as:"small"},"*Attachments can be viewed only via the link in shared invoice. Not via PDF.")),N.createElement(M.Form.Storage,{name:"attachments",multiple:!0,size:"large",uploadParams:t})))};const lr=(0,B.default)(Re)`
  width: 300px;
`;var ur=e=>{const{privateS3Props:t,defaultSignature:n}=e,[r,a]=(0,ae.Z)(!!n),[,,{setValue:i}]=(0,Te.U$)({name:"signature"}),{values:o,setFieldValue:l}=(0,Te.u6)(),{customLabels:u}=o,[s,c]=(0,N.useState)(!1);return(0,N.useEffect)((()=>{a(!!n)}),[!!n]),(0,N.useEffect)((()=>{r?c(!!u.signature):i(null,!1)}),[r,u.signature]),N.createElement(D.kC,{width:[1,.36],mb:"16px",flexDirection:"column",justifyContent:["flex-start","flex-end"]},!r&&N.createElement(D.kC,{justifyContent:["flex-start","flex-end"]},N.createElement(Re,{variant:"neutral",nature:"dashed",dark:!0,onClick:()=>{a(!0)}},N.createElement(ke.PcR,null),N.createElement(M.Typography,null,"Add Signature"))),r&&N.createElement(te,null,N.createElement(D.kC,{justifyContent:"space-between"},N.createElement(M.Typography,{variant:"none",size:"h5"},"Signature"),N.createElement(M.Button,{anchor:!0,variant:"secondary",onClick:()=>a(!1),style:{alignSelf:"flex-end"}},N.createElement(ke.x8P,{color:"#733dd9"}))),N.createElement(M.Form.Signature,{name:"signature",backgroundColor:"#fff",uploadParams:t,canvasProps:{height:130},clearOnResize:!1,debounce:600}),!s&&N.createElement(D.kC,null,N.createElement(lr,{variant:"neutral",dark:!0,onClick:()=>{c(!0)},fill:!0},N.createElement(ke.Ct0,{size:16,color:"#733dd9"}),N.createElement(M.Typography,null,"Add signature label"))),s&&N.createElement(N.Fragment,null,N.createElement(D.kC,{pb:"8px",justifyContent:"space-between"},N.createElement(M.Typography,{variant:"none",size:"h5"},"Add Signature Label"),N.createElement(M.Button,{anchor:!0,variant:"secondary",onClick:()=>{c(!1),l("customLabels.signature",null,!1)}},N.createElement(ke.x8P,{color:"#733dd9"}))),N.createElement(M.Form.Input,{outlined:!0,placeholder:"Add you name",name:"customLabels.signature"}))))};var sr=({defaultNote:e})=>{const{setFieldValue:t,handleChange:n,values:r}=(0,Te.u6)(),{customLabels:a}=r,[i,o]=(0,ae.Z)(!!e);return(0,N.useEffect)((()=>{o(!!e)}),[e]),N.createElement(D.kC,{width:[1,.5],mb:"16px",flexDirection:"column"},!i&&N.createElement(D.kC,null,N.createElement(Re,{variant:"neutral",nature:"dashed",dark:!0,onClick:()=>{o(!0)},fill:!0},N.createElement(ke.oA,null),N.createElement(M.Typography,null,"Add Notes"))),i&&N.createElement(te,null,N.createElement(D.kC,{justifyContent:"space-between"},N.createElement(M.Typography,{variant:"none",size:"h5",name:"customLabels.notes",editable:!0,onValueChange:n},a.notes),N.createElement(M.Button,{anchor:!0,variant:"secondary",onClick:()=>{t("notes",null,!1),o(!1)},"aria-label":"Remove Notes"},N.createElement(ke.x8P,{color:"#733dd9"}))),N.createElement(M.Form.Textarea,{name:"notes",rows:12})))},cr=n(86893);var dr=e=>{const{documentId:t}=e,{values:n,setFieldValue:r}=(0,Te.u6)(),{billedBy:a,contact:i}=n,[o,l]=(0,ae.Z)(!0);return(0,N.useEffect)((()=>{t||(Ge(a.email)&&r("contact.email",a.email,!1),Ke(a.phone)&&r("contact.phone",a.phone,!1))}),[a.email,a.phone]),(0,N.useEffect)((()=>{o||((null===i||void 0===i?void 0:i.email)&&r("contact.email",null,!1),(null===i||void 0===i?void 0:i.phone)&&r("contact.phone",null,!1))}),[o]),N.createElement(D.kC,{width:1,mb:"16px",flexDirection:"column"},!o&&N.createElement(D.xu,null,N.createElement(Re,{variant:"neutral",nature:"dashed",dark:!0,onClick:()=>{l(!0)}},N.createElement(dt.IXo,null),N.createElement(M.Typography,null,"Add Contact"))),o&&N.createElement(te,null,N.createElement(D.kC,{justifyContent:"space-between"},N.createElement(M.Typography,{variant:"none",size:"h5"},"Your Contact Details"),N.createElement(M.Button,{anchor:!0,variant:"secondary",onClick:()=>l(!1),"aria-label":"Remove"},N.createElement(ke.x8P,{color:"#733dd9"}))),N.createElement(D.kC,{flexDirection:["column","row"],justifyContent:["center","left"]},N.createElement(D.kC,{alignItems:"center",pr:"8px",justifyContent:"flex-start",flexShrink:0},N.createElement(M.Typography,null,"For any enquiry, reach out via email at")),N.createElement(D.xu,{width:[1,"300px"]},N.createElement(M.Form.Input,{name:"contact.email",leftIcon:N.createElement(cr.Imn,{color:"#E94034"}),placeholder:"Your email (optional)"})),N.createElement(D.kC,{mt:["16px",0],alignItems:"center",pr:"8px",justifyContent:"flex-start",flexShrink:0},N.createElement(M.Typography,null,"or call on")),N.createElement(D.xu,{width:[1,"300px"]},N.createElement(M.Form.PhoneInput,{name:"contact.phone",placeholder:"Add Your Phone Number (optional)",country:a.country.toLowerCase()})))))},mr=n(11640),pr=n(21593);var fr=e=>{const{defaultRecurring:t,premium:n,requestPremium:r,business:a}=e,{values:i,setFieldValue:o}=(0,Te.u6)(),{recurringInvoice:l}=i,[u,s]=(0,ae.Z)(!1),[m,p]=(0,I.useFormikFormTouched)(),f=(0,N.useRef)(),h=(0,N.useCallback)((e=>e===c.WEEKLY?(0,P.default)(new Date,7):e===c.MONTHLY?(0,mr.default)(new Date,1):e===c.QUATERLY?(0,mr.default)(new Date,3):e===c.HALFYEARLY?(0,mr.default)(new Date,6):e===c.YEARLY?(0,pr.default)(new Date,1):e===c.YEARLY2?(0,pr.default)(new Date,2):e===c.YEARLY3?(0,pr.default)(new Date,3):e===c.YEARLY5?(0,pr.default)(new Date,5):new Date),[]);(0,N.useEffect)((()=>{t&&t.frequency!==c.NONE&&s(!0)}),[null===t||void 0===t?void 0:t.frequency]),(0,N.useEffect)((()=>{if(m&&!t){const e=u?c.MONTHLY:c.NONE;o("recurringInvoice.frequency",e,!1),o("recurringInvoice.status",d.DRAFT,!1)}}),[u]),(0,N.useEffect)((()=>{m&&((null===l||void 0===l?void 0:l.frequency)&&l.frequency!==c.NONE?o("recurringInvoice.nextDate",h(l.frequency),!1):(null===l||void 0===l?void 0:l.frequency)===c.NONE&&s(!1))}),[null===l||void 0===l?void 0:l.frequency]);const g=(0,N.useMemo)((()=>Object.entries(he).map((([e,t])=>({label:t,value:e})))),[]),y=(0,N.useCallback)((e=>(n||[d.EMAIL,d.UNPAID].includes(e.target.value)&&f.current&&f.current.open(),null)),[n,f.current]),v=(0,N.useMemo)((()=>Object.entries(ge).filter((([e])=>a||e===d.DRAFT)).map((([e,t])=>{const[n,r]=t.split("(");return{label:N.createElement(D.xu,null,N.createElement(M.Typography,null,n,"Create as Draft "!==n&&N.createElement(ke.tv5,{size:16})),N.createElement(M.Typography,{variant:"subtle",style:{whiteSpace:"initial"}},null===r||void 0===r?void 0:r.slice(0,-1))),value:e}}))),[a]);return N.createElement(D.kC,{width:[1,.6],mb:"16px",flexDirection:"column"},N.createElement(te,{className:"invoice-termsandconditions-wrapper"},N.createElement(D.xu,null,N.createElement(M.Checkbox,{checked:u,onChange:({target:e})=>{p(!0),s(e.checked)},label:"This is a recurring invoice."}),N.createElement(M.Typography,{variant:"subtle"},"A draft invoice will be created with same details every next period.")),u&&N.createElement(D.xu,null,N.createElement(D.xu,{mt:"12px"},N.createElement(M.Form.Select,{outlined:!0,name:"recurringInvoice.frequency",options:g,direction:"row",label:"Invoice repeats"})),N.createElement(D.xu,{mt:"12px"},N.createElement(M.Form.DatePicker,{outlined:!0,name:"recurringInvoice.nextDate",direction:"row",label:"Next Repeat Date",dateFormat:"MMMM dd, yyyy"})),N.createElement(D.xu,{mt:"12px"},N.createElement(M.Form.Radio,{name:"recurringInvoice.status",direction:"column",options:v,vertical:!0,onChange:e=>y(e)}),N.createElement(qe,{ref:f,requestPremium:()=>r("Recurring Invoice"),onCancel:()=>{o("recurringInvoice.status",d.DRAFT,!1)}})))))};var hr=()=>{const{values:e,setFieldValue:t}=(0,Te.u6)(),{advanceOptions:n,invoiceType:r,billedBy:a}=e,{country:i}=a||{},{hideCountryOfSupply:o=!1}=n||{},l=r===u.INVOICE&&"IN"===i;return(0,N.useEffect)((()=>{r===u.BOS&&t("advanceOptions.hideCountryOfSupply",!0,!1)}),[r]),l?N.createElement(D.kC,{width:[1,.6],mb:"16px",flexDirection:"column"},N.createElement(te,null,N.createElement(M.Typography,{variant:"none",size:"h5"},"Advance Options"),N.createElement(D.xu,{my:"8px"},N.createElement(M.Checkbox,{name:"advanceOptions.hideCountryOfSupply",label:"Hide Place Of Supply/Country Of Supply",checked:o,onChange:({target:{checked:e}})=>{t("advanceOptions.hideCountryOfSupply",e,!1)}})))):N.createElement(N.Fragment,null)};var gr=()=>{const{values:e,handleChange:t,setFieldValue:n}=(0,Te.u6)(),{customFooters:r=[]}=e;return N.createElement(D.kC,{mb:"16px"},!(null===r||void 0===r?void 0:r.length)&&N.createElement(Re,{variant:"neutral",nature:"dashed",dark:!0,fill:!0,onClick:()=>n("customFooters",[{label:"",value:""}])},N.createElement(ke.oA,null),N.createElement(M.Typography,null,"Add Additonal Info")),!!r.length&&N.createElement(te,null,N.createElement(Te.F2,{name:"customFooters",render:({push:e,remove:n})=>N.createElement("div",null,r.map(((e,r)=>N.createElement(D.kC,{my:"8px",key:r},N.createElement(M.Form.Input,{name:`customFooters[${r}].value`,labelWidth:.4,label:e.label,direction:"row",labelName:`customFooters[${r}].label`,editableLabel:!0,labelPlaceHolder:"Field Name "+(e.value?"(Required)":""),onLabelChange:t,labelProps:{size:"h5",variant:"subtle"},placeholder:"Value"}),N.createElement(ne,{onClick:()=>n(r),anchor:!0,variant:"secondary"},N.createElement(ke.x8P,{color:"#733dd9"}))))),N.createElement(D.xu,{mt:"8px",mb:"16px"},N.createElement(Re,{anchor:!0,variant:"neutral",onClick:()=>e({label:"",value:""})},N.createElement(ke.Ct0,{size:16}),"Add More Fields")))})))},yr=n(84388),vr=n(26316);var br=(0,N.forwardRef)(((e,t)=>{var n,r,a,o,l,u,s,c,d,m,f,h;const{defaultValue:g,invoiceFormConfig:y,businesses:v,activeBusiness:b,lastInvoice:E,onSubmit:S,auth:C,privateS3Props:$,publicS3Props:F,onBusinessEdit:P,onClientEdit:x,onClientChange:k,onBusinessChange:T,addNewBusiness:w,addNewClient:L,onCurrencyChange:A,checkInvoiceNumber:R,onFormError:B,documentId:q,requestPremium:O=le(),findInventories:_}=e,z=(0,p._T)(e,["defaultValue","invoiceFormConfig","businesses","activeBusiness","lastInvoice","onSubmit","auth","privateS3Props","publicS3Props","onBusinessEdit","onClientEdit","onClientChange","onBusinessChange","addNewBusiness","addNewClient","onCurrencyChange","checkInvoiceNumber","onFormError","documentId","requestPremium","findInventories"]),[H,W]=(0,N.useState)(),[V,j]=(0,N.useState)(null),[G,K]=(0,ae.Z)(!1),[Z,U]=(0,ie.Z)({name:"",email:"",phone:"",country:""}),Y=(0,N.useRef)(null),[J,Q]=(0,vr.jf)();(0,N.useImperativeHandle)(t,(()=>({setValues:e=>{var t;null===(t=Y.current)||void 0===t||t.setValues(Object.assign(Object.assign({},Y.current.values),e),!1)}})));const X=(0,N.useMemo)((()=>xe(null===y||void 0===y?void 0:y.billType,null===g||void 0===g?void 0:g.taxType)),[null===y||void 0===y?void 0:y.billType,null===g||void 0===g?void 0:g.taxType]);(0,I.useBrowserEffect)((()=>{if((null===g||void 0===g?void 0:g.items)&&Y.current){const e=g.items.map((e=>{var t;return Object.assign(Object.assign({},e),{showDescription:!!e.description,showImage:!!(null===(t=e.images)||void 0===t?void 0:t.length)})}));Y.current.setFieldValue("items",e,!1)}}),[null===g||void 0===g?void 0:g.items]),(0,I.useBrowserEffect)((()=>{var e,t;if(((null===g||void 0===g?void 0:g.shippedTo)||(null===g||void 0===g?void 0:g.shippedFrom)||(null===g||void 0===g?void 0:g.transportDetails))&&Y.current){const n=Object.values(g.transportDetails||{}).some(Boolean),r=!!(null===(e=g.shippedTo)||void 0===e?void 0:e.name),a=!!(null===(t=g.shippedFrom)||void 0===t?void 0:t.name),i=r||a||n;Y.current.setFieldValue("showShippedTo",i,!1)}}),[null===g||void 0===g?void 0:g.shippedTo,null===g||void 0===g?void 0:g.transportDetails]);const ee={initialValues:$e(null===y||void 0===y?void 0:y.billType,null===y||void 0===y?void 0:y.isExpenditure).default(),validationSchema:$e(null===y||void 0===y?void 0:y.billType),onSubmit:(e,{setSubmitting:t})=>(0,p.mG)(void 0,void 0,void 0,(function*(){var n,r,a;const i=Fe(e,q,null===y||void 0===y?void 0:y.isExpenditure,null===(n=null===b||void 0===b?void 0:b.configuration)||void 0===n?void 0:n.manageInventory);if(W(i),C)try{yield S(i)}catch(o){j((null===o||void 0===o?void 0:o.message)||o)}else U({name:i.billedBy.name,email:(null===(r=i.contact)||void 0===r?void 0:r.email)||i.billedBy.email,phone:(null===(a=i.contact)||void 0===a?void 0:a.phone)||i.billedBy.phone,country:i.billedBy.country}),K(!0);return t(!1),Promise.resolve()})),validateOnMount:!0,innerRef:Y},te=!!(null===y||void 0===y?void 0:y.billType)&&[i.INVOICE,i.PROFORMAINV].includes(y.billType),ne=i.PURCHASEORDER===(null===y||void 0===y?void 0:y.billType),re=i.DELIVERYCHALLAN===(null===y||void 0===y?void 0:y.billType);return N.createElement(N.Fragment,null,N.createElement(D.xu,{p:["16px","32px"]},N.createElement(M.Form,{formik:ee},N.createElement(M.Form.Reset,{resetValue:g}),N.createElement(Oe,{publicS3Props:F,lastInvoice:E,checkInvoiceNumber:R,invoices:null===b||void 0===b?void 0:b.invoices,isExpenditure:null===y||void 0===y?void 0:y.isExpenditure,business:!!b,premium:null===(n=null===b||void 0===b?void 0:b.preferences)||void 0===n?void 0:n.premiumn,requestPremium:O}),(null===v||void 0===v?void 0:v.length)&&b?N.createElement(Ut,{businesses:v,activeBusiness:b,onBusinessEdit:P,onClientChange:k,onClientEdit:x,onBusinessChange:T,addNewBusiness:w,addNewClient:L,documentId:q,billType:null===y||void 0===y?void 0:y.billType,isExpenditure:null===y||void 0===y?void 0:y.isExpenditure,onFormError:B}):N.createElement(et,{billType:null===y||void 0===y?void 0:y.billType,onFormError:B}),(te||ne||re||(null===y||void 0===y?void 0:y.isExpenditure))&&N.createElement(ot,{defaultShippedTo:null===(r=null===g||void 0===g?void 0:g.shippedTo)||void 0===r?void 0:r.name,defaultShippedFrom:null===(a=null===g||void 0===g?void 0:g.shippedFrom)||void 0===a?void 0:a.name}),N.createElement(ar,{onCurrencyChange:A,businessCurrency:null===b||void 0===b?void 0:b.currency,defaultTaxRate:null===y||void 0===y?void 0:y.defaultTaxRate,documentId:q,hasDefaultLineItems:!!(null===(o=null===g||void 0===g?void 0:g.items)||void 0===o?void 0:o.length),business:!!b,premium:null===(l=null===b||void 0===b?void 0:b.preferences)||void 0===l?void 0:l.premiumn,requestPremium:O}),N.createElement(En,{privateS3Props:$,defaultTaxRate:null===y||void 0===y?void 0:y.defaultTaxRate,business:!!b,premium:null===(u=null===b||void 0===b?void 0:b.preferences)||void 0===u?void 0:u.premiumn,requestPremium:O,manageInventory:null===(s=null===b||void 0===b?void 0:b.configuration)||void 0===s?void 0:s.manageInventory,findInventories:_}),N.createElement(D.kC,{flexDirection:["column-reverse","row"],justifyContent:"space-between",my:"24px"},N.createElement(D.xu,{width:[1,.36]}),N.createElement(Ln,{businessCurrency:null===b||void 0===b?void 0:b.currency})),N.createElement(ir,{defaultTerms:null===g||void 0===g?void 0:g.terms}),N.createElement(D.kC,{width:1,flexDirection:["column","row"],justifyContent:"space-between"},N.createElement(sr,{defaultNote:null===g||void 0===g?void 0:g.notes}),N.createElement(ur,{privateS3Props:$,defaultSignature:null===g||void 0===g?void 0:g.signature})),N.createElement(or,{privateS3Props:$}),N.createElement(gr,null),!ne&&!(null===y||void 0===y?void 0:y.isExpenditure)&&N.createElement(dr,{documentId:q}),te&&!(null===y||void 0===y?void 0:y.isExpenditure)&&N.createElement(fr,{defaultRecurring:null===g||void 0===g?void 0:g.recurringInvoice,business:!!b,premium:null===(c=null===b||void 0===b?void 0:b.preferences)||void 0===c?void 0:c.premiumn,requestPremium:O}),N.createElement(hr,null),N.createElement(D.kC,{my:"24px"},N.createElement(M.Form.Error,{error:V})),N.createElement(D.kC,{justifyContent:"center"},C&&!q&&!(null===y||void 0===y?void 0:y.isExpenditure)&&N.createElement(D.xu,{mr:"12px"},N.createElement(M.Form.Button,{variant:"neutral",nature:"outlined",type:"button",onClick:()=>{if(Y.current){const{errors:e,setFieldValue:t,submitForm:n}=Y.current;return t("status","DRAFT",!1),B&&Object.keys(e).length&&B(e),n()}return Promise.resolve()},disabled:(null===(d=Y.current)||void 0===d?void 0:d.isSubmitting)&&"DRAFT"!==(null===(m=Y.current)||void 0===m?void 0:m.values.status)},"Save As Draft")),N.createElement(M.Form.Button,{type:"button",onClick:()=>{if(Y.current){const{errors:e,setFieldValue:t,submitForm:n}=Y.current;return t("status",void 0,!1),B&&Object.keys(e).length&&B(e),n()}return Promise.resolve()},disabled:(null===(f=Y.current)||void 0===f?void 0:f.isSubmitting)&&"DRAFT"===(null===(h=Y.current)||void 0===h?void 0:h.values.status)},"Save & Continue")))),G&&N.createElement(yr.Z,Object.assign({},z,{defaultValue:Z,open:G,onSubmit:(e,t)=>(0,p.mG)(void 0,void 0,void 0,(function*(){return H?S(Object.assign(Object.assign({},H),{auth:e}),t):Promise.resolve()})),onCancel:()=>K(!1)})),N.createElement(M.ProductTour,{run:J,toggleTour:Q,steps:X}))}));var Er=(0,N.forwardRef)(((e,t)=>{var n;const{invoiceFormConfig:r={billType:i.INVOICE,defaultTaxRate:18,hideHeaderTaxWidget:!1,popUpBodyTaxWidget:!1,hidePaymentOptionStep:!1,stepperTitle:"Create Your Invoice Now",liteMode:!1,isExpenditure:!1},activeBusiness:a}=e,[o]=(0,I.useLocalForage)("userLocale","en-in");let l=[{title:"Invoice Details"},{title:"Your Bank Details",subtitle:"(Optional)"},{title:"Select Design & Colors",subtitle:"(Download or Email Invoice)"}];return(null===r||void 0===r?void 0:r.billType)===i.QUOTATION?l=[{title:"Quotation Details"},{title:"Select Design & Colors",subtitle:"(Download or Email Quotation)"}]:(null===r||void 0===r?void 0:r.billType)===i.DELIVERYCHALLAN?l=[{title:"Delivery Challan Details"},{title:"Select Design & Colors",subtitle:"(Download or Email Delivery Challan)"}]:(null===r||void 0===r?void 0:r.billType)===i.PURCHASEORDER?l=[{title:"Purchase Order Details"},{title:"Select Design & Colors",subtitle:"(Download or Email Purchase Order)"}]:(null===r||void 0===r?void 0:r.billType)===i.CREDITNOTE?l=[{title:"Credit Note Details"},{title:"Download or Email Credit Note",subtitle:"(Choose Template & Color)"}]:(null===r||void 0===r?void 0:r.billType)===i.PAYMENTRECEIPT?l=[{title:"Payment Receipt Details"},{title:"Download or Email Payment Receipt",subtitle:"(Choose Template & Color)"}]:(null===r||void 0===r?void 0:r.billType)===i.DEBITNOTE?l=[{title:"Debit Note Details"},{title:"Download or Email Debit Note",subtitle:"(Choose Template & Color)"}]:(null===r||void 0===r?void 0:r.isExpenditure)?l=[{title:"Expenditure Details"},{title:"Select Design & Colour",subtitle:"(Download or Email Expenditure)"}]:"IN"!==(null===a||void 0===a?void 0:a.country)&&"IN"!==(null===(n=null===a||void 0===a?void 0:a.billedTo)||void 0===n?void 0:n.country)&&o&&"en-in"!==o&&l.splice(1,1),N.createElement(O,null,N.createElement(D.kC,{justifyContent:"center",my:"16px"},N.createElement(D.xu,null,N.createElement(M.Typography,{as:"h2"},null===r||void 0===r?void 0:r.stepperTitle))),N.createElement(D.kC,{justifyContent:"center",width:"100%",mt:"16px",mb:"48px",pl:"16px"},N.createElement(M.Stepper,{activeStep:0,steps:l})),N.createElement(q,null,N.createElement(br,Object.assign({},e,{ref:t}))),N.createElement(D.kC,{justifyContent:"center",width:"100%",mt:"40px"},N.createElement(M.Stepper,{activeStep:0,steps:l})))}));const Sr={checkIntraState:m,getDefaultColumns:h,getState:y,getBillingInfo:function(e){const{gstin:t,panNumber:n,locations:r=[],billedTo:a,country:i}=e,[o]=r,{address:l}=o||{},{name:u=e.name,street:s=(null===l||void 0===l?void 0:l.street),city:c=(null===l||void 0===l?void 0:l.city),country:d=i||(null===l||void 0===l?void 0:l.country),gstState:m=(null===l||void 0===l?void 0:l.gstState),state:p=(null===l||void 0===l?void 0:l.state),pincode:f=(null===l||void 0===l?void 0:l.pincode),customFields:h=[],email:g,phone:y,emailShowInInvoice:v,phoneShowInInvoice:b}=a||{};return{name:u,gstin:t,panNumber:n,street:s,city:c,country:d,state:p,gstState:m,pincode:f,customFields:h.filter((e=>{var t;return null===(t=e.params)||void 0===t?void 0:t.showInInvoice})),email:v?g:void 0,phone:b?y:void 0,emailShowInInvoice:v,phoneShowInInvoice:b}},getBusinessDocumentConfig:function(e,t=i.INVOICE,n){const{configuration:r}=e,{invoice:o=[],quotation:l=[],deliveryChallan:u=[],purchaseOrder:s=[],creditNote:c=[],paymentReciept:d=[],debitNote:m=[],expenditure:f=[],tax:h}=r,{taxName:g,taxType:y}=h||{},[P]=o,[x]=l,[k]=u,[T]=s,[w]=c,[L]=d,[A]=m,[R]=f;let N;N=n?R:t===i.QUOTATION?x||P:t===i.DELIVERYCHALLAN?k||P:t===i.PURCHASEORDER?T||x||P:t===i.CREDITNOTE?w||P:t===i.PAYMENTRECEIPT?L||P:t===i.DEBITNOTE?A||P:P||x;const{labels:D={},headers:I=[],columns:M=[],extraTotalFields:B=[],additionalCharges:q=[],footers:O=[]}=N||{},_={taxName:g};_.taxType=y===a.GLOBAL?a.GLOBAL:a.INDIA,n||(t===i.QUOTATION&&x?_.customLabels=Object.assign(Object.assign({},b),D):t===i.DELIVERYCHALLAN&&k?_.customLabels=Object.assign(Object.assign({},E),D):t===i.PURCHASEORDER&&T?_.customLabels=Object.assign(Object.assign({},F),D):[i.PROFORMAINV,i.INVOICE].includes(t)&&P?_.customLabels=Object.assign(Object.assign({},v),D):t===i.CREDITNOTE&&w?_.customLabels=Object.assign(Object.assign({},S),D):t===i.PAYMENTRECEIPT&&L?_.customLabels=Object.assign(Object.assign({},C),D):t===i.DEBITNOTE&&A&&(_.customLabels=Object.assign(Object.assign({},$),D)));const z=M.filter((({isArchived:e})=>!e)).map((e=>{var{isArchived:t}=e,n=(0,p._T)(e,["isArchived"]);return"gstRate"===n.key&&g?Object.assign(Object.assign({},n),{label:`${g} Rate`}):"igst"===n.key&&g?Object.assign(Object.assign({},n),{label:g}):n}));return z.length&&(_.columns=z),_.customFooters=O.filter((e=>!e.isArchived)).map((({label:e})=>({label:e,value:null}))),_.customHeaders=I.filter((e=>!e.isArchived)).map((({label:e})=>({label:e,value:null}))),_.additionalCharges=q.filter((e=>!e.isArchived)).map((({label:e})=>({label:e,amount:0}))),_.extraTotalFields=B.filter((e=>!e.isArchived)).map((({label:e})=>({label:e,value:null}))),_},getInvoiceBillTypeDefaults:function(e=i.INVOICE,t,n,r){const o={billType:e,invoiceNumber:"00001",invoiceTitle:"Invoice",invoiceDate:new Date,dueDate:(0,P.default)(new Date,15),customLabels:v,customHeaders:[],customFooters:[],additionalCharges:[],extraTotalFields:[],terms:[{label:"Terms and Conditions",terms:["Please pay within 15 days from the date of invoice, overdue interest @ 14% will be charged on delayed payments.","Please quote invoice number when remitting funds."]}]};return e===i.PROFORMAINV?(o.invoiceTitle="Proforma Invoice",o.terms=[{label:"Terms and Conditions",terms:["Please pay within 15 days from the date of invoice, overdue interest @ 14% will be charged on delayed payments.","Please quote proforma invoice number when remitting funds."]}]):e===i.QUOTATION?(o.invoiceTitle="Quotation",o.customLabels=b,o.terms=[{label:"Terms and Conditions",terms:["Applicable taxes will be extra.","Work will resume after advance payment."]}]):e===i.DELIVERYCHALLAN?(o.invoiceTitle="Delivery Challan",o.customLabels=E,o.terms=[{label:"Terms and Conditions",terms:["Applicable taxes will be extra.","Work will resume after advance payment."]}]):e===i.CREDITNOTE?(o.invoiceTitle="Credit Note",o.dueDate=void 0,o.customLabels=S,o.terms=[{label:"Terms and Conditions",terms:["Credits cannot be used during sales or promotions."]}]):e===i.PAYMENTRECEIPT?(o.invoiceTitle="Payment Receipt",o.dueDate=void 0,o.customLabels=C,o.terms=[]):e===i.DEBITNOTE?(o.invoiceTitle="Debit Note",o.dueDate=void 0,o.customLabels=$,o.terms=[{label:"Terms and Conditions",terms:["No terms"]}]):e===i.PURCHASEORDER&&(o.invoiceTitle="Purchase Order",o.customLabels=F,o.terms=[{label:"Terms and Conditions",terms:["Payment will be made 15 days after final delivery."]}]),n&&(o.invoiceTitle="Expenditure",o.invoiceNumber=""),t===a.GLOBAL&&(o.columns=h(t,r)),o},getInvoiceValuesFromLast:function(e){const{invoiceTitle:t,invoiceSubTitle:n,contact:r,currency:a,invoiceType:i,terms:o,template:l,locale:u,signature:s,invoiceDate:c,dueDate:d,logo:m,documentReason:p,igst:f,letterHead:h,letterHeadFooter:g,subUnitLength:y,advanceOptions:v,hideTotals:b,columns:E}=e;let S=new Date;(0,x.default)((0,k.default)(new Date(c)),(0,k.default)(S))&&(S=(0,P.default)(new Date(c),1));let C=null;if(d){const e=function(e,t){(0,L.Z)(2,arguments);var n=(0,T.default)(e),r=(0,T.default)(t),a=A(n,r),i=Math.abs((0,w.default)(n,r));n.setDate(n.getDate()-a*i);var o=A(n,r)===-a,l=a*(i-o);return 0===l?0:l}(new Date(d),new Date(c));C=(0,P.default)(S,e)}return{invoiceDate:S,dueDate:C,invoiceTitle:t,invoiceSubTitle:n,contact:r,currency:a,invoiceType:i,terms:o,template:l,locale:u,signature:s,logo:m,documentReason:p,igst:f,letterHead:h,letterHeadFooter:g,subUnitLength:y,advanceOptions:v,hideTotals:b,columns:E}},increaseInvoiceNumber:R,getClientBusinessDefaults:function(e,t){var n;const{billedTo:r,panNumber:a,gstin:i,_id:o}=e,l={clientProfile:o},u=null===t||void 0===t?void 0:t.clients.find((t=>t.profile===e._id));return u&&(l.client=u._id),r&&(l.billedTo={name:r.name,gstin:i,panNumber:a,street:r.street,city:r.city,state:r.state,gstState:r.gstState,country:r.country,pincode:r.pincode,customFields:(null===(n=r.customFields)||void 0===n?void 0:n.filter((e=>{var t;return null===(t=e.params)||void 0===t?void 0:t.showInInvoice})))||[]},r.emailShowInInvoice&&(l.billedTo.email=r.email),r.phoneShowInInvoice&&(l.billedTo.phone=r.phone)),l},getCloneInvoiceDefaults:function(e,t){const{_id:n,items:r,invoiceTitle:a,contact:o,transportDetails:l,currency:u,invoiceType:s,notes:c,logo:d,billedBy:m,shippedTo:p,shippedFrom:f,terms:h,discount:g,signature:y,columns:v,customHeaders:b,additionalCharges:E,extraTotalFields:S,template:C,locale:$,customLabels:F,billType:P,igst:x,advanceOptions:k,subUnitLength:T,invoiceSubTitle:w,hideTotals:L,letterHead:A,letterHeadFooter:R,customFooters:N}=t,D={items:r,invoiceTitle:a,contact:o,transportDetails:l,currency:u,invoiceType:s,notes:c,logo:d,billedBy:Object.assign({customFields:[]},m),shippedTo:p,shippedFrom:f,terms:h,discount:g,signature:y,columns:v,customHeaders:b,customFooters:N,additionalCharges:E,extraTotalFields:S,template:C,locale:$,igst:x,advanceOptions:k,subUnitLength:T,invoiceSubTitle:w,hideTotals:L,letterHead:A,letterHeadFooter:R};return e!==P?P===i.QUOTATION?D.linkedQuotation=n:P===i.PROFORMAINV&&(D.customLabels=F,D.linkedProformaInvoices=[n]):D.customLabels=F,D},getLeadDefault:function(e){var t,n,r,a,o;const l={},{budget:s,ref:c,subject:d,contact:m,customer:p}=e;return l.billType=i.QUOTATION,l.invoiceType=u.BOS,l.status="DRAFT",l.lead=e._id,((null===s||void 0===s?void 0:s.currency)||c.currency)&&(l.currency=(null===s||void 0===s?void 0:s.currency)||c.currency),l.items=[{name:d||c.subject||"Item 1",quantity:1,rate:(null===s||void 0===s?void 0:s.amount)||c.budget||1,subTotal:(null===s||void 0===s?void 0:s.amount)||c.budget||1,amount:(null===s||void 0===s?void 0:s.amount)||c.budget||1,total:(null===s||void 0===s?void 0:s.amount)||c.budget||1,custom:{}}],(null===m||void 0===m?void 0:m.name)||(null===p||void 0===p?void 0:p.name)?l.billedTo={name:(null===p||void 0===p?void 0:p.name)||(null===m||void 0===m?void 0:m.name)||"",email:null===m||void 0===m?void 0:m.email,phone:null===m||void 0===m?void 0:m.phone,country:"IN"}:l.billedTo={name:(null===(t=c.customer)||void 0===t?void 0:t.name)||(null===(n=c.contact)||void 0===n?void 0:n.name)||"",email:null===(r=c.contact)||void 0===r?void 0:r.email,phone:null===(a=c.contact)||void 0===a?void 0:a.phone,street:null===(o=c.customer)||void 0===o?void 0:o.address,country:"IN"},l},getEditValues:function(e){const{invoiceTitle:t,discount:n,terms:r,attachments:a,recurringInvoice:i,customLabels:o,locale:l,expenseNumber:u,contact:s,signature:c,extraTotalFields:d,additionalCharges:m,currency:p,invoiceType:f,columns:h,items:g,billedTo:y,billedBy:v,customHeaders:b,customFooters:E,dueDate:S,invoiceDate:C,invoiceNumber:$,logo:F,conversionRates:P,client:x,vendor:k,taxType:T,taxName:w,shippedTo:L,shippedFrom:A,transportDetails:R,finalTotal:N={},notes:D,billType:I,documentReason:M,igst:B,subUnitLength:q,linkedInvoices:O=[],advanceOptions:_,invoiceSubTitle:z,hideTotals:H}=e;return{invoiceTitle:t,discount:n,terms:r,attachments:a,recurringInvoice:i&&Object.assign(Object.assign({},i),{nextDate:i.nextDate&&new Date(i.nextDate)}),customLabels:o,locale:l,expenseNumber:u,contact:s,signature:c,extraTotalFields:d,additionalCharges:m,currency:p,invoiceType:f,columns:h,items:g,billedTo:y,billedBy:v,customHeaders:b,customFooters:E,dueDate:S&&new Date(S),invoiceDate:new Date(C),invoiceNumber:$,logo:F,conversionRates:P,client:x,vendor:k,taxType:T,taxName:w,billType:I,shippedTo:L,shippedFrom:A,transportDetails:R&&Object.assign(Object.assign({},R),{challanDate:R.challanDate&&new Date(R.challanDate)}),discountEnabled:!!N.discount,notes:D,documentReason:M,igst:B,subUnitLength:q,linkedInvoices:O,advanceOptions:_,invoiceSubTitle:z,hideTotals:H}}}},26316:function(e,t,n){"use strict";n.d(t,{d2:function(){return l},qK:function(){return u},jf:function(){return s}});var r=n(67294),a=n(93002);const i=n(52220).createGlobalStyle`
.jupiter-universal-card {
  position: fixed !important;
  z-index: 1000;
  opacity: 1 !important;
  @media (max-width: 480px){
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    > div {
      padding: 0 !important;
    }
  }
}
.switch-business-header{
  @media (max-width: 568px){
    z-index: 1003;
    transition: none !important;
  }
}
`,o=(0,r.createContext)({});function l({children:e,config:t}){const[n,l]=(0,a.Z)(t),u={value:n,setValue:l};return(0,r.useEffect)((()=>{l({crispReady:t.crispReady,openHelp:t.openHelp})}),[t.crispReady,t.openHelp]),r.createElement(o.Provider,{value:u},r.createElement(i,null),e)}function u(){const{value:e}=(0,r.useContext)(o);return e}function s(){const{value:e,setValue:t}=(0,r.useContext)(o),{runProductTour:n=!1}=e;return[n,()=>t({runProductTour:!n})]}},14678:function(e,t,n){"use strict";var r=n(10434);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return r.MediaLinkPlaceholder}}),n.o(r,"PageFeature")&&n.d(t,{PageFeature:function(){return r.PageFeature}}),n.o(r,"PageWrapper")&&n.d(t,{PageWrapper:function(){return r.PageWrapper}}),n.o(r,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return r.PremiumPlans}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},10434:function(){},57302:function(e,t,n){"use strict";var r=n(94939);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return r.MediaLinkPlaceholder}}),n.o(r,"PageFeature")&&n.d(t,{PageFeature:function(){return r.PageFeature}}),n.o(r,"PageWrapper")&&n.d(t,{PageWrapper:function(){return r.PageWrapper}}),n.o(r,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return r.PremiumPlans}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},94939:function(){},29815:function(e,t,n){"use strict";var r=n(14385);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return r.MediaLinkPlaceholder}}),n.o(r,"PageFeature")&&n.d(t,{PageFeature:function(){return r.PageFeature}}),n.o(r,"PageWrapper")&&n.d(t,{PageWrapper:function(){return r.PageWrapper}}),n.o(r,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return r.PremiumPlans}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},14385:function(){},14676:function(e,t,n){"use strict";var r=n(37137);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return r.MediaLinkPlaceholder}}),n.o(r,"PageFeature")&&n.d(t,{PageFeature:function(){return r.PageFeature}}),n.o(r,"PageWrapper")&&n.d(t,{PageWrapper:function(){return r.PageWrapper}}),n.o(r,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return r.PremiumPlans}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},37137:function(){},19863:function(e,t,n){"use strict";var r=n(47377);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return r.MediaLinkPlaceholder}}),n.o(r,"PageFeature")&&n.d(t,{PageFeature:function(){return r.PageFeature}}),n.o(r,"PageWrapper")&&n.d(t,{PageWrapper:function(){return r.PageWrapper}}),n.o(r,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return r.PremiumPlans}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},47377:function(){},67813:function(e,t,n){"use strict";var r=n(36593);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return r.MediaLinkPlaceholder}}),n.o(r,"PageFeature")&&n.d(t,{PageFeature:function(){return r.PageFeature}}),n.o(r,"PageWrapper")&&n.d(t,{PageWrapper:function(){return r.PageWrapper}}),n.o(r,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return r.PremiumPlans}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},36593:function(){},49897:function(e,t,n){"use strict";var r=n(9694);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return r.MediaLinkPlaceholder}}),n.o(r,"PageFeature")&&n.d(t,{PageFeature:function(){return r.PageFeature}}),n.o(r,"PageWrapper")&&n.d(t,{PageWrapper:function(){return r.PageWrapper}}),n.o(r,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return r.PremiumPlans}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},9694:function(){},50760:function(e,t,n){"use strict";var r=n(10349);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return r.MediaLinkPlaceholder}}),n.o(r,"PageFeature")&&n.d(t,{PageFeature:function(){return r.PageFeature}}),n.o(r,"PageWrapper")&&n.d(t,{PageWrapper:function(){return r.PageWrapper}}),n.o(r,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return r.PremiumPlans}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},10349:function(){},77902:function(e,t,n){"use strict";var r=n(30670);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return r.MediaLinkPlaceholder}}),n.o(r,"PageFeature")&&n.d(t,{PageFeature:function(){return r.PageFeature}}),n.o(r,"PageWrapper")&&n.d(t,{PageWrapper:function(){return r.PageWrapper}}),n.o(r,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return r.PremiumPlans}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},30670:function(){},69506:function(e,t,n){"use strict";var r=n(49470);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"MediaLinkPlaceholder")&&n.d(t,{MediaLinkPlaceholder:function(){return r.MediaLinkPlaceholder}}),n.o(r,"PageFeature")&&n.d(t,{PageFeature:function(){return r.PageFeature}}),n.o(r,"PageWrapper")&&n.d(t,{PageWrapper:function(){return r.PageWrapper}}),n.o(r,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return r.PremiumPlans}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},49470:function(){},64524:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294),a=n(2544),i=n(6411),o=n(52220);const l=o.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${({theme:{screens:e,spacings:t}})=>o.css`
    padding: ${t.s4};
    > a {
      max-width: 130px;
      min-width: 130px;
      height: ${t.s7};
      margin: ${t.s2};
      display: inline-block;
      filter: grayscale();
      opacity: 0.6;
    }
    > a:hover {
      filter: none;
      opacity: 1;
    }
    @media screen and (${e.lte.xs}) {
      > a {
        max-width: 90px;
        min-width: 90px;
      }
    }
  `};
`,u=e=>{const{mediaLinks:t,heading:n}=e;return r.createElement("div",null,n&&r.createElement(i.xu,{mb:16,textAlign:"center"},r.createElement(a.Typography,{as:"h2"},n)),r.createElement(l,null,t.map((({url:e,title:t,image:n,_id:i})=>r.createElement("a",{href:e,title:t,key:i,target:"_blank",rel:"noopener noreferrer"},r.createElement(a.Image,Object.assign({},n)))))))};u.defaultProps={heading:"Featured In"};var s=u},72898:function(e,t,n){"use strict";n.d(t,{r:function(){return r.Z}});var r=n(64524),a=n(21902);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"PageFeature")&&n.d(t,{PageFeature:function(){return a.PageFeature}}),n.o(a,"PageWrapper")&&n.d(t,{PageWrapper:function(){return a.PageWrapper}}),n.o(a,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return a.PremiumPlans}}),n.o(a,"Pricing")&&n.d(t,{Pricing:function(){return a.Pricing}}),n.o(a,"Products")&&n.d(t,{Products:function(){return a.Products}}),n.o(a,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return a.RequirementCategories}}),n.o(a,"RequirementForm")&&n.d(t,{RequirementForm:function(){return a.RequirementForm}}),n.o(a,"Services")&&n.d(t,{Services:function(){return a.Services}}),n.o(a,"Sidebar")&&n.d(t,{Sidebar:function(){return a.Sidebar}}),n.o(a,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return a.SidebarAppWrapper}}),n.o(a,"SigninForm")&&n.d(t,{SigninForm:function(){return a.SigninForm}}),n.o(a,"SignupForm")&&n.d(t,{SignupForm:function(){return a.SignupForm}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},21902:function(){},41627:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(67294),a=n(2544),i=n(6411),o=n(45727),l=n(52220),u=n(32929);const s=(0,l.default)(u.W)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,c=l.default.div`
  display: flex;
  flex-wrap: wrap;
  margin: 60px 0;
  ${({theme:{screens:e}})=>l.css`
    @media screen and (${e.lte.sm}) {
      justify-content: center;
    }
  `};
`,d=l.default.div`
  display: flex;
  flex-direction: column;
  ${({theme:{spacings:e,screens:t}})=>l.css`
    padding: ${e.s4};
    margin: ${e.s3};
    @media screen and (${t.gte.sm}) {
      width: 300px;
    }
  `};
`,m=l.default.div`
  display: flex;
  justify-content: center;
  height: auto;
  border-radius: 12px;
  ${({theme:{colors:e,spacings:t}})=>l.css`
    margin: 0 auto ${t.s8};
    background: ${e.neutral[2]};
  `};
`,p=l.default.div`
  display: flex;
  flex-direction: column;
`,f=(0,l.default)(a.Typography)`
  && {
    ${({theme:{spacings:e}})=>l.css`
      margin-top: ${e.s6};
    `};
  }
`;var h=e=>{const{title:t,subTitle:n,copy:l,image:u,features:h,cta:g}=e;return r.createElement(s,null,r.createElement(i.xu,{textAlign:"center",mt:"80px"},r.createElement(a.Typography,{as:"h2"},t)),n&&r.createElement(i.xu,{mt:["30px","60px"],textAlign:"center"},r.createElement(a.Typography,{size:"h4",variant:"none"},n)),r.createElement(i.xu,{mt:["30px","60px"]},r.createElement(a.Image,Object.assign({},u,{loading:"eager"}))),g&&r.createElement(i.xu,{mt:["30px","60px"]},r.createElement(o.Z,{cta:g})),l&&r.createElement(i.xu,{textAlign:"center",mt:"40px"},r.createElement(a.Typography,{size:"h4",variant:"none"},l)),r.createElement(c,null,h.map((e=>r.createElement(d,{key:e._id},r.createElement(m,null,r.createElement(a.Image,Object.assign({},e.image,{width:268,height:192}))),r.createElement(p,null,r.createElement(a.Typography,{size:"h4"},e.title),r.createElement(f,{size:"h5",variant:"subtle"},e.subTitle)))))))}},73970:function(e,t,n){"use strict";n.d(t,{J:function(){return r.Z}});var r=n(41627),a=n(76106);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"PageWrapper")&&n.d(t,{PageWrapper:function(){return a.PageWrapper}}),n.o(a,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return a.PremiumPlans}}),n.o(a,"Pricing")&&n.d(t,{Pricing:function(){return a.Pricing}}),n.o(a,"Products")&&n.d(t,{Products:function(){return a.Products}}),n.o(a,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return a.RequirementCategories}}),n.o(a,"RequirementForm")&&n.d(t,{RequirementForm:function(){return a.RequirementForm}}),n.o(a,"Services")&&n.d(t,{Services:function(){return a.Services}}),n.o(a,"Sidebar")&&n.d(t,{Sidebar:function(){return a.Sidebar}}),n.o(a,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return a.SidebarAppWrapper}}),n.o(a,"SigninForm")&&n.d(t,{SigninForm:function(){return a.SigninForm}}),n.o(a,"SignupForm")&&n.d(t,{SignupForm:function(){return a.SignupForm}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},76106:function(){},54459:function(e,t,n){"use strict";var r=n(66780);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"PageWrapper")&&n.d(t,{PageWrapper:function(){return r.PageWrapper}}),n.o(r,"PremiumPlans")&&n.d(t,{PremiumPlans:function(){return r.PremiumPlans}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},66780:function(){},55396:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var r=n(67294),a=n(14516),i=n(2544),o=n(34578),l=n(82795),u=n.n(l);var s=n(92977);function c(e){return void 0===e&&(e=0),function(e,t){void 0===t&&(t=0);var n=(0,r.useRef)(!1),a=(0,r.useRef)(),i=(0,r.useRef)(e),o=(0,r.useCallback)((function(){return n.current}),[]),l=(0,r.useCallback)((function(){n.current=!1,a.current&&clearTimeout(a.current),a.current=setTimeout((function(){n.current=!0,i.current()}),t)}),[t]),u=(0,r.useCallback)((function(){n.current=null,a.current&&clearTimeout(a.current)}),[]);return(0,r.useEffect)((function(){i.current=e}),[e]),(0,r.useEffect)((function(){return l(),u}),[t]),[o,u,l]}((0,s.Z)(),e)}var d=n(89211),m=n(34078),p=n.n(m),f=n(26316),h=n(70655),g=n(9669),y=n.n(g),v=n(69483),b=n.n(v),E=n(52256),S=n(58430);var C=n(79874),$=n(52019),F=n(52220);const P=F.default.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
  ${({theme:{screens:e,sizes:t,spacings:n}})=>F.css`
    @media screen and (${e.lte.sm}) {
      > span:first-child {
        font-size: ${t.smaller};
        margin-top: ${n.s3};
      }
    }
  `}
`,x=F.default.div`
  ${({theme:{spacings:e,screens:t}})=>F.css`
    margin: ${e.s3} ${e.s4} ${e.s3} ${e.s7};
    @media screen and (${t.lte.sm}) {
      margin-left: 0;
    }

    button {
      width: 181px;
      justify-content: flex-start;
    }
  `}
`,k=(0,F.default)(i.Button)`
  && {
    ${({theme:{colors:e}})=>F.css`
      svg:nth-child(2) {
        color: ${e.neutral[0]};
      }
    `}
  }
`,T=(0,F.default)(i.Typography)`
  && {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,w=F.default.div`
  display: flex;
  align-items: center;
  > span {
    ${({theme:{spacings:e}})=>F.css`
      margin-right: ${e.s4};
    `}
  }
`,L=F.default.div`
  display: flex;
  width: 100%;
  ${({theme:{screens:e}})=>F.css`
    @media screen and (${e.lte.sm}) {
      flex-wrap: wrap;
    }
  `}
  > div {
    ${({theme:{spacings:e}})=>F.css`
      margin-right: ${e.s4};
    `}
  }
`,A=(0,F.default)(i.Menu)`
  && {
    ${({theme:{spacings:e,colors:t}})=>F.css`
      svg {
        vertical-align: middle;
        margin-right: ${e.s2};
      }
      span {
        color: ${t.neutral[7]};
        margin-right: ${e.s3};
      }
    `}
  }
`,R=F.default.div`
  max-width: 320px;
  ${({theme:{spacings:e}})=>F.css`
    padding: ${e.s4};
  `}
`,N=e=>{const{locales:t,onLocaleChange:n,hideLocale:l,localeLabel:s,locale:m,variant:g,onVisibilityChange:v=u(),pageUrl:F}=e,{config:{baseUrl:N}}=(0,f.qK)(),D="function"===typeof l?l():!!l,[I,M]=(0,a.useLocalForage)("hideAppPageLocale",!1),B=function(){const e=(0,a.isBrowser)();return(0,E.Z)((()=>(0,h.mG)(this,void 0,void 0,(function*(){if(e)try{const e=yield b().getItem("session").catch(u());if(e){const{countryCode:t}=e;if(t&&S[t]&&S[t][0])return S[t][0].toLowerCase()}if(navigator&&navigator.language)return navigator.language.toLowerCase();const{data:t}=yield y().get("http://ip-api.com/json");if(t&&"success"===t.status){b().setItem("session",t).catch(u());const{countryCode:e}=t;if(e&&S[e]&&S[e][0])return S[e][0].toLowerCase()}}catch(t){u()()}return null}))),[e]).value||null}(),[q,O]=(0,d.Z)(!1),[_,z]=(0,d.Z)(!1),[H,W]=(0,d.Z)(!1),[V,j]=(0,r.useState)(m),[G]=c("PAGE"===g?2e3:0);(0,r.useEffect)((()=>O(!G()||I&&"PAGE"===g||D)),[D,I,G()]),(0,r.useEffect)((()=>j(m)),[m]),(0,r.useEffect)((()=>v(!q)),[q]),(0,a.useBrowserEffect)((()=>{B&&V&&(B===V||_||z(!0))}),[V,B]);const K=(0,r.useMemo)((()=>{if(F){const e="/"===F?"":F;return Object.entries(t).map((([t,{label:n,flag:r}])=>({label:n,locale:t,flag:r,elisif:{href:p()(N,t,e),as:"en-in"===t?p()(N,e):p()(N,t,e)},sort:"en"===t?1:t===V?2:3}))).sort(((e,t)=>e.sort>t.sort?1:-1))}return null}),[t,F,V]),Z=(0,r.useMemo)((()=>K?r.createElement(A,null,K.map((e=>r.createElement(C.Z,{key:e.locale,title:e.label,onClick:()=>"MENU"===g?(n(e.locale),W(!1),j(e.locale),!0):(j(e.locale),!1),elisif:e.elisif},r.createElement(e.flag,null)," ",e.label)))):r.createElement(r.Fragment,null)),[K]),U=t[V],Y=(0,r.useMemo)((()=>r.createElement(R,null,r.createElement(T,null,r.createElement(i.Typography,{size:"h6",bold:!0},"You are on ",U&&U.label," page."),r.createElement(i.Button,{anchor:!0,onClick:z},r.createElement(o.x8P,{size:16,color:"#7f8fa4"}))),r.createElement(i.Typography,{size:"h6"},"Choose another country or region to see content specific to your location"))),[U]);return q||!K?r.createElement(r.Fragment,null):"PAGE"===g?G()?r.createElement(P,null,s&&r.createElement(i.Typography,{variant:"subtle",size:"small"},s),r.createElement(i.Popover,{content:Z,containerStyle:{boxShadow:"0 2px 6px rgba(0,0,0,0.12)",zIndex:"9999"},trigger:"click",align:"end",key:"Locales"},r.createElement(x,null,r.createElement(i.Button,{nature:"outlined",variant:"neutral"},r.createElement(T,{inline:!0,size:"h5"},r.createElement(U.flag,null)," ",U.label," ",r.createElement(o._ME,{size:14}))))),r.createElement(i.Button,{onClick:()=>n(V)},"Continue"),r.createElement(i.Button,{onClick:()=>M(!0),anchor:!0},r.createElement(o.x8P,{size:40,color:"#7f8fa4"}))):r.createElement(r.Fragment,null):"FLAG"===g?r.createElement(w,null,s&&r.createElement(i.Typography,{inline:!0,size:"h5",bold:!0},s),r.createElement(L,null,K.map((e=>r.createElement("div",{key:e.locale},r.createElement($.Z,{elisif:e.elisif},r.createElement(i.Button,{as:"a",anchor:!0,variant:"neutral",onClick:()=>(n(e.locale,!1),!0),title:e.label},r.createElement(i.Tooltip,{placement:"top",content:e.label,fontSize:"14px"},r.createElement(e.flag,null))))))))):r.createElement(r.Fragment,null,s&&r.createElement(i.Typography,{inline:!0,size:"h5",bold:!0},s,":"," "),r.createElement(i.Popover,{content:Z,containerStyle:{boxShadow:"0 2px 6px rgba(0,0,0,0.12)",zIndex:"9999"},trigger:"click",align:"end",onClickOutside:()=>W(!1),isOpen:H,key:"Flag"},r.createElement(k,{anchor:!0,variant:"neutral",onClick:()=>{W(),z(!1)},"aria-label":"Toggle Country"},U&&r.createElement(U.flag,{color:"#fff"})," ",r.createElement(o._ME,{size:14}))),_&&r.createElement(i.Popover,{content:Y,containerStyle:{boxShadow:"0 2px 6px rgba(0,0,0,0.12)",zIndex:"9999"},trigger:"click",align:"end",isOpen:_,key:"Suggesion",disableReposition:!0},r.createElement(k,{anchor:!0,variant:"neutral",onClick:()=>z(!1),"aria-label":"Toggle Locale Suggestion"},r.createElement(o.kIV,{size:14}))))};N.defaultProps={variant:"FLAG"};var D=N},97526:function(e,t,n){"use strict";n.d(t,{F:function(){return a}});var r=n(52220);const a=r.default.div`
  ${({theme:{colors:e}})=>r.css`
      background: ${e.neutral[1]};
    `}
`},46937:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(67294),a=n(2544),i=n(34578),o=n(71759),l=n(6411),u=n(32929),s=n(52220);const c=s.default.div`
  border-radius: 4px;
  border: solid 1px #d3dceb;
  justify-content: center;
  display: flex;
  margin: 56px auto 0;
  ${({theme:{screens:e,spacings:t}})=>s.css`
    @media screen and (${e.lte.sm}) {
      margin-right: ${t.s5};
      margin-left: ${t.s5};
      /* overflow-x: scroll; */
      place-content: flex-start;
      &&::-webkit-scrollbar {
        display: none;
      }
    }
  `}
`,d=(0,s.default)(a.Button)`
  && {
    ${({theme:{colors:e,spacings:t},selected:n})=>s.css`
      border: none;
      padding: ${t.s3};
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      height: unset;
      width: 120px;
      > * {
        margin-top: ${t.s1};
      }
      ${n&&s.css`
        box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.08);
        font-weight: bold;
        color: ${e.neutral[7]};
        border-radius: 4px;
        border: solid 1px #733dd9;
        background-color: #f7faff;
      `}
    `}
  }
`,m=(s.default.div`
  ${({theme:{spacings:e,screens:t}})=>s.css`
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: ${e.s6} ${e.s9} ${e.s9};
    @media screen and (${t.lte.sm}) {
      padding: ${e.s6};
    }
  `}
`,(0,s.default)(a.Typography)`
  text-decoration: line-through;
  margin: 0 18px 0 4px;
`),p=(0,s.default)(a.Typography)`
  && {
    ${({theme:{spacings:e}})=>s.css`
      margin: ${e.s5} 0 ${e.s3};
      padding: 0 ${e.h3};
    `}
  }
`,f=(0,s.default)(l.xu)`
  && {
    ${({theme:{screens:e}})=>s.css`
      flex: 1;
      margin-right: 40px;
      padding: 0 16px;

      @media screen and (${e.lte.sm}) {
        margin-right: 0;
        padding: 0 10px;
      }
    `}
  }
`,h=(0,s.default)(l.kC)`
  align-items: baseline;
  flex-wrap: wrap;
`,g=(0,s.default)(l.kC)`
  && {
    ${({theme:{screens:e}})=>s.css`
      @media screen and (${e.lte.sm}) {
        padding: 0 10px;
      }
    `}
  }
  &&::-webkit-scrollbar {
    display: none;
  }
`,y=s.default.div`
  ${({theme:{colors:e,spacings:t,radii:n,screens:r},isFree:a})=>s.css`
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-top-left-radius: ${n.lg};
    border-top-right-radius: ${n.lg};
    padding: ${t.s6} ${t.s9} ${t.s9};
    border: solid 1px ${e.neutral[4]};
    background-color: ${e.neutral[0]};
    /* height: 235px; */

    @media screen and (${r.lte.sm}) {
      padding: ${t.s6};
      /* height: 265px; */
    }

    ${!a&&s.css`
      border-top: solid 4px ${e.secondary[2]};
    `}

    ${a&&s.css`
      margin-top: 4px;
    `}
  `}
`,v=s.default.div`
  ${({theme:{colors:e,spacings:t,radii:n,screens:r}})=>s.css`
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom-left-radius: ${n.lg};
    border-bottom-right-radius: ${n.lg};
    padding: ${t.s6} ${t.s9};
    border: solid 1px ${e.neutral[4]};
    border-top: none;
    background-color: ${e.neutral[0]};
    /* height: calc(100% - 235px); */

    @media screen and (${r.lte.sm}) {
      padding: ${t.s6} ${t.s6};
      /* height: calc(100% - 265px); */
    }
  `}
`,b=(0,s.default)(a.Typography)`
  && {
    ${({theme:{spacings:e}})=>s.css`
      margin: ${e.s5} 0 ${e.s3};
    `}
  }
`,E=(0,s.default)(a.Typography)`
  && {
    text-align: initial;
  }
`;s.default.span`
  font-size: 20px;
  line-height: 1.2;
  text-transform: lowercase;
`;var S=n(45727);var C=e=>{const{periods:t,plans:n=[],onPlanClick:s,cta:C,business:$,currentPlan:F=!1}=e,[P,x]=(0,r.useState)("YEARLY"),k=({_id:e,amount:t,nonDiscountedAmount:n,percentSaving:u,currency:c,name:d,features:g=[]})=>{const P=0===t;return r.createElement(f,{flex:1,minWidth:290,maxWidth:540},r.createElement(y,{isFree:P},r.createElement(a.Typography,{variant:P?"neutral":"warn",size:"h5",bold:!0},d),r.createElement(b,{variant:"neutral",size:"h1"},P?r.createElement("div",null,r.createElement("div",null,r.createElement(E,{variant:"neutral",size:"h1"},(0,o.formateCurrency)(0,c))),r.createElement(E,{variant:"subtle"},"Start for free - you can upgrade anytime to unlock more features.")):r.createElement("div",null,r.createElement(h,null,r.createElement(a.Typography,{variant:"neutral",size:"h1"},(0,o.formateCurrency)(t,c)),!!n&&r.createElement(m,{variant:"subtle",size:"h3"},(0,o.formateCurrency)(n,c)),!!u&&r.createElement(a.Typography,{variant:"primary",bold:!0},"You will save ",u,"%")),r.createElement(E,{variant:"subtle"},"Per Business"))),!P&&r.createElement(r.Fragment,null,C&&!$?r.createElement(S.Z,{cta:C}):r.createElement(a.Button,{size:"large",variant:P?"neutral":"secondary",onClick:()=>s(e,P),disabled:F&&!P},"Upgrade to Premium"))),r.createElement(v,null,g.map((e=>r.createElement(l.kC,{key:e._id,mb:"28px"},r.createElement(l.xu,{mr:"16px"},e.included&&r.createElement(i.yR2,{size:24,color:"#733dd9"}),!e.included&&r.createElement(i.x8P,{size:24})),r.createElement(l.xu,{textAlign:"left"},r.createElement(a.Typography,{variant:"neutral",size:"h6",bold:!0},e.title),r.createElement(a.Typography,{variant:"subtle",size:"h6"},e.subTitle))))),!P&&r.createElement(l.xu,{width:1},C&&!$?r.createElement(S.Z,{cta:C,buttonProps:{fullWidth:!0,size:"large"}}):r.createElement(a.Button,{fullWidth:!0,size:"large",variant:"secondary",onClick:()=>s(e,P),disabled:F&&!P},"Upgrade to Premium"),!!u&&r.createElement(p,{variant:"primary",bold:!0},"You will save ",u,"%"))))};return r.createElement(u.W,{id:"refrens-premium-block",centered:!0},r.createElement(a.Typography,{size:"h2",bold:!0},"Price Plans"),r.createElement(l.kC,null,r.createElement(c,null,t.map((e=>r.createElement(d,{key:e.value,variant:"neutral",selected:P===e.value,onClick:()=>x(e.value)},e.label,r.createElement(a.Divider,null),!!e.nonDiscountedAmount&&r.createElement(a.Typography,{lineThrough:!0,variant:"subtle"},(0,o.formateCurrency)(e.nonDiscountedAmount,e.currency)),r.createElement(a.Typography,{bold:!0},(0,o.formateCurrency)(e.amount,e.currency)),!!e.percentSaving&&r.createElement(a.Typography,{variant:"primary",bold:!0},"Save ",e.percentSaving,"%")))))),r.createElement(g,{mt:"44px",overflowX:"auto",justifyContent:["flex-start","center"]},n.filter((e=>e.recurrence===P||!e.amount)).map(((e,t,n)=>r.createElement(k,Object.assign({key:e._id,isLast:t+1===n.length},e))))))}},79798:function(e,t,n){"use strict";n.d(t,{O:function(){return r.Z}});var r=n(46937),a=n(67699);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"Pricing")&&n.d(t,{Pricing:function(){return a.Pricing}}),n.o(a,"Products")&&n.d(t,{Products:function(){return a.Products}}),n.o(a,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return a.RequirementCategories}}),n.o(a,"RequirementForm")&&n.d(t,{RequirementForm:function(){return a.RequirementForm}}),n.o(a,"Services")&&n.d(t,{Services:function(){return a.Services}}),n.o(a,"Sidebar")&&n.d(t,{Sidebar:function(){return a.Sidebar}}),n.o(a,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return a.SidebarAppWrapper}}),n.o(a,"SigninForm")&&n.d(t,{SigninForm:function(){return a.SigninForm}}),n.o(a,"SignupForm")&&n.d(t,{SignupForm:function(){return a.SignupForm}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},67699:function(){},36145:function(e,t,n){"use strict";var r=n(94466);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},94466:function(){},75124:function(e,t,n){"use strict";var r=n(34726);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},34726:function(){},97733:function(e,t,n){"use strict";var r=n(44351);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"Pricing")&&n.d(t,{Pricing:function(){return r.Pricing}}),n.o(r,"Products")&&n.d(t,{Products:function(){return r.Products}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},44351:function(){},30480:function(e,t,n){"use strict";n.d(t,{Z:function(){return B}});var r=n(67294),a=n(17042),i=n(2544),o=n(34578),l=n(6411),u=n(71759),s=n(52220),c=n(32929);const d=s.css`
  ${({theme:{colors:e}})=>s.css`
    color: ${e.secondary[2]};
  `};
`,m=s.default.div`
  position: relative;
  width: 100%;
`,p=(0,s.default)(c.W)`
  && {
    ${({theme:{spacings:e}})=>s.css`
      padding-bottom: ${e.s5};
    `};
  }
`,f=(0,s.default)(i.Card)`
  && {
    max-width: 429px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
    ${({theme:{spacings:e}})=>s.css`
      padding: ${e.s7};
    `}
  }
`,h=s.default.div`
  height: 76px;
  display: flex;
  justify-content: center;
  ${({theme:{spacings:e}})=>s.css`
    margin-bottom: ${e.s6};
  `}
`,g=s.default.div`
  font-size: 20px;
  line-height: 2.5;
  text-align: center;
  ${({theme:{spacings:e}})=>s.css`
    height: ${e.h14};
  `}
`,y=s.default.div`
  height: 76px;
  text-align: center;
`,v=(0,s.default)(i.Typography)`
  && {
    ${({theme:{spacings:e}})=>s.css`
      padding: ${e.s6} 0;
    `}
  }

  sup {
    font-size: 0.75em;
  }
`,b=(0,s.default)(i.Typography)`
  && {
    text-align: center;
    ${({theme:{spacings:e}})=>s.css`
      padding-bottom: ${e.s6};
    `}
  }
`,E=(0,s.default)(i.Typography)`
  && {
    display: block;
    height: 1px;
    border: 0;
    padding: 0;
    ${({theme:{spacings:e,colors:t}})=>s.css`
      border-top: 1px solid ${t.neutral[3]};
      margin: 0 -${e.s7};
    `}
  }
`,S=s.default.div`
  padding-top: 3rem;
  text-align: left;
`,C=(0,s.default)(i.Typography.A)`
  && {
    font-size: 14px;
    ${({theme:{spacings:e,colors:t}})=>s.css`
      color: ${t.neutral[6]};
      margin-top: ${e.s5};
    `}
  }
`,$=s.default.div`
  padding-top: 2rem;
`,F=s.default.div`
  ${({theme:{spacings:e}})=>s.css`
    padding-top: ${e.s7};
  `}
  text-align: center;
`,P=s.default.div`
  max-width: 65%;
  margin: 0 auto;
  ${({theme:{breakpoints:e}})=>s.css`
    @media screen and (max-width: ${e[0]}) {
      max-width: 100%;
    }
  `}
`,x=(0,s.default)(i.Image)`
  && {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -999;
    height: 100%;

    img {
      object-fit: cover;
    }

    div {
      width: 100%;
    }
  }
`,k=(0,s.default)(i.Typography).attrs({inline:!0,as:"a"})`
  && {
    ${d}
  }
`,T=s.default.span`
  font-size: 64px;
`,w=s.default.div`
  display: flex;
  align-items: center;
  ${({theme:{spacings:e}})=>s.css`
    margin-bottom: ${e.s6};
  `}
  &: last-child {
    margin-bottom: 0;
  }
`,L=s.default.div`
  display: flex;
`,A=s.default.div`
  display: flex;
  flex-direction: column;
  ${({theme:{spacings:e}})=>s.css`
    margin-left: ${e.s3};
  `}
`;var R=e=>{const{title:t,description:n,isCompleted:a,customIcon:l}=e;return r.createElement(w,null,r.createElement(L,null,l||r.createElement(o.fU8,{color:a?"#1bb934":"#7f8fa4",size:20})),r.createElement(A,null,t&&r.createElement(i.Typography,{size:"h6",variant:"none",bold:!0},t),n&&r.createElement(i.Typography,{size:"small",variant:"subtle"},n)))},N=n(45727),D=n(52019),I=n(26316);const M=e=>{const{backgroundImage:t,currency:n,heroSubText:s,heroText:c,heroValue:d,heading:w,invoicePgChargeValue:L,subHeading:A,subTitle:M,supportText:B,title:q,footer:O,learnMore:_,cta:z}=e,{crispReady:H,openHelp:W}=(0,I.qK)();return r.createElement(m,null,t&&r.createElement(x,Object.assign({},t)),r.createElement(p,null,r.createElement(l.xu,{mb:40,textAlign:"center"},r.createElement(i.Typography,{as:"h2"},w)),M&&r.createElement(l.xu,{mb:40,textAlign:"center"},r.createElement(i.Typography,{as:"h3"},M)),r.createElement(f,null,q&&r.createElement(b,{size:"h4"},q),r.createElement(h,null,n&&r.createElement(g,null,a[n]),r.createElement(y,null,r.createElement(T,null,d),c&&r.createElement(i.Typography,{inline:!0,size:"h4"},c))),s&&r.createElement(i.Typography,null,s),r.createElement(i.Typography,{size:"h4",variant:"primary",bold:!0},A),L&&r.createElement(r.Fragment,null,r.createElement(v,{size:"h4"},"You only pay a small fee",r.createElement("sup",null,"*")," if you wish to recieve payments online"),r.createElement(E,null),r.createElement(S,null,r.createElement(R,{title:"NEFT, IMPS, RTGS, UPI",description:"FREE",customIcon:r.createElement(o.QzM,{color:"#1bb934",size:38})}),r.createElement(R,{title:"Domestic Cards",description:`${L.DOMESTIC.rate}% + 18% GST`,customIcon:r.createElement(o.QzM,{color:"#1bb934",size:38})}),r.createElement(R,{title:"International Cards",description:`${L.INTERNATIONAL.rate}% + 18% GST`,customIcon:r.createElement(o.QzM,{color:"#1bb934",size:38})})),r.createElement("br",null),r.createElement(i.Typography,{variant:"none"},r.createElement("sup",null,"*")," GST Applicable as per law with input tax credits.",L.DOMESTIC.minCharge&&` Minimum charges ${(0,u.formateCurrency)(L.DOMESTIC.minCharge,"INR")}`)),z&&r.createElement($,null,r.createElement(N.Z,{cta:z})),_&&r.createElement(D.Z,{hrefProps:{href:_.as||_.href},elisif:{href:_.href,as:_.as}},r.createElement(C,{target:_.isExternal?"_blank":"_self",as:"a"},_.label||"Use this template")),B&&r.createElement(F,null,r.createElement(i.Typography,{size:"label"},"For any query please contact ",!H&&r.createElement(i.Typography,{inline:!0,size:"label",as:"a",variant:"secondary",onClick:W},"support")),r.createElement(i.Typography,{size:"label"},"Or Call / WhatsApp us on ",r.createElement(i.Typography,{href:"tel:+91 97394 32668",inline:!0,as:"a",size:"label",variant:"secondary"},"+91 97394 32668")))),!!(null===O||void 0===O?void 0:O.length)&&r.createElement(P,null,O.map((e=>r.createElement(F,{key:e.label},r.createElement(i.Typography,{size:e.small?"h5":"h4",variant:e.small?"neutral":"subtle",italic:e.small},e.label),e.cta&&r.createElement(D.Z,{hrefProps:{href:e.cta.as||e.cta.href},elisif:{href:e.cta.href,as:e.cta.as}},r.createElement(k,{size:"h4",underline:!1},e.cta.label))))))))};M.defaultProps={heading:"Pricing",title:"Invoice generation on Refrens is FREE!",currency:"INR",subHeading:"UNLIMITED. FREE FOREVER!",heroValue:0,footer:[]};var B=M},11127:function(e,t,n){"use strict";n.d(t,{n:function(){return r.Z}});var r=n(30480),a=n(75160);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"Products")&&n.d(t,{Products:function(){return a.Products}}),n.o(a,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return a.RequirementCategories}}),n.o(a,"RequirementForm")&&n.d(t,{RequirementForm:function(){return a.RequirementForm}}),n.o(a,"Services")&&n.d(t,{Services:function(){return a.Services}}),n.o(a,"Sidebar")&&n.d(t,{Sidebar:function(){return a.Sidebar}}),n.o(a,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return a.SidebarAppWrapper}}),n.o(a,"SigninForm")&&n.d(t,{SigninForm:function(){return a.SigninForm}}),n.o(a,"SignupForm")&&n.d(t,{SignupForm:function(){return a.SignupForm}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},75160:function(){},47768:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(67294),a=n(2544),i=n(32929),o=n(52220);const l=o.default.div`
  margin: 0 auto;
  ${({theme:{colors:e,spacings:t}})=>o.css`
    background-color: ${e.neutral[2]};
    padding-bottom: ${t.s9};
  `}
`,u=(0,o.default)(a.Typography)`
  && {
    margin: 0 auto;
    ${({theme:{spacings:e,breakpoints:t}})=>o.css`
      padding-top: ${e.s9};

      @media screen and (max-width: ${t[2]}) {
        text-align: center;
        max-width: 95%;
      }
    `}
  }
`,s=o.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${({theme:{spacings:e,breakpoints:t}})=>o.css`
    padding: ${e.s9} 0;
    margin: 0 auto;

    @media screen and (max-width: ${t[2]}) {
      grid-template-columns: repeat(2, 1fr);
      padding: ${e.s5} 0;
      grid-gap: ${e.s4};
      max-width: 90%;
    }

    @media screen and (max-width: ${t[1]}) {
      display: block;
    }
  `}
`,c=o.default.div`
  ${({theme:{spacings:e,breakpoints:t}})=>o.css`
    margin-top: ${e.s11};
    padding-right: ${e.s11};
    @media screen and (max-width: ${t[1]}) {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      padding-right: 0;
    }
  `}
`,d=(0,o.default)(a.Typography)`
  && {
    ${({theme:{spacings:e}})=>o.css`
      padding-top: ${e.s3};
    `}
  }
`,m=(0,o.default)(a.Typography)`
  && {
    ${({theme:{spacings:e}})=>o.css`
      padding-top: ${e.s3};
    `}
  }
`;var p=n(34578),f=[{iconName:p.IUk,title:"Quotation Generator",description:"Create attractive quotations for your client instantly and never miss a chance of business opportunity."},{iconName:p.qdz,title:"Purchase Order Form",description:"Process purchase orders within seconds to refill your inventory."},{iconName:p.kz$,title:"Proforma Invoice",description:"Consign your best products or services to your customers by generating proforma invoices."},{iconName:p.M_2,title:"GST Invoice Maker",description:"Create and manage unlimited GST invoices in one place. Refrens GST invoice support HSN/SAC, IGST, CGST, SGST."},{iconName:p.wIr,title:"Expense Management Software",description:"Track and manage all your expenses with an online expense report."},{iconName:p.jSk,title:"Multiple business & Team Members",description:"Add multiple businesses in a single Refrens account. Add multiple team members and users to handle your business invoicing."},{iconName:p.Sr5,title:"Client Management",description:"Now manage all your client and vendor information in one place without any hassle."},{iconName:p.yr7,title:"Easy access to essential reports",description:"Easily download payment report, client report, invoice report, TDS report, and GST report within seconds. Reports can be downloaded client wise and date wise as well. Download as CSV or PDF."},{iconName:p.HHJ,title:"Bulk Upload",description:"You can also upload bulk invoices and clients which eventually saves your time and money both."},{iconName:p.zID,title:"Build Your Brand",description:"Add your own logo and signature. No Watermark."},{iconName:p.JxH,title:"Simple Payment Gateway",description:"Easy to use payment gateway with multiple options."},{iconName:p.P9Q,title:"Easy Customization",description:"Customize your invoices with multiple currencies and payment options."},{iconName:p.V5g,title:"Track Invoices",description:"Track your customer invoices and get paid faster with Refrens invoice software."},{iconName:p.K_N,title:"Easy Access Anywhere",description:"Easy to use dashboard for mobile and desktop. Get email alerts in real time."},{iconName:p.$Bi,title:"Live Support",description:"We are always available to support our customer via email support (care@refrens.com) and also via live chat support."}];const h=e=>{const{title:t,products:n=[]}=e;return r.createElement(l,null,r.createElement(i.W,null,r.createElement(u,{size:"h1"},t),r.createElement(s,null,!n.length&&r.createElement(r.Fragment,null,f.map((({title:e,iconName:t,description:n})=>r.createElement(c,{key:e},r.createElement(t,{size:48,color:"#000"}),r.createElement(d,{size:"h5",bold:!0},e),r.createElement(m,{size:"h5"},n))))),n.map((({title:e,image:t,description:n})=>r.createElement(c,{key:e},!!t&&r.createElement(a.Image,Object.assign({},t,{width:48,height:48})),r.createElement(d,{size:"h5",bold:!0},e),!!n&&r.createElement(m,{size:"h5"},n)))))))};h.defaultProps={title:"Everything Your Business Need to Grow Rapidly"};var g=h},38642:function(e,t,n){"use strict";n.d(t,{Q:function(){return r.Z}});var r=n(47768),a=n(66922);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return a.RequirementCategories}}),n.o(a,"RequirementForm")&&n.d(t,{RequirementForm:function(){return a.RequirementForm}}),n.o(a,"Services")&&n.d(t,{Services:function(){return a.Services}}),n.o(a,"Sidebar")&&n.d(t,{Sidebar:function(){return a.Sidebar}}),n.o(a,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return a.SidebarAppWrapper}}),n.o(a,"SigninForm")&&n.d(t,{SigninForm:function(){return a.SigninForm}}),n.o(a,"SignupForm")&&n.d(t,{SignupForm:function(){return a.SignupForm}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},66922:function(){},58929:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var r=n(67294),a=n(45697),i=n.n(a);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e){var t,n;function a(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(l(t)),t.handleErrored=t.handleErrored.bind(l(t)),t.handleChange=t.handleChange.bind(l(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(l(t)),t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},i.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},i.executeAsync=function(){var e=this;return new Promise((function(t,n){e.executionResolve=t,e.executionReject=n,e.execute()}))},i.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},i.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},i.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},i.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return r.createElement("div",o({},t,{ref:this.handleRecaptchaRef}))},a}(r.Component);u.displayName="ReCAPTCHA",u.propTypes={sitekey:i().string.isRequired,onChange:i().func,grecaptcha:i().object,theme:i().oneOf(["dark","light"]),type:i().oneOf(["image","audio"]),tabindex:i().number,onExpired:i().func,onErrored:i().func,size:i().oneOf(["compact","normal","invisible"]),stoken:i().string,hl:i().string,badge:i().oneOf(["bottomright","bottomleft","inline"])},u.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var s=n(8679),c=n.n(s);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m={},p=0;var f="onloadcallback";var h,g,y=(h=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google-test.com")+"/recaptcha/api.js?onload="+f+"&render=explicit"},g=(g={callbackName:f,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",n=function(t){var n,a;function i(e,n){var r;return(r=t.call(this,e,n)||this).state={},r.__scriptURL="",r}a=t,(n=i).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a;var o=i.prototype;return o.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+p++),this.__scriptLoaderID},o.setupScriptURL=function(){return this.__scriptURL="function"===typeof h?h():h,this.__scriptURL},o.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},o.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=m[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[g.callbackName]},o.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),r=g,a=r.globalName,i=r.callbackName,o=r.scriptId;if(a&&"undefined"!==typeof window[a]&&(m[t]={loaded:!0,observers:{}}),m[t]){var l=m[t];return l&&(l.loaded||l.errored)?void this.asyncScriptLoaderHandleLoad(l):void(l.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var u={};u[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},m[t]={loaded:!1,observers:u};var s=document.createElement("script");for(var c in s.src=t,s.async=!0,g.attributes)s.setAttribute(c,g.attributes[c]);o&&(s.id=o);var d=function(e){if(m[t]){var n=m[t].observers;for(var r in n)e(n[r])&&delete n[r]}};i&&"undefined"!==typeof window&&(window[i]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),s.onload=function(){var e=m[t];e&&(e.loaded=!0,d((function(t){return!i&&(t(e),!0)})))},s.onerror=function(){var e=m[t];e&&(e.errored=!0,d((function(t){return t(e),!0})))},document.body.appendChild(s)},o.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===g.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var r=m[e];r&&(delete r.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===g.removeOnUnmount&&delete m[e])},o.render=function(){var t=g.globalName,n=this.props,a=(n.asyncScriptOnLoad,n.forwardedRef),i=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(i[t]="undefined"!==typeof window[t]?window[t]:void 0),i.ref=a,(0,r.createElement)(e,i)},i}(r.Component),a=(0,r.forwardRef)((function(e,t){return(0,r.createElement)(n,d({},e,{forwardedRef:t}))}));return a.displayName="AsyncScriptLoader("+t+")",a.propTypes={asyncScriptOnLoad:i().func},c()(a,e)})(u),v=n(89211),b=n(6411),E=n(26316);var S=(0,r.forwardRef)(((e,t)=>{const{onChange:n,wrapperProps:a={}}=e,[i,o]=(0,v.Z)(!1),l=(0,r.useRef)(null),u=(0,r.useRef)(null),{config:{recaptcha:s}}=(0,E.qK)(),c=()=>{u.current?u.current.execute():l.current&&(l.current.reset(),n(null))};(0,r.useEffect)(c,[i]),(0,r.useImperativeHandle)(t,(()=>({onError:e=>(c(),"ReCaptchaTokenInvalid"===(null===e||void 0===e?void 0:e.message)||"No token provided"===(null===e||void 0===e?void 0:e.message)?(i||o(!0),Promise.resolve()):Promise.reject(e))})));const d=e=>{if(e){return n(i?{"x-refrens-captcha":e}:{"x-refrens-invisible-captcha":e})}return n(null)};return i?r.createElement(b.xu,Object.assign({},a),r.createElement(y,{key:"visiblerecaptcha",ref:l,size:"normal",sitekey:s.visibleSitekey,onChange:d})):r.createElement(y,{key:"invisiblerecaptcha",ref:u,size:"invisible",sitekey:s.invisibleSitekey,onChange:d,badge:"bottomleft"})}))},63756:function(e,t,n){"use strict";var r=n(1968);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"RequirementCategories")&&n.d(t,{RequirementCategories:function(){return r.RequirementCategories}}),n.o(r,"RequirementForm")&&n.d(t,{RequirementForm:function(){return r.RequirementForm}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},1968:function(){},1717:function(e,t,n){"use strict";n.d(t,{Z:function(){return de}});var r=n(70655),a=n(67294),i=n(2544),o=n(34578),l=n(6411),u=n(82795),s=n.n(u),c=n(23279),d=n.n(c);function m(e){return Array.isArray?Array.isArray(e):"[object Array]"===b(e)}function p(e){return"string"===typeof e}function f(e){return"number"===typeof e}function h(e){return!0===e||!1===e||function(e){return g(e)&&null!==e}(e)&&"[object Boolean]"==b(e)}function g(e){return"object"===typeof e}function y(e){return void 0!==e&&null!==e}function v(e){return!e.trim().length}function b(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const E=Object.prototype.hasOwnProperty;class S{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach((e=>{let n=C(e);t+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight})),this._keys.forEach((e=>{e.weight/=t}))}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function C(e){let t=null,n=null,r=null,a=1;if(p(e)||m(e))r=e,t=$(e),n=F(e);else{if(!E.call(e,"name"))throw new Error((e=>`Missing ${e} property in key`)("name"));const i=e.name;if(r=i,E.call(e,"weight")&&(a=e.weight,a<=0))throw new Error((e=>`Property 'weight' in key '${e}' must be a positive integer`)(i));t=$(i),n=F(i)}return{path:t,id:n,weight:a,src:r}}function $(e){return m(e)?e:e.split(".")}function F(e){return m(e)?e.join("."):e}var P={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,...{useExtendedSearch:!1,getFn:function(e,t){let n=[],r=!1;const a=(e,t,i)=>{if(y(e))if(t[i]){const o=e[t[i]];if(!y(o))return;if(i===t.length-1&&(p(o)||f(o)||h(o)))n.push(function(e){return null==e?"":function(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)}(o));else if(m(o)){r=!0;for(let e=0,n=o.length;e<n;e+=1)a(o[e],t,i+1)}else t.length&&a(o,t,i+1)}else n.push(e)};return a(e,p(t)?t.split("."):t,0),r?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1}};const x=/[^ ]+/g;class k{constructor({getFn:e=P.getFn}={}){this.norm=function(e=3){const t=new Map,n=Math.pow(10,e);return{get(e){const r=e.match(x).length;if(t.has(r))return t.get(r);const a=1/Math.sqrt(r),i=parseFloat(Math.round(a*n)/n);return t.set(r,i),i},clear(){t.clear()}}}(3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach(((e,t)=>{this._keysMap[e.id]=t}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,p(this.docs[0])?this.docs.forEach(((e,t)=>{this._addString(e,t)})):this.docs.forEach(((e,t)=>{this._addObject(e,t)})),this.norm.clear())}add(e){const t=this.size();p(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!y(e)||v(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach(((t,r)=>{let a=this.getFn(e,t.path);if(y(a))if(m(a)){let e=[];const t=[{nestedArrIndex:-1,value:a}];for(;t.length;){const{nestedArrIndex:n,value:r}=t.pop();if(y(r))if(p(r)&&!v(r)){let t={v:r,i:n,n:this.norm.get(r)};e.push(t)}else m(r)&&r.forEach(((e,n)=>{t.push({nestedArrIndex:n,value:e})}))}n.$[r]=e}else if(!v(a)){let e={v:a,n:this.norm.get(a)};n.$[r]=e}})),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function T(e,t,{getFn:n=P.getFn}={}){const r=new k({getFn:n});return r.setKeys(e.map(C)),r.setSources(t),r.create(),r}function w(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:a=P.distance,ignoreLocation:i=P.ignoreLocation}={}){const o=t/e.length;if(i)return o;const l=Math.abs(r-n);return a?o+l/a:l?1:o}const L=32;function A(e,t,n,{location:r=P.location,distance:a=P.distance,threshold:i=P.threshold,findAllMatches:o=P.findAllMatches,minMatchCharLength:l=P.minMatchCharLength,includeMatches:u=P.includeMatches,ignoreLocation:s=P.ignoreLocation}={}){if(t.length>L)throw new Error(`Pattern length exceeds max of ${L}.`);const c=t.length,d=e.length,m=Math.max(0,Math.min(r,d));let p=i,f=m;const h=l>1||u,g=h?Array(d):[];let y;for(;(y=e.indexOf(t,f))>-1;){let e=w(t,{currentLocation:y,expectedLocation:m,distance:a,ignoreLocation:s});if(p=Math.min(e,p),f=y+c,h){let e=0;for(;e<c;)g[y+e]=1,e+=1}}f=-1;let v=[],b=1,E=c+d;const S=1<<c-1;for(let $=0;$<c;$+=1){let r=0,i=E;for(;r<i;){w(t,{errors:$,currentLocation:m+i,expectedLocation:m,distance:a,ignoreLocation:s})<=p?r=i:E=i,i=Math.floor((E-r)/2+r)}E=i;let l=Math.max(1,m-i+1),u=o?d:Math.min(m+i,d)+c,y=Array(u+2);y[u+1]=(1<<$)-1;for(let o=u;o>=l;o-=1){let r=o-1,i=n[e.charAt(r)];if(h&&(g[r]=+!!i),y[o]=(y[o+1]<<1|1)&i,$&&(y[o]|=(v[o+1]|v[o])<<1|1|v[o+1]),y[o]&S&&(b=w(t,{errors:$,currentLocation:r,expectedLocation:m,distance:a,ignoreLocation:s}),b<=p)){if(p=b,f=r,f<=m)break;l=Math.max(1,2*m-f)}}if(w(t,{errors:$+1,currentLocation:m,expectedLocation:m,distance:a,ignoreLocation:s})>p)break;v=y}const C={isMatch:f>=0,score:Math.max(.001,b)};if(h){const e=function(e=[],t=P.minMatchCharLength){let n=[],r=-1,a=-1,i=0;for(let o=e.length;i<o;i+=1){let o=e[i];o&&-1===r?r=i:o||-1===r||(a=i-1,a-r+1>=t&&n.push([r,a]),r=-1)}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n}(g,l);e.length?u&&(C.indices=e):C.isMatch=!1}return C}function R(e){let t={};for(let n=0,r=e.length;n<r;n+=1){const a=e.charAt(n);t[a]=(t[a]||0)|1<<r-n-1}return t}class N{constructor(e,{location:t=P.location,threshold:n=P.threshold,distance:r=P.distance,includeMatches:a=P.includeMatches,findAllMatches:i=P.findAllMatches,minMatchCharLength:o=P.minMatchCharLength,isCaseSensitive:l=P.isCaseSensitive,ignoreLocation:u=P.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:r,includeMatches:a,findAllMatches:i,minMatchCharLength:o,isCaseSensitive:l,ignoreLocation:u},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const s=(e,t)=>{this.chunks.push({pattern:e,alphabet:R(e),startIndex:t})},c=this.pattern.length;if(c>L){let e=0;const t=c%L,n=c-t;for(;e<n;)s(this.pattern.substr(e,L),e),e+=L;if(t){const e=c-L;s(this.pattern.substr(e),e)}}else s(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return n&&(t.indices=[[0,e.length-1]]),t}const{location:r,distance:a,threshold:i,findAllMatches:o,minMatchCharLength:l,ignoreLocation:u}=this.options;let s=[],c=0,d=!1;this.chunks.forEach((({pattern:t,alphabet:m,startIndex:p})=>{const{isMatch:f,score:h,indices:g}=A(e,t,m,{location:r+p,distance:a,threshold:i,findAllMatches:o,minMatchCharLength:l,includeMatches:n,ignoreLocation:u});f&&(d=!0),c+=h,f&&g&&(s=[...s,...g])}));let m={isMatch:d,score:d?c/this.chunks.length:1};return d&&n&&(m.indices=s),m}}class D{constructor(e){this.pattern=e}static isMultiMatch(e){return I(e,this.multiRegex)}static isSingleMatch(e){return I(e,this.singleRegex)}search(){}}function I(e,t){const n=e.match(t);return n?n[1]:null}class M extends D{constructor(e,{location:t=P.location,threshold:n=P.threshold,distance:r=P.distance,includeMatches:a=P.includeMatches,findAllMatches:i=P.findAllMatches,minMatchCharLength:o=P.minMatchCharLength,isCaseSensitive:l=P.isCaseSensitive,ignoreLocation:u=P.ignoreLocation}={}){super(e),this._bitapSearch=new N(e,{location:t,threshold:n,distance:r,includeMatches:a,findAllMatches:i,minMatchCharLength:o,isCaseSensitive:l,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class B extends D{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,n=0;const r=[],a=this.pattern.length;for(;(t=e.indexOf(this.pattern,n))>-1;)n=t+a,r.push([t,n-1]);const i=!!r.length;return{isMatch:i,score:i?0:1,indices:r}}}const q=[class extends D{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},B,class extends D{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},class extends D{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends D{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends D{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}},class extends D{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const t=-1===e.indexOf(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},M],O=q.length,_=/ +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;const z=new Set([M.type,B.type]);class H{constructor(e,{isCaseSensitive:t=P.isCaseSensitive,includeMatches:n=P.includeMatches,minMatchCharLength:r=P.minMatchCharLength,ignoreLocation:a=P.ignoreLocation,findAllMatches:i=P.findAllMatches,location:o=P.location,threshold:l=P.threshold,distance:u=P.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:n,minMatchCharLength:r,findAllMatches:i,ignoreLocation:a,location:o,threshold:l,distance:u},this.pattern=t?e:e.toLowerCase(),this.query=function(e,t={}){return e.split("|").map((e=>{let n=e.trim().split(_).filter((e=>e&&!!e.trim())),r=[];for(let a=0,i=n.length;a<i;a+=1){const e=n[a];let i=!1,o=-1;for(;!i&&++o<O;){const n=q[o];let a=n.isMultiMatch(e);a&&(r.push(new n(a,t)),i=!0)}if(!i)for(o=-1;++o<O;){const n=q[o];let a=n.isSingleMatch(e);if(a){r.push(new n(a,t));break}}}return r}))}(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let a=0,i=[],o=0;for(let l=0,u=t.length;l<u;l+=1){const r=t[l];i.length=0,a=0;for(let t=0,l=r.length;t<l;t+=1){const l=r[t],{isMatch:u,indices:s,score:c}=l.search(e);if(!u){o=0,a=0,i.length=0;break}if(a+=1,o+=c,n){const e=l.constructor.type;z.has(e)?i=[...i,...s]:i.push(s)}}if(a){let e={isMatch:!0,score:o/a};return n&&(e.indices=i),e}}return{isMatch:!1,score:1}}}const W=[];function V(e,t){for(let n=0,r=W.length;n<r;n+=1){let r=W[n];if(r.condition(e,t))return new r(e,t)}return new N(e,t)}const j="$and",G="$or",K="$path",Z="$val",U=e=>!(!e[j]&&!e[G]),Y=e=>({[j]:Object.keys(e).map((t=>({[t]:e[t]})))});function J(e,t,{auto:n=!0}={}){const r=e=>{let a=Object.keys(e);const i=(e=>!!e[K])(e);if(!i&&a.length>1&&!U(e))return r(Y(e));if((e=>!m(e)&&g(e)&&!U(e))(e)){const r=i?e[K]:a[0],o=i?e[Z]:e[r];if(!p(o))throw new Error((e=>`Invalid value for key ${e}`)(r));const l={keyId:F(r),pattern:o};return n&&(l.searcher=V(o,t)),l}let o={children:[],operator:a[0]};return a.forEach((t=>{const n=e[t];m(n)&&n.forEach((e=>{o.children.push(r(e))}))})),o};return U(e)||(e=Y(e)),r(e)}function Q(e,t){const n=e.matches;t.matches=[],y(n)&&n.forEach((e=>{if(!y(e.indices)||!e.indices.length)return;const{indices:n,value:r}=e;let a={indices:n,value:r};e.key&&(a.key=e.key.src),e.idx>-1&&(a.refIndex=e.idx),t.matches.push(a)}))}function X(e,t){t.score=e.score}class ee{constructor(e,t={},n){this.options={...P,...t},this.options.useExtendedSearch,this._keyStore=new S(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof k))throw new Error("Incorrect 'index' type");this._myIndex=t||T(this.options.keys,this._docs,{getFn:this.options.getFn})}add(e){y(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=(()=>!1)){const t=[];for(let n=0,r=this._docs.length;n<r;n+=1){const a=this._docs[n];e(a,n)&&(this.removeAt(n),n-=1,r-=1,t.push(a))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:a,sortFn:i,ignoreFieldNorm:o}=this.options;let l=p(e)?p(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return function(e,{ignoreFieldNorm:t=P.ignoreFieldNorm}){e.forEach((e=>{let n=1;e.matches.forEach((({key:e,norm:r,score:a})=>{const i=e?e.weight:null;n*=Math.pow(0===a&&i?Number.EPSILON:a,(i||1)*(t?1:r))})),e.score=n}))}(l,{ignoreFieldNorm:o}),a&&l.sort(i),f(t)&&t>-1&&(l=l.slice(0,t)),function(e,t,{includeMatches:n=P.includeMatches,includeScore:r=P.includeScore}={}){const a=[];return n&&a.push(Q),r&&a.push(X),e.map((e=>{const{idx:n}=e,r={item:t[n],refIndex:n};return a.length&&a.forEach((t=>{t(e,r)})),r}))}(l,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){const t=V(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach((({v:e,i:n,n:a})=>{if(!y(e))return;const{isMatch:i,score:o,indices:l}=t.searchIn(e);i&&r.push({item:e,idx:n,matches:[{score:o,value:e,norm:a,indices:l}]})})),r}_searchLogical(e){const t=J(e,this.options),n=(e,t,r)=>{if(!e.children){const{keyId:n,searcher:a}=e,i=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(t,n),searcher:a});return i&&i.length?[{idx:r,item:t,matches:i}]:[]}switch(e.operator){case j:{const a=[];for(let i=0,o=e.children.length;i<o;i+=1){const o=e.children[i],l=n(o,t,r);if(!l.length)return[];a.push(...l)}return a}case G:{const a=[];for(let i=0,o=e.children.length;i<o;i+=1){const o=e.children[i],l=n(o,t,r);if(l.length){a.push(...l);break}}return a}}},r=this._myIndex.records,a={},i=[];return r.forEach((({$:e,i:r})=>{if(y(e)){let o=n(t,e,r);o.length&&(a[r]||(a[r]={idx:r,item:e,matches:[]},i.push(a[r])),o.forEach((({matches:e})=>{a[r].matches.push(...e)})))}})),i}_searchObjectList(e){const t=V(e,this.options),{keys:n,records:r}=this._myIndex,a=[];return r.forEach((({$:e,i:r})=>{if(!y(e))return;let i=[];n.forEach(((n,r)=>{i.push(...this._findMatches({key:n,value:e[r],searcher:t}))})),i.length&&a.push({idx:r,item:e,matches:i})})),a}_findMatches({key:e,value:t,searcher:n}){if(!y(t))return[];let r=[];if(m(t))t.forEach((({v:t,i:a,n:i})=>{if(!y(t))return;const{isMatch:o,score:l,indices:u}=n.searchIn(t);o&&r.push({score:l,key:e,value:t,idx:a,norm:i,indices:u})}));else{const{v:a,n:i}=t,{isMatch:o,score:l,indices:u}=n.searchIn(a);o&&r.push({score:l,key:e,value:a,norm:i,indices:u})}return r}}ee.version="6.4.6",ee.createIndex=T,ee.parseIndex=function(e,{getFn:t=P.getFn}={}){const{keys:n,records:r}=e,a=new k({getFn:t});return a.setKeys(n),a.setIndexRecords(r),a},ee.config=P,ee.parseQuery=J,function(...e){W.push(...e)}(H);var te=ee,ne=n(52019),re=n(98700),ae=n(52220);const ie=(0,ae.default)(i.Card)`
  && {
    > div {
      display: flex;
      flex-wrap: wrap;
      max-width: 900px;
      margin: auto; //to centre align the card
      ${({theme:{spacings:e,screens:t}})=>ae.css`
        margin-top: ${e.s5};
        padding: ${e.s6} ${e.s11};

        @media screen and (${t.lte.xs}) {
          padding: ${e.s6} ${e.s4};
        }
      `}
    }
  }
`,oe=(0,ae.default)(i.Typography).attrs({bold:!0,size:"h4"})`
  && {
    white-space: pre;
    ${({theme:{spacings:e}})=>ae.css`
      margin-bottom: ${e.s2};
    `}
  }
`,le=(0,ae.default)(i.Typography)`
  && {
    max-width: 450px;
    text-align: center;
    ${({theme:{spacings:e}})=>ae.css`
      && {
        margin: ${e.s9} auto ${e.s5};
        padding: 0 ${e.s4};
      }
    `}
  }
`;le.defaultProps={size:"h4"};const ue=ae.default.a`
  ${({theme:{spacings:e,breakpoints:t,colors:n}})=>ae.css`
    cursor: pointer;
    padding: ${e.s4};
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    text-align: center;

    :hover {
      background: ${n.neutral[2]};
    }

    @media screen and (min-width: ${t[1]}) {
      width: 25%;
    }
  `}
`,se=(0,ae.default)(i.Input.InputGroup)`
  && {
    text-align: left;
    padding: 0 16px;
    * {
      border: none;
    }
    > div {
      width: 100%;
    }
  }
`,ce=e=>{const{title:t,items:n,datasource:u,onSearch:c,findCategories:m,description:p}=e,f=(0,r._T)(e,["title","items","datasource","onSearch","findCategories","description"]),h=(0,a.useMemo)((()=>n.map((e=>e.displayName))),[n]),g=(0,a.useMemo)((()=>u.map((e=>({label:e.displayName,value:e.urlKey})))),[u]),y=new te(g,{keys:["label"]}),[v,b]=(0,a.useState)(),[E,S]=(0,a.useState)(g),C=(0,a.useCallback)((()=>{if(v){const e=y.search(v);let t;if(1===e.length){const[{score:n,item:r}]=e;n&&n>.6&&(t=r)}return c(v,t)}return Promise.resolve()}),[v,g]),$=d()((e=>{b(e),m(e).then((e=>S(e))).catch(s())}),500),F=(0,a.useCallback)(((e,t)=>{const n=g.find((e=>e.value===t.value));return c(t.label,n)}),[g]);return a.createElement(re.Z,Object.assign({},f,{alignment:"column"}),a.createElement(l.kC,{mb:"48px",mx:"auto",width:[1,.6,.5],justifyContent:"center",flexDirection:"column",textAlign:"center"},a.createElement(oe,null,t),a.createElement(se,null,a.createElement(i.Typed,{withInput:!0,attr:"value",bindInputFocusEvents:!0,loop:!0,strings:h,outlined:!0,id:"requirement-categories",iconBackground:"#fe3e82",datasource:E,onSelect:F,onChange:e=>$(e.target.value),onEnter:C,size:"large","aria-label":"Search"}),a.createElement(i.Button,{onClick:C,size:"large"},a.createElement(o.olm,{color:"#fff"})))),!!p&&a.createElement(le,null,p),a.createElement(ie,null,n.map((e=>a.createElement(ne.Z,{key:e.urlKey,elisif:{href:e.link.href,as:e.link.as},hrefProps:{href:e.link.href}},a.createElement(ue,{key:e.urlKey},a.createElement(i.Image,Object.assign({},e.icon,{height:48,width:48})),a.createElement(i.Typography,null,e.displayName)))))))};ce.defaultProps={title:"I'm Looking For"};var de=ce},97224:function(e,t,n){"use strict";n.d(t,{O:function(){return r.Z}});var r=n(1717),a=n(65186);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"RequirementForm")&&n.d(t,{RequirementForm:function(){return a.RequirementForm}}),n.o(a,"Services")&&n.d(t,{Services:function(){return a.Services}}),n.o(a,"Sidebar")&&n.d(t,{Sidebar:function(){return a.Sidebar}}),n.o(a,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return a.SidebarAppWrapper}}),n.o(a,"SigninForm")&&n.d(t,{SigninForm:function(){return a.SigninForm}}),n.o(a,"SignupForm")&&n.d(t,{SignupForm:function(){return a.SignupForm}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},65186:function(){},41385:function(e,t,n){"use strict";n.d(t,{Z:function(){return H}});var r=n(70655),a=n(67294),i=n(14516),o=n(2544),l=n(93002),u=n(89211),s=n(6411),c=n(34578),d=n(52019),m=n(84388),p=n(98700),f=n(26316),h=n(52220);const g=h.default.div``,y=(0,h.default)(o.Card)`
  margin: auto; //to centre align the card
  max-width: 600px;
  padding: 32px;
  ${({theme:{spacings:e,screens:t}})=>h.css`
    @media screen and (${t.lte.xs}) {
      padding-left: ${e.s6};
      padding-right: ${e.s6};
    }
    @media screen and (${t.lte.xxs}) {
      padding-left: ${e.s4};
      padding-right: ${e.s4};
    }
    @media (${t.gte.lg}) {
      min-width: 600px;
    }
  `}
`,v=(0,h.default)(o.Typography)`
  text-align: center;
  ${({theme:{screens:e,sizes:t}})=>h.css`
    @media screen and (${e.lte.sm}) {
      font-size: ${t.h3};
      font-weight: lighter;
    }
  `}
`,b=(0,h.default)(o.Typography)`
  && {
    * {
      text-align: center;
      ${({theme:{colors:e}})=>h.css`
        color: ${e.neutral[5]};
      `}
    }
    a {
      ${({theme:{colors:e}})=>h.css`
        color: ${e.secondary[2]};
      `}
    }
  }
`,E=h.default.div`
  ${({theme:{spacings:e}})=>h.css`
    margin: ${e.s6} 0;
  `}
`,S=h.default.div`
  && {
    display: flex;
    ${({primaryInput:e})=>h.css`
      > div:first-child {
        ${"second"===e&&h.css`
          width: 33%;
          min-width: 120px;
        `}
        div {
          border-top-right-radius: 0 !important;
          border-bottom-right-radius: 0 !important;
        }
      }
      > div:last-child {
        ${"first"===e&&h.css`
          width: 33%;
        `}
        div {
          border-top-left-radius: 0 !important;
          border-bottom-left-radius: 0 !important;
        }
      }
    `}
  }
`,C=(0,h.default)(o.Button).attrs({as:"a",anchor:!0})`
  && {
    ${({theme:{spacings:e,colors:t}})=>h.css`
      margin-top: ${e.s2};
      color: ${t.neutral[5]};
    `}
  }
`;S.defaultProps={primaryInput:"second"},v.defaultProps={as:"h3",size:"h3"},g.defaultProps={};var $=n(38674),F=n(58929),P=n(68041),x=n(36968),k=n.n(x),T=n(27361),w=n.n(T),L=n(49345),A=n(48398);const{RC:R}=L,N=(0,r._T)(L,["RC"]);function D(e,t,n){const{__component:r}=e,a=`${t} is required`;let i,o=(0,P.string)().trim().typeError(a);if("form.radio"===r){const{options:t,customInput:n}=e,r={};let a=null;t.forEach((({label:e,value:t,isDefault:n})=>{r[t]=e,n&&(a=t)})),n||(o=(0,A.Ys)(r)),a&&(o=o.default(a),i=a)}if("form.attachment"===r&&(o=(0,A.hJ)((0,P.string)(),0),i=[]),"form.email"===r&&(o=(0,A.Do)().when("phone",((e,t)=>e?t:t.required("Either of email or phone is required")))),"form.phone"===r&&(o=(0,A.Hd)().when("email",((e,t)=>e?t:t.required("Either of email or phone is required")))),"form.select"===r){const{multi:t}=e;o=t?(0,A.hJ)((0,P.string)().trim(),0):(0,P.string)().trim()}if(n&&(o=o.required(a)),"form.currency"===r){const{default:t}=e;o={amount:(0,P.number)().required("Amount is required").min(0,"Please enter a valid amount").default(0),currency:(0,A.Ys)(N).default("INR").required("Currency is required")},i={amount:null===t||void 0===t?void 0:t.amount,currency:(null===t||void 0===t?void 0:t.currency)||"INR"}}return[o,i]}var I=n(82795),M=n.n(I);const{RC:B}=L,q=(0,r._T)(L,["RC"]),O=e=>{const t={USD:"$ USD",INR:"\u20b9 INR",EUR:"\u20ac EUR",RUB:"\u20bd RUB",GBP:"\xa3 GBP",JPY:"\xa5 JPY"};return t[e]?t[e]:e};function _(e){var{input:t,name:n,label:i,required:l,helpText:u,privateS3Props:s}=e,c=(0,r._T)(e,["input","name","label","required","helpText","privateS3Props"]);const{__component:d,withAttachments:m,attachmentKey:p="attachments"}=t;let f=a.createElement(o.Form.Input,{name:n,label:i,required:l,outlined:!0});if("form.text"===d){const{placeholder:e}=t;f=a.createElement(o.Form.Input,Object.assign({name:n,label:i,placeholder:e,required:l,outlined:!0,description:u},c))}if("form.email"===d){const{placeholder:e,disAllowedEmail:r}=t,[s,d]=(0,a.useState)("");f=a.createElement(a.Fragment,null,a.createElement(o.Form.Input,Object.assign({name:n,label:i,placeholder:e,required:l,outlined:!0,description:u,onChange:e=>d(e.target.value)},c)),r===s&&a.createElement(o.Typography,{size:"small",variant:"warn"},"Are you sure you want to give your Email instead of your friend's email."))}if("form.text-area"===d){const{placeholder:e}=t;f=a.createElement(o.Form.Textarea,Object.assign({name:n,rows:5,label:i,placeholder:e,required:l,outlined:!0,description:u},c))}if("form.radio"===d){const{options:e,customInput:r}=t;f=r?a.createElement(o.Form.Autocomplete,Object.assign({direction:"column",name:n,label:i,required:l,datasource:e,withTags:!0,outlined:!0},c)):a.createElement(o.Form.Radio,Object.assign({direction:"column",name:n,label:i,required:l,options:e,size:"medium",outlined:!0},c))}if("form.attachment"===d){const{multiple:e,anchor:r,uploadText:i,variant:u}=t;f=a.createElement(o.Form.Storage,Object.assign({name:n,required:l,multiple:e,uploadParams:s,anchor:r,uploadText:i,variant:u},c))}if("form.select"===d){const{placeholder:e,description:r,options:u,isClearable:s,isCreateable:d,withTags:m,onInputChange:p,multi:h}=t,[g,y]=(0,a.useState)(u);f=a.createElement(o.Form.Select,Object.assign({label:i,description:r,name:n,placeholder:e,isClearable:s,isCreateable:d,withTags:m,options:g,required:l,outlined:!0,onInputChange:e=>{p&&p(e).then(y).catch(M())},isMulti:h},c))}if("form.currency"===d){const{placeholder:e}=t,r=(0,a.useMemo)((()=>Object.keys(q).map((e=>({label:O(e),value:e})))),[]);f=a.createElement(a.Fragment,null,a.createElement(o.Typography,Object.assign({as:"label"},c.labelProps,{style:{marginBottom:"0.5rem"}}),i,l&&a.createElement(o.Typography,{inline:!0,variant:"error"},"*")),a.createElement(S,{outlined:!0},a.createElement(o.Form.Select,Object.assign({name:`${n}.currency`,options:r,outlined:!0,required:l},c)),a.createElement(o.Form.InputNumber,Object.assign({name:`${n}.amount`,placeholder:e,required:l,outlined:!0,min:0},c))))}if("form.phone"===d){const{placeholder:e}=t;f=a.createElement(o.Form.PhoneInput,Object.assign({placeholder:e,description:u,name:n,label:i,required:l,outlined:!0},c))}if("form.checkbox"===d){const{options:e}=t;f=a.createElement(o.Form.CheckboxGroup,Object.assign({direction:"column",name:n,label:i,required:l,options:e,size:"small",outlined:!0,checkBoxGrouplabelProps:{bold:!0,size:"span"}},c))}return a.createElement(a.Fragment,null,f,m&&a.createElement(_,{name:p,privateS3Props:s,input:{multiple:!0,__component:"form.attachment",anchor:!0,uploadText:"Add Attachment",variant:"secondary"},labelProps:{},label:"",_id:""}))}function z({title:e,description:t,footer:n,questions:l,privateS3Props:u,initialValue:m,showRecaptcha:p,landingLink:f,lastStepMeta:h,isLastStep:g,isFirstStep:y,isMultiStep:S,subject:x,isReferBlock:T,onSubmit:L=(()=>{})}){const A=function(e,{subject:t}){return(0,a.useMemo)((()=>{const n={},r={};return e.forEach((e=>{const{name:t,input:a,label:i,required:o=!1}=e,[l,u]=D(a,i,o);if(k()(n,t,l),k()(r,t,u),a.withAttachments){const[e,t]=D({__component:"form.attachment"},"Attachments",!1),i=a.attachmentKey||"attachments";k()(n,i,e),k()(r,i,t)}})),Object.entries(r).forEach((([e,t])=>{if("object"===typeof t&&!Array.isArray(t)){const r=[];Object.prototype.hasOwnProperty.call(t,"email")&&Object.prototype.hasOwnProperty.call(t,"phone")&&r.push(["email","phone"]),k()(n,e,(0,P.object)().shape(w()(n,e),r))}})),t&&Object.prototype.hasOwnProperty.call(r,"subject")&&k()(r,"subject",t),(0,P.object)().shape(n).default(r)}),[e])}(l,{subject:x}),[R,N]=(0,a.useState)(null),I=(0,a.useRef)(),[M,B]=(0,a.useState)(null),q=(0,a.useCallback)(((e,{setSubmitting:t})=>(0,r.mG)(this,void 0,void 0,(function*(){try{yield L(e,R)}catch(n){B((0,$.Z)(n))}t(!1)}))),[L,I,R]),O=(0,a.useCallback)((()=>{(0,i.isBrowser)()&&window.history.back()}),[]),z={initialValues:!T&&m||A.default(),validationSchema:A,onSubmit:q,validateOnMount:!0};return a.createElement(o.Form,{formik:z},a.createElement(v,null,e),t&&a.createElement(b,{dangerouslySetInnerHTML:{__html:t}}),a.createElement(o.Form.Reset,{resetValue:T?{}:m}),l.map(((e,t)=>a.createElement(E,{key:e._id},!!e.sectionTitle&&a.createElement(v,null,e.sectionTitle),!!e.sectionDescription&&a.createElement(b,{dangerouslySetInnerHTML:{__html:e.sectionDescription}}),a.createElement(_,Object.assign({key:e._id},e,{label:`${S?`${t+1}. `:""}${e.label}`,labelProps:{bold:!0,variant:"neutral",size:"span"},privateS3Props:u}))))),p&&a.createElement(F.Z,{onChange:N,ref:I,wrapperProps:{mt:"30px",alignSelf:"center"}}),a.createElement(o.Form.Error,{error:M}),a.createElement(s.kC,{mt:"30px",textAlign:"center",width:1,flexDirection:"column"},a.createElement(o.Form.Button,{size:"large",fullWidth:!0},g?"Submit":"Continue"),y&&!!(null===f||void 0===f?void 0:f.href)&&a.createElement(d.Z,{hrefProps:{href:f.href}},a.createElement(C,null,a.createElement(c.s$$,{size:10}),f.label)),h&&a.createElement(C,{onClick:O},a.createElement(c.s$$,{size:10}),"Go Back To ",h.name),!!n&&a.createElement(s.xu,{width:1,mt:"20px"},a.createElement(b,{dangerouslySetInnerHTML:{__html:n}}))))}var H=(0,a.forwardRef)((function(e,t){var{requirementSteps:n,privateS3Props:h,user:g,onSubmit:v,landingLink:b,name:E,subject:S,withAuth:C,auth:$,headerCTA:F,isReferBlock:P}=e,x=(0,r._T)(e,["requirementSteps","privateS3Props","user","onSubmit","landingLink","name","subject","withAuth","auth","headerCTA","isReferBlock"]);const{config:{requirementHydrationKey:k,urlTokenQuery:T}}=(0,f.qK)(),[w,L]=(0,a.useState)(0),[A,R]=(0,l.Z)({}),[N,D,I]=(0,i.useLocalForage)(k,null),[M,B]=(0,a.useState)(null),[q,O]=(0,u.Z)(!1);(0,i.useBrowserEffect)((()=>{Object.keys(A).length&&D(A)}),[A]),(0,i.useBrowserEffect)((()=>{N&&R(N)}),[!!N]),(0,i.useLazyEffect)((()=>{if(g){const e=n.findIndex((e=>e.questions.some((e=>"contact.name"===e.name))));if(!A[e]){const{name:t,email:n,phone:r}=g;R({[e]:{contact:{name:t,email:n,phone:r}}})}}}),[g]);const _=(0,a.useCallback)(((e,t)=>(0,r.mG)(this,void 0,void 0,(function*(){const r=n.length===w+1;R({[w]:e});const a=[...Object.values(A),e].reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{});if(!$&&r&&C)return O(!0),Promise.resolve(a);const i=yield v(a,{step:w,urlKey:n[w].urlKey,params:n[w].params,recaptchaHeader:t});return L(w+1),r&&(B(i),I()),i}))),[v,w,A,n,C]),H=(0,a.useCallback)(((e,t)=>(0,r.mG)(this,void 0,void 0,(function*(){const r=Object.values(A).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{});r.auth=Object.assign({},e);const a=yield v(r,{step:w,urlKey:n[w].urlKey,params:n[w].params,recaptchaHeader:t});return B(a),I(),O(!1),a}))),[A,n,w,v]),W=(0,a.useMemo)((()=>n.map((({name:e})=>({title:e})))),[n]);(0,a.useImperativeHandle)(t,(()=>({setActiveStep:e=>{L(e)}})),[]);const V=(0,a.useMemo)((()=>{let e="requirements",t="View Your Requirement",n="Manage Requirement",r="Requirement posted successfully";return P&&(e="leads",t="View Your Referral",n="Manage Referrals",r="Referral posted successfully"),{postMessage:r,viewMessage:t,manageMessage:n,requirementHref:g?`/${e}/${null===M||void 0===M?void 0:M._id}`:`/requirements/${null===M||void 0===M?void 0:M._id}?${T}=${null===M||void 0===M?void 0:M.shareId}`}}),[P,!!g,null===M||void 0===M?void 0:M._id,null===M||void 0===M?void 0:M.shareId]);return a.createElement(p.Z,Object.assign({},x,{showHeader:0===w||!!M,headerCTA:M?null:F}),a.createElement(y,null,!M&&a.createElement(a.Fragment,null,W.length>1&&a.createElement(o.Stepper,{steps:W,activeStep:w,centered:!0}),n.map(((e,t)=>a.createElement(s.xu,{width:1,key:e._id,hidden:w!==t},a.createElement(z,Object.assign({},e,{onSubmit:_,privateS3Props:h,initialValue:A[t],activeStep:w,landingLink:b,lastStepMeta:n[w-1],isLastStep:n.length===w+1,isFirstStep:0===w,subject:S,isMultiStep:W.length>1,isReferBlock:P}))))),a.createElement("br",null),W.length>1&&a.createElement(o.Stepper,{steps:W,activeStep:w,centered:!0})),M&&a.createElement(s.kC,{flexDirection:"column",textAlign:"center",alignItems:"center"},a.createElement(c.fU8,{color:"#1bb934",size:75}),a.createElement("br",null),a.createElement(o.Typography,{size:"h3"},V.postMessage),a.createElement(o.Typography,null,"Sit and Relax. We will take care of this now."),a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement(d.Z,{hrefProps:{href:V.requirementHref}},a.createElement(o.Button,{size:"large",as:"a"},V.viewMessage)),!!g&&a.createElement(d.Z,{hrefProps:{href:P?"/leads":"/requirements"}},a.createElement(o.Button,{size:"large",as:"a",anchor:!0,variant:"neutral"},V.manageMessage))))),q&&a.createElement(m.Z,{open:!0,onSubmit:H,onCancel:()=>O(!1)}))}))},50026:function(e,t,n){"use strict";n.d(t,{E:function(){return r.Z}});var r=n(41385),a=n(79425);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"Services")&&n.d(t,{Services:function(){return a.Services}}),n.o(a,"Sidebar")&&n.d(t,{Sidebar:function(){return a.Sidebar}}),n.o(a,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return a.SidebarAppWrapper}}),n.o(a,"SigninForm")&&n.d(t,{SigninForm:function(){return a.SigninForm}}),n.o(a,"SignupForm")&&n.d(t,{SignupForm:function(){return a.SignupForm}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},79425:function(){},98700:function(e,t,n){"use strict";n.d(t,{Z:function(){return $}});var r=n(67294),a=n(2544),i=n(34578),o=n(6411),l=n(94829),u=n(45727),s=n(52019),c=n(52220),d=n(32929);const m=c.default.div`
  background-color: #e3eff8;
  display: flex;
  align-items: center;
  && {
    ${({theme:{spacings:e,screens:t},bg:n,alignment:r})=>c.css`
      && {
        flex-direction: ${r};
        padding-top: ${e.s8};
        padding-bottom: ${e.s8};
        ${n&&c.css`
          background-image: url(${n});
        `}
        ${!n&&c.css`
          ${"\nbackground-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' id='svg80' width='279.17' height='417.53'%3E%3Cdefs id='defs74'%3E%3CclipPath id='clip-path' transform='translate(826.55 421.7)'%3E%3Cpath class='cls-1' d='M0 0h279.17v417.53H0z' id='path2'/%3E%3C/clipPath%3E%3Cpattern id='New_Pattern' data-name='New Pattern' x='826.55' y='421.7' width='276.29' height='424.57' patternUnits='userSpaceOnUse'%3E%3Cpath class='cls-1' d='M0 0h276.29v424.57H0z' id='path5'/%3E%3Cg id='Group_2418' data-name='Group 2418'%3E%3Cpath class='cls-2' d='M119.61 187.41l47.34 7.95 7.95-47.34-47.34-7.95-7.95 47.34z' id='Rectangle_1233' data-name='Rectangle 1233'/%3E%3Cg id='Group_2426' data-name='Group 2426'%3E%3Cpath id='Path_1883' data-name='Path 1883' class='cls-3' d='M161 165.28a10.53 10.53 0 01-4.13 20.64l-26.43-4.44a8.61 8.61 0 011.94-17.09 9.71 9.71 0 01.13-1 14.36 14.36 0 0128.5 1.89z'/%3E%3Cpath id='Path_1884' data-name='Path 1884' class='cls-3' d='M153.57 167.14l-9 6.4a.54.54 0 01-.76-.12l-3-4.27'/%3E%3C/g%3E%3C/g%3E%3Cg id='Group_2419' data-name='Group 2419'%3E%3Cpath class='cls-2' d='M146.81 289.69l47.33 7.95 7.95-47.34-47.33-7.95-7.95 47.34z' id='Rectangle_1234' data-name='Rectangle 1234'/%3E%3Cg id='Group_2428' data-name='Group 2428'%3E%3Cg id='Group_2399' data-name='Group 2399'%3E%3Cg id='Group_2398' data-name='Group 2398'%3E%3Cpath id='Path_1866' data-name='Path 1866' class='cls-3' d='M158 274.38a5.42 5.42 0 004.58 5c.83.14 3.86.2 4.58-2.32 1.51-5.28-7.72-4.06-7.3-8.54.24-2.55 2.89-3.13 4.89-2.79 2.21.37 3.74 1.91 3.64 4'/%3E%3Cpath id='Line_304' data-name='Line 304' class='cls-3' d='M161.92 283.12l3.51-20.92'/%3E%3C/g%3E%3Cpath id='Path_1867' data-name='Path 1867' class='cls-3' d='M194.72 268.88l-4.2 25-3.28 1.14a2.27 2.27 0 01-2.2-.37l-1.76-1.38a2.27 2.27 0 00-2.2-.37l-2.1.73a2.29 2.29 0 01-2.22-.37l-1.76-1.34a2.33 2.33 0 00-2.24-.37l-2.08.73a2.31 2.31 0 01-2.22-.37l-1.72-1.37a2.29 2.29 0 00-2.22-.38l-2.05.74a2.31 2.31 0 01-2.22-.37l-1.69-1.37a2.39 2.39 0 00-2.27-.38l-2.05.74a2.3 2.3 0 01-2.22-.37l-2.68-2.15 6.33-37.7.61-3.64 1.7-.61 1.6-.55a2.2 2.2 0 012.19.37l1.77 1.37a2.22 2.22 0 002.2.37l2.1-.73a2.27 2.27 0 012.21.38l1.7 1.36a2.32 2.32 0 002.25.38l2.05-.74a2.34 2.34 0 012.25.38L180 249a2.27 2.27 0 001.86.47'/%3E%3C/g%3E%3Cg id='Group_2427' data-name='Group 2427'%3E%3Ccircle id='Ellipse_368' data-name='Ellipse 368' class='cls-3' cx='185.89' cy='260.75' r='11.99'/%3E%3Cpath id='Path_1885' data-name='Path 1885' class='cls-3' d='M190.11 267.36l-4.31-6.05 1.19-7.08'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cpath id='Rectangle_1234-2' data-name='Rectangle 1234-2' class='cls-3' d='M172.73 12.46a22.85 22.85 0 00-12.91 29.65A22.86 22.86 0 00189.47 55a22.87 22.87 0 0012.91-29.66 22.87 22.87 0 00-29.65-12.91z'/%3E%3Cpath id='Path_5208' data-name='Path 5208' class='cls-5' d='M182.65 49.12a1.19 1.19 0 00.84-.18 1.17 1.17 0 00.31-1.6l-7.92-11.11 3 .5a7 7 0 007.64-4.36l.09-.23 1.81.31a1.17 1.17 0 001.33-1 1.15 1.15 0 00-.94-1.32l-1.81-.26v-.24a7 7 0 00-.81-3l-.29-.53 3.51.58a1.14 1.14 0 001.32-.94 1.16 1.16 0 00-.94-1.33l-14.31-2.4a1.15 1.15 0 00-.38 2.27l5.72 1a4.65 4.65 0 013.79 3.78l.07.42-10.17-1.71a1.15 1.15 0 00-.41 2.23l10.17 1.7-.2.38a4.65 4.65 0 01-4.82 2.33l-5.72-1a1.15 1.15 0 00-1.13 1.8l9.51 13.36a1.18 1.18 0 00.74.45z'/%3E%3Cg id='Group_2415' data-name='Group 2415'%3E%3Cpath class='cls-2' d='M11.07 209.74l47.34 7.95 7.95-47.34-47.34-7.95-7.95 47.34z' id='Rectangle_1230' data-name='Rectangle 1230'/%3E%3Cg id='Group_2421' data-name='Group 2421'%3E%3Cg id='Layer_1' data-name='Layer 1'%3E%3Cpath id='Path_1864' data-name='Path 1864' class='cls-3' d='M56.83 195.68l-2.35 14a6.26 6.26 0 01-7.22 5.14l-28.85-4.84a6.28 6.28 0 01-5.14-7.23l5.54-33a6.28 6.28 0 017.19-5.16l28.86 4.85a6.26 6.26 0 015.14 7.22l-3.19 19z'/%3E%3C/g%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cpath id='Path_1888' data-name='Path 1888' class='cls-3' d='M38.66 177.78a.56.56 0 00-.76.24l-3.63 7a.55.55 0 01-.59.29L25.94 184a.55.55 0 00-.49.15.57.57 0 000 .8l5.5 5.6a.56.56 0 01.09.66l-3.62 6.95a.56.56 0 000 .52.58.58 0 00.77.26l7-3.5a.58.58 0 01.66.11l5.5 5.6a.56.56 0 00.49.16.57.57 0 00.48-.64l-1.16-7.76a.58.58 0 01.31-.59l7-3.5a.57.57 0 00.31-.41.58.58 0 00-.47-.66l-7.73-1.29a.56.56 0 01-.47-.48L39 178.2a.53.53 0 00-.34-.42z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg id='Group_2413' data-name='Group 2413'%3E%3Cpath class='cls-2' d='M62.05 394.92l41.08 6.89 6.9-41.07-41.08-6.9-6.9 41.08z' id='Rectangle_1229' data-name='Rectangle 1229'/%3E%3Cg id='Group_2414' data-name='Group 2414'%3E%3Cpath id='Path_1877' data-name='Path 1877' class='cls-3' d='M106.19 369.25l1.32-7.86-19.28 14.19-3.78-4.58-18.88 13.49'/%3E%3Cpath id='Line_306' data-name='Line 306' stroke-width='2' stroke-linecap='round' stroke='%236b8596' fill='none' d='M99.2 359.8l8.33 1.4'/%3E%3Cpath id='Line_307' data-name='Line 307' class='cls-3' d='M66.3 394.48l.85-5.04'/%3E%3Cpath id='Line_308' data-name='Line 308' class='cls-3' d='M74.2 395.81l2-11.94'/%3E%3Cpath id='Line_309' data-name='Line 309' class='cls-3' d='M82.09 397.14l2.95-17.56'/%3E%3Cpath id='Line_310' data-name='Line 310' class='cls-3' d='M89.99 398.46l3.48-20.72'/%3E%3Cpath id='Line_311' data-name='Line 311' class='cls-3' d='M97.89 399.79l4.74-28.25'/%3E%3C/g%3E%3C/g%3E%3Cg id='Group_2409' data-name='Group 2409'%3E%3Cpath class='cls-2' d='M19.64 310.21l47.34 7.95 7.95-47.34-47.34-7.95-7.95 47.34z' id='Rectangle_1228' data-name='Rectangle 1228'/%3E%3Cg id='Group_2412' data-name='Group 2412'%3E%3Cg id='Group_2410' data-name='Group 2410'%3E%3Cpath id='Path_1872' data-name='Path 1872' class='cls-3' d='M44.07 272.74a7.94 7.94 0 11-9.14 6.56 8 8 0 019.14-6.56z'/%3E%3Cpath id='Path_1873' data-name='Path 1873' class='cls-3' d='M50.6 281.9a8 8 0 10-9.16 6.53 8 8 0 009.16-6.53z'/%3E%3C/g%3E%3Cpath id='Path_1874' data-name='Path 1874' class='cls-3' d='M55.05 309.34A16.89 16.89 0 0021.7 304l33.3 5.6c0-.09 0-.17.05-.26z'/%3E%3Cg id='Group_2411' data-name='Group 2411'%3E%3Cpath id='Path_1875' data-name='Path 1875' class='cls-3' d='M47.65 287.09l.12.16a7.94 7.94 0 101.57-11.12'/%3E%3C/g%3E%3Cpath id='Path_1876' data-name='Path 1876' class='cls-3' d='M55 309.6l11.36 1.9a16.89 16.89 0 00-19.7-19.41'/%3E%3C/g%3E%3C/g%3E%3Ccircle id='Ellipse_370' data-name='Ellipse 370' class='cls-3' cx='231.47' cy='358.91' r='22.63'/%3E%3Cpath id='Rectangle_1244' data-name='Rectangle 1244' class='cls-7' d='M219.91 352.59l-1.85 11a3.74 3.74 0 003.07 4.3l17.15 2.88a3.74 3.74 0 004.3-3.06l1.85-11a3.73 3.73 0 00-3.07-4.3l-17.14-2.89a3.75 3.75 0 00-4.31 3.07z'/%3E%3Cpath id='Path_1893' data-name='Path 1893' class='cls-7' d='M237.89 351.09l.26-1.58a1.89 1.89 0 00-1.56-2.18l-6.15-1a1.9 1.9 0 00-2.19 1.55l-.26 1.58'/%3E%3Cpath id='Path_1894' data-name='Path 1894' class='cls-7' d='M243.64 361.56c-5.44 1.61-16.44 1.72-24.41-4.75'/%3E%3Cpath class='cls-2' d='M209.91 144.1l47.33 7.95 7.95-47.33-47.33-7.95-7.95 47.33z' id='path56'/%3E%3Cpath id='Path_1864-2' data-name='Path 1864-2' class='cls-3' d='M256.66 130.21l-2.35 14a6.26 6.26 0 01-7.22 5.14l-28.86-4.84a6.28 6.28 0 01-5.14-7.22l5.54-33a6.27 6.27 0 017.22-5.15l28.86 4.86a6.27 6.27 0 015.14 7.22l-3.19 19z'/%3E%3Cpath id='Path_1870' data-name='Path 1870' class='cls-3' d='M243.54 131.8l-13.74-2.31a2.71 2.71 0 01-1.12-4.88l1.93-1.37-1-12.95-3.1-.52'/%3E%3Cpath id='Path_1871' data-name='Path 1871' class='cls-3' d='M230.65 123.22l-1.84 1.31 13.19 2.22a1.6 1.6 0 001.53-.63l6.27-8.52a1.54 1.54 0 00.29-.67 1.58 1.58 0 00-1.29-1.82l-19-3.2z'/%3E%3Ccircle id='Ellipse_366' data-name='Ellipse 366' class='cls-5' cx='230.34' cy='134.37' r='1.58'/%3E%3Ccircle id='Ellipse_367' data-name='Ellipse 367' class='cls-5' cx='240.74' cy='136.11' r='1.58'/%3E%3Cg id='Group_2396' data-name='Group 2396'%3E%3Cpath class='cls-2' d='M42.96 80.22l47.34 7.96 7.95-47.34-47.34-7.95-7.95 47.33z' id='Rectangle_1223' data-name='Rectangle 1223'/%3E%3Cg id='Group_2395' data-name='Group 2395'%3E%3Cpath id='Path_1864-3' data-name='Path 1864-3' class='cls-3' d='M86.42 80.06a6.28 6.28 0 01-7.22 5.15l-28.86-4.85a6.26 6.26 0 01-5.14-7.22l5.54-33A6.26 6.26 0 0158 35l28.85 4.84A6.28 6.28 0 0192 47.09l-3.2 19z'/%3E%3Cpath id='Line_301' data-name='Line 301' class='cls-3' d='M83.18 51l-25.72-4.32'/%3E%3Cpath id='Line_302' data-name='Line 302' class='cls-3' d='M69.09 57.04l-13-2.18'/%3E%3Cpath id='Path_1865' data-name='Path 1865' class='cls-3' d='M72.06 69.78a5 5 0 004.18 4.53c.75.13 3.51.18 4.17-2.11 1.37-4.82-7-3.7-6.66-7.79.22-2.32 2.64-2.85 4.47-2.54a3.57 3.57 0 013.31 3.61'/%3E%3Cpath id='Line_303' data-name='Line 303' class='cls-3' d='M75.61 77.75l3.2-19.07'/%3E%3C/g%3E%3C/g%3E%3C/pattern%3E%3Cstyle id='style72'%3E.cls-1,.cls-3,.cls-7%7Bfill:none%7D.cls-2%7Bfill:%23fff;opacity:0%7D.cls-2,.cls-3,.cls-7%7Bstroke:%236b8596%7D.cls-2,.cls-7%7Bstroke-miterlimit:10%7D.cls-3%7Bstroke-linecap:round;stroke-linejoin:round%7D.cls-3,.cls-7%7Bstroke-width:2px%7D.cls-5%7Bfill:%236b8596%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2-2' data-name='Layer 2'%3E%3Cg clip-path='url(%23clip-path)' id='Layer_1-3' data-name='Layer 1'%3E%3Cpath opacity='.16' fill='url(%23New_Pattern)' d='M0 0h1920v1080H0z' id='path76'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n"};
        `}

        @media screen and (${t.lte.xs}) {
          flex-direction: column;
        }
      }
    `}
  }
`,p=(0,c.default)(d.W)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 1;
    ${({theme:{spacings:e,screens:t},alignment:n})=>c.css`
      && {
        padding-bottom: ${e.s8};
      }

      @media screen and (${t.gte.xs}) {
        ${"row"===n&&c.css`
          margin: 5% auto auto;
        `}
      }
    `}
  }
`,f=(0,c.default)(a.Typography)`
  && {
    max-width: 420px;
    margin: auto;
    ${({theme:{spacings:e,screens:t,sizes:n,colors:r}})=>c.css`
      && {
        padding-top: ${e.s5};
        padding-bottom: ${e.s5};
      }
      @media screen and (${t.lte.sm}) {
        font-size: ${n.h6};
        color: ${r.neutral[6]};
        margin: 0 20px;
      }
    `}
  }
`,h=(0,c.default)(a.Typography.H1)`
  ${({theme:{sizes:e,screens:t}})=>c.css`
    && {
      @media screen and (${t.lte.sm}) {
        font-size: ${e.large};
        margin: 0 20px;
      }
    }
  `}
`,g=(0,c.default)(a.Typography)`
  && {
    max-width: 450px;
    text-align: center;
    ${({theme:{spacings:e}})=>c.css`
      && {
        margin: ${e.s9} auto ${e.s5};
        padding: 0 ${e.s4};
      }
    `}
  }
`,y=(0,c.default)(d.W)`
  && {
    flex: 1;
    ${({theme:{screens:e}})=>c.css`
      @media screen and (${e.lte.xs}) {
        padding: 0;
      }
    `}
  }
`,v=(0,c.default)(a.Input.InputGroup)`
  && {
    text-align: left;
    * {
      border: none;
    }
    > div {
      width: 100%;
    }

    ${({theme:{screens:e,spacings:t}})=>c.css`
      @media screen and (${e.lte.xs}) {
        padding: 0 ${t.s4};
      }
    `}
  }
`,b=c.default.div`
    ${({theme:{screens:e,spacings:t}})=>c.css`
      width: 100%;
      margin: ${t.s8} 0 ${t.s4};

      @media screen and (${e.gte.xs}) {
        width: 80%;
        margin: 0;
      }

      @media screen and (${e.gte.md}) {
        width: 60%;
        margin: 0;
      }
    `}
  }
`,E=c.default.a`
  ${({theme:{spacings:e,breakpoints:t,colors:n}})=>c.css`
    cursor: pointer;
    padding: ${e.s4};
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    text-align: center;

    :hover {
      background: ${n.neutral[2]};
    }

    @media screen and (min-width: ${t[1]}) {
      width: 25%;
    }
  `}
`,S=(0,c.default)(a.Card)`
  && {
    display: flex;
    flex-wrap: wrap;
    max-width: 600px;
    ${({theme:{spacings:e,screens:t}})=>c.css`
      margin-top: ${e.s5};
      padding: ${e.s6} ${e.s11};

      @media screen and (${t.lte.xs}) {
        padding: ${e.s6} ${e.s4};
      }
    `}
  }
`;function C({h1:e,headerCopy:t,footerCopy:n,headerCTA:c,backgroundImage:d,referrer:C,showHeader:$,alignment:F="column",categories:P,onSearch:x,datasource:k,children:T}){const w=(0,l.Z)("(max-width: 568px)"),L=(0,r.useMemo)((()=>(P||[]).map((e=>e.displayName))),[P]),[A,R]=(0,r.useState)(),N=(0,r.useCallback)((()=>{if(A&&x){const e=null===P||void 0===P?void 0:P.find((e=>e.displayName===A));return x(A,e)}return Promise.resolve()}),[A,P,x]),D=(0,r.useMemo)((()=>r.createElement(b,null,x&&r.createElement(v,null,r.createElement(a.Typed,{withInput:!0,attr:"value",bindInputFocusEvents:!0,loop:!0,strings:L,outlined:!0,id:"requirement-categories",iconBackground:"#fe3e82",datasource:k,labelKey:"displayName",valueKey:"urlKey",onSelect:x,onChange:(e,t)=>{R(t)},onEnter:N,"aria-label":"Search"}),r.createElement(a.Button,{onClick:N,size:"large","aria-label":"Search Services"},r.createElement(i.olm,{color:"#fff"}))),!!(null===P||void 0===P?void 0:P.length)&&r.createElement(S,null,P.map((e=>r.createElement(s.Z,{key:e.urlKey,elisif:{href:e.link.href,as:e.link.as},hrefProps:{href:e.link.href}},r.createElement(E,{key:e.urlKey},r.createElement(a.Image,Object.assign({},e.icon,{height:48,width:48})),r.createElement(a.Typography,null,e.displayName)))))))),[x,L,k,N,P]);return r.createElement(m,{bg:d,alignment:F},r.createElement(p,{alignment:F},C&&r.createElement(r.Fragment,null,r.createElement(a.Avatar,{src:C.avatar,name:C.name,shape:"square",size:65}),r.createElement(o.xu,{width:1,mt:"8px"},r.createElement(a.Typography,{size:"h5",inline:!0,bold:!0},C.name,"\xa0"),r.createElement(a.Typography,{size:"h5",inline:!0},"has invited you to try Refrens.")),r.createElement("br",null)),$&&r.createElement(o.xu,{maxWidth:600},r.createElement(h,{size:"h1"},e),!!t&&r.createElement(f,null,t),c&&r.createElement(u.Z,{cta:c})),!w&&D,!w&&!!n&&"row"===F&&r.createElement(g,null,n)),r.createElement(y,null,r.createElement(o.xu,{width:1,id:"refrens-page-form"},T)),w&&D,!!n&&("column"===F||w)&&r.createElement(g,null,n))}f.defaultProps={size:"h4"},g.defaultProps={size:"h4"},C.defaultProps={showHeader:!0,alignment:"column"};var $=C},80152:function(e,t,n){"use strict";var r=n(78672);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"Services")&&n.d(t,{Services:function(){return r.Services}}),n.o(r,"Sidebar")&&n.d(t,{Sidebar:function(){return r.Sidebar}}),n.o(r,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return r.SidebarAppWrapper}}),n.o(r,"SigninForm")&&n.d(t,{SigninForm:function(){return r.SigninForm}}),n.o(r,"SignupForm")&&n.d(t,{SignupForm:function(){return r.SignupForm}}),n.o(r,"Startup")&&n.d(t,{Startup:function(){return r.Startup}}),n.o(r,"StaticFooter")&&n.d(t,{StaticFooter:function(){return r.StaticFooter}}),n.o(r,"StickyFooter")&&n.d(t,{StickyFooter:function(){return r.StickyFooter}}),n.o(r,"Support")&&n.d(t,{Support:function(){return r.Support}}),n.o(r,"Testimonials")&&n.d(t,{Testimonials:function(){return r.Testimonials}}),n.o(r,"TrustCopy")&&n.d(t,{TrustCopy:function(){return r.TrustCopy}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},78672:function(){},50986:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(67294),a=n(2544),i=n(52019),o=n(52220),l=n(32929);const u=o.default.div`
  && {
    ${({theme:{spacings:e},backgroundColor:t})=>o.css`
      padding-top: ${e.s9};
      background-color: ${t};
    `}
  }
`,s=(0,o.default)(l.W)`
  && {
    ${({theme:{spacings:e,breakpoints:t}})=>o.css`
      @media screen and (max-width: ${t[1]}) {
        padding: ${e.s4} 0;
      }
    `}
  }
`,c=(0,o.default)(a.Typography)`
  && {
    ${({theme:{breakpoints:e,spacings:t}})=>o.css`
      padding-bottom: ${t.s9};
      text-align: center;
      @media screen and (max-width: ${e[1]}) {
        padding-bottom: ${t.s4};
        max-width: 95%;
        margin: 0 auto;
      }
    `}
  }
`,d=o.default.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  ${({theme:{screens:e,spacings:t}})=>o.css`
    @media screen and (${e.lte.lg}) {
      padding: 0 ${t.s6};
    }

    @media screen and (${e.lte.xs}) {
      padding: 0 ${t.s4};
    }
  `}
`,m=o.default.div`
  min-width: 224px;
  max-width: 100%;
  margin: 0;
  > a {
    text-decoration: none;
  }

  ${({theme:{spacings:e,screens:t}})=>o.css`
    margin-bottom: ${e.s4};
    padding-right: ${e.s4};
    > span {
      margin: ${e.s3} auto;
    }
    @media screen and (${t.gte.xs}) {
      max-width: 50%;
    }
    @media screen and (${t.gte.sm}) {
      max-width: 33%;
    }
    @media screen and (${t.gte.md}) {
      max-width: 25%;
    }
  `}
`,p=o.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 125px;
  ${({theme:{colors:e,spacings:t}})=>o.css`
    background-color: ${e.neutral[2]};
    margin-bottom: ${t.s3};
  `}
`;(0,o.default)(a.Typography).attrs({as:"a",size:"span"})`
  && {
    font-weight: 500;
    ${({theme:{colors:e}})=>o.css`
      color: ${e.secondary[3]};
    `}
  }
`;var f=e=>{const{title:t,items:n=[],backgroundColor:o="#fff"}=e;return r.createElement(u,{backgroundColor:o},r.createElement(s,null,r.createElement(c,{as:"h2"},t),r.createElement(d,null,n.map((({_id:e,image:t,title:n,description:o,link:l})=>r.createElement(m,{key:e},r.createElement(p,null,r.createElement(a.Image,Object.assign({},t))),l&&r.createElement(i.Z,{hrefProps:{href:l.as||l.href},elisif:{href:l.href,as:l.as}},r.createElement(a.Typography,{size:"h4",bold:!0,as:"a"},n)),!l&&r.createElement(a.Typography,{size:"h4",bold:!0,as:"a"},n),o&&r.createElement(a.Typography,{size:"span"},o)))))))}},25704:function(e,t,n){"use strict";n.d(t,{K:function(){return r.Z}});var r=n(50986),a=n(48986);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"Sidebar")&&n.d(t,{Sidebar:function(){return a.Sidebar}}),n.o(a,"SidebarAppWrapper")&&n.d(t,{SidebarAppWrapper:function(){return a.SidebarAppWrapper}}),n.o(a,"SigninForm")&&n.d(t,{SigninForm:function(){return a.SigninForm}}),n.o(a,"SignupForm")&&n.d(t,{SignupForm:function(){return a.SignupForm}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},48986:function(){},36324:function(e,t,n){"use strict";n.d(t,{Z:function(){return Me}});var r=n(67294),a=n(6411),i=n(14516),o=n(2544),l=n(34578),u=n(94829),s=n(89211),c=n(91291),d=n(55385),m=n.n(d),p=n(38366),f=n.n(p),h=n(52879),g=n(79874),y=n(70655),v=n(26316),b=n(52220);const E=b.default.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);
  ${({theme:{spacings:e,colors:t}})=>b.css`
    padding: ${e.s4};
    background: ${t.neutral[0]};
    @media screen and (max-width: 480px) {
      height: 100vh;
      width: 100%;
    }
  `}
`,S=(0,b.default)(o.Typography)`
  && {
    ${({theme:{spacings:e}})=>b.css`
      margin-left: ${e.s2};
    `}
  }
`,C=(0,b.default)(o.Typography)`
  && {
    ${({theme:{spacings:e}})=>b.css`
      margin-left: ${e.s1};
    `}
  }
`,$=(0,b.default)(o.Typography)`
  && {
    ${({theme:{spacings:e}})=>b.css`
      margin-top: ${e.s2};
      margin-bottom: ${e.s3};
    `}
  }
`,F=b.default.div`
  display: flex;
  align-items: center;
  height: 70px;
  white-space: nowrap;
  ${({theme:{spacings:e},isPrivate:t})=>b.css`
    background: ${t?"rgb(235,73,60,0.2)":"#edf8ff"};
    padding: ${e.s3};
  `}
`,P=b.default.span`
  border-radius: 50%;
  font-size: 10px;
  text-align: center;
  line-height: 15px;
  ${({theme:{colors:e,spacings:t}})=>b.css`
    height: ${t.s4};
    width: ${t.s4};
    color: ${e.neutral[7]};
    border: 1px solid ${e.neutral[7]};
  `}
`,x=b.default.div`
  display: flex;
  align-items: center;
  ${({theme:{spacings:e}})=>b.css`
    margin-top: ${e.s4};
    > a,
    div,
    button {
      margin-left: ${e.s2};
      text-decoration: none;
    }
    svg {
      vertical-align: middle;
    }
  `}
`,k=(0,b.default)(o.Typography)`
  && {
    ${({theme:{spacings:e}})=>b.css`
      margin-right: ${e.s1};
    `}
  }
`,T=(0,b.default)(o.Typography)`
  && {
    ${({theme:{spacings:e}})=>b.css`
      margin-left: ${e.s2};
    `}
  }
`,w=b.default.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 8px 8px 0 0;
  cursor: pointer;
`;var L=n(34078),A=n.n(L),R=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),N=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return R(t,e),t}(Error);function D(e,t){if(!e)throw new N(t)}function I(e){var t=Object.entries(e).filter((function(e){var t=e[1];return void 0!==t&&null!==t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var M=n(94184),B=n.n(M),q=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),O=function(){return(O=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},_=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{u(r.next(e))}catch(t){i(t)}}function l(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}u((r=r.apply(e,t||[])).next())}))},z=function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(l){i=[6,l],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},H=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},W=function(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then},V=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},j=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function G(e,t,n){var r=t.height,a=t.width,i=H(t,["height","width"]),o=O({height:r,width:a,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),l=window.open(e,"",Object.keys(o).map((function(e){return e+"="+o[e]})).join(", "));if(n)var u=window.setInterval((function(){try{(null===l||l.closed)&&(window.clearInterval(u),n(l))}catch(e){console.error(e)}}),1e3);return l}var K=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,a=n.windowHeight,i=void 0===a?400:a,o=n.windowPosition,l=void 0===o?"windowCenter":o,u=n.windowWidth,s=void 0===u?550:u;G(e,O({height:i,width:s},"windowCenter"===l?V(s,i):j(s,i)),r)},t.handleClick=function(e){return _(t,void 0,void 0,(function(){var t,n,r,a,i,o,l,u,s,c;return z(this,(function(d){switch(d.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,a=t.networkLink,i=t.onClick,o=t.url,l=t.openShareDialogOnClick,u=t.opts,s=a(o,u),r?[2]:(e.preventDefault(),n?(c=n(),W(c)?[4,c]:[3,2]):[3,2]);case 1:d.sent(),d.label=2;case 2:return l&&this.openShareDialog(s),i&&i(e,s),[2]}}))}))},t}return q(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,a=e.disabled,i=e.disabledStyle,o=e.forwardedRef,l=(e.networkLink,e.networkName),u=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,c=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,H(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),d=B()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!a,disabled:!!a},n),m=O(O(u?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),a&&i);return r.createElement("button",O({},c,{"aria-label":c["aria-label"]||l,className:d,onClick:this.handleClick,ref:o,style:m}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(r.Component),Z=function(){return(Z=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var U=function(e,t,n,a){function i(i,o){var l=n(i),u=Z({},i);return Object.keys(l).forEach((function(e){delete u[e]})),r.createElement(K,Z({},a,u,{forwardedRef:o,networkName:e,networkLink:t,opts:n(i)}))}return i.displayName="ShareButton-"+e,(0,r.forwardRef)(i)};var Y=U("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return D(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+I({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400});var J=U("twitter",(function(e,t){var n=t.title,r=t.via,a=t.hashtags,i=void 0===a?[]:a,o=t.related,l=void 0===o?[]:o;return D(e,"twitter.url"),D(Array.isArray(i),"twitter.hashtags is not an array"),D(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+I({url:e,text:n,via:r,hashtags:i.length>0?i.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400});var Q=U("linkedin",(function(e,t){var n=t.title,r=t.summary,a=t.source;return D(e,"linkedin.url"),"https://linkedin.com/shareArticle"+I({url:e,mini:"true",title:n,summary:r,source:a})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600});var X=U("whatsapp",(function(e,t){var n=t.title,r=t.separator;return D(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+I({text:n?n+r+e:e})}),(function(e){return{title:e.title,separator:e.separator||" "}}),{windowWidth:550,windowHeight:400});function ee(e){return e.replace("@RefrensApp","Refrens")}var te=n(6767),ne=n.n(te);const re=(0,b.default)(o.Typography)`
  && {
    ${({theme:{spacings:e}})=>b.css`
      > img {
        border-radius: ${e.s2};
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25);
      }
    `}
  }
`,ae=b.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  ${({theme:{spacings:e},size:t,invertBgColor:n,color:r,hover:a})=>b.css`
    width: ${t}px;
    height: ${t}px;
    padding: ${e.s1};
    background: ${ne()(r).alpha(.1).rgb().string()};
    > svg {
      width: 70%;
      height: 70%;
      color: ${r};
    }
    ${n&&b.css`
      background-color: ${r};
      > svg {
        color: #fff;
      }
    `}
    ${a&&b.css`
      cursor: pointer;
      &:hover,
      &.active {
        background-color: ${r};
        > svg {
          color: #fff;
        }
      }
    `}
  `}
`;ae.defaultProps={size:50,color:"black",hover:!1,active:!1,invertBgColor:!1};const ie=b.default.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  > button {
    &:focus {
      outline: none;
    }
  }
  ${({theme:{spacings:e}})=>b.css`
    margin: ${e.s5} 0;
    > div {
      margin: 0 ${e.s2};
    }
  `}
`,oe=b.default.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:focus {
    outline: none;
  }
  ${({theme:{spacings:e},color:t})=>b.css`
    > span {
      margin-top: ${e.s1};
      display: inline-block;
    }
    &:hover,
    &.active {
      color: ${t};
    }
  `}
`;oe.defaultProps={color:"black"};const le=(0,b.default)(o.Typography)`
  && {
    margin-bottom: ${e=>e.theme.spacings.s4};
  }
`,ue=(0,b.default)(o.Typography)`
  && {
    margin-bottom: ${e=>e.theme.spacings.s2};
  }
`;var se;!function(e){e.FACEBOOK="facebook",e.WHATSAPP="whatsapp",e.LINKEDIN="linkedin",e.TWITTER="twitter",e.EMAIL="email",e.COPYLINK="copylink"}(se||(se={}));const ce=({url:e,title:t,size:n,withLabel:a=!1,invertBgColor:i=!1,onClick:o})=>{return r.createElement(Y,{url:e,quote:(u=t,u.replace("@RefrensApp","#Refrens")),onClick:e=>{o&&o(e,se.FACEBOOK)}},r.createElement(oe,{color:"#3B5998"},r.createElement(ae,{color:"#3B5998",size:n,hover:!0,invertBgColor:i},r.createElement(l.s1S,null)),a&&r.createElement("span",null,"Facebook")));var u},de=({url:e,title:t,size:n,withLabel:a=!1,invertBgColor:i=!1,onClick:o})=>r.createElement(J,{url:e,title:t,onClick:e=>{o&&o(e,se.TWITTER)}},r.createElement(oe,{color:"#1DA1F2"},r.createElement(ae,{color:"#1DA1F2",size:n,hover:!0,invertBgColor:i},r.createElement(l.tLe,null)),a&&r.createElement("span",null,"Twitter"))),me=({url:e,title:t,size:n,withLabel:a=!1,invertBgColor:i=!1,onClick:o})=>{return r.createElement(Q,{url:e,title:(u=t,u.replace("@RefrensApp","#Refrens")),onClick:e=>{o&&o(e,se.LINKEDIN)}},r.createElement(oe,{color:"#0077B5"},r.createElement(ae,{color:"#0077B5",size:n,hover:!0,invertBgColor:i},r.createElement(l.yhk,null)),a&&r.createElement("span",null,"LinkedIn")));var u},pe=({url:e,title:t,size:n,withLabel:a=!1,invertBgColor:i=!1,onClick:o})=>r.createElement(X,{url:e,title:ee(t),"data-ga-on":"click",onClick:e=>{o&&o(e,se.WHATSAPP)}},r.createElement(oe,{color:"#25D366"},r.createElement(ae,{color:"#25D366",size:n,hover:!0,invertBgColor:i},r.createElement(l.CDv,null)),a&&r.createElement("span",null,"WhatsApp"))),fe="%0D%0A",he=({url:e,title:t,size:n,withLabel:a=!1,invertBgColor:i=!1,onClick:o})=>{const u=ee(t),s=e.replace(/&/g,"%26"),c=["Hi,",fe,fe,u,fe,fe,s,fe,fe].join("");return r.createElement(oe,{color:"#E94034",onClick:e=>{o&&o(e,se.WHATSAPP),window.open(`mailto:?subject=${u}&body=${c}`,"_blank")},role:"button","aria-label":"Email"},r.createElement(ae,{color:"#E94034",size:n,hover:!0,invertBgColor:i},r.createElement(l.GTk,null)),a&&r.createElement("span",null,"Email"))};var ge=n(20640),ye=n.n(ge);function ve(e,t,n,r,a){let i;i=a||!r?e.toString():A()(e),ye()(i,{format:"text/plain"})?(t(!0),setTimeout((()=>{t(!1)}),5e3)):n&&n(!0)}var be=e=>{const{url:t,noRef:n,auth:i,title:u="Trying out @RefrensApp. A great tool to crowdsource business leads.",heading:s="Share",noSocial:c=!1,visible:d=!0,subHeading:m,feature:p,footnote:f,onCancel:h,size:g=50,inline:y,withLabel:v=!1,onShare:b}=e,[E,S]=(0,r.useState)(!1),[C,$]=(0,r.useState)(!1),[F,P]=(0,r.useState)(!1);(0,r.useEffect)((()=>{navigator&&navigator.share&&P(!0)}),[F]);const x=(0,r.useCallback)((()=>n||!i?t:A()(t)),[n,i,t]),k=(0,r.useCallback)((e=>{b&&b(e,se.COPYLINK),ve(t,$,S,!!i,n)}),[n,i,t]),T=(0,r.useCallback)((()=>{((e,t)=>{!(!navigator||!navigator.share)&&navigator.share({title:t,text:t,url:e}).catch((()=>{}))})(x.toString(),u)}),[x,u]),w=(0,r.useMemo)((()=>r.createElement(ie,null,!c&&r.createElement(r.Fragment,null,r.createElement(ce,{url:t,title:u,size:g,withLabel:v,onClick:b}),r.createElement(de,{url:t,title:u,size:g,withLabel:v,onClick:b}),r.createElement(me,{url:t,title:u,size:g,withLabel:v,onClick:b})),r.createElement(pe,{url:t,title:u,size:g,withLabel:v,onClick:b}),r.createElement(he,{url:t,title:u,size:g,onClick:b,withLabel:v}),r.createElement(oe,{color:C?"#7bbb5e":"#201742",onClick:k},r.createElement(ae,{color:C?"#7bbb5e":"#201742",active:C,size:g,hover:!0},r.createElement(l.rUS,null)),v&&r.createElement(o.Typography,null,C?"Link Copied":"Copy Link")),F&&r.createElement(oe,{color:"#201742",role:"button",onClick:T},r.createElement(ae,{color:"#201742",size:g,hover:!0},r.createElement(l.mBz,null)),v&&r.createElement(o.Typography,null,"Share")))),[c,t,u,g,v,C,b]);return y?w:r.createElement(o.Modal,{open:d,footer:null,onCancel:h,centered:!0,width:600,maskClosable:!1},r.createElement(a.kC,{alignSelf:"center",flexDirection:"column",textAlign:"center"},r.createElement(le,{size:"h3"},s),m&&r.createElement(ue,{as:"p"},m),p&&r.createElement(re,null,p),w,E&&r.createElement(r.Fragment,null,r.createElement(o.Typography,null,"Click on link and copy"),r.createElement(o.Input,{value:t,onFocus:e=>e.target.select()}),r.createElement("br",null),r.createElement("br",null)),f&&r.createElement(o.Typography,{size:"small"},"Note: ",f)))},Ee=n(52019);const Se=b.default.img`
  max-width: 100%;
  max-height: 100%;
  height: auto;
`;var Ce=function(e){return r.createElement(Se,Object.assign({},e))};var $e=({isProfileCompleted:e,products:t,portfolio:n,urlKey:r,onboarding:a})=>{const i=null===t||void 0===t?void 0:t.filter((e=>!e.archived)).length,o=null===n||void 0===n?void 0:n.filter((e=>!e.archived)).length;let l="Share your Profile";e?i?o||(l="Add a Portfolio"):l="Add a Service/Package":l="Complete your Profile";const u={activeStep:3,activeLabel:l,steps:{profile:{isCompleted:!!e,urlKey:r,label:"Complete your Profile",lydia:{route:"BusinessProfileEdit",params:{business:r}},hrefProps:{href:`/${r}/edit`},openSharePopup:!1},products:{isCompleted:!!i,urlKey:r,label:"Add a Service/Package",lydia:{route:"NewProduct",params:{business:r}},hrefProps:{href:`/${r}/products/new`},openSharePopup:!1},portfolio:{isCompleted:!!o,urlKey:r,label:"Add a Portfolio",lydia:{route:"NewPortfolio",params:{business:r}},hrefProps:{href:`/app/${r}/portfolio/new`},openSharePopup:!1},shareProfile:{isCompleted:!!(null===a||void 0===a?void 0:a.profileShared),urlKey:r,label:"Share your profile",openSharePopup:!0}}};return u.activeStep=Object.values(u.steps).filter((e=>e.isCompleted)).length,u};var Fe=(0,r.forwardRef)(((e,t)=>{const{user:n,activeBusiness:d,onProfilePublish:m,onShare:p}=e,{config:{referrerQuery:f,ucStateKey:h}}=(0,v.qK)(),[g,b]=(0,i.useLocalForage)(h,"false"),L=(0,u.Z)("(min-width: 768px)"),[A,R]=(0,s.Z)(!0),[N,D]=(0,s.Z)(!1),[I,M]=(0,s.Z)(!!d.isPrivate),[B,q]=(0,s.Z)(!1),{host:O}=(0,c.Z)(),_=!!O&&`${O}/${d.urlKey}?${f}=${n.r[0]}`,z=(0,r.useMemo)((()=>$e(d)),[d]),H=(0,r.useCallback)((()=>(0,y.mG)(void 0,void 0,void 0,(function*(){yield m(),M(!1)}))),[m]);(0,r.useImperativeHandle)(t,(()=>({hide:()=>q(!1),show:()=>q(!0)}))),(0,i.useBrowserEffect)((()=>{L&&"true"===g&&q(!0)}),[g]),(0,r.useEffect)((()=>{M(d.isPrivate)}),[d.isPrivate]),(0,r.useEffect)((()=>{R(!1),setTimeout((()=>{R(!0)}),0)}),[I,N]);const W=(0,r.useCallback)((()=>{q(!1),L&&b("false")}),[L]),V=(0,r.useCallback)((()=>{L&&!B&&b("true"),q()}),[L,B]);return r.createElement(r.Fragment,null,A&&r.createElement(o.Popover,{isOpen:B,trigger:"click",position:"right",align:"center",containerClassName:"jupiter-universal-card",padding:10,containerStyle:{boxShadow:"7px 2px 6px 0 rgba(0,0,0,0.12)"},content:r.createElement(E,null,r.createElement(w,{onClick:W},r.createElement(l.x8P,{color:"#7f8fa4",size:20})),r.createElement(a.kC,{alignItems:"center",mb:"14px"},r.createElement(o.Avatar,{src:n.avatar,name:n.name,size:36,color:"#000"}),r.createElement(T,{bold:!0},"Hi, ",n.name)),I?r.createElement(r.Fragment,null,r.createElement(a.kC,{alignItems:"center"},r.createElement(l.kIV,{size:20,color:"#eb493c"}),r.createElement(C,{variant:"error",inline:!0},"Your Profile is Private")),r.createElement($,{size:"small",variant:"neutral"},"Your profile is not visible. Publish it to make it discoverable."),r.createElement(o.Divider,null),r.createElement(a.kC,{mt:"12px",justifyContent:"space-between",alignItems:"center"},r.createElement(o.Typography,{size:"small"},"Make it Public"),r.createElement(o.Switch,{onChange:H}))):r.createElement(r.Fragment,null,r.createElement(o.Typography,null,"Here are small things you can do to make your profile rock"," ",r.createElement(l.Riw,{size:12,color:"#ffcc4d"})),Object.entries(z.steps).map((([e,t],n)=>r.createElement("div",{key:e},t.isCompleted&&r.createElement(x,null,r.createElement(l.fU8,{size:16,color:"#1bb934"}),r.createElement(S,{size:"small",variant:"subtle",lineThrough:!0},t.label)),!t.isCompleted&&r.createElement(r.Fragment,null,t.openSharePopup?r.createElement(r.Fragment,null,r.createElement(x,null,r.createElement(P,null,n+1),r.createElement(o.Button,{onClick:()=>{D(!0),q(!1)},anchor:!0,variant:"neutral"},r.createElement(o.Typography,{size:"small"},t.label),r.createElement(l._Qn,{size:8})))):r.createElement(x,null,r.createElement(P,null,n+1),r.createElement(Ee.Z,{lydia:t.lydia,hrefProps:t.hrefProps},r.createElement(o.Button,{as:"a",anchor:!0,variant:"neutral"},r.createElement(o.Typography,{size:"small"},t.label),r.createElement(l._Qn,{size:8})))))))))),contentLocation:({targetRect:e,nudgedLeft:t,popoverRect:n})=>({top:e.bottom-e.height/8-n.height,left:t})},r.createElement(F,{onClick:V,isPrivate:I,"data-ga-on":"click","data-ga-event-category":"OnboardingCard","data-ga-event-action":"OnboardingCardClick"},r.createElement(a.xu,{mr:"20px",flexShrink:0},r.createElement(o.Avatar,{src:n.avatar,name:n.name,size:36,color:"#000"})),r.createElement(a.kC,{flexDirection:"column",flexGrow:1},I?r.createElement(a.kC,{alignItems:"center"},r.createElement(l.kIV,{size:14,color:"#eb493c"}),r.createElement(C,{variant:"error",inline:!0,size:"smaller"},"Your Profile is Private")):r.createElement(o.Typography,{variant:"none",size:"smaller",ellipsis:!0},z.activeStep,"/",Object.keys(z.steps).length," completed"),r.createElement(a.kC,{mt:"4px"},r.createElement(k,{variant:"neutral",bold:!0,ellipsis:!0},I?"Make it Public":z.activeLabel),r.createElement(l._Qn,{size:12,style:{alignSelf:"center"}}))))),N&&_&&r.createElement(be,{heading:"Share your business profile",title:"Check out my business profile on @RefrensApp. Brand New way to get business leads.",url:_,onShare:p,onCancel:()=>D(!1),feature:r.createElement(Ce,{src:d.og.image,alt:d.alias||d.name}),size:40}))})),Pe=n(77359);const xe=(0,b.default)(o.Card).attrs({border:!1})`
  && {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    ${({theme:{spacings:e},variant:t,background:n,noBackground:r,anchor:a,pointerCursor:i})=>b.css`
      ${n&&!r&&b.css`
        background-image: url(${n});
      `}
      ${!r&&b.css`
        box-shadow: none;
      `}
    ${("v2"===t||"compact"===t||"iconOnly"===t)&&b.css`
        width: max-content;
        border-radius: ${e.s1};
        background: #1c1a27;
      `}
      ${"iconOnly"===t&&b.css`
        display: inline-block;
        vertical-align: middle;
        margin: ${e.s1};
      `}
      ${a&&b.css`
        box-shadow: none;
        background: none;
      `}
      ${i&&b.css`
        cursor: pointer;
      `}
    `}
  }
`,ke=(0,b.default)(o.Typography)`
  && {
    font-size: 24px;
    background: linear-gradient(to right, #ff6773, #ffc926);
    background-clip: text;
    color: transparent;
    background-position-x: 50%;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    ${({pvariant:e})=>b.css`
      ${"v2"===e&&b.css`
        font-size: 14px;
      `}
      ${"v3"===e&&b.css`
        font-size: 18px;
      `}
      ${"compact"===e&&b.css`
        font-size: 12px;
      `}
    `}
  }
`,Te=b.default.div`
  ${({theme:{spacings:e},variant:t})=>b.css`
    margin-left: ${e.s5};
    ${"v2"===t&&b.css`
      margin-left: ${e.s2};
    `}
    ${"compact"===t&&b.css`
      margin-left: ${e.s1};
    `}
    ${"v3"===t&&b.css`
      margin-left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
  `}
`,we=(0,b.default)(o.Button).attrs((({size:e="large"})=>({size:e,variant:"neutral"})))`
  margin-left: auto;
  ${({theme:{spacings:e,colors:t},pVariant:n})=>b.css`
    ${"v3"===n&&b.css`
      margin-left: 0;
      margin-top: ${e.s7};
      background-image: linear-gradient(to right, #ff6773, #ffc926);
      color: ${t.neutral[0]};
      border: none;
      &: hover {
        background-image: linear-gradient(to right, #ff6773, #ffc926);
        color: ${t.neutral[0]};
      }
    `}
  `}
`,Le=b.default.div`
  display: flex;
  ${({theme:{spacings:e}})=>b.css`
    > svg {
      margin-right: ${e.s2};
    }
  `}
`,Ae=(0,b.default)(o.Typography)`
  && {
    max-width: 360px;
    ${({theme:{spacings:e}})=>b.css`
      margin-top: ${e.s4};
    `}
  }
`,Re=(0,b.default)(o.Typography)`
  && {
    max-width: 250px;
    ${({theme:{spacings:e}})=>b.css`
      margin-top: ${e.s5};
    `}
  }
`,Ne=e=>{const{variant:t,Icon:n,background:a,noBackground:i,subTitle:l,title:u,ctaLabel:s,onClick:c,hideIcon:d,anchor:m,bodyStyle:p,hideSubTitle:f=!1,heroCopy:h,hideTitle:g=!1}=e;return"iconOnly"===t?r.createElement(xe,{background:a,noBackground:i,variant:t,anchor:m,bodyStyle:{display:"flex",padding:"4px 4px",alignItems:"center"}},!d&&r.createElement(n,{size:16})):"compact"===t?r.createElement(xe,{background:a,noBackground:i,variant:t,anchor:m,bodyStyle:{display:"flex",padding:m?"none":"3px 8px",alignItems:"center"},onClick:c,pointerCursor:!!c},!d&&r.createElement(n,{size:10}),r.createElement(Te,{variant:t},r.createElement(ke,{pvariant:t},u))):"v2"===t?r.createElement(xe,{background:a,noBackground:i,variant:t,anchor:m,bodyStyle:{display:"flex",padding:"8px 16px",alignItems:"center"}},!d&&r.createElement(n,{size:20}),r.createElement(Te,{variant:t},r.createElement(ke,{pvariant:t},u))):"v3"===t?r.createElement(xe,{background:a,noBackground:i,variant:t,anchor:m,bodyStyle:{display:"flex",alignItems:"center",flexDirection:"column",textAlign:"center",padding:"64px 0px"}},r.createElement(Le,null,!d&&r.createElement(n,{size:20}),!g&&r.createElement(ke,{pvariant:t},u)),r.createElement(Te,{variant:t},r.createElement(Ae,{size:"h2",variant:"white",bold:!0},h),!f&&r.createElement(Re,{variant:"white"},l),c&&r.createElement(we,{onClick:c,size:"medium",pVariant:t},s))):r.createElement(xe,{background:a,noBackground:i,variant:t,anchor:m,bodyStyle:Object.assign({display:"flex",padding:"24px 32px",alignItems:"center"},p)},!d&&r.createElement(n,{size:60}),r.createElement(Te,{variant:t},!f&&r.createElement(o.Typography,{size:"h5",variant:"white"},l),r.createElement(ke,{pvariant:t},u)),c&&r.createElement(we,{onClick:c},s))};Ne.defaultProps={variant:"v2",Icon:l.tv5,title:"50% Off on  yearly plans",subTitle:"Today's Special Discount",ctaLabel:"Upgrade To Premium",background:"https://s3.ap-south-1.amazonaws.com/refrens.elisif.media/discount_banner_bg_5ba5cdc8d0.png"};var De=Ne;const Ie={background:"linear-gradient(#faf9f9,#fdf9f9) padding-box, linear-gradient(to right, #ff6773, #ffc926) border-box",color:"#313149",padding:"1px",border:"2px solid transparent",borderRadius:"10px",display:"inline-block"};var Me=e=>{var t,n,d,p,y,b;const{activeBusiness:E,asideCollapsed:S,auth:C,businesses:$,defaultSelected:F=["Dashboard"],onBusinessChange:P,onItemClick:x,onSidebarToggle:k,suggestionCount:T,user:w,onProfilePublish:L,onShare:A}=e;if(!C)return r.createElement(r.Fragment,null);const R=(0,r.useRef)(null),N=(0,r.useRef)(null),D=(0,r.useRef)(null);(0,i.useBrowserEffect)((()=>{R.current=document.querySelector(":root")}),[]);const I=(0,u.Z)("(min-width: 768px)"),[M,B]=(0,r.useState)(!1),[q,O]=(0,s.Z)(!1),[_,z]=(0,s.Z)(!1),[H,W]=(0,s.Z)(!!(null===$||void 0===$?void 0:$.length)),{config:{referrerQuery:V}}=(0,v.qK)(),{host:j}=(0,c.Z)(),G=(0,r.useMemo)((()=>j?`${j}/${null===E||void 0===E?void 0:E.urlKey}?${V}=${w.r[0]}`:""),[E,j,V]),K=(0,r.useMemo)((()=>{if(E){const{products:e,portfolio:t,onboarding:n}=E,r=e&&(null===e||void 0===e?void 0:e.filter((e=>!e.archived)).length)>0,a=t&&(null===t||void 0===t?void 0:t.filter((e=>!e.archived)).length)>0;return E.isProfileCompleted&&!!r&&!!a&&!!(null===n||void 0===n?void 0:n.profileShared)}return!1}),[E]),Z=(0,r.useCallback)((()=>{k(!S)}),[k,S]);(0,r.useEffect)((()=>{var e,t;S&&!I&&(null===(e=D.current)||void 0===e||e.hide()),null===(t=R.current)||void 0===t||t.style.setProperty("--rf-aside-collapsed",S?0:1)}),[S]),(0,r.useEffect)((()=>{E&&W(!1)}),[E]);const U=(0,r.useMemo)((()=>($||[]).filter((e=>!e.isRemoved))),[$,null===E||void 0===E?void 0:E._id]),Y=(0,r.useCallback)((e=>{z(!1),x&&x(e)}),[x]),J=(0,r.useCallback)((()=>{ve(G,B)}),[G]);return(0,i.useBrowserEffect)((()=>{const e=Array.from(document.getElementsByClassName("switch-business-header"));e&&e[0]&&e[0].style&&(e[0].style.zIndex=_?"1003":"-1")}),[_]),r.createElement(h.YE,{asideCollapsed:S,premium:!!(null===(t=null===E||void 0===E?void 0:E.preferences)||void 0===t?void 0:t.premiumn),className:"no-print no-pdf"},r.createElement(h.Lf,null,!!(null===$||void 0===$?void 0:$.length)&&E&&r.createElement(h.ec,{asideCollapsed:S,className:"sidebar-header",selected:_,premium:!!(null===(n=E.preferences)||void 0===n?void 0:n.premiumn)},r.createElement(h.Nu,{isOpen:_,hide:!_,containerClassName:_?"switch-business-header":"switch-business-header-hide",trigger:"click",position:"right",align:"start",padding:10,onClickOutside:()=>z(!1),containerStyle:{boxShadow:"0 2px 16px 0 rgba(22, 28, 38, 0.12)",borderRadius:"8px",transition:"none"},content:r.createElement(h.BY,null,r.createElement(h.eC,null,r.createElement(o.Avatar,Object.assign({size:38,src:E.logo&&f()(E.logo,{w:76,h:76}),srcSet:E.logo&&m()(E.logo,[{w:76,h:76},{w:38,h:38}]),name:E.alias||E.name,fallback:!1,shape:"square"},(null===(d=E.preferences)||void 0===d?void 0:d.premiumn)?{wrapperStyle:Ie}:{})),r.createElement(h.Lz,null,r.createElement(o.Typography,{ellipsis:!0,bold:!0,size:"h5"},E.alias||E.name),(null===(p=E.preferences)||void 0===p?void 0:p.premiumn)?r.createElement(De,{variant:"compact",title:"Premium Business",noBackground:!0}):r.createElement(h.aj,null,r.createElement(o.Typography,{size:"smaller",variant:"subtle"},"Free Plan"),r.createElement(De,{variant:"compact",title:"Upgrade to Premium",anchor:!0,noBackground:!0,hideIcon:!0,onClick:()=>window.open("https://www.refrens.com/refrens-premium","_blank")})))),r.createElement(h.hE,null,r.createElement(o.Button,{variant:"neutral",href:`/${E.urlKey}`,as:"a",target:"_blank",nature:"outlined",size:"small"},r.createElement(l.dLw,{size:14,color:"#7f8fa4"}),r.createElement(h.fN,{size:"small",variant:"subtle",ellipsis:!0},"View Business Profile")),r.createElement(o.Button,{nature:"outlined",variant:"neutral",onClick:J,title:"Copy Profile Link",size:"small"},r.createElement(l.CKM,{color:M?"#7bbb5e":"#7f8fa4",size:"14"})),r.createElement(o.Button,{as:"a",type:"button",nature:"outlined",variant:"neutral",href:`/app/${E.urlKey}/settings`,onClick:()=>{z(!1),Y("Settings")},title:"Business Settings",size:"small"},r.createElement(l.G2Y,{color:"#7f8fa4",size:"14"}))),r.createElement(Pe.Z,{onBusinessChange:e=>{z(!1),P(e)},businesses:U,onItemClick:x,activeBuisnessId:null===E||void 0===E?void 0:E._id}))},r.createElement(o.Menu.Item,{icon:r.createElement(h.r,null,r.createElement(o.Avatar,Object.assign({size:38,src:E.logo&&f()(E.logo,{w:76,h:76}),srcSet:E.logo&&m()(E.logo,[{w:76,h:76},{w:38,h:38}]),name:E.alias||E.name,fallback:!1,shape:"square"},(null===(y=E.preferences)||void 0===y?void 0:y.premiumn)?{wrapperStyle:Ie}:null))),suffix:r.createElement(l._Qn,{size:12,color:"#7f8fa4"}),animate:!1,onClick:()=>z()},r.createElement("div",null,r.createElement(o.Typography,{ellipsis:!0,size:"h5"},E.alias||E.name),(null===(b=E.preferences)||void 0===b?void 0:b.premiumn)?r.createElement(De,{variant:"compact",title:"Premium Business",noBackground:!0}):r.createElement(h.aj,null,r.createElement(o.Typography,{size:"smaller",variant:"subtle"},"Free Plan"),r.createElement(De,{variant:"compact",title:"Upgrade to Premium",anchor:!0,noBackground:!0,hideIcon:!0,onClick:()=>window.open("https://www.refrens.com/refrens-premium","_blank")})))))),r.createElement(h.i5,{ref:N},H&&!E&&r.createElement(r.Fragment,null,r.createElement(a.xu,{height:"38px",marginTop:"24px"},r.createElement(o.Skeleton,{active:!0})),r.createElement(a.xu,{height:"38px",marginTop:"24px"},r.createElement(o.Skeleton,{active:!0})),r.createElement(a.xu,{height:"38px",marginTop:"24px"},r.createElement(o.Skeleton,{active:!0})),r.createElement(a.xu,{height:"38px",marginTop:"24px"},r.createElement(o.Skeleton,{active:!0}))),!!(null===$||void 0===$?void 0:$.length)&&E&&r.createElement(o.Menu,{defaultSelected:F},r.createElement(g.Z,{itemKey:"Dashboard",onClick:()=>Y("Dashboard"),icon:r.createElement(l.YuO,{size:18,color:"#7f8fa4"}),title:"Dashboard","data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"OverviewClick",href:`/app/${E.urlKey}`,lydia:{route:"Dashboard",params:{business:E.urlKey}}},r.createElement(o.Typography,{variant:"none",ellipsis:!0},"Dashboard")),r.createElement(o.Menu.SubMenu,{title:"Profiles & Leads",label:r.createElement(o.Typography,{ellipsis:!0,variant:"none",size:"span"},"Profiles & Leads"),defaultOpen:!0,icon:r.createElement(l.jbu,{size:18,color:"#7f8fa4"}),animate:!1},r.createElement(g.Z,{itemKey:"BusinessProfile",onClick:()=>Y("BusinessProfile"),title:E.isPrivate?"Your Business Profile Is Not Public":"Your Profile","data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"ProfileClick",href:`/${E.urlKey}`,lydia:{route:"BusinessProfile",params:{business:E.urlKey}},suffix:E.isPrivate&&r.createElement(l.v3j,{size:16,color:"#eb493c"})},r.createElement(o.Typography,{variant:"none",ellipsis:!0},"Your Profile")),r.createElement(g.Z,{itemKey:"RequirementsIndex",onClick:()=>Y("RequirementsIndex"),title:"Requirements",href:"/app/requirements","data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"RequirementsClick",lydia:{route:"RequirementsIndex"},suffix:!!(null===T||void 0===T?void 0:T.openRequirements)&&r.createElement(h.w5,{size:"smaller",color:"#fe3e82"},T.openRequirements<=99?T.openRequirements:`${T.openRequirements}+`)},r.createElement(o.Typography,{variant:"none",ellipsis:!0},"Your Requirements")),r.createElement(g.Z,{itemKey:"BusinessCustomerLeads",onClick:()=>Y("BusinessCustomerLeads"),title:"Your Sales Leads",href:`/app/${E.urlKey}/leads`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"LeadsClick",lydia:{route:"BusinessCustomerLeads",params:{business:E.urlKey}},suffix:!!(null===T||void 0===T?void 0:T.openLeads)&&r.createElement(h.w5,{size:"smaller"},T.openLeads<=99?T.openLeads:`${T.openLeads}+`)},r.createElement(o.Typography,{variant:"none",ellipsis:!0},"Your Leads")),r.createElement(g.Z,{itemKey:"ManageClient",onClick:()=>Y("ManageClient"),title:"Your Clients",href:`/app/${E.urlKey}/clients`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"ManageClientClick",lydia:{route:"ClientManagement",params:{business:E.urlKey}}},r.createElement(o.Typography,{variant:"none",ellipsis:!0},"Your Clients")),r.createElement(g.Z,{itemKey:"VendorPotentialLeads",onClick:()=>Y("VendorPotentialLeads"),title:"Your Marketplace Leads",href:`/app/${E.urlKey}/leads/lead-feed`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"LeadsClick",lydia:{route:"VendorPotentialLeads",params:{business:E.urlKey}}},r.createElement(o.Typography,{variant:"none",ellipsis:!0},"Your Marketplace Leads"))),r.createElement(o.Menu.SubMenu,{title:"Accounting",label:r.createElement(o.Typography,{ellipsis:!0,variant:"none",size:"span"},"Accounting"),defaultOpen:!0,icon:r.createElement(l.$Tc,{size:18,color:"#7f8fa4"}),animate:!1},r.createElement(g.Z,{itemKey:JSON.stringify({routeName:"InvoiceList",billType:"INVOICE"}),onClick:()=>Y(JSON.stringify({routeName:"InvoiceList",billType:"INVOICE"})),title:"Invoices",href:`/app/${E.urlKey}/invoices?billType=INVOICE`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"InvoicesClick",lydia:{route:"InvoiceList",params:{business:E.urlKey,billType:"INVOICE"}},suffix:!!(null===T||void 0===T?void 0:T.invoiceSuggestion)&&r.createElement(h.w5,{color:"#fe3e82",size:"smaller"},T.invoiceSuggestion<=99?T.invoiceSuggestion:`${T.invoiceSuggestion}+`)},r.createElement(o.Typography,{variant:"none",ellipsis:!0},"Invoices")),r.createElement(g.Z,{itemKey:JSON.stringify({routeName:"InvoiceList",billType:"PROFORMAINV"}),onClick:()=>Y(JSON.stringify({routeName:"InvoiceList",billType:"PROFORMAINV"})),title:"Proforma Invoices",href:`/app/${E.urlKey}/invoices?billType=PROFORMAINV`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"ProformaInvoicesClick",lydia:{route:"InvoiceList",params:{business:E.urlKey,billType:"PROFORMAINV"}}},r.createElement(o.Typography,{variant:"none",ellipsis:!0},"Proforma Invoices")),r.createElement(g.Z,{itemKey:"QuotationList",onClick:()=>Y("QuotationList"),title:"Quotations",href:`/app/${E.urlKey}/quotations`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"QuotationsClick",lydia:{route:"QuotationList",params:{business:E.urlKey}}},r.createElement(o.Typography,{variant:"none",ellipsis:!0},"Quotations & Estimates")),r.createElement(g.Z,{itemKey:"DeliveryChallanList",onClick:()=>Y("DeliveryChallanList"),title:"Delivery Challans",href:`/app/${E.urlKey}/delivery-challans`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"deliveryChallanClick",lydia:{route:"DeliveryChallanList",params:{business:E.urlKey}}},r.createElement(o.Typography,{variant:"none",ellipsis:!0},"Delivery Challans")),q&&r.createElement(r.Fragment,null,r.createElement(g.Z,{itemKey:"ExpendituresList",onClick:()=>Y("ExpendituresList"),title:"Expenditures",href:`/app/${E.urlKey}/expenditures`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"ExpendituresClick",lydia:{route:"ExpendituresList",params:{business:E.urlKey}},suffix:!!(null===T||void 0===T?void 0:T.expenditureSuggestion)&&r.createElement(h.w5,{color:"#fe3e82",size:"smaller"},T.expenditureSuggestion<=99?T.expenditureSuggestion:`${T.expenditureSuggestion}+`)},r.createElement(o.Typography,{variant:"none",ellipsis:!0},"Expense Management")),r.createElement(g.Z,{itemKey:"PurchaseOrderList",onClick:()=>Y("PurchaseOrderList"),title:"Purchase Orders",href:`/app/${E.urlKey}/purchase-orders`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"PurchaseOrderClick",lydia:{route:"PurchaseOrderList",params:{business:E.urlKey}}},r.createElement(o.Typography,{variant:"none",ellipsis:!0},"Purchase Orders")),r.createElement(g.Z,{itemKey:"CreditNoteList",onClick:()=>Y("CreditNoteList"),title:"Credit Notes",href:`/app/${E.urlKey}/credit-notes`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"CreditNoteClick",lydia:{route:"CreditNoteList",params:{business:E.urlKey}}},r.createElement(o.Typography,{variant:"none",ellipsis:!0},"Credit Notes")),r.createElement(g.Z,{itemKey:"PaymentReceiptList",onClick:()=>Y("PaymentReceiptList"),title:"Payment Receipts",href:`/app/${E.urlKey}/payment-receipts`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"PaymentReceiptClick",lydia:{route:"PaymentReceiptList",params:{business:E.urlKey}}},r.createElement(o.Typography,{variant:"none",ellipsis:!0},"Payment Receipts")),r.createElement(g.Z,{itemKey:"DebitNoteList",onClick:()=>Y("DebitNoteList"),title:"Debit Notes",href:`/app/${E.urlKey}/debit-notes`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"DebitNoteClick",lydia:{route:"DebitNoteList",params:{business:E.urlKey}}},r.createElement(o.Typography,{variant:"none",ellipsis:!0},"Debit Notes")),r.createElement(g.Z,{itemKey:"Inventory",onClick:()=>Y("Inventory"),title:"Inventory","data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"InventoryClick",href:`/app/${E.urlKey}/inventory`,lydia:{route:"Inventory",params:{business:E.urlKey}},suffix:r.createElement(o.Tag,{status:"processing",size:"smaller"},"BETA")},r.createElement(o.Typography,{ellipsis:!0,variant:"none"},"Inventory")),r.createElement(g.Z,{itemKey:"BusinessWallet",onClick:()=>Y("BusinessWallet"),title:"Bank & Payments",href:`/app/${E.urlKey}/wallet`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"BusinessWalletClick",lydia:{route:"BusinessWallet",params:{business:E.urlKey}}},r.createElement(o.Typography,{ellipsis:!0,variant:"none"},"Bank & Payments")),r.createElement(g.Z,{itemKey:"Reports",onClick:()=>Y("Reports"),title:"Accounting Reports","data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"ReportsClick",href:`/app/${E.urlKey}/reports`,lydia:{route:"Reports",params:{business:E.urlKey}}},r.createElement(o.Typography,{ellipsis:!0,variant:"none"},"Accounting Reports \xa0\xa0",r.createElement(l.tv5,{size:18})))),r.createElement(o.Menu.Item,{onClick:()=>O()},r.createElement(o.Typography,{variant:"subtle",size:"small"},q?"Show Less":"See More Tools"))),r.createElement(g.Z,{itemKey:"Settings",onClick:()=>Y("Settings"),title:"Business Settings",icon:r.createElement(l.G2Y,{size:18,color:"#7f8fa4"}),href:`/app/${E.urlKey}/settings`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"PreferencesClick",lydia:{route:"Settings",params:{business:E.urlKey}}},r.createElement(o.Typography,{variant:"none",ellipsis:!0},"Business Settings"))),!(null===$||void 0===$?void 0:$.length)&&r.createElement(o.Menu,null,r.createElement(g.Z,{itemKey:"NewBusiness",onClick:()=>Y("NewBusiness"),icon:r.createElement(l.v37,{size:20,color:"#Fe3e82"}),"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"NewBusinessClick",href:"/app/businesses/new",lydia:{route:"NewBusiness"}},r.createElement(o.Typography,{ellipsis:!0,variant:"primary"},"Create Business")),r.createElement(g.Z,{itemKey:JSON.stringify({routeName:"NewInvoice",billType:"INVOICE"}),onClick:()=>Y(JSON.stringify({routeName:"NewInvoice",billType:"INVOICE"})),title:"Invoices",icon:r.createElement(l.xn5,{size:18,color:"#7f8fa4"}),href:"/create-invoice-lite",elisif:{href:"/create-invoice-lite",as:"/create-invoice-lite"},"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"InvoicesClick"},r.createElement(o.Typography,{ellipsis:!0},"Create Invoice")),r.createElement(g.Z,{itemKey:JSON.stringify({routeName:"NewInvoice",billType:"PROFORMAINV"}),onClick:()=>Y(JSON.stringify({routeName:"NewInvoice",billType:"PROFORMAINV"})),title:"Proforma Invoices",icon:r.createElement(l.TX1,{size:18,color:"#7f8fa4"}),href:"/create-proforma-invoice-lite",elisif:{href:"/create-proforma-invoice-lite",as:"/create-proforma-invoice-lite"},"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"ProformaInvoicesClick"},r.createElement(o.Typography,{ellipsis:!0},"Create Proforma Invoices")),r.createElement(g.Z,{itemKey:"NewQuotation",onClick:()=>Y("NewQuotation"),title:"Quotations",icon:r.createElement(l.my0,{size:18,color:"#7f8fa4"}),href:"/create-quotation-lite",elisif:{href:"/create-quotation-lite",as:"/create-quotation-lite"},"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"NewQuotationClick"},r.createElement(o.Typography,{ellipsis:!0},"Create Quotations")))),w&&E&&!K&&r.createElement(h.ZW,null,r.createElement(Fe,{user:w,activeBusiness:E,onProfilePublish:L,onShare:A,ref:D}))),r.createElement(h.aV,{onClick:Z,onKeyPress:Z,role:"button",tabIndex:0,"aria-label":"overlay",asideCollapsed:S}),r.createElement(h.T7,{copySuccess:M},r.createElement(l.fU8,{color:"#1bb934",size:18}),r.createElement(o.Typography,{inline:!0},"Link Copied")))}},18674:function(e,t,n){"use strict";n.d(t,{Y:function(){return r.Z},Z:function(){return i.ZE}});var r=n(36324),a=n(67233);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"SigninForm")&&n.d(t,{SigninForm:function(){return a.SigninForm}}),n.o(a,"SignupForm")&&n.d(t,{SignupForm:function(){return a.SignupForm}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}});var i=n(52879)},52879:function(e,t,n){"use strict";n.d(t,{ZE:function(){return i},YE:function(){return o},ec:function(){return l},aV:function(){return u},Lf:function(){return s},i5:function(){return c},ZW:function(){return d},eC:function(){return m},hE:function(){return p},T7:function(){return f},BY:function(){return h},fN:function(){return g},w5:function(){return y},Nu:function(){return v},r:function(){return b},Lz:function(){return E},aj:function(){return S}});var r=n(2544),a=n(52220);const i=a.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  ${({theme:{screens:e},asideCollapsed:t,auth:n})=>a.css`
    ${n&&a.css`
      @media screen and (${e.gte.lg}) {
        ${t&&a.css`
          margin-left: 60px;
        `}
      }
      @media screen and (${e.lte.lg}) {
        ${a.css`
          margin-left: 60px;
        `}
      }
      @media screen and (${e.lte.sm}) {
        ${a.css`
          margin-left: 0;
        `}
      }
    `}
  `};
`,o=a.default.div`
  ${({theme:{colors:e,screens:t,spacings:n},asideCollapsed:r,premium:i})=>a.css`
    background: ${e.neutral[0]};
    color: ${e.neutral[7]};
    box-shadow: 0 0 4px 0 rgba(23, 28, 37, 0.12);
    width: 270px;
    min-width: 270px;
    text-align: left;
    height: calc(100vh - 56px);
    position: sticky;
    top: 56px;
    transition: 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 999;
    a {
      text-decoration: none;
      color: inherit;
    }
    @media screen and (${t.lte.sm}) {
      position: fixed;
      top: 0;
      left: -270px;
      height: 100vh;
      ${!r&&a.css`
        left: 0;
        top: 0;
      `}
    }

    @media screen and (${t.gte.sm}) and (${t.lte.lg}) {
      ${!r&&a.css`
        left: 0;
        top: 56px;
        position: fixed;
      `}
    }

    @media screen and (${t.gte.sm}) {
      ${r&&a.css`
        width: 60px;
        min-width: 60px;
        position: fixed;
        ul {
          ul {
            height: 0;
          }
        }
        .sidebar-header {
          li:first-child > div {
            padding-left: ${n.s1} !important;
          }
        }
        &:hover {
          width: 60px;
          min-width: 270px;
          transition-delay: 0.2s;
          ul {
            ul {
              height: auto;
            }
          }
          .sidebar-header {
            padding-left: ${n.s2};
            li:first-child {
              min-width: 48px;
              > div {
                ${i&&a.css`
                  border: 1px solid ${e.neutral[4]};
                `}
              }
            }
          }
        }
      `}
    }
  `}
`,l=(a.default.div`
  ${({theme:{screens:e},asideCollapsed:t})=>a.css`
    @media screen and (${e.gte.sm}) {
      ${t&&a.css`
        display: none;
      `}
    }
  `}
`,(0,a.default)(r.Menu)`
  ${({theme:{spacings:e,colors:t},asideCollapsed:n,selected:r,premium:i})=>a.css`
    && {
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      max-width: 269px;
      width: 100%;
      padding-right: ${e.s2};
      padding-left: ${e.s2};
      li:first-child {
        height: 55px;
        margin: ${e.s3} 0;
        background: none;
        > div {
          height: 3.75rem;
          padding-left: ${e.s2};
          padding-right: ${e.s3};
          border-radius: ${e.s2};
          border: 1px solid ${t.neutral[4]};
          ${r&&a.css`
            background-color: ${t.neutral[2]};
          `}
          ${i&&n&&a.css`
            border: none;
          `}
        }
      }
      .content {
        flex-shrink: 0;
      }
      ${n&&a.css`
        padding-left: ${e.s1};
        li:first-child {
          border-radius: 0;
          border: none;
          background: none;
        }
      `}
    }
  `}
}`),u=a.default.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 109;
  display: none;
  ${({theme:{screens:e},asideCollapsed:t})=>a.css`
    @media screen and (${e.lte.sm}) {
      ${!t&&a.css`
        display: block;
      `}
    }
  `}
`,s=a.default.div`
  ${({theme:{colors:e}})=>a.css`
    height: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 110;
    background: ${e.neutral[0]};
  `}
`,c=a.default.div`
  overflow: auto;
  overflow-x: hidden;
  flex-grow: 1;
  ${({theme:{colors:e,spacings:t,radii:n}})=>a.css`
    padding: 0 ${t.s2};
    &::-webkit-scrollbar {
      background-color: ${e.neutral[0]};
      width: ${t.s1};
    }
    &::-webkit-scrollbar-track {
      width: ${t.s1};
    }
    &::-webkit-scrollbar-thumb {
      background-color: #b4c2d5;
      margin-right: ${t.s1};
      border-radius: ${n.md};
    }
  `};
`,d=a.default.div`
  flex-shrink: 0;
  cursor: pointer;
  ${({theme:{colors:e}})=>a.css`
    border-top: 1px solid ${e.neutral[4]};
  `}
`,m=a.default.div`
  display: flex;
  align-items: center;
  ${({theme:{spacings:e}})=>a.css`
    margin-top: ${e.s2};
    margin-bottom: ${e.s3};
    margin-left: ${e.s2};
    img {
      object-fit: scale-down;
    }
    div {
      flex-shrink: 0;
      border-radius: ${e.s2};
    }
  `}
`,p=(a.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({theme:{colors:e}})=>a.css`
    button {
      &:hover {
        * {
          stroke: ${e.neutral[7]};
        }
      }
    }
  `}
`,a.default.div`
  display: flex;
  align-items: center;
  ${({theme:{spacings:e}})=>a.css`
    margin-bottom: ${e.s4};
    margin-left: ${e.s2};
    button,
    a {
      margin-right: ${e.s4};
      padding-left: ${e.s2};
      padding-right: ${e.s2};
      svg {
        margin-right: 0 !important;
      }
    }
  `}
`),f=a.default.div`
  position: fixed;
  left: calc(50vw - 24px);
  margin: 0 auto;
  text-align: center;
  top: -100px;
  display: flex;
  z-index: 1000;
  align-items: center;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 9px 28px 8px rgba(0, 0, 0, 0.05);
  transition: top 0.25s, background-color 0.25s, color 0.25s;
  ${({theme:{spacings:e,colors:t,radii:n},copySuccess:r})=>a.css`
    padding: ${e.s3} ${e.s4};
    border-radius: ${n.lg};
    background: ${t.neutral[0]};
    span {
      margin-left: ${e.s2};
    }

    ${r&&a.css`
      top: 60px;
    `}
  `}
`,h=a.default.div`
  ${({theme:{spacings:e}})=>a.css`
    padding: ${e.s2};
    max-height: calc(100vh - 120px);
    font-family: 'Rubik';
  `}
`,g=(0,a.default)(r.Typography)`
  ${({theme:{spacings:e}})=>a.css`
    margin-left: ${e.s1};
  `}
`,y=(0,a.default)(r.Tag)`
  && {
    margin: 0;
    font-size: 10px;
    font-weight: 500;
    border: unset;
    color: #fe3e82;
    background: rgba(254, 62, 130, 0.12);
  }
`,v=(0,a.default)(r.Popover)`
  ${({hide:e})=>a.css`
    font-family: 'Rubik', 'Roboto', sans-serif;
    ${e&&a.css`
      z-index: -1;
    `}
  `}
`,b=a.default.div`
  img {
    object-fit: scale-down;
  }
  display: flex;
  ${({theme:{spacings:e}})=>a.css`
    div {
      border-radius: ${e.s2};
    }
  `};
`,E=a.default.div`
  ${({theme:{spacings:e}})=>a.css`
    margin-left: ${e.s2};
  `}
`,S=a.default.div`
  display: flex;
  align-items: center;
`},67233:function(){},34015:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(70655),a=n(67294),i=n(6411),o=n(2544),l=n(94829),u=n(68041),s=n(48398);const{object:c,string:d}=u;var m=c().shape({email:(0,s.Do)().required("Email is required"),password:d().trim().nullable().required("Password is required")}),p=n(9379),f=n(99701),h=n(58929),g=n(38674),y=n(52019);const v={email:"",password:""};var b=e=>{const{defaultValue:t,onSubmit:n}=e,[u,s]=(0,a.useState)(null),[c,d]=(0,a.useState)(null),b=(0,a.useRef)(),E=(0,a.useRef)(null),S=(0,l.Z)("(max-width: 768px)"),C=(0,a.useCallback)((e=>"Invalid login"===((null===e||void 0===e?void 0:e.message)||e)?a.createElement(a.Fragment,null,a.createElement(o.Typography,{inline:!0,variant:"error"},"The email or password is wrong. Please try again or"," "),a.createElement(y.Z,{elisif:{href:"/register",as:"/register"},hrefProps:{href:"/forgotpassword"}},a.createElement(o.Typography.A,{inline:!0,variant:"error"},"Click here")),a.createElement(o.Typography,{inline:!0,variant:"error"}," ","if you don't remember the password.")):(0,g.Z)(e)),[]),$=(0,a.useCallback)(((e,{setSubmitting:t})=>(0,r.mG)(void 0,void 0,void 0,(function*(){try{yield n(Object.assign(Object.assign({},e),{type:"signin"}),c)}catch(r){b.current.onError(r).catch((()=>{s(C(r))}))}return t(!1),Promise.resolve()}))),[n,b.current]),F={initialValues:v,validationSchema:m,onSubmit:$,validateOnMount:!0,innerRef:E};return a.createElement(a.Fragment,null,a.createElement(o.Form,{formik:F},a.createElement(o.Form.Reset,{resetValue:t}),a.createElement(i.kC,{flexDirection:["column"],justifyContent:"space-between"},a.createElement(f.Z,{fullWidth:!0,onSuccess:e=>(0,r.mG)(void 0,void 0,void 0,(function*(){var t,r;try{null===(t=E.current)||void 0===t||t.setSubmitting(!0),yield n(e)}catch(a){s((null===a||void 0===a?void 0:a.message)||a)}finally{null===(r=E.current)||void 0===r||r.setSubmitting(!1)}})),size:"large"},"Sign in with Google"),a.createElement(i.xu,{mt:"30px"},a.createElement(p.e,{size:"h6"},"OR")),a.createElement(i.xu,{mt:"30px"},a.createElement(o.Form.Input,{label:"Email",direction:S?"column":"row",outlined:!0,name:"email",labelWidth:S?1:1/3.5})),a.createElement(i.xu,{mt:"30px"},a.createElement(o.Form.Password,{name:"password",label:"Password",direction:S?"column":"row",outlined:!0,visibilityToggle:!0,labelWidth:S?1:1/3.5})),u&&a.createElement(i.xu,{my:"30px"},a.createElement(o.Form.Error,{error:u})),a.createElement(h.Z,{ref:b,onChange:d,wrapperProps:{mt:"30px",alignSelf:"center"}}),a.createElement(i.xu,{mt:"40px"},a.createElement(o.Form.Button,{fullWidth:!0,size:"large"},"Login And Continue")))))}},95831:function(e,t,n){"use strict";n.d(t,{G:function(){return r.Z}});var r=n(34015),a=n(17964);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"SignupForm")&&n.d(t,{SignupForm:function(){return a.SignupForm}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},17964:function(){},63533:function(e,t,n){"use strict";n.d(t,{Z:function(){return $}});var r=n(70655),a=n(67294),i=n(6411),o=n(2544),l=n(89583),u=n(86818),s=n(89211),c=n(93002),d=n(94829),m=n(68041),p=n(48398);const{object:f,string:h}=m;function g(e){const t=h().trim().nullable();return f().shape({email:(0,p.Do)().required("Email is required"),password:e?t.required("Password is required"):t,country:(0,p.Ys)(u).required("Country is required").default("IN"),name:h().trim().nullable().required("Name is required"),phone:(0,p.Hd)().nullable()})}var y=n(9379),v=n(99701),b=n(58929),E=n(52019);const S={email:"",password:"",country:"IN",name:"",phone:""},C=e=>{var t;const{defaultValue:n,showCountry:m,showPassword:p,signupButtonLabel:f,termsConditionLabelSize:h,description:C,onSubmit:$,validateEmail:F,onLoginClick:P=(()=>{window.location.href="/login"})}=e,[x,k]=(0,a.useState)(p),[T,w]=(0,a.useState)(null),[L,A]=(0,a.useState)(null),R=(0,a.useRef)(),N=(0,a.useRef)(null),[D,I]=(0,s.Z)(!0),[M,B]=(0,c.Z)(),q=(0,d.Z)("(max-width: 768px)"),O=a.createElement(o.Typography,{size:"small",variant:"warn",inline:!0},"Email Already Exists.\xa0",a.createElement(o.Typography,{size:"small",variant:"warn",inline:!0,underline:!0,onClick:P},"Click here to login.")),_={initialValues:S,validationSchema:g(p),onSubmit:(e,{setSubmitting:t})=>(0,r.mG)(void 0,void 0,void 0,(function*(){try{yield $(Object.assign(Object.assign({},e),{type:"signup"}),L)}catch(n){R.current.onError(n).catch((()=>{w((null===n||void 0===n?void 0:n.message)||n)}))}return t(!1),Promise.resolve()})),validateOnMount:!0,innerRef:N},z=Object.entries(u).map((([e,t])=>({label:t,value:e})));return a.createElement(a.Fragment,null,a.createElement(o.Form,{formik:_},a.createElement(o.Form.Reset,{resetValue:n}),a.createElement(i.kC,{flexDirection:["column"],justifyContent:"space-between"},a.createElement(v.Z,{fullWidth:!0,onSuccess:e=>(0,r.mG)(void 0,void 0,void 0,(function*(){var t,n;try{null===(t=N.current)||void 0===t||t.setSubmitting(!0),yield $(e)}catch(r){w((null===r||void 0===r?void 0:r.message)||r)}finally{null===(n=N.current)||void 0===n||n.setSubmitting(!1)}})),size:"large"},"Signup with Google"),a.createElement(i.xu,{mt:"30px"},a.createElement(y.e,{size:"h6"},"OR")),a.createElement(i.xu,{mt:"30px"},a.createElement(o.Form.Input,{name:"name",label:"Full Name",direction:q?"column":"row",labelName:"Full Name",outlined:!0,labelWidth:q?1:1/3.5,required:!0,size:"medium"})),m&&a.createElement(i.xu,{mt:"30px"},a.createElement(o.Form.Select,{name:"country",options:z,outlined:!0,label:"Country",direction:q?"column":"row",labelWidth:q?1:1/3.5,size:"medium"})),a.createElement(i.xu,{mt:"30px"},a.createElement(o.Form.Input,Object.assign({name:"email",label:"Email",direction:q?"column":"row",outlined:!0,labelWidth:q?1:1/3.5,onBlur:()=>(0,r.mG)(void 0,void 0,void 0,(function*(){var e;if(F){const{value:n,error:r}=(null===(e=N.current)||void 0===e?void 0:e.getFieldMeta("email"))||{};if(n&&!r)try{const e=yield F(n,L);B({status:e?"warn":"none",message:e?O:""})}catch(t){R.current.onError(t).catch((()=>{w((null===t||void 0===t?void 0:t.message)||t)})),B({status:"none",message:""})}}})),required:!0,size:"medium"},M))),a.createElement(i.xu,{mt:"30px"},a.createElement(o.Form.PhoneInput,{name:"phone",label:"Phone",direction:q?"column":"row",outlined:!0,labelWidth:q?1:1/3.5,country:null===(t=null===n||void 0===n?void 0:n.country)||void 0===t?void 0:t.toLowerCase(),size:"medium"})),!x&&a.createElement(i.xu,{mt:"24px"},a.createElement(o.Button,{variant:"neutral",anchor:!0,onClick:()=>{k(!0)}},a.createElement(l.kUi,null)," Set Password")),x&&a.createElement(i.xu,{mt:"30px"},a.createElement(o.Form.Password,{name:"password",label:"Password",direction:q?"column":"row",outlined:!0,labelWidth:q?1:1/3.5,visibilityToggle:!0,size:"medium",required:p})),a.createElement(i.xu,{mt:"30px"},a.createElement(o.Checkbox,{checked:D,onChange:({target:{checked:e}})=>I(e)}),a.createElement(o.Typography,{inline:!0,variant:"none",size:h},"I agree to the Refrens"," ",a.createElement(E.Z,{hrefProps:{href:"/terms",target:"_blank"}},a.createElement(o.Typography.A,{size:h,variant:"none"},"Terms of Service"))," and ",a.createElement(E.Z,{hrefProps:{href:"/privacy-policy",target:"_blank"}},a.createElement(o.Typography.A,{size:h,variant:"none"},"Privacy Policy")))),!!C&&a.createElement(i.xu,{mt:"24px",textAlign:"center"},a.createElement(o.Typography,{variant:"none",size:"small"},C)),T&&a.createElement(i.xu,{my:"30px"},a.createElement(o.Form.Error,{error:T})),a.createElement(b.Z,{ref:R,onChange:A,wrapperProps:{mt:"30px",alignSelf:"center"}}),a.createElement(i.xu,{mt:"40px"},a.createElement(o.Form.Button,{fullWidth:!0,size:"large",disabled:!D||"warn"===M.status},f)))))};C.defaultProps={signupButtonLabel:"Save and Continue",termsConditionLabelSize:"small",showCountry:!1,showPassword:!1};var $=C},87444:function(e,t,n){"use strict";n.d(t,{C:function(){return r.Z}});var r=n(63533),a=n(59361);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"Startup")&&n.d(t,{Startup:function(){return a.Startup}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},9379:function(e,t,n){"use strict";n.d(t,{e:function(){return i}});var r=n(52220),a=n(2544);const i=(0,r.default)(a.Typography)`
  && {
    display: flex;
    flex-direction: row;
    ${({theme:{colors:e,spacings:t}})=>r.css`
      color: ${e.neutral[5]};
      &:before,
      &:after {
        content: '';
        flex: 1 1;
        border-bottom: 1px solid ${e.neutral[4]};
        margin: auto;
      }
      &:before {
        margin-right: ${t.s6};
      }
      &:after {
        margin-left: ${t.s6};
      }
    `}
  }
`},59361:function(){},8920:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(67294),a=n(2544),i=n(34578),o=n(79874),l=n(52220),u=n(32929);const s=(0,l.default)(u.W)`
  ${({theme:{screens:e,spacings:t}})=>l.css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-top: ${t.s5};

    @media screen and (${e.gte.sm}) {
      flex-direction: row;
      padding-top: 40px;
      > div {
        min-width: 50%;
        max-width: 50%;
      }
    }
    @media screen and (${e.gte.md}) {
      flex-direction: column;
      && {
        > div {
          min-width: unset;
          max-width: unset;
          margin-bottom: 88px;
          > h3 {
            margin-bottom: 40px;
          }
        }
      }
    }
    > div {
      flex: 1;
      padding: 0 ${t.s4};
      margin-bottom: 47px;
      > h2 {
        margin-bottom: ${t.s3};
      }
      > h3 {
        margin-bottom: ${t.s5};
      }
    }
  `}
`,c=l.default.div`
  ${({theme:{screens:e,spacings:t}})=>l.css`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: ${t.s4};
    @media screen and (${e.gte.md}) {
      flex-direction: row;
    }
  `}
`,d=l.default.div`
  ${({theme:{screens:e,spacings:t}})=>l.css`
    > div {
      width: 100%;
      margin-bottom: ${t.s3};
      @media screen and (${e.gte.md}) {
        width: 428px;
        height: 284px;
      }
    }

    img {
      object-fit: fill;
    }
  `}
`,m=(0,l.default)(a.Menu)`
  ${({theme:{screens:e,spacings:t}})=>l.css`
    > ul {
      display: flex;
      flex-wrap: wrap;
    }

    > ul > li > * {
      padding-left: 0;
      margin-left: 0;
    }

    > ul > li {
      width: 100%;
      margin-bottom: ${t.s3};
    }

    @media screen and (${e.gte.md}) {
      padding-left: 40px;
      > ul > li {
        width: 50%;
      }
      > ul > li:odd {
        padding-right: ${t.s7};
      }
    }
  `}
`,p=(0,l.default)(a.Typography)`
  && {
    ${({theme:{spacings:e}})=>l.css`
      margin-right: ${e.s2};
    `}
  }
`;var f=e=>{const{services:t}=e;return r.createElement(s,null,t.map((({title:e,description:t,image:n,links:l,id:u})=>r.createElement("div",{key:u},r.createElement(a.Typography,{as:"h2",bold:!0},e),t&&r.createElement(a.Typography,{as:"h3",size:"h5",variant:"none"},t),r.createElement(c,null,r.createElement(d,null,r.createElement(a.Image,Object.assign({},n))),r.createElement(m,null,l.map((e=>r.createElement(o.Z,{key:e.id,elisif:{href:e.href,as:e.as},target:e.isExternal?"_blank":"_self",suffix:r.createElement(i._Qn,{size:12,color:"#516173"})},r.createElement(p,{variant:"neutral"},e.label))))))))))}},61793:function(e,t,n){"use strict";n.d(t,{l:function(){return r.Z}});var r=n(8920),a=n(92034);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"StaticFooter")&&n.d(t,{StaticFooter:function(){return a.StaticFooter}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},92034:function(){},96348:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(70655),a=n(67294),i=n(86893),o=n(2544),l=n(34578),u=n(6411),s=n(55396),c=n(79874),d=n(26316),m=n(52220);const p=m.default.div`
  ${({theme:{colors:e,spacings:t}})=>m.css`
    padding: ${t.s5} 0 ${t.s3};
    a {
      text-decoration: none;
      color: ${e.neutral[6]};
      margin: 0;
    }
  `};
`,f=(0,m.default)(o.Typography)`
  && {
    ${({theme:{colors:e,spacings:t}})=>m.css`
      padding: 0 0 ${t.s5};
      a {
        text-decoration: none;
        color: ${e.neutral[6]};
        margin: 0;
      }
    `}
  }
`,h=m.default.div`
  display: flex;
  flex-direction: column;
  ${({theme:{breakpoints:e}})=>m.css`
    margin-bottom: 40px;
    @media screen and (min-width: ${e[0]}) {
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  `}
`,g=m.default.div`
  &:after {
    display: table;
    clear: both;
    content: '';
  }
  ${({theme:{breakpoints:e}})=>m.css`
    @media screen and (min-width: ${e[0]}) {
      width: 60%;
    }
    @media screen and (min-width: ${e[1]}) {
      width: 50%;
    }
  `}
`,y=m.default.div`
  display: flex;
  flex-direction: column;
`,v=m.default.div`
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  ${({theme:{breakpoints:e,spacings:t}})=>m.css`
    padding: ${t.s5} ${t.s3} 0;
    @media screen and (min-width: ${e[1]}) {
      text-align: left;
      padding: ${t.s5} ${t.s3} 0 0;
    }

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        a {
          padding: 5px;
          height: auto;
          display: flex;
          span {
            margin-left: 0;
          }
        }

        div {
          padding: 0;
          height: auto;
        }
      }
    }
  `}

  > div {
    text-align: left;
    display: flex;
  }
`,b=(0,m.default)(o.Typography)`
  && {
    font-weight: 500;
    text-align: left;
    padding-top: 5px;
    width: 33%;
    ${({theme:{breakpoints:e}})=>m.css`
      @media screen and (min-width: ${e[1]}) {
        width: 25%;
      }
    `}
  }
`,E=m.default.li`
  ${({theme:{spacings:e,colors:t,sizes:n}})=>m.css`
    display: flex;
    align-items: center;
    font-size: ${n.span};
    margin-left: ${e.s1};
    color: ${t.neutral[6]};
  `}
`,S=m.default.div`
  text-align: center;
  ${({theme:{breakpoints:e,spacings:t}})=>m.css`
    padding: ${t.s5} ${t.s3};
    @media screen and (min-width: ${e[1]}) {
      text-align: left;
      width: 40%;
    }
    a {
      display: inline-flex;
      text-decoration: none;
      img {
        margin-bottom: ${t.s3};
      }
    }
  `}
`,C=m.default.div`
  max-width: 500px;
  margin: auto;
  ${({theme:{spacings:e}})=>m.css`
    padding: ${e.s3};
  `}
`,$=m.default.div`
  ${({theme:{colors:e,breakpoints:t}})=>m.css`
    a {
      color: ${e.neutral[6]};
      display: block;
      > svg {
        vertical-align: middle;
      }
      @media screen and (max-width: ${t[0]}) {
        justify-content: center;
      }
    }
  `}
`,F=e=>{const{paymentOptions:t,companyLinks:n,productLinks:m,templateLinks:F,helpfulLinks:P,phone:x,email:k}=e,T=(0,r._T)(e,["paymentOptions","companyLinks","productLinks","templateLinks","helpfulLinks","phone","email"]),{crispReady:w,openHelp:L}=(0,d.qK)(),A="function"===typeof T.hideLocale?T.hideLocale():!!T.hideLocale,R=k||"care@refrens.com";return a.createElement(a.Fragment,null,a.createElement(h,null,a.createElement(g,null,!A&&a.createElement(u.xu,{maxWidth:"400px",my:"20px"},a.createElement(s.Z,Object.assign({},T))),a.createElement(y,null,!!n.length&&a.createElement(v,null,a.createElement("div",null,a.createElement(b,{size:"h5"},"Company"),a.createElement(o.Menu,null,n.map(((e,t)=>{const r=t===n.length-1;return a.createElement(a.Fragment,{key:e.id},a.createElement(c.Z,{href:e.as||e.href,elisif:{href:e.href,as:e.as},target:e.isExternal?"_blank":"_self",title:e.label},a.createElement(o.Typography,{variant:"none"},e.label)),!r&&a.createElement(E,null,"|"))}))))),!!m.length&&a.createElement(v,null,a.createElement("div",null,a.createElement(b,{size:"h5"},"Free Tools"),a.createElement(o.Menu,null,m.map(((e,t)=>{const n=t===m.length-1;return a.createElement(a.Fragment,{key:e.id},a.createElement(c.Z,{href:e.as||e.href,elisif:{href:e.href,as:e.as},target:e.isExternal?"_blank":"_self",title:e.label},a.createElement(o.Typography,{variant:"none"},e.label)),!n&&a.createElement(E,null,"|"))}))))),a.createElement(v,null,!!F.length&&a.createElement("div",null,a.createElement(b,{size:"h5"},"Templates"),a.createElement(o.Menu,null,F.map(((e,t)=>{const n=t===F.length-1;return a.createElement(a.Fragment,{key:e.id},a.createElement(c.Z,{href:e.as||e.href,elisif:{href:e.href,as:e.as},target:e.isExternal?"_blank":"_self",title:e.label},a.createElement(o.Typography,{variant:"none"},e.label)),!n&&a.createElement(E,null,"|"))})))),!!P.length&&a.createElement("div",{style:{marginTop:F.length?20:0,width:"100%"}},a.createElement(b,{size:"h5"},"Helpful Links"),a.createElement(o.Menu,null,P.map(((e,t)=>{var n;const r=t===P.length-1;return a.createElement(a.Fragment,{key:e.id},(null===(n=e.params)||void 0===n?void 0:n.isCrisp)?a.createElement(a.Fragment,null,w&&a.createElement(o.Menu.Item,null,a.createElement(o.Button,{anchor:!0,variant:"neutral",onClick:L},a.createElement(o.Typography,{variant:"none"},e.label)))):a.createElement(c.Z,{href:e.as||e.href,elisif:{href:e.href,as:e.as},target:e.isExternal?"_blank":"_self",title:e.label},a.createElement(o.Typography,{variant:"none"},e.label)),!r&&a.createElement(E,null,"|"))})))))),(null===t||void 0===t?void 0:t.imageProps)&&a.createElement(C,null,a.createElement(o.Image,Object.assign({},t.imageProps)))),a.createElement(S,null,a.createElement("a",{title:"Refrens",href:"/"},a.createElement(l.twM,{size:40})),a.createElement("div",null,a.createElement("a",{target:"_blank",rel:"external nofollow noopener noreferrer",title:"Facebook",href:"https://www.facebook.com/refrensApp"},a.createElement(l.s1S,{color:"#3B5998",size:24,style:{marginRight:"0.5rem"}})),a.createElement("a",{target:"_blank",rel:"external nofollow noopener noreferrer",title:"Twitter",href:"https://www.twitter.com/refrensApp"},a.createElement(l.tLe,{color:"#1DA1F2",size:24}))),a.createElement("br",null),a.createElement("br",null),a.createElement("div",null,a.createElement("span",{role:"img","aria-label":"sd"},a.createElement("div",null,"Made with ",a.createElement(l.nYX,{size:16})," ",a.createElement(l.cIM,{size:16})," and ",a.createElement(l.Xdw,{size:16})," in Bengaluru."))),a.createElement("br",null),a.createElement($,null,x&&a.createElement(a.Fragment,null,a.createElement(o.Button,{anchor:!0,as:"a",href:`tel:${x}`,variant:"secondary"},a.createElement(i.CoD,{size:16}),x),a.createElement(o.Button,{anchor:!0,as:"a",href:`https://wa.me/${x}`,variant:"secondary"},a.createElement(l.CDv,{size:16,color:"#25D366"}),x)),a.createElement(o.Button,{anchor:!0,as:"a",href:`mailto:${R}`,variant:"secondary"},a.createElement(l.GTk,{size:16,color:"#E94034"}),R)),a.createElement("br",null),a.createElement("div",{className:"fb-like","data-href":"fb","data-layout":"standard","data-action":"like","data-size":"small","data-show-faces":"true","data-share":"false","data-width":"250"}),a.createElement("div",{id:"fb-root"}),a.createElement(p,null,a.createElement(o.Typography,{variant:"none"},`\xa9${(new Date).getUTCFullYear()} | `,a.createElement("a",{href:"/",title:"Refrens"},"Refrens Internet Pvt. Ltd.")," | All Rights Reserved")),a.createElement(f,{size:"h6",variant:"none"},"This site is protected by reCAPTCHA and the Google"," ",a.createElement(o.Typography.A,{href:"https://policies.google.com/privacy"},"Privacy Policy")," and ",a.createElement(o.Typography.A,{href:"https://policies.google.com/terms"},"Terms of Service")," apply."))))};F.defaultProps={email:"care@refrens.com"};var P=F},11769:function(e,t,n){"use strict";n.d(t,{i:function(){return r.Z}});var r=n(96348),a=n(23587);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"StickyFooter")&&n.d(t,{StickyFooter:function(){return a.StickyFooter}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},23587:function(){},86134:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(67294),a=n(2544),i=n(34578),o=n(89211),l=n(52019),u=n(74340),s=n(79874);var c=e=>{const{activeBusiness:t,onItemClick:n,setShowAccountTools:i,suggestionCount:l,setDrawerHeight:c}=e,[d,m]=(0,o.Z)(!1),p=(0,r.useCallback)((e=>{i(!1),n&&n(e)}),[n]);return r.createElement(u.ee,null,r.createElement(s.Z,{itemKey:"QuotationList",onClick:()=>p("QuotationList"),title:"Quotations",href:`/app/${t.urlKey}/quotations`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"QuotationsClick",lydia:{route:"QuotationList",params:{business:t.urlKey}}},r.createElement(a.Typography,{ellipsis:!0},"Quotations & Estimates")),r.createElement(a.Divider,null),r.createElement(s.Z,{itemKey:JSON.stringify({routeName:"InvoiceList",billType:"INVOICE"}),onClick:()=>p(JSON.stringify({routeName:"InvoiceList",billType:"INVOICE"})),title:"Invoices",href:`/app/${t.urlKey}/invoices?billType=INVOICE`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"InvoicesClick",lydia:{route:"InvoiceList",params:{business:t.urlKey,billType:"INVOICE"}}},r.createElement(a.Typography,{ellipsis:!0,inline:!0},"Invoices"),!!(null===l||void 0===l?void 0:l.invoiceSuggestion)&&r.createElement(u.bp,{size:"smaller",color:"#fe3e82"},l.invoiceSuggestion<=99?l.invoiceSuggestion:`${l.invoiceSuggestion}+`)),r.createElement(a.Divider,null),r.createElement(s.Z,{itemKey:JSON.stringify({routeName:"InvoiceList",billType:"PROFORMAINV"}),onClick:()=>p(JSON.stringify({routeName:"InvoiceList",billType:"PROFORMAINV"})),title:"Proforma Invoices",href:`/app/${t.urlKey}/invoices?billType=PROFORMAINV`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"ProformaInvoicesClick",lydia:{route:"InvoiceList",params:{business:t.urlKey,billType:"PROFORMAINV"}}},r.createElement(a.Typography,{ellipsis:!0},"Proforma Invoices")),r.createElement(a.Divider,null),d&&r.createElement(r.Fragment,null," ",r.createElement(s.Z,{itemKey:"ExpendituresList",onClick:()=>p("ExpendituresList"),title:"Expenditures",href:`/app/${t.urlKey}/expenditures`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"ExpendituresClick",lydia:{route:"ExpendituresList",params:{business:t.urlKey}}},r.createElement(a.Typography,{ellipsis:!0},"Expense Management",!!(null===l||void 0===l?void 0:l.expenditureSuggestion)&&r.createElement(u.bp,{size:"smaller",color:"#fe3e82"},l.expenditureSuggestion<=99?l.expenditureSuggestion:`${l.expenditureSuggestion}+`))),r.createElement(a.Divider,null),r.createElement(s.Z,{itemKey:"DeliveryChallanList",onClick:()=>p("DeliveryChallanList"),title:"Delivery Challans",href:`/app/${t.urlKey}/delivery-challans`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"DeliveryChallansClick",lydia:{route:"DeliveryChallanList",params:{business:t.urlKey}}},r.createElement(a.Typography,{ellipsis:!0},"Delivery Challans")),r.createElement(a.Divider,null),r.createElement(s.Z,{itemKey:"PurchaseOrderList",onClick:()=>p("PurchaseOrderList"),title:"Purchase Orders",href:`/app/${t.urlKey}/purchase-orders`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"PurchaseOrderClick",lydia:{route:"PurchaseOrderList",params:{business:t.urlKey}}},r.createElement(a.Typography,{ellipsis:!0},"Purchase Orders")),r.createElement(a.Divider,null),r.createElement(s.Z,{itemKey:"CreditNoteList",onClick:()=>p("CreditNoteList"),title:"Purchase Orders",href:`/app/${t.urlKey}/credit-notes`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"CreditNoteClick",lydia:{route:"CreditNoteList",params:{business:t.urlKey}}},r.createElement(a.Typography,{ellipsis:!0},"Credit Notes")),r.createElement(a.Divider,null),r.createElement(s.Z,{itemKey:"PaymentReceiptList",onClick:()=>p("PaymentReceiptList"),title:"Payment Receipts",href:`/app/${t.urlKey}/payment-receipts`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"PaymentReceiptClick",lydia:{route:"PaymentReceiptList",params:{business:t.urlKey}}},r.createElement(a.Typography,{ellipsis:!0},"Payment Receipts")),r.createElement(a.Divider,null),r.createElement(s.Z,{itemKey:"DebitNoteList",onClick:()=>p("DebitNoteList"),title:"Purchase Orders",href:`/app/${t.urlKey}/debit-notes`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"DebitNoteClick",lydia:{route:"DebitNoteList",params:{business:t.urlKey}}},r.createElement(a.Typography,{ellipsis:!0},"Debit Notes")),r.createElement(a.Divider,null),r.createElement(s.Z,{itemKey:"Inventory",onClick:()=>p("Inventory"),title:"Inventory","data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"InventoryClick",href:`/app/${t.urlKey}/inventory`,lydia:{route:"Inventory",params:{business:t.urlKey}}},r.createElement(a.Typography,{ellipsis:!0,variant:"none"},"Inventory")),r.createElement(a.Divider,null),r.createElement(s.Z,{itemKey:"BusinessWallet",onClick:()=>p("BusinessWallet"),title:"Bank & Payments",href:`/${t.urlKey}/wallet`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"BusinessWalletClick",lydia:{route:"BusinessWallet",params:{business:t.urlKey}}},r.createElement(a.Typography,{ellipsis:!0},"Bank & Payments")),r.createElement(a.Divider,null),r.createElement(s.Z,{itemKey:"Reports",onClick:()=>p("Reports"),title:"Accounting Reports","data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"ReportsClick",href:`/reports/${t.urlKey}`,lydia:{route:"Reports",params:{business:t.urlKey}}},r.createElement(a.Typography,{ellipsis:!0},"Accounting Reports")),r.createElement(a.Divider,null)),r.createElement(u.kT,null,r.createElement(a.Button,{variant:"neutral",anchor:!0,onClick:()=>{m(),c(d?"284px":"650px")}},r.createElement(a.Typography,{variant:"subtle",size:"small"},d?"Show Less":"See More Tools"))))};var d=e=>{const{activeBusiness:t,onItemClick:n,setProfileNav:o,setSwitchBusiness:l}=e,c=(0,r.useCallback)((e=>{n&&(o(!1),n(e))}),[n]);return r.createElement(u.PA,null,t&&r.createElement(a.Menu.Item,{icon:r.createElement(u.r,null,r.createElement(a.Avatar,{size:38,src:t.logo,name:t.alias||t.name,fallback:!1,shape:"square"})),suffix:r.createElement(i._ME,{size:12,color:"#7f8fa4"}),animate:!1,onClick:()=>{l(!0)}},r.createElement(a.Typography,{size:"h5",ellipsis:!0},t.alias||t.name)),r.createElement(s.Z,{itemKey:"BusinessProfile",onClick:()=>c("BusinessProfile"),title:t.isPrivate?"Your Business Profile Is Not Public":"Your Profile","data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"ProfileClick",href:`/${t.urlKey}`,lydia:{route:"BusinessProfile",params:{business:t.urlKey}},suffix:r.createElement(i._Qn,{size:12,color:"#7f8fa4"})},r.createElement(a.Typography,{ellipsis:!0},"Your Profile")),r.createElement(a.Divider,null),r.createElement(s.Z,{itemKey:"ManageClient",onClick:()=>c("ManageClient"),title:"Your Clients",href:`/app/${t.urlKey}/clients`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"ManageClientClick",lydia:{route:"ClientManagement",params:{business:t.urlKey}},suffix:r.createElement(i._Qn,{size:12,color:"#7f8fa4"})},r.createElement(a.Typography,{ellipsis:!0},"Your Clients")),r.createElement(a.Divider,null),r.createElement(s.Z,{itemKey:"Settings",onClick:()=>c("Settings"),title:"Business Settings",href:`app/${t.urlKey}/settings`,"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"PreferencesClick",lydia:{route:"Settings",params:{business:t.urlKey}},suffix:r.createElement(i._Qn,{size:12,color:"#7f8fa4"})},r.createElement(a.Typography,{ellipsis:!0},"Business Settings")),r.createElement(a.Divider,null))},m=n(77359);var p=e=>{const{activeBusiness:t,onItemClick:n,suggestionCount:s,businesses:p,onBusinessChange:f,auth:h,defaultSelected:g}=e;if(!h)return r.createElement(r.Fragment,null);const[y,v]=(0,o.Z)(!1),[b,E]=(0,o.Z)(!1),[S,C]=(0,r.useState)("284px"),[$,F]=(0,o.Z)(!1),[P,x]=(0,r.useState)(g),k=(0,r.useMemo)((()=>(p||[]).filter((e=>!e.isRemoved))),[p]),T=e=>{e&&x(e)};return r.createElement(r.Fragment,null,r.createElement(u.V6,{className:"no-print no-pdf"},t&&r.createElement(u.W4,null,r.createElement(l.Z,{"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"OverviewClick",hrefProps:{href:`/app/${t.urlKey}`},lydia:{route:"Dashboard",params:{business:t.urlKey}}},r.createElement(a.Button,{variant:"neutral",anchor:!0,as:"a",label:r.createElement(u.fN,{variant:"none",size:"smaller"},"Dashboard"),onClick:()=>(T("Dashboard"),v(!1),E(!1),!0),selected:"Dashboard"===P},r.createElement(i.YuO,{size:18,color:"#7f8fa4"})))),r.createElement(u.OQ,{variant:"neutral",anchor:!0,onClick:()=>{T("AccountingTools"),E(!1),v(!0)},label:r.createElement(u.fN,{variant:"none",size:"smaller"},"Accounting & Tools"),selected:"AccountingTools"===P},r.createElement(i.$Tc,{size:18,color:"#7f8fa4"})),r.createElement(u.W4,null,r.createElement(l.Z,{"data-ga-on":"click","data-ga-event-category":"StickyFooterNav","data-ga-event-action":"NewRequirementButtonClick",hrefProps:{href:"/hire"},elisif:{href:"/hire",as:"/hire"}},r.createElement(a.Button,{as:"a",variant:"neutral",anchor:!0,label:r.createElement(u.fN,{variant:"none",size:"smaller"},"Leads & Marketplace"),onClick:()=>(T("Leads"),v(!1),E(!1),!0),selected:"Leads"===P},r.createElement(i.xqE,{size:18,color:"#7f8fa4"})))),r.createElement(u.W4,{onClickCapture:()=>!0},r.createElement(l.Z,{"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"UserInvitesClick",hrefProps:{href:"/app/user/invites"},lydia:{route:"UserInvites"}},r.createElement(a.Button,{as:"a",variant:"neutral",anchor:!0,label:r.createElement(u.fN,{variant:"none",size:"smaller"},"Rewards"),onClick:()=>(T("UserInvites"),v(!1),E(!1),!0),selected:"UserInvites"===P},r.createElement(i.agD,{size:18,color:"#7f8fa4"})))),t&&r.createElement(u.OQ,{variant:"neutral",anchor:!0,onClick:()=>{T("Profile"),E(!0),v(!1)},label:r.createElement(u.fN,{variant:"none",size:"smaller"},"Profile & Portfolio"),selected:"Profile"===P},r.createElement(u.OR,null,r.createElement(a.Avatar,{size:18,shape:"square",src:t.logo,name:t.alias||t.name,fallback:!1})))),t&&r.createElement(a.Drawer,{onClose:()=>v(!1),visible:y,placement:"bottom",headerStyle:{padding:"1rem 1rem 0.25rem 1.25rem",borderBottom:0},drawerBodyStyle:{padding:"0 1.25rem"},zIndex:997,height:S,title:r.createElement(a.Typography,{variant:"subtle",size:"small"},"ACCOUNTING & TOOLS")},r.createElement(c,{onItemClick:n,suggestionCount:s,setShowAccountTools:v,activeBusiness:t,setDrawerHeight:C})),t&&r.createElement(a.Drawer,{onClose:()=>E(!1),visible:b,placement:"bottom",headerStyle:{padding:"1rem 1rem 0.25rem 1.25rem",borderBottom:0},drawerBodyStyle:{padding:"0 1.25rem"},zIndex:997,height:"330px",title:r.createElement(a.Typography,{variant:"subtle",size:"small"},"PROFILE AND PORTFOLIO")},r.createElement(d,{onItemClick:n,suggestionCount:s,setProfileNav:E,activeBusiness:t,setSwitchBusiness:F})),p&&p.length&&t&&r.createElement(u.O4,{open:$,onCancel:()=>F(!1),footer:null,width:320,centered:!0,borderRadius:8,bodyStyle:{padding:"16px"}},r.createElement(m.Z,{onBusinessChange:e=>{E(!1),f(e)},businesses:k,onItemClick:n,activeBuisnessId:null===t||void 0===t?void 0:t._id})))}},33824:function(e,t,n){"use strict";n.d(t,{o:function(){return r.Z}});var r=n(86134),a=n(8609);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"Support")&&n.d(t,{Support:function(){return a.Support}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},74340:function(e,t,n){"use strict";n.d(t,{V6:function(){return i},fN:function(){return o},OQ:function(){return l},OR:function(){return u},ee:function(){return s},bp:function(){return c},kT:function(){return d},PA:function(){return m},O4:function(){return p},BY:function(){return f},pv:function(){return h},r:function(){return g},W4:function(){return y}});var r=n(52220),a=n(2544);const i=r.default.div`
  display: none;
  height: 64px;
  align-items: self-start;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  text-align: center;
  z-index: 998;
  > div {
    width: 67px;
    height: 64px;
  }
  ${({theme:{colors:e,screens:t}})=>r.css`
    background: ${e.neutral[0]};
    @media screen and (${t.lte.xs}) {
      display: flex;
    }
  `}
`,o=(0,r.default)(a.Typography)`
  && {
    line-height: 1.2;
    ${({theme:{spacings:e}})=>r.css`
      margin: ${e.s1} 0 0;
    `}
  }
`,l=(0,r.default)(a.Button)`
  && {
    ${({theme:{spacings:e,colors:t}})=>r.css`
      margin-top: ${e.s1};
      svg {
        color: ${t.neutral[5]};
      }
    `}
  }
`,u=r.default.div`
  object-fit: scale-down;
`,s=(0,r.default)(a.Menu)`
  && {
    li {
      height: 40px;
      ${({theme:{spacings:e}})=>r.css`
        a,
        a > div {
          padding: ${e.s2} 0;
          > span {
            margin-left: 0;
            &:last-child {
              margin-right: ${e.s2};
            }
          }
        }
      `}
    }
  }
`,c=(0,r.default)(a.Tag)`
  && {
    border: unset;
    font-size: 10px;
    background: rgba(254, 62, 130, 0.3);
    ${({theme:{spacings:e,colors:t}})=>r.css`
      margin: 0 0 0 ${e.s3};
      color: ${t.primary[2]};
    `}
  }
`,d=r.default.div`
  height: 40px;
  display: flex;
  align-items: center;
`,m=(0,r.default)(a.Menu)`
  ${({theme:{spacings:e,colors:t}})=>r.css`
    li {
      height: 40px;
      a > div,
      a {
        padding: 0;
        > span {
          &:last-child {
            margin-right: ${e.s2};
          }
        }
      }
    }
    li:first-child {
      height: 55px;
      margin: ${e.s3} 0;
      border-radius: 8px;
      border: 1px solid ${t.neutral[4]};
      > div {
        height: 3.25rem;
      }
    }
  `}
`,p=(0,r.default)(a.Modal)`
  &&& {
    z-index: 1000;
    max-height: 100vh;
  }
`,f=(0,r.default)(a.Menu)`
  display: flex;
  flex-direction: column;
  max-height: calc(50vh - 100px);
  overflow: auto;
  ${({theme:{spacings:e,colors:t,radii:n}})=>r.css`
    &::-webkit-scrollbar {
      background-color: ${t.neutral[0]};
      width: ${e.s1};
    }
    &::-webkit-scrollbar-track {
      width: ${e.s1};
    }
    &::-webkit-scrollbar-thumb {
      background-color: #b4c2d5;
      margin-right: ${e.s1};
      border-radius: ${n.md};
    }
    li {
      margin-top: ${e.s2};
      > div,
      > a > div,
      > a {
        padding: ${e.s2} 0rem ${e.s2} ${e.s2};
        height: 40px;
        > span {
          margin-left: 0;
          &:last-child {
            margin-right: ${e.s2};
          }
        }
      }
    }
  `}
`,h=(0,r.default)(a.Typography)`
  ${({theme:{spacings:e}})=>r.css`
    margin-left: ${e.s2};
  `}
`,g=r.default.div`
  img {
    object-fit: scale-down;
  }
  display: flex;
  ${({theme:{spacings:e}})=>r.css`
    div {
      border-radius: ${e.s2};
    }
  `};
`,y=r.default.div`
  ${({theme:{spacings:e,colors:t}})=>r.css`
    margin-top: ${e.s1};
    svg {
      color: ${t.neutral[5]};
    }
  `}
`},8609:function(){},77359:function(e,t,n){"use strict";var r=n(67294),a=n(2544),i=n(34578),o=n(55385),l=n.n(o),u=n(38366),s=n.n(u),c=n(79874),d=n(74340);const m={background:"linear-gradient(#faf9f9,#fdf9f9) padding-box, linear-gradient(to right, #ff6773, #ffc926) border-box",color:"#313149",padding:"1px",border:"2px solid transparent",borderRadius:"6px",display:"inline-block"};t.Z=e=>{const{onBusinessChange:t,businesses:n,onItemClick:o,activeBuisnessId:u=""}=e,p=(0,r.useCallback)((e=>{o&&o(e)}),[o]);return r.createElement(d.BY,{defaultSelected:[u]},r.createElement(d.pv,{variant:"subtle",size:"small"},"Switch Business"),n&&n.map((e=>{var n;return r.createElement(a.Menu.Item,{itemKey:e._id,key:e._id,icon:r.createElement(a.Avatar,Object.assign({size:24,src:e.logo&&s()(e.logo,{w:48,h:48}),srcSet:e.logo&&l()(e.logo,[{w:48,h:48},{w:24,h:24}]),name:e.alias||e.name,fallback:!1,shape:"square"},(null===(n=e.preferences)||void 0===n?void 0:n.premiumn)?{wrapperStyle:m}:{})),"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"ActiveBusinessChange","data-ga-event-label":e.alias||e.name,onClick:()=>t(e),animate:!1,suffix:u===e._id&&r.createElement(i.$RE,{color:"#1bb934",size:16})},r.createElement(a.Typography,{ellipsis:!0,variant:"none"},e.alias||e.name))})),r.createElement(c.Z,{itemKey:"NewBusiness",onClick:()=>p("NewBusiness"),icon:r.createElement(i.v37,{size:24,color:"#733dd9",shape:"square"}),"data-ga-on":"click","data-ga-event-category":"SideNav","data-ga-event-action":"NewBusinessClick",href:"/app/businesses/new",lydia:{route:"NewBusiness"}},r.createElement(a.Typography,{ellipsis:!0,variant:"secondary"},"Create New Business")))}},7819:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(67294),a=n(2544),i=n(6411),o=n(52220),l=n(32929);const u=o.default.div`
  padding: 121px 0 140px 0;
  display: block;
  background-size: cover;
  ${({theme:{breakpoints:e},bg:t})=>o.css`
    ${t&&o.css`
      background: url('${t}');
    `}
    @media screen and (max-width: ${e[1]}) {
      padding-bottom: 80px 0 60px 0;
      margin-top: 60px;
    }
  `}
`,s=o.default.div`
  box-sizing: border-box;
  min-width: 0;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  display: -webkit-flex;
  display: flex;
  ${({theme:{screens:e}})=>o.css`
    align-items: center;
    @media screen and (${e.lte.xs}) {
      margin-top: 2.25rem;
    }
  `}
`,c=(0,o.default)(a.Typography).attrs({as:"h1",variant:"white"})`
  && {
    ${({theme:{colors:e}})=>o.css`
      color: ${e.neutral[0]};
      font-size: 42px;
      font-weight: 500;
    `}
  }
`,d=(0,o.default)(l.W)`
  && {
    ${({theme:{breakpoints:e,screens:t}})=>o.css`
      text-align: center;
      position: relative;
      @media screen and (${t.gte.sm}) {
        max-width: 70%;
      }
      @media screen and (${t.gte.md}) {
        max-width: 50%;
      }
      @media screen and (max-width: ${e[2]}) {
        display: flex;
        justify-content: center;
      }
    `}
  }
`,m=o.default.div`
  && {
    ${({theme:{sizes:e,colors:t}})=>o.css`
      color: ${t.neutral[0]};
      font-size: ${e.h5};
    `}
  }
`,p=(0,o.default)(a.Button)`
  && {
    ${({theme:{colors:e}})=>o.css`
      border: none;
      background: ${e.neutral[0]};
      color: black;
      padding: 16px 24px;
      border-radius: 4px;
      -webkit-text-decoration: none;
      text-decoration: none;
    `}
  }
`,f=e=>{const{email:t,title:n,subTitle:o,ctaLabel:l,image:f,background:h}=e;return r.createElement(u,{bg:null===h||void 0===h?void 0:h.src},r.createElement(d,null,r.createElement(i.kC,{flexDirection:["column","row"],justifyContent:"space-between"},r.createElement(s,null,!!f&&r.createElement(i.xu,null,r.createElement(a.Image,Object.assign({},f,{height:70,width:70}))),r.createElement(i.xu,null,r.createElement(c,null,n)),r.createElement(i.xu,{mb:"40px",mt:"20px",maxWidth:324},r.createElement(m,null,o)),r.createElement(p,{as:"a",href:`mailto:${t}`},l)))))};f.defaultProps={email:"care@refrens.com",title:"Need help to decide the right plan for your business?",subTitle:"Chat with our support team will help you decide the perfect plan to you",ctaLabel:"Contact Our Support Team"};var h=f},63659:function(e,t,n){"use strict";n.d(t,{B:function(){return r.Z}});var r=n(7819),a=n(74977);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"Testimonials")&&n.d(t,{Testimonials:function(){return a.Testimonials}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},74977:function(){},37459:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(67294),a=n(2544),i=n(45727),o=n(52220);const l=o.default.div`
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto;
  background-position: center;
  min-height: 460px;
  ${({theme:{colors:e,breakpoints:t},transparent:n,bg:r})=>o.css`
    ${r&&o.css`
      background-image: url(${r});
    `}
    background-color: ${n?"transparent":e.secondary[2]};
    @media screen and (max-width: ${t[1]}) {
      padding-bottom: 0;
    }
  `}
`,u=o.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  ${({theme:{screens:e,breakpoints:t}})=>o.css`
    margin: 0 auto;
    @media screen and (max-width: ${t[2]}) {
      padding: 0;
    }
    @media screen and (${e.lte.sm}) {
      flex-wrap: nowrap;
      padding-top: 54px;
      height: 340px;
      overflow-x: scroll;
      place-content: flex-start;
      &&::-webkit-scrollbar {
        display: none;
      }
    }
  `}
`,s=o.default.div`
  width: 360px;
  min-height: 237px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: #ffff;
  margin: 0 12px 60px 12px;
  border-radius: 8px;
  position: relative;
  &:after {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 25%;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.2;
    pointer-events: none;
  }
  ${({theme:{screens:e}})=>o.css`
    @media screen and (${e.lte.md}) {
      width: 335px;
    }
    @media screen and (${e.lte.sm}) {
      height: auto;
      min-height: 201px;
    }
  `}
`,c=(0,o.default)(a.Typography)`
  && {
    font-weight: 300;
    font-style: italic;
    text-align: center;
    ${({theme:{breakpoints:e,spacings:t}})=>o.css`
      padding: 0 ${t.s4};
      flex-grow: 1;
      @media screen and (max-width: ${e[0]}) {
        font-size: 0.875rem;
      }
    `}
  }
`,d=o.default.div`
  flex-grow: 1;
  max-width: 332px;
  ${({theme:{spacings:e,screens:t}})=>o.css`
    padding: ${e.s6} 0;
    @media screen and (${t.lte.sm}) {
      max-width: none;
      min-height: 145px;
    }
  `}
`,m=o.default.div`
  > div {
    margin-top: -39px;
    border: solid 3px #733dd9;
    border-radius: 50%;
    background-color: #733dd9;
  }

  img {
    border-radius: 50%;
  }
`,p=o.default.div`
  text-align: center;
  flex-shrink: 0;
  ${({theme:{spacings:e}})=>o.css`
    margin-bottom: ${e.s5};
    & span:nth-child(2) {
      margin-top: ${e.s1};
    }
  `}
`,f=o.default.div`
  padding: 2.5rem 0 3rem 0;
  text-align: center;
  margin: auto;
  ${({theme:{spacings:e,screens:t}})=>o.css`
    @media screen and (${t.lte.sm}) {
      &&& {
        padding: ${e.s7} 0 ${e.s3} 0;
      }
  `}
`,h=o.default.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,g=e=>{const{cta:t,title:n,testimonials:o,background:g}=e;return r.createElement(l,{transparent:"transparent"===g,bg:g&&"transparent"!==g?g.src:null},n&&r.createElement(f,null,r.createElement(a.Typography,{variant:"transparent"===g?"neutral":"white",as:"h2"},n)),r.createElement(u,null,o.map((({copy:e,authorImage:t,authorName:n,authorProfileName:i,authorTitle:o,authorProfileCategory:l,authorProfileLink:u,_id:f})=>r.createElement(s,{key:f},r.createElement(m,null,r.createElement(a.Image,Object.assign({},t,{height:72,width:72}))),r.createElement(d,null,r.createElement(c,{size:"h5"},e)),r.createElement(p,null,r.createElement(a.Typography,{bold:!0},n),o&&r.createElement(a.Typography,{size:"small",variant:"none",inline:!0},`${o}, `),i&&(u?r.createElement(r.Fragment,null,r.createElement(a.Typography.A,{href:`${u}`,size:"small",variant:"none",inline:!0,target:"_blank",rel:"external noopener"},i),", "):r.createElement(a.Typography,{variant:"none",size:"small",inline:!0},`${i}, `)),l&&r.createElement(a.Typography,{variant:"none",size:"small",inline:!0},l)))))),t&&r.createElement(h,null,r.createElement(i.Z,{cta:t})))};g.defaultProps={title:"Happy Customers"};var y=g},82213:function(e,t,n){"use strict";n.d(t,{H:function(){return r.Z}});var r=n(37459),a=n(21860);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"TrustCopy")&&n.d(t,{TrustCopy:function(){return a.TrustCopy}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},21860:function(){},11925:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(67294),a=n(2544),i=n(52220);const o=i.default.div`
  ${({theme:{colors:e,spacings:t}})=>i.css`
    background-color: ${e.secondary[1]};
    box-shadow: 0px 3px 6px rgba(127, 143, 164, 0.08);
    text-align: center;
    padding: ${t.s3} ${t.s4};
  `}
`;var l=e=>{const{copy:t}=e;return r.createElement(o,null,r.createElement(a.Typography,{variant:"white",size:"h5"},t))}},12265:function(e,t,n){"use strict";n.d(t,{l:function(){return r.Z}});var r=n(11925),a=n(41800);n.o(a,"AppType")&&n.d(t,{AppType:function(){return a.AppType}}),n.o(a,"VendorCard")&&n.d(t,{VendorCard:function(){return a.VendorCard}})},41800:function(){},97053:function(e,t,n){"use strict";var r=n(94092);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}}),n.o(r,"VendorCard")&&n.d(t,{VendorCard:function(){return r.VendorCard}})},94092:function(){},15168:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(67294),a=n(14516),i=n(2544),o=n(34578),l=n(6411),u=n(92228),s=n.n(u),c=n(34078),d=n.n(c),m=n(26316),p=n(52220),f=n(32929);const h=p.default.div`
  width: 100%;
  background: #fff;
`,g=(0,p.default)(f.W)`
  && {
    display: flex;
    flex-wrap: wrap;
    ${({theme:{spacings:e}})=>p.css`
      padding: ${e.s6} 0;
    `}
  }
`,y=p.default.div`
  width: 100%;
  max-width: 376px;
  min-width: 320px;
  flex: 1;
  display: flex;
  flex-direction: column;
  ${({theme:{spacings:e,colors:t,radii:n,screens:r}})=>p.css`
    margin: ${e.s3};
    padding: ${e.s5};
    border: 1px solid ${t.neutral[3]};
    border-radius: ${n.hg};

    @media screen and (${r.lte.xs}) {
      min-width: 100%;
      margin: 0;
      border: none;
    }
  `}
`,v=(0,p.default)(y)`
  align-items: center;
  text-align: center;
  ${({theme:{colors:e}})=>p.css`
    padding: 40px;
    border: 1px solid ${e.secondary[2]};
    background-color: ${e.secondary[0]};
  `}
`,b=p.default.div`
  border-radius: 50%;
  height: 70px;
  z-index: 1;
  ${({theme:{colors:e},isMargin:t})=>p.css`
    border: solid 3px ${e.neutral[0]};
    background-color: ${e.neutral[0]};
    ${t&&p.css`
      margin-left: -12px;
    `}
  `}
`,E=(0,p.default)(i.Typography)`
  ${({theme:{spacings:e}})=>p.css`
    margin-bottom: ${e.s6}; ;
  `}
`,S=p.default.div`
  display: flex;
  ${({theme:{spacings:e}})=>p.css`
    margin-bottom: ${e.s6}; ;
  `}
`,C=(0,p.default)(i.Tag)`
  && {
    // font-weight: 500;
    border-color: transparent;
    height: 22px;
    line-height: 1;
    background: #f3f5f7;
  }
`,$=(0,p.default)(i.Avatar)`
  && {
    border-radius: 8px;
  }
`,F=p.default.a`
  && {
    color: initial;
    text-decoration: none;
  }