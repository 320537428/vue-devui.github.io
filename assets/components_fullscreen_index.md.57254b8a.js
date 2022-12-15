var O=Object.defineProperty;var x=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var B=(o,e,a)=>e in o?O(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,y=(o,e)=>{for(var a in e||(e={}))D.call(e,a)&&B(o,a,e[a]);if(x)for(var a of x(e))N.call(e,a)&&B(o,a,e[a]);return o};import{_ as V,r as _,o as I,c as q,a as E,w as F,b as w,d as n,e as t,V as h}from"./app.d8dfdb43.js";const z={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:o,createTextVNode:e,resolveComponent:a,withCtx:i,createVNode:r,createElementVNode:C,openBlock:f,createElementBlock:d}=h,g={class:"demo-fullscreen-container"};function b(l,s){const u=a("d-button"),k=a("d-fullscreen");return f(),d("div",null,[r(k,{modelValue:l.isOpen,"onUpdate:modelValue":s[1]||(s[1]=c=>l.isOpen=c),"z-index":20},{default:i(()=>[C("div",g,[r(u,{onClick:s[0]||(s[0]=c=>l.isOpen=!l.isOpen)},{default:i(()=>[e(o(l.btnContent),1)]),_:1})])]),_:1},8,["modelValue"])])}const{ref:v,watch:m}=h;return y({render:b},{setup(){const l=v(!1),s=v("\u5168\u5C4F");return m(l,u=>{u?s.value="\u9000\u51FA\u5168\u5C4F":s.value="\u5168\u5C4F"}),{isOpen:l,btnContent:s}}})}(),"render-demo-1":function(){const{toDisplayString:o,createTextVNode:e,resolveComponent:a,withCtx:i,createVNode:r,createElementVNode:C,openBlock:f,createElementBlock:d}=h,g={class:"demo-fullscreen-container"},b={class:"demo-fullscreen-container"};function v(s,u){const k=a("d-button"),c=a("d-fullscreen");return f(),d("div",null,[r(c,{modelValue:s.isOpenNormal,"onUpdate:modelValue":u[1]||(u[1]=p=>s.isOpenNormal=p),"z-index":20},{default:i(()=>[C("div",g,[r(k,{onClick:u[0]||(u[0]=p=>s.isOpenNormal=!s.isOpenNormal)},{default:i(()=>[e(o(s.btnContentNormal),1)]),_:1})])]),_:1},8,["modelValue"]),r(c,{modelValue:s.isOpenImmersive,"onUpdate:modelValue":u[3]||(u[3]=p=>s.isOpenImmersive=p),mode:"immersive"},{default:i(()=>[C("div",b,[r(k,{onClick:u[2]||(u[2]=p=>s.isOpenImmersive=!s.isOpenImmersive)},{default:i(()=>[e(o(s.btnContentImmersive),1)]),_:1})])]),_:1},8,["modelValue"])])}const{ref:m,watch:A}=h;return y({render:v},{setup(){const s=m(!1),u=m("\u666E\u901A\u5168\u5C4F");A(s,p=>{p?u.value="\u9000\u51FA\u5168\u5C4F":u.value="\u666E\u901A\u5168\u5C4F"});const k=m(!1),c=m("\u6C89\u6D78\u5F0F\u5168\u5C4F");return A(k,p=>{p?c.value="\u9000\u51FA\u5168\u5C4F":c.value="\u6C89\u6D78\u5F0F\u5168\u5C4F"}),{isOpenNormal:s,btnContentNormal:u,isOpenImmersive:k,btnContentImmersive:c}}})}()}},L='{"title":"Fullscreen \u5168\u5C4F","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u5168\u5C4F\u6A21\u5F0F","slug":"\u5168\u5C4F\u6A21\u5F0F"},{"level":3,"title":"Fullscreen \u53C2\u6570","slug":"fullscreen-\u53C2\u6570"},{"level":3,"title":"Fullscreen \u63D2\u69FD","slug":"fullscreen-\u63D2\u69FD"}],"relativePath":"components/fullscreen/index.md","lastUpdated":1662171945326}',S=w('<h1 id="fullscreen-\u5168\u5C4F" tabindex="-1">Fullscreen \u5168\u5C4F <a class="header-anchor" href="#fullscreen-\u5168\u5C4F" aria-hidden="true">#</a></h1><p>\u5168\u5C4F\u7EC4\u4EF6\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u7528\u6237\u9700\u8981\u5C06\u67D0\u4E00\u533A\u57DF\u8FDB\u884C\u5168\u5C4F\u5C55\u793A\u65F6\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),$=n("div",null,[t("\u5C06\u9700\u8981\u5168\u5C4F\u7684\u5BB9\u5668\u5305\u88F9\u5728"),n("code",null,"<d-fullscreen>"),t("\u6807\u7B7E\u91CC\u9762\uFF0C\u901A\u8FC7"),n("code",null,"v-model"),t("\u63A7\u5236\u5168\u5C4F\u72B6\u6001\uFF0C\u4F20\u5165"),n("code",null,"true"),t("\u5219\u542F\u52A8\u5168\u5C4F\uFF0C\u8BBE\u7F6E\u6210"),n("code",null,"false"),t("\u5219\u9000\u51FA\u5168\u5C4F\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u6309\u4E0B"),n("code",null,"ESC"),t("\u5FEB\u6377\u952E\u63A8\u51FA\u5168\u5C4F\u3002\u672C\u4F8B\u8FD8\u5C55\u793A\u4E86\u81EA\u5B9A\u4E49\u5C42\u7EA7"),n("code",null,"z-index"),t("\u7684\u7528\u6CD5\u3002")],-1),T=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-fullscreen")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isOpen"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":z-index"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("20"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-fullscreen-container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isOpen = !isOpen"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ btnContent }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-fullscreen")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" isOpen "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" btnContent "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5168\u5C4F'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("isOpen"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"newVal"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("newVal"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        btnContent`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'\u9000\u51FA\u5168\u5C4F'"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
        btnContent`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'\u5168\u5C4F'"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      isOpen`),n("span",{class:"token punctuation"},","),t(`
      btnContent`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".demo-fullscreen-container"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),U=n("h3",{id:"\u5168\u5C4F\u6A21\u5F0F",tabindex:"-1"},[t("\u5168\u5C4F\u6A21\u5F0F "),n("a",{class:"header-anchor",href:"#\u5168\u5C4F\u6A21\u5F0F","aria-hidden":"true"},"#")],-1),j=n("div",null,[t("\u901A\u8FC7"),n("code",null,"mode"),t("\u8BBE\u7F6E\u5168\u5C4F\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A"),n("code",null,"normal"),t("\u666E\u901A\u5168\u5C4F\uFF0C\u5168\u5C4F\u4E4B\u540E\u5BB9\u5668\u5C06\u5145\u6EE1\u6574\u4E2A\u6D4F\u89C8\u5668\u7A97\u53E3\uFF0C"),n("code",null,"mode"),t("\u8BBE\u7F6E\u6210"),n("code",null,"immersive"),t("\u53EF\u4EE5\u542F\u7528\u6C89\u6D78\u5F0F\u5168\u5C4F\uFF0C\u8BA9\u5BB9\u5668\u5145\u6EE1\u6574\u4E2A\u7535\u8111\u5C4F\u5E55\u3002"),n("br"),t("\u4E0D\u7BA1\u662F\u666E\u901A\u5168\u5C4F\u8FD8\u662F\u6C89\u6D78\u5F0F\u5168\u5C4F\uFF0C\u90FD\u652F\u6301\u6309\u4E0B\u5FEB\u6377\u952E"),n("code",null,"ESC"),t("\u9000\u51FA\u5168\u5C4F\u3002")],-1),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-fullscreen")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isOpenNormal"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":z-index"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("20"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-fullscreen-container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isOpenNormal = !isOpenNormal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ btnContentNormal }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-fullscreen")]),n("span",{class:"token punctuation"},">")]),t(`
  
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-fullscreen")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isOpenImmersive"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("immersive"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-fullscreen-container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isOpenImmersive = !isOpenImmersive"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ btnContentImmersive }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-fullscreen")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" isOpenNormal "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" btnContentNormal "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u666E\u901A\u5168\u5C4F'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("isOpenNormal"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"newVal"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("newVal"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        btnContentNormal`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'\u9000\u51FA\u5168\u5C4F'"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
        btnContentNormal`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'\u666E\u901A\u5168\u5C4F'"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" isOpenImmersive "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" btnContentImmersive "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u6C89\u6D78\u5F0F\u5168\u5C4F'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("isOpenImmersive"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"newVal"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("newVal"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        btnContentImmersive`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'\u9000\u51FA\u5168\u5C4F'"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
        btnContentImmersive`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'\u6C89\u6D78\u5F0F\u5168\u5C4F'"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      isOpenNormal`),n("span",{class:"token punctuation"},","),t(`
      btnContentNormal`),n("span",{class:"token punctuation"},","),t(`
      isOpenImmersive`),n("span",{class:"token punctuation"},","),t(`
      btnContentImmersive`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),G=w('<h3 id="fullscreen-\u53C2\u6570" tabindex="-1">Fullscreen \u53C2\u6570 <a class="header-anchor" href="#fullscreen-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u542F\u52A8\u5168\u5C4F</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">mode</td><td style="text-align:left;"><code>&#39;normal&#39; | &#39;immersive&#39;</code></td><td style="text-align:left;">&#39;normal&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u5168\u5C4F\u6A21\u5F0F</td><td style="text-align:left;"><a href="#%E5%85%A8%E5%B1%8F%E6%A8%A1%E5%BC%8F">\u5168\u5C4F\u6A21\u5F0F</a></td></tr><tr><td style="text-align:left;">z-index</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">10</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u5168\u5C4F\u5C42\u7EA7</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h3 id="fullscreen-\u63D2\u69FD" tabindex="-1">Fullscreen \u63D2\u69FD <a class="header-anchor" href="#fullscreen-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u63D2\u69FD\u540D</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">\u9ED8\u8BA4\u63D2\u69FD\uFF0C\u5168\u5C4F\u5BB9\u5668</td><td style="text-align:left;">--</td></tr></tbody></table>',4);function H(o,e,a,i,r,C){const f=_("render-demo-0"),d=_("demo"),g=_("render-demo-1");return I(),q("div",null,[S,E(d,{sourceCode:`<template>
  <d-fullscreen v-model="isOpen" :z-index="20">
    <div class="demo-fullscreen-container">
      <d-button @click="isOpen = !isOpen">{{ btnContent }}</d-button>
    </div>
  </d-fullscreen>
</template>
<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const isOpen = ref(false);
    const btnContent = ref('\u5168\u5C4F');

    watch(isOpen, (newVal) => {
      if (newVal) {
        btnContent.value = '\u9000\u51FA\u5168\u5C4F';
      } else {
        btnContent.value = '\u5168\u5C4F';
      }
    });

    return {
      isOpen,
      btnContent,
    };
  },
};
<\/script>
<style>
.demo-fullscreen-container {
  margin: 8px;
}
</style>
`},{description:F(()=>[$]),highlight:F(()=>[T]),default:F(()=>[E(f)]),_:1}),U,E(d,{sourceCode:`<template>
  <d-fullscreen v-model="isOpenNormal" :z-index="20">
  <div class="demo-fullscreen-container">
      <d-button @click="isOpenNormal = !isOpenNormal">{{ btnContentNormal }}</d-button>
    </div>
  </d-fullscreen>
  
  <d-fullscreen v-model="isOpenImmersive" mode="immersive">
  <div class="demo-fullscreen-container">
      <d-button @click="isOpenImmersive = !isOpenImmersive">{{ btnContentImmersive }}</d-button>
    </div>
  </d-fullscreen>
</template>
<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const isOpenNormal = ref(false);
    const btnContentNormal = ref('\u666E\u901A\u5168\u5C4F');

    watch(isOpenNormal, (newVal) => {
      if (newVal) {
        btnContentNormal.value = '\u9000\u51FA\u5168\u5C4F';
      } else {
        btnContentNormal.value = '\u666E\u901A\u5168\u5C4F';
      }
    });

    const isOpenImmersive = ref(false);
    const btnContentImmersive = ref('\u6C89\u6D78\u5F0F\u5168\u5C4F');

    watch(isOpenImmersive, (newVal) => {
      if (newVal) {
        btnContentImmersive.value = '\u9000\u51FA\u5168\u5C4F';
      } else {
        btnContentImmersive.value = '\u6C89\u6D78\u5F0F\u5168\u5C4F';
      }
    });

    return {
      isOpenNormal,
      btnContentNormal,
      isOpenImmersive,
      btnContentImmersive,
    };
  },
};
<\/script>
`},{description:F(()=>[j]),highlight:F(()=>[P]),default:F(()=>[E(g)]),_:1}),G])}var M=V(z,[["render",H]]);export{L as __pageData,M as default};
