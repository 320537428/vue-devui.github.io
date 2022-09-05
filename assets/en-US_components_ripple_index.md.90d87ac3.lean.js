var z=Object.defineProperty;var B=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var N=(o,a,s)=>a in o?z(o,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[a]=s,q=(o,a)=>{for(var s in a||(a={}))L.call(a,s)&&N(o,s,a[s]);if(B)for(var s of B(a))P.call(a,s)&&N(o,s,a[s]);return o};import{_ as W,r as D,o as H,c as M,a as y,w as h,b as A,d as n,e as t,V as T}from"./app.882d7a26.js";const $={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:o,resolveDirective:a,openBlock:s,createElementBlock:e,withDirectives:u,createElementVNode:p,resolveComponent:l,withCtx:c,createVNode:i}=T,r={class:"ripple-button"},k={class:"ripple-htmlElement"},_=[o("HTML element with v-ripple")],b={class:"ripple-button"},f={class:"ripple-htmlElement"},g=[o("HTML element with v-ripple")];function w(I,F){const C=l("d-col"),m=l("d-row"),E=a("ripple");return s(),e("div",null,[i(m,{gutter:50},{default:c(()=>[i(C,{span:12},{default:c(()=>[p("div",r,[u((s(),e("div",k,_)),[[E,{color:"#5e7ce0",duration:300}]])])]),_:1}),i(C,{span:12},{default:c(()=>[p("div",b,[u((s(),e("div",f,g)),[[E,{duration:800}]])])]),_:1})]),_:1})])}return q({render:w},{})}(),"render-demo-1":function(){const{renderList:o,Fragment:a,openBlock:s,createElementBlock:e,toDisplayString:u,createTextVNode:p,resolveDirective:l,withDirectives:c,normalizeStyle:i,createElementVNode:r,resolveComponent:k,withCtx:v,createVNode:_}=T,b={class:"ripple-changeTextColor"},f={class:"ripple-changeTextColor"};function d(w,x){const I=k("d-col"),F=k("d-row"),C=l("ripple");return s(),e("div",null,[_(F,null,{default:v(()=>[_(I,{span:12},{default:v(()=>[r("ul",null,[(s(),e(a,null,o([{color:"#409EFF",text:"Item with Primary ripple"},{color:"#67C23A",text:"Item with Success ripple"},{color:"#E6A23C",text:"Item with Warning ripple"},{color:"#F56C6C",text:"Item with Danger ripple"},{color:"#909399",text:"Item with Info ripple"}],m=>r("li",{style:i({color:m.color})},[c((s(),e("div",b,[p(u(m.text),1)])),[[C,{duration:300}]])],4)),64))])]),_:1}),_(I,{span:12},{default:v(()=>[r("ul",null,[(s(),e(a,null,o([{color:"#409EFF",text:"Item with Primary ripple"},{color:"#67C23A",text:"Item with Success ripple"},{color:"#E6A23C",text:"Item with Warning ripple"},{color:"#F56C6C",text:"Item with Danger ripple"},{color:"#909399",text:"Item with Info ripple"}],(m,E)=>r("li",{style:i({color:m.color})},[c((s(),e("div",f,[p(u(m.text),1)])),[[C,{duration:300,color:`${m.color.slice(0,4)}`}]])],4)),64))])]),_:1})]),_:1})])}return q({render:d},{})}(),"render-demo-2":function(){const{createTextVNode:o,resolveComponent:a,resolveDirective:s,withCtx:e,openBlock:u,createBlock:p,withDirectives:l,createVNode:c,createElementBlock:i}=T,r=o("Text"),k=o("Text dark");function v(b,f){const d=a("d-button"),g=a("d-col"),w=a("d-row"),x=s("ripple");return u(),i("div",null,[c(w,null,{default:e(()=>[c(g,{span:6},{default:e(()=>[l((u(),p(d,{variant:"text",style:{"margin-right":"20px"}},{default:e(()=>[r]),_:1})),[[x,{duration:300}]])]),_:1}),c(g,{span:6},{default:e(()=>[l((u(),p(d,{variant:"text-dark",style:{"margin-right":"20px"}},{default:e(()=>[k]),_:1})),[[x,{duration:300}]])]),_:1}),c(g,{span:6},{default:e(()=>[l(c(d,{icon:"add",variant:"text-dark",title:"add"},null,512),[[x,{duration:300}]])]),_:1}),c(g,{span:6},{default:e(()=>[l(c(d,{icon:"delete",variant:"text-dark",title:"delete"},null,512),[[x,{duration:300}]])]),_:1})]),_:1})])}return q({render:v},{})}(),"render-demo-3":function(){const{resolveComponent:o,createVNode:a,createTextVNode:s,createElementVNode:e,resolveDirective:u,withCtx:p,openBlock:l,createBlock:c,withDirectives:i,createElementBlock:r}=T,k=s(" DEVUI Course "),v=e("span",null,"DevUI",-1),_=s(" DEVUI is a free open-source and common solution for the front end of enterprise mid- and back-end products. Its design values are basedon... "),b={class:"card-block"},f=e("span",null,"12",-1),d={class:"card-block"},g=e("span",null,"8",-1),w={class:"card-block"},x=e("span",null,"8",-1);function I(C,m){const E=o("d-avatar"),V=o("d-icon"),S=o("d-card"),U=u("ripple");return l(),r("div",null,[i((l(),c(S,{class:"d-card",src:"https://devui.design/components/assets/image1.png"},{cardAvatar:p(()=>[a(E,{name:"DevUI"})]),cardTitle:p(()=>[k]),cardSubtitle:p(()=>[a(V,{name:"company-member"}),v]),cardContent:p(()=>[_]),cardActions:p(()=>[e("div",b,[a(V,{name:"like"}),f]),e("div",d,[a(V,{name:"star-o"}),g]),e("div",w,[a(V,{name:"message"}),x])]),_:1},8,["src"])),[[U,{duration:300}]])])}return q({render:I},{})}()}},cn='{"title":"RippleDirective","description":"","frontmatter":{},"headers":[{"level":3,"title":"When to Use","slug":"when-to-use"},{"level":3,"title":"Custom color","slug":"custom-color"},{"level":3,"title":"Change the ripple color dynamically by changing the text color or the ripple color","slug":"change-the-ripple-color-dynamically-by-changing-the-text-color-or-the-ripple-color"},{"level":3,"title":"Ripple in components","slug":"ripple-in-components"},{"level":3,"title":"Some components provide the ripple prop that allows you to control the ripple effect.","slug":"some-components-provide-the-ripple-prop-that-allows-you-to-control-the-ripple-effect"},{"level":3,"title":"API","slug":"api"}],"relativePath":"en-US/components/ripple/index.md","lastUpdated":1653661678237}',R=A('<h1 id="rippledirective" tabindex="-1">RippleDirective <a class="header-anchor" href="#rippledirective" aria-hidden="true">#</a></h1><p><span color="#409EFF"><code>v-ripple</code></span>The v-ripple directive is used to show action from a user. It can be applied to any block level element.<span color="#409EFF"><code>tips: It can be applied to any block level element.</code></span></p><h3 id="when-to-use" tabindex="-1">When to Use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3>',3),j=n("div",null,[t("User can be use Basic ripple functionality can be enabled just by using v-ripple directive on a component or an HTML element "),n("span",{color:"#409EFF"},[n("code",null,"v-ripple")]),t("Basic ripple functionality "),n("span",{color:"#409EFF"},[n("code",null,"v-ripple")]),t(" Directive "),n("code",null,"v-ripple"),t(" Accept an object")],-1),O=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),Y=n("h3",{id:"custom-color",tabindex:"-1"},[t("Custom color "),n("a",{class:"header-anchor",href:"#custom-color","aria-hidden":"true"},"#")],-1),G=n("h3",{id:"change-the-ripple-color-dynamically-by-changing-the-text-color-or-the-ripple-color",tabindex:"-1"},[t("Change the ripple color dynamically by changing the text color or the ripple color "),n("a",{class:"header-anchor",href:"#change-the-ripple-color-dynamically-by-changing-the-text-color-or-the-ripple-color","aria-hidden":"true"},"#")],-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),K=n("h3",{id:"ripple-in-components",tabindex:"-1"},[t("Ripple in components "),n("a",{class:"header-anchor",href:"#ripple-in-components","aria-hidden":"true"},"#")],-1),Q=n("h3",{id:"some-components-provide-the-ripple-prop-that-allows-you-to-control-the-ripple-effect",tabindex:"-1"},[t("Some components provide the ripple prop that allows you to control the ripple effect. "),n("a",{class:"header-anchor",href:"#some-components-provide-the-ripple-prop-that-allows-you-to-control-the-ripple-effect","aria-hidden":"true"},"#")],-1),X=n("p",null,"Button Component",-1),Z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),nn=n("p",null,"Card Component",-1),tn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),an=A('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">parameter</th><th style="text-align:center;">type</th><th style="text-align:center;">default</th><th style="text-align:center;">introduce</th></tr></thead><tbody><tr><td style="text-align:center;">color</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>#00000050</code></td><td style="text-align:center;">Choose Default current text color</td></tr><tr><td style="text-align:center;">initial-opacity</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;"><code>0.1</code></td><td style="text-align:center;">Choose Initial interaction Opacity size</td></tr><tr><td style="text-align:center;">final-opacity</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;"><code>0.1</code></td><td style="text-align:center;">Choose, end the interactive effect and press the Opacity size for a long time</td></tr><tr><td style="text-align:center;">duration</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;"><code>400</code></td><td style="text-align:center;">Choose, duration</td></tr><tr><td style="text-align:center;">easing</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>ease-out</code></td><td style="text-align:center;">Choose, animation easing</td></tr><tr><td style="text-align:center;">delay</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;"><code>75</code></td><td style="text-align:center;">Choose, slow animation is delayed after debouceTime time.</td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;"><code>false</code></td><td style="text-align:center;">Choose, disabled ripple effect</td></tr></tbody></table>',2);function sn(o,a,s,e,u,p){const l=D("render-demo-0"),c=D("demo"),i=D("render-demo-1"),r=D("render-demo-2"),k=D("render-demo-3");return H(),M("div",null,[R,y(c,{sourceCode:`<template>
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
`},{description:h(()=>[j]),highlight:h(()=>[O]),default:h(()=>[y(l)]),_:1}),Y,G,y(c,{sourceCode:`<template>
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
`},{highlight:h(()=>[J]),default:h(()=>[y(i)]),_:1}),K,Q,X,y(c,{sourceCode:`<template>
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
`},{highlight:h(()=>[Z]),default:h(()=>[y(r)]),_:1}),nn,y(c,{sourceCode:`<template>
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
`},{highlight:h(()=>[tn]),default:h(()=>[y(k)]),_:1}),an])}var pn=W($,[["render",sn]]);export{cn as __pageData,pn as default};
