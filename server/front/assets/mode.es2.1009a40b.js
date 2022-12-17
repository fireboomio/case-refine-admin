import{C as a}from"./codemirror.es.f9aaa881.js";import{o as u,p as r,l,t as i}from"./types.es.cd67e374.js";import"./index.3992c1fc.js";import"./index.64257940.js";import"./index.5b2f5049.js";import"./Dropdown.66094b27.js";import"./index.61964446.js";import"./Portal.bf2e5144.js";import"./type.4482a080.js";import"./Overflow.ff04d686.js";import"./statusUtils.e7207d24.js";import"./context.4fcda71f.js";import"./_baseIsEqual.ae1f3f6e.js";import"./omit.173224d8.js";import"./PlusOutlined.3088ee84.js";import"./Tree.0082570b.js";import"./isSymbol.d728fe31.js";import"./index.39cec35d.js";import"./pickAttrs.91b30b21.js";import"./conductUtil.91a30912.js";import"./iconUtil.71342ca5.js";import"./SearchOutlined.d2d234c2.js";import"./button.ca276c4e.js";import"./Helmet.90e2ca49.js";import"./index.d4e5ccca.js";import"./index.bf34cfca.js";import"./isArrayLikeObject.9676d780.js";import"./get.ab779695.js";import"./identity.af5bbf98.js";import"./_copyArray.ed92a2fd.js";import"./index.9d56ca15.js";import"./row.04cc9265.js";import"./styleChecker.9486324a.js";import"./responsiveObserve.a761adf9.js";import"./index.27788710.js";import"./parser.542c3b4e.js";import"./index.4ef503cf.js";import"./workbenchContext.4d536977.js";import"./index.e3184aa5.js";import"./index.21d0aee3.js";import"./utils.435ff07e.js";import"./DialogWrap.ed68ac9f.js";import"./index.e073bbb6.js";import"./path.02380b0b.js";import"./Editor.88c5e82e.js";import"./use-immer.module.72e4ecef.js";import"./index.70ebfd77.js";import"./stackblitz.d6583d31.js";import"./index.46a9404e.js";import"./dayjs.min.9104a23a.js";import"./DoubleRightOutlined.d12d812f.js";import"./index.93b57069.js";import"./EyeOutlined.8d71b64e.js";import"./index.e257c064.js";import"./RightOutlined.ce6e99f7.js";import"./Sider.4bd14ece.js";import"./index.114f7a19.js";import"./main.6509447f.js";import"./index.e939beeb.js";import"./index.c6a78d56.js";import"./index.5c556af0.js";import"./utils.02fb0c25.js";import"./DeleteOutlined.ab1eeec0.js";import"./index.22218f67.js";import"./main.5d92847d.js";var s=Object.defineProperty,c=(t,e)=>s(t,"name",{value:e,configurable:!0});a.defineMode("graphql-results",t=>{const e=u({eatWhitespace:o=>o.eatSpace(),lexRules:d,parseRules:b,editorConfig:{tabSize:t.tabSize}});return{config:t,startState:e.startState,token:e.token,indent:n,electricInput:/^\s*[}\]]/,fold:"brace",closeBrackets:{pairs:'[]{}""',explode:"[]{}"}}});function n(t,e){var o,m;const p=t.levels;return((!p||p.length===0?t.indentLevel:p[p.length-1]-(!((o=this.electricInput)===null||o===void 0)&&o.test(e)?1:0))||0)*(((m=this.config)===null||m===void 0?void 0:m.indentUnit)||0)}c(n,"indent");const d={Punctuation:/^\[|]|\{|\}|:|,/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,Keyword:/^true|false|null/},b={Document:[r("{"),l("Entry",r(",")),r("}")],Entry:[i("String","def"),r(":"),"Value"],Value(t){switch(t.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(t.value){case"[":return"ListValue";case"{":return"ObjectValue"}return null;case"Keyword":switch(t.value){case"true":case"false":return"BooleanValue";case"null":return"NullValue"}return null}},NumberValue:[i("Number","number")],StringValue:[i("String","string")],BooleanValue:[i("Keyword","builtin")],NullValue:[i("Keyword","keyword")],ListValue:[r("["),l("Value",r(",")),r("]")],ObjectValue:[r("{"),l("ObjectField",r(",")),r("}")],ObjectField:[i("String","property"),r(":"),"Value"]};
