var P=Object.defineProperty;var S=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var E=(p,e,a)=>e in p?P(p,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):p[e]=a,N=(p,e)=>{for(var a in e||(e={}))U.call(e,a)&&E(p,a,e[a]);if(S)for(var a of S(e))$.call(e,a)&&E(p,a,e[a]);return p};import{_ as z,V as _,r as q,o as j,c as K,a as x,w as g,b as M,d as n,e as t}from"./app.a70f02bc.js";const L={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:p,resolveComponent:e,withCtx:a,createVNode:c,toDisplayString:i,createElementVNode:k,openBlock:h,createElementBlock:d}=_,f=p("open modal");function b(l,r){const u=e("d-button"),s=e("d-modal");return h(),d("div",null,[c(u,{onClick:l.handleClick},{default:a(()=>[f]),_:1},8,["onClick"]),c(s,{modelValue:l.visible,"onUpdate:modelValue":r[0]||(r[0]=o=>l.visible=o),title:"Start Snapshot Version"},{default:a(()=>[k("div",null,"name: "+i(l.data.name),1),k("div",null,"age: "+i(l.data.age),1),k("div",null,"address: "+i(l.data.address),1)]),_:1},8,["modelValue"])])}const{defineComponent:y,ref:C,reactive:w}=_,V=y({setup(){const l=C(!1),r=w({name:"Tom",age:20,address:"Chengdu"});return{visible:l,data:r,handleClick:()=>{l.value=!0}}}});return N({render:b},V)}(),"render-demo-1":function(){const{createTextVNode:p,resolveComponent:e,withCtx:a,createVNode:c,toDisplayString:i,createElementVNode:k,openBlock:h,createElementBlock:d}=_,f=p("open modal");function b(l,r){const u=e("d-button"),s=e("d-modal");return h(),d("div",null,[c(u,{onClick:l.handleClick},{default:a(()=>[f]),_:1},8,["onClick"]),c(s,{modelValue:l.visible,"onUpdate:modelValue":r[0]||(r[0]=o=>l.visible=o),title:"Start Keep Last","keep-last":!0},{default:a(()=>[k("div",null,"name: "+i(l.data.name),1),k("div",null,"age: "+i(l.data.age),1),k("div",null,"address: "+i(l.data.address),1)]),_:1},8,["modelValue"])])}const{defineComponent:y,ref:C,reactive:w}=_,V=y({setup(){const l=C(!1),r=w({name:"Tom",age:20,address:"Chengdu"});return{visible:l,data:r,handleClick:()=>{l.value=!0}}}});return N({render:b},V)}(),"render-demo-2":function(){const{createTextVNode:p,resolveComponent:e,withCtx:a,createVNode:c,createElementVNode:i,toDisplayString:k,openBlock:h,createElementBlock:d}=_,f=p("open modal"),b=i("span",null,"Good Title",-1),y=p("cancle"),C=p("confirm");function w(s,o){const m=e("d-button"),T=e("d-icon"),v=e("d-modal-header"),B=e("d-modal-footer"),D=e("d-modal");return h(),d("div",null,[c(m,{onClick:s.handleClick},{default:a(()=>[f]),_:1},8,["onClick"]),c(D,{modelValue:s.visible,"onUpdate:modelValue":o[0]||(o[0]=O=>s.visible=O)},{header:a(()=>[c(v,null,{default:a(()=>[c(T,{name:"like"}),b]),_:1})]),footer:a(()=>[c(B,{style:{"text-align":"right","padding-right":"20px"}},{default:a(()=>[c(m,{onClick:s.hidden},{default:a(()=>[y]),_:1},8,["onClick"]),c(m,{onClick:s.hidden},{default:a(()=>[C]),_:1},8,["onClick"])]),_:1})]),default:a(()=>[i("div",null,"name: "+k(s.data.name),1),i("div",null,"age: "+k(s.data.age),1),i("div",null,"address: "+k(s.data.address),1)]),_:1},8,["modelValue"])])}const{ref:V,defineComponent:l,reactive:r}=_,u=l({setup(){const s=V(!1),o=r({name:"Tom",age:20,address:"Chengdu"});return{visible:s,data:o,handleClick:()=>{s.value=!0},hidden:()=>{s.value=!1}}}});return N({render:w},u)}(),"render-demo-3":function(){const{createTextVNode:p,resolveComponent:e,withCtx:a,createVNode:c,toDisplayString:i,createElementVNode:k,openBlock:h,createElementBlock:d}=_,f=p("success"),b=p("failed"),y=p("warning"),C=p("info");function w(s,o){const m=e("d-button"),T=e("d-modal");return h(),d("div",null,[c(m,{class:"mr-1",onClick:o[0]||(o[0]=v=>s.handleClick("success"))},{default:a(()=>[f]),_:1}),c(m,{class:"mr-1",onClick:o[1]||(o[1]=v=>s.handleClick("failed"))},{default:a(()=>[b]),_:1}),c(m,{class:"mr-1",onClick:o[2]||(o[2]=v=>s.handleClick("warning"))},{default:a(()=>[y]),_:1}),c(m,{class:"mr-1",onClick:o[3]||(o[3]=v=>s.handleClick("info"))},{default:a(()=>[C]),_:1}),c(T,{modelValue:s.visible,"onUpdate:modelValue":o[4]||(o[4]=v=>s.visible=v),title:"Start Snapshot Version",type:s.type},{default:a(()=>[k("div",null,"name: "+i(s.data.name),1),k("div",null,"age: "+i(s.data.age),1),k("div",null,"address: "+i(s.data.address),1)]),_:1},8,["modelValue","type"])])}const{defineComponent:V,ref:l,reactive:r}=_,u=V({setup(){const s=l(!1),o=l(""),m=r({name:"Tom",age:20,address:"Chengdu"});return{visible:s,data:m,handleClick:v=>{s.value=!0,o.value=v},type:o}}});return N({render:w},u)}(),"render-demo-4":function(){const{createTextVNode:p,resolveComponent:e,withCtx:a,createVNode:c,toDisplayString:i,createElementVNode:k,openBlock:h,createElementBlock:d}=_,f=p("open modal"),b=p("cancel"),y=p("confirm");function C(u,s){const o=e("d-button"),m=e("d-modal-footer"),T=e("d-modal");return h(),d("div",null,[c(o,{onClick:u.handleClick},{default:a(()=>[f]),_:1},8,["onClick"]),c(T,{modelValue:u.visible,"onUpdate:modelValue":s[0]||(s[0]=v=>u.visible=v),"before-close":u.beforeClose,style:{width:"500px"}},{footer:a(()=>[c(m,{style:{"text-align":"right","padding-right":"20px"}},{default:a(()=>[c(o,{onClick:u.hidden},{default:a(()=>[b]),_:1},8,["onClick"]),c(o,{onClick:u.hidden},{default:a(()=>[y]),_:1},8,["onClick"])]),_:1})]),default:a(()=>[k("div",null,"name: "+i(u.data.name),1),k("div",null,"age: "+i(u.data.age),1),k("div",null,"address: "+i(u.data.address),1)]),_:1},8,["modelValue","before-close"])])}const{ref:w,defineComponent:V,reactive:l}=_,r=V({setup(){const u=w(!1),s=l({name:"Tom",age:20,address:"Chengdu"});return{visible:u,data:s,handleClick:()=>{u.value=!0},hidden:()=>{u.value=!1},beforeClose:v=>{new Promise(B=>{setTimeout(B,1e3)}).then(v)}}}});return N({render:C},r)}()}},ln='{"title":"Modal","description":"","frontmatter":{},"headers":[{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Keep Last Closed Position","slug":"keep-last-closed-position"},{"level":3,"title":"Customize Title & Action Buttons","slug":"customize-title-action-buttons"},{"level":3,"title":"Information Prompt","slug":"information-prompt"},{"level":3,"title":"Callback Before Closing","slug":"callback-before-closing"},{"level":3,"title":"API","slug":"api"},{"level":3,"title":"Modal Slot","slug":"modal-slot"}],"relativePath":"en-US/components/modal/index.md","lastUpdated":1667463434881}',A=M('<h1 id="modal" tabindex="-1">Modal <a class="header-anchor" href="#modal" aria-hidden="true">#</a></h1><p>Modal dialog.</p><h4 id="when-to-use" tabindex="-1">When to use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h4><p>1.When requiring users to interact with the application, but without jumping to a new page and interrupting the user&#39;s workflow, you can use Modal to create a new floating layer over the current page to get user feedback or display information.</p><p>2.Modal plays an interactive role with users. Users can enter information, read prompts, set options and other operations in Modal.</p><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3>',6),I=n("div",null,[n("code",null,"v-model"),t(" bidirectional binding, which controls whether Modal is displayed. "),n("code",null,"title"),t(" as parameter is to set modal title.")],-1),G=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("open modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),W=n("h3",{id:"keep-last-closed-position",tabindex:"-1"},[t("Keep Last Closed Position "),n("a",{class:"header-anchor",href:"#keep-last-closed-position","aria-hidden":"true"},"#")],-1),J=n("div",null,[n("code",null,"keep-last"),t(" can keep the last closed position when the current modal is opened again.")],-1),F=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("open modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-modal")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Start Keep Last"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":keep-last"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),H=n("h3",{id:"customize-title-action-buttons",tabindex:"-1"},[t("Customize Title & Action Buttons "),n("a",{class:"header-anchor",href:"#customize-title-action-buttons","aria-hidden":"true"},"#")],-1),Q=n("div",null,[n("code",null,"header"),t(" slot can customize Modal top area, subcomponent "),n("code",null,"d-modal-header"),t(" provides a default style for the top area, customized styles can be implemented by setting "),n("code",null,"style/class"),t(" in subcomponent. "),n("code",null,"footer"),t(" slot is the same.")],-1),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("open modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
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
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("hidden"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("cancle"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("hidden"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("confirm"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),X=n("h3",{id:"information-prompt",tabindex:"-1"},[t("Information Prompt "),n("a",{class:"header-anchor",href:"#information-prompt","aria-hidden":"true"},"#")],-1),Y=n("div",null,"Various types of information prompt modals.",-1),Z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mr-1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClick("),n("span",{class:"token punctuation"},"'"),t("success"),n("span",{class:"token punctuation"},"'"),t(")"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("success"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mr-1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClick("),n("span",{class:"token punctuation"},"'"),t("failed"),n("span",{class:"token punctuation"},"'"),t(")"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("failed"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mr-1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClick("),n("span",{class:"token punctuation"},"'"),t("warning"),n("span",{class:"token punctuation"},"'"),t(")"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("warning"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mr-1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClick("),n("span",{class:"token punctuation"},"'"),t("info"),n("span",{class:"token punctuation"},"'"),t(")"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("info"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-modal")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Start Snapshot Version"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("type"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
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
    `),n("span",{class:"token keyword"},"const"),t(" type "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Chengdu'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleClick"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"t"),n("span",{class:"token operator"},":"),t(" string")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
      type`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" t"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" visible"),n("span",{class:"token punctuation"},","),t(" data"),n("span",{class:"token punctuation"},","),t(" handleClick"),n("span",{class:"token punctuation"},","),t(" type "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),nn=n("h3",{id:"callback-before-closing",tabindex:"-1"},[t("Callback Before Closing "),n("a",{class:"header-anchor",href:"#callback-before-closing","aria-hidden":"true"},"#")],-1),tn=n("div",null,[n("code",null,"before-close"),t(" called when the user clicks the close button or mask layer, you can close them through the "),n("code",null,"done"),t(" parameter after completing some asynchronous operations.")],-1),an=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("open modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-modal")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":before-close"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("beforeClose"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 500px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("name: {{ data.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("age: {{ data.age }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("address: {{ data.address }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#footer"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-modal-footer")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" right"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"padding-right"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("hidden"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("cancel"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("hidden"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("confirm"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),sn=M('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:center;">Description</th><th style="text-align:center;">Jump to Demo</th></tr></thead><tbody><tr><td style="text-align:center;">v-model</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Whether Modal is displayed</td><td style="text-align:center;"><a href="#basic-usage">Basic Usage</a></td></tr><tr><td style="text-align:center;">title</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">-</td><td style="text-align:center;">Optional, Title of Modal</td><td style="text-align:center;"><a href="#basic-usage">Basic Usage</a></td></tr><tr><td style="text-align:center;">keep-last</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Optional, whether to keep the last moved position</td><td style="text-align:center;"><a href="#keep-last-closed-position">Keep Last Closed Position</a></td></tr><tr><td style="text-align:center;">lock-scroll</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">Optional, whether to lock the body scrolling</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">close-on-click-overlay</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">Optional, whether Modal can be closed when clicking the blank</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">before-close</td><td style="text-align:center;"><code>(done) =&gt; void</code></td><td style="text-align:center;">-</td><td style="text-align:center;">Optional, callback before closing, call <code>done</code> to close Modal</td><td style="text-align:center;"><a href="#callback-before-closing">Callback Before Closing</a></td></tr><tr><td style="text-align:center;">escapable</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">Optional, whether the <code>esc</code> key is supported to close the modal</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">show-close</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">Optional, whether to display the close button</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">draggable</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">Optional, whether modal can be dragged</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">show-animation</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">Optional, whether to display animation</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">show-overlay</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">Optional, whether to display mask layer</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">append-to-body</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">Optional, whether to promote Modal to the body layer</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">type</td><td style="text-align:center;">success | failed | warning | info</td><td style="text-align:center;">-</td><td style="text-align:center;">Optional, modal information prompt</td><td style="text-align:center;"></td></tr></tbody></table><h3 id="modal-slot" tabindex="-1">Modal Slot <a class="header-anchor" href="#modal-slot" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Slot name</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">Modal content</td></tr><tr><td style="text-align:left;">header</td><td style="text-align:left;">Custom Modal header</td></tr><tr><td style="text-align:left;">footer</td><td style="text-align:left;">Custom Modal footer</td></tr></tbody></table>',4);function en(p,e,a,c,i,k){const h=q("render-demo-0"),d=q("demo"),f=q("render-demo-1"),b=q("render-demo-2"),y=q("render-demo-3"),C=q("render-demo-4");return j(),K("div",null,[A,x(d,{sourceCode:`<template>
  <d-button @click="handleClick">open modal</d-button>
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
`},{description:g(()=>[I]),highlight:g(()=>[G]),default:g(()=>[x(h)]),_:1}),W,x(d,{sourceCode:`<template>
  <d-button @click="handleClick">open modal</d-button>
  <d-modal v-model="visible" title="Start Keep Last" :keep-last="true">
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
`},{description:g(()=>[J]),highlight:g(()=>[F]),default:g(()=>[x(f)]),_:1}),H,x(d,{sourceCode:`<template>
  <d-button @click="handleClick">open modal</d-button>
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
        <d-button @click="hidden">cancle</d-button>
        <d-button @click="hidden">confirm</d-button>
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
`},{description:g(()=>[Q]),highlight:g(()=>[R]),default:g(()=>[x(b)]),_:1}),X,x(d,{sourceCode:`<template>
  <d-button class="mr-1" @click="handleClick('success')">success</d-button>
  <d-button class="mr-1" @click="handleClick('failed')">failed</d-button>
  <d-button class="mr-1" @click="handleClick('warning')">warning</d-button>
  <d-button class="mr-1" @click="handleClick('info')">info</d-button>
  <d-modal v-model="visible" title="Start Snapshot Version" :type="type">
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
    const type = ref('');
    const data = reactive({
      name: 'Tom',
      age: 20,
      address: 'Chengdu',
    });
    const handleClick = (t: string) => {
      visible.value = true;
      type.value = t;
    };

    return { visible, data, handleClick, type };
  },
});
<\/script>
`},{description:g(()=>[Y]),highlight:g(()=>[Z]),default:g(()=>[x(y)]),_:1}),nn,x(d,{sourceCode:`<template>
  <d-button @click="handleClick">open modal</d-button>
  <d-modal v-model="visible" :before-close="beforeClose" style="width: 500px;">
    <div>name: {{ data.name }}</div>
    <div>age: {{ data.age }}</div>
    <div>address: {{ data.address }}</div>
    <template #footer>
      <d-modal-footer style="text-align: right; padding-right: 20px;">
        <d-button @click="hidden">cancel</d-button>
        <d-button @click="hidden">confirm</d-button>
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
`},{description:g(()=>[tn]),highlight:g(()=>[an]),default:g(()=>[x(C)]),_:1}),sn])}var pn=z(L,[["render",en]]);export{ln as __pageData,pn as default};
