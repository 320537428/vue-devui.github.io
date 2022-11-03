var _=Object.defineProperty;var F=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var b=(p,o,e)=>o in p?_(p,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):p[o]=e,E=(p,o)=>{for(var e in o||(o={}))H.call(o,e)&&b(p,e,o[e]);if(F)for(var e of F(o))q.call(o,e)&&b(p,e,o[e]);return p};import{_ as w,V as g,r as C,o as S,c as N,a as y,w as m,b as A,d as n,e as a}from"./app.a70f02bc.js";const M={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:p,createVNode:o,openBlock:e,createElementBlock:k}=g;function i(s,u){const c=p("d-transfer");return e(),k("div",null,[o(c,{"source-default-checked":s.sourceDefaultChecked,"target-default-checked":s.targetDefaultChecked,modelValue:s.selectValue,"onUpdate:modelValue":u[0]||(u[0]=t=>s.selectValue=t),titles:s.titles,data:s.source,onChange:s.changeFun},null,8,["source-default-checked","target-default-checked","modelValue","titles","data","onChange"])])}const{defineComponent:d,reactive:D,ref:l}=g,r=d({setup(){const s=l([{value:"1",name:"\u5317\u4EAC",disabled:!1},{value:"2",name:"\u4E0A\u6D77",disabled:!0},{value:"3",name:"\u5E7F\u5DDE",disabled:!1},{value:"4",name:"\u6DF1\u5733",disabled:!1},{value:"5",name:"\u6210\u90FD",disabled:!1},{value:"6",name:"\u676D\u5DDE",disabled:!0},{value:"7",name:"\u91CD\u5E86",disabled:!1},{value:"8",name:"\u897F\u5B89",disabled:!1},{value:"9",name:"\u82CF\u5DDE",disabled:!1},{value:"10",name:"\u6B66\u6C49",disabled:!1}]);return{selectValue:l(["1","2"]),titles:["sourceHeader","targetHeader"],source:s,sourceDefaultChecked:["2","5","28"],targetDefaultChecked:["12","23"],changeFun:(t,f,v)=>{console.log(t,f,v)}}}});return E({render:i},r)}(),"render-demo-1":function(){const{createElementVNode:p,resolveComponent:o,createVNode:e,openBlock:k,createElementBlock:i}=g,d=p("div",{class:"mb-1"},"\u9ED8\u8BA4\u641C\u7D22",-1),D=p("div",{class:"mb-1"},"\u81EA\u5B9A\u4E49\u641C\u7D22\u65B9\u6CD5",-1);function l(t,f){const v=o("d-transfer");return k(),i("div",null,[d,e(v,{"source-default-checked":t.sourceDefaultChecked,"target-default-checked":t.targetDefaultChecked,titles:t.titles,data:t.source,filter:t.filter,placeholder:"\u8BF7\u8F93\u5165",modelValue:t.checkedValues1,"onUpdate:modelValue":f[0]||(f[0]=h=>t.checkedValues1=h),class:"mb-3"},null,8,["source-default-checked","target-default-checked","titles","data","filter","modelValue"]),D,e(v,{"source-default-checked":t.sourceDefaultChecked,"target-default-checked":t.targetDefaultChecked,titles:t.titles,data:t.source,filter:t.filterFun,modelValue:t.checkedValues2,"onUpdate:modelValue":f[1]||(f[1]=h=>t.checkedValues2=h),class:"mb-3"},null,8,["source-default-checked","target-default-checked","titles","data","filter","modelValue"])])}const{defineComponent:r,reactive:s,ref:u}=g,c=r({setup(){const t=[{value:"1",name:"\u5317\u4EAC",disabled:!1},{value:"2",name:"\u4E0A\u6D77",disabled:!0},{value:"3",name:"\u5E7F\u5DDE",disabled:!1},{value:"4",name:"\u6DF1\u5733",disabled:!1},{value:"5",name:"\u6210\u90FD",disabled:!1},{value:"6",name:"\u676D\u5DDE",disabled:!0},{value:"7",name:"\u91CD\u5E86",disabled:!1},{value:"8",name:"\u897F\u5B89",disabled:!1},{value:"9",name:"\u82CF\u5DDE",disabled:!1},{value:"10",name:"\u6B66\u6C49",disabled:!1}],f=(B,V)=>B.value.includes(V),v=u(["2"]),h=u([]);return{checkedValues1:v,checkedValues2:h,titles:["sourceHeader","targetHeader"],source:t,sourceDefaultChecked:["5","7"],targetDefaultChecked:["12","2"],filter:!0,filterFun:f}}});return E({render:l},c)}(),"render-demo-2":function(){const{resolveComponent:p,createVNode:o,openBlock:e,createElementBlock:k}=g;function i(s,u){const c=p("d-transfer");return e(),k("div",null,[o(c,{"source-default-checked":s.sourceDefaultChecked,"target-default-checked":s.targetDefaultChecked,titles:s.titles,data:s.source,sortMethods:s.sourceSortMethodsHandle},null,8,["source-default-checked","target-default-checked","titles","data","sortMethods"])])}const{defineComponent:d,reactive:D,ref:l}=g,r=d({setup(){const s=l([{value:"1",name:"\u5317\u4EAC",disabled:!1},{value:"2",name:"\u4E0A\u6D77",disabled:!0},{value:"3",name:"\u5E7F\u5DDE",disabled:!1},{value:"4",name:"\u6DF1\u5733",disabled:!1},{value:"5",name:"\u6210\u90FD",disabled:!1},{value:"6",name:"\u676D\u5DDE",disabled:!0},{value:"7",name:"\u91CD\u5E86",disabled:!1},{value:"8",name:"\u897F\u5B89",disabled:!1},{value:"9",name:"\u82CF\u5DDE",disabled:!1},{value:"10",name:"\u6B66\u6C49",disabled:!1}]);return{titles:["sourceHeader","targetHeader"],source:s,sourceDefaultChecked:["2","5","28"],targetDefaultChecked:["12","23"],sourceSortMethodsHandle:function(u){return u.sort(()=>.5-Math.random())}}}});return E({render:i},r)}(),"render-demo-3":function(){const{resolveComponent:p,createVNode:o,openBlock:e,createElementBlock:k}=g;function i(s,u){const c=p("d-transfer");return e(),k("div",null,[o(c,{"source-default-checked":s.sourceDefaultChecked,"target-default-checked":s.targetDefaultChecked,titles:s.titles,data:s.source,modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=t=>s.value=t),isSourceDrag:s.sourceDrag,isTargetDrag:s.sourceDrag,dragstart:s.dragstartHandle,drop:s.dropHandle,dragend:s.dragendHandle},null,8,["source-default-checked","target-default-checked","titles","data","modelValue","isSourceDrag","isTargetDrag","dragstart","drop","dragend"])])}const{defineComponent:d,reactive:D,ref:l}=g,r=d({setup(){const s=[{value:"1",name:"\u5317\u4EAC",disabled:!1},{value:"2",name:"\u4E0A\u6D77",disabled:!0},{value:"3",name:"\u5E7F\u5DDE",disabled:!1},{value:"4",name:"\u6DF1\u5733",disabled:!1},{value:"5",name:"\u6210\u90FD",disabled:!1},{value:"6",name:"\u676D\u5DDE",disabled:!0},{value:"7",name:"\u91CD\u5E86",disabled:!1},{value:"8",name:"\u897F\u5B89",disabled:!1},{value:"9",name:"\u82CF\u5DDE",disabled:!1},{value:"10",name:"\u6B66\u6C49",disabled:!1}];return{value:l([]),titles:["sourceHeader","targetHeader"],source:s,sourceDefaultChecked:["2","5","28"],targetDefaultChecked:["12","23"],sourceDrag:!0,dragstartHandle:(c,t)=>{console.log(t,"dragstartHandle")},dropHandle:(c,t)=>{console.log(t,"dropHandle")},dragendHandle:(c,t)=>{console.log(t,"dragendHandle")}}}});return E({render:i},r)}(),"render-demo-4":function(){const{resolveComponent:p,createVNode:o,openBlock:e,createElementBlock:k}=g;function i(s,u){const c=p("d-transfer");return e(),k("div",null,[o(c,{"source-default-checked":s.sourceDefaultChecked,"target-default-checked":s.targetDefaultChecked,modelValue:s.selectValue,"onUpdate:modelValue":u[0]||(u[0]=t=>s.selectValue=t),titles:s.titles,data:s.source,"render-content":s.renderContent},null,8,["source-default-checked","target-default-checked","modelValue","titles","data","render-content"])])}const{defineComponent:d,reactive:D,ref:l}=g,r=d({setup(){const s=l([{value:"1",name:"\u5317\u4EAC",disabled:!1},{value:"2",name:"\u4E0A\u6D77",disabled:!0},{value:"3",name:"\u5E7F\u5DDE",disabled:!1},{value:"4",name:"\u6DF1\u5733",disabled:!1},{value:"5",name:"\u6210\u90FD",disabled:!1},{value:"6",name:"\u676D\u5DDE",disabled:!0},{value:"7",name:"\u91CD\u5E86",disabled:!1},{value:"8",name:"\u897F\u5B89",disabled:!1},{value:"9",name:"\u82CF\u5DDE",disabled:!1},{value:"10",name:"\u6B66\u6C49",disabled:!1}]);return{selectValue:l(["1","2"]),titles:["sourceHeader","targetHeader"],source:s,sourceDefaultChecked:["2","5","28"],targetDefaultChecked:["12","23"],renderContent:(t,f)=>t("span",{style:{color:"#5e7ce0"}},[f.name])}}});return E({render:i},r)}()}},x='{"title":"Transfer \u7A7F\u68AD\u6846","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u641C\u7D22\u7A7F\u68AD\u6846","slug":"\u641C\u7D22\u7A7F\u68AD\u6846"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6392\u5E8F\u7A7F\u68AD\u6846","slug":"\u81EA\u5B9A\u4E49\u6392\u5E8F\u7A7F\u68AD\u6846"},{"level":3,"title":"\u62D6\u62FD\u6392\u5E8F\u7A7F\u68AD\u6846","slug":"\u62D6\u62FD\u6392\u5E8F\u7A7F\u68AD\u6846"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5185\u5BB9","slug":"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5185\u5BB9"},{"level":3,"title":"Transfer \u53C2\u6570","slug":"transfer-\u53C2\u6570"},{"level":3,"title":"Transfer \u4E8B\u4EF6","slug":"transfer-\u4E8B\u4EF6"}],"relativePath":"components/transfer/index.md","lastUpdated":1662174068922}',T=A('<h1 id="transfer-\u7A7F\u68AD\u6846" tabindex="-1">Transfer \u7A7F\u68AD\u6846 <a class="header-anchor" href="#transfer-\u7A7F\u68AD\u6846" aria-hidden="true">#</a></h1><p>\u53CC\u680F\u7A7F\u68AD\u9009\u62E9\u6846\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u9700\u8981\u5728\u591A\u4E2A\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9009\u65F6\u3002\u7A7F\u68AD\u9009\u62E9\u6846\u53EF\u7528\u53EA\u7BA1\u7684\u65B9\u5F0F\u5728\u4E24\u680F\u4E2D\u79FB\u52A8\u6570\u636E\uFF0C\u5B8C\u6210\u9009\u62E9\u884C\u4E3A\u3002\u5176\u4E2D\u5DE6\u8FB9\u4E00\u680F\u4E3A source\uFF0C\u53F3\u8FB9\u4E00\u680F\u4E3A target\u3002\u6700\u7EC8\u8FD4\u56DE\u53F3\u4FA7\u680F\u7684\u6570\u636E\uFF0C\u63D0\u4F9B\u7ED9\u5F00\u53D1\u8005\u4F7F\u7528\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u7A7F\u68AD\u6846\u57FA\u672C\u7528\u6CD5\u3002</p>',6),U=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-transfer")]),a(`
    `),n("span",{class:"token attr-name"},":source-default-checked"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sourceDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":target-default-checked"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("targetDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectValue"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":titles"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("titles"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("source"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("changeFun"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-transfer")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" originSource "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5317\u4EAC'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5E7F\u5DDE'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6DF1\u5733'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6210\u90FD'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'6'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u676D\u5DDE'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'7'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91CD\u5E86'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'8'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u897F\u5B89'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'9'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u82CF\u5DDE'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'10'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6B66\u6C49'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"changeFun"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("value"),n("span",{class:"token punctuation"},","),a(" direction"),n("span",{class:"token punctuation"},","),a(" arr")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},","),a(" direction"),n("span",{class:"token punctuation"},","),a(" arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      selectValue`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"titles"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'sourceHeader'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'targetHeader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"source"),n("span",{class:"token operator"},":"),a(" originSource"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"sourceDefaultChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'28'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"targetDefaultChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'12'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'23'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      changeFun`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),j=n("h3",{id:"\u641C\u7D22\u7A7F\u68AD\u6846",tabindex:"-1"},[a("\u641C\u7D22\u7A7F\u68AD\u6846 "),n("a",{class:"header-anchor",href:"#\u641C\u7D22\u7A7F\u68AD\u6846","aria-hidden":"true"},"#")],-1),$=n("p",null,"\u5728\u6570\u636E\u5F88\u591A\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u5BF9\u6570\u636E\u8FDB\u884C\u641C\u7D22\u548C\u8FC7\u6EE4\u3002",-1),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mb-1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u9ED8\u8BA4\u641C\u7D22"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-transfer")]),a(`
    `),n("span",{class:"token attr-name"},":source-default-checked"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sourceDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":target-default-checked"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("targetDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":titles"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("titles"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("source"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":filter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("filter"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkedValues1"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mb-3"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-transfer")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mb-1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u81EA\u5B9A\u4E49\u641C\u7D22\u65B9\u6CD5"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-transfer")]),a(`
    `),n("span",{class:"token attr-name"},":source-default-checked"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sourceDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":target-default-checked"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("targetDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":titles"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("titles"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("source"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":filter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("filterFun"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkedValues2"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mb-3"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-transfer")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" originSource "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5317\u4EAC'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5E7F\u5DDE'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6DF1\u5733'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6210\u90FD'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'6'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u676D\u5DDE'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'7'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91CD\u5E86'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'8'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u897F\u5B89'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'9'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u82CF\u5DDE'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'10'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6B66\u6C49'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"filterFun"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("item"),n("span",{class:"token punctuation"},","),a(" key")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" item"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),a("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" checkedValues1 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" checkedValues2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      checkedValues1`),n("span",{class:"token punctuation"},","),a(`
      checkedValues2`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"titles"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'sourceHeader'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'targetHeader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"source"),n("span",{class:"token operator"},":"),a(" originSource"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"sourceDefaultChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'7'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"targetDefaultChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'12'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"filter"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      filterFun`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),z=n("h3",{id:"\u81EA\u5B9A\u4E49\u6392\u5E8F\u7A7F\u68AD\u6846",tabindex:"-1"},[a("\u81EA\u5B9A\u4E49\u6392\u5E8F\u7A7F\u68AD\u6846 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6392\u5E8F\u7A7F\u68AD\u6846","aria-hidden":"true"},"#")],-1),G=n("p",null,"\u53EF\u4EE5\u5BF9\u7A7F\u68AD\u6846\u6E90\u548C\u76EE\u6807\u6846\u7684\u6570\u636E\u8FDB\u884C\u81EA\u5B9A\u4E49\u6392\u5E8F\u3002",-1),I=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-transfer")]),a(`
    `),n("span",{class:"token attr-name"},":source-default-checked"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sourceDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":target-default-checked"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("targetDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":titles"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("titles"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("source"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":sortMethods"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sourceSortMethodsHandle"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-transfer")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" source "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5317\u4EAC'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5E7F\u5DDE'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6DF1\u5733'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6210\u90FD'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'6'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u676D\u5DDE'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'7'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91CD\u5E86'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'8'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u897F\u5B89'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'9'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u82CF\u5DDE'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'10'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6B66\u6C49'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"titles"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'sourceHeader'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'targetHeader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      source`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"sourceDefaultChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'28'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"targetDefaultChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'12'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'23'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"sourceSortMethodsHandle"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"data"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(" data"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token number"},"0.5"),a(),n("span",{class:"token operator"},"-"),a(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),J=n("h3",{id:"\u62D6\u62FD\u6392\u5E8F\u7A7F\u68AD\u6846",tabindex:"-1"},[a("\u62D6\u62FD\u6392\u5E8F\u7A7F\u68AD\u6846 "),n("a",{class:"header-anchor",href:"#\u62D6\u62FD\u6392\u5E8F\u7A7F\u68AD\u6846","aria-hidden":"true"},"#")],-1),K=n("p",null,"\u53EF\u4EE5\u5BF9\u7A7F\u68AD\u6846\u6E90\u548C\u76EE\u6807\u6846\u7684\u6570\u636E\u8FDB\u884C\u62D6\u62FD\u6392\u5E8F\u3002",-1),L=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-transfer")]),a(`
    `),n("span",{class:"token attr-name"},":source-default-checked"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sourceDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":target-default-checked"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("targetDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":titles"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("titles"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("source"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":isSourceDrag"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sourceDrag"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":isTargetDrag"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sourceDrag"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":dragstart"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dragstartHandle"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":drop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dropHandle"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":dragend"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dragendHandle"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-transfer")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" originSource "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5317\u4EAC'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5E7F\u5DDE'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6DF1\u5733'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6210\u90FD'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'6'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u676D\u5DDE'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'7'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91CD\u5E86'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'8'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u897F\u5B89'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'9'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u82CF\u5DDE'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'10'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6B66\u6C49'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"titles"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'sourceHeader'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'targetHeader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"source"),n("span",{class:"token operator"},":"),a(" originSource"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"sourceDefaultChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'28'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"targetDefaultChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'12'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'23'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"sourceDrag"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"dragstartHandle"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("event"),n("span",{class:"token punctuation"},","),a(" item")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'dragstartHandle'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"dropHandle"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("event"),n("span",{class:"token punctuation"},","),a(" item")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'dropHandle'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"dragendHandle"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("event"),n("span",{class:"token punctuation"},","),a(" item")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'dragendHandle'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),O=n("h3",{id:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5185\u5BB9",tabindex:"-1"},[a("\u81EA\u5B9A\u4E49\u6E32\u67D3\u5185\u5BB9 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6E32\u67D3\u5185\u5BB9","aria-hidden":"true"},"#")],-1),Q=n("p",null,"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5185\u5BB9\u3002",-1),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-transfer")]),a(`
    `),n("span",{class:"token attr-name"},":source-default-checked"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sourceDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":target-default-checked"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("targetDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectValue"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":titles"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("titles"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("source"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":render-content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("renderContent"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-transfer")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" originSource "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5317\u4EAC'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5E7F\u5DDE'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6DF1\u5733'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6210\u90FD'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'6'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u676D\u5DDE'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'7'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91CD\u5E86'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'8'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u897F\u5B89'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'9'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u82CF\u5DDE'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'10'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6B66\u6C49'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"renderContent"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("h"),n("span",{class:"token punctuation"},","),a(" option")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'span'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'#5e7ce0'"),a(),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"["),a("option"),n("span",{class:"token punctuation"},"."),a("name"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      selectValue`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"titles"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'sourceHeader'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'targetHeader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"source"),n("span",{class:"token operator"},":"),a(" originSource"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"sourceDefaultChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'28'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"targetDefaultChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'12'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'23'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      renderContent`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),W=A('<h3 id="transfer-\u53C2\u6570" tabindex="-1">Transfer \u53C2\u6570 <a class="header-anchor" href="#transfer-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th><strong>\u53C2\u6570</strong></th><th><strong>\u7C7B\u578B</strong></th><th><strong>\u9ED8\u8BA4</strong></th><th><strong>\u8BF4\u660E</strong></th><th><strong>\u8DF3\u8F6C Demo</strong></th></tr></thead><tbody><tr><td>v-model</td><td><code>Array</code></td><td>[]</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u9009\u4E2D\u9879\u7ED1\u5B9A\u503C\uFF0C\u5BF9\u5E94\u53F3\u4FA7\u7A7F\u68AD\u6846\u9009\u9879</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>data</td><td><code>Array[{value,name,disabled}] </code></td><td>[]</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u7A7F\u68AD\u6846\u6E90\u6570\u636E</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>titles</td><td><code>Array</code></td><td>[]</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u7A7F\u68AD\u6846\u6807\u9898</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>height</td><td><code>Array</code></td><td>320px</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u7A7F\u68AD\u6846\u9AD8\u5EA6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>filter</td><td><code>boolean | function</code></td><td>false</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u662F\u5426\u53EF\u4EE5\u641C\u7D22,\u51FD\u6570\u65F6\u4E3A\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u65B9\u6CD5</td><td><a href="#%E6%90%9C%E7%B4%A2%E7%A9%BF%E6%A2%AD%E6%A1%86">\u641C\u7D22\u7A7F\u68AD\u6846</a></td></tr><tr><td>render-content</td><td><code>function(h,option)</code></td><td>--</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u81EA\u5B9A\u4E49\u6570\u636E\u9879\u6E32\u67D3\u51FD\u6570</td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B8%B2%E6%9F%93%E5%86%85%E5%AE%B9">\u81EA\u5B9A\u4E49\u6E32\u67D3\u5185\u5BB9</a></td></tr><tr><td>placeholder</td><td><code>string</code></td><td>\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u641C\u7D22\u6846\u7684\u5360\u4F4D\u7B26</td><td><a href="#%E6%90%9C%E7%B4%A2%E7%A9%BF%E6%A2%AD%E6%A1%86">\u641C\u7D22\u7A7F\u68AD\u6846</a></td></tr></tbody></table><h3 id="transfer-\u4E8B\u4EF6" tabindex="-1">Transfer \u4E8B\u4EF6 <a class="header-anchor" href="#transfer-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th><strong>\u4E8B\u4EF6</strong></th><th><strong>\u7C7B\u578B</strong></th><th><strong>\u8BF4\u660E</strong></th><th><strong>\u8DF3\u8F6C Demo</strong></th></tr></thead><tbody><tr><td>change</td><td><code>EventEmitter&lt;{value, direction,\u79FB\u52A8\u7684\u6570\u7EC4}&gt;</code></td><td>\u53F3\u4FA7\u5217\u8868\u53D8\u5316\u65F6\u89E6\u53D1\uFF0C\u5F53\u524D\u503C\u3001\u6570\u636E\u79FB\u52A8\u65B9\u5411\uFF08source\u3001target\uFF09\u3001\u53D1\u751F\u79FB\u52A8\u7684\u6570\u636E\u6570\u7EC4</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table>',4);function X(p,o,e,k,i,d){const D=C("render-demo-0"),l=C("demo"),r=C("render-demo-1"),s=C("render-demo-2"),u=C("render-demo-3"),c=C("render-demo-4");return S(),N("div",null,[T,y(l,{sourceCode:`<template>
  <d-transfer
    :source-default-checked="sourceDefaultChecked"
    :target-default-checked="targetDefaultChecked"
    v-model="selectValue"
    :titles="titles"
    :data="source"
    @change="changeFun"
  >
  </d-transfer>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const originSource = ref([
      {
        value: '1',
        name: '\u5317\u4EAC',
        disabled: false,
      },
      {
        value: '2',
        name: '\u4E0A\u6D77',
        disabled: true,
      },
      {
        value: '3',
        name: '\u5E7F\u5DDE',
        disabled: false,
      },
      {
        value: '4',
        name: '\u6DF1\u5733',
        disabled: false,
      },
      {
        value: '5',
        name: '\u6210\u90FD',
        disabled: false,
      },
      {
        value: '6',
        name: '\u676D\u5DDE',
        disabled: true,
      },
      {
        value: '7',
        name: '\u91CD\u5E86',
        disabled: false,
      },
      {
        value: '8',
        name: '\u897F\u5B89',
        disabled: false,
      },
      {
        value: '9',
        name: '\u82CF\u5DDE',
        disabled: false,
      },
      {
        value: '10',
        name: '\u6B66\u6C49',
        disabled: false,
      },
    ]);
    const selectValue = ref(['1', '2']);
    const changeFun = (value, direction, arr) => {
      console.log(value, direction, arr);
    };

    return {
      selectValue,
      titles: ['sourceHeader', 'targetHeader'],
      source: originSource,
      sourceDefaultChecked: ['2', '5', '28'],
      targetDefaultChecked: ['12', '23'],
      changeFun,
    };
  },
});
<\/script>
`},{highlight:m(()=>[U]),default:m(()=>[y(D)]),_:1}),j,$,y(l,{sourceCode:`<template>
  <div class="mb-1">\u9ED8\u8BA4\u641C\u7D22</div>
  <d-transfer
    :source-default-checked="sourceDefaultChecked"
    :target-default-checked="targetDefaultChecked"
    :titles="titles"
    :data="source"
    :filter="filter"
    placeholder="\u8BF7\u8F93\u5165"
    v-model="checkedValues1"
    class="mb-3"
  >
  </d-transfer>
  <div class="mb-1">\u81EA\u5B9A\u4E49\u641C\u7D22\u65B9\u6CD5</div>
  <d-transfer
    :source-default-checked="sourceDefaultChecked"
    :target-default-checked="targetDefaultChecked"
    :titles="titles"
    :data="source"
    :filter="filterFun"
    v-model="checkedValues2"
    class="mb-3"
  >
  </d-transfer>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const originSource = [
      {
        value: '1',
        name: '\u5317\u4EAC',
        disabled: false,
      },
      {
        value: '2',
        name: '\u4E0A\u6D77',
        disabled: true,
      },
      {
        value: '3',
        name: '\u5E7F\u5DDE',
        disabled: false,
      },
      {
        value: '4',
        name: '\u6DF1\u5733',
        disabled: false,
      },
      {
        value: '5',
        name: '\u6210\u90FD',
        disabled: false,
      },
      {
        value: '6',
        name: '\u676D\u5DDE',
        disabled: true,
      },
      {
        value: '7',
        name: '\u91CD\u5E86',
        disabled: false,
      },
      {
        value: '8',
        name: '\u897F\u5B89',
        disabled: false,
      },
      {
        value: '9',
        name: '\u82CF\u5DDE',
        disabled: false,
      },
      {
        value: '10',
        name: '\u6B66\u6C49',
        disabled: false,
      },
    ];

    const filterFun = (item, key) => {
      return item.value.includes(key);
    };
    const checkedValues1 = ref(['2']);
    const checkedValues2 = ref([]);

    return {
      checkedValues1,
      checkedValues2,
      titles: ['sourceHeader', 'targetHeader'],
      source: originSource,
      sourceDefaultChecked: ['5', '7'],
      targetDefaultChecked: ['12', '2'],
      filter: true,
      filterFun,
    };
  },
});
<\/script>
`},{highlight:m(()=>[P]),default:m(()=>[y(r)]),_:1}),z,G,y(l,{sourceCode:`<template>
  <d-transfer
    :source-default-checked="sourceDefaultChecked"
    :target-default-checked="targetDefaultChecked"
    :titles="titles"
    :data="source"
    :sortMethods="sourceSortMethodsHandle"
  >
  </d-transfer>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const source = ref([
      {
        value: '1',
        name: '\u5317\u4EAC',
        disabled: false,
      },
      {
        value: '2',
        name: '\u4E0A\u6D77',
        disabled: true,
      },
      {
        value: '3',
        name: '\u5E7F\u5DDE',
        disabled: false,
      },
      {
        value: '4',
        name: '\u6DF1\u5733',
        disabled: false,
      },
      {
        value: '5',
        name: '\u6210\u90FD',
        disabled: false,
      },
      {
        value: '6',
        name: '\u676D\u5DDE',
        disabled: true,
      },
      {
        value: '7',
        name: '\u91CD\u5E86',
        disabled: false,
      },
      {
        value: '8',
        name: '\u897F\u5B89',
        disabled: false,
      },
      {
        value: '9',
        name: '\u82CF\u5DDE',
        disabled: false,
      },
      {
        value: '10',
        name: '\u6B66\u6C49',
        disabled: false,
      },
    ]);

    return {
      titles: ['sourceHeader', 'targetHeader'],
      source,
      sourceDefaultChecked: ['2', '5', '28'],
      targetDefaultChecked: ['12', '23'],
      sourceSortMethodsHandle: function (data) {
        return data.sort(() => 0.5 - Math.random());
      },
    };
  },
});
<\/script>
`},{highlight:m(()=>[I]),default:m(()=>[y(s)]),_:1}),J,K,y(l,{sourceCode:`<template>
  <d-transfer
    :source-default-checked="sourceDefaultChecked"
    :target-default-checked="targetDefaultChecked"
    :titles="titles"
    :data="source"
    v-model="value"
    :isSourceDrag="sourceDrag"
    :isTargetDrag="sourceDrag"
    :dragstart="dragstartHandle"
    :drop="dropHandle"
    :dragend="dragendHandle"
  >
  </d-transfer>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const originSource = [
      {
        value: '1',
        name: '\u5317\u4EAC',
        disabled: false,
      },
      {
        value: '2',
        name: '\u4E0A\u6D77',
        disabled: true,
      },
      {
        value: '3',
        name: '\u5E7F\u5DDE',
        disabled: false,
      },
      {
        value: '4',
        name: '\u6DF1\u5733',
        disabled: false,
      },
      {
        value: '5',
        name: '\u6210\u90FD',
        disabled: false,
      },
      {
        value: '6',
        name: '\u676D\u5DDE',
        disabled: true,
      },
      {
        value: '7',
        name: '\u91CD\u5E86',
        disabled: false,
      },
      {
        value: '8',
        name: '\u897F\u5B89',
        disabled: false,
      },
      {
        value: '9',
        name: '\u82CF\u5DDE',
        disabled: false,
      },
      {
        value: '10',
        name: '\u6B66\u6C49',
        disabled: false,
      },
    ];
    const value = ref([]);

    return {
      value,
      titles: ['sourceHeader', 'targetHeader'],
      source: originSource,
      sourceDefaultChecked: ['2', '5', '28'],
      targetDefaultChecked: ['12', '23'],
      sourceDrag: true,
      dragstartHandle: (event, item) => {
        console.log(item, 'dragstartHandle');
      },
      dropHandle: (event, item) => {
        console.log(item, 'dropHandle');
      },
      dragendHandle: (event, item) => {
        console.log(item, 'dragendHandle');
      },
    };
  },
});
<\/script>
`},{highlight:m(()=>[L]),default:m(()=>[y(u)]),_:1}),O,Q,y(l,{sourceCode:`<template>
  <d-transfer
    :source-default-checked="sourceDefaultChecked"
    :target-default-checked="targetDefaultChecked"
    v-model="selectValue"
    :titles="titles"
    :data="source"
    :render-content="renderContent"
  >
  </d-transfer>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const originSource = ref([
      {
        value: '1',
        name: '\u5317\u4EAC',
        disabled: false,
      },
      {
        value: '2',
        name: '\u4E0A\u6D77',
        disabled: true,
      },
      {
        value: '3',
        name: '\u5E7F\u5DDE',
        disabled: false,
      },
      {
        value: '4',
        name: '\u6DF1\u5733',
        disabled: false,
      },
      {
        value: '5',
        name: '\u6210\u90FD',
        disabled: false,
      },
      {
        value: '6',
        name: '\u676D\u5DDE',
        disabled: true,
      },
      {
        value: '7',
        name: '\u91CD\u5E86',
        disabled: false,
      },
      {
        value: '8',
        name: '\u897F\u5B89',
        disabled: false,
      },
      {
        value: '9',
        name: '\u82CF\u5DDE',
        disabled: false,
      },
      {
        value: '10',
        name: '\u6B66\u6C49',
        disabled: false,
      },
    ]);
    const selectValue = ref(['1', '2']);

    const renderContent = (h, option) => {
      return h('span', { style: { color: '#5e7ce0' } }, [option.name]);
    };

    return {
      selectValue,
      titles: ['sourceHeader', 'targetHeader'],
      source: originSource,
      sourceDefaultChecked: ['2', '5', '28'],
      targetDefaultChecked: ['12', '23'],
      renderContent,
    };
  },
});
<\/script>
`},{highlight:m(()=>[R]),default:m(()=>[y(c)]),_:1}),W])}var nn=w(M,[["render",X]]);export{x as __pageData,nn as default};
