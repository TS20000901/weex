!function(t){function e(e){for(var r,s,c=e[0],i=e[1],l=e[2],p=0,f=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);for(u&&u(e);f.length;)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={28:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;a.push([512,0]),n()}({280:function(t,e,n){var r=n(514);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(6).default)("4229c04e",r,!1,{})},512:function(t,e,n){"use strict";n.r(e);n(9),n(11);var r=n(1),o=n(4),a=n.n(o),s=n(12);window.location.href.includes("static")||new s({theme:"dark"}),a.a.init(r.a);var c=n(617).default;new r.a(r.a.util.extend({el:"#root"},c))},513:function(t,e,n){"use strict";n(280)},514:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".wrapper[data-v-2c4044a0] {\n  justify-content: center;\n}\n.nav[data-v-2c4044a0] {\n  color: #ff3c00;\n  font-size: 0.53333rem;\n}\n.scroller[data-v-2c4044a0] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  padding: 1.33333rem;\n  background-color: #cbf7ff;\n}\n.btn[data-v-2c4044a0] {\n  width: 6.66667rem;\n  padding: 0.26667rem;\n  margin: 0.26667rem auto 0;\n  border-radius: 0.13333rem;\n  color: #6d7dff;\n  text-align: center;\n  font-size: 0.42667rem;\n  border-style: solid;\n  border-color: #6d7dff;\n  border-width: 1px;\n  opacity: 1;\n}\n",""])},617:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("scroller",{staticClass:"scroller",attrs:{}},[e("div",{staticClass:"wrapper weex-ct weex-div",attrs:{"weex-type":"div"}},[e("p",{staticClass:"nav weex-el weex-text",attrs:{"weex-type":"text"}},[t._v("multiPage7页面")]),t._v(" "),e("p",{staticClass:"btn weex-el weex-text",attrs:{"weex-type":"text","data-evt-click":""},on:{click:t.$stopOuterA,weex$tap:function(e){return e.stopPropagation(),t.jumpPage("multiPage8")}}},[t._v("push(multiPage8)")]),t._v(" "),e("p",{staticClass:"btn weex-el weex-text",attrs:{"weex-type":"text","data-evt-click":""},on:{click:t.$stopOuterA,weex$tap:function(e){return e.stopPropagation(),t.broadcastPost()}}},[t._v("广播发送")]),t._v(" "),e("p",{staticClass:"btn weex-el weex-text",attrs:{"weex-type":"text","data-evt-click":""},on:{click:t.$stopOuterA,weex$tap:function(e){return e.stopPropagation(),t.broadcastOnmessage()}}},[t._v("广播监听")]),t._v(" "),e("p",{staticClass:"btn weex-el weex-text",attrs:{"weex-type":"text","data-evt-click":""},on:{click:t.$stopOuterA,weex$tap:function(e){return e.stopPropagation(),t.broadcastClose()}}},[t._v("关闭广播")])])])};r._withStripped=!0;var o=n(0),a=new BroadcastChannel("testbc"),s={components:{},data:function(){},methods:{jumpPage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;Object(o.r)(t,n)},navigatorPop:function(){n(8).navigator.pop({animated:"true"},(function(t){console.log("callback: ",JSON.stringify(t))}))},broadcastPost:function(){a.postMessage("来自multiPage7的消息test message!")},broadcastOnmessage:function(){a.onmessage=function(t){console.log("multiPage7收到消息："+JSON.stringify(t.data))}},broadcastClose:function(){a.close(),modal.alert({message:"已关闭广播test",okTitle:"关闭"},(function(){}))}}},c=(n(513),n(2)),i=Object(c.a)(s,r,[],!1,null,"2c4044a0",null);e.default=i.exports}});