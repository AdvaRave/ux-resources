(function(e){function t(t){for(var n,i,a=t[0],l=t[1],c=t[2],d=0,m=[];d<a.length;d++)i=a[d],o[i]&&m.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,a=1;a<s.length;a++){var l=s[a];0!==o[l]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},o={app:0},r=[];function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/ux-resources/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"04a1":function(e,t,s){"use strict";var n=s("5bff"),o=s.n(n);o.a},"43f6":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("site-header"),s("main",[s("router-view",{key:e.$route.path})],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{class:{mobile:e.isMobile},attrs:{id:"header"}},[s("div",[s("a",{directives:[{name:"show",rawName:"v-show",value:e.isMobile,expression:"isMobile"}],staticClass:"menu",on:{click:function(t){return e.mobileMenuToggle()}}},[s("i",{staticClass:"fas fa-bars"})]),s("h1",[s("router-link",{attrs:{to:"/"},nativeOn:{click:function(t){return e.menuOptionUsed()}}},[e._v("My UX & UI Resources")])],1),s("span",{directives:[{name:"show",rawName:"v-show",value:!e.isMobile,expression:"!isMobile"}]},[s("a",{attrs:{href:"https://advarave.github.io/",target:"_blank"}},[e._v("About Me")])]),s("a",{directives:[{name:"show",rawName:"v-show",value:e.isMobile&&e.$route.params.name,expression:"isMobile && $route.params.name"}],staticClass:"filter",on:{click:function(t){return e.filterMenuToggle()}}},[s("i",{staticClass:"fas fa-filter"})])]),s("nav",{directives:[{name:"show",rawName:"v-show",value:!e.isMobile||e.isMobile&&e.mobileMenuShown,expression:"!isMobile || (isMobile && mobileMenuShown)"}]},[s("ul",[e._l(e.resources,function(t){return s("li",{directives:[{name:"show",rawName:"v-show",value:"indexes"!=t.name,expression:"resource.name != 'indexes'"}],key:t.name},[s("router-link",{class:{active:e.$route.params.name==t.name},attrs:{to:{name:"list",params:{name:t.name}}},nativeOn:{click:function(t){return e.menuOptionUsed()}}},[e._v(e._s(t.caption))])],1)}),s("li",{directives:[{name:"show",rawName:"v-show",value:e.isMobile,expression:"isMobile"}]},[s("a",{attrs:{href:"https://advarave.github.io/",target:"_blank"}},[e._v("About Me")])])],2)])])},a=[],l=1024,c={name:"siteHeader",data:function(){return{resources:window.resources,isMobile:window.outerWidth<=l,mobileMenuShown:!1,filterShown:!1}},methods:{menuOptionUsed:function(){this.mobileMenuShown=!1,document.body.classList=""},mobileMenuToggle:function(){this.mobileMenuShown=!this.mobileMenuShown,document.body.classList=this.mobileMenuShown?"mobile-menu-shown":""},filterMenuToggle:function(){this.mobileMenuShown=!1,document.body.classList=document.body.classList.length?"":"filter-menu-shown"}},mounted:function(){window.addEventListener("resize",function(e){this.isMobile=e.target.outerWidth<=l})}},u=c,d=(s("04a1"),s("2877")),m=Object(d["a"])(u,i,a,!1,null,"934e7948",null),p=m.exports,v={name:"app",components:{"site-header":p}},h=v,f=(s("5c0b"),Object(d["a"])(h,o,r,!1,null,null,null)),w=f.exports,g=s("8c4f"),b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._m(0),s("resource-list",{attrs:{"show-resource":"indexes"}})],1)},_=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h2",[s("b",[e._v("Hello,")]),e._v("\n        I'm Adva Rave and those are my UX & UI resources."),s("br"),e._v("\n        Feel Free to use them.\n    ")])}],x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{component:e.showResource,mobile:e.isMobile}},[s("h2",[s("span",[e._v(e._s(e.resource.caption))]),s("a",{directives:[{name:"show",rawName:"v-show",value:e.shownItems.length,expression:"shownItems.length"}],on:{click:function(t){return e.toggleExpandAll()}}},[e._v(e._s(e.expandAll?"Collapse All":"Expand All"))])]),s("section",[e.resource.filters&&e.resource.filters.length?s("div",{staticClass:"filters"},[s("h3",[e._v("Filter")]),s("ul",e._l(e.resource.filters,function(t){return s("li",{key:t.name},[s("h5",[e._v(e._s(t.caption))]),"range"==t.type?s("div",{staticClass:"range"},[s("label",[e._v("$"+e._s(t.selectedRange[0])+" - $"+e._s(t.selectedRange[1]))]),s("vue-slider",{attrs:{"event-type":e.isMobile?"touch":"mouse",min:t.min,max:t.max,tooltip:!1,height:13,"dot-size":13,sliderStyle:[{"box-shadow":"0.5px 0.5px 2px 1px #6963e0"},{"box-shadow":"0.5px 0.5px 2px 1px #6963e0"}],"process-style":{backgroundColor:"#6963e0"}},on:{callback:function(t){return e.filterChanged()}},model:{value:t.selectedRange,callback:function(s){e.$set(t,"selectedRange",s)},expression:"filter.selectedRange"}})],1):e._e(),"checkbox"==t.type?s("ul",e._l(t.options,function(t){return s("li",{key:t.name},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"option.selected"}],attrs:{type:"checkbox",id:t.name},domProps:{checked:Array.isArray(t.selected)?e._i(t.selected,null)>-1:t.selected},on:{change:[function(s){var n=t.selected,o=s.target,r=!!o.checked;if(Array.isArray(n)){var i=null,a=e._i(n,i);o.checked?a<0&&e.$set(t,"selected",n.concat([i])):a>-1&&e.$set(t,"selected",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(t,"selected",r)},function(t){return e.filterChanged()}]}}),s("label",{attrs:{for:t.name}},[e._v(e._s(t.caption))])])}),0):e._e()])}),0),s("a",{directives:[{name:"show",rawName:"v-show",value:e.isMobile,expression:"isMobile"}],on:{click:function(t){return e.mobileCloseFilters()}}},[e._v("Done")])]):e._e(),s("div",{staticClass:"resources"},[s("ul",e._l(e.shownItems,function(t){return s("li",{key:t.url},[s("small",{directives:[{name:"show",rawName:"v-show",value:e.resource.showPrice,expression:"resource.showPrice"}],staticClass:"price"},[e._v(e._s(t.price&&t.price>0?"$"+t.price:"Free"))]),s("a",{attrs:{href:t.url,target:"_blank"}},[s("div",{staticClass:"img",style:{backgroundImage:"url("+t.logo+")"}}),s("h5",[e._v(e._s(t.title))]),s("small",[e._v(e._s(t.url))])]),s("div",{staticClass:"desc"},[s("p",{directives:[{name:"show",rawName:"v-show",value:t.showDesc,expression:"item.showDesc"}]},[e._v(e._s(t.description))]),s("a",{on:{click:function(e){t.showDesc=!t.showDesc}}},[e._v(e._s(t.showDesc?"Show less...":"Show more..."))])])])}),0),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.shownItems.length,expression:"!shownItems.length"}],staticClass:"no-match"},[e._v("\n                No Match Found :( "),s("br"),e._v("\n                Please try to remove some of the filters...\n            ")])])])])},y=[],M=(s("6762"),s("2fdb"),s("f499")),k=s.n(M),$=(s("7f7f"),s("6f79")),N=s.n($),C=1024,O={name:"resourceList",data:function(){for(var e=0;e<window.resources.length;e++){var t=window.resources[e];if(t.name==(this.showResource||this.$route.params.name)){var s=JSON.parse(k()(t));return{resource:s,shownItems:JSON.parse(k()(t.items||[])),expandAll:!1,isMobile:window.outerWidth<=C}}}},methods:{mobileCloseFilters:function(){document.body.classList=""},filterChanged:function(){for(var e=[],t=0;t<this.resource.items.length;t++){for(var s=this.resource.items[t],n=!0,o=0;o<this.resource.filters.length;o++){var r=this.resource.filters[o];switch(r.type){case"checkbox":for(var i=0;i<r.options.length;i++){var a=r.options[i];a.selected&&(s.tags.includes(a.name)||(n=!1))}break;case"range":var l=s.price||0;(r.selectedRange[0]>l||r.selectedRange[1]<l)&&(n=!1);break}if(!n)break}n&&e.push(s)}this.shownItems=e},toggleExpandAll:function(){this.expandAll=!this.expandAll;for(var e=0;e<this.shownItems.length;e++){var t=this.shownItems[e];t.showDesc=this.expandAll}}},components:{"vue-slider":N.a},props:["showResource"]},R=O,S=(s("e028"),Object(d["a"])(R,x,y,!1,null,"2c752fde",null)),P=S.exports,A={name:"homepage",components:{"resource-list":P}},j=A,I=(s("cb99"),Object(d["a"])(j,b,_,!1,null,"1a31ccce",null)),E=I.exports,D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"edit"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedResource,expression:"selectedResource"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedResource=t.target.multiple?s:s[0]}}},e._l(e.resources,function(t){return s("option",{key:t.name,domProps:{value:t}},[e._v(e._s(t.name))])}),0),s("table",[e._m(0),s("tbody",[e._l(e.selectedResource.items,function(t){return s("tr",{key:t.url},[s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.logo,expression:"item.logo"}],attrs:{type:"text"},domProps:{value:t.logo},on:{input:function(s){s.target.composing||e.$set(t,"logo",s.target.value)}}})]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"item.title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(s){s.target.composing||e.$set(t,"title",s.target.value)}}})]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"item.description"}],attrs:{type:"text"},domProps:{value:t.description},on:{input:function(s){s.target.composing||e.$set(t,"description",s.target.value)}}})]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"item.url"}],attrs:{type:"text"},domProps:{value:t.url},on:{input:function(s){s.target.composing||e.$set(t,"url",s.target.value)}}})]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"item.price"}],attrs:{type:"text"},domProps:{value:t.price},on:{input:function(s){s.target.composing||e.$set(t,"price",s.target.value)}}})]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.tags,expression:"item.tags"}],attrs:{type:"text"},domProps:{value:t.tags},on:{input:function(s){s.target.composing||e.$set(t,"tags",s.target.value)}}})]),s("td",[s("a",{on:{click:function(s){e.selectedResource.items.splice(e.selectedResource.items.indexOf(t),1)}}},[e._v("[Remove]")])])])}),s("tr",[s("td",{attrs:{colspan:"7"}},[s("a",{on:{click:function(t){return e.selectedResource.items.push({})}}},[e._v("[Add]")])])])],2)]),s("div",{staticClass:"code"},[s("a",{on:{click:function(t){return e.generateCode()}}},[e._v("Generate Code")]),s("textarea",{directives:[{name:"show",rawName:"v-show",value:e.code,expression:"code"},{name:"model",rawName:"v-model",value:e.code,expression:"code"}],domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}})])])},T=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",[e._v("Logo")]),s("th",[e._v("Title")]),s("th",[e._v("Description")]),s("th",[e._v("Url")]),s("th",[e._v("Price")]),s("th",[e._v("Tags")]),s("th")])])}],L=(s("6b54"),s("28a5"),{name:"edit",data:function(){var e=JSON.parse(k()(window.resources));return{resources:e,selectedResource:e[e.length-1],code:null}},methods:{generateCode:function(){for(var e=0;e<this.resources.length;e++)for(var t=this.resources[e],s=0;s<t.items.length;s++){var n=t.items[s];n.showDesc=!1,n.tags=(n.tags||[]).toString().split(",")}this.code="window.resources="+k()(this.resources)+";"}}}),U=L,F=(s("f45b"),Object(d["a"])(U,D,T,!1,null,"49396b88",null)),J=F.exports;n["a"].config.productionTip=!1,n["a"].use(g["a"]);var W=new g["a"]({routes:[{path:"/",component:E},{path:"/list/:name",name:"list",component:P},{path:"/edit",component:J}]});new n["a"]({render:function(e){return e(w)},router:W}).$mount("#app")},"58bc":function(e,t,s){},"5bff":function(e,t,s){},"5c0b":function(e,t,s){"use strict";var n=s("5e27"),o=s.n(n);o.a},"5e27":function(e,t,s){},"704a":function(e,t,s){},cb99:function(e,t,s){"use strict";var n=s("43f6"),o=s.n(n);o.a},e028:function(e,t,s){"use strict";var n=s("704a"),o=s.n(n);o.a},f45b:function(e,t,s){"use strict";var n=s("58bc"),o=s.n(n);o.a}});
//# sourceMappingURL=app.f15ebb3f.js.map