var U=Object.defineProperty;var j=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var F=(e,o,t)=>o in e?U(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,B=(e,o)=>{for(var t in o||(o={}))A.call(o,t)&&F(e,t,o[t]);if(j)for(var t of j(o))Q.call(o,t)&&F(e,t,o[t]);return e};import{_ as M,V,r as E,o as Y,c as G,a as w,w as T,b as z,d as n,e as a}from"./app.d8dfdb43.js";const H={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:e,resolveComponent:o,withCtx:t,createVNode:s,createElementVNode:p,normalizeClass:k,openBlock:d,createElementBlock:u}=V,g=e("Panel with foldable"),h=e("This is body"),f=p("br",null,null,-1),_=p("br",null,null,-1),v=e(" Panel has no left padding "),x=e("This is body"),N=p("br",null,null,-1),C=p("br",null,null,-1),l=e("Panel with header and footer"),b=e("This is body"),c=e("This is footer");function i(y,L){const q=o("d-panel-header"),S=o("d-panel-body"),O=o("d-panel"),I=o("d-panel-footer");return d(),u("div",null,[s(O,{type:"primary","is-collapsed":!0,"show-animation":!0},{default:t(()=>[s(q,null,{default:t(()=>[g]),_:1}),s(S,null,{default:t(()=>[h]),_:1})]),_:1}),f,_,s(O,{toggle:y.toggle,"is-collapsed":!0,"show-animation":!0,hasLeftPadding:!1},{default:t(()=>[s(q,null,{default:t(()=>[v,p("em",{class:k(`icon icon-chevron-${y.toggleState?"down":"up"}`)},null,2)]),_:1}),s(S,null,{default:t(()=>[x]),_:1})]),_:1},8,["toggle"]),N,C,s(O,{"is-collapsed":!0,beforeToggle:y.beforeToggle},{default:t(()=>[s(q,null,{default:t(()=>[l]),_:1}),s(S,null,{default:t(()=>[b]),_:1}),s(I,null,{default:t(()=>[c]),_:1})]),_:1},8,["beforeToggle"])])}const{defineComponent:r,ref:m}=V,P=r({setup(){const y=m(!0);return{toggle:S=>y.value=S,toggleState:y,beforeToggle:()=>!1}}});return B({render:i},P)}(),"render-demo-1":function(){const{createTextVNode:e,resolveComponent:o,withCtx:t,createVNode:s,createElementVNode:p,openBlock:k,createElementBlock:d}=V,u=e("Panel with info Type"),g=e("This is body"),h=p("br",null,null,-1),f=p("br",null,null,-1),_=e("Panel with Primary Type"),v=e("This is body"),x=p("br",null,null,-1),N=p("br",null,null,-1),C=e("Panel with Success Type"),l=e("This is body"),b=p("br",null,null,-1),c=p("br",null,null,-1),i=e("Panel with Warning Type"),r=e("This is body"),m=p("br",null,null,-1),P=p("br",null,null,-1),y=e("Panel with danger Type"),L=e("This is body");function q(O,I){const $=o("d-panel-header"),D=o("d-panel-body"),W=o("d-panel");return k(),d("div",null,[s(W,{type:"info","is-collapsed":!0,"show-animation":!0},{default:t(()=>[s($,null,{default:t(()=>[u]),_:1}),s(D,null,{default:t(()=>[g]),_:1})]),_:1}),h,f,s(W,{type:"primary","is-collapsed":!0,"show-animation":!0},{default:t(()=>[s($,null,{default:t(()=>[_]),_:1}),s(D,null,{default:t(()=>[v]),_:1})]),_:1}),x,N,s(W,{type:"success","is-collapsed":!0,"show-animation":!0},{default:t(()=>[s($,null,{default:t(()=>[C]),_:1}),s(D,null,{default:t(()=>[l]),_:1})]),_:1}),b,c,s(W,{type:"warning","is-collapsed":!0,"show-animation":!0},{default:t(()=>[s($,null,{default:t(()=>[i]),_:1}),s(D,null,{default:t(()=>[r]),_:1})]),_:1}),m,P,s(W,{type:"danger","is-collapsed":!0,"show-animation":!0},{default:t(()=>[s($,null,{default:t(()=>[y]),_:1}),s(D,null,{default:t(()=>[L]),_:1})]),_:1})])}return B({render:q},{})}(),"render-demo-2":function(){const{normalizeClass:e,createElementVNode:o,createTextVNode:t,resolveComponent:s,withCtx:p,createVNode:k,toDisplayString:d,openBlock:u,createElementBlock:g}=V,h=t(" Panel with foldable "),f=t("This is body"),_=o("br",null,null,-1),v=o("br",null,null,-1),x=o("br",null,null,-1);function N(c,i){const r=s("d-panel-header"),m=s("d-panel-body"),P=s("d-panel"),y=s("d-button");return u(),g("div",null,[k(P,{type:"primary","has-left-padding":c.padding,onToggle:c.handleToggle,"before-toggle":c.beforeToggle,"show-animation":!0},{default:p(()=>[k(r,null,{default:p(()=>[h,o("i",{class:e(`icon-arrow-${c.toggle?"down":"up"}`)},null,2)]),_:1}),k(m,null,{default:p(()=>[f]),_:1})]),_:1},8,["has-left-padding","onToggle","before-toggle"]),_,v,o("span",null,"\u5F53\u524D\u72B6\u6001: "+d(c.nowState),1),x,k(y,{onClick:i[0]||(i[0]=L=>c.panelToggle=!c.panelToggle)},{default:p(()=>[t(d(c.panelToggle?"prevent collapse":"allow collapse"),1)]),_:1})])}const{defineComponent:C,ref:l}=V,b=C({setup(){let c=l(!0),i=l(!0),r,m=l(!1),P=l("show");return{state:r,toggle:i,panelToggle:c,beforeToggle:q=>c.value,handleToggle:q=>{i.value=q,P.value=i.value===!0?"show":"hidden"},padding:m,nowState:P}}});return B({render:N},b)}(),"render-demo-3":function(){const{createTextVNode:e,resolveComponent:o,withCtx:t,createVNode:s,createElementVNode:p,openBlock:k,createElementBlock:d}=V,u=e(" after one second will open "),g=e("This is body"),h=p("br",null,null,-1),f=p("br",null,null,-1),_=e(" Try ");function v(l,b){const c=o("d-panel-header"),i=o("d-panel-body"),r=o("d-panel"),m=o("d-button");return k(),d("div",null,[s(r,{type:"primary","before-toggle":l.beforeToggle,"is-collapsed":!1},{default:t(()=>[s(c,null,{default:t(()=>[u]),_:1}),s(i,null,{default:t(()=>[g]),_:1})]),_:1},8,["before-toggle"]),h,f,s(m,{onClick:l.handleClick},{default:t(()=>[_]),_:1},8,["onClick"])])}const{defineComponent:x,ref:N}=V,C=x({setup(){let l=!1;return{beforeToggle:(i,r)=>{l||(setTimeout(()=>{r()},1e3),l=!0)},handleClick:()=>{window.location.reload()}}}});return B({render:v},C)}(),"render-demo-4":function(){const{createTextVNode:e,resolveComponent:o,withCtx:t,createVNode:s,createElementVNode:p,toDisplayString:k,openBlock:d,createElementBlock:u}=V,g=e("Panel with foldable"),h=e("This is body"),f=p("br",null,null,-1),_=p("br",null,null,-1);function v(l,b){const c=o("d-panel-header"),i=o("d-panel-body"),r=o("d-panel"),m=o("d-button");return d(),u("div",null,[s(r,{type:l.type,hasLeftPadding:l.padding,"is-collapsed":""},{default:t(()=>[s(c,null,{default:t(()=>[g]),_:1}),s(i,null,{default:t(()=>[h]),_:1})]),_:1},8,["type","hasLeftPadding"]),f,_,s(m,{onClick:b[0]||(b[0]=P=>l.padding=!l.padding)},{default:t(()=>[e(k(l.padding?"hasLeftPadding":"notLeftPadding"),1)]),_:1})])}const{defineComponent:x,ref:N}=V,C=x({setup(){return{padding:N(!1)}}});return B({render:v},C)}()}},hn='{"title":"Panel","description":"","frontmatter":{},"headers":[{"level":3,"title":"When to use","slug":"when-to-use"},{"level":3,"title":"Quick start","slug":"quick-start"},{"level":3,"title":"Type","slug":"type"},{"level":3,"title":"Prevent Collapse","slug":"prevent-collapse"},{"level":3,"title":"Properties Dynamic Change","slug":"properties-dynamic-change"},{"level":3,"title":"API","slug":"api"},{"level":3,"title":"declare Interface & type","slug":"declare-interface-type"}],"relativePath":"en-US/components/panel/index.md","lastUpdated":1662171945354}',J=z('<h1 id="panel" tabindex="-1">Panel <a class="header-anchor" href="#panel" aria-hidden="true">#</a></h1><p>Panels are usually used for grouping</p><h3 id="when-to-use" tabindex="-1">When to use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>it is used when the page content needs to be grouped for display, and generally contains three parts: the head, the content area, and the bottom.</p><h3 id="quick-start" tabindex="-1">Quick start <a class="header-anchor" href="#quick-start" aria-hidden="true">#</a></h3>',5),K=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":show-animation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with foldable"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},":toggle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("toggle"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":show-animation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":hasLeftPadding"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
      Panel has no left padding
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("em")]),a(),n("span",{class:"token attr-name"},":class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("`icon icon-chevron-${toggleState ? "),n("span",{class:"token punctuation"},"'"),a("down"),n("span",{class:"token punctuation"},"'"),a(" : "),n("span",{class:"token punctuation"},"'"),a("up"),n("span",{class:"token punctuation"},"'"),a("}`"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("em")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":beforeToggle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeToggle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
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
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"toggle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),a("toggleState"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"beforeToggle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      toggle`),n("span",{class:"token punctuation"},","),a(`
      toggleState`),n("span",{class:"token punctuation"},","),a(`
      beforeToggle
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),R=n("h3",{id:"type",tabindex:"-1"},[a("Type "),n("a",{class:"header-anchor",href:"#type","aria-hidden":"true"},"#")],-1),X=n("p",null,"Panels have six types: default, primary, success, danger, warning, info.",-1),Z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("info"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":show-animation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with info Type"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":show-animation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with Primary Type"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("success"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":show-animation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with Success Type"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("warning"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":show-animation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with Warning Type"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("danger"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":show-animation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with danger Type"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),nn=n("h3",{id:"prevent-collapse",tabindex:"-1"},[a("Prevent Collapse "),n("a",{class:"header-anchor",href:"#prevent-collapse","aria-hidden":"true"},"#")],-1),an=n("p",null,[a("if you dont want panel to fold. You can use "),n("code",null,"beforeToggle"),a(" properties")],-1),tn=n("p",null,"If beforeToggle return False. The Panel will can not to fold. But Unaffected when unfolded",-1),sn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(`
    `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":has-left-padding"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("padding"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@toggle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleToggle"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":before-toggle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeToggle"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":show-animation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
      Panel with foldable
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("i")]),a(),n("span",{class:"token attr-name"},":class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("`icon-arrow-${toggle ? "),n("span",{class:"token punctuation"},"'"),a("down"),n("span",{class:"token punctuation"},"'"),a(" : "),n("span",{class:"token punctuation"},"'"),a("up"),n("span",{class:"token punctuation"},"'"),a("}`"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("i")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("\u5F53\u524D\u72B6\u6001: {{nowState}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("panelToggle = !panelToggle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    {{ panelToggle ? 'prevent collapse' : 'allow collapse' }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" panelToggle "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" toggle "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" state"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" padding "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" nowState "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'show'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleToggle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      toggle`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" e"),n("span",{class:"token punctuation"},";"),a(`
      nowState`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" toggle"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'show'"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hidden'"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"beforeToggle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" panelToggle"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      state`),n("span",{class:"token punctuation"},","),a(`
      toggle`),n("span",{class:"token punctuation"},","),a(`
      panelToggle`),n("span",{class:"token punctuation"},","),a(`
      beforeToggle`),n("span",{class:"token punctuation"},","),a(`
      handleToggle`),n("span",{class:"token punctuation"},","),a(`
      padding`),n("span",{class:"token punctuation"},","),a(`
      nowState
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),en=n("p",null,[a("Maybe in sometimes, we will use script to control panel collapse status. We can use "),n("code",null,"done"),a(" argument in beforeToggle to control panel collapse status")],-1),on=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(`
    `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":before-toggle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeToggle"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
      after one second will open
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    Try
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`    
    `),n("span",{class:"token keyword"},"let"),a(" opened "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(),n("span",{class:"token function-variable function"},"beforeToggle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("e"),n("span",{class:"token punctuation"},","),a(" done")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),a("opened"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
          opened `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleClick"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      window`),n("span",{class:"token punctuation"},"."),a("location"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reload"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      beforeToggle`),n("span",{class:"token punctuation"},","),a(`
      handleClick
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),pn=n("h3",{id:"properties-dynamic-change",tabindex:"-1"},[a("Properties Dynamic Change "),n("a",{class:"header-anchor",href:"#properties-dynamic-change","aria-hidden":"true"},"#")],-1),ln=n("p",null,"We take hasLeftPadding properties as an example.",-1),cn=n("p",null,"Theoretically all properties can dynamic change. We only take hasLeftPadding properties as an example.",-1),un=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},":type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("type"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":hasLeftPadding"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("padding"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"is-collapsed"),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with foldable"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("padding = !padding"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    {{ padding ? 'hasLeftPadding' : 'notLeftPadding' }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" padding "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      padding
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),kn=z(`<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">Property</th><th style="text-align:center;">Type</th><th style="text-align:center;">Descript</th><th style="text-align:center;">default Value</th></tr></thead><tbody><tr><td style="text-align:center;">type</td><td style="text-align:center;">PanelType</td><td style="text-align:center;">&#39;default&#39;</td><td style="text-align:center;">Optional. Can be set Panel Type</td></tr><tr><td style="text-align:center;">css-class</td><td style="text-align:center;">string</td><td style="text-align:center;">--</td><td style="text-align:center;">Optional. User-defined class name</td></tr><tr><td style="text-align:center;">is-collapsed</td><td style="text-align:center;">boolean</td><td style="text-align:center;">false</td><td style="text-align:center;">Optional. Optional. Whether to expand the panel</td></tr><tr><td style="text-align:center;">has-left-padding</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true</td><td style="text-align:center;">Optional. Whether to display the left padding</td></tr><tr><td style="text-align:center;">show-animation</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true</td><td style="text-align:center;">Optional. Indicating whether to display animations.</td></tr><tr><td style="text-align:center;">before-Toggle</td><td style="text-align:center;">() =&gt; (value: boolean, done?: () =&gt; void ) =&gt; any</td><td style="text-align:center;">--</td><td style="text-align:center;">Optional, Panel before collapse status. <code>value</code> mean now status. <code>done()</code> can control panel collapse status</td></tr><tr><td style="text-align:center;">@toggle</td><td style="text-align:center;">Function</td><td style="text-align:center;">--</td><td style="text-align:center;">Optional. Callback upon panel click to return the expanded status of the current panel.</td></tr></tbody></table><h3 id="declare-interface-type" tabindex="-1">declare Interface &amp; type <a class="header-anchor" href="#declare-interface-type" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token keyword">export</span> type PanelType <span class="token operator">=</span> <span class="token string">&#39;default&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;primary&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;success&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;danger&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;warning&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,4);function rn(e,o,t,s,p,k){const d=E("render-demo-0"),u=E("demo"),g=E("render-demo-1"),h=E("render-demo-2"),f=E("render-demo-3"),_=E("render-demo-4");return Y(),G("div",null,[J,w(u,{sourceCode:`<template>
  <d-panel type="primary" :is-collapsed="true" :show-animation="true">
    <d-panel-header>Panel with foldable</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br />
  <br />
  <d-panel :toggle="toggle" :is-collapsed="true" :show-animation="true" :hasLeftPadding="false">
    <d-panel-header>
      Panel has no left padding
      <em :class="\`icon icon-chevron-\${toggleState ? 'down' : 'up'}\`"></em>
    </d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br />
  <br />
  <d-panel :is-collapsed="true" :beforeToggle="beforeToggle">
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
    const toggle = (e) => (toggleState.value = e);
    const beforeToggle = () => false;
    return {
      toggle,
      toggleState,
      beforeToggle
    };
  }
});
<\/script>
`},{highlight:T(()=>[K]),default:T(()=>[w(d)]),_:1}),R,X,w(u,{sourceCode:`<template>
  <d-panel type="info" :is-collapsed="true" :show-animation="true">
    <d-panel-header>Panel with info Type</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br />
  <br />
  <d-panel type="primary" :is-collapsed="true" :show-animation="true">
    <d-panel-header>Panel with Primary Type</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br />
  <br />
  <d-panel type="success" :is-collapsed="true" :show-animation="true">
    <d-panel-header>Panel with Success Type</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br />
  <br />
  <d-panel type="warning" :is-collapsed="true" :show-animation="true">
    <d-panel-header>Panel with Warning Type</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br />
  <br />
  <d-panel type="danger" :is-collapsed="true" :show-animation="true">
    <d-panel-header>Panel with danger Type</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
</template>
`},{highlight:T(()=>[Z]),default:T(()=>[w(g)]),_:1}),nn,an,tn,w(u,{sourceCode:`<template>
  <d-panel
    type="primary"
    :has-left-padding="padding"
    @toggle="handleToggle"
    :before-toggle="beforeToggle"
    :show-animation="true"
  >
    <d-panel-header>
      Panel with foldable
      <i :class="\`icon-arrow-\${toggle ? 'down' : 'up'}\`"></i>
    </d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br />
  <br />
  <span>\u5F53\u524D\u72B6\u6001: {{nowState}}</span><br />
  <d-button @click="panelToggle = !panelToggle">
    {{ panelToggle ? 'prevent collapse' : 'allow collapse' }}
  </d-button>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    let panelToggle = ref(true);
    let toggle = ref(true);
    let state;
    let padding = ref(false);
    let nowState = ref('show');
    const handleToggle = (e) => {
      toggle.value = e;
      nowState.value = toggle.value === true ? 'show' : 'hidden';
    };
    const beforeToggle = (e) => {
      return panelToggle.value;
    };
    return {
      state,
      toggle,
      panelToggle,
      beforeToggle,
      handleToggle,
      padding,
      nowState
    };
  }
});
<\/script>
`},{highlight:T(()=>[sn]),default:T(()=>[w(h)]),_:1}),en,w(u,{sourceCode:`<template>
  <d-panel
    type="primary"
    :before-toggle="beforeToggle"
    :is-collapsed="false"
  >
    <d-panel-header>
      after one second will open
    </d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br />
  <br />
  <d-button @click="handleClick">
    Try
  </d-button>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {    
    let opened = false;
    let beforeToggle = (e, done) => {
      if (!opened){
          setTimeout(()=>{
            done();
          },1000);
          opened = true;
        }
    }
    const handleClick = () => {
      window.location.reload();
    }
    return {
      beforeToggle,
      handleClick
    };
  }
});
<\/script>

`},{highlight:T(()=>[on]),default:T(()=>[w(f)]),_:1}),pn,ln,cn,w(u,{sourceCode:`<template>
  <d-panel :type="type" :hasLeftPadding="padding" is-collapsed>
    <d-panel-header>Panel with foldable</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br />
  <br />
  <d-button @click="padding = !padding">
    {{ padding ? 'hasLeftPadding' : 'notLeftPadding' }}
  </d-button>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    let padding = ref(false);
    return {
      padding
    };
  }
});
<\/script>
`},{highlight:T(()=>[un]),default:T(()=>[w(_)]),_:1}),kn])}var fn=M(H,[["render",rn]]);export{hn as __pageData,fn as default};
