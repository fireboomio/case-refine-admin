import{r as v,_ as h,e as b,j as W,F as q,a as x,C as H,d as J,t as K,c as Q}from"./index.64257940.js";import{u as U}from"./row.04cc9265.js";function V(e){var a=e.className,r=e.direction,t=e.index,i=e.marginDirection,o=e.children,s=e.split,f=e.wrap,n=v.exports.useContext(j),p=n.horizontalSize,S=n.verticalSize,d=n.latestIndex,g=n.supportFlexGap,l={};return g||(r==="vertical"?t<d&&(l={marginBottom:p/(s?2:1)}):l=h(h({},t<d&&b({},i,p/(s?2:1))),f&&{paddingBottom:S})),o==null?null:W(q,{children:[x("div",{className:a,style:l,children:o}),t<d&&s&&x("span",{className:"".concat(a,"-split"),style:l,children:s})]})}var X=globalThis&&globalThis.__rest||function(e,a){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)a.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r},j=v.exports.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),Y={small:8,middle:16,large:24};function Z(e){return typeof e=="string"?Y[e]:e||0}var ee=function(a){var r,t=v.exports.useContext(H),i=t.getPrefixCls,o=t.space,s=t.direction,f=a.size,n=f===void 0?(o==null?void 0:o.size)||"small":f,p=a.align,S=a.className,d=a.children,g=a.direction,l=g===void 0?"horizontal":g,I=a.prefixCls,A=a.split,R=a.style,_=a.wrap,O=_===void 0?!1:_,D=X(a,["size","align","className","children","direction","prefixCls","split","style","wrap"]),y=U(),M=v.exports.useMemo(function(){return(Array.isArray(n)?n:[n,n]).map(function(c){return Z(c)})},[n]),P=J(M,2),C=P[0],z=P[1],F=K(d,{keepEmpty:!0}),G=p===void 0&&l==="horizontal"?"center":p,u=i("space",I),k=Q(u,"".concat(u,"-").concat(l),(r={},b(r,"".concat(u,"-rtl"),s==="rtl"),b(r,"".concat(u,"-align-").concat(G),G),r),S),$="".concat(u,"-item"),B=s==="rtl"?"marginLeft":"marginRight",N=0,T=F.map(function(c,w){c!=null&&(N=w);var L=c&&c.key||"".concat($,"-").concat(w);return x(V,{className:$,direction:l,index:w,marginDirection:B,split:A,wrap:O,children:c},L)}),E=v.exports.useMemo(function(){return{horizontalSize:C,verticalSize:z,latestIndex:N,supportFlexGap:y}},[C,z,N,y]);if(F.length===0)return null;var m={};return O&&(m.flexWrap="wrap",y||(m.marginBottom=-z)),y&&(m.columnGap=C,m.rowGap=z),x("div",{className:k,style:h(h({},m),R),...D,children:x(j.Provider,{value:E,children:T})})};const re=ee;export{re as S};