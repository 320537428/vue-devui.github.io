var j=Object.defineProperty;var T=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var V=(e,o,s)=>o in e?j(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,w=(e,o)=>{for(var s in o||(o={}))L.call(o,s)&&V(e,s,o[s]);if(T)for(var s of T(o))M.call(o,s)&&V(e,s,o[s]);return e};import{_ as P,V as v,r as G,c as U,b,w as D,a as N,d as t,e as n,o as z}from"./app.36ea4c54.js";const H={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:e,resolveComponent:o,withCtx:s,createVNode:p,openBlock:F,createElementBlock:E}=v,h=e("Step 1"),k=e("Step 2"),f=e("Step 3");function C(c,l){const d=o("d-button"),g=o("d-steps-guide");return F(),E("div",null,[p(d,{variant:"common",class:"step-1 ml-s",onClick:l[0]||(l[0]=m=>c.handleClick(0))},{default:s(()=>[h]),_:1}),p(d,{variant:"common",class:"step-2 ml-s",onClick:l[1]||(l[1]=m=>c.handleClick(1))},{default:s(()=>[k]),_:1}),p(d,{variant:"common",class:"step-3 ml-s",onClick:l[2]||(l[2]=m=>c.handleClick(2))},{default:s(()=>[f]),_:1}),p(g,{ref:"stepRef",steps:c.steps,"step-index":c.stepIndex,"onUpdate:step-index":l[3]||(l[3]=m=>c.stepIndex=m),"step-change":c.handleStepChange,onGuideClose:c.handleGuideClose},null,8,["steps","step-index","step-change","onGuideClose"])])}const{defineComponent:x,reactive:S,ref:A,onMounted:_}=v,y=x({setup(){const c=[{title:"\u57FA\u7840\u7528\u6CD51",content:"\u4E1A\u52A1\u63A8\u51FA\u65B0\u7279\u6027\uFF0C\u6216\u590D\u6742\u7684\u4E1A\u52A1\u903B\u8F91\u9700\u8981\u6307\u5F15\u7528\u6237\u65F6\u4F7F\u7528\u3002",trigger:".step-1"},{title:"\u57FA\u7840\u7528\u6CD52",content:"\u4E1A\u52A1\u63A8\u51FA\u65B0\u7279\u6027\uFF0C\u6216\u590D\u6742\u7684\u4E1A\u52A1\u903B\u8F91\u9700\u8981\u6307\u5F15\u7528\u6237\u65F6\u4F7F\u7528\u3002",trigger:".step-2"},{title:"\u57FA\u7840\u7528\u6CD53",content:"\u4E1A\u52A1\u63A8\u51FA\u65B0\u7279\u6027\uFF0C\u6216\u590D\u6742\u7684\u4E1A\u52A1\u903B\u8F91\u9700\u8981\u6307\u5F15\u7528\u6237\u65F6\u4F7F\u7528\u3002",trigger:".step-3"}],l=[{title:"\u5F39\u51FA\u4F4D\u7F6E top-left",content:"Steps Guide",trigger:".top-left",position:"top-left"},{title:"\u5F39\u51FA\u4F4D\u7F6E top",content:"Steps Guide",trigger:".top",position:"top"},{title:"\u5F39\u51FA\u4F4D\u7F6E top-right",content:"Steps Guide",trigger:".top-right",position:"top-right"},{title:"\u5F39\u51FA\u4F4D\u7F6E right",content:"Steps Guide",trigger:".right",position:"right"},{title:"\u5F39\u51FA\u4F4D\u7F6E bottom-right",content:"Steps Guide",trigger:".bottom-right",position:"bottom-right"},{title:"\u5F39\u51FA\u4F4D\u7F6E bottom",content:"Steps Guide",trigger:".bottom",position:"bottom"},{title:"\u5F39\u51FA\u4F4D\u7F6E bottom-left",content:"Steps Guide",trigger:".bottom-left",position:"bottom-left"},{title:"\u5F39\u51FA\u4F4D\u7F6E left",content:"Steps Guide",trigger:".left",position:"left"}],d=[{title:"\u81EA\u5B9A\u4E49\u7528\u6CD5",content:"\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6307\u5F15\u4FE1\u606F\u5F39\u51FA\u7684\u4F4D\u7F6E\u548C\u5143\u7D20\u3002",trigger:".custom-1",position:{leftFix:0,topFix:0,type:"top"}},{title:"\u81EA\u5B9A\u4E49\u7528\u6CD5",content:"\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6307\u5F15\u4FE1\u606F\u5F39\u51FA\u7684\u4F4D\u7F6E\u548C\u5143\u7D20\u3002",trigger:".custom-2",target:".nav-links",position:"bottom"}];let g=A(c);const m=A(0),B=A(null);return{stepRef:B,steps:g,stepIndex:m,handleClick:u=>{g.value=c,B.value.setCurrentIndex(u)},handleStepChange:(u,a)=>!0,handleGuideClose:u=>{const a=g.value.length;u===a-1&&a!==2&&(g.value=a===3?l:d,B.value.setCurrentIndex(0))}}}});return w({render:C},y)}(),"render-demo-1":function(){const{createTextVNode:e,resolveComponent:o,withCtx:s,createVNode:p,createElementVNode:F,openBlock:E,createElementBlock:h}=v,k={class:"flex mb-s justify-center"},f=e("Top-left"),C=e("Top"),x=e("Top-right"),S={class:"flex mb-s justify-around"},A=e("Left"),_=e("Right"),y={class:"flex mb-s justify-center"},c=e("Bottom-left"),l=e("Bottom"),d=e("Bottom-right");function g(u,a){const i=o("d-button"),I=o("d-steps-guide");return E(),h("div",null,[F("div",k,[p(i,{variant:"common",class:"top-left ml-s",width:"120px",onClick:a[0]||(a[0]=r=>u.handleClick(0))},{default:s(()=>[f]),_:1}),p(i,{variant:"common",class:"top ml-s",width:"120px",onClick:a[1]||(a[1]=r=>u.handleClick(1))},{default:s(()=>[C]),_:1}),p(i,{variant:"common",class:"top-right ml-s",width:"120px",onClick:a[2]||(a[2]=r=>u.handleClick(2))},{default:s(()=>[x]),_:1})]),F("div",S,[p(i,{variant:"common",class:"left ml-s",width:"120px",onClick:a[3]||(a[3]=r=>u.handleClick(7))},{default:s(()=>[A]),_:1}),p(i,{variant:"common",class:"right ml-s",width:"120px",onClick:a[4]||(a[4]=r=>u.handleClick(3))},{default:s(()=>[_]),_:1})]),F("div",y,[p(i,{variant:"common",class:"bottom-left ml-s",width:"120px",onClick:a[5]||(a[5]=r=>u.handleClick(6))},{default:s(()=>[c]),_:1}),p(i,{variant:"common",class:"bottom ml-s",width:"120px",onClick:a[6]||(a[6]=r=>u.handleClick(5))},{default:s(()=>[l]),_:1}),p(i,{variant:"common",class:"bottom-right ml-s",width:"120px",onClick:a[7]||(a[7]=r=>u.handleClick(4))},{default:s(()=>[d]),_:1})]),p(I,{steps:u.steps,"step-index":u.stepIndex,"onUpdate:step-index":a[8]||(a[8]=r=>u.stepIndex=r),ref:"stepsRef"},null,8,["steps","step-index"])])}const{defineComponent:m,reactive:B,ref:q,onMounted:$}=v,R=m({setup(){const u=B([{title:"\u5F39\u51FA\u4F4D\u7F6E top-left",content:"Steps Guide",trigger:".top-left",position:"top-left"},{title:"\u5F39\u51FA\u4F4D\u7F6E top",content:"Steps Guide",trigger:".top",position:"top"},{title:"\u5F39\u51FA\u4F4D\u7F6E top-right",content:"Steps Guide",trigger:".top-right",position:"top-right"},{title:"\u5F39\u51FA\u4F4D\u7F6E right",content:"Steps Guide",trigger:".right",position:"right"},{title:"\u5F39\u51FA\u4F4D\u7F6E bottom-right",content:"Steps Guide",trigger:".bottom-right",position:"bottom-right"},{title:"\u5F39\u51FA\u4F4D\u7F6E bottom",content:"Steps Guide",trigger:".bottom",position:"bottom"},{title:"\u5F39\u51FA\u4F4D\u7F6E bottom-left",content:"Steps Guide",trigger:".bottom-left",position:"bottom-left"},{title:"\u5F39\u51FA\u4F4D\u7F6E left",content:"Steps Guide",trigger:".left",position:"left"}]),a=q(null),i=q(-1);return{steps:u,stepIndex:i,handleClick:r=>{a.value.setCurrentIndex(r)},stepsRef:a}}});return w({render:g},R)}(),"render-demo-2":function(){const{createTextVNode:e,resolveComponent:o,withCtx:s,createVNode:p,openBlock:F,createElementBlock:E}=v,h=e("Custom Position"),k=e("Custom Target");function f(y,c){const l=o("d-button"),d=o("d-steps-guide");return F(),E("div",null,[p(l,{variant:"common",class:"ml-s"},{default:s(()=>[h]),_:1}),p(l,{variant:"common",class:"ml-s"},{default:s(()=>[k]),_:1}),p(d,{ref:"stepsRef",steps:y.customSteps,showDots:!1,showClose:!1},null,8,["steps"])])}const{defineComponent:C,reactive:x,ref:S,onMounted:A}=v,_=C({setup(){const y=x([{title:"\u81EA\u5B9A\u4E49\u7528\u6CD5",content:"\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6307\u5F15\u4FE1\u606F\u5F39\u51FA\u7684\u4F4D\u7F6E\u548C\u5143\u7D20\u3002",trigger:".custom-1",position:{leftFix:0,topFix:0,type:"top"}},{title:"\u81EA\u5B9A\u4E49\u7528\u6CD5",content:"\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6307\u5F15\u4FE1\u606F\u5F39\u51FA\u7684\u4F4D\u7F6E\u548C\u5143\u7D20\u3002",trigger:".custom-2",target:".nav-links",position:"bottom"}]),c=S(null);return A(()=>{c.value.closeGuide("custom")}),{customSteps:y,stepsRef:c}}});return w({render:f},_)}()}},et='{"title":"steps-guide \u64CD\u4F5C\u6307\u5F15","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u5F39\u51FA\u4F4D\u7F6E","slug":"\u5F39\u51FA\u4F4D\u7F6E"},{"level":3,"title":"\u81EA\u5B9A\u4E49","slug":"\u81EA\u5B9A\u4E49"},{"level":3,"title":"API","slug":"api"}],"relativePath":"components/steps-guide/index.md","lastUpdated":1646628391397}',J=N('<h1 id="steps-guide-\u64CD\u4F5C\u6307\u5F15" tabindex="-1">steps-guide \u64CD\u4F5C\u6307\u5F15 <a class="header-anchor" href="#steps-guide-\u64CD\u4F5C\u6307\u5F15" aria-hidden="true">#</a></h1><p>\u5F15\u5BFC\u7528\u6237\u4E86\u89E3\u4E1A\u52A1\u4F7F\u7528\u903B\u8F91\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u4E1A\u52A1\u63A8\u51FA\u65B0\u7279\u6027\uFF0C\u6216\u590D\u6742\u7684\u4E1A\u52A1\u903B\u8F91\u9700\u8981\u6307\u5F15\u7528\u6237\u65F6\u4F7F\u7528\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u8BBE\u5B9A\u4E00\u7EC4\u64CD\u4F5C\u6307\u5F15\u4FE1\u606F\u987A\u5E8F\u663E\u793A\u3002</p>',6),K=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("step-1 ml-s"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("handleClick(0)"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Step 1"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("step-2 ml-s"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("handleClick(1)"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Step 2"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("step-3 ml-s"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("handleClick(2)"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Step 3"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-steps-guide")]),n(),t("span",{class:"token attr-name"},"ref"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("stepRef"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":steps"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("steps"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("step-index")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("stepIndex"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":step-change"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("handleStepChange"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@guide-close"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("handleGuideClose"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-steps-guide")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
  `),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" reactive"),t("span",{class:"token punctuation"},","),n(" ref"),t("span",{class:"token punctuation"},","),n(" onMounted "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
  `),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"const"),n(" baseSteps "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n(`
          `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u57FA\u7840\u7528\u6CD51'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E1A\u52A1\u63A8\u51FA\u65B0\u7279\u6027\uFF0C\u6216\u590D\u6742\u7684\u4E1A\u52A1\u903B\u8F91\u9700\u8981\u6307\u5F15\u7528\u6237\u65F6\u4F7F\u7528\u3002'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.step-1'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u57FA\u7840\u7528\u6CD52'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E1A\u52A1\u63A8\u51FA\u65B0\u7279\u6027\uFF0C\u6216\u590D\u6742\u7684\u4E1A\u52A1\u903B\u8F91\u9700\u8981\u6307\u5F15\u7528\u6237\u65F6\u4F7F\u7528\u3002'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.step-2'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u57FA\u7840\u7528\u6CD53'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E1A\u52A1\u63A8\u51FA\u65B0\u7279\u6027\uFF0C\u6216\u590D\u6742\u7684\u4E1A\u52A1\u903B\u8F91\u9700\u8981\u6307\u5F15\u7528\u6237\u65F6\u4F7F\u7528\u3002'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.step-3'"),n(),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(" positionSteps "),t("span",{class:"token operator"},"="),n(` 
          `),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5F39\u51FA\u4F4D\u7F6E top-left'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Steps Guide'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.top-left'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'top-left'"),n(` 
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5F39\u51FA\u4F4D\u7F6E top'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Steps Guide'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.top'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'top'"),n(` 
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5F39\u51FA\u4F4D\u7F6E top-right'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Steps Guide'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.top-right'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'top-right'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5F39\u51FA\u4F4D\u7F6E right'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Steps Guide'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.right'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'right'"),n(` 
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5F39\u51FA\u4F4D\u7F6E bottom-right'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Steps Guide'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.bottom-right'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'bottom-right'"),n(` 
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5F39\u51FA\u4F4D\u7F6E bottom'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Steps Guide'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.bottom'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'bottom'"),n(` 
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5F39\u51FA\u4F4D\u7F6E bottom-left'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Steps Guide'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.bottom-left'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'bottom-left'"),n(` 
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5F39\u51FA\u4F4D\u7F6E left'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Steps Guide'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.left'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'left'"),n(` 
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(` 
            customSteps `),t("span",{class:"token operator"},"="),n(` 
              `),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u81EA\u5B9A\u4E49\u7528\u6CD5'"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6307\u5F15\u4FE1\u606F\u5F39\u51FA\u7684\u4F4D\u7F6E\u548C\u5143\u7D20\u3002'"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.custom-1'"),t("span",{class:"token punctuation"},","),n(` 
                `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
                  `),t("span",{class:"token literal-property property"},"leftFix"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
                  `),t("span",{class:"token literal-property property"},"topFix"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
                  `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'top'"),n(`
                `),t("span",{class:"token punctuation"},"}"),n(` 
              `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),t("span",{class:"token punctuation"},"{"),n(` 
                `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u81EA\u5B9A\u4E49\u7528\u6CD5'"),t("span",{class:"token punctuation"},","),n(` 
                `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6307\u5F15\u4FE1\u606F\u5F39\u51FA\u7684\u4F4D\u7F6E\u548C\u5143\u7D20\u3002'"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.custom-2'"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"target"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.nav-links'"),t("span",{class:"token punctuation"},","),n(` 
                `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'bottom'"),n(`
              `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
      `),t("span",{class:"token keyword"},"let"),n(" steps "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),n("baseSteps"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token keyword"},"const"),n(" stepIndex "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(" stepRef "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),n(`
      `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"handleClick"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token parameter"},"index"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
        steps`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(` baseSteps
        stepRef`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"setCurrentIndex"),t("span",{class:"token punctuation"},"("),n("index"),t("span",{class:"token punctuation"},")"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"handleStepChange"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("index"),t("span",{class:"token punctuation"},","),n(" prevIndex")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token comment"},"/* code */"),n(` 
        `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token boolean"},"true"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"handleGuideClose"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"index"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token keyword"},"const"),n(" stepsLength "),t("span",{class:"token operator"},"="),n(" steps"),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},"."),n(`length
        `),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),n("index "),t("span",{class:"token operator"},"==="),n(" stepsLength "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),n(),t("span",{class:"token operator"},"&&"),n(" stepsLength "),t("span",{class:"token operator"},"!=="),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
          steps`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),n("stepsLength "),t("span",{class:"token operator"},"==="),n(),t("span",{class:"token number"},"3"),n(),t("span",{class:"token operator"},"?"),n(" positionSteps "),t("span",{class:"token operator"},":"),n(" customSteps"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
          stepRef`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"setCurrentIndex"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
        stepRef`),t("span",{class:"token punctuation"},","),n(`
        steps`),t("span",{class:"token punctuation"},","),n(`
        stepIndex`),t("span",{class:"token punctuation"},","),n(`
        handleClick`),t("span",{class:"token punctuation"},","),n(`
        handleStepChange`),t("span",{class:"token punctuation"},","),n(`
        handleGuideClose
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),O=t("h3",{id:"\u5F39\u51FA\u4F4D\u7F6E",tabindex:"-1"},[n("\u5F39\u51FA\u4F4D\u7F6E "),t("a",{class:"header-anchor",href:"#\u5F39\u51FA\u4F4D\u7F6E","aria-hidden":"true"},"#")],-1),Q=t("p",null,"\u603B\u5171\u652F\u6301 8 \u4E2A\u5F39\u51FA\u4F4D\u7F6E\u3002",-1),W=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("flex mb-s justify-center"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("top-left ml-s"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("120px"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("handleClick(0)"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Top-left"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("top ml-s"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("120px"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("handleClick(1)"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Top"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("top-right ml-s"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("120px"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("handleClick(2)"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Top-right"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("flex mb-s justify-around"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("left ml-s"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("120px"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("handleClick(7)"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Left"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("right ml-s"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("120px"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("handleClick(3)"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Right"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("flex mb-s justify-center"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("bottom-left ml-s"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("120px"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("handleClick(6)"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Bottom-left"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("bottom ml-s"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("120px"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("handleClick(5)"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Bottom"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("bottom-right ml-s"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("120px"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("handleClick(4)"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Bottom-right"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-steps-guide")]),n(),t("span",{class:"token attr-name"},":steps"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("steps"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("step-index")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("stepIndex"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"ref"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("stepsRef"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-steps-guide")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
  `),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" reactive"),t("span",{class:"token punctuation"},","),n(" ref"),t("span",{class:"token punctuation"},","),n(" onMounted "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
  `),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"const"),n(" steps "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"reactive"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
          `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5F39\u51FA\u4F4D\u7F6E top-left'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Steps Guide'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.top-left'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'top-left'"),n(` 
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5F39\u51FA\u4F4D\u7F6E top'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Steps Guide'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.top'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'top'"),n(` 
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5F39\u51FA\u4F4D\u7F6E top-right'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Steps Guide'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.top-right'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'top-right'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5F39\u51FA\u4F4D\u7F6E right'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Steps Guide'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.right'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'right'"),n(` 
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5F39\u51FA\u4F4D\u7F6E bottom-right'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Steps Guide'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.bottom-right'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'bottom-right'"),n(` 
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5F39\u51FA\u4F4D\u7F6E bottom'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Steps Guide'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.bottom'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'bottom'"),n(` 
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5F39\u51FA\u4F4D\u7F6E bottom-left'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Steps Guide'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.bottom-left'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'bottom-left'"),n(` 
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5F39\u51FA\u4F4D\u7F6E left'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Steps Guide'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.left'"),t("span",{class:"token punctuation"},","),n(` 
            `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'left'"),n(` 
          `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

      `),t("span",{class:"token keyword"},"const"),n(" stepsRef "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(" stepIndex "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"-"),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"handleClick"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"index"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
        stepsRef`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"setCurrentIndex"),t("span",{class:"token punctuation"},"("),n("index"),t("span",{class:"token punctuation"},")"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
     
      `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
        steps`),t("span",{class:"token punctuation"},","),n(`
        stepIndex`),t("span",{class:"token punctuation"},","),n(`
        handleClick`),t("span",{class:"token punctuation"},","),n(`
        stepsRef
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),X=t("h3",{id:"\u81EA\u5B9A\u4E49",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49 "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49","aria-hidden":"true"},"#")],-1),Y=t("p",null,"\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6307\u5F15\u4FE1\u606F\u5F39\u51FA\u7684\u4F4D\u7F6E\u548C\u5143\u7D20\u3002",-1),Z=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ml-s"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Custom Position"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ml-s"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Custom Target"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-steps-guide")]),n(),t("span",{class:"token attr-name"},"ref"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("stepsRef"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":steps"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("customSteps"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":showDots"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("false"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":showClose"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("false"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-steps-guide")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" reactive"),t("span",{class:"token punctuation"},","),n(" ref"),t("span",{class:"token punctuation"},","),n(" onMounted "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" customSteps "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"reactive"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u81EA\u5B9A\u4E49\u7528\u6CD5'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6307\u5F15\u4FE1\u606F\u5F39\u51FA\u7684\u4F4D\u7F6E\u548C\u5143\u7D20\u3002'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.custom-1'"),t("span",{class:"token punctuation"},","),n(` 
          `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"leftFix"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"topFix"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'top'"),n(`
          `),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(` 
          `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u81EA\u5B9A\u4E49\u7528\u6CD5'"),t("span",{class:"token punctuation"},","),n(` 
          `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6307\u5F15\u4FE1\u606F\u5F39\u51FA\u7684\u4F4D\u7F6E\u548C\u5143\u7D20\u3002'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.custom-2'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"target"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'.nav-links'"),t("span",{class:"token punctuation"},","),n(` 
          `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'bottom'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" stepsRef "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token function"},"onMounted"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      stepsRef`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"closeGuide"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'custom'"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      customSteps`),t("span",{class:"token punctuation"},","),n(`
      stepsRef
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),tt=N('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><p>d-steps-guide \u53C2\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C</th></tr></thead><tbody><tr><td>steps</td><td>array</td><td>Step[]</td><td>\u5FC5\u9009\uFF0C\u64CD\u4F5C\u6307\u5F15\u6B65\u9AA4\u6570\u7EC4</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>stepIndex</td><td>number</td><td>undefined</td><td>\u53EF\u9009\uFF0C\u8868\u793A\u5F53\u524D\u6307\u5F15\u7684\u7D22\u5F15\uFF0C\u4E3A -1 \u65F6\u8868\u793A\u6307\u5F15\u4E3A\u5173\u95ED\u72B6\u6001</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>zIndex</td><td>number</td><td>1100</td><td>\u53EF\u9009\uFF0C\u7528\u4E8E\u8C03\u6574\u6307\u5F15\u4FE1\u606F\u7684\u663E\u793A\u5C42\u7EA7</td><td></td></tr><tr><td>showClose</td><td>boolean</td><td>true</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u81EA\u5B9A\u4E49</a></td></tr><tr><td>show\bDots</td><td>boolean</td><td>true</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u8868\u793A\u5BFC\u822A\u6307\u5F15\u987A\u5E8F\u7684\u5706\u70B9</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u81EA\u5B9A\u4E49</a></td></tr><tr><td>scrollToTargetSwitch</td><td>boolean</td><td>true</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u81EA\u52A8\u6EDA\u52A8\u9875\u9762\u81F3\u6307\u5F15\u4FE1\u606F\u663E\u793A\u7684\u4F4D\u7F6E dom</td><td></td></tr><tr><td>stepChange</td><td>Function</td><td></td><td>\u53EF\u9009\uFF0C\u5728\u5207\u6362\u6B65\u9AA4\u65F6\u524D\u7F6E\u6267\u884C\uFF0C\u8FD4\u56DE boolean \u503C\u51B3\u5B9A\u662F\u5426\u663E\u793A\u5F53\u524D\u6B65\u9AA4</td><td></td></tr></tbody></table>',3);function nt(e,o,s,p,F,E){const h=G("render-demo-0"),k=G("demo"),f=G("render-demo-1"),C=G("render-demo-2");return z(),U("div",null,[J,b(k,{sourceCode:`<template>
  <d-button variant="common" class="step-1 ml-s" @click="handleClick(0)">Step 1</d-button>
  <d-button variant="common" class="step-2 ml-s" @click="handleClick(1)">Step 2</d-button>
  <d-button variant="common" class="step-3 ml-s" @click="handleClick(2)">Step 3</d-button>
  <d-steps-guide ref="stepRef" :steps="steps" v-model:step-index="stepIndex" :step-change="handleStepChange" @guide-close="handleGuideClose"></d-steps-guide>
</template>
<script>
  import { defineComponent, reactive, ref, onMounted } from 'vue'
  export default defineComponent({
    setup() {
      const baseSteps = [
          { title: '\u57FA\u7840\u7528\u6CD51', content: '\u4E1A\u52A1\u63A8\u51FA\u65B0\u7279\u6027\uFF0C\u6216\u590D\u6742\u7684\u4E1A\u52A1\u903B\u8F91\u9700\u8981\u6307\u5F15\u7528\u6237\u65F6\u4F7F\u7528\u3002', trigger: '.step-1' },
          { title: '\u57FA\u7840\u7528\u6CD52', content: '\u4E1A\u52A1\u63A8\u51FA\u65B0\u7279\u6027\uFF0C\u6216\u590D\u6742\u7684\u4E1A\u52A1\u903B\u8F91\u9700\u8981\u6307\u5F15\u7528\u6237\u65F6\u4F7F\u7528\u3002', trigger: '.step-2' },
          { title: '\u57FA\u7840\u7528\u6CD53', content: '\u4E1A\u52A1\u63A8\u51FA\u65B0\u7279\u6027\uFF0C\u6216\u590D\u6742\u7684\u4E1A\u52A1\u903B\u8F91\u9700\u8981\u6307\u5F15\u7528\u6237\u65F6\u4F7F\u7528\u3002', trigger: '.step-3' }
      ], positionSteps = 
          [{ title: '\u5F39\u51FA\u4F4D\u7F6E top-left',
            content: 'Steps Guide', 
            trigger: '.top-left', 
            position: 'top-left' 
          },{ title: '\u5F39\u51FA\u4F4D\u7F6E top', 
            content: 'Steps Guide', 
            trigger: '.top', 
            position: 'top' 
          },{ title: '\u5F39\u51FA\u4F4D\u7F6E top-right', 
            content: 'Steps Guide',
            trigger: '.top-right', 
            position: 'top-right'
          },
          { title: '\u5F39\u51FA\u4F4D\u7F6E right',
            content: 'Steps Guide', 
            trigger: '.right', 
            position: 'right' 
          },{ title: '\u5F39\u51FA\u4F4D\u7F6E bottom-right', 
            content: 'Steps Guide', 
            trigger: '.bottom-right', 
            position: 'bottom-right' 
          },{ title: '\u5F39\u51FA\u4F4D\u7F6E bottom', 
            content: 'Steps Guide', 
            trigger: '.bottom', 
            position: 'bottom' 
          },{ title: '\u5F39\u51FA\u4F4D\u7F6E bottom-left', 
            content: 'Steps Guide', 
            trigger: '.bottom-left', 
            position: 'bottom-left' 
          },{ title: '\u5F39\u51FA\u4F4D\u7F6E left', 
            content: 'Steps Guide', 
            trigger: '.left', 
            position: 'left' 
          }], 
            customSteps = 
              [{ title: '\u81EA\u5B9A\u4E49\u7528\u6CD5',
                content: '\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6307\u5F15\u4FE1\u606F\u5F39\u51FA\u7684\u4F4D\u7F6E\u548C\u5143\u7D20\u3002',
                trigger: '.custom-1', 
                position: {
                  leftFix: 0,
                  topFix: 0,
                  type: 'top'
                } 
              },{ 
                title: '\u81EA\u5B9A\u4E49\u7528\u6CD5', 
                content: '\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6307\u5F15\u4FE1\u606F\u5F39\u51FA\u7684\u4F4D\u7F6E\u548C\u5143\u7D20\u3002',
                trigger: '.custom-2',
                target: '.nav-links', 
                position: 'bottom'
              }]
      let steps = ref(baseSteps);
      const stepIndex = ref(0), stepRef = ref(null)
      const handleClick = index => {
        steps.value = baseSteps
        stepRef.value.setCurrentIndex(index)
      }
      const handleStepChange = (index, prevIndex) => {
        /* code */ 
        return true
      }
      const handleGuideClose = (index) => {
        const stepsLength = steps.value.length
        if(index === stepsLength - 1 && stepsLength !== 2) {
          steps.value = (stepsLength === 3 ? positionSteps : customSteps);
          stepRef.value.setCurrentIndex(0)
        }
      }
      return {
        stepRef,
        steps,
        stepIndex,
        handleClick,
        handleStepChange,
        handleGuideClose
      }
    }
  })
<\/script>
`},{highlight:D(()=>[K]),default:D(()=>[b(h)]),_:1}),O,Q,b(k,{sourceCode:`<template>
  <div class="flex mb-s justify-center">
    <d-button variant="common" class="top-left ml-s" width="120px" @click="handleClick(0)">Top-left</d-button>
    <d-button variant="common" class="top ml-s" width="120px" @click="handleClick(1)">Top</d-button>
    <d-button variant="common" class="top-right ml-s" width="120px" @click="handleClick(2)">Top-right</d-button>
  </div>
  <div class="flex mb-s justify-around">
    <d-button variant="common" class="left ml-s" width="120px" @click="handleClick(7)">Left</d-button>
    <d-button variant="common" class="right ml-s" width="120px" @click="handleClick(3)">Right</d-button>
  </div>
  <div class="flex mb-s justify-center">
    <d-button variant="common" class="bottom-left ml-s" width="120px" @click="handleClick(6)">Bottom-left</d-button>
    <d-button variant="common" class="bottom ml-s" width="120px" @click="handleClick(5)">Bottom</d-button>
    <d-button variant="common" class="bottom-right ml-s" width="120px" @click="handleClick(4)">Bottom-right</d-button>
  </div>
  <d-steps-guide :steps="steps" v-model:step-index="stepIndex" ref="stepsRef"></d-steps-guide>
</template>
<script>
  import { defineComponent, reactive, ref, onMounted } from 'vue'
  export default defineComponent({
    setup() {
      const steps = reactive([
          { title: '\u5F39\u51FA\u4F4D\u7F6E top-left',
            content: 'Steps Guide', 
            trigger: '.top-left', 
            position: 'top-left' 
          },
          { title: '\u5F39\u51FA\u4F4D\u7F6E top', 
            content: 'Steps Guide', 
            trigger: '.top', 
            position: 'top' 
          },
          { title: '\u5F39\u51FA\u4F4D\u7F6E top-right', 
            content: 'Steps Guide',
            trigger: '.top-right', 
            position: 'top-right'
          },
          { title: '\u5F39\u51FA\u4F4D\u7F6E right',
            content: 'Steps Guide', 
            trigger: '.right', 
            position: 'right' 
          },
          { title: '\u5F39\u51FA\u4F4D\u7F6E bottom-right', 
            content: 'Steps Guide', 
            trigger: '.bottom-right', 
            position: 'bottom-right' 
          },
          { title: '\u5F39\u51FA\u4F4D\u7F6E bottom', 
            content: 'Steps Guide', 
            trigger: '.bottom', 
            position: 'bottom' 
          },
          { title: '\u5F39\u51FA\u4F4D\u7F6E bottom-left', 
            content: 'Steps Guide', 
            trigger: '.bottom-left', 
            position: 'bottom-left' 
          },
          { title: '\u5F39\u51FA\u4F4D\u7F6E left', 
            content: 'Steps Guide', 
            trigger: '.left', 
            position: 'left' 
          }
      ]);

      const stepsRef = ref(null), stepIndex = ref(-1);
      const handleClick = (index) => {
        stepsRef.value.setCurrentIndex(index)
      }
     
      return {
        steps,
        stepIndex,
        handleClick,
        stepsRef
      }
    }
  })
<\/script>
`},{highlight:D(()=>[W]),default:D(()=>[b(f)]),_:1}),X,Y,b(k,{sourceCode:`<template>
  <d-button variant="common" class="ml-s">Custom Position</d-button>
  <d-button variant="common" class="ml-s">Custom Target</d-button>
  <d-steps-guide ref="stepsRef" :steps="customSteps" :showDots="false" :showClose="false"></d-steps-guide>
</template>
<script>
import { defineComponent, reactive, ref, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const customSteps = reactive([
        { title: '\u81EA\u5B9A\u4E49\u7528\u6CD5',
          content: '\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6307\u5F15\u4FE1\u606F\u5F39\u51FA\u7684\u4F4D\u7F6E\u548C\u5143\u7D20\u3002',
          trigger: '.custom-1', 
          position: {
            leftFix: 0,
            topFix: 0,
            type: 'top'
          } },
        { 
          title: '\u81EA\u5B9A\u4E49\u7528\u6CD5', 
          content: '\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6307\u5F15\u4FE1\u606F\u5F39\u51FA\u7684\u4F4D\u7F6E\u548C\u5143\u7D20\u3002',
          trigger: '.custom-2',
          target: '.nav-links', 
          position: 'bottom'
        },
    ]);
    const stepsRef = ref(null)
    onMounted(() => {
      stepsRef.value.closeGuide('custom')
    })
    return {
      customSteps,
      stepsRef
    }
  }
})
<\/script>
`},{highlight:D(()=>[Z]),default:D(()=>[b(C)]),_:1}),tt])}var ot=P(H,[["render",nt]]);export{et as __pageData,ot as default};
