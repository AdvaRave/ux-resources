(function(e){function t(t){for(var n,a,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)a=i[d],s[a]&&p.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},s={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/ux-resources/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2d5c":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("site-header"),r("main",[r("router-view",{key:e.$route.path})],1)],1)},o=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{attrs:{id:"header"}},[r("div",[r("h1",[r("router-link",{attrs:{to:"/"}},[e._v("My UX & UI Resources")])],1),e._m(0)]),r("nav",[r("ul",e._l(e.resources,function(t,n){return r("li",{key:t.name},["indexes"!=t.name?r("router-link",{class:{active:e.$route.params.name==t.name},attrs:{to:{name:"list",params:{name:t.name}}}},[e._v(e._s(t.caption))]):e._e()],1)}),0)])])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[r("a",{attrs:{href:"https://advarave.github.io/",target:"_blank"}},[e._v("About Me")])])}],c={name:"siteHeader",data:function(){return{resources:window.resources}}},l=c,u=(r("9838"),r("2877")),d=Object(u["a"])(l,a,i,!1,null,"c3bbc5b2",null),p=d.exports,v={name:"app",components:{"site-header":p}},m=v,f=(r("5c0b"),Object(u["a"])(m,s,o,!1,null,null,null)),h=f.exports,g=r("8c4f"),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),r("resource-list",{attrs:{"show-resource":"indexes"}})],1)},b=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",[r("b",[e._v("Hello,")]),e._v("\n        I'm Adva Rave and those are my UX & UI resources."),r("br"),e._v("\n        Fell Free to use them.\n    ")])}],w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:{component:e.showResource}},[r("h2",[e._v(e._s(e.resource.caption))]),r("section",[e.resource.filters&&e.resource.filters.length?r("div",{staticClass:"filters"},[r("h3",[e._v("Filter")]),r("ul",e._l(e.resource.filters,function(t,n){return r("li",{key:t.name},[r("h5",[e._v(e._s(t.caption))]),"range"==t.type?r("div",{staticClass:"range"},[r("label",[e._v("$"+e._s(t.selectedRange[0])+" - $"+e._s(t.selectedRange[1]))]),r("vue-slider",{attrs:{min:t.min,max:t.max,tooltip:!1,height:13,"dot-size":13,sliderStyle:[{"box-shadow":"0.5px 0.5px 2px 1px #6963e0"},{"box-shadow":"0.5px 0.5px 2px 1px #6963e0"}],"process-style":{backgroundColor:"#6963e0"}},on:{callback:function(t){return e.filterChanged()}},model:{value:t.selectedRange,callback:function(r){e.$set(t,"selectedRange",r)},expression:"filter.selectedRange"}})],1):e._e(),"checkbox"==t.type?r("ul",e._l(t.options,function(t,n){return r("li",{key:t.name},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"option.selected"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selected)?e._i(t.selected,null)>-1:t.selected},on:{change:[function(r){var n=t.selected,s=r.target,o=!!s.checked;if(Array.isArray(n)){var a=null,i=e._i(n,a);s.checked?i<0&&e.$set(t,"selected",n.concat([a])):i>-1&&e.$set(t,"selected",n.slice(0,i).concat(n.slice(i+1)))}else e.$set(t,"selected",o)},function(t){return e.filterChanged()}]}}),r("label",[e._v(e._s(t.caption))])])}),0):e._e()])}),0)]):e._e(),r("div",{staticClass:"resources"},[r("ul",e._l(e.shownItems,function(t,n){return r("li",{key:t.url},[r("small",{staticClass:"price",attrs:{"ng-show":"resource.showPrice"}},[e._v(e._s(t.price?"$"+t.price:"Free"))]),r("a",{attrs:{href:t.url,target:"_blank"}},[r("div",{staticClass:"img",style:{backgroundImage:"url("+t.logo+")"}}),r("h5",[e._v(e._s(t.title))]),r("small",[e._v(e._s(t.url))])]),r("div",{staticClass:"desc"},[r("p",{directives:[{name:"show",rawName:"v-show",value:t.showDesc,expression:"item.showDesc"}]},[e._v(e._s(t.description))]),r("a",{on:{click:function(e){t.showDesc=!t.showDesc}}},[e._v(e._s(t.showDesc?"Show less...":"Show more..."))])])])}),0),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.shownItems.length,expression:"!shownItems.length"}],staticClass:"no-match"},[e._v("\n                No Match Found :( "),r("br"),e._v("\n                Please try to remove some of the filters...\n            ")])])])])},x=[],y=(r("6762"),r("2fdb"),r("f499")),k=r.n(y),$=(r("7f7f"),r("6f79")),R=r.n($),O={name:"resourceList",data:function(){for(var e=0;e<window.resources.length;e++){var t=window.resources[e];if(t.name==(this.showResource||this.$route.params.name)){var r=JSON.parse(k()(t));return{resource:r,shownItems:JSON.parse(k()(t.items||[]))}}}},methods:{filterChanged:function(){for(var e=[],t=0;t<this.resource.items.length;t++){for(var r=this.resource.items[t],n=!0,s=0;s<this.resource.filters.length;s++){var o=this.resource.filters[s];switch(o.type){case"checkbox":for(var a=0;a<o.options.length;a++){var i=o.options[a];i.selected&&(r.tags.includes(i.name)||(n=!1))}break;case"range":var c=r.price||0;(o.selectedRange[0]>c||o.selectedRange[1]<c)&&(n=!1);break}if(!n)break}n&&e.push(r)}this.shownItems=e}},components:{"vue-slider":R.a},props:["showResource"]},P=O,C=(r("66aa"),Object(u["a"])(P,w,x,!1,null,"18a944e2",null)),N=C.exports,j={name:"homepage",components:{"resource-list":N}},S=j,I=(r("d093"),Object(u["a"])(S,_,b,!1,null,"bc04b376",null)),A=I.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"edit"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedResource,expression:"selectedResource"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedResource=t.target.multiple?r:r[0]}}},e._l(e.resources,function(t){return r("option",{key:t.name,domProps:{value:t}},[e._v(e._s(t.name))])}),0),r("table",[e._m(0),r("tbody",[e._l(e.selectedResource.items,function(t){return r("tr",{key:t.url},[r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.logo,expression:"item.logo"}],attrs:{type:"text"},domProps:{value:t.logo},on:{input:function(r){r.target.composing||e.$set(t,"logo",r.target.value)}}})]),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"item.title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(r){r.target.composing||e.$set(t,"title",r.target.value)}}})]),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"item.description"}],attrs:{type:"text"},domProps:{value:t.description},on:{input:function(r){r.target.composing||e.$set(t,"description",r.target.value)}}})]),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"item.url"}],attrs:{type:"text"},domProps:{value:t.url},on:{input:function(r){r.target.composing||e.$set(t,"url",r.target.value)}}})]),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"item.price"}],attrs:{type:"text"},domProps:{value:t.price},on:{input:function(r){r.target.composing||e.$set(t,"price",r.target.value)}}})]),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.tags,expression:"item.tags"}],attrs:{type:"text"},domProps:{value:t.tags},on:{input:function(r){r.target.composing||e.$set(t,"tags",r.target.value)}}})]),r("td",[r("a",{on:{click:function(r){e.selectedResource.items.splice(e.selectedResource.items.indexOf(t),1)}}},[e._v("[Remove]")])])])}),r("tr",[r("td",{attrs:{colspan:"7"}},[r("a",{on:{click:function(t){return e.selectedResource.items.push({})}}},[e._v("[Add]")])])])],2)]),r("div",{staticClass:"code"},[r("a",{on:{click:function(t){return e.generateCode()}}},[e._v("Generate Code")]),r("textarea",{directives:[{name:"show",rawName:"v-show",value:e.code,expression:"code"},{name:"model",rawName:"v-model",value:e.code,expression:"code"}],domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}})])])},D=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("Logo")]),r("th",[e._v("Title")]),r("th",[e._v("Description")]),r("th",[e._v("Url")]),r("th",[e._v("Price")]),r("th",[e._v("Tags")]),r("th")])])}],M=(r("6b54"),r("28a5"),{name:"edit",data:function(){var e=JSON.parse(k()(window.resources));return{resources:e,selectedResource:e[e.length-1],code:null}},methods:{generateCode:function(){for(var e=0;e<this.resources.length;e++)for(var t=this.resources[e],r=0;r<t.items.length;r++){var n=t.items[r];n.showDesc=!1,n.tags=(n.tags||[]).toString().split(",")}this.code="window.resources="+k()(this.resources)+";"}}}),F=M,J=(r("f45b"),Object(u["a"])(F,E,D,!1,null,"49396b88",null)),T=J.exports;n["a"].config.productionTip=!1,n["a"].use(g["a"]);var U=new g["a"]({routes:[{path:"/",component:A},{path:"/list/:name",name:"list",component:N},{path:"/edit",component:T}]});new n["a"]({render:function(e){return e(h)},router:U}).$mount("#app")},"58bc":function(e,t,r){},"5c0b":function(e,t,r){"use strict";var n=r("5e27"),s=r.n(n);s.a},"5e27":function(e,t,r){},"66aa":function(e,t,r){"use strict";var n=r("ac6b"),s=r.n(n);s.a},9838:function(e,t,r){"use strict";var n=r("2d5c"),s=r.n(n);s.a},ac6b:function(e,t,r){},c1b0:function(e,t,r){},d093:function(e,t,r){"use strict";var n=r("c1b0"),s=r.n(n);s.a},f45b:function(e,t,r){"use strict";var n=r("58bc"),s=r.n(n);s.a}});
//# sourceMappingURL=app.d8739d4f.js.map