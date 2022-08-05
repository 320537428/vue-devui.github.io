import{V as C}from"./framework.3495a366.js";import{_ as T,f as A,G as M,H as q,b as F,a1 as r,a3 as w,I as n,k as t}from"./plugin-vue_export-helper.ebedbb15.js";import"./framework.d333a127.js";const S={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:d,resolveComponent:u,withCtx:a,createVNode:o,toDisplayString:l,createElementVNode:p,openBlock:m,createElementBlock:k}=C,f=d("\u6253\u5F00 modal");function h(c,g){const e=u("d-button"),s=u("d-modal");return m(),k("div",null,[o(e,{onClick:c.handleClick},{default:a(()=>[f]),_:1},8,["onClick"]),o(s,{modelValue:c.visible,"onUpdate:modelValue":g[0]||(g[0]=i=>c.visible=i),title:"Start Snapshot Version"},{default:a(()=>[p("div",null,"name: "+l(c.data.name),1),p("div",null,"age: "+l(c.data.age),1),p("div",null,"address: "+l(c.data.address),1)]),_:1},8,["modelValue"])])}const{defineComponent:E,ref:y,reactive:b}=C,_=E({setup(){const c=y(!1),g=b({name:"Tom",age:20,address:"Chengdu"});return{visible:c,data:g,handleClick:()=>{c.value=!0}}}});return{render:h,..._}}(),"render-demo-1":function(){const{createTextVNode:d,resolveComponent:u,withCtx:a,createVNode:o,createElementVNode:l,toDisplayString:p,openBlock:m,createElementBlock:k}=C,f=d("\u6253\u5F00 modal"),h=l("span",null,"Good Title",-1),E=d("\u53D6\u6D88"),y=d("\u786E\u8BA4");function b(s,i){const v=u("d-button"),D=u("d-icon"),x=u("d-modal-header"),B=u("d-modal-footer"),V=u("d-modal");return m(),k("div",null,[o(v,{onClick:s.handleClick},{default:a(()=>[f]),_:1},8,["onClick"]),o(V,{modelValue:s.visible,"onUpdate:modelValue":i[0]||(i[0]=N=>s.visible=N)},{header:a(()=>[o(x,null,{default:a(()=>[o(D,{name:"like"}),h]),_:1})]),footer:a(()=>[o(B,{style:{"text-align":"right","padding-right":"20px"}},{default:a(()=>[o(v,{onClick:s.hidden},{default:a(()=>[E]),_:1},8,["onClick"]),o(v,{onClick:s.hidden},{default:a(()=>[y]),_:1},8,["onClick"])]),_:1})]),default:a(()=>[l("div",null,"name: "+p(s.data.name),1),l("div",null,"age: "+p(s.data.age),1),l("div",null,"address: "+p(s.data.address),1)]),_:1},8,["modelValue"])])}const{ref:_,defineComponent:c,reactive:g}=C,e=c({setup(){const s=_(!1),i=g({name:"Tom",age:20,address:"Chengdu"});return{visible:s,data:i,handleClick:()=>{s.value=!0},hidden:()=>{s.value=!1}}}});return{render:b,...e}}(),"render-demo-2":function(){const{createTextVNode:d,resolveComponent:u,withCtx:a,createVNode:o,toDisplayString:l,createElementVNode:p,openBlock:m,createElementBlock:k}=C,f=d("\u6253\u5F00 modal"),h=d("\u53D6\u6D88"),E=d("\u786E\u8BA4");function y(e,s){const i=u("d-button"),v=u("d-modal-footer"),D=u("d-modal");return m(),k("div",null,[o(i,{onClick:e.handleClick},{default:a(()=>[f]),_:1},8,["onClick"]),o(D,{modelValue:e.visible,"onUpdate:modelValue":s[0]||(s[0]=x=>e.visible=x),"before-close":e.beforeClose,style:{width:"500px"}},{footer:a(()=>[o(v,{style:{"text-align":"right","padding-right":"20px"}},{default:a(()=>[o(i,{onClick:e.hidden},{default:a(()=>[h]),_:1},8,["onClick"]),o(i,{onClick:e.hidden},{default:a(()=>[E]),_:1},8,["onClick"])]),_:1})]),default:a(()=>[p("div",null,"name: "+l(e.data.name),1),p("div",null,"age: "+l(e.data.age),1),p("div",null,"address: "+l(e.data.address),1)]),_:1},8,["modelValue","before-close"])])}const{ref:b,defineComponent:_,reactive:c}=C,g=_({setup(){const e=b(!1),s=c({name:"Tom",age:20,address:"Chengdu"});return{visible:e,data:s,handleClick:()=>{e.value=!0},hidden:()=>{e.value=!1},beforeClose:x=>{new Promise(B=>{setTimeout(B,1e3)}).then(x)}}}});return{render:y,...g}}()}},W='{"title":"Modal \u6A21\u6001\u5F39\u7A97","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u64CD\u4F5C\u6309\u94AE","slug":"\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u64CD\u4F5C\u6309\u94AE"},{"level":3,"title":"\u5173\u95ED\u524D\u56DE\u8C03","slug":"\u5173\u95ED\u524D\u56DE\u8C03"},{"level":3,"title":"Modal \u53C2\u6570","slug":"modal-\u53C2\u6570"},{"level":3,"title":"Modal \u63D2\u69FD","slug":"modal-\u63D2\u69FD"}],"relativePath":"components/modal/index.md","lastUpdated":1655716121170}',G=w('<h1 id="modal-\u6A21\u6001\u5F39\u7A97" tabindex="-1">Modal \u6A21\u6001\u5F39\u7A97 <a class="header-anchor" href="#modal-\u6A21\u6001\u5F39\u7A97" aria-hidden="true">#</a></h1><p>\u6A21\u6001\u6846\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>1.\u9700\u8981\u7528\u6237\u5904\u7406\u4E8B\u52A1\uFF0C\u53C8\u4E0D\u5E0C\u671B\u8DF3\u8F6C\u9875\u9762\u4EE5\u81F4\u6253\u65AD\u5DE5\u4F5C\u6D41\u7A0B\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 Modal \u5728\u5F53\u524D\u9875\u9762\u6B63\u4E2D\u6253\u5F00\u4E00\u4E2A\u6D6E\u5C42\uFF0C\u627F\u8F7D\u76F8\u5E94\u7684\u64CD\u4F5C\u3002</p><p>2.Modal \u8D77\u5230\u4E0E\u7528\u6237\u8FDB\u884C\u4EA4\u4E92\u7684\u4F5C\u7528\uFF0C\u7528\u6237\u53EF\u4EE5\u5728 Modal \u4E2D\u8F93\u5165\u4FE1\u606F\u3001\u9605\u8BFB\u63D0\u793A\u3001\u8BBE\u7F6E\u9009\u9879\u7B49\u64CD\u4F5C\u3002</p><h3 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h3>',6),P=n("div",null,[n("code",null,"v-model"),t("\u53CC\u5411\u7ED1\u5B9A\uFF0C\u63A7\u5236 Modal \u662F\u5426\u663E\u793A\uFF1B"),n("code",null,"title"),t("\u53C2\u6570\u8BBE\u7F6E Modal \u6807\u9898\u3002")],-1),U=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),$=n("h3",{id:"\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u64CD\u4F5C\u6309\u94AE",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u64CD\u4F5C\u6309\u94AE "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u64CD\u4F5C\u6309\u94AE","aria-hidden":"true"},"#")],-1),j=n("div",null,[n("code",null,"header"),t("\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49 Modal \u9876\u90E8\u533A\u57DF\uFF0C\u5B50\u7EC4\u4EF6"),n("code",null,"d-modal-header"),t("\u4E3A\u9876\u90E8\u533A\u57DF\u63D0\u4F9B\u4E86\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u81EA\u5B9A\u4E49\u6837\u5F0F\u53EF\u901A\u8FC7\u5728\u5B50\u7EC4\u4EF6\u8BBE\u7F6E"),n("code",null,"style/class"),t("\u5B9E\u73B0\u3002"),n("code",null,"footer"),t("\u63D2\u69FD\u540C\u7406\u3002")],-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),I=n("h3",{id:"\u5173\u95ED\u524D\u56DE\u8C03",tabindex:"-1"},[t("\u5173\u95ED\u524D\u56DE\u8C03 "),n("a",{class:"header-anchor",href:"#\u5173\u95ED\u524D\u56DE\u8C03","aria-hidden":"true"},"#")],-1),z=n("div",null,[n("code",null,"before-close"),t("\u5728\u7528\u6237\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u6216\u8005\u906E\u7F69\u5C42\u65F6\u4F1A\u88AB\u8C03\u7528\uFF0C\u53EF\u5728\u5B8C\u6210\u67D0\u4E9B\u5F02\u6B65\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7"),n("code",null,"done"),t("\u53C2\u6570\u5173\u95ED\u3002")],-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),K=w('<h3 id="modal-\u53C2\u6570" tabindex="-1">Modal \u53C2\u6570 <a class="header-anchor" href="#modal-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u662F\u5426\u663E\u793A Modal</td><td style="text-align:left;"><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">\u57FA\u7840\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">title</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0CModal \u7684\u6807\u9898</td><td style="text-align:left;"><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">\u57FA\u7840\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">lock-scroll</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u5C06 body \u6EDA\u52A8\u9501\u5B9A</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">close-on-click-overlay</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u70B9\u51FB\u7A7A\u767D\u5904\u662F\u5426\u80FD\u5173\u95ED Modal</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">before-close</td><td style="text-align:left;"><code>(done) =&gt; void</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u8C03\u7528 done \u53EF\u5173\u95ED Modal</td><td style="text-align:left;"><a href="#%E5%85%B3%E9%97%AD%E5%89%8D%E5%9B%9E%E8%B0%83">\u5173\u95ED\u524D\u56DE\u8C03</a></td></tr><tr><td style="text-align:left;">escapable</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u652F\u6301 esc \u952E\u5173\u95ED\u5F39\u7A97</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">show-close</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u5C55\u793A\u5173\u95ED\u6309\u94AE</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">show-overlay</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u5C55\u793A\u906E\u7F69\u5C42</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">append-to-body</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u5C06 Modal \u63D0\u5347\u5230 body \u5C42</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="modal-\u63D2\u69FD" tabindex="-1">Modal \u63D2\u69FD <a class="header-anchor" href="#modal-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u63D2\u69FD\u540D</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">Modal \u5185\u5BB9</td></tr><tr><td style="text-align:left;">header</td><td style="text-align:left;">\u81EA\u5B9A\u4E49 Modal \u9876\u90E8</td></tr><tr><td style="text-align:left;">footer</td><td style="text-align:left;">\u81EA\u5B9A\u4E49 Modal \u5E95\u90E8</td></tr></tbody></table>',4);function L(d,u,a,o,l,p){const m=A("render-demo-0"),k=A("demo"),f=A("render-demo-1"),h=A("render-demo-2");return M(),q("div",null,[G,F(k,{sourceCode:`<template>
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
`},{description:r(()=>[P]),highlight:r(()=>[U]),default:r(()=>[F(m)]),_:1}),$,F(k,{sourceCode:`<template>
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
`},{description:r(()=>[j]),highlight:r(()=>[H]),default:r(()=>[F(f)]),_:1}),I,F(k,{sourceCode:`<template>
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
`},{description:r(()=>[z]),highlight:r(()=>[J]),default:r(()=>[F(h)]),_:1}),K])}var X=T(S,[["render",L]]);export{W as __pageData,X as default};
