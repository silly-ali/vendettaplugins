(function(s,d,r){"use strict";const{DCDSoundManager:n}=r.ReactNative.NativeModules,g=d.findByStoreName("SelectedChannelStore"),m="https://raw.githubusercontent.com/eszgit/vendettaplugins/master/plugins/Fart/src/fart.ogg",a=1337;let c=-1;const h=function(){return new Promise(function(t){return n.prepare(m,"notification",a,function(o,e){return t(e)})})};let u=null,i=!1;async function p(){i&&(u!=null&&clearTimeout(u),n.stop(a),i=!1),i=!0,await n.play(a),u=setTimeout(function(){i=!1,n.stop(a),u=null},c)}function l(t){if(t.message.content&&t.channelId==g.getChannelId()&&!t.message.state&&t.sendMessageOptions==null){let o=(t.message.content.match(/fart/g)??[]).length;if(o+=(t.message.content.match(/fard/gi)??[]).length,o>0)for(let e=0;e<o;e++)setTimeout(p,e*350)}}let f=!1;var S={onLoad:function(){f||h().then(function(t){f=!0,c=t.duration}),r.FluxDispatcher.subscribe("MESSAGE_CREATE",l)},onUnload:function(){r.FluxDispatcher.unsubscribe("MESSAGE_CREATE",l)}};return s.default=S,Object.defineProperty(s,"__esModule",{value:!0}),s})({},vendetta.metro,vendetta.metro.common);
