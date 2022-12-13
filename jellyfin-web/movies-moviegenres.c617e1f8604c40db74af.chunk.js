"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1575],{40664:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}}),r(52077),r(72482);var a=r(65009),n=r.n(a),i=r(78695),o=r(56705),s=r(2587),l=r(61097),u=r(37262),d=r(33942),c=r(80135);function m(e,t,r){var a=this;function m(){var e=b(),r=S[e];return r||((r=S[e]={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"Movie",Recursive:!0,EnableTotalRecordCount:!1},view:"Poster"}).query.ParentId=t.topParentId,s.ZP.loadSavedQueryValues(e,r.query)),r}function h(){return m().query}function b(){return s.ZP.getSavedQueryKey("moviegenres")}function y(){return!i.Z.desktop}function v(){return y()?"overflowBackdrop":"backdrop"}function p(){return y()?"overflowPortrait":"portrait"}var f,g=function(e){var n=e.target,i=n.getAttribute("data-id"),o=a.getCurrentViewStyle(),s="Thumb"==o||"ThumbCard"==o?5:9;y()&&(s=10);var u={SortBy:"Random",SortOrder:"Ascending",IncludeItemTypes:"Movie",Recursive:!0,Fields:"PrimaryImageAspectRatio,MediaSourceCount,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Thumb"==o||"ThumbCard"==o?"Primary,Backdrop,Thumb":"Primary",Limit:s,GenreIds:i,EnableTotalRecordCount:!1,ParentId:t.topParentId};ApiClient.getItems(ApiClient.getCurrentUserId(),u).then((function(e){"Thumb"==o?l.default.buildCards(e.Items,{itemsContainer:n,shape:v(),preferThumb:!0,showTitle:!0,scalable:!0,centerText:!0,overlayMoreButton:!0,allowBottomPadding:!1}):"ThumbCard"==o?l.default.buildCards(e.Items,{itemsContainer:n,shape:v(),preferThumb:!0,showTitle:!0,scalable:!0,centerText:!1,cardLayout:!0,showYear:!0}):"PosterCard"==o?l.default.buildCards(e.Items,{itemsContainer:n,shape:p(),showTitle:!0,scalable:!0,centerText:!1,cardLayout:!0,showYear:!0}):"Poster"==o&&l.default.buildCards(e.Items,{itemsContainer:n,shape:p(),scalable:!0,overlayMoreButton:!0,allowBottomPadding:!0,showTitle:!0,centerText:!0,showYear:!0}),e.Items.length>=u.Limit&&r.querySelector(".btnMoreFromGenre"+i+" .material-icons").classList.remove("hide")}))},S={};this.getViewStyles=function(){return"Poster,PosterCard,Thumb,ThumbCard".split(",")},this.getCurrentViewStyle=function(){return m().view},this.setCurrentViewStyle=function(e){m().view=e,s.ZP.saveViewSetting(b(),e),a.preRender(),a.renderTab()},this.enableViewSelection=!0,this.preRender=function(){f=function(){o.ZP.show();var e=h();return ApiClient.getGenres(ApiClient.getCurrentUserId(),e)}()},this.renderTab=function(){!function(e,r){var a=h();r.then((function(r){for(var l=e.querySelector("#items"),m="",h=r.Items,v=0,p=h.length;v<p;v++){var f=h[v];if(m+='<div class="verticalSection">',m+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',m+='<a is="emby-linkbutton" href="'+c.appRouter.getRouteUrl(f,{context:"movies",parentId:t.topParentId})+'" class="more button-flat button-flat-mini sectionTitleTextButton btnMoreFromGenre'+f.Id+'">',m+='<h2 class="sectionTitle sectionTitle-cards">',m+=n()(f.Name),m+="</h2>",m+='<span class="material-icons hide chevron_right" aria-hidden="true"></span>',m+="</a>",m+="</div>",y()){var S="scrollX hiddenScrollX";i.Z.tv&&(S+="smoothScrollX padded-top-focusscale padded-bottom-focusscale"),m+='<div is="emby-itemscontainer" class="itemsContainer '+S+' lazy padded-left padded-right" data-id="'+f.Id+'">'}else m+='<div is="emby-itemscontainer" class="itemsContainer vertical-wrap lazy padded-left padded-right" data-id="'+f.Id+'">';m+="</div>",m+="</div>"}r.Items.length||(m="",m+='<div class="noItemsMessage centerMessage">',m+="<h1>"+d.ZP.translate("MessageNothingHere")+"</h1>",m+="<p>"+d.ZP.translate("MessageNoGenresAvailable")+"</p>",m+="</div>"),l.innerHTML=m,u.ZP.lazyChildren(l,g),s.ZP.saveQueryValues(b(),a),o.ZP.hide()}))}(r,f)}}r(78066)},2587:function(e,t,r){r(25901),r(92189),r(91047),r(72410),r(15610),r(5769),r(52077),r(72482),r(48410),r(61013),r(63238),r(61418),r(17460),r(14078),r(911);var a=r(28978),n=r(33942);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var o={getSavedQueryKey:function(e){return window.location.href.split("#")[0]+(e||"")},loadSavedQueryValues:function(e,t){var r=a.get(e);return r?(r=JSON.parse(r),Object.assign(t,r)):t},saveQueryValues:function(e,t){var r={};t.SortBy&&(r.SortBy=t.SortBy),t.SortOrder&&(r.SortOrder=t.SortOrder),a.set(e,JSON.stringify(r))},saveViewSetting:function(e,t){a.set(e+"-_view",t)},getSavedView:function(e){return a.get(e+"-_view")},showLayoutMenu:function(e,t,a){var i=!0;a||(i=!1,a=(a=e.getAttribute("data-layouts"))?a.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=a.map((function(e){return{name:n.ZP.translate(e),id:e,selected:t==e}}));Promise.resolve().then(r.bind(r,78407)).then((function(t){t.default.show({items:o,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),i||window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,r=e.limit,a=e.totalRecordCount,i="",o=Math.min(t+r,a),s=r<a;return i+='<div class="listPaging">',s&&(i+='<span style="vertical-align:middle;">',i+=n.ZP.translate("ListPaging",a?t+1:0,o,a),i+="</span>"),(s||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(i+='<div style="display:inline-block;">',s&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+r>=a?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),e.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+n.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),e.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+n.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),e.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+n.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(r.bind(r,90914)),r.e(2987).then(r.bind(r,82987))]).then((function(t){var r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,i=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(e){s=!0,n=e}finally{try{o||null==r.return||r.return()}finally{if(s)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function a(){var t=this.value;if(this.checked){var r=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&r&&e.callback()}}function o(){var t=this.value;if(this.checked){var r=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&r&&e.callback()}}var s=r.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});s.classList.add("ui-body-a"),s.classList.add("background-theme-a"),s.classList.add("formDialog");var l,u,d,c="";for(c+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',c+='<h2 style="margin:0 0 .5em;">',c+=n.ZP.translate("HeaderSortBy"),c+="</h2>",c+="<div>",l=0,u=e.items.length;l<u;l++){var m=e.items[l],h=m.id.replace(",","_");d=(e.query.SortBy||"").replace(",","_")==h?" checked":"",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+m.id+'" value="'+h+'" class="menuSortBy" '+d+" /><span>"+m.name+"</span></label>"}c+="</div>",c+='<h2 style="margin: 1em 0 .5em;">',c+=n.ZP.translate("HeaderSortOrder"),c+="</h2>",c+="<div>",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(d="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Ascending")+"</span></label>",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(d="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Descending")+"</span></label>",c+="</div>",c+="</div>",s.innerHTML=c,r.open(s);var b=s.querySelectorAll(".menuSortBy");for(l=0,u=b.length;l<u;l++)b[l].addEventListener("change",a);var y=s.querySelectorAll(".menuSortOrder");for(l=0,u=y.length;l<u;l++)y[l].addEventListener("change",o)}))}};window.LibraryBrowser=o,t.ZP=o}}]);