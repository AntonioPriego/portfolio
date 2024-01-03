(function(t){function e(e){for(var r,o,c=e[0],i=e[1],s=e[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(p.length)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a={app:0},u=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1f0355f5"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"2b587f7a"}[t]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],l=s.getAttribute("data-href");if(l===r||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||a,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[t],f.parentNode.removeChild(f),n(u)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var p=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/portfolio/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},2395:function(t,e,n){},5601:function(t,e,n){"use strict";var r=n("b08b"),o=n.n(r);o.a},"7c55":function(t,e,n){"use strict";var r=n("2395"),o=n.n(r);o.a},a5bd:function(t,e,n){},b08b:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("link",{attrs:{rel:"stylesheet",href:"@/assets/projects/projects.css",type:"text/css"}}),n("Header"),n("div",{staticClass:"main"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1),n("Footer")],1)},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"nav-bar"},[n("router-link",{attrs:{to:"/"}},[t._v("About me")]),n("router-link",{attrs:{to:"/game-projects"}},[t._v("GameDev")]),n("router-link",{attrs:{to:"/other-projects"}},[t._v("Other projects")]),n("router-link",{attrs:{to:"/resume"}},[t._v("Resume")]),n("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])},c=[],i=r["a"].extend({name:"Header"}),s=i,l=(n("5601"),n("2877")),p=Object(l["a"])(s,u,c,!1,null,"39675280",null),f=p.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"right"},[t._v("Reach me at "),n("a",{attrs:{href:"mailto:antoniopriego98@outlook.com"}},[t._v("antoniopriego98@outlook.com")]),t._v(" or "),n("router-link",{attrs:{to:"/contact"}},[t._v("through here")])],1),t._m(0)])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left"},[t._v("Template by "),n("a",{attrs:{href:"https://github.com/schouffy/gamedev-portfolio",target:"blank"}},[t._v("schouffy")]),t._v(" and suited by "),n("a",{attrs:{href:"https://github.com/AntonioPriego/portfolio",target:"blank"}},[t._v("me")])])}],h=r["a"].extend({name:"Footer"}),v=h,b=(n("e02a"),Object(l["a"])(v,d,m,!1,null,"412ba046",null)),g=b.exports,y=function(){function t(){}return t.preloadImages=function(e){e.forEach((function(e){t.preloadImage(e)}))},t.preloadImage=function(t){var e=new Image;e.src=t},t}(),_=y,j=r["a"].extend({name:"App",components:{Header:f,Footer:g}});_.preloadImages(["img/projects/project-1-icon.png","img/projects/project-2-icon.png","img/projects/project-3-icon.png"]);var k=j,w=(n("7c55"),Object(l["a"])(k,o,a,!1,null,null,null)),O=w.exports,C=n("8c4f");r["a"].use(C["a"]);var x=[{path:"/",name:"Root",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/resume",name:"Resume",component:function(){return n.e("about").then(n.bind(null,"1ba2"))}},{path:"/game-projects",name:"Game Projects",component:function(){return n.e("about").then(n.bind(null,"4d97"))}},{path:"/other-projects",name:"Other Projects",component:function(){return n.e("about").then(n.bind(null,"7c58"))}},{path:"/contact",name:"Contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}},{path:"/404",name:"NotFound",component:function(){return n.e("about").then(n.bind(null,"8cdb"))}},{path:"*",redirect:"/404"}],E=new C["a"]({routes:x}),P=E;r["a"].config.productionTip=!1,new r["a"]({router:P,render:function(t){return t(O)}}).$mount("#app")},e02a:function(t,e,n){"use strict";var r=n("a5bd"),o=n.n(r);o.a}});
//# sourceMappingURL=app.c1765c95.js.map