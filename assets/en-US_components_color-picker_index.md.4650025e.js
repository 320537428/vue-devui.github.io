import{V as g}from"./framework.3495a366.js";import{_ as C,f as _,G as S,H as B,b as k,a1 as d,a3 as b,I as n,k as t}from"./plugin-vue_export-helper.ebedbb15.js";import"./framework.d333a127.js";const V={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:r,createVNode:u,openBlock:c,createElementBlock:i}=g;function l(f,a){const p=r("d-color-picker");return c(),i("div",null,[u(p)])}return{render:l,...{}}}(),"render-demo-1":function(){const{toDisplayString:r,createTextVNode:u,resolveComponent:c,withCtx:i,createVNode:l,openBlock:h,createElementBlock:f}=g;function a(s,w){const y=c("d-button"),v=c("d-color-picker");return h(),f("div",null,[l(y,{btnStyle:"common",onClick:s.isShowAlpha},{default:i(()=>[u("test showAlpha Be "+r(s.show),1)]),_:1},8,["onClick"]),l(v,{modelValue:s.color,"onUpdate:modelValue":w[0]||(w[0]=x=>s.color=x),"show-alpha":s.show},null,8,["modelValue","show-alpha"])])}const{defineComponent:p,watch:e,ref:o}=g,m=p({setup(){const s=o(!0);return{color:o("rgba(83, 199, 212, 0.72)"),isShowAlpha:()=>{s.value=!s.value},show:s}}});return{render:a,...m}}(),"render-demo-2":function(){const{resolveComponent:r,createVNode:u,openBlock:c,createElementBlock:i}=g;function l(e,o){const m=r("d-color-picker");return c(),i("div",null,[u(m,{modelValue:e.color,"onUpdate:modelValue":o[0]||(o[0]=s=>e.color=s),mode:"hex"},null,8,["modelValue"])])}const{defineComponent:h,watch:f,ref:a}=g,p=h({setup(){return{color:a("#FF6827A1")}}});return{render:l,...p}}(),"render-demo-3":function(){const{toDisplayString:r,createTextVNode:u,resolveComponent:c,withCtx:i,createVNode:l,openBlock:h,createElementBlock:f}=g;function a(s,w){const y=c("d-button"),v=c("d-color-picker");return h(),f("div",null,[l(y,{btnStyle:"common",onClick:s.isShowAlpha},{default:i(()=>[u("test showAlpha Be "+r(s.show),1)]),_:1},8,["onClick"]),l(v,{"show-history":s.show,modelValue:s.color,"onUpdate:modelValue":w[0]||(w[0]=x=>s.color=x),mode:"hsl"},null,8,["show-history","modelValue"])])}const{defineComponent:p,watch:e,ref:o}=g,m=p({setup(){let s=o(!0);const w=()=>{s.value=!s.value};return{color:o("hsla(353, 1, 0.58, 1)"),isShowAlpha:w,show:s}}});return{render:a,...m}}(),"render-demo-4":function(){const{resolveComponent:r,createVNode:u,openBlock:c,createElementBlock:i}=g;function l(e,o){const m=r("d-color-picker");return c(),i("div",null,[u(m,{swatches:e.colors,modelValue:e.color,"onUpdate:modelValue":o[0]||(o[0]=s=>e.color=s)},null,8,["swatches","modelValue"])])}const{defineComponent:h,watch:f,ref:a}=g,p=h({setup(){const e=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50"];return{color:a("rgba(155, 39, 176, 1)"),colors:e}}});return{render:l,...p}}()}},M='{"title":"ColorPicker","description":"","frontmatter":{},"headers":[{"level":3,"title":"When to use","slug":"when-to-use"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Color transparency","slug":"color-transparency"},{"level":3,"title":"Color mode","slug":"color-mode"},{"level":3,"title":"Historical color","slug":"historical-color"},{"level":3,"title":"Foundation panel customization","slug":"foundation-panel-customization"},{"level":3,"title":"d-color-picker","slug":"d-color-picker"}],"relativePath":"en-US/components/color-picker/index.md","lastUpdated":1650439126631}',A=b('<h1 id="colorpicker" tabindex="-1">ColorPicker <a class="header-anchor" href="#colorpicker" aria-hidden="true">#</a></h1><h3 id="when-to-use" tabindex="-1">When to use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>Allows users to use various interactive methods to select colors</p><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3>',4),N=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-color-picker")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-color-picker")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),E=n("h3",{id:"color-transparency",tabindex:"-1"},[t("Color transparency "),n("a",{class:"header-anchor",href:"#color-transparency","aria-hidden":"true"},"#")],-1),q=n("p",null,"Allows users to dynamically adjust the display alpha mode, which is true by default",-1),F=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"btnStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("common"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isShowAlpha"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("test showAlpha Be {{ show }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-color-picker")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("color"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":show-alpha"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("show"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-color-picker")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" watch"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" show "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" color "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'rgba(83, 199, 212, 0.72)'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"isShowAlpha"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      show`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),t("show"),n("span",{class:"token punctuation"},"."),t(`value
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      color`),n("span",{class:"token punctuation"},","),t(`
      isShowAlpha`),n("span",{class:"token punctuation"},","),t(`
      show
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),z=n("h3",{id:"color-mode",tabindex:"-1"},[t("Color mode "),n("a",{class:"header-anchor",href:"#color-mode","aria-hidden":"true"},"#")],-1),U=n("p",null,"Set dynamic output color mode",-1),D=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-color-picker")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("color"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("hex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-color-picker")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" watch"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" color "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#FF6827A1'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      color
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),T=n("h3",{id:"historical-color",tabindex:"-1"},[t("Historical color "),n("a",{class:"header-anchor",href:"#historical-color","aria-hidden":"true"},"#")],-1),j=n("p",null,"Customize whether to display historical colors. By default, it is true",-1),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"btnStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("common"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isShowAlpha"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("test showAlpha Be {{ show }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-color-picker")]),t(),n("span",{class:"token attr-name"},":show-history"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("show"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("color"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("hsl"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-color-picker")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" watch"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" show "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"isShowAlpha"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      show`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),t("show"),n("span",{class:"token punctuation"},"."),t(`value
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" color "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'hsla(353, 1, 0.58, 1)'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      color`),n("span",{class:"token punctuation"},","),t(`
      isShowAlpha`),n("span",{class:"token punctuation"},","),t(`
      show
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),$=n("h3",{id:"foundation-panel-customization",tabindex:"-1"},[t("Foundation panel customization "),n("a",{class:"header-anchor",href:"#foundation-panel-customization","aria-hidden":"true"},"#")],-1),H=n("p",null,"Sets a customizable base panel color swatch",-1),W=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-color-picker")]),t(),n("span",{class:"token attr-name"},":swatches"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("colors"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("color"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-color-picker")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" watch"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" colors "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token string"},"'#f44336'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'#e91e63'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'#9c27b0'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'#673ab7'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'#3f51b5'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'#2196f3'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'#03a9f4'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'#00bcd4'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'#009688'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'#4caf50'"),t(`
    `),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" color "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'rgba(155, 39, 176, 1)'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      color`),n("span",{class:"token punctuation"},","),t(`
      colors
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),G=b('<h3 id="d-color-picker" tabindex="-1">d-color-picker <a class="header-anchor" href="#d-color-picker" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">parameter</th><th style="text-align:center;">type</th><th style="text-align:center;">default</th><th style="text-align:center;">introduce</th><th style="text-align:center;">Jump Demo</th></tr></thead><tbody><tr><td style="text-align:center;">mode</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>rgb</code></td><td style="text-align:center;">Toggle color mode</td><td style="text-align:center;"><a href="#color-mode">mode</a></td></tr><tr><td style="text-align:center;">dotSize</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>15</code></td><td style="text-align:center;">Palette dot size</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">swatches</td><td style="text-align:center;"><code>Array</code></td><td style="text-align:center;"></td><td style="text-align:center;">Predefined sample panels</td><td style="text-align:center;"><a href="#foundation-panel-customization">swatches</a></td></tr><tr><td style="text-align:center;">show-alpha</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:center;">Show transparency progress bar</td><td style="text-align:center;"><a href="#color-transparency">Color transparency</a></td></tr><tr><td style="text-align:center;">show-history</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:center;">Show historical colors</td><td style="text-align:center;"><a href="#historical-color">show-history</a></td></tr><tr><td style="text-align:center;">v-model</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"></td><td style="text-align:center;">Binding color value support\uFF08hex , rgb , hsl , hsv \uFF09</td><td style="text-align:center;"></td></tr></tbody></table>',2);function I(r,u,c,i,l,h){const f=_("render-demo-0"),a=_("demo"),p=_("render-demo-1"),e=_("render-demo-2"),o=_("render-demo-3"),m=_("render-demo-4");return S(),B("div",null,[A,k(a,{sourceCode:`<template>
  <d-color-picker></d-color-picker>
</template>
`},{highlight:d(()=>[N]),default:d(()=>[k(f)]),_:1}),E,q,k(a,{sourceCode:`<template>
  <d-button btnStyle="common" @click="isShowAlpha">test showAlpha Be {{ show }}</d-button>
  <d-color-picker v-model="color" :show-alpha="show"></d-color-picker>
</template>

<script>
import { defineComponent, watch, ref } from 'vue'

export default defineComponent({
  setup() {
    const show = ref(true)
    const color = ref('rgba(83, 199, 212, 0.72)')
    const isShowAlpha = () => {
      show.value = !show.value
    }
    return {
      color,
      isShowAlpha,
      show
    }
  }
})
<\/script>
`},{highlight:d(()=>[F]),default:d(()=>[k(p)]),_:1}),z,U,k(a,{sourceCode:`<template>
  <d-color-picker v-model="color" mode="hex"></d-color-picker>
</template>

<script>
import { defineComponent, watch, ref } from 'vue'

export default defineComponent({
  setup() {
    const color = ref('#FF6827A1')
    return {
      color
    }
  }
})
<\/script>
`},{highlight:d(()=>[D]),default:d(()=>[k(e)]),_:1}),T,j,k(a,{sourceCode:`<template>
  <d-button btnStyle="common" @click="isShowAlpha">test showAlpha Be {{ show }}</d-button>
  <d-color-picker :show-history="show" v-model="color" mode="hsl"></d-color-picker>
</template>

<script>
import { defineComponent, watch, ref } from 'vue'

export default defineComponent({
  setup() {
    let show = ref(true)
    const isShowAlpha = () => {
      show.value = !show.value
    }
    const color = ref('hsla(353, 1, 0.58, 1)')
    return {
      color,
      isShowAlpha,
      show
    }
  }
})
<\/script>
`},{highlight:d(()=>[P]),default:d(()=>[k(o)]),_:1}),$,H,k(a,{sourceCode:`<template>
  <d-color-picker :swatches="colors" v-model="color"></d-color-picker>
</template>

<script>
import { defineComponent, watch, ref } from 'vue'

export default defineComponent({
  setup() {
    const colors = [
      '#f44336',
      '#e91e63',
      '#9c27b0',
      '#673ab7',
      '#3f51b5',
      '#2196f3',
      '#03a9f4',
      '#00bcd4',
      '#009688',
      '#4caf50'
    ]
    const color = ref('rgba(155, 39, 176, 1)')
    return {
      color,
      colors
    }
  }
})
<\/script>
`},{highlight:d(()=>[W]),default:d(()=>[k(m)]),_:1}),G])}var O=C(V,[["render",I]]);export{M as __pageData,O as default};
