var q=Object.defineProperty;var w=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var V=(c,l,a)=>l in c?q(c,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):c[l]=a,A=(c,l)=>{for(var a in l||(l={}))I.call(l,a)&&V(c,a,l[a]);if(w)for(var a of w(l))S.call(l,a)&&V(c,a,l[a]);return c};import{_ as N,V as B,r as D,o as z,c as U,a as y,w as m,b,d as n,e as t}from"./app.05779a21.js";const L={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:c,resolveComponent:l,createVNode:a,openBlock:u,createElementBlock:h}=B,E={class:"devui-input-demo"},g=c("h4",null,"Default",-1),d=c("h4",null,"Disabled",-1),v=c("h4",null,"Error",-1);function f(o,e){const s=l("d-input");return u(),h("div",null,[c("div",E,[g,a(s,{modelValue:o.valueBasic1,"onUpdate:modelValue":e[0]||(e[0]=i=>o.valueBasic1=i),autofocus:""},null,8,["modelValue"]),d,a(s,{modelValue:o.valueBasic2,"onUpdate:modelValue":e[1]||(e[1]=i=>o.valueBasic2=i),placeholder:"\u8BF7\u8F93\u5165",disabled:""},null,8,["modelValue"]),v,a(s,{modelValue:o.valueBasic3,"onUpdate:modelValue":e[2]||(e[2]=i=>o.valueBasic3=i),placeholder:"\u8BF7\u8F93\u5165",error:""},null,8,["modelValue"])])])}const{defineComponent:k,ref:p}=B,r=k({setup(){const o=p(""),e=p(""),s=p("");return{valueBasic1:o,valueBasic2:e,valueBasic3:s}}});return A({render:f},r)}(),"render-demo-1":function(){const{resolveComponent:c,createVNode:l,createElementVNode:a,openBlock:u,createElementBlock:h}=B,E={class:"devui-input-demo"};function g(k,p){const r=c("d-input");return u(),h("div",null,[a("div",E,[l(r,{modelValue:k.valueClear,"onUpdate:modelValue":p[0]||(p[0]=o=>k.valueClear=o),clearable:"",onClear:k.handleClear,placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onClear"])])])}const{defineComponent:d,ref:v}=B,f=d({setup(){const k=()=>{console.log("clear")};return{valueClear:v(""),handleClear:k}}});return A({render:g},f)}(),"render-demo-2":function(){const{resolveComponent:c,createVNode:l,createElementVNode:a,openBlock:u,createElementBlock:h}=B,E={class:"devui-input-demo"};function g(k,p){const r=c("d-input");return u(),h("div",null,[a("div",E,[l(r,{modelValue:k.valuePsw,"onUpdate:modelValue":p[0]||(p[0]=o=>k.valuePsw=o),"show-password":"",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])])])}const{defineComponent:d,ref:v}=B,f=d({setup(){return{valuePsw:v("")}}});return A({render:g},f)}(),"render-demo-3":function(){const{createElementVNode:c,resolveComponent:l,createVNode:a,openBlock:u,createElementBlock:h}=B,E=c("h4",null,"Small",-1),g=c("h4",null,"Middle",-1),d=c("h4",null,"Large",-1);function v(r,o){const e=l("d-input");return u(),h("div",null,[c("div",null,[E,a(e,{modelValue:r.valueSm,"onUpdate:modelValue":o[0]||(o[0]=s=>r.valueSm=s),size:"sm",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"]),g,a(e,{modelValue:r.valueMd,"onUpdate:modelValue":o[1]||(o[1]=s=>r.valueMd=s),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"]),d,a(e,{modelValue:r.valueLg,"onUpdate:modelValue":o[2]||(o[2]=s=>r.valueLg=s),size:"lg",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])])])}const{defineComponent:f,ref:k}=B,p=f({setup(){const r=k(""),o=k(""),e=k("");return{valueSm:r,valueMd:o,valueLg:e}}});return A({render:v},p)}(),"render-demo-4":function(){const{createTextVNode:c,resolveComponent:l,withCtx:a,createVNode:u,createElementVNode:h,openBlock:E,createElementBlock:g}=B,d=c("\u4F7F\u7528\u5C5E\u6027"),v=c("\u4F7F\u7528\u63D2\u69FD");function f(o,e){const s=l("d-col"),i=l("d-input"),x=l("d-row"),C=l("d-icon");return E(),g("div",null,[h("div",null,[u(x,{gutter:10},{default:a(()=>[u(s,{span:3},{default:a(()=>[d]),_:1}),u(s,{span:9},{default:a(()=>[u(i,{modelValue:o.valueIcon1,"onUpdate:modelValue":e[0]||(e[0]=F=>o.valueIcon1=F),placeholder:"\u8BF7\u8F93\u5165",suffix:"close"},null,8,["modelValue"])]),_:1}),u(s,{span:9},{default:a(()=>[u(i,{modelValue:o.valueIcon2,"onUpdate:modelValue":e[1]||(e[1]=F=>o.valueIcon2=F),placeholder:"\u8BF7\u8F93\u5165",prefix:"search"},null,8,["modelValue"])]),_:1})]),_:1}),u(x,{style:{"margin-top":"20px"},gutter:10},{default:a(()=>[u(s,{span:3},{default:a(()=>[v]),_:1}),u(s,{span:9},{default:a(()=>[u(i,{modelValue:o.valueIcon3,"onUpdate:modelValue":e[2]||(e[2]=F=>o.valueIcon3=F),placeholder:"\u8BF7\u8F93\u5165"},{suffix:a(()=>[u(C,{name:"close",style:{"font-size":"inherit"}})]),_:1},8,["modelValue"])]),_:1}),u(s,{span:9},{default:a(()=>[u(i,{modelValue:o.valueIcon4,"onUpdate:modelValue":e[3]||(e[3]=F=>o.valueIcon4=F),placeholder:"\u8BF7\u8F93\u5165"},{prefix:a(()=>[u(C,{name:"search",style:{"font-size":"inherit"}})]),_:1},8,["modelValue"])]),_:1})]),_:1})])])}const{defineComponent:k,ref:p}=B,r=k({setup(){const o=p(""),e=p(""),s=p(""),i=p("");return{valueIcon1:o,valueIcon2:e,valueIcon3:s,valueIcon4:i}}});return A({render:f},r)}(),"render-demo-5":function(){const{createTextVNode:c,resolveComponent:l,withCtx:a,createVNode:u,createElementVNode:h,openBlock:E,createElementBlock:g}=B,d=c("https://"),v=c(".com");function f(e,s){const i=l("d-input"),x=l("d-select"),C=l("d-icon"),F=l("d-button");return E(),g("div",null,[h("div",null,[u(i,{modelValue:e.valueSlot1,"onUpdate:modelValue":s[0]||(s[0]=_=>e.valueSlot1=_),placeholder:"\u8BF7\u8F93\u5165"},{prepend:a(()=>[d]),_:1},8,["modelValue"]),u(i,{class:"devui-input-demo__mt",modelValue:e.valueSlot2,"onUpdate:modelValue":s[2]||(s[2]=_=>e.valueSlot2=_),placeholder:"\u8BF7\u8F93\u5165"},{prepend:a(()=>[u(x,{modelValue:e.valueSlot5,"onUpdate:modelValue":s[1]||(s[1]=_=>e.valueSlot5=_),options:e.options},null,8,["modelValue","options"])]),append:a(()=>[u(C,{name:"search",style:{"font-size":"inherit"}})]),_:1},8,["modelValue"]),u(i,{class:"devui-input-demo__mt",modelValue:e.valueSlot3,"onUpdate:modelValue":s[3]||(s[3]=_=>e.valueSlot3=_),placeholder:"\u8BF7\u8F93\u5165"},{append:a(()=>[v]),_:1},8,["modelValue"]),u(i,{class:"devui-input-demo__mt",modelValue:e.valueSlot4,"onUpdate:modelValue":s[4]||(s[4]=_=>e.valueSlot4=_),placeholder:"\u8BF7\u8F93\u5165"},{append:a(()=>[u(F,{icon:"search"})]),_:1},8,["modelValue"])])])}const{defineComponent:k,ref:p,reactive:r}=B,o=k({setup(){const s=r(["http://","https://"]),i=p(""),x=p(""),C=p(""),F=p(""),_=p("");return{valueSlot1:i,valueSlot2:x,valueSlot3:C,valueSlot4:F,valueSlot5:_,options:s}}});return A({render:f},o)}(),"render-demo-6":function(){const{resolveComponent:c,createVNode:l,createTextVNode:a,withCtx:u,createElementVNode:h,openBlock:E,createElementBlock:g}=B,d={class:"devui-input-demo"},v=a("\u9009\u4E2Dinput\u4E2D\u7684\u6587\u5B57"),f=a("\u4F7Finput\u83B7\u53D6\u7126\u70B9"),k=a("\u4F7Finput\u5931\u53BB\u7126\u70B9");function p(s,i){const x=c("d-input"),C=c("d-button");return E(),g("div",null,[h("div",d,[l(x,{ref:"demoInput",modelValue:s.valueFunc,"onUpdate:modelValue":i[0]||(i[0]=F=>s.valueFunc=F),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"]),l(C,{style:{"margin-top":"20px"},onClick:s.select,color:"primary"},{default:u(()=>[v]),_:1},8,["onClick"]),l(C,{style:{"margin-left":"10px"},onClick:s.focus,color:"primary"},{default:u(()=>[f]),_:1},8,["onClick"]),l(C,{style:{"margin-left":"10px"},onClick:s.blur,color:"primary"},{default:u(()=>[k]),_:1},8,["onClick"])])])}const{defineComponent:r,ref:o}=B,e=r({setup(){const s=o(null),i=()=>{s.value.select()},x=()=>{s.value.focus()},C=()=>{s.value.blur()},F=o("\u6D4B\u8BD5\u6587\u672C");return{demoInput:s,valueFunc:F,select:i,focus:x,blur:C}}});return A({render:p},e)}()}},cn='{"title":"Input \u8F93\u5165\u6846","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u4E00\u952E\u6E05\u7A7A","slug":"\u4E00\u952E\u6E05\u7A7A"},{"level":3,"title":"\u5BC6\u7801\u6846","slug":"\u5BC6\u7801\u6846"},{"level":3,"title":"\u5C3A\u5BF8","slug":"\u5C3A\u5BF8"},{"level":3,"title":"\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846","slug":"\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846"},{"level":3,"title":"\u590D\u5408\u578B\u8F93\u5165\u6846","slug":"\u590D\u5408\u578B\u8F93\u5165\u6846"},{"level":3,"title":"\u8F93\u5165\u6846\u65B9\u6CD5","slug":"\u8F93\u5165\u6846\u65B9\u6CD5"},{"level":3,"title":"Input \u53C2\u6570","slug":"input-\u53C2\u6570"},{"level":3,"title":"Input \u63D2\u69FD","slug":"input-\u63D2\u69FD"},{"level":3,"title":"Input \u4E8B\u4EF6","slug":"input-\u4E8B\u4EF6"},{"level":3,"title":"Input \u65B9\u6CD5","slug":"input-\u65B9\u6CD5"},{"level":3,"title":"Input \u7C7B\u578B\u5B9A\u4E49","slug":"input-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/input/index.md","lastUpdated":1657292571594}',M=b('<h1 id="input-\u8F93\u5165\u6846" tabindex="-1">Input \u8F93\u5165\u6846 <a class="header-anchor" href="#input-\u8F93\u5165\u6846" aria-hidden="true">#</a></h1><p>\u6587\u672C\u8F93\u5165\u6846\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u9700\u8981\u624B\u52A8\u8F93\u5165\u6587\u5B57\u4F7F\u7528\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),P=n("div",null,[n("code",null,"v-model"),t("\u5BF9\u8F93\u5165\u503C\u505A\u53CC\u5411\u7ED1\u5B9A\uFF0C"),n("code",null,"placeholder"),t("\u3001"),n("code",null,"autofocus"),t("\u7B49\u539F\u751F input \u652F\u6301\u7684\u5C5E\u6027\u4F1A\u88AB\u81EA\u52A8\u7EE7\u627F\u3002")],-1),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-input-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),n("span",{class:"token punctuation"},">")]),t("Default"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueBasic1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"autofocus"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),n("span",{class:"token punctuation"},">")]),t("Disabled"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueBasic2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),n("span",{class:"token punctuation"},">")]),t("Error"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueBasic3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"error"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueBasic1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueBasic2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueBasic3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      valueBasic1`),n("span",{class:"token punctuation"},","),t(`
      valueBasic2`),n("span",{class:"token punctuation"},","),t(`
      valueBasic3`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),T=n("h3",{id:"\u4E00\u952E\u6E05\u7A7A",tabindex:"-1"},[t("\u4E00\u952E\u6E05\u7A7A "),n("a",{class:"header-anchor",href:"#\u4E00\u952E\u6E05\u7A7A","aria-hidden":"true"},"#")],-1),$=n("p",null,[t("\u4F7F\u7528"),n("code",null,"clearable"),t("\u5C5E\u6027\u53EF\u5F97\u5230\u4E00\u4E2A\u53EF\u4E00\u952E\u6E05\u7A7A\u7684\u8F93\u5165\u6846\uFF0C\u4F7F\u7528"),n("code",null,"clear"),t("\u4E8B\u4EF6\u53EF\u5728\u6E05\u7A7A\u6309\u94AE\u88AB\u70B9\u51FB\u65F6\u505A\u4E00\u4E9B\u64CD\u4F5C\u3002")],-1),K=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-input-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueClear"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"clearable"),t(),n("span",{class:"token attr-name"},"@clear"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClear"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleClear"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'clear'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueClear "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      valueClear`),n("span",{class:"token punctuation"},","),t(`
      handleClear`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),G=n("h3",{id:"\u5BC6\u7801\u6846",tabindex:"-1"},[t("\u5BC6\u7801\u6846 "),n("a",{class:"header-anchor",href:"#\u5BC6\u7801\u6846","aria-hidden":"true"},"#")],-1),H=n("p",null,[t("\u4F7F\u7528 "),n("code",null,"show-password"),t(" \u5C5E\u6027\u53EF\u5F97\u5230\u4E00\u4E2A\u53EF\u5207\u6362\u663E\u793A\u9690\u85CF\u7684\u5BC6\u7801\u6846\u3002")],-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-input-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valuePsw"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"show-password"),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valuePsw "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      valuePsw`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),O=n("h3",{id:"\u5C3A\u5BF8",tabindex:"-1"},[t("\u5C3A\u5BF8 "),n("a",{class:"header-anchor",href:"#\u5C3A\u5BF8","aria-hidden":"true"},"#")],-1),Q=n("div",null,[t("\u652F\u6301"),n("code",null,"sm"),t("\u3001"),n("code",null,"md"),t("\u3001"),n("code",null,"lg"),t("\u4E09\u79CD\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u4E3A"),n("code",null,"md"),t("\u3002")],-1),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),n("span",{class:"token punctuation"},">")]),t("Small"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueSm"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sm"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),n("span",{class:"token punctuation"},">")]),t("Middle"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueMd"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),n("span",{class:"token punctuation"},">")]),t("Large"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueLg"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("lg"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueSm "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueMd "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueLg "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      valueSm`),n("span",{class:"token punctuation"},","),t(`
      valueMd`),n("span",{class:"token punctuation"},","),t(`
      valueLg`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),W=n("h3",{id:"\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846",tabindex:"-1"},[t("\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846 "),n("a",{class:"header-anchor",href:"#\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846","aria-hidden":"true"},"#")],-1),X=n("p",null,"\u8981\u5728\u8F93\u5165\u6846\u4E2D\u6DFB\u52A0\u56FE\u6807\uFF0C\u4F60\u53EF\u4EE5\u7B80\u5355\u5730\u4F7F\u7528 prefix \u548C suffix \u5C5E\u6027\u3002 \u53E6\u5916\uFF0C \u4E5F\u53EF\u4EE5\u4F7F\u7528 prefix \u548C suffix \u63D2\u69FD\u3002",-1),Y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-row")]),t(),n("span",{class:"token attr-name"},":gutter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u4F7F\u7528\u5C5E\u6027"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("9"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueIcon1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"suffix"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("close"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("9"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueIcon2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"prefix"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("search"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-row")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 20px")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},":gutter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u4F7F\u7528\u63D2\u69FD"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("9"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueIcon3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#suffix"),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("close"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" inherit"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-icon")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("9"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueIcon4"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#prefix"),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("search"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" inherit"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-icon")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueIcon1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueIcon2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueIcon3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueIcon4 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      valueIcon1`),n("span",{class:"token punctuation"},","),t(`
      valueIcon2`),n("span",{class:"token punctuation"},","),t(`
      valueIcon3`),n("span",{class:"token punctuation"},","),t(`
      valueIcon4`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Z=n("h3",{id:"\u590D\u5408\u578B\u8F93\u5165\u6846",tabindex:"-1"},[t("\u590D\u5408\u578B\u8F93\u5165\u6846 "),n("a",{class:"header-anchor",href:"#\u590D\u5408\u578B\u8F93\u5165\u6846","aria-hidden":"true"},"#")],-1),nn=n("p",null,"\u53EF\u4EE5\u5728\u8F93\u5165\u6846\u524D\u540E\u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20\uFF0C\u901A\u5E38\u662F\u6807\u7B7E\u6216\u6309\u94AE\u3002",-1),tn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueSlot1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#prepend"),n("span",{class:"token punctuation"},">")]),t("https://"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-input-demo__mt"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueSlot2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#prepend"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueSlot5"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-select")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#append"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("search"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" inherit"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-input-demo__mt"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueSlot3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#append"),n("span",{class:"token punctuation"},">")]),t(".com"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-input-demo__mt"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueSlot4"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#append"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("search"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" reactive "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" items "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'http://'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'https://'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),t("items"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueSlot1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueSlot2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueSlot3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueSlot4 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueSlot5 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      valueSlot1`),n("span",{class:"token punctuation"},","),t(`
      valueSlot2`),n("span",{class:"token punctuation"},","),t(`
      valueSlot3`),n("span",{class:"token punctuation"},","),t(`
      valueSlot4`),n("span",{class:"token punctuation"},","),t(`
      valueSlot5`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),an=n("h3",{id:"\u8F93\u5165\u6846\u65B9\u6CD5",tabindex:"-1"},[t("\u8F93\u5165\u6846\u65B9\u6CD5 "),n("a",{class:"header-anchor",href:"#\u8F93\u5165\u6846\u65B9\u6CD5","aria-hidden":"true"},"#")],-1),sn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-input-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demoInput"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueFunc"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 20px")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("select"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u9009\u4E2Dinput\u4E2D\u7684\u6587\u5B57"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),t(" 10px")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("focus"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u4F7Finput\u83B7\u53D6\u7126\u70B9"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),t(" 10px")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("blur"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u4F7Finput\u5931\u53BB\u7126\u70B9"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" demoInput "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"select"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      demoInput`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"select"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"focus"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      demoInput`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"focus"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"blur"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      demoInput`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"blur"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" valueFunc "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u6D4B\u8BD5\u6587\u672C'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      demoInput`),n("span",{class:"token punctuation"},","),t(`
      valueFunc`),n("span",{class:"token punctuation"},","),t(`
      select`),n("span",{class:"token punctuation"},","),t(`
      focus`),n("span",{class:"token punctuation"},","),t(`
      blur`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),en=b(`<h3 id="input-\u53C2\u6570" tabindex="-1">Input \u53C2\u6570 <a class="header-anchor" href="#input-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u7ED1\u5B9A\u503C</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6587\u672C\u6846\u662F\u5426\u88AB\u7981\u7528</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">error</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6587\u672C\u6846\u662F\u5426\u51FA\u73B0\u8F93\u5165\u9519\u8BEF</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><a href="#inputsize">InputSize</a></td><td style="text-align:left;">&#39;md&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6587\u672C\u6846\u5C3A\u5BF8\uFF0C\u6709\u4E09\u79CD\u9009\u62E9<code>&#39;lg&#39;</code>,<code>&#39;md&#39;</code>,<code>&#39;sm&#39;</code></td><td style="text-align:left;"><a href="#%E5%B0%BA%E5%AF%B8">\u5C3A\u5BF8</a></td></tr><tr><td style="text-align:left;">validate-event</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u5165\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">prefix</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u81EA\u5B9A\u4E49\u524D\u7F00\u56FE\u6807</td><td style="text-align:left;"><a href="#%E5%B8%A6%E5%9B%BE%E6%A0%87%E7%9A%84%E8%BE%93%E5%85%A5%E6%A1%86">\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846</a></td></tr><tr><td style="text-align:left;">suffix</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u81EA\u5B9A\u4E49\u540E\u7F00\u56FE\u6807</td><td style="text-align:left;"><a href="#%E5%B8%A6%E5%9B%BE%E6%A0%87%E7%9A%84%E8%BE%93%E5%85%A5%E6%A1%86">\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846</a></td></tr><tr><td style="text-align:left;">clearable</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u53EF\u6E05\u7A7A</td><td style="text-align:left;"><a href="#%E4%B8%80%E9%94%AE%E6%B8%85%E7%A9%BA">\u4E00\u952E\u6E05\u7A7A</a></td></tr></tbody></table><h3 id="input-\u63D2\u69FD" tabindex="-1">Input \u63D2\u69FD <a class="header-anchor" href="#input-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">prefix</td><td style="text-align:left;">\u8F93\u5165\u6846\u5934\u90E8\u5185\u5BB9</td><td style="text-align:left;"><a href="#%E5%B8%A6%E5%9B%BE%E6%A0%87%E7%9A%84%E8%BE%93%E5%85%A5%E6%A1%86">\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846</a></td></tr><tr><td style="text-align:left;">suffix</td><td style="text-align:left;">\u8F93\u5165\u6846\u5C3E\u90E8\u5185\u5BB9</td><td style="text-align:left;"><a href="#%E5%B8%A6%E5%9B%BE%E6%A0%87%E7%9A%84%E8%BE%93%E5%85%A5%E6%A1%86">\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846</a></td></tr><tr><td style="text-align:left;">prepend</td><td style="text-align:left;">\u8F93\u5165\u6846\u524D\u7F6E\u5185\u5BB9</td><td style="text-align:left;"><a href="#%E5%A4%8D%E5%90%88%E5%9E%8B%E8%BE%93%E5%85%A5%E6%A1%86">\u590D\u5408\u578B\u8F93\u5165\u6846</a></td></tr><tr><td style="text-align:left;">append</td><td style="text-align:left;">\u8F93\u5165\u6846\u540E\u7F6E\u5185\u5BB9</td><td style="text-align:left;"><a href="#%E5%A4%8D%E5%90%88%E5%9E%8B%E8%BE%93%E5%85%A5%E6%A1%86">\u590D\u5408\u578B\u8F93\u5165\u6846</a></td></tr></tbody></table><h3 id="input-\u4E8B\u4EF6" tabindex="-1">Input \u4E8B\u4EF6 <a class="header-anchor" href="#input-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u56DE\u8C03\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">focus</td><td style="text-align:left;"><code>Function(e: FocusEvent)</code></td><td style="text-align:left;">\u83B7\u53D6\u7126\u70B9\u65F6\u89E6\u53D1</td></tr><tr><td style="text-align:left;">blur</td><td style="text-align:left;"><code>Function(e: FocusEvent)</code></td><td style="text-align:left;">\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td></tr><tr><td style="text-align:left;">input</td><td style="text-align:left;"><code>Function(e: Event)</code></td><td style="text-align:left;">\u8F93\u5165\u503C\u6539\u53D8\u65F6\u89E6\u53D1</td></tr><tr><td style="text-align:left;">change</td><td style="text-align:left;"><code>Function(e: Event)</code></td><td style="text-align:left;">\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u6216\u6309\u4E0B\u56DE\u8F66\u65F6\u89E6\u53D1</td></tr><tr><td style="text-align:left;">keydown</td><td style="text-align:left;"><code>Function(e: KeyboardEvent)</code></td><td style="text-align:left;">\u6309\u4E0B\u6309\u952E\u65F6\u89E6\u53D1</td></tr><tr><td style="text-align:left;">clear</td><td style="text-align:left;">-</td><td style="text-align:left;">\u5728\u70B9\u51FB\u7531 <code>clearable</code> \u5C5E\u6027\u751F\u6210\u7684\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1</td></tr></tbody></table><h3 id="input-\u65B9\u6CD5" tabindex="-1">Input \u65B9\u6CD5 <a class="header-anchor" href="#input-\u65B9\u6CD5" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u65B9\u6CD5</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;">focus</td><td style="text-align:left;">\u4F7F input \u83B7\u53D6\u7126\u70B9</td><td>-</td></tr><tr><td style="text-align:left;">blur</td><td style="text-align:left;">\u4F7F input \u5931\u53BB\u7126\u70B9</td><td>-</td></tr><tr><td style="text-align:left;">select</td><td style="text-align:left;">\u9009\u4E2D input \u4E2D\u7684\u6587\u5B57</td><td>-</td></tr></tbody></table><h3 id="input-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Input \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#input-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="inputsize" tabindex="-1">InputSize <a class="header-anchor" href="#inputsize" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">InputSize</span> <span class="token operator">=</span> <span class="token string">&#39;sm&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;md&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;lg&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,11);function on(c,l,a,u,h,E){const g=D("render-demo-0"),d=D("demo"),v=D("render-demo-1"),f=D("render-demo-2"),k=D("render-demo-3"),p=D("render-demo-4"),r=D("render-demo-5"),o=D("render-demo-6");return z(),U("div",null,[M,y(d,{sourceCode:`<template>
  <div class="devui-input-demo">
    <h4>Default</h4>

    <d-input v-model="valueBasic1" autofocus></d-input>

    <h4>Disabled</h4>

    <d-input v-model="valueBasic2" placeholder="\u8BF7\u8F93\u5165" disabled></d-input>

    <h4>Error</h4>

    <d-input v-model="valueBasic3" placeholder="\u8BF7\u8F93\u5165" error></d-input>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const valueBasic1 = ref('');
    const valueBasic2 = ref('');
    const valueBasic3 = ref('');
    return {
      valueBasic1,
      valueBasic2,
      valueBasic3,
    };
  },
});
<\/script>
`},{description:m(()=>[P]),highlight:m(()=>[j]),default:m(()=>[y(g)]),_:1}),T,$,y(d,{sourceCode:`<template>
  <div class="devui-input-demo">
    <d-input v-model="valueClear" clearable @clear="handleClear" placeholder="\u8BF7\u8F93\u5165"></d-input>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const handleClear = () => {
      console.log('clear');
    };
    const valueClear = ref('');
    return {
      valueClear,
      handleClear,
    };
  },
});
<\/script>
`},{highlight:m(()=>[K]),default:m(()=>[y(v)]),_:1}),G,H,y(d,{sourceCode:`<template>
  <div class="devui-input-demo">
    <d-input v-model="valuePsw" show-password placeholder="\u8BF7\u8F93\u5165"></d-input>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const valuePsw = ref('');
    return {
      valuePsw,
    };
  },
});
<\/script>
`},{highlight:m(()=>[J]),default:m(()=>[y(f)]),_:1}),O,y(d,{sourceCode:`<template>
  <div>
    <h4>Small</h4>

    <d-input v-model="valueSm" size="sm" placeholder="\u8BF7\u8F93\u5165"></d-input>

    <h4>Middle</h4>

    <d-input v-model="valueMd" placeholder="\u8BF7\u8F93\u5165"></d-input>

    <h4>Large</h4>

    <d-input v-model="valueLg" size="lg" placeholder="\u8BF7\u8F93\u5165"></d-input>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const valueSm = ref('');
    const valueMd = ref('');
    const valueLg = ref('');
    return {
      valueSm,
      valueMd,
      valueLg,
    };
  },
});
<\/script>
`},{description:m(()=>[Q]),highlight:m(()=>[R]),default:m(()=>[y(k)]),_:1}),W,X,y(d,{sourceCode:`<template>
  <div>
    <d-row :gutter="10">
      <d-col :span="3">\u4F7F\u7528\u5C5E\u6027</d-col>
      <d-col :span="9">
        <d-input v-model="valueIcon1" placeholder="\u8BF7\u8F93\u5165" suffix="close" />
      </d-col>
      <d-col :span="9">
        <d-input v-model="valueIcon2" placeholder="\u8BF7\u8F93\u5165" prefix="search" />
      </d-col>
    </d-row>
    <d-row style="margin-top: 20px" :gutter="10">
      <d-col :span="3">\u4F7F\u7528\u63D2\u69FD</d-col>
      <d-col :span="9">
        <d-input v-model="valueIcon3" placeholder="\u8BF7\u8F93\u5165">
          <template #suffix>
            <d-icon name="close" style="font-size: inherit;"></d-icon>
          </template>
        </d-input>
      </d-col>
      <d-col :span="9">
        <d-input v-model="valueIcon4" placeholder="\u8BF7\u8F93\u5165">
          <template #prefix>
            <d-icon name="search" style="font-size: inherit;"></d-icon>
          </template>
        </d-input>
      </d-col>
    </d-row>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const valueIcon1 = ref('');
    const valueIcon2 = ref('');
    const valueIcon3 = ref('');
    const valueIcon4 = ref('');
    return {
      valueIcon1,
      valueIcon2,
      valueIcon3,
      valueIcon4,
    };
  },
});
<\/script>
`},{highlight:m(()=>[Y]),default:m(()=>[y(p)]),_:1}),Z,nn,y(d,{sourceCode:`<template>
  <div>
    <d-input v-model="valueSlot1" placeholder="\u8BF7\u8F93\u5165">
      <template #prepend>https://</template>
    </d-input>

    <d-input class="devui-input-demo__mt" v-model="valueSlot2" placeholder="\u8BF7\u8F93\u5165">
      <template #prepend>
        <d-select v-model="valueSlot5" :options="options"></d-select>
      </template>
      <template #append>
        <d-icon name="search" style="font-size: inherit;" />
      </template>
    </d-input>

    <d-input class="devui-input-demo__mt" v-model="valueSlot3" placeholder="\u8BF7\u8F93\u5165">
      <template #append>.com</template>
    </d-input>

    <d-input class="devui-input-demo__mt" v-model="valueSlot4" placeholder="\u8BF7\u8F93\u5165">
      <template #append>
        <d-button icon="search"></d-button>
      </template>
    </d-input>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
  setup() {
    const items = ['http://', 'https://'];
    const options = reactive(items);
    const valueSlot1 = ref('');
    const valueSlot2 = ref('');
    const valueSlot3 = ref('');
    const valueSlot4 = ref('');
    const valueSlot5 = ref('');
    return {
      valueSlot1,
      valueSlot2,
      valueSlot3,
      valueSlot4,
      valueSlot5,
      options,
    };
  },
});
<\/script>
`},{highlight:m(()=>[tn]),default:m(()=>[y(r)]),_:1}),an,y(d,{sourceCode:`<template>
  <div class="devui-input-demo">
    <d-input ref="demoInput" v-model="valueFunc" placeholder="\u8BF7\u8F93\u5165"></d-input>
    <d-button style="margin-top: 20px" @click="select" color="primary">\u9009\u4E2Dinput\u4E2D\u7684\u6587\u5B57</d-button>
    <d-button style="margin-left: 10px" @click="focus" color="primary">\u4F7Finput\u83B7\u53D6\u7126\u70B9</d-button>
    <d-button style="margin-left: 10px" @click="blur" color="primary">\u4F7Finput\u5931\u53BB\u7126\u70B9</d-button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const demoInput = ref(null);
    const select = () => {
      demoInput.value.select();
    };
    const focus = () => {
      demoInput.value.focus();
    };
    const blur = () => {
      demoInput.value.blur();
    };
    const valueFunc = ref('\u6D4B\u8BD5\u6587\u672C');
    return {
      demoInput,
      valueFunc,
      select,
      focus,
      blur,
    };
  },
});
<\/script>
`},{highlight:m(()=>[sn]),default:m(()=>[y(o)]),_:1}),en])}var pn=N(L,[["render",on]]);export{cn as __pageData,pn as default};
