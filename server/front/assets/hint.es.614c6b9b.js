import{C}from"./codemirror.es.f9aaa881.js";import"./show-hint.es.89d67636.js";import{R as o,C as E,I as fe,o as me}from"./types.es.cd67e374.js";import{P as Te,C as w}from"./Range.es.dcc00501.js";import{S as Y,T as Q,a as J}from"./introspection.es.abd5dc76.js";import{d as ge}from"./index.3992c1fc.js";import"./index.64257940.js";import{u as A,t as F,w as Ee,S as ve,T as Se,L as H,M as O,c as ye,b as Ie,N as De,h as Fe,a as K,i as Ne,O as P,P as z,Q as be,v as _e,s as Ae}from"./index.bf34cfca.js";import{D as g,g as ke,K as $}from"./parser.542c3b4e.js";import{v as Oe}from"./index.27788710.js";import"./index.5b2f5049.js";import"./Dropdown.66094b27.js";import"./index.61964446.js";import"./Portal.bf2e5144.js";import"./type.4482a080.js";import"./Overflow.ff04d686.js";import"./statusUtils.e7207d24.js";import"./context.4fcda71f.js";import"./_baseIsEqual.ae1f3f6e.js";import"./omit.173224d8.js";import"./PlusOutlined.3088ee84.js";import"./Tree.0082570b.js";import"./isSymbol.d728fe31.js";import"./index.39cec35d.js";import"./pickAttrs.91b30b21.js";import"./conductUtil.91a30912.js";import"./iconUtil.71342ca5.js";import"./SearchOutlined.d2d234c2.js";import"./button.ca276c4e.js";import"./Helmet.90e2ca49.js";import"./index.d4e5ccca.js";import"./isArrayLikeObject.9676d780.js";import"./get.ab779695.js";import"./identity.af5bbf98.js";import"./_copyArray.ed92a2fd.js";import"./index.9d56ca15.js";import"./row.04cc9265.js";import"./styleChecker.9486324a.js";import"./responsiveObserve.a761adf9.js";import"./index.4ef503cf.js";import"./workbenchContext.4d536977.js";import"./index.e3184aa5.js";import"./index.21d0aee3.js";import"./utils.435ff07e.js";import"./DialogWrap.ed68ac9f.js";import"./index.e073bbb6.js";import"./path.02380b0b.js";import"./Editor.88c5e82e.js";import"./use-immer.module.72e4ecef.js";import"./index.70ebfd77.js";import"./stackblitz.d6583d31.js";import"./index.46a9404e.js";import"./dayjs.min.9104a23a.js";import"./DoubleRightOutlined.d12d812f.js";import"./index.93b57069.js";import"./EyeOutlined.8d71b64e.js";import"./index.e257c064.js";import"./RightOutlined.ce6e99f7.js";import"./Sider.4bd14ece.js";import"./index.114f7a19.js";import"./main.6509447f.js";import"./index.e939beeb.js";import"./index.c6a78d56.js";import"./index.5c556af0.js";import"./utils.02fb0c25.js";import"./DeleteOutlined.ab1eeec0.js";import"./index.22218f67.js";import"./main.5d92847d.js";var Me=Object.defineProperty,m=(n,r)=>Me(n,"name",{value:r,configurable:!0});function W(n){let r;return j(n,i=>{switch(i.kind){case"Query":case"ShortQuery":case"Mutation":case"Subscription":case"FragmentDefinition":r=i;break}}),r}m(W,"getDefinitionState");function V(n,r,i){return i===Y.name&&n.getQueryType()===r?Y:i===Q.name&&n.getQueryType()===r?Q:i===J.name&&F(r)?J:"getFields"in r?r.getFields()[i]:null}m(V,"getFieldDef");function j(n,r){const i=[];let t=n;for(;t!=null&&t.kind;)i.push(t),t=t.prevState;for(let e=i.length-1;e>=0;e--)r(i[e])}m(j,"forEachState");function N(n){const r=Object.keys(n),i=r.length,t=new Array(i);for(let e=0;e<i;++e)t[e]=n[r[e]];return t}m(N,"objectValues");function I(n,r){return X(r,G(n.string))}m(I,"hintList");function X(n,r){if(!r)return h(n,t=>!t.isDeprecated);const i=n.map(t=>({proximity:Z(G(t.label),r),entry:t}));return h(h(i,t=>t.proximity<=2),t=>!t.entry.isDeprecated).sort((t,e)=>(t.entry.isDeprecated?1:0)-(e.entry.isDeprecated?1:0)||t.proximity-e.proximity||t.entry.label.length-e.entry.label.length).map(t=>t.entry)}m(X,"filterAndSortList");function h(n,r){const i=n.filter(r);return i.length===0?n:i}m(h,"filterNonEmpty");function G(n){return n.toLowerCase().replace(/\W/g,"")}m(G,"normalizeText");function Z(n,r){let i=q(r,n);return n.length>r.length&&(i-=n.length-r.length-1,i+=n.indexOf(r)===0?0:.5),i}m(Z,"getProximity");function q(n,r){let i,t;const e=[],l=n.length,a=r.length;for(i=0;i<=l;i++)e[i]=[i];for(t=1;t<=a;t++)e[0][t]=t;for(i=1;i<=l;i++)for(t=1;t<=a;t++){const c=n[i-1]===r[t-1]?0:1;e[i][t]=Math.min(e[i-1][t]+1,e[i][t-1]+1,e[i-1][t-1]+c),i>1&&t>1&&n[i-1]===r[t-2]&&n[i-2]===r[t-1]&&(e[i][t]=Math.min(e[i][t],e[i-2][t-2]+c))}return e[l][a]}m(q,"lexicalDistance");const ee={command:"editor.action.triggerSuggest",title:"Suggestions"},Le=m(n=>{const r=[];if(n)try{Oe(ke(n),{FragmentDefinition(i){r.push(i)}})}catch{return[]}return r},"collectFragmentDefs");function te(n,r,i,t,e,l){var a;const c=Object.assign(Object.assign({},l),{schema:n}),s=t||ce(r,i),p=s.state.kind==="Invalid"?s.state.prevState:s.state;if(!p)return[];const d=p.kind,T=p.step,S=de(n,s.state);if(d===o.DOCUMENT)return I(s,[{label:"query",kind:E.Function},{label:"mutation",kind:E.Function},{label:"subscription",kind:E.Function},{label:"fragment",kind:E.Function},{label:"{",kind:E.Constructor}]);if(d===o.IMPLEMENTS||d===o.NAMED_TYPE&&((a=p.prevState)===null||a===void 0?void 0:a.kind)===o.IMPLEMENTS)return re(s,p,n,r,S);if(d===o.SELECTION_SET||d===o.FIELD||d===o.ALIASED_FIELD)return ne(s,S,c);if(d===o.ARGUMENTS||d===o.ARGUMENT&&T===0){const u=S.argDefs;if(u)return I(s,u.map(f=>{var v;return{label:f.name,insertText:f.name+": ",command:ee,detail:String(f.type),documentation:(v=f.description)!==null&&v!==void 0?v:void 0,kind:E.Variable,type:f.type}}))}if((d===o.OBJECT_VALUE||d===o.OBJECT_FIELD&&T===0)&&S.objectFieldDefs){const u=N(S.objectFieldDefs),f=d===o.OBJECT_VALUE?E.Value:E.Field;return I(s,u.map(v=>{var D;return{label:v.name,detail:String(v.type),documentation:(D=v.description)!==null&&D!==void 0?D:void 0,kind:f,type:v.type}}))}if(d===o.ENUM_VALUE||d===o.LIST_VALUE&&T===1||d===o.OBJECT_FIELD&&T===2||d===o.ARGUMENT&&T===2)return ie(s,S,r,n);if(d===o.VARIABLE&&T===1){const u=A(S.inputType),f=B(r,n,s);return I(s,f.filter(v=>v.detail===(u==null?void 0:u.name)))}return d===o.TYPE_CONDITION&&T===1||d===o.NAMED_TYPE&&p.prevState!=null&&p.prevState.kind===o.TYPE_CONDITION?oe(s,S,n):d===o.FRAGMENT_SPREAD&&T===1?ae(s,S,n,r,Array.isArray(e)?e:Le(e)):d===o.VARIABLE_DEFINITION&&T===2||d===o.LIST_TYPE&&T===1||d===o.NAMED_TYPE&&p.prevState&&(p.prevState.kind===o.VARIABLE_DEFINITION||p.prevState.kind===o.LIST_TYPE||p.prevState.kind===o.NON_NULL_TYPE)?le(s,n):d===o.DIRECTIVE?pe(s,p,n):[]}m(te,"getAutocompleteSuggestions");const R=` {
  $1
}`,Ce=m(n=>{const r=n.type;return F(r)||K(r)&&F(r.ofType)||Ne(r)&&(F(r.ofType)||K(r.ofType)&&F(r.ofType.ofType))?R:null},"getInsertText");function ne(n,r,i){var t;if(r.parentType){const e=r.parentType;let l=[];return"getFields"in e&&(l=N(e.getFields())),F(e)&&l.push(Ee),e===((t=i==null?void 0:i.schema)===null||t===void 0?void 0:t.getQueryType())&&l.push(ve,Se),I(n,l.map((a,c)=>{var s;const p={sortText:String(c)+a.name,label:a.name,detail:String(a.type),documentation:(s=a.description)!==null&&s!==void 0?s:void 0,deprecated:Boolean(a.deprecationReason),isDeprecated:Boolean(a.deprecationReason),deprecationReason:a.deprecationReason,kind:E.Field,type:a.type},d=Ce(a);return d&&(p.insertText=a.name+d,p.insertTextFormat=fe.Snippet,p.command=ee),p}))}return[]}m(ne,"getSuggestionsForFieldNames");function ie(n,r,i,t){const e=A(r.inputType),l=B(i,t,n).filter(a=>a.detail===e.name);if(e instanceof H){const a=e.getValues();return I(n,a.map(c=>{var s;return{label:c.name,detail:String(e),documentation:(s=c.description)!==null&&s!==void 0?s:void 0,deprecated:Boolean(c.deprecationReason),isDeprecated:Boolean(c.deprecationReason),deprecationReason:c.deprecationReason,kind:E.EnumMember,type:e}}).concat(l))}else if(e===O)return I(n,l.concat([{label:"true",detail:String(O),documentation:"Not false.",kind:E.Variable,type:O},{label:"false",detail:String(O),documentation:"Not true.",kind:E.Variable,type:O}]));return l}m(ie,"getSuggestionsForInputValues");function re(n,r,i,t,e){if(r.needsSeperator)return[];const l=i.getTypeMap(),a=N(l).filter(ye),c=a.map(({name:u})=>u),s=new Set;M(t,(u,f)=>{var v,D,_,b,y;if(f.name&&(f.kind===o.INTERFACE_DEF&&!c.includes(f.name)&&s.add(f.name),f.kind===o.NAMED_TYPE&&((v=f.prevState)===null||v===void 0?void 0:v.kind)===o.IMPLEMENTS)){if(e.interfaceDef){if((D=e.interfaceDef)===null||D===void 0?void 0:D.getInterfaces().find(({name:x})=>x===f.name))return;const U=i.getType(f.name),k=(_=e.interfaceDef)===null||_===void 0?void 0:_.toConfig();e.interfaceDef=new P(Object.assign(Object.assign({},k),{interfaces:[...k.interfaces,U||new P({name:f.name,fields:{}})]}))}else if(e.objectTypeDef){if((b=e.objectTypeDef)===null||b===void 0?void 0:b.getInterfaces().find(({name:x})=>x===f.name))return;const U=i.getType(f.name),k=(y=e.objectTypeDef)===null||y===void 0?void 0:y.toConfig();e.objectTypeDef=new z(Object.assign(Object.assign({},k),{interfaces:[...k.interfaces,U||new P({name:f.name,fields:{}})]}))}}});const p=e.interfaceDef||e.objectTypeDef,T=((p==null?void 0:p.getInterfaces())||[]).map(({name:u})=>u),S=a.concat([...s].map(u=>({name:u}))).filter(({name:u})=>u!==(p==null?void 0:p.name)&&!T.includes(u));return I(n,S.map(u=>{const f={label:u.name,kind:E.Interface,type:u};return u!=null&&u.description&&(f.documentation=u.description),f}))}m(re,"getSuggestionsForImplements");function oe(n,r,i,t){let e;if(r.parentType)if(Ie(r.parentType)){const l=De(r.parentType),a=i.getPossibleTypes(l),c=Object.create(null);a.forEach(s=>{s.getInterfaces().forEach(p=>{c[p.name]=p})}),e=a.concat(N(c))}else e=[r.parentType];else{const l=i.getTypeMap();e=N(l).filter(F)}return I(n,e.map(l=>{const a=A(l);return{label:String(l),documentation:(a==null?void 0:a.description)||"",kind:E.Field}}))}m(oe,"getSuggestionsForFragmentTypeConditions");function ae(n,r,i,t,e){if(!t)return[];const l=i.getTypeMap(),a=W(n.state),c=se(t);e&&e.length>0&&c.push(...e);const s=c.filter(p=>l[p.typeCondition.name.value]&&!(a&&a.kind===o.FRAGMENT_DEFINITION&&a.name===p.name.value)&&F(r.parentType)&&F(l[p.typeCondition.name.value])&&ge(i,r.parentType,l[p.typeCondition.name.value]));return I(n,s.map(p=>({label:p.name.value,detail:String(l[p.typeCondition.name.value]),documentation:`fragment ${p.name.value} on ${p.typeCondition.name.value}`,kind:E.Field,type:l[p.typeCondition.name.value]})))}m(ae,"getSuggestionsForFragmentSpread");const Re=m((n,r)=>{var i,t,e,l,a,c,s,p,d,T;if(((i=n.prevState)===null||i===void 0?void 0:i.kind)===r)return n.prevState;if(((e=(t=n.prevState)===null||t===void 0?void 0:t.prevState)===null||e===void 0?void 0:e.kind)===r)return n.prevState.prevState;if(((c=(a=(l=n.prevState)===null||l===void 0?void 0:l.prevState)===null||a===void 0?void 0:a.prevState)===null||c===void 0?void 0:c.kind)===r)return n.prevState.prevState.prevState;if(((T=(d=(p=(s=n.prevState)===null||s===void 0?void 0:s.prevState)===null||p===void 0?void 0:p.prevState)===null||d===void 0?void 0:d.prevState)===null||T===void 0?void 0:T.kind)===r)return n.prevState.prevState.prevState.prevState},"getParentDefinition");function B(n,r,i){let t=null,e;const l=Object.create({});return M(n,(a,c)=>{if((c==null?void 0:c.kind)===o.VARIABLE&&c.name&&(t=c.name),(c==null?void 0:c.kind)===o.NAMED_TYPE&&t){const s=Re(c,o.TYPE);s!=null&&s.type&&(e=r.getType(s==null?void 0:s.type))}t&&e&&(l[t]||(l[t]={detail:e.toString(),insertText:i.string==="$"?t:"$"+t,label:t,type:e,kind:E.Variable},t=null,e=null))}),N(l)}m(B,"getVariableCompletions");function se(n){const r=[];return M(n,(i,t)=>{t.kind===o.FRAGMENT_DEFINITION&&t.name&&t.type&&r.push({kind:o.FRAGMENT_DEFINITION,name:{kind:$.NAME,value:t.name},selectionSet:{kind:o.SELECTION_SET,selections:[]},typeCondition:{kind:o.NAMED_TYPE,name:{kind:$.NAME,value:t.type}}})}),r}m(se,"getFragmentDefinitions");function le(n,r,i){const t=r.getTypeMap(),e=N(t).filter(Fe);return I(n,e.map(l=>({label:l.name,documentation:l.description,kind:E.Variable})))}m(le,"getSuggestionsForVariableDefinition");function pe(n,r,i,t){var e;if(!((e=r.prevState)===null||e===void 0)&&e.kind){const l=i.getDirectives().filter(a=>ue(r.prevState,a));return I(n,l.map(a=>({label:a.name,documentation:a.description||"",kind:E.Function})))}return[]}m(pe,"getSuggestionsForDirective");function ce(n,r){let i=null,t=null,e=null;const l=M(n,(a,c,s,p)=>{if(p===r.line&&a.getCurrentPosition()>=r.character)return i=s,t=Object.assign({},c),e=a.current(),"BREAK"});return{start:l.start,end:l.end,string:e||l.string,state:t||l.state,style:i||l.style}}m(ce,"getTokenAtPosition");function M(n,r){const i=n.split(`
`),t=me();let e=t.startState(),l="",a=new w("");for(let c=0;c<i.length;c++){for(a=new w(i[c]);!a.eol()&&(l=t.token(a,e),r(a,e,l,c)!=="BREAK"););r(a,e,l,c),e.kind||(e=t.startState())}return{start:a.getStartOfToken(),end:a.getCurrentPosition(),string:a.current(),state:e,style:l}}m(M,"runOnlineParser");function ue(n,r){var i;if(!n||!n.kind)return!1;const t=n.kind,e=r.locations;switch(t){case o.QUERY:return e.indexOf(g.QUERY)!==-1;case o.MUTATION:return e.indexOf(g.MUTATION)!==-1;case o.SUBSCRIPTION:return e.indexOf(g.SUBSCRIPTION)!==-1;case o.FIELD:case o.ALIASED_FIELD:return e.indexOf(g.FIELD)!==-1;case o.FRAGMENT_DEFINITION:return e.indexOf(g.FRAGMENT_DEFINITION)!==-1;case o.FRAGMENT_SPREAD:return e.indexOf(g.FRAGMENT_SPREAD)!==-1;case o.INLINE_FRAGMENT:return e.indexOf(g.INLINE_FRAGMENT)!==-1;case o.SCHEMA_DEF:return e.indexOf(g.SCHEMA)!==-1;case o.SCALAR_DEF:return e.indexOf(g.SCALAR)!==-1;case o.OBJECT_TYPE_DEF:return e.indexOf(g.OBJECT)!==-1;case o.FIELD_DEF:return e.indexOf(g.FIELD_DEFINITION)!==-1;case o.INTERFACE_DEF:return e.indexOf(g.INTERFACE)!==-1;case o.UNION_DEF:return e.indexOf(g.UNION)!==-1;case o.ENUM_DEF:return e.indexOf(g.ENUM)!==-1;case o.ENUM_VALUE:return e.indexOf(g.ENUM_VALUE)!==-1;case o.INPUT_DEF:return e.indexOf(g.INPUT_OBJECT)!==-1;case o.INPUT_VALUE_DEF:switch((i=n.prevState)===null||i===void 0?void 0:i.kind){case o.ARGUMENTS_DEF:return e.indexOf(g.ARGUMENT_DEFINITION)!==-1;case o.INPUT_DEF:return e.indexOf(g.INPUT_FIELD_DEFINITION)!==-1}}return!1}m(ue,"canUseDirective");function de(n,r){let i,t,e,l,a,c,s,p,d,T,S;return j(r,u=>{var f;switch(u.kind){case o.QUERY:case"ShortQuery":T=n.getQueryType();break;case o.MUTATION:T=n.getMutationType();break;case o.SUBSCRIPTION:T=n.getSubscriptionType();break;case o.INLINE_FRAGMENT:case o.FRAGMENT_DEFINITION:u.type&&(T=n.getType(u.type));break;case o.FIELD:case o.ALIASED_FIELD:{!T||!u.name?a=null:(a=d?V(n,d,u.name):null,T=a?a.type:null);break}case o.SELECTION_SET:d=A(T);break;case o.DIRECTIVE:e=u.name?n.getDirective(u.name):null;break;case o.INTERFACE_DEF:u.name&&(s=null,S=new P({name:u.name,interfaces:[],fields:{}}));break;case o.OBJECT_TYPE_DEF:u.name&&(S=null,s=new z({name:u.name,interfaces:[],fields:{}}));break;case o.ARGUMENTS:{if(!u.prevState)t=null;else switch(u.prevState.kind){case o.FIELD:t=a&&a.args;break;case o.DIRECTIVE:t=e&&e.args;break;case o.ALIASED_FIELD:{const y=(f=u.prevState)===null||f===void 0?void 0:f.name;if(!y){t=null;break}const L=d?V(n,d,y):null;if(!L){t=null;break}t=L.args;break}default:t=null;break}break}case o.ARGUMENT:if(t){for(let y=0;y<t.length;y++)if(t[y].name===u.name){i=t[y];break}}c=i==null?void 0:i.type;break;case o.ENUM_VALUE:const v=A(c);l=v instanceof H?v.getValues().find(y=>y.value===u.name):null;break;case o.LIST_VALUE:const D=_e(c);c=D instanceof Ae?D.ofType:null;break;case o.OBJECT_VALUE:const _=A(c);p=_ instanceof be?_.getFields():null;break;case o.OBJECT_FIELD:const b=u.name&&p?p[u.name]:null;c=b==null?void 0:b.type;break;case o.NAMED_TYPE:u.name&&(T=n.getType(u.name));break}}),{argDef:i,argDefs:t,directiveDef:e,enumValue:l,fieldDef:a,inputType:c,objectFieldDefs:p,parentType:d,type:T,interfaceDef:S,objectTypeDef:s}}m(de,"getTypeInfo");C.registerHelper("hint","graphql",(n,r)=>{const i=r.schema;if(!i)return;const t=n.getCursor(),e=n.getTokenAt(t),l=e.type!==null&&/"|\w/.test(e.string[0])?e.start:e.end,a=new Te(t.line,l),s={list:te(i,n.getValue(),a,e,r.externalFragments).map(p=>({text:p.label,type:p.type,description:p.documentation,isDeprecated:p.isDeprecated,deprecationReason:p.deprecationReason})),from:{line:t.line,ch:l},to:{line:t.line,ch:e.end}};return(s==null?void 0:s.list)&&s.list.length>0&&(s.from=C.Pos(s.from.line,s.from.ch),s.to=C.Pos(s.to.line,s.to.ch),C.signal(n,"hasCompletion",n,s,e)),s});
