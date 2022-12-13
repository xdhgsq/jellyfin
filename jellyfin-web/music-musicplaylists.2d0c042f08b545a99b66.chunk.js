"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9997],{45794:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}}),r(5769),r(63238),r(61418),r(17460),r(14078);var a=r(2587),n=r(61097),i=r(21361),o=r(56705);function l(e,t,l){function s(){var e=c(),r=y[e];return r||((r=y[e]={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"Playlist",Recursive:!0,Fields:"PrimaryImageAspectRatio,SortName,CanDelete",StartIndex:0},view:a.ZP.getSavedView(e)||"Poster"}).query.ParentId=t.topParentId,a.ZP.loadSavedQueryValues(e,r.query)),r}function u(){return s().query}function c(){return a.ZP.getSavedQueryKey("genres")}var d,y={};this.getCurrentViewStyle=function(){return s().view},this.preRender=function(){d=function(){o.ZP.show();var e=u();return ApiClient.getItems(ApiClient.getCurrentUserId(),e)}()},this.renderTab=function(){!function(e,t){var l=u();t.then((function(t){var s;s=n.default.getCardsHtml({items:t.Items,shape:"square",showTitle:!0,coverImage:!0,centerText:!0,overlayPlayButton:!0,allowBottomPadding:!0,cardLayout:!1});var u=e.querySelector("#items");u.innerHTML=s,i.default.lazyChildren(u),a.ZP.saveQueryValues(c(),l),o.ZP.hide(),Promise.resolve().then(r.bind(r,6610)).then((function(t){t.default.autoFocus(e)}))}))}(l,d)}}},2587:function(e,t,r){r(25901),r(92189),r(91047),r(72410),r(15610),r(5769),r(52077),r(72482),r(48410),r(61013),r(63238),r(61418),r(17460),r(14078),r(911);var a=r(28978),n=r(33942);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var o={getSavedQueryKey:function(e){return window.location.href.split("#")[0]+(e||"")},loadSavedQueryValues:function(e,t){var r=a.get(e);return r?(r=JSON.parse(r),Object.assign(t,r)):t},saveQueryValues:function(e,t){var r={};t.SortBy&&(r.SortBy=t.SortBy),t.SortOrder&&(r.SortOrder=t.SortOrder),a.set(e,JSON.stringify(r))},saveViewSetting:function(e,t){a.set(e+"-_view",t)},getSavedView:function(e){return a.get(e+"-_view")},showLayoutMenu:function(e,t,a){var i=!0;a||(i=!1,a=(a=e.getAttribute("data-layouts"))?a.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=a.map((function(e){return{name:n.ZP.translate(e),id:e,selected:t==e}}));Promise.resolve().then(r.bind(r,78407)).then((function(t){t.default.show({items:o,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),i||window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,r=e.limit,a=e.totalRecordCount,i="",o=Math.min(t+r,a),l=r<a;return i+='<div class="listPaging">',l&&(i+='<span style="vertical-align:middle;">',i+=n.ZP.translate("ListPaging",a?t+1:0,o,a),i+="</span>"),(l||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(i+='<div style="display:inline-block;">',l&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+r>=a?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),e.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+n.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),e.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+n.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),e.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+n.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(r.bind(r,90914)),r.e(2987).then(r.bind(r,82987))]).then((function(t){var r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(e){l=!0,n=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function a(){var t=this.value;if(this.checked){var r=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&r&&e.callback()}}function o(){var t=this.value;if(this.checked){var r=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&r&&e.callback()}}var l=r.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var s,u,c,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=n.ZP.translate("HeaderSortBy"),d+="</h2>",d+="<div>",s=0,u=e.items.length;s<u;s++){var y=e.items[s],v=y.id.replace(",","_");c=(e.query.SortBy||"").replace(",","_")==v?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+y.id+'" value="'+v+'" class="menuSortBy" '+c+" /><span>"+y.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=n.ZP.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(c="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(c="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",l.innerHTML=d,r.open(l);var b=l.querySelectorAll(".menuSortBy");for(s=0,u=b.length;s<u;s++)b[s].addEventListener("change",a);var h=l.querySelectorAll(".menuSortOrder");for(s=0,u=h.length;s<u;s++)h[s].addEventListener("change",o)}))}};window.LibraryBrowser=o,t.ZP=o}}]);