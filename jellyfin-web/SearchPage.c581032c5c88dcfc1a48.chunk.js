/*! For license information please see SearchPage.c581032c5c88dcfc1a48.chunk.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[1281],{13594:function(e,t,n){"use strict";n.d(t,{w:function(){return T},Z:function(){return Z}}),n(23938),n(61013),n(27471),n(99785);var r=n(27515),i=n(78695),a=n(83094),o=n(33942),s=n(1892),l=n.n(s),c=n(95760),u=n.n(c),d=n(38311),f=n.n(d),h=n(58192),m=n.n(h),v=n(38060),p=n.n(v),g=n(54865),y=n.n(g),b=n(63421),I={};function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}I.styleTagTransform=y(),I.setAttributes=m(),I.insert=f().bind(null,"head"),I.domAPI=u(),I.insertStyleElement=p(),l()(b.Z,I),b.Z&&b.Z.locals&&b.Z.locals,n(21865),n(85427);var x="alphaPickerButton-selected";function S(){var e=this.querySelector(".".concat(x));e?r.Z.focus(e):r.Z.autoFocus(this,!0)}function k(e){var t="alphaPickerButton";return i.Z.tv&&(t+=" alphaPickerButton-tv"),e&&(t+=" alphaPickerButton-vertical"),t}function w(e,t){return e.map((function(e){return function(e,t){return'<button data-value="'.concat(e,'" class="').concat(k(t),'">').concat(e,"</button>")}(e,t)}))}var T=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=this;this.options=t;var r,s,l,c,u=t.element,d=t.itemsContainer,f=t.itemClass;function h(){s=null,n.value(r)}function m(){if(c=null,document.activeElement===l){var e=l.getAttribute("data-value");n.value(e,!0)}}function v(e){var t=a.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var n=t.getAttribute("data-value");u.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:n}}))}}function p(e){var t=a.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var n=t.getAttribute("data-value");(this._currentValue||"").toUpperCase()===n.toUpperCase()?this.value(null,!0):this.value(n,!0)}}function g(e){c&&(clearTimeout(c),c=null);var t=a.ZP.parentWithClass(e.target,"alphaPickerButton");t&&(l=t,c=setTimeout(m,600))}function y(e){var t=a.ZP.parentWithClass(e.target,f);if(t){var n=t.getAttribute("data-prefix");n&&n.length&&(r=n[0],s&&clearTimeout(s),s=setTimeout(h,100))}}this.enabled=function(e){e?(d&&d.addEventListener("focus",y,!0),"keyboard"===t.mode&&u.addEventListener("click",v),"click"!==t.valueChangeEvent?u.addEventListener("focus",g,!0):u.addEventListener("click",p.bind(this))):(d&&d.removeEventListener("focus",y,!0),u.removeEventListener("click",v),u.removeEventListener("focus",g,!0),u.removeEventListener("click",p.bind(this)))},function(e,t){e.classList.add("alphaPicker"),i.Z.tv&&e.classList.add("alphaPicker-tv");var n=e.classList.contains("alphaPicker-vertical");n||e.classList.add("focuscontainer-x");var r,a="",s=k(n),l="alphaPickerRow";n&&(l+=" alphaPickerRow-vertical"),a+='<div class="'.concat(l,'">'),"keyboard"===t.mode?a+='<button data-value=" " is="paper-icon-button-light" class="'.concat(s,'" aria-label="').concat(o.ZP.translate("ButtonSpace"),'"><span class="material-icons alphaPickerButtonIcon space_bar" aria-hidden="true"></span></button>'):a+=w(r=["#"],n).join(""),a+=w(r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],n).join(""),"keyboard"===t.mode?(a+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(s,'" aria-label="').concat(o.ZP.translate("ButtonBackspace"),'"><span class="material-icons alphaPickerButtonIcon backspace" aria-hidden="true"></span></button>'),a+="</div>",r=["0","1","2","3","4","5","6","7","8","9"],a+='<div class="'.concat(l,'">'),a+="<br/>",a+=w(r,n).join(""),a+="</div>"):a+="</div>",e.innerHTML=a,e.classList.add("focusable"),e.focus=S}(u,t),this.enabled(!0),this.visible(!0)}var t,n;return t=e,(n=[{key:"value",value:function(e,t){var n,r,i=this.options.element;if(void 0!==e)if(null!=e){if(e=e.toUpperCase(),this._currentValue=e,"keyboard"!==this.options.mode){r=i.querySelector(".".concat(x));try{n=i.querySelector(".alphaPickerButton[data-value='".concat(e,"']"))}catch(e){console.error("error in querySelector:",e)}n&&n!==r&&n.classList.add(x),r&&r!==n&&r.classList.remove(x)}}else this._currentValue=e,(r=i.querySelector(".".concat(x)))&&r.classList.remove(x);return t&&i.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:e}})),this._currentValue}},{key:"on",value:function(e,t){this.options.element.addEventListener(e,t)}},{key:"off",value:function(e,t){this.options.element.removeEventListener(e,t)}},{key:"updateControls",value:function(e){e.NameLessThan?this.value("#"):this.value(e.NameStartsWith),this.visible(-1!==e.SortBy.indexOf("SortName"))}},{key:"visible",value:function(e){this.options.element.style.visibility=e?"visible":"hidden"}},{key:"values",value:function(){for(var e=this.options.element.querySelectorAll(".alphaPickerButton"),t=[],n=0,r=e.length;n<r;n++)t.push(e[n].getAttribute("data-value"));return t}},{key:"focus",value:function(){var e=this.options.element;r.Z.autoFocus(e,!0)}},{key:"destroy",value:function(){var e=this.options.element;this.enabled(!1),e.classList.remove("focuscontainer-x"),this.options=null}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),Z=T},69523:function(e,t,n){"use strict";n(5769),n(63238),n(61418),n(17460),n(14078);var r=n(13800),i=n(83094),a=n(78695),o=n(12392),s=n(27515),l=n(47518),c=(n(67752),n(1892)),u=n.n(c),d=n(95760),f=n.n(d),h=n(38311),m=n.n(h),v=n(58192),p=n.n(v),g=n(38060),y=n.n(g),b=n(54865),I=n.n(b),P=n(88101),x={};x.styleTagTransform=I(),x.setAttributes=p(),x.insert=m().bind(null,"head"),x.domAPI=f(),x.insertStyleElement=y(),u()(P.Z,x),P.Z&&P.Z.locals&&P.Z.locals;var S=Object.create(HTMLDivElement.prototype);function k(e){var t=e.detail.command;"end"===t?(s.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(s.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(s.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}S.createdCallback=function(){this.classList.add("emby-scroller")},S.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},S.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},S.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},S.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},S.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},S.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},S.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},S.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},S.addScrollEventListener=function(e,t){this.scroller&&i.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},S.removeScrollEventListener=function(e,t){this.scroller&&i.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},S.attachedCallback=function(){this.getAttribute("data-navcommands")&&o.default.on(this,k);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var c,u=a.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),d={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:u||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:u||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!u,allowNativeScroll:!u,forceHideScrollbars:u,requireAnimation:u&&l.Z.edge};this.scroller=new r.Z(this,d),this.scroller.init(),this.scroller.reload(),a.Z.tv&&this.getAttribute("data-centerfocus")&&(this,c=this.scroller,i.ZP.addEventListener(this,"focus",(function(e){var t=s.Z.focusableParent(e.target);t&&c.toCenter(t)}),{capture:!0,passive:!0})),u&&function(e){n.e(2910).then(n.bind(n,22910)).then((function(){e.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')}))}(this)},S.pause=function(){var e=this.headroom;e&&e.pause()},S.resume=function(){var e=this.headroom;e&&e.resume()},S.detachedCallback=function(){this.getAttribute("data-navcommands")&&o.default.off(this,k);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:S,extends:"div"})},60042:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var o=i.apply(null,n);o&&e.push(o)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},63421:function(e,t,n){"use strict";var r=n(54933),i=n.n(r),a=n(93476),o=n.n(a)()(i());o.push([e.id,".alphaPicker{-webkit-align-self:center;align-self:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;text-align:center}.alphaPicker-vertical{line-height:1}.alphaPicker-fixed{bottom:5.5em;bottom:max(env(safe-area-inset-bottom),5.5em);position:fixed}.alphaPickerRow{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:center;justify-content:center}.alphaPickerRow-vertical{-webkit-flex-direction:column;flex-direction:column}.alphaPickerButton{border:0!important;border-radius:.1em;cursor:pointer;-webkit-flex-grow:1;flex-grow:1;-webkit-flex-shrink:0;flex-shrink:0;font-family:inherit;font-size:inherit;font-weight:400;margin:0;min-width:0;min-width:auto;outline:none!important;padding:.1em .4em;vertical-align:middle;width:auto}@media (max-height:50em){.alphaPicker-fixed{bottom:5em;bottom:max(env(safe-area-inset-bottom),5em)}.alphaPickerButton-vertical{padding-bottom:1px!important;padding-top:1px!important}}@media (max-height:49em){.alphaPicker-vertical{font-size:94%}}@media (max-height:44em){.alphaPicker-vertical{font-size:90%}.alphaPickerButton-vertical{padding-bottom:0!important;padding-top:0!important}}@media (max-height:37em){.alphaPicker-vertical{font-size:82%}}@media (max-height:32em){.alphaPicker-vertical{font-size:74%}}.alphaPicker-vertical.alphaPicker-tv{font-size:86%}.alphaPickerButton-tv.alphaPickerButton-vertical{padding:0}.alphaPickerButton-vertical{display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;text-align:center;width:1.5em}.alphaPickerButtonIcon{font-size:100%!important}.alphaPicker-fixed.alphaPicker-tv{bottom:1%;bottom:max(env(safe-area-inset-bottom),1%)}.alphaPicker-fixed-right{right:.4em;right:max(env(safe-area-inset-right),.4em)}@media (min-width:62.5em){.alphaPicker-fixed-right{right:1em;right:max(env(safe-area-inset-right),1em)}}@media (max-height:31.25em){.alphaPicker-fixed{display:none!important}}",""]),t.Z=o},44027:function(e,t,n){"use strict";var r=n(54933),i=n.n(r),a=n(93476),o=n.n(a)()(i());o.push([e.id,".searchFieldsInner{margin:0 auto;max-width:60em}.searchfields-icon{-webkit-align-self:flex-end;align-self:flex-end;font-size:2em;margin-bottom:.1em;margin-right:.25em}",""]),t.Z=o},88101:function(e,t,n){"use strict";var r=n(54933),i=n.n(r),a=n(93476),o=n.n(a)()(i());o.push([e.id,".emby-scroller-container{position:relative}.emby-scroller{margin-left:max(env(safe-area-inset-left),3.3%);margin-right:max(env(safe-area-inset-right),3.3%)}.itemsContainer>.card>.cardBox{margin-left:0;margin-right:1.2em}.servers>.card>.cardBox{margin-left:.6em;margin-right:.6em}.layout-mobile .emby-scroller,.layout-tv .emby-scroller{margin-left:0;margin-right:0;padding-left:max(env(safe-area-inset-left),3.3%);padding-right:max(env(safe-area-inset-right),3.3%)}",""]),t.Z=o},71426:function(e,t,n){"use strict";n(62525);var r=n(27378),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;i=a("react.element"),t.Fragment=a("react.fragment")}var o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:u,props:a,_owner:o.current}}t.jsx=c,t.jsxs=c},24246:function(e,t,n){"use strict";e.exports=n(71426)},55340:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return se}});var r=n(24246),i=n(27378),a=n(80369),o=n(97659),s=function(){return o.Z.Date.now()},l=/\s/,c=/^\s+/,u=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&l.test(e.charAt(t)););return t}(e)+1).replace(c,""):e},d=n(74029),f=n(18742),h=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,v=/^0o[0-7]+$/i,p=parseInt,g=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||(0,f.Z)(e)&&"[object Symbol]"==(0,d.Z)(e)}(e))return NaN;if((0,a.Z)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=(0,a.Z)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=u(e);var n=m.test(e);return n||v.test(e)?p(e.slice(2),n?2:8):h.test(e)?NaN:+e},y=Math.max,b=Math.min,I=n(13594),P=function(e){var t=e.onAlphaPicked,n=void 0===t?function(){}:t,a=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return o}((0,i.useState)(),2),o=a[0],s=a[1],l=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e;return s(new I.Z({element:l.current,mode:"keyboard"})),null===(e=l.current)||void 0===e||e.addEventListener("alphavalueclicked",n),function(){null==o||o.destroy()}}),[]),(0,r.jsx)("div",{ref:l,className:"alphaPicker align-items-center"})},x=n(33942),S=(n(85427),n(83225),n(15359),n(1892)),k=n.n(S),w=n(95760),T=n.n(w),Z=n(38311),j=n.n(Z),A=n(58192),C=n.n(A),E=n(38060),L=n.n(E),O=n(54865),B=n.n(O),N=n(44027),M={};M.styleTagTransform=B(),M.setAttributes=C(),M.insert=j().bind(null,"head"),M.domAPI=T(),M.insertStyleElement=L(),k()(N.Z,M),N.Z&&N.Z.locals&&N.Z.locals;var _=n(78695),R=n(47518),F=function(){return F=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},F.apply(this,arguments)},q=function(e){var t=e.onSearch,n=void 0===t?function(){}:t,o=(0,i.useRef)(null),l=function(){var e;return null===(e=null==o?void 0:o.current)||void 0===e?void 0:e.querySelector(".searchfields-txtSearch")},c=(0,i.useMemo)((function(){return function(e,t,n){var r,i,o,l,c,u,d=0,f=!1,h=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=r,a=i;return r=i=void 0,d=t,l=e.apply(a,n)}function p(e){return d=e,c=setTimeout(P,t),f?v(e):l}function I(e){var n=e-u;return void 0===u||n>=t||n<0||h&&e-d>=o}function P(){var e=s();if(I(e))return x(e);c=setTimeout(P,function(e){var n=t-(e-u);return h?b(n,o-(e-d)):n}(e))}function x(e){return c=void 0,m&&r?v(e):(r=i=void 0,l)}function S(){var e=s(),n=I(e);if(r=arguments,i=this,u=e,n){if(void 0===c)return p(u);if(h)return clearTimeout(c),c=setTimeout(P,t),v(u)}return void 0===c&&(c=setTimeout(P,t)),l}return t=g(t)||0,(0,a.Z)(n)&&(f=!!n.leading,o=(h="maxWait"in n)?y(g(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),S.cancel=function(){void 0!==c&&clearTimeout(c),d=0,r=u=i=c=void 0},S.flush=function(){return void 0===c?l:x(s())},S}(n,400)}),[n]);return(0,i.useEffect)((function(){var e,t;return null===(e=l())||void 0===e||e.addEventListener("input",(function(e){var t;c((void 0===(t=e.target.value)&&(t=""),t.trim()))})),null===(t=l())||void 0===t||t.focus(),function(){c.cancel()}}),[c]),(0,r.jsxs)("div",F({className:"padded-left padded-right searchFields",ref:o},{children:[(0,r.jsxs)("div",F({className:"searchFieldsInner flex align-items-center justify-content-center"},{children:[(0,r.jsx)("span",{className:"searchfields-icon material-icons search","aria-hidden":"true"}),(0,r.jsx)("div",{className:"inputContainer flex-grow",style:{marginBottom:0},dangerouslySetInnerHTML:{__html:'<input\n    is="emby-input"\n    class="searchfields-txtSearch"\n    type="text"\n    data-keyboard="true"\n    placeholder="'.concat(x.ZP.translate("Search"),'"\n    autocomplete="off"\n    maxlength="40"\n    autofocus\n/>')}})]})),_.Z.tv&&!R.Z.tv&&(0,r.jsx)(P,{onAlphaPicked:function(e){var t=e.detail.value,n=l();if(n){if("backspace"===t){var r=n.value;n.value=r.length?r.substring(0,r.length-1):""}else n.value+=t;n.dispatchEvent(new CustomEvent("input",{bubbles:!0}))}else console.error("Unexpected null reference")}})]}))},D=n(60042),z=n.n(D),U=n(53913),H=n(61097),W=(n(69523),n(32420),function(){return W=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},W.apply(this,arguments)}),V=function(e){var t=e.title;return{__html:'<h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">'.concat(void 0===t?"":t,'</h2>\n    <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale">\n    <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div>\n</div>')}},K=function(e){var t=e.title,n=e.items,a=void 0===n?[]:n,o=e.cardOptions,s=void 0===o?{}:o,l=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e;H.default.buildCards(a,W({itemsContainer:null===(e=l.current)||void 0===e?void 0:e.querySelector(".itemsContainer"),parentContainer:l.current,shape:"autooverflow",scalable:!0,showTitle:!0,overlayText:!1,centerText:!0,allowBottomPadding:!1},s))}),[s,a]),(0,r.jsx)("div",{ref:l,className:"verticalSection",dangerouslySetInnerHTML:V({title:t})})},$=function(){return $=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},$.apply(this,arguments)},Y=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return o},G=function(e){var t=e.serverId,n=void 0===t?window.ApiClient.serverId():t,a=e.parentId,o=e.collectionType,s=e.query,l=Y((0,i.useState)([]),2),c=l[0],u=l[1],d=Y((0,i.useState)([]),2),f=d[0],h=d[1],m=Y((0,i.useState)([]),2),v=m[0],p=m[1],g=Y((0,i.useState)([]),2),y=g[0],b=g[1],I=Y((0,i.useState)([]),2),P=I[0],S=I[1],k=Y((0,i.useState)([]),2),w=k[0],T=k[1],Z=Y((0,i.useState)([]),2),j=Z[0],A=Z[1],C=Y((0,i.useState)([]),2),E=C[0],L=C[1],O=Y((0,i.useState)([]),2),B=O[0],N=O[1],M=Y((0,i.useState)([]),2),_=M[0],R=M[1],F=Y((0,i.useState)([]),2),q=F[0],D=F[1],H=Y((0,i.useState)([]),2),W=H[0],V=H[1],G=Y((0,i.useState)([]),2),J=G[0],Q=G[1],X=Y((0,i.useState)([]),2),ee=X[0],te=X[1],ne=Y((0,i.useState)([]),2),re=ne[0],ie=ne[1];return(0,i.useEffect)((function(){var e=function(){return{ParentId:a,searchTerm:s,Limit:24,Fields:"PrimaryImageAspectRatio,CanDelete,BasicSyncInfo,MediaSourceCount",Recursive:!0,EnableTotalRecordCount:!1,ImageTypeLimit:1,IncludePeople:!1,IncludeMedia:!1,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1}},t=function(t,n){return void 0===n&&(n={}),null==t?void 0:t.getItems(null==t?void 0:t.getCurrentUserId(),$($($({},e()),{IncludeMedia:!0}),n))},r=function(){return"movies"===o},i=function(){return"tvshows"===o||"tv"===o};if(u([]),h([]),p([]),b([]),S([]),T([]),A([]),L([]),N([]),R([]),D([]),V([]),Q([]),te([]),ie([]),s){var l=U.Z.getApiClient(n);o&&!r()||t(l,{IncludeItemTypes:"Movie"}).then((function(e){return u(e.Items||[])})),o&&!i()||(t(l,{IncludeItemTypes:"Series"}).then((function(e){return h(e.Items||[])})),t(l,{IncludeItemTypes:"Episode"}).then((function(e){return p(e.Items||[])}))),(!o||r()||i())&&function(t,n){return void 0===n&&(n={}),null==t?void 0:t.getPeople(null==t?void 0:t.getCurrentUserId(),$($($({},e()),{IncludePeople:!0}),n))}(l).then((function(e){return ie(e.Items||[])})),o&&"music"!==o||(t(l,{IncludeItemTypes:"Playlist"}).then((function(e){return A(e.Items||[])})),function(t,n){return void 0===n&&(n={}),null==t?void 0:t.getArtists(null==t?void 0:t.getCurrentUserId(),$($($({},e()),{IncludeArtists:!0}),n))}(l).then((function(e){return L(e.Items||[])})),t(l,{IncludeItemTypes:"MusicAlbum"}).then((function(e){return N(e.Items||[])})),t(l,{IncludeItemTypes:"Audio"}).then((function(e){return R(e.Items||[])}))),o||(t(l,{MediaTypes:"Video",ExcludeItemTypes:"Movie,Episode,TvChannel"}).then((function(e){return b(e.Items||[])})),t(l,{IncludeItemTypes:"LiveTvProgram"}).then((function(e){return S(e.Items||[])})),t(l,{IncludeItemTypes:"TvChannel"}).then((function(e){return T(e.Items||[])})),t(l,{IncludeItemTypes:"PhotoAlbum"}).then((function(e){return D(e.Items||[])})),t(l,{IncludeItemTypes:"Photo"}).then((function(e){return V(e.Items||[])})),t(l,{IncludeItemTypes:"AudioBook"}).then((function(e){return Q(e.Items||[])})),t(l,{IncludeItemTypes:"Book"}).then((function(e){return te(e.Items||[])})))}}),[o,a,s,n]),(0,r.jsxs)("div",$({className:z()("searchResults","padded-bottom-page","padded-top",{hide:!s||"livetv"===o})},{children:[(0,r.jsx)(K,{title:x.ZP.translate("Movies"),items:c,cardOptions:{showYear:!0}}),(0,r.jsx)(K,{title:x.ZP.translate("Shows"),items:f,cardOptions:{showYear:!0}}),(0,r.jsx)(K,{title:x.ZP.translate("Episodes"),items:v,cardOptions:{coverImage:!0,showParentTitle:!0}}),(0,r.jsx)(K,{title:x.ZP.translate("HeaderVideos"),items:y,cardOptions:{showParentTitle:!0}}),(0,r.jsx)(K,{title:x.ZP.translate("Programs"),items:P,cardOptions:{preferThumb:!0,inheritThumb:!1,showParentTitleOrTitle:!0,showTitle:!1,coverImage:!0,overlayMoreButton:!0,showAirTime:!0,showAirDateTime:!0,showChannelName:!0}}),(0,r.jsx)(K,{title:x.ZP.translate("Channels"),items:w,cardOptions:{shape:"square"}}),(0,r.jsx)(K,{title:x.ZP.translate("Playlists"),items:j}),(0,r.jsx)(K,{title:x.ZP.translate("Artists"),items:E,cardOptions:{coverImage:!0}}),(0,r.jsx)(K,{title:x.ZP.translate("Albums"),items:B,cardOptions:{showParentTitle:!0}}),(0,r.jsx)(K,{title:x.ZP.translate("Songs"),items:_,cardOptions:{showParentTitle:!0}}),(0,r.jsx)(K,{title:x.ZP.translate("HeaderPhotoAlbums"),items:q}),(0,r.jsx)(K,{title:x.ZP.translate("Photos"),items:W}),(0,r.jsx)(K,{title:x.ZP.translate("HeaderAudioBooks"),items:J}),(0,r.jsx)(K,{title:x.ZP.translate("Books"),items:ee}),(0,r.jsx)(K,{title:x.ZP.translate("People"),items:re,cardOptions:{coverImage:!0}})]}))},J=n(65009),Q=n.n(J),X=n(80135),ee=(n(78066),function(){return ee=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ee.apply(this,arguments)}),te=function(e){var t=e.name,n=e.href;return{__html:"<a\n    is='emby-linkbutton'\n    class='button-link'\n    style='display: inline-block; padding: 0.5em 1em;'\n    href='".concat(n,"'\n>").concat(Q()(t),"</a>")}},ne=function(e){var t=e.serverId,n=void 0===t?window.ApiClient.serverId():t,a=e.parentId,o=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return o}((0,i.useState)([]),2),s=o[0],l=o[1];return(0,i.useEffect)((function(){var e=U.Z.getApiClient(n);e.getItems(e.getCurrentUserId(),{SortBy:"IsFavoriteOrLiked,Random",IncludeItemTypes:"Movie,Series,MusicArtist",Limit:20,Recursive:!0,ImageTypeLimit:0,EnableImages:!1,ParentId:a,EnableTotalRecordCount:!1}).then((function(e){return l(e.Items||[])}))}),[a,n]),(0,r.jsxs)("div",ee({className:"verticalSection searchSuggestions",style:{textAlign:"center"}},{children:[(0,r.jsx)("div",{children:(0,r.jsx)("h2",ee({className:"sectionTitle padded-left padded-right"},{children:x.ZP.translate("Suggestions")}))}),(0,r.jsx)("div",ee({className:"searchSuggestionsList padded-left padded-right"},{children:s.map((function(e){return(0,r.jsx)("div",{dangerouslySetInnerHTML:te({name:e.Name||"",href:X.appRouter.getRouteUrl(e)})},"suggestion-".concat(e.Id))}))}))]}))},re=function(){return re=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},re.apply(this,arguments)},ie=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return o},ae={preferThumb:!0,inheritThumb:!1,showParentTitleOrTitle:!0,showTitle:!1,coverImage:!0,overlayMoreButton:!0,showAirTime:!0,showAirDateTime:!0,showChannelName:!0},oe=function(e){var t=e.serverId,n=void 0===t?window.ApiClient.serverId():t,a=e.parentId,o=e.collectionType,s=e.query,l=ie((0,i.useState)([]),2),c=l[0],u=l[1],d=ie((0,i.useState)([]),2),f=d[0],h=d[1],m=ie((0,i.useState)([]),2),v=m[0],p=m[1],g=ie((0,i.useState)([]),2),y=g[0],b=g[1],I=ie((0,i.useState)([]),2),P=I[0],S=I[1],k=ie((0,i.useState)([]),2),w=k[0],T=k[1],Z=ie((0,i.useState)([]),2),j=Z[0],A=Z[1];return(0,i.useEffect)((function(){var e=function(e,t){return void 0===t&&(t={}),null==e?void 0:e.getItems(null==e?void 0:e.getCurrentUserId(),re(re(re({},{ParentId:a,searchTerm:s,Limit:24,Fields:"PrimaryImageAspectRatio,CanDelete,BasicSyncInfo,MediaSourceCount",Recursive:!0,EnableTotalRecordCount:!1,ImageTypeLimit:1,IncludePeople:!1,IncludeMedia:!1,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1}),{IncludeMedia:!0}),t))};if(u([]),h([]),p([]),b([]),S([]),T([]),A([]),s&&"livetv"===o){var t=U.Z.getApiClient(n);e(t,{IncludeItemTypes:"LiveTvProgram",IsMovie:!0}).then((function(e){return u(e.Items||[])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsMovie:!1,IsSeries:!0,IsSports:!1,IsKids:!1,IsNews:!1}).then((function(e){return h(e.Items||[])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsSports:!0}).then((function(e){return p(e.Items||[])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsKids:!0}).then((function(e){return b(e.Items||[])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsNews:!0}).then((function(e){return S(e.Items||[])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsMovie:!1,IsSeries:!1,IsSports:!1,IsKids:!1,IsNews:!1}).then((function(e){return T(e.Items||[])})),e(t,{IncludeItemTypes:"TvChannel"}).then((function(e){return A(e.Items||[])}))}}),[o,a,s,n]),(0,r.jsxs)("div",re({className:z()("searchResults","padded-bottom-page","padded-top",{hide:!(s&&"livetv"===o)})},{children:[(0,r.jsx)(K,{title:x.ZP.translate("Movies"),items:c,cardOptions:re(re({},ae),{shape:"overflowPortrait"})}),(0,r.jsx)(K,{title:x.ZP.translate("Episodes"),items:f,cardOptions:ae}),(0,r.jsx)(K,{title:x.ZP.translate("Sports"),items:v,cardOptions:ae}),(0,r.jsx)(K,{title:x.ZP.translate("Kids"),items:y,cardOptions:ae}),(0,r.jsx)(K,{title:x.ZP.translate("News"),items:P,cardOptions:ae}),(0,r.jsx)(K,{title:x.ZP.translate("Programs"),items:w,cardOptions:ae}),(0,r.jsx)(K,{title:x.ZP.translate("Channels"),items:j,cardOptions:{shape:"square"}})]}))},se=function(e){var t=e.serverId,n=e.parentId,a=e.collectionType,o=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return o}((0,i.useState)(),2),s=o[0],l=o[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(q,{onSearch:l}),!s&&(0,r.jsx)(ne,{serverId:t||window.ApiClient.serverId(),parentId:n}),(0,r.jsx)(G,{serverId:t||window.ApiClient.serverId(),parentId:n,collectionType:a,query:s}),(0,r.jsx)(oe,{serverId:t||window.ApiClient.serverId(),parentId:n,collectionType:a,query:s})]})}}}]);