var q=Object.defineProperty;var _=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var A=(c,l,e)=>l in c?q(c,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[l]=e,b=(c,l)=>{for(var e in l||(l={}))I.call(l,e)&&A(c,e,l[e]);if(_)for(var e of _(l))V.call(l,e)&&A(c,e,l[e]);return c};import{_ as z,V as B,r as x,c as S,a as y,w as F,b as w,d as t,e as n,o as R}from"./app.a2cc62c7.js";const T={name:"component-doc",components:{"render-demo-0":function(){const{renderList:c,Fragment:l,openBlock:e,createElementBlock:r,toDisplayString:f,createTextVNode:C,resolveComponent:h,withCtx:u,createBlock:k}=B;function g(i,s){const o=h("d-radio");return e(),r("div",null,[(e(!0),r(l,null,c(i.baseList,p=>(e(),k(o,{modelValue:i.baseChoose,"onUpdate:modelValue":s[0]||(s[0]=m=>i.baseChoose=m),key:p,value:p,style:{marginBottom:"20px"}},{default:u(()=>[C(" The Radio value is: "+f(p),1)]),_:2},1032,["modelValue","value"]))),128))])}const{defineComponent:v,ref:E}=B,d=v({setup(){const i=E(["Item1","Item2","Item3"]);let s=E("Item1");return{baseList:i,baseChoose:s}}});return b({render:g},d)}(),"render-demo-1":function(){const{renderList:c,Fragment:l,openBlock:e,createElementBlock:r,toDisplayString:f,createTextVNode:C,resolveComponent:h,withCtx:u,createBlock:k}=B;function g(i,s){const o=h("d-radio");return e(),r("div",null,[(e(!0),r(l,null,c(i.filterList,p=>(e(),k(o,{modelValue:i.filterChoose,"onUpdate:modelValue":s[0]||(s[0]=m=>i.filterChoose=m),key:p,value:p,beforeChange:i.filterBeforeChange,style:{marginBottom:"20px"},onChange:i.filterValChange},{default:u(()=>[C(" The Radio value is: "+f(p),1)]),_:2},1032,["modelValue","value","beforeChange","onChange"]))),128))])}const{defineComponent:v,ref:E}=B,d=v({setup(){const i=E(["Item1","Item2","Item3"]);let s=E("Item1");return{filterList:i,filterChoose:s,filterBeforeChange(o){return o!=="Item2"},filterValChange(o){console.log("current value",o)}}}});return b({render:g},d)}(),"render-demo-2":function(){const{renderList:c,Fragment:l,openBlock:e,createElementBlock:r,toDisplayString:f,createTextVNode:C,resolveComponent:h,withCtx:u,createBlock:k,createVNode:g}=B;function v(s,o){const p=h("d-radio"),m=h("d-radio-group");return e(),r("div",null,[g(m,{direction:"row",modelValue:s.groupFilterChoose1,"onUpdate:modelValue":o[0]||(o[0]=a=>s.groupFilterChoose1=a),beforeChange:s.groupFilterBeforeChange},{default:u(()=>[(e(!0),r(l,null,c(s.groupFilterList1,a=>(e(),k(p,{key:a,value:a},{default:u(()=>[C(f(a),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","beforeChange"]),g(m,{modelValue:s.groupFilterChoose2,"onUpdate:modelValue":o[1]||(o[1]=a=>s.groupFilterChoose2=a),direction:"row",disabled:""},{default:u(()=>[(e(!0),r(l,null,c(s.groupFilterList2,a=>(e(),k(p,{key:a,value:a},{default:u(()=>[C(f(a),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])}const{defineComponent:E,ref:d}=B,i=E({setup(){const s=d(["Item1","Item2","Item3"]);let o=d("Item1");const p=["Spring","Summer","Autumn","Winter"],m=d("Summer");return{groupFilterList1:s,groupFilterChoose1:o,groupFilterList2:p,groupFilterChoose2:m,groupFilterBeforeChange(a){return a!=="Item2"}}}});return b({render:v},i)}(),"render-demo-3":function(){const{renderList:c,Fragment:l,openBlock:e,createElementBlock:r,toDisplayString:f,createTextVNode:C,resolveComponent:h,withCtx:u,createBlock:k}=B;function g(i,s){const o=h("d-radio");return e(),r("div",null,[(e(!0),r(l,null,c(i.disabledList,p=>(e(),k(o,{modelValue:i.disabledChoose,"onUpdate:modelValue":s[0]||(s[0]=m=>i.disabledChoose=m),key:p,value:p,style:{marginBottom:"20px"},disabled:""},{default:u(()=>[C(" The Radio value is: "+f(p),1)]),_:2},1032,["modelValue","value"]))),128))])}const{defineComponent:v,ref:E}=B,d=v({setup(){const i=E(["Item1","Item2","Item3"]);let s=E("Item1");return{disabledList:i,disabledChoose:s}}});return b({render:g},d)}(),"render-demo-4":function(){const{renderList:c,Fragment:l,openBlock:e,createElementBlock:r,toDisplayString:f,createTextVNode:C,resolveComponent:h,withCtx:u,createBlock:k,createVNode:g}=B;function v(s,o){const p=h("d-radio"),m=h("d-radio-group");return e(),r("div",null,[g(m,{direction:"row",modelValue:s.directionRowChoose,"onUpdate:modelValue":o[0]||(o[0]=a=>s.directionRowChoose=a)},{default:u(()=>[(e(!0),r(l,null,c(s.directionRowList,a=>(e(),k(p,{key:a,value:a},{default:u(()=>[C(" The Radio value is: "+f(a),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])}const{defineComponent:E,ref:d}=B,i=E({setup(){const s=d(["Item1","Item2","Item3"]);let o=d("Item1");return{directionRowList:s,directionRowChoose:o}}});return b({render:v},i)}(),"render-demo-5":function(){const{resolveComponent:c,createVNode:l,openBlock:e,createElementBlock:r}=B;function f(k,g){const v=c("d-radio-group");return e(),r("div",null,[l(v,{values:k.directionColumnList,modelValue:k.directionColumnChoose,"onUpdate:modelValue":g[0]||(g[0]=E=>k.directionColumnChoose=E)},null,8,["values","modelValue"])])}const{defineComponent:C,ref:h}=B,u=C({setup(){const k=["Spring","Summer","Autumn","Winter"],g=h("Summer");return{directionColumnList:k,directionColumnChoose:g}}});return b({render:f},u)}(),"render-demo-6":function(){const{renderList:c,Fragment:l,openBlock:e,createElementBlock:r,toDisplayString:f,createTextVNode:C,resolveComponent:h,withCtx:u,createBlock:k,createVNode:g}=B;function v(s,o){const p=h("d-radio"),m=h("d-radio-group");return e(),r("div",null,[g(m,{direction:"row",modelValue:s.customChoose1,"onUpdate:modelValue":o[0]||(o[0]=a=>s.customChoose1=a)},{default:u(()=>[(e(!0),r(l,null,c(s.customList1,a=>(e(),k(p,{key:a,value:a},{default:u(()=>[C(" The Radio value is: "+f(a),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),g(m,{direction:"row",modelValue:s.customChoose2,"onUpdate:modelValue":o[1]||(o[1]=a=>s.customChoose2=a)},{default:u(()=>[(e(!0),r(l,null,c(s.customList2,a=>(e(),k(p,{key:a.name,value:a.name},{default:u(()=>[C(" The Radio value is: "+f(a.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])}const{defineComponent:E,ref:d}=B,i=E({setup(){const s=d(["Item1","Item2","Item3"]);let o=d("Item1");const p=[{name:"Item1"},{name:"Item2"},{name:"Item3"}];let m=d("Item3");return{customList1:s,customChoose1:o,customList2:p,customChoose2:m}}});return b({render:v},i)}(),"render-demo-7":function(){const{resolveComponent:c,createVNode:l,renderList:e,Fragment:r,openBlock:f,createElementBlock:C,toDisplayString:h,createTextVNode:u,withCtx:k,createBlock:g}=B;function v(s,o){const p=c("d-radio-group"),m=c("d-radio");return f(),C("div",null,[l(p,{values:s.sizeBorderList,modelValue:s.sizeBorderChoose1,"onUpdate:modelValue":o[0]||(o[0]=a=>s.sizeBorderChoose1=a),size:"lg",border:"",direction:"row",style:{"margin-bottom":"10px"}},null,8,["values","modelValue"]),l(p,{values:s.sizeBorderList,modelValue:s.sizeBorderChoose2,"onUpdate:modelValue":o[1]||(o[1]=a=>s.sizeBorderChoose2=a),size:"md",border:"",direction:"row",style:{"margin-bottom":"10px"}},null,8,["values","modelValue"]),l(p,{values:s.sizeBorderList,modelValue:s.sizeBorderChoose3,"onUpdate:modelValue":o[2]||(o[2]=a=>s.sizeBorderChoose3=a),size:"sm",border:"",disabled:"",direction:"row",style:{"margin-bottom":"10px"}},null,8,["values","modelValue"]),l(p,{modelValue:s.sizeBorderChoose4,"onUpdate:modelValue":o[3]||(o[3]=a=>s.sizeBorderChoose4=a),size:"xs",border:"",direction:"row",style:{"margin-bottom":"10px"}},{default:k(()=>[(f(!0),C(r,null,e(s.sizeBorderList,a=>(f(),g(m,{key:a,value:a},{default:k(()=>[u(h(a),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])}const{defineComponent:E,ref:d}=B,i=E({setup(){const s=["Spring","Summer"],o=d("Spring"),p=d("Spring"),m=d("Spring"),a=d("Spring");return{sizeBorderList:s,sizeBorderChoose1:o,sizeBorderChoose2:p,sizeBorderChoose3:m,sizeBorderChoose4:a}}});return b({render:v},i)}(),"render-demo-8":function(){const{renderList:c,Fragment:l,openBlock:e,createElementBlock:r,toDisplayString:f,createTextVNode:C,resolveComponent:h,withCtx:u,createBlock:k,createVNode:g}=B;function v(s,o){const p=h("d-radio-button"),m=h("d-radio-group");return e(),r("div",null,[g(m,{direction:"row",modelValue:s.buttonChoose1,"onUpdate:modelValue":o[0]||(o[0]=a=>s.buttonChoose1=a),size:"lg",style:{"margin-bottom":"10px"},fill:"rgb(255,193,7)","text-color":"#ca3d3d"},{default:u(()=>[(e(!0),r(l,null,c(s.buttonList1,a=>(e(),k(p,{key:a,value:a},{default:u(()=>[C(f(a),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),g(m,{direction:"row",modelValue:s.buttonChoose2,"onUpdate:modelValue":o[1]||(o[1]=a=>s.buttonChoose2=a),size:"md",style:{"margin-bottom":"10px"}},{default:u(()=>[(e(!0),r(l,null,c(s.buttonList2,a=>(e(),k(p,{key:a.name,value:a.name},{default:u(()=>[C(f(a.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),g(m,{direction:"row",modelValue:s.buttonChoose3,"onUpdate:modelValue":o[2]||(o[2]=a=>s.buttonChoose3=a),size:"sm",style:{"margin-bottom":"10px"}},{default:u(()=>[(e(!0),r(l,null,c(s.buttonList3,a=>(e(),k(p,{key:a.name,value:a.name,disabled:a.disabled},{default:u(()=>[C(f(a.name),1)]),_:2},1032,["value","disabled"]))),128))]),_:1},8,["modelValue"]),g(m,{direction:"row",modelValue:s.buttonChoose4,"onUpdate:modelValue":o[3]||(o[3]=a=>s.buttonChoose4=a),size:"xs",style:{"margin-bottom":"10px"},disabled:""},{default:u(()=>[(e(!0),r(l,null,c(s.buttonList2,a=>(e(),k(p,{key:a.name,value:a.name},{default:u(()=>[C(f(a.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])}const{defineComponent:E,ref:d}=B,i=E({setup(){const s=d(["radio1","radio2","radio3"]);let o=d("radio1");const p=[{name:"radio1"},{name:"radio2"},{name:"radio3"}];let m=d("radio1");const a=[{name:"radio1",disabled:!0},{name:"radio2"},{name:"radio3"}];let L=d("radio1"),D=d("radio1");return{buttonList1:s,buttonChoose1:o,buttonList2:p,buttonChoose2:m,buttonList3:a,buttonChoose3:L,buttonChoose4:D}}});return b({render:v},i)}()}},it='{"title":"Radio \u5355\u9009\u6846","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u76F8\u4E92\u72EC\u7ACB\u7684\u5355\u9009\u9879","slug":"\u76F8\u4E92\u72EC\u7ACB\u7684\u5355\u9009\u9879"},{"level":3,"title":"radio \u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C","slug":"radio-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C"},{"level":3,"title":"radio-group \u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C","slug":"radio-group-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C"},{"level":3,"title":"\u7981\u7528","slug":"\u7981\u7528"},{"level":3,"title":"\u6A2A\u5411\u6392\u5217","slug":"\u6A2A\u5411\u6392\u5217"},{"level":3,"title":"\u7AD6\u5411\u6392\u5217","slug":"\u7AD6\u5411\u6392\u5217"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u5355\u9009\u9879","slug":"\u81EA\u5B9A\u4E49\u5355\u9009\u9879"},{"level":3,"title":"\u5C3A\u5BF8\u548C\u8FB9\u6846","slug":"\u5C3A\u5BF8\u548C\u8FB9\u6846"},{"level":3,"title":"\u6309\u94AE\u5F62\u6001","slug":"\u6309\u94AE\u5F62\u6001"},{"level":3,"title":"Radio \u53C2\u6570","slug":"radio-\u53C2\u6570"},{"level":3,"title":"Radio \u4E8B\u4EF6","slug":"radio-\u4E8B\u4EF6"},{"level":3,"title":"RadioGroup \u53C2\u6570","slug":"radiogroup-\u53C2\u6570"},{"level":3,"title":"RadioGroup \u4E8B\u4EF6","slug":"radiogroup-\u4E8B\u4EF6"},{"level":3,"title":"RadioButton \u53C2\u6570","slug":"radiobutton-\u53C2\u6570"},{"level":3,"title":"Radio \u7C7B\u578B\u5B9A\u4E49","slug":"radio-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/radio/index.md","lastUpdated":1655716121186}',N=w('<h1 id="radio-\u5355\u9009\u6846" tabindex="-1">Radio \u5355\u9009\u6846 <a class="header-anchor" href="#radio-\u5355\u9009\u6846" aria-hidden="true">#</a></h1><p>\u5355\u9009\u6846\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u7528\u6237\u8981\u4ECE\u4E00\u4E2A\u6570\u636E\u96C6\u4E2D\u9009\u62E9\u5355\u4E2A\u9009\u9879\uFF0C\u4E14\u80FD\u5E76\u6392\u67E5\u770B\u6240\u6709\u53EF\u9009\u9879\uFF0C\u9009\u9879\u6570\u91CF\u5728 2~7 \u4E4B\u95F4\u65F6\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u5355\u9009\u6309\u94AE\u3002</p><h3 id="\u76F8\u4E92\u72EC\u7ACB\u7684\u5355\u9009\u9879" tabindex="-1">\u76F8\u4E92\u72EC\u7ACB\u7684\u5355\u9009\u9879 <a class="header-anchor" href="#\u76F8\u4E92\u72EC\u7ACB\u7684\u5355\u9009\u9879" aria-hidden="true">#</a></h3>',5),U=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in baseList"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("baseChoose"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ marginBottom: "),t("span",{class:"token punctuation"},"'"),n("20px"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    The Radio value is: {{ item }}
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" baseList "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'Item1'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Item2'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Item3'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" baseChoose "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Item1'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      baseList`),t("span",{class:"token punctuation"},","),n(`
      baseChoose`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),j=t("h3",{id:"radio-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C",tabindex:"-1"},[n("radio \u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C "),t("a",{class:"header-anchor",href:"#radio-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C","aria-hidden":"true"},"#")],-1),W=t("p",null,"\u6839\u636E\u6761\u4EF6\u5224\u65AD\uFF0C\u7B2C\u4E8C\u9879\u7981\u6B62\u8DF3\u8F6C\u3002",-1),G=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio")]),n(`
    `),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in filterList"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("filterChoose"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":beforeChange"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("filterBeforeChange"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ marginBottom: "),t("span",{class:"token punctuation"},"'"),n("20px"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"@change"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("filterValChange"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    The Radio value is: {{ item }}
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" filterList "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'Item1'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Item2'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Item3'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" filterChoose "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Item1'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      filterList`),t("span",{class:"token punctuation"},","),n(`
      filterChoose`),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token function"},"filterBeforeChange"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"value"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token keyword"},"return"),n(" value "),t("span",{class:"token operator"},"!=="),n(),t("span",{class:"token string"},"'Item2'"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token function"},"filterValChange"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"val"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
        console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'current value'"),t("span",{class:"token punctuation"},","),n(" val"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),$=t("h3",{id:"radio-group-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C",tabindex:"-1"},[n("radio-group \u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C "),t("a",{class:"header-anchor",href:"#radio-group-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C","aria-hidden":"true"},"#")],-1),P=t("p",null,"\u6839\u636E\u6761\u4EF6\u5224\u65AD\uFF0C\u7B2C\u4E8C\u4E2A radio-group \u7981\u6B62\u8DF3\u8F6C\u3002",-1),H=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("groupFilterChoose1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":beforeChange"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("groupFilterBeforeChange"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in groupFilterList1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      {{ item }}
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("groupFilterChoose2"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"disabled"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in groupFilterList2"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      {{ item }}
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" groupFilterList1 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'Item1'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Item2'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Item3'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" groupFilterChoose1 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Item1'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"const"),n(" groupFilterList2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'Spring'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Summer'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Autumn'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Winter'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" groupFilterChoose2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Summer'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      groupFilterList1`),t("span",{class:"token punctuation"},","),n(`
      groupFilterChoose1`),t("span",{class:"token punctuation"},","),n(`
      groupFilterList2`),t("span",{class:"token punctuation"},","),n(`
      groupFilterChoose2`),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token function"},"groupFilterBeforeChange"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"value"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token keyword"},"return"),n(" value "),t("span",{class:"token operator"},"!=="),n(),t("span",{class:"token string"},"'Item2'"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),J=t("h3",{id:"\u7981\u7528",tabindex:"-1"},[n("\u7981\u7528 "),t("a",{class:"header-anchor",href:"#\u7981\u7528","aria-hidden":"true"},"#")],-1),K=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in disabledList"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("disabledChoose"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ marginBottom: "),t("span",{class:"token punctuation"},"'"),n("20px"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"disabled"),t("span",{class:"token punctuation"},">")]),n(`
    The Radio value is: {{ item }}
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" disabledList "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'Item1'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Item2'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Item3'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" disabledChoose "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Item1'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      disabledList`),t("span",{class:"token punctuation"},","),n(`
      disabledChoose`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),M=t("h3",{id:"\u6A2A\u5411\u6392\u5217",tabindex:"-1"},[n("\u6A2A\u5411\u6392\u5217 "),t("a",{class:"header-anchor",href:"#\u6A2A\u5411\u6392\u5217","aria-hidden":"true"},"#")],-1),O=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("directionRowChoose"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in directionRowList"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" The Radio value is: {{ item }} "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" directionRowList "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'Item1'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Item2'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Item3'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" directionRowChoose "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Item1'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      directionRowList`),t("span",{class:"token punctuation"},","),n(`
      directionRowChoose`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),Q=t("h3",{id:"\u7AD6\u5411\u6392\u5217",tabindex:"-1"},[n("\u7AD6\u5411\u6392\u5217 "),t("a",{class:"header-anchor",href:"#\u7AD6\u5411\u6392\u5217","aria-hidden":"true"},"#")],-1),X=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(),t("span",{class:"token attr-name"},":values"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("directionColumnList"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("directionColumnChoose"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" directionColumnList "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'Spring'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Summer'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Autumn'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Winter'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" directionColumnChoose "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Summer'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      directionColumnList`),t("span",{class:"token punctuation"},","),n(`
      directionColumnChoose`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),Y=t("h3",{id:"\u81EA\u5B9A\u4E49\u5355\u9009\u9879",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u5355\u9009\u9879 "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5355\u9009\u9879","aria-hidden":"true"},"#")],-1),Z=t("p",null,"\u6570\u7EC4\u6E90\u53EF\u4E3A\u666E\u901A\u6570\u7EC4\u3001\u5BF9\u8C61\u6570\u7EC4\u7B49\u3002",-1),tt=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("customChoose1"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in customList1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" The Radio value is: {{ item }} "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("customChoose2"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in customList2"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.name"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.name"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" The Radio value is: {{ item.name }} "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" customList1 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'Item1'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Item2'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Item3'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" customChoose1 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Item1'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"const"),n(" customList2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Item1'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Item2'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Item3'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" customChoose2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Item3'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      customList1`),t("span",{class:"token punctuation"},","),n(`
      customChoose1`),t("span",{class:"token punctuation"},","),n(`
      customList2`),t("span",{class:"token punctuation"},","),n(`
      customChoose2`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),nt=t("h3",{id:"\u5C3A\u5BF8\u548C\u8FB9\u6846",tabindex:"-1"},[n("\u5C3A\u5BF8\u548C\u8FB9\u6846 "),t("a",{class:"header-anchor",href:"#\u5C3A\u5BF8\u548C\u8FB9\u6846","aria-hidden":"true"},"#")],-1),at=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(`
    `),t("span",{class:"token attr-name"},":values"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sizeBorderList"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sizeBorderChoose1"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("lg"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"border"),n(`
    `),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 10px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),n(`
  `),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(`
    `),t("span",{class:"token attr-name"},":values"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sizeBorderList"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sizeBorderChoose2"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("md"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"border"),n(`
    `),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 10px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),n(`
  `),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(`
    `),t("span",{class:"token attr-name"},":values"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sizeBorderList"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sizeBorderChoose3"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sm"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"border"),n(`
    `),t("span",{class:"token attr-name"},"disabled"),n(`
    `),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 10px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),n(`
  `),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sizeBorderChoose4"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("xs"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"border"),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 10px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in sizeBorderList"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("{{ item }} "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" sizeBorderList "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'Spring'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Summer'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" sizeBorderChoose1 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Spring'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" sizeBorderChoose2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Spring'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" sizeBorderChoose3 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Spring'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" sizeBorderChoose4 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Spring'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      sizeBorderList`),t("span",{class:"token punctuation"},","),n(`
      sizeBorderChoose1`),t("span",{class:"token punctuation"},","),n(`
      sizeBorderChoose2`),t("span",{class:"token punctuation"},","),n(`
      sizeBorderChoose3`),t("span",{class:"token punctuation"},","),n(`
      sizeBorderChoose4`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),st=t("h3",{id:"\u6309\u94AE\u5F62\u6001",tabindex:"-1"},[n("\u6309\u94AE\u5F62\u6001 "),t("a",{class:"header-anchor",href:"#\u6309\u94AE\u5F62\u6001","aria-hidden":"true"},"#")],-1),et=t("p",null,"\u6570\u7EC4\u6E90\u53EF\u4E3A\u666E\u901A\u6570\u7EC4\u3001\u5BF9\u8C61\u6570\u7EC4\u7B49\u3002",-1),ot=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("buttonChoose1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("lg"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 10px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),n(),t("span",{class:"token attr-name"},"fill"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rgb(255,193,7)"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"text-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("#ca3d3d"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-button")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in buttonList1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" {{ item }} "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("buttonChoose2"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("md"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 10px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-button")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in buttonList2"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.name"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.name"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("{{ item.name }} "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("buttonChoose3"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sm"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 10px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-button")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in buttonList3"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.name"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.name"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":disabled"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.disabled"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n(`{{ item.name }}
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("buttonChoose4"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("xs"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 10px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),n(),t("span",{class:"token attr-name"},"disabled"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-button")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in buttonList2"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.name"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.name"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("{{ item.name }} "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" buttonList1 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'radio1'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'radio2'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'radio3'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" buttonChoose1 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'radio1'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"const"),n(" buttonList2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'radio1'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'radio2'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'radio3'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" buttonChoose2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'radio1'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" buttonList3 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'radio1'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'radio2'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'radio3'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" buttonChoose3 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'radio1'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" buttonChoose4 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'radio1'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      buttonList1`),t("span",{class:"token punctuation"},","),n(`
      buttonChoose1`),t("span",{class:"token punctuation"},","),n(`
      buttonList2`),t("span",{class:"token punctuation"},","),n(`
      buttonChoose2`),t("span",{class:"token punctuation"},","),n(`
      buttonList3`),t("span",{class:"token punctuation"},","),n(`
      buttonChoose3`),t("span",{class:"token punctuation"},","),n(`
      buttonChoose4`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),ut=w(`<h3 id="radio-\u53C2\u6570" tabindex="-1">Radio \u53C2\u6570 <a class="header-anchor" href="#radio-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;"><code>string |number | boolean</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u7ED1\u5B9A\u503C</td><td style="text-align:left;"><a href="#%E7%9B%B8%E4%BA%92%E7%8B%AC%E7%AB%8B%E7%9A%84%E5%8D%95%E9%80%89%E9%A1%B9">\u4E92\u76F8\u72EC\u7ACB\u7684\u5355\u9009\u9879</a></td></tr><tr><td style="text-align:left;">value</td><td style="text-align:left;"><code>string |number | boolean</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u5355\u9009\u9879\u503C</td><td style="text-align:left;"><a href="#%E7%9B%B8%E4%BA%92%E7%8B%AC%E7%AB%8B%E7%9A%84%E5%8D%95%E9%80%89%E9%A1%B9">\u4E92\u76F8\u72EC\u7ACB\u7684\u5355\u9009\u9879</a></td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5355\u9009\u9879\u540D\u79F0</td><td style="text-align:left;"><a href="#%E7%9B%B8%E4%BA%92%E7%8B%AC%E7%AB%8B%E7%9A%84%E5%8D%95%E9%80%89%E9%A1%B9">\u4E92\u76F8\u72EC\u7ACB\u7684\u5355\u9009\u9879</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u8BE5\u5355\u9009\u9879</td><td style="text-align:left;"><a href="#%E7%A6%81%E7%94%A8">\u7981\u7528</a></td></tr><tr><td style="text-align:left;">before-change</td><td style="text-align:left;"><code>Function / Promise</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0Cradio \u5207\u6362\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C<br>\u8FD4\u56DE false \u53EF\u4EE5\u963B\u6B62 radio \u5207\u6362</td><td style="text-align:left;"><a href="#radio-%E6%A0%B9%E6%8D%AE%E6%9D%A1%E4%BB%B6%E7%BB%88%E6%AD%A2%E5%88%87%E6%8D%A2%E6%93%8D%E4%BD%9C">\u56DE\u8C03\u5207\u6362</a></td></tr><tr><td style="text-align:left;">border</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C \u662F\u5426\u6709\u8FB9\u6846</td><td style="text-align:left;"><a href="#%E5%B0%BA%E5%AF%B8%E5%92%8C%E8%BE%B9%E6%A1%86">\u8FB9\u6846</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><a href="#iradiosize">IRadioSize</a></td><td style="text-align:left;">md</td><td style="text-align:left;">\u53EF\u9009\uFF0C radio \u5C3A\u5BF8\uFF0C\u53EA\u6709\u5728 border \u5C5E\u6027\u5B58\u5728\u65F6\u751F\u6548</td><td style="text-align:left;"><a href="#%E5%B0%BA%E5%AF%B8%E5%92%8C%E8%BE%B9%E6%A1%86">\u5C3A\u5BF8</a></td></tr></tbody></table><h3 id="radio-\u4E8B\u4EF6" tabindex="-1">Radio \u4E8B\u4EF6 <a class="header-anchor" href="#radio-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td style="text-align:left;"><code>EventEmitter&lt;string&gt;</code></td><td style="text-align:left;">\u5355\u9009\u9879\u503C\u6539\u53D8\u65F6\u89E6\u53D1\uFF0C\u8FD4\u56DE\u9009\u4E2D\u7684\u503C</td><td style="text-align:left;"><a href="#%E7%9B%B8%E4%BA%92%E7%8B%AC%E7%AB%8B%E7%9A%84%E5%8D%95%E9%80%89%E9%A1%B9">\u4E92\u76F8\u72EC\u7ACB\u7684\u5355\u9009\u9879</a></td></tr></tbody></table><h3 id="radiogroup-\u53C2\u6570" tabindex="-1">RadioGroup \u53C2\u6570 <a class="header-anchor" href="#radiogroup-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;"><code>string |number | boolean</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u7ED1\u5B9A\u503C</td><td><a href="#%E7%AB%96%E5%90%91%E6%8E%92%E5%88%97">\u7AD6\u5411\u6392\u5217</a></td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5355\u9009\u6846\u7684\u540D\u79F0</td><td><a href="#%E7%AB%96%E5%90%91%E6%8E%92%E5%88%97">\u7AD6\u5411\u6392\u5217</a></td></tr><tr><td style="text-align:left;">values</td><td style="text-align:left;"><code>array</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5355\u9009\u6570\u636E\u7EC4</td><td><a href="#%E7%AB%96%E5%90%91%E6%8E%92%E5%88%97">\u7AD6\u5411\u6392\u5217</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u8BE5\u9009\u9879\u7EC4</td><td><a href="#radio-group-%E6%A0%B9%E6%8D%AE%E6%9D%A1%E4%BB%B6%E7%BB%88%E6%AD%A2%E5%88%87%E6%8D%A2%E6%93%8D%E4%BD%9C">radio-group \u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C</a></td></tr><tr><td style="text-align:left;">direction</td><td style="text-align:left;"><code>&#39;row&#39;</code> | <code>&#39;column&#39;</code></td><td style="text-align:left;">&#39;column&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u6A2A\u5411\u6216\u7EB5\u5411\u6392\u5217</td><td><a href="#%E6%A8%AA%E5%90%91%E6%8E%92%E5%88%97">\u6A2A\u5411\u6392\u5217</a></td></tr><tr><td style="text-align:left;">before-change</td><td style="text-align:left;"><code>Function</code> | <code>Promise</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0Cradio-group \u5207\u6362\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C<br>\u8FD4\u56DE false \u53EF\u4EE5\u963B\u6B62 radio-group \u7684\u5207\u6362</td><td><a href="#radio-group-%E6%A0%B9%E6%8D%AE%E6%9D%A1%E4%BB%B6%E7%BB%88%E6%AD%A2%E5%88%87%E6%8D%A2%E6%93%8D%E4%BD%9C">\u56DE\u8C03\u5207\u6362</a></td></tr><tr><td style="text-align:left;">border</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C \u662F\u5426\u6709\u8FB9\u6846</td><td><a href="#%E5%B0%BA%E5%AF%B8%E5%92%8C%E8%BE%B9%E6%A1%86">\u8FB9\u6846</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><a href="#iradiosize">IRadioSize</a></td><td style="text-align:left;">md</td><td style="text-align:left;">\u53EF\u9009\uFF0C radio \u5C3A\u5BF8\uFF0C\u53EA\u6709\u5728 border \u5C5E\u6027\u5B58\u5728\u65F6\u751F\u6548</td><td><a href="#%E5%B0%BA%E5%AF%B8%E5%92%8C%E8%BE%B9%E6%A1%86">\u5C3A\u5BF8</a></td></tr><tr><td style="text-align:left;">fill</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272</td><td><a href="#%E6%8C%89%E9%92%AE%E5%BD%A2%E6%80%81">\u6309\u94AE\u5F62\u6001</a></td></tr><tr><td style="text-align:left;">text-color</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C \u6309\u94AE\u88AB\u9009\u4E2D\u7684\u5B57\u4F53\u6837\u5F0F\uFF0C\u53EA\u5B58\u5728\u4E8E\u6309\u94AE\u5F62\u6001\u4E2D</td><td><a href="#%E6%8C%89%E9%92%AE%E5%BD%A2%E6%80%81">\u6309\u94AE\u5F62\u6001</a></td></tr></tbody></table><h3 id="radiogroup-\u4E8B\u4EF6" tabindex="-1">RadioGroup \u4E8B\u4EF6 <a class="header-anchor" href="#radiogroup-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td style="text-align:left;"><code>EventEmitter&lt;string&gt;</code></td><td style="text-align:left;">\u5355\u9009\u9879\u503C\u6539\u53D8\u65F6\u89E6\u53D1\uFF0C\u8FD4\u56DE\u9009\u4E2D\u7684\u503C</td><td style="text-align:left;"><a href="#%E7%AB%96%E5%90%91%E6%8E%92%E5%88%97">\u7AD6\u5411\u6392\u5217</a></td></tr></tbody></table><h3 id="radiobutton-\u53C2\u6570" tabindex="-1">RadioButton \u53C2\u6570 <a class="header-anchor" href="#radiobutton-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;"><code>string |number | boolean</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u5355\u9009\u9879\u503C</td><td style="text-align:left;"><a href="#%E6%8C%89%E9%92%AE%E5%BD%A2%E6%80%81">\u6309\u94AE\u5F62\u6001</a></td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5355\u9009\u9879\u540D\u79F0</td><td style="text-align:left;"><a href="#%E6%8C%89%E9%92%AE%E5%BD%A2%E6%80%81">\u6309\u94AE\u5F62\u6001</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u8BE5\u5355\u9009\u9879</td><td style="text-align:left;"><a href="#%E6%8C%89%E9%92%AE%E5%BD%A2%E6%80%81">\u6309\u94AE\u5F62\u6001</a></td></tr></tbody></table><h3 id="radio-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Radio \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#radio-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="iradiosize" tabindex="-1">IRadioSize <a class="header-anchor" href="#iradiosize" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">IRadioSize</span> <span class="token operator">=</span> <span class="token string">&#39;lg&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;md&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;sm&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;xs&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,13);function lt(c,l,e,r,f,C){const h=x("render-demo-0"),u=x("demo"),k=x("render-demo-1"),g=x("render-demo-2"),v=x("render-demo-3"),E=x("render-demo-4"),d=x("render-demo-5"),i=x("render-demo-6"),s=x("render-demo-7"),o=x("render-demo-8");return R(),S("div",null,[N,y(u,{sourceCode:`<template>
  <d-radio v-for="item in baseList" v-model="baseChoose" :key="item" :value="item" :style="{ marginBottom: '20px' }">
    The Radio value is: {{ item }}
  </d-radio>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const baseList = ref(['Item1', 'Item2', 'Item3']);
    let baseChoose = ref('Item1');

    return {
      baseList,
      baseChoose,
    };
  },
});
<\/script>
`},{highlight:F(()=>[U]),default:F(()=>[y(h)]),_:1}),j,W,y(u,{sourceCode:`<template>
  <d-radio
    v-for="item in filterList"
    v-model="filterChoose"
    :key="item"
    :value="item"
    :beforeChange="filterBeforeChange"
    :style="{ marginBottom: '20px' }"
    @change="filterValChange"
  >
    The Radio value is: {{ item }}
  </d-radio>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const filterList = ref(['Item1', 'Item2', 'Item3']);
    let filterChoose = ref('Item1');

    return {
      filterList,
      filterChoose,
      filterBeforeChange(value) {
        return value !== 'Item2';
      },
      filterValChange(val) {
        console.log('current value', val);
      },
    };
  },
});
<\/script>
`},{highlight:F(()=>[G]),default:F(()=>[y(k)]),_:1}),$,P,y(u,{sourceCode:`<template>
  <d-radio-group direction="row" v-model="groupFilterChoose1" :beforeChange="groupFilterBeforeChange">
    <d-radio v-for="item in groupFilterList1" :key="item" :value="item">
      {{ item }}
    </d-radio>
  </d-radio-group>
  <d-radio-group v-model="groupFilterChoose2" direction="row" disabled>
    <d-radio v-for="item in groupFilterList2" :key="item" :value="item">
      {{ item }}
    </d-radio>
  </d-radio-group>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const groupFilterList1 = ref(['Item1', 'Item2', 'Item3']);
    let groupFilterChoose1 = ref('Item1');

    const groupFilterList2 = ['Spring', 'Summer', 'Autumn', 'Winter'];
    const groupFilterChoose2 = ref('Summer');

    return {
      groupFilterList1,
      groupFilterChoose1,
      groupFilterList2,
      groupFilterChoose2,
      groupFilterBeforeChange(value) {
        return value !== 'Item2';
      },
    };
  },
});
<\/script>
`},{highlight:F(()=>[H]),default:F(()=>[y(g)]),_:1}),J,y(u,{sourceCode:`<template>
  <d-radio v-for="item in disabledList" v-model="disabledChoose" :key="item" :value="item" :style="{ marginBottom: '20px' }" disabled>
    The Radio value is: {{ item }}
  </d-radio>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const disabledList = ref(['Item1', 'Item2', 'Item3']);
    let disabledChoose = ref('Item1');

    return {
      disabledList,
      disabledChoose,
    };
  },
});
<\/script>
`},{highlight:F(()=>[K]),default:F(()=>[y(v)]),_:1}),M,y(u,{sourceCode:`<template>
  <d-radio-group direction="row" v-model="directionRowChoose">
    <d-radio v-for="item in directionRowList" :key="item" :value="item"> The Radio value is: {{ item }} </d-radio>
  </d-radio-group>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const directionRowList = ref(['Item1', 'Item2', 'Item3']);
    let directionRowChoose = ref('Item1');

    return {
      directionRowList,
      directionRowChoose,
    };
  },
});
<\/script>
`},{highlight:F(()=>[O]),default:F(()=>[y(E)]),_:1}),Q,y(u,{sourceCode:`<template>
  <d-radio-group :values="directionColumnList" v-model="directionColumnChoose"></d-radio-group>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const directionColumnList = ['Spring', 'Summer', 'Autumn', 'Winter'];
    const directionColumnChoose = ref('Summer');

    return {
      directionColumnList,
      directionColumnChoose,
    };
  },
});
<\/script>
`},{highlight:F(()=>[X]),default:F(()=>[y(d)]),_:1}),Y,Z,y(u,{sourceCode:`<template>
  <d-radio-group direction="row" v-model="customChoose1">
    <d-radio v-for="item in customList1" :key="item" :value="item"> The Radio value is: {{ item }} </d-radio>
  </d-radio-group>
  <d-radio-group direction="row" v-model="customChoose2">
    <d-radio v-for="item in customList2" :key="item.name" :value="item.name"> The Radio value is: {{ item.name }} </d-radio>
  </d-radio-group>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const customList1 = ref(['Item1', 'Item2', 'Item3']);
    let customChoose1 = ref('Item1');

    const customList2 = [{ name: 'Item1' }, { name: 'Item2' }, { name: 'Item3' }];
    let customChoose2 = ref('Item3');

    return {
      customList1,
      customChoose1,
      customList2,
      customChoose2,
    };
  },
});
<\/script>
`},{highlight:F(()=>[tt]),default:F(()=>[y(i)]),_:1}),nt,y(u,{sourceCode:`<template>
  <d-radio-group
    :values="sizeBorderList"
    v-model="sizeBorderChoose1"
    size="lg"
    border
    direction="row"
    style="margin-bottom: 10px;"
  ></d-radio-group>
  <d-radio-group
    :values="sizeBorderList"
    v-model="sizeBorderChoose2"
    size="md"
    border
    direction="row"
    style="margin-bottom: 10px;"
  ></d-radio-group>
  <d-radio-group
    :values="sizeBorderList"
    v-model="sizeBorderChoose3"
    size="sm"
    border
    disabled
    direction="row"
    style="margin-bottom: 10px;"
  ></d-radio-group>
  <d-radio-group v-model="sizeBorderChoose4" size="xs" border direction="row" style="margin-bottom: 10px;">
    <d-radio v-for="item in sizeBorderList" :key="item" :value="item">{{ item }} </d-radio>
  </d-radio-group>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const sizeBorderList = ['Spring', 'Summer'];
    const sizeBorderChoose1 = ref('Spring');
    const sizeBorderChoose2 = ref('Spring');
    const sizeBorderChoose3 = ref('Spring');
    const sizeBorderChoose4 = ref('Spring');

    return {
      sizeBorderList,
      sizeBorderChoose1,
      sizeBorderChoose2,
      sizeBorderChoose3,
      sizeBorderChoose4,
    };
  },
});
<\/script>
`},{highlight:F(()=>[at]),default:F(()=>[y(s)]),_:1}),st,et,y(u,{sourceCode:`<template>
  <d-radio-group direction="row" v-model="buttonChoose1" size="lg" style="margin-bottom: 10px;" fill="rgb(255,193,7)" text-color="#ca3d3d">
    <d-radio-button v-for="item in buttonList1" :key="item" :value="item"> {{ item }} </d-radio-button>
  </d-radio-group>
  <d-radio-group direction="row" v-model="buttonChoose2" size="md" style="margin-bottom: 10px;">
    <d-radio-button v-for="item in buttonList2" :key="item.name" :value="item.name">{{ item.name }} </d-radio-button>
  </d-radio-group>
  <d-radio-group direction="row" v-model="buttonChoose3" size="sm" style="margin-bottom: 10px;">
    <d-radio-button v-for="item in buttonList3" :key="item.name" :value="item.name" :disabled="item.disabled"
      >{{ item.name }}
    </d-radio-button>
  </d-radio-group>
  <d-radio-group direction="row" v-model="buttonChoose4" size="xs" style="margin-bottom: 10px;" disabled>
    <d-radio-button v-for="item in buttonList2" :key="item.name" :value="item.name">{{ item.name }} </d-radio-button>
  </d-radio-group>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const buttonList1 = ref(['radio1', 'radio2', 'radio3']);
    let buttonChoose1 = ref('radio1');

    const buttonList2 = [{ name: 'radio1' }, { name: 'radio2' }, { name: 'radio3' }];
    let buttonChoose2 = ref('radio1');
    const buttonList3 = [{ name: 'radio1', disabled: true }, { name: 'radio2' }, { name: 'radio3' }];
    let buttonChoose3 = ref('radio1');
    let buttonChoose4 = ref('radio1');

    return {
      buttonList1,
      buttonChoose1,
      buttonList2,
      buttonChoose2,
      buttonList3,
      buttonChoose3,
      buttonChoose4,
    };
  },
});
<\/script>
`},{highlight:F(()=>[ot]),default:F(()=>[y(o)]),_:1}),ut])}var rt=z(T,[["render",lt]]);export{it as __pageData,rt as default};
