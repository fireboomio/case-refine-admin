import{az as o,r as s,aw as r,a as n}from"./index.64257940.js";if(window&&document){const e=document.createElement("script"),t=document.getElementsByTagName("body")[0];e.src="//unpkg.com/rapidoc/dist/rapidoc-min.js",t.appendChild(e)}function l(){const[e]=o(),{config:t}=s.exports.useContext(r),a=t.apiHost||`${location.protocol}//${location.hostname}:${t.apiPort}`;if(!!t)return n("rapi-doc",{theme:e.get("theme")||"light","spec-url":e.get("url"),"server-url":a,"default-api-server":a,"show-header":"false","show-info":"false","allow-authentication":"false","allow-server-selection":"false","allow-api-list-style-selection":"false","render-style":"read"})}export{l as default};