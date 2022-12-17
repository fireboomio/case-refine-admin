var Z=Object.defineProperty;var Q=(w,s,i)=>s in w?Z(w,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):w[s]=i;var R=(w,s,i)=>(Q(w,typeof s!="symbol"?s+"":s,i),i);import{r as _,aB as $,h as tt,j as et,a as nt}from"./index.64257940.js";import{r as rt}from"./x6.56983500.js";var J={exports:{}};(function(w,s){(function(i,c){c(s,rt(),_.exports,$.exports)})(tt,function(i,c,l,O){function L(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var y=L(l),N=L(O),E=c.Registry.create({type:"react componnet"});c.Graph.registerReactComponent=E.register,c.Graph.unregisterReactComponent=E.unregister,c.Graph.Hook.prototype.getReactComponent=function(r){var e=this.options.getReactComponent;if(typeof e=="function"){var t=c.FunctionExt.call(e,this.graph,r);if(t!=null)return t}var n=r.getComponent();if(typeof n=="string"){var o=E.get(n);if(o==null)return E.onNotFound(n);n=o}return n};/*! *****************************************************************************
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
	    ***************************************************************************** */var D=function(r,e){return(D=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])})(r,e)};function V(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=r}D(r,e),r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var M,q,F,Y,W=function(){return(W=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}).apply(this,arguments)};function j(r,e,t){if(t||arguments.length===2)for(var n,o=0,a=e.length;o<a;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return r.concat(n||Array.prototype.slice.call(e))}i.ReactShape=function(r){function e(){return r!==null&&r.apply(this,arguments)||this}return V(e,r),Object.defineProperty(e.prototype,"component",{get:function(){return this.getComponent()},set:function(t){this.setComponent(t)},enumerable:!1,configurable:!0}),e.prototype.getComponent=function(){return this.store.get("component")},e.prototype.setComponent=function(t,n){return n===void 0&&(n={}),t==null?this.removeComponent(n):this.store.set("component",t,n),this},e.prototype.removeComponent=function(t){return t===void 0&&(t={}),this.store.remove("component",t),this},e}(c.Node),function(r){function e(t,n,o){o===void 0&&(o="rect");var a=[],u=n?c.Markup.getForeignObjectMarkup():{tagName:"g",selector:"content"};return t?a.push(u):a.push.apply(a,[{tagName:o,selector:"body"},u,{tagName:"text",selector:"label"}]),a}r.config({view:"react-shape-view",markup:e(!1,!0),attrs:{body:{fill:"none",stroke:"none",refWidth:"100%",refHeight:"100%"},fo:{refWidth:"100%",refHeight:"100%"},label:{fontSize:14,fill:"#333",refX:"50%",refY:"50%",textAnchor:"middle",textVerticalAnchor:"middle"}},propHooks:function(t){if(t.markup==null){var n=t.primer,o=t.useForeignObject!==!1;if(n&&n!=="rect"){t.markup=e(!1,o,n);var a={};n==="circle"?a={refCx:"50%",refCy:"50%",refR:"50%"}:n==="ellipse"&&(a={refCx:"50%",refCy:"50%",refRx:"50%",refRy:"50%"}),t.attrs=c.ObjectExt.merge({},{body:W({refWidth:null,refHeight:null},a)},t.attrs||{})}else t.simple&&(t.markup=e(!0,o),t.attrs=c.ObjectExt.merge({},{body:null,label:null},t.attrs||{}))}return t}}),c.Node.registry.register("react-shape",r,!0)}(i.ReactShape||(i.ReactShape={})),i.Portal=void 0,M=i.Portal||(i.Portal={}),F=!1,Y=function(r,e){var t=e.payload;switch(e.type){case"add":return(n=r.findIndex(function(a){return a.id===t.id}))>=0?(r[n]=t,j([],r,!0)):j(j([],r,!0),[t],!1);case"remove":var n;if((n=r.findIndex(function(a){return a.id===t.id}))>=0){var o=j([],r,!0);return o.splice(n,1),o}}return r},M.connect=function(r,e){F&&q({type:"add",payload:{id:r,portal:e}})},M.disconnect=function(r){F&&q({type:"remove",payload:{id:r}})},M.isActive=function(){return F},M.getProvider=function(){return function(){F=!0;var r=l.useReducer(Y,[]),e=r[0],t=r[1];return q=t,y.default.createElement(y.default.Fragment,{children:e.map(function(n){return n.portal})})}};var T,H=function(r){function e(t){var n=r.call(this,t)||this;return n.scheduledAnimationFrame=!1,n.throttleUpdateFunc=function(){n.scheduledAnimationFrame||(n.scheduledAnimationFrame=!0,window.requestAnimationFrame(function(){n.setState(function(o){return n.scheduledAnimationFrame=!1,{tick:o.tick+1}})}))},n.onChange=function(o){e.throttleChangeTypes.includes(o.key)?n.throttleUpdateFunc():n.setState({tick:n.state.tick+1})},n.state={tick:0},n}return V(e,r),e.prototype.componentDidMount=function(){this.props.node.on("change:*",this.onChange)},e.prototype.componentWillUnmount=function(){this.props.node.off("change:*",this.onChange)},e.prototype.clone=function(t){var n=this.props.node;return typeof t.type=="string"?y.default.cloneElement(t):y.default.cloneElement(t,{node:n})},e.prototype.render=function(){var t=this.props,n=t.graph,o=t.node,a=t.component;if(y.default.isValidElement(a))return this.clone(a);if(typeof a=="function"){var u=c.FunctionExt.call(a,n,o);if(y.default.isValidElement(u))return this.clone(u)}return a},e.throttleChangeTypes=["position","size"],e}(y.default.PureComponent);i.ReactShapeView=function(r){function e(){return r!==null&&r.apply(this,arguments)||this}return V(e,r),e.prototype.init=function(){var t=this;r.prototype.init.call(this),this.cell.on("removed",function(){i.Portal.disconnect(t.cell.id)})},e.prototype.getComponentContainer=function(){return this.cell.prop("useForeignObject")===!1?this.selectors.content:this.selectors.foContent},e.prototype.confirmUpdate=function(t){var n=this,o=r.prototype.confirmUpdate.call(this,t);return this.handleAction(o,e.action,function(){c.Scheduler?c.Scheduler.scheduleTask(function(){n.renderReactComponent()}):n.renderReactComponent()})},e.prototype.renderReactComponent=function(){this.unmountReactComponent();var t=this.getComponentContainer(),n=this.cell,o=this.graph;if(t){var a=this.graph.hook.getReactComponent(n),u=y.default.createElement(H,{graph:o,node:n,component:a});i.Portal.isActive()?i.Portal.connect(this.cell.id,N.default.createPortal(u,t)):N.default.render(u,t)}},e.prototype.unmountReactComponent=function(){var t=this.getComponentContainer();return t&&N.default.unmountComponentAtNode(t),t},e.prototype.unmount=function(){return i.Portal.disconnect(this.cell.id),this.unmountReactComponent(),r.prototype.unmount.call(this),this},e}(c.NodeView),(T=i.ReactShapeView||(i.ReactShapeView={})).action="react",T.config({bootstrap:[T.action],actions:{component:T.action}}),c.NodeView.registry.register("react-shape-view",T,!0);var B="react";function K(r){var e,t,n={current:function(){}};function o(u){t(u)}var a=function(u){function A(){return u!==null&&u.apply(this,arguments)||this}return V(A,u),A.prototype.init=function(){var f=this;u.prototype.init.call(this),this.cell.on("removed",function(){o(f.cell.id)})},A.prototype.getComponentContainer=function(){return this.cell.prop("useForeignObject")===!1?this.selectors.content:this.selectors.foContent},A.prototype.confirmUpdate=function(f){var g=this,p=u.prototype.confirmUpdate.call(this,f);return this.handleAction(p,B,function(){return g.renderReactComponent()})},A.prototype.renderReactComponent=function(){this.unmountReactComponent();var f,g,p=this.getComponentContainer(),b=this.cell,d=this.graph;if(p){var m=this.graph.hook.getReactComponent(b),C=y.default.createElement(H,{graph:d,node:b,component:m});f=this.cell.id,g=N.default.createPortal(C,p),e({id:f,portal:g})}},A.prototype.unmountReactComponent=function(){var f=this.getComponentContainer();return f&&N.default.unmountComponentAtNode(f),f},A.prototype.onMouseDown=function(f,g,p){var b=f.target;if(b.tagName.toLowerCase()==="input"){var d=b.getAttribute("type");if(d==null||["text","password","number","email","search","tel","url"].includes(d))return}u.prototype.onMouseDown.call(this,f,g,p)},A.prototype.dispose=function(){o(this.cell.id),this.unmountReactComponent()},function(f,g,p,b){var d,m=arguments.length,C=m<3?g:b===null?b=Object.getOwnPropertyDescriptor(g,p):b;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")C=Reflect.decorate(f,g,p,b);else for(var S=f.length-1;S>=0;S--)(d=f[S])&&(C=(m<3?d(C):m>3?d(g,p,C):d(g,p))||C);m>3&&C&&Object.defineProperty(g,p,C)}([c.NodeView.dispose()],A.prototype,"dispose",null),A}(c.NodeView);return a.config({bootstrap:[B],actions:{component:B}}),c.NodeView.registry.register(r,a,!0),{Portal:function(){var u=l.useState([]),A=u[0],f=u[1],g=l.useState(),p=g[0],b=g[1],d=l.useRef([]),m=l.useRef([]);n.current=b;var C=l.useCallback(function(h){var v=h.id;if(d.current.includes(v)){var x=m.current,k=x.findIndex(function(P){return P.id===v});k>-1?x[k]=h:x.push(h),m.current=x}else f(function(P){var z=j([],P,!0),U=z.findIndex(function(I){return I.id===v});return U>-1?z[U]=h:z.push(h),z})},[]);e=C;var S=l.useCallback(function(h){d.current.includes(h)&&(d.current=d.current.filter(function(v){return v!==h})),m.current.map(function(v){return v.id}).includes(h)&&(m.current=m.current.filter(function(v){return v.id!==h})),f(function(v){return v.filter(function(x){return x.id!==h})})},[]);t=S;var G=l.useCallback(function(h){var v=h.name,x=(h.data||{}).cells;if(v==="add"){var k=(x===void 0?[]:x).filter(function(P){return P.isNode()}).map(function(P){return P.id});d.current=Array.from(new Set(j(j([],d.current,!0),k,!0)))}},[]),X=l.useCallback(function(h){if(h.name==="add"){var v=m.current;if(v.length){var x=v.map(function(k){return k.id});d.current=d.current.filter(function(k){return!x.includes(k)}),m.current=[],f(function(k){var P=j([],k,!0);return v.forEach(function(z){var U=P.findIndex(function(I){return I.id===z.id});U>-1?P[U]=z:P.push(z)}),P})}}},[]);return l.useLayoutEffect(function(){return p&&(p.on("batch:start",G),p.on("batch:stop",X)),function(){p&&(p.off("batch:start",G),p.off("batch:stop",X),f([]),d.current=[],m.current=[])}},[p,G,X]),y.default.createElement.apply(y.default,j([y.default.Fragment,null],A.map(function(h){return h.portal}),!1))},setGraph:function(u){n.current(u)}}}i.createPortal=K,i.registry=E,i.usePortal=function(r){var e=l.useRef(!1),t=l.useState(function(){return e.current?{}:(e.current=!0,K(r))})[0];return[t.Portal,t.setGraph]},Object.defineProperty(i,"__esModule",{value:!0})})})(J,J.exports);class ut{constructor(s,i,c){R(this,"_trigger");R(this,"_references");R(this,"trigger");R(this,"references");R(this,"edges");R(this,"linkType");this._trigger=s,this._references=i,this.linkType=c}addToGraph(s,{position:i="right"}={}){const c=i==="right"?"left":"right";this.trigger=s.createNode({...this._trigger,ports:{groups:{[i]:{position:i,attrs:{circle:{r:0,style:{visibility:"hidden"}}}}},items:[{id:i,group:i}]}}),this.references=this._references.map(l=>s.createNode({...l,ports:{groups:{[c]:{position:c,attrs:{circle:{r:0,style:{visibility:"hidden"}}}}},items:[{id:c,group:c}]}})),s.addNode(this.trigger),s.addNodes(this.references),this.edges=this.linkType==="linear"?this.references.map(l=>s.createEdge({source:{cell:this.trigger,port:i},target:{cell:l,port:c},attrs:{line:{stroke:"#529DFF",strokeWidth:1,targetMarker:""}}})):this.references.map(l=>s.createEdge({source:{cell:this.trigger,port:i},target:{cell:l,port:c},connector:"smooth",attrs:{line:{stroke:{type:"linearGradient",attrs:{x1:"0%",y1:"0%",x2:"100%",y2:"0%"},stops:[{offset:"0%",color:"#CF4BFF"},{offset:"100%",color:"#478FFF"}]},strokeWidth:2,targetMarker:{name:"block",fill:"#478FFF",width:9,height:12}}}})),s.addEdges(this.edges),s.on("node:click",({cell:l})=>{l===this.trigger&&this.references.length&&(this.references[0].isVisible()?(this.references.forEach(O=>O.hide()),this.edges.forEach(O=>O.hide())):(this.references.forEach(O=>O.show()),this.edges.forEach(O=>O.show())))})}}const ft="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABO1BMVEUAAAD00v3z1f//3f/yzvvywffywvfzyvvw3P3xwvfx2vzyxfnx2v3y1vvx3/3yxvj/3P/w1/zxx/ny0vvyw/fxzPny3P3z3f7wz/rx3v3w3f3y1vvyyfnywvjw2/zy1vzyx/jyw/fw3vzy0vvx3f3xx/ny1fvxw/fxzPnxx/jx0frx2fzx1/vx3Pz////veO3ocvDy1PvPWfzXYvfdZ/Xlb/H1f+rTXfnibfLrde7HUf/gavPyfOvJVf3LVvz4gujv1PvaZfb++f7noPnYbfjyt/TPbv7hjfnslfT4kevPZP3pvfvrtfrUafrmg/PzpPLvgO366/3clPzUc/rwu/j1v/bfe/bdcPXph/H2nO7xi+7xhe3Ugv3lt/v2zvntrPjqo/jkmPjadvjspffqnPXlj/X33fzszPv74fq3PJw9AAAAJ3RSTlMAIxYMf4CnUvPz2dmlgX9yCfPz6OioclLz6NPT09O/v7+/qqqDg3JvfDw4AAACgUlEQVQ4y3XUZ1viQBSG4SFBmiDYe1vdJQluNIKIKBpQisCCvfeyu///F/jOnDEhgs/n+zpnBuYK8+Ybi85FQqHIXHTMx75NWZ76LUqhlZXpmNKTqQOhDiYajKndbnxSMtdZK9bw+Fc3IBk5CS3bsGIelvhBzsNs2zIsy1hKdEA4kWecBchb+rKXxjVOKvVCoX560oCS+Z17OOy+ks/nC4Xd3fX19dOmI4Pk1EkJ7bs84gxtbm5WhdIMbVilxdL9k+MkS6fTF7qQmiaWK6GU2GtX3HFgvOKFBocmFMBl+dvddY4jl8m8C0cjp+gnuRes/gcd8C4vM2i7SXAG7yVFsAJXLZkdld62c7mWRvnYGBhq8NOlTE9/t3MbG2fC6XEWhUMn/HRNLzyDW3sjOMrmhbNOxS2q+8fJfd7T0+trbQNu7YozXV9gEXpPdbrsi/lYLPJL4Hhg6AgM9bNBDi2DXLpqnhXBHLe1uqqLhgAt/qA4Q8/mMZzD4BwYAcS7OxAOE80WZ6671eXqefGOjRconO6yZFruOLRzI1xygUVt2wB8hsugB9N8lKcTbqcNhQLsF99sGI00XbZVMks17ohls2WCceYzqAvucrlcDbK95bjDJIXPwTTB5udlIc2HW2LZvTK5WbyeGD1j4x3j6Cc+PzbN/9dZ7q6TVB+gMiGfccu97NHNEWd7n4vDCkN+MF7yihzfuuM6GshThzVKr9ElJMNe2Yj8BAUNTVa+ct0h7iELMpn/E+p6uX1zC3bYJuYupkaJOTnmXPwpbonRXowKJCSS27tg914qOOIqd+9IkHWl+oe+Tgv3qb0/9j9nOtlsn8K+zRcPLPaHw/2LgbiPefoAl5jualNLznAAAAAASUVORK5CYII=",lt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAABblBMVEUAAADP3P+n1/+80//T3P/S3P/T3f/U3P/J2f/U3v/K2f+3zv650//T3f+60//D1/++1f/R3P/C1fyqyf/b5P/A1/+81P+81P/S3P+61P/M2v+71P+40f/U3P/Q2/+40f/J2v/P2v/I2P/M2v/H2P/D1v/B1/+20v/O2v/////S3P8mbfq30P7L2f+1zv8hbPrN2P8tbfvD1v/G1/8bbPnI1/+60v+zzP6wyv46bfzF1f8ybfu80/9Ibv5Dbv2+0f4/bv1Pb/+tx/6pxP42bfzB1P5Mb/4Qa/hUcP8qbfoYbPjU3f+5zv4VbPfA0/+tyP4UbPm8z/6+1f8ldPno7/5iff5qlv1TfP1gmvtEePtadv/4+f7r7/6Osv1MjPoxe/muv/+Oof9viv+cuP6jwf1/ov18mf1yn/x8rPtalftNhPtAhvqmtv+VqP+Gnv56oP2evPyGrvtnofs5gvoedfd/lP/m7P6Lpf1iiPw4dfrM51GHAAAAKHRSTlMAQweN7ti1i4tYV0fu3dnYpaQhEA7t3s7NtrVcWPn5+e/s3tbNtrS2On5gZAAAA7VJREFUSMd91WlX2kAUBuABBGnRWm3d7b4ZTaJOTIghOhYIbgFZioLWXevWfe+/772TGWoO2lc98uGZ99zcyTmQtkQ6E90dDx50xBOdEfL/RG/1dkwEGcd09N6O3qxvda9JHPxAum/dgCNDa5BAI5UZunamTm5ld+hAsg3fT0jbYtPTwX9tfHzkflj3xUW3lGinNU3jXtOe9YW642sToCXFaIBl0F/tT/BqmBfx/sFhfWurfvhx39RM+A38yNWnRMybzQ9by8uvIYXC/PzmL2oaJkSDv6TUEcBCv68vQ0ADnl9YWNg8MkzDMEyM3OcQasTagcRCLy4unjiOYzhwwHgu7rKlfyAWGjHwubkNzjG3UUe7hTYP2qrnIPlP1HEoHngaleWo33NdEFrifCaz44GX9b1iEqf+ulUNAYw6A7xZ8TxKYaa7wDv4TjTzA1a/e6uE8mYjk5mZOSlRh1JqPIYtCk23sBp12M9A/lRK0A+JkM7gMY19Psd1fGVy8oiVqEcNmiQJ/g4Zzke+vfZhVkBPbkA9tr8kca4Nejgv1sd+BgvJ49SAMRcVxtD3kCcwCpSzutz19jbgPGKpp6a++VaJMUr7yUN8rQ1aKuCuIZuK0gQLGiL0VE11XVb1qEcegjYdygqoYQzgn/JhPDVbU1WrCt4jT6bHsZxtimtsKgqTU0s9u6erllutev0kDuUwOvstL/2NolyEqiGXyF232kNG+CylyjvU+IQ5RZkAjAnw6upqAznUvyRJLKescoQY+cW2onwO6/JOWrXAsxiJAMd2v5kXC/kM13MKWOpisWandeTVCCGPTdPxWMU/ycvteeCPgQtcLH+1g/Z+fIF5O/OzTXkzK8fg13aFLpdrOVtXcXh8gW8j95iv74hdQ3YteADtbK9cLC8tLZ3ZyF3LHQMefYrtME36VF46pLbbOL8MdGMdRsdhBqIE6w3Hg2F83T6/uuvVcrG4BNnNIsdhRgnPcxzG9fV0dkNsT0yNusE1tg+SIBEH61U/bWe/7MldB9Xfz3Kt8hQRSfJ6FeqzudMaapga8ddjrnHrVoy08gLq3QqOAwd2Gpd7s7O1b+dfcjnUwYMOk3+51wPTuL6q2zYeEEGMk+Aod+6Fvg56PMYq4NPoJebVaa77BJT9L2B6SwWftu31dTiDzVIPY3c4Mea6quqjl0mLSWLkmqQGXdeF29LhBI8e4MEUuT6jA65lqRBdBD4OjJIbEx2724UHZLrujkXJfxNNxYbvdD161HXnVSzVZv8CySls258pACEAAAAASUVORK5CYII=",ot="/assets/status-off.b37a701b.svg",it="/assets/status-on.49227811.svg",pt=({enabled:w,label:s,onDoubleClick:i})=>et("div",{onDoubleClick:i,style:{display:"block",padding:"0 5px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",background:"#F3F9FD",border:"0.3px solid #C7D4DC",borderRadius:"10px",boxShadow:"0 2px 4px #F8F9FD",color:"#333",fontSize:"12px",height:"20px",opacity:w?"unset":"0.75"},children:[nt("img",{src:w?it:ot,width:"14",height:"14",style:{marginRight:"2px",verticalAlign:"sub"},alt:""}),s]});export{ut as A,pt as S,ft as g,lt as h};