"use strict";var Zl=Object.create;var on=Object.defineProperty;var ec=Object.getOwnPropertyDescriptor;var tc=Object.getOwnPropertyNames;var sc=Object.getPrototypeOf,rc=Object.prototype.hasOwnProperty;var nc=(r,e)=>{for(var t in e)on(r,t,{get:e[t],enumerable:!0})},Hi=(r,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of tc(e))!rc.call(r,n)&&n!==t&&on(r,n,{get:()=>e[n],enumerable:!(s=ec(e,n))||s.enumerable});return r};var me=(r,e,t)=>(t=r!=null?Zl(sc(r)):{},Hi(e||!r||!r.__esModule?on(t,"default",{value:r,enumerable:!0}):t,r)),oc=r=>Hi(on({},"__esModule",{value:!0}),r);var Bu={};nc(Bu,{activate:()=>Nu,deactivate:()=>Lu});module.exports=oc(Bu);var Je=me(require("vscode"));var Vl=me(require("vscode"));function S(r,e,t,s,n){if(s==="m")throw new TypeError("Private method is not writable");if(s==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?r!==e||!n:!e.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s==="a"?n.call(r,t):n?n.value=t:e.set(r,t),t}function d(r,e,t,s){if(t==="a"&&!s)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?r!==e||!s:!e.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?s:t==="a"?s.call(r):s?s.value:e.get(r)}var Po=function(){let{crypto:r}=globalThis;if(r?.randomUUID)return Po=r.randomUUID.bind(r),r.randomUUID();let e=new Uint8Array(1),t=r?()=>r.getRandomValues(e)[0]:()=>Math.random()*255&255;return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,s=>(+s^t()&15>>+s/4).toString(16))};function dr(r){return typeof r=="object"&&r!==null&&("name"in r&&r.name==="AbortError"||"message"in r&&String(r.message).includes("FetchRequestCanceledException"))}var ur=r=>{if(r instanceof Error)return r;if(typeof r=="object"&&r!==null){try{if(Object.prototype.toString.call(r)==="[object Error]"){let e=new Error(r.message,r.cause?{cause:r.cause}:{});return r.stack&&(e.stack=r.stack),r.cause&&!e.cause&&(e.cause=r.cause),r.name&&(e.name=r.name),e}}catch{}try{return new Error(JSON.stringify(r))}catch{}}return new Error(r)};var _=class extends Error{},q=class r extends _{constructor(e,t,s,n){super(`${r.makeMessage(e,t,s)}`),this.status=e,this.headers=n,this.requestID=n?.get("x-request-id"),this.error=t;let o=t;this.code=o?.code,this.param=o?.param,this.type=o?.type}static makeMessage(e,t,s){let n=t?.message?typeof t.message=="string"?t.message:JSON.stringify(t.message):t?JSON.stringify(t):s;return e&&n?`${e} ${n}`:e?`${e} status code (no body)`:n||"(no status code or body)"}static generate(e,t,s,n){if(!e||!n)return new Ge({message:s,cause:ur(t)});let o=t?.error;return e===400?new zt(e,o,s,n):e===401?new Yt(e,o,s,n):e===403?new Qt(e,o,s,n):e===404?new Zt(e,o,s,n):e===409?new es(e,o,s,n):e===422?new ts(e,o,s,n):e===429?new ss(e,o,s,n):e>=500?new rs(e,o,s,n):new r(e,o,s,n)}},U=class extends q{constructor({message:e}={}){super(void 0,void 0,e||"Request was aborted.",void 0)}},Ge=class extends q{constructor({message:e,cause:t}){super(void 0,void 0,e||"Connection error.",void 0),t&&(this.cause=t)}},Ve=class extends Ge{constructor({message:e}={}){super({message:e??"Request timed out."})}},zt=class extends q{},Yt=class extends q{},Qt=class extends q{},Zt=class extends q{},es=class extends q{},ts=class extends q{},ss=class extends q{},rs=class extends q{},ns=class extends _{constructor(){super("Could not parse response content as the length limit was reached")}},os=class extends _{constructor(){super("Could not parse response content as the request was rejected by the content filter")}},we=class extends Error{constructor(e){super(e)}};var ac=/^[a-z][a-z0-9+.-]*:/i,Ui=r=>ac.test(r),re=r=>(re=Array.isArray,re(r)),Io=re;function So(r){return typeof r!="object"?{}:r??{}}function ji(r){if(!r)return!0;for(let e in r)return!1;return!0}function qi(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function pr(r){return r!=null&&typeof r=="object"&&!Array.isArray(r)}var Wi=(r,e)=>{if(typeof e!="number"||!Number.isInteger(e))throw new _(`${r} must be an integer`);if(e<0)throw new _(`${r} must be a positive integer`);return e};var Ki=r=>{try{return JSON.parse(r)}catch{return}};var ve=r=>new Promise(e=>setTimeout(e,r));var Xe="6.9.1";var Xi=()=>typeof window<"u"&&typeof window.document<"u"&&typeof navigator<"u";function lc(){return typeof Deno<"u"&&Deno.build!=null?"deno":typeof EdgeRuntime<"u"?"edge":Object.prototype.toString.call(typeof globalThis.process<"u"?globalThis.process:0)==="[object process]"?"node":"unknown"}var cc=()=>{let r=lc();if(r==="deno")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Xe,"X-Stainless-OS":Gi(Deno.build.os),"X-Stainless-Arch":Ji(Deno.build.arch),"X-Stainless-Runtime":"deno","X-Stainless-Runtime-Version":typeof Deno.version=="string"?Deno.version:Deno.version?.deno??"unknown"};if(typeof EdgeRuntime<"u")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Xe,"X-Stainless-OS":"Unknown","X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":"edge","X-Stainless-Runtime-Version":globalThis.process.version};if(r==="node")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Xe,"X-Stainless-OS":Gi(globalThis.process.platform??"unknown"),"X-Stainless-Arch":Ji(globalThis.process.arch??"unknown"),"X-Stainless-Runtime":"node","X-Stainless-Runtime-Version":globalThis.process.version??"unknown"};let e=dc();return e?{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Xe,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":`browser:${e.browser}`,"X-Stainless-Runtime-Version":e.version}:{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Xe,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":"unknown","X-Stainless-Runtime-Version":"unknown"}};function dc(){if(typeof navigator>"u"||!navigator)return null;let r=[{key:"edge",pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"chrome",pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"firefox",pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"safari",pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}];for(let{key:e,pattern:t}of r){let s=t.exec(navigator.userAgent);if(s){let n=s[1]||0,o=s[2]||0,i=s[3]||0;return{browser:e,version:`${n}.${o}.${i}`}}}return null}var Ji=r=>r==="x32"?"x32":r==="x86_64"||r==="x64"?"x64":r==="arm"?"arm":r==="aarch64"||r==="arm64"?"arm64":r?`other:${r}`:"unknown",Gi=r=>(r=r.toLowerCase(),r.includes("ios")?"iOS":r==="android"?"Android":r==="darwin"?"MacOS":r==="win32"?"Windows":r==="freebsd"?"FreeBSD":r==="openbsd"?"OpenBSD":r==="linux"?"Linux":r?`Other:${r}`:"Unknown"),Vi,zi=()=>Vi??(Vi=cc());function Yi(){if(typeof fetch<"u")return fetch;throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new OpenAI({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")}function Ao(...r){let e=globalThis.ReadableStream;if(typeof e>"u")throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");return new e(...r)}function an(r){let e=Symbol.asyncIterator in r?r[Symbol.asyncIterator]():r[Symbol.iterator]();return Ao({start(){},async pull(t){let{done:s,value:n}=await e.next();s?t.close():t.enqueue(n)},async cancel(){await e.return?.()}})}function Eo(r){if(r[Symbol.asyncIterator])return r;let e=r.getReader();return{async next(){try{let t=await e.read();return t?.done&&e.releaseLock(),t}catch(t){throw e.releaseLock(),t}},async return(){let t=e.cancel();return e.releaseLock(),await t,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}async function Qi(r){if(r===null||typeof r!="object")return;if(r[Symbol.asyncIterator]){await r[Symbol.asyncIterator]().return?.();return}let e=r.getReader(),t=e.cancel();e.releaseLock(),await t}var Zi=({headers:r,body:e})=>({bodyHeaders:{"content-type":"application/json"},body:JSON.stringify(e)});var ln="RFC3986",Ro=r=>String(r),cn={RFC1738:r=>String(r).replace(/%20/g,"+"),RFC3986:Ro},ko="RFC1738";var dn=(r,e)=>(dn=Object.hasOwn??Function.prototype.call.bind(Object.prototype.hasOwnProperty),dn(r,e)),xe=(()=>{let r=[];for(let e=0;e<256;++e)r.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return r})();var Co=1024,ea=(r,e,t,s,n)=>{if(r.length===0)return r;let o=r;if(typeof r=="symbol"?o=Symbol.prototype.toString.call(r):typeof r!="string"&&(o=String(r)),t==="iso-8859-1")return escape(o).replace(/%u[0-9a-f]{4}/gi,function(a){return"%26%23"+parseInt(a.slice(2),16)+"%3B"});let i="";for(let a=0;a<o.length;a+=Co){let l=o.length>=Co?o.slice(a,a+Co):o,p=[];for(let b=0;b<l.length;++b){let h=l.charCodeAt(b);if(h===45||h===46||h===95||h===126||h>=48&&h<=57||h>=65&&h<=90||h>=97&&h<=122||n===ko&&(h===40||h===41)){p[p.length]=l.charAt(b);continue}if(h<128){p[p.length]=xe[h];continue}if(h<2048){p[p.length]=xe[192|h>>6]+xe[128|h&63];continue}if(h<55296||h>=57344){p[p.length]=xe[224|h>>12]+xe[128|h>>6&63]+xe[128|h&63];continue}b+=1,h=65536+((h&1023)<<10|l.charCodeAt(b)&1023),p[p.length]=xe[240|h>>18]+xe[128|h>>12&63]+xe[128|h>>6&63]+xe[128|h&63]}i+=p.join("")}return i};function ta(r){return!r||typeof r!="object"?!1:!!(r.constructor&&r.constructor.isBuffer&&r.constructor.isBuffer(r))}function To(r,e){if(re(r)){let t=[];for(let s=0;s<r.length;s+=1)t.push(e(r[s]));return t}return e(r)}var ra={brackets(r){return String(r)+"[]"},comma:"comma",indices(r,e){return String(r)+"["+e+"]"},repeat(r){return String(r)}},na=function(r,e){Array.prototype.push.apply(r,re(e)?e:[e])},sa,W={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:ea,encodeValuesOnly:!1,format:ln,formatter:Ro,indices:!1,serializeDate(r){return(sa??(sa=Function.prototype.call.bind(Date.prototype.toISOString)))(r)},skipNulls:!1,strictNullHandling:!1};function fc(r){return typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r=="symbol"||typeof r=="bigint"}var Mo={};function oa(r,e,t,s,n,o,i,a,l,p,b,h,g,c,x,P,O,k){let v=r,L=k,T=0,te=!1;for(;(L=L.get(Mo))!==void 0&&!te;){let H=L.get(r);if(T+=1,typeof H<"u"){if(H===T)throw new RangeError("Cyclic object value");te=!0}typeof L.get(Mo)>"u"&&(T=0)}if(typeof p=="function"?v=p(e,v):v instanceof Date?v=g?.(v):t==="comma"&&re(v)&&(v=To(v,function(H){return H instanceof Date?g?.(H):H})),v===null){if(o)return l&&!P?l(e,W.encoder,O,"key",c):e;v=""}if(fc(v)||ta(v)){if(l){let H=P?e:l(e,W.encoder,O,"key",c);return[x?.(H)+"="+x?.(l(v,W.encoder,O,"value",c))]}return[x?.(e)+"="+x?.(String(v))]}let se=[];if(typeof v>"u")return se;let M;if(t==="comma"&&re(v))P&&l&&(v=To(v,l)),M=[{value:v.length>0?v.join(",")||null:void 0}];else if(re(p))M=p;else{let H=Object.keys(v);M=b?H.sort(b):H}let G=a?String(e).replace(/\./g,"%2E"):String(e),V=s&&re(v)&&v.length===1?G+"[]":G;if(n&&re(v)&&v.length===0)return V+"[]";for(let H=0;H<M.length;++H){let j=M[H],Bi=typeof j=="object"&&typeof j.value<"u"?j.value:v[j];if(i&&Bi===null)continue;let xo=h&&a?j.replace(/\./g,"%2E"):j,Ql=re(v)?typeof t=="function"?t(V,xo):V:V+(h?"."+xo:"["+xo+"]");k.set(r,T);let Di=new WeakMap;Di.set(Mo,k),na(se,oa(Bi,Ql,t,s,n,o,i,a,t==="comma"&&P&&re(v)?null:l,p,b,h,g,c,x,P,O,Di))}return se}function hc(r=W){if(typeof r.allowEmptyArrays<"u"&&typeof r.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof r.encodeDotInKeys<"u"&&typeof r.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(r.encoder!==null&&typeof r.encoder<"u"&&typeof r.encoder!="function")throw new TypeError("Encoder has to be a function.");let e=r.charset||W.charset;if(typeof r.charset<"u"&&r.charset!=="utf-8"&&r.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");let t=ln;if(typeof r.format<"u"){if(!dn(cn,r.format))throw new TypeError("Unknown format option provided.");t=r.format}let s=cn[t],n=W.filter;(typeof r.filter=="function"||re(r.filter))&&(n=r.filter);let o;if(r.arrayFormat&&r.arrayFormat in ra?o=r.arrayFormat:"indices"in r?o=r.indices?"indices":"repeat":o=W.arrayFormat,"commaRoundTrip"in r&&typeof r.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");let i=typeof r.allowDots>"u"?r.encodeDotInKeys?!0:W.allowDots:!!r.allowDots;return{addQueryPrefix:typeof r.addQueryPrefix=="boolean"?r.addQueryPrefix:W.addQueryPrefix,allowDots:i,allowEmptyArrays:typeof r.allowEmptyArrays=="boolean"?!!r.allowEmptyArrays:W.allowEmptyArrays,arrayFormat:o,charset:e,charsetSentinel:typeof r.charsetSentinel=="boolean"?r.charsetSentinel:W.charsetSentinel,commaRoundTrip:!!r.commaRoundTrip,delimiter:typeof r.delimiter>"u"?W.delimiter:r.delimiter,encode:typeof r.encode=="boolean"?r.encode:W.encode,encodeDotInKeys:typeof r.encodeDotInKeys=="boolean"?r.encodeDotInKeys:W.encodeDotInKeys,encoder:typeof r.encoder=="function"?r.encoder:W.encoder,encodeValuesOnly:typeof r.encodeValuesOnly=="boolean"?r.encodeValuesOnly:W.encodeValuesOnly,filter:n,format:t,formatter:s,serializeDate:typeof r.serializeDate=="function"?r.serializeDate:W.serializeDate,skipNulls:typeof r.skipNulls=="boolean"?r.skipNulls:W.skipNulls,sort:typeof r.sort=="function"?r.sort:null,strictNullHandling:typeof r.strictNullHandling=="boolean"?r.strictNullHandling:W.strictNullHandling}}function Oo(r,e={}){let t=r,s=hc(e),n,o;typeof s.filter=="function"?(o=s.filter,t=o("",t)):re(s.filter)&&(o=s.filter,n=o);let i=[];if(typeof t!="object"||t===null)return"";let a=ra[s.arrayFormat],l=a==="comma"&&s.commaRoundTrip;n||(n=Object.keys(t)),s.sort&&n.sort(s.sort);let p=new WeakMap;for(let g=0;g<n.length;++g){let c=n[g];s.skipNulls&&t[c]===null||na(i,oa(t[c],c,a,l,s.allowEmptyArrays,s.strictNullHandling,s.skipNulls,s.encodeDotInKeys,s.encode?s.encoder:null,s.filter,s.sort,s.allowDots,s.serializeDate,s.format,s.formatter,s.encodeValuesOnly,s.charset,p))}let b=i.join(s.delimiter),h=s.addQueryPrefix===!0?"?":"";return s.charsetSentinel&&(s.charset==="iso-8859-1"?h+="utf8=%26%2310003%3B&":h+="utf8=%E2%9C%93&"),b.length>0?h+b:""}function la(r){let e=0;for(let n of r)e+=n.length;let t=new Uint8Array(e),s=0;for(let n of r)t.set(n,s),s+=n.length;return t}var ia;function is(r){let e;return(ia??(e=new globalThis.TextEncoder,ia=e.encode.bind(e)))(r)}var aa;function Fo(r){let e;return(aa??(e=new globalThis.TextDecoder,aa=e.decode.bind(e)))(r)}var oe,ie,wt=class{constructor(){oe.set(this,void 0),ie.set(this,void 0),S(this,oe,new Uint8Array,"f"),S(this,ie,null,"f")}decode(e){if(e==null)return[];let t=e instanceof ArrayBuffer?new Uint8Array(e):typeof e=="string"?is(e):e;S(this,oe,la([d(this,oe,"f"),t]),"f");let s=[],n;for(;(n=gc(d(this,oe,"f"),d(this,ie,"f")))!=null;){if(n.carriage&&d(this,ie,"f")==null){S(this,ie,n.index,"f");continue}if(d(this,ie,"f")!=null&&(n.index!==d(this,ie,"f")+1||n.carriage)){s.push(Fo(d(this,oe,"f").subarray(0,d(this,ie,"f")-1))),S(this,oe,d(this,oe,"f").subarray(d(this,ie,"f")),"f"),S(this,ie,null,"f");continue}let o=d(this,ie,"f")!==null?n.preceding-1:n.preceding,i=Fo(d(this,oe,"f").subarray(0,o));s.push(i),S(this,oe,d(this,oe,"f").subarray(n.index),"f"),S(this,ie,null,"f")}return s}flush(){return d(this,oe,"f").length?this.decode(`
`):[]}};oe=new WeakMap,ie=new WeakMap;wt.NEWLINE_CHARS=new Set([`
`,"\r"]);wt.NEWLINE_REGEXP=/\r\n|[\n\r]/g;function gc(r,e){for(let n=e??0;n<r.length;n++){if(r[n]===10)return{preceding:n,index:n+1,carriage:!1};if(r[n]===13)return{preceding:n,index:n+1,carriage:!0}}return null}function ca(r){for(let s=0;s<r.length-1;s++){if(r[s]===10&&r[s+1]===10||r[s]===13&&r[s+1]===13)return s+2;if(r[s]===13&&r[s+1]===10&&s+3<r.length&&r[s+2]===13&&r[s+3]===10)return s+4}return-1}var pn={off:0,error:200,warn:300,info:400,debug:500},$o=(r,e,t)=>{if(r){if(qi(pn,r))return r;B(t).warn(`${e} was set to ${JSON.stringify(r)}, expected one of ${JSON.stringify(Object.keys(pn))}`)}};function fr(){}function un(r,e,t){return!e||pn[r]>pn[t]?fr:e[r].bind(e)}var yc={error:fr,warn:fr,info:fr,debug:fr},da=new WeakMap;function B(r){let e=r.logger,t=r.logLevel??"off";if(!e)return yc;let s=da.get(e);if(s&&s[0]===t)return s[1];let n={error:un("error",e,t),warn:un("warn",e,t),info:un("info",e,t),debug:un("debug",e,t)};return da.set(e,[t,n]),n}var Ce=r=>(r.options&&(r.options={...r.options},delete r.options.headers),r.headers&&(r.headers=Object.fromEntries((r.headers instanceof Headers?[...r.headers]:Object.entries(r.headers)).map(([e,t])=>[e,e.toLowerCase()==="authorization"||e.toLowerCase()==="cookie"||e.toLowerCase()==="set-cookie"?"***":t]))),"retryOfRequestLogID"in r&&(r.retryOfRequestLogID&&(r.retryOf=r.retryOfRequestLogID),delete r.retryOfRequestLogID),r);var hr,Pe=class r{constructor(e,t,s){this.iterator=e,hr.set(this,void 0),this.controller=t,S(this,hr,s,"f")}static fromSSEResponse(e,t,s){let n=!1,o=s?B(s):console;async function*i(){if(n)throw new _("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");n=!0;let a=!1;try{for await(let l of bc(e,t))if(!a){if(l.data.startsWith("[DONE]")){a=!0;continue}if(l.event===null||!l.event.startsWith("thread.")){let p;try{p=JSON.parse(l.data)}catch(b){throw o.error("Could not parse message into JSON:",l.data),o.error("From chunk:",l.raw),b}if(p&&p.error)throw new q(void 0,p.error,void 0,e.headers);yield p}else{let p;try{p=JSON.parse(l.data)}catch(b){throw console.error("Could not parse message into JSON:",l.data),console.error("From chunk:",l.raw),b}if(l.event=="error")throw new q(void 0,p.error,p.message,void 0);yield{event:l.event,data:p}}}a=!0}catch(l){if(dr(l))return;throw l}finally{a||t.abort()}}return new r(i,t,s)}static fromReadableStream(e,t,s){let n=!1;async function*o(){let a=new wt,l=Eo(e);for await(let p of l)for(let b of a.decode(p))yield b;for(let p of a.flush())yield p}async function*i(){if(n)throw new _("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");n=!0;let a=!1;try{for await(let l of o())a||l&&(yield JSON.parse(l));a=!0}catch(l){if(dr(l))return;throw l}finally{a||t.abort()}}return new r(i,t,s)}[(hr=new WeakMap,Symbol.asyncIterator)](){return this.iterator()}tee(){let e=[],t=[],s=this.iterator(),n=o=>({next:()=>{if(o.length===0){let i=s.next();e.push(i),t.push(i)}return o.shift()}});return[new r(()=>n(e),this.controller,d(this,hr,"f")),new r(()=>n(t),this.controller,d(this,hr,"f"))]}toReadableStream(){let e=this,t;return Ao({async start(){t=e[Symbol.asyncIterator]()},async pull(s){try{let{value:n,done:o}=await t.next();if(o)return s.close();let i=is(JSON.stringify(n)+`
`);s.enqueue(i)}catch(n){s.error(n)}},async cancel(){await t.return?.()}})}};async function*bc(r,e){if(!r.body)throw e.abort(),typeof globalThis.navigator<"u"&&globalThis.navigator.product==="ReactNative"?new _("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api"):new _("Attempted to iterate over a response with no body");let t=new No,s=new wt,n=Eo(r.body);for await(let o of _c(n))for(let i of s.decode(o)){let a=t.decode(i);a&&(yield a)}for(let o of s.flush()){let i=t.decode(o);i&&(yield i)}}async function*_c(r){let e=new Uint8Array;for await(let t of r){if(t==null)continue;let s=t instanceof ArrayBuffer?new Uint8Array(t):typeof t=="string"?is(t):t,n=new Uint8Array(e.length+s.length);n.set(e),n.set(s,e.length),e=n;let o;for(;(o=ca(e))!==-1;)yield e.slice(0,o),e=e.slice(o)}e.length>0&&(yield e)}var No=class{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(e){if(e.endsWith("\r")&&(e=e.substring(0,e.length-1)),!e){if(!this.event&&!this.data.length)return null;let o={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],o}if(this.chunks.push(e),e.startsWith(":"))return null;let[t,s,n]=wc(e,":");return n.startsWith(" ")&&(n=n.substring(1)),t==="event"?this.event=n:t==="data"&&this.data.push(n),null}};function wc(r,e){let t=r.indexOf(e);return t!==-1?[r.substring(0,t),e,r.substring(t+e.length)]:[r,"",""]}async function fn(r,e){let{response:t,requestLogID:s,retryOfRequestLogID:n,startTime:o}=e,i=await(async()=>{if(e.options.stream)return B(r).debug("response",t.status,t.url,t.headers,t.body),e.options.__streamClass?e.options.__streamClass.fromSSEResponse(t,e.controller,r):Pe.fromSSEResponse(t,e.controller,r);if(t.status===204)return null;if(e.options.__binaryResponse)return t;let l=t.headers.get("content-type")?.split(";")[0]?.trim();if(l?.includes("application/json")||l?.endsWith("+json")){let h=await t.json();return Lo(h,t)}return await t.text()})();return B(r).debug(`[${s}] response parsed`,Ce({retryOfRequestLogID:n,url:t.url,status:t.status,body:i,durationMs:Date.now()-o})),i}function Lo(r,e){return!r||typeof r!="object"||Array.isArray(r)?r:Object.defineProperty(r,"_request_id",{value:e.headers.get("x-request-id"),enumerable:!1})}var mr,vt=class r extends Promise{constructor(e,t,s=fn){super(n=>{n(null)}),this.responsePromise=t,this.parseResponse=s,mr.set(this,void 0),S(this,mr,e,"f")}_thenUnwrap(e){return new r(d(this,mr,"f"),this.responsePromise,async(t,s)=>Lo(e(await this.parseResponse(t,s),s),s.response))}asResponse(){return this.responsePromise.then(e=>e.response)}async withResponse(){let[e,t]=await Promise.all([this.parse(),this.asResponse()]);return{data:e,response:t,request_id:t.headers.get("x-request-id")}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(e=>this.parseResponse(d(this,mr,"f"),e))),this.parsedPromise}then(e,t){return this.parse().then(e,t)}catch(e){return this.parse().catch(e)}finally(e){return this.parse().finally(e)}};mr=new WeakMap;var hn,gr=class{constructor(e,t,s,n){hn.set(this,void 0),S(this,hn,e,"f"),this.options=n,this.response=t,this.body=s}hasNextPage(){return this.getPaginatedItems().length?this.nextPageRequestOptions()!=null:!1}async getNextPage(){let e=this.nextPageRequestOptions();if(!e)throw new _("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");return await d(this,hn,"f").requestAPIList(this.constructor,e)}async*iterPages(){let e=this;for(yield e;e.hasNextPage();)e=await e.getNextPage(),yield e}async*[(hn=new WeakMap,Symbol.asyncIterator)](){for await(let e of this.iterPages())for(let t of e.getPaginatedItems())yield t}},yr=class extends vt{constructor(e,t,s){super(e,t,async(n,o)=>new s(n,o.response,await fn(n,o),o.options))}async*[Symbol.asyncIterator](){let e=await this;for await(let t of e)yield t}},Ie=class extends gr{constructor(e,t,s,n){super(e,t,s,n),this.data=s.data||[],this.object=s.object}getPaginatedItems(){return this.data??[]}nextPageRequestOptions(){return null}},R=class extends gr{constructor(e,t,s,n){super(e,t,s,n),this.data=s.data||[],this.has_more=s.has_more||!1}getPaginatedItems(){return this.data??[]}hasNextPage(){return this.has_more===!1?!1:super.hasNextPage()}nextPageRequestOptions(){let e=this.getPaginatedItems(),t=e[e.length-1]?.id;return t?{...this.options,query:{...So(this.options.query),after:t}}:null}},Te=class extends gr{constructor(e,t,s,n){super(e,t,s,n),this.data=s.data||[],this.has_more=s.has_more||!1,this.last_id=s.last_id||""}getPaginatedItems(){return this.data??[]}hasNextPage(){return this.has_more===!1?!1:super.hasNextPage()}nextPageRequestOptions(){let e=this.last_id;return e?{...this.options,query:{...So(this.options.query),after:e}}:null}};var Ho=()=>{if(typeof File>"u"){let{process:r}=globalThis,e=typeof r?.versions?.node=="string"&&parseInt(r.versions.node.split("."))<20;throw new Error("`File` is not defined as a global, which is required for file uploads."+(e?" Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`.":""))}};function as(r,e,t){return Ho(),new File(r,e??"unknown_file",t)}function br(r){return(typeof r=="object"&&r!==null&&("name"in r&&r.name&&String(r.name)||"url"in r&&r.url&&String(r.url)||"filename"in r&&r.filename&&String(r.filename)||"path"in r&&r.path&&String(r.path))||"").split(/[\\/]/).pop()||void 0}var mn=r=>r!=null&&typeof r=="object"&&typeof r[Symbol.asyncIterator]=="function",Uo=async(r,e)=>Bo(r.body)?{...r,body:await pa(r.body,e)}:r,ae=async(r,e)=>({...r,body:await pa(r.body,e)}),ua=new WeakMap;function xc(r){let e=typeof r=="function"?r:r.fetch,t=ua.get(e);if(t)return t;let s=(async()=>{try{let n="Response"in e?e.Response:(await e("data:,")).constructor,o=new FormData;return o.toString()!==await new n(o).text()}catch{return!0}})();return ua.set(e,s),s}var pa=async(r,e)=>{if(!await xc(e))throw new TypeError("The provided fetch function does not support file uploads with the current global FormData class.");let t=new FormData;return await Promise.all(Object.entries(r||{}).map(([s,n])=>Do(t,s,n))),t},fa=r=>r instanceof Blob&&"name"in r,Pc=r=>typeof r=="object"&&r!==null&&(r instanceof Response||mn(r)||fa(r)),Bo=r=>{if(Pc(r))return!0;if(Array.isArray(r))return r.some(Bo);if(r&&typeof r=="object"){for(let e in r)if(Bo(r[e]))return!0}return!1},Do=async(r,e,t)=>{if(t!==void 0){if(t==null)throw new TypeError(`Received null for "${e}"; to pass null in FormData, you must use the string 'null'`);if(typeof t=="string"||typeof t=="number"||typeof t=="boolean")r.append(e,String(t));else if(t instanceof Response)r.append(e,as([await t.blob()],br(t)));else if(mn(t))r.append(e,as([await new Response(an(t)).blob()],br(t)));else if(fa(t))r.append(e,t,br(t));else if(Array.isArray(t))await Promise.all(t.map(s=>Do(r,e+"[]",s)));else if(typeof t=="object")await Promise.all(Object.entries(t).map(([s,n])=>Do(r,`${e}[${s}]`,n)));else throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${t} instead`)}};var ha=r=>r!=null&&typeof r=="object"&&typeof r.size=="number"&&typeof r.type=="string"&&typeof r.text=="function"&&typeof r.slice=="function"&&typeof r.arrayBuffer=="function",Ic=r=>r!=null&&typeof r=="object"&&typeof r.name=="string"&&typeof r.lastModified=="number"&&ha(r),Sc=r=>r!=null&&typeof r=="object"&&typeof r.url=="string"&&typeof r.blob=="function";async function gn(r,e,t){if(Ho(),r=await r,Ic(r))return r instanceof File?r:as([await r.arrayBuffer()],r.name);if(Sc(r)){let n=await r.blob();return e||(e=new URL(r.url).pathname.split(/[\\/]/).pop()),as(await jo(n),e,t)}let s=await jo(r);if(e||(e=br(r)),!t?.type){let n=s.find(o=>typeof o=="object"&&"type"in o&&o.type);typeof n=="string"&&(t={...t,type:n})}return as(s,e,t)}async function jo(r){let e=[];if(typeof r=="string"||ArrayBuffer.isView(r)||r instanceof ArrayBuffer)e.push(r);else if(ha(r))e.push(r instanceof Blob?r:await r.arrayBuffer());else if(mn(r))for await(let t of r)e.push(...await jo(t));else{let t=r?.constructor?.name;throw new Error(`Unexpected data type: ${typeof r}${t?`; constructor: ${t}`:""}${Ac(r)}`)}return e}function Ac(r){return typeof r!="object"||r===null?"":`; props: [${Object.getOwnPropertyNames(r).map(t=>`"${t}"`).join(", ")}]`}var m=class{constructor(e){this._client=e}};function ga(r){return r.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g,encodeURIComponent)}var ma=Object.freeze(Object.create(null)),Rc=(r=ga)=>function(t,...s){if(t.length===1)return t[0];let n=!1,o=[],i=t.reduce((b,h,g)=>{/[?#]/.test(h)&&(n=!0);let c=s[g],x=(n?encodeURIComponent:r)(""+c);return g!==s.length&&(c==null||typeof c=="object"&&c.toString===Object.getPrototypeOf(Object.getPrototypeOf(c.hasOwnProperty??ma)??ma)?.toString)&&(x=c+"",o.push({start:b.length+h.length,length:x.length,error:`Value of type ${Object.prototype.toString.call(c).slice(8,-1)} is not a valid path parameter`})),b+h+(g===s.length?"":x)},""),a=i.split(/[?#]/,1)[0],l=/(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi,p;for(;(p=l.exec(a))!==null;)o.push({start:p.index,length:p[0].length,error:`Value "${p[0]}" can't be safely passed as a path parameter`});if(o.sort((b,h)=>b.start-h.start),o.length>0){let b=0,h=o.reduce((g,c)=>{let x=" ".repeat(c.start-b),P="^".repeat(c.length);return b=c.start+c.length,g+x+P},"");throw new _(`Path parameters result in path with invalid segments:
${o.map(g=>g.error).join(`
`)}
${i}
${h}`)}return i},f=Rc(ga);var xt=class extends m{list(e,t={},s){return this._client.getAPIList(f`/chat/completions/${e}/messages`,R,{query:t,...s})}};function _r(r){return r!==void 0&&"function"in r&&r.function!==void 0}function wr(r){return r?.$brand==="auto-parseable-response-format"}function Pt(r){return r?.$brand==="auto-parseable-tool"}function ya(r,e){return!e||!qo(e)?{...r,choices:r.choices.map(t=>(_a(t.message.tool_calls),{...t,message:{...t.message,parsed:null,...t.message.tool_calls?{tool_calls:t.message.tool_calls}:void 0}}))}:vr(r,e)}function vr(r,e){let t=r.choices.map(s=>{if(s.finish_reason==="length")throw new ns;if(s.finish_reason==="content_filter")throw new os;return _a(s.message.tool_calls),{...s,message:{...s.message,...s.message.tool_calls?{tool_calls:s.message.tool_calls?.map(n=>Mc(e,n))??void 0}:void 0,parsed:s.message.content&&!s.message.refusal?Tc(e,s.message.content):null}}});return{...r,choices:t}}function Tc(r,e){return r.response_format?.type!=="json_schema"?null:r.response_format?.type==="json_schema"?"$parseRaw"in r.response_format?r.response_format.$parseRaw(e):JSON.parse(e):null}function Mc(r,e){let t=r.tools?.find(s=>_r(s)&&s.function?.name===e.function.name);return{...e,function:{...e.function,parsed_arguments:Pt(t)?t.$parseRaw(e.function.arguments):t?.function.strict?JSON.parse(e.function.arguments):null}}}function ba(r,e){if(!r||!("tools"in r)||!r.tools)return!1;let t=r.tools?.find(s=>_r(s)&&s.function?.name===e.function.name);return _r(t)&&(Pt(t)||t?.function.strict||!1)}function qo(r){return wr(r.response_format)?!0:r.tools?.some(e=>Pt(e)||e.type==="function"&&e.function.strict===!0)??!1}function _a(r){for(let e of r||[])if(e.type!=="function")throw new _(`Currently only \`function\` tool calls are supported; Received \`${e.type}\``)}function wa(r){for(let e of r??[]){if(e.type!=="function")throw new _(`Currently only \`function\` tool types support auto-parsing; Received \`${e.type}\``);if(e.function.strict!==!0)throw new _(`The \`${e.function.name}\` tool is not marked with \`strict: true\`. Only strict function tools can be auto-parsed`)}}var ls=r=>r?.role==="assistant",Wo=r=>r?.role==="tool";var Ko,yn,bn,xr,Pr,_n,Ir,Me,Sr,wn,vn,cs,va,ze=class{constructor(){Ko.add(this),this.controller=new AbortController,yn.set(this,void 0),bn.set(this,()=>{}),xr.set(this,()=>{}),Pr.set(this,void 0),_n.set(this,()=>{}),Ir.set(this,()=>{}),Me.set(this,{}),Sr.set(this,!1),wn.set(this,!1),vn.set(this,!1),cs.set(this,!1),S(this,yn,new Promise((e,t)=>{S(this,bn,e,"f"),S(this,xr,t,"f")}),"f"),S(this,Pr,new Promise((e,t)=>{S(this,_n,e,"f"),S(this,Ir,t,"f")}),"f"),d(this,yn,"f").catch(()=>{}),d(this,Pr,"f").catch(()=>{})}_run(e){setTimeout(()=>{e().then(()=>{this._emitFinal(),this._emit("end")},d(this,Ko,"m",va).bind(this))},0)}_connected(){this.ended||(d(this,bn,"f").call(this),this._emit("connect"))}get ended(){return d(this,Sr,"f")}get errored(){return d(this,wn,"f")}get aborted(){return d(this,vn,"f")}abort(){this.controller.abort()}on(e,t){return(d(this,Me,"f")[e]||(d(this,Me,"f")[e]=[])).push({listener:t}),this}off(e,t){let s=d(this,Me,"f")[e];if(!s)return this;let n=s.findIndex(o=>o.listener===t);return n>=0&&s.splice(n,1),this}once(e,t){return(d(this,Me,"f")[e]||(d(this,Me,"f")[e]=[])).push({listener:t,once:!0}),this}emitted(e){return new Promise((t,s)=>{S(this,cs,!0,"f"),e!=="error"&&this.once("error",s),this.once(e,t)})}async done(){S(this,cs,!0,"f"),await d(this,Pr,"f")}_emit(e,...t){if(d(this,Sr,"f"))return;e==="end"&&(S(this,Sr,!0,"f"),d(this,_n,"f").call(this));let s=d(this,Me,"f")[e];if(s&&(d(this,Me,"f")[e]=s.filter(n=>!n.once),s.forEach(({listener:n})=>n(...t))),e==="abort"){let n=t[0];!d(this,cs,"f")&&!s?.length&&Promise.reject(n),d(this,xr,"f").call(this,n),d(this,Ir,"f").call(this,n),this._emit("end");return}if(e==="error"){let n=t[0];!d(this,cs,"f")&&!s?.length&&Promise.reject(n),d(this,xr,"f").call(this,n),d(this,Ir,"f").call(this,n),this._emit("end")}}_emitFinal(){}};yn=new WeakMap,bn=new WeakMap,xr=new WeakMap,Pr=new WeakMap,_n=new WeakMap,Ir=new WeakMap,Me=new WeakMap,Sr=new WeakMap,wn=new WeakMap,vn=new WeakMap,cs=new WeakMap,Ko=new WeakSet,va=function(e){if(S(this,wn,!0,"f"),e instanceof Error&&e.name==="AbortError"&&(e=new U),e instanceof U)return S(this,vn,!0,"f"),this._emit("abort",e);if(e instanceof _)return this._emit("error",e);if(e instanceof Error){let t=new _(e.message);return t.cause=e,this._emit("error",t)}return this._emit("error",new _(String(e)))};function xa(r){return typeof r.parse=="function"}var ne,Jo,xn,Go,Vo,Xo,Pa,Ia,Oc=10,ds=class extends ze{constructor(){super(...arguments),ne.add(this),this._chatCompletions=[],this.messages=[]}_addChatCompletion(e){this._chatCompletions.push(e),this._emit("chatCompletion",e);let t=e.choices[0]?.message;return t&&this._addMessage(t),e}_addMessage(e,t=!0){if("content"in e||(e.content=null),this.messages.push(e),t){if(this._emit("message",e),Wo(e)&&e.content)this._emit("functionToolCallResult",e.content);else if(ls(e)&&e.tool_calls)for(let s of e.tool_calls)s.type==="function"&&this._emit("functionToolCall",s.function)}}async finalChatCompletion(){await this.done();let e=this._chatCompletions[this._chatCompletions.length-1];if(!e)throw new _("stream ended without producing a ChatCompletion");return e}async finalContent(){return await this.done(),d(this,ne,"m",Jo).call(this)}async finalMessage(){return await this.done(),d(this,ne,"m",xn).call(this)}async finalFunctionToolCall(){return await this.done(),d(this,ne,"m",Go).call(this)}async finalFunctionToolCallResult(){return await this.done(),d(this,ne,"m",Vo).call(this)}async totalUsage(){return await this.done(),d(this,ne,"m",Xo).call(this)}allChatCompletions(){return[...this._chatCompletions]}_emitFinal(){let e=this._chatCompletions[this._chatCompletions.length-1];e&&this._emit("finalChatCompletion",e);let t=d(this,ne,"m",xn).call(this);t&&this._emit("finalMessage",t);let s=d(this,ne,"m",Jo).call(this);s&&this._emit("finalContent",s);let n=d(this,ne,"m",Go).call(this);n&&this._emit("finalFunctionToolCall",n);let o=d(this,ne,"m",Vo).call(this);o!=null&&this._emit("finalFunctionToolCallResult",o),this._chatCompletions.some(i=>i.usage)&&this._emit("totalUsage",d(this,ne,"m",Xo).call(this))}async _createChatCompletion(e,t,s){let n=s?.signal;n&&(n.aborted&&this.controller.abort(),n.addEventListener("abort",()=>this.controller.abort())),d(this,ne,"m",Pa).call(this,t);let o=await e.chat.completions.create({...t,stream:!1},{...s,signal:this.controller.signal});return this._connected(),this._addChatCompletion(vr(o,t))}async _runChatCompletion(e,t,s){for(let n of t.messages)this._addMessage(n,!1);return await this._createChatCompletion(e,t,s)}async _runTools(e,t,s){let n="tool",{tool_choice:o="auto",stream:i,...a}=t,l=typeof o!="string"&&o.type==="function"&&o?.function?.name,{maxChatCompletions:p=Oc}=s||{},b=t.tools.map(c=>{if(Pt(c)){if(!c.$callback)throw new _("Tool given to `.runTools()` that does not have an associated function");return{type:"function",function:{function:c.$callback,name:c.function.name,description:c.function.description||"",parameters:c.function.parameters,parse:c.$parseRaw,strict:!0}}}return c}),h={};for(let c of b)c.type==="function"&&(h[c.function.name||c.function.function.name]=c.function);let g="tools"in t?b.map(c=>c.type==="function"?{type:"function",function:{name:c.function.name||c.function.function.name,parameters:c.function.parameters,description:c.function.description,strict:c.function.strict}}:c):void 0;for(let c of t.messages)this._addMessage(c,!1);for(let c=0;c<p;++c){let P=(await this._createChatCompletion(e,{...a,tool_choice:o,tools:g,messages:[...this.messages]},s)).choices[0]?.message;if(!P)throw new _("missing message in ChatCompletion response");if(!P.tool_calls?.length)return;for(let O of P.tool_calls){if(O.type!=="function")continue;let k=O.id,{name:v,arguments:L}=O.function,T=h[v];if(T){if(l&&l!==v){let G=`Invalid tool_call: ${JSON.stringify(v)}. ${JSON.stringify(l)} requested. Please try again`;this._addMessage({role:n,tool_call_id:k,content:G});continue}}else{let G=`Invalid tool_call: ${JSON.stringify(v)}. Available options are: ${Object.keys(h).map(V=>JSON.stringify(V)).join(", ")}. Please try again`;this._addMessage({role:n,tool_call_id:k,content:G});continue}let te;try{te=xa(T)?await T.parse(L):L}catch(G){let V=G instanceof Error?G.message:String(G);this._addMessage({role:n,tool_call_id:k,content:V});continue}let se=await T.function(te,this),M=d(this,ne,"m",Ia).call(this,se);if(this._addMessage({role:n,tool_call_id:k,content:M}),l)return}}}};ne=new WeakSet,Jo=function(){return d(this,ne,"m",xn).call(this).content??null},xn=function(){let e=this.messages.length;for(;e-- >0;){let t=this.messages[e];if(ls(t))return{...t,content:t.content??null,refusal:t.refusal??null}}throw new _("stream ended without producing a ChatCompletionMessage with role=assistant")},Go=function(){for(let e=this.messages.length-1;e>=0;e--){let t=this.messages[e];if(ls(t)&&t?.tool_calls?.length)return t.tool_calls.filter(s=>s.type==="function").at(-1)?.function}},Vo=function(){for(let e=this.messages.length-1;e>=0;e--){let t=this.messages[e];if(Wo(t)&&t.content!=null&&typeof t.content=="string"&&this.messages.some(s=>s.role==="assistant"&&s.tool_calls?.some(n=>n.type==="function"&&n.id===t.tool_call_id)))return t.content}},Xo=function(){let e={completion_tokens:0,prompt_tokens:0,total_tokens:0};for(let{usage:t}of this._chatCompletions)t&&(e.completion_tokens+=t.completion_tokens,e.prompt_tokens+=t.prompt_tokens,e.total_tokens+=t.total_tokens);return e},Pa=function(e){if(e.n!=null&&e.n>1)throw new _("ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.")},Ia=function(e){return typeof e=="string"?e:e===void 0?"undefined":JSON.stringify(e)};var Ar=class r extends ds{static runTools(e,t,s){let n=new r,o={...s,headers:{...s?.headers,"X-Stainless-Helper-Method":"runTools"}};return n._run(()=>n._runTools(e,t,o)),n}_addMessage(e,t=!0){super._addMessage(e,t),ls(e)&&e.content&&this._emit("content",e.content)}};var X={STR:1,NUM:2,ARR:4,OBJ:8,NULL:16,BOOL:32,NAN:64,INFINITY:128,MINUS_INFINITY:256,INF:384,SPECIAL:496,ATOM:499,COLLECTION:12,ALL:511},zo=class extends Error{},Yo=class extends Error{};function Fc(r,e=X.ALL){if(typeof r!="string")throw new TypeError(`expecting str, got ${typeof r}`);if(!r.trim())throw new Error(`${r} is empty`);return $c(r.trim(),e)}var $c=(r,e)=>{let t=r.length,s=0,n=g=>{throw new zo(`${g} at position ${s}`)},o=g=>{throw new Yo(`${g} at position ${s}`)},i=()=>(h(),s>=t&&n("Unexpected end of input"),r[s]==='"'?a():r[s]==="{"?l():r[s]==="["?p():r.substring(s,s+4)==="null"||X.NULL&e&&t-s<4&&"null".startsWith(r.substring(s))?(s+=4,null):r.substring(s,s+4)==="true"||X.BOOL&e&&t-s<4&&"true".startsWith(r.substring(s))?(s+=4,!0):r.substring(s,s+5)==="false"||X.BOOL&e&&t-s<5&&"false".startsWith(r.substring(s))?(s+=5,!1):r.substring(s,s+8)==="Infinity"||X.INFINITY&e&&t-s<8&&"Infinity".startsWith(r.substring(s))?(s+=8,1/0):r.substring(s,s+9)==="-Infinity"||X.MINUS_INFINITY&e&&1<t-s&&t-s<9&&"-Infinity".startsWith(r.substring(s))?(s+=9,-1/0):r.substring(s,s+3)==="NaN"||X.NAN&e&&t-s<3&&"NaN".startsWith(r.substring(s))?(s+=3,NaN):b()),a=()=>{let g=s,c=!1;for(s++;s<t&&(r[s]!=='"'||c&&r[s-1]==="\\");)c=r[s]==="\\"?!c:!1,s++;if(r.charAt(s)=='"')try{return JSON.parse(r.substring(g,++s-Number(c)))}catch(x){o(String(x))}else if(X.STR&e)try{return JSON.parse(r.substring(g,s-Number(c))+'"')}catch{return JSON.parse(r.substring(g,r.lastIndexOf("\\"))+'"')}n("Unterminated string literal")},l=()=>{s++,h();let g={};try{for(;r[s]!=="}";){if(h(),s>=t&&X.OBJ&e)return g;let c=a();h(),s++;try{let x=i();Object.defineProperty(g,c,{value:x,writable:!0,enumerable:!0,configurable:!0})}catch(x){if(X.OBJ&e)return g;throw x}h(),r[s]===","&&s++}}catch{if(X.OBJ&e)return g;n("Expected '}' at end of object")}return s++,g},p=()=>{s++;let g=[];try{for(;r[s]!=="]";)g.push(i()),h(),r[s]===","&&s++}catch{if(X.ARR&e)return g;n("Expected ']' at end of array")}return s++,g},b=()=>{if(s===0){r==="-"&&X.NUM&e&&n("Not sure what '-' is");try{return JSON.parse(r)}catch(c){if(X.NUM&e)try{return r[r.length-1]==="."?JSON.parse(r.substring(0,r.lastIndexOf("."))):JSON.parse(r.substring(0,r.lastIndexOf("e")))}catch{}o(String(c))}}let g=s;for(r[s]==="-"&&s++;r[s]&&!",]}".includes(r[s]);)s++;s==t&&!(X.NUM&e)&&n("Unterminated number literal");try{return JSON.parse(r.substring(g,s))}catch{r.substring(g,s)==="-"&&X.NUM&e&&n("Not sure what '-' is");try{return JSON.parse(r.substring(g,r.lastIndexOf("e")))}catch(x){o(String(x))}}},h=()=>{for(;s<t&&` 
\r	`.includes(r[s]);)s++};return i()},Qo=r=>Fc(r,X.ALL^X.NUM);var K,Oe,us,Ye,Zo,Pn,ei,ti,si,In,ri,Sa,It=class r extends ds{constructor(e){super(),K.add(this),Oe.set(this,void 0),us.set(this,void 0),Ye.set(this,void 0),S(this,Oe,e,"f"),S(this,us,[],"f")}get currentChatCompletionSnapshot(){return d(this,Ye,"f")}static fromReadableStream(e){let t=new r(null);return t._run(()=>t._fromReadableStream(e)),t}static createChatCompletion(e,t,s){let n=new r(t);return n._run(()=>n._runChatCompletion(e,{...t,stream:!0},{...s,headers:{...s?.headers,"X-Stainless-Helper-Method":"stream"}})),n}async _createChatCompletion(e,t,s){super._createChatCompletion;let n=s?.signal;n&&(n.aborted&&this.controller.abort(),n.addEventListener("abort",()=>this.controller.abort())),d(this,K,"m",Zo).call(this);let o=await e.chat.completions.create({...t,stream:!0},{...s,signal:this.controller.signal});this._connected();for await(let i of o)d(this,K,"m",ei).call(this,i);if(o.controller.signal?.aborted)throw new U;return this._addChatCompletion(d(this,K,"m",In).call(this))}async _fromReadableStream(e,t){let s=t?.signal;s&&(s.aborted&&this.controller.abort(),s.addEventListener("abort",()=>this.controller.abort())),d(this,K,"m",Zo).call(this),this._connected();let n=Pe.fromReadableStream(e,this.controller),o;for await(let i of n)o&&o!==i.id&&this._addChatCompletion(d(this,K,"m",In).call(this)),d(this,K,"m",ei).call(this,i),o=i.id;if(n.controller.signal?.aborted)throw new U;return this._addChatCompletion(d(this,K,"m",In).call(this))}[(Oe=new WeakMap,us=new WeakMap,Ye=new WeakMap,K=new WeakSet,Zo=function(){this.ended||S(this,Ye,void 0,"f")},Pn=function(t){let s=d(this,us,"f")[t.index];return s||(s={content_done:!1,refusal_done:!1,logprobs_content_done:!1,logprobs_refusal_done:!1,done_tool_calls:new Set,current_tool_call_index:null},d(this,us,"f")[t.index]=s,s)},ei=function(t){if(this.ended)return;let s=d(this,K,"m",Sa).call(this,t);this._emit("chunk",t,s);for(let n of t.choices){let o=s.choices[n.index];n.delta.content!=null&&o.message?.role==="assistant"&&o.message?.content&&(this._emit("content",n.delta.content,o.message.content),this._emit("content.delta",{delta:n.delta.content,snapshot:o.message.content,parsed:o.message.parsed})),n.delta.refusal!=null&&o.message?.role==="assistant"&&o.message?.refusal&&this._emit("refusal.delta",{delta:n.delta.refusal,snapshot:o.message.refusal}),n.logprobs?.content!=null&&o.message?.role==="assistant"&&this._emit("logprobs.content.delta",{content:n.logprobs?.content,snapshot:o.logprobs?.content??[]}),n.logprobs?.refusal!=null&&o.message?.role==="assistant"&&this._emit("logprobs.refusal.delta",{refusal:n.logprobs?.refusal,snapshot:o.logprobs?.refusal??[]});let i=d(this,K,"m",Pn).call(this,o);o.finish_reason&&(d(this,K,"m",si).call(this,o),i.current_tool_call_index!=null&&d(this,K,"m",ti).call(this,o,i.current_tool_call_index));for(let a of n.delta.tool_calls??[])i.current_tool_call_index!==a.index&&(d(this,K,"m",si).call(this,o),i.current_tool_call_index!=null&&d(this,K,"m",ti).call(this,o,i.current_tool_call_index)),i.current_tool_call_index=a.index;for(let a of n.delta.tool_calls??[]){let l=o.message.tool_calls?.[a.index];l?.type&&(l?.type==="function"?this._emit("tool_calls.function.arguments.delta",{name:l.function?.name,index:a.index,arguments:l.function.arguments,parsed_arguments:l.function.parsed_arguments,arguments_delta:a.function?.arguments??""}):(l?.type,void 0))}}},ti=function(t,s){if(d(this,K,"m",Pn).call(this,t).done_tool_calls.has(s))return;let o=t.message.tool_calls?.[s];if(!o)throw new Error("no tool call snapshot");if(!o.type)throw new Error("tool call snapshot missing `type`");if(o.type==="function"){let i=d(this,Oe,"f")?.tools?.find(a=>_r(a)&&a.function.name===o.function.name);this._emit("tool_calls.function.arguments.done",{name:o.function.name,index:s,arguments:o.function.arguments,parsed_arguments:Pt(i)?i.$parseRaw(o.function.arguments):i?.function.strict?JSON.parse(o.function.arguments):null})}else o.type},si=function(t){let s=d(this,K,"m",Pn).call(this,t);if(t.message.content&&!s.content_done){s.content_done=!0;let n=d(this,K,"m",ri).call(this);this._emit("content.done",{content:t.message.content,parsed:n?n.$parseRaw(t.message.content):null})}t.message.refusal&&!s.refusal_done&&(s.refusal_done=!0,this._emit("refusal.done",{refusal:t.message.refusal})),t.logprobs?.content&&!s.logprobs_content_done&&(s.logprobs_content_done=!0,this._emit("logprobs.content.done",{content:t.logprobs.content})),t.logprobs?.refusal&&!s.logprobs_refusal_done&&(s.logprobs_refusal_done=!0,this._emit("logprobs.refusal.done",{refusal:t.logprobs.refusal}))},In=function(){if(this.ended)throw new _("stream has ended, this shouldn't happen");let t=d(this,Ye,"f");if(!t)throw new _("request ended without sending any chunks");return S(this,Ye,void 0,"f"),S(this,us,[],"f"),Nc(t,d(this,Oe,"f"))},ri=function(){let t=d(this,Oe,"f")?.response_format;return wr(t)?t:null},Sa=function(t){var s,n,o,i;let a=d(this,Ye,"f"),{choices:l,...p}=t;a?Object.assign(a,p):a=S(this,Ye,{...p,choices:[]},"f");for(let{delta:b,finish_reason:h,index:g,logprobs:c=null,...x}of t.choices){let P=a.choices[g];if(P||(P=a.choices[g]={finish_reason:h,index:g,message:{},logprobs:c,...x}),c)if(!P.logprobs)P.logprobs=Object.assign({},c);else{let{content:se,refusal:M,...G}=c;Object.assign(P.logprobs,G),se&&((s=P.logprobs).content??(s.content=[]),P.logprobs.content.push(...se)),M&&((n=P.logprobs).refusal??(n.refusal=[]),P.logprobs.refusal.push(...M))}if(h&&(P.finish_reason=h,d(this,Oe,"f")&&qo(d(this,Oe,"f")))){if(h==="length")throw new ns;if(h==="content_filter")throw new os}if(Object.assign(P,x),!b)continue;let{content:O,refusal:k,function_call:v,role:L,tool_calls:T,...te}=b;if(Object.assign(P.message,te),k&&(P.message.refusal=(P.message.refusal||"")+k),L&&(P.message.role=L),v&&(P.message.function_call?(v.name&&(P.message.function_call.name=v.name),v.arguments&&((o=P.message.function_call).arguments??(o.arguments=""),P.message.function_call.arguments+=v.arguments)):P.message.function_call=v),O&&(P.message.content=(P.message.content||"")+O,!P.message.refusal&&d(this,K,"m",ri).call(this)&&(P.message.parsed=Qo(P.message.content))),T){P.message.tool_calls||(P.message.tool_calls=[]);for(let{index:se,id:M,type:G,function:V,...H}of T){let j=(i=P.message.tool_calls)[se]??(i[se]={});Object.assign(j,H),M&&(j.id=M),G&&(j.type=G),V&&(j.function??(j.function={name:V.name??"",arguments:""})),V?.name&&(j.function.name=V.name),V?.arguments&&(j.function.arguments+=V.arguments,ba(d(this,Oe,"f"),j)&&(j.function.parsed_arguments=Qo(j.function.arguments)))}}}return a},Symbol.asyncIterator)](){let e=[],t=[],s=!1;return this.on("chunk",n=>{let o=t.shift();o?o.resolve(n):e.push(n)}),this.on("end",()=>{s=!0;for(let n of t)n.resolve(void 0);t.length=0}),this.on("abort",n=>{s=!0;for(let o of t)o.reject(n);t.length=0}),this.on("error",n=>{s=!0;for(let o of t)o.reject(n);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:s?{value:void 0,done:!0}:new Promise((o,i)=>t.push({resolve:o,reject:i})).then(o=>o?{value:o,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}toReadableStream(){return new Pe(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}};function Nc(r,e){let{id:t,choices:s,created:n,model:o,system_fingerprint:i,...a}=r,l={...a,id:t,choices:s.map(({message:p,finish_reason:b,index:h,logprobs:g,...c})=>{if(!b)throw new _(`missing finish_reason for choice ${h}`);let{content:x=null,function_call:P,tool_calls:O,...k}=p,v=p.role;if(!v)throw new _(`missing role for choice ${h}`);if(P){let{arguments:L,name:T}=P;if(L==null)throw new _(`missing function_call.arguments for choice ${h}`);if(!T)throw new _(`missing function_call.name for choice ${h}`);return{...c,message:{content:x,function_call:{arguments:L,name:T},role:v,refusal:p.refusal??null},finish_reason:b,index:h,logprobs:g}}return O?{...c,index:h,finish_reason:b,logprobs:g,message:{...k,role:v,content:x,refusal:p.refusal??null,tool_calls:O.map((L,T)=>{let{function:te,type:se,id:M,...G}=L,{arguments:V,name:H,...j}=te||{};if(M==null)throw new _(`missing choices[${h}].tool_calls[${T}].id
${Sn(r)}`);if(se==null)throw new _(`missing choices[${h}].tool_calls[${T}].type
${Sn(r)}`);if(H==null)throw new _(`missing choices[${h}].tool_calls[${T}].function.name
${Sn(r)}`);if(V==null)throw new _(`missing choices[${h}].tool_calls[${T}].function.arguments
${Sn(r)}`);return{...G,id:M,type:se,function:{...j,name:H,arguments:V}}})}}:{...c,message:{...k,content:x,role:v,refusal:p.refusal??null},finish_reason:b,index:h,logprobs:g}}),created:n,model:o,object:"chat.completion",...i?{system_fingerprint:i}:{}};return ya(l,e)}function Sn(r){return JSON.stringify(r)}var Er=class r extends It{static fromReadableStream(e){let t=new r(null);return t._run(()=>t._fromReadableStream(e)),t}static runTools(e,t,s){let n=new r(t),o={...s,headers:{...s?.headers,"X-Stainless-Helper-Method":"runTools"}};return n._run(()=>n._runTools(e,t,o)),n}};var Fe=class extends m{constructor(){super(...arguments),this.messages=new xt(this._client)}create(e,t){return this._client.post("/chat/completions",{body:e,...t,stream:e.stream??!1})}retrieve(e,t){return this._client.get(f`/chat/completions/${e}`,t)}update(e,t,s){return this._client.post(f`/chat/completions/${e}`,{body:t,...s})}list(e={},t){return this._client.getAPIList("/chat/completions",R,{query:e,...t})}delete(e,t){return this._client.delete(f`/chat/completions/${e}`,t)}parse(e,t){return wa(e.tools),this._client.chat.completions.create(e,{...t,headers:{...t?.headers,"X-Stainless-Helper-Method":"chat.completions.parse"}})._thenUnwrap(s=>vr(s,e))}runTools(e,t){return e.stream?Er.runTools(this._client,e,t):Ar.runTools(this._client,e,t)}stream(e,t){return It.createChatCompletion(this._client,e,t)}};Fe.Messages=xt;var Qe=class extends m{constructor(){super(...arguments),this.completions=new Fe(this._client)}};Qe.Completions=Fe;var Aa=Symbol("brand.privateNullableHeaders");function*Bc(r){if(!r)return;if(Aa in r){let{values:s,nulls:n}=r;yield*s.entries();for(let o of n)yield[o,null];return}let e=!1,t;r instanceof Headers?t=r.entries():Io(r)?t=r:(e=!0,t=Object.entries(r??{}));for(let s of t){let n=s[0];if(typeof n!="string")throw new TypeError("expected header name to be a string");let o=Io(s[1])?s[1]:[s[1]],i=!1;for(let a of o)a!==void 0&&(e&&!i&&(i=!0,yield[n,null]),yield[n,a])}}var y=r=>{let e=new Headers,t=new Set;for(let s of r){let n=new Set;for(let[o,i]of Bc(s)){let a=o.toLowerCase();n.has(a)||(e.delete(o),n.add(a)),i===null?(e.delete(o),t.add(a)):(e.append(o,i),t.delete(a))}}return{[Aa]:!0,values:e,nulls:t}};var ps=class extends m{create(e,t){return this._client.post("/audio/speech",{body:e,...t,headers:y([{Accept:"application/octet-stream"},t?.headers]),__binaryResponse:!0})}};var fs=class extends m{create(e,t){return this._client.post("/audio/transcriptions",ae({body:e,...t,stream:e.stream??!1,__metadata:{model:e.model}},this._client))}};var hs=class extends m{create(e,t){return this._client.post("/audio/translations",ae({body:e,...t,__metadata:{model:e.model}},this._client))}};var Se=class extends m{constructor(){super(...arguments),this.transcriptions=new fs(this._client),this.translations=new hs(this._client),this.speech=new ps(this._client)}};Se.Transcriptions=fs;Se.Translations=hs;Se.Speech=ps;var St=class extends m{create(e,t){return this._client.post("/batches",{body:e,...t})}retrieve(e,t){return this._client.get(f`/batches/${e}`,t)}list(e={},t){return this._client.getAPIList("/batches",R,{query:e,...t})}cancel(e,t){return this._client.post(f`/batches/${e}/cancel`,t)}};var ms=class extends m{create(e,t){return this._client.post("/assistants",{body:e,...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}retrieve(e,t){return this._client.get(f`/assistants/${e}`,{...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}update(e,t,s){return this._client.post(f`/assistants/${e}`,{body:t,...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}list(e={},t){return this._client.getAPIList("/assistants",R,{query:e,...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}delete(e,t){return this._client.delete(f`/assistants/${e}`,{...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}};var gs=class extends m{create(e,t){return this._client.post("/realtime/sessions",{body:e,...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}};var ys=class extends m{create(e,t){return this._client.post("/realtime/transcription_sessions",{body:e,...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}};var Ze=class extends m{constructor(){super(...arguments),this.sessions=new gs(this._client),this.transcriptionSessions=new ys(this._client)}};Ze.Sessions=gs;Ze.TranscriptionSessions=ys;var bs=class extends m{create(e,t){return this._client.post("/chatkit/sessions",{body:e,...t,headers:y([{"OpenAI-Beta":"chatkit_beta=v1"},t?.headers])})}cancel(e,t){return this._client.post(f`/chatkit/sessions/${e}/cancel`,{...t,headers:y([{"OpenAI-Beta":"chatkit_beta=v1"},t?.headers])})}};var _s=class extends m{retrieve(e,t){return this._client.get(f`/chatkit/threads/${e}`,{...t,headers:y([{"OpenAI-Beta":"chatkit_beta=v1"},t?.headers])})}list(e={},t){return this._client.getAPIList("/chatkit/threads",Te,{query:e,...t,headers:y([{"OpenAI-Beta":"chatkit_beta=v1"},t?.headers])})}delete(e,t){return this._client.delete(f`/chatkit/threads/${e}`,{...t,headers:y([{"OpenAI-Beta":"chatkit_beta=v1"},t?.headers])})}listItems(e,t={},s){return this._client.getAPIList(f`/chatkit/threads/${e}/items`,Te,{query:t,...s,headers:y([{"OpenAI-Beta":"chatkit_beta=v1"},s?.headers])})}};var et=class extends m{constructor(){super(...arguments),this.sessions=new bs(this._client),this.threads=new _s(this._client)}};et.Sessions=bs;et.Threads=_s;var ws=class extends m{create(e,t,s){return this._client.post(f`/threads/${e}/messages`,{body:t,...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}retrieve(e,t,s){let{thread_id:n}=t;return this._client.get(f`/threads/${n}/messages/${e}`,{...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}update(e,t,s){let{thread_id:n,...o}=t;return this._client.post(f`/threads/${n}/messages/${e}`,{body:o,...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}list(e,t={},s){return this._client.getAPIList(f`/threads/${e}/messages`,R,{query:t,...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}delete(e,t,s){let{thread_id:n}=t;return this._client.delete(f`/threads/${n}/messages/${e}`,{...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}};var vs=class extends m{retrieve(e,t,s){let{thread_id:n,run_id:o,...i}=t;return this._client.get(f`/threads/${n}/runs/${o}/steps/${e}`,{query:i,...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}list(e,t,s){let{thread_id:n,...o}=t;return this._client.getAPIList(f`/threads/${n}/runs/${e}/steps`,R,{query:o,...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}};var Ea=r=>{if(typeof Buffer<"u"){let e=Buffer.from(r,"base64");return Array.from(new Float32Array(e.buffer,e.byteOffset,e.length/Float32Array.BYTES_PER_ELEMENT))}else{let e=atob(r),t=e.length,s=new Uint8Array(t);for(let n=0;n<t;n++)s[n]=e.charCodeAt(n);return Array.from(new Float32Array(s.buffer))}};var tt=r=>{if(typeof globalThis.process<"u")return globalThis.process.env?.[r]?.trim()??void 0;if(typeof globalThis.Deno<"u")return globalThis.Deno.env?.get?.(r)?.trim()};var Z,Et,ni,Ae,An,ge,Rt,xs,At,kn,le,En,Rn,Cr,Rr,kr,Ra,ka,Ca,Ta,Ma,Oa,Fa,$e=class extends ze{constructor(){super(...arguments),Z.add(this),ni.set(this,[]),Ae.set(this,{}),An.set(this,{}),ge.set(this,void 0),Rt.set(this,void 0),xs.set(this,void 0),At.set(this,void 0),kn.set(this,void 0),le.set(this,void 0),En.set(this,void 0),Rn.set(this,void 0),Cr.set(this,void 0)}[(ni=new WeakMap,Ae=new WeakMap,An=new WeakMap,ge=new WeakMap,Rt=new WeakMap,xs=new WeakMap,At=new WeakMap,kn=new WeakMap,le=new WeakMap,En=new WeakMap,Rn=new WeakMap,Cr=new WeakMap,Z=new WeakSet,Symbol.asyncIterator)](){let e=[],t=[],s=!1;return this.on("event",n=>{let o=t.shift();o?o.resolve(n):e.push(n)}),this.on("end",()=>{s=!0;for(let n of t)n.resolve(void 0);t.length=0}),this.on("abort",n=>{s=!0;for(let o of t)o.reject(n);t.length=0}),this.on("error",n=>{s=!0;for(let o of t)o.reject(n);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:s?{value:void 0,done:!0}:new Promise((o,i)=>t.push({resolve:o,reject:i})).then(o=>o?{value:o,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}static fromReadableStream(e){let t=new Et;return t._run(()=>t._fromReadableStream(e)),t}async _fromReadableStream(e,t){let s=t?.signal;s&&(s.aborted&&this.controller.abort(),s.addEventListener("abort",()=>this.controller.abort())),this._connected();let n=Pe.fromReadableStream(e,this.controller);for await(let o of n)d(this,Z,"m",Rr).call(this,o);if(n.controller.signal?.aborted)throw new U;return this._addRun(d(this,Z,"m",kr).call(this))}toReadableStream(){return new Pe(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}static createToolAssistantStream(e,t,s,n){let o=new Et;return o._run(()=>o._runToolAssistantStream(e,t,s,{...n,headers:{...n?.headers,"X-Stainless-Helper-Method":"stream"}})),o}async _createToolAssistantStream(e,t,s,n){let o=n?.signal;o&&(o.aborted&&this.controller.abort(),o.addEventListener("abort",()=>this.controller.abort()));let i={...s,stream:!0},a=await e.submitToolOutputs(t,i,{...n,signal:this.controller.signal});this._connected();for await(let l of a)d(this,Z,"m",Rr).call(this,l);if(a.controller.signal?.aborted)throw new U;return this._addRun(d(this,Z,"m",kr).call(this))}static createThreadAssistantStream(e,t,s){let n=new Et;return n._run(()=>n._threadAssistantStream(e,t,{...s,headers:{...s?.headers,"X-Stainless-Helper-Method":"stream"}})),n}static createAssistantStream(e,t,s,n){let o=new Et;return o._run(()=>o._runAssistantStream(e,t,s,{...n,headers:{...n?.headers,"X-Stainless-Helper-Method":"stream"}})),o}currentEvent(){return d(this,En,"f")}currentRun(){return d(this,Rn,"f")}currentMessageSnapshot(){return d(this,ge,"f")}currentRunStepSnapshot(){return d(this,Cr,"f")}async finalRunSteps(){return await this.done(),Object.values(d(this,Ae,"f"))}async finalMessages(){return await this.done(),Object.values(d(this,An,"f"))}async finalRun(){if(await this.done(),!d(this,Rt,"f"))throw Error("Final run was not received.");return d(this,Rt,"f")}async _createThreadAssistantStream(e,t,s){let n=s?.signal;n&&(n.aborted&&this.controller.abort(),n.addEventListener("abort",()=>this.controller.abort()));let o={...t,stream:!0},i=await e.createAndRun(o,{...s,signal:this.controller.signal});this._connected();for await(let a of i)d(this,Z,"m",Rr).call(this,a);if(i.controller.signal?.aborted)throw new U;return this._addRun(d(this,Z,"m",kr).call(this))}async _createAssistantStream(e,t,s,n){let o=n?.signal;o&&(o.aborted&&this.controller.abort(),o.addEventListener("abort",()=>this.controller.abort()));let i={...s,stream:!0},a=await e.create(t,i,{...n,signal:this.controller.signal});this._connected();for await(let l of a)d(this,Z,"m",Rr).call(this,l);if(a.controller.signal?.aborted)throw new U;return this._addRun(d(this,Z,"m",kr).call(this))}static accumulateDelta(e,t){for(let[s,n]of Object.entries(t)){if(!e.hasOwnProperty(s)){e[s]=n;continue}let o=e[s];if(o==null){e[s]=n;continue}if(s==="index"||s==="type"){e[s]=n;continue}if(typeof o=="string"&&typeof n=="string")o+=n;else if(typeof o=="number"&&typeof n=="number")o+=n;else if(pr(o)&&pr(n))o=this.accumulateDelta(o,n);else if(Array.isArray(o)&&Array.isArray(n)){if(o.every(i=>typeof i=="string"||typeof i=="number")){o.push(...n);continue}for(let i of n){if(!pr(i))throw new Error(`Expected array delta entry to be an object but got: ${i}`);let a=i.index;if(a==null)throw console.error(i),new Error("Expected array delta entry to have an `index` property");if(typeof a!="number")throw new Error(`Expected array delta entry \`index\` property to be a number but got ${a}`);let l=o[a];l==null?o.push(i):o[a]=this.accumulateDelta(l,i)}continue}else throw Error(`Unhandled record type: ${s}, deltaValue: ${n}, accValue: ${o}`);e[s]=o}return e}_addRun(e){return e}async _threadAssistantStream(e,t,s){return await this._createThreadAssistantStream(t,e,s)}async _runAssistantStream(e,t,s,n){return await this._createAssistantStream(t,e,s,n)}async _runToolAssistantStream(e,t,s,n){return await this._createToolAssistantStream(t,e,s,n)}};Et=$e,Rr=function(e){if(!this.ended)switch(S(this,En,e,"f"),d(this,Z,"m",Ca).call(this,e),e.event){case"thread.created":break;case"thread.run.created":case"thread.run.queued":case"thread.run.in_progress":case"thread.run.requires_action":case"thread.run.completed":case"thread.run.incomplete":case"thread.run.failed":case"thread.run.cancelling":case"thread.run.cancelled":case"thread.run.expired":d(this,Z,"m",Fa).call(this,e);break;case"thread.run.step.created":case"thread.run.step.in_progress":case"thread.run.step.delta":case"thread.run.step.completed":case"thread.run.step.failed":case"thread.run.step.cancelled":case"thread.run.step.expired":d(this,Z,"m",ka).call(this,e);break;case"thread.message.created":case"thread.message.in_progress":case"thread.message.delta":case"thread.message.completed":case"thread.message.incomplete":d(this,Z,"m",Ra).call(this,e);break;case"error":throw new Error("Encountered an error event in event processing - errors should be processed earlier");default:}},kr=function(){if(this.ended)throw new _("stream has ended, this shouldn't happen");if(!d(this,Rt,"f"))throw Error("Final run has not been received");return d(this,Rt,"f")},Ra=function(e){let[t,s]=d(this,Z,"m",Ma).call(this,e,d(this,ge,"f"));S(this,ge,t,"f"),d(this,An,"f")[t.id]=t;for(let n of s){let o=t.content[n.index];o?.type=="text"&&this._emit("textCreated",o.text)}switch(e.event){case"thread.message.created":this._emit("messageCreated",e.data);break;case"thread.message.in_progress":break;case"thread.message.delta":if(this._emit("messageDelta",e.data.delta,t),e.data.delta.content)for(let n of e.data.delta.content){if(n.type=="text"&&n.text){let o=n.text,i=t.content[n.index];if(i&&i.type=="text")this._emit("textDelta",o,i.text);else throw Error("The snapshot associated with this text delta is not text or missing")}if(n.index!=d(this,xs,"f")){if(d(this,At,"f"))switch(d(this,At,"f").type){case"text":this._emit("textDone",d(this,At,"f").text,d(this,ge,"f"));break;case"image_file":this._emit("imageFileDone",d(this,At,"f").image_file,d(this,ge,"f"));break}S(this,xs,n.index,"f")}S(this,At,t.content[n.index],"f")}break;case"thread.message.completed":case"thread.message.incomplete":if(d(this,xs,"f")!==void 0){let n=e.data.content[d(this,xs,"f")];if(n)switch(n.type){case"image_file":this._emit("imageFileDone",n.image_file,d(this,ge,"f"));break;case"text":this._emit("textDone",n.text,d(this,ge,"f"));break}}d(this,ge,"f")&&this._emit("messageDone",e.data),S(this,ge,void 0,"f")}},ka=function(e){let t=d(this,Z,"m",Ta).call(this,e);switch(S(this,Cr,t,"f"),e.event){case"thread.run.step.created":this._emit("runStepCreated",e.data);break;case"thread.run.step.delta":let s=e.data.delta;if(s.step_details&&s.step_details.type=="tool_calls"&&s.step_details.tool_calls&&t.step_details.type=="tool_calls")for(let o of s.step_details.tool_calls)o.index==d(this,kn,"f")?this._emit("toolCallDelta",o,t.step_details.tool_calls[o.index]):(d(this,le,"f")&&this._emit("toolCallDone",d(this,le,"f")),S(this,kn,o.index,"f"),S(this,le,t.step_details.tool_calls[o.index],"f"),d(this,le,"f")&&this._emit("toolCallCreated",d(this,le,"f")));this._emit("runStepDelta",e.data.delta,t);break;case"thread.run.step.completed":case"thread.run.step.failed":case"thread.run.step.cancelled":case"thread.run.step.expired":S(this,Cr,void 0,"f"),e.data.step_details.type=="tool_calls"&&d(this,le,"f")&&(this._emit("toolCallDone",d(this,le,"f")),S(this,le,void 0,"f")),this._emit("runStepDone",e.data,t);break;case"thread.run.step.in_progress":break}},Ca=function(e){d(this,ni,"f").push(e),this._emit("event",e)},Ta=function(e){switch(e.event){case"thread.run.step.created":return d(this,Ae,"f")[e.data.id]=e.data,e.data;case"thread.run.step.delta":let t=d(this,Ae,"f")[e.data.id];if(!t)throw Error("Received a RunStepDelta before creation of a snapshot");let s=e.data;if(s.delta){let n=Et.accumulateDelta(t,s.delta);d(this,Ae,"f")[e.data.id]=n}return d(this,Ae,"f")[e.data.id];case"thread.run.step.completed":case"thread.run.step.failed":case"thread.run.step.cancelled":case"thread.run.step.expired":case"thread.run.step.in_progress":d(this,Ae,"f")[e.data.id]=e.data;break}if(d(this,Ae,"f")[e.data.id])return d(this,Ae,"f")[e.data.id];throw new Error("No snapshot available")},Ma=function(e,t){let s=[];switch(e.event){case"thread.message.created":return[e.data,s];case"thread.message.delta":if(!t)throw Error("Received a delta with no existing snapshot (there should be one from message creation)");let n=e.data;if(n.delta.content)for(let o of n.delta.content)if(o.index in t.content){let i=t.content[o.index];t.content[o.index]=d(this,Z,"m",Oa).call(this,o,i)}else t.content[o.index]=o,s.push(o);return[t,s];case"thread.message.in_progress":case"thread.message.completed":case"thread.message.incomplete":if(t)return[t,s];throw Error("Received thread message event with no existing snapshot")}throw Error("Tried to accumulate a non-message event")},Oa=function(e,t){return Et.accumulateDelta(t,e)},Fa=function(e){switch(S(this,Rn,e.data,"f"),e.event){case"thread.run.created":break;case"thread.run.queued":break;case"thread.run.in_progress":break;case"thread.run.requires_action":case"thread.run.cancelled":case"thread.run.failed":case"thread.run.completed":case"thread.run.expired":case"thread.run.incomplete":S(this,Rt,e.data,"f"),d(this,le,"f")&&(this._emit("toolCallDone",d(this,le,"f")),S(this,le,void 0,"f"));break;case"thread.run.cancelling":break}};var kt=class extends m{constructor(){super(...arguments),this.steps=new vs(this._client)}create(e,t,s){let{include:n,...o}=t;return this._client.post(f`/threads/${e}/runs`,{query:{include:n},body:o,...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers]),stream:t.stream??!1})}retrieve(e,t,s){let{thread_id:n}=t;return this._client.get(f`/threads/${n}/runs/${e}`,{...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}update(e,t,s){let{thread_id:n,...o}=t;return this._client.post(f`/threads/${n}/runs/${e}`,{body:o,...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}list(e,t={},s){return this._client.getAPIList(f`/threads/${e}/runs`,R,{query:t,...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}cancel(e,t,s){let{thread_id:n}=t;return this._client.post(f`/threads/${n}/runs/${e}/cancel`,{...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}async createAndPoll(e,t,s){let n=await this.create(e,t,s);return await this.poll(n.id,{thread_id:e},s)}createAndStream(e,t,s){return $e.createAssistantStream(e,this._client.beta.threads.runs,t,s)}async poll(e,t,s){let n=y([s?.headers,{"X-Stainless-Poll-Helper":"true","X-Stainless-Custom-Poll-Interval":s?.pollIntervalMs?.toString()??void 0}]);for(;;){let{data:o,response:i}=await this.retrieve(e,t,{...s,headers:{...s?.headers,...n}}).withResponse();switch(o.status){case"queued":case"in_progress":case"cancelling":let a=5e3;if(s?.pollIntervalMs)a=s.pollIntervalMs;else{let l=i.headers.get("openai-poll-after-ms");if(l){let p=parseInt(l);isNaN(p)||(a=p)}}await ve(a);break;case"requires_action":case"incomplete":case"cancelled":case"completed":case"failed":case"expired":return o}}}stream(e,t,s){return $e.createAssistantStream(e,this._client.beta.threads.runs,t,s)}submitToolOutputs(e,t,s){let{thread_id:n,...o}=t;return this._client.post(f`/threads/${n}/runs/${e}/submit_tool_outputs`,{body:o,...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers]),stream:t.stream??!1})}async submitToolOutputsAndPoll(e,t,s){let n=await this.submitToolOutputs(e,t,s);return await this.poll(n.id,t,s)}submitToolOutputsStream(e,t,s){return $e.createToolAssistantStream(e,this._client.beta.threads.runs,t,s)}};kt.Steps=vs;var st=class extends m{constructor(){super(...arguments),this.runs=new kt(this._client),this.messages=new ws(this._client)}create(e={},t){return this._client.post("/threads",{body:e,...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}retrieve(e,t){return this._client.get(f`/threads/${e}`,{...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}update(e,t,s){return this._client.post(f`/threads/${e}`,{body:t,...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}delete(e,t){return this._client.delete(f`/threads/${e}`,{...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}createAndRun(e,t){return this._client.post("/threads/runs",{body:e,...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers]),stream:e.stream??!1})}async createAndRunPoll(e,t){let s=await this.createAndRun(e,t);return await this.runs.poll(s.id,{thread_id:s.thread_id},t)}createAndRunStream(e,t){return $e.createThreadAssistantStream(e,this._client.beta.threads,t)}};st.Runs=kt;st.Messages=ws;var ye=class extends m{constructor(){super(...arguments),this.realtime=new Ze(this._client),this.chatkit=new et(this._client),this.assistants=new ms(this._client),this.threads=new st(this._client)}};ye.Realtime=Ze;ye.ChatKit=et;ye.Assistants=ms;ye.Threads=st;var Ct=class extends m{create(e,t){return this._client.post("/completions",{body:e,...t,stream:e.stream??!1})}};var Ps=class extends m{retrieve(e,t,s){let{container_id:n}=t;return this._client.get(f`/containers/${n}/files/${e}/content`,{...s,headers:y([{Accept:"application/binary"},s?.headers]),__binaryResponse:!0})}};var Tt=class extends m{constructor(){super(...arguments),this.content=new Ps(this._client)}create(e,t,s){return this._client.post(f`/containers/${e}/files`,ae({body:t,...s},this._client))}retrieve(e,t,s){let{container_id:n}=t;return this._client.get(f`/containers/${n}/files/${e}`,s)}list(e,t={},s){return this._client.getAPIList(f`/containers/${e}/files`,R,{query:t,...s})}delete(e,t,s){let{container_id:n}=t;return this._client.delete(f`/containers/${n}/files/${e}`,{...s,headers:y([{Accept:"*/*"},s?.headers])})}};Tt.Content=Ps;var rt=class extends m{constructor(){super(...arguments),this.files=new Tt(this._client)}create(e,t){return this._client.post("/containers",{body:e,...t})}retrieve(e,t){return this._client.get(f`/containers/${e}`,t)}list(e={},t){return this._client.getAPIList("/containers",R,{query:e,...t})}delete(e,t){return this._client.delete(f`/containers/${e}`,{...t,headers:y([{Accept:"*/*"},t?.headers])})}};rt.Files=Tt;var Is=class extends m{create(e,t,s){let{include:n,...o}=t;return this._client.post(f`/conversations/${e}/items`,{query:{include:n},body:o,...s})}retrieve(e,t,s){let{conversation_id:n,...o}=t;return this._client.get(f`/conversations/${n}/items/${e}`,{query:o,...s})}list(e,t={},s){return this._client.getAPIList(f`/conversations/${e}/items`,Te,{query:t,...s})}delete(e,t,s){let{conversation_id:n}=t;return this._client.delete(f`/conversations/${n}/items/${e}`,s)}};var nt=class extends m{constructor(){super(...arguments),this.items=new Is(this._client)}create(e={},t){return this._client.post("/conversations",{body:e,...t})}retrieve(e,t){return this._client.get(f`/conversations/${e}`,t)}update(e,t,s){return this._client.post(f`/conversations/${e}`,{body:t,...s})}delete(e,t){return this._client.delete(f`/conversations/${e}`,t)}};nt.Items=Is;var Mt=class extends m{create(e,t){let s=!!e.encoding_format,n=s?e.encoding_format:"base64";s&&B(this._client).debug("embeddings/user defined encoding_format:",e.encoding_format);let o=this._client.post("/embeddings",{body:{...e,encoding_format:n},...t});return s?o:(B(this._client).debug("embeddings/decoding base64 embeddings from base64"),o._thenUnwrap(i=>(i&&i.data&&i.data.forEach(a=>{let l=a.embedding;a.embedding=Ea(l)}),i)))}};var Ss=class extends m{retrieve(e,t,s){let{eval_id:n,run_id:o}=t;return this._client.get(f`/evals/${n}/runs/${o}/output_items/${e}`,s)}list(e,t,s){let{eval_id:n,...o}=t;return this._client.getAPIList(f`/evals/${n}/runs/${e}/output_items`,R,{query:o,...s})}};var Ot=class extends m{constructor(){super(...arguments),this.outputItems=new Ss(this._client)}create(e,t,s){return this._client.post(f`/evals/${e}/runs`,{body:t,...s})}retrieve(e,t,s){let{eval_id:n}=t;return this._client.get(f`/evals/${n}/runs/${e}`,s)}list(e,t={},s){return this._client.getAPIList(f`/evals/${e}/runs`,R,{query:t,...s})}delete(e,t,s){let{eval_id:n}=t;return this._client.delete(f`/evals/${n}/runs/${e}`,s)}cancel(e,t,s){let{eval_id:n}=t;return this._client.post(f`/evals/${n}/runs/${e}`,s)}};Ot.OutputItems=Ss;var ot=class extends m{constructor(){super(...arguments),this.runs=new Ot(this._client)}create(e,t){return this._client.post("/evals",{body:e,...t})}retrieve(e,t){return this._client.get(f`/evals/${e}`,t)}update(e,t,s){return this._client.post(f`/evals/${e}`,{body:t,...s})}list(e={},t){return this._client.getAPIList("/evals",R,{query:e,...t})}delete(e,t){return this._client.delete(f`/evals/${e}`,t)}};ot.Runs=Ot;var Ft=class extends m{create(e,t){return this._client.post("/files",ae({body:e,...t},this._client))}retrieve(e,t){return this._client.get(f`/files/${e}`,t)}list(e={},t){return this._client.getAPIList("/files",R,{query:e,...t})}delete(e,t){return this._client.delete(f`/files/${e}`,t)}content(e,t){return this._client.get(f`/files/${e}/content`,{...t,headers:y([{Accept:"application/binary"},t?.headers]),__binaryResponse:!0})}async waitForProcessing(e,{pollInterval:t=5e3,maxWait:s=1800*1e3}={}){let n=new Set(["processed","error","deleted"]),o=Date.now(),i=await this.retrieve(e);for(;!i.status||!n.has(i.status);)if(await ve(t),i=await this.retrieve(e),Date.now()-o>s)throw new Ve({message:`Giving up on waiting for file ${e} to finish processing after ${s} milliseconds.`});return i}};var As=class extends m{};var Es=class extends m{run(e,t){return this._client.post("/fine_tuning/alpha/graders/run",{body:e,...t})}validate(e,t){return this._client.post("/fine_tuning/alpha/graders/validate",{body:e,...t})}};var $t=class extends m{constructor(){super(...arguments),this.graders=new Es(this._client)}};$t.Graders=Es;var Rs=class extends m{create(e,t,s){return this._client.getAPIList(f`/fine_tuning/checkpoints/${e}/permissions`,Ie,{body:t,method:"post",...s})}retrieve(e,t={},s){return this._client.get(f`/fine_tuning/checkpoints/${e}/permissions`,{query:t,...s})}delete(e,t,s){let{fine_tuned_model_checkpoint:n}=t;return this._client.delete(f`/fine_tuning/checkpoints/${n}/permissions/${e}`,s)}};var Nt=class extends m{constructor(){super(...arguments),this.permissions=new Rs(this._client)}};Nt.Permissions=Rs;var ks=class extends m{list(e,t={},s){return this._client.getAPIList(f`/fine_tuning/jobs/${e}/checkpoints`,R,{query:t,...s})}};var Lt=class extends m{constructor(){super(...arguments),this.checkpoints=new ks(this._client)}create(e,t){return this._client.post("/fine_tuning/jobs",{body:e,...t})}retrieve(e,t){return this._client.get(f`/fine_tuning/jobs/${e}`,t)}list(e={},t){return this._client.getAPIList("/fine_tuning/jobs",R,{query:e,...t})}cancel(e,t){return this._client.post(f`/fine_tuning/jobs/${e}/cancel`,t)}listEvents(e,t={},s){return this._client.getAPIList(f`/fine_tuning/jobs/${e}/events`,R,{query:t,...s})}pause(e,t){return this._client.post(f`/fine_tuning/jobs/${e}/pause`,t)}resume(e,t){return this._client.post(f`/fine_tuning/jobs/${e}/resume`,t)}};Lt.Checkpoints=ks;var be=class extends m{constructor(){super(...arguments),this.methods=new As(this._client),this.jobs=new Lt(this._client),this.checkpoints=new Nt(this._client),this.alpha=new $t(this._client)}};be.Methods=As;be.Jobs=Lt;be.Checkpoints=Nt;be.Alpha=$t;var Cs=class extends m{};var it=class extends m{constructor(){super(...arguments),this.graderModels=new Cs(this._client)}};it.GraderModels=Cs;var Bt=class extends m{createVariation(e,t){return this._client.post("/images/variations",ae({body:e,...t},this._client))}edit(e,t){return this._client.post("/images/edits",ae({body:e,...t,stream:e.stream??!1},this._client))}generate(e,t){return this._client.post("/images/generations",{body:e,...t,stream:e.stream??!1})}};var Dt=class extends m{retrieve(e,t){return this._client.get(f`/models/${e}`,t)}list(e){return this._client.getAPIList("/models",Ie,e)}delete(e,t){return this._client.delete(f`/models/${e}`,t)}};var Ht=class extends m{create(e,t){return this._client.post("/moderations",{body:e,...t})}};var Ts=class extends m{accept(e,t,s){return this._client.post(f`/realtime/calls/${e}/accept`,{body:t,...s,headers:y([{Accept:"*/*"},s?.headers])})}hangup(e,t){return this._client.post(f`/realtime/calls/${e}/hangup`,{...t,headers:y([{Accept:"*/*"},t?.headers])})}refer(e,t,s){return this._client.post(f`/realtime/calls/${e}/refer`,{body:t,...s,headers:y([{Accept:"*/*"},s?.headers])})}reject(e,t={},s){return this._client.post(f`/realtime/calls/${e}/reject`,{body:t,...s,headers:y([{Accept:"*/*"},s?.headers])})}};var Ms=class extends m{create(e,t){return this._client.post("/realtime/client_secrets",{body:e,...t})}};var Ne=class extends m{constructor(){super(...arguments),this.clientSecrets=new Ms(this._client),this.calls=new Ts(this._client)}};Ne.ClientSecrets=Ms;Ne.Calls=Ts;function $a(r,e){return!e||!md(e)?{...r,output_parsed:null,output:r.output.map(t=>t.type==="function_call"?{...t,parsed_arguments:null}:t.type==="message"?{...t,content:t.content.map(s=>({...s,parsed:null}))}:t)}:oi(r,e)}function oi(r,e){let t=r.output.map(n=>{if(n.type==="function_call")return{...n,parsed_arguments:bd(e,n)};if(n.type==="message"){let o=n.content.map(i=>i.type==="output_text"?{...i,parsed:hd(e,i.text)}:i);return{...n,content:o}}return n}),s=Object.assign({},r,{output:t});return Object.getOwnPropertyDescriptor(r,"output_text")||Cn(s),Object.defineProperty(s,"output_parsed",{enumerable:!0,get(){for(let n of s.output)if(n.type==="message"){for(let o of n.content)if(o.type==="output_text"&&o.parsed!==null)return o.parsed}return null}}),s}function hd(r,e){return r.text?.format?.type!=="json_schema"?null:"$parseRaw"in r.text?.format?(r.text?.format).$parseRaw(e):JSON.parse(e)}function md(r){return!!wr(r.text?.format)}function gd(r){return r?.$brand==="auto-parseable-tool"}function yd(r,e){return r.find(t=>t.type==="function"&&t.name===e)}function bd(r,e){let t=yd(r.tools??[],e.name);return{...e,...e,parsed_arguments:gd(t)?t.$parseRaw(e.arguments):t?.strict?JSON.parse(e.arguments):null}}function Cn(r){let e=[];for(let t of r.output)if(t.type==="message")for(let s of t.content)s.type==="output_text"&&e.push(s.text);r.output_text=e.join("")}var Os,Tn,at,Mn,Na,La,Ba,Da,On=class r extends ze{constructor(e){super(),Os.add(this),Tn.set(this,void 0),at.set(this,void 0),Mn.set(this,void 0),S(this,Tn,e,"f")}static createResponse(e,t,s){let n=new r(t);return n._run(()=>n._createOrRetrieveResponse(e,t,{...s,headers:{...s?.headers,"X-Stainless-Helper-Method":"stream"}})),n}async _createOrRetrieveResponse(e,t,s){let n=s?.signal;n&&(n.aborted&&this.controller.abort(),n.addEventListener("abort",()=>this.controller.abort())),d(this,Os,"m",Na).call(this);let o,i=null;"response_id"in t?(o=await e.responses.retrieve(t.response_id,{stream:!0},{...s,signal:this.controller.signal,stream:!0}),i=t.starting_after??null):o=await e.responses.create({...t,stream:!0},{...s,signal:this.controller.signal}),this._connected();for await(let a of o)d(this,Os,"m",La).call(this,a,i);if(o.controller.signal?.aborted)throw new U;return d(this,Os,"m",Ba).call(this)}[(Tn=new WeakMap,at=new WeakMap,Mn=new WeakMap,Os=new WeakSet,Na=function(){this.ended||S(this,at,void 0,"f")},La=function(t,s){if(this.ended)return;let n=(i,a)=>{(s==null||a.sequence_number>s)&&this._emit(i,a)},o=d(this,Os,"m",Da).call(this,t);switch(n("event",t),t.type){case"response.output_text.delta":{let i=o.output[t.output_index];if(!i)throw new _(`missing output at index ${t.output_index}`);if(i.type==="message"){let a=i.content[t.content_index];if(!a)throw new _(`missing content at index ${t.content_index}`);if(a.type!=="output_text")throw new _(`expected content to be 'output_text', got ${a.type}`);n("response.output_text.delta",{...t,snapshot:a.text})}break}case"response.function_call_arguments.delta":{let i=o.output[t.output_index];if(!i)throw new _(`missing output at index ${t.output_index}`);i.type==="function_call"&&n("response.function_call_arguments.delta",{...t,snapshot:i.arguments});break}default:n(t.type,t);break}},Ba=function(){if(this.ended)throw new _("stream has ended, this shouldn't happen");let t=d(this,at,"f");if(!t)throw new _("request ended without sending any events");S(this,at,void 0,"f");let s=_d(t,d(this,Tn,"f"));return S(this,Mn,s,"f"),s},Da=function(t){let s=d(this,at,"f");if(!s){if(t.type!=="response.created")throw new _(`When snapshot hasn't been set yet, expected 'response.created' event, got ${t.type}`);return s=S(this,at,t.response,"f"),s}switch(t.type){case"response.output_item.added":{s.output.push(t.item);break}case"response.content_part.added":{let n=s.output[t.output_index];if(!n)throw new _(`missing output at index ${t.output_index}`);let o=n.type,i=t.part;o==="message"&&i.type!=="reasoning_text"?n.content.push(i):o==="reasoning"&&i.type==="reasoning_text"&&(n.content||(n.content=[]),n.content.push(i));break}case"response.output_text.delta":{let n=s.output[t.output_index];if(!n)throw new _(`missing output at index ${t.output_index}`);if(n.type==="message"){let o=n.content[t.content_index];if(!o)throw new _(`missing content at index ${t.content_index}`);if(o.type!=="output_text")throw new _(`expected content to be 'output_text', got ${o.type}`);o.text+=t.delta}break}case"response.function_call_arguments.delta":{let n=s.output[t.output_index];if(!n)throw new _(`missing output at index ${t.output_index}`);n.type==="function_call"&&(n.arguments+=t.delta);break}case"response.reasoning_text.delta":{let n=s.output[t.output_index];if(!n)throw new _(`missing output at index ${t.output_index}`);if(n.type==="reasoning"){let o=n.content?.[t.content_index];if(!o)throw new _(`missing content at index ${t.content_index}`);if(o.type!=="reasoning_text")throw new _(`expected content to be 'reasoning_text', got ${o.type}`);o.text+=t.delta}break}case"response.completed":{S(this,at,t.response,"f");break}}return s},Symbol.asyncIterator)](){let e=[],t=[],s=!1;return this.on("event",n=>{let o=t.shift();o?o.resolve(n):e.push(n)}),this.on("end",()=>{s=!0;for(let n of t)n.resolve(void 0);t.length=0}),this.on("abort",n=>{s=!0;for(let o of t)o.reject(n);t.length=0}),this.on("error",n=>{s=!0;for(let o of t)o.reject(n);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:s?{value:void 0,done:!0}:new Promise((o,i)=>t.push({resolve:o,reject:i})).then(o=>o?{value:o,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}async finalResponse(){await this.done();let e=d(this,Mn,"f");if(!e)throw new _("stream ended without producing a ChatCompletion");return e}};function _d(r,e){return $a(r,e)}var Fs=class extends m{list(e,t={},s){return this._client.getAPIList(f`/responses/${e}/input_items`,R,{query:t,...s})}};var $s=class extends m{count(e={},t){return this._client.post("/responses/input_tokens",{body:e,...t})}};var Le=class extends m{constructor(){super(...arguments),this.inputItems=new Fs(this._client),this.inputTokens=new $s(this._client)}create(e,t){return this._client.post("/responses",{body:e,...t,stream:e.stream??!1})._thenUnwrap(s=>("object"in s&&s.object==="response"&&Cn(s),s))}retrieve(e,t={},s){return this._client.get(f`/responses/${e}`,{query:t,...s,stream:t?.stream??!1})._thenUnwrap(n=>("object"in n&&n.object==="response"&&Cn(n),n))}delete(e,t){return this._client.delete(f`/responses/${e}`,{...t,headers:y([{Accept:"*/*"},t?.headers])})}parse(e,t){return this._client.responses.create(e,t)._thenUnwrap(s=>oi(s,e))}stream(e,t){return On.createResponse(this._client,e,t)}cancel(e,t){return this._client.post(f`/responses/${e}/cancel`,t)}};Le.InputItems=Fs;Le.InputTokens=$s;var Ns=class extends m{create(e,t,s){return this._client.post(f`/uploads/${e}/parts`,ae({body:t,...s},this._client))}};var lt=class extends m{constructor(){super(...arguments),this.parts=new Ns(this._client)}create(e,t){return this._client.post("/uploads",{body:e,...t})}cancel(e,t){return this._client.post(f`/uploads/${e}/cancel`,t)}complete(e,t,s){return this._client.post(f`/uploads/${e}/complete`,{body:t,...s})}};lt.Parts=Ns;var Ha=async r=>{let e=await Promise.allSettled(r),t=e.filter(n=>n.status==="rejected");if(t.length){for(let n of t)console.error(n.reason);throw new Error(`${t.length} promise(s) failed - see the above errors`)}let s=[];for(let n of e)n.status==="fulfilled"&&s.push(n.value);return s};var Ls=class extends m{create(e,t,s){return this._client.post(f`/vector_stores/${e}/file_batches`,{body:t,...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}retrieve(e,t,s){let{vector_store_id:n}=t;return this._client.get(f`/vector_stores/${n}/file_batches/${e}`,{...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}cancel(e,t,s){let{vector_store_id:n}=t;return this._client.post(f`/vector_stores/${n}/file_batches/${e}/cancel`,{...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}async createAndPoll(e,t,s){let n=await this.create(e,t);return await this.poll(e,n.id,s)}listFiles(e,t,s){let{vector_store_id:n,...o}=t;return this._client.getAPIList(f`/vector_stores/${n}/file_batches/${e}/files`,R,{query:o,...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}async poll(e,t,s){let n=y([s?.headers,{"X-Stainless-Poll-Helper":"true","X-Stainless-Custom-Poll-Interval":s?.pollIntervalMs?.toString()??void 0}]);for(;;){let{data:o,response:i}=await this.retrieve(t,{vector_store_id:e},{...s,headers:n}).withResponse();switch(o.status){case"in_progress":let a=5e3;if(s?.pollIntervalMs)a=s.pollIntervalMs;else{let l=i.headers.get("openai-poll-after-ms");if(l){let p=parseInt(l);isNaN(p)||(a=p)}}await ve(a);break;case"failed":case"cancelled":case"completed":return o}}}async uploadAndPoll(e,{files:t,fileIds:s=[]},n){if(t==null||t.length==0)throw new Error("No `files` provided to process. If you've already uploaded files you should use `.createAndPoll()` instead");let o=n?.maxConcurrency??5,i=Math.min(o,t.length),a=this._client,l=t.values(),p=[...s];async function b(g){for(let c of g){let x=await a.files.create({file:c,purpose:"assistants"},n);p.push(x.id)}}let h=Array(i).fill(l).map(b);return await Ha(h),await this.createAndPoll(e,{file_ids:p})}};var Bs=class extends m{create(e,t,s){return this._client.post(f`/vector_stores/${e}/files`,{body:t,...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}retrieve(e,t,s){let{vector_store_id:n}=t;return this._client.get(f`/vector_stores/${n}/files/${e}`,{...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}update(e,t,s){let{vector_store_id:n,...o}=t;return this._client.post(f`/vector_stores/${n}/files/${e}`,{body:o,...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}list(e,t={},s){return this._client.getAPIList(f`/vector_stores/${e}/files`,R,{query:t,...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}delete(e,t,s){let{vector_store_id:n}=t;return this._client.delete(f`/vector_stores/${n}/files/${e}`,{...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}async createAndPoll(e,t,s){let n=await this.create(e,t,s);return await this.poll(e,n.id,s)}async poll(e,t,s){let n=y([s?.headers,{"X-Stainless-Poll-Helper":"true","X-Stainless-Custom-Poll-Interval":s?.pollIntervalMs?.toString()??void 0}]);for(;;){let o=await this.retrieve(t,{vector_store_id:e},{...s,headers:n}).withResponse(),i=o.data;switch(i.status){case"in_progress":let a=5e3;if(s?.pollIntervalMs)a=s.pollIntervalMs;else{let l=o.response.headers.get("openai-poll-after-ms");if(l){let p=parseInt(l);isNaN(p)||(a=p)}}await ve(a);break;case"failed":case"completed":return i}}}async upload(e,t,s){let n=await this._client.files.create({file:t,purpose:"assistants"},s);return this.create(e,{file_id:n.id},s)}async uploadAndPoll(e,t,s){let n=await this.upload(e,t,s);return await this.poll(e,n.id,s)}content(e,t,s){let{vector_store_id:n}=t;return this._client.getAPIList(f`/vector_stores/${n}/files/${e}/content`,Ie,{...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}};var Be=class extends m{constructor(){super(...arguments),this.files=new Bs(this._client),this.fileBatches=new Ls(this._client)}create(e,t){return this._client.post("/vector_stores",{body:e,...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}retrieve(e,t){return this._client.get(f`/vector_stores/${e}`,{...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}update(e,t,s){return this._client.post(f`/vector_stores/${e}`,{body:t,...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}list(e={},t){return this._client.getAPIList("/vector_stores",R,{query:e,...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}delete(e,t){return this._client.delete(f`/vector_stores/${e}`,{...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}search(e,t,s){return this._client.getAPIList(f`/vector_stores/${e}/search`,Ie,{body:t,method:"post",...s,headers:y([{"OpenAI-Beta":"assistants=v2"},s?.headers])})}};Be.Files=Bs;Be.FileBatches=Ls;var Ut=class extends m{create(e,t){return this._client.post("/videos",Uo({body:e,...t},this._client))}retrieve(e,t){return this._client.get(f`/videos/${e}`,t)}list(e={},t){return this._client.getAPIList("/videos",Te,{query:e,...t})}delete(e,t){return this._client.delete(f`/videos/${e}`,t)}downloadContent(e,t={},s){return this._client.get(f`/videos/${e}/content`,{query:t,...s,headers:y([{Accept:"application/binary"},s?.headers]),__binaryResponse:!0})}remix(e,t,s){return this._client.post(f`/videos/${e}/remix`,Uo({body:t,...s},this._client))}};var Ds,Ua,Fn,jt=class extends m{constructor(){super(...arguments),Ds.add(this)}async unwrap(e,t,s=this._client.webhookSecret,n=300){return await this.verifySignature(e,t,s,n),JSON.parse(e)}async verifySignature(e,t,s=this._client.webhookSecret,n=300){if(typeof crypto>"u"||typeof crypto.subtle.importKey!="function"||typeof crypto.subtle.verify!="function")throw new Error("Webhook signature verification is only supported when the `crypto` global is defined");d(this,Ds,"m",Ua).call(this,s);let o=y([t]).values,i=d(this,Ds,"m",Fn).call(this,o,"webhook-signature"),a=d(this,Ds,"m",Fn).call(this,o,"webhook-timestamp"),l=d(this,Ds,"m",Fn).call(this,o,"webhook-id"),p=parseInt(a,10);if(isNaN(p))throw new we("Invalid webhook timestamp format");let b=Math.floor(Date.now()/1e3);if(b-p>n)throw new we("Webhook timestamp is too old");if(p>b+n)throw new we("Webhook timestamp is too new");let h=i.split(" ").map(P=>P.startsWith("v1,")?P.substring(3):P),g=s.startsWith("whsec_")?Buffer.from(s.replace("whsec_",""),"base64"):Buffer.from(s,"utf-8"),c=l?`${l}.${a}.${e}`:`${a}.${e}`,x=await crypto.subtle.importKey("raw",g,{name:"HMAC",hash:"SHA-256"},!1,["verify"]);for(let P of h)try{let O=Buffer.from(P,"base64");if(await crypto.subtle.verify("HMAC",x,O,new TextEncoder().encode(c)))return}catch{continue}throw new we("The given webhook signature does not match the expected signature")}};Ds=new WeakSet,Ua=function(e){if(typeof e!="string"||e.length===0)throw new Error("The webhook secret must either be set using the env var, OPENAI_WEBHOOK_SECRET, on the client class, OpenAI({ webhookSecret: '123' }), or passed to this function")},Fn=function(e,t){if(!e)throw new Error("Headers are required");let s=e.get(t);if(s==null)throw new Error(`Missing required header: ${t}`);return s};var ii,ai,$n,ja,A=class{constructor({baseURL:e=tt("OPENAI_BASE_URL"),apiKey:t=tt("OPENAI_API_KEY"),organization:s=tt("OPENAI_ORG_ID")??null,project:n=tt("OPENAI_PROJECT_ID")??null,webhookSecret:o=tt("OPENAI_WEBHOOK_SECRET")??null,...i}={}){if(ii.add(this),$n.set(this,void 0),this.completions=new Ct(this),this.chat=new Qe(this),this.embeddings=new Mt(this),this.files=new Ft(this),this.images=new Bt(this),this.audio=new Se(this),this.moderations=new Ht(this),this.models=new Dt(this),this.fineTuning=new be(this),this.graders=new it(this),this.vectorStores=new Be(this),this.webhooks=new jt(this),this.beta=new ye(this),this.batches=new St(this),this.uploads=new lt(this),this.responses=new Le(this),this.realtime=new Ne(this),this.conversations=new nt(this),this.evals=new ot(this),this.containers=new rt(this),this.videos=new Ut(this),t===void 0)throw new _("Missing credentials. Please pass an `apiKey`, or set the `OPENAI_API_KEY` environment variable.");let a={apiKey:t,organization:s,project:n,webhookSecret:o,...i,baseURL:e||"https://api.openai.com/v1"};if(!a.dangerouslyAllowBrowser&&Xi())throw new _(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety
`);this.baseURL=a.baseURL,this.timeout=a.timeout??ai.DEFAULT_TIMEOUT,this.logger=a.logger??console;let l="warn";this.logLevel=l,this.logLevel=$o(a.logLevel,"ClientOptions.logLevel",this)??$o(tt("OPENAI_LOG"),"process.env['OPENAI_LOG']",this)??l,this.fetchOptions=a.fetchOptions,this.maxRetries=a.maxRetries??2,this.fetch=a.fetch??Yi(),S(this,$n,Zi,"f"),this._options=a,this.apiKey=typeof t=="string"?t:"Missing Key",this.organization=s,this.project=n,this.webhookSecret=o}withOptions(e){return new this.constructor({...this._options,baseURL:this.baseURL,maxRetries:this.maxRetries,timeout:this.timeout,logger:this.logger,logLevel:this.logLevel,fetch:this.fetch,fetchOptions:this.fetchOptions,apiKey:this.apiKey,organization:this.organization,project:this.project,webhookSecret:this.webhookSecret,...e})}defaultQuery(){return this._options.defaultQuery}validateHeaders({values:e,nulls:t}){}async authHeaders(e){return y([{Authorization:`Bearer ${this.apiKey}`}])}stringifyQuery(e){return Oo(e,{arrayFormat:"brackets"})}getUserAgent(){return`${this.constructor.name}/JS ${Xe}`}defaultIdempotencyKey(){return`stainless-node-retry-${Po()}`}makeStatusError(e,t,s,n){return q.generate(e,t,s,n)}async _callApiKey(){let e=this._options.apiKey;if(typeof e!="function")return!1;let t;try{t=await e()}catch(s){throw s instanceof _?s:new _(`Failed to get token from 'apiKey' function: ${s.message}`,{cause:s})}if(typeof t!="string"||!t)throw new _(`Expected 'apiKey' function argument to return a string but it returned ${t}`);return this.apiKey=t,!0}buildURL(e,t,s){let n=!d(this,ii,"m",ja).call(this)&&s||this.baseURL,o=Ui(e)?new URL(e):new URL(n+(n.endsWith("/")&&e.startsWith("/")?e.slice(1):e)),i=this.defaultQuery();return ji(i)||(t={...i,...t}),typeof t=="object"&&t&&!Array.isArray(t)&&(o.search=this.stringifyQuery(t)),o.toString()}async prepareOptions(e){await this._callApiKey()}async prepareRequest(e,{url:t,options:s}){}get(e,t){return this.methodRequest("get",e,t)}post(e,t){return this.methodRequest("post",e,t)}patch(e,t){return this.methodRequest("patch",e,t)}put(e,t){return this.methodRequest("put",e,t)}delete(e,t){return this.methodRequest("delete",e,t)}methodRequest(e,t,s){return this.request(Promise.resolve(s).then(n=>({method:e,path:t,...n})))}request(e,t=null){return new vt(this,this.makeRequest(e,t,void 0))}async makeRequest(e,t,s){let n=await e,o=n.maxRetries??this.maxRetries;t==null&&(t=o),await this.prepareOptions(n);let{req:i,url:a,timeout:l}=await this.buildRequest(n,{retryCount:o-t});await this.prepareRequest(i,{url:a,options:n});let p="log_"+(Math.random()*(1<<24)|0).toString(16).padStart(6,"0"),b=s===void 0?"":`, retryOf: ${s}`,h=Date.now();if(B(this).debug(`[${p}] sending request`,Ce({retryOfRequestLogID:s,method:n.method,url:a,options:n,headers:i.headers})),n.signal?.aborted)throw new U;let g=new AbortController,c=await this.fetchWithTimeout(a,i,l,g).catch(ur),x=Date.now();if(c instanceof globalThis.Error){let k=`retrying, ${t} attempts remaining`;if(n.signal?.aborted)throw new U;let v=dr(c)||/timed? ?out/i.test(String(c)+("cause"in c?String(c.cause):""));if(t)return B(this).info(`[${p}] connection ${v?"timed out":"failed"} - ${k}`),B(this).debug(`[${p}] connection ${v?"timed out":"failed"} (${k})`,Ce({retryOfRequestLogID:s,url:a,durationMs:x-h,message:c.message})),this.retryRequest(n,t,s??p);throw B(this).info(`[${p}] connection ${v?"timed out":"failed"} - error; no more retries left`),B(this).debug(`[${p}] connection ${v?"timed out":"failed"} (error; no more retries left)`,Ce({retryOfRequestLogID:s,url:a,durationMs:x-h,message:c.message})),v?new Ve:new Ge({cause:c})}let P=[...c.headers.entries()].filter(([k])=>k==="x-request-id").map(([k,v])=>", "+k+": "+JSON.stringify(v)).join(""),O=`[${p}${b}${P}] ${i.method} ${a} ${c.ok?"succeeded":"failed"} with status ${c.status} in ${x-h}ms`;if(!c.ok){let k=await this.shouldRetry(c);if(t&&k){let M=`retrying, ${t} attempts remaining`;return await Qi(c.body),B(this).info(`${O} - ${M}`),B(this).debug(`[${p}] response error (${M})`,Ce({retryOfRequestLogID:s,url:c.url,status:c.status,headers:c.headers,durationMs:x-h})),this.retryRequest(n,t,s??p,c.headers)}let v=k?"error; no more retries left":"error; not retryable";B(this).info(`${O} - ${v}`);let L=await c.text().catch(M=>ur(M).message),T=Ki(L),te=T?void 0:L;throw B(this).debug(`[${p}] response error (${v})`,Ce({retryOfRequestLogID:s,url:c.url,status:c.status,headers:c.headers,message:te,durationMs:Date.now()-h})),this.makeStatusError(c.status,T,te,c.headers)}return B(this).info(O),B(this).debug(`[${p}] response start`,Ce({retryOfRequestLogID:s,url:c.url,status:c.status,headers:c.headers,durationMs:x-h})),{response:c,options:n,controller:g,requestLogID:p,retryOfRequestLogID:s,startTime:h}}getAPIList(e,t,s){return this.requestAPIList(t,{method:"get",path:e,...s})}requestAPIList(e,t){let s=this.makeRequest(t,null,void 0);return new yr(this,s,e)}async fetchWithTimeout(e,t,s,n){let{signal:o,method:i,...a}=t||{};o&&o.addEventListener("abort",()=>n.abort());let l=setTimeout(()=>n.abort(),s),p=globalThis.ReadableStream&&a.body instanceof globalThis.ReadableStream||typeof a.body=="object"&&a.body!==null&&Symbol.asyncIterator in a.body,b={signal:n.signal,...p?{duplex:"half"}:{},method:"GET",...a};i&&(b.method=i.toUpperCase());try{return await this.fetch.call(void 0,e,b)}finally{clearTimeout(l)}}async shouldRetry(e){let t=e.headers.get("x-should-retry");return t==="true"?!0:t==="false"?!1:e.status===408||e.status===409||e.status===429||e.status>=500}async retryRequest(e,t,s,n){let o,i=n?.get("retry-after-ms");if(i){let l=parseFloat(i);Number.isNaN(l)||(o=l)}let a=n?.get("retry-after");if(a&&!o){let l=parseFloat(a);Number.isNaN(l)?o=Date.parse(a)-Date.now():o=l*1e3}if(!(o&&0<=o&&o<60*1e3)){let l=e.maxRetries??this.maxRetries;o=this.calculateDefaultRetryTimeoutMillis(t,l)}return await ve(o),this.makeRequest(e,t-1,s)}calculateDefaultRetryTimeoutMillis(e,t){let o=t-e,i=Math.min(.5*Math.pow(2,o),8),a=1-Math.random()*.25;return i*a*1e3}async buildRequest(e,{retryCount:t=0}={}){let s={...e},{method:n,path:o,query:i,defaultBaseURL:a}=s,l=this.buildURL(o,i,a);"timeout"in s&&Wi("timeout",s.timeout),s.timeout=s.timeout??this.timeout;let{bodyHeaders:p,body:b}=this.buildBody({options:s}),h=await this.buildHeaders({options:e,method:n,bodyHeaders:p,retryCount:t});return{req:{method:n,headers:h,...s.signal&&{signal:s.signal},...globalThis.ReadableStream&&b instanceof globalThis.ReadableStream&&{duplex:"half"},...b&&{body:b},...this.fetchOptions??{},...s.fetchOptions??{}},url:l,timeout:s.timeout}}async buildHeaders({options:e,method:t,bodyHeaders:s,retryCount:n}){let o={};this.idempotencyHeader&&t!=="get"&&(e.idempotencyKey||(e.idempotencyKey=this.defaultIdempotencyKey()),o[this.idempotencyHeader]=e.idempotencyKey);let i=y([o,{Accept:"application/json","User-Agent":this.getUserAgent(),"X-Stainless-Retry-Count":String(n),...e.timeout?{"X-Stainless-Timeout":String(Math.trunc(e.timeout/1e3))}:{},...zi(),"OpenAI-Organization":this.organization,"OpenAI-Project":this.project},await this.authHeaders(e),this._options.defaultHeaders,s,e.headers]);return this.validateHeaders(i),i.values}buildBody({options:{body:e,headers:t}}){if(!e)return{bodyHeaders:void 0,body:void 0};let s=y([t]);return ArrayBuffer.isView(e)||e instanceof ArrayBuffer||e instanceof DataView||typeof e=="string"&&s.values.has("content-type")||globalThis.Blob&&e instanceof globalThis.Blob||e instanceof FormData||e instanceof URLSearchParams||globalThis.ReadableStream&&e instanceof globalThis.ReadableStream?{bodyHeaders:void 0,body:e}:typeof e=="object"&&(Symbol.asyncIterator in e||Symbol.iterator in e&&"next"in e&&typeof e.next=="function")?{bodyHeaders:void 0,body:an(e)}:d(this,$n,"f").call(this,{body:e,headers:s})}};ai=A,$n=new WeakMap,ii=new WeakSet,ja=function(){return this.baseURL!=="https://api.openai.com/v1"};A.OpenAI=ai;A.DEFAULT_TIMEOUT=6e5;A.OpenAIError=_;A.APIError=q;A.APIConnectionError=Ge;A.APIConnectionTimeoutError=Ve;A.APIUserAbortError=U;A.NotFoundError=Zt;A.ConflictError=es;A.RateLimitError=ss;A.BadRequestError=zt;A.AuthenticationError=Yt;A.InternalServerError=rs;A.PermissionDeniedError=Qt;A.UnprocessableEntityError=ts;A.InvalidWebhookSignatureError=we;A.toFile=gn;A.Completions=Ct;A.Chat=Qe;A.Embeddings=Mt;A.Files=Ft;A.Images=Bt;A.Audio=Se;A.Moderations=Ht;A.Models=Dt;A.FineTuning=be;A.Graders=it;A.VectorStores=Be;A.Webhooks=jt;A.Beta=ye;A.Batches=St;A.Uploads=lt;A.Responses=Le;A.Realtime=Ne;A.Conversations=nt;A.Evals=ot;A.Containers=rt;A.Videos=Ut;function w(r,e,t,s,n){if(s==="m")throw new TypeError("Private method is not writable");if(s==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?r!==e||!n:!e.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s==="a"?n.call(r,t):n?n.value=t:e.set(r,t),t}function u(r,e,t,s){if(t==="a"&&!s)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?r!==e||!s:!e.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?s:t==="a"?s.call(r):s?s.value:e.get(r)}var li=function(){let{crypto:r}=globalThis;if(r?.randomUUID)return li=r.randomUUID.bind(r),r.randomUUID();let e=new Uint8Array(1),t=r?()=>r.getRandomValues(e)[0]:()=>Math.random()*255&255;return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,s=>(+s^t()&15>>+s/4).toString(16))};function De(r){return typeof r=="object"&&r!==null&&("name"in r&&r.name==="AbortError"||"message"in r&&String(r.message).includes("FetchRequestCanceledException"))}var Tr=r=>{if(r instanceof Error)return r;if(typeof r=="object"&&r!==null){try{if(Object.prototype.toString.call(r)==="[object Error]"){let e=new Error(r.message,r.cause?{cause:r.cause}:{});return r.stack&&(e.stack=r.stack),r.cause&&!e.cause&&(e.cause=r.cause),r.name&&(e.name=r.name),e}}catch{}try{return new Error(JSON.stringify(r))}catch{}}return new Error(r)};var I=class extends Error{},z=class r extends I{constructor(e,t,s,n){super(`${r.makeMessage(e,t,s)}`),this.status=e,this.headers=n,this.requestID=n?.get("request-id"),this.error=t}static makeMessage(e,t,s){let n=t?.message?typeof t.message=="string"?t.message:JSON.stringify(t.message):t?JSON.stringify(t):s;return e&&n?`${e} ${n}`:e?`${e} status code (no body)`:n||"(no status code or body)"}static generate(e,t,s,n){if(!e||!n)return new ct({message:s,cause:Tr(t)});let o=t;return e===400?new Us(e,o,s,n):e===401?new js(e,o,s,n):e===403?new qs(e,o,s,n):e===404?new Ws(e,o,s,n):e===409?new Ks(e,o,s,n):e===422?new Js(e,o,s,n):e===429?new Gs(e,o,s,n):e>=500?new Vs(e,o,s,n):new r(e,o,s,n)}},ee=class extends z{constructor({message:e}={}){super(void 0,void 0,e||"Request was aborted.",void 0)}},ct=class extends z{constructor({message:e,cause:t}){super(void 0,void 0,e||"Connection error.",void 0),t&&(this.cause=t)}},Hs=class extends ct{constructor({message:e}={}){super({message:e??"Request timed out."})}},Us=class extends z{},js=class extends z{},qs=class extends z{},Ws=class extends z{},Ks=class extends z{},Js=class extends z{},Gs=class extends z{},Vs=class extends z{};var Ed=/^[a-z][a-z0-9+.-]*:/i,qa=r=>Ed.test(r),ci=r=>(ci=Array.isArray,ci(r)),di=ci;function Nn(r){return typeof r!="object"?{}:r??{}}function Wa(r){if(!r)return!0;for(let e in r)return!1;return!0}function Ka(r,e){return Object.prototype.hasOwnProperty.call(r,e)}var Ja=(r,e)=>{if(typeof e!="number"||!Number.isInteger(e))throw new I(`${r} must be an integer`);if(e<0)throw new I(`${r} must be a positive integer`);return e};var Ln=r=>{try{return JSON.parse(r)}catch{return}};var Ga=r=>new Promise(e=>setTimeout(e,r));var dt="0.71.0";var Ya=()=>typeof window<"u"&&typeof window.document<"u"&&typeof navigator<"u";function Rd(){return typeof Deno<"u"&&Deno.build!=null?"deno":typeof EdgeRuntime<"u"?"edge":Object.prototype.toString.call(typeof globalThis.process<"u"?globalThis.process:0)==="[object process]"?"node":"unknown"}var kd=()=>{let r=Rd();if(r==="deno")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":dt,"X-Stainless-OS":Xa(Deno.build.os),"X-Stainless-Arch":Va(Deno.build.arch),"X-Stainless-Runtime":"deno","X-Stainless-Runtime-Version":typeof Deno.version=="string"?Deno.version:Deno.version?.deno??"unknown"};if(typeof EdgeRuntime<"u")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":dt,"X-Stainless-OS":"Unknown","X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":"edge","X-Stainless-Runtime-Version":globalThis.process.version};if(r==="node")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":dt,"X-Stainless-OS":Xa(globalThis.process.platform??"unknown"),"X-Stainless-Arch":Va(globalThis.process.arch??"unknown"),"X-Stainless-Runtime":"node","X-Stainless-Runtime-Version":globalThis.process.version??"unknown"};let e=Cd();return e?{"X-Stainless-Lang":"js","X-Stainless-Package-Version":dt,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":`browser:${e.browser}`,"X-Stainless-Runtime-Version":e.version}:{"X-Stainless-Lang":"js","X-Stainless-Package-Version":dt,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":"unknown","X-Stainless-Runtime-Version":"unknown"}};function Cd(){if(typeof navigator>"u"||!navigator)return null;let r=[{key:"edge",pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"chrome",pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"firefox",pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"safari",pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}];for(let{key:e,pattern:t}of r){let s=t.exec(navigator.userAgent);if(s){let n=s[1]||0,o=s[2]||0,i=s[3]||0;return{browser:e,version:`${n}.${o}.${i}`}}}return null}var Va=r=>r==="x32"?"x32":r==="x86_64"||r==="x64"?"x64":r==="arm"?"arm":r==="aarch64"||r==="arm64"?"arm64":r?`other:${r}`:"unknown",Xa=r=>(r=r.toLowerCase(),r.includes("ios")?"iOS":r==="android"?"Android":r==="darwin"?"MacOS":r==="win32"?"Windows":r==="freebsd"?"FreeBSD":r==="openbsd"?"OpenBSD":r==="linux"?"Linux":r?`Other:${r}`:"Unknown"),za,Qa=()=>za??(za=kd());function Za(){if(typeof fetch<"u")return fetch;throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new Anthropic({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")}function ui(...r){let e=globalThis.ReadableStream;if(typeof e>"u")throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");return new e(...r)}function Bn(r){let e=Symbol.asyncIterator in r?r[Symbol.asyncIterator]():r[Symbol.iterator]();return ui({start(){},async pull(t){let{done:s,value:n}=await e.next();s?t.close():t.enqueue(n)},async cancel(){await e.return?.()}})}function Mr(r){if(r[Symbol.asyncIterator])return r;let e=r.getReader();return{async next(){try{let t=await e.read();return t?.done&&e.releaseLock(),t}catch(t){throw e.releaseLock(),t}},async return(){let t=e.cancel();return e.releaseLock(),await t,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}async function el(r){if(r===null||typeof r!="object")return;if(r[Symbol.asyncIterator]){await r[Symbol.asyncIterator]().return?.();return}let e=r.getReader(),t=e.cancel();e.releaseLock(),await t}var tl=({headers:r,body:e})=>({bodyHeaders:{"content-type":"application/json"},body:JSON.stringify(e)});function nl(r){let e=0;for(let n of r)e+=n.length;let t=new Uint8Array(e),s=0;for(let n of r)t.set(n,s),s+=n.length;return t}var sl;function Or(r){let e;return(sl??(e=new globalThis.TextEncoder,sl=e.encode.bind(e)))(r)}var rl;function pi(r){let e;return(rl??(e=new globalThis.TextDecoder,rl=e.decode.bind(e)))(r)}var ce,de,He=class{constructor(){ce.set(this,void 0),de.set(this,void 0),w(this,ce,new Uint8Array,"f"),w(this,de,null,"f")}decode(e){if(e==null)return[];let t=e instanceof ArrayBuffer?new Uint8Array(e):typeof e=="string"?Or(e):e;w(this,ce,nl([u(this,ce,"f"),t]),"f");let s=[],n;for(;(n=Od(u(this,ce,"f"),u(this,de,"f")))!=null;){if(n.carriage&&u(this,de,"f")==null){w(this,de,n.index,"f");continue}if(u(this,de,"f")!=null&&(n.index!==u(this,de,"f")+1||n.carriage)){s.push(pi(u(this,ce,"f").subarray(0,u(this,de,"f")-1))),w(this,ce,u(this,ce,"f").subarray(u(this,de,"f")),"f"),w(this,de,null,"f");continue}let o=u(this,de,"f")!==null?n.preceding-1:n.preceding,i=pi(u(this,ce,"f").subarray(0,o));s.push(i),w(this,ce,u(this,ce,"f").subarray(n.index),"f"),w(this,de,null,"f")}return s}flush(){return u(this,ce,"f").length?this.decode(`
`):[]}};ce=new WeakMap,de=new WeakMap;He.NEWLINE_CHARS=new Set([`
`,"\r"]);He.NEWLINE_REGEXP=/\r\n|[\n\r]/g;function Od(r,e){for(let n=e??0;n<r.length;n++){if(r[n]===10)return{preceding:n,index:n+1,carriage:!1};if(r[n]===13)return{preceding:n,index:n+1,carriage:!0}}return null}function ol(r){for(let s=0;s<r.length-1;s++){if(r[s]===10&&r[s+1]===10||r[s]===13&&r[s+1]===13)return s+2;if(r[s]===13&&r[s+1]===10&&s+3<r.length&&r[s+2]===13&&r[s+3]===10)return s+4}return-1}var Hn={off:0,error:200,warn:300,info:400,debug:500},fi=(r,e,t)=>{if(r){if(Ka(Hn,r))return r;Y(t).warn(`${e} was set to ${JSON.stringify(r)}, expected one of ${JSON.stringify(Object.keys(Hn))}`)}};function Fr(){}function Dn(r,e,t){return!e||Hn[r]>Hn[t]?Fr:e[r].bind(e)}var Fd={error:Fr,warn:Fr,info:Fr,debug:Fr},il=new WeakMap;function Y(r){let e=r.logger,t=r.logLevel??"off";if(!e)return Fd;let s=il.get(e);if(s&&s[0]===t)return s[1];let n={error:Dn("error",e,t),warn:Dn("warn",e,t),info:Dn("info",e,t),debug:Dn("debug",e,t)};return il.set(e,[t,n]),n}var Ue=r=>(r.options&&(r.options={...r.options},delete r.options.headers),r.headers&&(r.headers=Object.fromEntries((r.headers instanceof Headers?[...r.headers]:Object.entries(r.headers)).map(([e,t])=>[e,e.toLowerCase()==="x-api-key"||e.toLowerCase()==="authorization"||e.toLowerCase()==="cookie"||e.toLowerCase()==="set-cookie"?"***":t]))),"retryOfRequestLogID"in r&&(r.retryOfRequestLogID&&(r.retryOf=r.retryOfRequestLogID),delete r.retryOfRequestLogID),r);var $r,Ee=class r{constructor(e,t,s){this.iterator=e,$r.set(this,void 0),this.controller=t,w(this,$r,s,"f")}static fromSSEResponse(e,t,s){let n=!1,o=s?Y(s):console;async function*i(){if(n)throw new I("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");n=!0;let a=!1;try{for await(let l of $d(e,t)){if(l.event==="completion")try{yield JSON.parse(l.data)}catch(p){throw o.error("Could not parse message into JSON:",l.data),o.error("From chunk:",l.raw),p}if(l.event==="message_start"||l.event==="message_delta"||l.event==="message_stop"||l.event==="content_block_start"||l.event==="content_block_delta"||l.event==="content_block_stop")try{yield JSON.parse(l.data)}catch(p){throw o.error("Could not parse message into JSON:",l.data),o.error("From chunk:",l.raw),p}if(l.event!=="ping"&&l.event==="error")throw new z(void 0,Ln(l.data)??l.data,void 0,e.headers)}a=!0}catch(l){if(De(l))return;throw l}finally{a||t.abort()}}return new r(i,t,s)}static fromReadableStream(e,t,s){let n=!1;async function*o(){let a=new He,l=Mr(e);for await(let p of l)for(let b of a.decode(p))yield b;for(let p of a.flush())yield p}async function*i(){if(n)throw new I("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");n=!0;let a=!1;try{for await(let l of o())a||l&&(yield JSON.parse(l));a=!0}catch(l){if(De(l))return;throw l}finally{a||t.abort()}}return new r(i,t,s)}[($r=new WeakMap,Symbol.asyncIterator)](){return this.iterator()}tee(){let e=[],t=[],s=this.iterator(),n=o=>({next:()=>{if(o.length===0){let i=s.next();e.push(i),t.push(i)}return o.shift()}});return[new r(()=>n(e),this.controller,u(this,$r,"f")),new r(()=>n(t),this.controller,u(this,$r,"f"))]}toReadableStream(){let e=this,t;return ui({async start(){t=e[Symbol.asyncIterator]()},async pull(s){try{let{value:n,done:o}=await t.next();if(o)return s.close();let i=Or(JSON.stringify(n)+`
`);s.enqueue(i)}catch(n){s.error(n)}},async cancel(){await t.return?.()}})}};async function*$d(r,e){if(!r.body)throw e.abort(),typeof globalThis.navigator<"u"&&globalThis.navigator.product==="ReactNative"?new I("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api"):new I("Attempted to iterate over a response with no body");let t=new hi,s=new He,n=Mr(r.body);for await(let o of Nd(n))for(let i of s.decode(o)){let a=t.decode(i);a&&(yield a)}for(let o of s.flush()){let i=t.decode(o);i&&(yield i)}}async function*Nd(r){let e=new Uint8Array;for await(let t of r){if(t==null)continue;let s=t instanceof ArrayBuffer?new Uint8Array(t):typeof t=="string"?Or(t):t,n=new Uint8Array(e.length+s.length);n.set(e),n.set(s,e.length),e=n;let o;for(;(o=ol(e))!==-1;)yield e.slice(0,o),e=e.slice(o)}e.length>0&&(yield e)}var hi=class{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(e){if(e.endsWith("\r")&&(e=e.substring(0,e.length-1)),!e){if(!this.event&&!this.data.length)return null;let o={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],o}if(this.chunks.push(e),e.startsWith(":"))return null;let[t,s,n]=Ld(e,":");return n.startsWith(" ")&&(n=n.substring(1)),t==="event"?this.event=n:t==="data"&&this.data.push(n),null}};function Ld(r,e){let t=r.indexOf(e);return t!==-1?[r.substring(0,t),e,r.substring(t+e.length)]:[r,"",""]}async function Un(r,e){let{response:t,requestLogID:s,retryOfRequestLogID:n,startTime:o}=e,i=await(async()=>{if(e.options.stream)return Y(r).debug("response",t.status,t.url,t.headers,t.body),e.options.__streamClass?e.options.__streamClass.fromSSEResponse(t,e.controller):Ee.fromSSEResponse(t,e.controller);if(t.status===204)return null;if(e.options.__binaryResponse)return t;let l=t.headers.get("content-type")?.split(";")[0]?.trim();if(l?.includes("application/json")||l?.endsWith("+json")){let h=await t.json();return mi(h,t)}return await t.text()})();return Y(r).debug(`[${s}] response parsed`,Ue({retryOfRequestLogID:n,url:t.url,status:t.status,body:i,durationMs:Date.now()-o})),i}function mi(r,e){return!r||typeof r!="object"||Array.isArray(r)?r:Object.defineProperty(r,"_request_id",{value:e.headers.get("request-id"),enumerable:!1})}var Nr,qt=class r extends Promise{constructor(e,t,s=Un){super(n=>{n(null)}),this.responsePromise=t,this.parseResponse=s,Nr.set(this,void 0),w(this,Nr,e,"f")}_thenUnwrap(e){return new r(u(this,Nr,"f"),this.responsePromise,async(t,s)=>mi(e(await this.parseResponse(t,s),s),s.response))}asResponse(){return this.responsePromise.then(e=>e.response)}async withResponse(){let[e,t]=await Promise.all([this.parse(),this.asResponse()]);return{data:e,response:t,request_id:t.headers.get("request-id")}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(e=>this.parseResponse(u(this,Nr,"f"),e))),this.parsedPromise}then(e,t){return this.parse().then(e,t)}catch(e){return this.parse().catch(e)}finally(e){return this.parse().finally(e)}};Nr=new WeakMap;var jn,qn=class{constructor(e,t,s,n){jn.set(this,void 0),w(this,jn,e,"f"),this.options=n,this.response=t,this.body=s}hasNextPage(){return this.getPaginatedItems().length?this.nextPageRequestOptions()!=null:!1}async getNextPage(){let e=this.nextPageRequestOptions();if(!e)throw new I("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");return await u(this,jn,"f").requestAPIList(this.constructor,e)}async*iterPages(){let e=this;for(yield e;e.hasNextPage();)e=await e.getNextPage(),yield e}async*[(jn=new WeakMap,Symbol.asyncIterator)](){for await(let e of this.iterPages())for(let t of e.getPaginatedItems())yield t}},Lr=class extends qt{constructor(e,t,s){super(e,t,async(n,o)=>new s(n,o.response,await Un(n,o),o.options))}async*[Symbol.asyncIterator](){let e=await this;for await(let t of e)yield t}},pe=class extends qn{constructor(e,t,s,n){super(e,t,s,n),this.data=s.data||[],this.has_more=s.has_more||!1,this.first_id=s.first_id||null,this.last_id=s.last_id||null}getPaginatedItems(){return this.data??[]}hasNextPage(){return this.has_more===!1?!1:super.hasNextPage()}nextPageRequestOptions(){if(this.options.query?.before_id){let t=this.first_id;return t?{...this.options,query:{...Nn(this.options.query),before_id:t}}:null}let e=this.last_id;return e?{...this.options,query:{...Nn(this.options.query),after_id:e}}:null}};var Xs=class extends qn{constructor(e,t,s,n){super(e,t,s,n),this.data=s.data||[],this.has_more=s.has_more||!1,this.next_page=s.next_page||null}getPaginatedItems(){return this.data??[]}hasNextPage(){return this.has_more===!1?!1:super.hasNextPage()}nextPageRequestOptions(){let e=this.next_page;return e?{...this.options,query:{...Nn(this.options.query),page:e}}:null}};var yi=()=>{if(typeof File>"u"){let{process:r}=globalThis,e=typeof r?.versions?.node=="string"&&parseInt(r.versions.node.split("."))<20;throw new Error("`File` is not defined as a global, which is required for file uploads."+(e?" Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`.":""))}};function Wt(r,e,t){return yi(),new File(r,e??"unknown_file",t)}function Br(r){return(typeof r=="object"&&r!==null&&("name"in r&&r.name&&String(r.name)||"url"in r&&r.url&&String(r.url)||"filename"in r&&r.filename&&String(r.filename)||"path"in r&&r.path&&String(r.path))||"").split(/[\\/]/).pop()||void 0}var bi=r=>r!=null&&typeof r=="object"&&typeof r[Symbol.asyncIterator]=="function";var zs=async(r,e)=>({...r,body:await Hd(r.body,e)}),al=new WeakMap;function Dd(r){let e=typeof r=="function"?r:r.fetch,t=al.get(e);if(t)return t;let s=(async()=>{try{let n="Response"in e?e.Response:(await e("data:,")).constructor,o=new FormData;return o.toString()!==await new n(o).text()}catch{return!0}})();return al.set(e,s),s}var Hd=async(r,e)=>{if(!await Dd(e))throw new TypeError("The provided fetch function does not support file uploads with the current global FormData class.");let t=new FormData;return await Promise.all(Object.entries(r||{}).map(([s,n])=>gi(t,s,n))),t},Ud=r=>r instanceof Blob&&"name"in r;var gi=async(r,e,t)=>{if(t!==void 0){if(t==null)throw new TypeError(`Received null for "${e}"; to pass null in FormData, you must use the string 'null'`);if(typeof t=="string"||typeof t=="number"||typeof t=="boolean")r.append(e,String(t));else if(t instanceof Response){let s={},n=t.headers.get("Content-Type");n&&(s={type:n}),r.append(e,Wt([await t.blob()],Br(t),s))}else if(bi(t))r.append(e,Wt([await new Response(Bn(t)).blob()],Br(t)));else if(Ud(t))r.append(e,Wt([t],Br(t),{type:t.type}));else if(Array.isArray(t))await Promise.all(t.map(s=>gi(r,e+"[]",s)));else if(typeof t=="object")await Promise.all(Object.entries(t).map(([s,n])=>gi(r,`${e}[${s}]`,n)));else throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${t} instead`)}};var ll=r=>r!=null&&typeof r=="object"&&typeof r.size=="number"&&typeof r.type=="string"&&typeof r.text=="function"&&typeof r.slice=="function"&&typeof r.arrayBuffer=="function",jd=r=>r!=null&&typeof r=="object"&&typeof r.name=="string"&&typeof r.lastModified=="number"&&ll(r),qd=r=>r!=null&&typeof r=="object"&&typeof r.url=="string"&&typeof r.blob=="function";async function Wn(r,e,t){if(yi(),r=await r,e||(e=Br(r)),jd(r))return r instanceof File&&e==null&&t==null?r:Wt([await r.arrayBuffer()],e??r.name,{type:r.type,lastModified:r.lastModified,...t});if(qd(r)){let n=await r.blob();return e||(e=new URL(r.url).pathname.split(/[\\/]/).pop()),Wt(await _i(n),e,t)}let s=await _i(r);if(!t?.type){let n=s.find(o=>typeof o=="object"&&"type"in o&&o.type);typeof n=="string"&&(t={...t,type:n})}return Wt(s,e,t)}async function _i(r){let e=[];if(typeof r=="string"||ArrayBuffer.isView(r)||r instanceof ArrayBuffer)e.push(r);else if(ll(r))e.push(r instanceof Blob?r:await r.arrayBuffer());else if(bi(r))for await(let t of r)e.push(...await _i(t));else{let t=r?.constructor?.name;throw new Error(`Unexpected data type: ${typeof r}${t?`; constructor: ${t}`:""}${Wd(r)}`)}return e}function Wd(r){return typeof r!="object"||r===null?"":`; props: [${Object.getOwnPropertyNames(r).map(t=>`"${t}"`).join(", ")}]`}var F=class{constructor(e){this._client=e}};var cl=Symbol.for("brand.privateNullableHeaders");function*Jd(r){if(!r)return;if(cl in r){let{values:s,nulls:n}=r;yield*s.entries();for(let o of n)yield[o,null];return}let e=!1,t;r instanceof Headers?t=r.entries():di(r)?t=r:(e=!0,t=Object.entries(r??{}));for(let s of t){let n=s[0];if(typeof n!="string")throw new TypeError("expected header name to be a string");let o=di(s[1])?s[1]:[s[1]],i=!1;for(let a of o)a!==void 0&&(e&&!i&&(i=!0,yield[n,null]),yield[n,a])}}var E=r=>{let e=new Headers,t=new Set;for(let s of r){let n=new Set;for(let[o,i]of Jd(s)){let a=o.toLowerCase();n.has(a)||(e.delete(o),n.add(a)),i===null?(e.delete(o),t.add(a)):(e.append(o,i),t.delete(a))}}return{[cl]:!0,values:e,nulls:t}};function ul(r){return r.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g,encodeURIComponent)}var dl=Object.freeze(Object.create(null)),Gd=(r=ul)=>function(t,...s){if(t.length===1)return t[0];let n=!1,o=[],i=t.reduce((b,h,g)=>{/[?#]/.test(h)&&(n=!0);let c=s[g],x=(n?encodeURIComponent:r)(""+c);return g!==s.length&&(c==null||typeof c=="object"&&c.toString===Object.getPrototypeOf(Object.getPrototypeOf(c.hasOwnProperty??dl)??dl)?.toString)&&(x=c+"",o.push({start:b.length+h.length,length:x.length,error:`Value of type ${Object.prototype.toString.call(c).slice(8,-1)} is not a valid path parameter`})),b+h+(g===s.length?"":x)},""),a=i.split(/[?#]/,1)[0],l=/(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi,p;for(;(p=l.exec(a))!==null;)o.push({start:p.index,length:p[0].length,error:`Value "${p[0]}" can't be safely passed as a path parameter`});if(o.sort((b,h)=>b.start-h.start),o.length>0){let b=0,h=o.reduce((g,c)=>{let x=" ".repeat(c.start-b),P="^".repeat(c.length);return b=c.start+c.length,g+x+P},"");throw new I(`Path parameters result in path with invalid segments:
${o.map(g=>g.error).join(`
`)}
${i}
${h}`)}return i},$=Gd(ul);var Ys=class extends F{list(e={},t){let{betas:s,...n}=e??{};return this._client.getAPIList("/v1/files",pe,{query:n,...t,headers:E([{"anthropic-beta":[...s??[],"files-api-2025-04-14"].toString()},t?.headers])})}delete(e,t={},s){let{betas:n}=t??{};return this._client.delete($`/v1/files/${e}`,{...s,headers:E([{"anthropic-beta":[...n??[],"files-api-2025-04-14"].toString()},s?.headers])})}download(e,t={},s){let{betas:n}=t??{};return this._client.get($`/v1/files/${e}/content`,{...s,headers:E([{"anthropic-beta":[...n??[],"files-api-2025-04-14"].toString(),Accept:"application/binary"},s?.headers]),__binaryResponse:!0})}retrieveMetadata(e,t={},s){let{betas:n}=t??{};return this._client.get($`/v1/files/${e}`,{...s,headers:E([{"anthropic-beta":[...n??[],"files-api-2025-04-14"].toString()},s?.headers])})}upload(e,t){let{betas:s,...n}=e;return this._client.post("/v1/files",zs({body:n,...t,headers:E([{"anthropic-beta":[...s??[],"files-api-2025-04-14"].toString()},t?.headers])},this._client))}};var Qs=class extends F{retrieve(e,t={},s){let{betas:n}=t??{};return this._client.get($`/v1/models/${e}?beta=true`,{...s,headers:E([{...n?.toString()!=null?{"anthropic-beta":n?.toString()}:void 0},s?.headers])})}list(e={},t){let{betas:s,...n}=e??{};return this._client.getAPIList("/v1/models?beta=true",pe,{query:n,...t,headers:E([{...s?.toString()!=null?{"anthropic-beta":s?.toString()}:void 0},t?.headers])})}};var Kn={"claude-opus-4-20250514":8192,"claude-opus-4-0":8192,"claude-4-opus-20250514":8192,"anthropic.claude-opus-4-20250514-v1:0":8192,"claude-opus-4@20250514":8192,"claude-opus-4-1-20250805":8192,"anthropic.claude-opus-4-1-20250805-v1:0":8192,"claude-opus-4-1@20250805":8192};function wi(r,e){return!e||!("parse"in(e.output_format??{}))?{...r,content:r.content.map(t=>t.type==="text"?{...t,parsed:null}:t),parsed_output:null}:vi(r,e)}function vi(r,e){let t=null,s=r.content.map(n=>{if(n.type==="text"){let o=zd(e,n.text);return t===null&&(t=o),{...n,parsed:o}}return n});return{...r,content:s,parsed_output:t}}function zd(r,e){if(r.output_format?.type!=="json_schema")return null;try{return"parse"in r.output_format?r.output_format.parse(e):JSON.parse(e)}catch(t){throw new I(`Failed to parse structured output: ${t}`)}}var Yd=r=>{let e=0,t=[];for(;e<r.length;){let s=r[e];if(s==="\\"){e++;continue}if(s==="{"){t.push({type:"brace",value:"{"}),e++;continue}if(s==="}"){t.push({type:"brace",value:"}"}),e++;continue}if(s==="["){t.push({type:"paren",value:"["}),e++;continue}if(s==="]"){t.push({type:"paren",value:"]"}),e++;continue}if(s===":"){t.push({type:"separator",value:":"}),e++;continue}if(s===","){t.push({type:"delimiter",value:","}),e++;continue}if(s==='"'){let a="",l=!1;for(s=r[++e];s!=='"';){if(e===r.length){l=!0;break}if(s==="\\"){if(e++,e===r.length){l=!0;break}a+=s+r[e],s=r[++e]}else a+=s,s=r[++e]}s=r[++e],l||t.push({type:"string",value:a});continue}if(s&&/\s/.test(s)){e++;continue}let o=/[0-9]/;if(s&&o.test(s)||s==="-"||s==="."){let a="";for(s==="-"&&(a+=s,s=r[++e]);s&&o.test(s)||s===".";)a+=s,s=r[++e];t.push({type:"number",value:a});continue}let i=/[a-z]/i;if(s&&i.test(s)){let a="";for(;s&&i.test(s)&&e!==r.length;)a+=s,s=r[++e];if(a=="true"||a=="false"||a==="null")t.push({type:"name",value:a});else{e++;continue}continue}e++}return t},Zs=r=>{if(r.length===0)return r;let e=r[r.length-1];switch(e.type){case"separator":return r=r.slice(0,r.length-1),Zs(r);break;case"number":let t=e.value[e.value.length-1];if(t==="."||t==="-")return r=r.slice(0,r.length-1),Zs(r);case"string":let s=r[r.length-2];if(s?.type==="delimiter")return r=r.slice(0,r.length-1),Zs(r);if(s?.type==="brace"&&s.value==="{")return r=r.slice(0,r.length-1),Zs(r);break;case"delimiter":return r=r.slice(0,r.length-1),Zs(r);break}return r},Qd=r=>{let e=[];return r.map(t=>{t.type==="brace"&&(t.value==="{"?e.push("}"):e.splice(e.lastIndexOf("}"),1)),t.type==="paren"&&(t.value==="["?e.push("]"):e.splice(e.lastIndexOf("]"),1))}),e.length>0&&e.reverse().map(t=>{t==="}"?r.push({type:"brace",value:"}"}):t==="]"&&r.push({type:"paren",value:"]"})}),r},Zd=r=>{let e="";return r.map(t=>{switch(t.type){case"string":e+='"'+t.value+'"';break;default:e+=t.value;break}}),e},Jn=r=>JSON.parse(Zd(Qd(Zs(Yd(r)))));var fe,ut,er,Dr,Gn,Hr,Ur,Vn,jr,je,qr,Xn,zn,tr,Yn,Qn,xi,pl,Zn,Pi,Ii,Si,fl,hl="__json_buf";function ml(r){return r.type==="tool_use"||r.type==="server_tool_use"||r.type==="mcp_tool_use"}var eo=class r{constructor(e){fe.add(this),this.messages=[],this.receivedMessages=[],ut.set(this,void 0),er.set(this,null),this.controller=new AbortController,Dr.set(this,void 0),Gn.set(this,()=>{}),Hr.set(this,()=>{}),Ur.set(this,void 0),Vn.set(this,()=>{}),jr.set(this,()=>{}),je.set(this,{}),qr.set(this,!1),Xn.set(this,!1),zn.set(this,!1),tr.set(this,!1),Yn.set(this,void 0),Qn.set(this,void 0),Zn.set(this,t=>{if(w(this,Xn,!0,"f"),De(t)&&(t=new ee),t instanceof ee)return w(this,zn,!0,"f"),this._emit("abort",t);if(t instanceof I)return this._emit("error",t);if(t instanceof Error){let s=new I(t.message);return s.cause=t,this._emit("error",s)}return this._emit("error",new I(String(t)))}),w(this,Dr,new Promise((t,s)=>{w(this,Gn,t,"f"),w(this,Hr,s,"f")}),"f"),w(this,Ur,new Promise((t,s)=>{w(this,Vn,t,"f"),w(this,jr,s,"f")}),"f"),u(this,Dr,"f").catch(()=>{}),u(this,Ur,"f").catch(()=>{}),w(this,er,e,"f")}get response(){return u(this,Yn,"f")}get request_id(){return u(this,Qn,"f")}async withResponse(){let e=await u(this,Dr,"f");if(!e)throw new Error("Could not resolve a `Response` object");return{data:this,response:e,request_id:e.headers.get("request-id")}}static fromReadableStream(e){let t=new r(null);return t._run(()=>t._fromReadableStream(e)),t}static createMessage(e,t,s){let n=new r(t);for(let o of t.messages)n._addMessageParam(o);return w(n,er,{...t,stream:!0},"f"),n._run(()=>n._createMessage(e,{...t,stream:!0},{...s,headers:{...s?.headers,"X-Stainless-Helper-Method":"stream"}})),n}_run(e){e().then(()=>{this._emitFinal(),this._emit("end")},u(this,Zn,"f"))}_addMessageParam(e){this.messages.push(e)}_addMessage(e,t=!0){this.receivedMessages.push(e),t&&this._emit("message",e)}async _createMessage(e,t,s){let n=s?.signal,o;n&&(n.aborted&&this.controller.abort(),o=this.controller.abort.bind(this.controller),n.addEventListener("abort",o));try{u(this,fe,"m",Pi).call(this);let{response:i,data:a}=await e.create({...t,stream:!0},{...s,signal:this.controller.signal}).withResponse();this._connected(i);for await(let l of a)u(this,fe,"m",Ii).call(this,l);if(a.controller.signal?.aborted)throw new ee;u(this,fe,"m",Si).call(this)}finally{n&&o&&n.removeEventListener("abort",o)}}_connected(e){this.ended||(w(this,Yn,e,"f"),w(this,Qn,e?.headers.get("request-id"),"f"),u(this,Gn,"f").call(this,e),this._emit("connect"))}get ended(){return u(this,qr,"f")}get errored(){return u(this,Xn,"f")}get aborted(){return u(this,zn,"f")}abort(){this.controller.abort()}on(e,t){return(u(this,je,"f")[e]||(u(this,je,"f")[e]=[])).push({listener:t}),this}off(e,t){let s=u(this,je,"f")[e];if(!s)return this;let n=s.findIndex(o=>o.listener===t);return n>=0&&s.splice(n,1),this}once(e,t){return(u(this,je,"f")[e]||(u(this,je,"f")[e]=[])).push({listener:t,once:!0}),this}emitted(e){return new Promise((t,s)=>{w(this,tr,!0,"f"),e!=="error"&&this.once("error",s),this.once(e,t)})}async done(){w(this,tr,!0,"f"),await u(this,Ur,"f")}get currentMessage(){return u(this,ut,"f")}async finalMessage(){return await this.done(),u(this,fe,"m",xi).call(this)}async finalText(){return await this.done(),u(this,fe,"m",pl).call(this)}_emit(e,...t){if(u(this,qr,"f"))return;e==="end"&&(w(this,qr,!0,"f"),u(this,Vn,"f").call(this));let s=u(this,je,"f")[e];if(s&&(u(this,je,"f")[e]=s.filter(n=>!n.once),s.forEach(({listener:n})=>n(...t))),e==="abort"){let n=t[0];!u(this,tr,"f")&&!s?.length&&Promise.reject(n),u(this,Hr,"f").call(this,n),u(this,jr,"f").call(this,n),this._emit("end");return}if(e==="error"){let n=t[0];!u(this,tr,"f")&&!s?.length&&Promise.reject(n),u(this,Hr,"f").call(this,n),u(this,jr,"f").call(this,n),this._emit("end")}}_emitFinal(){this.receivedMessages.at(-1)&&this._emit("finalMessage",u(this,fe,"m",xi).call(this))}async _fromReadableStream(e,t){let s=t?.signal,n;s&&(s.aborted&&this.controller.abort(),n=this.controller.abort.bind(this.controller),s.addEventListener("abort",n));try{u(this,fe,"m",Pi).call(this),this._connected(null);let o=Ee.fromReadableStream(e,this.controller);for await(let i of o)u(this,fe,"m",Ii).call(this,i);if(o.controller.signal?.aborted)throw new ee;u(this,fe,"m",Si).call(this)}finally{s&&n&&s.removeEventListener("abort",n)}}[(ut=new WeakMap,er=new WeakMap,Dr=new WeakMap,Gn=new WeakMap,Hr=new WeakMap,Ur=new WeakMap,Vn=new WeakMap,jr=new WeakMap,je=new WeakMap,qr=new WeakMap,Xn=new WeakMap,zn=new WeakMap,tr=new WeakMap,Yn=new WeakMap,Qn=new WeakMap,Zn=new WeakMap,fe=new WeakSet,xi=function(){if(this.receivedMessages.length===0)throw new I("stream ended without producing a Message with role=assistant");return this.receivedMessages.at(-1)},pl=function(){if(this.receivedMessages.length===0)throw new I("stream ended without producing a Message with role=assistant");let t=this.receivedMessages.at(-1).content.filter(s=>s.type==="text").map(s=>s.text);if(t.length===0)throw new I("stream ended without producing a content block with type=text");return t.join(" ")},Pi=function(){this.ended||w(this,ut,void 0,"f")},Ii=function(t){if(this.ended)return;let s=u(this,fe,"m",fl).call(this,t);switch(this._emit("streamEvent",t,s),t.type){case"content_block_delta":{let n=s.content.at(-1);switch(t.delta.type){case"text_delta":{n.type==="text"&&this._emit("text",t.delta.text,n.text||"");break}case"citations_delta":{n.type==="text"&&this._emit("citation",t.delta.citation,n.citations??[]);break}case"input_json_delta":{ml(n)&&n.input&&this._emit("inputJson",t.delta.partial_json,n.input);break}case"thinking_delta":{n.type==="thinking"&&this._emit("thinking",t.delta.thinking,n.thinking);break}case"signature_delta":{n.type==="thinking"&&this._emit("signature",n.signature);break}default:t.delta}break}case"message_stop":{this._addMessageParam(s),this._addMessage(wi(s,u(this,er,"f")),!0);break}case"content_block_stop":{this._emit("contentBlock",s.content.at(-1));break}case"message_start":{w(this,ut,s,"f");break}case"content_block_start":case"message_delta":break}},Si=function(){if(this.ended)throw new I("stream has ended, this shouldn't happen");let t=u(this,ut,"f");if(!t)throw new I("request ended without sending any chunks");return w(this,ut,void 0,"f"),wi(t,u(this,er,"f"))},fl=function(t){let s=u(this,ut,"f");if(t.type==="message_start"){if(s)throw new I(`Unexpected event order, got ${t.type} before receiving "message_stop"`);return t.message}if(!s)throw new I(`Unexpected event order, got ${t.type} before "message_start"`);switch(t.type){case"message_stop":return s;case"message_delta":return s.container=t.delta.container,s.stop_reason=t.delta.stop_reason,s.stop_sequence=t.delta.stop_sequence,s.usage.output_tokens=t.usage.output_tokens,s.context_management=t.context_management,t.usage.input_tokens!=null&&(s.usage.input_tokens=t.usage.input_tokens),t.usage.cache_creation_input_tokens!=null&&(s.usage.cache_creation_input_tokens=t.usage.cache_creation_input_tokens),t.usage.cache_read_input_tokens!=null&&(s.usage.cache_read_input_tokens=t.usage.cache_read_input_tokens),t.usage.server_tool_use!=null&&(s.usage.server_tool_use=t.usage.server_tool_use),s;case"content_block_start":return s.content.push(t.content_block),s;case"content_block_delta":{let n=s.content.at(t.index);switch(t.delta.type){case"text_delta":{n?.type==="text"&&(s.content[t.index]={...n,text:(n.text||"")+t.delta.text});break}case"citations_delta":{n?.type==="text"&&(s.content[t.index]={...n,citations:[...n.citations??[],t.delta.citation]});break}case"input_json_delta":{if(n&&ml(n)){let o=n[hl]||"";o+=t.delta.partial_json;let i={...n};if(Object.defineProperty(i,hl,{value:o,enumerable:!1,writable:!0}),o)try{i.input=Jn(o)}catch(a){let l=new I(`Unable to parse tool parameter JSON from model. Please retry your request or adjust your prompt. Error: ${a}. JSON: ${o}`);u(this,Zn,"f").call(this,l)}s.content[t.index]=i}break}case"thinking_delta":{n?.type==="thinking"&&(s.content[t.index]={...n,thinking:n.thinking+t.delta.thinking});break}case"signature_delta":{n?.type==="thinking"&&(s.content[t.index]={...n,signature:t.delta.signature});break}default:t.delta}return s}case"content_block_stop":return s}},Symbol.asyncIterator)](){let e=[],t=[],s=!1;return this.on("streamEvent",n=>{let o=t.shift();o?o.resolve(n):e.push(n)}),this.on("end",()=>{s=!0;for(let n of t)n.resolve(void 0);t.length=0}),this.on("abort",n=>{s=!0;for(let o of t)o.reject(n);t.length=0}),this.on("error",n=>{s=!0;for(let o of t)o.reject(n);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:s?{value:void 0,done:!0}:new Promise((o,i)=>t.push({resolve:o,reject:i})).then(o=>o?{value:o,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}toReadableStream(){return new Ee(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}};var gl=`You have been working on the task described above but have not yet completed it. Write a continuation summary that will allow you (or another instance of yourself) to resume work efficiently in a future context window where the conversation history will be replaced with this summary. Your summary should be structured, concise, and actionable. Include:
1. Task Overview
The user's core request and success criteria
Any clarifications or constraints they specified
2. Current State
What has been completed so far
Files created, modified, or analyzed (with paths if relevant)
Key outputs or artifacts produced
3. Important Discoveries
Technical constraints or requirements uncovered
Decisions made and their rationale
Errors encountered and how they were resolved
What approaches were tried that didn't work (and why)
4. Next Steps
Specific actions needed to complete the task
Any blockers or open questions to resolve
Priority order if multiple steps remain
5. Context to Preserve
User preferences or style requirements
Domain-specific details that aren't obvious
Any promises made to the user
Be concise but complete\u2014err on the side of including information that would prevent duplicate work or repeated mistakes. Write in a way that enables immediate resumption of the task.
Wrap your summary in <summary></summary> tags.`;var Wr,sr,Kt,J,Kr,ue,qe,pt,Jr,yl,Ai;function bl(){let r,e;return{promise:new Promise((s,n)=>{r=s,e=n}),resolve:r,reject:e}}var rr=class{constructor(e,t,s){Wr.add(this),this.client=e,sr.set(this,!1),Kt.set(this,!1),J.set(this,void 0),Kr.set(this,void 0),ue.set(this,void 0),qe.set(this,void 0),pt.set(this,void 0),Jr.set(this,0),w(this,J,{params:{...t,messages:structuredClone(t.messages)}},"f"),w(this,Kr,{...s,headers:E([{"x-stainless-helper":"BetaToolRunner"},s?.headers])},"f"),w(this,pt,bl(),"f")}async*[(sr=new WeakMap,Kt=new WeakMap,J=new WeakMap,Kr=new WeakMap,ue=new WeakMap,qe=new WeakMap,pt=new WeakMap,Jr=new WeakMap,Wr=new WeakSet,yl=async function(){let t=u(this,J,"f").params.compactionControl;if(!t||!t.enabled)return!1;let s=0;if(u(this,ue,"f")!==void 0)try{let p=await u(this,ue,"f");s=p.usage.input_tokens+(p.usage.cache_creation_input_tokens??0)+(p.usage.cache_read_input_tokens??0)+p.usage.output_tokens}catch{return!1}let n=t.contextTokenThreshold??1e5;if(s<n)return!1;let o=t.model??u(this,J,"f").params.model,i=t.summaryPrompt??gl,a=u(this,J,"f").params.messages;if(a[a.length-1].role==="assistant"){let p=a[a.length-1];if(Array.isArray(p.content)){let b=p.content.filter(h=>h.type!=="tool_use");b.length===0?a.pop():p.content=b}}let l=await this.client.beta.messages.create({model:o,messages:[...a,{role:"user",content:[{type:"text",text:i}]}],max_tokens:u(this,J,"f").params.max_tokens},{headers:{"x-stainless-helper":"compaction"}});if(l.content[0]?.type!=="text")throw new I("Expected text response for compaction");return u(this,J,"f").params.messages=[{role:"user",content:l.content}],!0},Symbol.asyncIterator)](){var e;if(u(this,sr,"f"))throw new I("Cannot iterate over a consumed stream");w(this,sr,!0,"f"),w(this,Kt,!0,"f"),w(this,qe,void 0,"f");try{for(;;){let t;try{if(u(this,J,"f").params.max_iterations&&u(this,Jr,"f")>=u(this,J,"f").params.max_iterations)break;w(this,Kt,!1,"f"),w(this,qe,void 0,"f"),w(this,Jr,(e=u(this,Jr,"f"),e++,e),"f"),w(this,ue,void 0,"f");let{max_iterations:s,compactionControl:n,...o}=u(this,J,"f").params;if(o.stream?(t=this.client.beta.messages.stream({...o},u(this,Kr,"f")),w(this,ue,t.finalMessage(),"f"),u(this,ue,"f").catch(()=>{}),yield t):(w(this,ue,this.client.beta.messages.create({...o,stream:!1},u(this,Kr,"f")),"f"),yield u(this,ue,"f")),!await u(this,Wr,"m",yl).call(this)){if(!u(this,Kt,"f")){let{role:l,content:p}=await u(this,ue,"f");u(this,J,"f").params.messages.push({role:l,content:p})}let a=await u(this,Wr,"m",Ai).call(this,u(this,J,"f").params.messages.at(-1));if(a)u(this,J,"f").params.messages.push(a);else if(!u(this,Kt,"f"))break}}finally{t&&t.abort()}}if(!u(this,ue,"f"))throw new I("ToolRunner concluded without a message from the server");u(this,pt,"f").resolve(await u(this,ue,"f"))}catch(t){throw w(this,sr,!1,"f"),u(this,pt,"f").promise.catch(()=>{}),u(this,pt,"f").reject(t),w(this,pt,bl(),"f"),t}}setMessagesParams(e){typeof e=="function"?u(this,J,"f").params=e(u(this,J,"f").params):u(this,J,"f").params=e,w(this,Kt,!0,"f"),w(this,qe,void 0,"f")}async generateToolResponse(){let e=await u(this,ue,"f")??this.params.messages.at(-1);return e?u(this,Wr,"m",Ai).call(this,e):null}done(){return u(this,pt,"f").promise}async runUntilDone(){if(!u(this,sr,"f"))for await(let e of this);return this.done()}get params(){return u(this,J,"f").params}pushMessages(...e){this.setMessagesParams(t=>({...t,messages:[...t.messages,...e]}))}then(e,t){return this.runUntilDone().then(e,t)}};Ai=async function(e){return u(this,qe,"f")!==void 0?u(this,qe,"f"):(w(this,qe,tu(u(this,J,"f").params,e),"f"),u(this,qe,"f"))};async function tu(r,e=r.messages.at(-1)){if(!e||e.role!=="assistant"||!e.content||typeof e.content=="string")return null;let t=e.content.filter(n=>n.type==="tool_use");return t.length===0?null:{role:"user",content:await Promise.all(t.map(async n=>{let o=r.tools.find(i=>("name"in i?i.name:i.mcp_server_name)===n.name);if(!o||!("run"in o))return{type:"tool_result",tool_use_id:n.id,content:`Error: Tool '${n.name}' not found`,is_error:!0};try{let i=n.input;"parse"in o&&o.parse&&(i=o.parse(i));let a=await o.run(i);return{type:"tool_result",tool_use_id:n.id,content:a}}catch(i){return{type:"tool_result",tool_use_id:n.id,content:`Error: ${i instanceof Error?i.message:String(i)}`,is_error:!0}}}))}}var nr=class r{constructor(e,t){this.iterator=e,this.controller=t}async*decoder(){let e=new He;for await(let t of this.iterator)for(let s of e.decode(t))yield JSON.parse(s);for(let t of e.flush())yield JSON.parse(t)}[Symbol.asyncIterator](){return this.decoder()}static fromResponse(e,t){if(!e.body)throw t.abort(),typeof globalThis.navigator<"u"&&globalThis.navigator.product==="ReactNative"?new I("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api"):new I("Attempted to iterate over a response with no body");return new r(Mr(e.body),t)}};var or=class extends F{create(e,t){let{betas:s,...n}=e;return this._client.post("/v1/messages/batches?beta=true",{body:n,...t,headers:E([{"anthropic-beta":[...s??[],"message-batches-2024-09-24"].toString()},t?.headers])})}retrieve(e,t={},s){let{betas:n}=t??{};return this._client.get($`/v1/messages/batches/${e}?beta=true`,{...s,headers:E([{"anthropic-beta":[...n??[],"message-batches-2024-09-24"].toString()},s?.headers])})}list(e={},t){let{betas:s,...n}=e??{};return this._client.getAPIList("/v1/messages/batches?beta=true",pe,{query:n,...t,headers:E([{"anthropic-beta":[...s??[],"message-batches-2024-09-24"].toString()},t?.headers])})}delete(e,t={},s){let{betas:n}=t??{};return this._client.delete($`/v1/messages/batches/${e}?beta=true`,{...s,headers:E([{"anthropic-beta":[...n??[],"message-batches-2024-09-24"].toString()},s?.headers])})}cancel(e,t={},s){let{betas:n}=t??{};return this._client.post($`/v1/messages/batches/${e}/cancel?beta=true`,{...s,headers:E([{"anthropic-beta":[...n??[],"message-batches-2024-09-24"].toString()},s?.headers])})}async results(e,t={},s){let n=await this.retrieve(e);if(!n.results_url)throw new I(`No batch \`results_url\`; Has it finished processing? ${n.processing_status} - ${n.id}`);let{betas:o}=t??{};return this._client.get(n.results_url,{...s,headers:E([{"anthropic-beta":[...o??[],"message-batches-2024-09-24"].toString(),Accept:"application/binary"},s?.headers]),stream:!0,__binaryResponse:!0})._thenUnwrap((i,a)=>nr.fromResponse(a.response,a.controller))}};var _l={"claude-1.3":"November 6th, 2024","claude-1.3-100k":"November 6th, 2024","claude-instant-1.1":"November 6th, 2024","claude-instant-1.1-100k":"November 6th, 2024","claude-instant-1.2":"November 6th, 2024","claude-3-sonnet-20240229":"July 21st, 2025","claude-3-opus-20240229":"January 5th, 2026","claude-2.1":"July 21st, 2025","claude-2.0":"July 21st, 2025","claude-3-7-sonnet-latest":"February 19th, 2026","claude-3-7-sonnet-20250219":"February 19th, 2026"},ft=class extends F{constructor(){super(...arguments),this.batches=new or(this._client)}create(e,t){let{betas:s,...n}=e;n.model in _l&&console.warn(`The model '${n.model}' is deprecated and will reach end-of-life on ${_l[n.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);let o=this._client._options.timeout;if(!n.stream&&o==null){let i=Kn[n.model]??void 0;o=this._client.calculateNonstreamingTimeout(n.max_tokens,i)}return this._client.post("/v1/messages?beta=true",{body:n,timeout:o??6e5,...t,headers:E([{...s?.toString()!=null?{"anthropic-beta":s?.toString()}:void 0},t?.headers]),stream:e.stream??!1})}parse(e,t){return t={...t,headers:E([{"anthropic-beta":[...e.betas??[],"structured-outputs-2025-11-13"].toString()},t?.headers])},this.create(e,t).then(s=>vi(s,e))}stream(e,t){return eo.createMessage(this,e,t)}countTokens(e,t){let{betas:s,...n}=e;return this._client.post("/v1/messages/count_tokens?beta=true",{body:n,...t,headers:E([{"anthropic-beta":[...s??[],"token-counting-2024-11-01"].toString()},t?.headers])})}toolRunner(e,t){return new rr(this._client,e,t)}};ft.Batches=or;ft.BetaToolRunner=rr;var ir=class extends F{create(e,t={},s){let{betas:n,...o}=t??{};return this._client.post($`/v1/skills/${e}/versions?beta=true`,zs({body:o,...s,headers:E([{"anthropic-beta":[...n??[],"skills-2025-10-02"].toString()},s?.headers])},this._client))}retrieve(e,t,s){let{skill_id:n,betas:o}=t;return this._client.get($`/v1/skills/${n}/versions/${e}?beta=true`,{...s,headers:E([{"anthropic-beta":[...o??[],"skills-2025-10-02"].toString()},s?.headers])})}list(e,t={},s){let{betas:n,...o}=t??{};return this._client.getAPIList($`/v1/skills/${e}/versions?beta=true`,Xs,{query:o,...s,headers:E([{"anthropic-beta":[...n??[],"skills-2025-10-02"].toString()},s?.headers])})}delete(e,t,s){let{skill_id:n,betas:o}=t;return this._client.delete($`/v1/skills/${n}/versions/${e}?beta=true`,{...s,headers:E([{"anthropic-beta":[...o??[],"skills-2025-10-02"].toString()},s?.headers])})}};var Jt=class extends F{constructor(){super(...arguments),this.versions=new ir(this._client)}create(e={},t){let{betas:s,...n}=e??{};return this._client.post("/v1/skills?beta=true",zs({body:n,...t,headers:E([{"anthropic-beta":[...s??[],"skills-2025-10-02"].toString()},t?.headers])},this._client))}retrieve(e,t={},s){let{betas:n}=t??{};return this._client.get($`/v1/skills/${e}?beta=true`,{...s,headers:E([{"anthropic-beta":[...n??[],"skills-2025-10-02"].toString()},s?.headers])})}list(e={},t){let{betas:s,...n}=e??{};return this._client.getAPIList("/v1/skills?beta=true",Xs,{query:n,...t,headers:E([{"anthropic-beta":[...s??[],"skills-2025-10-02"].toString()},t?.headers])})}delete(e,t={},s){let{betas:n}=t??{};return this._client.delete($`/v1/skills/${e}?beta=true`,{...s,headers:E([{"anthropic-beta":[...n??[],"skills-2025-10-02"].toString()},s?.headers])})}};Jt.Versions=ir;var _e=class extends F{constructor(){super(...arguments),this.models=new Qs(this._client),this.messages=new ft(this._client),this.files=new Ys(this._client),this.skills=new Jt(this._client)}};_e.Models=Qs;_e.Messages=ft;_e.Files=Ys;_e.Skills=Jt;var Gt=class extends F{create(e,t){let{betas:s,...n}=e;return this._client.post("/v1/complete",{body:n,timeout:this._client._options.timeout??6e5,...t,headers:E([{...s?.toString()!=null?{"anthropic-beta":s?.toString()}:void 0},t?.headers]),stream:e.stream??!1})}};var he,ht,Gr,to,Vr,Xr,so,zr,We,Yr,ro,no,ar,oo,io,Ei,wl,Ri,ki,Ci,Ti,vl,xl="__json_buf";function Pl(r){return r.type==="tool_use"||r.type==="server_tool_use"}var ao=class r{constructor(){he.add(this),this.messages=[],this.receivedMessages=[],ht.set(this,void 0),this.controller=new AbortController,Gr.set(this,void 0),to.set(this,()=>{}),Vr.set(this,()=>{}),Xr.set(this,void 0),so.set(this,()=>{}),zr.set(this,()=>{}),We.set(this,{}),Yr.set(this,!1),ro.set(this,!1),no.set(this,!1),ar.set(this,!1),oo.set(this,void 0),io.set(this,void 0),Ri.set(this,e=>{if(w(this,ro,!0,"f"),De(e)&&(e=new ee),e instanceof ee)return w(this,no,!0,"f"),this._emit("abort",e);if(e instanceof I)return this._emit("error",e);if(e instanceof Error){let t=new I(e.message);return t.cause=e,this._emit("error",t)}return this._emit("error",new I(String(e)))}),w(this,Gr,new Promise((e,t)=>{w(this,to,e,"f"),w(this,Vr,t,"f")}),"f"),w(this,Xr,new Promise((e,t)=>{w(this,so,e,"f"),w(this,zr,t,"f")}),"f"),u(this,Gr,"f").catch(()=>{}),u(this,Xr,"f").catch(()=>{})}get response(){return u(this,oo,"f")}get request_id(){return u(this,io,"f")}async withResponse(){let e=await u(this,Gr,"f");if(!e)throw new Error("Could not resolve a `Response` object");return{data:this,response:e,request_id:e.headers.get("request-id")}}static fromReadableStream(e){let t=new r;return t._run(()=>t._fromReadableStream(e)),t}static createMessage(e,t,s){let n=new r;for(let o of t.messages)n._addMessageParam(o);return n._run(()=>n._createMessage(e,{...t,stream:!0},{...s,headers:{...s?.headers,"X-Stainless-Helper-Method":"stream"}})),n}_run(e){e().then(()=>{this._emitFinal(),this._emit("end")},u(this,Ri,"f"))}_addMessageParam(e){this.messages.push(e)}_addMessage(e,t=!0){this.receivedMessages.push(e),t&&this._emit("message",e)}async _createMessage(e,t,s){let n=s?.signal,o;n&&(n.aborted&&this.controller.abort(),o=this.controller.abort.bind(this.controller),n.addEventListener("abort",o));try{u(this,he,"m",ki).call(this);let{response:i,data:a}=await e.create({...t,stream:!0},{...s,signal:this.controller.signal}).withResponse();this._connected(i);for await(let l of a)u(this,he,"m",Ci).call(this,l);if(a.controller.signal?.aborted)throw new ee;u(this,he,"m",Ti).call(this)}finally{n&&o&&n.removeEventListener("abort",o)}}_connected(e){this.ended||(w(this,oo,e,"f"),w(this,io,e?.headers.get("request-id"),"f"),u(this,to,"f").call(this,e),this._emit("connect"))}get ended(){return u(this,Yr,"f")}get errored(){return u(this,ro,"f")}get aborted(){return u(this,no,"f")}abort(){this.controller.abort()}on(e,t){return(u(this,We,"f")[e]||(u(this,We,"f")[e]=[])).push({listener:t}),this}off(e,t){let s=u(this,We,"f")[e];if(!s)return this;let n=s.findIndex(o=>o.listener===t);return n>=0&&s.splice(n,1),this}once(e,t){return(u(this,We,"f")[e]||(u(this,We,"f")[e]=[])).push({listener:t,once:!0}),this}emitted(e){return new Promise((t,s)=>{w(this,ar,!0,"f"),e!=="error"&&this.once("error",s),this.once(e,t)})}async done(){w(this,ar,!0,"f"),await u(this,Xr,"f")}get currentMessage(){return u(this,ht,"f")}async finalMessage(){return await this.done(),u(this,he,"m",Ei).call(this)}async finalText(){return await this.done(),u(this,he,"m",wl).call(this)}_emit(e,...t){if(u(this,Yr,"f"))return;e==="end"&&(w(this,Yr,!0,"f"),u(this,so,"f").call(this));let s=u(this,We,"f")[e];if(s&&(u(this,We,"f")[e]=s.filter(n=>!n.once),s.forEach(({listener:n})=>n(...t))),e==="abort"){let n=t[0];!u(this,ar,"f")&&!s?.length&&Promise.reject(n),u(this,Vr,"f").call(this,n),u(this,zr,"f").call(this,n),this._emit("end");return}if(e==="error"){let n=t[0];!u(this,ar,"f")&&!s?.length&&Promise.reject(n),u(this,Vr,"f").call(this,n),u(this,zr,"f").call(this,n),this._emit("end")}}_emitFinal(){this.receivedMessages.at(-1)&&this._emit("finalMessage",u(this,he,"m",Ei).call(this))}async _fromReadableStream(e,t){let s=t?.signal,n;s&&(s.aborted&&this.controller.abort(),n=this.controller.abort.bind(this.controller),s.addEventListener("abort",n));try{u(this,he,"m",ki).call(this),this._connected(null);let o=Ee.fromReadableStream(e,this.controller);for await(let i of o)u(this,he,"m",Ci).call(this,i);if(o.controller.signal?.aborted)throw new ee;u(this,he,"m",Ti).call(this)}finally{s&&n&&s.removeEventListener("abort",n)}}[(ht=new WeakMap,Gr=new WeakMap,to=new WeakMap,Vr=new WeakMap,Xr=new WeakMap,so=new WeakMap,zr=new WeakMap,We=new WeakMap,Yr=new WeakMap,ro=new WeakMap,no=new WeakMap,ar=new WeakMap,oo=new WeakMap,io=new WeakMap,Ri=new WeakMap,he=new WeakSet,Ei=function(){if(this.receivedMessages.length===0)throw new I("stream ended without producing a Message with role=assistant");return this.receivedMessages.at(-1)},wl=function(){if(this.receivedMessages.length===0)throw new I("stream ended without producing a Message with role=assistant");let t=this.receivedMessages.at(-1).content.filter(s=>s.type==="text").map(s=>s.text);if(t.length===0)throw new I("stream ended without producing a content block with type=text");return t.join(" ")},ki=function(){this.ended||w(this,ht,void 0,"f")},Ci=function(t){if(this.ended)return;let s=u(this,he,"m",vl).call(this,t);switch(this._emit("streamEvent",t,s),t.type){case"content_block_delta":{let n=s.content.at(-1);switch(t.delta.type){case"text_delta":{n.type==="text"&&this._emit("text",t.delta.text,n.text||"");break}case"citations_delta":{n.type==="text"&&this._emit("citation",t.delta.citation,n.citations??[]);break}case"input_json_delta":{Pl(n)&&n.input&&this._emit("inputJson",t.delta.partial_json,n.input);break}case"thinking_delta":{n.type==="thinking"&&this._emit("thinking",t.delta.thinking,n.thinking);break}case"signature_delta":{n.type==="thinking"&&this._emit("signature",n.signature);break}default:t.delta}break}case"message_stop":{this._addMessageParam(s),this._addMessage(s,!0);break}case"content_block_stop":{this._emit("contentBlock",s.content.at(-1));break}case"message_start":{w(this,ht,s,"f");break}case"content_block_start":case"message_delta":break}},Ti=function(){if(this.ended)throw new I("stream has ended, this shouldn't happen");let t=u(this,ht,"f");if(!t)throw new I("request ended without sending any chunks");return w(this,ht,void 0,"f"),t},vl=function(t){let s=u(this,ht,"f");if(t.type==="message_start"){if(s)throw new I(`Unexpected event order, got ${t.type} before receiving "message_stop"`);return t.message}if(!s)throw new I(`Unexpected event order, got ${t.type} before "message_start"`);switch(t.type){case"message_stop":return s;case"message_delta":return s.stop_reason=t.delta.stop_reason,s.stop_sequence=t.delta.stop_sequence,s.usage.output_tokens=t.usage.output_tokens,t.usage.input_tokens!=null&&(s.usage.input_tokens=t.usage.input_tokens),t.usage.cache_creation_input_tokens!=null&&(s.usage.cache_creation_input_tokens=t.usage.cache_creation_input_tokens),t.usage.cache_read_input_tokens!=null&&(s.usage.cache_read_input_tokens=t.usage.cache_read_input_tokens),t.usage.server_tool_use!=null&&(s.usage.server_tool_use=t.usage.server_tool_use),s;case"content_block_start":return s.content.push({...t.content_block}),s;case"content_block_delta":{let n=s.content.at(t.index);switch(t.delta.type){case"text_delta":{n?.type==="text"&&(s.content[t.index]={...n,text:(n.text||"")+t.delta.text});break}case"citations_delta":{n?.type==="text"&&(s.content[t.index]={...n,citations:[...n.citations??[],t.delta.citation]});break}case"input_json_delta":{if(n&&Pl(n)){let o=n[xl]||"";o+=t.delta.partial_json;let i={...n};Object.defineProperty(i,xl,{value:o,enumerable:!1,writable:!0}),o&&(i.input=Jn(o)),s.content[t.index]=i}break}case"thinking_delta":{n?.type==="thinking"&&(s.content[t.index]={...n,thinking:n.thinking+t.delta.thinking});break}case"signature_delta":{n?.type==="thinking"&&(s.content[t.index]={...n,signature:t.delta.signature});break}default:t.delta}return s}case"content_block_stop":return s}},Symbol.asyncIterator)](){let e=[],t=[],s=!1;return this.on("streamEvent",n=>{let o=t.shift();o?o.resolve(n):e.push(n)}),this.on("end",()=>{s=!0;for(let n of t)n.resolve(void 0);t.length=0}),this.on("abort",n=>{s=!0;for(let o of t)o.reject(n);t.length=0}),this.on("error",n=>{s=!0;for(let o of t)o.reject(n);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:s?{value:void 0,done:!0}:new Promise((o,i)=>t.push({resolve:o,reject:i})).then(o=>o?{value:o,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}toReadableStream(){return new Ee(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}};var lr=class extends F{create(e,t){return this._client.post("/v1/messages/batches",{body:e,...t})}retrieve(e,t){return this._client.get($`/v1/messages/batches/${e}`,t)}list(e={},t){return this._client.getAPIList("/v1/messages/batches",pe,{query:e,...t})}delete(e,t){return this._client.delete($`/v1/messages/batches/${e}`,t)}cancel(e,t){return this._client.post($`/v1/messages/batches/${e}/cancel`,t)}async results(e,t){let s=await this.retrieve(e);if(!s.results_url)throw new I(`No batch \`results_url\`; Has it finished processing? ${s.processing_status} - ${s.id}`);return this._client.get(s.results_url,{...t,headers:E([{Accept:"application/binary"},t?.headers]),stream:!0,__binaryResponse:!0})._thenUnwrap((n,o)=>nr.fromResponse(o.response,o.controller))}};var mt=class extends F{constructor(){super(...arguments),this.batches=new lr(this._client)}create(e,t){e.model in Il&&console.warn(`The model '${e.model}' is deprecated and will reach end-of-life on ${Il[e.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);let s=this._client._options.timeout;if(!e.stream&&s==null){let n=Kn[e.model]??void 0;s=this._client.calculateNonstreamingTimeout(e.max_tokens,n)}return this._client.post("/v1/messages",{body:e,timeout:s??6e5,...t,stream:e.stream??!1})}stream(e,t){return ao.createMessage(this,e,t)}countTokens(e,t){return this._client.post("/v1/messages/count_tokens",{body:e,...t})}},Il={"claude-1.3":"November 6th, 2024","claude-1.3-100k":"November 6th, 2024","claude-instant-1.1":"November 6th, 2024","claude-instant-1.1-100k":"November 6th, 2024","claude-instant-1.2":"November 6th, 2024","claude-3-sonnet-20240229":"July 21st, 2025","claude-3-opus-20240229":"January 5th, 2026","claude-2.1":"July 21st, 2025","claude-2.0":"July 21st, 2025","claude-3-7-sonnet-latest":"February 19th, 2026","claude-3-7-sonnet-20250219":"February 19th, 2026"};mt.Batches=lr;var Vt=class extends F{retrieve(e,t={},s){let{betas:n}=t??{};return this._client.get($`/v1/models/${e}`,{...s,headers:E([{...n?.toString()!=null?{"anthropic-beta":n?.toString()}:void 0},s?.headers])})}list(e={},t){let{betas:s,...n}=e??{};return this._client.getAPIList("/v1/models",pe,{query:n,...t,headers:E([{...s?.toString()!=null?{"anthropic-beta":s?.toString()}:void 0},t?.headers])})}};var Qr=r=>{if(typeof globalThis.process<"u")return globalThis.process.env?.[r]?.trim()??void 0;if(typeof globalThis.Deno<"u")return globalThis.Deno.env?.get?.(r)?.trim()};var Mi,Oi,lo,Sl,Al="\\n\\nHuman:",El="\\n\\nAssistant:",N=class{constructor({baseURL:e=Qr("ANTHROPIC_BASE_URL"),apiKey:t=Qr("ANTHROPIC_API_KEY")??null,authToken:s=Qr("ANTHROPIC_AUTH_TOKEN")??null,...n}={}){Mi.add(this),lo.set(this,void 0);let o={apiKey:t,authToken:s,...n,baseURL:e||"https://api.anthropic.com"};if(!o.dangerouslyAllowBrowser&&Ya())throw new I(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
`);this.baseURL=o.baseURL,this.timeout=o.timeout??Oi.DEFAULT_TIMEOUT,this.logger=o.logger??console;let i="warn";this.logLevel=i,this.logLevel=fi(o.logLevel,"ClientOptions.logLevel",this)??fi(Qr("ANTHROPIC_LOG"),"process.env['ANTHROPIC_LOG']",this)??i,this.fetchOptions=o.fetchOptions,this.maxRetries=o.maxRetries??2,this.fetch=o.fetch??Za(),w(this,lo,tl,"f"),this._options=o,this.apiKey=typeof t=="string"?t:null,this.authToken=s}withOptions(e){return new this.constructor({...this._options,baseURL:this.baseURL,maxRetries:this.maxRetries,timeout:this.timeout,logger:this.logger,logLevel:this.logLevel,fetch:this.fetch,fetchOptions:this.fetchOptions,apiKey:this.apiKey,authToken:this.authToken,...e})}defaultQuery(){return this._options.defaultQuery}validateHeaders({values:e,nulls:t}){if(!(e.get("x-api-key")||e.get("authorization"))&&!(this.apiKey&&e.get("x-api-key"))&&!t.has("x-api-key")&&!(this.authToken&&e.get("authorization"))&&!t.has("authorization"))throw new Error('Could not resolve authentication method. Expected either apiKey or authToken to be set. Or for one of the "X-Api-Key" or "Authorization" headers to be explicitly omitted')}async authHeaders(e){return E([await this.apiKeyAuth(e),await this.bearerAuth(e)])}async apiKeyAuth(e){if(this.apiKey!=null)return E([{"X-Api-Key":this.apiKey}])}async bearerAuth(e){if(this.authToken!=null)return E([{Authorization:`Bearer ${this.authToken}`}])}stringifyQuery(e){return Object.entries(e).filter(([t,s])=>typeof s<"u").map(([t,s])=>{if(typeof s=="string"||typeof s=="number"||typeof s=="boolean")return`${encodeURIComponent(t)}=${encodeURIComponent(s)}`;if(s===null)return`${encodeURIComponent(t)}=`;throw new I(`Cannot stringify type ${typeof s}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)}).join("&")}getUserAgent(){return`${this.constructor.name}/JS ${dt}`}defaultIdempotencyKey(){return`stainless-node-retry-${li()}`}makeStatusError(e,t,s,n){return z.generate(e,t,s,n)}buildURL(e,t,s){let n=!u(this,Mi,"m",Sl).call(this)&&s||this.baseURL,o=qa(e)?new URL(e):new URL(n+(n.endsWith("/")&&e.startsWith("/")?e.slice(1):e)),i=this.defaultQuery();return Wa(i)||(t={...i,...t}),typeof t=="object"&&t&&!Array.isArray(t)&&(o.search=this.stringifyQuery(t)),o.toString()}_calculateNonstreamingTimeout(e){if(3600*e/128e3>600)throw new I("Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#streaming-responses for more details");return 600*1e3}async prepareOptions(e){}async prepareRequest(e,{url:t,options:s}){}get(e,t){return this.methodRequest("get",e,t)}post(e,t){return this.methodRequest("post",e,t)}patch(e,t){return this.methodRequest("patch",e,t)}put(e,t){return this.methodRequest("put",e,t)}delete(e,t){return this.methodRequest("delete",e,t)}methodRequest(e,t,s){return this.request(Promise.resolve(s).then(n=>({method:e,path:t,...n})))}request(e,t=null){return new qt(this,this.makeRequest(e,t,void 0))}async makeRequest(e,t,s){let n=await e,o=n.maxRetries??this.maxRetries;t==null&&(t=o),await this.prepareOptions(n);let{req:i,url:a,timeout:l}=await this.buildRequest(n,{retryCount:o-t});await this.prepareRequest(i,{url:a,options:n});let p="log_"+(Math.random()*(1<<24)|0).toString(16).padStart(6,"0"),b=s===void 0?"":`, retryOf: ${s}`,h=Date.now();if(Y(this).debug(`[${p}] sending request`,Ue({retryOfRequestLogID:s,method:n.method,url:a,options:n,headers:i.headers})),n.signal?.aborted)throw new ee;let g=new AbortController,c=await this.fetchWithTimeout(a,i,l,g).catch(Tr),x=Date.now();if(c instanceof globalThis.Error){let k=`retrying, ${t} attempts remaining`;if(n.signal?.aborted)throw new ee;let v=De(c)||/timed? ?out/i.test(String(c)+("cause"in c?String(c.cause):""));if(t)return Y(this).info(`[${p}] connection ${v?"timed out":"failed"} - ${k}`),Y(this).debug(`[${p}] connection ${v?"timed out":"failed"} (${k})`,Ue({retryOfRequestLogID:s,url:a,durationMs:x-h,message:c.message})),this.retryRequest(n,t,s??p);throw Y(this).info(`[${p}] connection ${v?"timed out":"failed"} - error; no more retries left`),Y(this).debug(`[${p}] connection ${v?"timed out":"failed"} (error; no more retries left)`,Ue({retryOfRequestLogID:s,url:a,durationMs:x-h,message:c.message})),v?new Hs:new ct({cause:c})}let P=[...c.headers.entries()].filter(([k])=>k==="request-id").map(([k,v])=>", "+k+": "+JSON.stringify(v)).join(""),O=`[${p}${b}${P}] ${i.method} ${a} ${c.ok?"succeeded":"failed"} with status ${c.status} in ${x-h}ms`;if(!c.ok){let k=await this.shouldRetry(c);if(t&&k){let M=`retrying, ${t} attempts remaining`;return await el(c.body),Y(this).info(`${O} - ${M}`),Y(this).debug(`[${p}] response error (${M})`,Ue({retryOfRequestLogID:s,url:c.url,status:c.status,headers:c.headers,durationMs:x-h})),this.retryRequest(n,t,s??p,c.headers)}let v=k?"error; no more retries left":"error; not retryable";Y(this).info(`${O} - ${v}`);let L=await c.text().catch(M=>Tr(M).message),T=Ln(L),te=T?void 0:L;throw Y(this).debug(`[${p}] response error (${v})`,Ue({retryOfRequestLogID:s,url:c.url,status:c.status,headers:c.headers,message:te,durationMs:Date.now()-h})),this.makeStatusError(c.status,T,te,c.headers)}return Y(this).info(O),Y(this).debug(`[${p}] response start`,Ue({retryOfRequestLogID:s,url:c.url,status:c.status,headers:c.headers,durationMs:x-h})),{response:c,options:n,controller:g,requestLogID:p,retryOfRequestLogID:s,startTime:h}}getAPIList(e,t,s){return this.requestAPIList(t,{method:"get",path:e,...s})}requestAPIList(e,t){let s=this.makeRequest(t,null,void 0);return new Lr(this,s,e)}async fetchWithTimeout(e,t,s,n){let{signal:o,method:i,...a}=t||{};o&&o.addEventListener("abort",()=>n.abort());let l=setTimeout(()=>n.abort(),s),p=globalThis.ReadableStream&&a.body instanceof globalThis.ReadableStream||typeof a.body=="object"&&a.body!==null&&Symbol.asyncIterator in a.body,b={signal:n.signal,...p?{duplex:"half"}:{},method:"GET",...a};i&&(b.method=i.toUpperCase());try{return await this.fetch.call(void 0,e,b)}finally{clearTimeout(l)}}async shouldRetry(e){let t=e.headers.get("x-should-retry");return t==="true"?!0:t==="false"?!1:e.status===408||e.status===409||e.status===429||e.status>=500}async retryRequest(e,t,s,n){let o,i=n?.get("retry-after-ms");if(i){let l=parseFloat(i);Number.isNaN(l)||(o=l)}let a=n?.get("retry-after");if(a&&!o){let l=parseFloat(a);Number.isNaN(l)?o=Date.parse(a)-Date.now():o=l*1e3}if(!(o&&0<=o&&o<60*1e3)){let l=e.maxRetries??this.maxRetries;o=this.calculateDefaultRetryTimeoutMillis(t,l)}return await Ga(o),this.makeRequest(e,t-1,s)}calculateDefaultRetryTimeoutMillis(e,t){let o=t-e,i=Math.min(.5*Math.pow(2,o),8),a=1-Math.random()*.25;return i*a*1e3}calculateNonstreamingTimeout(e,t){if(36e5*e/128e3>6e5||t!=null&&e>t)throw new I("Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#long-requests for more details");return 6e5}async buildRequest(e,{retryCount:t=0}={}){let s={...e},{method:n,path:o,query:i,defaultBaseURL:a}=s,l=this.buildURL(o,i,a);"timeout"in s&&Ja("timeout",s.timeout),s.timeout=s.timeout??this.timeout;let{bodyHeaders:p,body:b}=this.buildBody({options:s}),h=await this.buildHeaders({options:e,method:n,bodyHeaders:p,retryCount:t});return{req:{method:n,headers:h,...s.signal&&{signal:s.signal},...globalThis.ReadableStream&&b instanceof globalThis.ReadableStream&&{duplex:"half"},...b&&{body:b},...this.fetchOptions??{},...s.fetchOptions??{}},url:l,timeout:s.timeout}}async buildHeaders({options:e,method:t,bodyHeaders:s,retryCount:n}){let o={};this.idempotencyHeader&&t!=="get"&&(e.idempotencyKey||(e.idempotencyKey=this.defaultIdempotencyKey()),o[this.idempotencyHeader]=e.idempotencyKey);let i=E([o,{Accept:"application/json","User-Agent":this.getUserAgent(),"X-Stainless-Retry-Count":String(n),...e.timeout?{"X-Stainless-Timeout":String(Math.trunc(e.timeout/1e3))}:{},...Qa(),...this._options.dangerouslyAllowBrowser?{"anthropic-dangerous-direct-browser-access":"true"}:void 0,"anthropic-version":"2023-06-01"},await this.authHeaders(e),this._options.defaultHeaders,s,e.headers]);return this.validateHeaders(i),i.values}buildBody({options:{body:e,headers:t}}){if(!e)return{bodyHeaders:void 0,body:void 0};let s=E([t]);return ArrayBuffer.isView(e)||e instanceof ArrayBuffer||e instanceof DataView||typeof e=="string"&&s.values.has("content-type")||globalThis.Blob&&e instanceof globalThis.Blob||e instanceof FormData||e instanceof URLSearchParams||globalThis.ReadableStream&&e instanceof globalThis.ReadableStream?{bodyHeaders:void 0,body:e}:typeof e=="object"&&(Symbol.asyncIterator in e||Symbol.iterator in e&&"next"in e&&typeof e.next=="function")?{bodyHeaders:void 0,body:Bn(e)}:u(this,lo,"f").call(this,{body:e,headers:s})}};Oi=N,lo=new WeakMap,Mi=new WeakSet,Sl=function(){return this.baseURL!=="https://api.anthropic.com"};N.Anthropic=Oi;N.HUMAN_PROMPT=Al;N.AI_PROMPT=El;N.DEFAULT_TIMEOUT=6e5;N.AnthropicError=I;N.APIError=z;N.APIConnectionError=ct;N.APIConnectionTimeoutError=Hs;N.APIUserAbortError=ee;N.NotFoundError=Ws;N.ConflictError=Ks;N.RateLimitError=Gs;N.BadRequestError=Us;N.AuthenticationError=js;N.InternalServerError=Vs;N.PermissionDeniedError=qs;N.UnprocessableEntityError=Js;N.toFile=Wn;var Re=class extends N{constructor(){super(...arguments),this.completions=new Gt(this),this.messages=new mt(this),this.models=new Vt(this),this.beta=new _e(this)}};Re.Completions=Gt;Re.Messages=mt;Re.Models=Vt;Re.Beta=_e;var Rl;(function(r){r.STRING="string",r.NUMBER="number",r.INTEGER="integer",r.BOOLEAN="boolean",r.ARRAY="array",r.OBJECT="object"})(Rl||(Rl={}));var kl;(function(r){r.LANGUAGE_UNSPECIFIED="language_unspecified",r.PYTHON="python"})(kl||(kl={}));var Cl;(function(r){r.OUTCOME_UNSPECIFIED="outcome_unspecified",r.OUTCOME_OK="outcome_ok",r.OUTCOME_FAILED="outcome_failed",r.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(Cl||(Cl={}));var Tl=["user","model","function","system"],Ml;(function(r){r.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",r.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",r.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",r.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",r.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",r.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(Ml||(Ml={}));var Ol;(function(r){r.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",r.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",r.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",r.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",r.BLOCK_NONE="BLOCK_NONE"})(Ol||(Ol={}));var Fl;(function(r){r.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",r.NEGLIGIBLE="NEGLIGIBLE",r.LOW="LOW",r.MEDIUM="MEDIUM",r.HIGH="HIGH"})(Fl||(Fl={}));var $l;(function(r){r.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",r.SAFETY="SAFETY",r.OTHER="OTHER"})($l||($l={}));var Zr;(function(r){r.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",r.STOP="STOP",r.MAX_TOKENS="MAX_TOKENS",r.SAFETY="SAFETY",r.RECITATION="RECITATION",r.LANGUAGE="LANGUAGE",r.BLOCKLIST="BLOCKLIST",r.PROHIBITED_CONTENT="PROHIBITED_CONTENT",r.SPII="SPII",r.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",r.OTHER="OTHER"})(Zr||(Zr={}));var Nl;(function(r){r.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",r.RETRIEVAL_QUERY="RETRIEVAL_QUERY",r.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",r.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",r.CLASSIFICATION="CLASSIFICATION",r.CLUSTERING="CLUSTERING"})(Nl||(Nl={}));var Ll;(function(r){r.MODE_UNSPECIFIED="MODE_UNSPECIFIED",r.AUTO="AUTO",r.ANY="ANY",r.NONE="NONE"})(Ll||(Ll={}));var Bl;(function(r){r.MODE_UNSPECIFIED="MODE_UNSPECIFIED",r.MODE_DYNAMIC="MODE_DYNAMIC"})(Bl||(Bl={}));var Q=class extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}},gt=class extends Q{constructor(e,t){super(e),this.response=t}},uo=class extends Q{constructor(e,t,s,n){super(e),this.status=t,this.statusText=s,this.errorDetails=n}},ke=class extends Q{},po=class extends Q{};var lu="https://generativelanguage.googleapis.com",cu="v1beta",du="0.24.1",uu="genai-js",Xt;(function(r){r.GENERATE_CONTENT="generateContent",r.STREAM_GENERATE_CONTENT="streamGenerateContent",r.COUNT_TOKENS="countTokens",r.EMBED_CONTENT="embedContent",r.BATCH_EMBED_CONTENTS="batchEmbedContents"})(Xt||(Xt={}));var Fi=class{constructor(e,t,s,n,o){this.model=e,this.task=t,this.apiKey=s,this.stream=n,this.requestOptions=o}toString(){var e,t;let s=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||cu,o=`${((t=this.requestOptions)===null||t===void 0?void 0:t.baseUrl)||lu}/${s}/${this.model}:${this.task}`;return this.stream&&(o+="?alt=sse"),o}};function pu(r){let e=[];return r?.apiClient&&e.push(r.apiClient),e.push(`${uu}/${du}`),e.join(" ")}async function fu(r){var e;let t=new Headers;t.append("Content-Type","application/json"),t.append("x-goog-api-client",pu(r.requestOptions)),t.append("x-goog-api-key",r.apiKey);let s=(e=r.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(n){throw new ke(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${n.message}`)}for(let[n,o]of s.entries()){if(n==="x-goog-api-key")throw new ke(`Cannot set reserved header name ${n}`);if(n==="x-goog-api-client")throw new ke(`Header name ${n} can only be set using the apiClient field`);t.append(n,o)}}return t}async function hu(r,e,t,s,n,o){let i=new Fi(r,e,t,s,o);return{url:i.toString(),fetchOptions:Object.assign(Object.assign({},bu(o)),{method:"POST",headers:await fu(i),body:n})}}async function sn(r,e,t,s,n,o={},i=fetch){let{url:a,fetchOptions:l}=await hu(r,e,t,s,n,o);return mu(a,l,i)}async function mu(r,e,t=fetch){let s;try{s=await t(r,e)}catch(n){gu(n,r)}return s.ok||await yu(s,r),s}function gu(r,e){let t=r;throw t.name==="AbortError"?(t=new po(`Request aborted when fetching ${e.toString()}: ${r.message}`),t.stack=r.stack):r instanceof uo||r instanceof ke||(t=new Q(`Error fetching from ${e.toString()}: ${r.message}`),t.stack=r.stack),t}async function yu(r,e){let t="",s;try{let n=await r.json();t=n.error.message,n.error.details&&(t+=` ${JSON.stringify(n.error.details)}`,s=n.error.details)}catch{}throw new uo(`Error fetching from ${e.toString()}: [${r.status} ${r.statusText}] ${t}`,r.status,r.statusText,s)}function bu(r){let e={};if(r?.signal!==void 0||r?.timeout>=0){let t=new AbortController;r?.timeout>=0&&setTimeout(()=>t.abort(),r.timeout),r?.signal&&r.signal.addEventListener("abort",()=>{t.abort()}),e.signal=t.signal}return e}function Ni(r){return r.text=()=>{if(r.candidates&&r.candidates.length>0){if(r.candidates.length>1&&console.warn(`This response had ${r.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),co(r.candidates[0]))throw new gt(`${yt(r)}`,r);return _u(r)}else if(r.promptFeedback)throw new gt(`Text not available. ${yt(r)}`,r);return""},r.functionCall=()=>{if(r.candidates&&r.candidates.length>0){if(r.candidates.length>1&&console.warn(`This response had ${r.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),co(r.candidates[0]))throw new gt(`${yt(r)}`,r);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Dl(r)[0]}else if(r.promptFeedback)throw new gt(`Function call not available. ${yt(r)}`,r)},r.functionCalls=()=>{if(r.candidates&&r.candidates.length>0){if(r.candidates.length>1&&console.warn(`This response had ${r.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),co(r.candidates[0]))throw new gt(`${yt(r)}`,r);return Dl(r)}else if(r.promptFeedback)throw new gt(`Function call not available. ${yt(r)}`,r)},r}function _u(r){var e,t,s,n;let o=[];if(!((t=(e=r.candidates)===null||e===void 0?void 0:e[0].content)===null||t===void 0)&&t.parts)for(let i of(n=(s=r.candidates)===null||s===void 0?void 0:s[0].content)===null||n===void 0?void 0:n.parts)i.text&&o.push(i.text),i.executableCode&&o.push("\n```"+i.executableCode.language+`
`+i.executableCode.code+"\n```\n"),i.codeExecutionResult&&o.push("\n```\n"+i.codeExecutionResult.output+"\n```\n");return o.length>0?o.join(""):""}function Dl(r){var e,t,s,n;let o=[];if(!((t=(e=r.candidates)===null||e===void 0?void 0:e[0].content)===null||t===void 0)&&t.parts)for(let i of(n=(s=r.candidates)===null||s===void 0?void 0:s[0].content)===null||n===void 0?void 0:n.parts)i.functionCall&&o.push(i.functionCall);if(o.length>0)return o}var wu=[Zr.RECITATION,Zr.SAFETY,Zr.LANGUAGE];function co(r){return!!r.finishReason&&wu.includes(r.finishReason)}function yt(r){var e,t,s;let n="";if((!r.candidates||r.candidates.length===0)&&r.promptFeedback)n+="Response was blocked",!((e=r.promptFeedback)===null||e===void 0)&&e.blockReason&&(n+=` due to ${r.promptFeedback.blockReason}`),!((t=r.promptFeedback)===null||t===void 0)&&t.blockReasonMessage&&(n+=`: ${r.promptFeedback.blockReasonMessage}`);else if(!((s=r.candidates)===null||s===void 0)&&s[0]){let o=r.candidates[0];co(o)&&(n+=`Candidate was blocked due to ${o.finishReason}`,o.finishMessage&&(n+=`: ${o.finishMessage}`))}return n}function en(r){return this instanceof en?(this.v=r,this):new en(r)}function vu(r,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=t.apply(r,e||[]),n,o=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(g){s[g]&&(n[g]=function(c){return new Promise(function(x,P){o.push([g,c,x,P])>1||a(g,c)})})}function a(g,c){try{l(s[g](c))}catch(x){h(o[0][3],x)}}function l(g){g.value instanceof en?Promise.resolve(g.value.v).then(p,b):h(o[0][2],g)}function p(g){a("next",g)}function b(g){a("throw",g)}function h(g,c){g(c),o.shift(),o.length&&a(o[0][0],o[0][1])}}var Hl=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function xu(r){let e=r.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),t=Su(e),[s,n]=t.tee();return{stream:Iu(s),response:Pu(n)}}async function Pu(r){let e=[],t=r.getReader();for(;;){let{done:s,value:n}=await t.read();if(s)return Ni(Au(e));e.push(n)}}function Iu(r){return vu(this,arguments,function*(){let t=r.getReader();for(;;){let{value:s,done:n}=yield en(t.read());if(n)break;yield yield en(Ni(s))}})}function Su(r){let e=r.getReader();return new ReadableStream({start(s){let n="";return o();function o(){return e.read().then(({value:i,done:a})=>{if(a){if(n.trim()){s.error(new Q("Failed to parse stream"));return}s.close();return}n+=i;let l=n.match(Hl),p;for(;l;){try{p=JSON.parse(l[1])}catch{s.error(new Q(`Error parsing JSON response: "${l[1]}"`));return}s.enqueue(p),n=n.substring(l[0].length),l=n.match(Hl)}return o()}).catch(i=>{let a=i;throw a.stack=i.stack,a.name==="AbortError"?a=new po("Request aborted when reading from the stream"):a=new Q("Error reading from the stream"),a})}}})}function Au(r){let e=r[r.length-1],t={promptFeedback:e?.promptFeedback};for(let s of r){if(s.candidates){let n=0;for(let o of s.candidates)if(t.candidates||(t.candidates=[]),t.candidates[n]||(t.candidates[n]={index:n}),t.candidates[n].citationMetadata=o.citationMetadata,t.candidates[n].groundingMetadata=o.groundingMetadata,t.candidates[n].finishReason=o.finishReason,t.candidates[n].finishMessage=o.finishMessage,t.candidates[n].safetyRatings=o.safetyRatings,o.content&&o.content.parts){t.candidates[n].content||(t.candidates[n].content={role:o.content.role||"user",parts:[]});let i={};for(let a of o.content.parts)a.text&&(i.text=a.text),a.functionCall&&(i.functionCall=a.functionCall),a.executableCode&&(i.executableCode=a.executableCode),a.codeExecutionResult&&(i.codeExecutionResult=a.codeExecutionResult),Object.keys(i).length===0&&(i.text=""),t.candidates[n].content.parts.push(i)}n++}s.usageMetadata&&(t.usageMetadata=s.usageMetadata)}return t}async function Kl(r,e,t,s){let n=await sn(e,Xt.STREAM_GENERATE_CONTENT,r,!0,JSON.stringify(t),s);return xu(n)}async function Jl(r,e,t,s){let o=await(await sn(e,Xt.GENERATE_CONTENT,r,!1,JSON.stringify(t),s)).json();return{response:Ni(o)}}function Gl(r){if(r!=null){if(typeof r=="string")return{role:"system",parts:[{text:r}]};if(r.text)return{role:"system",parts:[r]};if(r.parts)return r.role?r:{role:"system",parts:r.parts}}}function tn(r){let e=[];if(typeof r=="string")e=[{text:r}];else for(let t of r)typeof t=="string"?e.push({text:t}):e.push(t);return Eu(e)}function Eu(r){let e={role:"user",parts:[]},t={role:"function",parts:[]},s=!1,n=!1;for(let o of r)"functionResponse"in o?(t.parts.push(o),n=!0):(e.parts.push(o),s=!0);if(s&&n)throw new Q("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!n)throw new Q("No content is provided for sending chat message.");return s?e:t}function Ru(r,e){var t;let s={model:e?.model,generationConfig:e?.generationConfig,safetySettings:e?.safetySettings,tools:e?.tools,toolConfig:e?.toolConfig,systemInstruction:e?.systemInstruction,cachedContent:(t=e?.cachedContent)===null||t===void 0?void 0:t.name,contents:[]},n=r.generateContentRequest!=null;if(r.contents){if(n)throw new ke("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=r.contents}else if(n)s=Object.assign(Object.assign({},s),r.generateContentRequest);else{let o=tn(r);s.contents=[o]}return{generateContentRequest:s}}function Ul(r){let e;return r.contents?e=r:e={contents:[tn(r)]},r.systemInstruction&&(e.systemInstruction=Gl(r.systemInstruction)),e}function ku(r){return typeof r=="string"||Array.isArray(r)?{content:tn(r)}:r}var jl=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Cu={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Tu(r){let e=!1;for(let t of r){let{role:s,parts:n}=t;if(!e&&s!=="user")throw new Q(`First content should be with role 'user', got ${s}`);if(!Tl.includes(s))throw new Q(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(Tl)}`);if(!Array.isArray(n))throw new Q("Content should have 'parts' property with an array of Parts");if(n.length===0)throw new Q("Each Content should have at least one part");let o={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let a of n)for(let l of jl)l in a&&(o[l]+=1);let i=Cu[s];for(let a of jl)if(!i.includes(a)&&o[a]>0)throw new Q(`Content with role '${s}' can't contain '${a}' part`);e=!0}}function ql(r){var e;if(r.candidates===void 0||r.candidates.length===0)return!1;let t=(e=r.candidates[0])===null||e===void 0?void 0:e.content;if(t===void 0||t.parts===void 0||t.parts.length===0)return!1;for(let s of t.parts)if(s===void 0||Object.keys(s).length===0||s.text!==void 0&&s.text==="")return!1;return!0}var Wl="SILENT_ERROR",$i=class{constructor(e,t,s,n={}){this.model=t,this.params=s,this._requestOptions=n,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,s?.history&&(Tu(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var s,n,o,i,a,l;await this._sendPromise;let p=tn(e),b={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(n=this.params)===null||n===void 0?void 0:n.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,p]},h=Object.assign(Object.assign({},this._requestOptions),t),g;return this._sendPromise=this._sendPromise.then(()=>Jl(this._apiKey,this.model,b,h)).then(c=>{var x;if(ql(c.response)){this._history.push(p);let P=Object.assign({parts:[],role:"model"},(x=c.response.candidates)===null||x===void 0?void 0:x[0].content);this._history.push(P)}else{let P=yt(c.response);P&&console.warn(`sendMessage() was unsuccessful. ${P}. Inspect response object for details.`)}g=c}).catch(c=>{throw this._sendPromise=Promise.resolve(),c}),await this._sendPromise,g}async sendMessageStream(e,t={}){var s,n,o,i,a,l;await this._sendPromise;let p=tn(e),b={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(n=this.params)===null||n===void 0?void 0:n.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,p]},h=Object.assign(Object.assign({},this._requestOptions),t),g=Kl(this._apiKey,this.model,b,h);return this._sendPromise=this._sendPromise.then(()=>g).catch(c=>{throw new Error(Wl)}).then(c=>c.response).then(c=>{if(ql(c)){this._history.push(p);let x=Object.assign({},c.candidates[0].content);x.role||(x.role="model"),this._history.push(x)}else{let x=yt(c);x&&console.warn(`sendMessageStream() was unsuccessful. ${x}. Inspect response object for details.`)}}).catch(c=>{c.message!==Wl&&console.error(c)}),g}};async function Mu(r,e,t,s){return(await sn(e,Xt.COUNT_TOKENS,r,!1,JSON.stringify(t),s)).json()}async function Ou(r,e,t,s){return(await sn(e,Xt.EMBED_CONTENT,r,!1,JSON.stringify(t),s)).json()}async function Fu(r,e,t,s){let n=t.requests.map(i=>Object.assign(Object.assign({},i),{model:e}));return(await sn(e,Xt.BATCH_EMBED_CONTENTS,r,!1,JSON.stringify({requests:n}),s)).json()}var fo=class{constructor(e,t,s={}){this.apiKey=e,this._requestOptions=s,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=Gl(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var s;let n=Ul(e),o=Object.assign(Object.assign({},this._requestOptions),t);return Jl(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},n),o)}async generateContentStream(e,t={}){var s;let n=Ul(e),o=Object.assign(Object.assign({},this._requestOptions),t);return Kl(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},n),o)}startChat(e){var t;return new $i(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(t=this.cachedContent)===null||t===void 0?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){let s=Ru(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),n=Object.assign(Object.assign({},this._requestOptions),t);return Mu(this.apiKey,this.model,s,n)}async embedContent(e,t={}){let s=ku(e),n=Object.assign(Object.assign({},this._requestOptions),t);return Ou(this.apiKey,this.model,s,n)}async batchEmbedContents(e,t={}){let s=Object.assign(Object.assign({},this._requestOptions),t);return Fu(this.apiKey,this.model,e,s)}};var ho=class{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new Q("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new fo(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,s){if(!e.name)throw new ke("Cached content must contain a `name` field.");if(!e.model)throw new ke("Cached content must contain a `model` field.");let n=["model","systemInstruction"];for(let i of n)if(t?.[i]&&e[i]&&t?.[i]!==e[i]){if(i==="model"){let a=t.model.startsWith("models/")?t.model.replace("models/",""):t.model,l=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(a===l)continue}throw new ke(`Different value for "${i}" specified in modelParams (${t[i]}) and cachedContent (${e[i]})`)}let o=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new fo(this.apiKey,o,s)}};var mo=class{getApiKey(e){let s=Vl.workspace.getConfiguration("promptStudio").get(`${e}.apiKey`);if(!s)throw new Error(`No API key configured for ${e}`);return s}async runPrompt(e){try{switch(e.provider){case"openai":return await this.runOpenAI(e);case"anthropic":return await this.runAnthropic(e);case"google":return await this.runGoogle(e);default:throw new Error(`Unknown provider: ${e.provider}`)}}catch(t){return{content:"",provider:e.provider,model:e.model,timestamp:new Date,error:t.message||"Unknown error occurred"}}}async runOpenAI(e){let t=this.getApiKey("openai"),s=new A({apiKey:t}),n=[];e.systemPrompt&&n.push({role:"system",content:e.systemPrompt}),n.push({role:"user",content:e.prompt});let o=await s.chat.completions.create({model:e.model,messages:n,temperature:e.temperature??.7,max_tokens:e.maxTokens??2e3});return{content:o.choices[0]?.message?.content||"",provider:"openai",model:e.model,timestamp:new Date,tokensUsed:o.usage?.total_tokens}}async runAnthropic(e){let t=this.getApiKey("anthropic"),n=await new Re({apiKey:t}).messages.create({model:e.model,max_tokens:e.maxTokens??2e3,temperature:e.temperature??.7,system:e.systemPrompt,messages:[{role:"user",content:e.prompt}]});return{content:n.content[0]?.type==="text"?n.content[0].text:"",provider:"anthropic",model:e.model,timestamp:new Date,tokensUsed:n.usage.input_tokens+n.usage.output_tokens}}async runGoogle(e){let t=this.getApiKey("google"),n=new ho(t).getGenerativeModel({model:e.model}),o=e.systemPrompt?`${e.systemPrompt}

${e.prompt}`:e.prompt;return{content:(await n.generateContent({contents:[{role:"user",parts:[{text:o}]}],generationConfig:{temperature:e.temperature??.7,maxOutputTokens:e.maxTokens??2e3}})).response.text(),provider:"google",model:e.model,timestamp:new Date}}};var bt=me(require("vscode"));var rn={openai:[{id:"gpt-5",label:"GPT-5"},{id:"gpt-5-mini",label:"GPT-5 Mini"},{id:"gpt-5-nano",label:"GPT-5 Nano"},{id:"gpt-4o",label:"GPT-4o"},{id:"gpt-4o-mini",label:"GPT-4o Mini"},{id:"o3",label:"o3"},{id:"o4-mini",label:"o4 Mini"}],anthropic:[{id:"claude-opus-4-5-20251101",label:"Claude Opus 4.5"},{id:"claude-sonnet-4-5-20250929",label:"Claude Sonnet 4.5"},{id:"claude-haiku-4-5-20251001",label:"Claude Haiku 4.5"},{id:"claude-sonnet-4-20250514",label:"Claude Sonnet 4"}],google:[{id:"gemini-3-pro",label:"Gemini 3 Pro"},{id:"gemini-2.5-pro",label:"Gemini 2.5 Pro"},{id:"gemini-2.5-flash",label:"Gemini 2.5 Flash"}]};function Xl(r){return rn[r].map(e=>e.id)}function go(r){return rn[r].map(e=>({provider:r,model:e.id,label:e.label}))}function zl(){let r={};for(let[e,t]of Object.entries(rn))r[e]=t.map(s=>({value:s.id,label:s.label}));return JSON.stringify(r,null,12)}var yo=class{constructor(e){this.llmManager=e}async runPrompt(e){return await bt.window.withProgress({location:bt.ProgressLocation.Notification,title:`Running prompt with ${e.provider}...`,cancellable:!1},async()=>await this.llmManager.runPrompt(e))}async runPromptInteractive(){let e=await bt.window.showQuickPick(["openai","anthropic","google"],{placeHolder:"Select LLM provider"});if(!e)return;let t=await bt.window.showQuickPick(Xl(e),{placeHolder:"Select model"});if(!t)return;let s=await bt.window.showInputBox({prompt:"Enter your prompt",placeHolder:"What would you like to ask?"});if(!s)return;let n=await bt.window.showInputBox({prompt:"Enter system prompt (optional, press Enter to skip)",placeHolder:"You are a helpful assistant..."}),o={provider:e,model:t,prompt:s,systemPrompt:n||void 0};return await this.runPrompt(o)}};var D=me(require("vscode")),_t=me(require("fs/promises")),Li=me(require("path")),bo=class{constructor(e,t){this.context=e;this.llmManager=t;this.testsPath=Li.join(e.globalStorageUri.fsPath,"tests.json"),this.resultsPath=Li.join(e.globalStorageUri.fsPath,"test-results.json"),this.ensureStorage()}testsPath;resultsPath;async ensureStorage(){try{await _t.mkdir(this.context.globalStorageUri.fsPath,{recursive:!0})}catch(e){console.error("Failed to create storage directory:",e)}}async createTest(){let e=await D.window.showInputBox({prompt:"Enter test name",placeHolder:"My Prompt Test"});if(!e)return;let t=await D.window.showInputBox({prompt:"Enter test description (optional)",placeHolder:"Tests the ability to..."}),s=await D.window.showQuickPick(["openai","anthropic","google"],{placeHolder:"Select LLM provider"});if(!s)return;let n={openai:["gpt-4","gpt-4-turbo","gpt-3.5-turbo"],anthropic:["claude-3-opus-20240229","claude-3-sonnet-20240229","claude-3-haiku-20240307"],google:["gemini-pro","gemini-pro-vision"]},o=await D.window.showQuickPick(n[s],{placeHolder:"Select model"});if(!o)return;let i=await D.window.showInputBox({prompt:"Enter the prompt to test",placeHolder:"Explain quantum computing in simple terms"});if(!i)return;let a=await D.window.showInputBox({prompt:"Enter system prompt (optional)",placeHolder:"You are a helpful assistant..."}),l={id:Date.now().toString(),name:e,description:t||void 0,provider:s,model:o,prompt:i,systemPrompt:a||void 0};await this.saveTest(l),D.window.showInformationMessage(`Test "${e}" created successfully!`)}async saveTest(e){let t=await this.loadTests();t.push(e),await _t.writeFile(this.testsPath,JSON.stringify(t,null,2))}async loadTests(){try{let e=await _t.readFile(this.testsPath,"utf-8");return JSON.parse(e)}catch{return[]}}async runTests(){let e=await this.loadTests();if(e.length===0){D.window.showInformationMessage("No tests found. Create a test first!");return}let t=await D.window.showQuickPick(e.map(n=>({label:n.name,description:n.description,test:n})),{placeHolder:"Select tests to run",canPickMany:!0});if(!t||t.length===0)return;let s=[];await D.window.withProgress({location:D.ProgressLocation.Notification,title:"Running tests...",cancellable:!1},async n=>{for(let o=0;o<t.length;o++){let{test:i}=t[o];n.report({message:`Running test ${o+1}/${t.length}: ${i.name}`,increment:100/t.length});let a={provider:i.provider,model:i.model,prompt:i.prompt,systemPrompt:i.systemPrompt},l=await this.llmManager.runPrompt(a),p={testId:i.id,testName:i.name,timestamp:new Date,response:l};s.push(p)}}),await this.saveTestRun(s),await this.showTestResults(s)}async saveTestRun(e){let t=await this.loadTestRuns(),s={id:Date.now().toString(),timestamp:new Date,results:e};t.push(s),await _t.writeFile(this.resultsPath,JSON.stringify(t,null,2))}async loadTestRuns(){try{let e=await _t.readFile(this.resultsPath,"utf-8");return JSON.parse(e)}catch{return[]}}async showTestResults(e){let t=await D.workspace.openTextDocument({content:this.formatTestResults(e),language:"markdown"});await D.window.showTextDocument(t)}formatTestResults(e){let t=`# Test Results

`;t+=`**Run Date:** ${new Date().toLocaleString()}

`,t+=`**Tests Run:** ${e.length}

`;for(let s of e)t+=`## ${s.testName}

`,t+=`**Provider:** ${s.response.provider}
`,t+=`**Model:** ${s.response.model}
`,t+=`**Timestamp:** ${s.timestamp.toLocaleString()}
`,s.response.tokensUsed&&(t+=`**Tokens Used:** ${s.response.tokensUsed}
`),s.response.error?t+=`
**Error:** ${s.response.error}

`:t+=`
**Response:**

${s.response.content}

`,t+=`---

`;return t}async compareResults(){let e=await this.loadTestRuns();if(e.length<2){D.window.showInformationMessage("Need at least 2 test runs to compare. Run tests first!");return}let t=e.map(a=>({label:new Date(a.timestamp).toLocaleString(),description:`${a.results.length} tests`,run:a})),s=await D.window.showQuickPick(t,{placeHolder:"Select first test run"});if(!s)return;let n=await D.window.showQuickPick(t.filter(a=>a.run.id!==s.run.id),{placeHolder:"Select second test run to compare"});if(!n)return;let o=this.compareTestRuns(s.run,n.run),i=await D.workspace.openTextDocument({content:o,language:"markdown"});await D.window.showTextDocument(i)}compareTestRuns(e,t){let s=`# Test Run Comparison

`;s+=`**Run 1:** ${new Date(e.timestamp).toLocaleString()}
`,s+=`**Run 2:** ${new Date(t.timestamp).toLocaleString()}

`;let n=new Map;for(let o of e.results)n.set(o.testId,{result1:o});for(let o of t.results){let i=n.get(o.testId)||{};n.set(o.testId,{...i,result2:o})}for(let[o,{result1:i,result2:a}]of n){let l=i?.testName||a?.testName||"Unknown Test";s+=`## ${l}

`,i?a?(s+=`### Run 1
`,s+=`**Provider:** ${i.response.provider} | **Model:** ${i.response.model}
`,i.response.error?s+=`**Error:** ${i.response.error}

`:s+=`
${i.response.content}

`,s+=`### Run 2
`,s+=`**Provider:** ${a.response.provider} | **Model:** ${a.response.model}
`,a.response.error?s+=`**Error:** ${a.response.error}

`:s+=`
${a.response.content}

`,i.response.content===a.response.content?s+=`\u2705 **Responses are identical**

`:s+=`\u2139\uFE0F **Responses differ**

`):(s+=`\u26A0\uFE0F Test not present in second run

`,s+=`**Run 1 Response:**

${i.response.content}

`):(s+=`\u26A0\uFE0F Test not present in first run

`,s+=`**Run 2 Response:**

${a.response.content}

`),s+=`---

`}return s}};var nn=me(require("vscode"));function $u(){return rn.openai.map(e=>`                <option value="${e.id}">${e.label}</option>`).join(`
`)}var _o=class{constructor(e,t,s){this.context=e;this.promptRunner=t;this.testManager=s}panel;async showPromptPanel(){if(this.panel){this.panel.reveal();return}this.panel=nn.window.createWebviewPanel("promptStudio","Prompt Studio",nn.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0}),this.panel.webview.html=this.getWebviewContent(),this.panel.webview.onDidReceiveMessage(async e=>{switch(e.command){case"runPrompt":await this.handleRunPrompt(e.data);break;case"saveAsTest":await this.handleSaveAsTest(e.data);break}},void 0,this.context.subscriptions),this.panel.onDidDispose(()=>{this.panel=void 0})}async handleRunPrompt(e){let t={provider:e.provider,model:e.model,prompt:e.prompt,systemPrompt:e.systemPrompt||void 0,temperature:e.temperature||.7,maxTokens:e.maxTokens||2e3},s=await this.promptRunner.runPrompt(t);this.panel?.webview.postMessage({command:"promptResponse",response:s})}async handleSaveAsTest(e){nn.window.showInformationMessage("Save as test feature - to be implemented")}getWebviewContent(){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prompt Studio</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: var(--vscode-font-family);
            color: var(--vscode-foreground);
            background-color: var(--vscode-editor-background);
            padding: 20px;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        h1 {
            margin-bottom: 20px;
            color: var(--vscode-foreground);
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        select, input, textarea {
            width: 100%;
            padding: 8px;
            background-color: var(--vscode-input-background);
            color: var(--vscode-input-foreground);
            border: 1px solid var(--vscode-input-border);
            border-radius: 4px;
            font-family: var(--vscode-font-family);
            font-size: 14px;
        }
        
        textarea {
            min-height: 100px;
            resize: vertical;
        }
        
        .row {
            display: flex;
            gap: 20px;
        }
        
        .col {
            flex: 1;
        }
        
        button {
            padding: 10px 20px;
            background-color: var(--vscode-button-background);
            color: var(--vscode-button-foreground);
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            margin-right: 10px;
        }
        
        button:hover {
            background-color: var(--vscode-button-hoverBackground);
        }
        
        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        .response-container {
            margin-top: 30px;
            padding: 20px;
            background-color: var(--vscode-editor-background);
            border: 1px solid var(--vscode-panel-border);
            border-radius: 4px;
            display: none;
        }
        
        .response-container.visible {
            display: block;
        }
        
        .response-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--vscode-panel-border);
        }
        
        .response-meta {
            font-size: 12px;
            color: var(--vscode-descriptionForeground);
        }
        
        .response-content {
            white-space: pre-wrap;
            word-wrap: break-word;
            line-height: 1.8;
            font-family: var(--vscode-editor-font-family);
        }
        
        .error {
            color: var(--vscode-errorForeground);
            padding: 10px;
            background-color: var(--vscode-inputValidation-errorBackground);
            border: 1px solid var(--vscode-inputValidation-errorBorder);
            border-radius: 4px;
        }
        
        .loading {
            display: none;
            text-align: center;
            padding: 20px;
            color: var(--vscode-descriptionForeground);
        }
        
        .loading.visible {
            display: block;
        }
        
        .advanced-options {
            margin-top: 10px;
            padding: 15px;
            background-color: var(--vscode-editor-background);
            border: 1px solid var(--vscode-panel-border);
            border-radius: 4px;
        }
        
        .advanced-toggle {
            background: none;
            color: var(--vscode-textLink-foreground);
            text-decoration: underline;
            padding: 5px 0;
            margin-bottom: 10px;
        }
        
        .advanced-content {
            display: none;
        }
        
        .advanced-content.visible {
            display: block;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>\u{1F680} Prompt Studio</h1>
        
        <div class="form-group">
            <label for="provider">Provider</label>
            <select id="provider" onchange="updateModels()">
                <option value="openai">OpenAI</option>
                <option value="anthropic">Anthropic</option>
                <option value="google">Google</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="model">Model</label>
            <select id="model">
${$u()}
            </select>
        </div>
        
        <div class="form-group">
            <label for="systemPrompt">System Prompt (Optional)</label>
            <textarea id="systemPrompt" placeholder="You are a helpful assistant..."></textarea>
        </div>
        
        <div class="form-group">
            <label for="prompt">Prompt</label>
            <textarea id="prompt" placeholder="Enter your prompt here..." style="min-height: 150px;"></textarea>
        </div>
        
        <button class="advanced-toggle" onclick="toggleAdvanced()">\u2699\uFE0F Advanced Options</button>
        
        <div class="advanced-content" id="advancedOptions">
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="temperature">Temperature (0-2)</label>
                        <input type="number" id="temperature" min="0" max="2" step="0.1" value="0.7">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="maxTokens">Max Tokens</label>
                        <input type="number" id="maxTokens" min="1" max="8000" value="2000">
                    </div>
                </div>
            </div>
        </div>
        
        <div style="margin-top: 20px;">
            <button id="runButton" onclick="runPrompt()">Run Prompt</button>
            <button onclick="clearAll()">Clear</button>
        </div>
        
        <div class="loading" id="loading">
            \u23F3 Running prompt...
        </div>
        
        <div class="response-container" id="responseContainer">
            <div class="response-header">
                <h2>Response</h2>
                <div class="response-meta" id="responseMeta"></div>
            </div>
            <div class="response-content" id="responseContent"></div>
        </div>
    </div>
    
    <script>
        const vscode = acquireVsCodeApi();
        
        const modelMap = ${zl()};
        
        function updateModels() {
            const provider = document.getElementById('provider').value;
            const modelSelect = document.getElementById('model');
            modelSelect.innerHTML = '';
            
            modelMap[provider].forEach(model => {
                const option = document.createElement('option');
                option.value = model.value;
                option.textContent = model.label;
                modelSelect.appendChild(option);
            });
        }
        
        function toggleAdvanced() {
            const content = document.getElementById('advancedOptions');
            content.classList.toggle('visible');
        }
        
        function runPrompt() {
            const provider = document.getElementById('provider').value;
            const model = document.getElementById('model').value;
            const prompt = document.getElementById('prompt').value;
            const systemPrompt = document.getElementById('systemPrompt').value;
            const temperature = parseFloat(document.getElementById('temperature').value);
            const maxTokens = parseInt(document.getElementById('maxTokens').value);
            
            if (!prompt.trim()) {
                alert('Please enter a prompt');
                return;
            }
            
            document.getElementById('loading').classList.add('visible');
            document.getElementById('responseContainer').classList.remove('visible');
            document.getElementById('runButton').disabled = true;
            
            vscode.postMessage({
                command: 'runPrompt',
                data: {
                    provider,
                    model,
                    prompt,
                    systemPrompt,
                    temperature,
                    maxTokens
                }
            });
        }
        
        function clearAll() {
            document.getElementById('prompt').value = '';
            document.getElementById('systemPrompt').value = '';
            document.getElementById('responseContainer').classList.remove('visible');
        }
        
        window.addEventListener('message', event => {
            const message = event.data;
            
            if (message.command === 'promptResponse') {
                document.getElementById('loading').classList.remove('visible');
                document.getElementById('runButton').disabled = false;
                
                const response = message.response;
                const container = document.getElementById('responseContainer');
                const meta = document.getElementById('responseMeta');
                const content = document.getElementById('responseContent');
                
                container.classList.add('visible');
                
                if (response.error) {
                    content.innerHTML = '<div class="error">Error: ' + response.error + '</div>';
                    meta.textContent = '';
                } else {
                    content.textContent = response.content;
                    meta.textContent = 'Provider: ' + response.provider + 
                                      ' | Model: ' + response.model +
                                      (response.tokensUsed ? ' | Tokens: ' + response.tokensUsed : '');
                }
            }
        });
        
        // Initialize
        updateModels();
    </script>
</body>
</html>`}};var C=me(require("vscode")),cr=me(require("path"));var wo=class{constructor(e,t,s){this._extensionUri=e;this.llmManager=t;this.historyManager=s}_view;currentFilePath="";currentFileName="";resolveWebviewView(e,t,s){this._view=e,e.webview.options={enableScripts:!0,localResourceRoots:[this._extensionUri]},e.webview.html=this._getHtmlForWebview(e.webview),e.webview.onDidReceiveMessage(async n=>{switch(n.type){case"getAvailableModels":await this.sendAvailableModels();break;case"getCurrentFile":await this.sendCurrentFile();break;case"runPrompt":await this.runPrompt(n);break;case"saveApiKeys":await this.saveApiKeys(n.keys);break;case"getApiKeys":await this.sendApiKeys();break;case"getHistory":await this.sendHistory(n.filePath);break;case"clearHistory":await this.clearHistory(n.filePath);break;case"openInNewTab":await this.openInNewTab(n.content,n.title);break;case"addFiles":await this.addFiles();break;case"readFile":await this.sendFileContent(n.filePath);break;case"getOpenFiles":await this.sendOpenFiles();break;case"selectCurrentFile":await this.selectCurrentFile(n.filePath);break}}),this.sendCurrentFile(),this.sendOpenFiles(),this.sendAvailableModels()}async sendCurrentFile(){let e=C.window.activeTextEditor;if(e&&this._view){let t=e.document;this._view.webview.postMessage({type:"currentFile",filePath:t.fileName,fileName:cr.basename(t.fileName),content:t.getText()})}}async readFileContent(e){try{let t=C.Uri.file(e),s=await C.workspace.fs.readFile(t);return Buffer.from(s).toString("utf8")}catch(t){throw new Error(`Failed to read file ${e}: ${t.message}`)}}async sendAvailableModels(){if(!this._view)return;let e=C.workspace.getConfiguration("promptStudio"),t=[],s=e.get("openai.apiKey");s&&s.trim()&&t.push(...go("openai"));let n=e.get("anthropic.apiKey");n&&n.trim()&&t.push(...go("anthropic"));let o=e.get("google.apiKey");o&&o.trim()&&t.push(...go("google")),this._view.webview.postMessage({type:"availableModels",models:t})}async runPrompt(e){if(this._view){this._view.webview.postMessage({type:"loading",loading:!0});try{this.currentFilePath=e.filePath||"",this.currentFileName=e.fileName||"";let t={provider:e.provider,model:e.model,prompt:e.prompt,systemPrompt:e.systemPrompt||void 0,temperature:.7,maxTokens:2e3},s=await this.llmManager.runPrompt(t);this.currentFilePath&&!s.error&&await this.historyManager.addEntry(this.currentFilePath,this.currentFileName,e.userPrompt||e.prompt,t.systemPrompt,t.provider,t.model,s),this._view.webview.postMessage({type:"response",response:s})}catch(t){this._view.webview.postMessage({type:"error",error:t.message||"Unknown error occurred"})}finally{this._view.webview.postMessage({type:"loading",loading:!1})}}}async saveApiKeys(e){let t=C.workspace.getConfiguration("promptStudio");try{e.openai!==void 0&&await t.update("openai.apiKey",e.openai,C.ConfigurationTarget.Global),e.anthropic!==void 0&&await t.update("anthropic.apiKey",e.anthropic,C.ConfigurationTarget.Global),e.google!==void 0&&await t.update("google.apiKey",e.google,C.ConfigurationTarget.Global),await this.sendAvailableModels(),this._view&&this._view.webview.postMessage({type:"apiKeysSaved",success:!0}),C.window.showInformationMessage("API keys saved successfully!")}catch(s){this._view&&this._view.webview.postMessage({type:"apiKeysSaved",success:!1,error:s.message}),C.window.showErrorMessage(`Failed to save API keys: ${s.message}`)}}async sendApiKeys(){if(!this._view)return;let e=C.workspace.getConfiguration("promptStudio"),t={openai:e.get("openai.apiKey")||"",anthropic:e.get("anthropic.apiKey")||"",google:e.get("google.apiKey")||""};this._view.webview.postMessage({type:"apiKeys",keys:t})}async sendHistory(e){if(!this._view)return;let t=e;if(!t){let n=C.window.activeTextEditor;if(!n){this._view.webview.postMessage({type:"history",entries:[]});return}t=n.document.fileName}let s=await this.historyManager.getHistoryForFile(t);this._view.webview.postMessage({type:"history",entries:s.map(n=>({id:n.id,timestamp:n.timestamp,prompt:n.prompt,response:n.response,systemPrompt:n.systemPrompt,provider:n.provider,model:n.model,tokensUsed:n.tokensUsed}))})}async clearHistory(e){try{await this.historyManager.clearHistoryForFile(e),C.window.showInformationMessage("History cleared for current file"),await this.sendHistory()}catch(t){C.window.showErrorMessage(`Failed to clear history: ${t.message}`)}}async openInNewTab(e,t){try{let s=await C.workspace.openTextDocument({content:e,language:"markdown"});await C.window.showTextDocument(s,{preview:!1,viewColumn:C.ViewColumn.One})}catch(s){C.window.showErrorMessage(`Failed to open in new tab: ${s.message}`)}}async addFiles(){try{let e=await C.window.showOpenDialog({canSelectMany:!0,openLabel:"Add Files",filters:{"All Files":["*"]}});if(e&&e.length>0&&this._view){let t=await Promise.all(e.map(async s=>{let n=await this.readFileContent(s.fsPath);return{filePath:s.fsPath,fileName:cr.basename(s.fsPath),content:n}}));this._view.webview.postMessage({type:"filesAdded",files:t})}}catch(e){C.window.showErrorMessage(`Failed to add files: ${e.message}`)}}async sendFileContent(e){try{let t=await this.readFileContent(e);this._view&&this._view.webview.postMessage({type:"fileContent",filePath:e,fileName:cr.basename(e),content:t})}catch(t){this._view&&this._view.webview.postMessage({type:"fileContentError",filePath:e,error:t.message})}}async sendOpenFiles(){if(!this._view)return;let e=C.window.tabGroups.all.flatMap(t=>t.tabs).filter(t=>t.input instanceof C.TabInputText).map(t=>{let s=t.input;return{filePath:s.uri.fsPath,fileName:cr.basename(s.uri.fsPath)}});this._view.webview.postMessage({type:"openFiles",files:e})}async selectCurrentFile(e){if(this._view)try{let t=await this.readFileContent(e);this._view.webview.postMessage({type:"currentFile",filePath:e,fileName:cr.basename(e),content:t})}catch(t){C.window.showErrorMessage(`Failed to read file: ${t.message}`)}}_getHtmlForWebview(e){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
    <title>Prompt Studio</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: var(--vscode-font-family);
            font-size: var(--vscode-font-size);
            color: var(--vscode-foreground);
            background-color: var(--vscode-sideBar-background);
            padding: 16px;
        }
        
        .section {
            margin-bottom: 16px;
        }
        
        .section-title {
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            color: var(--vscode-foreground);
            margin-bottom: 8px;
            opacity: 0.8;
        }
        
        select, input, textarea, button {
            width: 100%;
            padding: 6px 8px;
            background-color: var(--vscode-input-background);
            color: var(--vscode-input-foreground);
            border: 1px solid var(--vscode-input-border);
            border-radius: 2px;
            font-family: var(--vscode-font-family);
            font-size: var(--vscode-font-size);
        }
        
        select {
            cursor: pointer;
        }
        
        textarea {
            min-height: 100px;
            resize: vertical;
            font-family: var(--vscode-editor-font-family);
        }
        
        button {
            background-color: var(--vscode-button-background);
            color: var(--vscode-button-foreground);
            border: none;
            cursor: pointer;
            font-weight: 600;
            padding: 8px 12px;
            margin-top: 8px;
        }
        
        button:hover {
            background-color: var(--vscode-button-hoverBackground);
        }
        
        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        .file-display {
            padding: 8px;
            background-color: var(--vscode-editor-background);
            border: 1px solid var(--vscode-panel-border);
            border-radius: 2px;
            font-family: var(--vscode-editor-font-family);
            font-size: 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .response-container {
            margin-top: 16px;
            padding: 12px;
            background-color: var(--vscode-editor-background);
            border: 1px solid var(--vscode-panel-border);
            border-radius: 2px;
            display: none;
        }
        
        .response-container.visible {
            display: block;
        }
        
        .response-header {
            font-weight: 600;
            margin-bottom: 8px;
            padding-bottom: 8px;
            border-bottom: 1px solid var(--vscode-panel-border);
            font-size: 12px;
        }
        
        .response-meta {
            font-size: 11px;
            color: var(--vscode-descriptionForeground);
            margin-bottom: 8px;
        }
        
        .response-content {
            white-space: pre-wrap;
            word-wrap: break-word;
            line-height: 1.6;
            font-family: var(--vscode-editor-font-family);
            font-size: 13px;
        }
        
        .error {
            color: var(--vscode-errorForeground);
            padding: 8px;
            background-color: var(--vscode-inputValidation-errorBackground);
            border: 1px solid var(--vscode-inputValidation-errorBorder);
            border-radius: 2px;
            font-size: 12px;
        }
        
        .loading {
            text-align: center;
            padding: 12px;
            color: var(--vscode-descriptionForeground);
            font-size: 12px;
        }
        
        .no-models {
            padding: 8px;
            background-color: var(--vscode-inputValidation-warningBackground);
            border: 1px solid var(--vscode-inputValidation-warningBorder);
            border-radius: 2px;
            font-size: 12px;
            margin-bottom: 12px;
        }
        
        .help-text {
            font-size: 11px;
            color: var(--vscode-descriptionForeground);
            margin-top: 4px;
            font-style: italic;
        }

        .divider {
            height: 1px;
            background-color: var(--vscode-panel-border);
            margin: 16px 0;
        }

        .config-button {
            background-color: var(--vscode-button-secondaryBackground);
            color: var(--vscode-button-secondaryForeground);
            padding: 4px 8px;
            font-size: 11px;
            margin-top: 0;
            width: auto;
            display: inline-block;
        }

        .config-button:hover {
            background-color: var(--vscode-button-secondaryHoverBackground);
        }

        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            padding: 20px;
        }

        .modal.visible {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .modal-content {
            background-color: var(--vscode-editor-background);
            border: 1px solid var(--vscode-panel-border);
            border-radius: 4px;
            padding: 20px;
            max-width: 500px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
        }

        .modal-header {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 16px;
            color: var(--vscode-foreground);
        }

        .modal-section {
            margin-bottom: 16px;
        }

        .modal-label {
            font-size: 12px;
            font-weight: 600;
            margin-bottom: 6px;
            display: block;
            color: var(--vscode-foreground);
        }

        .modal-input {
            width: 100%;
            padding: 8px;
            margin-bottom: 4px;
        }

        .modal-help {
            font-size: 11px;
            color: var(--vscode-descriptionForeground);
            font-style: italic;
        }

        .modal-buttons {
            display: flex;
            gap: 8px;
            margin-top: 20px;
        }

        .modal-buttons button {
            flex: 1;
            margin-top: 0;
        }

        .cancel-button {
            background-color: var(--vscode-button-secondaryBackground);
            color: var(--vscode-button-secondaryForeground);
        }

        .cancel-button:hover {
            background-color: var(--vscode-button-secondaryHoverBackground);
        }

        .title-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }

        .tabs {
            display: flex;
            gap: 4px;
            margin-bottom: 16px;
            border-bottom: 1px solid var(--vscode-panel-border);
        }

        .tab {
            padding: 8px 16px;
            background: transparent;
            border: none;
            border-bottom: 2px solid transparent;
            cursor: pointer;
            font-weight: 500;
            color: var(--vscode-foreground);
            opacity: 0.6;
            margin-top: 0;
            width: auto;
        }

        .tab:hover {
            opacity: 0.8;
            background: transparent;
        }

        .tab.active {
            opacity: 1;
            border-bottom-color: var(--vscode-focusBorder);
        }

        .tab-content {
            display: none;
        }

        .tab-content.active {
            display: block;
        }

        .history-version-select {
            margin-bottom: 16px;
        }

        .history-detail {
            margin-top: 16px;
        }

        .history-detail-section {
            margin-bottom: 16px;
            background: var(--vscode-editor-background);
            border: 1px solid var(--vscode-panel-border);
            border-radius: 3px;
        }

        .history-detail-label {
            font-size: 10px;
            font-weight: 600;
            text-transform: uppercase;
            color: var(--vscode-descriptionForeground);
            margin-bottom: 6px;
        }

        .history-detail-content {
            font-size: 12px;
            white-space: pre-wrap;
            word-wrap: break-word;
            line-height: 1.5;
        }

        .collapsible-section {
            margin-bottom: 16px;
            background: var(--vscode-editor-background);
            border: 1px solid var(--vscode-panel-border);
            border-radius: 3px;
        }

        .collapsible-header {
            padding: 12px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            user-select: none;
        }

        .collapsible-header:hover {
            background: var(--vscode-list-hoverBackground);
        }

        .collapsible-content {
            padding: 0 12px 12px 12px;
            display: none;
        }

        .collapsible-content.expanded {
            display: block;
        }

        .collapse-icon {
            font-size: 12px;
            transition: transform 0.2s;
        }

        .collapse-icon.expanded {
            transform: rotate(90deg);
        }

        .header-controls {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .icon-button {
            background: transparent;
            border: 1px solid var(--vscode-button-border);
            padding: 6px;
            font-size: 14px;
            cursor: pointer;
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            width: 28px;
            height: 28px;
            transition: all 0.2s;
        }

        .icon-button:hover {
            background: var(--vscode-button-hoverBackground);
        }

        .icon-button.success {
            background: var(--vscode-button-background);
            border-color: var(--vscode-button-background);
        }

        @keyframes buttonSuccess {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
            100% {
                transform: scale(1);
            }
        }

        .icon-button.success {
            animation: buttonSuccess 0.3s ease-in-out;
        }

        .file-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .file-item {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px;
            background-color: var(--vscode-editor-background);
            border: 1px solid var(--vscode-panel-border);
            border-radius: 3px;
            font-size: 12px;
        }

        .file-item.current-file {
            background-color: var(--vscode-list-hoverBackground);
        }

        .file-item.draggable {
            cursor: move;
        }

        .file-item.dragging {
            opacity: 0.5;
        }

        .file-item.drag-over {
            border-top: 2px solid var(--vscode-focusBorder);
        }

        .file-icon {
            font-size: 14px;
            flex-shrink: 0;
        }

        .drag-handle {
            cursor: move;
            opacity: 0.5;
            flex-shrink: 0;
        }

        .file-item:hover .drag-handle {
            opacity: 1;
        }

        .file-name {
            flex: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .file-badge {
            font-size: 10px;
            padding: 2px 6px;
            background-color: var(--vscode-badge-background);
            color: var(--vscode-badge-foreground);
            border-radius: 2px;
            flex-shrink: 0;
        }

        .file-remove {
            background: transparent;
            border: none;
            color: var(--vscode-errorForeground);
            cursor: pointer;
            padding: 2px 4px;
            font-size: 14px;
            width: auto;
            margin: 0;
            flex-shrink: 0;
        }

        .file-remove:hover {
            background: var(--vscode-inputValidation-errorBackground);
        }
    </style>
</head>
<body>
    <div class="section">
        <div class="title-row">
            <div class="section-title">\u{1F4C1} System Prompt Files</div>
            <button class="config-button" onclick="addFiles()">\u2795 Add Files</button>
        </div>
        <div class="section-title" style="margin-top: 12px;">Current File</div>
        <select id="currentFileSelect" onchange="selectCurrentFile()">
            <option value="">Loading open files...</option>
        </select>
        <div class="help-text">Select which open file to use as the primary system prompt</div>
        
        <div id="additionalFilesSection" style="margin-top: 16px; display: none;">
            <div class="section-title">Additional Files</div>
            <div class="file-list" id="additionalFilesList"></div>
            <div class="help-text">Drag to reorder. Files are combined in order shown.</div>
        </div>
    </div>

    <div class="divider"></div>

    <!-- Tabs -->
    <div class="tabs">
        <button class="tab active" onclick="switchTab('prompt')">\u{1F4AC} Prompt</button>
        <button class="tab" onclick="switchTab('history')">\u{1F4DC} History</button>
    </div>

    <!-- Prompt Tab -->
    <div id="promptTab" class="tab-content active">
        <div class="section">
            <div class="title-row">
                <div class="section-title">\u{1F916} Model</div>
                <button class="config-button" onclick="openConfigModal()">\u2699\uFE0F Configure</button>
            </div>
        <div id="noModelsWarning" class="no-models" style="display: none;">
            No API keys configured. Click Configure to add API keys.
        </div>
        <select id="modelSelect">
            <option value="">Loading models...</option>
        </select>
    </div>

    <div class="section">
        <div class="section-title">\u{1F4AC} Prompt</div>
        <textarea id="promptInput" placeholder="Enter your prompt or instruction..."></textarea>
        <div class="help-text">The file content will be used as the system prompt</div>
    </div>

        <button id="runButton" onclick="runPrompt()">\u25B6 Run Prompt</button>

        <div id="loadingIndicator" class="loading" style="display: none;">
            \u23F3 Running prompt...
        </div>

        <div class="response-container" id="responseContainer">
            <div class="response-header">\u{1F4E4} Response</div>
            <div class="response-meta" id="responseMeta"></div>
            <div class="response-content" id="responseContent"></div>
        </div>
    </div>

    <!-- History Tab -->
    <div id="historyTab" class="tab-content">
        <div class="section">
            <div class="title-row">
                <div class="section-title">\u{1F4DC} Select Version</div>
                <button class="config-button" onclick="clearFileHistory()">\u{1F5D1}\uFE0F Clear All</button>
            </div>
            <select id="historyVersionSelect" onchange="loadHistoryVersion(this.value)">
                <option value="">Select a saved version...</option>
            </select>
        </div>

        <div id="historyDetail" class="history-detail" style="display: none;">
            <div class="history-detail-section">
                <div class="history-detail-label">\u{1F4C5} Date & Time</div>
                <div class="history-detail-content" id="historyDate"></div>
            </div>

            <div class="history-detail-section">
                <div class="history-detail-label">\u{1F916} Model</div>
                <div class="history-detail-content" id="historyModel"></div>
            </div>

            <div class="history-detail-section">
                <div class="history-detail-label">\u{1F4C1} File</div>
                <div class="history-detail-content" id="historyFile"></div>
            </div>

            <div class="collapsible-section">
                <div class="collapsible-header">
                    <div class="history-detail-label" onclick="toggleCollapse('systemPrompt')" style="flex: 1; cursor: pointer;">\u2699\uFE0F System Prompt</div>
                    <div class="header-controls">
                        <button class="icon-button" id="openSystemPromptBtn" onclick="event.stopPropagation(); openInNewTab('historySystemPrompt', 'System Prompt', 'openSystemPromptBtn')" title="Open in new tab">\u{1F4C4}</button>
                        <button class="icon-button" id="copySystemPromptBtn" onclick="event.stopPropagation(); copyToClipboard('historySystemPrompt', 'copySystemPromptBtn')" title="Copy to clipboard">\u{1F4CB}</button>
                        <span class="collapse-icon" id="systemPromptIcon" onclick="toggleCollapse('systemPrompt')">\u25B6</span>
                    </div>
                </div>
                <div class="collapsible-content" id="systemPromptContent">
                    <div class="history-detail-content" id="historySystemPrompt" style="font-style: italic;"></div>
                </div>
            </div>

            <div class="collapsible-section">
                <div class="collapsible-header">
                    <div class="history-detail-label" onclick="toggleCollapse('userPrompt')" style="flex: 1; cursor: pointer;">\u{1F4AC} User Prompt</div>
                    <div class="header-controls">
                        <button class="icon-button" id="openUserPromptBtn" onclick="event.stopPropagation(); openInNewTab('historyPrompt', 'User Prompt', 'openUserPromptBtn')" title="Open in new tab">\u{1F4C4}</button>
                        <button class="icon-button" id="copyUserPromptBtn" onclick="event.stopPropagation(); copyToClipboard('historyPrompt', 'copyUserPromptBtn')" title="Copy to clipboard">\u{1F4CB}</button>
                        <span class="collapse-icon" id="userPromptIcon" onclick="toggleCollapse('userPrompt')">\u25B6</span>
                    </div>
                </div>
                <div class="collapsible-content" id="userPromptContent">
                    <div class="history-detail-content" id="historyPrompt"></div>
                </div>
            </div>

            <div class="collapsible-section">
                <div class="collapsible-header">
                    <div class="history-detail-label" onclick="toggleCollapse('historyResponse')" style="flex: 1; cursor: pointer;">\u{1F4E4} Response</div>
                    <div class="header-controls">
                        <button class="icon-button" id="openResponseBtn" onclick="event.stopPropagation(); openInNewTab('historyResponse', 'Response', 'openResponseBtn')" title="Open in new tab">\u{1F4C4}</button>
                        <button class="icon-button" id="copyResponseBtn" onclick="event.stopPropagation(); copyToClipboard('historyResponse', 'copyResponseBtn')" title="Copy to clipboard">\u{1F4CB}</button>
                        <span class="collapse-icon" id="historyResponseIcon" onclick="toggleCollapse('historyResponse')">\u25B6</span>
                    </div>
                </div>
                <div class="collapsible-content" id="historyResponseContent">
                    <div class="history-detail-content" id="historyResponse"></div>
                </div>
            </div>

            <button onclick="loadHistoryIntoPrompt()">\u21A9\uFE0F Load Into Prompt Tab</button>
        </div>

        <div id="noHistoryMessage" style="text-align: center; padding: 40px; opacity: 0.5;">
            No history available for this file. Run a prompt to create history.
        </div>
    </div>

    <!-- Configuration Modal -->
    <div id="configModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">\u{1F511} Configure API Keys</div>
            
            <div class="modal-section">
                <label class="modal-label">OpenAI API Key</label>
                <input type="password" class="modal-input" id="openaiKeyInput" placeholder="sk-...">
                <div class="modal-help">Get your API key from platform.openai.com</div>
            </div>

            <div class="modal-section">
                <label class="modal-label">Anthropic API Key</label>
                <input type="password" class="modal-input" id="anthropicKeyInput" placeholder="sk-ant-...">
                <div class="modal-help">Get your API key from console.anthropic.com</div>
            </div>

            <div class="modal-section">
                <label class="modal-label">Google AI API Key</label>
                <input type="password" class="modal-input" id="googleKeyInput" placeholder="AI...">
                <div class="modal-help">Get your API key from makersuite.google.com</div>
            </div>

            <div class="modal-buttons">
                <button class="cancel-button" onclick="closeConfigModal()">Cancel</button>
                <button onclick="saveApiKeys()">\u{1F4BE} Save Keys</button>
            </div>
        </div>
    </div>

    <!-- Clear History Confirmation Modal -->
    <div id="clearHistoryModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">\u26A0\uFE0F Clear History</div>
            
            <div class="modal-section">
                <p style="margin-bottom: 12px;">Are you sure you want to clear all history for this file?</p>
                <p style="font-size: 11px; color: var(--vscode-descriptionForeground); font-style: italic;">This action cannot be undone.</p>
            </div>

            <div class="modal-buttons">
                <button class="cancel-button" onclick="closeClearHistoryModal()">Cancel</button>
                <button onclick="confirmClearHistory()" style="background-color: var(--vscode-errorForeground); color: var(--vscode-button-foreground);">\u{1F5D1}\uFE0F Clear All</button>
            </div>
        </div>
    </div>

    <script>
        const vscode = acquireVsCodeApi();

        // All state variables declared upfront
        let currentFileContent = '';
        let currentFilePath = '';
        let availableModels = [];
        let historyEntries = [];
        let selectedHistoryEntry = null;
        let additionalFiles = [];
        let openFiles = [];

        // Restore previous state
        const previousState = vscode.getState() || {};
        
        // Request initial data
        vscode.postMessage({ type: 'getCurrentFile' });
        vscode.postMessage({ type: 'getAvailableModels' });

        // Single consolidated message handler for all extension messages
        window.addEventListener('message', event => {
            const message = event.data;

            switch (message.type) {
                case 'currentFile':
                    currentFileContent = message.content;
                    currentFilePath = message.filePath;
                    // Update dropdown selection
                    const fileSelect = document.getElementById('currentFileSelect');
                    if (fileSelect) {
                        fileSelect.value = message.filePath;
                    }
                    break;

                case 'availableModels':
                    availableModels = message.models;
                    updateModelSelect(message.models);
                    break;

                case 'loading':
                    const loadingIndicator = document.getElementById('loadingIndicator');
                    const runBtn = document.getElementById('runButton');
                    if (message.loading) {
                        loadingIndicator.style.display = 'block';
                        runBtn.disabled = true;
                        document.getElementById('responseContainer').classList.remove('visible');
                    } else {
                        loadingIndicator.style.display = 'none';
                        runBtn.disabled = false;
                    }
                    break;

                case 'response':
                    displayResponse(message.response);
                    break;

                case 'error':
                    displayError(message.error);
                    break;

                case 'history':
                    historyEntries = message.entries;
                    populateHistoryDropdown(message.entries);
                    break;

                case 'openFiles':
                    openFiles = message.files;
                    populateCurrentFileSelect(message.files);
                    break;

                case 'filesAdded':
                    handleFilesAdded(message.files);
                    break;

                case 'apiKeys':
                    document.getElementById('openaiKeyInput').value = message.keys.openai || '';
                    document.getElementById('anthropicKeyInput').value = message.keys.anthropic || '';
                    document.getElementById('googleKeyInput').value = message.keys.google || '';
                    break;

                case 'apiKeysSaved':
                    if (message.success) {
                        closeConfigModal();
                        vscode.postMessage({ type: 'getAvailableModels' });
                    }
                    break;
            }
        });

        function updateModelSelect(models) {
            const select = document.getElementById('modelSelect');
            const noModelsWarning = document.getElementById('noModelsWarning');
            
            if (models.length === 0) {
                select.innerHTML = '<option value="">No models available</option>';
                select.disabled = true;
                noModelsWarning.style.display = 'block';
                document.getElementById('runButton').disabled = true;
            } else {
                select.innerHTML = models.map(m => 
                    \`<option value="\${m.provider}:\${m.model}">\${m.label}</option>\`
                ).join('');
                select.disabled = false;
                noModelsWarning.style.display = 'none';
                document.getElementById('runButton').disabled = false;
                
                // Restore previously selected model if available
                if (previousState.selectedModel) {
                    select.value = previousState.selectedModel;
                }
            }
            
            // Save state when model changes
            select.addEventListener('change', saveState);
        }

        // Restore prompt text if available
        const promptInput = document.getElementById('promptInput');
        if (previousState.promptText) {
            promptInput.value = previousState.promptText;
        }
        
        // Save state when prompt changes
        promptInput.addEventListener('input', saveState);

        function saveState() {
            const modelSelect = document.getElementById('modelSelect');
            const promptInput = document.getElementById('promptInput');
            
            vscode.setState({
                selectedModel: modelSelect.value,
                promptText: promptInput.value
            });
        }

        function runPrompt() {
            const modelValue = document.getElementById('modelSelect').value;
            const promptInput = document.getElementById('promptInput').value;
            
            if (!modelValue) {
                // Show error in UI instead of alert
                displayError('Please select a model');
                return;
            }
            
            if (!promptInput.trim()) {
                displayError('Please enter a prompt');
                return;
            }
            
            const [provider, model] = modelValue.split(':');
            
            // Get file name from path
            const fileName = currentFilePath.split('/').pop() || currentFilePath.split('\\\\').pop() || 'unknown';
            
            // Combine current file with additional files in order
            let combinedSystemPrompt = '';
            
            // Add current file first
            if (currentFileContent) {
                const currentFileName = currentFilePath.split('/').pop() || currentFilePath.split('\\\\').pop() || 'File';
                combinedSystemPrompt += \`# \${currentFileName}\\n\\n\${currentFileContent}\`;
            }
            
            // Add additional files in order
            additionalFiles.forEach(file => {
                if (combinedSystemPrompt) {
                    combinedSystemPrompt += '\\n\\n';
                }
                combinedSystemPrompt += \`# \${file.fileName}\\n\\n\${file.content}\`;
            });
            
            const systemPrompt = combinedSystemPrompt || undefined;
            
            // Send message to extension
            vscode.postMessage({
                type: 'runPrompt',
                provider: provider,
                model: model,
                prompt: promptInput,
                userPrompt: promptInput,
                systemPrompt: systemPrompt,
                filePath: currentFilePath,
                fileName: fileName
            });
        }

        function displayResponse(response) {
            const container = document.getElementById('responseContainer');
            const meta = document.getElementById('responseMeta');
            const content = document.getElementById('responseContent');
            
            container.classList.add('visible');
            
            if (response.error) {
                content.innerHTML = \`<div class="error">\u274C \${response.error}</div>\`;
                meta.textContent = '';
            } else {
                content.textContent = response.content;
                meta.textContent = \`\${response.provider} | \${response.model}\${response.tokensUsed ? ' | ' + response.tokensUsed + ' tokens' : ''}\`;
            }
        }

        function displayError(error) {
            const container = document.getElementById('responseContainer');
            const content = document.getElementById('responseContent');
            
            container.classList.add('visible');
            content.innerHTML = \`<div class="error">\u274C Error: \${error}</div>\`;
            document.getElementById('responseMeta').textContent = '';
        }

        // Configuration Modal Functions
        function openConfigModal() {
            // Request current API keys - response handled in main message handler
            vscode.postMessage({ type: 'getApiKeys' });
            document.getElementById('configModal').classList.add('visible');
        }

        function closeConfigModal() {
            document.getElementById('configModal').classList.remove('visible');
        }

        function saveApiKeys() {
            const keys = {
                openai: document.getElementById('openaiKeyInput').value,
                anthropic: document.getElementById('anthropicKeyInput').value,
                google: document.getElementById('googleKeyInput').value
            };

            vscode.postMessage({
                type: 'saveApiKeys',
                keys: keys
            });
            // Response handled in main message handler
        }

        // Tab Switching
        function switchTab(tabName) {
            // Update tab buttons
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');

            // Update tab contents
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            if (tabName === 'prompt') {
                document.getElementById('promptTab').classList.add('active');
            } else if (tabName === 'history') {
                document.getElementById('historyTab').classList.add('active');
                // Load history when switching to history tab, passing the current file path
                vscode.postMessage({ 
                    type: 'getHistory',
                    filePath: currentFilePath 
                });
            }
        }

        // History Tab Functions
        function clearFileHistory() {
            document.getElementById('clearHistoryModal').classList.add('visible');
        }

        function closeClearHistoryModal() {
            document.getElementById('clearHistoryModal').classList.remove('visible');
        }

        function confirmClearHistory() {
            vscode.postMessage({ type: 'clearHistory', filePath: currentFilePath });
            closeClearHistoryModal();
        }

        function populateHistoryDropdown(entries) {
            const select = document.getElementById('historyVersionSelect');
            const noHistoryMsg = document.getElementById('noHistoryMessage');
            const historyDetail = document.getElementById('historyDetail');

            if (entries.length === 0) {
                select.innerHTML = '<option value="">No history available</option>';
                select.disabled = true;
                noHistoryMsg.style.display = 'block';
                historyDetail.style.display = 'none';
                return;
            }

            select.disabled = false;
            noHistoryMsg.style.display = 'none';
            
            select.innerHTML = '<option value="">Select a saved version...</option>' + 
                entries.map((entry, index) => {
                    const date = new Date(entry.timestamp);
                    const timeStr = date.toLocaleString();
                    const promptPreview = entry.prompt.substring(0, 50).replace(/\\n/g, ' ');
                    return \`<option value="\${index}">\${timeStr} - \${entry.model} - \${promptPreview}...</option>\`;
                }).join('');
        }

        function loadHistoryVersion(index) {
            if (!index) {
                document.getElementById('historyDetail').style.display = 'none';
                return;
            }

            const entry = historyEntries[parseInt(index)];
            if (!entry) return;

            selectedHistoryEntry = entry;

            const date = new Date(entry.timestamp);
            
            document.getElementById('historyDate').textContent = date.toLocaleString();
            document.getElementById('historyModel').textContent = \`\${entry.provider} / \${entry.model}\${entry.tokensUsed ? ' (' + entry.tokensUsed + ' tokens)' : ''}\`;
            document.getElementById('historyFile').textContent = currentFilePath;
            document.getElementById('historySystemPrompt').textContent = entry.systemPrompt || '(None)';
            document.getElementById('historyPrompt').textContent = entry.prompt;
            document.getElementById('historyResponse').textContent = entry.response;

            document.getElementById('historyDetail').style.display = 'block';
        }

        function loadHistoryIntoPrompt() {
            if (!selectedHistoryEntry) return;

            // Load the prompt back into the prompt field
            document.getElementById('promptInput').value = selectedHistoryEntry.prompt;

            // Switch to prompt tab
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.tab')[0].classList.add('active');
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById('promptTab').classList.add('active');
        }

        // Collapsible section toggle
        function toggleCollapse(section) {
            const content = document.getElementById(section + 'Content');
            const icon = document.getElementById(section + 'Icon');
            
            if (content.classList.contains('expanded')) {
                content.classList.remove('expanded');
                icon.classList.remove('expanded');
            } else {
                content.classList.add('expanded');
                icon.classList.add('expanded');
            }
        }

        // Copy to clipboard function with animation
        function copyToClipboard(contentElementId, buttonId) {
            const element = document.getElementById(contentElementId);
            const button = document.getElementById(buttonId);
            
            if (!element || !button) return;
            
            const text = element.textContent;
            
            // Use the Clipboard API
            navigator.clipboard.writeText(text).then(() => {
                // Success animation
                const originalIcon = button.innerHTML;
                button.innerHTML = '\u2713';
                button.classList.add('success');
                
                // Reset after 2 seconds
                setTimeout(() => {
                    button.innerHTML = originalIcon;
                    button.classList.remove('success');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy:', err);
                button.innerHTML = '\u274C';
                setTimeout(() => {
                    button.innerHTML = '\u{1F4CB}';
                }, 2000);
            });
        }

        // Open content in new VS Code tab
        function openInNewTab(contentElementId, title, buttonId) {
            const element = document.getElementById(contentElementId);
            const button = document.getElementById(buttonId);
            
            if (!element || !button) return;
            
            const text = element.textContent;
            
            // Send message to extension to open new tab
            vscode.postMessage({
                type: 'openInNewTab',
                content: text,
                title: title
            });
            
            // Success animation
            const originalIcon = button.innerHTML;
            button.innerHTML = '\u2713';
            button.classList.add('success');
            
            // Reset after 1 second
            setTimeout(() => {
                button.innerHTML = originalIcon;
                button.classList.remove('success');
            }, 1000);
        }

        // Close modal when clicking outside
        document.addEventListener('click', (e) => {
            const configModal = document.getElementById('configModal');
            const clearHistoryModal = document.getElementById('clearHistoryModal');
            if (e.target === configModal) {
                closeConfigModal();
            }
            if (e.target === clearHistoryModal) {
                closeClearHistoryModal();
            }
        });

        // Multiple File Management - Request open files on load
        vscode.postMessage({ type: 'getOpenFiles' });

        function populateCurrentFileSelect(files) {
            const select = document.getElementById('currentFileSelect');
            
            if (!files || files.length === 0) {
                select.innerHTML = '<option value="">No files open</option>';
                select.disabled = true;
                return;
            }

            select.disabled = false;
            select.innerHTML = files.map(f => 
                \`<option value="\${f.filePath}">\${f.fileName}</option>\`
            ).join('');

            // Set to current file if available
            if (currentFilePath) {
                select.value = currentFilePath;
            }
        }

        function selectCurrentFile() {
            const select = document.getElementById('currentFileSelect');
            const filePath = select.value;
            
            if (filePath) {
                vscode.postMessage({ 
                    type: 'selectCurrentFile',
                    filePath: filePath
                });
                
                // If history tab is active, refresh it for the new file
                const historyTab = document.getElementById('historyTab');
                if (historyTab && historyTab.classList.contains('active')) {
                    // Small delay to ensure currentFilePath is updated
                    setTimeout(() => {
                        vscode.postMessage({ 
                            type: 'getHistory',
                            filePath: filePath 
                        });
                    }, 100);
                }
            }
        }

        function addFiles() {
            vscode.postMessage({ type: 'addFiles' });
        }

        function handleFilesAdded(files) {
            files.forEach(file => {
                additionalFiles.push(file);
            });
            renderAdditionalFiles();
        }

        function renderAdditionalFiles() {
            const container = document.getElementById('additionalFilesList');
            const section = document.getElementById('additionalFilesSection');
            
            if (additionalFiles.length === 0) {
                section.style.display = 'none';
                return;
            }
            
            section.style.display = 'block';
            container.innerHTML = additionalFiles.map((file, index) => \`
                <div class="file-item draggable" draggable="true" 
                     data-index="\${index}"
                     ondragstart="handleDragStart(event)"
                     ondragover="handleDragOver(event)"
                     ondrop="handleDrop(event)"
                     ondragend="handleDragEnd(event)">
                    <span class="drag-handle">\u283F</span>
                    <span class="file-icon">\u{1F4C4}</span>
                    <span class="file-name" title="\${file.filePath}">\${file.fileName}</span>
                    <button class="file-remove" onclick="removeFile(\${index})" title="Remove file">\xD7</button>
                </div>
            \`).join('');
        }

        function removeFile(index) {
            additionalFiles.splice(index, 1);
            renderAdditionalFiles();
        }

        // Drag and Drop Implementation
        let draggedIndex = null;

        function handleDragStart(e) {
            draggedIndex = parseInt(e.currentTarget.dataset.index);
            e.currentTarget.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
        }

        function handleDragOver(e) {
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.dataTransfer.dropEffect = 'move';
            return false;
        }

        function handleDrop(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            
            const dropIndex = parseInt(e.currentTarget.dataset.index);
            
            if (draggedIndex !== null && draggedIndex !== dropIndex) {
                const draggedFile = additionalFiles[draggedIndex];
                additionalFiles.splice(draggedIndex, 1);
                additionalFiles.splice(dropIndex, 0, draggedFile);
                renderAdditionalFiles();
            }
            
            return false;
        }

        function handleDragEnd(e) {
            e.currentTarget.classList.remove('dragging');
            draggedIndex = null;
        }
    </script>
</body>
</html>`}};var Ke=me(require("fs/promises")),Yl=me(require("path")),vo=class{constructor(e){this.context=e;this.historyPath=Yl.join(e.globalStorageUri.fsPath,"prompt-history.json"),this.ensureStorage()}historyPath;async ensureStorage(){try{await Ke.mkdir(this.context.globalStorageUri.fsPath,{recursive:!0});try{await Ke.access(this.historyPath)}catch{await Ke.writeFile(this.historyPath,JSON.stringify([],null,2))}}catch(e){console.error("Failed to create storage directory:",e)}}async addEntry(e,t,s,n,o,i,a){let l={id:Date.now().toString()+Math.random().toString(36).substr(2,9),timestamp:new Date,filePath:e,fileName:t,prompt:s,systemPrompt:n,provider:o,model:i,response:a.content,tokensUsed:a.tokensUsed,error:a.error},p=await this.loadHistory();return p.push(l),await this.saveHistory(p),l}async getHistoryForFile(e){return(await this.loadHistory()).filter(s=>s.filePath===e).sort((s,n)=>new Date(n.timestamp).getTime()-new Date(s.timestamp).getTime())}async getAllHistory(){return(await this.loadHistory()).sort((t,s)=>new Date(s.timestamp).getTime()-new Date(t.timestamp).getTime())}async getHistoryByFile(){let e=await this.loadHistory(),t=new Map;for(let s of e)t.has(s.filePath)||t.set(s.filePath,[]),t.get(s.filePath).push(s);for(let[,s]of t)s.sort((n,o)=>new Date(o.timestamp).getTime()-new Date(n.timestamp).getTime());return t}async deleteEntry(e){let s=(await this.loadHistory()).filter(n=>n.id!==e);await this.saveHistory(s)}async clearHistoryForFile(e){let s=(await this.loadHistory()).filter(n=>n.filePath!==e);await this.saveHistory(s)}async clearAllHistory(){await this.saveHistory([])}async loadHistory(){try{let e=await Ke.readFile(this.historyPath,"utf-8");return JSON.parse(e).map(s=>({...s,timestamp:new Date(s.timestamp)}))}catch(e){return console.error("Failed to load history:",e),[]}}async saveHistory(e){try{await Ke.writeFile(this.historyPath,JSON.stringify(e,null,2))}catch(t){throw console.error("Failed to save history:",t),t}}};function Nu(r){console.log("Prompt Studio extension activated");let e=new mo,t=new vo(r),s=new yo(e),n=new bo(r,e),o=new _o(r,s,n),i=new wo(r.extensionUri,e,t);r.subscriptions.push(Je.window.registerWebviewViewProvider("prompt-studio.sidebarView",i)),r.subscriptions.push(Je.window.onDidChangeActiveTextEditor(()=>{})),r.subscriptions.push(Je.commands.registerCommand("prompt-studio.runPrompt",async()=>{await o.showPromptPanel()})),r.subscriptions.push(Je.commands.registerCommand("prompt-studio.createTest",async()=>{await n.createTest()})),r.subscriptions.push(Je.commands.registerCommand("prompt-studio.runTests",async()=>{await n.runTests()})),r.subscriptions.push(Je.commands.registerCommand("prompt-studio.compareResults",async()=>{await n.compareResults()})),Je.window.showInformationMessage("Prompt Studio is ready!")}function Lu(){console.log("Prompt Studio extension deactivated")}0&&(module.exports={activate,deactivate});
/*! Bundled license information:

@google/generative-ai/dist/index.mjs:
@google/generative-ai/dist/index.mjs:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
