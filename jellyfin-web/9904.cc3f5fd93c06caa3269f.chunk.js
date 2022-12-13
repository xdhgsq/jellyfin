"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9904],{72791:function(e,t,a){a.d(t,{ZP:function(){return _}}),a(5769),a(86248),a(23938),a(61013),a(63238),a(55849),a(95623),a(61514),a(61418),a(17460),a(14078),a(98010),a(32081),a(72410),a(69217),a(27471);var i,l,r=a(65009),n=a.n(r),c=a(33942),o=a(83094),s=(a(45368),a(20716),a(83225),'<h2>${HeaderLibrarySettings}</h2> <div class="selectContainer fldMetadataLanguage hide"> <select is="emby-select" id="selectLanguage" label="${LabelMetadataDownloadLanguage}"></select> </div> <div class="selectContainer fldMetadataCountry hide"> <select is="emby-select" id="selectCountry" label="${LabelCountry}"></select> </div> <div class="checkboxContainer checkboxContainer-withDescription chkEnablePhotosContainer"> <label> <input type="checkbox" is="emby-checkbox" class="chkEnablePhotos" checked="checked"/> <span>${EnablePhotos}</span> </label> <div class="fieldDescription checkboxFieldDescription">${EnablePhotosHelp}</div> </div> <div class="inputContainer fldSeasonZeroDisplayName hide advanced"> <input is="emby-input" type="text" id="txtSeasonZeroName" label="${LabelSpecialSeasonsDisplayName}" value="Specials" required/> </div> <div class="checkboxContainer checkboxContainer-withDescription chkEnableEmbeddedTitlesContainer hide advanced"> <label> <input is="emby-checkbox" type="checkbox" id="chkEnableEmbeddedTitles"/> <span>${PreferEmbeddedTitlesOverFileNames}</span> </label> <div class="fieldDescription checkboxFieldDescription">${PreferEmbeddedTitlesOverFileNamesHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription chkEnableEmbeddedEpisodeInfosContainer hide advanced"> <label> <input is="emby-checkbox" type="checkbox" id="chkEnableEmbeddedEpisodeInfos"/> <span>${PreferEmbeddedEpisodeInfosOverFileNames}</span> </label> <div class="fieldDescription checkboxFieldDescription">${PreferEmbeddedEpisodeInfosOverFileNamesHelp}</div> </div> <div class="selectContainer fldAllowEmbeddedSubtitlesContainer hide advanced" style="margin:2em 0"> <select is="emby-select" id="selectAllowEmbeddedSubtitles" label="${AllowEmbeddedSubtitles}"> <option value="AllowAll">${AllowEmbeddedSubtitlesAllowAllOption}</option> <option value="AllowText">${AllowEmbeddedSubtitlesAllowTextOption}</option> <option value="AllowImage">${AllowEmbeddedSubtitlesAllowImageOption}</option> <option value="AllowNone">${AllowEmbeddedSubtitlesAllowNoneOption}</option> </select> <div class="fieldDescription">${AllowEmbeddedSubtitlesHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription advanced"> <label> <input type="checkbox" is="emby-checkbox" class="chkEnableRealtimeMonitor" checked="checked"/> <span>${LabelEnableRealtimeMonitor}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelEnableRealtimeMonitorHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription chkAutomaticallyAddToCollectionContainer hide advanced"> <label> <input is="emby-checkbox" type="checkbox" id="chkAutomaticallyAddToCollection"/> <span>${LabelAutomaticallyAddToCollection}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelAutomaticallyAddToCollectionHelp}</div> </div> <div class="metadataReaders hide advanced" style="margin-bottom:2em"> </div> <div class="metadataFetchers hide" style="margin-bottom:2em"> </div> <div class="selectContainer fldAutoRefreshInterval hide advanced" style="margin:2em 0"> <select is="emby-select" id="selectAutoRefreshInterval" label="${LabelAutomaticallyRefreshInternetMetadataEvery}"></select> <div class="fieldDescription">${MessageEnablingOptionLongerScans}</div> </div> <div class="metadataSavers hide" style="margin-bottom:2em"> </div> <div class="imageFetchers hide advanced" style="margin-bottom:2em"> </div> <div class="checkboxContainer checkboxContainer-withDescription chkSaveLocalContainer hide"> <label> <input is="emby-checkbox" type="checkbox" id="chkSaveLocal"/> <span>${LabelSaveLocalMetadata}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelSaveLocalMetadataHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription chkAutomaticallyGroupSeriesContainer hide advanced"> <label> <input type="checkbox" is="emby-checkbox" class="chkAutomaticallyGroupSeries"/> <span>${OptionAutomaticallyGroupSeries}</span> </label> <div class="fieldDescription checkboxFieldDescription">${OptionAutomaticallyGroupSeriesHelp}</div> </div> <div class="chapterSettingsSection hide"> <h2>${HeaderChapterImages}</h2> <div class="checkboxContainer checkboxContainer-withDescription fldExtractChapterImages"> <label> <input type="checkbox" is="emby-checkbox" class="chkExtractChapterImages"/> <span>${OptionExtractChapterImage}</span> </label> <div class="fieldDescription checkboxFieldDescription">${ExtractChapterImagesHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription fldExtractChaptersDuringLibraryScan advanced"> <label> <input type="checkbox" is="emby-checkbox" class="chkExtractChaptersDuringLibraryScan"/> <span>${LabelExtractChaptersDuringLibraryScan}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelExtractChaptersDuringLibraryScanHelp}</div> </div> </div> <div class="subtitleDownloadSettings hide"> <h2>${HeaderSubtitleDownloads}</h2> <div> <h3 class="checkboxListLabel">${LabelDownloadLanguages}</h3> <div class="subtitleDownloadLanguages paperList checkboxList" style="max-height:10.5em;overflow-y:auto;padding:.5em 1em"> </div> </div> <br/> <div class="subtitleFetchers advanced" style="margin-bottom:2em"> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input is="emby-checkbox" type="checkbox" id="chkRequirePerfectMatch" checked="checked"/> <span>${OptionRequirePerfectSubtitleMatch}</span> </label> <div class="fieldDescription checkboxFieldDescription">${OptionRequirePerfectSubtitleMatchHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription advanced"> <label> <input is="emby-checkbox" type="checkbox" id="chkSkipIfAudioTrackPresent"/> <span>${LabelSkipIfAudioTrackPresent}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelSkipIfAudioTrackPresentHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription advanced"> <label> <input is="emby-checkbox" type="checkbox" id="chkSkipIfGraphicalSubsPresent"/> <span>${LabelSkipIfGraphicalSubsPresent}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelSkipIfGraphicalSubsPresentHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription advanced"> <label> <input type="checkbox" is="emby-checkbox" id="chkSaveSubtitlesLocally" checked="checked"/> <span>${SaveSubtitlesIntoMediaFolders}</span> </label> <div class="fieldDescription checkboxFieldDescription">${SaveSubtitlesIntoMediaFoldersHelp}</div> </div> </div> ');function d(e,t,a,i,l,r,n){try{var c=e[r](n),o=c.value}catch(e){return void a(e)}c.done?t(o):Promise.resolve(o).then(i,l)}function u(e){return function(){var t=this,a=arguments;return new Promise((function(i,l){var r=e.apply(t,a);function n(e){d(r,i,l,n,c,"next",e)}function c(e){d(r,i,l,n,c,"throw",e)}n(void 0)}))}}function b(e){return ApiClient.getCultures().then((function(t){!function(e,t){var a="";a+="<option value=''></option>";for(var i=0;i<t.length;i++){var l=t[i];a+="<option value='".concat(l.TwoLetterISOLanguageName,"'>").concat(l.DisplayName,"</option>")}e.innerHTML=a}(e.querySelector("#selectLanguage"),t),function(e,t){for(var a="",i=0;i<t.length;i++){var l=t[i];a+='<label><input type="checkbox" is="emby-checkbox" class="chkSubtitleLanguage" data-lang="'.concat(l.ThreeLetterISOLanguageName.toLowerCase(),'" /><span>').concat(l.DisplayName,"</span></label>")}e.innerHTML=a}(e.querySelector(".subtitleDownloadLanguages"),t)}))}function h(e){return ApiClient.getCountries().then((function(t){var a="";a+="<option value=''></option>";for(var i=0;i<t.length;i++){var l=t[i];a+="<option value='".concat(l.TwoLetterISORegionName,"'>").concat(l.DisplayName,"</option>")}e.innerHTML=a}))}function p(e){var t="";t+="<option value='0'>".concat(c.ZP.translate("Never"),"</option>"),t+=[30,60,90].map((function(e){return"<option value='".concat(e,"'>").concat(c.ZP.translate("EveryNDays",e),"</option>")})).join(""),e.innerHTML=t}function m(e,t){var a="",i=e.querySelector(".metadataReaders");if(t.length<1)return i.innerHTML="",i.classList.add("hide"),!1;a+='<h3 class="checkboxListLabel">'.concat(c.ZP.translate("LabelMetadataReaders"),"</h3>"),a+='<div class="checkboxList paperList checkboxList-paperList">';for(var l=0;l<t.length;l++){var r=t[l];a+='<div class="listItem localReaderOption sortableOption" data-pluginname="'.concat(n()(r.Name),'">'),a+='<span class="listItemIcon material-icons live_tv" aria-hidden="true"></span>',a+='<div class="listItemBody">',a+='<h3 class="listItemBodyText">',a+=n()(r.Name),a+="</h3>",a+="</div>",l>0?a+='<button type="button" is="paper-icon-button-light" title="'.concat(c.ZP.translate("Up"),'" class="btnSortableMoveUp btnSortable" data-pluginindex="').concat(l,'"><span class="material-icons keyboard_arrow_up" aria-hidden="true"></span></button>'):t.length>1&&(a+='<button type="button" is="paper-icon-button-light" title="'.concat(c.ZP.translate("Down"),'" class="btnSortableMoveDown btnSortable" data-pluginindex="').concat(l,'"><span class="material-icons keyboard_arrow_down" aria-hidden="true"></span></button>')),a+="</div>"}return a+="</div>",a+='<div class="fieldDescription">'.concat(c.ZP.translate("LabelMetadataReadersHelp"),"</div>"),t.length<2?i.classList.add("hide"):i.classList.remove("hide"),i.innerHTML=a,!0}function v(e,t){var a="",i=e.MetadataFetchers;return(i=q(i,t.MetadataFetcherOrder||[])).length?(a+='<div class="metadataFetcher" data-type="'+e.Type+'">',a+='<h3 class="checkboxListLabel">'+c.ZP.translate("LabelTypeMetadataDownloaders",c.ZP.translate("TypeOptionPlural"+e.Type))+"</h3>",a+='<div class="checkboxList paperList checkboxList-paperList">',i.forEach((function(e,l){a+='<div class="listItem metadataFetcherItem sortableOption" data-pluginname="'+n()(e.Name)+'">';var r=(t.MetadataFetchers?t.MetadataFetchers.includes(e.Name):e.DefaultEnabled)?' checked="checked"':"";a+='<label class="listItemCheckboxContainer"><input type="checkbox" is="emby-checkbox" class="chkMetadataFetcher" data-pluginname="'+n()(e.Name)+'" '+r+"><span></span></label>",a+='<div class="listItemBody">',a+='<h3 class="listItemBodyText">',a+=n()(e.Name),a+="</h3>",a+="</div>",l>0?a+='<button type="button" is="paper-icon-button-light" title="'+c.ZP.translate("Up")+'" class="btnSortableMoveUp btnSortable" data-pluginindex="'+l+'"><span class="material-icons keyboard_arrow_up" aria-hidden="true"></span></button>':i.length>1&&(a+='<button type="button" is="paper-icon-button-light" title="'+c.ZP.translate("Down")+'" class="btnSortableMoveDown btnSortable" data-pluginindex="'+l+'"><span class="material-icons keyboard_arrow_down" aria-hidden="true"></span></button>'),a+="</div>"})),a+="</div>",a+='<div class="fieldDescription">'+c.ZP.translate("LabelMetadataDownloadersHelp")+"</div>",a+="</div>"):a}function y(e,t){for(var a=e.TypeOptions||[],i=0;i<a.length;i++){var l=a[i];if(l.Type===t)return l}return null}function k(e,t,a){for(var i="",l=e.querySelector(".metadataFetchers"),r=0;r<t.TypeOptions.length;r++){var n=t.TypeOptions[r];i+=v(n,y(a,n.Type)||{})}return l.innerHTML=i,i?(l.classList.remove("hide"),e.querySelector(".fldAutoRefreshInterval").classList.remove("hide"),e.querySelector(".fldMetadataLanguage").classList.remove("hide"),e.querySelector(".fldMetadataCountry").classList.remove("hide")):(l.classList.add("hide"),e.querySelector(".fldAutoRefreshInterval").classList.add("hide"),e.querySelector(".fldMetadataLanguage").classList.add("hide"),e.querySelector(".fldMetadataCountry").classList.add("hide")),!0}function S(e,t,a){var i="",l=e.querySelector(".subtitleFetchers"),r=t.SubtitleFetchers;if(!(r=q(r,a.SubtitleFetcherOrder||[])).length)return i;i+='<h3 class="checkboxListLabel">'.concat(c.ZP.translate("LabelSubtitleDownloaders"),"</h3>"),i+='<div class="checkboxList paperList checkboxList-paperList">';for(var o=0;o<r.length;o++){var s=r[o];i+='<div class="listItem subtitleFetcherItem sortableOption" data-pluginname="'.concat(n()(s.Name),'">');var d=(a.DisabledSubtitleFetchers?!a.DisabledSubtitleFetchers.includes(s.Name):s.DefaultEnabled)?' checked="checked"':"";i+='<label class="listItemCheckboxContainer"><input type="checkbox" is="emby-checkbox" class="chkSubtitleFetcher" data-pluginname="'.concat(n()(s.Name),'" ').concat(d,"><span></span></label>"),i+='<div class="listItemBody">',i+='<h3 class="listItemBodyText">',i+=n()(s.Name),i+="</h3>",i+="</div>",o>0?i+='<button type="button" is="paper-icon-button-light" title="'.concat(c.ZP.translate("Up"),'" class="btnSortableMoveUp btnSortable" data-pluginindex="').concat(o,'"><span class="material-icons keyboard_arrow_up" aria-hidden="true"></span></button>'):r.length>1&&(i+='<button type="button" is="paper-icon-button-light" title="'.concat(c.ZP.translate("Down"),'" class="btnSortableMoveDown btnSortable" data-pluginindex="').concat(o,'"><span class="material-icons keyboard_arrow_down" aria-hidden="true"></span></button>')),i+="</div>"}i+="</div>",i+='<div class="fieldDescription">'.concat(c.ZP.translate("SubtitleDownloadersHelp"),"</div>"),l.innerHTML=i}function g(e,t){var a="",i=e.ImageFetchers;if(!(i=q(i,t.ImageFetcherOrder||[])).length)return a;a+='<div class="imageFetcher" data-type="'+e.Type+'">',a+='<div class="flex align-items-center" style="margin:1.5em 0 .5em;">',a+='<h3 class="checkboxListLabel" style="margin:0;">'+c.ZP.translate("HeaderTypeImageFetchers",c.ZP.translate("TypeOptionPlural"+e.Type))+"</h3>";var l=e.SupportedImageTypes||[];(l.length>1||1===l.length&&"Primary"!==l[0])&&(a+='<button is="emby-button" class="raised btnImageOptionsForType" type="button" style="margin-left:1.5em;font-size:90%;"><span>'+c.ZP.translate("HeaderFetcherSettings")+"</span></button>"),a+="</div>",a+='<div class="checkboxList paperList checkboxList-paperList">';for(var r=0;r<i.length;r++){var o=i[r];a+='<div class="listItem imageFetcherItem sortableOption" data-pluginname="'+n()(o.Name)+'">';var s=(t.ImageFetchers?t.ImageFetchers.includes(o.Name):o.DefaultEnabled)?' checked="checked"':"";a+='<label class="listItemCheckboxContainer"><input type="checkbox" is="emby-checkbox" class="chkImageFetcher" data-pluginname="'+n()(o.Name)+'" '+s+"><span></span></label>",a+='<div class="listItemBody">',a+='<h3 class="listItemBodyText">',a+=n()(o.Name),a+="</h3>",a+="</div>",r>0?a+='<button type="button" is="paper-icon-button-light" title="'+c.ZP.translate("Up")+'" class="btnSortableMoveUp btnSortable" data-pluginindex="'+r+'"><span class="material-icons keyboard_arrow_up" aria-hidden="true"></span></button>':i.length>1&&(a+='<button type="button" is="paper-icon-button-light" title="'+c.ZP.translate("Down")+'" class="btnSortableMoveDown btnSortable" data-pluginindex="'+r+'"><span class="material-icons keyboard_arrow_down" aria-hidden="true"></span></button>'),a+="</div>"}return a+="</div>",(a+='<div class="fieldDescription">'+c.ZP.translate("LabelImageFetchersHelp")+"</div>")+"</div>"}function f(e,t,a){for(var i="",l=e.querySelector(".imageFetchers"),r=0;r<t.TypeOptions.length;r++){var n=t.TypeOptions[r];i+=g(n,y(a,n.Type)||{})}return l.innerHTML=i,i?(l.classList.remove("hide"),e.querySelector(".chkSaveLocalContainer").classList.remove("hide")):(l.classList.add("hide"),e.querySelector(".chkSaveLocalContainer").classList.add("hide")),!0}function L(e){var t=e.querySelector(".btnSortable"),a=t.querySelector(".material-icons");e.previousSibling?(t.title=c.ZP.translate("Up"),t.classList.add("btnSortableMoveUp"),t.classList.remove("btnSortableMoveDown"),a.classList.remove("keyboard_arrow_down"),a.classList.add("keyboard_arrow_up")):(t.title=c.ZP.translate("Down"),t.classList.remove("btnSortableMoveUp"),t.classList.add("btnSortableMoveDown"),a.classList.remove("keyboard_arrow_up"),a.classList.add("keyboard_arrow_down"))}function x(e){var t,r=o.ZP.parentWithClass(e.target,"btnImageOptionsForType");if(r)return t=o.ZP.parentWithClass(r,"imageFetcher").getAttribute("data-type"),void a.e(4431).then(a.bind(a,64431)).then((function(e){var a=e.default,r=y(i,t);r||(r={Type:t},i.TypeOptions.push(r));var n=y(l||{},t);(new a).show(t,r,n)}));w.call(this,e)}function w(e){var t=o.ZP.parentWithClass(e.target,"btnSortable");if(t){var a=o.ZP.parentWithClass(t,"sortableOption"),i=o.ZP.parentWithClass(a,"paperList");if(t.classList.contains("btnSortableMoveDown")){var l=a.nextSibling;l&&(a.parentNode.removeChild(a),l.parentNode.insertBefore(a,l.nextSibling))}else{var r=a.previousSibling;r&&(a.parentNode.removeChild(a),r.parentNode.insertBefore(a,r))}Array.prototype.forEach.call(i.querySelectorAll(".sortableOption"),L)}}function A(e){e.querySelector(".metadataReaders").addEventListener("click",w),e.querySelector(".subtitleFetchers").addEventListener("click",w),e.querySelector(".metadataFetchers").addEventListener("click",w),e.querySelector(".imageFetchers").addEventListener("click",x)}function C(){return(C=u(regeneratorRuntime.mark((function e(t,a,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i={TypeOptions:[]},l=null,null===r&&t.classList.add("newlibrary"),t.innerHTML=c.ZP.translateHtml(s),p(t.querySelector("#selectAutoRefreshInterval")),n=[b(t),h(t.querySelector("#selectCountry"))],Promise.all(n).then((function(){return E(t,a).then((function(){r&&D(t,r),A(t)}))}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t){return"homevideos"===t||"photos"===t?e.querySelector(".chkEnablePhotosContainer").classList.remove("hide"):e.querySelector(".chkEnablePhotosContainer").classList.add("hide"),"tvshows"!==t&&"movies"!==t&&"homevideos"!==t&&"musicvideos"!==t&&"mixed"!==t?e.querySelector(".chapterSettingsSection").classList.add("hide"):e.querySelector(".chapterSettingsSection").classList.remove("hide"),"tvshows"===t?(e.querySelector(".chkAutomaticallyGroupSeriesContainer").classList.remove("hide"),e.querySelector(".fldSeasonZeroDisplayName").classList.remove("hide"),e.querySelector("#txtSeasonZeroName").setAttribute("required","required")):(e.querySelector(".chkAutomaticallyGroupSeriesContainer").classList.add("hide"),e.querySelector(".fldSeasonZeroDisplayName").classList.add("hide"),e.querySelector("#txtSeasonZeroName").removeAttribute("required")),"books"===t||"boxsets"===t||"playlists"===t||"music"===t?e.querySelector(".chkEnableEmbeddedTitlesContainer").classList.add("hide"):e.querySelector(".chkEnableEmbeddedTitlesContainer").classList.remove("hide"),"tvshows"===t?e.querySelector(".chkEnableEmbeddedEpisodeInfosContainer").classList.remove("hide"):e.querySelector(".chkEnableEmbeddedEpisodeInfosContainer").classList.add("hide"),"tvshows"===t||"movies"===t||"musicvideos"===t||"mixed"===t?e.querySelector(".fldAllowEmbeddedSubtitlesContainer").classList.remove("hide"):e.querySelector(".fldAllowEmbeddedSubtitlesContainer").classList.add("hide"),e.querySelector(".chkAutomaticallyAddToCollectionContainer").classList.toggle("hide","movies"!==t&&"mixed"!==t),function(e,t){var a=e.classList.contains("newlibrary");return ApiClient.getJSON(ApiClient.getUrl("Libraries/AvailableOptions",{LibraryContentType:t,IsNewLibrary:a})).then((function(t){l=t,e.availableOptions=t,function(e,t){var a="",i=e.querySelector(".metadataSavers");if(!t.length)return i.innerHTML="",i.classList.add("hide"),!1;a+='<h3 class="checkboxListLabel">'.concat(c.ZP.translate("LabelMetadataSavers"),"</h3>"),a+='<div class="checkboxList paperList checkboxList-paperList">';for(var l=0;l<t.length;l++){var r=t[l];a+='<label><input type="checkbox" data-defaultenabled="'.concat(r.DefaultEnabled,'" is="emby-checkbox" class="chkMetadataSaver" data-pluginname="').concat(n()(r.Name),'" ',!1,"><span>").concat(n()(r.Name),"</span></label>")}a+="</div>",a+='<div class="fieldDescription" style="margin-top:.25em;">'.concat(c.ZP.translate("LabelMetadataSaversHelp"),"</div>"),i.innerHTML=a,i.classList.remove("hide")}(e,t.MetadataSavers),m(e,t.MetadataReaders),k(e,t,{}),S(e,t,{}),f(e,t,{}),t.SubtitleFetchers.length?e.querySelector(".subtitleDownloadSettings").classList.remove("hide"):e.querySelector(".subtitleDownloadSettings").classList.add("hide")})).catch((function(){return Promise.resolve()}))}(e,t)}function q(e,t){return(e=e.slice(0)).sort((function(e,a){return(e=t.indexOf(e.Name))-t.indexOf(a.Name)})),e}function D(e,t){i=t,l=e.availableOptions,e.querySelector("#selectLanguage").value=t.PreferredMetadataLanguage||"",e.querySelector("#selectCountry").value=t.MetadataCountryCode||"",e.querySelector("#selectAutoRefreshInterval").value=t.AutomaticRefreshIntervalDays||"0",e.querySelector("#txtSeasonZeroName").value=t.SeasonZeroDisplayName||"Specials",e.querySelector(".chkEnablePhotos").checked=t.EnablePhotos,e.querySelector(".chkEnableRealtimeMonitor").checked=t.EnableRealtimeMonitor,e.querySelector(".chkExtractChaptersDuringLibraryScan").checked=t.ExtractChapterImagesDuringLibraryScan,e.querySelector(".chkExtractChapterImages").checked=t.EnableChapterImageExtraction,e.querySelector("#chkSaveLocal").checked=t.SaveLocalMetadata,e.querySelector(".chkAutomaticallyGroupSeries").checked=t.EnableAutomaticSeriesGrouping,e.querySelector("#chkEnableEmbeddedTitles").checked=t.EnableEmbeddedTitles,e.querySelector("#chkEnableEmbeddedEpisodeInfos").value=t.EnableEmbeddedEpisodeInfos,e.querySelector("#selectAllowEmbeddedSubtitles").value=t.AllowEmbeddedSubtitles,e.querySelector("#chkSkipIfGraphicalSubsPresent").checked=t.SkipSubtitlesIfEmbeddedSubtitlesPresent,e.querySelector("#chkSaveSubtitlesLocally").checked=t.SaveSubtitlesWithMedia,e.querySelector("#chkSkipIfAudioTrackPresent").checked=t.SkipSubtitlesIfAudioTrackMatches,e.querySelector("#chkRequirePerfectMatch").checked=t.RequirePerfectSubtitleMatch,e.querySelector("#chkAutomaticallyAddToCollection").checked=t.AutomaticallyAddToCollection,Array.prototype.forEach.call(e.querySelectorAll(".chkMetadataSaver"),(function(e){e.checked=t.MetadataSavers?t.MetadataSavers.includes(e.getAttribute("data-pluginname")):"true"===e.getAttribute("data-defaultenabled")})),Array.prototype.forEach.call(e.querySelectorAll(".chkSubtitleLanguage"),(function(e){e.checked=!!t.SubtitleDownloadLanguages&&t.SubtitleDownloadLanguages.includes(e.getAttribute("data-lang"))})),m(e,q(e.availableOptions.MetadataReaders,t.LocalMetadataReaderOrder||[])),k(e,e.availableOptions,t),f(e,e.availableOptions,t),S(e,e.availableOptions,t)}var _={embed:function(e,t,a){return C.apply(this,arguments)},setContentType:E,getLibraryOptions:function(e){var t={EnableArchiveMediaFiles:!1,EnablePhotos:e.querySelector(".chkEnablePhotos").checked,EnableRealtimeMonitor:e.querySelector(".chkEnableRealtimeMonitor").checked,ExtractChapterImagesDuringLibraryScan:e.querySelector(".chkExtractChaptersDuringLibraryScan").checked,EnableChapterImageExtraction:e.querySelector(".chkExtractChapterImages").checked,EnableInternetProviders:!0,SaveLocalMetadata:e.querySelector("#chkSaveLocal").checked,EnableAutomaticSeriesGrouping:e.querySelector(".chkAutomaticallyGroupSeries").checked,PreferredMetadataLanguage:e.querySelector("#selectLanguage").value,MetadataCountryCode:e.querySelector("#selectCountry").value,SeasonZeroDisplayName:e.querySelector("#txtSeasonZeroName").value,AutomaticRefreshIntervalDays:parseInt(e.querySelector("#selectAutoRefreshInterval").value),EnableEmbeddedTitles:e.querySelector("#chkEnableEmbeddedTitles").checked,EnableEmbeddedEpisodeInfos:e.querySelector("#chkEnableEmbeddedEpisodeInfos").checked,AllowEmbeddedSubtitles:e.querySelector("#selectAllowEmbeddedSubtitles").value,SkipSubtitlesIfEmbeddedSubtitlesPresent:e.querySelector("#chkSkipIfGraphicalSubsPresent").checked,SkipSubtitlesIfAudioTrackMatches:e.querySelector("#chkSkipIfAudioTrackPresent").checked,SaveSubtitlesWithMedia:e.querySelector("#chkSaveSubtitlesLocally").checked,RequirePerfectSubtitleMatch:e.querySelector("#chkRequirePerfectMatch").checked,AutomaticallyAddToCollection:e.querySelector("#chkAutomaticallyAddToCollection").checked,MetadataSavers:Array.prototype.map.call(Array.prototype.filter.call(e.querySelectorAll(".chkMetadataSaver"),(function(e){return e.checked})),(function(e){return e.getAttribute("data-pluginname")})),TypeOptions:[]};return t.LocalMetadataReaderOrder=Array.prototype.map.call(e.querySelectorAll(".localReaderOption"),(function(e){return e.getAttribute("data-pluginname")})),t.SubtitleDownloadLanguages=Array.prototype.map.call(Array.prototype.filter.call(e.querySelectorAll(".chkSubtitleLanguage"),(function(e){return e.checked})),(function(e){return e.getAttribute("data-lang")})),function(e,t){t.DisabledSubtitleFetchers=Array.prototype.map.call(Array.prototype.filter.call(e.querySelectorAll(".chkSubtitleFetcher"),(function(e){return!e.checked})),(function(e){return e.getAttribute("data-pluginname")})),t.SubtitleFetcherOrder=Array.prototype.map.call(e.querySelectorAll(".subtitleFetcherItem"),(function(e){return e.getAttribute("data-pluginname")}))}(e,t),function(e,t){for(var a=e.querySelectorAll(".metadataFetcher"),i=0;i<a.length;i++){var l=a[i],r=l.getAttribute("data-type"),n=y(t,r);n||(n={Type:r},t.TypeOptions.push(n)),n.MetadataFetchers=Array.prototype.map.call(Array.prototype.filter.call(l.querySelectorAll(".chkMetadataFetcher"),(function(e){return e.checked})),(function(e){return e.getAttribute("data-pluginname")})),n.MetadataFetcherOrder=Array.prototype.map.call(l.querySelectorAll(".metadataFetcherItem"),(function(e){return e.getAttribute("data-pluginname")}))}}(e,t),function(e,t){for(var a=e.querySelectorAll(".imageFetcher"),i=0;i<a.length;i++){var l=a[i],r=l.getAttribute("data-type"),n=y(t,r);n||(n={Type:r},t.TypeOptions.push(n)),n.ImageFetchers=Array.prototype.map.call(Array.prototype.filter.call(l.querySelectorAll(".chkImageFetcher"),(function(e){return e.checked})),(function(e){return e.getAttribute("data-pluginname")})),n.ImageFetcherOrder=Array.prototype.map.call(l.querySelectorAll(".imageFetcherItem"),(function(e){return e.getAttribute("data-pluginname")}))}}(e,t),function(e){for(var t=(i||{}).TypeOptions||[],a=0;a<t.length;a++){var l=t[a],r=y(e,l.Type);r||(r={Type:l.Type},e.TypeOptions.push(r)),l.ImageOptions&&(r.ImageOptions=l.ImageOptions)}}(t),t},setLibraryOptions:D}},27368:function(e,t,a){var i=a(1892),l=a.n(i),r=a(95760),n=a.n(r),c=a(38311),o=a.n(c),s=a(58192),d=a.n(s),u=a(38060),b=a.n(u),h=a(54865),p=a.n(h),m=a(55412),v={};v.styleTagTransform=p(),v.setAttributes=d(),v.insert=o().bind(null,"head"),v.domAPI=n(),v.insertStyleElement=b(),l()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals,a(67752);var y=Object.create(HTMLInputElement.prototype);function k(e){if(13===e.keyCode)return e.preventDefault(),this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),!1}y.attachedCallback=function(){if("true"!==this.getAttribute("data-embytoggle")){this.setAttribute("data-embytoggle","true"),this.classList.add("mdl-switch__input");var e=this.parentNode;e.classList.add("mdl-switch"),e.classList.add("mdl-js-switch");var t=e.querySelector("span");e.insertAdjacentHTML("beforeend",'<div class="mdl-switch__trackContainer"><div class="mdl-switch__track"></div><div class="mdl-switch__thumb"><span class="mdl-switch__focus-helper"></span></div></div>'),t.classList.add("toggleButtonLabel"),t.classList.add("mdl-switch__label"),this.addEventListener("keydown",k)}},document.registerElement("emby-toggle",{prototype:y,extends:"input"})},55412:function(e,t,a){var i=a(54933),l=a.n(i),r=a(93476),n=a.n(r)()(l());n.push([e.id,".mdl-switch{-webkit-touch-callout:none;-webkit-align-items:center;align-items:center;box-sizing:border-box;display:-webkit-inline-flex;display:inline-flex;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-justify-content:flex-end;justify-content:flex-end;margin:0;overflow:visible;padding:0;position:relative;-webkit-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;width:100%;z-index:1}.toggleContainer{margin-bottom:1.8em}.mdl-switch__input{-ms-appearance:none;-webkit-appearance:none;appearance:none;border:none;height:0;margin:0;opacity:0;padding:0;width:0}.mdl-switch__trackContainer{position:relative;width:2.9em}.mdl-switch__track{background:hsla(0,0%,50%,.5);border-radius:1em;cursor:pointer;height:1em}.mdl-switch__input:checked+.mdl-switch__label+.mdl-switch__trackContainer>.mdl-switch__track{background:rgba(0,164,220,.5)}.mdl-switch__input[disabled]+.mdl-switch__label+.mdl-switch__trackContainer>.mdl-switch__track{background:rgba(0,0,0,.12);cursor:auto}.mdl-switch__thumb{-webkit-align-items:center;align-items:center;background:#999;border-radius:50%;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);cursor:pointer;display:-webkit-flex;display:flex;height:1.44em;-webkit-justify-content:center;justify-content:center;left:0;position:absolute;top:-.25em;transition-duration:.28s;transition-property:left;transition-timing-function:cubic-bezier(.4,0,.2,1);width:1.44em}.mdl-switch__input:checked+.mdl-switch__label+.mdl-switch__trackContainer>.mdl-switch__thumb{background:#00a4dc;box-shadow:0 3px .28em 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px .56em 0 rgba(0,0,0,.12);left:1.466em}.mdl-switch__input[disabled]+.mdl-switch__label+.mdl-switch__trackContainer>.mdl-switch__thumb{background:#bdbdbd;cursor:auto}.mdl-switch__focus-helper{background-color:initial;border-radius:50%;box-sizing:border-box;display:inline-block;height:.6em;left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:.6em}.mdl-switch__input:focus+.mdl-switch__label+.mdl-switch__trackContainer .mdl-switch__focus-helper{box-shadow:0 0 0 1.39em rgba(0,0,0,.05)}.mdl-switch__input:checked:focus+.mdl-switch__label+.mdl-switch__trackContainer .mdl-switch__focus-helper{background-color:rgba(0,164,220,.26);box-shadow:0 0 0 1.39em rgba(0,164,220,.26)}.mdl-switch__label{-webkit-align-items:center;align-items:center;cursor:pointer;display:-webkit-inline-flex;display:inline-flex;margin:0 0 0 .7em}.mdl-switch__input[disabled] .mdl-switch__label{color:#bdbdbd;cursor:auto}",""]),t.Z=n}}]);