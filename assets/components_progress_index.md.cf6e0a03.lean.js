var $=Object.defineProperty;var A=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var D=(o,s,a)=>s in o?$(o,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[s]=a,f=(o,s)=>{for(var a in s||(s={}))z.call(s,a)&&D(o,a,s[a]);if(A)for(var a of A(s))P.call(s,a)&&D(o,a,s[a]);return o};import{_ as L,V as F,r as B,c as W,a as d,w as m,b as q,d as n,e as t,o as j}from"./app.0ce8509b.js";const S={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:o,createVNode:s,createElementVNode:a,openBlock:p,createElementBlock:u}=F,i={class:"devui-code-box-demo"},l={class:"progress-container"},c={class:"progress-container"};function r(g,E){const x=o("d-progress");return p(),u("div",null,[a("section",i,[a("div",l,[s(x,{percentage:80,percentageText:"80%"})]),a("div",c,[s(x,{percentage:30,percentageText:"30%",barBgColor:"#50D4AB",height:"30px"})])])])}return f({render:r},{})}(),"render-demo-1":function(){const{resolveComponent:o,createVNode:s,createElementVNode:a,createTextVNode:p,withCtx:u,openBlock:i,createElementBlock:l}=F,c={class:"devui-code-box-demo"},r={class:"progress-container"},k={class:"progress-container"},g={class:"progress-container"},E={class:"progress-container"},x={class:"progress-container"},_={class:"progress-container"},v=p("\u51CF 10%"),C=p(),b=p("\u589E 10%");function T(e,R){const h=o("d-progress"),y=o("d-button");return i(),l("div",null,[a("section",c,[a("div",r,[s(h,{"percentage-text-placement":"insideLeft",percentage:e.percentage,percentageText:`${e.percentage}%`},null,8,["percentage","percentageText"])]),a("div",k,[s(h,{percentage:e.percentage,percentageText:`${e.percentage}%`},null,8,["percentage","percentageText"])]),a("div",g,[s(h,{"percentage-text-placement":"insideRight",percentage:e.percentage,percentageText:`${e.percentage}%`},null,8,["percentage","percentageText"])]),a("div",E,[s(h,{"percentage-text-placement":"insideBg",percentage:e.percentage,percentageText:`${e.percentage}%`},null,8,["percentage","percentageText"])]),a("div",x,[s(h,{"percentage-text-placement":"outside",percentage:e.percentage,percentageText:`${e.percentage}%`},null,8,["percentage","percentageText"])]),a("div",_,[s(y,{onClick:e.minus},{default:u(()=>[v]),_:1},8,["onClick"]),C,s(y,{onClick:e.add},{default:u(()=>[b]),_:1},8,["onClick"])])])])}const{defineComponent:w,ref:V}=F,N=w({setup(){const e=V(60);return{percentage:e,add:()=>{e.value+=10,e.value>100&&(e.value=0)},minus:()=>{e.value-=10,e.value<0&&(e.value=100)}}}});return f({render:T},N)}(),"render-demo-2":function(){const{resolveComponent:o,createVNode:s,createElementVNode:a,withCtx:p,openBlock:u,createElementBlock:i}=F,l={class:"devui-code-box-demo"},c={class:"progress-container-circle"},r={class:"progress-container-circle"},k={class:"progress-container-circle"},g={class:"icon-position"};function E(_,v){const C=o("d-progress"),b=o("d-icon");return u(),i("div",null,[a("section",l,[a("div",c,[s(C,{isCircle:!0,percentage:80,showContent:!1})]),a("div",r,[s(C,{isCircle:!0,percentage:80,barBgColor:"#50D4AB",strokeWidth:8})]),a("div",k,[s(C,{isCircle:!0,percentage:80,barBgColor:"#50D4AB"},{default:p(()=>[a("span",g,[s(b,{name:"right",color:"#3dcca6"})])]),_:1})])])])}return f({render:E},{})}(),"render-demo-3":function(){const{resolveComponent:o,createVNode:s,createElementVNode:a,openBlock:p,createElementBlock:u}=F,i={class:"devui-code-box-demo"},l={class:"progress-container-circle"},c={class:"progress-container-circle"},r={class:"progress-container"},k={class:"progress-container"};function g(x,_){const v=o("d-progress");return p(),u("div",null,[a("section",i,[a("div",l,[s(v,{isCircle:!0,percentage:80,barBgColor:"#e056fd",showContent:!1})]),a("div",c,[s(v,{isCircle:!0,percentage:80,barBgColor:"#22a6b3","percentage-text-color":"#22a6b3"})]),a("div",r,[s(v,{percentage:80,barBgColor:"#badc58","percentage-text-color":"#eb4d4b",percentageText:"80%"})]),a("div",k,[s(v,{percentage:80,barBgColor:"orange","percentage-text-placement":"outside","percentage-text-color":"orange",percentageText:"80%"})])])])}return f({render:g},{})}()}},sn='{"title":"Progress \u8FDB\u5EA6\u6761","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u8BBE\u7F6E\u6587\u5B57\u4F4D\u7F6E","slug":"\u8BBE\u7F6E\u6587\u5B57\u4F4D\u7F6E"},{"level":3,"title":"\u5706\u73AF\u7528\u6CD5","slug":"\u5706\u73AF\u7528\u6CD5"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u989C\u8272","slug":"\u81EA\u5B9A\u4E49\u989C\u8272"},{"level":3,"title":"Progress \u53C2\u6570","slug":"progress-\u53C2\u6570"}],"relativePath":"components/progress/index.md","lastUpdated":1650879611450}',U=q('<h1 id="progress-\u8FDB\u5EA6\u6761" tabindex="-1">Progress \u8FDB\u5EA6\u6761 <a class="header-anchor" href="#progress-\u8FDB\u5EA6\u6761" aria-hidden="true">#</a></h1><p>\u8FDB\u5EA6\u6761\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><ol><li>\u5F53\u64CD\u4F5C\u9700\u8981\u8F83\u957F\u7684\u65F6\u95F4\u65F6\uFF0C\u5411\u7528\u6237\u5C55\u793A\u64CD\u4F5C\u8FDB\u5EA6\u3002</li><li>\u5F53\u64CD\u4F5C\u9700\u8981\u6253\u65AD\u73B0\u6709\u754C\u9762\u6216\u540E\u53F0\u8FD0\u884C\uFF0C\u9700\u8981\u8F83\u957F\u65F6\u95F4\u65F6\u3002</li><li>\u5F53\u9700\u8981\u663E\u793A\u4E00\u4E2A\u64CD\u4F5C\u5B8C\u6210\u7684\u767E\u5206\u6BD4\u6216\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4/\u603B\u6B65\u9AA4\u65F6\u3002</li></ol><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u57FA\u672C\u7684\u8FDB\u5EA6\u548C\u6587\u5B57\u914D\u7F6E\u3002</p>',6),G=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("section")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-code-box-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress-container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-progress")]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("80"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"percentageText"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("80%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress-container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-progress")]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"percentageText"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("30%"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"barBgColor"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#50D4AB"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("30px"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("section")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".progress-container"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".devui-code-box-demo"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"border-bottom"),n("span",{class:"token punctuation"},":"),t(" 1px dashed #dfe1e6"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 16px 0"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token selector"},".progress-container"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),H=n("h3",{id:"\u8BBE\u7F6E\u6587\u5B57\u4F4D\u7F6E",tabindex:"-1"},[t("\u8BBE\u7F6E\u6587\u5B57\u4F4D\u7F6E "),n("a",{class:"header-anchor",href:"#\u8BBE\u7F6E\u6587\u5B57\u4F4D\u7F6E","aria-hidden":"true"},"#")],-1),I=n("p",null,"\u63D0\u4F9B\u4E865\u79CD\u4F4D\u7F6E\u9009\u62E9",-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("section")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-code-box-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress-container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-progress")]),t(),n("span",{class:"token attr-name"},"percentage-text-placement"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("insideLeft"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("percentage"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":percentageText"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("`${percentage}%`"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress-container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-progress")]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("percentage"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":percentageText"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("`${percentage}%`"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress-container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-progress")]),t(),n("span",{class:"token attr-name"},"percentage-text-placement"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("insideRight"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("percentage"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":percentageText"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("`${percentage}%`"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress-container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-progress")]),t(),n("span",{class:"token attr-name"},"percentage-text-placement"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("insideBg"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("percentage"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":percentageText"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("`${percentage}%`"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress-container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-progress")]),t(),n("span",{class:"token attr-name"},"percentage-text-placement"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("outside"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("percentage"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":percentageText"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("`${percentage}%`"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress-container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("minus"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u51CF 10%"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("add"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u589E 10%"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("section")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" percentageRef "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"add"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      percentageRef`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"+="),t(),n("span",{class:"token number"},"10"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("percentageRef"),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        percentageRef`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"minus"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      percentageRef`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"-="),t(),n("span",{class:"token number"},"10"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("percentageRef"),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        percentageRef`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"100"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"percentage"),n("span",{class:"token operator"},":"),t(" percentageRef"),n("span",{class:"token punctuation"},","),t(`
      add`),n("span",{class:"token punctuation"},","),t(`
      minus
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".progress-container"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".devui-code-box-demo"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"border-bottom"),n("span",{class:"token punctuation"},":"),t(" 1px dashed #dfe1e6"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 16px 0"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token selector"},".progress-container"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),K=n("h3",{id:"\u5706\u73AF\u7528\u6CD5",tabindex:"-1"},[t("\u5706\u73AF\u7528\u6CD5 "),n("a",{class:"header-anchor",href:"#\u5706\u73AF\u7528\u6CD5","aria-hidden":"true"},"#")],-1),M=n("p",null,"\u57FA\u672C\u7684\u8FDB\u5EA6\u548C\u6587\u5B57\u914D\u7F6E\u3002",-1),O=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("section")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-code-box-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress-container-circle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-progress")]),t(),n("span",{class:"token attr-name"},":isCircle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("80"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":showContent"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress-container-circle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-progress")]),t(),n("span",{class:"token attr-name"},":isCircle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("80"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"barBgColor"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#50D4AB"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":strokeWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("8"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress-container-circle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-progress")]),t(),n("span",{class:"token attr-name"},":isCircle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("80"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"barBgColor"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#50D4AB"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("icon-position"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("right"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#3dcca6"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("section")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".progress-container-circle"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 130px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 130px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" inline-block"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".icon-position"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" absolute"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),t(" 50%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),t(" 50%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 0"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 0"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),t(" 1"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"white-space"),n("span",{class:"token punctuation"},":"),t(" normal"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"translate"),n("span",{class:"token punctuation"},"("),t("-50%"),n("span",{class:"token punctuation"},","),t(" -50%"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #50d4ab"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 24px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Q=n("h3",{id:"\u81EA\u5B9A\u4E49\u989C\u8272",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u989C\u8272 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u989C\u8272","aria-hidden":"true"},"#")],-1),X=n("p",null,"\u5982\u679C\u4F60\u89C9\u5F97\u5185\u7F6E\u7684\u989C\u8272\u4E0D\u884C\u3002",-1),Y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("section")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-code-box-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress-container-circle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-progress")]),t(),n("span",{class:"token attr-name"},":isCircle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("80"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"barBgColor"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#e056fd"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":showContent"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress-container-circle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-progress")]),t(),n("span",{class:"token attr-name"},":isCircle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("80"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"barBgColor"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#22a6b3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"percentage-text-color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#22a6b3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress-container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-progress")]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("80"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"barBgColor"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#badc58"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"percentage-text-color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#eb4d4b"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"percentageText"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("80%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress-container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-progress")]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("80"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"barBgColor"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("orange"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"percentage-text-placement"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("outside"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"percentage-text-color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("orange"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"percentageText"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("80%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-progress")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("section")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".progress-container-circle"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 130px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 130px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" inline-block"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".progress-container"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".devui-code-box-demo"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"border-bottom"),n("span",{class:"token punctuation"},":"),t(" 1px dashed #dfe1e6"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 16px 0"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token selector"},".progress-container"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Z=q('<h3 id="progress-\u53C2\u6570" tabindex="-1">Progress \u53C2\u6570 <a class="header-anchor" href="#progress-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u63CF\u8FF0</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">percentage</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">0</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8FDB\u5EA6\u6761\u7684\u503C\u6700\u5927\u4E3A 100</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">percentage-text</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8FDB\u5EA6\u6761\u5F53\u524D\u503C\u7684\u6587\u5B57\u8BF4\u660E\u6BD4\u5982\uFF1A&#39;30%&#39; | &#39;4/5&#39;</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">20px</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8FDB\u5EA6\u6761\u7684\u9AD8\u5EA6\u503C\uFF0C\u9ED8\u8BA4\u503C\u4E3A 20px</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">percentage-text-placement</td><td style="text-align:left;"><code>&#39;insideLeft&#39;|&#39;inside&#39;|</code><br> <code>&#39;insideRight&#39;|&#39;outside&#39;|</code><br><code>&#39;insideBg&#39;</code></td><td style="text-align:left;">inside</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u7684\u6587\u5B57\u8BF4\u660E\u4F4D\u7F6E</td><td style="text-align:left;"><a href="#%E8%AE%BE%E7%BD%AE%E6%96%87%E5%AD%97%E4%BD%8D%E7%BD%AE">\u8BBE\u7F6E\u6587\u5B57\u4F4D\u7F6E</a></td></tr><tr><td style="text-align:left;">is-circle</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C \u663E\u793A\u8FDB\u5EA6\u6761\u662F\u5426\u4E3A\u5708\u5F62</td><td style="text-align:left;"><a href="#%E5%9C%86%E7%8E%AF%E7%94%A8%E6%B3%95">\u5706\u73AF\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">stroke-width</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">6</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u5708\u5F62\u8FDB\u5EA6\u6761\u5BBD\u5EA6\uFF0C\u5355\u4F4D\u662F\u8FDB\u5EA6\u6761\u4E0E\u753B\u5E03\u5BBD\u5EA6\u7684\u767E\u5206\u6BD4</td><td style="text-align:left;"><a href="#%E5%9C%86%E7%8E%AF%E7%94%A8%E6%B3%95">\u5706\u73AF\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">show-content</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u5708\u5F62\u8FDB\u5EA6\u6761\u5185\u662F\u5426\u5C55\u793A\u5185\u5BB9</td><td style="text-align:left;"><a href="#%E5%9C%86%E7%8E%AF%E7%94%A8%E6%B3%95">\u5706\u73AF\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">bar-bg-color</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">#5170ff</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8FDB\u5EA6\u6761\u7684\u989C\u8272\u663E\u793A\uFF0C\u9ED8\u8BA4\u4E3A\u5929\u84DD\u8272</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2">\u81EA\u5B9A\u4E49\u989C\u8272</a></td></tr><tr><td style="text-align:left;">percentage-text-color</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u7684\u6587\u5B57\u8BF4\u660E\u989C\u8272</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2">\u81EA\u5B9A\u4E49\u989C\u8272</a></td></tr></tbody></table>',2);function nn(o,s,a,p,u,i){const l=B("render-demo-0"),c=B("demo"),r=B("render-demo-1"),k=B("render-demo-2"),g=B("render-demo-3");return j(),W("div",null,[U,d(c,{sourceCode:`<template>
  <section class="devui-code-box-demo">
    <div class="progress-container">
      <d-progress :percentage="80" percentageText="80%"></d-progress>
    </div>
    <div class="progress-container">
      <d-progress :percentage="30" percentageText="30%" barBgColor="#50D4AB" height="30px"></d-progress>
    </div>
  </section>
</template>
<style>
.progress-container {
  margin-bottom: 20px;
}
.devui-code-box-demo {
  border-bottom: 1px dashed #dfe1e6;
  padding: 16px 0;
  .progress-container {
    margin-bottom: 20px;
  }
}
</style>
`},{highlight:m(()=>[G]),default:m(()=>[d(l)]),_:1}),H,I,d(c,{sourceCode:`<template>
  <section class="devui-code-box-demo">
    <div class="progress-container">
      <d-progress percentage-text-placement="insideLeft" :percentage="percentage" :percentageText="\`\${percentage}%\`"></d-progress>
    </div>
    <div class="progress-container">
      <d-progress :percentage="percentage" :percentageText="\`\${percentage}%\`"></d-progress>
    </div>
    <div class="progress-container">
      <d-progress percentage-text-placement="insideRight" :percentage="percentage" :percentageText="\`\${percentage}%\`"></d-progress>
    </div>
    <div class="progress-container">
      <d-progress percentage-text-placement="insideBg" :percentage="percentage" :percentageText="\`\${percentage}%\`"></d-progress>
    </div>
    <div class="progress-container">
      <d-progress percentage-text-placement="outside" :percentage="percentage" :percentageText="\`\${percentage}%\`"></d-progress>
    </div>
    <div class="progress-container">
      <d-button @click="minus">\u51CF 10%</d-button> <d-button @click="add">\u589E 10%</d-button>
    </div>
  </section>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const percentageRef = ref(60)

    const add = () => {
      percentageRef.value += 10
      if (percentageRef.value > 100) {
        percentageRef.value = 0
      }
    }

    const minus = () => {
      percentageRef.value -= 10
      if (percentageRef.value < 0) {
        percentageRef.value = 100
      }
    }

    return {
      percentage: percentageRef,
      add,
      minus
    }
  }
})
<\/script>
<style>
.progress-container {
  margin-bottom: 20px;
}
.devui-code-box-demo {
  border-bottom: 1px dashed #dfe1e6;
  padding: 16px 0;
  .progress-container {
    margin-bottom: 20px;
  }
}
</style>
`},{highlight:m(()=>[J]),default:m(()=>[d(r)]),_:1}),K,M,d(c,{sourceCode:`<template>
  <section class="devui-code-box-demo">
    <div class="progress-container-circle">
      <d-progress :isCircle="true" :percentage="80" :showContent="false"> </d-progress>
    </div>
    <div class="progress-container-circle">
      <d-progress :isCircle="true" :percentage="80" barBgColor="#50D4AB" :strokeWidth="8"> </d-progress>
    </div>
    <div class="progress-container-circle">
      <d-progress :isCircle="true" :percentage="80" barBgColor="#50D4AB">
        <span class="icon-position">
          <d-icon name="right" color="#3dcca6" />
        </span>
      </d-progress>
    </div>
  </section>
</template>
<style>
.progress-container-circle {
  height: 130px;
  width: 130px;
  font-size: 20px;
  display: inline-block;
  margin-right: 10px;
}
.icon-position {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: 1;
  white-space: normal;
  text-align: center;
  transform: translate(-50%, -50%);
  color: #50d4ab;
  font-size: 24px;
}
</style>
`},{highlight:m(()=>[O]),default:m(()=>[d(k)]),_:1}),Q,X,d(c,{sourceCode:`<template>
  <section class="devui-code-box-demo">
  <div class="progress-container-circle">
      <d-progress :isCircle="true" :percentage="80" barBgColor="#e056fd" :showContent="false"> </d-progress>
    </div>
    <div class="progress-container-circle">
      <d-progress :isCircle="true" :percentage="80" barBgColor="#22a6b3" percentage-text-color="#22a6b3"> </d-progress>
    </div>
    <div class="progress-container">
      <d-progress :percentage="80" barBgColor="#badc58" percentage-text-color="#eb4d4b" percentageText="80%"></d-progress>
    </div>
    <div class="progress-container">
      <d-progress :percentage="80" barBgColor="orange" percentage-text-placement="outside" percentage-text-color="orange" percentageText="80%"></d-progress>
    </div>
  </section>
</template>
<style>
.progress-container-circle {
  height: 130px;
  width: 130px;
  font-size: 20px;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 20px;
}
.progress-container {
  margin-bottom: 20px;
}
.devui-code-box-demo {
  border-bottom: 1px dashed #dfe1e6;
  padding: 16px 0;
  .progress-container {
    margin-bottom: 20px;
  }
}
</style>
`},{highlight:m(()=>[Y]),default:m(()=>[d(g)]),_:1}),Z])}var en=L(S,[["render",nn]]);export{sn as __pageData,en as default};
