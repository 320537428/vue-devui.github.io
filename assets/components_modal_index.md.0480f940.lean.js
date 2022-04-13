var q=Object.defineProperty;var x=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var T=(o,s,t)=>s in o?q(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t,A=(o,s)=>{for(var t in s||(s={}))j.call(s,t)&&T(o,t,s[t]);if(x)for(var t of x(s))O.call(s,t)&&T(o,t,s[t]);return o};import{_ as I,V as F,r as w,c as K,a as E,w as d,b as N,d as n,e as a,o as L}from"./app.585eda29.js";const P={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:o,resolveComponent:s,withCtx:t,createVNode:u,toDisplayString:l,createElementVNode:i,openBlock:v,createElementBlock:k}=F,f=o("\u6253\u5F00 modal");function h(p,g){const e=s("d-button"),c=s("d-modal");return v(),k("div",null,[u(e,{onClick:p.handleClick},{default:t(()=>[f]),_:1},8,["onClick"]),u(c,{modelValue:p.visible,"onUpdate:modelValue":g[0]||(g[0]=r=>p.visible=r),title:"Start Snapshot Version"},{default:t(()=>[i("div",null,"name: "+l(p.data.name),1),i("div",null,"age: "+l(p.data.age),1),i("div",null,"address: "+l(p.data.address),1)]),_:1},8,["modelValue"])])}const{defineComponent:C,ref:D,reactive:m}=F,_=C({setup(){const p=D(!1),g=m({name:"Tom",age:20,address:"Chengdu"});return{visible:p,data:g,handleClick:()=>{p.value=!0}}}});return A({render:h},_)}(),"render-demo-1":function(){const{createTextVNode:o,resolveComponent:s,withCtx:t,createVNode:u,createElementVNode:l,toDisplayString:i,openBlock:v,createElementBlock:k}=F,f=o("\u6253\u5F00 modal"),h=l("span",null,"Good Title",-1),C=o("\u53D6\u6D88"),D=o("\u786E\u8BA4");function m(c,r){const b=s("d-button"),y=s("d-icon"),B=s("d-modal-header"),V=s("d-modal-footer"),S=s("d-modal");return v(),k("div",null,[u(b,{onClick:c.handleClick},{default:t(()=>[f]),_:1},8,["onClick"]),u(S,{modelValue:c.visible,"onUpdate:modelValue":r[0]||(r[0]=M=>c.visible=M)},{header:t(()=>[u(B,null,{default:t(()=>[u(y,{name:"like"}),h]),_:1})]),footer:t(()=>[u(V,{style:{"text-align":"right","padding-right":"20px"}},{default:t(()=>[u(b,{onClick:c.hidden},{default:t(()=>[C]),_:1},8,["onClick"]),u(b,{onClick:c.hidden},{default:t(()=>[D]),_:1},8,["onClick"])]),_:1})]),default:t(()=>[l("div",null,"name: "+i(c.data.name),1),l("div",null,"age: "+i(c.data.age),1),l("div",null,"address: "+i(c.data.address),1)]),_:1},8,["modelValue"])])}const{ref:_,defineComponent:p,reactive:g}=F,e=p({setup(){const c=_(!1),r=g({name:"Tom",age:20,address:"Chengdu"});return{visible:c,data:r,handleClick:()=>{c.value=!0},hidden:()=>{c.value=!1}}}});return A({render:m},e)}(),"render-demo-2":function(){const{createTextVNode:o,resolveComponent:s,withCtx:t,createVNode:u,toDisplayString:l,createElementVNode:i,openBlock:v,createElementBlock:k}=F,f=o("\u6253\u5F00 modal"),h=o("\u53D6\u6D88"),C=o("\u786E\u8BA4");function D(e,c){const r=s("d-button"),b=s("d-modal-footer"),y=s("d-modal");return v(),k("div",null,[u(r,{onClick:e.handleClick},{default:t(()=>[f]),_:1},8,["onClick"]),u(y,{modelValue:e.visible,"onUpdate:modelValue":c[0]||(c[0]=B=>e.visible=B),"before-close":e.beforeClose,style:{width:"500px"}},{footer:t(()=>[u(b,{style:{"text-align":"right","padding-right":"20px"}},{default:t(()=>[u(r,{onClick:e.hidden},{default:t(()=>[h]),_:1},8,["onClick"]),u(r,{onClick:e.hidden},{default:t(()=>[C]),_:1},8,["onClick"])]),_:1})]),default:t(()=>[i("div",null,"name: "+l(e.data.name),1),i("div",null,"age: "+l(e.data.age),1),i("div",null,"address: "+l(e.data.address),1)]),_:1},8,["modelValue","before-close"])])}const{ref:m,defineComponent:_,reactive:p}=F,g=_({setup(){const e=m(!1),c=p({name:"Tom",age:20,address:"Chengdu"});return{visible:e,data:c,handleClick:()=>{e.value=!0},hidden:()=>{e.value=!1},beforeClose:B=>{new Promise(V=>{setTimeout(V,1e3)}).then(B)}}}});return A({render:D},g)}(),"render-demo-3":function(){const{createTextVNode:o,resolveComponent:s,withCtx:t,createVNode:u,openBlock:l,createElementBlock:i}=F,v=o("\u6253\u5F00 modal");function k(p,g){const e=s("d-button");return l(),i("div",null,[u(e,{onClick:p.open},{default:t(()=>[v]),_:1},8,["onClick"])])}const{ref:f,defineComponent:h,inject:C,onMounted:D,h:m}=F,_=h({setup(){const p=C("MODAL_SERVICE_TOKEN");return{open:()=>{p.open({title:"Start Snapshot Version",content:()=>m("div",{},[m("div",{},["name: Tom"]),m("div",{},["age: 10"]),m("div",{},["address: Chengdu"])])})}}}});return A({render:k},_)}()}},on='{"title":"Modal \u6A21\u6001\u5F39\u7A97","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u64CD\u4F5C\u6309\u94AE","slug":"\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u64CD\u4F5C\u6309\u94AE"},{"level":3,"title":"\u5173\u95ED\u524D\u56DE\u8C03","slug":"\u5173\u95ED\u524D\u56DE\u8C03"},{"level":3,"title":"\u670D\u52A1\u65B9\u5F0F\u8C03\u7528","slug":"\u670D\u52A1\u65B9\u5F0F\u8C03\u7528"},{"level":3,"title":"d-modal \u53C2\u6570","slug":"d-modal-\u53C2\u6570"},{"level":3,"title":"d-modal \u63D2\u69FD","slug":"d-modal-\u63D2\u69FD"}],"relativePath":"components/modal/index.md","lastUpdated":1649728324746}',R=N('<h1 id="modal-\u6A21\u6001\u5F39\u7A97" tabindex="-1">Modal \u6A21\u6001\u5F39\u7A97 <a class="header-anchor" href="#modal-\u6A21\u6001\u5F39\u7A97" aria-hidden="true">#</a></h1><p>\u6A21\u6001\u6846\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>1.\u9700\u8981\u7528\u6237\u5904\u7406\u4E8B\u52A1\uFF0C\u53C8\u4E0D\u5E0C\u671B\u8DF3\u8F6C\u9875\u9762\u4EE5\u81F4\u6253\u65AD\u5DE5\u4F5C\u6D41\u7A0B\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 Modal \u5728\u5F53\u524D\u9875\u9762\u6B63\u4E2D\u6253\u5F00\u4E00\u4E2A\u6D6E\u5C42\uFF0C\u627F\u8F7D\u76F8\u5E94\u7684\u64CD\u4F5C\u3002</p><p>2.Modal \u8D77\u5230\u4E0E\u7528\u6237\u8FDB\u884C\u4EA4\u4E92\u7684\u4F5C\u7528\uFF0C\u7528\u6237\u53EF\u4EE5\u5728 Modal \u4E2D\u8F93\u5165\u4FE1\u606F\u3001\u9605\u8BFB\u63D0\u793A\u3001\u8BBE\u7F6E\u9009\u9879\u7B49\u64CD\u4F5C\u3002</p><h3 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h3>',6),U=n("div",null,[n("code",null,"v-model"),a("\u53CC\u5411\u7ED1\u5B9A\uFF0C\u63A7\u5236 Modal \u662F\u5426\u663E\u793A\uFF1B"),n("code",null,"title"),a("\u53C2\u6570\u8BBE\u7F6E Modal \u6807\u9898\u3002")],-1),$=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u6253\u5F00 modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-modal")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("visible"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Start Snapshot Version"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("name: {{ data.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("age: {{ data.age }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("address: {{ data.address }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-modal")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" reactive "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" visible "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Chengdu'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleClick"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      visible`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" visible"),n("span",{class:"token punctuation"},","),a(" data"),n("span",{class:"token punctuation"},","),a(" handleClick "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),G=n("h3",{id:"\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u64CD\u4F5C\u6309\u94AE",tabindex:"-1"},[a("\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u64CD\u4F5C\u6309\u94AE "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u64CD\u4F5C\u6309\u94AE","aria-hidden":"true"},"#")],-1),z=n("div",null,[n("code",null,"header"),a("\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49 Modal \u9876\u90E8\u533A\u57DF\uFF0C\u5B50\u7EC4\u4EF6"),n("code",null,"d-modal-header"),a("\u4E3A\u9876\u90E8\u533A\u57DF\u63D0\u4F9B\u4E86\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u81EA\u5B9A\u4E49\u6837\u5F0F\u53EF\u901A\u8FC7\u5728\u5B50\u7EC4\u4EF6\u8BBE\u7F6E"),n("code",null,"style/class"),a("\u5B9E\u73B0\u3002"),n("code",null,"footer"),a("\u63D2\u69FD\u540C\u7406\u3002")],-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u6253\u5F00 modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-modal")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("visible"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#header"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-modal-header")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-icon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("like"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-icon")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("Good Title"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-modal-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("name: {{ data.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("age: {{ data.age }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("address: {{ data.address }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#footer"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-modal-footer")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),a(" right"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token property"},"padding-right"),n("span",{class:"token punctuation"},":"),a(" 20px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("hidden"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u53D6\u6D88"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("hidden"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u786E\u8BA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-modal-footer")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-modal")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" visible "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Chengdu'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleClick"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      visible`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"hidden"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      visible`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" visible"),n("span",{class:"token punctuation"},","),a(" data"),n("span",{class:"token punctuation"},","),a(" handleClick"),n("span",{class:"token punctuation"},","),a(" hidden "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),J=n("h3",{id:"\u5173\u95ED\u524D\u56DE\u8C03",tabindex:"-1"},[a("\u5173\u95ED\u524D\u56DE\u8C03 "),n("a",{class:"header-anchor",href:"#\u5173\u95ED\u524D\u56DE\u8C03","aria-hidden":"true"},"#")],-1),Q=n("div",null,[n("code",null,"before-close"),a("\u5728\u7528\u6237\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u6216\u8005\u906E\u7F69\u5C42\u65F6\u4F1A\u88AB\u8C03\u7528\uFF0C\u53EF\u5728\u5B8C\u6210\u67D0\u4E9B\u5F02\u6B65\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7"),n("code",null,"done"),a("\u53C2\u6570\u5173\u95ED\u3002")],-1),W=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u6253\u5F00 modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-modal")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("visible"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":before-close"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeClose"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 500px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("name: {{ data.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("age: {{ data.age }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("address: {{ data.address }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#footer"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-modal-footer")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),a(" right"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token property"},"padding-right"),n("span",{class:"token punctuation"},":"),a(" 20px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("hidden"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u53D6\u6D88"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("hidden"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u786E\u8BA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-modal-footer")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-modal")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" visible "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Chengdu'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleClick"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      visible`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"hidden"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      visible`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"beforeClose"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"done"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),a("resolve"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),a("done"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" visible"),n("span",{class:"token punctuation"},","),a(" data"),n("span",{class:"token punctuation"},","),a(" handleClick"),n("span",{class:"token punctuation"},","),a(" hidden"),n("span",{class:"token punctuation"},","),a(" beforeClose "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),X=n("h3",{id:"\u670D\u52A1\u65B9\u5F0F\u8C03\u7528",tabindex:"-1"},[a("\u670D\u52A1\u65B9\u5F0F\u8C03\u7528 "),n("a",{class:"header-anchor",href:"#\u670D\u52A1\u65B9\u5F0F\u8C03\u7528","aria-hidden":"true"},"#")],-1),Y=n("div",null,[a("\u901A\u8FC7"),n("code",null,"inject('MODAL_SERVICE_TOKEN')"),a("\u83B7\u53D6"),n("code",null,"ModalService"),a("\u5B9E\u4F8B\uFF0C\u8C03\u7528\u5B9E\u4F8B\u4E0A\u7684"),n("code",null,"open"),a("\u65B9\u6CD5\u6253\u5F00 Modal\u3002")],-1),Z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u6253\u5F00 modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" inject"),n("span",{class:"token punctuation"},","),a(" onMounted"),n("span",{class:"token punctuation"},","),a(" h "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" modalService "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"inject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'MODAL_SERVICE_TOKEN'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"open"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" result "),n("span",{class:"token operator"},"="),a(" modalService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Start Snapshot Version'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token function-variable function"},"content"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'name: Tom'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'age: 10'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'address: Chengdu'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" open "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),nn=N('<h3 id="d-modal-\u53C2\u6570" tabindex="-1">d-modal \u53C2\u6570 <a class="header-anchor" href="#d-modal-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td><code>boolean</code></td><td>false</td><td>\u662F\u5426\u663E\u793A Modal</td></tr><tr><td>title</td><td><code>string</code></td><td>-</td><td>\u53EF\u9009\uFF0CModal \u7684\u6807\u9898</td></tr><tr><td>lock-scroll</td><td><code>boolean</code></td><td>true</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u5C06 body \u6EDA\u52A8\u9501\u5B9A</td></tr><tr><td>close-on-click-overlay</td><td><code>boolean</code></td><td>true</td><td>\u53EF\u9009\uFF0C\u70B9\u51FB\u906E\u7F69\u5C42\u662F\u5426\u80FD\u5173\u95ED Modal</td></tr><tr><td>before-close</td><td><code>(done) =&gt; void</code></td><td>-</td><td>\u53EF\u9009\uFF0C\u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u8C03\u7528 done \u53EF\u5173\u95ED Modal</td></tr></tbody></table><h3 id="d-modal-\u63D2\u69FD" tabindex="-1">d-modal \u63D2\u69FD <a class="header-anchor" href="#d-modal-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>Modal \u5185\u5BB9</td></tr><tr><td>header</td><td>\u81EA\u5B9A\u4E49 Modal \u9876\u90E8</td></tr><tr><td>footer</td><td>\u81EA\u5B9A\u4E49 Modal \u5E95\u90E8</td></tr></tbody></table>',4);function an(o,s,t,u,l,i){const v=w("render-demo-0"),k=w("demo"),f=w("render-demo-1"),h=w("render-demo-2"),C=w("render-demo-3");return L(),K("div",null,[R,E(k,{sourceCode:`<template>
  <d-button @click="handleClick">\u6253\u5F00 modal</d-button>
  <d-modal v-model="visible" title="Start Snapshot Version">
    <div>name: {{ data.name }}</div>
    <div>age: {{ data.age }}</div>
    <div>address: {{ data.address }}</div>
  </d-modal>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
  setup() {
    const visible = ref(false);
    const data = reactive({
      name: 'Tom',
      age: 20,
      address: 'Chengdu',
    });
    const handleClick = () => {
      visible.value = true;
    };

    return { visible, data, handleClick };
  },
});
<\/script>
`},{description:d(()=>[U]),highlight:d(()=>[$]),default:d(()=>[E(v)]),_:1}),G,E(k,{sourceCode:`<template>
  <d-button @click="handleClick">\u6253\u5F00 modal</d-button>
  <d-modal v-model="visible">
    <template #header>
      <d-modal-header>
        <d-icon name="like"></d-icon>
        <span>Good Title</span>
      </d-modal-header>
    </template>
    <div>name: {{ data.name }}</div>
    <div>age: {{ data.age }}</div>
    <div>address: {{ data.address }}</div>
    <template #footer>
      <d-modal-footer style="text-align: right; padding-right: 20px;">
        <d-button @click="hidden">\u53D6\u6D88</d-button>
        <d-button @click="hidden">\u786E\u8BA4</d-button>
      </d-modal-footer>
    </template>
  </d-modal>
</template>
<script>
import { ref, defineComponent, reactive } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref(false);
    const data = reactive({
      name: 'Tom',
      age: 20,
      address: 'Chengdu',
    });
    const handleClick = () => {
      visible.value = true;
    };
    const hidden = () => {
      visible.value = false;
    };

    return { visible, data, handleClick, hidden };
  },
});
<\/script>
`},{description:d(()=>[z]),highlight:d(()=>[H]),default:d(()=>[E(f)]),_:1}),J,E(k,{sourceCode:`<template>
  <d-button @click="handleClick">\u6253\u5F00 modal</d-button>
  <d-modal v-model="visible" :before-close="beforeClose" style="width: 500px;">
    <div>name: {{ data.name }}</div>
    <div>age: {{ data.age }}</div>
    <div>address: {{ data.address }}</div>
    <template #footer>
      <d-modal-footer style="text-align: right; padding-right: 20px;">
        <d-button @click="hidden">\u53D6\u6D88</d-button>
        <d-button @click="hidden">\u786E\u8BA4</d-button>
      </d-modal-footer>
    </template>
  </d-modal>
</template>

<script>
import { ref, defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const visible = ref(false);
    const data = reactive({
      name: 'Tom',
      age: 20,
      address: 'Chengdu',
    });
    const handleClick = () => {
      visible.value = true;
    };
    const hidden = () => {
      visible.value = false;
    };
    const beforeClose = (done) => {
      new Promise((resolve) => {
        setTimeout(resolve, 1000);
      }).then(done);
    };

    return { visible, data, handleClick, hidden, beforeClose };
  },
});
<\/script>
`},{description:d(()=>[Q]),highlight:d(()=>[W]),default:d(()=>[E(h)]),_:1}),X,E(k,{sourceCode:`<template>
  <d-button @click="open">\u6253\u5F00 modal</d-button>
</template>
<script>
import { ref, defineComponent, inject, onMounted, h } from 'vue';

export default defineComponent({
  setup() {
    const modalService = inject('MODAL_SERVICE_TOKEN');
    const open = () => {
      const result = modalService.open({
        title: 'Start Snapshot Version',
        content: () => h('div', {}, [h('div', {}, ['name: Tom']), h('div', {}, ['age: 10']), h('div', {}, ['address: Chengdu'])]),
      });
    };

    return { open };
  },
});
<\/script>
`},{description:d(()=>[Y]),highlight:d(()=>[Z]),default:d(()=>[E(C)]),_:1}),nn])}var en=I(P,[["render",an]]);export{on as __pageData,en as default};
