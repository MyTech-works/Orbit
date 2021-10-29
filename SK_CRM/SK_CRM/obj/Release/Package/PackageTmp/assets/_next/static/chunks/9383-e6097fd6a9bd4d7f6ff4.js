(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9383],{32465:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:function(){return r}})},88936:function(e,t,n){"use strict";n.d(t,{Z:function(){return W}});var r=n(70655),o=n(67294),i=n(27865),s=n(18127),a=function(e){var t=(0,o.useRef)(e);t.current=e,(0,s.Z)((function(){return function(){return t.current()}}))},c=function(e){var t=(0,o.useRef)(0),n=(0,o.useState)(e),r=n[0],i=n[1],s=(0,o.useCallback)((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){i(e)}))}),[]);return a((function(){cancelAnimationFrame(t.current)})),[r,s]},l=function(){var e=c({x:i.C5?window.pageXOffset:0,y:i.C5?window.pageYOffset:0}),t=e[0],n=e[1];return(0,o.useEffect)((function(){var e=function(){n({x:window.pageXOffset,y:window.pageYOffset})};return window.addEventListener("scroll",e,{capture:!1,passive:!0}),function(){window.removeEventListener("scroll",e)}}),[]),t},u=n(89211),h=n(34578),d=n(52019),f=n(55396),p=n(52220),g=n(6411),m=n(2544),v=n(32929);const b=p.default.header`
  max-height: 112px;
  line-height: 56px;
  text-align: center;
  * {
    vertical-align: middle;
  }
  ${({theme:{colors:e,screens:t},sticky:n,centered:r,bgColor:o,textColor:i})=>p.css`
    /* background: ${e.secondary[2]}; */
    background: transparent;
    color: ${i};
    position: relative;
    right: 0;
    top: 0;
    left: 0;
    z-index: 100;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: all 0.3s ease;

    ${n&&p.css`
      background: ${o};
      box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px,
        rgba(0, 0, 0, 0.2) 0px 2px 4px -1px;
      position: fixed;
    `}

    ${r&&p.css`
      /* background: ${e.neutral[7]}; */
    `}

    ${n&&p.css`
      box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px,
        rgba(0, 0, 0, 0.2) 0px 2px 4px -1px;
      position: fixed;
    `}

    @media screen and (${t.gte.sm}) {
      position: fixed;
      left: 0;
      height: 56px;
      max-height: 56px;
    }
  `}
`,y=(0,p.default)(m.Button)`
  && {
    ${({theme:{spacings:e,screens:t}})=>p.css`
      margin-right: ${e.s8};
      margin-left: ${e.s3};
      @media screen and (${t.lte.xs}) {
        margin-right: ${e.s2};
        margin-left: 0;
        > svg {
          height: ${e.s5};
          width: ${e.s5};
        }
      }
    `}
  }
`,E=(0,p.default)(g.kC)`
  && {
    align-items: center;
    ${({theme:{spacings:e}})=>p.css`
      button {
        margin-left: ${e.s3};
      }
    `}
  }
`,w=(0,p.default)(g.kC)`
  && {
    align-items: center;
    ${({theme:{spacings:e,screens:t}})=>p.css`
      button,
      a {
        margin-left: ${e.s3};
        white-space: nowrap;
      }

      @media screen and (${t.lte.xs}) {
        > button:not(:first-child),
        > a:not(:first-child) {
          margin-top: 7px;
          margin-bottom: 7px;
          margin-left: ${e.s6};
        }
      }
    `}
  }
`,x=(0,p.default)(m.Button)`
  && {
    ${({theme:{spacings:e,colors:t}})=>p.css`
    margin-right: ${e.s4};
    path {
      fill: ${t.neutral[0]};
    }
    &: hover, &: focus{
      path{
        fill: ${t.neutral[0]};
      }
    }
    `};
  }
`,_=(0,p.default)(m.Button)`
  && {
    white-space: nowrap;
    & span {
      margin-left: 0;
    }
  }
`,k=(0,p.default)(v.W)`
  && {
    ${({theme:{screens:e},auth:t})=>p.css`
      ${t&&p.css`
        max-width: 100%;
      `}
      @media screen and (${e.lte.xs}) {
        padding: 0;
      }
    `}
  }
`,$=(0,p.default)(m.Button)`
  && {
    ${({theme:{spacings:e,colors:t,screens:n}})=>p.css`
      padding-left: ${e.s3};
      padding-right: ${e.s3};
      background: none;
      border-color: ${t.neutral[0]};
      white-space: nowrap;
      > span {
        margin-right: 0;
      }
      @media screen and (${n.lte.xs}) {
        height: ${e.s7};
      }
      &:hover {
        background: ${t.primary[3]};
        border-color: ${t.primary[3]};
      }
    `}
  }
`,L=(0,p.default)(m.Button)`
  && {
    ${({theme:{spacings:e,screens:t}})=>p.css`
      padding-left: ${e.s3};
      padding-right: ${e.s3};
      white-space: nowrap;
      > span {
        margin-right: 0;
      }
      @media screen and (${t.lte.xs}) {
        height: ${e.s7};
      }
    }
    `}
  }
`,T=p.default.div`
  display: block;
  min-width: 0;
  width: 100%;
  ${({theme:{screens:e}})=>p.css`
    @media screen and (${e.lte.xs}) {
      display: none;
    }
  `}
`,R=p.default.div`
  display: none;
  ${({theme:{screens:e}})=>p.css`
    @media screen and (${e.lte.xs}) {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      align-items: center;
    }
  `}
`,I=p.default.div`
  display: flex;
  width: 80%;
  overflow-x: hidden;
  justify-content: flex-end;
  ${({theme:{screens:e,colors:t},hideSubHeader:n})=>p.css`
    @media screen and (${e.lte.xs}) {
      ${n&&p.css`
        display: none;
      `}
      height: 38px;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      overflow-x: auto;
      overflow-y: hidden;
      background: ${t.neutral[0]};
      > div > span {
        height: 38px;
        line-height: 38px;
        svg {
          path {
            color: ${t.neutral[7]};
            fill: ${t.neutral[7]} !important;
          }
        }
        button {
          margin-right: 0 !important;
        }
      }
    }
  `}
`,C=p.default.div`
  display: flex;
  width: 100%;
  ${({theme:{screens:e}})=>p.css`
    @media screen and (${e.lte.xs}) {
      flex-direction: column;
    }
  `}
`,O=p.default.div`
  display: flex;
  width: 20%;
  height: 56px;
  transition: height 0.2s ease;
  ${({theme:{screens:e,spacings:t},animateHeader:n})=>p.css`
    @media screen and (${e.lte.xs}) {
      width: 100%;
      padding-left: ${t.s4};
      ${n&&p.css`
        height: 0;
        transform: translateY(-56px);
      `}
    }
  `}
`,M=p.default.div`
  min-width: 0;
`,S=p.default.div`
  && {
    font-size: 14px;
    ${({theme:{screens:e,colors:t}})=>p.css`
      color: ${t.neutral[0]};
      @media screen and (${e.lte.xs}) {
        color: ${t.neutral[7]};
      }
    `}
  }
`,A=(0,p.default)(m.Tag)`
  && {
    margin-left: 4px 0 0 0;
    font-size: 10px;
    border: unset;
    ${({theme:{screens:e,colors:t,spacings:n}})=>p.css`
      height: ${n.s5};
      color: ${t.neutral[0]};
      background: ${t.primary[2]};
      @media screen and (${e.lte.xs}) {
        color: ${t.primary[2]};
        font-weight: 500;
        background: rgba(254, 62, 130, 0.3);
      }
    `}
  }
`,D=p.default.div`
  ${({theme:{screens:e},bgColor:t})=>p.css`
    height: 56px;
    display: block;
    background: ${t};
    @media screen and (${e.lte.sm}) {
      display: none;
    }
  `}
`,B=p.default.div`
  ${({theme:{screens:e}})=>p.css`
    display: block;
    @media screen and (${e.lte.sm}) {
      display: none;
    }
  `}
`,P=(0,p.default)(m.Button)`
  && {
    ${({theme:{screens:e}})=>p.css`
      svg:first-child {
        display: none;
      }
      @media screen and (${e.lte.sm}) {
        svg:nth-child(2) {
          display: none;
        }
        svg:first-child {
          display: inline-block;
        }
      }
    `}
  }
`,Z=(0,p.default)(g.xu)`
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);
  ${({theme:{radii:e}})=>p.css`
    border-radius: ${e.lg};
  `}
`,z=p.default.div`
  text-align: center;
  ${({theme:{spacings:e,colors:t}})=>p.css`
    padding: ${e.s1};
    border-top: 2px solid ${t.neutral[3]};
  `}
`;var H=n(99701);var j=e=>{const{auth:t,user:n,onLogin:r,onLogout:i,onGoogleLogin:s}=e,{name:a,email:c,googleLogin:l,googlePicture:u,avatar:h}=n;return o.createElement(Z,{backgroundColor:"#fff",maxWidth:"390px"},o.createElement(g.xu,{p:"16px"},o.createElement(m.Typography,{variant:"none"},t&&"You're logged in as",!t&&"You were logged in as"),o.createElement(g.kC,{my:"4px",alignItems:"center"},o.createElement(m.Avatar,{src:u||h,name:a,size:36,color:"#fe3e82"}),o.createElement(g.kC,{width:1},o.createElement(g.kC,{px:"8px",flexDirection:"column",width:2/3},o.createElement(m.Typography,{size:"h5",ellipsis:!0},a),o.createElement(m.Typography,{ellipsis:!0},c)),o.createElement(g.xu,{ml:"auto",width:1/3},t&&o.createElement(m.Button,{fullWidth:!0,onClick:i},"Logout"),!t&&o.createElement(m.Button,{fullWidth:!0,onClick:()=>r(!1)},"Login")))),!t&&l&&o.createElement(g.kC,{mt:"32px",mb:"16px"},o.createElement(H.Z,{fullWidth:!0,onSuccess:s,size:"large"},"Sign in with Google"))),o.createElement(z,null,o.createElement(m.Typography,{variant:"none",size:"small",inline:!0,onClick:()=>r(!0)},"Login with different account")))};var U=e=>{const{onLogin:t,onRegister:n,onDashboard:r,onLogout:i,auth:s,onGoogleLogin:a,user:c,centered:l}=e;return o.createElement(E,null,!s&&!l&&o.createElement(o.Fragment,null,o.createElement(m.Button,{variant:"secondary",onClick:()=>t(!1),anchor:!0,"aria-label":"login"},o.createElement(m.Typography,{variant:"white"},"Login")),o.createElement(L,{onClick:n},"Register")),s&&o.createElement($,{onClick:r},o.createElement(m.Typography,{variant:"white"},"Go to Dashboard")),!!c&&o.createElement(m.Popover,{trigger:"click",content:o.createElement(j,{auth:s,user:c,onLogin:t,onLogout:i,onGoogleLogin:a}),position:"bottom",align:"end",containerStyle:{boxShadow:"0 2px 6px rgba(0,0,0,0.12)",zIndex:"9999"},padding:-5},o.createElement(m.Button,{anchor:!0,shape:"circle","aria-label":"User Avatar"},o.createElement(m.Avatar,{src:c.avatar,name:c.name,size:30,color:"#fff"}))))},q=n(91291),F=n(26316),N=n(79874);var V=e=>{const{onLogin:t,onRegister:n,onDashboard:r,onLogout:i,auth:s,onGoogleLogin:a,user:c,productsMenu:l,showReferredLeads:f,pricingLink:p,showProductTour:g,suggestionCount:v,activeBusiness:b,isHirePage:y,centered:E}=e,[k,$]=(0,u.Z)(!1),{href:L}=(0,q.Z)(),[,R]=(0,F.jf)();(0,o.useEffect)((()=>{$(!1)}),[L]);const I=o.createElement(m.Menu,null,l.map((e=>o.createElement(N.Z,{key:e.id,itemKey:e.id,elisif:{href:e.href,as:e.as},href:e.as||e.href,target:e.isExternal?"_blank":"_self","data-ga-on":"click","data-ga-event-category":"ProductMenu","data-ga-event-action":e.label.replace(/ /g,""),onClick:$},o.createElement(m.Typography,{variant:"none",size:"h6"},e.label)))));return o.createElement(w,null,!!l.length&&o.createElement(m.Popover,{isOpen:k,trigger:"click",position:"bottom",align:"end",containerStyle:{boxShadow:"0 2px 6px rgba(0,0,0,0.12)",zIndex:"9999"},content:I,onClickOutside:()=>$(!1)},o.createElement(x,{anchor:!0,variant:"neutral",onClick:$,"aria-label":"Toggle Free Tools"},o.createElement(S,null,"Free Tools"),o.createElement(h._ME,{size:12}))),p&&o.createElement(d.Z,{hrefProps:{href:p.href,target:p.isExternal?"_blank":"_self"},elisif:{href:p.href,as:p.as}},o.createElement(m.Button,{variant:"secondary",as:"a",target:p.isExternal?"_blank":"_self",anchor:!0},o.createElement(S,null,p.label))),g&&o.createElement(_,{anchor:!0,onClick:R},o.createElement(h.j_R,{color:"#fe3e82"}),o.createElement(S,null,"Quick Guide")),f&&o.createElement(d.Z,{hrefProps:{href:"/leads"},lydia:{route:"UserLeadInbox"}},o.createElement(m.Button,{anchor:!0,variant:"secondary",as:"a"},o.createElement(S,null,"Referred Leads"))),y&&b&&!!(null===v||void 0===v?void 0:v.openRequirements)&&o.createElement(d.Z,{hrefProps:{href:"/requirements"},lydia:{route:"RequirementsIndex"}},o.createElement(m.Button,{anchor:!0,variant:"secondary",as:"a"},o.createElement(S,null,"Your Requirements"),o.createElement(A,null,null===v||void 0===v?void 0:v.openRequirements))),o.createElement(T,null,o.createElement(U,{auth:s,user:c,onLogin:t,onLogout:i,onGoogleLogin:a,onRegister:n,onDashboard:r,centered:E})))};const G=e=>{const{auth:t,user:n,onRegister:i,onDashboard:s,onLogin:a,onLogout:c,onGoogleLogin:p,showProductTour:g,handleSidebarToggle:m,productsMenu:v,pricingLink:E,homeLink:w,showReferredLeads:x,suggestionCount:_,activeBusiness:$,isHirePage:L,centered:T,logo:S,asideCollapsed:A,headBanner:Z={}}=e,z=(0,r._T)(e,["auth","user","onRegister","onDashboard","onLogin","onLogout","onGoogleLogin","showProductTour","handleSidebarToggle","productsMenu","pricingLink","homeLink","showReferredLeads","suggestionCount","activeBusiness","isHirePage","centered","logo","asideCollapsed","headBanner"]),H=(0,o.useRef)(null),{y:j}=l(),[q,F]=(0,o.useState)(j),[N,G]=(0,u.Z)(!0),W=!v.length&&!E&&!g&&!x&&!(L&&$&&(null===_||void 0===_?void 0:_.openRequirements));(0,o.useEffect)((()=>{G(j>q),F(j<=0?0:j)}),[j]);const{bgColor:Y=(T?"rgb(22, 28, 38)":"var(--color-secondary-regular, '#733dd9')"),textColor:X="#fff"}=Z||{};return o.createElement(o.Fragment,null,o.createElement(b,{sticky:j>0,centered:T,ref:H,bgColor:Y,textColor:X},o.createElement(k,{auth:t},o.createElement(C,null,o.createElement(O,{animateHeader:N},t&&m&&o.createElement(y,{onClick:m,variant:"neutral",anchor:!0},o.createElement(h.LlL,{color:"#f7faf4"})),o.createElement(M,null,o.createElement(d.Z,{hrefProps:{href:t?"/app":(null===w||void 0===w?void 0:w.href)||"/"},lydia:{route:"Dashboard"},elisif:{href:t?"/app":(null===w||void 0===w?void 0:w.href)||"/",as:t?null:(null===w||void 0===w?void 0:w.as)||(null===w||void 0===w?void 0:w.href)||"/"}},o.createElement(P,{href:(null===w||void 0===w?void 0:w.isExternal)?"_blank":"_self",as:"a",title:"Refrens","aria-label":"Refrens"},o.createElement(h.TJ7,{size:24,color:"#fff"}),o.createElement(h.Hrv,{size:35})))),!T&&o.createElement(R,null,o.createElement(f.Z,Object.assign({},z,{variant:"MENU"})),o.createElement(U,{auth:t,user:n,onLogin:a,onLogout:c,onGoogleLogin:p,onRegister:i,onDashboard:s}))),o.createElement(I,{hideSubHeader:!!W},o.createElement(B,null,o.createElement(f.Z,Object.assign({},z,{variant:"MENU"}))),o.createElement(V,Object.assign({auth:t,user:n,onLogin:a,onLogout:c,onGoogleLogin:p,onRegister:i,onDashboard:s,showProductTour:g,productsMenu:v,pricingLink:E,showReferredLeads:x,suggestionCount:_,activeBusiness:$,isHirePage:L,centered:T},z)))))),o.createElement(D,{bgColor:Y}))};G.defaultProps={auth:!1,showReferredLeads:!1};var W=G},76842:function(e,t,n){"use strict";n.d(t,{AppType:function(){return o.p}});var r=n(99121);n.o(r,"AppType")&&n.d(t,{AppType:function(){return r.AppType}});var o=n(38905)},56692:function(e,t,n){"use strict";n.d(t,{m:function(){return l}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;function s(e){var t=i.exec(e);return t?t.slice(1):[]}function a(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n="",r=!1,i=e.length-1;i>=-1&&!r;i--){var s=i>=0?e[i]:"/";s&&(n=s+"/"+n,r="/"===s.charAt(0))}return(r?"/":"")+(n=o(n.split("/").filter((function(e){return!!e})),!r).join("/"))||"."}function c(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}var l=function(){function e(t){var n=this;void 0===t&&(t={}),this.name=e.id,this._iteratee=function(e){if(!e.filename)return e;var t=/^[A-Z]:\\/.test(e.filename),r=/^\//.test(e.filename);if(t||r){var o=t?e.filename.replace(/^[A-Z]:/,"").replace(/\\/g,"/"):e.filename,i=n._root?function(e,t){e=a(e).substr(1),t=a(t).substr(1);for(var n=c(e.split("/")),r=c(t.split("/")),o=Math.min(n.length,r.length),i=o,s=0;s<o;s++)if(n[s]!==r[s]){i=s;break}var l=[];for(s=i;s<n.length;s++)l.push("..");return(l=l.concat(r.slice(i))).join("/")}(n._root,o):function(e,t){var n=s(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n}(o);e.filename="app:///"+i}return e},t.root&&(this._root=t.root),t.iteratee&&(this._iteratee=t.iteratee)}return e.prototype.setupOnce=function(t,n){t((function(t){var r=n().getIntegration(e);return r?r.process(t):t}))},e.prototype.process=function(e){return e.exception&&Array.isArray(e.exception.values)?this._processExceptionsEvent(e):e.stacktrace?this._processStacktraceEvent(e):e},e.prototype._processExceptionsEvent=function(e){var t=this;try{return r(r({},e),{exception:r(r({},e.exception),{values:e.exception.values.map((function(e){return r(r({},e),{stacktrace:t._processStacktrace(e.stacktrace)})}))})})}catch(n){return e}},e.prototype._processStacktraceEvent=function(e){try{return r(r({},e),{stacktrace:this._processStacktrace(e.stacktrace)})}catch(t){return e}},e.prototype._processStacktrace=function(e){var t=this;return r(r({},e),{frames:e&&e.frames&&e.frames.map((function(e){return t._iteratee(e)}))})},e.id="RewriteFrames",e}()},92828:function(e){if("undefined"!==typeof Element&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"===typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},99438:function(e,t,n){var r=n(92828);function o(e,t,n,r,o){var s=i.apply(this,arguments);return e.addEventListener(n,s,o),{destroy:function(){e.removeEventListener(n,s,o)}}}function i(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}e.exports=function(e,t,n,r,i){return"function"===typeof e.addEventListener?o.apply(null,arguments):"function"===typeof n?o.bind(null,document).apply(null,arguments):("string"===typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return o(e,t,n,r,i)})))}},66337:function(){!function(){"use strict";if("object"===typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var e=function(e){for(var t=window.document,n=o(t);n;)n=o(t=n.ownerDocument);return t}(),t=[],n=null,r=null;s.prototype.THROTTLE_TIMEOUT=100,s.prototype.POLL_INTERVAL=null,s.prototype.USE_MUTATION_OBSERVER=!0,s._setupCrossOriginUpdater=function(){return n||(n=function(e,n){r=e&&n?d(e,n):{top:0,bottom:0,left:0,right:0,width:0,height:0},t.forEach((function(e){e._checkForIntersections()}))}),n},s._resetCrossOriginUpdater=function(){n=null,r=null},s.prototype.observe=function(e){if(!this._observationTargets.some((function(t){return t.element==e}))){if(!e||1!=e.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:e,entry:null}),this._monitorIntersections(e.ownerDocument),this._checkForIntersections()}},s.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter((function(t){return t.element!=e})),this._unmonitorIntersections(e.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},s.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},s.prototype.takeRecords=function(){var e=this._queuedEntries.slice();return this._queuedEntries=[],e},s.prototype._initThresholds=function(e){var t=e||[0];return Array.isArray(t)||(t=[t]),t.sort().filter((function(e,t,n){if("number"!=typeof e||isNaN(e)||e<0||e>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return e!==n[t-1]}))},s.prototype._parseRootMargin=function(e){var t=(e||"0px").split(/\s+/).map((function(e){var t=/^(-?\d*\.?\d+)(px|%)$/.exec(e);if(!t)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(t[1]),unit:t[2]}}));return t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1],t},s.prototype._monitorIntersections=function(t){var n=t.defaultView;if(n&&-1==this._monitoringDocuments.indexOf(t)){var r=this._checkForIntersections,i=null,s=null;if(this.POLL_INTERVAL?i=n.setInterval(r,this.POLL_INTERVAL):(a(n,"resize",r,!0),a(t,"scroll",r,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in n&&(s=new n.MutationObserver(r)).observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(t),this._monitoringUnsubscribes.push((function(){var e=t.defaultView;e&&(i&&e.clearInterval(i),c(e,"resize",r,!0)),c(t,"scroll",r,!0),s&&s.disconnect()})),t!=(this.root&&this.root.ownerDocument||e)){var l=o(t);l&&this._monitorIntersections(l.ownerDocument)}}},s.prototype._unmonitorIntersections=function(t){var n=this._monitoringDocuments.indexOf(t);if(-1!=n){var r=this.root&&this.root.ownerDocument||e;if(!this._observationTargets.some((function(e){var n=e.element.ownerDocument;if(n==t)return!0;for(;n&&n!=r;){var i=o(n);if((n=i&&i.ownerDocument)==t)return!0}return!1}))){var i=this._monitoringUnsubscribes[n];if(this._monitoringDocuments.splice(n,1),this._monitoringUnsubscribes.splice(n,1),i(),t!=r){var s=o(t);s&&this._unmonitorIntersections(s.ownerDocument)}}}},s.prototype._unmonitorAllIntersections=function(){var e=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var t=0;t<e.length;t++)e[t]()},s.prototype._checkForIntersections=function(){if(this.root||!n||r){var e=this._rootIsInDom(),t=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(r){var o=r.element,s=u(o),a=this._rootContainsTarget(o),c=r.entry,l=e&&a&&this._computeTargetAndRootIntersection(o,s,t),h=r.entry=new i({time:window.performance&&performance.now&&performance.now(),target:o,boundingClientRect:s,rootBounds:n&&!this.root?null:t,intersectionRect:l});c?e&&a?this._hasCrossedThreshold(c,h)&&this._queuedEntries.push(h):c&&c.isIntersecting&&this._queuedEntries.push(h):this._queuedEntries.push(h)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},s.prototype._computeTargetAndRootIntersection=function(t,o,i){if("none"!=window.getComputedStyle(t).display){for(var s=o,a=p(t),c=!1;!c&&a;){var h=null,f=1==a.nodeType?window.getComputedStyle(a):{};if("none"==f.display)return null;if(a==this.root||9==a.nodeType)if(c=!0,a==this.root||a==e)n&&!this.root?!r||0==r.width&&0==r.height?(a=null,h=null,s=null):h=r:h=i;else{var g=p(a),m=g&&u(g),v=g&&this._computeTargetAndRootIntersection(g,m,i);m&&v?(a=g,h=d(m,v)):(a=null,s=null)}else{var b=a.ownerDocument;a!=b.body&&a!=b.documentElement&&"visible"!=f.overflow&&(h=u(a))}if(h&&(s=l(h,s)),!s)break;a=a&&p(a)}return s}},s.prototype._getRootRect=function(){var t;if(this.root)t=u(this.root);else{var n=e.documentElement,r=e.body;t={top:0,left:0,right:n.clientWidth||r.clientWidth,width:n.clientWidth||r.clientWidth,bottom:n.clientHeight||r.clientHeight,height:n.clientHeight||r.clientHeight}}return this._expandRectByRootMargin(t)},s.prototype._expandRectByRootMargin=function(e){var t=this._rootMarginValues.map((function(t,n){return"px"==t.unit?t.value:t.value*(n%2?e.width:e.height)/100})),n={top:e.top-t[0],right:e.right+t[1],bottom:e.bottom+t[2],left:e.left-t[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},s.prototype._hasCrossedThreshold=function(e,t){var n=e&&e.isIntersecting?e.intersectionRatio||0:-1,r=t.isIntersecting?t.intersectionRatio||0:-1;if(n!==r)for(var o=0;o<this.thresholds.length;o++){var i=this.thresholds[o];if(i==n||i==r||i<n!==i<r)return!0}},s.prototype._rootIsInDom=function(){return!this.root||f(e,this.root)},s.prototype._rootContainsTarget=function(t){return f(this.root||e,t)&&(!this.root||this.root.ownerDocument==t.ownerDocument)},s.prototype._registerInstance=function(){t.indexOf(this)<0&&t.push(this)},s.prototype._unregisterInstance=function(){var e=t.indexOf(this);-1!=e&&t.splice(e,1)},window.IntersectionObserver=s,window.IntersectionObserverEntry=i}function o(e){try{return e.defaultView&&e.defaultView.frameElement||null}catch(t){return null}}function i(e){this.time=e.time,this.target=e.target,this.rootBounds=h(e.rootBounds),this.boundingClientRect=h(e.boundingClientRect),this.intersectionRect=h(e.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!e.intersectionRect;var t=this.boundingClientRect,n=t.width*t.height,r=this.intersectionRect,o=r.width*r.height;this.intersectionRatio=n?Number((o/n).toFixed(4)):this.isIntersecting?1:0}function s(e,t){var n=t||{};if("function"!=typeof e)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=function(e,t){var n=null;return function(){n||(n=setTimeout((function(){e(),n=null}),t))}}(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=e,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map((function(e){return e.value+e.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function a(e,t,n,r){"function"==typeof e.addEventListener?e.addEventListener(t,n,r||!1):"function"==typeof e.attachEvent&&e.attachEvent("on"+t,n)}function c(e,t,n,r){"function"==typeof e.removeEventListener?e.removeEventListener(t,n,r||!1):"function"==typeof e.detatchEvent&&e.detatchEvent("on"+t,n)}function l(e,t){var n=Math.max(e.top,t.top),r=Math.min(e.bottom,t.bottom),o=Math.max(e.left,t.left),i=Math.min(e.right,t.right),s=i-o,a=r-n;return s>=0&&a>=0&&{top:n,bottom:r,left:o,right:i,width:s,height:a}||null}function u(e){var t;try{t=e.getBoundingClientRect()}catch(n){}return t?(t.width&&t.height||(t={top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.right-t.left,height:t.bottom-t.top}),t):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function h(e){return!e||"x"in e?e:{top:e.top,y:e.top,bottom:e.bottom,left:e.left,x:e.left,right:e.right,width:e.width,height:e.height}}function d(e,t){var n=t.top-e.top,r=t.left-e.left;return{top:n,left:r,height:t.height,width:t.width,bottom:n+t.height,right:r+t.width}}function f(e,t){for(var n=t;n;){if(n==e)return!0;n=p(n)}return!1}function p(t){var n=t.parentNode;return 9==t.nodeType&&t!=e?o(t):n&&11==n.nodeType&&n.host?n.host:n&&n.assignedSlot?n.assignedSlot.parentNode:n}}()},11752:function(e,t,n){e.exports=n(79186)},79186:function(e,t){"use strict";var n;t.__esModule=!0,t.setConfig=function(e){n=e},t.default=void 0;t.default=function(){return n}},9008:function(e,t,n){e.exports=n(57947)},82191:function(e,t,n){"use strict";var r=n(22122),o=n(19756),i=n(67294),s="hydrate",a="undefined"!==typeof IntersectionObserver?new IntersectionObserver((function(e){e.forEach((function(e){(e.isIntersecting||e.intersectionRatio>0)&&e.target.dispatchEvent(new CustomEvent(s))}))}),{rootMargin:"250px"}):null,c=i.useLayoutEffect;t.Z=function(e){var t=(0,i.useRef)(null),n=(0,i.useState)(!1),l=n[0],u=n[1],h=e.noWrapper,d=e.ssrOnly,f=e.whenIdle,p=e.whenVisible,g=e.promise,m=e.on,v=void 0===m?[]:m,b=e.children,y=e.didHydrate,E=(0,o.Z)(e,["noWrapper","ssrOnly","whenIdle","whenVisible","promise","on","children","didHydrate"]);return c((function(){t.current.hasChildNodes()||u(!0)}),[]),(0,i.useEffect)((function(){if(!d&&!l){var e=[];if(g&&g.then(c).catch(c),f)if("undefined"!==typeof requestIdleCallback){var n=requestIdleCallback(c,{timeout:500});e.push((function(){cancelIdleCallback(n)}))}else{var r=setTimeout(c,2e3);e.push((function(){clearTimeout(r)}))}var o=Array.isArray(v)?v.slice():[v];if(p){if(!a||!t.current.childElementCount)return c();var i=t.current.children[0];a.observe(i),o.push(s),e.push((function(){a.unobserve(i)}))}return o.forEach((function(n){t.current.addEventListener(n,c,{once:!0,capture:!0,passive:!0}),e.push((function(){t.current.removeEventListener(n,c,{capture:!0})}))})),function(){for(;e.length;)e.pop()()}}function c(){u(!0),y&&y()}}),[l,v,d,f,p,y,g]),l?h?b:(0,i.createElement)("div",(0,r.Z)({ref:t,style:{display:"contents"}},E),b):(0,i.createElement)("div",(0,r.Z)({ref:t,style:{display:"contents"},suppressHydrationWarning:!0},E,{dangerouslySetInnerHTML:{__html:""}}))}},18127:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){(0,r.useEffect)(e,[])}}}]);