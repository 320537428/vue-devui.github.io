var R=Object.defineProperty;var w=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var q=(s,o,e)=>o in s?R(s,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[o]=e,x=(s,o)=>{for(var e in o||(o={}))W.call(o,e)&&q(s,e,o[e]);if(w)for(var e of w(o))X.call(o,e)&&q(s,e,o[e]);return s};import{_ as Y,V as B,r as C,c as Z,a as h,w as l,b as V,d as t,e as n,o as tt}from"./app.0c19a03b.js";const nt={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:s,resolveComponent:o,withCtx:e,createVNode:a,createElementVNode:p,openBlock:f,createElementBlock:r}=B,c={class:"popover-demo-item"},d=s("default"),g=s("info"),m=s("error"),u=s("success"),F=s("warning"),y=s("no-animation");function _(D,A){const v=o("d-button"),E=o("d-popover");return f(),r("div",null,[p("div",c,[a(E,{content:"default"},{reference:e(()=>[a(v,null,{default:e(()=>[d]),_:1})]),_:1}),a(E,{content:"info!","pop-type":"info",position:["top"]},{reference:e(()=>[a(v,{variant:"solid"},{default:e(()=>[g]),_:1})]),_:1}),a(E,{content:"error!","pop-type":"error",position:["left"],style:{"z-index":"9999"}},{reference:e(()=>[a(v,{variant:"solid",color:"danger"},{default:e(()=>[m]),_:1})]),_:1}),a(E,{content:"success!","pop-type":"success",position:["right"]},{reference:e(()=>[a(v,null,{default:e(()=>[u]),_:1})]),_:1}),a(E,{content:"warning!","pop-type":"warning"},{reference:e(()=>[a(v,null,{default:e(()=>[F]),_:1})]),_:1}),a(E,{content:"no-animation!","show-animation":!1,style:{"max-width":"100px"}},{reference:e(()=>[a(v,null,{default:e(()=>[y]),_:1})]),_:1})])])}return x({render:_},{})}(),"render-demo-1":function(){const{createTextVNode:s,resolveComponent:o,withCtx:e,createVNode:a,createElementVNode:p,openBlock:f,createElementBlock:r}=B,c={class:"popover-demo-item"},d=s("click me!"),g=s("hover me!");function m(F,y){const _=o("d-button"),b=o("d-popover");return f(),r("div",null,[p("div",c,[a(b,{content:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},{reference:e(()=>[a(_,{variant:"solid"},{default:e(()=>[d]),_:1})]),_:1}),a(b,{content:"\u81EA\u5B9A\u4E49\u5185\u5BB9",trigger:"hover",style:{"background-color":"#7693f5",color:"#fff"}},{reference:e(()=>[a(_,null,{default:e(()=>[g]),_:1})]),_:1})])])}return x({render:m},{})}(),"render-demo-2":function(){const{createElementVNode:s,createTextVNode:o,resolveComponent:e,withCtx:a,createVNode:p,openBlock:f,createElementBlock:r}=B,c={class:"popover-demo-item-horizontal"},d=s("div",null,[s("div",null,"top-start"),s("div",null,"top-start")],-1),g=o("top-start"),m=s("div",null,"top",-1),u=o("top"),F=s("div",null,[s("div",null,"top-end"),s("div",null,"top-end")],-1),y=o("top-end"),_={class:"popover-demo-vertical-wrapper"},b={class:"popover-demo-item-vertical"},D=s("div",null,[s("div",null,"left-start"),s("div",null,"left-start")],-1),A=o("left-start"),v=s("div",null,"left",-1),E=o("left"),N=s("div",null,[s("div",null,"left-end"),s("div",null,"left-end")],-1),T=o("left-end"),P={class:"popover-demo-item-vertical"},M=s("div",null,[s("div",null,"right-start"),s("div",null,"right-start")],-1),O=o("right-start"),z=s("div",null,"right",-1),j=o("right"),$=s("div",null,[s("div",null,"right-end"),s("div",null,"right-end")],-1),L=o("right-end"),S={class:"popover-demo-item-horizontal"},U=s("div",null,[s("div",null,"bottom-start"),s("div",null,"bottom-start")],-1),G=o("bottom-start"),H=s("div",null,"bottom",-1),I=o("bottom"),J=s("div",null,[s("div",null,"bottom-end"),s("div",null,"bottom-end")],-1),K=o("bottom-end");function Q(Ft,yt){const i=e("d-button"),k=e("d-popover");return f(),r("div",null,[s("div",c,[p(k,{position:["top-start"],align:"start"},{content:a(()=>[d]),reference:a(()=>[p(i,{style:{width:"100px"}},{default:a(()=>[g]),_:1})]),_:1}),p(k,{position:["top"]},{content:a(()=>[m]),reference:a(()=>[p(i,{style:{width:"100px"}},{default:a(()=>[u]),_:1})]),_:1}),p(k,{position:["top-end"],align:"end"},{content:a(()=>[F]),reference:a(()=>[p(i,{style:{width:"100px"}},{default:a(()=>[y]),_:1})]),_:1})]),s("div",_,[s("div",b,[p(k,{position:["left-start"],align:"start"},{content:a(()=>[D]),reference:a(()=>[p(i,{style:{width:"100px"}},{default:a(()=>[A]),_:1})]),_:1}),p(k,{position:["left"]},{content:a(()=>[v]),reference:a(()=>[p(i,{style:{width:"100px"}},{default:a(()=>[E]),_:1})]),_:1}),p(k,{position:["left-end"],align:"end"},{content:a(()=>[N]),reference:a(()=>[p(i,{style:{width:"100px"}},{default:a(()=>[T]),_:1})]),_:1})]),s("div",P,[p(k,{position:["right-start"],align:"start"},{content:a(()=>[M]),reference:a(()=>[p(i,{style:{width:"100px"}},{default:a(()=>[O]),_:1})]),_:1}),p(k,{position:["right"]},{content:a(()=>[z]),reference:a(()=>[p(i,{style:{width:"100px"}},{default:a(()=>[j]),_:1})]),_:1}),p(k,{position:["right-end"],align:"end"},{content:a(()=>[$]),reference:a(()=>[p(i,{style:{width:"100px"}},{default:a(()=>[L]),_:1})]),_:1})])]),s("div",S,[p(k,{position:["bottom-start"],align:"start"},{content:a(()=>[U]),reference:a(()=>[p(i,{style:{width:"100px"}},{default:a(()=>[G]),_:1})]),_:1}),p(k,{position:["bottom"]},{content:a(()=>[H]),reference:a(()=>[p(i,{style:{width:"100px"}},{default:a(()=>[I]),_:1})]),_:1}),p(k,{position:["bottom-end"],align:"end"},{content:a(()=>[J]),reference:a(()=>[p(i,{style:{width:"100px"}},{default:a(()=>[K]),_:1})]),_:1})])])}return x({render:Q},{})}(),"render-demo-3":function(){const{createElementVNode:s,createTextVNode:o,resolveComponent:e,withCtx:a,createVNode:p,openBlock:f,createElementBlock:r}=B,c={class:"popover-demo-item"},d=s("div",null,"Mouse enter 500ms later.",-1),g=o(" show Me "),m=o("MouseEnter delay 500ms"),u=s("div",null,"Mouse leave 2000ms later.",-1),F=o("MouseLeave delay 2000ms");function y(b,D){const A=e("d-button"),v=e("d-popover");return f(),r("div",null,[s("div",c,[p(v,{position:["bottom"],trigger:"hover","mouse-enter-delay":500},{content:a(()=>[d,g]),reference:a(()=>[p(A,{variant:"solid"},{default:a(()=>[m]),_:1})]),_:1}),p(v,{position:["bottom"],trigger:"hover","mouse-leave-delay":2e3},{content:a(()=>[u]),reference:a(()=>[p(A,null,{default:a(()=>[F]),_:1})]),_:1})])])}return x({render:y},{})}(),"render-demo-4":function(){const{createTextVNode:s,resolveComponent:o,withCtx:e,createVNode:a,openBlock:p,createElementBlock:f}=B,r=s("Click Me");function c(u,F){const y=o("d-button"),_=o("d-popover");return p(),f("div",null,[a(_,{"is-open":u.isOpen,trigger:"manually",content:"manually control"},{reference:e(()=>[a(y,{onClick:u.onClick},{default:e(()=>[r]),_:1},8,["onClick"])]),_:1},8,["is-open"])])}const{defineComponent:d,ref:g}=B,m=d({setup(){const u=g(!1);return{isOpen:u,onClick:()=>u.value=!u.value}}});return x({render:c},m)}()}},xt='{"title":"Popover \u60AC\u6D6E\u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u5185\u5BB9","slug":"\u81EA\u5B9A\u4E49\u5185\u5BB9"},{"level":3,"title":"\u5F39\u51FA\u4F4D\u7F6E","slug":"\u5F39\u51FA\u4F4D\u7F6E"},{"level":3,"title":"\u5EF6\u65F6\u89E6\u53D1","slug":"\u5EF6\u65F6\u89E6\u53D1"},{"level":3,"title":"\u624B\u52A8\u89E6\u53D1","slug":"\u624B\u52A8\u89E6\u53D1"},{"level":3,"title":"Popover \u53C2\u6570","slug":"popover-\u53C2\u6570"},{"level":3,"title":"Popover \u63D2\u69FD","slug":"popover-\u63D2\u69FD"},{"level":3,"title":"Popover \u7C7B\u578B\u5B9A\u4E49","slug":"popover-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/popover/index.md","lastUpdated":1650439126585}',at=V('<h1 id="popover-\u60AC\u6D6E\u63D0\u793A" tabindex="-1">Popover \u60AC\u6D6E\u63D0\u793A <a class="header-anchor" href="#popover-\u60AC\u6D6E\u63D0\u793A" aria-hidden="true">#</a></h1><p>\u7B80\u5355\u7684\u6587\u5B57\u63D0\u793A\u6C14\u6CE1\u6846\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u7528\u6765\u901A\u77E5\u7528\u6237\u975E\u5173\u952E\u6027\u95EE\u9898\u6216\u63D0\u793A\u67D0\u63A7\u4EF6\u5904\u4E8E\u67D0\u7279\u6B8A\u60C5\u51B5\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),st=t("div",null,[n("\u5F53 Popover \u5F39\u51FA\u65F6\uFF0C\u4F1A\u57FA\u4E8E"),t("code",null,"reference"),n("\u63D2\u69FD\u7684\u5185\u5BB9\u8FDB\u884C\u5B9A\u4F4D\u3002")],-1),et=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("popover-demo-item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("default"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n("default"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("info!"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"pop-type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("info"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("top"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("solid"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("info"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("error!"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"pop-type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("error"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("left"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"z-index"),t("span",{class:"token punctuation"},":"),n(" 9999")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("solid"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("danger"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("error"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("success!"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"pop-type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("success"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("right"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n("success"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("warning!"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"pop-type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("warning"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n("warning"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("no-animation!"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":show-animation"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("false"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"max-width"),t("span",{class:"token punctuation"},":"),n(" 100px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n("no-animation"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".popover-demo-item > *"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" inline-block"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),n(" 8px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),ot=t("h3",{id:"\u81EA\u5B9A\u4E49\u5185\u5BB9",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u5185\u5BB9 "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5185\u5BB9","aria-hidden":"true"},"#")],-1),pt=t("div",null,[n("\u81EA\u5B9A\u4E49"),t("code",null,"reference"),n("\u63D2\u69FD\u7684\u5185\u5BB9\u4E0E\u5F39\u51FA\u63D0\u793A\u5185\u5BB9\u3002")],-1),ct=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("popover-demo-item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u81EA\u5B9A\u4E49\u5185\u5BB9"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("solid"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("click me!"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u81EA\u5B9A\u4E49\u5185\u5BB9"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"trigger"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("hover"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"background-color"),t("span",{class:"token punctuation"},":"),n(" #7693f5"),t("span",{class:"token punctuation"},";"),n(),t("span",{class:"token property"},"color"),t("span",{class:"token punctuation"},":"),n(" #fff")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n("hover me!"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),ut=t("h3",{id:"\u5F39\u51FA\u4F4D\u7F6E",tabindex:"-1"},[n("\u5F39\u51FA\u4F4D\u7F6E "),t("a",{class:"header-anchor",href:"#\u5F39\u51FA\u4F4D\u7F6E","aria-hidden":"true"},"#")],-1),lt=t("div",null,"\u603B\u5171\u652F\u6301 12 \u4E2A\u5F39\u51FA\u4F4D\u7F6E\u3002",-1),it=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("popover-demo-item-horizontal"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("top-start"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"align"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("start"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("top-start"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("top-start"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 100px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n("top-start"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("top"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("top"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 100px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n("top"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("top-end"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"align"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("end"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("top-end"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("top-end"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 100px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n("top-end"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("popover-demo-vertical-wrapper"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("popover-demo-item-vertical"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("left-start"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"align"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("start"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("left-start"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("left-start"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 100px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n("left-start"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("left"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("left"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 100px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n("left"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("left-end"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"align"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("end"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("left-end"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("left-end"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 100px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n("left-end"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("popover-demo-item-vertical"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("right-start"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"align"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("start"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("right-start"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("right-start"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 100px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n("right-start"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("right"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("right"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 100px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n("right"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("right-end"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"align"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("end"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("right-end"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("right-end"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 100px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n("right-end"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("popover-demo-item-horizontal"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("bottom-start"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"align"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("start"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("bottom-start"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("bottom-start"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 100px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n("bottom-start"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("bottom"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("bottom"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 100px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n("bottom"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("bottom-end"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"align"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("end"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("bottom-end"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("bottom-end"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 100px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n("bottom-end"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".popover-demo-item-horizontal"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" flex"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"justify-content"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"align-items"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 400px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 4px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token selector"},".popover-demo-item-horizontal > *"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),n(" 4px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token selector"},".popover-demo-vertical-wrapper"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" flex"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"justify-content"),t("span",{class:"token punctuation"},":"),n(" space-between"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"align-items"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 400px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token selector"},".popover-demo-item-vertical"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" flex"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"flex-direction"),t("span",{class:"token punctuation"},":"),n(" column"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"justify-content"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"align-items"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 4px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token selector"},".popover-demo-item-vertical > *"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 4px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),kt=t("h3",{id:"\u5EF6\u65F6\u89E6\u53D1",tabindex:"-1"},[n("\u5EF6\u65F6\u89E6\u53D1 "),t("a",{class:"header-anchor",href:"#\u5EF6\u65F6\u89E6\u53D1","aria-hidden":"true"},"#")],-1),rt=t("div",null,[n("\u4EC5\u9700\u8981\u5728 trigger \u4E3A hover \u7684\u65F6\u5019\uFF0C\u9F20\u6807\u79FB\u5165\u7684\u65F6\u957F\u8D85\u8FC7 "),t("code",null,"mouse-enter-delay"),n(" \u6BEB\u79D2\u4E4B\u540E\u624D\u4F1A\u89E6\u53D1\uFF0C\u4EE5\u9632\u6B62\u7528\u6237\u65E0\u610F\u5212\u8FC7\u5BFC\u81F4\u7684\u95EA\u73B0\uFF0C\u9ED8\u8BA4\u503C\u662F 150 \u6BEB\u79D2\uFF1B\u9F20\u6807\u79FB\u51FA\u4E4B\u540E\uFF0C\u518D\u7ECF\u8FC7"),t("code",null,"mouse-leave-delay"),n("\u6BEB\u79D2\u540E\uFF0CPopover \u7EC4\u4EF6\u624D\u4F1A\u9690\u85CF\uFF0C\u9ED8\u8BA4\u503C\u662F 100 \u6BEB\u79D2\u3002")],-1),dt=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("popover-demo-item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("bottom"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"trigger"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("hover"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":mouse-enter-delay"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("500"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("Mouse enter 500ms later."),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        show Me
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("solid"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("MouseEnter delay 500ms"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("bottom"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"trigger"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("hover"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":mouse-leave-delay"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2000"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("Mouse leave 2000ms later."),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n("MouseLeave delay 2000ms"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),gt=t("h3",{id:"\u624B\u52A8\u89E6\u53D1",tabindex:"-1"},[n("\u624B\u52A8\u89E6\u53D1 "),t("a",{class:"header-anchor",href:"#\u624B\u52A8\u89E6\u53D1","aria-hidden":"true"},"#")],-1),mt=t("div",null,[t("code",null,"trigger"),n("\u53C2\u6570\u8BBE\u7F6E\u4E3A"),t("code",null,"manually"),n("\uFF0C\u53EF\u901A\u8FC7"),t("code",null,"is-open"),n("\u53C2\u6570\u8BBE\u7F6E\u662F\u5426\u5F39\u51FA.")],-1),vt=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":is-open"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("isOpen"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"trigger"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("manually"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("manually control"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onClick"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Click Me"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" isOpen "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"onClick"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"("),n("isOpen"),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token operator"},"!"),n("isOpen"),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(" isOpen"),t("span",{class:"token punctuation"},","),n(" onClick "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),ft=V(`<h3 id="popover-\u53C2\u6570" tabindex="-1">Popover \u53C2\u6570 <a class="header-anchor" href="#popover-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u63CF\u8FF0</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">content</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u51FA\u6846\u7684\u663E\u793A\u5185\u5BB9</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">is-open</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u624B\u52A8\u63A7\u5236\u5F39\u51FA\u72B6\u6001</td><td style="text-align:left;"><a href="#%E6%89%8B%E5%8A%A8%E8%A7%A6%E5%8F%91">\u624B\u52A8\u89E6\u53D1</a></td></tr><tr><td style="text-align:left;">trigger</td><td style="text-align:left;"><a href="#triggertype">TriggerType</a></td><td style="text-align:left;">click</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u6846\u89E6\u53D1\u65B9\u5F0F</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9">\u81EA\u5B9A\u4E49\u5185\u5BB9</a></td></tr><tr><td style="text-align:left;">pop-type</td><td style="text-align:left;"><a href="#poptype">PopType</a></td><td style="text-align:left;">default</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u51FA\u6846\u7C7B\u578B\uFF0C\u6837\u5F0F\u4E0D\u540C</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">position</td><td style="text-align:left;"><a href="#placement">Placement[]</a></td><td style="text-align:left;">[&#39;bottom&#39;]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u63A7\u5236\u5F39\u6846\u51FA\u73B0\u7684\u65B9\u5411</td><td style="text-align:left;"><a href="#%E5%BC%B9%E5%87%BA%E4%BD%8D%E7%BD%AE">\u5F39\u51FA\u4F4D\u7F6E</a></td></tr><tr><td style="text-align:left;">align</td><td style="text-align:left;"><code>start | end | null</code></td><td style="text-align:left;">null</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u9ED8\u8BA4\u5C45\u4E2D\u5BF9\u9F50\u3002\u82E5\u6307\u5B9A<code>start</code>\u5BF9\u9F50\uFF0C\u5F53<code>start</code>\u4F4D\u7F6E\u653E\u4E0D\u4E0B\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8C03\u6574\u4E3A<code>end</code>\u5BF9\u9F50</td><td style="text-align:left;"><a href="#%E5%BC%B9%E5%87%BA%E4%BD%8D%E7%BD%AE">\u5F39\u51FA\u4F4D\u7F6E</a></td></tr><tr><td style="text-align:left;">offset</td><td style="text-align:left;"><code>number</code> | <a href="#offsetoptions">OffsetOptions</a></td><td style="text-align:left;">8</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6307\u5B9A\u76F8\u5BF9\u89E6\u53D1\u5143\u7D20\u7684\u504F\u79FB\u8DDD\u79BB</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">show-animation</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u52A8\u753B</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">mouse-enter-delay</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">150</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u4EC5\u5728 trigger \u4E3A hover \u7684\u65F6\u5019\uFF0C\u8BBE\u7F6E\u9F20\u6807\u79FB\u5165\u540E\u5EF6\u65F6\u591A\u4E45\u624D\u663E\u793A Popover\uFF0C\u5355\u4F4D\u662F <code>ms</code></td><td style="text-align:left;"><a href="#%E5%BB%B6%E6%97%B6%E8%A7%A6%E5%8F%91">\u5EF6\u65F6\u89E6\u53D1</a></td></tr><tr><td style="text-align:left;">mouse-leave-delay</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">100</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u4EC5\u5728 trigger \u4E3A hover \u7684\u65F6\u5019\uFF0C\u8BBE\u7F6E\u9F20\u6807\u79FB\u51FA\u540E\u5EF6\u65F6\u591A\u4E45\u624D\u9690\u85CF popover\uFF0C\u5355\u4F4D\u662F <code>ms</code></td><td style="text-align:left;"><a href="#%E5%BB%B6%E6%97%B6%E8%A7%A6%E5%8F%91">\u5EF6\u65F6\u89E6\u53D1</a></td></tr></tbody></table><h3 id="popover-\u63D2\u69FD" tabindex="-1">Popover \u63D2\u69FD <a class="header-anchor" href="#popover-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0\u540D</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">content</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9</td></tr><tr><td style="text-align:left;">reference</td><td style="text-align:left;">\u89E6\u53D1 Popover \u663E\u793A\u7684\u5143\u7D20\u5185\u5BB9</td></tr></tbody></table><h3 id="popover-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Popover \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#popover-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="triggertype" tabindex="-1">TriggerType <a class="header-anchor" href="#triggertype" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">TriggerType</span> <span class="token operator">=</span> <span class="token string">&#39;click&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;hover&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;manually&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="poptype" tabindex="-1">PopType <a class="header-anchor" href="#poptype" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">PopType</span> <span class="token operator">=</span> <span class="token string">&#39;success&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;error&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;warning&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;info&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="placement" tabindex="-1">Placement <a class="header-anchor" href="#placement" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">Placement</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&#39;top&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;right&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;bottom&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;left&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;top-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;top-end&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;right-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;right-end&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;bottom-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;bottom-end&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;left-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;left-end&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="offsetoptions" tabindex="-1">OffsetOptions <a class="header-anchor" href="#offsetoptions" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">OffsetOptions</span> <span class="token operator">=</span> <span class="token punctuation">{</span> mainAxis<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> crossAxis<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,13);function ht(s,o,e,a,p,f){const r=C("render-demo-0"),c=C("demo"),d=C("render-demo-1"),g=C("render-demo-2"),m=C("render-demo-3"),u=C("render-demo-4");return tt(),Z("div",null,[at,h(c,{sourceCode:`<template>
  <div class="popover-demo-item">
    <d-popover content="default">
      <template #reference>
        <d-button>default</d-button>
      </template>
    </d-popover>
    <d-popover content="info!" pop-type="info" :position="['top']">
      <template #reference>
        <d-button variant="solid">info</d-button>
      </template>
    </d-popover>
    <d-popover content="error!" pop-type="error" :position="['left']" style="z-index: 9999">
      <template #reference>
        <d-button variant="solid" color="danger">error</d-button>
      </template>
    </d-popover>
    <d-popover content="success!" pop-type="success" :position="['right']">
      <template #reference>
        <d-button>success</d-button>
      </template>
    </d-popover>
    <d-popover content="warning!" pop-type="warning">
      <template #reference>
        <d-button>warning</d-button>
      </template>
    </d-popover>
    <d-popover content="no-animation!" :show-animation="false" style="max-width: 100px">
      <template #reference>
        <d-button>no-animation</d-button>
      </template>
    </d-popover>
  </div>
</template>
<style>
.popover-demo-item > * {
  display: inline-block;
  margin-right: 8px;
}
</style>
`},{description:l(()=>[st]),highlight:l(()=>[et]),default:l(()=>[h(r)]),_:1}),ot,h(c,{sourceCode:`<template>
  <div class="popover-demo-item">
    <d-popover content="\u81EA\u5B9A\u4E49\u5185\u5BB9">
      <template #reference>
        <d-button variant="solid">click me!</d-button>
      </template>
    </d-popover>
    <d-popover content="\u81EA\u5B9A\u4E49\u5185\u5BB9" trigger="hover" style="background-color: #7693f5; color: #fff">
      <template #reference>
        <d-button>hover me!</d-button>
      </template>
    </d-popover>
  </div>
</template>
`},{description:l(()=>[pt]),highlight:l(()=>[ct]),default:l(()=>[h(d)]),_:1}),ut,h(c,{sourceCode:`<template>
  <div class="popover-demo-item-horizontal">
    <d-popover :position="['top-start']" align="start">
      <template #content>
        <div>
          <div>top-start</div>
          <div>top-start</div>
        </div>
      </template>
      <template #reference>
        <d-button style="width: 100px;">top-start</d-button>
      </template>
    </d-popover>
    <d-popover :position="['top']">
      <template #content>
        <div>top</div>
      </template>
      <template #reference>
        <d-button style="width: 100px;">top</d-button>
      </template>
    </d-popover>
    <d-popover :position="['top-end']" align="end">
      <template #content>
        <div>
          <div>top-end</div>
          <div>top-end</div>
        </div>
      </template>
      <template #reference>
        <d-button style="width: 100px;">top-end</d-button>
      </template>
    </d-popover>
  </div>

  <div class="popover-demo-vertical-wrapper">
    <div class="popover-demo-item-vertical">
      <d-popover :position="['left-start']" align="start">
        <template #content>
          <div>
            <div>left-start</div>
            <div>left-start</div>
          </div>
        </template>
        <template #reference>
          <d-button style="width: 100px;">left-start</d-button>
        </template>
      </d-popover>
      <d-popover :position="['left']">
        <template #content>
          <div>left</div>
        </template>
        <template #reference>
          <d-button style="width: 100px;">left</d-button>
        </template>
      </d-popover>
      <d-popover :position="['left-end']" align="end">
        <template #content>
          <div>
            <div>left-end</div>
            <div>left-end</div>
          </div>
        </template>
        <template #reference>
          <d-button style="width: 100px;">left-end</d-button>
        </template>
      </d-popover>
    </div>
    <div class="popover-demo-item-vertical">
      <d-popover :position="['right-start']" align="start">
        <template #content>
          <div>
            <div>right-start</div>
            <div>right-start</div>
          </div>
        </template>
        <template #reference>
          <d-button style="width: 100px;">right-start</d-button>
        </template>
      </d-popover>
      <d-popover :position="['right']">
        <template #content>
          <div>right</div>
        </template>
        <template #reference>
          <d-button style="width: 100px;">right</d-button>
        </template>
      </d-popover>
      <d-popover :position="['right-end']" align="end">
        <template #content>
          <div>
            <div>right-end</div>
            <div>right-end</div>
          </div>
        </template>
        <template #reference>
          <d-button style="width: 100px;">right-end</d-button>
        </template>
      </d-popover>
    </div>
  </div>
  <div class="popover-demo-item-horizontal">
    <d-popover :position="['bottom-start']" align="start">
      <template #content>
        <div>
          <div>bottom-start</div>
          <div>bottom-start</div>
        </div>
      </template>
      <template #reference>
        <d-button style="width: 100px;">bottom-start</d-button>
      </template>
    </d-popover>
    <d-popover :position="['bottom']">
      <template #content>
        <div>bottom</div>
      </template>
      <template #reference>
        <d-button style="width: 100px;">bottom</d-button>
      </template>
    </d-popover>
    <d-popover :position="['bottom-end']" align="end">
      <template #content>
        <div>
          <div>bottom-end</div>
          <div>bottom-end</div>
        </div>
      </template>
      <template #reference>
        <d-button style="width: 100px;">bottom-end</d-button>
      </template>
    </d-popover>
  </div>
</template>
<style>
.popover-demo-item-horizontal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin-bottom: 4px;
}
.popover-demo-item-horizontal > * {
  margin-right: 4px;
}
.popover-demo-vertical-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
}
.popover-demo-item-vertical {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
}
.popover-demo-item-vertical > * {
  margin-bottom: 4px;
}
</style>
`},{description:l(()=>[lt]),highlight:l(()=>[it]),default:l(()=>[h(g)]),_:1}),kt,h(c,{sourceCode:`<template>
  <div class="popover-demo-item">
    <d-popover :position="['bottom']" trigger="hover" :mouse-enter-delay="500">
      <template #content>
        <div>Mouse enter 500ms later.</div>
        show Me
      </template>
      <template #reference>
        <d-button variant="solid">MouseEnter delay 500ms</d-button>
      </template>
    </d-popover>
    <d-popover :position="['bottom']" trigger="hover" :mouse-leave-delay="2000">
      <template #content>
        <div>Mouse leave 2000ms later.</div>
      </template>
      <template #reference>
        <d-button>MouseLeave delay 2000ms</d-button>
      </template>
    </d-popover>
  </div>
</template>
`},{description:l(()=>[rt]),highlight:l(()=>[dt]),default:l(()=>[h(m)]),_:1}),gt,h(c,{sourceCode:`<template>
  <d-popover :is-open="isOpen" trigger="manually" content="manually control">
    <template #reference>
      <d-button @click="onClick">Click Me</d-button>
    </template>
  </d-popover>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const isOpen = ref(false);
    const onClick = () => (isOpen.value = !isOpen.value);

    return { isOpen, onClick };
  },
});
<\/script>
`},{description:l(()=>[mt]),highlight:l(()=>[vt]),default:l(()=>[h(u)]),_:1}),ft])}var Bt=Y(nt,[["render",ht]]);export{xt as __pageData,Bt as default};
