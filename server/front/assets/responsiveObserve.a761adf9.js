import{_ as o,e as m}from"./index.64257940.js";var b=["xxl","xl","lg","md","sm","xs"],a={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},i=new Map,h=-1,c={},l={matchHandlers:{},dispatch:function(e){return c=e,i.forEach(function(s){return s(c)}),i.size>=1},subscribe:function(e){return i.size||this.register(),h+=1,i.set(h,e),e(c),h},unsubscribe:function(e){i.delete(e),i.size||this.unregister()},unregister:function(){var e=this;Object.keys(a).forEach(function(s){var n=a[s],r=e.matchHandlers[n];r==null||r.mql.removeListener(r==null?void 0:r.listener)}),i.clear()},register:function(){var e=this;Object.keys(a).forEach(function(s){var n=a[s],r=function(u){var v=u.matches;e.dispatch(o(o({},c),m({},s,v)))},d=window.matchMedia(n);d.addListener(r),e.matchHandlers[n]={mql:d,listener:r},r(d)})}};const f=l;export{f as R,b as r};
