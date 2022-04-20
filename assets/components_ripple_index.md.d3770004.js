var L=Object.defineProperty;var w=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var N=(e,s,a)=>s in e?L(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,C=(e,s)=>{for(var a in s||(s={}))z.call(s,a)&&N(e,a,s[a]);if(w)for(var a of w(s))H.call(s,a)&&N(e,a,s[a]);return e};import{_ as M,r as D,c as P,a as m,w as g,b as I,d as n,e as t,o as R,V as A}from"./app.0c19a03b.js";const $={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:e,resolveDirective:s,openBlock:a,createElementBlock:o,withDirectives:l,createElementVNode:c,resolveComponent:p,withCtx:u,createVNode:i}=A,k={class:"ripple-button"},d={class:"ripple-html-element"},_=[e("HTML\u5143\u7D20 \u4E2D\u4F7F\u7528 v-ripple")],E={class:"ripple-button"},x={class:"ripple-html-element"},F=[e("HTML\u5143\u7D20 \u4E2D\u4F7F\u7528 v-ripple")];function r(q,T){const B=p("d-col"),V=p("d-row"),y=s("ripple");return a(),o("div",null,[i(V,{gutter:50},{default:u(()=>[i(B,{span:12},{default:u(()=>[c("div",k,[l((a(),o("div",d,_)),[[y,{color:"#5e7ce0",duration:300,delay:300}]])])]),_:1}),i(B,{span:12},{default:u(()=>[c("div",E,[l((a(),o("div",x,F)),[[y,{duration:800}]])])]),_:1})]),_:1})])}return C({render:r},{})}(),"render-demo-1":function(){const{renderList:e,Fragment:s,openBlock:a,createElementBlock:o,toDisplayString:l,createTextVNode:c,resolveDirective:p,withDirectives:u,normalizeStyle:i,createElementVNode:k}=A,d={class:"demo-ripple"},v={class:"ripple-change-text-color"};function _(x,f){const F=p("ripple");return a(),o("div",null,[k("ul",d,[(a(),o(s,null,e([{color:"#409EFF",text:"\u8FD9\u662F\u4E00\u6761 Primary \u6D9F\u6F2A"},{color:"#67C23A",text:"\u8FD9\u662F\u4E00\u6761 Success \u6D9F\u6F2A"},{color:"#E6A23C",text:"\u8FD9\u662F\u4E00\u6761 Warning \u6D9F\u6F2A"},{color:"#F56C6C",text:"\u8FD9\u662F\u4E00\u6761 Danger \u6D9F\u6F2A"},{color:"#909399",text:"\u8FD9\u662F\u4E00\u6761 Info \u6D9F\u6F2A"}],r=>k("li",{style:i({color:r.color})},[u((a(),o("div",v,[c(l(r.text),1)])),[[F,{duration:300}]])],4)),64))])])}return C({render:_},{})}(),"render-demo-2":function(){const{createTextVNode:e,resolveComponent:s,resolveDirective:a,withCtx:o,openBlock:l,createBlock:c,withDirectives:p,createVNode:u,createElementVNode:i,createElementBlock:k}=A,d={class:"demo-spacing"},v=e("Solid button"),_=e("Secondary button");function E(f,F){const r=s("d-button"),h=a("ripple");return l(),k("div",null,[i("div",d,[p((l(),c(r,{variant:"solid"},{default:o(()=>[v]),_:1})),[[h,{duration:300}]]),p((l(),c(r,null,{default:o(()=>[_]),_:1})),[[h,{duration:300}]]),p(u(r,{icon:"add",title:"Add"},null,512),[[h,{duration:300}]])])])}return C({render:E},{})}(),"render-demo-3":function(){const{resolveComponent:e,createVNode:s,createTextVNode:a,createElementVNode:o,resolveDirective:l,withCtx:c,openBlock:p,createBlock:u,withDirectives:i,createElementBlock:k}=A,d=a(" DEVUI Course "),v=o("span",null,"DevUI",-1),_=a(" DEVUI is a free open-source and common solution for the front end of enterprise mid- and back-end products. Its design values are basedon... "),E={class:"card-block"},x=o("span",null,"12",-1),f={class:"card-block"},F=o("span",null,"8",-1),r={class:"card-block"},h=o("span",null,"8",-1);function q(B,V){const y=e("d-avatar"),b=e("d-icon"),S=e("d-card"),U=l("ripple");return p(),k("div",null,[i((p(),u(S,{class:"demo-card",src:"https://devui.design/components/assets/image1.png"},{avatar:c(()=>[s(y,{name:"DevUI"})]),title:c(()=>[d]),subtitle:c(()=>[s(b,{name:"company-member"}),v]),content:c(()=>[_]),actions:c(()=>[o("div",E,[s(b,{name:"like"}),x]),o("div",f,[s(b,{name:"star-o"}),F]),o("div",r,[s(b,{name:"message"}),h])]),_:1},8,["src"])),[[U,{duration:300}]])])}return C({render:q},{})}()}},en='{"title":"Ripple \u6C34\u6CE2\u7EB9\u6307\u4EE4","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u989C\u8272","slug":"\u81EA\u5B9A\u4E49\u989C\u8272"},{"level":3,"title":"\u5E94\u7528\u4E8E\u5176\u4ED6\u7EC4\u4EF6","slug":"\u5E94\u7528\u4E8E\u5176\u4ED6\u7EC4\u4EF6"},{"level":3,"title":"Ripple \u53C2\u6570","slug":"ripple-\u53C2\u6570"}],"relativePath":"components/ripple/index.md","lastUpdated":1650445643199}',W=I('<h1 id="ripple-\u6C34\u6CE2\u7EB9\u6307\u4EE4" tabindex="-1">Ripple \u6C34\u6CE2\u7EB9\u6307\u4EE4 <a class="header-anchor" href="#ripple-\u6C34\u6CE2\u7EB9\u6307\u4EE4" aria-hidden="true">#</a></h1><p>\u6C34\u6CE2\u7EB9\u6307\u4EE4\uFF0C\u7528\u4E8E\u70B9\u51FB\u4E4B\u540E\u4EA7\u751F\u6C34\u6CE2\u7EB9\u7684\u52A8\u6548\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p><code>v-ripple</code>\u6307\u4EE4\u7528\u4E8E\u70B9\u51FB\u4E4B\u540E\u4EA7\u751F\u6C34\u6CE2\u7EB9\u7684\u52A8\u6548, \u53EF\u4EE5\u5E94\u7528\u4E8E\u4EFB\u4F55\u5757\u7EA7\u5143\u7D20\u3002</p><blockquote><p>\u6CE8\uFF1A\u53EA\u80FD\u4F5C\u7528\u4E8E\u5757\u7EA7\u5143\u7D20</p></blockquote><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',6),Y=n("div",null,[t("\u7528\u6237 \u53EF\u4EE5\u5728\u7EC4\u4EF6 \u6216\u8005 HTML \u5143\u7D20\u4E0A\u4EFB\u610F\u4F7F\u7528 "),n("span",{color:"#409EFF"},[n("code",null,"v-ripple")]),t(" \u6307\u4EE4 \u4F7F\u7528\u57FA\u672C\u7684 "),n("span",{color:"#409EFF"},[n("code",null,"v-ripple")]),t(" \u6307\u4EE4\uFF0C "),n("code",null,"v-ripple"),t(" \u63A5\u6536 \u4E00\u4E2A\u5BF9\u8C61")],-1),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-row")]),t(),n("span",{class:"token attr-name"},":gutter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("50"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-button"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-html-element"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ color: "),n("span",{class:"token punctuation"},"'"),t("#5e7ce0"),n("span",{class:"token punctuation"},"'"),t(",duration: 300, delay: 300 }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("HTML\u5143\u7D20 \u4E2D\u4F7F\u7528 v-ripple"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-button"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-html-element"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ duration: 800 }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("HTML\u5143\u7D20 \u4E2D\u4F7F\u7528 v-ripple"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".ripple-button"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),G=n("h3",{id:"\u81EA\u5B9A\u4E49\u989C\u8272",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u989C\u8272 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u989C\u8272","aria-hidden":"true"},"#")],-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ul")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-ripple"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
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
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-change-text-color"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ duration: 300 }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        {{ item.text }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("li")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ul")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
  `),n("span",{class:"token selector"},".demo-ripple"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"list-style"),n("span",{class:"token punctuation"},":"),t(" none"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"padding-left"),n("span",{class:"token punctuation"},":"),t(" 0"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),K=n("h3",{id:"\u5E94\u7528\u4E8E\u5176\u4ED6\u7EC4\u4EF6",tabindex:"-1"},[t("\u5E94\u7528\u4E8E\u5176\u4ED6\u7EC4\u4EF6 "),n("a",{class:"header-anchor",href:"#\u5E94\u7528\u4E8E\u5176\u4ED6\u7EC4\u4EF6","aria-hidden":"true"},"#")],-1),O=n("p",null,"Button \u7EC4\u4EF6",-1),Q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-spacing"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("solid"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ duration: 300 }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Solid button"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ duration: 300 }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Secondary button"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("add"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Add"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ duration: 300 }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),X=n("p",null,"Card \u7EC4\u4EF6",-1),Z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-card")]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ duration: 300 }"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-card"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},"'"),t("https://devui.design/components/assets/image1.png"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#avatar"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-avatar")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("DevUI"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-avatar")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token punctuation"},">")]),t(`
      DEVUI Course
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#subtitle"),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("icon"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("company-member"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-icon")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("DevUI"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token punctuation"},">")]),t(`
      DEVUI is a free open-source and common solution for the front end of enterprise mid- and back-end products. Its design values are basedon...
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#actions"),n("span",{class:"token punctuation"},">")]),t(`
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
  `),n("span",{class:"token selector"},".demo-card"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 350px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"transition"),n("span",{class:"token punctuation"},":"),t(`
      box-shadow .3s `),n("span",{class:"token function"},"cubic-bezier"),n("span",{class:"token punctuation"},"("),t(".645"),n("span",{class:"token punctuation"},","),t(".045"),n("span",{class:"token punctuation"},","),t(".355"),n("span",{class:"token punctuation"},","),t("1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      transform .3s `),n("span",{class:"token function"},"cubic-bezier"),n("span",{class:"token punctuation"},"("),t(".645"),n("span",{class:"token punctuation"},","),t(".045"),n("span",{class:"token punctuation"},","),t(".355"),n("span",{class:"token punctuation"},","),t("1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    
    `),n("span",{class:"token selector"},"&:hover"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token property"},"box-shadow"),n("span",{class:"token punctuation"},":"),t(" 0 4px 16px 0 "),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),t("0"),n("span",{class:"token punctuation"},","),t("0"),n("span",{class:"token punctuation"},","),t("0"),n("span",{class:"token punctuation"},","),t(".1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"translateY"),n("span",{class:"token punctuation"},"("),t("-5px"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token selector"},".card-block"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`

      `),n("span",{class:"token selector"},"i"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),t(" middle"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`

      `),n("span",{class:"token selector"},"i + span"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),t(" middle"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token selector"},"img"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),t(" none"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token selector"},".action-text"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #8a8e99"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),nn=I('<h3 id="ripple-\u53C2\u6570" tabindex="-1">Ripple \u53C2\u6570 <a class="header-anchor" href="#ripple-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">color</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;#00000050&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9ED8\u8BA4\u5F53\u524D\u6587\u672C\u989C\u8272</td></tr><tr><td style="text-align:left;">initial-opacity</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">0.1</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u521D\u59CB\u4EA4\u4E92\u6548\u679C\u900F\u660E\u5EA6\u5927\u5C0F</td></tr><tr><td style="text-align:left;">final-opacity</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">0.1</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7ED3\u675F\u4EA4\u4E92\u6548\u679C\u957F\u6309\u900F\u660E\u5EA6\u5927\u5C0F</td></tr><tr><td style="text-align:left;">duration</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">400</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6301\u7EED\u65F6\u95F4</td></tr><tr><td style="text-align:left;">easing</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;ease-out&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7F13\u52A8\u52A8\u753B</td></tr><tr><td style="text-align:left;">delay</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">75`</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5EF6\u8FDF debouceTime \u65F6\u95F4\u540E\u8C03\u7528</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7981\u6B62\u6C34\u6CE2\u6548\u679C</td></tr></tbody></table>',2);function tn(e,s,a,o,l,c){const p=D("render-demo-0"),u=D("demo"),i=D("render-demo-1"),k=D("render-demo-2"),d=D("render-demo-3");return R(),P("div",null,[W,m(u,{sourceCode:`<template>
  <d-row :gutter="50">
    <d-col :span="12">
      <div class="ripple-button">
        <div class="ripple-html-element" v-ripple="{ color: '#5e7ce0',duration: 300, delay: 300 }">HTML\u5143\u7D20 \u4E2D\u4F7F\u7528 v-ripple</div>
      </div>
    </d-col>
    <d-col :span="12">
      <div class="ripple-button">
        <div class="ripple-html-element" v-ripple="{ duration: 800 }">HTML\u5143\u7D20 \u4E2D\u4F7F\u7528 v-ripple</div>
      </div>
    </d-col>
  </d-row>
</template>
<style scoped>
.ripple-button {
  display: flex;
}
</style>
`},{description:g(()=>[Y]),highlight:g(()=>[j]),default:g(()=>[m(p)]),_:1}),G,m(u,{sourceCode:`<template>
  <ul class="demo-ripple">
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
      <div class="ripple-change-text-color" v-ripple="{ duration: 300 }">
        {{ item.text }}
      </div>
    </li>
  </ul>
</template>
<style>
  .demo-ripple {
    list-style: none;
    padding-left: 0;
  }
</style>
`},{highlight:g(()=>[J]),default:g(()=>[m(i)]),_:1}),K,O,m(u,{sourceCode:`<template>
  <div class="demo-spacing">
    <d-button variant="solid" v-ripple="{ duration: 300 }">Solid button</d-button>
    <d-button v-ripple="{ duration: 300 }">Secondary button</d-button>
    <d-button icon="add" title="Add" v-ripple="{ duration: 300 }"></d-button>
  </div>
</template>
`},{highlight:g(()=>[Q]),default:g(()=>[m(k)]),_:1}),X,m(u,{sourceCode:`<template>
  <d-card v-ripple="{ duration: 300 }" class="demo-card" :src="'https://devui.design/components/assets/image1.png'">
    <template #avatar>
      <d-avatar name="DevUI"></d-avatar>
    </template>
    <template #title>
      DEVUI Course
    </template>
    <template #subtitle class="icon">
      <d-icon name="company-member"></d-icon><span>DevUI</span>
    </template>
    <template #content>
      DEVUI is a free open-source and common solution for the front end of enterprise mid- and back-end products. Its design values are basedon...
    </template>
    <template #actions>
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
  .demo-card {
    width: 350px;
    cursor: pointer;
    transition:
      box-shadow .3s cubic-bezier(.645,.045,.355,1),
      transform .3s cubic-bezier(.645,.045,.355,1);
    
    &:hover {
      box-shadow: 0 4px 16px 0 rgba(0,0,0,.1);
      transform: translateY(-5px);
    }

    .card-block {
      margin-right: 16px;

      i {
        cursor: pointer;
        font-size: 16px;
        margin-right: 8px;
        vertical-align: middle;
      }

      i + span {
        vertical-align: middle;
      }
    }

    img {
      max-width: none;
    }

    .action-text {
      color: #8a8e99;
    }
  }
</style>
`},{highlight:g(()=>[Z]),default:g(()=>[m(d)]),_:1}),nn])}var on=M($,[["render",tn]]);export{en as __pageData,on as default};
