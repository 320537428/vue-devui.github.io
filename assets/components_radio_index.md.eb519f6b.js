var S=Object.defineProperty;var D=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var I=(c,p,a)=>p in c?S(c,p,{enumerable:!0,configurable:!0,writable:!0,value:a}):c[p]=a,_=(c,p)=>{for(var a in p||(p={}))z.call(p,a)&&I(c,a,p[a]);if(D)for(var a of D(p))R.call(p,a)&&I(c,a,p[a]);return c};import{_ as N,V as y,r as A,o as T,c as U,a as F,w as b,b as V,d as t,e as n}from"./app.d1c26241.js";const W={name:"component-doc",components:{"render-demo-0":function(){const{renderList:c,Fragment:p,openBlock:a,createElementBlock:i,toDisplayString:f,createTextVNode:h,resolveComponent:g,withCtx:l,createBlock:k}=y;function m(u,s){const o=g("d-radio");return a(),i("div",null,[(a(!0),i(p,null,c(u.baseList,d=>(a(),k(o,{modelValue:u.baseChoose,"onUpdate:modelValue":s[0]||(s[0]=B=>u.baseChoose=B),key:d,value:d,class:"mb-2"},{default:l(()=>[h(" The Radio value is: "+f(d),1)]),_:2},1032,["modelValue","value"]))),128))])}const{defineComponent:C,ref:E}=y,r=C({setup(){const u=E(["Item1","Item2","Item3"]);let s=E("Item1");return{baseList:u,baseChoose:s}}});return _({render:m},r)}(),"render-demo-1":function(){const{renderList:c,Fragment:p,openBlock:a,createElementBlock:i,toDisplayString:f,createTextVNode:h,resolveComponent:g,withCtx:l,createBlock:k}=y;function m(u,s){const o=g("d-radio");return a(),i("div",null,[(a(!0),i(p,null,c(u.filterList,d=>(a(),k(o,{modelValue:u.filterChoose,"onUpdate:modelValue":s[0]||(s[0]=B=>u.filterChoose=B),key:d,value:d,beforeChange:u.filterBeforeChange,class:"mb-2",onChange:u.filterValChange},{default:l(()=>[h(" The Radio value is: "+f(d),1)]),_:2},1032,["modelValue","value","beforeChange","onChange"]))),128))])}const{defineComponent:C,ref:E}=y,r=C({setup(){const u=E(["Item1","Item2","Item3"]);let s=E("Item1");return{filterList:u,filterChoose:s,filterBeforeChange(o){return o!=="Item2"},filterValChange(o){console.log("current value",o)}}}});return _({render:m},r)}(),"render-demo-2":function(){const{renderList:c,Fragment:p,openBlock:a,createElementBlock:i,toDisplayString:f,createTextVNode:h,resolveComponent:g,withCtx:l,createBlock:k,createVNode:m}=y;function C(s,o){const d=g("d-radio"),B=g("d-radio-group");return a(),i("div",null,[m(B,{direction:"row",modelValue:s.groupFilterChoose1,"onUpdate:modelValue":o[0]||(o[0]=e=>s.groupFilterChoose1=e),beforeChange:s.groupFilterBeforeChange},{default:l(()=>[(a(!0),i(p,null,c(s.groupFilterList1,e=>(a(),k(d,{key:e,value:e},{default:l(()=>[h(f(e),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","beforeChange"]),m(B,{modelValue:s.groupFilterChoose2,"onUpdate:modelValue":o[1]||(o[1]=e=>s.groupFilterChoose2=e),direction:"row",disabled:""},{default:l(()=>[(a(!0),i(p,null,c(s.groupFilterList2,e=>(a(),k(d,{key:e,value:e},{default:l(()=>[h(f(e),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])}const{defineComponent:E,ref:r}=y,u=E({setup(){const s=r(["Item1","Item2","Item3"]);let o=r("Item1");const d=["Spring","Summer","Autumn","Winter"],B=r("Summer");return{groupFilterList1:s,groupFilterChoose1:o,groupFilterList2:d,groupFilterChoose2:B,groupFilterBeforeChange(e){return e!=="Item2"}}}});return _({render:C},u)}(),"render-demo-3":function(){const{renderList:c,Fragment:p,openBlock:a,createElementBlock:i,toDisplayString:f,createTextVNode:h,resolveComponent:g,withCtx:l,createBlock:k}=y;function m(u,s){const o=g("d-radio");return a(),i("div",null,[(a(!0),i(p,null,c(u.disabledList,d=>(a(),k(o,{modelValue:u.disabledChoose,"onUpdate:modelValue":s[0]||(s[0]=B=>u.disabledChoose=B),key:d,value:d,class:"mb-2",disabled:""},{default:l(()=>[h(" The Radio value is: "+f(d),1)]),_:2},1032,["modelValue","value"]))),128))])}const{defineComponent:C,ref:E}=y,r=C({setup(){const u=E(["Item1","Item2","Item3"]);let s=E("Item1");return{disabledList:u,disabledChoose:s}}});return _({render:m},r)}(),"render-demo-4":function(){const{renderList:c,Fragment:p,openBlock:a,createElementBlock:i,toDisplayString:f,createTextVNode:h,resolveComponent:g,withCtx:l,createBlock:k,createVNode:m}=y;function C(s,o){const d=g("d-radio"),B=g("d-radio-group");return a(),i("div",null,[m(B,{direction:"row",modelValue:s.directionRowChoose,"onUpdate:modelValue":o[0]||(o[0]=e=>s.directionRowChoose=e)},{default:l(()=>[(a(!0),i(p,null,c(s.directionRowList,e=>(a(),k(d,{key:e,value:e},{default:l(()=>[h(" The Radio value is: "+f(e),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])}const{defineComponent:E,ref:r}=y,u=E({setup(){const s=r(["Item1","Item2","Item3"]);let o=r("Item1");return{directionRowList:s,directionRowChoose:o}}});return _({render:C},u)}(),"render-demo-5":function(){const{resolveComponent:c,createVNode:p,openBlock:a,createElementBlock:i}=y;function f(k,m){const C=c("d-radio-group");return a(),i("div",null,[p(C,{values:k.directionColumnList,modelValue:k.directionColumnChoose,"onUpdate:modelValue":m[0]||(m[0]=E=>k.directionColumnChoose=E)},null,8,["values","modelValue"])])}const{defineComponent:h,ref:g}=y,l=h({setup(){const k=["Spring","Summer","Autumn","Winter"],m=g("Summer");return{directionColumnList:k,directionColumnChoose:m}}});return _({render:f},l)}(),"render-demo-6":function(){const{renderList:c,Fragment:p,openBlock:a,createElementBlock:i,toDisplayString:f,createTextVNode:h,resolveComponent:g,withCtx:l,createBlock:k,createVNode:m}=y;function C(s,o){const d=g("d-radio"),B=g("d-radio-group");return a(),i("div",null,[m(B,{direction:"row",modelValue:s.customChoose1,"onUpdate:modelValue":o[0]||(o[0]=e=>s.customChoose1=e)},{default:l(()=>[(a(!0),i(p,null,c(s.customList1,e=>(a(),k(d,{key:e,value:e},{default:l(()=>[h(" The Radio value is: "+f(e),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),m(B,{direction:"row",modelValue:s.customChoose2,"onUpdate:modelValue":o[1]||(o[1]=e=>s.customChoose2=e)},{default:l(()=>[(a(!0),i(p,null,c(s.customList2,e=>(a(),k(d,{key:e.name,value:e.name},{default:l(()=>[h(" The Radio value is: "+f(e.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])}const{defineComponent:E,ref:r}=y,u=E({setup(){const s=r(["Item1","Item2","Item3"]);let o=r("Item1");const d=[{name:"Item1"},{name:"Item2"},{name:"Item3"}];let B=r("Item3");return{customList1:s,customChoose1:o,customList2:d,customChoose2:B}}});return _({render:C},u)}(),"render-demo-7":function(){const{createElementVNode:c,resolveComponent:p,createVNode:a,openBlock:i,createElementBlock:f}=y,h=c("h4",null,"Small",-1),g=c("h4",null,"Middle",-1),l=c("h4",null,"Large",-1);function k(r,u){const s=p("d-radio-group");return i(),f("div",null,[h,a(s,{values:r.sizeBorderList,modelValue:r.sizeBorderChoose3,"onUpdate:modelValue":u[0]||(u[0]=o=>r.sizeBorderChoose3=o),size:"sm",border:"",direction:"row",style:{"margin-bottom":"10px"}},null,8,["values","modelValue"]),g,a(s,{values:r.sizeBorderList,modelValue:r.sizeBorderChoose2,"onUpdate:modelValue":u[1]||(u[1]=o=>r.sizeBorderChoose2=o),size:"md",border:"",direction:"row",style:{"margin-bottom":"10px"}},null,8,["values","modelValue"]),l,a(s,{values:r.sizeBorderList,modelValue:r.sizeBorderChoose1,"onUpdate:modelValue":u[2]||(u[2]=o=>r.sizeBorderChoose1=o),size:"lg",border:"",direction:"row",style:{"margin-bottom":"10px"}},null,8,["values","modelValue"])])}const{defineComponent:m,ref:C}=y,E=m({setup(){const r=["Spring","Summer"],u=C("Spring"),s=C("Spring"),o=C("Spring");return{sizeBorderList:r,sizeBorderChoose1:u,sizeBorderChoose2:s,sizeBorderChoose3:o}}});return _({render:k},E)}(),"render-demo-8":function(){const{createElementVNode:c,renderList:p,Fragment:a,openBlock:i,createElementBlock:f,toDisplayString:h,createTextVNode:g,resolveComponent:l,withCtx:k,createBlock:m,createVNode:C}=y,E=c("h4",null,"\u7981\u7528",-1),r=c("h4",null,"\u9ED8\u8BA4",-1),u=c("h4",null,"\u81EA\u5B9A\u4E49\u586B\u5145\u989C\u8272\u3001\u6587\u5B57\u989C\u8272",-1);function s(e,x){const w=l("d-radio-button"),L=l("d-radio-group");return i(),f("div",null,[E,C(L,{direction:"row",modelValue:e.buttonChoose1,"onUpdate:modelValue":x[0]||(x[0]=v=>e.buttonChoose1=v),size:"sm",style:{"margin-bottom":"10px"}},{default:k(()=>[(i(!0),f(a,null,p(e.buttonList1,v=>(i(),m(w,{key:v.name,value:v.name,disabled:v.disabled},{default:k(()=>[g(h(v.name),1)]),_:2},1032,["value","disabled"]))),128))]),_:1},8,["modelValue"]),r,C(L,{direction:"row",modelValue:e.buttonChoose2,"onUpdate:modelValue":x[1]||(x[1]=v=>e.buttonChoose2=v),size:"md",style:{"margin-bottom":"10px"}},{default:k(()=>[(i(!0),f(a,null,p(e.buttonList2,v=>(i(),m(w,{key:v.name,value:v.name},{default:k(()=>[g(h(v.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),u,C(L,{direction:"row",modelValue:e.buttonChoose3,"onUpdate:modelValue":x[2]||(x[2]=v=>e.buttonChoose3=v),size:"lg",style:{"margin-bottom":"10px"},fill:"rgb(255,193,7)","text-color":"#ca3d3d"},{default:k(()=>[(i(!0),f(a,null,p(e.buttonList3,v=>(i(),m(w,{key:v,value:v},{default:k(()=>[g(h(v),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])}const{defineComponent:o,ref:d}=y,B=o({setup(){const e=[{name:"Spring",disabled:!0},{name:"Summer"},{name:"Autumn"},{name:"Winter"}];let x=d("Summer");const w=[{name:"Spring"},{name:"Summer"},{name:"Autumn"},{name:"Winter"}];let L=d("Spring");const v=d(["Spring","Summer","Autumn","Winter"]);let q=d("Spring");return{buttonList1:e,buttonChoose1:x,buttonList2:w,buttonChoose2:L,buttonList3:v,buttonChoose3:q}}});return _({render:s},B)}()}},dt='{"title":"Radio \u5355\u9009\u6846","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u76F8\u4E92\u72EC\u7ACB\u7684\u5355\u9009\u9879","slug":"\u76F8\u4E92\u72EC\u7ACB\u7684\u5355\u9009\u9879"},{"level":3,"title":"radio \u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C","slug":"radio-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C"},{"level":3,"title":"radio-group \u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C","slug":"radio-group-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C"},{"level":3,"title":"\u7981\u7528","slug":"\u7981\u7528"},{"level":3,"title":"\u6A2A\u5411\u6392\u5217","slug":"\u6A2A\u5411\u6392\u5217"},{"level":3,"title":"\u7AD6\u5411\u6392\u5217","slug":"\u7AD6\u5411\u6392\u5217"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u5355\u9009\u9879","slug":"\u81EA\u5B9A\u4E49\u5355\u9009\u9879"},{"level":3,"title":"\u5C3A\u5BF8\u548C\u8FB9\u6846","slug":"\u5C3A\u5BF8\u548C\u8FB9\u6846"},{"level":3,"title":"\u6309\u94AE\u5F62\u6001","slug":"\u6309\u94AE\u5F62\u6001"},{"level":3,"title":"Radio \u53C2\u6570","slug":"radio-\u53C2\u6570"},{"level":3,"title":"Radio \u4E8B\u4EF6","slug":"radio-\u4E8B\u4EF6"},{"level":3,"title":"RadioGroup \u53C2\u6570","slug":"radiogroup-\u53C2\u6570"},{"level":3,"title":"RadioGroup \u4E8B\u4EF6","slug":"radiogroup-\u4E8B\u4EF6"},{"level":3,"title":"RadioButton \u53C2\u6570","slug":"radiobutton-\u53C2\u6570"},{"level":3,"title":"Radio \u7C7B\u578B\u5B9A\u4E49","slug":"radio-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/radio/index.md","lastUpdated":1662898872013}',j=V('<h1 id="radio-\u5355\u9009\u6846" tabindex="-1">Radio \u5355\u9009\u6846 <a class="header-anchor" href="#radio-\u5355\u9009\u6846" aria-hidden="true">#</a></h1><p>\u5355\u9009\u6846\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u7528\u6237\u8981\u4ECE\u4E00\u4E2A\u6570\u636E\u96C6\u4E2D\u9009\u62E9\u5355\u4E2A\u9009\u9879\uFF0C\u4E14\u80FD\u5E76\u6392\u67E5\u770B\u6240\u6709\u53EF\u9009\u9879\uFF0C\u9009\u9879\u6570\u91CF\u5728 2~7 \u4E4B\u95F4\u65F6\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u5355\u9009\u6309\u94AE\u3002</p><h3 id="\u76F8\u4E92\u72EC\u7ACB\u7684\u5355\u9009\u9879" tabindex="-1">\u76F8\u4E92\u72EC\u7ACB\u7684\u5355\u9009\u9879 <a class="header-anchor" href="#\u76F8\u4E92\u72EC\u7ACB\u7684\u5355\u9009\u9879" aria-hidden="true">#</a></h3>',5),G=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in baseList"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("baseChoose"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb-2"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),$=t("h3",{id:"radio-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C",tabindex:"-1"},[n("radio \u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C "),t("a",{class:"header-anchor",href:"#radio-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C","aria-hidden":"true"},"#")],-1),M=t("p",null,"\u6839\u636E\u6761\u4EF6\u5224\u65AD\uFF0C\u7B2C\u4E8C\u9879\u7981\u6B62\u8DF3\u8F6C\u3002",-1),P=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio")]),n(`
    `),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in filterList"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("filterChoose"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":beforeChange"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("filterBeforeChange"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb-2"),t("span",{class:"token punctuation"},'"')]),n(`
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
`)])])],-1),H=t("h3",{id:"radio-group-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C",tabindex:"-1"},[n("radio-group \u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C "),t("a",{class:"header-anchor",href:"#radio-group-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C","aria-hidden":"true"},"#")],-1),J=t("p",null,"\u6839\u636E\u6761\u4EF6\u5224\u65AD\uFF0C\u7B2C\u4E8C\u4E2A radio-group \u7981\u6B62\u8DF3\u8F6C\u3002",-1),K=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),O=t("h3",{id:"\u7981\u7528",tabindex:"-1"},[n("\u7981\u7528 "),t("a",{class:"header-anchor",href:"#\u7981\u7528","aria-hidden":"true"},"#")],-1),Q=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in disabledList"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("disabledChoose"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb-2"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"disabled"),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),X=t("h3",{id:"\u6A2A\u5411\u6392\u5217",tabindex:"-1"},[n("\u6A2A\u5411\u6392\u5217 "),t("a",{class:"header-anchor",href:"#\u6A2A\u5411\u6392\u5217","aria-hidden":"true"},"#")],-1),Y=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("directionRowChoose"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in directionRowList"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" The Radio value is: {{ item }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),Z=t("h3",{id:"\u7AD6\u5411\u6392\u5217",tabindex:"-1"},[n("\u7AD6\u5411\u6392\u5217 "),t("a",{class:"header-anchor",href:"#\u7AD6\u5411\u6392\u5217","aria-hidden":"true"},"#")],-1),tt=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),nt=t("h3",{id:"\u81EA\u5B9A\u4E49\u5355\u9009\u9879",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u5355\u9009\u9879 "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5355\u9009\u9879","aria-hidden":"true"},"#")],-1),at=t("p",null,"\u6570\u7EC4\u6E90\u53EF\u4E3A\u666E\u901A\u6570\u7EC4\u3001\u5BF9\u8C61\u6570\u7EC4\u7B49\u3002",-1),st=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("customChoose1"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in customList1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" The Radio value is: {{ item }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("customChoose2"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in customList2"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.name"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.name"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(` The Radio value is: {{ item.name }}
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),et=t("h3",{id:"\u5C3A\u5BF8\u548C\u8FB9\u6846",tabindex:"-1"},[n("\u5C3A\u5BF8\u548C\u8FB9\u6846 "),t("a",{class:"header-anchor",href:"#\u5C3A\u5BF8\u548C\u8FB9\u6846","aria-hidden":"true"},"#")],-1),ot=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("h4")]),t("span",{class:"token punctuation"},">")]),n("Small"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("h4")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(`
    `),t("span",{class:"token attr-name"},":values"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sizeBorderList"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sizeBorderChoose3"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sm"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"border"),n(`
    `),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 10px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),n(`
  `),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("h4")]),t("span",{class:"token punctuation"},">")]),n("Middle"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("h4")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(`
    `),t("span",{class:"token attr-name"},":values"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sizeBorderList"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sizeBorderChoose2"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("md"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"border"),n(`
    `),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 10px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),n(`
  `),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("h4")]),t("span",{class:"token punctuation"},">")]),n("Large"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("h4")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(`
    `),t("span",{class:"token attr-name"},":values"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sizeBorderList"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sizeBorderChoose1"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("lg"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"border"),n(`
    `),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 10px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),n(`
  `),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" sizeBorderList "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'Spring'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Summer'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" sizeBorderChoose1 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Spring'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" sizeBorderChoose2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Spring'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" sizeBorderChoose3 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Spring'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      sizeBorderList`),t("span",{class:"token punctuation"},","),n(`
      sizeBorderChoose1`),t("span",{class:"token punctuation"},","),n(`
      sizeBorderChoose2`),t("span",{class:"token punctuation"},","),n(`
      sizeBorderChoose3`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),ut=t("h3",{id:"\u6309\u94AE\u5F62\u6001",tabindex:"-1"},[n("\u6309\u94AE\u5F62\u6001 "),t("a",{class:"header-anchor",href:"#\u6309\u94AE\u5F62\u6001","aria-hidden":"true"},"#")],-1),lt=t("p",null,[n("\u9700\u8981\u628A "),t("code",null,"d-radio"),n(" \u66FF\u6362\u6210 "),t("code",null,"d-radio-button"),n("\uFF0C \u6570\u7EC4\u6E90\u53EF\u4E3A\u666E\u901A\u6570\u7EC4\u3001\u5BF9\u8C61\u6570\u7EC4\u7B49\u3002")],-1),pt=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("h4")]),t("span",{class:"token punctuation"},">")]),n("\u7981\u7528"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("h4")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("buttonChoose1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sm"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 10px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-button")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in buttonList1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.name"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.name"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":disabled"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.disabled"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`{{ item.name }}
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("h4")]),t("span",{class:"token punctuation"},">")]),n("\u9ED8\u8BA4"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("h4")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("buttonChoose2"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("md"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 10px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-button")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in buttonList2"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.name"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.name"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("{{ item.name }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("h4")]),t("span",{class:"token punctuation"},">")]),n("\u81EA\u5B9A\u4E49\u586B\u5145\u989C\u8272\u3001\u6587\u5B57\u989C\u8272"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("h4")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("buttonChoose3"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("lg"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 10px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),n(),t("span",{class:"token attr-name"},"fill"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rgb(255,193,7)"),t("span",{class:"token punctuation"},'"')]),n(`
                 `),t("span",{class:"token attr-name"},"text-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("#ca3d3d"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-button")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in buttonList3"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" {{ item }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" buttonList1 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Spring'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Summer'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Autumn'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Winter'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" buttonChoose1 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Summer'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    
    `),t("span",{class:"token keyword"},"const"),n(" buttonList2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Spring'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Summer'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Autumn'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Winter'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" buttonChoose2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Spring'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"const"),n(" buttonList3 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'Spring'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Summer'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Autumn'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Winter'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" buttonChoose3 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Spring'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      buttonList1`),t("span",{class:"token punctuation"},","),n(`
      buttonChoose1`),t("span",{class:"token punctuation"},","),n(`
      buttonList2`),t("span",{class:"token punctuation"},","),n(`
      buttonChoose2`),t("span",{class:"token punctuation"},","),n(`
      buttonList3`),t("span",{class:"token punctuation"},","),n(`
      buttonChoose3`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),ct=V(`<h3 id="radio-\u53C2\u6570" tabindex="-1">Radio \u53C2\u6570 <a class="header-anchor" href="#radio-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;"><code>string |number | boolean</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u7ED1\u5B9A\u503C</td><td style="text-align:left;"><a href="#%E7%9B%B8%E4%BA%92%E7%8B%AC%E7%AB%8B%E7%9A%84%E5%8D%95%E9%80%89%E9%A1%B9">\u4E92\u76F8\u72EC\u7ACB\u7684\u5355\u9009\u9879</a></td></tr><tr><td style="text-align:left;">value</td><td style="text-align:left;"><code>string |number | boolean</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u5355\u9009\u9879\u503C</td><td style="text-align:left;"><a href="#%E7%9B%B8%E4%BA%92%E7%8B%AC%E7%AB%8B%E7%9A%84%E5%8D%95%E9%80%89%E9%A1%B9">\u4E92\u76F8\u72EC\u7ACB\u7684\u5355\u9009\u9879</a></td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5355\u9009\u9879\u540D\u79F0</td><td style="text-align:left;"><a href="#%E7%9B%B8%E4%BA%92%E7%8B%AC%E7%AB%8B%E7%9A%84%E5%8D%95%E9%80%89%E9%A1%B9">\u4E92\u76F8\u72EC\u7ACB\u7684\u5355\u9009\u9879</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u8BE5\u5355\u9009\u9879</td><td style="text-align:left;"><a href="#%E7%A6%81%E7%94%A8">\u7981\u7528</a></td></tr><tr><td style="text-align:left;">before-change</td><td style="text-align:left;"><code>Function / Promise</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0Cradio \u5207\u6362\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C<br>\u8FD4\u56DE false \u53EF\u4EE5\u963B\u6B62 radio \u5207\u6362</td><td style="text-align:left;"><a href="#radio-%E6%A0%B9%E6%8D%AE%E6%9D%A1%E4%BB%B6%E7%BB%88%E6%AD%A2%E5%88%87%E6%8D%A2%E6%93%8D%E4%BD%9C">\u56DE\u8C03\u5207\u6362</a></td></tr><tr><td style="text-align:left;">border</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C \u662F\u5426\u6709\u8FB9\u6846</td><td style="text-align:left;"><a href="#%E5%B0%BA%E5%AF%B8%E5%92%8C%E8%BE%B9%E6%A1%86">\u8FB9\u6846</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><a href="#iradiosize">IRadioSize</a></td><td style="text-align:left;">md</td><td style="text-align:left;">\u53EF\u9009\uFF0C radio \u5C3A\u5BF8\uFF0C\u53EA\u6709\u5728 border \u5C5E\u6027\u5B58\u5728\u65F6\u751F\u6548</td><td style="text-align:left;"><a href="#%E5%B0%BA%E5%AF%B8%E5%92%8C%E8%BE%B9%E6%A1%86">\u5C3A\u5BF8</a></td></tr></tbody></table><h3 id="radio-\u4E8B\u4EF6" tabindex="-1">Radio \u4E8B\u4EF6 <a class="header-anchor" href="#radio-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td style="text-align:left;"><code>EventEmitter&lt;string&gt;</code></td><td style="text-align:left;">\u5355\u9009\u9879\u503C\u6539\u53D8\u65F6\u89E6\u53D1\uFF0C\u8FD4\u56DE\u9009\u4E2D\u7684\u503C</td><td style="text-align:left;"><a href="#%E7%9B%B8%E4%BA%92%E7%8B%AC%E7%AB%8B%E7%9A%84%E5%8D%95%E9%80%89%E9%A1%B9">\u4E92\u76F8\u72EC\u7ACB\u7684\u5355\u9009\u9879</a></td></tr></tbody></table><h3 id="radiogroup-\u53C2\u6570" tabindex="-1">RadioGroup \u53C2\u6570 <a class="header-anchor" href="#radiogroup-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;"><code>string |number | boolean</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u7ED1\u5B9A\u503C</td><td><a href="#%E7%AB%96%E5%90%91%E6%8E%92%E5%88%97">\u7AD6\u5411\u6392\u5217</a></td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5355\u9009\u6846\u7684\u540D\u79F0</td><td><a href="#%E7%AB%96%E5%90%91%E6%8E%92%E5%88%97">\u7AD6\u5411\u6392\u5217</a></td></tr><tr><td style="text-align:left;">values</td><td style="text-align:left;"><code>array</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5355\u9009\u6570\u636E\u7EC4</td><td><a href="#%E7%AB%96%E5%90%91%E6%8E%92%E5%88%97">\u7AD6\u5411\u6392\u5217</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u8BE5\u9009\u9879\u7EC4</td><td><a href="#radio-group-%E6%A0%B9%E6%8D%AE%E6%9D%A1%E4%BB%B6%E7%BB%88%E6%AD%A2%E5%88%87%E6%8D%A2%E6%93%8D%E4%BD%9C">radio-group \u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C</a></td></tr><tr><td style="text-align:left;">direction</td><td style="text-align:left;"><code>&#39;row&#39;</code> | <code>&#39;column&#39;</code></td><td style="text-align:left;">&#39;column&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u6A2A\u5411\u6216\u7EB5\u5411\u6392\u5217</td><td><a href="#%E6%A8%AA%E5%90%91%E6%8E%92%E5%88%97">\u6A2A\u5411\u6392\u5217</a></td></tr><tr><td style="text-align:left;">before-change</td><td style="text-align:left;"><code>Function</code> | <code>Promise</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0Cradio-group \u5207\u6362\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C<br>\u8FD4\u56DE false \u53EF\u4EE5\u963B\u6B62 radio-group \u7684\u5207\u6362</td><td><a href="#radio-group-%E6%A0%B9%E6%8D%AE%E6%9D%A1%E4%BB%B6%E7%BB%88%E6%AD%A2%E5%88%87%E6%8D%A2%E6%93%8D%E4%BD%9C">\u56DE\u8C03\u5207\u6362</a></td></tr><tr><td style="text-align:left;">border</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C \u662F\u5426\u6709\u8FB9\u6846</td><td><a href="#%E5%B0%BA%E5%AF%B8%E5%92%8C%E8%BE%B9%E6%A1%86">\u8FB9\u6846</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><a href="#iradiosize">IRadioSize</a></td><td style="text-align:left;">md</td><td style="text-align:left;">\u53EF\u9009\uFF0C radio \u5C3A\u5BF8\uFF0C\u53EA\u6709\u5728 border \u5C5E\u6027\u5B58\u5728\u65F6\u751F\u6548</td><td><a href="#%E5%B0%BA%E5%AF%B8%E5%92%8C%E8%BE%B9%E6%A1%86">\u5C3A\u5BF8</a></td></tr><tr><td style="text-align:left;">fill</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272</td><td><a href="#%E6%8C%89%E9%92%AE%E5%BD%A2%E6%80%81">\u6309\u94AE\u5F62\u6001</a></td></tr><tr><td style="text-align:left;">text-color</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C \u6309\u94AE\u88AB\u9009\u4E2D\u7684\u5B57\u4F53\u6837\u5F0F\uFF0C\u53EA\u5B58\u5728\u4E8E\u6309\u94AE\u5F62\u6001\u4E2D</td><td><a href="#%E6%8C%89%E9%92%AE%E5%BD%A2%E6%80%81">\u6309\u94AE\u5F62\u6001</a></td></tr></tbody></table><h3 id="radiogroup-\u4E8B\u4EF6" tabindex="-1">RadioGroup \u4E8B\u4EF6 <a class="header-anchor" href="#radiogroup-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td style="text-align:left;"><code>EventEmitter&lt;string&gt;</code></td><td style="text-align:left;">\u5355\u9009\u9879\u503C\u6539\u53D8\u65F6\u89E6\u53D1\uFF0C\u8FD4\u56DE\u9009\u4E2D\u7684\u503C</td><td style="text-align:left;"><a href="#%E7%AB%96%E5%90%91%E6%8E%92%E5%88%97">\u7AD6\u5411\u6392\u5217</a></td></tr></tbody></table><h3 id="radiobutton-\u53C2\u6570" tabindex="-1">RadioButton \u53C2\u6570 <a class="header-anchor" href="#radiobutton-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;"><code>string |number | boolean</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u5355\u9009\u9879\u503C</td><td style="text-align:left;"><a href="#%E6%8C%89%E9%92%AE%E5%BD%A2%E6%80%81">\u6309\u94AE\u5F62\u6001</a></td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5355\u9009\u9879\u540D\u79F0</td><td style="text-align:left;"><a href="#%E6%8C%89%E9%92%AE%E5%BD%A2%E6%80%81">\u6309\u94AE\u5F62\u6001</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u8BE5\u5355\u9009\u9879</td><td style="text-align:left;"><a href="#%E6%8C%89%E9%92%AE%E5%BD%A2%E6%80%81">\u6309\u94AE\u5F62\u6001</a></td></tr></tbody></table><h3 id="radio-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Radio \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#radio-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="iradiosize" tabindex="-1">IRadioSize <a class="header-anchor" href="#iradiosize" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">IRadioSize</span> <span class="token operator">=</span> <span class="token string">&#39;lg&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;md&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;sm&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,13);function it(c,p,a,i,f,h){const g=A("render-demo-0"),l=A("demo"),k=A("render-demo-1"),m=A("render-demo-2"),C=A("render-demo-3"),E=A("render-demo-4"),r=A("render-demo-5"),u=A("render-demo-6"),s=A("render-demo-7"),o=A("render-demo-8");return T(),U("div",null,[j,F(l,{sourceCode:`<template>
  <d-radio v-for="item in baseList" v-model="baseChoose" :key="item" :value="item" class="mb-2">
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
`},{highlight:b(()=>[G]),default:b(()=>[F(g)]),_:1}),$,M,F(l,{sourceCode:`<template>
  <d-radio
    v-for="item in filterList"
    v-model="filterChoose"
    :key="item"
    :value="item"
    :beforeChange="filterBeforeChange"
    class="mb-2"
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
`},{highlight:b(()=>[P]),default:b(()=>[F(k)]),_:1}),H,J,F(l,{sourceCode:`<template>
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
`},{highlight:b(()=>[K]),default:b(()=>[F(m)]),_:1}),O,F(l,{sourceCode:`<template>
  <d-radio v-for="item in disabledList" v-model="disabledChoose" :key="item" :value="item" class="mb-2" disabled>
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
`},{highlight:b(()=>[Q]),default:b(()=>[F(C)]),_:1}),X,F(l,{sourceCode:`<template>
  <d-radio-group direction="row" v-model="directionRowChoose">
    <d-radio v-for="item in directionRowList" :key="item" :value="item"> The Radio value is: {{ item }}</d-radio>
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
`},{highlight:b(()=>[Y]),default:b(()=>[F(E)]),_:1}),Z,F(l,{sourceCode:`<template>
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
`},{highlight:b(()=>[tt]),default:b(()=>[F(r)]),_:1}),nt,at,F(l,{sourceCode:`<template>
  <d-radio-group direction="row" v-model="customChoose1">
    <d-radio v-for="item in customList1" :key="item" :value="item"> The Radio value is: {{ item }}</d-radio>
  </d-radio-group>
  <d-radio-group direction="row" v-model="customChoose2">
    <d-radio v-for="item in customList2" :key="item.name" :value="item.name"> The Radio value is: {{ item.name }}
    </d-radio>
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
`},{highlight:b(()=>[st]),default:b(()=>[F(u)]),_:1}),et,F(l,{sourceCode:`<template>
  <h4>Small</h4>
  <d-radio-group
    :values="sizeBorderList"
    v-model="sizeBorderChoose3"
    size="sm"
    border
    direction="row"
    style="margin-bottom: 10px;"
  ></d-radio-group>

  <h4>Middle</h4>
  <d-radio-group
    :values="sizeBorderList"
    v-model="sizeBorderChoose2"
    size="md"
    border
    direction="row"
    style="margin-bottom: 10px;"
  ></d-radio-group>

  <h4>Large</h4>
  <d-radio-group
    :values="sizeBorderList"
    v-model="sizeBorderChoose1"
    size="lg"
    border
    direction="row"
    style="margin-bottom: 10px;"
  ></d-radio-group>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const sizeBorderList = ['Spring', 'Summer'];
    const sizeBorderChoose1 = ref('Spring');
    const sizeBorderChoose2 = ref('Spring');
    const sizeBorderChoose3 = ref('Spring');

    return {
      sizeBorderList,
      sizeBorderChoose1,
      sizeBorderChoose2,
      sizeBorderChoose3,
    };
  },
});
<\/script>
`},{highlight:b(()=>[ot]),default:b(()=>[F(s)]),_:1}),ut,lt,F(l,{sourceCode:`
<template>
  <h4>\u7981\u7528</h4>
  <d-radio-group direction="row" v-model="buttonChoose1" size="sm" style="margin-bottom: 10px;">
    <d-radio-button v-for="item in buttonList1" :key="item.name" :value="item.name" :disabled="item.disabled"
    >{{ item.name }}
    </d-radio-button>
  </d-radio-group>

  <h4>\u9ED8\u8BA4</h4>
  <d-radio-group direction="row" v-model="buttonChoose2" size="md" style="margin-bottom: 10px;">
    <d-radio-button v-for="item in buttonList2" :key="item.name" :value="item.name">{{ item.name }}</d-radio-button>
  </d-radio-group>

  <h4>\u81EA\u5B9A\u4E49\u586B\u5145\u989C\u8272\u3001\u6587\u5B57\u989C\u8272</h4>
  <d-radio-group direction="row" v-model="buttonChoose3" size="lg" style="margin-bottom: 10px;" fill="rgb(255,193,7)"
                 text-color="#ca3d3d"
  >
    <d-radio-button v-for="item in buttonList3" :key="item" :value="item"> {{ item }}</d-radio-button>
  </d-radio-group>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const buttonList1 = [{
      name: 'Spring',
      disabled: true
    }, { name: 'Summer' }, { name: 'Autumn' }, { name: 'Winter' }];
    let buttonChoose1 = ref('Summer');
    
    const buttonList2 = [{ name: 'Spring' }, { name: 'Summer' }, { name: 'Autumn' }, { name: 'Winter' }];
    let buttonChoose2 = ref('Spring');

    const buttonList3 = ref(['Spring', 'Summer', 'Autumn', 'Winter']);
    let buttonChoose3 = ref('Spring');
    
    return {
      buttonList1,
      buttonChoose1,
      buttonList2,
      buttonChoose2,
      buttonList3,
      buttonChoose3,
    };
  },
});
<\/script>
`},{highlight:b(()=>[pt]),default:b(()=>[F(o)]),_:1}),ct])}var mt=N(W,[["render",it]]);export{dt as __pageData,mt as default};
