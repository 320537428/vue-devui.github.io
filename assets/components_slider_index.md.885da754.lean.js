var A=Object.defineProperty;var B=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var _=(l,u,e)=>u in l?A(l,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[u]=e,h=(l,u)=>{for(var e in u||(u={}))b.call(u,e)&&_(l,e,u[e]);if(B)for(var e of B(u))D.call(u,e)&&_(l,e,u[e]);return l};import{_ as q,V as f,r as F,c as N,a as v,w as E,b as w,d as n,e as a,o as S}from"./app.a2cc62c7.js";const R={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:l,createVNode:u,toDisplayString:e,createElementVNode:o,openBlock:g,createElementBlock:V}=f,r={class:"slider-wrapper"};function k(t,i){const s=l("d-slider");return g(),V("div",null,[o("div",r,[u(s,{min:t.minValue,max:t.maxValue,modelValue:t.inputValue,"onUpdate:modelValue":i[0]||(i[0]=p=>t.inputValue=p)},null,8,["min","max","modelValue"]),o("span",null,e(t.minValue),1),o("span",null,e(t.maxValue),1)])])}const{defineComponent:d,ref:c}=f,m=d({setup(){const t=c(12),i=c(0),s=c(20);return{inputValue:t,maxValue:s,minValue:i}}});return h({render:k},m)}(),"render-demo-1":function(){const{resolveComponent:l,createVNode:u,toDisplayString:e,createElementVNode:o,openBlock:g,createElementBlock:V}=f,r={class:"slider-wrapper"};function k(t,i){const s=l("d-slider");return g(),V("div",null,[o("div",r,[u(s,{min:t.minValue,max:t.maxValue,modelValue:t.inputValue,"onUpdate:modelValue":i[0]||(i[0]=p=>t.inputValue=p),step:t.step},null,8,["min","max","modelValue","step"]),o("span",null,e(t.minValue),1),o("span",null,e(t.maxValue),1)])])}const{defineComponent:d,ref:c}=f,m=d({setup(){const t=c(8),i=c(0),s=c(20),p=c(4);return{inputValue:t,maxValue:s,minValue:i,step:p}}});return h({render:k},m)}(),"render-demo-2":function(){const{resolveComponent:l,createVNode:u,createElementVNode:e,toDisplayString:o,openBlock:g,createElementBlock:V}=f,r={class:"slider-wrapper composite-slider",style:{width:"90%"}},k={class:"snapshot-value"},d={style:{right:"10%"}};function c(s,p){const x=l("d-slider"),y=l("d-input");return g(),V("div",null,[e("div",r,[u(x,{min:s.minValue,max:s.maxValue,modelValue:s.inputValue,"onUpdate:modelValue":p[0]||(p[0]=C=>s.inputValue=C)},null,8,["min","max","modelValue"]),e("div",k,[u(y,{modelValue:s.inputValue,"onUpdate:modelValue":p[1]||(p[1]=C=>s.inputValue=C),style:{width:"40px"}},null,8,["modelValue"])]),e("span",null,o(s.minValue),1),e("span",d,o(s.maxValue),1)])])}const{defineComponent:m,ref:t}=f,i=m({setup(){const s=t(10),p=t(0),x=t(20);return{inputValue:s,maxValue:x,minValue:p}}});return h({render:c},i)}(),"render-demo-3":function(){const{resolveComponent:l,createVNode:u,toDisplayString:e,createElementVNode:o,openBlock:g,createElementBlock:V}=f,r={class:"slider-wrapper"};function k(t,i){const s=l("d-slider");return g(),V("div",null,[o("div",r,[u(s,{min:t.minValue,max:t.maxValue,disabled:"",modelValue:t.disabledValue,"onUpdate:modelValue":i[0]||(i[0]=p=>t.disabledValue=p)},null,8,["min","max","modelValue"]),o("span",null,e(t.minValue),1),o("span",null,e(t.maxValue),1)])])}const{defineComponent:d,ref:c}=f,m=d({setup(){const t=c(5),i=c(50),s=c(2);return{disabledValue:t,maxValue:i,minValue:s}}});return h({render:k},m)}(),"render-demo-4":function(){const{resolveComponent:l,createVNode:u,toDisplayString:e,createElementVNode:o,openBlock:g,createElementBlock:V}=f,r={class:"slider-wrapper"},k=o("br",{style:{"margin-bottom":"20px"}},null,-1),d={class:"slider-wrapper"};function c(s,p){const x=l("d-slider");return g(),V("div",null,[o("div",null,[o("div",r,[u(x,{min:s.minValue,max:s.maxValue,modelValue:s.inputValue,"onUpdate:modelValue":p[0]||(p[0]=y=>s.inputValue=y),"tips-renderer":s.tipsRender},null,8,["min","max","modelValue","tips-renderer"]),o("span",null,e(s.minValue),1),o("span",null,e(s.maxValue),1)]),k,o("div",d,[u(x,{min:s.minValue,max:s.maxValue,modelValue:s.inputValue,"onUpdate:modelValue":p[1]||(p[1]=y=>s.inputValue=y),"tips-renderer":null},null,8,["min","max","modelValue"]),o("span",null,e(s.minValue),1),o("span",null,e(s.maxValue),1)])])])}const{defineComponent:m,ref:t}=f,i=m({setup(){const s=t(5),p=t(50),x=t(2);return{inputValue:s,maxValue:p,minValue:x,tipsRender:C=>`${C} apples`}}});return h({render:c},i)}()}},W='{"title":"Slider \u6ED1\u52A8\u8F93\u5165\u6761","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u53EF\u8BBE\u7F6E Step \u7684\u6ED1\u52A8\u7EC4\u4EF6","slug":"\u53EF\u8BBE\u7F6E-step-\u7684\u6ED1\u52A8\u7EC4\u4EF6"},{"level":3,"title":"\u5E26\u6709\u8F93\u5165\u6846\u7684\u6ED1\u52A8\u7EC4\u4EF6","slug":"\u5E26\u6709\u8F93\u5165\u6846\u7684\u6ED1\u52A8\u7EC4\u4EF6"},{"level":3,"title":"\u7981\u6B62\u8F93\u5165\u6001","slug":"\u7981\u6B62\u8F93\u5165\u6001"},{"level":3,"title":"\u5B9A\u5236 Popover \u663E\u793A\u5185\u5BB9","slug":"\u5B9A\u5236-popover-\u663E\u793A\u5185\u5BB9"},{"level":3,"title":"Slider \u53C2\u6570","slug":"slider-\u53C2\u6570"}],"relativePath":"components/slider/index.md","lastUpdated":1655716121186}',U=w('<h1 id="slider-\u6ED1\u52A8\u8F93\u5165\u6761" tabindex="-1">Slider \u6ED1\u52A8\u8F93\u5165\u6761 <a class="header-anchor" href="#slider-\u6ED1\u52A8\u8F93\u5165\u6761" aria-hidden="true">#</a></h1><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u7528\u6237\u9700\u8981\u5728\u6570\u503C\u533A\u95F4\u5185\u8FDB\u884C\u9009\u62E9\u65F6\u4F7F\u7528\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',4),$=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slider-wrapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputValue"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("{{ minValue }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("{{ maxValue }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" inputValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" minValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" maxValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      inputValue`),n("span",{class:"token punctuation"},","),a(`
      maxValue`),n("span",{class:"token punctuation"},","),a(`
      minValue`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".slider-wrapper"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),a(" relative"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".slider-wrapper span"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),a(" absolute"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),a(" 16px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".slider-wrapper span:last-child"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),a(" 0"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),P=n("h3",{id:"\u53EF\u8BBE\u7F6E-step-\u7684\u6ED1\u52A8\u7EC4\u4EF6",tabindex:"-1"},[a("\u53EF\u8BBE\u7F6E Step \u7684\u6ED1\u52A8\u7EC4\u4EF6 "),n("a",{class:"header-anchor",href:"#\u53EF\u8BBE\u7F6E-step-\u7684\u6ED1\u52A8\u7EC4\u4EF6","aria-hidden":"true"},"#")],-1),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slider-wrapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":step"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("step"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("{{ minValue }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("{{ maxValue }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" inputValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" minValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" maxValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" step "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      inputValue`),n("span",{class:"token punctuation"},","),a(`
      maxValue`),n("span",{class:"token punctuation"},","),a(`
      minValue`),n("span",{class:"token punctuation"},","),a(`
      step`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),T=n("h3",{id:"\u5E26\u6709\u8F93\u5165\u6846\u7684\u6ED1\u52A8\u7EC4\u4EF6",tabindex:"-1"},[a("\u5E26\u6709\u8F93\u5165\u6846\u7684\u6ED1\u52A8\u7EC4\u4EF6 "),n("a",{class:"header-anchor",href:"#\u5E26\u6709\u8F93\u5165\u6846\u7684\u6ED1\u52A8\u7EC4\u4EF6","aria-hidden":"true"},"#")],-1),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slider-wrapper composite-slider"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 90%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputValue"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("snapshot-value"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 40px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-input")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("{{ minValue }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),a(" 10%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a("{{ maxValue }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" inputValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" minValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" maxValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      inputValue`),n("span",{class:"token punctuation"},","),a(`
      maxValue`),n("span",{class:"token punctuation"},","),a(`
      minValue`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".composite-slider"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".snapshot-value"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" inline-block"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),a(" 20px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),G=n("h3",{id:"\u7981\u6B62\u8F93\u5165\u6001",tabindex:"-1"},[a("\u7981\u6B62\u8F93\u5165\u6001 "),n("a",{class:"header-anchor",href:"#\u7981\u6B62\u8F93\u5165\u6001","aria-hidden":"true"},"#")],-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slider-wrapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"disabled"),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabledValue"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("{{ minValue }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("{{ maxValue }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" disabledValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" maxValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" minValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      disabledValue`),n("span",{class:"token punctuation"},","),a(`
      maxValue`),n("span",{class:"token punctuation"},","),a(`
      minValue`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),I=n("h3",{id:"\u5B9A\u5236-popover-\u663E\u793A\u5185\u5BB9",tabindex:"-1"},[a("\u5B9A\u5236 Popover \u663E\u793A\u5185\u5BB9 "),n("a",{class:"header-anchor",href:"#\u5B9A\u5236-popover-\u663E\u793A\u5185\u5BB9","aria-hidden":"true"},"#")],-1),J=n("p",null,"\u901A\u8FC7 tipsRenderer \u53C2\u6570\u4F20\u5165\u5B9A\u5236 Popover \u5185\u7684\u663E\u793A\u5185\u5BB9\u3002",-1),K=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slider-wrapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":tips-renderer"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tipsRender"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("{{ minValue }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("{{ maxValue }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),a(" 20px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slider-wrapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":tips-renderer"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("null"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("{{ minValue }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("{{ maxValue }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" inputValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" maxValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" minValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tipsRender"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"val"),n("span",{class:"token operator"},":"),a(" number")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("val"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," apples"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      inputValue`),n("span",{class:"token punctuation"},","),a(`
      maxValue`),n("span",{class:"token punctuation"},","),a(`
      minValue`),n("span",{class:"token punctuation"},","),a(`
      tipsRender`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),L=w('<h3 id="slider-\u53C2\u6570" tabindex="-1">Slider \u53C2\u6570 <a class="header-anchor" href="#slider-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C</th></tr></thead><tbody><tr><td style="text-align:left;">max</td><td style="text-align:left;">number</td><td style="text-align:left;">100</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6ED1\u52A8\u8F93\u5165\u6761\u7684\u6700\u5927\u503C</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">min</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6ED1\u52A8\u8F93\u5165\u6761\u7684\u6700\u5C0F\u503C</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">step</td><td style="text-align:left;">number</td><td style="text-align:left;">1</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6ED1\u52A8\u8F93\u5165\u6761\u7684\u6B65\u957F\uFF0C\u53D6\u503C\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E 1\uFF0C\u4E14\u5FC5\u987B\u53EF\u88AB(max-min)\u6574\u9664</td><td style="text-align:left;"><a href="#%E5%8F%AF%E8%AE%BE%E7%BD%AEstep%E7%9A%84%E6%BB%91%E5%8A%A8%E7%BB%84%E4%BB%B6">\u53EF\u8BBE\u7F6E Step \u7684\u6ED1\u52A8\u7EC4\u4EF6</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u503C\u4E3A true \u65F6\u7981\u6B62\u7528\u6237\u8F93\u5165</td><td style="text-align:left;"><a href="#%E7%A6%81%E6%AD%A2%E8%BE%93%E5%85%A5%E6%80%81">\u7981\u6B62\u8F93\u5165\u6001</a></td></tr><tr><td style="text-align:left;">tips-renderer</td><td style="text-align:left;">string</td><td style="text-align:left;">(val) =&gt; String(val)</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6E32\u67D3 Popover \u5185\u5BB9\u7684\u51FD\u6570\uFF0C\u4F20\u5165 null \u65F6\u4E0D\u663E\u793A Popover</td><td style="text-align:left;"><a href="#%E5%AE%9A%E5%88%B6popover%E6%98%BE%E7%A4%BA%E5%86%85%E5%AE%B9">\u5B9A\u5236 popover \u663E\u793A\u5185\u5BB9</a></td></tr></tbody></table>',2);function M(l,u,e,o,g,V){const r=F("render-demo-0"),k=F("demo"),d=F("render-demo-1"),c=F("render-demo-2"),m=F("render-demo-3"),t=F("render-demo-4");return S(),N("div",null,[U,v(k,{sourceCode:`<template>
  <div class="slider-wrapper">
    <d-slider :min="minValue" :max="maxValue" v-model="inputValue"></d-slider>
    <span>{{ minValue }}</span>
    <span>{{ maxValue }}</span>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const inputValue = ref(12);
    const minValue = ref(0);
    const maxValue = ref(20);
    return {
      inputValue,
      maxValue,
      minValue,
    };
  },
});
<\/script>

<style>
.slider-wrapper {
  position: relative;
}
.slider-wrapper span {
  position: absolute;
  top: 16px;
}
.slider-wrapper span:last-child {
  right: 0;
}
</style>
`},{highlight:E(()=>[$]),default:E(()=>[v(r)]),_:1}),P,v(k,{sourceCode:`<template>
  <div class="slider-wrapper">
    <d-slider :min="minValue" :max="maxValue" v-model="inputValue" :step="step"></d-slider>
    <span>{{ minValue }}</span>
    <span>{{ maxValue }}</span>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const inputValue = ref(8);
    const minValue = ref(0);
    const maxValue = ref(20);
    const step = ref(4);
    return {
      inputValue,
      maxValue,
      minValue,
      step,
    };
  },
});
<\/script>
`},{highlight:E(()=>[j]),default:E(()=>[v(d)]),_:1}),T,v(k,{sourceCode:`<template>
  <div class="slider-wrapper composite-slider" style="width: 90%">
    <d-slider :min="minValue" :max="maxValue" v-model="inputValue"></d-slider>
    <div class="snapshot-value">
      <d-input v-model="inputValue" style="width: 40px"></d-input>
    </div>
    <span>{{ minValue }}</span>
    <span style="right: 10%">{{ maxValue }}</span>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const inputValue = ref(10);
    const minValue = ref(0);
    const maxValue = ref(20);
    return {
      inputValue,
      maxValue,
      minValue,
    };
  },
});
<\/script>

<style>
.composite-slider {
  display: flex;
  align-items: center;
}
.snapshot-value {
  display: inline-block;
  margin-left: 20px;
}
</style>
`},{highlight:E(()=>[z]),default:E(()=>[v(c)]),_:1}),G,v(k,{sourceCode:`<template>
  <div class="slider-wrapper">
    <d-slider :min="minValue" :max="maxValue" disabled v-model="disabledValue"></d-slider>
    <span>{{ minValue }}</span>
    <span>{{ maxValue }}</span>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const disabledValue = ref(5);
    const maxValue = ref(50);
    const minValue = ref(2);
    return {
      disabledValue,
      maxValue,
      minValue,
    };
  },
});
<\/script>
`},{highlight:E(()=>[H]),default:E(()=>[v(m)]),_:1}),I,J,v(k,{sourceCode:`<template>
  <div>
    <div class="slider-wrapper">
      <d-slider :min="minValue" :max="maxValue" v-model="inputValue" :tips-renderer="tipsRender"></d-slider>
      <span>{{ minValue }}</span>
      <span>{{ maxValue }}</span>
    </div>
    <br style="margin-bottom: 20px" />
    <div class="slider-wrapper">
      <d-slider :min="minValue" :max="maxValue" v-model="inputValue" :tips-renderer="null"></d-slider>
      <span>{{ minValue }}</span>
      <span>{{ maxValue }}</span>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const inputValue = ref(5);
    const maxValue = ref(50);
    const minValue = ref(2);
    const tipsRender = (val: number) => \`\${val} apples\`;
    return {
      inputValue,
      maxValue,
      minValue,
      tipsRender,
    };
  },
});
<\/script>
`},{highlight:E(()=>[K]),default:E(()=>[v(t)]),_:1}),L])}var X=q(R,[["render",M]]);export{W as __pageData,X as default};
