import{V as C}from"./framework.3495a366.js";import{_ as j,f as A,G as O,H as S,b as y,a1 as _,a3 as M,I as n,k as t}from"./plugin-vue_export-helper.ebedbb15.js";import"./framework.d333a127.js";const U={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:s,resolveComponent:f,createVNode:c,openBlock:i,createElementBlock:k}=C,E=s("h4",{class:"my-10"},"basic",-1),m=s("h4",{class:"my-10"},"default open",-1),l=s("h4",{class:"my-10"},"disabled",-1);function g(o,e){const u=f("d-time-picker");return i(),k("div",null,[s("div",null,[E,c(u,{modelValue:o.time01,"onUpdate:modelValue":e[0]||(e[0]=p=>o.time01=p),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])]),s("div",null,[m,c(u,{modelValue:o.vModelValue,"onUpdate:modelValue":e[1]||(e[1]=p=>o.vModelValue=p),"time-picker-width":300,autoOpen:!0},null,8,["modelValue"])]),s("div",null,[l,c(u,{modelValue:o.vModelValue,"onUpdate:modelValue":e[2]||(e[2]=p=>o.vModelValue=p),disabled:""},null,8,["modelValue"])])])}const{ref:d,defineComponent:h,nextTick:B}=C,V=h({setup(o,e){let u=d("12:30:40"),p=d("");return{vModelValue:u,time01:p}}});return{render:g,...V}}(),"render-demo-1":function(){const{createElementVNode:s,resolveComponent:f,createVNode:c,openBlock:i,createElementBlock:k}=C,E=s("h4",{class:"my-10"},"minTime",-1),m=s("h4",{class:"my-10"},"maxTime",-1),l=s("h4",{class:"my-10"},"maxTime && minTime",-1);function g(o,e){const u=f("d-time-picker");return i(),k("div",null,[s("div",null,[E,c(u,{"min-time":"01:04:30"})]),s("div",null,[m,c(u,{"max-time":"22:30:30",modelValue:o.vModelValues,"onUpdate:modelValue":e[0]||(e[0]=p=>o.vModelValues=p)},null,8,["modelValue"])]),s("div",null,[l,c(u,{"min-time":"02:04:40","max-time":"22:30:30"})])])}const{ref:d,defineComponent:h,watch:B}=C,V=h({setup(o,e){return{vModelValues:d("23:30:20")}}});return{render:g,...V}}(),"render-demo-2":function(){const{createElementVNode:s,resolveComponent:f,createVNode:c,toDisplayString:i,createTextVNode:k,openBlock:E,createElementBlock:m}=C,l=s("h4",{class:"my-10"},"hh:mm:ss",-1),g=s("h4",{class:"my-10"},"mm:HH:ss",-1),d=s("br",null,null,-1),h=k(" \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A"),B=s("h4",{class:"my-10"},"hh:mm",-1),V=s("br",null,null,-1),o=k(" \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A"),e=s("h4",{class:"my-10"},"MM:ss",-1),u=s("br",null,null,-1),p=k(" \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A");function x(r,w){const D=f("d-time-picker");return E(),m("div",null,[s("div",null,[l,c(D,{"min-time":"01:04:30"})]),s("div",null,[g,c(D,{format:"mm:HH:ss",modelValue:r.vModelValueFirst,"onUpdate:modelValue":w[0]||(w[0]=T=>r.vModelValueFirst=T)},null,8,["modelValue"]),d,h,s("button",null,i(r.vModelValueFirst),1)]),s("div",null,[B,c(D,{format:"hh:mm",modelValue:r.hhmm,"onUpdate:modelValue":w[1]||(w[1]=T=>r.hhmm=T)},null,8,["modelValue"]),V,o,s("button",null,i(r.hhmm),1)]),s("div",null,[e,c(D,{format:"MM:ss",modelValue:r.mmss,"onUpdate:modelValue":w[2]||(w[2]=T=>r.mmss=T)},null,8,["modelValue"]),u,p,s("button",null,i(r.mmss),1)])])}const{ref:a,defineComponent:F,watch:b}=C,v=F({setup(r,w){let D=a("23:10:20"),T=a("11:12:34"),N=a("23:10:20");return b(D,(q,H)=>{console.log(q,H)}),{vModelValueFirst:D,mmss:N,hhmm:T}}});return{render:x,...v}}(),"render-demo-3":function(){const{createElementVNode:s,resolveComponent:f,withCtx:c,createVNode:i,openBlock:k,createElementBlock:E}=C,m=s("h4",{class:"my-10"},"\u81EA\u5B9A\u4E49 customViewTemplate",-1),l={class:"slot-box"};function g(o,e){const u=f("d-time-picker");return k(),E("div",null,[s("div",null,[m,i(u,{ref:"slotDemo"},{customViewTemplate:c(()=>[s("div",l,[s("div",{class:"slot-bottom",onClick:e[0]||(e[0]=(...p)=>o.chooseNowFun&&o.chooseNowFun(...p))},"choose now"),s("div",{class:"slot-bottom",onClick:e[1]||(e[1]=(...p)=>o.chooseTime&&o.chooseTime(...p))},"choose 23:00")])]),_:1},512)])])}const{ref:d,defineComponent:h,nextTick:B}=C,V=h({setup(o,e){let u=d(null);return{chooseNowFun:()=>{let a=new Date,F=a.getHours()>9?a.getHours():"0"+a.getHours(),b=a.getMinutes()>9?a.getMinutes():"0"+a.getMinutes(),v=a.getSeconds()>9?a.getSeconds():"0"+a.getSeconds(),r={time:F+":"+b+":"+v};u.value.chooseTime(r)},chooseTime:()=>{let a={time:"23",type:"mm"};u.value.chooseTime(a)},slotDemo:u}}});return{render:g,...V}}(),"render-demo-4":function(){const{createElementVNode:s,resolveComponent:f,createVNode:c,toDisplayString:i,createTextVNode:k,openBlock:E,createElementBlock:m}=C,l=s("h4",{class:"my-10"},"selectedTimeChange",-1),g=s("br",null,null,-1),d=k(" \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A"),h=s("h4",{class:"my-10"},"v-model",-1),B=s("br",null,null,-1),V=k(" \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A");function o(a,F){const b=f("d-time-picker");return E(),m("div",null,[s("div",null,[l,c(b,{onChange:a.selectedTimeChange},null,8,["onChange"]),g,d,s("button",{onClick:F[0]||(F[0]=(...v)=>a.getNewTimeFun&&a.getNewTimeFun(...v))},i(a.time1),1)]),s("div",null,[h,c(b,{modelValue:a.time2,"onUpdate:modelValue":F[1]||(F[1]=v=>a.time2=v)},null,8,["modelValue"]),B,V,s("button",{onClick:F[2]||(F[2]=(...v)=>a.getNewTimeFun&&a.getNewTimeFun(...v))},i(a.time2),1)])])}const{ref:e,defineComponent:u,nextTick:p}=C,x=u({setup(a,F){let b=e("00:00:00"),v=e("00:00:00");return{selectedTimeChange:w=>{b.value=w},time1:b,time2:v}}});return{render:o,...x}}()}},tn='{"title":"TimePicker \u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u65F6\u95F4\u533A\u95F4\u9650\u5236","slug":"\u65F6\u95F4\u533A\u95F4\u9650\u5236"},{"level":3,"title":"\u683C\u5F0F\u5316","slug":"\u683C\u5F0F\u5316"},{"level":3,"title":"\u4F20\u5165\u6A21\u677F","slug":"\u4F20\u5165\u6A21\u677F"},{"level":3,"title":"\u83B7\u53D6\u6570\u636E\u65B9\u5F0F","slug":"\u83B7\u53D6\u6570\u636E\u65B9\u5F0F"},{"level":3,"title":"TimePicker \u53C2\u6570","slug":"timepicker-\u53C2\u6570"},{"level":3,"title":"TimePicker \u4E8B\u4EF6","slug":"timepicker-\u4E8B\u4EF6"}],"relativePath":"components/time-picker/index.md","lastUpdated":1659337634616}',P=M('<h1 id="timepicker-\u7EC4\u4EF6" tabindex="-1">TimePicker \u7EC4\u4EF6 <a class="header-anchor" href="#timepicker-\u7EC4\u4EF6" aria-hidden="true">#</a></h1><p>\u65F6\u95F4\u9009\u62E9\u5668\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u7528\u6237\u9700\u8981\u8F93\u5165\u4E00\u4E2A\u65F6\u95F4\uFF0C\u53EF\u4EE5\u70B9\u51FB\u6807\u51C6\u8F93\u5165\u6846\uFF0C\u5F39\u51FA\u9762\u677F\u8FDB\u884C\u9009\u62E9</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),$=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("basic"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time01"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u9009\u62E9\u65F6\u95F4"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("default open"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vModelValue"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":time-picker-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("300"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":autoOpen"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("disabled"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vModelValue"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" nextTick "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t(" ctx")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" vModelValue "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'12:30:40'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" time01 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      vModelValue`),n("span",{class:"token punctuation"},","),t(`
      time01`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".my-10"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 10px 0px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),z=n("h3",{id:"\u65F6\u95F4\u533A\u95F4\u9650\u5236",tabindex:"-1"},[t("\u65F6\u95F4\u533A\u95F4\u9650\u5236 "),n("a",{class:"header-anchor",href:"#\u65F6\u95F4\u533A\u95F4\u9650\u5236","aria-hidden":"true"},"#")],-1),G=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("minTime"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"min-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("01:04:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("maxTime"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"max-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("22:30:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vModelValues"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("maxTime && minTime"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"min-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("02:04:40"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"max-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("22:30:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t(" ctx")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" vModelValues "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'23:30:20'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      vModelValues`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),I=n("h3",{id:"\u683C\u5F0F\u5316",tabindex:"-1"},[t("\u683C\u5F0F\u5316 "),n("a",{class:"header-anchor",href:"#\u683C\u5F0F\u5316","aria-hidden":"true"},"#")],-1),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("hh:mm:ss"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"min-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("01:04:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("mm:HH:ss"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mm:HH:ss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vModelValueFirst"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("button")]),n("span",{class:"token punctuation"},">")]),t("{{ vModelValueFirst }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("hh:mm"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("hh:mm"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("hhmm"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("button")]),n("span",{class:"token punctuation"},">")]),t("{{ hhmm }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("MM:ss"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("MM:ss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mmss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("button")]),n("span",{class:"token punctuation"},">")]),t("{{ mmss }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t(" ctx")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" vModelValueFirst "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'23:10:20'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" hhmm "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'11:12:34'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" mmss "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'23:10:20'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("vModelValueFirst"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("newValue"),n("span",{class:"token punctuation"},","),t(" oldValue")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("newValue"),n("span",{class:"token punctuation"},","),t(" oldValue"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      vModelValueFirst`),n("span",{class:"token punctuation"},","),t(`
      mmss`),n("span",{class:"token punctuation"},","),t(`
      hhmm`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),W=n("h3",{id:"\u4F20\u5165\u6A21\u677F",tabindex:"-1"},[t("\u4F20\u5165\u6A21\u677F "),n("a",{class:"header-anchor",href:"#\u4F20\u5165\u6A21\u677F","aria-hidden":"true"},"#")],-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u81EA\u5B9A\u4E49 customViewTemplate"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("slotDemo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),t("customViewTemplate")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("slot-box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("slot-bottom"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("chooseNowFun"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("choose now"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("slot-bottom"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("chooseTime"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("choose 23:00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-time-picker")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" nextTick "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t(" ctx")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" slotDemo "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"chooseTime"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"let"),t(" timeObj "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'23'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'mm'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
      slotDemo`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chooseTime"),n("span",{class:"token punctuation"},"("),t("timeObj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token comment"},"// \u63D2\u69FD\u5185\u65B9\u6CD5  --  \u9009\u62E9\u5F53\u524D\u65F6\u95F4"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"chooseNowFun"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"let"),t(" date "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"let"),t(" hour "),n("span",{class:"token operator"},"="),t(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getHours"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"9"),t(),n("span",{class:"token operator"},"?"),t(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getHours"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0'"),t(),n("span",{class:"token operator"},"+"),t(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getHours"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"let"),t(" minute "),n("span",{class:"token operator"},"="),t(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getMinutes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"9"),t(),n("span",{class:"token operator"},"?"),t(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getMinutes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0'"),t(),n("span",{class:"token operator"},"+"),t(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getMinutes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"let"),t(" second "),n("span",{class:"token operator"},"="),t(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getSeconds"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"9"),t(),n("span",{class:"token operator"},"?"),t(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getSeconds"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0'"),t(),n("span",{class:"token operator"},"+"),t(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getSeconds"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"let"),t(" timeObj "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),t(" hour "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token string"},"':'"),t(),n("span",{class:"token operator"},"+"),t(" minute "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token string"},"':'"),t(),n("span",{class:"token operator"},"+"),t(" second"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
      slotDemo`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chooseTime"),n("span",{class:"token punctuation"},"("),t("timeObj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      chooseNowFun`),n("span",{class:"token punctuation"},","),t(`
      chooseTime`),n("span",{class:"token punctuation"},","),t(`
      slotDemo`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".slot-box"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" hidden"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".slot-bottom"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 14px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".slot-bottom:hover"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #7693f5"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"text-decoration"),n("span",{class:"token punctuation"},":"),t(" underline"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),K=n("h3",{id:"\u83B7\u53D6\u6570\u636E\u65B9\u5F0F",tabindex:"-1"},[t("\u83B7\u53D6\u6570\u636E\u65B9\u5F0F "),n("a",{class:"header-anchor",href:"#\u83B7\u53D6\u6570\u636E\u65B9\u5F0F","aria-hidden":"true"},"#")],-1),L=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("selectedTimeChange"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("selectedTimeChange"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getNewTimeFun"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ time1 }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("v-model"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getNewTimeFun"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ time2 }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" nextTick "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t(" ctx")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" time1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'00:00:00'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" time2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'00:00:00'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token comment"},"// \u8FD4\u56DE\u9009\u4E2D\u7684\u65F6\u95F4"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"selectedTimeChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"timeValue"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      time1`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" timeValue"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      selectedTimeChange`),n("span",{class:"token punctuation"},","),t(`
      time1`),n("span",{class:"token punctuation"},","),t(`
      time2`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Q=M('<h3 id="timepicker-\u53C2\u6570" tabindex="-1">TimePicker \u53C2\u6570 <a class="header-anchor" href="#timepicker-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u53EF\u9009\uFF0C\u7981\u7528\u9009\u62E9</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>timePickerWidth / time-picker-width</td><td>number</td><td>---</td><td>\u53EF\u9009\uFF0C\u4E0B\u62C9\u6846\u7684\u5BBD\u5EA6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>autoOpen</td><td>boolean</td><td>false</td><td>\u53EF\u9009\uFF0C\u521D\u59CB\u5316\u662F\u5426\u76F4\u63A5\u5C55\u5F00</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>format</td><td>string</td><td>&#39;hh:mm:ss&#39;</td><td>\u53EF\u9009\uFF0C\u4F20\u5165\u683C\u5F0F\u5316\uFF0C\u63A7\u5236\u65F6\u95F4\u683C\u5F0F</td><td><a href="#%E6%A0%BC%E5%BC%8F%E9%99%90%E5%88%B6">\u683C\u5F0F\u5316</a></td></tr><tr><td>minTime / min-time</td><td>string</td><td>&#39;00:00:00&#39;</td><td>\u53EF\u9009\uFF0C\u9650\u5236\u6700\u5C0F\u53EF\u9009\u65F6\u95F4</td><td><a href="#%E6%97%B6%E9%97%B4%E5%8C%BA%E9%97%B4%E9%99%90%E5%88%B6">\u683C\u5F0F\u5316</a></td></tr><tr><td>maxTime / max-time</td><td>string</td><td>&#39;23:59:59&#39;</td><td>\u53EF\u9009\uFF0C\u9650\u5236\u6700\u5927\u53EF\u9009\u65F6\u95F4</td><td><a href="#%E6%97%B6%E9%97%B4%E5%8C%BA%E9%97%B4%E9%99%90%E5%88%B6">\u683C\u5F0F\u5316</a></td></tr><tr><td>customViewTemplate</td><td>TemplateRef</td><td>--</td><td>\u53EF\u9009\uFF0C\u81EA\u5B9A\u4E49\u5FEB\u6377\u8BBE\u7F6E\u65F6\u95F4\u6216\u81EA\u5B9A\u4E49\u64CD\u4F5C\u533A\u5185\u5BB9</td><td><a href="#%E4%BC%A0%E5%85%A5%E6%A8%A1%E6%9D%BF">\u4F20\u5165\u6A21\u677F</a></td></tr><tr><td>showAnimation</td><td>boolean</td><td>true</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u5F00\u542F\u52A8\u753B</td><td>\u2714</td></tr></tbody></table><h3 id="timepicker-\u4E8B\u4EF6" tabindex="-1">TimePicker \u4E8B\u4EF6 <a class="header-anchor" href="#timepicker-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>change</td><td>EventEmitter</td><td>\u53EF\u9009\uFF0C\u786E\u5B9A\u7684\u65F6\u5019\u4F1A\u53D1\u51FA\u65B0\u6FC0\u6D3B\u7684\u5B50\u9879\u7684\u6570\u636E</td><td><a href="#%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE%E6%96%B9%E5%BC%8F">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table>',4);function X(s,f,c,i,k,E){const m=A("render-demo-0"),l=A("demo"),g=A("render-demo-1"),d=A("render-demo-2"),h=A("render-demo-3"),B=A("render-demo-4");return O(),S("div",null,[P,y(l,{sourceCode:`<template>
  <div>
    <h4 class="my-10">basic</h4>
    <d-time-picker v-model="time01" placeholder="\u8BF7\u9009\u62E9\u65F6\u95F4" />
  </div>
  <div>
    <h4 class="my-10">default open</h4>
    <d-time-picker v-model="vModelValue" :time-picker-width="300" :autoOpen="true" />
  </div>
  <div>
    <h4 class="my-10">disabled</h4>
    <d-time-picker v-model="vModelValue" disabled />
  </div>
</template>

<script>
import { ref, defineComponent, nextTick } from 'vue';
export default defineComponent({
  setup(props, ctx) {
    let vModelValue = ref('12:30:40');
    let time01 = ref('');
    return {
      vModelValue,
      time01,
    };
  },
});
<\/script>

<style>
.my-10 {
  margin: 10px 0px;
}
</style>
`},{highlight:_(()=>[$]),default:_(()=>[y(m)]),_:1}),z,y(l,{sourceCode:`<template>
  <div>
    <h4 class="my-10">minTime</h4>
    <d-time-picker min-time="01:04:30" />
  </div>
  <div>
    <h4 class="my-10">maxTime</h4>
    <d-time-picker max-time="22:30:30" v-model="vModelValues" />
  </div>
  <div>
    <h4 class="my-10">maxTime && minTime</h4>
    <d-time-picker min-time="02:04:40" max-time="22:30:30" />
  </div>
</template>

<script>
import { ref, defineComponent, watch } from 'vue';
export default defineComponent({
  setup(props, ctx) {
    let vModelValues = ref('23:30:20');

    return {
      vModelValues,
    };
  },
});
<\/script>
`},{highlight:_(()=>[G]),default:_(()=>[y(g)]),_:1}),I,y(l,{sourceCode:`<template>
  <div>
    <h4 class="my-10">hh:mm:ss</h4>
    <d-time-picker min-time="01:04:30" />
  </div>
  <div>
    <h4 class="my-10">mm:HH:ss</h4>
    <d-time-picker format="mm:HH:ss" v-model="vModelValueFirst" />
    <br />
    \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A<button>{{ vModelValueFirst }}</button>
  </div>
  <div>
    <h4 class="my-10">hh:mm</h4>
    <d-time-picker format="hh:mm" v-model="hhmm" />
    <br />
    \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A<button>{{ hhmm }}</button>
  </div>
  <div>
    <h4 class="my-10">MM:ss</h4>
    <d-time-picker format="MM:ss" v-model="mmss" />
    <br />
    \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A<button>{{ mmss }}</button>
  </div>
</template>
<script>
import { ref, defineComponent, watch } from 'vue';
export default defineComponent({
  setup(props, ctx) {
    let vModelValueFirst = ref('23:10:20');
    let hhmm = ref('11:12:34');
    let mmss = ref('23:10:20');

    watch(vModelValueFirst, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });

    return {
      vModelValueFirst,
      mmss,
      hhmm,
    };
  },
});
<\/script>
`},{highlight:_(()=>[R]),default:_(()=>[y(d)]),_:1}),W,y(l,{sourceCode:`<template>
  <div>
    <h4 class="my-10">\u81EA\u5B9A\u4E49 customViewTemplate</h4>
    <d-time-picker ref="slotDemo">
      <template v-slot:customViewTemplate>
        <div class="slot-box">
          <div class="slot-bottom" @click="chooseNowFun">choose now</div>
          <div class="slot-bottom" @click="chooseTime">choose 23:00</div>
        </div>
      </template>
    </d-time-picker>
  </div>
</template>

<script>
import { ref, defineComponent, nextTick } from 'vue';

export default defineComponent({
  setup(props, ctx) {
    let slotDemo = ref(null);

    const chooseTime = () => {
      let timeObj = {
        time: '23',
        type: 'mm',
      };
      slotDemo.value.chooseTime(timeObj);
    };

    // \u63D2\u69FD\u5185\u65B9\u6CD5  --  \u9009\u62E9\u5F53\u524D\u65F6\u95F4
    const chooseNowFun = () => {
      let date = new Date();
      let hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
      let minute = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
      let second = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
      let timeObj = {
        time: hour + ':' + minute + ':' + second,
      };
      slotDemo.value.chooseTime(timeObj);
    };

    return {
      chooseNowFun,
      chooseTime,
      slotDemo,
    };
  },
});
<\/script>

<style>
.slot-box {
  overflow: hidden;
  height: 100%;
}
.slot-bottom {
  font-size: 14px;
  cursor: pointer;
}
.slot-bottom:hover {
  color: #7693f5;
  text-decoration: underline;
}
</style>
`},{highlight:_(()=>[J]),default:_(()=>[y(h)]),_:1}),K,y(l,{sourceCode:`<template>
  <div>
    <h4 class="my-10">selectedTimeChange</h4>
    <d-time-picker @change="selectedTimeChange" />
    <br />
    \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A<button @click="getNewTimeFun">{{ time1 }}</button>
  </div>
  <div>
    <h4 class="my-10">v-model</h4>
    <d-time-picker v-model="time2" />
    <br />
    \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A<button @click="getNewTimeFun">{{ time2 }}</button>
  </div>
</template>

<script>
import { ref, defineComponent, nextTick } from 'vue';

export default defineComponent({
  setup(props, ctx) {
    let time1 = ref('00:00:00');
    let time2 = ref('00:00:00');

    // \u8FD4\u56DE\u9009\u4E2D\u7684\u65F6\u95F4
    const selectedTimeChange = (timeValue) => {
      time1.value = timeValue;
    };

    return {
      selectedTimeChange,
      time1,
      time2,
    };
  },
});
<\/script>
`},{highlight:_(()=>[L]),default:_(()=>[y(B)]),_:1}),Q])}var sn=j(U,[["render",X]]);export{tn as __pageData,sn as default};
