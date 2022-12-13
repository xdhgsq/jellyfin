"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5319],{27037:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}}),r(61013),r(98010),r(63238);var a=r(65009),s=r.n(a),n=r(56705),i=r(80135),l=r(78695),o=r(3319),c=r(67469),d=r(27515),u=r(33942),h=r(78407),v=r(83094),g=r(47518),f=(r(85427),r(15359),r(69523),r(32420),r(46650),r(78066),r(93586)),m=r(53913),b=r(61642),p=r(61097),S=!g.Z.slow&&!g.Z.edge;function Z(e){(0,b.Z)(e)}function y(e,t){function r(e){var t=[];t.push({name:u.ZP.translate("Connect"),id:"connect"}),t.push({name:u.ZP.translate("Delete"),id:"delete"}),h.default.show({items:t,title:e.Name}).then((function(t){switch(t){case"connect":!function(e){n.ZP.show(),m.Z.connectToServer(e,{enableAutoLogin:c.Z.enableAutoLogin()}).then((function(e){n.ZP.hide();var t=e.ApiClient;switch(e.State){case"SignedIn":f.ZP.onServerChanged(t.getCurrentUserId(),t.accessToken(),t),f.ZP.navigate("home.html");break;case"ServerSignIn":f.ZP.onServerChanged(null,null,t),f.ZP.navigate("login.html?serverid="+e.Servers[0].Id);break;case"ServerUpdateNeeded":Z({text:u.ZP.translate("core#ServerUpdateNeeded","https://github.com/jellyfin/jellyfin"),html:u.ZP.translate("core#ServerUpdateNeeded",'<a href="https://github.com/jellyfin/jellyfin">https://github.com/jellyfin/jellyfin</a>')});break;default:Z({text:u.ZP.translate("MessageUnableToConnectToServer")})}}))}(e);break;case"delete":!function(e){n.ZP.show(),m.Z.deleteServer(e.Id).then((function(){n.ZP.hide(),g()}))}(e)}}))}function a(t){b=t,function(e,t){var r=t.map((function(e){return{name:e.Name,showIcon:!0,icon:"cast",cardType:"",id:e.Id,server:e}})),a=r.map((function(e){var t;t=e.showIcon?'<span class="cardImageIcon material-icons '+e.icon+'" aria-hidden="true"></span>':'<div class="cardImage" style="'+e.cardImageStyle+'"></div>';var r="card overflowSquareCard loginSquareCard scalableCard overflowSquareCard-scalable";l.Z.tv&&(r+=" show-focus",S&&(r+=" show-animation"));var a="";return a+='<button raised class="'+r+'" style="display:inline-block;" data-id="'+e.id+'" data-url="'+(e.url||"")+'" data-cardtype="'+e.cardType+'">',a+='<div class="cardBox">',a+='<div class="cardScalable">',a+='<div class="cardPadder cardPadder-square">',a+="</div>",a+='<div class="cardContent">',a+='<div class="cardImageContainer coveredImage '.concat(p.default.getDefaultBackgroundClass(),'">'),a+=t,a+="</div>",a+="</div>",a+="</div>",a+='<div class="cardFooter">',(a+='<div class="cardText cardTextCentered">'+s()(e.name)+"</div>")+"</div></div></button>"})).join(""),i=e.querySelector(".servers");r.length||(a="<p>"+u.ZP.translate("MessageNoServersAvailable")+"</p>"),i.innerHTML=a,n.ZP.hide()}(e,t),l.Z.tv&&d.Z.autoFocus(e)}function g(){n.ZP.show(),m.Z.getAvailableServers().then(a)}var b;!function(e,t){"1"==t.showuser?(e.classList.add("libraryPage"),e.classList.remove("standalonePage"),e.classList.add("noSecondaryNavPage")):(e.classList.add("standalonePage"),e.classList.remove("libraryPage"),e.classList.remove("noSecondaryNavPage"))}(e,t),e.addEventListener("viewshow",(function(e){var t=e.detail.isRestored;o.Z.setTitle(null),o.Z.setTransparentMenu(!0),t||g()})),e.querySelector(".servers").addEventListener("click",(function(e){var t=v.ZP.parentWithClass(e.target,"card");if(t){var a=t.getAttribute("data-url");if(a)i.appRouter.show(a);else{var s=t.getAttribute("data-id");r(b.filter((function(e){return e.Id===s}))[0])}}}))}},69523:function(e,t,r){r(5769),r(63238),r(61418),r(17460),r(14078);var a=r(13800),s=r(83094),n=r(78695),i=r(12392),l=r(27515),o=r(47518),c=(r(67752),r(1892)),d=r.n(c),u=r(95760),h=r.n(u),v=r(38311),g=r.n(v),f=r(58192),m=r.n(f),b=r(38060),p=r.n(b),S=r(54865),Z=r.n(S),y=r(88101),P={};P.styleTagTransform=Z(),P.setAttributes=m(),P.insert=g().bind(null,"head"),P.domAPI=h(),P.insertStyleElement=p(),d()(y.Z,P),y.Z&&y.Z.locals&&y.Z.locals;var w=Object.create(HTMLDivElement.prototype);function A(e){var t=e.detail.command;"end"===t?(l.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(l.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(l.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}w.createdCallback=function(){this.classList.add("emby-scroller")},w.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},w.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},w.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},w.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},w.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},w.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},w.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},w.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},w.addScrollEventListener=function(e,t){this.scroller&&s.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},w.removeScrollEventListener=function(e,t){this.scroller&&s.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},w.attachedCallback=function(){this.getAttribute("data-navcommands")&&i.default.on(this,A);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var c,d=n.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),u={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:d||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:d||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!d,allowNativeScroll:!d,forceHideScrollbars:d,requireAnimation:d&&o.Z.edge};this.scroller=new a.Z(this,u),this.scroller.init(),this.scroller.reload(),n.Z.tv&&this.getAttribute("data-centerfocus")&&(this,c=this.scroller,s.ZP.addEventListener(this,"focus",(function(e){var t=l.Z.focusableParent(e.target);t&&c.toCenter(t)}),{capture:!0,passive:!0})),d&&function(e){r.e(2910).then(r.bind(r,22910)).then((function(){e.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')}))}(this)},w.pause=function(){var e=this.headroom;e&&e.pause()},w.resume=function(){var e=this.headroom;e&&e.resume()},w.detachedCallback=function(){this.getAttribute("data-navcommands")&&i.default.off(this,A);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:w,extends:"div"})},88101:function(e,t,r){var a=r(54933),s=r.n(a),n=r(93476),i=r.n(n)()(s());i.push([e.id,".emby-scroller-container{position:relative}.emby-scroller{margin-left:max(env(safe-area-inset-left),3.3%);margin-right:max(env(safe-area-inset-right),3.3%)}.itemsContainer>.card>.cardBox{margin-left:0;margin-right:1.2em}.servers>.card>.cardBox{margin-left:.6em;margin-right:.6em}.layout-mobile .emby-scroller,.layout-tv .emby-scroller{margin-left:0;margin-right:0;padding-left:max(env(safe-area-inset-left),3.3%);padding-right:max(env(safe-area-inset-right),3.3%)}",""]),t.Z=i}}]);