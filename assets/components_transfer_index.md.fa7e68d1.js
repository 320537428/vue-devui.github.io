var j=Object.defineProperty;var S=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var w=(c,o,p)=>o in c?j(c,o,{enumerable:!0,configurable:!0,writable:!0,value:p}):c[o]=p,h=(c,o)=>{for(var p in o||(o={}))I.call(o,p)&&w(c,p,o[p]);if(S)for(var p of S(o))P.call(o,p)&&w(c,p,o[p]);return c};import{_ as $,V as v,r as E,c as R,a as b,w as C,b as q,d as n,e as a,o as z}from"./app.0ce8509b.js";const G={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:c,createVNode:o,openBlock:p,createElementBlock:d}=v;function m(s,e){const u=c("d-transfer");return p(),d("div",null,[o(u,{"source-default-checked":s.sourceDefaultChecked,"onUpdate:source-default-checked":e[0]||(e[0]=l=>s.sourceDefaultChecked=l),"target-default-checked":s.targetDefaultChecked,"onUpdate:target-default-checked":e[1]||(e[1]=l=>s.targetDefaultChecked=l),titles:s.titles,sourceOption:s.source,targetOption:s.target},null,8,["source-default-checked","target-default-checked","titles","sourceOption","targetOption"])])}const{defineComponent:g,reactive:D,ref:y}=v,k=g({setup(){return{titles:["sourceHeader","targetHeader"],source:[{value:"1",name:"\u5317\u4EAC",disabled:!1},{value:"2",name:"\u4E0A\u6D77",disabled:!0},{value:"3",name:"\u5E7F\u5DDE",disabled:!1},{value:"4",name:"\u6DF1\u5733",disabled:!1},{value:"5",name:"\u6210\u90FD",disabled:!1},{value:"6",name:"\u676D\u5DDE",disabled:!0},{value:"7",name:"\u91CD\u5E86",disabled:!1},{value:"8",name:"\u897F\u5B89",disabled:!1},{value:"9",name:"\u82CF\u5DDE",disabled:!1},{value:"10",name:"\u6B66\u6C49",disabled:!1}],target:[{value:"11",name:"\u5357\u4EAC",disabled:!1},{value:"12",name:"\u957F\u6C99",disabled:!1},{value:"13",name:"\u4E1C\u839E",disabled:!1},{value:"14",name:"\u4F5B\u5C71",disabled:!1},{value:"15",name:"\u5B81\u6CE2",disabled:!0},{value:"16",name:"\u9752\u5C9B",disabled:!1},{value:"17",name:"\u6C88\u9633",disabled:!1}],sourceDefaultChecked:["2","5","28"],targetDefaultChecked:["12","23"]}}});return h({render:m},k)}(),"render-demo-1":function(){const{resolveComponent:c,createVNode:o,openBlock:p,createElementBlock:d}=v;function m(s,e){const u=c("d-transfer");return p(),d("div",null,[o(u,{"source-default-checked":s.sourceDefaultChecked,"onUpdate:source-default-checked":e[0]||(e[0]=l=>s.sourceDefaultChecked=l),"target-default-checked":s.targetDefaultChecked,"onUpdate:target-default-checked":e[1]||(e[1]=l=>s.targetDefaultChecked=l),titles:s.titles,sourceOption:s.source,targetOption:s.target,isSearch:s.isSearch,searching:s.searchingHandle},null,8,["source-default-checked","target-default-checked","titles","sourceOption","targetOption","isSearch","searching"])])}const{defineComponent:g,reactive:D,ref:y}=v,k=g({setup(){return{titles:["sourceHeader","targetHeader"],source:[{value:"1",name:"\u5317\u4EAC",disabled:!1},{value:"2",name:"\u4E0A\u6D77",disabled:!0},{value:"3",name:"\u5E7F\u5DDE",disabled:!1},{value:"4",name:"\u6DF1\u5733",disabled:!1},{value:"5",name:"\u6210\u90FD",disabled:!1},{value:"6",name:"\u676D\u5DDE",disabled:!0},{value:"7",name:"\u91CD\u5E86",disabled:!1},{value:"8",name:"\u897F\u5B89",disabled:!1},{value:"9",name:"\u82CF\u5DDE",disabled:!1},{value:"10",name:"\u6B66\u6C49",disabled:!1}],target:[{value:"11",name:"\u5357\u4EAC",disabled:!1},{value:"12",name:"\u957F\u6C99",disabled:!1},{value:"13",name:"\u4E1C\u839E",disabled:!1},{value:"14",name:"\u4F5B\u5C71",disabled:!1},{value:"15",name:"\u5B81\u6CE2",disabled:!0},{value:"16",name:"\u9752\u5C9B",disabled:!1},{value:"17",name:"\u6C88\u9633",disabled:!1}],sourceDefaultChecked:["2","5","28"],targetDefaultChecked:["12","23"],isSearch:!0,searchingHandle:(u,l,B)=>{console.log(u,l,B)}}}});return h({render:m},k)}(),"render-demo-2":function(){const{resolveComponent:c,createVNode:o,openBlock:p,createElementBlock:d}=v;function m(s,e){const u=c("d-transfer");return p(),d("div",null,[o(u,{"source-default-checked":s.sourceDefaultChecked,"onUpdate:source-default-checked":e[0]||(e[0]=l=>s.sourceDefaultChecked=l),"target-default-checked":s.targetDefaultChecked,"onUpdate:target-default-checked":e[1]||(e[1]=l=>s.targetDefaultChecked=l),titles:s.titles,sourceOption:s.source,targetOption:s.target,sourceSortMethods:s.sourceSortMethodsHandle,targetSortMethods:s.targetSortMethodsHandle},null,8,["source-default-checked","target-default-checked","titles","sourceOption","targetOption","sourceSortMethods","targetSortMethods"])])}const{defineComponent:g,reactive:D,ref:y}=v,k=g({setup(){return{titles:["sourceHeader","targetHeader"],source:[{value:"1",name:"\u5317\u4EAC",disabled:!1},{value:"2",name:"\u4E0A\u6D77",disabled:!0},{value:"3",name:"\u5E7F\u5DDE",disabled:!1},{value:"4",name:"\u6DF1\u5733",disabled:!1},{value:"5",name:"\u6210\u90FD",disabled:!1},{value:"6",name:"\u676D\u5DDE",disabled:!0},{value:"7",name:"\u91CD\u5E86",disabled:!1},{value:"8",name:"\u897F\u5B89",disabled:!1},{value:"9",name:"\u82CF\u5DDE",disabled:!1},{value:"10",name:"\u6B66\u6C49",disabled:!1}],target:[{value:"11",name:"\u5357\u4EAC",disabled:!1},{value:"12",name:"\u957F\u6C99",disabled:!1},{value:"13",name:"\u4E1C\u839E",disabled:!1},{value:"14",name:"\u4F5B\u5C71",disabled:!1},{value:"15",name:"\u5B81\u6CE2",disabled:!0},{value:"16",name:"\u9752\u5C9B",disabled:!1},{value:"17",name:"\u6C88\u9633",disabled:!1}],sourceDefaultChecked:["2","5","28"],targetDefaultChecked:["12","23"],sourceSortMethodsHandle:function(u){return u.sort(()=>.5-Math.random())},targetSortMethodsHandle:function(u){return u.reverse()}}}});return h({render:m},k)}(),"render-demo-3":function(){const{resolveComponent:c,createVNode:o,openBlock:p,createElementBlock:d}=v;function m(s,e){const u=c("d-transfer");return p(),d("div",null,[o(u,{"source-default-checked":s.sourceDefaultChecked,"onUpdate:source-default-checked":e[0]||(e[0]=l=>s.sourceDefaultChecked=l),"target-default-checked":s.targetDefaultChecked,"onUpdate:target-default-checked":e[1]||(e[1]=l=>s.targetDefaultChecked=l),titles:s.titles,sourceOption:s.source,targetOption:s.target,isSourceDrag:s.sourceDrag,isTargetDrag:s.sourceDrag,dragstart:s.dragstartHandle,drop:s.dropHandle,dragend:s.dragendHandle},null,8,["source-default-checked","target-default-checked","titles","sourceOption","targetOption","isSourceDrag","isTargetDrag","dragstart","drop","dragend"])])}const{defineComponent:g,reactive:D,ref:y}=v,k=g({setup(){return{titles:["sourceHeader","targetHeader"],source:[{value:"1",name:"\u5317\u4EAC",disabled:!1},{value:"2",name:"\u4E0A\u6D77",disabled:!0},{value:"3",name:"\u5E7F\u5DDE",disabled:!1},{value:"4",name:"\u6DF1\u5733",disabled:!1},{value:"5",name:"\u6210\u90FD",disabled:!1},{value:"6",name:"\u676D\u5DDE",disabled:!0},{value:"7",name:"\u91CD\u5E86",disabled:!1},{value:"8",name:"\u897F\u5B89",disabled:!1},{value:"9",name:"\u82CF\u5DDE",disabled:!1},{value:"10",name:"\u6B66\u6C49",disabled:!1}],target:[{value:"11",name:"\u5357\u4EAC",disabled:!1},{value:"12",name:"\u957F\u6C99",disabled:!1},{value:"13",name:"\u4E1C\u839E",disabled:!1},{value:"14",name:"\u4F5B\u5C71",disabled:!1},{value:"15",name:"\u5B81\u6CE2",disabled:!0},{value:"16",name:"\u9752\u5C9B",disabled:!1},{value:"17",name:"\u6C88\u9633",disabled:!1}],sourceDefaultChecked:["2","5","28"],targetDefaultChecked:["12","23"],sourceDrag:!0,dragstartHandle:(u,l)=>{console.log(l,"dragstartHandle")},dropHandle:(u,l)=>{console.log(l,"dropHandle")},dragendHandle:(u,l)=>{console.log(l,"dragendHandle")}}}});return h({render:m},k)}(),"render-demo-4":function(){const{resolveComponent:c,createVNode:o,createElementVNode:p,openBlock:d,createBlock:m,createCommentVNode:g,createElementBlock:D,createTextVNode:y,withCtx:k}=v,s={class:"custom-transfer__header"},e={class:"custom-transfer__body"},u={key:1,class:"custom-transfer__body__empty"},l={class:"custom-operate__wrap"},B=y("Right"),T=y("Left"),V={class:"custom-transfer__header"},O={class:"custom-transfer__body"},M={key:1,class:"custom-transfer__body__empty"};function N(t,f){const F=c("d-checkbox"),A=c("d-checkbox-group"),_=c("d-button"),i=c("d-transfer");return d(),D("div",null,[o(i,{class:"custom-transfer"},{sourceHeader:k(()=>[p("div",s,[o(F,{class:"custom-transfer__body__list__checkout",modelValue:t.options.sourceAllChecked,"onUpdate:modelValue":f[0]||(f[0]=r=>t.options.sourceAllChecked=r),label:t.options.sourceAllLabel,onChange:t.sourceAllCheckedHandle},null,8,["modelValue","label","onChange"])])]),sourceBody:k(()=>[p("div",e,[t.options.sourceData.length?(d(),m(A,{key:0,class:"custom-transfer__body__list",options:t.options.sourceData,modelValue:t.options.sourceDefaultChecked,"onUpdate:modelValue":f[1]||(f[1]=r=>t.options.sourceDefaultChecked=r)},null,8,["options","modelValue"])):g("v-if",!0),t.options.sourceData.length?g("v-if",!0):(d(),D("div",u,"\u6CA1\u6709\u6570\u636E"))])]),operate:k(()=>[p("div",l,[o(_,{disabled:!t.options.sourceDefaultChecked.length,onClick:t.moveTargetHandle},{default:k(()=>[B]),_:1},8,["disabled","onClick"]),o(_,{disabled:!t.options.targetDefaultChecked.length,onClick:t.moveSourceHandle},{default:k(()=>[T]),_:1},8,["disabled","onClick"])])]),targetHeader:k(()=>[p("div",V,[o(F,{class:"custom-transfer__body__list__checkout",modelValue:t.options.targetAllChecked,"onUpdate:modelValue":f[2]||(f[2]=r=>t.options.targetAllChecked=r),label:t.options.targetAllLabel,onChange:t.targetAllCheckedHandle},null,8,["modelValue","label","onChange"])])]),targetBody:k(()=>[p("div",O,[t.options.targetData.length?(d(),m(A,{key:0,class:"custom-transfer__body__list",options:t.options.targetData,modelValue:t.options.targetDefaultChecked,"onUpdate:modelValue":f[3]||(f[3]=r=>t.options.targetDefaultChecked=r)},null,8,["options","modelValue"])):g("v-if",!0),t.options.targetData.length?g("v-if",!0):(d(),D("div",M,"\u6CA1\u6709\u6570\u636E"))])]),_:1})])}const{defineComponent:L,reactive:x,watch:H,ref:rn}=v,U=L({setup(){const t=x({sourceData:[{value:"1",name:"content1",disabled:!1},{value:"2",name:"content2",disabled:!1},{value:"3",name:"content3",disabled:!1},{value:"4",name:"content4",disabled:!1},{value:"5",name:"content5",disabled:!1},{value:"6",name:"content6",disabled:!1},{value:"7",name:"content7",disabled:!1},{value:"8",name:"content8",disabled:!1}],targetData:[{value:"9",name:"content9",disabled:!1},{value:"10",name:"content10",disabled:!1},{value:"11",name:"content11",disabled:!1},{value:"12",name:"content12",disabled:!1},{value:"13",name:"content13",disabled:!1},{value:"14",name:"content14",disabled:!1},{value:"15",name:"content15",disabled:!1},{value:"16",name:"content16",disabled:!1}],sourceDefaultChecked:["2","5","8"],targetDefaultChecked:["12"],sourceAllChecked:!1,targetAllChecked:!1,sourceAllLabel:"customSourceHeader",targetAllLabel:"customTargetHeader"}),f=i=>{t.sourceDefaultChecked=i?t.sourceData.map(r=>r.value):[]},F=i=>{t.targetDefaultChecked=i?t.targetData.map(r=>r.value):[]},A=()=>{const i=[];t.sourceData=t.sourceData.filter(r=>t.sourceDefaultChecked.includes(r.value)?(i.push(r),!1):!0),t.targetData=t.targetData.concat(i),t.sourceDefaultChecked=[]},_=()=>{const i=[];t.targetData=t.targetData.filter(r=>t.targetDefaultChecked.includes(r.value)?(i.push(r),!1):!0),t.sourceData=t.sourceData.concat(i),t.targetDefaultChecked=[]};return H(()=>t.sourceDefaultChecked,(i,r)=>{t.sourceAllChecked=t.sourceData.length&&i.length===t.sourceData.length},{deep:!0}),H(()=>t.targetDefaultChecked,(i,r)=>{t.targetAllChecked=t.targetData.length&&i.length===t.targetData.length},{deep:!0}),{options:t,sourceAllCheckedHandle:f,targetAllCheckedHandle:F,moveTargetHandle:A,moveSourceHandle:_}}});return h({render:N},U)}()}},gn='{"title":"Transfer \u7A7F\u68AD\u6846","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u641C\u7D22\u7A7F\u68AD\u6846","slug":"\u641C\u7D22\u7A7F\u68AD\u6846"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6392\u5E8F\u7A7F\u68AD\u6846","slug":"\u81EA\u5B9A\u4E49\u6392\u5E8F\u7A7F\u68AD\u6846"},{"level":3,"title":"\u62D6\u62FD\u6392\u5E8F\u7A7F\u68AD\u6846","slug":"\u62D6\u62FD\u6392\u5E8F\u7A7F\u68AD\u6846"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u7A7F\u68AD\u6846","slug":"\u81EA\u5B9A\u4E49\u7A7F\u68AD\u6846"},{"level":3,"title":"API","slug":"api"}],"relativePath":"components/transfer/index.md","lastUpdated":1653308053244}',J=q('<h1 id="transfer-\u7A7F\u68AD\u6846" tabindex="-1">Transfer \u7A7F\u68AD\u6846 <a class="header-anchor" href="#transfer-\u7A7F\u68AD\u6846" aria-hidden="true">#</a></h1><p>\u53CC\u680F\u7A7F\u68AD\u9009\u62E9\u6846\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u9700\u8981\u5728\u591A\u4E2A\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9009\u65F6\u3002\u7A7F\u68AD\u9009\u62E9\u6846\u53EF\u7528\u53EA\u7BA1\u7684\u65B9\u5F0F\u5728\u4E24\u680F\u4E2D\u79FB\u52A8\u6570\u636E\uFF0C\u5B8C\u6210\u9009\u62E9\u884C\u4E3A\u3002\u5176\u4E2D\u5DE6\u8FB9\u4E00\u680F\u4E3A source\uFF0C\u53F3\u8FB9\u4E00\u680F\u4E3A target\u3002\u6700\u7EC8\u8FD4\u56DE\u4E24\u680F\u7684\u6570\u636E\uFF0C\u63D0\u4F9B\u7ED9\u5F00\u53D1\u8005\u4F7F\u7528\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u7A7F\u68AD\u6846\u57FA\u672C\u7528\u6CD5\u3002</p>',6),K=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-transfer")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("source-default-checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sourceDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("target-default-checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("targetDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":titles"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("titles"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":sourceOption"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("source"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":targetOption"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("target"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-transfer")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

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
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"7"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"\u91CD\u5E86"'),n("span",{class:"token punctuation"},","),a(`
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
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" originTarget "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5357\u4EAC'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'12'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u957F\u6C99'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'13'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u4E1C\u839E'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'14'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u4F5B\u5C71'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'15'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5B81\u6CE2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'16'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u9752\u5C9B'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'17'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6C88\u9633'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"titles"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'sourceHeader'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'targetHeader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"source"),n("span",{class:"token operator"},":"),a(" originSource"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"target"),n("span",{class:"token operator"},":"),a(" originTarget"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"sourceDefaultChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'28'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"targetDefaultChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'12'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'23'"),n("span",{class:"token punctuation"},"]"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Q=n("h3",{id:"\u641C\u7D22\u7A7F\u68AD\u6846",tabindex:"-1"},[a("\u641C\u7D22\u7A7F\u68AD\u6846 "),n("a",{class:"header-anchor",href:"#\u641C\u7D22\u7A7F\u68AD\u6846","aria-hidden":"true"},"#")],-1),W=n("p",null,"\u5728\u6570\u636E\u5F88\u591A\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u5BF9\u6570\u636E\u8FDB\u884C\u641C\u7D22\u548C\u8FC7\u6EE4\u3002",-1),X=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-transfer")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("source-default-checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sourceDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("target-default-checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("targetDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":titles"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("titles"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":sourceOption"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("source"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":targetOption"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("target"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":isSearch"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("isSearch"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":searching"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("searchingHandle"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-transfer")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

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
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"7"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"\u91CD\u5E86"'),n("span",{class:"token punctuation"},","),a(`
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
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" originTarget "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5357\u4EAC'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'12'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u957F\u6C99'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'13'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u4E1C\u839E'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'14'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u4F5B\u5C71'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'15'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5B81\u6CE2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'16'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u9752\u5C9B'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'17'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6C88\u9633'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"titles"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'sourceHeader'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'targetHeader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"source"),n("span",{class:"token operator"},":"),a(" originSource"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"target"),n("span",{class:"token operator"},":"),a(" originTarget"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"sourceDefaultChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'28'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"targetDefaultChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'12'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'23'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"isSearch"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"searchingHandle"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("direction"),n("span",{class:"token punctuation"},","),a(" data"),n("span",{class:"token punctuation"},","),a(" keyword")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("direction"),n("span",{class:"token punctuation"},","),a(" data"),n("span",{class:"token punctuation"},","),a(" keyword"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Y=n("h3",{id:"\u81EA\u5B9A\u4E49\u6392\u5E8F\u7A7F\u68AD\u6846",tabindex:"-1"},[a("\u81EA\u5B9A\u4E49\u6392\u5E8F\u7A7F\u68AD\u6846 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6392\u5E8F\u7A7F\u68AD\u6846","aria-hidden":"true"},"#")],-1),Z=n("p",null,"\u53EF\u4EE5\u5BF9\u7A7F\u68AD\u6846\u6E90\u548C\u76EE\u6807\u6846\u7684\u6570\u636E\u8FDB\u884C\u81EA\u5B9A\u4E49\u6392\u5E8F\u3002",-1),nn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-transfer")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("source-default-checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sourceDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("target-default-checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("targetDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":titles"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("titles"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":sourceOption"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("source"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":targetOption"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("target"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":sourceSortMethods"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sourceSortMethodsHandle"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":targetSortMethods"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("targetSortMethodsHandle"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-transfer")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

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
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"7"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"\u91CD\u5E86"'),n("span",{class:"token punctuation"},","),a(`
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
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" originTarget "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5357\u4EAC'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'12'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u957F\u6C99'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'13'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u4E1C\u839E'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'14'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u4F5B\u5C71'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'15'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5B81\u6CE2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'16'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u9752\u5C9B'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'17'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6C88\u9633'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"titles"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'sourceHeader'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'targetHeader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"source"),n("span",{class:"token operator"},":"),a(" originSource"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"target"),n("span",{class:"token operator"},":"),a(" originTarget"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"sourceDefaultChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'28'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"targetDefaultChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'12'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'23'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"sourceSortMethodsHandle"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"data"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(" data"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token number"},"0.5"),a(),n("span",{class:"token operator"},"-"),a(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"targetSortMethodsHandle"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"data"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(" data"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),an=n("p",null,":::",-1),sn=n("h3",{id:"\u62D6\u62FD\u6392\u5E8F\u7A7F\u68AD\u6846",tabindex:"-1"},[a("\u62D6\u62FD\u6392\u5E8F\u7A7F\u68AD\u6846 "),n("a",{class:"header-anchor",href:"#\u62D6\u62FD\u6392\u5E8F\u7A7F\u68AD\u6846","aria-hidden":"true"},"#")],-1),tn=n("p",null,"\u53EF\u4EE5\u5BF9\u7A7F\u68AD\u6846\u6E90\u548C\u76EE\u6807\u6846\u7684\u6570\u636E\u8FDB\u884C\u62D6\u62FD\u6392\u5E8F\u3002",-1),en=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-transfer")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("source-default-checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sourceDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("target-default-checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("targetDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":titles"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("titles"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":sourceOption"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("source"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":targetOption"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("target"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":isSourceDrag"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sourceDrag"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":isTargetDrag"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sourceDrag"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":dragstart"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dragstartHandle"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":drop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dropHandle"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":dragend"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dragendHandle"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-transfer")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

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
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"7"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"\u91CD\u5E86"'),n("span",{class:"token punctuation"},","),a(`
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
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" originTarget "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5357\u4EAC'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'12'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u957F\u6C99'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'13'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u4E1C\u839E'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'14'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u4F5B\u5C71'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'15'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5B81\u6CE2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'16'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u9752\u5C9B'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'17'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6C88\u9633'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"titles"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'sourceHeader'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'targetHeader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"source"),n("span",{class:"token operator"},":"),a(" originSource"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"target"),n("span",{class:"token operator"},":"),a(" originTarget"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"sourceDefaultChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'28'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"targetDefaultChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'12'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'23'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"sourceDrag"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"dragstartHandle"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("event"),n("span",{class:"token punctuation"},","),a(" item")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'dragstartHandle'"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"dropHandle"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("event"),n("span",{class:"token punctuation"},","),a(" item")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'dropHandle'"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"dragendHandle"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("event"),n("span",{class:"token punctuation"},","),a(" item")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'dragendHandle'"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),on=n("h3",{id:"\u81EA\u5B9A\u4E49\u7A7F\u68AD\u6846",tabindex:"-1"},[a("\u81EA\u5B9A\u4E49\u7A7F\u68AD\u6846 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u7A7F\u68AD\u6846","aria-hidden":"true"},"#")],-1),pn=n("p",null,"\u53EF\u4EE5\u5BF9\u7A7F\u68AD\u6846\u5185\u5BB9\u7684\u663E\u793A\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002",-1),ln=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-transfer")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("custom-transfer"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#sourceHeader"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("custom-transfer__header"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(` 
          `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("custom-transfer__body__list__checkout"),n("span",{class:"token punctuation"},'"')]),a(` 
          `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options.sourceAllChecked"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},":label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options.sourceAllLabel"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sourceAllCheckedHandle"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#sourceBody"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("custom-transfer__body"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(` 
          `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("custom-transfer__body__list"),n("span",{class:"token punctuation"},'"')]),a(` 
          `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options.sourceData"),n("span",{class:"token punctuation"},'"')]),a(` 
          `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options.sourceDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options.sourceData.length"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("custom-transfer__body__empty"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("!options.sourceData.length"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("\u6CA1\u6709\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#operate"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("custom-operate__wrap"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("!options.sourceDefaultChecked.length"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("moveTargetHandle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Right"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("!options.targetDefaultChecked.length"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("moveSourceHandle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Left"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#targetHeader"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("custom-transfer__header"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(` 
          `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("custom-transfer__body__list__checkout"),n("span",{class:"token punctuation"},'"')]),a(` 
          `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options.targetAllChecked"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},":label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options.targetAllLabel"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("targetAllCheckedHandle"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#targetBody"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("custom-transfer__body"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(` 
          `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("custom-transfer__body__list"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options.targetData"),n("span",{class:"token punctuation"},'"')]),a(` 
          `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options.targetDefaultChecked"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options.targetData.length"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("custom-transfer__body__empty"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("!options.targetData.length"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("\u6CA1\u6709\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-transfer")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" watch"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"sourceData"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'content1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'content2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'content3'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'content4'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'content5'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'6'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'content6'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"7"'),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"content7"'),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'8'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'content8'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"targetData"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'9'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'content9'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'10'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'content10'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'11'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'content11'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'12'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'content12'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'13'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'content13'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'14'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'content14'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'15'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'content15'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'16'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'content16'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"sourceDefaultChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'8'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"targetDefaultChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'12'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"sourceAllChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"targetAllChecked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"sourceAllLabel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'customSourceHeader'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"targetAllLabel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'customTargetHeader'"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`


    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"sourceAllCheckedHandle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options`),n("span",{class:"token punctuation"},"."),a("sourceDefaultChecked "),n("span",{class:"token operator"},"="),a(" value "),n("span",{class:"token operator"},"?"),a(" options"),n("span",{class:"token punctuation"},"."),a("sourceData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),a(),n("span",{class:"token operator"},"=>"),a(" item"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"targetAllCheckedHandle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options`),n("span",{class:"token punctuation"},"."),a("targetDefaultChecked "),n("span",{class:"token operator"},"="),a(" value "),n("span",{class:"token operator"},"?"),a(" options"),n("span",{class:"token punctuation"},"."),a("targetData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),a(),n("span",{class:"token operator"},"=>"),a(" item"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"moveTargetHandle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" moveTargetData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(`
      options`),n("span",{class:"token punctuation"},"."),a("sourceData "),n("span",{class:"token operator"},"="),a(" options"),n("span",{class:"token punctuation"},"."),a("sourceData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),a("options"),n("span",{class:"token punctuation"},"."),a("sourceDefaultChecked"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          moveTargetData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},")"),a(`
          `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token boolean"},"false"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
        `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token boolean"},"true"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
      options`),n("span",{class:"token punctuation"},"."),a("targetData "),n("span",{class:"token operator"},"="),a(" options"),n("span",{class:"token punctuation"},"."),a("targetData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"concat"),n("span",{class:"token punctuation"},"("),a("moveTargetData"),n("span",{class:"token punctuation"},")"),a(`
      options`),n("span",{class:"token punctuation"},"."),a("sourceDefaultChecked "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"moveSourceHandle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" moveSourceData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(`
      options`),n("span",{class:"token punctuation"},"."),a("targetData "),n("span",{class:"token operator"},"="),a(" options"),n("span",{class:"token punctuation"},"."),a("targetData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),a("options"),n("span",{class:"token punctuation"},"."),a("targetDefaultChecked"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          moveSourceData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},")"),a(`
          `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token boolean"},"false"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
        `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token boolean"},"true"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
      options`),n("span",{class:"token punctuation"},"."),a("sourceData "),n("span",{class:"token operator"},"="),a(" options"),n("span",{class:"token punctuation"},"."),a("sourceData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"concat"),n("span",{class:"token punctuation"},"("),a("moveSourceData"),n("span",{class:"token punctuation"},")"),a(`
      options`),n("span",{class:"token punctuation"},"."),a("targetDefaultChecked "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`


    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),a(`
      `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" options"),n("span",{class:"token punctuation"},"."),a("sourceDefaultChecked"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("nVal"),n("span",{class:"token punctuation"},","),a(" oVal")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        options`),n("span",{class:"token punctuation"},"."),a("sourceAllChecked "),n("span",{class:"token operator"},"="),a(" options"),n("span",{class:"token punctuation"},"."),a("sourceData"),n("span",{class:"token punctuation"},"."),a("length "),n("span",{class:"token operator"},"&&"),a(" nVal"),n("span",{class:"token punctuation"},"."),a("length "),n("span",{class:"token operator"},"==="),a(" options"),n("span",{class:"token punctuation"},"."),a("sourceData"),n("span",{class:"token punctuation"},"."),a(`length
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"deep"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),a(`
      `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" options"),n("span",{class:"token punctuation"},"."),a("targetDefaultChecked"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("nVal"),n("span",{class:"token punctuation"},","),a(" oVal")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        options`),n("span",{class:"token punctuation"},"."),a("targetAllChecked "),n("span",{class:"token operator"},"="),a(" options"),n("span",{class:"token punctuation"},"."),a("targetData"),n("span",{class:"token punctuation"},"."),a("length "),n("span",{class:"token operator"},"&&"),a(" nVal"),n("span",{class:"token punctuation"},"."),a("length "),n("span",{class:"token operator"},"==="),a(" options"),n("span",{class:"token punctuation"},"."),a("targetData"),n("span",{class:"token punctuation"},"."),a(`length
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"deep"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      sourceAllCheckedHandle`),n("span",{class:"token punctuation"},","),a(`
      targetAllCheckedHandle`),n("span",{class:"token punctuation"},","),a(`
      moveTargetHandle`),n("span",{class:"token punctuation"},","),a(`
      moveSourceHandle
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".custom-transfer__header"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"border-bottom"),n("span",{class:"token punctuation"},":"),a(" 1px solid #dfe1e6"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".custom-transfer__body__list__checkout"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),a(" 40px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),a(" 40px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".custom-transfer__body"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),a(" 320px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"overflow-y"),n("span",{class:"token punctuation"},":"),a(" auto"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".custom-transfer__header, .custom-transfer__body"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a(" 0 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".custom-operate__wrap"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"flex-direction"),n("span",{class:"token punctuation"},":"),a(" column"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".custom-operate__wrap button:last-child"),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),a(" 8px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".custom-transfer__body__empty"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),a(" 100%"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),cn=q('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><p>d-transfer \u53C2\u6570</p><table><thead><tr><th><strong>\u53C2\u6570</strong></th><th><strong>\u7C7B\u578B</strong></th><th><strong>\u9ED8\u8BA4</strong></th><th><strong>\u8BF4\u660E</strong></th><th><strong>\u8DF3\u8F6C Demo</strong></th></tr></thead><tbody><tr><td>sourceOption</td><td><code>Array</code></td><td>[]</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u7A7F\u68AD\u6846\u6E90\u6570\u636E</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>targetOption</td><td><code>Array</code></td><td>[]</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u7A7F\u68AD\u6846\u76EE\u6807\u6570\u636E</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>titles</td><td><code>Array</code></td><td>[]</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u7A7F\u68AD\u6846\u6807\u9898</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>height</td><td><code>Array</code></td><td>320px</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u7A7F\u68AD\u6846\u9AD8\u5EA6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>isSearch</td><td><code>Array</code></td><td>true</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u662F\u5426\u53EF\u4EE5\u641C\u7D22</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>disabled</td><td><code>Array</code></td><td>false</td><td>\u53EF\u9009\u53C2\u6570 \u7A7F\u68AD\u6846\u7981\u6B62\u4F7F\u7528</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>beforeTransfer</td><td><code>(sourceOption, targetOption) =&gt; boolean | Promise&lt;boolean&gt;</code></td><td>-</td><td>\u53EF\u9009\u53C2\u6570 \u7A7F\u68AD\u6846\u7981\u6B62\u4F7F\u7528</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><p>d-transfer \u4E8B\u4EF6</p><table><thead><tr><th><strong>\u4E8B\u4EF6</strong></th><th><strong>\u7C7B\u578B</strong></th><th><strong>\u8BF4\u660E</strong></th><th><strong>\u8DF3\u8F6C Demo</strong></th></tr></thead><tbody><tr><td>transferToSource</td><td><code>EventEmitter&lt;{sourceOption, targetOption}&gt;</code></td><td>\u5F53\u70B9\u51FB\u53F3\u7A7F\u68AD\u65F6\uFF0C\u8FD4\u56DE\u7A7F\u68AD\u6846\u6E90\u548C\u76EE\u6807\u6570\u636E\uFF1B</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>transferToTarget</td><td><code>EventEmitter&lt;{sourceOption, targetOption}&gt;</code></td><td>\u5F53\u70B9\u51FB\u5DE6\u7A7F\u68AD\u65F6\uFF0C\u8FD4\u56DE\u7A7F\u68AD\u6846\u6E90\u548C\u76EE\u6807\u6570\u636E\uFF1B</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>searching</td><td><code>EventEmitter&lt;{direction, keyword}&gt;</code></td><td>\u5F53\u641C\u7D22\u65F6\u89E6\u53D1\uFF0C\u8FD4\u56DE\u76EE\u6807\u7A7F\u68AD\u6846\u548C\u641C\u7D22\u6587\u5B57\uFF0C\u4E0D\u8BBE\u7F6E\u6B64\u4E8B\u4EF6\u5219\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u65B9\u6CD5\uFF1B</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>transferring</td><td><code>EventEmitter&lt;TransferDirection&gt;</code></td><td>\u5F53\u7A7F\u68AD\u65F6\u89E6\u53D1\uFF0C\u8FD4\u56DE\u76EE\u6807\u7A7F\u68AD\u6846\uFF0C\u4E0D\u8BBE\u7F6E\u6B64\u4E8B\u4EF6\u5219\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u65B9\u6CD5\uFF1B</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>afterTransfer</td><td><code>EventEmitter&lt;TransferDirection&gt;</code></td><td>\u5F53\u7A7F\u68AD\u5B8C\u6210\u540E\uFF0C\u8FD4\u56DE\u76EE\u6807\u7A7F\u68AD\u6846\uFF0C\u4E0D\u8BBE\u7F6EtransferEvent\u624D\u4F1A\u89E6\u53D1\uFF1B</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>onDragEnd</td><td><code>(direction: string, dragItem: TransferItem, dropItem: TransferItem) =&gt; void</code></td><td>\u8282\u70B9\u7ED3\u675F\u62D6\u62FD\u7684\u56DE\u8C03\uFF1B</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><p>d-transfer.Item</p><table><thead><tr><th><strong>\u5C5E\u6027</strong></th><th><strong>\u7C7B\u578B</strong></th><th><strong>\u9ED8\u8BA4</strong></th><th><strong>\u8BF4\u660E</strong></th><th><strong>\u8DF3\u8F6C Demo</strong></th></tr></thead><tbody><tr><td>key</td><td><code>string (required)</code></td><td>-</td><td>\u9009\u9879\u7684\u952E\u503C\uFF08\u552F\u4E00\u6807\u8BC6\u7B26\uFF09</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>value</td><td><code>string (required)</code></td><td>-</td><td>\u9009\u9879\u5BF9\u5E94\u7684\u503C</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>disabled</td><td><code>boolean</code></td><td>-</td><td>\u662F\u5426\u7981\u7528\u6B64\u9009\u9879</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table>',7);function un(c,o,p,d,m,g){const D=E("render-demo-0"),y=E("demo"),k=E("render-demo-1"),s=E("render-demo-2"),e=E("render-demo-3"),u=E("render-demo-4");return z(),R("div",null,[J,b(y,{sourceCode:`<template>
  <d-transfer
    v-model:source-default-checked="sourceDefaultChecked"
    v-model:target-default-checked="targetDefaultChecked"
    :titles="titles"
    :sourceOption="source"
    :targetOption="target"
  >
  </d-transfer>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue'

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
        value: "7",
        name: "\u91CD\u5E86",
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
      }
    ]
    const originTarget = [
      {
        value: '11',
        name: '\u5357\u4EAC',
        disabled: false,
      },
      {
        value: '12',
        name: '\u957F\u6C99',
        disabled: false,
      },
      {
        value: '13',
        name: '\u4E1C\u839E',
        disabled: false,
      },
      {
        value: '14',
        name: '\u4F5B\u5C71',
        disabled: false,
      },
      {
        value: '15',
        name: '\u5B81\u6CE2',
        disabled: true,
      },
      {
        value: '16',
        name: '\u9752\u5C9B',
        disabled: false,
      },
      {
        value: '17',
        name: '\u6C88\u9633',
        disabled: false,
      }
    ]

    return {
      titles: ['sourceHeader', 'targetHeader'],
      source: originSource,
      target: originTarget,
      sourceDefaultChecked: ['2', '5', '28'],
      targetDefaultChecked: ['12', '23']
    }
  }
})
<\/script>
`},{highlight:C(()=>[K]),default:C(()=>[b(D)]),_:1}),Q,W,b(y,{sourceCode:`<template>
  <d-transfer
    v-model:source-default-checked="sourceDefaultChecked"
    v-model:target-default-checked="targetDefaultChecked"
    :titles="titles"
    :sourceOption="source"
    :targetOption="target"
    :isSearch="isSearch"
    :searching="searchingHandle"
  >
  </d-transfer>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue'

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
        value: "7",
        name: "\u91CD\u5E86",
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
      }
    ]
    const originTarget = [
      {
        value: '11',
        name: '\u5357\u4EAC',
        disabled: false,
      },
      {
        value: '12',
        name: '\u957F\u6C99',
        disabled: false,
      },
      {
        value: '13',
        name: '\u4E1C\u839E',
        disabled: false,
      },
      {
        value: '14',
        name: '\u4F5B\u5C71',
        disabled: false,
      },
      {
        value: '15',
        name: '\u5B81\u6CE2',
        disabled: true,
      },
      {
        value: '16',
        name: '\u9752\u5C9B',
        disabled: false,
      },
      {
        value: '17',
        name: '\u6C88\u9633',
        disabled: false,
      }
    ]

    return {
      titles: ['sourceHeader', 'targetHeader'],
      source: originSource,
      target: originTarget,
      sourceDefaultChecked: ['2', '5', '28'],
      targetDefaultChecked: ['12', '23'],
      isSearch: true,
      searchingHandle: (direction, data, keyword) => {
        console.log(direction, data, keyword)
      }
    }
  }
})
<\/script>
`},{highlight:C(()=>[X]),default:C(()=>[b(k)]),_:1}),Y,Z,b(y,{sourceCode:`<template>
  <d-transfer
    v-model:source-default-checked="sourceDefaultChecked"
    v-model:target-default-checked="targetDefaultChecked"
    :titles="titles"
    :sourceOption="source"
    :targetOption="target"
    :sourceSortMethods="sourceSortMethodsHandle"
    :targetSortMethods="targetSortMethodsHandle"
  >
  </d-transfer>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue'

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
        value: "7",
        name: "\u91CD\u5E86",
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
      }
    ]
    const originTarget = [
      {
        value: '11',
        name: '\u5357\u4EAC',
        disabled: false,
      },
      {
        value: '12',
        name: '\u957F\u6C99',
        disabled: false,
      },
      {
        value: '13',
        name: '\u4E1C\u839E',
        disabled: false,
      },
      {
        value: '14',
        name: '\u4F5B\u5C71',
        disabled: false,
      },
      {
        value: '15',
        name: '\u5B81\u6CE2',
        disabled: true,
      },
      {
        value: '16',
        name: '\u9752\u5C9B',
        disabled: false,
      },
      {
        value: '17',
        name: '\u6C88\u9633',
        disabled: false,
      }
    ]

    return {
      titles: ['sourceHeader', 'targetHeader'],
      source: originSource,
      target: originTarget,
      sourceDefaultChecked: ['2', '5', '28'],
      targetDefaultChecked: ['12', '23'],
      sourceSortMethodsHandle: function(data) {
        return data.sort(() => 0.5 - Math.random())
      },
      targetSortMethodsHandle: function(data) {
        return data.reverse()
      }
    }
  }
})
<\/script>
`},{highlight:C(()=>[nn]),default:C(()=>[b(s)]),_:1}),an,sn,tn,b(y,{sourceCode:`<template>
  <d-transfer
    v-model:source-default-checked="sourceDefaultChecked"
    v-model:target-default-checked="targetDefaultChecked"
    :titles="titles"
    :sourceOption="source"
    :targetOption="target"
    :isSourceDrag="sourceDrag"
    :isTargetDrag="sourceDrag"
    :dragstart="dragstartHandle"
    :drop="dropHandle"
    :dragend="dragendHandle"
  >
  </d-transfer>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue'

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
        value: "7",
        name: "\u91CD\u5E86",
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
      }
    ]
    const originTarget = [
      {
        value: '11',
        name: '\u5357\u4EAC',
        disabled: false,
      },
      {
        value: '12',
        name: '\u957F\u6C99',
        disabled: false,
      },
      {
        value: '13',
        name: '\u4E1C\u839E',
        disabled: false,
      },
      {
        value: '14',
        name: '\u4F5B\u5C71',
        disabled: false,
      },
      {
        value: '15',
        name: '\u5B81\u6CE2',
        disabled: true,
      },
      {
        value: '16',
        name: '\u9752\u5C9B',
        disabled: false,
      },
      {
        value: '17',
        name: '\u6C88\u9633',
        disabled: false,
      }
    ]

    return {
      titles: ['sourceHeader', 'targetHeader'],
      source: originSource,
      target: originTarget,
      sourceDefaultChecked: ['2', '5', '28'],
      targetDefaultChecked: ['12', '23'],
      sourceDrag: true,
      dragstartHandle: (event, item) => {
        console.log(item, 'dragstartHandle')
      },
      dropHandle: (event, item) => {
        console.log(item, 'dropHandle')
      },
      dragendHandle: (event, item) => {
        console.log(item, 'dragendHandle')
      },
    }
  }
})
<\/script>
`},{highlight:C(()=>[en]),default:C(()=>[b(e)]),_:1}),on,pn,b(y,{sourceCode:`<template>
  <d-transfer class="custom-transfer">
    <template #sourceHeader>
      <div class="custom-transfer__header">
        <d-checkbox 
          class="custom-transfer__body__list__checkout" 
          v-model="options.sourceAllChecked"
          :label="options.sourceAllLabel"
          @change="sourceAllCheckedHandle"
        />
      </div>
    </template>
    <template #sourceBody>
      <div class="custom-transfer__body">
        <d-checkbox-group 
          class="custom-transfer__body__list" 
          :options="options.sourceData" 
          v-model="options.sourceDefaultChecked"
          v-if="options.sourceData.length"
        />
        <div class="custom-transfer__body__empty" v-if="!options.sourceData.length" >\u6CA1\u6709\u6570\u636E</div>
      </div>
    </template>
    <template #operate>
      <div class="custom-operate__wrap">
        <d-button :disabled="!options.sourceDefaultChecked.length" @click="moveTargetHandle">Right</d-button>
        <d-button :disabled="!options.targetDefaultChecked.length" @click="moveSourceHandle">Left</d-button>
      </div>
    </template>
    <template #targetHeader>
      <div class="custom-transfer__header">
        <d-checkbox 
          class="custom-transfer__body__list__checkout" 
          v-model="options.targetAllChecked"
          :label="options.targetAllLabel"
          @change="targetAllCheckedHandle"
        />
      </div>
    </template>
    <template #targetBody>
      <div class="custom-transfer__body">
        <d-checkbox-group 
          class="custom-transfer__body__list"
          :options="options.targetData" 
          v-model="options.targetDefaultChecked"
          v-if="options.targetData.length"
        />
        <div class="custom-transfer__body__empty" v-if="!options.targetData.length" >\u6CA1\u6709\u6570\u636E</div>
      </div>
    </template>
  </d-transfer>
</template>
<script>
import { defineComponent, reactive, watch, ref } from 'vue'

export default defineComponent({
  setup() {
    const options = reactive({
      sourceData: [
        {
          value: '1',
          name: 'content1',
          disabled: false,
        },
        {
          value: '2',
          name: 'content2',
          disabled: false,
        },
        {
          value: '3',
          name: 'content3',
          disabled: false,
        },
        {
          value: '4',
          name: 'content4',
          disabled: false,
        },
        {
          value: '5',
          name: 'content5',
          disabled: false,
        },
        {
          value: '6',
          name: 'content6',
          disabled: false,
        },
        {
          value: "7",
          name: "content7",
          disabled: false,
        },
        {
          value: '8',
          name: 'content8',
          disabled: false,
        }
      ],
      targetData: [
        {
          value: '9',
          name: 'content9',
          disabled: false,
        },
        {
          value: '10',
          name: 'content10',
          disabled: false,
        },
        {
          value: '11',
          name: 'content11',
          disabled: false,
        },
        {
          value: '12',
          name: 'content12',
          disabled: false,
        },
        {
          value: '13',
          name: 'content13',
          disabled: false,
        },
        {
          value: '14',
          name: 'content14',
          disabled: false,
        },
        {
          value: '15',
          name: 'content15',
          disabled: false,
        },
        {
          value: '16',
          name: 'content16',
          disabled: false,
        }
      ],
      sourceDefaultChecked: ['2', '5', '8'],
      targetDefaultChecked: ['12'],
      sourceAllChecked: false,
      targetAllChecked: false,
      sourceAllLabel: 'customSourceHeader',
      targetAllLabel: 'customTargetHeader'
    })


    const sourceAllCheckedHandle = (value) => {
      options.sourceDefaultChecked = value ? options.sourceData.map(item => item.value) : []
    }
    const targetAllCheckedHandle = (value) => {
      options.targetDefaultChecked = value ? options.targetData.map(item => item.value) : []
    }
    const moveTargetHandle = () => {
      const moveTargetData = []
      options.sourceData = options.sourceData.filter(item => {
        if(options.sourceDefaultChecked.includes(item.value)) {
          moveTargetData.push(item)
          return false
        }
        return true
      })
      options.targetData = options.targetData.concat(moveTargetData)
      options.sourceDefaultChecked = []
    }
    const moveSourceHandle = () => {
      const moveSourceData = []
      options.targetData = options.targetData.filter(item => {
        if(options.targetDefaultChecked.includes(item.value)) {
          moveSourceData.push(item)
          return false
        }
        return true
      })
      options.sourceData = options.sourceData.concat(moveSourceData)
      options.targetDefaultChecked = []
    }


    watch(
      () => options.sourceDefaultChecked,
      (nVal, oVal) => {
        options.sourceAllChecked = options.sourceData.length && nVal.length === options.sourceData.length
      },
      {
        deep: true
      }
    )

    watch(
      () => options.targetDefaultChecked,
      (nVal, oVal) => {
        options.targetAllChecked = options.targetData.length && nVal.length === options.targetData.length
      },
      {
        deep: true
      }
    )

    return {
      options,
      sourceAllCheckedHandle,
      targetAllCheckedHandle,
      moveTargetHandle,
      moveSourceHandle
    }
  }
})
<\/script>
<style>
.custom-transfer__header {
  border-bottom: 1px solid #dfe1e6;
}
.custom-transfer__body__list__checkout {
  height: 40px;
  line-height: 40px;
}
.custom-transfer__body {
  height: 320px;
  overflow-y: auto;
}
.custom-transfer__header, .custom-transfer__body {
  padding: 0 10px;
}
.custom-operate__wrap {
  display: flex;
  flex-direction: column;
}
.custom-operate__wrap button:last-child{
  margin-top: 8px;
}
.custom-transfer__body__empty {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
`},{highlight:C(()=>[ln]),default:C(()=>[b(u)]),_:1}),cn])}var yn=$(G,[["render",un]]);export{gn as __pageData,yn as default};
