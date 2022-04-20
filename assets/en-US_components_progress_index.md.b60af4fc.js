var q=Object.defineProperty;var y=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var b=(e,a,s)=>a in e?q(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,h=(e,a)=>{for(var s in a||(a={}))w.call(a,s)&&b(e,s,a[s]);if(y)for(var s of y(a))T.call(a,s)&&b(e,s,a[s]);return e};import{_ as U,r as m,c as V,a as u,w as k,b as C,d as n,e as t,o as D,V as f}from"./app.0c19a03b.js";const E={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:a,createElementVNode:s,openBlock:l,createElementBlock:r}=f,i={class:"devui-code-box-demo"},c={class:"progress-container"},o={class:"progress-container"};function p(v,_){const d=e("d-progress");return l(),r("div",null,[s("section",i,[s("div",c,[a(d,{percentage:80,percentageText:"80%"})]),s("div",o,[a(d,{percentage:30,percentageText:"30%",barBgColor:"#50D4AB",height:"30px"})])])])}return h({render:p},{})}(),"render-demo-1":function(){const{resolveComponent:e,createVNode:a,createElementVNode:s,withCtx:l,openBlock:r,createElementBlock:i}=f,c={class:"devui-code-box-demo"},o={class:"progress-container-circle"},p={class:"progress-container-circle"},x={class:"progress-container-circle"},v={class:"icon-position"};function _($,I){const g=e("d-progress"),B=e("d-icon");return r(),i("div",null,[s("section",c,[s("div",o,[a(g,{isCircle:!0,percentage:80,showContent:!1})]),s("div",p,[a(g,{isCircle:!0,percentage:80,barBgColor:"#50D4AB",strokeWidth:8})]),s("div",x,[a(g,{isCircle:!0,percentage:80,barBgColor:"#50D4AB"},{default:l(()=>[s("span",v,[a(B,{name:"right",color:"#3dcca6"})])]),_:1})])])])}return h({render:_},{})}()}},F='{"title":"Progress","description":"","frontmatter":{},"headers":[{"level":3,"title":"When To Use","slug":"when-to-use"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Circle Usage","slug":"circle-usage"},{"level":3,"title":"API","slug":"api"}],"relativePath":"en-US/components/progress/index.md","lastUpdated":1650439126631}',N=C('<h1 id="progress" tabindex="-1">Progress <a class="header-anchor" href="#progress" aria-hidden="true">#</a></h1><p>Progress bar.</p><h3 id="when-to-use" tabindex="-1">When To Use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><ol><li>When the operation takes a long time.</li><li>When an operation takes a long time to interrupt the current interface or background operation.</li><li>To display the percentage of completed operations or the number of completed steps/total steps.</li></ol><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3><p>Basic progress and text configuration.</p>',6),A=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),W=n("h3",{id:"circle-usage",tabindex:"-1"},[t("Circle Usage "),n("a",{class:"header-anchor",href:"#circle-usage","aria-hidden":"true"},"#")],-1),O=n("p",null,"Basic progress and text configuration.",-1),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),z=C('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><h4 id="d-progress-parameter" tabindex="-1">d-progress parameter <a class="header-anchor" href="#d-progress-parameter" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:center;">Description</th><th style="text-align:center;">Jump to Demo</th></tr></thead><tbody><tr><td style="text-align:center;">percentage</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">0</td><td style="text-align:center;">Optional. The maximum value of the progress bar is 100.</td><td style="text-align:center;"><a href="#basic-usage">Basic Usage</a></td></tr><tr><td style="text-align:center;">percentageText</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:center;">Optional. Text description of the current value of the progress bar, for example, &#39;30%&#39;|&#39;4/5&#39;</td><td style="text-align:center;"><a href="#basic-usage">Basic Usage</a></td></tr><tr><td style="text-align:center;">barBgColor</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">#5170ff</td><td style="text-align:center;">Optional. Color of the progress bar. The default value is sky blue.</td><td style="text-align:center;"><a href="#basic-usage">Basic Usage</a></td></tr><tr><td style="text-align:center;">height</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">20px</td><td style="text-align:center;">Optional. The default value is 20px.</td><td style="text-align:center;"><a href="#basic-usage">Basic Usage</a></td></tr><tr><td style="text-align:center;">isCircle</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Optional. Whether the progress bar is displayed in a circle.</td><td style="text-align:center;"><a href="#circle-usage">Circle Usage</a></td></tr><tr><td style="text-align:center;">strokeWidth</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">6</td><td style="text-align:center;">Optional. Sets the width of the progress bar. The unit is the percentage of the progress bar to the width of the canvas.</td><td style="text-align:center;"><a href="#circle-usage">Circle Usage</a></td></tr><tr><td style="text-align:center;">showContent</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">Optional. Sets whether to display content in the circle progress bar.</td><td style="text-align:center;"><a href="#circle-usage">Circle Usage</a></td></tr></tbody></table>',3);function S(e,a,s,l,r,i){const c=m("render-demo-0"),o=m("demo"),p=m("render-demo-1");return D(),V("div",null,[N,u(o,{sourceCode:`<template>
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
`},{highlight:k(()=>[A]),default:k(()=>[u(c)]),_:1}),W,O,u(o,{sourceCode:`<template>
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
`},{highlight:k(()=>[P]),default:k(()=>[u(p)]),_:1}),z])}var G=U(E,[["render",S]]);export{F as __pageData,G as default};
