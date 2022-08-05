import{V as d}from"./framework.3495a366.js";import{_ as N,f as C,G as V,H as S,b as y,a1 as E,a3 as x,I as n,k as t}from"./plugin-vue_export-helper.ebedbb15.js";import"./framework.d333a127.js";const w={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:u,createVNode:c,createElementVNode:l,openBlock:r,createElementBlock:g}=d,m={class:"demo-spacing"};function i(e,s){const o=u("d-mention");return r(),g("div",null,[l("div",m,[c(o,{suggestions:e.suggestions,onSelect:e.handleSelect},null,8,["suggestions","onSelect"])])])}const{defineComponent:a}=d;return{render:i,...a({setup(e,{expose:s}){s();const k={suggestions:[{id:1,value:"javascript"},{id:2,value:"Vue"},{id:3,value:"React"},{id:4,value:"Angular"},{id:5,value:"Html"},{id:6,value:"Css"},{id:7,value:"Koa"},{id:8,value:"Express"},{id:9,value:"Nuxt"},{id:10,value:"Next"}],handleSelect:_=>{console.log(_)}};return Object.defineProperty(k,"__isScriptSetup",{enumerable:!1,value:!0}),k}})}}(),"render-demo-1":function(){const{resolveComponent:u,createVNode:c,createElementVNode:l,openBlock:r,createElementBlock:g}=d,m={class:"demo-spacing"};function i(e,s){const o=u("d-mention");return r(),g("div",null,[l("div",m,[c(o,{suggestions:e.suggestions,trigger:e.triggers},null,8,["suggestions","trigger"])])])}const{defineComponent:a}=d;return{render:i,...a({setup(e,{expose:s}){s();const k={triggers:["@","#"],suggestions:[{id:1,value:"javascript"},{id:2,value:"Vue"},{id:3,value:"React"},{id:4,value:"Angular"},{id:5,value:"Html"},{id:6,value:"Css"},{id:7,value:"Koa"},{id:8,value:"Express"},{id:9,value:"Nuxt"},{id:10,value:"Next"}]};return Object.defineProperty(k,"__isScriptSetup",{enumerable:!1,value:!0}),k}})}}(),"render-demo-2":function(){const{resolveComponent:u,createVNode:c,createElementVNode:l,openBlock:r,createElementBlock:g}=d,m={class:"demo-spacing"};function i(s,o){const p=u("d-mention");return r(),g("div",null,[l("div",m,[c(p,{suggestions:s.suggestions,loading:s.loading,onChange:s.onSearchChange},null,8,["suggestions","loading","onChange"])])])}const{defineComponent:a}=d,{ref:v}=d;return{render:i,...a({setup(s,{expose:o}){o();const p=v(!0),k=v([]),_=F=>{p.value=!0,h(F,A=>{k.value=A,p.value=!1})},h=(F,A)=>{const B=[{id:1,value:"javascript"},{id:2,value:"Vue"},{id:3,value:"React"},{id:4,value:"Angular"},{id:5,value:"Html"},{id:6,value:"Css"},{id:7,value:"Koa"},{id:8,value:"Express"},{id:9,value:"Nuxt"},{id:10,value:"Next"}];setTimeout(()=>{const b=B.filter(D=>D.value.toLocaleLowerCase().indexOf(F.toLocaleLowerCase())!==-1);return A(b)},1e3)},f={loading:p,suggestions:k,onSearchChange:_,fetchSuggestions:h,ref:v};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}})}}(),"render-demo-3":function(){const{resolveComponent:u,createVNode:c,createElementVNode:l,openBlock:r,createElementBlock:g}=d,m={class:"demo-spacing"};function i(e,s){const o=u("d-mention");return r(),g("div",null,[l("div",m,[c(o,{suggestions:e.suggestions,position:"top"},null,8,["suggestions"])])])}const{defineComponent:a}=d;return{render:i,...a({setup(e,{expose:s}){s();const p={suggestions:[{id:1,value:"javascript"},{id:2,value:"Vue"},{id:3,value:"React"},{id:4,value:"Angular"}]};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}})}}(),"render-demo-4":function(){const{resolveComponent:u,createVNode:c,toDisplayString:l,createElementVNode:r,withCtx:g,openBlock:m,createElementBlock:i}=d,a={class:"demo-spacing"},v={style:{"margin-left":"8px"}};function e(p,k){const _=u("d-avatar"),h=u("d-mention");return m(),i("div",null,[r("div",a,[c(h,{suggestions:p.suggestions,dmValueParse:{value:"name",id:"id"}},{template:g(({item:f})=>[c(_,{style:{"text-align":"right"},name:f.name,width:18,height:18},null,8,["name"]),r("span",v,l(f.name)+" - "+l(f.id),1)]),_:1},8,["suggestions"])])])}const{defineComponent:s}=d;return{render:e,...s({setup(p,{expose:k}){k();const h={suggestions:[{name:"C#",id:1},{name:"C",id:2},{name:"C++",id:3},{name:"Python",id:4},{name:"Java",id:5},{name:"JavaScript",id:6},{name:"Go",id:7}]};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}})}}()}},Y='{"title":"Mention \u63D0\u53CA","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u524D\u7F00","slug":"\u81EA\u5B9A\u4E49\u524D\u7F00"},{"level":3,"title":"\u5F02\u6B65\u52A0\u8F7D","slug":"\u5F02\u6B65\u52A0\u8F7D"},{"level":3,"title":"\u5411\u4E0A\u5C55\u5F00","slug":"\u5411\u4E0A\u5C55\u5F00"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6A21\u677F","slug":"\u81EA\u5B9A\u4E49\u6A21\u677F"},{"level":3,"title":"Mention \u53C2\u6570","slug":"mention-\u53C2\u6570"},{"level":3,"title":"Mention \u4E8B\u4EF6","slug":"mention-\u4E8B\u4EF6"}],"relativePath":"components/mention/index.md","lastUpdated":1659337634616}',q=x('<h1 id="mention-\u63D0\u53CA" tabindex="-1">Mention \u63D0\u53CA <a class="header-anchor" href="#mention-\u63D0\u53CA" aria-hidden="true">#</a></h1><p>\u63D0\u53CA\u7EC4\u4EF6\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u7528\u4E8E\u5728\u8F93\u5165\u4E2D\u63D0\u53CA\u67D0\u4EBA\u6216\u67D0\u4E8B\uFF0C\u5E38\u7528\u4E8E\u53D1\u5E03\u3001\u804A\u5929\u6216\u8BC4\u8BBA\u529F\u80FD\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u5C55\u793A\u63D0\u53CA\u7EC4\u4EF6\u7684\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5\u3002</p>',6),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-spacing"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-mention")]),t(),n("span",{class:"token attr-name"},":suggestions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("suggestions"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleSelect"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-mention")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"const"),t(" suggestions "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'javascript'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Vue'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'React'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Angular'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Html'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Css'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Koa'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Express'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Nuxt'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Next'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleSelect"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),P=n("h3",{id:"\u81EA\u5B9A\u4E49\u524D\u7F00",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u524D\u7F00 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u524D\u7F00","aria-hidden":"true"},"#")],-1),L=n("p",null,[t("\u81EA\u5B9A\u4E49\u89E6\u53D1\u5B57\u7B26\uFF0C\u9ED8\u8BA4\u4E3A"),n("code",null,"@"),t("\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u4E3A\u6570\u7EC4\u3002")],-1),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-spacing"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-mention")]),t(),n("span",{class:"token attr-name"},":suggestions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("suggestions"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("triggers"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-mention")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"const"),t(" triggers "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'@'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'#'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" suggestions "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'javascript'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Vue'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'React'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Angular'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Html'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Css'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Koa'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Express'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Nuxt'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Next'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),H=n("h3",{id:"\u5F02\u6B65\u52A0\u8F7D",tabindex:"-1"},[t("\u5F02\u6B65\u52A0\u8F7D "),n("a",{class:"header-anchor",href:"#\u5F02\u6B65\u52A0\u8F7D","aria-hidden":"true"},"#")],-1),K=n("p",null,"\u6709\u65F6\u5019\u6570\u636E\u662F\u5F02\u6B65\u83B7\u53D6\u7684\uFF0C\u53EF\u4EE5\u91C7\u53D6\u5F02\u6B65\u52A0\u8F7D\u7684\u65B9\u5F0F\u3002",-1),O=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-spacing"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-mention")]),t(),n("span",{class:"token attr-name"},":suggestions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("suggestions"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loading"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onSearchChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-mention")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" loading "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" suggestions "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onSearchChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"val"),n("span",{class:"token operator"},":"),t(" string")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token function"},"fetchSuggestions"),n("span",{class:"token punctuation"},"("),t("val"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    suggestions`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" result"),n("span",{class:"token punctuation"},";"),t(`
    loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"fetchSuggestions"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token function-variable function"},"callback"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"suggestions"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" users "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'javascript'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Vue'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'React'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Angular'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Html'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Css'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Koa'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Express'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Nuxt'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Next'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" result "),n("span",{class:"token operator"},"="),t(" users"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(" item"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),t("result"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),J=n("h3",{id:"\u5411\u4E0A\u5C55\u5F00",tabindex:"-1"},[t("\u5411\u4E0A\u5C55\u5F00 "),n("a",{class:"header-anchor",href:"#\u5411\u4E0A\u5C55\u5F00","aria-hidden":"true"},"#")],-1),M=n("p",null,"\u641C\u7D22\u5217\u8868\u9009\u9879\u8FD8\u53EF\u4EE5\u5411\u4E0A\u5C55\u5F00\u3002",-1),G=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-spacing"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-mention")]),t(),n("span",{class:"token attr-name"},":suggestions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("suggestions"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("top"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-mention")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"const"),t(" suggestions "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'javascript'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Vue'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'React'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Angular'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),T=n("h3",{id:"\u81EA\u5B9A\u4E49\u6A21\u677F",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u6A21\u677F "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6A21\u677F","aria-hidden":"true"},"#")],-1),$=n("p",null,"\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5C55\u793A\u5185\u5BB9\u6A21\u677F\u3002",-1),I=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-spacing"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-mention")]),t(),n("span",{class:"token attr-name"},":suggestions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("suggestions"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":dmValueParse"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ value: "),n("span",{class:"token punctuation"},"'"),t("name"),n("span",{class:"token punctuation"},"'"),t(", id: "),n("span",{class:"token punctuation"},"'"),t("id"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#template"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ item }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-avatar")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" right")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},":name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.name"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("18"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("18"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-avatar")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),t(" 8px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("{{ item.name }} - {{ item.id }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-mention")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"const"),t(" suggestions "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'C#'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'C'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'C++'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Python'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Java'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'JavaScript'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Go'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),U=x('<h3 id="mention-\u53C2\u6570" tabindex="-1">Mention \u53C2\u6570 <a class="header-anchor" href="#mention-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">suggestions</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">\u5FC5\u586B\uFF0C\u5EFA\u8BAE\u6570\u636E\u6E90</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">position</td><td style="text-align:left;">top / bottom</td><td style="text-align:left;">bottom</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5EFA\u8BAE\u6846\u4F4D\u7F6E</td><td style="text-align:left;"><a href="#%E5%90%91%E4%B8%8A%E5%B1%95%E5%BC%80">\u5411\u4E0A\u5C55\u5F00</a></td></tr><tr><td style="text-align:left;">notFoundContent</td><td style="text-align:left;">string</td><td style="text-align:left;">No suggestion matched</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7528\u4E8E\u5728\u6CA1\u6709\u5339\u914D\u5230\u6570\u636E\u7684\u65F6\u5019\u7684\u63D0\u793A</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">loading</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F02\u6B65\u52A0\u8F7D\u6570\u636E\u6E90\u7684\u65F6\u5019\u662F\u5426\u663E\u793A\u52A0\u8F7D\u6548\u679C</td><td style="text-align:left;"><a href="#%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD">\u5F02\u6B65\u52A0\u8F7D</a></td></tr><tr><td style="text-align:left;">dmValueParse</td><td style="text-align:left;"><code>{value: string, id: string}</code></td><td style="text-align:left;"><code>{value: value, id: id} </code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5EFA\u8BAE\u9009\u9879\u7684\u53D6\u503C\u65B9\u6CD5</td><td style="text-align:left;"><a href="#%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD">\u5F02\u6B65\u52A0\u8F7D</a></td></tr><tr><td style="text-align:left;">trigger</td><td style="text-align:left;">string[]</td><td style="text-align:left;"><code>[&#39;@&#39;] </code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u89E6\u53D1\u7EC4\u4EF6\u7684\u524D\u7F00\u7B26</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%89%8D%E7%BC%80">\u81EA\u5B9A\u4E49\u524D\u7F00</a></td></tr></tbody></table><h3 id="mention-\u4E8B\u4EF6" tabindex="-1">Mention \u4E8B\u4EF6 <a class="header-anchor" href="#mention-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">select</td><td style="text-align:left;">Function({value: string, id: string})</td><td style="text-align:left;">-</td><td style="text-align:left;">\u89E6\u53D1\u9009\u4E2D\u5EFA\u8BAE</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">change</td><td style="text-align:left;">Function(value: string)</td><td style="text-align:left;">-</td><td style="text-align:left;">\u8F93\u5165\u6846 change \u4E8B\u4EF6</td><td style="text-align:left;"><a href="#%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD">\u5F02\u6B65\u52A0\u8F7D</a></td></tr></tbody></table>',4);function z(u,c,l,r,g,m){const i=C("render-demo-0"),a=C("demo"),v=C("render-demo-1"),e=C("render-demo-2"),s=C("render-demo-3"),o=C("render-demo-4");return V(),S("div",null,[q,y(a,{sourceCode:`<template>
  <div class="demo-spacing">
    <d-mention :suggestions="suggestions" @select="handleSelect"></d-mention>
  </div>
</template>

<script lang="ts" setup>
const suggestions = [
  {
    id: 1,
    value: 'javascript',
  },
  {
    id: 2,
    value: 'Vue',
  },
  {
    id: 3,
    value: 'React',
  },
  {
    id: 4,
    value: 'Angular',
  },
  {
    id: 5,
    value: 'Html',
  },
  {
    id: 6,
    value: 'Css',
  },
  {
    id: 7,
    value: 'Koa',
  },
  {
    id: 8,
    value: 'Express',
  },
  {
    id: 9,
    value: 'Nuxt',
  },
  {
    id: 10,
    value: 'Next',
  },
];

const handleSelect = (val) => {
  console.log(val);
};
<\/script>
`},{highlight:E(()=>[j]),default:E(()=>[y(i)]),_:1}),P,L,y(a,{sourceCode:`<template>
  <div class="demo-spacing">
    <d-mention :suggestions="suggestions" :trigger="triggers"></d-mention>
  </div>
</template>

<script lang="ts" setup>
const triggers = ['@', '#'];
const suggestions = [
  {
    id: 1,
    value: 'javascript',
  },
  {
    id: 2,
    value: 'Vue',
  },
  {
    id: 3,
    value: 'React',
  },
  {
    id: 4,
    value: 'Angular',
  },
  {
    id: 5,
    value: 'Html',
  },
  {
    id: 6,
    value: 'Css',
  },
  {
    id: 7,
    value: 'Koa',
  },
  {
    id: 8,
    value: 'Express',
  },
  {
    id: 9,
    value: 'Nuxt',
  },
  {
    id: 10,
    value: 'Next',
  },
];
<\/script>
`},{highlight:E(()=>[R]),default:E(()=>[y(v)]),_:1}),H,K,y(a,{sourceCode:`<template>
  <div class="demo-spacing">
    <d-mention :suggestions="suggestions" :loading="loading" @change="onSearchChange"></d-mention>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const loading = ref(true);
const suggestions = ref([]);

const onSearchChange = (val: string) => {
  loading.value = true;
  fetchSuggestions(val, (result) => {
    suggestions.value = result;
    loading.value = false;
  });
};
const fetchSuggestions = (value: string, callback: (suggestions: string[]) => void) => {
  const users = [
    {
      id: 1,
      value: 'javascript',
    },
    {
      id: 2,
      value: 'Vue',
    },
    {
      id: 3,
      value: 'React',
    },
    {
      id: 4,
      value: 'Angular',
    },
    {
      id: 5,
      value: 'Html',
    },
    {
      id: 6,
      value: 'Css',
    },
    {
      id: 7,
      value: 'Koa',
    },
    {
      id: 8,
      value: 'Express',
    },
    {
      id: 9,
      value: 'Nuxt',
    },
    {
      id: 10,
      value: 'Next',
    },
  ];
  setTimeout(() => {
    const result = users.filter((item) => {
      return item.value.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1;
    });
    return callback(result);
  }, 1000);
};
<\/script>
`},{highlight:E(()=>[O]),default:E(()=>[y(e)]),_:1}),J,M,y(a,{sourceCode:`<template>
  <div class="demo-spacing">
    <d-mention :suggestions="suggestions" position="top"></d-mention>
  </div>
</template>

<script lang="ts" setup>
const suggestions = [
  {
    id: 1,
    value: 'javascript',
  },
  {
    id: 2,
    value: 'Vue',
  },
  {
    id: 3,
    value: 'React',
  },
  {
    id: 4,
    value: 'Angular',
  },
];
<\/script>
`},{highlight:E(()=>[G]),default:E(()=>[y(s)]),_:1}),T,$,y(a,{sourceCode:`<template>
  <div class="demo-spacing">
    <d-mention :suggestions="suggestions" :dmValueParse="{ value: 'name', id: 'id' }">
      <template #template="{ item }">
        <d-avatar style="text-align: right" :name="item.name" :width="18" :height="18"></d-avatar>
        <span style="margin-left: 8px">{{ item.name }} - {{ item.id }}</span>
      </template>
    </d-mention>
  </div>
</template>

<script lang="ts" setup>
const suggestions = [
  {
    name: 'C#',
    id: 1,
  },
  {
    name: 'C',
    id: 2,
  },
  {
    name: 'C++',
    id: 3,
  },
  {
    name: 'Python',
    id: 4,
  },
  {
    name: 'Java',
    id: 5,
  },
  {
    name: 'JavaScript',
    id: 6,
  },
  {
    name: 'Go',
    id: 7,
  },
];
<\/script>
`},{highlight:E(()=>[I]),default:E(()=>[y(o)]),_:1}),U])}var Z=N(w,[["render",z]]);export{Y as __pageData,Z as default};
