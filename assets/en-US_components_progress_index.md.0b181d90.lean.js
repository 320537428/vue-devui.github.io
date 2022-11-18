var A=Object.defineProperty;var w=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var E=(o,s,a)=>s in o?A(o,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[s]=a,f=(o,s)=>{for(var a in s||(s={}))P.call(s,a)&&E(o,a,s[a]);if(w)for(var a of w(s))O.call(s,a)&&E(o,a,s[a]);return o};import{_ as S,V as y,r as C,o as W,c as z,a as d,w as m,b as V,d as n,e as t}from"./app.d86bec19.js";const L={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:o,createVNode:s,createElementVNode:a,openBlock:p,createElementBlock:l}=y,i={class:"devui-code-box-demo"},u={class:"progress-container"},c={class:"progress-container"};function r(g,_){const h=o("d-progress");return p(),l("div",null,[a("section",i,[a("div",u,[s(h,{percentage:80,percentageText:"80%"})]),a("div",c,[s(h,{percentage:30,percentageText:"30%",barBgColor:"#50D4AB",height:"30px"})])])])}return f({render:r},{})}(),"render-demo-1":function(){const{resolveComponent:o,createVNode:s,createElementVNode:a,createTextVNode:p,withCtx:l,openBlock:i,createElementBlock:u}=y,c={class:"devui-code-box-demo"},r={class:"progress-container"},k={class:"progress-container"},g={class:"progress-container"},_={class:"progress-container"},h={class:"progress-container"},q={class:"progress-container"},v=p("minus 10%"),b=p(),B=p("add 10%");function N(e,D){const x=o("d-progress"),T=o("d-button");return i(),u("div",null,[a("section",c,[a("div",r,[s(x,{"percentage-text-placement":"insideLeft",percentage:e.percentage,percentageText:`${e.percentage}%`},null,8,["percentage","percentageText"])]),a("div",k,[s(x,{percentage:e.percentage,percentageText:`${e.percentage}%`},null,8,["percentage","percentageText"])]),a("div",g,[s(x,{"percentage-text-placement":"insideRight",percentage:e.percentage,percentageText:`${e.percentage}%`},null,8,["percentage","percentageText"])]),a("div",_,[s(x,{"percentage-text-placement":"insideBg",percentage:e.percentage,percentageText:`${e.percentage}%`},null,8,["percentage","percentageText"])]),a("div",h,[s(x,{"percentage-text-placement":"outside",percentage:e.percentage,percentageText:`${e.percentage}%`},null,8,["percentage","percentageText"])]),a("div",q,[s(T,{onClick:e.minus},{default:l(()=>[v]),_:1},8,["onClick"]),b,s(T,{onClick:e.add},{default:l(()=>[B]),_:1},8,["onClick"])])])])}const{defineComponent:R,ref:$}=y,U=R({setup(){const e=$(60);return{percentage:e,add:()=>{e.value+=10,e.value>100&&(e.value=0)},minus:()=>{e.value-=10,e.value<0&&(e.value=100)}}}});return f({render:N},U)}(),"render-demo-2":function(){const{resolveComponent:o,createVNode:s,createElementVNode:a,withCtx:p,openBlock:l,createElementBlock:i}=y,u={class:"devui-code-box-demo"},c={class:"progress-container-circle"},r={class:"progress-container-circle"},k={class:"progress-container-circle"},g={class:"icon-position"};function _(q,v){const b=o("d-progress"),B=o("d-icon");return l(),i("div",null,[a("section",u,[a("div",c,[s(b,{isCircle:!0,percentage:80,showContent:!1})]),a("div",r,[s(b,{isCircle:!0,percentage:80,barBgColor:"#50D4AB",strokeWidth:8})]),a("div",k,[s(b,{isCircle:!0,percentage:80,barBgColor:"#50D4AB"},{default:p(()=>[a("span",g,[s(B,{name:"right",color:"#3dcca6"})])]),_:1})])])])}return f({render:_},{})}(),"render-demo-3":function(){const{resolveComponent:o,createVNode:s,createElementVNode:a,openBlock:p,createElementBlock:l}=y,i={class:"devui-code-box-demo"},u={class:"progress-container-circle"},c={class:"progress-container-circle"},r={class:"progress-container"},k={class:"progress-container"};function g(h,q){const v=o("d-progress");return p(),l("div",null,[a("section",i,[a("div",u,[s(v,{isCircle:!0,percentage:80,barBgColor:"#e056fd",showContent:!1})]),a("div",c,[s(v,{isCircle:!0,percentage:80,barBgColor:"#22a6b3","percentage-text-color":"#22a6b3"})]),a("div",r,[s(v,{percentage:80,barBgColor:"#badc58","percentage-text-color":"#eb4d4b",percentageText:"80%"})]),a("div",k,[s(v,{percentage:80,barBgColor:"orange","percentage-text-placement":"outside","percentage-text-color":"orange",percentageText:"80%"})])])])}return f({render:g},{})}()}},sn='{"title":"Progress","description":"","frontmatter":{},"headers":[{"level":3,"title":"When To Use","slug":"when-to-use"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Set Text Position","slug":"set-text-position"},{"level":3,"title":"Circle Usage","slug":"circle-usage"},{"level":3,"title":"Custom Color","slug":"custom-color"},{"level":3,"title":"API","slug":"api"}],"relativePath":"en-US/components/progress/index.md","lastUpdated":1662171945355}',I=V('<h1 id="progress" tabindex="-1">Progress <a class="header-anchor" href="#progress" aria-hidden="true">#</a></h1><p>Progress bar.</p><h3 id="when-to-use" tabindex="-1">When To Use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><ol><li>When the operation takes a long time.</li><li>When an operation takes a long time to interrupt the current interface or background operation.</li><li>To display the percentage of completed operations or the number of completed steps/total steps.</li></ol><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3><p>Basic progress and text configuration.</p>',6),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`),n("span",{class:"token selector"},".devui-code-box-demo"),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"border-bottom"),n("span",{class:"token punctuation"},":"),t(" 1px dashed #dfe1e6"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 16px 0"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token selector"},".progress-container"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),F=n("h3",{id:"set-text-position",tabindex:"-1"},[t("Set Text Position "),n("a",{class:"header-anchor",href:"#set-text-position","aria-hidden":"true"},"#")],-1),J=n("p",null,"Five location options are provided",-1),G=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("minus"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("minus 10%"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("add"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("add 10%"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),H=n("h3",{id:"circle-usage",tabindex:"-1"},[t("Circle Usage "),n("a",{class:"header-anchor",href:"#circle-usage","aria-hidden":"true"},"#")],-1),K=n("p",null,"Basic progress and text configuration.",-1),M=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("section")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-code-box-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress-container-circle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-progress")]),t(),n("span",{class:"token attr-name"},":isCircle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("80"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":showContent"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-progress")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress-container-circle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-progress")]),t(),n("span",{class:"token attr-name"},":isCircle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("80"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"barBgColor"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#50D4AB"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":strokeWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("8"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-progress")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress-container-circle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-progress")]),t(),n("span",{class:"token attr-name"},":isCircle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":percentage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("80"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"barBgColor"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#50D4AB"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("icon-position"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(`
                        `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("right"),n("span",{class:"token punctuation"},'"')]),t(`
                        `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#3dcca6"),n("span",{class:"token punctuation"},'"')]),t(`
                    `),n("span",{class:"token punctuation"},"/>")]),t(`
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
`)])])],-1),Q=n("h3",{id:"custom-color",tabindex:"-1"},[t("Custom Color "),n("a",{class:"header-anchor",href:"#custom-color","aria-hidden":"true"},"#")],-1),X=n("p",null,"If you think the built-in colors don't work.",-1),Y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),Z=V('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><h4 id="d-progress-parameter" tabindex="-1">d-progress parameter <a class="header-anchor" href="#d-progress-parameter" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:center;">Description</th><th style="text-align:center;">Jump to Demo</th></tr></thead><tbody><tr><td style="text-align:center;">percentage</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">0</td><td style="text-align:center;">Optional. The maximum value of the progress bar is 100.</td><td style="text-align:center;"><a href="#basic-usage">Basic Usage</a></td></tr><tr><td style="text-align:center;">percentageText</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:center;">Optional. Text description of the current value of the progress bar, for example, &#39;30%&#39;|&#39;4/5&#39;</td><td style="text-align:center;"><a href="#basic-usage">Basic Usage</a></td></tr><tr><td style="text-align:center;">height</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">20px</td><td style="text-align:center;">Optional. The default value is 20px.</td><td style="text-align:center;"><a href="#basic-usage">Basic Usage</a></td></tr><tr><td style="text-align:center;">percentageTextPlacement</td><td style="text-align:center;"><code>&#39;insideLeft&#39;|&#39;inside&#39;|</code><br> <code>&#39;insideRight&#39;|&#39;outside&#39;|</code><br><code>&#39;insideBg&#39;</code></td><td style="text-align:center;">inside</td><td style="text-align:center;">Optional. Set the text description position of the progress bar</td><td style="text-align:center;"><a href="#set-text-position">Set Text Position</a></td></tr><tr><td style="text-align:center;">isCircle</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Optional. Whether the progress bar is displayed in a circle.</td><td style="text-align:center;"><a href="#circle-usage">Circle Usage</a></td></tr><tr><td style="text-align:center;">strokeWidth</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">6</td><td style="text-align:center;">Optional. Sets the width of the progress bar. The unit is the percentage of the progress bar to the width of the canvas.</td><td style="text-align:center;"><a href="#circle-usage">Circle Usage</a></td></tr><tr><td style="text-align:center;">showContent</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">Optional. Sets whether to display content in the circle progress bar.</td><td style="text-align:center;"><a href="#circle-usage">Circle Usage</a></td></tr><tr><td style="text-align:center;">barBgColor</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">#5170ff</td><td style="text-align:center;">Optional. Color of the progress bar. The default value is sky blue.</td><td style="text-align:center;"><a href="#basic-usage">Basic Usage</a></td></tr><tr><td style="text-align:center;">percentage-text-color</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;&#39;</td><td style="text-align:center;">Optional. Set the text description color of the progress bar</td><td style="text-align:center;"><a href="#custom-color">Custom Color</a></td></tr></tbody></table>',3);function nn(o,s,a,p,l,i){const u=C("render-demo-0"),c=C("demo"),r=C("render-demo-1"),k=C("render-demo-2"),g=C("render-demo-3");return W(),z("div",null,[I,d(c,{sourceCode:`<template>
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
.devui-code-box-demo{
    border-bottom: 1px dashed #dfe1e6;
    padding: 16px 0;
    .progress-container {
        margin-bottom: 20px;
    }
}
</style>
`},{highlight:m(()=>[j]),default:m(()=>[d(u)]),_:1}),F,J,d(c,{sourceCode:`<template>
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
      <d-button @click="minus">minus 10%</d-button> <d-button @click="add">add 10%</d-button>
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
`},{highlight:m(()=>[G]),default:m(()=>[d(r)]),_:1}),H,K,d(c,{sourceCode:`<template>
    <section class="devui-code-box-demo">
        <div class="progress-container-circle">
            <d-progress :isCircle="true" :percentage="80" :showContent="false"> </d-progress>
        </div>
        <div class="progress-container-circle">
            <d-progress :isCircle="true" :percentage="80" barBgColor="#50D4AB" :strokeWidth="8">
            </d-progress>
        </div>
        <div class="progress-container-circle">
            <d-progress :isCircle="true" :percentage="80" barBgColor="#50D4AB">
                <span class="icon-position">
                    <d-icon
                        name="right"
                        color="#3dcca6"
                    />
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
`},{highlight:m(()=>[M]),default:m(()=>[d(k)]),_:1}),Q,X,d(c,{sourceCode:`<template>
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
`},{highlight:m(()=>[Y]),default:m(()=>[d(g)]),_:1}),Z])}var en=S(L,[["render",nn]]);export{sn as __pageData,en as default};
