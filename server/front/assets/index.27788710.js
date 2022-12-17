import{K as vt,h as tt,d as Tt,c as Ft,Q as jt,j as _t}from"./parser.542c3b4e.js";import{r as b,a as D,A as Pt,g as nt,x as pt,v as mt,c as te,e as w,j as Ce,p as Bt,w as rt,i as Ut,d as he,l as gt,D as $t,C as Lt,S as Ht,G as qt}from"./index.64257940.js";import{D as Gt}from"./iconUtil.71342ca5.js";import{h as Fe,K as Ee}from"./Portal.bf2e5144.js";import{i as zt,F as Wt,N as at}from"./context.4fcda71f.js";import{c as it}from"./button.ca276c4e.js";import{a as Xt,g as je}from"./statusUtils.e7207d24.js";var Qt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};const Yt=Qt;var ht=function(t,n){return D(Pt,{...nt(nt({},t),{},{ref:n,icon:Yt})})};ht.displayName="UpOutlined";const Jt=b.exports.forwardRef(ht);function Zt(e){return`"${e.replace(en,tn)}"`}const en=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function tn(e){return nn[e.charCodeAt(0)]}const nn=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],ye=Object.freeze({});function rn(e,t,n=jt){const r=new Map;for(const k of Object.values(vt))r.set(k,yt(t,k));let a,i=Array.isArray(e),s=[e],d=-1,c=[],o=e,f,l;const v=[],I=[];do{d++;const k=d===s.length,F=k&&c.length!==0;if(k){if(f=I.length===0?void 0:v[v.length-1],o=l,l=I.pop(),F)if(i){o=o.slice();let V=0;for(const[_,U]of c){const K=_-V;U===null?(o.splice(K,1),V++):o[K]=U}}else{o=Object.defineProperties({},Object.getOwnPropertyDescriptors(o));for(const[V,_]of c)o[V]=_}d=a.index,s=a.keys,c=a.edits,i=a.inArray,a=a.prev}else if(l){if(f=i?d:s[d],o=l[f],o==null)continue;v.push(f)}let M;if(!Array.isArray(o)){var E,C;tt(o)||Tt(!1,`Invalid AST Node: ${Ft(o)}.`);const V=k?(E=r.get(o.kind))===null||E===void 0?void 0:E.leave:(C=r.get(o.kind))===null||C===void 0?void 0:C.enter;if(M=V==null?void 0:V.call(t,o,f,l,v,I),M===ye)break;if(M===!1){if(!k){v.pop();continue}}else if(M!==void 0&&(c.push([f,M]),!k))if(tt(M))o=M;else{v.pop();continue}}if(M===void 0&&F&&c.push([f,o]),k)v.pop();else{var A;a={inArray:i,index:d,keys:s,edits:c,prev:a},i=Array.isArray(o),s=i?o:(A=n[o.kind])!==null&&A!==void 0?A:[],d=-1,c=[],l&&I.push(l),l=o}}while(a!==void 0);return c.length!==0?c[c.length-1][1]:e}function jn(e){const t=new Array(e.length).fill(null),n=Object.create(null);for(const r of Object.values(vt)){let a=!1;const i=new Array(e.length).fill(void 0),s=new Array(e.length).fill(void 0);for(let c=0;c<e.length;++c){const{enter:o,leave:f}=yt(e[c],r);a||(a=o!=null||f!=null),i[c]=o,s[c]=f}if(!a)continue;const d={enter(...c){const o=c[0];for(let l=0;l<e.length;l++)if(t[l]===null){var f;const v=(f=i[l])===null||f===void 0?void 0:f.apply(e[l],c);if(v===!1)t[l]=o;else if(v===ye)t[l]=ye;else if(v!==void 0)return v}},leave(...c){const o=c[0];for(let l=0;l<e.length;l++)if(t[l]===null){var f;const v=(f=s[l])===null||f===void 0?void 0:f.apply(e[l],c);if(v===ye)t[l]=ye;else if(v!==void 0&&v!==!1)return v}else t[l]===o&&(t[l]=null)}};n[r]=d}return n}function yt(e,t){const n=e[t];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function _n(e){return rn(e,un)}const an=80,un={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>u(e.definitions,`

`)},OperationDefinition:{leave(e){const t=g("(",u(e.variableDefinitions,", "),")"),n=u([e.operation,u([e.name,t]),u(e.directives," ")]," ");return(n==="query"?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:r})=>e+": "+t+g(" = ",n)+g(" ",u(r," "))},SelectionSet:{leave:({selections:e})=>P(e)},Field:{leave({alias:e,name:t,arguments:n,directives:r,selectionSet:a}){const i=g("",e,": ")+t;let s=i+g("(",u(n,", "),")");return s.length>an&&(s=i+g(`(
`,De(u(n,`
`)),`
)`)),u([s,u(r," "),a]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+g(" ",u(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>u(["...",g("on ",e),u(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:r,selectionSet:a})=>`fragment ${e}${g("(",u(n,", "),")")} on ${t} ${g("",u(r," ")," ")}`+a},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?_t(e):Zt(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+u(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+u(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+g("(",u(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>g("",e,`
`)+u(["schema",u(t," "),P(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>g("",e,`
`)+u(["scalar",t,u(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:a})=>g("",e,`
`)+u(["type",t,g("implements ",u(n," & ")),u(r," "),P(a)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:r,directives:a})=>g("",e,`
`)+t+(ut(n)?g(`(
`,De(u(n,`
`)),`
)`):g("(",u(n,", "),")"))+": "+r+g(" ",u(a," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:r,directives:a})=>g("",e,`
`)+u([t+": "+n,g("= ",r),u(a," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:a})=>g("",e,`
`)+u(["interface",t,g("implements ",u(n," & ")),u(r," "),P(a)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:r})=>g("",e,`
`)+u(["union",t,u(n," "),g("= ",u(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:r})=>g("",e,`
`)+u(["enum",t,u(n," "),P(r)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>g("",e,`
`)+u([t,u(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:r})=>g("",e,`
`)+u(["input",t,u(n," "),P(r)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,repeatable:r,locations:a})=>g("",e,`
`)+"directive @"+t+(ut(n)?g(`(
`,De(u(n,`
`)),`
)`):g("(",u(n,", "),")"))+(r?" repeatable":"")+" on "+u(a," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>u(["extend schema",u(e," "),P(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>u(["extend scalar",e,u(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>u(["extend type",e,g("implements ",u(t," & ")),u(n," "),P(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>u(["extend interface",e,g("implements ",u(t," & ")),u(n," "),P(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>u(["extend union",e,u(t," "),g("= ",u(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>u(["extend enum",e,u(t," "),P(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>u(["extend input",e,u(t," "),P(n)]," ")}};function u(e,t=""){var n;return(n=e==null?void 0:e.filter(r=>r).join(t))!==null&&n!==void 0?n:""}function P(e){return g(`{
`,De(u(e,`
`)),`
}`)}function g(e,t,n=""){return t!=null&&t!==""?e+t+n:""}function De(e){return g("  ",e.replace(/\n/g,`
  `))}function ut(e){var t;return(t=e==null?void 0:e.some(n=>n.includes(`
`)))!==null&&t!==void 0?t:!1}var _e=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Pe(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function bt(e,t){for(var n=t.slice(0,t.length-1),r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function St(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function on(e,t){for(var n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,a=!0,i=0;i<n.length;i++)r.indexOf(n[i])===-1&&(a=!1);return a}var be={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":_e?173:189,"=":_e?61:187,";":_e?59:186,"'":222,"[":219,"]":221,"\\":220},H={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},He={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},R={16:!1,18:!1,17:!1,91:!1},O={};for(var Ie=1;Ie<20;Ie++)be["f".concat(Ie)]=111+Ie;var x=[],ot=!1,xt="all",Nt=[],ke=function(t){return be[t.toLowerCase()]||H[t.toLowerCase()]||t.toUpperCase().charCodeAt(0)},ln=function(t){return Object.keys(be).find(function(n){return be[n]===t})},sn=function(t){return Object.keys(H).find(function(n){return H[n]===t})};function wt(e){xt=e||"all"}function Se(){return xt||"all"}function cn(){return x.slice(0)}function fn(){return x.map(function(e){return ln(e)||sn(e)||String.fromCharCode(e)})}function dn(e){var t=e.target||e.srcElement,n=t.tagName,r=!0;return(t.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(r=!1),r}function vn(e){return typeof e=="string"&&(e=ke(e)),x.indexOf(e)!==-1}function pn(e,t){var n,r;e||(e=Se());for(var a in O)if(Object.prototype.hasOwnProperty.call(O,a))for(n=O[a],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++;Se()===e&&wt(t||"all")}function mn(e){var t=e.keyCode||e.which||e.charCode,n=x.indexOf(t);if(n>=0&&x.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&x.splice(0,x.length),(t===93||t===224)&&(t=91),t in R){R[t]=!1;for(var r in H)H[r]===t&&(j[r]=!1)}}function gn(e){if(typeof e>"u")Object.keys(O).forEach(function(s){return delete O[s]});else if(Array.isArray(e))e.forEach(function(s){s.key&&Be(s)});else if(typeof e=="object")e.key&&Be(e);else if(typeof e=="string"){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=n[0],i=n[1];typeof a=="function"&&(i=a,a=""),Be({key:e,scope:a,method:i,splitKey:"+"})}}var Be=function(t){var n=t.key,r=t.scope,a=t.method,i=t.splitKey,s=i===void 0?"+":i,d=St(n);d.forEach(function(c){var o=c.split(s),f=o.length,l=o[f-1],v=l==="*"?"*":ke(l);if(!!O[v]){r||(r=Se());var I=f>1?bt(H,o):[];O[v]=O[v].filter(function(E){var C=a?E.method===a:!0;return!(C&&E.scope===r&&on(E.mods,I))})}})};function lt(e,t,n,r){if(t.element===r){var a;if(t.scope===n||t.scope==="all"){a=t.mods.length>0;for(var i in R)Object.prototype.hasOwnProperty.call(R,i)&&(!R[i]&&t.mods.indexOf(+i)>-1||R[i]&&t.mods.indexOf(+i)===-1)&&(a=!1);(t.mods.length===0&&!R[16]&&!R[18]&&!R[17]&&!R[91]||a||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function st(e,t){var n=O["*"],r=e.keyCode||e.which||e.charCode;if(!!j.filter.call(this,e)){if((r===93||r===224)&&(r=91),x.indexOf(r)===-1&&r!==229&&x.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(E){var C=He[E];e[E]&&x.indexOf(C)===-1?x.push(C):!e[E]&&x.indexOf(C)>-1?x.splice(x.indexOf(C),1):E==="metaKey"&&e[E]&&x.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(x=x.slice(x.indexOf(C))))}),r in R){R[r]=!0;for(var a in H)H[a]===r&&(j[a]=!0);if(!n)return}for(var i in R)Object.prototype.hasOwnProperty.call(R,i)&&(R[i]=e[He[i]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(x.indexOf(17)===-1&&x.push(17),x.indexOf(18)===-1&&x.push(18),R[17]=!0,R[18]=!0);var s=Se();if(n)for(var d=0;d<n.length;d++)n[d].scope===s&&(e.type==="keydown"&&n[d].keydown||e.type==="keyup"&&n[d].keyup)&&lt(e,n[d],s,t);if(r in O){for(var c=0;c<O[r].length;c++)if((e.type==="keydown"&&O[r][c].keydown||e.type==="keyup"&&O[r][c].keyup)&&O[r][c].key){for(var o=O[r][c],f=o.splitKey,l=o.key.split(f),v=[],I=0;I<l.length;I++)v.push(ke(l[I]));v.sort().join("")===x.sort().join("")&&lt(e,o,s,t)}}}}function hn(e){return Nt.indexOf(e)>-1}function j(e,t,n){x=[];var r=St(e),a=[],i="all",s=document,d=0,c=!1,o=!0,f="+",l=!1;for(n===void 0&&typeof t=="function"&&(n=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(i=t.scope),t.element&&(s=t.element),t.keyup&&(c=t.keyup),t.keydown!==void 0&&(o=t.keydown),t.capture!==void 0&&(l=t.capture),typeof t.splitKey=="string"&&(f=t.splitKey)),typeof t=="string"&&(i=t);d<r.length;d++)e=r[d].split(f),a=[],e.length>1&&(a=bt(H,e)),e=e[e.length-1],e=e==="*"?"*":ke(e),e in O||(O[e]=[]),O[e].push({keyup:c,keydown:o,scope:i,mods:a,shortcut:r[d],method:n,key:r[d],splitKey:f,element:s});typeof s<"u"&&!hn(s)&&window&&(Nt.push(s),Pe(s,"keydown",function(v){st(v,s)},l),ot||(ot=!0,Pe(window,"focus",function(){x=[]},l)),Pe(s,"keyup",function(v){st(v,s),mn(v)},l))}function yn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(O).forEach(function(n){var r=O[n].filter(function(a){return a.scope===t&&a.shortcut===e});r.forEach(function(a){a&&a.method&&a.method()})})}var Ue={getPressedKeyString:fn,setScope:wt,getScope:Se,deleteScope:pn,getPressedKeyCodes:cn,isPressed:vn,filter:dn,trigger:yn,unbind:gn,keyMap:be,modifier:H,modifierMap:He};for(var $e in Ue)Object.prototype.hasOwnProperty.call(Ue,$e)&&(j[$e]=Ue[$e]);if(typeof window<"u"){var bn=window.hotkeys;j.noConflict=function(e){return e&&window.hotkeys===j&&(window.hotkeys=bn),j},window.hotkeys=j}const Le={};j.filter=function(e){const t=e.target||e.srcElement,n=t==null?void 0:t.tagName;return!((t==null?void 0:t.isContentEditable)||n=="INPUT"||n=="SELECT")};function Pn(e,...t){const n=t.length===1?void 0:t[0],r=t.length===1?t[0]:t[1];return Le[e]=r,n?j(e,n,r):j(e,r),console.log(`Hotkey: ${e} registed`),()=>{j.unbind(e,Le[e]),delete Le[e],console.log(`Hotkey: ${e} unbind`)}}function qe(){return typeof BigInt=="function"}function ne(e){var t=e.trim(),n=t.startsWith("-");n&&(t=t.slice(1)),t=t.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),t.startsWith(".")&&(t="0".concat(t));var r=t||"0",a=r.split("."),i=a[0]||"0",s=a[1]||"0";i==="0"&&s==="0"&&(n=!1);var d=n?"-":"";return{negative:n,negativeStr:d,trimStr:r,integerStr:i,decimalStr:s,fullStr:"".concat(d).concat(r)}}function Ge(e){var t=String(e);return!Number.isNaN(Number(t))&&t.includes("e")}function xe(e){var t=String(e);if(Ge(e)){var n=Number(t.slice(t.indexOf("e-")+2)),r=t.match(/\.(\d+)/);return r!=null&&r[1]&&(n+=r[1].length),n}return t.includes(".")&&ze(t)?t.length-t.indexOf(".")-1:0}function Ke(e){var t=String(e);if(Ge(e)){if(e>Number.MAX_SAFE_INTEGER)return String(qe()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(qe()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);t=e.toFixed(xe(t))}return ne(t).fullStr}function ze(e){return typeof e=="number"?!Number.isNaN(e):e?/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e):!1}function ct(e){var t=typeof e=="number"?Ke(e):ne(e).fullStr,n=t.includes(".");return n?ne(t.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}var Sn=function(){function e(t){if(mt(this,e),this.origin="",this.number=void 0,this.empty=void 0,!t&&t!==0||!String(t).trim()){this.empty=!0;return}this.origin=String(t),this.number=Number(t)}return pt(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(n){if(this.isInvalidate())return new e(n);var r=Number(n);if(Number.isNaN(r))return this;var a=this.number+r;if(a>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(a<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var i=Math.max(xe(this.number),xe(r));return new e(a.toFixed(i))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(n){return this.toNumber()===(n==null?void 0:n.toNumber())}},{key:"lessEquals",value:function(n){return this.add(n.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n?this.isInvalidate()?"":Ke(this.number):this.origin}}]),e}(),xn=function(){function e(t){if(mt(this,e),this.origin="",this.negative=void 0,this.integer=void 0,this.decimal=void 0,this.decimalLen=void 0,this.empty=void 0,this.nan=void 0,!t&&t!==0||!String(t).trim()){this.empty=!0;return}if(this.origin=String(t),t==="-"){this.nan=!0;return}var n=t;if(Ge(n)&&(n=Number(n)),n=typeof n=="string"?n:Ke(n),ze(n)){var r=ne(n);this.negative=r.negative;var a=r.trimStr.split(".");this.integer=BigInt(a[0]);var i=a[1]||"0";this.decimal=BigInt(i),this.decimalLen=i.length}else this.nan=!0}return pt(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(n){var r="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(n,"0"));return BigInt(r)}},{key:"negate",value:function(){var n=new e(this.toString());return n.negative=!n.negative,n}},{key:"add",value:function(n){if(this.isInvalidate())return new e(n);var r=new e(n);if(r.isInvalidate())return this;var a=Math.max(this.getDecimalStr().length,r.getDecimalStr().length),i=this.alignDecimal(a),s=r.alignDecimal(a),d=(i+s).toString(),c=ne(d),o=c.negativeStr,f=c.trimStr,l="".concat(o).concat(f.padStart(a+1,"0"));return new e("".concat(l.slice(0,-a),".").concat(l.slice(-a)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(n){return this.toString()===(n==null?void 0:n.toString())}},{key:"lessEquals",value:function(n){return this.add(n.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n?this.isInvalidate()?"":ne("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}();function B(e){return qe()?new xn(e):new Sn(e)}function Oe(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(e==="")return"";var a=ne(e),i=a.negativeStr,s=a.integerStr,d=a.decimalStr,c="".concat(t).concat(d),o="".concat(i).concat(s);if(n>=0){var f=Number(d[n]);if(f>=5&&!r){var l=B(e).add("".concat(i,"0.").concat("0".repeat(n)).concat(10-f));return Oe(l.toString(),t,n,r)}return n===0?o:"".concat(o).concat(t).concat(d.padEnd(n,"0").slice(0,n))}return c===".0"?o:"".concat(o).concat(c)}var Nn=200,wn=600;function En(e){var t=e.prefixCls,n=e.upNode,r=e.downNode,a=e.upDisabled,i=e.downDisabled,s=e.onStep,d=b.exports.useRef(),c=b.exports.useRef();c.current=s;var o=function(A,k){A.preventDefault(),c.current(k);function F(){c.current(k),d.current=setTimeout(F,Nn)}d.current=setTimeout(F,wn)},f=function(){clearTimeout(d.current)};if(b.exports.useEffect(function(){return f},[]),zt())return null;var l="".concat(t,"-handler"),v=te(l,"".concat(l,"-up"),w({},"".concat(l,"-up-disabled"),a)),I=te(l,"".concat(l,"-down"),w({},"".concat(l,"-down-disabled"),i)),E={unselectable:"on",role:"button",onMouseUp:f,onMouseLeave:f};return Ce("div",{className:"".concat(l,"-wrap"),children:[D("span",{...E,onMouseDown:function(A){o(A,!0)},"aria-label":"Increase Value","aria-disabled":a,className:v,children:n||D("span",{unselectable:"on",className:"".concat(t,"-handler-up-inner")})}),D("span",{...E,onMouseDown:function(A){o(A,!1)},"aria-label":"Decrease Value","aria-disabled":i,className:I,children:r||D("span",{unselectable:"on",className:"".concat(t,"-handler-down-inner")})})]})}function In(e,t){var n=b.exports.useRef(null);function r(){try{var i=e.selectionStart,s=e.selectionEnd,d=e.value,c=d.substring(0,i),o=d.substring(s);n.current={start:i,end:s,value:d,beforeTxt:c,afterTxt:o}}catch{}}function a(){if(e&&n.current&&t)try{var i=e.value,s=n.current,d=s.beforeTxt,c=s.afterTxt,o=s.start,f=i.length;if(i.endsWith(c))f=i.length-n.current.afterTxt.length;else if(i.startsWith(d))f=d.length;else{var l=d[o-1],v=i.indexOf(l,o-1);v!==-1&&(f=v+1)}e.setSelectionRange(f,f)}catch(I){Bt(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(I.message))}}return[r,a]}const Dn=function(){var e=b.exports.useRef(0),t=function(){rt.cancel(e.current)};return b.exports.useEffect(function(){return t},[]),function(n){t(),e.current=rt(function(){n()})}};var On=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep"],ft=function(t,n){return t||n.isEmpty()?n.toString():n.toNumber()},dt=function(t){var n=B(t);return n.isInvalidate()?null:n},Et=b.exports.forwardRef(function(e,t){var n,r=e.prefixCls,a=r===void 0?"rc-input-number":r,i=e.className,s=e.style,d=e.min,c=e.max,o=e.step,f=o===void 0?1:o,l=e.defaultValue,v=e.value,I=e.disabled,E=e.readOnly,C=e.upHandler,A=e.downHandler,k=e.keyboard,F=e.controls,M=F===void 0?!0:F,V=e.stringMode,_=e.parser,U=e.formatter,K=e.precision,z=e.decimalSeparator,h=e.onChange,Q=e.onInput,Y=e.onPressEnter,ce=e.onStep,re=Ut(e,On),J="".concat(a,"-input"),ae=b.exports.useRef(null),Re=b.exports.useState(!1),Ne=he(Re,2),ie=Ne[0],fe=Ne[1],q=b.exports.useRef(!1),W=b.exports.useRef(!1),Z=b.exports.useRef(!1),ee=b.exports.useState(function(){return B(v!=null?v:l)}),T=he(ee,2),N=T[0],X=T[1];function de(m){v===void 0&&X(m)}var ue=b.exports.useCallback(function(m,p){if(!p)return K>=0?K:Math.max(xe(m),xe(f))},[K,f]),oe=b.exports.useCallback(function(m){var p=String(m);if(_)return _(p);var S=p;return z&&(S=S.replace(z,".")),S.replace(/[^\w.-]+/g,"")},[_,z]),ve=b.exports.useRef(""),we=b.exports.useCallback(function(m,p){if(U)return U(m,{userTyping:p,input:String(ve.current)});var S=typeof m=="number"?Ke(m):m;if(!p){var y=ue(S,p);if(ze(S)&&(z||y>=0)){var L=z||".";S=Oe(S,L,y)}}return S},[U,ue,z]),Ae=b.exports.useState(function(){var m=l!=null?l:v;return N.isInvalidate()&&["string","number"].includes(gt(m))?Number.isNaN(m)?"":m:we(N.toString(),!1)}),pe=he(Ae,2),G=pe[0],$=pe[1];ve.current=G;function me(m,p){$(we(m.isInvalidate()?m.toString(!1):m.toString(!p),p))}var le=b.exports.useMemo(function(){return dt(c)},[c,K]),se=b.exports.useMemo(function(){return dt(d)},[d,K]),We=b.exports.useMemo(function(){return!le||!N||N.isInvalidate()?!1:le.lessEquals(N)},[le,N]),Xe=b.exports.useMemo(function(){return!se||!N||N.isInvalidate()?!1:N.lessEquals(se)},[se,N]),It=In(ae.current,ie),Qe=he(It,2),Dt=Qe[0],Ot=Qe[1],Ye=function(p){return le&&!p.lessEquals(le)?le:se&&!se.lessEquals(p)?se:null},Ve=function(p){return!Ye(p)},Me=function(p,S){var y=p,L=Ve(y)||y.isEmpty();if(!y.isEmpty()&&!S&&(y=Ye(y)||y,L=!0),!E&&!I&&L){var ge=y.toString(),Te=ue(ge,S);return Te>=0&&(y=B(Oe(ge,".",Te)),Ve(y)||(y=B(Oe(ge,".",Te,!0)))),y.equals(N)||(de(y),h==null||h(y.isEmpty()?null:ft(V,y)),v===void 0&&me(y,S)),y}return N},Ct=Dn(),Je=function m(p){if(Dt(),$(p),!W.current){var S=oe(p),y=B(S);y.isNaN()||Me(y,!0)}Q==null||Q(p),Ct(function(){var L=p;_||(L=p.replace(/。/g,".")),L!==p&&m(L)})},kt=function(){W.current=!0},Kt=function(){W.current=!1,Je(ae.current.value)},Rt=function(p){Je(p.target.value)},Ze=function(p){var S;if(!(p&&We||!p&&Xe)){q.current=!1;var y=B(Z.current?ct(f):f);p||(y=y.negate());var L=(N||B(0)).add(y.toString()),ge=Me(L,!1);ce==null||ce(ft(V,ge),{offset:Z.current?ct(f):f,type:p?"up":"down"}),(S=ae.current)===null||S===void 0||S.focus()}},et=function(p){var S=B(oe(G)),y=S;S.isNaN()?y=N:y=Me(S,p),v!==void 0?me(N,!1):y.isNaN()||me(y,!1)},At=function(p){var S=p.which,y=p.shiftKey;q.current=!0,y?Z.current=!0:Z.current=!1,S===Ee.ENTER&&(W.current||(q.current=!1),et(!1),Y==null||Y(p)),k!==!1&&!W.current&&[Ee.UP,Ee.DOWN].includes(S)&&(Ze(Ee.UP===S),p.preventDefault())},Vt=function(){q.current=!1,Z.current=!1},Mt=function(){et(!1),fe(!1),q.current=!1};return Fe(function(){N.isInvalidate()||me(N,!1)},[K]),Fe(function(){var m=B(v);X(m);var p=B(oe(G));(!m.equals(p)||!q.current||U)&&me(m,q.current)},[v]),Fe(function(){U&&Ot()},[G]),Ce("div",{className:te(a,i,(n={},w(n,"".concat(a,"-focused"),ie),w(n,"".concat(a,"-disabled"),I),w(n,"".concat(a,"-readonly"),E),w(n,"".concat(a,"-not-a-number"),N.isNaN()),w(n,"".concat(a,"-out-of-range"),!N.isInvalidate()&&!Ve(N)),n)),style:s,onFocus:function(){fe(!0)},onBlur:Mt,onKeyDown:At,onKeyUp:Vt,onCompositionStart:kt,onCompositionEnd:Kt,children:[M&&D(En,{prefixCls:a,upNode:C,downNode:A,upDisabled:We,downDisabled:Xe,onStep:Ze}),D("div",{className:"".concat(J,"-wrap"),children:D("input",{autoComplete:"off",role:"spinbutton","aria-valuemin":d,"aria-valuemax":c,"aria-valuenow":N.isInvalidate()?null:N.toString(),step:f,...re,ref:$t(ae,t),className:J,value:G,onChange:Rt,disabled:I,readOnly:E})})]})});Et.displayName="InputNumber";var Cn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},kn=b.exports.forwardRef(function(e,t){var n,r=b.exports.useContext(Lt),a=r.getPrefixCls,i=r.direction,s=b.exports.useContext(Ht),d=b.exports.useState(!1),c=he(d,2),o=c[0],f=c[1],l=b.exports.useRef(null);b.exports.useImperativeHandle(t,function(){return l.current});var v=e.className,I=e.size,E=e.disabled,C=e.prefixCls,A=e.addonBefore,k=e.addonAfter,F=e.prefix,M=e.bordered,V=M===void 0?!0:M,_=e.readOnly,U=e.status,K=e.controls,z=Cn(e,["className","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls"]),h=a("input-number",C),Q=D(Jt,{className:"".concat(h,"-handler-up-inner")}),Y=D(Gt,{className:"".concat(h,"-handler-down-inner")}),ce=typeof K=="boolean"?K:void 0;gt(K)==="object"&&(Q=typeof K.upIcon>"u"?Q:D("span",{className:"".concat(h,"-handler-up-inner"),children:K.upIcon}),Y=typeof K.downIcon>"u"?Y:D("span",{className:"".concat(h,"-handler-down-inner"),children:K.downIcon}));var re=b.exports.useContext(Wt),J=re.hasFeedback,ae=re.status,Re=re.isFormItemInput,Ne=re.feedbackIcon,ie=Xt(ae,U),fe=I||s,q=b.exports.useContext(qt),W=E||q,Z=te((n={},w(n,"".concat(h,"-lg"),fe==="large"),w(n,"".concat(h,"-sm"),fe==="small"),w(n,"".concat(h,"-rtl"),i==="rtl"),w(n,"".concat(h,"-borderless"),!V),w(n,"".concat(h,"-in-form-item"),Re),n),je(h,ie),v),ee=D(Et,{ref:l,disabled:W,className:Z,upHandler:Q,downHandler:Y,prefixCls:h,readOnly:_,controls:ce,...z});if(F!=null||J){var T,N=te("".concat(h,"-affix-wrapper"),je("".concat(h,"-affix-wrapper"),ie,J),(T={},w(T,"".concat(h,"-affix-wrapper-focused"),o),w(T,"".concat(h,"-affix-wrapper-disabled"),e.disabled),w(T,"".concat(h,"-affix-wrapper-sm"),s==="small"),w(T,"".concat(h,"-affix-wrapper-lg"),s==="large"),w(T,"".concat(h,"-affix-wrapper-rtl"),i==="rtl"),w(T,"".concat(h,"-affix-wrapper-readonly"),_),w(T,"".concat(h,"-affix-wrapper-borderless"),!V),w(T,"".concat(v),!(A||k)&&v),T));ee=Ce("div",{className:N,style:e.style,onMouseUp:function(){return l.current.focus()},children:[F&&D("span",{className:"".concat(h,"-prefix"),children:F}),it(ee,{style:null,value:e.value,onFocus:function(G){var $;f(!0),($=e.onFocus)===null||$===void 0||$.call(e,G)},onBlur:function(G){var $;f(!1),($=e.onBlur)===null||$===void 0||$.call(e,G)}}),J&&D("span",{className:"".concat(h,"-suffix"),children:Ne})]})}if(A!=null||k!=null){var X,de="".concat(h,"-group"),ue="".concat(de,"-addon"),oe=A?D("div",{className:ue,children:A}):null,ve=k?D("div",{className:ue,children:k}):null,we=te("".concat(h,"-wrapper"),de,w({},"".concat(de,"-rtl"),i==="rtl")),Ae=te("".concat(h,"-group-wrapper"),(X={},w(X,"".concat(h,"-group-wrapper-sm"),s==="small"),w(X,"".concat(h,"-group-wrapper-lg"),s==="large"),w(X,"".concat(h,"-group-wrapper-rtl"),i==="rtl"),X),je("".concat(h,"-group-wrapper"),ie,J),v);ee=D("div",{className:Ae,style:e.style,children:Ce("div",{className:we,children:[oe&&D(at,{status:!0,override:!0,children:oe}),it(ee,{style:null,disabled:W}),ve&&D(at,{status:!0,override:!0,children:ve})]})})}return ee});const Bn=kn;export{ye as B,Bn as I,jn as a,yt as g,_n as p,Pn as r,rn as v};