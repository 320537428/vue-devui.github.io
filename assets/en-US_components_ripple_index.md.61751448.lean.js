import{V}from"./framework.3495a366.js";import{_ as A,f as q,G as S,H as U,b as y,a1 as h,a3 as F,I as n,k as t}from"./plugin-vue_export-helper.ebedbb15.js";import"./framework.d333a127.js";const z={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:l,resolveDirective:e,openBlock:o,createElementBlock:a,withDirectives:u,createElementVNode:c,resolveComponent:p,withCtx:s,createVNode:i}=V,r={class:"ripple-button"},k={class:"ripple-htmlElement"},_=[l("HTML element with v-ripple")],f={class:"ripple-button"},b={class:"ripple-htmlElement"},g=[l("HTML element with v-ripple")];function w(I,T){const C=p("d-col"),m=p("d-row"),E=e("ripple");return o(),a("div",null,[i(m,{gutter:50},{default:s(()=>[i(C,{span:12},{default:s(()=>[c("div",r,[u((o(),a("div",k,_)),[[E,{color:"#5e7ce0",duration:300}]])])]),_:1}),i(C,{span:12},{default:s(()=>[c("div",f,[u((o(),a("div",b,g)),[[E,{duration:800}]])])]),_:1})]),_:1})])}return{render:w,...{}}}(),"render-demo-1":function(){const{renderList:l,Fragment:e,openBlock:o,createElementBlock:a,toDisplayString:u,createTextVNode:c,resolveDirective:p,withDirectives:s,normalizeStyle:i,createElementVNode:r,resolveComponent:k,withCtx:v,createVNode:_}=V,f={class:"ripple-changeTextColor"},b={class:"ripple-changeTextColor"};function d(w,x){const I=k("d-col"),T=k("d-row"),C=p("ripple");return o(),a("div",null,[_(T,null,{default:v(()=>[_(I,{span:12},{default:v(()=>[r("ul",null,[(o(),a(e,null,l([{color:"#409EFF",text:"Item with Primary ripple"},{color:"#67C23A",text:"Item with Success ripple"},{color:"#E6A23C",text:"Item with Warning ripple"},{color:"#F56C6C",text:"Item with Danger ripple"},{color:"#909399",text:"Item with Info ripple"}],m=>r("li",{style:i({color:m.color})},[s((o(),a("div",f,[c(u(m.text),1)])),[[C,{duration:300}]])],4)),64))])]),_:1}),_(I,{span:12},{default:v(()=>[r("ul",null,[(o(),a(e,null,l([{color:"#409EFF",text:"Item with Primary ripple"},{color:"#67C23A",text:"Item with Success ripple"},{color:"#E6A23C",text:"Item with Warning ripple"},{color:"#F56C6C",text:"Item with Danger ripple"},{color:"#909399",text:"Item with Info ripple"}],(m,E)=>r("li",{style:i({color:m.color})},[s((o(),a("div",b,[c(u(m.text),1)])),[[C,{duration:300,color:`${m.color.slice(0,4)}`}]])],4)),64))])]),_:1})]),_:1})])}return{render:d,...{}}}(),"render-demo-2":function(){const{createTextVNode:l,resolveComponent:e,resolveDirective:o,withCtx:a,openBlock:u,createBlock:c,withDirectives:p,createVNode:s,createElementBlock:i}=V,r=l("Text"),k=l("Text dark");function v(f,b){const d=e("d-button"),g=e("d-col"),w=e("d-row"),x=o("ripple");return u(),i("div",null,[s(w,null,{default:a(()=>[s(g,{span:6},{default:a(()=>[p((u(),c(d,{variant:"text",style:{"margin-right":"20px"}},{default:a(()=>[r]),_:1})),[[x,{duration:300}]])]),_:1}),s(g,{span:6},{default:a(()=>[p((u(),c(d,{variant:"text-dark",style:{"margin-right":"20px"}},{default:a(()=>[k]),_:1})),[[x,{duration:300}]])]),_:1}),s(g,{span:6},{default:a(()=>[p(s(d,{icon:"add",variant:"text-dark",title:"add"},null,512),[[x,{duration:300}]])]),_:1}),s(g,{span:6},{default:a(()=>[p(s(d,{icon:"delete",variant:"text-dark",title:"delete"},null,512),[[x,{duration:300}]])]),_:1})]),_:1})])}return{render:v,...{}}}(),"render-demo-3":function(){const{resolveComponent:l,createVNode:e,createTextVNode:o,createElementVNode:a,resolveDirective:u,withCtx:c,openBlock:p,createBlock:s,withDirectives:i,createElementBlock:r}=V,k=o(" DEVUI Course "),v=a("span",null,"DevUI",-1),_=o(" DEVUI is a free open-source and common solution for the front end of enterprise mid- and back-end products. Its design values are basedon... "),f={class:"card-block"},b=a("span",null,"12",-1),d={class:"card-block"},g=a("span",null,"8",-1),w={class:"card-block"},x=a("span",null,"8",-1);function I(C,m){const E=l("d-avatar"),D=l("d-icon"),B=l("d-card"),N=u("ripple");return p(),r("div",null,[i((p(),s(B,{class:"d-card",src:"https://devui.design/components/assets/image1.png"},{cardAvatar:c(()=>[e(E,{name:"DevUI"})]),cardTitle:c(()=>[k]),cardSubtitle:c(()=>[e(D,{name:"company-member"}),v]),cardContent:c(()=>[_]),cardActions:c(()=>[a("div",f,[e(D,{name:"like"}),b]),a("div",d,[e(D,{name:"star-o"}),g]),a("div",w,[e(D,{name:"message"}),x])]),_:1},8,["src"])),[[N,{duration:300}]])])}return{render:I,...{}}}()}},tn='{"title":"RippleDirective","description":"","frontmatter":{},"headers":[{"level":3,"title":"When to Use","slug":"when-to-use"},{"level":3,"title":"Custom color","slug":"custom-color"},{"level":3,"title":"Change the ripple color dynamically by changing the text color or the ripple color","slug":"change-the-ripple-color-dynamically-by-changing-the-text-color-or-the-ripple-color"},{"level":3,"title":"Ripple in components","slug":"ripple-in-components"},{"level":3,"title":"Some components provide the ripple prop that allows you to control the ripple effect.","slug":"some-components-provide-the-ripple-prop-that-allows-you-to-control-the-ripple-effect"},{"level":3,"title":"API","slug":"api"}],"relativePath":"en-US/components/ripple/index.md","lastUpdated":1658739366716}',L=F('<h1 id="rippledirective" tabindex="-1">RippleDirective <a class="header-anchor" href="#rippledirective" aria-hidden="true">#</a></h1><p><span color="#409EFF"><code>v-ripple</code></span>The v-ripple directive is used to show action from a user. It can be applied to any block level element.<span color="#409EFF"><code>tips: It can be applied to any block level element.</code></span></p><h3 id="when-to-use" tabindex="-1">When to Use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3>',3),P=n("div",null,[t("User can be use Basic ripple functionality can be enabled just by using v-ripple directive on a component or an HTML element "),n("span",{color:"#409EFF"},[n("code",null,"v-ripple")]),t("Basic ripple functionality "),n("span",{color:"#409EFF"},[n("code",null,"v-ripple")]),t(" Directive "),n("code",null,"v-ripple"),t(" Accept an object")],-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-row")]),t(),n("span",{class:"token attr-name"},":gutter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("50"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-button"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-htmlElement"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ color: "),n("span",{class:"token punctuation"},"'"),t("#5e7ce0"),n("span",{class:"token punctuation"},"'"),t(",duration: 300 }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("HTML element with v-ripple"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-button"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-htmlElement"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ duration: 800 }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("HTML element with v-ripple"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".ripple-button"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),W=n("h3",{id:"custom-color",tabindex:"-1"},[t("Custom color "),n("a",{class:"header-anchor",href:"#custom-color","aria-hidden":"true"},"#")],-1),M=n("h3",{id:"change-the-ripple-color-dynamically-by-changing-the-text-color-or-the-ripple-color",tabindex:"-1"},[t("Change the ripple color dynamically by changing the text color or the ripple color "),n("a",{class:"header-anchor",href:"#change-the-ripple-color-dynamically-by-changing-the-text-color-or-the-ripple-color","aria-hidden":"true"},"#")],-1),$=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ul")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("li")]),t(`
          `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`item in [
            { color: `),n("span",{class:"token punctuation"},"'"),t("#409EFF"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("Item with Primary ripple"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#67C23A"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("Item with Success ripple"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#E6A23C"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("Item with Warning ripple"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#F56C6C"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("Item with Danger ripple"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#909399"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("Item with Info ripple"),n("span",{class:"token punctuation"},"'"),t(` }
          ]`),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ color: item.color }"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-changeTextColor"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ duration: 300 }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            {{ item.text }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("li")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ul")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ul")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("li")]),t(`
          `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`(item, index) in [
            { color: `),n("span",{class:"token punctuation"},"'"),t("#409EFF"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("Item with Primary ripple"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#67C23A"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("Item with Success ripple"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#E6A23C"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("Item with Warning ripple"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#F56C6C"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("Item with Danger ripple"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#909399"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("Item with Info ripple"),n("span",{class:"token punctuation"},"'"),t(` }
          ]`),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ color: item.color }"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(`
            `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-changeTextColor"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ duration: 300, color: `${item.color.slice(0, 4)}` }"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},">")]),t(`
            {{ item.text }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("li")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ul")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),R=n("h3",{id:"ripple-in-components",tabindex:"-1"},[t("Ripple in components "),n("a",{class:"header-anchor",href:"#ripple-in-components","aria-hidden":"true"},"#")],-1),j=n("h3",{id:"some-components-provide-the-ripple-prop-that-allows-you-to-control-the-ripple-effect",tabindex:"-1"},[t("Some components provide the ripple prop that allows you to control the ripple effect. "),n("a",{class:"header-anchor",href:"#some-components-provide-the-ripple-prop-that-allows-you-to-control-the-ripple-effect","aria-hidden":"true"},"#")],-1),O=n("p",null,"Button Component",-1),Y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("6"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ duration: 300 }"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("text"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("Text"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("6"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ duration: 300 }"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("text-dark"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("Text dark"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("6"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ duration: 300 }"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("add"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("text-dark"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("add"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("6"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ duration: 300 }"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("delete"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("text-dark"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("delete"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),G=n("p",null,"Card Component",-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-card")]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ duration: 300 }"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("d-card"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},"'"),t("https://devui.design/components/assets/image1.png"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),K=F('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">parameter</th><th style="text-align:center;">type</th><th style="text-align:center;">default</th><th style="text-align:center;">introduce</th></tr></thead><tbody><tr><td style="text-align:center;">color</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>#00000050</code></td><td style="text-align:center;">Choose Default current text color</td></tr><tr><td style="text-align:center;">initial-opacity</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;"><code>0.1</code></td><td style="text-align:center;">Choose Initial interaction Opacity size</td></tr><tr><td style="text-align:center;">final-opacity</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;"><code>0.1</code></td><td style="text-align:center;">Choose, end the interactive effect and press the Opacity size for a long time</td></tr><tr><td style="text-align:center;">duration</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;"><code>400</code></td><td style="text-align:center;">Choose, duration</td></tr><tr><td style="text-align:center;">easing</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>ease-out</code></td><td style="text-align:center;">Choose, animation easing</td></tr><tr><td style="text-align:center;">delay</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;"><code>75</code></td><td style="text-align:center;">Choose, slow animation is delayed after debouceTime time.</td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;"><code>false</code></td><td style="text-align:center;">Choose, disabled ripple effect</td></tr></tbody></table>',2);function Q(l,e,o,a,u,c){const p=q("render-demo-0"),s=q("demo"),i=q("render-demo-1"),r=q("render-demo-2"),k=q("render-demo-3");return S(),U("div",null,[L,y(s,{sourceCode:`<template>
  <d-row :gutter="50">
    <d-col :span="12">
      <div class="ripple-button">
        <div class="ripple-htmlElement" v-ripple="{ color: '#5e7ce0',duration: 300 }">HTML element with v-ripple</div>
      </div>
    </d-col>
    <d-col :span="12">
      <div class="ripple-button">
        <div class="ripple-htmlElement" v-ripple="{ duration: 800 }">HTML element with v-ripple</div>
      </div>
    </d-col>
  </d-row>
</template>
<style scoped>
.ripple-button {
  display: flex;
}
</style>
`},{description:h(()=>[P]),highlight:h(()=>[H]),default:h(()=>[y(p)]),_:1}),W,M,y(s,{sourceCode:`<template>
  <d-row>
    <d-col :span="12">
      <ul>
        <li
          v-for="item in [
            { color: '#409EFF', text: 'Item with Primary ripple' },
            { color: '#67C23A', text: 'Item with Success ripple' },
            { color: '#E6A23C', text: 'Item with Warning ripple' },
            { color: '#F56C6C', text: 'Item with Danger ripple' },
            { color: '#909399', text: 'Item with Info ripple' }
          ]"
          :style="{ color: item.color }"
        >
          <div class="ripple-changeTextColor" v-ripple="{ duration: 300 }">
            {{ item.text }}
          </div>
        </li>
      </ul>
    </d-col>
    <d-col :span="12">
      <ul>
        <li
          v-for="(item, index) in [
            { color: '#409EFF', text: 'Item with Primary ripple' },
            { color: '#67C23A', text: 'Item with Success ripple' },
            { color: '#E6A23C', text: 'Item with Warning ripple' },
            { color: '#F56C6C', text: 'Item with Danger ripple' },
            { color: '#909399', text: 'Item with Info ripple' }
          ]"
          :style="{ color: item.color }"
        >
          <div
            class="ripple-changeTextColor"
            v-ripple="{ duration: 300, color: \`\${item.color.slice(0, 4)}\` }"
          >
            {{ item.text }}
          </div>
        </li>
      </ul>
    </d-col>
  </d-row>
</template>
`},{highlight:h(()=>[$]),default:h(()=>[y(i)]),_:1}),R,j,O,y(s,{sourceCode:`<template>
  <d-row>
    <d-col :span="6">
      <d-button v-ripple="{ duration: 300 }" variant="text" style="margin-right: 20px">Text</d-button>
    </d-col>
    <d-col :span="6">
      <d-button v-ripple="{ duration: 300 }" variant="text-dark" style="margin-right: 20px">Text dark</d-button>
    </d-col>
        <d-col :span="6">
      <d-button v-ripple="{ duration: 300 }" icon="add" variant="text-dark" title="add"></d-button>
    </d-col>
    <d-col :span="6">
      <d-button v-ripple="{ duration: 300 }" icon="delete" variant="text-dark" title="delete"></d-button>
    </d-col>
  </d-row>
</template>
`},{highlight:h(()=>[Y]),default:h(()=>[y(r)]),_:1}),G,y(s,{sourceCode:`<template>
  <d-card v-ripple="{ duration: 300 }" class="d-card" :src="'https://devui.design/components/assets/image1.png'">
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
`},{highlight:h(()=>[J]),default:h(()=>[y(k)]),_:1}),K])}var an=A(z,[["render",Q]]);export{tn as __pageData,an as default};
