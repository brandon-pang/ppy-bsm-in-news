(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],d=0,f=[];d<r.length;d++)o=r[d],s[o]&&f.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"07ee":function(t,e,a){},1:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("NoticeSection")],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notice--system"},[t.isShowDetail?a("div",{staticClass:"cont--notice-detail"},[a("div",{staticClass:"wrap--detail-top"},[a("img",{staticClass:"img--badge",attrs:{src:t._f("badgeImg")(t.innerPostDatas[t.nowClickNo].Tags),alt:""}}),a("div",{staticClass:"top--title",style:{"background-image":"url("+t.innerPostDatas[t.nowClickNo].HeaderImgUrl+")"}},[a("p",{staticClass:"txt--date"},[t._v(t._s(t.innerPostDatas[t.nowClickNo].postDate))]),a("p",{staticClass:"txt--title"},[t._v(t._s(t._f("truncate")(t.innerPostDatas[t.nowClickNo].postTitle,80)))])])]),a("div",{staticClass:"wrap--detail-mid"},[a("p",{staticClass:"txt--context",domProps:{innerHTML:t._s(t.innerPostDatas[t.nowClickNo].postContent)}})]),a("div",{staticClass:"wrap--detail-bt"},[a("div",{staticClass:"btn--home",on:{click:function(e){t.isShowDetail=!1}}},[a("p",[t._v("BACK")])]),a("div",{staticClass:"btn--prev",class:{disablePrev:t.isPrevBtn},on:{click:function(e){return t.gotoPostPrev(t.nowClickNo)}}},[a("svg",{attrs:{width:"43px",height:"64px",viewBox:"0 0 43 64",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("defs",[a("polygon",{attrs:{id:"path-1",points:"21 10.5 52.5 52.5 -10.5 52.5"}}),a("filter",{attrs:{x:"-0.8%",y:"-1.2%",width:"103.2%",height:"104.8%",filterUnits:"objectBoundingBox",id:"filter-2"}},[a("feOffset",{attrs:{dx:"1",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),a("feColorMatrix",{attrs:{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 1 0",type:"matrix",in:"shadowOffsetOuter1"}})],1)]),a("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{id:"NEWS2",transform:"translate(-701.000000, -1229.000000)"}},[a("g",{attrs:{id:"Group",transform:"translate(701.000000, 1230.000000)","fill-rule":"nonzero"}},[a("g",{attrs:{id:"Triangle",transform:"translate(21.000000, 31.500000) rotate(-90.000000) translate(-21.000000, -31.500000) "}},[a("use",{attrs:{fill:"black","fill-opacity":"1",filter:"url(#filter-2)","xlink:href":"#path-1"}}),a("use",{attrs:{fill:"#EEEEEE","xlink:href":"#path-1",id:"bg0"}})])])])])]),a("p",[t._v("PREV")])]),a("div",{staticClass:"btn--next",class:{disableNext:t.isNextBtn},on:{click:function(e){return t.gotoPostNext(t.nowClickNo)}}},[a("p",[t._v("NEXT")]),a("svg",{attrs:{width:"43px",height:"64px",viewBox:"0 0 43 64",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("defs",[a("polygon",{attrs:{id:"path-1",points:"21 10.5 52.5 52.5 -10.5 52.5"}}),a("filter",{attrs:{x:"-0.8%",y:"-1.2%",width:"103.2%",height:"104.8%",filterUnits:"objectBoundingBox",id:"filter-2"}},[a("feOffset",{attrs:{dx:"1",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),a("feColorMatrix",{attrs:{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 1 0",type:"matrix",in:"shadowOffsetOuter1"}})],1)]),a("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{id:"NEWS2",transform:"translate(-701.000000, -1229.000000)"}},[a("g",{attrs:{id:"Group",transform:"translate(701.000000, 1230.000000)","fill-rule":"nonzero"}},[a("g",{attrs:{id:"Triangle",transform:"translate(21.000000, 31.500000) rotate(-90.000000) translate(-21.000000, -31.500000) "}},[a("use",{attrs:{fill:"black","fill-opacity":"1",filter:"url(#filter-2)","xlink:href":"#path-1"}}),a("use",{attrs:{fill:"#EEEEEE","xlink:href":"#path-1",id:"bg1"}})])])])])])])])]):t._e(),a("div",{staticClass:"cont--notice-left"},[a("section",{staticClass:"cont-slider"},[a("swiper",{attrs:{options:t.swiperOption}},[t._l(t.featuredDatas,function(e,n){return a("swiper-slide",{key:n,staticClass:"wrap-sl",style:{"background-image":"url("+e.FeaturedImgUrl+")"}},[a("img",{staticClass:"img--badge",attrs:{src:t._f("badgeImg")(e.Tags),alt:""}}),""!==e.postID?a("div",{staticClass:"btn--more",on:{click:function(a){return t.getShowDetail(e.postID,n)}}},[t._v("See\n                        More\n                    ")]):t._e()])}),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)]),a("div",{staticClass:"cont--notice-right"},[a("section",{staticClass:"cont--scroll"},t._l(t.leftBannerDatas,function(e,n){return a("div",{staticClass:"wrap--news"},[a("img",{staticClass:"img--badge",attrs:{src:t._f("badgeImg")(e.Tags),alt:""}}),a("div",{staticClass:"wrap--img",style:{"background-image":"url("+e.NormalImgUrl+")"}}),a("div",{staticClass:"cont--title-bar",on:{click:function(a){return t.getShowDetail(e.postID,n)}}},[a("div",{staticClass:"wrap--cate"},[a("p",{staticClass:"txt--cate"},[t._v(t._s(e.categoryName))]),a("p",{staticClass:"txt--date"},[t._v(t._s(e.postDate))])]),a("div",{staticClass:"wrap--title"},[a("p",{staticClass:"txt--title"},[t._v(t._s(t._f("truncate")(e.postTitle,43)))])]),""!=e.outerLinkUrl?a("div",{staticClass:"wrap--icons"},[a("img",{attrs:{src:"./external-data/images/icons/go_outer.png",alt:""}})]):a("div",{staticClass:"wrap--icons"},[a("img",{attrs:{src:"./external-data/images/icons/go_inner.png",alt:""}})])])])}),0)])])},r=[],l=(a("6b54"),a("1157")),c=a.n(l),u=c.a,d={name:"NoticeSection",data:function(){return{isShowDetail:!1,leftBannerDatas:[],nowClickNo:0,innerPostDatas:[],featuredDatas:[],swiperOption:{pagination:{el:".swiper-pagination"}},isPrevBtn:!1,isNextBtn:!1}},mounted:function(){this.getNewsPostUrl()},methods:{detailLocBtn:function(){setTimeout(function(){var t=u(window).height(),e=u(".wrap--detail-top")[0].scrollHeight,a=u(".wrap--detail-mid")[0].scrollHeight,n=u(".wrap--detail-bt")[0].scrollHeight,s=e+a;console.log(t,s),s>=t?(console.log(t<=s),u(".wrap--detail-bt").css({top:s+20})):u(".wrap--detail-bt").css({top:t-n})},100)},getShowDetail:function(t,e){var a=this;console.log(t,e),a.isPrevBtn=!1,a.isNextBtn=!1,""!==t?(a.nowClickNo=t,a.isShowDetail=!0,0==t&&(a.isPrevBtn=!0),t==a.innerPostDatas.length-1&&(a.isNextBtn=!0),a.detailLocBtn()):(a.isShowDetail=!1,window.open(a.leftBannerDatas[e].outerLinkUrl,"_blank"))},gotoPostPrev:function(t){var e=this;e.isPrevBtn=!1,e.isNextBtn=!1,t>0?(e.nowClickNo--,0==e.nowClickNo&&(e.isPrevBtn=!0)):e.nowClickNo=0,e.detailLocBtn()},gotoPostNext:function(t){var e=this;e.isPrevBtn=!1,e.isNextBtn=!1,t<e.innerPostDatas.length-1?(e.nowClickNo++,e.isNextBtn=!1,e.nowClickNo===e.innerPostDatas.length-1&&(e.isNextBtn=!0)):e.nowClickNo=e.innerPostDatas.length-1,e.detailLocBtn()},getNewsPostUrl:function(){var t=this,e="./external-data/notice-data.json";this.$http.get(e).then(function(e){console.log("clan",e.body.ResultCode[0]);var a=e.body.ResultCode[0].Code,n=e.body.noticeData;if(console.log("code1",a),"10000"===a){t.leftBannerDatas=n,console.log("ori",t.leftBannerDatas);var s=0;for(var i in n)t.leftBannerDatas[i].postID="",""===n[i].outerLinkUrl&&(t.leftBannerDatas[i].postID=s++,t.innerPostDatas.push(t.leftBannerDatas[i])),"Y"==n[i].Featured&&t.featuredDatas.push(t.leftBannerDatas[i]);console.log("out",t.innerPostDatas),console.log("out",t.featuredDatas)}}).catch(function(t){}).finally(function(){console.log("finally finished gists")})}},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""},truncate:function(t,e){return t.slice(0,e)+(e<t.length?"...":"")},badgeImg:function(t){switch(t){case"1":return"../external-data/images/icons/tag-new.png";case"2":return"../external-data/images/icons/tag-hot.png";case"3":return"../external-data/images/icons/tag-sale.png";case"4":return"../external-data/images/icons/tag-update.png";default:return""}}}},f=d,p=(a("ec4a"),a("2877")),g=Object(p["a"])(f,o,r,!1,null,null,null),w=g.exports,h={name:"app",components:{NoticeSection:w}},v=h,x=(a("5c0b"),Object(p["a"])(v,s,i,!1,null,null,null)),m=x.exports,C=a("7212"),b=a.n(C),k=a("28dd");a("dfa4");n["a"].use(b.a),n["a"].use(k["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),s=a.n(n);s.a},"5e27":function(t,e,a){},ec4a:function(t,e,a){"use strict";var n=a("07ee"),s=a.n(n);s.a}});
//# sourceMappingURL=app.6eef23b4.js.map