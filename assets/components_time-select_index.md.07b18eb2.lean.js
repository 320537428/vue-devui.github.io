var D=Object.defineProperty;var V=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var T=(s,p,a)=>p in s?D(s,p,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[p]=a,y=(s,p)=>{for(var a in p||(p={}))N.call(p,a)&&T(s,a,p[a]);if(V)for(var a of V(p))U.call(p,a)&&T(s,a,p[a]);return s};import{_ as S,V as B,r as q,o as z,c as j,a as C,w as b,b as x,d as n,e as t}from"./app.a70f02bc.js";const $={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:s,resolveComponent:p,createVNode:a,openBlock:m,createElementBlock:f}=B,E=s("div",{class:"mb-0"},"basic",-1),v=s("div",{class:"mb-0"},"step",-1),k=s("div",{class:"mb-0"},"disabled",-1),F=s("div",{class:"mb-0"},"\u4E0D\u53EF\u6E05\u9664",-1);function g(c,e){const o=p("d-time-select");return m(),f("div",null,[s("div",null,[E,a(o,{class:"mb-2",modelValue:c.time00,"onUpdate:modelValue":e[0]||(e[0]=u=>c.time00=u)},null,8,["modelValue"]),v,a(o,{class:"mb-2",modelValue:c.time01,"onUpdate:modelValue":e[1]||(e[1]=u=>c.time01=u),step:"00:10"},null,8,["modelValue"]),k,a(o,{class:"mb-2",modelValue:c.time02,"onUpdate:modelValue":e[2]||(e[2]=u=>c.time02=u),disabled:""},null,8,["modelValue"]),F,a(o,{class:"mb-2",modelValue:c.time03,"onUpdate:modelValue":e[3]||(e[3]=u=>c.time03=u),clearable:!1},null,8,["modelValue"])])])}const{ref:r,defineComponent:l,nextTick:h}=B,i=l({setup(c,e){let o=r(""),u=r(""),_=r("09:30"),A=r("09:30");return{time00:o,time01:u,time02:_,time03:A}}});return y({render:g},i)}(),"render-demo-1":function(){const{createElementVNode:s,resolveComponent:p,createVNode:a,openBlock:m,createElementBlock:f}=B,E=s("div",{class:"mb-0"},"lg",-1),v=s("div",{class:"mb-0"},"md",-1),k=s("div",{class:"mb-0"},"sm",-1);function F(i,c){const e=p("d-time-select");return m(),f("div",null,[s("div",null,[E,a(e,{class:"mb-2",modelValue:i.time05,"onUpdate:modelValue":c[0]||(c[0]=o=>i.time05=o),size:"lg",placeholder:"\u95F4\u9694\u4E3A1\u5C0F\u65F6",step:"01:00"},null,8,["modelValue"]),v,a(e,{class:"mb-2",modelValue:i.time05,"onUpdate:modelValue":c[1]||(c[1]=o=>i.time05=o),size:"md",placeholder:"\u95F4\u9694\u4E3A30\u5206\u949F",step:"00:30"},null,8,["modelValue"]),k,a(e,{class:"mb-2",modelValue:i.time05,"onUpdate:modelValue":c[2]||(c[2]=o=>i.time05=o),size:"sm",placeholder:"\u95F4\u9694\u4E3A1\u5206\u949F",step:"00:01"},null,8,["modelValue"])])])}const{ref:g,defineComponent:r,nextTick:l}=B,h=r({setup(i,c){let e=g(""),o=g(""),u=g("");return{time00:e,time01:o,time02:u}}});return y({render:F},h)}(),"render-demo-2":function(){const{createElementVNode:s,resolveComponent:p,createVNode:a,withCtx:m,openBlock:f,createElementBlock:E}=B,v=s("div",{class:"mb-0"},"min-time\u3001max-time",-1),k=s("div",{class:"mb-0"},"start\u3001end",-1),F=s("div",{class:"mb-0"},"min-time\u3001max-time\u3001start\u3001end",-1),g=s("div",{class:"mb-0"},"\u56FA\u5B9A\u65F6\u95F4\u8303\u56F4",-1);function r(e,o){const u=p("d-time-select"),_=p("d-col"),A=p("d-row");return f(),E("div",null,[s("div",null,[v,a(u,{class:"mb-2",modelValue:e.time01,"onUpdate:modelValue":o[0]||(o[0]=d=>e.time01=d),"min-time":"02:20","max-time":"18:30",placeholder:"\u63A7\u5236\u65F6\u95F4\u7684\u53EF\u9009\u8303\u56F4"},null,8,["modelValue"]),k,a(u,{class:"mb-2",modelValue:e.time02,"onUpdate:modelValue":o[1]||(o[1]=d=>e.time02=d),start:"09:00",end:"18:30",placeholder:"\u63A7\u5236\u65F6\u95F4\u7684\u663E\u793A\u8303\u56F4"},null,8,["modelValue"]),F,a(u,{class:"mb-2",modelValue:e.time03,"onUpdate:modelValue":o[2]||(o[2]=d=>e.time03=d),"min-time":"09:30","max-time":"18:30",start:"09:00",end:"16:30"},null,8,["modelValue"]),g,s("div",null,[a(A,{gutter:5},{default:m(()=>[a(_,null,{default:m(()=>[a(u,{modelValue:e.startTime,"onUpdate:modelValue":o[3]||(o[3]=d=>e.startTime=d)},null,8,["modelValue"])]),_:1}),a(_,null,{default:m(()=>[a(u,{modelValue:e.endTime,"onUpdate:modelValue":o[4]||(o[4]=d=>e.endTime=d),"min-time":e.startTime},null,8,["modelValue","min-time"])]),_:1})]),_:1})])])])}const{ref:l,defineComponent:h,nextTick:i}=B,c=h({setup(e,o){let u=l(""),_=l(""),A=l("09:30"),d=l(""),w=l("");return{time01:u,time02:_,time03:A,startTime:d,endTime:w}}});return y({render:r},c)}(),"render-demo-3":function(){const{createElementVNode:s,resolveComponent:p,createVNode:a,openBlock:m,createElementBlock:f}=B,E=s("div",{class:"mb-0"},"selectedTimeChange",-1);function v(l,h){const i=p("d-time-select");return m(),f("div",null,[s("div",null,[E,a(i,{modelValue:l.timeData01,"onUpdate:modelValue":h[0]||(h[0]=c=>l.timeData01=c),onChange:l.selectedTimeChange,onFocus:l.focusFun,onBlur:l.blurFun},null,8,["modelValue","onChange","onFocus","onBlur"])])])}const{ref:k,defineComponent:F,nextTick:g}=B,r=F({setup(l,h){let i=k("00:30");return{selectedTimeChange:u=>{console.log(u)},timeData01:i,focusFun:u=>{console.log(u)},blurFun:u=>{console.log(u)}}}});return y({render:v},r)}()}},X='{"title":"TimeSelect \u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u5C3A\u5BF8","slug":"\u5C3A\u5BF8"},{"level":3,"title":"\u65F6\u95F4\u6BB5","slug":"\u65F6\u95F4\u6BB5"},{"level":3,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":3,"title":"TimeSelect \u53C2\u6570","slug":"timeselect-\u53C2\u6570"},{"level":3,"title":"TimeSelect \u4E8B\u4EF6","slug":"timeselect-\u4E8B\u4EF6"},{"level":3,"title":"TimeSelect \u7C7B\u578B\u5B9A\u4E49","slug":"timeselect-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/time-select/index.md","lastUpdated":1662904860659}',I=x('<h1 id="timeselect-\u7EC4\u4EF6" tabindex="-1">TimeSelect \u7EC4\u4EF6 <a class="header-anchor" href="#timeselect-\u7EC4\u4EF6" aria-hidden="true">#</a></h1><p>\u65F6\u95F4\u9009\u62E9\u5668\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u63D0\u4F9B\u51E0\u4E2A\u56FA\u5B9A\u7684\u65F6\u95F4\u70B9\u4F9B\u7528\u6237\u9009\u62E9</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("basic"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time00"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("step"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time01"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"step"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("00:10"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("disabled"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time02"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u4E0D\u53EF\u6E05\u9664"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time03"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":clearable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" nextTick "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t(" ctx")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" time00 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" time01 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" time02 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'09:30'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" time03 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'09:30'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      time00`),n("span",{class:"token punctuation"},","),t(`
      time01`),n("span",{class:"token punctuation"},","),t(`
      time02`),n("span",{class:"token punctuation"},","),t(`
      time03`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".my-10"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 10px 0px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),G=n("h3",{id:"\u5C3A\u5BF8",tabindex:"-1"},[t("\u5C3A\u5BF8 "),n("a",{class:"header-anchor",href:"#\u5C3A\u5BF8","aria-hidden":"true"},"#")],-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("lg"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time05"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("lg"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u95F4\u9694\u4E3A1\u5C0F\u65F6"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"step"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("01:00"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("md"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time05"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("md"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u95F4\u9694\u4E3A30\u5206\u949F"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"step"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("00:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("sm"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time05"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sm"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u95F4\u9694\u4E3A1\u5206\u949F"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"step"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("00:01"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" nextTick "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t(" ctx")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" time00 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" time01 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" time02 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      time00`),n("span",{class:"token punctuation"},","),t(`
      time01`),n("span",{class:"token punctuation"},","),t(`
      time02`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".my-10"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 10px 0px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),J=n("h3",{id:"\u65F6\u95F4\u6BB5",tabindex:"-1"},[t("\u65F6\u95F4\u6BB5 "),n("a",{class:"header-anchor",href:"#\u65F6\u95F4\u6BB5","aria-hidden":"true"},"#")],-1),K=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("min-time\u3001max-time"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time01"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"min-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("02:20"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"max-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("18:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u63A7\u5236\u65F6\u95F4\u7684\u53EF\u9009\u8303\u56F4"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("start\u3001end"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time02"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"start"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("09:00"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"end"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("18:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u63A7\u5236\u65F6\u95F4\u7684\u663E\u793A\u8303\u56F4"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("min-time\u3001max-time\u3001start\u3001end"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time03"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"min-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("09:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"max-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("18:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"start"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("09:00"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"end"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("16:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u56FA\u5B9A\u65F6\u95F4\u8303\u56F4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
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
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" nextTick "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t(" ctx")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" time01 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" time02 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" time03 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'09:30'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" startTime "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" endTime "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      time01`),n("span",{class:"token punctuation"},","),t(`
      time02`),n("span",{class:"token punctuation"},","),t(`
      time03`),n("span",{class:"token punctuation"},","),t(`
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
`)])])],-1),L=n("h3",{id:"\u4E8B\u4EF6",tabindex:"-1"},[t("\u4E8B\u4EF6 "),n("a",{class:"header-anchor",href:"#\u4E8B\u4EF6","aria-hidden":"true"},"#")],-1),M=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),O=x(`<h3 id="timeselect-\u53C2\u6570" tabindex="-1">TimeSelect \u53C2\u6570 <a class="header-anchor" href="#timeselect-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>v-model</td><td>string</td><td>--</td><td>\u9009\u4E2D\u9879\u7ED1\u5B9A\u503C</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u7981\u7528\u72B6\u6001</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>size</td><td><a href="#itimeselect">ITimeSelect</a></td><td>md</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8</td><td><a href="#%E5%B0%BA%E5%AF%B8">\u5C3A\u5BF8</a></td></tr><tr><td>placeholder</td><td>string</td><td>&#39;\u8BF7\u9009\u62E9\u65F6\u95F4&#39;</td><td>\u5360\u4F4D\u5185\u5BB9</td><td><a href="#%E5%B0%BA%E5%AF%B8">\u5360\u4F4D\u5185\u5BB9</a></td></tr><tr><td>min-time</td><td>string</td><td>&#39;00:00&#39;</td><td>\u53EF\u9009\uFF0C\u6700\u65E9\u65F6\u95F4\u70B9\uFF0C\u65E9\u4E8E\u8BE5\u503C\u7684\u65F6\u95F4\u6BB5\u5C06\u88AB\u7981\u7528</td><td><a href="#%E6%97%B6%E9%97%B4%E6%AE%B5">\u65F6\u95F4\u6BB5</a></td></tr><tr><td>max-time</td><td>string</td><td>&#39;24:00&#39;</td><td>\u53EF\u9009\uFF0C\u6700\u665A\u65F6\u95F4\u70B9\uFF0C\u665A\u4E8E\u8BE5\u503C\u7684\u65F6\u95F4\u6BB5\u5C06\u88AB\u7981\u7528</td><td><a href="#%E6%97%B6%E9%97%B4%E6%AE%B5">\u65F6\u95F4\u6BB5</a></td></tr><tr><td>start</td><td>string</td><td>&#39;00:00&#39;</td><td>\u53EF\u9009\uFF0C\u5F00\u59CB\u65F6\u95F4</td><td><a href="#%E6%97%B6%E9%97%B4%E6%AE%B5">\u65F6\u95F4\u6BB5</a></td></tr><tr><td>end</td><td>string</td><td>&#39;24:00&#39;</td><td>\u53EF\u9009\uFF0C\u7ED3\u675F\u65F6\u95F4</td><td><a href="#%E6%97%B6%E9%97%B4%E6%AE%B5">\u65F6\u95F4\u6BB5</a></td></tr><tr><td>step</td><td>string</td><td>&#39;00:30&#39;</td><td>\u53EF\u9009\uFF0C\u95F4\u9694\u65F6\u95F4</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>clearable</td><td>boolean</td><td>true</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u53EF\u6E05\u9664</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h3 id="timeselect-\u4E8B\u4EF6" tabindex="-1">TimeSelect \u4E8B\u4EF6 <a class="header-anchor" href="#timeselect-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>change</td><td>\u53EF\u9009\uFF0C\u9009\u5B9A\u6570\u636E\u65F6\u89E6\u53D1</td><td><a href="#%E4%BA%8B%E4%BB%B6">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h3 id="timeselect-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">TimeSelect \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#timeselect-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="itimeselect" tabindex="-1">ITimeSelect <a class="header-anchor" href="#itimeselect" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">ITimeSelect</span> <span class="token operator">=</span> <span class="token string">&#39;lg&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;md&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;sm&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,7);function Q(s,p,a,m,f,E){const v=q("render-demo-0"),k=q("demo"),F=q("render-demo-1"),g=q("render-demo-2"),r=q("render-demo-3");return z(),j("div",null,[I,C(k,{sourceCode:`<template>
  <div>
    <div class="mb-0">basic</div>
    <d-time-select class="mb-2" v-model="time00" />

    <div class="mb-0">step</div>
    <d-time-select class="mb-2" v-model="time01" step="00:10" />

    <div class="mb-0">disabled</div>
    <d-time-select class="mb-2" v-model="time02" disabled />
    
    <div class="mb-0">\u4E0D\u53EF\u6E05\u9664</div>
    <d-time-select class="mb-2" v-model="time03" :clearable="false" />
  </div>
</template>

<script>
import { ref, defineComponent, nextTick } from 'vue';
export default defineComponent({
  setup(props, ctx) {
    let time00 = ref('');
    let time01 = ref('');
    let time02 = ref('09:30');
    let time03 = ref('09:30');
    return {
      time00,
      time01,
      time02,
      time03,
    };
  },
});
<\/script>

<style>
.my-10 {
  margin: 10px 0px;
}
</style>
`},{highlight:b(()=>[P]),default:b(()=>[C(v)]),_:1}),G,C(k,{sourceCode:`<template>
  <div>
    <div class="mb-0">lg</div>
    <d-time-select class="mb-2" v-model="time05" size="lg" placeholder="\u95F4\u9694\u4E3A1\u5C0F\u65F6" step="01:00" />
    
    <div class="mb-0">md</div>
    <d-time-select class="mb-2" v-model="time05" size="md" placeholder="\u95F4\u9694\u4E3A30\u5206\u949F" step="00:30" />
    
    <div class="mb-0">sm</div>
    <d-time-select class="mb-2" v-model="time05" size="sm" placeholder="\u95F4\u9694\u4E3A1\u5206\u949F" step="00:01" />
  </div>
</template>

<script>
import { ref, defineComponent, nextTick } from 'vue';
export default defineComponent({
  setup(props, ctx) {
    let time00 = ref('');
    let time01 = ref('');
    let time02 = ref('');
    return {
      time00,
      time01,
      time02,
    };
  },
});
<\/script>

<style>
.my-10 {
  margin: 10px 0px;
}
</style>
`},{highlight:b(()=>[H]),default:b(()=>[C(F)]),_:1}),J,C(k,{sourceCode:`<template>
  <div>
    <div class="mb-0">min-time\u3001max-time</div>
    <d-time-select class="mb-2" v-model="time01" min-time="02:20" max-time="18:30" placeholder="\u63A7\u5236\u65F6\u95F4\u7684\u53EF\u9009\u8303\u56F4" />

    <div class="mb-0">start\u3001end</div>
    <d-time-select class="mb-2" v-model="time02" start="09:00" end="18:30" placeholder="\u63A7\u5236\u65F6\u95F4\u7684\u663E\u793A\u8303\u56F4" />

    <div class="mb-0">min-time\u3001max-time\u3001start\u3001end</div>
    <d-time-select class="mb-2" v-model="time03" min-time="09:30" max-time="18:30" start="09:00" end="16:30" />

    <div class="mb-0">\u56FA\u5B9A\u65F6\u95F4\u8303\u56F4</div>
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
  </div>
</template>

<script>
import { ref, defineComponent, nextTick } from 'vue';
export default defineComponent({
  setup(props, ctx) {
    let time01 = ref('');
    let time02 = ref('');
    let time03 = ref('09:30');
    let startTime = ref('');
    let endTime = ref('');
    return {
      time01,
      time02,
      time03,
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
`},{highlight:b(()=>[K]),default:b(()=>[C(g)]),_:1}),L,C(k,{sourceCode:`<template>
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
`},{highlight:b(()=>[M]),default:b(()=>[C(r)]),_:1}),O])}var Y=S($,[["render",Q]]);export{X as __pageData,Y as default};
