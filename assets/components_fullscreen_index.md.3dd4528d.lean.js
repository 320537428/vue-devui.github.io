var O=Object.defineProperty;var w=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var x=(u,o,s)=>o in u?O(u,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[o]=s,_=(u,o)=>{for(var s in o||(o={}))V.call(o,s)&&x(u,s,o[s]);if(w)for(var s of w(o))A.call(o,s)&&x(u,s,o[s]);return u};import{_ as B,r as b,c as D,a as m,w as g,b as y,d as n,e as t,o as N,V as f}from"./app.643de55c.js";const q={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:u,createTextVNode:o,resolveComponent:s,withCtx:p,createVNode:l,createElementVNode:F,openBlock:k,createElementBlock:i}=f;function r(a,e){const c=s("d-button"),v=s("d-fullscreen");return k(),i("div",null,[l(v,{modelValue:a.isOpen,"onUpdate:modelValue":e[1]||(e[1]=C=>a.isOpen=C),zIndex:20},{default:p(()=>[F("div",null,[l(c,{onClick:e[0]||(e[0]=C=>a.isOpen=!a.isOpen)},{default:p(()=>[o(u(a.btnContent),1)]),_:1})])]),_:1},8,["modelValue"])])}const{ref:d,watch:h}=f;return _({render:r},{setup(){const a=d(!1),e=d("\u5168\u5C4F");return h(a,c=>{c?e.value="\u9000\u51FA\u5168\u5C4F":e.value="\u5168\u5C4F"}),{btnContent:e,isOpen:a}}})}(),"render-demo-1":function(){const{toDisplayString:u,createTextVNode:o,resolveComponent:s,withCtx:p,createVNode:l,createElementVNode:F,openBlock:k,createElementBlock:i}=f;function r(a,e){const c=s("d-button"),v=s("d-fullscreen");return k(),i("div",null,[l(v,{modelValue:a.isOpen,"onUpdate:modelValue":e[1]||(e[1]=C=>a.isOpen=C),mode:"immersive"},{default:p(()=>[F("div",null,[l(c,{onClick:e[0]||(e[0]=C=>a.isOpen=!a.isOpen)},{default:p(()=>[o(u(a.btnContent),1)]),_:1})])]),_:1},8,["modelValue"])])}const{ref:d,watch:h}=f;return _({render:r},{setup(){const a=d(!1),e=d("\u5168\u5C4F");return h(a,c=>{c?e.value="\u9000\u51FA\u5168\u5C4F":e.value="\u5168\u5C4F"}),{btnContent:e,isOpen:a}}})}()}},H='{"title":"Fullscreen \u5168\u5C4F","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u666E\u901A\u5168\u5C4F","slug":"\u666E\u901A\u5168\u5C4F"},{"level":3,"title":"\u6C89\u6D78\u5F0F\u5168\u5C4F","slug":"\u6C89\u6D78\u5F0F\u5168\u5C4F"},{"level":3,"title":"\u53C2\u6570\u53CA API","slug":"\u53C2\u6570\u53CA-api"}],"relativePath":"components/fullscreen/index.md","lastUpdated":1647843975016}',$=y('<h1 id="fullscreen-\u5168\u5C4F" tabindex="-1">Fullscreen \u5168\u5C4F <a class="header-anchor" href="#fullscreen-\u5168\u5C4F" aria-hidden="true">#</a></h1><p>\u5168\u5C4F\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5F53\u7528\u6237\u9700\u8981\u5C06\u67D0\u4E00\u533A\u57DF\u8FDB\u884C\u5168\u5C4F\u5C55\u793A\u65F6\u3002</p><h3 id="\u666E\u901A\u5168\u5C4F" tabindex="-1">\u666E\u901A\u5168\u5C4F <a class="header-anchor" href="#\u666E\u901A\u5168\u5C4F" aria-hidden="true">#</a></h3><p>\u5145\u6EE1\u5F53\u524D\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u666E\u901A\u5168\u5C4F\u3002</p>',6),I=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-fullscreen")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isOpen"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":zIndex"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("20"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isOpen = !isOpen"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ btnContent }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-fullscreen")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" isOpen "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" btnContent "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5168\u5C4F'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("isOpen"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"newVal"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("newVal"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        btnContent`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'\u9000\u51FA\u5168\u5C4F'"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
        btnContent`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'\u5168\u5C4F'"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      btnContent`),n("span",{class:"token punctuation"},","),t(`
      isOpen`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),S=n("h3",{id:"\u6C89\u6D78\u5F0F\u5168\u5C4F",tabindex:"-1"},[t("\u6C89\u6D78\u5F0F\u5168\u5C4F "),n("a",{class:"header-anchor",href:"#\u6C89\u6D78\u5F0F\u5168\u5C4F","aria-hidden":"true"},"#")],-1),T=n("p",null,"\u5145\u6EE1\u6574\u4E2A\u663E\u793A\u5668\u5C4F\u5E55\u7684\u6C89\u6D78\u5F0F\u5168\u5C4F\u3002",-1),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-fullscreen")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isOpen"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("immersive"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isOpen = !isOpen"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ btnContent }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-fullscreen")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" isOpen "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" btnContent "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5168\u5C4F'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("isOpen"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"newVal"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("newVal"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        btnContent`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'\u9000\u51FA\u5168\u5C4F'"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
        btnContent`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'\u5168\u5C4F'"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      btnContent`),n("span",{class:"token punctuation"},","),t(`
      isOpen`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),P=y('<h3 id="\u53C2\u6570\u53CA-api" tabindex="-1">\u53C2\u6570\u53CA API <a class="header-anchor" href="#\u53C2\u6570\u53CA-api" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">v-model</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u542F\u52A8\u5168\u5C4F</td></tr><tr><td style="text-align:center;">mode</td><td style="text-align:center;"><code>immersive</code> \u6216 <code>normal</code></td><td style="text-align:center;"><code>normal</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u5168\u5C4F\u6A21\u5F0F</td></tr><tr><td style="text-align:center;">z-index</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;">10</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u5168\u5C4F\u5C42\u7EA7</td></tr></tbody></table>',2);function U(u,o,s,p,l,F){const k=b("render-demo-0"),i=b("demo"),r=b("render-demo-1");return N(),D("div",null,[$,m(i,{sourceCode:`<template>
  <d-fullscreen v-model="isOpen" :zIndex="20">
    <div>
      <d-button @click="isOpen = !isOpen">{{ btnContent }}</d-button>
    </div>
  </d-fullscreen>
</template>
<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const isOpen = ref(false);
    const btnContent = ref('\u5168\u5C4F');

    watch(isOpen, (newVal) => {
      if (newVal) {
        btnContent.value = '\u9000\u51FA\u5168\u5C4F';
      } else {
        btnContent.value = '\u5168\u5C4F';
      }
    });

    return {
      btnContent,
      isOpen,
    };
  },
};
<\/script>
`},{highlight:g(()=>[I]),default:g(()=>[m(k)]),_:1}),S,T,m(i,{sourceCode:`<template>
  <d-fullscreen v-model="isOpen" mode="immersive">
    <div>
      <d-button @click="isOpen = !isOpen">{{ btnContent }}</d-button>
    </div>
  </d-fullscreen>
</template>
<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const isOpen = ref(false);
    const btnContent = ref('\u5168\u5C4F');

    watch(isOpen, (newVal) => {
      if (newVal) {
        btnContent.value = '\u9000\u51FA\u5168\u5C4F';
      } else {
        btnContent.value = '\u5168\u5C4F';
      }
    });

    return {
      btnContent,
      isOpen,
    };
  },
};
<\/script>
`},{highlight:g(()=>[z]),default:g(()=>[m(r)]),_:1}),P])}var J=B(q,[["render",U]]);export{H as __pageData,J as default};
