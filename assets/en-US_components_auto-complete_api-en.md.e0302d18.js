var B=Object.defineProperty;var E=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var V=(c,s,o)=>s in c?B(c,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):c[s]=o,b=(c,s)=>{for(var o in s||(s={}))F.call(s,o)&&V(c,o,s[o]);if(E)for(var o of E(s))P.call(s,o)&&V(c,o,s[o]);return c};import{_ as L,V as f,r as C,c as z,b as h,w as v,a as T,d as t,e as n,o as D}from"./app.7a28b7c1.js";const J={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:c,createVNode:s,openBlock:o,createElementBlock:m}=f;function g(i,u){const l=c("d-auto-complete");return o(),m("div",null,[s(l,{delay:1e3,source:i.source,modelValue:i.value,"onUpdate:modelValue":u[0]||(u[0]=a=>i.value=a),allowEmptyValueSearch:i.allowEmptyValueSearch,selectValue:i.selectValue,transInputFocusEmit:i.transInputFocusEmit,appendToBody:!0,appendToBodyDirections:i.appendToBodyDirections,dAutoCompleteWidth:450},null,8,["source","modelValue","allowEmptyValueSearch","selectValue","transInputFocusEmit","appendToBodyDirections"])])}const{defineComponent:y,ref:p}=f,d=y({setup(){const i=p(""),u=p(!0),l=p(["C#","C","C++","CPython","Java","JavaScript","Go","Python","Ruby","F#","TypeScript","SQL","LiveScript","CoffeeScript"]),a=()=>{console.log("selectValue")},e=()=>{console.log("transInputFocusEmit")},k=p({originX:"left",originY:"bottom",overlayX:"left",overlayY:"top"});return{value:i,source:l,allowEmptyValueSearch:u,transInputFocusEmit:e,selectValue:a,appendToBodyDirections:k}}});return b({render:g},d)}(),"render-demo-1":function(){const{resolveComponent:c,createVNode:s,withCtx:o,toDisplayString:m,createTextVNode:g,openBlock:y,createElementBlock:p}=f;function d(a,e){const k=c("d-auto-complete"),r=c("d-col"),S=c("d-button"),w=c("d-row");return y(),p("div",null,[s(w,{type:"flex",class:"docs-devui-row"},{default:o(()=>[s(r,{flex:4},{default:o(()=>[s(k,{source:a.source,modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=x=>a.value=x),disabled:a.isDisabled},null,8,["source","modelValue","disabled"])]),_:1}),s(r,{flex:2},{default:o(()=>[s(S,{id:"primaryBtn",onClick:a.toggle,style:{"margin-left":"10px"}},{default:o(()=>[g(m(a.isDisabled?"Enable AutoComplete":"Disable AutoComplete"),1)]),_:1},8,["onClick"])]),_:1})]),_:1})])}const{defineComponent:i,ref:u}=f,l=i({setup(){const a=u(""),e=u(["C#","C","C++","CPython","Java","JavaScript","Go","Python","Ruby","F#","TypeScript","SQL","LiveScript","CoffeeScript"]),k=u(!1);function r(){k.value=!k.value}return{value:a,source:e,isDisabled:k,toggle:r}}});return b({render:d},l)}(),"render-demo-2":function(){const{toDisplayString:c,createElementVNode:s,resolveComponent:o,withCtx:m,createVNode:g,openBlock:y,createElementBlock:p}=f;function d(a,e){const k=o("d-auto-complete");return y(),p("div",null,[g(k,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=r=>a.value=r),searchFn:a.searchFn,disabledKey:"disabled",isSearching:"",delay:1e3,formatter:a.formatter},{searchingTemplate:m(r=>[s("div",null,c(`searching: ${r}`),1)]),_:1},8,["modelValue","searchFn","formatter"])])}const{defineComponent:i,ref:u}=f,l=i({setup(){const a=u(""),e=u([{label:"C#",disabled:!1},{label:"C++",disabled:!1},{label:"CPython",disabled:!1},{label:"Java",disabled:!1},{label:"JavaScript",disabled:!1},{label:"Go",disabled:!1},{label:"Ruby",disabled:!1},{label:"F#",disabled:!1},{label:"TypeScript",disabled:!1},{label:"SQL",disabled:!0},{label:"LiveScript",disabled:!1},{label:"CoffeeScript",disabled:!1}]);return{value:a,searchFn:async S=>{let w=[];return await new Promise(x=>{setTimeout(()=>{x()},1e3)}),e.value.forEach(x=>{let _=x.label;_=_.toLowerCase(),_.startsWith(S)&&w.push(x)}),w},formatter:S=>S.label}}});return b({render:d},l)}(),"render-demo-3":function(){const{toDisplayString:c,createElementVNode:s,resolveComponent:o,withCtx:m,createVNode:g,openBlock:y,createElementBlock:p}=f;function d(a,e){const k=o("d-auto-complete");return y(),p("div",null,[g(k,{source:a.source,modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=r=>a.value=r)},{itemTemplate:m(r=>[s("div",null," No."+c(r.index)+": "+c(r.item),1)]),noResultItemTemplate:m(r=>[s("div",null,c(`No any results match : ${r}`),1)]),_:1},8,["source","modelValue"])])}const{defineComponent:i,ref:u}=f,l=i({setup(){const a=u(""),e=u(["C#","C","C++","CPython","Java","JavaScript","Go","Python","Ruby","F#","TypeScript","SQL","LiveScript","CoffeeScript"]);return{value:a,source:e}}});return b({render:d},l)}(),"render-demo-4":function(){const{resolveComponent:c,createVNode:s,openBlock:o,createElementBlock:m}=f;function g(l,a){const e=c("d-auto-complete");return o(),m("div",null,[s(e,{source:l.source,modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=k=>l.value=k),latestSource:l.latestSource},null,8,["source","modelValue","latestSource"])])}const{defineComponent:y,ref:p,toRefs:d,getCurrentInstance:i}=f,u=y({setup(){const l=p(""),a=p(["JavaScript","TypeScript"]),e=p(["C#","C","C++","CPython","Java","JavaScript","Go","Python","Ruby","F#","TypeScript","SQL","LiveScript","CoffeeScript"]);return{value:l,source:e,latestSource:a}}});return b({render:g},u)}(),"render-demo-5":function(){const{resolveComponent:c,createVNode:s,openBlock:o,createElementBlock:m}=f;function g(l,a){const e=c("d-auto-complete");return o(),m("div",null,[s(e,{ref:"autoCompleteRef",source:l.source,modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=k=>l.value=k),enableLazyLoad:"","load-more":l.loadMore},null,8,["source","modelValue","load-more"])])}const{defineComponent:y,ref:p,toRefs:d,getCurrentInstance:i}=f,u=y({setup(){const l=p(""),a=p(["C#","C","C++","CPython","Java","JavaScript","Go","Python","Ruby","F#","TypeScript","SQL","LiveScript","CoffeeScript","C1","C2","C3","C4","C5","C6","C7"]),e=p(null);return{value:l,source:a,loadMore:()=>{setTimeout(()=>{var r;a.value.push("lazyData"+a.value.length),(r=e.value)==null||r.loadFinish()},3e3)},autoCompleteRef:e}}});return b({render:g},u)}()}},st='{"title":"AutoComplete","description":"","frontmatter":{},"headers":[{"level":3,"title":"When To Use","slug":"when-to-use"},{"level":3,"title":"Basic usage","slug":"basic-usage"},{"level":3,"title":"Disabled","slug":"disabled"},{"level":3,"title":"Customized data matching method","slug":"customized-data-matching-method"},{"level":3,"title":"Customized template display","slug":"customized-template-display"},{"level":3,"title":"Latest input","slug":"latest-input"},{"level":3,"title":"Enable lazy load","slug":"enable-lazy-load"},{"level":3,"title":"d-auto-complete","slug":"d-auto-complete"},{"level":3,"title":"defaultSearchFn","slug":"defaultsearchfn"},{"level":3,"title":"defaultFormatter","slug":"defaultformatter"},{"level":3,"title":"defaultValueParse","slug":"defaultvalueparse"}],"relativePath":"en-US/components/auto-complete/api-en.md","lastUpdated":1645614555494}',R=T('<h1 id="autocomplete" tabindex="-1">AutoComplete <a class="header-anchor" href="#autocomplete" aria-hidden="true">#</a></h1><p>Guess what users may need when entering.</p><h3 id="when-to-use" tabindex="-1">When To Use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>When you need to deduce the content that a user may want to enter according to some characters entered by the user.</p><h3 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3><p>Set source to the data source that is automatically completed.</p>',6),q=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-auto-complete")]),n(`
    `),t("span",{class:"token attr-name"},":delay"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("1000"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":source"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("source"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":allowEmptyValueSearch"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("allowEmptyValueSearch"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":selectValue"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("selectValue"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":transInputFocusEmit"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("transInputFocusEmit"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":appendToBody"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":appendToBodyDirections"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("appendToBodyDirections"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":dAutoCompleteWidth"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("450"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-auto-complete")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" allowEmptyValueSearch "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" source "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token string"},"'C#'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'C'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'C++'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'CPython'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'Java'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'JavaScript'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'Go'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'Python'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'Ruby'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'F#'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'TypeScript'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'SQL'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'LiveScript'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'CoffeeScript'"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"selectValue"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token operator"},"=>"),t("span",{class:"token punctuation"},"{"),n(`
      console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'selectValue'"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"transInputFocusEmit"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token operator"},"=>"),t("span",{class:"token punctuation"},"{"),n(`
      console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'transInputFocusEmit'"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" appendToBodyDirections "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token literal-property property"},"originX"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'left'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"originY"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'bottom'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"overlayX"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'left'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"overlayY"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'top'"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      value`),t("span",{class:"token punctuation"},","),n(`
      source`),t("span",{class:"token punctuation"},","),n(`
      allowEmptyValueSearch`),t("span",{class:"token punctuation"},","),n(`
      transInputFocusEmit`),t("span",{class:"token punctuation"},","),n(`
      selectValue`),t("span",{class:"token punctuation"},","),n(`
      appendToBodyDirections
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},`

`)]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),I=t("h3",{id:"disabled",tabindex:"-1"},[n("Disabled "),t("a",{class:"header-anchor",href:"#disabled","aria-hidden":"true"},"#")],-1),N=t("p",null,"You can set the disabled parameter to disable it in the text box and disable the options in the drop-down list box by using the disabledKey parameter.",-1),A=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
 `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-row")]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("flex"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("docs-devui-row"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":flex"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("4"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-auto-complete")]),n(`
        `),t("span",{class:"token attr-name"},":source"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("source"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":disabled"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("isDisabled"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-auto-complete")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":flex"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"id"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primaryBtn"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("toggle"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-left"),t("span",{class:"token punctuation"},":"),n("10px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
        {{ isDisabled ? 'Enable AutoComplete' : 'Disable AutoComplete' }}
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-row")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" source "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token string"},"'C#'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'C'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'C++'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'CPython'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'Java'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'JavaScript'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'Go'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'Python'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'Ruby'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'F#'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'TypeScript'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'SQL'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'LiveScript'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'CoffeeScript'"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" isDisabled "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token function"},"toggle"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"{"),n(`
      isDisabled`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token operator"},"="),n(),t("span",{class:"token operator"},"!"),n("isDisabled"),t("span",{class:"token punctuation"},"."),n(`value
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      value`),t("span",{class:"token punctuation"},","),n(`
      source`),t("span",{class:"token punctuation"},","),n(`
      isDisabled`),t("span",{class:"token punctuation"},","),n(`
      toggle
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},`

`)]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),G=t("h3",{id:"customized-data-matching-method",tabindex:"-1"},[n("Customized data matching method "),t("a",{class:"header-anchor",href:"#customized-data-matching-method","aria-hidden":"true"},"#")],-1),O=t("p",null,"You can use searchFn to customize the data matching method and the returned data format.",-1),Q=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-auto-complete")]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":searchFn"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("searchFn"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"disabledKey"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("disabled"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"isSearching"),n(`
    `),t("span",{class:"token attr-name"},":delay"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("1000"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":formatter"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("formatter"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#searchingTemplate"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("slotProps"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("\n          {{`searching: ${slotProps}`}}\n      "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-auto-complete")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" mySource "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),t("span",{class:"token string"},"'C#'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),t("span",{class:"token boolean"},"false"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),t("span",{class:"token string"},"'C++'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),t("span",{class:"token boolean"},"false"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),t("span",{class:"token string"},"'CPython'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),t("span",{class:"token boolean"},"false"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),t("span",{class:"token string"},"'Java'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),t("span",{class:"token boolean"},"false"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),t("span",{class:"token string"},"'JavaScript'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),t("span",{class:"token boolean"},"false"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),t("span",{class:"token string"},"'Go'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),t("span",{class:"token boolean"},"false"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),t("span",{class:"token string"},"'Ruby'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),t("span",{class:"token boolean"},"false"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),t("span",{class:"token string"},"'F#'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),t("span",{class:"token boolean"},"false"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),t("span",{class:"token string"},"'TypeScript'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),t("span",{class:"token boolean"},"false"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),t("span",{class:"token string"},"'SQL'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),t("span",{class:"token boolean"},"true"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),t("span",{class:"token string"},"'LiveScript'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),t("span",{class:"token boolean"},"false"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),t("span",{class:"token string"},"'CoffeeScript'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),t("span",{class:"token boolean"},"false"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"formatter"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"item"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"return"),n(" item"),t("span",{class:"token punctuation"},"."),n("label"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"searchFn"),n(),t("span",{class:"token operator"},"="),t("span",{class:"token keyword"},"async"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"trem"),t("span",{class:"token punctuation"},")"),t("span",{class:"token operator"},"=>"),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"let"),n(" arr "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),n(`
      `),t("span",{class:"token keyword"},"await"),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Promise"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"resolve"),t("span",{class:"token punctuation"},")"),t("span",{class:"token operator"},"=>"),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token function"},"setTimeout"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token function"},"resolve"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"1000"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
      mySource`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"forEach"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"item"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token keyword"},"let"),n(" cur "),t("span",{class:"token operator"},"="),n(" item"),t("span",{class:"token punctuation"},"."),n(`label
        cur `),t("span",{class:"token operator"},"="),n(" cur"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"toLowerCase"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(`
        `),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("cur"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"startsWith"),t("span",{class:"token punctuation"},"("),n("trem"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
            arr`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),n("item"),t("span",{class:"token punctuation"},")"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
      `),t("span",{class:"token keyword"},"return"),n(` arr
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      value`),t("span",{class:"token punctuation"},","),n(`
      searchFn`),t("span",{class:"token punctuation"},","),n(`
      formatter
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},`

`)]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),W=t("h3",{id:"customized-template-display",tabindex:"-1"},[n("Customized template display "),t("a",{class:"header-anchor",href:"#customized-template-display","aria-hidden":"true"},"#")],-1),$=t("p",null,"Use itemTemplate and noResultItemTemplate to customize the drop-down list box and display no matching message.",-1),U=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-auto-complete")]),n(`
    `),t("span",{class:"token attr-name"},":source"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("source"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#itemTemplate"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("slotProps"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
          No.{{slotProps.index}}: {{slotProps.item}}
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#noResultItemTemplate"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("slotProps"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("\n          {{`No any results match : ${slotProps}`}}\n      "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-auto-complete")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" source "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token string"},"'C#'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'C'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'C++'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'CPython'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'Java'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'JavaScript'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'Go'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'Python'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'Ruby'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'F#'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'TypeScript'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'SQL'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'LiveScript'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'CoffeeScript'"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      value`),t("span",{class:"token punctuation"},","),n(`
      source
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},`

`)]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),j=t("h3",{id:"latest-input",tabindex:"-1"},[n("Latest input "),t("a",{class:"header-anchor",href:"#latest-input","aria-hidden":"true"},"#")],-1),M=t("p",null,"Set latestSource to the latest input.",-1),Y=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-auto-complete")]),n(`
    `),t("span",{class:"token attr-name"},":source"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("source"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":latestSource"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("latestSource"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-auto-complete")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref"),t("span",{class:"token punctuation"},","),n("toRefs"),t("span",{class:"token punctuation"},","),n("getCurrentInstance "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" latestSource "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'JavaScript'"),t("span",{class:"token punctuation"},","),t("span",{class:"token string"},"'TypeScript'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" source "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token string"},"'C#'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'C'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'C++'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'CPython'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'Java'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'JavaScript'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'Go'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'Python'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'Ruby'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'F#'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'TypeScript'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'SQL'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'LiveScript'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'CoffeeScript'"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      value`),t("span",{class:"token punctuation"},","),n(`
      source`),t("span",{class:"token punctuation"},","),n(`
      latestSource
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},`

`)]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),X=t("h3",{id:"enable-lazy-load",tabindex:"-1"},[n("Enable lazy load "),t("a",{class:"header-anchor",href:"#enable-lazy-load","aria-hidden":"true"},"#")],-1),K=t("p",null,"enableLazyLoad: enables lazy loading.",-1),H=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-auto-complete")]),n(`
    `),t("span",{class:"token attr-name"},"ref"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("autoCompleteRef"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":source"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("source"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"enableLazyLoad"),n(`
    `),t("span",{class:"token attr-name"},":load-more"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("loadMore"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-auto-complete")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref"),t("span",{class:"token punctuation"},","),n("toRefs"),t("span",{class:"token punctuation"},","),n("getCurrentInstance "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" source "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token string"},"'C#'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'C'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'C++'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'CPython'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'Java'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'JavaScript'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'Go'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'Python'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'Ruby'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'F#'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'TypeScript'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'SQL'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'LiveScript'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'CoffeeScript'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'C1'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'C2'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'C3'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'C4'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'C5'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'C6'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'C7'"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" autoCompleteRef "),t("span",{class:"token operator"},"="),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),n(`
    
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"loadMore"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token function"},"setTimeout"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
        source`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'lazyData'"),t("span",{class:"token operator"},"+"),n("source"),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},"."),n("length"),t("span",{class:"token punctuation"},")"),n(`
        autoCompleteRef`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token operator"},"?."),t("span",{class:"token function"},"loadFinish"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),t("span",{class:"token number"},"3000"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      value`),t("span",{class:"token punctuation"},","),n(`
      source`),t("span",{class:"token punctuation"},","),n(`
      loadMore`),t("span",{class:"token punctuation"},","),n(`
      autoCompleteRef
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},`

`)]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),Z=T(`<h3 id="d-auto-complete" tabindex="-1">d-auto-complete <a class="header-anchor" href="#d-auto-complete" aria-hidden="true">#</a></h3><p>d-auto-complete Parameter</p><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:center;">Description</th><th style="text-align:left;">Jump to Demo</th><th>Global Config</th></tr></thead><tbody><tr><td style="text-align:center;">source</td><td style="text-align:center;"><code>Array&lt;any&gt;</code></td><td style="text-align:center;">--</td><td style="text-align:center;">Required. This parameter is optional if searchFn is specified.</td><td style="text-align:left;"><a href="#Basic-usage">Basic usage</a></td><td></td></tr><tr><td style="text-align:center;">allowEmptyValueSearch</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Optional. indicates whether to display a search message when the bound text box value is empty.</td><td style="text-align:left;"><a href="#Basic-usage">Basic usage</a></td><td></td></tr><tr><td style="text-align:center;">appendToBody</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Optional. Whether to append to body is displayed in the drop-down list box.</td><td style="text-align:left;"><a href="#Basic-usage">Basic usage</a></td><td></td></tr><tr><td style="text-align:center;">appendToBodyDirections</td><td style="text-align:center;"><code>Object as PropType&lt;ConnectionPosition&gt;</code></td><td style="text-align:center;"><code>{originX: &#39;left&#39;,originY: &#39;bottom&#39;,overlayX: &#39;left&#39;,overlayY: &#39;top&#39;,}</code></td><td style="text-align:center;">Optional. Specify the relative position of the drop-down box and the input box. for details about ConnectionPosition, see Overlay</td><td style="text-align:left;"><a href="#Basic-usage">Basic usage</a></td><td></td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Optional. Indicating whether to disable commands.</td><td style="text-align:left;"><a href="#Disabled">Disabled</a></td><td></td></tr><tr><td style="text-align:center;">delay</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">300</td><td style="text-align:center;">Optional. The search is performed only after the delay time elapses and a new value is entered. (ms)</td><td style="text-align:left;"><a href="#Basic-usage">Basic usage</a></td><td></td></tr><tr><td style="text-align:center;">disabledKey</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:center;">Optional. Disable a single option. If the input resource source option type is an object, for example, disabled, and the disable attribute of the object is true, for example, {label: xxx, disabled: true}, this option will be disabled</td><td style="text-align:left;"><a href="#Customized-data-matching-method">Customized data matching method</a></td><td></td></tr><tr><td style="text-align:center;">itemTemplate</td><td style="text-align:center;"><code>slot</code></td><td style="text-align:center;">--</td><td style="text-align:center;">Optional. Customized display template</td><td style="text-align:left;"><a href="#Customized-template-display">Customized template display</a></td><td></td></tr><tr><td style="text-align:center;">noResultItemTemplate</td><td style="text-align:center;"><code>slot</code></td><td style="text-align:center;">--</td><td style="text-align:center;">Optional. No matching item is displayed.</td><td style="text-align:left;"><a href="#Customized-template-display">Customized template display</a></td><td></td></tr><tr><td style="text-align:center;">formatter</td><td style="text-align:center;"><code>(item: any) =&gt; string</code></td><td style="text-align:center;"><a href="#defaultFormatter">defaultFormatter</a></td><td style="text-align:center;">Optional. Formatting function</td><td style="text-align:left;"><a href="#Customized-data-matching-method">Customized data matching method</a></td><td></td></tr><tr><td style="text-align:center;">isSearching</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Optional. indicating whether the search template is displayed.</td><td style="text-align:left;"><a href="#Customized-data-matching-method">Customized data matching method</a></td><td></td></tr><tr><td style="text-align:center;">searchingTemplate</td><td style="text-align:center;"><code>slot</code></td><td style="text-align:center;">--</td><td style="text-align:center;">Optional. The template is displayed in customized search.</td><td style="text-align:left;"><a href="#Customized-data-matching-method">Customized data matching method</a></td><td></td></tr><tr><td style="text-align:center;">sceneType</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:center;">Optional. The value can be select or suggestion.</td><td style="text-align:left;"><a href="#Enable-lazy-load">Enable lazy load</a></td><td></td></tr><tr><td style="text-align:center;">searchFn</td><td style="text-align:center;"><code>(term: string) =&gt; Array&lt;any&gt;</code></td><td style="text-align:center;"><a href="#defaultSearchFn">defaultSearchFn</a></td><td style="text-align:center;">Optional. Customized search filtering</td><td style="text-align:left;"><a href="#Customized-data-matching-method">Customized data matching method</a></td><td></td></tr><tr><td style="text-align:center;">tipsText</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;Latest input&#39;</td><td style="text-align:center;">Optional. prompt text</td><td style="text-align:left;"><a href="#Disabled">Disabled</a></td><td></td></tr><tr><td style="text-align:center;">latestSource</td><td style="text-align:center;"><code>Array&lt;any&gt;</code></td><td style="text-align:center;">--</td><td style="text-align:center;">Optional. Latest input</td><td style="text-align:left;"><a href="#Latest-input">Latest input</a></td><td></td></tr><tr><td style="text-align:center;">valueParser</td><td style="text-align:center;"><code>(item: any) =&gt; any</code></td><td style="text-align:center;"><a href="#defaultValueParse">defaultValueParse</a></td><td style="text-align:center;">(optional) Process selected data</td><td style="text-align:left;"><a href="#Enable-lazy-load">Enable lazy load</a></td><td></td></tr><tr><td style="text-align:center;">enableLazyLoad</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Optional. Whether lazy loading is allowed</td><td style="text-align:left;"><a href="#Enable-lazy-load">Enable lazy load</a></td><td></td></tr><tr><td style="text-align:center;">dAutoCompleteWidth</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">--</td><td style="text-align:center;">Optional. Adjust the width (px)</td><td style="text-align:left;"><a href="#Basic-usage">Basic usage</a></td><td></td></tr><tr><td style="text-align:center;">showAnimation</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">optional. Whether to enable animation.</td><td style="text-align:left;"></td><td>\u2714</td></tr></tbody></table><p>dAutoComplete Event</p><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Description</th><th style="text-align:left;">Jump to Demo</th></tr></thead><tbody><tr><td style="text-align:center;">loadMore</td><td style="text-align:center;"><code>EventEmitter&lt;ComponentRef&lt;AutoCompletePopupComponent&gt;&gt;</code></td><td style="text-align:center;">: optional. It is a lazy loading trigger event. It is used together with enableLazyLoad. <code>$event.loadFinish()</code> is used to disable the loading status. $event is the instance of the pop-up component AutoCompletePopupComponent</td><td style="text-align:left;"><a href="#Enable-lazy-load">Enable lazy load</a></td></tr><tr><td style="text-align:center;">selectValue</td><td style="text-align:center;"><code>EventEmitter&lt;any&gt;</code></td><td style="text-align:center;">(optional), callback function after selecting an option\u6570</td><td style="text-align:left;"><a href="#Basic-usage">Basic usage</a></td></tr><tr><td style="text-align:center;">transInputFocusEmit</td><td style="text-align:center;"><code>EventEmitter&lt;any&gt;</code></td><td style="text-align:center;">(optional). Callback function for input focus</td><td style="text-align:left;"><a href="#Basic-usage">Basic usage</a></td></tr></tbody></table><h1 id="interface-type-definition" tabindex="-1">Interface &amp; Type Definition <a class="header-anchor" href="#interface-type-definition" aria-hidden="true">#</a></h1><h3 id="defaultsearchfn" tabindex="-1">defaultSearchFn <a class="header-anchor" href="#defaultsearchfn" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token function-variable function">defaultSearchFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>term<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
          <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token function">formatter</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
          cur <span class="token operator">=</span> cur<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token keyword">if</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>term<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>term indicates the entered keyword.</p><h3 id="defaultformatter" tabindex="-1">defaultFormatter <a class="header-anchor" href="#defaultformatter" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token function-variable function">defaultFormatter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>item <span class="token operator">?</span> item<span class="token punctuation">.</span>label <span class="token operator">||</span> item<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>item indicates a data item.</p><h3 id="defaultvalueparse" tabindex="-1">defaultValueParse <a class="header-anchor" href="#defaultvalueparse" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token function-variable function">defaultValueParse</span> <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">;</span>
</code></pre></div><p>item indicates a data item.</p>`,15);function tt(c,s,o,m,g,y){const p=C("render-demo-0"),d=C("demo"),i=C("render-demo-1"),u=C("render-demo-2"),l=C("render-demo-3"),a=C("render-demo-4"),e=C("render-demo-5");return D(),z("div",null,[R,h(d,{sourceCode:`<template>
  <d-auto-complete
    :delay="1000"
    :source="source"
    v-model="value"
    :allowEmptyValueSearch="allowEmptyValueSearch"
    :selectValue="selectValue"
    :transInputFocusEmit="transInputFocusEmit"
    :appendToBody="true"
    :appendToBodyDirections="appendToBodyDirections"
    :dAutoCompleteWidth="450"
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
    const selectValue = ()=>{
      console.log('selectValue')
    }
    const transInputFocusEmit = ()=>{
      console.log('transInputFocusEmit')
    }
    const appendToBodyDirections = ref({
      originX: 'left',
      originY: 'bottom',
      overlayX: 'left',
      overlayY: 'top',
    })
    return {
      value,
      source,
      allowEmptyValueSearch,
      transInputFocusEmit,
      selectValue,
      appendToBodyDirections
    }
  }
})
<\/script>

<style>

</style>
`},{highlight:v(()=>[q]),default:v(()=>[h(p)]),_:1}),I,N,h(d,{sourceCode:`<template>
 <d-row type="flex" class="docs-devui-row">
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
`},{highlight:v(()=>[A]),default:v(()=>[h(i)]),_:1}),G,O,h(d,{sourceCode:`<template>
  <d-auto-complete
    v-model="value"
    :searchFn="searchFn"
    disabledKey="disabled"
    isSearching
    :delay="1000"
    :formatter="formatter"
  >
    <template #searchingTemplate="slotProps" >
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
`},{highlight:v(()=>[Q]),default:v(()=>[h(u)]),_:1}),W,$,h(d,{sourceCode:`<template>
  <d-auto-complete
    :source="source"
    v-model="value"
  >
    <template #itemTemplate="slotProps" >
      <div>
          No.{{slotProps.index}}: {{slotProps.item}}
      </div>
    </template>
    <template #noResultItemTemplate="slotProps" >
      <div>
          {{\`No any results match : \${slotProps}\`}}
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
`},{highlight:v(()=>[U]),default:v(()=>[h(l)]),_:1}),j,M,h(d,{sourceCode:`<template>
  <d-auto-complete
    :source="source"
    v-model="value"
    :latestSource="latestSource"
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
`},{highlight:v(()=>[Y]),default:v(()=>[h(a)]),_:1}),X,K,h(d,{sourceCode:`<template>
  <d-auto-complete
    ref="autoCompleteRef"
    :source="source"
    v-model="value"
    enableLazyLoad
    :load-more="loadMore"
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
    return {
      value,
      source,
      loadMore,
      autoCompleteRef
    }
  }
})
<\/script>

<style>

</style>
`},{highlight:v(()=>[H]),default:v(()=>[h(e)]),_:1}),Z])}var et=L(J,[["render",tt]]);export{st as __pageData,et as default};
