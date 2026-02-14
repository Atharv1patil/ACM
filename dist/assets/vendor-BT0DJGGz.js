import{g as Iu}from"./vendor-react-2YahoM9x.js";var Rs={exports:{}},Cs={};var Tl;function lh(){return Tl||(Tl=1,(function(n){function e(U,V){var R=U.length;U.push(V);e:for(;0<R;){var K=R-1>>>1,J=U[K];if(0<r(J,V))U[K]=V,U[R]=J,R=K;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var V=U[0],R=U.pop();if(R!==V){U[0]=R;e:for(var K=0,J=U.length,xe=J>>>1;K<xe;){var Ne=2*(K+1)-1,Ce=U[Ne],Pe=Ne+1,We=U[Pe];if(0>r(Ce,R))Pe<J&&0>r(We,Ce)?(U[K]=We,U[Pe]=R,K=Pe):(U[K]=Ce,U[Ne]=R,K=Ne);else if(Pe<J&&0>r(We,R))U[K]=We,U[Pe]=R,K=Pe;else break e}}return V}function r(U,V){var R=U.sortIndex-V.sortIndex;return R!==0?R:U.id-V.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,f=null,d=3,p=!1,x=!1,_=!1,m=!1,h=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;function A(U){for(var V=t(c);V!==null;){if(V.callback===null)i(c);else if(V.startTime<=U)i(c),V.sortIndex=V.expirationTime,e(l,V);else break;V=t(c)}}function w(U){if(_=!1,A(U),!x)if(t(l)!==null)x=!0,M||(M=!0,B());else{var V=t(c);V!==null&&q(w,V.startTime-U)}}var M=!1,D=-1,C=5,y=-1;function b(){return m?!0:!(n.unstable_now()-y<C)}function I(){if(m=!1,M){var U=n.unstable_now();y=U;var V=!0;try{e:{x=!1,_&&(_=!1,E(D),D=-1),p=!0;var R=d;try{t:{for(A(U),f=t(l);f!==null&&!(f.expirationTime>U&&b());){var K=f.callback;if(typeof K=="function"){f.callback=null,d=f.priorityLevel;var J=K(f.expirationTime<=U);if(U=n.unstable_now(),typeof J=="function"){f.callback=J,A(U),V=!0;break t}f===t(l)&&i(l),A(U)}else i(l);f=t(l)}if(f!==null)V=!0;else{var xe=t(c);xe!==null&&q(w,xe.startTime-U),V=!1}}break e}finally{f=null,d=R,p=!1}V=void 0}}finally{V?B():M=!1}}}var B;if(typeof S=="function")B=function(){S(I)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,X=G.port2;G.port1.onmessage=I,B=function(){X.postMessage(null)}}else B=function(){h(I,0)};function q(U,V){D=h(function(){U(n.unstable_now())},V)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_next=function(U){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var R=d;d=V;try{return U()}finally{d=R}},n.unstable_requestPaint=function(){m=!0},n.unstable_runWithPriority=function(U,V){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var R=d;d=U;try{return V()}finally{d=R}},n.unstable_scheduleCallback=function(U,V,R){var K=n.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?K+R:K):R=K,U){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=R+J,U={id:u++,callback:V,priorityLevel:U,startTime:R,expirationTime:J,sortIndex:-1},R>K?(U.sortIndex=R,e(c,U),t(l)===null&&U===t(c)&&(_?(E(D),D=-1):_=!0,q(w,R-K))):(U.sortIndex=J,e(l,U),x||p||(x=!0,M||(M=!0,B()))),U},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(U){var V=d;return function(){var R=d;d=V;try{return U.apply(this,arguments)}finally{d=R}}}})(Cs)),Cs}var El;function aM(){return El||(El=1,Rs.exports=lh()),Rs.exports}function Fo(n,e){n.indexOf(e)===-1&&n.push(e)}function us(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const En=(n,e,t)=>t>e?e:t<n?n:t;let No=()=>{};const An={},Uu=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function Fu(n){return typeof n=="object"&&n!==null}const Nu=n=>/^0[^.\s]+$/u.test(n);function Oo(n){let e;return()=>(e===void 0&&(e=n()),e)}const qn=n=>n,ch=(n,e)=>t=>e(n(t)),Bo=(...n)=>n.reduce(ch),Vo=(n,e,t)=>{const i=e-n;return i===0?1:(t-n)/i};class ko{constructor(){this.subscriptions=[]}add(e){return Fo(this.subscriptions,e),()=>us(this.subscriptions,e)}notify(e,t,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,i);else for(let s=0;s<r;s++){const a=this.subscriptions[s];a&&a(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const yn=n=>n*1e3,rn=n=>n/1e3;function Ou(n,e){return e?n*(1e3/e):0}const uh=(n,e,t)=>{const i=e-n;return((t-n)%i+i)%i+n},Bu=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,fh=1e-7,dh=12;function hh(n,e,t,i,r){let s,a,o=0;do a=e+(t-e)/2,s=Bu(a,i,r)-n,s>0?t=a:e=a;while(Math.abs(s)>fh&&++o<dh);return a}function br(n,e,t,i){if(n===e&&t===i)return qn;const r=s=>hh(s,0,1,n,t);return s=>s===0||s===1?s:Bu(r(s),e,i)}const Vu=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,ku=n=>e=>1-n(1-e),zu=br(.33,1.53,.69,.99),zo=ku(zu),Gu=Vu(zo),Hu=n=>(n*=2)<1?.5*zo(n):.5*(2-Math.pow(2,-10*(n-1))),Go=n=>1-Math.sin(Math.acos(n)),Wu=ku(Go),Xu=Vu(Go),ph=br(.42,0,1,1),mh=br(0,0,.58,1),qu=br(.42,0,.58,1),Yu=n=>Array.isArray(n)&&typeof n[0]!="number";function oM(n,e){return Yu(n)?n[uh(0,n.length,e)]:n}const ju=n=>Array.isArray(n)&&typeof n[0]=="number",xh={linear:qn,easeIn:ph,easeInOut:qu,easeOut:mh,circIn:Go,circInOut:Xu,circOut:Wu,backIn:zo,backInOut:Gu,backOut:zu,anticipate:Hu},gh=n=>typeof n=="string",Al=n=>{if(ju(n)){No(n.length===4);const[e,t,i,r]=n;return br(e,t,i,r)}else if(gh(n))return xh[n];return n},Cr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function _h(n,e){let t=new Set,i=new Set,r=!1,s=!1;const a=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function l(u){a.has(u)&&(c.schedule(u),n()),u(o)}const c={schedule:(u,f=!1,d=!1)=>{const x=d&&r?t:i;return f&&a.add(u),x.has(u)||x.add(u),u},cancel:u=>{i.delete(u),a.delete(u)},process:u=>{if(o=u,r){s=!0;return}r=!0,[t,i]=[i,t],t.forEach(l),t.clear(),r=!1,s&&(s=!1,c.process(u))}};return c}const vh=40;function Ku(n,e){let t=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>t=!0,a=Cr.reduce((S,A)=>(S[A]=_h(s),S),{}),{setup:o,read:l,resolveKeyframes:c,preUpdate:u,update:f,preRender:d,render:p,postRender:x}=a,_=()=>{const S=An.useManualTiming?r.timestamp:performance.now();t=!1,An.useManualTiming||(r.delta=i?1e3/60:Math.max(Math.min(S-r.timestamp,vh),1)),r.timestamp=S,r.isProcessing=!0,o.process(r),l.process(r),c.process(r),u.process(r),f.process(r),d.process(r),p.process(r),x.process(r),r.isProcessing=!1,t&&e&&(i=!1,n(_))},m=()=>{t=!0,i=!0,r.isProcessing||n(_)};return{schedule:Cr.reduce((S,A)=>{const w=a[A];return S[A]=(M,D=!1,C=!1)=>(t||m(),w.schedule(M,D,C)),S},{}),cancel:S=>{for(let A=0;A<Cr.length;A++)a[Cr[A]].cancel(S)},state:r,steps:a}}const{schedule:wt,cancel:Gn,state:Pt,steps:Ps}=Ku(typeof requestAnimationFrame<"u"?requestAnimationFrame:qn,!0);let es;function bh(){es=void 0}const Dt={now:()=>(es===void 0&&Dt.set(Pt.isProcessing||An.useManualTiming?Pt.timestamp:performance.now()),es),set:n=>{es=n,queueMicrotask(bh)}},$u=n=>e=>typeof e=="string"&&e.startsWith(n),Zu=$u("--"),yh=$u("var(--"),Ho=n=>yh(n)?Sh.test(n.split("/*")[0].trim()):!1,Sh=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function wl(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Xi={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},hr={...Xi,transform:n=>En(0,1,n)},Pr={...Xi,default:1},ur=n=>Math.round(n*1e5)/1e5,Wo=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Mh(n){return n==null}const Th=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Xo=(n,e)=>t=>!!(typeof t=="string"&&Th.test(t)&&t.startsWith(n)||e&&!Mh(t)&&Object.prototype.hasOwnProperty.call(t,e)),Ju=(n,e,t)=>i=>{if(typeof i!="string")return i;const[r,s,a,o]=i.match(Wo);return{[n]:parseFloat(r),[e]:parseFloat(s),[t]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}},Eh=n=>En(0,255,n),Ds={...Xi,transform:n=>Math.round(Eh(n))},li={test:Xo("rgb","red"),parse:Ju("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+Ds.transform(n)+", "+Ds.transform(e)+", "+Ds.transform(t)+", "+ur(hr.transform(i))+")"};function Ah(n){let e="",t="",i="",r="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),i=n.substring(5,7),r=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),i=n.substring(3,4),r=n.substring(4,5),e+=e,t+=t,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Ea={test:Xo("#"),parse:Ah,transform:li.transform},yr=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),On=yr("deg"),Sn=yr("%"),me=yr("px"),wh=yr("vh"),Rh=yr("vw"),Rl={...Sn,parse:n=>Sn.parse(n)/100,transform:n=>Sn.transform(n*100)},Di={test:Xo("hsl","hue"),parse:Ju("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+Sn.transform(ur(e))+", "+Sn.transform(ur(t))+", "+ur(hr.transform(i))+")"},xt={test:n=>li.test(n)||Ea.test(n)||Di.test(n),parse:n=>li.test(n)?li.parse(n):Di.test(n)?Di.parse(n):Ea.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?li.transform(n):Di.transform(n),getAnimatableNone:n=>{const e=xt.parse(n);return e.alpha=0,xt.transform(e)}},Ch=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Ph(n){return isNaN(n)&&typeof n=="string"&&(n.match(Wo)?.length||0)+(n.match(Ch)?.length||0)>0}const Qu="number",ef="color",Dh="var",Lh="var(",Cl="${}",Ih=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function pr(n){const e=n.toString(),t=[],i={color:[],number:[],var:[]},r=[];let s=0;const o=e.replace(Ih,l=>(xt.test(l)?(i.color.push(s),r.push(ef),t.push(xt.parse(l))):l.startsWith(Lh)?(i.var.push(s),r.push(Dh),t.push(l)):(i.number.push(s),r.push(Qu),t.push(parseFloat(l))),++s,Cl)).split(Cl);return{values:t,split:o,indexes:i,types:r}}function tf(n){return pr(n).values}function nf(n){const{split:e,types:t}=pr(n),i=e.length;return r=>{let s="";for(let a=0;a<i;a++)if(s+=e[a],r[a]!==void 0){const o=t[a];o===Qu?s+=ur(r[a]):o===ef?s+=xt.transform(r[a]):s+=r[a]}return s}}const Uh=n=>typeof n=="number"?0:xt.test(n)?xt.getAnimatableNone(n):n;function Fh(n){const e=tf(n);return nf(n)(e.map(Uh))}const Hn={test:Ph,parse:tf,createTransformer:nf,getAnimatableNone:Fh};function Ls(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function Nh({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let r=0,s=0,a=0;if(!e)r=s=a=t;else{const o=t<.5?t*(1+e):t+e-t*e,l=2*t-o;r=Ls(l,o,n+1/3),s=Ls(l,o,n),a=Ls(l,o,n-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:i}}function fs(n,e){return t=>t>0?e:n}const vt=(n,e,t)=>n+(e-n)*t,Is=(n,e,t)=>{const i=n*n,r=t*(e*e-i)+i;return r<0?0:Math.sqrt(r)},Oh=[Ea,li,Di],Bh=n=>Oh.find(e=>e.test(n));function Pl(n){const e=Bh(n);if(!e)return!1;let t=e.parse(n);return e===Di&&(t=Nh(t)),t}const Dl=(n,e)=>{const t=Pl(n),i=Pl(e);if(!t||!i)return fs(n,e);const r={...t};return s=>(r.red=Is(t.red,i.red,s),r.green=Is(t.green,i.green,s),r.blue=Is(t.blue,i.blue,s),r.alpha=vt(t.alpha,i.alpha,s),li.transform(r))},Aa=new Set(["none","hidden"]);function Vh(n,e){return Aa.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function kh(n,e){return t=>vt(n,e,t)}function qo(n){return typeof n=="number"?kh:typeof n=="string"?Ho(n)?fs:xt.test(n)?Dl:Hh:Array.isArray(n)?rf:typeof n=="object"?xt.test(n)?Dl:zh:fs}function rf(n,e){const t=[...n],i=t.length,r=n.map((s,a)=>qo(s)(s,e[a]));return s=>{for(let a=0;a<i;a++)t[a]=r[a](s);return t}}function zh(n,e){const t={...n,...e},i={};for(const r in t)n[r]!==void 0&&e[r]!==void 0&&(i[r]=qo(n[r])(n[r],e[r]));return r=>{for(const s in i)t[s]=i[s](r);return t}}function Gh(n,e){const t=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],a=n.indexes[s][i[s]],o=n.values[a]??0;t[r]=o,i[s]++}return t}const Hh=(n,e)=>{const t=Hn.createTransformer(e),i=pr(n),r=pr(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Aa.has(n)&&!r.values.length||Aa.has(e)&&!i.values.length?Vh(n,e):Bo(rf(Gh(i,r),r.values),t):fs(n,e)};function sf(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?vt(n,e,t):qo(n)(n,e)}const Wh=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>wt.update(e,t),stop:()=>Gn(e),now:()=>Pt.isProcessing?Pt.timestamp:Dt.now()}},af=(n,e,t=10)=>{let i="";const r=Math.max(Math.round(e/t),2);for(let s=0;s<r;s++)i+=Math.round(n(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},ds=2e4;function Yo(n){let e=0;const t=50;let i=n.next(e);for(;!i.done&&e<ds;)e+=t,i=n.next(e);return e>=ds?1/0:e}function Xh(n,e=100,t){const i=t({...n,keyframes:[0,e]}),r=Math.min(Yo(i),ds);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:rn(r)}}const qh=5;function of(n,e,t){const i=Math.max(e-qh,0);return Ou(t-n(i),e-i)}const dt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Us=.001;function Yh({duration:n=dt.duration,bounce:e=dt.bounce,velocity:t=dt.velocity,mass:i=dt.mass}){let r,s,a=1-e;a=En(dt.minDamping,dt.maxDamping,a),n=En(dt.minDuration,dt.maxDuration,rn(n)),a<1?(r=c=>{const u=c*a,f=u*n,d=u-t,p=wa(c,a),x=Math.exp(-f);return Us-d/p*x},s=c=>{const f=c*a*n,d=f*t+t,p=Math.pow(a,2)*Math.pow(c,2)*n,x=Math.exp(-f),_=wa(Math.pow(c,2),a);return(-r(c)+Us>0?-1:1)*((d-p)*x)/_}):(r=c=>{const u=Math.exp(-c*n),f=(c-t)*n+1;return-Us+u*f},s=c=>{const u=Math.exp(-c*n),f=(t-c)*(n*n);return u*f});const o=5/n,l=Kh(r,s,o);if(n=yn(n),isNaN(l))return{stiffness:dt.stiffness,damping:dt.damping,duration:n};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:a*2*Math.sqrt(i*c),duration:n}}}const jh=12;function Kh(n,e,t){let i=t;for(let r=1;r<jh;r++)i=i-n(i)/e(i);return i}function wa(n,e){return n*Math.sqrt(1-e*e)}const $h=["duration","bounce"],Zh=["stiffness","damping","mass"];function Ll(n,e){return e.some(t=>n[t]!==void 0)}function Jh(n){let e={velocity:dt.velocity,stiffness:dt.stiffness,damping:dt.damping,mass:dt.mass,isResolvedFromDuration:!1,...n};if(!Ll(n,Zh)&&Ll(n,$h))if(n.visualDuration){const t=n.visualDuration,i=2*Math.PI/(t*1.2),r=i*i,s=2*En(.05,1,1-(n.bounce||0))*Math.sqrt(r);e={...e,mass:dt.mass,stiffness:r,damping:s}}else{const t=Yh(n);e={...e,...t,mass:dt.mass},e.isResolvedFromDuration=!0}return e}function hs(n=dt.visualDuration,e=dt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:i,restDelta:r}=t;const s=t.keyframes[0],a=t.keyframes[t.keyframes.length-1],o={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:f,velocity:d,isResolvedFromDuration:p}=Jh({...t,velocity:-rn(t.velocity||0)}),x=d||0,_=c/(2*Math.sqrt(l*u)),m=a-s,h=rn(Math.sqrt(l/u)),E=Math.abs(m)<5;i||(i=E?dt.restSpeed.granular:dt.restSpeed.default),r||(r=E?dt.restDelta.granular:dt.restDelta.default);let S;if(_<1){const w=wa(h,_);S=M=>{const D=Math.exp(-_*h*M);return a-D*((x+_*h*m)/w*Math.sin(w*M)+m*Math.cos(w*M))}}else if(_===1)S=w=>a-Math.exp(-h*w)*(m+(x+h*m)*w);else{const w=h*Math.sqrt(_*_-1);S=M=>{const D=Math.exp(-_*h*M),C=Math.min(w*M,300);return a-D*((x+_*h*m)*Math.sinh(C)+w*m*Math.cosh(C))/w}}const A={calculatedDuration:p&&f||null,next:w=>{const M=S(w);if(p)o.done=w>=f;else{let D=w===0?x:0;_<1&&(D=w===0?yn(x):of(S,w,M));const C=Math.abs(D)<=i,y=Math.abs(a-M)<=r;o.done=C&&y}return o.value=o.done?a:M,o},toString:()=>{const w=Math.min(Yo(A),ds),M=af(D=>A.next(w*D).value,w,30);return w+"ms "+M},toTransition:()=>{}};return A}hs.applyToOptions=n=>{const e=Xh(n,100,hs);return n.ease=e.ease,n.duration=yn(e.duration),n.type="keyframes",n};function Ra({keyframes:n,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:a,min:o,max:l,restDelta:c=.5,restSpeed:u}){const f=n[0],d={done:!1,value:f},p=C=>o!==void 0&&C<o||l!==void 0&&C>l,x=C=>o===void 0?l:l===void 0||Math.abs(o-C)<Math.abs(l-C)?o:l;let _=t*e;const m=f+_,h=a===void 0?m:a(m);h!==m&&(_=h-f);const E=C=>-_*Math.exp(-C/i),S=C=>h+E(C),A=C=>{const y=E(C),b=S(C);d.done=Math.abs(y)<=c,d.value=d.done?h:b};let w,M;const D=C=>{p(d.value)&&(w=C,M=hs({keyframes:[d.value,x(d.value)],velocity:of(S,C,d.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return D(0),{calculatedDuration:null,next:C=>{let y=!1;return!M&&w===void 0&&(y=!0,A(C),D(C)),w!==void 0&&C>=w?M.next(C-w):(!y&&A(C),d)}}}function Qh(n,e,t){const i=[],r=t||An.mix||sf,s=n.length-1;for(let a=0;a<s;a++){let o=r(n[a],n[a+1]);if(e){const l=Array.isArray(e)?e[a]||qn:e;o=Bo(l,o)}i.push(o)}return i}function lf(n,e,{clamp:t=!0,ease:i,mixer:r}={}){const s=n.length;if(No(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const a=n[0]===n[1];n[0]>n[s-1]&&(n=[...n].reverse(),e=[...e].reverse());const o=Qh(e,i,r),l=o.length,c=u=>{if(a&&u<n[0])return e[0];let f=0;if(l>1)for(;f<n.length-2&&!(u<n[f+1]);f++);const d=Vo(n[f],n[f+1],u);return o[f](d)};return t?u=>c(En(n[0],n[s-1],u)):c}function ep(n,e){const t=n[n.length-1];for(let i=1;i<=e;i++){const r=Vo(0,e,i);n.push(vt(t,1,r))}}function tp(n){const e=[0];return ep(e,n.length-1),e}function np(n,e){return n.map(t=>t*e)}function ip(n,e){return n.map(()=>e||qu).splice(0,n.length-1)}function fr({duration:n=300,keyframes:e,times:t,ease:i="easeInOut"}){const r=Yu(i)?i.map(Al):Al(i),s={done:!1,value:e[0]},a=np(t&&t.length===e.length?t:tp(e),n),o=lf(a,e,{ease:Array.isArray(r)?r:ip(e,r)});return{calculatedDuration:n,next:l=>(s.value=o(l),s.done=l>=n,s)}}const rp=n=>n!==null;function jo(n,{repeat:e,repeatType:t="loop"},i,r=1){const s=n.filter(rp),o=r<0||e&&t!=="loop"&&e%2===1?0:s.length-1;return!o||i===void 0?s[o]:i}const sp={decay:Ra,inertia:Ra,tween:fr,keyframes:fr,spring:hs};function cf(n){typeof n.type=="string"&&(n.type=sp[n.type])}class Ko{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const ap=n=>n/100;class $o extends Ko{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:t}=this.options;t&&t.updatedAt!==Dt.now()&&this.tick(Dt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;cf(e);const{type:t=fr,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:a=0}=e;let{keyframes:o}=e;const l=t||fr;l!==fr&&typeof o[0]!="number"&&(this.mixKeyframes=Bo(ap,sf(o[0],o[1])),o=[0,100]);const c=l({...e,keyframes:o});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Yo(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:u,repeat:f,repeatType:d,repeatDelay:p,type:x,onUpdate:_,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const h=this.currentTime-c*(this.playbackSpeed>=0?1:-1),E=this.playbackSpeed>=0?h<0:h>r;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let S=this.currentTime,A=i;if(f){const C=Math.min(this.currentTime,r)/o;let y=Math.floor(C),b=C%1;!b&&C>=1&&(b=1),b===1&&y--,y=Math.min(y,f+1),y%2&&(d==="reverse"?(b=1-b,p&&(b-=p/o)):d==="mirror"&&(A=a)),S=En(0,1,b)*o}const w=E?{done:!1,value:u[0]}:A.next(S);s&&(w.value=s(w.value));let{done:M}=w;!E&&l!==null&&(M=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const D=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&M);return D&&x!==Ra&&(w.value=jo(u,this.options,m,this.speed)),_&&_(w.value),D&&this.finish(),w}then(e,t){return this.finished.then(e,t)}get duration(){return rn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+rn(e)}get time(){return rn(this.currentTime)}set time(e){e=yn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Dt.now());const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=rn(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=Wh,startTime:t}=this.options;this.driver||(this.driver=e(r=>this.tick(r))),this.options.onPlay?.();const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=t??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Dt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function op(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const ci=n=>n*180/Math.PI,Ca=n=>{const e=ci(Math.atan2(n[1],n[0]));return Pa(e)},lp={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Ca,rotateZ:Ca,skewX:n=>ci(Math.atan(n[1])),skewY:n=>ci(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Pa=n=>(n=n%360,n<0&&(n+=360),n),Il=Ca,Ul=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Fl=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),cp={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ul,scaleY:Fl,scale:n=>(Ul(n)+Fl(n))/2,rotateX:n=>Pa(ci(Math.atan2(n[6],n[5]))),rotateY:n=>Pa(ci(Math.atan2(-n[2],n[0]))),rotateZ:Il,rotate:Il,skewX:n=>ci(Math.atan(n[4])),skewY:n=>ci(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Da(n){return n.includes("scale")?1:0}function La(n,e){if(!n||n==="none")return Da(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(t)i=cp,r=t;else{const o=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=lp,r=o}if(!r)return Da(e);const s=i[e],a=r[1].split(",").map(fp);return typeof s=="function"?s(a):a[s]}const up=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return La(t,e)};function fp(n){return parseFloat(n.trim())}const qi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Yi=new Set(qi),Nl=n=>n===Xi||n===me,dp=new Set(["x","y","z"]),hp=qi.filter(n=>!dp.has(n));function pp(n){const e=[];return hp.forEach(t=>{const i=n.getValue(t);i!==void 0&&(e.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),e}const Vn={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>La(e,"x"),y:(n,{transform:e})=>La(e,"y")};Vn.translateX=Vn.x;Vn.translateY=Vn.y;const fi=new Set;let Ia=!1,Ua=!1,Fa=!1;function uf(){if(Ua){const n=Array.from(fi).filter(i=>i.needsMeasurement),e=new Set(n.map(i=>i.element)),t=new Map;e.forEach(i=>{const r=pp(i);r.length&&(t.set(i,r),i.render())}),n.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=t.get(i);r&&r.forEach(([s,a])=>{i.getValue(s)?.set(a)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Ua=!1,Ia=!1,fi.forEach(n=>n.complete(Fa)),fi.clear()}function ff(){fi.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Ua=!0)})}function mp(){Fa=!0,ff(),uf(),Fa=!1}class Zo{constructor(e,t,i,r,s,a=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=r,this.element=s,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(fi.add(this),Ia||(Ia=!0,wt.read(ff),wt.resolveKeyframes(uf))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:i,motionValue:r}=this;if(e[0]===null){const s=r?.get(),a=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&t){const o=i.readValue(t,a);o!=null&&(e[0]=o)}e[0]===void 0&&(e[0]=a),r&&s===void 0&&r.set(e[0])}op(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),fi.delete(this)}cancel(){this.state==="scheduled"&&(fi.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const xp=n=>n.startsWith("--");function gp(n,e,t){xp(e)?n.style.setProperty(e,t):n.style[e]=t}const _p=Oo(()=>window.ScrollTimeline!==void 0),vp={};function bp(n,e){const t=Oo(n);return()=>vp[e]??t()}const df=bp(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),lr=([n,e,t,i])=>`cubic-bezier(${n}, ${e}, ${t}, ${i})`,Ol={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:lr([0,.65,.55,1]),circOut:lr([.55,0,1,.45]),backIn:lr([.31,.01,.66,-.59]),backOut:lr([.33,1.53,.69,.99])};function hf(n,e){if(n)return typeof n=="function"?df()?af(n,e):"ease-out":ju(n)?lr(n):Array.isArray(n)?n.map(t=>hf(t,e)||Ol.easeOut):Ol[n]}function yp(n,e,t,{delay:i=0,duration:r=300,repeat:s=0,repeatType:a="loop",ease:o="easeOut",times:l}={},c=void 0){const u={[e]:t};l&&(u.offset=l);const f=hf(o,r);Array.isArray(f)&&(u.easing=f);const d={delay:i,duration:r,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"};return c&&(d.pseudoElement=c),n.animate(u,d)}function pf(n){return typeof n=="function"&&"applyToOptions"in n}function Sp({type:n,...e}){return pf(n)&&df()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class mf extends Ko{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:i,keyframes:r,pseudoElement:s,allowFlatten:a=!1,finalKeyframe:o,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=a,this.options=e,No(typeof e.type!="string");const c=Sp(e);this.animation=yp(t,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const u=jo(r,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(u):gp(t,i,u),this.animation.cancel()}l?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return rn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+rn(e)}get time(){return rn(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=yn(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&_p()?(this.animation.timeline=e,qn):t(this)}}const xf={anticipate:Hu,backInOut:Gu,circInOut:Xu};function Mp(n){return n in xf}function Tp(n){typeof n.ease=="string"&&Mp(n.ease)&&(n.ease=xf[n.ease])}const Fs=10;class Ep extends mf{constructor(e){Tp(e),cf(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:i,onComplete:r,element:s,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const o=new $o({...a,autoplay:!1}),l=Math.max(Fs,Dt.now()-this.startTime),c=En(0,Fs,l-Fs);t.setWithVelocity(o.sample(Math.max(0,l-c)).value,o.sample(l).value,c),o.stop()}}const Bl=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Hn.test(n)||n==="0")&&!n.startsWith("url("));function Ap(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function wp(n,e,t,i){const r=n[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=n[n.length-1],a=Bl(r,e),o=Bl(s,e);return!a||!o?!1:Ap(n)||(t==="spring"||pf(t))&&i}function Na(n){n.duration=0,n.type="keyframes"}const Rp=new Set(["opacity","clipPath","filter","transform"]),Cp=Oo(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Pp(n){const{motionValue:e,name:t,repeatDelay:i,repeatType:r,damping:s,type:a}=n;if(!(e?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=e.owner.getProps();return Cp()&&t&&Rp.has(t)&&(t!=="transform"||!c)&&!l&&!i&&r!=="mirror"&&s!==0&&a!=="inertia"}const Dp=40;class Lp extends Ko{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:a="loop",keyframes:o,name:l,motionValue:c,element:u,...f}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Dt.now();const d={autoplay:e,delay:t,type:i,repeat:r,repeatDelay:s,repeatType:a,name:l,motionValue:c,element:u,...f},p=u?.KeyframeResolver||Zo;this.keyframeResolver=new p(o,(x,_,m)=>this.onKeyframesResolved(x,_,d,!m),l,c,u),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,i,r){this.keyframeResolver=void 0;const{name:s,type:a,velocity:o,delay:l,isHandoff:c,onUpdate:u}=i;this.resolvedAt=Dt.now(),wp(e,s,a,o)||((An.instantAnimations||!l)&&u?.(jo(e,i,t)),e[0]=e[e.length-1],Na(i),i.repeat=0);const d={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>Dp?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...i,keyframes:e},p=!c&&Pp(d),x=d.motionValue?.owner?.current,_=p?new Ep({...d,element:x}):new $o(d);_.finished.then(()=>{this.notifyFinished()}).catch(qn),this.pendingTimeline&&(this.stopTimeline=_.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=_}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),mp()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}class Ip{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>e.finished))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=t}attachTimeline(e){const t=this.animations.map(i=>i.attachTimeline(e));return()=>{t.forEach((i,r)=>{i&&i(),this.animations[r].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return Vl(this.animations,"duration")}get iterationDuration(){return Vl(this.animations,"iterationDuration")}runAll(e){this.animations.forEach(t=>t[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Vl(n,e){let t=0;for(let i=0;i<n.length;i++){const r=n[i][e];r!==null&&r>t&&(t=r)}return t}class lM extends Ip{then(e,t){return this.finished.finally(e).then(()=>{})}}function gf(n,e,t,i=0,r=1){const s=Array.from(n).sort((c,u)=>c.sortNodePosition(u)).indexOf(e),a=n.size,o=(a-1)*i;return typeof t=="function"?t(s,a):r===1?s*i:o-s*i}const Up=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Fp(n){const e=Up.exec(n);if(!e)return[,];const[,t,i,r]=e;return[`--${t??i}`,r]}function _f(n,e,t=1){const[i,r]=Fp(n);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const a=s.trim();return Uu(a)?parseFloat(a):a}return Ho(r)?_f(r,e,t+1):r}const Np={type:"spring",stiffness:500,damping:25,restSpeed:10},Op=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Bp={type:"keyframes",duration:.8},Vp={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},kp=(n,{keyframes:e})=>e.length>2?Bp:Yi.has(n)?n.startsWith("scale")?Op(e[1]):Np:Vp,zp=n=>n!==null;function Gp(n,{repeat:e,repeatType:t="loop"},i){const r=n.filter(zp),s=e&&t!=="loop"&&e%2===1?0:r.length-1;return r[s]}function vf(n,e){if(n?.inherit&&e){const{inherit:t,...i}=n;return{...e,...i}}return n}function Jo(n,e){const t=n?.[e]??n?.default??n;return t!==n?vf(t,n):t}function Hp({when:n,delay:e,delayChildren:t,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:a,repeatDelay:o,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const bf=(n,e,t,i={},r,s)=>a=>{const o=Jo(i,n)||{},l=o.delay||i.delay||0;let{elapsed:c=0}=i;c=c-yn(l);const u={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...o,delay:-c,onUpdate:d=>{e.set(d),o.onUpdate&&o.onUpdate(d)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:n,motionValue:e,element:s?void 0:r};Hp(o)||Object.assign(u,kp(n,u)),u.duration&&(u.duration=yn(u.duration)),u.repeatDelay&&(u.repeatDelay=yn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Na(u),u.delay===0&&(f=!0)),(An.instantAnimations||An.skipAnimations||r?.shouldSkipAnimations)&&(f=!0,Na(u),u.delay=0),u.allowFlatten=!o.type&&!o.ease,f&&!s&&e.get()!==void 0){const d=Gp(u.keyframes,o);if(d!==void 0){wt.update(()=>{u.onUpdate(d),u.onComplete()});return}}return o.isSync?new $o(u):new Lp(u)};function kl(n){const e=[{},{}];return n?.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function yf(n,e,t,i){if(typeof e=="function"){const[r,s]=kl(i);e=e(t!==void 0?t:n.custom,r,s)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[r,s]=kl(i);e=e(t!==void 0?t:n.custom,r,s)}return e}function Ni(n,e,t){const i=n.getProps();return yf(i,e,t!==void 0?t:i.custom,n)}const Sf=new Set(["width","height","top","left","right","bottom",...qi]),zl=30,Wp=n=>!isNaN(parseFloat(n)),Gl={current:void 0};class Xp{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{const r=Dt.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Dt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Wp(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new ko);const i=this.events[e].add(t);return e==="change"?()=>{i(),wt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Gl.current&&Gl.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Dt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>zl)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,zl);return Ou(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Vi(n,e){return new Xp(n,e)}const Oa=n=>Array.isArray(n);function qp(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Vi(t))}function Yp(n){return Oa(n)?n[n.length-1]||0:n}function jp(n,e){const t=Ni(n,e);let{transitionEnd:i={},transition:r={},...s}=t||{};s={...s,...i};for(const a in s){const o=Yp(s[a]);qp(n,a,o)}}const Nt=n=>!!(n&&n.getVelocity);function Kp(n){return!!(Nt(n)&&n.add)}function $p(n,e){const t=n.getValue("willChange");if(Kp(t))return t.add(e);if(!t&&An.WillChange){const i=new An.WillChange("auto");n.addValue("willChange",i),i.add(e)}}function Qo(n){return n.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const Zp="framerAppearId",Jp="data-"+Qo(Zp);function Mf(n){return n.props[Jp]}function Qp({protectedKeys:n,needsAnimating:e},t){const i=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,i}function Tf(n,e,{delay:t=0,transitionOverride:i,type:r}={}){let{transition:s,transitionEnd:a,...o}=e;const l=n.getDefaultTransition();s=s?vf(s,l):l;const c=s?.reduceMotion;i&&(s=i);const u=[],f=r&&n.animationState&&n.animationState.getState()[r];for(const d in o){const p=n.getValue(d,n.latestValues[d]??null),x=o[d];if(x===void 0||f&&Qp(f,d))continue;const _={delay:t,...Jo(s||{},d)},m=p.get();if(m!==void 0&&!p.isAnimating&&!Array.isArray(x)&&x===m&&!_.velocity)continue;let h=!1;if(window.MotionHandoffAnimation){const A=Mf(n);if(A){const w=window.MotionHandoffAnimation(A,d,wt);w!==null&&(_.startTime=w,h=!0)}}$p(n,d);const E=c??n.shouldReduceMotion;p.start(bf(d,p,x,E&&Sf.has(d)?{type:!1}:_,n,h));const S=p.animation;S&&u.push(S)}if(a){const d=()=>wt.update(()=>{a&&jp(n,a)});u.length?Promise.all(u).then(d):d()}return u}function Ba(n,e,t={}){const i=Ni(n,e,t.type==="exit"?n.presenceContext?.custom:void 0);let{transition:r=n.getDefaultTransition()||{}}=i||{};t.transitionOverride&&(r=t.transitionOverride);const s=i?()=>Promise.all(Tf(n,i,t)):()=>Promise.resolve(),a=n.variantChildren&&n.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:u,staggerDirection:f}=r;return em(n,e,l,c,u,f,t)}:()=>Promise.resolve(),{when:o}=r;if(o){const[l,c]=o==="beforeChildren"?[s,a]:[a,s];return l().then(()=>c())}else return Promise.all([s(),a(t.delay)])}function em(n,e,t=0,i=0,r=0,s=1,a){const o=[];for(const l of n.variantChildren)l.notify("AnimationStart",e),o.push(Ba(l,e,{...a,delay:t+(typeof i=="function"?0:i)+gf(n.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(o)}function tm(n,e,t={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Ba(n,s,t));i=Promise.all(r)}else if(typeof e=="string")i=Ba(n,e,t);else{const r=typeof e=="function"?Ni(n,e,t.custom):e;i=Promise.all(Tf(n,r,t))}return i.then(()=>{n.notify("AnimationComplete",e)})}const nm={test:n=>n==="auto",parse:n=>n},Ef=n=>e=>e.test(n),Af=[Xi,me,Sn,On,Rh,wh,nm],Hl=n=>Af.find(Ef(n));function im(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Nu(n):!0}const rm=new Set(["brightness","contrast","saturate","opacity"]);function sm(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=t.match(Wo)||[];if(!i)return n;const r=t.replace(i,"");let s=rm.has(e)?1:0;return i!==t&&(s*=100),e+"("+s+r+")"}const am=/\b([a-z-]*)\(.*?\)/gu,Va={...Hn,getAnimatableNone:n=>{const e=n.match(am);return e?e.map(sm).join(" "):n}},Wl={...Xi,transform:Math.round},om={rotate:On,rotateX:On,rotateY:On,rotateZ:On,scale:Pr,scaleX:Pr,scaleY:Pr,scaleZ:Pr,skew:On,skewX:On,skewY:On,distance:me,translateX:me,translateY:me,translateZ:me,x:me,y:me,z:me,perspective:me,transformPerspective:me,opacity:hr,originX:Rl,originY:Rl,originZ:me},el={borderWidth:me,borderTopWidth:me,borderRightWidth:me,borderBottomWidth:me,borderLeftWidth:me,borderRadius:me,borderTopLeftRadius:me,borderTopRightRadius:me,borderBottomRightRadius:me,borderBottomLeftRadius:me,width:me,maxWidth:me,height:me,maxHeight:me,top:me,right:me,bottom:me,left:me,inset:me,insetBlock:me,insetBlockStart:me,insetBlockEnd:me,insetInline:me,insetInlineStart:me,insetInlineEnd:me,padding:me,paddingTop:me,paddingRight:me,paddingBottom:me,paddingLeft:me,paddingBlock:me,paddingBlockStart:me,paddingBlockEnd:me,paddingInline:me,paddingInlineStart:me,paddingInlineEnd:me,margin:me,marginTop:me,marginRight:me,marginBottom:me,marginLeft:me,marginBlock:me,marginBlockStart:me,marginBlockEnd:me,marginInline:me,marginInlineStart:me,marginInlineEnd:me,fontSize:me,backgroundPositionX:me,backgroundPositionY:me,...om,zIndex:Wl,fillOpacity:hr,strokeOpacity:hr,numOctaves:Wl},lm={...el,color:xt,backgroundColor:xt,outlineColor:xt,fill:xt,stroke:xt,borderColor:xt,borderTopColor:xt,borderRightColor:xt,borderBottomColor:xt,borderLeftColor:xt,filter:Va,WebkitFilter:Va},wf=n=>lm[n];function Rf(n,e){let t=wf(n);return t!==Va&&(t=Hn),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const cm=new Set(["auto","none","0"]);function um(n,e,t){let i=0,r;for(;i<n.length&&!r;){const s=n[i];typeof s=="string"&&!cm.has(s)&&pr(s).values.length&&(r=n[i]),i++}if(r&&t)for(const s of e)n[s]=Rf(t,r)}class fm extends Zo{constructor(e,t,i,r,s){super(e,t,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let u=0;u<e.length;u++){let f=e[u];if(typeof f=="string"&&(f=f.trim(),Ho(f))){const d=_f(f,t.current);d!==void 0&&(e[u]=d),u===e.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!Sf.has(i)||e.length!==2)return;const[r,s]=e,a=Hl(r),o=Hl(s),l=wl(r),c=wl(s);if(l!==c&&Vn[i]){this.needsMeasurement=!0;return}if(a!==o)if(Nl(a)&&Nl(o))for(let u=0;u<e.length;u++){const f=e[u];typeof f=="string"&&(e[u]=parseFloat(f))}else Vn[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||im(e[r]))&&i.push(r);i.length&&um(e,i,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Vn[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const r=t[t.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,a=i[s];i[s]=Vn[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([o,l])=>{e.getValue(o).set(l)}),this.resolveNoneKeyframes()}}const dm=new Set(["opacity","clipPath","filter","transform"]);function Cf(n,e,t){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let i=document;e&&(i=e.current);const r=t?.[n]??i.querySelectorAll(n);return r?Array.from(r):[]}return Array.from(n).filter(i=>i!=null)}const Pf=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function hm(n){return Fu(n)&&"offsetHeight"in n}const{schedule:Df}=Ku(queueMicrotask,!1),en={x:!1,y:!1};function Lf(){return en.x||en.y}function cM(n){return n==="x"||n==="y"?en[n]?null:(en[n]=!0,()=>{en[n]=!1}):en.x||en.y?null:(en.x=en.y=!0,()=>{en.x=en.y=!1})}function If(n,e){const t=Cf(n),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[t,r,()=>i.abort()]}function pm(n){return!(n.pointerType==="touch"||Lf())}function uM(n,e,t={}){const[i,r,s]=If(n,t);return i.forEach(a=>{let o=!1,l=!1,c;const u=()=>{a.removeEventListener("pointerleave",x)},f=m=>{c&&(c(m),c=void 0),u()},d=m=>{o=!1,window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d),l&&(l=!1,f(m))},p=()=>{o=!0,window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",d,r)},x=m=>{if(m.pointerType!=="touch"){if(o){l=!0;return}f(m)}},_=m=>{if(!pm(m))return;l=!1;const h=e(a,m);typeof h=="function"&&(c=h,a.addEventListener("pointerleave",x,r))};a.addEventListener("pointerenter",_,r),a.addEventListener("pointerdown",p,r)}),s}const Uf=(n,e)=>e?n===e?!0:Uf(n,e.parentElement):!1,mm=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,xm=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function gm(n){return xm.has(n.tagName)||n.isContentEditable===!0}const _m=new Set(["INPUT","SELECT","TEXTAREA"]);function fM(n){return _m.has(n.tagName)||n.isContentEditable===!0}const ts=new WeakSet;function Xl(n){return e=>{e.key==="Enter"&&n(e)}}function Ns(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const vm=(n,e)=>{const t=n.currentTarget;if(!t)return;const i=Xl(()=>{if(ts.has(t))return;Ns(t,"down");const r=Xl(()=>{Ns(t,"up")}),s=()=>Ns(t,"cancel");t.addEventListener("keyup",r,e),t.addEventListener("blur",s,e)});t.addEventListener("keydown",i,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",i),e)};function ql(n){return mm(n)&&!Lf()}const Yl=new WeakSet;function dM(n,e,t={}){const[i,r,s]=If(n,t),a=o=>{const l=o.currentTarget;if(!ql(o)||Yl.has(o))return;ts.add(l),t.stopPropagation&&Yl.add(o);const c=e(l,o),u=(p,x)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",d),ts.has(l)&&ts.delete(l),ql(p)&&typeof c=="function"&&c(p,{success:x})},f=p=>{u(p,l===window||l===document||t.useGlobalTarget||Uf(l,p.target))},d=p=>{u(p,!1)};window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",d,r)};return i.forEach(o=>{(t.useGlobalTarget?window:o).addEventListener("pointerdown",a,r),hm(o)&&(o.addEventListener("focus",c=>vm(c,r)),!gm(o)&&!o.hasAttribute("tabindex")&&(o.tabIndex=0))}),s}function tl(n){return Fu(n)&&"ownerSVGElement"in n}const ns=new WeakMap;let is;const Ff=(n,e,t)=>(i,r)=>r&&r[0]?r[0][n+"Size"]:tl(i)&&"getBBox"in i?i.getBBox()[e]:i[t],bm=Ff("inline","width","offsetWidth"),ym=Ff("block","height","offsetHeight");function Sm({target:n,borderBoxSize:e}){ns.get(n)?.forEach(t=>{t(n,{get width(){return bm(n,e)},get height(){return ym(n,e)}})})}function Mm(n){n.forEach(Sm)}function Tm(){typeof ResizeObserver>"u"||(is=new ResizeObserver(Mm))}function Em(n,e){is||Tm();const t=Cf(n);return t.forEach(i=>{let r=ns.get(i);r||(r=new Set,ns.set(i,r)),r.add(e),is?.observe(i)}),()=>{t.forEach(i=>{const r=ns.get(i);r?.delete(e),r?.size||is?.unobserve(i)})}}const rs=new Set;let Li;function Am(){Li=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};rs.forEach(e=>e(n))},window.addEventListener("resize",Li)}function wm(n){return rs.add(n),Li||Am(),()=>{rs.delete(n),!rs.size&&typeof Li=="function"&&(window.removeEventListener("resize",Li),Li=void 0)}}function hM(n,e){return typeof n=="function"?wm(n):Em(n,e)}function pM(n,e){let t;const i=()=>{const{currentTime:r}=e,a=(r===null?0:r.value)/100;t!==a&&n(a),t=a};return wt.preUpdate(i,!0),()=>Gn(i)}function Rm(n){return tl(n)&&n.tagName==="svg"}function mM(...n){const e=!Array.isArray(n[0]),t=e?0:-1,i=n[0+t],r=n[1+t],s=n[2+t],a=n[3+t],o=lf(r,s,a);return e?o(i):o}const Cm=[...Af,xt,Hn],Pm=n=>Cm.find(Ef(n)),jl=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ii=()=>({x:jl(),y:jl()}),Kl=()=>({min:0,max:0}),_t=()=>({x:Kl(),y:Kl()}),Dm=new WeakMap;function Nf(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function nl(n){return typeof n=="string"||Array.isArray(n)}const il=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],rl=["initial",...il];function Of(n){return Nf(n.animate)||rl.some(e=>nl(n[e]))}function Lm(n){return!!(Of(n)||n.variants)}function Im(n,e,t){for(const i in e){const r=e[i],s=t[i];if(Nt(r))n.addValue(i,r);else if(Nt(s))n.addValue(i,Vi(r,{owner:n}));else if(s!==r)if(n.hasValue(i)){const a=n.getValue(i);a.liveStyle===!0?a.jump(r):a.hasAnimated||a.set(r)}else{const a=n.getStaticValue(i);n.addValue(i,Vi(a!==void 0?a:r,{owner:n}))}}for(const i in t)e[i]===void 0&&n.removeValue(i);return e}const ka={current:null},Bf={current:!1},Um=typeof window<"u";function Fm(){if(Bf.current=!0,!!Um)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>ka.current=n.matches;n.addEventListener("change",e),e()}else ka.current=!1}const $l=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ps={};function xM(n){ps=n}function gM(){return ps}class Vf{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:a,visualState:o},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Zo,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=Dt.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,wt.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=u,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!a,this.isControllingVariants=Of(t),this.isVariantNode=Lm(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:f,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(const p in d){const x=d[p];c[p]!==void 0&&Nt(x)&&x.set(c[p])}}mount(e){if(this.hasBeenMounted)for(const t in this.initialValues)this.values.get(t)?.jump(this.initialValues[t]),this.latestValues[t]=this.initialValues[t];this.current=e,Dm.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,i)=>this.bindToMotionValue(i,t)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Bf.current||Fm(),this.shouldReduceMotion=ka.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Gn(this.notifyUpdate),Gn(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&dm.has(e)&&this.current instanceof HTMLElement){const{factory:a,keyframes:o,times:l,ease:c,duration:u}=t.accelerate,f=new mf({element:this.current,name:e,keyframes:o,times:l,ease:c,duration:yn(u)}),d=a(f);this.valueSubscriptions.set(e,()=>{d(),f.cancel()});return}const i=Yi.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=t.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&wt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),s&&s(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in ps){const t=ps[e];if(!t)continue;const{isEnabled:i,Feature:r}=t;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):_t()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<$l.length;i++){const r=$l[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,a=e[s];a&&(this.propEventSubscriptions[r]=this.on(r,a))}this.prevMotionValues=Im(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&t!==void 0&&(i=Vi(t===null?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(Uu(i)||Nu(i))?i=parseFloat(i):!Pm(i)&&Hn.test(t)&&(i=Rf(e,t)),this.setBaseTarget(e,Nt(i)?i.get():i)),Nt(i)?i.get():i}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let i;if(typeof t=="string"||typeof t=="object"){const s=yf(this.props,t,this.presenceContext?.custom);s&&(i=s[e])}if(t&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Nt(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new ko),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Df.render(this.render)}}class kf extends Vf{constructor(){super(...arguments),this.KeyframeResolver=fm}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const i=e.style;return i?i[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Nt(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class _M{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Nm({top:n,left:e,right:t,bottom:i}){return{x:{min:e,max:t},y:{min:n,max:i}}}function vM({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function Om(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function Os(n){return n===void 0||n===1}function za({scale:n,scaleX:e,scaleY:t}){return!Os(n)||!Os(e)||!Os(t)}function ri(n){return za(n)||zf(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function zf(n){return Zl(n.x)||Zl(n.y)}function Zl(n){return n&&n!=="0%"}function ms(n,e,t){const i=n-t,r=e*i;return t+r}function Jl(n,e,t,i,r){return r!==void 0&&(n=ms(n,r,i)),ms(n,t,i)+e}function Ga(n,e=0,t=1,i,r){n.min=Jl(n.min,e,t,i,r),n.max=Jl(n.max,e,t,i,r)}function Gf(n,{x:e,y:t}){Ga(n.x,e.translate,e.scale,e.originPoint),Ga(n.y,t.translate,t.scale,t.originPoint)}const Ql=.999999999999,ec=1.0000000000001;function Bm(n,e,t,i=!1){const r=t.length;if(!r)return;e.x=e.y=1;let s,a;for(let o=0;o<r;o++){s=t[o],a=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Fi(n,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),a&&(e.x*=a.x.scale,e.y*=a.y.scale,Gf(n,a)),i&&ri(s.latestValues)&&Fi(n,s.latestValues))}e.x<ec&&e.x>Ql&&(e.x=1),e.y<ec&&e.y>Ql&&(e.y=1)}function Ui(n,e){n.min=n.min+e,n.max=n.max+e}function tc(n,e,t,i,r=.5){const s=vt(n.min,n.max,r);Ga(n,e,t,s,i)}function Fi(n,e){tc(n.x,e.x,e.scaleX,e.scale,e.originX),tc(n.y,e.y,e.scaleY,e.scale,e.originY)}function Hf(n,e){return Nm(Om(n.getBoundingClientRect(),e))}function bM(n,e,t){const i=Hf(n,t),{scroll:r}=e;return r&&(Ui(i.x,r.offset.x),Ui(i.y,r.offset.y)),i}const Vm={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},km=qi.length;function zm(n,e,t){let i="",r=!0;for(let s=0;s<km;s++){const a=qi[s],o=n[a];if(o===void 0)continue;let l=!0;if(typeof o=="number")l=o===(a.startsWith("scale")?1:0);else{const c=parseFloat(o);l=a.startsWith("scale")?c===1:c===0}if(!l||t){const c=Pf(o,el[a]);if(!l){r=!1;const u=Vm[a]||a;i+=`${u}(${c}) `}t&&(e[a]=c)}}return i=i.trim(),t?i=t(e,r?"":i):r&&(i="none"),i}function Wf(n,e,t){const{style:i,vars:r,transformOrigin:s}=n;let a=!1,o=!1;for(const l in e){const c=e[l];if(Yi.has(l)){a=!0;continue}else if(Zu(l)){r[l]=c;continue}else{const u=Pf(c,el[l]);l.startsWith("origin")?(o=!0,s[l]=u):i[l]=u}}if(e.transform||(a||t?i.transform=zm(e,n.transform,t):i.transform&&(i.transform="none")),o){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}function Xf(n,{style:e,vars:t},i,r){const s=n.style;let a;for(a in e)s[a]=e[a];r?.applyProjectionStyles(s,i);for(a in t)s.setProperty(a,t[a])}function nc(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const er={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(me.test(n))n=parseFloat(n);else return n;const t=nc(n,e.target.x),i=nc(n,e.target.y);return`${t}% ${i}%`}},Gm={correct:(n,{treeScale:e,projectionDelta:t})=>{const i=n,r=Hn.parse(n);if(r.length>5)return i;const s=Hn.createTransformer(n),a=typeof r[0]!="number"?1:0,o=t.x.scale*e.x,l=t.y.scale*e.y;r[0+a]/=o,r[1+a]/=l;const c=vt(o,l,.5);return typeof r[2+a]=="number"&&(r[2+a]/=c),typeof r[3+a]=="number"&&(r[3+a]/=c),s(r)}},Ha={borderRadius:{...er,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:er,borderTopRightRadius:er,borderBottomLeftRadius:er,borderBottomRightRadius:er,boxShadow:Gm};function Hm(n,{layout:e,layoutId:t}){return Yi.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Ha[n]||n==="opacity")}function qf(n,e,t){const i=n.style,r=e?.style,s={};if(!i)return s;for(const a in i)(Nt(i[a])||r&&Nt(r[a])||Hm(a,n)||t?.getValue(a)?.liveStyle!==void 0)&&(s[a]=i[a]);return s}function Wm(n){return window.getComputedStyle(n)}class yM extends kf{constructor(){super(...arguments),this.type="html",this.renderInstance=Xf}readValueFromInstance(e,t){if(Yi.has(t))return this.projection?.isProjecting?Da(t):up(e,t);{const i=Wm(e),r=(Zu(t)?i.getPropertyValue(t):i[t])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Hf(e,t)}build(e,t,i){Wf(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return qf(e,t,i)}}function Xm(n,e){return n in e}class SM extends Vf{constructor(){super(...arguments),this.type="object"}readValueFromInstance(e,t){if(Xm(t,e)){const i=e[t];if(typeof i=="string"||typeof i=="number")return i}}getBaseTargetFromProps(){}removeValueFromRenderState(e,t){delete t.output[e]}measureInstanceViewportBox(){return _t()}build(e,t){Object.assign(e.output,t)}renderInstance(e,{output:t}){Object.assign(e,t)}sortInstanceNodePosition(){return 0}}const qm={offset:"stroke-dashoffset",array:"stroke-dasharray"},Ym={offset:"strokeDashoffset",array:"strokeDasharray"};function jm(n,e,t=1,i=0,r=!0){n.pathLength=1;const s=r?qm:Ym;n[s.offset]=`${-i}`,n[s.array]=`${e} ${t}`}const Km=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function $m(n,{attrX:e,attrY:t,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:a=0,...o},l,c,u){if(Wf(n,o,c),l){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:f,style:d}=n;f.transform&&(d.transform=f.transform,delete f.transform),(d.transform||f.transformOrigin)&&(d.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),d.transform&&(d.transformBox=u?.transformBox??"fill-box",delete f.transformBox);for(const p of Km)f[p]!==void 0&&(d[p]=f[p],delete f[p]);e!==void 0&&(f.x=e),t!==void 0&&(f.y=t),i!==void 0&&(f.scale=i),r!==void 0&&jm(f,r,s,a,!1)}const Yf=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Zm=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Jm(n,e,t,i){Xf(n,e,void 0,i);for(const r in e.attrs)n.setAttribute(Yf.has(r)?r:Qo(r),e.attrs[r])}function Qm(n,e,t){const i=qf(n,e,t);for(const r in n)if(Nt(n[r])||Nt(e[r])){const s=qi.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=n[r]}return i}class MM extends kf{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=_t}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Yi.has(t)){const i=wf(t);return i&&i.default||0}return t=Yf.has(t)?t:Qo(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return Qm(e,t,i)}build(e,t,i){$m(e,t,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,t,i,r){Jm(e,t,i,r)}mount(e){this.isSVGTag=Zm(e.tagName),super.mount(e)}}const e0=rl.length;function jf(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?jf(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<e0;t++){const i=rl[t],r=n.props[i];(nl(r)||r===!1)&&(e[i]=r)}return e}function Kf(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let i=0;i<t;i++)if(e[i]!==n[i])return!1;return!0}const t0=[...il].reverse(),n0=il.length;function i0(n){return e=>Promise.all(e.map(({animation:t,options:i})=>tm(n,t,i)))}function TM(n){let e=i0(n),t=ic(),i=!0;const r=l=>(c,u)=>{const f=Ni(n,u,l==="exit"?n.presenceContext?.custom:void 0);if(f){const{transition:d,transitionEnd:p,...x}=f;c={...c,...x,...p}}return c};function s(l){e=l(n)}function a(l){const{props:c}=n,u=jf(n.parent)||{},f=[],d=new Set;let p={},x=1/0;for(let m=0;m<n0;m++){const h=t0[m],E=t[h],S=c[h]!==void 0?c[h]:u[h],A=nl(S),w=h===l?E.isActive:null;w===!1&&(x=m);let M=S===u[h]&&S!==c[h]&&A;if(M&&i&&n.manuallyAnimateOnMount&&(M=!1),E.protectedKeys={...p},!E.isActive&&w===null||!S&&!E.prevProp||Nf(S)||typeof S=="boolean")continue;if(h==="exit"&&E.isActive&&w!==!0){E.prevResolvedValues&&(p={...p,...E.prevResolvedValues});continue}const D=r0(E.prevProp,S);let C=D||h===l&&E.isActive&&!M&&A||m>x&&A,y=!1;const b=Array.isArray(S)?S:[S];let I=b.reduce(r(h),{});w===!1&&(I={});const{prevResolvedValues:B={}}=E,G={...B,...I},X=V=>{C=!0,d.has(V)&&(y=!0,d.delete(V)),E.needsAnimating[V]=!0;const R=n.getValue(V);R&&(R.liveStyle=!1)};for(const V in G){const R=I[V],K=B[V];if(p.hasOwnProperty(V))continue;let J=!1;Oa(R)&&Oa(K)?J=!Kf(R,K):J=R!==K,J?R!=null?X(V):d.add(V):R!==void 0&&d.has(V)?X(V):E.protectedKeys[V]=!0}E.prevProp=S,E.prevResolvedValues=I,E.isActive&&(p={...p,...I}),i&&n.blockInitialAnimation&&(C=!1);const q=M&&D;C&&(!q||y)&&f.push(...b.map(V=>{const R={type:h};if(typeof V=="string"&&i&&!q&&n.manuallyAnimateOnMount&&n.parent){const{parent:K}=n,J=Ni(K,V);if(K.enteringChildren&&J){const{delayChildren:xe}=J.transition||{};R.delay=gf(K.enteringChildren,n,xe)}}return{animation:V,options:R}}))}if(d.size){const m={};if(typeof c.initial!="boolean"){const h=Ni(n,Array.isArray(c.initial)?c.initial[0]:c.initial);h&&h.transition&&(m.transition=h.transition)}d.forEach(h=>{const E=n.getBaseTarget(h),S=n.getValue(h);S&&(S.liveStyle=!0),m[h]=E??null}),f.push({animation:m})}let _=!!f.length;return i&&(c.initial===!1||c.initial===c.animate)&&!n.manuallyAnimateOnMount&&(_=!1),i=!1,_?e(f):Promise.resolve()}function o(l,c){if(t[l].isActive===c)return Promise.resolve();n.variantChildren?.forEach(f=>f.animationState?.setActive(l,c)),t[l].isActive=c;const u=a(l);for(const f in t)t[f].protectedKeys={};return u}return{animateChanges:a,setActive:o,setAnimateFunction:s,getState:()=>t,reset:()=>{t=ic()}}}function r0(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Kf(e,n):!1}function $n(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ic(){return{animate:$n(!0),whileInView:$n(),whileHover:$n(),whileTap:$n(),whileDrag:$n(),whileFocus:$n(),exit:$n()}}function rc(n,e){n.min=e.min,n.max=e.max}function $t(n,e){rc(n.x,e.x),rc(n.y,e.y)}function sc(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}const $f=1e-4,s0=1-$f,a0=1+$f,Zf=.01,o0=0-Zf,l0=0+Zf;function Yt(n){return n.max-n.min}function c0(n,e,t){return Math.abs(n-e)<=t}function ac(n,e,t,i=.5){n.origin=i,n.originPoint=vt(e.min,e.max,n.origin),n.scale=Yt(t)/Yt(e),n.translate=vt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=s0&&n.scale<=a0||isNaN(n.scale))&&(n.scale=1),(n.translate>=o0&&n.translate<=l0||isNaN(n.translate))&&(n.translate=0)}function dr(n,e,t,i){ac(n.x,e.x,t.x,i?i.originX:void 0),ac(n.y,e.y,t.y,i?i.originY:void 0)}function oc(n,e,t){n.min=t.min+e.min,n.max=n.min+Yt(e)}function u0(n,e,t){oc(n.x,e.x,t.x),oc(n.y,e.y,t.y)}function lc(n,e,t){n.min=e.min-t.min,n.max=n.min+Yt(e)}function xs(n,e,t){lc(n.x,e.x,t.x),lc(n.y,e.y,t.y)}function cc(n,e,t,i,r){return n-=e,n=ms(n,1/t,i),r!==void 0&&(n=ms(n,1/r,i)),n}function f0(n,e=0,t=1,i=.5,r,s=n,a=n){if(Sn.test(e)&&(e=parseFloat(e),e=vt(a.min,a.max,e/100)-a.min),typeof e!="number")return;let o=vt(s.min,s.max,i);n===s&&(o-=e),n.min=cc(n.min,e,t,o,r),n.max=cc(n.max,e,t,o,r)}function uc(n,e,[t,i,r],s,a){f0(n,e[t],e[i],e[r],e.scale,s,a)}const d0=["x","scaleX","originX"],h0=["y","scaleY","originY"];function fc(n,e,t,i){uc(n.x,e,d0,t?t.x:void 0,i?i.x:void 0),uc(n.y,e,h0,t?t.y:void 0,i?i.y:void 0)}function dc(n){return n.translate===0&&n.scale===1}function Jf(n){return dc(n.x)&&dc(n.y)}function hc(n,e){return n.min===e.min&&n.max===e.max}function p0(n,e){return hc(n.x,e.x)&&hc(n.y,e.y)}function pc(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Qf(n,e){return pc(n.x,e.x)&&pc(n.y,e.y)}function mc(n){return Yt(n.x)/Yt(n.y)}function xc(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}function gc(n){return[n("x"),n("y")]}function m0(n,e,t){let i="";const r=n.x.translate/e.x,s=n.y.translate/e.y,a=t?.z||0;if((r||s||a)&&(i=`translate3d(${r}px, ${s}px, ${a}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:c,rotate:u,rotateX:f,rotateY:d,skewX:p,skewY:x}=t;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),f&&(i+=`rotateX(${f}deg) `),d&&(i+=`rotateY(${d}deg) `),p&&(i+=`skewX(${p}deg) `),x&&(i+=`skewY(${x}deg) `)}const o=n.x.scale*e.x,l=n.y.scale*e.y;return(o!==1||l!==1)&&(i+=`scale(${o}, ${l})`),i||"none"}const ed=["TopLeft","TopRight","BottomLeft","BottomRight"],x0=ed.length,_c=n=>typeof n=="string"?parseFloat(n):n,vc=n=>typeof n=="number"||me.test(n);function g0(n,e,t,i,r,s){r?(n.opacity=vt(0,t.opacity??1,_0(i)),n.opacityExit=vt(e.opacity??1,0,v0(i))):s&&(n.opacity=vt(e.opacity??1,t.opacity??1,i));for(let a=0;a<x0;a++){const o=`border${ed[a]}Radius`;let l=bc(e,o),c=bc(t,o);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||vc(l)===vc(c)?(n[o]=Math.max(vt(_c(l),_c(c),i),0),(Sn.test(c)||Sn.test(l))&&(n[o]+="%")):n[o]=c}(e.rotate||t.rotate)&&(n.rotate=vt(e.rotate||0,t.rotate||0,i))}function bc(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const _0=td(0,.5,Wu),v0=td(.5,.95,qn);function td(n,e,t){return i=>i<n?0:i>e?1:t(Vo(n,e,i))}function b0(n,e,t){const i=Nt(n)?n:Vi(n);return i.start(bf("",i,e,t)),i.animation}function y0(n,e,t,i={passive:!0}){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t)}const S0=(n,e)=>n.depth-e.depth;class M0{constructor(){this.children=[],this.isDirty=!1}add(e){Fo(this.children,e),this.isDirty=!0}remove(e){us(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(S0),this.isDirty=!1,this.children.forEach(e)}}function T0(n,e){const t=Dt.now(),i=({timestamp:r})=>{const s=r-t;s>=e&&(Gn(i),n(s-e))};return wt.setup(i,!0),()=>Gn(i)}function Bs(n){return Nt(n)?n.get():n}class E0{constructor(){this.members=[]}add(e){Fo(this.members,e);for(let t=this.members.length-1;t>=0;t--){const i=this.members[t];if(i===e||i===this.lead||i===this.prevLead)continue;const r=i.instance;r&&r.isConnected===!1&&i.isPresent!==!1&&!i.snapshot&&us(this.members,i)}e.scheduleRender()}remove(e){if(us(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(r=>e===r);if(t===0)return!1;let i;for(let r=t;r>=0;r--){const s=this.members[r],a=s.instance;if(s.isPresent!==!1&&(!a||a.isConnected!==!1)){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,t){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender();const r=i.options.layoutDependency,s=e.options.layoutDependency;if(!(r!==void 0&&s!==void 0&&r===s)){const l=i.instance;l&&l.isConnected===!1&&!i.snapshot||(e.resumeFrom=i,t&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0))}const{crossfade:o}=e.options;o===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:i}=e;t.onExitComplete&&t.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Vs={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ks=["","X","Y","Z"],A0=1e3;let w0=0;function zs(n,e,t,i){const{latestValues:r}=e;r[n]&&(t[n]=r[n],e.setStaticValue(n,0),i&&(i[n]=0))}function nd(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=Mf(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:r,layoutId:s}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",wt,!(r||s))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&nd(i)}function id({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(a={},o=e?.()){this.id=w0++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(P0),this.nodes.forEach(U0),this.nodes.forEach(F0),this.nodes.forEach(D0)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new M0)}addEventListener(a,o){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new ko),this.eventHandlers.get(a).add(o)}notifyListeners(a,...o){const l=this.eventHandlers.get(a);l&&l.notify(...o)}hasListeners(a){return this.eventHandlers.has(a)}mount(a){if(this.instance)return;this.isSVG=tl(a)&&!Rm(a),this.instance=a;const{layoutId:o,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||o)&&(this.isLayoutDirty=!0),n){let u,f=0;const d=()=>this.root.updateBlockedByResize=!1;wt.read(()=>{f=window.innerWidth}),n(a,()=>{const p=window.innerWidth;p!==f&&(f=p,this.root.updateBlockedByResize=!0,u&&u(),u=T0(d,250),Vs.hasAnimatedSinceResize&&(Vs.hasAnimatedSinceResize=!1,this.nodes.forEach(Mc)))})}o&&this.root.registerSharedNode(o,this),this.options.animate!==!1&&c&&(o||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:f,hasRelativeLayoutChanged:d,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||k0,{onLayoutAnimationStart:_,onLayoutAnimationComplete:m}=c.getProps(),h=!this.targetLayout||!Qf(this.targetLayout,p),E=!f&&d;if(this.options.layoutRoot||this.resumeFrom||E||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const S={...Jo(x,"layout"),onPlay:_,onComplete:m};(c.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S),this.setAnimationOrigin(u,E)}else f||Mc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Gn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(N0),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&nd(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(yc);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Sc);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(I0),this.nodes.forEach(R0),this.nodes.forEach(C0)):this.nodes.forEach(Sc),this.clearAllSnapshots();const o=Dt.now();Pt.delta=En(0,1e3/60,o-Pt.timestamp),Pt.timestamp=o,Pt.isProcessing=!0,Ps.update.process(Pt),Ps.preRender.process(Pt),Ps.render.process(Pt),Pt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Df.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(L0),this.sharedNodes.forEach(O0)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,wt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){wt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Yt(this.snapshot.measuredBox.x)&&!Yt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=_t(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let o=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(o=!1),o&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,o=this.projectionDelta&&!Jf(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;a&&this.instance&&(o||ri(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return a&&(l=this.removeTransform(l)),z0(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:a}=this.options;if(!a)return _t();const o=a.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(G0))){const{scroll:c}=this.root;c&&(Ui(o.x,c.offset.x),Ui(o.y,c.offset.y))}return o}removeElementScroll(a){const o=_t();if($t(o,a),this.scroll?.wasRoot)return o;for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:f}=c;c!==this.root&&u&&f.layoutScroll&&(u.wasRoot&&$t(o,a),Ui(o.x,u.offset.x),Ui(o.y,u.offset.y))}return o}applyTransform(a,o=!1){const l=_t();$t(l,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];!o&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Fi(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),ri(u.latestValues)&&Fi(l,u.latestValues)}return ri(this.latestValues)&&Fi(l,this.latestValues),l}removeTransform(a){const o=_t();$t(o,a);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!ri(c.latestValues))continue;za(c.latestValues)&&c.updateSnapshot();const u=_t(),f=c.measurePageBox();$t(u,f),fc(o,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return ri(this.latestValues)&&fc(o,this.latestValues),o}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Pt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){const o=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=o.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=o.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=o.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==o;if(!(a||l&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:f}=this.options;if(!this.layout||!(u||f))return;this.resolvedRelativeTargetAt=Pt.timestamp;const d=this.getClosestProjectingParent();d&&this.linkedParentVersion!==d.layoutVersion&&!d.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(d&&d.layout?this.createRelativeTarget(d,this.layout.layoutBox,d.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=_t(),this.targetWithTransforms=_t()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),u0(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):$t(this.target,this.layout.layoutBox),Gf(this.target,this.targetDelta)):$t(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,d&&!!d.resumingFrom==!!this.resumingFrom&&!d.options.layoutScroll&&d.target&&this.animationProgress!==1?this.createRelativeTarget(d,this.target,d.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||za(this.parent.latestValues)||zf(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(a,o,l){this.relativeParent=a,this.linkedParentVersion=a.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=_t(),this.relativeTargetOrigin=_t(),xs(this.relativeTargetOrigin,o,l),$t(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const a=this.getLead(),o=!!this.resumingFrom||this!==a;let l=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(l=!1),o&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Pt.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;$t(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,d=this.treeScale.y;Bm(this.layoutCorrected,this.treeScale,this.path,o),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=_t());const{target:p}=a;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(sc(this.prevProjectionDelta.x,this.projectionDelta.x),sc(this.prevProjectionDelta.y,this.projectionDelta.y)),dr(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==d||!xc(this.projectionDelta.x,this.prevProjectionDelta.x)||!xc(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){if(this.options.visualElement?.scheduleRender(),a){const o=this.getStack();o&&o.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ii(),this.projectionDelta=Ii(),this.projectionDeltaWithTransform=Ii()}setAnimationOrigin(a,o=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=Ii();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const d=_t(),p=l?l.source:void 0,x=this.layout?this.layout.source:void 0,_=p!==x,m=this.getStack(),h=!m||m.members.length<=1,E=!!(_&&!h&&this.options.crossfade===!0&&!this.path.some(V0));this.animationProgress=0;let S;this.mixTargetDelta=A=>{const w=A/1e3;Tc(f.x,a.x,w),Tc(f.y,a.y,w),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(xs(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),B0(this.relativeTarget,this.relativeTargetOrigin,d,w),S&&p0(this.relativeTarget,S)&&(this.isProjectionDirty=!1),S||(S=_t()),$t(S,this.relativeTarget)),_&&(this.animationValues=u,g0(u,c,this.latestValues,w,E,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Gn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=wt.update(()=>{Vs.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Vi(0)),this.currentAnimation=b0(this.motionValue,[0,1e3],{...a,velocity:0,isSync:!0,onUpdate:o=>{this.mixTargetDelta(o),a.onUpdate&&a.onUpdate(o)},onStop:()=>{},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(A0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:o,target:l,layout:c,latestValues:u}=a;if(!(!o||!l||!c)){if(this!==a&&this.layout&&c&&rd(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||_t();const f=Yt(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+f;const d=Yt(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+d}$t(o,l),Fi(o,u),dr(this.projectionDeltaWithTransform,this.layoutCorrected,o,u)}}registerSharedNode(a,o){this.sharedNodes.has(a)||this.sharedNodes.set(a,new E0),this.sharedNodes.get(a).add(o);const c=o.options.initialPromotionConfig;o.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(o):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){const{layoutId:a}=this.options;return a?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:a}=this.options;return a?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:o,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let o=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(o=!0),!o)return;const c={};l.z&&zs("z",a,c,this.animationValues);for(let u=0;u<ks.length;u++)zs(`rotate${ks[u]}`,a,c,this.animationValues),zs(`skew${ks[u]}`,a,c,this.animationValues);a.render();for(const u in c)a.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);a.scheduleRender()}applyProjectionStyles(a,o){if(!this.instance||this.isSVG)return;if(!this.isVisible){a.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,a.visibility="",a.opacity="",a.pointerEvents=Bs(o?.pointerEvents)||"",a.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(a.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,a.pointerEvents=Bs(o?.pointerEvents)||""),this.hasProjected&&!ri(this.latestValues)&&(a.transform=l?l({},""):"none",this.hasProjected=!1);return}a.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let f=m0(this.projectionDeltaWithTransform,this.treeScale,u);l&&(f=l(u,f)),a.transform=f;const{x:d,y:p}=this.projectionDelta;a.transformOrigin=`${d.origin*100}% ${p.origin*100}% 0`,c.animationValues?a.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:a.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const x in Ha){if(u[x]===void 0)continue;const{correct:_,applyTo:m,isCSSVariable:h}=Ha[x],E=f==="none"?u[x]:_(u[x],c);if(m){const S=m.length;for(let A=0;A<S;A++)a[m[A]]=E}else h?this.options.visualElement.renderState.vars[x]=E:a[x]=E}this.options.layoutId&&(a.pointerEvents=c===this?Bs(o?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>a.currentAnimation?.stop()),this.root.nodes.forEach(yc),this.root.sharedNodes.clear()}}}function R0(n){n.updateLayout()}function C0(n){const e=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:i}=n.layout,{animationType:r}=n.options,s=e.source!==n.layout.source;r==="size"?gc(u=>{const f=s?e.measuredBox[u]:e.layoutBox[u],d=Yt(f);f.min=t[u].min,f.max=f.min+d}):rd(r,e.layoutBox,t)&&gc(u=>{const f=s?e.measuredBox[u]:e.layoutBox[u],d=Yt(t[u]);f.max=f.min+d,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[u].max=n.relativeTarget[u].min+d)});const a=Ii();dr(a,t,e.layoutBox);const o=Ii();s?dr(o,n.applyTransform(i,!0),e.measuredBox):dr(o,t,e.layoutBox);const l=!Jf(a);let c=!1;if(!n.resumeFrom){const u=n.getClosestProjectingParent();if(u&&!u.resumeFrom){const{snapshot:f,layout:d}=u;if(f&&d){const p=_t();xs(p,e.layoutBox,f.layoutBox);const x=_t();xs(x,t,d.layoutBox),Qf(p,x)||(c=!0),u.options.layoutRoot&&(n.relativeTarget=x,n.relativeTargetOrigin=p,n.relativeParent=u)}}}n.notifyListeners("didUpdate",{layout:t,snapshot:e,delta:o,layoutDelta:a,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(n.isLead()){const{onExitComplete:t}=n.options;t&&t()}n.options.transition=void 0}function P0(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function D0(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function L0(n){n.clearSnapshot()}function yc(n){n.clearMeasurements()}function Sc(n){n.isLayoutDirty=!1}function I0(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Mc(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function U0(n){n.resolveTargetDelta()}function F0(n){n.calcProjection()}function N0(n){n.resetSkewAndRotation()}function O0(n){n.removeLeadSnapshot()}function Tc(n,e,t){n.translate=vt(e.translate,0,t),n.scale=vt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Ec(n,e,t,i){n.min=vt(e.min,t.min,i),n.max=vt(e.max,t.max,i)}function B0(n,e,t,i){Ec(n.x,e.x,t.x,i),Ec(n.y,e.y,t.y,i)}function V0(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const k0={duration:.45,ease:[.4,0,.1,1]},Ac=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),wc=Ac("applewebkit/")&&!Ac("chrome/")?Math.round:qn;function Rc(n){n.min=wc(n.min),n.max=wc(n.max)}function z0(n){Rc(n.x),Rc(n.y)}function rd(n,e,t){return n==="position"||n==="preserve-aspect"&&!c0(mc(e),mc(t),.2)}function G0(n){return n!==n.root&&n.scroll?.wasRoot}const H0=id({attachResizeListener:(n,e)=>y0(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Gs={current:void 0},AM=id({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Gs.current){const n=new H0({});n.mount(window),n.setOptions({layoutScroll:!0}),Gs.current=n}return Gs.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"});const sl="181",W0=0,Cc=1,X0=2,sd=1,q0=2,gn=3,Wn=0,Ot=1,_n=2,Mn=0,Oi=1,Pc=2,Dc=3,Lc=4,Y0=5,ai=100,j0=101,K0=102,$0=103,Z0=104,J0=200,Q0=201,ex=202,tx=203,Wa=204,Xa=205,nx=206,ix=207,rx=208,sx=209,ax=210,ox=211,lx=212,cx=213,ux=214,qa=0,Ya=1,ja=2,ki=3,Ka=4,$a=5,Za=6,Ja=7,ad=0,fx=1,dx=2,zn=0,hx=1,px=2,mx=3,xx=4,gx=5,_x=6,vx=7,od=300,zi=301,Gi=302,Qa=303,eo=304,ys=306,to=1e3,vn=1001,no=1002,Gt=1003,bx=1004,Dr=1005,jt=1006,Hs=1007,ui=1008,wn=1009,ld=1010,cd=1011,mr=1012,al=1013,hi=1014,bn=1015,ji=1016,ol=1017,ll=1018,xr=1020,ud=35902,fd=35899,dd=1021,hd=1022,sn=1023,gr=1026,_r=1027,pd=1028,cl=1029,ul=1030,fl=1031,dl=1033,ss=33776,as=33777,os=33778,ls=33779,io=35840,ro=35841,so=35842,ao=35843,oo=36196,lo=37492,co=37496,uo=37808,fo=37809,ho=37810,po=37811,mo=37812,xo=37813,go=37814,_o=37815,vo=37816,bo=37817,yo=37818,So=37819,Mo=37820,To=37821,Eo=36492,Ao=36494,wo=36495,Ro=36283,Co=36284,Po=36285,Do=36286,yx=3200,Sx=3201,Mx=0,Tx=1,Bn="",qt="srgb",Hi="srgb-linear",gs="linear",Qe="srgb",xi=7680,Ic=519,Ex=512,Ax=513,wx=514,md=515,Rx=516,Cx=517,Px=518,Dx=519,Uc=35044,Fc="300 es",ln=2e3,_s=2001;function xd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lx(){const n=vs("canvas");return n.style.display="block",n}const Nc={};function Oc(...n){const e="THREE."+n.shift();console.log(e,...n)}function Be(...n){const e="THREE."+n.shift();console.warn(e,...n)}function ht(...n){const e="THREE."+n.shift();console.error(e,...n)}function vr(...n){const e=n.join(" ");e in Nc||(Nc[e]=!0,Be(...n))}function Ix(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class Ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ws=Math.PI/180,Lo=180/Math.PI;function Sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function Ux(n,e){return(n%e+e)%e}function Xs(n,e,t){return(1-t)*n+t*e}function tr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],p=s[a+1],x=s[a+2],_=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=d,e[t+1]=p,e[t+2]=x,e[t+3]=_;return}if(f!==_||l!==d||c!==p||u!==x){let m=l*d+c*p+u*x+f*_;m<0&&(d=-d,p=-p,x=-x,_=-_,m=-m);let h=1-o;if(m<.9995){const E=Math.acos(m),S=Math.sin(E);h=Math.sin(h*E)/S,o=Math.sin(o*E)/S,l=l*h+d*o,c=c*h+p*o,u=u*h+x*o,f=f*h+_*o}else{l=l*h+d*o,c=c*h+p*o,u=u*h+x*o,f=f*h+_*o;const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],p=s[a+2],x=s[a+3];return e[t]=o*x+u*f+l*p-c*d,e[t+1]=l*x+u*d+c*f-o*p,e[t+2]=c*x+u*p+o*d-l*f,e[t+3]=u*x-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f-d*p*x;break;case"YXZ":this._x=d*u*f+c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f+d*p*x;break;case"ZXY":this._x=d*u*f-c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f-d*p*x;break;case"ZYX":this._x=d*u*f-c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f+d*p*x;break;case"YZX":this._x=d*u*f+c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f-d*p*x;break;case"XZY":this._x=d*u*f-c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f+d*p*x;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qs.copy(this).projectOnVector(e),this.sub(qs)}reflect(e){return this.sub(qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qs=new H,Bc=new Mr;class Ve{constructor(e,t,i,r,s,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],x=i[8],_=r[0],m=r[3],h=r[6],E=r[1],S=r[4],A=r[7],w=r[2],M=r[5],D=r[8];return s[0]=a*_+o*E+l*w,s[3]=a*m+o*S+l*M,s[6]=a*h+o*A+l*D,s[1]=c*_+u*E+f*w,s[4]=c*m+u*S+f*M,s[7]=c*h+u*A+f*D,s[2]=d*_+p*E+x*w,s[5]=d*m+p*S+x*M,s[8]=d*h+p*A+x*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,p=c*s-a*l,x=t*f+i*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ys.makeScale(e,t)),this}rotate(e){return this.premultiply(Ys.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ys.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ys=new Ve,Vc=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kc=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fx(){const n={enabled:!0,workingColorSpace:Hi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Qe&&(r.r=Tn(r.r),r.g=Tn(r.g),r.b=Tn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Bn?gs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return vr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return vr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Hi]:{primaries:e,whitePoint:i,transfer:gs,toXYZ:Vc,fromXYZ:kc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:i,transfer:Qe,toXYZ:Vc,fromXYZ:kc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),n}const $e=Fx();function Tn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let gi;class Nx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gi===void 0&&(gi=vs("canvas")),gi.width=e.width,gi.height=e.height;const r=gi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=gi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Tn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Tn(t[i]/255)*255):t[i]=Tn(t[i]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ox=0;class hl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(js(r[a].image)):s.push(js(r[a]))}else s=js(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function js(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Nx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let Bx=0;const Ks=new H;class Lt extends Ki{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=vn,r=vn,s=jt,a=ui,o=sn,l=wn,c=Lt.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=Sr(),this.name="",this.source=new hl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ks).x}get height(){return this.source.getSize(Ks).y}get depth(){return this.source.getSize(Ks).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==od)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case to:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case no:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case to:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case no:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=od;Lt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],x=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,A=(p+1)/2,w=(h+1)/2,M=(u+d)/4,D=(f+_)/4,C=(x+m)/4;return S>A&&S>w?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=M/i,s=D/i):A>w?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=M/r,s=C/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=D/s,r=C/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-x)*(m-x)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-x)/E,this.y=(f-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vx extends Ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Lt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new hl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends Vx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gd extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kx extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(s,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lr.copy(i.boundingBox)),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),Ir.subVectors(this.max,nr),_i.subVectors(e.a,nr),vi.subVectors(e.b,nr),bi.subVectors(e.c,nr),Pn.subVectors(vi,_i),Dn.subVectors(bi,vi),Zn.subVectors(_i,bi);let t=[0,-Pn.z,Pn.y,0,-Dn.z,Dn.y,0,-Zn.z,Zn.y,Pn.z,0,-Pn.x,Dn.z,0,-Dn.x,Zn.z,0,-Zn.x,-Pn.y,Pn.x,0,-Dn.y,Dn.x,0,-Zn.y,Zn.x,0];return!$s(t,_i,vi,bi,Ir)||(t=[1,0,0,0,1,0,0,0,1],!$s(t,_i,vi,bi,Ir))?!1:(Ur.crossVectors(Pn,Dn),t=[Ur.x,Ur.y,Ur.z],$s(t,_i,vi,bi,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const un=[new H,new H,new H,new H,new H,new H,new H,new H],Zt=new H,Lr=new Tr,_i=new H,vi=new H,bi=new H,Pn=new H,Dn=new H,Zn=new H,nr=new H,Ir=new H,Ur=new H,Jn=new H;function $s(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Jn.fromArray(n,s);const o=r.x*Math.abs(Jn.x)+r.y*Math.abs(Jn.y)+r.z*Math.abs(Jn.z),l=e.dot(Jn),c=t.dot(Jn),u=i.dot(Jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const zx=new Tr,ir=new H,Zs=new H;class pl{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):zx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ir,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(Zs)),this.expandByPoint(ir.copy(e.center).sub(Zs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fn=new H,Js=new H,Fr=new H,Ln=new H,Qs=new H,Nr=new H,ea=new H;class Gx{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Js.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(Js);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Fr),o=Ln.dot(this.direction),l=-Ln.dot(Fr),c=Ln.lengthSq(),u=Math.abs(1-a*a);let f,d,p,x;if(u>0)if(f=a*l-o,d=a*o-l,x=s*u,f>=0)if(d>=-x)if(d<=x){const _=1/u;f*=_,d*=_,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Js).addScaledVector(Fr,d),p}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const i=fn.dot(this.direction),r=fn.dot(fn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,i,r,s){Qs.subVectors(t,e),Nr.subVectors(i,e),ea.crossVectors(Qs,Nr);let a=this.direction.dot(ea),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,e);const l=o*this.direction.dot(Nr.crossVectors(Ln,Nr));if(l<0)return null;const c=o*this.direction.dot(Qs.cross(Ln));if(c<0||l+c>a)return null;const u=-o*Ln.dot(ea);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,i,r,s,a,o,l,c,u,f,d,p,x,_,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,p,x,_,m)}set(e,t,i,r,s,a,o,l,c,u,f,d,p,x,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=x,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/yi.setFromMatrixColumn(e,0).length(),s=1/yi.setFromMatrixColumn(e,1).length(),a=1/yi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*f,x=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+x*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,x=c*u,_=c*f;t[0]=d+_*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-x,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,x=c*u,_=c*f;t[0]=d-_*o,t[4]=-a*f,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*f,x=o*u,_=o*f;t[0]=l*u,t[4]=x*c-p,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,x=o*l,_=o*c;t[0]=l*u,t[4]=_-d*f,t[8]=x*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+x,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,p=a*c,x=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=a*u,t[9]=p*f-x,t[2]=x*f-p,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hx,e,Wx)}lookAt(e,t,i){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),In.crossVectors(i,kt),In.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),In.crossVectors(i,kt)),In.normalize(),Or.crossVectors(kt,In),r[0]=In.x,r[4]=Or.x,r[8]=kt.x,r[1]=In.y,r[5]=Or.y,r[9]=kt.y,r[2]=In.z,r[6]=Or.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],x=i[2],_=i[6],m=i[10],h=i[14],E=i[3],S=i[7],A=i[11],w=i[15],M=r[0],D=r[4],C=r[8],y=r[12],b=r[1],I=r[5],B=r[9],G=r[13],X=r[2],q=r[6],U=r[10],V=r[14],R=r[3],K=r[7],J=r[11],xe=r[15];return s[0]=a*M+o*b+l*X+c*R,s[4]=a*D+o*I+l*q+c*K,s[8]=a*C+o*B+l*U+c*J,s[12]=a*y+o*G+l*V+c*xe,s[1]=u*M+f*b+d*X+p*R,s[5]=u*D+f*I+d*q+p*K,s[9]=u*C+f*B+d*U+p*J,s[13]=u*y+f*G+d*V+p*xe,s[2]=x*M+_*b+m*X+h*R,s[6]=x*D+_*I+m*q+h*K,s[10]=x*C+_*B+m*U+h*J,s[14]=x*y+_*G+m*V+h*xe,s[3]=E*M+S*b+A*X+w*R,s[7]=E*D+S*I+A*q+w*K,s[11]=E*C+S*B+A*U+w*J,s[15]=E*y+S*G+A*V+w*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],x=e[3],_=e[7],m=e[11],h=e[15];return x*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*p-i*l*p)+_*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*u-s*l*u)+m*(+t*c*f-t*o*p-s*a*f+i*a*p+s*o*u-i*c*u)+h*(-r*o*u-t*l*f+t*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],x=e[12],_=e[13],m=e[14],h=e[15],E=f*m*c-_*d*c+_*l*p-o*m*p-f*l*h+o*d*h,S=x*d*c-u*m*c-x*l*p+a*m*p+u*l*h-a*d*h,A=u*_*c-x*f*c+x*o*p-a*_*p-u*o*h+a*f*h,w=x*f*l-u*_*l-x*o*d+a*_*d+u*o*m-a*f*m,M=t*E+i*S+r*A+s*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/M;return e[0]=E*D,e[1]=(_*d*s-f*m*s-_*r*p+i*m*p+f*r*h-i*d*h)*D,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*h+i*l*h)*D,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*p-i*l*p)*D,e[4]=S*D,e[5]=(u*m*s-x*d*s+x*r*p-t*m*p-u*r*h+t*d*h)*D,e[6]=(x*l*s-a*m*s-x*r*c+t*m*c+a*r*h-t*l*h)*D,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*p+t*l*p)*D,e[8]=A*D,e[9]=(x*f*s-u*_*s-x*i*p+t*_*p+u*i*h-t*f*h)*D,e[10]=(a*_*s-x*o*s+x*i*c-t*_*c-a*i*h+t*o*h)*D,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*p-t*o*p)*D,e[12]=w*D,e[13]=(u*_*r-x*f*r+x*i*d-t*_*d-u*i*m+t*f*m)*D,e[14]=(x*o*r-a*_*r-x*i*l+t*_*l+a*i*m-t*o*m)*D,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,p=s*u,x=s*f,_=a*u,m=a*f,h=o*f,E=l*c,S=l*u,A=l*f,w=i.x,M=i.y,D=i.z;return r[0]=(1-(_+h))*w,r[1]=(p+A)*w,r[2]=(x-S)*w,r[3]=0,r[4]=(p-A)*M,r[5]=(1-(d+h))*M,r[6]=(m+E)*M,r[7]=0,r[8]=(x+S)*D,r[9]=(m-E)*D,r[10]=(1-(d+_))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=yi.set(r[0],r[1],r[2]).length();const a=yi.set(r[4],r[5],r[6]).length(),o=yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jt.copy(this);const c=1/s,u=1/a,f=1/o;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=f,Jt.elements[9]*=f,Jt.elements[10]*=f,t.setFromRotationMatrix(Jt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ln,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let x,_;if(l)x=s/(a-s),_=a*s/(a-s);else if(o===ln)x=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===_s)x=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ln,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let x,_;if(l)x=1/(a-s),_=a/(a-s);else if(o===ln)x=-2/(a-s),_=-(a+s)/(a-s);else if(o===_s)x=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const yi=new H,Jt=new bt,Hx=new H(0,0,0),Wx=new H(1,1,1),In=new H,Or=new H,kt=new H,zc=new bt,Gc=new Mr;class Rn{constructor(e=0,t=0,i=0,r=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gc.setFromEuler(this),this.setFromQuaternion(Gc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class _d{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xx=0;const Hc=new H,Si=new Mr,dn=new bt,Br=new H,rr=new H,qx=new H,Yx=new Mr,Wc=new H(1,0,0),Xc=new H(0,1,0),qc=new H(0,0,1),Yc={type:"added"},jx={type:"removed"},Mi={type:"childadded",child:null},ta={type:"childremoved",child:null};class Ht extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new H,t=new Rn,i=new Mr,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ve}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _d,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(Wc,e)}rotateY(e){return this.rotateOnAxis(Xc,e)}rotateZ(e){return this.rotateOnAxis(qc,e)}translateOnAxis(e,t){return Hc.copy(e).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wc,e)}translateY(e){return this.translateOnAxis(Xc,e)}translateZ(e){return this.translateOnAxis(qc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Br.copy(e):Br.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(rr,Br,this.up):dn.lookAt(Br,rr,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),Si.setFromRotationMatrix(dn),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yc),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jx),ta.child=e,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yc),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,qx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Yx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new H(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new H,hn=new H,na=new H,pn=new H,Ti=new H,Ei=new H,jc=new H,ia=new H,ra=new H,sa=new H,aa=new pt,oa=new pt,la=new pt;class nn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qt.subVectors(e,t),r.cross(Qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Qt.subVectors(r,t),hn.subVectors(i,t),na.subVectors(e,t);const a=Qt.dot(Qt),o=Qt.dot(hn),l=Qt.dot(na),c=hn.dot(hn),u=hn.dot(na),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pn.x),l.addScaledVector(a,pn.y),l.addScaledVector(o,pn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return aa.setScalar(0),oa.setScalar(0),la.setScalar(0),aa.fromBufferAttribute(e,t),oa.fromBufferAttribute(e,i),la.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(aa,s.x),a.addScaledVector(oa,s.y),a.addScaledVector(la,s.z),a}static isFrontFacing(e,t,i,r){return Qt.subVectors(i,t),hn.subVectors(e,t),Qt.cross(hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Qt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return nn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ti.subVectors(r,i),Ei.subVectors(s,i),ia.subVectors(e,i);const l=Ti.dot(ia),c=Ei.dot(ia);if(l<=0&&c<=0)return t.copy(i);ra.subVectors(e,r);const u=Ti.dot(ra),f=Ei.dot(ra);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ti,a);sa.subVectors(e,s);const p=Ti.dot(sa),x=Ei.dot(sa);if(x>=0&&p<=x)return t.copy(s);const _=p*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(Ei,o);const m=u*x-p*f;if(m<=0&&f-u>=0&&p-x>=0)return jc.subVectors(s,r),o=(f-u)/(f-u+(p-x)),t.copy(r).addScaledVector(jc,o);const h=1/(m+_+d);return a=_*h,o=d*h,t.copy(i).addScaledVector(Ti,a).addScaledVector(Ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function ca(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=Ux(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ca(a,s,e+1/3),this.g=ca(a,s,e),this.b=ca(a,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,t=qt){function i(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const i=vd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return $e.workingToColorSpace(At.copy(this),e),Math.round(je(At.r*255,0,255))*65536+Math.round(je(At.g*255,0,255))*256+Math.round(je(At.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(At.copy(this),t);const i=At.r,r=At.g,s=At.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=qt){$e.workingToColorSpace(At.copy(this),e);const t=At.r,i=At.g,r=At.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(Vr);const i=Xs(Un.h,Vr.h,t),r=Xs(Un.s,Vr.s,t),s=Xs(Un.l,Vr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new et;et.NAMES=vd;let Kx=0;class Ss extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=Oi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(i.blending=this.blending),this.side!==Wn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wa&&(i.blendSrc=this.blendSrc),this.blendDst!==Xa&&(i.blendDst=this.blendDst),this.blendEquation!==ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ic&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bd extends Ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new H,kr=new tt;let $x=0;class cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$x++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Uc,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=tr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uc&&(e.usage=this.usage),e}}class yd extends cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Sd extends cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class di extends cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Zx=0;const Xt=new bt,ua=new Ht,Ai=new H,zt=new Tr,sr=new Tr,Mt=new H;class Yn extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xd(e)?Sd:yd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,i){return Xt.makeTranslation(e,t,i),this.applyMatrix4(Xt),this}scale(e,t,i){return Xt.makeScale(e,t,i),this.applyMatrix4(Xt),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new di(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];zt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(zt.min,sr.min),zt.expandByPoint(Mt),Mt.addVectors(zt.max,sr.max),zt.expandByPoint(Mt)):(zt.expandByPoint(sr.min),zt.expandByPoint(sr.max))}zt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Mt.fromBufferAttribute(o,c),l&&(Ai.fromBufferAttribute(e,c),Mt.add(Ai)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new H,l[C]=new H;const c=new H,u=new H,f=new H,d=new tt,p=new tt,x=new tt,_=new H,m=new H;function h(C,y,b){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,b),d.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),x.fromBufferAttribute(s,b),u.sub(c),f.sub(c),p.sub(d),x.sub(d);const I=1/(p.x*x.y-x.x*p.y);isFinite(I)&&(_.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(I),o[C].add(_),o[y].add(_),o[b].add(_),l[C].add(m),l[y].add(m),l[b].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,y=E.length;C<y;++C){const b=E[C],I=b.start,B=b.count;for(let G=I,X=I+B;G<X;G+=3)h(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const S=new H,A=new H,w=new H,M=new H;function D(C){w.fromBufferAttribute(r,C),M.copy(w);const y=o[C];S.copy(y),S.sub(w.multiplyScalar(w.dot(y))).normalize(),A.crossVectors(M,y);const I=A.dot(l[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,I)}for(let C=0,y=E.length;C<y;++C){const b=E[C],I=b.start,B=b.count;for(let G=I,X=I+B;G<X;G+=3)D(e.getX(G+0)),D(e.getX(G+1)),D(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,x=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let h=0;h<u;h++)d[x++]=c[p++]}return new cn(d,u,f)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kc=new bt,Qn=new Gx,zr=new pl,$c=new H,Gr=new H,Hr=new H,Wr=new H,fa=new H,Xr=new H,Zc=new H,qr=new H;class Xn extends Ht{constructor(e=new Yn,t=new bd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Xr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(fa.fromBufferAttribute(f,e),a?Xr.addScaledVector(fa,u):Xr.addScaledVector(fa.sub(t),u))}t.add(Xr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(s),Qn.copy(e.ray).recast(e.near),!(zr.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(zr,$c)===null||Qn.origin.distanceToSquared($c)>(e.far-e.near)**2))&&(Kc.copy(s).invert(),Qn.copy(e.ray).applyMatrix4(Kc),!(i.boundingBox!==null&&Qn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){const m=d[x],h=a[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let A=E,w=S;A<w;A+=3){const M=o.getX(A),D=o.getX(A+1),C=o.getX(A+2);r=Yr(this,h,e,i,c,u,f,M,D,C),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=x,h=_;m<h;m+=3){const E=o.getX(m),S=o.getX(m+1),A=o.getX(m+2);r=Yr(this,a,e,i,c,u,f,E,S,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){const m=d[x],h=a[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let A=E,w=S;A<w;A+=3){const M=A,D=A+1,C=A+2;r=Yr(this,h,e,i,c,u,f,M,D,C),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=x,h=_;m<h;m+=3){const E=m,S=m+1,A=m+2;r=Yr(this,a,e,i,c,u,f,E,S,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Jx(n,e,t,i,r,s,a,o){let l;if(e.side===Ot?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Wn,o),l===null)return null;qr.copy(o),qr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(qr);return c<t.near||c>t.far?null:{distance:c,point:qr.clone(),object:n}}function Yr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Gr),n.getVertexPosition(l,Hr),n.getVertexPosition(c,Wr);const u=Jx(n,e,t,i,Gr,Hr,Wr,Zc);if(u){const f=new H;nn.getBarycoord(Zc,Gr,Hr,Wr,f),r&&(u.uv=nn.getInterpolatedAttribute(r,o,l,c,f,new tt)),s&&(u.uv1=nn.getInterpolatedAttribute(s,o,l,c,f,new tt)),a&&(u.normal=nn.getInterpolatedAttribute(a,o,l,c,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new H,materialIndex:0};nn.getNormal(Gr,Hr,Wr,d.normal),u.face=d,u.barycoord=f}return u}class Er extends Yn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new di(c,3)),this.setAttribute("normal",new di(u,3)),this.setAttribute("uv",new di(f,2));function x(_,m,h,E,S,A,w,M,D,C,y){const b=A/D,I=w/C,B=A/2,G=w/2,X=M/2,q=D+1,U=C+1;let V=0,R=0;const K=new H;for(let J=0;J<U;J++){const xe=J*I-G;for(let Ne=0;Ne<q;Ne++){const Ce=Ne*b-B;K[_]=Ce*E,K[m]=xe*S,K[h]=X,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[h]=M>0?1:-1,u.push(K.x,K.y,K.z),f.push(Ne/D),f.push(1-J/C),V+=1}}for(let J=0;J<C;J++)for(let xe=0;xe<D;xe++){const Ne=d+xe+q*J,Ce=d+xe+q*(J+1),Pe=d+(xe+1)+q*(J+1),We=d+(xe+1)+q*J;l.push(Ne,Ce,We),l.push(Ce,Pe,We),R+=6}o.addGroup(p,R,y),p+=R,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ct(n){const e={};for(let t=0;t<n.length;t++){const i=Wi(n[t]);for(const r in i)e[r]=i[r]}return e}function Qx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Md(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const eg={clone:Wi,merge:Ct};var tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=Qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Td extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new H,Jc=new tt,Qc=new tt;class tn extends Td{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,Jc,Qc),t.subVectors(Qc,Jc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ws*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wi=-90,Ri=1;class ig extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(wi,Ri,e,t);r.layers=this.layers,this.add(r);const s=new tn(wi,Ri,e,t);s.layers=this.layers,this.add(s);const a=new tn(wi,Ri,e,t);a.layers=this.layers,this.add(a);const o=new tn(wi,Ri,e,t);o.layers=this.layers,this.add(o);const l=new tn(wi,Ri,e,t);l.layers=this.layers,this.add(l);const c=new tn(wi,Ri,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ln)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_s)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Ed extends Lt{constructor(e=[],t=zi,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rg extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ed(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Er(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:Wi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:Mn});s.uniforms.tEquirect.value=t;const a=new Xn(r,s),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=jt),new ig(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class jr extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sg={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new jr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class wM extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ag extends Lt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Gt,u=Gt,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ha=new H,og=new H,lg=new Ve;class si{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ha.subVectors(i,t).cross(og.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ha),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lg.getNormalMatrix(e),r=this.coplanarPoint(ha).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new pl,cg=new tt(.5,.5),Kr=new H;class Ad{constructor(e=new si,t=new si,i=new si,r=new si,s=new si,a=new si){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ln,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],p=s[7],x=s[8],_=s[9],m=s[10],h=s[11],E=s[12],S=s[13],A=s[14],w=s[15];if(r[0].setComponents(c-a,p-u,h-x,w-E).normalize(),r[1].setComponents(c+a,p+u,h+x,w+E).normalize(),r[2].setComponents(c+o,p+f,h+_,w+S).normalize(),r[3].setComponents(c-o,p-f,h-_,w-S).normalize(),i)r[4].setComponents(l,d,m,A).normalize(),r[5].setComponents(c-l,p-d,h-m,w-A).normalize();else if(r[4].setComponents(c-l,p-d,h-m,w-A).normalize(),t===ln)r[5].setComponents(c+l,p+d,h+m,w+A).normalize();else if(t===_s)r[5].setComponents(l,d,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){ei.center.set(0,0,0);const t=cg.distanceTo(e.center);return ei.radius=.7071067811865476+t,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Kr.x=r.normal.x>0?e.max.x:e.min.x,Kr.y=r.normal.y>0?e.max.y:e.min.y,Kr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wd extends Lt{constructor(e,t,i=hi,r,s,a,o=Gt,l=Gt,c,u=gr,f=1){if(u!==gr&&u!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Rd extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ms extends Yn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,p=[],x=[],_=[],m=[];for(let h=0;h<u;h++){const E=h*d-a;for(let S=0;S<c;S++){const A=S*f-s;x.push(A,-E,0),_.push(0,0,1),m.push(S/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<o;E++){const S=E+c*h,A=E+c*(h+1),w=E+1+c*(h+1),M=E+1+c*h;p.push(S,A,M),p.push(A,w,M)}this.setIndex(p),this.setAttribute("position",new di(x,3)),this.setAttribute("normal",new di(_,3)),this.setAttribute("uv",new di(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.widthSegments,e.heightSegments)}}class ug extends Ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fg extends Ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dg extends Td{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hg extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class RM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function eu(n,e,t,i){const r=pg(i);switch(t){case dd:return n*e;case pd:return n*e/r.components*r.byteLength;case cl:return n*e/r.components*r.byteLength;case ul:return n*e*2/r.components*r.byteLength;case fl:return n*e*2/r.components*r.byteLength;case hd:return n*e*3/r.components*r.byteLength;case sn:return n*e*4/r.components*r.byteLength;case dl:return n*e*4/r.components*r.byteLength;case ss:case as:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case os:case ls:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ro:case ao:return Math.max(n,16)*Math.max(e,8)/4;case io:case so:return Math.max(n,8)*Math.max(e,8)/2;case oo:case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ho:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case po:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case go:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _o:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case vo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case yo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case So:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case To:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Eo:case Ao:case wo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ro:case Co:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Po:case Do:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pg(n){switch(n){case wn:case ld:return{byteLength:1,components:1};case mr:case cd:case ji:return{byteLength:2,components:1};case ol:case ll:return{byteLength:2,components:4};case hi:case al:case bn:return{byteLength:4,components:1};case ud:case fd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sl}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sl);function Cd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function mg(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<f.length;p++){const x=f[d],_=f[p];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,x=f.length;p<x;p++){const _=f[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var xg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gg=`#ifdef USE_ALPHAHASH
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
#endif`,_g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sg=`#ifdef USE_AOMAP
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
#endif`,Mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cg=`#ifdef USE_IRIDESCENCE
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
#endif`,Pg=`#ifdef USE_BUMPMAP
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
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vg=`#define PI 3.141592653589793
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
} // validated`,kg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zg=`vec3 transformedNormal = objectNormal;
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
#endif`,Gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jg=`#ifdef USE_ENVMAP
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
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i_=`#ifdef USE_GRADIENTMAP
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
}`,r_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o_=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,l_=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,c_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h_=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,p_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,m_=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,x_=`#if defined( RE_IndirectDiffuse )
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
#endif`,g_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,__=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,E_=`#if defined( USE_POINTS_UV )
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
#endif`,A_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,L_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,U_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B_=`#ifdef USE_NORMALMAP
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
#endif`,V_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,X_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Q_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ev=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nv=`#ifdef USE_SKINNING
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
#endif`,iv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rv=`#ifdef USE_SKINNING
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
#endif`,sv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,av=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ov=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lv=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cv=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uv=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xv=`uniform sampler2D t2D;
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
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_v=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`#include <common>
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
}`,Sv=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mv=`#define DISTANCE
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
}`,Tv=`#define DISTANCE
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
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Av=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`uniform float scale;
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
}`,Rv=`uniform vec3 diffuse;
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
}`,Cv=`#include <common>
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
}`,Pv=`uniform vec3 diffuse;
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
}`,Dv=`#define LAMBERT
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
}`,Lv=`#define LAMBERT
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
}`,Iv=`#define MATCAP
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
}`,Uv=`#define MATCAP
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
}`,Fv=`#define NORMAL
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
}`,Nv=`#define NORMAL
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
}`,Ov=`#define PHONG
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
}`,Bv=`#define PHONG
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
}`,Vv=`#define STANDARD
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
}`,kv=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,zv=`#define TOON
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
}`,Gv=`#define TOON
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
}`,Hv=`uniform float size;
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
}`,Wv=`uniform vec3 diffuse;
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
}`,Xv=`#include <common>
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
}`,qv=`uniform vec3 color;
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
}`,Yv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,jv=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:xg,alphahash_pars_fragment:gg,alphamap_fragment:_g,alphamap_pars_fragment:vg,alphatest_fragment:bg,alphatest_pars_fragment:yg,aomap_fragment:Sg,aomap_pars_fragment:Mg,batching_pars_vertex:Tg,batching_vertex:Eg,begin_vertex:Ag,beginnormal_vertex:wg,bsdfs:Rg,iridescence_fragment:Cg,bumpmap_pars_fragment:Pg,clipping_planes_fragment:Dg,clipping_planes_pars_fragment:Lg,clipping_planes_pars_vertex:Ig,clipping_planes_vertex:Ug,color_fragment:Fg,color_pars_fragment:Ng,color_pars_vertex:Og,color_vertex:Bg,common:Vg,cube_uv_reflection_fragment:kg,defaultnormal_vertex:zg,displacementmap_pars_vertex:Gg,displacementmap_vertex:Hg,emissivemap_fragment:Wg,emissivemap_pars_fragment:Xg,colorspace_fragment:qg,colorspace_pars_fragment:Yg,envmap_fragment:jg,envmap_common_pars_fragment:Kg,envmap_pars_fragment:$g,envmap_pars_vertex:Zg,envmap_physical_pars_fragment:l_,envmap_vertex:Jg,fog_vertex:Qg,fog_pars_vertex:e_,fog_fragment:t_,fog_pars_fragment:n_,gradientmap_pars_fragment:i_,lightmap_pars_fragment:r_,lights_lambert_fragment:s_,lights_lambert_pars_fragment:a_,lights_pars_begin:o_,lights_toon_fragment:c_,lights_toon_pars_fragment:u_,lights_phong_fragment:f_,lights_phong_pars_fragment:d_,lights_physical_fragment:h_,lights_physical_pars_fragment:p_,lights_fragment_begin:m_,lights_fragment_maps:x_,lights_fragment_end:g_,logdepthbuf_fragment:__,logdepthbuf_pars_fragment:v_,logdepthbuf_pars_vertex:b_,logdepthbuf_vertex:y_,map_fragment:S_,map_pars_fragment:M_,map_particle_fragment:T_,map_particle_pars_fragment:E_,metalnessmap_fragment:A_,metalnessmap_pars_fragment:w_,morphinstance_vertex:R_,morphcolor_vertex:C_,morphnormal_vertex:P_,morphtarget_pars_vertex:D_,morphtarget_vertex:L_,normal_fragment_begin:I_,normal_fragment_maps:U_,normal_pars_fragment:F_,normal_pars_vertex:N_,normal_vertex:O_,normalmap_pars_fragment:B_,clearcoat_normal_fragment_begin:V_,clearcoat_normal_fragment_maps:k_,clearcoat_pars_fragment:z_,iridescence_pars_fragment:G_,opaque_fragment:H_,packing:W_,premultiplied_alpha_fragment:X_,project_vertex:q_,dithering_fragment:Y_,dithering_pars_fragment:j_,roughnessmap_fragment:K_,roughnessmap_pars_fragment:$_,shadowmap_pars_fragment:Z_,shadowmap_pars_vertex:J_,shadowmap_vertex:Q_,shadowmask_pars_fragment:ev,skinbase_vertex:tv,skinning_pars_vertex:nv,skinning_vertex:iv,skinnormal_vertex:rv,specularmap_fragment:sv,specularmap_pars_fragment:av,tonemapping_fragment:ov,tonemapping_pars_fragment:lv,transmission_fragment:cv,transmission_pars_fragment:uv,uv_pars_fragment:fv,uv_pars_vertex:dv,uv_vertex:hv,worldpos_vertex:pv,background_vert:mv,background_frag:xv,backgroundCube_vert:gv,backgroundCube_frag:_v,cube_vert:vv,cube_frag:bv,depth_vert:yv,depth_frag:Sv,distanceRGBA_vert:Mv,distanceRGBA_frag:Tv,equirect_vert:Ev,equirect_frag:Av,linedashed_vert:wv,linedashed_frag:Rv,meshbasic_vert:Cv,meshbasic_frag:Pv,meshlambert_vert:Dv,meshlambert_frag:Lv,meshmatcap_vert:Iv,meshmatcap_frag:Uv,meshnormal_vert:Fv,meshnormal_frag:Nv,meshphong_vert:Ov,meshphong_frag:Bv,meshphysical_vert:Vv,meshphysical_frag:kv,meshtoon_vert:zv,meshtoon_frag:Gv,points_vert:Hv,points_frag:Wv,shadow_vert:Xv,shadow_frag:qv,sprite_vert:Yv,sprite_frag:jv},ae={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},on={basic:{uniforms:Ct([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ct([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new et(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ct([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ct([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ct([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new et(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ct([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ct([ae.points,ae.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ct([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ct([ae.common,ae.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ct([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ct([ae.sprite,ae.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ct([ae.common,ae.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ct([ae.lights,ae.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};on.physical={uniforms:Ct([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const $r={r:0,b:0,g:0},ti=new Rn,Kv=new bt;function $v(n,e,t,i,r,s,a){const o=new et(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function x(S){let A=S.isScene===!0?S.background:null;return A&&A.isTexture&&(A=(S.backgroundBlurriness>0?t:e).get(A)),A}function _(S){let A=!1;const w=x(S);w===null?h(o,l):w&&w.isColor&&(h(w,1),A=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,A){const w=x(A);w&&(w.isCubeTexture||w.mapping===ys)?(u===void 0&&(u=new Xn(new Er(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Wi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,D,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ti.copy(A.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(ti)),u.material.toneMapped=$e.getTransfer(w.colorSpace)!==Qe,(f!==w||d!==w.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,d=w.version,p=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Xn(new Ms(2,2),new Cn({name:"BackgroundMaterial",uniforms:Wi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=$e.getTransfer(w.colorSpace)!==Qe,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,d=w.version,p=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function h(S,A){S.getRGB($r,Md(n)),i.buffers.color.setClear($r.r,$r.g,$r.b,A,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,A=1){o.set(S),l=A,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,h(o,l)},render:_,addToRenderList:m,dispose:E}}function Zv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(b,I,B,G,X){let q=!1;const U=f(G,B,I);s!==U&&(s=U,c(s.object)),q=p(b,G,B,X),q&&x(b,G,B,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,A(b,I,B,G),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function f(b,I,B){const G=B.wireframe===!0;let X=i[b.id];X===void 0&&(X={},i[b.id]=X);let q=X[I.id];q===void 0&&(q={},X[I.id]=q);let U=q[G];return U===void 0&&(U=d(l()),q[G]=U),U}function d(b){const I=[],B=[],G=[];for(let X=0;X<t;X++)I[X]=0,B[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:G,object:b,attributes:{},index:null}}function p(b,I,B,G){const X=s.attributes,q=I.attributes;let U=0;const V=B.getAttributes();for(const R in V)if(V[R].location>=0){const J=X[R];let xe=q[R];if(xe===void 0&&(R==="instanceMatrix"&&b.instanceMatrix&&(xe=b.instanceMatrix),R==="instanceColor"&&b.instanceColor&&(xe=b.instanceColor)),J===void 0||J.attribute!==xe||xe&&J.data!==xe.data)return!0;U++}return s.attributesNum!==U||s.index!==G}function x(b,I,B,G){const X={},q=I.attributes;let U=0;const V=B.getAttributes();for(const R in V)if(V[R].location>=0){let J=q[R];J===void 0&&(R==="instanceMatrix"&&b.instanceMatrix&&(J=b.instanceMatrix),R==="instanceColor"&&b.instanceColor&&(J=b.instanceColor));const xe={};xe.attribute=J,J&&J.data&&(xe.data=J.data),X[R]=xe,U++}s.attributes=X,s.attributesNum=U,s.index=G}function _(){const b=s.newAttributes;for(let I=0,B=b.length;I<B;I++)b[I]=0}function m(b){h(b,0)}function h(b,I){const B=s.newAttributes,G=s.enabledAttributes,X=s.attributeDivisors;B[b]=1,G[b]===0&&(n.enableVertexAttribArray(b),G[b]=1),X[b]!==I&&(n.vertexAttribDivisor(b,I),X[b]=I)}function E(){const b=s.newAttributes,I=s.enabledAttributes;for(let B=0,G=I.length;B<G;B++)I[B]!==b[B]&&(n.disableVertexAttribArray(B),I[B]=0)}function S(b,I,B,G,X,q,U){U===!0?n.vertexAttribIPointer(b,I,B,X,q):n.vertexAttribPointer(b,I,B,G,X,q)}function A(b,I,B,G){_();const X=G.attributes,q=B.getAttributes(),U=I.defaultAttributeValues;for(const V in q){const R=q[V];if(R.location>=0){let K=X[V];if(K===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(K=b.instanceColor)),K!==void 0){const J=K.normalized,xe=K.itemSize,Ne=e.get(K);if(Ne===void 0)continue;const Ce=Ne.buffer,Pe=Ne.type,We=Ne.bytesPerElement,j=Pe===n.INT||Pe===n.UNSIGNED_INT||K.gpuType===al;if(K.isInterleavedBufferAttribute){const Y=K.data,fe=Y.stride,Le=K.offset;if(Y.isInstancedInterleavedBuffer){for(let be=0;be<R.locationSize;be++)h(R.location+be,Y.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let be=0;be<R.locationSize;be++)m(R.location+be);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let be=0;be<R.locationSize;be++)S(R.location+be,xe/R.locationSize,Pe,J,fe*We,(Le+xe/R.locationSize*be)*We,j)}else{if(K.isInstancedBufferAttribute){for(let Y=0;Y<R.locationSize;Y++)h(R.location+Y,K.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Y=0;Y<R.locationSize;Y++)m(R.location+Y);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let Y=0;Y<R.locationSize;Y++)S(R.location+Y,xe/R.locationSize,Pe,J,xe*We,xe/R.locationSize*Y*We,j)}}else if(U!==void 0){const J=U[V];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(R.location,J);break;case 3:n.vertexAttrib3fv(R.location,J);break;case 4:n.vertexAttrib4fv(R.location,J);break;default:n.vertexAttrib1fv(R.location,J)}}}}E()}function w(){C();for(const b in i){const I=i[b];for(const B in I){const G=I[B];for(const X in G)u(G[X].object),delete G[X];delete I[B]}delete i[b]}}function M(b){if(i[b.id]===void 0)return;const I=i[b.id];for(const B in I){const G=I[B];for(const X in G)u(G[X].object),delete G[X];delete I[B]}delete i[b.id]}function D(b){for(const I in i){const B=i[I];if(B[b.id]===void 0)continue;const G=B[b.id];for(const X in G)u(G[X].object),delete G[X];delete B[b.id]}}function C(){y(),a=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Jv(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let x=0;x<f;x++)p+=u[x];t.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)a(c[x],u[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let x=0;for(let _=0;_<f;_++)x+=u[_]*d[_];t.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Qv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==sn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const C=D===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==wn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==bn&&!C)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Be("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=x>0,M=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:A,vertexTextures:w,maxSamples:M}}function eb(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new si,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const x=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,S=E*4;let A=h.clippingState||null;l.value=A,A=u(x,d,S,p);for(let w=0;w!==S;++w)A[w]=t[w];h.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,x){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,x!==!0||m===null){const h=p+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let S=0,A=p;S!==_;++S,A+=4)a.copy(f[S]).applyMatrix4(E,o),a.normal.toArray(m,A),m[A+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function tb(n){let e=new WeakMap;function t(a,o){return o===Qa?a.mapping=zi:o===eo&&(a.mapping=Gi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qa||o===eo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new rg(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const kn=4,tu=[.125,.215,.35,.446,.526,.582],oi=20,nb=256,ar=new dg,nu=new et;let pa=null,ma=0,xa=0,ga=!1;const ib=new H;class iu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=ib}=s;pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pa,ma,xa),this._renderer.xr.enabled=ga,e.scissorTest=!1,Ci(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:ji,format:sn,colorSpace:Hi,depthBuffer:!1},r=ru(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ru(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rb(s)),this._blurMaterial=ab(s,e,t),this._ggxMaterial=sb(s,e,t)}return r}_compileMaterial(e){const t=new Xn(new Yn,e);this._renderer.compile(t,ar)}_sceneToCubeUV(e,t,i,r,s){const l=new tn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(nu),f.toneMapping=zn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xn(new Er,new bd({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let h=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,h=!0):(m.color.copy(nu),h=!0);for(let S=0;S<6;S++){const A=S%3;A===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):A===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const w=this._cubeSize;Ci(r,A*w,S>2?w:0,w,w),f.setRenderTarget(r),h&&f.render(_,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===zi||e.mapping===Gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=su());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ci(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ar)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=.05+c*.95,p=f*d,{_lodMax:x}=this,_=this._sizeLods[i],m=3*_*(i>x-kn?i-x+kn:0),h=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,Ci(s,m,h,3*_,2*_),r.setRenderTarget(s),r.render(o,ar),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,Ci(e,m,h,3*_,2*_),r.setRenderTarget(e),r.render(o,ar)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ht("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*oi-1),_=s/x,m=isFinite(s)?1+Math.floor(u*_):oi;m>oi&&Be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${oi}`);const h=[];let E=0;for(let D=0;D<oi;++D){const C=D/_,y=Math.exp(-C*C/2);h.push(y),D===0?E+=y:D<m&&(E+=2*y)}for(let D=0;D<h.length;D++)h[D]=h[D]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=x,d.mipInt.value=S-i;const A=this._sizeLods[r],w=3*A*(r>S-kn?r-S+kn:0),M=4*(this._cubeSize-A);Ci(t,w,M,3*A,2*A),l.setRenderTarget(t),l.render(f,ar)}}function rb(n){const e=[],t=[],i=[];let r=n;const s=n-kn+1+tu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-kn?l=tu[a-n+kn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,x=6,_=3,m=2,h=1,E=new Float32Array(_*x*p),S=new Float32Array(m*x*p),A=new Float32Array(h*x*p);for(let M=0;M<p;M++){const D=M%3*2/3-1,C=M>2?0:-1,y=[D,C,0,D+2/3,C,0,D+2/3,C+1,0,D,C,0,D+2/3,C+1,0,D,C+1,0];E.set(y,_*x*M),S.set(d,m*x*M);const b=[M,M,M,M,M,M];A.set(b,h*x*M)}const w=new Yn;w.setAttribute("position",new cn(E,_)),w.setAttribute("uv",new cn(S,m)),w.setAttribute("faceIndex",new cn(A,h)),i.push(new Xn(w,null)),r>kn&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function ru(n,e,t){const i=new pi(n,e,t);return i.texture.mapping=ys,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ci(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function sb(n,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ts(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function ab(n,e,t){const i=new Float32Array(oi),r=new H(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ts(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function su(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ts(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function au(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ts(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Ts(){return`

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
	`}function ob(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Qa||l===eo,u=l===zi||l===Gi;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new iu(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new iu(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function lb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&vr("WebGLRenderer: "+i+" extension not supported."),r}}}function cb(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,x=f.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let S=0,A=E.length;S<A;S+=3){const w=E[S+0],M=E[S+1],D=E[S+2];d.push(w,M,M,D,D,w)}}else if(x!==void 0){const E=x.array;_=x.version;for(let S=0,A=E.length/3-1;S<A;S+=3){const w=S+0,M=S+1,D=S+2;d.push(w,M,M,D,D,w)}}else return;const m=new(xd(d)?Sd:yd)(d,1);m.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function ub(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*a),t.update(p,i,1)}function c(d,p,x){x!==0&&(n.drawElementsInstanced(i,p,s,d*a,x),t.update(p,i,x))}function u(d,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,x);let m=0;for(let h=0;h<x;h++)m+=p[h];t.update(m,i,1)}function f(d,p,x,_){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/a,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,_,0,x);let h=0;for(let E=0;E<x;E++)h+=p[E]*_[E];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function fb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:ht("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function db(n,e,t){const i=new WeakMap,r=new pt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let y=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;p===!0&&(S=1),x===!0&&(S=2),_===!0&&(S=3);let A=o.attributes.position.count*S,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const M=new Float32Array(A*w*4*f),D=new gd(M,A,w,f);D.type=bn,D.needsUpdate=!0;const C=S*4;for(let b=0;b<f;b++){const I=m[b],B=h[b],G=E[b],X=A*w*4*b;for(let q=0;q<I.count;q++){const U=q*C;p===!0&&(r.fromBufferAttribute(I,q),M[X+U+0]=r.x,M[X+U+1]=r.y,M[X+U+2]=r.z,M[X+U+3]=0),x===!0&&(r.fromBufferAttribute(B,q),M[X+U+4]=r.x,M[X+U+5]=r.y,M[X+U+6]=r.z,M[X+U+7]=0),_===!0&&(r.fromBufferAttribute(G,q),M[X+U+8]=r.x,M[X+U+9]=r.y,M[X+U+10]=r.z,M[X+U+11]=G.itemSize===4?r.w:1)}}d={count:f,texture:D,size:new tt(A,w)},i.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function hb(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Pd=new Lt,ou=new wd(1,1),Dd=new gd,Ld=new kx,Id=new Ed,lu=[],cu=[],uu=new Float32Array(16),fu=new Float32Array(9),du=new Float32Array(4);function $i(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=lu[r];if(s===void 0&&(s=new Float32Array(r),lu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Es(n,e){let t=cu[e];t===void 0&&(t=new Int32Array(e),cu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function pb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function xb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function gb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function _b(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;du.set(i),n.uniformMatrix2fv(this.addr,!1,du),St(t,i)}}function vb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;fu.set(i),n.uniformMatrix3fv(this.addr,!1,fu),St(t,i)}}function bb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;uu.set(i),n.uniformMatrix4fv(this.addr,!1,uu),St(t,i)}}function yb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Sb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function Mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function Tb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function Eb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ab(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function wb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function Rb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function Cb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ou.compareFunction=md,s=ou):s=Pd,t.setTexture2D(e||s,r)}function Pb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ld,r)}function Db(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Id,r)}function Lb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Dd,r)}function Ib(n){switch(n){case 5126:return pb;case 35664:return mb;case 35665:return xb;case 35666:return gb;case 35674:return _b;case 35675:return vb;case 35676:return bb;case 5124:case 35670:return yb;case 35667:case 35671:return Sb;case 35668:case 35672:return Mb;case 35669:case 35673:return Tb;case 5125:return Eb;case 36294:return Ab;case 36295:return wb;case 36296:return Rb;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return Db;case 36289:case 36303:case 36311:case 36292:return Lb}}function Ub(n,e){n.uniform1fv(this.addr,e)}function Fb(n,e){const t=$i(e,this.size,2);n.uniform2fv(this.addr,t)}function Nb(n,e){const t=$i(e,this.size,3);n.uniform3fv(this.addr,t)}function Ob(n,e){const t=$i(e,this.size,4);n.uniform4fv(this.addr,t)}function Bb(n,e){const t=$i(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vb(n,e){const t=$i(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kb(n,e){const t=$i(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zb(n,e){n.uniform1iv(this.addr,e)}function Gb(n,e){n.uniform2iv(this.addr,e)}function Hb(n,e){n.uniform3iv(this.addr,e)}function Wb(n,e){n.uniform4iv(this.addr,e)}function Xb(n,e){n.uniform1uiv(this.addr,e)}function qb(n,e){n.uniform2uiv(this.addr,e)}function Yb(n,e){n.uniform3uiv(this.addr,e)}function jb(n,e){n.uniform4uiv(this.addr,e)}function Kb(n,e,t){const i=this.cache,r=e.length,s=Es(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Pd,s[a])}function $b(n,e,t){const i=this.cache,r=e.length,s=Es(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ld,s[a])}function Zb(n,e,t){const i=this.cache,r=e.length,s=Es(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Id,s[a])}function Jb(n,e,t){const i=this.cache,r=e.length,s=Es(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Dd,s[a])}function Qb(n){switch(n){case 5126:return Ub;case 35664:return Fb;case 35665:return Nb;case 35666:return Ob;case 35674:return Bb;case 35675:return Vb;case 35676:return kb;case 5124:case 35670:return zb;case 35667:case 35671:return Gb;case 35668:case 35672:return Hb;case 35669:case 35673:return Wb;case 5125:return Xb;case 36294:return qb;case 36295:return Yb;case 36296:return jb;case 35678:case 36198:case 36298:case 36306:case 35682:return Kb;case 35679:case 36299:case 36307:return $b;case 35680:case 36300:case 36308:case 36293:return Zb;case 36289:case 36303:case 36311:case 36292:return Jb}}class ey{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ib(t.type)}}class ty{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qb(t.type)}}class ny{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function hu(n,e){n.seq.push(e),n.map[e.id]=e}function iy(n,e,t){const i=n.name,r=i.length;for(_a.lastIndex=0;;){const s=_a.exec(i),a=_a.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){hu(t,c===void 0?new ey(o,n,e):new ty(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new ny(o),hu(t,f)),t=f}}}class cs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);iy(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function pu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ry=37297;let sy=0;function ay(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const mu=new Ve;function oy(n){$e._getMatrix(mu,$e.workingColorSpace,n);const e=`mat3( ${mu.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case gs:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function xu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+ay(n.getShaderSource(e),o)}else return s}function ly(n,e){const t=oy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cy(n,e){let t;switch(e){case hx:t="Linear";break;case px:t="Reinhard";break;case mx:t="Cineon";break;case xx:t="ACESFilmic";break;case _x:t="AgX";break;case vx:t="Neutral";break;case gx:t="Custom";break;default:Be("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zr=new H;function uy(){$e.getLuminanceCoefficients(Zr);const n=Zr.x.toFixed(4),e=Zr.y.toFixed(4),t=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function dy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function cr(n){return n!==""}function gu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _u(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const py=/^[ \t]*#include +<([\w\d./]+)>/gm;function Io(n){return n.replace(py,xy)}const my=new Map;function xy(n,e){let t=ze[e];if(t===void 0){const i=my.get(e);if(i!==void 0)t=ze[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Io(t)}const gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(n){return n.replace(gy,_y)}function _y(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===q0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function by(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zi:case Gi:e="ENVMAP_TYPE_CUBE";break;case ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yy(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Gi&&(e="ENVMAP_MODE_REFRACTION"),e}function Sy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ad:e="ENVMAP_BLENDING_MULTIPLY";break;case fx:e="ENVMAP_BLENDING_MIX";break;case dx:e="ENVMAP_BLENDING_ADD";break}return e}function My(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ty(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=vy(t),c=by(t),u=yy(t),f=Sy(t),d=My(t),p=fy(t),x=dy(s),_=r.createProgram();let m,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(cr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(cr).join(`
`),h.length>0&&(h+=`
`)):(m=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),h=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?ze.tonemapping_pars_fragment:"",t.toneMapping!==zn?cy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,ly("linearToOutputTexel",t.outputColorSpace),uy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cr).join(`
`)),a=Io(a),a=gu(a,t),a=_u(a,t),o=Io(o),o=gu(o,t),o=_u(o,t),a=vu(a),o=vu(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=E+m+a,A=E+h+o,w=pu(r,r.VERTEX_SHADER,S),M=pu(r,r.FRAGMENT_SHADER,A);r.attachShader(_,w),r.attachShader(_,M),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(I){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(w)||"",X=r.getShaderInfoLog(M)||"",q=B.trim(),U=G.trim(),V=X.trim();let R=!0,K=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(R=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,w,M);else{const J=xu(r,w,"vertex"),xe=xu(r,M,"fragment");ht("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+q+`
`+J+`
`+xe)}else q!==""?Be("WebGLProgram: Program Info Log:",q):(U===""||V==="")&&(K=!1);K&&(I.diagnostics={runnable:R,programLog:q,vertexShader:{log:U,prefix:m},fragmentShader:{log:V,prefix:h}})}r.deleteShader(w),r.deleteShader(M),C=new cs(r,_),y=hy(r,_)}let C;this.getUniforms=function(){return C===void 0&&D(this),C};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,ry)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=M,this}let Ey=0;class Ay{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new wy(e),t.set(e,i)),i}}class wy{constructor(e){this.id=Ey++,this.code=e,this.usedTimes=0}}function Ry(n,e,t,i,r,s,a){const o=new _d,l=new Ay,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,b,I,B,G){const X=B.fog,q=G.geometry,U=y.isMeshStandardMaterial?B.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||U),R=V&&V.mapping===ys?V.image.height:null,K=x[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&Be("WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const J=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xe=J!==void 0?J.length:0;let Ne=0;q.morphAttributes.position!==void 0&&(Ne=1),q.morphAttributes.normal!==void 0&&(Ne=2),q.morphAttributes.color!==void 0&&(Ne=3);let Ce,Pe,We,j;if(K){const Ze=on[K];Ce=Ze.vertexShader,Pe=Ze.fragmentShader}else Ce=y.vertexShader,Pe=y.fragmentShader,l.update(y),We=l.getVertexShaderID(y),j=l.getFragmentShaderID(y);const Y=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),Le=G.isInstancedMesh===!0,be=G.isBatchedMesh===!0,ke=!!y.map,ct=!!y.matcap,He=!!V,st=!!y.aoMap,P=!!y.lightMap,Xe=!!y.bumpMap,qe=!!y.normalMap,it=!!y.displacementMap,ve=!!y.emissiveMap,at=!!y.metalnessMap,Te=!!y.roughnessMap,Oe=y.anisotropy>0,T=y.clearcoat>0,g=y.dispersion>0,O=y.iridescence>0,$=y.sheen>0,Q=y.transmission>0,W=Oe&&!!y.anisotropyMap,Se=T&&!!y.clearcoatMap,oe=T&&!!y.clearcoatNormalMap,Ee=T&&!!y.clearcoatRoughnessMap,ye=O&&!!y.iridescenceMap,ee=O&&!!y.iridescenceThicknessMap,ie=$&&!!y.sheenColorMap,De=$&&!!y.sheenRoughnessMap,we=!!y.specularMap,ue=!!y.specularColorMap,Ue=!!y.specularIntensityMap,L=Q&&!!y.transmissionMap,le=Q&&!!y.thicknessMap,re=!!y.gradientMap,se=!!y.alphaMap,te=y.alphaTest>0,Z=!!y.alphaHash,ge=!!y.extensions;let Fe=zn;y.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Fe=n.toneMapping);const rt={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:Ce,fragmentShader:Pe,defines:y.defines,customVertexShaderID:We,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:be,batchingColor:be&&G._colorsTexture!==null,instancing:Le,instancingColor:Le&&G.instanceColor!==null,instancingMorph:Le&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Y===null?n.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Hi,alphaToCoverage:!!y.alphaToCoverage,map:ke,matcap:ct,envMap:He,envMapMode:He&&V.mapping,envMapCubeUVHeight:R,aoMap:st,lightMap:P,bumpMap:Xe,normalMap:qe,displacementMap:d&&it,emissiveMap:ve,normalMapObjectSpace:qe&&y.normalMapType===Tx,normalMapTangentSpace:qe&&y.normalMapType===Mx,metalnessMap:at,roughnessMap:Te,anisotropy:Oe,anisotropyMap:W,clearcoat:T,clearcoatMap:Se,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ee,dispersion:g,iridescence:O,iridescenceMap:ye,iridescenceThicknessMap:ee,sheen:$,sheenColorMap:ie,sheenRoughnessMap:De,specularMap:we,specularColorMap:ue,specularIntensityMap:Ue,transmission:Q,transmissionMap:L,thicknessMap:le,gradientMap:re,opaque:y.transparent===!1&&y.blending===Oi&&y.alphaToCoverage===!1,alphaMap:se,alphaTest:te,alphaHash:Z,combine:y.combine,mapUv:ke&&_(y.map.channel),aoMapUv:st&&_(y.aoMap.channel),lightMapUv:P&&_(y.lightMap.channel),bumpMapUv:Xe&&_(y.bumpMap.channel),normalMapUv:qe&&_(y.normalMap.channel),displacementMapUv:it&&_(y.displacementMap.channel),emissiveMapUv:ve&&_(y.emissiveMap.channel),metalnessMapUv:at&&_(y.metalnessMap.channel),roughnessMapUv:Te&&_(y.roughnessMap.channel),anisotropyMapUv:W&&_(y.anisotropyMap.channel),clearcoatMapUv:Se&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(y.sheenRoughnessMap.channel),specularMapUv:we&&_(y.specularMap.channel),specularColorMapUv:ue&&_(y.specularColorMap.channel),specularIntensityMapUv:Ue&&_(y.specularIntensityMap.channel),transmissionMapUv:L&&_(y.transmissionMap.channel),thicknessMapUv:le&&_(y.thicknessMap.channel),alphaMapUv:se&&_(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(qe||Oe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!q.attributes.uv&&(ke||se),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:G.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ne,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ke&&y.map.isVideoTexture===!0&&$e.getTransfer(y.map.colorSpace)===Qe,decodeVideoTextureEmissive:ve&&y.emissiveMap.isVideoTexture===!0&&$e.getTransfer(y.emissiveMap.colorSpace)===Qe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_n,flipSided:y.side===Ot,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ge&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&y.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function h(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)b.push(I),b.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(E(b,y),S(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function E(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function S(y,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),y.push(o.mask)}function A(y){const b=x[y.type];let I;if(b){const B=on[b];I=eg.clone(B.uniforms)}else I=y.uniforms;return I}function w(y,b){let I;for(let B=0,G=u.length;B<G;B++){const X=u[B];if(X.cacheKey===b){I=X,++I.usedTimes;break}}return I===void 0&&(I=new Ty(n,b,y,s),u.push(I)),I}function M(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function D(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:A,acquireProgram:w,releaseProgram:M,releaseShaderCache:D,programs:u,dispose:C}}function Cy(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Py(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function yu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Su(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,p,x,_,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:x,renderOrder:f.renderOrder,z:_,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=x,h.renderOrder=f.renderOrder,h.z=_,h.group=m),e++,h}function o(f,d,p,x,_,m){const h=a(f,d,p,x,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,x,_,m){const h=a(f,d,p,x,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||Py),i.length>1&&i.sort(d||yu),r.length>1&&r.sort(d||yu)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Dy(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Su,n.set(i,[a])):r>=s.length?(a=new Su,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ly(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new et};break;case"SpotLight":t={position:new H,direction:new H,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function Iy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Uy=0;function Fy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ny(n){const e=new Ly,t=Iy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new bt,a=new bt;function o(c){let u=0,f=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,x=0,_=0,m=0,h=0,E=0,S=0,A=0,w=0,M=0,D=0;c.sort(Fy);for(let y=0,b=c.length;y<b;y++){const I=c[y],B=I.color,G=I.intensity,X=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=B.r*G,f+=B.g*G,d+=B.b*G;else if(I.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(I.sh.coefficients[U],G);D++}else if(I.isDirectionalLight){const U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const V=I.shadow,R=t.get(I);R.shadowIntensity=V.intensity,R.shadowBias=V.bias,R.shadowNormalBias=V.normalBias,R.shadowRadius=V.radius,R.shadowMapSize=V.mapSize,i.directionalShadow[p]=R,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=I.shadow.matrix,E++}i.directional[p]=U,p++}else if(I.isSpotLight){const U=e.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(B).multiplyScalar(G),U.distance=X,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,i.spot[_]=U;const V=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,V.updateMatrices(I),I.castShadow&&M++),i.spotLightMatrix[_]=V.matrix,I.castShadow){const R=t.get(I);R.shadowIntensity=V.intensity,R.shadowBias=V.bias,R.shadowNormalBias=V.normalBias,R.shadowRadius=V.radius,R.shadowMapSize=V.mapSize,i.spotShadow[_]=R,i.spotShadowMap[_]=q,A++}_++}else if(I.isRectAreaLight){const U=e.get(I);U.color.copy(B).multiplyScalar(G),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=U,m++}else if(I.isPointLight){const U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),U.distance=I.distance,U.decay=I.decay,I.castShadow){const V=I.shadow,R=t.get(I);R.shadowIntensity=V.intensity,R.shadowBias=V.bias,R.shadowNormalBias=V.normalBias,R.shadowRadius=V.radius,R.shadowMapSize=V.mapSize,R.shadowCameraNear=V.camera.near,R.shadowCameraFar=V.camera.far,i.pointShadow[x]=R,i.pointShadowMap[x]=q,i.pointShadowMatrix[x]=I.shadow.matrix,S++}i.point[x]=U,x++}else if(I.isHemisphereLight){const U=e.get(I);U.skyColor.copy(I.color).multiplyScalar(G),U.groundColor.copy(I.groundColor).multiplyScalar(G),i.hemi[h]=U,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==p||C.pointLength!==x||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==h||C.numDirectionalShadows!==E||C.numPointShadows!==S||C.numSpotShadows!==A||C.numSpotMaps!==w||C.numLightProbes!==D)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=x,i.hemi.length=h,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=A+w-M,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=D,C.directionalLength=p,C.pointLength=x,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=h,C.numDirectionalShadows=E,C.numPointShadows=S,C.numSpotShadows=A,C.numSpotMaps=w,C.numLightProbes=D,i.version=Uy++)}function l(c,u){let f=0,d=0,p=0,x=0,_=0;const m=u.matrixWorldInverse;for(let h=0,E=c.length;h<E;h++){const S=c[h];if(S.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),f++}else if(S.isSpotLight){const A=i.spot[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const A=i.rectArea[x];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const A=i.point[d];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const A=i.hemi[_];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Mu(n){const e=new Ny(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Oy(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Mu(n),e.set(r,[o])):s>=a.length?(o=new Mu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const By=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vy=`uniform sampler2D shadow_pass;
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
}`;function ky(n,e,t){let i=new Ad;const r=new tt,s=new tt,a=new pt,o=new ug({depthPacking:Sx}),l=new fg,c={},u=t.maxTextureSize,f={[Wn]:Ot,[Ot]:Wn,[_n]:_n},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:By,fragmentShader:Vy}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new Yn;x.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xn(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sd;let h=this.type;this.render=function(M,D,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const y=n.getRenderTarget(),b=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Mn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=h!==gn&&this.type===gn,X=h===gn&&this.type!==gn;for(let q=0,U=M.length;q<U;q++){const V=M[q],R=V.shadow;if(R===void 0){Be("WebGLShadowMap:",V,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const K=R.getFrameExtents();if(r.multiply(K),s.copy(R.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,R.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,R.mapSize.y=s.y)),R.map===null||G===!0||X===!0){const xe=this.type!==gn?{minFilter:Gt,magFilter:Gt}:{};R.map!==null&&R.map.dispose(),R.map=new pi(r.x,r.y,xe),R.map.texture.name=V.name+".shadowMap",R.camera.updateProjectionMatrix()}n.setRenderTarget(R.map),n.clear();const J=R.getViewportCount();for(let xe=0;xe<J;xe++){const Ne=R.getViewport(xe);a.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),B.viewport(a),R.updateMatrices(V,xe),i=R.getFrustum(),A(D,C,R.camera,V,this.type)}R.isPointLightShadow!==!0&&this.type===gn&&E(R,C),R.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(y,b,I)};function E(M,D){const C=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new pi(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(D,null,C,d,_,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(D,null,C,p,_,null)}function S(M,D,C,y){let b=null;const I=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)b=I;else if(b=C.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const B=b.uuid,G=D.uuid;let X=c[B];X===void 0&&(X={},c[B]=X);let q=X[G];q===void 0&&(q=b.clone(),X[G]=q,D.addEventListener("dispose",w)),b=q}if(b.visible=D.visible,b.wireframe=D.wireframe,y===gn?b.side=D.shadowSide!==null?D.shadowSide:D.side:b.side=D.shadowSide!==null?D.shadowSide:f[D.side],b.alphaMap=D.alphaMap,b.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,b.map=D.map,b.clipShadows=D.clipShadows,b.clippingPlanes=D.clippingPlanes,b.clipIntersection=D.clipIntersection,b.displacementMap=D.displacementMap,b.displacementScale=D.displacementScale,b.displacementBias=D.displacementBias,b.wireframeLinewidth=D.wireframeLinewidth,b.linewidth=D.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const B=n.properties.get(b);B.light=C}return b}function A(M,D,C,y,b){if(M.visible===!1)return;if(M.layers.test(D.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===gn)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const G=e.update(M),X=M.material;if(Array.isArray(X)){const q=G.groups;for(let U=0,V=q.length;U<V;U++){const R=q[U],K=X[R.materialIndex];if(K&&K.visible){const J=S(M,K,y,b);M.onBeforeShadow(n,M,D,C,G,J,R),n.renderBufferDirect(C,null,G,J,M,R),M.onAfterShadow(n,M,D,C,G,J,R)}}}else if(X.visible){const q=S(M,X,y,b);M.onBeforeShadow(n,M,D,C,G,q,null),n.renderBufferDirect(C,null,G,q,M,null),M.onAfterShadow(n,M,D,C,G,q,null)}}const B=M.children;for(let G=0,X=B.length;G<X;G++)A(B[G],D,C,y,b)}function w(M){M.target.removeEventListener("dispose",w);for(const C in c){const y=c[C],b=M.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}const zy={[qa]:Ya,[ja]:Za,[Ka]:Ja,[ki]:$a,[Ya]:qa,[Za]:ja,[Ja]:Ka,[$a]:ki};function Gy(n,e){function t(){let L=!1;const le=new pt;let re=null;const se=new pt(0,0,0,0);return{setMask:function(te){re!==te&&!L&&(n.colorMask(te,te,te,te),re=te)},setLocked:function(te){L=te},setClear:function(te,Z,ge,Fe,rt){rt===!0&&(te*=Fe,Z*=Fe,ge*=Fe),le.set(te,Z,ge,Fe),se.equals(le)===!1&&(n.clearColor(te,Z,ge,Fe),se.copy(le))},reset:function(){L=!1,re=null,se.set(-1,0,0,0)}}}function i(){let L=!1,le=!1,re=null,se=null,te=null;return{setReversed:function(Z){if(le!==Z){const ge=e.get("EXT_clip_control");Z?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),le=Z;const Fe=te;te=null,this.setClear(Fe)}},getReversed:function(){return le},setTest:function(Z){Z?Y(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(Z){re!==Z&&!L&&(n.depthMask(Z),re=Z)},setFunc:function(Z){if(le&&(Z=zy[Z]),se!==Z){switch(Z){case qa:n.depthFunc(n.NEVER);break;case Ya:n.depthFunc(n.ALWAYS);break;case ja:n.depthFunc(n.LESS);break;case ki:n.depthFunc(n.LEQUAL);break;case Ka:n.depthFunc(n.EQUAL);break;case $a:n.depthFunc(n.GEQUAL);break;case Za:n.depthFunc(n.GREATER);break;case Ja:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=Z}},setLocked:function(Z){L=Z},setClear:function(Z){te!==Z&&(le&&(Z=1-Z),n.clearDepth(Z),te=Z)},reset:function(){L=!1,re=null,se=null,te=null,le=!1}}}function r(){let L=!1,le=null,re=null,se=null,te=null,Z=null,ge=null,Fe=null,rt=null;return{setTest:function(Ze){L||(Ze?Y(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(Ze){le!==Ze&&!L&&(n.stencilMask(Ze),le=Ze)},setFunc:function(Ze,an,Kt){(re!==Ze||se!==an||te!==Kt)&&(n.stencilFunc(Ze,an,Kt),re=Ze,se=an,te=Kt)},setOp:function(Ze,an,Kt){(Z!==Ze||ge!==an||Fe!==Kt)&&(n.stencilOp(Ze,an,Kt),Z=Ze,ge=an,Fe=Kt)},setLocked:function(Ze){L=Ze},setClear:function(Ze){rt!==Ze&&(n.clearStencil(Ze),rt=Ze)},reset:function(){L=!1,le=null,re=null,se=null,te=null,Z=null,ge=null,Fe=null,rt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],x=null,_=!1,m=null,h=null,E=null,S=null,A=null,w=null,M=null,D=new et(0,0,0),C=0,y=!1,b=null,I=null,B=null,G=null,X=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,V=0;const R=n.getParameter(n.VERSION);R.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(R)[1]),U=V>=1):R.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),U=V>=2);let K=null,J={};const xe=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),Ce=new pt().fromArray(xe),Pe=new pt().fromArray(Ne);function We(L,le,re,se){const te=new Uint8Array(4),Z=n.createTexture();n.bindTexture(L,Z),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ge=0;ge<re;ge++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,se,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(le+ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return Z}const j={};j[n.TEXTURE_2D]=We(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=We(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=We(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=We(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(n.DEPTH_TEST),a.setFunc(ki),Xe(!1),qe(Cc),Y(n.CULL_FACE),st(Mn);function Y(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function fe(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Le(L,le){return f[L]!==le?(n.bindFramebuffer(L,le),f[L]=le,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=le),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=le),!0):!1}function be(L,le){let re=p,se=!1;if(L){re=d.get(le),re===void 0&&(re=[],d.set(le,re));const te=L.textures;if(re.length!==te.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,ge=te.length;Z<ge;Z++)re[Z]=n.COLOR_ATTACHMENT0+Z;re.length=te.length,se=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,se=!0);se&&n.drawBuffers(re)}function ke(L){return x!==L?(n.useProgram(L),x=L,!0):!1}const ct={[ai]:n.FUNC_ADD,[j0]:n.FUNC_SUBTRACT,[K0]:n.FUNC_REVERSE_SUBTRACT};ct[$0]=n.MIN,ct[Z0]=n.MAX;const He={[J0]:n.ZERO,[Q0]:n.ONE,[ex]:n.SRC_COLOR,[Wa]:n.SRC_ALPHA,[ax]:n.SRC_ALPHA_SATURATE,[rx]:n.DST_COLOR,[nx]:n.DST_ALPHA,[tx]:n.ONE_MINUS_SRC_COLOR,[Xa]:n.ONE_MINUS_SRC_ALPHA,[sx]:n.ONE_MINUS_DST_COLOR,[ix]:n.ONE_MINUS_DST_ALPHA,[ox]:n.CONSTANT_COLOR,[lx]:n.ONE_MINUS_CONSTANT_COLOR,[cx]:n.CONSTANT_ALPHA,[ux]:n.ONE_MINUS_CONSTANT_ALPHA};function st(L,le,re,se,te,Z,ge,Fe,rt,Ze){if(L===Mn){_===!0&&(fe(n.BLEND),_=!1);return}if(_===!1&&(Y(n.BLEND),_=!0),L!==Y0){if(L!==m||Ze!==y){if((h!==ai||A!==ai)&&(n.blendEquation(n.FUNC_ADD),h=ai,A=ai),Ze)switch(L){case Oi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pc:n.blendFunc(n.ONE,n.ONE);break;case Dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ht("WebGLState: Invalid blending: ",L);break}else switch(L){case Oi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Dc:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lc:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",L);break}E=null,S=null,w=null,M=null,D.set(0,0,0),C=0,m=L,y=Ze}return}te=te||le,Z=Z||re,ge=ge||se,(le!==h||te!==A)&&(n.blendEquationSeparate(ct[le],ct[te]),h=le,A=te),(re!==E||se!==S||Z!==w||ge!==M)&&(n.blendFuncSeparate(He[re],He[se],He[Z],He[ge]),E=re,S=se,w=Z,M=ge),(Fe.equals(D)===!1||rt!==C)&&(n.blendColor(Fe.r,Fe.g,Fe.b,rt),D.copy(Fe),C=rt),m=L,y=!1}function P(L,le){L.side===_n?fe(n.CULL_FACE):Y(n.CULL_FACE);let re=L.side===Ot;le&&(re=!re),Xe(re),L.blending===Oi&&L.transparent===!1?st(Mn):st(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const se=L.stencilWrite;o.setTest(se),se&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ve(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Y(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(L){b!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),b=L)}function qe(L){L!==W0?(Y(n.CULL_FACE),L!==I&&(L===Cc?n.cullFace(n.BACK):L===X0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),I=L}function it(L){L!==B&&(U&&n.lineWidth(L),B=L)}function ve(L,le,re){L?(Y(n.POLYGON_OFFSET_FILL),(G!==le||X!==re)&&(n.polygonOffset(le,re),G=le,X=re)):fe(n.POLYGON_OFFSET_FILL)}function at(L){L?Y(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function Te(L){L===void 0&&(L=n.TEXTURE0+q-1),K!==L&&(n.activeTexture(L),K=L)}function Oe(L,le,re){re===void 0&&(K===null?re=n.TEXTURE0+q-1:re=K);let se=J[re];se===void 0&&(se={type:void 0,texture:void 0},J[re]=se),(se.type!==L||se.texture!==le)&&(K!==re&&(n.activeTexture(re),K=re),n.bindTexture(L,le||j[L]),se.type=L,se.texture=le)}function T(){const L=J[K];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function $(){try{n.texSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Q(){try{n.texSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Se(){try{n.compressedTexSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function oe(){try{n.texStorage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Ee(){try{n.texStorage3D(...arguments)}catch(L){L("WebGLState:",L)}}function ye(){try{n.texImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function ee(){try{n.texImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function ie(L){Ce.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ce.copy(L))}function De(L){Pe.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Pe.copy(L))}function we(L,le){let re=c.get(le);re===void 0&&(re=new WeakMap,c.set(le,re));let se=re.get(L);se===void 0&&(se=n.getUniformBlockIndex(le,L.name),re.set(L,se))}function ue(L,le){const se=c.get(le).get(L);l.get(le)!==se&&(n.uniformBlockBinding(le,se,L.__bindingPointIndex),l.set(le,se))}function Ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},K=null,J={},f={},d=new WeakMap,p=[],x=null,_=!1,m=null,h=null,E=null,S=null,A=null,w=null,M=null,D=new et(0,0,0),C=0,y=!1,b=null,I=null,B=null,G=null,X=null,Ce.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Y,disable:fe,bindFramebuffer:Le,drawBuffers:be,useProgram:ke,setBlending:st,setMaterial:P,setFlipSided:Xe,setCullFace:qe,setLineWidth:it,setPolygonOffset:ve,setScissorTest:at,activeTexture:Te,bindTexture:Oe,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:O,texImage2D:ye,texImage3D:ee,updateUBOMapping:we,uniformBlockBinding:ue,texStorage2D:oe,texStorage3D:Ee,texSubImage2D:$,texSubImage3D:Q,compressedTexSubImage2D:W,compressedTexSubImage3D:Se,scissor:ie,viewport:De,reset:Ue}}function Hy(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,g){return p?new OffscreenCanvas(T,g):vs("canvas")}function _(T,g,O){let $=1;const Q=Oe(T);if((Q.width>O||Q.height>O)&&($=O/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const W=Math.floor($*Q.width),Se=Math.floor($*Q.height);f===void 0&&(f=x(W,Se));const oe=g?x(W,Se):f;return oe.width=W,oe.height=Se,oe.getContext("2d").drawImage(T,0,0,W,Se),Be("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+W+"x"+Se+")."),oe}else return"data"in T&&Be("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function h(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(T,g,O,$,Q=!1){if(T!==null){if(n[T]!==void 0)return n[T];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=g;if(g===n.RED&&(O===n.FLOAT&&(W=n.R32F),O===n.HALF_FLOAT&&(W=n.R16F),O===n.UNSIGNED_BYTE&&(W=n.R8)),g===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.R8UI),O===n.UNSIGNED_SHORT&&(W=n.R16UI),O===n.UNSIGNED_INT&&(W=n.R32UI),O===n.BYTE&&(W=n.R8I),O===n.SHORT&&(W=n.R16I),O===n.INT&&(W=n.R32I)),g===n.RG&&(O===n.FLOAT&&(W=n.RG32F),O===n.HALF_FLOAT&&(W=n.RG16F),O===n.UNSIGNED_BYTE&&(W=n.RG8)),g===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RG8UI),O===n.UNSIGNED_SHORT&&(W=n.RG16UI),O===n.UNSIGNED_INT&&(W=n.RG32UI),O===n.BYTE&&(W=n.RG8I),O===n.SHORT&&(W=n.RG16I),O===n.INT&&(W=n.RG32I)),g===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGB8UI),O===n.UNSIGNED_SHORT&&(W=n.RGB16UI),O===n.UNSIGNED_INT&&(W=n.RGB32UI),O===n.BYTE&&(W=n.RGB8I),O===n.SHORT&&(W=n.RGB16I),O===n.INT&&(W=n.RGB32I)),g===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),O===n.UNSIGNED_INT&&(W=n.RGBA32UI),O===n.BYTE&&(W=n.RGBA8I),O===n.SHORT&&(W=n.RGBA16I),O===n.INT&&(W=n.RGBA32I)),g===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),g===n.RGBA){const Se=Q?gs:$e.getTransfer($);O===n.FLOAT&&(W=n.RGBA32F),O===n.HALF_FLOAT&&(W=n.RGBA16F),O===n.UNSIGNED_BYTE&&(W=Se===Qe?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function A(T,g){let O;return T?g===null||g===hi||g===xr?O=n.DEPTH24_STENCIL8:g===bn?O=n.DEPTH32F_STENCIL8:g===mr&&(O=n.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===hi||g===xr?O=n.DEPTH_COMPONENT24:g===bn?O=n.DEPTH_COMPONENT32F:g===mr&&(O=n.DEPTH_COMPONENT16),O}function w(T,g){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Gt&&T.minFilter!==jt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function M(T){const g=T.target;g.removeEventListener("dispose",M),C(g),g.isVideoTexture&&u.delete(g)}function D(T){const g=T.target;g.removeEventListener("dispose",D),b(g)}function C(T){const g=i.get(T);if(g.__webglInit===void 0)return;const O=T.source,$=d.get(O);if($){const Q=$[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(T),Object.keys($).length===0&&d.delete(O)}i.remove(T)}function y(T){const g=i.get(T);n.deleteTexture(g.__webglTexture);const O=T.source,$=d.get(O);delete $[g.__cacheKey],a.memory.textures--}function b(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(g.__webglFramebuffer[$]))for(let Q=0;Q<g.__webglFramebuffer[$].length;Q++)n.deleteFramebuffer(g.__webglFramebuffer[$][Q]);else n.deleteFramebuffer(g.__webglFramebuffer[$]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[$])}else{if(Array.isArray(g.__webglFramebuffer))for(let $=0;$<g.__webglFramebuffer.length;$++)n.deleteFramebuffer(g.__webglFramebuffer[$]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let $=0;$<g.__webglColorRenderbuffer.length;$++)g.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[$]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=T.textures;for(let $=0,Q=O.length;$<Q;$++){const W=i.get(O[$]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(O[$])}i.remove(T)}let I=0;function B(){I=0}function G(){const T=I;return T>=r.maxTextures&&Be("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),I+=1,T}function X(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function q(T,g){const O=i.get(T);if(T.isVideoTexture&&at(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const $=T.image;if($===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,T,g);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+g)}function U(T,g){const O=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){j(O,T,g);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+g)}function V(T,g){const O=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){j(O,T,g);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+g)}function R(T,g){const O=i.get(T);if(T.version>0&&O.__version!==T.version){Y(O,T,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+g)}const K={[to]:n.REPEAT,[vn]:n.CLAMP_TO_EDGE,[no]:n.MIRRORED_REPEAT},J={[Gt]:n.NEAREST,[bx]:n.NEAREST_MIPMAP_NEAREST,[Dr]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[Hs]:n.LINEAR_MIPMAP_NEAREST,[ui]:n.LINEAR_MIPMAP_LINEAR},xe={[Ex]:n.NEVER,[Dx]:n.ALWAYS,[Ax]:n.LESS,[md]:n.LEQUAL,[wx]:n.EQUAL,[Px]:n.GEQUAL,[Rx]:n.GREATER,[Cx]:n.NOTEQUAL};function Ne(T,g){if(g.type===bn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===jt||g.magFilter===Hs||g.magFilter===Dr||g.magFilter===ui||g.minFilter===jt||g.minFilter===Hs||g.minFilter===Dr||g.minFilter===ui)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,K[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,K[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,K[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,J[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,J[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,xe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Gt||g.minFilter!==Dr&&g.minFilter!==ui||g.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ce(T,g){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",M));const $=g.source;let Q=d.get($);Q===void 0&&(Q={},d.set($,Q));const W=X(g);if(W!==T.__cacheKey){Q[W]===void 0&&(Q[W]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[W].usedTimes++;const Se=Q[T.__cacheKey];Se!==void 0&&(Q[T.__cacheKey].usedTimes--,Se.usedTimes===0&&y(g)),T.__cacheKey=W,T.__webglTexture=Q[W].texture}return O}function Pe(T,g,O){return Math.floor(Math.floor(T/O)/g)}function We(T,g,O,$){const W=T.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,O,$,g.data);else{W.sort((ee,ie)=>ee.start-ie.start);let Se=0;for(let ee=1;ee<W.length;ee++){const ie=W[Se],De=W[ee],we=ie.start+ie.count,ue=Pe(De.start,g.width,4),Ue=Pe(ie.start,g.width,4);De.start<=we+1&&ue===Ue&&Pe(De.start+De.count-1,g.width,4)===ue?ie.count=Math.max(ie.count,De.start+De.count-ie.start):(++Se,W[Se]=De)}W.length=Se+1;const oe=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),ye=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ee=0,ie=W.length;ee<ie;ee++){const De=W[ee],we=Math.floor(De.start/4),ue=Math.ceil(De.count/4),Ue=we%g.width,L=Math.floor(we/g.width),le=ue,re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Ue,L,le,re,O,$,g.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,oe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,ye)}}function j(T,g,O){let $=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&($=n.TEXTURE_3D);const Q=Ce(T,g),W=g.source;t.bindTexture($,T.__webglTexture,n.TEXTURE0+O);const Se=i.get(W);if(W.version!==Se.__version||Q===!0){t.activeTexture(n.TEXTURE0+O);const oe=$e.getPrimaries($e.workingColorSpace),Ee=g.colorSpace===Bn?null:$e.getPrimaries(g.colorSpace),ye=g.colorSpace===Bn||oe===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ee=_(g.image,!1,r.maxTextureSize);ee=Te(g,ee);const ie=s.convert(g.format,g.colorSpace),De=s.convert(g.type);let we=S(g.internalFormat,ie,De,g.colorSpace,g.isVideoTexture);Ne($,g);let ue;const Ue=g.mipmaps,L=g.isVideoTexture!==!0,le=Se.__version===void 0||Q===!0,re=W.dataReady,se=w(g,ee);if(g.isDepthTexture)we=A(g.format===_r,g.type),le&&(L?t.texStorage2D(n.TEXTURE_2D,1,we,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,we,ee.width,ee.height,0,ie,De,null));else if(g.isDataTexture)if(Ue.length>0){L&&le&&t.texStorage2D(n.TEXTURE_2D,se,we,Ue[0].width,Ue[0].height);for(let te=0,Z=Ue.length;te<Z;te++)ue=Ue[te],L?re&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ue.width,ue.height,ie,De,ue.data):t.texImage2D(n.TEXTURE_2D,te,we,ue.width,ue.height,0,ie,De,ue.data);g.generateMipmaps=!1}else L?(le&&t.texStorage2D(n.TEXTURE_2D,se,we,ee.width,ee.height),re&&We(g,ee,ie,De)):t.texImage2D(n.TEXTURE_2D,0,we,ee.width,ee.height,0,ie,De,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){L&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,we,Ue[0].width,Ue[0].height,ee.depth);for(let te=0,Z=Ue.length;te<Z;te++)if(ue=Ue[te],g.format!==sn)if(ie!==null)if(L){if(re)if(g.layerUpdates.size>0){const ge=eu(ue.width,ue.height,g.format,g.type);for(const Fe of g.layerUpdates){const rt=ue.data.subarray(Fe*ge/ue.data.BYTES_PER_ELEMENT,(Fe+1)*ge/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Fe,ue.width,ue.height,1,ie,rt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ee.depth,ie,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,we,ue.width,ue.height,ee.depth,0,ue.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ee.depth,ie,De,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,we,ue.width,ue.height,ee.depth,0,ie,De,ue.data)}else{L&&le&&t.texStorage2D(n.TEXTURE_2D,se,we,Ue[0].width,Ue[0].height);for(let te=0,Z=Ue.length;te<Z;te++)ue=Ue[te],g.format!==sn?ie!==null?L?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,ue.width,ue.height,ie,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,te,we,ue.width,ue.height,0,ue.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?re&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ue.width,ue.height,ie,De,ue.data):t.texImage2D(n.TEXTURE_2D,te,we,ue.width,ue.height,0,ie,De,ue.data)}else if(g.isDataArrayTexture)if(L){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,we,ee.width,ee.height,ee.depth),re)if(g.layerUpdates.size>0){const te=eu(ee.width,ee.height,g.format,g.type);for(const Z of g.layerUpdates){const ge=ee.data.subarray(Z*te/ee.data.BYTES_PER_ELEMENT,(Z+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,ee.width,ee.height,1,ie,De,ge)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ie,De,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,ee.width,ee.height,ee.depth,0,ie,De,ee.data);else if(g.isData3DTexture)L?(le&&t.texStorage3D(n.TEXTURE_3D,se,we,ee.width,ee.height,ee.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ie,De,ee.data)):t.texImage3D(n.TEXTURE_3D,0,we,ee.width,ee.height,ee.depth,0,ie,De,ee.data);else if(g.isFramebufferTexture){if(le)if(L)t.texStorage2D(n.TEXTURE_2D,se,we,ee.width,ee.height);else{let te=ee.width,Z=ee.height;for(let ge=0;ge<se;ge++)t.texImage2D(n.TEXTURE_2D,ge,we,te,Z,0,ie,De,null),te>>=1,Z>>=1}}else if(Ue.length>0){if(L&&le){const te=Oe(Ue[0]);t.texStorage2D(n.TEXTURE_2D,se,we,te.width,te.height)}for(let te=0,Z=Ue.length;te<Z;te++)ue=Ue[te],L?re&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ie,De,ue):t.texImage2D(n.TEXTURE_2D,te,we,ie,De,ue);g.generateMipmaps=!1}else if(L){if(le){const te=Oe(ee);t.texStorage2D(n.TEXTURE_2D,se,we,te.width,te.height)}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie,De,ee)}else t.texImage2D(n.TEXTURE_2D,0,we,ie,De,ee);m(g)&&h($),Se.__version=W.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Y(T,g,O){if(g.image.length!==6)return;const $=Ce(T,g),Q=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+O);const W=i.get(Q);if(Q.version!==W.__version||$===!0){t.activeTexture(n.TEXTURE0+O);const Se=$e.getPrimaries($e.workingColorSpace),oe=g.colorSpace===Bn?null:$e.getPrimaries(g.colorSpace),Ee=g.colorSpace===Bn||Se===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const ye=g.isCompressedTexture||g.image[0].isCompressedTexture,ee=g.image[0]&&g.image[0].isDataTexture,ie=[];for(let Z=0;Z<6;Z++)!ye&&!ee?ie[Z]=_(g.image[Z],!0,r.maxCubemapSize):ie[Z]=ee?g.image[Z].image:g.image[Z],ie[Z]=Te(g,ie[Z]);const De=ie[0],we=s.convert(g.format,g.colorSpace),ue=s.convert(g.type),Ue=S(g.internalFormat,we,ue,g.colorSpace),L=g.isVideoTexture!==!0,le=W.__version===void 0||$===!0,re=Q.dataReady;let se=w(g,De);Ne(n.TEXTURE_CUBE_MAP,g);let te;if(ye){L&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,se,Ue,De.width,De.height);for(let Z=0;Z<6;Z++){te=ie[Z].mipmaps;for(let ge=0;ge<te.length;ge++){const Fe=te[ge];g.format!==sn?we!==null?L?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,0,0,Fe.width,Fe.height,we,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,Ue,Fe.width,Fe.height,0,Fe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,0,0,Fe.width,Fe.height,we,ue,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,Ue,Fe.width,Fe.height,0,we,ue,Fe.data)}}}else{if(te=g.mipmaps,L&&le){te.length>0&&se++;const Z=Oe(ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,se,Ue,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ee){L?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ie[Z].width,ie[Z].height,we,ue,ie[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ue,ie[Z].width,ie[Z].height,0,we,ue,ie[Z].data);for(let ge=0;ge<te.length;ge++){const rt=te[ge].image[Z].image;L?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,0,0,rt.width,rt.height,we,ue,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,Ue,rt.width,rt.height,0,we,ue,rt.data)}}else{L?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,we,ue,ie[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ue,we,ue,ie[Z]);for(let ge=0;ge<te.length;ge++){const Fe=te[ge];L?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,0,0,we,ue,Fe.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,Ue,we,ue,Fe.image[Z])}}}m(g)&&h(n.TEXTURE_CUBE_MAP),W.__version=Q.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function fe(T,g,O,$,Q,W){const Se=s.convert(O.format,O.colorSpace),oe=s.convert(O.type),Ee=S(O.internalFormat,Se,oe,O.colorSpace),ye=i.get(g),ee=i.get(O);if(ee.__renderTarget=g,!ye.__hasExternalTextures){const ie=Math.max(1,g.width>>W),De=Math.max(1,g.height>>W);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,W,Ee,ie,De,g.depth,0,Se,oe,null):t.texImage2D(Q,W,Ee,ie,De,0,Se,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ve(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Q,ee.__webglTexture,0,it(g)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Q,ee.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(T,g,O){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){const $=g.depthTexture,Q=$&&$.isDepthTexture?$.type:null,W=A(g.stencilBuffer,Q),Se=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=it(g);ve(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,W,g.width,g.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,W,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,W,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,T)}else{const $=g.textures;for(let Q=0;Q<$.length;Q++){const W=$[Q],Se=s.convert(W.format,W.colorSpace),oe=s.convert(W.type),Ee=S(W.internalFormat,Se,oe,W.colorSpace),ye=it(g);O&&ve(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,Ee,g.width,g.height):ve(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,Ee,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(g.depthTexture);$.__renderTarget=g,(!$.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q(g.depthTexture,0);const Q=$.__webglTexture,W=it(g);if(g.depthTexture.format===gr)ve(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(g.depthTexture.format===_r)ve(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ke(T){const g=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),$){const Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=$}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const $=T.texture.mipmaps;$&&$.length>0?be(g.__webglFramebuffer[0],T):be(g.__webglFramebuffer,T)}else if(O){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]===void 0)g.__webglDepthbuffer[$]=n.createRenderbuffer(),Le(g.__webglDepthbuffer[$],T,!1);else{const Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,W)}}else{const $=T.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Le(g.__webglDepthbuffer,T,!1);else{const Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(T,g,O){const $=i.get(T);g!==void 0&&fe($.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ke(T)}function He(T){const g=T.texture,O=i.get(T),$=i.get(g);T.addEventListener("dispose",D);const Q=T.textures,W=T.isWebGLCubeRenderTarget===!0,Se=Q.length>1;if(Se||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=g.version,a.memory.textures++),W){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let Ee=0;Ee<g.mipmaps.length;Ee++)O.__webglFramebuffer[oe][Ee]=n.createFramebuffer()}else O.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)O.__webglFramebuffer[oe]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Se)for(let oe=0,Ee=Q.length;oe<Ee;oe++){const ye=i.get(Q[oe]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&ve(T)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let oe=0;oe<Q.length;oe++){const Ee=Q[oe];O.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[oe]);const ye=s.convert(Ee.format,Ee.colorSpace),ee=s.convert(Ee.type),ie=S(Ee.internalFormat,ye,ee,Ee.colorSpace,T.isXRRenderTarget===!0),De=it(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,ie,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,O.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ee=0;Ee<g.mipmaps.length;Ee++)fe(O.__webglFramebuffer[oe][Ee],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee);else fe(O.__webglFramebuffer[oe],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(g)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let oe=0,Ee=Q.length;oe<Ee;oe++){const ye=Q[oe],ee=i.get(ye);let ie=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,ee.__webglTexture),Ne(ie,ye),fe(O.__webglFramebuffer,T,ye,n.COLOR_ATTACHMENT0+oe,ie,0),m(ye)&&h(ie)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,$.__webglTexture),Ne(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let Ee=0;Ee<g.mipmaps.length;Ee++)fe(O.__webglFramebuffer[Ee],T,g,n.COLOR_ATTACHMENT0,oe,Ee);else fe(O.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,oe,0);m(g)&&h(oe),t.unbindTexture()}T.depthBuffer&&ke(T)}function st(T){const g=T.textures;for(let O=0,$=g.length;O<$;O++){const Q=g[O];if(m(Q)){const W=E(T),Se=i.get(Q).__webglTexture;t.bindTexture(W,Se),h(W),t.unbindTexture()}}}const P=[],Xe=[];function qe(T){if(T.samples>0){if(ve(T)===!1){const g=T.textures,O=T.width,$=T.height;let Q=n.COLOR_BUFFER_BIT;const W=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(T),oe=g.length>1;if(oe)for(let ye=0;ye<g.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Ee=T.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ye=0;ye<g.length;ye++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[ye]);const ee=i.get(g[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,O,$,0,0,O,$,Q,n.NEAREST),l===!0&&(P.length=0,Xe.length=0,P.push(n.COLOR_ATTACHMENT0+ye),T.depthBuffer&&T.resolveDepthBuffer===!1&&(P.push(W),Xe.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Xe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let ye=0;ye<g.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,Se.__webglColorRenderbuffer[ye]);const ee=i.get(g[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function it(T){return Math.min(r.maxSamples,T.samples)}function ve(T){const g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function at(T){const g=a.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function Te(T,g){const O=T.colorSpace,$=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Hi&&O!==Bn&&($e.getTransfer(O)===Qe?($!==sn||Q!==wn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",O)),g}function Oe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=U,this.setTexture3D=V,this.setTextureCube=R,this.rebindTextures=ct,this.setupRenderTarget=He,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ve}function Wy(n,e){function t(i,r=Bn){let s;const a=$e.getTransfer(r);if(i===wn)return n.UNSIGNED_BYTE;if(i===ol)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ll)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ud)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ld)return n.BYTE;if(i===cd)return n.SHORT;if(i===mr)return n.UNSIGNED_SHORT;if(i===al)return n.INT;if(i===hi)return n.UNSIGNED_INT;if(i===bn)return n.FLOAT;if(i===ji)return n.HALF_FLOAT;if(i===dd)return n.ALPHA;if(i===hd)return n.RGB;if(i===sn)return n.RGBA;if(i===gr)return n.DEPTH_COMPONENT;if(i===_r)return n.DEPTH_STENCIL;if(i===pd)return n.RED;if(i===cl)return n.RED_INTEGER;if(i===ul)return n.RG;if(i===fl)return n.RG_INTEGER;if(i===dl)return n.RGBA_INTEGER;if(i===ss||i===as||i===os||i===ls)if(a===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ss)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===as)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ss)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===as)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===os)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ls)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===io||i===ro||i===so||i===ao)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===io)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ro)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===so)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ao)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oo||i===lo||i===co)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===oo||i===lo)return a===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===co)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===uo||i===fo||i===ho||i===po||i===mo||i===xo||i===go||i===_o||i===vo||i===bo||i===yo||i===So||i===Mo||i===To)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===uo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ho)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===po)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===go)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_o)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===So)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===To)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eo||i===Ao||i===wo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Eo)return a===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ao)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ro||i===Co||i===Po||i===Do)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ro)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Co)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Po)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Do)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qy=`
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

}`;class Yy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Rd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Cn({vertexShader:Xy,fragmentShader:qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xn(new Ms(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jy extends Ki{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,x=null;const _=typeof XRWebGLBinding<"u",m=new Yy,h={},E=t.getContextAttributes();let S=null,A=null;const w=[],M=[],D=new tt;let C=null;const y=new tn;y.viewport=new pt;const b=new tn;b.viewport=new pt;const I=[y,b],B=new hg;let G=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Y=w[j];return Y===void 0&&(Y=new da,w[j]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(j){let Y=w[j];return Y===void 0&&(Y=new da,w[j]=Y),Y.getGripSpace()},this.getHand=function(j){let Y=w[j];return Y===void 0&&(Y=new da,w[j]=Y),Y.getHandSpace()};function q(j){const Y=M.indexOf(j.inputSource);if(Y===-1)return;const fe=w[Y];fe!==void 0&&(fe.update(j.inputSource,j.frame,c||a),fe.dispatchEvent({type:j.type,data:j.inputSource}))}function U(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",V);for(let j=0;j<w.length;j++){const Y=M[j];Y!==null&&(M[j]=null,w[j].disconnect(Y))}G=null,X=null,m.reset();for(const j in h)delete h[j];e.setRenderTarget(S),p=null,d=null,f=null,r=null,A=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",U),r.addEventListener("inputsourceschange",V),E.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Le=null,be=null;E.depth&&(be=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=E.stencil?_r:gr,Le=E.stencil?xr:hi);const ke={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(ke),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new pi(d.textureWidth,d.textureHeight,{format:sn,type:wn,depthTexture:new wd(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const fe={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new pi(p.framebufferWidth,p.framebufferHeight,{format:sn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(j){for(let Y=0;Y<j.removed.length;Y++){const fe=j.removed[Y],Le=M.indexOf(fe);Le>=0&&(M[Le]=null,w[Le].disconnect(fe))}for(let Y=0;Y<j.added.length;Y++){const fe=j.added[Y];let Le=M.indexOf(fe);if(Le===-1){for(let ke=0;ke<w.length;ke++)if(ke>=M.length){M.push(fe),Le=ke;break}else if(M[ke]===null){M[ke]=fe,Le=ke;break}if(Le===-1)break}const be=w[Le];be&&be.connect(fe)}}const R=new H,K=new H;function J(j,Y,fe){R.setFromMatrixPosition(Y.matrixWorld),K.setFromMatrixPosition(fe.matrixWorld);const Le=R.distanceTo(K),be=Y.projectionMatrix.elements,ke=fe.projectionMatrix.elements,ct=be[14]/(be[10]-1),He=be[14]/(be[10]+1),st=(be[9]+1)/be[5],P=(be[9]-1)/be[5],Xe=(be[8]-1)/be[0],qe=(ke[8]+1)/ke[0],it=ct*Xe,ve=ct*qe,at=Le/(-Xe+qe),Te=at*-Xe;if(Y.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Te),j.translateZ(at),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),be[10]===-1)j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const Oe=ct+at,T=He+at,g=it-Te,O=ve+(Le-Te),$=st*He/T*Oe,Q=P*He/T*Oe;j.projectionMatrix.makePerspective(g,O,$,Q,Oe,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function xe(j,Y){Y===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Y.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let Y=j.near,fe=j.far;m.texture!==null&&(m.depthNear>0&&(Y=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),B.near=b.near=y.near=Y,B.far=b.far=y.far=fe,(G!==B.near||X!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),G=B.near,X=B.far),B.layers.mask=j.layers.mask|6,y.layers.mask=B.layers.mask&3,b.layers.mask=B.layers.mask&5;const Le=j.parent,be=B.cameras;xe(B,Le);for(let ke=0;ke<be.length;ke++)xe(be[ke],Le);be.length===2?J(B,y,b):B.projectionMatrix.copy(y.projectionMatrix),Ne(j,B,Le)};function Ne(j,Y,fe){fe===null?j.matrix.copy(Y.matrixWorld):(j.matrix.copy(fe.matrixWorld),j.matrix.invert(),j.matrix.multiply(Y.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Lo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(j){return h[j]};let Ce=null;function Pe(j,Y){if(u=Y.getViewerPose(c||a),x=Y,u!==null){const fe=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let Le=!1;fe.length!==B.cameras.length&&(B.cameras.length=0,Le=!0);for(let He=0;He<fe.length;He++){const st=fe[He];let P=null;if(p!==null)P=p.getViewport(st);else{const qe=f.getViewSubImage(d,st);P=qe.viewport,He===0&&(e.setRenderTargetTextures(A,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(A))}let Xe=I[He];Xe===void 0&&(Xe=new tn,Xe.layers.enable(He),Xe.viewport=new pt,I[He]=Xe),Xe.matrix.fromArray(st.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(st.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(P.x,P.y,P.width,P.height),He===0&&(B.matrix.copy(Xe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Le===!0&&B.cameras.push(Xe)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const He=f.getDepthInformation(fe[0]);He&&He.isValid&&He.texture&&m.init(He,r.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let He=0;He<fe.length;He++){const st=fe[He].camera;if(st){let P=h[st];P||(P=new Rd,h[st]=P);const Xe=f.getCameraImage(st);P.sourceTexture=Xe}}}}for(let fe=0;fe<w.length;fe++){const Le=M[fe],be=w[fe];Le!==null&&be!==void 0&&be.update(Le,Y,c||a)}Ce&&Ce(j,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),x=null}const We=new Cd;We.setAnimationLoop(Pe),this.setAnimationLoop=function(j){Ce=j},this.dispose=function(){}}}const ni=new Rn,Ky=new bt;function $y(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Md(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,E,S,A){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,A)):h.isMeshMatcapMaterial?(s(m,h),x(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,E,S):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ot&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ot&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=e.get(h),S=E.envMap,A=E.envMapRotation;S&&(m.envMap.value=S,ni.copy(A),ni.x*=-1,ni.y*=-1,ni.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),m.envMapRotation.value.setFromMatrix4(Ky.makeRotationFromEuler(ni)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,E,S){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=S*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ot&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const E=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Zy(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const A=S.program;i.uniformBlockBinding(E,A)}function c(E,S){let A=r[E.id];A===void 0&&(x(E),A=u(E),r[E.id]=A,E.addEventListener("dispose",m));const w=S.program;i.updateUBOMapping(E,w);const M=e.render.frame;s[E.id]!==M&&(d(E),s[E.id]=M)}function u(E){const S=f();E.__bindingPointIndex=S;const A=n.createBuffer(),w=E.__size,M=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,w,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,A),A}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const S=r[E.id],A=E.uniforms,w=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let M=0,D=A.length;M<D;M++){const C=Array.isArray(A[M])?A[M]:[A[M]];for(let y=0,b=C.length;y<b;y++){const I=C[y];if(p(I,M,y,w)===!0){const B=I.__offset,G=Array.isArray(I.value)?I.value:[I.value];let X=0;for(let q=0;q<G.length;q++){const U=G[q],V=_(U);typeof U=="number"||typeof U=="boolean"?(I.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,B+X,I.__data)):U.isMatrix3?(I.__data[0]=U.elements[0],I.__data[1]=U.elements[1],I.__data[2]=U.elements[2],I.__data[3]=0,I.__data[4]=U.elements[3],I.__data[5]=U.elements[4],I.__data[6]=U.elements[5],I.__data[7]=0,I.__data[8]=U.elements[6],I.__data[9]=U.elements[7],I.__data[10]=U.elements[8],I.__data[11]=0):(U.toArray(I.__data,X),X+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,S,A,w){const M=E.value,D=S+"_"+A;if(w[D]===void 0)return typeof M=="number"||typeof M=="boolean"?w[D]=M:w[D]=M.clone(),!0;{const C=w[D];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return w[D]=M,!0}else if(C.equals(M)===!1)return C.copy(M),!0}return!1}function x(E){const S=E.uniforms;let A=0;const w=16;for(let D=0,C=S.length;D<C;D++){const y=Array.isArray(S[D])?S[D]:[S[D]];for(let b=0,I=y.length;b<I;b++){const B=y[b],G=Array.isArray(B.value)?B.value:[B.value];for(let X=0,q=G.length;X<q;X++){const U=G[X],V=_(U),R=A%w,K=R%V.boundary,J=R+K;A+=K,J!==0&&w-J<V.storage&&(A+=w-J),B.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=A,A+=V.storage}}}const M=A%w;return M>0&&(A+=w-M),E.__size=A,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Be("WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const A=a.indexOf(S.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}const Jy=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let mn=null;function Qy(){return mn===null&&(mn=new ag(Jy,32,32,ul,ji),mn.minFilter=jt,mn.magFilter=jt,mn.wrapS=vn,mn.wrapT=vn,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class CM{constructor(e={}){const{canvas:t=Lx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const x=new Set([dl,fl,cl]),_=new Set([wn,hi,mr,xr,ol,ll]),m=new Uint32Array(4),h=new Int32Array(4);let E=null,S=null;const A=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let D=!1;this._outputColorSpace=qt;let C=0,y=0,b=null,I=-1,B=null;const G=new pt,X=new pt;let q=null;const U=new et(0);let V=0,R=t.width,K=t.height,J=1,xe=null,Ne=null;const Ce=new pt(0,0,R,K),Pe=new pt(0,0,R,K);let We=!1;const j=new Ad;let Y=!1,fe=!1;const Le=new bt,be=new H,ke=new pt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function st(){return b===null?J:1}let P=i;function Xe(v,F){return t.getContext(v,F)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sl}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",ge,!1),P===null){const F="webgl2";if(P=Xe(F,v),P===null)throw Xe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw v("WebGLRenderer: "+v.message),v}let qe,it,ve,at,Te,Oe,T,g,O,$,Q,W,Se,oe,Ee,ye,ee,ie,De,we,ue,Ue,L,le;function re(){qe=new lb(P),qe.init(),Ue=new Wy(P,qe),it=new Qv(P,qe,e,Ue),ve=new Gy(P,qe),it.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),at=new fb(P),Te=new Cy,Oe=new Hy(P,qe,ve,Te,it,Ue,at),T=new tb(M),g=new ob(M),O=new mg(P),L=new Zv(P,O),$=new cb(P,O,at,L),Q=new hb(P,$,O,at),De=new db(P,it,Oe),ye=new eb(Te),W=new Ry(M,T,g,qe,it,L,ye),Se=new $y(M,Te),oe=new Dy,Ee=new Oy(qe),ie=new $v(M,T,g,ve,Q,p,l),ee=new ky(M,Q,it),le=new Zy(P,at,it,ve),we=new Jv(P,qe,at),ue=new ub(P,qe,at),at.programs=W.programs,M.capabilities=it,M.extensions=qe,M.properties=Te,M.renderLists=oe,M.shadowMap=ee,M.state=ve,M.info=at}re();const se=new jy(M,P);this.xr=se,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const v=qe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=qe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(v){v!==void 0&&(J=v,this.setSize(R,K,!1))},this.getSize=function(v){return v.set(R,K)},this.setSize=function(v,F,k=!0){if(se.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}R=v,K=F,t.width=Math.floor(v*J),t.height=Math.floor(F*J),k===!0&&(t.style.width=v+"px",t.style.height=F+"px"),this.setViewport(0,0,v,F)},this.getDrawingBufferSize=function(v){return v.set(R*J,K*J).floor()},this.setDrawingBufferSize=function(v,F,k){R=v,K=F,J=k,t.width=Math.floor(v*k),t.height=Math.floor(F*k),this.setViewport(0,0,v,F)},this.getCurrentViewport=function(v){return v.copy(G)},this.getViewport=function(v){return v.copy(Ce)},this.setViewport=function(v,F,k,z){v.isVector4?Ce.set(v.x,v.y,v.z,v.w):Ce.set(v,F,k,z),ve.viewport(G.copy(Ce).multiplyScalar(J).round())},this.getScissor=function(v){return v.copy(Pe)},this.setScissor=function(v,F,k,z){v.isVector4?Pe.set(v.x,v.y,v.z,v.w):Pe.set(v,F,k,z),ve.scissor(X.copy(Pe).multiplyScalar(J).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(v){ve.setScissorTest(We=v)},this.setOpaqueSort=function(v){xe=v},this.setTransparentSort=function(v){Ne=v},this.getClearColor=function(v){return v.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(v=!0,F=!0,k=!0){let z=0;if(v){let N=!1;if(b!==null){const ne=b.texture.format;N=x.has(ne)}if(N){const ne=b.texture.type,ce=_.has(ne),_e=ie.getClearColor(),de=ie.getClearAlpha(),Re=_e.r,Ie=_e.g,Me=_e.b;ce?(m[0]=Re,m[1]=Ie,m[2]=Me,m[3]=de,P.clearBufferuiv(P.COLOR,0,m)):(h[0]=Re,h[1]=Ie,h[2]=Me,h[3]=de,P.clearBufferiv(P.COLOR,0,h))}else z|=P.COLOR_BUFFER_BIT}F&&(z|=P.DEPTH_BUFFER_BIT),k&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ie.dispose(),oe.dispose(),Ee.dispose(),Te.dispose(),T.dispose(),g.dispose(),Q.dispose(),L.dispose(),le.dispose(),W.dispose(),se.dispose(),se.removeEventListener("sessionstart",gl),se.removeEventListener("sessionend",_l),jn.stop()};function te(v){v.preventDefault(),Oc("WebGLRenderer: Context Lost."),D=!0}function Z(){Oc("WebGLRenderer: Context Restored."),D=!1;const v=at.autoReset,F=ee.enabled,k=ee.autoUpdate,z=ee.needsUpdate,N=ee.type;re(),at.autoReset=v,ee.enabled=F,ee.autoUpdate=k,ee.needsUpdate=z,ee.type=N}function ge(v){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Fe(v){const F=v.target;F.removeEventListener("dispose",Fe),rt(F)}function rt(v){Ze(v),Te.remove(v)}function Ze(v){const F=Te.get(v).programs;F!==void 0&&(F.forEach(function(k){W.releaseProgram(k)}),v.isShaderMaterial&&W.releaseShaderCache(v))}this.renderBufferDirect=function(v,F,k,z,N,ne){F===null&&(F=ct);const ce=N.isMesh&&N.matrixWorld.determinant()<0,_e=nh(v,F,k,z,N);ve.setMaterial(z,ce);let de=k.index,Re=1;if(z.wireframe===!0){if(de=$.getWireframeAttribute(k),de===void 0)return;Re=2}const Ie=k.drawRange,Me=k.attributes.position;let Ye=Ie.start*Re,Je=(Ie.start+Ie.count)*Re;ne!==null&&(Ye=Math.max(Ye,ne.start*Re),Je=Math.min(Je,(ne.start+ne.count)*Re)),de!==null?(Ye=Math.max(Ye,0),Je=Math.min(Je,de.count)):Me!=null&&(Ye=Math.max(Ye,0),Je=Math.min(Je,Me.count));const ut=Je-Ye;if(ut<0||ut===1/0)return;L.setup(N,z,_e,k,de);let ft,nt=we;if(de!==null&&(ft=O.get(de),nt=ue,nt.setIndex(ft)),N.isMesh)z.wireframe===!0?(ve.setLineWidth(z.wireframeLinewidth*st()),nt.setMode(P.LINES)):nt.setMode(P.TRIANGLES);else if(N.isLine){let Ae=z.linewidth;Ae===void 0&&(Ae=1),ve.setLineWidth(Ae*st()),N.isLineSegments?nt.setMode(P.LINES):N.isLineLoop?nt.setMode(P.LINE_LOOP):nt.setMode(P.LINE_STRIP)}else N.isPoints?nt.setMode(P.POINTS):N.isSprite&&nt.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)vr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))nt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ae=N._multiDrawStarts,ot=N._multiDrawCounts,Ke=N._multiDrawCount,Bt=de?O.get(de).bytesPerElement:1,mi=Te.get(z).currentProgram.getUniforms();for(let Vt=0;Vt<Ke;Vt++)mi.setValue(P,"_gl_DrawID",Vt),nt.render(Ae[Vt]/Bt,ot[Vt])}else if(N.isInstancedMesh)nt.renderInstances(Ye,ut,N.count);else if(k.isInstancedBufferGeometry){const Ae=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ot=Math.min(k.instanceCount,Ae);nt.renderInstances(Ye,ut,ot)}else nt.render(Ye,ut)};function an(v,F,k){v.transparent===!0&&v.side===_n&&v.forceSinglePass===!1?(v.side=Ot,v.needsUpdate=!0,Rr(v,F,k),v.side=Wn,v.needsUpdate=!0,Rr(v,F,k),v.side=_n):Rr(v,F,k)}this.compile=function(v,F,k=null){k===null&&(k=v),S=Ee.get(k),S.init(F),w.push(S),k.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(S.pushLight(N),N.castShadow&&S.pushShadow(N))}),v!==k&&v.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(S.pushLight(N),N.castShadow&&S.pushShadow(N))}),S.setupLights();const z=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ne=N.material;if(ne)if(Array.isArray(ne))for(let ce=0;ce<ne.length;ce++){const _e=ne[ce];an(_e,k,N),z.add(_e)}else an(ne,k,N),z.add(ne)}),S=w.pop(),z},this.compileAsync=function(v,F,k=null){const z=this.compile(v,F,k);return new Promise(N=>{function ne(){if(z.forEach(function(ce){Te.get(ce).currentProgram.isReady()&&z.delete(ce)}),z.size===0){N(v);return}setTimeout(ne,10)}qe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Kt=null;function th(v){Kt&&Kt(v)}function gl(){jn.stop()}function _l(){jn.start()}const jn=new Cd;jn.setAnimationLoop(th),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(v){Kt=v,se.setAnimationLoop(v),v===null?jn.stop():jn.start()},se.addEventListener("sessionstart",gl),se.addEventListener("sessionend",_l),this.render=function(v,F){if(F!==void 0&&F.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(F),F=se.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,F,b),S=Ee.get(v,w.length),S.init(F),w.push(S),Le.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(Le,ln,F.reversedDepth),fe=this.localClippingEnabled,Y=ye.init(this.clippingPlanes,fe),E=oe.get(v,A.length),E.init(),A.push(E),se.enabled===!0&&se.isPresenting===!0){const ne=M.xr.getDepthSensingMesh();ne!==null&&As(ne,F,-1/0,M.sortObjects)}As(v,F,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(xe,Ne),He=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,He&&ie.addToRenderList(E,v),this.info.render.frame++,Y===!0&&ye.beginShadows();const k=S.state.shadowsArray;ee.render(k,v,F),Y===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=E.opaque,N=E.transmissive;if(S.setupLights(),F.isArrayCamera){const ne=F.cameras;if(N.length>0)for(let ce=0,_e=ne.length;ce<_e;ce++){const de=ne[ce];bl(z,N,v,de)}He&&ie.render(v);for(let ce=0,_e=ne.length;ce<_e;ce++){const de=ne[ce];vl(E,v,de,de.viewport)}}else N.length>0&&bl(z,N,v,F),He&&ie.render(v),vl(E,v,F);b!==null&&y===0&&(Oe.updateMultisampleRenderTarget(b),Oe.updateRenderTargetMipmap(b)),v.isScene===!0&&v.onAfterRender(M,v,F),L.resetDefaultState(),I=-1,B=null,w.pop(),w.length>0?(S=w[w.length-1],Y===!0&&ye.setGlobalState(M.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?E=A[A.length-1]:E=null};function As(v,F,k,z){if(v.visible===!1)return;if(v.layers.test(F.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(F);else if(v.isLight)S.pushLight(v),v.castShadow&&S.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||j.intersectsSprite(v)){z&&ke.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Le);const ce=Q.update(v),_e=v.material;_e.visible&&E.push(v,ce,_e,k,ke.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||j.intersectsObject(v))){const ce=Q.update(v),_e=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ke.copy(v.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),ke.copy(ce.boundingSphere.center)),ke.applyMatrix4(v.matrixWorld).applyMatrix4(Le)),Array.isArray(_e)){const de=ce.groups;for(let Re=0,Ie=de.length;Re<Ie;Re++){const Me=de[Re],Ye=_e[Me.materialIndex];Ye&&Ye.visible&&E.push(v,ce,Ye,k,ke.z,Me)}}else _e.visible&&E.push(v,ce,_e,k,ke.z,null)}}const ne=v.children;for(let ce=0,_e=ne.length;ce<_e;ce++)As(ne[ce],F,k,z)}function vl(v,F,k,z){const{opaque:N,transmissive:ne,transparent:ce}=v;S.setupLightsView(k),Y===!0&&ye.setGlobalState(M.clippingPlanes,k),z&&ve.viewport(G.copy(z)),N.length>0&&wr(N,F,k),ne.length>0&&wr(ne,F,k),ce.length>0&&wr(ce,F,k),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function bl(v,F,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[z.id]===void 0&&(S.state.transmissionRenderTarget[z.id]=new pi(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?ji:wn,minFilter:ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const ne=S.state.transmissionRenderTarget[z.id],ce=z.viewport||G;ne.setSize(ce.z*M.transmissionResolutionScale,ce.w*M.transmissionResolutionScale);const _e=M.getRenderTarget(),de=M.getActiveCubeFace(),Re=M.getActiveMipmapLevel();M.setRenderTarget(ne),M.getClearColor(U),V=M.getClearAlpha(),V<1&&M.setClearColor(16777215,.5),M.clear(),He&&ie.render(k);const Ie=M.toneMapping;M.toneMapping=zn;const Me=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),S.setupLightsView(z),Y===!0&&ye.setGlobalState(M.clippingPlanes,z),wr(v,k,z),Oe.updateMultisampleRenderTarget(ne),Oe.updateRenderTargetMipmap(ne),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Je=0,ut=F.length;Je<ut;Je++){const ft=F[Je],{object:nt,geometry:Ae,material:ot,group:Ke}=ft;if(ot.side===_n&&nt.layers.test(z.layers)){const Bt=ot.side;ot.side=Ot,ot.needsUpdate=!0,yl(nt,k,z,Ae,ot,Ke),ot.side=Bt,ot.needsUpdate=!0,Ye=!0}}Ye===!0&&(Oe.updateMultisampleRenderTarget(ne),Oe.updateRenderTargetMipmap(ne))}M.setRenderTarget(_e,de,Re),M.setClearColor(U,V),Me!==void 0&&(z.viewport=Me),M.toneMapping=Ie}function wr(v,F,k){const z=F.isScene===!0?F.overrideMaterial:null;for(let N=0,ne=v.length;N<ne;N++){const ce=v[N],{object:_e,geometry:de,group:Re}=ce;let Ie=ce.material;Ie.allowOverride===!0&&z!==null&&(Ie=z),_e.layers.test(k.layers)&&yl(_e,F,k,de,Ie,Re)}}function yl(v,F,k,z,N,ne){v.onBeforeRender(M,F,k,z,N,ne),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(M,F,k,z,v,ne),N.transparent===!0&&N.side===_n&&N.forceSinglePass===!1?(N.side=Ot,N.needsUpdate=!0,M.renderBufferDirect(k,F,z,N,v,ne),N.side=Wn,N.needsUpdate=!0,M.renderBufferDirect(k,F,z,N,v,ne),N.side=_n):M.renderBufferDirect(k,F,z,N,v,ne),v.onAfterRender(M,F,k,z,N,ne)}function Rr(v,F,k){F.isScene!==!0&&(F=ct);const z=Te.get(v),N=S.state.lights,ne=S.state.shadowsArray,ce=N.state.version,_e=W.getParameters(v,N.state,ne,F,k),de=W.getProgramCacheKey(_e);let Re=z.programs;z.environment=v.isMeshStandardMaterial?F.environment:null,z.fog=F.fog,z.envMap=(v.isMeshStandardMaterial?g:T).get(v.envMap||z.environment),z.envMapRotation=z.environment!==null&&v.envMap===null?F.environmentRotation:v.envMapRotation,Re===void 0&&(v.addEventListener("dispose",Fe),Re=new Map,z.programs=Re);let Ie=Re.get(de);if(Ie!==void 0){if(z.currentProgram===Ie&&z.lightsStateVersion===ce)return Ml(v,_e),Ie}else _e.uniforms=W.getUniforms(v),v.onBeforeCompile(_e,M),Ie=W.acquireProgram(_e,de),Re.set(de,Ie),z.uniforms=_e.uniforms;const Me=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Me.clippingPlanes=ye.uniform),Ml(v,_e),z.needsLights=rh(v),z.lightsStateVersion=ce,z.needsLights&&(Me.ambientLightColor.value=N.state.ambient,Me.lightProbe.value=N.state.probe,Me.directionalLights.value=N.state.directional,Me.directionalLightShadows.value=N.state.directionalShadow,Me.spotLights.value=N.state.spot,Me.spotLightShadows.value=N.state.spotShadow,Me.rectAreaLights.value=N.state.rectArea,Me.ltc_1.value=N.state.rectAreaLTC1,Me.ltc_2.value=N.state.rectAreaLTC2,Me.pointLights.value=N.state.point,Me.pointLightShadows.value=N.state.pointShadow,Me.hemisphereLights.value=N.state.hemi,Me.directionalShadowMap.value=N.state.directionalShadowMap,Me.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Me.spotShadowMap.value=N.state.spotShadowMap,Me.spotLightMatrix.value=N.state.spotLightMatrix,Me.spotLightMap.value=N.state.spotLightMap,Me.pointShadowMap.value=N.state.pointShadowMap,Me.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ie,z.uniformsList=null,Ie}function Sl(v){if(v.uniformsList===null){const F=v.currentProgram.getUniforms();v.uniformsList=cs.seqWithValue(F.seq,v.uniforms)}return v.uniformsList}function Ml(v,F){const k=Te.get(v);k.outputColorSpace=F.outputColorSpace,k.batching=F.batching,k.batchingColor=F.batchingColor,k.instancing=F.instancing,k.instancingColor=F.instancingColor,k.instancingMorph=F.instancingMorph,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function nh(v,F,k,z,N){F.isScene!==!0&&(F=ct),Oe.resetTextureUnits();const ne=F.fog,ce=z.isMeshStandardMaterial?F.environment:null,_e=b===null?M.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Hi,de=(z.isMeshStandardMaterial?g:T).get(z.envMap||ce),Re=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ie=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Me=!!k.morphAttributes.position,Ye=!!k.morphAttributes.normal,Je=!!k.morphAttributes.color;let ut=zn;z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ut=M.toneMapping);const ft=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,nt=ft!==void 0?ft.length:0,Ae=Te.get(z),ot=S.state.lights;if(Y===!0&&(fe===!0||v!==B)){const Rt=v===B&&z.id===I;ye.setState(z,v,Rt)}let Ke=!1;z.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==ot.state.version||Ae.outputColorSpace!==_e||N.isBatchedMesh&&Ae.batching===!1||!N.isBatchedMesh&&Ae.batching===!0||N.isBatchedMesh&&Ae.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ae.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ae.instancing===!1||!N.isInstancedMesh&&Ae.instancing===!0||N.isSkinnedMesh&&Ae.skinning===!1||!N.isSkinnedMesh&&Ae.skinning===!0||N.isInstancedMesh&&Ae.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ae.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ae.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ae.instancingMorph===!1&&N.morphTexture!==null||Ae.envMap!==de||z.fog===!0&&Ae.fog!==ne||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ye.numPlanes||Ae.numIntersection!==ye.numIntersection)||Ae.vertexAlphas!==Re||Ae.vertexTangents!==Ie||Ae.morphTargets!==Me||Ae.morphNormals!==Ye||Ae.morphColors!==Je||Ae.toneMapping!==ut||Ae.morphTargetsCount!==nt)&&(Ke=!0):(Ke=!0,Ae.__version=z.version);let Bt=Ae.currentProgram;Ke===!0&&(Bt=Rr(z,F,N));let mi=!1,Vt=!1,Qi=!1;const lt=Bt.getUniforms(),It=Ae.uniforms;if(ve.useProgram(Bt.program)&&(mi=!0,Vt=!0,Qi=!0),z.id!==I&&(I=z.id,Vt=!0),mi||B!==v){ve.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),lt.setValue(P,"projectionMatrix",v.projectionMatrix),lt.setValue(P,"viewMatrix",v.matrixWorldInverse);const Ut=lt.map.cameraPosition;Ut!==void 0&&Ut.setValue(P,be.setFromMatrixPosition(v.matrixWorld)),it.logarithmicDepthBuffer&&lt.setValue(P,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&lt.setValue(P,"isOrthographic",v.isOrthographicCamera===!0),B!==v&&(B=v,Vt=!0,Qi=!0)}if(N.isSkinnedMesh){lt.setOptional(P,N,"bindMatrix"),lt.setOptional(P,N,"bindMatrixInverse");const Rt=N.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),lt.setValue(P,"boneTexture",Rt.boneTexture,Oe))}N.isBatchedMesh&&(lt.setOptional(P,N,"batchingTexture"),lt.setValue(P,"batchingTexture",N._matricesTexture,Oe),lt.setOptional(P,N,"batchingIdTexture"),lt.setValue(P,"batchingIdTexture",N._indirectTexture,Oe),lt.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&lt.setValue(P,"batchingColorTexture",N._colorsTexture,Oe));const Wt=k.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&De.update(N,k,Bt),(Vt||Ae.receiveShadow!==N.receiveShadow)&&(Ae.receiveShadow=N.receiveShadow,lt.setValue(P,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(It.envMap.value=de,It.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&F.environment!==null&&(It.envMapIntensity.value=F.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=Qy()),Vt&&(lt.setValue(P,"toneMappingExposure",M.toneMappingExposure),Ae.needsLights&&ih(It,Qi),ne&&z.fog===!0&&Se.refreshFogUniforms(It,ne),Se.refreshMaterialUniforms(It,z,J,K,S.state.transmissionRenderTarget[v.id]),cs.upload(P,Sl(Ae),It,Oe)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(cs.upload(P,Sl(Ae),It,Oe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&lt.setValue(P,"center",N.center),lt.setValue(P,"modelViewMatrix",N.modelViewMatrix),lt.setValue(P,"normalMatrix",N.normalMatrix),lt.setValue(P,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Rt=z.uniformsGroups;for(let Ut=0,ws=Rt.length;Ut<ws;Ut++){const Kn=Rt[Ut];le.update(Kn,Bt),le.bind(Kn,Bt)}}return Bt}function ih(v,F){v.ambientLightColor.needsUpdate=F,v.lightProbe.needsUpdate=F,v.directionalLights.needsUpdate=F,v.directionalLightShadows.needsUpdate=F,v.pointLights.needsUpdate=F,v.pointLightShadows.needsUpdate=F,v.spotLights.needsUpdate=F,v.spotLightShadows.needsUpdate=F,v.rectAreaLights.needsUpdate=F,v.hemisphereLights.needsUpdate=F}function rh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(v,F,k){const z=Te.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Te.get(v.texture).__webglTexture=F,Te.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,F){const k=Te.get(v);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0};const sh=P.createFramebuffer();this.setRenderTarget=function(v,F=0,k=0){b=v,C=F,y=k;let z=!0,N=null,ne=!1,ce=!1;if(v){const de=Te.get(v);if(de.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(P.FRAMEBUFFER,null),z=!1;else if(de.__webglFramebuffer===void 0)Oe.setupRenderTarget(v);else if(de.__hasExternalTextures)Oe.rebindTextures(v,Te.get(v.texture).__webglTexture,Te.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Me=v.depthTexture;if(de.__boundDepthTexture!==Me){if(Me!==null&&Te.has(Me)&&(v.width!==Me.image.width||v.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(v)}}const Re=v.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ce=!0);const Ie=Te.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ie[F])?N=Ie[F][k]:N=Ie[F],ne=!0):v.samples>0&&Oe.useMultisampledRTT(v)===!1?N=Te.get(v).__webglMultisampledFramebuffer:Array.isArray(Ie)?N=Ie[k]:N=Ie,G.copy(v.viewport),X.copy(v.scissor),q=v.scissorTest}else G.copy(Ce).multiplyScalar(J).floor(),X.copy(Pe).multiplyScalar(J).floor(),q=We;if(k!==0&&(N=sh),ve.bindFramebuffer(P.FRAMEBUFFER,N)&&z&&ve.drawBuffers(v,N),ve.viewport(G),ve.scissor(X),ve.setScissorTest(q),ne){const de=Te.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,de.__webglTexture,k)}else if(ce){const de=F;for(let Re=0;Re<v.textures.length;Re++){const Ie=Te.get(v.textures[Re]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Re,Ie.__webglTexture,k,de)}}else if(v!==null&&k!==0){const de=Te.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,k)}I=-1},this.readRenderTargetPixels=function(v,F,k,z,N,ne,ce,_e=0){if(!(v&&v.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Te.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(de=de[ce]),de){ve.bindFramebuffer(P.FRAMEBUFFER,de);try{const Re=v.textures[_e],Ie=Re.format,Me=Re.type;if(!it.textureFormatReadable(Ie)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Me)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=v.width-z&&k>=0&&k<=v.height-N&&(v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+_e),P.readPixels(F,k,z,N,Ue.convert(Ie),Ue.convert(Me),ne))}finally{const Re=b!==null?Te.get(b).__webglFramebuffer:null;ve.bindFramebuffer(P.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(v,F,k,z,N,ne,ce,_e=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Te.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(de=de[ce]),de)if(F>=0&&F<=v.width-z&&k>=0&&k<=v.height-N){ve.bindFramebuffer(P.FRAMEBUFFER,de);const Re=v.textures[_e],Ie=Re.format,Me=Re.type;if(!it.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ye),P.bufferData(P.PIXEL_PACK_BUFFER,ne.byteLength,P.STREAM_READ),v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+_e),P.readPixels(F,k,z,N,Ue.convert(Ie),Ue.convert(Me),0);const Je=b!==null?Te.get(b).__webglFramebuffer:null;ve.bindFramebuffer(P.FRAMEBUFFER,Je);const ut=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Ix(P,ut,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ye),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ne),P.deleteBuffer(Ye),P.deleteSync(ut),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,F=null,k=0){const z=Math.pow(2,-k),N=Math.floor(v.image.width*z),ne=Math.floor(v.image.height*z),ce=F!==null?F.x:0,_e=F!==null?F.y:0;Oe.setTexture2D(v,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,ce,_e,N,ne),ve.unbindTexture()};const ah=P.createFramebuffer(),oh=P.createFramebuffer();this.copyTextureToTexture=function(v,F,k=null,z=null,N=0,ne=null){ne===null&&(N!==0?(vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=N,N=0):ne=0);let ce,_e,de,Re,Ie,Me,Ye,Je,ut;const ft=v.isCompressedTexture?v.mipmaps[ne]:v.image;if(k!==null)ce=k.max.x-k.min.x,_e=k.max.y-k.min.y,de=k.isBox3?k.max.z-k.min.z:1,Re=k.min.x,Ie=k.min.y,Me=k.isBox3?k.min.z:0;else{const Wt=Math.pow(2,-N);ce=Math.floor(ft.width*Wt),_e=Math.floor(ft.height*Wt),v.isDataArrayTexture?de=ft.depth:v.isData3DTexture?de=Math.floor(ft.depth*Wt):de=1,Re=0,Ie=0,Me=0}z!==null?(Ye=z.x,Je=z.y,ut=z.z):(Ye=0,Je=0,ut=0);const nt=Ue.convert(F.format),Ae=Ue.convert(F.type);let ot;F.isData3DTexture?(Oe.setTexture3D(F,0),ot=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Oe.setTexture2DArray(F,0),ot=P.TEXTURE_2D_ARRAY):(Oe.setTexture2D(F,0),ot=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const Ke=P.getParameter(P.UNPACK_ROW_LENGTH),Bt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),mi=P.getParameter(P.UNPACK_SKIP_PIXELS),Vt=P.getParameter(P.UNPACK_SKIP_ROWS),Qi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Re),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ie),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Me);const lt=v.isDataArrayTexture||v.isData3DTexture,It=F.isDataArrayTexture||F.isData3DTexture;if(v.isDepthTexture){const Wt=Te.get(v),Rt=Te.get(F),Ut=Te.get(Wt.__renderTarget),ws=Te.get(Rt.__renderTarget);ve.bindFramebuffer(P.READ_FRAMEBUFFER,Ut.__webglFramebuffer),ve.bindFramebuffer(P.DRAW_FRAMEBUFFER,ws.__webglFramebuffer);for(let Kn=0;Kn<de;Kn++)lt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Te.get(v).__webglTexture,N,Me+Kn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Te.get(F).__webglTexture,ne,ut+Kn)),P.blitFramebuffer(Re,Ie,ce,_e,Ye,Je,ce,_e,P.DEPTH_BUFFER_BIT,P.NEAREST);ve.bindFramebuffer(P.READ_FRAMEBUFFER,null),ve.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||Te.has(v)){const Wt=Te.get(v),Rt=Te.get(F);ve.bindFramebuffer(P.READ_FRAMEBUFFER,ah),ve.bindFramebuffer(P.DRAW_FRAMEBUFFER,oh);for(let Ut=0;Ut<de;Ut++)lt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Wt.__webglTexture,N,Me+Ut):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Wt.__webglTexture,N),It?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rt.__webglTexture,ne,ut+Ut):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Rt.__webglTexture,ne),N!==0?P.blitFramebuffer(Re,Ie,ce,_e,Ye,Je,ce,_e,P.COLOR_BUFFER_BIT,P.NEAREST):It?P.copyTexSubImage3D(ot,ne,Ye,Je,ut+Ut,Re,Ie,ce,_e):P.copyTexSubImage2D(ot,ne,Ye,Je,Re,Ie,ce,_e);ve.bindFramebuffer(P.READ_FRAMEBUFFER,null),ve.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else It?v.isDataTexture||v.isData3DTexture?P.texSubImage3D(ot,ne,Ye,Je,ut,ce,_e,de,nt,Ae,ft.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(ot,ne,Ye,Je,ut,ce,_e,de,nt,ft.data):P.texSubImage3D(ot,ne,Ye,Je,ut,ce,_e,de,nt,Ae,ft):v.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ne,Ye,Je,ce,_e,nt,Ae,ft.data):v.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ne,Ye,Je,ft.width,ft.height,nt,ft.data):P.texSubImage2D(P.TEXTURE_2D,ne,Ye,Je,ce,_e,nt,Ae,ft);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ke),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Bt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,mi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Vt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Qi),ne===0&&F.generateMipmaps&&P.generateMipmap(ot),ve.unbindTexture()},this.initRenderTarget=function(v){Te.get(v).__webglFramebuffer===void 0&&Oe.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Oe.setTextureCube(v,0):v.isData3DTexture?Oe.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Oe.setTexture2DArray(v,0):Oe.setTexture2D(v,0),ve.unbindTexture()},this.resetState=function(){C=0,y=0,b=null,ve.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}function Ud(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(e=0;e<r;e++)n[e]&&(t=Ud(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function PM(){for(var n,e,t=0,i="",r=arguments.length;t<r;t++)(n=arguments[t])&&(e=Ud(n))&&(i&&(i+=" "),i+=e);return i}const eS=(n,e)=>{const t=new Array(n.length+e.length);for(let i=0;i<n.length;i++)t[i]=n[i];for(let i=0;i<e.length;i++)t[n.length+i]=e[i];return t},tS=(n,e)=>({classGroupId:n,validator:e}),Fd=(n=new Map,e=null,t)=>({nextPart:n,validators:e,classGroupId:t}),bs="-",Tu=[],nS="arbitrary..",iS=n=>{const e=sS(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:i}=n;return{getClassGroupId:a=>{if(a.startsWith("[")&&a.endsWith("]"))return rS(a);const o=a.split(bs),l=o[0]===""&&o.length>1?1:0;return Nd(o,l,e)},getConflictingClassGroupIds:(a,o)=>{if(o){const l=i[a],c=t[a];return l?c?eS(c,l):l:c||Tu}return t[a]||Tu}}},Nd=(n,e,t)=>{if(n.length-e===0)return t.classGroupId;const r=n[e],s=t.nextPart.get(r);if(s){const c=Nd(n,e+1,s);if(c)return c}const a=t.validators;if(a===null)return;const o=e===0?n.join(bs):n.slice(e).join(bs),l=a.length;for(let c=0;c<l;c++){const u=a[c];if(u.validator(o))return u.classGroupId}},rS=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=n.slice(1,-1),t=e.indexOf(":"),i=e.slice(0,t);return i?nS+i:void 0})(),sS=n=>{const{theme:e,classGroups:t}=n;return aS(t,e)},aS=(n,e)=>{const t=Fd();for(const i in n){const r=n[i];ml(r,t,i,e)}return t},ml=(n,e,t,i)=>{const r=n.length;for(let s=0;s<r;s++){const a=n[s];oS(a,e,t,i)}},oS=(n,e,t,i)=>{if(typeof n=="string"){lS(n,e,t);return}if(typeof n=="function"){cS(n,e,t,i);return}uS(n,e,t,i)},lS=(n,e,t)=>{const i=n===""?e:Od(e,n);i.classGroupId=t},cS=(n,e,t,i)=>{if(fS(n)){ml(n(i),e,t,i);return}e.validators===null&&(e.validators=[]),e.validators.push(tS(t,n))},uS=(n,e,t,i)=>{const r=Object.entries(n),s=r.length;for(let a=0;a<s;a++){const[o,l]=r[a];ml(l,Od(e,o),t,i)}},Od=(n,e)=>{let t=n;const i=e.split(bs),r=i.length;for(let s=0;s<r;s++){const a=i[s];let o=t.nextPart.get(a);o||(o=Fd(),t.nextPart.set(a,o)),t=o}return t},fS=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,dS=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=Object.create(null),i=Object.create(null);const r=(s,a)=>{t[s]=a,e++,e>n&&(e=0,i=t,t=Object.create(null))};return{get(s){let a=t[s];if(a!==void 0)return a;if((a=i[s])!==void 0)return r(s,a),a},set(s,a){s in t?t[s]=a:r(s,a)}}},Uo="!",Eu=":",hS=[],Au=(n,e,t,i,r)=>({modifiers:n,hasImportantModifier:e,baseClassName:t,maybePostfixModifierPosition:i,isExternal:r}),pS=n=>{const{prefix:e,experimentalParseClassName:t}=n;let i=r=>{const s=[];let a=0,o=0,l=0,c;const u=r.length;for(let _=0;_<u;_++){const m=r[_];if(a===0&&o===0){if(m===Eu){s.push(r.slice(l,_)),l=_+1;continue}if(m==="/"){c=_;continue}}m==="["?a++:m==="]"?a--:m==="("?o++:m===")"&&o--}const f=s.length===0?r:r.slice(l);let d=f,p=!1;f.endsWith(Uo)?(d=f.slice(0,-1),p=!0):f.startsWith(Uo)&&(d=f.slice(1),p=!0);const x=c&&c>l?c-l:void 0;return Au(s,p,d,x)};if(e){const r=e+Eu,s=i;i=a=>a.startsWith(r)?s(a.slice(r.length)):Au(hS,!1,a,void 0,!0)}if(t){const r=i;i=s=>t({className:s,parseClassName:r})}return i},mS=n=>{const e=new Map;return n.orderSensitiveModifiers.forEach((t,i)=>{e.set(t,1e6+i)}),t=>{const i=[];let r=[];for(let s=0;s<t.length;s++){const a=t[s],o=a[0]==="[",l=e.has(a);o||l?(r.length>0&&(r.sort(),i.push(...r),r=[]),i.push(a)):r.push(a)}return r.length>0&&(r.sort(),i.push(...r)),i}},xS=n=>({cache:dS(n.cacheSize),parseClassName:pS(n),sortModifiers:mS(n),...iS(n)}),gS=/\s+/,_S=(n,e)=>{const{parseClassName:t,getClassGroupId:i,getConflictingClassGroupIds:r,sortModifiers:s}=e,a=[],o=n.trim().split(gS);let l="";for(let c=o.length-1;c>=0;c-=1){const u=o[c],{isExternal:f,modifiers:d,hasImportantModifier:p,baseClassName:x,maybePostfixModifierPosition:_}=t(u);if(f){l=u+(l.length>0?" "+l:l);continue}let m=!!_,h=i(m?x.substring(0,_):x);if(!h){if(!m){l=u+(l.length>0?" "+l:l);continue}if(h=i(x),!h){l=u+(l.length>0?" "+l:l);continue}m=!1}const E=d.length===0?"":d.length===1?d[0]:s(d).join(":"),S=p?E+Uo:E,A=S+h;if(a.indexOf(A)>-1)continue;a.push(A);const w=r(h,m);for(let M=0;M<w.length;++M){const D=w[M];a.push(S+D)}l=u+(l.length>0?" "+l:l)}return l},vS=(...n)=>{let e=0,t,i,r="";for(;e<n.length;)(t=n[e++])&&(i=Bd(t))&&(r&&(r+=" "),r+=i);return r},Bd=n=>{if(typeof n=="string")return n;let e,t="";for(let i=0;i<n.length;i++)n[i]&&(e=Bd(n[i]))&&(t&&(t+=" "),t+=e);return t},bS=(n,...e)=>{let t,i,r,s;const a=l=>{const c=e.reduce((u,f)=>f(u),n());return t=xS(c),i=t.cache.get,r=t.cache.set,s=o,o(l)},o=l=>{const c=i(l);if(c)return c;const u=_S(l,t);return r(l,u),u};return s=a,(...l)=>s(vS(...l))},yS=[],gt=n=>{const e=t=>t[n]||yS;return e.isThemeGetter=!0,e},Vd=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,kd=/^\((?:(\w[\w-]*):)?(.+)\)$/i,SS=/^\d+\/\d+$/,MS=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,TS=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ES=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,AS=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,wS=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Pi=n=>SS.test(n),Ge=n=>!!n&&!Number.isNaN(Number(n)),Nn=n=>!!n&&Number.isInteger(Number(n)),va=n=>n.endsWith("%")&&Ge(n.slice(0,-1)),xn=n=>MS.test(n),RS=()=>!0,CS=n=>TS.test(n)&&!ES.test(n),zd=()=>!1,PS=n=>AS.test(n),DS=n=>wS.test(n),LS=n=>!he(n)&&!pe(n),IS=n=>Zi(n,Wd,zd),he=n=>Vd.test(n),ii=n=>Zi(n,Xd,CS),ba=n=>Zi(n,BS,Ge),wu=n=>Zi(n,Gd,zd),US=n=>Zi(n,Hd,DS),Jr=n=>Zi(n,qd,PS),pe=n=>kd.test(n),or=n=>Ji(n,Xd),FS=n=>Ji(n,VS),Ru=n=>Ji(n,Gd),NS=n=>Ji(n,Wd),OS=n=>Ji(n,Hd),Qr=n=>Ji(n,qd,!0),Zi=(n,e,t)=>{const i=Vd.exec(n);return i?i[1]?e(i[1]):t(i[2]):!1},Ji=(n,e,t=!1)=>{const i=kd.exec(n);return i?i[1]?e(i[1]):t:!1},Gd=n=>n==="position"||n==="percentage",Hd=n=>n==="image"||n==="url",Wd=n=>n==="length"||n==="size"||n==="bg-size",Xd=n=>n==="length",BS=n=>n==="number",VS=n=>n==="family-name",qd=n=>n==="shadow",kS=()=>{const n=gt("color"),e=gt("font"),t=gt("text"),i=gt("font-weight"),r=gt("tracking"),s=gt("leading"),a=gt("breakpoint"),o=gt("container"),l=gt("spacing"),c=gt("radius"),u=gt("shadow"),f=gt("inset-shadow"),d=gt("text-shadow"),p=gt("drop-shadow"),x=gt("blur"),_=gt("perspective"),m=gt("aspect"),h=gt("ease"),E=gt("animate"),S=()=>["auto","avoid","all","avoid-page","page","left","right","column"],A=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],w=()=>[...A(),pe,he],M=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto","contain","none"],C=()=>[pe,he,l],y=()=>[Pi,"full","auto",...C()],b=()=>[Nn,"none","subgrid",pe,he],I=()=>["auto",{span:["full",Nn,pe,he]},Nn,pe,he],B=()=>[Nn,"auto",pe,he],G=()=>["auto","min","max","fr",pe,he],X=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],q=()=>["start","end","center","stretch","center-safe","end-safe"],U=()=>["auto",...C()],V=()=>[Pi,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...C()],R=()=>[n,pe,he],K=()=>[...A(),Ru,wu,{position:[pe,he]}],J=()=>["no-repeat",{repeat:["","x","y","space","round"]}],xe=()=>["auto","cover","contain",NS,IS,{size:[pe,he]}],Ne=()=>[va,or,ii],Ce=()=>["","none","full",c,pe,he],Pe=()=>["",Ge,or,ii],We=()=>["solid","dashed","dotted","double"],j=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Y=()=>[Ge,va,Ru,wu],fe=()=>["","none",x,pe,he],Le=()=>["none",Ge,pe,he],be=()=>["none",Ge,pe,he],ke=()=>[Ge,pe,he],ct=()=>[Pi,"full",...C()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[xn],breakpoint:[xn],color:[RS],container:[xn],"drop-shadow":[xn],ease:["in","out","in-out"],font:[LS],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[xn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[xn],shadow:[xn],spacing:["px",Ge],text:[xn],"text-shadow":[xn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Pi,he,pe,m]}],container:["container"],columns:[{columns:[Ge,he,pe,o]}],"break-after":[{"break-after":S()}],"break-before":[{"break-before":S()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:w()}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:D()}],"overscroll-x":[{"overscroll-x":D()}],"overscroll-y":[{"overscroll-y":D()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:y()}],"inset-x":[{"inset-x":y()}],"inset-y":[{"inset-y":y()}],start:[{start:y()}],end:[{end:y()}],top:[{top:y()}],right:[{right:y()}],bottom:[{bottom:y()}],left:[{left:y()}],visibility:["visible","invisible","collapse"],z:[{z:[Nn,"auto",pe,he]}],basis:[{basis:[Pi,"full","auto",o,...C()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ge,Pi,"auto","initial","none",he]}],grow:[{grow:["",Ge,pe,he]}],shrink:[{shrink:["",Ge,pe,he]}],order:[{order:[Nn,"first","last","none",pe,he]}],"grid-cols":[{"grid-cols":b()}],"col-start-end":[{col:I()}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":b()}],"row-start-end":[{row:I()}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":G()}],"auto-rows":[{"auto-rows":G()}],gap:[{gap:C()}],"gap-x":[{"gap-x":C()}],"gap-y":[{"gap-y":C()}],"justify-content":[{justify:[...X(),"normal"]}],"justify-items":[{"justify-items":[...q(),"normal"]}],"justify-self":[{"justify-self":["auto",...q()]}],"align-content":[{content:["normal",...X()]}],"align-items":[{items:[...q(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...q(),{baseline:["","last"]}]}],"place-content":[{"place-content":X()}],"place-items":[{"place-items":[...q(),"baseline"]}],"place-self":[{"place-self":["auto",...q()]}],p:[{p:C()}],px:[{px:C()}],py:[{py:C()}],ps:[{ps:C()}],pe:[{pe:C()}],pt:[{pt:C()}],pr:[{pr:C()}],pb:[{pb:C()}],pl:[{pl:C()}],m:[{m:U()}],mx:[{mx:U()}],my:[{my:U()}],ms:[{ms:U()}],me:[{me:U()}],mt:[{mt:U()}],mr:[{mr:U()}],mb:[{mb:U()}],ml:[{ml:U()}],"space-x":[{"space-x":C()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":C()}],"space-y-reverse":["space-y-reverse"],size:[{size:V()}],w:[{w:[o,"screen",...V()]}],"min-w":[{"min-w":[o,"screen","none",...V()]}],"max-w":[{"max-w":[o,"screen","none","prose",{screen:[a]},...V()]}],h:[{h:["screen","lh",...V()]}],"min-h":[{"min-h":["screen","lh","none",...V()]}],"max-h":[{"max-h":["screen","lh",...V()]}],"font-size":[{text:["base",t,or,ii]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[i,pe,ba]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",va,he]}],"font-family":[{font:[FS,he,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[r,pe,he]}],"line-clamp":[{"line-clamp":[Ge,"none",pe,ba]}],leading:[{leading:[s,...C()]}],"list-image":[{"list-image":["none",pe,he]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",pe,he]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:R()}],"text-color":[{text:R()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...We(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ge,"from-font","auto",pe,ii]}],"text-decoration-color":[{decoration:R()}],"underline-offset":[{"underline-offset":[Ge,"auto",pe,he]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:C()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",pe,he]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",pe,he]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:K()}],"bg-repeat":[{bg:J()}],"bg-size":[{bg:xe()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Nn,pe,he],radial:["",pe,he],conic:[Nn,pe,he]},OS,US]}],"bg-color":[{bg:R()}],"gradient-from-pos":[{from:Ne()}],"gradient-via-pos":[{via:Ne()}],"gradient-to-pos":[{to:Ne()}],"gradient-from":[{from:R()}],"gradient-via":[{via:R()}],"gradient-to":[{to:R()}],rounded:[{rounded:Ce()}],"rounded-s":[{"rounded-s":Ce()}],"rounded-e":[{"rounded-e":Ce()}],"rounded-t":[{"rounded-t":Ce()}],"rounded-r":[{"rounded-r":Ce()}],"rounded-b":[{"rounded-b":Ce()}],"rounded-l":[{"rounded-l":Ce()}],"rounded-ss":[{"rounded-ss":Ce()}],"rounded-se":[{"rounded-se":Ce()}],"rounded-ee":[{"rounded-ee":Ce()}],"rounded-es":[{"rounded-es":Ce()}],"rounded-tl":[{"rounded-tl":Ce()}],"rounded-tr":[{"rounded-tr":Ce()}],"rounded-br":[{"rounded-br":Ce()}],"rounded-bl":[{"rounded-bl":Ce()}],"border-w":[{border:Pe()}],"border-w-x":[{"border-x":Pe()}],"border-w-y":[{"border-y":Pe()}],"border-w-s":[{"border-s":Pe()}],"border-w-e":[{"border-e":Pe()}],"border-w-t":[{"border-t":Pe()}],"border-w-r":[{"border-r":Pe()}],"border-w-b":[{"border-b":Pe()}],"border-w-l":[{"border-l":Pe()}],"divide-x":[{"divide-x":Pe()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Pe()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...We(),"hidden","none"]}],"divide-style":[{divide:[...We(),"hidden","none"]}],"border-color":[{border:R()}],"border-color-x":[{"border-x":R()}],"border-color-y":[{"border-y":R()}],"border-color-s":[{"border-s":R()}],"border-color-e":[{"border-e":R()}],"border-color-t":[{"border-t":R()}],"border-color-r":[{"border-r":R()}],"border-color-b":[{"border-b":R()}],"border-color-l":[{"border-l":R()}],"divide-color":[{divide:R()}],"outline-style":[{outline:[...We(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ge,pe,he]}],"outline-w":[{outline:["",Ge,or,ii]}],"outline-color":[{outline:R()}],shadow:[{shadow:["","none",u,Qr,Jr]}],"shadow-color":[{shadow:R()}],"inset-shadow":[{"inset-shadow":["none",f,Qr,Jr]}],"inset-shadow-color":[{"inset-shadow":R()}],"ring-w":[{ring:Pe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:R()}],"ring-offset-w":[{"ring-offset":[Ge,ii]}],"ring-offset-color":[{"ring-offset":R()}],"inset-ring-w":[{"inset-ring":Pe()}],"inset-ring-color":[{"inset-ring":R()}],"text-shadow":[{"text-shadow":["none",d,Qr,Jr]}],"text-shadow-color":[{"text-shadow":R()}],opacity:[{opacity:[Ge,pe,he]}],"mix-blend":[{"mix-blend":[...j(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":j()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ge]}],"mask-image-linear-from-pos":[{"mask-linear-from":Y()}],"mask-image-linear-to-pos":[{"mask-linear-to":Y()}],"mask-image-linear-from-color":[{"mask-linear-from":R()}],"mask-image-linear-to-color":[{"mask-linear-to":R()}],"mask-image-t-from-pos":[{"mask-t-from":Y()}],"mask-image-t-to-pos":[{"mask-t-to":Y()}],"mask-image-t-from-color":[{"mask-t-from":R()}],"mask-image-t-to-color":[{"mask-t-to":R()}],"mask-image-r-from-pos":[{"mask-r-from":Y()}],"mask-image-r-to-pos":[{"mask-r-to":Y()}],"mask-image-r-from-color":[{"mask-r-from":R()}],"mask-image-r-to-color":[{"mask-r-to":R()}],"mask-image-b-from-pos":[{"mask-b-from":Y()}],"mask-image-b-to-pos":[{"mask-b-to":Y()}],"mask-image-b-from-color":[{"mask-b-from":R()}],"mask-image-b-to-color":[{"mask-b-to":R()}],"mask-image-l-from-pos":[{"mask-l-from":Y()}],"mask-image-l-to-pos":[{"mask-l-to":Y()}],"mask-image-l-from-color":[{"mask-l-from":R()}],"mask-image-l-to-color":[{"mask-l-to":R()}],"mask-image-x-from-pos":[{"mask-x-from":Y()}],"mask-image-x-to-pos":[{"mask-x-to":Y()}],"mask-image-x-from-color":[{"mask-x-from":R()}],"mask-image-x-to-color":[{"mask-x-to":R()}],"mask-image-y-from-pos":[{"mask-y-from":Y()}],"mask-image-y-to-pos":[{"mask-y-to":Y()}],"mask-image-y-from-color":[{"mask-y-from":R()}],"mask-image-y-to-color":[{"mask-y-to":R()}],"mask-image-radial":[{"mask-radial":[pe,he]}],"mask-image-radial-from-pos":[{"mask-radial-from":Y()}],"mask-image-radial-to-pos":[{"mask-radial-to":Y()}],"mask-image-radial-from-color":[{"mask-radial-from":R()}],"mask-image-radial-to-color":[{"mask-radial-to":R()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":A()}],"mask-image-conic-pos":[{"mask-conic":[Ge]}],"mask-image-conic-from-pos":[{"mask-conic-from":Y()}],"mask-image-conic-to-pos":[{"mask-conic-to":Y()}],"mask-image-conic-from-color":[{"mask-conic-from":R()}],"mask-image-conic-to-color":[{"mask-conic-to":R()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:K()}],"mask-repeat":[{mask:J()}],"mask-size":[{mask:xe()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",pe,he]}],filter:[{filter:["","none",pe,he]}],blur:[{blur:fe()}],brightness:[{brightness:[Ge,pe,he]}],contrast:[{contrast:[Ge,pe,he]}],"drop-shadow":[{"drop-shadow":["","none",p,Qr,Jr]}],"drop-shadow-color":[{"drop-shadow":R()}],grayscale:[{grayscale:["",Ge,pe,he]}],"hue-rotate":[{"hue-rotate":[Ge,pe,he]}],invert:[{invert:["",Ge,pe,he]}],saturate:[{saturate:[Ge,pe,he]}],sepia:[{sepia:["",Ge,pe,he]}],"backdrop-filter":[{"backdrop-filter":["","none",pe,he]}],"backdrop-blur":[{"backdrop-blur":fe()}],"backdrop-brightness":[{"backdrop-brightness":[Ge,pe,he]}],"backdrop-contrast":[{"backdrop-contrast":[Ge,pe,he]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ge,pe,he]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ge,pe,he]}],"backdrop-invert":[{"backdrop-invert":["",Ge,pe,he]}],"backdrop-opacity":[{"backdrop-opacity":[Ge,pe,he]}],"backdrop-saturate":[{"backdrop-saturate":[Ge,pe,he]}],"backdrop-sepia":[{"backdrop-sepia":["",Ge,pe,he]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":C()}],"border-spacing-x":[{"border-spacing-x":C()}],"border-spacing-y":[{"border-spacing-y":C()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",pe,he]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ge,"initial",pe,he]}],ease:[{ease:["linear","initial",h,pe,he]}],delay:[{delay:[Ge,pe,he]}],animate:[{animate:["none",E,pe,he]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[_,pe,he]}],"perspective-origin":[{"perspective-origin":w()}],rotate:[{rotate:Le()}],"rotate-x":[{"rotate-x":Le()}],"rotate-y":[{"rotate-y":Le()}],"rotate-z":[{"rotate-z":Le()}],scale:[{scale:be()}],"scale-x":[{"scale-x":be()}],"scale-y":[{"scale-y":be()}],"scale-z":[{"scale-z":be()}],"scale-3d":["scale-3d"],skew:[{skew:ke()}],"skew-x":[{"skew-x":ke()}],"skew-y":[{"skew-y":ke()}],transform:[{transform:[pe,he,"","none","gpu","cpu"]}],"transform-origin":[{origin:w()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ct()}],"translate-x":[{"translate-x":ct()}],"translate-y":[{"translate-y":ct()}],"translate-z":[{"translate-z":ct()}],"translate-none":["translate-none"],accent:[{accent:R()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:R()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",pe,he]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":C()}],"scroll-mx":[{"scroll-mx":C()}],"scroll-my":[{"scroll-my":C()}],"scroll-ms":[{"scroll-ms":C()}],"scroll-me":[{"scroll-me":C()}],"scroll-mt":[{"scroll-mt":C()}],"scroll-mr":[{"scroll-mr":C()}],"scroll-mb":[{"scroll-mb":C()}],"scroll-ml":[{"scroll-ml":C()}],"scroll-p":[{"scroll-p":C()}],"scroll-px":[{"scroll-px":C()}],"scroll-py":[{"scroll-py":C()}],"scroll-ps":[{"scroll-ps":C()}],"scroll-pe":[{"scroll-pe":C()}],"scroll-pt":[{"scroll-pt":C()}],"scroll-pr":[{"scroll-pr":C()}],"scroll-pb":[{"scroll-pb":C()}],"scroll-pl":[{"scroll-pl":C()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",pe,he]}],fill:[{fill:["none",...R()]}],"stroke-w":[{stroke:[Ge,or,ii,ba]}],stroke:[{stroke:["none",...R()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},DM=bS(kS);var ya={exports:{}},Sa,Cu;function zS(){if(Cu)return Sa;Cu=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Sa=n,Sa}var Ma,Pu;function GS(){if(Pu)return Ma;Pu=1;var n=zS();function e(){}function t(){}return t.resetWarningCache=e,Ma=function(){function i(a,o,l,c,u,f){if(f!==n){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}i.isRequired=i;function r(){return i}var s={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:r,element:i,elementType:i,instanceOf:r,node:i,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:t,resetWarningCache:e};return s.PropTypes=s,s},Ma}var Du;function HS(){return Du||(Du=1,ya.exports=GS()()),ya.exports}var WS=HS();const LM=Iu(WS);var Ta,Lu;function XS(){if(Lu)return Ta;Lu=1;var n=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function i(s){if(s==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(s)}function r(){try{if(!Object.assign)return!1;var s=new String("abc");if(s[5]="de",Object.getOwnPropertyNames(s)[0]==="5")return!1;for(var a={},o=0;o<10;o++)a["_"+String.fromCharCode(o)]=o;var l=Object.getOwnPropertyNames(a).map(function(u){return a[u]});if(l.join("")!=="0123456789")return!1;var c={};return"abcdefghijklmnopqrst".split("").forEach(function(u){c[u]=u}),Object.keys(Object.assign({},c)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return Ta=r()?Object.assign:function(s,a){for(var o,l=i(s),c,u=1;u<arguments.length;u++){o=Object(arguments[u]);for(var f in o)e.call(o,f)&&(l[f]=o[f]);if(n){c=n(o);for(var d=0;d<c.length;d++)t.call(o,c[d])&&(l[c[d]]=o[c[d]])}}return l},Ta}var qS=XS();const IM=Iu(qS);class Ar{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const YS=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,e)=>Promise.resolve(localStorage.setItem(n,e)),remove:n=>Promise.resolve(localStorage.removeItem(n))}},Tt={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:YS()},xl=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{},jS=(n,e="https://api.emailjs.com")=>{if(!n)return;const t=xl(n);Tt.publicKey=t.publicKey,Tt.blockHeadless=t.blockHeadless,Tt.storageProvider=t.storageProvider,Tt.blockList=t.blockList,Tt.limitRate=t.limitRate,Tt.origin=t.origin||e},Yd=async(n,e,t={})=>{const i=await fetch(Tt.origin+n,{method:"POST",headers:t,body:e}),r=await i.text(),s=new Ar(i.status,r);if(i.ok)return s;throw s},jd=(n,e,t)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},KS=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Kd=n=>n.webdriver||!n.languages||n.languages.length===0,$d=()=>new Ar(451,"Unavailable For Headless Browser"),$S=(n,e)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},ZS=n=>!n.list?.length||!n.watchVariable,JS=(n,e)=>n instanceof FormData?n.get(e):n[e],Zd=(n,e)=>{if(ZS(n))return!1;$S(n.list,n.watchVariable);const t=JS(e,n.watchVariable);return typeof t!="string"?!1:n.list.includes(t)},Jd=()=>new Ar(403,"Forbidden"),QS=(n,e)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},eM=async(n,e,t)=>{const i=Number(await t.get(n)||0);return e-Date.now()+i},Qd=async(n,e,t)=>{if(!e.throttle||!t)return!1;QS(e.throttle,e.id);const i=e.id||n;return await eM(i,e.throttle,t)>0?!0:(await t.set(i,Date.now().toString()),!1)},eh=()=>new Ar(429,"Too Many Requests"),tM=async(n,e,t,i)=>{const r=xl(i),s=r.publicKey||Tt.publicKey,a=r.blockHeadless||Tt.blockHeadless,o=r.storageProvider||Tt.storageProvider,l={...Tt.blockList,...r.blockList},c={...Tt.limitRate,...r.limitRate};return a&&Kd(navigator)?Promise.reject($d()):(jd(s,n,e),KS(t),t&&Zd(l,t)?Promise.reject(Jd()):await Qd(location.pathname,c,o)?Promise.reject(eh()):Yd("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"}))},nM=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},iM=n=>typeof n=="string"?document.querySelector(n):n,rM=async(n,e,t,i)=>{const r=xl(i),s=r.publicKey||Tt.publicKey,a=r.blockHeadless||Tt.blockHeadless,o=Tt.storageProvider||r.storageProvider,l={...Tt.blockList,...r.blockList},c={...Tt.limitRate,...r.limitRate};if(a&&Kd(navigator))return Promise.reject($d());const u=iM(t);jd(s,n,e),nM(u);const f=new FormData(u);return Zd(l,f)?Promise.reject(Jd()):await Qd(location.pathname,c,o)?Promise.reject(eh()):(f.append("lib_version","4.4.1"),f.append("service_id",n),f.append("template_id",e),f.append("user_id",s),Yd("/api/v1.0/email/send-form",f))},UM={init:jS,send:tM,sendForm:rM,EmailJSResponseStatus:Ar};export{Ou as $,yn as A,rn as B,vt as C,Yt as D,Vo as E,_M as F,En as G,yM as H,_t as I,gc as J,bM as K,vM as L,Nm as M,$p as N,bf as O,LM as P,cM as Q,hM as R,MM as S,Sn as T,fM as U,qn as V,Df as W,Vs as X,AM as Y,uM as Z,dM as _,Of as a,lf as a0,tp as a1,_p as a2,pM as a3,No as a4,Vi as a5,Gl as a6,mM as a7,Cf as a8,oM as a9,us as aa,Xh as ab,ep as ac,pf as ad,tl as ae,Rm as af,Dm as ag,SM as ah,b0 as ai,Tf as aj,hs as ak,lM as al,tt as am,wM as an,dg as ao,Ms as ap,H as aq,Cn as ar,Xn as as,CM as at,qt as au,RM as av,DM as aw,PM as ax,UM as ay,nl as b,Nt as c,Hm as d,Wf as e,$m as f,gM as g,Zm as h,hm as i,Bs as j,Lm as k,Nf as l,yf as m,qf as n,IM as o,Qm as p,Jp as q,aM as r,xM as s,TM as t,mm as u,y0 as v,Pt as w,wt as x,Bo as y,Gn as z};
