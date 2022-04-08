var G=Object.defineProperty;var I=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var W=(e,o,t)=>o in e?G(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,V=(e,o)=>{for(var t in o||(o={}))H.call(o,t)&&W(e,t,o[t]);if(I)for(var t of I(o))J.call(o,t)&&W(e,t,o[t]);return e};import{_ as K,V as T,r as N,c as L,a as F,w as C,b as U,d as n,e as a,o as M}from"./app.643de55c.js";const O={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:e,resolveComponent:o,withCtx:t,createVNode:s,createElementVNode:u,normalizeClass:r,openBlock:d,createElementBlock:c}=T,h=e("Panel with foldable"),_=e("This is body"),f=u("br",null,null,-1),m=u("br",null,null,-1),E=e(" Panel has no left padding "),w=e("This is body"),v=u("br",null,null,-1),B=u("br",null,null,-1),p=e("Panel with header and footer"),y=e("This is body"),l=e("This is footer");function k(g,x){const A=o("d-panel-header"),P=o("d-panel-body"),q=o("d-panel"),z=o("d-panel-footer");return d(),c("div",null,[s(q,{type:"primary","is-collapsed":!0,"show-animation":!0},{default:t(()=>[s(A,null,{default:t(()=>[h]),_:1}),s(P,null,{default:t(()=>[_]),_:1})]),_:1}),f,m,s(q,{toggle:g.toggle,"is-collapsed":!0,"show-animation":!0,"has-left-padding":!1},{default:t(()=>[s(A,null,{default:t(()=>[E,u("em",{class:r(`icon icon-chevron-${g.toggleState?"down":"up"}`)},null,2)]),_:1}),s(P,null,{default:t(()=>[w]),_:1})]),_:1},8,["toggle"]),v,B,s(q,{"is-collapsed":!0,"before-toggle":g.beforeToggle},{default:t(()=>[s(A,null,{default:t(()=>[p]),_:1}),s(P,null,{default:t(()=>[y]),_:1}),s(z,null,{default:t(()=>[l]),_:1})]),_:1},8,["before-toggle"])])}const{defineComponent:i,ref:b}=T,D=i({setup(){const g=b(!0);return{toggle:P=>g.value=P,toggleState:g,beforeToggle:()=>!1}}});return V({render:k},D)}(),"render-demo-1":function(){const{createTextVNode:e,resolveComponent:o,withCtx:t,createVNode:s,createElementVNode:u,openBlock:r,createElementBlock:d}=T,c=e("Panel with info Type"),h=e("This is body"),_=u("br",null,null,-1),f=u("br",null,null,-1),m=e("Panel with Primary Type"),E=e("This is body"),w=u("br",null,null,-1),v=u("br",null,null,-1),B=e("Panel with Success Type"),p=e("This is body"),y=u("br",null,null,-1),l=u("br",null,null,-1),k=e("Panel with Warning Type"),i=e("This is body"),b=u("br",null,null,-1),D=u("br",null,null,-1),g=e("Panel with danger Type"),x=e("This is body");function A(q,z){const S=o("d-panel-header"),$=o("d-panel-body"),j=o("d-panel");return r(),d("div",null,[s(j,{type:"info","is-collapsed":!0,"show-animation":!0},{default:t(()=>[s(S,null,{default:t(()=>[c]),_:1}),s($,null,{default:t(()=>[h]),_:1})]),_:1}),_,f,s(j,{type:"primary","is-collapsed":!0,"show-animation":!0},{default:t(()=>[s(S,null,{default:t(()=>[m]),_:1}),s($,null,{default:t(()=>[E]),_:1})]),_:1}),w,v,s(j,{type:"success","is-collapsed":!0,"show-animation":!0},{default:t(()=>[s(S,null,{default:t(()=>[B]),_:1}),s($,null,{default:t(()=>[p]),_:1})]),_:1}),y,l,s(j,{type:"warning","is-collapsed":!0,"show-animation":!0},{default:t(()=>[s(S,null,{default:t(()=>[k]),_:1}),s($,null,{default:t(()=>[i]),_:1})]),_:1}),b,D,s(j,{type:"danger","is-collapsed":!0,"show-animation":!0},{default:t(()=>[s(S,null,{default:t(()=>[g]),_:1}),s($,null,{default:t(()=>[x]),_:1})]),_:1})])}return V({render:A},{})}(),"render-demo-2":function(){const{normalizeClass:e,createElementVNode:o,createTextVNode:t,resolveComponent:s,withCtx:u,createVNode:r,toDisplayString:d,openBlock:c,createElementBlock:h}=T,_=t(" Panel with foldable "),f=t("This is body"),m=o("br",null,null,-1),E=o("br",null,null,-1),w=o("br",null,null,-1);function v(l,k){const i=s("d-panel-header"),b=s("d-panel-body"),D=s("d-panel"),g=s("d-button");return c(),h("div",null,[r(D,{type:"primary","has-left-padding":l.padding,onToggle:l.handleToggle,"before-toggle":l.beforeToggle,"show-animation":l.showAnimation},{default:u(()=>[r(i,null,{default:u(()=>[_,o("i",{class:e(`icon-arrow-${l.toggle?"down":"up"}`)},null,2)]),_:1}),r(b,null,{default:u(()=>[f]),_:1})]),_:1},8,["has-left-padding","onToggle","before-toggle","show-animation"]),m,E,o("span",null,"\u5F53\u524D\u72B6\u6001: "+d(l.nowState),1),w,r(g,{onClick:k[0]||(k[0]=x=>l.panelToggle=!l.panelToggle)},{default:u(()=>[t(d(l.panelToggle?"\u963B\u6B62\u6298\u53E0":"\u5141\u8BB8\u6298\u53E0"),1)]),_:1})])}const{defineComponent:B,ref:p}=T,y=B({setup(){let l=p(!0),k=p(!0),i=p(!0),b=p(!0),D,g=p(!1),x=p("\u6536\u8D77");return{state:D,toggle:i,panelToggle:k,beforeToggle:q=>k.value,isCollapsed:l,handleToggle:q=>{i.value=q,x.value=i.value===!0?"\u5C55\u5F00":"\u6536\u8D77"},showAnimation:b,padding:g,nowState:x}}});return V({render:v},y)}(),"render-demo-3":function(){const{createTextVNode:e,resolveComponent:o,withCtx:t,createVNode:s,createElementVNode:u,openBlock:r,createElementBlock:d}=T,c=e(" 1s\u4E4B\u540E\u81EA\u52A8\u6253\u5F00 "),h=e("This is body"),_=u("br",null,null,-1),f=u("br",null,null,-1),m=e(" \u8BD5\u4E00\u8BD5 ");function E(p,y){const l=o("d-panel-header"),k=o("d-panel-body"),i=o("d-panel"),b=o("d-button");return r(),d("div",null,[s(i,{type:"primary","before-toggle":p.beforeToggle,"is-collapsed":!1},{default:t(()=>[s(l,null,{default:t(()=>[c]),_:1}),s(k,null,{default:t(()=>[h]),_:1})]),_:1},8,["before-toggle"]),_,f,s(b,{onClick:p.handleClick},{default:t(()=>[m]),_:1},8,["onClick"])])}const{defineComponent:w,ref:v}=T,B=w({setup(){let p=!1;return{beforeToggle:(k,i)=>{p||(setTimeout(()=>{i()},1e3),p=!0)},handleClick:()=>{window.location.reload()}}}});return V({render:E},B)}(),"render-demo-4":function(){const{createTextVNode:e,resolveComponent:o,withCtx:t,createVNode:s,createElementVNode:u,toDisplayString:r,openBlock:d,createElementBlock:c}=T,h=e("Panel with foldable"),_=e("This is body"),f=u("br",null,null,-1),m=u("br",null,null,-1);function E(p,y){const l=o("d-panel-header"),k=o("d-panel-body"),i=o("d-panel"),b=o("d-button");return d(),c("div",null,[s(i,{"has-left-padding":p.padding,"is-collapsed":!0},{default:t(()=>[s(l,null,{default:t(()=>[h]),_:1}),s(k,null,{default:t(()=>[_]),_:1})]),_:1},8,["has-left-padding"]),f,m,s(b,{onClick:y[0]||(y[0]=D=>p.padding=!p.padding)},{default:t(()=>[e(r(p.padding?"\u6709\u5DE6\u586B\u5145":"\u6CA1\u6709\u5DE6\u586B\u5145"),1)]),_:1})])}const{defineComponent:w,ref:v}=T,B=w({setup(){return{padding:v(!1)}}});return V({render:E},B)}()}},_n='{"title":"Panel \u9762\u677F","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u591A\u79CD\u7C7B\u578B","slug":"\u591A\u79CD\u7C7B\u578B"},{"level":3,"title":"\u963B\u6B62\u6298\u53E0","slug":"\u963B\u6B62\u6298\u53E0"},{"level":3,"title":"\u52A8\u6001\u5207\u6362","slug":"\u52A8\u6001\u5207\u6362"},{"level":3,"title":"API","slug":"api"},{"level":3,"title":"\u63A5\u53E3&\u7C7B\u578B\u5B9A\u4E49","slug":"\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/panel/index.md","lastUpdated":1647843975025}',Q=U('<h1 id="panel-\u9762\u677F" tabindex="-1">Panel \u9762\u677F <a class="header-anchor" href="#panel-\u9762\u677F" aria-hidden="true">#</a></h1><p>\u5185\u5BB9\u9762\u677F\uFF0C\u7528\u4E8E\u5185\u5BB9\u5206\u7EC4\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5F53\u9875\u9762\u5185\u5BB9\u9700\u8981\u8FDB\u884C\u5206\u7EC4\u663E\u793A\u65F6\u4F7F\u7528\uFF0C\u4E00\u822C\u5305\u542B\u5934\u90E8\u3001\u5185\u5BB9\u533A\u57DF\u3001\u5E95\u90E8\u4E09\u4E2A\u90E8\u5206\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":show-animation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with foldable"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},":toggle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("toggle"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":show-animation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":has-left-padding"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
      Panel has no left padding
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("em")]),a(),n("span",{class:"token attr-name"},":class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("`icon icon-chevron-${toggleState ? "),n("span",{class:"token punctuation"},"'"),a("down"),n("span",{class:"token punctuation"},"'"),a(" : "),n("span",{class:"token punctuation"},"'"),a("up"),n("span",{class:"token punctuation"},"'"),a("}`"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("em")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":before-toggle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeToggle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),X=n("h3",{id:"\u591A\u79CD\u7C7B\u578B",tabindex:"-1"},[a("\u591A\u79CD\u7C7B\u578B "),n("a",{class:"header-anchor",href:"#\u591A\u79CD\u7C7B\u578B","aria-hidden":"true"},"#")],-1),Y=n("p",null,"\u9762\u677F\u7C7B\u578B\u5206\u4E3A default\u3001primary\u3001success\uFF0Cdanger\u3001warning\u3001info\u3002",-1),Z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),nn=n("h3",{id:"\u963B\u6B62\u6298\u53E0",tabindex:"-1"},[a("\u963B\u6B62\u6298\u53E0 "),n("a",{class:"header-anchor",href:"#\u963B\u6B62\u6298\u53E0","aria-hidden":"true"},"#")],-1),an=n("p",null,"\u67D0\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u9700\u8981\u963B\u6B62\u9762\u677F\u6536\u8D77\u3002Panel \u63D0\u4F9B\u4E86\u8FD9\u9879 API\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 beforeToggle \u6765\u963B\u6B62\u9762\u677F\u7684\u6536\u8D77",-1),tn=n("p",null,"\u6839\u636E\u6761\u4EF6\u5224\u65AD\uFF0C\u5F53 panel \u5C55\u5F00\u65F6\uFF0C\u70B9\u51FB\u963B\u6B62\u6298\u53E0\u6309\u94AE\uFF0C\u5C06\u65E0\u6CD5\u6298\u53E0 panel\u3002\u5F53 panel \u5C55\u5F00\u65F6\u4E0D\u5F71\u54CD\u64CD\u4F5C\u3002",-1),sn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(`
    `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":has-left-padding"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("padding"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@toggle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleToggle"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":before-toggle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeToggle"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":show-animation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("showAnimation"),n("span",{class:"token punctuation"},'"')]),a(`
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
    `),n("span",{class:"token keyword"},"let"),a(" state"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" padding "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" nowState "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u6536\u8D77'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleToggle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      toggle`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" e"),n("span",{class:"token punctuation"},";"),a(`
      nowState`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" toggle"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'\u5C55\u5F00'"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6536\u8D77'"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"beforeToggle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" panelToggle"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      state`),n("span",{class:"token punctuation"},","),a(`
      toggle`),n("span",{class:"token punctuation"},","),a(`
      panelToggle`),n("span",{class:"token punctuation"},","),a(`
      beforeToggle`),n("span",{class:"token punctuation"},","),a(`
      isCollapsed`),n("span",{class:"token punctuation"},","),a(`
      handleToggle`),n("span",{class:"token punctuation"},","),a(`
      showAnimation`),n("span",{class:"token punctuation"},","),a(`
      padding`),n("span",{class:"token punctuation"},","),a(`
      nowState
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),en=n("p",null,[a("\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\uFF0C\u6211\u4EEC\u6216\u8BB8\u9700\u8981\u4F7F\u7528js\u6765\u5BF9Panel\u8FDB\u884C\u5F00\u5408\u63A7\u5236\uFF0C\u5C24\u5176\u662F\u5F02\u6B65\u65F6\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528beforeToggle\u4E2D\u7684"),n("code",null,"done"),a("\u51FD\u6570\u6765\u5BF9Panel\u8FDB\u884C\u5F00\u5408\u5904\u7406\u3002")],-1),on=n("p",null,"\u6848\u4F8B\u4E2D\u6211\u4EEC\u4F7F\u7528setTimeout\u6765\u6A21\u62DF\u5F02\u6B65\u4EFB\u52A1\u63A7\u5236Panel\u5F00\u5408",-1),un=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(`
    `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":before-toggle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeToggle"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
      1s\u4E4B\u540E\u81EA\u52A8\u6253\u5F00
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    \u8BD5\u4E00\u8BD5
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


`)])])],-1),pn=n("h3",{id:"\u52A8\u6001\u5207\u6362",tabindex:"-1"},[a("\u52A8\u6001\u5207\u6362 "),n("a",{class:"header-anchor",href:"#\u52A8\u6001\u5207\u6362","aria-hidden":"true"},"#")],-1),ln=n("p",null,"\u6211\u4EEC\u4EE5 has-left-padding \u4E3A\u4F8B",-1),cn=n("p",null,"\u7406\u8BBA\u4E0A\u6240\u6709\u7684\u5C5E\u6027\u90FD\u53EF\u4EE5\u52A8\u6001\u5207\u6362",-1),kn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},":has-left-padding"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("padding"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":is-collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with foldable"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("padding = !padding"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    {{ padding ? '\u6709\u5DE6\u586B\u5145' : '\u6CA1\u6709\u5DE6\u586B\u5145' }}
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
`)])])],-1),rn=U(`<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">type</td><td style="text-align:center;">PanelType</td><td style="text-align:center;">&#39;default&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u9762\u677F\u7684\u7C7B\u578B</td></tr><tr><td style="text-align:center;">css-class</td><td style="text-align:center;">string</td><td style="text-align:center;">--</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u81EA\u5B9A\u4E49 class \u540D</td></tr><tr><td style="text-align:center;">is-collapsed</td><td style="text-align:center;">boolean</td><td style="text-align:center;">false</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u662F\u5426\u5C55\u5F00</td></tr><tr><td style="text-align:center;">has-left-padding</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u5DE6\u4FA7\u586B\u5145</td></tr><tr><td style="text-align:center;">show-animation</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u662F\u5426\u5C55\u793A\u52A8\u753B</td></tr><tr><td style="text-align:center;">before-toggle</td><td style="text-align:center;">() =&gt; (value: boolean, done?: () =&gt; void) =&gt; any</td><td style="text-align:center;">--</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u9762\u677F\u6298\u53E0\u72B6\u6001\u6539\u53D8\u524D\u7684\u56DE\u8C03\u51FD\u6570, \u53C2\u6570<code>value</code>\u4EE3\u8868\u5F53\u524D\u72B6\u6001,\u53C2\u6570<code>done()</code>\u53EF\u4EE5\u63A7\u5236Panel\u5F00\u5408</td></tr><tr><td style="text-align:center;">@toggle</td><td style="text-align:center;">Function</td><td style="text-align:center;">--</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u9762\u677F\u5F53\u524D\u72B6\u6001\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE boolean \u7C7B\u578B\uFF0C\u8FD4\u56DE false \u4EE3\u8868\u9762\u677F\u88AB\u6536\u8D77\uFF0C\u8FD4\u56DE true \u4EE3\u8868\u9762\u677F\u5C55\u5F00</td></tr></tbody></table><h3 id="\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">\u63A5\u53E3&amp;\u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token keyword">export</span> type PanelType <span class="token operator">=</span> <span class="token string">&#39;default&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;primary&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;success&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;danger&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;warning&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,4);function dn(e,o,t,s,u,r){const d=N("render-demo-0"),c=N("demo"),h=N("render-demo-1"),_=N("render-demo-2"),f=N("render-demo-3"),m=N("render-demo-4");return M(),L("div",null,[Q,F(c,{sourceCode:`<template>
  <d-panel type="primary" :is-collapsed="true" :show-animation="true">
    <d-panel-header>Panel with foldable</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br />
  <br />
  <d-panel :toggle="toggle" :is-collapsed="true" :show-animation="true" :has-left-padding="false">
    <d-panel-header>
      Panel has no left padding
      <em :class="\`icon icon-chevron-\${toggleState ? 'down' : 'up'}\`"></em>
    </d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br />
  <br />
  <d-panel :is-collapsed="true" :before-toggle="beforeToggle">
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
`},{highlight:C(()=>[R]),default:C(()=>[F(d)]),_:1}),X,Y,F(c,{sourceCode:`<template>
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
`},{highlight:C(()=>[Z]),default:C(()=>[F(h)]),_:1}),nn,an,tn,F(c,{sourceCode:`<template>
  <d-panel
    type="primary"
    :has-left-padding="padding"
    @toggle="handleToggle"
    :before-toggle="beforeToggle"
    :show-animation="showAnimation"
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
    let state;
    let padding = ref(false);
    let nowState = ref('\u6536\u8D77');
    const handleToggle = (e) => {
      toggle.value = e;
      nowState.value = toggle.value === true ? '\u5C55\u5F00' : '\u6536\u8D77';
    };
    const beforeToggle = (e) => {
      return panelToggle.value;
    };
    return {
      state,
      toggle,
      panelToggle,
      beforeToggle,
      isCollapsed,
      handleToggle,
      showAnimation,
      padding,
      nowState
    };
  }
});
<\/script>
`},{highlight:C(()=>[sn]),default:C(()=>[F(_)]),_:1}),en,on,F(c,{sourceCode:`<template>
  <d-panel
    type="primary"
    :before-toggle="beforeToggle"
    :is-collapsed="false"
  >
    <d-panel-header>
      1s\u4E4B\u540E\u81EA\u52A8\u6253\u5F00
    </d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br />
  <br />
  <d-button @click="handleClick">
    \u8BD5\u4E00\u8BD5
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


`},{highlight:C(()=>[un]),default:C(()=>[F(f)]),_:1}),pn,ln,cn,F(c,{sourceCode:`<template>
  <d-panel :has-left-padding="padding" :is-collapsed="true">
    <d-panel-header>Panel with foldable</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br />
  <br />
  <d-button @click="padding = !padding">
    {{ padding ? '\u6709\u5DE6\u586B\u5145' : '\u6CA1\u6709\u5DE6\u586B\u5145' }}
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
`},{highlight:C(()=>[kn]),default:C(()=>[F(m)]),_:1}),rn])}var fn=K(O,[["render",dn]]);export{_n as __pageData,fn as default};
