(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-72b8b906":"84c81ff3","chunk-75b3d2b2":"6bbe584c"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-72b8b906":1,"chunk-75b3d2b2":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-72b8b906":"08cd31ce","chunk-75b3d2b2":"aee8754a"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3104:function(e,t,n){},"3ff6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("8c4f"),o=(n("d3b7"),n("2b0e"));o["a"].use(r["a"]);var a=function(){return Promise.resolve().then(n.bind(null,"ab87"))},i=function(){return n.e("chunk-75b3d2b2").then(n.bind(null,"b8fa"))},s=function(){return n.e("chunk-72b8b906").then(n.bind(null,"07bd"))},c=[{path:"/home",name:"Home",component:a},{path:"/projects",name:"Projects",component:s},{path:"/contact",name:"Contact",component:i}],u=new r["a"]({mode:"history",base:"/",routes:c,scrollBehavior:function(){return{x:0,y:0}}}),l=u,f=(n("927c"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),e.showAccueil?n("Accueil"):e._e(),e.showProfile?n("Profile"):e._e(),n("router-view"),n("Footer")],1)}),p=[],m=n("8b4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("ul",e._l(e.menu,(function(t){return n("nav",{key:t.id+t.name},["home"===t.name?n("router-link",{staticClass:"link",staticStyle:{float:"right"},attrs:{to:{path:t.name},tag:"a"}},[e._v(e._s(e._f("translateTo")(t.name,e.language)))]):n("router-link",{staticClass:"link",attrs:{to:{path:t.name},tag:"a"}},[e._v(e._s(e._f("translateTo")(t.name,e.language)))])],1)})),0)])},h=[],v={mixins:[m["a"]],name:"Header",props:[],data:function(){return{menu:[{id:1,name:"home"},{id:2,name:"projects"},{id:3,name:"contact"}],menuItems:[{name:"HOME",path:"/"},{name:"Projects",path:"/projects"},{name:"Contact",path:"/contact"}]}}},b=v,g=n("2877"),_=Object(g["a"])(b,d,h,!1,null,"67a4d343",null),y=_.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("p",{directives:[{name:"mydirective",rawName:"v-mydirective"}]},[e._v(" Vadym Lityuk ")])])},P=[],w={name:"Footer",props:[],directives:{mydirective:{bind:function(e){e.innerHTML="Copyright © -"+(new Date).getFullYear()+e.innerHTML+"- All Rights Reserved",e.style.color="var(--colors-tertiary--500)"}},data:function(){return{}},methods:{},computed:{}}},O=w,A=(n("8b2e"),Object(g["a"])(O,j,P,!1,null,"e4d6b0b0",null)),E=A.exports,k=n("ab87"),C=n("c66d"),T={mixins:[m["a"]],name:"App",components:{Header:y,Footer:E,Accueil:k["default"],Profile:C["a"]},data:function(){return{loggedIn:!1,showAccueil:!1,showProfile:!1}},created:function(){this.loggedIn?(this.showAccueil=!1,this.showProfile=!0):(this.showProfile=!1,this.showAccueil=!0)}},M=T,I=Object(g["a"])(M,f,p,!1,null,null,null),x=I.exports;o["a"].use(r["a"]),o["a"].config.productionTip=!1,new o["a"]({router:l,render:function(e){return e(x)}}).$mount("#app")},"85c7":function(e,t,n){"use strict";n("3ff6")},8614:function(e,t,n){"use strict";n("3104")},"888a":function(e,t,n){},"8b2e":function(e,t,n){"use strict";n("888a")},"8b4f":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("b64b");var r={data:function(){return{language:"french"}},en:{firstName:"Firstname",age:"28 years",lastName:"Lastname",email:"Email",contact:"Contact",reasonOfContact:"Reason of Contact",job:"Job ",hobby:"My hobbys",informations:"Informations",project:"Project",appointment:"Take appointment",projects:"Projects",myProjects:"My Projects",MOVIMANIA:"MOVIMANIA",OVERWTACH:"OVERWTACH",Portfolio:"Portfolio",Spotify:"Spotify",meeting:"meeting",home:"Home",info:"I am a junior Front-End Developer located in Quebec. I am currently working as a UI / UX Front End Developer"},fr:{firstName:"Prenom",age:"28 ans",lastName:"Nom",email:"Courriel",contact:"Contact",reasonOfContact:"Raison du contact",job:"Emploi",hobby:"Mes loisirs",informations:"Informations",project:"Projets",appointment:"Prise de rendez-vous",other:"Autre",about:"À propos",home:"Accueil",projects:"Projets",myProjects:"Mes Projets",MOVIMANIA:"MOVIMANIA",OVERWTACH:"OVERWTACH",Portfolio:"Portfolio",Spotify:"Spotify",meeting:"rendes-vous",info:"Je suis un junior Front-End Développeur situé à Québec. Je travaille actuellement en tant que UI/UX Front End Developper."},filters:{translateTo:function(e,t){if("english"===t){for(var n=Object.keys(r.en),o=0;o<n.length;o++)if(n[o]===e)return r.en[e]}else if("french"===t)for(var a=Object.keys(r.fr),i=0;i<a.length;i++)if(a[i]===e)return r.fr[e]}}}},"927c":function(e,t,n){},ab87:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e.showProfile?n("Profile",{attrs:{name:"profile"}}):e._e()],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",[n("span",{staticClass:"far__label"},[e._v("WELCOME__")])])}],a=n("c66d"),i=n("8b4f"),s={mixins:[i["a"]],name:"Accueil",components:{Profile:a["a"]},data:function(){return{showProfile:!1}},created:function(){var e=!1;e&&(this.showProfile=!0)}},c=s,u=(n("8614"),n("2877")),l=Object(u["a"])(c,r,o,!1,null,"2460f543",null);t["default"]=l.exports},c66d:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"prof"},[n("h1",[e._v("Mon profil")]),n("div",{staticClass:"infos"},[n("p",[n("strong",[e._v(e._s(e._f("translateTo")("firstName",e.language))+":")]),e._v("Vadym")]),n("p",[n("strong",[e._v(e._s(e._f("translateTo")("lastName",e.language))+":")]),e._v("Lityuk")]),n("p",[n("strong",[e._v("Age:")]),e._v(" "+e._s(e._f("translateTo")("age",e.language))+" ")]),n("p",[n("strong",[e._v(e._s(e._f("translateTo")("job",e.language))+":")]),e._v(" Front-end Dev")]),n("p",[n("strong",[e._v(e._s(e._f("translateTo")("hobby",e.language))+":")]),e._v(" Dessin")]),n("p",[n("strong",[e._v(e._s(e._f("translateTo")("informations",e.language))+":")]),e._v(" "+e._s(e._f("translateTo")("info",e.language))+" ")])])])},o=[],a=n("8b4f"),i={mixins:[a["a"]],name:"Footer"},s=i,c=(n("85c7"),n("2877")),u=Object(c["a"])(s,r,o,!1,null,"69247a8b",null);t["a"]=u.exports}});
//# sourceMappingURL=app.a23385d7.js.map