webpackJsonp([1],{"25z3":function(t,e){},"5jHi":function(t,e){},AGVb:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},a,!1,function(t){n("yzEB")},null,null).exports,o=n("/ocq"),r=n("//Fk"),d=n.n(r),l=n("Au9i");function c(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!=n?decodeURI(n[2]):null}var g={computed:{content:function(){var t=this.item.msgSubject;return this.item.summary&&(t+="---"+this.item.summary),t.length>30?t.substring(0,30)+"...":t},date:function(){return function(t){var e=new Date(t);return e.getFullYear()+"-"+e.getMonth()+"-"+e.getDate()+"  "+e.getHours()+":"+e.getMinutes()}(this.item.createTime)},icon:function(){return this.item.imageUrl}},props:["item"],name:"NoticeCell",methods:{getStyle:function(t){if(t)return{width:"calc(100% - 80px - 1rem)"}},handleClick:function(){this.$emit("select",this.item.id)}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"noticecell",on:{click:t.handleClick}},[n("div",{staticClass:"maincontent"},[n("span",{staticClass:"text",style:t.getStyle(t.icon)},[t._v(t._s(t.content))]),t._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:t.icon,expression:"icon"}],staticClass:"icon",staticStyle:{width:"80px",height:"80px"},attrs:{src:t.icon}})]),t._v(" "),n("div",{staticClass:"date"},[t._v(t._s(t.date))]),t._v(" "),n("div",{staticClass:"line"})])},staticRenderFns:[]};var m=n("VU/8")(g,u,!1,function(t){n("atwT")},"data-v-1a4f05dc",null).exports,p=n("mtWM"),h=n.n(p).a.create({baseURL:Object({NODE_ENV:"production"}).BASE_API,timeout:5e3});h.interceptors.request.use(function(t){return t},function(t){console.log(t),d.a.reject(t)}),h.interceptors.response.use(function(t){return t},function(t){return console.log("err"+t),Message({message:t.message,type:"error",duration:5e3}),d.a.reject(t)});var v=h;function f(t){return v({url:"/jsestate-service/msg/msg_list",method:"POST",data:t})}var w={components:{NoticeCell:m},mounted:function(){document.title="所有内部通知";var t=navigator.userAgent;this.isAndroid=t.indexOf("Android")>-1||t.indexOf("Adr")>-1,this.userId=c("userId"),this.token=c("token"),l.Indicator.open({text:"加载中...",spinnerType:"fading-circle"}),this.loadTop()},methods:{loadMore:function(){var t=this;this.allLoaded?this.loading=!1:(this.loading=!0,this.pageIndex+=1,this.getList(this.pageIndex,this.pageSize).then(function(e){t.msgList=t.msgList.concat(e.msgList),e.msgList.length<t.pageSize&&(t.allLoaded=!0),t.pageIndex=parseInt(e.pageIndex),t.loading=!1}).catch(function(){t.networkerror=!0}))},loadTop:function(){var t=this;this.networkerror=!1,this.nodata=!1,this.pageIndex=1,this.getList(this.pageIndex,this.pageSize).then(function(e){l.Indicator.close(),t.networkerror=!1,t.msgList=e.msgList,t.pageIndex=parseInt(e.pageIndex),t.allLoaded=!1,e.msgList.length<t.pageSize&&(t.allLoaded=!0),0==t.msgList.length&&(t.nodata=!0),console.log(t),t.$refs.loadmore&&t.$refs.loadmore.onTopLoaded()}).catch(function(e){console.log(e),l.Indicator.close(),e.data&&(t.errormsg=e.data.message),t.networkerror=!0})},handleTopChange:function(t){this.topStatus=t},selectMessage:function(t){console.log(t.msgId),this.isAndroid?window.android&&window.android.onMessageClick(t.msgId):window.webkit&&window.webkit.messageHandlers.onMessageClick.postMessage({msgId:t.msgId})},getList:function(t,e){this.errormsg="网络开了小差，请点击重试";var n={isRead:"0",userId:this.userId,token:this.token,pageSize:e,pageIndex:t};return new d.a(function(t,e){f(n).then(function(n){"0"==n.data.resultCode?t(n.data):e(n)}).catch(function(t){e(t)})})}},data:function(){return{isAndroid:!1,nodata:!1,loading:!1,pageSize:20,pageIndex:1,msgList:[],allLoaded:!1,topStatus:"",networkerror:!1,errormsg:"网络开了小差，请点击重试"}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[t.msgList.length>0&&!t.networkerror?n("div",{},[n("mt-loadmore",{ref:"loadmore",attrs:{"top-method":t.loadTop},on:{"top-status-change":t.handleTopChange}},[n("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-immediate-check":"false","infinite-scroll-distance":"50"}},t._l(t.msgList,function(e){return n("notice-cell",{key:e.msgId,attrs:{item:e},on:{"top-status-change":t.handleTopChange,select:function(n){t.selectMessage(e)}}})})),t._v(" "),n("div",{staticClass:"mint-loadmore-top",attrs:{slot:"top"},slot:"top"},[n("span",{directives:[{name:"show",rawName:"v-show",value:"loading"!==t.topStatus,expression:"topStatus !== 'loading'"}],class:{"is-rotate":"drop"===t.topStatus}},[t._v("↓")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.topStatus,expression:"topStatus === 'loading'"}]},[n("mt-spinner",{attrs:{type:"snake"}})],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"page-infinite-loading"},[n("div",[n("mt-spinner",{attrs:{type:"fading-circle"}})],1),t._v(" "),n("span",[t._v("加载中...")])])])],1):t._e(),t._v(" "),t.nodata?n("div",{staticClass:"nodata",on:{click:t.loadTop}},[n("span",{staticClass:"simile"}),n("div",[t._v("亲，暂无任何消息")])]):t._e(),t._v(" "),t.networkerror?n("div",{staticClass:"nodata",on:{click:t.loadTop}},[n("span",{staticClass:"networkerror"}),n("div",[t._v(t._s(t.errormsg))])]):t._e()])},staticRenderFns:[]};var I=n("VU/8")(w,_,!1,function(t){n("25z3")},"data-v-452d556f",null).exports,k={components:{NoticeCell:m},mounted:function(){document.title="所有内部通知";var t=navigator.userAgent;this.isAndroid=t.indexOf("Android")>-1||t.indexOf("Adr")>-1,this.userId=c("userId"),this.token=c("token"),l.Indicator.open({text:"加载中...",spinnerType:"fading-circle"}),this.loadTop()},methods:{loadMore:function(){var t=this;this.allLoaded?this.loading=!1:(this.loading=!0,this.pageIndex+=1,this.getList(this.pageIndex,this.pageSize).then(function(e){t.msgList=t.msgList.concat(e.msgList),e.msgList.length<t.pageSize&&(t.allLoaded=!0),t.pageIndex=parseInt(e.pageIndex),t.loading=!1}).catch(function(){t.networkerror=!0}))},loadTop:function(){var t=this;this.networkerror=!1,this.nodata=!1,this.pageIndex=1,this.getList(this.pageIndex,this.pageSize).then(function(e){l.Indicator.close(),t.networkerror=!1,t.msgList=e.msgList,t.pageIndex=parseInt(e.pageIndex),t.allLoaded=!1,e.msgList.length<t.pageSize&&(t.allLoaded=!0),0==t.msgList.length&&(t.nodata=!0),console.log(t),t.$refs.loadmore&&t.$refs.loadmore.onTopLoaded()}).catch(function(e){console.log(e),l.Indicator.close(),e.data&&(t.errormsg=e.data.message),t.networkerror=!0})},handleTopChange:function(t){this.topStatus=t},selectMessage:function(t){console.log(t.msgId),this.isAndroid?window.android&&window.android.onMessageClick(t.msgId):window.webkit&&window.webkit.messageHandlers.onMessageClick.postMessage({msgId:t.msgId})},getList:function(t,e){this.errormsg="网络开了小差，请点击重试";var n={userId:this.userId,token:this.token,pageSize:e,pageIndex:t};return new d.a(function(t,e){f(n).then(function(n){"0"==n.data.resultCode?t(n.data):e(n)}).catch(function(t){e(t)})})}},data:function(){return{isAndroid:!1,nodata:!1,loading:!1,pageSize:20,pageIndex:1,msgList:[],allLoaded:!1,topStatus:"",networkerror:!1,errormsg:"网络开了小差，请点击重试"}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[t.msgList.length>0&&!t.networkerror?n("div",{},[n("mt-loadmore",{ref:"loadmore",attrs:{"top-method":t.loadTop},on:{"top-status-change":t.handleTopChange}},[n("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-immediate-check":"false","infinite-scroll-distance":"50"}},t._l(t.msgList,function(e){return n("notice-cell",{key:e.msgId,attrs:{item:e},on:{"top-status-change":t.handleTopChange,select:function(n){t.selectMessage(e)}}})})),t._v(" "),n("div",{staticClass:"mint-loadmore-top",attrs:{slot:"top"},slot:"top"},[n("span",{directives:[{name:"show",rawName:"v-show",value:"loading"!==t.topStatus,expression:"topStatus !== 'loading'"}],class:{"is-rotate":"drop"===t.topStatus}},[t._v("↓")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.topStatus,expression:"topStatus === 'loading'"}]},[n("mt-spinner",{attrs:{type:"snake"}})],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"page-infinite-loading"},[n("div",[n("mt-spinner",{attrs:{type:"fading-circle"}})],1),t._v(" "),n("span",[t._v("加载中...")])])])],1):t._e(),t._v(" "),t.nodata?n("div",{staticClass:"nodata",on:{click:t.loadTop}},[n("div",{staticClass:"simile"}),n("div",[t._v("亲，暂无任何消息")])]):t._e(),t._v(" "),t.networkerror?n("div",{staticClass:"nodata",on:{click:t.loadTop}},[n("div",{staticClass:"networkerror"}),n("div",[t._v(t._s(t.errormsg))])]):t._e()])},staticRenderFns:[]};var L=n("VU/8")(k,x,!1,function(t){n("AGVb")},"data-v-5bb623bb",null).exports,C={name:"MessageDetail",created:function(){var t=this;document.title="通知详情",this.msgId=c("msgId"),this.userId=c("userId"),this.token=c("token");var e,n={msgId:this.msgId,userId:this.userId,token:this.token};(e=n,v({url:"/jsestate-service/msg/msg_detail",method:"POST",data:e})).then(function(e){console.log(e.data);var n=e.data.msg;t.title=n.msgSubject,t.content=n.msgContent,t.date=new Date(n.createTime).toLocaleString()})},data:function(){return{title:"",date:"",content:"",userId:"",token:""}}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"date"},[t._v(t._s(t.date))]),t._v(" "),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content)}}),t._v("a\n")])},staticRenderFns:[]};var T=n("VU/8")(C,S,!1,function(t){n("5jHi")},"data-v-f83b4b88",null).exports;s.default.use(o.a);var M=new o.a({routes:[{path:"/unreadlist",name:"unreadlist",component:I},{path:"/totallist",name:"totallist",component:L},{path:"/messagedetail",name:"messagedetail",component:T}]});n("d8/S");s.default.config.productionTip=!1,s.default.component(l.Loadmore.name,l.Loadmore),s.default.component(l.Spinner.name,l.Spinner),s.default.use(l.InfiniteScroll),new s.default({el:"#app",router:M,components:{App:i},template:"<App/>"})},atwT:function(t,e){},"d8/S":function(t,e){},yzEB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.324dfa28deaac5d6e299.js.map