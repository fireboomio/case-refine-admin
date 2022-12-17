import{b as w}from"./context.4fcda71f.js";import{g as N,h as F,A as h,S as n}from"./StatusDirective.e97d8b3b.js";import{x as r}from"./x6.56983500.js";import{j as D,a,R as G,r as d}from"./index.64257940.js";import{g as C}from"./index.3992c1fc.js";import"./Portal.bf2e5144.js";import"./type.4482a080.js";import"./_baseIsEqual.ae1f3f6e.js";import"./omit.173224d8.js";import"./index.5b2f5049.js";import"./Dropdown.66094b27.js";import"./index.61964446.js";import"./Overflow.ff04d686.js";import"./statusUtils.e7207d24.js";import"./PlusOutlined.3088ee84.js";import"./Tree.0082570b.js";import"./isSymbol.d728fe31.js";import"./index.39cec35d.js";import"./pickAttrs.91b30b21.js";import"./conductUtil.91a30912.js";import"./iconUtil.71342ca5.js";import"./SearchOutlined.d2d234c2.js";import"./button.ca276c4e.js";import"./Helmet.90e2ca49.js";import"./index.d4e5ccca.js";import"./index.bf34cfca.js";import"./isArrayLikeObject.9676d780.js";import"./get.ab779695.js";import"./identity.af5bbf98.js";import"./_copyArray.ed92a2fd.js";import"./index.9d56ca15.js";import"./row.04cc9265.js";import"./styleChecker.9486324a.js";import"./responsiveObserve.a761adf9.js";import"./index.27788710.js";import"./parser.542c3b4e.js";import"./index.4ef503cf.js";import"./workbenchContext.4d536977.js";import"./index.e3184aa5.js";import"./index.21d0aee3.js";import"./utils.435ff07e.js";import"./DialogWrap.ed68ac9f.js";import"./index.e073bbb6.js";import"./path.02380b0b.js";import"./Editor.88c5e82e.js";import"./use-immer.module.72e4ecef.js";import"./index.70ebfd77.js";import"./stackblitz.d6583d31.js";import"./index.46a9404e.js";import"./dayjs.min.9104a23a.js";import"./DoubleRightOutlined.d12d812f.js";import"./index.93b57069.js";import"./EyeOutlined.8d71b64e.js";import"./index.e257c064.js";import"./RightOutlined.ce6e99f7.js";import"./Sider.4bd14ece.js";import"./index.114f7a19.js";import"./main.6509447f.js";import"./index.e939beeb.js";import"./index.c6a78d56.js";import"./index.5c556af0.js";import"./utils.02fb0c25.js";import"./DeleteOutlined.ab1eeec0.js";import"./index.22218f67.js";import"./main.5d92847d.js";const p=({index:i,text:o})=>D("div",{className:"bg-white rounded-sm flex h-5 w-14 items-center justify-center",style:{border:"0.3px solid rgba(175, 176, 180, 0.6)"},children:[a("span",{className:"rounded-md bg-[#6F6F6F] h-3 text-white text-center leading-none text-[10px] w-3",children:i}),a("span",{className:"text-xs ml-1",children:o})]}),A=30,R=410,c=320,m=(R-c)/2,v=({globalHookState:i,hookState:o,directiveState:s,apiSetting:l,onEditHook:t})=>{const u=d.exports.useRef(null);return d.exports.useEffect(()=>(r.Graph.registerNode("endpoint",{inherit:"rect",width:c,height:28,attrs:{body:{strokeWidth:.5,stroke:"rgba(95, 98, 105, 0.6)",fill:"#F3F9FD",rx:14,ry:14},text:{fontSize:14,fill:"#333333"}}}),r.Graph.registerNode("decision",{inherit:"polygon",width:112,height:50,attrs:{body:{strokeWidth:.5,stroke:"#F2B241",fill:"#ffffff",refPoints:"0,10 10,0 20,10 10,20"},text:{fontSize:14,fill:"#F3B13F"}}}),r.Graph.registerNode("operation",{inherit:"rect",width:c,height:44,attrs:{body:{strokeWidth:.5,stroke:{type:"linearGradient",attrs:{x1:"100%",y1:"100%",x2:"0%",y2:"0%"},stops:[{offset:"0%",color:"#FF9378"},{offset:"100%",color:"#E13D5B"}]},fill:{type:"linearGradient",attrs:{x1:"100%",y1:"0%",x2:"0%",y2:"100%"},stops:[{offset:"0%",color:"#FFF3F8"},{offset:"100%",color:"#FFDBDD"}]},rx:6,ry:6},text:{fontSize:14,fill:"#E92E5E"}}}),r.Graph.registerNode("globalHook",{inherit:"rect",width:20,height:20,markup:[{tagName:"image"}],attrs:{image:{"xlink:href":N,width:20,height:20,refX:0,refY:0,filter:{name:"dropShadow",args:{color:"rgba(202,83,206,0.33)",dx:0,dy:2,blur:7}}}}}),r.Graph.registerNode("hook",{inherit:"rect",width:20,height:20,markup:[{tagName:"image"}],attrs:{image:{"xlink:href":F,width:20,height:20,refX:0,refY:0,filter:{name:"dropShadow",args:{color:"rgba(56,110,252,0.23)",dx:0,dy:2,blur:4}}}}}),r.Graph.registerEdge("orange",{zIndex:-1,attrs:{line:{stroke:"#FF9810",strokeWidth:"1px",targetMarker:{name:"block",width:3,height:4}}}}),r.Graph.registerEdge("blue",{zIndex:-1,attrs:{line:{stroke:"#1034FF",strokeWidth:"1px",targetMarker:{name:"block",width:3,height:4}}}}),r.Graph.registerNode("flowLabel",{inherit:"rect",height:14,attrs:{body:{fill:"#fff",strokeWidth:.3,stroke:"rgba(175, 176, 180, 0.6)",rx:7,ry:7},text:{fontSize:12,fill:"#6f6f6f"}}}),r.Graph.registerEdge("rejectLine",{attrs:{line:{stroke:"#787D8B",strokeWidth:.5,strokeDasharray:"3 3",targetMarker:{name:"block",width:3,height:5}}}}),()=>{r.Graph.unregisterNode("endpoint"),r.Graph.unregisterNode("decision"),r.Graph.unregisterNode("operation"),r.Graph.unregisterNode("globalHook"),r.Graph.unregisterNode("hook"),r.Graph.unregisterNode("flowLabel"),r.Graph.unregisterEdge("orange"),r.Graph.unregisterEdge("blue"),r.Graph.unregisterEdge("rejectLine")}),[]),d.exports.useEffect(()=>{const e=new r.Graph({container:u.current,mousewheel:{enabled:!0,zoomAtMousePosition:!0,modifiers:"ctrl",minScale:.5,maxScale:3},interacting:{nodeMovable:!1,edgeMovable:!1,edgeLabelMovable:!1,arrowheadMovable:!1,vertexMovable:!1,useEdgeTools:!1},background:{color:"#F8F9FD",image:C,size:{width:22,height:22},repeat:"repeat"},autoResize:!0}),x=e.createNode({shape:"endpoint",label:"\u5BA2\u6237\u7AEF",x:m,y:A}),f=e.createNode({shape:"operation",label:"Subscription Operation",x:m,y:416}),b=e.createNode({shape:"endpoint",label:"\u4E8B\u4EF6\u6E90",x:m,y:587});e.addNodes([x,f,b]),e.addEdges([{shape:"orange",source:{x:166,y:58},target:{x:166,y:416}},{shape:"blue",source:{x:234,y:58},target:{x:234,y:416}},{shape:"orange",source:{x:315,y:58},target:{x:315,y:416}},{shape:"orange",source:{x:166,y:450},target:{x:166,y:587}},{shape:"blue",source:{x:234,y:450},target:{x:234,y:587}},{shape:"orange",source:{x:315,y:450},target:{x:315,y:587}}]),(s.fromClaim||l.authenticationRequired)&&(e.addNode({shape:"decision",label:"\u767B\u5F55\u6821\u9A8C?",x:110,y:80}),e.addEdge({shape:"rejectLine",source:{x:110,y:106},target:{x:41,y:106}}),e.addNode({shape:"flowLabel",label:"401",width:26,height:14,x:72,y:98})),s.rbac&&(e.addNode({shape:"decision",label:"\u6388\u6743\u6821\u9A8C?",x:110,y:160}),e.addEdge({shape:"rejectLine",source:{x:110,y:186},target:{x:41,y:186}}),e.addNode({shape:"flowLabel",label:"401",width:26,height:14,x:72,y:178})),s.jsonSchema&&(e.addNode({shape:"decision",label:"\u5165\u53C2\u6821\u9A8C?",x:110,y:236}),e.addEdge({shape:"rejectLine",source:{x:110,y:262},target:{x:41,y:262}}),e.addNode({shape:"flowLabel",label:"400",width:26,height:14,x:72,y:254})),(s.fromClaim||l.authenticationRequired||s.rbac||s.jsonSchema)&&e.addNode({shape:"rect",label:`\u7ED3


\u675F`,x:20,y:82,width:21,height:212,attrs:{body:{stroke:"#E9EBF3",strokeWidth:3,fill:"none"},text:{fill:"#B6BACC",fontSize:12}}}),new h({shape:"globalHook",x:156,y:520},[{shape:"react-shape",width:114,height:20,component:a(n,{enabled:i.onConnectionInit.enable,label:"onConnectionInit",onDoubleClick:()=>{t==null||t(i.onConnectionInit)}}),x:10,y:536}],"arrow").addToGraph(e,{position:"left"});const g=[{shape:"react-shape",width:114,height:20,component:a(n,{enabled:o.preResolve.enable,label:"preResolve",onDoubleClick:()=>{t==null||t(o.preResolve)}}),x:14,y:323}];o.mutatingPreResolve.can&&g.push({shape:"react-shape",width:114,height:20,component:a(n,{enabled:o.mutatingPreResolve.enable,label:"mutatingPreResolve",onDoubleClick:()=>{t==null||t(o.mutatingPreResolve)}}),x:14,y:354}),new h({shape:"hook",x:156,y:315},g,"arrow").addToGraph(e,{position:"left"}),new h({shape:"hook",x:225,y:315},[{shape:"react-shape",width:114,height:20,component:a(n,{enabled:o.mutatingPostResolve.enable,label:"mutatingPostResolve",onDoubleClick:()=>{t==null||t(o.mutatingPostResolve)}}),x:282,y:292},{shape:"react-shape",width:114,height:20,component:a(n,{enabled:o.postResolve.enable,label:"postResolve",onDoubleClick:()=>{t==null||t(o.postResolve)}}),x:282,y:332}],"arrow").addToGraph(e),[{shape:"react-shape",x:139,y:482,component:a(p,{index:"1",text:"\u8BA2\u9605"})},{shape:"react-shape",x:139,y:375,component:a(p,{index:"2",text:"\u8BA2\u9605"})},{shape:"react-shape",x:206,y:482,component:a(p,{index:"3",text:"\u63A8\u9001"})},{shape:"react-shape",x:206,y:204,component:a(p,{index:"4",text:"\u63A8\u9001"})},{shape:"react-shape",x:287,y:482,component:a(p,{index:"5",text:"\u53D6\u6D88"})},{shape:"react-shape",x:287,y:375,component:a(p,{index:"6",text:"\u53D6\u6D88"})}].forEach(y=>{e.addNode(y)}),e.addNode({shape:"rect",x:286,y:632,label:"\u6CE8\uFF1A2 \u2192 3 \u2192 4 \u2192 5 \u91CD\u590D\u6267\u884C",attrs:{body:{fill:"none",stroke:"none"},text:{fill:"#9296A0",fontSize:12}}})},[l,s,i,o,t]),a("div",{className:"flex flex-shrink-0 w-full overflow-x-auto overflow-y-hidden !h-full",children:a("div",{className:"flex-1 min-h-175 min-w-102",ref:u})})},qe=G.memo(v,(i,o)=>w(i,o));export{qe as default};