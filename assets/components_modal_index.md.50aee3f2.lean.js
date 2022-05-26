var q=Object.defineProperty;var V=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var T=(e,s,a)=>s in e?q(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,A=(e,s)=>{for(var a in s||(s={}))j.call(s,a)&&T(e,a,s[a]);if(V)for(var a of V(s))O.call(s,a)&&T(e,a,s[a]);return e};import{_ as I,V as F,r as x,c as K,a as E,w as d,b as N,d as n,e as t,o as L}from"./app.0ce8509b.js";const P={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:e,resolveComponent:s,withCtx:a,createVNode:u,toDisplayString:l,createElementVNode:i,openBlock:v,createElementBlock:k}=F,C=e("\u6253\u5F00 modal");function f(p,m){const o=s("d-button"),c=s("d-modal");return v(),k("div",null,[u(o,{onClick:p.handleClick},{default:a(()=>[C]),_:1},8,["onClick"]),u(c,{modelValue:p.visible,"onUpdate:modelValue":m[0]||(m[0]=r=>p.visible=r),title:"Start Snapshot Version"},{default:a(()=>[i("div",null,"name: "+l(p.data.name),1),i("div",null,"age: "+l(p.data.age),1),i("div",null,"address: "+l(p.data.address),1)]),_:1},8,["modelValue"])])}const{defineComponent:h,ref:y,reactive:g}=F,_=h({setup(){const p=y(!1),m=g({name:"Tom",age:20,address:"Chengdu"});return{visible:p,data:m,handleClick:()=>{p.value=!0}}}});return A({render:f},_)}(),"render-demo-1":function(){const{createTextVNode:e,resolveComponent:s,withCtx:a,createVNode:u,createElementVNode:l,toDisplayString:i,openBlock:v,createElementBlock:k}=F,C=e("\u6253\u5F00 modal"),f=l("span",null,"Good Title",-1),h=e("\u53D6\u6D88"),y=e("\u786E\u8BA4");function g(c,r){const b=s("d-button"),D=s("d-icon"),B=s("d-modal-header"),w=s("d-modal-footer"),S=s("d-modal");return v(),k("div",null,[u(b,{onClick:c.handleClick},{default:a(()=>[C]),_:1},8,["onClick"]),u(S,{modelValue:c.visible,"onUpdate:modelValue":r[0]||(r[0]=M=>c.visible=M)},{header:a(()=>[u(B,null,{default:a(()=>[u(D,{name:"like"}),f]),_:1})]),footer:a(()=>[u(w,{style:{"text-align":"right","padding-right":"20px"}},{default:a(()=>[u(b,{onClick:c.hidden},{default:a(()=>[h]),_:1},8,["onClick"]),u(b,{onClick:c.hidden},{default:a(()=>[y]),_:1},8,["onClick"])]),_:1})]),default:a(()=>[l("div",null,"name: "+i(c.data.name),1),l("div",null,"age: "+i(c.data.age),1),l("div",null,"address: "+i(c.data.address),1)]),_:1},8,["modelValue"])])}const{ref:_,defineComponent:p,reactive:m}=F,o=p({setup(){const c=_(!1),r=m({name:"Tom",age:20,address:"Chengdu"});return{visible:c,data:r,handleClick:()=>{c.value=!0},hidden:()=>{c.value=!1}}}});return A({render:g},o)}(),"render-demo-2":function(){const{createTextVNode:e,resolveComponent:s,withCtx:a,createVNode:u,toDisplayString:l,createElementVNode:i,openBlock:v,createElementBlock:k}=F,C=e("\u6253\u5F00 modal"),f=e("\u53D6\u6D88"),h=e("\u786E\u8BA4");function y(o,c){const r=s("d-button"),b=s("d-modal-footer"),D=s("d-modal");return v(),k("div",null,[u(r,{onClick:o.handleClick},{default:a(()=>[C]),_:1},8,["onClick"]),u(D,{modelValue:o.visible,"onUpdate:modelValue":c[0]||(c[0]=B=>o.visible=B),"before-close":o.beforeClose,style:{width:"500px"}},{footer:a(()=>[u(b,{style:{"text-align":"right","padding-right":"20px"}},{default:a(()=>[u(r,{onClick:o.hidden},{default:a(()=>[f]),_:1},8,["onClick"]),u(r,{onClick:o.hidden},{default:a(()=>[h]),_:1},8,["onClick"])]),_:1})]),default:a(()=>[i("div",null,"name: "+l(o.data.name),1),i("div",null,"age: "+l(o.data.age),1),i("div",null,"address: "+l(o.data.address),1)]),_:1},8,["modelValue","before-close"])])}const{ref:g,defineComponent:_,reactive:p}=F,m=_({setup(){const o=g(!1),c=p({name:"Tom",age:20,address:"Chengdu"});return{visible:o,data:c,handleClick:()=>{o.value=!0},hidden:()=>{o.value=!1},beforeClose:B=>{new Promise(w=>{setTimeout(w,1e3)}).then(B)}}}});return A({render:y},m)}(),"render-demo-3":function(){const{createTextVNode:e,resolveComponent:s,withCtx:a,createVNode:u,openBlock:l,createElementBlock:i}=F,v=e("\u6253\u5F00 modal");function k(p,m){const o=s("d-button");return l(),i("div",null,[u(o,{onClick:p.open},{default:a(()=>[v]),_:1},8,["onClick"])])}const{ref:C,defineComponent:f,inject:h,onMounted:y,h:g}=F,_=f({setup(){const p=h("MODAL_SERVICE_TOKEN");return{open:()=>{p.open({title:"Start Snapshot Version",content:()=>g("div",{},[g("div",{},["name: Tom"]),g("div",{},["age: 10"]),g("div",{},["address: Chengdu"])])})}}}});return A({render:k},_)}()}},en='{"title":"Modal \u6A21\u6001\u5F39\u7A97","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u64CD\u4F5C\u6309\u94AE","slug":"\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u64CD\u4F5C\u6309\u94AE"},{"level":3,"title":"\u5173\u95ED\u524D\u56DE\u8C03","slug":"\u5173\u95ED\u524D\u56DE\u8C03"},{"level":3,"title":"\u670D\u52A1\u65B9\u5F0F\u8C03\u7528","slug":"\u670D\u52A1\u65B9\u5F0F\u8C03\u7528"},{"level":3,"title":"Modal \u53C2\u6570","slug":"modal-\u53C2\u6570"},{"level":3,"title":"Modal \u63D2\u69FD","slug":"modal-\u63D2\u69FD"}],"relativePath":"components/modal/index.md","lastUpdated":1650456022701}',R=N('<h1 id="modal-\u6A21\u6001\u5F39\u7A97" tabindex="-1">Modal \u6A21\u6001\u5F39\u7A97 <a class="header-anchor" href="#modal-\u6A21\u6001\u5F39\u7A97" aria-hidden="true">#</a></h1><p>\u6A21\u6001\u6846\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>1.\u9700\u8981\u7528\u6237\u5904\u7406\u4E8B\u52A1\uFF0C\u53C8\u4E0D\u5E0C\u671B\u8DF3\u8F6C\u9875\u9762\u4EE5\u81F4\u6253\u65AD\u5DE5\u4F5C\u6D41\u7A0B\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 Modal \u5728\u5F53\u524D\u9875\u9762\u6B63\u4E2D\u6253\u5F00\u4E00\u4E2A\u6D6E\u5C42\uFF0C\u627F\u8F7D\u76F8\u5E94\u7684\u64CD\u4F5C\u3002</p><p>2.Modal \u8D77\u5230\u4E0E\u7528\u6237\u8FDB\u884C\u4EA4\u4E92\u7684\u4F5C\u7528\uFF0C\u7528\u6237\u53EF\u4EE5\u5728 Modal \u4E2D\u8F93\u5165\u4FE1\u606F\u3001\u9605\u8BFB\u63D0\u793A\u3001\u8BBE\u7F6E\u9009\u9879\u7B49\u64CD\u4F5C\u3002</p><h3 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h3>',6),U=n("div",null,[n("code",null,"v-model"),t("\u53CC\u5411\u7ED1\u5B9A\uFF0C\u63A7\u5236 Modal \u662F\u5426\u663E\u793A\uFF1B"),n("code",null,"title"),t("\u53C2\u6570\u8BBE\u7F6E Modal \u6807\u9898\u3002")],-1),$=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u6253\u5F00 modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-modal")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Start Snapshot Version"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("name: {{ data.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("age: {{ data.age }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("address: {{ data.address }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-modal")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" reactive "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Chengdu'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleClick"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" visible"),n("span",{class:"token punctuation"},","),t(" data"),n("span",{class:"token punctuation"},","),t(" handleClick "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),G=n("h3",{id:"\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u64CD\u4F5C\u6309\u94AE",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u64CD\u4F5C\u6309\u94AE "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u64CD\u4F5C\u6309\u94AE","aria-hidden":"true"},"#")],-1),z=n("div",null,[n("code",null,"header"),t("\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49 Modal \u9876\u90E8\u533A\u57DF\uFF0C\u5B50\u7EC4\u4EF6"),n("code",null,"d-modal-header"),t("\u4E3A\u9876\u90E8\u533A\u57DF\u63D0\u4F9B\u4E86\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u81EA\u5B9A\u4E49\u6837\u5F0F\u53EF\u901A\u8FC7\u5728\u5B50\u7EC4\u4EF6\u8BBE\u7F6E"),n("code",null,"style/class"),t("\u5B9E\u73B0\u3002"),n("code",null,"footer"),t("\u63D2\u69FD\u540C\u7406\u3002")],-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u6253\u5F00 modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-modal")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#header"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-modal-header")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("like"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-icon")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("Good Title"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-modal-header")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("name: {{ data.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("age: {{ data.age }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("address: {{ data.address }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#footer"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-modal-footer")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" right"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"padding-right"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("hidden"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u53D6\u6D88"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("hidden"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u786E\u8BA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-modal-footer")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-modal")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Chengdu'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleClick"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"hidden"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" visible"),n("span",{class:"token punctuation"},","),t(" data"),n("span",{class:"token punctuation"},","),t(" handleClick"),n("span",{class:"token punctuation"},","),t(" hidden "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),J=n("h3",{id:"\u5173\u95ED\u524D\u56DE\u8C03",tabindex:"-1"},[t("\u5173\u95ED\u524D\u56DE\u8C03 "),n("a",{class:"header-anchor",href:"#\u5173\u95ED\u524D\u56DE\u8C03","aria-hidden":"true"},"#")],-1),Q=n("div",null,[n("code",null,"before-close"),t("\u5728\u7528\u6237\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u6216\u8005\u906E\u7F69\u5C42\u65F6\u4F1A\u88AB\u8C03\u7528\uFF0C\u53EF\u5728\u5B8C\u6210\u67D0\u4E9B\u5F02\u6B65\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7"),n("code",null,"done"),t("\u53C2\u6570\u5173\u95ED\u3002")],-1),W=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u6253\u5F00 modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-modal")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":before-close"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("beforeClose"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 500px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("name: {{ data.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("age: {{ data.age }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("address: {{ data.address }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#footer"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-modal-footer")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" right"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"padding-right"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("hidden"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u53D6\u6D88"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("hidden"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u786E\u8BA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-modal-footer")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-modal")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Chengdu'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleClick"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"hidden"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"beforeClose"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"done"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),t("resolve"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),t("done"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" visible"),n("span",{class:"token punctuation"},","),t(" data"),n("span",{class:"token punctuation"},","),t(" handleClick"),n("span",{class:"token punctuation"},","),t(" hidden"),n("span",{class:"token punctuation"},","),t(" beforeClose "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),X=n("h3",{id:"\u670D\u52A1\u65B9\u5F0F\u8C03\u7528",tabindex:"-1"},[t("\u670D\u52A1\u65B9\u5F0F\u8C03\u7528 "),n("a",{class:"header-anchor",href:"#\u670D\u52A1\u65B9\u5F0F\u8C03\u7528","aria-hidden":"true"},"#")],-1),Y=n("div",null,[t("\u901A\u8FC7"),n("code",null,"inject('MODAL_SERVICE_TOKEN')"),t("\u83B7\u53D6"),n("code",null,"ModalService"),t("\u5B9E\u4F8B\uFF0C\u8C03\u7528\u5B9E\u4F8B\u4E0A\u7684"),n("code",null,"open"),t("\u65B9\u6CD5\u6253\u5F00 Modal\u3002")],-1),Z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u6253\u5F00 modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" inject"),n("span",{class:"token punctuation"},","),t(" onMounted"),n("span",{class:"token punctuation"},","),t(" h "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" modalService "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"inject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'MODAL_SERVICE_TOKEN'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"open"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" result "),n("span",{class:"token operator"},"="),t(" modalService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Start Snapshot Version'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'name: Tom'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'age: 10'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'address: Chengdu'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" open "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),nn=N('<h3 id="modal-\u53C2\u6570" tabindex="-1">Modal \u53C2\u6570 <a class="header-anchor" href="#modal-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u662F\u5426\u663E\u793A Modal</td></tr><tr><td style="text-align:left;">title</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0CModal \u7684\u6807\u9898</td></tr><tr><td style="text-align:left;">lock-scroll</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u5C06 body \u6EDA\u52A8\u9501\u5B9A</td></tr><tr><td style="text-align:left;">close-on-click-overlay</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u70B9\u51FB\u906E\u7F69\u5C42\u662F\u5426\u80FD\u5173\u95ED Modal</td></tr><tr><td style="text-align:left;">before-close</td><td style="text-align:left;"><code>(done) =&gt; void</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u8C03\u7528 done \u53EF\u5173\u95ED Modal</td></tr></tbody></table><h3 id="modal-\u63D2\u69FD" tabindex="-1">Modal \u63D2\u69FD <a class="header-anchor" href="#modal-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u63D2\u69FD\u540D</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">Modal \u5185\u5BB9</td></tr><tr><td style="text-align:left;">header</td><td style="text-align:left;">\u81EA\u5B9A\u4E49 Modal \u9876\u90E8</td></tr><tr><td style="text-align:left;">footer</td><td style="text-align:left;">\u81EA\u5B9A\u4E49 Modal \u5E95\u90E8</td></tr></tbody></table>',4);function tn(e,s,a,u,l,i){const v=x("render-demo-0"),k=x("demo"),C=x("render-demo-1"),f=x("render-demo-2"),h=x("render-demo-3");return L(),K("div",null,[R,E(k,{sourceCode:`<template>
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
`},{description:d(()=>[z]),highlight:d(()=>[H]),default:d(()=>[E(C)]),_:1}),J,E(k,{sourceCode:`<template>
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
`},{description:d(()=>[Q]),highlight:d(()=>[W]),default:d(()=>[E(f)]),_:1}),X,E(k,{sourceCode:`<template>
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
`},{description:d(()=>[Y]),highlight:d(()=>[Z]),default:d(()=>[E(h)]),_:1}),nn])}var on=I(P,[["render",tn]]);export{en as __pageData,on as default};
