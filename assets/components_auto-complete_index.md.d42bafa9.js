var w=Object.defineProperty;var D=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var x=(p,s,o)=>s in p?w(p,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):p[s]=o,v=(p,s)=>{for(var o in s||(s={}))_.call(s,o)&&x(p,o,s[o]);if(D)for(var o of D(s))P.call(s,o)&&x(p,o,s[o]);return p};import{_ as V,V as y,r as h,c as L,a as E,w as C,b as S,d as n,e as t,o as J}from"./app.74859d28.js";const T={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:p,createVNode:s,openBlock:o,createElementBlock:g}=y;function m(r,l){const u=p("d-auto-complete");return o(),g("div",null,[s(u,{delay:1e3,source:r.source,modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=a=>r.value=a),"allow-empty-value-search":r.allowEmptyValueSearch,"select-value":r.selectValue,"trans-input-focus-emit":r.transInputFocusEmit,position:r.position,width:420,"append-to-body":!1},null,8,["source","modelValue","allow-empty-value-search","select-value","trans-input-focus-emit","position"])])}const{defineComponent:f,ref:c}=y,d=f({setup(){const r=c(""),l=c(!0),u=c(["C#","C","C++","CPython","Java","JavaScript","Go","Python","Ruby","F#","TypeScript","SQL","LiveScript","CoffeeScript"]),a=i=>{console.log("selectValue",i)},e=()=>{console.log("transInputFocusEmit")},k=c(["bottom"]);return{value:r,source:u,allowEmptyValueSearch:l,transInputFocusEmit:e,selectValue:a,position:k}}});return v({render:m},d)}(),"render-demo-1":function(){const{resolveComponent:p,createVNode:s,withCtx:o,toDisplayString:g,createTextVNode:m,openBlock:f,createElementBlock:c}=y;function d(a,e){const k=p("d-auto-complete"),i=p("d-col"),F=p("d-button"),b=p("d-row");return f(),c("div",null,[s(b,{type:"flex"},{default:o(()=>[s(i,{flex:4},{default:o(()=>[s(k,{source:a.source,modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=A=>a.value=A),disabled:a.isDisabled},null,8,["source","modelValue","disabled"])]),_:1}),s(i,{flex:2},{default:o(()=>[s(F,{id:"primaryBtn",onClick:a.toggle,style:{"margin-left":"10px"}},{default:o(()=>[m(g(a.isDisabled?"Enable AutoComplete":"Disable AutoComplete"),1)]),_:1},8,["onClick"])]),_:1})]),_:1})])}const{defineComponent:r,ref:l}=y,u=r({setup(){const a=l(""),e=l(["C#","C","C++","CPython","Java","JavaScript","Go","Python","Ruby","F#","TypeScript","SQL","LiveScript","CoffeeScript"]),k=l(!1);function i(){k.value=!k.value}return{value:a,source:e,isDisabled:k,toggle:i}}});return v({render:d},u)}(),"render-demo-2":function(){const{toDisplayString:p,createElementVNode:s,resolveComponent:o,withCtx:g,createVNode:m,openBlock:f,createElementBlock:c}=y;function d(a,e){const k=o("d-auto-complete");return f(),c("div",null,[m(k,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=i=>a.value=i),"search-fn":a.searchFn,"disabled-key":"disabled","is-searching":"",delay:1e3,formatter:a.formatter},{searching:g(i=>[s("div",null,p(`searching: ${i}`),1)]),_:1},8,["modelValue","search-fn","formatter"])])}const{defineComponent:r,ref:l}=y,u=r({setup(){const a=l(""),e=l([{label:"C#",disabled:!1},{label:"C++",disabled:!1},{label:"CPython",disabled:!1},{label:"Java",disabled:!1},{label:"JavaScript",disabled:!1},{label:"Go",disabled:!1},{label:"Ruby",disabled:!1},{label:"F#",disabled:!1},{label:"TypeScript",disabled:!1},{label:"SQL",disabled:!0},{label:"LiveScript",disabled:!1},{label:"CoffeeScript",disabled:!1}]);return{value:a,searchFn:async F=>{let b=[];return await new Promise(A=>{setTimeout(()=>{A()},1e3)}),e.value.forEach(A=>{let B=A.label;B=B.toLowerCase(),B.startsWith(F)&&b.push(A)}),b},formatter:F=>F.label}}});return v({render:d},u)}(),"render-demo-3":function(){const{toDisplayString:p,createElementVNode:s,resolveComponent:o,withCtx:g,createVNode:m,openBlock:f,createElementBlock:c}=y;function d(a,e){const k=o("d-auto-complete");return f(),c("div",null,[m(k,{source:a.source,modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=i=>a.value=i)},{item:g(i=>[s("div",null," \u7B2C"+p(i.index)+"\u9879: "+p(i.item),1)]),nothing:g(i=>[s("div",null,p(`\u6CA1\u6709\u5339\u914D\u9879: ${i}`),1)]),_:1},8,["source","modelValue"])])}const{defineComponent:r,ref:l}=y,u=r({setup(){const a=l(""),e=l(["C#","C","C++","CPython","Java","JavaScript","Go","Python","Ruby","F#","TypeScript","SQL","LiveScript","CoffeeScript"]);return{value:a,source:e}}});return v({render:d},u)}(),"render-demo-4":function(){const{resolveComponent:p,createVNode:s,openBlock:o,createElementBlock:g}=y;function m(u,a){const e=p("d-auto-complete");return o(),g("div",null,[s(e,{source:u.source,modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=k=>u.value=k),"latest-source":u.latestSource},null,8,["source","modelValue","latest-source"])])}const{defineComponent:f,ref:c,toRefs:d,getCurrentInstance:r}=y,l=f({setup(){const u=c(""),a=c(["JavaScript","TypeScript"]),e=c(["C#","C","C++","CPython","Java","JavaScript","Go","Python","Ruby","F#","TypeScript","SQL","LiveScript","CoffeeScript"]);return{value:u,source:e,latestSource:a}}});return v({render:m},l)}(),"render-demo-5":function(){const{resolveComponent:p,createVNode:s,openBlock:o,createElementBlock:g}=y;function m(u,a){const e=p("d-auto-complete");return o(),g("div",null,[s(e,{ref:"autoCompleteRef",source:u.source,modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=k=>u.value=k),"enable-lazy-load":"","load-more":u.loadMore,"scene-type":"select","value-parser":u.valueParser},null,8,["source","modelValue","load-more","value-parser"])])}const{defineComponent:f,ref:c,toRefs:d,getCurrentInstance:r}=y,l=f({setup(){const u=c(""),a=c(["C#","C","C++","CPython","Java","JavaScript","Go","Python","Ruby","F#","TypeScript","SQL","LiveScript","CoffeeScript","C1","C2","C3","C4","C5","C6","C7"]),e=c(null);return{value:u,source:a,loadMore:()=>{setTimeout(()=>{var F;a.value.push("lazyData"+a.value.length),(F=e.value)==null||F.loadFinish()},3e3)},valueParser:F=>F+"123",autoCompleteRef:e}}});return v({render:m},l)}()}},sn='{"title":"AutoComplete \u81EA\u52A8\u8865\u5168","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u8BBE\u7F6E\u7981\u7528","slug":"\u8BBE\u7F6E\u7981\u7528"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6570\u636E\u5339\u914D\u65B9\u6CD5","slug":"\u81EA\u5B9A\u4E49\u6570\u636E\u5339\u914D\u65B9\u6CD5"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6A21\u677F\u5C55\u793A","slug":"\u81EA\u5B9A\u4E49\u6A21\u677F\u5C55\u793A"},{"level":3,"title":"\u6700\u8FD1\u8F93\u5165","slug":"\u6700\u8FD1\u8F93\u5165"},{"level":3,"title":"\u542F\u7528\u61D2\u52A0\u8F7D","slug":"\u542F\u7528\u61D2\u52A0\u8F7D"},{"level":3,"title":"AutoComplete \u53C2\u6570","slug":"autocomplete-\u53C2\u6570"},{"level":3,"title":"AutoComplete \u4E8B\u4EF6","slug":"autocomplete-\u4E8B\u4EF6"},{"level":3,"title":"AutoComplete \u63D2\u69FD","slug":"autocomplete-\u63D2\u69FD"},{"level":3,"title":"SourceType","slug":"sourcetype"},{"level":3,"title":"Placement","slug":"placement"},{"level":3,"title":"defaultSearchFn","slug":"defaultsearchfn"},{"level":3,"title":"defaultFormatter","slug":"defaultformatter"},{"level":3,"title":"defaultValueParse","slug":"defaultvalueparse"}],"relativePath":"components/auto-complete/index.md","lastUpdated":1649728324686}',q=S('<h1 id="autocomplete-\u81EA\u52A8\u8865\u5168" tabindex="-1">AutoComplete \u81EA\u52A8\u8865\u5168 <a class="header-anchor" href="#autocomplete-\u81EA\u52A8\u8865\u5168" aria-hidden="true">#</a></h1><p>\u8054\u60F3\u7528\u6237\u53EF\u80FD\u9700\u8981\u7684\u8F93\u5165\u7ED3\u679C\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u9700\u8981\u6839\u636E\u7528\u6237\u8F93\u5165\u7684\u90E8\u5206\u5B57\u7B26\u63A8\u65AD\u51FA\u4ED6\u53EF\u80FD\u60F3\u8981\u8F93\u5165\u7684\u5185\u5BB9\u65F6\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u901A\u8FC7 source \u8BBE\u7F6E\u81EA\u52A8\u5B8C\u6210\u7684\u6570\u636E\u6E90\u3002</p>',6),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-auto-complete")]),t(`
    `),n("span",{class:"token attr-name"},":delay"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1000"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("source"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":allow-empty-value-search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("allowEmptyValueSearch"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":select-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("selectValue"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":trans-input-focus-emit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("transInputFocusEmit"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("position"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("420"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":append-to-body"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-auto-complete")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" allowEmptyValueSearch "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" source "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token string"},"'C#'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'C'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'C++'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'CPython'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'Java'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'JavaScript'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'Go'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'Python'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'Ruby'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'F#'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'TypeScript'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'SQL'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'LiveScript'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'CoffeeScript'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"selectValue"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectValue'"),n("span",{class:"token punctuation"},","),t("e"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"transInputFocusEmit"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'transInputFocusEmit'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" position "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'bottom'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      source`),n("span",{class:"token punctuation"},","),t(`
      allowEmptyValueSearch`),n("span",{class:"token punctuation"},","),t(`
      transInputFocusEmit`),n("span",{class:"token punctuation"},","),t(`
      selectValue`),n("span",{class:"token punctuation"},","),t(`
      position
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`

`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),I=n("h3",{id:"\u8BBE\u7F6E\u7981\u7528",tabindex:"-1"},[t("\u8BBE\u7F6E\u7981\u7528 "),n("a",{class:"header-anchor",href:"#\u8BBE\u7F6E\u7981\u7528","aria-hidden":"true"},"#")],-1),N=n("p",null,"\u901A\u8FC7 disabled \u8BBE\u7F6E\u662F\u5426\u7981\u7528\u3002",-1),G=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
 `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-row")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("flex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":flex"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("4"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-auto-complete")]),t(`
        `),n("span",{class:"token attr-name"},":source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("source"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isDisabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-auto-complete")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":flex"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primaryBtn"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toggle"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),t("10px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
        {{ isDisabled ? 'Enable AutoComplete' : 'Disable AutoComplete' }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" source "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token string"},"'C#'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'C'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'C++'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'CPython'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'Java'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'JavaScript'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'Go'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'Python'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'Ruby'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'F#'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'TypeScript'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'SQL'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'LiveScript'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'CoffeeScript'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" isDisabled "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"toggle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
      isDisabled`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),t("isDisabled"),n("span",{class:"token punctuation"},"."),t(`value
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      source`),n("span",{class:"token punctuation"},","),t(`
      isDisabled`),n("span",{class:"token punctuation"},","),t(`
      toggle
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`

`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Q=n("h3",{id:"\u81EA\u5B9A\u4E49\u6570\u636E\u5339\u914D\u65B9\u6CD5",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u6570\u636E\u5339\u914D\u65B9\u6CD5 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6570\u636E\u5339\u914D\u65B9\u6CD5","aria-hidden":"true"},"#")],-1),$=n("p",null,"\u901A\u8FC7 search-fn \u81EA\u5B9A\u4E49\u6570\u636E\u7684\u5339\u914D\u65B9\u6CD5\u548C\u8FD4\u56DE\u7684\u6570\u636E\u683C\u5F0F\u3002",-1),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-auto-complete")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":search-fn"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("searchFn"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"disabled-key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"is-searching"),t(`
    `),n("span",{class:"token attr-name"},":delay"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1000"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":formatter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("formatter"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#searching"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("slotProps"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("\n          {{`searching: ${slotProps}`}}\n      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-auto-complete")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" mySource "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'C#'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"false"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'C++'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"false"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'CPython'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"false"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'Java'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"false"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'JavaScript'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"false"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'Go'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"false"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'Ruby'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"false"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'F#'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"false"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'TypeScript'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"false"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'SQL'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"true"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'LiveScript'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"false"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'CoffeeScript'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"false"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"formatter"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(" item"),n("span",{class:"token punctuation"},"."),t("label"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token comment"},"//trem\uFF1Ainput\u8F93\u5165\u5185\u5BB9"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"searchFn"),t(),n("span",{class:"token operator"},"="),n("span",{class:"token keyword"},"async"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"trem"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"let"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(`
      `),n("span",{class:"token keyword"},"await"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
      mySource`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"let"),t(" cur "),n("span",{class:"token operator"},"="),t(" item"),n("span",{class:"token punctuation"},"."),t(`label
        cur `),n("span",{class:"token operator"},"="),t(" cur"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("cur"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"startsWith"),n("span",{class:"token punctuation"},"("),t("trem"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
            arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("item"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token keyword"},"return"),t(` arr
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      searchFn`),n("span",{class:"token punctuation"},","),t(`
      formatter
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`

`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),z=n("h3",{id:"\u81EA\u5B9A\u4E49\u6A21\u677F\u5C55\u793A",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u6A21\u677F\u5C55\u793A "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6A21\u677F\u5C55\u793A","aria-hidden":"true"},"#")],-1),M=n("p",null,"\u901A\u8FC7 item\u3001nothing \u81EA\u5B9A\u4E49\u4E0B\u62C9\u6846\u548C\u65E0\u5339\u914D\u63D0\u793A\u3002",-1),U=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-auto-complete")]),t(`
    `),n("span",{class:"token attr-name"},":source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("source"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#item"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("slotProps"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
          \u7B2C{{slotProps.index}}\u9879: {{slotProps.item}}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#nothing"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("slotProps"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("\n          {{`\u6CA1\u6709\u5339\u914D\u9879: ${slotProps}`}}\n      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-auto-complete")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" source "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token string"},"'C#'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'C'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'C++'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'CPython'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'Java'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'JavaScript'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'Go'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'Python'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'Ruby'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'F#'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'TypeScript'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'SQL'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'LiveScript'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'CoffeeScript'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      source
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`

`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),W=n("h3",{id:"\u6700\u8FD1\u8F93\u5165",tabindex:"-1"},[t("\u6700\u8FD1\u8F93\u5165 "),n("a",{class:"header-anchor",href:"#\u6700\u8FD1\u8F93\u5165","aria-hidden":"true"},"#")],-1),O=n("p",null,"\u901A\u8FC7 latest-source \u8BBE\u7F6E\u6700\u8FD1\u8F93\u5165\u3002",-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-auto-complete")]),t(`
    `),n("span",{class:"token attr-name"},":source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("source"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":latest-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("latestSource"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-auto-complete")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t("toRefs"),n("span",{class:"token punctuation"},","),t("getCurrentInstance "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" latestSource "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'JavaScript'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'TypeScript'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" source "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token string"},"'C#'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'C'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'C++'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'CPython'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'Java'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'JavaScript'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'Go'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'Python'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'Ruby'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'F#'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'TypeScript'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'SQL'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'LiveScript'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'CoffeeScript'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      source`),n("span",{class:"token punctuation"},","),t(`
      latestSource
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`

`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),K=n("h3",{id:"\u542F\u7528\u61D2\u52A0\u8F7D",tabindex:"-1"},[t("\u542F\u7528\u61D2\u52A0\u8F7D "),n("a",{class:"header-anchor",href:"#\u542F\u7528\u61D2\u52A0\u8F7D","aria-hidden":"true"},"#")],-1),X=n("p",null,"enable-lazy-load \u5F00\u542F\u61D2\u52A0\u8F7D",-1),Y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-auto-complete")]),t(`
    `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("autoCompleteRef"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("source"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"enable-lazy-load"),t(`
    `),n("span",{class:"token attr-name"},":load-more"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loadMore"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"scene-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("select"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":value-parser"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueParser"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-auto-complete")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t("toRefs"),n("span",{class:"token punctuation"},","),t("getCurrentInstance "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" source "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token string"},"'C#'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'C'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'C++'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'CPython'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'Java'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'JavaScript'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'Go'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'Python'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'Ruby'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'F#'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'TypeScript'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'SQL'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'LiveScript'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'CoffeeScript'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'C1'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'C2'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'C3'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'C4'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'C5'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'C6'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'C7'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" autoCompleteRef "),n("span",{class:"token operator"},"="),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),t(`
    
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"loadMore"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        source`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lazyData'"),n("span",{class:"token operator"},"+"),t("source"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},")"),t(`
        autoCompleteRef`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"loadFinish"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"3000"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"valueParser"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(" e "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token string"},"'123'"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      source`),n("span",{class:"token punctuation"},","),t(`
      loadMore`),n("span",{class:"token punctuation"},","),t(`
      valueParser`),n("span",{class:"token punctuation"},","),t(`
      autoCompleteRef
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`

`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Z=S(`<h3 id="autocomplete-\u53C2\u6570" tabindex="-1">AutoComplete \u53C2\u6570 <a class="header-anchor" href="#autocomplete-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th><th>\u5168\u5C40\u914D\u7F6E\u9879</th></tr></thead><tbody><tr><td style="text-align:center;">source</td><td style="text-align:center;"><a href="#sourcetype"><code>SourceType</code></a></td><td style="text-align:center;">--</td><td style="text-align:center;">\u5FC5\u9009\uFF0C\u6709 searchFn \u7684\u60C5\u51B5\u4E0B\u53EF\u4EE5\u4E0D\u5FC5\u9009</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">allow-empty-value-search</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u5728\u7ED1\u5B9A\u7684\u8F93\u5165\u6846 value \u4E3A\u7A7A\u65F6\uFF0C\u662F\u5426\u8FDB\u884C\u641C\u7D22\u63D0\u793A\u64CD\u4F5C</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">append-to-body</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u4E0B\u62C9\u5F39\u51FA\u662F\u5426 append to body</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">position</td><td style="text-align:center;"><a href="#placement"><code>Placement</code></a></td><td style="text-align:center;"><code>[&#39;bottom&#39;]</code></td><td style="text-align:center;">\u53EF\u9009\uFF0C\u6307\u5B9A\u4E0B\u62C9\u6846\u4E0E\u8F93\u5165\u6846\u7684\u76F8\u5BF9\u4F4D\u7F6E</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u6307\u4EE4</td><td style="text-align:left;"><a href="#%E8%AE%BE%E7%BD%AE%E7%A6%81%E7%94%A8">\u8BBE\u7F6E\u7981\u7528</a></td><td></td></tr><tr><td style="text-align:center;">delay</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">300</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u53EA\u6709\u5728 delay \u65F6\u95F4\u7ECF\u8FC7\u540E\u5E76\u4E14\u672A\u8F93\u5165\u65B0\u503C\uFF0C\u624D\u505A\u641C\u7D22\u67E5\u8BE2\uFF08<code>ms</code>\uFF09</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">disabled-key</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u7981\u7528\u5355\u4E2A\u9009\u9879\uFF0C\u5F53\u4F20\u5165\u8D44\u6E90 source \u9009\u9879\u7C7B\u578B\u4E3A\u5BF9\u8C61\uFF0C\u6BD4\u5982\u8BBE\u7F6E\u4E3A&#39;disabled&#39;\uFF0C\u5219\u5F53\u5BF9\u8C61\u7684 disable \u5C5E\u6027\u4E3A true \u65F6\uFF0C\u6BD4\u5982{ label: xxx, disabled: true }\uFF0C\u8BE5\u9009\u9879\u5C06\u7981\u7528</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%95%B0%E6%8D%AE%E5%8C%B9%E9%85%8D%E6%96%B9%E6%B3%95">\u81EA\u5B9A\u4E49\u6570\u636E\u5339\u914D\u65B9\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">formatter</td><td style="text-align:center;"><code>(item: any) =&gt; string</code></td><td style="text-align:center;"><a href="#defaultFormatter"><code>defaultFormatter</code></a></td><td style="text-align:center;">\u53EF\u9009\uFF0C\u683C\u5F0F\u5316\u51FD\u6570</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%95%B0%E6%8D%AE%E5%8C%B9%E9%85%8D%E6%96%B9%E6%B3%95">\u81EA\u5B9A\u4E49\u6570\u636E\u5339\u914D\u65B9\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">is-searching</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u662F\u5426\u5728\u641C\u7D22\u4E2D\uFF0C\u7528\u4E8E\u63A7\u5236 searchingTemplate \u662F\u5426\u663E\u793A</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%95%B0%E6%8D%AE%E5%8C%B9%E9%85%8D%E6%96%B9%E6%B3%95">\u81EA\u5B9A\u4E49\u6570\u636E\u5339\u914D\u65B9\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">scene-type</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u503C\u4E3A &#39;select&#39;\u3001&#39;suggest&#39;</td><td style="text-align:left;"><a href="#%E5%90%AF%E7%94%A8%E6%87%92%E5%8A%A0%E8%BD%BD">\u542F\u7528\u61D2\u52A0\u8F7D</a></td><td></td></tr><tr><td style="text-align:center;">search-fn</td><td style="text-align:center;"><code>(term: string) =&gt; Array&lt;any&gt;</code></td><td style="text-align:center;"><a href="#defaultSearchFn"><code>defaultSearchFn</code></a></td><td style="text-align:center;">\u53EF\u9009\uFF0C\u81EA\u5B9A\u4E49\u641C\u7D22\u8FC7\u6EE4</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%95%B0%E6%8D%AE%E5%8C%B9%E9%85%8D%E6%96%B9%E6%B3%95">\u81EA\u5B9A\u4E49\u6570\u636E\u5339\u914D\u65B9\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">tips-text</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;\u6700\u8FD1\u8F93\u5165&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u63D0\u793A\u6587\u5B57</td><td style="text-align:left;"><a href="#%E8%AE%BE%E7%BD%AE%E7%A6%81%E7%94%A8">\u8BBE\u7F6E\u7981\u7528</a></td><td></td></tr><tr><td style="text-align:center;">latest-source</td><td style="text-align:center;"><code>Array&lt;any&gt;</code></td><td style="text-align:center;">--</td><td style="text-align:center;">\u53EF\u9009\uFF0C \u6700\u8FD1\u8F93\u5165</td><td style="text-align:left;"><a href="#%E6%9C%80%E8%BF%91%E8%BE%93%E5%85%A5">\u6700\u8FD1\u8F93\u5165</a></td><td></td></tr><tr><td style="text-align:center;">value-parser</td><td style="text-align:center;"><code>(item: any) =&gt; any</code></td><td style="text-align:center;"><a href="#defaultValueParse"><code>defaultValueParse</code></a></td><td style="text-align:center;">\u53EF\u9009\uFF0C \u5BF9\u9009\u4E2D\u540E\u6570\u636E\u8FDB\u884C\u5904\u7406</td><td style="text-align:left;"><a href="#%E5%90%AF%E7%94%A8%E6%87%92%E5%8A%A0%E8%BD%BD">\u542F\u7528\u61D2\u52A0\u8F7D</a></td><td></td></tr><tr><td style="text-align:center;">enable-lazy-load</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u662F\u5426\u5141\u8BB8\u61D2\u52A0\u8F7D</td><td style="text-align:left;"><a href="#%E5%90%AF%E7%94%A8%E6%87%92%E5%8A%A0%E8%BD%BD">\u542F\u7528\u61D2\u52A0\u8F7D</a></td><td></td></tr><tr><td style="text-align:center;">width</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">400</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u8C03\u6574\u5BBD\u5EA6\uFF08<code>px</code>\uFF09</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">show-animation</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u662F\u5426\u5F00\u542F\u52A8\u753B</td><td style="text-align:left;"></td><td>\u2714</td></tr></tbody></table><h3 id="autocomplete-\u4E8B\u4EF6" tabindex="-1">AutoComplete \u4E8B\u4EF6 <a class="header-anchor" href="#autocomplete-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">load-more</td><td style="text-align:center;"><code>function</code></td><td style="text-align:center;">\u61D2\u52A0\u8F7D\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u914D\u5408<code>enable-lazy-load</code>\u4F7F\u7528\uFF0C\u4F7F\u7528<code>$event.loadFinish()</code>\u5173\u95ED loading \u72B6\u6001\uFF0C\u5176\u4E2D$event \u4E3A AutoCompleteComponent \u7684\u5B9E\u4F8B</td><td style="text-align:left;"><a href="#%E5%90%AF%E7%94%A8%E6%87%92%E5%8A%A0%E8%BD%BD">\u542F\u7528\u61D2\u52A0\u8F7D</a></td></tr><tr><td style="text-align:center;">select-value</td><td style="text-align:center;"><code>function(value)</code></td><td style="text-align:center;">\u53EF\u9009\uFF0C\u9009\u62E9\u9009\u9879\u4E4B\u540E\u7684\u56DE\u8C03\u51FD\u6570</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">trans-input-focus-emit</td><td style="text-align:center;"><code>function</code></td><td style="text-align:center;">\u53EF\u9009\uFF0CInput focus \u65F6\u56DE\u8C03\u51FD\u6570</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h3 id="autocomplete-\u63D2\u69FD" tabindex="-1">AutoComplete \u63D2\u69FD <a class="header-anchor" href="#autocomplete-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u63D2\u69FD\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">item</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u81EA\u5B9A\u4E49\u5C55\u793A\u6A21\u677F\u3002slotProps\uFF1A{ index: \u4E0B\u6807\u7D22\u5F15, item: \u5F53\u524D\u9879\u5185\u5BB9 }\u3002</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A8%A1%E6%9D%BF%E5%B1%95%E7%A4%BA">\u81EA\u5B9A\u4E49\u6A21\u677F\u5C55\u793A</a></td></tr><tr><td style="text-align:center;">nothing</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u6CA1\u6709\u5339\u914D\u9879\u7684\u5C55\u793A\u7ED3\u679C\u3002slotProps\uFF1A\u8F93\u5165\u5185\u5BB9\u3002</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A8%A1%E6%9D%BF%E5%B1%95%E7%A4%BA">\u81EA\u5B9A\u4E49\u6A21\u677F\u5C55\u793A</a></td></tr><tr><td style="text-align:center;">searching</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u81EA\u5B9A\u4E49\u641C\u7D22\u4E2D\u663E\u793A\u6A21\u677F\u3002slotProps\uFF1A\u8F93\u5165\u5185\u5BB9\u3002</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%95%B0%E6%8D%AE%E5%8C%B9%E9%85%8D%E6%96%B9%E6%B3%95">\u81EA\u5B9A\u4E49\u6570\u636E\u5339\u914D\u65B9\u6CD5</a></td></tr></tbody></table><h1 id="\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">\u63A5\u53E3 &amp; \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h1><h3 id="sourcetype" tabindex="-1">SourceType <a class="header-anchor" href="#sourcetype" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">SourceItemObj</span> <span class="token punctuation">{</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  disabled<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">SourceType</span> <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token operator">|</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>SourceItemObj<span class="token operator">&gt;</span>
</code></pre></div><h3 id="placement" tabindex="-1">Placement <a class="header-anchor" href="#placement" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">Placement</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&#39;top&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;right&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;bottom&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;left&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;top-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;top-end&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;right-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;right-end&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;bottom-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;bottom-end&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;left-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;left-end&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="defaultsearchfn" tabindex="-1">defaultSearchFn <a class="header-anchor" href="#defaultsearchfn" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token function-variable function">defaultSearchFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>term<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">type</span> <span class="token class-name">ItemType</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> source<span class="token punctuation">.</span>value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> arr<span class="token operator">:</span> ItemType<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  source<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> formatter<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item <span class="token keyword">as</span> ItemType<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cur <span class="token operator">=</span> cur<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>term<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> arr <span class="token keyword">as</span> SourceType<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>term \u4E3A\u8F93\u5165\u7684\u5173\u952E\u5B57\u3002</p><h3 id="defaultformatter" tabindex="-1">defaultFormatter <a class="header-anchor" href="#defaultformatter" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token function-variable function">defaultFormatter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> SourceItemObj<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> item <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> item<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> item<span class="token operator">!==</span><span class="token keyword">null</span> <span class="token operator">?</span> item<span class="token punctuation">.</span>label <span class="token operator">||</span> item<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>item \u4E3A\u6570\u636E\u9879\u3002</p><h3 id="defaultvalueparse" tabindex="-1">defaultValueParse <a class="header-anchor" href="#defaultvalueparse" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token function-variable function">defaultValueParse</span> <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">;</span>
</code></pre></div><p>item \u4E3A\u6570\u636E\u9879\u3002</p>`,20);function nn(p,s,o,g,m,f){const c=h("render-demo-0"),d=h("demo"),r=h("render-demo-1"),l=h("render-demo-2"),u=h("render-demo-3"),a=h("render-demo-4"),e=h("render-demo-5");return J(),L("div",null,[q,E(d,{sourceCode:`<template>
  <d-auto-complete
    :delay="1000"
    :source="source"
    v-model="value"
    :allow-empty-value-search="allowEmptyValueSearch"
    :select-value="selectValue"
    :trans-input-focus-emit="transInputFocusEmit"
    :position="position"
    :width="420"
    :append-to-body="false"
  >
  </d-auto-complete>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref('')
    const allowEmptyValueSearch = ref(true)
    const source = ref([
      'C#',
      'C',
      'C++',
      'CPython',
      'Java',
      'JavaScript',
      'Go',
      'Python',
      'Ruby',
      'F#',
      'TypeScript',
      'SQL',
      'LiveScript',
      'CoffeeScript',
    ])
    const selectValue = (e)=>{
      console.log('selectValue',e)
    }
    const transInputFocusEmit = ()=>{
      console.log('transInputFocusEmit')
    }
    const position = ref(['bottom'])
    return {
      value,
      source,
      allowEmptyValueSearch,
      transInputFocusEmit,
      selectValue,
      position
    }
  }
})
<\/script>

<style>

</style>
`},{highlight:C(()=>[R]),default:C(()=>[E(c)]),_:1}),I,N,E(d,{sourceCode:`<template>
 <d-row type="flex">
    <d-col :flex="4">
      <d-auto-complete
        :source="source"
        v-model="value"
        :disabled="isDisabled"
      >
      </d-auto-complete>
    </d-col>
    <d-col :flex="2">
      <d-button id="primaryBtn" @click="toggle" style="margin-left:10px">
        {{ isDisabled ? 'Enable AutoComplete' : 'Disable AutoComplete' }}
      </d-button>
    </d-col>
  </d-row>

</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref('')
    const source = ref([
      'C#',
      'C',
      'C++',
      'CPython',
      'Java',
      'JavaScript',
      'Go',
      'Python',
      'Ruby',
      'F#',
      'TypeScript',
      'SQL',
      'LiveScript',
      'CoffeeScript',
    ])
    const isDisabled = ref(false)
    function toggle(){
      isDisabled.value= !isDisabled.value
    }
    return {
      value,
      source,
      isDisabled,
      toggle
    }
  }
})
<\/script>

<style>

</style>
`},{highlight:C(()=>[G]),default:C(()=>[E(r)]),_:1}),Q,$,E(d,{sourceCode:`<template>
  <d-auto-complete
    v-model="value"
    :search-fn="searchFn"
    disabled-key="disabled"
    is-searching
    :delay="1000"
    :formatter="formatter"
  >
    <template #searching="slotProps" >
      <div>
          {{\`searching: \${slotProps}\`}}
      </div>
    </template>
  </d-auto-complete>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref('')
    const mySource = ref([
      {
        label:'C#',
        disabled:false
      },{
        label:'C++',
        disabled:false
      },{
        label:'CPython',
        disabled:false
      },{
        label:'Java',
        disabled:false
      },{
        label:'JavaScript',
        disabled:false
      },{
        label:'Go',
        disabled:false
      },{
        label:'Ruby',
        disabled:false
      },{
        label:'F#',
        disabled:false
      },{
        label:'TypeScript',
        disabled:false
      },{
        label:'SQL',
        disabled:true
      },{
        label:'LiveScript',
        disabled:false
      },{
        label:'CoffeeScript',
        disabled:false
      }
    ])
    const formatter = (item) =>{
      return item.label;
    }
    //trem\uFF1Ainput\u8F93\u5165\u5185\u5BB9
    const searchFn =async (trem)=>{
      let arr = []
      await new Promise((resolve)=>{
        setTimeout(() => {
          resolve()
        }, 1000);
      })
      mySource.value.forEach((item) => {
        let cur = item.label
        cur = cur.toLowerCase()
        if (cur.startsWith(trem)) {
            arr.push(item)
        }
      })
      return arr
    }
    return {
      value,
      searchFn,
      formatter
    }
  }
})
<\/script>

<style>

</style>
`},{highlight:C(()=>[j]),default:C(()=>[E(l)]),_:1}),z,M,E(d,{sourceCode:`<template>
  <d-auto-complete
    :source="source"
    v-model="value"
  >
    <template #item="slotProps" >
      <div>
          \u7B2C{{slotProps.index}}\u9879: {{slotProps.item}}
      </div>
    </template>
    <template #nothing="slotProps" >
      <div>
          {{\`\u6CA1\u6709\u5339\u914D\u9879: \${slotProps}\`}}
      </div>
    </template>
  </d-auto-complete>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref('')
    const source = ref([
      'C#',
      'C',
      'C++',
      'CPython',
      'Java',
      'JavaScript',
      'Go',
      'Python',
      'Ruby',
      'F#',
      'TypeScript',
      'SQL',
      'LiveScript',
      'CoffeeScript',
    ])

    return {
      value,
      source
    }
  }
})
<\/script>

<style>

</style>
`},{highlight:C(()=>[U]),default:C(()=>[E(u)]),_:1}),W,O,E(d,{sourceCode:`<template>
  <d-auto-complete
    :source="source"
    v-model="value"
    :latest-source="latestSource"
  >
  </d-auto-complete>
</template>

<script>
import { defineComponent, ref,toRefs,getCurrentInstance } from 'vue'
export default defineComponent({
  setup() {
    const value = ref('')
    const latestSource = ref(['JavaScript','TypeScript'])
    const source = ref([
      'C#',
      'C',
      'C++',
      'CPython',
      'Java',
      'JavaScript',
      'Go',
      'Python',
      'Ruby',
      'F#',
      'TypeScript',
      'SQL',
      'LiveScript',
      'CoffeeScript',
    ])
    
    return {
      value,
      source,
      latestSource
    }
  }
})
<\/script>

<style>

</style>
`},{highlight:C(()=>[H]),default:C(()=>[E(a)]),_:1}),K,X,E(d,{sourceCode:`<template>
  <d-auto-complete
    ref="autoCompleteRef"
    :source="source"
    v-model="value"
    enable-lazy-load
    :load-more="loadMore"
    scene-type="select"
    :value-parser="valueParser"
  >
  </d-auto-complete>
</template>

<script>
import { defineComponent, ref,toRefs,getCurrentInstance } from 'vue'
export default defineComponent({
  setup() {
    const value = ref('')
    const source = ref([
      'C#',
      'C',
      'C++',
      'CPython',
      'Java',
      'JavaScript',
      'Go',
      'Python',
      'Ruby',
      'F#',
      'TypeScript',
      'SQL',
      'LiveScript',
      'CoffeeScript',
      'C1',
      'C2',
      'C3',
      'C4',
      'C5',
      'C6',
      'C7',
    ])
    const autoCompleteRef =ref(null)
    
    const loadMore = () => {
      setTimeout(() => {
        source.value.push('lazyData'+source.value.length)
        autoCompleteRef.value?.loadFinish()
      },3000)
    }
    const valueParser = (e) => {
      return e + '123'
    }
    return {
      value,
      source,
      loadMore,
      valueParser,
      autoCompleteRef
    }
  }
})
<\/script>

<style>

</style>
`},{highlight:C(()=>[Y]),default:C(()=>[E(e)]),_:1}),Z])}var en=V(T,[["render",nn]]);export{sn as __pageData,en as default};
