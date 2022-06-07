var S=Object.defineProperty;var A=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var h=(a,s,e)=>s in a?S(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e,C=(a,s)=>{for(var e in s||(s={}))D.call(s,e)&&h(a,e,s[e]);if(A)for(var e of A(s))b.call(s,e)&&h(a,e,s[e]);return a};import{_ as w,V as F,r as v,c as V,a as m,w as f,b as _,d as t,e as n,o as q}from"./app.437ddac7.js";const N={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:a,createVNode:s,withCtx:e,createTextVNode:d,openBlock:E,createElementBlock:g}=F,c=d("\u4E0B\u4E00\u6B65");function p(u,k){const r=a("d-step"),B=a("d-steps"),x=a("d-button");return E(),g("div",null,[s(B,{modelValue:u.activeStep,"onUpdate:modelValue":k[0]||(k[0]=y=>u.activeStep=y)},{default:e(()=>[s(r,{title:"\u57FA\u672C\u4FE1\u606F"}),s(r,{title:"\u9009\u62E9\u4EE3\u7801\u6E90"}),s(r,{title:"\u9009\u62E9\u6784\u5EFA\u6A21\u677F"})]),_:1},8,["modelValue"]),s(x,{onClick:u.nextStep,class:"demo-steps-basic-next-step"},{default:e(()=>[c]),_:1},8,["onClick"])])}const{defineComponent:l,ref:o}=F,i=l({setup(){const u=o(0);return{activeStep:u,nextStep:()=>{u.value>2?u.value=0:u.value++}}}});return C({render:p},i)}(),"render-demo-1":function(){const{resolveComponent:a,createVNode:s,withCtx:e,openBlock:d,createElementBlock:E}=F;function g(o,i){const u=a("d-step"),k=a("d-steps");return d(),E("div",null,[s(k,{modelValue:o.activeStepAlignCenter,"onUpdate:modelValue":i[0]||(i[0]=r=>o.activeStepAlignCenter=r),"align-center":""},{default:e(()=>[s(u,{title:"\u57FA\u672C\u4FE1\u606F"}),s(u,{title:"\u9009\u62E9\u4EE3\u7801\u6E90"}),s(u,{title:"\u9009\u62E9\u6784\u5EFA\u6A21\u677F"})]),_:1},8,["modelValue"])])}const{defineComponent:c,ref:p}=F,l=c({setup(){return{activeStepAlignCenter:p(1)}}});return C({render:g},l)}(),"render-demo-2":function(){const{resolveComponent:a,createVNode:s,withCtx:e,openBlock:d,createElementBlock:E}=F;function g(o,i){const u=a("d-step"),k=a("d-steps");return d(),E("div",null,[s(k,{modelValue:o.activeStepDescription,"onUpdate:modelValue":i[0]||(i[0]=r=>o.activeStepDescription=r)},{default:e(()=>[s(u,{title:"\u57FA\u672C\u4FE1\u606F",description:"\u586B\u5199\u540D\u79F0\u3001\u9009\u62E9\u5F52\u5C5E\u9879\u76EE\u7B49\u57FA\u672C\u4FE1\u606F"}),s(u,{title:"\u9009\u62E9\u4EE3\u7801\u6E90",description:"\u9009\u62E9\u4EE3\u7801\u4ED3\u5E93\u3001\u5206\u652F\u7B49\u4FE1\u606F"}),s(u,{title:"\u9009\u62E9\u6784\u5EFA\u6A21\u677F",description:"\u6839\u636E\u9879\u76EE\u7C7B\u578B\u9009\u62E9\u5408\u9002\u7684\u6784\u5EFA\u6A21\u677F"})]),_:1},8,["modelValue"])])}const{defineComponent:c,ref:p}=F,l=c({setup(){return{activeStepDescription:p(1)}}});return C({render:g},l)}()}},K='{"title":"Steps \u6B65\u9AA4\u6761","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u5C45\u4E2D\u5BF9\u9F50","slug":"\u5C45\u4E2D\u5BF9\u9F50"},{"level":3,"title":"\u5E26\u63CF\u8FF0\u7684\u6B65\u9AA4\u6761","slug":"\u5E26\u63CF\u8FF0\u7684\u6B65\u9AA4\u6761"},{"level":3,"title":"Steps \u53C2\u6570","slug":"steps-\u53C2\u6570"},{"level":3,"title":"Step \u53C2\u6570","slug":"step-\u53C2\u6570"}],"relativePath":"components/steps/index.md","lastUpdated":1654593732368}',U=_('<h1 id="steps-\u6B65\u9AA4\u6761" tabindex="-1">Steps \u6B65\u9AA4\u6761 <a class="header-anchor" href="#steps-\u6B65\u9AA4\u6761" aria-hidden="true">#</a></h1><p>\u5F15\u5BFC\u7528\u6237\u6309\u6B65\u9AA4\u5B8C\u6210\u4EFB\u52A1\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u9700\u8981\u6309\u7279\u5B9A\u7684\u6B65\u9AA4\u5B8C\u6210\u4EFB\u52A1\u65F6\u4F7F\u7528\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),$=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-steps")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("activeStep"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u57FA\u672C\u4FE1\u606F"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u9009\u62E9\u4EE3\u7801\u6E90"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u9009\u62E9\u6784\u5EFA\u6A21\u677F"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-steps")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("nextStep"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("demo-steps-basic-next-step"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u4E0B\u4E00\u6B65"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" activeStep "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"nextStep"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("activeStep"),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},">"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
        activeStep`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"else"),n(),t("span",{class:"token punctuation"},"{"),n(`
        activeStep`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      activeStep`),t("span",{class:"token punctuation"},","),n(`
      nextStep`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("scss"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".demo-steps-basic-next-step"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"margin-top"),t("span",{class:"token punctuation"},":"),n(" 24px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),j=t("h3",{id:"\u5C45\u4E2D\u5BF9\u9F50",tabindex:"-1"},[n("\u5C45\u4E2D\u5BF9\u9F50 "),t("a",{class:"header-anchor",href:"#\u5C45\u4E2D\u5BF9\u9F50","aria-hidden":"true"},"#")],-1),T=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-steps")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("activeStepAlignCenter"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"align-center"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u57FA\u672C\u4FE1\u606F"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u9009\u62E9\u4EE3\u7801\u6E90"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u9009\u62E9\u6784\u5EFA\u6A21\u677F"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-steps")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" activeStepAlignCenter "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      activeStepAlignCenter`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),P=t("h3",{id:"\u5E26\u63CF\u8FF0\u7684\u6B65\u9AA4\u6761",tabindex:"-1"},[n("\u5E26\u63CF\u8FF0\u7684\u6B65\u9AA4\u6761 "),t("a",{class:"header-anchor",href:"#\u5E26\u63CF\u8FF0\u7684\u6B65\u9AA4\u6761","aria-hidden":"true"},"#")],-1),z=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-steps")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("activeStepDescription"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u57FA\u672C\u4FE1\u606F"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"description"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u586B\u5199\u540D\u79F0\u3001\u9009\u62E9\u5F52\u5C5E\u9879\u76EE\u7B49\u57FA\u672C\u4FE1\u606F"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u9009\u62E9\u4EE3\u7801\u6E90"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"description"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u9009\u62E9\u4EE3\u7801\u4ED3\u5E93\u3001\u5206\u652F\u7B49\u4FE1\u606F"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u9009\u62E9\u6784\u5EFA\u6A21\u677F"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"description"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u6839\u636E\u9879\u76EE\u7C7B\u578B\u9009\u62E9\u5408\u9002\u7684\u6784\u5EFA\u6A21\u677F"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-steps")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" activeStepDescription "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      activeStepDescription`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),G=_('<h3 id="steps-\u53C2\u6570" tabindex="-1">Steps \u53C2\u6570 <a class="header-anchor" href="#steps-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">0</td><td style="text-align:left;">\u5F53\u524D\u6FC0\u6D3B\u7684\u6B65\u9AA4</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">space</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0Cstep \u7684\u95F4\u8DDD</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">align-center</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5C45\u4E2D\u5BF9\u9F50</td><td style="text-align:left;"><a href="#%E5%B1%85%E4%B8%AD%E5%AF%B9%E9%BD%90">\u5C45\u4E2D\u5BF9\u9F50</a></td></tr></tbody></table><h3 id="step-\u53C2\u6570" tabindex="-1">Step \u53C2\u6570 <a class="header-anchor" href="#step-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">title</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u6B65\u9AA4\u7684\u6807\u9898</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">description</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6B65\u9AA4\u7684\u63CF\u8FF0</td><td style="text-align:left;"><a href="#%E5%B8%A6%E6%8F%8F%E8%BF%B0%E7%9A%84%E6%AD%A5%E9%AA%A4%E6%9D%A1">\u5E26\u63CF\u8FF0\u7684\u6B65\u9AA4\u6761</a></td></tr></tbody></table>',4);function H(a,s,e,d,E,g){const c=v("render-demo-0"),p=v("demo"),l=v("render-demo-1"),o=v("render-demo-2");return q(),V("div",null,[U,m(p,{sourceCode:`<template>
  <d-steps v-model="activeStep">
    <d-step title="\u57FA\u672C\u4FE1\u606F"></d-step>
    <d-step title="\u9009\u62E9\u4EE3\u7801\u6E90"></d-step>
    <d-step title="\u9009\u62E9\u6784\u5EFA\u6A21\u677F"></d-step>
  </d-steps>
  <d-button @click="nextStep" class="demo-steps-basic-next-step">\u4E0B\u4E00\u6B65</d-button>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const activeStep = ref(0);

    const nextStep = () => {
      if (activeStep.value > 2) {
        activeStep.value = 0;
      } else {
        activeStep.value++;
      }
    };

    return {
      activeStep,
      nextStep,
    };
  },
});
<\/script>

<style lang="scss">
.demo-steps-basic-next-step {
  margin-top: 24px;
}
</style>
`},{highlight:f(()=>[$]),default:f(()=>[m(c)]),_:1}),j,m(p,{sourceCode:`<template>
  <d-steps v-model="activeStepAlignCenter" align-center>
    <d-step title="\u57FA\u672C\u4FE1\u606F"></d-step>
    <d-step title="\u9009\u62E9\u4EE3\u7801\u6E90"></d-step>
    <d-step title="\u9009\u62E9\u6784\u5EFA\u6A21\u677F"></d-step>
  </d-steps>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const activeStepAlignCenter = ref(1);

    return {
      activeStepAlignCenter,
    };
  },
});
<\/script>
`},{highlight:f(()=>[T]),default:f(()=>[m(l)]),_:1}),P,m(p,{sourceCode:`<template>
  <d-steps v-model="activeStepDescription">
    <d-step title="\u57FA\u672C\u4FE1\u606F" description="\u586B\u5199\u540D\u79F0\u3001\u9009\u62E9\u5F52\u5C5E\u9879\u76EE\u7B49\u57FA\u672C\u4FE1\u606F"></d-step>
    <d-step title="\u9009\u62E9\u4EE3\u7801\u6E90" description="\u9009\u62E9\u4EE3\u7801\u4ED3\u5E93\u3001\u5206\u652F\u7B49\u4FE1\u606F"></d-step>
    <d-step title="\u9009\u62E9\u6784\u5EFA\u6A21\u677F" description="\u6839\u636E\u9879\u76EE\u7C7B\u578B\u9009\u62E9\u5408\u9002\u7684\u6784\u5EFA\u6A21\u677F"></d-step>
  </d-steps>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const activeStepDescription = ref(1);

    return {
      activeStepDescription,
    };
  },
});
<\/script>
`},{highlight:f(()=>[z]),default:f(()=>[m(o)]),_:1}),G])}var L=w(N,[["render",H]]);export{K as __pageData,L as default};
