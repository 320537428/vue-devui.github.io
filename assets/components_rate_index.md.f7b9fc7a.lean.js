var B=Object.defineProperty;var h=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var A=(c,a,s)=>a in c?B(c,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[a]=s,v=(c,a)=>{for(var s in a||(a={}))C.call(a,s)&&A(c,s,a[s]);if(h)for(var s of h(a))_.call(a,s)&&A(c,s,a[s]);return c};import{_ as x,V as m,r as F,o as w,c as V,a as f,w as g,b as y,d as n,e as t}from"./app.d86bec19.js";const D={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:c,createVNode:a,openBlock:s,createElementBlock:i}=m;function k(o,e){const u=c("d-rate");return s(),i("div",null,[a(u,{read:!0,modelValue:o.valueReadonly,"onUpdate:modelValue":e[0]||(e[0]=p=>o.valueReadonly=p)},null,8,["modelValue"])])}const{ref:d,defineComponent:r}=m,l=r({setup(){return{valueReadonly:d(3.5)}}});return v({render:k},l)}(),"render-demo-1":function(){const{resolveComponent:c,createVNode:a,openBlock:s,createElementBlock:i}=m;function k(o,e){const u=c("d-rate");return s(),i("div",null,[a(u,{modelValue:o.valueDynamic,"onUpdate:modelValue":e[0]||(e[0]=p=>o.valueDynamic=p),icon:"star-o"},null,8,["modelValue"])])}const{ref:d,defineComponent:r}=m,l=r({setup(){return{valueDynamic:d(2)}}});return v({render:k},l)}(),"render-demo-2":function(){const{resolveComponent:c,createVNode:a,openBlock:s,createElementBlock:i}=m;function k(o,e){const u=c("d-rate");return s(),i("div",null,[a(u,{character:"A",color:"#ffa500",modelValue:o.valueCustom,"onUpdate:modelValue":e[0]||(e[0]=p=>o.valueCustom=p),count:6},null,8,["modelValue"])])}const{ref:d,defineComponent:r}=m,l=r({setup(){return{valueCustom:d(3)}}});return v({render:k},l)}(),"render-demo-3":function(){const{resolveComponent:c,createVNode:a,openBlock:s,createElementBlock:i}=m;function k(o,e){const u=c("d-rate");return s(),i("div",null,[a(u,{modelValue:o.valueHalf,"onUpdate:modelValue":e[0]||(e[0]=p=>o.valueHalf=p),"allow-half":!0,onChange:o.change},null,8,["modelValue","onChange"])])}const{ref:d,defineComponent:r}=m,l=r({setup(){return{valueHalf:d(2.5),change:u=>{console.log(u)}}}});return v({render:k},l)}(),"render-demo-4":function(){const{resolveComponent:c,createVNode:a,createElementVNode:s,openBlock:i,createElementBlock:k}=m;function d(e,u){const p=c("d-rate");return i(),k("div",null,[s("div",null,[a(p,{modelValue:e.value1,"onUpdate:modelValue":u[0]||(u[0]=E=>e.value1=E),read:!0,type:"success",count:5,icon:"star"},null,8,["modelValue"])]),s("div",null,[a(p,{modelValue:e.value2,"onUpdate:modelValue":u[1]||(u[1]=E=>e.value2=E),read:!0,type:"warning",count:5,icon:"star"},null,8,["modelValue"])]),s("div",null,[a(p,{modelValue:e.value3,"onUpdate:modelValue":u[2]||(u[2]=E=>e.value3=E),read:!0,type:"error",count:5},null,8,["modelValue"])])])}const{ref:r,defineComponent:l}=m,o=l({setup(){const e=r(3.5),u=r(2),p=r(3);return{value1:e,value2:u,value3:p}}});return v({render:d},o)}()}},J='{"title":"Rate \u8BC4\u5206","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u53EA\u8BFB\u6A21\u5F0F","slug":"\u53EA\u8BFB\u6A21\u5F0F"},{"level":3,"title":"\u52A8\u6001\u6A21\u5F0F","slug":"\u52A8\u6001\u6A21\u5F0F"},{"level":3,"title":"\u52A8\u6001\u6A21\u5F0F-\u81EA\u5B9A\u4E49","slug":"\u52A8\u6001\u6A21\u5F0F-\u81EA\u5B9A\u4E49"},{"level":3,"title":"\u534A\u9009\u6A21\u5F0F","slug":"\u534A\u9009\u6A21\u5F0F"},{"level":3,"title":"\u4F7F\u7528 type \u53C2\u6570","slug":"\u4F7F\u7528-type-\u53C2\u6570"},{"level":3,"title":"Rate \u53C2\u6570","slug":"rate-\u53C2\u6570"},{"level":3,"title":"Rate \u4E8B\u4EF6","slug":"rate-\u4E8B\u4EF6"},{"level":3,"title":"Rate \u7C7B\u578B\u5B9A\u4E49","slug":"rate-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/rate/index.md","lastUpdated":1662174068917}',b=y('<h1 id="rate-\u8BC4\u5206" tabindex="-1">Rate \u8BC4\u5206 <a class="header-anchor" href="#rate-\u8BC4\u5206" aria-hidden="true">#</a></h1><p>\u7B49\u7EA7\u8BC4\u4F30\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u7528\u6237\u5BF9\u4E00\u4E2A\u4EA7\u54C1\u8FDB\u884C\u8BC4\u5206\u65F6\u53EF\u4EE5\u4F7F\u7528\u3002</p><h3 id="\u53EA\u8BFB\u6A21\u5F0F" tabindex="-1">\u53EA\u8BFB\u6A21\u5F0F <a class="header-anchor" href="#\u53EA\u8BFB\u6A21\u5F0F" aria-hidden="true">#</a></h3>',5),q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-rate")]),t(),n("span",{class:"token attr-name"},":read"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueReadonly"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueReadonly "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3.5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      valueReadonly`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),R=n("h3",{id:"\u52A8\u6001\u6A21\u5F0F",tabindex:"-1"},[t("\u52A8\u6001\u6A21\u5F0F "),n("a",{class:"header-anchor",href:"#\u52A8\u6001\u6A21\u5F0F","aria-hidden":"true"},"#")],-1),N=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-rate")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueDynamic"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("star-o"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueDynamic "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      valueDynamic`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),H=n("h3",{id:"\u52A8\u6001\u6A21\u5F0F-\u81EA\u5B9A\u4E49",tabindex:"-1"},[t("\u52A8\u6001\u6A21\u5F0F-\u81EA\u5B9A\u4E49 "),n("a",{class:"header-anchor",href:"#\u52A8\u6001\u6A21\u5F0F-\u81EA\u5B9A\u4E49","aria-hidden":"true"},"#")],-1),U=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-rate")]),t(),n("span",{class:"token attr-name"},"character"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("A"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#ffa500"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueCustom"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("6"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueCustom "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      valueCustom`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),j=n("h3",{id:"\u534A\u9009\u6A21\u5F0F",tabindex:"-1"},[t("\u534A\u9009\u6A21\u5F0F "),n("a",{class:"header-anchor",href:"#\u534A\u9009\u6A21\u5F0F","aria-hidden":"true"},"#")],-1),S=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-rate")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueHalf"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":allow-half"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("change"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueHalf "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2.5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"change"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      valueHalf`),n("span",{class:"token punctuation"},","),t(`
      change`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),T=n("h3",{id:"\u4F7F\u7528-type-\u53C2\u6570",tabindex:"-1"},[t("\u4F7F\u7528 type \u53C2\u6570 "),n("a",{class:"header-anchor",href:"#\u4F7F\u7528-type-\u53C2\u6570","aria-hidden":"true"},"#")],-1),$=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-rate")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":read"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("success"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("5"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("star"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-rate")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":read"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("warning"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("5"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("star"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-rate")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":read"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("error"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("5"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3.5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value1`),n("span",{class:"token punctuation"},","),t(`
      value2`),n("span",{class:"token punctuation"},","),t(`
      value3`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),I=y(`<h3 id="rate-\u53C2\u6570" tabindex="-1">Rate \u53C2\u6570 <a class="header-anchor" href="#rate-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u63CF\u8FF0</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">read</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u662F\u5426\u4E3A\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u53EA\u8BFB\u6A21\u5F0F\u65E0\u6CD5\u4EA4\u4E92</td><td><a href="#%E5%8F%AA%E8%AF%BB%E6%A8%A1%E5%BC%8F">\u53EA\u8BFB\u6A21\u5F0F</a></td></tr><tr><td style="text-align:left;">count</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">5</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u603B\u7B49\u7EA7\u6570</td><td><a href="#%E5%8F%AA%E8%AF%BB%E6%A8%A1%E5%BC%8F">\u53EA\u8BFB\u6A21\u5F0F</a></td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;"><a href="#ratestatustype">RateStatusType</a></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u5F53\u524D\u8BC4\u5206\u7684\u7C7B\u578B\uFF0C\u4E0D\u540C\u7C7B\u578B\u5BF9\u5E94\u4E0D\u540C\u989C\u8272</td><td><a href="#%E4%BD%BF%E7%94%A8-type-%E5%8F%82%E6%95%B0">\u4F7F\u7528 type \u53C2\u6570</a></td></tr><tr><td style="text-align:left;">color</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u661F\u661F\u989C\u8272</td><td><a href="#%E5%8A%A8%E6%80%81%E6%A8%A1%E5%BC%8F-%E8%87%AA%E5%AE%9A%E4%B9%89">\u52A8\u6001\u6A21\u5F0F-\u81EA\u5B9A\u4E49</a></td></tr><tr><td style="text-align:left;">icon</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BC4\u5206\u56FE\u6807\u7684\u6837\u5F0F\uFF0C\u53EA\u652F\u6301 devUI \u56FE\u6807\u5E93\u4E2D\u6240\u6709\u56FE\u6807</td><td><a href="#%E5%8A%A8%E6%80%81%E6%A8%A1%E5%BC%8F">\u52A8\u6001\u6A21\u5F0F</a></td></tr><tr><td style="text-align:left;">character</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BC4\u5206\u56FE\u6807\u7684\u6837\u5F0F\uFF0Cicon \u4E0E character \u53EA\u80FD\u8BBE\u7F6E\u5176\u4E2D\u4E00\u4E2A</td><td><a href="#%E5%8A%A8%E6%80%81%E6%A8%A1%E5%BC%8F-%E8%87%AA%E5%AE%9A%E4%B9%89">\u52A8\u6001\u6A21\u5F0F-\u81EA\u5B9A\u4E49</a></td></tr><tr><td style="text-align:left;">allow-half</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u52A8\u6001\u6A21\u5F0F\u4E0B\u662F\u5426\u5141\u8BB8\u534A\u9009</td><td><a href="#%E5%8D%8A%E9%80%89%E6%A8%A1%E5%BC%8F">\u534A\u9009\u6A21\u5F0F</a></td></tr></tbody></table><h3 id="rate-\u4E8B\u4EF6" tabindex="-1">Rate \u4E8B\u4EF6 <a class="header-anchor" href="#rate-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u56DE\u8C03\u53C2\u6570</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td style="text-align:left;"><code>EventEmitter&lt;number&gt;</code></td><td style="text-align:left;">\u5206\u503C\u6539\u53D8\u65F6\u89E6\u53D1</td><td style="text-align:left;">\u6539\u53D8\u540E\u7684\u5206\u503C</td><td style="text-align:left;"><a href="#%E5%8D%8A%E9%80%89%E6%A8%A1%E5%BC%8F">\u534A\u9009\u6A21\u5F0F</a></td></tr></tbody></table><h3 id="rate-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Rate \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#rate-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="ratestatustype" tabindex="-1">RateStatusType <a class="header-anchor" href="#ratestatustype" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">RateStatusType</span> <span class="token operator">=</span> <span class="token string">&#39;success&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;warning&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,7);function P(c,a,s,i,k,d){const r=F("render-demo-0"),l=F("demo"),o=F("render-demo-1"),e=F("render-demo-2"),u=F("render-demo-3"),p=F("render-demo-4");return w(),V("div",null,[b,f(l,{sourceCode:`<template>
  <d-rate :read="true" v-model="valueReadonly" />
</template>
<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const valueReadonly = ref(3.5);

    return {
      valueReadonly,
    };
  },
});
<\/script>
`},{highlight:g(()=>[q]),default:g(()=>[f(r)]),_:1}),R,f(l,{sourceCode:`<template>
  <d-rate v-model="valueDynamic" icon="star-o" />
</template>
<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const valueDynamic = ref(2);

    return {
      valueDynamic,
    };
  },
});
<\/script>
`},{highlight:g(()=>[N]),default:g(()=>[f(o)]),_:1}),H,f(l,{sourceCode:`<template>
  <d-rate character="A" color="#ffa500" v-model="valueCustom" :count="6" />
</template>
<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const valueCustom = ref(3);

    return {
      valueCustom,
    };
  },
});
<\/script>
`},{highlight:g(()=>[U]),default:g(()=>[f(e)]),_:1}),j,f(l,{sourceCode:`<template>
  <d-rate v-model="valueHalf" :allow-half="true" @change="change" />
</template>
<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const valueHalf = ref(2.5);

    const change = (val) => {
      console.log(val);
    };

    return {
      valueHalf,
      change,
    };
  },
});
<\/script>
`},{highlight:g(()=>[S]),default:g(()=>[f(u)]),_:1}),T,f(l,{sourceCode:`<template>
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
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref(3.5);
    const value2 = ref(2);
    const value3 = ref(3);

    return {
      value1,
      value2,
      value3,
    };
  },
});
<\/script>
`},{highlight:g(()=>[$]),default:g(()=>[f(p)]),_:1}),I])}var K=x(D,[["render",P]]);export{J as __pageData,K as default};
