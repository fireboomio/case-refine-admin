import{ab as S}from"./index.64257940.js";function d(e,r){for(var n=0,t=e.length-1;t>=0;t--){var i=e[t];i==="."?e.splice(t,1):i===".."?(e.splice(t,1),n++):n&&(e.splice(t,1),n--)}if(r)for(;n--;n)e.unshift("..");return e}var _=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,v=function(e){return _.exec(e).slice(1)};function f(){for(var e="",r=!1,n=arguments.length-1;n>=-1&&!r;n--){var t=n>=0?arguments[n]:"/";if(typeof t!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!t)continue;e=t+"/"+e,r=t.charAt(0)==="/"}return e=d(m(e.split("/"),function(i){return!!i}),!r).join("/"),(r?"/":"")+e||"."}function g(e){var r=b(e),n=k(e,-1)==="/";return e=d(m(e.split("/"),function(t){return!!t}),!r).join("/"),!e&&!r&&(e="."),e&&n&&(e+="/"),(r?"/":"")+e}function b(e){return e.charAt(0)==="/"}function p(){var e=Array.prototype.slice.call(arguments,0);return g(m(e,function(r,n){if(typeof r!="string")throw new TypeError("Arguments to path.join must be strings");return r}).join("/"))}function A(e,r){e=f(e).substr(1),r=f(r).substr(1);function n(s){for(var o=0;o<s.length&&s[o]==="";o++);for(var l=s.length-1;l>=0&&s[l]==="";l--);return o>l?[]:s.slice(o,l-o+1)}for(var t=n(e.split("/")),i=n(r.split("/")),h=Math.min(t.length,i.length),c=h,u=0;u<h;u++)if(t[u]!==i[u]){c=u;break}for(var a=[],u=c;u<t.length;u++)a.push("..");return a=a.concat(i.slice(c)),a.join("/")}var j="/",y=":";function P(e){var r=v(e),n=r[0],t=r[1];return!n&&!t?".":(t&&(t=t.substr(0,t.length-1)),n+t)}function w(e,r){var n=v(e)[2];return r&&n.substr(-1*r.length)===r&&(n=n.substr(0,n.length-r.length)),n}function z(e){return v(e)[3]}const $={extname:z,basename:w,dirname:P,sep:j,delimiter:y,relative:A,join:p,isAbsolute:b,normalize:g,resolve:f};function m(e,r){if(e.filter)return e.filter(r);for(var n=[],t=0;t<e.length;t++)r(e[t],t,e)&&n.push(e[t]);return n}var k="ab".substr(-1)==="b"?function(e,r,n){return e.substr(r,n)}:function(e,r,n){return r<0&&(r=e.length+r),e.substr(r,n)};const T=Object.freeze(Object.defineProperty({__proto__:null,resolve:f,normalize:g,isAbsolute:b,join:p,relative:A,sep:j,delimiter:y,dirname:P,basename:w,extname:z,default:$},Symbol.toStringTag,{value:"Module"})),M=S(T);export{M as r};
