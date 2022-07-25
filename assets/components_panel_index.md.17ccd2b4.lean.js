import{V as E}from"./framework.37dedfa0.js";import{_ as q,S,b as h,a1 as i,a3 as N,V as n,x as a,N as T,R as $}from"./plugin-vue_export-helper.02048804.js";import"./framework.43f3ce53.js";const z={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:o,resolveComponent:p,withCtx:t,createVNode:s,openBlock:e,createElementBlock:l}=E,r=o("Click me to expand"),u=o("This is body");function g(f,y){const m=p("d-panel-header"),b=p("d-panel-body"),d=p("d-panel");return e(),l("div",null,[s(d,null,{default:t(()=>[s(m,null,{default:t(()=>[r]),_:1}),s(b,null,{default:t(()=>[u]),_:1})]),_:1})])}return{render:g,...{}}}(),"render-demo-1":function(){const{createTextVNode:o,resolveComponent:p,withCtx:t,createVNode:s,openBlock:e,createElementBlock:l}=E,r=o("Panel header"),u=o("This is body");function g(f,y){const m=p("d-panel-header"),b=p("d-panel-body"),d=p("d-panel");return e(),l("div",null,[s(d,{"is-collapsed":!0},{default:t(()=>[s(m,null,{default:t(()=>[r]),_:1}),s(b,null,{default:t(()=>[u]),_:1})]),_:1})])}return{render:g,...{}}}(),"render-demo-2":function(){const{createTextVNode:o,resolveComponent:p,withCtx:t,createVNode:s,createElementVNode:e,openBlock:l,createElementBlock:r}=E,u=o("Panel with info Type"),g=o("This is body"),_=e("br",null,null,-1),f=o("Panel with primary Type"),y=o("This is body"),m=e("br",null,null,-1),b=o("Panel with success Type"),d=o("This is body"),x=e("br",null,null,-1),c=o("Panel with warning Type"),F=o("This is body"),k=e("br",null,null,-1),v=o("Panel with danger Type"),B=o("This is body");function C(V,Z){const w=p("d-panel-header"),P=p("d-panel-body"),A=p("d-panel");return l(),r("div",null,[s(A,{"is-collapsed":!0},{default:t(()=>[s(w,null,{default:t(()=>[u]),_:1}),s(P,null,{default:t(()=>[g]),_:1})]),_:1}),_,s(A,{type:"primary","is-collapsed":!0},{default:t(()=>[s(w,null,{default:t(()=>[f]),_:1}),s(P,null,{default:t(()=>[y]),_:1})]),_:1}),m,s(A,{type:"success","is-collapsed":!0},{default:t(()=>[s(w,null,{default:t(()=>[b]),_:1}),s(P,null,{default:t(()=>[d]),_:1})]),_:1}),x,s(A,{type:"warning","is-collapsed":!0},{default:t(()=>[s(w,null,{default:t(()=>[c]),_:1}),s(P,null,{default:t(()=>[F]),_:1})]),_:1}),k,s(A,{type:"danger","is-collapsed":!0},{default:t(()=>[s(w,null,{default:t(()=>[v]),_:1}),s(P,null,{default:t(()=>[B]),_:1})]),_:1})])}return{render:C,...{}}}(),"render-demo-3":function(){const{normalizeClass:o,createElementVNode:p,createTextVNode:t,resolveComponent:s,withCtx:e,createVNode:l,openBlock:r,createElementBlock:u}=E,g=t(" Panel has no left padding "),_=t("This is body"),f=p("br",null,null,-1),y=t("Panel with header and footer"),m=t("This is body"),b=t("This is footer");function d(k,v){const B=s("d-panel-header"),C=s("d-panel-body"),D=s("d-panel"),V=s("d-panel-footer");return r(),u("div",null,[l(D,{onToggle:k.toggle,"is-collapsed":!0,"has-left-padding":!1},{default:e(()=>[l(B,null,{default:e(()=>[g,p("em",{class:o(`icon icon-chevron-${k.toggleState?"down":"up"}`)},null,2)]),_:1}),l(C,null,{default:e(()=>[_]),_:1})]),_:1},8,["onToggle"]),f,l(D,{"is-collapsed":!0},{default:e(()=>[l(B,null,{default:e(()=>[y]),_:1}),l(C,null,{default:e(()=>[m]),_:1}),l(V,null,{default:e(()=>[b]),_:1})]),_:1})])}const{defineComponent:x,ref:c}=E,F=x({setup(){const k=c(!0);return{toggle:B=>{k.value=B},toggleState:k}}});return{render:d,...F}}(),"render-demo-4":function(){const{normalizeClass:o,createElementVNode:p,createTextVNode:t,resolveComponent:s,withCtx:e,createVNode:l,toDisplayString:r,openBlock:u,createElementBlock:g}=E,_=t(" Panel header "),f=t("This is body"),y=p("br",null,null,-1);function m(c,F){const k=s("d-panel-header"),v=s("d-panel-body"),B=s("d-panel"),C=s("d-button");return u(),g("div",null,[l(B,{type:"primary","is-collapsed":c.isCollapsed,onToggle:c.handleToggle,"before-toggle":c.beforeToggle},{default:e(()=>[l(k,null,{default:e(()=>[_,p("i",{class:o(`icon-chevron-${c.toggle?"down":"up"}`)},null,2)]),_:1}),l(v,null,{default:e(()=>[f]),_:1})]),_:1},8,["is-collapsed","onToggle","before-toggle"]),y,l(C,{onClick:F[0]||(F[0]=D=>c.panelToggle=!c.panelToggle)},{default:e(()=>[t(r(c.panelToggle?"\u963B\u6B62\u6298\u53E0":"\u5141\u8BB8\u6298\u53E0"),1)]),_:1})])}const{defineComponent:b,ref:d}=E,x=b({setup(){let c=d(!0),F=d(!0),k=d(!0);return d(!0),{toggle:k,panelToggle:F,beforeToggle:()=>F.value,isCollapsed:c,handleToggle:C=>{k.value=C}}}});return{render:m,...x}}()}},sn='{"title":"Panel \u9762\u677F","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u9ED8\u8BA4\u72B6\u6001","slug":"\u9ED8\u8BA4\u72B6\u6001"},{"level":3,"title":"\u9762\u677F\u7C7B\u578B","slug":"\u9762\u677F\u7C7B\u578B"},{"level":3,"title":"\u9762\u677F\u6837\u5F0F","slug":"\u9762\u677F\u6837\u5F0F"},{"level":3,"title":"\u963B\u6B62\u6298\u53E0","slug":"\u963B\u6B62\u6298\u53E0"},{"level":3,"title":"Panel \u53C2\u6570","slug":"panel-\u53C2\u6570"},{"level":3,"title":"Panel \u4E8B\u4EF6","slug":"panel-\u4E8B\u4EF6"},{"level":3,"title":"Panel \u7C7B\u578B\u5B9A\u4E49","slug":"panel-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/panel/index.md","lastUpdated":1658409114786}',j=N('<h1 id="panel-\u9762\u677F" tabindex="-1">Panel \u9762\u677F <a class="header-anchor" href="#panel-\u9762\u677F" aria-hidden="true">#</a></h1><p>\u5185\u5BB9\u9762\u677F\uFF0C\u7528\u4E8E\u5185\u5BB9\u5206\u7EC4\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u9875\u9762\u5185\u5BB9\u9700\u8981\u8FDB\u884C\u5206\u7EC4\u663E\u793A\u65F6\u4F7F\u7528\uFF0C\u4E00\u822C\u5305\u542B\u5934\u90E8\u3001\u5185\u5BB9\u533A\u57DF\u3001\u5E95\u90E8\u4E09\u4E2A\u90E8\u5206\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Click me to expand"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),U=n("h3",{id:"\u9ED8\u8BA4\u72B6\u6001",tabindex:"-1"},[a("\u9ED8\u8BA4\u72B6\u6001 "),n("a",{class:"header-anchor",href:"#\u9ED8\u8BA4\u72B6\u6001","aria-hidden":"true"},"#")],-1),G=n("div",null,[a("\u901A\u8FC7\u8BBE\u7F6E"),n("code",null,"is-collapsed"),a("\u4E3A"),n("code",null,"true"),a("\u53EF\u4EE5\u9ED8\u8BA4\u5C55\u5F00\u9762\u677F\u3002")],-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel header"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),I=n("h3",{id:"\u9762\u677F\u7C7B\u578B",tabindex:"-1"},[a("\u9762\u677F\u7C7B\u578B "),n("a",{class:"header-anchor",href:"#\u9762\u677F\u7C7B\u578B","aria-hidden":"true"},"#")],-1),J=n("div",null,[a("\u9762\u677F\u7C7B\u578B\u67095\u79CD\uFF1A"),n("code",null,"primary"),a(" / "),n("code",null,"success"),a(" / "),n("code",null,"danger"),a(" / "),n("code",null,"warning"),a(" / "),n("code",null,"info"),a("\uFF0C\u9ED8\u8BA4\u4E3A"),n("code",null,"info"),a("\u3002")],-1),K=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),L=n("h3",{id:"\u9762\u677F\u6837\u5F0F",tabindex:"-1"},[a("\u9762\u677F\u6837\u5F0F "),n("a",{class:"header-anchor",href:"#\u9762\u677F\u6837\u5F0F","aria-hidden":"true"},"#")],-1),M=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),O=n("h3",{id:"\u963B\u6B62\u6298\u53E0",tabindex:"-1"},[a("\u963B\u6B62\u6298\u53E0 "),n("a",{class:"header-anchor",href:"#\u963B\u6B62\u6298\u53E0","aria-hidden":"true"},"#")],-1),Q=n("div",null,[a("\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528"),n("code",null,"before-toggle"),a("\u6765\u963B\u6B62\u9762\u677F\u7684\u6536\u8D77\u3002\u6839\u636E\u6761\u4EF6\u5224\u65AD\uFF0C\u5F53"),n("code",null,"Panel"),a("\u5C55\u5F00\u65F6\uFF0C\u70B9\u51FB\u963B\u6B62\u6298\u53E0\u6309\u94AE\uFF0C\u5C06\u65E0\u6CD5\u6298\u53E0"),n("code",null,"Panel"),a("\uFF0C\u5F53"),n("code",null,"Panel"),a("\u5C55\u5F00\u65F6\u4E0D\u5F71\u54CD\u64CD\u4F5C\u3002")],-1),W=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),X=N(`<h3 id="panel-\u53C2\u6570" tabindex="-1">Panel \u53C2\u6570 <a class="header-anchor" href="#panel-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td style="text-align:left;"><a href="#paneltype">PanelType</a></td><td style="text-align:left;">&#39;info&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9762\u677F\u7684\u7C7B\u578B</td></tr><tr><td style="text-align:left;">is-collapsed</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00</td></tr><tr><td style="text-align:left;">has-left-padding</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u5DE6\u4FA7\u586B\u5145</td></tr><tr><td style="text-align:left;">show-animation</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u52A8\u753B</td></tr><tr><td style="text-align:left;">before-toggle</td><td style="text-align:left;"><code>(value: boolean, done?: () =&gt; void) =&gt; void</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9762\u677F\u6298\u53E0\u72B6\u6001\u6539\u53D8\u524D\u7684\u56DE\u8C03\u51FD\u6570\u3002<br>\u53C2\u6570<code>value</code>\u4EE3\u8868\u5F53\u524D\u72B6\u6001\uFF0C<br>\u53C2\u6570<code>done()</code>\u53EF\u4EE5\u63A7\u5236Panel\u5F00\u5408</td></tr></tbody></table><h3 id="panel-\u4E8B\u4EF6" tabindex="-1">Panel \u4E8B\u4EF6 <a class="header-anchor" href="#panel-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">toggle</td><td style="text-align:left;"><code>(value: boolean) =&gt; void</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5207\u6362\u9762\u677F\u7684\u4E8B\u4EF6</td></tr></tbody></table><h3 id="panel-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Panel \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#panel-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="paneltype" tabindex="-1">PanelType <a class="header-anchor" href="#paneltype" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">PanelType</span> <span class="token operator">=</span> <span class="token string">&#39;primary&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;success&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;danger&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;warning&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,7);function Y(o,p,t,s,e,l){const r=T("render-demo-0"),u=T("demo"),g=T("render-demo-1"),_=T("render-demo-2"),f=T("render-demo-3"),y=T("render-demo-4");return $(),S("div",null,[j,h(u,{sourceCode:`<template>
  <d-panel>
    <d-panel-header>Click me to expand</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
</template>
`},{highlight:i(()=>[R]),default:i(()=>[h(r)]),_:1}),U,h(u,{sourceCode:`<template>
  <d-panel :is-collapsed="true">
    <d-panel-header>Panel header</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
</template>
`},{description:i(()=>[G]),highlight:i(()=>[H]),default:i(()=>[h(g)]),_:1}),I,h(u,{sourceCode:`<template>
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
`},{description:i(()=>[J]),highlight:i(()=>[K]),default:i(()=>[h(_)]),_:1}),L,h(u,{sourceCode:`<template>
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
`},{highlight:i(()=>[M]),default:i(()=>[h(f)]),_:1}),O,h(u,{sourceCode:`<template>
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
`},{description:i(()=>[Q]),highlight:i(()=>[W]),default:i(()=>[h(y)]),_:1}),X])}var en=q(z,[["render",Y]]);export{sn as __pageData,en as default};
