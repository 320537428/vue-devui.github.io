var y=Object.defineProperty;var _=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var S=(e,s,u)=>s in e?y(e,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[s]=u,v=(e,s)=>{for(var u in s||(s={}))D.call(s,u)&&S(e,u,s[u]);if(_)for(var u of _(s))w.call(s,u)&&S(e,u,s[u]);return e};import{_ as b,V as m,r as A,c as V,a as F,w as f,b as x,d as t,e as n,o as q}from"./app.6835101b.js";const N={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:s,withCtx:u,createTextVNode:d,openBlock:E,createElementBlock:g}=m,k=d("\u4E0B\u4E00\u6B65");function p(a,l){const c=e("d-step"),C=e("d-steps"),h=e("d-button");return E(),g("div",null,[s(C,{modelValue:a.activeStep,"onUpdate:modelValue":l[0]||(l[0]=B=>a.activeStep=B)},{default:u(()=>[s(c,{title:"\u57FA\u672C\u4FE1\u606F"}),s(c,{title:"\u9009\u62E9\u4EE3\u7801\u6E90"}),s(c,{title:"\u9009\u62E9\u6784\u5EFA\u6A21\u677F"})]),_:1},8,["modelValue"]),s(h,{onClick:a.nextStep,class:"demo-steps-basic-next-step"},{default:u(()=>[k]),_:1},8,["onClick"])])}const{defineComponent:r,ref:o}=m,i=r({setup(){const a=o(0);return{activeStep:a,nextStep:()=>{a.value>2?a.value=0:a.value++}}}});return v({render:p},i)}(),"render-demo-1":function(){const{resolveComponent:e,createVNode:s,withCtx:u,openBlock:d,createElementBlock:E}=m;function g(o,i){const a=e("d-step"),l=e("d-steps");return d(),E("div",null,[s(l,{modelValue:o.activeStepAlignCenter,"onUpdate:modelValue":i[0]||(i[0]=c=>o.activeStepAlignCenter=c),"align-center":""},{default:u(()=>[s(a,{title:"\u57FA\u672C\u4FE1\u606F"}),s(a,{title:"\u9009\u62E9\u4EE3\u7801\u6E90"}),s(a,{title:"\u9009\u62E9\u6784\u5EFA\u6A21\u677F"})]),_:1},8,["modelValue"])])}const{defineComponent:k,ref:p}=m,r=k({setup(){return{activeStepAlignCenter:p(1)}}});return v({render:g},r)}(),"render-demo-2":function(){const{resolveComponent:e,createVNode:s,withCtx:u,openBlock:d,createElementBlock:E}=m;function g(o,i){const a=e("d-step"),l=e("d-steps");return d(),E("div",null,[s(l,{modelValue:o.activeStepDescription,"onUpdate:modelValue":i[0]||(i[0]=c=>o.activeStepDescription=c)},{default:u(()=>[s(a,{title:"\u57FA\u672C\u4FE1\u606F",description:"\u586B\u5199\u540D\u79F0\u3001\u9009\u62E9\u5F52\u5C5E\u9879\u76EE\u7B49\u57FA\u672C\u4FE1\u606F"}),s(a,{title:"\u9009\u62E9\u4EE3\u7801\u6E90",description:"\u9009\u62E9\u4EE3\u7801\u4ED3\u5E93\u3001\u5206\u652F\u7B49\u4FE1\u606F"}),s(a,{title:"\u9009\u62E9\u6784\u5EFA\u6A21\u677F",description:"\u6839\u636E\u9879\u76EE\u7C7B\u578B\u9009\u62E9\u5408\u9002\u7684\u6784\u5EFA\u6A21\u677F"})]),_:1},8,["modelValue"])])}const{defineComponent:k,ref:p}=m,r=k({setup(){return{activeStepDescription:p(1)}}});return v({render:g},r)}(),"render-demo-3":function(){const{resolveComponent:e,createVNode:s,withCtx:u,openBlock:d,createElementBlock:E}=m;function g(o,i){const a=e("d-step"),l=e("d-steps");return d(),E("div",null,[s(l,{modelValue:o.activeStepCustomIcon,"onUpdate:modelValue":i[0]||(i[0]=c=>o.activeStepCustomIcon=c)},{default:u(()=>[s(a,{title:"\u57FA\u672C\u4FE1\u606F",icon:"classroom-post-answers-large"}),s(a,{title:"\u9009\u62E9\u4EE3\u7801\u6E90",icon:"code"}),s(a,{title:"\u9009\u62E9\u6784\u5EFA\u6A21\u677F",icon:"icon-build-with-tool"})]),_:1},8,["modelValue"])])}const{defineComponent:k,ref:p}=m,r=k({setup(){return{activeStepCustomIcon:p(1)}}});return v({render:g},r)}(),"render-demo-4":function(){const{resolveComponent:e,createVNode:s,withCtx:u,createElementVNode:d,openBlock:E,createElementBlock:g}=m,k={style:{height:"260px"}};function p(a,l){const c=e("d-step"),C=e("d-steps");return E(),g("div",null,[d("div",k,[s(C,{modelValue:a.activeStepDirection,"onUpdate:modelValue":l[0]||(l[0]=h=>a.activeStepDirection=h),direction:"vertical"},{default:u(()=>[s(c,{title:"\u57FA\u672C\u4FE1\u606F"}),s(c,{title:"\u9009\u62E9\u4EE3\u7801\u6E90"}),s(c,{title:"\u9009\u62E9\u6784\u5EFA\u6A21\u677F",description:"\u6839\u636E\u9879\u76EE\u7C7B\u578B\u9009\u62E9\u5408\u9002\u7684\u6784\u5EFA\u6A21\u677F"})]),_:1},8,["modelValue"])])])}const{defineComponent:r,ref:o}=m,i=r({setup(){return{activeStepDirection:o(1)}}});return v({render:p},i)}(),"render-demo-5":function(){const{resolveComponent:e,createVNode:s,withCtx:u,openBlock:d,createElementBlock:E}=m;function g(o,i){const a=e("d-step"),l=e("d-steps");return d(),E("div",null,[s(l,{modelValue:o.activeStepStatus,"onUpdate:modelValue":i[0]||(i[0]=c=>o.activeStepStatus=c)},{default:u(()=>[s(a,{title:"\u57FA\u672C\u4FE1\u606F"}),s(a,{title:"\u9009\u62E9\u4EE3\u7801\u6E90",status:"error"}),s(a,{title:"\u9009\u62E9\u6784\u5EFA\u6A21\u677F"})]),_:1},8,["modelValue"])])}const{defineComponent:k,ref:p}=m,r=k({setup(){return{activeStepStatus:p(1)}}});return v({render:g},r)}(),"render-demo-6":function(){const{resolveComponent:e,createVNode:s,withCtx:u,createTextVNode:d,openBlock:E,createElementBlock:g}=m,k=d("\u4E0B\u4E00\u6B65");function p(a,l){const c=e("d-step"),C=e("d-steps"),h=e("d-button");return E(),g("div",null,[s(C,{modelValue:a.activeStepSimple,"onUpdate:modelValue":l[0]||(l[0]=B=>a.activeStepSimple=B),simple:""},{default:u(()=>[s(c,{title:"\u57FA\u672C\u4FE1\u606F"}),s(c,{title:"\u9009\u62E9\u4EE3\u7801\u6E90"}),s(c,{title:"\u9009\u62E9\u6784\u5EFA\u6A21\u677F"})]),_:1},8,["modelValue"]),s(h,{onClick:a.nextStepSimple,class:"demo-steps-basic-next-step"},{default:u(()=>[k]),_:1},8,["onClick"])])}const{defineComponent:r,ref:o}=m,i=r({setup(){const a=o(1);return{activeStepSimple:a,nextStepSimple:()=>{a.value>2?a.value=0:a.value++}}}});return v({render:p},i)}()}},Y='{"title":"Steps \u6B65\u9AA4\u6761","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u5C45\u4E2D\u5BF9\u9F50","slug":"\u5C45\u4E2D\u5BF9\u9F50"},{"level":3,"title":"\u5E26\u63CF\u8FF0\u7684\u6B65\u9AA4\u6761","slug":"\u5E26\u63CF\u8FF0\u7684\u6B65\u9AA4\u6761"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u56FE\u6807","slug":"\u81EA\u5B9A\u4E49\u56FE\u6807"},{"level":3,"title":"\u7AD6\u5411\u6B65\u9AA4\u6761","slug":"\u7AD6\u5411\u6B65\u9AA4\u6761"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u72B6\u6001","slug":"\u81EA\u5B9A\u4E49\u72B6\u6001"},{"level":3,"title":"\u7B80\u6D01\u6A21\u5F0F","slug":"\u7B80\u6D01\u6A21\u5F0F"},{"level":3,"title":"Steps \u53C2\u6570","slug":"steps-\u53C2\u6570"},{"level":3,"title":"Step \u53C2\u6570","slug":"step-\u53C2\u6570"},{"level":3,"title":"Step \u63D2\u69FD","slug":"step-\u63D2\u69FD"},{"level":3,"title":"Steps \u7C7B\u578B\u5B9A\u4E49","slug":"steps-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/steps/index.md","lastUpdated":1655716121186}',I=x('<h1 id="steps-\u6B65\u9AA4\u6761" tabindex="-1">Steps \u6B65\u9AA4\u6761 <a class="header-anchor" href="#steps-\u6B65\u9AA4\u6761" aria-hidden="true">#</a></h1><p>\u5F15\u5BFC\u7528\u6237\u6309\u6B65\u9AA4\u5B8C\u6210\u4EFB\u52A1\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u9700\u8981\u6309\u7279\u5B9A\u7684\u6B65\u9AA4\u5B8C\u6210\u4EFB\u52A1\u65F6\u4F7F\u7528\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),U=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),$=t("h3",{id:"\u5E26\u63CF\u8FF0\u7684\u6B65\u9AA4\u6761",tabindex:"-1"},[n("\u5E26\u63CF\u8FF0\u7684\u6B65\u9AA4\u6761 "),t("a",{class:"header-anchor",href:"#\u5E26\u63CF\u8FF0\u7684\u6B65\u9AA4\u6761","aria-hidden":"true"},"#")],-1),z=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),P=t("h3",{id:"\u81EA\u5B9A\u4E49\u56FE\u6807",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u56FE\u6807 "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u56FE\u6807","aria-hidden":"true"},"#")],-1),G=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-steps")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("activeStepCustomIcon"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u57FA\u672C\u4FE1\u606F"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"icon"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("classroom-post-answers-large"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u9009\u62E9\u4EE3\u7801\u6E90"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"icon"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("code"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u9009\u62E9\u6784\u5EFA\u6A21\u677F"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"icon"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("icon-build-with-tool"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-steps")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" activeStepCustomIcon "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      activeStepCustomIcon`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),H=t("h3",{id:"\u7AD6\u5411\u6B65\u9AA4\u6761",tabindex:"-1"},[n("\u7AD6\u5411\u6B65\u9AA4\u6761 "),t("a",{class:"header-anchor",href:"#\u7AD6\u5411\u6B65\u9AA4\u6761","aria-hidden":"true"},"#")],-1),J=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n(" 260px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-steps")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("activeStepDirection"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("vertical"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u57FA\u672C\u4FE1\u606F"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u9009\u62E9\u4EE3\u7801\u6E90"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u9009\u62E9\u6784\u5EFA\u6A21\u677F"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"description"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u6839\u636E\u9879\u76EE\u7C7B\u578B\u9009\u62E9\u5408\u9002\u7684\u6784\u5EFA\u6A21\u677F"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-steps")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" activeStepDirection "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      activeStepDirection`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),K=t("h3",{id:"\u81EA\u5B9A\u4E49\u72B6\u6001",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u72B6\u6001 "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u72B6\u6001","aria-hidden":"true"},"#")],-1),L=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-steps")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("activeStepStatus"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u57FA\u672C\u4FE1\u606F"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u9009\u62E9\u4EE3\u7801\u6E90"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"status"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("error"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u9009\u62E9\u6784\u5EFA\u6A21\u677F"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-steps")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" activeStepStatus "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      activeStepStatus`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),M=t("h3",{id:"\u7B80\u6D01\u6A21\u5F0F",tabindex:"-1"},[n("\u7B80\u6D01\u6A21\u5F0F "),t("a",{class:"header-anchor",href:"#\u7B80\u6D01\u6A21\u5F0F","aria-hidden":"true"},"#")],-1),O=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-steps")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("activeStepSimple"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"simple"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u57FA\u672C\u4FE1\u606F"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u9009\u62E9\u4EE3\u7801\u6E90"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-step")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u9009\u62E9\u6784\u5EFA\u6A21\u677F"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-step")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-steps")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("nextStepSimple"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("demo-steps-basic-next-step"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u4E0B\u4E00\u6B65"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" activeStepSimple "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"nextStepSimple"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("activeStepSimple"),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},">"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
        activeStepSimple`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"else"),n(),t("span",{class:"token punctuation"},"{"),n(`
        activeStepSimple`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      activeStepSimple`),t("span",{class:"token punctuation"},","),n(`
      nextStepSimple`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),Q=x(`<h3 id="steps-\u53C2\u6570" tabindex="-1">Steps \u53C2\u6570 <a class="header-anchor" href="#steps-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">0</td><td style="text-align:left;">\u5F53\u524D\u6FC0\u6D3B\u7684\u6B65\u9AA4</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">space</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0Cstep \u7684\u95F4\u8DDD</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">align-center</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5C45\u4E2D\u5BF9\u9F50</td><td style="text-align:left;"><a href="#%E5%B1%85%E4%B8%AD%E5%AF%B9%E9%BD%90">\u5C45\u4E2D\u5BF9\u9F50</a></td></tr><tr><td style="text-align:left;">direction</td><td style="text-align:left;"><a href="#istepsdirection">IStepsDirection</a></td><td style="text-align:left;">&#39;horizontal&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6B65\u9AA4\u6761\u65B9\u5411</td><td style="text-align:left;"><a href="#%E7%AB%96%E5%90%91%E6%AD%A5%E9%AA%A4%E6%9D%A1">\u7AD6\u5411\u6B65\u9AA4\u6761</a></td></tr><tr><td style="text-align:left;">simple</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7B80\u6D01\u6A21\u5F0F</td><td style="text-align:left;"><a href="#%E7%AE%80%E6%B4%81%E6%A8%A1%E5%BC%8F">\u7B80\u6D01\u6A21\u5F0F</a></td></tr></tbody></table><h3 id="step-\u53C2\u6570" tabindex="-1">Step \u53C2\u6570 <a class="header-anchor" href="#step-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">title</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u6B65\u9AA4\u7684\u6807\u9898</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">description</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6B65\u9AA4\u7684\u63CF\u8FF0</td><td style="text-align:left;"><a href="#%E5%B8%A6%E6%8F%8F%E8%BF%B0%E7%9A%84%E6%AD%A5%E9%AA%A4%E6%9D%A1">\u5E26\u63CF\u8FF0\u7684\u6B65\u9AA4\u6761</a></td></tr><tr><td style="text-align:left;">icon</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u81EA\u5B9A\u4E49\u6B65\u9AA4\u7684\u56FE\u6807</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9B%BE%E6%A0%87">\u81EA\u5B9A\u4E49\u56FE\u6807</a></td></tr><tr><td style="text-align:left;">status</td><td style="text-align:left;"><a href="#istepstatus">IStepStatus</a></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6B65\u9AA4\u7684\u72B6\u6001</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%8A%B6%E6%80%81">\u81EA\u5B9A\u4E49\u72B6\u6001</a></td></tr></tbody></table><h3 id="step-\u63D2\u69FD" tabindex="-1">Step \u63D2\u69FD <a class="header-anchor" href="#step-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">icon</td><td style="text-align:left;">\u6B65\u9AA4\u7684\u56FE\u6807</td><td style="text-align:left;"><code>color</code>\uFF0C\u56FE\u6807\u989C\u8272</td><td style="text-align:left;">--</td></tr></tbody></table><h3 id="steps-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Steps \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#steps-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="istepsdirection" tabindex="-1">IStepsDirection <a class="header-anchor" href="#istepsdirection" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">IStepsDirection</span> <span class="token operator">=</span> <span class="token string">&#39;horizontal&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="istepstatus" tabindex="-1">IStepStatus <a class="header-anchor" href="#istepstatus" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">IStepStatus</span> <span class="token operator">=</span> <span class="token string">&#39;wait&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;process&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;finish&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;success&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,11);function R(e,s,u,d,E,g){const k=A("render-demo-0"),p=A("demo"),r=A("render-demo-1"),o=A("render-demo-2"),i=A("render-demo-3"),a=A("render-demo-4"),l=A("render-demo-5"),c=A("render-demo-6");return q(),V("div",null,[I,F(p,{sourceCode:`<template>
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
`},{highlight:f(()=>[U]),default:f(()=>[F(k)]),_:1}),j,F(p,{sourceCode:`<template>
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
`},{highlight:f(()=>[T]),default:f(()=>[F(r)]),_:1}),$,F(p,{sourceCode:`<template>
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
`},{highlight:f(()=>[z]),default:f(()=>[F(o)]),_:1}),P,F(p,{sourceCode:`<template>
  <d-steps v-model="activeStepCustomIcon">
    <d-step title="\u57FA\u672C\u4FE1\u606F" icon="classroom-post-answers-large"></d-step>
    <d-step title="\u9009\u62E9\u4EE3\u7801\u6E90" icon="code"></d-step>
    <d-step title="\u9009\u62E9\u6784\u5EFA\u6A21\u677F" icon="icon-build-with-tool"></d-step>
  </d-steps>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const activeStepCustomIcon = ref(1);

    return {
      activeStepCustomIcon,
    };
  },
});
<\/script>
`},{highlight:f(()=>[G]),default:f(()=>[F(i)]),_:1}),H,F(p,{sourceCode:`<template>
  <div style="height: 260px;">
    <d-steps v-model="activeStepDirection" direction="vertical">
      <d-step title="\u57FA\u672C\u4FE1\u606F"></d-step>
      <d-step title="\u9009\u62E9\u4EE3\u7801\u6E90"></d-step>
      <d-step title="\u9009\u62E9\u6784\u5EFA\u6A21\u677F" description="\u6839\u636E\u9879\u76EE\u7C7B\u578B\u9009\u62E9\u5408\u9002\u7684\u6784\u5EFA\u6A21\u677F"></d-step>
    </d-steps>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const activeStepDirection = ref(1);

    return {
      activeStepDirection,
    };
  },
});
<\/script>
`},{highlight:f(()=>[J]),default:f(()=>[F(a)]),_:1}),K,F(p,{sourceCode:`<template>
  <d-steps v-model="activeStepStatus">
    <d-step title="\u57FA\u672C\u4FE1\u606F"></d-step>
    <d-step title="\u9009\u62E9\u4EE3\u7801\u6E90" status="error"></d-step>
    <d-step title="\u9009\u62E9\u6784\u5EFA\u6A21\u677F"></d-step>
  </d-steps>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const activeStepStatus = ref(1);

    return {
      activeStepStatus,
    };
  },
});
<\/script>
`},{highlight:f(()=>[L]),default:f(()=>[F(l)]),_:1}),M,F(p,{sourceCode:`<template>
  <d-steps v-model="activeStepSimple" simple>
    <d-step title="\u57FA\u672C\u4FE1\u606F"></d-step>
    <d-step title="\u9009\u62E9\u4EE3\u7801\u6E90"></d-step>
    <d-step title="\u9009\u62E9\u6784\u5EFA\u6A21\u677F"></d-step>
  </d-steps>
  <d-button @click="nextStepSimple" class="demo-steps-basic-next-step">\u4E0B\u4E00\u6B65</d-button>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const activeStepSimple = ref(1);

    const nextStepSimple = () => {
      if (activeStepSimple.value > 2) {
        activeStepSimple.value = 0;
      } else {
        activeStepSimple.value++;
      }
    };

    return {
      activeStepSimple,
      nextStepSimple,
    };
  },
});
<\/script>
`},{highlight:f(()=>[O]),default:f(()=>[F(c)]),_:1}),Q])}var Z=b(N,[["render",R]]);export{Y as __pageData,Z as default};
