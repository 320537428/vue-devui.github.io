var S=Object.defineProperty;var b=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var y=(u,e,a)=>e in u?S(u,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[e]=a,A=(u,e)=>{for(var a in e||(e={}))N.call(e,a)&&y(u,a,e[a]);if(b)for(var a of b(e))V.call(e,a)&&y(u,a,e[a]);return u};import{_ as q,r as B,c as H,a as E,w as f,b as x,d as t,e as n,o as O,V as g}from"./app.f1738605.js";const W={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:u,createTextVNode:e,resolveComponent:a,withCtx:d,createVNode:k,openBlock:C,createBlock:F,createCommentVNode:p,createElementBlock:w}=g;function m(s,r){const o=a("d-button"),c=a("d-drawer");return C(),w("div",null,[k(o,{onClick:s.drawerShow},{default:d(()=>[e(" drawer "+u(s.btnName),1)]),_:1},8,["onClick"]),s.isDrawerShow?(C(),F(c,{key:0,visible:s.isDrawerShow,"onUpdate:visible":r[0]||(r[0]=i=>s.isDrawerShow=i),width:s.drawerWidth,isCover:s.isCover,backdropCloseable:s.backdropCloseable,beforeHidden:s.beforeHidden,position:"right",onClose:s.drawerClose,onAfterOpened:s.drawerAfterOpened},null,8,["visible","width","isCover","backdropCloseable","beforeHidden","onClose","onAfterOpened"])):p("v-if",!0)])}const{ref:l}=g;return A({render:m},{setup(){let s=l(!1),r=l("close"),o=l("15vw"),c=l(!1),i=l(!0);return{isDrawerShow:s,btnName:r,drawerWidth:o,drawerShow:()=>{s.value=!0,r.value="open"},drawerClose:()=>{r.value="close"},drawerAfterOpened:()=>{console.log("open")},isCover:c,backdropCloseable:i,beforeHidden:()=>new Promise(_=>{_(!1)})}}})}(),"render-demo-1":function(){const{createTextVNode:u,resolveComponent:e,withCtx:a,createVNode:d,createElementVNode:k,openBlock:C,createElementBlock:F}=g,p=u(" drawer "),w=u(" \u5185\u5BB9\u533A\u63D2\u69FD "),l=[k("span",{class:"icon icon-close"},null,-1)];function D(o,c){const i=e("d-button"),v=e("d-drawer");return C(),F("div",null,[d(i,{onClick:o.drawerShow},{default:a(()=>[p]),_:1},8,["onClick"]),d(v,{visible:o.isDrawerShow,"onUpdate:visible":c[1]||(c[1]=h=>o.isDrawerShow=h),isCover:!1},{default:a(()=>[w]),header:a(()=>[k("div",{onClick:c[0]||(c[0]=(...h)=>o.drawerClose&&o.drawerClose(...h))},l)]),_:1},8,["visible"])])}const{ref:s}=g;return A({render:D},{setup(){let o=s(!1);return{isDrawerShow:o,drawerShow:()=>{o.value=!o.value},drawerClose:()=>{o.value=!1}}}})}()}},M='{"title":"Drawer \u62BD\u5C49\u677F","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6A21\u677F","slug":"\u81EA\u5B9A\u4E49\u6A21\u677F"},{"level":3,"title":"\u53C2\u6570\u53CAAPI","slug":"\u53C2\u6570\u53CAapi"},{"level":3,"title":"\u63D2\u69FD","slug":"\u63D2\u69FD"}],"relativePath":"components/drawer/index.md","lastUpdated":1639756373008}',P=x('<h1 id="drawer-\u62BD\u5C49\u677F" tabindex="-1">Drawer \u62BD\u5C49\u677F <a class="header-anchor" href="#drawer-\u62BD\u5C49\u677F" aria-hidden="true">#</a></h1><p>\u5C4F\u5E55\u8FB9\u7F18\u6ED1\u51FA\u7684\u6D6E\u5C42\u9762\u677F\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><ol><li>\u62BD\u5C49\u4ECE\u7236\u7A97\u4F53\u8FB9\u7F18\u6ED1\u5165\uFF0C\u8986\u76D6\u4F4F\u90E8\u5206\u7236\u7A97\u4F53\u5185\u5BB9\u3002\u7528\u6237\u5728\u62BD\u5C49\u5185\u64CD\u4F5C\u65F6\u4E0D\u5FC5\u79BB\u5F00\u5F53\u524D\u4EFB\u52A1\uFF0C\u64CD\u4F5C\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u5E73\u6ED1\u5730\u56DE\u5230\u5230\u539F\u4EFB\u52A1\u3002</li><li>\u5F53\u9700\u8981\u4E00\u4E2A\u9644\u52A0\u7684\u9762\u677F\u6765\u63A7\u5236\u7236\u7A97\u4F53\u5185\u5BB9\uFF0C\u8FD9\u4E2A\u9762\u677F\u5728\u9700\u8981\u65F6\u547C\u51FA\u3002\u6BD4\u5982\uFF0C\u63A7\u5236\u754C\u9762\u5C55\u793A\u6837\u5F0F\uFF0C\u5F80\u754C\u9762\u4E2D\u6DFB\u52A0\u5185\u5BB9\u3002</li><li>\u5F53\u9700\u8981\u5728\u5F53\u524D\u4EFB\u52A1\u6D41\u4E2D\u63D2\u5165\u4E34\u65F6\u4EFB\u52A1\uFF0C\u521B\u5EFA\u6216\u9884\u89C8\u9644\u52A0\u5185\u5BB9\u3002\u6BD4\u5982\u5C55\u793A\u534F\u8BAE\u6761\u6B3E\uFF0C\u521B\u5EFA\u5B50\u5BF9\u8C61\u3002</li></ol><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><h4>\u57FA\u672C\u7528\u6CD5\uFF0C\u53EF\u4EE5\u63A7\u5236\u5168\u5C4F\u3001\u5173\u95ED\u548C\u8BBE\u7F6E\u5BBD\u5EA6\u3002</h4>',6),T=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n("  "),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("drawerShow"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" drawer {{ btnName }} "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-drawer")]),n(`
    `),t("span",{class:"token attr-name"},"v-if"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("isDrawerShow"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("visible")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("isDrawerShow"),t("span",{class:"token punctuation"},'"')]),n(` 
    `),t("span",{class:"token attr-name"},":width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("drawerWidth"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":isCover"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("isCover"),t("span",{class:"token punctuation"},'"')]),n(` 
    `),t("span",{class:"token attr-name"},":backdropCloseable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("backdropCloseable"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":beforeHidden"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("beforeHidden"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("right"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"@close"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("drawerClose"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"@afterOpened"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("drawerAfterOpened"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" isDrawerShow "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" btnName "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'close'"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" drawerWidth "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'15vw'"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" isCover "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" backdropCloseable "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"drawerShow"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      isDrawerShow`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token boolean"},"true"),n(`
      btnName`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token string"},"'open'"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"drawerClose"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      btnName`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token string"},"'close'"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"drawerAfterOpened"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'open'"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"beforeHidden"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Promise"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"resolve"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token function"},"resolve"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      isDrawerShow`),t("span",{class:"token punctuation"},","),n(`
      btnName`),t("span",{class:"token punctuation"},","),n(`
      drawerWidth`),t("span",{class:"token punctuation"},","),n(`
      drawerShow`),t("span",{class:"token punctuation"},","),n(`
      drawerClose`),t("span",{class:"token punctuation"},","),n(`
      drawerAfterOpened`),t("span",{class:"token punctuation"},","),n(`
      isCover`),t("span",{class:"token punctuation"},","),n(`
      backdropCloseable`),t("span",{class:"token punctuation"},","),n(`
      beforeHidden`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),$=t("h3",{id:"\u81EA\u5B9A\u4E49\u6A21\u677F",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u6A21\u677F "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6A21\u677F","aria-hidden":"true"},"#")],-1),j=t("h4",null,"\u81EA\u5B9A\u4E49\u62BD\u5C49\u677F\u6A21\u677F\u3002",-1),I=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n("  "),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("drawerShow"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" drawer "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-drawer")]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("visible")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("isDrawerShow"),t("span",{class:"token punctuation"},'"')]),n(` 
    `),t("span",{class:"token attr-name"},":isCover"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("false"),t("span",{class:"token punctuation"},'"')]),n(` 
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"v-slot"),t("span",{class:"token punctuation"},">")]),n(`
      \u5185\u5BB9\u533A\u63D2\u69FD
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-slot:"),n("header")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("drawerClose"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("icon icon-close"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-drawer")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" isDrawerShow "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"drawerShow"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      isDrawerShow`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token operator"},"!"),n("isDrawerShow"),t("span",{class:"token punctuation"},"."),n(`value
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"drawerClose"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      isDrawerShow`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      isDrawerShow`),t("span",{class:"token punctuation"},","),n(`
      drawerShow`),t("span",{class:"token punctuation"},","),n(`
      drawerClose`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),U=x('<h3 id="\u53C2\u6570\u53CAapi" tabindex="-1">\u53C2\u6570\u53CAAPI <a class="header-anchor" href="#\u53C2\u6570\u53CAapi" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">v-model:visible</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u8BBE\u7F6E\u62BD\u5C49\u677F\u662F\u5426\u53EF\u89C1</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">width</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>300px</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u62BD\u5C49\u677F\u5BBD\u5EA6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">zIndex</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>1000</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E drawer \u7684 z-index \u503C</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">isCover</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u6709\u906E\u7F69\u5C42</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">escKeyCloseable</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u53EF\u5426\u901A\u8FC7 esc \u6309\u952E\u6765\u5173\u95ED drawer \u5C42</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">position</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;">&#39;right&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u62BD\u5C49\u677F\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF0C&#39;left&#39;\u6216\u8005&#39;right&#39;</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">backdropCloseable</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u53EF\u5426\u901A\u8FC7\u70B9\u51FB\u80CC\u666F\u6765\u5173\u95ED drawer \u5C42</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">beforeHidden</td><td style="text-align:center;"><code>Function | Promise</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5173\u95ED\u7A97\u53E3\u4E4B\u524D\u7684\u56DE\u8C03</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">onClose</td><td style="text-align:center;"><code>Function</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5173\u95ED drawer \u65F6\u5019\u8C03\u7528</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">onAfterOpened</td><td style="text-align:center;"><code>Function</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6253\u5F00 drawer \u540E\u65F6\u5019\u8C03\u7528</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h3 id="\u63D2\u69FD" tabindex="-1">\u63D2\u69FD <a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u540D\u79F0</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">default</td><td style="text-align:center;">\u9ED8\u8BA4</td><td style="text-align:center;">\u62BD\u5C49\u677F\u5185\u5BB9</td><td style="text-align:center;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A8%A1%E6%9D%BF">\u81EA\u5B9A\u4E49\u6A21\u677F</a></td></tr><tr><td style="text-align:center;">header</td><td style="text-align:center;">\u5934\u90E8</td><td style="text-align:center;">\u62BD\u5C49\u677F\u5934\u90E8</td><td style="text-align:center;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A8%A1%E6%9D%BF">\u81EA\u5B9A\u4E49\u6A21\u677F</a></td></tr></tbody></table>',4);function z(u,e,a,d,k,C){const F=B("render-demo-0"),p=B("demo"),w=B("render-demo-1");return O(),H("div",null,[P,E(p,{sourceCode:`<template>
  <d-button  @click="drawerShow"> drawer {{ btnName }} </d-button>
  <d-drawer
    v-if="isDrawerShow"
    v-model:visible="isDrawerShow" 
    :width="drawerWidth"
    :isCover="isCover" 
    :backdropCloseable="backdropCloseable"
    :beforeHidden="beforeHidden"
    position="right"
    @close="drawerClose"
    @afterOpened="drawerAfterOpened"
  />
</template>
<script>
import { ref } from 'vue'

export default ({
  setup() {
    let isDrawerShow = ref(false)
    let btnName = ref('close')
    let drawerWidth = ref('15vw')
    let isCover = ref(false)
    let backdropCloseable = ref(true);

    const drawerShow = () => {
      isDrawerShow.value = true
      btnName.value = 'open'
    }

    const drawerClose = () => {
      btnName.value = 'close'
    }

    const drawerAfterOpened = () => {
      console.log('open')
    }

    const beforeHidden = () => {
      return new Promise((resolve) => {
        resolve(false);
      });
    }

    return {
      isDrawerShow,
      btnName,
      drawerWidth,
      drawerShow,
      drawerClose,
      drawerAfterOpened,
      isCover,
      backdropCloseable,
      beforeHidden,
    }
  }
})
<\/script>
`},{highlight:f(()=>[T]),default:f(()=>[E(F)]),_:1}),$,j,E(p,{sourceCode:`<template>
  <d-button  @click="drawerShow"> drawer </d-button>
  <d-drawer
    v-model:visible="isDrawerShow" 
    :isCover="false" 
  >
    <template v-slot>
      \u5185\u5BB9\u533A\u63D2\u69FD
    </template>
    <template v-slot:header>
      <div @click="drawerClose">
        <span class="icon icon-close" />
      </div>
    </template>
  </d-drawer>
</template>
<script>
import { ref } from 'vue'

export default ({
  setup() {
    let isDrawerShow = ref(false)

    const drawerShow = () => {
      isDrawerShow.value = !isDrawerShow.value
    }

    const drawerClose = () => {
      isDrawerShow.value = false;
    }

    return {
      isDrawerShow,
      drawerShow,
      drawerClose,
    }
  }
})
<\/script>
`},{highlight:f(()=>[I]),default:f(()=>[E(w)]),_:1}),U])}var Q=q(W,[["render",z]]);export{M as __pageData,Q as default};
