var D=Object.defineProperty;var B=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var F=(a,e,s)=>e in a?D(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,d=(a,e)=>{for(var s in e||(e={}))b.call(e,s)&&F(a,s,e[s]);if(B)for(var s of B(e))z.call(e,s)&&F(a,s,e[s]);return a};import{_ as q,r as h,o as w,c as M,a as k,w as r,b as x,d as t,e as n,V as E}from"./app.d1c26241.js";const V={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:a,resolveComponent:e,withCtx:s,createVNode:c,openBlock:o,createElementBlock:l}=E,p=a(" \u7528\u4E8E\u5BF9\u4E8B\u7269\u7684\u8BA8\u8BBA\uFF0C\u4F8B\u5982\u9875\u9762\u3001\u535A\u5BA2\u6587\u7AE0\u3001\u95EE\u9898\u7B49\u7B49\u3002 ");function u(g,v){const m=e("d-comment");return o(),l("div",null,[c(m,{avatar:"",author:"\u90D1\u8FEA",datetime:"10\u5C0F\u65F6\u524D"},{default:s(()=>[p]),_:1})])}return d({render:u},{})}(),"render-demo-1":function(){const{createElementVNode:a,resolveComponent:e,createVNode:s,createTextVNode:c,withCtx:o,openBlock:l,createElementBlock:p}=E,u=a("p",null,"\u7528\u4E8E\u5BF9\u4E8B\u7269\u7684\u8BA8\u8BBA\uFF0C\u4F8B\u5982\u9875\u9762\u3001\u535A\u5BA2\u6587\u7AE0\u3001\u95EE\u9898\u7B49\u7B49\u3002",-1),i={class:"comment-demo-custom__avatar",href:"https://juejin.cn/user/712139267650141",target:"_blank"},g=a("div",{class:"comment-demo-custom__head"},[a("div",{class:"comment-demo-custom__author"},[a("a",{href:"https://juejin.cn/user/712139267650141",target:"_blank"},[a("span",null,"DevUI\u56E2\u961F"),a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"14",viewBox:"0 0 23 14"},[a("g",{fill:"none","fill-rule":"evenodd"},[a("path",{fill:"#34D19B",d:"M3 1h17a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"}),a("path",{fill:"#FFF",d:"M3 4h2v7H3zM8 6h2l2 5h-2z"}),a("path",{fill:"#FFF",d:"M14 6h-2l-2 5h2zM3 9h5v2H3zM16.333 4L17 3v3h-2zM15 6h2v4h-2zM17 8h1v2h-1zM17 3h1v2h-1zM18 3h2v8h-2z"})])])]),a("span",null,"\u534E\u4E3A @ \u524D\u7AEF\u7EC4\u4EF6\u5E93")]),a("time",{class:"comment-demo-custom__datetime"},"17\u5929\u524D")],-1),v={class:"comment-demo-custom__actions"},m=c("10"),f=c("\u8BC4\u8BBA");function A(I,L){const C=e("d-avatar"),_=e("d-button"),y=e("d-comment");return l(),p("div",null,[s(y,null,{avatar:o(()=>[a("a",i,[s(C,{isRound:!1,imgSrc:"https://vue-devui.github.io/assets/logo.svg"})])]),head:o(()=>[g]),actions:o(()=>[a("div",v,[s(_,{variant:"text",icon:"like"},{default:o(()=>[m]),_:1}),s(_,{variant:"text",icon:"comment"},{default:o(()=>[f]),_:1})])]),default:o(()=>[u]),_:1})])}return d({render:A},{})}()}},G='{"title":"Comment \u8BC4\u8BBA","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u81EA\u5B9A\u4E49","slug":"\u81EA\u5B9A\u4E49"},{"level":3,"title":"Comment \u53C2\u6570","slug":"comment-\u53C2\u6570"},{"level":3,"title":"Comment \u63D2\u69FD","slug":"comment-\u63D2\u69FD"}],"relativePath":"components/comment/index.md","lastUpdated":1662171945322}',j=x('<h1 id="comment-\u8BC4\u8BBA" tabindex="-1">Comment \u8BC4\u8BBA <a class="header-anchor" href="#comment-\u8BC4\u8BBA" aria-hidden="true">#</a></h1><p>\u5BF9\u7F51\u7AD9\u5185\u5BB9\u7684\u53CD\u9988\u3001\u8BC4\u4EF7\u548C\u8BA8\u8BBA\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u8BC4\u8BBA\u7EC4\u4EF6\u53EF\u7528\u4E8E\u5BF9\u4E8B\u7269\u7684\u8BA8\u8BBA\uFF0C\u4F8B\u5982\u9875\u9762\u3001\u535A\u5BA2\u6587\u7AE0\u3001\u95EE\u9898\u7B49\u7B49\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),N=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-comment")]),n(`
    `),t("span",{class:"token attr-name"},"avatar"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"author"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u90D1\u8FEA"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"datetime"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("10\u5C0F\u65F6\u524D"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    \u7528\u4E8E\u5BF9\u4E8B\u7269\u7684\u8BA8\u8BBA\uFF0C\u4F8B\u5982\u9875\u9762\u3001\u535A\u5BA2\u6587\u7AE0\u3001\u95EE\u9898\u7B49\u7B49\u3002
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-comment")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),H=t("h3",{id:"\u81EA\u5B9A\u4E49",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49 "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49","aria-hidden":"true"},"#")],-1),T=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-comment")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("p")]),t("span",{class:"token punctuation"},">")]),n("\u7528\u4E8E\u5BF9\u4E8B\u7269\u7684\u8BA8\u8BBA\uFF0C\u4F8B\u5982\u9875\u9762\u3001\u535A\u5BA2\u6587\u7AE0\u3001\u95EE\u9898\u7B49\u7B49\u3002"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("p")]),t("span",{class:"token punctuation"},">")]),n(`

    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-slot:"),n("avatar")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("comment-demo-custom__avatar"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"href"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("https://juejin.cn/user/712139267650141"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"target"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("_blank"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-avatar")]),n(),t("span",{class:"token attr-name"},":isRound"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("false"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"imgSrc"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("https://vue-devui.github.io/assets/logo.svg"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-avatar")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-slot:"),n("head")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("comment-demo-custom__head"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("comment-demo-custom__author"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a")]),n(),t("span",{class:"token attr-name"},"href"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("https://juejin.cn/user/712139267650141"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"target"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("_blank"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),t("span",{class:"token punctuation"},">")]),n("DevUI\u56E2\u961F"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("svg")]),n(),t("span",{class:"token attr-name"},"xmlns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("http://www.w3.org/2000/svg"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("23"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("14"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"viewBox"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("0 0 23 14"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
              `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("g")]),n(),t("span",{class:"token attr-name"},"fill"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("none"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"fill-rule"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("evenodd"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
                `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("path")]),n(),t("span",{class:"token attr-name"},"fill"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("#34D19B"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"d"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("M3 1h17a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
                `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("path")]),n(),t("span",{class:"token attr-name"},"fill"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("#FFF"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"d"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("M3 4h2v7H3zM8 6h2l2 5h-2z"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
                `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("path")]),n(),t("span",{class:"token attr-name"},"fill"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("#FFF"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"d"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("M14 6h-2l-2 5h2zM3 9h5v2H3zM16.333 4L17 3v3h-2zM15 6h2v4h-2zM17 8h1v2h-1zM17 3h1v2h-1zM18 3h2v8h-2z"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
              `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("g")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("svg")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),t("span",{class:"token punctuation"},">")]),n("\u534E\u4E3A @ \u524D\u7AEF\u7EC4\u4EF6\u5E93"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("time")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("comment-demo-custom__datetime"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("17\u5929\u524D"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("time")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-slot:"),n("actions")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("comment-demo-custom__actions"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("text"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"icon"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("like"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("10"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("text"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"icon"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("comment"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u8BC4\u8BBA"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-comment")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("scss"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".comment-demo-custom__avatar"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),n(" 16px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token selector"},".comment-demo-custom__head"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" flex"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"justify-content"),t("span",{class:"token punctuation"},":"),n(" space-between"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token selector"},".comment-demo-custom__author"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),n(" 24px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token selector"},".comment-demo-custom__author a"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),n(" 12px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"font-size"),t("span",{class:"token punctuation"},":"),n(" 14px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"color"),t("span",{class:"token punctuation"},":"),n(),t("span",{class:"token function"},"var"),t("span",{class:"token punctuation"},"("),n("--devui-text"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"font-weight"),t("span",{class:"token punctuation"},":"),n(" bold"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token selector"},".comment-demo-custom__author a:hover"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"text-decoration"),t("span",{class:"token punctuation"},":"),n(" none"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token selector"},".comment-demo-custom__author > span"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"color"),t("span",{class:"token punctuation"},":"),n(),t("span",{class:"token function"},"var"),t("span",{class:"token punctuation"},"("),n("--devui-text-weak"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token selector"},".comment-demo-custom__actions button"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),n(" 12px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),S=x('<h3 id="comment-\u53C2\u6570" tabindex="-1">Comment \u53C2\u6570 <a class="header-anchor" href="#comment-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">avatar</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u5934\u50CF</td></tr><tr><td style="text-align:left;">author</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u4F5C\u8005</td></tr><tr><td style="text-align:left;">datetime</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u65F6\u95F4</td></tr></tbody></table><h3 id="comment-\u63D2\u69FD" tabindex="-1">Comment \u63D2\u69FD <a class="header-anchor" href="#comment-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u63D2\u69FD\u540D</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">\u8BC4\u8BBA\u5185\u5BB9\u7684\u63D2\u69FD</td></tr><tr><td style="text-align:left;">avatar</td><td style="text-align:left;">\u5934\u50CF\u63D2\u69FD</td></tr><tr><td style="text-align:left;">author</td><td style="text-align:left;">\u4F5C\u8005\u63D2\u69FD</td></tr><tr><td style="text-align:left;">datetime</td><td style="text-align:left;">\u65F6\u95F4\u63D2\u69FD</td></tr><tr><td style="text-align:left;">head</td><td style="text-align:left;">\u5934\u90E8\u63D2\u69FD</td></tr><tr><td style="text-align:left;">actions</td><td style="text-align:left;">\u64CD\u4F5C\u533A\u57DF\u63D2\u69FD</td></tr></tbody></table>',4);function U(a,e,s,c,o,l){const p=h("render-demo-0"),u=h("demo"),i=h("render-demo-1");return w(),M("div",null,[j,k(u,{sourceCode:`<template>
  <d-comment
    avatar=""
    author="\u90D1\u8FEA"
    datetime="10\u5C0F\u65F6\u524D"
  >
    \u7528\u4E8E\u5BF9\u4E8B\u7269\u7684\u8BA8\u8BBA\uFF0C\u4F8B\u5982\u9875\u9762\u3001\u535A\u5BA2\u6587\u7AE0\u3001\u95EE\u9898\u7B49\u7B49\u3002
  </d-comment>
</template>
`},{highlight:r(()=>[N]),default:r(()=>[k(p)]),_:1}),H,k(u,{sourceCode:`<template>
  <d-comment>
    <p>\u7528\u4E8E\u5BF9\u4E8B\u7269\u7684\u8BA8\u8BBA\uFF0C\u4F8B\u5982\u9875\u9762\u3001\u535A\u5BA2\u6587\u7AE0\u3001\u95EE\u9898\u7B49\u7B49\u3002</p>

    <template v-slot:avatar>
      <a class="comment-demo-custom__avatar" href="https://juejin.cn/user/712139267650141" target="_blank">
        <d-avatar :isRound="false" imgSrc="https://vue-devui.github.io/assets/logo.svg"></d-avatar>
      </a>
    </template>

    <template v-slot:head>
      <div class="comment-demo-custom__head">
        <div class="comment-demo-custom__author">
          <a href="https://juejin.cn/user/712139267650141" target="_blank">
            <span>DevUI\u56E2\u961F</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="14" viewBox="0 0 23 14">
              <g fill="none" fill-rule="evenodd">
                <path fill="#34D19B" d="M3 1h17a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z" />
                <path fill="#FFF" d="M3 4h2v7H3zM8 6h2l2 5h-2z" />
                <path fill="#FFF" d="M14 6h-2l-2 5h2zM3 9h5v2H3zM16.333 4L17 3v3h-2zM15 6h2v4h-2zM17 8h1v2h-1zM17 3h1v2h-1zM18 3h2v8h-2z" />
              </g>
            </svg>
          </a>
          <span>\u534E\u4E3A @ \u524D\u7AEF\u7EC4\u4EF6\u5E93</span>
        </div>
        <time class="comment-demo-custom__datetime">17\u5929\u524D</time>
      </div>
    </template>

    <template v-slot:actions>
      <div class="comment-demo-custom__actions">
        <d-button variant="text" icon="like">10</d-button>
        <d-button variant="text" icon="comment">\u8BC4\u8BBA</d-button>
      </div>
    </template>
  </d-comment>
</template>
<style lang="scss">
.comment-demo-custom__avatar {
  margin-right: 16px;
}

.comment-demo-custom__head {
  display: flex;
  justify-content: space-between;
}

.comment-demo-custom__author {
  margin-right: 24px;
}

.comment-demo-custom__author a {
  margin-right: 12px;
  font-size: 14px;
  color: var(--devui-text);
  font-weight: bold;
}

.comment-demo-custom__author a:hover {
  text-decoration: none;
}

.comment-demo-custom__author > span {
  color: var(--devui-text-weak);
}

.comment-demo-custom__actions button {
  margin-right: 12px;
}
</style>
`},{highlight:r(()=>[T]),default:r(()=>[k(i)]),_:1}),S])}var J=q(V,[["render",U]]);export{G as __pageData,J as default};
