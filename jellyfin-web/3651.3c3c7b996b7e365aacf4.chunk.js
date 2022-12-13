"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3651],{13651:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}}),n(63238),n(61418),n(99785),n(86248);var i=n(83094),r=n(53218),o=n(47005),a=n(70294),s=n(78695),u=n(27515),l=n(33942),c=n(71616),d=n(1892),p=n.n(d),f=n(95760),h=n.n(f),m=n(38311),x=n.n(m),b=n(58192),g=n.n(b),v=n(38060),y=n.n(v),w=n(54865),N=n.n(w),T=n(79394),k={};function D(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function P(e,t,n,i,r,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(i,r)}function Z(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function a(e){P(o,i,r,a,s,"next",e)}function s(e){P(o,i,r,a,s,"throw",e)}a(void 0)}))}}k.styleTagTransform=N(),k.setAttributes=g(),k.insert=x().bind(null,"head"),k.domAPI=h(),k.insertStyleElement=y(),p()(T.Z,k),T.Z&&T.Z.locals&&T.Z.locals,n(78066),n(15359);var L=i.ZP.whichTransitionEvent();function H(){var e=this,t=e.options.parent,n=Math.max(Math.round(A(e)/1e3),0);console.debug("up next seconds remaining: "+n);var i='<span class="upNextDialog-countdownText">'+l.ZP.translate("HeaderSecondsValue",n)+"</span>",r="Episode"===e.itemType?l.ZP.translate("HeaderNextEpisodePlayingInValue",i):l.ZP.translate("HeaderNextVideoPlayingInValue",i);t.querySelector(".upNextDialog-nextVideoText").innerHTML=r}function S(e){var t=this,n=t.options.parent;n.querySelector(".upNextDialog-mediainfo").innerHTML=a.ZP.getPrimaryMediaInfoHtml(e,{criticRating:!1,originalAirDate:!1,starRating:!1,subtitles:!1});var i=c.ZP.getDisplayName(e);e.SeriesName&&(i=e.SeriesName+" - "+i),n.querySelector(".upNextDialog-title").innerText=i||"",t.itemType=e.Type,t.show()}function E(e){e._countdownTextTimeout&&(clearInterval(e._countdownTextTimeout),e._countdownTextTimeout=null)}function R(){return C.apply(this,arguments)}function C(){return C=Z(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.options)){e.next=6;break}return n=t.player,e.next=5,this.hide();case 5:r.O.nextTrack(n);case 6:case"end":return e.stop()}}),e,this)}))),C.apply(this,arguments)}function I(e,t){var n;t.parent.innerHTML=(n="",n+='<div class="flex flex-direction-column flex-grow">',n+='<h2 class="upNextDialog-nextVideoText" style="margin:.25em 0;">&nbsp;</h2>',n+='<h3 class="upNextDialog-title" style="margin:.25em 0 .5em;"></h3>',n+='<div class="flex flex-direction-row upNextDialog-mediainfo">',n+="</div>",n+='<div class="flex flex-direction-row upNextDialog-buttons" style="margin-top:1em;">',n+='<button type="button" is="emby-button" class="raised raised-mini btnStartNow upNextDialog-button">',n+=l.ZP.translate("HeaderStartNow"),n+="</button>",n+='<button type="button" is="emby-button" class="raised raised-mini btnHide upNextDialog-button">',n+=l.ZP.translate("Hide"),n+="</button>",(n+="</div>")+"</div>"),t.parent.classList.add("hide"),t.parent.classList.add("upNextDialog"),t.parent.classList.add("upNextDialog-hidden"),S.call(e,t.nextItem),t.parent.querySelector(".btnHide").addEventListener("click",e.hide.bind(e)),t.parent.querySelector(".btnStartNow").addEventListener("click",R.bind(e))}function M(e,t){var n=e._onHideAnimationComplete;n&&i.ZP.removeEventListener(t,L,n,{once:!0})}function V(e){var t=e.target;t.classList.add("hide"),M(this,t),o.Events.trigger(this,"hide")}function _(){return q.apply(this,arguments)}function q(){return(q=Z(regeneratorRuntime.mark((function e(){var t,n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this,E(this),t.options){e.next=4;break}return e.abrupt("return");case 4:if(n=t.options.parent){e.next=7;break}return e.abrupt("return");case 7:if(M(this,n),!n.classList.contains("upNextDialog-hidden")){e.next=10;break}return e.abrupt("return");case 10:return r=V.bind(t),t._onHideAnimationComplete=r,e.next=14,new Promise((function(e){i.ZP.addEventListener(n,L,e,{once:!0}),n.offsetWidth,n.classList.add("upNextDialog-hidden")}));case 14:o=e.sent,t._onHideAnimationComplete(o);case 16:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function A(e){var t=e.options;if(t){var n=r.O.duration(t.player);if(n){var i=n-1e4*r.O.currentTime(t.player);return Math.round(i/1e4)}}return 0}var O=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,I(this,t)}var t,n,i;return t=e,n=[{key:"show",value:function(){var e,t=this.options.parent;M(this,t),t.classList.remove("hide"),t.offsetWidth,t.classList.remove("upNextDialog-hidden"),s.Z.tv&&setTimeout((function(){u.Z.focus(t.querySelector(".btnStartNow"))}),50),A(e=this)<=0||(H.call(e),E(e),e._countdownTextTimeout=setInterval(H.bind(e),400))}},{key:"hide",value:(i=Z(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.bind(this)();case 2:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"destroy",value:function(){_.call(this),this.options=null,this.itemType=null}}],n&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),j=O},79394:function(e,t,n){var i=n(54933),r=n.n(i),o=n(93476),a=n.n(o)()(r());a.push([e.id,".upNextContainer{-webkit-touch-callout:none;background-color:rgba(0,0,0,.7);bottom:0;color:#fff;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;margin:0 2em 2em 0;padding:1em;position:fixed;right:0;transition:opacity .3s ease-out;-webkit-user-select:none;-ms-user-select:none;user-select:none;width:30em;will-change:transform,opacity}.upNextDialog-hidden{opacity:0}.upNextDialog-countdownText{font-weight:500}.upNextDialog-nextVideoText,.upNextDialog-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:25.5em}.upNextDialog-buttons{-webkit-align-content:flex-end;align-content:flex-end;-webkit-justify-content:end;justify-content:end;width:29.75em}.upNextDialog-button{background:#404040;color:#fff}@media (orientation:landscape){.upNextDialog{-webkit-flex-direction:row;flex-direction:row}}",""]),t.Z=a}}]);