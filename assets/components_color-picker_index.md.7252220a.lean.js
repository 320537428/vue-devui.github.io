var x=Object.defineProperty;var v=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var y=(e,o,s)=>o in e?x(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,w=(e,o)=>{for(var s in o||(o={}))b.call(o,s)&&y(e,s,o[s]);if(v)for(var s of v(o))V.call(o,s)&&y(e,s,o[s]);return e};import{_ as S,V as g,r as _,o as D,c as N,a as k,w as d,b as B,d as n,e as t}from"./app.d8dfdb43.js";const q={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:o,openBlock:s,createElementBlock:i}=g;function p(f,c){const r=e("d-color-picker");return s(),i("div",null,[o(r)])}return w({render:p},{})}(),"render-demo-1":function(){const{toDisplayString:e,createTextVNode:o,resolveComponent:s,withCtx:i,createVNode:p,openBlock:h,createElementBlock:f}=g;function c(a,C){const A=s("d-button"),F=s("d-color-picker");return h(),f("div",null,[p(A,{variant:"common",onClick:a.isShowAlpha},{default:i(()=>[o("test showAlpha Be "+e(a.show),1)]),_:1},8,["onClick"]),p(F,{modelValue:a.color,"onUpdate:modelValue":C[0]||(C[0]=E=>a.color=E),"show-alpha":a.show},null,8,["modelValue","show-alpha"])])}const{defineComponent:r,watch:l,ref:u}=g,m=r({setup(){const a=u(!0);return{color:u("rgba(83, 199, 212, 0.72)"),isShowAlpha:()=>{a.value=!a.value},show:a}}});return w({render:c},m)}(),"render-demo-2":function(){const{resolveComponent:e,createVNode:o,openBlock:s,createElementBlock:i}=g;function p(l,u){const m=e("d-color-picker");return s(),i("div",null,[o(m,{modelValue:l.color,"onUpdate:modelValue":u[0]||(u[0]=a=>l.color=a),mode:"hex"},null,8,["modelValue"])])}const{defineComponent:h,watch:f,ref:c}=g,r=h({setup(){return{color:c("#FF6827A1")}}});return w({render:p},r)}(),"render-demo-3":function(){const{toDisplayString:e,createTextVNode:o,resolveComponent:s,withCtx:i,createVNode:p,openBlock:h,createElementBlock:f}=g;function c(a,C){const A=s("d-button"),F=s("d-color-picker");return h(),f("div",null,[p(A,{variant:"common",onClick:a.isShowAlpha},{default:i(()=>[o("test showAlpha Be "+e(a.show),1)]),_:1},8,["onClick"]),p(F,{"show-history":a.show,modelValue:a.color,"onUpdate:modelValue":C[0]||(C[0]=E=>a.color=E),mode:"hsl"},null,8,["show-history","modelValue"])])}const{defineComponent:r,watch:l,ref:u}=g,m=r({setup(){let a=u(!0);const C=()=>{a.value=!a.value};return{color:u("hsla(353, 1, 0.58, 1)"),isShowAlpha:C,show:a}}});return w({render:c},m)}(),"render-demo-4":function(){const{resolveComponent:e,createVNode:o,openBlock:s,createElementBlock:i}=g;function p(l,u){const m=e("d-color-picker");return s(),i("div",null,[o(m,{swatches:l.colors,modelValue:l.color,"onUpdate:modelValue":u[0]||(u[0]=a=>l.color=a)},null,8,["swatches","modelValue"])])}const{defineComponent:h,watch:f,ref:c}=g,r=h({setup(){const l=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50"];return{color:c("rgba(155, 39, 176, 1)"),colors:l}}});return w({render:p},r)}()}},Y='{"title":"ColorPicker \u989C\u8272\u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u989C\u8272\u900F\u660E\u5EA6","slug":"\u989C\u8272\u900F\u660E\u5EA6"},{"level":3,"title":"\u989C\u8272\u6A21\u5F0F","slug":"\u989C\u8272\u6A21\u5F0F"},{"level":3,"title":"\u5386\u53F2\u989C\u8272","slug":"\u5386\u53F2\u989C\u8272"},{"level":3,"title":"\u57FA\u7840\u9762\u677F\u81EA\u5B9A\u4E49","slug":"\u57FA\u7840\u9762\u677F\u81EA\u5B9A\u4E49"},{"level":3,"title":"ColorPicker \u53C2\u6570","slug":"colorpicker-\u53C2\u6570"}],"relativePath":"components/color-picker/index.md","lastUpdated":1662171945322}',P=B('<h1 id="colorpicker-\u989C\u8272\u9009\u62E9\u5668" tabindex="-1">ColorPicker \u989C\u8272\u9009\u62E9\u5668 <a class="header-anchor" href="#colorpicker-\u989C\u8272\u9009\u62E9\u5668" aria-hidden="true">#</a></h1><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5141\u8BB8\u7528\u6237\u4F7F\u7528\u5404\u79CD\u4EA4\u4E92\u65B9\u6CD5\u6765\u9009\u62E9\u989C\u8272</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',4),T=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-color-picker")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-color-picker")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),U=n("h3",{id:"\u989C\u8272\u900F\u660E\u5EA6",tabindex:"-1"},[t("\u989C\u8272\u900F\u660E\u5EA6 "),n("a",{class:"header-anchor",href:"#\u989C\u8272\u900F\u660E\u5EA6","aria-hidden":"true"},"#")],-1),j=n("p",null,"\u5141\u8BB8\u7528\u6237\u52A8\u6001\u8C03\u8282\u5C55\u793A alpha \u6A21\u5F0F \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E3Atrue",-1),$=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("common"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isShowAlpha"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("test showAlpha Be {{ show }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),z=n("h3",{id:"\u989C\u8272\u6A21\u5F0F",tabindex:"-1"},[t("\u989C\u8272\u6A21\u5F0F "),n("a",{class:"header-anchor",href:"#\u989C\u8272\u6A21\u5F0F","aria-hidden":"true"},"#")],-1),G=n("p",null,"\u8BBE\u7F6E mode \u5C55\u793A\u54CD\u5E94\u989C\u8272\u6A21\u5F0F",-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),I=n("h3",{id:"\u5386\u53F2\u989C\u8272",tabindex:"-1"},[t("\u5386\u53F2\u989C\u8272 "),n("a",{class:"header-anchor",href:"#\u5386\u53F2\u989C\u8272","aria-hidden":"true"},"#")],-1),J=n("p",null,"\u81EA\u5B9A\u4E49\u662F\u5426\u5C55\u793A\u5386\u53F2\u989C\u8272 \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E3Atrue",-1),K=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("common"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isShowAlpha"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("test showAlpha Be {{ show }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),L=n("h3",{id:"\u57FA\u7840\u9762\u677F\u81EA\u5B9A\u4E49",tabindex:"-1"},[t("\u57FA\u7840\u9762\u677F\u81EA\u5B9A\u4E49 "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u9762\u677F\u81EA\u5B9A\u4E49","aria-hidden":"true"},"#")],-1),M=n("p",null,"\u8BBE\u7F6E\u53EF\u81EA\u5B9A\u4E49\u914D\u7F6E\u7684\u57FA\u7840\u9762\u677F\u989C\u8272\u6837\u672C",-1),O=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),Q=B('<h3 id="colorpicker-\u53C2\u6570" tabindex="-1">ColorPicker \u53C2\u6570 <a class="header-anchor" href="#colorpicker-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">mode</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>rgb</code></td><td style="text-align:center;">\u5207\u6362\u989C\u8272\u6A21\u5F0F</td><td style="text-align:center;"><a href="#%E9%A2%9C%E8%89%B2%E6%A8%A1%E5%BC%8F">\u989C\u8272\u6A21\u5F0F</a></td></tr><tr><td style="text-align:center;">dotSize</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>15</code></td><td style="text-align:center;">\u8C03\u8272\u677F\u5706\u70B9\u5927\u5C0F</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">swatches</td><td style="text-align:center;"><code>Array</code></td><td style="text-align:center;"></td><td style="text-align:center;">\u9884\u5B9A\u4E49\u6837\u672C\u9762\u677F</td><td style="text-align:center;"><a href="#%E5%9F%BA%E7%A1%80%E9%9D%A2%E6%9D%BF%E8%87%AA%E5%AE%9A%E4%B9%89">\u8272\u5757\u6837\u672C</a></td></tr><tr><td style="text-align:center;">show-alpha</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:center;">\u662F\u5426\u5C55\u793A\u900F\u660E\u5EA6\u8FDB\u5EA6\u6761</td><td style="text-align:center;"><a href="#%E9%A2%9C%E8%89%B2%E9%80%8F%E6%98%8E%E5%BA%A6">\u900F\u660E\u5EA6\u5C55\u793A</a></td></tr><tr><td style="text-align:center;">show-history</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:center;">\u662F\u5426\u5C55\u793A\u5386\u53F2\u989C\u8272</td><td style="text-align:center;"><a href="#%E5%8E%86%E5%8F%B2%E9%A2%9C%E8%89%B2">\u5386\u53F2\u989C\u8272\u5C55\u793A</a></td></tr><tr><td style="text-align:center;">v-model</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"></td><td style="text-align:center;">\u7ED1\u5B9A\u989C\u8272Value\u652F\u6301\uFF08hex , rgb , hsl , hsv \uFF09</td><td style="text-align:center;"></td></tr></tbody></table>',2);function R(e,o,s,i,p,h){const f=_("render-demo-0"),c=_("demo"),r=_("render-demo-1"),l=_("render-demo-2"),u=_("render-demo-3"),m=_("render-demo-4");return D(),N("div",null,[P,k(c,{sourceCode:`<template>
  <d-color-picker></d-color-picker>
</template>
`},{highlight:d(()=>[T]),default:d(()=>[k(f)]),_:1}),U,j,k(c,{sourceCode:`<template>
  <d-button variant="common" @click="isShowAlpha">test showAlpha Be {{ show }}</d-button>
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
`},{highlight:d(()=>[$]),default:d(()=>[k(r)]),_:1}),z,G,k(c,{sourceCode:`<template>
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
`},{highlight:d(()=>[H]),default:d(()=>[k(l)]),_:1}),I,J,k(c,{sourceCode:`<template>
  <d-button variant="common" @click="isShowAlpha">test showAlpha Be {{ show }}</d-button>
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
`},{highlight:d(()=>[K]),default:d(()=>[k(u)]),_:1}),L,M,k(c,{sourceCode:`<template>
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
`},{highlight:d(()=>[O]),default:d(()=>[k(m)]),_:1}),Q])}var Z=S(q,[["render",R]]);export{Y as __pageData,Z as default};
