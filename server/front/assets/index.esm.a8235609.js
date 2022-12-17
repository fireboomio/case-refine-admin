import{r as p}from"./index.64257940.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function De(e,i,t,n){function a(r){return r instanceof t?r:new t(function(s){s(r)})}return new(t||(t=Promise))(function(r,s){function f(l){try{u(n.next(l))}catch(d){s(d)}}function v(l){try{u(n.throw(l))}catch(d){s(d)}}function u(l){l.done?r(l.value):a(l.value).then(f,v)}u((n=n.apply(e,i||[])).next())})}function Ie(e,i){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,a,r,s;return s={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function f(u){return function(l){return v([u,l])}}function v(u){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,a&&(r=u[0]&2?a.return:u[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,u[1])).done)return r;switch(a=0,r&&(u=[u[0]&2,r.value]),u[0]){case 0:case 1:r=u;break;case 4:return t.label++,{value:u[1],done:!1};case 5:t.label++,a=u[1],u=[0];continue;case 7:u=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!r||u[1]>r[0]&&u[1]<r[3])){t.label=u[1];break}if(u[0]===6&&t.label<r[1]){t.label=r[1],r=u;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(u);break}r[2]&&t.ops.pop(),t.trys.pop();continue}u=i.call(e,t)}catch(l){u=[6,l],a=0}finally{n=r=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}var D=function(){},R=D(),te=Object,w=function(e){return e===R},W=function(e){return typeof e=="function"},M=function(e,i){return te.assign({},e,i)},be="undefined",we=function(){return typeof window!=be},qe=function(){return typeof document!=be},Pe=function(){return we()&&typeof window.requestAnimationFrame!=be},ee=new WeakMap,je=0,Q=function(e){var i=typeof e,t=e&&e.constructor,n=t==Date,a,r;if(te(e)===e&&!n&&t!=RegExp){if(a=ee.get(e),a)return a;if(a=++je+"~",ee.set(e,a),t==Array){for(a="@",r=0;r<e.length;r++)a+=Q(e[r])+",";ee.set(e,a)}if(t==te){a="#";for(var s=te.keys(e).sort();!w(r=s.pop());)w(e[r])||(a+=r+":"+Q(e[r])+",");ee.set(e,a)}}else a=n?e.toJSON():i=="symbol"?e.toString():i=="string"?JSON.stringify(e):""+e;return a},de=!0,ke=function(){return de},Ae=we(),Re=qe(),he=Ae&&window.addEventListener?window.addEventListener.bind(window):D,$e=Re?document.addEventListener.bind(document):D,me=Ae&&window.removeEventListener?window.removeEventListener.bind(window):D,ze=Re?document.removeEventListener.bind(document):D,Je=function(){var e=Re&&document.visibilityState;return w(e)||e!=="hidden"},Ke=function(e){return $e("visibilitychange",e),he("focus",e),function(){ze("visibilitychange",e),me("focus",e)}},Ge=function(e){var i=function(){de=!0,e()},t=function(){de=!1};return he("online",i),he("offline",t),function(){me("online",i),me("offline",t)}},Be={isOnline:ke,isVisible:Je},Qe={initFocus:Ke,initReconnect:Ge},ae=!we()||"Deno"in window,Xe=function(e){return Pe()?window.requestAnimationFrame(e):setTimeout(e,1)},re=ae?p.exports.useEffect:p.exports.useLayoutEffect,ce=typeof navigator<"u"&&navigator.connection,Te=!ae&&ce&&(["slow-2g","2g"].includes(ce.effectiveType)||ce.saveData),Ve=function(e){if(W(e))try{e=e()}catch{e=""}var i=[].concat(e);e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?Q(e):"";var t=e?"$swr$"+e:"";return[e,i,t]},q=new WeakMap,Fe=0,_e=1,We=2,B=function(e,i,t,n,a,r,s){s===void 0&&(s=!0);var f=q.get(e),v=f[0],u=f[1],l=f[3],d=v[i],c=u[i];if(s&&c)for(var I=0;I<c.length;++I)c[I](t,n,a);return r&&(delete l[i],d&&d[0])?d[0](We).then(function(){return e.get(i)}):e.get(i)},Ye=0,pe=function(){return++Ye},Me=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return De(void 0,void 0,void 0,function(){var t,n,a,r,s,f,v,u,l,d,c,I,X,E,h,o,k,N,A,T,U;return Ie(this,function(F){switch(F.label){case 0:if(t=e[0],n=e[1],a=e[2],r=e[3],s=typeof r=="boolean"?{revalidate:r}:r||{},f=w(s.populateCache)?!0:s.populateCache,v=s.revalidate!==!1,u=s.rollbackOnError!==!1,l=s.optimisticData,d=Ve(n),c=d[0],I=d[2],!c)return[2];if(X=q.get(t),E=X[2],e.length<3)return[2,B(t,c,t.get(c),R,R,v,!0)];if(h=a,k=pe(),E[c]=[k,0],N=!w(l),A=t.get(c),N&&(T=W(l)?l(A):l,t.set(c,T),B(t,c,T)),W(h))try{h=h(t.get(c))}catch(L){o=L}return h&&W(h.then)?[4,h.catch(function(L){o=L})]:[3,2];case 1:if(h=F.sent(),k!==E[c][0]){if(o)throw o;return[2,h]}else o&&N&&u&&(f=!0,h=A,t.set(c,A));F.label=2;case 2:return f&&(o||(W(f)&&(h=f(h,A)),t.set(c,h)),t.set(I,M(t.get(I),{error:o}))),E[c][1]=pe(),[4,B(t,c,h,o,R,v,!!f)];case 3:if(U=F.sent(),o)throw o;return[2,f?U:h]}})})},xe=function(e,i){for(var t in e)e[t][0]&&e[t][0](i)},Ze=function(e,i){if(!q.has(e)){var t=M(Qe,i),n={},a=Me.bind(R,e),r=D;if(q.set(e,[n,{},{},{},a]),!ae){var s=t.initFocus(setTimeout.bind(R,xe.bind(R,n,Fe))),f=t.initReconnect(setTimeout.bind(R,xe.bind(R,n,_e)));r=function(){s&&s(),f&&f(),q.delete(e)}}return[e,a,r]}return[e,q.get(e)[4]]},et=function(e,i,t,n,a){var r=t.errorRetryCount,s=a.retryCount,f=~~((Math.random()+.5)*(1<<(s<8?s:8)))*t.errorRetryInterval;!w(r)&&s>r||setTimeout(n,f,a)},Ne=Ze(new Map),tt=Ne[0],rt=Ne[1],nt=M({onLoadingSlow:D,onSuccess:D,onError:D,onErrorRetry:et,onDiscarded:D,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Te?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Te?5e3:3e3,compare:function(e,i){return Q(e)==Q(i)},isPaused:function(){return!1},cache:tt,mutate:rt,fallback:{}},Be),at=function(e,i){var t=M(e,i);if(i){var n=e.use,a=e.fallback,r=i.use,s=i.fallback;n&&r&&(t.use=n.concat(r)),a&&s&&(t.fallback=M(a,s))}return t},it=p.exports.createContext({}),ut=function(e,i){var t=p.exports.useState({})[1],n=p.exports.useRef(e),a=p.exports.useRef({data:!1,error:!1,isValidating:!1}),r=p.exports.useCallback(function(s){var f=!1,v=n.current;for(var u in s){var l=u;v[l]!==s[l]&&(v[l]=s[l],a.current[l]&&(f=!0))}f&&!i.current&&t({})},[]);return re(function(){n.current=e}),[n,a.current,r]},ot=function(e){return W(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}]},st=function(){return M(nt,p.exports.useContext(it))},ft=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var a=st(),r=ot(t),s=r[0],f=r[1],v=r[2],u=at(a,v),l=e,d=u.use;if(d)for(var c=d.length;c-- >0;)l=d[c](l);return l(s,f||u.fetcher,u)}},Ce=function(e,i,t){var n=i[e]||(i[e]=[]);return n.push(t),function(){var a=n.indexOf(t);a>=0&&(n[a]=n[n.length-1],n.pop())}},ve={dedupe:!0},lt=function(e,i,t){var n=t.cache,a=t.compare,r=t.fallbackData,s=t.suspense,f=t.revalidateOnMount,v=t.refreshInterval,u=t.refreshWhenHidden,l=t.refreshWhenOffline,d=q.get(n),c=d[0],I=d[1],X=d[2],E=d[3],h=Ve(e),o=h[0],k=h[1],N=h[2],A=p.exports.useRef(!1),T=p.exports.useRef(!1),U=p.exports.useRef(o),F=p.exports.useRef(i),L=p.exports.useRef(t),m=function(){return L.current},ie=function(){return m().isVisible()&&m().isOnline()},Y=function(S){return n.set(N,M(n.get(N),S))},Ee=n.get(o),Ue=w(r)?t.fallback[o]:r,V=w(Ee)?Ue:Ee,ye=n.get(N)||{},$=ye.error,ge=!A.current,Se=function(){return ge&&!w(f)?f:m().isPaused()?!1:s?w(V)?!1:t.revalidateIfStale:w(V)||t.revalidateIfStale},Le=function(){return!o||!i?!1:ye.isValidating?!0:ge&&Se()},ue=Le(),oe=ut({data:V,error:$,isValidating:ue},T),P=oe[0],se=oe[1],Z=oe[2],H=p.exports.useCallback(function(S){return De(void 0,void 0,void 0,function(){var y,g,O,z,J,x,b,_,C,fe,K,j,le;return Ie(this,function(G){switch(G.label){case 0:if(y=F.current,!o||!y||T.current||m().isPaused())return[2,!1];z=!0,J=S||{},x=!E[o]||!J.dedupe,b=function(){return!T.current&&o===U.current&&A.current},_=function(){var Oe=E[o];Oe&&Oe[1]===O&&delete E[o]},C={isValidating:!1},fe=function(){Y({isValidating:!1}),b()&&Z(C)},Y({isValidating:!0}),Z({isValidating:!0}),G.label=1;case 1:return G.trys.push([1,3,,4]),x&&(B(n,o,P.current.data,P.current.error,!0),t.loadingTimeout&&!n.get(o)&&setTimeout(function(){z&&b()&&m().onLoadingSlow(o,t)},t.loadingTimeout),E[o]=[y.apply(void 0,k),pe()]),le=E[o],g=le[0],O=le[1],[4,g];case 2:return g=G.sent(),x&&setTimeout(_,t.dedupingInterval),!E[o]||E[o][1]!==O?(x&&b()&&m().onDiscarded(o),[2,!1]):(Y({error:R}),C.error=R,K=X[o],!w(K)&&(O<=K[0]||O<=K[1]||K[1]===0)?(fe(),x&&b()&&m().onDiscarded(o),[2,!1]):(a(P.current.data,g)?C.data=P.current.data:C.data=g,a(n.get(o),g)||n.set(o,g),x&&b()&&m().onSuccess(g,o,t),[3,4]));case 3:return j=G.sent(),_(),m().isPaused()||(Y({error:j}),C.error=j,x&&b()&&(m().onError(j,o,t),(typeof t.shouldRetryOnError=="boolean"&&t.shouldRetryOnError||W(t.shouldRetryOnError)&&t.shouldRetryOnError(j))&&ie()&&m().onErrorRetry(j,o,t,H,{retryCount:(J.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return z=!1,fe(),b()&&x&&B(n,o,C.data,C.error,!1),[2,!0]}})})},[o]),He=p.exports.useCallback(Me.bind(R,n,function(){return U.current}),[]);if(re(function(){F.current=i,L.current=t}),re(function(){if(!!o){var S=o!==U.current,y=H.bind(R,ve),g=function(b,_,C){Z(M({error:_,isValidating:C},a(P.current.data,b)?R:{data:b}))},O=0,z=function(b){if(b==Fe){var _=Date.now();m().revalidateOnFocus&&_>O&&ie()&&(O=_+m().focusThrottleInterval,y())}else if(b==_e)m().revalidateOnReconnect&&ie()&&y();else if(b==We)return H()},J=Ce(o,I,g),x=Ce(o,c,z);return T.current=!1,U.current=o,A.current=!0,S&&Z({data:V,error:$,isValidating:ue}),Se()&&(w(V)||ae?y():Xe(y)),function(){T.current=!0,J(),x()}}},[o,H]),re(function(){var S;function y(){var O=W(v)?v(V):v;O&&S!==-1&&(S=setTimeout(g,O))}function g(){!P.current.error&&(u||m().isVisible())&&(l||m().isOnline())?H(ve).then(y):y()}return y(),function(){S&&(clearTimeout(S),S=-1)}},[v,u,l,H]),p.exports.useDebugValue(V),s&&w(V)&&o)throw F.current=i,L.current=t,T.current=!1,w($)?H(ve):$;return{mutate:He,get data(){return se.data=!0,V},get error(){return se.error=!0,$},get isValidating(){return se.isValidating=!0,ue}}},ct=ft(lt);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ne=function(){return ne=Object.assign||function(i){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},ne.apply(this,arguments)},vt=function(e){return typeof e=="function"},dt=function(e){return vt(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}]},ht=function(e,i){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var a=dt(t),r=a[0],s=a[1],f=a[2],v=(f.use||[]).concat(i);return e(r,s,ne(ne({},f),{use:v}))}},mt=function(e){return function(i,t,n){return n.revalidateOnFocus=!1,n.revalidateIfStale=!1,n.revalidateOnReconnect=!1,e(i,t,n)}},bt=ht(ct,mt);export{bt as i,st as u};
