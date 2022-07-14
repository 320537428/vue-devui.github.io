var $=Object.defineProperty;var D=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var V=(a,e,s)=>e in a?$(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,T=(a,e)=>{for(var s in e||(e={}))j.call(e,s)&&V(a,s,e[s]);if(D)for(var s of D(e))I.call(e,s)&&V(a,s,e[s]);return a};import{_ as z,V as C,r as b,c as P,a as y,w as B,b as w,d as n,e as t,o as G}from"./app.a2cc62c7.js";const H={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:a,resolveComponent:e,createVNode:s,openBlock:v,createElementBlock:f}=C,E=a("h4",{class:"my-10"},"basic",-1),g=a("h4",{class:"my-10"},"step",-1),i=a("h4",{class:"my-10"},"min-time\u3001max-time",-1),F={style:{"margin-top":"10px"}},_=a("h4",{class:"my-10"},"min-time\u3001max-time\u3001start\u3001end",-1),A={style:{"margin-top":"10px"}},o=a("h4",{class:"my-10"},"disabled",-1),l={style:{"margin-top":"10px"}},k=a("h4",{class:"my-10"},"\u4E0D\u53EF\u6E05\u9664",-1),d={style:{"margin-top":"10px"}};function x(c,u){const m=e("d-time-select");return v(),f("div",null,[a("div",null,[E,s(m,{modelValue:c.time00,"onUpdate:modelValue":u[0]||(u[0]=p=>c.time00=p)},null,8,["modelValue"]),g,s(m,{modelValue:c.time01,"onUpdate:modelValue":u[1]||(u[1]=p=>c.time01=p),step:"00:10"},null,8,["modelValue"]),i,a("div",F,[s(m,{modelValue:c.time02,"onUpdate:modelValue":u[2]||(u[2]=p=>c.time02=p),"min-time":"02:20","max-time":"18:30"},null,8,["modelValue"])]),_,a("div",A,[s(m,{modelValue:c.time03,"onUpdate:modelValue":u[3]||(u[3]=p=>c.time03=p),"min-time":"09:30","max-time":"18:30",start:"09:00",end:"16:30"},null,8,["modelValue"])]),o,a("div",l,[s(m,{modelValue:c.time04,"onUpdate:modelValue":u[4]||(u[4]=p=>c.time04=p),disabled:""},null,8,["modelValue"])]),k,a("div",d,[s(m,{modelValue:c.time04,"onUpdate:modelValue":u[5]||(u[5]=p=>c.time04=p),clearable:!1},null,8,["modelValue"])])])])}const{ref:r,defineComponent:h,nextTick:X}=C,q=h({setup(c,u){let m=r(""),p=r(""),N=r("03:30"),U=r("09:30"),S=r("09:30");return{time00:m,time01:p,time02:N,time03:U,time04:S}}});return T({render:x},q)}(),"render-demo-1":function(){const{resolveComponent:a,createVNode:e,withCtx:s,createElementVNode:v,openBlock:f,createElementBlock:E}=C;function g(o,l){const k=a("d-time-select"),d=a("d-col"),x=a("d-row");return f(),E("div",null,[v("div",null,[e(x,{gutter:5},{default:s(()=>[e(d,null,{default:s(()=>[e(k,{modelValue:o.startTime,"onUpdate:modelValue":l[0]||(l[0]=r=>o.startTime=r)},null,8,["modelValue"])]),_:1}),e(d,null,{default:s(()=>[e(k,{modelValue:o.endTime,"onUpdate:modelValue":l[1]||(l[1]=r=>o.endTime=r),"min-time":o.startTime},null,8,["modelValue","min-time"])]),_:1})]),_:1})])])}const{ref:i,defineComponent:F,nextTick:_}=C,A=F({setup(o,l){let k=i(""),d=i("");return{startTime:k,endTime:d}}});return T({render:g},A)}(),"render-demo-2":function(){const{createElementVNode:a,resolveComponent:e,createVNode:s,openBlock:v,createElementBlock:f}=C,E=a("h4",{class:"my-10"},"selectedTimeChange",-1);function g(o,l){const k=e("d-time-select");return v(),f("div",null,[a("div",null,[E,s(k,{modelValue:o.timeData01,"onUpdate:modelValue":l[0]||(l[0]=d=>o.timeData01=d),onChange:o.selectedTimeChange,onFocus:o.focusFun,onBlur:o.blurFun},null,8,["modelValue","onChange","onFocus","onBlur"])])])}const{ref:i,defineComponent:F,nextTick:_}=C,A=F({setup(o,l){let k=i("00:30");return{selectedTimeChange:h=>{console.log(h)},timeData01:k,focusFun:h=>{console.log(h)},blurFun:h=>{console.log(h)}}}});return T({render:g},A)}()}},nn='{"title":"TimeSelect \u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u56FA\u5B9A\u65F6\u95F4\u8303\u56F4","slug":"\u56FA\u5B9A\u65F6\u95F4\u8303\u56F4"},{"level":3,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":3,"title":"d-time-select","slug":"d-time-select"},{"level":3,"title":"TimeSelect \u7C7B\u578B\u5B9A\u4E49","slug":"timeselect-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/time-select/index.md","lastUpdated":1656658054482}',J=w('<h1 id="timeselect-\u7EC4\u4EF6" tabindex="-1">TimeSelect \u7EC4\u4EF6 <a class="header-anchor" href="#timeselect-\u7EC4\u4EF6" aria-hidden="true">#</a></h1><p>\u65F6\u95F4\u9009\u62E9\u5668\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u63D0\u4F9B\u51E0\u4E2A\u56FA\u5B9A\u7684\u65F6\u95F4\u70B9\u4F9B\u7528\u6237\u9009\u62E9</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),K=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("basic"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time00"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("step"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time01"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"step"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("00:10"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("min-time\u3001max-time"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time02"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"min-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("02:20"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"max-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("18:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("min-time\u3001max-time\u3001start\u3001end"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time03"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"min-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("09:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"max-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("18:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"start"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("09:00"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"end"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("16:30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("disabled"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time04"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u4E0D\u53EF\u6E05\u9664"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("time04"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":clearable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),L=n("h3",{id:"\u56FA\u5B9A\u65F6\u95F4\u8303\u56F4",tabindex:"-1"},[t("\u56FA\u5B9A\u65F6\u95F4\u8303\u56F4 "),n("a",{class:"header-anchor",href:"#\u56FA\u5B9A\u65F6\u95F4\u8303\u56F4","aria-hidden":"true"},"#")],-1),M=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),O=n("h3",{id:"\u4E8B\u4EF6",tabindex:"-1"},[t("\u4E8B\u4EF6 "),n("a",{class:"header-anchor",href:"#\u4E8B\u4EF6","aria-hidden":"true"},"#")],-1),Q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("selectedTimeChange"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),R=w(`<h3 id="d-time-select" tabindex="-1">d-time-select <a class="header-anchor" href="#d-time-select" aria-hidden="true">#</a></h3><p>d-time-select \u53C2\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>v-model</td><td>string</td><td>--</td><td>\u9009\u4E2D\u9879\u7ED1\u5B9A\u503C</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u7981\u7528\u72B6\u6001</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>size</td><td><a href="#itimeselect">ITimeSelect</a></td><td>md</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8</td><td>--</td></tr><tr><td>placeholder</td><td>string</td><td>&#39;\u8BF7\u9009\u62E9\u65F6\u95F4&#39;</td><td>\u5360\u4F4D\u5185\u5BB9</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>min-time</td><td>string</td><td>&#39;00:00&#39;</td><td>\u53EF\u9009\uFF0C\u6700\u65E9\u65F6\u95F4\u70B9</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>max-time</td><td>string</td><td>&#39;24:00&#39;</td><td>\u53EF\u9009\uFF0C\u6700\u665A\u65F6\u95F4\u70B9</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>start</td><td>string</td><td>&#39;00:00&#39;</td><td>\u53EF\u9009\uFF0C\u5F00\u59CB\u65F6\u95F4</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>end</td><td>string</td><td>&#39;24:00&#39;</td><td>\u53EF\u9009\uFF0C\u7ED3\u675F\u65F6\u95F4</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>step</td><td>string</td><td>&#39;00:30&#39;</td><td>\u53EF\u9009\uFF0C\u95F4\u9694\u65F6\u95F4</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>clearable</td><td>boolean</td><td>true</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u53EF\u6E05\u9664</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><p>d-time-select \u4E8B\u4EF6</p><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>change</td><td>\u53EF\u9009\uFF0C\u9009\u5B9A\u6570\u636E\u65F6\u89E6\u53D1</td><td><a href="#%E4%BA%8B%E4%BB%B6">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h3 id="timeselect-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">TimeSelect \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#timeselect-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="itimeselect" tabindex="-1">ITimeSelect <a class="header-anchor" href="#itimeselect" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">ITimeSelect</span> <span class="token operator">=</span> <span class="token string">&#39;lg&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;md&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;sm&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,8);function W(a,e,s,v,f,E){const g=b("render-demo-0"),i=b("demo"),F=b("render-demo-1"),_=b("render-demo-2");return G(),P("div",null,[J,y(i,{sourceCode:`<template>
  <div>
    <h4 class="my-10">basic</h4>
    <d-time-select v-model="time00" />
    <h4 class="my-10">step</h4>
    <d-time-select v-model="time01" step="00:10" />
    <h4 class="my-10">min-time\u3001max-time</h4>
    <div style="margin-top: 10px;">
      <d-time-select v-model="time02" min-time="02:20" max-time="18:30" />
    </div>
    <h4 class="my-10">min-time\u3001max-time\u3001start\u3001end</h4>
    <div style="margin-top: 10px;">
      <d-time-select v-model="time03" min-time="09:30" max-time="18:30" start="09:00" end="16:30" />
    </div>
    <h4 class="my-10">disabled</h4>
    <div style="margin-top: 10px;">
      <d-time-select v-model="time04" disabled />
    </div>
    <h4 class="my-10">\u4E0D\u53EF\u6E05\u9664</h4>
    <div style="margin-top: 10px;">
      <d-time-select v-model="time04" :clearable="false" />
    </div>
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
`},{highlight:B(()=>[K]),default:B(()=>[y(g)]),_:1}),L,y(i,{sourceCode:`<template>
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
`},{highlight:B(()=>[M]),default:B(()=>[y(F)]),_:1}),O,y(i,{sourceCode:`<template>
  <div>
    <h4 class="my-10">selectedTimeChange</h4>
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
`},{highlight:B(()=>[Q]),default:B(()=>[y(_)]),_:1}),R])}var tn=z(H,[["render",W]]);export{nn as __pageData,tn as default};
