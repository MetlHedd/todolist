(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},n={app:0},r=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/todolist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1:function(t,e){},2:function(t,e){},3:function(t,e){},"393c":function(t,e,s){"use strict";var a=s("7e41"),n=s.n(a);n.a},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=s("289d"),r=s("d6e1"),i=s("1629"),o=s.n(i),c=s("5d16"),l=s("4833"),u=s.n(l),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("SiteNavbar"),s("router-view"),s("SiteFooter")],1)},d=[],h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"content has-text-centered"},[s("p",[s("strong",[t._v("TO BE NOMINATED")]),t._v(" by "),s("a",{attrs:{href:"#"}},[t._v("Breno ALves")]),t._v(". The source code is licensed "),s("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[t._v("MIT")]),t._v(". ")])])])}],g={name:"SiteFooter"},f=g,b=s("2877"),v=Object(b["a"])(f,h,m,!1,null,null,null),k=v.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-navbar",{attrs:{shadow:!0,"fixed-top":!0,type:"is-danger"}},[s("template",{slot:"brand"},[s("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[s("img",{attrs:{src:"/images/logo.png",alt:"To-do List"}})])],1),s("template",{slot:"start"},[s("b-navbar-item",{attrs:{href:"#"}},[s("b-icon",{attrs:{icon:"home"}}),s("span",[t._v(" Home ")])],1),s("b-navbar-item",{attrs:{href:"#"}},[s("b-icon",{attrs:{icon:"information"}}),s("span",[t._v(" ?? ")])],1)],1),s("template",{slot:"end"},[s("b-navbar-item",{attrs:{tag:"div"}},[s("b-field",[s("b-input",{attrs:{placeholder:"Search for items, tags and projects",type:"search",icon:"magnify"}}),s("p",{staticClass:"control"},[s("button",{staticClass:"button is-info"},[t._v("Search")])])],1)],1)],1)],2)},$=[],_={name:"SiteNavbar"},C=_,j=Object(b["a"])(C,y,$,!1,null,null,null),x=j.exports,T={components:{SiteNavbar:x,SiteFooter:k}},w=T,S=Object(b["a"])(w,p,d,!1,null,null,null),I=S.exports,P=s("8c4f"),O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-quarter"},[s("SiteLeftMenu")],1),s("div",{staticClass:"column box"},[s("b-notification",{attrs:{type:"is-warning","has-icon":"","aria-close-label":"Close notification",role:"alert"}},[t._v(" This in an alpha version of "),s("strong",[t._v("m::TodoList")]),t._v(" if found any bug or want to request a new feature go to "),s("a",{attrs:{href:"https://github.com/MetlHedd/todolist"}},[t._v("https://github.com/MetlHedd/todolist")]),t._v(". ")]),s("TodoListItemsList")],1)])])},D=[],E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app"},[s("b-menu-list",{attrs:{label:"To-do List"}},[s("b-menu-item",{attrs:{icon:"format-list-checks",label:"All items",tag:"router-link",to:"/"}}),s("b-menu-item",{attrs:{icon:"folder-open",label:"Projects",tag:"router-link",to:"/projects/"}}),s("b-menu-item",{attrs:{icon:"tag-multiple",label:"Tags",tag:"router-link",to:"/tags/"}}),s("b-menu-item",{attrs:{icon:"plus-circle",label:"New",tag:"router-link",to:"/tasks/new/"}})],1),s("b-menu-list",{attrs:{label:"Calendar"}},[s("b-menu-item",{attrs:{icon:"calendar-today",label:"Day Tasks",tag:"router-link",to:"/calendar/today/"}}),s("b-menu-item",{attrs:{icon:"calendar-week",label:"Week Tasks",tag:"router-link",to:"/calendar/week/"}}),s("b-menu-item",{attrs:{icon:"calendar-month",label:"Month Taks",tag:"router-link",to:"/calendar/month/"}})],1),s("b-menu-list",{attrs:{label:"Settings"}},[s("b-menu-item",{attrs:{icon:"cogs",label:"General Settings",tag:"router-link",to:"/settings/"}}),s("b-menu-item",{attrs:{icon:"palette",label:"Theme",tag:"router-link",to:"/theme/"}}),s("b-menu-item",{attrs:{icon:"reload",label:"Database Reset",tag:"router-link",to:"/settings/reset/"}}),s("b-menu-item",{attrs:{icon:"information",label:"About",tag:"router-link",to:"/about/"}})],1)],1)},q=[],A={name:"SiteLeftMenu"},B=A,F=Object(b["a"])(B,E,q,!1,null,null,null),L=F.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app"},[s("h1",{staticClass:"title"},[t._v("To-Do List Items")]),s("h2",{staticClass:"subtitle"},[t._v("You are seeing 20 items per page")]),s("hr"),s("b-tabs",{attrs:{type:"is-toggle",expanded:""},on:{change:t.tabChange},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[s("b-tab-item",{attrs:{label:"Activive",icon:"clipboard-list-outline"}}),s("b-tab-item",{attrs:{label:"Inactive",icon:"checkbox-marked-circle-outline"}}),s("b-tab-item",{attrs:{label:"Archived",icon:"archive-outline"}})],1),s("ul",{staticClass:"block-list is-normal is-outlined has-radius"},t._l(t.items,(function(e,a){return s("li",{key:a},[s("nav",{staticClass:"level"},[s("div",{staticClass:"level-left"},[s("div",{staticClass:"level-item block"},[s("b-icon",{attrs:{icon:"file-multiple"}}),s("router-link",{attrs:{to:"/tasks/see/"+e._id}},[t._v(t._s(e.title))])],1)]),s("div",{staticClass:"levem-item"},[s("div",[s("b-field",{attrs:{grouped:"","group-multiline":""}},[s("div",{staticClass:"control"},[s("b-taglist",{attrs:{attached:""}},[s("b-tag",{attrs:{size:"is-small",type:"is-dark"}},[s("b-icon",{attrs:{icon:"calendar",size:"is-small"}})],1),s("b-tag",{attrs:{size:"is-small",type:"is-warning"}},[t._v(" 19/03/2020 - 18:57 ")])],1)],1),t._l(e.tags,(function(e){return s("div",{key:"tag_"+e,staticClass:"control"},[s("b-taglist",{attrs:{attached:""}},[s("b-tag",{attrs:{size:"is-small",type:"is-dark"}},[s("b-icon",{attrs:{icon:"tag",size:"is-small"}})],1),s("b-tag",{attrs:{size:"is-small",type:"is-info"}},[t._v(" "+t._s(e)+" ")])],1)],1)})),t._l(e.projects,(function(e){return s("div",{key:"pr_"+e,staticClass:"control"},[s("b-taglist",{attrs:{attached:""}},[s("b-tag",{attrs:{size:"is-small",type:"is-dark"}},[s("b-icon",{attrs:{icon:"folder-network",size:"is-small"}})],1),s("b-tag",{attrs:{size:"is-small",type:"is-primary"}},[t._v(" "+t._s(e)+" ")])],1)],1)}))],2)],1)]),s("div",{staticClass:"level-right"},[s("div",{staticClass:"level-item"},[s("div",{staticClass:"buttons"},[s("b-button",{attrs:{type:"is-success","icon-right":"check-circle"},on:{click:function(s){t.invertDoneTask(e),t.tabChange()}}}),s("b-button",{attrs:{type:"is-link","icon-right":"pencil",tag:"router-link",to:"/tasks/edit/"+e._id}}),s("b-button",{attrs:{type:"is-warning","icon-right":"archive"},on:{click:function(s){t.invertArchiveTask(e),t.tabChange()}}}),s("b-button",{attrs:{type:"is-danger","icon-right":"delete"},on:{click:function(s){t.deleteTask(e),t.tabChange()}}})],1)])])])])})),0),s("hr"),s("b-pagination",{attrs:{total:t.$parent.pages.numberOfItems,"per-page":t.$parent.pages.itemsPerPage,order:"is-centered",current:t.$parent.pages.currentPage,"range-before":"3","range-after":"1","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{"update:current":function(e){return t.$set(t.$parent.pages,"currentPage",e)},change:t.pageChanged}})],1)},K=[],R={name:"TodoListItemsList",data:function(){return{items:{},oldPage:1,activeTab:0}},created:function(){var t=this;this.$parent.$on("newItems",(function(e){t.items=e,e.length>0&&(t.$parent.lastKey=e[e.length-1]._id,t.$parent.firstKey=e[0]._id)}))},methods:{tabChange:function(){0===this.activeTab?this.$parent.$emit("requestForItems",!0,!1):1===this.activeTab?this.$parent.$emit("requestForItems",!1,!1):this.$parent.$emit("requestForItems",!1,!0)},pageChanged:function(t){t>this.$parent.pages.currentPage?this.$parent.nextPage():this.$parent.backPage()}}},M=R,N=(s("393c"),Object(b["a"])(M,z,K,!1,null,null,null)),W=N.exports,H={name:"Home",data:function(){return{firstKey:null,lastKey:null,page:1,pages:{scheme:{saveID:!0,query:{selector:{_id:{$gte:null},done:{$eq:!1},archived:{$eq:!1}},sort:["_id"],limit:20}},currentPage:1,itemsPerPage:20,numberOfItems:1}}},components:{SiteLeftMenu:L,TodoListItemsList:W},created:function(){var t=this;this.$on("requestForItems",(function(e,s){t.pages.scheme.query.selector._id={$gte:null},t.pages.scheme.query.selector.archived.$eq=s,s?(t.$pouchStorage.fetchItemsDB(t.$pouch,"tasks",{query:{selector:{done:!e},sort:["_id"]}}).then((function(e){t.pages.numberOfItems=e.length})),t.pages.scheme.query.selector.done={$gte:null}):(t.$pouchStorage.fetchItemsDB(t.$pouch,"tasks",{query:{selector:{archived:s,done:!e},sort:["_id"]}}).then((function(e){t.pages.numberOfItems=e.length})),t.pages.scheme.query.selector.done.$eq=!e),t.$pouchStorage.fetchItemsDB(t.$pouch,"tasks",t.pages.scheme).then((function(e){t.$emit("newItems",e)}))})),this.$emit("requestForItems",this.$props.getActive,this.$props.getArchived)},update:function(){this.$emit("requestForItems",this.$props.getActive,this.$props.getArchived)},props:["getArchived","getActive"],methods:{nextPage:function(){var t=this;this.pages.scheme.query.selector._id={$gt:this.lastKey},this.$pouchStorage.fetchItemsDB(this.$pouch,"tasks",this.pages.scheme).then((function(e){t.$emit("newItems",e)}))},backPage:function(){var t=this;this.pages.scheme.query.selector._id={$lt:this.firstKey},this.$pouchStorage.fetchItemsDB(this.$pouch,"tasks",this.pages.scheme).then((function(e){t.$emit("newItems",e)}))}}},U=H,G=Object(b["a"])(U,O,D,!1,null,null,null),J=G.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-quarter"},[s("SiteLeftMenu")],1),s("div",{staticClass:"column box"},[s("div",{staticClass:"content"},[s("p",{staticClass:"title is-4"},[s("b-icon",{attrs:{icon:"text-short"}}),s("span",[t._v(t._s(t.item.title))])],1),s("p",{staticClass:"heading"},[t._v("on "+t._s(t.item.projects.join(", "))+".")]),s("hr")]),s("div",{staticClass:"buttons"},[s("b-button",{attrs:{type:"is-success","icon-right":"check-circle"},on:{click:function(e){return t.invertDoneTask(t.item)}}},[t._v(" Check as "),t.item.done?s("span",[t._v(" done")]):s("span",[t._v(" un-done")])]),s("b-button",{attrs:{type:"is-link","icon-right":"pencil",tag:"router-link",to:"/tasks/edit/"+t.$route.params.id}},[t._v(" Edit ")]),s("b-button",{attrs:{type:"is-warning","icon-right":"archive"},on:{click:function(e){return t.invertArchiveTask(t.item)}}},[t.item.archived?s("span",[t._v("Un-archive")]):s("span",[t._v("Archive")])]),s("b-button",{attrs:{type:"is-danger","icon-right":"delete"},on:{click:function(e){return t.deleteTask(t.item)}}},[t._v(" Delete ")])],1),s("div",{staticClass:"content"},[s("div",{staticClass:"control"},[s("p",{staticClass:"heading"},[s("b-icon",{attrs:{icon:"tag",size:"is-small"}}),s("span",[t._v(" Tags: ")])],1),s("b-field",{attrs:{grouped:"","group-multiline":""}},[s("div",{staticClass:"control"},[s("b-taglist",{attrs:{attached:""}},[s("b-tag",{attrs:{type:"is-dark"}},[s("b-icon",{attrs:{icon:"calendar",size:"is-small"}})],1),s("b-tag",{attrs:{type:"is-warning"}},[t._v(" 19/03/2020 - 18:57 ")])],1)],1),t._l(t.item.tags,(function(e){return s("div",{key:e,staticClass:"control"},[s("b-taglist",{attrs:{attached:""}},[s("b-tag",{attrs:{type:"is-dark"}},[s("b-icon",{attrs:{icon:"tag",size:"is-small"}})],1),s("b-tag",{attrs:{type:"is-info"}},[t._v(" "+t._s(e)+" ")])],1)],1)}))],2),s("hr")],1)]),s("div",{staticClass:"control"},[s("p",{staticClass:"heading"},[s("b-icon",{attrs:{icon:"text-box-multiple",size:"is-small"}}),s("span",[t._v(" Content: ")])],1),s("p",{staticClass:"content"},[s("markduck",{attrs:{markdown:t.item.content}})],1)])])])])},V=[],Q=s("fdbd"),X=s.n(Q),Z={name:"TasksSeeItem",data:function(){return{item:{content:"",projects:[],tags:[],title:"",done:!1,archived:!1}}},components:{SiteLeftMenu:L,markduck:X()({})},created:function(){var t=this;this.$pouchStorage.getDBItem(this.$pouch,"tasks",this.$route.params.id).then((function(e){e?(t.item=e,0===t.item.projects.length&&(t.item.projects=["No projects found"]),0===t.item.tags.length&&(t.item.tags=["No tags found"])):t.$router.push("/")}))}},tt=Z,et=Object(b["a"])(tt,Y,V,!1,null,null,null),st=et.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-quarter"},[s("SiteLeftMenu")],1),s("div",{staticClass:"column box"},[s("div",{staticClass:"content"},[s("div",{staticClass:"control"},[s("p",{staticClass:"heading"},[s("b-icon",{attrs:{icon:"format-title",size:"is-small"}}),s("span",[t._v(" Title: ")])],1),s("b-field",{attrs:{label:"Add a title to this task"}},[s("b-input",{attrs:{type:"text",icon:"pencil",placeholder:"Insert the item title"},model:{value:t.item.title,callback:function(e){t.$set(t.item,"title",e)},expression:"item.title"}})],1),s("hr")],1),s("div",{staticClass:"control"},[s("p",{staticClass:"heading"},[s("b-icon",{attrs:{icon:"checkbox-multiple-marked",size:"is-small"}}),s("span",[t._v(" Checked as done: ")])],1),s("b-switch",{model:{value:t.item.done,callback:function(e){t.$set(t.item,"done",e)},expression:"item.done"}},[t._v("Status")]),s("hr")],1),s("div",{staticClass:"control"},[s("p",{staticClass:"heading"},[s("b-icon",{attrs:{icon:"folder",size:"is-small"}}),s("span",[t._v(" Projects: ")])],1),s("b-field",{attrs:{label:"Add some projects"}},[s("b-taginput",{attrs:{ellipsis:"",icon:"folder-plus",type:"is-info",placeholder:"Add new projects..."},model:{value:t.item.projects,callback:function(e){t.$set(t.item,"projects",e)},expression:"item.projects"}})],1),s("hr")],1),s("div",{staticClass:"control"},[s("p",{staticClass:"heading"},[s("b-icon",{attrs:{icon:"tag",size:"is-small"}}),s("span",[t._v(" Tags: ")])],1),s("b-field",{attrs:{label:"Add some tags"}},[s("b-taginput",{attrs:{ellipsis:"",icon:"tag-plus",type:"is-info",placeholder:"Add new tags..."},model:{value:t.item.tags,callback:function(e){t.$set(t.item,"tags",e)},expression:"item.tags"}})],1),s("hr")],1),s("div",{staticClass:"control"},[s("p",{staticClass:"heading"},[s("b-icon",{attrs:{icon:"text-box-multiple",size:"is-small"}}),s("span",[t._v(" Content: ")])],1)])]),s("vue-freemde",{ref:"Markdown",attrs:{configs:t.freeMDEConfigs},model:{value:t.item.content,callback:function(e){t.$set(t.item,"content",e)},expression:"item.content"}}),s("div",{staticClass:"buttons"},[s("b-button",{attrs:{type:"is-success","icon-right":"playlist-plus"},on:{click:function(e){return t.sendForms(t.item)}}},[t.$route.params.id?s("span",[t._v(" Save changes ")]):s("span",[t._v(" Create a new item ")])]),s("b-button",{attrs:{type:"is-danger","icon-right":"delete",tag:"router-link",to:"/"}},[t._v(" Cancel ")])],1)],1)])])},nt=[],rt=s("353a"),it={name:"TasksNewItem",data:function(){return{item:{title:"Item Title",content:"",tags:["New Tag"],projects:["New Project"]},freeMDEConfigs:{autofocus:!1,spellChecker:!1},formsOptions:{canSendForms:!1,newItem:!0}}},created:function(){var t=this;this.$pouchStorage.getDBItem(this.$pouch,"tasks",this.$route.params.id).then((function(e){e?(t.formsOptions.canSendForms=!0,t.formsOptions.newItem=!1,t.item=e):t.formsOptions.canSendForms=!0}))},components:{SiteLeftMenu:L,VueFreemde:rt["a"]},methods:{sendForms:function(t){this.formsOptions.canSendForms&&(this.formsOptions.newItem?this.$router.push("/tasks/see/"+this.$pouchStorage.addTask(this.$pouch,t)):(this.$pouchStorage.addTask(this.$pouch,t),this.$router.push("/tasks/see/"+this.$route.params.id)))}}},ot=it,ct=Object(b["a"])(ot,at,nt,!1,null,null,null),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-quarter"},[s("SiteLeftMenu")],1),s("div",{staticClass:"column box"},[s("h1",{staticClass:"title"},[t._v("Tags Items")]),s("h2",{staticClass:"subtitle"},[t._v("You are seeing 20 items per page")]),s("hr"),s("ul",{staticClass:"block-list is-normal is-outlined has-radius"},t._l(t.items,(function(e,a){return s("li",{key:a},[s("nav",{staticClass:"level"},[s("div",{staticClass:"level-left"},[s("div",{staticClass:"level-item block"},[s("b-icon",{attrs:{icon:"folder"}}),s("a",{attrs:{href:"/tags/see/"+e._id}},[t._v(" "+t._s(e.name)+" ")])],1)]),s("div",{staticClass:"levem-item"},[s("div",[s("b-field",{attrs:{grouped:"","group-multiline":""}},[s("div",{staticClass:"control"},[s("b-taglist",{attrs:{attached:""}},[s("b-tag",{attrs:{size:"is-small",type:"is-dark"}},[s("b-icon",{attrs:{icon:"information",size:"is-small"}})],1),s("b-tag",{attrs:{size:"is-small",type:"is-warning"}},[t._v(" Number of items with this project: "+t._s(e.itemsWith.length)+" ")])],1)],1)])],1)]),s("div",{staticClass:"level-right"},[s("div",{staticClass:"level-item"},[s("div",{staticClass:"buttons"},[s("b-button",{attrs:{type:"is-link","icon-right":"pencil"},on:{click:function(s){return t.editTag(e)}}}),s("b-button",{attrs:{type:"is-danger","icon-right":"delete"},on:{click:function(s){return t.deleteTag(e)}}})],1)])])])])})),0),s("hr"),s("b-pagination",{attrs:{total:t.pages.numberOfItems,"per-page":t.pages.itemsPerPage,order:"is-centered",current:t.pages.currentPage,"range-before":"3","range-after":"1","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{"update:current":function(e){return t.$set(t.pages,"currentPage",e)},change:t.pageChanged}})],1)])])},pt=[],dt=(s("b0c0"),{name:"ProjectItems",data:function(){return{firstKey:null,lastKey:null,pages:{scheme:{saveID:!0,query:{selector:{_id:{$gte:null}},sort:["_id"],limit:20}},currentPage:1,itemsPerPage:20,numberOfItems:1},items:[]}},components:{SiteLeftMenu:L},created:function(){var t=this;this.$on("requestForItems",(function(){t.pages.scheme.query.selector._id={$gte:null},t.$pouchStorage.fetchItemsDB(t.$pouch,"tags",t.pages.scheme).then((function(e){t.items=e,e.length>0&&(t.lastKey=e[e.length-1]._id,t.firstKey=e[0]._id)}))})),this.$emit("requestForItems")},updated:function(){this.$emit("requestForItems")},methods:{nextPage:function(){var t=this;this.pages.scheme.query.selector._id={$gt:this.lastKey},this.$pouchStorage.fetchItemsDB(this.$pouch,"tags",this.pages.scheme).then((function(e){t.items=e,e.length>0&&(t.lastKey=e[e.length-1]._id,t.firstKey=e[0]._id)}))},backPage:function(){var t=this;this.pages.scheme.query.selector._id={$lt:this.firstKey},this.$pouchStorage.fetchItemsDB(this.$pouch,"tags",this.pages.scheme).then((function(e){t.items=e,e.length>0&&(t.lastKey=e[e.length-1]._id,t.firstKey=e[0]._id)}))},pageChanged:function(t){t>this.pages.currentPage?this.nextPage():this.backPage()},editTag:function(t){var e=this;this.$buefy.dialog.prompt({message:"Edit the tag name",inputAttrs:{placeholder:"e.g. Tag Name",value:t.name},trapFocus:!0,onConfirm:function(s){e.$pouchStorage.editTPFromTasks(e.$pouch,"tags",t._id,s)}})},deleteTag:function(t){var e=this;this.$buefy.dialog.confirm({title:"Deleting Tag",message:"Are you sure you want to <b>delete</b> this tag? This action cannot be undone.",confirmText:"Delete Tag",type:"is-danger",hasIcon:!0,onConfirm:function(){e.$pouchStorage.deleteTPFromTasks(e.$pouch,"tags",t._id),e.$buefy.toast.open({duration:3e3,message:"Done",type:"is-success"})}})}}}),ht=dt,mt=Object(b["a"])(ht,ut,pt,!1,null,null,null),gt=mt.exports,ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-quarter"},[s("SiteLeftMenu")],1),s("div",{staticClass:"column box"},[s("h1",{staticClass:"title"},[t._v("Project Items")]),s("h2",{staticClass:"subtitle"},[t._v("You are seeing 20 items per page")]),s("hr"),s("ul",{staticClass:"block-list is-normal is-outlined has-radius"},t._l(t.items,(function(e,a){return s("li",{key:a},[s("nav",{staticClass:"level"},[s("div",{staticClass:"level-left"},[s("div",{staticClass:"level-item block"},[s("b-icon",{attrs:{icon:"folder"}}),s("a",{attrs:{href:"/projects/see/"+e._id}},[t._v(" "+t._s(e.name)+" ")])],1)]),s("div",{staticClass:"levem-item"},[s("div",[s("b-field",{attrs:{grouped:"","group-multiline":""}},[s("div",{staticClass:"control"},[s("b-taglist",{attrs:{attached:""}},[s("b-tag",{attrs:{size:"is-small",type:"is-dark"}},[s("b-icon",{attrs:{icon:"information",size:"is-small"}})],1),s("b-tag",{attrs:{size:"is-small",type:"is-warning"}},[t._v(" Number of items with this project: "+t._s(e.itemsWith.length)+" ")])],1)],1)])],1)]),s("div",{staticClass:"level-right"},[s("div",{staticClass:"level-item"},[s("div",{staticClass:"buttons"},[s("b-button",{attrs:{type:"is-link","icon-right":"pencil"},on:{click:function(s){return t.editProject(e)}}}),s("b-button",{attrs:{type:"is-danger","icon-right":"delete"},on:{click:function(s){return t.deleteProject(e)}}})],1)])])])])})),0),s("hr"),s("b-pagination",{attrs:{total:t.pages.numberOfItems,"per-page":t.pages.itemsPerPage,order:"is-centered",current:t.pages.currentPage,"range-before":"3","range-after":"1","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{"update:current":function(e){return t.$set(t.pages,"currentPage",e)},change:t.pageChanged}})],1)])])},bt=[],vt={name:"ProjectItems",data:function(){return{firstKey:null,lastKey:null,pages:{scheme:{saveID:!0,query:{selector:{_id:{$gte:null}},sort:["_id"],limit:20}},currentPage:1,itemsPerPage:20,numberOfItems:1},items:[]}},components:{SiteLeftMenu:L},created:function(){var t=this;this.$on("requestForItems",(function(){t.pages.scheme.query.selector._id={$gte:null},t.$pouchStorage.fetchItemsDB(t.$pouch,"projects",t.pages.scheme).then((function(e){t.items=e,e.length>0&&(t.lastKey=e[e.length-1]._id,t.firstKey=e[0]._id)}))})),this.$emit("requestForItems")},updated:function(){this.$emit("requestForItems")},methods:{nextPage:function(){var t=this;this.pages.scheme.query.selector._id={$gt:this.lastKey},this.$pouchStorage.fetchItemsDB(this.$pouch,"projects",this.pages.scheme).then((function(e){t.items=e,e.length>0&&(t.lastKey=e[e.length-1]._id,t.firstKey=e[0]._id)}))},backPage:function(){var t=this;this.pages.scheme.query.selector._id={$lt:this.firstKey},this.$pouchStorage.fetchItemsDB(this.$pouch,"projects",this.pages.scheme).then((function(e){t.items=e,e.length>0&&(t.lastKey=e[e.length-1]._id,t.firstKey=e[0]._id)}))},pageChanged:function(t){t>this.pages.currentPage?this.nextPage():this.backPage()},editProject:function(t){var e=this;this.$buefy.dialog.prompt({message:"Edit the project name",inputAttrs:{placeholder:"e.g. Project A",value:t.name},trapFocus:!0,onConfirm:function(s){e.$pouchStorage.editTPFromTasks(e.$pouch,"projects",t._id,s)}})},deleteProject:function(t){var e=this;this.$buefy.dialog.confirm({title:"Deleting Project",message:"Are you sure you want to <b>delete</b> this project? This action cannot be undone.",confirmText:"Delete Project",type:"is-danger",hasIcon:!0,onConfirm:function(){e.$pouchStorage.deleteTPFromTasks(e.$pouch,"projects",t._id),e.$buefy.toast.open({duration:3e3,message:"Done",type:"is-success"})}})}}},kt=vt,yt=Object(b["a"])(kt,ft,bt,!1,null,null,null),$t=yt.exports,_t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-quarter"},[s("SiteLeftMenu")],1),s("div",{staticClass:"column box"},[s("h1",{staticClass:"title"},[t._v("General Settings")]),s("h2",{staticClass:"subtitle"},[t._v("Here you can set the settings of this app")]),s("hr"),s("div",{staticClass:"control"},[s("p",{staticClass:"heading"},[s("b-icon",{attrs:{icon:"file",size:"is-small"}}),s("span",[t._v(" File Control: ")])],1),s("div",{staticClass:"buttons"},[s("b-upload",{on:{input:t.importDB},model:{value:t.databaseImport,callback:function(e){t.databaseImport=e},expression:"databaseImport"}},[s("a",{staticClass:"button is-primary"},[s("b-icon",{attrs:{icon:"upload"}}),s("span",[t._v("Click to upload")])],1)]),s("b-button",{attrs:{type:"is-info","icon-right":"file-download",tag:"a",href:t.databaseExport.href,download:t.databaseExport.download}},[t._v("File Export")])],1)]),s("hr"),s("div",{staticClass:"control"},[s("p",{staticClass:"heading"},[s("b-icon",{attrs:{icon:"format-title",size:"is-small"}}),s("span",[t._v(" Database: ")])],1),s("div",{staticClass:"buttons"},[s("b-button",{attrs:{type:"is-danger","icon-right":"delete"},on:{click:t.clearDB}},[t._v("Clear db")])],1)])])])])},Ct=[],jt=(s("7db0"),s("d3b7"),s("3ca3"),s("ddb0"),s("2b3d"),s("96cf"),s("1da1")),xt={name:"GeneralSettings",data:function(){return{options:{itemsPerPage:20},databaseExport:{href:!1,download:!1},databaseImport:null}},components:{SiteLeftMenu:L},created:function(){this.exportDB()},methods:{clearDB:function(){var t=this;this.$buefy.dialog.confirm({title:"Deleting Database",message:"Are you sure you want to <b>delete</b> the entiry db? This action cannot be undone.",confirmText:"Delete Database",type:"is-danger",hasIcon:!0,onConfirm:function(){t.$pouch.destroy("tasks").catch((function(t){return console.error("Error on `destroy->Task`, details:",t.status,"-",t.message)})),t.$pouch.destroy("projects").catch((function(t){return console.error("Error on `destroy->Projects`, details:",t.status,"-",t.message)})),t.$pouch.destroy("tags").catch((function(t){return console.error("Error on `destroy->Tags`, details:",t.status,"-",t.message)})),t.$buefy.toast.open({duration:3e3,message:"Done",type:"is-success"})}})},exportDB:function(){var t=Object(jt["a"])(regeneratorRuntime.mark((function t(){var e,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={tasks:[],tags:[],projects:[]},t.next=3,this.$pouch.find({selector:{_id:{$gte:null}},sort:["_id"]},"tasks").then(function(){var t=Object(jt["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a.docs){t.next=4;break}return e.tasks=a.docs,t.next=4,s.$pouch.find({selector:{_id:{$gte:null}},sort:["_id"]},"tags").then(function(){var t=Object(jt["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a.docs){t.next=4;break}return e.tags=a.docs,t.next=4,s.$pouch.find({selector:{_id:{$gte:null}},sort:["_id"]},"projects").then((function(t){if(t.docs){e.projects=t.docs;var a=new Blob([JSON.stringify(e)],{type:"application/json"});s.databaseExport.href=URL.createObjectURL(a),s.databaseExport.download="todolistDB.json"}}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.error("Error on `exportDB`, details:",t.status,"-",t.message)}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),importDB:function(){var t=Object(jt["a"])(regeneratorRuntime.mark((function t(e){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=URL.createObjectURL(e),t.next=3,fetch(s).then((function(t){return t.json()}));case 3:a=t.sent,a.tasks&&(console.log("t1"),this.$pouch.bulkDocs(a.tasks,{new_edits:!1},"tasks").catch((function(t){console.error("Error on `importDB`, details:",t.status,"-",t.message)})).then((function(){return console.info("true")}))),a.tags&&this.$pouch.bulkDocs(a.tags,{new_edits:!1},"tags").catch((function(t){console.error("Error on `importDB`, details:",t.status,"-",t.message)})),a.projects&&this.$pouch.bulkDocs(a.projects,{new_edits:!1},"projects").catch((function(t){console.error("Error on `importDB`, details:",t.status,"-",t.message)}));case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},Tt=xt,wt=Object(b["a"])(Tt,_t,Ct,!1,null,null,null),St=wt.exports;a["default"].use(P["a"]);var It=[{path:"/",name:"Home",component:J,props:{getArchived:!1,getActive:!0}},{path:"/tasks/see/:id",name:"TasksSeeItem",component:st},{path:"/tasks/new/",name:"TasksNewItem",component:lt},{path:"/tasks/edit/:id",name:"TaskEditItem",component:lt},{path:"/projects",name:"ProjectsItems",component:$t},{path:"/tags",name:"TagsItems",component:gt},{path:"/settings",name:"GeneralSettings",component:St}],Pt=new P["a"]({base:"/todolist/",mode:"history",routes:It}),Ot=Pt,Dt=(s("c975"),s("a434"),s("ec26")),Et=s("26bf"),qt="83d5d814-0fe5-4ea3-8e5a-7560cdfd1c71",At={install:function(t){t.prototype.$pouchStorage={},t.mixin({methods:{invertDoneTask:function(t){this.$buefy.toast.open({duration:3e3,message:"Done",type:"is-success"}),t.done=!t.done,this.$pouchStorage.editDBItemAsObject(this.$pouch,"tasks",t._id,{done:t.done})},invertArchiveTask:function(t){this.$buefy.toast.open({duration:3e3,message:"Done",type:"is-success"}),t.archived=!t.archived,this.$pouchStorage.editDBItemAsObject(this.$pouch,"tasks",t._id,{archived:t.archived})},deleteTask:function(t){var e=this;this.$buefy.dialog.confirm({title:"Deleting Task",message:"Are you sure you want to <b>delete</b> this task? This action cannot be undone.",confirmText:"Delete Task",type:"is-danger",hasIcon:!0,onConfirm:function(){e.$pouchStorage.deleteTask(e.$pouch,t._id),e.$buefy.toast.open({duration:3e3,message:"Done",type:"is-success"})}})}}}),t.prototype.$pouchStorage.addTask=function(e,s){var a=Object(Dt["a"])();return s._id&&(a=s._id),e.get(a,{},"tasks").then(function(){var a=Object(jt["a"])(regeneratorRuntime.mark((function a(n){var r,i,o,c,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:a.t0=regeneratorRuntime.keys(n.tags);case 1:if((a.t1=a.t0()).done){a.next=9;break}if(r=a.t1.value,-1!==s.tags.indexOf(n.tags[r])){a.next=7;break}return a.next=6,t.prototype.$pouchStorage.removeTaskFromAnything(e,"tags",Object(Et["a"])(n.tags[r],qt),s._id);case 6:n.tags.splice(r,1);case 7:a.next=1;break;case 9:a.t2=regeneratorRuntime.keys(s.tags);case 10:if((a.t3=a.t2()).done){a.next=17;break}if(i=a.t3.value,-1!==n.tags.indexOf(s.tags[i])){a.next=15;break}return a.next=15,t.prototype.$pouchStorage.addTP(e,"tags",Object(Et["a"])(s.tags,qt),s._id);case 15:a.next=10;break;case 17:a.t4=regeneratorRuntime.keys(n.projects);case 18:if((a.t5=a.t4()).done){a.next=26;break}if(o=a.t5.value,-1!==s.projects.indexOf(n.projects[o])){a.next=24;break}return a.next=23,t.prototype.$pouchStorage.removeTaskFromAnything(e,"projects",Object(Et["a"])(n.projects[o],qt),s._id);case 23:n.projects.splice(o,1);case 24:a.next=18;break;case 26:a.t6=regeneratorRuntime.keys(s.projects);case 27:if((a.t7=a.t6()).done){a.next=34;break}if(c=a.t7.value,-1!==n.projects.indexOf(s.projects[c])){a.next=32;break}return a.next=32,t.prototype.$pouchStorage.addTP(e,"projects",Object(Et["a"])(s.projects,qt),s._id);case 32:a.next=27;break;case 34:for(l in s)s[l]!==n[l]&&(n[l]=s[l]);return a.abrupt("return",e.put(n,{},"tasks").catch((function(t){return console.error("Error on `addTask(1)`, details:",t.status,"-",t.message),!1})));case 36:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()).catch((function(){for(var n in s.tags)t.prototype.$pouchStorage.addTP(e,"tags",s.tags[n],a);for(var r in s.projects)t.prototype.$pouchStorage.addTP(e,"projects",s.projects[r],a);return e.put({_id:a,title:s.title,done:!1,archived:!1,timeToBeDone:!1,content:s.content,tags:s.tags,projects:s.projects,timeStamp:Date.now()},{},"tasks")})).then((function(){return!0})).catch((function(t){return console.error("Error on `addTask(2)`, details:",t.status,"-",t.message),!1})),a},t.prototype.$pouchStorage.deleteTask=function(e,s){return e.get(s,{},"tasks").then((function(a){for(var n in a.tags){var r=Object(Et["a"])(a.tags[n],qt);t.prototype.$pouchStorage.removeTaskFromAnything(e,"tags",r,s)}for(var i in a.projects){var o=Object(Et["a"])(a.projects[i],qt);t.prototype.$pouchStorage.removeTaskFromAnything(e,"projects",o,s)}t.prototype.$pouchStorage.deleteDBItem(e,"tasks",s)})).catch((function(t){return console.error("Error on `deleteTask`, details:",t.status,"-",t.message),!1}))},t.prototype.$pouchStorage.addTP=function(t,e,s,a){return t.get(Object(Et["a"])(s,qt),{},e).then(function(){var s=Object(jt["a"])(regeneratorRuntime.mark((function s(n){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(-1!==n.itemsWith.indexOf(a)){s.next=4;break}return n.itemsWith.push(a),s.next=4,t.put(n,{},e).catch((function(t){return console.error("Error on `addTP(1)`, details:",t.status,"-",t.message),!1}));case 4:return s.abrupt("return",!0);case 5:case"end":return s.stop()}}),s)})));return function(t){return s.apply(this,arguments)}}()).catch((function(){return t.put({_id:Object(Et["a"])(s,qt),name:s,itemsWith:[a]},{},e)})).catch((function(t){return console.error("Error on `addTP(2)`, details:",t.status,"-",t.message),!1}))},t.prototype.$pouchStorage.removeTaskFromAnything=function(t,e,s,a){return t.get(s,{},e).then((function(s){return 1===s.itemsWith.length?t.remove(s,{},e):(s.itemsWith.splice(s.itemsWith.indexOf(a),1),t.put(s,{},e))})).catch((function(t){return console.error("Error on `removeTaskFromAnything`, details:",t.status,"-",t.message),!1}))},t.prototype.$pouchStorage.addTPOnTasks=function(t,e,s,a){return t.get(s,{},"tasks").then((function(s){return-1!==s[e].indexOf(a)||(s[e].push(a),t.put(s,{},"tasks"))})).catch((function(t){return console.error("Error on `addTPOnTasks`, details:",t.status,"-",t.message),!1}))},t.prototype.$pouchStorage.editTPFromTasks=function(t,e,s,a){return t.get(s,{},e).then((function(s){for(var n in t.remove(s,{},e),s.itemsWith)t.get(s.itemsWith[n],{},"tasks").then((function(n){n[e].splice(n[e].indexOf(s.name),1,a),t.put(n,{},"tasks")}));return s})).then((function(s){return t.put({_id:Object(Et["a"])(a,qt),name:a,itemsWith:s.itemsWith},{},e)})).catch((function(t){return console.error("Error on `editTPFromTasks`, details:",t.status,"-",t.message),!1}))},t.prototype.$pouchStorage.deleteTPFromTasks=function(t,e,s){return t.get(s,{},e).then(function(){var s=Object(jt["a"])(regeneratorRuntime.mark((function s(a){var n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:t.remove(a,{},e),s.t0=regeneratorRuntime.keys(a.itemsWith);case 2:if((s.t1=s.t0()).done){s.next=8;break}return n=s.t1.value,s.next=6,t.get(a.itemsWith[n],{},"tasks").then(function(){var s=Object(jt["a"])(regeneratorRuntime.mark((function s(n){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return n[e].splice(n[e].indexOf(a.name),1),s.next=3,t.put(n,{},"tasks");case 3:case"end":return s.stop()}}),s)})));return function(t){return s.apply(this,arguments)}}());case 6:s.next=2;break;case 8:case"end":return s.stop()}}),s)})));return function(t){return s.apply(this,arguments)}}()).catch((function(t){return console.error("Error on `editTPTasks`, details:",t.status,"-",t.message),!1}))},t.prototype.$pouchStorage.getDBItem=function(t,e,s){return t.get(s,{},e).then((function(t){return t})).catch((function(t){return console.error("Error on `getDBItem`, details:",t.status,"-",t.message),!1}))},t.prototype.$pouchStorage.fetchItemsDB=function(t,e,s){return t.find(s.query,e).then((function(t){return t&&t.docs.length>0?t.docs:[]})).catch((function(t){return console.error("Error on `fetchItemsDB`, details:",t.status,"-",t.message),!1}))},t.prototype.$pouchStorage.fetchNumberOfItems=function(t,e){return t.info(e).then((function(t){return t.doc_count})).catch((function(t){return console.error("Error on `fetchNumberOfItems`, details:",t.status,"-",t.message),0}))},t.prototype.$pouchStorage.editDBItemAsObject=function(t,e,s,a){return t.get(s,{},e).then((function(s){for(var n in a)a[n]!==s[n]&&(s[n]=a[n]);return t.put(s,{},e)})).catch((function(t){return console.error("Error on `editDBItemAsObject`, details:",t.status,"-",t.message),!1}))},t.prototype.$pouchStorage.deleteDBItem=function(t,e,s){return t.get(s,{},e).then((function(s){return t.remove(s,{},e)})).catch((function(t){return console.error("Error on `deleteDBItem`, details:",t.status,"-",t.message),!1}))}}};s("5abe"),s("5363");r["a"].plugin(c["a"]),r["a"].plugin(u.a),a["default"].config.productionTip=!1,a["default"].use(n["a"],{defaultIconPack:"mdi"}),a["default"].use(o.a,{pouch:r["a"],defaultDB:"tasks"}),a["default"].use(At),a["default"].mixin({methods:Storage}),new a["default"]({router:Ot,render:function(t){return t(I)}}).$mount("#app")},"7e41":function(t,e,s){}});
//# sourceMappingURL=app.53823e6c.js.map