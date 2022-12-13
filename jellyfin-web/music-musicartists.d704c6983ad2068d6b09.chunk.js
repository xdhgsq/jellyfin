"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2642],{13594:function(e,t,a){a.d(t,{w:function(){return B},Z:function(){return C}}),a(23938),a(61013),a(27471),a(99785);var i=a(27515),n=a(78695),r=a(83094),o=a(33942),l=a(1892),s=a.n(l),c=a(95760),u=a.n(c),d=a(38311),v=a.n(d),h=a(58192),m=a.n(h),p=a(38060),f=a.n(p),y=a(54865),b=a.n(y),g=a(63421),k={};function P(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}k.styleTagTransform=b(),k.setAttributes=m(),k.insert=v().bind(null,"head"),k.domAPI=u(),k.insertStyleElement=f(),s()(g.Z,k),g.Z&&g.Z.locals&&g.Z.locals,a(21865),a(85427);var S="alphaPickerButton-selected";function w(){var e=this.querySelector(".".concat(S));e?i.Z.focus(e):i.Z.autoFocus(this,!0)}function L(e){var t="alphaPickerButton";return n.Z.tv&&(t+=" alphaPickerButton-tv"),e&&(t+=" alphaPickerButton-vertical"),t}function x(e,t){return e.map((function(e){return function(e,t){return'<button data-value="'.concat(e,'" class="').concat(L(t),'">').concat(e,"</button>")}(e,t)}))}var B=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var a=this;this.options=t;var i,l,s,c,u=t.element,d=t.itemsContainer,v=t.itemClass;function h(){l=null,a.value(i)}function m(){if(c=null,document.activeElement===s){var e=s.getAttribute("data-value");a.value(e,!0)}}function p(e){var t=r.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var a=t.getAttribute("data-value");u.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:a}}))}}function f(e){var t=r.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var a=t.getAttribute("data-value");(this._currentValue||"").toUpperCase()===a.toUpperCase()?this.value(null,!0):this.value(a,!0)}}function y(e){c&&(clearTimeout(c),c=null);var t=r.ZP.parentWithClass(e.target,"alphaPickerButton");t&&(s=t,c=setTimeout(m,600))}function b(e){var t=r.ZP.parentWithClass(e.target,v);if(t){var a=t.getAttribute("data-prefix");a&&a.length&&(i=a[0],l&&clearTimeout(l),l=setTimeout(h,100))}}this.enabled=function(e){e?(d&&d.addEventListener("focus",b,!0),"keyboard"===t.mode&&u.addEventListener("click",p),"click"!==t.valueChangeEvent?u.addEventListener("focus",y,!0):u.addEventListener("click",f.bind(this))):(d&&d.removeEventListener("focus",b,!0),u.removeEventListener("click",p),u.removeEventListener("focus",y,!0),u.removeEventListener("click",f.bind(this)))},function(e,t){e.classList.add("alphaPicker"),n.Z.tv&&e.classList.add("alphaPicker-tv");var a=e.classList.contains("alphaPicker-vertical");a||e.classList.add("focuscontainer-x");var i,r="",l=L(a),s="alphaPickerRow";a&&(s+=" alphaPickerRow-vertical"),r+='<div class="'.concat(s,'">'),"keyboard"===t.mode?r+='<button data-value=" " is="paper-icon-button-light" class="'.concat(l,'" aria-label="').concat(o.ZP.translate("ButtonSpace"),'"><span class="material-icons alphaPickerButtonIcon space_bar" aria-hidden="true"></span></button>'):r+=x(i=["#"],a).join(""),r+=x(i=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],a).join(""),"keyboard"===t.mode?(r+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(l,'" aria-label="').concat(o.ZP.translate("ButtonBackspace"),'"><span class="material-icons alphaPickerButtonIcon backspace" aria-hidden="true"></span></button>'),r+="</div>",i=["0","1","2","3","4","5","6","7","8","9"],r+='<div class="'.concat(s,'">'),r+="<br/>",r+=x(i,a).join(""),r+="</div>"):r+="</div>",e.innerHTML=r,e.classList.add("focusable"),e.focus=w}(u,t),this.enabled(!0),this.visible(!0)}var t,a;return t=e,(a=[{key:"value",value:function(e,t){var a,i,n=this.options.element;if(void 0!==e)if(null!=e){if(e=e.toUpperCase(),this._currentValue=e,"keyboard"!==this.options.mode){i=n.querySelector(".".concat(S));try{a=n.querySelector(".alphaPickerButton[data-value='".concat(e,"']"))}catch(e){console.error("error in querySelector:",e)}a&&a!==i&&a.classList.add(S),i&&i!==a&&i.classList.remove(S)}}else this._currentValue=e,(i=n.querySelector(".".concat(S)))&&i.classList.remove(S);return t&&n.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:e}})),this._currentValue}},{key:"on",value:function(e,t){this.options.element.addEventListener(e,t)}},{key:"off",value:function(e,t){this.options.element.removeEventListener(e,t)}},{key:"updateControls",value:function(e){e.NameLessThan?this.value("#"):this.value(e.NameStartsWith),this.visible(-1!==e.SortBy.indexOf("SortName"))}},{key:"visible",value:function(e){this.options.element.style.visibility=e?"visible":"hidden"}},{key:"values",value:function(){for(var e=this.options.element.querySelectorAll(".alphaPickerButton"),t=[],a=0,i=e.length;a<i;a++)t.push(e[a].getAttribute("data-value"));return t}},{key:"focus",value:function(){var e=this.options.element;i.Z.autoFocus(e,!0)}},{key:"destroy",value:function(){var e=this.options.element;this.enabled(!1),e.classList.remove("focuscontainer-x"),this.options=null}}])&&P(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C=B},75341:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}}),a(5769),a(63238),a(61418),a(17460),a(14078),a(52077),a(72482);var i=a(56705),n=a(47005),r=a(2587),o=a(21361),l=a(13594),s=a(66056),c=a(61097),u=a(28978);function d(e,t,d){var v=this;function h(e){var a=p(e),i=b[a];if(!i){var n={SortBy:"SortName",SortOrder:"Ascending",Recursive:!0,Fields:"PrimaryImageAspectRatio,SortName,BasicSyncInfo",StartIndex:0,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb"};u.libraryPageSize()>0&&(n.Limit=u.libraryPageSize()),(i=b[a]={query:n,view:r.ZP.getSavedView(a)||"Poster"}).query.ParentId=t.topParentId,r.ZP.loadSavedQueryValues(a,i.query)}return i}function m(e){return h(e).query}var p=function(e){return e.savedQueryKey||(e.savedQueryKey=r.ZP.getSavedQueryKey(v.mode)),e.savedQueryKey},f=function(){var e=v.getCurrentViewStyle(),t=d.querySelector(".itemsContainer");"List"==e?(t.classList.add("vertical-list"),t.classList.remove("vertical-wrap")):(t.classList.remove("vertical-list"),t.classList.add("vertical-wrap")),t.innerHTML=""},y=function e(t){i.ZP.show(),g=!0;var n=m(t);("albumartists"==v.mode?ApiClient.getAlbumArtists(ApiClient.getCurrentUserId(),n):ApiClient.getArtists(ApiClient.getCurrentUserId(),n)).then((function(l){var h,m;function f(){g||(u.libraryPageSize()>0&&(n.StartIndex+=n.Limit),e(d))}function y(){g||(u.libraryPageSize()>0&&(n.StartIndex=Math.max(0,n.StartIndex-n.Limit)),e(d))}window.scrollTo(0,0),null===(h=v.alphaPicker)||void 0===h||h.updateControls(n);var b=r.ZP.getQueryPagingHtml({startIndex:n.StartIndex,limit:n.Limit,totalRecordCount:l.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),k=v.getCurrentViewStyle();m="List"==k?s.Z.getListViewHtml({items:l.Items,sortBy:n.SortBy}):"PosterCard"==k?c.default.getCardsHtml({items:l.Items,shape:"square",context:"music",showTitle:!0,coverImage:!0,cardLayout:!0}):c.default.getCardsHtml({items:l.Items,shape:"square",context:"music",showTitle:!0,coverImage:!0,lazy:!0,centerText:!0,overlayPlayButton:!0});for(var P=d.querySelectorAll(".paging"),S=0,w=P.length;S<w;S++)P[S].innerHTML=b;for(var L=0,x=(P=d.querySelectorAll(".btnNextPage")).length;L<x;L++)P[L].addEventListener("click",f);for(var B=0,C=(P=d.querySelectorAll(".btnPreviousPage")).length;B<C;B++)P[B].addEventListener("click",y);var Z=d.querySelector(".itemsContainer");Z.innerHTML=m,o.default.lazyChildren(Z),r.ZP.saveQueryValues(p(t),n),i.ZP.hide(),g=!1,Promise.resolve().then(a.bind(a,6610)).then((function(e){e.default.autoFocus(d)}))}))},b={},g=!1;this.showFilterMenu=function(){var e=this;a.e(8872).then(a.bind(a,78872)).then((function(t){var a=new(0,t.default)({query:m(d),mode:e.mode,serverId:ApiClient.serverId()});n.Events.on(a,"filterchange",(function(){m(d).StartIndex=0,y(d)})),a.show()}))},this.getCurrentViewStyle=function(){return h(d).view},function(e){var t=e.querySelector(".alphaPicker"),a=e.querySelector(".itemsContainer");t.addEventListener("alphavaluechanged",(function(t){var a=t.detail.value,i=m(e);"#"===a?(i.NameLessThan="A",delete i.NameStartsWith):(i.NameStartsWith=a,delete i.NameLessThan),i.StartIndex=0,y(e)})),v.alphaPicker=new l.w({element:t,valueChangeEvent:"click"}),e.querySelector(".alphaPicker").classList.add("alphabetPicker-right"),t.classList.add("alphaPicker-fixed-right"),a.classList.add("padded-right-withalphapicker"),e.querySelector(".btnFilter").addEventListener("click",(function(){v.showFilterMenu()}));var i=e.querySelector(".btnSelectView");i.addEventListener("click",(function(e){r.ZP.showLayoutMenu(e.target,v.getCurrentViewStyle(),"List,Poster,PosterCard".split(","))})),i.addEventListener("layoutchange",(function(t){var a=t.detail.viewStyle;h(e).view=a,r.ZP.saveViewSetting(p(e),a),m(e).StartIndex=0,f(),y(e)}))}(d),f(),this.renderTab=function(){var e;y(d),null===(e=v.alphaPicker)||void 0===e||e.updateControls(m(d))}}a(32420)},2587:function(e,t,a){a(25901),a(92189),a(91047),a(72410),a(15610),a(5769),a(52077),a(72482),a(48410),a(61013),a(63238),a(61418),a(17460),a(14078),a(911);var i=a(28978),n=a(33942);function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}var o={getSavedQueryKey:function(e){return window.location.href.split("#")[0]+(e||"")},loadSavedQueryValues:function(e,t){var a=i.get(e);return a?(a=JSON.parse(a),Object.assign(t,a)):t},saveQueryValues:function(e,t){var a={};t.SortBy&&(a.SortBy=t.SortBy),t.SortOrder&&(a.SortOrder=t.SortOrder),i.set(e,JSON.stringify(a))},saveViewSetting:function(e,t){i.set(e+"-_view",t)},getSavedView:function(e){return i.get(e+"-_view")},showLayoutMenu:function(e,t,i){var r=!0;i||(r=!1,i=(i=e.getAttribute("data-layouts"))?i.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=i.map((function(e){return{name:n.ZP.translate(e),id:e,selected:t==e}}));Promise.resolve().then(a.bind(a,78407)).then((function(t){t.default.show({items:o,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),r||window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,a=e.limit,i=e.totalRecordCount,r="",o=Math.min(t+a,i),l=a<i;return r+='<div class="listPaging">',l&&(r+='<span style="vertical-align:middle;">',r+=n.ZP.translate("ListPaging",i?t+1:0,o,i),r+="</span>"),(l||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(r+='<div style="display:inline-block;">',l&&(r+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',r+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+a>=i?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),e.addLayoutButton&&(r+='<button is="paper-icon-button-light" title="'+n.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),e.sortButton&&(r+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+n.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),e.filterButton&&(r+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+n.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),r+="</div>"),r+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(a.bind(a,90914)),a.e(2987).then(a.bind(a,82987))]).then((function(t){var a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var i,n,r=[],o=!0,l=!1;try{for(a=a.call(e);!(o=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(e){l=!0,n=e}finally{try{o||null==a.return||a.return()}finally{if(l)throw n}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function i(){var t=this.value;if(this.checked){var a=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&a&&e.callback()}}function o(){var t=this.value;if(this.checked){var a=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&a&&e.callback()}}var l=a.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var s,c,u,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=n.ZP.translate("HeaderSortBy"),d+="</h2>",d+="<div>",s=0,c=e.items.length;s<c;s++){var v=e.items[s],h=v.id.replace(",","_");u=(e.query.SortBy||"").replace(",","_")==h?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+v.id+'" value="'+h+'" class="menuSortBy" '+u+" /><span>"+v.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=n.ZP.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(u="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(u="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",l.innerHTML=d,a.open(l);var m=l.querySelectorAll(".menuSortBy");for(s=0,c=m.length;s<c;s++)m[s].addEventListener("change",i);var p=l.querySelectorAll(".menuSortOrder");for(s=0,c=p.length;s<c;s++)p[s].addEventListener("change",o)}))}};window.LibraryBrowser=o,t.ZP=o},63421:function(e,t,a){var i=a(54933),n=a.n(i),r=a(93476),o=a.n(r)()(n());o.push([e.id,".alphaPicker{-webkit-align-self:center;align-self:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;text-align:center}.alphaPicker-vertical{line-height:1}.alphaPicker-fixed{bottom:5.5em;bottom:max(env(safe-area-inset-bottom),5.5em);position:fixed}.alphaPickerRow{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:center;justify-content:center}.alphaPickerRow-vertical{-webkit-flex-direction:column;flex-direction:column}.alphaPickerButton{border:0!important;border-radius:.1em;cursor:pointer;-webkit-flex-grow:1;flex-grow:1;-webkit-flex-shrink:0;flex-shrink:0;font-family:inherit;font-size:inherit;font-weight:400;margin:0;min-width:0;min-width:auto;outline:none!important;padding:.1em .4em;vertical-align:middle;width:auto}@media (max-height:50em){.alphaPicker-fixed{bottom:5em;bottom:max(env(safe-area-inset-bottom),5em)}.alphaPickerButton-vertical{padding-bottom:1px!important;padding-top:1px!important}}@media (max-height:49em){.alphaPicker-vertical{font-size:94%}}@media (max-height:44em){.alphaPicker-vertical{font-size:90%}.alphaPickerButton-vertical{padding-bottom:0!important;padding-top:0!important}}@media (max-height:37em){.alphaPicker-vertical{font-size:82%}}@media (max-height:32em){.alphaPicker-vertical{font-size:74%}}.alphaPicker-vertical.alphaPicker-tv{font-size:86%}.alphaPickerButton-tv.alphaPickerButton-vertical{padding:0}.alphaPickerButton-vertical{display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;text-align:center;width:1.5em}.alphaPickerButtonIcon{font-size:100%!important}.alphaPicker-fixed.alphaPicker-tv{bottom:1%;bottom:max(env(safe-area-inset-bottom),1%)}.alphaPicker-fixed-right{right:.4em;right:max(env(safe-area-inset-right),.4em)}@media (min-width:62.5em){.alphaPicker-fixed-right{right:1em;right:max(env(safe-area-inset-right),1em)}}@media (max-height:31.25em){.alphaPicker-fixed{display:none!important}}",""]),t.Z=o}}]);