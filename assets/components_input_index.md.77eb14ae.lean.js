var q=Object.defineProperty;var V=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var b=(l,p,a)=>p in l?q(l,p,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[p]=a,A=(l,p)=>{for(var a in p||(p={}))N.call(p,a)&&b(l,a,p[a]);if(V)for(var a of V(p))I.call(p,a)&&b(l,a,p[a]);return l};import{_ as U,V as E,r as D,c as z,a as B,w as m,b as w,d as n,e as t,o as j}from"./app.0ce8509b.js";const S={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:l,resolveComponent:p,createVNode:a,openBlock:u,createElementBlock:F}=E,h={class:"devui-input-demo"},g=l("h4",null,"Default",-1),r=l("h4",null,"Disabled",-1),f=l("h4",null,"Error",-1);function v(o,e){const s=p("d-input");return u(),F("div",null,[l("div",h,[g,a(s,{modelValue:o.value1,"onUpdate:modelValue":e[0]||(e[0]=k=>o.value1=k),placeholder:"\u8BF7\u8F93\u5165",autofocus:""},null,8,["modelValue"]),r,a(s,{modelValue:o.value2,"onUpdate:modelValue":e[1]||(e[1]=k=>o.value2=k),placeholder:"\u8BF7\u8F93\u5165",disabled:""},null,8,["modelValue"]),f,a(s,{modelValue:o.value3,"onUpdate:modelValue":e[2]||(e[2]=k=>o.value3=k),placeholder:"\u8BF7\u8F93\u5165",error:""},null,8,["modelValue"])])])}const{defineComponent:i,ref:c}=E,d=i({setup(){return{value1:c(""),value2:c(""),value3:c("")}}});return A({render:v},d)}(),"render-demo-1":function(){const{resolveComponent:l,createVNode:p,createElementVNode:a,openBlock:u,createElementBlock:F}=E,h={class:"devui-input-demo"};function g(i,c){const d=l("d-input");return u(),F("div",null,[a("div",h,[p(d,{modelValue:i.value1,"onUpdate:modelValue":c[0]||(c[0]=o=>i.value1=o),clearable:"",onClear:i.handleClear,placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onClear"])])])}const{defineComponent:r,ref:f}=E,v=r({setup(){const i=()=>{console.log("clear")};return{value1:f(""),handleClear:i}}});return A({render:g},v)}(),"render-demo-2":function(){const{resolveComponent:l,createVNode:p,createElementVNode:a,openBlock:u,createElementBlock:F}=E,h={class:"devui-input-demo"};function g(i,c){const d=l("d-input");return u(),F("div",null,[a("div",h,[p(d,{modelValue:i.value1,"onUpdate:modelValue":c[0]||(c[0]=o=>i.value1=o),"show-password":"",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])])])}const{defineComponent:r,ref:f}=E,v=r({setup(){return{value1:f("")}}});return A({render:g},v)}(),"render-demo-3":function(){const{createElementVNode:l,resolveComponent:p,createVNode:a,openBlock:u,createElementBlock:F}=E,h=l("h4",null,"Small",-1),g=l("h4",null,"Middle",-1),r=l("h4",null,"Large",-1);function f(d,o){const e=p("d-input");return u(),F("div",null,[l("div",null,[h,a(e,{modelValue:d.value1,"onUpdate:modelValue":o[0]||(o[0]=s=>d.value1=s),size:"sm",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"]),g,a(e,{modelValue:d.value2,"onUpdate:modelValue":o[1]||(o[1]=s=>d.value2=s),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"]),r,a(e,{modelValue:d.value3,"onUpdate:modelValue":o[2]||(o[2]=s=>d.value3=s),size:"lg",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])])])}const{defineComponent:v,ref:i}=E,c=v({setup(){return{value1:i(""),value2:i(""),value3:i("")}}});return A({render:f},c)}(),"render-demo-4":function(){const{createTextVNode:l,resolveComponent:p,withCtx:a,createVNode:u,createElementVNode:F,openBlock:h,createElementBlock:g}=E,r=l("\u4F7F\u7528\u5C5E\u6027"),f=l("\u4F7F\u7528\u63D2\u69FD");function v(o,e){const s=p("d-col"),k=p("d-input"),x=p("d-row"),C=p("d-icon");return h(),g("div",null,[F("div",null,[u(x,{gutter:10},{default:a(()=>[u(s,{span:3},{default:a(()=>[r]),_:1}),u(s,{span:9},{default:a(()=>[u(k,{modelValue:o.input1,"onUpdate:modelValue":e[0]||(e[0]=y=>o.input1=y),placeholder:"\u8BF7\u8F93\u5165",suffix:"close"},null,8,["modelValue"])]),_:1}),u(s,{span:9},{default:a(()=>[u(k,{modelValue:o.input2,"onUpdate:modelValue":e[1]||(e[1]=y=>o.input2=y),placeholder:"\u8BF7\u8F93\u5165",prefix:"search"},null,8,["modelValue"])]),_:1})]),_:1}),u(x,{style:{"margin-top":"20px"},gutter:10},{default:a(()=>[u(s,{span:3},{default:a(()=>[f]),_:1}),u(s,{span:9},{default:a(()=>[u(k,{modelValue:o.input3,"onUpdate:modelValue":e[2]||(e[2]=y=>o.input3=y),placeholder:"\u8BF7\u8F93\u5165"},{suffix:a(()=>[u(C,{name:"close"})]),_:1},8,["modelValue"])]),_:1}),u(s,{span:9},{default:a(()=>[u(k,{modelValue:o.input4,"onUpdate:modelValue":e[3]||(e[3]=y=>o.input4=y),placeholder:"\u8BF7\u8F93\u5165"},{prefix:a(()=>[u(C,{name:"search"})]),_:1},8,["modelValue"])]),_:1})]),_:1})])])}const{defineComponent:i,ref:c}=E,d=i({setup(){const o=c(""),e=c(""),s=c(""),k=c("");return{input1:o,input2:e,input3:s,input4:k}}});return A({render:v},d)}(),"render-demo-5":function(){const{createTextVNode:l,resolveComponent:p,withCtx:a,createVNode:u,createElementVNode:F,openBlock:h,createElementBlock:g}=E,r=l("https://"),f=l(".com");function v(e,s){const k=p("d-input"),x=p("d-select"),C=p("d-icon"),y=p("d-button");return h(),g("div",null,[F("div",null,[u(k,{modelValue:e.value1,"onUpdate:modelValue":s[0]||(s[0]=_=>e.value1=_),placeholder:"\u8BF7\u8F93\u5165"},{prepend:a(()=>[r]),_:1},8,["modelValue"]),u(k,{class:"devui-input-demo__mt",modelValue:e.value2,"onUpdate:modelValue":s[2]||(s[2]=_=>e.value2=_),placeholder:"\u8BF7\u8F93\u5165"},{prepend:a(()=>[u(x,{modelValue:e.value5,"onUpdate:modelValue":s[1]||(s[1]=_=>e.value5=_),options:e.options},null,8,["modelValue","options"])]),append:a(()=>[u(C,{name:"search"})]),_:1},8,["modelValue"]),u(k,{class:"devui-input-demo__mt",modelValue:e.value3,"onUpdate:modelValue":s[3]||(s[3]=_=>e.value3=_),placeholder:"\u8BF7\u8F93\u5165"},{append:a(()=>[f]),_:1},8,["modelValue"]),u(k,{class:"devui-input-demo__mt",modelValue:e.value4,"onUpdate:modelValue":s[4]||(s[4]=_=>e.value4=_),placeholder:"\u8BF7\u8F93\u5165"},{append:a(()=>[u(y,{icon:"search"})]),_:1},8,["modelValue"])])])}const{defineComponent:i,ref:c,reactive:d}=E,o=i({setup(){const s=d(["http://","https://"]);return{value1:c(""),value2:c(""),value3:c(""),value4:c(""),value5:c(""),options:s}}});return A({render:v},o)}(),"render-demo-6":function(){const{resolveComponent:l,createVNode:p,createTextVNode:a,withCtx:u,createElementVNode:F,openBlock:h,createElementBlock:g}=E,r={class:"devui-input-demo"},f=a("\u9009\u4E2Dinput\u4E2D\u7684\u6587\u5B57"),v=a("\u4F7Finput\u83B7\u53D6\u7126\u70B9"),i=a("\u4F7Finput\u5931\u53BB\u7126\u70B9");function c(s,k){const x=l("d-input"),C=l("d-button");return h(),g("div",null,[F("div",r,[p(x,{ref:"demoInput",modelValue:s.value1,"onUpdate:modelValue":k[0]||(k[0]=y=>s.value1=y),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"]),p(C,{style:{"margin-top":"20px"},onClick:s.select,color:"primary"},{default:u(()=>[f]),_:1},8,["onClick"]),p(C,{style:{"margin-left":"10px"},onClick:s.focus,color:"primary"},{default:u(()=>[v]),_:1},8,["onClick"]),p(C,{style:{"margin-left":"10px"},onClick:s.blur,color:"primary"},{default:u(()=>[i]),_:1},8,["onClick"])])])}const{defineComponent:d,ref:o}=E,e=d({setup(){const s=o(null),k=()=>{s.value.select()},x=()=>{s.value.focus()},C=()=>{s.value.blur()};return{demoInput:s,value1:o("\u6D4B\u8BD5\u6587\u672C"),select:k,focus:x,blur:C}}});return A({render:c},e)}()}},ln='{"title":"Input \u8F93\u5165\u6846","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u4E00\u952E\u6E05\u7A7A","slug":"\u4E00\u952E\u6E05\u7A7A"},{"level":3,"title":"\u5BC6\u7801\u6846","slug":"\u5BC6\u7801\u6846"},{"level":3,"title":"\u5C3A\u5BF8","slug":"\u5C3A\u5BF8"},{"level":3,"title":"\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846","slug":"\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846"},{"level":3,"title":"\u590D\u5408\u578B\u8F93\u5165\u6846","slug":"\u590D\u5408\u578B\u8F93\u5165\u6846"},{"level":3,"title":"\u8F93\u5165\u6846\u65B9\u6CD5","slug":"\u8F93\u5165\u6846\u65B9\u6CD5"},{"level":3,"title":"Input \u53C2\u6570","slug":"input-\u53C2\u6570"},{"level":3,"title":"Input \u63D2\u69FD","slug":"input-\u63D2\u69FD"},{"level":3,"title":"Input \u4E8B\u4EF6","slug":"input-\u4E8B\u4EF6"},{"level":3,"title":"Input \u65B9\u6CD5","slug":"input-\u65B9\u6CD5"},{"level":3,"title":"Input \u7C7B\u578B\u5B9A\u4E49","slug":"input-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/input/index.md","lastUpdated":1653308053244}',T=w('<h1 id="input-\u8F93\u5165\u6846" tabindex="-1">Input \u8F93\u5165\u6846 <a class="header-anchor" href="#input-\u8F93\u5165\u6846" aria-hidden="true">#</a></h1><p>\u6587\u672C\u8F93\u5165\u6846\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u9700\u8981\u624B\u52A8\u8F93\u5165\u6587\u5B57\u4F7F\u7528\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),$=n("div",null,[n("code",null,"v-model"),t("\u5BF9\u8F93\u5165\u503C\u505A\u53CC\u5411\u7ED1\u5B9A\uFF0C"),n("code",null,"placeholder"),t("\u3001"),n("code",null,"autofocus"),t("\u7B49\u539F\u751F input \u652F\u6301\u7684\u5C5E\u6027\u4F1A\u88AB\u81EA\u52A8\u7EE7\u627F\u3002")],-1),L=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-input-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),n("span",{class:"token punctuation"},">")]),t("Default"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"autofocus"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),n("span",{class:"token punctuation"},">")]),t("Disabled"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),n("span",{class:"token punctuation"},">")]),t("Error"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"error"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),M=n("h3",{id:"\u4E00\u952E\u6E05\u7A7A",tabindex:"-1"},[t("\u4E00\u952E\u6E05\u7A7A "),n("a",{class:"header-anchor",href:"#\u4E00\u952E\u6E05\u7A7A","aria-hidden":"true"},"#")],-1),K=n("p",null,[t("\u4F7F\u7528"),n("code",null,"clearable"),t("\u5C5E\u6027\u53EF\u5F97\u5230\u4E00\u4E2A\u53EF\u4E00\u952E\u6E05\u7A7A\u7684\u8F93\u5165\u6846\uFF0C\u4F7F\u7528"),n("code",null,"clear"),t("\u4E8B\u4EF6\u53EF\u5728\u6E05\u7A7A\u6309\u94AE\u88AB\u70B9\u51FB\u65F6\u505A\u4E00\u4E9B\u64CD\u4F5C\u3002")],-1),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-input-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"clearable"),t(),n("span",{class:"token attr-name"},"@clear"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClear"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleClear"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'clear'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      handleClear`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),G=n("h3",{id:"\u5BC6\u7801\u6846",tabindex:"-1"},[t("\u5BC6\u7801\u6846 "),n("a",{class:"header-anchor",href:"#\u5BC6\u7801\u6846","aria-hidden":"true"},"#")],-1),H=n("p",null,[t("\u4F7F\u7528 "),n("code",null,"show-password"),t(" \u5C5E\u6027\u53EF\u5F97\u5230\u4E00\u4E2A\u53EF\u5207\u6362\u663E\u793A\u9690\u85CF\u7684\u5BC6\u7801\u6846\u3002")],-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-input-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"show-password"),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),O=n("h3",{id:"\u5C3A\u5BF8",tabindex:"-1"},[t("\u5C3A\u5BF8 "),n("a",{class:"header-anchor",href:"#\u5C3A\u5BF8","aria-hidden":"true"},"#")],-1),Q=n("div",null,[t("\u652F\u6301"),n("code",null,"sm"),t("\u3001"),n("code",null,"md"),t("\u3001"),n("code",null,"lg"),t("\u4E09\u79CD\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u4E3A"),n("code",null,"md"),t("\u3002")],-1),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),n("span",{class:"token punctuation"},">")]),t("Small"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sm"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),n("span",{class:"token punctuation"},">")]),t("Middle"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),n("span",{class:"token punctuation"},">")]),t("Large"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("lg"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),W=n("h3",{id:"\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846",tabindex:"-1"},[t("\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846 "),n("a",{class:"header-anchor",href:"#\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846","aria-hidden":"true"},"#")],-1),X=n("p",null,"\u8981\u5728\u8F93\u5165\u6846\u4E2D\u6DFB\u52A0\u56FE\u6807\uFF0C\u4F60\u53EF\u4EE5\u7B80\u5355\u5730\u4F7F\u7528 prefix \u548C suffix \u5C5E\u6027\u3002 \u53E6\u5916\uFF0C \u4E5F\u53EF\u4EE5\u4F7F\u7528 prefix \u548C suffix \u63D2\u69FD\u3002",-1),Y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-row")]),t(),n("span",{class:"token attr-name"},":gutter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u4F7F\u7528\u5C5E\u6027"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("9"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("input1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"suffix"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("close"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("9"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("input2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"prefix"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("search"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("9"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-row")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 20px")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},":gutter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u4F7F\u7528\u63D2\u69FD"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("9"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("input3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#suffix"),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("close"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-icon")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("9"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("input4"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#prefix"),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("search"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-icon")]),n("span",{class:"token punctuation"},">")]),t(`
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
    `),n("span",{class:"token keyword"},"const"),t(" input1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" input2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" input3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" input4 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      input1`),n("span",{class:"token punctuation"},","),t(`
      input2`),n("span",{class:"token punctuation"},","),t(`
      input3`),n("span",{class:"token punctuation"},","),t(`
      input4`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Z=n("h3",{id:"\u590D\u5408\u578B\u8F93\u5165\u6846",tabindex:"-1"},[t("\u590D\u5408\u578B\u8F93\u5165\u6846 "),n("a",{class:"header-anchor",href:"#\u590D\u5408\u578B\u8F93\u5165\u6846","aria-hidden":"true"},"#")],-1),nn=n("p",null,"\u53EF\u4EE5\u5728\u8F93\u5165\u6846\u524D\u540E\u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20\uFF0C\u901A\u5E38\u662F\u6807\u7B7E\u6216\u6309\u94AE\u3002",-1),tn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#prepend"),n("span",{class:"token punctuation"},">")]),t("https://"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-input-demo__mt"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#prepend"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value5"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-select")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#append"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("search"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-input-demo__mt"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#append"),n("span",{class:"token punctuation"},">")]),t(".com"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-input-demo__mt"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value4"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
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
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value4"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value5"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),an=n("h3",{id:"\u8F93\u5165\u6846\u65B9\u6CD5",tabindex:"-1"},[t("\u8F93\u5165\u6846\u65B9\u6CD5 "),n("a",{class:"header-anchor",href:"#\u8F93\u5165\u6846\u65B9\u6CD5","aria-hidden":"true"},"#")],-1),sn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-input-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demoInput"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`
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
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      demoInput`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u6D4B\u8BD5\u6587\u672C'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      select`),n("span",{class:"token punctuation"},","),t(`
      focus`),n("span",{class:"token punctuation"},","),t(`
      blur`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),en=w(`<h3 id="input-\u53C2\u6570" tabindex="-1">Input \u53C2\u6570 <a class="header-anchor" href="#input-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u7ED1\u5B9A\u503C</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6587\u672C\u6846\u662F\u5426\u88AB\u7981\u7528</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">error</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6587\u672C\u6846\u662F\u5426\u51FA\u73B0\u8F93\u5165\u9519\u8BEF</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><a href="#inputsize">InputSize</a></td><td style="text-align:left;">&#39;md&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6587\u672C\u6846\u5C3A\u5BF8\uFF0C\u6709\u4E09\u79CD\u9009\u62E9<code>&#39;lg&#39;</code>,<code>&#39;md&#39;</code>,<code>&#39;sm&#39;</code></td><td style="text-align:left;"><a href="#%E5%B0%BA%E5%AF%B8">\u5C3A\u5BF8</a></td></tr><tr><td style="text-align:left;">validate-event</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u5165\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">prefix</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u81EA\u5B9A\u4E49\u524D\u7F00\u56FE\u6807</td><td style="text-align:left;"><a href="#%E5%B8%A6%E5%9B%BE%E6%A0%87%E7%9A%84%E8%BE%93%E5%85%A5%E6%A1%86">\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846</a></td></tr><tr><td style="text-align:left;">suffix</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u81EA\u5B9A\u4E49\u540E\u7F00\u56FE\u6807</td><td style="text-align:left;"><a href="#%E5%B8%A6%E5%9B%BE%E6%A0%87%E7%9A%84%E8%BE%93%E5%85%A5%E6%A1%86">\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846</a></td></tr><tr><td style="text-align:left;">clearable</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u53EF\u6E05\u7A7A</td><td style="text-align:left;"><a href="#%E4%B8%80%E9%94%AE%E6%B8%85%E7%A9%BA">\u4E00\u952E\u6E05\u7A7A</a></td></tr></tbody></table><h3 id="input-\u63D2\u69FD" tabindex="-1">Input \u63D2\u69FD <a class="header-anchor" href="#input-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">prefix</td><td style="text-align:left;">\u8F93\u5165\u6846\u5934\u90E8\u5185\u5BB9</td><td style="text-align:left;"><a href="#%E5%B8%A6%E5%9B%BE%E6%A0%87%E7%9A%84%E8%BE%93%E5%85%A5%E6%A1%86">\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846</a></td></tr><tr><td style="text-align:left;">suffix</td><td style="text-align:left;">\u8F93\u5165\u6846\u5C3E\u90E8\u5185\u5BB9</td><td style="text-align:left;"><a href="#%E5%B8%A6%E5%9B%BE%E6%A0%87%E7%9A%84%E8%BE%93%E5%85%A5%E6%A1%86">\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846</a></td></tr><tr><td style="text-align:left;">prepend</td><td style="text-align:left;">\u8F93\u5165\u6846\u524D\u7F6E\u5185\u5BB9</td><td style="text-align:left;"><a href="#%E5%A4%8D%E5%90%88%E5%9E%8B%E8%BE%93%E5%85%A5%E6%A1%86">\u590D\u5408\u578B\u8F93\u5165\u6846</a></td></tr><tr><td style="text-align:left;">append</td><td style="text-align:left;">\u8F93\u5165\u6846\u540E\u7F6E\u5185\u5BB9</td><td style="text-align:left;"><a href="#%E5%A4%8D%E5%90%88%E5%9E%8B%E8%BE%93%E5%85%A5%E6%A1%86">\u590D\u5408\u578B\u8F93\u5165\u6846</a></td></tr></tbody></table><h3 id="input-\u4E8B\u4EF6" tabindex="-1">Input \u4E8B\u4EF6 <a class="header-anchor" href="#input-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u56DE\u8C03\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">focus</td><td style="text-align:left;"><code>Function(e: FocusEvent)</code></td><td style="text-align:left;">\u83B7\u53D6\u7126\u70B9\u65F6\u89E6\u53D1</td></tr><tr><td style="text-align:left;">blur</td><td style="text-align:left;"><code>Function(e: FocusEvent)</code></td><td style="text-align:left;">\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td></tr><tr><td style="text-align:left;">input</td><td style="text-align:left;"><code>Function(e: Event)</code></td><td style="text-align:left;">\u8F93\u5165\u503C\u6539\u53D8\u65F6\u89E6\u53D1</td></tr><tr><td style="text-align:left;">change</td><td style="text-align:left;"><code>Function(e: Event)</code></td><td style="text-align:left;">\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u6216\u6309\u4E0B\u56DE\u8F66\u65F6\u89E6\u53D1</td></tr><tr><td style="text-align:left;">keydown</td><td style="text-align:left;"><code>Function(e: KeyboardEvent)</code></td><td style="text-align:left;">\u6309\u4E0B\u6309\u952E\u65F6\u89E6\u53D1</td></tr><tr><td style="text-align:left;">clear</td><td style="text-align:left;">-</td><td style="text-align:left;">\u5728\u70B9\u51FB\u7531 <code>clearable</code> \u5C5E\u6027\u751F\u6210\u7684\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1</td></tr></tbody></table><h3 id="input-\u65B9\u6CD5" tabindex="-1">Input \u65B9\u6CD5 <a class="header-anchor" href="#input-\u65B9\u6CD5" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u65B9\u6CD5</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;">focus</td><td style="text-align:left;">\u4F7F input \u83B7\u53D6\u7126\u70B9</td><td>-</td></tr><tr><td style="text-align:left;">blur</td><td style="text-align:left;">\u4F7F input \u5931\u53BB\u7126\u70B9</td><td>-</td></tr><tr><td style="text-align:left;">select</td><td style="text-align:left;">\u9009\u4E2D input \u4E2D\u7684\u6587\u5B57</td><td>-</td></tr></tbody></table><h3 id="input-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Input \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#input-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="inputsize" tabindex="-1">InputSize <a class="header-anchor" href="#inputsize" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">InputSize</span> <span class="token operator">=</span> <span class="token string">&#39;sm&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;md&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;lg&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,11);function un(l,p,a,u,F,h){const g=D("render-demo-0"),r=D("demo"),f=D("render-demo-1"),v=D("render-demo-2"),i=D("render-demo-3"),c=D("render-demo-4"),d=D("render-demo-5"),o=D("render-demo-6");return j(),z("div",null,[T,B(r,{sourceCode:`<template>
  <div class="devui-input-demo">
    <h4>Default</h4>

    <d-input v-model="value1" placeholder="\u8BF7\u8F93\u5165" autofocus></d-input>

    <h4>Disabled</h4>

    <d-input v-model="value2" placeholder="\u8BF7\u8F93\u5165" disabled></d-input>

    <h4>Error</h4>

    <d-input v-model="value3" placeholder="\u8BF7\u8F93\u5165" error></d-input>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      value1: ref(''),
      value2: ref(''),
      value3: ref(''),
    };
  },
});
<\/script>
`},{description:m(()=>[$]),highlight:m(()=>[L]),default:m(()=>[B(g)]),_:1}),M,K,B(r,{sourceCode:`<template>
  <div class="devui-input-demo">
    <d-input v-model="value1" clearable @clear="handleClear" placeholder="\u8BF7\u8F93\u5165"></d-input>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const handleClear = () => {
      console.log('clear');
    };
    return {
      value1: ref(''),
      handleClear,
    };
  },
});
<\/script>
`},{highlight:m(()=>[P]),default:m(()=>[B(f)]),_:1}),G,H,B(r,{sourceCode:`<template>
  <div class="devui-input-demo">
    <d-input v-model="value1" show-password placeholder="\u8BF7\u8F93\u5165"></d-input>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      value1: ref(''),
    };
  },
});
<\/script>
`},{highlight:m(()=>[J]),default:m(()=>[B(v)]),_:1}),O,B(r,{sourceCode:`<template>
  <div>
    <h4>Small</h4>

    <d-input v-model="value1" size="sm" placeholder="\u8BF7\u8F93\u5165"></d-input>

    <h4>Middle</h4>

    <d-input v-model="value2" placeholder="\u8BF7\u8F93\u5165"></d-input>

    <h4>Large</h4>

    <d-input v-model="value3" size="lg" placeholder="\u8BF7\u8F93\u5165"></d-input>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      value1: ref(''),
      value2: ref(''),
      value3: ref(''),
    };
  },
});
<\/script>
`},{description:m(()=>[Q]),highlight:m(()=>[R]),default:m(()=>[B(i)]),_:1}),W,X,B(r,{sourceCode:`<template>
  <div>
    <d-row :gutter="10">
      <d-col :span="3">\u4F7F\u7528\u5C5E\u6027</d-col>
      <d-col :span="9">
        <d-input v-model="input1" placeholder="\u8BF7\u8F93\u5165" suffix="close" />
      </d-col>
      <d-col :span="9">
        <d-input v-model="input2" placeholder="\u8BF7\u8F93\u5165" prefix="search"/>
      </d-col :span="9">
    </d-row>
    <d-row style="margin-top: 20px" :gutter="10">
      <d-col :span="3">\u4F7F\u7528\u63D2\u69FD</d-col>
      <d-col :span="9">
        <d-input v-model="input3" placeholder="\u8BF7\u8F93\u5165">
          <template #suffix>
            <d-icon name="close"></d-icon>
          </template>
        </d-input>
      </d-col>
      <d-col :span="9">
        <d-input v-model="input4" placeholder="\u8BF7\u8F93\u5165">
          <template #prefix>
            <d-icon name="search"></d-icon>
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
    const input1 = ref('');
    const input2 = ref('');
    const input3 = ref('');
    const input4 = ref('');
    return {
      input1,
      input2,
      input3,
      input4,
    };
  },
});

<\/script>
`},{highlight:m(()=>[Y]),default:m(()=>[B(c)]),_:1}),Z,nn,B(r,{sourceCode:`<template>
  <div>
    <d-input v-model="value1" placeholder="\u8BF7\u8F93\u5165">
      <template #prepend>https://</template>
    </d-input>

    <d-input class="devui-input-demo__mt" v-model="value2" placeholder="\u8BF7\u8F93\u5165">
      <template #prepend>
        <d-select v-model="value5" :options="options"></d-select>
      </template>
      <template #append>
        <d-icon name="search" />
      </template>
    </d-input>

    <d-input class="devui-input-demo__mt" v-model="value3" placeholder="\u8BF7\u8F93\u5165">
      <template #append>.com</template>
    </d-input>

    <d-input class="devui-input-demo__mt" v-model="value4" placeholder="\u8BF7\u8F93\u5165">
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
    return {
      value1: ref(''),
      value2: ref(''),
      value3: ref(''),
      value4: ref(''),
      value5: ref(''),
      options,
    };
  },
});
<\/script>
`},{highlight:m(()=>[tn]),default:m(()=>[B(d)]),_:1}),an,B(r,{sourceCode:`<template>
  <div class="devui-input-demo">
    <d-input ref="demoInput" v-model="value1" placeholder="\u8BF7\u8F93\u5165"></d-input>
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
    return {
      demoInput,
      value1: ref('\u6D4B\u8BD5\u6587\u672C'),
      select,
      focus,
      blur,
    };
  },
});
<\/script>
`},{highlight:m(()=>[sn]),default:m(()=>[B(o)]),_:1}),en])}var cn=U(S,[["render",un]]);export{ln as __pageData,cn as default};
