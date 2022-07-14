var V=Object.defineProperty;var C=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var S=(e,o,s)=>o in e?V(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,_=(e,o)=>{for(var s in o||(o={}))A.call(o,s)&&S(e,s,o[s]);if(C)for(var s of C(o))N.call(o,s)&&S(e,s,o[s]);return e};import{_ as E,V as g,r as y,c as q,a as k,w as d,b as B,d as n,e as t,o as F}from"./app.a2cc62c7.js";const z={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:o,openBlock:s,createElementBlock:i}=g;function r(f,c){const u=e("d-color-picker");return s(),i("div",null,[o(u)])}return _({render:r},{})}(),"render-demo-1":function(){const{toDisplayString:e,createTextVNode:o,resolveComponent:s,withCtx:i,createVNode:r,openBlock:h,createElementBlock:f}=g;function c(a,w){const v=s("d-button"),x=s("d-color-picker");return h(),f("div",null,[r(v,{btnStyle:"common",onClick:a.isShowAlpha},{default:i(()=>[o("test showAlpha Be "+e(a.show),1)]),_:1},8,["onClick"]),r(x,{modelValue:a.color,"onUpdate:modelValue":w[0]||(w[0]=b=>a.color=b),"show-alpha":a.show},null,8,["modelValue","show-alpha"])])}const{defineComponent:u,watch:p,ref:l}=g,m=u({setup(){const a=l(!0);return{color:l("rgba(83, 199, 212, 0.72)"),isShowAlpha:()=>{a.value=!a.value},show:a}}});return _({render:c},m)}(),"render-demo-2":function(){const{resolveComponent:e,createVNode:o,openBlock:s,createElementBlock:i}=g;function r(p,l){const m=e("d-color-picker");return s(),i("div",null,[o(m,{modelValue:p.color,"onUpdate:modelValue":l[0]||(l[0]=a=>p.color=a),mode:"hex"},null,8,["modelValue"])])}const{defineComponent:h,watch:f,ref:c}=g,u=h({setup(){return{color:c("#FF6827A1")}}});return _({render:r},u)}(),"render-demo-3":function(){const{toDisplayString:e,createTextVNode:o,resolveComponent:s,withCtx:i,createVNode:r,openBlock:h,createElementBlock:f}=g;function c(a,w){const v=s("d-button"),x=s("d-color-picker");return h(),f("div",null,[r(v,{btnStyle:"common",onClick:a.isShowAlpha},{default:i(()=>[o("test showAlpha Be "+e(a.show),1)]),_:1},8,["onClick"]),r(x,{"show-history":a.show,modelValue:a.color,"onUpdate:modelValue":w[0]||(w[0]=b=>a.color=b),mode:"hsl"},null,8,["show-history","modelValue"])])}const{defineComponent:u,watch:p,ref:l}=g,m=u({setup(){let a=l(!0);const w=()=>{a.value=!a.value};return{color:l("hsla(353, 1, 0.58, 1)"),isShowAlpha:w,show:a}}});return _({render:c},m)}(),"render-demo-4":function(){const{resolveComponent:e,createVNode:o,openBlock:s,createElementBlock:i}=g;function r(p,l){const m=e("d-color-picker");return s(),i("div",null,[o(m,{swatches:p.colors,modelValue:p.color,"onUpdate:modelValue":l[0]||(l[0]=a=>p.color=a)},null,8,["swatches","modelValue"])])}const{defineComponent:h,watch:f,ref:c}=g,u=h({setup(){const p=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50"];return{color:c("rgba(155, 39, 176, 1)"),colors:p}}});return _({render:r},u)}()}},Y='{"title":"ColorPicker","description":"","frontmatter":{},"headers":[{"level":3,"title":"When to use","slug":"when-to-use"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Color transparency","slug":"color-transparency"},{"level":3,"title":"Color mode","slug":"color-mode"},{"level":3,"title":"Historical color","slug":"historical-color"},{"level":3,"title":"Foundation panel customization","slug":"foundation-panel-customization"},{"level":3,"title":"d-color-picker","slug":"d-color-picker"}],"relativePath":"en-US/components/color-picker/index.md","lastUpdated":1650439126631}',U=B('<h1 id="colorpicker" tabindex="-1">ColorPicker <a class="header-anchor" href="#colorpicker" aria-hidden="true">#</a></h1><h3 id="when-to-use" tabindex="-1">When to use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>Allows users to use various interactive methods to select colors</p><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3>',4),D=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-color-picker")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-color-picker")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),T=n("h3",{id:"color-transparency",tabindex:"-1"},[t("Color transparency "),n("a",{class:"header-anchor",href:"#color-transparency","aria-hidden":"true"},"#")],-1),j=n("p",null,"Allows users to dynamically adjust the display alpha mode, which is true by default",-1),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),$=n("h3",{id:"color-mode",tabindex:"-1"},[t("Color mode "),n("a",{class:"header-anchor",href:"#color-mode","aria-hidden":"true"},"#")],-1),H=n("p",null,"Set dynamic output color mode",-1),W=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),J=n("h3",{id:"historical-color",tabindex:"-1"},[t("Historical color "),n("a",{class:"header-anchor",href:"#historical-color","aria-hidden":"true"},"#")],-1),G=n("p",null,"Customize whether to display historical colors. By default, it is true",-1),I=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),K=n("h3",{id:"foundation-panel-customization",tabindex:"-1"},[t("Foundation panel customization "),n("a",{class:"header-anchor",href:"#foundation-panel-customization","aria-hidden":"true"},"#")],-1),L=n("p",null,"Sets a customizable base panel color swatch",-1),M=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),O=B('<h3 id="d-color-picker" tabindex="-1">d-color-picker <a class="header-anchor" href="#d-color-picker" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">parameter</th><th style="text-align:center;">type</th><th style="text-align:center;">default</th><th style="text-align:center;">introduce</th><th style="text-align:center;">Jump Demo</th></tr></thead><tbody><tr><td style="text-align:center;">mode</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>rgb</code></td><td style="text-align:center;">Toggle color mode</td><td style="text-align:center;"><a href="#color-mode">mode</a></td></tr><tr><td style="text-align:center;">dotSize</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>15</code></td><td style="text-align:center;">Palette dot size</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">swatches</td><td style="text-align:center;"><code>Array</code></td><td style="text-align:center;"></td><td style="text-align:center;">Predefined sample panels</td><td style="text-align:center;"><a href="#foundation-panel-customization">swatches</a></td></tr><tr><td style="text-align:center;">show-alpha</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:center;">Show transparency progress bar</td><td style="text-align:center;"><a href="#color-transparency">Color transparency</a></td></tr><tr><td style="text-align:center;">show-history</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:center;">Show historical colors</td><td style="text-align:center;"><a href="#historical-color">show-history</a></td></tr><tr><td style="text-align:center;">v-model</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"></td><td style="text-align:center;">Binding color value support\uFF08hex , rgb , hsl , hsv \uFF09</td><td style="text-align:center;"></td></tr></tbody></table>',2);function Q(e,o,s,i,r,h){const f=y("render-demo-0"),c=y("demo"),u=y("render-demo-1"),p=y("render-demo-2"),l=y("render-demo-3"),m=y("render-demo-4");return F(),q("div",null,[U,k(c,{sourceCode:`<template>
  <d-color-picker></d-color-picker>
</template>
`},{highlight:d(()=>[D]),default:d(()=>[k(f)]),_:1}),T,j,k(c,{sourceCode:`<template>
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
`},{highlight:d(()=>[P]),default:d(()=>[k(u)]),_:1}),$,H,k(c,{sourceCode:`<template>
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
`},{highlight:d(()=>[W]),default:d(()=>[k(p)]),_:1}),J,G,k(c,{sourceCode:`<template>
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
`},{highlight:d(()=>[I]),default:d(()=>[k(l)]),_:1}),K,L,k(c,{sourceCode:`<template>
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
`},{highlight:d(()=>[M]),default:d(()=>[k(m)]),_:1}),O])}var Z=E(z,[["render",Q]]);export{Y as __pageData,Z as default};
