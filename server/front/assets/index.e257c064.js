import{r as u,_ as F,a as l,C as W,d as re,j as Z,c as j,e as z,l as oe,q as ae,s as le,v as ie,t as Pe,x as se,F as _e}from"./index.64257940.js";import{R as Ne}from"./RightOutlined.ce6e99f7.js";import{a as ce,D as Te,b as Me,M as we,u as Ie,S as je,c as de,E as De}from"./Dropdown.66094b27.js";import{u as Se,b as ue,d as $e}from"./Portal.bf2e5144.js";import{g as Re,T as Ee}from"./styleChecker.9486324a.js";import{B as Q,c as J,i as q}from"./button.ca276c4e.js";import{t as ke}from"./type.4482a080.js";import{o as fe}from"./omit.173224d8.js";import{a as ve}from"./Sider.4bd14ece.js";var Le=globalThis&&globalThis.__rest||function(n,t){var o={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(o[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)t.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(o[e[r]]=n[e[r]]);return o},X=u.exports.createContext(null),Be=function(t){var o=t.children,e=Le(t,["children"]),r=u.exports.useContext(X),a=u.exports.useMemo(function(){return F(F({},r),e)},[r,e.prefixCls,e.mode,e.selectable]);return l(X.Provider,{value:a,children:o})};const ne=X;var Ae=globalThis&&globalThis.__rest||function(n,t){var o={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(o[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)t.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(o[e[r]]=n[e[r]]);return o},Ve=Q.Group,me=function(t){var o=u.exports.useContext(W),e=o.getPopupContainer,r=o.getPrefixCls,a=o.direction,c=t.prefixCls,i=t.type,s=i===void 0?"default":i,d=t.danger,f=t.disabled,p=t.loading,h=t.onClick,b=t.htmlType,w=t.children,D=t.className,x=t.overlay,y=t.trigger,g=t.align,m=t.visible,P=t.open,I=t.onVisibleChange,O=t.onOpenChange,_=t.placement,S=t.getPopupContainer,N=t.href,E=t.icon,k=E===void 0?l(ce,{}):E,$=t.title,L=t.buttonsRender,T=L===void 0?function(Oe){return Oe}:L,A=t.mouseEnterDelay,R=t.mouseLeaveDelay,M=t.overlayClassName,v=t.overlayStyle,C=t.destroyPopupOnHide,H=Ae(t,["prefixCls","type","danger","disabled","loading","onClick","htmlType","children","className","overlay","trigger","align","visible","open","onVisibleChange","onOpenChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide"]),B=r("dropdown-button",c),V={align:g,overlay:x,disabled:f,trigger:f?[]:y,onOpenChange:O||I,getPopupContainer:S||e,mouseEnterDelay:A,mouseLeaveDelay:R,overlayClassName:M,overlayStyle:v,destroyPopupOnHide:C};"open"in t?V.open=P:"visible"in t&&(V.open=m),"placement"in t?V.placement=_:V.placement=a==="rtl"?"bottomLeft":"bottomRight";var he=l(Q,{type:s,danger:d,disabled:f,loading:p,onClick:h,htmlType:b,href:N,title:$,children:w}),ge=l(Q,{type:s,danger:d,icon:k}),ye=T([he,ge]),te=re(ye,2),be=te[0],xe=te[1];return Z(Ve,{...H,className:j(B,D),children:[be,l(Ge,{...V,children:xe})]})};me.__ANT_BUTTON=!0;const ze=me;ke("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight","top","bottom");var K=function(t){var o=u.exports.useContext(W),e=o.getPopupContainer,r=o.getPrefixCls,a=o.direction,c=function(){var v=r(),C=t.placement,H=C===void 0?"":C,B=t.transitionName;return B!==void 0?B:H.indexOf("top")>=0?"".concat(v,"-slide-down"):"".concat(v,"-slide-up")},i=function(){var v=t.placement;if(!v)return a==="rtl"?"bottomRight":"bottomLeft";if(v.includes("Center")){var C=v.slice(0,v.indexOf("Center"));return C}return v},s=t.arrow,d=t.prefixCls,f=t.children,p=t.trigger,h=t.disabled,b=t.getPopupContainer,w=t.overlayClassName,D=t.visible,x=t.open,y=t.onVisibleChange,g=t.onOpenChange,m=r("dropdown",d),P=u.exports.Children.only(f),I=J(P,{className:j("".concat(m,"-trigger"),z({},"".concat(m,"-rtl"),a==="rtl"),P.props.className),disabled:h}),O=h?[]:p,_;O&&O.indexOf("contextMenu")!==-1&&(_=!0);var S=Se(!1,{value:x!==void 0?x:D}),N=re(S,2),E=N[0],k=N[1],$=ue(function(M){y==null||y(M),g==null||g(M),k(M)}),L=j(w,z({},"".concat(m,"-rtl"),a==="rtl")),T=Re({arrowPointAtCenter:oe(s)==="object"&&s.pointAtCenter,autoAdjustOverflow:!0}),A=u.exports.useCallback(function(){k(!1)},[]),R=function(){var v=t.overlay,C;return typeof v=="function"?C=v():C=v,C=u.exports.Children.only(typeof C=="string"?l("span",{children:C}):C),l(Be,{prefixCls:"".concat(m,"-menu"),expandIcon:l("span",{className:"".concat(m,"-menu-submenu-arrow"),children:l(Ne,{className:"".concat(m,"-menu-submenu-arrow-icon")})}),mode:"vertical",selectable:!1,onClick:A,validator:function(B){B.mode},children:C})};return l(Te,{alignPoint:_,...t,visible:E,builtinPlacements:T,arrow:!!s,overlayClassName:L,prefixCls:m,getPopupContainer:b||e,transitionName:c(),trigger:O,overlay:R,placement:i(),onVisibleChange:$,children:I})};K.Button=ze;K.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1};const Ge=K;var He=globalThis&&globalThis.__rest||function(n,t){var o={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(o[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)t.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(o[e[r]]=n[e[r]]);return o},Fe=function(t){var o=t.prefixCls,e=t.className,r=t.dashed,a=He(t,["prefixCls","className","dashed"]),c=u.exports.useContext(W),i=c.getPrefixCls,s=i("menu",o),d=j(z({},"".concat(s,"-item-divider-dashed"),!!r),e);return l(Me,{className:d,...a})};const pe=Fe;var qe=u.exports.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1});const U=qe;var Ue=globalThis&&globalThis.__rest||function(n,t){var o={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(o[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)t.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(o[e[r]]=n[e[r]]);return o},ee=function(n){ae(o,n);var t=le(o);function o(){var e;return ie(this,o),e=t.apply(this,arguments),e.renderItem=function(r){var a,c=r.siderCollapsed,i,s=e.context,d=s.prefixCls,f=s.firstLevel,p=s.inlineCollapsed,h=s.direction,b=s.disableMenuItemTitleTooltip,w=e.props,D=w.className,x=w.children,y=e.props,g=y.title,m=y.icon,P=y.danger,I=Ue(y,["title","icon","danger"]),O=g;typeof g>"u"?O=f?x:"":g===!1&&(O="");var _={title:O};!c&&!p&&(_.title=null,_.open=!1);var S=Pe(x).length,N=Z(we,{...I,className:j((a={},z(a,"".concat(d,"-item-danger"),P),z(a,"".concat(d,"-item-only-child"),(m?S+1:S)===1),a),D),title:typeof g=="string"?g:void 0,children:[J(m,{className:j(q(m)?(i=m.props)===null||i===void 0?void 0:i.className:"","".concat(d,"-item-icon"))}),e.renderItemChildren(p)]});return b||(N=l(Ee,{..._,placement:h==="rtl"?"left":"right",overlayClassName:"".concat(d,"-inline-collapsed-tooltip"),children:N})),N},e}return se(o,[{key:"renderItemChildren",value:function(r){var a=this.context,c=a.prefixCls,i=a.firstLevel,s=this.props,d=s.icon,f=s.children,p=l("span",{className:"".concat(c,"-title-content"),children:f});return(!d||q(f)&&f.type==="span")&&f&&r&&i&&typeof f=="string"?l("div",{className:"".concat(c,"-inline-collapsed-noicon"),children:f.charAt(0)}):p}},{key:"render",value:function(){return l(ve.Consumer,{children:this.renderItem})}}]),o}(u.exports.Component);ee.contextType=U;function Ce(n){var t,o=n.popupClassName,e=n.icon,r=n.title,a=n.theme,c=u.exports.useContext(U),i=c.prefixCls,s=c.inlineCollapsed,d=c.antdMenuTheme,f=Ie(),p;if(!e)p=s&&!f.length&&r&&typeof r=="string"?l("div",{className:"".concat(i,"-inline-collapsed-noicon"),children:r.charAt(0)}):l("span",{className:"".concat(i,"-title-content"),children:r});else{var h=q(r)&&r.type==="span";p=Z(_e,{children:[J(e,{className:j(q(e)?(t=e.props)===null||t===void 0?void 0:t.className:"","".concat(i,"-item-icon"))}),h?r:l("span",{className:"".concat(i,"-title-content"),children:r})]})}var b=u.exports.useMemo(function(){return F(F({},c),{firstLevel:!1})},[c]);return l(U.Provider,{value:b,children:l(je,{...fe(n,["icon"]),title:p,popupClassName:j(i,"".concat(i,"-").concat(a||d),o)})})}var We=globalThis&&globalThis.__rest||function(n,t){var o={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(o[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)t.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(o[e[r]]=n[e[r]]);return o};function Y(n){return(n||[]).map(function(t,o){if(t&&oe(t)==="object"){var e=t,r=e.label,a=e.children,c=e.key,i=e.type,s=We(e,["label","children","key","type"]),d=c!=null?c:"tmp-".concat(o);return a||i==="group"?i==="group"?l(de,{...s,title:r,children:Y(a)},d):l(Ce,{...s,title:r,children:Y(a)},d):i==="divider"?l(pe,{...s},d):l(ee,{...s,children:r},d)}return null}).filter(function(t){return t})}function Je(n){return u.exports.useMemo(function(){return n&&Y(n)},[n])}var Qe=globalThis&&globalThis.__rest||function(n,t){var o={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(o[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)t.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(o[e[r]]=n[e[r]]);return o},Xe=u.exports.forwardRef(function(n,t){var o,e=u.exports.useContext(ne)||{},r=u.exports.useContext(W),a=r.getPrefixCls,c=r.getPopupContainer,i=r.direction,s=a(),d=n.prefixCls,f=n.className,p=n.theme,h=p===void 0?"light":p,b=n.expandIcon,w=n._internalDisableMenuItemTitleTooltip,D=n.inlineCollapsed,x=n.siderCollapsed,y=n.items,g=n.children,m=n.mode,P=n.selectable,I=n.onClick,O=Qe(n,["prefixCls","className","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","mode","selectable","onClick"]),_=fe(O,["collapsedWidth"]),S=Je(y)||g;(o=e.validator)===null||o===void 0||o.call(e,{mode:m});var N=ue(function(){var v;I==null||I.apply(void 0,arguments),(v=e==null?void 0:e.onClick)===null||v===void 0||v.call(e)}),E=e.mode||m,k=P!=null?P:e.selectable,$=u.exports.useMemo(function(){return x!==void 0?x:D},[D,x]),L={horizontal:{motionName:"".concat(s,"-slide-up")},inline:$e,other:{motionName:"".concat(s,"-zoom-big")}},T=a("menu",d||e.prefixCls),A=j("".concat(T,"-").concat(h),f),R;typeof b=="function"?R=b:R=J(b||e.expandIcon,{className:"".concat(T,"-submenu-expand-icon")});var M=u.exports.useMemo(function(){return{prefixCls:T,inlineCollapsed:$||!1,antdMenuTheme:h,direction:i,firstLevel:!0,disableMenuItemTitleTooltip:w}},[T,$,h,i,w]);return l(ne.Provider,{value:null,children:l(U.Provider,{value:M,children:l(De,{getPopupContainer:c,overflowedIndicator:l(ce,{}),overflowedIndicatorPopupClassName:"".concat(T,"-").concat(h),mode:E,selectable:k,onClick:N,..._,inlineCollapsed:$,className:A,prefixCls:T,direction:i,defaultMotions:L,expandIcon:R,ref:t,children:S})})})}),G=function(n){ae(o,n);var t=le(o);function o(){var e;return ie(this,o),e=t.apply(this,arguments),e.focus=function(r){var a;(a=e.menu)===null||a===void 0||a.focus(r)},e}return se(o,[{key:"render",value:function(){var r=this;return l(ve.Consumer,{children:function(a){return l(Xe,{ref:function(i){r.menu=i},...r.props,...a})}})}}]),o}(u.exports.Component);G.Divider=pe;G.Item=ee;G.SubMenu=Ce;G.ItemGroup=de;const lt=G;export{Ge as D,lt as M,Be as O};
