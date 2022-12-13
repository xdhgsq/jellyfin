"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[205],{79293:function(e,t,r){r.r(t),r(5769),r(63238),r(61418),r(17460),r(14078),r(72410),r(15610),r(52077),r(25901),r(92189),r(91047),r(99785);var o=r(80135),a=r(61097),n=r(83094),i=r(33942),l=r(94389),s=r(78695),c=r(27515),u=(r(32420),r(69523),r(53913));function h(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,n=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw n}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function m(e){return function(){var t=this.apiClient,r={SortBy:"SeriesName,SortName",SortOrder:"Ascending",Filters:"IsFavorite",Recursive:!0,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",CollapseBoxSetItems:!1,ExcludeLocationTypes:"Virtual",EnableTotalRecordCount:!1,Limit:20},o=t.getCurrentUserId();return"MusicArtist"===e.types?t.getArtists(o,r):"Person"===e.types?t.getPeople(o,r):(r.IncludeItemTypes=e.types,t.getItems(o,r))}}function f(e,t){return o.appRouter.getRouteUrl("list",{serverId:t,itemTypes:e.types,isFavorite:!0})}function y(e){return function(t){l.M.preferVisualCards&&e.autoCardLayout&&e.showTitle;var r=this.apiClient.serverId(),o=s.Z.tv?[{name:i.ZP.translate("All"),id:"more",icon:"favorite",routeUrl:f(e,r)}]:null,n=0;return e.showTitle&&n++,e.showYear&&n++,e.showParentTitle&&n++,a.default.getCardsHtml({items:t,preferThumb:e.preferThumb,shape:e.shape,centerText:e.centerText&&!0,overlayText:!1!==e.overlayText,showTitle:e.showTitle,showYear:e.showYear,showParentTitle:e.showParentTitle,scalable:!0,coverImage:e.coverImage,overlayPlayButton:e.overlayPlayButton,overlayMoreButton:e.overlayMoreButton&&!0,action:e.action,allowBottomPadding:!1,cardLayout:false,leadingButtons:o,lines:n})}}var p=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.view=t,this.params=r,this.apiClient=u.Z.currentApiClient(),this.sectionsContainer=t.querySelector(".sections"),function(e,t,r){var o,a=[{name:"Movies",types:"Movie",shape:"overflowPortrait",showTitle:!0,showYear:!0,overlayPlayButton:!0,overlayText:!1,centerText:!0},{name:"Shows",types:"Series",shape:"overflowPortrait",showTitle:!0,showYear:!0,overlayPlayButton:!0,overlayText:!1,centerText:!0},{name:"Episodes",types:"Episode",shape:"overflowBackdrop",preferThumb:!1,showTitle:!0,showParentTitle:!0,overlayPlayButton:!0,overlayText:!1,centerText:!0},{name:"Videos",types:"Video",shape:"overflowBackdrop",preferThumb:!0,showTitle:!0,overlayPlayButton:!0,overlayText:!1,centerText:!0},{name:"Collections",types:"BoxSet",shape:"overflowPortrait",showTitle:!0,overlayPlayButton:!0,overlayText:!1,centerText:!0},{name:"Playlists",types:"Playlist",shape:"overflowSquare",preferThumb:!1,showTitle:!0,overlayText:!1,showParentTitle:!1,centerText:!0,overlayPlayButton:!0,coverImage:!0},{name:"People",types:"Person",shape:"overflowPortrait",preferThumb:!1,showTitle:!0,overlayText:!1,showParentTitle:!1,centerText:!0,overlayPlayButton:!0,coverImage:!0},{name:"Artists",types:"MusicArtist",shape:"overflowSquare",preferThumb:!1,showTitle:!0,overlayText:!1,showParentTitle:!1,centerText:!0,overlayPlayButton:!0,coverImage:!0},{name:"Albums",types:"MusicAlbum",shape:"overflowSquare",preferThumb:!1,showTitle:!0,overlayText:!1,showParentTitle:!0,centerText:!0,overlayPlayButton:!0,coverImage:!0},{name:"Songs",types:"Audio",shape:"overflowSquare",preferThumb:!1,showTitle:!0,overlayText:!1,showParentTitle:!0,centerText:!0,overlayMoreButton:!0,action:"instantmix",coverImage:!0},{name:"Books",types:"Book",shape:"overflowPortrait",showTitle:!0,showYear:!0,overlayPlayButton:!0,overlayText:!1,centerText:!0}],l="",c=d(a);try{for(c.s();!(o=c.n()).done;){var u=o.value,h="verticalSection";u.showTitle||(h+=" verticalSection-extrabottompadding"),l+='<div class="'+h+' hide">',l+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',s.Z.tv?l+='<h2 class="sectionTitle sectionTitle-cards">'+i.ZP.translate(u.name)+"</h2>":(l+='<a is="emby-linkbutton" href="'+f(u,r.serverId())+'" class="more button-flat button-flat-mini sectionTitleTextButton">',l+='<h2 class="sectionTitle sectionTitle-cards">',l+=i.ZP.translate(u.name),l+="</h2>",l+='<span class="material-icons chevron_right" aria-hidden="true"></span>',l+="</a>"),l+="</div>",l+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true"><div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x" data-monitor="markfavorite"></div></div>',l+="</div>"}}catch(e){c.e(e)}finally{c.f()}t.innerHTML=l,window.CustomElements.upgradeSubtree(t);for(var v=t.querySelectorAll(".itemsContainer"),p=0,g=v.length;p<g;p++){var T=v[p];T.fetchData=m(a[p]).bind(e),T.getItemsHtml=y(a[p]).bind(e),T.parentContainer=n.ZP.parentWithClass(T,"verticalSection")}}(this,this.sectionsContainer,this.apiClient)}var t,r;return t=e,(r=[{key:"onResume",value:function(e){var t,r=[],o=this.view,a=d(this.sectionsContainer.querySelectorAll(".itemsContainer"));try{for(a.s();!(t=a.n()).done;){var n=t.value;r.push(n.resume(e))}}catch(e){a.e(e)}finally{a.f()}Promise.all(r).then((function(){e.autoFocus&&c.Z.autoFocus(o)}))}},{key:"onPause",value:function(){var e,t=d(this.sectionsContainer.querySelectorAll(".itemsContainer"));try{for(t.s();!(e=t.n()).done;)e.value.pause()}catch(e){t.e(e)}finally{t.f()}}},{key:"destroy",value:function(){this.view=null,this.params=null,this.apiClient=null;var e,t=d(this.sectionsContainer.querySelectorAll(".itemsContainer"));try{for(t.s();!(e=t.n()).done;){var r=e.value;r.fetchData=null,r.getItemsHtml=null,r.parentContainer=null}}catch(e){t.e(e)}finally{t.f()}this.sectionsContainer=null}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=p},69523:function(e,t,r){r(5769),r(63238),r(61418),r(17460),r(14078);var o=r(13800),a=r(83094),n=r(78695),i=r(12392),l=r(27515),s=r(47518),c=(r(67752),r(1892)),u=r.n(c),h=r(95760),d=r.n(h),v=r(38311),m=r.n(v),f=r(58192),y=r.n(f),p=r(38060),g=r.n(p),T=r(54865),b=r.n(T),w=r(88101),S={};S.styleTagTransform=b(),S.setAttributes=y(),S.insert=m().bind(null,"head"),S.domAPI=d(),S.insertStyleElement=g(),u()(w.Z,S),w.Z&&w.Z.locals&&w.Z.locals;var P=Object.create(HTMLDivElement.prototype);function x(e){var t=e.detail.command;"end"===t?(l.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(l.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(l.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}P.createdCallback=function(){this.classList.add("emby-scroller")},P.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},P.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},P.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},P.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},P.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},P.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},P.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},P.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},P.addScrollEventListener=function(e,t){this.scroller&&a.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},P.removeScrollEventListener=function(e,t){this.scroller&&a.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},P.attachedCallback=function(){this.getAttribute("data-navcommands")&&i.default.on(this,x);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var c,u=n.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),h={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:u||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:u||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!u,allowNativeScroll:!u,forceHideScrollbars:u,requireAnimation:u&&s.Z.edge};this.scroller=new o.Z(this,h),this.scroller.init(),this.scroller.reload(),n.Z.tv&&this.getAttribute("data-centerfocus")&&(this,c=this.scroller,a.ZP.addEventListener(this,"focus",(function(e){var t=l.Z.focusableParent(e.target);t&&c.toCenter(t)}),{capture:!0,passive:!0})),u&&function(e){r.e(2910).then(r.bind(r,22910)).then((function(){e.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')}))}(this)},P.pause=function(){var e=this.headroom;e&&e.pause()},P.resume=function(){var e=this.headroom;e&&e.resume()},P.detachedCallback=function(){this.getAttribute("data-navcommands")&&i.default.off(this,x);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:P,extends:"div"})},88101:function(e,t,r){var o=r(54933),a=r.n(o),n=r(93476),i=r.n(n)()(a());i.push([e.id,".emby-scroller-container{position:relative}.emby-scroller{margin-left:max(env(safe-area-inset-left),3.3%);margin-right:max(env(safe-area-inset-right),3.3%)}.itemsContainer>.card>.cardBox{margin-left:0;margin-right:1.2em}.servers>.card>.cardBox{margin-left:.6em;margin-right:.6em}.layout-mobile .emby-scroller,.layout-tv .emby-scroller{margin-left:0;margin-right:0;padding-left:max(env(safe-area-inset-left),3.3%);padding-right:max(env(safe-area-inset-right),3.3%)}",""]),t.Z=i}}]);