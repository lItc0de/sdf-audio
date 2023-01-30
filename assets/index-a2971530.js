var Ke=Object.defineProperty;var Ge=(n,e,t)=>e in n?Ke(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var f=(n,e,t)=>(Ge(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const b=Object.create(null);b.open="0";b.close="1";b.ping="2";b.pong="3";b.message="4";b.upgrade="5";b.noop="6";const W=Object.create(null);Object.keys(b).forEach(n=>{W[b[n]]=n});const je={type:"error",data:"parser error"},Ze=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Je=typeof ArrayBuffer=="function",Qe=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,Ce=({type:n,data:e},t,s)=>Ze&&e instanceof Blob?t?s(e):me(e,s):Je&&(e instanceof ArrayBuffer||Qe(e))?t?s(e):me(new Blob([e]),s):s(b[n]+(e||"")),me=(n,e)=>{const t=new FileReader;return t.onload=function(){const s=t.result.split(",")[1];e("b"+(s||""))},t.readAsDataURL(n)},ye="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",D=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let n=0;n<ye.length;n++)D[ye.charCodeAt(n)]=n;const et=n=>{let e=n.length*.75,t=n.length,s,r=0,i,o,a,h;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);const S=new ArrayBuffer(e),d=new Uint8Array(S);for(s=0;s<t;s+=4)i=D[n.charCodeAt(s)],o=D[n.charCodeAt(s+1)],a=D[n.charCodeAt(s+2)],h=D[n.charCodeAt(s+3)],d[r++]=i<<2|o>>4,d[r++]=(o&15)<<4|a>>2,d[r++]=(a&3)<<6|h&63;return S},tt=typeof ArrayBuffer=="function",ze=(n,e)=>{if(typeof n!="string")return{type:"message",data:Oe(n,e)};const t=n.charAt(0);return t==="b"?{type:"message",data:nt(n.substring(1),e)}:W[t]?n.length>1?{type:W[t],data:n.substring(1)}:{type:W[t]}:je},nt=(n,e)=>{if(tt){const t=et(n);return Oe(t,e)}else return{base64:!0,data:n}},Oe=(n,e)=>{switch(e){case"blob":return n instanceof ArrayBuffer?new Blob([n]):n;case"arraybuffer":default:return n}},Le=String.fromCharCode(30),st=(n,e)=>{const t=n.length,s=new Array(t);let r=0;n.forEach((i,o)=>{Ce(i,!1,a=>{s[o]=a,++r===t&&e(s.join(Le))})})},rt=(n,e)=>{const t=n.split(Le),s=[];for(let r=0;r<t.length;r++){const i=ze(t[r],e);if(s.push(i),i.type==="error")break}return s},Pe=4;function u(n){if(n)return it(n)}function it(n){for(var e in u.prototype)n[e]=u.prototype[e];return n}u.prototype.on=u.prototype.addEventListener=function(n,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(e),this};u.prototype.once=function(n,e){function t(){this.off(n,t),e.apply(this,arguments)}return t.fn=e,this.on(n,t),this};u.prototype.off=u.prototype.removeListener=u.prototype.removeAllListeners=u.prototype.removeEventListener=function(n,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+n];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var s,r=0;r<t.length;r++)if(s=t[r],s===e||s.fn===e){t.splice(r,1);break}return t.length===0&&delete this._callbacks["$"+n],this};u.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+n],s=1;s<arguments.length;s++)e[s-1]=arguments[s];if(t){t=t.slice(0);for(var s=0,r=t.length;s<r;++s)t[s].apply(this,e)}return this};u.prototype.emitReserved=u.prototype.emit;u.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};u.prototype.hasListeners=function(n){return!!this.listeners(n).length};const A=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())();function Ne(n,...e){return e.reduce((t,s)=>(n.hasOwnProperty(s)&&(t[s]=n[s]),t),{})}const ot=setTimeout,at=clearTimeout;function G(n,e){e.useNativeTimers?(n.setTimeoutFn=ot.bind(A),n.clearTimeoutFn=at.bind(A)):(n.setTimeoutFn=setTimeout.bind(A),n.clearTimeoutFn=clearTimeout.bind(A))}const ct=1.33;function ht(n){return typeof n=="string"?ut(n):Math.ceil((n.byteLength||n.size)*ct)}function ut(n){let e=0,t=0;for(let s=0,r=n.length;s<r;s++)e=n.charCodeAt(s),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(s++,t+=4);return t}class lt extends Error{constructor(e,t,s){super(e),this.description=t,this.context=s,this.type="TransportError"}}class qe extends u{constructor(e){super(),this.writable=!1,G(this,e),this.opts=e,this.query=e.query,this.readyState="",this.socket=e.socket}onError(e,t,s){return super.emitReserved("error",new lt(e,t,s)),this}open(){return(this.readyState==="closed"||this.readyState==="")&&(this.readyState="opening",this.doOpen()),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=ze(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}}const Fe="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),Q=64,ft={};let ve=0,V=0,ge;function xe(n){let e="";do e=Fe[n%Q]+e,n=Math.floor(n/Q);while(n>0);return e}function De(){const n=xe(+new Date);return n!==ge?(ve=0,ge=n):n+"."+xe(ve++)}for(;V<Q;V++)ft[Fe[V]]=V;function Me(n){let e="";for(let t in n)n.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(n[t]));return e}function pt(n){let e={},t=n.split("&");for(let s=0,r=t.length;s<r;s++){let i=t[s].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}let Ie=!1;try{Ie=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const dt=Ie;function Ue(n){const e=n.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||dt))return new XMLHttpRequest}catch{}if(!e)try{return new A[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function mt(){}const yt=function(){return new Ue({xdomain:!1}).responseType!=null}();class vt extends qe{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const s=location.protocol==="https:";let r=location.port;r||(r=s?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port,this.xs=e.secure!==s}const t=e&&e.forceBase64;this.supportsBinary=yt&&!t}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let s=0;this.polling&&(s++,this.once("pollComplete",function(){--s||t()})),this.writable||(s++,this.once("drain",function(){--s||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=s=>{if(this.readyState==="opening"&&s.type==="open"&&this.onOpen(),s.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(s)};rt(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,st(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let e=this.query||{};const t=this.opts.secure?"https":"http";let s="";this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=De()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.opts.port&&(t==="https"&&Number(this.opts.port)!==443||t==="http"&&Number(this.opts.port)!==80)&&(s=":"+this.opts.port);const r=Me(e),i=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(i?"["+this.opts.hostname+"]":this.opts.hostname)+s+this.opts.path+(r.length?"?"+r:"")}request(e={}){return Object.assign(e,{xd:this.xd,xs:this.xs},this.opts),new E(this.uri(),e)}doWrite(e,t){const s=this.request({method:"POST",data:e});s.on("success",t),s.on("error",(r,i)=>{this.onError("xhr post error",r,i)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,s)=>{this.onError("xhr poll error",t,s)}),this.pollXhr=e}}class E extends u{constructor(e,t){super(),G(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.async=t.async!==!1,this.data=t.data!==void 0?t.data:null,this.create()}create(){const e=Ne(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;const t=this.xhr=new Ue(e);try{t.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){t.setDisableHeaderCheck&&t.setDisableHeaderCheck(!0);for(let s in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(s)&&t.setRequestHeader(s,this.opts.extraHeaders[s])}}catch{}if(this.method==="POST")try{t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{t.setRequestHeader("Accept","*/*")}catch{}"withCredentials"in t&&(t.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(t.timeout=this.opts.requestTimeout),t.onreadystatechange=()=>{t.readyState===4&&(t.status===200||t.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof t.status=="number"?t.status:0)},0))},t.send(this.data)}catch(s){this.setTimeoutFn(()=>{this.onError(s)},0);return}typeof document<"u"&&(this.index=E.requestsCount++,E.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=mt,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete E.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}E.requestsCount=0;E.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",we);else if(typeof addEventListener=="function"){const n="onpagehide"in A?"pagehide":"unload";addEventListener(n,we,!1)}}function we(){for(let n in E.requests)E.requests.hasOwnProperty(n)&&E.requests[n].abort()}const He=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0))(),Y=A.WebSocket||A.MozWebSocket,Ee=!0,gt="arraybuffer",be=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class xt extends qe{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,s=be?{}:Ne(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(s.headers=this.opts.extraHeaders);try{this.ws=Ee&&!be?t?new Y(e,t):new Y(e):new Y(e,t,s)}catch(r){return this.emitReserved("error",r)}this.ws.binaryType=this.socket.binaryType||gt,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const s=e[t],r=t===e.length-1;Ce(s,this.supportsBinary,i=>{const o={};try{Ee&&this.ws.send(i)}catch{}r&&He(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){let e=this.query||{};const t=this.opts.secure?"wss":"ws";let s="";this.opts.port&&(t==="wss"&&Number(this.opts.port)!==443||t==="ws"&&Number(this.opts.port)!==80)&&(s=":"+this.opts.port),this.opts.timestampRequests&&(e[this.opts.timestampParam]=De()),this.supportsBinary||(e.b64=1);const r=Me(e),i=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(i?"["+this.opts.hostname+"]":this.opts.hostname)+s+this.opts.path+(r.length?"?"+r:"")}check(){return!!Y}}const wt={websocket:xt,polling:vt},Et=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,bt=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function ee(n){const e=n,t=n.indexOf("["),s=n.indexOf("]");t!=-1&&s!=-1&&(n=n.substring(0,t)+n.substring(t,s).replace(/:/g,";")+n.substring(s,n.length));let r=Et.exec(n||""),i={},o=14;for(;o--;)i[bt[o]]=r[o]||"";return t!=-1&&s!=-1&&(i.source=e,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=Tt(i,i.path),i.queryKey=St(i,i.query),i}function Tt(n,e){const t=/\/{2,9}/g,s=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&s.splice(0,1),e.slice(-1)=="/"&&s.splice(s.length-1,1),s}function St(n,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(s,r,i){r&&(t[r]=i)}),t}let C=class extends u{constructor(e,t={}){super(),e&&typeof e=="object"&&(t=e,e=null),e?(e=ee(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=ee(t.host).host),G(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},t),this.opts.path=this.opts.path.replace(/\/$/,"")+"/",typeof this.opts.query=="string"&&(this.opts.query=pt(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=Pe,t.transport=e,this.id&&(t.sid=this.id);const s=Object.assign({},this.opts.transportOptions[e],this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new wt[e](s)}open(){let e;if(this.opts.rememberUpgrade&&C.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),s=!1;C.priorWebsocketSuccess=!1;const r=()=>{s||(t.send([{type:"ping",data:"probe"}]),t.once("packet",l=>{if(!s)if(l.type==="pong"&&l.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;C.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{s||this.readyState!=="closed"&&(d(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const m=new Error("probe error");m.transport=t.name,this.emitReserved("upgradeError",m)}}))};function i(){s||(s=!0,d(),t.close(),t=null)}const o=l=>{const m=new Error("probe error: "+l);m.transport=t.name,i(),this.emitReserved("upgradeError",m)};function a(){o("transport closed")}function h(){o("socket closed")}function S(l){t&&l.name!==t.name&&i()}const d=()=>{t.removeListener("open",r),t.removeListener("error",o),t.removeListener("close",a),this.off("close",h),this.off("upgrading",S)};t.once("open",r),t.once("error",o),t.once("close",a),this.once("close",h),this.once("upgrading",S),t.open()}onOpen(){if(this.readyState="open",C.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade&&this.transport.pause){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let s=0;s<this.writeBuffer.length;s++){const r=this.writeBuffer[s].data;if(r&&(t+=ht(r)),s>0&&t>this.maxPayload)return this.writeBuffer.slice(0,s);t+=2}return this.writeBuffer}write(e,t,s){return this.sendPacket("message",e,t,s),this}send(e,t,s){return this.sendPacket("message",e,t,s),this}sendPacket(e,t,s,r){if(typeof t=="function"&&(r=t,t=void 0),typeof s=="function"&&(r=s,s=null),this.readyState==="closing"||this.readyState==="closed")return;s=s||{},s.compress=s.compress!==!1;const i={type:e,data:t,options:s};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},s=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?s():e()}):this.upgrading?s():e()),this}onError(e){C.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let s=0;const r=e.length;for(;s<r;s++)~this.transports.indexOf(e[s])&&t.push(e[s]);return t}};C.protocol=Pe;function At(n,e="",t){let s=n;t=t||typeof location<"u"&&location,n==null&&(n=t.protocol+"//"+t.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=t.protocol+n:n=t.host+n),/^(https?|wss?):\/\//.test(n)||(typeof t<"u"?n=t.protocol+"//"+n:n="https://"+n),s=ee(n)),s.port||(/^(http|ws)$/.test(s.protocol)?s.port="80":/^(http|ws)s$/.test(s.protocol)&&(s.port="443")),s.path=s.path||"/";const i=s.host.indexOf(":")!==-1?"["+s.host+"]":s.host;return s.id=s.protocol+"://"+i+":"+s.port+e,s.href=s.protocol+"://"+i+(t&&t.port===s.port?"":":"+s.port),s}const _t=typeof ArrayBuffer=="function",Rt=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,Ve=Object.prototype.toString,Bt=typeof Blob=="function"||typeof Blob<"u"&&Ve.call(Blob)==="[object BlobConstructor]",kt=typeof File=="function"||typeof File<"u"&&Ve.call(File)==="[object FileConstructor]";function ce(n){return _t&&(n instanceof ArrayBuffer||Rt(n))||Bt&&n instanceof Blob||kt&&n instanceof File}function $(n,e){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let t=0,s=n.length;t<s;t++)if($(n[t]))return!0;return!1}if(ce(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return $(n.toJSON(),!0);for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&$(n[t]))return!0;return!1}function Ct(n){const e=[],t=n.data,s=n;return s.data=te(t,e),s.attachments=e.length,{packet:s,buffers:e}}function te(n,e){if(!n)return n;if(ce(n)){const t={_placeholder:!0,num:e.length};return e.push(n),t}else if(Array.isArray(n)){const t=new Array(n.length);for(let s=0;s<n.length;s++)t[s]=te(n[s],e);return t}else if(typeof n=="object"&&!(n instanceof Date)){const t={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=te(n[s],e));return t}return n}function zt(n,e){return n.data=ne(n.data,e),delete n.attachments,n}function ne(n,e){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<e.length)return e[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let t=0;t<n.length;t++)n[t]=ne(n[t],e);else if(typeof n=="object")for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&(n[t]=ne(n[t],e));return n}const Ot=5;var c;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(c||(c={}));class Lt{constructor(e){this.replacer=e}encode(e){return(e.type===c.EVENT||e.type===c.ACK)&&$(e)?this.encodeAsBinary({type:e.type===c.EVENT?c.BINARY_EVENT:c.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===c.BINARY_EVENT||e.type===c.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Ct(e),s=this.encodeAsString(t.packet),r=t.buffers;return r.unshift(s),r}}class he extends u{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const s=t.type===c.BINARY_EVENT;s||t.type===c.BINARY_ACK?(t.type=s?c.EVENT:c.ACK,this.reconstructor=new Pt(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(ce(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const s={type:Number(e.charAt(0))};if(c[s.type]===void 0)throw new Error("unknown packet type "+s.type);if(s.type===c.BINARY_EVENT||s.type===c.BINARY_ACK){const i=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(i,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");s.attachments=Number(o)}if(e.charAt(t+1)==="/"){const i=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););s.nsp=e.substring(i,t)}else s.nsp="/";const r=e.charAt(t+1);if(r!==""&&Number(r)==r){const i=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}s.id=Number(e.substring(i,t+1))}if(e.charAt(++t)){const i=this.tryParse(e.substr(t));if(he.isPayloadValid(s.type,i))s.data=i;else throw new Error("invalid payload")}return s}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case c.CONNECT:return typeof t=="object";case c.DISCONNECT:return t===void 0;case c.CONNECT_ERROR:return typeof t=="string"||typeof t=="object";case c.EVENT:case c.BINARY_EVENT:return Array.isArray(t)&&t.length>0;case c.ACK:case c.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Pt{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=zt(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Nt=Object.freeze(Object.defineProperty({__proto__:null,Decoder:he,Encoder:Lt,get PacketType(){return c},protocol:Ot},Symbol.toStringTag,{value:"Module"}));function g(n,e,t){return n.on(e,t),function(){n.off(e,t)}}const qt=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Ye extends u{constructor(e,t,s){super(),this.connected=!1,this.receiveBuffer=[],this.sendBuffer=[],this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,s&&s.auth&&(this.auth=s.auth),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[g(e,"open",this.onopen.bind(this)),g(e,"packet",this.onpacket.bind(this)),g(e,"error",this.onerror.bind(this)),g(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(qt.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');t.unshift(e);const s={type:c.EVENT,data:t};if(s.options={},s.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const o=this.ids++,a=t.pop();this._registerAckCallback(o,a),s.id=o}const r=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!r||!this.connected)||(this.connected?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(e,t){const s=this.flags.timeout;if(s===void 0){this.acks[e]=t;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let i=0;i<this.sendBuffer.length;i++)this.sendBuffer[i].id===e&&this.sendBuffer.splice(i,1);t.call(this,new Error("operation has timed out"))},s);this.acks[e]=(...i)=>{this.io.clearTimeoutFn(r),t.apply(this,[null,...i])}}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this.packet({type:c.CONNECT,data:e})}):this.packet({type:c.CONNECT,data:this.auth})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case c.CONNECT:if(e.data&&e.data.sid){const r=e.data.sid;this.onconnect(r)}else this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case c.EVENT:case c.BINARY_EVENT:this.onevent(e);break;case c.ACK:case c.BINARY_ACK:this.onack(e);break;case c.DISCONNECT:this.ondisconnect();break;case c.CONNECT_ERROR:this.destroy();const s=new Error(e.data.message);s.data=e.data.data,this.emitReserved("connect_error",s);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const s of t)s.apply(this,e)}super.emit.apply(this,e)}ack(e){const t=this;let s=!1;return function(...r){s||(s=!0,t.packet({type:c.ACK,id:e,data:r}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e){this.id=e,this.connected=!0,this.emitBuffered(),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:c.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let s=0;s<t.length;s++)if(e===t[s])return t.splice(s,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let s=0;s<t.length;s++)if(e===t[s])return t.splice(s,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const s of t)s.apply(this,e.data)}}}function N(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}N.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*n);n=Math.floor(e*10)&1?n+t:n-t}return Math.min(n,this.max)|0};N.prototype.reset=function(){this.attempts=0};N.prototype.setMin=function(n){this.ms=n};N.prototype.setMax=function(n){this.max=n};N.prototype.setJitter=function(n){this.jitter=n};class se extends u{constructor(e,t){var s;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,G(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((s=t.randomizationFactor)!==null&&s!==void 0?s:.5),this.backoff=new N({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const r=t.parser||Nt;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new C(this.uri,this.opts);const t=this.engine,s=this;this._readyState="opening",this.skipReconnect=!1;const r=g(t,"open",function(){s.onopen(),e&&e()}),i=g(t,"error",o=>{s.cleanup(),s._readyState="closed",this.emitReserved("error",o),e?e(o):s.maybeReconnectOnOpen()});if(this._timeout!==!1){const o=this._timeout;o===0&&r();const a=this.setTimeoutFn(()=>{r(),t.close(),t.emit("error",new Error("timeout"))},o);this.opts.autoUnref&&a.unref(),this.subs.push(function(){clearTimeout(a)})}return this.subs.push(r),this.subs.push(i),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(g(e,"ping",this.onping.bind(this)),g(e,"data",this.ondata.bind(this)),g(e,"error",this.onerror.bind(this)),g(e,"close",this.onclose.bind(this)),g(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){He(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let s=this.nsps[e];return s||(s=new Ye(this,e,t),this.nsps[e]=s),s}_destroy(e){const t=Object.keys(this.nsps);for(const s of t)if(this.nsps[s].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let s=0;s<t.length;s++)this.engine.write(t[s],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const s=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(r=>{r?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",r)):e.onreconnect()}))},t);this.opts.autoUnref&&s.unref(),this.subs.push(function(){clearTimeout(s)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const F={};function K(n,e){typeof n=="object"&&(e=n,n=void 0),e=e||{};const t=At(n,e.path||"/socket.io"),s=t.source,r=t.id,i=t.path,o=F[r]&&i in F[r].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let h;return a?h=new se(s,e):(F[r]||(F[r]=new se(s,e)),h=F[r]),t.query&&!e.query&&(e.query=t.queryKey),h.socket(t.path,e)}Object.assign(K,{Manager:se,Socket:Ye,io:K,connect:K});const Ft="http://localhost:3000",Te=K(Ft);Te.on("connect",()=>{console.log(Te.id)});var P=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var n=0,e=arguments.length;e--;)n+=arguments[e]*arguments[e];return Math.sqrt(n)});function M(){var n=new P(3);return P!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function Xe(n,e,t){var s=new P(3);return s[0]=n,s[1]=e,s[2]=t,s}function re(n,e,t,s){return n[0]=e,n[1]=t,n[2]=s,n}function Dt(n,e,t){return n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n}function Se(n,e,t){return n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n}function Mt(n,e){var t=e[0],s=e[1],r=e[2],i=t*t+s*s+r*r;return i>0&&(i=1/Math.sqrt(i)),n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n}function It(n,e,t){var s=e[0],r=e[1],i=e[2],o=t[0],a=t[1],h=t[2];return n[0]=r*h-i*a,n[1]=i*o-s*h,n[2]=s*a-r*o,n}var Ut=Dt;(function(){var n=M();return function(e,t,s,r,i,o){var a,h;for(t||(t=3),s||(s=0),r?h=Math.min(r*t+s,e.length):h=e.length,a=s;a<h;a+=t)n[0]=e[a],n[1]=e[a+1],n[2]=e[a+2],i(n,n,o),e[a]=n[0],e[a+1]=n[1],e[a+2]=n[2];return e}})();function Ht(){var n=new P(2);return P!=Float32Array&&(n[0]=0,n[1]=0),n}function Ae(n,e){var t=new P(2);return t[0]=n,t[1]=e,t}function Vt(n,e){var t=e[0]-n[0],s=e[1]-n[1];return Math.hypot(t,s)}(function(){var n=Ht();return function(e,t,s,r,i,o){var a,h;for(t||(t=2),s||(s=0),r?h=Math.min(r*t+s,e.length):h=e.length,a=s;a<h;a+=t)n[0]=e[a],n[1]=e[a+1],i(n,n,o),e[a]=n[0],e[a+1]=n[1];return e}})();function ie(n,e,t){let s=[_e(n,e,n.VERTEX_SHADER),_e(n,t,n.FRAGMENT_SHADER)];return Yt(n,s)}function _e(n,e,t){let s=n.createShader(t);if(s){if(n.shaderSource(s,e),n.compileShader(s),n.getShaderParameter(s,n.COMPILE_STATUS))return s;{const i=n.getShaderInfoLog(s);throw console.log("shader source:",e),new Error("Error when compiling shader:"+i)}}else throw new Error("WebGL could not create shader object")}function Yt(n,e){let t=n.createProgram();if(t!==null){if(e.forEach(r=>{n.attachShader(t,r)}),n.linkProgram(t),n.getProgramParameter(t,n.LINK_STATUS))return t;{const r=n.getProgramInfoLog(t);throw new Error("Error when linking shaders:"+r)}}else throw new Error("WebGL could not create program object")}function oe(n,e){return new Proxy({},{get(t,s,r){let i=t[s];return i==null&&(t[s]=i=n.getUniformLocation(e,s)),i}})}var Xt=`#version 300 es

precision highp float; 

layout(location = 0) in vec2 vertex; 

uniform float time; 

uniform vec3 camStraight; 

uniform vec3 camRight; 
uniform vec3 camUp;

out vec3 ray;

void main() {
  ray = camStraight + camRight * vertex.x + camUp * vertex.y;
  gl_Position = vec4(vertex, 0, 1);
}`,Wt=`#version 300 es

precision highp float;

uniform vec3 camPosition;
uniform float time;

uniform vec2 swipeA;
uniform vec2 swipeB;

uniform vec3 touchManipulationState;

in vec3 ray;

out vec4 rgba;

float sdf(vec3);

vec3 getNormal( in vec3 p ) 
{
    const float eps = 0.0001; 
    const vec2 h = vec2(eps,0);
    return normalize( vec3(sdf(p+h.xyy) - sdf(p-h.xyy),
                           sdf(p+h.yxy) - sdf(p-h.yxy),
                           sdf(p+h.yyx) - sdf(p-h.yyx) ) );
}

vec3 sky(vec3 v) {
  
  return vec3(v * 0.5 + 0.5);
}

const vec3 colorInside = vec3(0.1, 0.1, 0.3);
const vec3 colorOutside = vec3(1, 0.7, 0.5);
const vec3 scanColor = vec3(0.3,0.5,0.7);

void main() {
  vec3 rayDir = normalize(ray);

  vec3 rgb = sky(rayDir);

  
  float z = 0.;
  vec3 pos = camPosition;
  float d = 0.;
  float a = 0.;
  float b = 0.;
  float xyAngle;

  vec3 color = vec3(1);
  vec3 normal;
  for (int s = 0; s < 50; s++) {
    d = sdf(pos) * 0.5;
    if(d < 0.01) {
      a = 0.1 + pow(0.9, z);
      b = clamp(length(pos), 0., 1.);

      
      normal = getNormal(pos);
      color = 0.5 * (
        mix(colorInside, colorOutside, b) +
        clamp(pos * 0.5 + 0.5, 0., 1.)
      );
      color += max(0., dot(normal, vec3(-1,0.3,0))) * 0.5 * vec3(1.0,0.9,0.6);
      
      bool s1 = swipeA.x * pos.y <= pos.x * swipeA.y;
      bool s2 = pos.x * swipeB.y <= swipeB.x * pos.y;
      if(s1 && s2 || !s1 && !s2) {
        color += scanColor;
      }
      rgb = mix(rgb, color, a);
      break;
    }
    else if (d > 20.) {
      
      break;
    }
    d += 0.003;
    pos += rayDir * d;
    z += d;
  }

  rgba = vec4(rgb, 1.0);
}

float snoise(vec4);

vec3 rotateY(vec3 v, float angle) {
    float s = sin(angle);
    float c = cos(angle);
    mat3 m = mat3(c, 0, -s, 0, 1, 0, s, 0, c);
    return m * v;
}

float diamonds(vec3 p, float scale) {
  p *= scale;
  return (
    abs(mod(p.x, 2.) - 1.) +
    abs(mod(p.y, 2.) - 1.) +
    abs(mod(p.z, 2.) - 1.)
  ) / scale;
}

float bumps(vec3 p, float scale) {
  p = mod(scale * p, 2.) - 1.;
  return length(p) / scale;
}

float sdTorus( vec3 p, vec2 t )
{
  vec2 q = vec2(length(p.xz)-t.x,p.y);
  return length(q)-t.y;
}

float sdBox( vec3 p, vec3 b )
{
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}

float sdTriPrism( vec3 p, vec2 h )
{
  vec3 q = abs(p);
  return max(q.z-h.y,max(q.x*0.866025+p.y*0.5,-p.y)-h.x*0.5);
}

float sdf(in vec3 p) {
  
  
  p = rotateY(p, p.y*1.);
  return sdBox(p, vec3(touchManipulationState.x)) - 0.1;
  
  
  
  
  
  
  
  
  
  
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0; }

float mod289(float x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0; }

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+10.0)*x);
}

float permute(float x) {
     return mod289(((x*34.0)+10.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float taylorInvSqrt(float r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 grad4(float j, vec4 ip)
  {
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; 

  return p;
  }
						

#define F4 0.309016994374947451

float snoise4d(vec4 v)
  {
  const vec4  C = vec4( 0.138196601125011,  
                        0.276393202250021,  
                        0.414589803375032,  
                       -0.447213595499958); 

  vec4 i  = floor(v + dot(v, vec4(F4)) );
  vec4 x0 = v -   i + dot(i, C.xxxx);

  vec4 i0;
  vec3 isX = step( x0.yzw, x0.xxx );
  vec3 isYZ = step( x0.zww, x0.yyz );

  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;

  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;
  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  
  vec4 i3 = clamp( i0, 0.0, 1.0 );
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  
  
  
  
  
  vec4 x1 = x0 - i1 + C.xxxx;
  vec4 x2 = x0 - i2 + C.yyyy;
  vec4 x3 = x0 - i3 + C.zzzz;
  vec4 x4 = x0 + C.wwww;

  i = mod289(i); 
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute( permute( permute( permute (
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));

  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

  }`,$t=`#version 300 es

precision highp float; 

layout(location = 0) in vec2 vertex; 

out vec2 uv;

void main() {
  uv = vertex * 0.5 + 0.5;
  gl_Position = vec4(vertex, 0, 1);
}`,Kt=`#version 300 es

precision highp float; 

uniform sampler2D samples;
uniform float bufferSize;
uniform float sqrtBufferSize;

uniform float periodBegin; 
uniform float periodLength; 

uniform float center;
uniform float normalizeFactor; 

const float lineWidth = 0.001; 
const vec3 lineColor = vec3(0.1, 0.1, 0.1);

const float waveHeight = 0.2;
const float waveHeightHalf = waveHeight * 0.5;
const float oneMinusWaveHeightHalf = 1.0 - waveHeightHalf;

in vec2 uv;

out vec4 rgba; 

float getSampleValue(float sampleIndex) {
  float ix = mod(sampleIndex, sqrtBufferSize);
  float iy = floor(sampleIndex / sqrtBufferSize); 

  int iRgba = int(mod(ix, 4.)); 
  ix = floor(ix / 4.);

  vec4 fourSamples = texture(samples, (vec2(ix * 4., iy) + vec2(0.5)) / sqrtBufferSize); 

  float s = fourSamples[iRgba];

  
  s = (s - center) * normalizeFactor;

  return (s);
}

bool isInside(float center, float y, float v) {
  float relativeY = y - center;
  float scaledV = v * waveHeightHalf;
  return (
    relativeY > scaledV && relativeY < 0. ||
    relativeY < scaledV && relativeY > 0.
  );
}

void main() {
  
  float bufferValue = getSampleValue(
    uv.x * bufferSize - 0.5
  );

  
  float periodValue = getSampleValue(
    periodBegin + periodLength * uv.x - 0.5
  );

  
  if(
    uv.y > oneMinusWaveHeightHalf - lineWidth && uv.y < oneMinusWaveHeightHalf + lineWidth || 
    uv.y > waveHeightHalf - lineWidth && uv.y < waveHeightHalf + lineWidth
  ) {
    rgba = vec4(lineColor, 1.0); 
  } else if(isInside(waveHeightHalf, uv.y, bufferValue)) {
    rgba = vec4(0.3,0,0.1,0.5); 
  } else if(isInside(oneMinusWaveHeightHalf, uv.y, periodValue)) {
    rgba = vec4(0.0,0.1,0.5,0.5); 
  } else {
    discard; 
  } 
}`,Gt=`#version 300 es

precision highp float;

uniform float sqrtBufferSize;
uniform float oneByBufferSize;

uniform float startAngle;
uniform float endAngle;

uniform float planeStartAngle;
uniform float planeEndAngle;

uniform float radius;

uniform vec3 touchManipulationState;

in vec2 uv;

out vec4 rgba;

float sdf(vec3);

void main() {
  vec4 samples;
  for(int s = 0; s < 4; s++) {

    float ix = (uv.x - 0.5) * 4. + float(s);
    float i = ix + (uv.y - 0.5) * sqrtBufferSize;

    
    
    
    float planeAngle = mix(planeStartAngle, planeEndAngle, i * oneByBufferSize);
    vec3 planeX = vec3(
      cos(planeAngle),
      sin(planeAngle),
      0
    );
    vec3 planeZ = vec3(0, 0, 1);

    
    float angle = mix(startAngle, endAngle, i * oneByBufferSize);

    vec3 pos = planeX * cos(angle) + planeZ * sin(angle);

    vec3 dir = -pos;
    pos *= radius;

    float z = 0.;
    float d = 0.;

    for (int m = 0; m < 50; m++) {
      d = sdf(pos) * 0.3;
      pos += dir * d;
      z += d;
      if(d < 0.001 || z >= radius) {
        break;
      }
    }

    samples[s] = max(0., radius - z);
  }
  rgba = samples;
}

float snoise(vec4);

vec3 rotateY(vec3 v, float angle) {
    float s = sin(angle);
    float c = cos(angle);
    mat3 m = mat3(c, 0, -s, 0, 1, 0, s, 0, c);
    return m * v;
}

float diamonds(vec3 p, float scale) {
  p *= scale;
  return (
    abs(mod(p.x, 2.) - 1.) +
    abs(mod(p.y, 2.) - 1.) +
    abs(mod(p.z, 2.) - 1.)
  ) / scale;
}

float bumps(vec3 p, float scale) {
  p = mod(scale * p, 2.) - 1.;
  return length(p) / scale;
}

float sdTorus( vec3 p, vec2 t )
{
  vec2 q = vec2(length(p.xz)-t.x,p.y);
  return length(q)-t.y;
}

float sdBox( vec3 p, vec3 b )
{
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}

float sdTriPrism( vec3 p, vec2 h )
{
  vec3 q = abs(p);
  return max(q.z-h.y,max(q.x*0.866025+p.y*0.5,-p.y)-h.x*0.5);
}

float sdf(in vec3 p) {
  
  
  p = rotateY(p, p.y*1.);
  return sdBox(p, vec3(touchManipulationState.x)) - 0.1;
  
  
  
  
  
  
  
  
  
  
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0; }

float mod289(float x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0; }

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+10.0)*x);
}

float permute(float x) {
     return mod289(((x*34.0)+10.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float taylorInvSqrt(float r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 grad4(float j, vec4 ip)
  {
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; 

  return p;
  }
						

#define F4 0.309016994374947451

float snoise4d(vec4 v)
  {
  const vec4  C = vec4( 0.138196601125011,  
                        0.276393202250021,  
                        0.414589803375032,  
                       -0.447213595499958); 

  vec4 i  = floor(v + dot(v, vec4(F4)) );
  vec4 x0 = v -   i + dot(i, C.xxxx);

  vec4 i0;
  vec3 isX = step( x0.yzw, x0.xxx );
  vec3 isYZ = step( x0.zww, x0.yyz );

  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;

  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;
  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  
  vec4 i3 = clamp( i0, 0.0, 1.0 );
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  
  
  
  
  
  vec4 x1 = x0 - i1 + C.xxxx;
  vec4 x2 = x0 - i2 + C.yyyy;
  vec4 x3 = x0 - i3 + C.zzzz;
  vec4 x4 = x0 + C.wwww;

  i = mod289(i); 
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute( permute( permute( permute (
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));

  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

  }`,jt=`#version 300 es

precision highp float; 

layout(location = 0) in vec2 vertex; 

uniform float sqrtBufferSize;

out vec2 uv; 

void main() {
  uv = vertex * 0.5 + 0.5;
  uv.x *= sqrtBufferSize / 4.;
  uv.y *= sqrtBufferSize; 

  gl_Position = vec4(vertex, 0, 1);
}`;function Zt(n,e,t){let s=t.sqrtBufferSize**2;const r=ie(n,jt,Gt),i=oe(n,r);n.useProgram(r),n.uniform1f(i.sqrtBufferSize,t.sqrtBufferSize),n.uniform1f(i.oneByBufferSize,1/s),n.uniform1f(i.radius,t.radius);const o=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,o);const a=n.createTexture();n.bindTexture(n.TEXTURE_2D,a),n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,t.sqrtBufferSize/4,t.sqrtBufferSize,0,n.RGBA,n.FLOAT,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,a,0),n.clear(n.COLOR_BUFFER_BIT);const h=55,d=1/(4/(60/60));let l=42e3,m=0,_=0,R=0;const Z=()=>{n.bindFramebuffer(n.FRAMEBUFFER,o),n.viewport(0,0,t.sqrtBufferSize/4,t.sqrtBufferSize),n.disable(n.BLEND),n.useProgram(r),n.uniform1f(i.time,m);let y=s/l;_=m*d%1*Math.PI*2,R=y*d*Math.PI*2+_,n.uniform1f(i.planeStartAngle,_),n.uniform1f(i.planeEndAngle,R);let T=m*h%1*Math.PI*2,w=y*h*Math.PI*2+T;n.uniform1f(i.startAngle,T),n.uniform1f(i.endAngle,w),n.uniform3fv(i.touchManipulationState,t.touchManipulationState),m+=y,e();let v=new Float32Array(s);return n.readPixels(0,0,t.sqrtBufferSize/4,t.sqrtBufferSize,n.RGBA,n.FLOAT,v),v};let x=l/h,z=0,O=0,L=0,I=1,U=1;const H=document.getElementById("play");return H.addEventListener("click",()=>{H.style.display="none";const y=new AudioContext;l=y.sampleRate,y.audioWorklet.addModule("./worklet.js").then(()=>{const T=new GainNode(y,{gain:0});T.gain.setValueAtTime(0,y.currentTime+.1),T.gain.linearRampToValueAtTime(1,y.currentTime+2),T.connect(y.destination);const w=new AudioWorkletNode(y,"continous-buffer",{processorOptions:{sqrtBufferSize:t.sqrtBufferSize,numberOfBuffers:t.numberOfBuffers,avgFactor:1e-5,maxValue:t.radius}});w.connect(T),w.port.onmessage=v=>{if(v.data.type=="requestBuffer"){const B=Z();w.port.postMessage({type:"buffer",buffer:B.buffer},[B.buffer]),z+=1;let k=z-t.numberOfBuffers;for(x=l/h,L=k*s;O<L;)O+=x}v.data.type=="normalizeInfo"&&(I=v.data.center,U=v.data.normalizeFactor)},w.port.postMessage({type:"start"})})}),{sampleTex:a,isReady:()=>z>0,getPlaneSegment:()=>[_,R],getPeriodBeginAndLength:()=>[O-L,x],getNormalizeInfo:()=>({center:I,normalizeFactor:U})}}const j={tap:"tap",swipe:"swipe",pinch:"pinch",none:"none"};class ue{constructor(e,t){f(this,"type");f(this,"start");f(this,"prevs",[]);f(this,"current");f(this,"end");this.start=e,this.type=t}update(e){this.prevs.push(e),this.current=e}handleTouchEnd(e){this.update(e),this.end=e}_distBetween2Touches(e,t){const s=Ae(e.clientX,e.clientY),r=Ae(t.clientX,t.clientY);return Vt(s,r)}}const Jt=10,Re=1;class Qt extends ue{constructor(t){super(t,j.swipe);f(this,"_isSwipeEvent");this._isSwipeEvent=!1}get isSwipeEvent(){if(!this.current)return!1;if(this._isSwipeEvent)return!0;const t=this.start.changedTouches.length,s=this.current.changedTouches.length;return t!=Re||s!=Re||this.distToStart<Jt?!1:(this._isSwipeEvent=!0,!0)}get distToStart(){if(!this.current)return 0;const t=this.start.changedTouches[0],s=this.current.changedTouches[0];return this._distBetween2Touches(t,s)}}const en=2e3,tn=10,Be=1;class nn extends ue{constructor(e){super(e,j.tap)}get isTapEvent(){if(!this.end)return!1;const e=this.start.changedTouches.length,t=this.end.changedTouches.length;if(e!=Be||t!=Be)return!1;const s=this.start.timeStamp;if(this.end.timeStamp-s>en)return!1;const i=this.start.changedTouches[0],o=this.end.changedTouches[0];return this._distBetween2Touches(i,o)<=tn}}const sn=10,ke=2;class rn extends ue{constructor(t){super(t,j.pinch);f(this,"_isPinchEvent");this._isPinchEvent=!1}get isPinchEvent(){if(!this.current)return!1;if(this._isPinchEvent)return!0;const t=this.start.changedTouches.length,s=this.current.changedTouches.length;return t!=ke||s!=ke||Math.abs(this.distRelativeToStart)<sn?!1:(this._isPinchEvent=!0,!0)}get distRelativeToStart(){if(!this.current)return 0;const t=this.start.changedTouches[0],s=this.start.changedTouches[1],r=this.current.changedTouches[0],i=this.current.changedTouches[1],o=this._distBetween2Touches(t,s);return this._distBetween2Touches(r,i)-o}}class on{constructor(e,t){f(this,"touchTarget");f(this,"callbackFn");f(this,"tapDetector");f(this,"swipeDetector");f(this,"pinchDetector");this.callbackFn=t,this.touchTarget=e||document,this.addEventListeners()}addEventListeners(){this.touchTarget.addEventListener("touchstart",this.handleTouchStart.bind(this),!1),this.touchTarget.addEventListener("touchmove",this.handleTouchMove.bind(this),!1),this.touchTarget.addEventListener("touchcancel",this.handleTouches.bind(this),!1),this.touchTarget.addEventListener("touchend",this.handleTouchEnd.bind(this),!1)}handleTouchStart(e){this.tapDetector=new nn(e),this.swipeDetector=new Qt(e),this.pinchDetector=new rn(e)}handleTouchMove(e){var t,s;e.preventDefault(),(t=this.swipeDetector)==null||t.update(e),(s=this.pinchDetector)==null||s.update(e),this.detectGesture()}handleTouchEnd(e){var t,s,r;e.preventDefault(),(t=this.tapDetector)==null||t.handleTouchEnd(e),(s=this.swipeDetector)==null||s.handleTouchEnd(e),(r=this.pinchDetector)==null||r.handleTouchEnd(e),this.detectGesture()}detectGesture(){var e,t,s;(e=this.tapDetector)!=null&&e.isTapEvent&&this.callbackFn(this.tapDetector.type),(t=this.swipeDetector)!=null&&t.isSwipeEvent&&this.callbackFn(this.swipeDetector.type,this.swipeDetector.distToStart),(s=this.pinchDetector)!=null&&s.isPinchEvent&&this.callbackFn(this.pinchDetector.type,this.pinchDetector.distRelativeToStart)}handleTouches(e){e.preventDefault()}}const X=[.75,1],an=[0,1],cn=[0,1];class hn{constructor(){f(this,"tapState",X[0]);f(this,"swipeState",an[0]);f(this,"pinchState",cn[0]);f(this,"state",Xe(this.tapState,this.swipeState,this.pinchState))}toggleTapState(){this.tapState=X.indexOf(this.tapState)?X[0]:X[1],this.updateState()}updateState(){re(this.state,this.tapState,this.swipeState,this.pinchState)}}const ae=64,un=ae**2,ln=3;window.addEventListener("load",()=>{const n=document.getElementById("canvas"),e=n.getContext("webgl2",{alpha:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!0});if(!e){console.error("WebGL2 is not supported");return}if(!{float:e.getExtension("EXT_color_buffer_float")}.float){console.error("EXT_color_buffer_float is not supported");return}const s=new hn,r=fn(e),i=ie(e,Xt,Wt),o=oe(e,i);let a=[1,0],h=[1,0];const S=()=>{e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,n.width,n.height),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.disable(e.DEPTH_TEST),e.disable(e.BLEND),e.useProgram(i),e.uniform1f(o.time,q),e.uniform3fv(o.camPosition,w),e.uniform3fv(o.camStraight,v),e.uniform3fv(o.camRight,B),e.uniform3fv(o.camUp,k),L&&([a,h]=U().map(p=>[Math.cos(p),Math.sin(p)])),e.uniform2fv(o.swipeA,a),e.uniform2fv(o.swipeB,h),e.uniform3fv(o.touchManipulationState,s.state),r()},d=ie(e,$t,Kt),l=oe(e,d);e.useProgram(d),e.uniform1f(l.bufferSize,un),e.uniform1f(l.sqrtBufferSize,ae),e.uniform1i(l.samples,0);let m=0,_=0,R={center:1,normalizeFactor:1};const Z=()=>{e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,L),e.enable(e.BLEND),e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA),[m,_]=H(),R=y(),e.useProgram(d),e.uniform1f(l.periodBegin,m),e.uniform1f(l.periodLength,_),e.uniform1f(l.center,R.center),e.uniform1f(l.normalizeFactor,R.normalizeFactor),r()};let x=1,z=1;const O=()=>{let p=window.devicePixelRatio||1;n.width=Math.round(n.clientWidth*p),n.height=Math.round(n.clientHeight*p),x=n.width/n.height,z=.5/(x>1?1:x),e.useProgram(i),e.uniform1f(o.aspectRatio,x),e.uniform1f(o.nearPlaneSize,z)};O(),window.addEventListener("resize",O);let{sampleTex:L,isReady:I,getPlaneSegment:U,getPeriodBeginAndLength:H,getNormalizeInfo:y}=Zt(e,r,{radius:5,sqrtBufferSize:ae,numberOfBuffers:ln,touchManipulationState:s.state}),T=Xe(0,0,0),w=M(),v=M(),B=M(),k=M(),le=5;const We=()=>{re(w,le*Math.cos(q*.5),Math.sin(q*.33)*2.5,le*Math.sin(q*.5)),Ut(v,T,w),Mt(v,v),re(k,0,1,0),It(B,k,v);let p=Math.sqrt(.25/x),J=p*x;Se(B,B,J),Se(k,k,p)};let q=0,fe=0,pe=Date.now();const de=()=>{let p=Date.now();fe=(p-pe)/1e3,pe=p,q+=fe,We(),S(),I()&&Z(),requestAnimationFrame(de)};de();const $e=(p,J)=>{console.log("Gesture detected:",p,J),p===j.tap&&s.toggleTapState()};new on(n,$e)});function fn(n){let e=n.createVertexArray();n.bindVertexArray(e),n.enableVertexAttribArray(0);let t=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,t);{let s=[-1,-1,1,-1,-1,1,1,1];n.bufferData(n.ARRAY_BUFFER,new Float32Array(s),n.STATIC_DRAW),n.vertexAttribPointer(0,2,n.FLOAT,!1,0,0)}return()=>{n.bindVertexArray(e),n.drawArrays(n.TRIANGLE_STRIP,0,4)}}
