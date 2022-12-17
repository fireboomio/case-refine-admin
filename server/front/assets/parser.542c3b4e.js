function C(e,t){if(!Boolean(e))throw new Error(t)}function X(e){return typeof e=="object"&&e!==null}function z(e,t){if(!Boolean(e))throw new Error(t!=null?t:"Unexpected invariant triggered.")}const H=/\r\n|[\n\r]/g;function g(e,t){let n=0,s=1;for(const i of e.body.matchAll(H)){if(typeof i.index=="number"||z(!1),i.index>=t)break;n=i.index+i[0].length,s+=1}return{line:s,column:t+1-n}}function q(e){return M(e.source,g(e.source,e.start))}function M(e,t){const n=e.locationOffset.column-1,s="".padStart(n)+e.body,i=t.line-1,o=e.locationOffset.line-1,a=t.line+o,u=t.line===1?n:0,h=t.column+u,f=`${e.name}:${a}:${h}
`,p=s.split(/\r\n|[\n\r]/g),N=p[i];if(N.length>120){const T=Math.floor(h/80),I=h%80,E=[];for(let x=0;x<N.length;x+=80)E.push(N.slice(x,x+80));return f+w([[`${a} |`,E[0]],...E.slice(1,T+1).map(x=>["|",x]),["|","^".padStart(I)],["|",E[T+1]]])}return f+w([[`${a-1} |`,p[i-1]],[`${a} |`,N],["|","^".padStart(h)],[`${a+1} |`,p[i+1]]])}function w(e){const t=e.filter(([s,i])=>i!==void 0),n=Math.max(...t.map(([s])=>s.length));return t.map(([s,i])=>s.padStart(n)+(i?" "+i:"")).join(`
`)}function W(e){const t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}class b extends Error{constructor(t,...n){var s,i,o;const{nodes:a,source:u,positions:h,path:f,originalError:p,extensions:N}=W(n);super(t),this.name="GraphQLError",this.path=f!=null?f:void 0,this.originalError=p!=null?p:void 0,this.nodes=P(Array.isArray(a)?a:a?[a]:void 0);const T=P((s=this.nodes)===null||s===void 0?void 0:s.map(E=>E.loc).filter(E=>E!=null));this.source=u!=null?u:T==null||(i=T[0])===null||i===void 0?void 0:i.source,this.positions=h!=null?h:T==null?void 0:T.map(E=>E.start),this.locations=h&&u?h.map(E=>g(u,E)):T==null?void 0:T.map(E=>g(E.source,E.start));const I=X(p==null?void 0:p.extensions)?p==null?void 0:p.extensions:void 0;this.extensions=(o=N!=null?N:I)!==null&&o!==void 0?o:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),p!=null&&p.stack?Object.defineProperty(this,"stack",{value:p.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,b):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(t+=`

`+q(n.loc));else if(this.source&&this.locations)for(const n of this.locations)t+=`

`+M(this.source,n);return t}toJSON(){const t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}}function P(e){return e===void 0||e.length===0?void 0:e}function d(e,t,n){return new b(`Syntax Error: ${n}`,{source:e,positions:[t]})}class Z{constructor(t,n,s){this.start=t.start,this.end=n.end,this.startToken=t,this.endToken=n,this.source=s}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class B{constructor(t,n,s,i,o,a){this.kind=t,this.start=n,this.end=s,this.line=i,this.column=o,this.value=a,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const K={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},ee=new Set(Object.keys(K));function ye(e){const t=e==null?void 0:e.kind;return typeof t=="string"&&ee.has(t)}var O;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(O||(O={}));var L;(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(L||(L={}));var c;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(c||(c={}));function R(e){return e===9||e===32}function y(e){return e>=48&&e<=57}function V(e){return e>=97&&e<=122||e>=65&&e<=90}function j(e){return V(e)||e===95}function te(e){return V(e)||y(e)||e===95}function ne(e){var t;let n=Number.MAX_SAFE_INTEGER,s=null,i=-1;for(let a=0;a<e.length;++a){var o;const u=e[a],h=ie(u);h!==u.length&&(s=(o=s)!==null&&o!==void 0?o:a,i=a,a!==0&&h<n&&(n=h))}return e.map((a,u)=>u===0?a:a.slice(n)).slice((t=s)!==null&&t!==void 0?t:0,i+1)}function ie(e){let t=0;for(;t<e.length&&R(e.charCodeAt(t));)++t;return t}function De(e,t){const n=e.replace(/"""/g,'\\"""'),s=n.split(/\r\n|[\n\r]/g),i=s.length===1,o=s.length>1&&s.slice(1).every(I=>I.length===0||R(I.charCodeAt(0))),a=n.endsWith('\\"""'),u=e.endsWith('"')&&!a,h=e.endsWith("\\"),f=u||h,p=!(t!=null&&t.minimize)&&(!i||e.length>70||f||o||a);let N="";const T=i&&R(e.charCodeAt(0));return(p&&!T||o)&&(N+=`
`),N+=n,(p||f)&&(N+=`
`),'"""'+N+'"""'}var r;(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"})(r||(r={}));class se{constructor(t){const n=new B(r.SOF,0,0,0,0);this.source=t,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==r.EOF)do if(t.next)t=t.next;else{const n=oe(this,t.end);t.next=n,n.prev=t,t=n}while(t.kind===r.COMMENT);return t}}function re(e){return e===r.BANG||e===r.DOLLAR||e===r.AMP||e===r.PAREN_L||e===r.PAREN_R||e===r.SPREAD||e===r.COLON||e===r.EQUALS||e===r.AT||e===r.BRACKET_L||e===r.BRACKET_R||e===r.BRACE_L||e===r.PIPE||e===r.BRACE_R}function _(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function k(e,t){return G(e.charCodeAt(t))&&Y(e.charCodeAt(t+1))}function G(e){return e>=55296&&e<=56319}function Y(e){return e>=56320&&e<=57343}function m(e,t){const n=e.source.body.codePointAt(t);if(n===void 0)return r.EOF;if(n>=32&&n<=126){const s=String.fromCodePoint(n);return s==='"'?`'"'`:`"${s}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function l(e,t,n,s,i){const o=e.line,a=1+n-e.lineStart;return new B(t,n,s,o,a,i)}function oe(e,t){const n=e.source.body,s=n.length;let i=t;for(;i<s;){const o=n.charCodeAt(i);switch(o){case 65279:case 9:case 32:case 44:++i;continue;case 10:++i,++e.line,e.lineStart=i;continue;case 13:n.charCodeAt(i+1)===10?i+=2:++i,++e.line,e.lineStart=i;continue;case 35:return ae(e,i);case 33:return l(e,r.BANG,i,i+1);case 36:return l(e,r.DOLLAR,i,i+1);case 38:return l(e,r.AMP,i,i+1);case 40:return l(e,r.PAREN_L,i,i+1);case 41:return l(e,r.PAREN_R,i,i+1);case 46:if(n.charCodeAt(i+1)===46&&n.charCodeAt(i+2)===46)return l(e,r.SPREAD,i,i+3);break;case 58:return l(e,r.COLON,i,i+1);case 61:return l(e,r.EQUALS,i,i+1);case 64:return l(e,r.AT,i,i+1);case 91:return l(e,r.BRACKET_L,i,i+1);case 93:return l(e,r.BRACKET_R,i,i+1);case 123:return l(e,r.BRACE_L,i,i+1);case 124:return l(e,r.PIPE,i,i+1);case 125:return l(e,r.BRACE_R,i,i+1);case 34:return n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34?de(e,i):ue(e,i)}if(y(o)||o===45)return ce(e,i,o);if(j(o))return fe(e,i);throw d(e.source,i,o===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:_(o)||k(n,i)?`Unexpected character: ${m(e,i)}.`:`Invalid character: ${m(e,i)}.`)}return l(e,r.EOF,s,s)}function ae(e,t){const n=e.source.body,s=n.length;let i=t+1;for(;i<s;){const o=n.charCodeAt(i);if(o===10||o===13)break;if(_(o))++i;else if(k(n,i))i+=2;else break}return l(e,r.COMMENT,t,i,n.slice(t+1,i))}function ce(e,t,n){const s=e.source.body;let i=t,o=n,a=!1;if(o===45&&(o=s.charCodeAt(++i)),o===48){if(o=s.charCodeAt(++i),y(o))throw d(e.source,i,`Invalid number, unexpected digit after 0: ${m(e,i)}.`)}else i=v(e,i,o),o=s.charCodeAt(i);if(o===46&&(a=!0,o=s.charCodeAt(++i),i=v(e,i,o),o=s.charCodeAt(i)),(o===69||o===101)&&(a=!0,o=s.charCodeAt(++i),(o===43||o===45)&&(o=s.charCodeAt(++i)),i=v(e,i,o),o=s.charCodeAt(i)),o===46||j(o))throw d(e.source,i,`Invalid number, expected digit but got: ${m(e,i)}.`);return l(e,a?r.FLOAT:r.INT,t,i,s.slice(t,i))}function v(e,t,n){if(!y(n))throw d(e.source,t,`Invalid number, expected digit but got: ${m(e,t)}.`);const s=e.source.body;let i=t+1;for(;y(s.charCodeAt(i));)++i;return i}function ue(e,t){const n=e.source.body,s=n.length;let i=t+1,o=i,a="";for(;i<s;){const u=n.charCodeAt(i);if(u===34)return a+=n.slice(o,i),l(e,r.STRING,t,i+1,a);if(u===92){a+=n.slice(o,i);const h=n.charCodeAt(i+1)===117?n.charCodeAt(i+2)===123?he(e,i):pe(e,i):le(e,i);a+=h.value,i+=h.size,o=i;continue}if(u===10||u===13)break;if(_(u))++i;else if(k(n,i))i+=2;else throw d(e.source,i,`Invalid character within String: ${m(e,i)}.`)}throw d(e.source,i,"Unterminated string.")}function he(e,t){const n=e.source.body;let s=0,i=3;for(;i<12;){const o=n.charCodeAt(t+i++);if(o===125){if(i<5||!_(s))break;return{value:String.fromCodePoint(s),size:i}}if(s=s<<4|A(o),s<0)break}throw d(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+i)}".`)}function pe(e,t){const n=e.source.body,s=U(n,t+2);if(_(s))return{value:String.fromCodePoint(s),size:6};if(G(s)&&n.charCodeAt(t+6)===92&&n.charCodeAt(t+7)===117){const i=U(n,t+8);if(Y(i))return{value:String.fromCodePoint(s,i),size:12}}throw d(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function U(e,t){return A(e.charCodeAt(t))<<12|A(e.charCodeAt(t+1))<<8|A(e.charCodeAt(t+2))<<4|A(e.charCodeAt(t+3))}function A(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function le(e,t){const n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw d(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function de(e,t){const n=e.source.body,s=n.length;let i=e.lineStart,o=t+3,a=o,u="";const h=[];for(;o<s;){const f=n.charCodeAt(o);if(f===34&&n.charCodeAt(o+1)===34&&n.charCodeAt(o+2)===34){u+=n.slice(a,o),h.push(u);const p=l(e,r.BLOCK_STRING,t,o+3,ne(h).join(`
`));return e.line+=h.length-1,e.lineStart=i,p}if(f===92&&n.charCodeAt(o+1)===34&&n.charCodeAt(o+2)===34&&n.charCodeAt(o+3)===34){u+=n.slice(a,o),a=o+1,o+=4;continue}if(f===10||f===13){u+=n.slice(a,o),h.push(u),f===13&&n.charCodeAt(o+1)===10?o+=2:++o,u="",a=o,i=o;continue}if(_(f))++o;else if(k(n,o))o+=2;else throw d(e.source,o,`Invalid character within String: ${m(e,o)}.`)}throw d(e.source,o,"Unterminated string.")}function fe(e,t){const n=e.source.body,s=n.length;let i=t+1;for(;i<s;){const o=n.charCodeAt(i);if(te(o))++i;else break}return l(e,r.NAME,t,i,n.slice(t,i))}const Ee=10,$=2;function Te(e){return S(e,[])}function S(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return Ne(e,t);default:return String(e)}}function Ne(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const n=[...t,e];if(me(e)){const s=e.toJSON();if(s!==e)return typeof s=="string"?s:S(s,n)}else if(Array.isArray(e))return xe(e,n);return Ie(e,n)}function me(e){return typeof e.toJSON=="function"}function Ie(e,t){const n=Object.entries(e);if(n.length===0)return"{}";if(t.length>$)return"["+Oe(e)+"]";const s=n.map(([i,o])=>i+": "+S(o,t));return"{ "+s.join(", ")+" }"}function xe(e,t){if(e.length===0)return"[]";if(t.length>$)return"[Array]";const n=Math.min(Ee,e.length),s=e.length-n,i=[];for(let o=0;o<n;++o)i.push(S(e[o],t));return s===1?i.push("... 1 more item"):s>1&&i.push(`... ${s} more items`),"["+i.join(", ")+"]"}function Oe(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}const _e=function(t,n){return t instanceof n};class J{constructor(t,n="GraphQL request",s={line:1,column:1}){typeof t=="string"||C(!1,`Body must be a string. Received: ${Te(t)}.`),this.body=t,this.name=n,this.locationOffset=s,this.locationOffset.line>0||C(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||C(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function Ae(e){return _e(e,J)}function ke(e,t){return new F(e,t).parseDocument()}function Se(e,t){const n=new F(e,t);n.expectToken(r.SOF);const s=n.parseValueLiteral(!1);return n.expectToken(r.EOF),s}function Ce(e,t){const n=new F(e,t);n.expectToken(r.SOF);const s=n.parseTypeReference();return n.expectToken(r.EOF),s}class F{constructor(t,n={}){const s=Ae(t)?t:new J(t);this._lexer=new se(s),this._options=n,this._tokenCounter=0}parseName(){const t=this.expectToken(r.NAME);return this.node(t,{kind:c.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:c.DOCUMENT,definitions:this.many(r.SOF,this.parseDefinition,r.EOF)})}parseDefinition(){if(this.peek(r.BRACE_L))return this.parseOperationDefinition();const t=this.peekDescription(),n=t?this._lexer.lookahead():this._lexer.token;if(n.kind===r.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(t)throw d(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(n)}parseOperationDefinition(){const t=this._lexer.token;if(this.peek(r.BRACE_L))return this.node(t,{kind:c.OPERATION_DEFINITION,operation:O.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const n=this.parseOperationType();let s;return this.peek(r.NAME)&&(s=this.parseName()),this.node(t,{kind:c.OPERATION_DEFINITION,operation:n,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const t=this.expectToken(r.NAME);switch(t.value){case"query":return O.QUERY;case"mutation":return O.MUTATION;case"subscription":return O.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(r.PAREN_L,this.parseVariableDefinition,r.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:c.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(r.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(r.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const t=this._lexer.token;return this.expectToken(r.DOLLAR),this.node(t,{kind:c.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:c.SELECTION_SET,selections:this.many(r.BRACE_L,this.parseSelection,r.BRACE_R)})}parseSelection(){return this.peek(r.SPREAD)?this.parseFragment():this.parseField()}parseField(){const t=this._lexer.token,n=this.parseName();let s,i;return this.expectOptionalToken(r.COLON)?(s=n,i=this.parseName()):i=n,this.node(t,{kind:c.FIELD,alias:s,name:i,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(r.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){const n=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(r.PAREN_L,n,r.PAREN_R)}parseArgument(t=!1){const n=this._lexer.token,s=this.parseName();return this.expectToken(r.COLON),this.node(n,{kind:c.ARGUMENT,name:s,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const t=this._lexer.token;this.expectToken(r.SPREAD);const n=this.expectOptionalKeyword("on");return!n&&this.peek(r.NAME)?this.node(t,{kind:c.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:c.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const t=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:c.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:c.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){const n=this._lexer.token;switch(n.kind){case r.BRACKET_L:return this.parseList(t);case r.BRACE_L:return this.parseObject(t);case r.INT:return this.advanceLexer(),this.node(n,{kind:c.INT,value:n.value});case r.FLOAT:return this.advanceLexer(),this.node(n,{kind:c.FLOAT,value:n.value});case r.STRING:case r.BLOCK_STRING:return this.parseStringLiteral();case r.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:c.BOOLEAN,value:!0});case"false":return this.node(n,{kind:c.BOOLEAN,value:!1});case"null":return this.node(n,{kind:c.NULL});default:return this.node(n,{kind:c.ENUM,value:n.value})}case r.DOLLAR:if(t)if(this.expectToken(r.DOLLAR),this._lexer.token.kind===r.NAME){const s=this._lexer.token.value;throw d(this._lexer.source,n.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:c.STRING,value:t.value,block:t.kind===r.BLOCK_STRING})}parseList(t){const n=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:c.LIST,values:this.any(r.BRACKET_L,n,r.BRACKET_R)})}parseObject(t){const n=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:c.OBJECT,fields:this.any(r.BRACE_L,n,r.BRACE_R)})}parseObjectField(t){const n=this._lexer.token,s=this.parseName();return this.expectToken(r.COLON),this.node(n,{kind:c.OBJECT_FIELD,name:s,value:this.parseValueLiteral(t)})}parseDirectives(t){const n=[];for(;this.peek(r.AT);)n.push(this.parseDirective(t));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){const n=this._lexer.token;return this.expectToken(r.AT),this.node(n,{kind:c.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){const t=this._lexer.token;let n;if(this.expectOptionalToken(r.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(r.BRACKET_R),n=this.node(t,{kind:c.LIST_TYPE,type:s})}else n=this.parseNamedType();return this.expectOptionalToken(r.BANG)?this.node(t,{kind:c.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:c.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(r.STRING)||this.peek(r.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),i=this.many(r.BRACE_L,this.parseOperationTypeDefinition,r.BRACE_R);return this.node(t,{kind:c.SCHEMA_DEFINITION,description:n,directives:s,operationTypes:i})}parseOperationTypeDefinition(){const t=this._lexer.token,n=this.parseOperationType();this.expectToken(r.COLON);const s=this.parseNamedType();return this.node(t,{kind:c.OPERATION_TYPE_DEFINITION,operation:n,type:s})}parseScalarTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),i=this.parseConstDirectives();return this.node(t,{kind:c.SCALAR_TYPE_DEFINITION,description:n,name:s,directives:i})}parseObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),i=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(t,{kind:c.OBJECT_TYPE_DEFINITION,description:n,name:s,interfaces:i,directives:o,fields:a})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(r.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(r.BRACE_L,this.parseFieldDefinition,r.BRACE_R)}parseFieldDefinition(){const t=this._lexer.token,n=this.parseDescription(),s=this.parseName(),i=this.parseArgumentDefs();this.expectToken(r.COLON);const o=this.parseTypeReference(),a=this.parseConstDirectives();return this.node(t,{kind:c.FIELD_DEFINITION,description:n,name:s,arguments:i,type:o,directives:a})}parseArgumentDefs(){return this.optionalMany(r.PAREN_L,this.parseInputValueDef,r.PAREN_R)}parseInputValueDef(){const t=this._lexer.token,n=this.parseDescription(),s=this.parseName();this.expectToken(r.COLON);const i=this.parseTypeReference();let o;this.expectOptionalToken(r.EQUALS)&&(o=this.parseConstValueLiteral());const a=this.parseConstDirectives();return this.node(t,{kind:c.INPUT_VALUE_DEFINITION,description:n,name:s,type:i,defaultValue:o,directives:a})}parseInterfaceTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),i=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(t,{kind:c.INTERFACE_TYPE_DEFINITION,description:n,name:s,interfaces:i,directives:o,fields:a})}parseUnionTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),i=this.parseConstDirectives(),o=this.parseUnionMemberTypes();return this.node(t,{kind:c.UNION_TYPE_DEFINITION,description:n,name:s,directives:i,types:o})}parseUnionMemberTypes(){return this.expectOptionalToken(r.EQUALS)?this.delimitedMany(r.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),i=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();return this.node(t,{kind:c.ENUM_TYPE_DEFINITION,description:n,name:s,directives:i,values:o})}parseEnumValuesDefinition(){return this.optionalMany(r.BRACE_L,this.parseEnumValueDefinition,r.BRACE_R)}parseEnumValueDefinition(){const t=this._lexer.token,n=this.parseDescription(),s=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(t,{kind:c.ENUM_VALUE_DEFINITION,description:n,name:s,directives:i})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw d(this._lexer.source,this._lexer.token.start,`${D(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),i=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();return this.node(t,{kind:c.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:s,directives:i,fields:o})}parseInputFieldsDefinition(){return this.optionalMany(r.BRACE_L,this.parseInputValueDef,r.BRACE_R)}parseTypeSystemExtension(){const t=this._lexer.lookahead();if(t.kind===r.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const n=this.parseConstDirectives(),s=this.optionalMany(r.BRACE_L,this.parseOperationTypeDefinition,r.BRACE_R);if(n.length===0&&s.length===0)throw this.unexpected();return this.node(t,{kind:c.SCHEMA_EXTENSION,directives:n,operationTypes:s})}parseScalarTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const n=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(t,{kind:c.SCALAR_TYPE_EXTENSION,name:n,directives:s})}parseObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const n=this.parseName(),s=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(s.length===0&&i.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:c.OBJECT_TYPE_EXTENSION,name:n,interfaces:s,directives:i,fields:o})}parseInterfaceTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const n=this.parseName(),s=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(s.length===0&&i.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:c.INTERFACE_TYPE_EXTENSION,name:n,interfaces:s,directives:i,fields:o})}parseUnionTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const n=this.parseName(),s=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(s.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:c.UNION_TYPE_EXTENSION,name:n,directives:s,types:i})}parseEnumTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const n=this.parseName(),s=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(s.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:c.ENUM_TYPE_EXTENSION,name:n,directives:s,values:i})}parseInputObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const n=this.parseName(),s=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(s.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:c.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:s,fields:i})}parseDirectiveDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(r.AT);const s=this.parseName(),i=this.parseArgumentDefs(),o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const a=this.parseDirectiveLocations();return this.node(t,{kind:c.DIRECTIVE_DEFINITION,description:n,name:s,arguments:i,repeatable:o,locations:a})}parseDirectiveLocations(){return this.delimitedMany(r.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const t=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(L,n.value))return n;throw this.unexpected(t)}node(t,n){return this._options.noLocation!==!0&&(n.loc=new Z(t,this._lexer.lastToken,this._lexer.source)),n}peek(t){return this._lexer.token.kind===t}expectToken(t){const n=this._lexer.token;if(n.kind===t)return this.advanceLexer(),n;throw d(this._lexer.source,n.start,`Expected ${Q(t)}, found ${D(n)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){const n=this._lexer.token;if(n.kind===r.NAME&&n.value===t)this.advanceLexer();else throw d(this._lexer.source,n.start,`Expected "${t}", found ${D(n)}.`)}expectOptionalKeyword(t){const n=this._lexer.token;return n.kind===r.NAME&&n.value===t?(this.advanceLexer(),!0):!1}unexpected(t){const n=t!=null?t:this._lexer.token;return d(this._lexer.source,n.start,`Unexpected ${D(n)}.`)}any(t,n,s){this.expectToken(t);const i=[];for(;!this.expectOptionalToken(s);)i.push(n.call(this));return i}optionalMany(t,n,s){if(this.expectOptionalToken(t)){const i=[];do i.push(n.call(this));while(!this.expectOptionalToken(s));return i}return[]}many(t,n,s){this.expectToken(t);const i=[];do i.push(n.call(this));while(!this.expectOptionalToken(s));return i}delimitedMany(t,n){this.expectOptionalToken(t);const s=[];do s.push(n.call(this));while(this.expectOptionalToken(t));return s}advanceLexer(){const{maxTokens:t}=this._options,n=this._lexer.advance();if(t!==void 0&&n.kind!==r.EOF&&(++this._tokenCounter,this._tokenCounter>t))throw d(this._lexer.source,n.start,`Document contains more that ${t} tokens. Parsing aborted.`)}}function D(e){const t=e.value;return Q(e.kind)+(t!=null?` "${t}"`:"")}function Q(e){return re(e)?`"${e}"`:e}export{L as D,b as G,c as K,O,K as Q,J as S,j as a,_e as b,Te as c,C as d,X as e,z as f,ke as g,ye as h,te as i,De as j,Ce as k,Se as p};