import{d as Se,e as ie,F as je,f as ke,g as Ye}from"./context.4fcda71f.js";import{r as s,a as u,A as Xe,g as Oe,d as J,C as ge,f as K,k as Ze,c as le,ae as Je,e as V,af as Ge,_ as B,S as er,G as rr,ag as tr,ah as nr,ai as ar,l as Ce,w as Me,D as or,aj as ir,j as ue,F as _e,H as lr,ak as sr,al as cr,M as ur,L as dr,am as fr,an as mr,V as vr,ao as hr,B as gr,ap as Cr,aq as br}from"./index.64257940.js";import{d as Ee,c as xr}from"./Portal.bf2e5144.js";import{i as pr,c as yr}from"./button.ca276c4e.js";import{t as wr}from"./type.4482a080.js";import{o as Fr}from"./omit.173224d8.js";import{C as We,R as _r}from"./row.04cc9265.js";import{T as Sr}from"./styleChecker.9486324a.js";var Ir={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"};const Rr=Ir;var Ae=function(r,n){return u(Xe,{...Oe(Oe({},r),{},{ref:n,icon:Rr})})};Ae.displayName="QuestionCircleOutlined";const Nr=s.exports.forwardRef(Ae);function he(e){var r=s.exports.useState(e),n=J(r,2),t=n[0],a=n[1];return s.exports.useEffect(function(){var o=setTimeout(function(){a(e)},e.length?0:10);return function(){clearTimeout(o)}},[e]),t}var Pe=[];function we(e,r,n){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:"".concat(n,"-").concat(t),error:e,errorStatus:r}}function ze(e){var r=e.help,n=e.helpStatus,t=e.errors,a=t===void 0?Pe:t,o=e.warnings,l=o===void 0?Pe:o,i=e.className,f=e.fieldId,d=e.onVisibleChanged,x=s.exports.useContext(Se),c=x.prefixCls,p=s.exports.useContext(ge),R=p.getPrefixCls,C="".concat(c,"-item-explain"),y=R(),M=he(a),g=he(l),S=s.exports.useMemo(function(){return r!=null?[we(r,n,"help")]:[].concat(K(M.map(function(_,w){return we(_,"error","error",w)})),K(g.map(function(_,w){return we(_,"warning","warning",w)})))},[r,n,M,g]),I={};return f&&(I.id="".concat(f,"_help")),u(Ze,{motionDeadline:Ee.motionDeadline,motionName:"".concat(y,"-show-help"),visible:!!S.length,onVisibleChanged:d,children:function(_){var w=_.className,N=_.style;return u("div",{...I,className:le(C,w,i),style:N,role:"alert",children:u(Je,{keys:S,...Ee,motionName:"".concat(y,"-show-help-item"),component:!1,children:function(m){var v=m.key,$=m.error,F=m.errorStatus,h=m.className,P=m.style;return u("div",{className:le(h,V({},"".concat(C,"-").concat(F),F)),style:P,children:$},v)}})})}})}function Te(e){return typeof e=="object"&&e!=null&&e.nodeType===1}function Le(e,r){return(!r||e!=="hidden")&&e!=="visible"&&e!=="clip"}function Fe(e,r){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return Le(n.overflowY,r)||Le(n.overflowX,r)||function(t){var a=function(o){if(!o.ownerDocument||!o.ownerDocument.defaultView)return null;try{return o.ownerDocument.defaultView.frameElement}catch{return null}}(t);return!!a&&(a.clientHeight<t.scrollHeight||a.clientWidth<t.scrollWidth)}(e)}return!1}function ve(e,r,n,t,a,o,l,i){return o<e&&l>r||o>e&&l<r?0:o<=e&&i<=n||l>=r&&i>=n?o-e-t:l>r&&i<n||o<e&&i>n?l-r+a:0}function Ve(e,r){var n=window,t=r.scrollMode,a=r.block,o=r.inline,l=r.boundary,i=r.skipOverflowHiddenElements,f=typeof l=="function"?l:function(O){return O!==l};if(!Te(e))throw new TypeError("Invalid target");for(var d=document.scrollingElement||document.documentElement,x=[],c=e;Te(c)&&f(c);){if((c=c.parentElement)===d){x.push(c);break}c!=null&&c===document.body&&Fe(c)&&!Fe(document.documentElement)||c!=null&&Fe(c,i)&&x.push(c)}for(var p=n.visualViewport?n.visualViewport.width:innerWidth,R=n.visualViewport?n.visualViewport.height:innerHeight,C=window.scrollX||pageXOffset,y=window.scrollY||pageYOffset,M=e.getBoundingClientRect(),g=M.height,S=M.width,I=M.top,_=M.right,w=M.bottom,N=M.left,m=a==="start"||a==="nearest"?I:a==="end"?w:I+g/2,v=o==="center"?N+S/2:o==="end"?_:N,$=[],F=0;F<x.length;F++){var h=x[F],P=h.getBoundingClientRect(),L=P.height,b=P.width,q=P.top,A=P.right,E=P.bottom,T=P.left;if(t==="if-needed"&&I>=0&&N>=0&&w<=R&&_<=p&&I>=q&&w<=E&&N>=T&&_<=A)return $;var ne=getComputedStyle(h),ae=parseInt(ne.borderLeftWidth,10),k=parseInt(ne.borderTopWidth,10),G=parseInt(ne.borderRightWidth,10),ee=parseInt(ne.borderBottomWidth,10),j=0,D=0,U="offsetWidth"in h?h.offsetWidth-h.clientWidth-ae-G:0,Y="offsetHeight"in h?h.offsetHeight-h.clientHeight-k-ee:0;if(d===h)j=a==="start"?m:a==="end"?m-R:a==="nearest"?ve(y,y+R,R,k,ee,y+m,y+m+g,g):m-R/2,D=o==="start"?v:o==="center"?v-p/2:o==="end"?v-p:ve(C,C+p,p,ae,G,C+v,C+v+S,S),j=Math.max(0,j+y),D=Math.max(0,D+C);else{j=a==="start"?m-q-k:a==="end"?m-E+ee+Y:a==="nearest"?ve(q,E,L,k,ee+Y,m,m+g,g):m-(q+L/2)+Y/2,D=o==="start"?v-T-ae:o==="center"?v-(T+b/2)+U/2:o==="end"?v-A+G+U:ve(T,A,b,ae,G+U,v,v+S,S);var oe=h.scrollLeft,W=h.scrollTop;m+=W-(j=Math.max(0,Math.min(W+j,h.scrollHeight-L+Y))),v+=oe-(D=Math.max(0,Math.min(oe+D,h.scrollWidth-b+U)))}$.push({el:h,top:j,left:D})}return $}function Be(e){return e===Object(e)&&Object.keys(e).length!==0}function Or(e,r){r===void 0&&(r="auto");var n="scrollBehavior"in document.body.style;e.forEach(function(t){var a=t.el,o=t.top,l=t.left;a.scroll&&n?a.scroll({top:o,left:l,behavior:r}):(a.scrollTop=o,a.scrollLeft=l)})}function Mr(e){return e===!1?{block:"end",inline:"nearest"}:Be(e)?e:{block:"start",inline:"nearest"}}function Er(e,r){var n=e.isConnected||e.ownerDocument.documentElement.contains(e);if(Be(r)&&typeof r.behavior=="function")return r.behavior(n?Ve(e,r):[]);if(!!n){var t=Mr(r);return Or(Ve(e,t),t.behavior)}}var Pr=["parentNode"],Tr="form_item";function fe(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function De(e,r){if(!!e.length){var n=e.join("_");if(r)return"".concat(r,"_").concat(n);var t=Pr.indexOf(n)>=0;return t?"".concat(Tr,"_").concat(n):n}}function $e(e){var r=fe(e);return r.join("_")}function He(e){var r=Ge(),n=J(r,1),t=n[0],a=s.exports.useRef({}),o=s.exports.useMemo(function(){return e!=null?e:B(B({},t),{__INTERNAL__:{itemRef:function(i){return function(f){var d=$e(i);f?a.current[d]=f:delete a.current[d]}}},scrollToField:function(i){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=fe(i),x=De(d,o.__INTERNAL__.name),c=x?document.getElementById(x):null;c&&Er(c,B({scrollMode:"if-needed",block:"nearest"},f))},getFieldInstance:function(i){var f=$e(i);return a.current[f]}})},[e,t]);return[o]}var Lr=globalThis&&globalThis.__rest||function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n},Vr=function(r,n){var t,a=s.exports.useContext(er),o=s.exports.useContext(rr),l=s.exports.useContext(ge),i=l.getPrefixCls,f=l.direction,d=l.form,x=r.prefixCls,c=r.className,p=c===void 0?"":c,R=r.size,C=R===void 0?a:R,y=r.disabled,M=y===void 0?o:y,g=r.form,S=r.colon,I=r.labelAlign,_=r.labelWrap,w=r.labelCol,N=r.wrapperCol,m=r.hideRequiredMark,v=r.layout,$=v===void 0?"horizontal":v,F=r.scrollToFirstError,h=r.requiredMark,P=r.onFinishFailed,L=r.name,b=Lr(r,["prefixCls","className","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name"]),q=s.exports.useMemo(function(){return h!==void 0?h:d&&d.requiredMark!==void 0?d.requiredMark:!m},[m,h,d]),A=S!=null?S:d==null?void 0:d.colon,E=i("form",x),T=le(E,(t={},V(t,"".concat(E,"-").concat($),!0),V(t,"".concat(E,"-hide-required-mark"),q===!1),V(t,"".concat(E,"-rtl"),f==="rtl"),V(t,"".concat(E,"-").concat(C),C),t),p),ne=He(g),ae=J(ne,1),k=ae[0],G=k.__INTERNAL__;G.name=L;var ee=s.exports.useMemo(function(){return{name:L,labelAlign:I,labelCol:w,labelWrap:_,wrapperCol:N,vertical:$==="vertical",colon:A,requiredMark:q,itemRef:G.itemRef,form:k}},[L,I,w,N,$,A,q,k]);s.exports.useImperativeHandle(n,function(){return k});var j=function(U){P==null||P(U);var Y={block:"nearest"};F&&U.errorFields.length&&(Ce(F)==="object"&&(Y=F),k.scrollToField(U.errorFields[0].name,Y))};return u(tr,{disabled:M,children:u(nr,{size:C,children:u(ie.Provider,{value:ee,children:u(ar,{id:L,...b,name:L,onFinishFailed:j,form:k,className:T})})})})},$r=s.exports.forwardRef(Vr);const qr=$r;var jr=function(){var r=s.exports.useContext(je),n=r.status;return{status:n}};const kr=jr;function Wr(e){var r=s.exports.useState(e),n=J(r,2),t=n[0],a=n[1],o=s.exports.useRef(null),l=s.exports.useRef([]),i=s.exports.useRef(!1);s.exports.useEffect(function(){return i.current=!1,function(){i.current=!0,Me.cancel(o.current),o.current=null}},[]);function f(d){i.current||(o.current===null&&(l.current=[],o.current=Me(function(){o.current=null,a(function(x){var c=x;return l.current.forEach(function(p){c=p(c)}),c})})),l.current.push(d))}return[t,f]}function Ar(){var e=s.exports.useContext(ie),r=e.itemRef,n=s.exports.useRef({});function t(a,o){var l=o&&Ce(o)==="object"&&o.ref,i=a.join("_");return(n.current.name!==i||n.current.originRef!==l)&&(n.current.name=i,n.current.originRef=l,n.current.ref=or(r(a),l)),n.current.ref}return t}var zr=globalThis&&globalThis.__rest||function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};function Br(e){return e?Ce(e)==="object"&&!s.exports.isValidElement(e)?e:{title:e}:null}var Dr=function(r){var n=r.prefixCls,t=r.label,a=r.htmlFor,o=r.labelCol,l=r.labelAlign,i=r.colon,f=r.required,d=r.requiredMark,x=r.tooltip,c=ir("Form"),p=J(c,1),R=p[0];return t?u(ie.Consumer,{children:function(C){var y,M=C.vertical,g=C.labelAlign,S=C.labelCol,I=C.labelWrap,_=C.colon,w,N=o||S||{},m=l||g,v="".concat(n,"-item-label"),$=le(v,m==="left"&&"".concat(v,"-left"),N.className,V({},"".concat(v,"-wrap"),!!I)),F=t,h=i===!0||_!==!1&&i!==!1,P=h&&!M;P&&typeof t=="string"&&t.trim()!==""&&(F=t.replace(/[:|：]\s*$/,""));var L=Br(x);if(L){var b=L.icon,q=b===void 0?u(Nr,{}):b,A=zr(L,["icon"]),E=u(Sr,{...A,children:s.exports.cloneElement(q,{className:"".concat(n,"-item-tooltip"),title:""})});F=ue(_e,{children:[F,E]})}d==="optional"&&!f&&(F=ue(_e,{children:[F,u("span",{className:"".concat(n,"-item-optional"),title:"",children:(R==null?void 0:R.optional)||((w=lr.Form)===null||w===void 0?void 0:w.optional)})]}));var T=le((y={},V(y,"".concat(n,"-item-required"),f),V(y,"".concat(n,"-item-required-mark-optional"),d==="optional"),V(y,"".concat(n,"-item-no-colon"),!h),y));return u(We,{...N,className:$,children:u("label",{htmlFor:a,className:T,title:typeof t=="string"?t:"",children:F})})}},"label"):null};const Hr=Dr;var Qr=function(r){var n=r.prefixCls,t=r.status,a=r.wrapperCol,o=r.children,l=r.errors,i=r.warnings,f=r._internalItemRender,d=r.extra,x=r.help,c=r.fieldId,p=r.marginBottom,R=r.onErrorVisibleChanged,C="".concat(n,"-item"),y=s.exports.useContext(ie),M=a||y.wrapperCol||{},g=le("".concat(C,"-control"),M.className),S=s.exports.useMemo(function(){return B({},y)},[y]);delete S.labelCol,delete S.wrapperCol;var I=u("div",{className:"".concat(C,"-control-input"),children:u("div",{className:"".concat(C,"-control-input-content"),children:o})}),_=s.exports.useMemo(function(){return{prefixCls:n,status:t}},[n,t]),w=p!==null||l.length||i.length?ue("div",{style:{display:"flex",flexWrap:"nowrap"},children:[u(Se.Provider,{value:_,children:u(ze,{fieldId:c,errors:l,warnings:i,help:x,helpStatus:t,className:"".concat(C,"-explain-connected"),onVisibleChanged:R})}),!!p&&u("div",{style:{width:0,height:p}})]}):null,N={};c&&(N.id="".concat(c,"_extra"));var m=d?u("div",{...N,className:"".concat(C,"-extra"),children:d}):null,v=f&&f.mark==="pro_table_render"&&f.render?f.render(r,{input:I,errorList:w,extra:m}):ue(_e,{children:[I,w,m]});return u(ie.Provider,{value:S,children:u(We,{...M,className:g,children:v})})};const Kr=Qr;var Ur=globalThis&&globalThis.__rest||function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n},Yr={success:sr,warning:cr,error:ur,validating:dr};function Xr(e){var r,n=e.prefixCls,t=e.className,a=e.style,o=e.help,l=e.errors,i=e.warnings,f=e.validateStatus,d=e.meta,x=e.hasFeedback,c=e.hidden,p=e.children,R=e.fieldId,C=e.isRequired,y=e.onSubItemMetaChange,M=Ur(e,["prefixCls","className","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","isRequired","onSubItemMetaChange"]),g="".concat(n,"-item"),S=s.exports.useContext(ie),I=S.requiredMark,_=s.exports.useRef(null),w=he(l),N=he(i),m=o!=null,v=!!(m||l.length||i.length),$=s.exports.useState(null),F=J($,2),h=F[0],P=F[1];xr(function(){if(v&&_.current){var E=getComputedStyle(_.current);P(parseInt(E.marginBottom,10))}},[v]);var L=function(T){T||P(null)},b="";f!==void 0?b=f:d.validating?b="validating":w.length?b="error":N.length?b="warning":d.touched&&(b="success");var q=s.exports.useMemo(function(){var E;if(x){var T=b&&Yr[b];E=T?u("span",{className:le("".concat(g,"-feedback-icon"),"".concat(g,"-feedback-icon-").concat(b)),children:u(T,{})}):null}return{status:b,hasFeedback:x,feedbackIcon:E,isFormItemInput:!0}},[b,x]),A=(r={},V(r,g,!0),V(r,"".concat(g,"-with-help"),m||w.length||N.length),V(r,"".concat(t),!!t),V(r,"".concat(g,"-has-feedback"),b&&x),V(r,"".concat(g,"-has-success"),b==="success"),V(r,"".concat(g,"-has-warning"),b==="warning"),V(r,"".concat(g,"-has-error"),b==="error"),V(r,"".concat(g,"-is-validating"),b==="validating"),V(r,"".concat(g,"-hidden"),c),r);return ue("div",{className:le(A),style:a,ref:_,children:[ue(_r,{className:"".concat(g,"-row"),...Fr(M,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","required","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol"]),children:[u(Hr,{htmlFor:R,required:C,requiredMark:I,...e,prefixCls:n}),u(Kr,{...e,...d,errors:w,warnings:N,prefixCls:n,status:b,help:o,marginBottom:h,onErrorVisibleChanged:L,children:u(ke.Provider,{value:y,children:u(je.Provider,{value:q,children:p})})})]}),!!h&&u("div",{className:"".concat(g,"-margin-offset"),style:{marginBottom:-h}})]})}var Zr="__SPLIT__";wr("success","warning","error","validating","");var Jr=s.exports.memo(function(e){var r=e.children;return r},function(e,r){return e.value===r.value&&e.update===r.update&&e.childProps.length===r.childProps.length&&e.childProps.every(function(n,t){return n===r.childProps[t]})});function Gr(e){return e!=null}function qe(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[]}}function et(e){var r=e.name,n=e.noStyle,t=e.dependencies,a=e.prefixCls,o=e.shouldUpdate,l=e.rules,i=e.children,f=e.required,d=e.label,x=e.messageVariables,c=e.trigger,p=c===void 0?"onChange":c,R=e.validateTrigger,C=e.hidden,y=s.exports.useContext(ge),M=y.getPrefixCls,g=s.exports.useContext(ie),S=g.name,I=typeof i=="function",_=s.exports.useContext(ke),w=s.exports.useContext(fr),N=w.validateTrigger,m=R!==void 0?R:N,v=Gr(r),$=M("form",a),F=s.exports.useContext(mr),h=s.exports.useRef(),P=Wr({}),L=J(P,2),b=L[0],q=L[1],A=vr(function(){return qe()}),E=J(A,2),T=E[0],ne=E[1],ae=function(O){var z=F==null?void 0:F.getKey(O.name);if(ne(O.destroy?qe():O,!0),n&&_){var X=O.name;if(O.destroy)X=h.current||X;else if(z!==void 0){var H=J(z,2),se=H[0],re=H[1];X=[se].concat(K(re)),h.current=X}_(O,X)}},k=function(O,z){q(function(X){var H=B({},X),se=[].concat(K(O.name.slice(0,-1)),K(z)),re=se.join(Zr);return O.destroy?delete H[re]:H[re]=O,H})},G=s.exports.useMemo(function(){var W=K(T.errors),O=K(T.warnings);return Object.values(b).forEach(function(z){W.push.apply(W,K(z.errors||[])),O.push.apply(O,K(z.warnings||[]))}),[W,O]},[b,T.errors,T.warnings]),ee=J(G,2),j=ee[0],D=ee[1],U=Ar();function Y(W,O,z){return n&&!C?W:u(Xr,{...e,prefixCls:$,fieldId:O,isRequired:z,errors:j,warnings:D,meta:T,onSubItemMetaChange:k,children:W},"row")}if(!v&&!I&&!t)return Y(i);var oe={};return typeof d=="string"?oe.label=d:r&&(oe.label=String(r)),x&&(oe=B(B({},oe),x)),u(hr,{...e,messageVariables:oe,trigger:p,validateTrigger:m,onMetaChange:ae,children:function(W,O,z){var X=fe(r).length&&O?O.name:[],H=De(X,S),se=f!==void 0?f:!!(l&&l.some(function(Z){if(Z&&Ce(Z)==="object"&&Z.required&&!Z.warningOnly)return!0;if(typeof Z=="function"){var ce=Z(z);return ce&&ce.required&&!ce.warningOnly}return!1})),re=B({},W),de=null;if(Array.isArray(i)&&v)de=i;else if(!(I&&(!(o||t)||v))){if(!(t&&!I&&!v))if(pr(i)){var Q=B(B({},i.props),re);if(Q.id||(Q.id=H),e.help||j.length>0||D.length>0||e.extra){var be=[];(e.help||j.length>0)&&be.push("".concat(H,"_help")),e.extra&&be.push("".concat(H,"_extra")),Q["aria-describedby"]=be.join(" ")}j.length>0&&(Q["aria-invalid"]="true"),se&&(Q["aria-required"]="true"),gr(i)&&(Q.ref=U(X,i));var Ke=new Set([].concat(K(fe(p)),K(fe(m))));Ke.forEach(function(Z){Q[Z]=function(){for(var ce,Ie,xe,Re,pe,Ne=arguments.length,ye=new Array(Ne),me=0;me<Ne;me++)ye[me]=arguments[me];(xe=re[Z])===null||xe===void 0||(ce=xe).call.apply(ce,[re].concat(ye)),(pe=(Re=i.props)[Z])===null||pe===void 0||(Ie=pe).call.apply(Ie,[Re].concat(ye))}});var Ue=[Q["aria-required"],Q["aria-invalid"],Q["aria-describedby"]];de=u(Jr,{value:re[e.valuePropName||"value"],update:i,childProps:Ue,children:yr(i,Q)})}else I&&(o||t)&&!v?de=i(z):de=i}return Y(de,H,se)}})}var Qe=et;Qe.useStatus=kr;const rt=Qe;var tt=globalThis&&globalThis.__rest||function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n},nt=function(r){var n=r.prefixCls,t=r.children,a=tt(r,["prefixCls","children"]),o=s.exports.useContext(ge),l=o.getPrefixCls,i=l("form",n),f=s.exports.useMemo(function(){return{prefixCls:i,status:"error"}},[i]);return u(Cr,{...a,children:function(d,x,c){return u(Se.Provider,{value:f,children:t(d.map(function(p){return B(B({},p),{fieldKey:p.key})}),x,{errors:c.errors,warnings:c.warnings})})}})};const at=nt;function ot(){var e=s.exports.useContext(ie),r=e.form;return r}var te=qr;te.Item=rt;te.List=at;te.ErrorList=ze;te.useForm=He;te.useFormInstance=ot;te.useWatch=br;te.Provider=Ye;te.create=function(){};const vt=te;export{vt as F,Nr as Q};
