var N=Object.defineProperty;var y=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var x=(s,e,a)=>e in s?N(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,_=(s,e)=>{for(var a in e||(e={}))S.call(e,a)&&x(s,a,e[a]);if(y)for(var a of y(e))U.call(e,a)&&x(s,a,e[a]);return s};import{_ as $,V as E,r as T,o as j,c as I,a as C,w as h,b as D,d as n,e as t}from"./app.05779a21.js";const z={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:s,resolveComponent:e,createVNode:a,openBlock:F,createElementBlock:v}=E,f=s("div",{class:"mb-0"},"basic",-1),m=s("div",{class:"mb-0"},"step",-1),i=s("div",{class:"mb-0"},"min-time\u3001max-time",-1),g=s("div",{class:"mb-0"},"min-time\u3001max-time\u3001start\u3001end",-1),B=s("div",{class:"mb-0"},"disabled",-1),b=s("div",{class:"mb-0"},"\u4E0D\u53EF\u6E05\u9664",-1);function c(u,o){const d=e("d-time-select");return F(),v("div",null,[s("div",null,[f,a(d,{class:"mb-2",modelValue:u.time00,"onUpdate:modelValue":o[0]||(o[0]=l=>u.time00=l)},null,8,["modelValue"]),m,a(d,{class:"mb-2",modelValue:u.time01,"onUpdate:modelValue":o[1]||(o[1]=l=>u.time01=l),step:"00:10"},null,8,["modelValue"]),i,a(d,{class:"mb-2",modelValue:u.time02,"onUpdate:modelValue":o[2]||(o[2]=l=>u.time02=l),"min-time":"02:20","max-time":"18:30"},null,8,["modelValue"]),g,a(d,{class:"mb-2",modelValue:u.time03,"onUpdate:modelValue":o[3]||(o[3]=l=>u.time03=l),"min-time":"09:30","max-time":"18:30",start:"09:00",end:"16:30"},null,8,["modelValue"]),B,a(d,{class:"mb-2",modelValue:u.time04,"onUpdate:modelValue":o[4]||(o[4]=l=>u.time04=l),disabled:""},null,8,["modelValue"]),b,a(d,{class:"mb-2",modelValue:u.time04,"onUpdate:modelValue":o[5]||(o[5]=l=>u.time04=l),clearable:!1},null,8,["modelValue"])])])}const{ref:p,defineComponent:k,nextTick:r}=E,A=k({setup(u,o){let d=p(""),l=p(""),V=p("03:30"),w=p("09:30"),q=p("09:30");return{time00:d,time01:l,time02:V,time03:w,time04:q}}});return _({render:c},A)}(),"render-demo-1":function(){const{resolveComponent:s,createVNode:e,withCtx:a,createElementVNode:F,openBlock:v,createElementBlock:f}=E;function m(c,p){const k=s("d-time-select"),r=s("d-col"),A=s("d-row");return v(),f("div",null,[F("div",null,[e(A,{gutter:5},{default:a(()=>[e(r,null,{default:a(()=>[e(k,{modelValue:c.startTime,"onUpdate:modelValue":p[0]||(p[0]=u=>c.startTime=u)},null,8,["modelValue"])]),_:1}),e(r,null,{default:a(()=>[e(k,{modelValue:c.endTime,"onUpdate:modelValue":p[1]||(p[1]=u=>c.endTime=u),"min-time":c.startTime},null,8,["modelValue","min-time"])]),_:1})]),_:1})])])}const{ref:i,defineComponent:g,nextTick:B}=E,b=g({setup(c,p){let k=i(""),r=i("");return{startTime:k,endTime:r}}});return _({render:m},b)}(),"render-demo-2":function(){const{createElementVNode:s,resolveComponent:e,createVNode:a,openBlock:F,createElementBlock:v}=E,f=s("div",{class:"mb-0"},"selectedTimeChange",-1);function m(c,p){const k=e("d-time-select");return F(),v("div",null,[s("div",null,[f,a(k,{modelValue:c.timeData01,"onUpdate:modelValue":p[0]||(p[0]=r=>c.timeData01=r),onChange:c.selectedTimeChange,onFocus:c.focusFun,onBlur:c.blurFun},null,8,["modelValue","onChange","onFocus","onBlur"])])])}const{ref:i,defineComponent:g,nextTick:B}=E,b=g({setup(c,p){let k=i("00:30");return{selectedTimeChange:o=>{console.log(o)},timeData01:k,focusFun:o=>{console.log(o)},blurFun:o=>{console.log(o)}}}});return _({render:m},b)}()}},W='{"title":"TimeSelect \u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u56FA\u5B9A\u65F6\u95F4\u8303\u56F4","slug":"\u56FA\u5B9A\u65F6\u95F4\u8303\u56F4"},{"level":3,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":3,"title":"TimeSelect \u53C2\u6570","slug":"timeselect-\u53C2\u6570"},{"level":3,"title":"TimeSelect \u4E8B\u4EF6","slug":"timeselect-\u4E8B\u4EF6"},{"level":3,"title":"TimeSelect \u7C7B\u578B\u5B9A\u4E49","slug":"timeselect-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/time-select/index.md","lastUpdated":1662086208487}',P=D('<h1 id="timeselect-\u7EC4\u4EF6" tabindex="-1">TimeSelect \u7EC4\u4EF6 <a class="header-anchor" href="#timeselect-\u7EC4\u4EF6" aria-hidden="true">#</a></h1><p>\u65F6\u95F4\u9009\u62E9\u5668\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u63D0\u4F9B\u51E0\u4E2A\u56FA\u5B9A\u7684\u65F6\u95F4\u70B9\u4F9B\u7528\u6237\u9009\u62E9</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),G=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("basic"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time00"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("step"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time01"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"step"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("00:10"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("min-time\u3001max-time"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time02"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"min-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("02:20"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"max-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("18:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("min-time\u3001max-time\u3001start\u3001end"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time03"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"min-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("09:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"max-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("18:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"start"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("09:00"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"end"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("16:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("disabled"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time04"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u4E0D\u53EF\u6E05\u9664"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time04"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":clearable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" nextTick "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t(" ctx")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" time00 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" time01 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" time02 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'03:30'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" time03 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'09:30'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" time04 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'09:30'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      time00`),n("span",{class:"token punctuation"},","),t(`
      time01`),n("span",{class:"token punctuation"},","),t(`
      time02`),n("span",{class:"token punctuation"},","),t(`
      time03`),n("span",{class:"token punctuation"},","),t(`
      time04`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".my-10"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 10px 0px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),H=n("h3",{id:"\u56FA\u5B9A\u65F6\u95F4\u8303\u56F4",tabindex:"-1"},[t("\u56FA\u5B9A\u65F6\u95F4\u8303\u56F4 "),n("a",{class:"header-anchor",href:"#\u56FA\u5B9A\u65F6\u95F4\u8303\u56F4","aria-hidden":"true"},"#")],-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-row")]),t(),n("span",{class:"token attr-name"},":gutter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("startTime"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("endTime"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":min-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("startTime"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" nextTick "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t(" ctx")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" startTime "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" endTime "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      startTime`),n("span",{class:"token punctuation"},","),t(`
      endTime`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".my-10"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 10px 0px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),K=n("h3",{id:"\u4E8B\u4EF6",tabindex:"-1"},[t("\u4E8B\u4EF6 "),n("a",{class:"header-anchor",href:"#\u4E8B\u4EF6","aria-hidden":"true"},"#")],-1),L=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("selectedTimeChange"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("timeData01"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("selectedTimeChange"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@focus"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("focusFun"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@blur"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("blurFun"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" nextTick "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t(" ctx")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" timeData01 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'00:30'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token comment"},"// \u8FD4\u56DE\u9009\u4E2D\u7684\u65F6\u95F4"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"selectedTimeChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"time"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("time"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"focusFun"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"blurFun"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      selectedTimeChange`),n("span",{class:"token punctuation"},","),t(`
      timeData01`),n("span",{class:"token punctuation"},","),t(`
      focusFun`),n("span",{class:"token punctuation"},","),t(`
      blurFun`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),M=D(`<h3 id="timeselect-\u53C2\u6570" tabindex="-1">TimeSelect \u53C2\u6570 <a class="header-anchor" href="#timeselect-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>v-model</td><td>string</td><td>--</td><td>\u9009\u4E2D\u9879\u7ED1\u5B9A\u503C</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u7981\u7528\u72B6\u6001</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>size</td><td><a href="#itimeselect">ITimeSelect</a></td><td>md</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8</td><td>--</td></tr><tr><td>placeholder</td><td>string</td><td>&#39;\u8BF7\u9009\u62E9\u65F6\u95F4&#39;</td><td>\u5360\u4F4D\u5185\u5BB9</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>min-time</td><td>string</td><td>&#39;00:00&#39;</td><td>\u53EF\u9009\uFF0C\u6700\u65E9\u65F6\u95F4\u70B9</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>max-time</td><td>string</td><td>&#39;24:00&#39;</td><td>\u53EF\u9009\uFF0C\u6700\u665A\u65F6\u95F4\u70B9</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>start</td><td>string</td><td>&#39;00:00&#39;</td><td>\u53EF\u9009\uFF0C\u5F00\u59CB\u65F6\u95F4</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>end</td><td>string</td><td>&#39;24:00&#39;</td><td>\u53EF\u9009\uFF0C\u7ED3\u675F\u65F6\u95F4</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>step</td><td>string</td><td>&#39;00:30&#39;</td><td>\u53EF\u9009\uFF0C\u95F4\u9694\u65F6\u95F4</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>clearable</td><td>boolean</td><td>true</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u53EF\u6E05\u9664</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h3 id="timeselect-\u4E8B\u4EF6" tabindex="-1">TimeSelect \u4E8B\u4EF6 <a class="header-anchor" href="#timeselect-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>change</td><td>\u53EF\u9009\uFF0C\u9009\u5B9A\u6570\u636E\u65F6\u89E6\u53D1</td><td><a href="#%E4%BA%8B%E4%BB%B6">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h3 id="timeselect-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">TimeSelect \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#timeselect-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="itimeselect" tabindex="-1">ITimeSelect <a class="header-anchor" href="#itimeselect" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">ITimeSelect</span> <span class="token operator">=</span> <span class="token string">&#39;lg&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;md&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;sm&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,7);function O(s,e,a,F,v,f){const m=T("render-demo-0"),i=T("demo"),g=T("render-demo-1"),B=T("render-demo-2");return j(),I("div",null,[P,C(i,{sourceCode:`<template>
  <div>
    <div class="mb-0">basic</div>
    <d-time-select class="mb-2" v-model="time00" />

    <div class="mb-0">step</div>
    <d-time-select class="mb-2" v-model="time01" step="00:10" />

    <div class="mb-0">min-time\u3001max-time</div>
    <d-time-select class="mb-2" v-model="time02" min-time="02:20" max-time="18:30" />

    <div class="mb-0">min-time\u3001max-time\u3001start\u3001end</div>
    <d-time-select class="mb-2" v-model="time03" min-time="09:30" max-time="18:30" start="09:00" end="16:30" />

    <div class="mb-0">disabled</div>
    <d-time-select class="mb-2" v-model="time04" disabled />
    
    <div class="mb-0">\u4E0D\u53EF\u6E05\u9664</div>
    <d-time-select class="mb-2" v-model="time04" :clearable="false" />
  </div>
</template>

<script>
import { ref, defineComponent, nextTick } from 'vue';
export default defineComponent({
  setup(props, ctx) {
    let time00 = ref('');
    let time01 = ref('');
    let time02 = ref('03:30');
    let time03 = ref('09:30');
    let time04 = ref('09:30');
    return {
      time00,
      time01,
      time02,
      time03,
      time04,
    };
  },
});
<\/script>

<style>
.my-10 {
  margin: 10px 0px;
}
</style>
`},{highlight:h(()=>[G]),default:h(()=>[C(m)]),_:1}),H,C(i,{sourceCode:`<template>
  <div>
    <d-row :gutter="5">
      <d-col>
        <d-time-select v-model="startTime" />
      </d-col>
      <d-col>
        <d-time-select v-model="endTime" :min-time="startTime" />
      </d-col>
    </d-row>
  </div>
</template>

<script>
import { ref, defineComponent, nextTick } from 'vue';
export default defineComponent({
  setup(props, ctx) {
    let startTime = ref('');
    let endTime = ref('');
    return {
      startTime,
      endTime,
    };
  },
});
<\/script>

<style>
.my-10 {
  margin: 10px 0px;
}
</style>
`},{highlight:h(()=>[J]),default:h(()=>[C(g)]),_:1}),K,C(i,{sourceCode:`<template>
  <div>
    <div class="mb-0">selectedTimeChange</div>
    <d-time-select v-model="timeData01" @change="selectedTimeChange" @focus="focusFun" @blur="blurFun" />
  </div>
</template>

<script>
import { ref, defineComponent, nextTick } from 'vue';

export default defineComponent({
  setup(props, ctx) {
    let timeData01 = ref('00:30');

    // \u8FD4\u56DE\u9009\u4E2D\u7684\u65F6\u95F4
    const selectedTimeChange = (time) => {
      console.log(time);
    };
    const focusFun = (e) => {
      console.log(e);
    };
    const blurFun = (e) => {
      console.log(e);
    };

    return {
      selectedTimeChange,
      timeData01,
      focusFun,
      blurFun,
    };
  },
});
<\/script>
`},{highlight:h(()=>[L]),default:h(()=>[C(B)]),_:1}),M])}var X=$(z,[["render",O]]);export{W as __pageData,X as default};
