"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4268],{84268:function(e,t,a){a.r(t),a.d(t,{show:function(){return p}}),a(98010),a(63238),a(61013),a(32081),a(61418),a(27471),a(95623),a(61514);var i=a(78407),n=a(53218),r=a(33942),s=a(9389),u=a(53913);function o(e,t,a){var u,o=n.O.getSupportedCommands(t),p=[];if(-1!==o.indexOf("SetAspectRatio")){var l=n.O.getAspectRatio(t),c=n.O.getSupportedAspectRatios(t).filter((function(e){return e.id===l}))[0];p.push({name:r.ZP.translate("AspectRatio"),id:"aspectratio",asideText:c?c.name:null})}if(-1!==o.indexOf("PlaybackRate")){var d=n.O.getPlaybackRate(t),m=n.O.getSupportedPlaybackRates(t).filter((function(e){return e.id===d}))[0];p.push({name:r.ZP.translate("PlaybackRate"),id:"playbackrate",asideText:m?m.name:null})}if(e.quality&&o.includes("SetMaxStreamingBitrate")&&null!=a&&null!==(u=a.Policy)&&void 0!==u&&u.EnableVideoPlaybackTranscoding){var b=function(e){var t=n.O.getPlayerState(e),a=n.O.currentMediaSource(e).MediaStreams.filter((function(e){return"Video"===e.Type}))[0],i=a?a.Width:null,r=a?a.Height:null,u=s.ZP.getVideoQualityOptions({currentMaxBitrate:n.O.getMaxStreamingBitrate(e),isAutomaticBitrateEnabled:n.O.enableAutomaticBitrateDetection(e),videoWidth:i,videoHeight:r,enableAuto:!0}).filter((function(e){return e.selected}));if(!u.length)return null;var o=(u=u[0]).name;return u.autoText&&(t.PlayState&&"Transcode"!==t.PlayState.PlayMethod?o+=" - Direct":o+=" "+u.autoText),o}(t);p.push({name:r.ZP.translate("Quality"),id:"quality",asideText:b})}var h=n.O.getRepeatMode(t);return-1!==o.indexOf("SetRepeatMode")&&n.O.currentMediaSource(t).RunTimeTicks&&p.push({name:r.ZP.translate("RepeatMode"),id:"repeatmode",asideText:"RepeatNone"===h?r.ZP.translate("None"):r.ZP.translate(""+h)}),e.suboffset&&p.push({name:r.ZP.translate("SubtitleOffset"),id:"suboffset",asideText:null}),e.stats&&p.push({name:r.ZP.translate("PlaybackData"),id:"stats",asideText:null}),i.default.show({items:p,positionTo:e.positionTo}).then((function(a){return function(e,t,a){switch(e){case"quality":return function(e,t){var a=n.O.currentMediaSource(e).MediaStreams.filter((function(e){return"Video"===e.Type}))[0],r=a?a.Width:null,u=a?a.Height:null,o=s.ZP.getVideoQualityOptions({currentMaxBitrate:n.O.getMaxStreamingBitrate(e),isAutomaticBitrateEnabled:n.O.enableAutomaticBitrateDetection(e),videoWidth:r,videoHeight:u,enableAuto:!0}),p=o.map((function(e){var t={name:e.name,id:e.bitrate,asideText:e.secondaryText};return e.selected&&(t.selected=!0),t})),l=o.filter((function(e){return e.selected})),c=l.length?l[0].bitrate:null;return i.default.show({items:p,positionTo:t}).then((function(t){var a=parseInt(t);a!==c&&n.O.setMaxStreamingBitrate({enableAutomaticBitrateDetection:!a,maxBitrate:a},e)}))}(a,t.positionTo);case"aspectratio":return function(e,t){var a=n.O.getAspectRatio(e),r=n.O.getSupportedAspectRatios(e).map((function(e){return{id:e.id,name:e.name,selected:e.id===a}}));return i.default.show({items:r,positionTo:t}).then((function(t){return t?(n.O.setAspectRatio(t,e),Promise.resolve()):Promise.reject()}))}(a,t.positionTo);case"playbackrate":return function(e,t){var a=n.O.getPlaybackRate(e),r=n.O.getSupportedPlaybackRates(e).map((function(e){return{id:e.id,name:e.name,selected:e.id===a}}));return i.default.show({items:r,positionTo:t}).then((function(t){return t?(n.O.setPlaybackRate(t,e),Promise.resolve()):Promise.reject()}))}(a,t.positionTo);case"repeatmode":return function(e,t){var a=[],s=n.O.getRepeatMode(e);return a.push({name:r.ZP.translate("RepeatAll"),id:"RepeatAll",selected:"RepeatAll"===s}),a.push({name:r.ZP.translate("RepeatOne"),id:"RepeatOne",selected:"RepeatOne"===s}),a.push({name:r.ZP.translate("None"),id:"RepeatNone",selected:"RepeatNone"===s}),i.default.show({items:a,positionTo:t}).then((function(t){t&&n.O.setRepeatMode(t,e)}))}(a,t.positionTo);case"stats":return t.onOption&&t.onOption("stats"),Promise.resolve();case"suboffset":return t.onOption&&t.onOption("suboffset"),Promise.resolve()}return Promise.reject()}(a,e,t)}))}function p(e){var t=e.player,a=n.O.currentItem(t);return a&&a.ServerId?u.Z.getApiClient(a.ServerId).getCurrentUser().then((function(a){return o(e,t,a)})):o(e,t,null)}t.default={show:p}},9389:function(e,t,a){var i=a(94389),n=a(33942);t.ZP={getVideoQualityOptions:function(e){var t,a=e.currentMaxBitrate,r=e.videoWidth,s=e.videoHeight;r/s<16/9&&(r=s*(16/9));var u=(null===(t=i.M.screen())||void 0===t?void 0:t.maxAllowedWidth)||4096,o=r||4096,p=[],l={name:n.ZP.translate("Auto"),bitrate:0,selected:e.isAutomaticBitrateEnabled};if(e.enableAuto&&p.push(l),o>=3800&&u>=1930&&(p.push({name:"4K - 120 Mbps",maxHeight:2160,bitrate:12e7}),p.push({name:"4K - 80 Mbps",maxHeight:2160,bitrate:8e7})),o>=1900&&u>=1290&&(p.push({name:"1080p - 60 Mbps",maxHeight:1080,bitrate:6e7}),p.push({name:"1080p - 40 Mbps",maxHeight:1080,bitrate:4e7}),p.push({name:"1080p - 20 Mbps",maxHeight:1080,bitrate:2e7}),p.push({name:"1080p - 15 Mbps",maxHeight:1080,bitrate:15e6}),p.push({name:"1080p - 10 Mbps",maxHeight:1080,bitrate:1e7})),o>=1260&&u>=650&&(p.push({name:"720p - 8 Mbps",maxHeight:720,bitrate:8e6}),p.push({name:"720p - 6 Mbps",maxHeight:720,bitrate:6e6}),p.push({name:"720p - 4 Mbps",maxHeight:720,bitrate:4e6})),o>=620&&(p.push({name:"480p - 3 Mbps",maxHeight:480,bitrate:3e6}),p.push({name:"480p - 1.5 Mbps",maxHeight:480,bitrate:15e5}),p.push({name:"480p - 720 kbps",maxHeight:480,bitrate:72e4})),p.push({name:"360p - 420 kbps",maxHeight:360,bitrate:42e4}),a){for(var c=p.length-1,d=0,m=p.length;d<m;d++){var b=p[d];if(b.bitrate>0&&b.bitrate<=a){c=d;break}}var h=p[c];e.isAutomaticBitrateEnabled?l.autoText=h.name:h.selected=!0}return p},getAudioQualityOptions:function(e){var t=e.currentMaxBitrate,a=[],i={name:n.ZP.translate("Auto"),bitrate:0,selected:e.isAutomaticBitrateEnabled};if(e.enableAuto&&a.push(i),a.push({name:"2 Mbps",bitrate:2e6}),a.push({name:"1.5 Mbps",bitrate:15e5}),a.push({name:"1 Mbps",bitrate:1e6}),a.push({name:"320 kbps",bitrate:32e4}),a.push({name:"256 kbps",bitrate:256e3}),a.push({name:"192 kbps",bitrate:192e3}),a.push({name:"128 kbps",bitrate:128e3}),a.push({name:"96 kbps",bitrate:96e3}),a.push({name:"64 kbps",bitrate:64e3}),t){for(var r=a.length-1,s=0,u=a.length;s<u;s++){var o=a[s];if(o.bitrate>0&&o.bitrate<=t){r=s;break}}var p=a[r];e.isAutomaticBitrateEnabled?i.autoText=p.name:p.selected=!0}return a}}}}]);