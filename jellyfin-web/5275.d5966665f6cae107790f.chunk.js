(self.webpackChunk=self.webpackChunk||[]).push([[5275],{5275:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}}),r(72410),r(15610),r(25901),r(92189),r(91047),r(5769),r(63238),r(61418),r(17460),r(14078),r(43512),r(52077),r(911),r(27471),r(61013),r(40895),r(69217),r(32081);var a=r(65009),i=r.n(a),n=r(12392),o=r(47518),l=r(33942),s=r(47005),d=r(74227),c=r(1197),u=r(56705),m=r(28469),g=r(27515),h=r(53218),f=r(28978),p=r(21361),v=r(78695),b=r(67962),y=r(83094),w=r(1892),I=r.n(w),S=r(95760),x=r.n(S),T=r(38311),P=r.n(T),k=r(58192),C=r.n(k),H=r(38060),D=r.n(H),Z=r(54865),L=r.n(Z),E=r(24297),A={};A.styleTagTransform=L(),A.setAttributes=C(),A.insert=P().bind(null,"head"),A.domAPI=x(),A.insertStyleElement=D(),I()(E.Z,A),E.Z&&E.Z.locals&&E.Z.locals,r(15282),r(85427),r(87201),r(10182),r(78066),r(21865),r(87861),r(69523),r(15359),r(67752);var N=r(53913);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function O(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,n=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw n}}}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function W(e,t){var r=e.posLeft;r||(r=parseFloat(e.style.left.replace("%","")),e.posLeft=r);var a=e.posWidth;a||(a=parseFloat(e.style.width.replace("%","")),e.posWidth=a);var i=r+a,n=(Math.max(Math.min(t,i),r)-r)/a*100,o=e.guideProgramName;o||(o=e.querySelector(".guideProgramName"),e.guideProgramName=o);var l=e.caret;l||(l=e.querySelector(".guide-programNameCaret"),e.caret=l),o&&(n>0&&n<=100?(o.style.transform="translateX("+n+"%)",l.classList.remove("hide")):(o.style.transform="none",l.classList.add("hide")))}var z=!1;function F(e,t){z||(z=!0,requestAnimationFrame((function(){var r,a=e.scrollLeft,i=a?a/e.scrollWidth*100:0,n=O(t);try{for(n.s();!(r=n.n()).done;)W(r.value,i)}catch(e){n.e(e)}finally{n.f()}z=!1})))}function j(e){if(v.Z.tv){var t=y.ZP.parentWithClass(e.target,"programCell");if(t){var r=t.getAttribute("data-startdate"),a=t.getAttribute("data-enddate");r=m.ZP.parseISO8601Date(r,{toLocal:!0}).getTime(),a=m.ZP.parseISO8601Date(a,{toLocal:!0}).getTime();var i=(new Date).getTime();if(i>=r&&i<a){var n=t.getAttribute("data-channelid"),o=t.getAttribute("data-serverid");e.preventDefault(),e.stopPropagation(),h.O.play({ids:[n],serverId:o})}}}}var G=function(e){var t=this,a={};t.options=e,t.categoryOptions={categories:[]};var h,w,I,S,x=864e5,T=0,P=0;function k(){C(),w=setInterval((function(){t.refresh()}),9e5)}function C(){w&&(clearInterval(w),w=null)}function H(){u.ZP.show()}function D(e){if("string"===q(e).toString().toLowerCase())try{e=m.ZP.parseISO8601Date(e,{toLocal:!0})}catch(t){return e}return m.ZP.getDisplayTime(e).toLowerCase()}function Z(e){if(!e.StartDateLocal)try{e.StartDateLocal=m.ZP.parseISO8601Date(e.StartDate,{toLocal:!0})}catch(e){console.error("error parsing timestamp for start date")}if(!e.EndDateLocal)try{e.EndDateLocal=m.ZP.parseISO8601Date(e.EndDate,{toLocal:!0})}catch(e){console.error("error parsing timestamp for end date")}return null}function L(e){var t;if("SeriesTimer"===e.Type)return'<span class="material-icons programIcon seriesTimerIcon fiber_smart_record" aria-hidden="true"></span>';if(e.TimerId||e.SeriesTimerId)t=e.Status||"Cancelled";else{if("Timer"!==e.Type)return"";t=e.Status}return e.SeriesTimerId?"Cancelled"!==t?'<span class="material-icons programIcon seriesTimerIcon fiber_smart_record" aria-hidden="true"></span>':'<span class="material-icons programIcon seriesTimerIcon seriesTimerIcon-inactive fiber_smart_record" aria-hidden="true"></span>':'<span class="material-icons programIcon timerIcon fiber_manual_record" aria-hidden="true"></span>'}function E(e,r,n,o,s,d){var c="",u=r.getTime(),m=u+x-1;c+='<div class="'+(v.Z.tv?"channelPrograms channelPrograms-tv":"channelPrograms")+'" data-channelid="'+n.Id+'">';for(var g,h=v.Z.tv?"link":"programdialog",p=t.categoryOptions.categories||[],b=!p.length||-1!==p.indexOf("movies"),y=!p.length||-1!==p.indexOf("sports"),w=!p.length||-1!==p.indexOf("news"),I=!p.length||-1!==p.indexOf("kids"),S=!p.length||-1!==p.indexOf("series"),T="true"===f.get("guide-colorcodedbackgrounds"),P=(new Date).getTime(),k=d.startIndex,C=o.length;k<C;k++){var H=o[k];if(H.ChannelId===n.Id){g=!0,d.startIndex++,Z(H);var D=H.StartDateLocal.getTime(),E=H.EndDateLocal.getTime();if(!(E<u)){if(D>m)break;a[H.Id]=H;var A=Math.max(D,u),N=(D-u)/x;N*=100,N=Math.max(N,0);var q=(Math.min(E,m)-A)/x;q*=100;var O="programCell itemAction",M=null,W=!0;H.IsKids?(W=I,M="kids"):H.IsSports?(W=y,M="sports"):H.IsNews?(W=w,M="news"):H.IsMovie?(W=b,M="movie"):W=(H.IsSeries||b&&w&&y&&I)&&S,W&&T&&M&&(O+=" programCell-"+M),P>=D&&P<E&&(O+=" programCell-active");var z="";if(H.TimerId&&(z+=' data-timerid="'+H.TimerId+'"'),H.SeriesTimerId&&(z+=' data-seriestimerid="'+H.SeriesTimerId+'"'),c+="<button"+(q>=2?' is="emby-programcell"':"")+' data-action="'+h+'"'+z+' data-channelid="'+H.ChannelId+'" data-id="'+H.Id+'" data-serverid="'+H.ServerId+'" data-startdate="'+H.StartDate+'" data-enddate="'+H.EndDate+'" data-type="'+H.Type+'" class="'+O+'" style="left:'+N+"%;width:"+q+'%;">',W){c+='<div class="guideProgramName">',c+='<div class="guide-programNameCaret hide"><span class="guideProgramNameCaretIcon material-icons keyboard_arrow_left" aria-hidden="true"></span></div>',c+='<div class="guideProgramNameText">'+i()(H.Name);var F=null;H.IsLive&&s.showLiveIndicator?F='<span class="liveTvProgram guideProgramIndicator">'+l.ZP.translate("Live")+"</span>":H.IsPremiere&&s.showPremiereIndicator?F='<span class="premiereTvProgram guideProgramIndicator">'+l.ZP.translate("Premiere")+"</span>":H.IsSeries&&!H.IsRepeat&&s.showNewIndicator?F='<span class="newTvProgram guideProgramIndicator">'+l.ZP.translate("New")+"</span>":H.IsSeries&&H.IsRepeat&&s.showRepeatIndicator&&(F='<span class="repeatTvProgram guideProgramIndicator">'+l.ZP.translate("Repeat")+"</span>"),c+=F||"",H.EpisodeTitle&&s.showEpisodeTitle&&(c+='<div class="guideProgramSecondaryInfo">',H.EpisodeTitle&&s.showEpisodeTitle&&(c+='<span class="programSecondaryTitle">'+i()(H.EpisodeTitle)+"</span>"),c+="</div>"),c+="</div>",H.IsHD&&s.showHdIcon&&(v.Z.tv?c+='<div class="programIcon guide-programTextIcon guide-programTextIcon-tv">HD</div>':c+='<div class="programIcon guide-programTextIcon">HD</div>'),c+=L(H),c+="</div>"}c+="</button>"}}else if(g)break}return c+"</div>"}function A(e,t){for(var r=e.ChannelId,a=-1,i=0,n=t.length;i<n;i++)if(r===t[i].Id){a=i;break}return 1e7*a+m.ZP.parseISO8601Date(e.StartDate,{toLocal:!0}).getTime()/6e4}function M(e,t,r){e.scrollTo?r?e.scrollTo(t,0):e.scrollTo(0,t):r?e.scrollLeft=Math.round(t):e.scrollTop=Math.round(t)}t.refresh=function(){h=null,R(e.element),k()},t.pause=function(){C()},t.resume=function(e){e?t.refresh():k()},t.destroy=function(){C(),s.Events.off(c.default,"TimerCreated",K),s.Events.off(c.default,"TimerCancelled",X),s.Events.off(c.default,"SeriesTimerCancelled",Y),$(e.element,!1),b.ZP.off(e.element),a={}};var W=0,z=0,G=0;function _(r,n,o,l,s,d){var c=function(e){return e.getMinutes()-30>=0?e.setHours(e.getHours(),30,0,0):e.setHours(e.getHours(),0,0,0),e}(n);h=c,function(r,n,o,l,s,d){var c=N.Z.getApiClient(e.serverId),m={StartIndex:0,EnableFavoriteSorting:"false"!==f.get("livetv-favoritechannelsattop")};m.UserId=c.getCurrentUserId();var h=500;P=h,H(),m.StartIndex=T,m.Limit=h,m.AddCurrentProgram=!1,m.EnableUserData=!1,m.EnableImageTypes="Primary";var b=t.categoryOptions.categories||[],w=!b.length||-1!==b.indexOf("movies"),S=!b.length||-1!==b.indexOf("sports"),k=!b.length||-1!==b.indexOf("news"),C=!b.length||-1!==b.indexOf("kids"),Z=!b.length||-1!==b.indexOf("series");w&&S&&k&&C?(m.IsMovie=null,m.IsSports=null,m.IsKids=null,m.IsNews=null,m.IsSeries=null):(k&&(m.IsNews=!0),S&&(m.IsSports=!0),C&&(m.IsKids=!0),w&&(m.IsMovie=!0),Z&&(m.IsSeries=!0)),"DatePlayed"===f.get("livetv-channelorder")?(m.SortBy="DatePlayed",m.SortOrder="Descending"):(m.SortBy=null,m.SortOrder=null);var L=n;L=new Date(L.getTime()+1e3);var q=new Date(L.getTime()+x-2e3),W=y.ZP.getWindowSize().innerWidth>=600,z={showHdIcon:W&&"true"===f.get("guide-indicator-hd"),showLiveIndicator:W&&"false"!==f.get("guide-indicator-live"),showPremiereIndicator:W&&"false"!==f.get("guide-indicator-premiere"),showNewIndicator:W&&"false"!==f.get("guide-indicator-new"),showRepeatIndicator:W&&"true"===f.get("guide-indicator-repeat"),showEpisodeTitle:!v.Z.tv};c.getLiveTvChannels(m).then((function(e){var t=r.querySelector(".btnPreviousPage"),n=r.querySelector(".btnNextPage");e.TotalRecordCount>h?(r.querySelector(".guideOptions").classList.remove("hide"),t.classList.remove("hide"),n.classList.remove("hide"),m.StartIndex?r.querySelector(".btnPreviousPage").disabled=!1:r.querySelector(".btnPreviousPage").disabled=!0,m.StartIndex+h<e.TotalRecordCount?n.disabled=!1:n.disabled=!0):r.querySelector(".guideOptions").classList.add("hide");var f=[],b={UserId:c.getCurrentUserId(),MaxStartDate:q.toISOString(),MinEndDate:L.toISOString(),channelIds:e.Items.map((function(e){return e.Id})).join(","),ImageTypeLimit:1,EnableImages:!1,SortBy:"StartDate",EnableTotalRecordCount:!1,EnableUserData:!1};z.showHdIcon&&f.push("IsHD"),f.length&&(b.Fields=f.join("")),c.getLiveTvPrograms(b).then((function(t){!function(e,t,r,n,o,l,s,d,c,u){n.sort((function(e,t){return A(e,r)-A(t,r)}));var m=document.activeElement,h=m&&m.getAttribute?m.getAttribute("data-id"):null,f=null;m&&(f=(f=y.ZP.parentWithClass(m,"channelPrograms"))&&f.getAttribute?f.getAttribute("data-channelid"):null),function(e,t,r){var a,n="",o=O(t);try{for(o.s();!(a=o.n()).done;){var l=a.value,s=l.ImageTags.Primary,d="guide-channelHeaderCell itemAction";v.Z.tv&&(d+=" guide-channelHeaderCell-tv");var c=[];l.ChannelNumber&&c.push(l.ChannelNumber),l.Name&&c.push(l.Name),n+='<button title="'+i()(c.join(" "))+'" type="button" class="'+d+'" data-action="link" data-isfolder="'+l.IsFolder+'" data-id="'+l.Id+'" data-serverid="'+l.ServerId+'" data-type="'+l.Type+'">',s&&(n+='<div class="guideChannelImage lazy" data-src="'+r.getScaledImageUrl(l.Id,{maxHeight:220,tag:l.ImageTags.Primary,type:"Primary"})+'"></div>'),l.ChannelNumber&&(n+='<h3 class="guideChannelNumber">'+l.ChannelNumber+"</h3>"),!s&&l.Name&&(n+='<div class="guideChannelName">'+i()(l.Name)+"</div>"),n+="</button>"}}catch(e){o.e(e)}finally{o.f()}var u=e.querySelector(".channelsContainer");u.innerHTML=n,p.default.lazyChildren(u)}(e,r,l);var b=t,w=new Date(b.getTime()+x);e.querySelector(".timeslotHeaders").innerHTML=function(e,t){var r="";for(e=new Date(e.getTime()),r+='<div class="timeslotHeadersInner">';e.getTime()<t;)r+='<div class="timeslotHeader">',r+=D(e),r+="</div>",e.setTime(e.getTime()+18e5);return r}(b,w),a={},function(e,t,r,a,i){var n,o={startIndex:0},l=[],s=O(r);try{for(s.s();!(n=s.n()).done;){var d=n.value;l.push(E(0,t,d,a,i,o))}}catch(e){s.e(e)}finally{s.f()}Q.innerHTML=l.join(""),I=Q.querySelectorAll("[is=emby-programcell]"),F(Q,I)}(0,t,r,n,o),u&&function(e,t,r,a,i){var n;if(t&&(n=e.querySelector('[data-id="'+t+'"]')),n)g.Z.focus(n);else{var o;r&&(o=e.querySelector('[data-channelid="'+r+'"]')),o||(o=Q);for(var l=(a-=i)/x*100,s=o.querySelector(".programCell");s;){var d=(s.style.left||"").replace("%","");d=d?parseFloat(d):0;var c=(s.style.width||"").replace("%","");if(c=c?parseFloat(c):0,d>=l||d+c>=l)break;s=s.nextSibling}s?g.Z.focus(s):g.Z.autoFocus(o,!0)}}(e,h,f,d,c),function(e,t,r){var a=(t-=r)/x;Q.scrollTop=0;var i=a*Q.scrollWidth;M(Q,i,!0)}(0,s,c)}(r,L,e.Items,t.Items,z,c,o,l,s,d),u.ZP.hide()}))}))}(r,c,o,l,s,d)}function B(e,t,r){var a='<button is="emby-button" class="'+(t?"emby-tab-button guide-date-tab-button emby-tab-button-active":"emby-tab-button guide-date-tab-button")+'" data-index="'+r+'" data-date="'+e.getTime()+'">',i=m.ZP.toLocaleDateString(e,{weekday:"short"});return i+="<br/>",(a+='<div class="emby-button-foreground">'+(i+=e.getDate())+"</div>")+"</button>"}function R(t){H(),N.Z.getApiClient(e.serverId).getLiveTvGuideInfo().then((function(e){!function(e,t){var r=new Date,a=r.getHours();r.setHours(a,0,0,0);var i=m.ZP.parseISO8601Date(t.StartDate,{toLocal:!0}),n=m.ZP.parseISO8601Date(t.EndDate,{toLocal:!0});i.setHours(a,0,0,0),n.setHours(0,0,0,0),i.getTime()>=n.getTime()&&n.setDate(i.getDate()+1),i=new Date(Math.max(r,i));var o="",l=0,s=new Date;h&&s.setTime(h.getTime()),s.setHours(a,0,0,0);var d=60*i.getHours()*60*1e3;for(d+=60*i.getMinutes()*1e3;i<=n;){var c=s.getDate()===i.getDate()&&s.getMonth()===i.getMonth()&&s.getFullYear()===i.getFullYear();o+=B(i,c,l),i.setDate(i.getDate()+1),i.setHours(0,0,0,0),l++}e.querySelector(".emby-tabs-slider").innerHTML=o,e.querySelector(".guideDateTabs").refresh();var u=new Date,g=u.getHours(),f=60*g*60*1e3,p=u.getMinutes();p>=30&&(f+=18e5),_(e,s,f,60*(60*g+p)*1e3,d,v.Z.tv)}(t,e)}))}function U(e){var t,r=e.querySelectorAll(".programCell"),a=[],i=G+1,n=O(r);try{for(n.s();!(t=n.n()).done;){var o=t.value,l=(o.style.left||"").replace("%","");l=l?parseFloat(l):0;var s=(o.style.width||"").replace("%","");l+(s=s?parseFloat(s):0)>=i&&a.push(o)}}catch(e){n.e(e)}finally{n.f()}return a}function V(e){var t,r,a,i=e.target,n=y.ZP.parentWithClass(i,"programCell");switch(e.detail.command){case"up":n?(t=Q,(a=y.ZP.parentWithClass(n,"channelPrograms").previousSibling)?(r=U(a)).length?t=a:r=null:t=null):t=null,S=e.detail.command,g.Z.moveUp(i,{container:t,focusableElements:r});break;case"down":n?(t=Q,(a=y.ZP.parentWithClass(n,"channelPrograms").nextSibling)?(r=U(a)).length?t=a:r=null:t=null):t=null,S=e.detail.command,g.Z.moveDown(i,{container:t,focusableElements:r});break;case"left":(t=n?y.ZP.parentWithClass(n,"channelPrograms"):null)&&!n.previousSibling&&(t=null),S=e.detail.command,g.Z.moveLeft(i,{container:t});break;case"right":t=n?y.ZP.parentWithClass(n,"channelPrograms"):null,S=e.detail.command,g.Z.moveRight(i,{container:t});break;default:return}e.preventDefault(),e.stopPropagation()}function $(e,t){if(v.Z.tv){var r=e.querySelector(".guideVerticalScroller");t?n.default.on(r,V):n.default.off(r,V)}}function K(t,r,a){var i,n=a.ProgramId,o=a.Id,l=O(e.element.querySelectorAll('.programCell[data-id="'+n+'"]'));try{for(l.s();!(i=l.n()).done;){var s=i.value;s.querySelector(".timerIcon")||s.querySelector(".guideProgramName").insertAdjacentHTML("beforeend",'<span class="timerIcon material-icons programIcon fiber_manual_record"></span>'),o&&s.setAttribute("data-timerid",o)}}catch(e){l.e(e)}finally{l.f()}}function X(t,r,a){var i,n=a.Id,o=O(e.element.querySelectorAll('.programCell[data-timerid="'+n+'"]'));try{for(o.s();!(i=o.n()).done;){var l=i.value,s=l.querySelector(".timerIcon");s&&s.parentNode.removeChild(s),l.removeAttribute("data-timerid")}}catch(e){o.e(e)}finally{o.f()}}function Y(t,r,a){var i,n=a.Id,o=O(e.element.querySelectorAll('.programCell[data-seriestimerid="'+n+'"]'));try{for(o.s();!(i=o.n()).done;){var l=i.value,s=l.querySelector(".seriesTimerIcon");s&&s.parentNode.removeChild(s),l.removeAttribute("data-seriestimerid")}}catch(e){o.e(e)}finally{o.f()}}var J=e.element;J.classList.add("tvguide"),J.innerHTML=l.ZP.translateHtml('<div class="tvGuideHeader"> <div class="guideHeaderDateSelection"> <div is="emby-tabs" class="guideDateTabs focuscontainer-x" data-selectionbar="false"> <div class="emby-tabs-slider guideDateTabsSlider"> </div> </div> </div> <div class="guide-headerTimeslots"> <div class="guide-channelTimeslotHeader"> <button is="paper-icon-button-light" type="button" class="btnGuideViewSettings" title="${ButtonMore}"> <span class="material-icons btnGuideViewSettingsIcon more_vert" aria-hidden="true"></span> </button> </div> <div class="timeslotHeaders scrollX guideScroller"></div> </div> </div> <div is="emby-scroller" class="guideVerticalScroller flex flex-grow programContainer guideScroller" data-skipfocuswhenvisible="true" data-horizontal="false"> <div class="scrollSlider flex flex-grow flex-direction-row" style="overflow:hidden;contain:layout style paint"> <div class="channelsContainer"> <div class="channelList"></div> </div> <div class="programGrid scrollX guideScroller flex-grow focuscontainer-right" style="white-space:nowrap"> </div> </div> </div> <div class="guideOptions hide"> <button is="paper-icon-button-light" type="button" class="btnPreviousPage" title="${Previous}"> <span class="material-icons arrow_back" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" type="button" class="btnNextPage" title="${Next}"> <span class="material-icons arrow_forward" aria-hidden="true"></span> </button> </div> ',"core");var Q=J.querySelector(".programGrid"),ee=J.querySelector(".timeslotHeaders");v.Z.tv?y.ZP.addEventListener(J.querySelector(".guideVerticalScroller"),"focus",(function(e){var r=e.target,i=y.ZP.parentWithClass(r,"programCell");if(i){var n=r.getAttribute("data-id"),o=a[n];o&&s.Events.trigger(t,"focus",[{item:o}])}if("left"===S)i&&d.default.toStart(Q,i,!0,!0);else if("right"===S)i&&d.default.toCenter(Q,i,!0,!0);else if("up"===S||"down"===S){var l=y.ZP.parentWithClass(r,"guideVerticalScroller");if(l){var c=i||y.ZP.parentWithTag(r,"BUTTON");l.toCenter(c,!0)}}}),{capture:!0,passive:!0}):v.Z.desktop&&ee.classList.add("timeslotHeaders-desktop"),(o.Z.iOS||o.Z.osx)&&(J.querySelector(".channelsContainer").classList.add("noRubberBanding"),Q.classList.add("noRubberBanding")),y.ZP.addEventListener(Q,"scroll",(function(){!function(e,t,r){if((new Date).getTime()-z>=1e3){W=(new Date).getTime();var a=t.scrollLeft;G=100*a/t.scrollWidth,M(r,a,!0)}F(t,I)}(0,this,ee)}),{passive:!0}),y.ZP.addEventListener(ee,"scroll",(function(){(new Date).getTime()-W>=1e3&&(z=(new Date).getTime(),M(Q,this.scrollLeft,!0))}),{passive:!0}),Q.addEventListener("click",j),J.querySelector(".btnNextPage").addEventListener("click",(function(){T+=P,R(J),k()})),J.querySelector(".btnPreviousPage").addEventListener("click",(function(){T=Math.max(T-P,0),R(J),k()})),J.querySelector(".btnGuideViewSettings").addEventListener("click",(function(){var e;e=t,r.e(6281).then(r.bind(r,96281)).then((function(t){t.default.show(e.categoryOptions).then((function(){e.refresh()}))})),k()})),J.querySelector(".guideDateTabs").addEventListener("tabchange",(function(e){var t=e.target.querySelectorAll(".guide-date-tab-button"),r=t[parseInt(e.detail.selectedTabIndex)];if(r){var a=null==e.detail.previousIndex?null:t[parseInt(e.detail.previousIndex)],i=new Date;i.setTime(parseInt(r.getAttribute("data-date")));var n,o=Q.scrollWidth;if(n=o?Q.scrollLeft/o*x:0,a){var l=new Date;l.setTime(parseInt(a.getAttribute("data-date"))),n+=60*l.getHours()*60*1e3,n+=60*l.getMinutes()*1e3}var s=60*i.getHours()*60*1e3;s+=60*i.getMinutes()*1e3,_(J,i,n,n,s,!1)}})),$(J,!0),b.ZP.on(J),s.Events.trigger(t,"load"),s.Events.on(c.default,"TimerCreated",K),s.Events.on(c.default,"TimerCancelled",X),s.Events.on(c.default,"SeriesTimerCancelled",Y),t.refresh()};function _(e,t,r){var a,i=this;i.renderTab=function(){a||(a=new G({element:r,serverId:ApiClient.serverId()}))},i.onShow=function(){a&&a.resume()},i.onHide=function(){a&&a.pause()}}},10182:function(){var e=Object.create(HTMLButtonElement.prototype);e.detachedCallback=function(){this.posLeft=null,this.posWidth=null,this.guideProgramName=null},document.registerElement("emby-programcell",{prototype:e,extends:"button"})},69523:function(e,t,r){"use strict";r(5769),r(63238),r(61418),r(17460),r(14078);var a=r(13800),i=r(83094),n=r(78695),o=r(12392),l=r(27515),s=r(47518),d=(r(67752),r(1892)),c=r.n(d),u=r(95760),m=r.n(u),g=r(38311),h=r.n(g),f=r(58192),p=r.n(f),v=r(38060),b=r.n(v),y=r(54865),w=r.n(y),I=r(88101),S={};S.styleTagTransform=w(),S.setAttributes=p(),S.insert=h().bind(null,"head"),S.domAPI=m(),S.insertStyleElement=b(),c()(I.Z,S),I.Z&&I.Z.locals&&I.Z.locals;var x=Object.create(HTMLDivElement.prototype);function T(e){var t=e.detail.command;"end"===t?(l.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(l.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(l.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}x.createdCallback=function(){this.classList.add("emby-scroller")},x.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},x.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},x.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},x.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},x.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},x.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},x.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},x.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},x.addScrollEventListener=function(e,t){this.scroller&&i.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},x.removeScrollEventListener=function(e,t){this.scroller&&i.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},x.attachedCallback=function(){this.getAttribute("data-navcommands")&&o.default.on(this,T);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var d,c=n.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),u={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:c||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:c||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!c,allowNativeScroll:!c,forceHideScrollbars:c,requireAnimation:c&&s.Z.edge};this.scroller=new a.Z(this,u),this.scroller.init(),this.scroller.reload(),n.Z.tv&&this.getAttribute("data-centerfocus")&&(this,d=this.scroller,i.ZP.addEventListener(this,"focus",(function(e){var t=l.Z.focusableParent(e.target);t&&d.toCenter(t)}),{capture:!0,passive:!0})),c&&function(e){r.e(2910).then(r.bind(r,22910)).then((function(){e.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')}))}(this)},x.pause=function(){var e=this.headroom;e&&e.pause()},x.resume=function(){var e=this.headroom;e&&e.resume()},x.detachedCallback=function(){this.getAttribute("data-navcommands")&&o.default.off(this,T);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:x,extends:"div"})},24297:function(e,t,r){"use strict";var a=r(54933),i=r.n(a),n=r(93476),o=r.n(n)()(i());o.push([e.id,".tvguide{-webkit-align-items:initial;align-items:normal}.tvGuideHeader,.tvguide{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}.tvGuideHeader{contain:layout style paint;-webkit-flex-shrink:0;flex-shrink:0;white-space:nowrap;width:100%}.layout-desktop .tvGuideHeader{margin-bottom:.5em}.guideHeaderDateSelection{font-size:86%;padding:.4em 0}.guide-headerTimeslots{display:-webkit-flex;display:flex}.tvProgramSectionHeader{margin:0}.tvProgram{display:block;position:relative;text-decoration:none;white-space:nowrap}.guideProgramIndicator{-webkit-align-items:center;align-items:center;border-radius:.25em;display:-webkit-inline-flex;display:inline-flex;font-size:82%;margin-left:1em;margin-right:.5em;padding:.2em .25em;text-align:center;text-transform:uppercase}.guide-channelTimeslotHeader,.guideProgramIndicator{-webkit-justify-content:center;justify-content:center}.guide-channelTimeslotHeader{border:0!important;border-right-color:transparent;-webkit-flex-shrink:0;flex-shrink:0}.timeslotHeaders{font-size:120%;font-weight:500;white-space:nowrap}.programContainer{-webkit-align-items:flex-start;align-items:flex-start;contain:strict;position:relative;white-space:nowrap}.programContainer.emby-scroller{margin:0}.channelPrograms{border-style:solid;border-width:1px 0;box-sizing:border-box;contain:strict;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:4.42em;white-space:nowrap}.channelPrograms,.timeslotHeadersInner{position:relative}.guideSpacer{-webkit-flex-shrink:0;flex-shrink:0;width:.3em}.channelPrograms,.timeslotHeadersInner{width:1800vw}@media (min-width:37.5em){.channelPrograms,.timeslotHeadersInner{width:1400vw}}@media (min-width:50em){.channelPrograms,.timeslotHeadersInner{width:1200vw}}@media (min-width:80em){.channelPrograms,.timeslotHeadersInner{width:810vw}}.timeslotHeader{-webkit-align-items:center;align-items:center;display:-webkit-inline-flex;display:inline-flex;text-indent:.25em;width:2.0833333333%}.guide-channelHeaderCell,.programCell{outline:none!important}.guide-channelHeaderCell,.guide-channelTimeslotHeader{-webkit-align-items:center;align-items:center;border-radius:.12em;color:inherit;contain:strict;cursor:pointer;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;font-family:inherit;font-size:inherit;margin:0 1px 0 0;outline:none!important;overflow:hidden;padding:0!important;text-align:left;text-decoration:none;text-overflow:ellipsis;vertical-align:middle;width:100%}.guide-channelHeaderCell{background:transparent;border-style:solid;border-width:1px 1px 1px 0;contain:strict;height:4.42em;position:relative;width:100%}.channelsContainer,.guide-channelTimeslotHeader{width:24vw}@media (min-width:31.25em){.channelsContainer,.guide-channelTimeslotHeader{width:16vw}}@media (min-width:37.5em){.channelsContainer,.guide-channelTimeslotHeader{width:16vw}}@media (min-width:50em){.channelsContainer,.guide-channelTimeslotHeader{width:14vw}}@media (min-width:80em){.channelsContainer,.guide-channelTimeslotHeader{width:12vw}}.btnGuideViewSettings{-webkit-flex-shrink:0;flex-shrink:0;margin:0}.btnGuideViewSettingsIcon{font-size:1.5em!important}.selectDateIcon{-webkit-flex-shrink:0;flex-shrink:0}@media (max-width:50em){.guideHdIcon,.liveTvProgram,.newTvProgram,.premiereTvProgram{display:none}}.channelPrograms+.channelPrograms,.guide-channelHeaderCell+.guide-channelHeaderCell{margin-top:-1px}.channelPrograms-tv,.guide-channelHeaderCell-tv{height:3em}.guide-channelTimeslotHeader,.timeslotHeader{background:transparent!important;height:2.8em}.programGrid{-webkit-flex-grow:1;flex-grow:1;padding-bottom:4px}.programCell{background:transparent;border-style:solid;border-width:0 0 0 1px;bottom:0;color:inherit;contain:strict;cursor:pointer;font-family:inherit;font-size:inherit;margin:0!important;outline:none!important;padding:0!important;position:absolute;text-align:left;text-decoration:none;top:0;vertical-align:middle;width:100%}.guideProgramName,.programCell{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-grow:1;flex-grow:1;overflow:hidden}.guideProgramName{contain:layout style paint;padding:0 .7em;position:relative;text-overflow:ellipsis}.guide-programNameCaret{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;font-size:200%;-webkit-justify-content:center;justify-content:center}.guideProgramNameText{font-weight:400;margin:0;overflow:hidden;text-overflow:ellipsis}.guideProgramSecondaryInfo{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;margin-top:.1em}.programIcon{color:#ddd;-webkit-flex-grow:0;flex-grow:0;-webkit-flex-shrink:0;flex-shrink:0;font-size:1.6em;height:1em;margin-left:.5em;width:1em}.guide-programTextIcon{border-radius:.25em;font-size:.9em;font-weight:700;height:auto;margin-right:.35em;padding:.16em .3em;width:auto}.guide-programTextIcon-tv{font-size:.74em}.guideChannelNumber{font-weight:400;margin:0;max-width:30%;padding-left:1em}.guideChannelName,.guideChannelNumber{overflow:hidden;text-overflow:ellipsis}.guideChannelName{margin-left:auto;margin-right:1em;max-width:70%}.guideChannelImage{background-position:100%;background-repeat:no-repeat;background-size:contain;bottom:15%;position:absolute;right:8%;top:15%;width:40%}@media (min-width:62.5em){.guideChannelName{max-width:40%}}@media (max-width:62.5em){.guideChannelNumber{display:none}.guideChannelImage{width:70%}}.channelsContainer{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;flex-shrink:0}.channelsContainer,.programGrid{contain:layout style paint}.seriesTimerIcon,.timerIcon{color:#c33!important}.seriesTimerIcon-inactive{color:inherit!important;opacity:.7}.guideOptions{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0}@media (max-width:50em),all and (max-height:37.5em){.tvGuideHeader{padding-left:0}}.guideRequiresUnlock{-webkit-flex-shrink:0;flex-shrink:0;margin:1em auto;padding:1em;text-align:center}.noRubberBanding{padding-bottom:7em}.guideDateTabsSlider{text-align:center}.guide-date-tab-button{font-weight:400;margin:0 .3em!important;padding:.3em .7em!important}.guide-date-tab-button.emby-tab-button-active{border-color:transparent!important}.guide-date-tab-button.show-focus:focus{border-radius:.15em!important;-webkit-transform:none!important;transform:none!important}",""]),t.Z=o},88101:function(e,t,r){"use strict";var a=r(54933),i=r.n(a),n=r(93476),o=r.n(n)()(i());o.push([e.id,".emby-scroller-container{position:relative}.emby-scroller{margin-left:max(env(safe-area-inset-left),3.3%);margin-right:max(env(safe-area-inset-right),3.3%)}.itemsContainer>.card>.cardBox{margin-left:0;margin-right:1.2em}.servers>.card>.cardBox{margin-left:.6em;margin-right:.6em}.layout-mobile .emby-scroller,.layout-tv .emby-scroller{margin-left:0;margin-right:0;padding-left:max(env(safe-area-inset-left),3.3%);padding-right:max(env(safe-area-inset-right),3.3%)}",""]),t.Z=o}}]);