var I=Object.defineProperty;var F=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var E=(c,s,a)=>s in c?I(c,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):c[s]=a,V=(c,s)=>{for(var a in s||(s={}))A.call(s,a)&&E(c,a,s[a]);if(F)for(var a of F(s))G.call(s,a)&&E(c,a,s[a]);return c};import{_ as L,V as y,r as B,c as U,a as x,w as v,b as P,d as t,e as n,o as j}from"./app.bfbf33a4.js";const $={name:"component-doc",components:{"render-demo-0":function(){const{renderList:c,Fragment:s,openBlock:a,createElementBlock:l,toDisplayString:m,createTextVNode:i,resolveComponent:p,withCtx:e,createBlock:d,createVNode:u}=y;function g(r,q){const C=p("d-carousel-item"),h=p("d-carousel");return a(),l("div",null,[u(h,{height:"200px"},{default:e(()=>[(a(!0),l(s,null,c(r.items,k=>(a(),d(C,{key:k},{default:e(()=>[i(m(k),1)]),_:2},1024))),128))]),_:1})])}const{defineComponent:_,ref:b}=y,w=_({setup(){return{items:b(["page 1","page 2","page 3","page 4"])}}});return V({render:g},w)}(),"render-demo-1":function(){const{renderList:c,Fragment:s,openBlock:a,createElementBlock:l,toDisplayString:m,createTextVNode:i,resolveComponent:p,withCtx:e,createBlock:d,createVNode:u}=y;function g(r,q){const C=p("d-carousel-item"),h=p("d-carousel");return a(),l("div",null,[u(h,{height:"200px",arrowTrigger:"always",dotTrigger:"hover"},{default:e(()=>[(a(!0),l(s,null,c(r.items,k=>(a(),d(C,{key:k},{default:e(()=>[i(m(k),1)]),_:2},1024))),128))]),_:1})])}const{defineComponent:_,ref:b}=y,w=_({setup(){return{items:b(["page 1","page 2","page 3","page 4"])}}});return V({render:g},w)}(),"render-demo-2":function(){const{renderList:c,Fragment:s,openBlock:a,createElementBlock:l,toDisplayString:m,createTextVNode:i,resolveComponent:p,withCtx:e,createBlock:d,createVNode:u}=y;function g(r,q){const C=p("d-carousel-item"),h=p("d-carousel");return a(),l("div",null,[u(h,{height:"200px",autoplay:"",autoplaySpeed:3e3},{default:e(()=>[(a(!0),l(s,null,c(r.items,k=>(a(),d(C,{key:k},{default:e(()=>[i(m(k),1)]),_:2},1024))),128))]),_:1})])}const{defineComponent:_,ref:b}=y,w=_({setup(){return{items:b(["page 1","page 2","page 3","page 4"])}}});return V({render:g},w)}(),"render-demo-3":function(){const{renderList:c,Fragment:s,openBlock:a,createElementBlock:l,toDisplayString:m,createTextVNode:i,resolveComponent:p,withCtx:e,createBlock:d,createVNode:u,createElementVNode:g}=y,_={class:"carousel-demo-operate"},b=i("Prev"),w=i("Next"),r=i("First");function q(N,T){const D=p("d-carousel-item"),O=p("d-carousel"),S=p("d-button");return a(),l("div",null,[u(O,{ref:"carousel",height:"200px",arrowTrigger:"never"},{default:e(()=>[(a(!0),l(s,null,c(N.items,o=>(a(),d(D,{key:o},{default:e(()=>[i(m(o),1)]),_:2},1024))),128))]),_:1},512),g("div",_,[u(S,{bsStyle:"common",onClick:N.onPrev},{default:e(()=>[b]),_:1},8,["onClick"]),u(S,{bsStyle:"primary",onClick:N.onNext},{default:e(()=>[w]),_:1},8,["onClick"]),u(S,{bsStyle:"common",onClick:N.onGoFirst},{default:e(()=>[r]),_:1},8,["onClick"])])])}const{defineComponent:C,ref:h}=y,k=C({setup(){const N=h(["page 1","page 2","page 3","page 4"]),T=h();return{items:N,carousel:T,onPrev:()=>{var o,f;(f=(o=T.value)==null?void 0:o.prev)==null||f.call(o)},onNext:()=>{var o,f;(f=(o=T.value)==null?void 0:o.next)==null||f.call(o)},onGoFirst:()=>{var o,f;(f=(o=T.value)==null?void 0:o.goto)==null||f.call(o,0)}}}});return V({render:q},k)}()}},at='{"title":"Carousel","description":"","frontmatter":{},"headers":[{"level":3,"title":"When To Use","slug":"when-to-use"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Indicator&Toggle-Arrow","slug":"indicator-toggle-arrow"},{"level":3,"title":"Automatic-NVOD","slug":"automatic-nvod"},{"level":3,"title":"Custom-Operations","slug":"custom-operations"},{"level":3,"title":"API","slug":"api"}],"relativePath":"en-US/components/carousel/index.md","lastUpdated":1647843975070}',J=P('<h1 id="carousel" tabindex="-1">Carousel <a class="header-anchor" href="#carousel" aria-hidden="true">#</a></h1><p>An area of carousel.</p><h3 id="when-to-use" tabindex="-1">When To Use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>Used to display images or cards.</p><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3>',5),W=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-carousel")]),n(),t("span",{class:"token attr-name"},"height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("200px"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-carousel-item")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in items"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("{{ item }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-carousel-item")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-carousel")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" items "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'page 1'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 2'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 3'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 4'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      items
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".d-carousel-item"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"text-align"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"line-height"),t("span",{class:"token punctuation"},":"),n(" 200px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"background"),t("span",{class:"token punctuation"},":"),n(),t("span",{class:"token function"},"var"),t("span",{class:"token punctuation"},"("),n("--devui-global-bg"),t("span",{class:"token punctuation"},","),n(" #f3f6f8"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),z=t("h3",{id:"indicator-toggle-arrow",tabindex:"-1"},[n("Indicator&Toggle-Arrow "),t("a",{class:"header-anchor",href:"#indicator-toggle-arrow","aria-hidden":"true"},"#")],-1),M=t("p",null,"If arrowTrigger is set to always, the arrow is permanently displayed. If dotTrigger is set to hover, it will switched when hover to the dots.",-1),R=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-carousel")]),n(),t("span",{class:"token attr-name"},"height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("200px"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"arrowTrigger"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("always"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"dotTrigger"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("hover"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-carousel-item")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in items"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("{{ item }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-carousel-item")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-carousel")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" items "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'page 1'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 2'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 3'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 4'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      items
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".d-carousel-item"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"text-align"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"line-height"),t("span",{class:"token punctuation"},":"),n(" 200px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"background"),t("span",{class:"token punctuation"},":"),n(),t("span",{class:"token function"},"var"),t("span",{class:"token punctuation"},"("),n("--devui-global-bg"),t("span",{class:"token punctuation"},","),n(" #f3f6f8"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),H=t("h3",{id:"automatic-nvod",tabindex:"-1"},[n("Automatic-NVOD "),t("a",{class:"header-anchor",href:"#automatic-nvod","aria-hidden":"true"},"#")],-1),K=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-carousel")]),n(),t("span",{class:"token attr-name"},"height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("200px"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"autoplay"),n(),t("span",{class:"token attr-name"},":autoplaySpeed"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3000"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-carousel-item")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in items"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("{{ item }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-carousel-item")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-carousel")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" items "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'page 1'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 2'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 3'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 4'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      items
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".d-carousel-item"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"text-align"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"line-height"),t("span",{class:"token punctuation"},":"),n(" 200px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"background"),t("span",{class:"token punctuation"},":"),n(),t("span",{class:"token function"},"var"),t("span",{class:"token punctuation"},"("),n("--devui-global-bg"),t("span",{class:"token punctuation"},","),n(" #f3f6f8"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),Q=t("h3",{id:"custom-operations",tabindex:"-1"},[n("Custom-Operations "),t("a",{class:"header-anchor",href:"#custom-operations","aria-hidden":"true"},"#")],-1),X=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-carousel")]),n(),t("span",{class:"token attr-name"},"ref"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("carousel"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("200px"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"arrowTrigger"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("never"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-carousel-item")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in items"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("{{ item }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-carousel-item")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-carousel")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("carousel-demo-operate"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"bsStyle"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onPrev"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Prev"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"bsStyle"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onNext"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Next"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"bsStyle"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onGoFirst"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("First"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" items "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'page 1'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 2'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 3'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 4'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" carousel "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"onPrev"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      carousel`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token operator"},"?."),n("prev"),t("span",{class:"token operator"},"?."),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"onNext"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      carousel`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token operator"},"?."),n("next"),t("span",{class:"token operator"},"?."),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"onGoFirst"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      carousel`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token operator"},"?."),n("goto"),t("span",{class:"token operator"},"?."),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      items`),t("span",{class:"token punctuation"},","),n(`
      carousel`),t("span",{class:"token punctuation"},","),n(`
      onPrev`),t("span",{class:"token punctuation"},","),n(`
      onNext`),t("span",{class:"token punctuation"},","),n(`
      onGoFirst
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".carousel-demo-operate"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"margin-top"),t("span",{class:"token punctuation"},":"),n(" 10px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" flex"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"align-items"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token selector"},".carousel-demo-operate .devui-btn-host"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),n(" 20px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),Y=P('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><h4 id="parameter" tabindex="-1">parameter <a class="header-anchor" href="#parameter" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:center;">Description</th><th style="text-align:left;">Jump to Demo</th></tr></thead><tbody><tr><td style="text-align:center;">arrowTrigger</td><td style="text-align:center;"><code>&#39;hover&#39;|&#39;never&#39;|&#39;always&#39;</code></td><td style="text-align:center;">&#39;hover&#39;</td><td style="text-align:center;">Optional. Specifying the display mode of the switching arrow</td><td style="text-align:left;"><a href="#indicator-toggle-arrow">Indicator &amp; Toggle Arrow</a></td></tr><tr><td style="text-align:center;">autoplay</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Optional. Indicating whether to enable automatic NVOD.</td><td style="text-align:left;"><a href="#automatic-nvod">Automatic NVOD</a></td></tr><tr><td style="text-align:center;">autoplaySpeed</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">3000</td><td style="text-align:center;">Optional. Automatic NVOD speed, in ms. This parameter is used together with `autoplay&#39;.</td><td style="text-align:left;"><a href="#automatic-nvod">Automatic NVOD</a></td></tr><tr><td style="text-align:center;">height</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;100%&#39;</td><td style="text-align:center;">Optional. NVOD container height</td><td style="text-align:left;"><a href="#basic-usage">Basic usage</a></td></tr><tr><td style="text-align:center;">showDots</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">Optional. Indicating whether to display the panel indicator</td><td style="text-align:left;"><a href="#automatic-nvod">Automatic NVOD</a></td></tr><tr><td style="text-align:center;">dotPosition</td><td style="text-align:center;"><code>&#39;top&#39;|&#39;bottom&#39;</code></td><td style="text-align:center;">&#39;bottom&#39;</td><td style="text-align:center;">Optional. Indicator position on the panel</td><td style="text-align:left;"><a href="#indicator-toggle-arrow">Indicator &amp; Toggle Arrow</a></td></tr><tr><td style="text-align:center;">dotTrigger</td><td style="text-align:center;"><code>click&#39;|&#39;hover&#39;</code></td><td style="text-align:center;">&#39;click&#39;</td><td style="text-align:center;">Optional. The indicator triggers the NVOD mode</td><td style="text-align:left;"><a href="#indicator-toggle-arrow">Indicator &amp; Toggle Arrow</a></td></tr><tr><td style="text-align:center;">activeIndex</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">0</td><td style="text-align:center;">Optional. Initializes the activation card index, starting from 0. <code>[(activeIndex)]</code> bidirectional binding is supported.</td><td style="text-align:left;"><a href="#basic-usage">Basic usage</a></td></tr></tbody></table><h4 id="event" tabindex="-1">event <a class="header-anchor" href="#event" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:center;">Event</th><th style="text-align:center;">Type</th><th style="text-align:center;">Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td style="text-align:center;">activeIndexChange</td><td style="text-align:center;"><code>EventEmitter&lt;number&gt;</code></td><td style="text-align:center;">Returns the index of the current card when the card is switched. The index starts from 0.</td><td><a href="#basic-usage">Basic usage</a></td></tr></tbody></table><h4 id="method" tabindex="-1">method <a class="header-anchor" href="#method" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:center;">Method</th><th style="text-align:left;">Description</th><th style="text-align:left;">Jump to Demo</th></tr></thead><tbody><tr><td style="text-align:center;">prev()</td><td style="text-align:left;">Switch to the previous card</td><td style="text-align:left;"><a href="#custom-operations">Custom Operations</a></td></tr><tr><td style="text-align:center;">next()</td><td style="text-align:left;">Switch to the next card</td><td style="text-align:left;"><a href="#custom-operations">Custom Operations</a></td></tr><tr><td style="text-align:center;">goTo(index)</td><td style="text-align:left;">Switch to the card with a specified index. The index starts from 0.</td><td style="text-align:left;"><a href="#custom-operations">Custom Operations</a></td></tr></tbody></table>',7);function Z(c,s,a,l,m,i){const p=B("render-demo-0"),e=B("demo"),d=B("render-demo-1"),u=B("render-demo-2"),g=B("render-demo-3");return j(),U("div",null,[J,x(e,{sourceCode:`<template>
  <d-carousel height="200px">
    <d-carousel-item v-for="item in items" :key="item">{{ item }}</d-carousel-item>
  </d-carousel>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const items = ref<string[]>(['page 1', 'page 2', 'page 3', 'page 4'])
    return {
      items
    }
  }
})
<\/script>
<style>
.d-carousel-item {
  text-align: center;
  line-height: 200px;
  background: var(--devui-global-bg, #f3f6f8);
}
</style>
`},{highlight:v(()=>[W]),default:v(()=>[x(p)]),_:1}),z,M,x(e,{sourceCode:`<template>
  <d-carousel height="200px" arrowTrigger="always" dotTrigger="hover">
    <d-carousel-item v-for="item in items" :key="item">{{ item }}</d-carousel-item>
  </d-carousel>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const items = ref<string[]>(['page 1', 'page 2', 'page 3', 'page 4'])
    return {
      items
    }
  }
})
<\/script>
<style>
.d-carousel-item {
  text-align: center;
  line-height: 200px;
  background: var(--devui-global-bg, #f3f6f8);
}
</style>
`},{highlight:v(()=>[R]),default:v(()=>[x(d)]),_:1}),H,x(e,{sourceCode:`<template>
  <d-carousel height="200px" autoplay :autoplaySpeed="3000">
    <d-carousel-item v-for="item in items" :key="item">{{ item }}</d-carousel-item>
  </d-carousel>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const items = ref<string[]>(['page 1', 'page 2', 'page 3', 'page 4'])
    return {
      items
    }
  }
})
<\/script>
<style>
.d-carousel-item {
  text-align: center;
  line-height: 200px;
  background: var(--devui-global-bg, #f3f6f8);
}
</style>
`},{highlight:v(()=>[K]),default:v(()=>[x(u)]),_:1}),Q,x(e,{sourceCode:`<template>
  <d-carousel ref="carousel" height="200px" arrowTrigger="never">
    <d-carousel-item v-for="item in items" :key="item">{{ item }}</d-carousel-item>
  </d-carousel>
  <div class="carousel-demo-operate">
    <d-button bsStyle="common" @click="onPrev">Prev</d-button>
    <d-button bsStyle="primary" @click="onNext">Next</d-button>
    <d-button bsStyle="common" @click="onGoFirst">First</d-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const items = ref<string[]>(['page 1', 'page 2', 'page 3', 'page 4'])
    const carousel = ref()
    const onPrev = () => {
      carousel.value?.prev?.()
    }
    const onNext = () => {
      carousel.value?.next?.()
    }
    const onGoFirst = () => {
      carousel.value?.goto?.(0)
    }
    return {
      items,
      carousel,
      onPrev,
      onNext,
      onGoFirst
    }
  }
})
<\/script>
<style>
.carousel-demo-operate {
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.carousel-demo-operate .devui-btn-host {
  margin-right: 20px;
}
</style>
`},{highlight:v(()=>[X]),default:v(()=>[x(g)]),_:1}),Y])}var st=L($,[["render",Z]]);export{at as __pageData,st as default};
