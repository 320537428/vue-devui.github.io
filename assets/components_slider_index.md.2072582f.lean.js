var _=Object.defineProperty;var F=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var h=(p,u,o)=>u in p?_(p,u,{enumerable:!0,configurable:!0,writable:!0,value:o}):p[u]=o,B=(p,u)=>{for(var o in u||(u={}))A.call(u,o)&&h(p,o,u[o]);if(F)for(var o of F(u))y.call(u,o)&&h(p,o,u[o]);return p};import{_ as w,V as g,r as C,c as b,a as E,w as f,b as x,d as n,e as a,o as q}from"./app.6f8db57c.js";const D={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:p,createVNode:u,createElementVNode:o,openBlock:d,createElementBlock:m}=g,V={class:"slider-wrapper",style:{padding:"20px"}};function r(t,s){const e=p("d-slider");return d(),m("div",null,[o("div",V,[u(e,{min:t.minValue,max:t.maxValue,modelValue:t.inputValue,"onUpdate:modelValue":s[0]||(s[0]=l=>t.inputValue=l)},null,8,["min","max","modelValue"])])])}const{defineComponent:i,ref:c}=g,k=i({setup(){const t=c(12),s=c(0),e=c(20);return{inputValue:t,maxValue:e,minValue:s}}});return B({render:r},k)}(),"render-demo-1":function(){const{resolveComponent:p,createVNode:u,createElementVNode:o,openBlock:d,createElementBlock:m}=g,V={class:"slider-wrapper",style:{padding:"20px"}};function r(t,s){const e=p("d-slider");return d(),m("div",null,[o("div",V,[u(e,{min:t.minValue,max:t.maxValue,modelValue:t.inputValue,"onUpdate:modelValue":s[0]||(s[0]=l=>t.inputValue=l),step:t.step},null,8,["min","max","modelValue","step"])])])}const{defineComponent:i,ref:c}=g,k=i({setup(){const t=c(8),s=c(0),e=c(20),l=c(4);return{inputValue:t,maxValue:e,minValue:s,step:l}}});return B({render:r},k)}(),"render-demo-2":function(){const{resolveComponent:p,createVNode:u,createElementVNode:o,openBlock:d,createElementBlock:m}=g,V={class:"slider-wrapper",style:{padding:"20px"}};function r(t,s){const e=p("d-slider");return d(),m("div",null,[o("div",V,[u(e,{min:t.minValue,max:t.maxValue,modelValue:t.inputValue,"onUpdate:modelValue":s[0]||(s[0]=l=>t.inputValue=l),showInput:""},null,8,["min","max","modelValue"])])])}const{defineComponent:i,ref:c}=g,k=i({setup(){const t=c(10),s=c(0),e=c(20);return{inputValue:t,maxValue:e,minValue:s}}});return B({render:r},k)}(),"render-demo-3":function(){const{resolveComponent:p,createVNode:u,createElementVNode:o,openBlock:d,createElementBlock:m}=g,V={class:"slider-wrapper",style:{padding:"20px"}};function r(t,s){const e=p("d-slider");return d(),m("div",null,[o("div",V,[u(e,{modelValue:t.inputValue,"onUpdate:modelValue":s[0]||(s[0]=l=>t.inputValue=l),color:"#e67e22"},null,8,["modelValue"])])])}const{defineComponent:i,ref:c}=g,k=i({setup(){return{inputValue:c(20)}}});return B({render:r},k)}(),"render-demo-4":function(){const{resolveComponent:p,createVNode:u,createElementVNode:o,openBlock:d,createElementBlock:m}=g,V={class:"slider-wrapper",style:{padding:"20px"}},r=o("br",{style:{"margin-bottom":"20px"}},null,-1);function i(s,e){const l=p("d-slider");return d(),m("div",null,[o("div",V,[u(l,{min:s.minValue,max:s.maxValue,disabled:"",modelValue:s.disabledValue,"onUpdate:modelValue":e[0]||(e[0]=v=>s.disabledValue=v)},null,8,["min","max","modelValue"]),r,u(l,{min:s.minValue,max:s.maxValue,showInput:"",disabled:"",modelValue:s.disabledValue,"onUpdate:modelValue":e[1]||(e[1]=v=>s.disabledValue=v)},null,8,["min","max","modelValue"])])])}const{defineComponent:c,ref:k}=g,t=c({setup(){const s=k(5),e=k(50),l=k(2);return{disabledValue:s,maxValue:e,minValue:l}}});return B({render:i},t)}(),"render-demo-5":function(){const{resolveComponent:p,createVNode:u,createElementVNode:o,openBlock:d,createElementBlock:m}=g,V={class:"slider-wrapper",style:{padding:"20px"}},r=o("br",{style:{"margin-bottom":"20px"}},null,-1);function i(s,e){const l=p("d-slider");return d(),m("div",null,[o("div",null,[o("div",V,[u(l,{min:s.minValue,max:s.maxValue,modelValue:s.inputValue,"onUpdate:modelValue":e[0]||(e[0]=v=>s.inputValue=v),tipsRenderer:"apples"},null,8,["min","max","modelValue"]),r,u(l,{min:s.minValue,max:s.maxValue,modelValue:s.inputValue,"onUpdate:modelValue":e[1]||(e[1]=v=>s.inputValue=v),tipsRenderer:"null"},null,8,["min","max","modelValue"])])])])}const{defineComponent:c,ref:k}=g,t=c({setup(){const s=k(5),e=k(50),l=k(2);return{inputValue:s,maxValue:e,minValue:l}}});return B({render:i},t)}()}},Q='{"title":"Slider \u6ED1\u52A8\u8F93\u5165\u6761","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u53EF\u8BBE\u7F6EStep\u7684\u6ED1\u52A8\u7EC4\u4EF6","slug":"\u53EF\u8BBE\u7F6Estep\u7684\u6ED1\u52A8\u7EC4\u4EF6"},{"level":3,"title":"\u5E26\u6709\u8F93\u5165\u6846\u7684\u6ED1\u52A8\u7EC4\u4EF6","slug":"\u5E26\u6709\u8F93\u5165\u6846\u7684\u6ED1\u52A8\u7EC4\u4EF6"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u989C\u8272color","slug":"\u81EA\u5B9A\u4E49\u989C\u8272color"},{"level":3,"title":"\u7981\u6B62\u8F93\u5165\u6001","slug":"\u7981\u6B62\u8F93\u5165\u6001"},{"level":3,"title":"\u5B9A\u5236Popover\u7684\u663E\u793A\u5185\u5BB9","slug":"\u5B9A\u5236popover\u7684\u663E\u793A\u5185\u5BB9"},{"level":3,"title":"API","slug":"api"}],"relativePath":"components/slider/index.md","lastUpdated":1650338061176}',N=x('<h1 id="slider-\u6ED1\u52A8\u8F93\u5165\u6761" tabindex="-1">Slider \u6ED1\u52A8\u8F93\u5165\u6761 <a class="header-anchor" href="#slider-\u6ED1\u52A8\u8F93\u5165\u6761" aria-hidden="true">#</a></h1><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u7528\u6237\u9700\u8981\u5728\u6570\u503C\u533A\u95F4\u5185\u8FDB\u884C\u9009\u62E9\u65F6\u4F7F\u7528\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',4),I=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slider-wrapper"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a("20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputValue"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),U=n("h3",{id:"\u53EF\u8BBE\u7F6Estep\u7684\u6ED1\u52A8\u7EC4\u4EF6",tabindex:"-1"},[a("\u53EF\u8BBE\u7F6EStep\u7684\u6ED1\u52A8\u7EC4\u4EF6 "),n("a",{class:"header-anchor",href:"#\u53EF\u8BBE\u7F6Estep\u7684\u6ED1\u52A8\u7EC4\u4EF6","aria-hidden":"true"},"#")],-1),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slider-wrapper"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a("20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":step"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("step"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),R=n("h3",{id:"\u5E26\u6709\u8F93\u5165\u6846\u7684\u6ED1\u52A8\u7EC4\u4EF6",tabindex:"-1"},[a("\u5E26\u6709\u8F93\u5165\u6846\u7684\u6ED1\u52A8\u7EC4\u4EF6 "),n("a",{class:"header-anchor",href:"#\u5E26\u6709\u8F93\u5165\u6846\u7684\u6ED1\u52A8\u7EC4\u4EF6","aria-hidden":"true"},"#")],-1),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slider-wrapper"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a("20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"showInput"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),S=n("h3",{id:"\u81EA\u5B9A\u4E49\u989C\u8272color",tabindex:"-1"},[a("\u81EA\u5B9A\u4E49\u989C\u8272color "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u989C\u8272color","aria-hidden":"true"},"#")],-1),$=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slider-wrapper"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a("20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#e67e22"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" inputValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      inputValue`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),T=n("h3",{id:"\u7981\u6B62\u8F93\u5165\u6001",tabindex:"-1"},[a("\u7981\u6B62\u8F93\u5165\u6001 "),n("a",{class:"header-anchor",href:"#\u7981\u6B62\u8F93\u5165\u6001","aria-hidden":"true"},"#")],-1),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slider-wrapper"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a("20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"disabled"),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabledValue"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),a(" 20px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"showInput"),a(),n("span",{class:"token attr-name"},"disabled"),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabledValue"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),G=n("h3",{id:"\u5B9A\u5236popover\u7684\u663E\u793A\u5185\u5BB9",tabindex:"-1"},[a("\u5B9A\u5236Popover\u7684\u663E\u793A\u5185\u5BB9 "),n("a",{class:"header-anchor",href:"#\u5B9A\u5236popover\u7684\u663E\u793A\u5185\u5BB9","aria-hidden":"true"},"#")],-1),H=n("p",null,"\u901A\u8FC7 tipsRenderer \u53C2\u6570\u4F20\u5165\u5B9A\u5236 Popover \u5185\u7684\u663E\u793A\u5185\u5BB9\u3002",-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slider-wrapper"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a("20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a("  "),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"tipsRenderer"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("apples"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),a(" 20px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxValue"),n("span",{class:"token punctuation"},'"')]),a("  "),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"tipsRenderer"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("null"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
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
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      inputValue`),n("span",{class:"token punctuation"},","),a(`
      maxValue`),n("span",{class:"token punctuation"},","),a(`
      minValue`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),K=x('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><p>d-slider \u53C2\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C</th></tr></thead><tbody><tr><td>max</td><td>number</td><td>100</td><td>\u53EF\u9009\uFF0C\u6ED1\u52A8\u8F93\u5165\u6761\u7684\u6700\u5927\u503C</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>min</td><td>number</td><td>0</td><td>\u53EF\u9009\uFF0C\u6ED1\u52A8\u8F93\u5165\u6761\u7684\u6700\u5C0F\u503C</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>step</td><td>number</td><td>1</td><td>\u53EF\u9009\uFF0C\u6ED1\u52A8\u8F93\u5165\u6761\u7684\u6B65\u957F\uFF0C\u53D6\u503C\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E 1\uFF0C\u4E14\u5FC5\u987B\u53EF\u88AB(max-min)\u6574\u9664</td><td><a href="#%E5%8F%AF%E8%AE%BE%E7%BD%AEstep%E7%9A%84%E6%BB%91%E5%8A%A8%E7%BB%84%E4%BB%B6">\u53EF\u8BBE\u7F6EStep\u7684\u6ED1\u52A8\u7EC4\u4EF6</a></td></tr><tr><td>color</td><td>string</td><td>&#39;&#39;</td><td>\u53EF\u9009\uFF0C\u81EA\u5B9A\u4E49\u6ED1\u5757\u7684\u989C\u8272\u663E\u793A</td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2color">\u81EA\u5B9A\u4E49\u989C\u8272color</a></td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u53EF\u9009\uFF0C\u503C\u4E3A true \u65F6\u7981\u6B62\u7528\u6237\u8F93\u5165</td><td><a href="#%E7%A6%81%E6%AD%A2%E8%BE%93%E5%85%A5%E6%80%81">\u7981\u6B62\u8F93\u5165\u6001</a></td></tr><tr><td>showInput</td><td>boolean</td><td>false</td><td>\u53EF\u9009\uFF0C\u503C\u4E3A true \u663E\u793A\u8F93\u5165\u6846</td><td><a href="#%E5%B8%A6%E6%9C%89%E8%BE%93%E5%85%A5%E6%A1%86%E7%9A%84%E6%BB%91%E5%8A%A8%E7%BB%84%E4%BB%B6">\u5E26\u6709\u8F93\u5165\u6846\u7684\u6ED1\u52A8\u7EC4\u4EF6</a></td></tr><tr><td>tipsRenderer</td><td>string</td><td></td><td>\u53EF\u9009\uFF0C\u6E32\u67D3 Popover \u5185\u5BB9\u7684\u51FD\u6570\uFF0C\u4F20\u5165&#39;null&#39;\u65F6\u4E0D\u663E\u793A Popover</td><td><a href="#%E5%AE%9A%E5%88%B6popover%E7%9A%84%E6%98%BE%E7%A4%BA%E5%86%85%E5%AE%B9">\u5B9A\u5236popover\u7684\u663E\u793A\u5185\u5BB9</a></td></tr></tbody></table>',3);function L(p,u,o,d,m,V){const r=C("render-demo-0"),i=C("demo"),c=C("render-demo-1"),k=C("render-demo-2"),t=C("render-demo-3"),s=C("render-demo-4"),e=C("render-demo-5");return q(),b("div",null,[N,E(i,{sourceCode:`<template>
  <div class="slider-wrapper" style="padding:20px">
    <d-slider :min="minValue" :max="maxValue" v-model="inputValue"></d-slider>
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
`},{highlight:f(()=>[I]),default:f(()=>[E(r)]),_:1}),U,E(i,{sourceCode:`<template>
  <div class="slider-wrapper" style="padding:20px">
    <d-slider :min="minValue" :max="maxValue" v-model="inputValue" :step="step"></d-slider>
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
`},{highlight:f(()=>[P]),default:f(()=>[E(c)]),_:1}),R,E(i,{sourceCode:`<template>
  <div class="slider-wrapper" style="padding:20px">
    <d-slider :min="minValue" :max="maxValue" v-model="inputValue" showInput></d-slider>
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
`},{highlight:f(()=>[j]),default:f(()=>[E(k)]),_:1}),S,E(i,{sourceCode:`<template>
  <div class="slider-wrapper" style="padding:20px">
    <d-slider v-model="inputValue" color="#e67e22"></d-slider>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const inputValue = ref(20);
    return {
      inputValue,
    };
  },
});
<\/script>
`},{highlight:f(()=>[$]),default:f(()=>[E(t)]),_:1}),T,E(i,{sourceCode:`<template>
  <div class="slider-wrapper" style="padding:20px">
    <d-slider :min="minValue" :max="maxValue" disabled v-model="disabledValue"></d-slider>
    <br style="margin-bottom: 20px" />
    <d-slider :min="minValue" :max="maxValue" showInput disabled v-model="disabledValue"></d-slider>
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
`},{highlight:f(()=>[z]),default:f(()=>[E(s)]),_:1}),G,H,E(i,{sourceCode:`<template>
  <div>
    <div class="slider-wrapper" style="padding:20px">
      <d-slider  :min="minValue" :max="maxValue" v-model="inputValue" tipsRenderer="apples"></d-slider>
      <br style="margin-bottom: 20px" />
      <d-slider :min="minValue" :max="maxValue"  v-model="inputValue" tipsRenderer="null" ></d-slider>
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
    return {
      inputValue,
      maxValue,
      minValue,
    };
  },
});
<\/script>
`},{highlight:f(()=>[J]),default:f(()=>[E(e)]),_:1}),K])}var W=w(D,[["render",L]]);export{Q as __pageData,W as default};
