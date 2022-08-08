import{V as v}from"./framework.3495a366.js";import{_ as q,f as w,G as S,H as z,b as C,a1 as r,a3 as y,I as t,k as n}from"./plugin-vue_export-helper.ebedbb15.js";import"./framework.d333a127.js";const L={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:g,createVNode:o,openBlock:m,createElementBlock:u}=v;function p(a,s){const e=g("d-switch");return m(),u("div",null,[o(e,{modelValue:a.checkedSmall,"onUpdate:modelValue":s[0]||(s[0]=c=>a.checkedSmall=c),size:"sm"},null,8,["modelValue"]),o(e,{modelValue:a.uncheckedMiddle,"onUpdate:modelValue":s[1]||(s[1]=c=>a.uncheckedMiddle=c)},null,8,["modelValue"]),o(e,{modelValue:a.checkedLarge,"onUpdate:modelValue":s[2]||(s[2]=c=>a.checkedLarge=c),size:"lg"},null,8,["modelValue"])])}const{defineComponent:f,ref:l}=v,i=f({setup(){const a=l(!0),s=l(!1),e=l(!0);return{checkedSmall:a,uncheckedMiddle:s,checkedLarge:e}}});return{render:p,...i}}(),"render-demo-1":function(){const{resolveComponent:g,createVNode:o,openBlock:m,createElementBlock:u}=v;function p(a,s){const e=g("d-switch");return m(),u("div",null,[o(e,{modelValue:a.checkedDisabled,"onUpdate:modelValue":s[0]||(s[0]=c=>a.checkedDisabled=c),disabled:!0},null,8,["modelValue"]),o(e,{modelValue:a.checkedDisabled1,"onUpdate:modelValue":s[1]||(s[1]=c=>a.checkedDisabled1=c),disabled:!0},null,8,["modelValue"])])}const{defineComponent:f,ref:l}=v,i=f({setup(){const a=l(!0),s=l(!1);return{checkedDisabled:a,checkedDisabled1:s}}});return{render:p,...i}}(),"render-demo-2":function(){const{resolveComponent:g,createVNode:o,createElementVNode:m,withCtx:u,createTextVNode:p,openBlock:f,createElementBlock:l}=v,i=m("i",{class:"icon-right"},null,-1),a=m("i",{class:"icon-error"},null,-1),s=p("\u5F00"),e=p("\u5173"),c=p("\u5F00"),B=p("\u5173"),A=p("\u5F00"),V=p("\u5173");function _(k,d){const E=g("d-switch");return f(),l("div",null,[o(E,{modelValue:k.checkedColor,"onUpdate:modelValue":d[0]||(d[0]=h=>k.checkedColor=h),color:"#FECC55"},null,8,["modelValue"]),o(E,{color:"#50D4AB",modelValue:k.checkedIcon,"onUpdate:modelValue":d[1]||(d[1]=h=>k.checkedIcon=h)},{checkedContent:u(()=>[i]),uncheckedContent:u(()=>[a]),_:1},8,["modelValue"]),o(E,{modelValue:k.checkedSmContent,"onUpdate:modelValue":d[2]||(d[2]=h=>k.checkedSmContent=h),size:"sm"},{checkedContent:u(()=>[s]),uncheckedContent:u(()=>[e]),_:1},8,["modelValue"]),o(E,{modelValue:k.checkedContent,"onUpdate:modelValue":d[3]||(d[3]=h=>k.checkedContent=h)},{checkedContent:u(()=>[c]),uncheckedContent:u(()=>[B]),_:1},8,["modelValue"]),o(E,{modelValue:k.checkedLgContent,"onUpdate:modelValue":d[4]||(d[4]=h=>k.checkedLgContent=h),size:"lg"},{checkedContent:u(()=>[A]),uncheckedContent:u(()=>[V]),_:1},8,["modelValue"])])}const{defineComponent:b,ref:F}=v,x=b({setup(){const k=F(!0),d=F(!1),E=F(!1),h=F(!1),D=F(!0);return{checkedColor:k,checkedContent:d,checkedSmContent:E,checkedLgContent:h,checkedIcon:D}}});return{render:_,...x}}(),"render-demo-3":function(){const{resolveComponent:g,createVNode:o,openBlock:m,createElementBlock:u}=v;function p(a,s){const e=g("d-switch");return m(),u("div",null,[o(e,{modelValue:a.activeValue1,"onUpdate:modelValue":s[0]||(s[0]=c=>a.activeValue1=c),"active-value":"\u6253\u5F00","inactive-value":"\u5173\u95ED"},null,8,["modelValue"]),o(e,{modelValue:a.activeValue2,"onUpdate:modelValue":s[1]||(s[1]=c=>a.activeValue2=c),"active-value":1,"inactive-value":0},null,8,["modelValue"]),o(e,{modelValue:a.activeValue3,"onUpdate:modelValue":s[2]||(s[2]=c=>a.activeValue3=c),"active-value":!0,"inactive-value":!1},null,8,["modelValue"])])}const{defineComponent:f,ref:l}=v,i=f({setup(){const a=l("\u6253\u5F00"),s=l(0),e=l(!0);return{activeValue1:a,activeValue2:s,activeValue3:e}}});return{render:p,...i}}()}},Y='{"title":"Switch \u5F00\u5173","description":"","frontmatter":{},"headers":[{"level":3,"title":"size","slug":"size"},{"level":3,"title":"disabled","slug":"disabled"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6837\u5F0F","slug":"\u81EA\u5B9A\u4E49\u6837\u5F0F"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u7ED1\u5B9A\u503C","slug":"\u81EA\u5B9A\u4E49\u7ED1\u5B9A\u503C"},{"level":3,"title":"Switch \u53C2\u6570","slug":"switch-\u53C2\u6570"},{"level":3,"title":"Switch \u4E8B\u4EF6","slug":"switch-\u4E8B\u4EF6"},{"level":3,"title":"Switch \u63D2\u69FD","slug":"switch-\u63D2\u69FD"}],"relativePath":"components/switch/index.md","lastUpdated":1659949279356}',N=y('<h1 id="switch-\u5F00\u5173" tabindex="-1">Switch \u5F00\u5173 <a class="header-anchor" href="#switch-\u5F00\u5173" aria-hidden="true">#</a></h1><p>\u5F00/\u5173\u5207\u6362\u7EC4\u4EF6\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u4E24\u79CD\u72B6\u6001\u9700\u8981\u6765\u56DE\u5207\u6362\u63A7\u5236\u65F6\uFF0C\u6BD4\u5982\u542F\u7528/\u7981\u7528\u3002</p><h3 id="size" tabindex="-1">size <a class="header-anchor" href="#size" aria-hidden="true">#</a></h3>',5),U=t("div",null,[n("size \u53EF\u9009\uFF1A"),t("code",null,"sm | md | lg"),n("\uFF0C\u9ED8\u8BA4\u4E3A"),t("code",null,"md")],-1),I=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("checkedSmall"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sm"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("uncheckedMiddle"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("checkedLarge"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("lg"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" checkedSmall "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" uncheckedMiddle "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" checkedLarge "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      checkedSmall`),t("span",{class:"token punctuation"},","),n(`
      uncheckedMiddle`),t("span",{class:"token punctuation"},","),n(`
      checkedLarge`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),n(),t("span",{class:"token attr-name"},"scoped"),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("scss"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".devui-switch:not(:last-of-type)"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),n(" 5px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),M=t("h3",{id:"disabled",tabindex:"-1"},[n("disabled "),t("a",{class:"header-anchor",href:"#disabled","aria-hidden":"true"},"#")],-1),j=t("div",null,"\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u5F00\u5173\uFF0C\u9ED8\u8BA4\u4E3A false",-1),$=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("checkedDisabled"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":disabled"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("checkedDisabled1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":disabled"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" checkedDisabled "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" checkedDisabled1 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      checkedDisabled`),t("span",{class:"token punctuation"},","),n(`
      checkedDisabled1`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),T=t("h3",{id:"\u81EA\u5B9A\u4E49\u6837\u5F0F",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u6837\u5F0F "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6837\u5F0F","aria-hidden":"true"},"#")],-1),G=t("div",null,"\u53EF\u9009\uFF0C\u53EF\u8BBE\u7F6E\u6587\u5B57\u8BF4\u660E/\u56FE\u6807",-1),H=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("checkedColor"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("#FECC55"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("#50D4AB"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("checkedIcon"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#checkedContent"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("i")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("icon-right"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("i")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#uncheckedContent"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("i")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("icon-error"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("i")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("checkedSmContent"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sm"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#checkedContent"),t("span",{class:"token punctuation"},">")]),n("\u5F00"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#uncheckedContent"),t("span",{class:"token punctuation"},">")]),n("\u5173"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("checkedContent"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#checkedContent"),t("span",{class:"token punctuation"},">")]),n("\u5F00"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#uncheckedContent"),t("span",{class:"token punctuation"},">")]),n("\u5173"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("checkedLgContent"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("lg"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#checkedContent"),t("span",{class:"token punctuation"},">")]),n("\u5F00"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#uncheckedContent"),t("span",{class:"token punctuation"},">")]),n("\u5173"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" checkedColor "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" checkedContent "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" checkedSmContent "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" checkedLgContent "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" checkedIcon "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      checkedColor`),t("span",{class:"token punctuation"},","),n(`
      checkedContent`),t("span",{class:"token punctuation"},","),n(`
      checkedSmContent`),t("span",{class:"token punctuation"},","),n(`
      checkedLgContent`),t("span",{class:"token punctuation"},","),n(`
      checkedIcon`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),P=t("h3",{id:"\u81EA\u5B9A\u4E49\u7ED1\u5B9A\u503C",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u7ED1\u5B9A\u503C "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u7ED1\u5B9A\u503C","aria-hidden":"true"},"#")],-1),J=t("div",null,"switch \u6253\u5F00\u5173\u95ED\u65F6\u53EF\u4EE5\u81EA\u5B9A\u4E49\u503C\uFF0C\u6253\u5F00\u65F6\u4E3A active-value\uFF0C\u5173\u95ED\u65F6\u4E3A inactive-value",-1),K=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("activeValue1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"active-value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u6253\u5F00"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"inactive-value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u5173\u95ED"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("activeValue2"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":active-value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":inactive-value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("0"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("activeValue3"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":active-value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":inactive-value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("false"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" activeValue1 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'\u6253\u5F00'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" activeValue2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" activeValue3 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      activeValue1`),t("span",{class:"token punctuation"},","),n(`
      activeValue2`),t("span",{class:"token punctuation"},","),n(`
      activeValue3`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),O=y('<h3 id="switch-\u53C2\u6570" tabindex="-1">Switch \u53C2\u6570 <a class="header-anchor" href="#switch-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;"><code>string| number |boolean</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u7ED1\u5B9A\u503C</td><td style="text-align:left;"><a href="#size">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><code>sm | md | lg</code></td><td style="text-align:left;"><code>md</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F00\u5173\u5C3A\u5BF8\u5927\u5C0F</td><td style="text-align:left;"><a href="#size">size</a></td></tr><tr><td style="text-align:left;">color</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F00\u5173\u6253\u5F00\u65F6\u7684\u81EA\u5B9A\u4E49\u989C\u8272</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F">\u81EA\u5B9A\u4E49\u6837\u5F0F</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u5F00\u5173</td><td style="text-align:left;"><a href="#size">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">active-value</td><td style="text-align:left;"><code>string| number |boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F00\u5173\u6253\u5F00\u65F6\u7684\u503C</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%91%E5%AE%9A%E5%80%BC">\u81EA\u5B9A\u4E49\u7ED1\u5B9A\u503C</a></td></tr><tr><td style="text-align:left;">inactive-value</td><td style="text-align:left;"><code>string| number |boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F00\u5173\u5173\u95ED\u65F6\u7684\u503C</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%91%E5%AE%9A%E5%80%BC">\u81EA\u5B9A\u4E49\u7ED1\u5B9A\u503C</a></td></tr></tbody></table><h3 id="switch-\u4E8B\u4EF6" tabindex="-1">Switch \u4E8B\u4EF6 <a class="header-anchor" href="#switch-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td style="text-align:left;"><code>EventEmitter&lt;boolean&gt;</code></td><td style="text-align:left;">\u53EF\u9009,\u5F00\u5173\u6253\u5F00\u8FD4\u56DE true,\u5173\u95ED\u8FD4\u56DE false</td></tr></tbody></table><h3 id="switch-\u63D2\u69FD" tabindex="-1">Switch \u63D2\u69FD <a class="header-anchor" href="#switch-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">checkedContent</td><td style="text-align:left;">\u6253\u5F00\u72B6\u6001\u7684\u6587\u6848</td><td style="text-align:left;">--</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F">\u81EA\u5B9A\u4E49\u6837\u5F0F</a></td></tr><tr><td style="text-align:left;">uncheckedContent</td><td style="text-align:left;">\u5173\u95ED\u72B6\u6001\u7684\u6587\u6848</td><td style="text-align:left;">--</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F">\u81EA\u5B9A\u4E49\u6837\u5F0F</a></td></tr></tbody></table>',6);function Q(g,o,m,u,p,f){const l=w("render-demo-0"),i=w("demo"),a=w("render-demo-1"),s=w("render-demo-2"),e=w("render-demo-3");return S(),z("div",null,[N,C(i,{sourceCode:`<template>
  <d-switch v-model="checkedSmall" size="sm"></d-switch>
  <d-switch v-model="uncheckedMiddle"></d-switch>
  <d-switch v-model="checkedLarge" size="lg"></d-switch>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const checkedSmall = ref(true);
    const uncheckedMiddle = ref(false);
    const checkedLarge = ref(true);
    return {
      checkedSmall,
      uncheckedMiddle,
      checkedLarge,
    };
  },
});
<\/script>

<style scoped lang="scss">
.devui-switch:not(:last-of-type) {
  margin-right: 5px;
}
</style>
`},{description:r(()=>[U]),highlight:r(()=>[I]),default:r(()=>[C(l)]),_:1}),M,C(i,{sourceCode:`<template>
  <d-switch v-model="checkedDisabled" :disabled="true"></d-switch>
  <d-switch v-model="checkedDisabled1" :disabled="true"></d-switch>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const checkedDisabled = ref(true);
    const checkedDisabled1 = ref(false);
    return {
      checkedDisabled,
      checkedDisabled1,
    };
  },
});
<\/script>
`},{description:r(()=>[j]),highlight:r(()=>[$]),default:r(()=>[C(a)]),_:1}),T,C(i,{sourceCode:`<template>
  <d-switch v-model="checkedColor" color="#FECC55"></d-switch>
  <d-switch color="#50D4AB" v-model="checkedIcon">
    <template #checkedContent>
      <i class="icon-right"></i>
    </template>
    <template #uncheckedContent>
      <i class="icon-error"></i>
    </template>
  </d-switch>
  <d-switch v-model="checkedSmContent" size="sm">
    <template #checkedContent>\u5F00</template>
    <template #uncheckedContent>\u5173</template>
  </d-switch>
  <d-switch v-model="checkedContent">
    <template #checkedContent>\u5F00</template>
    <template #uncheckedContent>\u5173</template>
  </d-switch>
  <d-switch v-model="checkedLgContent" size="lg">
    <template #checkedContent>\u5F00</template>
    <template #uncheckedContent>\u5173</template>
  </d-switch>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const checkedColor = ref(true);
    const checkedContent = ref(false);
    const checkedSmContent = ref(false);
    const checkedLgContent = ref(false);
    const checkedIcon = ref(true);
    return {
      checkedColor,
      checkedContent,
      checkedSmContent,
      checkedLgContent,
      checkedIcon,
    };
  },
});
<\/script>
`},{description:r(()=>[G]),highlight:r(()=>[H]),default:r(()=>[C(s)]),_:1}),P,C(i,{sourceCode:`<template>
  <d-switch v-model="activeValue1" active-value="\u6253\u5F00" inactive-value="\u5173\u95ED"></d-switch>
  <d-switch v-model="activeValue2" :active-value="1" :inactive-value="0"></d-switch>
  <d-switch v-model="activeValue3" :active-value="true" :inactive-value="false"></d-switch>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const activeValue1 = ref('\u6253\u5F00');
    const activeValue2 = ref(0);
    const activeValue3 = ref(true);
    return {
      activeValue1,
      activeValue2,
      activeValue3,
    };
  },
});
<\/script>
`},{description:r(()=>[J]),highlight:r(()=>[K]),default:r(()=>[C(e)]),_:1}),O])}var Z=q(L,[["render",Q]]);export{Y as __pageData,Z as default};
