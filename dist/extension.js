"use strict";var Zl=Object.create;var on=Object.defineProperty;var ec=Object.getOwnPropertyDescriptor;var tc=Object.getOwnPropertyNames;var rc=Object.getPrototypeOf,sc=Object.prototype.hasOwnProperty;var nc=(s,e)=>{for(var t in e)on(s,t,{get:e[t],enumerable:!0})},Hi=(s,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of tc(e))!sc.call(s,n)&&n!==t&&on(s,n,{get:()=>e[n],enumerable:!(r=ec(e,n))||r.enumerable});return s};var me=(s,e,t)=>(t=s!=null?Zl(rc(s)):{},Hi(e||!s||!s.__esModule?on(t,"default",{value:s,enumerable:!0}):t,s)),oc=s=>Hi(on({},"__esModule",{value:!0}),s);var Du={};nc(Du,{activate:()=>Lu,deactivate:()=>Bu});module.exports=oc(Du);var Je=me(require("vscode"));var Vl=me(require("vscode"));function S(s,e,t,r,n){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?s!==e||!n:!e.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?n.call(s,t):n?n.value=t:e.set(s,t),t}function d(s,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?s!==e||!r:!e.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(s):r?r.value:e.get(s)}var Po=function(){let{crypto:s}=globalThis;if(s?.randomUUID)return Po=s.randomUUID.bind(s),s.randomUUID();let e=new Uint8Array(1),t=s?()=>s.getRandomValues(e)[0]:()=>Math.random()*255&255;return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,r=>(+r^t()&15>>+r/4).toString(16))};function ds(s){return typeof s=="object"&&s!==null&&("name"in s&&s.name==="AbortError"||"message"in s&&String(s.message).includes("FetchRequestCanceledException"))}var us=s=>{if(s instanceof Error)return s;if(typeof s=="object"&&s!==null){try{if(Object.prototype.toString.call(s)==="[object Error]"){let e=new Error(s.message,s.cause?{cause:s.cause}:{});return s.stack&&(e.stack=s.stack),s.cause&&!e.cause&&(e.cause=s.cause),s.name&&(e.name=s.name),e}}catch{}try{return new Error(JSON.stringify(s))}catch{}}return new Error(s)};var _=class extends Error{},q=class s extends _{constructor(e,t,r,n){super(`${s.makeMessage(e,t,r)}`),this.status=e,this.headers=n,this.requestID=n?.get("x-request-id"),this.error=t;let o=t;this.code=o?.code,this.param=o?.param,this.type=o?.type}static makeMessage(e,t,r){let n=t?.message?typeof t.message=="string"?t.message:JSON.stringify(t.message):t?JSON.stringify(t):r;return e&&n?`${e} ${n}`:e?`${e} status code (no body)`:n||"(no status code or body)"}static generate(e,t,r,n){if(!e||!n)return new Ge({message:r,cause:us(t)});let o=t?.error;return e===400?new zt(e,o,r,n):e===401?new Yt(e,o,r,n):e===403?new Qt(e,o,r,n):e===404?new Zt(e,o,r,n):e===409?new er(e,o,r,n):e===422?new tr(e,o,r,n):e===429?new rr(e,o,r,n):e>=500?new sr(e,o,r,n):new s(e,o,r,n)}},U=class extends q{constructor({message:e}={}){super(void 0,void 0,e||"Request was aborted.",void 0)}},Ge=class extends q{constructor({message:e,cause:t}){super(void 0,void 0,e||"Connection error.",void 0),t&&(this.cause=t)}},Ve=class extends Ge{constructor({message:e}={}){super({message:e??"Request timed out."})}},zt=class extends q{},Yt=class extends q{},Qt=class extends q{},Zt=class extends q{},er=class extends q{},tr=class extends q{},rr=class extends q{},sr=class extends q{},nr=class extends _{constructor(){super("Could not parse response content as the length limit was reached")}},or=class extends _{constructor(){super("Could not parse response content as the request was rejected by the content filter")}},we=class extends Error{constructor(e){super(e)}};var ac=/^[a-z][a-z0-9+.-]*:/i,Ui=s=>ac.test(s),se=s=>(se=Array.isArray,se(s)),Io=se;function So(s){return typeof s!="object"?{}:s??{}}function ji(s){if(!s)return!0;for(let e in s)return!1;return!0}function qi(s,e){return Object.prototype.hasOwnProperty.call(s,e)}function ps(s){return s!=null&&typeof s=="object"&&!Array.isArray(s)}var Wi=(s,e)=>{if(typeof e!="number"||!Number.isInteger(e))throw new _(`${s} must be an integer`);if(e<0)throw new _(`${s} must be a positive integer`);return e};var Ki=s=>{try{return JSON.parse(s)}catch{return}};var ve=s=>new Promise(e=>setTimeout(e,s));var Xe="6.9.1";var Xi=()=>typeof window<"u"&&typeof window.document<"u"&&typeof navigator<"u";function lc(){return typeof Deno<"u"&&Deno.build!=null?"deno":typeof EdgeRuntime<"u"?"edge":Object.prototype.toString.call(typeof globalThis.process<"u"?globalThis.process:0)==="[object process]"?"node":"unknown"}var cc=()=>{let s=lc();if(s==="deno")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Xe,"X-Stainless-OS":Gi(Deno.build.os),"X-Stainless-Arch":Ji(Deno.build.arch),"X-Stainless-Runtime":"deno","X-Stainless-Runtime-Version":typeof Deno.version=="string"?Deno.version:Deno.version?.deno??"unknown"};if(typeof EdgeRuntime<"u")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Xe,"X-Stainless-OS":"Unknown","X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":"edge","X-Stainless-Runtime-Version":globalThis.process.version};if(s==="node")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Xe,"X-Stainless-OS":Gi(globalThis.process.platform??"unknown"),"X-Stainless-Arch":Ji(globalThis.process.arch??"unknown"),"X-Stainless-Runtime":"node","X-Stainless-Runtime-Version":globalThis.process.version??"unknown"};let e=dc();return e?{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Xe,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":`browser:${e.browser}`,"X-Stainless-Runtime-Version":e.version}:{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Xe,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":"unknown","X-Stainless-Runtime-Version":"unknown"}};function dc(){if(typeof navigator>"u"||!navigator)return null;let s=[{key:"edge",pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"chrome",pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"firefox",pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"safari",pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}];for(let{key:e,pattern:t}of s){let r=t.exec(navigator.userAgent);if(r){let n=r[1]||0,o=r[2]||0,i=r[3]||0;return{browser:e,version:`${n}.${o}.${i}`}}}return null}var Ji=s=>s==="x32"?"x32":s==="x86_64"||s==="x64"?"x64":s==="arm"?"arm":s==="aarch64"||s==="arm64"?"arm64":s?`other:${s}`:"unknown",Gi=s=>(s=s.toLowerCase(),s.includes("ios")?"iOS":s==="android"?"Android":s==="darwin"?"MacOS":s==="win32"?"Windows":s==="freebsd"?"FreeBSD":s==="openbsd"?"OpenBSD":s==="linux"?"Linux":s?`Other:${s}`:"Unknown"),Vi,zi=()=>Vi??(Vi=cc());function Yi(){if(typeof fetch<"u")return fetch;throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new OpenAI({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")}function Ao(...s){let e=globalThis.ReadableStream;if(typeof e>"u")throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");return new e(...s)}function an(s){let e=Symbol.asyncIterator in s?s[Symbol.asyncIterator]():s[Symbol.iterator]();return Ao({start(){},async pull(t){let{done:r,value:n}=await e.next();r?t.close():t.enqueue(n)},async cancel(){await e.return?.()}})}function Eo(s){if(s[Symbol.asyncIterator])return s;let e=s.getReader();return{async next(){try{let t=await e.read();return t?.done&&e.releaseLock(),t}catch(t){throw e.releaseLock(),t}},async return(){let t=e.cancel();return e.releaseLock(),await t,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}async function Qi(s){if(s===null||typeof s!="object")return;if(s[Symbol.asyncIterator]){await s[Symbol.asyncIterator]().return?.();return}let e=s.getReader(),t=e.cancel();e.releaseLock(),await t}var Zi=({headers:s,body:e})=>({bodyHeaders:{"content-type":"application/json"},body:JSON.stringify(e)});var ln="RFC3986",Ro=s=>String(s),cn={RFC1738:s=>String(s).replace(/%20/g,"+"),RFC3986:Ro},ko="RFC1738";var dn=(s,e)=>(dn=Object.hasOwn??Function.prototype.call.bind(Object.prototype.hasOwnProperty),dn(s,e)),xe=(()=>{let s=[];for(let e=0;e<256;++e)s.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return s})();var Co=1024,ea=(s,e,t,r,n)=>{if(s.length===0)return s;let o=s;if(typeof s=="symbol"?o=Symbol.prototype.toString.call(s):typeof s!="string"&&(o=String(s)),t==="iso-8859-1")return escape(o).replace(/%u[0-9a-f]{4}/gi,function(a){return"%26%23"+parseInt(a.slice(2),16)+"%3B"});let i="";for(let a=0;a<o.length;a+=Co){let l=o.length>=Co?o.slice(a,a+Co):o,p=[];for(let b=0;b<l.length;++b){let h=l.charCodeAt(b);if(h===45||h===46||h===95||h===126||h>=48&&h<=57||h>=65&&h<=90||h>=97&&h<=122||n===ko&&(h===40||h===41)){p[p.length]=l.charAt(b);continue}if(h<128){p[p.length]=xe[h];continue}if(h<2048){p[p.length]=xe[192|h>>6]+xe[128|h&63];continue}if(h<55296||h>=57344){p[p.length]=xe[224|h>>12]+xe[128|h>>6&63]+xe[128|h&63];continue}b+=1,h=65536+((h&1023)<<10|l.charCodeAt(b)&1023),p[p.length]=xe[240|h>>18]+xe[128|h>>12&63]+xe[128|h>>6&63]+xe[128|h&63]}i+=p.join("")}return i};function ta(s){return!s||typeof s!="object"?!1:!!(s.constructor&&s.constructor.isBuffer&&s.constructor.isBuffer(s))}function To(s,e){if(se(s)){let t=[];for(let r=0;r<s.length;r+=1)t.push(e(s[r]));return t}return e(s)}var sa={brackets(s){return String(s)+"[]"},comma:"comma",indices(s,e){return String(s)+"["+e+"]"},repeat(s){return String(s)}},na=function(s,e){Array.prototype.push.apply(s,se(e)?e:[e])},ra,W={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:ea,encodeValuesOnly:!1,format:ln,formatter:Ro,indices:!1,serializeDate(s){return(ra??(ra=Function.prototype.call.bind(Date.prototype.toISOString)))(s)},skipNulls:!1,strictNullHandling:!1};function fc(s){return typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s=="symbol"||typeof s=="bigint"}var Mo={};function oa(s,e,t,r,n,o,i,a,l,p,b,h,g,c,x,P,O,k){let v=s,L=k,T=0,te=!1;for(;(L=L.get(Mo))!==void 0&&!te;){let H=L.get(s);if(T+=1,typeof H<"u"){if(H===T)throw new RangeError("Cyclic object value");te=!0}typeof L.get(Mo)>"u"&&(T=0)}if(typeof p=="function"?v=p(e,v):v instanceof Date?v=g?.(v):t==="comma"&&se(v)&&(v=To(v,function(H){return H instanceof Date?g?.(H):H})),v===null){if(o)return l&&!P?l(e,W.encoder,O,"key",c):e;v=""}if(fc(v)||ta(v)){if(l){let H=P?e:l(e,W.encoder,O,"key",c);return[x?.(H)+"="+x?.(l(v,W.encoder,O,"value",c))]}return[x?.(e)+"="+x?.(String(v))]}let re=[];if(typeof v>"u")return re;let M;if(t==="comma"&&se(v))P&&l&&(v=To(v,l)),M=[{value:v.length>0?v.join(",")||null:void 0}];else if(se(p))M=p;else{let H=Object.keys(v);M=b?H.sort(b):H}let G=a?String(e).replace(/\./g,"%2E"):String(e),V=r&&se(v)&&v.length===1?G+"[]":G;if(n&&se(v)&&v.length===0)return V+"[]";for(let H=0;H<M.length;++H){let j=M[H],Bi=typeof j=="object"&&typeof j.value<"u"?j.value:v[j];if(i&&Bi===null)continue;let xo=h&&a?j.replace(/\./g,"%2E"):j,Ql=se(v)?typeof t=="function"?t(V,xo):V:V+(h?"."+xo:"["+xo+"]");k.set(s,T);let Di=new WeakMap;Di.set(Mo,k),na(re,oa(Bi,Ql,t,r,n,o,i,a,t==="comma"&&P&&se(v)?null:l,p,b,h,g,c,x,P,O,Di))}return re}function hc(s=W){if(typeof s.allowEmptyArrays<"u"&&typeof s.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof s.encodeDotInKeys<"u"&&typeof s.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(s.encoder!==null&&typeof s.encoder<"u"&&typeof s.encoder!="function")throw new TypeError("Encoder has to be a function.");let e=s.charset||W.charset;if(typeof s.charset<"u"&&s.charset!=="utf-8"&&s.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");let t=ln;if(typeof s.format<"u"){if(!dn(cn,s.format))throw new TypeError("Unknown format option provided.");t=s.format}let r=cn[t],n=W.filter;(typeof s.filter=="function"||se(s.filter))&&(n=s.filter);let o;if(s.arrayFormat&&s.arrayFormat in sa?o=s.arrayFormat:"indices"in s?o=s.indices?"indices":"repeat":o=W.arrayFormat,"commaRoundTrip"in s&&typeof s.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");let i=typeof s.allowDots>"u"?s.encodeDotInKeys?!0:W.allowDots:!!s.allowDots;return{addQueryPrefix:typeof s.addQueryPrefix=="boolean"?s.addQueryPrefix:W.addQueryPrefix,allowDots:i,allowEmptyArrays:typeof s.allowEmptyArrays=="boolean"?!!s.allowEmptyArrays:W.allowEmptyArrays,arrayFormat:o,charset:e,charsetSentinel:typeof s.charsetSentinel=="boolean"?s.charsetSentinel:W.charsetSentinel,commaRoundTrip:!!s.commaRoundTrip,delimiter:typeof s.delimiter>"u"?W.delimiter:s.delimiter,encode:typeof s.encode=="boolean"?s.encode:W.encode,encodeDotInKeys:typeof s.encodeDotInKeys=="boolean"?s.encodeDotInKeys:W.encodeDotInKeys,encoder:typeof s.encoder=="function"?s.encoder:W.encoder,encodeValuesOnly:typeof s.encodeValuesOnly=="boolean"?s.encodeValuesOnly:W.encodeValuesOnly,filter:n,format:t,formatter:r,serializeDate:typeof s.serializeDate=="function"?s.serializeDate:W.serializeDate,skipNulls:typeof s.skipNulls=="boolean"?s.skipNulls:W.skipNulls,sort:typeof s.sort=="function"?s.sort:null,strictNullHandling:typeof s.strictNullHandling=="boolean"?s.strictNullHandling:W.strictNullHandling}}function Oo(s,e={}){let t=s,r=hc(e),n,o;typeof r.filter=="function"?(o=r.filter,t=o("",t)):se(r.filter)&&(o=r.filter,n=o);let i=[];if(typeof t!="object"||t===null)return"";let a=sa[r.arrayFormat],l=a==="comma"&&r.commaRoundTrip;n||(n=Object.keys(t)),r.sort&&n.sort(r.sort);let p=new WeakMap;for(let g=0;g<n.length;++g){let c=n[g];r.skipNulls&&t[c]===null||na(i,oa(t[c],c,a,l,r.allowEmptyArrays,r.strictNullHandling,r.skipNulls,r.encodeDotInKeys,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.format,r.formatter,r.encodeValuesOnly,r.charset,p))}let b=i.join(r.delimiter),h=r.addQueryPrefix===!0?"?":"";return r.charsetSentinel&&(r.charset==="iso-8859-1"?h+="utf8=%26%2310003%3B&":h+="utf8=%E2%9C%93&"),b.length>0?h+b:""}function la(s){let e=0;for(let n of s)e+=n.length;let t=new Uint8Array(e),r=0;for(let n of s)t.set(n,r),r+=n.length;return t}var ia;function ir(s){let e;return(ia??(e=new globalThis.TextEncoder,ia=e.encode.bind(e)))(s)}var aa;function Fo(s){let e;return(aa??(e=new globalThis.TextDecoder,aa=e.decode.bind(e)))(s)}var oe,ie,wt=class{constructor(){oe.set(this,void 0),ie.set(this,void 0),S(this,oe,new Uint8Array,"f"),S(this,ie,null,"f")}decode(e){if(e==null)return[];let t=e instanceof ArrayBuffer?new Uint8Array(e):typeof e=="string"?ir(e):e;S(this,oe,la([d(this,oe,"f"),t]),"f");let r=[],n;for(;(n=gc(d(this,oe,"f"),d(this,ie,"f")))!=null;){if(n.carriage&&d(this,ie,"f")==null){S(this,ie,n.index,"f");continue}if(d(this,ie,"f")!=null&&(n.index!==d(this,ie,"f")+1||n.carriage)){r.push(Fo(d(this,oe,"f").subarray(0,d(this,ie,"f")-1))),S(this,oe,d(this,oe,"f").subarray(d(this,ie,"f")),"f"),S(this,ie,null,"f");continue}let o=d(this,ie,"f")!==null?n.preceding-1:n.preceding,i=Fo(d(this,oe,"f").subarray(0,o));r.push(i),S(this,oe,d(this,oe,"f").subarray(n.index),"f"),S(this,ie,null,"f")}return r}flush(){return d(this,oe,"f").length?this.decode(`
`):[]}};oe=new WeakMap,ie=new WeakMap;wt.NEWLINE_CHARS=new Set([`
`,"\r"]);wt.NEWLINE_REGEXP=/\r\n|[\n\r]/g;function gc(s,e){for(let n=e??0;n<s.length;n++){if(s[n]===10)return{preceding:n,index:n+1,carriage:!1};if(s[n]===13)return{preceding:n,index:n+1,carriage:!0}}return null}function ca(s){for(let r=0;r<s.length-1;r++){if(s[r]===10&&s[r+1]===10||s[r]===13&&s[r+1]===13)return r+2;if(s[r]===13&&s[r+1]===10&&r+3<s.length&&s[r+2]===13&&s[r+3]===10)return r+4}return-1}var pn={off:0,error:200,warn:300,info:400,debug:500},$o=(s,e,t)=>{if(s){if(qi(pn,s))return s;B(t).warn(`${e} was set to ${JSON.stringify(s)}, expected one of ${JSON.stringify(Object.keys(pn))}`)}};function fs(){}function un(s,e,t){return!e||pn[s]>pn[t]?fs:e[s].bind(e)}var yc={error:fs,warn:fs,info:fs,debug:fs},da=new WeakMap;function B(s){let e=s.logger,t=s.logLevel??"off";if(!e)return yc;let r=da.get(e);if(r&&r[0]===t)return r[1];let n={error:un("error",e,t),warn:un("warn",e,t),info:un("info",e,t),debug:un("debug",e,t)};return da.set(e,[t,n]),n}var Ce=s=>(s.options&&(s.options={...s.options},delete s.options.headers),s.headers&&(s.headers=Object.fromEntries((s.headers instanceof Headers?[...s.headers]:Object.entries(s.headers)).map(([e,t])=>[e,e.toLowerCase()==="authorization"||e.toLowerCase()==="cookie"||e.toLowerCase()==="set-cookie"?"***":t]))),"retryOfRequestLogID"in s&&(s.retryOfRequestLogID&&(s.retryOf=s.retryOfRequestLogID),delete s.retryOfRequestLogID),s);var hs,Pe=class s{constructor(e,t,r){this.iterator=e,hs.set(this,void 0),this.controller=t,S(this,hs,r,"f")}static fromSSEResponse(e,t,r){let n=!1,o=r?B(r):console;async function*i(){if(n)throw new _("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");n=!0;let a=!1;try{for await(let l of bc(e,t))if(!a){if(l.data.startsWith("[DONE]")){a=!0;continue}if(l.event===null||!l.event.startsWith("thread.")){let p;try{p=JSON.parse(l.data)}catch(b){throw o.error("Could not parse message into JSON:",l.data),o.error("From chunk:",l.raw),b}if(p&&p.error)throw new q(void 0,p.error,void 0,e.headers);yield p}else{let p;try{p=JSON.parse(l.data)}catch(b){throw console.error("Could not parse message into JSON:",l.data),console.error("From chunk:",l.raw),b}if(l.event=="error")throw new q(void 0,p.error,p.message,void 0);yield{event:l.event,data:p}}}a=!0}catch(l){if(ds(l))return;throw l}finally{a||t.abort()}}return new s(i,t,r)}static fromReadableStream(e,t,r){let n=!1;async function*o(){let a=new wt,l=Eo(e);for await(let p of l)for(let b of a.decode(p))yield b;for(let p of a.flush())yield p}async function*i(){if(n)throw new _("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");n=!0;let a=!1;try{for await(let l of o())a||l&&(yield JSON.parse(l));a=!0}catch(l){if(ds(l))return;throw l}finally{a||t.abort()}}return new s(i,t,r)}[(hs=new WeakMap,Symbol.asyncIterator)](){return this.iterator()}tee(){let e=[],t=[],r=this.iterator(),n=o=>({next:()=>{if(o.length===0){let i=r.next();e.push(i),t.push(i)}return o.shift()}});return[new s(()=>n(e),this.controller,d(this,hs,"f")),new s(()=>n(t),this.controller,d(this,hs,"f"))]}toReadableStream(){let e=this,t;return Ao({async start(){t=e[Symbol.asyncIterator]()},async pull(r){try{let{value:n,done:o}=await t.next();if(o)return r.close();let i=ir(JSON.stringify(n)+`
`);r.enqueue(i)}catch(n){r.error(n)}},async cancel(){await t.return?.()}})}};async function*bc(s,e){if(!s.body)throw e.abort(),typeof globalThis.navigator<"u"&&globalThis.navigator.product==="ReactNative"?new _("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api"):new _("Attempted to iterate over a response with no body");let t=new No,r=new wt,n=Eo(s.body);for await(let o of _c(n))for(let i of r.decode(o)){let a=t.decode(i);a&&(yield a)}for(let o of r.flush()){let i=t.decode(o);i&&(yield i)}}async function*_c(s){let e=new Uint8Array;for await(let t of s){if(t==null)continue;let r=t instanceof ArrayBuffer?new Uint8Array(t):typeof t=="string"?ir(t):t,n=new Uint8Array(e.length+r.length);n.set(e),n.set(r,e.length),e=n;let o;for(;(o=ca(e))!==-1;)yield e.slice(0,o),e=e.slice(o)}e.length>0&&(yield e)}var No=class{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(e){if(e.endsWith("\r")&&(e=e.substring(0,e.length-1)),!e){if(!this.event&&!this.data.length)return null;let o={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],o}if(this.chunks.push(e),e.startsWith(":"))return null;let[t,r,n]=wc(e,":");return n.startsWith(" ")&&(n=n.substring(1)),t==="event"?this.event=n:t==="data"&&this.data.push(n),null}};function wc(s,e){let t=s.indexOf(e);return t!==-1?[s.substring(0,t),e,s.substring(t+e.length)]:[s,"",""]}async function fn(s,e){let{response:t,requestLogID:r,retryOfRequestLogID:n,startTime:o}=e,i=await(async()=>{if(e.options.stream)return B(s).debug("response",t.status,t.url,t.headers,t.body),e.options.__streamClass?e.options.__streamClass.fromSSEResponse(t,e.controller,s):Pe.fromSSEResponse(t,e.controller,s);if(t.status===204)return null;if(e.options.__binaryResponse)return t;let l=t.headers.get("content-type")?.split(";")[0]?.trim();if(l?.includes("application/json")||l?.endsWith("+json")){let h=await t.json();return Lo(h,t)}return await t.text()})();return B(s).debug(`[${r}] response parsed`,Ce({retryOfRequestLogID:n,url:t.url,status:t.status,body:i,durationMs:Date.now()-o})),i}function Lo(s,e){return!s||typeof s!="object"||Array.isArray(s)?s:Object.defineProperty(s,"_request_id",{value:e.headers.get("x-request-id"),enumerable:!1})}var ms,vt=class s extends Promise{constructor(e,t,r=fn){super(n=>{n(null)}),this.responsePromise=t,this.parseResponse=r,ms.set(this,void 0),S(this,ms,e,"f")}_thenUnwrap(e){return new s(d(this,ms,"f"),this.responsePromise,async(t,r)=>Lo(e(await this.parseResponse(t,r),r),r.response))}asResponse(){return this.responsePromise.then(e=>e.response)}async withResponse(){let[e,t]=await Promise.all([this.parse(),this.asResponse()]);return{data:e,response:t,request_id:t.headers.get("x-request-id")}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(e=>this.parseResponse(d(this,ms,"f"),e))),this.parsedPromise}then(e,t){return this.parse().then(e,t)}catch(e){return this.parse().catch(e)}finally(e){return this.parse().finally(e)}};ms=new WeakMap;var hn,gs=class{constructor(e,t,r,n){hn.set(this,void 0),S(this,hn,e,"f"),this.options=n,this.response=t,this.body=r}hasNextPage(){return this.getPaginatedItems().length?this.nextPageRequestOptions()!=null:!1}async getNextPage(){let e=this.nextPageRequestOptions();if(!e)throw new _("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");return await d(this,hn,"f").requestAPIList(this.constructor,e)}async*iterPages(){let e=this;for(yield e;e.hasNextPage();)e=await e.getNextPage(),yield e}async*[(hn=new WeakMap,Symbol.asyncIterator)](){for await(let e of this.iterPages())for(let t of e.getPaginatedItems())yield t}},ys=class extends vt{constructor(e,t,r){super(e,t,async(n,o)=>new r(n,o.response,await fn(n,o),o.options))}async*[Symbol.asyncIterator](){let e=await this;for await(let t of e)yield t}},Ie=class extends gs{constructor(e,t,r,n){super(e,t,r,n),this.data=r.data||[],this.object=r.object}getPaginatedItems(){return this.data??[]}nextPageRequestOptions(){return null}},R=class extends gs{constructor(e,t,r,n){super(e,t,r,n),this.data=r.data||[],this.has_more=r.has_more||!1}getPaginatedItems(){return this.data??[]}hasNextPage(){return this.has_more===!1?!1:super.hasNextPage()}nextPageRequestOptions(){let e=this.getPaginatedItems(),t=e[e.length-1]?.id;return t?{...this.options,query:{...So(this.options.query),after:t}}:null}},Te=class extends gs{constructor(e,t,r,n){super(e,t,r,n),this.data=r.data||[],this.has_more=r.has_more||!1,this.last_id=r.last_id||""}getPaginatedItems(){return this.data??[]}hasNextPage(){return this.has_more===!1?!1:super.hasNextPage()}nextPageRequestOptions(){let e=this.last_id;return e?{...this.options,query:{...So(this.options.query),after:e}}:null}};var Ho=()=>{if(typeof File>"u"){let{process:s}=globalThis,e=typeof s?.versions?.node=="string"&&parseInt(s.versions.node.split("."))<20;throw new Error("`File` is not defined as a global, which is required for file uploads."+(e?" Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`.":""))}};function ar(s,e,t){return Ho(),new File(s,e??"unknown_file",t)}function bs(s){return(typeof s=="object"&&s!==null&&("name"in s&&s.name&&String(s.name)||"url"in s&&s.url&&String(s.url)||"filename"in s&&s.filename&&String(s.filename)||"path"in s&&s.path&&String(s.path))||"").split(/[\\/]/).pop()||void 0}var mn=s=>s!=null&&typeof s=="object"&&typeof s[Symbol.asyncIterator]=="function",Uo=async(s,e)=>Bo(s.body)?{...s,body:await pa(s.body,e)}:s,ae=async(s,e)=>({...s,body:await pa(s.body,e)}),ua=new WeakMap;function xc(s){let e=typeof s=="function"?s:s.fetch,t=ua.get(e);if(t)return t;let r=(async()=>{try{let n="Response"in e?e.Response:(await e("data:,")).constructor,o=new FormData;return o.toString()!==await new n(o).text()}catch{return!0}})();return ua.set(e,r),r}var pa=async(s,e)=>{if(!await xc(e))throw new TypeError("The provided fetch function does not support file uploads with the current global FormData class.");let t=new FormData;return await Promise.all(Object.entries(s||{}).map(([r,n])=>Do(t,r,n))),t},fa=s=>s instanceof Blob&&"name"in s,Pc=s=>typeof s=="object"&&s!==null&&(s instanceof Response||mn(s)||fa(s)),Bo=s=>{if(Pc(s))return!0;if(Array.isArray(s))return s.some(Bo);if(s&&typeof s=="object"){for(let e in s)if(Bo(s[e]))return!0}return!1},Do=async(s,e,t)=>{if(t!==void 0){if(t==null)throw new TypeError(`Received null for "${e}"; to pass null in FormData, you must use the string 'null'`);if(typeof t=="string"||typeof t=="number"||typeof t=="boolean")s.append(e,String(t));else if(t instanceof Response)s.append(e,ar([await t.blob()],bs(t)));else if(mn(t))s.append(e,ar([await new Response(an(t)).blob()],bs(t)));else if(fa(t))s.append(e,t,bs(t));else if(Array.isArray(t))await Promise.all(t.map(r=>Do(s,e+"[]",r)));else if(typeof t=="object")await Promise.all(Object.entries(t).map(([r,n])=>Do(s,`${e}[${r}]`,n)));else throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${t} instead`)}};var ha=s=>s!=null&&typeof s=="object"&&typeof s.size=="number"&&typeof s.type=="string"&&typeof s.text=="function"&&typeof s.slice=="function"&&typeof s.arrayBuffer=="function",Ic=s=>s!=null&&typeof s=="object"&&typeof s.name=="string"&&typeof s.lastModified=="number"&&ha(s),Sc=s=>s!=null&&typeof s=="object"&&typeof s.url=="string"&&typeof s.blob=="function";async function gn(s,e,t){if(Ho(),s=await s,Ic(s))return s instanceof File?s:ar([await s.arrayBuffer()],s.name);if(Sc(s)){let n=await s.blob();return e||(e=new URL(s.url).pathname.split(/[\\/]/).pop()),ar(await jo(n),e,t)}let r=await jo(s);if(e||(e=bs(s)),!t?.type){let n=r.find(o=>typeof o=="object"&&"type"in o&&o.type);typeof n=="string"&&(t={...t,type:n})}return ar(r,e,t)}async function jo(s){let e=[];if(typeof s=="string"||ArrayBuffer.isView(s)||s instanceof ArrayBuffer)e.push(s);else if(ha(s))e.push(s instanceof Blob?s:await s.arrayBuffer());else if(mn(s))for await(let t of s)e.push(...await jo(t));else{let t=s?.constructor?.name;throw new Error(`Unexpected data type: ${typeof s}${t?`; constructor: ${t}`:""}${Ac(s)}`)}return e}function Ac(s){return typeof s!="object"||s===null?"":`; props: [${Object.getOwnPropertyNames(s).map(t=>`"${t}"`).join(", ")}]`}var m=class{constructor(e){this._client=e}};function ga(s){return s.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g,encodeURIComponent)}var ma=Object.freeze(Object.create(null)),Rc=(s=ga)=>function(t,...r){if(t.length===1)return t[0];let n=!1,o=[],i=t.reduce((b,h,g)=>{/[?#]/.test(h)&&(n=!0);let c=r[g],x=(n?encodeURIComponent:s)(""+c);return g!==r.length&&(c==null||typeof c=="object"&&c.toString===Object.getPrototypeOf(Object.getPrototypeOf(c.hasOwnProperty??ma)??ma)?.toString)&&(x=c+"",o.push({start:b.length+h.length,length:x.length,error:`Value of type ${Object.prototype.toString.call(c).slice(8,-1)} is not a valid path parameter`})),b+h+(g===r.length?"":x)},""),a=i.split(/[?#]/,1)[0],l=/(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi,p;for(;(p=l.exec(a))!==null;)o.push({start:p.index,length:p[0].length,error:`Value "${p[0]}" can't be safely passed as a path parameter`});if(o.sort((b,h)=>b.start-h.start),o.length>0){let b=0,h=o.reduce((g,c)=>{let x=" ".repeat(c.start-b),P="^".repeat(c.length);return b=c.start+c.length,g+x+P},"");throw new _(`Path parameters result in path with invalid segments:
${o.map(g=>g.error).join(`
`)}
${i}
${h}`)}return i},f=Rc(ga);var xt=class extends m{list(e,t={},r){return this._client.getAPIList(f`/chat/completions/${e}/messages`,R,{query:t,...r})}};function _s(s){return s!==void 0&&"function"in s&&s.function!==void 0}function ws(s){return s?.$brand==="auto-parseable-response-format"}function Pt(s){return s?.$brand==="auto-parseable-tool"}function ya(s,e){return!e||!qo(e)?{...s,choices:s.choices.map(t=>(_a(t.message.tool_calls),{...t,message:{...t.message,parsed:null,...t.message.tool_calls?{tool_calls:t.message.tool_calls}:void 0}}))}:vs(s,e)}function vs(s,e){let t=s.choices.map(r=>{if(r.finish_reason==="length")throw new nr;if(r.finish_reason==="content_filter")throw new or;return _a(r.message.tool_calls),{...r,message:{...r.message,...r.message.tool_calls?{tool_calls:r.message.tool_calls?.map(n=>Mc(e,n))??void 0}:void 0,parsed:r.message.content&&!r.message.refusal?Tc(e,r.message.content):null}}});return{...s,choices:t}}function Tc(s,e){return s.response_format?.type!=="json_schema"?null:s.response_format?.type==="json_schema"?"$parseRaw"in s.response_format?s.response_format.$parseRaw(e):JSON.parse(e):null}function Mc(s,e){let t=s.tools?.find(r=>_s(r)&&r.function?.name===e.function.name);return{...e,function:{...e.function,parsed_arguments:Pt(t)?t.$parseRaw(e.function.arguments):t?.function.strict?JSON.parse(e.function.arguments):null}}}function ba(s,e){if(!s||!("tools"in s)||!s.tools)return!1;let t=s.tools?.find(r=>_s(r)&&r.function?.name===e.function.name);return _s(t)&&(Pt(t)||t?.function.strict||!1)}function qo(s){return ws(s.response_format)?!0:s.tools?.some(e=>Pt(e)||e.type==="function"&&e.function.strict===!0)??!1}function _a(s){for(let e of s||[])if(e.type!=="function")throw new _(`Currently only \`function\` tool calls are supported; Received \`${e.type}\``)}function wa(s){for(let e of s??[]){if(e.type!=="function")throw new _(`Currently only \`function\` tool types support auto-parsing; Received \`${e.type}\``);if(e.function.strict!==!0)throw new _(`The \`${e.function.name}\` tool is not marked with \`strict: true\`. Only strict function tools can be auto-parsed`)}}var lr=s=>s?.role==="assistant",Wo=s=>s?.role==="tool";var Ko,yn,bn,xs,Ps,_n,Is,Me,Ss,wn,vn,cr,va,ze=class{constructor(){Ko.add(this),this.controller=new AbortController,yn.set(this,void 0),bn.set(this,()=>{}),xs.set(this,()=>{}),Ps.set(this,void 0),_n.set(this,()=>{}),Is.set(this,()=>{}),Me.set(this,{}),Ss.set(this,!1),wn.set(this,!1),vn.set(this,!1),cr.set(this,!1),S(this,yn,new Promise((e,t)=>{S(this,bn,e,"f"),S(this,xs,t,"f")}),"f"),S(this,Ps,new Promise((e,t)=>{S(this,_n,e,"f"),S(this,Is,t,"f")}),"f"),d(this,yn,"f").catch(()=>{}),d(this,Ps,"f").catch(()=>{})}_run(e){setTimeout(()=>{e().then(()=>{this._emitFinal(),this._emit("end")},d(this,Ko,"m",va).bind(this))},0)}_connected(){this.ended||(d(this,bn,"f").call(this),this._emit("connect"))}get ended(){return d(this,Ss,"f")}get errored(){return d(this,wn,"f")}get aborted(){return d(this,vn,"f")}abort(){this.controller.abort()}on(e,t){return(d(this,Me,"f")[e]||(d(this,Me,"f")[e]=[])).push({listener:t}),this}off(e,t){let r=d(this,Me,"f")[e];if(!r)return this;let n=r.findIndex(o=>o.listener===t);return n>=0&&r.splice(n,1),this}once(e,t){return(d(this,Me,"f")[e]||(d(this,Me,"f")[e]=[])).push({listener:t,once:!0}),this}emitted(e){return new Promise((t,r)=>{S(this,cr,!0,"f"),e!=="error"&&this.once("error",r),this.once(e,t)})}async done(){S(this,cr,!0,"f"),await d(this,Ps,"f")}_emit(e,...t){if(d(this,Ss,"f"))return;e==="end"&&(S(this,Ss,!0,"f"),d(this,_n,"f").call(this));let r=d(this,Me,"f")[e];if(r&&(d(this,Me,"f")[e]=r.filter(n=>!n.once),r.forEach(({listener:n})=>n(...t))),e==="abort"){let n=t[0];!d(this,cr,"f")&&!r?.length&&Promise.reject(n),d(this,xs,"f").call(this,n),d(this,Is,"f").call(this,n),this._emit("end");return}if(e==="error"){let n=t[0];!d(this,cr,"f")&&!r?.length&&Promise.reject(n),d(this,xs,"f").call(this,n),d(this,Is,"f").call(this,n),this._emit("end")}}_emitFinal(){}};yn=new WeakMap,bn=new WeakMap,xs=new WeakMap,Ps=new WeakMap,_n=new WeakMap,Is=new WeakMap,Me=new WeakMap,Ss=new WeakMap,wn=new WeakMap,vn=new WeakMap,cr=new WeakMap,Ko=new WeakSet,va=function(e){if(S(this,wn,!0,"f"),e instanceof Error&&e.name==="AbortError"&&(e=new U),e instanceof U)return S(this,vn,!0,"f"),this._emit("abort",e);if(e instanceof _)return this._emit("error",e);if(e instanceof Error){let t=new _(e.message);return t.cause=e,this._emit("error",t)}return this._emit("error",new _(String(e)))};function xa(s){return typeof s.parse=="function"}var ne,Jo,xn,Go,Vo,Xo,Pa,Ia,Oc=10,dr=class extends ze{constructor(){super(...arguments),ne.add(this),this._chatCompletions=[],this.messages=[]}_addChatCompletion(e){this._chatCompletions.push(e),this._emit("chatCompletion",e);let t=e.choices[0]?.message;return t&&this._addMessage(t),e}_addMessage(e,t=!0){if("content"in e||(e.content=null),this.messages.push(e),t){if(this._emit("message",e),Wo(e)&&e.content)this._emit("functionToolCallResult",e.content);else if(lr(e)&&e.tool_calls)for(let r of e.tool_calls)r.type==="function"&&this._emit("functionToolCall",r.function)}}async finalChatCompletion(){await this.done();let e=this._chatCompletions[this._chatCompletions.length-1];if(!e)throw new _("stream ended without producing a ChatCompletion");return e}async finalContent(){return await this.done(),d(this,ne,"m",Jo).call(this)}async finalMessage(){return await this.done(),d(this,ne,"m",xn).call(this)}async finalFunctionToolCall(){return await this.done(),d(this,ne,"m",Go).call(this)}async finalFunctionToolCallResult(){return await this.done(),d(this,ne,"m",Vo).call(this)}async totalUsage(){return await this.done(),d(this,ne,"m",Xo).call(this)}allChatCompletions(){return[...this._chatCompletions]}_emitFinal(){let e=this._chatCompletions[this._chatCompletions.length-1];e&&this._emit("finalChatCompletion",e);let t=d(this,ne,"m",xn).call(this);t&&this._emit("finalMessage",t);let r=d(this,ne,"m",Jo).call(this);r&&this._emit("finalContent",r);let n=d(this,ne,"m",Go).call(this);n&&this._emit("finalFunctionToolCall",n);let o=d(this,ne,"m",Vo).call(this);o!=null&&this._emit("finalFunctionToolCallResult",o),this._chatCompletions.some(i=>i.usage)&&this._emit("totalUsage",d(this,ne,"m",Xo).call(this))}async _createChatCompletion(e,t,r){let n=r?.signal;n&&(n.aborted&&this.controller.abort(),n.addEventListener("abort",()=>this.controller.abort())),d(this,ne,"m",Pa).call(this,t);let o=await e.chat.completions.create({...t,stream:!1},{...r,signal:this.controller.signal});return this._connected(),this._addChatCompletion(vs(o,t))}async _runChatCompletion(e,t,r){for(let n of t.messages)this._addMessage(n,!1);return await this._createChatCompletion(e,t,r)}async _runTools(e,t,r){let n="tool",{tool_choice:o="auto",stream:i,...a}=t,l=typeof o!="string"&&o.type==="function"&&o?.function?.name,{maxChatCompletions:p=Oc}=r||{},b=t.tools.map(c=>{if(Pt(c)){if(!c.$callback)throw new _("Tool given to `.runTools()` that does not have an associated function");return{type:"function",function:{function:c.$callback,name:c.function.name,description:c.function.description||"",parameters:c.function.parameters,parse:c.$parseRaw,strict:!0}}}return c}),h={};for(let c of b)c.type==="function"&&(h[c.function.name||c.function.function.name]=c.function);let g="tools"in t?b.map(c=>c.type==="function"?{type:"function",function:{name:c.function.name||c.function.function.name,parameters:c.function.parameters,description:c.function.description,strict:c.function.strict}}:c):void 0;for(let c of t.messages)this._addMessage(c,!1);for(let c=0;c<p;++c){let P=(await this._createChatCompletion(e,{...a,tool_choice:o,tools:g,messages:[...this.messages]},r)).choices[0]?.message;if(!P)throw new _("missing message in ChatCompletion response");if(!P.tool_calls?.length)return;for(let O of P.tool_calls){if(O.type!=="function")continue;let k=O.id,{name:v,arguments:L}=O.function,T=h[v];if(T){if(l&&l!==v){let G=`Invalid tool_call: ${JSON.stringify(v)}. ${JSON.stringify(l)} requested. Please try again`;this._addMessage({role:n,tool_call_id:k,content:G});continue}}else{let G=`Invalid tool_call: ${JSON.stringify(v)}. Available options are: ${Object.keys(h).map(V=>JSON.stringify(V)).join(", ")}. Please try again`;this._addMessage({role:n,tool_call_id:k,content:G});continue}let te;try{te=xa(T)?await T.parse(L):L}catch(G){let V=G instanceof Error?G.message:String(G);this._addMessage({role:n,tool_call_id:k,content:V});continue}let re=await T.function(te,this),M=d(this,ne,"m",Ia).call(this,re);if(this._addMessage({role:n,tool_call_id:k,content:M}),l)return}}}};ne=new WeakSet,Jo=function(){return d(this,ne,"m",xn).call(this).content??null},xn=function(){let e=this.messages.length;for(;e-- >0;){let t=this.messages[e];if(lr(t))return{...t,content:t.content??null,refusal:t.refusal??null}}throw new _("stream ended without producing a ChatCompletionMessage with role=assistant")},Go=function(){for(let e=this.messages.length-1;e>=0;e--){let t=this.messages[e];if(lr(t)&&t?.tool_calls?.length)return t.tool_calls.filter(r=>r.type==="function").at(-1)?.function}},Vo=function(){for(let e=this.messages.length-1;e>=0;e--){let t=this.messages[e];if(Wo(t)&&t.content!=null&&typeof t.content=="string"&&this.messages.some(r=>r.role==="assistant"&&r.tool_calls?.some(n=>n.type==="function"&&n.id===t.tool_call_id)))return t.content}},Xo=function(){let e={completion_tokens:0,prompt_tokens:0,total_tokens:0};for(let{usage:t}of this._chatCompletions)t&&(e.completion_tokens+=t.completion_tokens,e.prompt_tokens+=t.prompt_tokens,e.total_tokens+=t.total_tokens);return e},Pa=function(e){if(e.n!=null&&e.n>1)throw new _("ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.")},Ia=function(e){return typeof e=="string"?e:e===void 0?"undefined":JSON.stringify(e)};var As=class s extends dr{static runTools(e,t,r){let n=new s,o={...r,headers:{...r?.headers,"X-Stainless-Helper-Method":"runTools"}};return n._run(()=>n._runTools(e,t,o)),n}_addMessage(e,t=!0){super._addMessage(e,t),lr(e)&&e.content&&this._emit("content",e.content)}};var X={STR:1,NUM:2,ARR:4,OBJ:8,NULL:16,BOOL:32,NAN:64,INFINITY:128,MINUS_INFINITY:256,INF:384,SPECIAL:496,ATOM:499,COLLECTION:12,ALL:511},zo=class extends Error{},Yo=class extends Error{};function Fc(s,e=X.ALL){if(typeof s!="string")throw new TypeError(`expecting str, got ${typeof s}`);if(!s.trim())throw new Error(`${s} is empty`);return $c(s.trim(),e)}var $c=(s,e)=>{let t=s.length,r=0,n=g=>{throw new zo(`${g} at position ${r}`)},o=g=>{throw new Yo(`${g} at position ${r}`)},i=()=>(h(),r>=t&&n("Unexpected end of input"),s[r]==='"'?a():s[r]==="{"?l():s[r]==="["?p():s.substring(r,r+4)==="null"||X.NULL&e&&t-r<4&&"null".startsWith(s.substring(r))?(r+=4,null):s.substring(r,r+4)==="true"||X.BOOL&e&&t-r<4&&"true".startsWith(s.substring(r))?(r+=4,!0):s.substring(r,r+5)==="false"||X.BOOL&e&&t-r<5&&"false".startsWith(s.substring(r))?(r+=5,!1):s.substring(r,r+8)==="Infinity"||X.INFINITY&e&&t-r<8&&"Infinity".startsWith(s.substring(r))?(r+=8,1/0):s.substring(r,r+9)==="-Infinity"||X.MINUS_INFINITY&e&&1<t-r&&t-r<9&&"-Infinity".startsWith(s.substring(r))?(r+=9,-1/0):s.substring(r,r+3)==="NaN"||X.NAN&e&&t-r<3&&"NaN".startsWith(s.substring(r))?(r+=3,NaN):b()),a=()=>{let g=r,c=!1;for(r++;r<t&&(s[r]!=='"'||c&&s[r-1]==="\\");)c=s[r]==="\\"?!c:!1,r++;if(s.charAt(r)=='"')try{return JSON.parse(s.substring(g,++r-Number(c)))}catch(x){o(String(x))}else if(X.STR&e)try{return JSON.parse(s.substring(g,r-Number(c))+'"')}catch{return JSON.parse(s.substring(g,s.lastIndexOf("\\"))+'"')}n("Unterminated string literal")},l=()=>{r++,h();let g={};try{for(;s[r]!=="}";){if(h(),r>=t&&X.OBJ&e)return g;let c=a();h(),r++;try{let x=i();Object.defineProperty(g,c,{value:x,writable:!0,enumerable:!0,configurable:!0})}catch(x){if(X.OBJ&e)return g;throw x}h(),s[r]===","&&r++}}catch{if(X.OBJ&e)return g;n("Expected '}' at end of object")}return r++,g},p=()=>{r++;let g=[];try{for(;s[r]!=="]";)g.push(i()),h(),s[r]===","&&r++}catch{if(X.ARR&e)return g;n("Expected ']' at end of array")}return r++,g},b=()=>{if(r===0){s==="-"&&X.NUM&e&&n("Not sure what '-' is");try{return JSON.parse(s)}catch(c){if(X.NUM&e)try{return s[s.length-1]==="."?JSON.parse(s.substring(0,s.lastIndexOf("."))):JSON.parse(s.substring(0,s.lastIndexOf("e")))}catch{}o(String(c))}}let g=r;for(s[r]==="-"&&r++;s[r]&&!",]}".includes(s[r]);)r++;r==t&&!(X.NUM&e)&&n("Unterminated number literal");try{return JSON.parse(s.substring(g,r))}catch{s.substring(g,r)==="-"&&X.NUM&e&&n("Not sure what '-' is");try{return JSON.parse(s.substring(g,s.lastIndexOf("e")))}catch(x){o(String(x))}}},h=()=>{for(;r<t&&` 
\r	`.includes(s[r]);)r++};return i()},Qo=s=>Fc(s,X.ALL^X.NUM);var K,Oe,ur,Ye,Zo,Pn,ei,ti,ri,In,si,Sa,It=class s extends dr{constructor(e){super(),K.add(this),Oe.set(this,void 0),ur.set(this,void 0),Ye.set(this,void 0),S(this,Oe,e,"f"),S(this,ur,[],"f")}get currentChatCompletionSnapshot(){return d(this,Ye,"f")}static fromReadableStream(e){let t=new s(null);return t._run(()=>t._fromReadableStream(e)),t}static createChatCompletion(e,t,r){let n=new s(t);return n._run(()=>n._runChatCompletion(e,{...t,stream:!0},{...r,headers:{...r?.headers,"X-Stainless-Helper-Method":"stream"}})),n}async _createChatCompletion(e,t,r){super._createChatCompletion;let n=r?.signal;n&&(n.aborted&&this.controller.abort(),n.addEventListener("abort",()=>this.controller.abort())),d(this,K,"m",Zo).call(this);let o=await e.chat.completions.create({...t,stream:!0},{...r,signal:this.controller.signal});this._connected();for await(let i of o)d(this,K,"m",ei).call(this,i);if(o.controller.signal?.aborted)throw new U;return this._addChatCompletion(d(this,K,"m",In).call(this))}async _fromReadableStream(e,t){let r=t?.signal;r&&(r.aborted&&this.controller.abort(),r.addEventListener("abort",()=>this.controller.abort())),d(this,K,"m",Zo).call(this),this._connected();let n=Pe.fromReadableStream(e,this.controller),o;for await(let i of n)o&&o!==i.id&&this._addChatCompletion(d(this,K,"m",In).call(this)),d(this,K,"m",ei).call(this,i),o=i.id;if(n.controller.signal?.aborted)throw new U;return this._addChatCompletion(d(this,K,"m",In).call(this))}[(Oe=new WeakMap,ur=new WeakMap,Ye=new WeakMap,K=new WeakSet,Zo=function(){this.ended||S(this,Ye,void 0,"f")},Pn=function(t){let r=d(this,ur,"f")[t.index];return r||(r={content_done:!1,refusal_done:!1,logprobs_content_done:!1,logprobs_refusal_done:!1,done_tool_calls:new Set,current_tool_call_index:null},d(this,ur,"f")[t.index]=r,r)},ei=function(t){if(this.ended)return;let r=d(this,K,"m",Sa).call(this,t);this._emit("chunk",t,r);for(let n of t.choices){let o=r.choices[n.index];n.delta.content!=null&&o.message?.role==="assistant"&&o.message?.content&&(this._emit("content",n.delta.content,o.message.content),this._emit("content.delta",{delta:n.delta.content,snapshot:o.message.content,parsed:o.message.parsed})),n.delta.refusal!=null&&o.message?.role==="assistant"&&o.message?.refusal&&this._emit("refusal.delta",{delta:n.delta.refusal,snapshot:o.message.refusal}),n.logprobs?.content!=null&&o.message?.role==="assistant"&&this._emit("logprobs.content.delta",{content:n.logprobs?.content,snapshot:o.logprobs?.content??[]}),n.logprobs?.refusal!=null&&o.message?.role==="assistant"&&this._emit("logprobs.refusal.delta",{refusal:n.logprobs?.refusal,snapshot:o.logprobs?.refusal??[]});let i=d(this,K,"m",Pn).call(this,o);o.finish_reason&&(d(this,K,"m",ri).call(this,o),i.current_tool_call_index!=null&&d(this,K,"m",ti).call(this,o,i.current_tool_call_index));for(let a of n.delta.tool_calls??[])i.current_tool_call_index!==a.index&&(d(this,K,"m",ri).call(this,o),i.current_tool_call_index!=null&&d(this,K,"m",ti).call(this,o,i.current_tool_call_index)),i.current_tool_call_index=a.index;for(let a of n.delta.tool_calls??[]){let l=o.message.tool_calls?.[a.index];l?.type&&(l?.type==="function"?this._emit("tool_calls.function.arguments.delta",{name:l.function?.name,index:a.index,arguments:l.function.arguments,parsed_arguments:l.function.parsed_arguments,arguments_delta:a.function?.arguments??""}):(l?.type,void 0))}}},ti=function(t,r){if(d(this,K,"m",Pn).call(this,t).done_tool_calls.has(r))return;let o=t.message.tool_calls?.[r];if(!o)throw new Error("no tool call snapshot");if(!o.type)throw new Error("tool call snapshot missing `type`");if(o.type==="function"){let i=d(this,Oe,"f")?.tools?.find(a=>_s(a)&&a.function.name===o.function.name);this._emit("tool_calls.function.arguments.done",{name:o.function.name,index:r,arguments:o.function.arguments,parsed_arguments:Pt(i)?i.$parseRaw(o.function.arguments):i?.function.strict?JSON.parse(o.function.arguments):null})}else o.type},ri=function(t){let r=d(this,K,"m",Pn).call(this,t);if(t.message.content&&!r.content_done){r.content_done=!0;let n=d(this,K,"m",si).call(this);this._emit("content.done",{content:t.message.content,parsed:n?n.$parseRaw(t.message.content):null})}t.message.refusal&&!r.refusal_done&&(r.refusal_done=!0,this._emit("refusal.done",{refusal:t.message.refusal})),t.logprobs?.content&&!r.logprobs_content_done&&(r.logprobs_content_done=!0,this._emit("logprobs.content.done",{content:t.logprobs.content})),t.logprobs?.refusal&&!r.logprobs_refusal_done&&(r.logprobs_refusal_done=!0,this._emit("logprobs.refusal.done",{refusal:t.logprobs.refusal}))},In=function(){if(this.ended)throw new _("stream has ended, this shouldn't happen");let t=d(this,Ye,"f");if(!t)throw new _("request ended without sending any chunks");return S(this,Ye,void 0,"f"),S(this,ur,[],"f"),Nc(t,d(this,Oe,"f"))},si=function(){let t=d(this,Oe,"f")?.response_format;return ws(t)?t:null},Sa=function(t){var r,n,o,i;let a=d(this,Ye,"f"),{choices:l,...p}=t;a?Object.assign(a,p):a=S(this,Ye,{...p,choices:[]},"f");for(let{delta:b,finish_reason:h,index:g,logprobs:c=null,...x}of t.choices){let P=a.choices[g];if(P||(P=a.choices[g]={finish_reason:h,index:g,message:{},logprobs:c,...x}),c)if(!P.logprobs)P.logprobs=Object.assign({},c);else{let{content:re,refusal:M,...G}=c;Object.assign(P.logprobs,G),re&&((r=P.logprobs).content??(r.content=[]),P.logprobs.content.push(...re)),M&&((n=P.logprobs).refusal??(n.refusal=[]),P.logprobs.refusal.push(...M))}if(h&&(P.finish_reason=h,d(this,Oe,"f")&&qo(d(this,Oe,"f")))){if(h==="length")throw new nr;if(h==="content_filter")throw new or}if(Object.assign(P,x),!b)continue;let{content:O,refusal:k,function_call:v,role:L,tool_calls:T,...te}=b;if(Object.assign(P.message,te),k&&(P.message.refusal=(P.message.refusal||"")+k),L&&(P.message.role=L),v&&(P.message.function_call?(v.name&&(P.message.function_call.name=v.name),v.arguments&&((o=P.message.function_call).arguments??(o.arguments=""),P.message.function_call.arguments+=v.arguments)):P.message.function_call=v),O&&(P.message.content=(P.message.content||"")+O,!P.message.refusal&&d(this,K,"m",si).call(this)&&(P.message.parsed=Qo(P.message.content))),T){P.message.tool_calls||(P.message.tool_calls=[]);for(let{index:re,id:M,type:G,function:V,...H}of T){let j=(i=P.message.tool_calls)[re]??(i[re]={});Object.assign(j,H),M&&(j.id=M),G&&(j.type=G),V&&(j.function??(j.function={name:V.name??"",arguments:""})),V?.name&&(j.function.name=V.name),V?.arguments&&(j.function.arguments+=V.arguments,ba(d(this,Oe,"f"),j)&&(j.function.parsed_arguments=Qo(j.function.arguments)))}}}return a},Symbol.asyncIterator)](){let e=[],t=[],r=!1;return this.on("chunk",n=>{let o=t.shift();o?o.resolve(n):e.push(n)}),this.on("end",()=>{r=!0;for(let n of t)n.resolve(void 0);t.length=0}),this.on("abort",n=>{r=!0;for(let o of t)o.reject(n);t.length=0}),this.on("error",n=>{r=!0;for(let o of t)o.reject(n);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:r?{value:void 0,done:!0}:new Promise((o,i)=>t.push({resolve:o,reject:i})).then(o=>o?{value:o,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}toReadableStream(){return new Pe(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}};function Nc(s,e){let{id:t,choices:r,created:n,model:o,system_fingerprint:i,...a}=s,l={...a,id:t,choices:r.map(({message:p,finish_reason:b,index:h,logprobs:g,...c})=>{if(!b)throw new _(`missing finish_reason for choice ${h}`);let{content:x=null,function_call:P,tool_calls:O,...k}=p,v=p.role;if(!v)throw new _(`missing role for choice ${h}`);if(P){let{arguments:L,name:T}=P;if(L==null)throw new _(`missing function_call.arguments for choice ${h}`);if(!T)throw new _(`missing function_call.name for choice ${h}`);return{...c,message:{content:x,function_call:{arguments:L,name:T},role:v,refusal:p.refusal??null},finish_reason:b,index:h,logprobs:g}}return O?{...c,index:h,finish_reason:b,logprobs:g,message:{...k,role:v,content:x,refusal:p.refusal??null,tool_calls:O.map((L,T)=>{let{function:te,type:re,id:M,...G}=L,{arguments:V,name:H,...j}=te||{};if(M==null)throw new _(`missing choices[${h}].tool_calls[${T}].id
${Sn(s)}`);if(re==null)throw new _(`missing choices[${h}].tool_calls[${T}].type
${Sn(s)}`);if(H==null)throw new _(`missing choices[${h}].tool_calls[${T}].function.name
${Sn(s)}`);if(V==null)throw new _(`missing choices[${h}].tool_calls[${T}].function.arguments
${Sn(s)}`);return{...G,id:M,type:re,function:{...j,name:H,arguments:V}}})}}:{...c,message:{...k,content:x,role:v,refusal:p.refusal??null},finish_reason:b,index:h,logprobs:g}}),created:n,model:o,object:"chat.completion",...i?{system_fingerprint:i}:{}};return ya(l,e)}function Sn(s){return JSON.stringify(s)}var Es=class s extends It{static fromReadableStream(e){let t=new s(null);return t._run(()=>t._fromReadableStream(e)),t}static runTools(e,t,r){let n=new s(t),o={...r,headers:{...r?.headers,"X-Stainless-Helper-Method":"runTools"}};return n._run(()=>n._runTools(e,t,o)),n}};var Fe=class extends m{constructor(){super(...arguments),this.messages=new xt(this._client)}create(e,t){return this._client.post("/chat/completions",{body:e,...t,stream:e.stream??!1})}retrieve(e,t){return this._client.get(f`/chat/completions/${e}`,t)}update(e,t,r){return this._client.post(f`/chat/completions/${e}`,{body:t,...r})}list(e={},t){return this._client.getAPIList("/chat/completions",R,{query:e,...t})}delete(e,t){return this._client.delete(f`/chat/completions/${e}`,t)}parse(e,t){return wa(e.tools),this._client.chat.completions.create(e,{...t,headers:{...t?.headers,"X-Stainless-Helper-Method":"chat.completions.parse"}})._thenUnwrap(r=>vs(r,e))}runTools(e,t){return e.stream?Es.runTools(this._client,e,t):As.runTools(this._client,e,t)}stream(e,t){return It.createChatCompletion(this._client,e,t)}};Fe.Messages=xt;var Qe=class extends m{constructor(){super(...arguments),this.completions=new Fe(this._client)}};Qe.Completions=Fe;var Aa=Symbol("brand.privateNullableHeaders");function*Bc(s){if(!s)return;if(Aa in s){let{values:r,nulls:n}=s;yield*r.entries();for(let o of n)yield[o,null];return}let e=!1,t;s instanceof Headers?t=s.entries():Io(s)?t=s:(e=!0,t=Object.entries(s??{}));for(let r of t){let n=r[0];if(typeof n!="string")throw new TypeError("expected header name to be a string");let o=Io(r[1])?r[1]:[r[1]],i=!1;for(let a of o)a!==void 0&&(e&&!i&&(i=!0,yield[n,null]),yield[n,a])}}var y=s=>{let e=new Headers,t=new Set;for(let r of s){let n=new Set;for(let[o,i]of Bc(r)){let a=o.toLowerCase();n.has(a)||(e.delete(o),n.add(a)),i===null?(e.delete(o),t.add(a)):(e.append(o,i),t.delete(a))}}return{[Aa]:!0,values:e,nulls:t}};var pr=class extends m{create(e,t){return this._client.post("/audio/speech",{body:e,...t,headers:y([{Accept:"application/octet-stream"},t?.headers]),__binaryResponse:!0})}};var fr=class extends m{create(e,t){return this._client.post("/audio/transcriptions",ae({body:e,...t,stream:e.stream??!1,__metadata:{model:e.model}},this._client))}};var hr=class extends m{create(e,t){return this._client.post("/audio/translations",ae({body:e,...t,__metadata:{model:e.model}},this._client))}};var Se=class extends m{constructor(){super(...arguments),this.transcriptions=new fr(this._client),this.translations=new hr(this._client),this.speech=new pr(this._client)}};Se.Transcriptions=fr;Se.Translations=hr;Se.Speech=pr;var St=class extends m{create(e,t){return this._client.post("/batches",{body:e,...t})}retrieve(e,t){return this._client.get(f`/batches/${e}`,t)}list(e={},t){return this._client.getAPIList("/batches",R,{query:e,...t})}cancel(e,t){return this._client.post(f`/batches/${e}/cancel`,t)}};var mr=class extends m{create(e,t){return this._client.post("/assistants",{body:e,...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}retrieve(e,t){return this._client.get(f`/assistants/${e}`,{...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}update(e,t,r){return this._client.post(f`/assistants/${e}`,{body:t,...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}list(e={},t){return this._client.getAPIList("/assistants",R,{query:e,...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}delete(e,t){return this._client.delete(f`/assistants/${e}`,{...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}};var gr=class extends m{create(e,t){return this._client.post("/realtime/sessions",{body:e,...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}};var yr=class extends m{create(e,t){return this._client.post("/realtime/transcription_sessions",{body:e,...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}};var Ze=class extends m{constructor(){super(...arguments),this.sessions=new gr(this._client),this.transcriptionSessions=new yr(this._client)}};Ze.Sessions=gr;Ze.TranscriptionSessions=yr;var br=class extends m{create(e,t){return this._client.post("/chatkit/sessions",{body:e,...t,headers:y([{"OpenAI-Beta":"chatkit_beta=v1"},t?.headers])})}cancel(e,t){return this._client.post(f`/chatkit/sessions/${e}/cancel`,{...t,headers:y([{"OpenAI-Beta":"chatkit_beta=v1"},t?.headers])})}};var _r=class extends m{retrieve(e,t){return this._client.get(f`/chatkit/threads/${e}`,{...t,headers:y([{"OpenAI-Beta":"chatkit_beta=v1"},t?.headers])})}list(e={},t){return this._client.getAPIList("/chatkit/threads",Te,{query:e,...t,headers:y([{"OpenAI-Beta":"chatkit_beta=v1"},t?.headers])})}delete(e,t){return this._client.delete(f`/chatkit/threads/${e}`,{...t,headers:y([{"OpenAI-Beta":"chatkit_beta=v1"},t?.headers])})}listItems(e,t={},r){return this._client.getAPIList(f`/chatkit/threads/${e}/items`,Te,{query:t,...r,headers:y([{"OpenAI-Beta":"chatkit_beta=v1"},r?.headers])})}};var et=class extends m{constructor(){super(...arguments),this.sessions=new br(this._client),this.threads=new _r(this._client)}};et.Sessions=br;et.Threads=_r;var wr=class extends m{create(e,t,r){return this._client.post(f`/threads/${e}/messages`,{body:t,...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}retrieve(e,t,r){let{thread_id:n}=t;return this._client.get(f`/threads/${n}/messages/${e}`,{...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}update(e,t,r){let{thread_id:n,...o}=t;return this._client.post(f`/threads/${n}/messages/${e}`,{body:o,...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}list(e,t={},r){return this._client.getAPIList(f`/threads/${e}/messages`,R,{query:t,...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}delete(e,t,r){let{thread_id:n}=t;return this._client.delete(f`/threads/${n}/messages/${e}`,{...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}};var vr=class extends m{retrieve(e,t,r){let{thread_id:n,run_id:o,...i}=t;return this._client.get(f`/threads/${n}/runs/${o}/steps/${e}`,{query:i,...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}list(e,t,r){let{thread_id:n,...o}=t;return this._client.getAPIList(f`/threads/${n}/runs/${e}/steps`,R,{query:o,...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}};var Ea=s=>{if(typeof Buffer<"u"){let e=Buffer.from(s,"base64");return Array.from(new Float32Array(e.buffer,e.byteOffset,e.length/Float32Array.BYTES_PER_ELEMENT))}else{let e=atob(s),t=e.length,r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e.charCodeAt(n);return Array.from(new Float32Array(r.buffer))}};var tt=s=>{if(typeof globalThis.process<"u")return globalThis.process.env?.[s]?.trim()??void 0;if(typeof globalThis.Deno<"u")return globalThis.Deno.env?.get?.(s)?.trim()};var Z,Et,ni,Ae,An,ge,Rt,xr,At,kn,le,En,Rn,Cs,Rs,ks,Ra,ka,Ca,Ta,Ma,Oa,Fa,$e=class extends ze{constructor(){super(...arguments),Z.add(this),ni.set(this,[]),Ae.set(this,{}),An.set(this,{}),ge.set(this,void 0),Rt.set(this,void 0),xr.set(this,void 0),At.set(this,void 0),kn.set(this,void 0),le.set(this,void 0),En.set(this,void 0),Rn.set(this,void 0),Cs.set(this,void 0)}[(ni=new WeakMap,Ae=new WeakMap,An=new WeakMap,ge=new WeakMap,Rt=new WeakMap,xr=new WeakMap,At=new WeakMap,kn=new WeakMap,le=new WeakMap,En=new WeakMap,Rn=new WeakMap,Cs=new WeakMap,Z=new WeakSet,Symbol.asyncIterator)](){let e=[],t=[],r=!1;return this.on("event",n=>{let o=t.shift();o?o.resolve(n):e.push(n)}),this.on("end",()=>{r=!0;for(let n of t)n.resolve(void 0);t.length=0}),this.on("abort",n=>{r=!0;for(let o of t)o.reject(n);t.length=0}),this.on("error",n=>{r=!0;for(let o of t)o.reject(n);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:r?{value:void 0,done:!0}:new Promise((o,i)=>t.push({resolve:o,reject:i})).then(o=>o?{value:o,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}static fromReadableStream(e){let t=new Et;return t._run(()=>t._fromReadableStream(e)),t}async _fromReadableStream(e,t){let r=t?.signal;r&&(r.aborted&&this.controller.abort(),r.addEventListener("abort",()=>this.controller.abort())),this._connected();let n=Pe.fromReadableStream(e,this.controller);for await(let o of n)d(this,Z,"m",Rs).call(this,o);if(n.controller.signal?.aborted)throw new U;return this._addRun(d(this,Z,"m",ks).call(this))}toReadableStream(){return new Pe(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}static createToolAssistantStream(e,t,r,n){let o=new Et;return o._run(()=>o._runToolAssistantStream(e,t,r,{...n,headers:{...n?.headers,"X-Stainless-Helper-Method":"stream"}})),o}async _createToolAssistantStream(e,t,r,n){let o=n?.signal;o&&(o.aborted&&this.controller.abort(),o.addEventListener("abort",()=>this.controller.abort()));let i={...r,stream:!0},a=await e.submitToolOutputs(t,i,{...n,signal:this.controller.signal});this._connected();for await(let l of a)d(this,Z,"m",Rs).call(this,l);if(a.controller.signal?.aborted)throw new U;return this._addRun(d(this,Z,"m",ks).call(this))}static createThreadAssistantStream(e,t,r){let n=new Et;return n._run(()=>n._threadAssistantStream(e,t,{...r,headers:{...r?.headers,"X-Stainless-Helper-Method":"stream"}})),n}static createAssistantStream(e,t,r,n){let o=new Et;return o._run(()=>o._runAssistantStream(e,t,r,{...n,headers:{...n?.headers,"X-Stainless-Helper-Method":"stream"}})),o}currentEvent(){return d(this,En,"f")}currentRun(){return d(this,Rn,"f")}currentMessageSnapshot(){return d(this,ge,"f")}currentRunStepSnapshot(){return d(this,Cs,"f")}async finalRunSteps(){return await this.done(),Object.values(d(this,Ae,"f"))}async finalMessages(){return await this.done(),Object.values(d(this,An,"f"))}async finalRun(){if(await this.done(),!d(this,Rt,"f"))throw Error("Final run was not received.");return d(this,Rt,"f")}async _createThreadAssistantStream(e,t,r){let n=r?.signal;n&&(n.aborted&&this.controller.abort(),n.addEventListener("abort",()=>this.controller.abort()));let o={...t,stream:!0},i=await e.createAndRun(o,{...r,signal:this.controller.signal});this._connected();for await(let a of i)d(this,Z,"m",Rs).call(this,a);if(i.controller.signal?.aborted)throw new U;return this._addRun(d(this,Z,"m",ks).call(this))}async _createAssistantStream(e,t,r,n){let o=n?.signal;o&&(o.aborted&&this.controller.abort(),o.addEventListener("abort",()=>this.controller.abort()));let i={...r,stream:!0},a=await e.create(t,i,{...n,signal:this.controller.signal});this._connected();for await(let l of a)d(this,Z,"m",Rs).call(this,l);if(a.controller.signal?.aborted)throw new U;return this._addRun(d(this,Z,"m",ks).call(this))}static accumulateDelta(e,t){for(let[r,n]of Object.entries(t)){if(!e.hasOwnProperty(r)){e[r]=n;continue}let o=e[r];if(o==null){e[r]=n;continue}if(r==="index"||r==="type"){e[r]=n;continue}if(typeof o=="string"&&typeof n=="string")o+=n;else if(typeof o=="number"&&typeof n=="number")o+=n;else if(ps(o)&&ps(n))o=this.accumulateDelta(o,n);else if(Array.isArray(o)&&Array.isArray(n)){if(o.every(i=>typeof i=="string"||typeof i=="number")){o.push(...n);continue}for(let i of n){if(!ps(i))throw new Error(`Expected array delta entry to be an object but got: ${i}`);let a=i.index;if(a==null)throw console.error(i),new Error("Expected array delta entry to have an `index` property");if(typeof a!="number")throw new Error(`Expected array delta entry \`index\` property to be a number but got ${a}`);let l=o[a];l==null?o.push(i):o[a]=this.accumulateDelta(l,i)}continue}else throw Error(`Unhandled record type: ${r}, deltaValue: ${n}, accValue: ${o}`);e[r]=o}return e}_addRun(e){return e}async _threadAssistantStream(e,t,r){return await this._createThreadAssistantStream(t,e,r)}async _runAssistantStream(e,t,r,n){return await this._createAssistantStream(t,e,r,n)}async _runToolAssistantStream(e,t,r,n){return await this._createToolAssistantStream(t,e,r,n)}};Et=$e,Rs=function(e){if(!this.ended)switch(S(this,En,e,"f"),d(this,Z,"m",Ca).call(this,e),e.event){case"thread.created":break;case"thread.run.created":case"thread.run.queued":case"thread.run.in_progress":case"thread.run.requires_action":case"thread.run.completed":case"thread.run.incomplete":case"thread.run.failed":case"thread.run.cancelling":case"thread.run.cancelled":case"thread.run.expired":d(this,Z,"m",Fa).call(this,e);break;case"thread.run.step.created":case"thread.run.step.in_progress":case"thread.run.step.delta":case"thread.run.step.completed":case"thread.run.step.failed":case"thread.run.step.cancelled":case"thread.run.step.expired":d(this,Z,"m",ka).call(this,e);break;case"thread.message.created":case"thread.message.in_progress":case"thread.message.delta":case"thread.message.completed":case"thread.message.incomplete":d(this,Z,"m",Ra).call(this,e);break;case"error":throw new Error("Encountered an error event in event processing - errors should be processed earlier");default:}},ks=function(){if(this.ended)throw new _("stream has ended, this shouldn't happen");if(!d(this,Rt,"f"))throw Error("Final run has not been received");return d(this,Rt,"f")},Ra=function(e){let[t,r]=d(this,Z,"m",Ma).call(this,e,d(this,ge,"f"));S(this,ge,t,"f"),d(this,An,"f")[t.id]=t;for(let n of r){let o=t.content[n.index];o?.type=="text"&&this._emit("textCreated",o.text)}switch(e.event){case"thread.message.created":this._emit("messageCreated",e.data);break;case"thread.message.in_progress":break;case"thread.message.delta":if(this._emit("messageDelta",e.data.delta,t),e.data.delta.content)for(let n of e.data.delta.content){if(n.type=="text"&&n.text){let o=n.text,i=t.content[n.index];if(i&&i.type=="text")this._emit("textDelta",o,i.text);else throw Error("The snapshot associated with this text delta is not text or missing")}if(n.index!=d(this,xr,"f")){if(d(this,At,"f"))switch(d(this,At,"f").type){case"text":this._emit("textDone",d(this,At,"f").text,d(this,ge,"f"));break;case"image_file":this._emit("imageFileDone",d(this,At,"f").image_file,d(this,ge,"f"));break}S(this,xr,n.index,"f")}S(this,At,t.content[n.index],"f")}break;case"thread.message.completed":case"thread.message.incomplete":if(d(this,xr,"f")!==void 0){let n=e.data.content[d(this,xr,"f")];if(n)switch(n.type){case"image_file":this._emit("imageFileDone",n.image_file,d(this,ge,"f"));break;case"text":this._emit("textDone",n.text,d(this,ge,"f"));break}}d(this,ge,"f")&&this._emit("messageDone",e.data),S(this,ge,void 0,"f")}},ka=function(e){let t=d(this,Z,"m",Ta).call(this,e);switch(S(this,Cs,t,"f"),e.event){case"thread.run.step.created":this._emit("runStepCreated",e.data);break;case"thread.run.step.delta":let r=e.data.delta;if(r.step_details&&r.step_details.type=="tool_calls"&&r.step_details.tool_calls&&t.step_details.type=="tool_calls")for(let o of r.step_details.tool_calls)o.index==d(this,kn,"f")?this._emit("toolCallDelta",o,t.step_details.tool_calls[o.index]):(d(this,le,"f")&&this._emit("toolCallDone",d(this,le,"f")),S(this,kn,o.index,"f"),S(this,le,t.step_details.tool_calls[o.index],"f"),d(this,le,"f")&&this._emit("toolCallCreated",d(this,le,"f")));this._emit("runStepDelta",e.data.delta,t);break;case"thread.run.step.completed":case"thread.run.step.failed":case"thread.run.step.cancelled":case"thread.run.step.expired":S(this,Cs,void 0,"f"),e.data.step_details.type=="tool_calls"&&d(this,le,"f")&&(this._emit("toolCallDone",d(this,le,"f")),S(this,le,void 0,"f")),this._emit("runStepDone",e.data,t);break;case"thread.run.step.in_progress":break}},Ca=function(e){d(this,ni,"f").push(e),this._emit("event",e)},Ta=function(e){switch(e.event){case"thread.run.step.created":return d(this,Ae,"f")[e.data.id]=e.data,e.data;case"thread.run.step.delta":let t=d(this,Ae,"f")[e.data.id];if(!t)throw Error("Received a RunStepDelta before creation of a snapshot");let r=e.data;if(r.delta){let n=Et.accumulateDelta(t,r.delta);d(this,Ae,"f")[e.data.id]=n}return d(this,Ae,"f")[e.data.id];case"thread.run.step.completed":case"thread.run.step.failed":case"thread.run.step.cancelled":case"thread.run.step.expired":case"thread.run.step.in_progress":d(this,Ae,"f")[e.data.id]=e.data;break}if(d(this,Ae,"f")[e.data.id])return d(this,Ae,"f")[e.data.id];throw new Error("No snapshot available")},Ma=function(e,t){let r=[];switch(e.event){case"thread.message.created":return[e.data,r];case"thread.message.delta":if(!t)throw Error("Received a delta with no existing snapshot (there should be one from message creation)");let n=e.data;if(n.delta.content)for(let o of n.delta.content)if(o.index in t.content){let i=t.content[o.index];t.content[o.index]=d(this,Z,"m",Oa).call(this,o,i)}else t.content[o.index]=o,r.push(o);return[t,r];case"thread.message.in_progress":case"thread.message.completed":case"thread.message.incomplete":if(t)return[t,r];throw Error("Received thread message event with no existing snapshot")}throw Error("Tried to accumulate a non-message event")},Oa=function(e,t){return Et.accumulateDelta(t,e)},Fa=function(e){switch(S(this,Rn,e.data,"f"),e.event){case"thread.run.created":break;case"thread.run.queued":break;case"thread.run.in_progress":break;case"thread.run.requires_action":case"thread.run.cancelled":case"thread.run.failed":case"thread.run.completed":case"thread.run.expired":case"thread.run.incomplete":S(this,Rt,e.data,"f"),d(this,le,"f")&&(this._emit("toolCallDone",d(this,le,"f")),S(this,le,void 0,"f"));break;case"thread.run.cancelling":break}};var kt=class extends m{constructor(){super(...arguments),this.steps=new vr(this._client)}create(e,t,r){let{include:n,...o}=t;return this._client.post(f`/threads/${e}/runs`,{query:{include:n},body:o,...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers]),stream:t.stream??!1})}retrieve(e,t,r){let{thread_id:n}=t;return this._client.get(f`/threads/${n}/runs/${e}`,{...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}update(e,t,r){let{thread_id:n,...o}=t;return this._client.post(f`/threads/${n}/runs/${e}`,{body:o,...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}list(e,t={},r){return this._client.getAPIList(f`/threads/${e}/runs`,R,{query:t,...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}cancel(e,t,r){let{thread_id:n}=t;return this._client.post(f`/threads/${n}/runs/${e}/cancel`,{...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}async createAndPoll(e,t,r){let n=await this.create(e,t,r);return await this.poll(n.id,{thread_id:e},r)}createAndStream(e,t,r){return $e.createAssistantStream(e,this._client.beta.threads.runs,t,r)}async poll(e,t,r){let n=y([r?.headers,{"X-Stainless-Poll-Helper":"true","X-Stainless-Custom-Poll-Interval":r?.pollIntervalMs?.toString()??void 0}]);for(;;){let{data:o,response:i}=await this.retrieve(e,t,{...r,headers:{...r?.headers,...n}}).withResponse();switch(o.status){case"queued":case"in_progress":case"cancelling":let a=5e3;if(r?.pollIntervalMs)a=r.pollIntervalMs;else{let l=i.headers.get("openai-poll-after-ms");if(l){let p=parseInt(l);isNaN(p)||(a=p)}}await ve(a);break;case"requires_action":case"incomplete":case"cancelled":case"completed":case"failed":case"expired":return o}}}stream(e,t,r){return $e.createAssistantStream(e,this._client.beta.threads.runs,t,r)}submitToolOutputs(e,t,r){let{thread_id:n,...o}=t;return this._client.post(f`/threads/${n}/runs/${e}/submit_tool_outputs`,{body:o,...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers]),stream:t.stream??!1})}async submitToolOutputsAndPoll(e,t,r){let n=await this.submitToolOutputs(e,t,r);return await this.poll(n.id,t,r)}submitToolOutputsStream(e,t,r){return $e.createToolAssistantStream(e,this._client.beta.threads.runs,t,r)}};kt.Steps=vr;var rt=class extends m{constructor(){super(...arguments),this.runs=new kt(this._client),this.messages=new wr(this._client)}create(e={},t){return this._client.post("/threads",{body:e,...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}retrieve(e,t){return this._client.get(f`/threads/${e}`,{...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}update(e,t,r){return this._client.post(f`/threads/${e}`,{body:t,...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}delete(e,t){return this._client.delete(f`/threads/${e}`,{...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}createAndRun(e,t){return this._client.post("/threads/runs",{body:e,...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers]),stream:e.stream??!1})}async createAndRunPoll(e,t){let r=await this.createAndRun(e,t);return await this.runs.poll(r.id,{thread_id:r.thread_id},t)}createAndRunStream(e,t){return $e.createThreadAssistantStream(e,this._client.beta.threads,t)}};rt.Runs=kt;rt.Messages=wr;var ye=class extends m{constructor(){super(...arguments),this.realtime=new Ze(this._client),this.chatkit=new et(this._client),this.assistants=new mr(this._client),this.threads=new rt(this._client)}};ye.Realtime=Ze;ye.ChatKit=et;ye.Assistants=mr;ye.Threads=rt;var Ct=class extends m{create(e,t){return this._client.post("/completions",{body:e,...t,stream:e.stream??!1})}};var Pr=class extends m{retrieve(e,t,r){let{container_id:n}=t;return this._client.get(f`/containers/${n}/files/${e}/content`,{...r,headers:y([{Accept:"application/binary"},r?.headers]),__binaryResponse:!0})}};var Tt=class extends m{constructor(){super(...arguments),this.content=new Pr(this._client)}create(e,t,r){return this._client.post(f`/containers/${e}/files`,ae({body:t,...r},this._client))}retrieve(e,t,r){let{container_id:n}=t;return this._client.get(f`/containers/${n}/files/${e}`,r)}list(e,t={},r){return this._client.getAPIList(f`/containers/${e}/files`,R,{query:t,...r})}delete(e,t,r){let{container_id:n}=t;return this._client.delete(f`/containers/${n}/files/${e}`,{...r,headers:y([{Accept:"*/*"},r?.headers])})}};Tt.Content=Pr;var st=class extends m{constructor(){super(...arguments),this.files=new Tt(this._client)}create(e,t){return this._client.post("/containers",{body:e,...t})}retrieve(e,t){return this._client.get(f`/containers/${e}`,t)}list(e={},t){return this._client.getAPIList("/containers",R,{query:e,...t})}delete(e,t){return this._client.delete(f`/containers/${e}`,{...t,headers:y([{Accept:"*/*"},t?.headers])})}};st.Files=Tt;var Ir=class extends m{create(e,t,r){let{include:n,...o}=t;return this._client.post(f`/conversations/${e}/items`,{query:{include:n},body:o,...r})}retrieve(e,t,r){let{conversation_id:n,...o}=t;return this._client.get(f`/conversations/${n}/items/${e}`,{query:o,...r})}list(e,t={},r){return this._client.getAPIList(f`/conversations/${e}/items`,Te,{query:t,...r})}delete(e,t,r){let{conversation_id:n}=t;return this._client.delete(f`/conversations/${n}/items/${e}`,r)}};var nt=class extends m{constructor(){super(...arguments),this.items=new Ir(this._client)}create(e={},t){return this._client.post("/conversations",{body:e,...t})}retrieve(e,t){return this._client.get(f`/conversations/${e}`,t)}update(e,t,r){return this._client.post(f`/conversations/${e}`,{body:t,...r})}delete(e,t){return this._client.delete(f`/conversations/${e}`,t)}};nt.Items=Ir;var Mt=class extends m{create(e,t){let r=!!e.encoding_format,n=r?e.encoding_format:"base64";r&&B(this._client).debug("embeddings/user defined encoding_format:",e.encoding_format);let o=this._client.post("/embeddings",{body:{...e,encoding_format:n},...t});return r?o:(B(this._client).debug("embeddings/decoding base64 embeddings from base64"),o._thenUnwrap(i=>(i&&i.data&&i.data.forEach(a=>{let l=a.embedding;a.embedding=Ea(l)}),i)))}};var Sr=class extends m{retrieve(e,t,r){let{eval_id:n,run_id:o}=t;return this._client.get(f`/evals/${n}/runs/${o}/output_items/${e}`,r)}list(e,t,r){let{eval_id:n,...o}=t;return this._client.getAPIList(f`/evals/${n}/runs/${e}/output_items`,R,{query:o,...r})}};var Ot=class extends m{constructor(){super(...arguments),this.outputItems=new Sr(this._client)}create(e,t,r){return this._client.post(f`/evals/${e}/runs`,{body:t,...r})}retrieve(e,t,r){let{eval_id:n}=t;return this._client.get(f`/evals/${n}/runs/${e}`,r)}list(e,t={},r){return this._client.getAPIList(f`/evals/${e}/runs`,R,{query:t,...r})}delete(e,t,r){let{eval_id:n}=t;return this._client.delete(f`/evals/${n}/runs/${e}`,r)}cancel(e,t,r){let{eval_id:n}=t;return this._client.post(f`/evals/${n}/runs/${e}`,r)}};Ot.OutputItems=Sr;var ot=class extends m{constructor(){super(...arguments),this.runs=new Ot(this._client)}create(e,t){return this._client.post("/evals",{body:e,...t})}retrieve(e,t){return this._client.get(f`/evals/${e}`,t)}update(e,t,r){return this._client.post(f`/evals/${e}`,{body:t,...r})}list(e={},t){return this._client.getAPIList("/evals",R,{query:e,...t})}delete(e,t){return this._client.delete(f`/evals/${e}`,t)}};ot.Runs=Ot;var Ft=class extends m{create(e,t){return this._client.post("/files",ae({body:e,...t},this._client))}retrieve(e,t){return this._client.get(f`/files/${e}`,t)}list(e={},t){return this._client.getAPIList("/files",R,{query:e,...t})}delete(e,t){return this._client.delete(f`/files/${e}`,t)}content(e,t){return this._client.get(f`/files/${e}/content`,{...t,headers:y([{Accept:"application/binary"},t?.headers]),__binaryResponse:!0})}async waitForProcessing(e,{pollInterval:t=5e3,maxWait:r=1800*1e3}={}){let n=new Set(["processed","error","deleted"]),o=Date.now(),i=await this.retrieve(e);for(;!i.status||!n.has(i.status);)if(await ve(t),i=await this.retrieve(e),Date.now()-o>r)throw new Ve({message:`Giving up on waiting for file ${e} to finish processing after ${r} milliseconds.`});return i}};var Ar=class extends m{};var Er=class extends m{run(e,t){return this._client.post("/fine_tuning/alpha/graders/run",{body:e,...t})}validate(e,t){return this._client.post("/fine_tuning/alpha/graders/validate",{body:e,...t})}};var $t=class extends m{constructor(){super(...arguments),this.graders=new Er(this._client)}};$t.Graders=Er;var Rr=class extends m{create(e,t,r){return this._client.getAPIList(f`/fine_tuning/checkpoints/${e}/permissions`,Ie,{body:t,method:"post",...r})}retrieve(e,t={},r){return this._client.get(f`/fine_tuning/checkpoints/${e}/permissions`,{query:t,...r})}delete(e,t,r){let{fine_tuned_model_checkpoint:n}=t;return this._client.delete(f`/fine_tuning/checkpoints/${n}/permissions/${e}`,r)}};var Nt=class extends m{constructor(){super(...arguments),this.permissions=new Rr(this._client)}};Nt.Permissions=Rr;var kr=class extends m{list(e,t={},r){return this._client.getAPIList(f`/fine_tuning/jobs/${e}/checkpoints`,R,{query:t,...r})}};var Lt=class extends m{constructor(){super(...arguments),this.checkpoints=new kr(this._client)}create(e,t){return this._client.post("/fine_tuning/jobs",{body:e,...t})}retrieve(e,t){return this._client.get(f`/fine_tuning/jobs/${e}`,t)}list(e={},t){return this._client.getAPIList("/fine_tuning/jobs",R,{query:e,...t})}cancel(e,t){return this._client.post(f`/fine_tuning/jobs/${e}/cancel`,t)}listEvents(e,t={},r){return this._client.getAPIList(f`/fine_tuning/jobs/${e}/events`,R,{query:t,...r})}pause(e,t){return this._client.post(f`/fine_tuning/jobs/${e}/pause`,t)}resume(e,t){return this._client.post(f`/fine_tuning/jobs/${e}/resume`,t)}};Lt.Checkpoints=kr;var be=class extends m{constructor(){super(...arguments),this.methods=new Ar(this._client),this.jobs=new Lt(this._client),this.checkpoints=new Nt(this._client),this.alpha=new $t(this._client)}};be.Methods=Ar;be.Jobs=Lt;be.Checkpoints=Nt;be.Alpha=$t;var Cr=class extends m{};var it=class extends m{constructor(){super(...arguments),this.graderModels=new Cr(this._client)}};it.GraderModels=Cr;var Bt=class extends m{createVariation(e,t){return this._client.post("/images/variations",ae({body:e,...t},this._client))}edit(e,t){return this._client.post("/images/edits",ae({body:e,...t,stream:e.stream??!1},this._client))}generate(e,t){return this._client.post("/images/generations",{body:e,...t,stream:e.stream??!1})}};var Dt=class extends m{retrieve(e,t){return this._client.get(f`/models/${e}`,t)}list(e){return this._client.getAPIList("/models",Ie,e)}delete(e,t){return this._client.delete(f`/models/${e}`,t)}};var Ht=class extends m{create(e,t){return this._client.post("/moderations",{body:e,...t})}};var Tr=class extends m{accept(e,t,r){return this._client.post(f`/realtime/calls/${e}/accept`,{body:t,...r,headers:y([{Accept:"*/*"},r?.headers])})}hangup(e,t){return this._client.post(f`/realtime/calls/${e}/hangup`,{...t,headers:y([{Accept:"*/*"},t?.headers])})}refer(e,t,r){return this._client.post(f`/realtime/calls/${e}/refer`,{body:t,...r,headers:y([{Accept:"*/*"},r?.headers])})}reject(e,t={},r){return this._client.post(f`/realtime/calls/${e}/reject`,{body:t,...r,headers:y([{Accept:"*/*"},r?.headers])})}};var Mr=class extends m{create(e,t){return this._client.post("/realtime/client_secrets",{body:e,...t})}};var Ne=class extends m{constructor(){super(...arguments),this.clientSecrets=new Mr(this._client),this.calls=new Tr(this._client)}};Ne.ClientSecrets=Mr;Ne.Calls=Tr;function $a(s,e){return!e||!md(e)?{...s,output_parsed:null,output:s.output.map(t=>t.type==="function_call"?{...t,parsed_arguments:null}:t.type==="message"?{...t,content:t.content.map(r=>({...r,parsed:null}))}:t)}:oi(s,e)}function oi(s,e){let t=s.output.map(n=>{if(n.type==="function_call")return{...n,parsed_arguments:bd(e,n)};if(n.type==="message"){let o=n.content.map(i=>i.type==="output_text"?{...i,parsed:hd(e,i.text)}:i);return{...n,content:o}}return n}),r=Object.assign({},s,{output:t});return Object.getOwnPropertyDescriptor(s,"output_text")||Cn(r),Object.defineProperty(r,"output_parsed",{enumerable:!0,get(){for(let n of r.output)if(n.type==="message"){for(let o of n.content)if(o.type==="output_text"&&o.parsed!==null)return o.parsed}return null}}),r}function hd(s,e){return s.text?.format?.type!=="json_schema"?null:"$parseRaw"in s.text?.format?(s.text?.format).$parseRaw(e):JSON.parse(e)}function md(s){return!!ws(s.text?.format)}function gd(s){return s?.$brand==="auto-parseable-tool"}function yd(s,e){return s.find(t=>t.type==="function"&&t.name===e)}function bd(s,e){let t=yd(s.tools??[],e.name);return{...e,...e,parsed_arguments:gd(t)?t.$parseRaw(e.arguments):t?.strict?JSON.parse(e.arguments):null}}function Cn(s){let e=[];for(let t of s.output)if(t.type==="message")for(let r of t.content)r.type==="output_text"&&e.push(r.text);s.output_text=e.join("")}var Or,Tn,at,Mn,Na,La,Ba,Da,On=class s extends ze{constructor(e){super(),Or.add(this),Tn.set(this,void 0),at.set(this,void 0),Mn.set(this,void 0),S(this,Tn,e,"f")}static createResponse(e,t,r){let n=new s(t);return n._run(()=>n._createOrRetrieveResponse(e,t,{...r,headers:{...r?.headers,"X-Stainless-Helper-Method":"stream"}})),n}async _createOrRetrieveResponse(e,t,r){let n=r?.signal;n&&(n.aborted&&this.controller.abort(),n.addEventListener("abort",()=>this.controller.abort())),d(this,Or,"m",Na).call(this);let o,i=null;"response_id"in t?(o=await e.responses.retrieve(t.response_id,{stream:!0},{...r,signal:this.controller.signal,stream:!0}),i=t.starting_after??null):o=await e.responses.create({...t,stream:!0},{...r,signal:this.controller.signal}),this._connected();for await(let a of o)d(this,Or,"m",La).call(this,a,i);if(o.controller.signal?.aborted)throw new U;return d(this,Or,"m",Ba).call(this)}[(Tn=new WeakMap,at=new WeakMap,Mn=new WeakMap,Or=new WeakSet,Na=function(){this.ended||S(this,at,void 0,"f")},La=function(t,r){if(this.ended)return;let n=(i,a)=>{(r==null||a.sequence_number>r)&&this._emit(i,a)},o=d(this,Or,"m",Da).call(this,t);switch(n("event",t),t.type){case"response.output_text.delta":{let i=o.output[t.output_index];if(!i)throw new _(`missing output at index ${t.output_index}`);if(i.type==="message"){let a=i.content[t.content_index];if(!a)throw new _(`missing content at index ${t.content_index}`);if(a.type!=="output_text")throw new _(`expected content to be 'output_text', got ${a.type}`);n("response.output_text.delta",{...t,snapshot:a.text})}break}case"response.function_call_arguments.delta":{let i=o.output[t.output_index];if(!i)throw new _(`missing output at index ${t.output_index}`);i.type==="function_call"&&n("response.function_call_arguments.delta",{...t,snapshot:i.arguments});break}default:n(t.type,t);break}},Ba=function(){if(this.ended)throw new _("stream has ended, this shouldn't happen");let t=d(this,at,"f");if(!t)throw new _("request ended without sending any events");S(this,at,void 0,"f");let r=_d(t,d(this,Tn,"f"));return S(this,Mn,r,"f"),r},Da=function(t){let r=d(this,at,"f");if(!r){if(t.type!=="response.created")throw new _(`When snapshot hasn't been set yet, expected 'response.created' event, got ${t.type}`);return r=S(this,at,t.response,"f"),r}switch(t.type){case"response.output_item.added":{r.output.push(t.item);break}case"response.content_part.added":{let n=r.output[t.output_index];if(!n)throw new _(`missing output at index ${t.output_index}`);let o=n.type,i=t.part;o==="message"&&i.type!=="reasoning_text"?n.content.push(i):o==="reasoning"&&i.type==="reasoning_text"&&(n.content||(n.content=[]),n.content.push(i));break}case"response.output_text.delta":{let n=r.output[t.output_index];if(!n)throw new _(`missing output at index ${t.output_index}`);if(n.type==="message"){let o=n.content[t.content_index];if(!o)throw new _(`missing content at index ${t.content_index}`);if(o.type!=="output_text")throw new _(`expected content to be 'output_text', got ${o.type}`);o.text+=t.delta}break}case"response.function_call_arguments.delta":{let n=r.output[t.output_index];if(!n)throw new _(`missing output at index ${t.output_index}`);n.type==="function_call"&&(n.arguments+=t.delta);break}case"response.reasoning_text.delta":{let n=r.output[t.output_index];if(!n)throw new _(`missing output at index ${t.output_index}`);if(n.type==="reasoning"){let o=n.content?.[t.content_index];if(!o)throw new _(`missing content at index ${t.content_index}`);if(o.type!=="reasoning_text")throw new _(`expected content to be 'reasoning_text', got ${o.type}`);o.text+=t.delta}break}case"response.completed":{S(this,at,t.response,"f");break}}return r},Symbol.asyncIterator)](){let e=[],t=[],r=!1;return this.on("event",n=>{let o=t.shift();o?o.resolve(n):e.push(n)}),this.on("end",()=>{r=!0;for(let n of t)n.resolve(void 0);t.length=0}),this.on("abort",n=>{r=!0;for(let o of t)o.reject(n);t.length=0}),this.on("error",n=>{r=!0;for(let o of t)o.reject(n);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:r?{value:void 0,done:!0}:new Promise((o,i)=>t.push({resolve:o,reject:i})).then(o=>o?{value:o,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}async finalResponse(){await this.done();let e=d(this,Mn,"f");if(!e)throw new _("stream ended without producing a ChatCompletion");return e}};function _d(s,e){return $a(s,e)}var Fr=class extends m{list(e,t={},r){return this._client.getAPIList(f`/responses/${e}/input_items`,R,{query:t,...r})}};var $r=class extends m{count(e={},t){return this._client.post("/responses/input_tokens",{body:e,...t})}};var Le=class extends m{constructor(){super(...arguments),this.inputItems=new Fr(this._client),this.inputTokens=new $r(this._client)}create(e,t){return this._client.post("/responses",{body:e,...t,stream:e.stream??!1})._thenUnwrap(r=>("object"in r&&r.object==="response"&&Cn(r),r))}retrieve(e,t={},r){return this._client.get(f`/responses/${e}`,{query:t,...r,stream:t?.stream??!1})._thenUnwrap(n=>("object"in n&&n.object==="response"&&Cn(n),n))}delete(e,t){return this._client.delete(f`/responses/${e}`,{...t,headers:y([{Accept:"*/*"},t?.headers])})}parse(e,t){return this._client.responses.create(e,t)._thenUnwrap(r=>oi(r,e))}stream(e,t){return On.createResponse(this._client,e,t)}cancel(e,t){return this._client.post(f`/responses/${e}/cancel`,t)}};Le.InputItems=Fr;Le.InputTokens=$r;var Nr=class extends m{create(e,t,r){return this._client.post(f`/uploads/${e}/parts`,ae({body:t,...r},this._client))}};var lt=class extends m{constructor(){super(...arguments),this.parts=new Nr(this._client)}create(e,t){return this._client.post("/uploads",{body:e,...t})}cancel(e,t){return this._client.post(f`/uploads/${e}/cancel`,t)}complete(e,t,r){return this._client.post(f`/uploads/${e}/complete`,{body:t,...r})}};lt.Parts=Nr;var Ha=async s=>{let e=await Promise.allSettled(s),t=e.filter(n=>n.status==="rejected");if(t.length){for(let n of t)console.error(n.reason);throw new Error(`${t.length} promise(s) failed - see the above errors`)}let r=[];for(let n of e)n.status==="fulfilled"&&r.push(n.value);return r};var Lr=class extends m{create(e,t,r){return this._client.post(f`/vector_stores/${e}/file_batches`,{body:t,...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}retrieve(e,t,r){let{vector_store_id:n}=t;return this._client.get(f`/vector_stores/${n}/file_batches/${e}`,{...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}cancel(e,t,r){let{vector_store_id:n}=t;return this._client.post(f`/vector_stores/${n}/file_batches/${e}/cancel`,{...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}async createAndPoll(e,t,r){let n=await this.create(e,t);return await this.poll(e,n.id,r)}listFiles(e,t,r){let{vector_store_id:n,...o}=t;return this._client.getAPIList(f`/vector_stores/${n}/file_batches/${e}/files`,R,{query:o,...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}async poll(e,t,r){let n=y([r?.headers,{"X-Stainless-Poll-Helper":"true","X-Stainless-Custom-Poll-Interval":r?.pollIntervalMs?.toString()??void 0}]);for(;;){let{data:o,response:i}=await this.retrieve(t,{vector_store_id:e},{...r,headers:n}).withResponse();switch(o.status){case"in_progress":let a=5e3;if(r?.pollIntervalMs)a=r.pollIntervalMs;else{let l=i.headers.get("openai-poll-after-ms");if(l){let p=parseInt(l);isNaN(p)||(a=p)}}await ve(a);break;case"failed":case"cancelled":case"completed":return o}}}async uploadAndPoll(e,{files:t,fileIds:r=[]},n){if(t==null||t.length==0)throw new Error("No `files` provided to process. If you've already uploaded files you should use `.createAndPoll()` instead");let o=n?.maxConcurrency??5,i=Math.min(o,t.length),a=this._client,l=t.values(),p=[...r];async function b(g){for(let c of g){let x=await a.files.create({file:c,purpose:"assistants"},n);p.push(x.id)}}let h=Array(i).fill(l).map(b);return await Ha(h),await this.createAndPoll(e,{file_ids:p})}};var Br=class extends m{create(e,t,r){return this._client.post(f`/vector_stores/${e}/files`,{body:t,...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}retrieve(e,t,r){let{vector_store_id:n}=t;return this._client.get(f`/vector_stores/${n}/files/${e}`,{...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}update(e,t,r){let{vector_store_id:n,...o}=t;return this._client.post(f`/vector_stores/${n}/files/${e}`,{body:o,...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}list(e,t={},r){return this._client.getAPIList(f`/vector_stores/${e}/files`,R,{query:t,...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}delete(e,t,r){let{vector_store_id:n}=t;return this._client.delete(f`/vector_stores/${n}/files/${e}`,{...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}async createAndPoll(e,t,r){let n=await this.create(e,t,r);return await this.poll(e,n.id,r)}async poll(e,t,r){let n=y([r?.headers,{"X-Stainless-Poll-Helper":"true","X-Stainless-Custom-Poll-Interval":r?.pollIntervalMs?.toString()??void 0}]);for(;;){let o=await this.retrieve(t,{vector_store_id:e},{...r,headers:n}).withResponse(),i=o.data;switch(i.status){case"in_progress":let a=5e3;if(r?.pollIntervalMs)a=r.pollIntervalMs;else{let l=o.response.headers.get("openai-poll-after-ms");if(l){let p=parseInt(l);isNaN(p)||(a=p)}}await ve(a);break;case"failed":case"completed":return i}}}async upload(e,t,r){let n=await this._client.files.create({file:t,purpose:"assistants"},r);return this.create(e,{file_id:n.id},r)}async uploadAndPoll(e,t,r){let n=await this.upload(e,t,r);return await this.poll(e,n.id,r)}content(e,t,r){let{vector_store_id:n}=t;return this._client.getAPIList(f`/vector_stores/${n}/files/${e}/content`,Ie,{...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}};var Be=class extends m{constructor(){super(...arguments),this.files=new Br(this._client),this.fileBatches=new Lr(this._client)}create(e,t){return this._client.post("/vector_stores",{body:e,...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}retrieve(e,t){return this._client.get(f`/vector_stores/${e}`,{...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}update(e,t,r){return this._client.post(f`/vector_stores/${e}`,{body:t,...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}list(e={},t){return this._client.getAPIList("/vector_stores",R,{query:e,...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}delete(e,t){return this._client.delete(f`/vector_stores/${e}`,{...t,headers:y([{"OpenAI-Beta":"assistants=v2"},t?.headers])})}search(e,t,r){return this._client.getAPIList(f`/vector_stores/${e}/search`,Ie,{body:t,method:"post",...r,headers:y([{"OpenAI-Beta":"assistants=v2"},r?.headers])})}};Be.Files=Br;Be.FileBatches=Lr;var Ut=class extends m{create(e,t){return this._client.post("/videos",Uo({body:e,...t},this._client))}retrieve(e,t){return this._client.get(f`/videos/${e}`,t)}list(e={},t){return this._client.getAPIList("/videos",Te,{query:e,...t})}delete(e,t){return this._client.delete(f`/videos/${e}`,t)}downloadContent(e,t={},r){return this._client.get(f`/videos/${e}/content`,{query:t,...r,headers:y([{Accept:"application/binary"},r?.headers]),__binaryResponse:!0})}remix(e,t,r){return this._client.post(f`/videos/${e}/remix`,Uo({body:t,...r},this._client))}};var Dr,Ua,Fn,jt=class extends m{constructor(){super(...arguments),Dr.add(this)}async unwrap(e,t,r=this._client.webhookSecret,n=300){return await this.verifySignature(e,t,r,n),JSON.parse(e)}async verifySignature(e,t,r=this._client.webhookSecret,n=300){if(typeof crypto>"u"||typeof crypto.subtle.importKey!="function"||typeof crypto.subtle.verify!="function")throw new Error("Webhook signature verification is only supported when the `crypto` global is defined");d(this,Dr,"m",Ua).call(this,r);let o=y([t]).values,i=d(this,Dr,"m",Fn).call(this,o,"webhook-signature"),a=d(this,Dr,"m",Fn).call(this,o,"webhook-timestamp"),l=d(this,Dr,"m",Fn).call(this,o,"webhook-id"),p=parseInt(a,10);if(isNaN(p))throw new we("Invalid webhook timestamp format");let b=Math.floor(Date.now()/1e3);if(b-p>n)throw new we("Webhook timestamp is too old");if(p>b+n)throw new we("Webhook timestamp is too new");let h=i.split(" ").map(P=>P.startsWith("v1,")?P.substring(3):P),g=r.startsWith("whsec_")?Buffer.from(r.replace("whsec_",""),"base64"):Buffer.from(r,"utf-8"),c=l?`${l}.${a}.${e}`:`${a}.${e}`,x=await crypto.subtle.importKey("raw",g,{name:"HMAC",hash:"SHA-256"},!1,["verify"]);for(let P of h)try{let O=Buffer.from(P,"base64");if(await crypto.subtle.verify("HMAC",x,O,new TextEncoder().encode(c)))return}catch{continue}throw new we("The given webhook signature does not match the expected signature")}};Dr=new WeakSet,Ua=function(e){if(typeof e!="string"||e.length===0)throw new Error("The webhook secret must either be set using the env var, OPENAI_WEBHOOK_SECRET, on the client class, OpenAI({ webhookSecret: '123' }), or passed to this function")},Fn=function(e,t){if(!e)throw new Error("Headers are required");let r=e.get(t);if(r==null)throw new Error(`Missing required header: ${t}`);return r};var ii,ai,$n,ja,A=class{constructor({baseURL:e=tt("OPENAI_BASE_URL"),apiKey:t=tt("OPENAI_API_KEY"),organization:r=tt("OPENAI_ORG_ID")??null,project:n=tt("OPENAI_PROJECT_ID")??null,webhookSecret:o=tt("OPENAI_WEBHOOK_SECRET")??null,...i}={}){if(ii.add(this),$n.set(this,void 0),this.completions=new Ct(this),this.chat=new Qe(this),this.embeddings=new Mt(this),this.files=new Ft(this),this.images=new Bt(this),this.audio=new Se(this),this.moderations=new Ht(this),this.models=new Dt(this),this.fineTuning=new be(this),this.graders=new it(this),this.vectorStores=new Be(this),this.webhooks=new jt(this),this.beta=new ye(this),this.batches=new St(this),this.uploads=new lt(this),this.responses=new Le(this),this.realtime=new Ne(this),this.conversations=new nt(this),this.evals=new ot(this),this.containers=new st(this),this.videos=new Ut(this),t===void 0)throw new _("Missing credentials. Please pass an `apiKey`, or set the `OPENAI_API_KEY` environment variable.");let a={apiKey:t,organization:r,project:n,webhookSecret:o,...i,baseURL:e||"https://api.openai.com/v1"};if(!a.dangerouslyAllowBrowser&&Xi())throw new _(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety
`);this.baseURL=a.baseURL,this.timeout=a.timeout??ai.DEFAULT_TIMEOUT,this.logger=a.logger??console;let l="warn";this.logLevel=l,this.logLevel=$o(a.logLevel,"ClientOptions.logLevel",this)??$o(tt("OPENAI_LOG"),"process.env['OPENAI_LOG']",this)??l,this.fetchOptions=a.fetchOptions,this.maxRetries=a.maxRetries??2,this.fetch=a.fetch??Yi(),S(this,$n,Zi,"f"),this._options=a,this.apiKey=typeof t=="string"?t:"Missing Key",this.organization=r,this.project=n,this.webhookSecret=o}withOptions(e){return new this.constructor({...this._options,baseURL:this.baseURL,maxRetries:this.maxRetries,timeout:this.timeout,logger:this.logger,logLevel:this.logLevel,fetch:this.fetch,fetchOptions:this.fetchOptions,apiKey:this.apiKey,organization:this.organization,project:this.project,webhookSecret:this.webhookSecret,...e})}defaultQuery(){return this._options.defaultQuery}validateHeaders({values:e,nulls:t}){}async authHeaders(e){return y([{Authorization:`Bearer ${this.apiKey}`}])}stringifyQuery(e){return Oo(e,{arrayFormat:"brackets"})}getUserAgent(){return`${this.constructor.name}/JS ${Xe}`}defaultIdempotencyKey(){return`stainless-node-retry-${Po()}`}makeStatusError(e,t,r,n){return q.generate(e,t,r,n)}async _callApiKey(){let e=this._options.apiKey;if(typeof e!="function")return!1;let t;try{t=await e()}catch(r){throw r instanceof _?r:new _(`Failed to get token from 'apiKey' function: ${r.message}`,{cause:r})}if(typeof t!="string"||!t)throw new _(`Expected 'apiKey' function argument to return a string but it returned ${t}`);return this.apiKey=t,!0}buildURL(e,t,r){let n=!d(this,ii,"m",ja).call(this)&&r||this.baseURL,o=Ui(e)?new URL(e):new URL(n+(n.endsWith("/")&&e.startsWith("/")?e.slice(1):e)),i=this.defaultQuery();return ji(i)||(t={...i,...t}),typeof t=="object"&&t&&!Array.isArray(t)&&(o.search=this.stringifyQuery(t)),o.toString()}async prepareOptions(e){await this._callApiKey()}async prepareRequest(e,{url:t,options:r}){}get(e,t){return this.methodRequest("get",e,t)}post(e,t){return this.methodRequest("post",e,t)}patch(e,t){return this.methodRequest("patch",e,t)}put(e,t){return this.methodRequest("put",e,t)}delete(e,t){return this.methodRequest("delete",e,t)}methodRequest(e,t,r){return this.request(Promise.resolve(r).then(n=>({method:e,path:t,...n})))}request(e,t=null){return new vt(this,this.makeRequest(e,t,void 0))}async makeRequest(e,t,r){let n=await e,o=n.maxRetries??this.maxRetries;t==null&&(t=o),await this.prepareOptions(n);let{req:i,url:a,timeout:l}=await this.buildRequest(n,{retryCount:o-t});await this.prepareRequest(i,{url:a,options:n});let p="log_"+(Math.random()*(1<<24)|0).toString(16).padStart(6,"0"),b=r===void 0?"":`, retryOf: ${r}`,h=Date.now();if(B(this).debug(`[${p}] sending request`,Ce({retryOfRequestLogID:r,method:n.method,url:a,options:n,headers:i.headers})),n.signal?.aborted)throw new U;let g=new AbortController,c=await this.fetchWithTimeout(a,i,l,g).catch(us),x=Date.now();if(c instanceof globalThis.Error){let k=`retrying, ${t} attempts remaining`;if(n.signal?.aborted)throw new U;let v=ds(c)||/timed? ?out/i.test(String(c)+("cause"in c?String(c.cause):""));if(t)return B(this).info(`[${p}] connection ${v?"timed out":"failed"} - ${k}`),B(this).debug(`[${p}] connection ${v?"timed out":"failed"} (${k})`,Ce({retryOfRequestLogID:r,url:a,durationMs:x-h,message:c.message})),this.retryRequest(n,t,r??p);throw B(this).info(`[${p}] connection ${v?"timed out":"failed"} - error; no more retries left`),B(this).debug(`[${p}] connection ${v?"timed out":"failed"} (error; no more retries left)`,Ce({retryOfRequestLogID:r,url:a,durationMs:x-h,message:c.message})),v?new Ve:new Ge({cause:c})}let P=[...c.headers.entries()].filter(([k])=>k==="x-request-id").map(([k,v])=>", "+k+": "+JSON.stringify(v)).join(""),O=`[${p}${b}${P}] ${i.method} ${a} ${c.ok?"succeeded":"failed"} with status ${c.status} in ${x-h}ms`;if(!c.ok){let k=await this.shouldRetry(c);if(t&&k){let M=`retrying, ${t} attempts remaining`;return await Qi(c.body),B(this).info(`${O} - ${M}`),B(this).debug(`[${p}] response error (${M})`,Ce({retryOfRequestLogID:r,url:c.url,status:c.status,headers:c.headers,durationMs:x-h})),this.retryRequest(n,t,r??p,c.headers)}let v=k?"error; no more retries left":"error; not retryable";B(this).info(`${O} - ${v}`);let L=await c.text().catch(M=>us(M).message),T=Ki(L),te=T?void 0:L;throw B(this).debug(`[${p}] response error (${v})`,Ce({retryOfRequestLogID:r,url:c.url,status:c.status,headers:c.headers,message:te,durationMs:Date.now()-h})),this.makeStatusError(c.status,T,te,c.headers)}return B(this).info(O),B(this).debug(`[${p}] response start`,Ce({retryOfRequestLogID:r,url:c.url,status:c.status,headers:c.headers,durationMs:x-h})),{response:c,options:n,controller:g,requestLogID:p,retryOfRequestLogID:r,startTime:h}}getAPIList(e,t,r){return this.requestAPIList(t,{method:"get",path:e,...r})}requestAPIList(e,t){let r=this.makeRequest(t,null,void 0);return new ys(this,r,e)}async fetchWithTimeout(e,t,r,n){let{signal:o,method:i,...a}=t||{};o&&o.addEventListener("abort",()=>n.abort());let l=setTimeout(()=>n.abort(),r),p=globalThis.ReadableStream&&a.body instanceof globalThis.ReadableStream||typeof a.body=="object"&&a.body!==null&&Symbol.asyncIterator in a.body,b={signal:n.signal,...p?{duplex:"half"}:{},method:"GET",...a};i&&(b.method=i.toUpperCase());try{return await this.fetch.call(void 0,e,b)}finally{clearTimeout(l)}}async shouldRetry(e){let t=e.headers.get("x-should-retry");return t==="true"?!0:t==="false"?!1:e.status===408||e.status===409||e.status===429||e.status>=500}async retryRequest(e,t,r,n){let o,i=n?.get("retry-after-ms");if(i){let l=parseFloat(i);Number.isNaN(l)||(o=l)}let a=n?.get("retry-after");if(a&&!o){let l=parseFloat(a);Number.isNaN(l)?o=Date.parse(a)-Date.now():o=l*1e3}if(!(o&&0<=o&&o<60*1e3)){let l=e.maxRetries??this.maxRetries;o=this.calculateDefaultRetryTimeoutMillis(t,l)}return await ve(o),this.makeRequest(e,t-1,r)}calculateDefaultRetryTimeoutMillis(e,t){let o=t-e,i=Math.min(.5*Math.pow(2,o),8),a=1-Math.random()*.25;return i*a*1e3}async buildRequest(e,{retryCount:t=0}={}){let r={...e},{method:n,path:o,query:i,defaultBaseURL:a}=r,l=this.buildURL(o,i,a);"timeout"in r&&Wi("timeout",r.timeout),r.timeout=r.timeout??this.timeout;let{bodyHeaders:p,body:b}=this.buildBody({options:r}),h=await this.buildHeaders({options:e,method:n,bodyHeaders:p,retryCount:t});return{req:{method:n,headers:h,...r.signal&&{signal:r.signal},...globalThis.ReadableStream&&b instanceof globalThis.ReadableStream&&{duplex:"half"},...b&&{body:b},...this.fetchOptions??{},...r.fetchOptions??{}},url:l,timeout:r.timeout}}async buildHeaders({options:e,method:t,bodyHeaders:r,retryCount:n}){let o={};this.idempotencyHeader&&t!=="get"&&(e.idempotencyKey||(e.idempotencyKey=this.defaultIdempotencyKey()),o[this.idempotencyHeader]=e.idempotencyKey);let i=y([o,{Accept:"application/json","User-Agent":this.getUserAgent(),"X-Stainless-Retry-Count":String(n),...e.timeout?{"X-Stainless-Timeout":String(Math.trunc(e.timeout/1e3))}:{},...zi(),"OpenAI-Organization":this.organization,"OpenAI-Project":this.project},await this.authHeaders(e),this._options.defaultHeaders,r,e.headers]);return this.validateHeaders(i),i.values}buildBody({options:{body:e,headers:t}}){if(!e)return{bodyHeaders:void 0,body:void 0};let r=y([t]);return ArrayBuffer.isView(e)||e instanceof ArrayBuffer||e instanceof DataView||typeof e=="string"&&r.values.has("content-type")||globalThis.Blob&&e instanceof globalThis.Blob||e instanceof FormData||e instanceof URLSearchParams||globalThis.ReadableStream&&e instanceof globalThis.ReadableStream?{bodyHeaders:void 0,body:e}:typeof e=="object"&&(Symbol.asyncIterator in e||Symbol.iterator in e&&"next"in e&&typeof e.next=="function")?{bodyHeaders:void 0,body:an(e)}:d(this,$n,"f").call(this,{body:e,headers:r})}};ai=A,$n=new WeakMap,ii=new WeakSet,ja=function(){return this.baseURL!=="https://api.openai.com/v1"};A.OpenAI=ai;A.DEFAULT_TIMEOUT=6e5;A.OpenAIError=_;A.APIError=q;A.APIConnectionError=Ge;A.APIConnectionTimeoutError=Ve;A.APIUserAbortError=U;A.NotFoundError=Zt;A.ConflictError=er;A.RateLimitError=rr;A.BadRequestError=zt;A.AuthenticationError=Yt;A.InternalServerError=sr;A.PermissionDeniedError=Qt;A.UnprocessableEntityError=tr;A.InvalidWebhookSignatureError=we;A.toFile=gn;A.Completions=Ct;A.Chat=Qe;A.Embeddings=Mt;A.Files=Ft;A.Images=Bt;A.Audio=Se;A.Moderations=Ht;A.Models=Dt;A.FineTuning=be;A.Graders=it;A.VectorStores=Be;A.Webhooks=jt;A.Beta=ye;A.Batches=St;A.Uploads=lt;A.Responses=Le;A.Realtime=Ne;A.Conversations=nt;A.Evals=ot;A.Containers=st;A.Videos=Ut;function w(s,e,t,r,n){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?s!==e||!n:!e.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?n.call(s,t):n?n.value=t:e.set(s,t),t}function u(s,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?s!==e||!r:!e.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(s):r?r.value:e.get(s)}var li=function(){let{crypto:s}=globalThis;if(s?.randomUUID)return li=s.randomUUID.bind(s),s.randomUUID();let e=new Uint8Array(1),t=s?()=>s.getRandomValues(e)[0]:()=>Math.random()*255&255;return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,r=>(+r^t()&15>>+r/4).toString(16))};function De(s){return typeof s=="object"&&s!==null&&("name"in s&&s.name==="AbortError"||"message"in s&&String(s.message).includes("FetchRequestCanceledException"))}var Ts=s=>{if(s instanceof Error)return s;if(typeof s=="object"&&s!==null){try{if(Object.prototype.toString.call(s)==="[object Error]"){let e=new Error(s.message,s.cause?{cause:s.cause}:{});return s.stack&&(e.stack=s.stack),s.cause&&!e.cause&&(e.cause=s.cause),s.name&&(e.name=s.name),e}}catch{}try{return new Error(JSON.stringify(s))}catch{}}return new Error(s)};var I=class extends Error{},z=class s extends I{constructor(e,t,r,n){super(`${s.makeMessage(e,t,r)}`),this.status=e,this.headers=n,this.requestID=n?.get("request-id"),this.error=t}static makeMessage(e,t,r){let n=t?.message?typeof t.message=="string"?t.message:JSON.stringify(t.message):t?JSON.stringify(t):r;return e&&n?`${e} ${n}`:e?`${e} status code (no body)`:n||"(no status code or body)"}static generate(e,t,r,n){if(!e||!n)return new ct({message:r,cause:Ts(t)});let o=t;return e===400?new Ur(e,o,r,n):e===401?new jr(e,o,r,n):e===403?new qr(e,o,r,n):e===404?new Wr(e,o,r,n):e===409?new Kr(e,o,r,n):e===422?new Jr(e,o,r,n):e===429?new Gr(e,o,r,n):e>=500?new Vr(e,o,r,n):new s(e,o,r,n)}},ee=class extends z{constructor({message:e}={}){super(void 0,void 0,e||"Request was aborted.",void 0)}},ct=class extends z{constructor({message:e,cause:t}){super(void 0,void 0,e||"Connection error.",void 0),t&&(this.cause=t)}},Hr=class extends ct{constructor({message:e}={}){super({message:e??"Request timed out."})}},Ur=class extends z{},jr=class extends z{},qr=class extends z{},Wr=class extends z{},Kr=class extends z{},Jr=class extends z{},Gr=class extends z{},Vr=class extends z{};var Ed=/^[a-z][a-z0-9+.-]*:/i,qa=s=>Ed.test(s),ci=s=>(ci=Array.isArray,ci(s)),di=ci;function Nn(s){return typeof s!="object"?{}:s??{}}function Wa(s){if(!s)return!0;for(let e in s)return!1;return!0}function Ka(s,e){return Object.prototype.hasOwnProperty.call(s,e)}var Ja=(s,e)=>{if(typeof e!="number"||!Number.isInteger(e))throw new I(`${s} must be an integer`);if(e<0)throw new I(`${s} must be a positive integer`);return e};var Ln=s=>{try{return JSON.parse(s)}catch{return}};var Ga=s=>new Promise(e=>setTimeout(e,s));var dt="0.71.0";var Ya=()=>typeof window<"u"&&typeof window.document<"u"&&typeof navigator<"u";function Rd(){return typeof Deno<"u"&&Deno.build!=null?"deno":typeof EdgeRuntime<"u"?"edge":Object.prototype.toString.call(typeof globalThis.process<"u"?globalThis.process:0)==="[object process]"?"node":"unknown"}var kd=()=>{let s=Rd();if(s==="deno")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":dt,"X-Stainless-OS":Xa(Deno.build.os),"X-Stainless-Arch":Va(Deno.build.arch),"X-Stainless-Runtime":"deno","X-Stainless-Runtime-Version":typeof Deno.version=="string"?Deno.version:Deno.version?.deno??"unknown"};if(typeof EdgeRuntime<"u")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":dt,"X-Stainless-OS":"Unknown","X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":"edge","X-Stainless-Runtime-Version":globalThis.process.version};if(s==="node")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":dt,"X-Stainless-OS":Xa(globalThis.process.platform??"unknown"),"X-Stainless-Arch":Va(globalThis.process.arch??"unknown"),"X-Stainless-Runtime":"node","X-Stainless-Runtime-Version":globalThis.process.version??"unknown"};let e=Cd();return e?{"X-Stainless-Lang":"js","X-Stainless-Package-Version":dt,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":`browser:${e.browser}`,"X-Stainless-Runtime-Version":e.version}:{"X-Stainless-Lang":"js","X-Stainless-Package-Version":dt,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":"unknown","X-Stainless-Runtime-Version":"unknown"}};function Cd(){if(typeof navigator>"u"||!navigator)return null;let s=[{key:"edge",pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"chrome",pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"firefox",pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"safari",pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}];for(let{key:e,pattern:t}of s){let r=t.exec(navigator.userAgent);if(r){let n=r[1]||0,o=r[2]||0,i=r[3]||0;return{browser:e,version:`${n}.${o}.${i}`}}}return null}var Va=s=>s==="x32"?"x32":s==="x86_64"||s==="x64"?"x64":s==="arm"?"arm":s==="aarch64"||s==="arm64"?"arm64":s?`other:${s}`:"unknown",Xa=s=>(s=s.toLowerCase(),s.includes("ios")?"iOS":s==="android"?"Android":s==="darwin"?"MacOS":s==="win32"?"Windows":s==="freebsd"?"FreeBSD":s==="openbsd"?"OpenBSD":s==="linux"?"Linux":s?`Other:${s}`:"Unknown"),za,Qa=()=>za??(za=kd());function Za(){if(typeof fetch<"u")return fetch;throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new Anthropic({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")}function ui(...s){let e=globalThis.ReadableStream;if(typeof e>"u")throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");return new e(...s)}function Bn(s){let e=Symbol.asyncIterator in s?s[Symbol.asyncIterator]():s[Symbol.iterator]();return ui({start(){},async pull(t){let{done:r,value:n}=await e.next();r?t.close():t.enqueue(n)},async cancel(){await e.return?.()}})}function Ms(s){if(s[Symbol.asyncIterator])return s;let e=s.getReader();return{async next(){try{let t=await e.read();return t?.done&&e.releaseLock(),t}catch(t){throw e.releaseLock(),t}},async return(){let t=e.cancel();return e.releaseLock(),await t,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}async function el(s){if(s===null||typeof s!="object")return;if(s[Symbol.asyncIterator]){await s[Symbol.asyncIterator]().return?.();return}let e=s.getReader(),t=e.cancel();e.releaseLock(),await t}var tl=({headers:s,body:e})=>({bodyHeaders:{"content-type":"application/json"},body:JSON.stringify(e)});function nl(s){let e=0;for(let n of s)e+=n.length;let t=new Uint8Array(e),r=0;for(let n of s)t.set(n,r),r+=n.length;return t}var rl;function Os(s){let e;return(rl??(e=new globalThis.TextEncoder,rl=e.encode.bind(e)))(s)}var sl;function pi(s){let e;return(sl??(e=new globalThis.TextDecoder,sl=e.decode.bind(e)))(s)}var ce,de,He=class{constructor(){ce.set(this,void 0),de.set(this,void 0),w(this,ce,new Uint8Array,"f"),w(this,de,null,"f")}decode(e){if(e==null)return[];let t=e instanceof ArrayBuffer?new Uint8Array(e):typeof e=="string"?Os(e):e;w(this,ce,nl([u(this,ce,"f"),t]),"f");let r=[],n;for(;(n=Od(u(this,ce,"f"),u(this,de,"f")))!=null;){if(n.carriage&&u(this,de,"f")==null){w(this,de,n.index,"f");continue}if(u(this,de,"f")!=null&&(n.index!==u(this,de,"f")+1||n.carriage)){r.push(pi(u(this,ce,"f").subarray(0,u(this,de,"f")-1))),w(this,ce,u(this,ce,"f").subarray(u(this,de,"f")),"f"),w(this,de,null,"f");continue}let o=u(this,de,"f")!==null?n.preceding-1:n.preceding,i=pi(u(this,ce,"f").subarray(0,o));r.push(i),w(this,ce,u(this,ce,"f").subarray(n.index),"f"),w(this,de,null,"f")}return r}flush(){return u(this,ce,"f").length?this.decode(`
`):[]}};ce=new WeakMap,de=new WeakMap;He.NEWLINE_CHARS=new Set([`
`,"\r"]);He.NEWLINE_REGEXP=/\r\n|[\n\r]/g;function Od(s,e){for(let n=e??0;n<s.length;n++){if(s[n]===10)return{preceding:n,index:n+1,carriage:!1};if(s[n]===13)return{preceding:n,index:n+1,carriage:!0}}return null}function ol(s){for(let r=0;r<s.length-1;r++){if(s[r]===10&&s[r+1]===10||s[r]===13&&s[r+1]===13)return r+2;if(s[r]===13&&s[r+1]===10&&r+3<s.length&&s[r+2]===13&&s[r+3]===10)return r+4}return-1}var Hn={off:0,error:200,warn:300,info:400,debug:500},fi=(s,e,t)=>{if(s){if(Ka(Hn,s))return s;Y(t).warn(`${e} was set to ${JSON.stringify(s)}, expected one of ${JSON.stringify(Object.keys(Hn))}`)}};function Fs(){}function Dn(s,e,t){return!e||Hn[s]>Hn[t]?Fs:e[s].bind(e)}var Fd={error:Fs,warn:Fs,info:Fs,debug:Fs},il=new WeakMap;function Y(s){let e=s.logger,t=s.logLevel??"off";if(!e)return Fd;let r=il.get(e);if(r&&r[0]===t)return r[1];let n={error:Dn("error",e,t),warn:Dn("warn",e,t),info:Dn("info",e,t),debug:Dn("debug",e,t)};return il.set(e,[t,n]),n}var Ue=s=>(s.options&&(s.options={...s.options},delete s.options.headers),s.headers&&(s.headers=Object.fromEntries((s.headers instanceof Headers?[...s.headers]:Object.entries(s.headers)).map(([e,t])=>[e,e.toLowerCase()==="x-api-key"||e.toLowerCase()==="authorization"||e.toLowerCase()==="cookie"||e.toLowerCase()==="set-cookie"?"***":t]))),"retryOfRequestLogID"in s&&(s.retryOfRequestLogID&&(s.retryOf=s.retryOfRequestLogID),delete s.retryOfRequestLogID),s);var $s,Ee=class s{constructor(e,t,r){this.iterator=e,$s.set(this,void 0),this.controller=t,w(this,$s,r,"f")}static fromSSEResponse(e,t,r){let n=!1,o=r?Y(r):console;async function*i(){if(n)throw new I("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");n=!0;let a=!1;try{for await(let l of $d(e,t)){if(l.event==="completion")try{yield JSON.parse(l.data)}catch(p){throw o.error("Could not parse message into JSON:",l.data),o.error("From chunk:",l.raw),p}if(l.event==="message_start"||l.event==="message_delta"||l.event==="message_stop"||l.event==="content_block_start"||l.event==="content_block_delta"||l.event==="content_block_stop")try{yield JSON.parse(l.data)}catch(p){throw o.error("Could not parse message into JSON:",l.data),o.error("From chunk:",l.raw),p}if(l.event!=="ping"&&l.event==="error")throw new z(void 0,Ln(l.data)??l.data,void 0,e.headers)}a=!0}catch(l){if(De(l))return;throw l}finally{a||t.abort()}}return new s(i,t,r)}static fromReadableStream(e,t,r){let n=!1;async function*o(){let a=new He,l=Ms(e);for await(let p of l)for(let b of a.decode(p))yield b;for(let p of a.flush())yield p}async function*i(){if(n)throw new I("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");n=!0;let a=!1;try{for await(let l of o())a||l&&(yield JSON.parse(l));a=!0}catch(l){if(De(l))return;throw l}finally{a||t.abort()}}return new s(i,t,r)}[($s=new WeakMap,Symbol.asyncIterator)](){return this.iterator()}tee(){let e=[],t=[],r=this.iterator(),n=o=>({next:()=>{if(o.length===0){let i=r.next();e.push(i),t.push(i)}return o.shift()}});return[new s(()=>n(e),this.controller,u(this,$s,"f")),new s(()=>n(t),this.controller,u(this,$s,"f"))]}toReadableStream(){let e=this,t;return ui({async start(){t=e[Symbol.asyncIterator]()},async pull(r){try{let{value:n,done:o}=await t.next();if(o)return r.close();let i=Os(JSON.stringify(n)+`
`);r.enqueue(i)}catch(n){r.error(n)}},async cancel(){await t.return?.()}})}};async function*$d(s,e){if(!s.body)throw e.abort(),typeof globalThis.navigator<"u"&&globalThis.navigator.product==="ReactNative"?new I("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api"):new I("Attempted to iterate over a response with no body");let t=new hi,r=new He,n=Ms(s.body);for await(let o of Nd(n))for(let i of r.decode(o)){let a=t.decode(i);a&&(yield a)}for(let o of r.flush()){let i=t.decode(o);i&&(yield i)}}async function*Nd(s){let e=new Uint8Array;for await(let t of s){if(t==null)continue;let r=t instanceof ArrayBuffer?new Uint8Array(t):typeof t=="string"?Os(t):t,n=new Uint8Array(e.length+r.length);n.set(e),n.set(r,e.length),e=n;let o;for(;(o=ol(e))!==-1;)yield e.slice(0,o),e=e.slice(o)}e.length>0&&(yield e)}var hi=class{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(e){if(e.endsWith("\r")&&(e=e.substring(0,e.length-1)),!e){if(!this.event&&!this.data.length)return null;let o={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],o}if(this.chunks.push(e),e.startsWith(":"))return null;let[t,r,n]=Ld(e,":");return n.startsWith(" ")&&(n=n.substring(1)),t==="event"?this.event=n:t==="data"&&this.data.push(n),null}};function Ld(s,e){let t=s.indexOf(e);return t!==-1?[s.substring(0,t),e,s.substring(t+e.length)]:[s,"",""]}async function Un(s,e){let{response:t,requestLogID:r,retryOfRequestLogID:n,startTime:o}=e,i=await(async()=>{if(e.options.stream)return Y(s).debug("response",t.status,t.url,t.headers,t.body),e.options.__streamClass?e.options.__streamClass.fromSSEResponse(t,e.controller):Ee.fromSSEResponse(t,e.controller);if(t.status===204)return null;if(e.options.__binaryResponse)return t;let l=t.headers.get("content-type")?.split(";")[0]?.trim();if(l?.includes("application/json")||l?.endsWith("+json")){let h=await t.json();return mi(h,t)}return await t.text()})();return Y(s).debug(`[${r}] response parsed`,Ue({retryOfRequestLogID:n,url:t.url,status:t.status,body:i,durationMs:Date.now()-o})),i}function mi(s,e){return!s||typeof s!="object"||Array.isArray(s)?s:Object.defineProperty(s,"_request_id",{value:e.headers.get("request-id"),enumerable:!1})}var Ns,qt=class s extends Promise{constructor(e,t,r=Un){super(n=>{n(null)}),this.responsePromise=t,this.parseResponse=r,Ns.set(this,void 0),w(this,Ns,e,"f")}_thenUnwrap(e){return new s(u(this,Ns,"f"),this.responsePromise,async(t,r)=>mi(e(await this.parseResponse(t,r),r),r.response))}asResponse(){return this.responsePromise.then(e=>e.response)}async withResponse(){let[e,t]=await Promise.all([this.parse(),this.asResponse()]);return{data:e,response:t,request_id:t.headers.get("request-id")}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(e=>this.parseResponse(u(this,Ns,"f"),e))),this.parsedPromise}then(e,t){return this.parse().then(e,t)}catch(e){return this.parse().catch(e)}finally(e){return this.parse().finally(e)}};Ns=new WeakMap;var jn,qn=class{constructor(e,t,r,n){jn.set(this,void 0),w(this,jn,e,"f"),this.options=n,this.response=t,this.body=r}hasNextPage(){return this.getPaginatedItems().length?this.nextPageRequestOptions()!=null:!1}async getNextPage(){let e=this.nextPageRequestOptions();if(!e)throw new I("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");return await u(this,jn,"f").requestAPIList(this.constructor,e)}async*iterPages(){let e=this;for(yield e;e.hasNextPage();)e=await e.getNextPage(),yield e}async*[(jn=new WeakMap,Symbol.asyncIterator)](){for await(let e of this.iterPages())for(let t of e.getPaginatedItems())yield t}},Ls=class extends qt{constructor(e,t,r){super(e,t,async(n,o)=>new r(n,o.response,await Un(n,o),o.options))}async*[Symbol.asyncIterator](){let e=await this;for await(let t of e)yield t}},pe=class extends qn{constructor(e,t,r,n){super(e,t,r,n),this.data=r.data||[],this.has_more=r.has_more||!1,this.first_id=r.first_id||null,this.last_id=r.last_id||null}getPaginatedItems(){return this.data??[]}hasNextPage(){return this.has_more===!1?!1:super.hasNextPage()}nextPageRequestOptions(){if(this.options.query?.before_id){let t=this.first_id;return t?{...this.options,query:{...Nn(this.options.query),before_id:t}}:null}let e=this.last_id;return e?{...this.options,query:{...Nn(this.options.query),after_id:e}}:null}};var Xr=class extends qn{constructor(e,t,r,n){super(e,t,r,n),this.data=r.data||[],this.has_more=r.has_more||!1,this.next_page=r.next_page||null}getPaginatedItems(){return this.data??[]}hasNextPage(){return this.has_more===!1?!1:super.hasNextPage()}nextPageRequestOptions(){let e=this.next_page;return e?{...this.options,query:{...Nn(this.options.query),page:e}}:null}};var yi=()=>{if(typeof File>"u"){let{process:s}=globalThis,e=typeof s?.versions?.node=="string"&&parseInt(s.versions.node.split("."))<20;throw new Error("`File` is not defined as a global, which is required for file uploads."+(e?" Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`.":""))}};function Wt(s,e,t){return yi(),new File(s,e??"unknown_file",t)}function Bs(s){return(typeof s=="object"&&s!==null&&("name"in s&&s.name&&String(s.name)||"url"in s&&s.url&&String(s.url)||"filename"in s&&s.filename&&String(s.filename)||"path"in s&&s.path&&String(s.path))||"").split(/[\\/]/).pop()||void 0}var bi=s=>s!=null&&typeof s=="object"&&typeof s[Symbol.asyncIterator]=="function";var zr=async(s,e)=>({...s,body:await Hd(s.body,e)}),al=new WeakMap;function Dd(s){let e=typeof s=="function"?s:s.fetch,t=al.get(e);if(t)return t;let r=(async()=>{try{let n="Response"in e?e.Response:(await e("data:,")).constructor,o=new FormData;return o.toString()!==await new n(o).text()}catch{return!0}})();return al.set(e,r),r}var Hd=async(s,e)=>{if(!await Dd(e))throw new TypeError("The provided fetch function does not support file uploads with the current global FormData class.");let t=new FormData;return await Promise.all(Object.entries(s||{}).map(([r,n])=>gi(t,r,n))),t},Ud=s=>s instanceof Blob&&"name"in s;var gi=async(s,e,t)=>{if(t!==void 0){if(t==null)throw new TypeError(`Received null for "${e}"; to pass null in FormData, you must use the string 'null'`);if(typeof t=="string"||typeof t=="number"||typeof t=="boolean")s.append(e,String(t));else if(t instanceof Response){let r={},n=t.headers.get("Content-Type");n&&(r={type:n}),s.append(e,Wt([await t.blob()],Bs(t),r))}else if(bi(t))s.append(e,Wt([await new Response(Bn(t)).blob()],Bs(t)));else if(Ud(t))s.append(e,Wt([t],Bs(t),{type:t.type}));else if(Array.isArray(t))await Promise.all(t.map(r=>gi(s,e+"[]",r)));else if(typeof t=="object")await Promise.all(Object.entries(t).map(([r,n])=>gi(s,`${e}[${r}]`,n)));else throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${t} instead`)}};var ll=s=>s!=null&&typeof s=="object"&&typeof s.size=="number"&&typeof s.type=="string"&&typeof s.text=="function"&&typeof s.slice=="function"&&typeof s.arrayBuffer=="function",jd=s=>s!=null&&typeof s=="object"&&typeof s.name=="string"&&typeof s.lastModified=="number"&&ll(s),qd=s=>s!=null&&typeof s=="object"&&typeof s.url=="string"&&typeof s.blob=="function";async function Wn(s,e,t){if(yi(),s=await s,e||(e=Bs(s)),jd(s))return s instanceof File&&e==null&&t==null?s:Wt([await s.arrayBuffer()],e??s.name,{type:s.type,lastModified:s.lastModified,...t});if(qd(s)){let n=await s.blob();return e||(e=new URL(s.url).pathname.split(/[\\/]/).pop()),Wt(await _i(n),e,t)}let r=await _i(s);if(!t?.type){let n=r.find(o=>typeof o=="object"&&"type"in o&&o.type);typeof n=="string"&&(t={...t,type:n})}return Wt(r,e,t)}async function _i(s){let e=[];if(typeof s=="string"||ArrayBuffer.isView(s)||s instanceof ArrayBuffer)e.push(s);else if(ll(s))e.push(s instanceof Blob?s:await s.arrayBuffer());else if(bi(s))for await(let t of s)e.push(...await _i(t));else{let t=s?.constructor?.name;throw new Error(`Unexpected data type: ${typeof s}${t?`; constructor: ${t}`:""}${Wd(s)}`)}return e}function Wd(s){return typeof s!="object"||s===null?"":`; props: [${Object.getOwnPropertyNames(s).map(t=>`"${t}"`).join(", ")}]`}var F=class{constructor(e){this._client=e}};var cl=Symbol.for("brand.privateNullableHeaders");function*Jd(s){if(!s)return;if(cl in s){let{values:r,nulls:n}=s;yield*r.entries();for(let o of n)yield[o,null];return}let e=!1,t;s instanceof Headers?t=s.entries():di(s)?t=s:(e=!0,t=Object.entries(s??{}));for(let r of t){let n=r[0];if(typeof n!="string")throw new TypeError("expected header name to be a string");let o=di(r[1])?r[1]:[r[1]],i=!1;for(let a of o)a!==void 0&&(e&&!i&&(i=!0,yield[n,null]),yield[n,a])}}var E=s=>{let e=new Headers,t=new Set;for(let r of s){let n=new Set;for(let[o,i]of Jd(r)){let a=o.toLowerCase();n.has(a)||(e.delete(o),n.add(a)),i===null?(e.delete(o),t.add(a)):(e.append(o,i),t.delete(a))}}return{[cl]:!0,values:e,nulls:t}};function ul(s){return s.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g,encodeURIComponent)}var dl=Object.freeze(Object.create(null)),Gd=(s=ul)=>function(t,...r){if(t.length===1)return t[0];let n=!1,o=[],i=t.reduce((b,h,g)=>{/[?#]/.test(h)&&(n=!0);let c=r[g],x=(n?encodeURIComponent:s)(""+c);return g!==r.length&&(c==null||typeof c=="object"&&c.toString===Object.getPrototypeOf(Object.getPrototypeOf(c.hasOwnProperty??dl)??dl)?.toString)&&(x=c+"",o.push({start:b.length+h.length,length:x.length,error:`Value of type ${Object.prototype.toString.call(c).slice(8,-1)} is not a valid path parameter`})),b+h+(g===r.length?"":x)},""),a=i.split(/[?#]/,1)[0],l=/(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi,p;for(;(p=l.exec(a))!==null;)o.push({start:p.index,length:p[0].length,error:`Value "${p[0]}" can't be safely passed as a path parameter`});if(o.sort((b,h)=>b.start-h.start),o.length>0){let b=0,h=o.reduce((g,c)=>{let x=" ".repeat(c.start-b),P="^".repeat(c.length);return b=c.start+c.length,g+x+P},"");throw new I(`Path parameters result in path with invalid segments:
${o.map(g=>g.error).join(`
`)}
${i}
${h}`)}return i},$=Gd(ul);var Yr=class extends F{list(e={},t){let{betas:r,...n}=e??{};return this._client.getAPIList("/v1/files",pe,{query:n,...t,headers:E([{"anthropic-beta":[...r??[],"files-api-2025-04-14"].toString()},t?.headers])})}delete(e,t={},r){let{betas:n}=t??{};return this._client.delete($`/v1/files/${e}`,{...r,headers:E([{"anthropic-beta":[...n??[],"files-api-2025-04-14"].toString()},r?.headers])})}download(e,t={},r){let{betas:n}=t??{};return this._client.get($`/v1/files/${e}/content`,{...r,headers:E([{"anthropic-beta":[...n??[],"files-api-2025-04-14"].toString(),Accept:"application/binary"},r?.headers]),__binaryResponse:!0})}retrieveMetadata(e,t={},r){let{betas:n}=t??{};return this._client.get($`/v1/files/${e}`,{...r,headers:E([{"anthropic-beta":[...n??[],"files-api-2025-04-14"].toString()},r?.headers])})}upload(e,t){let{betas:r,...n}=e;return this._client.post("/v1/files",zr({body:n,...t,headers:E([{"anthropic-beta":[...r??[],"files-api-2025-04-14"].toString()},t?.headers])},this._client))}};var Qr=class extends F{retrieve(e,t={},r){let{betas:n}=t??{};return this._client.get($`/v1/models/${e}?beta=true`,{...r,headers:E([{...n?.toString()!=null?{"anthropic-beta":n?.toString()}:void 0},r?.headers])})}list(e={},t){let{betas:r,...n}=e??{};return this._client.getAPIList("/v1/models?beta=true",pe,{query:n,...t,headers:E([{...r?.toString()!=null?{"anthropic-beta":r?.toString()}:void 0},t?.headers])})}};var Kn={"claude-opus-4-20250514":8192,"claude-opus-4-0":8192,"claude-4-opus-20250514":8192,"anthropic.claude-opus-4-20250514-v1:0":8192,"claude-opus-4@20250514":8192,"claude-opus-4-1-20250805":8192,"anthropic.claude-opus-4-1-20250805-v1:0":8192,"claude-opus-4-1@20250805":8192};function wi(s,e){return!e||!("parse"in(e.output_format??{}))?{...s,content:s.content.map(t=>t.type==="text"?{...t,parsed:null}:t),parsed_output:null}:vi(s,e)}function vi(s,e){let t=null,r=s.content.map(n=>{if(n.type==="text"){let o=zd(e,n.text);return t===null&&(t=o),{...n,parsed:o}}return n});return{...s,content:r,parsed_output:t}}function zd(s,e){if(s.output_format?.type!=="json_schema")return null;try{return"parse"in s.output_format?s.output_format.parse(e):JSON.parse(e)}catch(t){throw new I(`Failed to parse structured output: ${t}`)}}var Yd=s=>{let e=0,t=[];for(;e<s.length;){let r=s[e];if(r==="\\"){e++;continue}if(r==="{"){t.push({type:"brace",value:"{"}),e++;continue}if(r==="}"){t.push({type:"brace",value:"}"}),e++;continue}if(r==="["){t.push({type:"paren",value:"["}),e++;continue}if(r==="]"){t.push({type:"paren",value:"]"}),e++;continue}if(r===":"){t.push({type:"separator",value:":"}),e++;continue}if(r===","){t.push({type:"delimiter",value:","}),e++;continue}if(r==='"'){let a="",l=!1;for(r=s[++e];r!=='"';){if(e===s.length){l=!0;break}if(r==="\\"){if(e++,e===s.length){l=!0;break}a+=r+s[e],r=s[++e]}else a+=r,r=s[++e]}r=s[++e],l||t.push({type:"string",value:a});continue}if(r&&/\s/.test(r)){e++;continue}let o=/[0-9]/;if(r&&o.test(r)||r==="-"||r==="."){let a="";for(r==="-"&&(a+=r,r=s[++e]);r&&o.test(r)||r===".";)a+=r,r=s[++e];t.push({type:"number",value:a});continue}let i=/[a-z]/i;if(r&&i.test(r)){let a="";for(;r&&i.test(r)&&e!==s.length;)a+=r,r=s[++e];if(a=="true"||a=="false"||a==="null")t.push({type:"name",value:a});else{e++;continue}continue}e++}return t},Zr=s=>{if(s.length===0)return s;let e=s[s.length-1];switch(e.type){case"separator":return s=s.slice(0,s.length-1),Zr(s);break;case"number":let t=e.value[e.value.length-1];if(t==="."||t==="-")return s=s.slice(0,s.length-1),Zr(s);case"string":let r=s[s.length-2];if(r?.type==="delimiter")return s=s.slice(0,s.length-1),Zr(s);if(r?.type==="brace"&&r.value==="{")return s=s.slice(0,s.length-1),Zr(s);break;case"delimiter":return s=s.slice(0,s.length-1),Zr(s);break}return s},Qd=s=>{let e=[];return s.map(t=>{t.type==="brace"&&(t.value==="{"?e.push("}"):e.splice(e.lastIndexOf("}"),1)),t.type==="paren"&&(t.value==="["?e.push("]"):e.splice(e.lastIndexOf("]"),1))}),e.length>0&&e.reverse().map(t=>{t==="}"?s.push({type:"brace",value:"}"}):t==="]"&&s.push({type:"paren",value:"]"})}),s},Zd=s=>{let e="";return s.map(t=>{switch(t.type){case"string":e+='"'+t.value+'"';break;default:e+=t.value;break}}),e},Jn=s=>JSON.parse(Zd(Qd(Zr(Yd(s)))));var fe,ut,es,Ds,Gn,Hs,Us,Vn,js,je,qs,Xn,zn,ts,Yn,Qn,xi,pl,Zn,Pi,Ii,Si,fl,hl="__json_buf";function ml(s){return s.type==="tool_use"||s.type==="server_tool_use"||s.type==="mcp_tool_use"}var eo=class s{constructor(e){fe.add(this),this.messages=[],this.receivedMessages=[],ut.set(this,void 0),es.set(this,null),this.controller=new AbortController,Ds.set(this,void 0),Gn.set(this,()=>{}),Hs.set(this,()=>{}),Us.set(this,void 0),Vn.set(this,()=>{}),js.set(this,()=>{}),je.set(this,{}),qs.set(this,!1),Xn.set(this,!1),zn.set(this,!1),ts.set(this,!1),Yn.set(this,void 0),Qn.set(this,void 0),Zn.set(this,t=>{if(w(this,Xn,!0,"f"),De(t)&&(t=new ee),t instanceof ee)return w(this,zn,!0,"f"),this._emit("abort",t);if(t instanceof I)return this._emit("error",t);if(t instanceof Error){let r=new I(t.message);return r.cause=t,this._emit("error",r)}return this._emit("error",new I(String(t)))}),w(this,Ds,new Promise((t,r)=>{w(this,Gn,t,"f"),w(this,Hs,r,"f")}),"f"),w(this,Us,new Promise((t,r)=>{w(this,Vn,t,"f"),w(this,js,r,"f")}),"f"),u(this,Ds,"f").catch(()=>{}),u(this,Us,"f").catch(()=>{}),w(this,es,e,"f")}get response(){return u(this,Yn,"f")}get request_id(){return u(this,Qn,"f")}async withResponse(){let e=await u(this,Ds,"f");if(!e)throw new Error("Could not resolve a `Response` object");return{data:this,response:e,request_id:e.headers.get("request-id")}}static fromReadableStream(e){let t=new s(null);return t._run(()=>t._fromReadableStream(e)),t}static createMessage(e,t,r){let n=new s(t);for(let o of t.messages)n._addMessageParam(o);return w(n,es,{...t,stream:!0},"f"),n._run(()=>n._createMessage(e,{...t,stream:!0},{...r,headers:{...r?.headers,"X-Stainless-Helper-Method":"stream"}})),n}_run(e){e().then(()=>{this._emitFinal(),this._emit("end")},u(this,Zn,"f"))}_addMessageParam(e){this.messages.push(e)}_addMessage(e,t=!0){this.receivedMessages.push(e),t&&this._emit("message",e)}async _createMessage(e,t,r){let n=r?.signal,o;n&&(n.aborted&&this.controller.abort(),o=this.controller.abort.bind(this.controller),n.addEventListener("abort",o));try{u(this,fe,"m",Pi).call(this);let{response:i,data:a}=await e.create({...t,stream:!0},{...r,signal:this.controller.signal}).withResponse();this._connected(i);for await(let l of a)u(this,fe,"m",Ii).call(this,l);if(a.controller.signal?.aborted)throw new ee;u(this,fe,"m",Si).call(this)}finally{n&&o&&n.removeEventListener("abort",o)}}_connected(e){this.ended||(w(this,Yn,e,"f"),w(this,Qn,e?.headers.get("request-id"),"f"),u(this,Gn,"f").call(this,e),this._emit("connect"))}get ended(){return u(this,qs,"f")}get errored(){return u(this,Xn,"f")}get aborted(){return u(this,zn,"f")}abort(){this.controller.abort()}on(e,t){return(u(this,je,"f")[e]||(u(this,je,"f")[e]=[])).push({listener:t}),this}off(e,t){let r=u(this,je,"f")[e];if(!r)return this;let n=r.findIndex(o=>o.listener===t);return n>=0&&r.splice(n,1),this}once(e,t){return(u(this,je,"f")[e]||(u(this,je,"f")[e]=[])).push({listener:t,once:!0}),this}emitted(e){return new Promise((t,r)=>{w(this,ts,!0,"f"),e!=="error"&&this.once("error",r),this.once(e,t)})}async done(){w(this,ts,!0,"f"),await u(this,Us,"f")}get currentMessage(){return u(this,ut,"f")}async finalMessage(){return await this.done(),u(this,fe,"m",xi).call(this)}async finalText(){return await this.done(),u(this,fe,"m",pl).call(this)}_emit(e,...t){if(u(this,qs,"f"))return;e==="end"&&(w(this,qs,!0,"f"),u(this,Vn,"f").call(this));let r=u(this,je,"f")[e];if(r&&(u(this,je,"f")[e]=r.filter(n=>!n.once),r.forEach(({listener:n})=>n(...t))),e==="abort"){let n=t[0];!u(this,ts,"f")&&!r?.length&&Promise.reject(n),u(this,Hs,"f").call(this,n),u(this,js,"f").call(this,n),this._emit("end");return}if(e==="error"){let n=t[0];!u(this,ts,"f")&&!r?.length&&Promise.reject(n),u(this,Hs,"f").call(this,n),u(this,js,"f").call(this,n),this._emit("end")}}_emitFinal(){this.receivedMessages.at(-1)&&this._emit("finalMessage",u(this,fe,"m",xi).call(this))}async _fromReadableStream(e,t){let r=t?.signal,n;r&&(r.aborted&&this.controller.abort(),n=this.controller.abort.bind(this.controller),r.addEventListener("abort",n));try{u(this,fe,"m",Pi).call(this),this._connected(null);let o=Ee.fromReadableStream(e,this.controller);for await(let i of o)u(this,fe,"m",Ii).call(this,i);if(o.controller.signal?.aborted)throw new ee;u(this,fe,"m",Si).call(this)}finally{r&&n&&r.removeEventListener("abort",n)}}[(ut=new WeakMap,es=new WeakMap,Ds=new WeakMap,Gn=new WeakMap,Hs=new WeakMap,Us=new WeakMap,Vn=new WeakMap,js=new WeakMap,je=new WeakMap,qs=new WeakMap,Xn=new WeakMap,zn=new WeakMap,ts=new WeakMap,Yn=new WeakMap,Qn=new WeakMap,Zn=new WeakMap,fe=new WeakSet,xi=function(){if(this.receivedMessages.length===0)throw new I("stream ended without producing a Message with role=assistant");return this.receivedMessages.at(-1)},pl=function(){if(this.receivedMessages.length===0)throw new I("stream ended without producing a Message with role=assistant");let t=this.receivedMessages.at(-1).content.filter(r=>r.type==="text").map(r=>r.text);if(t.length===0)throw new I("stream ended without producing a content block with type=text");return t.join(" ")},Pi=function(){this.ended||w(this,ut,void 0,"f")},Ii=function(t){if(this.ended)return;let r=u(this,fe,"m",fl).call(this,t);switch(this._emit("streamEvent",t,r),t.type){case"content_block_delta":{let n=r.content.at(-1);switch(t.delta.type){case"text_delta":{n.type==="text"&&this._emit("text",t.delta.text,n.text||"");break}case"citations_delta":{n.type==="text"&&this._emit("citation",t.delta.citation,n.citations??[]);break}case"input_json_delta":{ml(n)&&n.input&&this._emit("inputJson",t.delta.partial_json,n.input);break}case"thinking_delta":{n.type==="thinking"&&this._emit("thinking",t.delta.thinking,n.thinking);break}case"signature_delta":{n.type==="thinking"&&this._emit("signature",n.signature);break}default:t.delta}break}case"message_stop":{this._addMessageParam(r),this._addMessage(wi(r,u(this,es,"f")),!0);break}case"content_block_stop":{this._emit("contentBlock",r.content.at(-1));break}case"message_start":{w(this,ut,r,"f");break}case"content_block_start":case"message_delta":break}},Si=function(){if(this.ended)throw new I("stream has ended, this shouldn't happen");let t=u(this,ut,"f");if(!t)throw new I("request ended without sending any chunks");return w(this,ut,void 0,"f"),wi(t,u(this,es,"f"))},fl=function(t){let r=u(this,ut,"f");if(t.type==="message_start"){if(r)throw new I(`Unexpected event order, got ${t.type} before receiving "message_stop"`);return t.message}if(!r)throw new I(`Unexpected event order, got ${t.type} before "message_start"`);switch(t.type){case"message_stop":return r;case"message_delta":return r.container=t.delta.container,r.stop_reason=t.delta.stop_reason,r.stop_sequence=t.delta.stop_sequence,r.usage.output_tokens=t.usage.output_tokens,r.context_management=t.context_management,t.usage.input_tokens!=null&&(r.usage.input_tokens=t.usage.input_tokens),t.usage.cache_creation_input_tokens!=null&&(r.usage.cache_creation_input_tokens=t.usage.cache_creation_input_tokens),t.usage.cache_read_input_tokens!=null&&(r.usage.cache_read_input_tokens=t.usage.cache_read_input_tokens),t.usage.server_tool_use!=null&&(r.usage.server_tool_use=t.usage.server_tool_use),r;case"content_block_start":return r.content.push(t.content_block),r;case"content_block_delta":{let n=r.content.at(t.index);switch(t.delta.type){case"text_delta":{n?.type==="text"&&(r.content[t.index]={...n,text:(n.text||"")+t.delta.text});break}case"citations_delta":{n?.type==="text"&&(r.content[t.index]={...n,citations:[...n.citations??[],t.delta.citation]});break}case"input_json_delta":{if(n&&ml(n)){let o=n[hl]||"";o+=t.delta.partial_json;let i={...n};if(Object.defineProperty(i,hl,{value:o,enumerable:!1,writable:!0}),o)try{i.input=Jn(o)}catch(a){let l=new I(`Unable to parse tool parameter JSON from model. Please retry your request or adjust your prompt. Error: ${a}. JSON: ${o}`);u(this,Zn,"f").call(this,l)}r.content[t.index]=i}break}case"thinking_delta":{n?.type==="thinking"&&(r.content[t.index]={...n,thinking:n.thinking+t.delta.thinking});break}case"signature_delta":{n?.type==="thinking"&&(r.content[t.index]={...n,signature:t.delta.signature});break}default:t.delta}return r}case"content_block_stop":return r}},Symbol.asyncIterator)](){let e=[],t=[],r=!1;return this.on("streamEvent",n=>{let o=t.shift();o?o.resolve(n):e.push(n)}),this.on("end",()=>{r=!0;for(let n of t)n.resolve(void 0);t.length=0}),this.on("abort",n=>{r=!0;for(let o of t)o.reject(n);t.length=0}),this.on("error",n=>{r=!0;for(let o of t)o.reject(n);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:r?{value:void 0,done:!0}:new Promise((o,i)=>t.push({resolve:o,reject:i})).then(o=>o?{value:o,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}toReadableStream(){return new Ee(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}};var gl=`You have been working on the task described above but have not yet completed it. Write a continuation summary that will allow you (or another instance of yourself) to resume work efficiently in a future context window where the conversation history will be replaced with this summary. Your summary should be structured, concise, and actionable. Include:
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
Wrap your summary in <summary></summary> tags.`;var Ws,rs,Kt,J,Ks,ue,qe,pt,Js,yl,Ai;function bl(){let s,e;return{promise:new Promise((r,n)=>{s=r,e=n}),resolve:s,reject:e}}var ss=class{constructor(e,t,r){Ws.add(this),this.client=e,rs.set(this,!1),Kt.set(this,!1),J.set(this,void 0),Ks.set(this,void 0),ue.set(this,void 0),qe.set(this,void 0),pt.set(this,void 0),Js.set(this,0),w(this,J,{params:{...t,messages:structuredClone(t.messages)}},"f"),w(this,Ks,{...r,headers:E([{"x-stainless-helper":"BetaToolRunner"},r?.headers])},"f"),w(this,pt,bl(),"f")}async*[(rs=new WeakMap,Kt=new WeakMap,J=new WeakMap,Ks=new WeakMap,ue=new WeakMap,qe=new WeakMap,pt=new WeakMap,Js=new WeakMap,Ws=new WeakSet,yl=async function(){let t=u(this,J,"f").params.compactionControl;if(!t||!t.enabled)return!1;let r=0;if(u(this,ue,"f")!==void 0)try{let p=await u(this,ue,"f");r=p.usage.input_tokens+(p.usage.cache_creation_input_tokens??0)+(p.usage.cache_read_input_tokens??0)+p.usage.output_tokens}catch{return!1}let n=t.contextTokenThreshold??1e5;if(r<n)return!1;let o=t.model??u(this,J,"f").params.model,i=t.summaryPrompt??gl,a=u(this,J,"f").params.messages;if(a[a.length-1].role==="assistant"){let p=a[a.length-1];if(Array.isArray(p.content)){let b=p.content.filter(h=>h.type!=="tool_use");b.length===0?a.pop():p.content=b}}let l=await this.client.beta.messages.create({model:o,messages:[...a,{role:"user",content:[{type:"text",text:i}]}],max_tokens:u(this,J,"f").params.max_tokens},{headers:{"x-stainless-helper":"compaction"}});if(l.content[0]?.type!=="text")throw new I("Expected text response for compaction");return u(this,J,"f").params.messages=[{role:"user",content:l.content}],!0},Symbol.asyncIterator)](){var e;if(u(this,rs,"f"))throw new I("Cannot iterate over a consumed stream");w(this,rs,!0,"f"),w(this,Kt,!0,"f"),w(this,qe,void 0,"f");try{for(;;){let t;try{if(u(this,J,"f").params.max_iterations&&u(this,Js,"f")>=u(this,J,"f").params.max_iterations)break;w(this,Kt,!1,"f"),w(this,qe,void 0,"f"),w(this,Js,(e=u(this,Js,"f"),e++,e),"f"),w(this,ue,void 0,"f");let{max_iterations:r,compactionControl:n,...o}=u(this,J,"f").params;if(o.stream?(t=this.client.beta.messages.stream({...o},u(this,Ks,"f")),w(this,ue,t.finalMessage(),"f"),u(this,ue,"f").catch(()=>{}),yield t):(w(this,ue,this.client.beta.messages.create({...o,stream:!1},u(this,Ks,"f")),"f"),yield u(this,ue,"f")),!await u(this,Ws,"m",yl).call(this)){if(!u(this,Kt,"f")){let{role:l,content:p}=await u(this,ue,"f");u(this,J,"f").params.messages.push({role:l,content:p})}let a=await u(this,Ws,"m",Ai).call(this,u(this,J,"f").params.messages.at(-1));if(a)u(this,J,"f").params.messages.push(a);else if(!u(this,Kt,"f"))break}}finally{t&&t.abort()}}if(!u(this,ue,"f"))throw new I("ToolRunner concluded without a message from the server");u(this,pt,"f").resolve(await u(this,ue,"f"))}catch(t){throw w(this,rs,!1,"f"),u(this,pt,"f").promise.catch(()=>{}),u(this,pt,"f").reject(t),w(this,pt,bl(),"f"),t}}setMessagesParams(e){typeof e=="function"?u(this,J,"f").params=e(u(this,J,"f").params):u(this,J,"f").params=e,w(this,Kt,!0,"f"),w(this,qe,void 0,"f")}async generateToolResponse(){let e=await u(this,ue,"f")??this.params.messages.at(-1);return e?u(this,Ws,"m",Ai).call(this,e):null}done(){return u(this,pt,"f").promise}async runUntilDone(){if(!u(this,rs,"f"))for await(let e of this);return this.done()}get params(){return u(this,J,"f").params}pushMessages(...e){this.setMessagesParams(t=>({...t,messages:[...t.messages,...e]}))}then(e,t){return this.runUntilDone().then(e,t)}};Ai=async function(e){return u(this,qe,"f")!==void 0?u(this,qe,"f"):(w(this,qe,tu(u(this,J,"f").params,e),"f"),u(this,qe,"f"))};async function tu(s,e=s.messages.at(-1)){if(!e||e.role!=="assistant"||!e.content||typeof e.content=="string")return null;let t=e.content.filter(n=>n.type==="tool_use");return t.length===0?null:{role:"user",content:await Promise.all(t.map(async n=>{let o=s.tools.find(i=>("name"in i?i.name:i.mcp_server_name)===n.name);if(!o||!("run"in o))return{type:"tool_result",tool_use_id:n.id,content:`Error: Tool '${n.name}' not found`,is_error:!0};try{let i=n.input;"parse"in o&&o.parse&&(i=o.parse(i));let a=await o.run(i);return{type:"tool_result",tool_use_id:n.id,content:a}}catch(i){return{type:"tool_result",tool_use_id:n.id,content:`Error: ${i instanceof Error?i.message:String(i)}`,is_error:!0}}}))}}var ns=class s{constructor(e,t){this.iterator=e,this.controller=t}async*decoder(){let e=new He;for await(let t of this.iterator)for(let r of e.decode(t))yield JSON.parse(r);for(let t of e.flush())yield JSON.parse(t)}[Symbol.asyncIterator](){return this.decoder()}static fromResponse(e,t){if(!e.body)throw t.abort(),typeof globalThis.navigator<"u"&&globalThis.navigator.product==="ReactNative"?new I("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api"):new I("Attempted to iterate over a response with no body");return new s(Ms(e.body),t)}};var os=class extends F{create(e,t){let{betas:r,...n}=e;return this._client.post("/v1/messages/batches?beta=true",{body:n,...t,headers:E([{"anthropic-beta":[...r??[],"message-batches-2024-09-24"].toString()},t?.headers])})}retrieve(e,t={},r){let{betas:n}=t??{};return this._client.get($`/v1/messages/batches/${e}?beta=true`,{...r,headers:E([{"anthropic-beta":[...n??[],"message-batches-2024-09-24"].toString()},r?.headers])})}list(e={},t){let{betas:r,...n}=e??{};return this._client.getAPIList("/v1/messages/batches?beta=true",pe,{query:n,...t,headers:E([{"anthropic-beta":[...r??[],"message-batches-2024-09-24"].toString()},t?.headers])})}delete(e,t={},r){let{betas:n}=t??{};return this._client.delete($`/v1/messages/batches/${e}?beta=true`,{...r,headers:E([{"anthropic-beta":[...n??[],"message-batches-2024-09-24"].toString()},r?.headers])})}cancel(e,t={},r){let{betas:n}=t??{};return this._client.post($`/v1/messages/batches/${e}/cancel?beta=true`,{...r,headers:E([{"anthropic-beta":[...n??[],"message-batches-2024-09-24"].toString()},r?.headers])})}async results(e,t={},r){let n=await this.retrieve(e);if(!n.results_url)throw new I(`No batch \`results_url\`; Has it finished processing? ${n.processing_status} - ${n.id}`);let{betas:o}=t??{};return this._client.get(n.results_url,{...r,headers:E([{"anthropic-beta":[...o??[],"message-batches-2024-09-24"].toString(),Accept:"application/binary"},r?.headers]),stream:!0,__binaryResponse:!0})._thenUnwrap((i,a)=>ns.fromResponse(a.response,a.controller))}};var _l={"claude-1.3":"November 6th, 2024","claude-1.3-100k":"November 6th, 2024","claude-instant-1.1":"November 6th, 2024","claude-instant-1.1-100k":"November 6th, 2024","claude-instant-1.2":"November 6th, 2024","claude-3-sonnet-20240229":"July 21st, 2025","claude-3-opus-20240229":"January 5th, 2026","claude-2.1":"July 21st, 2025","claude-2.0":"July 21st, 2025","claude-3-7-sonnet-latest":"February 19th, 2026","claude-3-7-sonnet-20250219":"February 19th, 2026"},ft=class extends F{constructor(){super(...arguments),this.batches=new os(this._client)}create(e,t){let{betas:r,...n}=e;n.model in _l&&console.warn(`The model '${n.model}' is deprecated and will reach end-of-life on ${_l[n.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);let o=this._client._options.timeout;if(!n.stream&&o==null){let i=Kn[n.model]??void 0;o=this._client.calculateNonstreamingTimeout(n.max_tokens,i)}return this._client.post("/v1/messages?beta=true",{body:n,timeout:o??6e5,...t,headers:E([{...r?.toString()!=null?{"anthropic-beta":r?.toString()}:void 0},t?.headers]),stream:e.stream??!1})}parse(e,t){return t={...t,headers:E([{"anthropic-beta":[...e.betas??[],"structured-outputs-2025-11-13"].toString()},t?.headers])},this.create(e,t).then(r=>vi(r,e))}stream(e,t){return eo.createMessage(this,e,t)}countTokens(e,t){let{betas:r,...n}=e;return this._client.post("/v1/messages/count_tokens?beta=true",{body:n,...t,headers:E([{"anthropic-beta":[...r??[],"token-counting-2024-11-01"].toString()},t?.headers])})}toolRunner(e,t){return new ss(this._client,e,t)}};ft.Batches=os;ft.BetaToolRunner=ss;var is=class extends F{create(e,t={},r){let{betas:n,...o}=t??{};return this._client.post($`/v1/skills/${e}/versions?beta=true`,zr({body:o,...r,headers:E([{"anthropic-beta":[...n??[],"skills-2025-10-02"].toString()},r?.headers])},this._client))}retrieve(e,t,r){let{skill_id:n,betas:o}=t;return this._client.get($`/v1/skills/${n}/versions/${e}?beta=true`,{...r,headers:E([{"anthropic-beta":[...o??[],"skills-2025-10-02"].toString()},r?.headers])})}list(e,t={},r){let{betas:n,...o}=t??{};return this._client.getAPIList($`/v1/skills/${e}/versions?beta=true`,Xr,{query:o,...r,headers:E([{"anthropic-beta":[...n??[],"skills-2025-10-02"].toString()},r?.headers])})}delete(e,t,r){let{skill_id:n,betas:o}=t;return this._client.delete($`/v1/skills/${n}/versions/${e}?beta=true`,{...r,headers:E([{"anthropic-beta":[...o??[],"skills-2025-10-02"].toString()},r?.headers])})}};var Jt=class extends F{constructor(){super(...arguments),this.versions=new is(this._client)}create(e={},t){let{betas:r,...n}=e??{};return this._client.post("/v1/skills?beta=true",zr({body:n,...t,headers:E([{"anthropic-beta":[...r??[],"skills-2025-10-02"].toString()},t?.headers])},this._client))}retrieve(e,t={},r){let{betas:n}=t??{};return this._client.get($`/v1/skills/${e}?beta=true`,{...r,headers:E([{"anthropic-beta":[...n??[],"skills-2025-10-02"].toString()},r?.headers])})}list(e={},t){let{betas:r,...n}=e??{};return this._client.getAPIList("/v1/skills?beta=true",Xr,{query:n,...t,headers:E([{"anthropic-beta":[...r??[],"skills-2025-10-02"].toString()},t?.headers])})}delete(e,t={},r){let{betas:n}=t??{};return this._client.delete($`/v1/skills/${e}?beta=true`,{...r,headers:E([{"anthropic-beta":[...n??[],"skills-2025-10-02"].toString()},r?.headers])})}};Jt.Versions=is;var _e=class extends F{constructor(){super(...arguments),this.models=new Qr(this._client),this.messages=new ft(this._client),this.files=new Yr(this._client),this.skills=new Jt(this._client)}};_e.Models=Qr;_e.Messages=ft;_e.Files=Yr;_e.Skills=Jt;var Gt=class extends F{create(e,t){let{betas:r,...n}=e;return this._client.post("/v1/complete",{body:n,timeout:this._client._options.timeout??6e5,...t,headers:E([{...r?.toString()!=null?{"anthropic-beta":r?.toString()}:void 0},t?.headers]),stream:e.stream??!1})}};var he,ht,Gs,to,Vs,Xs,ro,zs,We,Ys,so,no,as,oo,io,Ei,wl,Ri,ki,Ci,Ti,vl,xl="__json_buf";function Pl(s){return s.type==="tool_use"||s.type==="server_tool_use"}var ao=class s{constructor(){he.add(this),this.messages=[],this.receivedMessages=[],ht.set(this,void 0),this.controller=new AbortController,Gs.set(this,void 0),to.set(this,()=>{}),Vs.set(this,()=>{}),Xs.set(this,void 0),ro.set(this,()=>{}),zs.set(this,()=>{}),We.set(this,{}),Ys.set(this,!1),so.set(this,!1),no.set(this,!1),as.set(this,!1),oo.set(this,void 0),io.set(this,void 0),Ri.set(this,e=>{if(w(this,so,!0,"f"),De(e)&&(e=new ee),e instanceof ee)return w(this,no,!0,"f"),this._emit("abort",e);if(e instanceof I)return this._emit("error",e);if(e instanceof Error){let t=new I(e.message);return t.cause=e,this._emit("error",t)}return this._emit("error",new I(String(e)))}),w(this,Gs,new Promise((e,t)=>{w(this,to,e,"f"),w(this,Vs,t,"f")}),"f"),w(this,Xs,new Promise((e,t)=>{w(this,ro,e,"f"),w(this,zs,t,"f")}),"f"),u(this,Gs,"f").catch(()=>{}),u(this,Xs,"f").catch(()=>{})}get response(){return u(this,oo,"f")}get request_id(){return u(this,io,"f")}async withResponse(){let e=await u(this,Gs,"f");if(!e)throw new Error("Could not resolve a `Response` object");return{data:this,response:e,request_id:e.headers.get("request-id")}}static fromReadableStream(e){let t=new s;return t._run(()=>t._fromReadableStream(e)),t}static createMessage(e,t,r){let n=new s;for(let o of t.messages)n._addMessageParam(o);return n._run(()=>n._createMessage(e,{...t,stream:!0},{...r,headers:{...r?.headers,"X-Stainless-Helper-Method":"stream"}})),n}_run(e){e().then(()=>{this._emitFinal(),this._emit("end")},u(this,Ri,"f"))}_addMessageParam(e){this.messages.push(e)}_addMessage(e,t=!0){this.receivedMessages.push(e),t&&this._emit("message",e)}async _createMessage(e,t,r){let n=r?.signal,o;n&&(n.aborted&&this.controller.abort(),o=this.controller.abort.bind(this.controller),n.addEventListener("abort",o));try{u(this,he,"m",ki).call(this);let{response:i,data:a}=await e.create({...t,stream:!0},{...r,signal:this.controller.signal}).withResponse();this._connected(i);for await(let l of a)u(this,he,"m",Ci).call(this,l);if(a.controller.signal?.aborted)throw new ee;u(this,he,"m",Ti).call(this)}finally{n&&o&&n.removeEventListener("abort",o)}}_connected(e){this.ended||(w(this,oo,e,"f"),w(this,io,e?.headers.get("request-id"),"f"),u(this,to,"f").call(this,e),this._emit("connect"))}get ended(){return u(this,Ys,"f")}get errored(){return u(this,so,"f")}get aborted(){return u(this,no,"f")}abort(){this.controller.abort()}on(e,t){return(u(this,We,"f")[e]||(u(this,We,"f")[e]=[])).push({listener:t}),this}off(e,t){let r=u(this,We,"f")[e];if(!r)return this;let n=r.findIndex(o=>o.listener===t);return n>=0&&r.splice(n,1),this}once(e,t){return(u(this,We,"f")[e]||(u(this,We,"f")[e]=[])).push({listener:t,once:!0}),this}emitted(e){return new Promise((t,r)=>{w(this,as,!0,"f"),e!=="error"&&this.once("error",r),this.once(e,t)})}async done(){w(this,as,!0,"f"),await u(this,Xs,"f")}get currentMessage(){return u(this,ht,"f")}async finalMessage(){return await this.done(),u(this,he,"m",Ei).call(this)}async finalText(){return await this.done(),u(this,he,"m",wl).call(this)}_emit(e,...t){if(u(this,Ys,"f"))return;e==="end"&&(w(this,Ys,!0,"f"),u(this,ro,"f").call(this));let r=u(this,We,"f")[e];if(r&&(u(this,We,"f")[e]=r.filter(n=>!n.once),r.forEach(({listener:n})=>n(...t))),e==="abort"){let n=t[0];!u(this,as,"f")&&!r?.length&&Promise.reject(n),u(this,Vs,"f").call(this,n),u(this,zs,"f").call(this,n),this._emit("end");return}if(e==="error"){let n=t[0];!u(this,as,"f")&&!r?.length&&Promise.reject(n),u(this,Vs,"f").call(this,n),u(this,zs,"f").call(this,n),this._emit("end")}}_emitFinal(){this.receivedMessages.at(-1)&&this._emit("finalMessage",u(this,he,"m",Ei).call(this))}async _fromReadableStream(e,t){let r=t?.signal,n;r&&(r.aborted&&this.controller.abort(),n=this.controller.abort.bind(this.controller),r.addEventListener("abort",n));try{u(this,he,"m",ki).call(this),this._connected(null);let o=Ee.fromReadableStream(e,this.controller);for await(let i of o)u(this,he,"m",Ci).call(this,i);if(o.controller.signal?.aborted)throw new ee;u(this,he,"m",Ti).call(this)}finally{r&&n&&r.removeEventListener("abort",n)}}[(ht=new WeakMap,Gs=new WeakMap,to=new WeakMap,Vs=new WeakMap,Xs=new WeakMap,ro=new WeakMap,zs=new WeakMap,We=new WeakMap,Ys=new WeakMap,so=new WeakMap,no=new WeakMap,as=new WeakMap,oo=new WeakMap,io=new WeakMap,Ri=new WeakMap,he=new WeakSet,Ei=function(){if(this.receivedMessages.length===0)throw new I("stream ended without producing a Message with role=assistant");return this.receivedMessages.at(-1)},wl=function(){if(this.receivedMessages.length===0)throw new I("stream ended without producing a Message with role=assistant");let t=this.receivedMessages.at(-1).content.filter(r=>r.type==="text").map(r=>r.text);if(t.length===0)throw new I("stream ended without producing a content block with type=text");return t.join(" ")},ki=function(){this.ended||w(this,ht,void 0,"f")},Ci=function(t){if(this.ended)return;let r=u(this,he,"m",vl).call(this,t);switch(this._emit("streamEvent",t,r),t.type){case"content_block_delta":{let n=r.content.at(-1);switch(t.delta.type){case"text_delta":{n.type==="text"&&this._emit("text",t.delta.text,n.text||"");break}case"citations_delta":{n.type==="text"&&this._emit("citation",t.delta.citation,n.citations??[]);break}case"input_json_delta":{Pl(n)&&n.input&&this._emit("inputJson",t.delta.partial_json,n.input);break}case"thinking_delta":{n.type==="thinking"&&this._emit("thinking",t.delta.thinking,n.thinking);break}case"signature_delta":{n.type==="thinking"&&this._emit("signature",n.signature);break}default:t.delta}break}case"message_stop":{this._addMessageParam(r),this._addMessage(r,!0);break}case"content_block_stop":{this._emit("contentBlock",r.content.at(-1));break}case"message_start":{w(this,ht,r,"f");break}case"content_block_start":case"message_delta":break}},Ti=function(){if(this.ended)throw new I("stream has ended, this shouldn't happen");let t=u(this,ht,"f");if(!t)throw new I("request ended without sending any chunks");return w(this,ht,void 0,"f"),t},vl=function(t){let r=u(this,ht,"f");if(t.type==="message_start"){if(r)throw new I(`Unexpected event order, got ${t.type} before receiving "message_stop"`);return t.message}if(!r)throw new I(`Unexpected event order, got ${t.type} before "message_start"`);switch(t.type){case"message_stop":return r;case"message_delta":return r.stop_reason=t.delta.stop_reason,r.stop_sequence=t.delta.stop_sequence,r.usage.output_tokens=t.usage.output_tokens,t.usage.input_tokens!=null&&(r.usage.input_tokens=t.usage.input_tokens),t.usage.cache_creation_input_tokens!=null&&(r.usage.cache_creation_input_tokens=t.usage.cache_creation_input_tokens),t.usage.cache_read_input_tokens!=null&&(r.usage.cache_read_input_tokens=t.usage.cache_read_input_tokens),t.usage.server_tool_use!=null&&(r.usage.server_tool_use=t.usage.server_tool_use),r;case"content_block_start":return r.content.push({...t.content_block}),r;case"content_block_delta":{let n=r.content.at(t.index);switch(t.delta.type){case"text_delta":{n?.type==="text"&&(r.content[t.index]={...n,text:(n.text||"")+t.delta.text});break}case"citations_delta":{n?.type==="text"&&(r.content[t.index]={...n,citations:[...n.citations??[],t.delta.citation]});break}case"input_json_delta":{if(n&&Pl(n)){let o=n[xl]||"";o+=t.delta.partial_json;let i={...n};Object.defineProperty(i,xl,{value:o,enumerable:!1,writable:!0}),o&&(i.input=Jn(o)),r.content[t.index]=i}break}case"thinking_delta":{n?.type==="thinking"&&(r.content[t.index]={...n,thinking:n.thinking+t.delta.thinking});break}case"signature_delta":{n?.type==="thinking"&&(r.content[t.index]={...n,signature:t.delta.signature});break}default:t.delta}return r}case"content_block_stop":return r}},Symbol.asyncIterator)](){let e=[],t=[],r=!1;return this.on("streamEvent",n=>{let o=t.shift();o?o.resolve(n):e.push(n)}),this.on("end",()=>{r=!0;for(let n of t)n.resolve(void 0);t.length=0}),this.on("abort",n=>{r=!0;for(let o of t)o.reject(n);t.length=0}),this.on("error",n=>{r=!0;for(let o of t)o.reject(n);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:r?{value:void 0,done:!0}:new Promise((o,i)=>t.push({resolve:o,reject:i})).then(o=>o?{value:o,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}toReadableStream(){return new Ee(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}};var ls=class extends F{create(e,t){return this._client.post("/v1/messages/batches",{body:e,...t})}retrieve(e,t){return this._client.get($`/v1/messages/batches/${e}`,t)}list(e={},t){return this._client.getAPIList("/v1/messages/batches",pe,{query:e,...t})}delete(e,t){return this._client.delete($`/v1/messages/batches/${e}`,t)}cancel(e,t){return this._client.post($`/v1/messages/batches/${e}/cancel`,t)}async results(e,t){let r=await this.retrieve(e);if(!r.results_url)throw new I(`No batch \`results_url\`; Has it finished processing? ${r.processing_status} - ${r.id}`);return this._client.get(r.results_url,{...t,headers:E([{Accept:"application/binary"},t?.headers]),stream:!0,__binaryResponse:!0})._thenUnwrap((n,o)=>ns.fromResponse(o.response,o.controller))}};var mt=class extends F{constructor(){super(...arguments),this.batches=new ls(this._client)}create(e,t){e.model in Il&&console.warn(`The model '${e.model}' is deprecated and will reach end-of-life on ${Il[e.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);let r=this._client._options.timeout;if(!e.stream&&r==null){let n=Kn[e.model]??void 0;r=this._client.calculateNonstreamingTimeout(e.max_tokens,n)}return this._client.post("/v1/messages",{body:e,timeout:r??6e5,...t,stream:e.stream??!1})}stream(e,t){return ao.createMessage(this,e,t)}countTokens(e,t){return this._client.post("/v1/messages/count_tokens",{body:e,...t})}},Il={"claude-1.3":"November 6th, 2024","claude-1.3-100k":"November 6th, 2024","claude-instant-1.1":"November 6th, 2024","claude-instant-1.1-100k":"November 6th, 2024","claude-instant-1.2":"November 6th, 2024","claude-3-sonnet-20240229":"July 21st, 2025","claude-3-opus-20240229":"January 5th, 2026","claude-2.1":"July 21st, 2025","claude-2.0":"July 21st, 2025","claude-3-7-sonnet-latest":"February 19th, 2026","claude-3-7-sonnet-20250219":"February 19th, 2026"};mt.Batches=ls;var Vt=class extends F{retrieve(e,t={},r){let{betas:n}=t??{};return this._client.get($`/v1/models/${e}`,{...r,headers:E([{...n?.toString()!=null?{"anthropic-beta":n?.toString()}:void 0},r?.headers])})}list(e={},t){let{betas:r,...n}=e??{};return this._client.getAPIList("/v1/models",pe,{query:n,...t,headers:E([{...r?.toString()!=null?{"anthropic-beta":r?.toString()}:void 0},t?.headers])})}};var Qs=s=>{if(typeof globalThis.process<"u")return globalThis.process.env?.[s]?.trim()??void 0;if(typeof globalThis.Deno<"u")return globalThis.Deno.env?.get?.(s)?.trim()};var Mi,Oi,lo,Sl,Al="\\n\\nHuman:",El="\\n\\nAssistant:",N=class{constructor({baseURL:e=Qs("ANTHROPIC_BASE_URL"),apiKey:t=Qs("ANTHROPIC_API_KEY")??null,authToken:r=Qs("ANTHROPIC_AUTH_TOKEN")??null,...n}={}){Mi.add(this),lo.set(this,void 0);let o={apiKey:t,authToken:r,...n,baseURL:e||"https://api.anthropic.com"};if(!o.dangerouslyAllowBrowser&&Ya())throw new I(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
`);this.baseURL=o.baseURL,this.timeout=o.timeout??Oi.DEFAULT_TIMEOUT,this.logger=o.logger??console;let i="warn";this.logLevel=i,this.logLevel=fi(o.logLevel,"ClientOptions.logLevel",this)??fi(Qs("ANTHROPIC_LOG"),"process.env['ANTHROPIC_LOG']",this)??i,this.fetchOptions=o.fetchOptions,this.maxRetries=o.maxRetries??2,this.fetch=o.fetch??Za(),w(this,lo,tl,"f"),this._options=o,this.apiKey=typeof t=="string"?t:null,this.authToken=r}withOptions(e){return new this.constructor({...this._options,baseURL:this.baseURL,maxRetries:this.maxRetries,timeout:this.timeout,logger:this.logger,logLevel:this.logLevel,fetch:this.fetch,fetchOptions:this.fetchOptions,apiKey:this.apiKey,authToken:this.authToken,...e})}defaultQuery(){return this._options.defaultQuery}validateHeaders({values:e,nulls:t}){if(!(e.get("x-api-key")||e.get("authorization"))&&!(this.apiKey&&e.get("x-api-key"))&&!t.has("x-api-key")&&!(this.authToken&&e.get("authorization"))&&!t.has("authorization"))throw new Error('Could not resolve authentication method. Expected either apiKey or authToken to be set. Or for one of the "X-Api-Key" or "Authorization" headers to be explicitly omitted')}async authHeaders(e){return E([await this.apiKeyAuth(e),await this.bearerAuth(e)])}async apiKeyAuth(e){if(this.apiKey!=null)return E([{"X-Api-Key":this.apiKey}])}async bearerAuth(e){if(this.authToken!=null)return E([{Authorization:`Bearer ${this.authToken}`}])}stringifyQuery(e){return Object.entries(e).filter(([t,r])=>typeof r<"u").map(([t,r])=>{if(typeof r=="string"||typeof r=="number"||typeof r=="boolean")return`${encodeURIComponent(t)}=${encodeURIComponent(r)}`;if(r===null)return`${encodeURIComponent(t)}=`;throw new I(`Cannot stringify type ${typeof r}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)}).join("&")}getUserAgent(){return`${this.constructor.name}/JS ${dt}`}defaultIdempotencyKey(){return`stainless-node-retry-${li()}`}makeStatusError(e,t,r,n){return z.generate(e,t,r,n)}buildURL(e,t,r){let n=!u(this,Mi,"m",Sl).call(this)&&r||this.baseURL,o=qa(e)?new URL(e):new URL(n+(n.endsWith("/")&&e.startsWith("/")?e.slice(1):e)),i=this.defaultQuery();return Wa(i)||(t={...i,...t}),typeof t=="object"&&t&&!Array.isArray(t)&&(o.search=this.stringifyQuery(t)),o.toString()}_calculateNonstreamingTimeout(e){if(3600*e/128e3>600)throw new I("Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#streaming-responses for more details");return 600*1e3}async prepareOptions(e){}async prepareRequest(e,{url:t,options:r}){}get(e,t){return this.methodRequest("get",e,t)}post(e,t){return this.methodRequest("post",e,t)}patch(e,t){return this.methodRequest("patch",e,t)}put(e,t){return this.methodRequest("put",e,t)}delete(e,t){return this.methodRequest("delete",e,t)}methodRequest(e,t,r){return this.request(Promise.resolve(r).then(n=>({method:e,path:t,...n})))}request(e,t=null){return new qt(this,this.makeRequest(e,t,void 0))}async makeRequest(e,t,r){let n=await e,o=n.maxRetries??this.maxRetries;t==null&&(t=o),await this.prepareOptions(n);let{req:i,url:a,timeout:l}=await this.buildRequest(n,{retryCount:o-t});await this.prepareRequest(i,{url:a,options:n});let p="log_"+(Math.random()*(1<<24)|0).toString(16).padStart(6,"0"),b=r===void 0?"":`, retryOf: ${r}`,h=Date.now();if(Y(this).debug(`[${p}] sending request`,Ue({retryOfRequestLogID:r,method:n.method,url:a,options:n,headers:i.headers})),n.signal?.aborted)throw new ee;let g=new AbortController,c=await this.fetchWithTimeout(a,i,l,g).catch(Ts),x=Date.now();if(c instanceof globalThis.Error){let k=`retrying, ${t} attempts remaining`;if(n.signal?.aborted)throw new ee;let v=De(c)||/timed? ?out/i.test(String(c)+("cause"in c?String(c.cause):""));if(t)return Y(this).info(`[${p}] connection ${v?"timed out":"failed"} - ${k}`),Y(this).debug(`[${p}] connection ${v?"timed out":"failed"} (${k})`,Ue({retryOfRequestLogID:r,url:a,durationMs:x-h,message:c.message})),this.retryRequest(n,t,r??p);throw Y(this).info(`[${p}] connection ${v?"timed out":"failed"} - error; no more retries left`),Y(this).debug(`[${p}] connection ${v?"timed out":"failed"} (error; no more retries left)`,Ue({retryOfRequestLogID:r,url:a,durationMs:x-h,message:c.message})),v?new Hr:new ct({cause:c})}let P=[...c.headers.entries()].filter(([k])=>k==="request-id").map(([k,v])=>", "+k+": "+JSON.stringify(v)).join(""),O=`[${p}${b}${P}] ${i.method} ${a} ${c.ok?"succeeded":"failed"} with status ${c.status} in ${x-h}ms`;if(!c.ok){let k=await this.shouldRetry(c);if(t&&k){let M=`retrying, ${t} attempts remaining`;return await el(c.body),Y(this).info(`${O} - ${M}`),Y(this).debug(`[${p}] response error (${M})`,Ue({retryOfRequestLogID:r,url:c.url,status:c.status,headers:c.headers,durationMs:x-h})),this.retryRequest(n,t,r??p,c.headers)}let v=k?"error; no more retries left":"error; not retryable";Y(this).info(`${O} - ${v}`);let L=await c.text().catch(M=>Ts(M).message),T=Ln(L),te=T?void 0:L;throw Y(this).debug(`[${p}] response error (${v})`,Ue({retryOfRequestLogID:r,url:c.url,status:c.status,headers:c.headers,message:te,durationMs:Date.now()-h})),this.makeStatusError(c.status,T,te,c.headers)}return Y(this).info(O),Y(this).debug(`[${p}] response start`,Ue({retryOfRequestLogID:r,url:c.url,status:c.status,headers:c.headers,durationMs:x-h})),{response:c,options:n,controller:g,requestLogID:p,retryOfRequestLogID:r,startTime:h}}getAPIList(e,t,r){return this.requestAPIList(t,{method:"get",path:e,...r})}requestAPIList(e,t){let r=this.makeRequest(t,null,void 0);return new Ls(this,r,e)}async fetchWithTimeout(e,t,r,n){let{signal:o,method:i,...a}=t||{};o&&o.addEventListener("abort",()=>n.abort());let l=setTimeout(()=>n.abort(),r),p=globalThis.ReadableStream&&a.body instanceof globalThis.ReadableStream||typeof a.body=="object"&&a.body!==null&&Symbol.asyncIterator in a.body,b={signal:n.signal,...p?{duplex:"half"}:{},method:"GET",...a};i&&(b.method=i.toUpperCase());try{return await this.fetch.call(void 0,e,b)}finally{clearTimeout(l)}}async shouldRetry(e){let t=e.headers.get("x-should-retry");return t==="true"?!0:t==="false"?!1:e.status===408||e.status===409||e.status===429||e.status>=500}async retryRequest(e,t,r,n){let o,i=n?.get("retry-after-ms");if(i){let l=parseFloat(i);Number.isNaN(l)||(o=l)}let a=n?.get("retry-after");if(a&&!o){let l=parseFloat(a);Number.isNaN(l)?o=Date.parse(a)-Date.now():o=l*1e3}if(!(o&&0<=o&&o<60*1e3)){let l=e.maxRetries??this.maxRetries;o=this.calculateDefaultRetryTimeoutMillis(t,l)}return await Ga(o),this.makeRequest(e,t-1,r)}calculateDefaultRetryTimeoutMillis(e,t){let o=t-e,i=Math.min(.5*Math.pow(2,o),8),a=1-Math.random()*.25;return i*a*1e3}calculateNonstreamingTimeout(e,t){if(36e5*e/128e3>6e5||t!=null&&e>t)throw new I("Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#long-requests for more details");return 6e5}async buildRequest(e,{retryCount:t=0}={}){let r={...e},{method:n,path:o,query:i,defaultBaseURL:a}=r,l=this.buildURL(o,i,a);"timeout"in r&&Ja("timeout",r.timeout),r.timeout=r.timeout??this.timeout;let{bodyHeaders:p,body:b}=this.buildBody({options:r}),h=await this.buildHeaders({options:e,method:n,bodyHeaders:p,retryCount:t});return{req:{method:n,headers:h,...r.signal&&{signal:r.signal},...globalThis.ReadableStream&&b instanceof globalThis.ReadableStream&&{duplex:"half"},...b&&{body:b},...this.fetchOptions??{},...r.fetchOptions??{}},url:l,timeout:r.timeout}}async buildHeaders({options:e,method:t,bodyHeaders:r,retryCount:n}){let o={};this.idempotencyHeader&&t!=="get"&&(e.idempotencyKey||(e.idempotencyKey=this.defaultIdempotencyKey()),o[this.idempotencyHeader]=e.idempotencyKey);let i=E([o,{Accept:"application/json","User-Agent":this.getUserAgent(),"X-Stainless-Retry-Count":String(n),...e.timeout?{"X-Stainless-Timeout":String(Math.trunc(e.timeout/1e3))}:{},...Qa(),...this._options.dangerouslyAllowBrowser?{"anthropic-dangerous-direct-browser-access":"true"}:void 0,"anthropic-version":"2023-06-01"},await this.authHeaders(e),this._options.defaultHeaders,r,e.headers]);return this.validateHeaders(i),i.values}buildBody({options:{body:e,headers:t}}){if(!e)return{bodyHeaders:void 0,body:void 0};let r=E([t]);return ArrayBuffer.isView(e)||e instanceof ArrayBuffer||e instanceof DataView||typeof e=="string"&&r.values.has("content-type")||globalThis.Blob&&e instanceof globalThis.Blob||e instanceof FormData||e instanceof URLSearchParams||globalThis.ReadableStream&&e instanceof globalThis.ReadableStream?{bodyHeaders:void 0,body:e}:typeof e=="object"&&(Symbol.asyncIterator in e||Symbol.iterator in e&&"next"in e&&typeof e.next=="function")?{bodyHeaders:void 0,body:Bn(e)}:u(this,lo,"f").call(this,{body:e,headers:r})}};Oi=N,lo=new WeakMap,Mi=new WeakSet,Sl=function(){return this.baseURL!=="https://api.anthropic.com"};N.Anthropic=Oi;N.HUMAN_PROMPT=Al;N.AI_PROMPT=El;N.DEFAULT_TIMEOUT=6e5;N.AnthropicError=I;N.APIError=z;N.APIConnectionError=ct;N.APIConnectionTimeoutError=Hr;N.APIUserAbortError=ee;N.NotFoundError=Wr;N.ConflictError=Kr;N.RateLimitError=Gr;N.BadRequestError=Ur;N.AuthenticationError=jr;N.InternalServerError=Vr;N.PermissionDeniedError=qr;N.UnprocessableEntityError=Jr;N.toFile=Wn;var Re=class extends N{constructor(){super(...arguments),this.completions=new Gt(this),this.messages=new mt(this),this.models=new Vt(this),this.beta=new _e(this)}};Re.Completions=Gt;Re.Messages=mt;Re.Models=Vt;Re.Beta=_e;var Rl;(function(s){s.STRING="string",s.NUMBER="number",s.INTEGER="integer",s.BOOLEAN="boolean",s.ARRAY="array",s.OBJECT="object"})(Rl||(Rl={}));var kl;(function(s){s.LANGUAGE_UNSPECIFIED="language_unspecified",s.PYTHON="python"})(kl||(kl={}));var Cl;(function(s){s.OUTCOME_UNSPECIFIED="outcome_unspecified",s.OUTCOME_OK="outcome_ok",s.OUTCOME_FAILED="outcome_failed",s.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(Cl||(Cl={}));var Tl=["user","model","function","system"],Ml;(function(s){s.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",s.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",s.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",s.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",s.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",s.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(Ml||(Ml={}));var Ol;(function(s){s.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",s.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",s.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",s.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",s.BLOCK_NONE="BLOCK_NONE"})(Ol||(Ol={}));var Fl;(function(s){s.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",s.NEGLIGIBLE="NEGLIGIBLE",s.LOW="LOW",s.MEDIUM="MEDIUM",s.HIGH="HIGH"})(Fl||(Fl={}));var $l;(function(s){s.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",s.SAFETY="SAFETY",s.OTHER="OTHER"})($l||($l={}));var Zs;(function(s){s.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",s.STOP="STOP",s.MAX_TOKENS="MAX_TOKENS",s.SAFETY="SAFETY",s.RECITATION="RECITATION",s.LANGUAGE="LANGUAGE",s.BLOCKLIST="BLOCKLIST",s.PROHIBITED_CONTENT="PROHIBITED_CONTENT",s.SPII="SPII",s.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",s.OTHER="OTHER"})(Zs||(Zs={}));var Nl;(function(s){s.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",s.RETRIEVAL_QUERY="RETRIEVAL_QUERY",s.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",s.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",s.CLASSIFICATION="CLASSIFICATION",s.CLUSTERING="CLUSTERING"})(Nl||(Nl={}));var Ll;(function(s){s.MODE_UNSPECIFIED="MODE_UNSPECIFIED",s.AUTO="AUTO",s.ANY="ANY",s.NONE="NONE"})(Ll||(Ll={}));var Bl;(function(s){s.MODE_UNSPECIFIED="MODE_UNSPECIFIED",s.MODE_DYNAMIC="MODE_DYNAMIC"})(Bl||(Bl={}));var Q=class extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}},gt=class extends Q{constructor(e,t){super(e),this.response=t}},uo=class extends Q{constructor(e,t,r,n){super(e),this.status=t,this.statusText=r,this.errorDetails=n}},ke=class extends Q{},po=class extends Q{};var lu="https://generativelanguage.googleapis.com",cu="v1beta",du="0.24.1",uu="genai-js",Xt;(function(s){s.GENERATE_CONTENT="generateContent",s.STREAM_GENERATE_CONTENT="streamGenerateContent",s.COUNT_TOKENS="countTokens",s.EMBED_CONTENT="embedContent",s.BATCH_EMBED_CONTENTS="batchEmbedContents"})(Xt||(Xt={}));var Fi=class{constructor(e,t,r,n,o){this.model=e,this.task=t,this.apiKey=r,this.stream=n,this.requestOptions=o}toString(){var e,t;let r=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||cu,o=`${((t=this.requestOptions)===null||t===void 0?void 0:t.baseUrl)||lu}/${r}/${this.model}:${this.task}`;return this.stream&&(o+="?alt=sse"),o}};function pu(s){let e=[];return s?.apiClient&&e.push(s.apiClient),e.push(`${uu}/${du}`),e.join(" ")}async function fu(s){var e;let t=new Headers;t.append("Content-Type","application/json"),t.append("x-goog-api-client",pu(s.requestOptions)),t.append("x-goog-api-key",s.apiKey);let r=(e=s.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(n){throw new ke(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${n.message}`)}for(let[n,o]of r.entries()){if(n==="x-goog-api-key")throw new ke(`Cannot set reserved header name ${n}`);if(n==="x-goog-api-client")throw new ke(`Header name ${n} can only be set using the apiClient field`);t.append(n,o)}}return t}async function hu(s,e,t,r,n,o){let i=new Fi(s,e,t,r,o);return{url:i.toString(),fetchOptions:Object.assign(Object.assign({},bu(o)),{method:"POST",headers:await fu(i),body:n})}}async function rn(s,e,t,r,n,o={},i=fetch){let{url:a,fetchOptions:l}=await hu(s,e,t,r,n,o);return mu(a,l,i)}async function mu(s,e,t=fetch){let r;try{r=await t(s,e)}catch(n){gu(n,s)}return r.ok||await yu(r,s),r}function gu(s,e){let t=s;throw t.name==="AbortError"?(t=new po(`Request aborted when fetching ${e.toString()}: ${s.message}`),t.stack=s.stack):s instanceof uo||s instanceof ke||(t=new Q(`Error fetching from ${e.toString()}: ${s.message}`),t.stack=s.stack),t}async function yu(s,e){let t="",r;try{let n=await s.json();t=n.error.message,n.error.details&&(t+=` ${JSON.stringify(n.error.details)}`,r=n.error.details)}catch{}throw new uo(`Error fetching from ${e.toString()}: [${s.status} ${s.statusText}] ${t}`,s.status,s.statusText,r)}function bu(s){let e={};if(s?.signal!==void 0||s?.timeout>=0){let t=new AbortController;s?.timeout>=0&&setTimeout(()=>t.abort(),s.timeout),s?.signal&&s.signal.addEventListener("abort",()=>{t.abort()}),e.signal=t.signal}return e}function Ni(s){return s.text=()=>{if(s.candidates&&s.candidates.length>0){if(s.candidates.length>1&&console.warn(`This response had ${s.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),co(s.candidates[0]))throw new gt(`${yt(s)}`,s);return _u(s)}else if(s.promptFeedback)throw new gt(`Text not available. ${yt(s)}`,s);return""},s.functionCall=()=>{if(s.candidates&&s.candidates.length>0){if(s.candidates.length>1&&console.warn(`This response had ${s.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),co(s.candidates[0]))throw new gt(`${yt(s)}`,s);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Dl(s)[0]}else if(s.promptFeedback)throw new gt(`Function call not available. ${yt(s)}`,s)},s.functionCalls=()=>{if(s.candidates&&s.candidates.length>0){if(s.candidates.length>1&&console.warn(`This response had ${s.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),co(s.candidates[0]))throw new gt(`${yt(s)}`,s);return Dl(s)}else if(s.promptFeedback)throw new gt(`Function call not available. ${yt(s)}`,s)},s}function _u(s){var e,t,r,n;let o=[];if(!((t=(e=s.candidates)===null||e===void 0?void 0:e[0].content)===null||t===void 0)&&t.parts)for(let i of(n=(r=s.candidates)===null||r===void 0?void 0:r[0].content)===null||n===void 0?void 0:n.parts)i.text&&o.push(i.text),i.executableCode&&o.push("\n```"+i.executableCode.language+`
`+i.executableCode.code+"\n```\n"),i.codeExecutionResult&&o.push("\n```\n"+i.codeExecutionResult.output+"\n```\n");return o.length>0?o.join(""):""}function Dl(s){var e,t,r,n;let o=[];if(!((t=(e=s.candidates)===null||e===void 0?void 0:e[0].content)===null||t===void 0)&&t.parts)for(let i of(n=(r=s.candidates)===null||r===void 0?void 0:r[0].content)===null||n===void 0?void 0:n.parts)i.functionCall&&o.push(i.functionCall);if(o.length>0)return o}var wu=[Zs.RECITATION,Zs.SAFETY,Zs.LANGUAGE];function co(s){return!!s.finishReason&&wu.includes(s.finishReason)}function yt(s){var e,t,r;let n="";if((!s.candidates||s.candidates.length===0)&&s.promptFeedback)n+="Response was blocked",!((e=s.promptFeedback)===null||e===void 0)&&e.blockReason&&(n+=` due to ${s.promptFeedback.blockReason}`),!((t=s.promptFeedback)===null||t===void 0)&&t.blockReasonMessage&&(n+=`: ${s.promptFeedback.blockReasonMessage}`);else if(!((r=s.candidates)===null||r===void 0)&&r[0]){let o=s.candidates[0];co(o)&&(n+=`Candidate was blocked due to ${o.finishReason}`,o.finishMessage&&(n+=`: ${o.finishMessage}`))}return n}function en(s){return this instanceof en?(this.v=s,this):new en(s)}function vu(s,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(s,e||[]),n,o=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(g){r[g]&&(n[g]=function(c){return new Promise(function(x,P){o.push([g,c,x,P])>1||a(g,c)})})}function a(g,c){try{l(r[g](c))}catch(x){h(o[0][3],x)}}function l(g){g.value instanceof en?Promise.resolve(g.value.v).then(p,b):h(o[0][2],g)}function p(g){a("next",g)}function b(g){a("throw",g)}function h(g,c){g(c),o.shift(),o.length&&a(o[0][0],o[0][1])}}var Hl=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function xu(s){let e=s.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),t=Su(e),[r,n]=t.tee();return{stream:Iu(r),response:Pu(n)}}async function Pu(s){let e=[],t=s.getReader();for(;;){let{done:r,value:n}=await t.read();if(r)return Ni(Au(e));e.push(n)}}function Iu(s){return vu(this,arguments,function*(){let t=s.getReader();for(;;){let{value:r,done:n}=yield en(t.read());if(n)break;yield yield en(Ni(r))}})}function Su(s){let e=s.getReader();return new ReadableStream({start(r){let n="";return o();function o(){return e.read().then(({value:i,done:a})=>{if(a){if(n.trim()){r.error(new Q("Failed to parse stream"));return}r.close();return}n+=i;let l=n.match(Hl),p;for(;l;){try{p=JSON.parse(l[1])}catch{r.error(new Q(`Error parsing JSON response: "${l[1]}"`));return}r.enqueue(p),n=n.substring(l[0].length),l=n.match(Hl)}return o()}).catch(i=>{let a=i;throw a.stack=i.stack,a.name==="AbortError"?a=new po("Request aborted when reading from the stream"):a=new Q("Error reading from the stream"),a})}}})}function Au(s){let e=s[s.length-1],t={promptFeedback:e?.promptFeedback};for(let r of s){if(r.candidates){let n=0;for(let o of r.candidates)if(t.candidates||(t.candidates=[]),t.candidates[n]||(t.candidates[n]={index:n}),t.candidates[n].citationMetadata=o.citationMetadata,t.candidates[n].groundingMetadata=o.groundingMetadata,t.candidates[n].finishReason=o.finishReason,t.candidates[n].finishMessage=o.finishMessage,t.candidates[n].safetyRatings=o.safetyRatings,o.content&&o.content.parts){t.candidates[n].content||(t.candidates[n].content={role:o.content.role||"user",parts:[]});let i={};for(let a of o.content.parts)a.text&&(i.text=a.text),a.functionCall&&(i.functionCall=a.functionCall),a.executableCode&&(i.executableCode=a.executableCode),a.codeExecutionResult&&(i.codeExecutionResult=a.codeExecutionResult),Object.keys(i).length===0&&(i.text=""),t.candidates[n].content.parts.push(i)}n++}r.usageMetadata&&(t.usageMetadata=r.usageMetadata)}return t}async function Kl(s,e,t,r){let n=await rn(e,Xt.STREAM_GENERATE_CONTENT,s,!0,JSON.stringify(t),r);return xu(n)}async function Jl(s,e,t,r){let o=await(await rn(e,Xt.GENERATE_CONTENT,s,!1,JSON.stringify(t),r)).json();return{response:Ni(o)}}function Gl(s){if(s!=null){if(typeof s=="string")return{role:"system",parts:[{text:s}]};if(s.text)return{role:"system",parts:[s]};if(s.parts)return s.role?s:{role:"system",parts:s.parts}}}function tn(s){let e=[];if(typeof s=="string")e=[{text:s}];else for(let t of s)typeof t=="string"?e.push({text:t}):e.push(t);return Eu(e)}function Eu(s){let e={role:"user",parts:[]},t={role:"function",parts:[]},r=!1,n=!1;for(let o of s)"functionResponse"in o?(t.parts.push(o),n=!0):(e.parts.push(o),r=!0);if(r&&n)throw new Q("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!n)throw new Q("No content is provided for sending chat message.");return r?e:t}function Ru(s,e){var t;let r={model:e?.model,generationConfig:e?.generationConfig,safetySettings:e?.safetySettings,tools:e?.tools,toolConfig:e?.toolConfig,systemInstruction:e?.systemInstruction,cachedContent:(t=e?.cachedContent)===null||t===void 0?void 0:t.name,contents:[]},n=s.generateContentRequest!=null;if(s.contents){if(n)throw new ke("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=s.contents}else if(n)r=Object.assign(Object.assign({},r),s.generateContentRequest);else{let o=tn(s);r.contents=[o]}return{generateContentRequest:r}}function Ul(s){let e;return s.contents?e=s:e={contents:[tn(s)]},s.systemInstruction&&(e.systemInstruction=Gl(s.systemInstruction)),e}function ku(s){return typeof s=="string"||Array.isArray(s)?{content:tn(s)}:s}var jl=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Cu={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Tu(s){let e=!1;for(let t of s){let{role:r,parts:n}=t;if(!e&&r!=="user")throw new Q(`First content should be with role 'user', got ${r}`);if(!Tl.includes(r))throw new Q(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(Tl)}`);if(!Array.isArray(n))throw new Q("Content should have 'parts' property with an array of Parts");if(n.length===0)throw new Q("Each Content should have at least one part");let o={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let a of n)for(let l of jl)l in a&&(o[l]+=1);let i=Cu[r];for(let a of jl)if(!i.includes(a)&&o[a]>0)throw new Q(`Content with role '${r}' can't contain '${a}' part`);e=!0}}function ql(s){var e;if(s.candidates===void 0||s.candidates.length===0)return!1;let t=(e=s.candidates[0])===null||e===void 0?void 0:e.content;if(t===void 0||t.parts===void 0||t.parts.length===0)return!1;for(let r of t.parts)if(r===void 0||Object.keys(r).length===0||r.text!==void 0&&r.text==="")return!1;return!0}var Wl="SILENT_ERROR",$i=class{constructor(e,t,r,n={}){this.model=t,this.params=r,this._requestOptions=n,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r?.history&&(Tu(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var r,n,o,i,a,l;await this._sendPromise;let p=tn(e),b={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(n=this.params)===null||n===void 0?void 0:n.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,p]},h=Object.assign(Object.assign({},this._requestOptions),t),g;return this._sendPromise=this._sendPromise.then(()=>Jl(this._apiKey,this.model,b,h)).then(c=>{var x;if(ql(c.response)){this._history.push(p);let P=Object.assign({parts:[],role:"model"},(x=c.response.candidates)===null||x===void 0?void 0:x[0].content);this._history.push(P)}else{let P=yt(c.response);P&&console.warn(`sendMessage() was unsuccessful. ${P}. Inspect response object for details.`)}g=c}).catch(c=>{throw this._sendPromise=Promise.resolve(),c}),await this._sendPromise,g}async sendMessageStream(e,t={}){var r,n,o,i,a,l;await this._sendPromise;let p=tn(e),b={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(n=this.params)===null||n===void 0?void 0:n.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,p]},h=Object.assign(Object.assign({},this._requestOptions),t),g=Kl(this._apiKey,this.model,b,h);return this._sendPromise=this._sendPromise.then(()=>g).catch(c=>{throw new Error(Wl)}).then(c=>c.response).then(c=>{if(ql(c)){this._history.push(p);let x=Object.assign({},c.candidates[0].content);x.role||(x.role="model"),this._history.push(x)}else{let x=yt(c);x&&console.warn(`sendMessageStream() was unsuccessful. ${x}. Inspect response object for details.`)}}).catch(c=>{c.message!==Wl&&console.error(c)}),g}};async function Mu(s,e,t,r){return(await rn(e,Xt.COUNT_TOKENS,s,!1,JSON.stringify(t),r)).json()}async function Ou(s,e,t,r){return(await rn(e,Xt.EMBED_CONTENT,s,!1,JSON.stringify(t),r)).json()}async function Fu(s,e,t,r){let n=t.requests.map(i=>Object.assign(Object.assign({},i),{model:e}));return(await rn(e,Xt.BATCH_EMBED_CONTENTS,s,!1,JSON.stringify({requests:n}),r)).json()}var fo=class{constructor(e,t,r={}){this.apiKey=e,this._requestOptions=r,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=Gl(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var r;let n=Ul(e),o=Object.assign(Object.assign({},this._requestOptions),t);return Jl(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},n),o)}async generateContentStream(e,t={}){var r;let n=Ul(e),o=Object.assign(Object.assign({},this._requestOptions),t);return Kl(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},n),o)}startChat(e){var t;return new $i(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(t=this.cachedContent)===null||t===void 0?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){let r=Ru(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),n=Object.assign(Object.assign({},this._requestOptions),t);return Mu(this.apiKey,this.model,r,n)}async embedContent(e,t={}){let r=ku(e),n=Object.assign(Object.assign({},this._requestOptions),t);return Ou(this.apiKey,this.model,r,n)}async batchEmbedContents(e,t={}){let r=Object.assign(Object.assign({},this._requestOptions),t);return Fu(this.apiKey,this.model,e,r)}};var ho=class{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new Q("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new fo(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,r){if(!e.name)throw new ke("Cached content must contain a `name` field.");if(!e.model)throw new ke("Cached content must contain a `model` field.");let n=["model","systemInstruction"];for(let i of n)if(t?.[i]&&e[i]&&t?.[i]!==e[i]){if(i==="model"){let a=t.model.startsWith("models/")?t.model.replace("models/",""):t.model,l=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(a===l)continue}throw new ke(`Different value for "${i}" specified in modelParams (${t[i]}) and cachedContent (${e[i]})`)}let o=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new fo(this.apiKey,o,r)}};var mo=class{getApiKey(e){let r=Vl.workspace.getConfiguration("promptStudio").get(`${e}.apiKey`);if(!r)throw new Error(`No API key configured for ${e}`);return r}async runPrompt(e){try{switch(e.provider){case"openai":return await this.runOpenAI(e);case"anthropic":return await this.runAnthropic(e);case"google":return await this.runGoogle(e);default:throw new Error(`Unknown provider: ${e.provider}`)}}catch(t){return{content:"",provider:e.provider,model:e.model,timestamp:new Date,error:t.message||"Unknown error occurred"}}}async runOpenAI(e){let t=this.getApiKey("openai"),r=new A({apiKey:t}),n=[];e.systemPrompt&&n.push({role:"system",content:e.systemPrompt}),n.push({role:"user",content:e.prompt});let o=await r.chat.completions.create({model:e.model,messages:n,temperature:e.temperature??.7,max_tokens:e.maxTokens??2e3});return{content:o.choices[0]?.message?.content||"",provider:"openai",model:e.model,timestamp:new Date,tokensUsed:o.usage?.total_tokens}}async runAnthropic(e){let t=this.getApiKey("anthropic"),n=await new Re({apiKey:t}).messages.create({model:e.model,max_tokens:e.maxTokens??2e3,temperature:e.temperature??.7,system:e.systemPrompt,messages:[{role:"user",content:e.prompt}]});return{content:n.content[0]?.type==="text"?n.content[0].text:"",provider:"anthropic",model:e.model,timestamp:new Date,tokensUsed:n.usage.input_tokens+n.usage.output_tokens}}async runGoogle(e){let t=this.getApiKey("google"),n=new ho(t).getGenerativeModel({model:e.model}),o=e.systemPrompt?`${e.systemPrompt}

${e.prompt}`:e.prompt;return{content:(await n.generateContent({contents:[{role:"user",parts:[{text:o}]}],generationConfig:{temperature:e.temperature??.7,maxOutputTokens:e.maxTokens??2e3}})).response.text(),provider:"google",model:e.model,timestamp:new Date}}};var bt=me(require("vscode"));var sn={openai:[{id:"gpt-5",label:"GPT-5"},{id:"gpt-5-mini",label:"GPT-5 Mini"},{id:"gpt-5-nano",label:"GPT-5 Nano"},{id:"gpt-4o",label:"GPT-4o"},{id:"gpt-4o-mini",label:"GPT-4o Mini"},{id:"o3",label:"o3"},{id:"o4-mini",label:"o4 Mini"}],anthropic:[{id:"claude-opus-4-5-20251101",label:"Claude Opus 4.5"},{id:"claude-sonnet-4-5-20250929",label:"Claude Sonnet 4.5"},{id:"claude-haiku-4-5-20251001",label:"Claude Haiku 4.5"},{id:"claude-sonnet-4-20250514",label:"Claude Sonnet 4"}],google:[{id:"gemini-3-pro",label:"Gemini 3 Pro"},{id:"gemini-2.5-pro",label:"Gemini 2.5 Pro"},{id:"gemini-2.5-flash",label:"Gemini 2.5 Flash"}]};function Xl(s){return sn[s].map(e=>e.id)}function go(s){return sn[s].map(e=>({provider:s,model:e.id,label:e.label}))}function zl(){let s={};for(let[e,t]of Object.entries(sn))s[e]=t.map(r=>({value:r.id,label:r.label}));return JSON.stringify(s,null,12)}var yo=class{constructor(e){this.llmManager=e}async runPrompt(e){return await bt.window.withProgress({location:bt.ProgressLocation.Notification,title:`Running prompt with ${e.provider}...`,cancellable:!1},async()=>await this.llmManager.runPrompt(e))}async runPromptInteractive(){let e=await bt.window.showQuickPick(["openai","anthropic","google"],{placeHolder:"Select LLM provider"});if(!e)return;let t=await bt.window.showQuickPick(Xl(e),{placeHolder:"Select model"});if(!t)return;let r=await bt.window.showInputBox({prompt:"Enter your prompt",placeHolder:"What would you like to ask?"});if(!r)return;let n=await bt.window.showInputBox({prompt:"Enter system prompt (optional, press Enter to skip)",placeHolder:"You are a helpful assistant..."}),o={provider:e,model:t,prompt:r,systemPrompt:n||void 0};return await this.runPrompt(o)}};var D=me(require("vscode")),_t=me(require("fs/promises")),Li=me(require("path")),bo=class{constructor(e,t){this.context=e;this.llmManager=t;this.testsPath=Li.join(e.globalStorageUri.fsPath,"tests.json"),this.resultsPath=Li.join(e.globalStorageUri.fsPath,"test-results.json"),this.ensureStorage()}testsPath;resultsPath;async ensureStorage(){try{await _t.mkdir(this.context.globalStorageUri.fsPath,{recursive:!0})}catch(e){console.error("Failed to create storage directory:",e)}}async createTest(){let e=await D.window.showInputBox({prompt:"Enter test name",placeHolder:"My Prompt Test"});if(!e)return;let t=await D.window.showInputBox({prompt:"Enter test description (optional)",placeHolder:"Tests the ability to..."}),r=await D.window.showQuickPick(["openai","anthropic","google"],{placeHolder:"Select LLM provider"});if(!r)return;let n={openai:["gpt-4","gpt-4-turbo","gpt-3.5-turbo"],anthropic:["claude-3-opus-20240229","claude-3-sonnet-20240229","claude-3-haiku-20240307"],google:["gemini-pro","gemini-pro-vision"]},o=await D.window.showQuickPick(n[r],{placeHolder:"Select model"});if(!o)return;let i=await D.window.showInputBox({prompt:"Enter the prompt to test",placeHolder:"Explain quantum computing in simple terms"});if(!i)return;let a=await D.window.showInputBox({prompt:"Enter system prompt (optional)",placeHolder:"You are a helpful assistant..."}),l={id:Date.now().toString(),name:e,description:t||void 0,provider:r,model:o,prompt:i,systemPrompt:a||void 0};await this.saveTest(l),D.window.showInformationMessage(`Test "${e}" created successfully!`)}async saveTest(e){let t=await this.loadTests();t.push(e),await _t.writeFile(this.testsPath,JSON.stringify(t,null,2))}async loadTests(){try{let e=await _t.readFile(this.testsPath,"utf-8");return JSON.parse(e)}catch{return[]}}async runTests(){let e=await this.loadTests();if(e.length===0){D.window.showInformationMessage("No tests found. Create a test first!");return}let t=await D.window.showQuickPick(e.map(n=>({label:n.name,description:n.description,test:n})),{placeHolder:"Select tests to run",canPickMany:!0});if(!t||t.length===0)return;let r=[];await D.window.withProgress({location:D.ProgressLocation.Notification,title:"Running tests...",cancellable:!1},async n=>{for(let o=0;o<t.length;o++){let{test:i}=t[o];n.report({message:`Running test ${o+1}/${t.length}: ${i.name}`,increment:100/t.length});let a={provider:i.provider,model:i.model,prompt:i.prompt,systemPrompt:i.systemPrompt},l=await this.llmManager.runPrompt(a),p={testId:i.id,testName:i.name,timestamp:new Date,response:l};r.push(p)}}),await this.saveTestRun(r),await this.showTestResults(r)}async saveTestRun(e){let t=await this.loadTestRuns(),r={id:Date.now().toString(),timestamp:new Date,results:e};t.push(r),await _t.writeFile(this.resultsPath,JSON.stringify(t,null,2))}async loadTestRuns(){try{let e=await _t.readFile(this.resultsPath,"utf-8");return JSON.parse(e)}catch{return[]}}async showTestResults(e){let t=await D.workspace.openTextDocument({content:this.formatTestResults(e),language:"markdown"});await D.window.showTextDocument(t)}formatTestResults(e){let t=`# Test Results

`;t+=`**Run Date:** ${new Date().toLocaleString()}

`,t+=`**Tests Run:** ${e.length}

`;for(let r of e)t+=`## ${r.testName}

`,t+=`**Provider:** ${r.response.provider}
`,t+=`**Model:** ${r.response.model}
`,t+=`**Timestamp:** ${r.timestamp.toLocaleString()}
`,r.response.tokensUsed&&(t+=`**Tokens Used:** ${r.response.tokensUsed}
`),r.response.error?t+=`
**Error:** ${r.response.error}

`:t+=`
**Response:**

${r.response.content}

`,t+=`---

`;return t}async compareResults(){let e=await this.loadTestRuns();if(e.length<2){D.window.showInformationMessage("Need at least 2 test runs to compare. Run tests first!");return}let t=e.map(a=>({label:new Date(a.timestamp).toLocaleString(),description:`${a.results.length} tests`,run:a})),r=await D.window.showQuickPick(t,{placeHolder:"Select first test run"});if(!r)return;let n=await D.window.showQuickPick(t.filter(a=>a.run.id!==r.run.id),{placeHolder:"Select second test run to compare"});if(!n)return;let o=this.compareTestRuns(r.run,n.run),i=await D.workspace.openTextDocument({content:o,language:"markdown"});await D.window.showTextDocument(i)}compareTestRuns(e,t){let r=`# Test Run Comparison

`;r+=`**Run 1:** ${new Date(e.timestamp).toLocaleString()}
`,r+=`**Run 2:** ${new Date(t.timestamp).toLocaleString()}

`;let n=new Map;for(let o of e.results)n.set(o.testId,{result1:o});for(let o of t.results){let i=n.get(o.testId)||{};n.set(o.testId,{...i,result2:o})}for(let[o,{result1:i,result2:a}]of n){let l=i?.testName||a?.testName||"Unknown Test";r+=`## ${l}

`,i?a?(r+=`### Run 1
`,r+=`**Provider:** ${i.response.provider} | **Model:** ${i.response.model}
`,i.response.error?r+=`**Error:** ${i.response.error}

`:r+=`
${i.response.content}

`,r+=`### Run 2
`,r+=`**Provider:** ${a.response.provider} | **Model:** ${a.response.model}
`,a.response.error?r+=`**Error:** ${a.response.error}

`:r+=`
${a.response.content}

`,i.response.content===a.response.content?r+=`\u2705 **Responses are identical**

`:r+=`\u2139\uFE0F **Responses differ**

`):(r+=`\u26A0\uFE0F Test not present in second run

`,r+=`**Run 1 Response:**

${i.response.content}

`):(r+=`\u26A0\uFE0F Test not present in first run

`,r+=`**Run 2 Response:**

${a.response.content}

`),r+=`---

`}return r}};var nn=me(require("vscode"));function $u(){return sn.openai.map(e=>`                <option value="${e.id}">${e.label}</option>`).join(`
`)}var _o=class{constructor(e,t,r){this.context=e;this.promptRunner=t;this.testManager=r}panel;async showPromptPanel(){if(this.panel){this.panel.reveal();return}this.panel=nn.window.createWebviewPanel("promptStudio","Prompt Studio",nn.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0}),this.panel.webview.html=this.getWebviewContent(),this.panel.webview.onDidReceiveMessage(async e=>{switch(e.command){case"runPrompt":await this.handleRunPrompt(e.data);break;case"saveAsTest":await this.handleSaveAsTest(e.data);break}},void 0,this.context.subscriptions),this.panel.onDidDispose(()=>{this.panel=void 0})}async handleRunPrompt(e){let t={provider:e.provider,model:e.model,prompt:e.prompt,systemPrompt:e.systemPrompt||void 0,temperature:e.temperature||.7,maxTokens:e.maxTokens||2e3},r=await this.promptRunner.runPrompt(t);this.panel?.webview.postMessage({command:"promptResponse",response:r})}async handleSaveAsTest(e){nn.window.showInformationMessage("Save as test feature - to be implemented")}getWebviewContent(){return`<!DOCTYPE html>
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
</html>`}};var C=me(require("vscode")),cs=me(require("path"));function Nu(){let s="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let t=0;t<32;t++)s+=e.charAt(Math.floor(Math.random()*e.length));return s}var wo=class{constructor(e,t,r){this._extensionUri=e;this.llmManager=t;this.historyManager=r}_view;currentFilePath="";currentFileName="";resolveWebviewView(e,t,r){this._view=e,e.webview.options={enableScripts:!0,localResourceRoots:[this._extensionUri]},e.webview.html=this._getHtmlForWebview(e.webview),e.webview.onDidReceiveMessage(async n=>{switch(n.type){case"getAvailableModels":await this.sendAvailableModels();break;case"getCurrentFile":await this.sendCurrentFile();break;case"runPrompt":await this.runPrompt(n);break;case"saveApiKeys":await this.saveApiKeys(n.keys);break;case"getApiKeys":await this.sendApiKeys();break;case"getHistory":await this.sendHistory(n.filePath);break;case"clearHistory":await this.clearHistory(n.filePath);break;case"openInNewTab":await this.openInNewTab(n.content,n.title);break;case"addFiles":await this.addFiles();break;case"readFile":await this.sendFileContent(n.filePath);break;case"getOpenFiles":await this.sendOpenFiles();break;case"selectCurrentFile":await this.selectCurrentFile(n.filePath);break}}),this.sendCurrentFile(),this.sendOpenFiles(),this.sendAvailableModels()}async sendCurrentFile(){let e=C.window.activeTextEditor;if(e&&this._view){let t=e.document;this._view.webview.postMessage({type:"currentFile",filePath:t.fileName,fileName:cs.basename(t.fileName),content:t.getText()})}}async readFileContent(e){try{let t=C.Uri.file(e),r=await C.workspace.fs.readFile(t);return Buffer.from(r).toString("utf8")}catch(t){throw new Error(`Failed to read file ${e}: ${t.message}`)}}async sendAvailableModels(){if(!this._view)return;let e=C.workspace.getConfiguration("promptStudio"),t=[],r=e.get("openai.apiKey");r&&r.trim()&&t.push(...go("openai"));let n=e.get("anthropic.apiKey");n&&n.trim()&&t.push(...go("anthropic"));let o=e.get("google.apiKey");o&&o.trim()&&t.push(...go("google")),this._view.webview.postMessage({type:"availableModels",models:t})}async runPrompt(e){if(this._view){this._view.webview.postMessage({type:"loading",loading:!0});try{this.currentFilePath=e.filePath||"",this.currentFileName=e.fileName||"";let t={provider:e.provider,model:e.model,prompt:e.prompt,systemPrompt:e.systemPrompt||void 0,temperature:.7,maxTokens:2e3},r=await this.llmManager.runPrompt(t);this.currentFilePath&&!r.error&&await this.historyManager.addEntry(this.currentFilePath,this.currentFileName,e.userPrompt||e.prompt,t.systemPrompt,t.provider,t.model,r),this._view.webview.postMessage({type:"response",response:r})}catch(t){this._view.webview.postMessage({type:"error",error:t.message||"Unknown error occurred"})}finally{this._view.webview.postMessage({type:"loading",loading:!1})}}}async saveApiKeys(e){let t=C.workspace.getConfiguration("promptStudio");try{e.openai!==void 0&&await t.update("openai.apiKey",e.openai,C.ConfigurationTarget.Global),e.anthropic!==void 0&&await t.update("anthropic.apiKey",e.anthropic,C.ConfigurationTarget.Global),e.google!==void 0&&await t.update("google.apiKey",e.google,C.ConfigurationTarget.Global),await this.sendAvailableModels(),this._view&&this._view.webview.postMessage({type:"apiKeysSaved",success:!0}),C.window.showInformationMessage("API keys saved successfully!")}catch(r){this._view&&this._view.webview.postMessage({type:"apiKeysSaved",success:!1,error:r.message}),C.window.showErrorMessage(`Failed to save API keys: ${r.message}`)}}async sendApiKeys(){if(!this._view)return;let e=C.workspace.getConfiguration("promptStudio"),t={openai:e.get("openai.apiKey")||"",anthropic:e.get("anthropic.apiKey")||"",google:e.get("google.apiKey")||""};this._view.webview.postMessage({type:"apiKeys",keys:t})}async sendHistory(e){if(!this._view)return;let t=e;if(!t){let n=C.window.activeTextEditor;if(!n){this._view.webview.postMessage({type:"history",entries:[]});return}t=n.document.fileName}let r=await this.historyManager.getHistoryForFile(t);this._view.webview.postMessage({type:"history",entries:r.map(n=>({id:n.id,timestamp:n.timestamp,prompt:n.prompt,response:n.response,systemPrompt:n.systemPrompt,provider:n.provider,model:n.model,tokensUsed:n.tokensUsed}))})}async clearHistory(e){try{await this.historyManager.clearHistoryForFile(e),C.window.showInformationMessage("History cleared for current file"),await this.sendHistory()}catch(t){C.window.showErrorMessage(`Failed to clear history: ${t.message}`)}}async openInNewTab(e,t){try{let r=await C.workspace.openTextDocument({content:e,language:"markdown"});await C.window.showTextDocument(r,{preview:!1,viewColumn:C.ViewColumn.One})}catch(r){C.window.showErrorMessage(`Failed to open in new tab: ${r.message}`)}}async addFiles(){try{let e=await C.window.showOpenDialog({canSelectMany:!0,openLabel:"Add Files",filters:{"All Files":["*"]}});if(e&&e.length>0&&this._view){let t=await Promise.all(e.map(async r=>{let n=await this.readFileContent(r.fsPath);return{filePath:r.fsPath,fileName:cs.basename(r.fsPath),content:n}}));this._view.webview.postMessage({type:"filesAdded",files:t})}}catch(e){C.window.showErrorMessage(`Failed to add files: ${e.message}`)}}async sendFileContent(e){try{let t=await this.readFileContent(e);this._view&&this._view.webview.postMessage({type:"fileContent",filePath:e,fileName:cs.basename(e),content:t})}catch(t){this._view&&this._view.webview.postMessage({type:"fileContentError",filePath:e,error:t.message})}}async sendOpenFiles(){if(!this._view)return;let e=C.window.tabGroups.all.flatMap(t=>t.tabs).filter(t=>t.input instanceof C.TabInputText).map(t=>{let r=t.input;return{filePath:r.uri.fsPath,fileName:cs.basename(r.uri.fsPath)}});this._view.webview.postMessage({type:"openFiles",files:e})}async selectCurrentFile(e){if(this._view)try{let t=await this.readFileContent(e);this._view.webview.postMessage({type:"currentFile",filePath:e,fileName:cs.basename(e),content:t})}catch(t){C.window.showErrorMessage(`Failed to read file: ${t.message}`)}}_getHtmlForWebview(e){let t=Nu();return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'nonce-${t}';">
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

    <script nonce="${t}">
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
</html>`}};var Ke=me(require("fs/promises")),Yl=me(require("path")),vo=class{constructor(e){this.context=e;this.historyPath=Yl.join(e.globalStorageUri.fsPath,"prompt-history.json"),this.ensureStorage()}historyPath;async ensureStorage(){try{await Ke.mkdir(this.context.globalStorageUri.fsPath,{recursive:!0});try{await Ke.access(this.historyPath)}catch{await Ke.writeFile(this.historyPath,JSON.stringify([],null,2))}}catch(e){console.error("Failed to create storage directory:",e)}}async addEntry(e,t,r,n,o,i,a){let l={id:Date.now().toString()+Math.random().toString(36).substr(2,9),timestamp:new Date,filePath:e,fileName:t,prompt:r,systemPrompt:n,provider:o,model:i,response:a.content,tokensUsed:a.tokensUsed,error:a.error},p=await this.loadHistory();return p.push(l),await this.saveHistory(p),l}async getHistoryForFile(e){return(await this.loadHistory()).filter(r=>r.filePath===e).sort((r,n)=>new Date(n.timestamp).getTime()-new Date(r.timestamp).getTime())}async getAllHistory(){return(await this.loadHistory()).sort((t,r)=>new Date(r.timestamp).getTime()-new Date(t.timestamp).getTime())}async getHistoryByFile(){let e=await this.loadHistory(),t=new Map;for(let r of e)t.has(r.filePath)||t.set(r.filePath,[]),t.get(r.filePath).push(r);for(let[,r]of t)r.sort((n,o)=>new Date(o.timestamp).getTime()-new Date(n.timestamp).getTime());return t}async deleteEntry(e){let r=(await this.loadHistory()).filter(n=>n.id!==e);await this.saveHistory(r)}async clearHistoryForFile(e){let r=(await this.loadHistory()).filter(n=>n.filePath!==e);await this.saveHistory(r)}async clearAllHistory(){await this.saveHistory([])}async loadHistory(){try{let e=await Ke.readFile(this.historyPath,"utf-8");return JSON.parse(e).map(r=>({...r,timestamp:new Date(r.timestamp)}))}catch(e){return console.error("Failed to load history:",e),[]}}async saveHistory(e){try{await Ke.writeFile(this.historyPath,JSON.stringify(e,null,2))}catch(t){throw console.error("Failed to save history:",t),t}}};function Lu(s){console.log("Prompt Studio extension activated");let e=new mo,t=new vo(s),r=new yo(e),n=new bo(s,e),o=new _o(s,r,n),i=new wo(s.extensionUri,e,t);s.subscriptions.push(Je.window.registerWebviewViewProvider("prompt-studio.sidebarView",i)),s.subscriptions.push(Je.window.onDidChangeActiveTextEditor(()=>{})),s.subscriptions.push(Je.commands.registerCommand("prompt-studio.runPrompt",async()=>{await o.showPromptPanel()})),s.subscriptions.push(Je.commands.registerCommand("prompt-studio.createTest",async()=>{await n.createTest()})),s.subscriptions.push(Je.commands.registerCommand("prompt-studio.runTests",async()=>{await n.runTests()})),s.subscriptions.push(Je.commands.registerCommand("prompt-studio.compareResults",async()=>{await n.compareResults()})),Je.window.showInformationMessage("Prompt Studio is ready!")}function Bu(){console.log("Prompt Studio extension deactivated")}0&&(module.exports={activate,deactivate});
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
