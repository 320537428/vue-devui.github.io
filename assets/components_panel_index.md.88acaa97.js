var z=Object.defineProperty;var q=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var S=(e,o,t)=>o in e?z(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,T=(e,o)=>{for(var t in o||(o={}))j.call(o,t)&&S(e,t,o[t]);if(q)for(var t of q(o))U.call(o,t)&&S(e,t,o[t]);return e};import{_ as G,V as E,r as x,o as H,c as I,a as h,w as d,b as $,d as n,e as a}from"./app.18affbf5.js";const J={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:e,resolveComponent:o,withCtx:t,createVNode:s,openBlock:l,createElementBlock:p}=E,r=e("Click me to expand"),u=e("This is body");function g(f,y){const m=o("d-panel-header"),b=o("d-panel-body"),i=o("d-panel");return l(),p("div",null,[s(i,null,{default:t(()=>[s(m,null,{default:t(()=>[r]),_:1}),s(b,null,{default:t(()=>[u]),_:1})]),_:1})])}return T({render:g},{})}(),"render-demo-1":function(){const{createTextVNode:e,resolveComponent:o,withCtx:t,createVNode:s,openBlock:l,createElementBlock:p}=E,r=e("Panel header"),u=e("This is body");function g(f,y){const m=o("d-panel-header"),b=o("d-panel-body"),i=o("d-panel");return l(),p("div",null,[s(i,{"is-collapsed":!0},{default:t(()=>[s(m,null,{default:t(()=>[r]),_:1}),s(b,null,{default:t(()=>[u]),_:1})]),_:1})])}return T({render:g},{})}(),"render-demo-2":function(){const{createTextVNode:e,resolveComponent:o,withCtx:t,createVNode:s,createElementVNode:l,openBlock:p,createElementBlock:r}=E,u=e("Panel with info Type"),g=e("This is body"),_=l("br",null,null,-1),f=e("Panel with primary Type"),y=e("This is body"),m=l("br",null,null,-1),b=e("Panel with success Type"),i=e("This is body"),w=l("br",null,null,-1),c=e("Panel with warning Type"),F=e("This is body"),k=l("br",null,null,-1),v=e("Panel with danger Type"),B=e("This is body");function C(N,on){const P=o("d-panel-header"),A=o("d-panel-body"),D=o("d-panel");return p(),r("div",null,[s(D,{"is-collapsed":!0},{default:t(()=>[s(P,null,{default:t(()=>[u]),_:1}),s(A,null,{default:t(()=>[g]),_:1})]),_:1}),_,s(D,{type:"primary","is-collapsed":!0},{default:t(()=>[s(P,null,{default:t(()=>[f]),_:1}),s(A,null,{default:t(()=>[y]),_:1})]),_:1}),m,s(D,{type:"success","is-collapsed":!0},{default:t(()=>[s(P,null,{default:t(()=>[b]),_:1}),s(A,null,{default:t(()=>[i]),_:1})]),_:1}),w,s(D,{type:"warning","is-collapsed":!0},{default:t(()=>[s(P,null,{default:t(()=>[c]),_:1}),s(A,null,{default:t(()=>[F]),_:1})]),_:1}),k,s(D,{type:"danger","is-collapsed":!0},{default:t(()=>[s(P,null,{default:t(()=>[v]),_:1}),s(A,null,{default:t(()=>[B]),_:1})]),_:1})])}return T({render:C},{})}(),"render-demo-3":function(){const{normalizeClass:e,createElementVNode:o,createTextVNode:t,resolveComponent:s,withCtx:l,createVNode:p,openBlock:r,createElementBlock:u}=E,g=t(" Panel has no left padding "),_=t("This is body"),f=o("br",null,null,-1),y=t("Panel with header and footer"),m=t("This is body"),b=t("This is footer");function i(k,v){const B=s("d-panel-header"),C=s("d-panel-body"),V=s("d-panel"),N=s("d-panel-footer");return r(),u("div",null,[p(V,{onToggle:k.toggle,"is-collapsed":!0,"has-left-padding":!1},{default:l(()=>[p(B,null,{default:l(()=>[g,o("em",{class:e(`icon icon-chevron-${k.toggleState?"down":"up"}`)},null,2)]),_:1}),p(C,null,{default:l(()=>[_]),_:1})]),_:1},8,["onToggle"]),f,p(V,{"is-collapsed":!0},{default:l(()=>[p(B,null,{default:l(()=>[y]),_:1}),p(C,null,{default:l(()=>[m]),_:1}),p(N,null,{default:l(()=>[b]),_:1})]),_:1})])}const{defineComponent:w,ref:c}=E,F=w({setup(){const k=c(!0);return{toggle:B=>{k.value=B},toggleState:k}}});return T({render:i},F)}(),"render-demo-4":function(){const{normalizeClass:e,createElementVNode:o,createTextVNode:t,resolveComponent:s,withCtx:l,createVNode:p,toDisplayString:r,openBlock:u,createElementBlock:g}=E,_=t(" Panel header "),f=t("This is body"),y=o("br",null,null,-1);function m(c,F){const k=s("d-panel-header"),v=s("d-panel-body"),B=s("d-panel"),C=s("d-button");return u(),g("div",null,[p(B,{type:"primary","is-collapsed":c.isCollapsed,onToggle:c.handleToggle,"before-toggle":c.beforeToggle},{default:l(()=>[p(k,null,{default:l(()=>[_,o("i",{class:e(`icon-chevron-${c.toggle?"down":"up"}`)},null,2)]),_:1}),p(v,null,{default:l(()=>[f]),_:1})]),_:1},8,["is-collapsed","onToggle","before-toggle"]),y,p(C,{onClick:F[0]||(F[0]=V=>c.panelToggle=!c.panelToggle)},{default:l(()=>[t(r(c.panelToggle?"\u963B\u6B62\u6298\u53E0":"\u5141\u8BB8\u6298\u53E0"),1)]),_:1})])}const{defineComponent:b,ref:i}=E,w=b({setup(){let c=i(!0),F=i(!0),k=i(!0);return i(!0),{toggle:k,panelToggle:F,beforeToggle:()=>F.value,isCollapsed:c,handleToggle:C=>{k.value=C}}}});return T({render:m},w)}()}},un='{"title":"Panel \u9762\u677F","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u9ED8\u8BA4\u72B6\u6001","slug":"\u9ED8\u8BA4\u72B6\u6001"},{"level":3,"title":"\u9762\u677F\u7C7B\u578B","slug":"\u9762\u677F\u7C7B\u578B"},{"level":3,"title":"\u9762\u677F\u6837\u5F0F","slug":"\u9762\u677F\u6837\u5F0F"},{"level":3,"title":"\u963B\u6B62\u6298\u53E0","slug":"\u963B\u6B62\u6298\u53E0"},{"level":3,"title":"Panel \u53C2\u6570","slug":"panel-\u53C2\u6570"},{"level":3,"title":"Panel \u4E8B\u4EF6","slug":"panel-\u4E8B\u4EF6"},{"level":3,"title":"Panel \u7C7B\u578B\u5B9A\u4E49","slug":"panel-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/panel/index.md","lastUpdated":1653661678222}',K=$('<h1 id="panel-\u9762\u677F" tabindex="-1">Panel \u9762\u677F <a class="header-anchor" href="#panel-\u9762\u677F" aria-hidden="true">#</a></h1><p>\u5185\u5BB9\u9762\u677F\uFF0C\u7528\u4E8E\u5185\u5BB9\u5206\u7EC4\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u9875\u9762\u5185\u5BB9\u9700\u8981\u8FDB\u884C\u5206\u7EC4\u663E\u793A\u65F6\u4F7F\u7528\uFF0C\u4E00\u822C\u5305\u542B\u5934\u90E8\u3001\u5185\u5BB9\u533A\u57DF\u3001\u5E95\u90E8\u4E09\u4E2A\u90E8\u5206\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),L=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Click me to expand"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),M=n("h3",{id:"\u9ED8\u8BA4\u72B6\u6001",tabindex:"-1"},[a("\u9ED8\u8BA4\u72B6\u6001 "),n("a",{class:"header-anchor",href:"#\u9ED8\u8BA4\u72B6\u6001","aria-hidden":"true"},"#")],-1),O=n("div",null,[a("\u901A\u8FC7\u8BBE\u7F6E"),n("code",null,"is-collapsed"),a("\u4E3A"),n("code",null,"true"),a("\u53EF\u4EE5\u9ED8\u8BA4\u5C55\u5F00\u9762\u677F\u3002")],-1),Q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel header"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),R=n("h3",{id:"\u9762\u677F\u7C7B\u578B",tabindex:"-1"},[a("\u9762\u677F\u7C7B\u578B "),n("a",{class:"header-anchor",href:"#\u9762\u677F\u7C7B\u578B","aria-hidden":"true"},"#")],-1),W=n("div",null,[a("\u9762\u677F\u7C7B\u578B\u67095\u79CD\uFF1A"),n("code",null,"primary"),a(" / "),n("code",null,"success"),a(" / "),n("code",null,"danger"),a(" / "),n("code",null,"warning"),a(" / "),n("code",null,"info"),a("\uFF0C\u9ED8\u8BA4\u4E3A"),n("code",null,"info"),a("\u3002")],-1),X=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with info Type"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with primary Type"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("success"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with success Type"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("warning"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with warning Type"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("danger"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with danger Type"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Y=n("h3",{id:"\u9762\u677F\u6837\u5F0F",tabindex:"-1"},[a("\u9762\u677F\u6837\u5F0F "),n("a",{class:"header-anchor",href:"#\u9762\u677F\u6837\u5F0F","aria-hidden":"true"},"#")],-1),Z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},"@toggle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("toggle"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":has-left-padding"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
      Panel has no left padding
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("em")]),a(),n("span",{class:"token attr-name"},":class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("`icon icon-chevron-${toggleState ? "),n("span",{class:"token punctuation"},"'"),a("down"),n("span",{class:"token punctuation"},"'"),a(" : "),n("span",{class:"token punctuation"},"'"),a("up"),n("span",{class:"token punctuation"},"'"),a("}`"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("em")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with header and footer"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-footer")]),n("span",{class:"token punctuation"},">")]),a("This is footer"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-footer")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" toggleState "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"toggle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      toggleState`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" value"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      toggle`),n("span",{class:"token punctuation"},","),a(`
      toggleState
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),nn=n("h3",{id:"\u963B\u6B62\u6298\u53E0",tabindex:"-1"},[a("\u963B\u6B62\u6298\u53E0 "),n("a",{class:"header-anchor",href:"#\u963B\u6B62\u6298\u53E0","aria-hidden":"true"},"#")],-1),an=n("div",null,[a("\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528"),n("code",null,"before-toggle"),a("\u6765\u963B\u6B62\u9762\u677F\u7684\u6536\u8D77\u3002\u6839\u636E\u6761\u4EF6\u5224\u65AD\uFF0C\u5F53"),n("code",null,"Panel"),a("\u5C55\u5F00\u65F6\uFF0C\u70B9\u51FB\u963B\u6B62\u6298\u53E0\u6309\u94AE\uFF0C\u5C06\u65E0\u6CD5\u6298\u53E0"),n("code",null,"Panel"),a("\uFF0C\u5F53"),n("code",null,"Panel"),a("\u5C55\u5F00\u65F6\u4E0D\u5F71\u54CD\u64CD\u4F5C\u3002")],-1),tn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(`
    `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("isCollapsed"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@toggle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleToggle"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":before-toggle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeToggle"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
      Panel header
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("i")]),a(),n("span",{class:"token attr-name"},":class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("`icon-chevron-${toggle ? "),n("span",{class:"token punctuation"},"'"),a("down"),n("span",{class:"token punctuation"},"'"),a(" : "),n("span",{class:"token punctuation"},"'"),a("up"),n("span",{class:"token punctuation"},"'"),a("}`"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("i")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("panelToggle = !panelToggle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    {{ panelToggle ? '\u963B\u6B62\u6298\u53E0' : '\u5141\u8BB8\u6298\u53E0' }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" isCollapsed "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" panelToggle "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" toggle "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" showAnimation "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleToggle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      toggle`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" value"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"beforeToggle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" panelToggle"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      toggle`),n("span",{class:"token punctuation"},","),a(`
      panelToggle`),n("span",{class:"token punctuation"},","),a(`
      beforeToggle`),n("span",{class:"token punctuation"},","),a(`
      isCollapsed`),n("span",{class:"token punctuation"},","),a(`
      handleToggle`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),sn=$(`<h3 id="panel-\u53C2\u6570" tabindex="-1">Panel \u53C2\u6570 <a class="header-anchor" href="#panel-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td style="text-align:left;"><a href="#paneltype">PanelType</a></td><td style="text-align:left;">&#39;info&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9762\u677F\u7684\u7C7B\u578B</td></tr><tr><td style="text-align:left;">is-collapsed</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00</td></tr><tr><td style="text-align:left;">has-left-padding</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u5DE6\u4FA7\u586B\u5145</td></tr><tr><td style="text-align:left;">show-animation</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u52A8\u753B</td></tr><tr><td style="text-align:left;">before-toggle</td><td style="text-align:left;"><code>(value: boolean, done?: () =&gt; void) =&gt; void</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9762\u677F\u6298\u53E0\u72B6\u6001\u6539\u53D8\u524D\u7684\u56DE\u8C03\u51FD\u6570\u3002<br>\u53C2\u6570<code>value</code>\u4EE3\u8868\u5F53\u524D\u72B6\u6001\uFF0C<br>\u53C2\u6570<code>done()</code>\u53EF\u4EE5\u63A7\u5236Panel\u5F00\u5408</td></tr></tbody></table><h3 id="panel-\u4E8B\u4EF6" tabindex="-1">Panel \u4E8B\u4EF6 <a class="header-anchor" href="#panel-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">toggle</td><td style="text-align:left;"><code>(value: boolean) =&gt; void</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5207\u6362\u9762\u677F\u7684\u4E8B\u4EF6</td></tr></tbody></table><h3 id="panel-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Panel \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#panel-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="paneltype" tabindex="-1">PanelType <a class="header-anchor" href="#paneltype" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">PanelType</span> <span class="token operator">=</span> <span class="token string">&#39;primary&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;success&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;danger&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;warning&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,7);function en(e,o,t,s,l,p){const r=x("render-demo-0"),u=x("demo"),g=x("render-demo-1"),_=x("render-demo-2"),f=x("render-demo-3"),y=x("render-demo-4");return H(),I("div",null,[K,h(u,{sourceCode:`<template>
  <d-panel>
    <d-panel-header>Click me to expand</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
</template>
`},{highlight:d(()=>[L]),default:d(()=>[h(r)]),_:1}),M,h(u,{sourceCode:`<template>
  <d-panel :is-collapsed="true">
    <d-panel-header>Panel header</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
</template>
`},{description:d(()=>[O]),highlight:d(()=>[Q]),default:d(()=>[h(g)]),_:1}),R,h(u,{sourceCode:`<template>
  <d-panel :is-collapsed="true">
    <d-panel-header>Panel with info Type</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br>
  <d-panel type="primary" :is-collapsed="true">
    <d-panel-header>Panel with primary Type</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br>
  <d-panel type="success" :is-collapsed="true">
    <d-panel-header>Panel with success Type</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br>
  <d-panel type="warning" :is-collapsed="true">
    <d-panel-header>Panel with warning Type</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br>
  <d-panel type="danger" :is-collapsed="true">
    <d-panel-header>Panel with danger Type</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
</template>
`},{description:d(()=>[W]),highlight:d(()=>[X]),default:d(()=>[h(_)]),_:1}),Y,h(u,{sourceCode:`<template>
  <d-panel @toggle="toggle" :is-collapsed="true" :has-left-padding="false">
    <d-panel-header>
      Panel has no left padding
      <em :class="\`icon icon-chevron-\${toggleState ? 'down' : 'up'}\`"></em>
    </d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br>
  <d-panel :is-collapsed="true">
    <d-panel-header>Panel with header and footer</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
    <d-panel-footer>This is footer</d-panel-footer>
  </d-panel>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const toggleState = ref(true);

    const toggle = (value) => {
      toggleState.value = value;
    };

    return {
      toggle,
      toggleState
    };
  }
});
<\/script>
`},{highlight:d(()=>[Z]),default:d(()=>[h(f)]),_:1}),nn,h(u,{sourceCode:`<template>
  <d-panel
    type="primary"
    :is-collapsed="isCollapsed"
    @toggle="handleToggle"
    :before-toggle="beforeToggle"
  >
    <d-panel-header>
      Panel header
      <i :class="\`icon-chevron-\${toggle ? 'down' : 'up'}\`"></i>
    </d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br>
  <d-button @click="panelToggle = !panelToggle">
    {{ panelToggle ? '\u963B\u6B62\u6298\u53E0' : '\u5141\u8BB8\u6298\u53E0' }}
  </d-button>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    let isCollapsed = ref(true);
    let panelToggle = ref(true);
    let toggle = ref(true);
    let showAnimation = ref(true);

    const handleToggle = (value) => {
      toggle.value = value;
    };
    
    const beforeToggle = () => {
      return panelToggle.value;
    };

    return {
      toggle,
      panelToggle,
      beforeToggle,
      isCollapsed,
      handleToggle,
    };
  }
});
<\/script>
`},{description:d(()=>[an]),highlight:d(()=>[tn]),default:d(()=>[h(y)]),_:1}),sn])}var cn=G(J,[["render",en]]);export{un as __pageData,cn as default};
