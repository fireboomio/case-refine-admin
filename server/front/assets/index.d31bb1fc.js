import{r as f,C as J,c as T,e as u,j as A,_ as b,a as h,d as te,l as ve,k as de}from"./index.64257940.js";import{c as oe}from"./button.ca276c4e.js";import{P as pe}from"./styleChecker.9486324a.js";function I(o){return pe.indexOf(o)!==-1}var xe=function(e){var s,t=e.className,r=e.prefixCls,m=e.style,n=e.color,v=e.children,C=e.text,a=e.placement,P=a===void 0?"end":a,d=f.exports.useContext(J),w=d.getPrefixCls,O=d.direction,c=w("ribbon",r),p=I(n),y=T(c,"".concat(c,"-placement-").concat(P),(s={},u(s,"".concat(c,"-rtl"),O==="rtl"),u(s,"".concat(c,"-color-").concat(n),p),s),t),g={},x={};return n&&!p&&(g.background=n,x.color=n),A("div",{className:"".concat(c,"-wrapper"),children:[v,A("div",{className:y,style:b(b({},g),m),children:[h("span",{className:"".concat(c,"-text"),children:C}),h("div",{className:"".concat(c,"-corner"),style:x})]})]})};const Ce=xe;function re(o){var e=o.prefixCls,s=o.value,t=o.current,r=o.offset,m=r===void 0?0:r,n;return m&&(n={position:"absolute",top:"".concat(m,"00%"),left:0}),h("span",{style:n,className:T("".concat(e,"-only-unit"),{current:t}),children:s})}function be(o,e,s){for(var t=o,r=0;(t+10)%10!==e;)t+=s,r+=s;return r}function ye(o){var e=o.prefixCls,s=o.count,t=o.value,r=Number(t),m=Math.abs(s),n=f.exports.useState(r),v=te(n,2),C=v[0],a=v[1],P=f.exports.useState(m),d=te(P,2),w=d[0],O=d[1],c=function(){a(r),O(m)};f.exports.useEffect(function(){var N=setTimeout(function(){c()},1e3);return function(){clearTimeout(N)}},[r]);var p,y;if(C===r||Number.isNaN(r)||Number.isNaN(C))p=[f.exports.createElement(re,{...o,key:r,current:!0})],y={transition:"none"};else{p=[];for(var g=r+10,x=[],i=r;i<=g;i+=1)x.push(i);var $=x.findIndex(function(N){return N%10===C});p=x.map(function(N,k){var Z=N%10;return f.exports.createElement(re,{...o,key:N,value:Z,offset:k-$,current:k===$})});var V=w<m?1:-1;y={transform:"translateY(".concat(-be(C,r,V),"00%)")}}return h("span",{className:"".concat(e,"-only"),style:y,onTransitionEnd:c,children:p})}var Ne=globalThis&&globalThis.__rest||function(o,e){var s={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(s[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(o);r<t.length;r++)e.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(o,t[r])&&(s[t[r]]=o[t[r]]);return s},he=function(e){var s=e.prefixCls,t=e.count,r=e.className,m=e.motionClassName,n=e.style,v=e.title,C=e.show,a=e.component,P=a===void 0?"sup":a,d=e.children,w=Ne(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),O=f.exports.useContext(J),c=O.getPrefixCls,p=c("scroll-number",s),y=b(b({},w),{"data-show":C,style:n,className:T(p,r,m),title:v}),g=t;if(t&&Number(t)%1===0){var x=String(t).split("");g=x.map(function(i,$){return h(ye,{prefixCls:p,count:Number(t),value:i},x.length-$)})}return n&&n.borderColor&&(y.style=b(b({},n),{boxShadow:"0 0 0 1px ".concat(n.borderColor," inset")})),d?oe(d,function(i){return{className:T("".concat(p,"-custom-component"),i==null?void 0:i.className,m)}}):f.exports.createElement(P,y,g)};const ge=he;var Se=globalThis&&globalThis.__rest||function(o,e){var s={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(s[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(o);r<t.length;r++)e.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(o,t[r])&&(s[t[r]]=o[t[r]]);return s},se=function(e){var s,t,r=e.prefixCls,m=e.scrollNumberPrefixCls,n=e.children,v=e.status,C=e.text,a=e.color,P=e.count,d=P===void 0?null:P,w=e.overflowCount,O=w===void 0?99:w,c=e.dot,p=c===void 0?!1:c,y=e.size,g=y===void 0?"default":y,x=e.title,i=e.offset,$=e.style,V=e.className,N=e.showZero,k=N===void 0?!1:N,Z=Se(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),K=f.exports.useContext(J),Q=K.getPrefixCls,U=K.direction,l=Q("badge",r),H=d>O?"".concat(O,"+"):d,Y=v!=null||a!=null,q=H==="0"||H===0,D=p&&!q,j=D?"":H,E=f.exports.useMemo(function(){var S=j==null||j==="";return(S||q&&!k)&&!D},[j,q,k,D]),W=f.exports.useRef(d);E||(W.current=d);var z=W.current,X=f.exports.useRef(j);E||(X.current=j);var F=X.current,_=f.exports.useRef(D);E||(_.current=D);var B=f.exports.useMemo(function(){if(!i)return b({},$);var S={marginTop:i[1]};return U==="rtl"?S.left=parseInt(i[0],10):S.right=-parseInt(i[0],10),b(b({},S),$)},[U,i,$]),ne=x!=null?x:typeof z=="string"||typeof z=="number"?z:void 0,ae=E||!C?null:h("span",{className:"".concat(l,"-status-text"),children:C}),le=!z||ve(z)!=="object"?void 0:oe(z,function(S){return{style:b(b({},B),S.style)}}),ce=T((s={},u(s,"".concat(l,"-status-dot"),Y),u(s,"".concat(l,"-status-").concat(v),!!v),u(s,"".concat(l,"-status-").concat(a),I(a)),s)),L={};a&&!I(a)&&(L.background=a);var ee=T(l,(t={},u(t,"".concat(l,"-status"),Y),u(t,"".concat(l,"-not-a-wrapper"),!n),u(t,"".concat(l,"-rtl"),U==="rtl"),t),V);if(!n&&Y){var ie=B.color;return A("span",{...Z,className:ee,style:B,children:[h("span",{className:ce,style:L}),h("span",{style:{color:ie},className:"".concat(l,"-status-text"),children:C})]})}return A("span",{...Z,className:ee,children:[n,h(de,{visible:!E,motionName:"".concat(l,"-zoom"),motionAppear:!1,motionDeadline:1e3,children:function(S){var R,ue=S.className,fe=Q("scroll-number",m),G=_.current,me=T((R={},u(R,"".concat(l,"-dot"),G),u(R,"".concat(l,"-count"),!G),u(R,"".concat(l,"-count-sm"),g==="small"),u(R,"".concat(l,"-multiple-words"),!G&&F&&F.toString().length>1),u(R,"".concat(l,"-status-").concat(v),!!v),u(R,"".concat(l,"-status-").concat(a),I(a)),R)),M=b({},B);return a&&!I(a)&&(M=M||{},M.background=a),h(ge,{prefixCls:fe,show:!E,motionClassName:ue,className:me,count:F,title:ne,style:M,children:le},"scrollNumber")}}),ae]})};se.Ribbon=Ce;const $e=se;export{$e as B};
