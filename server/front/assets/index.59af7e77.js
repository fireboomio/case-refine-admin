import{r as g,a as t,A as ze,g as ke,j as m,n as be,a9 as Se,aa as xe,_ as K,c as se,e as z,N as Re,H as De,q as Fe,s as Ce,v as we,x as Ie,F as ne,l as Ue,f as ie,E as He,b as Ve,a3 as je}from"./index.64257940.js";import{O as qe,M as Ge,u as Je}from"./OneToOneOutlined.ac8b8691.js";import{i as Qe}from"./index.esm.a8235609.js";import{B as re,i as Xe}from"./button.ca276c4e.js";import{F}from"./index.9d56ca15.js";import"./row.04cc9265.js";import"./index.61964446.js";import{I as ae}from"./index.93b57069.js";import{I as le}from"./index.90bee82c.js";import{D as Ye,d as Ze}from"./iconUtil.71342ca5.js";import{T as Oe}from"./index.5b2f5049.js";import{S as oe}from"./index.21d0aee3.js";import{C as te}from"./index.39cec35d.js";import{S as Pe}from"./index.4ef503cf.js";import{c as et,b as tt}from"./_createAggregator.7c8a2c66.js";import{S as nt,E as rt,a as it}from"./constant.0f5b1976.js";import{P as at}from"./Pagination.0b310a33.js";import{F as lt}from"./context.4fcda71f.js";import{g as st,a as ot}from"./statusUtils.e7207d24.js";import{o as ct}from"./omit.173224d8.js";import{D as dt,M as Le}from"./index.e257c064.js";import{t as ut}from"./type.4482a080.js";import{D as ht}from"./DeleteOutlined.ab1eeec0.js";import{K as Be}from"./Portal.bf2e5144.js";import{S as mt}from"./SearchOutlined.d2d234c2.js";import{R as Ae,L as _e}from"./RightOutlined.ce6e99f7.js";import{P as pt}from"./PlusCircleOutlined.4c78356c.js";import{E as ft}from"./50x.81c416c8.js";var vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"};const gt=vt;var $e=function(c,h){return t(ze,{...ke(ke({},c),{},{ref:h,icon:gt})})};$e.displayName="MinusCircleOutlined";const yt=g.exports.forwardRef($e),bt="_active_1je39_1",St="_divider_1je39_15",xt={active:bt,divider:St},Ft=n=>{var s;const[c,h]=g.exports.useState((s=n.activeKey)!=null?s:n.tabs[0].key),d=g.exports.useCallback(a=>{var r;h(a),(r=n.onTabClick)==null||r.call(n,a)},[n]),e=g.exports.useCallback(a=>n.activeKey?n.activeKey===a:c===a,[n.activeKey,c]);return t("div",{className:n.className,children:m("div",{className:"flex justify-between",children:[t("div",{className:"flex space-x-6",children:n.tabs.map(a=>t("div",{className:`text-[#5F6269] cursor-pointer leading-20px ${e(a.key)?xt.active:""}`,onClick:()=>d(a.key),children:a.title},a.key))}),n.extra]})})},Ct=()=>Qe("/auth/loginConfig",be),wt=n=>Se.post("/auth/loginConfig",n);function It(){return m("div",{className:"flex flex-col items-center justify-center h-full",children:[t(le,{src:"/assets/404.png",height:99,width:105,alt:"50x",preview:!1}),t("div",{className:"my-8 ml-2 text-sm text-[#AFB0B4CC]",children:"\u6682\u65E0\u5185\u5BB9\uFF5E"})]})}const Nt=({data:n,onPreview:c})=>{const[h,d]=g.exports.useState(n),[e]=F.useForm();g.exports.useEffect(()=>{d(n),n&&c(n)},[n]);function s(a){Se.post("/auth/brand",{branding:{logoUrl:a==null?void 0:a.logo,slogan:a==null?void 0:a.slogan},color:{isDarkModeEnabled:a==null?void 0:a.darkMode,primaryColor:a==null?void 0:a.color}}).then(()=>xe.success("\u4FDD\u5B58\u6210\u529F"))}return h?t("div",{className:"w-1/2 pr-6",children:m(F,{onChange:()=>c(e.getFieldsValue()),form:e,name:"basic",initialValues:h,onFinish:s,children:[t("div",{className:"text-xs text-[#AFB0B4] mb-4.5",children:"\u989C\u8272"}),m("div",{className:"text-sm mb-2",children:[t("span",{className:"text-[#E13D5BFF]",children:"//"})," \u54C1\u724C\u989C\u8272"]}),t(F.Item,{name:"color",children:t(ae,{})}),t("div",{className:"text-xs text-[#AFB0B4] mb-4.5 mt-8",children:"\u54C1\u724C\u8BA2\u5236\u533A"}),m("div",{className:"text-sm mt-4 mb-2",children:[t("span",{className:"text-[#E13D5BFF]",children:"//"})," logo\u56FE\u7247URL"]}),t(F.Item,{name:"logo",children:t(ae,{})}),m("div",{className:"text-sm mt-4 mb-2",children:[t("span",{className:"text-[#E13D5BFF]",children:"//"})," \u6807\u8BED"]}),t(F.Item,{name:"slogan",children:t(ae,{})}),t(re,{className:"float-right mt-10",type:"primary",htmlType:"submit",children:"\u4FDD\u5B58"})]})}):t(It,{})},Ee="/assets/mobile-preview.ec92e106.png",kt="/assets/pc-preview.d1ee64ba.png",Lt="_experiencePreviewWrapper_1kt09_2",Bt="_experiencePreviewTitle_1kt09_8",At="_experiencePreviewTitleLeft_1kt09_12",_t="_experiencePreviewTitleRight_1kt09_21",Et="_experiencePreviewDetailContent_1kt09_27",Tt="_tabStyle_1kt09_32",Z={experiencePreviewWrapper:Lt,experiencePreviewTitle:Bt,experiencePreviewTitleLeft:At,experiencePreviewTitleRight:_t,experiencePreviewDetailContent:Et,tabStyle:Tt},{Option:me}=oe,{TabPane:ge}=Oe;function Kt({previewData:n}){var S,C,k;const c=g.exports.useRef(),h=g.exports.useRef(),d=g.exports.useRef(),e=((S=c.current)==null?void 0:S.clientWidth)||0,s=((C=h.current)==null?void 0:C.clientWidth)||0,a=((k=d.current)==null?void 0:k.clientWidth)||0,[r,o]=g.exports.useState(0),[l,i]=g.exports.useState(0),[u,p]=g.exports.useState(0),[f,v]=g.exports.useState(!1);return g.exports.useEffect(()=>{o(e/1440)},[e,f]),g.exports.useEffect(()=>{i(s/750)},[s,f]),g.exports.useEffect(()=>{p(a/750)},[a,f]),g.exports.useEffect(()=>{function y(){var I,x,N,_,E,B;o(((x=(I=c.current)==null?void 0:I.clientWidth)!=null?x:0)/1440),i(((_=(N=h.current)==null?void 0:N.clientWidth)!=null?_:0)/750),p(((B=(E=d.current)==null?void 0:E.clientWidth)!=null?B:0)/750)}return window.addEventListener("resize",y),y(),()=>window.removeEventListener("resize",y)},[]),m("div",{className:Z.experiencePreviewWrapper,children:[m("div",{className:Z.experiencePreviewTitle,children:[m("div",{className:Z.experiencePreviewTitleLeft,children:[t("span",{children:"//"}),t("span",{children:"\u767B\u5F55\u9884\u89C8"})]}),m("div",{className:Z.experiencePreviewTitleRight,children:[m(oe,{defaultValue:"\u82F1\u6587",style:{width:120},children:[t(me,{value:"\u82F1\u6587",children:"\u82F1\u6587"}),t(me,{value:"\u4E2D\u6587",children:"\u4E2D\u6587"})]}),m(oe,{defaultValue:"\u6D45\u8272",style:{width:120},children:[t(me,{value:"\u6D45\u8272",children:"\u6D45\u8272"}),t(me,{value:"\u6DF1\u8272",children:"\u6DF1\u8272"})]})]})]}),t("div",{className:Z.experiencePreviewDetailContent,children:m(Oe,{tabPosition:"top",animated:!1,className:Z.tabStyle,centered:!0,type:"card",defaultActiveKey:"\u684C\u9762\u7F51\u9875",onChange:()=>{setTimeout(()=>{v(!f)},0)},children:[t(ge,{tab:"\u684C\u9762\u7F51\u9875",children:m("div",{ref:c,className:"relative",children:[t(le,{width:"100%",height:"100%",src:kt,alt:"FireBoom",preview:!1}),n&&m("div",{className:"absolute w-1440px h-800px left-0 top-0",style:{transform:`scale(${r})`,transformOrigin:"top left"},children:[m("div",{className:"mt-32px ml-40px flex items-center",children:[t("img",{height:"32px",src:n.logo,alt:"",className:"mr-12px"}),t("span",{className:"text-[#FDFDFD] text-24px",children:n.slogan})]}),t("div",{className:"absolute left-772px top-432px w-312px leading-48px text-center rounded-8px text-white text-16px",style:{background:n.color},children:"\u767B\u5F55"})]})]})},"\u684C\u9762\u7F51\u9875"),t(ge,{tab:"\u79FB\u52A8\u7F51\u9875",children:m("div",{ref:h,className:"relative",children:[t(le,{width:"100%",style:{maxHeight:500},src:Ee,alt:"FireBoom",preview:!1}),n&&m("div",{className:"absolute w-750px h-1624px left-0 top-0",style:{transform:`scale(${l})`,transformOrigin:"top left"},children:[t("div",{className:"mt-256px h-176px",children:t("img",{height:"176px",src:n.logo,alt:"",className:"block m-auto"})}),t("div",{className:"mt-6 text-center leading-12 font-bold text-40px",children:n.slogan}),t("div",{className:"absolute left-74px top-962px w-600px leading-88px text-center rounded-8px text-white text-32px",style:{background:n.color},children:"\u767B\u5F55"})]})]})},"\u79FB\u52A8\u7F51\u9875"),t(ge,{tab:"\u79FB\u52A8\u539F\u751F",children:m("div",{ref:d,className:"relative",children:[t(le,{width:"100%",style:{maxHeight:500},src:Ee,alt:"FireBoom",preview:!1}),n&&m("div",{className:"absolute w-750px h-1624px left-0 top-0",style:{transform:`scale(${u})`,transformOrigin:"top left"},children:[t("div",{className:"mt-256px h-176px",children:t("img",{height:"176px",src:n.logo,alt:"",className:"block m-auto"})}),t("div",{className:"mt-6 text-center leading-12 font-bold text-40px",children:n.slogan}),t("div",{className:"absolute left-74px top-962px w-600px leading-88px text-center rounded-8px text-white text-32px",style:{background:n.color},children:"\u767B\u5F55"})]})]})},"\u79FB\u52A8\u539F\u751F")]})})]})}var Rt=tt,Dt=et,Ot=Object.prototype,Pt=Ot.hasOwnProperty,$t=Dt(function(n,c,h){Pt.call(n,h)?n[h].push(c):Rt(n,h,[c])}),Mt=$t;const Wt="_experienceSettingWrapper_a7bwn_2",zt="_title_a7bwn_8",Ut="_mainLogin_a7bwn_17",Ht="_mainLoginTitle_a7bwn_22",Vt="_otherLogin_a7bwn_34",jt="_otherLoginTitle_a7bwn_39",qt="_otherLoginExplain_a7bwn_51",Gt="_passwordLogin_a7bwn_67",Jt="_checkboxLabel_a7bwn_73",Qt="_loginItemWrapper_a7bwn_76",Xt="_passwordLoginSubHeading_a7bwn_79",Yt="_loginItemSubHeading_a7bwn_83",Zt="_mainLoginHint_a7bwn_99",en="_saveWrapper_a7bwn_105",tn="_save_a7bwn_105",w={experienceSettingWrapper:Wt,title:zt,mainLogin:Ut,mainLoginTitle:Ht,otherLogin:Vt,otherLoginTitle:jt,otherLoginExplain:qt,passwordLogin:Gt,checkboxLabel:Jt,loginItemWrapper:Qt,passwordLoginSubHeading:Xt,loginItemSubHeading:Yt,mainLoginHint:Zt,saveWrapper:en,save:tn};var nn=globalThis&&globalThis.__rest||function(n,c){var h={};for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&c.indexOf(d)<0&&(h[d]=n[d]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,d=Object.getOwnPropertySymbols(n);e<d.length;e++)c.indexOf(d[e])<0&&Object.prototype.propertyIsEnumerable.call(n,d[e])&&(h[d[e]]=n[d[e]]);return h},rn={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},an=g.exports.forwardRef(function(n,c){var h=function(i){var u=i.keyCode;u===Be.ENTER&&i.preventDefault()},d=function(i){var u=i.keyCode,p=n.onClick;u===Be.ENTER&&p&&p()},e=n.style,s=n.noStyle,a=n.disabled,r=nn(n,["style","noStyle","disabled"]),o={};return s||(o=K({},rn)),a&&(o.pointerEvents="none"),o=K(K({},o),e),t("div",{role:"button",tabIndex:0,ref:c,...r,onKeyDown:h,onKeyUp:d,style:o})});const ln=an;var sn=function(c){var h,d=c.renderedText,e=c.renderedEl,s=c.item,a=c.checked,r=c.disabled,o=c.prefixCls,l=c.onClick,i=c.onRemove,u=c.showRemove,p=se((h={},z(h,"".concat(o,"-content-item"),!0),z(h,"".concat(o,"-content-item-disabled"),r||s.disabled),z(h,"".concat(o,"-content-item-checked"),a),h)),f;return(typeof d=="string"||typeof d=="number")&&(f=String(d)),t(Re,{componentName:"Transfer",defaultLocale:De.Transfer,children:function(v){var S={className:p,title:f},C=t("span",{className:"".concat(o,"-content-item-text"),children:e});return u?m("li",{...S,children:[C,t(ln,{disabled:r||s.disabled,className:"".concat(o,"-content-item-remove"),"aria-label":v.remove,onClick:function(){i==null||i(s)},children:t(ht,{})})]}):(S.onClick=r||s.disabled?void 0:function(){return l(s)},m("li",{...S,children:[t(te,{className:"".concat(o,"-checkbox"),checked:a,disabled:r||s.disabled}),C]}))}})};const on=g.exports.memo(sn);var cn=ut("handleFilter","handleClear","checkedKeys");function ye(n){if(!n)return null;var c={pageSize:10,simple:!0,showSizeChanger:!1,showLessItems:!1};return Ue(n)==="object"?K(K({},c),n):c}var dn=function(n){Fe(h,n);var c=Ce(h);function h(){var d;return we(this,h),d=c.apply(this,arguments),d.state={current:1},d.onItemSelect=function(e){var s=d.props,a=s.onItemSelect,r=s.selectedKeys,o=r.indexOf(e.key)>=0;a(e.key,!o)},d.onItemRemove=function(e){var s=d.props.onItemRemove;s==null||s([e.key])},d.onPageChange=function(e){d.setState({current:e})},d.getItems=function(){var e=d.state.current,s=d.props,a=s.pagination,r=s.filteredRenderItems,o=ye(a),l=r;return o&&(l=r.slice((e-1)*o.pageSize,e*o.pageSize)),l},d}return Ie(h,[{key:"render",value:function(){var e=this,s=this.state.current,a=this.props,r=a.prefixCls,o=a.onScroll,l=a.filteredRenderItems,i=a.selectedKeys,u=a.disabled,p=a.showRemove,f=a.pagination,v=ye(f),S=null;return v&&(S=t(at,{simple:v.simple,showSizeChanger:v.showSizeChanger,showLessItems:v.showLessItems,size:"small",disabled:u,className:"".concat(r,"-pagination"),total:l.length,pageSize:v.pageSize,current:s,onChange:this.onPageChange})),m(ne,{children:[t("ul",{className:se("".concat(r,"-content"),z({},"".concat(r,"-content-show-remove"),p)),onScroll:o,children:this.getItems().map(function(C){var k=C.renderedEl,y=C.renderedText,I=C.item,x=I.disabled,N=i.indexOf(I.key)>=0;return t(on,{disabled:u||x,item:I,renderedText:y,renderedEl:k,checked:N,prefixCls:r,onClick:e.onItemSelect,onRemove:e.onItemRemove,showRemove:p},I.key)})}),S]})}}],[{key:"getDerivedStateFromProps",value:function(e,s){var a=e.filteredRenderItems,r=e.pagination,o=s.current,l=ye(r);if(l){var i=Math.ceil(a.length/l.pageSize);if(o>i)return{current:i}}return null}}]),h}(g.exports.Component);const un=dn;function Me(n){var c=n.placeholder,h=c===void 0?"":c,d=n.value,e=n.prefixCls,s=n.disabled,a=n.onChange,r=n.handleClear,o=g.exports.useCallback(function(l){a==null||a(l),l.target.value===""&&(r==null||r())},[a]);return t(ae,{placeholder:h,className:e,value:d,onChange:o,disabled:s,allowClear:!0,prefix:t(mt,{})})}var hn=function(){return null};function mn(n){return!!(n&&!Xe(n)&&Object.prototype.toString.call(n)==="[object Object]")}function ee(n){return n.filter(function(c){return!c.disabled}).map(function(c){return c.key})}var fe=function(n){Fe(h,n);var c=Ce(h);function h(d){var e;return we(this,h),e=c.call(this,d),e.defaultListBodyRef=g.exports.createRef(),e.handleFilter=function(s){var a=e.props.handleFilter,r=s.target.value;e.setState({filterValue:r}),a(s)},e.handleClear=function(){var s=e.props.handleClear;e.setState({filterValue:""}),s()},e.matchFilter=function(s,a){var r=e.state.filterValue,o=e.props.filterOption;return o?o(r,a):s.indexOf(r)>=0},e.renderListBody=function(s,a){var r=s?s(a):null,o=!!r;return o||(r=t(un,{ref:e.defaultListBodyRef,...a})),{customize:o,bodyContent:r}},e.renderItem=function(s){var a=e.props.render,r=a===void 0?hn:a,o=r(s),l=mn(o);return{renderedText:l?o.value:o,renderedEl:l?o.label:o,item:s}},e.getSelectAllLabel=function(s,a){var r=e.props,o=r.itemsUnit,l=r.itemUnit,i=r.selectAllLabel;if(i)return typeof i=="function"?i({selectedCount:s,totalCount:a}):i;var u=a>1?o:l;return m(ne,{children:[(s>0?"".concat(s,"/"):"")+a," ",u]})},e.state={filterValue:""},e}return Ie(h,[{key:"componentWillUnmount",value:function(){clearTimeout(this.triggerScrollTimer)}},{key:"getCheckStatus",value:function(e){var s=this.props.checkedKeys;return s.length===0?"none":e.every(function(a){return s.indexOf(a.key)>=0||!!a.disabled})?"all":"part"}},{key:"getFilteredItems",value:function(e,s){var a=this,r=[],o=[];return e.forEach(function(l){var i=a.renderItem(l),u=i.renderedText;if(s&&!a.matchFilter(u,l))return null;r.push(l),o.push(i)}),{filteredItems:r,filteredRenderItems:o}}},{key:"getListBody",value:function(e,s,a,r,o,l,i,u,p,f){var v=this,S=p?t("div",{className:"".concat(e,"-body-search-wrapper"),children:t(Me,{prefixCls:"".concat(e,"-search"),onChange:this.handleFilter,handleClear:this.handleClear,placeholder:s,value:a,disabled:f})}):null,C=this.renderListBody(u,K(K({},ct(this.props,cn)),{filteredItems:r,filteredRenderItems:l,selectedKeys:i})),k=C.bodyContent,y=C.customize,I=function(){var _=v.props.direction==="left"?0:1;return Array.isArray(o)?o[_]:o},x;return y?x=t("div",{className:"".concat(e,"-body-customize-wrapper"),children:k}):x=r.length?k:t("div",{className:"".concat(e,"-body-not-found"),children:I()}),m("div",{className:se(p?"".concat(e,"-body ").concat(e,"-body-with-search"):"".concat(e,"-body")),children:[S,x]})}},{key:"getCheckBox",value:function(e){var s=e.filteredItems,a=e.onItemSelectAll,r=e.disabled,o=e.prefixCls,l=this.getCheckStatus(s),i=l==="all",u=t(te,{disabled:r,checked:i,indeterminate:l==="part",className:"".concat(o,"-checkbox"),onChange:function(){a(s.filter(function(f){return!f.disabled}).map(function(f){var v=f.key;return v}),!i)}});return u}},{key:"render",value:function(){var e,s=this,a=this.state.filterValue,r=this.props,o=r.prefixCls,l=r.dataSource,i=r.titleText,u=r.checkedKeys,p=r.disabled,f=r.footer,v=r.showSearch,S=r.style,C=r.searchPlaceholder,k=r.notFoundContent,y=r.selectAll,I=r.selectCurrent,x=r.selectInvert,N=r.removeAll,_=r.removeCurrent,E=r.renderList,B=r.onItemSelectAll,T=r.onItemRemove,J=r.showSelectAll,R=J===void 0?!0:J,Q=r.showRemove,D=r.pagination,j=r.direction,O=f&&(f.length<2?f(this.props):f(this.props,{direction:j})),q=se(o,(e={},z(e,"".concat(o,"-with-pagination"),!!D),z(e,"".concat(o,"-with-footer"),!!O),e)),U=this.getFilteredItems(l,a),P=U.filteredItems,b=U.filteredRenderItems,L=this.getListBody(o,C,a,P,k,b,u,E,v,p),$=O?t("div",{className:"".concat(o,"-footer"),children:O}):null,X=!Q&&!D&&this.getCheckBox({filteredItems:P,onItemSelectAll:B,disabled:p,prefixCls:o}),H=null;if(Q){var Y=[D?{key:"removeCurrent",onClick:function(){var A,W=ee((((A=s.defaultListBodyRef.current)===null||A===void 0?void 0:A.getItems())||[]).map(function(G){return G.item}));T==null||T(W)},label:_}:null,{key:"removeAll",onClick:function(){T==null||T(ee(P))},label:N}].filter(function(M){return M});H=t(Le,{items:Y})}else{var ve=[{key:"selectAll",onClick:function(){var A=ee(P);B(A,A.length!==u.length)},label:y},D?{key:"selectCurrent",onClick:function(){var A,W=((A=s.defaultListBodyRef.current)===null||A===void 0?void 0:A.getItems())||[];B(ee(W.map(function(G){return G.item})),!0)},label:I}:null,{key:"selectInvert",onClick:function(){var A,W;D?W=ee((((A=s.defaultListBodyRef.current)===null||A===void 0?void 0:A.getItems())||[]).map(function(V){return V.item})):W=ee(P);var G=new Set(u),ue=[],he=[];W.forEach(function(V){G.has(V)?he.push(V):ue.push(V)}),B(ue,!0),B(he,!1)},label:x}];H=t(Le,{items:ve})}var de=t(dt,{className:"".concat(o,"-header-dropdown"),overlay:H,disabled:p,children:t(Ye,{})});return m("div",{className:q,style:S,children:[m("div",{className:"".concat(o,"-header"),children:[R?m(ne,{children:[X,de]}):null,t("span",{className:"".concat(o,"-header-selected"),children:this.getSelectAllLabel(u.length,P.length)}),t("span",{className:"".concat(o,"-header-title"),children:i})]}),L,$]})}}]),h}(g.exports.PureComponent);fe.defaultProps={dataSource:[],titleText:"",showSearch:!1};var pn=function(c){var h=c.disabled,d=c.moveToLeft,e=c.moveToRight,s=c.leftArrowText,a=s===void 0?"":s,r=c.rightArrowText,o=r===void 0?"":r,l=c.leftActive,i=c.rightActive,u=c.className,p=c.style,f=c.direction,v=c.oneWay;return m("div",{className:u,style:p,children:[t(re,{type:"primary",size:"small",disabled:h||!i,onClick:e,icon:f!=="rtl"?t(Ae,{}):t(_e,{}),children:o}),!v&&t(re,{type:"primary",size:"small",disabled:h||!l,onClick:d,icon:f!=="rtl"?t(_e,{}):t(Ae,{}),children:a})]})};const We=pn;var ce=function(n){Fe(h,n);var c=Ce(h);function h(d){var e;we(this,h),e=c.call(this,d),e.separatedDataSource=null,e.setStateKeys=function(l,i){l==="left"?e.setState(function(u){var p=u.sourceSelectedKeys;return{sourceSelectedKeys:typeof i=="function"?i(p||[]):i}}):e.setState(function(u){var p=u.targetSelectedKeys;return{targetSelectedKeys:typeof i=="function"?i(p||[]):i}})},e.getLocale=function(l,i){return K(K(K({},l),{notFoundContent:i("Transfer")}),e.props.locale)},e.moveTo=function(l){var i=e.props,u=i.targetKeys,p=u===void 0?[]:u,f=i.dataSource,v=f===void 0?[]:f,S=i.onChange,C=e.state,k=C.sourceSelectedKeys,y=C.targetSelectedKeys,I=l==="right"?k:y,x=I.filter(function(E){return!v.some(function(B){return!!(E===B.key&&B.disabled)})}),N=l==="right"?x.concat(p):p.filter(function(E){return x.indexOf(E)===-1}),_=l==="right"?"left":"right";e.setStateKeys(_,[]),e.handleSelectChange(_,[]),S==null||S(N,l,x)},e.moveToLeft=function(){return e.moveTo("left")},e.moveToRight=function(){return e.moveTo("right")},e.onItemSelectAll=function(l,i,u){e.setStateKeys(l,function(p){var f=[];return u?f=Array.from(new Set([].concat(ie(p),ie(i)))):f=p.filter(function(v){return i.indexOf(v)===-1}),e.handleSelectChange(l,f),f})},e.onLeftItemSelectAll=function(l,i){return e.onItemSelectAll("left",l,i)},e.onRightItemSelectAll=function(l,i){return e.onItemSelectAll("right",l,i)},e.handleFilter=function(l,i){var u=e.props.onSearch,p=i.target.value;u==null||u(l,p)},e.handleLeftFilter=function(l){return e.handleFilter("left",l)},e.handleRightFilter=function(l){return e.handleFilter("right",l)},e.handleClear=function(l){var i=e.props.onSearch;i==null||i(l,"")},e.handleLeftClear=function(){return e.handleClear("left")},e.handleRightClear=function(){return e.handleClear("right")},e.onItemSelect=function(l,i,u){var p=e.state,f=p.sourceSelectedKeys,v=p.targetSelectedKeys,S=l==="left"?ie(f):ie(v),C=S.indexOf(i);C>-1&&S.splice(C,1),u&&S.push(i),e.handleSelectChange(l,S),e.props.selectedKeys||e.setStateKeys(l,S)},e.onLeftItemSelect=function(l,i){return e.onItemSelect("left",l,i)},e.onRightItemSelect=function(l,i){return e.onItemSelect("right",l,i)},e.onRightItemRemove=function(l){var i=e.props,u=i.targetKeys,p=u===void 0?[]:u,f=i.onChange;e.setStateKeys("right",[]),f==null||f(p.filter(function(v){return!l.includes(v)}),"left",ie(l))},e.handleScroll=function(l,i){var u=e.props.onScroll;u==null||u(l,i)},e.handleLeftScroll=function(l){return e.handleScroll("left",l)},e.handleRightScroll=function(l){return e.handleScroll("right",l)},e.handleListStyle=function(l,i){return typeof l=="function"?l({direction:i}):l},e.renderTransfer=function(l){return t(He,{children:function(i){var u=i.getPrefixCls,p=i.renderEmpty,f=i.direction;return t(lt.Consumer,{children:function(v){var S,C=v.hasFeedback,k=v.status,y=e.props,I=y.prefixCls,x=y.className,N=y.disabled,_=y.operations,E=_===void 0?[]:_,B=y.showSearch,T=y.footer,J=y.style,R=y.listStyle,Q=y.operationStyle,D=y.filterOption,j=y.render,O=y.children,q=y.showSelectAll,U=y.oneWay,P=y.pagination,b=y.status,L=u("transfer",I),$=e.getLocale(l,p||Ze),X=e.state,H=X.sourceSelectedKeys,Y=X.targetSelectedKeys,ve=ot(k,b),de=!O&&P,M=e.separateDataSource(),A=M.leftDataSource,W=M.rightDataSource,G=Y.length>0,ue=H.length>0,he=se(L,(S={},z(S,"".concat(L,"-disabled"),N),z(S,"".concat(L,"-customize-list"),!!O),z(S,"".concat(L,"-rtl"),f==="rtl"),S),st(L,ve,C),x),V=e.getTitles($),Ne=e.props.selectAllLabels||[];return m("div",{className:he,style:J,children:[t(fe,{prefixCls:"".concat(L,"-list"),titleText:V[0],dataSource:A,filterOption:D,style:e.handleListStyle(R,"left"),checkedKeys:H,handleFilter:e.handleLeftFilter,handleClear:e.handleLeftClear,onItemSelect:e.onLeftItemSelect,onItemSelectAll:e.onLeftItemSelectAll,render:j,showSearch:B,renderList:O,footer:T,onScroll:e.handleLeftScroll,disabled:N,direction:f==="rtl"?"right":"left",showSelectAll:q,selectAllLabel:Ne[0],pagination:de,...$}),t(We,{className:"".concat(L,"-operation"),rightActive:ue,rightArrowText:E[0],moveToRight:e.moveToRight,leftActive:G,leftArrowText:E[1],moveToLeft:e.moveToLeft,style:Q,disabled:N,direction:f,oneWay:U}),t(fe,{prefixCls:"".concat(L,"-list"),titleText:V[1],dataSource:W,filterOption:D,style:e.handleListStyle(R,"right"),checkedKeys:Y,handleFilter:e.handleRightFilter,handleClear:e.handleRightClear,onItemSelect:e.onRightItemSelect,onItemSelectAll:e.onRightItemSelectAll,onItemRemove:e.onRightItemRemove,render:j,showSearch:B,renderList:O,footer:T,onScroll:e.handleRightScroll,disabled:N,direction:f==="rtl"?"left":"right",showSelectAll:q,selectAllLabel:Ne[1],showRemove:U,pagination:de,...$})]})}})}})};var s=d.selectedKeys,a=s===void 0?[]:s,r=d.targetKeys,o=r===void 0?[]:r;return e.state={sourceSelectedKeys:a.filter(function(l){return o.indexOf(l)===-1}),targetSelectedKeys:a.filter(function(l){return o.indexOf(l)>-1})},e}return Ie(h,[{key:"getTitles",value:function(e){var s;return(s=this.props.titles)!==null&&s!==void 0?s:e.titles}},{key:"handleSelectChange",value:function(e,s){var a=this.state,r=a.sourceSelectedKeys,o=a.targetSelectedKeys,l=this.props.onSelectChange;!l||(e==="left"?l(s,o):l(r,s))}},{key:"separateDataSource",value:function(){var e=this.props,s=e.dataSource,a=e.rowKey,r=e.targetKeys,o=r===void 0?[]:r,l=[],i=new Array(o.length);return s.forEach(function(u){a&&(u=K(K({},u),{key:a(u)}));var p=o.indexOf(u.key);p!==-1?i[p]=u:l.push(u)}),{leftDataSource:l,rightDataSource:i}}},{key:"render",value:function(){return t(Re,{componentName:"Transfer",defaultLocale:De.Transfer,children:this.renderTransfer})}}],[{key:"getDerivedStateFromProps",value:function(e){var s=e.selectedKeys,a=e.targetKeys;if(e.pagination,e.children,s){var r=a||[];return{sourceSelectedKeys:s.filter(function(o){return!r.includes(o)}),targetSelectedKeys:s.filter(function(o){return r.includes(o)})}}return null}}]),h}(g.exports.Component);ce.List=fe;ce.Operation=We;ce.Search=Me;ce.defaultProps={dataSource:[],locale:{},showSearch:!1,listStyle:function(){}};const fn=ce,vn="_transferWrapper_xm0g9_2",gn="_transferItem_xm0g9_8",Te={transferWrapper:vn,transferItem:gn},Ke=({data:n,selectedData:c,onChange:h})=>{const[d,e]=g.exports.useState(c),s=n.map(i=>({key:i.type,title:i.name,platform:i.platform,list:i.list,logo:i.logo}));g.exports.useEffect(()=>{e(c)},[c]);const[a]=g.exports.useState([]),r=(i,u)=>{if(i.length!==0){const p=[...d,...i];e(p),h(p)}else{const p=u[0],f=d.findIndex(S=>S===p),v=d;v.splice(f,1),e([...v]),h([...v])}},o=i=>{switch(i){case"Native":return t(Ge,{});case"Web":return t(qe,{});default:return null}},l=i=>{const u=d.find(f=>f===i.key);return{label:m("div",{className:Te.transferItem,children:[m("div",{children:[t(le,{className:"mr-2",height:14,src:i.logo,alt:""}),t("span",{className:"custom-item",children:i.title}),i.platform.map(f=>t("span",{children:o(f)},f))]}),t("span",{children:u?t(yt,{}):t(pt,{})})]}),value:i.title}};return t("div",{className:Te.transferWrapper,children:t(fn,{selectAllLabels:[t("div",{style:{color:"#5F6269"},children:"\u793E\u4EA4\u8FDE\u63A5\u5668"},"1"),t("div",{style:{color:"#5F6269"},children:"\u5DF2\u6DFB\u52A0"},"2")],operationStyle:{display:"none"},listStyle:{border:"1px solid rgba(0,0,0,0.1)"},selectedKeys:a,showSelectAll:!1,dataSource:s,targetKeys:d,onSelectChange:r,render:l})})},{Option:pe}=oe,yn=({data:n,connectorsData:c=[]})=>{var D,j,O,q,U,P;const h=Ve(),d=n!=null&&n.signInMethods?Object.keys(n.signInMethods).find(b=>n.signInMethods[b]==="primary"):"username",e=Object.values(n).filter(b=>b==="disabled").length!==3,s=(D=n==null?void 0:n.signInMethods)==null?void 0:D.username,a=(j=n==null?void 0:n.signInMethods)==null?void 0:j.email,r=(O=n==null?void 0:n.signInMethods)==null?void 0:O.sms,o=(q=n==null?void 0:n.signInMethods)==null?void 0:q.social,l={mainLoginMethod:d,otherMethodAvailable:e,socialValue:n==null?void 0:n.socialSignInConnectorTargets,username:s&&s!=="disabled",email:a&&a!=="disabled",sms:r&&r!=="disabled",social:o&&o!=="disabled"},i=c.filter(b=>b.types===nt),u=c.filter(b=>b.types===rt),p=c.filter(b=>b.types===it),f=Mt(p,b=>b.target),v=Object.keys(f).map(b=>{const L=f[b];return{type:b,name:L[0].name,platform:L.map($=>$.platform),logo:L[0].logo,list:L}}),S=i.some(b=>b.enabled),C=u.some(b=>b.enabled),k=p.some(b=>b.enabled),[y]=F.useForm(),I=F.useWatch("otherMethodAvailable",y),x=F.useWatch("mainLoginMethod",y),N=F.useWatch("social",y),_=F.useWatch("email",y),E=F.useWatch("sms",y);g.exports.useEffect(()=>{N||_||E?y.setFieldValue("otherMethodAvailable",!0):y.setFieldValue("otherMethodAvailable",!1)},[]);const B=b=>{const L=x=="sms"?"primary":b.sms?"secondary":"disabled",$=x=="email"?"primary":b.email?"secondary":"disabled",X=x=="social"?"primary":b.social?"secondary":"disabled",H=x=="username"?"primary":b.username?"secondary":"disabled",Y={signInMode:"SignInAndRegister",socialSignInConnectorTargets:b.socialValue,signInMethods:{sms:L,email:$,social:X,username:H}};wt(Y).then(()=>xe.success("\u4FDD\u5B58\u6210\u529F"))},T=b=>{},J=()=>{h("/auth/connect")},R=b=>m("div",{className:w.loginItemSubHeading,children:[t(je,{}),m("span",{children:["\u4F60\u8FD8\u6CA1\u6709\u8BBE\u7F6E",b,"\u8FDE\u63A5\u5668\uFF0C\u4F60\u9700\u5B8C\u6210\u8BBE\u7F6E\u540E\u767B\u5F55\u4F53\u9A8C\u624D\u4F1A\u751F\u6548"]}),t(re,{onClick:J,children:"\u914D\u7F6E"})]}),Q=b=>{switch(b){case"email":return!C&&t("div",{className:w.mainLoginHint,children:R("\u90AE\u7BB1")});case"sms":return!S&&t("div",{className:w.mainLoginHint,children:R("SMS")});case"social":return!k&&t("div",{className:w.mainLoginHint,children:R("\u793E\u4EA4")});default:return null}};return t("div",{className:w.experienceSettingWrapper,children:m(F,{form:y,initialValues:l,onFinish:B,children:[m("div",{className:w.title,children:[t("h1",{children:"\u767B\u5F55\u4F53\u9A8C\u8BBE\u7F6E"}),t("h2",{children:"\u81EA\u5B9A\u4E49\u767B\u5F55\u754C\u9762\uFF0C\u5E76\u5B9E\u65F6\u9884\u89C8\u771F\u5B9E\u6548\u679C"})]}),m("div",{className:w.mainLogin,children:[m("div",{className:w.mainLoginTitle,children:[t("span",{children:"//"}),t("span",{children:"\u4E3B\u8981\u767B\u5F55\u65B9\u5F0F"})]}),t(F.Item,{style:{width:"100%"},name:"mainLoginMethod",children:m(oe,{style:{width:"100%"},children:[t(pe,{value:"username",children:"\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55"}),t(pe,{value:"email",children:"\u90AE\u7BB1\u767B\u5F55"}),t(pe,{value:"sms",children:"\u624B\u673A\u53F7\u767B\u5F55"}),t(pe,{value:"social",children:"\u793E\u4EA4\u8D26\u53F7\u767B\u5F55"})]})}),Q(x)]}),x==="social"&&!I&&t(F.Item,{name:"socialValue",children:t(Ke,{data:v,onChange:T,selectedData:(U=n==null?void 0:n.socialSignInConnectorTargets)!=null?U:[]})}),m("div",{className:w.otherLogin,children:[m("div",{className:w.otherLoginTitle,children:[t("span",{children:"//"}),t("span",{children:"\u542F\u7528\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F"})]}),m("div",{className:w.otherLoginExplain,children:[t("span",{children:"\u5F00\u542F\u540E\uFF0C\u9664\u4E86\u4E3B\u8981\u767B\u5F55\u65B9\u5F0F\uFF0C\u4F60\u7684app\u5C06\u4F1A\u652F\u6301\u66F4\u591A\u5176\u4ED6\u7684\u767B\u5F55\u65B9\u5F0F"}),t(F.Item,{name:"otherMethodAvailable",valuePropName:"checked",children:t(Pe,{size:"small"})})]})]}),I&&m(ne,{children:[t("div",{className:w.passwordLogin,children:t(F.Item,{name:"username",valuePropName:"checked",children:t(te,{disabled:x==="username",children:m("div",{className:w.checkboxLabel,children:[t("span",{children:"\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55"}),x==="username"&&t("div",{className:w.passwordLoginSubHeading,children:"\uFF08\u4E3B\u8981\uFF09"})]})})})}),m("div",{className:w.loginItemWrapper,children:[t(F.Item,{name:"email",valuePropName:"checked",children:t(te,{disabled:x==="email",children:m("div",{className:w.checkboxLabel,children:[t("span",{children:"\u90AE\u7BB1\u767B\u5F55"}),x==="email"&&t("div",{className:w.passwordLoginSubHeading,children:"\uFF08\u4E3B\u8981\uFF09"})]})})}),_&&x!=="email"&&!C&&R("\u90AE\u7BB1")]}),m("div",{className:w.loginItemWrapper,children:[t(F.Item,{name:"sms",valuePropName:"checked",children:t(te,{disabled:x==="sms",children:m("div",{className:w.checkboxLabel,children:[t("span",{children:"\u624B\u673A\u53F7\u767B\u5F55"}),x==="sms"&&t("div",{className:w.passwordLoginSubHeading,children:"\uFF08\u4E3B\u8981\uFF09"})]})})}),E&&x!=="sms"&&!S&&R("SMS")]}),m("div",{className:w.loginItemWrapper,children:[t(F.Item,{name:"social",valuePropName:"checked",children:t(te,{disabled:x==="social",children:m("div",{className:w.checkboxLabel,children:[t("span",{children:"\u793E\u4EA4\u8D26\u53F7\u767B\u5F55"}),x==="social"&&t("div",{className:w.passwordLoginSubHeading,children:"\uFF08\u4E3B\u8981\uFF09"})]})})}),N&&x!=="social"&&!k&&R("\u793E\u4EA4")]}),N&&t("div",{children:t(F.Item,{name:"socialValue",children:t(Ke,{data:v,onChange:T,selectedData:(P=n==null?void 0:n.socialSignInConnectorTargets)!=null?P:[]})})})]}),t("div",{children:t(F.Item,{children:t("div",{className:w.saveWrapper,children:t(re,{className:w.save,type:"primary",htmlType:"submit",children:"\u4FDD\u5B58"})})})})]})})},bn=({data:n})=>{const[c,h]=g.exports.useState(n),[d]=F.useForm();g.exports.useEffect(()=>h(n),[n]);const e=g.exports.useMemo(()=>{var r;return(r=c==null?void 0:c.enabled)!=null?r:!0},[c]);function s(r){Se.post("/auth/otherConfig",{enabled:r==null?void 0:r.enabled,contentUrl:r!=null&&r.enabled?r==null?void 0:r.contractUrl:""}).then(()=>xe.success("\u66F4\u65B0\u6210\u529F"))}function a(r){var o;h(r?{enabled:r,contractUrl:(o=c==null?void 0:c.contractUrl)!=null?o:""}:{enabled:r,contractUrl:""})}return c?t("div",{className:"w-1/2 pr-6",children:m(F,{form:d,name:"basic",initialValues:c,onFinish:s,children:[t("div",{className:"text-xs text-[#AFB0B4] mb-4.5",children:"\u4F7F\u7528\u6761\u6B3E"}),m("div",{className:"text-sm mb-2",children:[t("span",{className:"text-[#E13D5BFF]",children:"//"})," \u5F00\u542F\u4F7F\u7528\u6761\u6B3E"]}),m("div",{className:"flex justify-between items-center py-10px px-3 bg-[#F8F9FB]",children:[t("span",{className:"pr-8 text-sm text-[#5F6269]",children:"\u6DFB\u52A0\u4F7F\u7528\u4EA7\u54C1\u7684\u6CD5\u5F8B\u534F\u8BAE"}),t(F.Item,{className:"!mb-0",valuePropName:"checked",name:"enabled",children:t(Pe,{className:"ml-8",size:"small",onChange:a})})]}),m("div",{className:e?"visible":"invisible",children:[m("div",{className:"text-sm mt-4 mb-2",children:[t("span",{className:"text-[#E13D5BFF]",children:"//"})," \u4F7F\u7528\u6761\u6B3E"]}),t(F.Item,{name:"contractUrl",children:t(ae,{})})]}),t(F.Item,{children:t(re,{className:"float-right mt-10",type:"primary",htmlType:"submit",children:"\u4FDD\u5B58"})})]})}):t(ft,{})},Sn=[{title:"\u54C1\u724C",key:"0"},{title:"\u767B\u5F55\u65B9\u5F0F",key:"1"},{title:"\u5176\u4ED6",key:"2"}],xn=()=>{const n=Ct(),c=Je(),{data:h}=n,{data:d}=c,[e,s]=g.exports.useState("0"),[a,r]=g.exports.useState(),[o,l]=g.exports.useState(),[i,u]=g.exports.useState(),[p,f]=g.exports.useState(!1);return g.exports.useEffect(()=>{},[d]),g.exports.useEffect(()=>{be("/auth/brand").then(v=>{r({darkMode:v.color.isDarkModeEnabled,color:v.color.primaryColor,logo:v.branding.logoUrl,slogan:v.branding.slogan})})},[p]),g.exports.useEffect(()=>{be("/auth/otherConfig").then(v=>{u({enabled:v.enabled,contractUrl:v.contentUrl})})},[p]),m(ne,{children:[t(Ft,{tabs:Sn,onTabClick:v=>{f(!p),s(v)},activeKey:e}),m("div",{className:"flex",children:[e==="0"?t(Nt,{data:a,onPreview:l}):e==="1"?t(ne,{children:h&&t(yn,{data:h,connectorsData:d})}):t(bn,{data:i}),t(Kt,{previewData:o})]})]})},Qn=xn;export{Qn as E,It as a};