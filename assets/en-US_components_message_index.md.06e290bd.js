var E=Object.defineProperty;var V=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var N=(a,e,t)=>e in a?E(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,C=(a,e)=>{for(var t in e||(e={}))T.call(e,t)&&N(a,t,e[t]);if(V)for(var t of V(e))M.call(e,t)&&N(a,t,e[t]);return a};import{_ as I,V as w,r as x,o as q,c as A,a as _,w as v,b as S,d as n,e as s}from"./app.d86bec19.js";const D={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:a,resolveComponent:e,withCtx:t,createVNode:c,createElementVNode:y,openBlock:b,createElementBlock:d}=w,p={class:"demo-spacing"},g=a("normal"),m=a("success"),h=a("error"),f=a("warning"),k=a("info");function r(u,i){const B=e("d-button");return b(),d("div",null,[y("div",p,[c(B,{onClick:i[0]||(i[0]=$=>u.open("normal"))},{default:t(()=>[g]),_:1}),c(B,{onClick:i[1]||(i[1]=$=>u.open("success"))},{default:t(()=>[m]),_:1}),c(B,{onClick:i[2]||(i[2]=$=>u.open("error"))},{default:t(()=>[h]),_:1}),c(B,{onClick:i[3]||(i[3]=$=>u.open("warning"))},{default:t(()=>[f]),_:1}),c(B,{onClick:i[4]||(i[4]=$=>u.open("info"))},{default:t(()=>[k]),_:1})])])}const{defineComponent:o}=w,l=o({setup(){function u(i){this.$message({type:i,message:"this is a message."})}return{open:u}}});return C({render:r},l)}(),"render-demo-1":function(){const{createTextVNode:a,resolveComponent:e,withCtx:t,createVNode:c,createElementVNode:y,openBlock:b,createElementBlock:d}=w,p={class:"demo-spacing"},g=a("show close icon"),m=a("not close");function h(r,o){const l=e("d-button");return b(),d("div",null,[y("div",p,[c(l,{onClick:o[0]||(o[0]=u=>r.closeIcon())},{default:t(()=>[g]),_:1}),c(l,{onClick:o[1]||(o[1]=u=>r.notClose())},{default:t(()=>[m]),_:1})])])}const{defineComponent:f}=w,k=f({setup(){function r(){this.$message({type:"success",message:"Show close button.",showClose:!0})}function o(){this.$message({type:"info",message:"Do not automatically close messages.",showClose:!0,duration:0})}return{closeIcon:r,notClose:o}}});return C({render:h},k)}(),"render-demo-2":function(){const{createTextVNode:a,resolveComponent:e,withCtx:t,createVNode:c,createElementVNode:y,openBlock:b,createElementBlock:d}=w,p={class:"demo-spacing"},g=a("show message 5000ms");function m(k,r){const o=e("d-button");return b(),d("div",null,[y("div",p,[c(o,{onClick:r[0]||(r[0]=l=>k.open())},{default:t(()=>[g]),_:1})])])}const{defineComponent:h}=w,f=h({setup(){function k(){this.$message({type:"success",message:"show message 5000ms.",duration:5e3,showClose:!0})}return{open:k}}});return C({render:m},f)}(),"render-demo-3":function(){const{createTextVNode:a,resolveComponent:e,withCtx:t,createVNode:c,createElementVNode:y,openBlock:b,createElementBlock:d}=w,p={class:"demo-spacing"},g=a("close bordered"),m=a("close shadow"),h=a("close bordered And shadow");function f(o,l){const u=e("d-button");return b(),d("div",null,[y("div",p,[c(u,{onClick:l[0]||(l[0]=i=>o.closeBordered())},{default:t(()=>[g]),_:1}),c(u,{onClick:l[1]||(l[1]=i=>o.closeShadow())},{default:t(()=>[m]),_:1}),c(u,{onClick:l[2]||(l[2]=i=>o.closeBAndS())},{default:t(()=>[h]),_:1})])])}const{defineComponent:k}=w,r=k({setup(){function o(){this.$message({type:"success",message:"close bordered.",bordered:!1})}function l(){this.$message({type:"info",message:"close shadow.",shadow:!1})}function u(){this.$message({type:"error",message:"close shadow.",bordered:!1,shadow:!1})}return{closeBordered:o,closeShadow:l,closeBAndS:u}}});return C({render:f},r)}(),"render-demo-4":function(){const{createTextVNode:a,resolveComponent:e,withCtx:t,createVNode:c,createElementVNode:y,openBlock:b,createElementBlock:d}=w,p={class:"demo-spacing"},g=a("close message");function m(k,r){const o=e("d-button");return b(),d("div",null,[y("div",p,[c(o,{onClick:r[0]||(r[0]=l=>k.closeMessage())},{default:t(()=>[g]),_:1})])])}const{defineComponent:h}=w,f=h({setup(){function k(){this.$message({type:"success",message:"close message.",onClose:()=>{console.log("message closed")}})}return{closeMessage:k}}});return C({render:m},f)}()}},nn='{"title":"Message","description":"","frontmatter":{},"headers":[{"level":3,"title":"When To Use","slug":"when-to-use"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Closable Prompt","slug":"closable-prompt"},{"level":3,"title":"Duration","slug":"duration"},{"level":3,"title":"Shadow & Bordered Setting","slug":"shadow-bordered-setting"},{"level":3,"title":"Close Callback","slug":"close-callback"},{"level":3,"title":"Multiple Usages","slug":"multiple-usages"},{"level":3,"title":"API","slug":"api"},{"level":3,"title":"Message Type Definition","slug":"message-type-definition"}],"relativePath":"en-US/components/message/index.md","lastUpdated":1667463434881}',U=S('<h1 id="message" tabindex="-1">Message <a class="header-anchor" href="#message" aria-hidden="true">#</a></h1><p>It is often used for feedback prompt after active operation. The difference with Notification is that the latter is more used for passive reminders of system level notifications.</p><h3 id="when-to-use" tabindex="-1">When To Use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>It is used when needs to display the prompt information globally to the user, and will disappear after a few seconds.</p><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3><p>There are 4 types of <code>Message</code>\uFF1Anormal\u3001success\u3001error\u3001warning\u3001info\u3002</p>',6),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("demo-spacing"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s("  "),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("open("),n("span",{class:"token punctuation"},"'"),s("normal"),n("span",{class:"token punctuation"},"'"),s(")"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("normal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s("  "),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("open("),n("span",{class:"token punctuation"},"'"),s("success"),n("span",{class:"token punctuation"},"'"),s(")"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("success"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s("  "),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("open("),n("span",{class:"token punctuation"},"'"),s("error"),n("span",{class:"token punctuation"},"'"),s(")"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("error"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s("  "),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("open("),n("span",{class:"token punctuation"},"'"),s("warning"),n("span",{class:"token punctuation"},"'"),s(")"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("warning"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s("  "),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("open("),n("span",{class:"token punctuation"},"'"),s("info"),n("span",{class:"token punctuation"},"'"),s(")"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("info"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"open"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"type"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(` 
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$message"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        type`),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'this is a message.'"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" open "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),P=n("h3",{id:"closable-prompt",tabindex:"-1"},[s("Closable Prompt "),n("a",{class:"header-anchor",href:"#closable-prompt","aria-hidden":"true"},"#")],-1),F=n("p",null,[s("The default Message cannot be closed manually. If you need to manually close, you can set "),n("code",null,"showClose"),s(" to "),n("code",null,"true"),s(". In addition, the default duration time is 3000 milliseconds. Setting the value of this attribute ("),n("code",null,"duration"),s(") to 0 means that the message will not be automatically closed.")],-1),W=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("demo-spacing"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s("  "),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("closeIcon()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("show close icon"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s("  "),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("notClose()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("not close"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"closeIcon"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$message"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'Show close button.'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"showClose"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"notClose"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$message"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'Do not automatically close messages.'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"showClose"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"duration"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" closeIcon"),n("span",{class:"token punctuation"},","),s(" notClose "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),R=n("h3",{id:"duration",tabindex:"-1"},[s("Duration "),n("a",{class:"header-anchor",href:"#duration","aria-hidden":"true"},"#")],-1),J=n("p",null,[s("By setting "),n("code",null,"duration"),s(" to specify the time displayed by "),n("code",null,"message"),s(" in milliseconds (1000ms => 1 second), setting this attribute to 0 will not automatically close.")],-1),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("demo-spacing"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s("  "),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("open()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("show message 5000ms"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"open"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(` 
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$message"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'show message 5000ms.'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"duration"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5000"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"showClose"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" open "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),G=S('<h3 id="shadow-bordered-setting" tabindex="-1">Shadow &amp; Bordered Setting <a class="header-anchor" href="#shadow-bordered-setting" aria-hidden="true">#</a></h3><p>Remove the border of <code>message</code> by setting <code>bordered</code> to <code>false</code>.</p><p>Remove the shadow of <code>message</code> by setting <code>shadow</code> to <code>false</code>.</p>',3),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("demo-spacing"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s("  "),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("closeBordered()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("close bordered"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s("  "),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("closeShadow()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("close shadow"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s("  "),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("closeBAndS()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("close bordered And shadow"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"closeBordered"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$message"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'close bordered.'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"bordered"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"closeShadow"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$message"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'close shadow.'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"shadow"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"closeBAndS"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$message"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'close shadow.'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"bordered"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"shadow"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" closeBordered"),n("span",{class:"token punctuation"},","),s(" closeShadow"),n("span",{class:"token punctuation"},","),s(" closeBAndS "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),K=n("h3",{id:"close-callback",tabindex:"-1"},[s("Close Callback "),n("a",{class:"header-anchor",href:"#close-callback","aria-hidden":"true"},"#")],-1),L=n("p",null,"Set the callback when closing through the onClose parameter.",-1),O=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("demo-spacing"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s("  "),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("closeMessage()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("close message"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"closeMessage"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$message"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'close message.'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function-variable function"},"onClose"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'message closed'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" closeMessage "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),Q=S(`<h3 id="multiple-usages" tabindex="-1">Multiple Usages <a class="header-anchor" href="#multiple-usages" aria-hidden="true">#</a></h3><p>When calling message, there can be multiple calling methods and multiple usage methods.</p><h5 id="calling-methods" tabindex="-1">Calling Methods <a class="header-anchor" href="#calling-methods" aria-hidden="true">#</a></h5><div class="language-javascript"><pre><code><span class="token comment">// First: global call</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token string">&#39;I call message globally&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Second: import and local call</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-devui&#39;</span>
<span class="token function">message</span><span class="token punctuation">(</span><span class="token string">&#39;I call message locally&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h5 id="usage-methods" tabindex="-1">Usage Methods <a class="header-anchor" href="#usage-methods" aria-hidden="true">#</a></h5><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-devui&#39;</span>

<span class="token comment">// Accepting strings for default parameter</span>
<span class="token function">message</span><span class="token punctuation">(</span><span class="token string">&#39;I am a default message&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Accepting object for parameter</span>
<span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">&#39;I am message&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bordered</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Directly select type to call</span>
message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;I am a error message&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">&#39;I am a error message&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bordered</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">shadow</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:center;">Description</th><th style="text-align:center;">Jump to Demo</th></tr></thead><tbody><tr><td style="text-align:center;">message</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;&#39;</td><td style="text-align:center;">Set message text</td><td style="text-align:center;"><a href="#basic-usage">Basic Usage</a></td></tr><tr><td style="text-align:center;">type</td><td style="text-align:center;"><code>MessageType</code></td><td style="text-align:center;">&#39;normal&#39;</td><td style="text-align:center;">Set message content type</td><td style="text-align:center;"><a href="#basic-usage">Basic Usage</a></td></tr><tr><td style="text-align:center;">showClose</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Set the display closing button</td><td style="text-align:center;"><a href="#closable-prompt">Closable Prompt</a></td></tr><tr><td style="text-align:center;">duration</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">3000</td><td style="text-align:center;">Set duration</td><td style="text-align:center;"><a href="#duration">Duration</a></td></tr><tr><td style="text-align:center;">shadow</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">Set whether to display shadow</td><td style="text-align:center;"><a href="#shadow-bordered-setting">Shadow &amp; Bordered Setting</a></td></tr><tr><td style="text-align:center;">bordered</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">Set whether to display border</td><td style="text-align:center;"><a href="#shadow-bordered-setting">Shadow &amp; Bordered Setting</a></td></tr><tr><td style="text-align:center;">on-close</td><td style="text-align:center;"><code>() =&gt; void</code></td><td style="text-align:center;">-</td><td style="text-align:center;">Set the callback when the message is closed</td><td style="text-align:center;"><a href="#close-callback">Close Callback</a></td></tr></tbody></table><h3 id="message-type-definition" tabindex="-1">Message Type Definition <a class="header-anchor" href="#message-type-definition" aria-hidden="true">#</a></h3><h4 id="messagetype" tabindex="-1">MessageType <a class="header-anchor" href="#messagetype" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">MessageType</span> <span class="token operator">=</span> <span class="token string">&#39;normal&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;success&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;error&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;warning&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,11);function X(a,e,t,c,y,b){const d=x("render-demo-0"),p=x("demo"),g=x("render-demo-1"),m=x("render-demo-2"),h=x("render-demo-3"),f=x("render-demo-4");return q(),A("div",null,[U,_(p,{sourceCode:`<template>
  <div class="demo-spacing">
    <d-button  @click="open('normal')">normal</d-button>
    <d-button  @click="open('success')">success</d-button>
    <d-button  @click="open('error')">error</d-button>
    <d-button  @click="open('warning')">warning</d-button>
    <d-button  @click="open('info')">info</d-button>
   </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {

    function open (type) { 
      this.$message({
        type,
        message: 'this is a message.'
      })
    }
    
    return { open };
  }
});
<\/script>
`},{highlight:v(()=>[j]),default:v(()=>[_(d)]),_:1}),P,F,_(p,{sourceCode:`<template>
  <div class="demo-spacing">
    <d-button  @click="closeIcon()">show close icon</d-button>
    <d-button  @click="notClose()">not close</d-button>
   </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {

    function closeIcon () {
      this.$message({
        type:'success',
        message:'Show close button.',
        showClose: true,
      });
    }

    function notClose () {
      this.$message({
        type:'info',
        message:'Do not automatically close messages.',
        showClose: true,
        duration: 0
      });
    }
    
    return { closeIcon, notClose };
  }
});
<\/script>
`},{highlight:v(()=>[W]),default:v(()=>[_(g)]),_:1}),R,J,_(p,{sourceCode:`<template>
  <div class="demo-spacing">
    <d-button  @click="open()">show message 5000ms</d-button>
   </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {

    function open () { 
      this.$message({
        type:'success',
        message:'show message 5000ms.',
        duration: 5000,
        showClose: true,
      });
    }
    
    return { open };
  }
});
<\/script>
`},{highlight:v(()=>[z]),default:v(()=>[_(m)]),_:1}),G,_(p,{sourceCode:`<template>
  <div class="demo-spacing">
    <d-button  @click="closeBordered()">close bordered</d-button>
    <d-button  @click="closeShadow()">close shadow</d-button>
    <d-button  @click="closeBAndS()">close bordered And shadow</d-button>
   </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {

    function closeBordered () {
      this.$message({
        type:'success',
        message:'close bordered.',
        bordered: false,
      });
    }

    function closeShadow () {
      this.$message({
        type:'info',
        message:'close shadow.',
        shadow: false,
      });
    }

    function closeBAndS () {
      this.$message({
        type:'error',
        message:'close shadow.',
        bordered: false,
        shadow: false,
      });
    }
    
    return { closeBordered, closeShadow, closeBAndS };
  }
});
<\/script>
`},{highlight:v(()=>[H]),default:v(()=>[_(h)]),_:1}),K,L,_(p,{sourceCode:`<template>
  <div class="demo-spacing">
    <d-button  @click="closeMessage()">close message</d-button>
   </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {

    function closeMessage () {
      this.$message({
        type:'success',
        message:'close message.',
        onClose: () => {
          console.log('message closed');
        },
      });
    }
    
    return { closeMessage };
  }
});
<\/script>
`},{highlight:v(()=>[O]),default:v(()=>[_(f)]),_:1}),Q])}var sn=I(D,[["render",X]]);export{nn as __pageData,sn as default};
