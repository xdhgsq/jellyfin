"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2970],{13594:function(e,t,a){a.d(t,{w:function(){return C},Z:function(){return B}}),a(23938),a(61013),a(27471),a(99785);var n=a(27515),r=a(78695),i=a(83094),o=a(33942),l=a(1892),s=a.n(l),c=a(95760),u=a.n(c),d=a(38311),m=a.n(d),h=a(58192),v=a.n(h),f=a(38060),p=a.n(f),y=a(54865),b=a.n(y),g=a(63421),P={};function S(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}P.styleTagTransform=b(),P.setAttributes=v(),P.insert=m().bind(null,"head"),P.domAPI=u(),P.insertStyleElement=p(),s()(g.Z,P),g.Z&&g.Z.locals&&g.Z.locals,a(21865),a(85427);var k="alphaPickerButton-selected";function w(){var e=this.querySelector(".".concat(k));e?n.Z.focus(e):n.Z.autoFocus(this,!0)}function L(e){var t="alphaPickerButton";return r.Z.tv&&(t+=" alphaPickerButton-tv"),e&&(t+=" alphaPickerButton-vertical"),t}function x(e,t){return e.map((function(e){return function(e,t){return'<button data-value="'.concat(e,'" class="').concat(L(t),'">').concat(e,"</button>")}(e,t)}))}var C=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var a=this;this.options=t;var n,l,s,c,u=t.element,d=t.itemsContainer,m=t.itemClass;function h(){l=null,a.value(n)}function v(){if(c=null,document.activeElement===s){var e=s.getAttribute("data-value");a.value(e,!0)}}function f(e){var t=i.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var a=t.getAttribute("data-value");u.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:a}}))}}function p(e){var t=i.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var a=t.getAttribute("data-value");(this._currentValue||"").toUpperCase()===a.toUpperCase()?this.value(null,!0):this.value(a,!0)}}function y(e){c&&(clearTimeout(c),c=null);var t=i.ZP.parentWithClass(e.target,"alphaPickerButton");t&&(s=t,c=setTimeout(v,600))}function b(e){var t=i.ZP.parentWithClass(e.target,m);if(t){var a=t.getAttribute("data-prefix");a&&a.length&&(n=a[0],l&&clearTimeout(l),l=setTimeout(h,100))}}this.enabled=function(e){e?(d&&d.addEventListener("focus",b,!0),"keyboard"===t.mode&&u.addEventListener("click",f),"click"!==t.valueChangeEvent?u.addEventListener("focus",y,!0):u.addEventListener("click",p.bind(this))):(d&&d.removeEventListener("focus",b,!0),u.removeEventListener("click",f),u.removeEventListener("focus",y,!0),u.removeEventListener("click",p.bind(this)))},function(e,t){e.classList.add("alphaPicker"),r.Z.tv&&e.classList.add("alphaPicker-tv");var a=e.classList.contains("alphaPicker-vertical");a||e.classList.add("focuscontainer-x");var n,i="",l=L(a),s="alphaPickerRow";a&&(s+=" alphaPickerRow-vertical"),i+='<div class="'.concat(s,'">'),"keyboard"===t.mode?i+='<button data-value=" " is="paper-icon-button-light" class="'.concat(l,'" aria-label="').concat(o.ZP.translate("ButtonSpace"),'"><span class="material-icons alphaPickerButtonIcon space_bar" aria-hidden="true"></span></button>'):i+=x(n=["#"],a).join(""),i+=x(n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],a).join(""),"keyboard"===t.mode?(i+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(l,'" aria-label="').concat(o.ZP.translate("ButtonBackspace"),'"><span class="material-icons alphaPickerButtonIcon backspace" aria-hidden="true"></span></button>'),i+="</div>",n=["0","1","2","3","4","5","6","7","8","9"],i+='<div class="'.concat(s,'">'),i+="<br/>",i+=x(n,a).join(""),i+="</div>"):i+="</div>",e.innerHTML=i,e.classList.add("focusable"),e.focus=w}(u,t),this.enabled(!0),this.visible(!0)}var t,a;return t=e,(a=[{key:"value",value:function(e,t){var a,n,r=this.options.element;if(void 0!==e)if(null!=e){if(e=e.toUpperCase(),this._currentValue=e,"keyboard"!==this.options.mode){n=r.querySelector(".".concat(k));try{a=r.querySelector(".alphaPickerButton[data-value='".concat(e,"']"))}catch(e){console.error("error in querySelector:",e)}a&&a!==n&&a.classList.add(k),n&&n!==a&&n.classList.remove(k)}}else this._currentValue=e,(n=r.querySelector(".".concat(k)))&&n.classList.remove(k);return t&&r.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:e}})),this._currentValue}},{key:"on",value:function(e,t){this.options.element.addEventListener(e,t)}},{key:"off",value:function(e,t){this.options.element.removeEventListener(e,t)}},{key:"updateControls",value:function(e){e.NameLessThan?this.value("#"):this.value(e.NameStartsWith),this.visible(-1!==e.SortBy.indexOf("SortName"))}},{key:"visible",value:function(e){this.options.element.style.visibility=e?"visible":"hidden"}},{key:"values",value:function(){for(var e=this.options.element.querySelectorAll(".alphaPickerButton"),t=[],a=0,n=e.length;a<n;a++)t.push(e[a].getAttribute("data-value"));return t}},{key:"focus",value:function(){var e=this.options.element;n.Z.autoFocus(e,!0)}},{key:"destroy",value:function(){var e=this.options.element;this.enabled(!1),e.classList.remove("focuscontainer-x"),this.options=null}}])&&S(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}(),B=C},36595:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}}),a(5769),a(63238),a(61418),a(17460),a(14078),a(52077),a(72482),a(72410),a(15610),a(25901),a(92189),a(91047);var n=a(53218),r=a(56705),i=a(47005),o=a(2587),l=a(21361),s=a(13594),c=a(66056),u=a(61097),d=a(28978),m=a(33942);function h(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?v(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(l)throw i}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function f(e,t,v){var f=this;function p(){ApiClient.getItem(ApiClient.getCurrentUserId(),t.topParentId).then((function(e){n.O.play({items:[e]})}))}function y(){ApiClient.getItem(ApiClient.getCurrentUserId(),t.topParentId).then((function(e){g(),n.O.shuffle(e)}))}function b(){var e=P();return k||(k={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"MusicAlbum",Recursive:!0,Fields:"PrimaryImageAspectRatio,SortName,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",StartIndex:0},view:o.ZP.getSavedView(e)||"Poster"},d.libraryPageSize()>0&&(k.query.Limit=d.libraryPageSize()),k.query.ParentId=t.topParentId,o.ZP.loadSavedQueryValues(e,k.query)),k}function g(){return b().query}function P(){return S||(S=o.ZP.getSavedQueryKey("musicalbums")),S}var S,k,w=function(){var e=f.getCurrentViewStyle(),t=v.querySelector(".itemsContainer");"List"==e?(t.classList.add("vertical-list"),t.classList.remove("vertical-wrap")):(t.classList.remove("vertical-list"),t.classList.add("vertical-wrap")),t.innerHTML=""},L=function e(){r.ZP.show(),x=!0;var t=g();ApiClient.getItems(ApiClient.getCurrentUserId(),t).then((function(n){var i,s;function m(){x||(d.libraryPageSize()>0&&(t.StartIndex+=t.Limit),e())}function p(){x||(d.libraryPageSize()>0&&(t.StartIndex=Math.max(0,t.StartIndex-t.Limit)),e())}window.scrollTo(0,0),null===(i=f.alphaPicker)||void 0===i||i.updateControls(t);var y=o.ZP.getQueryPagingHtml({startIndex:t.StartIndex,limit:t.Limit,totalRecordCount:n.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),b=f.getCurrentViewStyle();s="List"==b?c.Z.getListViewHtml({items:n.Items,context:"music",sortBy:t.SortBy,addToListButton:!0}):"PosterCard"==b?u.default.getCardsHtml({items:n.Items,shape:"square",context:"music",showTitle:!0,coverImage:!0,showParentTitle:!0,lazy:!0,cardLayout:!0}):u.default.getCardsHtml({items:n.Items,shape:"square",context:"music",showTitle:!0,showParentTitle:!0,lazy:!0,centerText:!0,overlayPlayButton:!0});var g,S=v.querySelectorAll(".paging"),k=h(S);try{for(k.s();!(g=k.n()).done;)g.value.innerHTML=y}catch(e){k.e(e)}finally{k.f()}var w,L=h(S=v.querySelectorAll(".btnNextPage"));try{for(L.s();!(w=L.n()).done;)w.value.addEventListener("click",m)}catch(e){L.e(e)}finally{L.f()}var C,B=h(S=v.querySelectorAll(".btnPreviousPage"));try{for(B.s();!(C=B.n()).done;)C.value.addEventListener("click",p)}catch(e){B.e(e)}finally{B.f()}var A=v.querySelector(".itemsContainer");A.innerHTML=s,l.default.lazyChildren(A),o.ZP.saveQueryValues(P(),t),r.ZP.hide(),x=!1,Promise.resolve().then(a.bind(a,6610)).then((function(e){e.default.autoFocus(v)}))}))},x=!1;this.showFilterMenu=function(){a.e(8872).then(a.bind(a,78872)).then((function(e){var t=new(0,e.default)({query:g(),mode:"albums",serverId:ApiClient.serverId()});i.Events.on(t,"filterchange",(function(){g().StartIndex=0,L()})),t.show()}))},this.getCurrentViewStyle=function(){return b().view},function(e){var t=e.querySelector(".alphaPicker"),a=e.querySelector(".itemsContainer");t.addEventListener("alphavaluechanged",(function(e){var t=e.detail.value,a=g();"#"===t?(a.NameLessThan="A",delete a.NameStartsWith):(a.NameStartsWith=t,delete a.NameLessThan),a.StartIndex=0,L()})),f.alphaPicker=new s.Z({element:t,valueChangeEvent:"click"}),e.querySelector(".alphaPicker").classList.add("alphabetPicker-right"),t.classList.add("alphaPicker-fixed-right"),a.classList.add("padded-right-withalphapicker"),e.querySelector(".btnFilter").addEventListener("click",(function(){f.showFilterMenu()})),e.querySelector(".btnSort").addEventListener("click",(function(e){o.ZP.showSortMenu({items:[{name:m.ZP.translate("Name"),id:"SortName"},{name:m.ZP.translate("AlbumArtist"),id:"AlbumArtist,SortName"},{name:m.ZP.translate("OptionCommunityRating"),id:"CommunityRating,SortName"},{name:m.ZP.translate("OptionCriticRating"),id:"CriticRating,SortName"},{name:m.ZP.translate("OptionDateAdded"),id:"DateCreated,SortName"},{name:m.ZP.translate("OptionReleaseDate"),id:"ProductionYear,PremiereDate,SortName"},{name:m.ZP.translate("OptionRandom"),id:"Random,SortName"}],callback:function(){g().StartIndex=0,L()},query:g(),button:e.target})}));var n=e.querySelector(".btnSelectView");n.addEventListener("click",(function(e){o.ZP.showLayoutMenu(e.target,f.getCurrentViewStyle(),"List,Poster,PosterCard".split(","))})),n.addEventListener("layoutchange",(function(e){var t=e.detail.viewStyle;b().view=t,o.ZP.saveViewSetting(P(),t),g().StartIndex=0,w(),L()})),e.querySelector(".btnPlayAll").addEventListener("click",p),e.querySelector(".btnShuffle").addEventListener("click",y)}(v),w(),this.renderTab=function(){var e;L(),null===(e=f.alphaPicker)||void 0===e||e.updateControls(g())}}a(32420)},2587:function(e,t,a){a(25901),a(92189),a(91047),a(72410),a(15610),a(5769),a(52077),a(72482),a(48410),a(61013),a(63238),a(61418),a(17460),a(14078),a(911);var n=a(28978),r=a(33942);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var o={getSavedQueryKey:function(e){return window.location.href.split("#")[0]+(e||"")},loadSavedQueryValues:function(e,t){var a=n.get(e);return a?(a=JSON.parse(a),Object.assign(t,a)):t},saveQueryValues:function(e,t){var a={};t.SortBy&&(a.SortBy=t.SortBy),t.SortOrder&&(a.SortOrder=t.SortOrder),n.set(e,JSON.stringify(a))},saveViewSetting:function(e,t){n.set(e+"-_view",t)},getSavedView:function(e){return n.get(e+"-_view")},showLayoutMenu:function(e,t,n){var i=!0;n||(i=!1,n=(n=e.getAttribute("data-layouts"))?n.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=n.map((function(e){return{name:r.ZP.translate(e),id:e,selected:t==e}}));Promise.resolve().then(a.bind(a,78407)).then((function(t){t.default.show({items:o,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),i||window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,a=e.limit,n=e.totalRecordCount,i="",o=Math.min(t+a,n),l=a<n;return i+='<div class="listPaging">',l&&(i+='<span style="vertical-align:middle;">',i+=r.ZP.translate("ListPaging",n?t+1:0,o,n),i+="</span>"),(l||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(i+='<div style="display:inline-block;">',l&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+a>=n?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),e.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+r.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),e.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+r.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),e.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+r.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(a.bind(a,90914)),a.e(2987).then(a.bind(a,82987))]).then((function(t){var a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,i=[],o=!0,l=!1;try{for(a=a.call(e);!(o=(n=a.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(e){l=!0,r=e}finally{try{o||null==a.return||a.return()}finally{if(l)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function n(){var t=this.value;if(this.checked){var a=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&a&&e.callback()}}function o(){var t=this.value;if(this.checked){var a=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&a&&e.callback()}}var l=a.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var s,c,u,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=r.ZP.translate("HeaderSortBy"),d+="</h2>",d+="<div>",s=0,c=e.items.length;s<c;s++){var m=e.items[s],h=m.id.replace(",","_");u=(e.query.SortBy||"").replace(",","_")==h?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+m.id+'" value="'+h+'" class="menuSortBy" '+u+" /><span>"+m.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=r.ZP.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(u="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+r.ZP.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(u="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+r.ZP.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",l.innerHTML=d,a.open(l);var v=l.querySelectorAll(".menuSortBy");for(s=0,c=v.length;s<c;s++)v[s].addEventListener("change",n);var f=l.querySelectorAll(".menuSortOrder");for(s=0,c=f.length;s<c;s++)f[s].addEventListener("change",o)}))}};window.LibraryBrowser=o,t.ZP=o},63421:function(e,t,a){var n=a(54933),r=a.n(n),i=a(93476),o=a.n(i)()(r());o.push([e.id,".alphaPicker{-webkit-align-self:center;align-self:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;text-align:center}.alphaPicker-vertical{line-height:1}.alphaPicker-fixed{bottom:5.5em;bottom:max(env(safe-area-inset-bottom),5.5em);position:fixed}.alphaPickerRow{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:center;justify-content:center}.alphaPickerRow-vertical{-webkit-flex-direction:column;flex-direction:column}.alphaPickerButton{border:0!important;border-radius:.1em;cursor:pointer;-webkit-flex-grow:1;flex-grow:1;-webkit-flex-shrink:0;flex-shrink:0;font-family:inherit;font-size:inherit;font-weight:400;margin:0;min-width:0;min-width:auto;outline:none!important;padding:.1em .4em;vertical-align:middle;width:auto}@media (max-height:50em){.alphaPicker-fixed{bottom:5em;bottom:max(env(safe-area-inset-bottom),5em)}.alphaPickerButton-vertical{padding-bottom:1px!important;padding-top:1px!important}}@media (max-height:49em){.alphaPicker-vertical{font-size:94%}}@media (max-height:44em){.alphaPicker-vertical{font-size:90%}.alphaPickerButton-vertical{padding-bottom:0!important;padding-top:0!important}}@media (max-height:37em){.alphaPicker-vertical{font-size:82%}}@media (max-height:32em){.alphaPicker-vertical{font-size:74%}}.alphaPicker-vertical.alphaPicker-tv{font-size:86%}.alphaPickerButton-tv.alphaPickerButton-vertical{padding:0}.alphaPickerButton-vertical{display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;text-align:center;width:1.5em}.alphaPickerButtonIcon{font-size:100%!important}.alphaPicker-fixed.alphaPicker-tv{bottom:1%;bottom:max(env(safe-area-inset-bottom),1%)}.alphaPicker-fixed-right{right:.4em;right:max(env(safe-area-inset-right),.4em)}@media (min-width:62.5em){.alphaPicker-fixed-right{right:1em;right:max(env(safe-area-inset-right),1em)}}@media (max-height:31.25em){.alphaPicker-fixed{display:none!important}}",""]),t.Z=o}}]);