"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2912],{52912:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}}),n(5769),n(98010),n(63238),n(61013),n(58112),n(61418),n(17460),n(14078);var a=n(65009),i=n.n(a),s=n(94389),l=n(90914),r=n(78695),o=n(33942),u=n(28978),d=n(56705),c=n(27515),m=n(83094),b=(n(20716),n(664),n(21865),n(6626),n(85427),n(1892)),h=n.n(b),v=n(95760),g=n.n(v),p=n(38311),f=n.n(p),S=n(58192),y=n.n(S),I=n(38060),Z=n.n(I),L=n(54865),P=n.n(L),C=n(13927),D={};D.styleTagTransform=P(),D.setAttributes=y(),D.insert=f().bind(null,"head"),D.domAPI=g(),D.insertStyleElement=Z(),h()(C.Z,D),C.Z&&C.Z.locals&&C.Z.locals,n(78066),n(15359);var q,x,w=n(53913),T=n(25152),M=n(56346);function k(e,t){var n="Items/"+q.Id+"/RemoteSearch/Subtitles/"+t,a=w.Z.getApiClient(q.ServerId);a.ajax({type:"POST",url:a.getUrl(n)}).then((function(){x=!0,(0,T.Z)(o.ZP.translate("MessageDownloadQueued")),c.Z.autoFocus(e)}))}function H(e,t,n){function a(t){q=t,function(e,t){var n=(t.MediaStreams||[]).filter((function(e){return"Subtitle"===e.Type})),a="";n.length&&(a+="<h2>"+o.ZP.translate("MySubtitles")+"</h2>",a+="<div>",a+=n.map((function(e){var t="",n=r.Z.tv?"button":"div",a=r.Z.tv&&e.Path?"listItem listItem-border btnDelete":"listItem listItem-border";return r.Z.tv&&(a+=" listItem-focusscale listItem-button"),t+="<"+n+' class="'+(a+=" listItem-noborder")+'" data-index="'+e.Index+'">',t+='<span class="listItemIcon material-icons closed_caption" aria-hidden="true"></span>',t+='<div class="listItemBody two-line">',t+="<div>",t+=i()(e.DisplayTitle||""),t+="</div>",e.Path&&(t+='<div class="secondary listItemBodyText">'+i()(e.Path)+"</div>"),t+="</a>",t+="</div>",r.Z.tv||e.Path&&(t+='<button is="paper-icon-button-light" data-index="'+e.Index+'" title="'+o.ZP.translate("Delete")+'" class="btnDelete listItemButton"><span class="material-icons delete" aria-hidden="true"></span></button>'),t+"</"+n+">"})).join(""),a+="</div>");var s=e.querySelector(".subtitleList");n.length?s.classList.remove("hide"):s.classList.add("hide"),s.innerHTML=a}(e,t);var n=t.Path||"",a=Math.max(n.lastIndexOf("/"),n.lastIndexOf("\\"));a>-1&&(n=n.substring(a+1)),n?(e.querySelector(".pathValue").innerText=n,e.querySelector(".originalFile").classList.remove("hide")):(e.querySelector(".pathValue").innerHTML="",e.querySelector(".originalFile").classList.add("hide")),d.ZP.hide()}e.querySelector(".noSearchResults").classList.add("hide"),"string"==typeof n?t.getItem(t.getCurrentUserId(),n).then(a):a(n)}function F(e){var t=this,n=t.querySelector("#selectLanguage",t).value;return function(e,t){u.set("subtitleeditor-language",t),d.ZP.show();var n=w.Z.getApiClient(q.ServerId),a=n.getUrl("Items/"+q.Id+"/RemoteSearch/Subtitles/"+t);n.getJSON(a).then((function(t){!function(e,t){var n="",a="";if(!t.length)return e.querySelector(".noSearchResults").classList.remove("hide"),e.querySelector(".subtitleResults").innerHTML="",void d.ZP.hide();e.querySelector(".noSearchResults").classList.add("hide");for(var s=0,l=t.length;s<l;s++){var u=t[s],c=u.ProviderName;c!==n&&(s>0&&(a+="</div>"),a+="<h2>"+c+"</h2>",a+="<div>",n=c);var m=r.Z.tv?"button":"div",b=r.Z.tv?"listItem listItem-border btnOptions":"listItem listItem-border";r.Z.tv&&(b+=" listItem-focusscale listItem-button"),a+="<"+m+' class="'+b+'" data-subid="'+u.Id+'">',a+='<span class="listItemIcon material-icons closed_caption" aria-hidden="true"></span>',a+='<div class="listItemBody '+(u.Comment||u.IsHashMatch?"three-line":"two-line")+'">',a+="<div>"+i()(u.Name)+"</div>",a+='<div class="secondary listItemBodyText">',u.Format&&(a+='<span style="margin-right:1em;">'+o.ZP.translate("FormatValue",u.Format)+"</span>"),null!=u.DownloadCount&&(a+="<span>"+o.ZP.translate("DownloadsValue",u.DownloadCount)+"</span>"),a+="</div>",u.Comment&&(a+='<div class="secondary listItemBodyText">'+i()(u.Comment)+"</div>"),u.IsHashMatch&&(a+='<div class="secondary listItemBodyText"><div class="inline-flex align-items-center justify-content-center" style="background:#3388cc;color:#fff;padding: .3em 1em;border-radius:1000em;">'+o.ZP.translate("PerfectMatch")+"</div></div>"),a+="</div>",r.Z.tv||(a+='<button type="button" is="paper-icon-button-light" data-subid="'+u.Id+'" class="btnDownload listItemButton"><span class="material-icons file_download" aria-hidden="true"></span></button>'),a+="</"+m+">"}t.length&&(a+="</div>"),e.querySelector(".subtitleResults").innerHTML=a,d.ZP.hide()}(e,t)}))}(m.ZP.parentWithClass(t,"formDialogContent"),n),e.preventDefault(),!1}function E(e){var t=m.ZP.parentWithClass(e.target,"btnDelete");if(t){var n=t.getAttribute("data-index");!function(e,t){var n=o.ZP.translate("MessageAreYouSureDeleteSubtitles");(0,M.Z)({title:o.ZP.translate("ConfirmDeletion"),text:n,confirmText:o.ZP.translate("Delete"),primary:"delete"}).then((function(){d.ZP.show();var n=q.Id,a="Videos/"+n+"/Subtitles/"+t,i=w.Z.getApiClient(q.ServerId);i.ajax({type:"DELETE",url:i.getUrl(a)}).then((function(){x=!0,H(e,i,n)}))}))}(m.ZP.parentWithClass(t,"subtitleEditorDialog"),n)}}function A(e){var t,a=m.ZP.parentWithClass(e.target,"btnOptions");a&&(t=a.getAttribute("data-subid"),function(e,t,a){var i=[];i.push({name:o.ZP.translate("Download"),id:"download"}),Promise.resolve().then(n.bind(n,78407)).then((function(n){n.show({items:i,positionTo:e}).then((function(e){"download"===e&&k(t,a)}))}))}(a,m.ZP.parentWithClass(a,"subtitleEditorDialog"),t));var i=m.ZP.parentWithClass(e.target,"btnDownload");i&&(t=i.getAttribute("data-subid"),k(m.ZP.parentWithClass(i,"subtitleEditorDialog"),t))}function R(e,t,a){Promise.resolve().then(n.bind(n,74227)).then((function(n){var i=n.default,s=a?"on":"off";i.centerFocus[s](e,t)}))}function B(e){var t=m.ZP.parentWithClass(e.target,"subtitleEditorDialog"),a=t.querySelector("#selectLanguage"),i=w.Z.getApiClient(q.ServerId);Promise.all([n.e(3800),n.e(3052)]).then(n.bind(n,93052)).then((function(e){e.default.show({languages:{list:a.innerHTML,value:a.value},itemId:q.Id,serverId:q.ServerId}).then((function(e){e&&(x=!0,H(t,i,q.Id))}))}))}var O={show:function(e,t){return d.ZP.show(),function(e,t){x=!1;var n=w.Z.getApiClient(t);return n.getItem(n.getCurrentUserId(),e).then((function(e){var t={removeOnClose:!0,scrollY:!1};r.Z.tv?t.size="fullscreen":t.size="small";var a=l.default.createDialog(t);a.classList.add("formDialog"),a.classList.add("subtitleEditorDialog"),a.innerHTML=o.ZP.translateHtml('<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"><span class="material-icons arrow_back" aria-hidden="true"></span></button> <h3 class="formDialogHeaderTitle">${Subtitles}</h3> <a is="emby-linkbutton" rel="noopener noreferrer" data-autohide="true" class="button-link btnHelp flex align-items-center" href="https://docs.jellyfin.org/general/server/media/subtitles.html" target="_blank" style="margin-left:auto;margin-right:.5em;padding:.25em" title="${Help}"><span class="material-icons info" aria-hidden="true"></span><span style="margin-left:.25em">${Help}</span></a> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner dialog-content-centered"> <div class="subtitleList" style="margin-bottom:2em"></div> <h2>${SearchForSubtitles}</h2> <p style="margin:1.5em 0" class="originalFile"><span class="originalSubtitleFileLabel secondaryText"></span><span class="pathValue"></span></p> <form class="subtitleSearchForm" style="max-width:none"> <div class="flex align-items-center"> <div class="selectContainer flex-grow" style="margin-bottom:0"> <select is="emby-select" id="selectLanguage" required="required" label="${LabelLanguage}" autofocus></select> </div> <button type="submit" is="paper-icon-button-light" title="${Search}" class="btnSearchSubtitles flex-shrink-zero emby-select-iconbutton"><span class="material-icons search" aria-hidden="true"></span></button> <button type="button" is="paper-icon-button-light" title="${Upload}" class="btnOpenUploadMenu flex-shrink-zero emby-select-iconbutton"><span class="material-icons add" aria-hidden="true"></span></button> </div> <button is="emby-button" type="submit" class="raised btnSubmit block button-submit">${Search}</button> </form> <br/> <div class="subtitleResults"></div> <div class="noSearchResults hide"> ${NoSubtitleSearchResultsFound} </div> </div> </div> ',"core"),a.querySelector(".originalSubtitleFileLabel").innerHTML=o.ZP.translate("File"),a.querySelector(".subtitleSearchForm").addEventListener("submit",F),a.querySelector(".btnOpenUploadMenu").addEventListener("click",B);var i=a.querySelector(".btnSubmit");r.Z.tv?(R(a.querySelector(".formDialogContent"),!1,!0),a.querySelector(".btnSearchSubtitles").classList.add("hide")):i.classList.add("hide"),!r.Z.tv&&s.M.supports("externallinks")||a.querySelector(".btnHelp").remove();var d=a.querySelector(".formDialogContent");return a.querySelector(".subtitleList").addEventListener("click",E),a.querySelector(".subtitleResults").addEventListener("click",A),n.getCultures().then((function(e){!function(e,t,n){var a=e.querySelector("#selectLanguage");a.innerHTML=n.map((function(e){return'<option value="'+e.ThreeLetterISOLanguageName+'">'+e.DisplayName+"</option>"}));var i=u.get("subtitleeditor-language");i?a.value=i:t.getCurrentUser().then((function(e){var t=e.Configuration.SubtitleLanguagePreference;t&&(a.value=t)}))}(d,n,e)})),a.querySelector(".btnCancel").addEventListener("click",(function(){l.default.close(a)})),new Promise((function(t,i){a.addEventListener("close",(function(){r.Z.tv&&R(a.querySelector(".formDialogContent"),!1,!1),x?t():i()})),l.default.open(a),H(d,n,e)}))}))}(e,t)}}},13927:function(e,t,n){var a=n(54933),i=n.n(a),s=n(93476),l=n.n(s)()(i());l.push([e.id,".originalSubtitleFileLabel{margin-right:1em}",""]),t.Z=l}}]);