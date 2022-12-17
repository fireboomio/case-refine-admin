import{p as m}from"./index.d4e5ccca.js";import{r as Z,R as M,a as G}from"./index.64257940.js";function K(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var z=Z.exports,ee=K(z);function k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function te(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var re=!!(typeof window<"u"&&window.document&&window.document.createElement);function ne(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(o){return o.displayName||o.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var c=[],i;function u(){i=t(c.map(function(f){return f.props})),s.canUseDOM?e(i):n&&(i=n(i))}var s=function(f){te(p,f);function p(){return f.apply(this,arguments)||this}p.peek=function(){return i},p.rewind=function(){if(p.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var g=i;return i=void 0,c=[],g};var d=p.prototype;return d.UNSAFE_componentWillMount=function(){c.push(this),u()},d.componentDidUpdate=function(){u()},d.componentWillUnmount=function(){var g=c.indexOf(this);c.splice(g,1),u()},d.render=function(){return ee.createElement(a,this.props)},p}(z.PureComponent);return k(s,"displayName","SideEffect("+r(a)+")"),k(s,"canUseDOM",re),s}}var oe=ne,ae=typeof Element<"u",ie=typeof Map=="function",ue=typeof Set=="function",se=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function _(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,o;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!_(t[r],e[r]))return!1;return!0}var a;if(ie&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;for(a=t.entries();!(r=a.next()).done;)if(!_(r.value[1],e.get(r.value[0])))return!1;return!0}if(ue&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(se&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(o=Object.keys(t),n=o.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[r]))return!1;if(ae&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&t.$$typeof)&&!_(t[o[r]],e[o[r]]))return!1;return!0}return t!==t&&e!==e}var ce=function(e,n){try{return _(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var U=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;function pe(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function de(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(a){return e[a]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(a){o[a]=a}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Te=de()?Object.assign:function(t,e){for(var n,r=pe(t),o,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var c in n)fe.call(n,c)&&(r[c]=n[c]);if(U){o=U(n);for(var i=0;i<o.length;i++)le.call(n,o[i])&&(r[o[i]]=n[o[i]])}}return r},C={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},l={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(l).map(function(t){return l[t]});var h={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},me=Object.keys(x).reduce(function(t,e){return t[x[e]]=e,t},{}),he=[l.NOSCRIPT,l.SCRIPT,l.STYLE],y="data-react-helmet",ve=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ge=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},ye=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ee=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},B=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(t,r)||(n[r]=t[r]);return n},Ae=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},N=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},be=function(e){var n=w(e,l.TITLE),r=w(e,L.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var o=w(e,L.DEFAULT_TITLE);return n||o||void 0},Oe=function(e){return w(e,L.ON_CHANGE_CLIENT_STATE)||function(){}},j=function(e,n){return n.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,o){return v({},r,o)},{})},Ce=function(e,n){return n.filter(function(r){return typeof r[l.BASE]<"u"}).map(function(r){return r[l.BASE]}).reverse().reduce(function(r,o){if(!r.length)for(var a=Object.keys(o),c=0;c<a.length;c++){var i=a[c],u=i.toLowerCase();if(e.indexOf(u)!==-1&&o[u])return r.concat(o)}return r},[])},R=function(e,n,r){var o={};return r.filter(function(a){return Array.isArray(a[e])?!0:(typeof a[e]<"u"&&Re("Helmet: "+e+' should be of type "Array". Instead found type "'+ve(a[e])+'"'),!1)}).map(function(a){return a[e]}).reverse().reduce(function(a,c){var i={};c.filter(function(d){for(var T=void 0,g=Object.keys(d),E=0;E<g.length;E++){var A=g[E],b=A.toLowerCase();n.indexOf(b)!==-1&&!(T===h.REL&&d[T].toLowerCase()==="canonical")&&!(b===h.REL&&d[b].toLowerCase()==="stylesheet")&&(T=b),n.indexOf(A)!==-1&&(A===h.INNER_HTML||A===h.CSS_TEXT||A===h.ITEM_PROP)&&(T=A)}if(!T||!d[T])return!1;var P=d[T].toLowerCase();return o[T]||(o[T]={}),i[T]||(i[T]={}),o[T][P]?!1:(i[T][P]=!0,!0)}).reverse().forEach(function(d){return a.push(d)});for(var u=Object.keys(i),s=0;s<u.length;s++){var f=u[s],p=Te({},o[f],i[f]);o[f]=p}return a},[]).reverse()},w=function(e,n){for(var r=e.length-1;r>=0;r--){var o=e[r];if(o.hasOwnProperty(n))return o[n]}return null},Se=function(e){return{baseTag:Ce([h.HREF,h.TARGET],e),bodyAttributes:j(C.BODY,e),defer:w(e,L.DEFER),encode:w(e,L.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:j(C.HTML,e),linkTags:R(l.LINK,[h.REL,h.HREF],e),metaTags:R(l.META,[h.NAME,h.CHARSET,h.HTTPEQUIV,h.PROPERTY,h.ITEM_PROP],e),noscriptTags:R(l.NOSCRIPT,[h.INNER_HTML],e),onChangeClientState:Oe(e),scriptTags:R(l.SCRIPT,[h.SRC,h.INNER_HTML],e),styleTags:R(l.STYLE,[h.CSS_TEXT],e),title:be(e),titleAttributes:j(C.TITLE,e)}},H=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){H(e)},0)}}(),q=function(e){return clearTimeout(e)},we=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||H:global.requestAnimationFrame||H,Pe=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||q:global.cancelAnimationFrame||q,Re=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},I=null,Ie=function(e){I&&Pe(I),e.defer?I=we(function(){Y(e,function(){I=null})}):(Y(e),I=null)},Y=function(e,n){var r=e.baseTag,o=e.bodyAttributes,a=e.htmlAttributes,c=e.linkTags,i=e.metaTags,u=e.noscriptTags,s=e.onChangeClientState,f=e.scriptTags,p=e.styleTags,d=e.title,T=e.titleAttributes;F(l.BODY,o),F(l.HTML,a),Le(d,T);var g={baseTag:S(l.BASE,r),linkTags:S(l.LINK,c),metaTags:S(l.META,i),noscriptTags:S(l.NOSCRIPT,u),scriptTags:S(l.SCRIPT,f),styleTags:S(l.STYLE,p)},E={},A={};Object.keys(g).forEach(function(b){var P=g[b],D=P.newTags,J=P.oldTags;D.length&&(E[b]=D),J.length&&(A[b]=g[b].oldTags)}),n&&n(),s(e,E,A)},X=function(e){return Array.isArray(e)?e.join(""):e},Le=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=X(e)),F(l.TITLE,n)},F=function(e,n){var r=document.getElementsByTagName(e)[0];if(!!r){for(var o=r.getAttribute(y),a=o?o.split(","):[],c=[].concat(a),i=Object.keys(n),u=0;u<i.length;u++){var s=i[u],f=n[s]||"";r.getAttribute(s)!==f&&r.setAttribute(s,f),a.indexOf(s)===-1&&a.push(s);var p=c.indexOf(s);p!==-1&&c.splice(p,1)}for(var d=c.length-1;d>=0;d--)r.removeAttribute(c[d]);a.length===c.length?r.removeAttribute(y):r.getAttribute(y)!==i.join(",")&&r.setAttribute(y,i.join(","))}},S=function(e,n){var r=document.head||document.querySelector(l.HEAD),o=r.querySelectorAll(e+"["+y+"]"),a=Array.prototype.slice.call(o),c=[],i=void 0;return n&&n.length&&n.forEach(function(u){var s=document.createElement(e);for(var f in u)if(u.hasOwnProperty(f))if(f===h.INNER_HTML)s.innerHTML=u.innerHTML;else if(f===h.CSS_TEXT)s.styleSheet?s.styleSheet.cssText=u.cssText:s.appendChild(document.createTextNode(u.cssText));else{var p=typeof u[f]>"u"?"":u[f];s.setAttribute(f,p)}s.setAttribute(y,"true"),a.some(function(d,T){return i=T,s.isEqualNode(d)})?a.splice(i,1):c.push(s)}),a.forEach(function(u){return u.parentNode.removeChild(u)}),c.forEach(function(u){return r.appendChild(u)}),{oldTags:a,newTags:c}},V=function(e){return Object.keys(e).reduce(function(n,r){var o=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return n?n+" "+o:o},"")},_e=function(e,n,r,o){var a=V(r),c=X(n);return a?"<"+e+" "+y+'="true" '+a+">"+N(c,o)+"</"+e+">":"<"+e+" "+y+'="true">'+N(c,o)+"</"+e+">"},xe=function(e,n,r){return n.reduce(function(o,a){var c=Object.keys(a).filter(function(s){return!(s===h.INNER_HTML||s===h.CSS_TEXT)}).reduce(function(s,f){var p=typeof a[f]>"u"?f:f+'="'+N(a[f],r)+'"';return s?s+" "+p:p},""),i=a.innerHTML||a.cssText||"",u=he.indexOf(e)===-1;return o+"<"+e+" "+y+'="true" '+c+(u?"/>":">"+i+"</"+e+">")},"")},W=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[x[o]||o]=e[o],r},n)},je=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[me[o]||o]=e[o],r},n)},Me=function(e,n,r){var o,a=(o={key:n},o[y]=!0,o),c=W(r,a);return[G(l.TITLE,{...c,children:n})]},Ne=function(e,n){return n.map(function(r,o){var a,c=(a={key:o},a[y]=!0,a);return Object.keys(r).forEach(function(i){var u=x[i]||i;if(u===h.INNER_HTML||u===h.CSS_TEXT){var s=r.innerHTML||r.cssText;c.dangerouslySetInnerHTML={__html:s}}else c[u]=r[i]}),M.createElement(e,c)})},O=function(e,n,r){switch(e){case l.TITLE:return{toComponent:function(){return Me(e,n.title,n.titleAttributes)},toString:function(){return _e(e,n.title,n.titleAttributes,r)}};case C.BODY:case C.HTML:return{toComponent:function(){return W(n)},toString:function(){return V(n)}};default:return{toComponent:function(){return Ne(e,n)},toString:function(){return xe(e,n,r)}}}},Q=function(e){var n=e.baseTag,r=e.bodyAttributes,o=e.encode,a=e.htmlAttributes,c=e.linkTags,i=e.metaTags,u=e.noscriptTags,s=e.scriptTags,f=e.styleTags,p=e.title,d=p===void 0?"":p,T=e.titleAttributes;return{base:O(l.BASE,n,o),bodyAttributes:O(C.BODY,r,o),htmlAttributes:O(C.HTML,a,o),link:O(l.LINK,c,o),meta:O(l.META,i,o),noscript:O(l.NOSCRIPT,u,o),script:O(l.SCRIPT,s,o),style:O(l.STYLE,f,o),title:O(l.TITLE,{title:d,titleAttributes:T},o)}},He=function(e){var n,r;return r=n=function(o){Ee(a,o);function a(){return ge(this,a),Ae(this,o.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(i){return!ce(this.props,i)},a.prototype.mapNestedChildrenToProps=function(i,u){if(!u)return null;switch(i.type){case l.SCRIPT:case l.NOSCRIPT:return{innerHTML:u};case l.STYLE:return{cssText:u}}throw new Error("<"+i.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(i){var u,s=i.child,f=i.arrayTypeChildren,p=i.newChildProps,d=i.nestedChildren;return v({},f,(u={},u[s.type]=[].concat(f[s.type]||[],[v({},p,this.mapNestedChildrenToProps(s,d))]),u))},a.prototype.mapObjectTypeChildren=function(i){var u,s,f=i.child,p=i.newProps,d=i.newChildProps,T=i.nestedChildren;switch(f.type){case l.TITLE:return v({},p,(u={},u[f.type]=T,u.titleAttributes=v({},d),u));case l.BODY:return v({},p,{bodyAttributes:v({},d)});case l.HTML:return v({},p,{htmlAttributes:v({},d)})}return v({},p,(s={},s[f.type]=v({},d),s))},a.prototype.mapArrayTypeChildrenToProps=function(i,u){var s=v({},u);return Object.keys(i).forEach(function(f){var p;s=v({},s,(p={},p[f]=i[f],p))}),s},a.prototype.warnOnInvalidChildren=function(i,u){return!0},a.prototype.mapChildrenToProps=function(i,u){var s=this,f={};return M.Children.forEach(i,function(p){if(!(!p||!p.props)){var d=p.props,T=d.children,g=B(d,["children"]),E=je(g);switch(s.warnOnInvalidChildren(p,T),p.type){case l.LINK:case l.META:case l.NOSCRIPT:case l.SCRIPT:case l.STYLE:f=s.flattenArrayTypeChildren({child:p,arrayTypeChildren:f,newChildProps:E,nestedChildren:T});break;default:u=s.mapObjectTypeChildren({child:p,newProps:u,newChildProps:E,nestedChildren:T});break}}}),u=this.mapArrayTypeChildrenToProps(f,u),u},a.prototype.render=function(){var i=this.props,u=i.children,s=B(i,["children"]),f=v({},s);return u&&(f=this.mapChildrenToProps(u,f)),G(e,{...f})},ye(a,null,[{key:"canUseDOM",set:function(i){e.canUseDOM=i}}]),a}(M.Component),n.propTypes={base:m.exports.object,bodyAttributes:m.exports.object,children:m.exports.oneOfType([m.exports.arrayOf(m.exports.node),m.exports.node]),defaultTitle:m.exports.string,defer:m.exports.bool,encodeSpecialCharacters:m.exports.bool,htmlAttributes:m.exports.object,link:m.exports.arrayOf(m.exports.object),meta:m.exports.arrayOf(m.exports.object),noscript:m.exports.arrayOf(m.exports.object),onChangeClientState:m.exports.func,script:m.exports.arrayOf(m.exports.object),style:m.exports.arrayOf(m.exports.object),title:m.exports.string,titleAttributes:m.exports.object,titleTemplate:m.exports.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var o=e.rewind();return o||(o=Q({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},r},Fe=function(){return null},De=oe(Se,Ie,Q)(Fe),$=He(De);$.renderStatic=$.rewind;export{$ as H};