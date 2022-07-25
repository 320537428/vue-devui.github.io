import{V as i}from"./framework.37dedfa0.js";import{_ as g,S as v,b as l,a1 as d,a3 as F,N as k,R as _,V as n,x as a}from"./plugin-vue_export-helper.02048804.js";import"./framework.43f3ce53.js";const C={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:s,openBlock:o,createElementBlock:u}=i;function c(r,x){const h=e("d-quadrant-diagram");return o(),u("div",null,[s(h,{view:r.view},null,8,["view"])])}const{defineComponent:m,reactive:t}=i;return{render:c,...{setup(){return{view:t({height:500,width:500})}}}}}()}},D='{"title":"QuadrantDiagram \u8C61\u9650\u56FE","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"}],"relativePath":"components/quadrant-diagram/index.md","lastUpdated":1658409114792}',f=F('<h1 id="quadrantdiagram-\u8C61\u9650\u56FE" tabindex="-1">QuadrantDiagram \u8C61\u9650\u56FE <a class="header-anchor" href="#quadrantdiagram-\u8C61\u9650\u56FE" aria-hidden="true">#</a></h1><p>\u8C61\u9650\u56FE\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u6839\u636E\u9700\u6C42\u5BF9\u4E8B\u52A1\u8FDB\u884C\u533A\u57DF\u5212\u5206\u4E0E\u4EF7\u503C\u6392\u5E8F\uFF0C\u53EF\u7528\u4E8E\u7BA1\u7406\u4E8B\u52A1\u7684\u4F18\u5148\u7EA7\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><h4>Basic Usage</h4>',6),w=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-quadrant-diagram")]),a(),n("span",{class:"token attr-name"},":view"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),a("view"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" view "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"500"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"500"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      view`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function E(e,s,o,u,c,m){const t=k("render-demo-0"),p=k("demo");return _(),v("div",null,[f,l(p,{sourceCode:`<template>
  <d-quadrant-diagram :view='view'/>
</template>


<script>
import { defineComponent, reactive } from 'vue'

export default ({
  setup() {
    const view = reactive({
      height: 500,
      width: 500,
    });
    return {
      view,
    }
  }
})
<\/script>
`},{highlight:d(()=>[w]),default:d(()=>[l(t)]),_:1})])}var V=g(C,[["render",E]]);export{D as __pageData,V as default};
