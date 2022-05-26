var z=Object.defineProperty;var i=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var k=(n,e,s)=>e in n?z(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s,g=(n,e)=>{for(var s in e||(e={}))$.call(e,s)&&k(n,s,e[s]);if(i)for(var s of i(e))I.call(e,s)&&k(n,s,e[s]);return n};import{_ as T,V as E,r as v,c as W,a as h,w as d,b as F,o as j,d as a,e as t}from"./app.0ce8509b.js";const L={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:n,createTextVNode:e,resolveDirective:s,openBlock:o,createElementBlock:u,withDirectives:p}=E,c={class:"dragdrop-card-container"},l={class:"dragdrop-card"},m=n("div",{class:"dragdrop-card-header"},"Draggable Item",-1),b={class:"dragdrop-card-block drag"},D={id:"draggable-item",class:"draggable-item"},_=[e("VSCode")],C={id:"draggable-item2",class:"draggable-item"},A=[e("Sublime")],f={class:"dragdrop-card"},B=[n("div",{class:"dragdrop-card-header"},"Drop Area",-1),n("div",{class:"dragdrop-card-block droppable"},null,-1)],x={class:"dragdrop-card"},y=[n("div",{class:"dragdrop-card-header"},"Drop Area With Sortable",-1),n("div",{class:"dragdrop-card-block"},null,-1)];function S(Y,Z){const r=s("d-draggable"),w=s("d-droppable"),N=s("d-sortable");return o(),u("div",null,[n("div",c,[n("div",l,[m,n("div",b,[p((o(),u("div",D,_)),[[r,{dragScope:"default-css",dragData:{item:"item",parent:"list1"}}]]),p((o(),u("div",C,A)),[[r,{dragScope:"default-css",dragData:{item:"item",parent:"list1"}}]])])]),p((o(),u("div",f,B)),[[w]]),p((o(),u("div",x,y)),[[N]])])])}const{defineComponent:q}=E,V=q({setup(){return{msg:"Dragdrop \u62D6\u62FD \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B"}}});return g({render:S},V)}()}},na='{"title":"Dragdrop \u62D6\u62FD","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"d-draggable \u6307\u4EE4","slug":"d-draggable-\u6307\u4EE4"},{"level":3,"title":"d-droppable \u6307\u4EE4","slug":"d-droppable-\u6307\u4EE4"}],"relativePath":"components/dragdrop/index.md","lastUpdated":1650439126569}',O=F('<h1 id="dragdrop-\u62D6\u62FD" tabindex="-1">Dragdrop \u62D6\u62FD <a class="header-anchor" href="#dragdrop-\u62D6\u62FD" aria-hidden="true">#</a></h1><p>\u62D6\u62FD\u7EC4\u4EF6\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u9700\u8981\u4F7F\u7528\u6570\u4E2A\u64CD\u4F5C\u6B65\u9AA4\uFF0C\u4E14\u6B65\u9AA4\u7684\u987A\u5E8F\u9700\u8981\u7075\u6D3B\u8C03\u6574\u65F6\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),P=a("div",null,"\u4ECE\u4E00\u4E2Acontainer\u62D6\u52A8\u5230\u53E6\u5916\u4E00\u4E2Acontainer\u3002",-1),U=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("template")]),a("span",{class:"token punctuation"},">")]),t(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("div")]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("dragdrop-card-container"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),t(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("div")]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("dragdrop-card"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),t(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("div")]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("dragdrop-card-header"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),t("Draggable Item"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("div")]),a("span",{class:"token punctuation"},">")]),t(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("div")]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("dragdrop-card-block drag"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),t(`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("div")]),t(),a("span",{class:"token attr-name"},"id"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("draggable-item"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("draggable-item"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token attr-name"},"v-d-draggable"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t(`{
          dragScope: `),a("span",{class:"token punctuation"},"'"),t("default-css"),a("span",{class:"token punctuation"},"'"),t(`,
          dragData: { item: `),a("span",{class:"token punctuation"},"'"),t("item"),a("span",{class:"token punctuation"},"'"),t(", parent: "),a("span",{class:"token punctuation"},"'"),t("list1"),a("span",{class:"token punctuation"},"'"),t(` },
        }`),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),t("VSCode"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("div")]),a("span",{class:"token punctuation"},">")]),t(`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("div")]),t(),a("span",{class:"token attr-name"},"id"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("draggable-item2"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("draggable-item"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token attr-name"},"v-d-draggable"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t(`{
          dragScope: `),a("span",{class:"token punctuation"},"'"),t("default-css"),a("span",{class:"token punctuation"},"'"),t(`,
          dragData: { item: `),a("span",{class:"token punctuation"},"'"),t("item"),a("span",{class:"token punctuation"},"'"),t(", parent: "),a("span",{class:"token punctuation"},"'"),t("list1"),a("span",{class:"token punctuation"},"'"),t(` },
        }`),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),t("Sublime"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("div")]),a("span",{class:"token punctuation"},">")]),t(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("div")]),a("span",{class:"token punctuation"},">")]),t(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("div")]),a("span",{class:"token punctuation"},">")]),t(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("div")]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("dragdrop-card"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token attr-name"},"v-d-droppable"),a("span",{class:"token punctuation"},">")]),t(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("div")]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("dragdrop-card-header"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),t("Drop Area"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("div")]),a("span",{class:"token punctuation"},">")]),t(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("div")]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("dragdrop-card-block droppable"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),t(`

      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("div")]),a("span",{class:"token punctuation"},">")]),t(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("div")]),a("span",{class:"token punctuation"},">")]),t(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("div")]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("dragdrop-card"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token attr-name"},"v-d-sortable"),a("span",{class:"token punctuation"},">")]),t(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("div")]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("dragdrop-card-header"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),t("Drop Area With Sortable"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("div")]),a("span",{class:"token punctuation"},">")]),t(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("div")]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("dragdrop-card-block"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("div")]),a("span",{class:"token punctuation"},">")]),t(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("div")]),a("span",{class:"token punctuation"},">")]),t(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("div")]),a("span",{class:"token punctuation"},">")]),t(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("template")]),a("span",{class:"token punctuation"},">")]),t(`

`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[t(`
`),a("span",{class:"token keyword"},"import"),t(),a("span",{class:"token punctuation"},"{"),t(" defineComponent "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token keyword"},"from"),t(),a("span",{class:"token string"},"'vue'"),t(`

`),a("span",{class:"token keyword"},"export"),t(),a("span",{class:"token keyword"},"default"),t(),a("span",{class:"token function"},"defineComponent"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),t(`
  `),a("span",{class:"token function"},"setup"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t(`
    `),a("span",{class:"token keyword"},"return"),t(),a("span",{class:"token punctuation"},"{"),t(`
      `),a("span",{class:"token literal-property property"},"msg"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},"'Dragdrop \u62D6\u62FD \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B'"),t(`
    `),a("span",{class:"token punctuation"},"}"),t(`
  `),a("span",{class:"token punctuation"},"}"),t(`
`),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),t(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("script")]),a("span",{class:"token punctuation"},">")]),t(`

`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("style")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token style"},[a("span",{class:"token language-css"},[t(`
`),a("span",{class:"token selector"},".dragdrop-card-container"),t(),a("span",{class:"token punctuation"},"{"),t(`
  `),a("span",{class:"token property"},"display"),a("span",{class:"token punctuation"},":"),t(" flex"),a("span",{class:"token punctuation"},";"),t(`
`),a("span",{class:"token punctuation"},"}"),t(`

`),a("span",{class:"token selector"},".dragdrop-card"),t(),a("span",{class:"token punctuation"},"{"),t(`
  `),a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),t(" 12px"),a("span",{class:"token punctuation"},";"),t(`
  `),a("span",{class:"token property"},"margin-right"),a("span",{class:"token punctuation"},":"),t(" 12px"),a("span",{class:"token punctuation"},";"),t(`
  `),a("span",{class:"token property"},"border"),a("span",{class:"token punctuation"},":"),t(" 1px solid #dfe1e6"),a("span",{class:"token punctuation"},";"),t(`
  `),a("span",{class:"token property"},"border"),a("span",{class:"token punctuation"},":"),t(" 1px solid "),a("span",{class:"token function"},"var"),a("span",{class:"token punctuation"},"("),t("--devui-dividing-line"),a("span",{class:"token punctuation"},","),t("#dfe1e6"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t(`
`),a("span",{class:"token punctuation"},"}"),t(`

`),a("span",{class:"token selector"},".dragdrop-card .dragdrop-card-header"),t(),a("span",{class:"token punctuation"},"{"),t(`
  `),a("span",{class:"token property"},"padding-bottom"),a("span",{class:"token punctuation"},":"),t(" 12px"),a("span",{class:"token punctuation"},";"),t(`
  `),a("span",{class:"token property"},"font-size"),a("span",{class:"token punctuation"},":"),t(" 12px"),a("span",{class:"token punctuation"},";"),t(`
  `),a("span",{class:"token property"},"font-size"),a("span",{class:"token punctuation"},":"),t(),a("span",{class:"token function"},"var"),a("span",{class:"token punctuation"},"("),t("--devui-font-size"),a("span",{class:"token punctuation"},","),t("12px"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t(`
`),a("span",{class:"token punctuation"},"}"),t(`

`),a("span",{class:"token selector"},".draggable-item"),t(),a("span",{class:"token punctuation"},"{"),t(`
  `),a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),t(" 0 16px"),a("span",{class:"token punctuation"},";"),t(`
  `),a("span",{class:"token property"},"height"),a("span",{class:"token punctuation"},":"),t(" 30px"),a("span",{class:"token punctuation"},";"),t(`
  `),a("span",{class:"token property"},"border"),a("span",{class:"token punctuation"},":"),t(" 1px solid #5e7ce0"),a("span",{class:"token punctuation"},";"),t(`
  `),a("span",{class:"token property"},"border"),a("span",{class:"token punctuation"},":"),t(" 1px solid "),a("span",{class:"token function"},"var"),a("span",{class:"token punctuation"},"("),t("--devui-brand"),a("span",{class:"token punctuation"},","),t("#5e7ce0"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t(`
  `),a("span",{class:"token property"},"color"),a("span",{class:"token punctuation"},":"),t(" #fff"),a("span",{class:"token punctuation"},";"),t(`
  `),a("span",{class:"token property"},"color"),a("span",{class:"token punctuation"},":"),t(),a("span",{class:"token function"},"var"),a("span",{class:"token punctuation"},"("),t("--devui-light-text"),a("span",{class:"token punctuation"},","),t("#fff"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t(`
  `),a("span",{class:"token property"},"margin-bottom"),a("span",{class:"token punctuation"},":"),t(" 5px"),a("span",{class:"token punctuation"},";"),t(`
  `),a("span",{class:"token property"},"line-height"),a("span",{class:"token punctuation"},":"),t(" 1.5"),a("span",{class:"token punctuation"},";"),t(`
  `),a("span",{class:"token property"},"background-color"),a("span",{class:"token punctuation"},":"),t(" #5e7ce0"),a("span",{class:"token punctuation"},";"),t(`
  `),a("span",{class:"token property"},"background-color"),a("span",{class:"token punctuation"},":"),t(),a("span",{class:"token function"},"var"),a("span",{class:"token punctuation"},"("),t("--devui-brand"),a("span",{class:"token punctuation"},","),t("#5e7ce0"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t(`
  `),a("span",{class:"token property"},"display"),a("span",{class:"token punctuation"},":"),t(" flex"),a("span",{class:"token punctuation"},";"),t(`
  `),a("span",{class:"token property"},"align-items"),a("span",{class:"token punctuation"},":"),t(" center"),a("span",{class:"token punctuation"},";"),t(`
`),a("span",{class:"token punctuation"},"}"),t(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("style")]),a("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),G=F('<h3 id="d-draggable-\u6307\u4EE4" tabindex="-1">d-draggable \u6307\u4EE4 <a class="header-anchor" href="#d-draggable-\u6307\u4EE4" aria-hidden="true">#</a></h3><p>d-draggable \u53C2\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th><th>\u5168\u5C40\u914D\u7F6E\u9879</th></tr></thead><tbody><tr><td>dragData</td><td>any</td><td>--</td><td>\u53EF\u9009\uFF0C\u8F6C\u9012\u7ED9 DropEvent\u4E8B\u4EF6\u7684\u6570\u636E</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td>dragScope</td><td>string | Array&lt;string&gt;</td><td>&#39;default&#39;</td><td>\u53EF\u9009\uFF0C\u9650\u5236 drop \u7684\u4F4D\u7F6E\uFF0C\u5FC5\u987B\u5339\u914D\u5BF9\u5E94\u7684 dropScope</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr></tbody></table><p>d-draggable \u4E8B\u4EF6</p><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>dragStartEvent</td><td>EventEmitter&lt;DragEvent&gt;</td><td>\u5F00\u59CB\u62D6\u52A8\u7684 DragStart \u4E8B\u4EF6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>dragEndEvent</td><td>EventEmitter&lt;DragEvent&gt;</td><td>\u62D6\u52A8\u7ED3\u675F\u7684 DragEnd \u4E8B\u4EF6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>dropEndEvent</td><td>EventEmitter&lt;DragEvent&gt;</td><td>\u653E\u7F6E\u7ED3\u675F\u7684 Drop \u4E8B\u4EF6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h3 id="d-droppable-\u6307\u4EE4" tabindex="-1">d-droppable \u6307\u4EE4 <a class="header-anchor" href="#d-droppable-\u6307\u4EE4" aria-hidden="true">#</a></h3><p>d-droppable \u53C2\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th><th>\u5168\u5C40\u914D\u7F6E\u9879</th></tr></thead><tbody><tr><td>dropScope</td><td>string</td><td>Array&lt;string&gt;</td><td>&#39;default&#39;</td><td>\u53EF\u9009\uFF0C\u9650\u5236 drop \u7684\u533A\u57DF\uFF0C\u5BF9\u5E94 dragScope</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><p>d-droppable \u4E8B\u4EF6</p><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>dragEnterEvent</td><td>EventEmitter&lt;DragEvent&gt;</td><td>drag \u5143\u7D20\u8FDB\u5165\u7684 dragenter \u4E8B\u4EF6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>dragOverEvent</td><td>EventEmitter&lt;DragEvent&gt;</td><td>drag \u5143\u7D20\u5728 drop \u533A\u57DF\u4E0A\u7684 dragover \u4E8B\u4EF6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>dragLeaveEvent</td><td>EventEmitter&lt;DragEvent&gt;</td><td>drag \u5143\u7D20\u79BB\u5F00\u7684 dragleave \u4E8B\u4EF6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>dropEvent</td><td>EventEmitter&lt;DropEvent&gt;</td><td>\u653E\u7F6E\u4E00\u4E2A\u5143\u7D20, \u63A5\u6536\u7684\u4E8B\u4EF6\uFF0C\u5176\u4E2D nativeEvent \u8868\u793A\u539F\u751F\u7684 drop \u4E8B\u4EF6\uFF0C\u5176\u4ED6\u89C1\u5B9A\u4E49\u6CE8\u91CA</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table>',10);function H(n,e,s,o,u,p){const c=v("render-demo-0"),l=v("demo");return j(),W("div",null,[O,h(l,{sourceCode:`<template>
  <div class="dragdrop-card-container">
    <div class="dragdrop-card">
      <div class="dragdrop-card-header">Draggable Item</div>
      <div class="dragdrop-card-block drag">
        <div id="draggable-item" class="draggable-item" v-d-draggable="{
          dragScope: 'default-css',
          dragData: { item: 'item', parent: 'list1' },
        }">VSCode</div>
        <div id="draggable-item2" class="draggable-item" v-d-draggable="{
          dragScope: 'default-css',
          dragData: { item: 'item', parent: 'list1' },
        }">Sublime</div>
      </div>
    </div>
    <div class="dragdrop-card" v-d-droppable>
      <div class="dragdrop-card-header">Drop Area</div>
      <div class="dragdrop-card-block droppable">

      </div>
    </div>
    <div class="dragdrop-card" v-d-sortable>
      <div class="dragdrop-card-header">Drop Area With Sortable</div>
      <div class="dragdrop-card-block"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      msg: 'Dragdrop \u62D6\u62FD \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B'
    }
  }
})
<\/script>

<style>
.dragdrop-card-container {
  display: flex;
}

.dragdrop-card {
  padding: 12px;
  margin-right: 12px;
  border: 1px solid #dfe1e6;
  border: 1px solid var(--devui-dividing-line,#dfe1e6);
}

.dragdrop-card .dragdrop-card-header {
  padding-bottom: 12px;
  font-size: 12px;
  font-size: var(--devui-font-size,12px);
}

.draggable-item {
  padding: 0 16px;
  height: 30px;
  border: 1px solid #5e7ce0;
  border: 1px solid var(--devui-brand,#5e7ce0);
  color: #fff;
  color: var(--devui-light-text,#fff);
  margin-bottom: 5px;
  line-height: 1.5;
  background-color: #5e7ce0;
  background-color: var(--devui-brand,#5e7ce0);
  display: flex;
  align-items: center;
}
</style>
`},{description:d(()=>[P]),highlight:d(()=>[U]),default:d(()=>[h(c)]),_:1}),G])}var sa=T(L,[["render",H]]);export{na as __pageData,sa as default};
