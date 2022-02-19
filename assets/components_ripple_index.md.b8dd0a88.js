var L=Object.defineProperty;var T=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var N=(o,a,s)=>a in o?L(o,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[a]=s,f=(o,a)=>{for(var s in a||(a={}))P.call(a,s)&&N(o,s,a[s]);if(T)for(var s of T(a))z.call(a,s)&&N(o,s,a[s]);return o};import{_ as H,r as q,c as M,b as x,w as F,a as I,d as n,e as t,o as $,V as B}from"./app.28b0be16.js";const W={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:o,resolveDirective:a,openBlock:s,createElementBlock:e,withDirectives:l,createElementVNode:u,resolveComponent:p,withCtx:c,createVNode:i}=B,k={class:"ripple-button"},r={class:"ripple-htmlElement"},_=[o("HTML\u5143\u7D20 \u4E2D\u4F7F\u7528 v-ripple")],h={class:"ripple-button"},D={class:"ripple-htmlElement"},g=[o("HTML\u5143\u7D20 \u4E2D\u4F7F\u7528 v-ripple")];function C(A,V){const y=p("d-col"),m=p("d-row"),b=a("ripple");return s(),e("div",null,[i(m,{gutter:50},{default:c(()=>[i(y,{span:12},{default:c(()=>[u("div",k,[l((s(),e("div",r,_)),[[b,{color:"#5e7ce0",duration:.3}]])])]),_:1}),i(y,{span:12},{default:c(()=>[u("div",h,[l((s(),e("div",D,g)),[[b,{duration:.8}]])])]),_:1})]),_:1})])}return f({render:C},{})}(),"render-demo-1":function(){const{renderList:o,Fragment:a,openBlock:s,createElementBlock:e,toDisplayString:l,createTextVNode:u,resolveDirective:p,withDirectives:c,normalizeStyle:i,createElementVNode:k,resolveComponent:r,withCtx:v,createVNode:_}=B,h={class:"ripple-changeTextColor"},D={class:"ripple-changeTextColor"};function d(C,E){const A=r("d-col"),V=r("d-row"),y=p("ripple");return s(),e("div",null,[_(V,null,{default:v(()=>[_(A,{span:12},{default:v(()=>[k("ul",null,[(s(),e(a,null,o([{color:"#409EFF",text:"\u8FD9\u662F\u4E00\u6761 Primary \u6D9F\u6F2A"},{color:"#67C23A",text:"\u8FD9\u662F\u4E00\u6761 Success \u6D9F\u6F2A"},{color:"#E6A23C",text:"\u8FD9\u662F\u4E00\u6761 Warning \u6D9F\u6F2A"},{color:"#F56C6C",text:"\u8FD9\u662F\u4E00\u6761 Danger \u6D9F\u6F2A"},{color:"#909399",text:"\u8FD9\u662F\u4E00\u6761 Info \u6D9F\u6F2A"}],m=>k("li",{style:i({color:m.color})},[c((s(),e("div",h,[u(l(m.text),1)])),[[y,{duration:.39}]])],4)),64))])]),_:1}),_(A,{span:12},{default:v(()=>[k("ul",null,[(s(),e(a,null,o([{color:"#409EFF",text:"\u8FD9\u662F\u4E00\u6761 Primary \u6D9F\u6F2A"},{color:"#67C23A",text:"\u8FD9\u662F\u4E00\u6761 Success \u6D9F\u6F2A"},{color:"#E6A23C",text:"\u8FD9\u662F\u4E00\u6761 Warning \u6D9F\u6F2A"},{color:"#F56C6C",text:"\u8FD9\u662F\u4E00\u6761 Danger \u6D9F\u6F2A"},{color:"#909399",text:"\u8FD9\u662F\u4E00\u6761 Info \u6D9F\u6F2A"}],(m,b)=>k("li",{style:i({color:m.color})},[c((s(),e("div",D,[u(l(m.text),1)])),[[y,{duration:.39,color:`${m.color.slice(0,4)}`}]])],4)),64))])]),_:1})]),_:1})])}return f({render:d},{})}(),"render-demo-2":function(){const{createTextVNode:o,resolveComponent:a,resolveDirective:s,withCtx:e,openBlock:l,createBlock:u,withDirectives:p,createVNode:c,createElementBlock:i}=B,k=o("Text"),r=o("Text dark");function v(h,D){const d=a("d-button"),g=a("d-col"),C=a("d-row"),E=s("ripple");return l(),i("div",null,[c(C,null,{default:e(()=>[c(g,{span:6},{default:e(()=>[p((l(),u(d,{variant:"text",style:{padding:"3px 8px","margin-right":"20px"}},{default:e(()=>[k]),_:1})),[[E,{duration:.5}]])]),_:1}),c(g,{span:6},{default:e(()=>[p((l(),u(d,{variant:"text-dark",style:{padding:"3px 8px","margin-right":"20px"}},{default:e(()=>[r]),_:1})),[[E,{duration:.5}]])]),_:1}),c(g,{span:6},{default:e(()=>[p(c(d,{icon:"add",variant:"text-dark",title:"add"},null,512),[[E,{duration:.5}]])]),_:1}),c(g,{span:6},{default:e(()=>[p(c(d,{icon:"delete",variant:"text-dark",title:"delete"},null,512),[[E,{duration:.5}]])]),_:1})]),_:1})])}return f({render:v},{})}(),"render-demo-3":function(){const{resolveComponent:o,createVNode:a,createTextVNode:s,createElementVNode:e,resolveDirective:l,withCtx:u,openBlock:p,createBlock:c,withDirectives:i,createElementBlock:k}=B,r=s(" DEVUI Course "),v=e("span",null,"DevUI",-1),_=s(" DEVUI is a free open-source and common solution for the front end of enterprise mid- and back-end products. Its design values are basedon... "),h={class:"card-block"},D=e("span",null,"12",-1),d={class:"card-block"},g=e("span",null,"8",-1),C={class:"card-block"},E=e("span",null,"8",-1);function A(y,m){const b=o("d-avatar"),w=o("d-icon"),S=o("d-card"),U=l("ripple");return p(),k("div",null,[i((p(),c(S,{class:"d-card",src:"https://devui.design/components/assets/image1.png"},{cardAvatar:u(()=>[a(b,{name:"DevUI"})]),cardTitle:u(()=>[r]),cardSubtitle:u(()=>[a(w,{name:"company-member"}),v]),cardContent:u(()=>[_]),cardActions:u(()=>[e("div",h,[a(w,{name:"like"}),D]),e("div",d,[a(w,{name:"star-o"}),g]),e("div",C,[a(w,{name:"message"}),E])]),_:1},8,["src"])),[[U]])])}return f({render:A},{})}()}},on='{"title":"Ripple \u6C34\u6CE2\u7EB9\u6307\u4EE4","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u8272\u5F69","slug":"\u81EA\u5B9A\u4E49\u8272\u5F69"},{"level":3,"title":"\u901A\u8FC7\u4FEE\u6539\u6587\u672C\u989C\u8272\u6765\u52A8\u6001\u6539\u53D8","slug":"\u901A\u8FC7\u4FEE\u6539\u6587\u672C\u989C\u8272\u6765\u52A8\u6001\u6539\u53D8"},{"level":3,"title":"\u5E94\u7528\u4E8E\u5176\u4ED6\u7EC4\u4EF6","slug":"\u5E94\u7528\u4E8E\u5176\u4ED6\u7EC4\u4EF6"},{"level":3,"title":"API","slug":"api"}],"relativePath":"components/ripple/index.md","lastUpdated":1645285927518}',R=I('<h1 id="ripple-\u6C34\u6CE2\u7EB9\u6307\u4EE4" tabindex="-1">Ripple \u6C34\u6CE2\u7EB9\u6307\u4EE4 <a class="header-anchor" href="#ripple-\u6C34\u6CE2\u7EB9\u6307\u4EE4" aria-hidden="true">#</a></h1><p><span color="#409EFF"><code>v-ripple</code></span> \u6307\u4EE4 \u7528\u4E8E\u7528\u6237\u52A8\u4F5C\u4EA4\u4E92\u573A\u666F, \u53EF\u4EE5\u5E94\u7528\u4E8E\u4EFB\u4F55\u5757\u7EA7\u5143\u7D20 <span color="#409EFF"><code>\u6CE8\uFF1A\u53EA\u80FD\u4F5C\u7528\u4E8E\u5757\u7EA7\u5143\u7D20</code></span></p><h3 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h3>',3),Y=n("div",null,[t("\u7528\u6237 \u53EF\u4EE5\u5728\u7EC4\u4EF6 \u6216\u8005 HTML \u5143\u7D20\u4E0A\u4EFB\u610F\u4F7F\u7528 "),n("span",{color:"#409EFF"},[n("code",null,"v-ripple")]),t(" \u6307\u4EE4 \u4F7F\u7528\u57FA\u672C\u7684 "),n("span",{color:"#409EFF"},[n("code",null,"v-ripple")]),t(" \u6307\u4EE4\uFF0C "),n("code",null,"v-ripple"),t(" \u63A5\u6536 \u4E00\u4E2A\u5BF9\u8C61")],-1),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-row")]),t(),n("span",{class:"token attr-name"},":gutter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("50"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-button"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-htmlElement"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ color: "),n("span",{class:"token punctuation"},"'"),t("#5e7ce0"),n("span",{class:"token punctuation"},"'"),t(",duration: 0.3 }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("HTML\u5143\u7D20 \u4E2D\u4F7F\u7528 v-ripple"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-button"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-htmlElement"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ duration: 0.8 }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("HTML\u5143\u7D20 \u4E2D\u4F7F\u7528 v-ripple"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".ripple-button"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),G=n("h3",{id:"\u81EA\u5B9A\u4E49\u8272\u5F69",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u8272\u5F69 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u8272\u5F69","aria-hidden":"true"},"#")],-1),J=n("h3",{id:"\u901A\u8FC7\u4FEE\u6539\u6587\u672C\u989C\u8272\u6765\u52A8\u6001\u6539\u53D8",tabindex:"-1"},[t("\u901A\u8FC7\u4FEE\u6539\u6587\u672C\u989C\u8272\u6765\u52A8\u6001\u6539\u53D8 "),n("a",{class:"header-anchor",href:"#\u901A\u8FC7\u4FEE\u6539\u6587\u672C\u989C\u8272\u6765\u52A8\u6001\u6539\u53D8","aria-hidden":"true"},"#")],-1),K=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ul")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("li")]),t(`
          `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`item in [
            { color: `),n("span",{class:"token punctuation"},"'"),t("#409EFF"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("\u8FD9\u662F\u4E00\u6761 Primary \u6D9F\u6F2A"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#67C23A"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("\u8FD9\u662F\u4E00\u6761 Success \u6D9F\u6F2A"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#E6A23C"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("\u8FD9\u662F\u4E00\u6761 Warning \u6D9F\u6F2A"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#F56C6C"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("\u8FD9\u662F\u4E00\u6761 Danger \u6D9F\u6F2A"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#909399"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("\u8FD9\u662F\u4E00\u6761 Info \u6D9F\u6F2A"),n("span",{class:"token punctuation"},"'"),t(` }
          ]`),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ color: item.color }"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-changeTextColor"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ duration: 0.39 }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            {{ item.text }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("li")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ul")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ul")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("li")]),t(`
          `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`(item, index) in [
            { color: `),n("span",{class:"token punctuation"},"'"),t("#409EFF"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("\u8FD9\u662F\u4E00\u6761 Primary \u6D9F\u6F2A"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#67C23A"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("\u8FD9\u662F\u4E00\u6761 Success \u6D9F\u6F2A"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#E6A23C"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("\u8FD9\u662F\u4E00\u6761 Warning \u6D9F\u6F2A"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#F56C6C"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("\u8FD9\u662F\u4E00\u6761 Danger \u6D9F\u6F2A"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#909399"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("\u8FD9\u662F\u4E00\u6761 Info \u6D9F\u6F2A"),n("span",{class:"token punctuation"},"'"),t(` }
          ]`),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ color: item.color }"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(`
            `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-changeTextColor"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ duration: 0.39, color: `${item.color.slice(0, 4)}` }"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},">")]),t(`
            {{ item.text }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("li")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ul")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),O=n("h3",{id:"\u5E94\u7528\u4E8E\u5176\u4ED6\u7EC4\u4EF6",tabindex:"-1"},[t("\u5E94\u7528\u4E8E\u5176\u4ED6\u7EC4\u4EF6 "),n("a",{class:"header-anchor",href:"#\u5E94\u7528\u4E8E\u5176\u4ED6\u7EC4\u4EF6","aria-hidden":"true"},"#")],-1),Q=n("p",null,"Button \u7EC4\u4EF6",-1),X=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("6"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{duration: 0.5}"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("text"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 3px 8px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("Text"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("6"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{duration: 0.5}"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("text-dark"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 3px 8px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("Text dark"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("6"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{duration: 0.5}"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("add"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("text-dark"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("add"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("6"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{duration: 0.5}"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("delete"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("text-dark"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("delete"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Z=n("p",null,"Card \u7EC4\u4EF6",-1),nn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-card")]),t(),n("span",{class:"token attr-name"},"v-ripple"),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("d-card"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},"'"),t("https://devui.design/components/assets/image1.png"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#cardAvatar"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-avatar")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("DevUI"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-avatar")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#cardTitle"),n("span",{class:"token punctuation"},">")]),t(`
      DEVUI Course
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#cardSubtitle"),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("icon"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("company-member"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-icon")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("DevUI"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#cardContent"),n("span",{class:"token punctuation"},">")]),t(`
      DEVUI is a free open-source and common solution for the front end of enterprise mid- and back-end products. Its design values are basedon...
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#cardActions"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("card-block"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("like"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-icon")]),t(),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("12"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("card-block"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("star-o"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-icon")]),t(),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("8"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("card-block"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("message"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-icon")]),t(),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("8"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-card")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scss"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
  `),n("span",{class:"token selector"},".card-block"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token selector"},"i"),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),t(" middle"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token selector"},"i + span"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),t(" middle"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token selector"},".d-card"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"transition"),n("span",{class:"token punctuation"},":"),t(`
      box-shadow .3s `),n("span",{class:"token function"},"cubic-bezier"),n("span",{class:"token punctuation"},"("),t(".645"),n("span",{class:"token punctuation"},","),t(".045"),n("span",{class:"token punctuation"},","),t(".355"),n("span",{class:"token punctuation"},","),t("1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      transform .3s `),n("span",{class:"token function"},"cubic-bezier"),n("span",{class:"token punctuation"},"("),t(".645"),n("span",{class:"token punctuation"},","),t(".045"),n("span",{class:"token punctuation"},","),t(".355"),n("span",{class:"token punctuation"},","),t("1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token selector"},"&:hover"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token property"},"box-shadow"),n("span",{class:"token punctuation"},":"),t(" 0 4px 16px 0 "),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),t("0"),n("span",{class:"token punctuation"},","),t("0"),n("span",{class:"token punctuation"},","),t("0"),n("span",{class:"token punctuation"},","),t(".1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"translateY"),n("span",{class:"token punctuation"},"("),t("-5px"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token selector"},".card-container"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 350px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token selector"},"img"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),t(" none"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token selector"},".action-text"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #8a8e99"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),tn=I('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">color</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>#00000050</code></td><td style="text-align:center;">\u53EF\u9009\uFF0C\u9ED8\u8BA4\u5F53\u524D\u6587\u672C\u989C\u8272</td></tr><tr><td style="text-align:center;">initial-opacity</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;"><code>0.1</code></td><td style="text-align:center;">\u53EF\u9009\uFF0C\u521D\u59CB\u4EA4\u4E92\u6548\u679C\u900F\u660E\u5EA6\u5927\u5C0F</td></tr><tr><td style="text-align:center;">final-opacity</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;"><code>0.1</code></td><td style="text-align:center;">\u53EF\u9009\uFF0C\u7ED3\u675F\u4EA4\u4E92\u6548\u679C\u957F\u6309\u900F\u660E\u5EA6\u5927\u5C0F</td></tr><tr><td style="text-align:center;">duration</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;"><code>0.4s</code></td><td style="text-align:center;">\u53EF\u9009\uFF0C\u6301\u7EED\u65F6\u95F4</td></tr><tr><td style="text-align:center;">easing</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>ease-out</code></td><td style="text-align:center;">\u53EF\u9009\uFF0C\u7F13\u52A8\u52A8\u753B</td></tr><tr><td style="text-align:center;">delay-time</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;"><code>75ms</code></td><td style="text-align:center;">\u53EF\u9009\uFF0C\u5EF6\u8FDF debouceTime \u65F6\u95F4\u540E\u8C03\u7528</td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;"><code>false</code></td><td style="text-align:center;">\u53EF\u9009\uFF0C\u7981\u6B62\u6C34\u6CE2\u6548\u679C</td></tr></tbody></table>',2);function an(o,a,s,e,l,u){const p=q("render-demo-0"),c=q("demo"),i=q("render-demo-1"),k=q("render-demo-2"),r=q("render-demo-3");return $(),M("div",null,[R,x(c,{sourceCode:`<template>
  <d-row :gutter="50">
    <d-col :span="12">
      <div class="ripple-button">
        <div class="ripple-htmlElement" v-ripple="{ color: '#5e7ce0',duration: 0.3 }">HTML\u5143\u7D20 \u4E2D\u4F7F\u7528 v-ripple</div>
      </div>
    </d-col>
    <d-col :span="12">
      <div class="ripple-button">
        <div class="ripple-htmlElement" v-ripple="{ duration: 0.8 }">HTML\u5143\u7D20 \u4E2D\u4F7F\u7528 v-ripple</div>
      </div>
    </d-col>
  </d-row>
</template>
<style scoped>
.ripple-button {
  display: flex;
}
</style>
`},{description:F(()=>[Y]),highlight:F(()=>[j]),default:F(()=>[x(p)]),_:1}),G,J,x(c,{sourceCode:`<template>
  <d-row>
    <d-col :span="12">
      <ul>
        <li
          v-for="item in [
            { color: '#409EFF', text: '\u8FD9\u662F\u4E00\u6761 Primary \u6D9F\u6F2A' },
            { color: '#67C23A', text: '\u8FD9\u662F\u4E00\u6761 Success \u6D9F\u6F2A' },
            { color: '#E6A23C', text: '\u8FD9\u662F\u4E00\u6761 Warning \u6D9F\u6F2A' },
            { color: '#F56C6C', text: '\u8FD9\u662F\u4E00\u6761 Danger \u6D9F\u6F2A' },
            { color: '#909399', text: '\u8FD9\u662F\u4E00\u6761 Info \u6D9F\u6F2A' }
          ]"
          :style="{ color: item.color }"
        >
          <div class="ripple-changeTextColor" v-ripple="{ duration: 0.39 }">
            {{ item.text }}
          </div>
        </li>
      </ul>
    </d-col>
    <d-col :span="12">
      <ul>
        <li
          v-for="(item, index) in [
            { color: '#409EFF', text: '\u8FD9\u662F\u4E00\u6761 Primary \u6D9F\u6F2A' },
            { color: '#67C23A', text: '\u8FD9\u662F\u4E00\u6761 Success \u6D9F\u6F2A' },
            { color: '#E6A23C', text: '\u8FD9\u662F\u4E00\u6761 Warning \u6D9F\u6F2A' },
            { color: '#F56C6C', text: '\u8FD9\u662F\u4E00\u6761 Danger \u6D9F\u6F2A' },
            { color: '#909399', text: '\u8FD9\u662F\u4E00\u6761 Info \u6D9F\u6F2A' }
          ]"
          :style="{ color: item.color }"
        >
          <div
            class="ripple-changeTextColor"
            v-ripple="{ duration: 0.39, color: \`\${item.color.slice(0, 4)}\` }"
          >
            {{ item.text }}
          </div>
        </li>
      </ul>
    </d-col>
  </d-row>
</template>
`},{highlight:F(()=>[K]),default:F(()=>[x(i)]),_:1}),O,Q,x(c,{sourceCode:`<template>
  <d-row>
    <d-col :span="6">
      <d-button v-ripple="{duration: 0.5}" variant="text" style="padding: 3px 8px;margin-right: 20px">Text</d-button>
    </d-col>
    <d-col :span="6">
      <d-button v-ripple="{duration: 0.5}" variant="text-dark" style="padding: 3px 8px;margin-right: 20px">Text dark</d-button>
    </d-col>
        <d-col :span="6">
      <d-button v-ripple="{duration: 0.5}" icon="add" variant="text-dark" title="add"></d-button>
    </d-col>
    <d-col :span="6">
      <d-button v-ripple="{duration: 0.5}" icon="delete" variant="text-dark" title="delete"></d-button>
    </d-col>
  </d-row>
</template>
`},{highlight:F(()=>[X]),default:F(()=>[x(k)]),_:1}),Z,x(c,{sourceCode:`<template>
  <d-card v-ripple class="d-card" :src="'https://devui.design/components/assets/image1.png'">
    <template #cardAvatar>
      <d-avatar name="DevUI"></d-avatar>
    </template>
    <template #cardTitle>
      DEVUI Course
    </template>
    <template #cardSubtitle class="icon">
      <d-icon name="company-member"></d-icon><span>DevUI</span>
    </template>
    <template #cardContent>
      DEVUI is a free open-source and common solution for the front end of enterprise mid- and back-end products. Its design values are basedon...
    </template>
    <template #cardActions>
      <div class="card-block">
        <d-icon name="like"></d-icon ><span>12</span>
      </div>
      <div class="card-block">
        <d-icon name="star-o"></d-icon ><span>8</span>
      </div>
      <div class="card-block">
        <d-icon name="message"></d-icon ><span>8</span>
      </div>
    </template>
  </d-card>
</template>
<style lang="scss">
  .card-block {
    margin-right: 16px;
    i{
      cursor: pointer;
      font-size: 16px;
      margin-right: 8px;
      vertical-align: middle;
    }
    i + span {
      vertical-align: middle;
    }
  }
  .d-card {
    cursor: pointer;
    transition:
      box-shadow .3s cubic-bezier(.645,.045,.355,1),
      transform .3s cubic-bezier(.645,.045,.355,1);
    &:hover {
      box-shadow: 0 4px 16px 0 rgba(0,0,0,.1);
      transform: translateY(-5px);
    }
  }
  .card-container {
    width: 350px;
  }
  img {
    max-width: none;
  }
  .action-text {
    color: #8a8e99;
  }
</style>
`},{highlight:F(()=>[nn]),default:F(()=>[x(r)]),_:1}),tn])}var cn=H(W,[["render",an]]);export{on as __pageData,cn as default};
