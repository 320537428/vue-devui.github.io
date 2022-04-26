var N=Object.defineProperty;var P=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var T=(s,o,k)=>o in s?N(s,o,{enumerable:!0,configurable:!0,writable:!0,value:k}):s[o]=k,q=(s,o)=>{for(var k in o||(o={}))O.call(o,k)&&T(s,k,o[k]);if(P)for(var k of P(o))M.call(o,k)&&T(s,k,o[k]);return s};import{_,V as C,r as B,c as J,a as S,w as I,b as j,d as a,e as n,o as X}from"./app.020d8265.js";const Y={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:s,resolveComponent:o,createVNode:k,openBlock:g,createElementBlock:m}=C,z=s("h5",{style:{padding:"20px 0 10px"}},"size = 'sm'",-1),f=s("h5",{style:{padding:"20px 0 10px"}},"size = 'md'",-1),v=s("h5",{style:{padding:"20px 0 10px"}},"size = 'lg'",-1),E=s("h5",{style:{padding:"20px 0 10px"}},"Custom Style",-1);function y(p,t){const r=o("d-pagination");return g(),m("div",null,[z,k(r,{size:"sm",total:p.pager.total,pageSize:p.pager.pageSize,"onUpdate:pageSize":t[0]||(t[0]=c=>p.pager.pageSize=c),pageIndex:p.pager.pageIndex,"onUpdate:pageIndex":t[1]||(t[1]=c=>p.pager.pageIndex=c),"can-view-total":!0,"can-change-page-size":!0,"can-jump-page":!0,"max-items":5},null,8,["total","pageSize","pageIndex"]),f,k(r,{total:p.pager.total,pageSize:p.pager.pageSize,"onUpdate:pageSize":t[2]||(t[2]=c=>p.pager.pageSize=c),pageIndex:p.pager.pageIndex,"onUpdate:pageIndex":t[3]||(t[3]=c=>p.pager.pageIndex=c),"can-view-total":!0,"can-change-page-size":!0,"can-jump-page":!0,"max-items":5},null,8,["total","pageSize","pageIndex"]),v,k(r,{size:"lg",total:p.pager.total,pageSize:p.pager.pageSize,"onUpdate:pageSize":t[4]||(t[4]=c=>p.pager.pageSize=c),pageIndex:p.pager.pageIndex,"onUpdate:pageIndex":t[5]||(t[5]=c=>p.pager.pageIndex=c),"can-view-total":!0,"can-change-page-size":!0,"can-jump-page":!0,"max-items":5},null,8,["total","pageSize","pageIndex"]),E,k(r,{total:p.pager.total,pageSize:p.pager.pageSize,"onUpdate:pageSize":t[6]||(t[6]=c=>p.pager.pageSize=c),pageIndex:p.pager.pageIndex,"onUpdate:pageIndex":t[7]||(t[7]=c=>p.pager.pageIndex=c),"can-view-total":!0,"can-change-page-size":!0,"can-jump-page":!0,"go-to-text":"Jump to","pre-link":p.preLink,"next-link":p.nextLink},null,8,["total","pageSize","pageIndex","pre-link","next-link"])])}const{defineComponent:F,shallowReactive:A,h:u}=C,d=F({setup(){return{pager:A({total:306,pageIndex:5,pageSize:10,pageSizeOptions:[10,20,30,40,50]}),preLink:'<span class="icon-arrow-left"></span>',nextLink:'<span class="icon-arrow-right"></span>'}}});return q({render:y},d)}(),"render-demo-1":function(){const{createElementVNode:s,resolveComponent:o,createVNode:k,withCtx:g,openBlock:m,createElementBlock:z}=C,f=s("h5",{style:{padding:"20px 0 10px"}},"Simple Mode",-1),v=s("h5",{style:{padding:"20px 0 10px"}},"Super Simple Mode",-1),E=s("h5",{style:{padding:"20px 0 10px"}},'have-config-menu = "true"',-1),y=s("div",{class:"pagination-config-item"},[s("div",{class:"config-item-title"},"show field"),s("div",{class:"config-item-words"},"setting")],-1),F=s("div",{class:"pagination-config-item"},[s("div",{class:"config-item-title"},"display method"),s("div",{style:{"padding-left":"8px","margin-top":"4px"}},[s("i",{class:"icon-list-view"}),s("i",{class:"icon-veIcon-briefcase"})])],-1);function A(t,r){const c=o("d-pagination");return m(),z("div",null,[f,k(c,{total:t.pager.total,pageSize:t.pager.pageSize,"onUpdate:pageSize":r[0]||(r[0]=x=>t.pager.pageSize=x),"total-item-text":"Total",pageIndex:t.pager.pageIndex,"onUpdate:pageIndex":r[1]||(r[1]=x=>t.pager.pageIndex=x),"can-view-total":!0,"can-change-page-size":!0,lite:!0},null,8,["total","pageSize","pageIndex"]),v,k(c,{size:"sm",total:t.pager.total,pageSize:t.pager.pageSize,"onUpdate:pageSize":r[2]||(r[2]=x=>t.pager.pageSize=x),"show-page-selector":!1,pageIndex:t.pager.pageIndex,"onUpdate:pageIndex":r[3]||(r[3]=x=>t.pager.pageIndex=x),"can-change-page-size":!0,lite:!0},null,8,["total","pageSize","pageIndex"]),E,k(c,{size:"sm",total:t.pager.total,pageSize:t.pager.pageSize,"onUpdate:pageSize":r[4]||(r[4]=x=>t.pager.pageSize=x),"show-page-selector":!1,pageIndex:t.pager.pageIndex,"onUpdate:pageIndex":r[5]||(r[5]=x=>t.pager.pageIndex=x),"can-change-page-size":!0,lite:!0,"have-config-menu":!0},{default:g(()=>[y,F]),_:1},8,["total","pageSize","pageIndex"])])}const{defineComponent:u,shallowReactive:d}=C,p=u({setup(){return{pager:d({total:306,pageIndex:5,pageSize:10,pageSizeOptions:[10,20,30,40,50]})}}});return q({render:A},p)}(),"render-demo-2":function(){const{createElementVNode:s,resolveComponent:o,createVNode:k,openBlock:g,createElementBlock:m}=C,z=s("div",{style:{padding:"20px 0 10px"}},null,-1),f=s("div",{style:{padding:"20px 0 10px"}},null,-1),v=s("div",{style:{padding:"20px 0 10px"}},null,-1);function E(u,d){const p=o("d-pagination");return g(),m("div",null,[z,k(p,{size:"sm",total:u.pager.total,pageSize:u.pager.pageSize,"onUpdate:pageSize":d[0]||(d[0]=t=>u.pager.pageSize=t),pageIndex:u.pager.pageIndex,"onUpdate:pageIndex":d[1]||(d[1]=t=>u.pager.pageIndex=t),"max-items":10,"can-view-total":!0,"can-jump-page":!0,"can-change-page-size":!0,onPageIndexChange:u.pageIndexChange,onPageSizeChange:u.pageSizeChange},null,8,["total","pageSize","pageIndex","onPageIndexChange","onPageSizeChange"]),f,k(p,{size:"sm",total:u.pager.total,pageSize:u.pager.pageSize,"onUpdate:pageSize":d[2]||(d[2]=t=>u.pager.pageSize=t),pageIndex:u.pager.pageIndex,"onUpdate:pageIndex":d[3]||(d[3]=t=>u.pager.pageIndex=t),"max-items":10,"can-view-total":!0,"can-jump-page":!0,"show-jump-button":!0,onPageIndexChange:u.pageIndexChange,onPageSizeChange:u.pageSizeChange},null,8,["total","pageSize","pageIndex","onPageIndexChange","onPageSizeChange"]),v,k(p,{size:"sm",total:u.pager.total,pageSize:u.pager.pageSize,"onUpdate:pageSize":d[4]||(d[4]=t=>u.pager.pageSize=t),pageIndex:u.pager.pageIndex,"onUpdate:pageIndex":d[5]||(d[5]=t=>u.pager.pageIndex=t),"max-items":10,"can-view-total":!0,"can-change-page-size":!0,"can-jump-page":!0,"auto-fix-page-index":!1,"auto-hide":!1,onPageIndexChange:u.pageIndexChangeWithoutFix,onPageSizeChange:u.pageSizeChangeWithoutFix,"page-size-options":u.pager.pageSizeOptions,"page-size-direction":["centerUp"]},null,8,["total","pageSize","pageIndex","onPageIndexChange","onPageSizeChange","page-size-options"])])}const{defineComponent:y,shallowReactive:F}=C,A=y({setup(){const u=F({total:306,pageIndex:5,pageSize:10,pageSizeOptions:[10,20,30,40,50]});return{pager:u,pageSizeChange:c=>{u.pageIndex=1,console.log(c,"pageSizeChange")},pageIndexChange:c=>{console.log(c,"pageIndexChange")},pageIndexChangeWithoutFix:c=>{console.log(c,"pageIndexChangeWithoutFix")},pageSizeChangeWithoutFix:c=>{u.pageIndex=1,console.log(c,"pageSizeChangeWithoutFix")}}}});return q({render:E},A)}(),"render-demo-3":function(){const{createElementVNode:s,createTextVNode:o,resolveComponent:k,createVNode:g,withCtx:m,openBlock:z,createElementBlock:f}=C,v=s("h5",{style:{padding:"20px 0 10px"}},[o(" When the value of "),s("code",null,"pageIndex"),o(" exceeds the maximum page number, enable "),s("code",null,"show-true-page-index"),o(" to display the value of "),s("code",null,"pageIndex")],-1),E=s("h5",{style:{padding:"20px 0 10px"}},[o(" When the value of "),s("code",null,"pageIndex"),o(" exceeds the maximum page number, the "),s("code",null,"show-true-page-index"),o(" function is disabled and only the maximum page number is displayed. ")],-1),y=s("h5",{style:{padding:"20px 0 10px"}},"Default Mode",-1),F={style:{display:"flex","margin-top":"10px"}},A=o("total = 0"),u=o("total = 5"),d=o("total = 15"),p=s("h5",{style:{padding:"20px 0 10px"}},"Simple Mode",-1),t={style:{display:"flex","margin-top":"10px"}},r=o("total = 0"),c=o("total = 20"),x=o("total = 30000"),L=o("total = 100000"),U=o("index = 2"),W=o("index = 3");function R(l,e){const b=k("d-pagination"),h=k("d-button");return z(),f("div",null,[v,g(b,{size:"sm",total:l.pager1.total,pageSize:l.pager1.pageSize,"onUpdate:pageSize":e[0]||(e[0]=i=>l.pager1.pageSize=i),pageIndex:l.pager1.pageIndex,"onUpdate:pageIndex":e[1]||(e[1]=i=>l.pager1.pageIndex=i),"max-items":5,"can-view-total":!0,"can-change-page-size":!0,"can-jump-page":!0,"show-true-page-index":!0},null,8,["total","pageSize","pageIndex"]),E,g(b,{size:"sm",total:l.pager2.total,pageSize:l.pager2.pageSize,"onUpdate:pageSize":e[2]||(e[2]=i=>l.pager2.pageSize=i),pageIndex:l.pager2.pageIndex,"onUpdate:pageIndex":e[3]||(e[3]=i=>l.pager2.pageIndex=i),"can-view-total":!0,"can-change-page-size":!0,"can-jump-page":!0,"max-items":5,"show-true-page-index":!1},null,8,["total","pageSize","pageIndex"]),y,g(b,{size:"sm",total:l.defaultPager.total,pageSize:l.defaultPager.pageSize,"onUpdate:pageSize":e[4]||(e[4]=i=>l.defaultPager.pageSize=i),pageIndex:l.defaultPager.pageIndex,"onUpdate:pageIndex":e[5]||(e[5]=i=>l.defaultPager.pageIndex=i),"can-view-total":!0,"can-change-page-size":!0,"can-jump-page":!0,"max-items":5},null,8,["total","pageSize","pageIndex"]),s("div",F,[g(h,{bsStyle:"primary",circled:"true",size:"sm",onClick:e[6]||(e[6]=i=>l.setTotal(0)),width:"200"},{default:m(()=>[A]),_:1}),g(h,{bsStyle:"common",circled:"true",size:"sm",onClick:e[7]||(e[7]=i=>l.setTotal(5)),width:"200"},{default:m(()=>[u]),_:1}),g(h,{bsStyle:"common",circled:"true",size:"sm",onClick:e[8]||(e[8]=i=>l.setTotal(15)),width:"200"},{default:m(()=>[d]),_:1})]),p,g(b,{total:l.litePager.total,pageSize:l.litePager.pageSize,"onUpdate:pageSize":e[9]||(e[9]=i=>l.litePager.pageSize=i),"total-item-text":"total",pageIndex:l.litePager.pageIndex,"onUpdate:pageIndex":e[10]||(e[10]=i=>l.litePager.pageIndex=i),"can-view-total":!0,"can-change-page-size":!0,lite:!0},null,8,["total","pageSize","pageIndex"]),s("div",t,[g(h,{size:"sm",onClick:e[11]||(e[11]=i=>l.setLiteTotal(0)),width:"200"},{default:m(()=>[r]),_:1}),g(h,{size:"sm",onClick:e[12]||(e[12]=i=>l.setLiteTotal(20)),width:"200"},{default:m(()=>[c]),_:1}),g(h,{size:"sm",onClick:e[13]||(e[13]=i=>l.setLiteTotal(3e4)),width:"200"},{default:m(()=>[x]),_:1}),g(h,{size:"sm",onClick:e[14]||(e[14]=i=>l.setLiteTotal(1e5)),width:"200"},{default:m(()=>[L]),_:1}),g(h,{size:"sm",onClick:e[15]||(e[15]=i=>l.setIndex(2)),width:"200"},{default:m(()=>[U]),_:1}),g(h,{size:"sm",onClick:e[16]||(e[16]=i=>l.setIndex(3)),width:"200"},{default:m(()=>[W]),_:1})])])}const{defineComponent:$,shallowReactive:D}=C,V=$({setup(){const l=D({total:10,pageIndex:3,pageSize:10}),e=D({total:10,pageIndex:3,pageSize:10}),b=D({total:0,pageIndex:1,pageSize:10}),h=w=>{b.total=w},i=D({total:0,pageIndex:1,pageSize:10});return{pager1:l,pager2:e,defaultPager:b,setTotal:h,litePager:i,setLiteTotal:w=>{i.total=w},setIndex:w=>{i.pageIndex=w}}}});return q({render:R},V)}()}},ra='{"title":"Pagination \u5206\u9875","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u6781\u7B80\u6A21\u5F0F","slug":"\u6781\u7B80\u6A21\u5F0F"},{"level":3,"title":"\u591A\u79CD\u914D\u7F6E","slug":"\u591A\u79CD\u914D\u7F6E"},{"level":3,"title":"\u7279\u6B8A\u60C5\u51B5","slug":"\u7279\u6B8A\u60C5\u51B5"},{"level":3,"title":"Pagination \u53C2\u6570","slug":"pagination-\u53C2\u6570"},{"level":3,"title":"Pagination \u4E8B\u4EF6","slug":"pagination-\u4E8B\u4EF6"},{"level":3,"title":"Pagination \u7C7B\u578B\u5B9A\u4E49","slug":"pagination-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/pagination/index.md","lastUpdated":1650456022706}',G=j('<h1 id="pagination-\u5206\u9875" tabindex="-1">Pagination \u5206\u9875 <a class="header-anchor" href="#pagination-\u5206\u9875" aria-hidden="true">#</a></h1><p>\u5206\u9875\u5668\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u52A0\u8F7D/\u6E32\u67D3\u6240\u6709\u6570\u636E\u5C06\u82B1\u8D39\u5F88\u591A\u65F6\u95F4\u65F6\uFF0C\u53EF\u4EE5\u5207\u6362\u9875\u7801\u6D4F\u89C8\u6570\u636E\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),H=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n("size = 'sm'"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-view-total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-change-page-size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-jump-page"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":max-items"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("5"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`

  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n("size = 'md'"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-view-total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-change-page-size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-jump-page"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":max-items"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("5"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`

  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n("size = 'lg'"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("lg"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-view-total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-change-page-size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-jump-page"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":max-items"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("5"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`

  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n("Custom Style"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-view-total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-change-page-size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-jump-page"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},"go-to-text"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("Jump to"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":pre-link"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("preLink"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":next-link"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("nextLink"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" defineComponent"),a("span",{class:"token punctuation"},","),n(" shallowReactive"),a("span",{class:"token punctuation"},","),n(" h "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'vue'"),a("span",{class:"token punctuation"},";"),n(`

`),a("span",{class:"token keyword"},"export"),n(),a("span",{class:"token keyword"},"default"),n(),a("span",{class:"token function"},"defineComponent"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token function"},"setup"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token punctuation"},"{"),n(`
    `),a("span",{class:"token keyword"},"const"),n(" pager "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"shallowReactive"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
      `),a("span",{class:"token literal-property property"},"total"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"306"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token literal-property property"},"pageIndex"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"5"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token literal-property property"},"pageSize"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token literal-property property"},"pageSizeOptions"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token punctuation"},"["),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"20"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"30"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"40"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"50"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},","),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`

    `),a("span",{class:"token keyword"},"const"),n(" preLink "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token string"},`'<span class="icon-arrow-left"></span>'`),a("span",{class:"token punctuation"},";"),n(`
    `),a("span",{class:"token keyword"},"const"),n(" nextLink "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token string"},`'<span class="icon-arrow-right"></span>'`),a("span",{class:"token punctuation"},";"),n(`

    `),a("span",{class:"token keyword"},"return"),n(),a("span",{class:"token punctuation"},"{"),n(`
      pager`),a("span",{class:"token punctuation"},","),n(`
      preLink`),a("span",{class:"token punctuation"},","),n(`
      nextLink`),a("span",{class:"token punctuation"},","),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
`),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),K=a("h3",{id:"\u6781\u7B80\u6A21\u5F0F",tabindex:"-1"},[n("\u6781\u7B80\u6A21\u5F0F "),a("a",{class:"header-anchor",href:"#\u6781\u7B80\u6A21\u5F0F","aria-hidden":"true"},"#")],-1),Q=a("p",null,"\u6781\u7B80\u6A21\u5F0F\u9002\u7528\u4E8E\u4E00\u4E9B\u6709\u5927\u91CF\u4FE1\u606F\u7684\u9875\u9762\uFF0C\u53EF\u4EE5\u7B80\u5316\u9875\u9762\u7684\u590D\u6742\u5EA6\u3002",-1),Z=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n("Simple Mode"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},"total-item-text"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("Total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-view-total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-change-page-size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":lite"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`

  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n("Super Simple Mode"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":show-page-selector"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("false"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-change-page-size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":lite"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`

  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n('have-config-menu = "true"'),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":show-page-selector"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("false"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-change-page-size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":lite"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":have-config-menu"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pagination-config-item"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("config-item-title"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("show field"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("config-item-words"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("setting"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pagination-config-item"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("config-item-title"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("display method"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding-left"),a("span",{class:"token punctuation"},":"),n(" 8px"),a("span",{class:"token punctuation"},";"),n(),a("span",{class:"token property"},"margin-top"),a("span",{class:"token punctuation"},":"),n(" 4px")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n(`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("i")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icon-list-view"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("i")]),a("span",{class:"token punctuation"},">")]),n(`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("i")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icon-veIcon-briefcase"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("i")]),a("span",{class:"token punctuation"},">")]),n(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("d-pagination")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" defineComponent"),a("span",{class:"token punctuation"},","),n(" shallowReactive "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'vue'"),a("span",{class:"token punctuation"},";"),n(`

`),a("span",{class:"token keyword"},"export"),n(),a("span",{class:"token keyword"},"default"),n(),a("span",{class:"token function"},"defineComponent"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token function"},"setup"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token punctuation"},"{"),n(`
    `),a("span",{class:"token keyword"},"const"),n(" pager "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"shallowReactive"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
      `),a("span",{class:"token literal-property property"},"total"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"306"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token literal-property property"},"pageIndex"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"5"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token literal-property property"},"pageSize"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token literal-property property"},"pageSizeOptions"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token punctuation"},"["),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"20"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"30"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"40"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"50"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},","),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`

    `),a("span",{class:"token keyword"},"return"),n(),a("span",{class:"token punctuation"},"{"),n(`
      pager`),a("span",{class:"token punctuation"},","),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
`),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`

`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("style")]),n(),a("span",{class:"token attr-name"},"lang"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("scss"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token style"},[a("span",{class:"token language-css"},[n(`
`),a("span",{class:"token atrule"},[a("span",{class:"token rule"},"@import"),n(),a("span",{class:"token string"},"'@devui/styles-var/devui-var.scss'"),a("span",{class:"token punctuation"},";")]),n(`

`),a("span",{class:"token comment"},"/* \u914D\u7F6E\u4E2D\u7684\u6BCF\u4E00\u9879\uFF0C\u81EA\u5B9A\u4E49\u9879\u5EFA\u8BAE\u5E94\u7528\u6B64\u6837\u5F0F\u6216\u5728\u6B64\u57FA\u7840\u4E0A\u4FEE\u6539 */"),n(`
`),a("span",{class:"token selector"},".pagination-config-item"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token property"},"padding-bottom"),a("span",{class:"token punctuation"},":"),n(" 8px"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"padding-top"),a("span",{class:"token punctuation"},":"),n(" 4px"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"border-bottom"),a("span",{class:"token punctuation"},":"),n(" 1px solid $devui-line"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token punctuation"},"}"),n(`

`),a("span",{class:"token comment"},"/* \u914D\u7F6E\u4E2D\u6BCF\u4E00\u9879\u7684\u6807\u9898\u6837\u5F0F\uFF0C\u81EA\u5B9A\u4E49\u9879\u5EFA\u8BAE\u5E94\u7528\u6B64\u6837\u5F0F\u6216\u5728\u6B64\u57FA\u7840\u4E0A\u4FEE\u6539 */"),n(`
`),a("span",{class:"token selector"},".config-item-title"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token property"},"color"),a("span",{class:"token punctuation"},":"),n(" $devui-line"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"padding-left"),a("span",{class:"token punctuation"},":"),n(" 8px"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"font-size"),a("span",{class:"token punctuation"},":"),n(" $devui-font-size"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"line-height"),a("span",{class:"token punctuation"},":"),n(" 1.5"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token punctuation"},"}"),n(`

`),a("span",{class:"token selector"},".config-item-words"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token property"},"color"),a("span",{class:"token punctuation"},":"),n(" $devui-text"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"padding-left"),a("span",{class:"token punctuation"},":"),n(" 8px"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"font-size"),a("span",{class:"token punctuation"},":"),n(" $devui-font-size"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"margin-top"),a("span",{class:"token punctuation"},":"),n(" 4px"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token punctuation"},"}"),n(`

`),a("span",{class:"token selector"},".config-item-words:hover"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token property"},"background-color"),a("span",{class:"token punctuation"},":"),n(" $devui-area"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"cursor"),a("span",{class:"token punctuation"},":"),n(" pointer"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token punctuation"},"}"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("style")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),aa=a("h3",{id:"\u591A\u79CD\u914D\u7F6E",tabindex:"-1"},[n("\u591A\u79CD\u914D\u7F6E "),a("a",{class:"header-anchor",href:"#\u591A\u79CD\u914D\u7F6E","aria-hidden":"true"},"#")],-1),na=a("p",null,"\u652F\u6301\u8BBE\u7F6E\u8F93\u5165\u8DF3\u8F6C\u3001\u663E\u793A\u8DF3\u8F6C\u6309\u94AE\uFF1B\u8BBE\u7F6E pageSize \u7B49\u529F\u80FD\u3002",-1),ta=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":max-items"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("10"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-view-total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-jump-page"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-change-page-size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},"@page-index-change"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pageIndexChange"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},"@page-size-change"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pageSizeChange"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`

  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":max-items"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("10"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-view-total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-jump-page"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":show-jump-button"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},"@page-index-change"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pageIndexChange"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},"@page-size-change"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pageSizeChange"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`

  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":max-items"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("10"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-view-total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-change-page-size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-jump-page"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":auto-fix-page-index"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("false"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":auto-hide"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("false"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},"@page-index-change"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pageIndexChangeWithoutFix"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},"@page-size-change"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pageSizeChangeWithoutFix"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":page-size-options"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSizeOptions"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":page-size-direction"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("["),a("span",{class:"token punctuation"},"'"),n("centerUp"),a("span",{class:"token punctuation"},"'"),n("]"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" defineComponent"),a("span",{class:"token punctuation"},","),n(" shallowReactive "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'vue'"),a("span",{class:"token punctuation"},";"),n(`

`),a("span",{class:"token keyword"},"export"),n(),a("span",{class:"token keyword"},"default"),n(),a("span",{class:"token function"},"defineComponent"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token function"},"setup"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token punctuation"},"{"),n(`
    `),a("span",{class:"token keyword"},"const"),n(" pager "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"shallowReactive"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
      `),a("span",{class:"token literal-property property"},"total"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"306"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token literal-property property"},"pageIndex"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"5"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token literal-property property"},"pageSize"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token literal-property property"},"pageSizeOptions"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token punctuation"},"["),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"20"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"30"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"40"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"50"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},","),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`

    `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token function-variable function"},"pageSizeChange"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"val"),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token punctuation"},"{"),n(`
      pager`),a("span",{class:"token punctuation"},"."),n("pageIndex "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},";"),n(`
      console`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),n("val"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token string"},"'pageSizeChange'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),n(`
    `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token function-variable function"},"pageIndexChange"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"val"),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token punctuation"},"{"),n(`
      console`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),n("val"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token string"},"'pageIndexChange'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),n(`

    `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token function-variable function"},"pageIndexChangeWithoutFix"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"pageIndex"),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token punctuation"},"{"),n(`
      console`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),n("pageIndex"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token string"},"'pageIndexChangeWithoutFix'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),n(`
    `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token function-variable function"},"pageSizeChangeWithoutFix"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"pageSize"),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token punctuation"},"{"),n(`
      pager`),a("span",{class:"token punctuation"},"."),n("pageIndex "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},";"),n(`
      console`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),n("pageSize"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token string"},"'pageSizeChangeWithoutFix'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),n(`

    `),a("span",{class:"token keyword"},"return"),n(),a("span",{class:"token punctuation"},"{"),n(`
      pager`),a("span",{class:"token punctuation"},","),n(`
      pageSizeChange`),a("span",{class:"token punctuation"},","),n(`
      pageIndexChange`),a("span",{class:"token punctuation"},","),n(`
      pageIndexChangeWithoutFix`),a("span",{class:"token punctuation"},","),n(`
      pageSizeChangeWithoutFix`),a("span",{class:"token punctuation"},","),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
`),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),sa=a("h3",{id:"\u7279\u6B8A\u60C5\u51B5",tabindex:"-1"},[n("\u7279\u6B8A\u60C5\u51B5 "),a("a",{class:"header-anchor",href:"#\u7279\u6B8A\u60C5\u51B5","aria-hidden":"true"},"#")],-1),ea=a("p",null,"\u7279\u6B8A\u573A\u666F\u4E0B\u5206\u9875\u5668\u7684\u663E\u793A\u3002",-1),oa=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n(`
    When the value of `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("code")]),a("span",{class:"token punctuation"},">")]),n("pageIndex"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("code")]),a("span",{class:"token punctuation"},">")]),n(" exceeds the maximum page number, enable "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("code")]),a("span",{class:"token punctuation"},">")]),n("show-true-page-index"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("code")]),a("span",{class:"token punctuation"},">")]),n(` to display the value
    of `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("code")]),a("span",{class:"token punctuation"},">")]),n("pageIndex"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("code")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager1.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager1.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager1.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":max-items"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("5"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-view-total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-change-page-size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-jump-page"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":show-true-page-index"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`

  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n(`
    When the value of `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("code")]),a("span",{class:"token punctuation"},">")]),n("pageIndex"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("code")]),a("span",{class:"token punctuation"},">")]),n(" exceeds the maximum page number, the "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("code")]),a("span",{class:"token punctuation"},">")]),n("show-true-page-index"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("code")]),a("span",{class:"token punctuation"},">")]),n(` function is disabled and
    only the maximum page number is displayed.
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager2.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager2.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager2.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-view-total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-change-page-size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-jump-page"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":max-items"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("5"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":show-true-page-index"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("false"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`

  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n("Default Mode"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("defaultPager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("defaultPager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("defaultPager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-view-total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-change-page-size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-jump-page"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":max-items"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("5"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"display"),a("span",{class:"token punctuation"},":"),n(" flex"),a("span",{class:"token punctuation"},";"),n(),a("span",{class:"token property"},"margin-top"),a("span",{class:"token punctuation"},":"),n(" 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-button")]),n(),a("span",{class:"token attr-name"},"bsStyle"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("primary"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"circled"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("setTotal(0)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("200"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("total = 0"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("d-button")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-button")]),n(),a("span",{class:"token attr-name"},"bsStyle"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("common"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"circled"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("setTotal(5)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("200"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("total = 5"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("d-button")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-button")]),n(),a("span",{class:"token attr-name"},"bsStyle"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("common"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"circled"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("setTotal(15)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("200"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("total = 15"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("d-button")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`

  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n("Simple Mode"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("litePager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("litePager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},"total-item-text"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("litePager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-view-total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":can-change-page-size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":lite"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"display"),a("span",{class:"token punctuation"},":"),n(" flex"),a("span",{class:"token punctuation"},";"),n(),a("span",{class:"token property"},"margin-top"),a("span",{class:"token punctuation"},":"),n(" 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-button")]),n(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("setLiteTotal(0)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("200"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("total = 0"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("d-button")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-button")]),n(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("setLiteTotal(20)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("200"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("total = 20"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("d-button")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-button")]),n(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("setLiteTotal(30000)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("200"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("total = 30000"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("d-button")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-button")]),n(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("setLiteTotal(100000)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("200"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("total = 100000"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("d-button")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-button")]),n(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("setIndex(2)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("200"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("index = 2"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("d-button")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-button")]),n(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("setIndex(3)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("200"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("index = 3"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("d-button")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" defineComponent"),a("span",{class:"token punctuation"},","),n(" shallowReactive "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'vue'"),a("span",{class:"token punctuation"},";"),n(`

`),a("span",{class:"token keyword"},"export"),n(),a("span",{class:"token keyword"},"default"),n(),a("span",{class:"token function"},"defineComponent"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token function"},"setup"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token punctuation"},"{"),n(`
    `),a("span",{class:"token keyword"},"const"),n(" pager1 "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"shallowReactive"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
      `),a("span",{class:"token literal-property property"},"total"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token literal-property property"},"pageIndex"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"3"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token literal-property property"},"pageSize"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
    `),a("span",{class:"token keyword"},"const"),n(" pager2 "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"shallowReactive"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
      `),a("span",{class:"token literal-property property"},"total"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token literal-property property"},"pageIndex"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"3"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token literal-property property"},"pageSize"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`

    `),a("span",{class:"token keyword"},"const"),n(" defaultPager "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"shallowReactive"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
      `),a("span",{class:"token literal-property property"},"total"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token literal-property property"},"pageIndex"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token literal-property property"},"pageSize"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
    `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token function-variable function"},"setTotal"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"val"),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token punctuation"},"{"),n(`
      defaultPager`),a("span",{class:"token punctuation"},"."),n("total "),a("span",{class:"token operator"},"="),n(" val"),a("span",{class:"token punctuation"},";"),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),n(`

    `),a("span",{class:"token keyword"},"const"),n(" litePager "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"shallowReactive"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
      `),a("span",{class:"token literal-property property"},"total"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token literal-property property"},"pageIndex"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token literal-property property"},"pageSize"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`

    `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token function-variable function"},"setLiteTotal"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"val"),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token punctuation"},"{"),n(`
      litePager`),a("span",{class:"token punctuation"},"."),n("total "),a("span",{class:"token operator"},"="),n(" val"),a("span",{class:"token punctuation"},";"),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),n(`
    `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token function-variable function"},"setIndex"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"val"),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token punctuation"},"{"),n(`
      litePager`),a("span",{class:"token punctuation"},"."),n("pageIndex "),a("span",{class:"token operator"},"="),n(" val"),a("span",{class:"token punctuation"},";"),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),n(`

    `),a("span",{class:"token keyword"},"return"),n(),a("span",{class:"token punctuation"},"{"),n(`
      pager1`),a("span",{class:"token punctuation"},","),n(`
      pager2`),a("span",{class:"token punctuation"},","),n(`
      defaultPager`),a("span",{class:"token punctuation"},","),n(`
      setTotal`),a("span",{class:"token punctuation"},","),n(`
      litePager`),a("span",{class:"token punctuation"},","),n(`
      setLiteTotal`),a("span",{class:"token punctuation"},","),n(`
      setIndex`),a("span",{class:"token punctuation"},","),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
`),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),pa=j(`<h3 id="pagination-\u53C2\u6570" tabindex="-1">Pagination \u53C2\u6570 <a class="header-anchor" href="#pagination-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">page-size</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">10</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6BCF\u9875\u663E\u793A\u6700\u5927\u6761\u76EE\u6570\u91CF</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">total</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">0</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u663E\u793A\u7684\u603B\u6761\u76EE\u6570</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">page-size-options</td><td style="text-align:left;"><code>number[] </code></td><td style="text-align:left;">10</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5206\u9875\u6BCF\u9875\u6700\u5927\u6761\u76EE\u6570\u91CF\u7684\u4E0B\u62C9\u6846\u7684\u6570\u636E\u6E90\uFF0C<br>\u9ED8\u8BA4\u6709\u56DB\u79CD\u9009\u62E9 5, 10, 20, 50</td><td style="text-align:left;"><a href="#%E5%A4%9A%E7%A7%8D%E9%85%8D%E7%BD%AE">\u591A\u79CD\u914D\u7F6E</a></td></tr><tr><td style="text-align:left;">page-size-direction</td><td style="text-align:left;"><a href="#appendtobodydirection">AppendToBodyDirection</a>[]<br>| <a href="#connectedposition">ConnectedPosition</a>[]</td><td style="text-align:left;">[<br>\xA0\xA0&#39;centerDown&#39;, <br>\xA0\xA0&#39;centerUp&#39;<br>]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u5206\u9875\u6BCF\u9875\u6761\u76EE\u7684\u4E0B\u62C9\u6846\u5C55\u793A\u7684\u65B9\u5411</td><td style="text-align:left;"><a href="#%E5%A4%9A%E7%A7%8D%E9%85%8D%E7%BD%AE">\u591A\u79CD\u914D\u7F6E</a></td></tr><tr><td style="text-align:left;">page-index</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">1</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u521D\u59CB\u5316\u9875\u7801</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">max-items</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">10</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5206\u9875\u6700\u591A\u663E\u793A\u51E0\u4E2A\u6309\u94AE</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">pre-link</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u4E0A\u4E00\u9875\u6309\u94AE\u663E\u793A\u56FE\u6807\uFF0C<br>\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A\u5DE6\u7BAD\u5934\u56FE\u6807</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">next-link</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C \u4E0B\u4E00\u9875\u6309\u94AE\u663E\u793A\u56FE\u6807\uFF0C<br>\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A\u53F3\u7BAD\u5934\u56FE\u6807</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><code>&#39;lg&#39; | &#39;md&#39; | &#39;sm&#39;</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5206\u9875\u7EC4\u4EF6\u5C3A\u5BF8</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">can-jump-page</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u5206\u9875\u8F93\u5165\u8DF3\u8F6C</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">can-change-page-size</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u6BCF\u9875\u6700\u5927\u6761\u76EE\u6570\u91CF\u7684\u4E0B\u62C9\u6846</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">can-view-total</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u603B\u6761\u76EE</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">total-item-text</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;\u6240\u6709\u6761\u76EE&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u603B\u6761\u76EE\u6587\u672C</td><td style="text-align:left;"><a href="#%E6%9E%81%E7%AE%80%E6%A8%A1%E5%BC%8F">\u6781\u7B80\u6A21\u5F0F</a></td></tr><tr><td style="text-align:left;">go-to-text</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;\u8DF3\u81F3&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u603B\u6761\u76EE\u6587\u672C</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">show-jump-button</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u8DF3\u8F6C\u6309\u94AE</td><td style="text-align:left;"><a href="#%E5%A4%9A%E7%A7%8D%E9%85%8D%E7%BD%AE">\u591A\u79CD\u914D\u7F6E</a></td></tr><tr><td style="text-align:left;">show-true-page-index</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9875\u7801\u8D85\u51FA\u5206\u9875\u8303\u56F4\u65F6\u5019\u4E5F\u663E\u793A\u5F53\u524D\u9875\u7801\u7684\u5F00\u5173</td><td style="text-align:left;"><a href="#%E5%A4%9A%E7%A7%8D%E9%85%8D%E7%BD%AE">\u591A\u79CD\u914D\u7F6E</a></td></tr><tr><td style="text-align:left;">lite</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u5207\u6362\u4E3A\u6781\u7B80\u6A21\u5F0F</td><td style="text-align:left;"><a href="#%E6%9E%81%E7%AE%80%E6%A8%A1%E5%BC%8F">\u6781\u7B80\u6A21\u5F0F</a></td></tr><tr><td style="text-align:left;">show-page-selector</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C<code>\u6781\u7B80\u6A21\u5F0F</code>\u4E0B\u662F\u5426\u663E\u793A\u9875\u7801\u4E0B\u62C9</td><td style="text-align:left;"><a href="#%E6%9E%81%E7%AE%80%E6%A8%A1%E5%BC%8F">\u6781\u7B80\u6A21\u5F0F</a></td></tr><tr><td style="text-align:left;">have-config-menu</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C<code>\u6781\u7B80\u6A21\u5F0F</code>\u4E0B\u662F\u5426\u663E\u793A\u914D\u7F6E</td><td style="text-align:left;"><a href="#%E6%9E%81%E7%AE%80%E6%A8%A1%E5%BC%8F">\u6781\u7B80\u6A21\u5F0F</a></td></tr><tr><td style="text-align:left;">auto-fix-page-index</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6539\u53D8 pageSize \u65F6\u662F\u5426\u81EA\u52A8\u4FEE\u6B63\u9875\u7801\uFF0C<br>\u82E5<code>pageSizeChange</code>\u4E8B\u4EF6\u4E2D\u4F1A\u5BF9<br><code>pageIndex</code>\u505A\u5904\u7406\uFF0C\u5219\u63A8\u8350\u8BBE\u7F6E\u4E3A<code>false</code></td><td style="text-align:left;"><a href="#%E6%9E%81%E7%AE%80%E6%A8%A1%E5%BC%8F">\u6781\u7B80\u6A21\u5F0F</a></td></tr><tr><td style="text-align:left;">auto-hide</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u81EA\u52A8\u9690\u85CF\uFF0C<br>\u5F53 auto-hide \u4E3A true\uFF0C<br>\u5E76\u4E14 pageSizeOptions \u6700\u5C0F\u503C\u5927\u4E8E total\uFF0C<br>\u5219\u4E0D\u5C55\u793A\u5206\u9875</td><td style="text-align:left;"><a href="#%E6%9E%81%E7%AE%80%E6%A8%A1%E5%BC%8F">\u6781\u7B80\u6A21\u5F0F</a></td></tr></tbody></table><h3 id="pagination-\u4E8B\u4EF6" tabindex="-1">Pagination \u4E8B\u4EF6 <a class="header-anchor" href="#pagination-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">page-index-change</td><td style="text-align:left;"><code>(pageIndex: number) =&gt; void</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9875\u7801\u53D8\u5316\u7684\u56DE\u8C03,\u8FD4\u56DE\u5F53\u524D\u9875\u7801\u503C</td><td style="text-align:left;"><a href="#%E5%A4%9A%E7%A7%8D%E9%85%8D%E7%BD%AE">\u591A\u79CD\u914D\u7F6E</a></td></tr><tr><td style="text-align:left;">page-size-change</td><td style="text-align:left;"><code>(pageSize: number) =&gt; void</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6BCF\u9875\u6700\u5927\u6761\u76EE\u6570\u91CF\u53D8\u66F4\u65F6\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u5F53\u524D\u6BCF\u9875\u663E\u793A\u6761\u76EE\u6570</td><td style="text-align:left;"><a href="#%E5%A4%9A%E7%A7%8D%E9%85%8D%E7%BD%AE">\u591A\u79CD\u914D\u7F6E</a></td></tr></tbody></table><h3 id="pagination-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Pagination \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#pagination-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="appendtobodydirection" tabindex="-1">AppendToBodyDirection <a class="header-anchor" href="#appendtobodydirection" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">AppendToBodyDirection</span> <span class="token operator">=</span> <span class="token string">&#39;rightDown&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;rightUp&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;leftUp&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;leftDown&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;centerDown&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;centerUp&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="connectedposition" tabindex="-1">ConnectedPosition <a class="header-anchor" href="#connectedposition" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">ConnectedPosition</span> <span class="token punctuation">{</span>
  originX<span class="token operator">:</span> <span class="token string">&#39;start&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;end&#39;</span><span class="token punctuation">;</span>
  originY<span class="token operator">:</span> <span class="token string">&#39;top&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">;</span>

  overlayX<span class="token operator">:</span> <span class="token string">&#39;start&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;end&#39;</span><span class="token punctuation">;</span>
  overlayY<span class="token operator">:</span> <span class="token string">&#39;top&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">;</span>

  weight<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  offsetX<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  offsetY<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  panelClass<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,9);function ua(s,o,k,g,m,z){const f=B("render-demo-0"),v=B("demo"),E=B("render-demo-1"),y=B("render-demo-2"),F=B("render-demo-3");return X(),J("div",null,[G,S(v,{sourceCode:`<template>
  <h5 style="padding: 20px 0 10px;">size = 'sm'</h5>
  <d-pagination
    size="sm"
    :total="pager.total"
    v-model:pageSize="pager.pageSize"
    v-model:pageIndex="pager.pageIndex"
    :can-view-total="true"
    :can-change-page-size="true"
    :can-jump-page="true"
    :max-items="5"
  />

  <h5 style="padding: 20px 0 10px;">size = 'md'</h5>
  <d-pagination
    :total="pager.total"
    v-model:pageSize="pager.pageSize"
    v-model:pageIndex="pager.pageIndex"
    :can-view-total="true"
    :can-change-page-size="true"
    :can-jump-page="true"
    :max-items="5"
  />

  <h5 style="padding: 20px 0 10px;">size = 'lg'</h5>
  <d-pagination
    size="lg"
    :total="pager.total"
    v-model:pageSize="pager.pageSize"
    v-model:pageIndex="pager.pageIndex"
    :can-view-total="true"
    :can-change-page-size="true"
    :can-jump-page="true"
    :max-items="5"
  />

  <h5 style="padding: 20px 0 10px;">Custom Style</h5>
  <d-pagination
    :total="pager.total"
    v-model:pageSize="pager.pageSize"
    v-model:pageIndex="pager.pageIndex"
    :can-view-total="true"
    :can-change-page-size="true"
    :can-jump-page="true"
    go-to-text="Jump to"
    :pre-link="preLink"
    :next-link="nextLink"
  />
</template>
<script>
import { defineComponent, shallowReactive, h } from 'vue';

export default defineComponent({
  setup() {
    const pager = shallowReactive({
      total: 306,
      pageIndex: 5,
      pageSize: 10,
      pageSizeOptions: [10, 20, 30, 40, 50],
    });

    const preLink = '<span class="icon-arrow-left"></span>';
    const nextLink = '<span class="icon-arrow-right"></span>';

    return {
      pager,
      preLink,
      nextLink,
    };
  },
});
<\/script>
`},{highlight:I(()=>[H]),default:I(()=>[S(f)]),_:1}),K,Q,S(v,{sourceCode:`<template>
  <h5 style="padding: 20px 0 10px;">Simple Mode</h5>
  <d-pagination
    :total="pager.total"
    v-model:pageSize="pager.pageSize"
    total-item-text="Total"
    v-model:pageIndex="pager.pageIndex"
    :can-view-total="true"
    :can-change-page-size="true"
    :lite="true"
  />

  <h5 style="padding: 20px 0 10px;">Super Simple Mode</h5>
  <d-pagination
    size="sm"
    :total="pager.total"
    v-model:pageSize="pager.pageSize"
    :show-page-selector="false"
    v-model:pageIndex="pager.pageIndex"
    :can-change-page-size="true"
    :lite="true"
  />

  <h5 style="padding: 20px 0 10px;">have-config-menu = "true"</h5>
  <d-pagination
    size="sm"
    :total="pager.total"
    v-model:pageSize="pager.pageSize"
    :show-page-selector="false"
    v-model:pageIndex="pager.pageIndex"
    :can-change-page-size="true"
    :lite="true"
    :have-config-menu="true"
  >
    <div class="pagination-config-item">
      <div class="config-item-title">show field</div>
      <div class="config-item-words">setting</div>
    </div>
    <div class="pagination-config-item">
      <div class="config-item-title">display method</div>
      <div style="padding-left: 8px; margin-top: 4px">
        <i class="icon-list-view"></i>
        <i class="icon-veIcon-briefcase"></i>
      </div>
    </div>
  </d-pagination>
</template>
<script>
import { defineComponent, shallowReactive } from 'vue';

export default defineComponent({
  setup() {
    const pager = shallowReactive({
      total: 306,
      pageIndex: 5,
      pageSize: 10,
      pageSizeOptions: [10, 20, 30, 40, 50],
    });

    return {
      pager,
    };
  },
});
<\/script>

<style lang="scss">
@import '@devui/styles-var/devui-var.scss';

/* \u914D\u7F6E\u4E2D\u7684\u6BCF\u4E00\u9879\uFF0C\u81EA\u5B9A\u4E49\u9879\u5EFA\u8BAE\u5E94\u7528\u6B64\u6837\u5F0F\u6216\u5728\u6B64\u57FA\u7840\u4E0A\u4FEE\u6539 */
.pagination-config-item {
  padding-bottom: 8px;
  padding-top: 4px;
  border-bottom: 1px solid $devui-line;
}

/* \u914D\u7F6E\u4E2D\u6BCF\u4E00\u9879\u7684\u6807\u9898\u6837\u5F0F\uFF0C\u81EA\u5B9A\u4E49\u9879\u5EFA\u8BAE\u5E94\u7528\u6B64\u6837\u5F0F\u6216\u5728\u6B64\u57FA\u7840\u4E0A\u4FEE\u6539 */
.config-item-title {
  color: $devui-line;
  padding-left: 8px;
  font-size: $devui-font-size;
  line-height: 1.5;
}

.config-item-words {
  color: $devui-text;
  padding-left: 8px;
  font-size: $devui-font-size;
  margin-top: 4px;
}

.config-item-words:hover {
  background-color: $devui-area;
  cursor: pointer;
}
</style>
`},{highlight:I(()=>[Z]),default:I(()=>[S(E)]),_:1}),aa,na,S(v,{sourceCode:`<template>
  <div style="padding: 20px 0 10px;"></div>
  <d-pagination
    size="sm"
    :total="pager.total"
    v-model:pageSize="pager.pageSize"
    v-model:pageIndex="pager.pageIndex"
    :max-items="10"
    :can-view-total="true"
    :can-jump-page="true"
    :can-change-page-size="true"
    @page-index-change="pageIndexChange"
    @page-size-change="pageSizeChange"
  />

  <div style="padding: 20px 0 10px;"></div>
  <d-pagination
    size="sm"
    :total="pager.total"
    v-model:pageSize="pager.pageSize"
    v-model:pageIndex="pager.pageIndex"
    :max-items="10"
    :can-view-total="true"
    :can-jump-page="true"
    :show-jump-button="true"
    @page-index-change="pageIndexChange"
    @page-size-change="pageSizeChange"
  />

  <div style="padding: 20px 0 10px;"></div>
  <d-pagination
    size="sm"
    :total="pager.total"
    v-model:pageSize="pager.pageSize"
    v-model:pageIndex="pager.pageIndex"
    :max-items="10"
    :can-view-total="true"
    :can-change-page-size="true"
    :can-jump-page="true"
    :auto-fix-page-index="false"
    :auto-hide="false"
    @page-index-change="pageIndexChangeWithoutFix"
    @page-size-change="pageSizeChangeWithoutFix"
    :page-size-options="pager.pageSizeOptions"
    :page-size-direction="['centerUp']"
  />
</template>
<script>
import { defineComponent, shallowReactive } from 'vue';

export default defineComponent({
  setup() {
    const pager = shallowReactive({
      total: 306,
      pageIndex: 5,
      pageSize: 10,
      pageSizeOptions: [10, 20, 30, 40, 50],
    });

    const pageSizeChange = (val) => {
      pager.pageIndex = 1;
      console.log(val, 'pageSizeChange');
    };
    const pageIndexChange = (val) => {
      console.log(val, 'pageIndexChange');
    };

    const pageIndexChangeWithoutFix = (pageIndex) => {
      console.log(pageIndex, 'pageIndexChangeWithoutFix');
    };
    const pageSizeChangeWithoutFix = (pageSize) => {
      pager.pageIndex = 1;
      console.log(pageSize, 'pageSizeChangeWithoutFix');
    };

    return {
      pager,
      pageSizeChange,
      pageIndexChange,
      pageIndexChangeWithoutFix,
      pageSizeChangeWithoutFix,
    };
  },
});
<\/script>
`},{highlight:I(()=>[ta]),default:I(()=>[S(y)]),_:1}),sa,ea,S(v,{sourceCode:`<template>
  <h5 style="padding: 20px 0 10px;">
    When the value of <code>pageIndex</code> exceeds the maximum page number, enable <code>show-true-page-index</code> to display the value
    of <code>pageIndex</code>
  </h5>
  <d-pagination
    size="sm"
    :total="pager1.total"
    v-model:pageSize="pager1.pageSize"
    v-model:pageIndex="pager1.pageIndex"
    :max-items="5"
    :can-view-total="true"
    :can-change-page-size="true"
    :can-jump-page="true"
    :show-true-page-index="true"
  />

  <h5 style="padding: 20px 0 10px;">
    When the value of <code>pageIndex</code> exceeds the maximum page number, the <code>show-true-page-index</code> function is disabled and
    only the maximum page number is displayed.
  </h5>
  <d-pagination
    size="sm"
    :total="pager2.total"
    v-model:pageSize="pager2.pageSize"
    v-model:pageIndex="pager2.pageIndex"
    :can-view-total="true"
    :can-change-page-size="true"
    :can-jump-page="true"
    :max-items="5"
    :show-true-page-index="false"
  />

  <h5 style="padding: 20px 0 10px;">Default Mode</h5>
  <d-pagination
    size="sm"
    :total="defaultPager.total"
    v-model:pageSize="defaultPager.pageSize"
    v-model:pageIndex="defaultPager.pageIndex"
    :can-view-total="true"
    :can-change-page-size="true"
    :can-jump-page="true"
    :max-items="5"
  />
  <div style="display: flex; margin-top: 10px;">
    <d-button bsStyle="primary" circled="true" size="sm" @click="setTotal(0)" width="200">total = 0</d-button>
    <d-button bsStyle="common" circled="true" size="sm" @click="setTotal(5)" width="200">total = 5</d-button>
    <d-button bsStyle="common" circled="true" size="sm" @click="setTotal(15)" width="200">total = 15</d-button>
  </div>

  <h5 style="padding: 20px 0 10px;">Simple Mode</h5>
  <d-pagination
    :total="litePager.total"
    v-model:pageSize="litePager.pageSize"
    total-item-text="total"
    v-model:pageIndex="litePager.pageIndex"
    :can-view-total="true"
    :can-change-page-size="true"
    :lite="true"
  />
  <div style="display: flex; margin-top: 10px;">
    <d-button size="sm" @click="setLiteTotal(0)" width="200">total = 0</d-button>
    <d-button size="sm" @click="setLiteTotal(20)" width="200">total = 20</d-button>
    <d-button size="sm" @click="setLiteTotal(30000)" width="200">total = 30000</d-button>
    <d-button size="sm" @click="setLiteTotal(100000)" width="200">total = 100000</d-button>
    <d-button size="sm" @click="setIndex(2)" width="200">index = 2</d-button>
    <d-button size="sm" @click="setIndex(3)" width="200">index = 3</d-button>
  </div>
</template>
<script>
import { defineComponent, shallowReactive } from 'vue';

export default defineComponent({
  setup() {
    const pager1 = shallowReactive({
      total: 10,
      pageIndex: 3,
      pageSize: 10,
    });
    const pager2 = shallowReactive({
      total: 10,
      pageIndex: 3,
      pageSize: 10,
    });

    const defaultPager = shallowReactive({
      total: 0,
      pageIndex: 1,
      pageSize: 10,
    });
    const setTotal = (val) => {
      defaultPager.total = val;
    };

    const litePager = shallowReactive({
      total: 0,
      pageIndex: 1,
      pageSize: 10,
    });

    const setLiteTotal = (val) => {
      litePager.total = val;
    };
    const setIndex = (val) => {
      litePager.pageIndex = val;
    };

    return {
      pager1,
      pager2,
      defaultPager,
      setTotal,
      litePager,
      setLiteTotal,
      setIndex,
    };
  },
});
<\/script>
`},{highlight:I(()=>[oa]),default:I(()=>[S(F)]),_:1}),pa])}var ga=_(Y,[["render",ua]]);export{ra as __pageData,ga as default};
