(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function c0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Bf={exports:{}},Co={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function Kx(){if(yg)return Co;yg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Co.Fragment=e,Co.jsx=i,Co.jsxs=i,Co}var Mg;function Qx(){return Mg||(Mg=1,Bf.exports=Kx()),Bf.exports}var O=Qx(),Ff={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function Jx(){if(Eg)return ce;Eg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,R={};function x(L,tt,Tt){this.props=L,this.context=tt,this.refs=R,this.updater=Tt||E}x.prototype.isReactComponent={},x.prototype.setState=function(L,tt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,tt,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=x.prototype;function I(L,tt,Tt){this.props=L,this.context=tt,this.refs=R,this.updater=Tt||E}var w=I.prototype=new _;w.constructor=I,C(w,x.prototype),w.isPureReactComponent=!0;var F=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function P(L,tt,Tt,bt,Y,_t){return Tt=_t.ref,{$$typeof:o,type:L,key:tt,ref:Tt!==void 0?Tt:null,props:_t}}function it(L,tt){return P(L.type,tt,void 0,void 0,void 0,L.props)}function N(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function A(L){var tt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Tt){return tt[Tt]})}var Q=/\/+/g;function st(L,tt){return typeof L=="object"&&L!==null&&L.key!=null?A(""+L.key):tt.toString(36)}function V(){}function mt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(V,V):(L.status="pending",L.then(function(tt){L.status==="pending"&&(L.status="fulfilled",L.value=tt)},function(tt){L.status==="pending"&&(L.status="rejected",L.reason=tt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function dt(L,tt,Tt,bt,Y){var _t=typeof L;(_t==="undefined"||_t==="boolean")&&(L=null);var Et=!1;if(L===null)Et=!0;else switch(_t){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(L.$$typeof){case o:case e:Et=!0;break;case g:return Et=L._init,dt(Et(L._payload),tt,Tt,bt,Y)}}if(Et)return Y=Y(L),Et=bt===""?"."+st(L,0):bt,F(Y)?(Tt="",Et!=null&&(Tt=Et.replace(Q,"$&/")+"/"),dt(Y,tt,Tt,"",function(jt){return jt})):Y!=null&&(N(Y)&&(Y=it(Y,Tt+(Y.key==null||L&&L.key===Y.key?"":(""+Y.key).replace(Q,"$&/")+"/")+Et)),tt.push(Y)),1;Et=0;var wt=bt===""?".":bt+":";if(F(L))for(var Ft=0;Ft<L.length;Ft++)bt=L[Ft],_t=wt+st(bt,Ft),Et+=dt(bt,tt,Tt,_t,Y);else if(Ft=S(L),typeof Ft=="function")for(L=Ft.call(L),Ft=0;!(bt=L.next()).done;)bt=bt.value,_t=wt+st(bt,Ft++),Et+=dt(bt,tt,Tt,_t,Y);else if(_t==="object"){if(typeof L.then=="function")return dt(mt(L),tt,Tt,bt,Y);throw tt=String(L),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return Et}function B(L,tt,Tt){if(L==null)return L;var bt=[],Y=0;return dt(L,bt,"","",function(_t){return tt.call(Tt,_t,Y++)}),bt}function $(L){if(L._status===-1){var tt=L._result;tt=tt(),tt.then(function(Tt){(L._status===0||L._status===-1)&&(L._status=1,L._result=Tt)},function(Tt){(L._status===0||L._status===-1)&&(L._status=2,L._result=Tt)}),L._status===-1&&(L._status=0,L._result=tt)}if(L._status===1)return L._result.default;throw L._result}var j=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function yt(){}return ce.Children={map:B,forEach:function(L,tt,Tt){B(L,function(){tt.apply(this,arguments)},Tt)},count:function(L){var tt=0;return B(L,function(){tt++}),tt},toArray:function(L){return B(L,function(tt){return tt})||[]},only:function(L){if(!N(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ce.Component=x,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=I,ce.StrictMode=r,ce.Suspense=p,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,ce.__COMPILER_RUNTIME={__proto__:null,c:function(L){return k.H.useMemoCache(L)}},ce.cache=function(L){return function(){return L.apply(null,arguments)}},ce.cloneElement=function(L,tt,Tt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var bt=C({},L.props),Y=L.key,_t=void 0;if(tt!=null)for(Et in tt.ref!==void 0&&(_t=void 0),tt.key!==void 0&&(Y=""+tt.key),tt)!H.call(tt,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&tt.ref===void 0||(bt[Et]=tt[Et]);var Et=arguments.length-2;if(Et===1)bt.children=Tt;else if(1<Et){for(var wt=Array(Et),Ft=0;Ft<Et;Ft++)wt[Ft]=arguments[Ft+2];bt.children=wt}return P(L.type,Y,void 0,void 0,_t,bt)},ce.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},ce.createElement=function(L,tt,Tt){var bt,Y={},_t=null;if(tt!=null)for(bt in tt.key!==void 0&&(_t=""+tt.key),tt)H.call(tt,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(Y[bt]=tt[bt]);var Et=arguments.length-2;if(Et===1)Y.children=Tt;else if(1<Et){for(var wt=Array(Et),Ft=0;Ft<Et;Ft++)wt[Ft]=arguments[Ft+2];Y.children=wt}if(L&&L.defaultProps)for(bt in Et=L.defaultProps,Et)Y[bt]===void 0&&(Y[bt]=Et[bt]);return P(L,_t,void 0,void 0,null,Y)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(L){return{$$typeof:d,render:L}},ce.isValidElement=N,ce.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:$}},ce.memo=function(L,tt){return{$$typeof:m,type:L,compare:tt===void 0?null:tt}},ce.startTransition=function(L){var tt=k.T,Tt={};k.T=Tt;try{var bt=L(),Y=k.S;Y!==null&&Y(Tt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(yt,j)}catch(_t){j(_t)}finally{k.T=tt}},ce.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},ce.use=function(L){return k.H.use(L)},ce.useActionState=function(L,tt,Tt){return k.H.useActionState(L,tt,Tt)},ce.useCallback=function(L,tt){return k.H.useCallback(L,tt)},ce.useContext=function(L){return k.H.useContext(L)},ce.useDebugValue=function(){},ce.useDeferredValue=function(L,tt){return k.H.useDeferredValue(L,tt)},ce.useEffect=function(L,tt,Tt){var bt=k.H;if(typeof Tt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return bt.useEffect(L,tt)},ce.useId=function(){return k.H.useId()},ce.useImperativeHandle=function(L,tt,Tt){return k.H.useImperativeHandle(L,tt,Tt)},ce.useInsertionEffect=function(L,tt){return k.H.useInsertionEffect(L,tt)},ce.useLayoutEffect=function(L,tt){return k.H.useLayoutEffect(L,tt)},ce.useMemo=function(L,tt){return k.H.useMemo(L,tt)},ce.useOptimistic=function(L,tt){return k.H.useOptimistic(L,tt)},ce.useReducer=function(L,tt,Tt){return k.H.useReducer(L,tt,Tt)},ce.useRef=function(L){return k.H.useRef(L)},ce.useState=function(L){return k.H.useState(L)},ce.useSyncExternalStore=function(L,tt,Tt){return k.H.useSyncExternalStore(L,tt,Tt)},ce.useTransition=function(){return k.H.useTransition()},ce.version="19.1.0",ce}var Tg;function Bh(){return Tg||(Tg=1,Ff.exports=Jx()),Ff.exports}var Ke=Bh();const $x=c0(Ke);var Hf={exports:{}},wo={},Gf={exports:{}},Vf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function tS(){return bg||(bg=1,function(o){function e(B,$){var j=B.length;B.push($);t:for(;0<j;){var yt=j-1>>>1,L=B[yt];if(0<l(L,$))B[yt]=$,B[j]=L,j=yt;else break t}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var $=B[0],j=B.pop();if(j!==$){B[0]=j;t:for(var yt=0,L=B.length,tt=L>>>1;yt<tt;){var Tt=2*(yt+1)-1,bt=B[Tt],Y=Tt+1,_t=B[Y];if(0>l(bt,j))Y<L&&0>l(_t,bt)?(B[yt]=_t,B[Y]=j,yt=Y):(B[yt]=bt,B[Tt]=j,yt=Tt);else if(Y<L&&0>l(_t,j))B[yt]=_t,B[Y]=j,yt=Y;else break t}}return $}function l(B,$){var j=B.sortIndex-$.sortIndex;return j!==0?j:B.id-$.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,v=null,S=3,E=!1,C=!1,R=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function F(B){for(var $=i(m);$!==null;){if($.callback===null)r(m);else if($.startTime<=B)r(m),$.sortIndex=$.expirationTime,e(p,$);else break;$=i(m)}}function k(B){if(R=!1,F(B),!C)if(i(p)!==null)C=!0,H||(H=!0,st());else{var $=i(m);$!==null&&dt(k,$.startTime-B)}}var H=!1,P=-1,it=5,N=-1;function A(){return x?!0:!(o.unstable_now()-N<it)}function Q(){if(x=!1,H){var B=o.unstable_now();N=B;var $=!0;try{t:{C=!1,R&&(R=!1,I(P),P=-1),E=!0;var j=S;try{e:{for(F(B),v=i(p);v!==null&&!(v.expirationTime>B&&A());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,S=v.priorityLevel;var L=yt(v.expirationTime<=B);if(B=o.unstable_now(),typeof L=="function"){v.callback=L,F(B),$=!0;break e}v===i(p)&&r(p),F(B)}else r(p);v=i(p)}if(v!==null)$=!0;else{var tt=i(m);tt!==null&&dt(k,tt.startTime-B),$=!1}}break t}finally{v=null,S=j,E=!1}$=void 0}}finally{$?st():H=!1}}}var st;if(typeof w=="function")st=function(){w(Q)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,mt=V.port2;V.port1.onmessage=Q,st=function(){mt.postMessage(null)}}else st=function(){_(Q,0)};function dt(B,$){P=_(function(){B(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):it=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(B){switch(S){case 1:case 2:case 3:var $=3;break;default:$=S}var j=S;S=$;try{return B()}finally{S=j}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(B,$){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var j=S;S=B;try{return $()}finally{S=j}},o.unstable_scheduleCallback=function(B,$,j){var yt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?yt+j:yt):j=yt,B){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=j+L,B={id:g++,callback:$,priorityLevel:B,startTime:j,expirationTime:L,sortIndex:-1},j>yt?(B.sortIndex=j,e(m,B),i(p)===null&&B===i(m)&&(R?(I(P),P=-1):R=!0,dt(k,j-yt))):(B.sortIndex=L,e(p,B),C||E||(C=!0,H||(H=!0,st()))),B},o.unstable_shouldYield=A,o.unstable_wrapCallback=function(B){var $=S;return function(){var j=S;S=$;try{return B.apply(this,arguments)}finally{S=j}}}}(Vf)),Vf}var Ag;function eS(){return Ag||(Ag=1,Gf.exports=tS()),Gf.exports}var kf={exports:{}},Sn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function nS(){if(Rg)return Sn;Rg=1;var o=Bh();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Sn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,g)},Sn.flushSync=function(p){var m=h.T,g=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=m,r.p=g,r.d.f()}},Sn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Sn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Sn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,E=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:E}):g==="script"&&r.d.X(p,{crossOrigin:v,integrity:S,fetchPriority:E,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Sn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Sn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Sn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Sn.requestFormReset=function(p){r.d.r(p)},Sn.unstable_batchedUpdates=function(p,m){return p(m)},Sn.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},Sn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Sn.version="19.1.0",Sn}var Cg;function iS(){if(Cg)return kf.exports;Cg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),kf.exports=nS(),kf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function aS(){if(wg)return wo;wg=1;var o=eS(),e=Bh(),i=iS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),t;if(f===s)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var y=!1,b=c.child;b;){if(b===a){y=!0,a=c,s=f;break}if(b===s){y=!0,s=c,a=f;break}b=b.sibling}if(!y){for(b=f.child;b;){if(b===a){y=!0,a=f,s=c;break}if(b===s){y=!0,s=f,a=c;break}b=b.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),w=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),Q=Symbol.iterator;function st(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var V=Symbol.for("react.client.reference");function mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===V?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case R:return"StrictMode";case k:return"Suspense";case H:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case w:return(t.displayName||"Context")+".Provider";case I:return(t._context.displayName||"Context")+".Consumer";case F:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:mt(t.type)||"Memo";case it:n=t._payload,t=t._init;try{return mt(t(n))}catch{}}return null}var dt=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},yt=[],L=-1;function tt(t){return{current:t}}function Tt(t){0>L||(t.current=yt[L],yt[L]=null,L--)}function bt(t,n){L++,yt[L]=t.current,t.current=n}var Y=tt(null),_t=tt(null),Et=tt(null),wt=tt(null);function Ft(t,n){switch(bt(Et,n),bt(_t,t),bt(Y,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Zm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Zm(n),t=Km(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Tt(Y),bt(Y,t)}function jt(){Tt(Y),Tt(_t),Tt(Et)}function oe(t){t.memoizedState!==null&&bt(wt,t);var n=Y.current,a=Km(n,t.type);n!==a&&(bt(_t,t),bt(Y,a))}function et(t){_t.current===t&&(Tt(Y),Tt(_t)),wt.current===t&&(Tt(wt),Eo._currentValue=j)}var Jt=Object.prototype.hasOwnProperty,qt=o.unstable_scheduleCallback,be=o.unstable_cancelCallback,Wt=o.unstable_shouldYield,Ut=o.unstable_requestPaint,U=o.unstable_now,T=o.unstable_getCurrentPriorityLevel,W=o.unstable_ImmediatePriority,lt=o.unstable_UserBlockingPriority,K=o.unstable_NormalPriority,ut=o.unstable_LowPriority,At=o.unstable_IdlePriority,pt=o.log,Rt=o.unstable_setDisableYieldValue,Dt=null,St=null;function Ct(t){if(typeof pt=="function"&&Rt(t),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(Dt,t)}catch{}}var Pt=Math.clz32?Math.clz32:kt,zt=Math.log,It=Math.LN2;function kt(t){return t>>>=0,t===0?32:31-(zt(t)/It|0)|0}var Zt=256,le=4194304;function ie(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pe(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~f,s!==0?c=ie(s):(y&=b,y!==0?c=ie(y):a||(a=b&~t,a!==0&&(c=ie(a))))):(b=s&~f,b!==0?c=ie(b):y!==0?c=ie(y):a||(a=s&~t,a!==0&&(c=ie(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Vt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function M(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ct(){var t=Zt;return Zt<<=1,(Zt&4194048)===0&&(Zt=256),t}function vt(){var t=le;return le<<=1,(le&62914560)===0&&(le=4194304),t}function Lt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Bt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ge(t,n,a,s,c,f){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,z=t.expirationTimes,nt=t.hiddenUpdates;for(a=y&~a;0<a;){var gt=31-Pt(a),Mt=1<<gt;b[gt]=0,z[gt]=-1;var rt=nt[gt];if(rt!==null)for(nt[gt]=null,gt=0;gt<rt.length;gt++){var ot=rt[gt];ot!==null&&(ot.lane&=-536870913)}a&=~Mt}s!==0&&ue(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(y&~n))}function ue(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Pt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function Ne(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Pt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Xe(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Se(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function He(){var t=$.p;return t!==0?t:(t=window.event,t===void 0?32:mg(t.type))}function je(t,n){var a=$.p;try{return $.p=t,n()}finally{$.p=a}}var qe=Math.random().toString(36).slice(2),Ae="__reactFiber$"+qe,Ge="__reactProps$"+qe,zn="__reactContainer$"+qe,ri="__reactEvents$"+qe,Xo="__reactListeners$"+qe,xr="__reactHandles$"+qe,Ds="__reactResources$"+qe,Ji="__reactMarker$"+qe;function Us(t){delete t[Ae],delete t[Ge],delete t[ri],delete t[Xo],delete t[xr]}function $i(t){var n=t[Ae];if(n)return n;for(var a=t.parentNode;a;){if(n=a[zn]||a[Ae]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=tg(t);t!==null;){if(a=t[Ae])return a;t=tg(t)}return n}t=a,a=t.parentNode}return null}function ta(t){if(t=t[Ae]||t[zn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function D(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Z(t){var n=t[Ds];return n||(n=t[Ds]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function at(t){t[Ji]=!0}var ht=new Set,ft={};function Nt(t,n){Gt(t,n),Gt(t+"Capture",n)}function Gt(t,n){for(ft[t]=n,t=0;t<n.length;t++)ht.add(n[t])}var Kt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},ae={};function re(t){return Jt.call(ae,t)?!0:Jt.call($t,t)?!1:Kt.test(t)?ae[t]=!0:($t[t]=!0,!1)}function ee(t,n,a){if(re(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Pe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ve(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var We,Wn;function Te(t){if(We===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);We=n&&n[1]||"",Wn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+We+t+Wn}var se=!1;function Va(t,n){if(!t||se)return"";se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(ot){var rt=ot}Reflect.construct(t,[],Mt)}else{try{Mt.call()}catch(ot){rt=ot}t.call(Mt.prototype)}}else{try{throw Error()}catch(ot){rt=ot}(Mt=t())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(ot){if(ot&&rt&&typeof ot.stack=="string")return[ot.stack,rt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),y=f[0],b=f[1];if(y&&b){var z=y.split(`
`),nt=b.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<nt.length&&!nt[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===nt.length)for(s=z.length-1,c=nt.length-1;1<=s&&0<=c&&z[s]!==nt[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==nt[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==nt[c]){var gt=`
`+z[s].replace(" at new "," at ");return t.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",t.displayName)),gt}while(1<=s&&0<=c);break}}}finally{se=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Te(a):""}function ze(t){switch(t.tag){case 26:case 27:case 5:return Te(t.type);case 16:return Te("Lazy");case 13:return Te("Suspense");case 19:return Te("SuspenseList");case 0:case 15:return Va(t.type,!1);case 11:return Va(t.type.render,!1);case 1:return Va(t.type,!0);case 31:return Te("Activity");default:return""}}function gi(t){try{var n="";do n+=ze(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Tn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ea(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ls(t){var n=ea(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){s=""+y,f.call(this,y)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Qe(t){t._valueTracker||(t._valueTracker=Ls(t))}function si(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=ea(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function na(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Cn=/[\n"\\]/g;function vn(t){return t.replace(Cn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ns(t,n,a,s,c,f,y,b){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Tn(n)):t.value!==""+Tn(n)&&(t.value=""+Tn(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Pc(t,y,Tn(n)):a!=null?Pc(t,y,Tn(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Tn(b):t.removeAttribute("name")}function Os(t,n,a,s,c,f,y,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Tn(a):"",n=n!=null?""+Tn(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y)}function Pc(t,n,a){n==="number"&&na(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Sr(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Tn(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Wh(t,n,a){if(n!=null&&(n=""+Tn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Tn(a):""}function Yh(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(dt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Tn(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function yr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var W0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||W0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Kh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Zh(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Zh(t,f,n[f])}function zc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Y0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Z0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jo(t){return Z0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ic=null;function Bc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mr=null,Er=null;function Qh(t){var n=ta(t);if(n&&(t=n.stateNode)){var a=t[Ge]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ns(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[Ge]||null;if(!c)throw Error(r(90));Ns(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&si(s)}break t;case"textarea":Wh(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Sr(t,!!a.multiple,n,!1)}}}var Fc=!1;function Jh(t,n,a){if(Fc)return t(n,a);Fc=!0;try{var s=t(n);return s}finally{if(Fc=!1,(Mr!==null||Er!==null)&&(Dl(),Mr&&(n=Mr,t=Er,Er=Mr=null,Qh(n),t)))for(n=0;n<t.length;n++)Qh(t[n])}}function Ps(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Ge]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=!1;if(Ci)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Hc=!1}var ia=null,Gc=null,qo=null;function $h(){if(qo)return qo;var t,n=Gc,a=n.length,s,c="value"in ia?ia.value:ia.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var y=a-t;for(s=1;s<=y&&n[a-s]===c[f-s];s++);return qo=c.slice(t,1<s?1-s:void 0)}function Wo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Yo(){return!0}function td(){return!1}function wn(t){function n(a,s,c,f,y){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Yo:td,this.isPropagationStopped=td,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),n}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=wn(ka),Is=g({},ka,{view:0,detail:0}),K0=wn(Is),Vc,kc,Bs,Ko=g({},Is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bs&&(Bs&&t.type==="mousemove"?(Vc=t.screenX-Bs.screenX,kc=t.screenY-Bs.screenY):kc=Vc=0,Bs=t),Vc)},movementY:function(t){return"movementY"in t?t.movementY:kc}}),ed=wn(Ko),Q0=g({},Ko,{dataTransfer:0}),J0=wn(Q0),$0=g({},Is,{relatedTarget:0}),Xc=wn($0),tv=g({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),ev=wn(tv),nv=g({},ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iv=wn(nv),av=g({},ka,{data:0}),nd=wn(av),rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ov[t])?!!n[t]:!1}function jc(){return lv}var cv=g({},Is,{key:function(t){if(t.key){var n=rv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(t){return t.type==="keypress"?Wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uv=wn(cv),fv=g({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),id=wn(fv),hv=g({},Is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),dv=wn(hv),pv=g({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),mv=wn(pv),gv=g({},Ko,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_v=wn(gv),vv=g({},ka,{newState:0,oldState:0}),xv=wn(vv),Sv=[9,13,27,32],qc=Ci&&"CompositionEvent"in window,Fs=null;Ci&&"documentMode"in document&&(Fs=document.documentMode);var yv=Ci&&"TextEvent"in window&&!Fs,ad=Ci&&(!qc||Fs&&8<Fs&&11>=Fs),rd=" ",sd=!1;function od(t,n){switch(t){case"keyup":return Sv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ld(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Tr=!1;function Mv(t,n){switch(t){case"compositionend":return ld(n);case"keypress":return n.which!==32?null:(sd=!0,rd);case"textInput":return t=n.data,t===rd&&sd?null:t;default:return null}}function Ev(t,n){if(Tr)return t==="compositionend"||!qc&&od(t,n)?(t=$h(),qo=Gc=ia=null,Tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ad&&n.locale!=="ko"?null:n.data;default:return null}}var Tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Tv[t.type]:n==="textarea"}function ud(t,n,a,s){Mr?Er?Er.push(s):Er=[s]:Mr=s,n=zl(n,"onChange"),0<n.length&&(a=new Zo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Hs=null,Gs=null;function bv(t){Xm(t,0)}function Qo(t){var n=D(t);if(si(n))return t}function fd(t,n){if(t==="change")return n}var hd=!1;if(Ci){var Wc;if(Ci){var Yc="oninput"in document;if(!Yc){var dd=document.createElement("div");dd.setAttribute("oninput","return;"),Yc=typeof dd.oninput=="function"}Wc=Yc}else Wc=!1;hd=Wc&&(!document.documentMode||9<document.documentMode)}function pd(){Hs&&(Hs.detachEvent("onpropertychange",md),Gs=Hs=null)}function md(t){if(t.propertyName==="value"&&Qo(Gs)){var n=[];ud(n,Gs,t,Bc(t)),Jh(bv,n)}}function Av(t,n,a){t==="focusin"?(pd(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",md)):t==="focusout"&&pd()}function Rv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qo(Gs)}function Cv(t,n){if(t==="click")return Qo(n)}function wv(t,n){if(t==="input"||t==="change")return Qo(n)}function Dv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var In=typeof Object.is=="function"?Object.is:Dv;function Vs(t,n){if(In(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Jt.call(n,c)||!In(t[c],n[c]))return!1}return!0}function gd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _d(t,n){var a=gd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=gd(a)}}function vd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?vd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function xd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=na(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=na(t.document)}return n}function Zc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Uv=Ci&&"documentMode"in document&&11>=document.documentMode,br=null,Kc=null,ks=null,Qc=!1;function Sd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qc||br==null||br!==na(s)||(s=br,"selectionStart"in s&&Zc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ks&&Vs(ks,s)||(ks=s,s=zl(Kc,"onSelect"),0<s.length&&(n=new Zo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=br)))}function Xa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ar={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},Jc={},yd={};Ci&&(yd=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function ja(t){if(Jc[t])return Jc[t];if(!Ar[t])return t;var n=Ar[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in yd)return Jc[t]=n[a];return t}var Md=ja("animationend"),Ed=ja("animationiteration"),Td=ja("animationstart"),Lv=ja("transitionrun"),Nv=ja("transitionstart"),Ov=ja("transitioncancel"),bd=ja("transitionend"),Ad=new Map,$c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$c.push("scrollEnd");function oi(t,n){Ad.set(t,n),Nt(n,[t])}var Rd=new WeakMap;function Yn(t,n){if(typeof t=="object"&&t!==null){var a=Rd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:gi(n)},Rd.set(t,n),n)}return{value:t,source:n,stack:gi(n)}}var Zn=[],Rr=0,tu=0;function Jo(){for(var t=Rr,n=tu=Rr=0;n<t;){var a=Zn[n];Zn[n++]=null;var s=Zn[n];Zn[n++]=null;var c=Zn[n];Zn[n++]=null;var f=Zn[n];if(Zn[n++]=null,s!==null&&c!==null){var y=s.pending;y===null?c.next=c:(c.next=y.next,y.next=c),s.pending=c}f!==0&&Cd(a,c,f)}}function $o(t,n,a,s){Zn[Rr++]=t,Zn[Rr++]=n,Zn[Rr++]=a,Zn[Rr++]=s,tu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function eu(t,n,a,s){return $o(t,n,a,s),tl(t)}function Cr(t,n){return $o(t,null,null,n),tl(t)}function Cd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Pt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function tl(t){if(50<mo)throw mo=0,lf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var wr={};function Pv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,n,a,s){return new Pv(t,n,a,s)}function nu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wi(t,n){var a=t.alternate;return a===null?(a=Bn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function wd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function el(t,n,a,s,c,f){var y=0;if(s=t,typeof t=="function")nu(t)&&(y=1);else if(typeof t=="string")y=Ix(t,a,Y.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case N:return t=Bn(31,a,n,c),t.elementType=N,t.lanes=f,t;case C:return qa(a.children,c,f,n);case R:y=8,c|=24;break;case x:return t=Bn(12,a,n,c|2),t.elementType=x,t.lanes=f,t;case k:return t=Bn(13,a,n,c),t.elementType=k,t.lanes=f,t;case H:return t=Bn(19,a,n,c),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case w:y=10;break t;case I:y=9;break t;case F:y=11;break t;case P:y=14;break t;case it:y=16,s=null;break t}y=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Bn(y,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function qa(t,n,a,s){return t=Bn(7,t,s,n),t.lanes=a,t}function iu(t,n,a){return t=Bn(6,t,null,n),t.lanes=a,t}function au(t,n,a){return n=Bn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Dr=[],Ur=0,nl=null,il=0,Kn=[],Qn=0,Wa=null,Di=1,Ui="";function Ya(t,n){Dr[Ur++]=il,Dr[Ur++]=nl,nl=t,il=n}function Dd(t,n,a){Kn[Qn++]=Di,Kn[Qn++]=Ui,Kn[Qn++]=Wa,Wa=t;var s=Di;t=Ui;var c=32-Pt(s)-1;s&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var y=c-c%5;f=(s&(1<<y)-1).toString(32),s>>=y,c-=y,Di=1<<32-Pt(n)+c|a<<c|s,Ui=f+t}else Di=1<<f|a<<c|s,Ui=t}function ru(t){t.return!==null&&(Ya(t,1),Dd(t,1,0))}function su(t){for(;t===nl;)nl=Dr[--Ur],Dr[Ur]=null,il=Dr[--Ur],Dr[Ur]=null;for(;t===Wa;)Wa=Kn[--Qn],Kn[Qn]=null,Ui=Kn[--Qn],Kn[Qn]=null,Di=Kn[--Qn],Kn[Qn]=null}var bn=null,Ye=null,Me=!1,Za=null,_i=!1,ou=Error(r(519));function Ka(t){var n=Error(r(418,""));throw qs(Yn(n,t)),ou}function Ud(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Ae]=t,n[Ge]=s,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<_o.length;a++)ve(_o[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Os(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Qe(n);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Yh(n,s.value,s.defaultValue,s.children),Qe(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Ym(n.textContent,a)?(s.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),s.onScroll!=null&&ve("scroll",n),s.onScrollEnd!=null&&ve("scrollend",n),s.onClick!=null&&(n.onclick=Il),n=!0):n=!1,n||Ka(t)}function Ld(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:bn=bn.return}}function Xs(t){if(t!==bn)return!1;if(!Me)return Ld(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Tf(t.type,t.memoizedProps)),a=!a),a&&Ye&&Ka(t),Ld(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Ye=ci(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Ye=null}}else n===27?(n=Ye,xa(t.type)?(t=Cf,Cf=null,Ye=t):Ye=n):Ye=bn?ci(t.stateNode.nextSibling):null;return!0}function js(){Ye=bn=null,Me=!1}function Nd(){var t=Za;return t!==null&&(Ln===null?Ln=t:Ln.push.apply(Ln,t),Za=null),t}function qs(t){Za===null?Za=[t]:Za.push(t)}var lu=tt(null),Qa=null,Li=null;function aa(t,n,a){bt(lu,n._currentValue),n._currentValue=a}function Ni(t){t._currentValue=lu.current,Tt(lu)}function cu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function uu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var z=0;z<n.length;z++)if(b.context===n[z]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),cu(f.return,a,t),s||(y=null);break t}f=b.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),cu(y,a,t),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===t){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Ws(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var b=c.type;In(c.pendingProps.value,y.value)||(t!==null?t.push(b):t=[b])}}else if(c===wt.current){if(y=c.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Eo):t=[Eo])}c=c.return}t!==null&&uu(n,t,a,s),n.flags|=262144}function al(t){for(t=t.firstContext;t!==null;){if(!In(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ja(t){Qa=t,Li=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function xn(t){return Od(Qa,t)}function rl(t,n){return Qa===null&&Ja(t),Od(t,n)}function Od(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Li===null){if(t===null)throw Error(r(308));Li=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Li=Li.next=n;return a}var zv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Iv=o.unstable_scheduleCallback,Bv=o.unstable_NormalPriority,rn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fu(){return{controller:new zv,data:new Map,refCount:0}}function Ys(t){t.refCount--,t.refCount===0&&Iv(Bv,function(){t.controller.abort()})}var Zs=null,hu=0,Lr=0,Nr=null;function Fv(t,n){if(Zs===null){var a=Zs=[];hu=0,Lr=mf(),Nr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return hu++,n.then(Pd,Pd),n}function Pd(){if(--hu===0&&Zs!==null){Nr!==null&&(Nr.status="fulfilled");var t=Zs;Zs=null,Lr=0,Nr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Hv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var zd=B.S;B.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Fv(t,n),zd!==null&&zd(t,n)};var $a=tt(null);function du(){var t=$a.current;return t!==null?t:Ie.pooledCache}function sl(t,n){n===null?bt($a,$a.current):bt($a,n.pool)}function Id(){var t=du();return t===null?null:{parent:rn._currentValue,pool:t}}var Ks=Error(r(460)),Bd=Error(r(474)),ol=Error(r(542)),pu={then:function(){}};function Fd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ll(){}function Hd(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ll,ll),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Vd(t),t;default:if(typeof n.status=="string")n.then(ll,ll);else{if(t=Ie,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Vd(t),t}throw Qs=n,Ks}}var Qs=null;function Gd(){if(Qs===null)throw Error(r(459));var t=Qs;return Qs=null,t}function Vd(t){if(t===Ks||t===ol)throw Error(r(483))}var ra=!1;function mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function sa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function oa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Re&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=tl(t),Cd(t,null,a),n}return $o(t,s,n,a),tl(t)}function Js(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ne(t,a)}}function _u(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var vu=!1;function $s(){if(vu){var t=Nr;if(t!==null)throw t}}function to(t,n,a,s){vu=!1;var c=t.updateQueue;ra=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var z=b,nt=z.next;z.next=null,y===null?f=nt:y.next=nt,y=z;var gt=t.alternate;gt!==null&&(gt=gt.updateQueue,b=gt.lastBaseUpdate,b!==y&&(b===null?gt.firstBaseUpdate=nt:b.next=nt,gt.lastBaseUpdate=z))}if(f!==null){var Mt=c.baseState;y=0,gt=nt=z=null,b=f;do{var rt=b.lane&-536870913,ot=rt!==b.lane;if(ot?(xe&rt)===rt:(s&rt)===rt){rt!==0&&rt===Lr&&(vu=!0),gt!==null&&(gt=gt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var te=t,Yt=b;rt=n;var Ue=a;switch(Yt.tag){case 1:if(te=Yt.payload,typeof te=="function"){Mt=te.call(Ue,Mt,rt);break t}Mt=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=Yt.payload,rt=typeof te=="function"?te.call(Ue,Mt,rt):te,rt==null)break t;Mt=g({},Mt,rt);break t;case 2:ra=!0}}rt=b.callback,rt!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[rt]:ot.push(rt))}else ot={lane:rt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},gt===null?(nt=gt=ot,z=Mt):gt=gt.next=ot,y|=rt;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;ot=b,b=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);gt===null&&(z=Mt),c.baseState=z,c.firstBaseUpdate=nt,c.lastBaseUpdate=gt,f===null&&(c.shared.lanes=0),ma|=y,t.lanes=y,t.memoizedState=Mt}}function kd(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Xd(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)kd(a[t],n)}var Or=tt(null),cl=tt(0);function jd(t,n){t=Hi,bt(cl,t),bt(Or,n),Hi=t|n.baseLanes}function xu(){bt(cl,Hi),bt(Or,Or.current)}function Su(){Hi=cl.current,Tt(Or),Tt(cl)}var la=0,de=null,we=null,en=null,ul=!1,Pr=!1,tr=!1,fl=0,eo=0,zr=null,Gv=0;function Je(){throw Error(r(321))}function yu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!In(t[a],n[a]))return!1;return!0}function Mu(t,n,a,s,c,f){return la=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?Cp:wp,tr=!1,f=a(s,c),tr=!1,Pr&&(f=Wd(n,a,s,c)),qd(t),f}function qd(t){B.H=_l;var n=we!==null&&we.next!==null;if(la=0,en=we=de=null,ul=!1,eo=0,zr=null,n)throw Error(r(300));t===null||cn||(t=t.dependencies,t!==null&&al(t)&&(cn=!0))}function Wd(t,n,a,s){de=t;var c=0;do{if(Pr&&(zr=null),eo=0,Pr=!1,25<=c)throw Error(r(301));if(c+=1,en=we=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=Yv,f=n(a,s)}while(Pr);return f}function Vv(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?no(n):n,t=t.useState()[0],(we!==null?we.memoizedState:null)!==t&&(de.flags|=1024),n}function Eu(){var t=fl!==0;return fl=0,t}function Tu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function bu(t){if(ul){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ul=!1}la=0,en=we=de=null,Pr=!1,eo=fl=0,zr=null}function Dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?de.memoizedState=en=t:en=en.next=t,en}function nn(){if(we===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=we.next;var n=en===null?de.memoizedState:en.next;if(n!==null)en=n,we=t;else{if(t===null)throw de.alternate===null?Error(r(467)):Error(r(310));we=t,t={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},en===null?de.memoizedState=en=t:en=en.next=t}return en}function Au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function no(t){var n=eo;return eo+=1,zr===null&&(zr=[]),t=Hd(zr,t,n),n=de,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Cp:wp),t}function hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return no(t);if(t.$$typeof===w)return xn(t)}throw Error(r(438,String(t)))}function Ru(t){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=de.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Au(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=A;return n.index++,a}function Oi(t,n){return typeof n=="function"?n(t):n}function dl(t){var n=nn();return Cu(n,we,t)}function Cu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=y=null,z=null,nt=n,gt=!1;do{var Mt=nt.lane&-536870913;if(Mt!==nt.lane?(xe&Mt)===Mt:(la&Mt)===Mt){var rt=nt.revertLane;if(rt===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),Mt===Lr&&(gt=!0);else if((la&rt)===rt){nt=nt.next,rt===Lr&&(gt=!0);continue}else Mt={lane:0,revertLane:nt.revertLane,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},z===null?(b=z=Mt,y=f):z=z.next=Mt,de.lanes|=rt,ma|=rt;Mt=nt.action,tr&&a(f,Mt),f=nt.hasEagerState?nt.eagerState:a(f,Mt)}else rt={lane:Mt,revertLane:nt.revertLane,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},z===null?(b=z=rt,y=f):z=z.next=rt,de.lanes|=Mt,ma|=Mt;nt=nt.next}while(nt!==null&&nt!==n);if(z===null?y=f:z.next=b,!In(f,t.memoizedState)&&(cn=!0,gt&&(a=Nr,a!==null)))throw a;t.memoizedState=f,t.baseState=y,t.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function wu(t){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=t(f,y.action),y=y.next;while(y!==c);In(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Yd(t,n,a){var s=de,c=nn(),f=Me;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!In((we||c).memoizedState,a);y&&(c.memoizedState=a,cn=!0),c=c.queue;var b=Qd.bind(null,s,c,t);if(io(2048,8,b,[t]),c.getSnapshot!==n||y||en!==null&&en.memoizedState.tag&1){if(s.flags|=2048,Ir(9,pl(),Kd.bind(null,s,c,a,n),null),Ie===null)throw Error(r(349));f||(la&124)!==0||Zd(s,n,a)}return a}function Zd(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=Au(),de.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Kd(t,n,a,s){n.value=a,n.getSnapshot=s,Jd(n)&&$d(t)}function Qd(t,n,a){return a(function(){Jd(n)&&$d(t)})}function Jd(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!In(t,a)}catch{return!0}}function $d(t){var n=Cr(t,2);n!==null&&kn(n,t,2)}function Du(t){var n=Dn();if(typeof t=="function"){var a=t;if(t=a(),tr){Ct(!0);try{a()}finally{Ct(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:t},n}function tp(t,n,a,s){return t.baseState=a,Cu(t,we,typeof s=="function"?s:Oi)}function kv(t,n,a,s,c){if(gl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};B.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,ep(n,f)):(f.next=a.next,n.pending=a.next=f)}}function ep(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=B.T,y={};B.T=y;try{var b=a(c,s),z=B.S;z!==null&&z(y,b),np(t,n,b)}catch(nt){Uu(t,n,nt)}finally{B.T=f}}else try{f=a(c,s),np(t,n,f)}catch(nt){Uu(t,n,nt)}}function np(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){ip(t,n,s)},function(s){return Uu(t,n,s)}):ip(t,n,a)}function ip(t,n,a){n.status="fulfilled",n.value=a,ap(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,ep(t,a)))}function Uu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,ap(n),n=n.next;while(n!==s)}t.action=null}function ap(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function rp(t,n){return n}function sp(t,n){if(Me){var a=Ie.formState;if(a!==null){t:{var s=de;if(Me){if(Ye){e:{for(var c=Ye,f=_i;c.nodeType!==8;){if(!f){c=null;break e}if(c=ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ye=ci(c.nextSibling),s=c.data==="F!";break t}}Ka(s)}s=!1}s&&(n=a[0])}}return a=Dn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rp,lastRenderedState:n},a.queue=s,a=bp.bind(null,de,s),s.dispatch=a,s=Du(!1),f=zu.bind(null,de,!1,s.queue),s=Dn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=kv.bind(null,de,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function op(t){var n=nn();return lp(n,we,t)}function lp(t,n,a){if(n=Cu(t,n,rp)[0],t=dl(Oi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=no(n)}catch(y){throw y===Ks?ol:y}else s=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(de.flags|=2048,Ir(9,pl(),Xv.bind(null,c,a),null)),[s,f,t]}function Xv(t,n){t.action=n}function cp(t){var n=nn(),a=we;if(a!==null)return lp(n,a,t);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Ir(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=de.updateQueue,n===null&&(n=Au(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function pl(){return{destroy:void 0,resource:void 0}}function up(){return nn().memoizedState}function ml(t,n,a,s){var c=Dn();s=s===void 0?null:s,de.flags|=t,c.memoizedState=Ir(1|n,pl(),a,s)}function io(t,n,a,s){var c=nn();s=s===void 0?null:s;var f=c.memoizedState.inst;we!==null&&s!==null&&yu(s,we.memoizedState.deps)?c.memoizedState=Ir(n,f,a,s):(de.flags|=t,c.memoizedState=Ir(1|n,f,a,s))}function fp(t,n){ml(8390656,8,t,n)}function hp(t,n){io(2048,8,t,n)}function dp(t,n){return io(4,2,t,n)}function pp(t,n){return io(4,4,t,n)}function mp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function gp(t,n,a){a=a!=null?a.concat([t]):null,io(4,4,mp.bind(null,n,t),a)}function Lu(){}function _p(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&yu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function vp(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&yu(n,s[1]))return s[0];if(s=t(),tr){Ct(!0);try{t()}finally{Ct(!1)}}return a.memoizedState=[s,n],s}function Nu(t,n,a){return a===void 0||(la&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=ym(),de.lanes|=t,ma|=t,a)}function xp(t,n,a,s){return In(a,n)?a:Or.current!==null?(t=Nu(t,a,s),In(t,n)||(cn=!0),t):(la&42)===0?(cn=!0,t.memoizedState=a):(t=ym(),de.lanes|=t,ma|=t,n)}function Sp(t,n,a,s,c){var f=$.p;$.p=f!==0&&8>f?f:8;var y=B.T,b={};B.T=b,zu(t,!1,n,a);try{var z=c(),nt=B.S;if(nt!==null&&nt(b,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var gt=Hv(z,s);ao(t,n,gt,Vn(t))}else ao(t,n,s,Vn(t))}catch(Mt){ao(t,n,{then:function(){},status:"rejected",reason:Mt},Vn())}finally{$.p=f,B.T=y}}function jv(){}function Ou(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=yp(t).queue;Sp(t,c,n,j,a===null?jv:function(){return Mp(t),a(s)})}function yp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Mp(t){var n=yp(t).next.queue;ao(t,n,{},Vn())}function Pu(){return xn(Eo)}function Ep(){return nn().memoizedState}function Tp(){return nn().memoizedState}function qv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Vn();t=sa(a);var s=oa(n,t,a);s!==null&&(kn(s,n,a),Js(s,n,a)),n={cache:fu()},t.payload=n;return}n=n.return}}function Wv(t,n,a){var s=Vn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},gl(t)?Ap(n,a):(a=eu(t,n,a,s),a!==null&&(kn(a,t,s),Rp(a,n,s)))}function bp(t,n,a){var s=Vn();ao(t,n,a,s)}function ao(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(gl(t))Ap(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,b=f(y,a);if(c.hasEagerState=!0,c.eagerState=b,In(b,y))return $o(t,n,c,0),Ie===null&&Jo(),!1}catch{}finally{}if(a=eu(t,n,c,s),a!==null)return kn(a,t,s),Rp(a,n,s),!0}return!1}function zu(t,n,a,s){if(s={lane:2,revertLane:mf(),action:s,hasEagerState:!1,eagerState:null,next:null},gl(t)){if(n)throw Error(r(479))}else n=eu(t,a,s,2),n!==null&&kn(n,t,2)}function gl(t){var n=t.alternate;return t===de||n!==null&&n===de}function Ap(t,n){Pr=ul=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Rp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ne(t,a)}}var _l={readContext:xn,use:hl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je},Cp={readContext:xn,use:hl,useCallback:function(t,n){return Dn().memoizedState=[t,n===void 0?null:n],t},useContext:xn,useEffect:fp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ml(4194308,4,mp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ml(4194308,4,t,n)},useInsertionEffect:function(t,n){ml(4,2,t,n)},useMemo:function(t,n){var a=Dn();n=n===void 0?null:n;var s=t();if(tr){Ct(!0);try{t()}finally{Ct(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Dn();if(a!==void 0){var c=a(n);if(tr){Ct(!0);try{a(n)}finally{Ct(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Wv.bind(null,de,t),[s.memoizedState,t]},useRef:function(t){var n=Dn();return t={current:t},n.memoizedState=t},useState:function(t){t=Du(t);var n=t.queue,a=bp.bind(null,de,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Lu,useDeferredValue:function(t,n){var a=Dn();return Nu(a,t,n)},useTransition:function(){var t=Du(!1);return t=Sp.bind(null,de,t.queue,!0,!1),Dn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=de,c=Dn();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ie===null)throw Error(r(349));(xe&124)!==0||Zd(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,fp(Qd.bind(null,s,f,t),[t]),s.flags|=2048,Ir(9,pl(),Kd.bind(null,s,f,a,n),null),a},useId:function(){var t=Dn(),n=Ie.identifierPrefix;if(Me){var a=Ui,s=Di;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=fl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Gv++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Pu,useFormState:sp,useActionState:sp,useOptimistic:function(t){var n=Dn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=zu.bind(null,de,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ru,useCacheRefresh:function(){return Dn().memoizedState=qv.bind(null,de)}},wp={readContext:xn,use:hl,useCallback:_p,useContext:xn,useEffect:hp,useImperativeHandle:gp,useInsertionEffect:dp,useLayoutEffect:pp,useMemo:vp,useReducer:dl,useRef:up,useState:function(){return dl(Oi)},useDebugValue:Lu,useDeferredValue:function(t,n){var a=nn();return xp(a,we.memoizedState,t,n)},useTransition:function(){var t=dl(Oi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:no(t),n]},useSyncExternalStore:Yd,useId:Ep,useHostTransitionStatus:Pu,useFormState:op,useActionState:op,useOptimistic:function(t,n){var a=nn();return tp(a,we,t,n)},useMemoCache:Ru,useCacheRefresh:Tp},Yv={readContext:xn,use:hl,useCallback:_p,useContext:xn,useEffect:hp,useImperativeHandle:gp,useInsertionEffect:dp,useLayoutEffect:pp,useMemo:vp,useReducer:wu,useRef:up,useState:function(){return wu(Oi)},useDebugValue:Lu,useDeferredValue:function(t,n){var a=nn();return we===null?Nu(a,t,n):xp(a,we.memoizedState,t,n)},useTransition:function(){var t=wu(Oi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:no(t),n]},useSyncExternalStore:Yd,useId:Ep,useHostTransitionStatus:Pu,useFormState:cp,useActionState:cp,useOptimistic:function(t,n){var a=nn();return we!==null?tp(a,we,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ru,useCacheRefresh:Tp},Br=null,ro=0;function vl(t){var n=ro;return ro+=1,Br===null&&(Br=[]),Hd(Br,t,n)}function so(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function xl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Dp(t){var n=t._init;return n(t._payload)}function Up(t){function n(q,G){if(t){var J=q.deletions;J===null?(q.deletions=[G],q.flags|=16):J.push(G)}}function a(q,G){if(!t)return null;for(;G!==null;)n(q,G),G=G.sibling;return null}function s(q){for(var G=new Map;q!==null;)q.key!==null?G.set(q.key,q):G.set(q.index,q),q=q.sibling;return G}function c(q,G){return q=wi(q,G),q.index=0,q.sibling=null,q}function f(q,G,J){return q.index=J,t?(J=q.alternate,J!==null?(J=J.index,J<G?(q.flags|=67108866,G):J):(q.flags|=67108866,G)):(q.flags|=1048576,G)}function y(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function b(q,G,J,xt){return G===null||G.tag!==6?(G=iu(J,q.mode,xt),G.return=q,G):(G=c(G,J),G.return=q,G)}function z(q,G,J,xt){var Ht=J.type;return Ht===C?gt(q,G,J.props.children,xt,J.key):G!==null&&(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===it&&Dp(Ht)===G.type)?(G=c(G,J.props),so(G,J),G.return=q,G):(G=el(J.type,J.key,J.props,null,q.mode,xt),so(G,J),G.return=q,G)}function nt(q,G,J,xt){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=au(J,q.mode,xt),G.return=q,G):(G=c(G,J.children||[]),G.return=q,G)}function gt(q,G,J,xt,Ht){return G===null||G.tag!==7?(G=qa(J,q.mode,xt,Ht),G.return=q,G):(G=c(G,J),G.return=q,G)}function Mt(q,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=iu(""+G,q.mode,J),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case S:return J=el(G.type,G.key,G.props,null,q.mode,J),so(J,G),J.return=q,J;case E:return G=au(G,q.mode,J),G.return=q,G;case it:var xt=G._init;return G=xt(G._payload),Mt(q,G,J)}if(dt(G)||st(G))return G=qa(G,q.mode,J,null),G.return=q,G;if(typeof G.then=="function")return Mt(q,vl(G),J);if(G.$$typeof===w)return Mt(q,rl(q,G),J);xl(q,G)}return null}function rt(q,G,J,xt){var Ht=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ht!==null?null:b(q,G,""+J,xt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case S:return J.key===Ht?z(q,G,J,xt):null;case E:return J.key===Ht?nt(q,G,J,xt):null;case it:return Ht=J._init,J=Ht(J._payload),rt(q,G,J,xt)}if(dt(J)||st(J))return Ht!==null?null:gt(q,G,J,xt,null);if(typeof J.then=="function")return rt(q,G,vl(J),xt);if(J.$$typeof===w)return rt(q,G,rl(q,J),xt);xl(q,J)}return null}function ot(q,G,J,xt,Ht){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return q=q.get(J)||null,b(G,q,""+xt,Ht);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case S:return q=q.get(xt.key===null?J:xt.key)||null,z(G,q,xt,Ht);case E:return q=q.get(xt.key===null?J:xt.key)||null,nt(G,q,xt,Ht);case it:var me=xt._init;return xt=me(xt._payload),ot(q,G,J,xt,Ht)}if(dt(xt)||st(xt))return q=q.get(J)||null,gt(G,q,xt,Ht,null);if(typeof xt.then=="function")return ot(q,G,J,vl(xt),Ht);if(xt.$$typeof===w)return ot(q,G,J,rl(G,xt),Ht);xl(G,xt)}return null}function te(q,G,J,xt){for(var Ht=null,me=null,Xt=G,Qt=G=0,fn=null;Xt!==null&&Qt<J.length;Qt++){Xt.index>Qt?(fn=Xt,Xt=null):fn=Xt.sibling;var ye=rt(q,Xt,J[Qt],xt);if(ye===null){Xt===null&&(Xt=fn);break}t&&Xt&&ye.alternate===null&&n(q,Xt),G=f(ye,G,Qt),me===null?Ht=ye:me.sibling=ye,me=ye,Xt=fn}if(Qt===J.length)return a(q,Xt),Me&&Ya(q,Qt),Ht;if(Xt===null){for(;Qt<J.length;Qt++)Xt=Mt(q,J[Qt],xt),Xt!==null&&(G=f(Xt,G,Qt),me===null?Ht=Xt:me.sibling=Xt,me=Xt);return Me&&Ya(q,Qt),Ht}for(Xt=s(Xt);Qt<J.length;Qt++)fn=ot(Xt,q,Qt,J[Qt],xt),fn!==null&&(t&&fn.alternate!==null&&Xt.delete(fn.key===null?Qt:fn.key),G=f(fn,G,Qt),me===null?Ht=fn:me.sibling=fn,me=fn);return t&&Xt.forEach(function(Ta){return n(q,Ta)}),Me&&Ya(q,Qt),Ht}function Yt(q,G,J,xt){if(J==null)throw Error(r(151));for(var Ht=null,me=null,Xt=G,Qt=G=0,fn=null,ye=J.next();Xt!==null&&!ye.done;Qt++,ye=J.next()){Xt.index>Qt?(fn=Xt,Xt=null):fn=Xt.sibling;var Ta=rt(q,Xt,ye.value,xt);if(Ta===null){Xt===null&&(Xt=fn);break}t&&Xt&&Ta.alternate===null&&n(q,Xt),G=f(Ta,G,Qt),me===null?Ht=Ta:me.sibling=Ta,me=Ta,Xt=fn}if(ye.done)return a(q,Xt),Me&&Ya(q,Qt),Ht;if(Xt===null){for(;!ye.done;Qt++,ye=J.next())ye=Mt(q,ye.value,xt),ye!==null&&(G=f(ye,G,Qt),me===null?Ht=ye:me.sibling=ye,me=ye);return Me&&Ya(q,Qt),Ht}for(Xt=s(Xt);!ye.done;Qt++,ye=J.next())ye=ot(Xt,q,Qt,ye.value,xt),ye!==null&&(t&&ye.alternate!==null&&Xt.delete(ye.key===null?Qt:ye.key),G=f(ye,G,Qt),me===null?Ht=ye:me.sibling=ye,me=ye);return t&&Xt.forEach(function(Zx){return n(q,Zx)}),Me&&Ya(q,Qt),Ht}function Ue(q,G,J,xt){if(typeof J=="object"&&J!==null&&J.type===C&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case S:t:{for(var Ht=J.key;G!==null;){if(G.key===Ht){if(Ht=J.type,Ht===C){if(G.tag===7){a(q,G.sibling),xt=c(G,J.props.children),xt.return=q,q=xt;break t}}else if(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===it&&Dp(Ht)===G.type){a(q,G.sibling),xt=c(G,J.props),so(xt,J),xt.return=q,q=xt;break t}a(q,G);break}else n(q,G);G=G.sibling}J.type===C?(xt=qa(J.props.children,q.mode,xt,J.key),xt.return=q,q=xt):(xt=el(J.type,J.key,J.props,null,q.mode,xt),so(xt,J),xt.return=q,q=xt)}return y(q);case E:t:{for(Ht=J.key;G!==null;){if(G.key===Ht)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){a(q,G.sibling),xt=c(G,J.children||[]),xt.return=q,q=xt;break t}else{a(q,G);break}else n(q,G);G=G.sibling}xt=au(J,q.mode,xt),xt.return=q,q=xt}return y(q);case it:return Ht=J._init,J=Ht(J._payload),Ue(q,G,J,xt)}if(dt(J))return te(q,G,J,xt);if(st(J)){if(Ht=st(J),typeof Ht!="function")throw Error(r(150));return J=Ht.call(J),Yt(q,G,J,xt)}if(typeof J.then=="function")return Ue(q,G,vl(J),xt);if(J.$$typeof===w)return Ue(q,G,rl(q,J),xt);xl(q,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(a(q,G.sibling),xt=c(G,J),xt.return=q,q=xt):(a(q,G),xt=iu(J,q.mode,xt),xt.return=q,q=xt),y(q)):a(q,G)}return function(q,G,J,xt){try{ro=0;var Ht=Ue(q,G,J,xt);return Br=null,Ht}catch(Xt){if(Xt===Ks||Xt===ol)throw Xt;var me=Bn(29,Xt,null,q.mode);return me.lanes=xt,me.return=q,me}finally{}}}var Fr=Up(!0),Lp=Up(!1),Jn=tt(null),vi=null;function ca(t){var n=t.alternate;bt(sn,sn.current&1),bt(Jn,t),vi===null&&(n===null||Or.current!==null||n.memoizedState!==null)&&(vi=t)}function Np(t){if(t.tag===22){if(bt(sn,sn.current),bt(Jn,t),vi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(vi=t)}}else ua()}function ua(){bt(sn,sn.current),bt(Jn,Jn.current)}function Pi(t){Tt(Jn),vi===t&&(vi=null),Tt(sn)}var sn=tt(0);function Sl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Rf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Iu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Bu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Vn(),c=sa(s);c.payload=n,a!=null&&(c.callback=a),n=oa(t,c,s),n!==null&&(kn(n,t,s),Js(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Vn(),c=sa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=oa(t,c,s),n!==null&&(kn(n,t,s),Js(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Vn(),s=sa(a);s.tag=2,n!=null&&(s.callback=n),n=oa(t,s,a),n!==null&&(kn(n,t,a),Js(n,t,a))}};function Op(t,n,a,s,c,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,y):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(c,f):!0}function Pp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Bu.enqueueReplaceState(n,n.state,null)}function er(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function zp(t){yl(t)}function Ip(t){console.error(t)}function Bp(t){yl(t)}function Ml(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Fp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Fu(t,n,a){return a=sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ml(t,n)},a}function Hp(t){return t=sa(t),t.tag=3,t}function Gp(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Fp(n,a,s)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Fp(n,a,s),typeof c!="function"&&(ga===null?ga=new Set([this]):ga.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function Zv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ws(n,a,c,!0),a=Jn.current,a!==null){switch(a.tag){case 13:return vi===null?uf():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===pu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),hf(t,s,c)),!1;case 22:return a.flags|=65536,s===pu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),hf(t,s,c)),!1}throw Error(r(435,a.tag))}return hf(t,s,c),uf(),!1}if(Me)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==ou&&(t=Error(r(422),{cause:s}),qs(Yn(t,a)))):(s!==ou&&(n=Error(r(423),{cause:s}),qs(Yn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Yn(s,a),c=Fu(t.stateNode,s,c),_u(t,c),Ze!==4&&(Ze=2)),!1;var f=Error(r(520),{cause:s});if(f=Yn(f,a),po===null?po=[f]:po.push(f),Ze!==4&&(Ze=2),n===null)return!0;s=Yn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Fu(a.stateNode,s,t),_u(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ga===null||!ga.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Hp(c),Gp(c,t,a,s),_u(a,c),!1}a=a.return}while(a!==null);return!1}var Vp=Error(r(461)),cn=!1;function mn(t,n,a,s){n.child=t===null?Lp(n,null,a,s):Fr(n,t.child,a,s)}function kp(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var y={};for(var b in s)b!=="ref"&&(y[b]=s[b])}else y=s;return Ja(n),s=Mu(t,n,a,y,f,c),b=Eu(),t!==null&&!cn?(Tu(t,n,c),zi(t,n,c)):(Me&&b&&ru(n),n.flags|=1,mn(t,n,s,c),n.child)}function Xp(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!nu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,jp(t,n,f,s,c)):(t=el(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Wu(t,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(y,s)&&t.ref===n.ref)return zi(t,n,c)}return n.flags|=1,t=wi(f,s),t.ref=n.ref,t.return=n,n.child=t}function jp(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Vs(f,s)&&t.ref===n.ref)if(cn=!1,n.pendingProps=s=f,Wu(t,c))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,zi(t,n,c)}return Hu(t,n,a,s,c)}function qp(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Wp(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&sl(n,f!==null?f.cachePool:null),f!==null?jd(n,f):xu(),Np(n);else return n.lanes=n.childLanes=536870912,Wp(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(sl(n,f.cachePool),jd(n,f),ua(),n.memoizedState=null):(t!==null&&sl(n,null),xu(),ua());return mn(t,n,c,a),n.child}function Wp(t,n,a,s){var c=du();return c=c===null?null:{parent:rn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&sl(n,null),xu(),Np(n),t!==null&&Ws(t,n,s,!0),null}function El(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Hu(t,n,a,s,c){return Ja(n),a=Mu(t,n,a,s,void 0,c),s=Eu(),t!==null&&!cn?(Tu(t,n,c),zi(t,n,c)):(Me&&s&&ru(n),n.flags|=1,mn(t,n,a,c),n.child)}function Yp(t,n,a,s,c,f){return Ja(n),n.updateQueue=null,a=Wd(n,s,a,c),qd(t),s=Eu(),t!==null&&!cn?(Tu(t,n,f),zi(t,n,f)):(Me&&s&&ru(n),n.flags|=1,mn(t,n,a,f),n.child)}function Zp(t,n,a,s,c){if(Ja(n),n.stateNode===null){var f=wr,y=a.contextType;typeof y=="object"&&y!==null&&(f=xn(y)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Bu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},mu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?xn(y):wr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Iu(n,a,y,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Bu.enqueueReplaceState(f,f.state,null),to(n,s,f,c),$s(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,z=er(a,b);f.props=z;var nt=f.context,gt=a.contextType;y=wr,typeof gt=="object"&&gt!==null&&(y=xn(gt));var Mt=a.getDerivedStateFromProps;gt=typeof Mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,gt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||nt!==y)&&Pp(n,f,s,y),ra=!1;var rt=n.memoizedState;f.state=rt,to(n,s,f,c),$s(),nt=n.memoizedState,b||rt!==nt||ra?(typeof Mt=="function"&&(Iu(n,a,Mt,s),nt=n.memoizedState),(z=ra||Op(n,a,z,s,rt,nt,y))?(gt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=nt),f.props=s,f.state=nt,f.context=y,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,gu(t,n),y=n.memoizedProps,gt=er(a,y),f.props=gt,Mt=n.pendingProps,rt=f.context,nt=a.contextType,z=wr,typeof nt=="object"&&nt!==null&&(z=xn(nt)),b=a.getDerivedStateFromProps,(nt=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==Mt||rt!==z)&&Pp(n,f,s,z),ra=!1,rt=n.memoizedState,f.state=rt,to(n,s,f,c),$s();var ot=n.memoizedState;y!==Mt||rt!==ot||ra||t!==null&&t.dependencies!==null&&al(t.dependencies)?(typeof b=="function"&&(Iu(n,a,b,s),ot=n.memoizedState),(gt=ra||Op(n,a,gt,s,rt,ot,z)||t!==null&&t.dependencies!==null&&al(t.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&rt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&rt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=z,s=gt):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&rt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&rt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,El(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Fr(n,t.child,null,c),n.child=Fr(n,null,a,c)):mn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=zi(t,n,c),t}function Kp(t,n,a,s){return js(),n.flags|=256,mn(t,n,a,s),n.child}var Gu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vu(t){return{baseLanes:t,cachePool:Id()}}function ku(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=$n),t}function Qp(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=t!==null&&t.memoizedState===null?!1:(sn.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(c?ca(n):ua(),Me){var b=Ye,z;if(z=b){t:{for(z=b,b=_i;z.nodeType!==8;){if(!b){b=null;break t}if(z=ci(z.nextSibling),z===null){b=null;break t}}b=z}b!==null?(n.memoizedState={dehydrated:b,treeContext:Wa!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},z=Bn(18,null,null,0),z.stateNode=b,z.return=n,n.child=z,bn=n,Ye=null,z=!0):z=!1}z||Ka(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Rf(b)?n.lanes=32:n.lanes=536870912,null;Pi(n)}return b=s.children,s=s.fallback,c?(ua(),c=n.mode,b=Tl({mode:"hidden",children:b},c),s=qa(s,c,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,c=n.child,c.memoizedState=Vu(a),c.childLanes=ku(t,y,a),n.memoizedState=Gu,s):(ca(n),Xu(n,b))}if(z=t.memoizedState,z!==null&&(b=z.dehydrated,b!==null)){if(f)n.flags&256?(ca(n),n.flags&=-257,n=ju(t,n,a)):n.memoizedState!==null?(ua(),n.child=t.child,n.flags|=128,n=null):(ua(),c=s.fallback,b=n.mode,s=Tl({mode:"visible",children:s.children},b),c=qa(c,b,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Fr(n,t.child,null,a),s=n.child,s.memoizedState=Vu(a),s.childLanes=ku(t,y,a),n.memoizedState=Gu,n=c);else if(ca(n),Rf(b)){if(y=b.nextSibling&&b.nextSibling.dataset,y)var nt=y.dgst;y=nt,s=Error(r(419)),s.stack="",s.digest=y,qs({value:s,source:null,stack:null}),n=ju(t,n,a)}else if(cn||Ws(t,n,a,!1),y=(a&t.childLanes)!==0,cn||y){if(y=Ie,y!==null&&(s=a&-a,s=(s&42)!==0?1:Xe(s),s=(s&(y.suspendedLanes|a))!==0?0:s,s!==0&&s!==z.retryLane))throw z.retryLane=s,Cr(t,s),kn(y,t,s),Vp;b.data==="$?"||uf(),n=ju(t,n,a)}else b.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Ye=ci(b.nextSibling),bn=n,Me=!0,Za=null,_i=!1,t!==null&&(Kn[Qn++]=Di,Kn[Qn++]=Ui,Kn[Qn++]=Wa,Di=t.id,Ui=t.overflow,Wa=n),n=Xu(n,s.children),n.flags|=4096);return n}return c?(ua(),c=s.fallback,b=n.mode,z=t.child,nt=z.sibling,s=wi(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,nt!==null?c=wi(nt,c):(c=qa(c,b,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,b=t.child.memoizedState,b===null?b=Vu(a):(z=b.cachePool,z!==null?(nt=rn._currentValue,z=z.parent!==nt?{parent:nt,pool:nt}:z):z=Id(),b={baseLanes:b.baseLanes|a,cachePool:z}),c.memoizedState=b,c.childLanes=ku(t,y,a),n.memoizedState=Gu,s):(ca(n),a=t.child,t=a.sibling,a=wi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Xu(t,n){return n=Tl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Tl(t,n){return t=Bn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function ju(t,n,a){return Fr(n,t.child,null,a),t=Xu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Jp(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),cu(t.return,n,a)}function qu(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function $p(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(mn(t,n,s.children,a),s=sn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jp(t,a,n);else if(t.tag===19)Jp(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(bt(sn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Sl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),qu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Sl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}qu(n,!0,a,null,f);break;case"together":qu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function zi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ma|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ws(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=wi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=wi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Wu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&al(t)))}function Kv(t,n,a){switch(n.tag){case 3:Ft(n,n.stateNode.containerInfo),aa(n,rn,t.memoizedState.cache),js();break;case 27:case 5:oe(n);break;case 4:Ft(n,n.stateNode.containerInfo);break;case 10:aa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ca(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Qp(t,n,a):(ca(n),t=zi(t,n,a),t!==null?t.sibling:null);ca(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ws(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return $p(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),bt(sn,sn.current),s)break;return null;case 22:case 23:return n.lanes=0,qp(t,n,a);case 24:aa(n,rn,t.memoizedState.cache)}return zi(t,n,a)}function tm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!Wu(t,a)&&(n.flags&128)===0)return cn=!1,Kv(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,Me&&(n.flags&1048576)!==0&&Dd(n,il,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")nu(s)?(t=er(s,t),n.tag=1,n=Zp(null,n,s,t,a)):(n.tag=0,n=Hu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===F){n.tag=11,n=kp(null,n,s,t,a);break t}else if(c===P){n.tag=14,n=Xp(null,n,s,t,a);break t}}throw n=mt(s)||s,Error(r(306,n,""))}}return n;case 0:return Hu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=er(s,n.pendingProps),Zp(t,n,s,c,a);case 3:t:{if(Ft(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,gu(t,n),to(n,s,null,a);var y=n.memoizedState;if(s=y.cache,aa(n,rn,s),s!==f.cache&&uu(n,[rn],a,!0),$s(),s=y.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Kp(t,n,s,a);break t}else if(s!==c){c=Yn(Error(r(424)),n),qs(c),n=Kp(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ye=ci(t.firstChild),bn=n,Me=!0,Za=null,_i=!0,a=Lp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(js(),s===c){n=zi(t,n,a);break t}mn(t,n,s,a)}n=n.child}return n;case 26:return El(t,n),t===null?(a=ag(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,t=n.pendingProps,s=Bl(Et.current).createElement(a),s[Ae]=n,s[Ge]=t,_n(s,a,t),at(s),n.stateNode=s):n.memoizedState=ag(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return oe(n),t===null&&Me&&(s=n.stateNode=eg(n.type,n.pendingProps,Et.current),bn=n,_i=!0,c=Ye,xa(n.type)?(Cf=c,Ye=ci(s.firstChild)):Ye=c),mn(t,n,n.pendingProps.children,a),El(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((c=s=Ye)&&(s=Tx(s,n.type,n.pendingProps,_i),s!==null?(n.stateNode=s,bn=n,Ye=ci(s.firstChild),_i=!1,c=!0):c=!1),c||Ka(n)),oe(n),c=n.type,f=n.pendingProps,y=t!==null?t.memoizedProps:null,s=f.children,Tf(c,f)?s=null:y!==null&&Tf(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=Mu(t,n,Vv,null,null,a),Eo._currentValue=c),El(t,n),mn(t,n,s,a),n.child;case 6:return t===null&&Me&&((t=a=Ye)&&(a=bx(a,n.pendingProps,_i),a!==null?(n.stateNode=a,bn=n,Ye=null,t=!0):t=!1),t||Ka(n)),null;case 13:return Qp(t,n,a);case 4:return Ft(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Fr(n,null,s,a):mn(t,n,s,a),n.child;case 11:return kp(t,n,n.type,n.pendingProps,a);case 7:return mn(t,n,n.pendingProps,a),n.child;case 8:return mn(t,n,n.pendingProps.children,a),n.child;case 12:return mn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,aa(n,n.type,s.value),mn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,Ja(n),c=xn(c),s=s(c),n.flags|=1,mn(t,n,s,a),n.child;case 14:return Xp(t,n,n.type,n.pendingProps,a);case 15:return jp(t,n,n.type,n.pendingProps,a);case 19:return $p(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=Tl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=wi(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return qp(t,n,a);case 24:return Ja(n),s=xn(rn),t===null?(c=du(),c===null&&(c=Ie,f=fu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},mu(n),aa(n,rn,c)):((t.lanes&a)!==0&&(gu(t,n),to(n,null,null,a),$s()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),aa(n,rn,s)):(s=f.cache,aa(n,rn,s),s!==c.cache&&uu(n,[rn],a,!0))),mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ii(t){t.flags|=4}function em(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!cg(n)){if(n=Jn.current,n!==null&&((xe&4194048)===xe?vi!==null:(xe&62914560)!==xe&&(xe&536870912)===0||n!==vi))throw Qs=pu,Bd;t.flags|=8192}}function bl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?vt():536870912,t.lanes|=n,kr|=n)}function oo(t,n){if(!Me)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Qv(t,n,a){var s=n.pendingProps;switch(su(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return ke(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ni(rn),jt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Xs(n)?Ii(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Nd())),ke(n),null;case 26:return a=n.memoizedState,t===null?(Ii(n),a!==null?(ke(n),em(n,a)):(ke(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Ii(n),ke(n),em(n,a)):(ke(n),n.flags&=-16777217):(t.memoizedProps!==s&&Ii(n),ke(n),n.flags&=-16777217),null;case 27:et(n),a=Et.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ii(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return ke(n),null}t=Y.current,Xs(n)?Ud(n):(t=eg(c,s,a),n.stateNode=t,Ii(n))}return ke(n),null;case 5:if(et(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ii(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return ke(n),null}if(t=Y.current,Xs(n))Ud(n);else{switch(c=Bl(Et.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[Ae]=n,t[Ge]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(_n(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Ii(n)}}return ke(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ii(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Et.current,Xs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=bn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[Ae]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Ym(t.nodeValue,a)),t||Ka(n)}else t=Bl(t).createTextNode(s),t[Ae]=n,n.stateNode=t}return ke(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Xs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Ae]=n}else js(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),c=!1}else c=Nd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Pi(n),n):(Pi(n),null)}if(Pi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),bl(n,n.updateQueue),ke(n),null;case 4:return jt(),t===null&&xf(n.stateNode.containerInfo),ke(n),null;case 10:return Ni(n.type),ke(n),null;case 19:if(Tt(sn),c=n.memoizedState,c===null)return ke(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)oo(c,!1);else{if(Ze!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Sl(t),f!==null){for(n.flags|=128,oo(c,!1),t=f.updateQueue,n.updateQueue=t,bl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)wd(a,t),a=a.sibling;return bt(sn,sn.current&1|2),n.child}t=t.sibling}c.tail!==null&&U()>Cl&&(n.flags|=128,s=!0,oo(c,!1),n.lanes=4194304)}else{if(!s)if(t=Sl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,bl(n,t),oo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Me)return ke(n),null}else 2*U()-c.renderingStartTime>Cl&&a!==536870912&&(n.flags|=128,s=!0,oo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=U(),n.sibling=null,t=sn.current,bt(sn,s?t&1|2:t&1),n):(ke(n),null);case 22:case 23:return Pi(n),Su(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),a=n.updateQueue,a!==null&&bl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Tt($a),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ni(rn),ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Jv(t,n){switch(su(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ni(rn),jt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return et(n),null;case 13:if(Pi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));js()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Tt(sn),null;case 4:return jt(),null;case 10:return Ni(n.type),null;case 22:case 23:return Pi(n),Su(),t!==null&&Tt($a),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ni(rn),null;case 25:return null;default:return null}}function nm(t,n){switch(su(n),n.tag){case 3:Ni(rn),jt();break;case 26:case 27:case 5:et(n);break;case 4:jt();break;case 13:Pi(n);break;case 19:Tt(sn);break;case 10:Ni(n.type);break;case 22:case 23:Pi(n),Su(),t!==null&&Tt($a);break;case 24:Ni(rn)}}function lo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,y=a.inst;s=f(),y.destroy=s}a=a.next}while(a!==c)}}catch(b){Oe(n,n.return,b)}}function fa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var y=s.inst,b=y.destroy;if(b!==void 0){y.destroy=void 0,c=n;var z=a,nt=b;try{nt()}catch(gt){Oe(c,z,gt)}}}s=s.next}while(s!==f)}}catch(gt){Oe(n,n.return,gt)}}function im(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Xd(n,a)}catch(s){Oe(t,t.return,s)}}}function am(t,n,a){a.props=er(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Oe(t,n,s)}}function co(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Oe(t,n,c)}}function xi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Oe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Oe(t,n,c)}else a.current=null}function rm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Oe(t,t.return,c)}}function Yu(t,n,a){try{var s=t.stateNode;xx(s,t.type,a,n),s[Ge]=n}catch(c){Oe(t,t.return,c)}}function sm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&xa(t.type)||t.tag===4}function Zu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||sm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&xa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ku(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Il));else if(s!==4&&(s===27&&xa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ku(t,n,a),t=t.sibling;t!==null;)Ku(t,n,a),t=t.sibling}function Al(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&xa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Al(t,n,a),t=t.sibling;t!==null;)Al(t,n,a),t=t.sibling}function om(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);_n(n,s,a),n[Ae]=t,n[Ge]=a}catch(f){Oe(t,t.return,f)}}var Bi=!1,$e=!1,Qu=!1,lm=typeof WeakSet=="function"?WeakSet:Set,un=null;function $v(t,n){if(t=t.containerInfo,Mf=Xl,t=xd(t),Zc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,b=-1,z=-1,nt=0,gt=0,Mt=t,rt=null;e:for(;;){for(var ot;Mt!==a||c!==0&&Mt.nodeType!==3||(b=y+c),Mt!==f||s!==0&&Mt.nodeType!==3||(z=y+s),Mt.nodeType===3&&(y+=Mt.nodeValue.length),(ot=Mt.firstChild)!==null;)rt=Mt,Mt=ot;for(;;){if(Mt===t)break e;if(rt===a&&++nt===c&&(b=y),rt===f&&++gt===s&&(z=y),(ot=Mt.nextSibling)!==null)break;Mt=rt,rt=Mt.parentNode}Mt=ot}a=b===-1||z===-1?null:{start:b,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ef={focusedElem:t,selectionRange:a},Xl=!1,un=n;un!==null;)if(n=un,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,un=t;else for(;un!==null;){switch(n=un,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var te=er(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(te,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Yt){Oe(a,a.return,Yt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Af(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Af(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,un=t;break}un=n.return}}function cm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ha(t,a),s&4&&lo(5,a);break;case 1:if(ha(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){Oe(a,a.return,y)}else{var c=er(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Oe(a,a.return,y)}}s&64&&im(a),s&512&&co(a,a.return);break;case 3:if(ha(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Xd(t,n)}catch(y){Oe(a,a.return,y)}}break;case 27:n===null&&s&4&&om(a);case 26:case 5:ha(t,a),n===null&&s&4&&rm(a),s&512&&co(a,a.return);break;case 12:ha(t,a);break;case 13:ha(t,a),s&4&&hm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=lx.bind(null,a),Ax(t,a))));break;case 22:if(s=a.memoizedState!==null||Bi,!s){n=n!==null&&n.memoizedState!==null||$e,c=Bi;var f=$e;Bi=s,($e=n)&&!f?da(t,a,(a.subtreeFlags&8772)!==0):ha(t,a),Bi=c,$e=f}break;case 30:break;default:ha(t,a)}}function um(t){var n=t.alternate;n!==null&&(t.alternate=null,um(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Us(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Fe=null,Un=!1;function Fi(t,n,a){for(a=a.child;a!==null;)fm(t,n,a),a=a.sibling}function fm(t,n,a){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Dt,a)}catch{}switch(a.tag){case 26:$e||xi(a,n),Fi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||xi(a,n);var s=Fe,c=Un;xa(a.type)&&(Fe=a.stateNode,Un=!1),Fi(t,n,a),xo(a.stateNode),Fe=s,Un=c;break;case 5:$e||xi(a,n);case 6:if(s=Fe,c=Un,Fe=null,Fi(t,n,a),Fe=s,Un=c,Fe!==null)if(Un)try{(Fe.nodeType===9?Fe.body:Fe.nodeName==="HTML"?Fe.ownerDocument.body:Fe).removeChild(a.stateNode)}catch(f){Oe(a,n,f)}else try{Fe.removeChild(a.stateNode)}catch(f){Oe(a,n,f)}break;case 18:Fe!==null&&(Un?(t=Fe,$m(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ro(t)):$m(Fe,a.stateNode));break;case 4:s=Fe,c=Un,Fe=a.stateNode.containerInfo,Un=!0,Fi(t,n,a),Fe=s,Un=c;break;case 0:case 11:case 14:case 15:$e||fa(2,a,n),$e||fa(4,a,n),Fi(t,n,a);break;case 1:$e||(xi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&am(a,n,s)),Fi(t,n,a);break;case 21:Fi(t,n,a);break;case 22:$e=(s=$e)||a.memoizedState!==null,Fi(t,n,a),$e=s;break;default:Fi(t,n,a)}}function hm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ro(t)}catch(a){Oe(n,n.return,a)}}function tx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new lm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new lm),n;default:throw Error(r(435,t.tag))}}function Ju(t,n){var a=tx(t);n.forEach(function(s){var c=cx.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function Fn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,y=n,b=y;t:for(;b!==null;){switch(b.tag){case 27:if(xa(b.type)){Fe=b.stateNode,Un=!1;break t}break;case 5:Fe=b.stateNode,Un=!1;break t;case 3:case 4:Fe=b.stateNode.containerInfo,Un=!0;break t}b=b.return}if(Fe===null)throw Error(r(160));fm(f,y,c),Fe=null,Un=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)dm(n,t),n=n.sibling}var li=null;function dm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Fn(n,t),Hn(t),s&4&&(fa(3,t,t.return),lo(3,t),fa(5,t,t.return));break;case 1:Fn(n,t),Hn(t),s&512&&($e||a===null||xi(a,a.return)),s&64&&Bi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=li;if(Fn(n,t),Hn(t),s&512&&($e||a===null||xi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ji]||f[Ae]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),_n(f,s,a),f[Ae]=t,at(f),s=f;break t;case"link":var y=og("link","href",c).get(s+(a.href||""));if(y){for(var b=0;b<y.length;b++)if(f=y[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(b,1);break e}}f=c.createElement(s),_n(f,s,a),c.head.appendChild(f);break;case"meta":if(y=og("meta","content",c).get(s+(a.content||""))){for(b=0;b<y.length;b++)if(f=y[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(b,1);break e}}f=c.createElement(s),_n(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[Ae]=t,at(f),s=f}t.stateNode=s}else lg(c,t.type,t.stateNode);else t.stateNode=sg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?lg(c,t.type,t.stateNode):sg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Yu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,t),Hn(t),s&512&&($e||a===null||xi(a,a.return)),a!==null&&s&4&&Yu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,t),Hn(t),s&512&&($e||a===null||xi(a,a.return)),t.flags&32){c=t.stateNode;try{yr(c,"")}catch(ot){Oe(t,t.return,ot)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Yu(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Qu=!0);break;case 6:if(Fn(n,t),Hn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(ot){Oe(t,t.return,ot)}}break;case 3:if(Gl=null,c=li,li=Fl(n.containerInfo),Fn(n,t),li=c,Hn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Ro(n.containerInfo)}catch(ot){Oe(t,t.return,ot)}Qu&&(Qu=!1,pm(t));break;case 4:s=li,li=Fl(t.stateNode.containerInfo),Fn(n,t),Hn(t),li=s;break;case 12:Fn(n,t),Hn(t);break;case 13:Fn(n,t),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(rf=U()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ju(t,s)));break;case 22:c=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,nt=Bi,gt=$e;if(Bi=nt||c,$e=gt||z,Fn(n,t),$e=gt,Bi=nt,Hn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||Bi||$e||nr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{b=z.stateNode;var Mt=z.memoizedProps.style,rt=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;b.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(ot){Oe(z,z.return,ot)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(ot){Oe(z,z.return,ot)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Ju(t,a))));break;case 19:Fn(n,t),Hn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ju(t,s)));break;case 30:break;case 21:break;default:Fn(n,t),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(sm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Zu(t);Al(t,f,c);break;case 5:var y=a.stateNode;a.flags&32&&(yr(y,""),a.flags&=-33);var b=Zu(t);Al(t,b,y);break;case 3:case 4:var z=a.stateNode.containerInfo,nt=Zu(t);Ku(t,nt,z);break;default:throw Error(r(161))}}catch(gt){Oe(t,t.return,gt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function pm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;pm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ha(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)cm(t,n.alternate,n),n=n.sibling}function nr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:fa(4,n,n.return),nr(n);break;case 1:xi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&am(n,n.return,a),nr(n);break;case 27:xo(n.stateNode);case 26:case 5:xi(n,n.return),nr(n);break;case 22:n.memoizedState===null&&nr(n);break;case 30:nr(n);break;default:nr(n)}t=t.sibling}}function da(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:da(c,f,a),lo(4,f);break;case 1:if(da(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(nt){Oe(s,s.return,nt)}if(s=f,c=s.updateQueue,c!==null){var b=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)kd(z[c],b)}catch(nt){Oe(s,s.return,nt)}}a&&y&64&&im(f),co(f,f.return);break;case 27:om(f);case 26:case 5:da(c,f,a),a&&s===null&&y&4&&rm(f),co(f,f.return);break;case 12:da(c,f,a);break;case 13:da(c,f,a),a&&y&4&&hm(c,f);break;case 22:f.memoizedState===null&&da(c,f,a),co(f,f.return);break;case 30:break;default:da(c,f,a)}n=n.sibling}}function $u(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ys(a))}function tf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ys(t))}function Si(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)mm(t,n,a,s),n=n.sibling}function mm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Si(t,n,a,s),c&2048&&lo(9,n);break;case 1:Si(t,n,a,s);break;case 3:Si(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ys(t)));break;case 12:if(c&2048){Si(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,y=f.id,b=f.onPostCommit;typeof b=="function"&&b(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Oe(n,n.return,z)}}else Si(t,n,a,s);break;case 13:Si(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Si(t,n,a,s):uo(t,n):f._visibility&2?Si(t,n,a,s):(f._visibility|=2,Hr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&$u(y,n);break;case 24:Si(t,n,a,s),c&2048&&tf(n.alternate,n);break;default:Si(t,n,a,s)}}function Hr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,y=n,b=a,z=s,nt=y.flags;switch(y.tag){case 0:case 11:case 15:Hr(f,y,b,z,c),lo(8,y);break;case 23:break;case 22:var gt=y.stateNode;y.memoizedState!==null?gt._visibility&2?Hr(f,y,b,z,c):uo(f,y):(gt._visibility|=2,Hr(f,y,b,z,c)),c&&nt&2048&&$u(y.alternate,y);break;case 24:Hr(f,y,b,z,c),c&&nt&2048&&tf(y.alternate,y);break;default:Hr(f,y,b,z,c)}n=n.sibling}}function uo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:uo(a,s),c&2048&&$u(s.alternate,s);break;case 24:uo(a,s),c&2048&&tf(s.alternate,s);break;default:uo(a,s)}n=n.sibling}}var fo=8192;function Gr(t){if(t.subtreeFlags&fo)for(t=t.child;t!==null;)gm(t),t=t.sibling}function gm(t){switch(t.tag){case 26:Gr(t),t.flags&fo&&t.memoizedState!==null&&Fx(li,t.memoizedState,t.memoizedProps);break;case 5:Gr(t);break;case 3:case 4:var n=li;li=Fl(t.stateNode.containerInfo),Gr(t),li=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=fo,fo=16777216,Gr(t),fo=n):Gr(t));break;default:Gr(t)}}function _m(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ho(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];un=s,xm(s,t)}_m(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vm(t),t=t.sibling}function vm(t){switch(t.tag){case 0:case 11:case 15:ho(t),t.flags&2048&&fa(9,t,t.return);break;case 3:ho(t);break;case 12:ho(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Rl(t)):ho(t);break;default:ho(t)}}function Rl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];un=s,xm(s,t)}_m(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:fa(8,n,n.return),Rl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Rl(n));break;default:Rl(n)}t=t.sibling}}function xm(t,n){for(;un!==null;){var a=un;switch(a.tag){case 0:case 11:case 15:fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ys(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,un=s;else t:for(a=t;un!==null;){s=un;var c=s.sibling,f=s.return;if(um(s),s===a){un=null;break t}if(c!==null){c.return=f,un=c;break t}un=f}}}var ex={getCacheForType:function(t){var n=xn(rn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},nx=typeof WeakMap=="function"?WeakMap:Map,Re=0,Ie=null,_e=null,xe=0,Ce=0,Gn=null,pa=!1,Vr=!1,ef=!1,Hi=0,Ze=0,ma=0,ir=0,nf=0,$n=0,kr=0,po=null,Ln=null,af=!1,rf=0,Cl=1/0,wl=null,ga=null,gn=0,_a=null,Xr=null,jr=0,sf=0,of=null,Sm=null,mo=0,lf=null;function Vn(){if((Re&2)!==0&&xe!==0)return xe&-xe;if(B.T!==null){var t=Lr;return t!==0?t:mf()}return He()}function ym(){$n===0&&($n=(xe&536870912)===0||Me?ct():536870912);var t=Jn.current;return t!==null&&(t.flags|=32),$n}function kn(t,n,a){(t===Ie&&(Ce===2||Ce===9)||t.cancelPendingCommit!==null)&&(qr(t,0),va(t,xe,$n,!1)),Bt(t,a),((Re&2)===0||t!==Ie)&&(t===Ie&&((Re&2)===0&&(ir|=a),Ze===4&&va(t,xe,$n,!1)),yi(t))}function Mm(t,n,a){if((Re&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Vt(t,n),c=s?rx(t,n):ff(t,n,!0),f=s;do{if(c===0){Vr&&!s&&va(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!ix(a)){c=ff(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var b=t;c=po;var z=b.current.memoizedState.isDehydrated;if(z&&(qr(b,y).flags|=256),y=ff(b,y,!1),y!==2){if(ef&&!z){b.errorRecoveryDisabledLanes|=f,ir|=f,c=4;break t}f=Ln,Ln=c,f!==null&&(Ln===null?Ln=f:Ln.push.apply(Ln,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){qr(t,0),va(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:va(s,n,$n,!pa);break t;case 2:Ln=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=rf+300-U(),10<c)){if(va(s,n,$n,!pa),pe(s,0,!0)!==0)break t;s.timeoutHandle=Qm(Em.bind(null,s,a,Ln,wl,af,n,$n,ir,kr,pa,f,2,-0,0),c);break t}Em(s,a,Ln,wl,af,n,$n,ir,kr,pa,f,0,-0,0)}}break}while(!0);yi(t)}function Em(t,n,a,s,c,f,y,b,z,nt,gt,Mt,rt,ot){if(t.timeoutHandle=-1,Mt=n.subtreeFlags,(Mt&8192||(Mt&16785408)===16785408)&&(Mo={stylesheets:null,count:0,unsuspend:Bx},gm(n),Mt=Hx(),Mt!==null)){t.cancelPendingCommit=Mt(Dm.bind(null,t,n,f,a,s,c,y,b,z,gt,1,rt,ot)),va(t,f,y,!nt);return}Dm(t,n,f,a,s,c,y,b,z)}function ix(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!In(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function va(t,n,a,s){n&=~nf,n&=~ir,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),y=1<<f;s[f]=-1,c&=~y}a!==0&&ue(t,a,n)}function Dl(){return(Re&6)===0?(go(0),!1):!0}function cf(){if(_e!==null){if(Ce===0)var t=_e.return;else t=_e,Li=Qa=null,bu(t),Br=null,ro=0,t=_e;for(;t!==null;)nm(t.alternate,t),t=t.return;_e=null}}function qr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,yx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),cf(),Ie=t,_e=a=wi(t.current,null),xe=n,Ce=0,Gn=null,pa=!1,Vr=Vt(t,n),ef=!1,kr=$n=nf=ir=ma=Ze=0,Ln=po=null,af=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Pt(s),f=1<<c;n|=t[c],s&=~f}return Hi=n,Jo(),a}function Tm(t,n){de=null,B.H=_l,n===Ks||n===ol?(n=Gd(),Ce=3):n===Bd?(n=Gd(),Ce=4):Ce=n===Vp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Gn=n,_e===null&&(Ze=1,Ml(t,Yn(n,t.current)))}function bm(){var t=B.H;return B.H=_l,t===null?_l:t}function Am(){var t=B.A;return B.A=ex,t}function uf(){Ze=4,pa||(xe&4194048)!==xe&&Jn.current!==null||(Vr=!0),(ma&134217727)===0&&(ir&134217727)===0||Ie===null||va(Ie,xe,$n,!1)}function ff(t,n,a){var s=Re;Re|=2;var c=bm(),f=Am();(Ie!==t||xe!==n)&&(wl=null,qr(t,n)),n=!1;var y=Ze;t:do try{if(Ce!==0&&_e!==null){var b=_e,z=Gn;switch(Ce){case 8:cf(),y=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var nt=Ce;if(Ce=0,Gn=null,Wr(t,b,z,nt),a&&Vr){y=0;break t}break;default:nt=Ce,Ce=0,Gn=null,Wr(t,b,z,nt)}}ax(),y=Ze;break}catch(gt){Tm(t,gt)}while(!0);return n&&t.shellSuspendCounter++,Li=Qa=null,Re=s,B.H=c,B.A=f,_e===null&&(Ie=null,xe=0,Jo()),y}function ax(){for(;_e!==null;)Rm(_e)}function rx(t,n){var a=Re;Re|=2;var s=bm(),c=Am();Ie!==t||xe!==n?(wl=null,Cl=U()+500,qr(t,n)):Vr=Vt(t,n);t:do try{if(Ce!==0&&_e!==null){n=_e;var f=Gn;e:switch(Ce){case 1:Ce=0,Gn=null,Wr(t,n,f,1);break;case 2:case 9:if(Fd(f)){Ce=0,Gn=null,Cm(n);break}n=function(){Ce!==2&&Ce!==9||Ie!==t||(Ce=7),yi(t)},f.then(n,n);break t;case 3:Ce=7;break t;case 4:Ce=5;break t;case 7:Fd(f)?(Ce=0,Gn=null,Cm(n)):(Ce=0,Gn=null,Wr(t,n,f,7));break;case 5:var y=null;switch(_e.tag){case 26:y=_e.memoizedState;case 5:case 27:var b=_e;if(!y||cg(y)){Ce=0,Gn=null;var z=b.sibling;if(z!==null)_e=z;else{var nt=b.return;nt!==null?(_e=nt,Ul(nt)):_e=null}break e}}Ce=0,Gn=null,Wr(t,n,f,5);break;case 6:Ce=0,Gn=null,Wr(t,n,f,6);break;case 8:cf(),Ze=6;break t;default:throw Error(r(462))}}sx();break}catch(gt){Tm(t,gt)}while(!0);return Li=Qa=null,B.H=s,B.A=c,Re=a,_e!==null?0:(Ie=null,xe=0,Jo(),Ze)}function sx(){for(;_e!==null&&!Wt();)Rm(_e)}function Rm(t){var n=tm(t.alternate,t,Hi);t.memoizedProps=t.pendingProps,n===null?Ul(t):_e=n}function Cm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Yp(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=Yp(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:bu(n);default:nm(a,n),n=_e=wd(n,Hi),n=tm(a,n,Hi)}t.memoizedProps=t.pendingProps,n===null?Ul(t):_e=n}function Wr(t,n,a,s){Li=Qa=null,bu(n),Br=null,ro=0;var c=n.return;try{if(Zv(t,c,n,a,xe)){Ze=1,Ml(t,Yn(a,t.current)),_e=null;return}}catch(f){if(c!==null)throw _e=c,f;Ze=1,Ml(t,Yn(a,t.current)),_e=null;return}n.flags&32768?(Me||s===1?t=!0:Vr||(xe&536870912)!==0?t=!1:(pa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Jn.current,s!==null&&s.tag===13&&(s.flags|=16384))),wm(n,t)):Ul(n)}function Ul(t){var n=t;do{if((n.flags&32768)!==0){wm(n,pa);return}t=n.return;var a=Qv(n.alternate,n,Hi);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=t}while(n!==null);Ze===0&&(Ze=5)}function wm(t,n){do{var a=Jv(t.alternate,t);if(a!==null){a.flags&=32767,_e=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_e=t;return}_e=t=a}while(t!==null);Ze=6,_e=null}function Dm(t,n,a,s,c,f,y,b,z){t.cancelPendingCommit=null;do Ll();while(gn!==0);if((Re&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=tu,ge(t,a,f,y,b,z),t===Ie&&(_e=Ie=null,xe=0),Xr=n,_a=t,jr=a,sf=f,of=c,Sm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ux(K,function(){return Pm(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=B.T,B.T=null,c=$.p,$.p=2,y=Re,Re|=4;try{$v(t,n,a)}finally{Re=y,$.p=c,B.T=s}}gn=1,Um(),Lm(),Nm()}}function Um(){if(gn===1){gn=0;var t=_a,n=Xr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var s=$.p;$.p=2;var c=Re;Re|=4;try{dm(n,t);var f=Ef,y=xd(t.containerInfo),b=f.focusedElem,z=f.selectionRange;if(y!==b&&b&&b.ownerDocument&&vd(b.ownerDocument.documentElement,b)){if(z!==null&&Zc(b)){var nt=z.start,gt=z.end;if(gt===void 0&&(gt=nt),"selectionStart"in b)b.selectionStart=nt,b.selectionEnd=Math.min(gt,b.value.length);else{var Mt=b.ownerDocument||document,rt=Mt&&Mt.defaultView||window;if(rt.getSelection){var ot=rt.getSelection(),te=b.textContent.length,Yt=Math.min(z.start,te),Ue=z.end===void 0?Yt:Math.min(z.end,te);!ot.extend&&Yt>Ue&&(y=Ue,Ue=Yt,Yt=y);var q=_d(b,Yt),G=_d(b,Ue);if(q&&G&&(ot.rangeCount!==1||ot.anchorNode!==q.node||ot.anchorOffset!==q.offset||ot.focusNode!==G.node||ot.focusOffset!==G.offset)){var J=Mt.createRange();J.setStart(q.node,q.offset),ot.removeAllRanges(),Yt>Ue?(ot.addRange(J),ot.extend(G.node,G.offset)):(J.setEnd(G.node,G.offset),ot.addRange(J))}}}}for(Mt=[],ot=b;ot=ot.parentNode;)ot.nodeType===1&&Mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<Mt.length;b++){var xt=Mt[b];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}Xl=!!Mf,Ef=Mf=null}finally{Re=c,$.p=s,B.T=a}}t.current=n,gn=2}}function Lm(){if(gn===2){gn=0;var t=_a,n=Xr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var s=$.p;$.p=2;var c=Re;Re|=4;try{cm(t,n.alternate,n)}finally{Re=c,$.p=s,B.T=a}}gn=3}}function Nm(){if(gn===4||gn===3){gn=0,Ut();var t=_a,n=Xr,a=jr,s=Sm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,Xr=_a=null,Om(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ga=null),Se(a),n=n.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Dt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=B.T,c=$.p,$.p=2,B.T=null;try{for(var f=t.onRecoverableError,y=0;y<s.length;y++){var b=s[y];f(b.value,{componentStack:b.stack})}}finally{B.T=n,$.p=c}}(jr&3)!==0&&Ll(),yi(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===lf?mo++:(mo=0,lf=t):mo=0,go(0)}}function Om(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ys(n)))}function Ll(t){return Um(),Lm(),Nm(),Pm()}function Pm(){if(gn!==5)return!1;var t=_a,n=sf;sf=0;var a=Se(jr),s=B.T,c=$.p;try{$.p=32>a?32:a,B.T=null,a=of,of=null;var f=_a,y=jr;if(gn=0,Xr=_a=null,jr=0,(Re&6)!==0)throw Error(r(331));var b=Re;if(Re|=4,vm(f.current),mm(f,f.current,y,a),Re=b,go(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Dt,f)}catch{}return!0}finally{$.p=c,B.T=s,Om(t,n)}}function zm(t,n,a){n=Yn(a,n),n=Fu(t.stateNode,n,2),t=oa(t,n,2),t!==null&&(Bt(t,2),yi(t))}function Oe(t,n,a){if(t.tag===3)zm(t,t,a);else for(;n!==null;){if(n.tag===3){zm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ga===null||!ga.has(s))){t=Yn(a,t),a=Hp(2),s=oa(n,a,2),s!==null&&(Gp(a,s,n,t),Bt(s,2),yi(s));break}}n=n.return}}function hf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new nx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ef=!0,c.add(a),t=ox.bind(null,t,n,a),n.then(t,t))}function ox(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ie===t&&(xe&a)===a&&(Ze===4||Ze===3&&(xe&62914560)===xe&&300>U()-rf?(Re&2)===0&&qr(t,0):nf|=a,kr===xe&&(kr=0)),yi(t)}function Im(t,n){n===0&&(n=vt()),t=Cr(t,n),t!==null&&(Bt(t,n),yi(t))}function lx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Im(t,a)}function cx(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Im(t,a)}function ux(t,n){return qt(t,n)}var Nl=null,Yr=null,df=!1,Ol=!1,pf=!1,ar=0;function yi(t){t!==Yr&&t.next===null&&(Yr===null?Nl=Yr=t:Yr=Yr.next=t),Ol=!0,df||(df=!0,hx())}function go(t,n){if(!pf&&Ol){pf=!0;do for(var a=!1,s=Nl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var y=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=c&~(y&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Gm(s,f))}else f=xe,f=pe(s,s===Ie?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Vt(s,f)||(a=!0,Gm(s,f));s=s.next}while(a);pf=!1}}function fx(){Bm()}function Bm(){Ol=df=!1;var t=0;ar!==0&&(Sx()&&(t=ar),ar=0);for(var n=U(),a=null,s=Nl;s!==null;){var c=s.next,f=Fm(s,n);f===0?(s.next=null,a===null?Nl=c:a.next=c,c===null&&(Yr=a)):(a=s,(t!==0||(f&3)!==0)&&(Ol=!0)),s=c}go(t)}function Fm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var y=31-Pt(f),b=1<<y,z=c[y];z===-1?((b&a)===0||(b&s)!==0)&&(c[y]=M(b,n)):z<=n&&(t.expiredLanes|=b),f&=~b}if(n=Ie,a=xe,a=pe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ce===2||Ce===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&be(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Vt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&be(s),Se(a)){case 2:case 8:a=lt;break;case 32:a=K;break;case 268435456:a=At;break;default:a=K}return s=Hm.bind(null,t),a=qt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&be(s),t.callbackPriority=2,t.callbackNode=null,2}function Hm(t,n){if(gn!==0&&gn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ll()&&t.callbackNode!==a)return null;var s=xe;return s=pe(t,t===Ie?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Mm(t,s,n),Fm(t,U()),t.callbackNode!=null&&t.callbackNode===a?Hm.bind(null,t):null)}function Gm(t,n){if(Ll())return null;Mm(t,n,!0)}function hx(){Mx(function(){(Re&6)!==0?qt(W,fx):Bm()})}function mf(){return ar===0&&(ar=ct()),ar}function Vm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:jo(""+t)}function km(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function dx(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Vm((c[Ge]||null).action),y=s.submitter;y&&(n=(n=y[Ge]||null)?Vm(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var b=new Zo("action","action",null,s,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ar!==0){var z=y?km(c,y):new FormData(c);Ou(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(b.preventDefault(),z=y?km(c,y):new FormData(c),Ou(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var gf=0;gf<$c.length;gf++){var _f=$c[gf],px=_f.toLowerCase(),mx=_f[0].toUpperCase()+_f.slice(1);oi(px,"on"+mx)}oi(Md,"onAnimationEnd"),oi(Ed,"onAnimationIteration"),oi(Td,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(Lv,"onTransitionRun"),oi(Nv,"onTransitionStart"),oi(Ov,"onTransitionCancel"),oi(bd,"onTransitionEnd"),Gt("onMouseEnter",["mouseout","mouseover"]),Gt("onMouseLeave",["mouseout","mouseover"]),Gt("onPointerEnter",["pointerout","pointerover"]),Gt("onPointerLeave",["pointerout","pointerover"]),Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function Xm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var y=s.length-1;0<=y;y--){var b=s[y],z=b.instance,nt=b.currentTarget;if(b=b.listener,z!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=nt;try{f(c)}catch(gt){yl(gt)}c.currentTarget=null,f=z}else for(y=0;y<s.length;y++){if(b=s[y],z=b.instance,nt=b.currentTarget,b=b.listener,z!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=nt;try{f(c)}catch(gt){yl(gt)}c.currentTarget=null,f=z}}}}function ve(t,n){var a=n[ri];a===void 0&&(a=n[ri]=new Set);var s=t+"__bubble";a.has(s)||(jm(n,t,2,!1),a.add(s))}function vf(t,n,a){var s=0;n&&(s|=4),jm(a,t,s,n)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function xf(t){if(!t[Pl]){t[Pl]=!0,ht.forEach(function(a){a!=="selectionchange"&&(gx.has(a)||vf(a,!1,t),vf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Pl]||(n[Pl]=!0,vf("selectionchange",!1,n))}}function jm(t,n,a,s){switch(mg(n)){case 2:var c=kx;break;case 8:c=Xx;break;default:c=Nf}a=c.bind(null,n,a,t),c=void 0,!Hc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Sf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var b=s.stateNode.containerInfo;if(b===c)break;if(y===4)for(y=s.return;y!==null;){var z=y.tag;if((z===3||z===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;b!==null;){if(y=$i(b),y===null)return;if(z=y.tag,z===5||z===6||z===26||z===27){s=f=y;continue t}b=b.parentNode}}s=s.return}Jh(function(){var nt=f,gt=Bc(a),Mt=[];t:{var rt=Ad.get(t);if(rt!==void 0){var ot=Zo,te=t;switch(t){case"keypress":if(Wo(a)===0)break t;case"keydown":case"keyup":ot=uv;break;case"focusin":te="focus",ot=Xc;break;case"focusout":te="blur",ot=Xc;break;case"beforeblur":case"afterblur":ot=Xc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=J0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=dv;break;case Md:case Ed:case Td:ot=ev;break;case bd:ot=mv;break;case"scroll":case"scrollend":ot=K0;break;case"wheel":ot=_v;break;case"copy":case"cut":case"paste":ot=iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=id;break;case"toggle":case"beforetoggle":ot=xv}var Yt=(n&4)!==0,Ue=!Yt&&(t==="scroll"||t==="scrollend"),q=Yt?rt!==null?rt+"Capture":null:rt;Yt=[];for(var G=nt,J;G!==null;){var xt=G;if(J=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||J===null||q===null||(xt=Ps(G,q),xt!=null&&Yt.push(vo(G,xt,J))),Ue)break;G=G.return}0<Yt.length&&(rt=new ot(rt,te,null,a,gt),Mt.push({event:rt,listeners:Yt}))}}if((n&7)===0){t:{if(rt=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",rt&&a!==Ic&&(te=a.relatedTarget||a.fromElement)&&($i(te)||te[zn]))break t;if((ot||rt)&&(rt=gt.window===gt?gt:(rt=gt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ot?(te=a.relatedTarget||a.toElement,ot=nt,te=te?$i(te):null,te!==null&&(Ue=u(te),Yt=te.tag,te!==Ue||Yt!==5&&Yt!==27&&Yt!==6)&&(te=null)):(ot=null,te=nt),ot!==te)){if(Yt=ed,xt="onMouseLeave",q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Yt=id,xt="onPointerLeave",q="onPointerEnter",G="pointer"),Ue=ot==null?rt:D(ot),J=te==null?rt:D(te),rt=new Yt(xt,G+"leave",ot,a,gt),rt.target=Ue,rt.relatedTarget=J,xt=null,$i(gt)===nt&&(Yt=new Yt(q,G+"enter",te,a,gt),Yt.target=J,Yt.relatedTarget=Ue,xt=Yt),Ue=xt,ot&&te)e:{for(Yt=ot,q=te,G=0,J=Yt;J;J=Zr(J))G++;for(J=0,xt=q;xt;xt=Zr(xt))J++;for(;0<G-J;)Yt=Zr(Yt),G--;for(;0<J-G;)q=Zr(q),J--;for(;G--;){if(Yt===q||q!==null&&Yt===q.alternate)break e;Yt=Zr(Yt),q=Zr(q)}Yt=null}else Yt=null;ot!==null&&qm(Mt,rt,ot,Yt,!1),te!==null&&Ue!==null&&qm(Mt,Ue,te,Yt,!0)}}t:{if(rt=nt?D(nt):window,ot=rt.nodeName&&rt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&rt.type==="file")var Ht=fd;else if(cd(rt))if(hd)Ht=wv;else{Ht=Rv;var me=Av}else ot=rt.nodeName,!ot||ot.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?nt&&zc(nt.elementType)&&(Ht=fd):Ht=Cv;if(Ht&&(Ht=Ht(t,nt))){ud(Mt,Ht,a,gt);break t}me&&me(t,rt,nt),t==="focusout"&&nt&&rt.type==="number"&&nt.memoizedProps.value!=null&&Pc(rt,"number",rt.value)}switch(me=nt?D(nt):window,t){case"focusin":(cd(me)||me.contentEditable==="true")&&(br=me,Kc=nt,ks=null);break;case"focusout":ks=Kc=br=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,Sd(Mt,a,gt);break;case"selectionchange":if(Uv)break;case"keydown":case"keyup":Sd(Mt,a,gt)}var Xt;if(qc)t:{switch(t){case"compositionstart":var Qt="onCompositionStart";break t;case"compositionend":Qt="onCompositionEnd";break t;case"compositionupdate":Qt="onCompositionUpdate";break t}Qt=void 0}else Tr?od(t,a)&&(Qt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Qt="onCompositionStart");Qt&&(ad&&a.locale!=="ko"&&(Tr||Qt!=="onCompositionStart"?Qt==="onCompositionEnd"&&Tr&&(Xt=$h()):(ia=gt,Gc="value"in ia?ia.value:ia.textContent,Tr=!0)),me=zl(nt,Qt),0<me.length&&(Qt=new nd(Qt,t,null,a,gt),Mt.push({event:Qt,listeners:me}),Xt?Qt.data=Xt:(Xt=ld(a),Xt!==null&&(Qt.data=Xt)))),(Xt=yv?Mv(t,a):Ev(t,a))&&(Qt=zl(nt,"onBeforeInput"),0<Qt.length&&(me=new nd("onBeforeInput","beforeinput",null,a,gt),Mt.push({event:me,listeners:Qt}),me.data=Xt)),dx(Mt,t,nt,a,gt)}Xm(Mt,n)})}function vo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function zl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ps(t,a),c!=null&&s.unshift(vo(t,c,f)),c=Ps(t,n),c!=null&&s.push(vo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function qm(t,n,a,s,c){for(var f=n._reactName,y=[];a!==null&&a!==s;){var b=a,z=b.alternate,nt=b.stateNode;if(b=b.tag,z!==null&&z===s)break;b!==5&&b!==26&&b!==27||nt===null||(z=nt,c?(nt=Ps(a,f),nt!=null&&y.unshift(vo(a,nt,z))):c||(nt=Ps(a,f),nt!=null&&y.push(vo(a,nt,z)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var _x=/\r\n?/g,vx=/\u0000|\uFFFD/g;function Wm(t){return(typeof t=="string"?t:""+t).replace(_x,`
`).replace(vx,"")}function Ym(t,n){return n=Wm(n),Wm(t)===n}function Il(){}function De(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||yr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&yr(t,""+s);break;case"className":Pe(t,"class",s);break;case"tabIndex":Pe(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Pe(t,a,s);break;case"style":Kh(t,s,f);break;case"data":if(n!=="object"){Pe(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=jo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&De(t,n,"name",c.name,c,null),De(t,n,"formEncType",c.formEncType,c,null),De(t,n,"formMethod",c.formMethod,c,null),De(t,n,"formTarget",c.formTarget,c,null)):(De(t,n,"encType",c.encType,c,null),De(t,n,"method",c.method,c,null),De(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=jo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Il);break;case"onScroll":s!=null&&ve("scroll",t);break;case"onScrollEnd":s!=null&&ve("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=jo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ve("beforetoggle",t),ve("toggle",t),ee(t,"popover",s);break;case"xlinkActuate":Ve(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ve(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ve(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ve(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ve(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ve(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ee(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Y0.get(a)||a,ee(t,a,s))}}function yf(t,n,a,s,c,f){switch(a){case"style":Kh(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?yr(t,s):(typeof s=="number"||typeof s=="bigint")&&yr(t,""+s);break;case"onScroll":s!=null&&ve("scroll",t);break;case"onScrollEnd":s!=null&&ve("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Il);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ft.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Ge]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):ee(t,a,s)}}}function _n(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",t),ve("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:De(t,n,f,y,a,null)}}c&&De(t,n,"srcSet",a.srcSet,a,null),s&&De(t,n,"src",a.src,a,null);return;case"input":ve("invalid",t);var b=f=y=c=null,z=null,nt=null;for(s in a)if(a.hasOwnProperty(s)){var gt=a[s];if(gt!=null)switch(s){case"name":c=gt;break;case"type":y=gt;break;case"checked":z=gt;break;case"defaultChecked":nt=gt;break;case"value":f=gt;break;case"defaultValue":b=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(r(137,n));break;default:De(t,n,s,gt,a,null)}}Os(t,f,b,z,nt,y,c,!1),Qe(t);return;case"select":ve("invalid",t),s=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":y=b;break;case"multiple":s=b;default:De(t,n,c,b,a,null)}n=f,a=y,t.multiple=!!s,n!=null?Sr(t,!!s,n,!1):a!=null&&Sr(t,!!s,a,!0);return;case"textarea":ve("invalid",t),f=c=s=null;for(y in a)if(a.hasOwnProperty(y)&&(b=a[y],b!=null))switch(y){case"value":s=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:De(t,n,y,b,a,null)}Yh(t,s,c,f),Qe(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:De(t,n,z,s,a,null)}return;case"dialog":ve("beforetoggle",t),ve("toggle",t),ve("cancel",t),ve("close",t);break;case"iframe":case"object":ve("load",t);break;case"video":case"audio":for(s=0;s<_o.length;s++)ve(_o[s],t);break;case"image":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"embed":case"source":case"link":ve("error",t),ve("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(s=a[nt],s!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:De(t,n,nt,s,a,null)}return;default:if(zc(n)){for(gt in a)a.hasOwnProperty(gt)&&(s=a[gt],s!==void 0&&yf(t,n,gt,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&De(t,n,b,s,a,null))}function xx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,b=null,z=null,nt=null,gt=null;for(ot in a){var Mt=a[ot];if(a.hasOwnProperty(ot)&&Mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":z=Mt;default:s.hasOwnProperty(ot)||De(t,n,ot,null,s,Mt)}}for(var rt in s){var ot=s[rt];if(Mt=a[rt],s.hasOwnProperty(rt)&&(ot!=null||Mt!=null))switch(rt){case"type":f=ot;break;case"name":c=ot;break;case"checked":nt=ot;break;case"defaultChecked":gt=ot;break;case"value":y=ot;break;case"defaultValue":b=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==Mt&&De(t,n,rt,ot,s,Mt)}}Ns(t,y,b,z,nt,gt,f,c);return;case"select":ot=y=b=rt=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":ot=z;default:s.hasOwnProperty(f)||De(t,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":rt=f;break;case"defaultValue":b=f;break;case"multiple":y=f;default:f!==z&&De(t,n,c,f,s,z)}n=b,a=y,s=ot,rt!=null?Sr(t,!!a,rt,!1):!!s!=!!a&&(n!=null?Sr(t,!!a,n,!0):Sr(t,!!a,a?[]:"",!1));return;case"textarea":ot=rt=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:De(t,n,b,null,s,c)}for(y in s)if(c=s[y],f=a[y],s.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":rt=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&De(t,n,y,c,s,f)}Wh(t,rt,ot);return;case"option":for(var te in a)if(rt=a[te],a.hasOwnProperty(te)&&rt!=null&&!s.hasOwnProperty(te))switch(te){case"selected":t.selected=!1;break;default:De(t,n,te,null,s,rt)}for(z in s)if(rt=s[z],ot=a[z],s.hasOwnProperty(z)&&rt!==ot&&(rt!=null||ot!=null))switch(z){case"selected":t.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:De(t,n,z,rt,s,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in a)rt=a[Yt],a.hasOwnProperty(Yt)&&rt!=null&&!s.hasOwnProperty(Yt)&&De(t,n,Yt,null,s,rt);for(nt in s)if(rt=s[nt],ot=a[nt],s.hasOwnProperty(nt)&&rt!==ot&&(rt!=null||ot!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:De(t,n,nt,rt,s,ot)}return;default:if(zc(n)){for(var Ue in a)rt=a[Ue],a.hasOwnProperty(Ue)&&rt!==void 0&&!s.hasOwnProperty(Ue)&&yf(t,n,Ue,void 0,s,rt);for(gt in s)rt=s[gt],ot=a[gt],!s.hasOwnProperty(gt)||rt===ot||rt===void 0&&ot===void 0||yf(t,n,gt,rt,s,ot);return}}for(var q in a)rt=a[q],a.hasOwnProperty(q)&&rt!=null&&!s.hasOwnProperty(q)&&De(t,n,q,null,s,rt);for(Mt in s)rt=s[Mt],ot=a[Mt],!s.hasOwnProperty(Mt)||rt===ot||rt==null&&ot==null||De(t,n,Mt,rt,s,ot)}var Mf=null,Ef=null;function Bl(t){return t.nodeType===9?t:t.ownerDocument}function Zm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Km(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Tf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var bf=null;function Sx(){var t=window.event;return t&&t.type==="popstate"?t===bf?!1:(bf=t,!0):(bf=null,!1)}var Qm=typeof setTimeout=="function"?setTimeout:void 0,yx=typeof clearTimeout=="function"?clearTimeout:void 0,Jm=typeof Promise=="function"?Promise:void 0,Mx=typeof queueMicrotask=="function"?queueMicrotask:typeof Jm<"u"?function(t){return Jm.resolve(null).then(t).catch(Ex)}:Qm;function Ex(t){setTimeout(function(){throw t})}function xa(t){return t==="head"}function $m(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var y=t.ownerDocument;if(a&1&&xo(y.documentElement),a&2&&xo(y.body),a&4)for(a=y.head,xo(a),y=a.firstChild;y;){var b=y.nextSibling,z=y.nodeName;y[Ji]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=b}}if(c===0){t.removeChild(f),Ro(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);Ro(n)}function Af(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Af(a),Us(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Tx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ji])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function bx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function Rf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Ax(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Cf=null;function tg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function eg(t,n,a){switch(n=Bl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function xo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Us(t)}var ti=new Map,ng=new Set;function Fl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Gi=$.d;$.d={f:Rx,r:Cx,D:wx,C:Dx,L:Ux,m:Lx,X:Ox,S:Nx,M:Px};function Rx(){var t=Gi.f(),n=Dl();return t||n}function Cx(t){var n=ta(t);n!==null&&n.tag===5&&n.type==="form"?Mp(n):Gi.r(t)}var Kr=typeof document>"u"?null:document;function ig(t,n,a){var s=Kr;if(s&&typeof n=="string"&&n){var c=vn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),ng.has(c)||(ng.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),_n(n,"link",t),at(n),s.head.appendChild(n)))}}function wx(t){Gi.D(t),ig("dns-prefetch",t,null)}function Dx(t,n){Gi.C(t,n),ig("preconnect",t,n)}function Ux(t,n,a){Gi.L(t,n,a);var s=Kr;if(s&&t&&n){var c='link[rel="preload"][as="'+vn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+vn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+vn(a.imageSizes)+'"]')):c+='[href="'+vn(t)+'"]';var f=c;switch(n){case"style":f=Qr(t);break;case"script":f=Jr(t)}ti.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ti.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(So(f))||n==="script"&&s.querySelector(yo(f))||(n=s.createElement("link"),_n(n,"link",t),at(n),s.head.appendChild(n)))}}function Lx(t,n){Gi.m(t,n);var a=Kr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+vn(s)+'"][href="'+vn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Jr(t)}if(!ti.has(f)&&(t=g({rel:"modulepreload",href:t},n),ti.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yo(f)))return}s=a.createElement("link"),_n(s,"link",t),at(s),a.head.appendChild(s)}}}function Nx(t,n,a){Gi.S(t,n,a);var s=Kr;if(s&&t){var c=Z(s).hoistableStyles,f=Qr(t);n=n||"default";var y=c.get(f);if(!y){var b={loading:0,preload:null};if(y=s.querySelector(So(f)))b.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ti.get(f))&&wf(t,a);var z=y=s.createElement("link");at(z),_n(z,"link",t),z._p=new Promise(function(nt,gt){z.onload=nt,z.onerror=gt}),z.addEventListener("load",function(){b.loading|=1}),z.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Hl(y,n,s)}y={type:"stylesheet",instance:y,count:1,state:b},c.set(f,y)}}}function Ox(t,n){Gi.X(t,n);var a=Kr;if(a&&t){var s=Z(a).hoistableScripts,c=Jr(t),f=s.get(c);f||(f=a.querySelector(yo(c)),f||(t=g({src:t,async:!0},n),(n=ti.get(c))&&Df(t,n),f=a.createElement("script"),at(f),_n(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Px(t,n){Gi.M(t,n);var a=Kr;if(a&&t){var s=Z(a).hoistableScripts,c=Jr(t),f=s.get(c);f||(f=a.querySelector(yo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ti.get(c))&&Df(t,n),f=a.createElement("script"),at(f),_n(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function ag(t,n,a,s){var c=(c=Et.current)?Fl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Qr(a.href),a=Z(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Qr(a.href);var f=Z(c).hoistableStyles,y=f.get(t);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,y),(f=c.querySelector(So(t)))&&!f._p&&(y.instance=f,y.state.loading=5),ti.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ti.set(t,a),f||zx(c,t,a,y.state))),n&&s===null)throw Error(r(528,""));return y}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Jr(a),a=Z(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Qr(t){return'href="'+vn(t)+'"'}function So(t){return'link[rel="stylesheet"]['+t+"]"}function rg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function zx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),_n(n,"link",a),at(n),t.head.appendChild(n))}function Jr(t){return'[src="'+vn(t)+'"]'}function yo(t){return"script[async]"+t}function sg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+vn(a.href)+'"]');if(s)return n.instance=s,at(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),at(s),_n(s,"style",c),Hl(s,a.precedence,t),n.instance=s;case"stylesheet":c=Qr(a.href);var f=t.querySelector(So(c));if(f)return n.state.loading|=4,n.instance=f,at(f),f;s=rg(a),(c=ti.get(c))&&wf(s,c),f=(t.ownerDocument||t).createElement("link"),at(f);var y=f;return y._p=new Promise(function(b,z){y.onload=b,y.onerror=z}),_n(f,"link",s),n.state.loading|=4,Hl(f,a.precedence,t),n.instance=f;case"script":return f=Jr(a.src),(c=t.querySelector(yo(f)))?(n.instance=c,at(c),c):(s=a,(c=ti.get(f))&&(s=g({},a),Df(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),at(c),_n(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Hl(s,a.precedence,t));return n.instance}function Hl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,y=0;y<s.length;y++){var b=s[y];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function wf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Df(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Gl=null;function og(t,n,a){if(Gl===null){var s=new Map,c=Gl=new Map;c.set(a,s)}else c=Gl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Ji]||f[Ae]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=t+y;var b=s.get(y);b?b.push(f):s.set(y,[f])}}return s}function lg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Ix(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function cg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Mo=null;function Bx(){}function Fx(t,n,a){if(Mo===null)throw Error(r(475));var s=Mo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Qr(a.href),f=t.querySelector(So(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Vl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,at(f);return}f=t.ownerDocument||t,a=rg(a),(c=ti.get(c))&&wf(a,c),f=f.createElement("link"),at(f);var y=f;y._p=new Promise(function(b,z){y.onload=b,y.onerror=z}),_n(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Vl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function Hx(){if(Mo===null)throw Error(r(475));var t=Mo;return t.stylesheets&&t.count===0&&Uf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Uf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Vl(){if(this.count--,this.count===0){if(this.stylesheets)Uf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var kl=null;function Uf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,kl=new Map,n.forEach(Gx,t),kl=null,Vl.call(t))}function Gx(t,n){if(!(n.state.loading&4)){var a=kl.get(t);if(a)var s=a.get(null);else{a=new Map,kl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),s=y)}s&&a.set(null,s)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||s,f===s&&a.set(null,c),a.set(y,c),this.count++,s=Vl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Eo={$$typeof:w,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function Vx(t,n,a,s,c,f,y,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lt(0),this.hiddenUpdates=Lt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function ug(t,n,a,s,c,f,y,b,z,nt,gt,Mt){return t=new Vx(t,n,a,y,b,z,nt,Mt),n=1,f===!0&&(n|=24),f=Bn(3,null,null,n),t.current=f,f.stateNode=t,n=fu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},mu(f),t}function fg(t){return t?(t=wr,t):wr}function hg(t,n,a,s,c,f){c=fg(c),s.context===null?s.context=c:s.pendingContext=c,s=sa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=oa(t,s,n),a!==null&&(kn(a,t,n),Js(a,t,n))}function dg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Lf(t,n){dg(t,n),(t=t.alternate)&&dg(t,n)}function pg(t){if(t.tag===13){var n=Cr(t,67108864);n!==null&&kn(n,t,67108864),Lf(t,67108864)}}var Xl=!0;function kx(t,n,a,s){var c=B.T;B.T=null;var f=$.p;try{$.p=2,Nf(t,n,a,s)}finally{$.p=f,B.T=c}}function Xx(t,n,a,s){var c=B.T;B.T=null;var f=$.p;try{$.p=8,Nf(t,n,a,s)}finally{$.p=f,B.T=c}}function Nf(t,n,a,s){if(Xl){var c=Of(s);if(c===null)Sf(t,n,s,jl,a),gg(t,s);else if(qx(c,t,n,a,s))s.stopPropagation();else if(gg(t,s),n&4&&-1<jx.indexOf(t)){for(;c!==null;){var f=ta(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=ie(f.pendingLanes);if(y!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;y;){var z=1<<31-Pt(y);b.entanglements[1]|=z,y&=~z}yi(f),(Re&6)===0&&(Cl=U()+500,go(0))}}break;case 13:b=Cr(f,2),b!==null&&kn(b,f,2),Dl(),Lf(f,2)}if(f=Of(s),f===null&&Sf(t,n,s,jl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Sf(t,n,s,null,a)}}function Of(t){return t=Bc(t),Pf(t)}var jl=null;function Pf(t){if(jl=null,t=$i(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return jl=t,null}function mg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(T()){case W:return 2;case lt:return 8;case K:case ut:return 32;case At:return 268435456;default:return 32}default:return 32}}var zf=!1,Sa=null,ya=null,Ma=null,To=new Map,bo=new Map,Ea=[],jx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gg(t,n){switch(t){case"focusin":case"focusout":Sa=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(n.pointerId)}}function Ao(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ta(n),n!==null&&pg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function qx(t,n,a,s,c){switch(n){case"focusin":return Sa=Ao(Sa,t,n,a,s,c),!0;case"dragenter":return ya=Ao(ya,t,n,a,s,c),!0;case"mouseover":return Ma=Ao(Ma,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return To.set(f,Ao(To.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,bo.set(f,Ao(bo.get(f)||null,t,n,a,s,c)),!0}return!1}function _g(t){var n=$i(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,je(t.priority,function(){if(a.tag===13){var s=Vn();s=Xe(s);var c=Cr(a,s);c!==null&&kn(c,a,s),Lf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ql(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Of(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Ic=s,a.target.dispatchEvent(s),Ic=null}else return n=ta(a),n!==null&&pg(n),t.blockedOn=a,!1;n.shift()}return!0}function vg(t,n,a){ql(t)&&a.delete(n)}function Wx(){zf=!1,Sa!==null&&ql(Sa)&&(Sa=null),ya!==null&&ql(ya)&&(ya=null),Ma!==null&&ql(Ma)&&(Ma=null),To.forEach(vg),bo.forEach(vg)}function Wl(t,n){t.blockedOn===n&&(t.blockedOn=null,zf||(zf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Wx)))}var Yl=null;function xg(t){Yl!==t&&(Yl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Yl===t&&(Yl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Pf(s||a)===null)continue;break}var f=ta(a);f!==null&&(t.splice(n,3),n-=3,Ou(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Ro(t){function n(z){return Wl(z,t)}Sa!==null&&Wl(Sa,t),ya!==null&&Wl(ya,t),Ma!==null&&Wl(Ma,t),To.forEach(n),bo.forEach(n);for(var a=0;a<Ea.length;a++){var s=Ea[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ea.length&&(a=Ea[0],a.blockedOn===null);)_g(a),a.blockedOn===null&&Ea.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],y=c[Ge]||null;if(typeof f=="function")y||xg(a);else if(y){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[Ge]||null)b=y.formAction;else if(Pf(c)!==null)continue}else b=y.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),xg(a)}}}function If(t){this._internalRoot=t}Zl.prototype.render=If.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Vn();hg(a,s,t,n,null,null)},Zl.prototype.unmount=If.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;hg(t.current,2,null,t,null,null),Dl(),n[zn]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var n=He();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ea.length&&n!==0&&n<Ea[a].priority;a++);Ea.splice(a,0,t),a===0&&_g(t)}};var Sg=e.version;if(Sg!=="19.1.0")throw Error(r(527,Sg,"19.1.0"));$.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Yx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Dt=Kl.inject(Yx),St=Kl}catch{}}return wo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=zp,f=Ip,y=Bp,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=ug(t,1,!1,null,null,a,s,c,f,y,b,null),t[zn]=n.current,xf(t),new If(n)},wo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=zp,y=Ip,b=Bp,z=null,nt=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(nt=a.formState)),n=ug(t,1,!0,n,a??null,s,c,f,y,b,z,nt),n.context=fg(null),a=n.current,s=Vn(),s=Xe(s),c=sa(s),c.callback=null,oa(a,c,s),a=s,n.current.lanes=a,Bt(n,a),yi(n),t[zn]=n.current,xf(t),new Zl(n)},wo.version="19.1.0",wo}var Dg;function rS(){if(Dg)return Hf.exports;Dg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Hf.exports=aS(),Hf.exports}var sS=rS();const oS=c0(sS);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fh="163",$r={ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lS=0,Ug=1,cS=2,u0=1,uS=2,Wi=3,Fa=0,On=1,Yi=2,Pa=0,Ss=1,Lg=2,Ng=3,Og=4,fS=5,dr=100,hS=101,dS=102,pS=103,mS=104,gS=200,_S=201,vS=202,xS=203,Ah=204,Rh=205,SS=206,yS=207,MS=208,ES=209,TS=210,bS=211,AS=212,RS=213,CS=214,wS=0,DS=1,US=2,Ec=3,LS=4,NS=5,OS=6,PS=7,f0=0,zS=1,IS=2,za=0,BS=1,FS=2,HS=3,GS=4,VS=5,kS=6,XS=7,h0=300,Ts=301,bs=302,Ch=303,wh=304,Uc=306,Dh=1e3,mr=1001,Uh=1002,ai=1003,jS=1004,Ql=1005,di=1006,Xf=1007,gr=1008,Ia=1009,qS=1010,WS=1011,d0=1012,p0=1013,As=1014,Na=1015,Tc=1016,m0=1017,g0=1018,Fo=1020,YS=35902,ZS=1021,KS=1022,Ai=1023,QS=1024,JS=1025,ys=1026,Bo=1027,$S=1028,_0=1029,ty=1030,v0=1031,x0=1033,jf=33776,qf=33777,Wf=33778,Yf=33779,Pg=35840,zg=35841,Ig=35842,Bg=35843,S0=36196,Fg=37492,Hg=37496,Gg=37808,Vg=37809,kg=37810,Xg=37811,jg=37812,qg=37813,Wg=37814,Yg=37815,Zg=37816,Kg=37817,Qg=37818,Jg=37819,$g=37820,t_=37821,Zf=36492,e_=36494,n_=36495,ey=36283,i_=36284,a_=36285,r_=36286,ny=3200,iy=3201,y0=0,ay=1,La="",Ei="srgb",Ga="srgb-linear",Hh="display-p3",Lc="display-p3-linear",bc="linear",Be="srgb",Ac="rec709",Rc="p3",es=7680,s_=519,ry=512,sy=513,oy=514,M0=515,ly=516,cy=517,uy=518,fy=519,o_=35044,l_="300 es",Zi=2e3,Cc=2001;class vr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yc=Math.PI/180,Lh=180/Math.PI;function Ho(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[o&255]+yn[o>>8&255]+yn[o>>16&255]+yn[o>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[i&63|128]+yn[i>>8&255]+"-"+yn[i>>16&255]+yn[i>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function Rn(o,e,i){return Math.max(e,Math.min(i,o))}function hy(o,e){return(o%e+e)%e}function Kf(o,e,i){return(1-i)*o+i*e}function Do(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Nn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const dy={DEG2RAD:yc};class ne{constructor(e=0,i=0){ne.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Rn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(e,i,r,l,u,h,d,p,m){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m)}set(e,i,r,l,u,h,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],g=r[4],v=r[7],S=r[2],E=r[5],C=r[8],R=l[0],x=l[3],_=l[6],I=l[1],w=l[4],F=l[7],k=l[2],H=l[5],P=l[8];return u[0]=h*R+d*I+p*k,u[3]=h*x+d*w+p*H,u[6]=h*_+d*F+p*P,u[1]=m*R+g*I+v*k,u[4]=m*x+g*w+v*H,u[7]=m*_+g*F+v*P,u[2]=S*R+E*I+C*k,u[5]=S*x+E*w+C*H,u[8]=S*_+E*F+C*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return i*h*g-i*d*m-r*u*g+r*d*p+l*u*m-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=g*h-d*m,S=d*p-g*u,E=m*u-h*p,C=i*v+r*S+l*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=v*R,e[1]=(l*m-g*r)*R,e[2]=(d*r-l*h)*R,e[3]=S*R,e[4]=(g*i-l*p)*R,e[5]=(l*u-d*i)*R,e[6]=E*R,e[7]=(r*p-m*i)*R,e[8]=(h*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Qf.makeScale(e,i)),this}rotate(e){return this.premultiply(Qf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Qf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qf=new he;function E0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function wc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function py(){const o=wc("canvas");return o.style.display="block",o}const c_={};function my(o){o in c_||(c_[o]=!0,console.warn(o))}const u_=new he().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),f_=new he().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jl={[Ga]:{transfer:bc,primaries:Ac,toReference:o=>o,fromReference:o=>o},[Ei]:{transfer:Be,primaries:Ac,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Lc]:{transfer:bc,primaries:Rc,toReference:o=>o.applyMatrix3(f_),fromReference:o=>o.applyMatrix3(u_)},[Hh]:{transfer:Be,primaries:Rc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(f_),fromReference:o=>o.applyMatrix3(u_).convertLinearToSRGB()}},gy=new Set([Ga,Lc]),Le={enabled:!0,_workingColorSpace:Ga,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!gy.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=Jl[e].toReference,l=Jl[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Jl[o].primaries},getTransfer:function(o){return o===La?bc:Jl[o].transfer}};function Ms(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Jf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ns;class _y{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ns===void 0&&(ns=wc("canvas")),ns.width=e.width,ns.height=e.height;const r=ns.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ns}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=wc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Ms(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ms(i[r]/255)*255):i[r]=Ms(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vy=0;class T0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push($f(l[h].image)):u.push($f(l[h]))}else u=$f(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function $f(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?_y.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xy=0;class Pn extends vr{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=mr,l=mr,u=di,h=gr,d=Ai,p=Ia,m=Pn.DEFAULT_ANISOTROPY,g=La){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Ho(),this.name="",this.source=new T0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==h0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dh:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case Uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dh:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case Uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=h0;Pn.DEFAULT_ANISOTROPY=1;class pn{constructor(e=0,i=0,r=0,l=1){pn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],g=p[4],v=p[8],S=p[1],E=p[5],C=p[9],R=p[2],x=p[6],_=p[10];if(Math.abs(g-S)<.01&&Math.abs(v-R)<.01&&Math.abs(C-x)<.01){if(Math.abs(g+S)<.1&&Math.abs(v+R)<.1&&Math.abs(C+x)<.1&&Math.abs(m+E+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(m+1)/2,F=(E+1)/2,k=(_+1)/2,H=(g+S)/4,P=(v+R)/4,it=(C+x)/4;return w>F&&w>k?w<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(w),l=H/r,u=P/r):F>k?F<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(F),r=H/l,u=it/l):k<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),r=P/u,l=it/u),this.set(r,l,u,i),this}let I=Math.sqrt((x-C)*(x-C)+(v-R)*(v-R)+(S-g)*(S-g));return Math.abs(I)<.001&&(I=1),this.x=(x-C)/I,this.y=(v-R)/I,this.z=(S-g)/I,this.w=Math.acos((m+E+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sy extends vr{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new pn(0,0,e,i),this.scissorTest=!1,this.viewport=new pn(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},r);const u=new Pn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new T0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _r extends Sy{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class b0 extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yy extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let p=r[l+0],m=r[l+1],g=r[l+2],v=r[l+3];const S=u[h+0],E=u[h+1],C=u[h+2],R=u[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=S,e[i+1]=E,e[i+2]=C,e[i+3]=R;return}if(v!==R||p!==S||m!==E||g!==C){let x=1-d;const _=p*S+m*E+g*C+v*R,I=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const k=Math.sqrt(w),H=Math.atan2(k,_*I);x=Math.sin(x*H)/k,d=Math.sin(d*H)/k}const F=d*I;if(p=p*x+S*F,m=m*x+E*F,g=g*x+C*F,v=v*x+R*F,x===1-d){const k=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=k,m*=k,g*=k,v*=k}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],v=u[h],S=u[h+1],E=u[h+2],C=u[h+3];return e[i]=d*C+g*v+p*E-m*S,e[i+1]=p*C+g*S+m*v-d*E,e[i+2]=m*C+g*E+d*S-p*v,e[i+3]=g*C-d*v-p*S-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),v=d(u/2),S=p(r/2),E=p(l/2),C=p(u/2);switch(h){case"XYZ":this._x=S*g*v+m*E*C,this._y=m*E*v-S*g*C,this._z=m*g*C+S*E*v,this._w=m*g*v-S*E*C;break;case"YXZ":this._x=S*g*v+m*E*C,this._y=m*E*v-S*g*C,this._z=m*g*C-S*E*v,this._w=m*g*v+S*E*C;break;case"ZXY":this._x=S*g*v-m*E*C,this._y=m*E*v+S*g*C,this._z=m*g*C+S*E*v,this._w=m*g*v-S*E*C;break;case"ZYX":this._x=S*g*v-m*E*C,this._y=m*E*v+S*g*C,this._z=m*g*C-S*E*v,this._w=m*g*v+S*E*C;break;case"YZX":this._x=S*g*v+m*E*C,this._y=m*E*v+S*g*C,this._z=m*g*C-S*E*v,this._w=m*g*v-S*E*C;break;case"XZY":this._x=S*g*v-m*E*C,this._y=m*E*v-S*g*C,this._z=m*g*C+S*E*v,this._w=m*g*v+S*E*C;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],v=i[10],S=r+d+v;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(g-p)*E,this._y=(u-m)*E,this._z=(h-l)*E}else if(r>d&&r>v){const E=2*Math.sqrt(1+r-d-v);this._w=(g-p)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(u+m)/E}else if(d>v){const E=2*Math.sqrt(1+d-r-v);this._w=(u-m)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(p+g)/E}else{const E=2*Math.sqrt(1+v-r-d);this._w=(h-l)/E,this._x=(u+m)/E,this._y=(p+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+h*d+l*m-u*p,this._y=l*g+h*p+u*d-r*m,this._z=u*g+h*m+r*p-l*d,this._w=h*g-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const E=1-i;return this._w=E*h+i*this._w,this._x=E*r+i*this._x,this._y=E*l+i*this._y,this._z=E*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),v=Math.sin((1-i)*g)/m,S=Math.sin(i*g)/m;return this._w=h*v+this._w*S,this._x=r*v+this._x*S,this._y=l*v+this._y*S,this._z=u*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,i=0,r=0){X.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(h_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(h_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*r),g=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+p*m+h*v-d*g,this.y=r+p*g+d*m-u*v,this.z=l+p*v+u*g-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return th.copy(this).projectOnVector(e),this.sub(th)}reflect(e){return this.sub(th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Rn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const th=new X,h_=new Ki;class Ba{constructor(e=new X(1/0,1/0,1/0),i=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,ui):ui.fromBufferAttribute(u,h),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$l.copy(r.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),tc.subVectors(this.max,Uo),is.subVectors(e.a,Uo),as.subVectors(e.b,Uo),rs.subVectors(e.c,Uo),ba.subVectors(as,is),Aa.subVectors(rs,as),rr.subVectors(is,rs);let i=[0,-ba.z,ba.y,0,-Aa.z,Aa.y,0,-rr.z,rr.y,ba.z,0,-ba.x,Aa.z,0,-Aa.x,rr.z,0,-rr.x,-ba.y,ba.x,0,-Aa.y,Aa.x,0,-rr.y,rr.x,0];return!eh(i,is,as,rs,tc)||(i=[1,0,0,0,1,0,0,0,1],!eh(i,is,as,rs,tc))?!1:(ec.crossVectors(ba,Aa),i=[ec.x,ec.y,ec.z],eh(i,is,as,rs,tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vi=[new X,new X,new X,new X,new X,new X,new X,new X],ui=new X,$l=new Ba,is=new X,as=new X,rs=new X,ba=new X,Aa=new X,rr=new X,Uo=new X,tc=new X,ec=new X,sr=new X;function eh(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){sr.fromArray(o,u);const d=l.x*Math.abs(sr.x)+l.y*Math.abs(sr.y)+l.z*Math.abs(sr.z),p=e.dot(sr),m=i.dot(sr),g=r.dot(sr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const My=new Ba,Lo=new X,nh=new X;class Gh{constructor(e=new X,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):My.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Lo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(nh)),this.expandByPoint(Lo.copy(e.center).sub(nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new X,ih=new X,nc=new X,Ra=new X,ah=new X,ic=new X,rh=new X;class A0{constructor(e=new X,i=new X(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ki.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,i),ki.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){ih.copy(e).add(i).multiplyScalar(.5),nc.copy(i).sub(e).normalize(),Ra.copy(this.origin).sub(ih);const u=e.distanceTo(i)*.5,h=-this.direction.dot(nc),d=Ra.dot(this.direction),p=-Ra.dot(nc),m=Ra.lengthSq(),g=Math.abs(1-h*h);let v,S,E,C;if(g>0)if(v=h*p-d,S=h*d-p,C=u*g,v>=0)if(S>=-C)if(S<=C){const R=1/g;v*=R,S*=R,E=v*(v+h*S+2*d)+S*(h*v+S+2*p)+m}else S=u,v=Math.max(0,-(h*S+d)),E=-v*v+S*(S+2*p)+m;else S=-u,v=Math.max(0,-(h*S+d)),E=-v*v+S*(S+2*p)+m;else S<=-C?(v=Math.max(0,-(-h*u+d)),S=v>0?-u:Math.min(Math.max(-u,-p),u),E=-v*v+S*(S+2*p)+m):S<=C?(v=0,S=Math.min(Math.max(-u,-p),u),E=S*(S+2*p)+m):(v=Math.max(0,-(h*u+d)),S=v>0?u:Math.min(Math.max(-u,-p),u),E=-v*v+S*(S+2*p)+m);else S=h>0?-u:u,v=Math.max(0,-(h*S+d)),E=-v*v+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(ih).addScaledVector(nc,S),E}intersectSphere(e,i){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),l=ki.dot(ki)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,l=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,l=(e.min.x-S.x)*m),g>=0?(u=(e.min.y-S.y)*g,h=(e.max.y-S.y)*g):(u=(e.max.y-S.y)*g,h=(e.min.y-S.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-S.z)*v,p=(e.max.z-S.z)*v):(d=(e.max.z-S.z)*v,p=(e.min.z-S.z)*v),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,i,r,l,u){ah.subVectors(i,e),ic.subVectors(r,e),rh.crossVectors(ah,ic);let h=this.direction.dot(rh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ra.subVectors(this.origin,e);const p=d*this.direction.dot(ic.crossVectors(Ra,ic));if(p<0)return null;const m=d*this.direction.dot(ah.cross(Ra));if(m<0||p+m>h)return null;const g=-d*Ra.dot(rh);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,i,r,l,u,h,d,p,m,g,v,S,E,C,R,x){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m,g,v,S,E,C,R,x)}set(e,i,r,l,u,h,d,p,m,g,v,S,E,C,R,x){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=v,_[14]=S,_[3]=E,_[7]=C,_[11]=R,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ss.setFromMatrixColumn(e,0).length(),u=1/ss.setFromMatrixColumn(e,1).length(),h=1/ss.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const S=h*g,E=h*v,C=d*g,R=d*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=E+C*m,i[5]=S-R*m,i[9]=-d*p,i[2]=R-S*m,i[6]=C+E*m,i[10]=h*p}else if(e.order==="YXZ"){const S=p*g,E=p*v,C=m*g,R=m*v;i[0]=S+R*d,i[4]=C*d-E,i[8]=h*m,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=E*d-C,i[6]=R+S*d,i[10]=h*p}else if(e.order==="ZXY"){const S=p*g,E=p*v,C=m*g,R=m*v;i[0]=S-R*d,i[4]=-h*v,i[8]=C+E*d,i[1]=E+C*d,i[5]=h*g,i[9]=R-S*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const S=h*g,E=h*v,C=d*g,R=d*v;i[0]=p*g,i[4]=C*m-E,i[8]=S*m+R,i[1]=p*v,i[5]=R*m+S,i[9]=E*m-C,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const S=h*p,E=h*m,C=d*p,R=d*m;i[0]=p*g,i[4]=R-S*v,i[8]=C*v+E,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=E*v+C,i[10]=S-R*v}else if(e.order==="XZY"){const S=h*p,E=h*m,C=d*p,R=d*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=S*v+R,i[5]=h*g,i[9]=E*v-C,i[2]=C*v-E,i[6]=d*g,i[10]=R*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ey,e,Ty)}lookAt(e,i,r){const l=this.elements;return Xn.subVectors(e,i),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Ca.crossVectors(r,Xn),Ca.lengthSq()===0&&(Math.abs(r.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Ca.crossVectors(r,Xn)),Ca.normalize(),ac.crossVectors(Xn,Ca),l[0]=Ca.x,l[4]=ac.x,l[8]=Xn.x,l[1]=Ca.y,l[5]=ac.y,l[9]=Xn.y,l[2]=Ca.z,l[6]=ac.z,l[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],g=r[1],v=r[5],S=r[9],E=r[13],C=r[2],R=r[6],x=r[10],_=r[14],I=r[3],w=r[7],F=r[11],k=r[15],H=l[0],P=l[4],it=l[8],N=l[12],A=l[1],Q=l[5],st=l[9],V=l[13],mt=l[2],dt=l[6],B=l[10],$=l[14],j=l[3],yt=l[7],L=l[11],tt=l[15];return u[0]=h*H+d*A+p*mt+m*j,u[4]=h*P+d*Q+p*dt+m*yt,u[8]=h*it+d*st+p*B+m*L,u[12]=h*N+d*V+p*$+m*tt,u[1]=g*H+v*A+S*mt+E*j,u[5]=g*P+v*Q+S*dt+E*yt,u[9]=g*it+v*st+S*B+E*L,u[13]=g*N+v*V+S*$+E*tt,u[2]=C*H+R*A+x*mt+_*j,u[6]=C*P+R*Q+x*dt+_*yt,u[10]=C*it+R*st+x*B+_*L,u[14]=C*N+R*V+x*$+_*tt,u[3]=I*H+w*A+F*mt+k*j,u[7]=I*P+w*Q+F*dt+k*yt,u[11]=I*it+w*st+F*B+k*L,u[15]=I*N+w*V+F*$+k*tt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],p=e[9],m=e[13],g=e[2],v=e[6],S=e[10],E=e[14],C=e[3],R=e[7],x=e[11],_=e[15];return C*(+u*p*v-l*m*v-u*d*S+r*m*S+l*d*E-r*p*E)+R*(+i*p*E-i*m*S+u*h*S-l*h*E+l*m*g-u*p*g)+x*(+i*m*v-i*d*E-u*h*v+r*h*E+u*d*g-r*m*g)+_*(-l*d*g-i*p*v+i*d*S+l*h*v-r*h*S+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=e[9],S=e[10],E=e[11],C=e[12],R=e[13],x=e[14],_=e[15],I=v*x*m-R*S*m+R*p*E-d*x*E-v*p*_+d*S*_,w=C*S*m-g*x*m-C*p*E+h*x*E+g*p*_-h*S*_,F=g*R*m-C*v*m+C*d*E-h*R*E-g*d*_+h*v*_,k=C*v*p-g*R*p-C*d*S+h*R*S+g*d*x-h*v*x,H=i*I+r*w+l*F+u*k;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/H;return e[0]=I*P,e[1]=(R*S*u-v*x*u-R*l*E+r*x*E+v*l*_-r*S*_)*P,e[2]=(d*x*u-R*p*u+R*l*m-r*x*m-d*l*_+r*p*_)*P,e[3]=(v*p*u-d*S*u-v*l*m+r*S*m+d*l*E-r*p*E)*P,e[4]=w*P,e[5]=(g*x*u-C*S*u+C*l*E-i*x*E-g*l*_+i*S*_)*P,e[6]=(C*p*u-h*x*u-C*l*m+i*x*m+h*l*_-i*p*_)*P,e[7]=(h*S*u-g*p*u+g*l*m-i*S*m-h*l*E+i*p*E)*P,e[8]=F*P,e[9]=(C*v*u-g*R*u-C*r*E+i*R*E+g*r*_-i*v*_)*P,e[10]=(h*R*u-C*d*u+C*r*m-i*R*m-h*r*_+i*d*_)*P,e[11]=(g*d*u-h*v*u-g*r*m+i*v*m+h*r*E-i*d*E)*P,e[12]=k*P,e[13]=(g*R*l-C*v*l+C*r*S-i*R*S-g*r*x+i*v*x)*P,e[14]=(C*d*l-h*R*l-C*r*p+i*R*p+h*r*x-i*d*x)*P,e[15]=(h*v*l-g*d*l+g*r*p-i*v*p-h*r*S+i*d*S)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,p=e.z,m=u*h,g=u*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*h,0,m*p-l*d,g*p+l*h,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,g=h+h,v=d+d,S=u*m,E=u*g,C=u*v,R=h*g,x=h*v,_=d*v,I=p*m,w=p*g,F=p*v,k=r.x,H=r.y,P=r.z;return l[0]=(1-(R+_))*k,l[1]=(E+F)*k,l[2]=(C-w)*k,l[3]=0,l[4]=(E-F)*H,l[5]=(1-(S+_))*H,l[6]=(x+I)*H,l[7]=0,l[8]=(C+w)*P,l[9]=(x-I)*P,l[10]=(1-(S+R))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ss.set(l[0],l[1],l[2]).length();const h=ss.set(l[4],l[5],l[6]).length(),d=ss.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],fi.copy(this);const m=1/u,g=1/h,v=1/d;return fi.elements[0]*=m,fi.elements[1]*=m,fi.elements[2]*=m,fi.elements[4]*=g,fi.elements[5]*=g,fi.elements[6]*=g,fi.elements[8]*=v,fi.elements[9]*=v,fi.elements[10]*=v,i.setFromRotationMatrix(fi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=Zi){const p=this.elements,m=2*u/(i-e),g=2*u/(r-l),v=(i+e)/(i-e),S=(r+l)/(r-l);let E,C;if(d===Zi)E=-(h+u)/(h-u),C=-2*h*u/(h-u);else if(d===Cc)E=-h/(h-u),C=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=Zi){const p=this.elements,m=1/(i-e),g=1/(r-l),v=1/(h-u),S=(i+e)*m,E=(r+l)*g;let C,R;if(d===Zi)C=(h+u)*v,R=-2*v;else if(d===Cc)C=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-E,p[2]=0,p[6]=0,p[10]=R,p[14]=-C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ss=new X,fi=new tn,Ey=new X(0,0,0),Ty=new X(1,1,1),Ca=new X,ac=new X,Xn=new X,d_=new tn,p_=new Ki;class mi{constructor(e=0,i=0,r=0,l=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],v=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Rn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Rn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return d_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(d_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return p_.setFromEuler(this),this.setFromQuaternion(p_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class R0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let by=0;const m_=new X,os=new Ki,Xi=new tn,rc=new X,No=new X,Ay=new X,Ry=new Ki,g_=new X(1,0,0),__=new X(0,1,0),v_=new X(0,0,1),x_={type:"added"},Cy={type:"removed"},ls={type:"childadded",child:null},sh={type:"childremoved",child:null};class En extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new X,i=new mi,r=new Ki,l=new X(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new he}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return os.setFromAxisAngle(e,i),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,i){return os.setFromAxisAngle(e,i),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(g_,e)}rotateY(e){return this.rotateOnAxis(__,e)}rotateZ(e){return this.rotateOnAxis(v_,e)}translateOnAxis(e,i){return m_.copy(e).applyQuaternion(this.quaternion),this.position.add(m_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(g_,e)}translateY(e){return this.translateOnAxis(__,e)}translateZ(e){return this.translateOnAxis(v_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?rc.copy(e):rc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(No,rc,this.up):Xi.lookAt(rc,No,this.up),this.quaternion.setFromRotationMatrix(Xi),l&&(Xi.extractRotation(l.matrixWorld),os.setFromRotationMatrix(Xi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(x_),ls.child=e,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Cy),sh.child=e,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(x_),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,Ay),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,Ry,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++){const d=l[u];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),g=h(e.images),v=h(e.shapes),S=h(e.skeletons),E=h(e.animations),C=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),E.length>0&&(r.animations=E),C.length>0&&(r.nodes=C)}return r.object=l,r;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}En.DEFAULT_UP=new X(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new X,ji=new X,oh=new X,qi=new X,cs=new X,us=new X,S_=new X,lh=new X,ch=new X,uh=new X;class bi{constructor(e=new X,i=new X,r=new X){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),hi.subVectors(e,i),l.cross(hi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){hi.subVectors(l,i),ji.subVectors(r,i),oh.subVectors(e,i);const h=hi.dot(hi),d=hi.dot(ji),p=hi.dot(oh),m=ji.dot(ji),g=ji.dot(oh),v=h*m-d*d;if(v===0)return u.set(0,0,0),null;const S=1/v,E=(m*p-d*g)*S,C=(h*g-d*p)*S;return u.set(1-E-C,C,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,i,r,l,u,h,d,p){return this.getBarycoord(e,i,r,l,qi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,qi.x),p.addScaledVector(h,qi.y),p.addScaledVector(d,qi.z),p)}static isFrontFacing(e,i,r,l){return hi.subVectors(r,i),ji.subVectors(e,i),hi.cross(ji).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),hi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return bi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;cs.subVectors(l,r),us.subVectors(u,r),lh.subVectors(e,r);const p=cs.dot(lh),m=us.dot(lh);if(p<=0&&m<=0)return i.copy(r);ch.subVectors(e,l);const g=cs.dot(ch),v=us.dot(ch);if(g>=0&&v<=g)return i.copy(l);const S=p*v-g*m;if(S<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(r).addScaledVector(cs,h);uh.subVectors(e,u);const E=cs.dot(uh),C=us.dot(uh);if(C>=0&&E<=C)return i.copy(u);const R=E*m-p*C;if(R<=0&&m>=0&&C<=0)return d=m/(m-C),i.copy(r).addScaledVector(us,d);const x=g*C-E*v;if(x<=0&&v-g>=0&&E-C>=0)return S_.subVectors(u,l),d=(v-g)/(v-g+(E-C)),i.copy(l).addScaledVector(S_,d);const _=1/(x+R+S);return h=R*_,d=S*_,i.copy(r).addScaledVector(cs,h).addScaledVector(us,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const C0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wa={h:0,s:0,l:0},sc={h:0,s:0,l:0};function fh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ee{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Le.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Le.workingColorSpace){return this.r=e,this.g=i,this.b=r,Le.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Le.workingColorSpace){if(e=hy(e,1),i=Rn(i,0,1),r=Rn(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=fh(h,u,e+1/3),this.g=fh(h,u,e),this.b=fh(h,u,e-1/3)}return Le.toWorkingColorSpace(this,l),this}setStyle(e,i=Ei){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ei){const r=C0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=Jf(e.r),this.g=Jf(e.g),this.b=Jf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ei){return Le.fromWorkingColorSpace(Mn.copy(this),e),Math.round(Rn(Mn.r*255,0,255))*65536+Math.round(Rn(Mn.g*255,0,255))*256+Math.round(Rn(Mn.b*255,0,255))}getHexString(e=Ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Le.workingColorSpace){Le.fromWorkingColorSpace(Mn.copy(this),i);const r=Mn.r,l=Mn.g,u=Mn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const v=h-d;switch(m=g<=.5?v/(h+d):v/(2-h-d),h){case r:p=(l-u)/v+(l<u?6:0);break;case l:p=(u-r)/v+2;break;case u:p=(r-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=Le.workingColorSpace){return Le.fromWorkingColorSpace(Mn.copy(this),i),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Ei){Le.fromWorkingColorSpace(Mn.copy(this),e);const i=Mn.r,r=Mn.g,l=Mn.b;return e!==Ei?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(wa),this.setHSL(wa.h+e,wa.s+i,wa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(wa),e.getHSL(sc);const r=Kf(wa.h,sc.h,i),l=Kf(wa.s,sc.s,i),u=Kf(wa.l,sc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Ee;Ee.NAMES=C0;let wy=0;class Go extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=Ss,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Rh,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Ec,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(r.blending=this.blending),this.side!==Fa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ah&&(r.blendSrc=this.blendSrc),this.blendDst!==Rh&&(r.blendDst=this.blendDst),this.blendEquation!==dr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ec&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class w0 extends Go{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=f0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new X,oc=new ne;class Ri{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=o_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return my("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(e),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(e),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(e),this.setXYZ(i,an.x,an.y,an.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Do(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Nn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Do(i,this.array)),i}setX(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Do(i,this.array)),i}setY(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Do(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Do(i,this.array)),i}setW(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array),l=Nn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array),l=Nn(l,this.array),u=Nn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==o_&&(e.usage=this.usage),e}}class D0 extends Ri{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class U0 extends Ri{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class qn extends Ri{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Dy=0;const ei=new tn,hh=new En,fs=new X,jn=new Ba,Oo=new Ba,hn=new X;class Qi extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E0(e)?U0:D0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new he().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,i,r){return ei.makeTranslation(e,i,r),this.applyMatrix4(ei),this}scale(e,i,r){return ei.makeScale(e,i,r),this.applyMatrix4(ei),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new qn(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ba);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];jn.setFromBufferAttribute(u),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Oo.setFromBufferAttribute(d),this.morphTargetsRelative?(hn.addVectors(jn.min,Oo.min),jn.expandByPoint(hn),hn.addVectors(jn.max,Oo.max),jn.expandByPoint(hn)):(jn.expandByPoint(Oo.min),jn.expandByPoint(Oo.max))}jn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)hn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(hn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)hn.fromBufferAttribute(d,m),p&&(fs.fromBufferAttribute(e,m),hn.add(fs)),l=Math.max(l,r.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let it=0;it<r.count;it++)d[it]=new X,p[it]=new X;const m=new X,g=new X,v=new X,S=new ne,E=new ne,C=new ne,R=new X,x=new X;function _(it,N,A){m.fromBufferAttribute(r,it),g.fromBufferAttribute(r,N),v.fromBufferAttribute(r,A),S.fromBufferAttribute(u,it),E.fromBufferAttribute(u,N),C.fromBufferAttribute(u,A),g.sub(m),v.sub(m),E.sub(S),C.sub(S);const Q=1/(E.x*C.y-C.x*E.y);isFinite(Q)&&(R.copy(g).multiplyScalar(C.y).addScaledVector(v,-E.y).multiplyScalar(Q),x.copy(v).multiplyScalar(E.x).addScaledVector(g,-C.x).multiplyScalar(Q),d[it].add(R),d[N].add(R),d[A].add(R),p[it].add(x),p[N].add(x),p[A].add(x))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let it=0,N=I.length;it<N;++it){const A=I[it],Q=A.start,st=A.count;for(let V=Q,mt=Q+st;V<mt;V+=3)_(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const w=new X,F=new X,k=new X,H=new X;function P(it){k.fromBufferAttribute(l,it),H.copy(k);const N=d[it];w.copy(N),w.sub(k.multiplyScalar(k.dot(N))).normalize(),F.crossVectors(H,N);const Q=F.dot(p[it])<0?-1:1;h.setXYZW(it,w.x,w.y,w.z,Q)}for(let it=0,N=I.length;it<N;++it){const A=I[it],Q=A.start,st=A.count;for(let V=Q,mt=Q+st;V<mt;V+=3)P(e.getX(V+0)),P(e.getX(V+1)),P(e.getX(V+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,E=r.count;S<E;S++)r.setXYZ(S,0,0,0);const l=new X,u=new X,h=new X,d=new X,p=new X,m=new X,g=new X,v=new X;if(e)for(let S=0,E=e.count;S<E;S+=3){const C=e.getX(S+0),R=e.getX(S+1),x=e.getX(S+2);l.fromBufferAttribute(i,C),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,x),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,x),d.add(g),p.add(g),m.add(g),r.setXYZ(C,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)hn.fromBufferAttribute(e,i),hn.normalize(),e.setXYZ(i,hn.x,hn.y,hn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,v=d.normalized,S=new m.constructor(p.length*g);let E=0,C=0;for(let R=0,x=p.length;R<x;R++){d.isInterleavedBufferAttribute?E=p[R]*d.data.stride+d.offset:E=p[R]*g;for(let _=0;_<g;_++)S[C++]=m[E++]}return new Ri(S,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Qi,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,v=m.length;g<v;g++){const S=m[g],E=e(S,r);p.push(E)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,S=m.length;v<S;v++){const E=m[v];g.push(E.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=e.morphAttributes;for(const m in u){const g=[],v=u[m];for(let S=0,E=v.length;S<E;S++)g.push(v[S].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,g=h.length;m<g;m++){const v=h[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const y_=new tn,or=new A0,lc=new Gh,M_=new X,hs=new X,ds=new X,ps=new X,dh=new X,cc=new X,uc=new ne,fc=new ne,hc=new ne,E_=new X,T_=new X,b_=new X,dc=new X,pc=new X;class dn extends En{constructor(e=new Qi,i=new w0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){cc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],v=u[p];g!==0&&(dh.fromBufferAttribute(v,e),h?cc.addScaledVector(dh,g):cc.addScaledVector(dh.sub(i),g))}i.add(cc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),lc.copy(r.boundingSphere),lc.applyMatrix4(u),or.copy(e.ray).recast(e.near),!(lc.containsPoint(or.origin)===!1&&(or.intersectSphere(lc,M_)===null||or.origin.distanceToSquared(M_)>(e.far-e.near)**2))&&(y_.copy(u).invert(),or.copy(e.ray).applyMatrix4(y_),!(r.boundingBox!==null&&or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,or)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,S=u.groups,E=u.drawRange;if(d!==null)if(Array.isArray(h))for(let C=0,R=S.length;C<R;C++){const x=S[C],_=h[x.materialIndex],I=Math.max(x.start,E.start),w=Math.min(d.count,Math.min(x.start+x.count,E.start+E.count));for(let F=I,k=w;F<k;F+=3){const H=d.getX(F),P=d.getX(F+1),it=d.getX(F+2);l=mc(this,_,e,r,m,g,v,H,P,it),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const C=Math.max(0,E.start),R=Math.min(d.count,E.start+E.count);for(let x=C,_=R;x<_;x+=3){const I=d.getX(x),w=d.getX(x+1),F=d.getX(x+2);l=mc(this,h,e,r,m,g,v,I,w,F),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let C=0,R=S.length;C<R;C++){const x=S[C],_=h[x.materialIndex],I=Math.max(x.start,E.start),w=Math.min(p.count,Math.min(x.start+x.count,E.start+E.count));for(let F=I,k=w;F<k;F+=3){const H=F,P=F+1,it=F+2;l=mc(this,_,e,r,m,g,v,H,P,it),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const C=Math.max(0,E.start),R=Math.min(p.count,E.start+E.count);for(let x=C,_=R;x<_;x+=3){const I=x,w=x+1,F=x+2;l=mc(this,h,e,r,m,g,v,I,w,F),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function Uy(o,e,i,r,l,u,h,d){let p;if(e.side===On?p=r.intersectTriangle(h,u,l,!0,d):p=r.intersectTriangle(l,u,h,e.side===Fa,d),p===null)return null;pc.copy(d),pc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(pc);return m<i.near||m>i.far?null:{distance:m,point:pc.clone(),object:o}}function mc(o,e,i,r,l,u,h,d,p,m){o.getVertexPosition(d,hs),o.getVertexPosition(p,ds),o.getVertexPosition(m,ps);const g=Uy(o,e,i,r,hs,ds,ps,dc);if(g){l&&(uc.fromBufferAttribute(l,d),fc.fromBufferAttribute(l,p),hc.fromBufferAttribute(l,m),g.uv=bi.getInterpolation(dc,hs,ds,ps,uc,fc,hc,new ne)),u&&(uc.fromBufferAttribute(u,d),fc.fromBufferAttribute(u,p),hc.fromBufferAttribute(u,m),g.uv1=bi.getInterpolation(dc,hs,ds,ps,uc,fc,hc,new ne)),h&&(E_.fromBufferAttribute(h,d),T_.fromBufferAttribute(h,p),b_.fromBufferAttribute(h,m),g.normal=bi.getInterpolation(dc,hs,ds,ps,E_,T_,b_,new X),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new X,materialIndex:0};bi.getNormal(hs,ds,ps,v.normal),g.face=v}return g}class Vo extends Qi{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],g=[],v=[];let S=0,E=0;C("z","y","x",-1,-1,r,i,e,h,u,0),C("z","y","x",1,-1,r,i,-e,h,u,1),C("x","z","y",1,1,e,r,i,l,h,2),C("x","z","y",1,-1,e,r,-i,l,h,3),C("x","y","z",1,-1,e,i,r,l,u,4),C("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new qn(m,3)),this.setAttribute("normal",new qn(g,3)),this.setAttribute("uv",new qn(v,2));function C(R,x,_,I,w,F,k,H,P,it,N){const A=F/P,Q=k/it,st=F/2,V=k/2,mt=H/2,dt=P+1,B=it+1;let $=0,j=0;const yt=new X;for(let L=0;L<B;L++){const tt=L*Q-V;for(let Tt=0;Tt<dt;Tt++){const bt=Tt*A-st;yt[R]=bt*I,yt[x]=tt*w,yt[_]=mt,m.push(yt.x,yt.y,yt.z),yt[R]=0,yt[x]=0,yt[_]=H>0?1:-1,g.push(yt.x,yt.y,yt.z),v.push(Tt/P),v.push(1-L/it),$+=1}}for(let L=0;L<it;L++)for(let tt=0;tt<P;tt++){const Tt=S+tt+dt*L,bt=S+tt+dt*(L+1),Y=S+(tt+1)+dt*(L+1),_t=S+(tt+1)+dt*L;p.push(Tt,bt,_t),p.push(bt,Y,_t),j+=6}d.addGroup(E,j,N),E+=j,S+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function An(o){const e={};for(let i=0;i<o.length;i++){const r=Rs(o[i]);for(const l in r)e[l]=r[l]}return e}function Ly(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function L0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Le.workingColorSpace}const Ny={clone:Rs,merge:An};var Oy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Py=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ha extends Go{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oy,this.fragmentShader=Py,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Ly(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Vh extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Zi}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Da=new X,A_=new ne,R_=new ne;class ii extends Vh{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Lh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lh*2*Math.atan(Math.tan(yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Da.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Da.x,Da.y).multiplyScalar(-e/Da.z),Da.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Da.x,Da.y).multiplyScalar(-e/Da.z)}getViewSize(e,i){return this.getViewBounds(e,A_,R_),i.subVectors(R_,A_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(yc*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ms=-90,gs=1;class zy extends En{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(ms,gs,e,i);l.layers=this.layers,this.add(l);const u=new ii(ms,gs,e,i);u.layers=this.layers,this.add(u);const h=new ii(ms,gs,e,i);h.layers=this.layers,this.add(h);const d=new ii(ms,gs,e,i);d.layers=this.layers,this.add(d);const p=new ii(ms,gs,e,i);p.layers=this.layers,this.add(p);const m=new ii(ms,gs,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(e===Zi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Cc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,g]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),C=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,S,E),e.xr.enabled=C,r.texture.needsPMREMUpdate=!0}}class N0 extends Pn{constructor(e,i,r,l,u,h,d,p,m,g){e=e!==void 0?e:[],i=i!==void 0?i:Ts,super(e,i,r,l,u,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Iy extends _r{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new N0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:di}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Vo(5,5,5),u=new Ha({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:On,blending:Pa});u.uniforms.tEquirect.value=i;const h=new dn(l,u),d=i.minFilter;return i.minFilter===gr&&(i.minFilter=di),new zy(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}const ph=new X,By=new X,Fy=new he;class Ua{constructor(e=new X(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=ph.subVectors(r,i).cross(By.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(ph),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Fy.getNormalMatrix(e),l=this.coplanarPoint(ph).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Gh,gc=new X;class kh{constructor(e=new Ua,i=new Ua,r=new Ua,l=new Ua,u=new Ua,h=new Ua){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Zi){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],p=l[3],m=l[4],g=l[5],v=l[6],S=l[7],E=l[8],C=l[9],R=l[10],x=l[11],_=l[12],I=l[13],w=l[14],F=l[15];if(r[0].setComponents(p-u,S-m,x-E,F-_).normalize(),r[1].setComponents(p+u,S+m,x+E,F+_).normalize(),r[2].setComponents(p+h,S+g,x+C,F+I).normalize(),r[3].setComponents(p-h,S-g,x-C,F-I).normalize(),r[4].setComponents(p-d,S-v,x-R,F-w).normalize(),i===Zi)r[5].setComponents(p+d,S+v,x+R,F+w).normalize();else if(i===Cc)r[5].setComponents(d,v,R,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(gc.x=l.normal.x>0?e.max.x:e.min.x,gc.y=l.normal.y>0?e.max.y:e.min.y,gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function O0(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Hy(o){const e=new WeakMap;function i(d,p){const m=d.array,g=d.usage,v=m.byteLength,S=o.createBuffer();o.bindBuffer(p,S),o.bufferData(p,m,g),d.onUploadCallback();let E;if(m instanceof Float32Array)E=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=o.SHORT;else if(m instanceof Uint32Array)E=o.UNSIGNED_INT;else if(m instanceof Int32Array)E=o.INT;else if(m instanceof Int8Array)E=o.BYTE;else if(m instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const g=p.array,v=p._updateRange,S=p.updateRanges;if(o.bindBuffer(m,d),v.count===-1&&S.length===0&&o.bufferSubData(m,0,g),S.length!==0){for(let E=0,C=S.length;E<C;E++){const R=S[E];o.bufferSubData(m,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}p.clearUpdateRanges()}v.count!==-1&&(o.bufferSubData(m,v.offset*g.BYTES_PER_ELEMENT,g,v.offset,v.count),v.count=-1),p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:h}}class Nc extends Qi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,v=e/d,S=i/p,E=[],C=[],R=[],x=[];for(let _=0;_<g;_++){const I=_*S-h;for(let w=0;w<m;w++){const F=w*v-u;C.push(F,-I,0),R.push(0,0,1),x.push(w/d),x.push(1-_/p)}}for(let _=0;_<p;_++)for(let I=0;I<d;I++){const w=I+m*_,F=I+m*(_+1),k=I+1+m*(_+1),H=I+1+m*_;E.push(w,F,H),E.push(F,k,H)}this.setIndex(E),this.setAttribute("position",new qn(C,3)),this.setAttribute("normal",new qn(R,3)),this.setAttribute("uv",new qn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ky=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ky=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$y=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_M="gl_FragColor = linearToOutputTexel( gl_FragColor );",vM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,xM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,DM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,OM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,PM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,HM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,GM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,QM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$M=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,iE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,aE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,rE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ME=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,TE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,RE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,HE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ZE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_T=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ST=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:Gy,alphahash_pars_fragment:Vy,alphamap_fragment:ky,alphamap_pars_fragment:Xy,alphatest_fragment:jy,alphatest_pars_fragment:qy,aomap_fragment:Wy,aomap_pars_fragment:Yy,batching_pars_vertex:Zy,batching_vertex:Ky,begin_vertex:Qy,beginnormal_vertex:Jy,bsdfs:$y,iridescence_fragment:tM,bumpmap_pars_fragment:eM,clipping_planes_fragment:nM,clipping_planes_pars_fragment:iM,clipping_planes_pars_vertex:aM,clipping_planes_vertex:rM,color_fragment:sM,color_pars_fragment:oM,color_pars_vertex:lM,color_vertex:cM,common:uM,cube_uv_reflection_fragment:fM,defaultnormal_vertex:hM,displacementmap_pars_vertex:dM,displacementmap_vertex:pM,emissivemap_fragment:mM,emissivemap_pars_fragment:gM,colorspace_fragment:_M,colorspace_pars_fragment:vM,envmap_fragment:xM,envmap_common_pars_fragment:SM,envmap_pars_fragment:yM,envmap_pars_vertex:MM,envmap_physical_pars_fragment:OM,envmap_vertex:EM,fog_vertex:TM,fog_pars_vertex:bM,fog_fragment:AM,fog_pars_fragment:RM,gradientmap_pars_fragment:CM,lightmap_fragment:wM,lightmap_pars_fragment:DM,lights_lambert_fragment:UM,lights_lambert_pars_fragment:LM,lights_pars_begin:NM,lights_toon_fragment:PM,lights_toon_pars_fragment:zM,lights_phong_fragment:IM,lights_phong_pars_fragment:BM,lights_physical_fragment:FM,lights_physical_pars_fragment:HM,lights_fragment_begin:GM,lights_fragment_maps:VM,lights_fragment_end:kM,logdepthbuf_fragment:XM,logdepthbuf_pars_fragment:jM,logdepthbuf_pars_vertex:qM,logdepthbuf_vertex:WM,map_fragment:YM,map_pars_fragment:ZM,map_particle_fragment:KM,map_particle_pars_fragment:QM,metalnessmap_fragment:JM,metalnessmap_pars_fragment:$M,morphinstance_vertex:tE,morphcolor_vertex:eE,morphnormal_vertex:nE,morphtarget_pars_vertex:iE,morphtarget_vertex:aE,normal_fragment_begin:rE,normal_fragment_maps:sE,normal_pars_fragment:oE,normal_pars_vertex:lE,normal_vertex:cE,normalmap_pars_fragment:uE,clearcoat_normal_fragment_begin:fE,clearcoat_normal_fragment_maps:hE,clearcoat_pars_fragment:dE,iridescence_pars_fragment:pE,opaque_fragment:mE,packing:gE,premultiplied_alpha_fragment:_E,project_vertex:vE,dithering_fragment:xE,dithering_pars_fragment:SE,roughnessmap_fragment:yE,roughnessmap_pars_fragment:ME,shadowmap_pars_fragment:EE,shadowmap_pars_vertex:TE,shadowmap_vertex:bE,shadowmask_pars_fragment:AE,skinbase_vertex:RE,skinning_pars_vertex:CE,skinning_vertex:wE,skinnormal_vertex:DE,specularmap_fragment:UE,specularmap_pars_fragment:LE,tonemapping_fragment:NE,tonemapping_pars_fragment:OE,transmission_fragment:PE,transmission_pars_fragment:zE,uv_pars_fragment:IE,uv_pars_vertex:BE,uv_vertex:FE,worldpos_vertex:HE,background_vert:GE,background_frag:VE,backgroundCube_vert:kE,backgroundCube_frag:XE,cube_vert:jE,cube_frag:qE,depth_vert:WE,depth_frag:YE,distanceRGBA_vert:ZE,distanceRGBA_frag:KE,equirect_vert:QE,equirect_frag:JE,linedashed_vert:$E,linedashed_frag:tT,meshbasic_vert:eT,meshbasic_frag:nT,meshlambert_vert:iT,meshlambert_frag:aT,meshmatcap_vert:rT,meshmatcap_frag:sT,meshnormal_vert:oT,meshnormal_frag:lT,meshphong_vert:cT,meshphong_frag:uT,meshphysical_vert:fT,meshphysical_frag:hT,meshtoon_vert:dT,meshtoon_frag:pT,points_vert:mT,points_frag:gT,shadow_vert:_T,shadow_frag:vT,sprite_vert:xT,sprite_frag:ST},Ot={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Ti={basic:{uniforms:An([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:An([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ee(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:An([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:An([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:An([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Ee(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:An([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:An([Ot.points,Ot.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:An([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:An([Ot.common,Ot.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:An([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:An([Ot.sprite,Ot.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:An([Ot.common,Ot.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:An([Ot.lights,Ot.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Ti.physical={uniforms:An([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const _c={r:0,b:0,g:0},cr=new mi,yT=new tn;function MT(o,e,i,r,l,u,h){const d=new Ee(0);let p=u===!0?0:1,m,g,v=null,S=0,E=null;function C(x,_){let I=!1,w=_.isScene===!0?_.background:null;w&&w.isTexture&&(w=(_.backgroundBlurriness>0?i:e).get(w)),w===null?R(d,p):w&&w.isColor&&(R(w,1),I=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||I)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Uc)?(g===void 0&&(g=new dn(new Vo(1,1,1),new Ha({name:"BackgroundCubeMaterial",uniforms:Rs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,H,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),cr.copy(_.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),g.material.uniforms.envMap.value=w,g.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(yT.makeRotationFromEuler(cr)),g.material.toneMapped=Le.getTransfer(w.colorSpace)!==Be,(v!==w||S!==w.version||E!==o.toneMapping)&&(g.material.needsUpdate=!0,v=w,S=w.version,E=o.toneMapping),g.layers.enableAll(),x.unshift(g,g.geometry,g.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new dn(new Nc(2,2),new Ha({name:"BackgroundMaterial",uniforms:Rs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=Le.getTransfer(w.colorSpace)!==Be,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(v!==w||S!==w.version||E!==o.toneMapping)&&(m.material.needsUpdate=!0,v=w,S=w.version,E=o.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null))}function R(x,_){x.getRGB(_c,L0(o)),r.buffers.color.setClear(_c.r,_c.g,_c.b,_,h)}return{getClearColor:function(){return d},setClearColor:function(x,_=1){d.set(x),p=_,R(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(x){p=x,R(d,p)},render:C}}function ET(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,h=!1;function d(A,Q,st,V,mt){let dt=!1;const B=v(V,st,Q);u!==B&&(u=B,m(u.object)),dt=E(A,V,st,mt),dt&&C(A,V,st,mt),mt!==null&&e.update(mt,o.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,F(A,Q,st,V),mt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(mt).buffer))}function p(){return o.createVertexArray()}function m(A){return o.bindVertexArray(A)}function g(A){return o.deleteVertexArray(A)}function v(A,Q,st){const V=st.wireframe===!0;let mt=r[A.id];mt===void 0&&(mt={},r[A.id]=mt);let dt=mt[Q.id];dt===void 0&&(dt={},mt[Q.id]=dt);let B=dt[V];return B===void 0&&(B=S(p()),dt[V]=B),B}function S(A){const Q=[],st=[],V=[];for(let mt=0;mt<i;mt++)Q[mt]=0,st[mt]=0,V[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:st,attributeDivisors:V,object:A,attributes:{},index:null}}function E(A,Q,st,V){const mt=u.attributes,dt=Q.attributes;let B=0;const $=st.getAttributes();for(const j in $)if($[j].location>=0){const L=mt[j];let tt=dt[j];if(tt===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(tt=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(tt=A.instanceColor)),L===void 0||L.attribute!==tt||tt&&L.data!==tt.data)return!0;B++}return u.attributesNum!==B||u.index!==V}function C(A,Q,st,V){const mt={},dt=Q.attributes;let B=0;const $=st.getAttributes();for(const j in $)if($[j].location>=0){let L=dt[j];L===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(L=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(L=A.instanceColor));const tt={};tt.attribute=L,L&&L.data&&(tt.data=L.data),mt[j]=tt,B++}u.attributes=mt,u.attributesNum=B,u.index=V}function R(){const A=u.newAttributes;for(let Q=0,st=A.length;Q<st;Q++)A[Q]=0}function x(A){_(A,0)}function _(A,Q){const st=u.newAttributes,V=u.enabledAttributes,mt=u.attributeDivisors;st[A]=1,V[A]===0&&(o.enableVertexAttribArray(A),V[A]=1),mt[A]!==Q&&(o.vertexAttribDivisor(A,Q),mt[A]=Q)}function I(){const A=u.newAttributes,Q=u.enabledAttributes;for(let st=0,V=Q.length;st<V;st++)Q[st]!==A[st]&&(o.disableVertexAttribArray(st),Q[st]=0)}function w(A,Q,st,V,mt,dt,B){B===!0?o.vertexAttribIPointer(A,Q,st,mt,dt):o.vertexAttribPointer(A,Q,st,V,mt,dt)}function F(A,Q,st,V){R();const mt=V.attributes,dt=st.getAttributes(),B=Q.defaultAttributeValues;for(const $ in dt){const j=dt[$];if(j.location>=0){let yt=mt[$];if(yt===void 0&&($==="instanceMatrix"&&A.instanceMatrix&&(yt=A.instanceMatrix),$==="instanceColor"&&A.instanceColor&&(yt=A.instanceColor)),yt!==void 0){const L=yt.normalized,tt=yt.itemSize,Tt=e.get(yt);if(Tt===void 0)continue;const bt=Tt.buffer,Y=Tt.type,_t=Tt.bytesPerElement,Et=Y===o.INT||Y===o.UNSIGNED_INT||yt.gpuType===p0;if(yt.isInterleavedBufferAttribute){const wt=yt.data,Ft=wt.stride,jt=yt.offset;if(wt.isInstancedInterleavedBuffer){for(let oe=0;oe<j.locationSize;oe++)_(j.location+oe,wt.meshPerAttribute);A.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let oe=0;oe<j.locationSize;oe++)x(j.location+oe);o.bindBuffer(o.ARRAY_BUFFER,bt);for(let oe=0;oe<j.locationSize;oe++)w(j.location+oe,tt/j.locationSize,Y,L,Ft*_t,(jt+tt/j.locationSize*oe)*_t,Et)}else{if(yt.isInstancedBufferAttribute){for(let wt=0;wt<j.locationSize;wt++)_(j.location+wt,yt.meshPerAttribute);A.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let wt=0;wt<j.locationSize;wt++)x(j.location+wt);o.bindBuffer(o.ARRAY_BUFFER,bt);for(let wt=0;wt<j.locationSize;wt++)w(j.location+wt,tt/j.locationSize,Y,L,tt*_t,tt/j.locationSize*wt*_t,Et)}}else if(B!==void 0){const L=B[$];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(j.location,L);break;case 3:o.vertexAttrib3fv(j.location,L);break;case 4:o.vertexAttrib4fv(j.location,L);break;default:o.vertexAttrib1fv(j.location,L)}}}}I()}function k(){it();for(const A in r){const Q=r[A];for(const st in Q){const V=Q[st];for(const mt in V)g(V[mt].object),delete V[mt];delete Q[st]}delete r[A]}}function H(A){if(r[A.id]===void 0)return;const Q=r[A.id];for(const st in Q){const V=Q[st];for(const mt in V)g(V[mt].object),delete V[mt];delete Q[st]}delete r[A.id]}function P(A){for(const Q in r){const st=r[Q];if(st[A.id]===void 0)continue;const V=st[A.id];for(const mt in V)g(V[mt].object),delete V[mt];delete st[A.id]}}function it(){N(),h=!0,u!==l&&(u=l,m(u.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:it,resetDefaultState:N,dispose:k,releaseStatesOfGeometry:H,releaseStatesOfProgram:P,initAttributes:R,enableAttribute:x,disableUnusedAttributes:I}}function TT(o,e,i){let r;function l(p){r=p}function u(p,m){o.drawArrays(r,p,m),i.update(m,r,1)}function h(p,m,g){g!==0&&(o.drawArraysInstanced(r,p,m,g),i.update(m,r,g))}function d(p,m,g){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<g;S++)this.render(p[S],m[S]);else{v.multiDrawArraysWEBGL(r,p,0,m,0,g);let S=0;for(let E=0;E<g;E++)S+=m[E];i.update(S,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function bT(o,e,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(w){if(w==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const d=u(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const p=i.logarithmicDepthBuffer===!0,m=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),E=o.getParameter(o.MAX_VERTEX_ATTRIBS),C=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),R=o.getParameter(o.MAX_VARYING_VECTORS),x=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),_=g>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:u,precision:h,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:S,maxAttributes:E,maxVertexUniforms:C,maxVaryings:R,maxFragmentUniforms:x,vertexTextures:_,maxSamples:I}}function AT(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new Ua,d=new he,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const E=v.length!==0||S||r!==0||l;return l=S,r=v.length,E},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=g(v,S,0)},this.setState=function(v,S,E){const C=v.clippingPlanes,R=v.clipIntersection,x=v.clipShadows,_=o.get(v);if(!l||C===null||C.length===0||u&&!x)u?g(null):m();else{const I=u?0:r,w=I*4;let F=_.clippingState||null;p.value=F,F=g(C,S,w,E);for(let k=0;k!==w;++k)F[k]=i[k];_.clippingState=F,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,S,E,C){const R=v!==null?v.length:0;let x=null;if(R!==0){if(x=p.value,C!==!0||x===null){const _=E+R*4,I=S.matrixWorldInverse;d.getNormalMatrix(I),(x===null||x.length<_)&&(x=new Float32Array(_));for(let w=0,F=E;w!==R;++w,F+=4)h.copy(v[w]).applyMatrix4(I,d),h.normal.toArray(x,F),x[F+3]=h.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,x}}function RT(o){let e=new WeakMap;function i(h,d){return d===Ch?h.mapping=Ts:d===wh&&(h.mapping=bs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ch||d===wh)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new Iy(p.height);return m.fromEquirectangularTexture(o,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class P0 extends Vh{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const xs=4,C_=[.125,.215,.35,.446,.526,.582],pr=20,mh=new P0,w_=new Ee;let gh=null,_h=0,vh=0,xh=!1;const hr=(1+Math.sqrt(5))/2,_s=1/hr,D_=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,hr,_s),new X(0,hr,-_s),new X(_s,0,hr),new X(-_s,0,hr),new X(hr,_s,0),new X(-hr,_s,0)];class U_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gh,_h,vh),this._renderer.xr.enabled=xh,e.scissorTest=!1,vc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ts||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:di,minFilter:di,generateMipmaps:!1,type:Tc,format:Ai,colorSpace:Ga,depthBuffer:!1},l=L_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=L_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CT(u)),this._blurMaterial=wT(u,e,i)}return l}_compileMaterial(e){const i=new dn(this._lodPlanes[0],e);this._renderer.compile(i,mh)}_sceneToCubeUV(e,i,r,l){const d=new ii(90,1,i,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,S=g.toneMapping;g.getClearColor(w_),g.toneMapping=za,g.autoClear=!1;const E=new w0({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),C=new dn(new Vo,E);let R=!1;const x=e.background;x?x.isColor&&(E.color.copy(x),e.background=null,R=!0):(E.color.copy(w_),R=!0);for(let _=0;_<6;_++){const I=_%3;I===0?(d.up.set(0,p[_],0),d.lookAt(m[_],0,0)):I===1?(d.up.set(0,0,p[_]),d.lookAt(0,m[_],0)):(d.up.set(0,p[_],0),d.lookAt(0,0,m[_]));const w=this._cubeSize;vc(l,I*w,_>2?w:0,w,w),g.setRenderTarget(l),R&&g.render(C,d),g.render(e,d)}C.geometry.dispose(),C.material.dispose(),g.toneMapping=S,g.autoClear=v,e.background=x}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ts||e.mapping===bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=O_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new dn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;vc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,mh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=D_[(l-1)%D_.length];this._blur(e,l-1,l,u,h)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new dn(this._lodPlanes[l],m),S=m.uniforms,E=this._sizeLods[r]-1,C=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*pr-1),R=u/C,x=isFinite(u)?1+Math.floor(g*R):pr;x>pr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${pr}`);const _=[];let I=0;for(let P=0;P<pr;++P){const it=P/R,N=Math.exp(-it*it/2);_.push(N),P===0?I+=N:P<x&&(I+=2*N)}for(let P=0;P<_.length;P++)_[P]=_[P]/I;S.envMap.value=e.texture,S.samples.value=x,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:w}=this;S.dTheta.value=C,S.mipInt.value=w-r;const F=this._sizeLods[l],k=3*F*(l>w-xs?l-w+xs:0),H=4*(this._cubeSize-F);vc(i,k,H,3*F,2*F),p.setRenderTarget(i),p.render(v,mh)}}function CT(o){const e=[],i=[],r=[];let l=o;const u=o-xs+1+C_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-xs?p=C_[h-o+xs-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,v=1+m,S=[g,g,v,g,v,v,g,g,v,v,g,v],E=6,C=6,R=3,x=2,_=1,I=new Float32Array(R*C*E),w=new Float32Array(x*C*E),F=new Float32Array(_*C*E);for(let H=0;H<E;H++){const P=H%3*2/3-1,it=H>2?0:-1,N=[P,it,0,P+2/3,it,0,P+2/3,it+1,0,P,it,0,P+2/3,it+1,0,P,it+1,0];I.set(N,R*C*H),w.set(S,x*C*H);const A=[H,H,H,H,H,H];F.set(A,_*C*H)}const k=new Qi;k.setAttribute("position",new Ri(I,R)),k.setAttribute("uv",new Ri(w,x)),k.setAttribute("faceIndex",new Ri(F,_)),e.push(k),l>xs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function L_(o,e,i){const r=new _r(o,e,i);return r.texture.mapping=Uc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function wT(o,e,i){const r=new Float32Array(pr),l=new X(0,1,0);return new Ha({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function N_(){return new Ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function O_(){return new Ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function Xh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Ch||p===wh,g=p===Ts||p===bs;if(m||g){let v=e.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new U_(o)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const E=d.image;return m&&E&&E.height>0||g&&E&&l(E)?(i===null&&(i=new U_(o)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function UT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function LT(o,e,i,r){const l={},u=new WeakMap;function h(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const C in S.attributes)e.remove(S.attributes[C]);for(const C in S.morphAttributes){const R=S.morphAttributes[C];for(let x=0,_=R.length;x<_;x++)e.remove(R[x])}S.removeEventListener("dispose",h),delete l[S.id];const E=u.get(S);E&&(e.remove(E),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function p(v){const S=v.attributes;for(const C in S)e.update(S[C],o.ARRAY_BUFFER);const E=v.morphAttributes;for(const C in E){const R=E[C];for(let x=0,_=R.length;x<_;x++)e.update(R[x],o.ARRAY_BUFFER)}}function m(v){const S=[],E=v.index,C=v.attributes.position;let R=0;if(E!==null){const I=E.array;R=E.version;for(let w=0,F=I.length;w<F;w+=3){const k=I[w+0],H=I[w+1],P=I[w+2];S.push(k,H,H,P,P,k)}}else if(C!==void 0){const I=C.array;R=C.version;for(let w=0,F=I.length/3-1;w<F;w+=3){const k=w+0,H=w+1,P=w+2;S.push(k,H,H,P,P,k)}}else return;const x=new(E0(S)?U0:D0)(S,1);x.version=R;const _=u.get(v);_&&e.remove(_),u.set(v,x)}function g(v){const S=u.get(v);if(S){const E=v.index;E!==null&&S.version<E.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function NT(o,e,i){let r;function l(v){r=v}let u,h;function d(v){u=v.type,h=v.bytesPerElement}function p(v,S){o.drawElements(r,S,u,v*h),i.update(S,r,1)}function m(v,S,E){E!==0&&(o.drawElementsInstanced(r,S,u,v*h,E),i.update(S,r,E))}function g(v,S,E){if(E===0)return;const C=e.get("WEBGL_multi_draw");if(C===null)for(let R=0;R<E;R++)this.render(v[R]/h,S[R]);else{C.multiDrawElementsWEBGL(r,S,0,u,v,0,E);let R=0;for(let x=0;x<E;x++)R+=S[x];i.update(R,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g}function OT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function PT(o,e,i){const r=new WeakMap,l=new pn;function u(h,d,p){const m=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let S=r.get(d);if(S===void 0||S.count!==v){let A=function(){it.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var E=A;S!==void 0&&S.texture.dispose();const C=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let F=0;C===!0&&(F=1),R===!0&&(F=2),x===!0&&(F=3);let k=d.attributes.position.count*F,H=1;k>e.maxTextureSize&&(H=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const P=new Float32Array(k*H*4*v),it=new b0(P,k,H,v);it.type=Na,it.needsUpdate=!0;const N=F*4;for(let Q=0;Q<v;Q++){const st=_[Q],V=I[Q],mt=w[Q],dt=k*H*4*Q;for(let B=0;B<st.count;B++){const $=B*N;C===!0&&(l.fromBufferAttribute(st,B),P[dt+$+0]=l.x,P[dt+$+1]=l.y,P[dt+$+2]=l.z,P[dt+$+3]=0),R===!0&&(l.fromBufferAttribute(V,B),P[dt+$+4]=l.x,P[dt+$+5]=l.y,P[dt+$+6]=l.z,P[dt+$+7]=0),x===!0&&(l.fromBufferAttribute(mt,B),P[dt+$+8]=l.x,P[dt+$+9]=l.y,P[dt+$+10]=l.z,P[dt+$+11]=mt.itemSize===4?l.w:1)}}S={count:v,texture:it,size:new ne(k,H)},r.set(d,S),d.addEventListener("dispose",A)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let C=0;for(let x=0;x<m.length;x++)C+=m[x];const R=d.morphTargetsRelative?1:1-C;p.getUniforms().setValue(o,"morphTargetBaseInfluence",R),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function zT(o,e,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,v=e.get(p,g);if(l.get(v)!==m&&(e.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return v}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:h}}class z0 extends Pn{constructor(e,i,r,l,u,h,d,p,m,g){if(g=g!==void 0?g:ys,g!==ys&&g!==Bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===ys&&(r=As),r===void 0&&g===Bo&&(r=Fo),super(null,l,u,h,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:ai,this.minFilter=p!==void 0?p:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const I0=new Pn,B0=new z0(1,1);B0.compareFunction=M0;const F0=new b0,H0=new yy,G0=new N0,P_=[],z_=[],I_=new Float32Array(16),B_=new Float32Array(9),F_=new Float32Array(4);function ws(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=P_[l];if(u===void 0&&(u=new Float32Array(l),P_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function on(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function ln(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Oc(o,e){let i=z_[e];i===void 0&&(i=new Int32Array(e),z_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function IT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function BT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2fv(this.addr,e),ln(i,e)}}function FT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(on(i,e))return;o.uniform3fv(this.addr,e),ln(i,e)}}function HT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4fv(this.addr,e),ln(i,e)}}function GT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;F_.set(r),o.uniformMatrix2fv(this.addr,!1,F_),ln(i,r)}}function VT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;B_.set(r),o.uniformMatrix3fv(this.addr,!1,B_),ln(i,r)}}function kT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;I_.set(r),o.uniformMatrix4fv(this.addr,!1,I_),ln(i,r)}}function XT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function jT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2iv(this.addr,e),ln(i,e)}}function qT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;o.uniform3iv(this.addr,e),ln(i,e)}}function WT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4iv(this.addr,e),ln(i,e)}}function YT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function ZT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2uiv(this.addr,e),ln(i,e)}}function KT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;o.uniform3uiv(this.addr,e),ln(i,e)}}function QT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4uiv(this.addr,e),ln(i,e)}}function JT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?B0:I0;i.setTexture2D(e||u,l)}function $T(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||H0,l)}function tb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||G0,l)}function eb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||F0,l)}function nb(o){switch(o){case 5126:return IT;case 35664:return BT;case 35665:return FT;case 35666:return HT;case 35674:return GT;case 35675:return VT;case 35676:return kT;case 5124:case 35670:return XT;case 35667:case 35671:return jT;case 35668:case 35672:return qT;case 35669:case 35673:return WT;case 5125:return YT;case 36294:return ZT;case 36295:return KT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return eb}}function ib(o,e){o.uniform1fv(this.addr,e)}function ab(o,e){const i=ws(e,this.size,2);o.uniform2fv(this.addr,i)}function rb(o,e){const i=ws(e,this.size,3);o.uniform3fv(this.addr,i)}function sb(o,e){const i=ws(e,this.size,4);o.uniform4fv(this.addr,i)}function ob(o,e){const i=ws(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function lb(o,e){const i=ws(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function cb(o,e){const i=ws(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function ub(o,e){o.uniform1iv(this.addr,e)}function fb(o,e){o.uniform2iv(this.addr,e)}function hb(o,e){o.uniform3iv(this.addr,e)}function db(o,e){o.uniform4iv(this.addr,e)}function pb(o,e){o.uniform1uiv(this.addr,e)}function mb(o,e){o.uniform2uiv(this.addr,e)}function gb(o,e){o.uniform3uiv(this.addr,e)}function _b(o,e){o.uniform4uiv(this.addr,e)}function vb(o,e,i){const r=this.cache,l=e.length,u=Oc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||I0,u[h])}function xb(o,e,i){const r=this.cache,l=e.length,u=Oc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||H0,u[h])}function Sb(o,e,i){const r=this.cache,l=e.length,u=Oc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||G0,u[h])}function yb(o,e,i){const r=this.cache,l=e.length,u=Oc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||F0,u[h])}function Mb(o){switch(o){case 5126:return ib;case 35664:return ab;case 35665:return rb;case 35666:return sb;case 35674:return ob;case 35675:return lb;case 35676:return cb;case 5124:case 35670:return ub;case 35667:case 35671:return fb;case 35668:case 35672:return hb;case 35669:case 35673:return db;case 5125:return pb;case 36294:return mb;case 36295:return gb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return yb}}class Eb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=nb(i.type)}}class Tb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Mb(i.type)}}class bb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const Sh=/(\w+)(\])?(\[|\.)?/g;function H_(o,e){o.seq.push(e),o.map[e.id]=e}function Ab(o,e,i){const r=o.name,l=r.length;for(Sh.lastIndex=0;;){const u=Sh.exec(r),h=Sh.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){H_(i,m===void 0?new Eb(d,o,e):new Tb(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new bb(d),H_(i,v)),i=v}}}class Mc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);Ab(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function G_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Rb=37297;let Cb=0;function wb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}function Db(o){const e=Le.getPrimaries(Le.workingColorSpace),i=Le.getPrimaries(o);let r;switch(e===i?r="":e===Rc&&i===Ac?r="LinearDisplayP3ToLinearSRGB":e===Ac&&i===Rc&&(r="LinearSRGBToLinearDisplayP3"),o){case Ga:case Lc:return[r,"LinearTransferOETF"];case Ei:case Hh:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function V_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+wb(o.getShaderSource(e),h)}else return l}function Ub(o,e){const i=Db(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function Lb(o,e){let i;switch(e){case BS:i="Linear";break;case FS:i="Reinhard";break;case HS:i="OptimizedCineon";break;case GS:i="ACESFilmic";break;case kS:i="AgX";break;case XS:i="Neutral";break;case VS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function Nb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function Ob(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Pb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Po(o){return o!==""}function k_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function X_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(o){return o.replace(zb,Bb)}const Ib=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Bb(o,e){let i=fe[e];if(i===void 0){const r=Ib.get(e);if(r!==void 0)i=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Nh(i)}const Fb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function j_(o){return o.replace(Fb,Hb)}function Hb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function q_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===u0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===uS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function Vb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ts:case bs:e="ENVMAP_TYPE_CUBE";break;case Uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function Xb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case f0:e="ENVMAP_BLENDING_MULTIPLY";break;case zS:e="ENVMAP_BLENDING_MIX";break;case IS:e="ENVMAP_BLENDING_ADD";break}return e}function jb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function qb(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=Gb(i),m=Vb(i),g=kb(i),v=Xb(i),S=jb(i),E=Nb(i),C=Ob(u),R=l.createProgram();let x,_,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(Po).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(Po).join(`
`),_.length>0&&(_+=`
`)):(x=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),_=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==za?"#define TONE_MAPPING":"",i.toneMapping!==za?fe.tonemapping_pars_fragment:"",i.toneMapping!==za?Lb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,Ub("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Po).join(`
`)),h=Nh(h),h=k_(h,i),h=X_(h,i),d=Nh(d),d=k_(d,i),d=X_(d,i),h=j_(h),d=j_(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,x=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",i.glslVersion===l_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===l_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=I+x+h,F=I+_+d,k=G_(l,l.VERTEX_SHADER,w),H=G_(l,l.FRAGMENT_SHADER,F);l.attachShader(R,k),l.attachShader(R,H),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function P(Q){if(o.debug.checkShaderErrors){const st=l.getProgramInfoLog(R).trim(),V=l.getShaderInfoLog(k).trim(),mt=l.getShaderInfoLog(H).trim();let dt=!0,B=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(dt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,k,H);else{const $=V_(l,k,"vertex"),j=V_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+Q.name+`
Material Type: `+Q.type+`

Program Info Log: `+st+`
`+$+`
`+j)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(V===""||mt==="")&&(B=!1);B&&(Q.diagnostics={runnable:dt,programLog:st,vertexShader:{log:V,prefix:x},fragmentShader:{log:mt,prefix:_}})}l.deleteShader(k),l.deleteShader(H),it=new Mc(l,R),N=Pb(l,R)}let it;this.getUniforms=function(){return it===void 0&&P(this),it};let N;this.getAttributes=function(){return N===void 0&&P(this),N};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(R,Rb)),A},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Cb++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=k,this.fragmentShader=H,this}let Wb=0;class Yb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Zb(e),i.set(e,r)),r}}class Zb{constructor(e){this.id=Wb++,this.code=e,this.usedTimes=0}}function Kb(o,e,i,r,l,u,h){const d=new R0,p=new Yb,m=new Set,g=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let E=l.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(N){return m.add(N),N===0?"uv":`uv${N}`}function x(N,A,Q,st,V){const mt=st.fog,dt=V.geometry,B=N.isMeshStandardMaterial?st.environment:null,$=(N.isMeshStandardMaterial?i:e).get(N.envMap||B),j=$&&$.mapping===Uc?$.image.height:null,yt=C[N.type];N.precision!==null&&(E=l.getMaxPrecision(N.precision),E!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",E,"instead."));const L=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,tt=L!==void 0?L.length:0;let Tt=0;dt.morphAttributes.position!==void 0&&(Tt=1),dt.morphAttributes.normal!==void 0&&(Tt=2),dt.morphAttributes.color!==void 0&&(Tt=3);let bt,Y,_t,Et;if(yt){const Xe=Ti[yt];bt=Xe.vertexShader,Y=Xe.fragmentShader}else bt=N.vertexShader,Y=N.fragmentShader,p.update(N),_t=p.getVertexShaderID(N),Et=p.getFragmentShaderID(N);const wt=o.getRenderTarget(),Ft=V.isInstancedMesh===!0,jt=V.isBatchedMesh===!0,oe=!!N.map,et=!!N.matcap,Jt=!!$,qt=!!N.aoMap,be=!!N.lightMap,Wt=!!N.bumpMap,Ut=!!N.normalMap,U=!!N.displacementMap,T=!!N.emissiveMap,W=!!N.metalnessMap,lt=!!N.roughnessMap,K=N.anisotropy>0,ut=N.clearcoat>0,At=N.iridescence>0,pt=N.sheen>0,Rt=N.transmission>0,Dt=K&&!!N.anisotropyMap,St=ut&&!!N.clearcoatMap,Ct=ut&&!!N.clearcoatNormalMap,Pt=ut&&!!N.clearcoatRoughnessMap,zt=At&&!!N.iridescenceMap,It=At&&!!N.iridescenceThicknessMap,kt=pt&&!!N.sheenColorMap,Zt=pt&&!!N.sheenRoughnessMap,le=!!N.specularMap,ie=!!N.specularColorMap,pe=!!N.specularIntensityMap,Vt=Rt&&!!N.transmissionMap,M=Rt&&!!N.thicknessMap,ct=!!N.gradientMap,vt=!!N.alphaMap,Lt=N.alphaTest>0,Bt=!!N.alphaHash,ge=!!N.extensions;let ue=za;N.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(ue=o.toneMapping);const Ne={shaderID:yt,shaderType:N.type,shaderName:N.name,vertexShader:bt,fragmentShader:Y,defines:N.defines,customVertexShaderID:_t,customFragmentShaderID:Et,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:E,batching:jt,instancing:Ft,instancingColor:Ft&&V.instanceColor!==null,instancingMorph:Ft&&V.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:wt===null?o.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Ga,alphaToCoverage:!!N.alphaToCoverage,map:oe,matcap:et,envMap:Jt,envMapMode:Jt&&$.mapping,envMapCubeUVHeight:j,aoMap:qt,lightMap:be,bumpMap:Wt,normalMap:Ut,displacementMap:S&&U,emissiveMap:T,normalMapObjectSpace:Ut&&N.normalMapType===ay,normalMapTangentSpace:Ut&&N.normalMapType===y0,metalnessMap:W,roughnessMap:lt,anisotropy:K,anisotropyMap:Dt,clearcoat:ut,clearcoatMap:St,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Pt,iridescence:At,iridescenceMap:zt,iridescenceThicknessMap:It,sheen:pt,sheenColorMap:kt,sheenRoughnessMap:Zt,specularMap:le,specularColorMap:ie,specularIntensityMap:pe,transmission:Rt,transmissionMap:Vt,thicknessMap:M,gradientMap:ct,opaque:N.transparent===!1&&N.blending===Ss&&N.alphaToCoverage===!1,alphaMap:vt,alphaTest:Lt,alphaHash:Bt,combine:N.combine,mapUv:oe&&R(N.map.channel),aoMapUv:qt&&R(N.aoMap.channel),lightMapUv:be&&R(N.lightMap.channel),bumpMapUv:Wt&&R(N.bumpMap.channel),normalMapUv:Ut&&R(N.normalMap.channel),displacementMapUv:U&&R(N.displacementMap.channel),emissiveMapUv:T&&R(N.emissiveMap.channel),metalnessMapUv:W&&R(N.metalnessMap.channel),roughnessMapUv:lt&&R(N.roughnessMap.channel),anisotropyMapUv:Dt&&R(N.anisotropyMap.channel),clearcoatMapUv:St&&R(N.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&R(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&R(N.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&R(N.iridescenceMap.channel),iridescenceThicknessMapUv:It&&R(N.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&R(N.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&R(N.sheenRoughnessMap.channel),specularMapUv:le&&R(N.specularMap.channel),specularColorMapUv:ie&&R(N.specularColorMap.channel),specularIntensityMapUv:pe&&R(N.specularIntensityMap.channel),transmissionMapUv:Vt&&R(N.transmissionMap.channel),thicknessMapUv:M&&R(N.thicknessMap.channel),alphaMapUv:vt&&R(N.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(Ut||K),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!dt.attributes.uv&&(oe||vt),fog:!!mt,useFog:N.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:V.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Tt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:N.dithering,shadowMapEnabled:o.shadowMap.enabled&&Q.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,useLegacyLights:o._useLegacyLights,decodeVideoTexture:oe&&N.map.isVideoTexture===!0&&Le.getTransfer(N.map.colorSpace)===Be,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===Yi,flipSided:N.side===On,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:ge&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ge&&N.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Ne.vertexUv1s=m.has(1),Ne.vertexUv2s=m.has(2),Ne.vertexUv3s=m.has(3),m.clear(),Ne}function _(N){const A=[];if(N.shaderID?A.push(N.shaderID):(A.push(N.customVertexShaderID),A.push(N.customFragmentShaderID)),N.defines!==void 0)for(const Q in N.defines)A.push(Q),A.push(N.defines[Q]);return N.isRawShaderMaterial===!1&&(I(A,N),w(A,N),A.push(o.outputColorSpace)),A.push(N.customProgramCacheKey),A.join()}function I(N,A){N.push(A.precision),N.push(A.outputColorSpace),N.push(A.envMapMode),N.push(A.envMapCubeUVHeight),N.push(A.mapUv),N.push(A.alphaMapUv),N.push(A.lightMapUv),N.push(A.aoMapUv),N.push(A.bumpMapUv),N.push(A.normalMapUv),N.push(A.displacementMapUv),N.push(A.emissiveMapUv),N.push(A.metalnessMapUv),N.push(A.roughnessMapUv),N.push(A.anisotropyMapUv),N.push(A.clearcoatMapUv),N.push(A.clearcoatNormalMapUv),N.push(A.clearcoatRoughnessMapUv),N.push(A.iridescenceMapUv),N.push(A.iridescenceThicknessMapUv),N.push(A.sheenColorMapUv),N.push(A.sheenRoughnessMapUv),N.push(A.specularMapUv),N.push(A.specularColorMapUv),N.push(A.specularIntensityMapUv),N.push(A.transmissionMapUv),N.push(A.thicknessMapUv),N.push(A.combine),N.push(A.fogExp2),N.push(A.sizeAttenuation),N.push(A.morphTargetsCount),N.push(A.morphAttributeCount),N.push(A.numDirLights),N.push(A.numPointLights),N.push(A.numSpotLights),N.push(A.numSpotLightMaps),N.push(A.numHemiLights),N.push(A.numRectAreaLights),N.push(A.numDirLightShadows),N.push(A.numPointLightShadows),N.push(A.numSpotLightShadows),N.push(A.numSpotLightShadowsWithMaps),N.push(A.numLightProbes),N.push(A.shadowMapType),N.push(A.toneMapping),N.push(A.numClippingPlanes),N.push(A.numClipIntersection),N.push(A.depthPacking)}function w(N,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),N.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.skinning&&d.enable(4),A.morphTargets&&d.enable(5),A.morphNormals&&d.enable(6),A.morphColors&&d.enable(7),A.premultipliedAlpha&&d.enable(8),A.shadowMapEnabled&&d.enable(9),A.useLegacyLights&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.alphaToCoverage&&d.enable(20),N.push(d.mask)}function F(N){const A=C[N.type];let Q;if(A){const st=Ti[A];Q=Ny.clone(st.uniforms)}else Q=N.uniforms;return Q}function k(N,A){let Q;for(let st=0,V=g.length;st<V;st++){const mt=g[st];if(mt.cacheKey===A){Q=mt,++Q.usedTimes;break}}return Q===void 0&&(Q=new qb(o,A,N,u),g.push(Q)),Q}function H(N){if(--N.usedTimes===0){const A=g.indexOf(N);g[A]=g[g.length-1],g.pop(),N.destroy()}}function P(N){p.remove(N)}function it(){p.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:F,acquireProgram:k,releaseProgram:H,releaseShaderCache:P,programs:g,dispose:it}}function Qb(){let o=new WeakMap;function e(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function i(u){o.delete(u)}function r(u,h,d){o.get(u)[h]=d}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function Jb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function W_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Y_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(v,S,E,C,R,x){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:S,material:E,groupOrder:C,renderOrder:v.renderOrder,z:R,group:x},o[e]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=E,_.groupOrder=C,_.renderOrder=v.renderOrder,_.z=R,_.group=x),e++,_}function d(v,S,E,C,R,x){const _=h(v,S,E,C,R,x);E.transmission>0?r.push(_):E.transparent===!0?l.push(_):i.push(_)}function p(v,S,E,C,R,x){const _=h(v,S,E,C,R,x);E.transmission>0?r.unshift(_):E.transparent===!0?l.unshift(_):i.unshift(_)}function m(v,S){i.length>1&&i.sort(v||Jb),r.length>1&&r.sort(S||W_),l.length>1&&l.sort(S||W_)}function g(){for(let v=e,S=o.length;v<S;v++){const E=o[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:p,finish:g,sort:m}}function $b(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new Y_,o.set(r,[h])):l>=u.length?(h=new Y_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function tA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new X,color:new Ee};break;case"SpotLight":i={position:new X,direction:new X,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new X,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":i={direction:new X,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":i={color:new Ee,position:new X,halfWidth:new X,halfHeight:new X};break}return o[e.id]=i,i}}}function eA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let nA=0;function iA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function aA(o){const e=new tA,i=eA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new X);const l=new X,u=new tn,h=new tn;function d(m,g){let v=0,S=0,E=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let C=0,R=0,x=0,_=0,I=0,w=0,F=0,k=0,H=0,P=0,it=0;m.sort(iA);const N=g===!0?Math.PI:1;for(let Q=0,st=m.length;Q<st;Q++){const V=m[Q],mt=V.color,dt=V.intensity,B=V.distance,$=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=mt.r*dt*N,S+=mt.g*dt*N,E+=mt.b*dt*N;else if(V.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(V.sh.coefficients[j],dt);it++}else if(V.isDirectionalLight){const j=e.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity*N),V.castShadow){const yt=V.shadow,L=i.get(V);L.shadowBias=yt.bias,L.shadowNormalBias=yt.normalBias,L.shadowRadius=yt.radius,L.shadowMapSize=yt.mapSize,r.directionalShadow[C]=L,r.directionalShadowMap[C]=$,r.directionalShadowMatrix[C]=V.shadow.matrix,w++}r.directional[C]=j,C++}else if(V.isSpotLight){const j=e.get(V);j.position.setFromMatrixPosition(V.matrixWorld),j.color.copy(mt).multiplyScalar(dt*N),j.distance=B,j.coneCos=Math.cos(V.angle),j.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),j.decay=V.decay,r.spot[x]=j;const yt=V.shadow;if(V.map&&(r.spotLightMap[H]=V.map,H++,yt.updateMatrices(V),V.castShadow&&P++),r.spotLightMatrix[x]=yt.matrix,V.castShadow){const L=i.get(V);L.shadowBias=yt.bias,L.shadowNormalBias=yt.normalBias,L.shadowRadius=yt.radius,L.shadowMapSize=yt.mapSize,r.spotShadow[x]=L,r.spotShadowMap[x]=$,k++}x++}else if(V.isRectAreaLight){const j=e.get(V);j.color.copy(mt).multiplyScalar(dt),j.halfWidth.set(V.width*.5,0,0),j.halfHeight.set(0,V.height*.5,0),r.rectArea[_]=j,_++}else if(V.isPointLight){const j=e.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity*N),j.distance=V.distance,j.decay=V.decay,V.castShadow){const yt=V.shadow,L=i.get(V);L.shadowBias=yt.bias,L.shadowNormalBias=yt.normalBias,L.shadowRadius=yt.radius,L.shadowMapSize=yt.mapSize,L.shadowCameraNear=yt.camera.near,L.shadowCameraFar=yt.camera.far,r.pointShadow[R]=L,r.pointShadowMap[R]=$,r.pointShadowMatrix[R]=V.shadow.matrix,F++}r.point[R]=j,R++}else if(V.isHemisphereLight){const j=e.get(V);j.skyColor.copy(V.color).multiplyScalar(dt*N),j.groundColor.copy(V.groundColor).multiplyScalar(dt*N),r.hemi[I]=j,I++}}_>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=E;const A=r.hash;(A.directionalLength!==C||A.pointLength!==R||A.spotLength!==x||A.rectAreaLength!==_||A.hemiLength!==I||A.numDirectionalShadows!==w||A.numPointShadows!==F||A.numSpotShadows!==k||A.numSpotMaps!==H||A.numLightProbes!==it)&&(r.directional.length=C,r.spot.length=x,r.rectArea.length=_,r.point.length=R,r.hemi.length=I,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=F,r.pointShadowMap.length=F,r.spotShadow.length=k,r.spotShadowMap.length=k,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=F,r.spotLightMatrix.length=k+H-P,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=it,A.directionalLength=C,A.pointLength=R,A.spotLength=x,A.rectAreaLength=_,A.hemiLength=I,A.numDirectionalShadows=w,A.numPointShadows=F,A.numSpotShadows=k,A.numSpotMaps=H,A.numLightProbes=it,r.version=nA++)}function p(m,g){let v=0,S=0,E=0,C=0,R=0;const x=g.matrixWorldInverse;for(let _=0,I=m.length;_<I;_++){const w=m[_];if(w.isDirectionalLight){const F=r.directional[v];F.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(x),v++}else if(w.isSpotLight){const F=r.spot[E];F.position.setFromMatrixPosition(w.matrixWorld),F.position.applyMatrix4(x),F.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(x),E++}else if(w.isRectAreaLight){const F=r.rectArea[C];F.position.setFromMatrixPosition(w.matrixWorld),F.position.applyMatrix4(x),h.identity(),u.copy(w.matrixWorld),u.premultiply(x),h.extractRotation(u),F.halfWidth.set(w.width*.5,0,0),F.halfHeight.set(0,w.height*.5,0),F.halfWidth.applyMatrix4(h),F.halfHeight.applyMatrix4(h),C++}else if(w.isPointLight){const F=r.point[S];F.position.setFromMatrixPosition(w.matrixWorld),F.position.applyMatrix4(x),S++}else if(w.isHemisphereLight){const F=r.hemi[R];F.direction.setFromMatrixPosition(w.matrixWorld),F.direction.transformDirection(x),R++}}}return{setup:d,setupView:p,state:r}}function Z_(o){const e=new aA(o),i=[],r=[];function l(){i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(g){e.setup(i,g)}function p(g){e.setupView(i,g)}return{init:l,state:{lightsArray:i,shadowsArray:r,lights:e,transmissionRenderTarget:null},setupLights:d,setupLightsView:p,pushLight:u,pushShadow:h}}function rA(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new Z_(o),e.set(l,[d])):u>=h.length?(d=new Z_(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}class sA extends Go{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ny,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oA extends Go{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uA(o,e,i){let r=new kh;const l=new ne,u=new ne,h=new pn,d=new sA({depthPacking:iy}),p=new oA,m={},g=i.maxTextureSize,v={[Fa]:On,[On]:Fa,[Yi]:Yi},S=new Ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:lA,fragmentShader:cA}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const C=new Qi;C.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new dn(C,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=u0;let _=this.type;this.render=function(H,P,it){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||H.length===0)return;const N=o.getRenderTarget(),A=o.getActiveCubeFace(),Q=o.getActiveMipmapLevel(),st=o.state;st.setBlending(Pa),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const V=_!==Wi&&this.type===Wi,mt=_===Wi&&this.type!==Wi;for(let dt=0,B=H.length;dt<B;dt++){const $=H[dt],j=$.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const yt=j.getFrameExtents();if(l.multiply(yt),u.copy(j.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/yt.x),l.x=u.x*yt.x,j.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/yt.y),l.y=u.y*yt.y,j.mapSize.y=u.y)),j.map===null||V===!0||mt===!0){const tt=this.type!==Wi?{minFilter:ai,magFilter:ai}:{};j.map!==null&&j.map.dispose(),j.map=new _r(l.x,l.y,tt),j.map.texture.name=$.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const L=j.getViewportCount();for(let tt=0;tt<L;tt++){const Tt=j.getViewport(tt);h.set(u.x*Tt.x,u.y*Tt.y,u.x*Tt.z,u.y*Tt.w),st.viewport(h),j.updateMatrices($,tt),r=j.getFrustum(),F(P,it,j.camera,$,this.type)}j.isPointLightShadow!==!0&&this.type===Wi&&I(j,it),j.needsUpdate=!1}_=this.type,x.needsUpdate=!1,o.setRenderTarget(N,A,Q)};function I(H,P){const it=e.update(R);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new _r(l.x,l.y)),S.uniforms.shadow_pass.value=H.map.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(P,null,it,S,R,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(P,null,it,E,R,null)}function w(H,P,it,N){let A=null;const Q=it.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(Q!==void 0)A=Q;else if(A=it.isPointLight===!0?p:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const st=A.uuid,V=P.uuid;let mt=m[st];mt===void 0&&(mt={},m[st]=mt);let dt=mt[V];dt===void 0&&(dt=A.clone(),mt[V]=dt,P.addEventListener("dispose",k)),A=dt}if(A.visible=P.visible,A.wireframe=P.wireframe,N===Wi?A.side=P.shadowSide!==null?P.shadowSide:P.side:A.side=P.shadowSide!==null?P.shadowSide:v[P.side],A.alphaMap=P.alphaMap,A.alphaTest=P.alphaTest,A.map=P.map,A.clipShadows=P.clipShadows,A.clippingPlanes=P.clippingPlanes,A.clipIntersection=P.clipIntersection,A.displacementMap=P.displacementMap,A.displacementScale=P.displacementScale,A.displacementBias=P.displacementBias,A.wireframeLinewidth=P.wireframeLinewidth,A.linewidth=P.linewidth,it.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const st=o.properties.get(A);st.light=it}return A}function F(H,P,it,N,A){if(H.visible===!1)return;if(H.layers.test(P.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&A===Wi)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,H.matrixWorld);const V=e.update(H),mt=H.material;if(Array.isArray(mt)){const dt=V.groups;for(let B=0,$=dt.length;B<$;B++){const j=dt[B],yt=mt[j.materialIndex];if(yt&&yt.visible){const L=w(H,yt,N,A);H.onBeforeShadow(o,H,P,it,V,L,j),o.renderBufferDirect(it,null,V,L,H,j),H.onAfterShadow(o,H,P,it,V,L,j)}}}else if(mt.visible){const dt=w(H,mt,N,A);H.onBeforeShadow(o,H,P,it,V,dt,null),o.renderBufferDirect(it,null,V,dt,H,null),H.onAfterShadow(o,H,P,it,V,dt,null)}}const st=H.children;for(let V=0,mt=st.length;V<mt;V++)F(st[V],P,it,N,A)}function k(H){H.target.removeEventListener("dispose",k);for(const it in m){const N=m[it],A=H.target.uuid;A in N&&(N[A].dispose(),delete N[A])}}}function fA(o){function e(){let M=!1;const ct=new pn;let vt=null;const Lt=new pn(0,0,0,0);return{setMask:function(Bt){vt!==Bt&&!M&&(o.colorMask(Bt,Bt,Bt,Bt),vt=Bt)},setLocked:function(Bt){M=Bt},setClear:function(Bt,ge,ue,Ne,Xe){Xe===!0&&(Bt*=Ne,ge*=Ne,ue*=Ne),ct.set(Bt,ge,ue,Ne),Lt.equals(ct)===!1&&(o.clearColor(Bt,ge,ue,Ne),Lt.copy(ct))},reset:function(){M=!1,vt=null,Lt.set(-1,0,0,0)}}}function i(){let M=!1,ct=null,vt=null,Lt=null;return{setTest:function(Bt){Bt?Et(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(Bt){ct!==Bt&&!M&&(o.depthMask(Bt),ct=Bt)},setFunc:function(Bt){if(vt!==Bt){switch(Bt){case wS:o.depthFunc(o.NEVER);break;case DS:o.depthFunc(o.ALWAYS);break;case US:o.depthFunc(o.LESS);break;case Ec:o.depthFunc(o.LEQUAL);break;case LS:o.depthFunc(o.EQUAL);break;case NS:o.depthFunc(o.GEQUAL);break;case OS:o.depthFunc(o.GREATER);break;case PS:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}vt=Bt}},setLocked:function(Bt){M=Bt},setClear:function(Bt){Lt!==Bt&&(o.clearDepth(Bt),Lt=Bt)},reset:function(){M=!1,ct=null,vt=null,Lt=null}}}function r(){let M=!1,ct=null,vt=null,Lt=null,Bt=null,ge=null,ue=null,Ne=null,Xe=null;return{setTest:function(Se){M||(Se?Et(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(Se){ct!==Se&&!M&&(o.stencilMask(Se),ct=Se)},setFunc:function(Se,He,je){(vt!==Se||Lt!==He||Bt!==je)&&(o.stencilFunc(Se,He,je),vt=Se,Lt=He,Bt=je)},setOp:function(Se,He,je){(ge!==Se||ue!==He||Ne!==je)&&(o.stencilOp(Se,He,je),ge=Se,ue=He,Ne=je)},setLocked:function(Se){M=Se},setClear:function(Se){Xe!==Se&&(o.clearStencil(Se),Xe=Se)},reset:function(){M=!1,ct=null,vt=null,Lt=null,Bt=null,ge=null,ue=null,Ne=null,Xe=null}}}const l=new e,u=new i,h=new r,d=new WeakMap,p=new WeakMap;let m={},g={},v=new WeakMap,S=[],E=null,C=!1,R=null,x=null,_=null,I=null,w=null,F=null,k=null,H=new Ee(0,0,0),P=0,it=!1,N=null,A=null,Q=null,st=null,V=null;const mt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let dt=!1,B=0;const $=o.getParameter(o.VERSION);$.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec($)[1]),dt=B>=1):$.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),dt=B>=2);let j=null,yt={};const L=o.getParameter(o.SCISSOR_BOX),tt=o.getParameter(o.VIEWPORT),Tt=new pn().fromArray(L),bt=new pn().fromArray(tt);function Y(M,ct,vt,Lt){const Bt=new Uint8Array(4),ge=o.createTexture();o.bindTexture(M,ge),o.texParameteri(M,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(M,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ue=0;ue<vt;ue++)M===o.TEXTURE_3D||M===o.TEXTURE_2D_ARRAY?o.texImage3D(ct,0,o.RGBA,1,1,Lt,0,o.RGBA,o.UNSIGNED_BYTE,Bt):o.texImage2D(ct+ue,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Bt);return ge}const _t={};_t[o.TEXTURE_2D]=Y(o.TEXTURE_2D,o.TEXTURE_2D,1),_t[o.TEXTURE_CUBE_MAP]=Y(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[o.TEXTURE_2D_ARRAY]=Y(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),_t[o.TEXTURE_3D]=Y(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Et(o.DEPTH_TEST),u.setFunc(Ec),Wt(!1),Ut(Ug),Et(o.CULL_FACE),qt(Pa);function Et(M){m[M]!==!0&&(o.enable(M),m[M]=!0)}function wt(M){m[M]!==!1&&(o.disable(M),m[M]=!1)}function Ft(M,ct){return g[M]!==ct?(o.bindFramebuffer(M,ct),g[M]=ct,M===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=ct),M===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=ct),!0):!1}function jt(M,ct){let vt=S,Lt=!1;if(M){vt=v.get(ct),vt===void 0&&(vt=[],v.set(ct,vt));const Bt=M.textures;if(vt.length!==Bt.length||vt[0]!==o.COLOR_ATTACHMENT0){for(let ge=0,ue=Bt.length;ge<ue;ge++)vt[ge]=o.COLOR_ATTACHMENT0+ge;vt.length=Bt.length,Lt=!0}}else vt[0]!==o.BACK&&(vt[0]=o.BACK,Lt=!0);Lt&&o.drawBuffers(vt)}function oe(M){return E!==M?(o.useProgram(M),E=M,!0):!1}const et={[dr]:o.FUNC_ADD,[hS]:o.FUNC_SUBTRACT,[dS]:o.FUNC_REVERSE_SUBTRACT};et[pS]=o.MIN,et[mS]=o.MAX;const Jt={[gS]:o.ZERO,[_S]:o.ONE,[vS]:o.SRC_COLOR,[Ah]:o.SRC_ALPHA,[TS]:o.SRC_ALPHA_SATURATE,[MS]:o.DST_COLOR,[SS]:o.DST_ALPHA,[xS]:o.ONE_MINUS_SRC_COLOR,[Rh]:o.ONE_MINUS_SRC_ALPHA,[ES]:o.ONE_MINUS_DST_COLOR,[yS]:o.ONE_MINUS_DST_ALPHA,[bS]:o.CONSTANT_COLOR,[AS]:o.ONE_MINUS_CONSTANT_COLOR,[RS]:o.CONSTANT_ALPHA,[CS]:o.ONE_MINUS_CONSTANT_ALPHA};function qt(M,ct,vt,Lt,Bt,ge,ue,Ne,Xe,Se){if(M===Pa){C===!0&&(wt(o.BLEND),C=!1);return}if(C===!1&&(Et(o.BLEND),C=!0),M!==fS){if(M!==R||Se!==it){if((x!==dr||w!==dr)&&(o.blendEquation(o.FUNC_ADD),x=dr,w=dr),Se)switch(M){case Ss:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Lg:o.blendFunc(o.ONE,o.ONE);break;case Ng:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Og:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case Ss:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Lg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Ng:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Og:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}_=null,I=null,F=null,k=null,H.set(0,0,0),P=0,R=M,it=Se}return}Bt=Bt||ct,ge=ge||vt,ue=ue||Lt,(ct!==x||Bt!==w)&&(o.blendEquationSeparate(et[ct],et[Bt]),x=ct,w=Bt),(vt!==_||Lt!==I||ge!==F||ue!==k)&&(o.blendFuncSeparate(Jt[vt],Jt[Lt],Jt[ge],Jt[ue]),_=vt,I=Lt,F=ge,k=ue),(Ne.equals(H)===!1||Xe!==P)&&(o.blendColor(Ne.r,Ne.g,Ne.b,Xe),H.copy(Ne),P=Xe),R=M,it=!1}function be(M,ct){M.side===Yi?wt(o.CULL_FACE):Et(o.CULL_FACE);let vt=M.side===On;ct&&(vt=!vt),Wt(vt),M.blending===Ss&&M.transparent===!1?qt(Pa):qt(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),u.setFunc(M.depthFunc),u.setTest(M.depthTest),u.setMask(M.depthWrite),l.setMask(M.colorWrite);const Lt=M.stencilWrite;h.setTest(Lt),Lt&&(h.setMask(M.stencilWriteMask),h.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),h.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),T(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?Et(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(M){N!==M&&(M?o.frontFace(o.CW):o.frontFace(o.CCW),N=M)}function Ut(M){M!==lS?(Et(o.CULL_FACE),M!==A&&(M===Ug?o.cullFace(o.BACK):M===cS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),A=M}function U(M){M!==Q&&(dt&&o.lineWidth(M),Q=M)}function T(M,ct,vt){M?(Et(o.POLYGON_OFFSET_FILL),(st!==ct||V!==vt)&&(o.polygonOffset(ct,vt),st=ct,V=vt)):wt(o.POLYGON_OFFSET_FILL)}function W(M){M?Et(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function lt(M){M===void 0&&(M=o.TEXTURE0+mt-1),j!==M&&(o.activeTexture(M),j=M)}function K(M,ct,vt){vt===void 0&&(j===null?vt=o.TEXTURE0+mt-1:vt=j);let Lt=yt[vt];Lt===void 0&&(Lt={type:void 0,texture:void 0},yt[vt]=Lt),(Lt.type!==M||Lt.texture!==ct)&&(j!==vt&&(o.activeTexture(vt),j=vt),o.bindTexture(M,ct||_t[M]),Lt.type=M,Lt.texture=ct)}function ut(){const M=yt[j];M!==void 0&&M.type!==void 0&&(o.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function At(){try{o.compressedTexImage2D.apply(o,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function pt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Rt(){try{o.texSubImage2D.apply(o,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Dt(){try{o.texSubImage3D.apply(o,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function St(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ct(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Pt(){try{o.texStorage2D.apply(o,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function zt(){try{o.texStorage3D.apply(o,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function It(){try{o.texImage2D.apply(o,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function kt(){try{o.texImage3D.apply(o,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Zt(M){Tt.equals(M)===!1&&(o.scissor(M.x,M.y,M.z,M.w),Tt.copy(M))}function le(M){bt.equals(M)===!1&&(o.viewport(M.x,M.y,M.z,M.w),bt.copy(M))}function ie(M,ct){let vt=p.get(ct);vt===void 0&&(vt=new WeakMap,p.set(ct,vt));let Lt=vt.get(M);Lt===void 0&&(Lt=o.getUniformBlockIndex(ct,M.name),vt.set(M,Lt))}function pe(M,ct){const Lt=p.get(ct).get(M);d.get(ct)!==Lt&&(o.uniformBlockBinding(ct,Lt,M.__bindingPointIndex),d.set(ct,Lt))}function Vt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},j=null,yt={},g={},v=new WeakMap,S=[],E=null,C=!1,R=null,x=null,_=null,I=null,w=null,F=null,k=null,H=new Ee(0,0,0),P=0,it=!1,N=null,A=null,Q=null,st=null,V=null,Tt.set(0,0,o.canvas.width,o.canvas.height),bt.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:Et,disable:wt,bindFramebuffer:Ft,drawBuffers:jt,useProgram:oe,setBlending:qt,setMaterial:be,setFlipSided:Wt,setCullFace:Ut,setLineWidth:U,setPolygonOffset:T,setScissorTest:W,activeTexture:lt,bindTexture:K,unbindTexture:ut,compressedTexImage2D:At,compressedTexImage3D:pt,texImage2D:It,texImage3D:kt,updateUBOMapping:ie,uniformBlockBinding:pe,texStorage2D:Pt,texStorage3D:zt,texSubImage2D:Rt,texSubImage3D:Dt,compressedTexSubImage2D:St,compressedTexSubImage3D:Ct,scissor:Zt,viewport:le,reset:Vt}}function hA(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ne,g=new WeakMap;let v;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(U,T){return E?new OffscreenCanvas(U,T):wc("canvas")}function R(U,T,W){let lt=1;const K=Ut(U);if((K.width>W||K.height>W)&&(lt=W/Math.max(K.width,K.height)),lt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ut=Math.floor(lt*K.width),At=Math.floor(lt*K.height);v===void 0&&(v=C(ut,At));const pt=T?C(ut,At):v;return pt.width=ut,pt.height=At,pt.getContext("2d").drawImage(U,0,0,ut,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ut+"x"+At+")."),pt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),U;return U}function x(U){return U.generateMipmaps&&U.minFilter!==ai&&U.minFilter!==di}function _(U){o.generateMipmap(U)}function I(U,T,W,lt,K=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ut=T;if(T===o.RED&&(W===o.FLOAT&&(ut=o.R32F),W===o.HALF_FLOAT&&(ut=o.R16F),W===o.UNSIGNED_BYTE&&(ut=o.R8)),T===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(ut=o.R8UI),W===o.UNSIGNED_SHORT&&(ut=o.R16UI),W===o.UNSIGNED_INT&&(ut=o.R32UI),W===o.BYTE&&(ut=o.R8I),W===o.SHORT&&(ut=o.R16I),W===o.INT&&(ut=o.R32I)),T===o.RG&&(W===o.FLOAT&&(ut=o.RG32F),W===o.HALF_FLOAT&&(ut=o.RG16F),W===o.UNSIGNED_BYTE&&(ut=o.RG8)),T===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(ut=o.RG8UI),W===o.UNSIGNED_SHORT&&(ut=o.RG16UI),W===o.UNSIGNED_INT&&(ut=o.RG32UI),W===o.BYTE&&(ut=o.RG8I),W===o.SHORT&&(ut=o.RG16I),W===o.INT&&(ut=o.RG32I)),T===o.RGB&&W===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),T===o.RGBA){const At=K?bc:Le.getTransfer(lt);W===o.FLOAT&&(ut=o.RGBA32F),W===o.HALF_FLOAT&&(ut=o.RGBA16F),W===o.UNSIGNED_BYTE&&(ut=At===Be?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function w(U,T){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==ai&&U.minFilter!==di?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function F(U){const T=U.target;T.removeEventListener("dispose",F),H(T),T.isVideoTexture&&g.delete(T)}function k(U){const T=U.target;T.removeEventListener("dispose",k),it(T)}function H(U){const T=r.get(U);if(T.__webglInit===void 0)return;const W=U.source,lt=S.get(W);if(lt){const K=lt[T.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(U),Object.keys(lt).length===0&&S.delete(W)}r.remove(U)}function P(U){const T=r.get(U);o.deleteTexture(T.__webglTexture);const W=U.source,lt=S.get(W);delete lt[T.__cacheKey],h.memory.textures--}function it(U){const T=r.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(T.__webglFramebuffer[lt]))for(let K=0;K<T.__webglFramebuffer[lt].length;K++)o.deleteFramebuffer(T.__webglFramebuffer[lt][K]);else o.deleteFramebuffer(T.__webglFramebuffer[lt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[lt])}else{if(Array.isArray(T.__webglFramebuffer))for(let lt=0;lt<T.__webglFramebuffer.length;lt++)o.deleteFramebuffer(T.__webglFramebuffer[lt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let lt=0;lt<T.__webglColorRenderbuffer.length;lt++)T.__webglColorRenderbuffer[lt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[lt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=U.textures;for(let lt=0,K=W.length;lt<K;lt++){const ut=r.get(W[lt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),r.remove(W[lt])}r.remove(U)}let N=0;function A(){N=0}function Q(){const U=N;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),N+=1,U}function st(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function V(U,T){const W=r.get(U);if(U.isVideoTexture&&be(U),U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){const lt=U.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(W,U,T);return}}i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+T)}function mt(U,T){const W=r.get(U);if(U.version>0&&W.__version!==U.version){Tt(W,U,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+T)}function dt(U,T){const W=r.get(U);if(U.version>0&&W.__version!==U.version){Tt(W,U,T);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+T)}function B(U,T){const W=r.get(U);if(U.version>0&&W.__version!==U.version){bt(W,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+T)}const $={[Dh]:o.REPEAT,[mr]:o.CLAMP_TO_EDGE,[Uh]:o.MIRRORED_REPEAT},j={[ai]:o.NEAREST,[jS]:o.NEAREST_MIPMAP_NEAREST,[Ql]:o.NEAREST_MIPMAP_LINEAR,[di]:o.LINEAR,[Xf]:o.LINEAR_MIPMAP_NEAREST,[gr]:o.LINEAR_MIPMAP_LINEAR},yt={[ry]:o.NEVER,[fy]:o.ALWAYS,[sy]:o.LESS,[M0]:o.LEQUAL,[oy]:o.EQUAL,[uy]:o.GEQUAL,[ly]:o.GREATER,[cy]:o.NOTEQUAL};function L(U,T){if(T.type===Na&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===di||T.magFilter===Xf||T.magFilter===Ql||T.magFilter===gr||T.minFilter===di||T.minFilter===Xf||T.minFilter===Ql||T.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,$[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,$[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,$[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,j[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,j[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,yt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ai||T.minFilter!==Ql&&T.minFilter!==gr||T.type===Na&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function tt(U,T){let W=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",F));const lt=T.source;let K=S.get(lt);K===void 0&&(K={},S.set(lt,K));const ut=st(T);if(ut!==U.__cacheKey){K[ut]===void 0&&(K[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,W=!0),K[ut].usedTimes++;const At=K[U.__cacheKey];At!==void 0&&(K[U.__cacheKey].usedTimes--,At.usedTimes===0&&P(T)),U.__cacheKey=ut,U.__webglTexture=K[ut].texture}return W}function Tt(U,T,W){let lt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(lt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(lt=o.TEXTURE_3D);const K=tt(U,T),ut=T.source;i.bindTexture(lt,U.__webglTexture,o.TEXTURE0+W);const At=r.get(ut);if(ut.version!==At.__version||K===!0){i.activeTexture(o.TEXTURE0+W);const pt=Le.getPrimaries(Le.workingColorSpace),Rt=T.colorSpace===La?null:Le.getPrimaries(T.colorSpace),Dt=T.colorSpace===La||pt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let St=R(T.image,!1,l.maxTextureSize);St=Wt(T,St);const Ct=u.convert(T.format,T.colorSpace),Pt=u.convert(T.type);let zt=I(T.internalFormat,Ct,Pt,T.colorSpace,T.isVideoTexture);L(lt,T);let It;const kt=T.mipmaps,Zt=T.isVideoTexture!==!0&&zt!==S0,le=At.__version===void 0||K===!0,ie=ut.dataReady,pe=w(T,St);if(T.isDepthTexture)zt=o.DEPTH_COMPONENT16,T.type===Na?zt=o.DEPTH_COMPONENT32F:T.type===As?zt=o.DEPTH_COMPONENT24:T.type===Fo&&(zt=o.DEPTH24_STENCIL8),le&&(Zt?i.texStorage2D(o.TEXTURE_2D,1,zt,St.width,St.height):i.texImage2D(o.TEXTURE_2D,0,zt,St.width,St.height,0,Ct,Pt,null));else if(T.isDataTexture)if(kt.length>0){Zt&&le&&i.texStorage2D(o.TEXTURE_2D,pe,zt,kt[0].width,kt[0].height);for(let Vt=0,M=kt.length;Vt<M;Vt++)It=kt[Vt],Zt?ie&&i.texSubImage2D(o.TEXTURE_2D,Vt,0,0,It.width,It.height,Ct,Pt,It.data):i.texImage2D(o.TEXTURE_2D,Vt,zt,It.width,It.height,0,Ct,Pt,It.data);T.generateMipmaps=!1}else Zt?(le&&i.texStorage2D(o.TEXTURE_2D,pe,zt,St.width,St.height),ie&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,St.width,St.height,Ct,Pt,St.data)):i.texImage2D(o.TEXTURE_2D,0,zt,St.width,St.height,0,Ct,Pt,St.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Zt&&le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,pe,zt,kt[0].width,kt[0].height,St.depth);for(let Vt=0,M=kt.length;Vt<M;Vt++)It=kt[Vt],T.format!==Ai?Ct!==null?Zt?ie&&i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Vt,0,0,0,It.width,It.height,St.depth,Ct,It.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Vt,zt,It.width,It.height,St.depth,0,It.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?ie&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Vt,0,0,0,It.width,It.height,St.depth,Ct,Pt,It.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Vt,zt,It.width,It.height,St.depth,0,Ct,Pt,It.data)}else{Zt&&le&&i.texStorage2D(o.TEXTURE_2D,pe,zt,kt[0].width,kt[0].height);for(let Vt=0,M=kt.length;Vt<M;Vt++)It=kt[Vt],T.format!==Ai?Ct!==null?Zt?ie&&i.compressedTexSubImage2D(o.TEXTURE_2D,Vt,0,0,It.width,It.height,Ct,It.data):i.compressedTexImage2D(o.TEXTURE_2D,Vt,zt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?ie&&i.texSubImage2D(o.TEXTURE_2D,Vt,0,0,It.width,It.height,Ct,Pt,It.data):i.texImage2D(o.TEXTURE_2D,Vt,zt,It.width,It.height,0,Ct,Pt,It.data)}else if(T.isDataArrayTexture)Zt?(le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,pe,zt,St.width,St.height,St.depth),ie&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Ct,Pt,St.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,St.width,St.height,St.depth,0,Ct,Pt,St.data);else if(T.isData3DTexture)Zt?(le&&i.texStorage3D(o.TEXTURE_3D,pe,zt,St.width,St.height,St.depth),ie&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Ct,Pt,St.data)):i.texImage3D(o.TEXTURE_3D,0,zt,St.width,St.height,St.depth,0,Ct,Pt,St.data);else if(T.isFramebufferTexture){if(le)if(Zt)i.texStorage2D(o.TEXTURE_2D,pe,zt,St.width,St.height);else{let Vt=St.width,M=St.height;for(let ct=0;ct<pe;ct++)i.texImage2D(o.TEXTURE_2D,ct,zt,Vt,M,0,Ct,Pt,null),Vt>>=1,M>>=1}}else if(kt.length>0){if(Zt&&le){const Vt=Ut(kt[0]);i.texStorage2D(o.TEXTURE_2D,pe,zt,Vt.width,Vt.height)}for(let Vt=0,M=kt.length;Vt<M;Vt++)It=kt[Vt],Zt?ie&&i.texSubImage2D(o.TEXTURE_2D,Vt,0,0,Ct,Pt,It):i.texImage2D(o.TEXTURE_2D,Vt,zt,Ct,Pt,It);T.generateMipmaps=!1}else if(Zt){if(le){const Vt=Ut(St);i.texStorage2D(o.TEXTURE_2D,pe,zt,Vt.width,Vt.height)}ie&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ct,Pt,St)}else i.texImage2D(o.TEXTURE_2D,0,zt,Ct,Pt,St);x(T)&&_(lt),At.__version=ut.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function bt(U,T,W){if(T.image.length!==6)return;const lt=tt(U,T),K=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+W);const ut=r.get(K);if(K.version!==ut.__version||lt===!0){i.activeTexture(o.TEXTURE0+W);const At=Le.getPrimaries(Le.workingColorSpace),pt=T.colorSpace===La?null:Le.getPrimaries(T.colorSpace),Rt=T.colorSpace===La||At===pt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Dt=T.isCompressedTexture||T.image[0].isCompressedTexture,St=T.image[0]&&T.image[0].isDataTexture,Ct=[];for(let M=0;M<6;M++)!Dt&&!St?Ct[M]=R(T.image[M],!0,l.maxCubemapSize):Ct[M]=St?T.image[M].image:T.image[M],Ct[M]=Wt(T,Ct[M]);const Pt=Ct[0],zt=u.convert(T.format,T.colorSpace),It=u.convert(T.type),kt=I(T.internalFormat,zt,It,T.colorSpace),Zt=T.isVideoTexture!==!0,le=ut.__version===void 0||lt===!0,ie=K.dataReady;let pe=w(T,Pt);L(o.TEXTURE_CUBE_MAP,T);let Vt;if(Dt){Zt&&le&&i.texStorage2D(o.TEXTURE_CUBE_MAP,pe,kt,Pt.width,Pt.height);for(let M=0;M<6;M++){Vt=Ct[M].mipmaps;for(let ct=0;ct<Vt.length;ct++){const vt=Vt[ct];T.format!==Ai?zt!==null?Zt?ie&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,ct,0,0,vt.width,vt.height,zt,vt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,ct,kt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?ie&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,ct,0,0,vt.width,vt.height,zt,It,vt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,ct,kt,vt.width,vt.height,0,zt,It,vt.data)}}}else{if(Vt=T.mipmaps,Zt&&le){Vt.length>0&&pe++;const M=Ut(Ct[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,pe,kt,M.width,M.height)}for(let M=0;M<6;M++)if(St){Zt?ie&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,0,0,0,Ct[M].width,Ct[M].height,zt,It,Ct[M].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,0,kt,Ct[M].width,Ct[M].height,0,zt,It,Ct[M].data);for(let ct=0;ct<Vt.length;ct++){const Lt=Vt[ct].image[M].image;Zt?ie&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,ct+1,0,0,Lt.width,Lt.height,zt,It,Lt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,ct+1,kt,Lt.width,Lt.height,0,zt,It,Lt.data)}}else{Zt?ie&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,0,0,0,zt,It,Ct[M]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,0,kt,zt,It,Ct[M]);for(let ct=0;ct<Vt.length;ct++){const vt=Vt[ct];Zt?ie&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,ct+1,0,0,zt,It,vt.image[M]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,ct+1,kt,zt,It,vt.image[M])}}}x(T)&&_(o.TEXTURE_CUBE_MAP),ut.__version=K.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Y(U,T,W,lt,K,ut){const At=u.convert(W.format,W.colorSpace),pt=u.convert(W.type),Rt=I(W.internalFormat,At,pt,W.colorSpace);if(!r.get(T).__hasExternalTextures){const St=Math.max(1,T.width>>ut),Ct=Math.max(1,T.height>>ut);K===o.TEXTURE_3D||K===o.TEXTURE_2D_ARRAY?i.texImage3D(K,ut,Rt,St,Ct,T.depth,0,At,pt,null):i.texImage2D(K,ut,Rt,St,Ct,0,At,pt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),qt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,lt,K,r.get(W).__webglTexture,0,Jt(T)):(K===o.TEXTURE_2D||K>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,lt,K,r.get(W).__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function _t(U,T,W){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer&&!T.stencilBuffer){let lt=o.DEPTH_COMPONENT24;if(W||qt(T)){const K=T.depthTexture;K&&K.isDepthTexture&&(K.type===Na?lt=o.DEPTH_COMPONENT32F:K.type===As&&(lt=o.DEPTH_COMPONENT24));const ut=Jt(T);qt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ut,lt,T.width,T.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,ut,lt,T.width,T.height)}else o.renderbufferStorage(o.RENDERBUFFER,lt,T.width,T.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,U)}else if(T.depthBuffer&&T.stencilBuffer){const lt=Jt(T);W&&qt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,lt,o.DEPTH24_STENCIL8,T.width,T.height):qt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,lt,o.DEPTH24_STENCIL8,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,U)}else{const lt=T.textures;for(let K=0;K<lt.length;K++){const ut=lt[K],At=u.convert(ut.format,ut.colorSpace),pt=u.convert(ut.type),Rt=I(ut.internalFormat,At,pt,ut.colorSpace),Dt=Jt(T);W&&qt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,Rt,T.width,T.height):qt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,Rt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Rt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Et(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),V(T.depthTexture,0);const lt=r.get(T.depthTexture).__webglTexture,K=Jt(T);if(T.depthTexture.format===ys)qt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,lt,0,K):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,lt,0);else if(T.depthTexture.format===Bo)qt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,lt,0,K):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function wt(U){const T=r.get(U),W=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Et(T.__webglFramebuffer,U)}else if(W){T.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[lt]),T.__webglDepthbuffer[lt]=o.createRenderbuffer(),_t(T.__webglDepthbuffer[lt],U,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),_t(T.__webglDepthbuffer,U,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ft(U,T,W){const lt=r.get(U);T!==void 0&&Y(lt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&wt(U)}function jt(U){const T=U.texture,W=r.get(U),lt=r.get(T);U.addEventListener("dispose",k);const K=U.textures,ut=U.isWebGLCubeRenderTarget===!0,At=K.length>1;if(At||(lt.__webglTexture===void 0&&(lt.__webglTexture=o.createTexture()),lt.__version=T.version,h.memory.textures++),ut){W.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[pt]=[];for(let Rt=0;Rt<T.mipmaps.length;Rt++)W.__webglFramebuffer[pt][Rt]=o.createFramebuffer()}else W.__webglFramebuffer[pt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let pt=0;pt<T.mipmaps.length;pt++)W.__webglFramebuffer[pt]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(At)for(let pt=0,Rt=K.length;pt<Rt;pt++){const Dt=r.get(K[pt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&qt(U)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let pt=0;pt<K.length;pt++){const Rt=K[pt];W.__webglColorRenderbuffer[pt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[pt]);const Dt=u.convert(Rt.format,Rt.colorSpace),St=u.convert(Rt.type),Ct=I(Rt.internalFormat,Dt,St,Rt.colorSpace,U.isXRRenderTarget===!0),Pt=Jt(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,Ct,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+pt,o.RENDERBUFFER,W.__webglColorRenderbuffer[pt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),_t(W.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,lt.__webglTexture),L(o.TEXTURE_CUBE_MAP,T);for(let pt=0;pt<6;pt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Rt=0;Rt<T.mipmaps.length;Rt++)Y(W.__webglFramebuffer[pt][Rt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt);else Y(W.__webglFramebuffer[pt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);x(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(At){for(let pt=0,Rt=K.length;pt<Rt;pt++){const Dt=K[pt],St=r.get(Dt);i.bindTexture(o.TEXTURE_2D,St.__webglTexture),L(o.TEXTURE_2D,Dt),Y(W.__webglFramebuffer,U,Dt,o.COLOR_ATTACHMENT0+pt,o.TEXTURE_2D,0),x(Dt)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let pt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(pt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(pt,lt.__webglTexture),L(pt,T),T.mipmaps&&T.mipmaps.length>0)for(let Rt=0;Rt<T.mipmaps.length;Rt++)Y(W.__webglFramebuffer[Rt],U,T,o.COLOR_ATTACHMENT0,pt,Rt);else Y(W.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,pt,0);x(T)&&_(pt),i.unbindTexture()}U.depthBuffer&&wt(U)}function oe(U){const T=U.textures;for(let W=0,lt=T.length;W<lt;W++){const K=T[W];if(x(K)){const ut=U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,At=r.get(K).__webglTexture;i.bindTexture(ut,At),_(ut),i.unbindTexture()}}}function et(U){if(U.samples>0&&qt(U)===!1){const T=U.textures,W=U.width,lt=U.height;let K=o.COLOR_BUFFER_BIT;const ut=[],At=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=r.get(U),Rt=T.length>1;if(Rt)for(let Dt=0;Dt<T.length;Dt++)i.bindFramebuffer(o.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Dt=0;Dt<T.length;Dt++){ut.push(o.COLOR_ATTACHMENT0+Dt),U.depthBuffer&&ut.push(At);const St=pt.__ignoreDepthValues!==void 0?pt.__ignoreDepthValues:!1;if(St===!1&&(U.depthBuffer&&(K|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&pt.__isTransmissionRenderTarget!==!0&&(K|=o.STENCIL_BUFFER_BIT)),Rt&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,pt.__webglColorRenderbuffer[Dt]),St===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[At]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[At])),Rt){const Ct=r.get(T[Dt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ct,0)}o.blitFramebuffer(0,0,W,lt,0,0,W,lt,K,o.NEAREST),p&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ut)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Dt=0;Dt<T.length;Dt++){i.bindFramebuffer(o.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,pt.__webglColorRenderbuffer[Dt]);const St=r.get(T[Dt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,St,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}}function Jt(U){return Math.min(l.maxSamples,U.samples)}function qt(U){const T=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function be(U){const T=h.render.frame;g.get(U)!==T&&(g.set(U,T),U.update())}function Wt(U,T){const W=U.colorSpace,lt=U.format,K=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||W!==Ga&&W!==La&&(Le.getTransfer(W)===Be?(lt!==Ai||K!==Ia)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function Ut(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=Q,this.resetTextureUnits=A,this.setTexture2D=V,this.setTexture2DArray=mt,this.setTexture3D=dt,this.setTextureCube=B,this.rebindTextures=Ft,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=qt}function dA(o,e){function i(r,l=La){let u;const h=Le.getTransfer(l);if(r===Ia)return o.UNSIGNED_BYTE;if(r===m0)return o.UNSIGNED_SHORT_4_4_4_4;if(r===g0)return o.UNSIGNED_SHORT_5_5_5_1;if(r===YS)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===qS)return o.BYTE;if(r===WS)return o.SHORT;if(r===d0)return o.UNSIGNED_SHORT;if(r===p0)return o.INT;if(r===As)return o.UNSIGNED_INT;if(r===Na)return o.FLOAT;if(r===Tc)return o.HALF_FLOAT;if(r===ZS)return o.ALPHA;if(r===KS)return o.RGB;if(r===Ai)return o.RGBA;if(r===QS)return o.LUMINANCE;if(r===JS)return o.LUMINANCE_ALPHA;if(r===ys)return o.DEPTH_COMPONENT;if(r===Bo)return o.DEPTH_STENCIL;if(r===$S)return o.RED;if(r===_0)return o.RED_INTEGER;if(r===ty)return o.RG;if(r===v0)return o.RG_INTEGER;if(r===x0)return o.RGBA_INTEGER;if(r===jf||r===qf||r===Wf||r===Yf)if(h===Be)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===jf)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===jf)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qf)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wf)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yf)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pg||r===zg||r===Ig||r===Bg)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Pg)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zg)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ig)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bg)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===S0)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Fg||r===Hg)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Fg)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Hg)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gg||r===Vg||r===kg||r===Xg||r===jg||r===qg||r===Wg||r===Yg||r===Zg||r===Kg||r===Qg||r===Jg||r===$g||r===t_)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Gg)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vg)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kg)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xg)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jg)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qg)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wg)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yg)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Zg)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kg)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qg)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jg)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$g)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===t_)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zf||r===e_||r===n_)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Zf)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===e_)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===n_)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ey||r===i_||r===a_||r===r_)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Zf)return u.COMPRESSED_RED_RGTC1_EXT;if(r===i_)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===a_)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===r_)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class pA extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Oa extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mA={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const R of e.hand.values()){const x=i.getJointPose(R,r),_=this._getHandJoint(m,R);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],S=g.position.distanceTo(v.position),E=.02,C=.005;m.inputState.pinching&&S>E+C?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=E-C&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(mA)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Oa;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const gA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_A=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Pn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}render(e,i){if(this.texture!==null){if(this.mesh===null){const r=i.cameras[0].viewport,l=new Ha({vertexShader:gA,fragmentShader:_A,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new dn(new Nc(20,20),l)}e.render(this.mesh,i)}}reset(){this.texture=null,this.mesh=null}}class xA extends vr{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,g=null,v=null,S=null,E=null,C=null;const R=new vA,x=i.getContextAttributes();let _=null,I=null;const w=[],F=[],k=new ne;let H=null;const P=new ii;P.layers.enable(1),P.viewport=new pn;const it=new ii;it.layers.enable(2),it.viewport=new pn;const N=[P,it],A=new pA;A.layers.enable(1),A.layers.enable(2);let Q=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let _t=w[Y];return _t===void 0&&(_t=new yh,w[Y]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(Y){let _t=w[Y];return _t===void 0&&(_t=new yh,w[Y]=_t),_t.getGripSpace()},this.getHand=function(Y){let _t=w[Y];return _t===void 0&&(_t=new yh,w[Y]=_t),_t.getHandSpace()};function V(Y){const _t=F.indexOf(Y.inputSource);if(_t===-1)return;const Et=w[_t];Et!==void 0&&(Et.update(Y.inputSource,Y.frame,m||h),Et.dispatchEvent({type:Y.type,data:Y.inputSource}))}function mt(){l.removeEventListener("select",V),l.removeEventListener("selectstart",V),l.removeEventListener("selectend",V),l.removeEventListener("squeeze",V),l.removeEventListener("squeezestart",V),l.removeEventListener("squeezeend",V),l.removeEventListener("end",mt),l.removeEventListener("inputsourceschange",dt);for(let Y=0;Y<w.length;Y++){const _t=F[Y];_t!==null&&(F[Y]=null,w[Y].disconnect(_t))}Q=null,st=null,R.reset(),e.setRenderTarget(_),E=null,S=null,v=null,l=null,I=null,bt.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return v},this.getFrame=function(){return C},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",V),l.addEventListener("selectstart",V),l.addEventListener("selectend",V),l.addEventListener("squeeze",V),l.addEventListener("squeezestart",V),l.addEventListener("squeezeend",V),l.addEventListener("end",mt),l.addEventListener("inputsourceschange",dt),x.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(k),l.renderState.layers===void 0){const _t={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,_t),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),I=new _r(E.framebufferWidth,E.framebufferHeight,{format:Ai,type:Ia,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let _t=null,Et=null,wt=null;x.depth&&(wt=x.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_t=x.stencil?Bo:ys,Et=x.stencil?Fo:As);const Ft={colorFormat:i.RGBA8,depthFormat:wt,scaleFactor:u};v=new XRWebGLBinding(l,i),S=v.createProjectionLayer(Ft),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),I=new _r(S.textureWidth,S.textureHeight,{format:Ai,type:Ia,depthTexture:new z0(S.textureWidth,S.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const jt=e.properties.get(I);jt.__ignoreDepthValues=S.ignoreDepthValues}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),bt.setContext(l),bt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function dt(Y){for(let _t=0;_t<Y.removed.length;_t++){const Et=Y.removed[_t],wt=F.indexOf(Et);wt>=0&&(F[wt]=null,w[wt].disconnect(Et))}for(let _t=0;_t<Y.added.length;_t++){const Et=Y.added[_t];let wt=F.indexOf(Et);if(wt===-1){for(let jt=0;jt<w.length;jt++)if(jt>=F.length){F.push(Et),wt=jt;break}else if(F[jt]===null){F[jt]=Et,wt=jt;break}if(wt===-1)break}const Ft=w[wt];Ft&&Ft.connect(Et)}}const B=new X,$=new X;function j(Y,_t,Et){B.setFromMatrixPosition(_t.matrixWorld),$.setFromMatrixPosition(Et.matrixWorld);const wt=B.distanceTo($),Ft=_t.projectionMatrix.elements,jt=Et.projectionMatrix.elements,oe=Ft[14]/(Ft[10]-1),et=Ft[14]/(Ft[10]+1),Jt=(Ft[9]+1)/Ft[5],qt=(Ft[9]-1)/Ft[5],be=(Ft[8]-1)/Ft[0],Wt=(jt[8]+1)/jt[0],Ut=oe*be,U=oe*Wt,T=wt/(-be+Wt),W=T*-be;_t.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(W),Y.translateZ(T),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const lt=oe+T,K=et+T,ut=Ut-W,At=U+(wt-W),pt=Jt*et/K*lt,Rt=qt*et/K*lt;Y.projectionMatrix.makePerspective(ut,At,pt,Rt,lt,K),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function yt(Y,_t){_t===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(_t.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;R.texture!==null&&(Y.near=R.depthNear,Y.far=R.depthFar),A.near=it.near=P.near=Y.near,A.far=it.far=P.far=Y.far,(Q!==A.near||st!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),Q=A.near,st=A.far,P.near=Q,P.far=st,it.near=Q,it.far=st,P.updateProjectionMatrix(),it.updateProjectionMatrix(),Y.updateProjectionMatrix());const _t=Y.parent,Et=A.cameras;yt(A,_t);for(let wt=0;wt<Et.length;wt++)yt(Et[wt],_t);Et.length===2?j(A,P,it):A.projectionMatrix.copy(P.projectionMatrix),L(Y,A,_t)};function L(Y,_t,Et){Et===null?Y.matrix.copy(_t.matrixWorld):(Y.matrix.copy(Et.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(_t.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(_t.projectionMatrix),Y.projectionMatrixInverse.copy(_t.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Lh*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(S===null&&E===null))return p},this.setFoveation=function(Y){p=Y,S!==null&&(S.fixedFoveation=Y),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=Y)},this.hasDepthSensing=function(){return R.texture!==null};let tt=null;function Tt(Y,_t){if(g=_t.getViewerPose(m||h),C=_t,g!==null){const Et=g.views;E!==null&&(e.setRenderTargetFramebuffer(I,E.framebuffer),e.setRenderTarget(I));let wt=!1;Et.length!==A.cameras.length&&(A.cameras.length=0,wt=!0);for(let jt=0;jt<Et.length;jt++){const oe=Et[jt];let et=null;if(E!==null)et=E.getViewport(oe);else{const qt=v.getViewSubImage(S,oe);et=qt.viewport,jt===0&&(e.setRenderTargetTextures(I,qt.colorTexture,S.ignoreDepthValues?void 0:qt.depthStencilTexture),e.setRenderTarget(I))}let Jt=N[jt];Jt===void 0&&(Jt=new ii,Jt.layers.enable(jt),Jt.viewport=new pn,N[jt]=Jt),Jt.matrix.fromArray(oe.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(oe.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(et.x,et.y,et.width,et.height),jt===0&&(A.matrix.copy(Jt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),wt===!0&&A.cameras.push(Jt)}const Ft=l.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const jt=v.getDepthInformation(Et[0]);jt&&jt.isValid&&jt.texture&&R.init(e,jt,l.renderState)}}for(let Et=0;Et<w.length;Et++){const wt=F[Et],Ft=w[Et];wt!==null&&Ft!==void 0&&Ft.update(wt,_t,m||h)}R.render(e,A),tt&&tt(Y,_t),_t.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_t}),C=null}const bt=new O0;bt.setAnimationLoop(Tt),this.setAnimationLoop=function(Y){tt=Y},this.dispose=function(){}}}const ur=new mi,SA=new tn;function yA(o,e){function i(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function r(x,_){_.color.getRGB(x.fogColor.value,L0(o)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function l(x,_,I,w,F){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(x,_):_.isMeshToonMaterial?(u(x,_),v(x,_)):_.isMeshPhongMaterial?(u(x,_),g(x,_)):_.isMeshStandardMaterial?(u(x,_),S(x,_),_.isMeshPhysicalMaterial&&E(x,_,F)):_.isMeshMatcapMaterial?(u(x,_),C(x,_)):_.isMeshDepthMaterial?u(x,_):_.isMeshDistanceMaterial?(u(x,_),R(x,_)):_.isMeshNormalMaterial?u(x,_):_.isLineBasicMaterial?(h(x,_),_.isLineDashedMaterial&&d(x,_)):_.isPointsMaterial?p(x,_,I,w):_.isSpriteMaterial?m(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,i(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===On&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,i(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===On&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,i(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,i(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const I=e.get(_),w=I.envMap,F=I.envMapRotation;if(w&&(x.envMap.value=w,ur.copy(F),ur.x*=-1,ur.y*=-1,ur.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),x.envMapRotation.value.setFromMatrix4(SA.makeRotationFromEuler(ur)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap){x.lightMap.value=_.lightMap;const k=o._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=_.lightMapIntensity*k,i(_.lightMap,x.lightMapTransform)}_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,x.aoMapTransform))}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform))}function d(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function p(x,_,I,w){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*I,x.scale.value=w*.5,_.map&&(x.map.value=_.map,i(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function S(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function E(x,_,I){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===On&&x.clearcoatNormalScale.value.negate())),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=I.texture,x.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,x.specularIntensityMapTransform))}function C(x,_){_.matcap&&(x.matcap.value=_.matcap)}function R(x,_){const I=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(I.matrixWorld),x.nearDistance.value=I.shadow.camera.near,x.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function MA(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,w){const F=w.program;r.uniformBlockBinding(I,F)}function m(I,w){let F=l[I.id];F===void 0&&(C(I),F=g(I),l[I.id]=F,I.addEventListener("dispose",x));const k=w.program;r.updateUBOMapping(I,k);const H=e.render.frame;u[I.id]!==H&&(S(I),u[I.id]=H)}function g(I){const w=v();I.__bindingPointIndex=w;const F=o.createBuffer(),k=I.__size,H=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,k,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,w,F),F}function v(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(I){const w=l[I.id],F=I.uniforms,k=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,w);for(let H=0,P=F.length;H<P;H++){const it=Array.isArray(F[H])?F[H]:[F[H]];for(let N=0,A=it.length;N<A;N++){const Q=it[N];if(E(Q,H,N,k)===!0){const st=Q.__offset,V=Array.isArray(Q.value)?Q.value:[Q.value];let mt=0;for(let dt=0;dt<V.length;dt++){const B=V[dt],$=R(B);typeof B=="number"||typeof B=="boolean"?(Q.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,st+mt,Q.__data)):B.isMatrix3?(Q.__data[0]=B.elements[0],Q.__data[1]=B.elements[1],Q.__data[2]=B.elements[2],Q.__data[3]=0,Q.__data[4]=B.elements[3],Q.__data[5]=B.elements[4],Q.__data[6]=B.elements[5],Q.__data[7]=0,Q.__data[8]=B.elements[6],Q.__data[9]=B.elements[7],Q.__data[10]=B.elements[8],Q.__data[11]=0):(B.toArray(Q.__data,mt),mt+=$.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,Q.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(I,w,F,k){const H=I.value,P=w+"_"+F;if(k[P]===void 0)return typeof H=="number"||typeof H=="boolean"?k[P]=H:k[P]=H.clone(),!0;{const it=k[P];if(typeof H=="number"||typeof H=="boolean"){if(it!==H)return k[P]=H,!0}else if(it.equals(H)===!1)return it.copy(H),!0}return!1}function C(I){const w=I.uniforms;let F=0;const k=16;for(let P=0,it=w.length;P<it;P++){const N=Array.isArray(w[P])?w[P]:[w[P]];for(let A=0,Q=N.length;A<Q;A++){const st=N[A],V=Array.isArray(st.value)?st.value:[st.value];for(let mt=0,dt=V.length;mt<dt;mt++){const B=V[mt],$=R(B),j=F%k;j!==0&&k-j<$.boundary&&(F+=k-j),st.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=F,F+=$.storage}}}const H=F%k;return H>0&&(F+=k-H),I.__size=F,I.__cache={},this}function R(I){const w={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(w.boundary=4,w.storage=4):I.isVector2?(w.boundary=8,w.storage=8):I.isVector3||I.isColor?(w.boundary=16,w.storage=12):I.isVector4?(w.boundary=16,w.storage=16):I.isMatrix3?(w.boundary=48,w.storage=48):I.isMatrix4?(w.boundary=64,w.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),w}function x(I){const w=I.target;w.removeEventListener("dispose",x);const F=h.indexOf(w.__bindingPointIndex);h.splice(F,1),o.deleteBuffer(l[w.id]),delete l[w.id],delete u[w.id]}function _(){for(const I in l)o.deleteBuffer(l[I]);h=[],l={},u={}}return{bind:p,update:m,dispose:_}}class EA{constructor(e={}){const{canvas:i=py(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),C=new Int32Array(4);let R=null,x=null;const _=[],I=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ei,this._useLegacyLights=!1,this.toneMapping=za,this.toneMappingExposure=1;const w=this;let F=!1,k=0,H=0,P=null,it=-1,N=null;const A=new pn,Q=new pn;let st=null;const V=new Ee(0);let mt=0,dt=i.width,B=i.height,$=1,j=null,yt=null;const L=new pn(0,0,dt,B),tt=new pn(0,0,dt,B);let Tt=!1;const bt=new kh;let Y=!1,_t=!1;const Et=new tn,wt=new ne,Ft=new X,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return P===null?$:1}let et=r;function Jt(D,Z){const at=i.getContext(D,Z);return at!==null?at:null}try{const D={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fh}`),i.addEventListener("webglcontextlost",ct,!1),i.addEventListener("webglcontextrestored",vt,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),et===null){const Z="webgl2";if(et=Jt(Z,D),et===null)throw Jt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let qt,be,Wt,Ut,U,T,W,lt,K,ut,At,pt,Rt,Dt,St,Ct,Pt,zt,It,kt,Zt,le,ie,pe;function Vt(){qt=new UT(et),qt.init(),be=new bT(et,qt,e),le=new dA(et,qt),Wt=new fA(et),Ut=new OT(et),U=new Qb,T=new hA(et,qt,Wt,U,be,le,Ut),W=new RT(w),lt=new DT(w),K=new Hy(et),ie=new ET(et,K),ut=new LT(et,K,Ut,ie),At=new zT(et,ut,K,Ut),It=new PT(et,be,T),Ct=new AT(U),pt=new Kb(w,W,lt,qt,be,ie,Ct),Rt=new yA(w,U),Dt=new $b,St=new rA(qt),zt=new MT(w,W,lt,Wt,At,S,p),Pt=new uA(w,At,be),pe=new MA(et,Ut,be,Wt),kt=new TT(et,qt,Ut),Zt=new NT(et,qt,Ut),Ut.programs=pt.programs,w.capabilities=be,w.extensions=qt,w.properties=U,w.renderLists=Dt,w.shadowMap=Pt,w.state=Wt,w.info=Ut}Vt();const M=new xA(w,et);this.xr=M,this.getContext=function(){return et},this.getContextAttributes=function(){return et.getContextAttributes()},this.forceContextLoss=function(){const D=qt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=qt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(D){D!==void 0&&($=D,this.setSize(dt,B,!1))},this.getSize=function(D){return D.set(dt,B)},this.setSize=function(D,Z,at=!0){if(M.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}dt=D,B=Z,i.width=Math.floor(D*$),i.height=Math.floor(Z*$),at===!0&&(i.style.width=D+"px",i.style.height=Z+"px"),this.setViewport(0,0,D,Z)},this.getDrawingBufferSize=function(D){return D.set(dt*$,B*$).floor()},this.setDrawingBufferSize=function(D,Z,at){dt=D,B=Z,$=at,i.width=Math.floor(D*at),i.height=Math.floor(Z*at),this.setViewport(0,0,D,Z)},this.getCurrentViewport=function(D){return D.copy(A)},this.getViewport=function(D){return D.copy(L)},this.setViewport=function(D,Z,at,ht){D.isVector4?L.set(D.x,D.y,D.z,D.w):L.set(D,Z,at,ht),Wt.viewport(A.copy(L).multiplyScalar($).round())},this.getScissor=function(D){return D.copy(tt)},this.setScissor=function(D,Z,at,ht){D.isVector4?tt.set(D.x,D.y,D.z,D.w):tt.set(D,Z,at,ht),Wt.scissor(Q.copy(tt).multiplyScalar($).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(D){Wt.setScissorTest(Tt=D)},this.setOpaqueSort=function(D){j=D},this.setTransparentSort=function(D){yt=D},this.getClearColor=function(D){return D.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(D=!0,Z=!0,at=!0){let ht=0;if(D){let ft=!1;if(P!==null){const Nt=P.texture.format;ft=Nt===x0||Nt===v0||Nt===_0}if(ft){const Nt=P.texture.type,Gt=Nt===Ia||Nt===As||Nt===d0||Nt===Fo||Nt===m0||Nt===g0,Kt=zt.getClearColor(),$t=zt.getClearAlpha(),ae=Kt.r,re=Kt.g,ee=Kt.b;Gt?(E[0]=ae,E[1]=re,E[2]=ee,E[3]=$t,et.clearBufferuiv(et.COLOR,0,E)):(C[0]=ae,C[1]=re,C[2]=ee,C[3]=$t,et.clearBufferiv(et.COLOR,0,C))}else ht|=et.COLOR_BUFFER_BIT}Z&&(ht|=et.DEPTH_BUFFER_BIT),at&&(ht|=et.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ct,!1),i.removeEventListener("webglcontextrestored",vt,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),Dt.dispose(),St.dispose(),U.dispose(),W.dispose(),lt.dispose(),At.dispose(),ie.dispose(),pe.dispose(),pt.dispose(),M.dispose(),M.removeEventListener("sessionstart",He),M.removeEventListener("sessionend",je),qe.stop()};function ct(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const D=Ut.autoReset,Z=Pt.enabled,at=Pt.autoUpdate,ht=Pt.needsUpdate,ft=Pt.type;Vt(),Ut.autoReset=D,Pt.enabled=Z,Pt.autoUpdate=at,Pt.needsUpdate=ht,Pt.type=ft}function Lt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Bt(D){const Z=D.target;Z.removeEventListener("dispose",Bt),ge(Z)}function ge(D){ue(D),U.remove(D)}function ue(D){const Z=U.get(D).programs;Z!==void 0&&(Z.forEach(function(at){pt.releaseProgram(at)}),D.isShaderMaterial&&pt.releaseShaderCache(D))}this.renderBufferDirect=function(D,Z,at,ht,ft,Nt){Z===null&&(Z=jt);const Gt=ft.isMesh&&ft.matrixWorld.determinant()<0,Kt=Us(D,Z,at,ht,ft);Wt.setMaterial(ht,Gt);let $t=at.index,ae=1;if(ht.wireframe===!0){if($t=ut.getWireframeAttribute(at),$t===void 0)return;ae=2}const re=at.drawRange,ee=at.attributes.position;let Pe=re.start*ae,Ve=(re.start+re.count)*ae;Nt!==null&&(Pe=Math.max(Pe,Nt.start*ae),Ve=Math.min(Ve,(Nt.start+Nt.count)*ae)),$t!==null?(Pe=Math.max(Pe,0),Ve=Math.min(Ve,$t.count)):ee!=null&&(Pe=Math.max(Pe,0),Ve=Math.min(Ve,ee.count));const We=Ve-Pe;if(We<0||We===1/0)return;ie.setup(ft,ht,Kt,at,$t);let Wn,Te=kt;if($t!==null&&(Wn=K.get($t),Te=Zt,Te.setIndex(Wn)),ft.isMesh)ht.wireframe===!0?(Wt.setLineWidth(ht.wireframeLinewidth*oe()),Te.setMode(et.LINES)):Te.setMode(et.TRIANGLES);else if(ft.isLine){let se=ht.linewidth;se===void 0&&(se=1),Wt.setLineWidth(se*oe()),ft.isLineSegments?Te.setMode(et.LINES):ft.isLineLoop?Te.setMode(et.LINE_LOOP):Te.setMode(et.LINE_STRIP)}else ft.isPoints?Te.setMode(et.POINTS):ft.isSprite&&Te.setMode(et.TRIANGLES);if(ft.isBatchedMesh)Te.renderMultiDraw(ft._multiDrawStarts,ft._multiDrawCounts,ft._multiDrawCount);else if(ft.isInstancedMesh)Te.renderInstances(Pe,We,ft.count);else if(at.isInstancedBufferGeometry){const se=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Va=Math.min(at.instanceCount,se);Te.renderInstances(Pe,We,Va)}else Te.render(Pe,We)};function Ne(D,Z,at){D.transparent===!0&&D.side===Yi&&D.forceSinglePass===!1?(D.side=On,D.needsUpdate=!0,xr(D,Z,at),D.side=Fa,D.needsUpdate=!0,xr(D,Z,at),D.side=Yi):xr(D,Z,at)}this.compile=function(D,Z,at=null){at===null&&(at=D),x=St.get(at),x.init(),I.push(x),at.traverseVisible(function(ft){ft.isLight&&ft.layers.test(Z.layers)&&(x.pushLight(ft),ft.castShadow&&x.pushShadow(ft))}),D!==at&&D.traverseVisible(function(ft){ft.isLight&&ft.layers.test(Z.layers)&&(x.pushLight(ft),ft.castShadow&&x.pushShadow(ft))}),x.setupLights(w._useLegacyLights);const ht=new Set;return D.traverse(function(ft){const Nt=ft.material;if(Nt)if(Array.isArray(Nt))for(let Gt=0;Gt<Nt.length;Gt++){const Kt=Nt[Gt];Ne(Kt,at,ft),ht.add(Kt)}else Ne(Nt,at,ft),ht.add(Nt)}),I.pop(),x=null,ht},this.compileAsync=function(D,Z,at=null){const ht=this.compile(D,Z,at);return new Promise(ft=>{function Nt(){if(ht.forEach(function(Gt){U.get(Gt).currentProgram.isReady()&&ht.delete(Gt)}),ht.size===0){ft(D);return}setTimeout(Nt,10)}qt.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Xe=null;function Se(D){Xe&&Xe(D)}function He(){qe.stop()}function je(){qe.start()}const qe=new O0;qe.setAnimationLoop(Se),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(D){Xe=D,M.setAnimationLoop(D),D===null?qe.stop():qe.start()},M.addEventListener("sessionstart",He),M.addEventListener("sessionend",je),this.render=function(D,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),M.enabled===!0&&M.isPresenting===!0&&(M.cameraAutoUpdate===!0&&M.updateCamera(Z),Z=M.getCamera()),D.isScene===!0&&D.onBeforeRender(w,D,Z,P),x=St.get(D,I.length),x.init(),I.push(x),Et.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),bt.setFromProjectionMatrix(Et),_t=this.localClippingEnabled,Y=Ct.init(this.clippingPlanes,_t),R=Dt.get(D,_.length),R.init(),_.push(R),Ae(D,Z,0,w.sortObjects),R.finish(),w.sortObjects===!0&&R.sort(j,yt),this.info.render.frame++,Y===!0&&Ct.beginShadows();const at=x.state.shadowsArray;if(Pt.render(at,D,Z),Y===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),(M.enabled===!1||M.isPresenting===!1||M.hasDepthSensing()===!1)&&zt.render(R,D),x.setupLights(w._useLegacyLights),Z.isArrayCamera){const ht=Z.cameras;for(let ft=0,Nt=ht.length;ft<Nt;ft++){const Gt=ht[ft];Ge(R,D,Gt,Gt.viewport)}}else Ge(R,D,Z);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),D.isScene===!0&&D.onAfterRender(w,D,Z),ie.resetDefaultState(),it=-1,N=null,I.pop(),I.length>0?x=I[I.length-1]:x=null,_.pop(),_.length>0?R=_[_.length-1]:R=null};function Ae(D,Z,at,ht){if(D.visible===!1)return;if(D.layers.test(Z.layers)){if(D.isGroup)at=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Z);else if(D.isLight)x.pushLight(D),D.castShadow&&x.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||bt.intersectsSprite(D)){ht&&Ft.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Et);const Gt=At.update(D),Kt=D.material;Kt.visible&&R.push(D,Gt,Kt,at,Ft.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||bt.intersectsObject(D))){const Gt=At.update(D),Kt=D.material;if(ht&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ft.copy(D.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),Ft.copy(Gt.boundingSphere.center)),Ft.applyMatrix4(D.matrixWorld).applyMatrix4(Et)),Array.isArray(Kt)){const $t=Gt.groups;for(let ae=0,re=$t.length;ae<re;ae++){const ee=$t[ae],Pe=Kt[ee.materialIndex];Pe&&Pe.visible&&R.push(D,Gt,Pe,at,Ft.z,ee)}}else Kt.visible&&R.push(D,Gt,Kt,at,Ft.z,null)}}const Nt=D.children;for(let Gt=0,Kt=Nt.length;Gt<Kt;Gt++)Ae(Nt[Gt],Z,at,ht)}function Ge(D,Z,at,ht){const ft=D.opaque,Nt=D.transmissive,Gt=D.transparent;x.setupLightsView(at),Y===!0&&Ct.setGlobalState(w.clippingPlanes,at),Nt.length>0&&zn(ft,Nt,Z,at),ht&&Wt.viewport(A.copy(ht)),ft.length>0&&ri(ft,Z,at),Nt.length>0&&ri(Nt,Z,at),Gt.length>0&&ri(Gt,Z,at),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function zn(D,Z,at,ht){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget===null){x.state.transmissionRenderTarget=new _r(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?Tc:Ia,minFilter:gr,samples:4,stencilBuffer:u});const ae=U.get(x.state.transmissionRenderTarget);ae.__isTransmissionRenderTarget=!0}const Nt=x.state.transmissionRenderTarget;w.getDrawingBufferSize(wt),Nt.setSize(wt.x,wt.y);const Gt=w.getRenderTarget();w.setRenderTarget(Nt),w.getClearColor(V),mt=w.getClearAlpha(),mt<1&&w.setClearColor(16777215,.5),w.clear();const Kt=w.toneMapping;w.toneMapping=za,ri(D,at,ht),T.updateMultisampleRenderTarget(Nt),T.updateRenderTargetMipmap(Nt);let $t=!1;for(let ae=0,re=Z.length;ae<re;ae++){const ee=Z[ae],Pe=ee.object,Ve=ee.geometry,We=ee.material,Wn=ee.group;if(We.side===Yi&&Pe.layers.test(ht.layers)){const Te=We.side;We.side=On,We.needsUpdate=!0,Xo(Pe,at,ht,Ve,We,Wn),We.side=Te,We.needsUpdate=!0,$t=!0}}$t===!0&&(T.updateMultisampleRenderTarget(Nt),T.updateRenderTargetMipmap(Nt)),w.setRenderTarget(Gt),w.setClearColor(V,mt),w.toneMapping=Kt}function ri(D,Z,at){const ht=Z.isScene===!0?Z.overrideMaterial:null;for(let ft=0,Nt=D.length;ft<Nt;ft++){const Gt=D[ft],Kt=Gt.object,$t=Gt.geometry,ae=ht===null?Gt.material:ht,re=Gt.group;Kt.layers.test(at.layers)&&Xo(Kt,Z,at,$t,ae,re)}}function Xo(D,Z,at,ht,ft,Nt){D.onBeforeRender(w,Z,at,ht,ft,Nt),D.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ft.onBeforeRender(w,Z,at,ht,D,Nt),ft.transparent===!0&&ft.side===Yi&&ft.forceSinglePass===!1?(ft.side=On,ft.needsUpdate=!0,w.renderBufferDirect(at,Z,ht,ft,D,Nt),ft.side=Fa,ft.needsUpdate=!0,w.renderBufferDirect(at,Z,ht,ft,D,Nt),ft.side=Yi):w.renderBufferDirect(at,Z,ht,ft,D,Nt),D.onAfterRender(w,Z,at,ht,ft,Nt)}function xr(D,Z,at){Z.isScene!==!0&&(Z=jt);const ht=U.get(D),ft=x.state.lights,Nt=x.state.shadowsArray,Gt=ft.state.version,Kt=pt.getParameters(D,ft.state,Nt,Z,at),$t=pt.getProgramCacheKey(Kt);let ae=ht.programs;ht.environment=D.isMeshStandardMaterial?Z.environment:null,ht.fog=Z.fog,ht.envMap=(D.isMeshStandardMaterial?lt:W).get(D.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&D.envMap===null?Z.environmentRotation:D.envMapRotation,ae===void 0&&(D.addEventListener("dispose",Bt),ae=new Map,ht.programs=ae);let re=ae.get($t);if(re!==void 0){if(ht.currentProgram===re&&ht.lightsStateVersion===Gt)return Ji(D,Kt),re}else Kt.uniforms=pt.getUniforms(D),D.onBuild(at,Kt,w),D.onBeforeCompile(Kt,w),re=pt.acquireProgram(Kt,$t),ae.set($t,re),ht.uniforms=Kt.uniforms;const ee=ht.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ee.clippingPlanes=Ct.uniform),Ji(D,Kt),ht.needsLights=ta(D),ht.lightsStateVersion=Gt,ht.needsLights&&(ee.ambientLightColor.value=ft.state.ambient,ee.lightProbe.value=ft.state.probe,ee.directionalLights.value=ft.state.directional,ee.directionalLightShadows.value=ft.state.directionalShadow,ee.spotLights.value=ft.state.spot,ee.spotLightShadows.value=ft.state.spotShadow,ee.rectAreaLights.value=ft.state.rectArea,ee.ltc_1.value=ft.state.rectAreaLTC1,ee.ltc_2.value=ft.state.rectAreaLTC2,ee.pointLights.value=ft.state.point,ee.pointLightShadows.value=ft.state.pointShadow,ee.hemisphereLights.value=ft.state.hemi,ee.directionalShadowMap.value=ft.state.directionalShadowMap,ee.directionalShadowMatrix.value=ft.state.directionalShadowMatrix,ee.spotShadowMap.value=ft.state.spotShadowMap,ee.spotLightMatrix.value=ft.state.spotLightMatrix,ee.spotLightMap.value=ft.state.spotLightMap,ee.pointShadowMap.value=ft.state.pointShadowMap,ee.pointShadowMatrix.value=ft.state.pointShadowMatrix),ht.currentProgram=re,ht.uniformsList=null,re}function Ds(D){if(D.uniformsList===null){const Z=D.currentProgram.getUniforms();D.uniformsList=Mc.seqWithValue(Z.seq,D.uniforms)}return D.uniformsList}function Ji(D,Z){const at=U.get(D);at.outputColorSpace=Z.outputColorSpace,at.batching=Z.batching,at.instancing=Z.instancing,at.instancingColor=Z.instancingColor,at.instancingMorph=Z.instancingMorph,at.skinning=Z.skinning,at.morphTargets=Z.morphTargets,at.morphNormals=Z.morphNormals,at.morphColors=Z.morphColors,at.morphTargetsCount=Z.morphTargetsCount,at.numClippingPlanes=Z.numClippingPlanes,at.numIntersection=Z.numClipIntersection,at.vertexAlphas=Z.vertexAlphas,at.vertexTangents=Z.vertexTangents,at.toneMapping=Z.toneMapping}function Us(D,Z,at,ht,ft){Z.isScene!==!0&&(Z=jt),T.resetTextureUnits();const Nt=Z.fog,Gt=ht.isMeshStandardMaterial?Z.environment:null,Kt=P===null?w.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ga,$t=(ht.isMeshStandardMaterial?lt:W).get(ht.envMap||Gt),ae=ht.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,re=!!at.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),ee=!!at.morphAttributes.position,Pe=!!at.morphAttributes.normal,Ve=!!at.morphAttributes.color;let We=za;ht.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(We=w.toneMapping);const Wn=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Te=Wn!==void 0?Wn.length:0,se=U.get(ht),Va=x.state.lights;if(Y===!0&&(_t===!0||D!==N)){const Cn=D===N&&ht.id===it;Ct.setState(ht,D,Cn)}let ze=!1;ht.version===se.__version?(se.needsLights&&se.lightsStateVersion!==Va.state.version||se.outputColorSpace!==Kt||ft.isBatchedMesh&&se.batching===!1||!ft.isBatchedMesh&&se.batching===!0||ft.isInstancedMesh&&se.instancing===!1||!ft.isInstancedMesh&&se.instancing===!0||ft.isSkinnedMesh&&se.skinning===!1||!ft.isSkinnedMesh&&se.skinning===!0||ft.isInstancedMesh&&se.instancingColor===!0&&ft.instanceColor===null||ft.isInstancedMesh&&se.instancingColor===!1&&ft.instanceColor!==null||ft.isInstancedMesh&&se.instancingMorph===!0&&ft.morphTexture===null||ft.isInstancedMesh&&se.instancingMorph===!1&&ft.morphTexture!==null||se.envMap!==$t||ht.fog===!0&&se.fog!==Nt||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==Ct.numPlanes||se.numIntersection!==Ct.numIntersection)||se.vertexAlphas!==ae||se.vertexTangents!==re||se.morphTargets!==ee||se.morphNormals!==Pe||se.morphColors!==Ve||se.toneMapping!==We||se.morphTargetsCount!==Te)&&(ze=!0):(ze=!0,se.__version=ht.version);let gi=se.currentProgram;ze===!0&&(gi=xr(ht,Z,ft));let Tn=!1,ea=!1,Ls=!1;const Qe=gi.getUniforms(),si=se.uniforms;if(Wt.useProgram(gi.program)&&(Tn=!0,ea=!0,Ls=!0),ht.id!==it&&(it=ht.id,ea=!0),Tn||N!==D){Qe.setValue(et,"projectionMatrix",D.projectionMatrix),Qe.setValue(et,"viewMatrix",D.matrixWorldInverse);const Cn=Qe.map.cameraPosition;Cn!==void 0&&Cn.setValue(et,Ft.setFromMatrixPosition(D.matrixWorld)),be.logarithmicDepthBuffer&&Qe.setValue(et,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&Qe.setValue(et,"isOrthographic",D.isOrthographicCamera===!0),N!==D&&(N=D,ea=!0,Ls=!0)}if(ft.isSkinnedMesh){Qe.setOptional(et,ft,"bindMatrix"),Qe.setOptional(et,ft,"bindMatrixInverse");const Cn=ft.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Qe.setValue(et,"boneTexture",Cn.boneTexture,T))}ft.isBatchedMesh&&(Qe.setOptional(et,ft,"batchingTexture"),Qe.setValue(et,"batchingTexture",ft._matricesTexture,T));const na=at.morphAttributes;if((na.position!==void 0||na.normal!==void 0||na.color!==void 0)&&It.update(ft,at,gi),(ea||se.receiveShadow!==ft.receiveShadow)&&(se.receiveShadow=ft.receiveShadow,Qe.setValue(et,"receiveShadow",ft.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(si.envMap.value=$t,si.flipEnvMap.value=$t.isCubeTexture&&$t.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&Z.environment!==null&&(si.envMapIntensity.value=Z.environmentIntensity),ea&&(Qe.setValue(et,"toneMappingExposure",w.toneMappingExposure),se.needsLights&&$i(si,Ls),Nt&&ht.fog===!0&&Rt.refreshFogUniforms(si,Nt),Rt.refreshMaterialUniforms(si,ht,$,B,x.state.transmissionRenderTarget),Mc.upload(et,Ds(se),si,T)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(Mc.upload(et,Ds(se),si,T),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&Qe.setValue(et,"center",ft.center),Qe.setValue(et,"modelViewMatrix",ft.modelViewMatrix),Qe.setValue(et,"normalMatrix",ft.normalMatrix),Qe.setValue(et,"modelMatrix",ft.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const Cn=ht.uniformsGroups;for(let vn=0,Ns=Cn.length;vn<Ns;vn++){const Os=Cn[vn];pe.update(Os,gi),pe.bind(Os,gi)}}return gi}function $i(D,Z){D.ambientLightColor.needsUpdate=Z,D.lightProbe.needsUpdate=Z,D.directionalLights.needsUpdate=Z,D.directionalLightShadows.needsUpdate=Z,D.pointLights.needsUpdate=Z,D.pointLightShadows.needsUpdate=Z,D.spotLights.needsUpdate=Z,D.spotLightShadows.needsUpdate=Z,D.rectAreaLights.needsUpdate=Z,D.hemisphereLights.needsUpdate=Z}function ta(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(D,Z,at){U.get(D.texture).__webglTexture=Z,U.get(D.depthTexture).__webglTexture=at;const ht=U.get(D);ht.__hasExternalTextures=!0,ht.__autoAllocateDepthBuffer=at===void 0,ht.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ht.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,Z){const at=U.get(D);at.__webglFramebuffer=Z,at.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(D,Z=0,at=0){P=D,k=Z,H=at;let ht=!0,ft=null,Nt=!1,Gt=!1;if(D){const $t=U.get(D);$t.__useDefaultFramebuffer!==void 0?(Wt.bindFramebuffer(et.FRAMEBUFFER,null),ht=!1):$t.__webglFramebuffer===void 0?T.setupRenderTarget(D):$t.__hasExternalTextures&&T.rebindTextures(D,U.get(D.texture).__webglTexture,U.get(D.depthTexture).__webglTexture);const ae=D.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Gt=!0);const re=U.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(re[Z])?ft=re[Z][at]:ft=re[Z],Nt=!0):D.samples>0&&T.useMultisampledRTT(D)===!1?ft=U.get(D).__webglMultisampledFramebuffer:Array.isArray(re)?ft=re[at]:ft=re,A.copy(D.viewport),Q.copy(D.scissor),st=D.scissorTest}else A.copy(L).multiplyScalar($).floor(),Q.copy(tt).multiplyScalar($).floor(),st=Tt;if(Wt.bindFramebuffer(et.FRAMEBUFFER,ft)&&ht&&Wt.drawBuffers(D,ft),Wt.viewport(A),Wt.scissor(Q),Wt.setScissorTest(st),Nt){const $t=U.get(D.texture);et.framebufferTexture2D(et.FRAMEBUFFER,et.COLOR_ATTACHMENT0,et.TEXTURE_CUBE_MAP_POSITIVE_X+Z,$t.__webglTexture,at)}else if(Gt){const $t=U.get(D.texture),ae=Z||0;et.framebufferTextureLayer(et.FRAMEBUFFER,et.COLOR_ATTACHMENT0,$t.__webglTexture,at||0,ae)}it=-1},this.readRenderTargetPixels=function(D,Z,at,ht,ft,Nt,Gt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=U.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Gt!==void 0&&(Kt=Kt[Gt]),Kt){Wt.bindFramebuffer(et.FRAMEBUFFER,Kt);try{const $t=D.texture,ae=$t.format,re=$t.type;if(ae!==Ai&&le.convert(ae)!==et.getParameter(et.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ee=re===Tc&&(qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float"));if(re!==Ia&&le.convert(re)!==et.getParameter(et.IMPLEMENTATION_COLOR_READ_TYPE)&&re!==Na&&!ee){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=D.width-ht&&at>=0&&at<=D.height-ft&&et.readPixels(Z,at,ht,ft,le.convert(ae),le.convert(re),Nt)}finally{const $t=P!==null?U.get(P).__webglFramebuffer:null;Wt.bindFramebuffer(et.FRAMEBUFFER,$t)}}},this.copyFramebufferToTexture=function(D,Z,at=0){const ht=Math.pow(2,-at),ft=Math.floor(Z.image.width*ht),Nt=Math.floor(Z.image.height*ht);T.setTexture2D(Z,0),et.copyTexSubImage2D(et.TEXTURE_2D,at,0,0,D.x,D.y,ft,Nt),Wt.unbindTexture()},this.copyTextureToTexture=function(D,Z,at,ht=0){const ft=Z.image.width,Nt=Z.image.height,Gt=le.convert(at.format),Kt=le.convert(at.type);T.setTexture2D(at,0),et.pixelStorei(et.UNPACK_FLIP_Y_WEBGL,at.flipY),et.pixelStorei(et.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),et.pixelStorei(et.UNPACK_ALIGNMENT,at.unpackAlignment),Z.isDataTexture?et.texSubImage2D(et.TEXTURE_2D,ht,D.x,D.y,ft,Nt,Gt,Kt,Z.image.data):Z.isCompressedTexture?et.compressedTexSubImage2D(et.TEXTURE_2D,ht,D.x,D.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Gt,Z.mipmaps[0].data):et.texSubImage2D(et.TEXTURE_2D,ht,D.x,D.y,Gt,Kt,Z.image),ht===0&&at.generateMipmaps&&et.generateMipmap(et.TEXTURE_2D),Wt.unbindTexture()},this.copyTextureToTexture3D=function(D,Z,at,ht,ft=0){const Nt=Math.round(D.max.x-D.min.x),Gt=Math.round(D.max.y-D.min.y),Kt=D.max.z-D.min.z+1,$t=le.convert(ht.format),ae=le.convert(ht.type);let re;if(ht.isData3DTexture)T.setTexture3D(ht,0),re=et.TEXTURE_3D;else if(ht.isDataArrayTexture||ht.isCompressedArrayTexture)T.setTexture2DArray(ht,0),re=et.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}et.pixelStorei(et.UNPACK_FLIP_Y_WEBGL,ht.flipY),et.pixelStorei(et.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ht.premultiplyAlpha),et.pixelStorei(et.UNPACK_ALIGNMENT,ht.unpackAlignment);const ee=et.getParameter(et.UNPACK_ROW_LENGTH),Pe=et.getParameter(et.UNPACK_IMAGE_HEIGHT),Ve=et.getParameter(et.UNPACK_SKIP_PIXELS),We=et.getParameter(et.UNPACK_SKIP_ROWS),Wn=et.getParameter(et.UNPACK_SKIP_IMAGES),Te=at.isCompressedTexture?at.mipmaps[ft]:at.image;et.pixelStorei(et.UNPACK_ROW_LENGTH,Te.width),et.pixelStorei(et.UNPACK_IMAGE_HEIGHT,Te.height),et.pixelStorei(et.UNPACK_SKIP_PIXELS,D.min.x),et.pixelStorei(et.UNPACK_SKIP_ROWS,D.min.y),et.pixelStorei(et.UNPACK_SKIP_IMAGES,D.min.z),at.isDataTexture||at.isData3DTexture?et.texSubImage3D(re,ft,Z.x,Z.y,Z.z,Nt,Gt,Kt,$t,ae,Te.data):ht.isCompressedArrayTexture?et.compressedTexSubImage3D(re,ft,Z.x,Z.y,Z.z,Nt,Gt,Kt,$t,Te.data):et.texSubImage3D(re,ft,Z.x,Z.y,Z.z,Nt,Gt,Kt,$t,ae,Te),et.pixelStorei(et.UNPACK_ROW_LENGTH,ee),et.pixelStorei(et.UNPACK_IMAGE_HEIGHT,Pe),et.pixelStorei(et.UNPACK_SKIP_PIXELS,Ve),et.pixelStorei(et.UNPACK_SKIP_ROWS,We),et.pixelStorei(et.UNPACK_SKIP_IMAGES,Wn),ft===0&&ht.generateMipmaps&&et.generateMipmap(re),Wt.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?T.setTextureCube(D,0):D.isData3DTexture?T.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?T.setTexture2DArray(D,0):T.setTexture2D(D,0),Wt.unbindTexture()},this.resetState=function(){k=0,H=0,P=null,Wt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Hh?"display-p3":"srgb",i.unpackColorSpace=Le.workingColorSpace===Lc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class TA extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class jh extends Qi{constructor(e=1,i=1,r=1,l=32,u=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),u=Math.floor(u);const g=[],v=[],S=[],E=[];let C=0;const R=[],x=r/2;let _=0;I(),h===!1&&(e>0&&w(!0),i>0&&w(!1)),this.setIndex(g),this.setAttribute("position",new qn(v,3)),this.setAttribute("normal",new qn(S,3)),this.setAttribute("uv",new qn(E,2));function I(){const F=new X,k=new X;let H=0;const P=(i-e)/r;for(let it=0;it<=u;it++){const N=[],A=it/u,Q=A*(i-e)+e;for(let st=0;st<=l;st++){const V=st/l,mt=V*p+d,dt=Math.sin(mt),B=Math.cos(mt);k.x=Q*dt,k.y=-A*r+x,k.z=Q*B,v.push(k.x,k.y,k.z),F.set(dt,P,B).normalize(),S.push(F.x,F.y,F.z),E.push(V,1-A),N.push(C++)}R.push(N)}for(let it=0;it<l;it++)for(let N=0;N<u;N++){const A=R[N][it],Q=R[N+1][it],st=R[N+1][it+1],V=R[N][it+1];g.push(A,Q,V),g.push(Q,st,V),H+=6}m.addGroup(_,H,0),_+=H}function w(F){const k=C,H=new ne,P=new X;let it=0;const N=F===!0?e:i,A=F===!0?1:-1;for(let st=1;st<=l;st++)v.push(0,x*A,0),S.push(0,A,0),E.push(.5,.5),C++;const Q=C;for(let st=0;st<=l;st++){const mt=st/l*p+d,dt=Math.cos(mt),B=Math.sin(mt);P.x=N*B,P.y=x*A,P.z=N*dt,v.push(P.x,P.y,P.z),S.push(0,A,0),H.x=dt*.5+.5,H.y=B*.5*A+.5,E.push(H.x,H.y),C++}for(let st=0;st<l;st++){const V=k+st,mt=Q+st;F===!0?g.push(mt,mt+1,V):g.push(mt+1,mt,V),it+=3}m.addGroup(_,it,F===!0?1:2),_+=it}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mi extends Qi{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+d,Math.PI);let m=0;const g=[],v=new X,S=new X,E=[],C=[],R=[],x=[];for(let _=0;_<=r;_++){const I=[],w=_/r;let F=0;_===0&&h===0?F=.5/i:_===r&&p===Math.PI&&(F=-.5/i);for(let k=0;k<=i;k++){const H=k/i;v.x=-e*Math.cos(l+H*u)*Math.sin(h+w*d),v.y=e*Math.cos(h+w*d),v.z=e*Math.sin(l+H*u)*Math.sin(h+w*d),C.push(v.x,v.y,v.z),S.copy(v).normalize(),R.push(S.x,S.y,S.z),x.push(H+F,1-w),I.push(m++)}g.push(I)}for(let _=0;_<r;_++)for(let I=0;I<i;I++){const w=g[_][I+1],F=g[_][I],k=g[_+1][I],H=g[_+1][I+1];(_!==0||h>0)&&E.push(w,F,H),(_!==r-1||p<Math.PI)&&E.push(F,k,H)}this.setIndex(E),this.setAttribute("position",new qn(C,3)),this.setAttribute("normal",new qn(R,3)),this.setAttribute("uv",new qn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ni extends Go{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=y0,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qh extends En{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const Mh=new tn,K_=new X,Q_=new X;class bA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kh,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;K_.setFromMatrixPosition(e.matrixWorld),i.position.copy(K_),Q_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Q_),i.updateMatrixWorld(),Mh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Mh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class AA extends bA{constructor(){super(new P0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class RA extends qh{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new AA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class CA extends qh{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class J_{constructor(e=1,i=0,r=0){return this.radius=e,this.phi=i,this.theta=r,this}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Rn(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fh);const $_={type:"change"},Eh={type:"start"},t0={type:"end"},xc=new A0,e0=new Ua,wA=Math.cos(70*dy.DEG2RAD);class DA extends vr{constructor(e,i){super(),this.object=e,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$r.ROTATE,MIDDLE:$r.DOLLY,RIGHT:$r.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",Ct),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ct),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent($_),r.update(),u=l.NONE},this.update=function(){const M=new X,ct=new Ki().setFromUnitVectors(e.up,new X(0,1,0)),vt=ct.clone().invert(),Lt=new X,Bt=new Ki,ge=new X,ue=2*Math.PI;return function(Xe=null){const Se=r.object.position;M.copy(Se).sub(r.target),M.applyQuaternion(ct),d.setFromVector3(M),r.autoRotate&&u===l.NONE&&st(A(Xe)),r.enableDamping?(d.theta+=p.theta*r.dampingFactor,d.phi+=p.phi*r.dampingFactor):(d.theta+=p.theta,d.phi+=p.phi);let He=r.minAzimuthAngle,je=r.maxAzimuthAngle;isFinite(He)&&isFinite(je)&&(He<-Math.PI?He+=ue:He>Math.PI&&(He-=ue),je<-Math.PI?je+=ue:je>Math.PI&&(je-=ue),He<=je?d.theta=Math.max(He,Math.min(je,d.theta)):d.theta=d.theta>(He+je)/2?Math.max(He,d.theta):Math.min(je,d.theta)),d.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,d.phi)),d.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor);let qe=!1;if(r.zoomToCursor&&H||r.object.isOrthographicCamera)d.radius=L(d.radius);else{const Ae=d.radius;d.radius=L(d.radius*m),qe=Ae!=d.radius}if(M.setFromSpherical(d),M.applyQuaternion(vt),Se.copy(r.target).add(M),r.object.lookAt(r.target),r.enableDamping===!0?(p.theta*=1-r.dampingFactor,p.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(p.set(0,0,0),g.set(0,0,0)),r.zoomToCursor&&H){let Ae=null;if(r.object.isPerspectiveCamera){const Ge=M.length();Ae=L(Ge*m);const zn=Ge-Ae;r.object.position.addScaledVector(F,zn),r.object.updateMatrixWorld(),qe=!!zn}else if(r.object.isOrthographicCamera){const Ge=new X(k.x,k.y,0);Ge.unproject(r.object);const zn=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),qe=zn!==r.object.zoom;const ri=new X(k.x,k.y,0);ri.unproject(r.object),r.object.position.sub(ri).add(Ge),r.object.updateMatrixWorld(),Ae=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;Ae!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(Ae).add(r.object.position):(xc.origin.copy(r.object.position),xc.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(xc.direction))<wA?e.lookAt(r.target):(e0.setFromNormalAndCoplanarPoint(r.object.up,r.target),xc.intersectPlane(e0,r.target))))}else if(r.object.isOrthographicCamera){const Ae=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),Ae!==r.object.zoom&&(r.object.updateProjectionMatrix(),qe=!0)}return m=1,H=!1,qe||Lt.distanceToSquared(r.object.position)>h||8*(1-Bt.dot(r.object.quaternion))>h||ge.distanceToSquared(r.target)>h?(r.dispatchEvent($_),Lt.copy(r.object.position),Bt.copy(r.object.quaternion),ge.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",It),r.domElement.removeEventListener("pointerdown",W),r.domElement.removeEventListener("pointercancel",K),r.domElement.removeEventListener("wheel",pt),r.domElement.removeEventListener("pointermove",lt),r.domElement.removeEventListener("pointerup",K),r.domElement.getRootNode().removeEventListener("keydown",Dt,{capture:!0}),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",Ct),r._domElementKeyEvents=null)};const r=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const h=1e-6,d=new J_,p=new J_;let m=1;const g=new X,v=new ne,S=new ne,E=new ne,C=new ne,R=new ne,x=new ne,_=new ne,I=new ne,w=new ne,F=new X,k=new ne;let H=!1;const P=[],it={};let N=!1;function A(M){return M!==null?2*Math.PI/60*r.autoRotateSpeed*M:2*Math.PI/60/60*r.autoRotateSpeed}function Q(M){const ct=Math.abs(M*.01);return Math.pow(.95,r.zoomSpeed*ct)}function st(M){p.theta-=M}function V(M){p.phi-=M}const mt=function(){const M=new X;return function(vt,Lt){M.setFromMatrixColumn(Lt,0),M.multiplyScalar(-vt),g.add(M)}}(),dt=function(){const M=new X;return function(vt,Lt){r.screenSpacePanning===!0?M.setFromMatrixColumn(Lt,1):(M.setFromMatrixColumn(Lt,0),M.crossVectors(r.object.up,M)),M.multiplyScalar(vt),g.add(M)}}(),B=function(){const M=new X;return function(vt,Lt){const Bt=r.domElement;if(r.object.isPerspectiveCamera){const ge=r.object.position;M.copy(ge).sub(r.target);let ue=M.length();ue*=Math.tan(r.object.fov/2*Math.PI/180),mt(2*vt*ue/Bt.clientHeight,r.object.matrix),dt(2*Lt*ue/Bt.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(mt(vt*(r.object.right-r.object.left)/r.object.zoom/Bt.clientWidth,r.object.matrix),dt(Lt*(r.object.top-r.object.bottom)/r.object.zoom/Bt.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function $(M){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function j(M){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function yt(M,ct){if(!r.zoomToCursor)return;H=!0;const vt=r.domElement.getBoundingClientRect(),Lt=M-vt.left,Bt=ct-vt.top,ge=vt.width,ue=vt.height;k.x=Lt/ge*2-1,k.y=-(Bt/ue)*2+1,F.set(k.x,k.y,1).unproject(r.object).sub(r.object.position).normalize()}function L(M){return Math.max(r.minDistance,Math.min(r.maxDistance,M))}function tt(M){v.set(M.clientX,M.clientY)}function Tt(M){yt(M.clientX,M.clientX),_.set(M.clientX,M.clientY)}function bt(M){C.set(M.clientX,M.clientY)}function Y(M){S.set(M.clientX,M.clientY),E.subVectors(S,v).multiplyScalar(r.rotateSpeed);const ct=r.domElement;st(2*Math.PI*E.x/ct.clientHeight),V(2*Math.PI*E.y/ct.clientHeight),v.copy(S),r.update()}function _t(M){I.set(M.clientX,M.clientY),w.subVectors(I,_),w.y>0?$(Q(w.y)):w.y<0&&j(Q(w.y)),_.copy(I),r.update()}function Et(M){R.set(M.clientX,M.clientY),x.subVectors(R,C).multiplyScalar(r.panSpeed),B(x.x,x.y),C.copy(R),r.update()}function wt(M){yt(M.clientX,M.clientY),M.deltaY<0?j(Q(M.deltaY)):M.deltaY>0&&$(Q(M.deltaY)),r.update()}function Ft(M){let ct=!1;switch(M.code){case r.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?V(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):B(0,r.keyPanSpeed),ct=!0;break;case r.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?V(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):B(0,-r.keyPanSpeed),ct=!0;break;case r.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?st(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):B(r.keyPanSpeed,0),ct=!0;break;case r.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?st(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):B(-r.keyPanSpeed,0),ct=!0;break}ct&&(M.preventDefault(),r.update())}function jt(M){if(P.length===1)v.set(M.pageX,M.pageY);else{const ct=pe(M),vt=.5*(M.pageX+ct.x),Lt=.5*(M.pageY+ct.y);v.set(vt,Lt)}}function oe(M){if(P.length===1)C.set(M.pageX,M.pageY);else{const ct=pe(M),vt=.5*(M.pageX+ct.x),Lt=.5*(M.pageY+ct.y);C.set(vt,Lt)}}function et(M){const ct=pe(M),vt=M.pageX-ct.x,Lt=M.pageY-ct.y,Bt=Math.sqrt(vt*vt+Lt*Lt);_.set(0,Bt)}function Jt(M){r.enableZoom&&et(M),r.enablePan&&oe(M)}function qt(M){r.enableZoom&&et(M),r.enableRotate&&jt(M)}function be(M){if(P.length==1)S.set(M.pageX,M.pageY);else{const vt=pe(M),Lt=.5*(M.pageX+vt.x),Bt=.5*(M.pageY+vt.y);S.set(Lt,Bt)}E.subVectors(S,v).multiplyScalar(r.rotateSpeed);const ct=r.domElement;st(2*Math.PI*E.x/ct.clientHeight),V(2*Math.PI*E.y/ct.clientHeight),v.copy(S)}function Wt(M){if(P.length===1)R.set(M.pageX,M.pageY);else{const ct=pe(M),vt=.5*(M.pageX+ct.x),Lt=.5*(M.pageY+ct.y);R.set(vt,Lt)}x.subVectors(R,C).multiplyScalar(r.panSpeed),B(x.x,x.y),C.copy(R)}function Ut(M){const ct=pe(M),vt=M.pageX-ct.x,Lt=M.pageY-ct.y,Bt=Math.sqrt(vt*vt+Lt*Lt);I.set(0,Bt),w.set(0,Math.pow(I.y/_.y,r.zoomSpeed)),$(w.y),_.copy(I);const ge=(M.pageX+ct.x)*.5,ue=(M.pageY+ct.y)*.5;yt(ge,ue)}function U(M){r.enableZoom&&Ut(M),r.enablePan&&Wt(M)}function T(M){r.enableZoom&&Ut(M),r.enableRotate&&be(M)}function W(M){r.enabled!==!1&&(P.length===0&&(r.domElement.setPointerCapture(M.pointerId),r.domElement.addEventListener("pointermove",lt),r.domElement.addEventListener("pointerup",K)),!le(M)&&(kt(M),M.pointerType==="touch"?Pt(M):ut(M)))}function lt(M){r.enabled!==!1&&(M.pointerType==="touch"?zt(M):At(M))}function K(M){switch(Zt(M),P.length){case 0:r.domElement.releasePointerCapture(M.pointerId),r.domElement.removeEventListener("pointermove",lt),r.domElement.removeEventListener("pointerup",K),r.dispatchEvent(t0),u=l.NONE;break;case 1:const ct=P[0],vt=it[ct];Pt({pointerId:ct,pageX:vt.x,pageY:vt.y});break}}function ut(M){let ct;switch(M.button){case 0:ct=r.mouseButtons.LEFT;break;case 1:ct=r.mouseButtons.MIDDLE;break;case 2:ct=r.mouseButtons.RIGHT;break;default:ct=-1}switch(ct){case $r.DOLLY:if(r.enableZoom===!1)return;Tt(M),u=l.DOLLY;break;case $r.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(r.enablePan===!1)return;bt(M),u=l.PAN}else{if(r.enableRotate===!1)return;tt(M),u=l.ROTATE}break;case $r.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(r.enableRotate===!1)return;tt(M),u=l.ROTATE}else{if(r.enablePan===!1)return;bt(M),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(Eh)}function At(M){switch(u){case l.ROTATE:if(r.enableRotate===!1)return;Y(M);break;case l.DOLLY:if(r.enableZoom===!1)return;_t(M);break;case l.PAN:if(r.enablePan===!1)return;Et(M);break}}function pt(M){r.enabled===!1||r.enableZoom===!1||u!==l.NONE||(M.preventDefault(),r.dispatchEvent(Eh),wt(Rt(M)),r.dispatchEvent(t0))}function Rt(M){const ct=M.deltaMode,vt={clientX:M.clientX,clientY:M.clientY,deltaY:M.deltaY};switch(ct){case 1:vt.deltaY*=16;break;case 2:vt.deltaY*=100;break}return M.ctrlKey&&!N&&(vt.deltaY*=10),vt}function Dt(M){M.key==="Control"&&(N=!0,r.domElement.getRootNode().addEventListener("keyup",St,{passive:!0,capture:!0}))}function St(M){M.key==="Control"&&(N=!1,r.domElement.getRootNode().removeEventListener("keyup",St,{passive:!0,capture:!0}))}function Ct(M){r.enabled===!1||r.enablePan===!1||Ft(M)}function Pt(M){switch(ie(M),P.length){case 1:switch(r.touches.ONE){case ts.ROTATE:if(r.enableRotate===!1)return;jt(M),u=l.TOUCH_ROTATE;break;case ts.PAN:if(r.enablePan===!1)return;oe(M),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(r.touches.TWO){case ts.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Jt(M),u=l.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;qt(M),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(Eh)}function zt(M){switch(ie(M),u){case l.TOUCH_ROTATE:if(r.enableRotate===!1)return;be(M),r.update();break;case l.TOUCH_PAN:if(r.enablePan===!1)return;Wt(M),r.update();break;case l.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;U(M),r.update();break;case l.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;T(M),r.update();break;default:u=l.NONE}}function It(M){r.enabled!==!1&&M.preventDefault()}function kt(M){P.push(M.pointerId)}function Zt(M){delete it[M.pointerId];for(let ct=0;ct<P.length;ct++)if(P[ct]==M.pointerId){P.splice(ct,1);return}}function le(M){for(let ct=0;ct<P.length;ct++)if(P[ct]==M.pointerId)return!0;return!1}function ie(M){let ct=it[M.pointerId];ct===void 0&&(ct=new ne,it[M.pointerId]=ct),ct.set(M.pageX,M.pageY)}function pe(M){const ct=M.pointerId===P[0]?P[1]:P[0];return it[ct]}r.domElement.addEventListener("contextmenu",It),r.domElement.addEventListener("pointerdown",W),r.domElement.addEventListener("pointercancel",K),r.domElement.addEventListener("wheel",pt,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",Dt,{passive:!0,capture:!0}),this.update()}}const Oh=0,Dc=500,n0=250,pi=300,Es=350,i0=.08,Cs=.5,V0=.35,k0=.45,UA=.6,LA=.45,NA=.25,OA=.4,a0=.65,r0=2.5*Cs,Th=(V0+k0)*.95,s0=1.4,PA=1.1,zA=1.5,IA=1.3,o0=1.35,fr=2.5*Cs,Ph=4,zh=4,Ih=3,BA=Ph*zh*Ih,X0=30,ko=10,j0=ko*2,q0=ko*3,FA=ko*.9,zo=8,Sc=5,Io=Math.PI*Cs*Cs,HA=Io*7,GA=5e-5,VA=1e-4,bh=3e-4,kA=1.25,XA=1.35,vs=(o,e,i)=>{let r,l,u;switch(e){case"crystalline":l=BA,u=Io;break;case"amorphousPolymer":l=X0,u=Io;break;case"sodiumSilicate":l=ko+j0+q0,u=Io*.8;break;case"sodiumBenzoate":l=zo,u=HA;break;default:l=1,u=Io}const h=l*u*1.1*(1+GA*o);if(e==="crystalline")o<Es?r=h:r=l*u*1.5*(1+bh*(o-Es));else{const p=i==="slow"?kA:XA,m=l*u*p;o>pi?r=l*u*1.5*(p*.9)*(1+bh*(pi-Es))*(1+bh*(o-pi)):r=m*(1+VA*(o-pi))}r=Math.max(r,h*.98);const d=Math.max(0,r-h);return{totalVolume:r,freeVolume:d,crystallineEquivalentVolume:h}},jA=({temperature:o,setTemperature:e,materialType:i,setMaterialType:r,coolingRate:l,setCoolingRate:u,handleReset:h})=>O.jsxs("div",{className:"panel controls-panel",children:[O.jsx("h2",{children:"Controls"}),O.jsxs("div",{className:"control-group",children:[O.jsxs("label",{htmlFor:"temperature",children:["Temperature: ",O.jsxs("output",{htmlFor:"temperature",children:[o," K"]})]}),O.jsx("input",{type:"range",id:"temperature",min:Oh,max:Dc,value:o,onChange:d=>e(parseInt(d.target.value)),"aria-valuemin":Oh,"aria-valuemax":Dc,"aria-valuenow":o,"aria-label":"Temperature control"})]}),O.jsxs("div",{className:"control-group",children:[O.jsx("label",{children:"Material Type:"}),O.jsxs("div",{className:"radio-group",role:"radiogroup","aria-label":"Material type",children:[O.jsxs("label",{children:[O.jsx("input",{type:"radio",name:"materialType",value:"amorphousPolymer",checked:i==="amorphousPolymer",onChange:()=>r("amorphousPolymer")})," Amorphous Polymer"]}),O.jsxs("label",{children:[O.jsx("input",{type:"radio",name:"materialType",value:"sodiumSilicate",checked:i==="sodiumSilicate",onChange:()=>r("sodiumSilicate")})," Sodium Silicate Glass"]}),O.jsxs("label",{children:[O.jsx("input",{type:"radio",name:"materialType",value:"sodiumBenzoate",checked:i==="sodiumBenzoate",onChange:()=>r("sodiumBenzoate")})," Sodium Benzoate"]}),O.jsxs("label",{children:[O.jsx("input",{type:"radio",name:"materialType",value:"crystalline",checked:i==="crystalline",onChange:()=>r("crystalline")})," Crystalline"]})]})]}),i!=="crystalline"&&O.jsxs("div",{className:"control-group",children:[O.jsxs("label",{children:["Cooling Rate (affects structure below T",O.jsx("sub",{children:"g"}),"):"]}),O.jsxs("div",{className:"radio-group",role:"radiogroup","aria-label":"Cooling rate",children:[O.jsxs("label",{children:[O.jsx("input",{type:"radio",name:"coolingRate",value:"slow",checked:l==="slow",onChange:()=>u("slow")})," Slow"]}),O.jsxs("label",{children:[O.jsx("input",{type:"radio",name:"coolingRate",value:"fast",checked:l==="fast",onChange:()=>u("fast")})," Fast"]})]})]}),O.jsx("button",{onClick:h,"aria-label":"Reset simulation parameters",children:"Reset Simulation"})]}),qA=({temperature:o,materialType:e,coolingRate:i,freeVolumeRatio:r})=>{const l=Ke.useRef(null),u=Ke.useRef(null),h=Ke.useRef(null),d=Ke.useRef(null),p=Ke.useRef(null),m=Ke.useRef(null),g=Ke.useRef([]),v=Ke.useRef([]),S=Ke.useRef([]),E=29695,C=16766720,R=14741759,x=32768,_=16711680,I=205,w=8421504,F=7122142,k=13882323,H=16711680,P=14423100,it=4210752,N=new Mi(Cs,16,16),A=new Mi(V0,12,12),Q=new Mi(k0,12,12),st=new Mi(UA,16,16),V=new jh(i0,i0,1,8,1),mt=new Mi(LA,12,12),dt=new Mi(NA,8,8),B=new Mi(OA,12,12),$=new Mi(a0,16,16),j=new ni({color:11584734,roughness:.4,metalness:.6}),yt=new ni({color:E,roughness:.5,metalness:.1}),L=new ni({color:C,roughness:.3,metalness:.4}),tt=new ni({color:_,roughness:.5,metalness:.1}),Tt=new ni({color:I,roughness:.5,metalness:.1}),bt=new ni({color:x,roughness:.4,metalness:.2}),Y=new ni({color:w,roughness:.7,metalness:0}),_t=new ni({color:F,roughness:.5,metalness:.1}),Et=new ni({color:k,roughness:.6,metalness:0}),wt=new ni({color:H,roughness:.5,metalness:.1}),Ft=new ni({color:P,roughness:.4,metalness:.2}),jt=new ni({color:it,roughness:.7,metalness:0}),oe=()=>{h.current&&(S.current.forEach(Ut=>{var U;return(U=h.current)==null?void 0:U.remove(Ut.group)}),g.current.forEach(Ut=>{var U;return(U=h.current)==null?void 0:U.remove(Ut.mesh)}),v.current.forEach(Ut=>{var U;return(U=h.current)==null?void 0:U.remove(Ut.mesh)}),h.current.children=h.current.children.filter(Ut=>Ut instanceof qh||Ut instanceof Vh)),g.current=[],v.current=[],S.current=[]},et=(Ut,U,T,W,lt,K,ut)=>{const At=new dn(W,lt);return At.position.copy(K),Ut.add(At),g.current.push({id:U,type:T,mesh:At,basePosition:K.clone(),velocity:new X,moleculeId:ut}),At},Jt=(Ut,U,T,W,lt,K)=>{const ut=new dn(V,lt),At=T.position,pt=W.position,Rt=new X().subVectors(pt,At),Dt=Rt.length();return ut.position.copy(At).addScaledVector(Rt,.5),ut.quaternion.setFromUnitVectors(new X(0,1,0),Rt.clone().normalize()),ut.scale.y=Dt,Ut.add(ut),v.current.push({id:U,mesh:ut,atom1Id:g.current.find(St=>St.mesh===T).id,atom2Id:g.current.find(St=>St.mesh===W).id,moleculeId:K}),ut},qt=Ut=>{const U=new Oa;let T=0;const W=()=>`${Ut}-atom-${T++}`,lt=[];for(let kt=0;kt<6;kt++){const Zt=kt/6*Math.PI*2,le=s0*Math.cos(Zt),ie=s0*Math.sin(Zt);lt.push(et(U,W(),"C_benzoate",mt,_t,new X(le,ie,0),Ut))}for(let kt=0;kt<6;kt++)Jt(U,`${Ut}-bond-c${kt}-c${(kt+1)%6}`,lt[kt],lt[(kt+1)%6],jt,Ut);for(let kt=0;kt<5;kt++){const Zt=lt[kt+1],le=Zt.position.clone().normalize().multiplyScalar(PA),ie=Zt.position.clone().add(le),pe=et(U,W(),"H_benzoate",dt,Et,ie,Ut);Jt(U,`${Ut}-bond-c${kt+1}-h`,Zt,pe,jt,Ut)}const K=lt[0].position,ut=K.clone().normalize().multiplyScalar(zA),At=K.clone().add(ut),pt=et(U,W(),"C_benzoate",mt,_t,At,Ut);Jt(U,`${Ut}-bond-c0-ccarboxyl`,lt[0],pt,jt,Ut);const Rt=ut.clone().normalize().applyQuaternion(new Ki().setFromAxisAngle(new X(0,0,1),Math.PI/3)),Dt=At.clone().add(Rt.multiplyScalar(IA)),St=et(U,W(),"O_benzoate",B,wt,Dt,Ut);Jt(U,`${Ut}-bond-ccarboxyl-o1`,pt,St,jt,Ut);const Ct=ut.clone().normalize().applyQuaternion(new Ki().setFromAxisAngle(new X(0,0,1),-Math.PI/3)),Pt=At.clone().add(Ct.multiplyScalar(o0)),zt=et(U,W(),"O_benzoate",B,wt,Pt,Ut);Jt(U,`${Ut}-bond-ccarboxyl-o2`,pt,zt,jt,Ut);const It=At.clone().add(ut.clone().normalize().multiplyScalar(o0+a0*.8));return et(U,W(),"Na_benzoate",$,Ft,It,Ut),U},be=Ke.useCallback(()=>{if(!l.current||u.current)return;const Ut=l.current.clientWidth,U=l.current.clientHeight,T=new EA({antialias:!0});T.setSize(Ut,U),T.setPixelRatio(window.devicePixelRatio),T.setClearColor(R),l.current.appendChild(T.domElement),u.current=T;const W=new TA;h.current=W;const lt=new ii(75,Ut/U,.1,1e3);d.current=lt;const K=new CA(16777215,.9);W.add(K);const ut=new RA(16777215,.8);ut.position.set(5,10,7.5),W.add(ut);const At=new DA(lt,T.domElement);At.enableDamping=!0,At.dampingFactor=.05,p.current=At;const pt=()=>{if(u.current&&d.current&&l.current){const Rt=l.current.clientWidth,Dt=l.current.clientHeight;u.current.setSize(Rt,Dt),d.current.aspect=Rt/Dt,d.current.updateProjectionMatrix()}};return window.addEventListener("resize",pt),()=>{var Rt,Dt;window.removeEventListener("resize",pt),l.current&&u.current&&l.current.removeChild(u.current.domElement),(Rt=u.current)==null||Rt.dispose(),u.current=null,(Dt=p.current)==null||Dt.dispose()}},[]),Wt=Ke.useCallback(()=>{if(oe(),!h.current||!d.current)return;let Ut=new X(0,0,0),U=10;if(e==="crystalline"){const T=-3*fr/2,W=-3*fr/2,lt=-2*fr/2;let K=0;for(let ut=0;ut<Ph;ut++)for(let At=0;At<zh;At++)for(let pt=0;pt<Ih;pt++){const Rt=new dn(N,j),Dt=new X(T+ut*fr,W+At*fr,lt+pt*fr);Rt.position.copy(Dt),h.current.add(Rt),g.current.push({id:`crys-${K++}`,type:"crystal",mesh:Rt,basePosition:Dt,velocity:new X})}U=fr*Math.max(Ph,zh,Ih)*.7}else if(e==="amorphousPolymer"){let T=new X;const W=r0,lt=i==="fast"?1.5:.8,K=new Oa;let ut=0;for(let pt=0;pt<X0;pt++){const Rt=new dn(N,yt),Dt=T.clone();Rt.position.copy(Dt),K.add(Rt);const St=`poly-${ut++}`;if(g.current.push({id:St,type:"polymer",mesh:Rt,basePosition:Dt,velocity:new X}),pt>0){const Pt=new dn(V,L);K.add(Pt);const zt=g.current[g.current.length-2].id;v.current.push({id:`polybond-${zt}-${St}`,mesh:Pt,atom1Id:zt,atom2Id:St})}const Ct=new X((Math.random()-.5)*W*lt,(Math.random()-.5)*W*lt,(Math.random()-.5)*W*lt);T.add(new X(W,0,0).add(Ct).normalize().multiplyScalar(W))}const At=new Ba().setFromObject(K);At.getCenter(Ut),K.position.sub(Ut),h.current.add(K),U=Math.max(At.max.x-At.min.x,At.max.y-At.min.y,At.max.z-At.min.z)*.6}else if(e==="sodiumSilicate"){const T=new Oa;let W=0;const lt=FA*(i==="fast"?1.2:1);for(let ut=0;ut<ko;ut++){const At=new X((Math.random()-.5)*lt,(Math.random()-.5)*lt,(Math.random()-.5)*lt),pt=new dn(A,tt);pt.position.copy(At),T.add(pt);const Rt=`si-${W++}`;g.current.push({id:Rt,type:"silicon_silicate",mesh:pt,basePosition:At.clone(),velocity:new X});for(let Dt=0;Dt<4&&!(g.current.filter(le=>le.type==="oxygen_silicate").length>=q0);Dt++){const St=Dt/4*Math.PI*2+(Math.random()-.5)*.5,Ct=(Math.random()-.5)*Math.PI*.6,Pt=new X(Math.cos(St)*Math.cos(Ct)*Th,Math.sin(Ct)*Th,Math.sin(St)*Math.cos(Ct)*Th),zt=new X().addVectors(At,Pt),It=new dn(Q,Tt);It.position.copy(zt),T.add(It);const kt=`o-${W++}`;g.current.push({id:kt,type:"oxygen_silicate",mesh:It,basePosition:zt.clone(),velocity:new X});const Zt=new dn(V,Y);T.add(Zt),v.current.push({id:`siobond-${Rt}-${kt}`,mesh:Zt,atom1Id:Rt,atom2Id:kt})}}for(let ut=0;ut<j0;ut++){const At=new X((Math.random()-.5)*lt*1.2,(Math.random()-.5)*lt*1.2,(Math.random()-.5)*lt*1.2),pt=new dn(st,bt);pt.position.copy(At),T.add(pt),g.current.push({id:`na-${W++}`,type:"sodium_silicate",mesh:pt,basePosition:At.clone(),velocity:new X})}const K=new Ba().setFromObject(T);K.getCenter(Ut),T.position.sub(Ut),h.current.add(T),U=Math.max(K.max.x-K.min.x,K.max.y-K.min.y,K.max.z-K.min.z)*.7}else if(e==="sodiumBenzoate"){const T=new Oa;for(let lt=0;lt<zo;lt++){const K=`benzoateMol-${lt}`,ut=qt(K),At=new X((Math.random()-.5)*Sc*(zo/3),(Math.random()-.5)*Sc*(zo/3),(Math.random()-.5)*Sc*(zo/3));ut.position.copy(At),ut.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),T.add(ut),S.current.push({id:K,group:ut,basePosition:At.clone(),velocity:new X,angularVelocity:new mi})}const W=new Ba().setFromObject(T);W.getCenter(Ut),T.position.sub(Ut),h.current.add(T),U=Math.max(W.max.x-W.min.x,W.max.y-W.min.y,W.max.z-W.min.z)*.6+Sc}d.current.position.set(Ut.x,Ut.y+U*.3,Ut.z+U*2+5),d.current.lookAt(Ut),p.current&&(p.current.target.copy(Ut),p.current.update())},[e,i]);return Ke.useEffect(()=>{const Ut=be();return()=>{Ut&&Ut()}},[be]),Ke.useEffect(()=>{Wt()},[Wt]),Ke.useEffect(()=>{if(!u.current||!h.current||!d.current||!p.current)return;const Ut=()=>{var W,lt;m.current=requestAnimationFrame(Ut);const U=o/Dc,T=1+r*(e==="sodiumBenzoate"?.4:.3);e==="sodiumBenzoate"?S.current.forEach(K=>{const ut=U*.02*(o>pi?2.5:.5),At=U*.005*(o>pi?2:.5);K.velocity.add(new X((Math.random()-.5)*ut,(Math.random()-.5)*ut,(Math.random()-.5)*ut)).multiplyScalar(.95),K.angularVelocity.x+=(Math.random()-.5)*At*.1,K.angularVelocity.y+=(Math.random()-.5)*At*.1,K.angularVelocity.z+=(Math.random()-.5)*At*.1,K.angularVelocity.x*=.92,K.angularVelocity.y*=.92,K.angularVelocity.z*=.92;const pt=K.basePosition.clone().multiplyScalar(T);pt.add(K.velocity),K.group.position.lerp(pt,.1),K.group.rotation.x+=K.angularVelocity.x,K.group.rotation.y+=K.angularVelocity.y,K.group.rotation.z+=K.angularVelocity.z,g.current.filter(Rt=>Rt.moleculeId===K.id).forEach(Rt=>{const Dt=U*.05*(Rt.mesh.geometry.parameters.radius||.3),St=Rt.basePosition.clone();St.add(new X((Math.random()-.5)*Dt,(Math.random()-.5)*Dt,(Math.random()-.5)*Dt)),Rt.mesh.position.lerp(St,.2)})}):(g.current.forEach(K=>{let ut=K.basePosition.clone().multiplyScalar(T),At=0,pt=0;const Rt=K.mesh.geometry.parameters.radius||Cs;if(e==="crystalline")At=U*Rt*.2;else{const Dt=o>pi?1.5:i==="fast"?1.1:.9;if(At=U*Rt*(o>pi?.4:.15),pt=U*Rt*(o>pi?.03:.005),K.velocity.add(new X((Math.random()-.5)*pt,(Math.random()-.5)*pt,(Math.random()-.5)*pt)).multiplyScalar(.92),ut.add(K.velocity),e==="amorphousPolymer"&&v.current.find(St=>St.atom2Id===K.id)){const St=v.current.find(Ct=>Ct.atom2Id===K.id);if(St){const Ct=g.current.find(Pt=>Pt.id===St.atom1Id);if(Ct){const Pt=r0*T*Dt,zt=new X().subVectors(K.mesh.position,Ct.mesh.position),It=zt.length();It>0&&(It>Pt*1.05?ut.sub(zt.normalize().multiplyScalar((It-Pt)*.05)):It<Pt*.95&&ut.add(zt.normalize().multiplyScalar((Pt-It)*.05)))}}}}ut.add(new X((Math.random()-.5)*At,(Math.random()-.5)*At,(Math.random()-.5)*At)),K.mesh.position.lerp(ut,.15)}),v.current.forEach(K=>{const ut=g.current.find(pt=>pt.id===K.atom1Id),At=g.current.find(pt=>pt.id===K.atom2Id);if(ut&&At){const pt=ut.mesh.position,Rt=At.mesh.position,Dt=new X().subVectors(Rt,pt),St=Dt.length();St>0&&(K.mesh.position.copy(pt).addScaledVector(Dt,.5),K.mesh.quaternion.setFromUnitVectors(new X(0,1,0),Dt.clone().normalize()),K.mesh.scale.y=St)}})),(W=p.current)==null||W.update(),(lt=u.current)==null||lt.render(h.current,d.current)};return Ut(),()=>{m.current&&cancelAnimationFrame(m.current)}},[o,e,i,r,Wt]),O.jsxs("div",{className:"panel visualization-panel",children:[O.jsx("h2",{children:"3D Atomic/Molecular Visualization"}),O.jsx("div",{ref:l,style:{width:"100%",height:"450px",borderRadius:"5px",overflow:"hidden"}}),O.jsx("p",{className:"viz-caption",children:"Drag to rotate, scroll to zoom, right-drag to pan."})]})},WA=({temperature:o,materialType:e,coolingRate:i})=>{const r=Ke.useRef(null),l=Ke.useRef(null);Ke.useEffect(()=>{if(!r.current)return;const d=r.current.getContext("2d");if(!d)return;const p=E=>{const C=[];for(let R=Oh;R<=Dc;R+=10){let x;const _=e==="sodiumSilicate"?"sodiumSilicate":e==="sodiumBenzoate"?"sodiumBenzoate":"amorphousPolymer";E==="crystalline"?x=vs(R,"crystalline","slow"):E==="amorphous_slow"?x=vs(R,_,"slow"):x=vs(R,_,"fast"),C.push({x:R,y:x.totalVolume})}return C},m=p("crystalline"),g=p("amorphous_slow"),v=p("amorphous_fast"),S=vs(o,e,i);return l.current&&l.current.destroy(),l.current=new Chart(d,{type:"line",data:{datasets:[{label:"Crystalline",data:m,borderColor:"#0073FF",backgroundColor:"rgba(0, 115, 255, 0.2)",tension:.1,pointRadius:0},{label:"Amorphous Ref. (Slow Cool)",data:g,borderColor:"#FFA500",backgroundColor:"rgba(255, 165, 0, 0.2)",tension:.1,pointRadius:0,borderDash:[5,5]},{label:"Amorphous Ref. (Fast Cool)",data:v,borderColor:"#FFC107",backgroundColor:"rgba(255, 193, 7, 0.2)",tension:.1,pointRadius:0,borderDash:[2,2]},{label:"Current State",data:[{x:o,y:S.totalVolume}],borderColor:"#20C997",backgroundColor:"rgba(32, 201, 151, 0.5)",pointRadius:6,pointHoverRadius:8,showLine:!1}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{type:"linear",position:"bottom",title:{display:!0,text:"Temperature (K)",color:"#343A40"},ticks:{color:"#495057"},grid:{color:"#E9ECEF"}},y:{title:{display:!0,text:"Volume (arbitrary units)",color:"#343A40"},beginAtZero:!1,ticks:{color:"#495057"},grid:{color:"#E9ECEF"}}},plugins:{title:{display:!0,text:"Volume vs. Temperature",color:"#005EB8",font:{size:16}},legend:{position:"top",labels:{color:"#343A40"}},annotation:{annotations:{tgLine:{type:"line",xMin:pi,xMax:pi,borderColor:"#6c757d",borderWidth:2,borderDash:[6,6],label:{content:"T_g",display:!0,position:"start",font:{weight:"bold"},color:"#495057",backgroundColor:"rgba(240, 248, 255, 0.7)"}},tmLine:e==="crystalline"||o>Es?{type:"line",xMin:Es,xMax:Es,borderColor:"#868e96",borderWidth:2,borderDash:[6,6],label:{content:"T_m",display:!0,position:"end",font:{weight:"bold"},color:"#495057",backgroundColor:"rgba(240, 248, 255, 0.7)"}}:{}}}}}}),()=>{l.current&&(l.current.destroy(),l.current=null)}},[o,e,i]);const{freeVolume:u,totalVolume:h}=vs(o,e,i);return O.jsxs("div",{className:"panel graph-panel",children:[O.jsx("h2",{children:"Volume vs. Temperature Graph"}),O.jsx("canvas",{ref:r,"aria-label":"Volume versus temperature graph"}),O.jsxs("div",{className:"volume-readout",children:[O.jsxs("p",{children:["Total Volume (calc.): ",h.toFixed(2)," units"]}),O.jsxs("p",{children:["Free Volume (calc. approx.): ",u.toFixed(2)," units"]})]})]})},YA=({materialType:o})=>{const[e,i]=Ke.useState("concept"),r=[{id:"concept",label:"Concept & Structure"},{id:"physics",label:"Physics & Chemistry"},{id:"properties",label:"Material Properties"},{id:"math",label:"Math & Examples"}],l=()=>{switch(e){case"concept":return O.jsxs(O.Fragment,{children:[O.jsx("h3",{children:"What is Free Volume?"}),O.jsxs("ul",{children:[O.jsx("li",{children:`Free volume is the microscopic empty space within a material not occupied by the atoms, ions, or molecular segments themselves. In the 3D visualization, it's the "gaps" or "voids" you see between the spheres (atoms) or molecular units.`}),O.jsxs("li",{children:["Formally: ",O.jsxs("code",{children:["V",O.jsx("sub",{children:"free"})," = V",O.jsx("sub",{children:"material_at_T"})," - V",O.jsx("sub",{children:"occupied_by_atoms_at_T"})]})]}),O.jsxs("li",{children:["Often approximated as: ",O.jsxs("code",{children:["V",O.jsx("sub",{children:"free"})," ≈ V",O.jsx("sub",{children:"material_at_T"})," - V",O.jsx("sub",{children:"crystalline_at_T"})]}),". Crystalline materials pack densely, minimizing these voids."]})]}),O.jsx("h3",{children:"Material Structures in 3D"}),O.jsxs("ul",{children:[O.jsxs("li",{children:[O.jsx("strong",{children:"Crystalline:"})," Atoms are arranged in a highly ordered, repeating 3D lattice. The visualization shows this regular, packed arrangement. Very little intrinsic free volume."]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Amorphous Polymer:"})," Long, flexible polymer chains arrange randomly in 3D, like tangled spaghetti, creating inherent voids (free volume) between chain segments."]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Sodium Silicate Glass:"})," An inorganic amorphous solid. The structure is a disordered 3D network of SiO",O.jsx("sub",{children:"4"})," tetrahedra (Si",O.jsx("sup",{children:"4+"})," covalently bonded to O",O.jsx("sup",{children:"2-"}),"). Na",O.jsx("sup",{children:"+"})," ions (modifiers) are located in the voids within this network. This random network also leads to significant free volume."]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Sodium Benzoate:"})," A molecular material. It consists of discrete Sodium Benzoate (C",O.jsx("sub",{children:"6"}),"H",O.jsx("sub",{children:"5"}),"COONa) units. Each unit has a rigid benzene ring, a carboxylate group (COO",O.jsx("sup",{children:"-"}),"), and an associated Na",O.jsx("sup",{children:"+"})," ion. In the amorphous state (visualized), these molecules are packed randomly. Free volume exists in the spaces *between* these molecules."]})]}),o==="sodiumSilicate"&&O.jsxs(O.Fragment,{children:[O.jsx("h3",{children:"Sodium Silicate Glass Structure (Visualized)"}),O.jsxs("ul",{children:[O.jsxs("li",{children:[O.jsxs("strong",{children:["Si",O.jsx("sup",{children:"4+"})," (Red spheres):"]})," Network formers, typically 4-coordinated by oxygen."]}),O.jsxs("li",{children:[O.jsxs("strong",{children:["O",O.jsx("sup",{children:"2-"})," (Blue spheres):"]})," Some bridge Si ions (Si-O-Si), others are non-bridging (bonded to one Si, balancing Na",O.jsx("sup",{children:"+"})," charge)."]}),O.jsxs("li",{children:[O.jsxs("strong",{children:["Na",O.jsx("sup",{children:"+"})," (Green spheres):"]})," Network modifiers, found in interstitial spaces, disrupting network continuity."]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Bonds (Gray cylinders):"})," Strong covalent Si-O bonds forming the glass network backbone."]})]})]}),o==="sodiumBenzoate"&&O.jsxs(O.Fragment,{children:[O.jsxs("h3",{children:["Sodium Benzoate Molecule (C",O.jsx("sub",{children:"6"}),"H",O.jsx("sub",{children:"5"}),"COONa) (Visualized)"]}),O.jsxs("ul",{children:[O.jsxs("li",{children:[O.jsx("strong",{children:"Carbon (Blue spheres):"})," Forms the benzene ring and the carboxyl (-COO",O.jsx("sup",{children:"-"}),") group."]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Hydrogen (Gray/White spheres):"})," Bonded to the benzene ring carbons."]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Oxygen (Red spheres):"})," Part of the carboxylate group."]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Sodium (Large Red sphere):"})," Na",O.jsx("sup",{children:"+"})," ion, ionically associated with the negatively charged carboxylate group."]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Bonds (Dark Gray cylinders):"})," Represent strong covalent bonds (C-C, C-H, C-O) within the benzoate anion. The Na",O.jsx("sup",{children:"+"})," interaction with the COO",O.jsx("sup",{children:"-"})," is primarily ionic."]}),O.jsx("li",{children:"In the amorphous state, these individual molecules are randomly arranged, and the free volume is the space between them."})]})]})]});case"physics":return O.jsxs(O.Fragment,{children:[O.jsx("h3",{children:"Temperature, Energy & Motion"}),O.jsxs("ul",{children:[O.jsxs("li",{children:[O.jsx("strong",{children:"Kinetic Energy:"})," Temperature is a measure of the average kinetic energy of the particles (atoms, ions, or molecules). Higher temperature means more energy."]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Intramolecular Motion (Vibrations):"})," Atoms within a molecule are constantly vibrating around their equilibrium bond positions. Higher temperature leads to more vigorous vibrations."]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Intermolecular Motion (Translations & Rotations):"}),O.jsxs("ul",{children:[O.jsx("li",{children:"In liquids and gases, molecules can move freely (translate) and rotate."}),O.jsxs("li",{children:["In amorphous solids above T",O.jsx("sub",{children:"g"})," (rubbery state), significant segmental motion (for polymers) or whole molecule/ion rearrangement is possible."]}),O.jsxs("li",{children:["Below T",O.jsx("sub",{children:"g"})," (glassy state), large-scale translations and rotations are hindered, but localized vibrations and small-scale librations (restricted rotations) persist."]})]})]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Thermal Expansion:"})," As temperature increases, increased atomic/molecular vibrations lead to a larger average separation between particles, causing the material to expand. This contributes to the total volume."]})]}),O.jsx("h3",{children:"Intermolecular & Interionic Forces"}),O.jsxs("ul",{children:[O.jsxs("li",{children:[O.jsx("strong",{children:"Van der Waals Forces:"})," Weak, short-range attractive forces existing between all atoms and molecules. Crucial for the cohesion of nonpolar molecular solids and liquids (e.g., between polymer chains, between Sodium Benzoate molecules)."]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Ionic Bonds/Interactions:"})," Strong electrostatic attractions between oppositely charged ions (e.g., Na",O.jsx("sup",{children:"+"})," and O",O.jsx("sup",{children:"-"})," in silicate glass, Na",O.jsx("sup",{children:"+"})," and COO",O.jsx("sup",{children:"-"})," in Sodium Benzoate). These are primary bonding forces in ionic crystals and significantly influence the structure of ionic glasses and salts."]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Covalent Bonds:"})," Strong bonds formed by sharing electrons (e.g., Si-O in silicate glass, C-C, C-H, C-O in polymers and Sodium Benzoate molecules). These define the molecular structure or network backbone."]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Packing Efficiency:"})," The shape of molecules and the nature of intermolecular forces dictate how closely molecules can pack together. Irregular shapes or bulky side groups (in polymers or complex molecules like benzoate) can lead to less efficient packing and thus more inherent free volume."]})]}),O.jsx("h3",{children:"Free Volume & States of Matter"}),O.jsxs("ul",{children:[O.jsxs("li",{children:[O.jsx("strong",{children:"Amorphous Solids (Glasses):"}),' Lack long-range order. The "frozen-in" free volume below T',O.jsx("sub",{children:"g"})," depends on cooling rate. Faster cooling traps more free volume as particles have less time to find optimal packing."]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Liquids:"})," Particles have enough kinetic energy and free volume to move past each other, allowing flow. Free volume is dynamic and relatively large."]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Connection to Simulation:"}),' This simulation visually models these concepts. The "expansion scale" driven by `freeVolumeRatio` represents the overall effect of these spaces. The jiggling of atoms and movement of molecules represent thermal energy.']})]}),O.jsx("h3",{children:"Cooling Rate Matters (for Amorphous Materials)"}),O.jsxs("ul",{children:[O.jsxs("li",{children:[O.jsx("strong",{children:"Fast Cooling:"})," When a melt is cooled rapidly through T",O.jsx("sub",{children:"g"}),`, structural units (polymer chains, ions, or whole molecules) don't have time to rearrange into a compact 3D state. They get "frozen" in a more open, tangled/disordered 3D conformation, preserving larger free volume.`]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Slow Cooling:"})," Slower cooling allows more time for structural rearrangement into a more compact (but still disordered) 3D packing before solidifying at T",O.jsx("sub",{children:"g"}),', resulting in less "frozen-in" free volume.']})]})]});case"properties":return O.jsxs(O.Fragment,{children:[O.jsx("h3",{children:"Impact on Material Properties"}),O.jsxs("ul",{children:[O.jsxs("li",{children:[O.jsxs("strong",{children:["Glass Transition Temperature (T",O.jsx("sub",{children:"g"}),"):"]})," T",O.jsx("sub",{children:"g"})," is critically linked to free volume. It's often conceptualized as the temperature where the available free volume decreases to a point where large-scale cooperative motion of molecular segments (polymers) or significant structural rearrangements (ions/molecules in other glasses) become severely restricted on the timescale of observation."]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Viscosity:"}),' Higher free volume means more "elbow room" for structural units to move past each other, leading to lower viscosity (easier flow).']}),O.jsxs("li",{children:[O.jsx("strong",{children:"Diffusion & Permeability:"})," Greater free volume provides more and larger pathways for atoms or small molecules (diffusants, permeants like gases) to move through the material."]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Mechanical Properties:"})," Free volume influences a material's response to stress. For example, ductility and toughness can be affected by the amount of free volume available to accommodate deformation."]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Density:"})," Inversely related to free volume. More empty space (higher free volume) means lower overall density."]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Ionic Conductivity (for ionic glasses/salts):"})," Higher free volume can facilitate easier pathways for ion movement (e.g., Na",O.jsx("sup",{children:"+"})," in silicate glass or potentially in amorphous Sodium Benzoate), leading to higher ionic conductivity."]})]})]});case"math":return O.jsxs(O.Fragment,{children:[O.jsx("h3",{children:"Mathematical Representation"}),O.jsxs("p",{children:["The free volume (V",O.jsx("sub",{children:"f"}),") can be conceptually represented as:"]}),O.jsx("p",{children:O.jsxs("code",{children:["V",O.jsx("sub",{children:"f"}),"(T) = V(T) - V",O.jsx("sub",{children:"0"}),"(T)"]})}),O.jsxs("ul",{children:[O.jsxs("li",{children:[O.jsx("code",{children:"V(T)"})," is the total specific volume of the material at temperature T."]}),O.jsxs("li",{children:[O.jsxs("code",{children:["V",O.jsx("sub",{children:"0"}),"(T)"]}),' is the volume actually occupied by the molecules/atoms, often called the "hard-core" volume. This is usually approximated by the specific volume of the ideal crystalline state of the same material at temperature T, as crystals represent the densest packing.']})]}),O.jsx("h3",{children:"Examples & Scenarios"}),O.jsxs("div",{className:"example",children:[O.jsx("strong",{children:"Basic Calculation:"}),O.jsx("p",{children:"A sample of glassy Polymer X at 20°C has a measured specific volume of 0.925 cm³/g. The specific volume of its perfectly crystalline form at 20°C is estimated to be 0.880 cm³/g. Estimate the specific free volume."}),O.jsxs("p",{children:[O.jsx("em",{children:"Solution:"})," ",O.jsxs("code",{children:["V",O.jsx("sub",{children:"f"})," ≈ V",O.jsx("sub",{children:"glass"})," - V",O.jsx("sub",{children:"crystalline"})," = 0.925 cm³/g - 0.880 cm³/g = 0.045 cm³/g"]}),"."]})]}),O.jsxs("div",{className:"example",children:[O.jsxs("strong",{children:["Temperature Dependence & T",O.jsx("sub",{children:"g"}),":"]}),O.jsxs("p",{children:["An amorphous material has its T",O.jsx("sub",{children:"g"})," at 100°C."]}),O.jsxs("ul",{children:[O.jsxs("li",{children:[O.jsxs("strong",{children:["Scenario 1 (Below T",O.jsx("sub",{children:"g"}),"):"]})," At 80°C, V",O.jsx("sub",{children:"total"})," = 1.050 m³/kg, V",O.jsx("sub",{children:"crystalline_equiv"})," = 1.015 m³/kg. → V",O.jsx("sub",{children:"free"}),' = 0.035 m³/kg. The free volume is relatively "frozen-in".']}),O.jsxs("li",{children:[O.jsxs("strong",{children:["Scenario 2 (Above T",O.jsx("sub",{children:"g"}),"):"]})," At 120°C, V",O.jsx("sub",{children:"total"})," = 1.120 m³/kg, V",O.jsx("sub",{children:"crystalline_equiv"})," = 1.025 m³/kg. → V",O.jsx("sub",{children:"free"})," = 0.095 m³/kg. The free volume is larger and increases more rapidly with temperature, facilitating more molecular/ionic mobility."]})]})]}),O.jsxs("div",{className:"example",children:[O.jsx("strong",{children:"Cooling Rate & Probabilistic Outcomes:"}),O.jsxs("p",{children:["Consider cooling identical amorphous melts of Sodium Benzoate from 150°C (above T",O.jsx("sub",{children:"g"}),") to 25°C (below T",O.jsx("sub",{children:"g"}),"):"]}),O.jsxs("ul",{children:[O.jsxs("li",{children:[O.jsx("strong",{children:"Fast Cooling:"}),' The Sodium Benzoate molecules have little time to arrange efficiently. They are "quenched" into a higher energy, more open, random packing. This results in a higher "frozen-in" free volume (e.g., V',O.jsx("sub",{children:"free"})," avg ~0.050 m³/kg)."]}),O.jsxs("li",{children:[O.jsx("strong",{children:"Slow Cooling:"}),' The molecules have more time to explore configurations and pack more closely (though still amorphously). This results in a lower "frozen-in" free volume (e.g., V',O.jsx("sub",{children:"free"})," avg ~0.030 m³/kg)."]})]}),O.jsxs("p",{children:[O.jsx("em",{children:"Conclusion:"})," Faster cooling generally traps more free volume. The specific amount of free volume is a statistical outcome of the many possible disordered arrangements the molecules can adopt."]})]})]});default:return null}};return O.jsxs("div",{className:"panel explanation-panel",children:[O.jsx("div",{className:"tabs",role:"tablist","aria-label":"Information sections",children:r.map(u=>O.jsx("button",{role:"tab","aria-selected":e===u.id,"aria-controls":`tabpanel-${u.id}`,id:`tab-${u.id}`,className:`tab-button ${e===u.id?"active":""}`,onClick:()=>i(u.id),children:u.label},u.id))}),O.jsx("div",{className:"tab-content",role:"tabpanel","aria-labelledby":`tab-${e}`,id:`tabpanel-${e}`,children:l()})]})},ZA=()=>{const[o,e]=Ke.useState(n0),[i,r]=Ke.useState("amorphousPolymer"),[l,u]=Ke.useState("slow"),h=vs(o,i,l),d=h.totalVolume>0?h.freeVolume/h.totalVolume:0,p=()=>{e(n0),r("amorphousPolymer"),u("slow")};return O.jsxs("div",{className:"app-container",children:[O.jsx("h1",{children:"3D Atomic Free Volume Simulator"}),O.jsxs("div",{className:"main-content",children:[O.jsxs("div",{className:"left-panel",children:[O.jsx(jA,{temperature:o,setTemperature:e,materialType:i,setMaterialType:r,coolingRate:l,setCoolingRate:u,handleReset:p}),O.jsx(qA,{temperature:o,materialType:i,coolingRate:l,freeVolumeRatio:d})]}),O.jsxs("div",{className:"right-panel",children:[O.jsx(WA,{temperature:o,materialType:i,coolingRate:l}),O.jsx(YA,{materialType:i})]})]}),O.jsx("footer",{children:O.jsx("p",{children:"Note: This is a simplified conceptual model for educational purposes. 3D visualization uses Three.js."})})]})},l0=document.getElementById("root");l0?oS.createRoot(l0).render(O.jsx($x.StrictMode,{children:O.jsx(ZA,{})})):console.error("Root element not found");
