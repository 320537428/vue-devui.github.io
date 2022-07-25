import{V as m}from"./framework.3495a366.js";import{_,f as h,G as x,H as w,b as v,a1 as g,a3 as f,I as t,k as n}from"./plugin-vue_export-helper.ebedbb15.js";import"./framework.d333a127.js";const V={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:u,createVNode:c,openBlock:l,createElementBlock:r}=m;function i(e,s){const a=u("d-rate");return l(),r("div",null,[c(a,{read:!0,modelValue:e.value1,"onUpdate:modelValue":s[0]||(s[0]=o=>e.value1=o)},null,8,["modelValue"])])}const{ref:d}=m;return{render:i,...{setup(){return{value1:d(3.5)}}}}}(),"render-demo-1":function(){const{resolveComponent:u,createVNode:c,openBlock:l,createElementBlock:r}=m;function i(e,s){const a=u("d-rate");return l(),r("div",null,[c(a,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=o=>e.value=o),icon:"star-o"},null,8,["modelValue"])])}const{ref:d}=m;return{render:i,...{setup(){return{value:d(2)}}}}}(),"render-demo-2":function(){const{resolveComponent:u,createVNode:c,openBlock:l,createElementBlock:r}=m;function i(e,s){const a=u("d-rate");return l(),r("div",null,[c(a,{character:"A",color:"#ffa500",modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=o=>e.value=o),count:6},null,8,["modelValue"])])}const{ref:d}=m;return{render:i,...{setup(){return{value:d(3)}}}}}(),"render-demo-3":function(){const{resolveComponent:u,createVNode:c,toDisplayString:l,createTextVNode:r,openBlock:i,createElementBlock:d}=m;function k(a,o){const p=u("d-rate");return i(),d("div",null,[c(p,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=y=>a.value=y),allowHalf:!0,onChange:a.change},null,8,["modelValue","onChange"]),r(" "+l(a.value),1)])}const{ref:e}=m;return{render:k,...{setup(){return{value:e(2),change:p=>{console.log(p)}}}}}}(),"render-demo-4":function(){const{resolveComponent:u,createVNode:c,createElementVNode:l,openBlock:r,createElementBlock:i}=m;function d(s,a){const o=u("d-rate");return r(),i("div",null,[l("div",null,[c(o,{modelValue:s.value1,"onUpdate:modelValue":a[0]||(a[0]=p=>s.value1=p),read:!0,type:"success",count:5,icon:"star"},null,8,["modelValue"])]),l("div",null,[c(o,{modelValue:s.value2,"onUpdate:modelValue":a[1]||(a[1]=p=>s.value2=p),read:!0,type:"warning",count:5,icon:"star"},null,8,["modelValue"])]),l("div",null,[c(o,{modelValue:s.value3,"onUpdate:modelValue":a[2]||(a[2]=p=>s.value3=p),read:!0,type:"error",count:5},null,8,["modelValue"])])])}const{ref:k}=m;return{render:d,...{setup(){const s=k(3.5),a=k(2),o=k(3);return{value1:s,value2:a,value3:o}}}}}()}},A='{"title":"Rate","description":"","frontmatter":{},"headers":[{"level":3,"title":"When To Use","slug":"when-to-use"},{"level":3,"title":"Demo","slug":"demo"},{"level":3,"title":"Read-only Mode","slug":"read-only-mode"},{"level":3,"title":"Dynamic Mode","slug":"dynamic-mode"},{"level":3,"title":"Dynamic Mode-Custom","slug":"dynamic-mode-custom"},{"level":3,"title":"Half Star Mode","slug":"half-star-mode"},{"level":3,"title":"Use the type parameter","slug":"use-the-type-parameter"},{"level":3,"title":"API","slug":"api"}],"relativePath":"en-US/components/rate/index.md","lastUpdated":1658739366714}',b=f('<h1 id="rate" tabindex="-1">Rate <a class="header-anchor" href="#rate" aria-hidden="true">#</a></h1><p>Rate.</p><h3 id="when-to-use" tabindex="-1">When To Use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>When you expect users to rate a product.</p><h3 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h3><h3 id="read-only-mode" tabindex="-1">Read-only Mode <a class="header-anchor" href="#read-only-mode" aria-hidden="true">#</a></h3>',6),q=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-rate")]),n(),t("span",{class:"token attr-name"},":read"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" value1 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"3.5"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      value1
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),E=t("h3",{id:"dynamic-mode",tabindex:"-1"},[n("Dynamic Mode "),t("a",{class:"header-anchor",href:"#dynamic-mode","aria-hidden":"true"},"#")],-1),B=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-rate")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"icon"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("star-o"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      value
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),C=t("h3",{id:"dynamic-mode-custom",tabindex:"-1"},[n("Dynamic Mode-Custom "),t("a",{class:"header-anchor",href:"#dynamic-mode-custom","aria-hidden":"true"},"#")],-1),D=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-rate")]),n(),t("span",{class:"token attr-name"},"character"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("A"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("#ffa500"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":count"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("6"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      value
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),N=t("h3",{id:"half-star-mode",tabindex:"-1"},[n("Half Star Mode "),t("a",{class:"header-anchor",href:"#half-star-mode","aria-hidden":"true"},"#")],-1),M=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-rate")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":allowHalf"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@change"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("change"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  {{ value }}
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"change"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"val"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),n("val"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      value`),t("span",{class:"token punctuation"},","),n(`
      change
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),U=t("h3",{id:"use-the-type-parameter",tabindex:"-1"},[n("Use the type parameter "),t("a",{class:"header-anchor",href:"#use-the-type-parameter","aria-hidden":"true"},"#")],-1),S=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-rate")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":read"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("success"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":count"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"icon"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("star"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-rate")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value2"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":read"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("warning"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":count"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"icon"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("star"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-rate")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value3"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":read"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("error"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":count"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" value1 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"3.5"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" value2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" value3 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      value1`),t("span",{class:"token punctuation"},","),n(`
      value2`),t("span",{class:"token punctuation"},","),n(`
      value3
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),H=f('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><p>d-rate parameter</p><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:left;">Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td style="text-align:center;">read</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">Optional. This parameter specifies whether to enable read-only mode. In read-only mode, interaction is not supported.</td><td><a href="#read-only-mode">Read-only Mode</a></td></tr><tr><td style="text-align:center;">count</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">5</td><td style="text-align:left;">Optional. Sets the total number of levels.</td><td><a href="#read-only-mode">Read-only Mode</a></td></tr><tr><td style="text-align:center;">type</td><td style="text-align:center;"><code>&#39;success&#39;|&#39;warning&#39;|&#39;error&#39;</code></td><td style="text-align:center;">--</td><td style="text-align:left;">Optional. Set the current rating type. Different types correspond to different colors.</td><td><a href="#use-the-type-parameter">Use the type parameter</a></td></tr><tr><td style="text-align:center;">color</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:left;">Optional. Star color.</td><td><a href="#dynamic-mode-custom">Dynamic Mode Custom</a></td></tr><tr><td style="text-align:center;">icon</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:left;">Optional. Style of the rating icon. Only all icons in the DevUI icon library are supported.</td><td><a href="#dynamic-mode">Dynamic Mode</a></td></tr><tr><td style="text-align:center;">character</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:left;">Optional. Scoring icon style. Only one of icon and character can be set.</td><td><a href="#dynamic-mode-custom">Dynamic Mode Custom</a></td></tr><tr><td style="text-align:center;">allowHalf</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">Optional. Whether allow Half Selection in Dynamic Mode.</td><td><a href="#half-star-mode">Half Selection Mode</a></td></tr></tbody></table><p>d-rate event</p><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th><th>parameters</th><th>Jump to Demo</th></tr></thead><tbody><tr><td>change</td><td><code>EventEmitter&lt;number&gt;</code></td><td>triggers when <code>count</code> change</td><td>the new count</td><td><a href="#half-star-mode">Half Selection Mode</a></td></tr></tbody></table>',5);function O(u,c,l,r,i,d){const k=h("render-demo-0"),e=h("demo"),s=h("render-demo-1"),a=h("render-demo-2"),o=h("render-demo-3"),p=h("render-demo-4");return x(),w("div",null,[b,v(e,{sourceCode:`<template>
  <d-rate :read="true" v-model="value1" />
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const value1 = ref(3.5)
    return {
      value1
    }
  }
}
<\/script>
`},{highlight:g(()=>[q]),default:g(()=>[v(k)]),_:1}),E,v(e,{sourceCode:`<template>
  <d-rate v-model="value" icon="star-o" />
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const value = ref(2)
    return {
      value
    }
  }
}
<\/script>
`},{highlight:g(()=>[B]),default:g(()=>[v(s)]),_:1}),C,v(e,{sourceCode:`<template>
  <d-rate character="A" color="#ffa500" v-model="value" :count="6" />
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const value = ref(3)
    return {
      value
    }
  }
}
<\/script>
`},{highlight:g(()=>[D]),default:g(()=>[v(a)]),_:1}),N,v(e,{sourceCode:`<template>
  <d-rate v-model="value" :allowHalf="true" @change="change" />
  {{ value }}
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const value = ref(2)
    const change = (val) => {
      console.log(val)
    }
    return {
      value,
      change
    }
  }
}
<\/script>
`},{highlight:g(()=>[M]),default:g(()=>[v(o)]),_:1}),U,v(e,{sourceCode:`<template>
  <div>
    <d-rate v-model="value1" :read="true" type="success" :count="5" icon="star" />
  </div>
  <div>
    <d-rate v-model="value2" :read="true" type="warning" :count="5" icon="star" />
  </div>
  <div>
    <d-rate v-model="value3" :read="true" type="error" :count="5" />
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const value1 = ref(3.5)
    const value2 = ref(2)
    const value3 = ref(3)
    return {
      value1,
      value2,
      value3
    }
  }
}
<\/script>
`},{highlight:g(()=>[S]),default:g(()=>[v(p)]),_:1}),H])}var I=_(V,[["render",O]]);export{A as __pageData,I as default};
