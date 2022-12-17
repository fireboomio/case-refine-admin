import{r as a,a as t,F as E,j as u,b as S,ax as C,aw as k,a9 as g,aa as I}from"./index.64257940.js";import{B as x}from"./button.ca276c4e.js";import{i as B}from"./index.esm.a8235609.js";import{e as b}from"./User.bd84eabb.js";import{W as N}from"./workbenchContext.4d536977.js";/* empty css               */import{D as m}from"./index.a571ed2b.js";import{i as v}from"./use-immer.module.72e4ecef.js";import{E as A}from"./50x.81c416c8.js";import{E as D}from"./EyeOutlined.8d71b64e.js";import{E as j}from"./index.93b57069.js";import{A as R}from"./Common.module.6633066f.js";import"./index.61964446.js";import"./index.9d56ca15.js";import"./row.04cc9265.js";import"./index.90bee82c.js";import"./index.46a9404e.js";import"./index.2b25ba57.js";import"./index.dfbe5777.js";import"./index.f9fc8558.js";import"./index.59af7e77.js";import"./iconUtil.71342ca5.js";import"./outLine.module.07c72bff.js";import"./index.5b2f5049.js";import"./index.e939beeb.js";import"./index.c6a78d56.js";import"./Role.76867b80.js";import"./UserDetails.4a4ace43.js";import"./index.39cec35d.js";import"./Tree.0082570b.js";import"./index.4ef503cf.js";import"./Table.0fc674a8.js";import"./Pagination.0b310a33.js";import"./index.70ebfd77.js";import"./subs.module.53f6f584.js";/* empty css              */import"./omit.173224d8.js";import"./type.4482a080.js";import"./index.d31bb1fc.js";import"./styleChecker.9486324a.js";import"./context.4fcda71f.js";import"./Portal.bf2e5144.js";import"./_baseIsEqual.ae1f3f6e.js";import"./index.525ef567.js";/* empty css               *//* empty css               */import"./index.396a50a9.js";import"./index.2fd29b41.js";import"./responsiveObserve.a761adf9.js";import"./statusUtils.e7207d24.js";import"./SearchOutlined.d2d234c2.js";import"./Editor.88c5e82e.js";import"./index.d4e5ccca.js";import"./main.5d92847d.js";import"./css.7dd30b7b.js";import"./DialogWrap.ed68ac9f.js";import"./pickAttrs.91b30b21.js";import"./RightOutlined.ce6e99f7.js";import"./constant.0f5b1976.js";import"./OneToOneOutlined.ac8b8691.js";import"./ConnectorModal.a9d2674c.js";import"./clsx.m.70024c70.js";import"./index.114f7a19.js";import"./DeleteOutlined.ab1eeec0.js";import"./CopyOutlined.bfbb880d.js";import"./index.21d0aee3.js";import"./_createAggregator.7c8a2c66.js";import"./identity.af5bbf98.js";import"./get.ab779695.js";import"./isSymbol.d728fe31.js";import"./index.e257c064.js";import"./Dropdown.66094b27.js";import"./Overflow.ff04d686.js";import"./Sider.4bd14ece.js";import"./PlusCircleOutlined.4c78356c.js";import"./tslib.es6.d40f4976.js";import"./PlusOutlined.3088ee84.js";import"./index.e073bbb6.js";import"./path.02380b0b.js";import"./isArrayLikeObject.9676d780.js";import"./stackblitz.d6583d31.js";import"./dayjs.min.9104a23a.js";import"./DoubleRightOutlined.d12d812f.js";import"./index.5c556af0.js";import"./conductUtil.91a30912.js";import"./useForceUpdate.cd5983fc.js";function y({content:n}){var r,c;a.exports.useContext(b);const[o,l]=v(!1),e=n.config,p=()=>{l(!o)},h=((r=n.switchState)==null?void 0:r.length)==0?"\u4E0D\u5F00\u542F":((c=n.switchState)==null?void 0:c.length)==2?"\u57FA\u4E8EToken\u548CCookie":n.switchState[0]=="tokenBased"?"\u57FA\u4E8EToken":n.switchState[0]=="cookieBased"?"\u57FA\u4E8ECookie":"";return n?t(E,{children:t("div",{className:"mt-8",children:u(m,{bordered:!0,column:1,size:"small",children:[t(m.Item,{label:"\u4F9B\u5E94\u5546ID",children:e.id}),t(m.Item,{label:"App ID",children:e.clientId}),t(m.Item,{label:"App Secret",children:t("span",{onClick:p,children:o?u("div",{children:[e.clientSecret,t(D,{className:"ml-6"})]}):e.clientSecret?u("div",{children:["***********",t(j,{className:"ml-6"})]}):""})}),t(m.Item,{label:"Issuer",children:e.issuer}),t(m.Item,{label:"\u670D\u52A1\u53D1\u73B0\u5730\u5740",children:`${e.issuer}/.well-known/openid-configuration`}),t(m.Item,{label:"JWKS",children:e.jwks==0?"URL":"JSON"}),e.jwks===0?t(m.Item,{label:"jwksURL",children:e.jwksURL}):t(m.Item,{label:"jwksJSON",children:t("pre",{children:e.jwksJSON})}),t(m.Item,{label:"\u7528\u6237\u7AEF\u70B9",children:e.userInfoEndpoint}),t(m.Item,{label:"\u662F\u5426\u5F00\u542F",children:h})]})})}):t(A,{})}function U(){const{onRefreshMenu:n}=a.exports.useContext(N),[o,l]=a.exports.useState(),[e,p]=a.exports.useState(!1),h=S(),{id:r}=C(),{config:c}=a.exports.useContext(k),{data:d,mutate:T}=B(["/auth",r],function(i,s){return g.get(i)});a.exports.useEffect(()=>{if(r==="new"){p(!0),l({point:"",config:{},id:0,name:"",authSupplier:"openid",switchState:[]});return}g.get("/auth").then(i=>{i.forEach(s=>{s.id===Number(r)&&(p(!1),l(s))})})},[r]),a.exports.useEffect(()=>{r!=="create"&&r!=="new"&&(p(!1),l(d==null?void 0:d.find(i=>i.id===Number(r))))},[d,r]);const w=i=>{n("auth"),l(i),h(`/workbench/auth/${i.id}`)},f=()=>{const i=new URL(location.toString());i.hash="#/workbench/userInfo";let s;try{s=new URL((o==null?void 0:o.point)+encodeURIComponent(i.toString()))}catch(F){I.error("\u5730\u5740\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\u7CFB\u7EDF\u8BBE\u7F6E\u4E2D\u7684API\u57DF\u540D\u662F\u5426\u6B63\u786E"),console.error(F);return}c.apiHost||(s.protocol=location.protocol,s.hostname=location.hostname,s.port=location.port),window.open(s.toString())};return u("div",{className:"common-form h-full flex items-stretch justify-items-stretch flex-col",children:[" ",u("div",{className:"h-54px flex-0 bg-white flex items-center pl-11",style:{borderBottom:"1px solid rgba(95,98,105,0.1)"},children:[t("img",{src:"/assets/ant-tree/file.png",className:"w-14px h-14px mr-1.5",alt:"\u6587\u4EF6"}),o==null?void 0:o.name,t("div",{className:"flex-1"}),e?null:u(E,{children:[t(x,{className:"btn-test  mr-4",onClick:f,children:"\u6D4B\u8BD5"}),t(x,{className:"btn-save  mr-11",onClick:()=>p(!0),children:"\u7F16\u8F91"})]})]}),t("div",{className:"rounded-4px flex-1 min-h-0 overflow-y-auto bg-white pl-8 mx-3 mt-3",style:{border:"1px solid rgba(95,98,105,0.1)",borderBottom:"none",borderRadius:"4px 4px 0 0"},children:t(b.Provider,{value:{handleBottomToggleDesigner:()=>p(!e)},children:o?e?t(R,{content:o,onChange:w,onTest:f}):t(y,{content:o}):""})})]})}function he(){return t(U,{})}export{he as default};
