import{r as B,ax as $,b as j,n as N,a as e,j as t,a9 as g}from"./index.64257940.js";import{B as m}from"./button.ca276c4e.js";import{R as d,C as s}from"./row.04cc9265.js";import{D as S}from"./index.e939beeb.js";import"./index.c6a78d56.js";import{F as l}from"./index.9d56ca15.js";import"./index.61964446.js";import{I as u}from"./index.93b57069.js";import{M as O}from"./index.46a9404e.js";import"./iconUtil.71342ca5.js";import{T as v}from"./Table.0fc674a8.js";import"./index.39cec35d.js";import"./Pagination.0b310a33.js";import"./Tree.0082570b.js";import"./index.70ebfd77.js";import{T as y}from"./index.5b2f5049.js";import{S as o}from"./index.21d0aee3.js";import{l as R}from"./Editor.88c5e82e.js";import{E as K}from"./index.5c556af0.js";import{i as p}from"./use-immer.module.72e4ecef.js";import{I as M}from"./index.2b25ba57.js";import{s as n}from"./subs.module.53f6f584.js";R.config({paths:{vs:"/modules/monaco-editor/min/vs"}});const{TabPane:C}=y,{Option:P}=o;function oe(){const[F]=l.useForm(),[E,h]=p(!1),[f,I]=p([]),[r,b]=B.exports.useState(),[x,A]=p(!1),{id:c}=$(),k=j(),w=a=>{g.put(`/oauth/${c}`,{...a})};if(B.exports.useEffect(()=>{N(`/oauth/role/${c}`).then(a=>I(a)),N(`/oauth/${c}`).then(a=>{a.birthday="",b(a)})},[c,x]),!r)return e("div",{});const D=[{title:"\u89D2\u8272",dataIndex:"code",key:"code"},{title:"\u89D2\u8272\u63CF\u8FF0",dataIndex:"remark",key:"remark"},{title:"\u64CD\u4F5C",key:4,render:(a,{id:i})=>e("span",{className:"pl-0 text-red-500 cursor-pointer",onClick:()=>void T(i),children:"\u64A4\u9500\u89D2\u8272"})}],T=a=>{g.post(`/oauth/role/${a}`).then(()=>A(!x))};function V(a,i){b({...i,...r})}return t(y,{defaultActiveKey:"1",children:[t(C,{tab:"\u7528\u6237\u4FE1\u606F",children:[e("div",{className:n["user-info"],children:"\u4E2A\u4EBA\u4FE1\u606F"}),t(l,{name:"basic",labelCol:{span:6},wrapperCol:{span:20},initialValues:r,onFinish:a=>void w(a),autoComplete:"off",labelAlign:"left",className:n["form-style"],onValuesChange:V,children:[t(d,{children:[e(s,{span:8,children:e(l.Item,{label:"\u7528\u6237\u540D",name:"userName",children:e(u,{placeholder:"\u8BF7\u8F93\u5165"})})}),e(s,{span:8,children:e(l.Item,{label:"\u6635\u79F0",name:"nickName",children:e(u,{placeholder:"\u8BF7\u8F93\u5165"})})}),e(s,{span:8,children:e(l.Item,{label:"\u59D3\u540D",name:"realname",initialValue:r==null?void 0:r.realname,children:e(u,{placeholder:"\u8BF7\u8F93\u5165"})})})]}),t(d,{children:[e(s,{span:8,children:e(l.Item,{label:"\u6027\u522B",name:"gender",children:t(o,{placeholder:"\u8BF7\u8F93\u5165",children:[e(o.Option,{value:"\u7537",children:"\u7537"}),e(o.Option,{value:"\u5973",children:"\u5973"})]})})}),e(s,{span:8,children:e(l.Item,{label:"\u751F\u65E5",name:"birthday",children:e(S,{placeholder:"\u8BF7\u8F93\u5165"})})}),e(s,{span:8,children:e(l.Item,{label:"\u624B\u673A\u53F7",name:"mobile",children:e(u,{placeholder:"\u8BF7\u8F93\u5165"})})})]}),t(d,{children:[e(s,{span:8,children:e(l.Item,{label:"\u90AE\u7BB1",name:"email",children:e(u,{placeholder:"\u8BF7\u8F93\u5165"})})}),e(s,{span:8,children:e(l.Item,{label:"\u90AE\u653F\u7F16\u7801",name:"postCode",initialValue:r==null?void 0:r.postalCode,children:e(u,{placeholder:"\u8BF7\u8F93\u5165"})})}),e(s,{span:8,children:e(l.Item,{label:"\u539F\u7CFB\u7EDFID",name:"originID",children:e(u,{placeholder:"\u8BF7\u8F93\u5165"})})})]}),e(d,{children:e(s,{span:24,style:{textAlign:"center"},children:t(l.Item,{wrapperCol:{span:24},children:[e(m,{className:`${n["connect-check-btn-common"]} w-15 ml-4`,children:e("span",{className:"text-sm text-gray",onClick:()=>k(-1),children:"\u8FD4\u56DE"})}),e(m,{className:`${n["save-btn"]} ml-4`,htmlType:"submit",children:"\u4FDD\u5B58"})]})})})]}),t("div",{className:`${n["mid-word"]} flex justify-between items-center`,children:[e("span",{children:"\u539F\u59CBjson\u6570\u636E"}),t("div",{className:n["right-word"],children:[e(M,{type:"icon-fuzhi",className:"text-[10px] text-[#E92E5E]"}),e("span",{children:"\u590D\u5236"})]})]}),e(K,{height:"90vh",defaultLanguage:"json",defaultValue:"",value:JSON.stringify(r,null,2),className:`mt-4 ${n.monaco}`})]},"1"),t(C,{tab:"\u89D2\u8272\u6743\u9650",children:[t("div",{className:"flex justify-between items-center mb-4",children:[e("span",{className:"text-base text-[#AFB0B4FF]",children:"\u7528\u6237\u89D2\u8272"}),e(m,{className:"px-4 py-0 h-7.5",onClick:()=>{h(!0)},children:e("span",{className:"text-sm text-gray",children:"\u6DFB\u52A0"})})]}),e(O,{mask:!1,title:"\u7528\u6237\u89D2\u8272",width:549,style:{top:"300px"},transitionName:"",open:E,onOk:()=>h(!1),onCancel:()=>h(!1),okText:e(m,{className:n["save-btn"],onClick:()=>F.submit(),children:e("span",{children:"\u786E\u5B9A"})}),okType:"text",cancelText:"\u53D6\u6D88",children:e(l,{name:"roleList",form:F,labelCol:{span:6},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:a=>{},autoComplete:"off",labelAlign:"left",className:"h-30 mt-8 ml-8",children:e(l.Item,{label:"\u9009\u62E9\u89D2\u8272",name:"code",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4F60\u7684\u89D2\u8272"}],children:e(o,{children:t(P,{value:"1",children:[e("span",{className:"mr-2 text-lg ",children:"user"}),e("span",{className:"text-[#AFB0B4] text-xs ",children:"\u666E\u901A\u7528\u6237"})]})})})})}),e("div",{className:n["role-container-table"],children:f.length>0?e(v,{columns:D,dataSource:f,rowKey:a=>a.id,rowClassName:(a,i)=>i%2===1?n["role-table"]:"",pagination:!1}):e(v,{columns:D,dataSource:[],rowKey:a=>a.id,rowClassName:(a,i)=>i%2===1?n["role-table"]:"",pagination:!1})})]},"2")]})}export{oe as A};
