(function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],m=0,d=[];m<i.length;m++)o=i[m],n[o]&&d.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],r=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=s[0]))}return e}var r={},n={app:0},a=[];function o(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=r,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(s,r,function(t){return e[t]}.bind(null,r));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/ux-resources/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"17de":function(e,t,s){},"43f6":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var r=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("site-header"),s("main",[s("router-view",{key:e.$route.path})],1)],1)},a=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{class:{mobile:e.isMobile},attrs:{id:"header"}},[s("div",[s("a",{directives:[{name:"show",rawName:"v-show",value:e.isMobile,expression:"isMobile"}],staticClass:"menu",on:{click:function(t){return e.mobileMenuToggle()}}},[s("i",{staticClass:"fas fa-bars"})]),s("h1",[s("router-link",{attrs:{to:"/"},nativeOn:{click:function(t){return e.menuOptionUsed()}}},[e._v("My UX & UI Resources")])],1),s("span",{directives:[{name:"show",rawName:"v-show",value:!e.isMobile,expression:"!isMobile"}]},[s("a",{attrs:{href:"https://advarave.github.io/",target:"_blank"}},[e._v("About Me")]),s("label",[e._v("Share:")]),e._m(0),e._m(1)]),s("a",{directives:[{name:"show",rawName:"v-show",value:e.isMobile&&e.$route.params.name,expression:"isMobile && $route.params.name"}],staticClass:"filter",on:{click:function(t){return e.filterMenuToggle()}}},[s("i",{staticClass:"fas fa-filter"})])]),s("nav",{directives:[{name:"show",rawName:"v-show",value:!e.isMobile||e.isMobile&&e.mobileMenuShown,expression:"!isMobile || (isMobile && mobileMenuShown)"}]},[s("ul",[e._l(e.resources,function(t){return s("li",{directives:[{name:"show",rawName:"v-show",value:"indexes"!=t.name,expression:"resource.name != 'indexes'"}],key:t.name},[s("router-link",{class:{active:e.$route.params.name==t.name},attrs:{to:{name:"list",params:{name:t.name}}},nativeOn:{click:function(t){return e.menuOptionUsed()}}},[e._v(e._s(t.caption))])],1)}),s("li",{directives:[{name:"show",rawName:"v-show",value:e.isMobile,expression:"isMobile"}]},[s("a",{attrs:{href:"https://advarave.github.io/",target:"_blank"}},[e._v("About Me")])]),s("li",{directives:[{name:"show",rawName:"v-show",value:e.isMobile,expression:"isMobile"}],staticClass:"social"},[s("label",[e._v("Share:")]),e._m(2),e._m(3)])],2)])])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{attrs:{href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fadvarave.github.io%2Fux-resources%2F",target:"_blank"}},[s("i",{staticClass:"fab fa-facebook"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{attrs:{href:"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//advarave.github.io/ux-resources/&title=UX%20%26%20UI%20Resources%20by%20Adva%20Rave&summary=Hello,%20I'm%20Adva%20Rave%20and%20those%20are%20my%20UX%20%26%20UI%20resources.%20Feel%20Free%20to%20use%20them.&source=https%3A//advarave.github.io/ux-resources/",target:"_blank"}},[s("i",{staticClass:"fab fa-linkedin"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{attrs:{href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fadvarave.github.io%2Fux-resources%2F",target:"_blank"}},[s("i",{staticClass:"fab fa-facebook"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{attrs:{href:"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//advarave.github.io/ux-resources/&title=UX%20%26%20UI%20Resources%20by%20Adva%20Rave&summary=Hello,%20I'm%20Adva%20Rave%20and%20those%20are%20my%20UX%20%26%20UI%20resources.%20Feel%20Free%20to%20use%20them.&source=https%3A//advarave.github.io/ux-resources/",target:"_blank"}},[s("i",{staticClass:"fab fa-linkedin"})])}],l=1024,c={name:"siteHeader",data:function(){return{resources:window.resources,isMobile:window.outerWidth<=l,mobileMenuShown:!1,filterShown:!1}},methods:{menuOptionUsed:function(){this.mobileMenuShown=!1,document.body.classList=""},mobileMenuToggle:function(){this.mobileMenuShown=!this.mobileMenuShown,document.body.classList=this.mobileMenuShown?"mobile-menu-shown":""},filterMenuToggle:function(){this.mobileMenuShown=!1,document.body.classList=document.body.classList.length?"":"filter-menu-shown"}},mounted:function(){window.addEventListener("resize",function(e){this.isMobile=e.target.outerWidth<=l})}},u=c,m=(s("9b09"),s("2877")),d=Object(m["a"])(u,o,i,!1,null,"311bc883",null),v=d.exports,h={name:"app",components:{"site-header":v}},p=h,f=(s("5c0b"),Object(m["a"])(p,n,a,!1,null,null,null)),b=f.exports,w=s("8c4f"),g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._m(0),s("resource-list",{attrs:{"show-resource":"indexes"}})],1)},_=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h2",[s("b",[e._v("Hello,")]),e._v("\n        I'm Adva Rave and those are my UX & UI resources."),s("br"),e._v("\n        Feel Free to use them.\n    ")])}],x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{component:e.showResource,mobile:e.isMobile}},[s("h2",[s("span",[e._v(e._s(e.resource.caption))]),s("a",{directives:[{name:"show",rawName:"v-show",value:e.shownItems.length,expression:"shownItems.length"}],on:{click:function(t){return e.toggleExpandAll()}}},[e._v(e._s(e.expandAll?"Collapse All":"Expand All"))])]),s("section",[e.resource.filters&&e.resource.filters.length?s("div",{staticClass:"filters"},[s("h3",[e._v("Filter")]),s("ul",e._l(e.resource.filters,function(t){return s("li",{key:t.name},[s("h5",[e._v(e._s(t.caption))]),"range"!=t.type||e.isMobile?e._e():s("div",{staticClass:"range"},[s("div",{staticClass:"label"},[s("div",[s("small",{directives:[{name:"show",rawName:"v-show",value:"price"==t.name,expression:"filter.name=='price'"}],staticClass:"starts-with"},[e._v("starts with")]),s("label",[e._v("$"+e._s(t.selectedRange[0])+" - $"+e._s(t.selectedRange[1]))])]),s("small",{directives:[{name:"show",rawName:"v-show",value:"price"==t.name,expression:"filter.name=='price'"}],staticClass:"per-month"},[e._v("(per month)")])]),s("vue-slider",{attrs:{min:t.min,max:t.max,tooltip:!1,height:13,"dot-size":13,sliderStyle:[{"box-shadow":"0.5px 0.5px 2px 1px #6963e0"},{"box-shadow":"0.5px 0.5px 2px 1px #6963e0"}],"process-style":{backgroundColor:"#6963e0"}},on:{callback:function(t){return e.filterChanged()}},model:{value:t.selectedRange,callback:function(s){e.$set(t,"selectedRange",s)},expression:"filter.selectedRange"}})],1),"range"==t.type&&e.isMobile?s("div",{staticClass:"mobile-range"},[s("label",[e._v("Starts with")]),s("small",{staticClass:"from"},[e._v("$")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedRange[0],expression:"filter.selectedRange[0]"}],attrs:{type:"number"},domProps:{value:t.selectedRange[0]},on:{input:function(s){s.target.composing||e.$set(t.selectedRange,0,s.target.value)}}}),s("label",[e._v("to")]),s("small",{staticClass:"to"},[e._v("$")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedRange[1],expression:"filter.selectedRange[1]"}],attrs:{type:"number"},domProps:{value:t.selectedRange[1]},on:{input:function(s){s.target.composing||e.$set(t.selectedRange,1,s.target.value)}}}),s("label",{staticClass:"per-m"},[e._v("(per month)")])]):e._e(),"checkbox"==t.type?s("ul",e._l(t.options,function(t){return s("li",{key:t.name},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"option.selected"}],attrs:{type:"checkbox",id:t.name},domProps:{checked:Array.isArray(t.selected)?e._i(t.selected,null)>-1:t.selected},on:{change:[function(s){var r=t.selected,n=s.target,a=!!n.checked;if(Array.isArray(r)){var o=null,i=e._i(r,o);n.checked?i<0&&e.$set(t,"selected",r.concat([o])):i>-1&&e.$set(t,"selected",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(t,"selected",a)},function(t){return e.filterChanged()}]}}),s("label",{attrs:{for:t.name}},[e._v(e._s(t.caption))])])}),0):e._e()])}),0),s("a",{directives:[{name:"show",rawName:"v-show",value:e.isMobile,expression:"isMobile"}],on:{click:function(t){return e.mobileCloseFilters()}}},[e._v("Done")])]):e._e(),s("div",{staticClass:"resources"},[s("ul",e._l(e.shownItems,function(t){return s("li",{key:t.url},[s("small",{directives:[{name:"show",rawName:"v-show",value:e.resource.showPrice,expression:"resource.showPrice"}],staticClass:"price"},[e._v(e._s(t.price&&t.price>0?"$"+t.price:"Free"))]),s("a",{attrs:{href:t.url,target:"_blank"}},[s("div",{staticClass:"img",style:{backgroundImage:"url("+t.logo+")"}}),s("h5",[e._v(e._s(t.title))]),s("small",[e._v(e._s(t.url))])]),s("div",{staticClass:"desc"},[s("p",{directives:[{name:"show",rawName:"v-show",value:t.showDesc,expression:"item.showDesc"}]},[e._v(e._s(t.description))]),s("a",{on:{click:function(e){t.showDesc=!t.showDesc}}},[e._v(e._s(t.showDesc?"Show less...":"Show more..."))])])])}),0),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.shownItems.length,expression:"!shownItems.length"}],staticClass:"no-match"},[e._v("\n                No Match Found :( "),s("br"),e._v("\n                Please try to remove some of the filters...\n            ")])])])])},y=[],k=(s("6762"),s("2fdb"),s("f499")),M=s.n(k),C=(s("7f7f"),s("6f79")),R=s.n(C),$=1024,A={name:"resourceList",data:function(){for(var e=0;e<window.resources.length;e++){var t=window.resources[e];if(t.name==(this.showResource||this.$route.params.name)){var s=JSON.parse(M()(t));return{resource:s,shownItems:JSON.parse(M()(t.items||[])),expandAll:!1,isMobile:window.outerWidth<=$}}}},methods:{mobileCloseFilters:function(){document.body.classList="",this.filterChanged()},filterChanged:function(){for(var e=[],t=0;t<this.resource.items.length;t++){for(var s=this.resource.items[t],r=!0,n=0;n<this.resource.filters.length;n++){var a=this.resource.filters[n];switch(a.type){case"checkbox":for(var o=0;o<a.options.length;o++){var i=a.options[o];i.selected&&(s.tags.includes(i.name)||(r=!1))}break;case"range":var l=s.price||0;(a.selectedRange[0]>l||a.selectedRange[1]<l)&&(r=!1);break}if(!r)break}r&&e.push(s)}this.shownItems=e},toggleExpandAll:function(){this.expandAll=!this.expandAll;for(var e=0;e<this.shownItems.length;e++){var t=this.shownItems[e];t.showDesc=this.expandAll}}},components:{"vue-slider":R.a},props:["showResource"]},N=A,S=(s("bca2"),Object(m["a"])(N,x,y,!1,null,"29873b31",null)),O=S.exports,P={name:"homepage",components:{"resource-list":O}},F=P,I=(s("cb99"),Object(m["a"])(F,g,_,!1,null,"1a31ccce",null)),U=I.exports,E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"edit"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedResource,expression:"selectedResource"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedResource=t.target.multiple?s:s[0]}}},e._l(e.resources,function(t){return s("option",{key:t.name,domProps:{value:t}},[e._v(e._s(t.name))])}),0),s("table",[e._m(0),s("tbody",[e._l(e.selectedResource.items,function(t){return s("tr",{key:t.url},[s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.logo,expression:"item.logo"}],attrs:{type:"text"},domProps:{value:t.logo},on:{input:function(s){s.target.composing||e.$set(t,"logo",s.target.value)}}})]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"item.title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(s){s.target.composing||e.$set(t,"title",s.target.value)}}})]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"item.description"}],attrs:{type:"text"},domProps:{value:t.description},on:{input:function(s){s.target.composing||e.$set(t,"description",s.target.value)}}})]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"item.url"}],attrs:{type:"text"},domProps:{value:t.url},on:{input:function(s){s.target.composing||e.$set(t,"url",s.target.value)}}})]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"item.price"}],attrs:{type:"text"},domProps:{value:t.price},on:{input:function(s){s.target.composing||e.$set(t,"price",s.target.value)}}})]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.tags,expression:"item.tags"}],attrs:{type:"text"},domProps:{value:t.tags},on:{input:function(s){s.target.composing||e.$set(t,"tags",s.target.value)}}})]),s("td",[s("a",{on:{click:function(s){e.selectedResource.items.splice(e.selectedResource.items.indexOf(t),1)}}},[e._v("[Remove]")])])])}),s("tr",[s("td",{attrs:{colspan:"7"}},[s("a",{on:{click:function(t){return e.selectedResource.items.push({})}}},[e._v("[Add]")])])])],2)]),s("div",{staticClass:"code"},[s("a",{on:{click:function(t){return e.generateCode()}}},[e._v("Generate Code")]),s("textarea",{directives:[{name:"show",rawName:"v-show",value:e.code,expression:"code"},{name:"model",rawName:"v-model",value:e.code,expression:"code"}],domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}})])])},j=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",[e._v("Logo")]),s("th",[e._v("Title")]),s("th",[e._v("Description")]),s("th",[e._v("Url")]),s("th",[e._v("Price")]),s("th",[e._v("Tags")]),s("th")])])}],D=(s("6b54"),s("28a5"),{name:"edit",data:function(){var e=JSON.parse(M()(window.resources));return{resources:e,selectedResource:e[e.length-1],code:null}},methods:{generateCode:function(){for(var e=0;e<this.resources.length;e++)for(var t=this.resources[e],s=0;s<t.items.length;s++){var r=t.items[s];r.showDesc=!1,r.tags=(r.tags||[]).toString().split(",")}this.code="window.resources="+M()(this.resources)+";"}}}),T=D,L=(s("f45b"),Object(m["a"])(T,E,j,!1,null,"49396b88",null)),X=L.exports;r["a"].config.productionTip=!1,r["a"].use(w["a"]);var J=new w["a"]({routes:[{path:"/",component:U},{path:"/list/:name",name:"list",component:O},{path:"/edit",component:X}]});new r["a"]({render:function(e){return e(b)},router:J}).$mount("#app")},"58bc":function(e,t,s){},"5c0b":function(e,t,s){"use strict";var r=s("5e27"),n=s.n(r);n.a},"5e27":function(e,t,s){},"9b09":function(e,t,s){"use strict";var r=s("a689"),n=s.n(r);n.a},a689:function(e,t,s){},bca2:function(e,t,s){"use strict";var r=s("17de"),n=s.n(r);n.a},cb99:function(e,t,s){"use strict";var r=s("43f6"),n=s.n(r);n.a},f45b:function(e,t,s){"use strict";var r=s("58bc"),n=s.n(r);n.a}});
//# sourceMappingURL=app.cca1b2ac.js.map