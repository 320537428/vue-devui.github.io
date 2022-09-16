var x=Object.defineProperty;var y=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var _=(e,p,a)=>p in e?x(e,p,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[p]=a,B=(e,p)=>{for(var a in p||(p={}))V.call(p,a)&&_(e,a,p[a]);if(y)for(var a of y(p))A.call(p,a)&&_(e,a,p[a]);return e};import{_ as w,V as v,r as h,o as D,c as N,a as C,w as i,b,d as n,e as t}from"./app.c9090e69.js";const q={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:p,createElementVNode:a,openBlock:m,createElementBlock:g}=v;function f(u,o){const c=e("d-input-number");return m(),g("div",null,[a("div",null,[p(c,{modelValue:u.num,"onUpdate:modelValue":o[0]||(o[0]=s=>u.num=s),onChange:u.onChange,placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onChange"])])])}const{defineComponent:k,ref:l}=v,d=k({setup(u){return{num:l(0),onChange:(s,r)=>{console.log(s,r)}}}});return B({render:f},d)}(),"render-demo-1":function(){const{resolveComponent:e,createVNode:p,createElementVNode:a,openBlock:m,createElementBlock:g}=v;function f(u,o){const c=e("d-input-number");return m(),g("div",null,[a("div",null,[p(c,{modelValue:u.num,"onUpdate:modelValue":o[0]||(o[0]=s=>u.num=s),disabled:""},null,8,["modelValue"])])])}const{defineComponent:k,ref:l}=v,d=k({setup(u){return{num:l(0)}}});return B({render:f},d)}(),"render-demo-2":function(){const{resolveComponent:e,createVNode:p,createElementVNode:a,openBlock:m,createElementBlock:g}=v;function f(u,o){const c=e("d-input-number");return m(),g("div",null,[a("div",null,[p(c,{modelValue:u.num,"onUpdate:modelValue":o[0]||(o[0]=s=>u.num=s),min:1,max:5},null,8,["modelValue"])])])}const{defineComponent:k,ref:l}=v,d=k({setup(u){return{num:l(0)}}});return B({render:f},d)}(),"render-demo-3":function(){const{resolveComponent:e,createVNode:p,createElementVNode:a,openBlock:m,createElementBlock:g}=v;function f(u,o){const c=e("d-input-number");return m(),g("div",null,[a("div",null,[p(c,{modelValue:u.num,"onUpdate:modelValue":o[0]||(o[0]=s=>u.num=s),step:3},null,8,["modelValue"])])])}const{defineComponent:k,ref:l}=v,d=k({setup(u){return{num:l(3)}}});return B({render:f},d)}(),"render-demo-4":function(){const{resolveComponent:e,createVNode:p,createElementVNode:a,openBlock:m,createElementBlock:g}=v;function f(u,o){const c=e("d-input-number");return m(),g("div",null,[a("div",null,[p(c,{modelValue:u.num,"onUpdate:modelValue":o[0]||(o[0]=s=>u.num=s),precision:2,step:.1},null,8,["modelValue","step"])])])}const{defineComponent:k,ref:l}=v,d=k({setup(u){return{num:l(1)}}});return B({render:f},d)}(),"render-demo-5":function(){const{createElementVNode:e,resolveComponent:p,createVNode:a,openBlock:m,createElementBlock:g}=v,f=e("div",{class:"space"},"Large",-1),k=e("div",{class:"space"},"Middle",-1),l=e("div",{class:"space"},"Small",-1);function d(s,r){const E=p("d-input-number");return m(),g("div",null,[e("div",null,[f,a(E,{modelValue:s.num1,"onUpdate:modelValue":r[0]||(r[0]=F=>s.num1=F),size:"lg"},null,8,["modelValue"]),k,a(E,{modelValue:s.num2,"onUpdate:modelValue":r[1]||(r[1]=F=>s.num2=F),size:"md"},null,8,["modelValue"]),l,a(E,{modelValue:s.num3,"onUpdate:modelValue":r[2]||(r[2]=F=>s.num3=F),size:"sm"},null,8,["modelValue"])])])}const{defineComponent:u,ref:o}=v,c=u({setup(){const s=o(1),r=o(2),E=o(3);return{num1:s,num2:r,num3:E}}});return B({render:d},c)}(),"render-demo-6":function(){const{createElementVNode:e,resolveComponent:p,createVNode:a,openBlock:m,createElementBlock:g}=v,f=e("div",{class:"space"},"reg",-1),k=e("div",{class:"space"},"regStr",-1);function l(c,s){const r=p("d-input-number");return m(),g("div",null,[e("div",null,[f,a(r,{modelValue:c.num1,"onUpdate:modelValue":s[0]||(s[0]=E=>c.num1=E),reg:c.reg},null,8,["modelValue","reg"]),k,a(r,{modelValue:c.num2,"onUpdate:modelValue":s[1]||(s[1]=E=>c.num2=E),reg:c.regStr},null,8,["modelValue","reg"])])])}const{defineComponent:d,ref:u}=v,o=d({setup(){const c=/^(-|\+)?\d*$/,s="^(-|\\+)*\\d*$",r=u(1),E=u(2);return{num1:r,num2:E,reg:c,regStr:s}}});return B({render:l},o)}()}},en='{"title":"InputNumber \u6570\u5B57\u8F93\u5165\u6846","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u7981\u7528\u72B6\u6001","slug":"\u7981\u7528\u72B6\u6001"},{"level":3,"title":"\u6570\u503C\u8303\u56F4","slug":"\u6570\u503C\u8303\u56F4"},{"level":3,"title":"\u6B65\u6570","slug":"\u6B65\u6570"},{"level":3,"title":"\u7CBE\u5EA6","slug":"\u7CBE\u5EA6"},{"level":3,"title":"\u5C3A\u5BF8","slug":"\u5C3A\u5BF8"},{"level":3,"title":"\u6B63\u5219\u9650\u5236","slug":"\u6B63\u5219\u9650\u5236"},{"level":3,"title":"InputNumber \u53C2\u6570","slug":"inputnumber-\u53C2\u6570"},{"level":3,"title":"InputNumber \u4E8B\u4EF6","slug":"inputnumber-\u4E8B\u4EF6"},{"level":3,"title":"InputNumber \u65B9\u6CD5","slug":"inputnumber-\u65B9\u6CD5"},{"level":3,"title":"InputNumber \u7C7B\u578B\u5B9A\u4E49","slug":"inputnumber-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/input-number/index.md","lastUpdated":1662174068914}',I=b('<h1 id="inputnumber-\u6570\u5B57\u8F93\u5165\u6846" tabindex="-1">InputNumber \u6570\u5B57\u8F93\u5165\u6846 <a class="header-anchor" href="#inputnumber-\u6570\u5B57\u8F93\u5165\u6846" aria-hidden="true">#</a></h1><p>\u6570\u5B57\u8F93\u5165\u6846\u7EC4\u4EF6\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u9700\u8981\u83B7\u53D6\u6807\u51C6\u6570\u503C\u65F6\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),z=n("div",null,[t("\u53EA\u9700\u8981\u5728 d-input-number \u5143\u7D20\u4E2D\u4F7F\u7528 "),n("code",null,"v-model"),t(" \u7ED1\u5B9A\u53D8\u91CF\u5373\u53EF\uFF0C\u53D8\u91CF\u7684\u521D\u59CB\u503C\u5373\u4E3A\u9ED8\u8BA4\u503C\u3002")],-1),S=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input-number")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("num"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onChange"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input-number")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"props"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" num "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("newVal"),n("span",{class:"token punctuation"},","),t(" oldVal")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("newVal"),n("span",{class:"token punctuation"},","),t(" oldVal"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      num`),n("span",{class:"token punctuation"},","),t(`
      onChange`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),U=n("h3",{id:"\u7981\u7528\u72B6\u6001",tabindex:"-1"},[t("\u7981\u7528\u72B6\u6001 "),n("a",{class:"header-anchor",href:"#\u7981\u7528\u72B6\u6001","aria-hidden":"true"},"#")],-1),$=n("div",null,[n("code",null,"disabled"),t(" \u5C5E\u6027\u8BBE\u7F6E\u4E3A "),n("code",null,"true"),t(" \u5373\u53EF\u7981\u7528\u6574\u4E2A\u7EC4\u4EF6\u3002")],-1),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input-number")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("num"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input-number")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"props"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" num "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      num`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),L=n("h3",{id:"\u6570\u503C\u8303\u56F4",tabindex:"-1"},[t("\u6570\u503C\u8303\u56F4 "),n("a",{class:"header-anchor",href:"#\u6570\u503C\u8303\u56F4","aria-hidden":"true"},"#")],-1),M=n("div",null,[t("\u5982\u679C\u4F60\u9700\u8981\u63A7\u5236\u6570\u503C\u5728\u67D0\u4E00\u8303\u56F4\u5185\uFF0C\u53EF\u4EE5\u8BBE\u7F6E "),n("code",null,"min"),t(" \u5C5E\u6027\u548C "),n("code",null,"max"),t(" \u5C5E\u6027\u3002\u5F53\u7ED9\u7EC4\u4EF6\u8BBE\u7F6E\u7684\u521D\u59CB\u503C\u5927\u4E8E "),n("code",null,"max"),t(" \u5C5E\u6027\u503C\u65F6\u4F1A\u81EA\u52A8\u88AB\u91CD\u7F6E\u4E3A "),n("code",null,"max"),t("\u5C5E\u6027\u503C\uFF0C\u5C0F\u4E8E "),n("code",null,"min"),t(" \u5C5E\u6027\u503C\u65F6\u4F1A\u81EA\u52A8\u88AB\u91CD\u7F6E\u4E3A "),n("code",null,"min"),t("\u5C5E\u6027\u503C\u3002")],-1),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input-number")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("num"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input-number")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"props"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" num "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      num`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),R=n("h3",{id:"\u6B65\u6570",tabindex:"-1"},[t("\u6B65\u6570 "),n("a",{class:"header-anchor",href:"#\u6B65\u6570","aria-hidden":"true"},"#")],-1),T=n("div",null,[t("\u8BBE\u7F6E "),n("code",null,"step"),t(" \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u6B65\u957F\u3002")],-1),G=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input-number")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("num"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":step"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input-number")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"props"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" num "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      num`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),H=n("h3",{id:"\u7CBE\u5EA6",tabindex:"-1"},[t("\u7CBE\u5EA6 "),n("a",{class:"header-anchor",href:"#\u7CBE\u5EA6","aria-hidden":"true"},"#")],-1),J=n("div",null,[n("code",null,"precision"),t("\u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u6570\u503C\u7CBE\u5EA6\u3002")],-1),K=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input-number")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("num"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":precision"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":step"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("0.1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input-number")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"props"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" num "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      num`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),O=n("h3",{id:"\u5C3A\u5BF8",tabindex:"-1"},[t("\u5C3A\u5BF8 "),n("a",{class:"header-anchor",href:"#\u5C3A\u5BF8","aria-hidden":"true"},"#")],-1),Q=n("div",null,"\u63D0\u4F9B\u4E86 lg\u3001md\u3001sm \u4E09\u79CD\u5C3A\u5BF8\u7684\u6570\u5B57\u8F93\u5165\u6846\uFF0C\u9ED8\u8BA4\u5C3A\u5BF8\u4E3A md\u3002",-1),W=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("space"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Large"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input-number")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("num1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},"'"),t("lg"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input-number")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("space"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Middle"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input-number")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("num2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},"'"),t("md"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input-number")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("space"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Small"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input-number")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("num3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},"'"),t("sm"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input-number")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" num1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" num2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" num3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      num1`),n("span",{class:"token punctuation"},","),t(`
      num2`),n("span",{class:"token punctuation"},","),t(`
      num3`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".space"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 5px 0"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),X=n("h3",{id:"\u6B63\u5219\u9650\u5236",tabindex:"-1"},[t("\u6B63\u5219\u9650\u5236 "),n("a",{class:"header-anchor",href:"#\u6B63\u5219\u9650\u5236","aria-hidden":"true"},"#")],-1),Y=n("div",null,"\u5141\u8BB8\u4F20\u5165\u6B63\u5219\u6216\u6B63\u5219\u5B57\u7B26\u4E32\u9650\u5236\u8F93\u5165\uFF0C\u8F93\u5165\u65F6\u4F1A\u4F18\u5148\u5339\u914D\u4F20\u5165\u7684\u6B63\u5219\uFF0C\u4E0D\u8F93\u5165\u5219\u4E0D\u9650\u5236\u3002",-1),Z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("space"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("reg"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input-number")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("num1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":reg"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("reg"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input-number")]),n("span",{class:"token punctuation"},">")]),t(`
    
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("space"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("regStr"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input-number")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("num2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":reg"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("regStr"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input-number")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" reg "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"^(-|\\+)?\\d*$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" regStr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'^(-|\\\\+)*\\\\d*$'"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" num1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" num2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      num1`),n("span",{class:"token punctuation"},","),t(`
      num2`),n("span",{class:"token punctuation"},","),t(`
      reg`),n("span",{class:"token punctuation"},","),t(`
      regStr
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".space"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 5px 0"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),nn=b(`<h3 id="inputnumber-\u53C2\u6570" tabindex="-1">InputNumber \u53C2\u6570 <a class="header-anchor" href="#inputnumber-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6587\u672C\u6846\u7684\u503C</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">step</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">1</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6B65\u6570</td><td style="text-align:left;"><a href="#%E6%AD%A5%E6%95%B0">\u6B65\u6570</a></td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6587\u672C\u6846 placeholder</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">max</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Infinity</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u7684\u6700\u5927\u503C max</td><td style="text-align:left;"><a href="#%E6%95%B0%E5%80%BC%E8%8C%83%E5%9B%B4">\u6570\u503C\u8303\u56F4</a></td></tr><tr><td style="text-align:left;">min</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-Infinity</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u7684\u6700\u5C0F\u503C min</td><td style="text-align:left;"><a href="#%E6%95%B0%E5%80%BC%E8%8C%83%E5%9B%B4">\u6570\u503C\u8303\u56F4</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6587\u672C\u6846\u662F\u5426\u88AB\u7981\u7528</td><td style="text-align:left;"><a href="#%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81">\u7981\u7528\u72B6\u6001</a></td></tr><tr><td style="text-align:left;">precision</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6570\u503C\u7CBE\u5EA6</td><td style="text-align:left;"><a href="#%E7%B2%BE%E5%BA%A6">\u7CBE\u5EA6</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><a href="#isize">ISize</a></td><td style="text-align:left;">&#39;md&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6587\u672C\u6846\u5C3A\u5BF8</td><td style="text-align:left;"><a href="#%E5%B0%BA%E5%AF%B8">\u5C3A\u5BF8</a></td></tr><tr><td style="text-align:left;">reg</td><td style="text-align:left;"><code>RegExp| string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7528\u4E8E\u9650\u5236\u8F93\u5165\u7684\u6B63\u5219\u6216\u6B63\u5219\u5B57\u7B26\u4E32</td><td style="text-align:left;"><a href="#%E6%AD%A3%E5%88%99%E9%99%90%E5%88%B6">\u6B63\u5219\u9650\u5236</a></td></tr></tbody></table><h3 id="inputnumber-\u4E8B\u4EF6" tabindex="-1">InputNumber \u4E8B\u4EF6 <a class="header-anchor" href="#inputnumber-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u56DE\u8C03\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td style="text-align:left;"><code>Function(currentVal: number | undefined, oldVal:number | undefined)</code></td><td style="text-align:left;">\u7ED1\u5B9A\u503C\u88AB\u6539\u53D8\u65F6\u89E6\u53D1</td></tr><tr><td style="text-align:left;">blur</td><td style="text-align:left;"><code>Function(event: Event)</code></td><td style="text-align:left;">\u5728 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td></tr><tr><td style="text-align:left;">focus</td><td style="text-align:left;"><code>Function(event: Event)</code></td><td style="text-align:left;">\u5728 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td></tr><tr><td style="text-align:left;">input</td><td style="text-align:left;"><code>Function(currentValue: number | undefined)</code></td><td style="text-align:left;">\u5728 Input \u83B7\u5F97\u8F93\u5165\u65F6\u89E6\u53D1</td></tr></tbody></table><h3 id="inputnumber-\u65B9\u6CD5" tabindex="-1">InputNumber \u65B9\u6CD5 <a class="header-anchor" href="#inputnumber-\u65B9\u6CD5" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u65B9\u6CD5\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">focus</td><td style="text-align:left;"><code>() =&gt; void</code></td><td style="text-align:left;">\u4F7F Input \u83B7\u5F97\u7126\u70B9</td></tr><tr><td style="text-align:left;">blur</td><td style="text-align:left;"><code>() =&gt; void</code></td><td style="text-align:left;">\u4F7F Input \u5931\u53BB\u7126\u70B9</td></tr><tr><td style="text-align:left;">select</td><td style="text-align:left;"><code>() =&gt; void</code></td><td style="text-align:left;">\u9009\u4E2D Input \u4E2D\u7684\u5185\u5BB9</td></tr></tbody></table><h3 id="inputnumber-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">InputNumber \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#inputnumber-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="isize" tabindex="-1">ISize <a class="header-anchor" href="#isize" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">ISize</span> <span class="token operator">=</span> <span class="token string">&#39;lg&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;md&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;sm&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,9);function tn(e,p,a,m,g,f){const k=h("render-demo-0"),l=h("demo"),d=h("render-demo-1"),u=h("render-demo-2"),o=h("render-demo-3"),c=h("render-demo-4"),s=h("render-demo-5"),r=h("render-demo-6");return D(),N("div",null,[I,C(l,{sourceCode:`<template>
  <div>
    <d-input-number v-model="num" @change="onChange" placeholder="\u8BF7\u8F93\u5165"></d-input-number>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(props) {
    const num = ref(0);
    const onChange = (newVal, oldVal) => {
      console.log(newVal, oldVal);
    };
    return {
      num,
      onChange,
    };
  },
});
<\/script>
`},{description:i(()=>[z]),highlight:i(()=>[S]),default:i(()=>[C(k)]),_:1}),U,C(l,{sourceCode:`<template>
  <div>
    <d-input-number v-model="num" disabled></d-input-number>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(props) {
    const num = ref(0);
    return {
      num,
    };
  },
});
<\/script>
`},{description:i(()=>[$]),highlight:i(()=>[j]),default:i(()=>[C(d)]),_:1}),L,C(l,{sourceCode:`<template>
  <div>
    <d-input-number v-model="num" :min="1" :max="5"></d-input-number>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(props) {
    const num = ref(0);
    return {
      num,
    };
  },
});
<\/script>
`},{description:i(()=>[M]),highlight:i(()=>[P]),default:i(()=>[C(u)]),_:1}),R,C(l,{sourceCode:`<template>
  <div>
    <d-input-number v-model="num" :step="3"></d-input-number>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(props) {
    const num = ref(3);
    return {
      num,
    };
  },
});
<\/script>
`},{description:i(()=>[T]),highlight:i(()=>[G]),default:i(()=>[C(o)]),_:1}),H,C(l,{sourceCode:`<template>
  <div>
    <d-input-number v-model="num" :precision="2" :step="0.1"></d-input-number>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(props) {
    const num = ref(1);
    return {
      num,
    };
  },
});
<\/script>
`},{description:i(()=>[J]),highlight:i(()=>[K]),default:i(()=>[C(c)]),_:1}),O,C(l,{sourceCode:`<template>
  <div>
    <div class="space">Large</div>
    <d-input-number v-model="num1" :size="'lg'"></d-input-number>
    <div class="space">Middle</div>
    <d-input-number v-model="num2" :size="'md'"></d-input-number>
    <div class="space">Small</div>
    <d-input-number v-model="num3" :size="'sm'"></d-input-number>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const num1 = ref(1);
    const num2 = ref(2);
    const num3 = ref(3);
    return {
      num1,
      num2,
      num3,
    };
  },
});
<\/script>
<style>
.space {
  padding: 5px 0;
  font-size: 16px;
}
</style>
`},{description:i(()=>[Q]),highlight:i(()=>[W]),default:i(()=>[C(s)]),_:1}),X,C(l,{sourceCode:`<template>
  <div>
    <div class="space">reg</div>
    <d-input-number v-model="num1" :reg="reg"></d-input-number>
    
    <div class="space">regStr</div>
    <d-input-number v-model="num2" :reg="regStr"></d-input-number>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const reg = /^(-|\\+)?\\d*$/;
    const regStr = '^(-|\\\\+)*\\\\d*$';
    const num1 = ref(1);
    const num2 = ref(2);
    return {
      num1,
      num2,
      reg,
      regStr
    };
  },
});
<\/script>
<style>
.space {
  padding: 5px 0;
  font-size: 16px;
}
</style>
`},{description:i(()=>[Y]),highlight:i(()=>[Z]),default:i(()=>[C(r)]),_:1}),nn])}var un=w(q,[["render",tn]]);export{en as __pageData,un as default};
