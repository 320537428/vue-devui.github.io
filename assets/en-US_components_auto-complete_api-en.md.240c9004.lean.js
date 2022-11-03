var z=Object.defineProperty;var P=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var V=(c,s,o)=>s in c?z(c,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):c[s]=o,C=(c,s)=>{for(var o in s||(s={}))F.call(s,o)&&V(c,o,s[o]);if(P)for(var o of P(s))B.call(s,o)&&V(c,o,s[o]);return c};import{_ as T,V as f,r as x,o as L,c as D,a as h,w as v,b as E,d as n,e as t}from"./app.a70f02bc.js";const J={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:c,createVNode:s,openBlock:o,createElementBlock:g}=f;function m(i,u){const p=c("d-auto-complete");return o(),g("div",null,[s(p,{delay:1e3,source:i.source,modelValue:i.value,"onUpdate:modelValue":u[0]||(u[0]=a=>i.value=a),"allow-empty-value-search":i.allowEmptyValueSearch,"select-value":i.selectValue,"trans-input-focus-emit":i.transInputFocusEmit,position:i.position,width:420,"append-to-body":!0},null,8,["source","modelValue","allow-empty-value-search","select-value","trans-input-focus-emit","position"])])}const{defineComponent:y,ref:l}=f,d=y({setup(){const i=l(""),u=l(!0),p=l(["C#","C","C++","CPython","Java","JavaScript","Go","Python","Ruby","F#","TypeScript","SQL","LiveScript","CoffeeScript"]),a=()=>{console.log("selectValue")},e=()=>{console.log("transInputFocusEmit")},r=l(["bottom"]);return{value:i,source:p,allowEmptyValueSearch:u,transInputFocusEmit:e,selectValue:a,position:r}}});return C({render:m},d)}(),"render-demo-1":function(){const{resolveComponent:c,createVNode:s,withCtx:o,toDisplayString:g,createTextVNode:m,openBlock:y,createElementBlock:l}=f;function d(a,e){const r=c("d-auto-complete"),k=c("d-col"),b=c("d-button"),S=c("d-row");return y(),l("div",null,[s(S,{type:"flex"},{default:o(()=>[s(k,{flex:4},{default:o(()=>[s(r,{source:a.source,modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=w=>a.value=w),disabled:a.isDisabled},null,8,["source","modelValue","disabled"])]),_:1}),s(k,{flex:2},{default:o(()=>[s(b,{id:"primaryBtn",onClick:a.toggle,style:{"margin-left":"10px"}},{default:o(()=>[m(g(a.isDisabled?"Enable AutoComplete":"Disable AutoComplete"),1)]),_:1},8,["onClick"])]),_:1})]),_:1})])}const{defineComponent:i,ref:u}=f,p=i({setup(){const a=u(""),e=u(["C#","C","C++","CPython","Java","JavaScript","Go","Python","Ruby","F#","TypeScript","SQL","LiveScript","CoffeeScript"]),r=u(!1);function k(){r.value=!r.value}return{value:a,source:e,isDisabled:r,toggle:k}}});return C({render:d},p)}(),"render-demo-2":function(){const{toDisplayString:c,createElementVNode:s,resolveComponent:o,withCtx:g,createVNode:m,openBlock:y,createElementBlock:l}=f;function d(a,e){const r=o("d-auto-complete");return y(),l("div",null,[m(r,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=k=>a.value=k),"search-fn":a.searchFn,"disabled-key":"disabled","is-searching":"",delay:1e3,formatter:a.formatter},{searching:g(k=>[s("div",null,c(`searching: ${k}`),1)]),_:1},8,["modelValue","search-fn","formatter"])])}const{defineComponent:i,ref:u}=f,p=i({setup(){const a=u(""),e=u([{label:"C#",disabled:!1},{label:"C++",disabled:!1},{label:"CPython",disabled:!1},{label:"Java",disabled:!1},{label:"JavaScript",disabled:!1},{label:"Go",disabled:!1},{label:"Ruby",disabled:!1},{label:"F#",disabled:!1},{label:"TypeScript",disabled:!1},{label:"SQL",disabled:!0},{label:"LiveScript",disabled:!1},{label:"CoffeeScript",disabled:!1}]);return{value:a,searchFn:async b=>{let S=[];return await new Promise(w=>{setTimeout(()=>{w()},1e3)}),e.value.forEach(w=>{let _=w.label;_=_.toLowerCase(),_.startsWith(b)&&S.push(w)}),S},formatter:b=>b.label}}});return C({render:d},p)}(),"render-demo-3":function(){const{toDisplayString:c,createElementVNode:s,resolveComponent:o,withCtx:g,createVNode:m,openBlock:y,createElementBlock:l}=f;function d(a,e){const r=o("d-auto-complete");return y(),l("div",null,[m(r,{source:a.source,modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=k=>a.value=k)},{item:g(k=>[s("div",null," No."+c(k.index)+": "+c(k.item),1)]),nothing:g(k=>[s("div",null,c(`No any results match : ${k}`),1)]),_:1},8,["source","modelValue"])])}const{defineComponent:i,ref:u}=f,p=i({setup(){const a=u(""),e=u(["C#","C","C++","CPython","Java","JavaScript","Go","Python","Ruby","F#","TypeScript","SQL","LiveScript","CoffeeScript"]);return{value:a,source:e}}});return C({render:d},p)}(),"render-demo-4":function(){const{resolveComponent:c,createVNode:s,openBlock:o,createElementBlock:g}=f;function m(p,a){const e=c("d-auto-complete");return o(),g("div",null,[s(e,{source:p.source,modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=r=>p.value=r),"latest-source":p.latestSource},null,8,["source","modelValue","latest-source"])])}const{defineComponent:y,ref:l,toRefs:d,getCurrentInstance:i}=f,u=y({setup(){const p=l(""),a=l(["JavaScript","TypeScript"]),e=l(["C#","C","C++","CPython","Java","JavaScript","Go","Python","Ruby","F#","TypeScript","SQL","LiveScript","CoffeeScript"]);return{value:p,source:e,latestSource:a}}});return C({render:m},u)}(),"render-demo-5":function(){const{resolveComponent:c,createVNode:s,openBlock:o,createElementBlock:g}=f;function m(p,a){const e=c("d-auto-complete");return o(),g("div",null,[s(e,{ref:"autoCompleteRef",source:p.source,modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=r=>p.value=r),"enable-lazy-load":"","load-more":p.loadMore,"scene-type":"select","value-parser":p.valueParser},null,8,["source","modelValue","load-more","value-parser"])])}const{defineComponent:y,ref:l,toRefs:d,getCurrentInstance:i}=f,u=y({setup(){const p=l(""),a=l(["C#","C","C++","CPython","Java","JavaScript","Go","Python","Ruby","F#","TypeScript","SQL","LiveScript","CoffeeScript","C1","C2","C3","C4","C5","C6","C7"]),e=l(null);return{value:p,source:a,loadMore:()=>{setTimeout(()=>{var b;a.value.push("lazyData"+a.value.length),(b=e.value)==null||b.loadFinish()},3e3)},valueParser:b=>b+"123",autoCompleteRef:e}}});return C({render:m},u)}()}},sn='{"title":"AutoComplete","description":"","frontmatter":{},"headers":[{"level":3,"title":"When To Use","slug":"when-to-use"},{"level":3,"title":"Basic usage","slug":"basic-usage"},{"level":3,"title":"Disabled","slug":"disabled"},{"level":3,"title":"Customized data matching method","slug":"customized-data-matching-method"},{"level":3,"title":"Customized template display","slug":"customized-template-display"},{"level":3,"title":"Latest input","slug":"latest-input"},{"level":3,"title":"Enable lazy load","slug":"enable-lazy-load"},{"level":3,"title":"AutoComplete Parameter","slug":"autocomplete-parameter"},{"level":3,"title":"AutoComplete Event","slug":"autocomplete-event"},{"level":3,"title":"AutoComplete slots","slug":"autocomplete-slots"},{"level":3,"title":"SourceType","slug":"sourcetype"},{"level":3,"title":"Placement","slug":"placement"},{"level":3,"title":"defaultSearchFn","slug":"defaultsearchfn"},{"level":3,"title":"defaultFormatter","slug":"defaultformatter"},{"level":3,"title":"defaultValueParse","slug":"defaultvalueparse"}],"relativePath":"en-US/components/auto-complete/api-en.md","lastUpdated":1662171945351}',q=E('<h1 id="autocomplete" tabindex="-1">AutoComplete <a class="header-anchor" href="#autocomplete" aria-hidden="true">#</a></h1><p>Guess what users may need when entering.</p><h3 id="when-to-use" tabindex="-1">When To Use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>When you need to deduce the content that a user may want to enter according to some characters entered by the user.</p><h3 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3><p>Set source to the data source that is automatically completed.</p>',6),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-auto-complete")]),t(`
    `),n("span",{class:"token attr-name"},":delay"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1000"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("source"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":allow-empty-value-search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("allowEmptyValueSearch"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":select-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("selectValue"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":trans-input-focus-emit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("transInputFocusEmit"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("position"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("420"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":append-to-body"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
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
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"selectValue"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectValue'"),n("span",{class:"token punctuation"},")"),t(`
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
`)])])],-1),N=n("h3",{id:"disabled",tabindex:"-1"},[t("Disabled "),n("a",{class:"header-anchor",href:"#disabled","aria-hidden":"true"},"#")],-1),I=n("p",null,"You can set the disabled parameter to disable it in the text box and disable the options in the drop-down list box by using the disabled-key parameter.",-1),A=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),G=n("h3",{id:"customized-data-matching-method",tabindex:"-1"},[t("Customized data matching method "),n("a",{class:"header-anchor",href:"#customized-data-matching-method","aria-hidden":"true"},"#")],-1),O=n("p",null,"You can use search-fn to customize the data matching method and the returned data format.",-1),Q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),j=n("h3",{id:"customized-template-display",tabindex:"-1"},[t("Customized template display "),n("a",{class:"header-anchor",href:"#customized-template-display","aria-hidden":"true"},"#")],-1),$=n("p",null,"Use item\u3001nothing to customize the drop-down list box and display no matching message.",-1),U=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-auto-complete")]),t(`
    `),n("span",{class:"token attr-name"},":source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("source"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#item"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("slotProps"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
          No.{{slotProps.index}}: {{slotProps.item}}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#nothing"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("slotProps"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("\n          {{`No any results match : ${slotProps}`}}\n      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),W=n("h3",{id:"latest-input",tabindex:"-1"},[t("Latest input "),n("a",{class:"header-anchor",href:"#latest-input","aria-hidden":"true"},"#")],-1),M=n("p",null,"Set latest-source to the latest input.",-1),Y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),H=n("h3",{id:"enable-lazy-load",tabindex:"-1"},[t("Enable lazy load "),n("a",{class:"header-anchor",href:"#enable-lazy-load","aria-hidden":"true"},"#")],-1),K=n("p",null,"enable-lazy-load: enables lazy loading.",-1),X=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),Z=E(`<h3 id="autocomplete-parameter" tabindex="-1">AutoComplete Parameter <a class="header-anchor" href="#autocomplete-parameter" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:center;">Description</th><th style="text-align:left;">Jump to Demo</th><th>Global Config</th></tr></thead><tbody><tr><td style="text-align:center;">source</td><td style="text-align:center;"><a href="#sourcetype"><code>SourceType</code></a></td><td style="text-align:center;">--</td><td style="text-align:center;">Required. This parameter is optional if searchFn is specified.</td><td style="text-align:left;"><a href="#Basic-usage">Basic usage</a></td><td></td></tr><tr><td style="text-align:center;">allow-empty-value-search</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Optional. indicates whether to display a search message when the bound text box value is empty.</td><td style="text-align:left;"><a href="#Basic-usage">Basic usage</a></td><td></td></tr><tr><td style="text-align:center;">append-to-body</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Optional. Whether to append to body is displayed in the drop-down list box.</td><td style="text-align:left;"><a href="#Basic-usage">Basic usage</a></td><td></td></tr><tr><td style="text-align:center;">position</td><td style="text-align:center;"><a href="#placement"><code>Placement</code></a></td><td style="text-align:center;"><code>[&#39;bottom&#39;]</code></td><td style="text-align:center;">Optional. Specify the relative position of the drop-down box and the input box .</td><td style="text-align:left;"><a href="#Basic-usage">Basic usage</a></td><td></td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Optional. Indicating whether to disable commands.</td><td style="text-align:left;"><a href="#Disabled">Disabled</a></td><td></td></tr><tr><td style="text-align:center;">delay</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">300</td><td style="text-align:center;">Optional. The search is performed only after the delay time elapses and a new value is entered. (ms)</td><td style="text-align:left;"><a href="#Basic-usage">Basic usage</a></td><td></td></tr><tr><td style="text-align:center;">disabled-key</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:center;">Optional. Disable a single option. If the input resource source option type is an object, for example, disabled, and the disable attribute of the object is true, for example, {label: xxx, disabled: true}, this option will be disabled</td><td style="text-align:left;"><a href="#Customized-data-matching-method">Customized data matching method</a></td><td></td></tr><tr><td style="text-align:center;">formatter</td><td style="text-align:center;"><code>(item: any) =&gt; string</code></td><td style="text-align:center;"><a href="#defaultFormatter">defaultFormatter</a></td><td style="text-align:center;">Optional. Formatting function</td><td style="text-align:left;"><a href="#Customized-data-matching-method">Customized data matching method</a></td><td></td></tr><tr><td style="text-align:center;">is-searching</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Optional. indicating whether the search template is displayed.</td><td style="text-align:left;"><a href="#Customized-data-matching-method">Customized data matching method</a></td><td></td></tr><tr><td style="text-align:center;">scene-type</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:center;">Optional. The value can be select or suggestion.</td><td style="text-align:left;"><a href="#Enable-lazy-load">Enable lazy load</a></td><td></td></tr><tr><td style="text-align:center;">search-fn</td><td style="text-align:center;"><code>(term: string) =&gt; Array&lt;any&gt;</code></td><td style="text-align:center;"><a href="#defaultSearchFn">defaultSearchFn</a></td><td style="text-align:center;">Optional. Customized search filtering</td><td style="text-align:left;"><a href="#Customized-data-matching-method">Customized data matching method</a></td><td></td></tr><tr><td style="text-align:center;">tips-text</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;Latest input&#39;</td><td style="text-align:center;">Optional. prompt text</td><td style="text-align:left;"><a href="#Disabled">Disabled</a></td><td></td></tr><tr><td style="text-align:center;">latest-source</td><td style="text-align:center;"><code>Array&lt;any&gt;</code></td><td style="text-align:center;">--</td><td style="text-align:center;">Optional. Latest input</td><td style="text-align:left;"><a href="#Latest-input">Latest input</a></td><td></td></tr><tr><td style="text-align:center;">value-parser</td><td style="text-align:center;"><code>(item: any) =&gt; any</code></td><td style="text-align:center;"><a href="#defaultValueParse">defaultValueParse</a></td><td style="text-align:center;">(optional) Process selected data</td><td style="text-align:left;"><a href="#Enable-lazy-load">Enable lazy load</a></td><td></td></tr><tr><td style="text-align:center;">enable-lazy-load</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Optional. Whether lazy loading is allowed</td><td style="text-align:left;"><a href="#Enable-lazy-load">Enable lazy load</a></td><td></td></tr><tr><td style="text-align:center;">width</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">400</td><td style="text-align:center;">Optional. Adjust the width (px)</td><td style="text-align:left;"><a href="#Basic-usage">Basic usage</a></td><td></td></tr><tr><td style="text-align:center;">show-animation</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">optional. Whether to enable animation.</td><td style="text-align:left;"></td><td>\u2714</td></tr></tbody></table><h3 id="autocomplete-event" tabindex="-1">AutoComplete Event <a class="header-anchor" href="#autocomplete-event" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Description</th><th style="text-align:left;">Jump to Demo</th></tr></thead><tbody><tr><td style="text-align:center;">load-more</td><td style="text-align:center;"><code>function</code></td><td style="text-align:center;">optional. It is a lazy loading trigger event. It is used together with enable-lazy-load. <code>$event.loadFinish()</code> is used to disable the loading status. $event is the instance of the pop-up component AutoCompletePopupComponent</td><td style="text-align:left;"><a href="#Enable-lazy-load">Enable lazy load</a></td></tr><tr><td style="text-align:center;">select-value</td><td style="text-align:center;"><code>function(value)</code></td><td style="text-align:center;">(optional), callback function after selecting an option</td><td style="text-align:left;"><a href="#Basic-usage">Basic usage</a></td></tr><tr><td style="text-align:center;">trans-input-focus-emit</td><td style="text-align:center;"><code>function</code></td><td style="text-align:center;">(optional). Callback function for input focus</td><td style="text-align:left;"><a href="#Basic-usage">Basic usage</a></td></tr></tbody></table><h3 id="autocomplete-slots" tabindex="-1">AutoComplete slots <a class="header-anchor" href="#autocomplete-slots" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:center;">Description</th><th style="text-align:left;">Jump to Demo</th></tr></thead><tbody><tr><td style="text-align:center;">item</td><td style="text-align:center;">Optional. Customized display template .</td><td style="text-align:left;"><a href="#Customized-template-display">Customized template display</a></td></tr><tr><td style="text-align:center;">nothing</td><td style="text-align:center;">Optional. No matching item is displayed .</td><td style="text-align:left;"><a href="#Customized-template-display">Customized template display</a></td></tr><tr><td style="text-align:center;">searching</td><td style="text-align:center;">Optional. The template is displayed in customized search.</td><td style="text-align:left;"><a href="#Customized-data-matching-method">Customized data matching method</a></td></tr></tbody></table><h1 id="interface-type-definition" tabindex="-1">Interface &amp; Type Definition <a class="header-anchor" href="#interface-type-definition" aria-hidden="true">#</a></h1><h3 id="sourcetype" tabindex="-1">SourceType <a class="header-anchor" href="#sourcetype" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">SourceItemObj</span> <span class="token punctuation">{</span>
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
</code></pre></div><p>term indicates the entered keyword.</p><h3 id="defaultformatter" tabindex="-1">defaultFormatter <a class="header-anchor" href="#defaultformatter" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token function-variable function">defaultFormatter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> SourceItemObj<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> item <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> item<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> item<span class="token operator">!==</span><span class="token keyword">null</span> <span class="token operator">?</span> item<span class="token punctuation">.</span>label <span class="token operator">||</span> item<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>item indicates a data item.</p><h3 id="defaultvalueparse" tabindex="-1">defaultValueParse <a class="header-anchor" href="#defaultvalueparse" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token function-variable function">defaultValueParse</span> <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">;</span>
</code></pre></div><p>item indicates a data item.</p>`,20);function nn(c,s,o,g,m,y){const l=x("render-demo-0"),d=x("demo"),i=x("render-demo-1"),u=x("render-demo-2"),p=x("render-demo-3"),a=x("render-demo-4"),e=x("render-demo-5");return L(),D("div",null,[q,h(d,{sourceCode:`<template>
  <d-auto-complete
    :delay="1000"
    :source="source"
    v-model="value"
    :allow-empty-value-search="allowEmptyValueSearch"
    :select-value="selectValue"
    :trans-input-focus-emit="transInputFocusEmit"
    :position="position"
    :width="420"
    :append-to-body="true"
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
`},{highlight:v(()=>[R]),default:v(()=>[h(l)]),_:1}),N,I,h(d,{sourceCode:`<template>
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
`},{highlight:v(()=>[A]),default:v(()=>[h(i)]),_:1}),G,O,h(d,{sourceCode:`<template>
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
`},{highlight:v(()=>[Q]),default:v(()=>[h(u)]),_:1}),j,$,h(d,{sourceCode:`<template>
  <d-auto-complete
    :source="source"
    v-model="value"
  >
    <template #item="slotProps" >
      <div>
          No.{{slotProps.index}}: {{slotProps.item}}
      </div>
    </template>
    <template #nothing="slotProps" >
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
`},{highlight:v(()=>[U]),default:v(()=>[h(p)]),_:1}),W,M,h(d,{sourceCode:`<template>
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
`},{highlight:v(()=>[Y]),default:v(()=>[h(a)]),_:1}),H,K,h(d,{sourceCode:`<template>
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
`},{highlight:v(()=>[X]),default:v(()=>[h(e)]),_:1}),Z])}var en=T(J,[["render",nn]]);export{sn as __pageData,en as default};
