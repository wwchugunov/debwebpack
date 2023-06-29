(()=>{"use strict";var n,e,t,r,o,a,i,c,s,d,u,p,l,f,m={205:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"*{\n  margin: 0;\n  padding: 0;\n}\n\n\n\n.container {\n    background-color:#1d1f1d;\n    background-blend-mode:overlay;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    background-repeat:no-repeat;\n    background-size:cover;\n    height:100vh;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n  \n  body {\n    background-color:transparent;\n  }\n  \n  .registration-cssave{\n    padding:50px 0;\n  }\n  \n  .registration-cssave form {\n    max-width:800px;\n    padding:50px 70px;\n    border-radius:10px;\n    box-shadow:4px 4px 15px rgba(0, 0, 0, 0.2);\n    background-color:#fff;\n  }\n  \n  .registration-cssave form h3 {\n    font-weight:bold;\n    margin-bottom:30px;\n  }\n  \n  .registration-cssave .item {\n    border-radius:10px;\n    margin-bottom:25px;\n    padding:10px 20px;\n  }\n  \n  .registration-cssave .create-account {\n    border-radius:30px;\n    padding:10px 20px;\n    font-size:18px;\n    font-weight:bold;\n    background-color:#3f93ff;\n    border:none;\n    color:white;\n    margin-top:20px;\n  }\n  \n  @media (max-width: 576px) {\n    .registration-cssave form {\n      padding:50px 20px;\n    }\n  }",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],u=a[d]||0,p="".concat(d," ").concat(u);a[d]=u+1;var l=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var u=t(a[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},v={};function g(n){var e=v[n];if(void 0!==e)return e.exports;var t=v[n]={id:n,exports:{}};return m[n](t,t.exports,g),t.exports}g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),g.nc=void 0,n=g(379),e=g.n(n),t=g(795),r=g.n(t),o=g(569),a=g.n(o),i=g(565),c=g.n(i),s=g(216),d=g.n(s),u=g(589),p=g.n(u),l=g(205),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(l.Z,f),l.Z&&l.Z.locals&&l.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{document.querySelector("form").addEventListener("submit",(async function(n){n.preventDefault();const e={username:document.querySelector("#username").value,password:document.querySelector("#password").value};try{const n=await fetch("http://172.17.14.51:3000/autote/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),t=await n.json();n.ok?(localStorage.setItem("token",t.token),localStorage.setItem("token",t.token),window.location.href="/admin.html"):alert("Не верное имя пользователя или пароль")}catch(n){console.error("Ошибка при отправке запроса:",n)}}))}))})();