import{V as w}from"./framework.37dedfa0.js";import{_ as V,S as B,b as C,a1 as x,a3 as b,V as n,x as t,N as I,R as q}from"./plugin-vue_export-helper.02048804.js";import"./framework.43f3ce53.js";const T={name:"component-doc",components:{"render-demo-0":function(){const{renderList:f,Fragment:v,openBlock:e,createElementBlock:u,toDisplayString:y,createTextVNode:_,resolveComponent:k,withCtx:o,createBlock:i}=w;function r(p,a){const c=k("d-radio");return e(),u("div",null,[(e(!0),u(v,null,f(p.list,l=>(e(),i(c,{modelValue:p.choose,"onUpdate:modelValue":a[0]||(a[0]=h=>p.choose=h),key:l,value:l,style:{marginBottom:"20px"}},{default:o(()=>[_(" The Radio value is: "+y(l),1)]),_:2},1032,["modelValue","value"]))),128))])}const{defineComponent:g,ref:d}=w,m=g({setup(){const p=d(["Item1","Item2","Item3"]);let a=d("Item1");return{list:p,choose:a}}});return{render:r,...m}}(),"render-demo-1":function(){const{renderList:f,Fragment:v,openBlock:e,createElementBlock:u,toDisplayString:y,createTextVNode:_,resolveComponent:k,withCtx:o,createBlock:i}=w;function r(p,a){const c=k("d-radio");return e(),u("div",null,[(e(!0),u(v,null,f(p.list,l=>(e(),i(c,{modelValue:p.choose,"onUpdate:modelValue":a[0]||(a[0]=h=>p.choose=h),key:l,value:l,beforeChange:p.beforeChange,style:{marginBottom:"20px"},onChange:p.valChange},{default:o(()=>[_(" The Radio value is: "+y(l),1)]),_:2},1032,["modelValue","value","beforeChange","onChange"]))),128))])}const{defineComponent:g,ref:d}=w,m=g({setup(){const p=d(["Item1","Item2","Item3"]);let a=d("Item1");return{list:p,choose:a,beforeChange(c){return c!=="Item2"},valChange(c){console.log("current value",c)}}}});return{render:r,...m}}(),"render-demo-2":function(){const{renderList:f,Fragment:v,openBlock:e,createElementBlock:u,toDisplayString:y,createTextVNode:_,resolveComponent:k,withCtx:o,createBlock:i,createVNode:r}=w;function g(a,c){const l=k("d-radio"),h=k("d-radio-group");return e(),u("div",null,[r(h,{direction:"row",modelValue:a.choose,"onUpdate:modelValue":c[0]||(c[0]=s=>a.choose=s),beforeChange:a.beforeChange},{default:o(()=>[(e(!0),u(v,null,f(a.list,s=>(e(),i(l,{key:s,value:s},{default:o(()=>[_(y(s),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","beforeChange"]),r(h,{modelValue:a.choose2,"onUpdate:modelValue":c[1]||(c[1]=s=>a.choose2=s),direction:"row",disabled:""},{default:o(()=>[(e(!0),u(v,null,f(a.list2,s=>(e(),i(l,{key:s,value:s},{default:o(()=>[_(y(s),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])}const{defineComponent:d,ref:m}=w,p=d({setup(){const a=m(["Item1","Item2","Item3"]);let c=m("Item1");const l=["Spring","Summer","Autumn","Winter"],h=m("Summer");return{list:a,choose:c,list2:l,choose2:h,beforeChange(s){return s!=="Item2"}}}});return{render:g,...p}}(),"render-demo-3":function(){const{renderList:f,Fragment:v,openBlock:e,createElementBlock:u,toDisplayString:y,createTextVNode:_,resolveComponent:k,withCtx:o,createBlock:i}=w;function r(p,a){const c=k("d-radio");return e(),u("div",null,[(e(!0),u(v,null,f(p.list,l=>(e(),i(c,{modelValue:p.choose,"onUpdate:modelValue":a[0]||(a[0]=h=>p.choose=h),key:l,value:l,style:{marginBottom:"20px"},disabled:""},{default:o(()=>[_(" The Radio value is: "+y(l),1)]),_:2},1032,["modelValue","value"]))),128))])}const{defineComponent:g,ref:d}=w,m=g({setup(){const p=d(["Item1","Item2","Item3"]);let a=d("Item1");return{list:p,choose:a}}});return{render:r,...m}}(),"render-demo-4":function(){const{renderList:f,Fragment:v,openBlock:e,createElementBlock:u,toDisplayString:y,createTextVNode:_,resolveComponent:k,withCtx:o,createBlock:i,createVNode:r}=w;function g(a,c){const l=k("d-radio"),h=k("d-radio-group");return e(),u("div",null,[r(h,{direction:"row",modelValue:a.choose,"onUpdate:modelValue":c[0]||(c[0]=s=>a.choose=s)},{default:o(()=>[(e(!0),u(v,null,f(a.list,s=>(e(),i(l,{key:s,value:s},{default:o(()=>[_(" The Radio value is: "+y(s),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])}const{defineComponent:d,ref:m}=w,p=d({setup(){const a=m(["Item1","Item2","Item3"]);let c=m("Item1");return{list:a,choose:c}}});return{render:g,...p}}(),"render-demo-5":function(){const{resolveComponent:f,createVNode:v,openBlock:e,createElementBlock:u}=w;function y(i,r){const g=f("d-radio-group");return e(),u("div",null,[v(g,{values:i.list,modelValue:i.choose,"onUpdate:modelValue":r[0]||(r[0]=d=>i.choose=d)},null,8,["values","modelValue"])])}const{defineComponent:_,ref:k}=w,o=_({setup(){const i=["Spring","Summer","Autumn","Winter"],r=k("Summer");return{list:i,choose:r,valChange(g){console.log("current value",g)}}}});return{render:y,...o}}(),"render-demo-6":function(){const{renderList:f,Fragment:v,openBlock:e,createElementBlock:u,toDisplayString:y,createTextVNode:_,resolveComponent:k,withCtx:o,createBlock:i,createVNode:r}=w;function g(a,c){const l=k("d-radio"),h=k("d-radio-group");return e(),u("div",null,[r(h,{direction:"row",modelValue:a.choose,"onUpdate:modelValue":c[0]||(c[0]=s=>a.choose=s)},{default:o(()=>[(e(!0),u(v,null,f(a.list,s=>(e(),i(l,{key:s,value:s},{default:o(()=>[_(" The Radio value is: "+y(s),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),r(h,{direction:"row",modelValue:a.choose2,"onUpdate:modelValue":c[1]||(c[1]=s=>a.choose2=s)},{default:o(()=>[(e(!0),u(v,null,f(a.list2,s=>(e(),i(l,{key:s.name,value:s.name},{default:o(()=>[_(" The Radio value is: "+y(s.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])}const{defineComponent:d,ref:m}=w,p=d({setup(){const a=m(["Item1","Item2","Item3"]);let c=m("Item1");const l=[{name:"Item1"},{name:"Item2"},{name:"Item3"}];let h=m("Item3");return{list:a,choose:c,list2:l,choose2:h}}});return{render:g,...p}}()}},Y='{"title":"Radio","description":"","frontmatter":{},"headers":[{"level":3,"title":"When To Use","slug":"when-to-use"},{"level":3,"title":"Independent Radios","slug":"independent-radios"},{"level":3,"title":"Switch with Condition","slug":"switch-with-condition"},{"level":3,"title":"Switch With Condition in A Radio Group","slug":"switch-with-condition-in-a-radio-group"},{"level":3,"title":"Disabled Radio","slug":"disabled-radio"},{"level":3,"title":"Horizontal Arrangement","slug":"horizontal-arrangement"},{"level":3,"title":"Vertical Arrangement","slug":"vertical-arrangement"},{"level":3,"title":"Custom Radios","slug":"custom-radios"},{"level":3,"title":"API","slug":"api"}],"relativePath":"en-US/components/radio/index.md","lastUpdated":1658409114900}',S=b('<h1 id="radio" tabindex="-1">Radio <a class="header-anchor" href="#radio" aria-hidden="true">#</a></h1><p>Radio button.</p><h3 id="when-to-use" tabindex="-1">When To Use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>The user selects a single option from a dataset and can view all options.</p><h3 id="independent-radios" tabindex="-1">Independent Radios <a class="header-anchor" href="#independent-radios" aria-hidden="true">#</a></h3>',5),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio")]),t(`
    `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in list"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("choose"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ marginBottom: "),n("span",{class:"token punctuation"},"'"),t("20px"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    The Radio value is: {{ item }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" choose "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      list`),n("span",{class:"token punctuation"},","),t(`
      choose`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),E=n("h3",{id:"switch-with-condition",tabindex:"-1"},[t("Switch with Condition "),n("a",{class:"header-anchor",href:"#switch-with-condition","aria-hidden":"true"},"#")],-1),D=n("p",null,"The second item cannot be redirected based on the condition.",-1),N=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio")]),t(`
    `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in list"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("choose"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":beforeChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("beforeChange"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ marginBottom: "),n("span",{class:"token punctuation"},"'"),t("20px"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    The Radio value is: {{ item }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" choose "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      list`),n("span",{class:"token punctuation"},","),t(`
      choose`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function"},"beforeChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"return"),t(" value "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"'Item2'"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function"},"valChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'current value'"),n("span",{class:"token punctuation"},","),t(" val"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),A=n("h3",{id:"switch-with-condition-in-a-radio-group",tabindex:"-1"},[t("Switch With Condition in A Radio Group "),n("a",{class:"header-anchor",href:"#switch-with-condition-in-a-radio-group","aria-hidden":"true"},"#")],-1),F=n("p",null,"The second radio group is not allowed to jump.",-1),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio-group")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("choose"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":beforeChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("beforeChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in list"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      {{ item }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio-group")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio-group")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("choose2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in list2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      {{ item }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio-group")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" choose "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" list2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Spring'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Summer'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Autumn'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Winter'"),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" choose2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Summer'"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      list`),n("span",{class:"token punctuation"},","),t(`
      choose`),n("span",{class:"token punctuation"},","),t(`
      list2`),n("span",{class:"token punctuation"},","),t(`
      choose2`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function"},"beforeChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"return"),t(" value "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"'Item2'"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),W=n("h3",{id:"disabled-radio",tabindex:"-1"},[t("Disabled Radio "),n("a",{class:"header-anchor",href:"#disabled-radio","aria-hidden":"true"},"#")],-1),U=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio")]),t(`
    `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in list"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("choose"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ marginBottom: "),n("span",{class:"token punctuation"},"'"),t("20px"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"disabled"),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    The Radio value is: {{ item }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" choose "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      list`),n("span",{class:"token punctuation"},","),t(`
      choose`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),L=n("h3",{id:"horizontal-arrangement",tabindex:"-1"},[t("Horizontal Arrangement "),n("a",{class:"header-anchor",href:"#horizontal-arrangement","aria-hidden":"true"},"#")],-1),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio-group")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("choose"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in list"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      The Radio value is: {{ item }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio-group")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" choose "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      list`),n("span",{class:"token punctuation"},","),t(`
      choose`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),j=n("h3",{id:"vertical-arrangement",tabindex:"-1"},[t("Vertical Arrangement "),n("a",{class:"header-anchor",href:"#vertical-arrangement","aria-hidden":"true"},"#")],-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio-group")]),t(),n("span",{class:"token attr-name"},":values"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("list"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("choose"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio-group")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Spring'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Summer'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Autumn'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Winter'"),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" choose "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Summer'"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      list`),n("span",{class:"token punctuation"},","),t(`
      choose`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function"},"valChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'current value'"),n("span",{class:"token punctuation"},","),t(" val"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),O=n("h3",{id:"custom-radios",tabindex:"-1"},[t("Custom Radios "),n("a",{class:"header-anchor",href:"#custom-radios","aria-hidden":"true"},"#")],-1),G=n("p",null,"The array source can be a common array or an object array.",-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio-group")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("choose"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in list"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      The Radio value is: {{ item }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio-group")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio-group")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("choose2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in list2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.name"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      The Radio value is: {{ item.name }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio-group")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" choose "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" list2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Item1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Item2'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Item3'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" choose2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Item3'"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      list`),n("span",{class:"token punctuation"},","),t(`
      choose`),n("span",{class:"token punctuation"},","),t(`
      list2`),n("span",{class:"token punctuation"},","),t(`
      choose2`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),$=b('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><p>d-radio Parameters</p><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:left;">Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td style="text-align:center;">name</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:left;">Optional. Single-option name</td><td><a href="#independent-radios">Independent Radios</a></td></tr><tr><td style="text-align:center;">value</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:left;">Required. Single-option value</td><td><a href="#independent-radios">Independent Radios</a></td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">Optional. Whether to disable this option.</td><td><a href="#disabled-radio">Disabled Radio</a></td></tr><tr><td style="text-align:center;">beforeChange</td><td style="text-align:center;"><code>Function / Promise</code></td><td style="text-align:center;">--</td><td style="text-align:left;">Callback function before radio switching, which is optional. The return type is boolean. If false is returned, radio switching is prevented.</td><td><a href="#switch-with-condition">Switch with Condition</a></td></tr></tbody></table><p>d-radio Event</p><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:left;">Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td style="text-align:center;">change</td><td style="text-align:center;"><code>EventEmitter&lt;string&gt;</code></td><td style="text-align:left;">Form event. This event is triggered when the value of a single option changes. The selected value is returned.</td><td><a href="#independent-radios">Independent Radios</a></td></tr></tbody></table><p>d-radio-group Parameters</p><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:left;">Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td style="text-align:center;">name</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:left;">Optional. Single-option name (unique identifier of the radio)</td><td><a href="#horizontal-arrangement">Horizontal Arrangement</a></td></tr><tr><td style="text-align:center;">values</td><td style="text-align:center;"><code>array</code></td><td style="text-align:center;">--</td><td style="text-align:left;">Optional. Single-choice data group</td><td><a href="#horizontal-arrangement">Horizontal Arrangement</a></td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">Optional. Whether to disable this radio-group</td><td><a href="#switch-with-condition-in-a-radio-group">Switch With Condition in A Radio Group</a></td></tr><tr><td style="text-align:center;">direction</td><td style="text-align:center;"><code>&#39;row&#39; / &#39;column&#39;</code></td><td style="text-align:center;">&#39;column&#39;</td><td style="text-align:left;">Optional. Set the horizontal or vertical arrangement</td><td><a href="#horizontal-arrangement">Horizontal Arrangement</a></td></tr><tr><td style="text-align:center;">beforeChange</td><td style="text-align:center;"><code>Function / Promise</code></td><td style="text-align:center;">--</td><td style="text-align:left;">Callback function before radio-group switching. The return value is of the boolean type. If false is returned, radio-group switching is prevented.</td><td><a href="#switch-with-condition-in-a-radio-group">Switch With Condition in A Radio Group</a></td></tr></tbody></table><p>d-radio-group Event</p><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:left;">Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td style="text-align:center;">change</td><td style="text-align:center;"><code>EventEmitter&lt;string&gt;</code></td><td style="text-align:left;">Triggered when the value of a single option changes and the selected value is returned.</td><td><a href="#horizontal-arrangement">Horizontal Arrangement</a></td></tr></tbody></table>',9);function K(f,v,e,u,y,_){const k=I("render-demo-0"),o=I("demo"),i=I("render-demo-1"),r=I("render-demo-2"),g=I("render-demo-3"),d=I("render-demo-4"),m=I("render-demo-5"),p=I("render-demo-6");return q(),B("div",null,[S,C(o,{sourceCode:`<template>
  <d-radio
    v-for="item in list"
    v-model="choose"
    :key="item"
    :value="item"
    :style="{ marginBottom: '20px' }"
  >
    The Radio value is: {{ item }}
  </d-radio>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const list = ref(['Item1', 'Item2', 'Item3'])
    let choose = ref('Item1')

    return {
      list,
      choose,
    }
  },
})
<\/script>
`},{highlight:x(()=>[R]),default:x(()=>[C(k)]),_:1}),E,D,C(o,{sourceCode:`<template>
  <d-radio
    v-for="item in list"
    v-model="choose"
    :key="item"
    :value="item"
    :beforeChange="beforeChange"
    :style="{ marginBottom: '20px' }"
    @change="valChange"
  >
    The Radio value is: {{ item }}
  </d-radio>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const list = ref(['Item1', 'Item2', 'Item3'])
    let choose = ref('Item1')

    return {
      list,
      choose,
      beforeChange(value) {
        return value !== 'Item2'
      },
      valChange(val) {
        console.log('current value', val)
      },
    }
  },
})
<\/script>
`},{highlight:x(()=>[N]),default:x(()=>[C(i)]),_:1}),A,F,C(o,{sourceCode:`<template>
  <d-radio-group direction="row" v-model="choose" :beforeChange="beforeChange">
    <d-radio v-for="item in list" :key="item" :value="item">
      {{ item }}
    </d-radio>
  </d-radio-group>
  <d-radio-group v-model="choose2" direction="row" disabled>
    <d-radio v-for="item in list2" :key="item" :value="item">
      {{ item }}
    </d-radio>
  </d-radio-group>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const list = ref(['Item1', 'Item2', 'Item3'])
    let choose = ref('Item1')

    const list2 = ['Spring', 'Summer', 'Autumn', 'Winter']
    const choose2 = ref('Summer')

    return {
      list,
      choose,
      list2,
      choose2,
      beforeChange(value) {
        return value !== 'Item2'
      },
    }
  },
})
<\/script>
`},{highlight:x(()=>[z]),default:x(()=>[C(r)]),_:1}),W,C(o,{sourceCode:`<template>
  <d-radio
    v-for="item in list"
    v-model="choose"
    :key="item"
    :value="item"
    :style="{ marginBottom: '20px' }"
    disabled
  >
    The Radio value is: {{ item }}
  </d-radio>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const list = ref(['Item1', 'Item2', 'Item3'])
    let choose = ref('Item1')

    return {
      list,
      choose,
    }
  },
})
<\/script>
`},{highlight:x(()=>[U]),default:x(()=>[C(g)]),_:1}),L,C(o,{sourceCode:`<template>
  <d-radio-group direction="row" v-model="choose">
    <d-radio v-for="item in list" :key="item" :value="item">
      The Radio value is: {{ item }}
    </d-radio>
  </d-radio-group>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const list = ref(['Item1', 'Item2', 'Item3'])
    let choose = ref('Item1')

    return {
      list,
      choose,
    }
  },
})
<\/script>
`},{highlight:x(()=>[P]),default:x(()=>[C(d)]),_:1}),j,C(o,{sourceCode:`<template>
  <d-radio-group :values="list" v-model="choose"></d-radio-group>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const list = ['Spring', 'Summer', 'Autumn', 'Winter']
    const choose = ref('Summer')

    return {
      list,
      choose,
      valChange(val) {
        console.log('current value', val)
      },
    }
  },
})
<\/script>
`},{highlight:x(()=>[H]),default:x(()=>[C(m)]),_:1}),O,G,C(o,{sourceCode:`<template>
  <d-radio-group direction="row" v-model="choose">
    <d-radio v-for="item in list" :key="item" :value="item">
      The Radio value is: {{ item }}
    </d-radio>
  </d-radio-group>
  <d-radio-group direction="row" v-model="choose2">
    <d-radio v-for="item in list2" :key="item.name" :value="item.name">
      The Radio value is: {{ item.name }}
    </d-radio>
  </d-radio-group>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const list = ref(['Item1', 'Item2', 'Item3'])
    let choose = ref('Item1')

    const list2 = [{ name: 'Item1' }, { name: 'Item2' }, { name: 'Item3' }]
    let choose2 = ref('Item3')

    return {
      list,
      choose,
      list2,
      choose2,
    }
  },
})
<\/script>
`},{highlight:x(()=>[J]),default:x(()=>[C(p)]),_:1}),$])}var Z=V(T,[["render",K]]);export{Y as __pageData,Z as default};
