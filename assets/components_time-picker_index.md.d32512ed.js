var P=Object.defineProperty;var N=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var H=(s,c,e)=>c in s?P(s,c,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[c]=e,A=(s,c)=>{for(var e in c||(c={}))$.call(c,e)&&H(s,e,c[e]);if(N)for(var e of N(c))z.call(c,e)&&H(s,e,c[e]);return s};import{_ as R,V as y,r as q,o as G,c as I,a as V,w as x,b as j,d as n,e as t}from"./app.18affbf5.js";const J={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:s,resolveComponent:c,createVNode:e,openBlock:i,createElementBlock:k}=y,E={class:"mb-2"},v=s("div",{class:"mb-0"},"basic",-1),l={class:"mb-2"},F=s("div",{class:"mb-0"},"default open",-1),h={class:"mb-2"},f=s("div",{class:"mb-0"},"disabled",-1);function C(u,p){const a=c("d-time-picker");return i(),k("div",null,[s("div",E,[v,e(a,{modelValue:u.time01,"onUpdate:modelValue":p[0]||(p[0]=o=>u.time01=o),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])]),s("div",l,[F,e(a,{modelValue:u.vModelValue,"onUpdate:modelValue":p[1]||(p[1]=o=>u.vModelValue=o),"time-picker-width":300,autoOpen:!0},null,8,["modelValue"])]),s("div",h,[f,e(a,{modelValue:u.vModelValue,"onUpdate:modelValue":p[2]||(p[2]=o=>u.vModelValue=o),disabled:""},null,8,["modelValue"])])])}const{ref:_,defineComponent:r,nextTick:m}=y,d=r({setup(u,p){let a=_("12:30:40"),o=_("");return{vModelValue:a,time01:o}}});return A({render:C},d)}(),"render-demo-1":function(){const{createElementVNode:s,resolveComponent:c,createVNode:e,openBlock:i,createElementBlock:k}=y,E={class:"mb-2"},v=s("div",{class:"mb-0"},"minTime",-1),l={class:"mb-2"},F=s("div",{class:"mb-0"},"maxTime",-1),h={class:"mb-2"},f=s("div",{class:"mb-0"},"maxTime && minTime",-1);function C(u,p){const a=c("d-time-picker");return i(),k("div",null,[s("div",E,[v,e(a,{"min-time":"01:04:30"})]),s("div",l,[F,e(a,{"max-time":"22:30:30",modelValue:u.vModelValues,"onUpdate:modelValue":p[0]||(p[0]=o=>u.vModelValues=o)},null,8,["modelValue"])]),s("div",h,[f,e(a,{"min-time":"02:04:40","max-time":"22:30:30"})])])}const{ref:_,defineComponent:r,watch:m}=y,d=r({setup(u,p){return{vModelValues:_("23:30:20")}}});return A({render:C},d)}(),"render-demo-2":function(){const{createElementVNode:s,resolveComponent:c,createVNode:e,toDisplayString:i,createTextVNode:k,openBlock:E,createElementBlock:v}=y,l={class:"mb-2"},F=s("div",{class:"mb-0"},"hh:mm:ss",-1),h={class:"mb-2"},f=s("div",{class:"mb-0"},"mm:HH:ss",-1),C=k(" \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A"),_={class:"mb-2"},r=s("div",{class:"mb-0"},"hh:mm",-1),m=k(" \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A"),d={class:"mb-2"},u=s("div",{class:"mb-0"},"MM:ss",-1),p=k(" \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A");function a(g,B){const D=c("d-time-picker");return E(),v("div",null,[s("div",l,[F,e(D,{"min-time":"01:04:30"})]),s("div",h,[f,e(D,{class:"mb-0",format:"mm:HH:ss",modelValue:g.vModelValueFirst,"onUpdate:modelValue":B[0]||(B[0]=T=>g.vModelValueFirst=T)},null,8,["modelValue"]),C,s("button",null,i(g.vModelValueFirst),1)]),s("div",_,[r,e(D,{class:"mb-0",format:"hh:mm",modelValue:g.hhmm,"onUpdate:modelValue":B[1]||(B[1]=T=>g.hhmm=T)},null,8,["modelValue"]),m,s("button",null,i(g.hhmm),1)]),s("div",d,[u,e(D,{class:"mb-0",format:"MM:ss",modelValue:g.mmss,"onUpdate:modelValue":B[2]||(B[2]=T=>g.mmss=T)},null,8,["modelValue"]),p,s("button",null,i(g.mmss),1)])])}const{ref:o,defineComponent:w,watch:b}=y,M=w({setup(g,B){let D=o("23:10:20"),T=o("11:12:34"),S=o("23:10:20");return b(D,(O,U)=>{console.log(O,U)}),{vModelValueFirst:D,mmss:S,hhmm:T}}});return A({render:a},M)}(),"render-demo-3":function(){const{createElementVNode:s,resolveComponent:c,withCtx:e,createVNode:i,openBlock:k,createElementBlock:E}=y,v=s("div",{class:"mb-0"},"\u81EA\u5B9A\u4E49 customViewTemplate",-1),l={class:"slot-box"};function F(r,m){const d=c("d-time-picker");return k(),E("div",null,[s("div",null,[v,i(d,{ref:"slotDemo"},{customViewTemplate:e(()=>[s("div",l,[s("div",{class:"slot-bottom",onClick:m[0]||(m[0]=(...u)=>r.chooseNowFun&&r.chooseNowFun(...u))},"choose now"),s("div",{class:"slot-bottom",onClick:m[1]||(m[1]=(...u)=>r.chooseTime&&r.chooseTime(...u))},"choose 23:00")])]),_:1},512)])])}const{ref:h,defineComponent:f,nextTick:C}=y,_=f({setup(r,m){let d=h(null);return{chooseNowFun:()=>{let a=new Date,o=a.getHours()>9?a.getHours():"0"+a.getHours(),w=a.getMinutes()>9?a.getMinutes():"0"+a.getMinutes(),b=a.getSeconds()>9?a.getSeconds():"0"+a.getSeconds(),M={time:o+":"+w+":"+b};d.value.chooseTime(M)},chooseTime:()=>{let a={time:"23",type:"mm"};d.value.chooseTime(a)},slotDemo:d}}});return A({render:F},_)}(),"render-demo-4":function(){const{createElementVNode:s,resolveComponent:c,createVNode:e,toDisplayString:i,createTextVNode:k,openBlock:E,createElementBlock:v}=y,l={class:"mb-2"},F=s("div",{class:"mb-0"},"selectedTimeChange",-1),h=k(" \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A"),f={class:"mb-2"},C=s("div",{class:"mb-0"},"v-model",-1),_=k(" \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A");function r(a,o){const w=c("d-time-picker");return E(),v("div",null,[s("div",l,[F,e(w,{class:"mb-0",onChange:a.selectedTimeChange},null,8,["onChange"]),h,s("button",{onClick:o[0]||(o[0]=(...b)=>a.getNewTimeFun&&a.getNewTimeFun(...b))},i(a.time1),1)]),s("div",f,[C,e(w,{class:"mb-0",modelValue:a.time2,"onUpdate:modelValue":o[1]||(o[1]=b=>a.time2=b)},null,8,["modelValue"]),_,s("button",{onClick:o[2]||(o[2]=(...b)=>a.getNewTimeFun&&a.getNewTimeFun(...b))},i(a.time2),1)])])}const{ref:m,defineComponent:d,nextTick:u}=y,p=d({setup(a,o){let w=m("00:00:00"),b=m("00:00:00");return{selectedTimeChange:g=>{w.value=g},time1:w,time2:b}}});return A({render:r},p)}()}},un='{"title":"TimePicker \u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u65F6\u95F4\u533A\u95F4\u9650\u5236","slug":"\u65F6\u95F4\u533A\u95F4\u9650\u5236"},{"level":3,"title":"\u683C\u5F0F\u5316","slug":"\u683C\u5F0F\u5316"},{"level":3,"title":"\u4F20\u5165\u6A21\u677F","slug":"\u4F20\u5165\u6A21\u677F"},{"level":3,"title":"\u83B7\u53D6\u6570\u636E\u65B9\u5F0F","slug":"\u83B7\u53D6\u6570\u636E\u65B9\u5F0F"},{"level":3,"title":"TimePicker \u53C2\u6570","slug":"timepicker-\u53C2\u6570"},{"level":3,"title":"TimePicker \u4E8B\u4EF6","slug":"timepicker-\u4E8B\u4EF6"}],"relativePath":"components/time-picker/index.md","lastUpdated":1662086208487}',K=j('<h1 id="timepicker-\u7EC4\u4EF6" tabindex="-1">TimePicker \u7EC4\u4EF6 <a class="header-anchor" href="#timepicker-\u7EC4\u4EF6" aria-hidden="true">#</a></h1><p>\u65F6\u95F4\u9009\u62E9\u5668\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u7528\u6237\u9700\u8981\u8F93\u5165\u4E00\u4E2A\u65F6\u95F4\uFF0C\u53EF\u4EE5\u70B9\u51FB\u6807\u51C6\u8F93\u5165\u6846\uFF0C\u5F39\u51FA\u9762\u677F\u8FDB\u884C\u9009\u62E9</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),L=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("basic"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time01"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u9009\u62E9\u65F6\u95F4"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("default open"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vModelValue"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":time-picker-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("300"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":autoOpen"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("disabled"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),Q=n("h3",{id:"\u65F6\u95F4\u533A\u95F4\u9650\u5236",tabindex:"-1"},[t("\u65F6\u95F4\u533A\u95F4\u9650\u5236 "),n("a",{class:"header-anchor",href:"#\u65F6\u95F4\u533A\u95F4\u9650\u5236","aria-hidden":"true"},"#")],-1),W=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("minTime"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"min-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("01:04:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("maxTime"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"max-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("22:30:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vModelValues"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("maxTime && minTime"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),X=n("h3",{id:"\u683C\u5F0F\u5316",tabindex:"-1"},[t("\u683C\u5F0F\u5316 "),n("a",{class:"header-anchor",href:"#\u683C\u5F0F\u5316","aria-hidden":"true"},"#")],-1),Y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("hh:mm:ss"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"min-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("01:04:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("mm:HH:ss"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mm:HH:ss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vModelValueFirst"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("button")]),n("span",{class:"token punctuation"},">")]),t("{{ vModelValueFirst }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("hh:mm"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("hh:mm"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("hhmm"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("button")]),n("span",{class:"token punctuation"},">")]),t("{{ hhmm }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("MM:ss"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("MM:ss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mmss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
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
`)])])],-1),Z=n("h3",{id:"\u4F20\u5165\u6A21\u677F",tabindex:"-1"},[t("\u4F20\u5165\u6A21\u677F "),n("a",{class:"header-anchor",href:"#\u4F20\u5165\u6A21\u677F","aria-hidden":"true"},"#")],-1),nn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u81EA\u5B9A\u4E49 customViewTemplate"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),tn=n("h3",{id:"\u83B7\u53D6\u6570\u636E\u65B9\u5F0F",tabindex:"-1"},[t("\u83B7\u53D6\u6570\u636E\u65B9\u5F0F "),n("a",{class:"header-anchor",href:"#\u83B7\u53D6\u6570\u636E\u65B9\u5F0F","aria-hidden":"true"},"#")],-1),sn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("selectedTimeChange"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("selectedTimeChange"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getNewTimeFun"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ time1 }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("v-model"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
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
`)])])],-1),an=j('<h3 id="timepicker-\u53C2\u6570" tabindex="-1">TimePicker \u53C2\u6570 <a class="header-anchor" href="#timepicker-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7981\u7528\u9009\u62E9</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">time-picker-width</td><td style="text-align:left;">number</td><td style="text-align:left;">---</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u4E0B\u62C9\u6846\u7684\u5BBD\u5EA6</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">auto-open</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u521D\u59CB\u5316\u662F\u5426\u76F4\u63A5\u5C55\u5F00</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">format</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;hh:mm:ss&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u4F20\u5165\u683C\u5F0F\u5316\uFF0C\u63A7\u5236\u65F6\u95F4\u683C\u5F0F</td><td style="text-align:left;"><a href="#%E6%A0%BC%E5%BC%8F%E9%99%90%E5%88%B6">\u683C\u5F0F\u5316</a></td></tr><tr><td style="text-align:left;">min-time</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;00:00:00&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9650\u5236\u6700\u5C0F\u53EF\u9009\u65F6\u95F4</td><td style="text-align:left;"><a href="#%E6%97%B6%E9%97%B4%E5%8C%BA%E9%97%B4%E9%99%90%E5%88%B6">\u683C\u5F0F\u5316</a></td></tr><tr><td style="text-align:left;">max-time</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;23:59:59&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9650\u5236\u6700\u5927\u53EF\u9009\u65F6\u95F4</td><td style="text-align:left;"><a href="#%E6%97%B6%E9%97%B4%E5%8C%BA%E9%97%B4%E9%99%90%E5%88%B6">\u683C\u5F0F\u5316</a></td></tr><tr><td style="text-align:left;">custom-view-template</td><td style="text-align:left;">TemplateRef</td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u81EA\u5B9A\u4E49\u5FEB\u6377\u8BBE\u7F6E\u65F6\u95F4\u6216\u81EA\u5B9A\u4E49\u64CD\u4F5C\u533A\u5185\u5BB9</td><td style="text-align:left;"><a href="#%E4%BC%A0%E5%85%A5%E6%A8%A1%E6%9D%BF">\u4F20\u5165\u6A21\u677F</a></td></tr><tr><td style="text-align:left;">show-animation</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u5F00\u542F\u52A8\u753B</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="timepicker-\u4E8B\u4EF6" tabindex="-1">TimePicker \u4E8B\u4EF6 <a class="header-anchor" href="#timepicker-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>change</td><td>EventEmitter</td><td>\u53EF\u9009\uFF0C\u786E\u5B9A\u7684\u65F6\u5019\u4F1A\u53D1\u51FA\u65B0\u6FC0\u6D3B\u7684\u5B50\u9879\u7684\u6570\u636E</td><td><a href="#%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE%E6%96%B9%E5%BC%8F">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table>',4);function en(s,c,e,i,k,E){const v=q("render-demo-0"),l=q("demo"),F=q("render-demo-1"),h=q("render-demo-2"),f=q("render-demo-3"),C=q("render-demo-4");return G(),I("div",null,[K,V(l,{sourceCode:`<template>
  <div class="mb-2">
    <div class="mb-0">basic</div>
    <d-time-picker v-model="time01" placeholder="\u8BF7\u9009\u62E9\u65F6\u95F4" />
  </div>
  <div class="mb-2">
    <div class="mb-0">default open</div>
    <d-time-picker v-model="vModelValue" :time-picker-width="300" :autoOpen="true" />
  </div>
  <div class="mb-2">
    <div class="mb-0">disabled</div>
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
`},{highlight:x(()=>[L]),default:x(()=>[V(v)]),_:1}),Q,V(l,{sourceCode:`<template>
  <div class="mb-2">
    <div class="mb-0">minTime</div>
    <d-time-picker min-time="01:04:30" />
  </div>
  <div class="mb-2">
    <div class="mb-0">maxTime</div>
    <d-time-picker max-time="22:30:30" v-model="vModelValues" />
  </div>
  <div class="mb-2">
    <div class="mb-0">maxTime && minTime</div>
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
`},{highlight:x(()=>[W]),default:x(()=>[V(F)]),_:1}),X,V(l,{sourceCode:`<template>
  <div class="mb-2">
    <div class="mb-0">hh:mm:ss</div>
    <d-time-picker min-time="01:04:30" />
  </div>
  <div class="mb-2">
    <div class="mb-0">mm:HH:ss</div>
    <d-time-picker class="mb-0" format="mm:HH:ss" v-model="vModelValueFirst" />
    \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A<button>{{ vModelValueFirst }}</button>
  </div>
  <div class="mb-2">
    <div class="mb-0">hh:mm</div>
    <d-time-picker class="mb-0" format="hh:mm" v-model="hhmm" />
    \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A<button>{{ hhmm }}</button>
  </div>
  <div class="mb-2">
    <div class="mb-0">MM:ss</div>
    <d-time-picker class="mb-0" format="MM:ss" v-model="mmss" />
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
`},{highlight:x(()=>[Y]),default:x(()=>[V(h)]),_:1}),Z,V(l,{sourceCode:`<template>
  <div>
    <div class="mb-0">\u81EA\u5B9A\u4E49 customViewTemplate</div>
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
`},{highlight:x(()=>[nn]),default:x(()=>[V(f)]),_:1}),tn,V(l,{sourceCode:`<template>
  <div class="mb-2">
    <div class="mb-0">selectedTimeChange</div>
    <d-time-picker class="mb-0" @change="selectedTimeChange" />
    \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A<button @click="getNewTimeFun">{{ time1 }}</button>
  </div>
  <div class="mb-2">
    <div class="mb-0">v-model</div>
    <d-time-picker class="mb-0" v-model="time2" />
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
`},{highlight:x(()=>[sn]),default:x(()=>[V(C)]),_:1}),an])}var pn=R(J,[["render",en]]);export{un as __pageData,pn as default};
