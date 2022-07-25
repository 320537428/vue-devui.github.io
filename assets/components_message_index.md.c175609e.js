import{V as v}from"./framework.37dedfa0.js";import{_ as w,S as A,b as E,a1 as f,a3 as b,V as n,x as s,N as B,R as D}from"./plugin-vue_export-helper.02048804.js";import"./framework.43f3ce53.js";const x={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:t,resolveComponent:m,withCtx:a,createVNode:e,createElementVNode:g,openBlock:h,createElementBlock:r}=v,o={class:"demo-spacing"},i=t("normal"),k=t("success"),F=t("error"),y=t("warning"),d=t("info");function p(u,c){const C=m("d-button");return h(),r("div",null,[g("div",o,[e(C,{color:"primary",onClick:c[0]||(c[0]=_=>u.open("normal"))},{default:a(()=>[i]),_:1}),e(C,{color:"primary",onClick:c[1]||(c[1]=_=>u.open("success"))},{default:a(()=>[k]),_:1}),e(C,{color:"primary",onClick:c[2]||(c[2]=_=>u.open("error"))},{default:a(()=>[F]),_:1}),e(C,{color:"primary",onClick:c[3]||(c[3]=_=>u.open("warning"))},{default:a(()=>[y]),_:1}),e(C,{color:"primary",onClick:c[4]||(c[4]=_=>u.open("info"))},{default:a(()=>[d]),_:1})])])}return{render:p,...{data(){return{}},methods:{open(u){this.$message({type:u,message:"this is a message."})}}}}}(),"render-demo-1":function(){const{createTextVNode:t,resolveComponent:m,withCtx:a,createVNode:e,createElementVNode:g,openBlock:h,createElementBlock:r}=v,o={class:"demo-spacing"},i=t("show close icon"),k=t("not close");function F(d,p){const l=m("d-button");return h(),r("div",null,[g("div",o,[e(l,{color:"primary",onClick:p[0]||(p[0]=u=>d.closeIcon())},{default:a(()=>[i]),_:1}),e(l,{color:"primary",onClick:p[1]||(p[1]=u=>d.notClose())},{default:a(()=>[k]),_:1})])])}return{render:F,...{data(){return{}},methods:{closeIcon(){this.$message({type:"success",message:"Show close button.",showClose:!0})},notClose(){this.$message({type:"info",message:"Do not automatically close messages.",showClose:!0,duration:0})}}}}}(),"render-demo-2":function(){const{createTextVNode:t,resolveComponent:m,withCtx:a,createVNode:e,createElementVNode:g,openBlock:h,createElementBlock:r}=v,o={class:"demo-spacing"},i=t("show message 5000ms");function k(y,d){const p=m("d-button");return h(),r("div",null,[g("div",o,[e(p,{color:"primary",onClick:d[0]||(d[0]=l=>y.open())},{default:a(()=>[i]),_:1})])])}return{render:k,...{data(){return{}},methods:{open(){this.$message({type:"success",message:"show message 5000ms.",duration:5e3,showClose:!0})}}}}}(),"render-demo-3":function(){const{createTextVNode:t,resolveComponent:m,withCtx:a,createVNode:e,createElementVNode:g,openBlock:h,createElementBlock:r}=v,o={class:"demo-spacing"},i=t("close bordered"),k=t("close shadow"),F=t("close bordered And shadow");function y(p,l){const u=m("d-button");return h(),r("div",null,[g("div",o,[e(u,{color:"primary",onClick:l[0]||(l[0]=c=>p.closeBordered())},{default:a(()=>[i]),_:1}),e(u,{color:"primary",onClick:l[1]||(l[1]=c=>p.closeShadow())},{default:a(()=>[k]),_:1}),e(u,{color:"primary",onClick:l[2]||(l[2]=c=>p.closeBAndS())},{default:a(()=>[F]),_:1})])])}return{render:y,...{data(){return{}},methods:{closeBordered(){this.$message({type:"success",message:"close bordered.",bordered:!1})},closeShadow(){this.$message({type:"info",message:"close shadow.",shadow:!1})},closeBAndS(){this.$message({type:"error",message:"close shadow.",bordered:!1,shadow:!1})}}}}}(),"render-demo-4":function(){const{createTextVNode:t,resolveComponent:m,withCtx:a,createVNode:e,createElementVNode:g,openBlock:h,createElementBlock:r}=v,o={class:"demo-spacing"},i=t("close message");function k(y,d){const p=m("d-button");return h(),r("div",null,[g("div",o,[e(p,{color:"primary",onClick:d[0]||(d[0]=l=>y.closeMessage())},{default:a(()=>[i]),_:1})])])}return{render:k,...{data(){return{}},methods:{closeMessage(){this.$message({type:"success",message:"close message.",onClose:()=>{console.log("message closed")}})}}}}}()}},O='{"title":"Message \u5168\u5C40\u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":3,"title":"Message \u53C2\u6570","slug":"message-\u53C2\u6570"},{"level":3,"title":"\u7C7B\u578B\u5B9A\u4E49","slug":"\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/message/index.md","lastUpdated":1658732260826}',$=b('<h1 id="message-\u5168\u5C40\u63D0\u793A" tabindex="-1">Message \u5168\u5C40\u63D0\u793A <a class="header-anchor" href="#message-\u5168\u5C40\u63D0\u793A" aria-hidden="true">#</a></h1><p>\u5E38\u7528\u4E8E\u4E3B\u52A8\u64CD\u4F5C\u540E\u7684\u53CD\u9988\u63D0\u793A\u3002 \u4E0E Notification \u7684\u533A\u522B\u662F\u540E\u8005\u66F4\u591A\u7528\u4E8E\u7CFB\u7EDF\u7EA7\u901A\u77E5\u7684\u88AB\u52A8\u63D0\u9192\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u9700\u8981\u5411\u7528\u6237\u5168\u5C40\u5C55\u793A\u63D0\u793A\u4FE1\u606F\u65F6\u4F7F\u7528\uFF0C\u663E\u793A\u6570\u79D2\u540E\u6D88\u5931\u3002</p><h4 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h4><p>\u5171\u6709\u56DB\u79CD<code>Message</code>\u6837\u5F0F\uFF1Asuccess\u3001error\u3001warning\u3001info\u3002</p>',6),V=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("demo-spacing"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("open("),n("span",{class:"token punctuation"},"'"),s("normal"),n("span",{class:"token punctuation"},"'"),s(")"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("normal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("open("),n("span",{class:"token punctuation"},"'"),s("success"),n("span",{class:"token punctuation"},"'"),s(")"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("success"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("open("),n("span",{class:"token punctuation"},"'"),s("error"),n("span",{class:"token punctuation"},"'"),s(")"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("error"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("open("),n("span",{class:"token punctuation"},"'"),s("warning"),n("span",{class:"token punctuation"},"'"),s(")"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("warning"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("open("),n("span",{class:"token punctuation"},"'"),s("info"),n("span",{class:"token punctuation"},"'"),s(")"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("info"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" reactive "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"open"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"type"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$message"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        type`),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'this is a message.'"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),N=n("h4",{id:"\u53EF\u5173\u95ED\u7684\u6D88\u606F\u63D0\u793A",tabindex:"-1"},[s("\u53EF\u5173\u95ED\u7684\u6D88\u606F\u63D0\u793A "),n("a",{class:"header-anchor",href:"#\u53EF\u5173\u95ED\u7684\u6D88\u606F\u63D0\u793A","aria-hidden":"true"},"#")],-1),q=n("p",null,[s("\u9ED8\u8BA4\u7684 Message \u662F\u4E0D\u53EF\u4EE5\u88AB\u4EBA\u5DE5\u5173\u95ED\u7684\u3002 \u5982\u679C\u4F60\u9700\u8981\u624B\u52A8\u5173\u95ED\u529F\u80FD\uFF0C\u4F60\u53EF\u4EE5\u628A "),n("code",null,"showClose"),s(" \u8BBE\u7F6E\u4E3A "),n("code",null,"true"),s(" \u6B64\u5916\uFF0C\u9ED8\u8BA4\u7684\u5173\u95ED\u65F6\u95F4\u4E3A 3000 \u6BEB\u79D2\uFF0C\u5F53\u628A\u8FD9\u4E2A\u5C5E\u6027\uFF08"),n("code",null,"duration"),s("\uFF09\u7684\u503C\u8BBE\u7F6E\u4E3A0\u4FBF\u8868\u793A\u8BE5\u6D88\u606F\u4E0D\u4F1A\u88AB\u81EA\u52A8\u5173\u95ED\u3002")],-1),S=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("demo-spacing"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("closeIcon()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("show close icon"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("notClose()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("not close"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" reactive "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"closeIcon"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$message"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'Show close button.'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"showClose"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"notClose"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$message"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'Do not automatically close messages.'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"showClose"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"duration"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),M=n("h4",{id:"\u8D85\u65F6\u65F6\u95F4",tabindex:"-1"},[s("\u8D85\u65F6\u65F6\u95F4 "),n("a",{class:"header-anchor",href:"#\u8D85\u65F6\u65F6\u95F4","aria-hidden":"true"},"#")],-1),T=n("p",null,[s("\u901A\u8FC7\u8BBE\u7F6E"),n("code",null,"duration"),s("\u6765\u89C4\u5B9A"),n("code",null,"message"),s("\u6240\u663E\u793A\u7684\u65F6\u95F4\u4EE5\u6BEB\u79D2\u6765\u89C4\u5B9A(1000\u6BEB\u79D2 => 1\u79D2)\uFF0C\u5C06\u8FD9\u4E2A\u5C5E\u6027\u8BBE\u7F6E\u4E3A0\u5219\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED\u3002")],-1),I=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("demo-spacing"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("open()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("show message 5000ms"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" reactive "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"open"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$message"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'show message 5000ms.'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"duration"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5000"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"showClose"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),j=b('<h4 id="\u9634\u5F71\u548C\u8FB9\u6846\u8BBE\u7F6E" tabindex="-1">\u9634\u5F71\u548C\u8FB9\u6846\u8BBE\u7F6E <a class="header-anchor" href="#\u9634\u5F71\u548C\u8FB9\u6846\u8BBE\u7F6E" aria-hidden="true">#</a></h4><p>\u901A\u8FC7\u8BBE\u7F6E<code>bordered</code>\u4E3A<code>false</code>\u6765\u5173\u95ED<code>message</code>\u7684\u8FB9\u6846\u3002</p><p>\u901A\u8FC7\u8BBE\u7F6E<code>shadow</code>\u4E3A<code>false</code>\u6765\u5173\u95ED<code>message</code>\u7684\u9634\u5F71\u3002</p>',3),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("demo-spacing"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("closeBordered()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("close bordered"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("closeShadow()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("close shadow"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("closeBAndS()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("close bordered And shadow"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" reactive "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"closeBordered"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$message"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'close bordered.'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"bordered"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"closeShadow"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$message"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'close shadow.'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"shadow"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"closeBAndS"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$message"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'close shadow.'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"bordered"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"shadow"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),R=n("h4",{id:"\u5173\u95ED\u56DE\u8C03",tabindex:"-1"},[s("\u5173\u95ED\u56DE\u8C03 "),n("a",{class:"header-anchor",href:"#\u5173\u95ED\u56DE\u8C03","aria-hidden":"true"},"#")],-1),U=n("p",null,"\u901A\u8FC7onClose\u53C2\u6570\u8BBE\u7F6E\u6D88\u606F\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u3002",-1),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("demo-spacing"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("closeMessage()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("close message"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" reactive "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"closeMessage"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$message"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'close message.'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function-variable function"},"onClose"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'message closed'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),G=b(`<h4 id="\u591A\u79CD\u7528\u6CD5" tabindex="-1">\u591A\u79CD\u7528\u6CD5 <a class="header-anchor" href="#\u591A\u79CD\u7528\u6CD5" aria-hidden="true">#</a></h4><p>\u8C03\u7528message \u6D88\u606F\u7684\u65F6\u5019\u53EF\u4EE5\u6709\u591A\u79CD\u8C03\u7528\u65B9\u6CD5\u548C\u591A\u79CD\u4F7F\u7528\u65B9\u5F0F\u3002</p><h5 id="\u8C03\u7528\u65B9\u5F0F" tabindex="-1">\u8C03\u7528\u65B9\u5F0F <a class="header-anchor" href="#\u8C03\u7528\u65B9\u5F0F" aria-hidden="true">#</a></h5><div class="language-javascript"><pre><code># \u7B2C\u4E00\u79CD \u5168\u5C40\u8C03\u7528
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token string">&#39;I call message globally&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

# \u7B2C\u4E8C\u79CD \u5F15\u5165\u5C40\u90E8\u8C03\u7528
<span class="token keyword">import</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-devui&#39;</span>
<span class="token function">message</span><span class="token punctuation">(</span><span class="token string">&#39;I call message locally&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h5 id="\u4F7F\u7528\u65B9\u5F0F" tabindex="-1">\u4F7F\u7528\u65B9\u5F0F <a class="header-anchor" href="#\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a></h5><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-devui&#39;</span>

# \u4F20\u5165\u5B57\u7B26\u4E32\u76F4\u63A5\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570
<span class="token function">message</span><span class="token punctuation">(</span><span class="token string">&#39;I am a default message&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

# \u4F20\u5165\u5BF9\u8C61\u8BBE\u7F6E\u53C2\u6570
<span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">&#39;I am message&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bordered</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

# \u76F4\u63A5\u9009\u62E9\u7C7B\u578B\u8C03\u7528
message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;I am a error message&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">&#39;I am a error message&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bordered</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">shadow</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="message-\u53C2\u6570" tabindex="-1">Message \u53C2\u6570 <a class="header-anchor" href="#message-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C</th></tr></thead><tbody><tr><td style="text-align:left;">message</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;-&#39;</td><td style="text-align:left;">\u8BBE\u7F6E\u6D88\u606F\u6587\u5B57</td><td style="text-align:left;"><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">\u57FA\u7840\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;"><code>MessageType</code></td><td style="text-align:left;">&#39;normal&#39;</td><td style="text-align:left;">\u8BBE\u7F6E\u6D88\u606F\u5185\u5BB9\u7C7B\u578B</td><td style="text-align:left;"><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">\u57FA\u7840\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">showClose</td><td style="text-align:left;"><code>Boolean</code></td><td style="text-align:left;">&#39;false&#39;</td><td style="text-align:left;">\u8BBE\u7F6E\u5C55\u793A\u53EF\u5173\u95ED\u6309\u94AE</td><td style="text-align:left;"><a href="#%E5%8F%AF%E5%85%B3%E9%97%AD%E7%9A%84%E6%B6%88%E6%81%AF%E6%8F%90%E7%A4%BA">\u53EF\u5173\u95ED\u7684\u6D88\u606F\u63D0\u793A</a></td></tr><tr><td style="text-align:left;">duration</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">&#39;3000&#39;</td><td style="text-align:left;">\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4</td><td style="text-align:left;"><a href="#%E8%B6%85%E6%97%B6%E6%97%B6%E9%97%B4">\u8D85\u65F6\u65F6\u95F4</a></td></tr><tr><td style="text-align:left;">shadow</td><td style="text-align:left;"><code>Boolean</code></td><td style="text-align:left;">&#39;true&#39;</td><td style="text-align:left;">\u8BBE\u7F6E\u662F\u5426\u5C55\u793A\u9634\u5F71</td><td style="text-align:left;"><a href="#%E9%98%B4%E5%BD%B1%E5%92%8C%E8%BE%B9%E6%A1%86%E8%AE%BE%E7%BD%AE">\u9634\u5F71\u548C\u8FB9\u6846\u8BBE\u7F6E</a></td></tr><tr><td style="text-align:left;">bordered</td><td style="text-align:left;"><code>Boolean</code></td><td style="text-align:left;">&#39;true&#39;</td><td style="text-align:left;">\u8BBE\u7F6E\u662F\u5426\u5C55\u793A\u8FB9\u6846</td><td style="text-align:left;"><a href="#%E9%98%B4%E5%BD%B1%E5%92%8C%E8%BE%B9%E6%A1%86%E8%AE%BE%E7%BD%AE">\u9634\u5F71\u548C\u8FB9\u6846\u8BBE\u7F6E</a></td></tr><tr><td style="text-align:left;">on-close</td><td style="text-align:left;"><code>() =&gt; void</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u8BBE\u7F6E\u6D88\u606F\u5173\u95ED\u65F6\u7684\u56DE\u8C03</td><td style="text-align:left;"><a href="#%E5%85%B3%E9%97%AD%E5%9B%9E%E8%B0%83">\u5173\u95ED\u56DE\u8C03</a></td></tr></tbody></table><h3 id="\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="messagetype" tabindex="-1">MessageType <a class="header-anchor" href="#messagetype" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">MessageType</span> <span class="token operator">=</span> <span class="token string">&#39;normal&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;success&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;error&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;warning&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,11);function H(t,m,a,e,g,h){const r=B("render-demo-0"),o=B("demo"),i=B("render-demo-1"),k=B("render-demo-2"),F=B("render-demo-3"),y=B("render-demo-4");return D(),A("div",null,[$,E(o,{sourceCode:`<template>
  <div class="demo-spacing">
    <d-button color="primary" @click="open('normal')">normal</d-button>
    <d-button color="primary" @click="open('success')">success</d-button>
    <d-button color="primary" @click="open('error')">error</d-button>
    <d-button color="primary" @click="open('warning')">warning</d-button>
    <d-button color="primary" @click="open('info')">info</d-button>
   </div>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue';

export default {
  data() {
    return {}
  },
  methods: {
    open (type) {
      this.$message({
        type,
        message: 'this is a message.'
      });
    }
  }
};
<\/script>
`},{highlight:f(()=>[V]),default:f(()=>[E(r)]),_:1}),N,q,E(o,{sourceCode:`<template>
  <div class="demo-spacing">
    <d-button color="primary" @click="closeIcon()">show close icon</d-button>
    <d-button color="primary" @click="notClose()">not close</d-button>
   </div>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue';

export default {
  data() {
    return {}
  },
  methods: {
    closeIcon () {
      this.$message({
        type:'success',
        message:'Show close button.',
        showClose: true,
      });
    },
    notClose () {
      this.$message({
        type:'info',
        message:'Do not automatically close messages.',
        showClose: true,
        duration: 0
      });
    }
  }
};
<\/script>
`},{highlight:f(()=>[S]),default:f(()=>[E(i)]),_:1}),M,T,E(o,{sourceCode:`<template>
  <div class="demo-spacing">
    <d-button color="primary" @click="open()">show message 5000ms</d-button>
   </div>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue';

export default {
  data() {
    return {}
  },
  methods: {
    open () {
      this.$message({
        type:'success',
        message:'show message 5000ms.',
        duration: 5000,
        showClose: true,
      });
    }
  }
};
<\/script>
`},{highlight:f(()=>[I]),default:f(()=>[E(k)]),_:1}),j,E(o,{sourceCode:`<template>
  <div class="demo-spacing">
    <d-button color="primary" @click="closeBordered()">close bordered</d-button>
    <d-button color="primary" @click="closeShadow()">close shadow</d-button>
    <d-button color="primary" @click="closeBAndS()">close bordered And shadow</d-button>
   </div>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue';

export default {
  data() {
    return {}
  },
  methods: {
    closeBordered () {
      this.$message({
        type:'success',
        message:'close bordered.',
        bordered: false,
      });
    },
    closeShadow () {
      this.$message({
        type:'info',
        message:'close shadow.',
        shadow: false,
      });
    },
    closeBAndS () {
      this.$message({
        type:'error',
        message:'close shadow.',
        bordered: false,
        shadow: false,
      });
    }
  }
};
<\/script>
`},{highlight:f(()=>[P]),default:f(()=>[E(F)]),_:1}),R,U,E(o,{sourceCode:`<template>
  <div class="demo-spacing">
    <d-button color="primary" @click="closeMessage()">close message</d-button>
   </div>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue';

export default {
  data() {
    return {}
  },
  methods: {
    closeMessage () {
      this.$message({
        type:'success',
        message:'close message.',
        onClose: () => {
          console.log('message closed');
        },
      });
    }
  }
};
<\/script>
`},{highlight:f(()=>[z]),default:f(()=>[E(y)]),_:1}),G])}var Q=w(x,[["render",H]]);export{O as __pageData,Q as default};
